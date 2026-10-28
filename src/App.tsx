import { getApiUrl } from './utils/api';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode, useEffect, lazy, Suspense, useCallback, useRef } from 'react';
import { LayoutDashboard, Camera, BookOpen, Headphones, UserCircle, Sparkles, Home, Moon, Sun, X, Wifi, WifiOff } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import LockedFeature from './components/LockedFeature';
import AdvancedLoader from './components/AdvancedLoader';
import { billingService } from './services/BillingService';
import { auth, db } from './lib/firebase';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { collection, query, where, orderBy, onSnapshot, doc, getDoc, setDoc, getDocs } from 'firebase/firestore';
import {
  subscribeToSessionRevocation,
  claimUserSession,
  getLocalSessionToken,
  clearLocalSessionToken
} from './utils/sessionManager';
import { triggerVibration } from './utils/vibrate';
import { Capacitor } from '@capacitor/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { clearGoogleCredentialState } from './utils/clearGoogleCredential';
import { App as CapApp } from '@capacitor/app';
import { Network } from '@capacitor/network';
import { Purchases } from '@revenuecat/purchases-capacitor';
import { safeGetItem, safeSetItem, safeClearAll, safeRemoveItem } from './utils/storage';
import { refillDailyCoins } from './utils/coins';
import { showToast } from './utils/toast';
import { setupDailyLocalNotifications } from './utils/notifications';
import { recordActiveUser, getUserHistory, saveUserHistory } from './utils/userHistory';
import { scrubTransientData } from './utils/dataRetention';
import { determineUserOnboardingRoute } from './utils/userOnboarding';
import confetti from 'canvas-confetti';

import { resilientLazy, resetAllLazyChunks } from './utils/resilientLazy';
const lazyWithRetry = resilientLazy;

const APQuizBattle = lazyWithRetry(() => import('./components/APQuizBattle'));
const LearningIsland = lazyWithRetry(() => import('./components/LearningIsland'));
const ToolsDashboard = lazyWithRetry(() => import('./components/ToolsDashboard'));
const VIPPass = lazyWithRetry(() => import('./components/VIPPass'));
const AcademicSetup = lazyWithRetry(() => import('./components/AcademicSetup'));
const Login = lazyWithRetry(() => import('./components/Login'));
const Profile = lazyWithRetry(() => import('./components/Profile'));
const StreakDetailsPage = lazyWithRetry(() => import('./components/StreakDetailsPage'));
const AITutor = lazyWithRetry(() => import('./components/AITutor'));
const TestPrep = lazyWithRetry(() => import('./components/TestPrep'));
const CoinPage = lazyWithRetry(() => import('./components/CoinPage'));
const PaywallModal = lazyWithRetry(() => import('./components/PaywallModal'));
const APNotes = lazyWithRetry(() => import('./components/APNotes'));
const APTrapRadar = lazyWithRetry(() => import('./components/APTrapRadar'));
const APMindMap = lazyWithRetry(() => import('./components/APMindMap'));
const FRQGrader = lazyWithRetry(() => import('./components/FRQGrader'));
const DeveloperDashboard = lazyWithRetry(() => import('./components/DeveloperPortal/DeveloperDashboard'));
import AuthGuard from './components/AuthGuard';
import ErrorBoundary from './components/ErrorBoundary';
import ToastProvider from './components/ToastProvider';
import WelcomeCelebrationModal from './components/WelcomeCelebrationModal';
import FloatingTutorPenguin from './components/FloatingTutorPenguin';
import { initUnitPdfsSync } from './services/unitPdfService';
import './utils/toast';
import { requestCameraPermission, requestMicrophonePermission, requestNotificationPermission } from './utils/nativePermissions';

function WidgetSkeleton() {
  return (
    <div className="w-full h-full min-h-[300px] bg-white border border-zinc-150 p-6 rounded-[2rem] flex flex-col gap-4 animate-pulse">
      <div className="h-6 w-1/3 bg-zinc-200 rounded-lg" />
      <div className="h-12 w-full bg-zinc-200 rounded-xl" />
      <div className="space-y-2.5">
        <div className="h-4 w-full bg-zinc-150 rounded" />
        <div className="h-4 w-5/6 bg-zinc-150 rounded" />
        <div className="h-4 w-2/3 bg-zinc-150 rounded" />
      </div>
    </div>
  );
}

function FullPageSkeleton() {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center p-6 bg-[#FAF9F6]">
      <AdvancedLoader type="orb" context="dashboard" />
    </div>
  );
}

let isRevenueCatConfigured = false;

