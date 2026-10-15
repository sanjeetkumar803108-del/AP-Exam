/**
 * Data Inventory, RBAC & Data Retention Management
 * Complies with COPPA, FERPA, and Student Data Privacy standards for AP Exam Prep.
 */

import { safeGetItem, safeRemoveItem } from './storage';

export type UserRole = 'student' | 'teacher' | 'admin';

export interface DataCategoryInventory {
  category: string;
  fields: string[];
  storageLocation: 'Firestore' | 'Firebase Storage' | 'LocalStorage' | 'Server Disk';
  retentionPeriodDays: number; // e.g. 365 days for academic year, 30 days for transient uploads
  accessControl: string;
  isPersonalData: boolean;
}

/**
 * Formal Data Inventory & Threat Model Specification
 */
export const APP_DATA_INVENTORY: DataCategoryInventory[] = [
  {
    category: 'User Authentication & Profile',
    fields: ['uid', 'email', 'displayName', 'photoURL', 'grade', 'stream', 'country'],
    storageLocation: 'Firestore',
    retentionPeriodDays: 365,
    accessControl: 'User-Isolated (Owner only) / Admin Read',
    isPersonalData: true,
  },
  {
    category: 'Daily Coins & Quota Tokens',
    fields: ['coins', 'daily_limit', 'transactions'],
    storageLocation: 'Firestore',
    retentionPeriodDays: 180,
    accessControl: 'User-Isolated (Owner only)',
    isPersonalData: false,
  },
  {
    category: 'AI Tutor Chat History',
    fields: ['messages', 'chatId', 'timestamp', 'subjectId'],
    storageLocation: 'Firestore',
    retentionPeriodDays: 180,
    accessControl: 'User-Isolated (request.auth.uid == userId)',
    isPersonalData: true,
  },
  {
    category: 'OCR Homework & Scan Photos',
    fields: ['chat_images', 'scans'],
    storageLocation: 'Firebase Storage',
    retentionPeriodDays: 90,
    accessControl: 'Storage Rules user isolation (5MB limit, image/* only)',
    isPersonalData: true,
  },
  {
    category: 'Study Notes & Mistake Vault',
    fields: ['MistakeVault', 'pocket_items', 'quiz_results'],
    storageLocation: 'Firestore',
    retentionPeriodDays: 365,
    accessControl: 'User-Isolated (Owner only)',
    isPersonalData: false,
  },
  {
    category: 'AI Content Feedback & Bug Reports',
    fields: ['reason', 'details', 'aiOutput', 'context', 'userEmail'],
    storageLocation: 'Server Disk',
    retentionPeriodDays: 90,
    accessControl: 'Admin authorization key required',
    isPersonalData: true,
  }
];

/**
 * Verifies if a role has the required permissions for an action
 */
export function hasPermission(role: UserRole = 'student', action: 'read_public' | 'read_own' | 'write_own' | 'admin_override' | 'manage_papers'): boolean {
  switch (action) {
    case 'read_public':
    case 'read_own':
    case 'write_own':
      return true; // All roles can access public and own items
    case 'manage_papers':
    case 'admin_override':
      return role === 'admin';
    default:
      return false;
  }
}

/**
 * Cleans up expired transient study caches and orphaned previews from local storage.
 * Runs on app initialization to prevent data accumulation.
 */
export function scrubTransientData(): { cleanedKeys: number } {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { cleanedKeys: 0 };
  }

  let cleaned = 0;
  const now = Date.now();
  const TRANSIENT_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

  try {
    const keysToCheck: string[] = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (k && (k.startsWith('temp_preview_') || k.startsWith('transient_scan_') || k.startsWith('stale_tutor_chats_'))) {
        keysToCheck.push(k);
      }
    }

    for (const key of keysToCheck) {
      try {
        const item = safeGetItem(key);
        if (item) {
          const parsed = JSON.parse(item);
          if (parsed && parsed.timestamp && (now - Number(parsed.timestamp) > TRANSIENT_MAX_AGE_MS)) {
            safeRemoveItem(key);
            cleaned++;
          }
        }
      } catch {
        // Non-JSON transient key, clean if orphaned
        safeRemoveItem(key);
        cleaned++;
      }
    }
  } catch (err) {
    console.warn('[DataRetention] Scrub notice:', err);
  }

  return { cleanedKeys: cleaned };
}
