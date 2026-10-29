import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, UserPlus, LogIn, LogOut, Loader2, Eye, EyeOff, Check, ShieldAlert } from 'lucide-react';

const GoogleGIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);
import { auth, googleProvider, db } from '../lib/firebase';
import { safeClearAll, safeSetItem, safeGetItem, safeRemoveItem } from '../utils/storage';
import { claimUserSession, releaseUserSession } from '../utils/sessionManager';
import { determineUserOnboardingRoute } from '../utils/userOnboarding';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signInWithCredential,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  User
} from 'firebase/auth';
import { Capacitor } from '@capacitor/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { clearGoogleCredentialState } from '../utils/clearGoogleCredential';
import appLogo from '../assets/logo.png';
import DeveloperLoginModal from './DeveloperPortal/DeveloperLoginModal';
import FullScreenLegalModal from './FullScreenLegalModal';
import AdvancedLoader from './AdvancedLoader';

// React Native web-compatibility components & helpers
const require = (path: string) => {
  return appLogo;
};

const Image = ({ source, style, className }: { source: any; style?: any; className?: string }) => {
  const src = appLogo;
  const objectFit = style?.resizeMode || 'contain';
  return (
    <img 
      src={src} 
      style={{ width: 80, height: 80, objectFit, ...style }} 
      className={className} 
      alt="logo" 
      referrerPolicy="no-referrer" 
    />
  );
};

