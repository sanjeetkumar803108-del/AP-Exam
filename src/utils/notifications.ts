import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';

/**
 * AP EXAM APP — US HIGH SCHOOL ROUTINE-OPTIMIZED LOCAL NOTIFICATIONS
 * 
 * Target Persona: US High School Students taking AP courses.
 * Schedule: Strictly 2–3 timed slots per day aligned with high school schedule:
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. SLOT 1 (4:45 PM / 16:45) — After School & Homework Roadblock / Doubt Time
 *    Features: Professor Pang AI Doubt Solver & Magic Worksheet Scanner
 * 
 * 2. SLOT 2 (7:45 PM / 19:45) — Prime Evening AP Study & Concept Mastery Block
 *    Features: Evening Revision & Quick AP Practice Boosters
 * 
 * 3. SLOT 3 (9:30 PM / 21:30) — Bedtime Streak Protection & Daily Wind-Down
 *    Features: Daily Streak Saver & Flame Maintenance
 * ─────────────────────────────────────────────────────────────────────────────
 * Format Constraints:
 *  - Heading: Strictly 2 to 3 words.
 *  - Description: Strictly 4 to 5 words.
 *  - Frequency: Max 3 notifications per day.
 */

export interface APNotificationMessage {
  title: string;
  body: string;
  category: 'doubt_solver' | 'streak_saver' | 'practice_boost' | 'evening_study' | 'magic_scanner';
}

// ─── 1. Category: Professor Pang AI Doubt Solver (Specifically Requested) ──
export const PROFESSOR_PANG_DOUBT_MESSAGES: APNotificationMessage[] = [
  {
    title: "Got AP Doubt?",
    body: "Professor Pang is ready.",
    category: "doubt_solver"
  },
  {
    title: "Stuck On Homework?",
    body: "Ask Professor Pang now.",
    category: "doubt_solver"
  },
  {
    title: "Need Help Now?",
    body: "Professor Pang solves doubts.",
    category: "doubt_solver"
  },
  {
    title: "Professor Pang Ready",
    body: "Clear your doubts instantly.",
    category: "doubt_solver"
  },
  {
    title: "Ask Professor Pang",
    body: "Instant step by step answers.",
    category: "doubt_solver"
  }
];

// ─── 2. Category: Daily Study Streak & Flame Protection ────────────────────
export const STREAK_SAVER_MESSAGES: APNotificationMessage[] = [
  {
    title: "Protect Your Streak!",
    body: "Practice five minutes today.",
    category: "streak_saver"
  },
  {
    title: "Daily Streak Alert",
    body: "Keep your flame burning.",
    category: "streak_saver"
  },
  {
    title: "Save Your Streak!",
    body: "One quick quiz now.",
    category: "streak_saver"
  },
  {
    title: "Keep Streak Burning",
    body: "Do not break progress.",
    category: "streak_saver"
  },
  {
    title: "Streak At Risk!",
    body: "Save your study streak.",
    category: "streak_saver"
  }
];

// ─── 3. Category: Quick AP Practice & Score Boost ──────────────────────────
export const PRACTICE_BOOSTER_MESSAGES: APNotificationMessage[] = [
  {
    title: "Quick AP Practice",
    body: "Master three questions today.",
    category: "practice_boost"
  },
  {
    title: "Boost Your Score",
    body: "Solve five quick questions.",
    category: "practice_boost"
  },
  {
    title: "Aim For Five",
    body: "Crush today's AP practice.",
    category: "practice_boost"
  },
  {
    title: "Quick Brain Challenge",
    body: "Test your skills now.",
    category: "practice_boost"
  },
  {
    title: "Five Minute Quiz",
    body: "Boost your exam readiness.",
    category: "practice_boost"
  }
];

// ─── 4. Category: Evening Review & Exam Prep ───────────────────────────────
export const EVENING_STUDY_MESSAGES: APNotificationMessage[] = [
  {
    title: "Evening Study Time",
    body: "Review key formulas tonight.",
    category: "evening_study"
  },
  {
    title: "Master Tonight's Topic",
    body: "Review your study notes.",
    category: "evening_study"
  },
  {
    title: "Tonight's AP Review",
    body: "Sleep smarter with revision.",
    category: "evening_study"
  },
  {
    title: "Finish Strong Tonight",
    body: "Complete your daily goals.",
    category: "evening_study"
  },
  {
    title: "Bedtime Formula Review",
    body: "Reinforce your memory tonight.",
    category: "evening_study"
  }
];

// ─── 5. Category: Magic Scanner / Problem Solver ───────────────────────────
export const MAGIC_SCANNER_MESSAGES: APNotificationMessage[] = [
  {
    title: "Snap Your Question",
    body: "Scan and get answers.",
    category: "magic_scanner"
  },
  {
    title: "Instant Problem Solver",
    body: "Point camera to solve.",
    category: "magic_scanner"
  },
  {
    title: "Scan To Solve",
    body: "Get step by step help.",
    category: "magic_scanner"
  },
  {
    title: "Tough Math Problem?",
    body: "Scan for instant steps.",
    category: "magic_scanner"
  },
  {
    title: "Solve Any Question",
    body: "Magic scanner solves worksheets.",
    category: "magic_scanner"
  }
];

