import { db } from '../lib/firebase';
import { doc, setDoc, onSnapshot, Unsubscribe } from 'firebase/firestore';
import { safeGetItem, safeSetItem } from './storage';
import { Capacitor } from '@capacitor/core';

const SESSION_TOKEN_KEY = 'study_active_session_token';
const DEVICE_ID_KEY = 'study_unique_device_id';

/**
 * Retrieves or generates a persistent device hardware/browser ID for this client.
 */
export function getPersistentDeviceId(): string {
  let devId = safeGetItem(DEVICE_ID_KEY);
  if (!devId) {
    const platform = Capacitor.getPlatform();
    const rand = Math.random().toString(36).substring(2, 9);
    devId = `dev_${platform}_${Date.now()}_${rand}`;
    safeSetItem(DEVICE_ID_KEY, devId);
  }
  return devId;
}

/**
 * Generates a unique session token for this specific login session.
 */
export function generateSessionToken(): string {
  const devId = getPersistentDeviceId();
  const time = Date.now();
  const rand = Math.random().toString(36).substring(2, 7);
  return `${devId}_sess_${time}_${rand}`;
}

/**
 * Gets the current active session token for this window/app instance.
 * Checks sessionStorage first (to isolate multiple tabs in the same browser if needed),
 * then falls back to localStorage (for persistent mobile app restarts).
 */
export function getLocalSessionToken(): string {
  let token: string | null = null;
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      token = window.sessionStorage.getItem(SESSION_TOKEN_KEY);
    } catch {}
  }
  if (!token) {
    token = safeGetItem(SESSION_TOKEN_KEY);
  }
  return token || '';
}

/**
 * Saves the session token locally.
 */
export function setLocalSessionToken(token: string): void {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      window.sessionStorage.setItem(SESSION_TOKEN_KEY, token);
    } catch {}
  }
  safeSetItem(SESSION_TOKEN_KEY, token);
}

/**
 * Clears local session token on logout.
 */
export function clearLocalSessionToken(): void {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      window.sessionStorage.removeItem(SESSION_TOKEN_KEY);
    } catch {}
  }
  try {
    localStorage.removeItem(SESSION_TOKEN_KEY);
  } catch {}
}

/**
 * Claims the single active session in Firestore for this user.
 * Overwrites any previous session, causing any other logged-in device to be logged out.
 */
export async function claimUserSession(userId: string): Promise<string> {
  if (!userId) return '';
  const token = generateSessionToken();
  setLocalSessionToken(token);

  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      activeSessionId: token,
      lastSessionLoginAt: new Date().toISOString(),
      lastDevicePlatform: Capacitor.getPlatform(),
      lastDeviceId: getPersistentDeviceId()
    }, { merge: true });
    console.log(`[SingleSession] Claimed active session in Firestore for ${userId}: ${token}`);
  } catch (err) {
    console.warn('[SingleSession] Failed to write activeSessionId to Firestore:', err);
  }

  return token;
}

/**
 * Real-time listener for remote session revocation.
 * If another device logs in, activeSessionId in Firestore will change,
 * triggering onRevoked() callback immediately.
 */
export function subscribeToSessionRevocation(
  userId: string,
  onRevoked: (remoteTime?: string) => void
): Unsubscribe {
  const userRef = doc(db, 'users', userId);

  return onSnapshot(userRef, (snapshot) => {
    if (!snapshot.exists()) return;

    const data = snapshot.data();
    const remoteSessionId = data?.activeSessionId;
    const localSessionId = getLocalSessionToken();

    // If Firestore has an active session and it differs from our local session token:
    if (remoteSessionId && localSessionId && remoteSessionId !== localSessionId) {
      console.warn(`[SingleSession] REVOKED! Remote: ${remoteSessionId} vs Local: ${localSessionId}`);
      onRevoked(data?.lastSessionLoginAt);
    }
  }, (err) => {
    console.warn('[SingleSession] Firestore snapshot notice:', err?.message || err);
  });
}
