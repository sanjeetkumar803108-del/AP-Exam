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

  // 1. FAST-PATH: Local device storage check for THIS user
  const localSetupDone = safeGetItem(`academic_setup_completed_${uid}`) === 'true';
  const localIsComplete = safeGetItem(`isOnboardingComplete_${uid}`) === 'true';
  const localEmailDone = email ? safeGetItem(`onboarding_completed_email_${email}`) === 'true' : false;

  if (localSetupDone || localIsComplete || localEmailDone) {
    console.log(`[UserOnboarding] Returning user ${uid} (${email}) already completed setup locally. Routing to main.`);
    return {
      isNewUserWithNewEmail: false,
      targetScreen: 'main',
      reason: 'Local storage confirms user previously completed setup'
    };
  }

  // 2. FIRESTORE DATABASE CHECKS
  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnap = await getDoc(userDocRef);

    let emailDocSnap = null;
    if (email) {
      const emailDocRef = doc(db, 'allocated_emails', email);
      emailDocSnap = await getDoc(emailDocRef);
    }

    // Check if Firestore user document already exists and has completed setup
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();

      // Check explicit completion flags or academic profile selections
      const hasCompletedInFirestore = 
        userData?.isOnboardingComplete === true ||
        userData?.isOnboardingCompleted === true ||
        userData?.academic_setup_completed === true ||
        Boolean(userData?.grade || userData?.academic_grade) ||
        Boolean(userData?.stream || userData?.academic_stream) ||
        Boolean(userData?.country || userData?.academic_country);

      if (hasCompletedInFirestore) {
        console.log(`[UserOnboarding] Returning user detected for ${uid} in Firestore. Routing to main.`);
        safeSetItem(`academic_setup_completed_${uid}`, 'true');
        safeSetItem(`isOnboardingComplete_${uid}`, 'true');
        if (email) safeSetItem(`onboarding_completed_email_${email}`, 'true');
        return {
          isNewUserWithNewEmail: false,
          targetScreen: 'main',
          reason: 'Firestore document confirms setup completed'
        };
      }
    }

    // Check allocated_emails collection
    if (emailDocSnap && emailDocSnap.exists()) {
      const emailData = emailDocSnap.data();
      if (emailData?.hasCompletedOnboarding === true || emailData?.hasCompletedAcademicSetup === true) {
        console.log(`[UserOnboarding] Email ${email} was previously completed in allocated_emails. Routing to main.`);
        safeSetItem(`academic_setup_completed_${uid}`, 'true');
        safeSetItem(`isOnboardingComplete_${uid}`, 'true');
        safeSetItem(`onboarding_completed_email_${email}`, 'true');
        return {
          isNewUserWithNewEmail: false,
          targetScreen: 'main',
          reason: 'Email is an existing completed email in database'
        };
      }
    }

    // Check if user already finished the 4 onboarding slides:
    const localSlidesDone = 
      safeGetItem(`onboarding_slides_completed_${uid}`) === 'true' || 
      safeGetItem(`onboarding_completed_${uid}`) === 'true';
    const remoteSlidesDone = userDocSnap.exists() && userDocSnap.data()?.onboarding_slides_completed === true;

    if (localSlidesDone || remoteSlidesDone) {
      console.log(`[UserOnboarding] Brand new user ${uid} in progress: Onboarding completed, presenting AcademicSetup.`);
      return {
        isNewUserWithNewEmail: true,
        targetScreen: 'setup',
        reason: 'New user in progress: finished onboarding slides, needs academic setup'
      };
    }

    // If we reached here, this is truly a BRAND NEW USER with a BRAND NEW EMAIL!
    console.log(`[UserOnboarding] Brand new user ${uid} with new email ${email}: Showing Onboarding screen for the first time.`);
    return {
      isNewUserWithNewEmail: true,
      targetScreen: 'onboarding',
      reason: 'Brand new user with new email: showing onboarding for the first and only time'
    };

  } catch (err) {
    console.warn('[UserOnboarding] Database check encountered an issue, checking fallbacks:', err);

    if (localSetupDone || localIsComplete || localEmailDone) {
      return {
        isNewUserWithNewEmail: false,
        targetScreen: 'main',
        reason: 'Fallback: local storage confirms returning user'
      };
    }

    return {
      isNewUserWithNewEmail: true,
      targetScreen: 'onboarding',
      reason: 'Fallback: show onboarding for new user'
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
  safeSetItem(`onboarding_slides_completed_${uid}`, 'true');
  safeSetItem(`academic_setup_completed_${uid}`, 'true');
  safeSetItem(`isOnboardingComplete_${uid}`, 'true');
  safeSetItem(`welcome_penguin_seen_${uid}`, 'true');
  safeRemoveItem(`pending_welcome_celebration_${uid}`);
  safeRemoveItem('pending_welcome_celebration');

  const cleanEmail = (email || '').toLowerCase().trim();
  if (cleanEmail) {
    safeSetItem(`onboarding_completed_email_${cleanEmail}`, 'true');
    safeSetItem(`welcome_penguin_seen_email_${cleanEmail}`, 'true');
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
