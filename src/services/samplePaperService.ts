import { db } from '../lib/firebase';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { safeGetItem, safeSetItem } from '../utils/storage';
import { APSamplePaper } from '../types/samplePapers';
import { getApiUrl } from '../utils/api';

const CACHE_KEY = 'ap_sample_papers_cache';
const COLLECTION_NAME = 'ap_sample_papers';

/**
 * Fetch all AP Sample Papers.
 * Reads from:
 * 1. Local Cache (instant response)
 * 2. Cloud Server Vault API (/api/sample-papers)
 * 3. Firestore Collection (ap_sample_papers)
 * Merges, dedupes, and auto-syncs any local-only papers to the cloud vault.
 */
export async function fetchSamplePapers(): Promise<APSamplePaper[]> {
  const cachedPapers = getCachedSamplePapers();
  const papersMap = new Map<string, APSamplePaper>();

  // 1. Pre-populate from local cache
  cachedPapers.forEach(p => {
    if (p.id) papersMap.set(p.id, p);
  });

  // 2. Fetch from Cloud Backend Vault API
  let serverPapers: APSamplePaper[] = [];
  try {
    const res = await fetch(getApiUrl('/api/sample-papers'), {
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json.papers)) {
        serverPapers = json.papers;
        serverPapers.forEach((p: APSamplePaper) => {
          if (p.id) papersMap.set(p.id, p);
        });
      }
    }
  } catch (apiErr) {
    console.warn('[SamplePaperService] Cloud API fetch notice:', apiErr);
  }

  // 3. Fetch from Firestore Collection
  try {
    const snapshot = await getDocs(collection(db, COLLECTION_NAME));
    if (!snapshot.empty) {
      snapshot.forEach(docSnap => {
        const data = docSnap.data() as APSamplePaper;
        const id = docSnap.id || data.id;
        papersMap.set(id, { ...data, id });
      });
    }
  } catch (firestoreErr) {
    console.warn('[SamplePaperService] Firestore fetch notice:', firestoreErr);
  }

  const mergedPapers = Array.from(papersMap.values()).sort(
    (a, b) => (b.uploadedAt || 0) - (a.uploadedAt || 0)
  );

  // 4. AUTO-SYNC & MIGRATION:
  // If local cache had any paper that was not found on the server vault,
  // push it to the server and Firestore in the background so all other devices receive it!
  if (cachedPapers.length > 0) {
    const serverIds = new Set(serverPapers.map(p => p.id));
    const unsynced = cachedPapers.filter(p => !serverIds.has(p.id));
    if (unsynced.length > 0) {
      console.log(`[SamplePaperService] Found ${unsynced.length} unsynced local paper(s). Auto-migrating to cloud vault...`);
      for (const paper of unsynced) {
        syncPaperToCloud(paper).catch(console.warn);
      }
    }
  }

  // 5. Update local cache with complete merged list
  if (mergedPapers.length > 0) {
    safeSetItem(CACHE_KEY, JSON.stringify(mergedPapers));
  }

  return mergedPapers;
}

/**
 * Helper to sync a paper to both Cloud Server and Firestore.
 */
async function syncPaperToCloud(paper: APSamplePaper): Promise<void> {
  // Post to Cloud Server Vault
  try {
    await fetch(getApiUrl('/api/sample-papers'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paper)
    });
    console.log(`[SamplePaperService] Synced '${paper.title}' to cloud vault.`);
  } catch (e) {
    console.warn(`[SamplePaperService] Could not sync paper to server vault:`, e);
  }

  // Save to Firestore (only if size is < 900KB to respect 1MB doc limit)
  try {
    const jsonStr = JSON.stringify(paper);
    if (jsonStr.length < 900000) {
      const docRef = doc(db, COLLECTION_NAME, paper.id);
      await setDoc(docRef, paper, { merge: true });
    }
  } catch (e) {
    console.warn(`[SamplePaperService] Could not sync paper to Firestore:`, e);
  }
}

/**
 * Upload a new AP Sample Paper.
 * Saves to Local Cache, Cloud Server Vault, and Firestore.
 */
export async function uploadSamplePaper(paperData: Omit<APSamplePaper, 'id' | 'uploadedAt'>): Promise<APSamplePaper> {
  const id = `paper_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const paper: APSamplePaper = {
    ...paperData,
    id,
    uploadedAt: Date.now(),
    uploadedBy: 'sanjeetkumar803108@gmail.com'
  };

  // 1. Save to local cache first for instant UI response
  try {
    const existing = getCachedSamplePapers();
    const updated = [paper, ...existing.filter(p => p.id !== id)];
    safeSetItem(CACHE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('[SamplePaperService] Failed to update local cache:', e);
  }

  // 2. Persist to Cloud Server and Firestore
  await syncPaperToCloud(paper);

  return paper;
}

/**
 * Delete a sample paper by ID.
 */
export async function deleteSamplePaper(id: string): Promise<void> {
  // 1. Remove from local cache
  try {
    const existing = getCachedSamplePapers();
    const updated = existing.filter(p => p.id !== id);
    safeSetItem(CACHE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('[SamplePaperService] Cache delete error:', e);
  }

  // 2. Remove from Cloud Server Vault
  try {
    await fetch(getApiUrl(`/api/sample-papers/${id}`), {
      method: 'DELETE'
    });
  } catch (e) {
    console.warn('[SamplePaperService] Server delete error:', e);
  }

  // 3. Remove from Firestore
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
