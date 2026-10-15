import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { safeGetItem, safeSetItem, safeRemoveItem } from './storage';

export interface OnboardingStatusResult {
  isNewUserWithNewEmail: boolean;
  targetScreen: 'main' | 'onboarding' | 'setup';
  reason: string;
}

/**
 * Checks whether an authenticated user is a brand new user registering with a new email
 * or an existing returning user.
 * 
 * CORE RULE:
 * Welcoming screens (Onboarding), Grade/Academic Track selection (AcademicSetup),
 * and the Welcome Celebration Modal (WelcomeCelebrationModal) must ONLY EVER be shown ONCE,
 * and ONLY to a brand new user logging in with a new email.
 * 
 * Any returning user, existing email, or already completed user MUST bypass straight to 'main'.
 */
export async function determineUserOnboardingRoute(currentUser: User): Promise<OnboardingStatusResult> {
  const uid = currentUser.uid;
  const email = (currentUser.email || '').toLowerCase().trim();

  // 1. FAST-PATH: Local device storage check
  const localOnboardingDone = safeGetItem(`onboarding_completed_${uid}`) === 'true';
  const localSetupDone = safeGetItem(`academic_setup_completed_${uid}`) === 'true';
  const localIsComplete = safeGetItem(`isOnboardingComplete_${uid}`) === 'true';
  const localPenguinSeen = safeGetItem(`welcome_penguin_seen_${uid}`) === 'true';
  const localEmailDone = email ? safeGetItem(`onboarding_completed_email_${email}`) === 'true' : false;

  if (localSetupDone || localIsComplete || (localOnboardingDone && localPenguinSeen) || localEmailDone) {
    console.log(`[UserOnboarding] User ${uid} (${email}) already completed onboarding locally. Routing to main.`);
    return {
      isNewUserWithNewEmail: false,
      targetScreen: 'main',
      reason: 'Local storage confirms user previously completed setup'
    };
  }

  // 2. CHECK ACCOUNT AGE (Firebase Auth metadata)
  // If the account was created more than 5 minutes ago, it is an existing user returning, NOT a fresh registration!
  const creationTime = currentUser.metadata.creationTime ? new Date(currentUser.metadata.creationTime).getTime() : 0;
  const now = Date.now();
  const accountAgeMs = creationTime > 0 ? (now - creationTime) : 0;
  const isExistingAccountByAge = accountAgeMs > 5 * 60 * 1000; // Older than 5 minutes

  // 3. FIRESTORE DATABASE CHECKS
  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnap = await getDoc(userDocRef);

    let emailDocSnap = null;
    if (email) {
      const emailDocRef = doc(db, 'allocated_emails', email);
      emailDocSnap = await getDoc(emailDocRef);
    }

    // Check if Firestore user document already exists
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();

      // Check explicit completion flags or academic profile selections
      const hasCompletedInFirestore = 
        userData?.isOnboardingComplete === true ||
        userData?.isOnboardingCompleted === true ||
        userData?.academic_setup_completed === true ||
        userData?.welcome_penguin_seen === true ||
        Boolean(userData?.grade || userData?.academic_grade) ||
        Boolean(userData?.stream || userData?.academic_stream) ||
        Boolean(userData?.country || userData?.academic_country);

      if (hasCompletedInFirestore || isExistingAccountByAge) {
        console.log(`[UserOnboarding] Returning user detected for ${uid} in Firestore. Marking permanent completion & routing to main.`);
        await markUserSetupAsPermanentlyCompleted(uid, email);
        return {
          isNewUserWithNewEmail: false,
          targetScreen: 'main',
          reason: hasCompletedInFirestore 
            ? 'Firestore document confirms setup completed' 
            : 'Account is older than 5 minutes (existing returning user)'
        };
      }
    }

    // Check allocated_emails collection
    if (emailDocSnap && emailDocSnap.exists()) {
      const emailData = emailDocSnap.data();
      const allocatedAt = emailData?.allocatedAt ? new Date(emailData.allocatedAt).getTime() : 0;
      const emailAgeMs = allocatedAt > 0 ? (now - allocatedAt) : 0;

      // If email was allocated more than 5 minutes ago or completed flags are present:
      if (emailData?.hasCompletedOnboarding === true || emailData?.hasCompletedAcademicSetup === true || emailAgeMs > 5 * 60 * 1000) {
        console.log(`[UserOnboarding] Email ${email} was previously registered/allocated. Routing to main.`);
        await markUserSetupAsPermanentlyCompleted(uid, email);
        return {
          isNewUserWithNewEmail: false,
          targetScreen: 'main',
          reason: 'Email is an existing allocated email in database'
        };
      }
    }

    // If account was created in the past, treat as existing user
    if (isExistingAccountByAge) {
      console.log(`[UserOnboarding] Account age (${Math.round(accountAgeMs / 1000)}s) indicates returning user. Routing to main.`);
      await markUserSetupAsPermanentlyCompleted(uid, email);
      return {
        isNewUserWithNewEmail: false,
        targetScreen: 'main',
        reason: 'Firebase Auth metadata indicates existing account'
      };
    }

    // If we reached here, this is truly a BRAND NEW USER with a BRAND NEW EMAIL!
    // Check if they already completed the 4 onboarding slides in this immediate session:
    if (localOnboardingDone) {
      console.log(`[UserOnboarding] Brand new user ${uid} in progress: Onboarding completed, presenting AcademicSetup.`);
      return {
        isNewUserWithNewEmail: true,
        targetScreen: 'setup',
        reason: 'New user in progress: finished onboarding, needs academic setup'
      };
    }

    console.log(`[UserOnboarding] Brand new user ${uid} with new email ${email}: Showing Onboarding screen for the first time.`);
    return {
      isNewUserWithNewEmail: true,
      targetScreen: 'onboarding',
      reason: 'Brand new user with new email: showing onboarding for the first and only time'
    };

  } catch (err) {
    console.warn('[UserOnboarding] Database check encountered an issue, checking fallbacks:', err);

    // If offline or Firestore error:
    if (isExistingAccountByAge || localSetupDone || localOnboardingDone || localIsComplete) {
      return {
        isNewUserWithNewEmail: false,
        targetScreen: 'main',
        reason: 'Fallback: existing account age or local storage indicates returning user'
      };
    }

    // Default to main for safety so users are never stuck in an onboarding loop
    return {
      isNewUserWithNewEmail: false,
      targetScreen: 'main',
      reason: 'Fallback: default to main to avoid blocking user'
    };
  }
}

