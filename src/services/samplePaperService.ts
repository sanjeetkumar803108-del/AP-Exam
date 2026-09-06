import { db } from '../lib/firebase';
import { collection, getDocs, doc, setDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { safeGetItem, safeSetItem } from '../utils/storage';
import { APSamplePaper } from '../types/samplePapers';

const CACHE_KEY = 'ap_sample_papers_cache';
const COLLECTION_NAME = 'ap_sample_papers';

/**
 * Fetch all AP Sample Papers.
 * Reads from Firestore with fallback to cached papers.
 */
export async function fetchSamplePapers(): Promise<APSamplePaper[]> {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('uploadedAt', 'desc'));
    const snapshot = await getDocs(q);
    
    if (!snapshot.empty) {
      const papers: APSamplePaper[] = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data() as APSamplePaper;
        papers.push({ ...data, id: docSnap.id });
      });
      // Update local cache
      safeSetItem(CACHE_KEY, JSON.stringify(papers));
      return papers;
    }
  } catch (error) {
    console.warn('[SamplePaperService] Firestore fetch error, reading from local cache:', error);
  }

  // Fallback to local cache
  try {
    const cached = safeGetItem(CACHE_KEY);
    if (cached) {
      return JSON.parse(cached) as APSamplePaper[];
    }
  } catch (e) {
    console.error('[SamplePaperService] Cache parse error:', e);
  }

  return [];
}

/**
 * Upload a new AP Sample Paper.
 * Saves to both Firestore and local storage.
 */
export async function uploadSamplePaper(paperData: Omit<APSamplePaper, 'id' | 'uploadedAt'>): Promise<APSamplePaper> {
  const id = `paper_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const paper: APSamplePaper = {
    ...paperData,
    id,
    uploadedAt: Date.now(),
    uploadedBy: 'sanjeetkumar803108@gmail.com'
  };

  // 1. Save to local cache first for instant reactivity
  try {
    const existing = await getCachedSamplePapers();
    const updated = [paper, ...existing];
    safeSetItem(CACHE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('[SamplePaperService] Failed to update local cache:', e);
  }

  // 2. Persist to Firestore
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await setDoc(docRef, paper);
  } catch (error) {
    console.warn('[SamplePaperService] Firestore upload error (cached locally):', error);
  }

  return paper;
}

/**
 * Delete a sample paper by ID.
 */
export async function deleteSamplePaper(id: string): Promise<void> {
  // 1. Remove from local cache
  try {
    const existing = await getCachedSamplePapers();
    const updated = existing.filter(p => p.id !== id);
    safeSetItem(CACHE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('[SamplePaperService] Cache delete error:', e);
  }

  // 2. Remove from Firestore
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.warn('[SamplePaperService] Firestore delete error:', error);
  }
}

/**
 * Get cached sample papers synchronously.
 */
export function getCachedSamplePapers(): APSamplePaper[] {
  try {
    const cached = safeGetItem(CACHE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.error('[SamplePaperService] Local read error:', e);
  }
  return [];
}