// Combined pools for scheduled daily slots
const MORNING_POOL = [...PRACTICE_BOOSTER_MESSAGES];
const AFTERNOON_POOL = [...PROFESSOR_PANG_DOUBT_MESSAGES, ...MAGIC_SCANNER_MESSAGES];
const NIGHT_POOL = [...STREAK_SAVER_MESSAGES, ...EVENING_STUDY_MESSAGES];

// ─── Unique Notification IDs & Storage ─────────────────────────────────────
const NOTIFICATION_ID_SLOT_1 = 17001; // 7:45 AM (Morning Warmup / Practice Boost)
const NOTIFICATION_ID_SLOT_2 = 18001; // 4:45 PM (Afternoon Homework / Doubt Solver)
const NOTIFICATION_ID_SLOT_3 = 19001; // 9:30 PM (Night Streak Saver & Formula Review)
const NOTIFICATION_ID_TEST   = 19999; // Instant test notification

const STORAGE_KEY_SCHEDULED = 'study_daily_notification_scheduled_v6';

/**
 * Request notification permissions from the user.
 * Supports Capacitor Native (iOS/Android) and Web.
 */
export async function requestNotificationPermissions(forcePrompt = false): Promise<boolean> {
  if (Capacitor.isNativePlatform()) {
    try {
      const permStatus = await LocalNotifications.checkPermissions();
      if (permStatus.display === 'granted') {
        return true;
      }

      if (!forcePrompt) {
        return false;
      }

      const requestResult = await LocalNotifications.requestPermissions();
      return requestResult.display === 'granted';
    } catch (error) {
      console.warn('[NotificationService] Capacitor permissions request error:', error);
      return false;
    }
  } else {
    // Web Fallback
    if (typeof window !== 'undefined' && 'Notification' in window) {
      try {
        if (Notification.permission === 'granted') {
          return true;
        }

        if (!forcePrompt) {
          return false;
        }

        if (Notification.permission !== 'denied') {
          const permission = await Notification.requestPermission();
          return permission === 'granted';
        }
      } catch (error) {
        console.warn('[NotificationService] Web Notification permission request error:', error);
      }
    }
    return false;
  }
}

/**
 * Cancel all active local notification slots.
 */
export async function cancelAllDailyNotifications() {
  if (!Capacitor.isNativePlatform()) return;
  try {
    // 1. Fetch and cancel all pending notifications from Capacitor AlarmManager
    const pending = await LocalNotifications.getPending();
    if (pending.notifications && pending.notifications.length > 0) {
      await LocalNotifications.cancel({ notifications: pending.notifications }).catch(() => {});
    }

    // 2. Also cancel all legacy & current notification IDs
    const cancelIds = [
      ...Array.from({ length: 50 }, (_, i) => ({ id: 17000 + i })),
      ...Array.from({ length: 50 }, (_, i) => ({ id: 18000 + i })),
      ...Array.from({ length: 50 }, (_, i) => ({ id: 19000 + i })),
      { id: NOTIFICATION_ID_TEST }
    ];
    await LocalNotifications.cancel({ notifications: cancelIds }).catch(() => {});

    localStorage.removeItem(STORAGE_KEY_SCHEDULED);
    console.log('[NotificationService] 🔕 All daily study notifications cancelled.');
  } catch (err) {
    console.warn('[NotificationService] Error cancelling notifications:', err);
  }
}

/**
 * Send an immediate test notification to verify channel, sound, and delivery on device.
 */
export async function sendTestNotificationNow(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) {
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      new Notification("⚡ AP Exam Study Alert", {
        body: "Your daily study reminders are active and synced!",
      });
      return true;
    }
    return false;
  }

  try {
    const hasPerm = await requestNotificationPermissions(true);
    if (!hasPerm) return false;

    // Ensure channel exists
    await LocalNotifications.createChannel({
      id: 'study-reminders',
      name: 'Daily AP Study & Doubt Solver',
      description: 'Timely homework help, Professor Pang doubt solver, and streak reminders',
      importance: 4,
      visibility: 1,
      sound: 'default',
      vibration: true
    }).catch(() => {});

    await LocalNotifications.schedule({
      notifications: [
        {
          id: NOTIFICATION_ID_TEST,
          title: "⚡ AP Exam Study Alert",
          body: "Your daily study reminders are active and synced to your timezone!",
          channelId: 'study-reminders',
          schedule: {
            at: new Date(Date.now() + 1500),
            allowWhileIdle: true
          },
          sound: 'default',
          extra: { type: 'test_notification' }
        }
      ]
    });
    console.log('[NotificationService] 🚀 Immediate test notification scheduled (fires in 1.5s).');
    return true;
  } catch (e) {
    console.error('[NotificationService] Test notification failed:', e);
    return false;
  }
}