/**
 * Permanently marks onboarding, academic setup, and welcome celebration as completed
 * for this user & email across localStorage and Firestore.
 */
export async function markUserSetupAsPermanentlyCompleted(uid: string, email?: string) {
  if (!uid) return;
  
  // 1. LocalStorage
  safeSetItem(`onboarding_completed_${uid}`, 'true');
  safeSetItem(`academic_setup_completed_${uid}`, 'true');
  safeSetItem(`isOnboardingComplete_${uid}`, 'true');
  safeSetItem(`welcome_penguin_seen_${uid}`, 'true');
  safeSetItem('welcome_penguin_seen_global', 'true');
  safeSetItem('onboarding_completed', 'true');
  safeRemoveItem(`pending_welcome_celebration_${uid}`);
  safeRemoveItem('pending_welcome_celebration');

  const cleanEmail = (email || '').toLowerCase().trim();
  if (cleanEmail) {
    safeSetItem(`onboarding_completed_email_${cleanEmail}`, 'true');
  }

  // 2. Firestore Sync
  try {
    await setDoc(doc(db, 'users', uid), {
      isOnboardingComplete: true,
      isOnboardingCompleted: true,
      academic_setup_completed: true,
      welcome_penguin_seen: true,
      updatedAt: new Date().toISOString()
    }, { merge: true });

    if (cleanEmail) {
      await setDoc(doc(db, 'allocated_emails', cleanEmail), {
        hasCompletedOnboarding: true,
        hasCompletedAcademicSetup: true,
        hasSeenWelcome: true,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    }
  } catch (dbErr) {
    console.warn('[UserOnboarding] Failed to sync permanent completion to Firestore:', dbErr);
  }
}