export default function App() {
  const [activeTab, setActiveTab] = useState('notes');
  const [activeTool, setActiveTool] = useState<string | null>(null);

  // Only show welcoming onboarding for brand new users — never for returning/old users
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isDeveloperMode, setIsDeveloperMode] = useState<boolean>(() => {
    return safeGetItem('is_developer_authenticated') === 'true';
  });

  useEffect(() => {
    const handleDevAuth = () => {
      setIsDeveloperMode(safeGetItem('is_developer_authenticated') === 'true');
    };
    window.addEventListener('developer-auth-changed', handleDevAuth);
    return () => window.removeEventListener('developer-auth-changed', handleDevAuth);
  }, []);

  // Idle Background Preloader: Preloads all feature chunks in the background so every feature page opens instantly
  useEffect(() => {
    const preloadAllFeatures = () => {
      const loaders = [
        () => import('./components/APNotes'),
        () => import('./components/TestPrep'),
        () => import('./components/APMindMap'),
        () => import('./components/APTrapRadar'),
        () => import('./components/LearningIsland'),
        () => import('./components/APQuizBattle'),
        () => import('./components/AITutor'),
        () => import('./components/Profile'),
        () => import('./components/FRQGrader'),
        () => import('./components/CoinPage'),
        () => import('./components/StreakDetailsPage'),
        () => import('./components/VIPPass')
      ];

      loaders.forEach((loader, index) => {
        setTimeout(() => {
          loader().catch(() => { });
        }, 1000 + index * 400);
      });
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(preloadAllFeatures, { timeout: 6000 });
      } else {
        setTimeout(preloadAllFeatures, 4000);
      }
    }
  }, []);

  const [networkStatus, setNetworkStatus] = useState<{
    connected: boolean;
    visible: boolean;
    isRestored: boolean;
  }>({
    connected: true,
    visible: false,
    isRestored: false
  });

  // Synchronize CSS custom property --offline-banner-height with networkStatus.visible
  useEffect(() => {
    if (networkStatus.visible) {
      document.documentElement.style.setProperty('--offline-banner-height', '34px');
    } else {
      document.documentElement.style.setProperty('--offline-banner-height', '0px');
    }
  }, [networkStatus.visible]);

  // Listen for online/offline events globally across the application
  useEffect(() => {
    let active = true;

    const updateStatus = (isConnected: boolean) => {
      if (!active) return;
      setNetworkStatus(prev => {
        const wasOffline = !prev.connected;
        const nowOnline = isConnected;

        if (wasOffline && nowOnline) {
          console.log('[App] Network reconnected! Auto-refreshing failed chunks and syncing state...');
          resetAllLazyChunks();
          try {
            window.dispatchEvent(new CustomEvent('app-force-refresh'));
          } catch (_) { }
          setTimeout(() => {
            handleForceSync().catch(err => console.warn('[App] Auto-sync notice on reconnect:', err));
          }, 100);

          // Connection restored: switch to 'Back Online' green status and schedule automatic dismissal
          setTimeout(() => {
            if (active) {
              setNetworkStatus(current => ({
                ...current,
                visible: false
              }));
            }
          }, 3000);

          return {
            connected: true,
            visible: true,
            isRestored: true
          };
        } else if (!nowOnline) {
          // Connection lost: show 'Currently Offline' red status indefinitely
          return {
            connected: false,
            visible: true,
            isRestored: false
          };
        }

        return prev;
      });
    };

    if (Capacitor.isNativePlatform()) {
      Network.getStatus().then(status => {
        updateStatus(status.connected);
      });

      const listener = Network.addListener('networkStatusChange', status => {
        updateStatus(status.connected);
      });

      return () => {
        active = false;
        listener.then(h => h.remove());
      };
    } else {
      updateStatus(window.navigator.onLine);

      const handleOnline = () => updateStatus(true);
      const handleOffline = () => updateStatus(false);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        active = false;
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);


  // Permissions are requested Just-In-Time (JIT) when features are tapped (Camera button, Mic button, Notification toggle)
  // to adhere to Android WebView security policies and avoid launch dismissal crashes.

  // Initialize RevenueCat for In-App Purchases and setup local notifications
  useEffect(() => {
    // Setup daily recurring local notifications silently on startup (only if already granted)
    setupDailyLocalNotifications(false).catch(e => {
      console.warn('Local notifications setup notice:', e);
    });

    // Silently pre-sync published AP unit sample paper sets from Firestore/IndexedDB
    initUnitPdfsSync().catch(e => {
      console.warn('[App] Unit PDFs sync notice:', e);
    });

    // Initialize RevenueCat ONLY if a valid non-placeholder API key is set
    if (Capacitor.isNativePlatform() && !isRevenueCatConfigured) {
      try {
        const rcKey = (import.meta.env.VITE_REVENUECAT_API_KEY as string) || '';
        if (rcKey && !rcKey.includes('YOUR_REVENUECAT') && rcKey.length > 10) {
          Purchases.configure({ apiKey: rcKey });
          isRevenueCatConfigured = true;
        } else {
          console.log('[App] RevenueCat configuration skipped (placeholder API key).');
        }
      } catch (e) {
        console.warn('RevenueCat configuration notice:', e);
      }
    }

    // Check if the app just performed a full performance optimization restart
    try {
      const isFreshBoot = sessionStorage.getItem('just_optimized_fresh_boot') === 'true' ||
        localStorage.getItem('just_optimized_fresh_boot') === 'true';
      if (isFreshBoot) {
        try { sessionStorage.removeItem('just_optimized_fresh_boot'); } catch (_) { }
        try { localStorage.removeItem('just_optimized_fresh_boot'); } catch (_) { }
        setTimeout(() => {
          showToast('⚡ App 100% Fully Optimized! Lag & Slowdown Fixed • Fresh 60fps Experience 🚀', 'success');
        }, 600);
      }
    } catch (_) { }
  }, []);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(() => {
    // Offline-first: If no authenticated session exists in storage, show Login screen instantly (0s delay)
    return safeGetItem('apexam_user_authenticated') === 'true';
  });
  const [pocketItems, setPocketItems] = useState<any[]>(() => {
    return getUserHistory<any[]>('stale_pocket_items', []);
  });

  const [isVip, setIsVip] = useState(() => {
    const lastUser = safeGetItem('last_logged_in_user');
    if (lastUser) {
      const cachedVip = safeGetItem(`study_is_vip_${lastUser}`);
      if (cachedVip !== null) return cachedVip === 'true';
    }
    return safeGetItem('study_is_vip') === 'true';
  });
  const isProUser = isVip; // Alias for consistency with new requirements
  const [showVipModal, setShowVipModal] = useState(false);
  const [showAcademicSetup, setShowAcademicSetup] = useState(false);
  const [showWelcomeCelebration, setShowWelcomeCelebration] = useState(false);
  const [showPaywallModal, setShowPaywallModal] = useState(false);

  // Listen for welcome penguin celebration trigger (after new user onboarding/academic tracks completion)
  useEffect(() => {
    const handleTrigger = () => {
      const activeUid = user?.uid;
      const alreadySeen = activeUid ? safeGetItem(`welcome_penguin_seen_${activeUid}`) === 'true' : false;
      const email = user?.email?.toLowerCase().trim();
      const emailSeen = email ? safeGetItem(`onboarding_completed_email_${email}`) === 'true' : false;
      if (!alreadySeen && !emailSeen) {
        setShowWelcomeCelebration(true);
      }
    };
    window.addEventListener('trigger-welcome-celebration', handleTrigger);
    return () => window.removeEventListener('trigger-welcome-celebration', handleTrigger);
  }, [user]);

  // Only trigger once for a newly registered user who just completed AcademicSetup
  useEffect(() => {
    if (user && !authLoading && !showOnboarding && !showAcademicSetup) {
      const activeUid = user.uid;
      const alreadySeen = safeGetItem(`welcome_penguin_seen_${activeUid}`) === 'true';
      const email = user?.email?.toLowerCase().trim();
      const emailSeen = email ? safeGetItem(`onboarding_completed_email_${email}`) === 'true' : false;
      const pending = safeGetItem(`pending_welcome_celebration_${activeUid}`) === 'true';
      if (pending && !alreadySeen && !emailSeen) {
        safeRemoveItem(`pending_welcome_celebration_${activeUid}`);
        safeRemoveItem('pending_welcome_celebration');
        setShowWelcomeCelebration(true);
      } else if (pending) {
        safeRemoveItem(`pending_welcome_celebration_${activeUid}`);
        safeRemoveItem('pending_welcome_celebration');
      }
    }
  }, [user, authLoading, showOnboarding, showAcademicSetup]);
  const [paywallFeature, setPaywallFeature] = useState<string | undefined>(undefined);
  const [mobileToast, setMobileToast] = useState<string | null>(null);
  const [sessionRevokedNotice, setSessionRevokedNotice] = useState<string | null>(null);
  const sessionRevokeUnsubRef = useRef<(() => void) | null>(null);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return safeGetItem('study_dark_mode') === 'true';
  });

  const toggleDarkMode = () => {
    const newVal = !isDarkMode;
    setIsDarkMode(newVal);
    safeSetItem('study_dark_mode', String(newVal));
  };

  const handleSetIsVip = (val: boolean) => {
    setIsVip(val);
    safeSetItem('study_is_vip', String(val));
    if (user) {
      safeSetItem(`study_is_vip_${user.uid}`, String(val));
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EF4444', '#10B981', '#3B82F6']
    });
  };

  useEffect(() => {
    const handleOpenVip = () => {
      console.log('Received open-vip-modal event');
      setPaywallFeature("PRO Benefits");
      setShowPaywallModal(true);
    };
    const handleOpenLogin = () => {
      if (auth.currentUser || user) {
        console.log('[App] User is already authenticated, ignoring open-login-modal');
        return;
      }
      console.log('Received open-login-modal event');
      setShowLoginModal(true);
    };
    const handleOpenProfile = () => {
      console.log('Received open-profile-modal event');
      setActiveTab('profile');
    };
    const handleShowMobileToast = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.message) {
        let msg = String(customEvent.detail.message || '').trim();
        // Automatically sanitize & strip any verbose parentheticals e.g. "(Learning Island...)"
        msg = msg.replace(/\s*\([^)]*\)/g, '').trim();
        setMobileToast(msg);
        triggerVibration(15);
      }
    };
    const handleOpenPaywall = (e: Event) => {
      const customEvent = e as CustomEvent;
      setPaywallFeature(customEvent.detail?.featureName);
      setShowPaywallModal(true);
    };
    const handleOpenIap = () => {
      setPaywallFeature("PRO Upgrade");
      setShowPaywallModal(true);
    };
    const handleVipUpdated = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsVip(customEvent.detail === true);
    };

    window.addEventListener('open-vip-modal', handleOpenVip);
    window.addEventListener('open-login-modal', handleOpenLogin);
    window.addEventListener('open-profile-modal', handleOpenProfile);
    window.addEventListener('show-mobile-toast', handleShowMobileToast);
    window.addEventListener('open-paywall-modal', handleOpenPaywall);
    window.addEventListener('open-iap-modal', handleOpenIap);
    window.addEventListener('study-vip-updated', handleVipUpdated);
    return () => {
      window.removeEventListener('open-vip-modal', handleOpenVip);
      window.removeEventListener('open-login-modal', handleOpenLogin);
      window.removeEventListener('open-profile-modal', handleOpenProfile);
      window.removeEventListener('show-mobile-toast', handleShowMobileToast);
      window.removeEventListener('open-paywall-modal', handleOpenPaywall);
      window.removeEventListener('open-iap-modal', handleOpenIap);
      window.removeEventListener('study-vip-updated', handleVipUpdated);
    };
  }, []);

  useEffect(() => {
    // Scrub expired transient cache and temporary data per data retention policy
    scrubTransientData();
    // Warm up PaywallModal chunk during idle so Flash Sale and Pro modals open instantly with zero lag
    const timer = setTimeout(() => {
      import('./components/PaywallModal').catch(() => { });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mobileToast) {
      const timer = setTimeout(() => {
        setMobileToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [mobileToast]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // ENFORCE EXPLICIT AUTHENTICATION GATE:
        // If there is no confirmed active user session saved in storage,
        // it means the user never logged in during an active session (e.g. fresh install,
        // restored background cache / IndexedDB persistence, or unauthenticated state).
        // This stops stale background cache / IndexedDB persistence from auto-logging into
        // a random/stale email and auto-opening the app dashboard without user consent.
        const isExplicitlyAuthenticated =
          safeGetItem('apexam_user_authenticated') === 'true' &&
          safeGetItem('last_logged_in_user') === currentUser.uid;

        const isLoginInProgress = safeGetItem('apexam_login_in_progress') === 'true';

        if (!isExplicitlyAuthenticated && !isLoginInProgress) {
          console.log('[Auth Guard] Stale or unauthenticated session detected on app open. Enforcing clean logout so Login screen is shown.');
          setUser(null);
          setIsVip(false);
          setAuthLoading(false);
          if (Capacitor.isNativePlatform()) {
            try { await FirebaseAuthentication.signOut(); } catch (_) { }
            try { await clearGoogleCredentialState(); } catch (_) { }
          }
          try { await signOut(auth); } catch (_) { }
          return;
        } else {
          safeRemoveItem('apexam_login_in_progress');
          safeSetItem('apexam_user_authenticated', 'true');
          safeSetItem('apexam_active_user_session', 'true');
          safeSetItem('last_logged_in_user', currentUser.uid);
        }

        const isGoogle = currentUser.providerData?.some(p => p.providerId === 'google.com') || false;
        if (!currentUser.emailVerified && !isGoogle) {
          safeRemoveItem('apexam_active_user_session');
          setUser(null);
          signOut(auth).catch(err => console.warn('Sign out on unverified error:', err));
          return;
        }

        // Clean up any previous session watcher
        if (sessionRevokeUnsubRef.current) {
          sessionRevokeUnsubRef.current();
          sessionRevokeUnsubRef.current = null;
        }

        // 1. Ensure local active session token exists, claim if missing
        const currentLocalToken = getLocalSessionToken();
        if (!currentLocalToken) {
          claimUserSession(currentUser.uid).catch(console.warn);
        }

        // 2. Real-time Single Device Session Watchdog
        sessionRevokeUnsubRef.current = subscribeToSessionRevocation(currentUser.uid, () => {
          console.warn('[SingleSession] Active session taken over by another device. Terminating local session.');
          if (sessionRevokeUnsubRef.current) {
            sessionRevokeUnsubRef.current();
            sessionRevokeUnsubRef.current = null;
          }
          clearLocalSessionToken();
          safeRemoveItem('apexam_user_authenticated');
          safeRemoveItem('apexam_active_user_session');
          safeRemoveItem('last_logged_in_user');
          setUser(null);
          signOut(auth).catch(console.warn);
          setSessionRevokedNotice('Your account was just logged in on another device. For subscription integrity, only 1 active device is permitted at a time.');
          setMobileToast('⚠️ Logged out: Account active on another device');
        });
      } else {
        if (sessionRevokeUnsubRef.current) {
          sessionRevokeUnsubRef.current();
          sessionRevokeUnsubRef.current = null;
        }
      }
      setUser(currentUser);
      if (currentUser) {
        setSessionRevokedNotice(null);
        refillDailyCoins();

        // Sync user with RevenueCat if already configured (never re-call configure)
        if (Capacitor.isNativePlatform() && isRevenueCatConfigured) {
          Purchases.logIn({ appUserID: currentUser.uid }).catch(err => {
            console.warn('RevenueCat logIn notice on auth state change:', err);
          });
        }

        // 1. Initially set to specific user cached state or false (prevent leak from other sessions)
        const cachedUserVip = safeGetItem(`study_is_vip_${currentUser.uid}`) === 'true';
        setIsVip(cachedUserVip);

        // INSTANT OFFLINE-FIRST HYDRATION:
        // If this returning user already completed setup locally, unblock UI immediately (0.05s boot)!
        // Network sync runs smoothly in the background without blocking the student.
        const isKnownCompleted =
          safeGetItem(`onboarding_completed_${currentUser.uid}`) === 'true' ||
          safeGetItem(`academic_setup_completed_${currentUser.uid}`) === 'true' ||
          safeGetItem(`isOnboardingComplete_${currentUser.uid}`) === 'true' ||
          safeGetItem('onboarding_completed') === 'true';

        if (isKnownCompleted) {
          setShowOnboarding(false);
          setShowAcademicSetup(false);
          setAuthLoading(false);
        }

        // 2. Fresh Fetch on Login: Runs asynchronously in background to ensure high consistency with user profile
        const fetchPromise = (async () => {
          try {
            // Determine onboarding routing using unified single-source-of-truth
            const routeResult = await determineUserOnboardingRoute(currentUser);
            console.log(`[Auth Check] Route decision for ${currentUser.email}: ${routeResult.targetScreen} (${routeResult.reason})`);
            if (routeResult.targetScreen === 'onboarding') {
              setShowOnboarding(true);
              setShowAcademicSetup(false);
            } else if (routeResult.targetScreen === 'setup') {
              setShowOnboarding(false);
              setShowAcademicSetup(true);
            } else {
              setShowOnboarding(false);
              setShowAcademicSetup(false);
              setShowWelcomeCelebration(false);
            }

            const userDocSnap = await getDoc(doc(db, 'users', currentUser.uid));
            if (userDocSnap.exists()) {
              const userData = userDocSnap.data();

              if (userData) {
                if (typeof userData.isPro === 'boolean') {
                  setIsVip(userData.isPro);
                  safeSetItem('study_is_vip', String(userData.isPro));
                  safeSetItem(`study_is_vip_${currentUser.uid}`, String(userData.isPro));
                  console.log(`[Auth Check] Verified specific subscription status from Firestore: ${userData.isPro}`);
                }
                if (typeof userData.coins === 'number') {
                  const userKey = `study_daily_limit_${currentUser.uid}`;
                  safeSetItem(userKey, String(userData.coins));
                  window.dispatchEvent(new CustomEvent('study-coins-updated', { detail: userData.coins }));
                  console.log(`[Auth Check] Synced coins from Firestore: ${userData.coins}`);
                } else {
                  const emailKey = (currentUser.email || '').toLowerCase();
                  let initialCoins = 20;
                  if (emailKey) {
                    const emailDocRef = doc(db, 'allocated_emails', emailKey);
                    const emailDocSnap = await getDoc(emailDocRef);
                    if (emailDocSnap.exists()) {
                      initialCoins = 0;
                      console.log(`[Coins Check] Email ${currentUser.email} already has allocated coins. Setting to 0.`);
                    } else {
                      await setDoc(emailDocRef, {
                        allocated: true,
                        allocatedAt: new Date().toISOString(),
                        userId: currentUser.uid
                      });
                      console.log(`[Coins Check] Email ${currentUser.email} is new. Allocating 20 free coins.`);
                    }
                  }
                  const userKey = `study_daily_limit_${currentUser.uid}`;
                  safeSetItem(userKey, String(initialCoins));
                  window.dispatchEvent(new CustomEvent('study-coins-updated', { detail: initialCoins }));
                  await setDoc(doc(db, 'users', currentUser.uid), { coins: initialCoins }, { merge: true });
                }
                return;
              }
            } else {
              // User document does not exist yet! Check lifetime allocated_emails first
              const emailKey = (currentUser.email || '').toLowerCase();
              let initialCoins = 20;
              if (emailKey) {
                const emailDocRef = doc(db, 'allocated_emails', emailKey);
                const emailDocSnap = await getDoc(emailDocRef);
                if (emailDocSnap.exists()) {
                  initialCoins = 0;
                  console.log(`[Coins Check] Email ${currentUser.email} already has allocated coins. Setting new doc to 0.`);
                } else {
                  await setDoc(emailDocRef, {
                    allocated: true,
                    allocatedAt: new Date().toISOString(),
                    userId: currentUser.uid
                  });
                  console.log(`[Coins Check] Email ${currentUser.email} is new. Allocating 20 free coins in new doc.`);
                }
              }
              const userKey = `study_daily_limit_${currentUser.uid}`;
              safeSetItem(userKey, String(initialCoins));
              window.dispatchEvent(new CustomEvent('study-coins-updated', { detail: initialCoins }));

              await setDoc(doc(db, 'users', currentUser.uid), {
                userId: currentUser.uid,
                email: currentUser.email || '',
                coins: initialCoins,
                isPro: false,
                createdAt: new Date().toISOString()
              });
              console.log(`[Auth Check] Initialized new user document in Firestore with ${initialCoins} coins`);
            }
          } catch (fsErr) {
            console.warn('[Auth Check] Firestore fetch failed, falling back to REST/Cache:', fsErr);
            // On network failure, maintain default safe states without popping up onboarding for returning users
          }

          // Fallback to REST API
          try {
            const res = await fetch(getApiUrl('/api/verify-subscription'), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ userId: currentUser.uid })
            });
            if (res.ok) {
              const data = await res.json();
              if (data && typeof data.isPro === 'boolean') {
                setIsVip(data.isPro);
                safeSetItem('study_is_vip', String(data.isPro));
                safeSetItem(`study_is_vip_${currentUser.uid}`, String(data.isPro));
                console.log(`[Auth Check] Verified specific subscription status from backend: ${data.isPro}`);
                return;
              }
            }
          } catch (err) {
            console.warn('[Auth Check] Subscription check endpoint offline, using local cached status:', err);
          }

          // Fallback only to this specific logged-in user's cached value, never a different account
          const verifiedVal = safeGetItem(`study_is_vip_${currentUser.uid}`) === 'true';
          setIsVip(verifiedVal);
          safeSetItem('study_is_vip', String(verifiedVal));
        })();

        // Fast fallback for brand new unverified accounts: max 350ms wait so slow internet never freezes the app
        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, isKnownCompleted ? 0 : 350));

        Promise.race([fetchPromise, timeoutPromise])
          .finally(() => {
            setAuthLoading(false);
          });
      } else {
        // Guest user state: clean up session and reset state
        safeRemoveItem('apexam_active_user_session');
        setIsVip(false);
        setUser(null);
        setAuthLoading(false);

        // Log out from RevenueCat
        if (Capacitor.isNativePlatform() && isRevenueCatConfigured) {
          Purchases.logOut().catch(err => {
            console.warn('RevenueCat logOut error on logout:', err);
          });
        }
      }
    });
    return () => {
      unsubscribeAuth();
      if (sessionRevokeUnsubRef.current) {
        sessionRevokeUnsubRef.current();
        sessionRevokeUnsubRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!user) {
      if (!authLoading) {
        setPocketItems([]);
      }
      return;
    }
    recordActiveUser(user);
    setupDailyLocalNotifications();
    const localItems = getUserHistory<any[]>('stale_pocket_items', []);
    if (localItems && localItems.length > 0) {
      setPocketItems(localItems);
    }
    const q = query(
      collection(db, 'pocket_items'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );
    const unsubscribeItems = onSnapshot(q, {
      next: (snapshot) => {
        try {
          const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          if (Array.isArray(fetched)) {
            if (fetched.length === 0) {
              const localCached = getUserHistory<any[]>('stale_pocket_items', []);
              if (Array.isArray(localCached) && localCached.length > 0) {
                setPocketItems(localCached);
                return;
              }
            }
            setPocketItems(fetched);
            saveUserHistory('stale_pocket_items', fetched);
          }
        } catch (e) {
          console.error("Error processing pocket_items snapshot:", e);
        }
      },
      error: (err) => {
        console.warn("pocket_items onSnapshot error (retaining cache fallback):", err);
        const cachedStr = safeGetItem(`stale_pocket_items_${user.uid}`);
        if (cachedStr) {
          try {
            const parsed = JSON.parse(cachedStr);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setPocketItems(parsed);
            }
          } catch (_) { }
        }
      }
    });
    return () => unsubscribeItems();
  }, [user, authLoading]);

  // Manual force sync handler for Pull-to-Refresh
  const handleForceSync = async () => {
    console.log('[ForceSync] Running manual pull-to-refresh sync...');
    try { triggerVibration(15); } catch (_) { }

    // 1. Invalidate and refresh all dynamic lazy chunks
    resetAllLazyChunks();

    // 2. Dispatch global app-force-refresh event across all active views and error boundaries
    try {
      window.dispatchEvent(new CustomEvent('app-force-refresh'));
    } catch (_) { }

    // 3. Refresh connection status
    if (typeof navigator !== 'undefined' && navigator.onLine) {
      setNetworkStatus(prev => ({
        ...prev,
        connected: true,
        isRestored: true,
        visible: false
      }));
    }

    // 4. Fetch cloud pocket items if authenticated
    if (user) {
      try {
        const q = query(
          collection(db, 'pocket_items'),
          where('userId', '==', user.uid),
          orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPocketItems(fetched);
        safeSetItem(`stale_pocket_items_${user.uid}`, JSON.stringify(fetched));
        console.log('[ForceSync] Successfully force-synced pocket items:', fetched.length);
      } catch (err) {
        console.warn('[ForceSync] Cloud pocket items sync notice (offline or network delay):', err);
      }
    }

    // 5. Force refresh published AP Unit Sample Papers
    initUnitPdfsSync(true).catch(err => {
      console.warn('[ForceSync] Unit PDFs sync notice:', err);
    });
  };

  // 3. User document listener for coins, subscriptions, and auto-calculated study streak
  useEffect(() => {
    if (!user) return;

    // Helper functions for date matching
    const getLocalDateString = () => {
      const d = new Date();
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const getYesterdayDateString = () => {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const unsubscribeUser = onSnapshot(doc(db, 'users', user.uid), {
      next: async (snapshot) => {
        if (!snapshot.exists()) return;
        const userData = snapshot.data();
        if (!userData) return;

        // 1. Sync coins
        if (typeof userData.coins === 'number') {
          const userKey = `study_daily_limit_${user.uid}`;
          safeSetItem(userKey, String(userData.coins));
          window.dispatchEvent(new CustomEvent('study-coins-updated', { detail: userData.coins }));
        }

        // 2. Sync Pro status
        if (typeof userData.isPro === 'boolean') {
          setIsVip(userData.isPro);
          safeSetItem('study_is_vip', String(userData.isPro));
          safeSetItem(`study_is_vip_${user.uid}`, String(userData.isPro));
        }

        // 3. Sync & Auto-calculate study streak
        const currentStreak = typeof userData.currentStreak === 'number' ? userData.currentStreak : 0;
        const lastActiveDate = userData.lastActiveDate || '';
        const todayStr = getLocalDateString();
        const yesterdayStr = getYesterdayDateString();

        // Let's check if the streak needs auto-calculation for today
        if (lastActiveDate !== todayStr) {
          let updatedStreak = 1;
          if (lastActiveDate === yesterdayStr) {
            updatedStreak = currentStreak + 1;
          } else if (!lastActiveDate) {
            updatedStreak = 1;
          } else {
            // Older than yesterday, reset streak to 1
            updatedStreak = 1;
          }

          // Instantly update the database with today's activity and calculated streak
          try {
            await setDoc(doc(db, 'users', user.uid), {
              currentStreak: updatedStreak,
              lastActiveDate: todayStr
            }, { merge: true });

            // Sync locally
            safeSetItem('study_punches', String(updatedStreak));
            safeSetItem('study_last_punch_date', todayStr);
            window.dispatchEvent(new CustomEvent('study-streak-updated', { detail: updatedStreak }));
          } catch (e) {
            console.error("Failed to auto-update study streak in Firestore:", e);
          }
        } else {
          // Streak is already up-to-date for today. Sync locally and dispatch event
          safeSetItem('study_punches', String(currentStreak));
          safeSetItem('study_last_punch_date', lastActiveDate);
          window.dispatchEvent(new CustomEvent('study-streak-updated', { detail: currentStreak }));
        }

        // 4. Sync Learning Island progress from Firestore
        if (userData.learningIsland && typeof userData.learningIsland === 'object') {
          Object.entries(userData.learningIsland).forEach(([subjId, subjProg]) => {
            const serialized = JSON.stringify(subjProg);
            safeSetItem(`learning_island_progress_${user.uid}_${subjId}`, serialized);
            safeSetItem(`learning_island_progress_${subjId}`, serialized);
          });
          window.dispatchEvent(new CustomEvent('learning-island-cloud-synced'));
        }

        // 5. Sync Study XP from Firestore
        if (typeof userData.studyXP === 'number') {
          safeSetItem('study_total_xp', String(userData.studyXP));
          window.dispatchEvent(new CustomEvent('study-xp-updated', { detail: userData.studyXP }));
        }
      },
      error: (err) => {
        console.error("Error watching user document:", err);
      }
    });

    return () => unsubscribeUser();
  }, [user]);

  // Refs for tracking latest state without causing native bridge listener thrashing
  const activeToolRef = useRef(activeTool);
  const activeTabRef = useRef(activeTab);
  const showLoginModalRef = useRef(showLoginModal);
  const showProfileModalRef = useRef(showProfileModal);
  const showVipModalRef = useRef(showVipModal);
  const showPaywallModalRef = useRef(showPaywallModal);
  const showAcademicSetupRef = useRef(showAcademicSetup);
  const showWelcomeCelebrationRef = useRef(showWelcomeCelebration);

  useEffect(() => {
    activeToolRef.current = activeTool;
    activeTabRef.current = activeTab;
    showLoginModalRef.current = showLoginModal;
    showProfileModalRef.current = showProfileModal;
    showVipModalRef.current = showVipModal;
    showPaywallModalRef.current = showPaywallModal;
    showAcademicSetupRef.current = showAcademicSetup;
    showWelcomeCelebrationRef.current = showWelcomeCelebration;
  });

  // Native back button navigation handler - attached ONCE on mount to eliminate bridge race conditions
  const lastBackPressRef = useRef<number>(0);

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    const handleBackButton = async () => {
      const backEvent = new CustomEvent('appBackButton', { cancelable: true });
      const wasCanceled = !window.dispatchEvent(backEvent);
      if (wasCanceled) {
        return;
      }

      if (showWelcomeCelebrationRef.current) {
        setShowWelcomeCelebration(false);
        return;
      }
      if (showLoginModalRef.current) {
        setShowLoginModal(false);
        return;
      }
      if (showProfileModalRef.current) {
        setShowProfileModal(false);
        return;
      }
      if (showVipModalRef.current) {
        setShowVipModal(false);
        return;
      }
      if (showPaywallModalRef.current) {
        setShowPaywallModal(false);
        return;
      }
      if (showAcademicSetupRef.current) {
        return;
      }

      if (activeToolRef.current !== null) {
        setActiveTool(null);
        return;
      }

      if (activeTabRef.current !== 'notes') {
        setActiveTab('notes');
        return;
      }

      // Root Home Screen: Protect against accidental app kill with double-press confirmation
      const now = Date.now();
      if (now - lastBackPressRef.current < 2000) {
        CapApp.minimizeApp();
      } else {
        lastBackPressRef.current = now;
        triggerVibration(15);
        showToast('Press back again to exit', 'info', 1500);
      }
    };

    const backButtonListener = CapApp.addListener('backButton', () => {
      handleBackButton();
    });

    return () => {
      backButtonListener.then(l => l.remove()).catch(() => { });
    };
  }, []);

  useEffect(() => {
    const handleNavToHome = () => {
      setActiveTab('notes');
      setActiveTool(null);
    };
    const handleCloseActiveTool = () => {
      setActiveTool(null);
    };
    window.addEventListener('navigate-to-home', handleNavToHome);
    window.addEventListener('close-active-tool', handleCloseActiveTool);
    return () => {
      window.removeEventListener('navigate-to-home', handleNavToHome);
      window.removeEventListener('close-active-tool', handleCloseActiveTool);
    };
  }, []);

  const handleOpenVipFromDashboard = useCallback(() => {
    setShowVipModal(true);
  }, []);

  const handleOpenProfileFromDashboard = useCallback(() => {
    setActiveTab('profile');
  }, []);

  const handleOpenLoginFromDashboard = useCallback(() => {
    if (auth.currentUser || user) {
      setActiveTab('profile');
      return;
    }
    setShowLoginModal(true);
  }, [user]);

  const handleSelectToolFromDashboard = useCallback((tool: string) => {
    if (tool === 'tab:scanner' || tool === 'tab:frqgrader' || tool === 'frqgrader') {
      setActiveTab('frqgrader');
      setActiveTool(null);
    } else if (tool === 'tab:aitutor') {
      setActiveTab('aitutor');
      setActiveTool(null);
    } else {
      setActiveTool(tool);
    }
  }, []);

  if (isDeveloperMode) {
    return (
      <div className={`w-full flex flex-col h-[100dvh] ${Capacitor.isNativePlatform() ? 'max-w-none m-0 rounded-none border-0' : 'max-w-md mx-auto landscape:max-w-none landscape:w-full landscape:h-[100dvh] landscape:m-0 landscape:rounded-none landscape:border-0 sm:rounded-[2rem] sm:h-[90vh] sm:mt-[5vh] sm:border'} ${isDarkMode ? 'dark bg-zinc-950 text-zinc-100 sm:border-zinc-800' : 'bg-zinc-950 text-zinc-100 sm:border-zinc-800'} font-sans overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.15)] relative`}>
        <ToastProvider />
        <Suspense fallback={<FullPageSkeleton />}>
          <DeveloperDashboard
            onLogout={() => {
              safeRemoveItem('is_developer_authenticated');
              safeRemoveItem('dev_auth_email');
              setIsDeveloperMode(false);
              window.dispatchEvent(new CustomEvent('developer-auth-changed', { detail: { authenticated: false } }));
              showToast('Logged out of Developer Account', 'info');
            }}
          />
        </Suspense>
      </div>
    );
  }

  return (
    <>
      <ToastProvider />
      <AuthGuard
        user={user}
        authLoading={authLoading}
        showOnboarding={showOnboarding}
        showAcademicSetup={showAcademicSetup}
        isDarkMode={isDarkMode}
        sessionRevokedMessage={sessionRevokedNotice}
        setShowOnboarding={setShowOnboarding}
        setShowAcademicSetup={setShowAcademicSetup}
        fallbackSkeleton={<FullPageSkeleton />}
      >
        <div className={`w-full flex flex-col h-[100dvh] ${Capacitor.isNativePlatform() ? 'max-w-none m-0 rounded-none border-0' : 'max-w-md mx-auto landscape:max-w-none landscape:w-full landscape:h-[100dvh] landscape:m-0 landscape:rounded-none landscape:border-0 sm:rounded-[2rem] sm:h-[90vh] sm:mt-[5vh] sm:border'} ${isDarkMode ? 'dark bg-zinc-950 text-zinc-100 sm:border-zinc-800' : 'bg-[#FAF9F6] text-zinc-900 sm:border-zinc-200'} font-sans overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.15)] relative`}>
          {/* Global Network Status Banner */}
          <AnimatePresence>
            {networkStatus.visible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`w-full py-2 px-4 z-[999] shrink-0 overflow-hidden flex items-center justify-center gap-2 text-xs font-bold shadow-md select-none ${!networkStatus.connected
                    ? 'bg-red-600 text-white dark:bg-red-950 dark:text-red-200 border-b border-red-500/30'
                    : 'bg-emerald-600 text-white dark:bg-emerald-950 dark:text-emerald-200 border-b border-emerald-500/30'
                  }`}
              >
                {!networkStatus.connected ? (
                  <>
                    <WifiOff className="w-3.5 h-3.5" />
                    <span>Currently Offline</span>
                  </>
                ) : (
                  <>
                    <Wifi className="w-3.5 h-3.5" />
                    <span>Back Online</span>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          {activeTab !== 'scanner' && activeTab !== 'frqgrader' && activeTab !== 'aitutor' && activeTab !== 'notes' && activeTab !== 'profile' && activeTool === null && (
            <header className="px-6 py-5 bg-white border-b border-zinc-200/60 z-10 flex justify-between items-center">
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">AP Exam</h1>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    triggerVibration(15);
                    setActiveTab('profile');
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-600 hover:text-zinc-900 transition-colors shadow-sm border border-zinc-200/40"
                >
                  {user ? (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      {user.email?.[0].toUpperCase() || 'U'}
                    </div>
                  ) : (
                    <UserCircle className="w-6 h-6" />
                  )}
                </button>
              </div>
            </header>
          )}

          <main className={`w-full ${(Capacitor.isNativePlatform() || activeTool !== null) ? 'max-w-none' : 'max-w-md mx-auto landscape:max-w-none'} flex-1 min-h-0 relative z-0 ${(activeTab === 'frqgrader' || activeTab === 'scanner' || activeTab === 'aitutor' || activeTab === 'teacher' || activeTool !== null) ? 'overflow-hidden flex flex-col' : 'overflow-y-auto pb-20'} bg-[#FAF9F6]`}>
            {/* FRQ Grader Tab (Replaces legacy Scan second section) */}
            {/* FRQ Grader Tab (Mounted strictly when active to prevent background camera access) */}
            {activeTab === 'frqgrader' && activeTool === null && (
              <div className="h-full flex flex-col flex-1 min-h-0">
                <ErrorBoundary featureName="FRQ Grader" onClose={() => setActiveTab('notes')}>
                  <Suspense fallback={<FullPageSkeleton />}>
                    <FRQGrader
                      isActive={activeTab === 'frqgrader' && activeTool === null}
                      onBack={() => {
                        setActiveTab('notes');
                        setActiveTool(null);
                      }}
                    />
                  </Suspense>
                </ErrorBoundary>
              </div>
            )}

            {/* AI Tutor Tab */}
            <div className={activeTab === 'aitutor' ? 'h-full flex flex-col flex-1 min-h-0' : 'hidden'}>
              <ErrorBoundary featureName="AI Tutor" onClose={() => setActiveTab('notes')}>
                <Suspense fallback={<FullPageSkeleton />}>
                  <AITutor isVip={isVip} isActive={activeTab === 'aitutor'} />
                </Suspense>
              </ErrorBoundary>
            </div>

            {/* Home/Notes Tab */}
            <div className={activeTab === 'notes' ? 'h-full flex flex-col flex-1 min-h-0' : 'hidden'}>
              <div className={activeTool === null ? "h-full flex flex-col flex-1 min-h-0" : "hidden"}>
                <ErrorBoundary featureName="Home Dashboard" onRetry={() => resetAllLazyChunks()}>
                  <Suspense fallback={<FullPageSkeleton />}>
                    <ToolsDashboard
                      isVip={isVip}
                      user={user}
                      pocketItems={pocketItems}
                      onOpenVip={handleOpenVipFromDashboard}
                      onOpenProfile={handleOpenProfileFromDashboard}
                      onOpenLogin={handleOpenLoginFromDashboard}
                      onSelectTool={handleSelectToolFromDashboard}
                      activeTab={activeTab}
                      onForceSync={handleForceSync}
                    />
                  </Suspense>
                </ErrorBoundary>
              </div>
              {/* Active Tool Rendering isolated and keyed to prevent state/boundary reuse hitch */}
              {activeTool !== null && (
                <div className="w-full h-full flex flex-col flex-1 min-h-0 overflow-hidden">
                  <ErrorBoundary
                    key={`active-tool-boundary-${activeTool}`}
                    featureName={`Tool: ${activeTool}`}
                    onClose={() => setActiveTool(null)}
                    onReset={() => setActiveTool(null)}
                  >
                    <Suspense key={`active-tool-suspense-${activeTool}`} fallback={<FullPageSkeleton />}>
                      {activeTool === 'apnotes' && (
                        <ErrorBoundary featureName="AP Notes" onClose={() => setActiveTool(null)}>
                          <APNotes
                            onBack={() => setActiveTool(null)}
                            onNavigateToTab={(tab) => {
                              setActiveTool(null);
                              setActiveTab(tab);
                            }}
                            isVip={isVip}
                          />
                        </ErrorBoundary>
                      )}
                      {activeTool === 'testprep' && (
                        <ErrorBoundary
                          featureName="AP Sample Paper Sets"
                          fallbackMessage="Unable to load AP Sample Paper Sets. Tap below to auto-repair or return to dashboard."
                          onClose={() => setActiveTool(null)}
                          onRetry={() => resetAllLazyChunks()}
                          cacheKeysToPurgeOnCrash={['ap_test_prep_history']}
                        >
                          <TestPrep
                            onBack={() => setActiveTool(null)}
                            isVip={isVip}
                            onOpenVip={() => setShowVipModal(true)}
                            onNavigateToTab={(tab) => {
                              setActiveTool(null);
                              setActiveTab(tab);
                            }}
                          />
                        </ErrorBoundary>
                      )}
                      {activeTool === 'quizbattle' && (
                        <div className="h-full w-full flex flex-col flex-1 min-h-0 overflow-hidden">
                          <ErrorBoundary
                            featureName="1v1 Quiz Battle"
                            fallbackMessage="Unable to load 1v1 Battle Arena. Tap below to return."
                            onClose={() => setActiveTool(null)}
                            onRetry={() => resetAllLazyChunks()}
                          >
                            <APQuizBattle
                              onBack={() => setActiveTool(null)}
                              user={user}
                              isVip={isVip}
                            />
                          </ErrorBoundary>
                        </div>
                      )}
                      {activeTool === 'learningisland' && (
                        <div className="h-full w-full flex flex-col flex-1 min-h-0 overflow-hidden">
                          <ErrorBoundary
                            featureName="Learning Island"
                            fallbackMessage="Unable to load Learning Island. Tap below to auto-repair or return to dashboard."
                            onClose={() => setActiveTool(null)}
                            onRetry={() => resetAllLazyChunks()}
                            cacheKeysToPurgeOnCrash={['learning_island_temp_']}
                          >
                            <LearningIsland onBack={() => setActiveTool(null)} user={user} />
                          </ErrorBoundary>
                        </div>
                      )}

                      {activeTool === 'trapradar' && (
                        <ErrorBoundary featureName="Trap Radar" onClose={() => setActiveTool(null)}>
                          <APTrapRadar
                            onBack={() => setActiveTool(null)}
                            isVip={isVip}
                          />
                        </ErrorBoundary>
                      )}
                      {activeTool === 'mindmap' && (
                        <ErrorBoundary featureName="Short Notes" onClose={() => setActiveTool(null)}>
                          <APMindMap
                            onBack={() => setActiveTool(null)}
                            isVip={isVip}
                          />
                        </ErrorBoundary>
                      )}
                      {activeTool === 'frqgrader' && (
                        <div className="h-full w-full flex flex-col flex-1 min-h-0 overflow-hidden">
                          <ErrorBoundary featureName="FRQ Grader" onClose={() => setActiveTool(null)}>
                            <FRQGrader
                              isActive={activeTool === 'frqgrader'}
                              onBack={() => setActiveTool(null)}
                            />
                          </ErrorBoundary>
                        </div>
                      )}
                      {activeTool === 'coinpage' && (
                        <ErrorBoundary featureName="Coin Page" onClose={() => setActiveTool(null)}>
                          <CoinPage
                            isVip={isVip}
                            onClose={() => setActiveTool(null)}
                            onSelectTool={(tool) => {
                              if (tool === 'tab:scanner' || tool === 'tab:frqgrader' || tool === 'frqgrader') {
                                setActiveTab('frqgrader');
                                setActiveTool(null);
                              } else if (tool === 'tab:aitutor') {
                                setActiveTab('aitutor');
                                setActiveTool(null);
                              } else {
                                setActiveTool(tool);
                              }
                            }}
                          />
                        </ErrorBoundary>
                      )}
                      {activeTool === 'streakpage' && (
                        <ErrorBoundary featureName="Streak Details" onClose={() => setActiveTool(null)}>
                          <StreakDetailsPage onBack={() => setActiveTool(null)} />
                        </ErrorBoundary>
                      )}
                    </Suspense>
                  </ErrorBoundary>
                </div>
              )}
            </div>

            {/* Profile Tab */}
            <div className={activeTab === 'profile' ? 'h-full flex flex-col flex-1 min-h-0' : 'hidden'}>
              <ErrorBoundary featureName="Profile" onClose={() => setActiveTab('notes')}>
                <Suspense fallback={<FullPageSkeleton />}>
                  <Profile
                    user={user}
                    isVip={isVip}
                    setIsVip={handleSetIsVip}
                    onClose={() => setActiveTab('notes')}
                    isDarkMode={isDarkMode}
                    onToggleDarkMode={toggleDarkMode}
                    isTabMode={true}
                    onOpenLogin={() => setShowLoginModal(true)}
                    onNavigateToCoinPage={() => {
                      setActiveTab('notes');
                      setActiveTool('coinpage');
                    }}
                    onNavigateToStreakPage={() => {
                      setActiveTab('notes');
                      setActiveTool('streakpage');
                    }}
                  />
                </Suspense>
              </ErrorBoundary>
            </div>
          </main>

          {activeTool === null && (
            <nav className="absolute bottom-0 w-full border-t pb-safe z-20 transition-all duration-300 bg-white/95 dark:bg-zinc-950/95 border-zinc-200/60 dark:border-zinc-800/80 backdrop-blur-2xl">
              <div className="flex justify-around items-center px-2 py-0.5 max-w-md mx-auto landscape:max-w-lg">
                <NavItem
                  icon={<Home className="w-5 h-5" />}
                  label="Home"
                  isActive={activeTab === 'notes'}
                  onClick={() => setActiveTab('notes')}
                  isLightTheme={!isDarkMode}
                />
                <NavItem
                  icon={<Camera className="w-5 h-5" />}
                  label="Scan"
                  isActive={activeTab === 'frqgrader'}
                  onClick={() => {
                    setActiveTab('frqgrader');
                    setActiveTool(null);
                  }}
                  isLightTheme={!isDarkMode}
                />
                <NavItem
                  icon={<UserCircle className="w-5 h-5" />}
                  label="Profile"
                  isActive={activeTab === 'profile'}
                  onClick={() => setActiveTab('profile')}
                  isLightTheme={!isDarkMode}
                />
              </div>
            </nav>
          )}

          {/* Floating Circular AI Magic Tutor Penguin on Homepage */}
          <FloatingTutorPenguin
            isVisible={activeTab === 'notes' && activeTool === null && !showWelcomeCelebration}
            onOpenTutor={() => {
              setActiveTab('aitutor');
              setActiveTool(null);
            }}
          />

          <AnimatePresence>
            {showVipModal && !isVip && (
              <motion.div key="vip"
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute inset-0 z-50 bg-[#FAF9F6]"
              >
                <Suspense fallback={<FullPageSkeleton />}>
                  <VIPPass
                    isVip={isVip}
                    onUpgrade={() => {
                      setShowVipModal(false);
                      window.dispatchEvent(new CustomEvent('open-paywall-modal', { detail: { featureName: "PRO Benefits" } }));
                    }}
                    onClose={() => setShowVipModal(false)}
                  />
                </Suspense>
              </motion.div>
            )}

            {showLoginModal && (
              <motion.div key="login"
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute inset-0 z-[60] bg-[#FAF9F6]"
              >
                <Suspense fallback={<FullPageSkeleton />}>
                  <Login
                    onClose={() => setShowLoginModal(false)}
                    onLoginSuccess={(target) => {
                      setShowLoginModal(false);
                      if (target === 'developer') {
                        setIsDeveloperMode(true);
                        return;
                      }
                      if (target === 'setup') {
                        setShowAcademicSetup(true);
                      } else if (target === 'onboarding') {
                        setShowOnboarding(true);
                      }
                    }}
                  />
                </Suspense>
              </motion.div>
            )}

            {/* Profile modal removed since it is now a main tab */}
          </AnimatePresence>

          {/* Floating Mobile Toast Notification */}
          <AnimatePresence>
            {mobileToast && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[9999] bg-zinc-900/95 dark:bg-zinc-800/95 text-white px-4 py-2 rounded-full shadow-2xl border border-zinc-700/60 backdrop-blur-md flex items-center gap-2.5 whitespace-nowrap pointer-events-auto"
              >
                <span className="text-xs font-black tracking-tight whitespace-nowrap">
                  {mobileToast}
                </span>
                <button
                  onClick={() => setMobileToast(null)}
                  className="w-5 h-5 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                  title="Close notification"
                >
                  <X className="w-3 h-3" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <Suspense fallback={null}>
            <PaywallModal
              isOpen={showPaywallModal}
              onClose={() => setShowPaywallModal(false)}
              featureName={paywallFeature}
              onSubscribe={(cycle, _hasTrial) => {
                setShowPaywallModal(false);
                triggerConfetti();
                setMobileToast("🚀 Welcome to AP Exam PRO!");
              }}
            />
          </Suspense>

          <WelcomeCelebrationModal
            isOpen={showWelcomeCelebration}
            onClose={() => {
              setShowWelcomeCelebration(false);
            }}
            userId={user?.uid}
            userName={user?.displayName || 'Scholar'}
          />
        </div>
      </AuthGuard>
    </>
  );
}

function NavItem({
  icon,
  label,
  isActive,
  onClick,
  isLightTheme
}: {
  icon: ReactNode,
  label: string,
  isActive: boolean,
  onClick: () => void,
  isLightTheme: boolean
}) {
  return (
    <button
      onClick={() => {
        triggerVibration(15);
        onClick();
      }}
      className={`flex flex-col items-center py-0.5 px-1 rounded-lg transition-all duration-300 ease-in-out w-16 ${isActive
          ? isLightTheme ? 'text-zinc-950 font-black' : 'text-purple-400 font-extrabold'
          : isLightTheme ? 'text-zinc-500 font-bold hover:text-zinc-800' : 'text-zinc-400 hover:text-zinc-100 font-semibold'
        }`}
    >
      <div className={`mb-0 transition-transform duration-300 ${isActive ? 'scale-105' : ''}`}>
        {icon}
      </div>
      <span className="text-[10px] tracking-wide whitespace-nowrap">{label}</span>
    </button>
  );
}