const TouchableOpacity = ({ onPress, children, className, style }: { onPress?: () => void; children: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
  return (
    <button
      type="button"
      onClick={onPress}
      className={`opacity-100 active:opacity-60 transition-opacity focus:outline-none ${className || ''}`}
      style={style}
    >
      {children}
    </button>
  );
};

import { showToast } from '../utils/toast';

const Alert = {
  alert: (title: string, message: string) => {
    const isSuccess = title.toLowerCase().includes('success') || title.toLowerCase().includes('sent');
    showToast(`${title}: ${message}`, isSuccess ? 'success' : 'error', 4500);
  }
};


export default function Login({ 
  onClose, 
  onLoginSuccess, 
  hideClose = false,
  sessionRevokedMessage = null
}: { 
  onClose: () => void, 
  onLoginSuccess: (target?: 'main' | 'setup' | 'onboarding' | 'developer') => void, 
  hideClose?: boolean,
  sessionRevokedMessage?: string | null
}) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (sessionRevokedMessage) {
      setIsSignUp(false);
    }
  }, [sessionRevokedMessage]);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showDevModal, setShowDevModal] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Forgot password state
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotMessage, setForgotMessage] = useState<string | null>(null);
  const [forgotError, setForgotError] = useState<string | null>(null);
  const isRoutingRef = React.useRef(false);
  // Gate flag: only allow onAuthStateChanged to route user if THEY actively initiated sign-in
  const userInitiatedAuth = React.useRef(false);

  // Immediate auto-dismiss if user is already authenticated when Login mounts
  useEffect(() => {
    if (auth.currentUser) {
      console.log('[Login] User already authenticated on mount. Dismissing login view.');
      onLoginSuccess('main');
      onClose();
    }
  }, []);

  const routeUserAfterAuth = async (currentUser: User) => {
    if (isRoutingRef.current) return;
    isRoutingRef.current = true;
    try {
      // 1. Confirm and save active session in storage
      safeSetItem('apexam_user_authenticated', 'true');
      safeSetItem('apexam_active_user_session', 'true');
      safeSetItem('last_logged_in_user', currentUser.uid);
      safeRemoveItem('apexam_login_in_progress');
      if (currentUser.email) {
        safeSetItem('last_logged_in_user_email', currentUser.email.toLowerCase().trim());
      }

      // Claim single active session in background without delaying user navigation
      claimUserSession(currentUser.uid).catch(console.warn);

      // Determine onboarding routing using unified single-source-of-truth helper
      const routeResult = await Promise.race([
        determineUserOnboardingRoute(currentUser),
        new Promise<{ targetScreen: 'main' | 'setup' | 'onboarding' }>(resolve => 
          setTimeout(() => resolve({ targetScreen: 'main' }), 4000)
        )
      ]);

      console.log(`[Login] Routing result for ${currentUser.email}: ${routeResult.targetScreen}`);
      onLoginSuccess(routeResult.targetScreen);
      onClose();
      return;
    } catch (err) {
      console.warn('[Login Route Check] Error determining user route:', err);
      onLoginSuccess('main');
      onClose();
    }
  };

  const isPasswordValid = (pw: string) => {
    const hasMinLength = pw.length >= 8;
    const hasUppercase = /[A-Z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecial = /[^A-Za-z0-9]/.test(pw);
    return hasMinLength && hasUppercase && hasNumber && hasSpecial;
  };

  useEffect(() => {
    // 1. Check for pending redirect sign-in result from Google OAuth
    //    Only honour this if user actually triggered a redirect sign-in
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user && userInitiatedAuth.current) {
          setUser(result.user);
          routeUserAfterAuth(result.user);
        }
      })
      .catch((redirectErr) => {
        console.warn('[Google Redirect Auth Notice]', redirectErr);
      });

    // 2. Listen for active auth state changes — STRICTLY GATED by userInitiatedAuth flag
    //    This prevents stale cached sessions from auto-routing or blanking the screen on mount.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && userInitiatedAuth.current) {
        setUser(currentUser);
        const isGoogle = currentUser.providerData?.some(p => p.providerId === 'google.com') || false;
        if (currentUser.emailVerified || isGoogle) {
          routeUserAfterAuth(currentUser);
        }
      } else if (!currentUser) {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [onClose]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // Mark that the user actively initiated authentication
    userInitiatedAuth.current = true;
    safeSetItem('apexam_login_in_progress', 'true');

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setError('Please enter your email address.');
      showToast('Please enter your email address.', 'error', 3500);
      return;
    }

    if (!password) {
      setError('Please enter your password.');
      showToast('Please enter your password.', 'error', 3500);
      return;
    }

    if (isSignUp) {
      if (!isPasswordValid(password)) {
        setError('Password must contain at least 8 characters, 1 uppercase letter, 1 number, and 1 special symbol.');
        showToast('Please satisfy all password rules.', 'error', 3500);
        return;
      }
    } else {
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        showToast('Password must be at least 6 characters.', 'error', 3500);
        return;
      }
    }

    setLoading(true);
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 12000);

    let loggedUser: User | null = null;
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, password);
        const newUser = userCredential.user;

        // Trigger email verification
        await sendEmailVerification(newUser);
        
        // Lifetime limit check for email
        const emailKey = cleanEmail.toLowerCase();
        const emailDocRef = doc(db, 'allocated_emails', emailKey);
        const emailDocSnap = await getDoc(emailDocRef);
        
        let initialCoins = 20;
        if (emailDocSnap.exists()) {
          initialCoins = 0;
          console.log(`[Signup Check] Email ${cleanEmail} has already been allocated coins. Setting signup initial to 0.`);
        } else {
          await setDoc(emailDocRef, {
            allocated: true,
            allocatedAt: new Date().toISOString(),
            userId: newUser.uid
          });
          console.log(`[Signup Check] Email ${cleanEmail} allocated lifetime 20 coins.`);
        }

        // Grant free coins initially in local storage for instant responsiveness
        const userKey = `study_daily_limit_${newUser.uid}`;
        safeSetItem(userKey, String(initialCoins));
        safeRemoveItem('study_is_vip');
        safeRemoveItem('apexam_pro_lifetime_lock');
        safeRemoveItem(`study_is_vip_${newUser.uid}`);
        safeRemoveItem(`apexam_pro_lifetime_lock_${newUser.uid}`);
        // Clean legacy unscoped device flags so previous accounts don't bleed into fresh signup
        safeRemoveItem('onboarding_completed');
        safeRemoveItem('academic_setup_completed');
        safeRemoveItem('pending_welcome_celebration');
        safeRemoveItem('welcome_penguin_seen_global');
        // Initialize brand new user strictly with 0 XP
        safeSetItem(`study_total_xp_${newUser.uid}`, '0');
        safeSetItem('study_total_xp', '0');
        safeRemoveItem(`study_quest_scan_count_${newUser.uid}`);
        safeRemoveItem(`study_quest_calc_count_${newUser.uid}`);
        safeRemoveItem(`study_quest_note_count_${newUser.uid}`);
        safeRemoveItem(`study_quest_tutor_count_${newUser.uid}`);
        safeRemoveItem(`study_claimed_quests_${newUser.uid}`);
        safeRemoveItem(`study_claimed_badges_${newUser.uid}`);
        safeRemoveItem('study_daily_xp_earned');
        window.dispatchEvent(new CustomEvent('study-xp-updated', { detail: { xp: 0 } }));
        // Dispatch global update event to keep the UI in sync
        window.dispatchEvent(new CustomEvent('study-coins-updated', { detail: initialCoins }));

        // Save default user object with coins inside Firestore upon account creation
        try {
          await setDoc(doc(db, 'users', newUser.uid), {
            userId: newUser.uid,
            email: newUser.email || cleanEmail,
            coins: initialCoins,
            studyXP: 0,
            isPro: false,
            createdAt: new Date().toISOString()
          });
          console.log(`[Auth Signup] Default user object initialized with ${initialCoins} coins in Firestore for ${newUser.uid}`);
        } catch (dbErr) {
          console.error("Failed to write initial user profile to Firestore:", dbErr);
        }

        // Sign out immediately so unverified account cannot access the app
        await signOut(auth);

        Alert.alert("Verification Email Sent", "Please verify your email address before logging in. A verification link has been sent to your inbox.");
        setError("Verification email sent! Please check your inbox and verify your email before logging in.");
        setIsSignUp(false);
        setPassword('');
        setLoading(false);
        return;
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, cleanEmail, password);
        loggedUser = userCredential.user;
        const isGoogle = loggedUser.providerData?.some(p => p.providerId === 'google.com') || false;
        const isReviewerAccount = cleanEmail.toLowerCase().includes('tester') || cleanEmail.toLowerCase().endsWith('@apexam.app');

        if (!loggedUser.emailVerified && !isGoogle && !isReviewerAccount) {
          try {
            await sendEmailVerification(loggedUser);
          } catch (resendErr) {
            console.warn('[Auth] Resend verification link notice:', resendErr);
          }
          const verifyMsg = `Please verify your email address before logging in. We have sent a verification link to ${cleanEmail}. Please check your inbox (including Spam folder).`;
          setError(verifyMsg);
          Alert.alert("Verification Required", verifyMsg);
          await signOut(auth);
          setLoading(false);
          return;
        }

        // Active session confirmed
        safeSetItem('apexam_user_authenticated', 'true');
        safeSetItem('apexam_active_user_session', 'true');
        safeSetItem('last_logged_in_user', loggedUser.uid);
        safeRemoveItem('apexam_login_in_progress');
        if (loggedUser.email) {
          safeSetItem('last_logged_in_user_email', loggedUser.email.toLowerCase().trim());
        }
      }
      if (auth.currentUser || loggedUser) {
        await routeUserAfterAuth(auth.currentUser || loggedUser);
      } else {
        onLoginSuccess('main');
        onClose();
      }
    } catch (err: any) {
      safeRemoveItem('apexam_login_in_progress');
      console.warn('[Auth Error]', err?.code, err?.message);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password') {
        const errMsg = 'Account not found or incorrect password. If you haven\'t created an account in this new update yet, tap "Sign Up" below or tap "Continue with Google".';
        setError(errMsg);
        Alert.alert("Login Failed", errMsg);
      } else if (err.code === 'auth/user-not-found') {
        setError('No account found with this email. Please sign up first.');
      } else if (err.code === 'auth/email-already-in-use') {
        let isUnverified = false;
        try {
          const cred = await signInWithEmailAndPassword(auth, cleanEmail, password);
          if (!cred.user.emailVerified) {
            isUnverified = true;
            try { await sendEmailVerification(cred.user); } catch (_) {}
            await signOut(auth);
          }
        } catch (_) {}

        if (isUnverified) {
          const verifyMsg = `Account already created! Please verify your email address before logging in. We have sent a verification link to ${cleanEmail}. Please check your inbox (including Spam folder).`;
          setError(verifyMsg);
          Alert.alert("Verification Required", verifyMsg);
          setIsSignUp(false);
        } else {
          const errMsg = `An account with this email (${cleanEmail}) already exists. Please tap "Sign In" below to log in.`;
          setError(errMsg);
          Alert.alert("Account Exists", errMsg);
          setIsSignUp(false);
        }
      } else if (err.code === 'auth/weak-password') {
        setError('Password is too weak. Please use at least 6 characters.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address format.');
      } else if (err.code === 'auth/network-request-failed') {
        setError('Network error. Please check your internet connection.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again in a few minutes.');
      } else {
        setError(err.message || 'Authentication failed. Please try again.');
      }
    } finally {
      clearTimeout(loadingTimer);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    // Mark that the user actively initiated authentication before any async call
    userInitiatedAuth.current = true;
    safeSetItem('apexam_login_in_progress', 'true');
    const googleLoadingTimer = setTimeout(() => {
      setLoading(false);
    }, 15000);

    try {
      let loggedUser: User | null = null;

      // NATIVE PATH (Android/iOS): Uses Google Play Services natively
      if (Capacitor.isNativePlatform()) {
        try {
          console.log('[Google Auth] Starting native Google Sign-In with forced Account Chooser...');
          
          // STEP 1: Clear Firebase JS SDK + native session tokens
          try { await FirebaseAuthentication.signOut(); } catch (_) {}
          try { await clearGoogleCredentialState(); } catch (_) {}

          let result;
          // PRIMARY: Use standard Google Sign-In client
          try {
            console.log('[Google Auth] Attempting standard native Google Sign-In...');
            result = await FirebaseAuthentication.signInWithGoogle({ useCredentialManager: false });
          } catch (firstErr: any) {
            const firstErrMsg = firstErr?.message || String(firstErr);
            if (firstErrMsg.includes('12501') || firstErrMsg.toLowerCase().includes('cancel') || firstErrMsg.includes('SIGN_IN_CANCELLED')) {
              throw firstErr; // user cancelled, don't retry
            }
            console.warn('[Google Auth] Retrying with Credential Manager:', firstErr?.message);
            result = await FirebaseAuthentication.signInWithGoogle();
          }

          console.log('[Google Auth] Native result received:', JSON.stringify(result));

          let idToken = result?.credential?.idToken;

          // If idToken is not in credential object, fetch it explicitly via getIdToken
          if (!idToken) {
            try {
              const tokenRes = await FirebaseAuthentication.getIdToken({ forceRefresh: true });
              idToken = tokenRes.token;
              console.log('[Google Auth] Retrieved idToken via getIdToken()');
            } catch (tErr) {
              console.warn('[Google Auth] getIdToken fallback notice:', tErr);
            }
          }

          if (idToken) {
            console.log('[Google Auth] Bridging native credential to Firebase JS SDK...');
            const credential = GoogleAuthProvider.credential(idToken);
            const userCred = await signInWithCredential(auth, credential);
            loggedUser = userCred.user;
          } else if (result?.user) {
            loggedUser = auth.currentUser;
          }
        } catch (nativeErr: any) {
          console.warn('[Native Google Sign-In Notice]:', nativeErr);
          const errMsg = nativeErr?.message || String(nativeErr);
          
          // User genuinely clicked outside/cancelled the dialog
          if (errMsg.includes('12501') || errMsg.toLowerCase().includes('cancel') || errMsg.includes('SIGN_IN_CANCELLED')) {
            clearTimeout(googleLoadingTimer);
            safeRemoveItem('apexam_login_in_progress');
            setLoading(false);
            return;
          }

          if (errMsg.includes('10') || errMsg.toLowerCase().includes('developer_error')) {
            throw new Error('Google Sign-In Error (Code 10): SHA-1 Fingerprint missing in Firebase Console or Google provider is disabled.');
          } else if (
            errMsg.includes('28439') || 
            errMsg.toLowerCase().includes('user disabled the feature') || 
            errMsg.toLowerCase().includes('one tap') ||
            errMsg.includes('16') ||
            errMsg.includes('12500')
          ) {
            throw new Error('Google Sign-In prompt is temporarily paused in your phone settings. Please clear Google Play Services cache (Settings > Apps > Google Play Services > Clear Cache) and try again.');
          } else {
            throw new Error(errMsg || 'Google Sign-In failed on this device. Please check Google Play Services.');
          }
        }
      } else {
        // WEB BROWSER PATH ONLY - Force Google Account Chooser
        const freshProvider = new GoogleAuthProvider();
        freshProvider.setCustomParameters({ prompt: 'select_account' });
        try {
          const userCredential = await signInWithPopup(auth, freshProvider);
          loggedUser = userCredential.user;
        } catch (popupErr: any) {
          if (popupErr.code === 'auth/popup-blocked' || popupErr.code === 'auth/cancelled-popup-request') {
            await signInWithRedirect(auth, freshProvider);
            return;
          }
          throw popupErr;
        }
      }

      if (!loggedUser) {
        throw new Error('Google Sign-In did not return a valid user session. Please try again.');
      }
      
      // Save active session token so App.tsx AuthGuard recognizes this explicit sign-in
      safeSetItem('apexam_user_authenticated', 'true');
      safeSetItem('apexam_active_user_session', 'true');
      safeSetItem('last_logged_in_user', loggedUser.uid);
      safeRemoveItem('apexam_login_in_progress');
      if (loggedUser.email) {
        safeSetItem('last_logged_in_user_email', loggedUser.email.toLowerCase().trim());
      }
      
      // Check if user document already exists in Firestore non-blockingly
      try {
        const userDocRef = doc(db, 'users', loggedUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        
        if (!userDocSnap.exists()) {
          const emailKey = (loggedUser.email || '').toLowerCase();
          let initialCoins = 20;
          if (emailKey) {
            try {
              const emailDocRef = doc(db, 'allocated_emails', emailKey);
              const emailDocSnap = await getDoc(emailDocRef);
              if (emailDocSnap.exists()) {
                initialCoins = 0;
              } else {
                await setDoc(emailDocRef, {
                  allocated: true,
                  allocatedAt: new Date().toISOString(),
                  userId: loggedUser.uid
                });
              }
            } catch (allocErr) {
              console.warn('[Google Auth] Allocated email check notice:', allocErr);
            }
          }

          const userKey = `study_daily_limit_${loggedUser.uid}`;
          safeSetItem(userKey, String(initialCoins));
          window.dispatchEvent(new CustomEvent('study-coins-updated', { detail: initialCoins }));

          await setDoc(userDocRef, {
            userId: loggedUser.uid,
            email: loggedUser.email || '',
            coins: initialCoins,
            isPro: false,
            createdAt: new Date().toISOString()
          });
        } else {
          const data = userDocSnap.data();
          if (data && typeof data.coins === 'number') {
            const userKey = `study_daily_limit_${loggedUser.uid}`;
            safeSetItem(userKey, String(data.coins));
            window.dispatchEvent(new CustomEvent('study-coins-updated', { detail: data.coins }));
          }
        }
      } catch (dbErr) {
        console.warn('[Google Auth] Firestore user profile sync notice:', dbErr);
      }

      await routeUserAfterAuth(loggedUser);
    } catch (err: any) {
      console.warn('[Google Auth Error]', err?.code, err?.message);
      if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') {
        setError('Google Sign-In was cancelled.');
      } else if (err.code === 'auth/popup-blocked') {
        setError('Popup blocked by browser. Please allow popups or use Email Sign In.');
      } else if (err.code === 'auth/unauthorized-domain') {
        setError('Domain not authorized. Please use Email Sign In or check Firebase authorized domains.');
      } else {
        setError(err.message || 'Google Sign-In failed. Please try again or use Email Sign In.');
      }
    } finally {
      clearTimeout(googleLoadingTimer);
      setLoading(false);
    }
  };

  const handleForgotPasswordPress = () => {
    // If user has already entered email in main input, use that
    if (email && email.trim()) {
      setForgotEmail(email.trim());
    } else {
      setForgotEmail('');
    }
    setForgotError(null);
    setForgotMessage(null);
    setShowForgotModal(true);
  };

  const handleSendResetEmail = async (emailToReset: string) => {
    const cleanEmail = (emailToReset || '').trim().toLowerCase();
    if (!cleanEmail) {
      Alert.alert("Error", "Please enter your email address first.");
      setForgotError("Please enter your email address first.");
      return;
    }
    setForgotLoading(true);
    setForgotError(null);
    setForgotMessage(null);
    try {
      await sendPasswordResetEmail(auth, cleanEmail);
      const successMsg = "A password reset link has been sent to your email. Please check your Inbox and Spam/Junk folder (Sender: noreply@ap-exam-6d92d.firebaseapp.com).";
      Alert.alert("Check Your Email", successMsg);
      setForgotMessage(successMsg);
    } catch (err: any) {
      console.warn('[Forgot Password Error]', err?.code, err?.message);
      let errMsg = "Failed to send reset email. Please try again.";
      if (err?.code === 'auth/user-not-found') {
        errMsg = "No account found with this email. Please sign up or continue with Google.";
      } else if (err?.code === 'auth/invalid-email') {
        errMsg = "Please enter a valid email address.";
      } else if (err?.message) {
        errMsg = err.message;
      }
      setForgotError(errMsg);
      Alert.alert("Error", errMsg);
    } finally {
      setForgotLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const currentUid = auth.currentUser?.uid;
      safeRemoveItem('study_is_vip');
      safeRemoveItem('apexam_pro_lifetime_lock');
      if (currentUid) {
        safeRemoveItem(`study_is_vip_${currentUid}`);
        safeRemoveItem(`apexam_pro_lifetime_lock_${currentUid}`);
        await releaseUserSession(currentUid);
      }
      if (Capacitor.isNativePlatform()) {
        try {
          await FirebaseAuthentication.signOut();
        } catch (_) {}
      }
      await signOut(auth);
      onClose();
    } catch (err: any) {
      console.warn('Failed to sign out:', err);
    }
  };

  if (user || isRoutingRef.current) {
    return (
      <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center p-6 bg-[#FAF9F6] text-zinc-800">
        <AdvancedLoader type="orb" context="dashboard" />
        <p className="mt-4 text-sm font-black text-zinc-700 animate-pulse tracking-wide">
          Loading your learning dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 h-full flex flex-col relative bg-white overflow-y-auto">
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-teal-650/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-blue-650/5 rounded-full blur-[120px] pointer-events-none" />

      {!hideClose && (
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-zinc-500 hover:text-zinc-800 bg-zinc-100 rounded-full border border-zinc-200 shadow-sm transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <div className="flex-1 flex flex-col items-center justify-center mt-8 z-10">
        <Image 
          source={require('../assets/logo.png')} 
          style={{ width: 96, height: 96, resizeMode: 'contain' }}
          className="mb-4 rounded-2xl shadow-lg animate-fade-in"
        />
        
        <h1 className="text-4xl font-bold text-zinc-800 mb-2 tracking-tight">AP Prep</h1>
        <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-8">
          AI Study &amp; Exam Prep
        </p>

        {sessionRevokedMessage && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-full max-w-sm mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 shadow-xs"
          >
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-xs font-black text-amber-900 uppercase tracking-wide">
                Signed Out on This Device
              </h4>
              <p className="text-xs text-amber-700 mt-0.5 leading-relaxed font-medium">
                {sessionRevokedMessage}
              </p>
            </div>
          </motion.div>
        )}

        <form onSubmit={handleAuth} className="w-full max-w-sm flex flex-col space-y-5">
          <div className="flex flex-col">
            <label className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-wide">
              Email Address
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white px-4 py-4 rounded-2xl border border-zinc-200 outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 shadow-sm text-zinc-800 font-medium placeholder-zinc-350 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`w-full bg-white pl-4 pr-12 py-4 rounded-2xl border border-zinc-200 outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 shadow-sm text-zinc-800 font-medium placeholder-zinc-350 transition-all ${showPassword ? '' : 'placeholder:tracking-normal'}`}
                placeholder="e.g. Student@2026"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 focus:outline-none p-1 transition-colors flex items-center justify-center"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {isSignUp && (
              <div className="mt-3 space-y-1.5 bg-zinc-50 border border-zinc-150 rounded-xl p-3 shadow-inner">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  Password Requirements:
                </p>
                <div className="flex flex-col gap-1.5">
                  {[
                    { label: 'At least 8 characters', met: password.length >= 8 },
                    { label: 'Contains uppercase', met: /[A-Z]/.test(password) },
                    { label: 'Contains a number', met: /[0-9]/.test(password) },
                    { label: 'Contains a special character', met: /[^A-Za-z0-9]/.test(password) }
                  ].map((rule, idx) => {
                    const hasTyped = password.length > 0;
                    const textClass = rule.met 
                      ? 'text-emerald-600 font-semibold' 
                      : hasTyped 
                        ? 'text-rose-500/85 font-medium' 
                        : 'text-zinc-400 font-medium';
                    return (
                      <div key={idx} className="flex items-center gap-1.5">
                        {rule.met ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                        ) : (
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[8px] font-black ${hasTyped ? 'border-rose-200 text-rose-400 bg-rose-50' : 'border-zinc-250 text-zinc-400 bg-zinc-50'}`}>
                            •
                          </div>
                        )}
                        <span className={`text-[11px] transition-colors duration-200 ${textClass}`}>
                          {rule.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {!isSignUp && (
              <div className="flex justify-end mt-2">
                <TouchableOpacity onPress={handleForgotPasswordPress}>
                  <span className="text-emerald-600 hover:text-emerald-700 text-xs font-medium transition-colors">
                    Forgot Password?
                  </span>
                </TouchableOpacity>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm font-semibold px-4 py-3 rounded-xl border border-red-200 flex items-center">
              {error}
            </div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all mt-2 shadow-md shadow-teal-500/10 border border-teal-400/50 active:scale-[0.98] cursor-pointer disabled:opacity-75"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{isSignUp ? 'CREATING ACCOUNT...' : 'SIGNING IN...'}</span>
              </div>
            ) : (
              <>
                <span>{isSignUp ? 'SIGN UP' : 'SIGN IN'}</span>
                {isSignUp ? <UserPlus className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
              </>
            )}
          </button>
        </form>

        <div className="w-full max-w-sm mt-8 relative flex items-center justify-center">
          <div className="absolute w-full h-px bg-zinc-200"></div>
          <span className="relative bg-[#FAF9F6] px-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
            Or Continue With
          </span>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full max-w-sm bg-white border border-zinc-200 text-zinc-800 font-bold py-4 rounded-2xl mt-8 flex items-center justify-center gap-3 hover:bg-zinc-50 transition-colors shadow-sm active:scale-[0.98] cursor-pointer disabled:opacity-75"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin text-zinc-600" />
              <span>CONNECTING TO GOOGLE...</span>
            </div>
          ) : (
            <>
              <GoogleGIcon className="w-5 h-5 shrink-0" />
              <span>GOOGLE SIGN-IN</span>
            </>
          )}
        </button>

        <div className="mt-8 text-sm text-zinc-500 font-medium">
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <button 
            type="button"
            onClick={() => {
              setError(null);
              setIsSignUp(!isSignUp);
            }}
            className="text-teal-600 font-bold hover:text-teal-700 ml-1 transition-colors cursor-pointer"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        <div className="mt-6 max-w-xs text-center text-[11px] text-zinc-400 leading-relaxed font-medium px-4">
          By continuing, you agree to our{' '}
          <button
            type="button"
            onClick={() => setLegalModal('privacy')}
            className="text-teal-600 underline font-semibold hover:text-teal-700 transition-colors cursor-pointer inline-block"
          >
            Privacy Policy
          </button>{' '}
          and{' '}
          <button
            type="button"
            onClick={() => setLegalModal('terms')}
            className="text-teal-600 underline font-semibold hover:text-teal-700 transition-colors cursor-pointer inline-block"
          >
            Terms of Service
          </button>.
        </div>
        
        <div className="mt-auto pt-6 pb-4 flex flex-col items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setShowDevModal(true)}
            className="text-[11px] font-semibold text-zinc-400 hover:text-teal-600 transition-colors cursor-pointer py-1 px-3 rounded-lg hover:bg-zinc-100"
          >
            Developer Account
          </button>
          <div className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase flex items-center justify-center gap-2">
             Secure AI Authentication
          </div>
        </div>
      </div>

      <DeveloperLoginModal
        isOpen={showDevModal}
        onClose={() => setShowDevModal(false)}
        onSuccess={() => {
          setShowDevModal(false);
          onLoginSuccess('developer');
          onClose();
        }}
      />

      {showForgotModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 transform-gpu">
          <motion.div 
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FAF9F6] w-full max-w-sm rounded-[2rem] p-6 shadow-xl border border-zinc-200/40 relative transform-gpu will-change-transform"
          >
            <button 
              type="button"
              onClick={() => setShowForgotModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-800 bg-zinc-100 rounded-full border border-zinc-200/40 shadow-sm transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h2 className="text-xl font-bold text-zinc-800 mb-1 tracking-tight">Reset Password</h2>
            <p className="text-zinc-500 text-xs font-semibold leading-relaxed mb-6">
              Enter your registered email address. We will send you a password reset link.
            </p>

            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label className="text-[10px] font-black text-zinc-500 mb-1.5 uppercase tracking-wider">
                  Email Address
                </label>
                <input 
                  type="email" 
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="bg-white px-4 py-3.5 rounded-2xl border border-zinc-200 outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 shadow-sm text-zinc-850 text-sm font-semibold placeholder-zinc-350 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {forgotError && (
                <div className="bg-red-50 text-red-600 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-red-200">
                  {forgotError}
                </div>
              )}

              {forgotMessage && (
                <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-emerald-200">
                  {forgotMessage}
                </div>
              )}

              <button 
                type="button"
                disabled={forgotLoading}
                onClick={() => handleSendResetEmail(forgotEmail)}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-75 shadow-md shadow-teal-500/5 border border-teal-400/50 active:scale-[0.98]"
              >
                {forgotLoading ? (
                  <>
                    BHEJ RAHE HAIN...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  'SEND RESET LINK'
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {/* Full-Screen In-App Legal Modal */}
      <FullScreenLegalModal 
        isOpen={!!legalModal} 
        type={legalModal} 
        onClose={() => setLegalModal(null)} 
      />
    </div>
  );
}
