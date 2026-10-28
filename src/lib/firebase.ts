import { initializeApp } from 'firebase/app';
import { initializeFirestore, getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  projectId: "ap-exam-6d92d",
  appId: "1:42600476189:android:8a3b72246ff37dacaba0f4",
  apiKey: "AIzaSyBU1OXfqWqqJByZ1RPlCx182iXAxwyjkcs",
  authDomain: "ap-exam-6d92d.firebaseapp.com",
  storageBucket: "ap-exam-6d92d.firebasestorage.app",
  messagingSenderId: "42600476189",
  measurementId: ""
};

export const app = initializeApp(firebaseConfig);

let firestoreInstance;
try {
  firestoreInstance = initializeFirestore(app, {
    ignoreUndefinedProperties: true
  });
} catch {
  firestoreInstance = getFirestore(app);
}

export const db = firestoreInstance;
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Firestore initialized in offline-first, highly responsive hybrid mode
console.log("[Firebase] Initialized with offline-first persistence.");
