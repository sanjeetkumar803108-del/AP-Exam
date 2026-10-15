import { getApiUrl } from '../utils/api';
import { triggerVibration } from '../utils/vibrate';
import { safeSetItem, safeRemoveItem } from '../utils/storage';
import { auth, db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Capacitor } from '@capacitor/core';
import { Purchases, PurchasesPackage } from '@revenuecat/purchases-capacitor';

/**
 * BillingService
 * Hardened production In-App Purchase service powered by RevenueCat & Google Play Billing.
 * Eliminates client-side spoofing and unauthorized bypass fallbacks.
 */
class BillingService {
  private static instance: BillingService;
  
  private constructor() {}

  public static getInstance(): BillingService {
    if (!BillingService.instance) {
      BillingService.instance = new BillingService();
    }
    return BillingService.instance;
  }

  /**
   * Real production RevenueCat purchase flow for PRO subscription
   */
  public async purchasePro(cycle: 'monthly' | 'yearly' = 'yearly', _hasTrial: boolean = true): Promise<boolean> {
    triggerVibration(15);
    try {
      if (Capacitor.isNativePlatform()) {
        const apiKey = (import.meta.env.VITE_REVENUECAT_API_KEY as string) || 'YOUR_REVENUECAT_API_KEY_ANDROID';
        const appUserID = auth.currentUser?.uid || undefined;
        try {
          await Purchases.configure({ apiKey, appUserID });
          if (appUserID) {
            await Purchases.logIn({ appUserID });
          }
        } catch (err) {
          console.warn('RevenueCat configuration error during purchase:', err);
        }

        let packageToPurchase: PurchasesPackage | undefined;
        try {
          const offerings = await Purchases.getOfferings();
          if (offerings?.current) {
            packageToPurchase = cycle === 'monthly' ? offerings.current.monthly : offerings.current.annual;
            if (!packageToPurchase && offerings.current.availablePackages?.length > 0) {
              packageToPurchase = offerings.current.availablePackages[0];
            }
          }
        } catch (e) {
          console.warn('RevenueCat offerings fetch notice:', e);
        }

        if (packageToPurchase) {
          const { customerInfo } = await Purchases.purchasePackage({ aPackage: packageToPurchase });
          const success = !!(customerInfo?.entitlements?.active && (
            customerInfo.entitlements.active['Pro_Access'] || 
            customerInfo.entitlements.active['pro_access'] || 
            customerInfo.entitlements.active['pro']
          ));
          this.finalizeProStatus(success);
          return success;
        }
        return false;
      }

      // Web platform notice: In-App Purchases are strictly supported on Google Play (Android)
      console.warn('[BillingService] Purchases are securely processed via Google Play on native Android app.');
      return false;
    } catch (err: any) {
      console.error('Real IAP Purchase error:', err);
      // Under NO circumstances grant VIP on an error or cancellation
      return false;
    }
  }

  /**
   * Marks or revokes user PRO status and dispatches update events
   */
  public finalizeProStatus(success: boolean): void {
    const currentUser = auth.currentUser;
    if (success) {
      safeSetItem('study_is_vip', 'true');
      if (currentUser) {
        safeSetItem(`study_is_vip_${currentUser.uid}`, 'true');

        // Sync authenticated subscription with backend database
        currentUser.getIdToken().then(token => {
          fetch(getApiUrl('/api/set-subscription'), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              userId: currentUser.uid,
              isPro: true
            })
          })
          .then(res => res.json())
          .then(data => console.log('Successfully synced subscription to backend:', data))
          .catch(err => console.error('Failed to sync subscription with backend:', err));
        }).catch(tokenErr => {
          console.warn('[BillingService] Failed to get auth token for backend sync:', tokenErr);
        });
      }
      
      // Notify the app that the user is now VIP/PRO
      window.dispatchEvent(new CustomEvent('study-vip-updated', { detail: true }));
    } else {
      safeRemoveItem('study_is_vip');
      if (currentUser) {
        safeRemoveItem(`study_is_vip_${currentUser.uid}`);
      }
      window.dispatchEvent(new CustomEvent('study-vip-updated', { detail: false }));
    }
  }

  /**
   * Restores purchases from RevenueCat or verifies with backend database
   */
  public async restorePurchases(): Promise<boolean> {
    triggerVibration(15);
    try {
      if (Capacitor.isNativePlatform()) {
        const apiKey = (import.meta.env.VITE_REVENUECAT_API_KEY as string) || 'YOUR_REVENUECAT_API_KEY_ANDROID';
        const appUserID = auth.currentUser?.uid || undefined;
        try {
          await Purchases.configure({ apiKey, appUserID });
          if (appUserID) {
            await Purchases.logIn({ appUserID });
          }
        } catch (err) {
          console.warn('RevenueCat configuration error during restore:', err);
        }

        const { customerInfo } = await Purchases.restorePurchases();
        const success = !!(customerInfo?.entitlements?.active && (
          customerInfo.entitlements.active['Pro_Access'] || 
          customerInfo.entitlements.active['pro_access'] || 
          customerInfo.entitlements.active['pro']
        ));
        this.finalizeProStatus(success);
        return success;
      }

      // Web verification execution path (Requires verifiable server or Firestore authorization)
      const currentUser = auth.currentUser;
      if (currentUser) {
        // Try fetching user document from Firestore first
        try {
          const userDocSnap = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            if (userData && userData.isPro === true) {
              this.finalizeProStatus(true);
              return true;
            }
          }
        } catch (fsErr) {
          console.warn('Firestore restore check failed, trying backend next:', fsErr);
        }

        try {
          const token = await currentUser.getIdToken();
          const res = await fetch(getApiUrl('/api/verify-subscription'), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ userId: currentUser.uid })
          });
          if (res.ok) {
            const data = await res.json();
            if (data && data.isPro) {
              this.finalizeProStatus(true);
              return true;
            }
          }
        } catch (e) {
          console.warn('Backend restore check failed:', e);
        }
      }

      // If neither RevenueCat nor verified database validates PRO status, revoke PRO
      this.finalizeProStatus(false);
      return false;
    } catch (err) {
      console.error('Restore purchases error:', err);
      this.finalizeProStatus(false);
      return false;
    }
  }
}

export const billingService = BillingService.getInstance();