/**
 * Schedule strictly 3 daily routine-optimized notification slots in user's local device timezone:
 * Slot 1: 7:45 AM (07:45) — Morning Prep & Quick AP Practice Booster
 * Slot 2: 4:45 PM (16:45) — Afternoon Homework & Professor Pang Doubt Solver
 * Slot 3: 9:30 PM (21:30) — Night Streak Protection & Formula Review
 * 
 * CRITICAL FIX:
 *  - Do NOT pass `every: 'day'` together with `on: { hour, minute }` because Capacitor's
 *    native code bypasses `on` when `every` is present and delays by Date().time + 24hr.
 *  - Set `allowWhileIdle: true` to wake up Android in Doze mode.
 */
export async function scheduleDailyNotification(forceRefresh = false) {
  if (!Capacitor.isNativePlatform()) {
    console.log('[NotificationService] Web: Skipping native notification schedule.');
    localStorage.setItem(STORAGE_KEY_SCHEDULED, 'true');
    return;
  }

  try {
    // If already scheduled and not force refreshed, verify pending count
    if (!forceRefresh && localStorage.getItem(STORAGE_KEY_SCHEDULED) === 'true') {
      const pending = await LocalNotifications.getPending();
      if (pending.notifications && pending.notifications.length >= 3) {
        console.log('[NotificationService] ✅ 3 Daily routine notifications already active in AlarmManager.');
        return;
      }
    }

    // Setup Android Notification Channel with sound & vibration
    try {
      await LocalNotifications.createChannel({
        id: 'study-reminders',
        name: 'Daily AP Study & Doubt Solver',
        description: 'Timely homework help, Professor Pang doubt solver, and streak reminders',
        importance: 4, // High importance
        visibility: 1, // Public on lockscreen
        sound: 'default',
        vibration: true
      });
    } catch (chanErr) {
      console.warn('[NotificationService] Channel creation notice:', chanErr);
    }

    // 1. Purge legacy notification IDs
    await cancelAllDailyNotifications();

    // 2. Dynamically rotate message based on day of year
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));

    const slot1Msg = MORNING_POOL[dayOfYear % MORNING_POOL.length];
    const slot2Msg = AFTERNOON_POOL[dayOfYear % AFTERNOON_POOL.length];
    const slot3Msg = NIGHT_POOL[dayOfYear % NIGHT_POOL.length];

    // 3. Schedule EXACTLY THREE (3) routine notifications per day (in user's local timezone)
    const notifications = [
      {
        id: NOTIFICATION_ID_SLOT_1,
        title: slot1Msg.title,
        body: slot1Msg.body,
        channelId: 'study-reminders',
        schedule: {
          on: {
            hour: 7, // 7:45 AM (Morning AP practice before school)
            minute: 45
          },
          allowWhileIdle: true
        },
        sound: 'default',
        extra: { type: slot1Msg.category }
      },
      {
        id: NOTIFICATION_ID_SLOT_2,
        title: slot2Msg.title,
        body: slot2Msg.body,
        channelId: 'study-reminders',
        schedule: {
          on: {
            hour: 16, // 4:45 PM (After-school homework & doubts)
            minute: 45
          },
          allowWhileIdle: true
        },
        sound: 'default',
        extra: { type: slot2Msg.category }
      },
      {
        id: NOTIFICATION_ID_SLOT_3,
        title: slot3Msg.title,
        body: slot3Msg.body,
        channelId: 'study-reminders',
        schedule: {
          on: {
            hour: 21, // 9:30 PM (Bedtime streak saver & formulas)
            minute: 30
          },
          allowWhileIdle: true
        },
        sound: 'default',
        extra: { type: slot3Msg.category }
      }
    ];

    await LocalNotifications.schedule({ notifications });

    localStorage.setItem(STORAGE_KEY_SCHEDULED, 'true');
    console.log(`[NotificationService] ✅ Successfully scheduled 3 daily routine notifications: 7:45 AM (Morning), 4:45 PM (Doubt/Homework), and 9:30 PM (Streak Saver).`);
  } catch (error) {
    console.error('[NotificationService] Failed to schedule daily notifications:', error);
  }
}

/**
 * Initialize and trigger the setup workflow.
 * Checks permissions, requests if needed, and schedules the notifications.
 */
export async function setupDailyLocalNotifications(forcePrompt = false) {
  console.log('[NotificationService] Checking status of daily local notifications...');
  const hasPermission = await requestNotificationPermissions(forcePrompt);
  if (hasPermission) {
    await scheduleDailyNotification();
  } else {
    console.log('[NotificationService] Notification permission not granted yet.');
  }
}
