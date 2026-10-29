import { db } from '../lib/firebase';
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { get as idbGet, set as idbSet } from 'idb-keyval';
import { 
  UploadedUnitPdf, 
  registerUnitPdf, 
  unregisterUnitPdf, 
  getUnitPdfKey,
  UPLOADED_UNIT_PDFS
} from '../data/testPrepUnitsData';
import { getApiUrl } from '../utils/api';

const IDB_UNIT_PDFS_KEY = 'ap_unit_sample_papers_vault_v3';
const FIRESTORE_COLLECTION = 'ap_unit_sample_papers';
const CHUNKS_COLLECTION = 'ap_unit_sample_paper_chunks';
const CHUNK_SIZE = 800000; // 800KB per chunk to safely stay within Firestore's 1MB doc limit while minimizing doc count

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 8000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export interface StoredUnitPdfRecord {
  key: string; // Format: `${subjectId}-${unitNumber}` (e.g. "ap-calculus-ab-1")
  subjectId: string;
  subjectName?: string;
  unitNumber: number;
  pdfData: UploadedUnitPdf;
  updatedAt: number;
  isCustomUpload?: boolean;
}

/**
 * Built-in baseline canonical papers bundled with the app.
 * All previous faulty papers have been purged per owner request.
 */
export const BUNDLED_DEFAULT_UNIT_PAPERS: StoredUnitPdfRecord[] = [];

let syncInitialized = false;

/**
 * Completely purges all unit papers across memory, local IndexedDB, Server Vault, and Firestore.
 */
export async function clearAllUnitPdfs(): Promise<void> {
  // 1. Clear in-memory registry
  for (const k in UPLOADED_UNIT_PDFS) {
    delete UPLOADED_UNIT_PDFS[k];
  }

  // 2. Clear all local IndexedDB vaults
  try {
    await idbSet('ap_unit_sample_papers_vault_v1', []);
    await idbSet('ap_unit_sample_papers_vault_v2', []);
    await idbSet(IDB_UNIT_PDFS_KEY, []);
  } catch (err) {
    console.warn('[UnitPdfService] IDB clear notice:', err);
  }

  // 3. Clear Backend Server Disk Vault
  try {
    await fetchWithTimeout(getApiUrl('/api/unit-pdfs/clear-all'), { method: 'POST' }, 5000);
  } catch (err) {
    console.warn('[UnitPdfService] Server clear notice:', err);
  }

  // 4. Broadcast events so UI components update instantly
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('unit-pdfs-updated'));
    window.dispatchEvent(new CustomEvent('sample-papers-updated'));
  }
}

/**
 * Initializes synchronization of dynamically uploaded AP Sample Paper sets.
 * 1. Loads all existing developer uploads from permanent local IndexedDB storage (v3).
 * 2. Fetches newly uploaded papers from backend Server Disk Vault (/api/unit-pdfs).
 * 3. Merges records safely without ever wiping or clearing locally saved papers.
 * 4. Only developer actions (explicit Delete button) can ever delete a paper.
 */
export async function initUnitPdfsSync(force = false): Promise<void> {
  if (syncInitialized && !force && typeof window !== 'undefined') return;
  syncInitialized = true;

  const recordsMap = new Map<string, StoredUnitPdfRecord>();

  // 1. First Pass: Instant local cache from IndexedDB (v3)
  try {
    const cached: StoredUnitPdfRecord[] = (await idbGet(IDB_UNIT_PDFS_KEY)) || [];
    if (Array.isArray(cached) && cached.length > 0) {
      for (const record of cached) {
        if (record && record.key && record.pdfData) {
          recordsMap.set(record.key, record);
          registerUnitPdf(record.key, record.pdfData);
        }
      }
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('unit-pdfs-updated'));
        window.dispatchEvent(new CustomEvent('sample-papers-updated'));
      }
    }
  } catch (err) {
    console.warn('[UnitPdfService] IndexedDB initial load notice:', err);
  }

  // 2. Second Pass: Sync from Backend Server Vault & Firestore in background
  const syncFromRemote = async () => {
    let hasRemoteUpdates = false;

    // A. Fetch from backend Server Disk Vault (/api/unit-pdfs)
    try {
      const res = await fetchWithTimeout(getApiUrl('/api/unit-pdfs'), {
        headers: { 'Accept': 'application/json' }
      }, 6000);
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json.records) && json.records.length > 0) {
          for (const rec of json.records) {
            if (rec && rec.key && rec.pdfData) {
              recordsMap.set(rec.key, rec);
              registerUnitPdf(rec.key, rec.pdfData);
              hasRemoteUpdates = true;
            }
          }
        }
      }
    } catch (apiErr) {
      console.warn('[UnitPdfService] Server Vault sync notice:', apiErr);
    }

    // B. Also attempt Cloud Firestore sync if enabled
    try {
      if (typeof navigator !== 'undefined' && navigator.onLine) {
        const snapshot = await getDocs(collection(db, FIRESTORE_COLLECTION));
        if (!snapshot.empty) {
          for (const docSnap of snapshot.docs) {
            const data = docSnap.data() as any;
            const key = docSnap.id || data.key;
            if (!key) continue;

            let fullPdfUrl = data.pdfData?.pdfUrl || '';

            // If paper was stored in multiple chunks
            if (data.isChunked && data.chunkCount && data.chunkCount > 0) {
              try {
                const chunkPromises: Promise<any>[] = [];
                for (let i = 0; i < data.chunkCount; i++) {
                  chunkPromises.push(getDoc(doc(db, CHUNKS_COLLECTION, `${key}_chunk_${i}`)));
                }
                const chunkSnaps = await Promise.all(chunkPromises);
                fullPdfUrl = chunkSnaps.map(cs => cs.data()?.chunk || '').join('');
              } catch (chunkErr) {
                console.warn(`[UnitPdfService] Failed to reassemble chunks for ${key}:`, chunkErr);
              }
            }

            if (fullPdfUrl) {
              const resolvedPdfData: UploadedUnitPdf = {
                ...data.pdfData,
                pdfUrl: fullPdfUrl,
              };

              const record: StoredUnitPdfRecord = {
                key,
                subjectId: data.subjectId,
                subjectName: data.subjectName,
                unitNumber: data.unitNumber,
                pdfData: resolvedPdfData,
                updatedAt: data.updatedAt || Date.now(),
                isCustomUpload: true,
              };

              recordsMap.set(key, record);
              registerUnitPdf(key, resolvedPdfData);
              hasRemoteUpdates = true;
            }
          }
        }
      }
    } catch (cloudErr) {
      // Quietly ignore if Firestore API is disabled or unreachable
    }

    // C. CRITICAL GUARD: Only save if records exist! NEVER wipe out IndexedDB with empty array!
    if (recordsMap.size > 0) {
      try {
        const merged = Array.from(recordsMap.values());
        await idbSet(IDB_UNIT_PDFS_KEY, merged);

        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('unit-pdfs-updated'));
          window.dispatchEvent(new CustomEvent('sample-papers-updated'));
        }
      } catch (persistErr) {
        console.warn('[UnitPdfService] Merged IndexedDB save notice:', persistErr);
      }
    }
  };

  // Run in background without blocking caller
  syncFromRemote().catch(() => {});
}

/**
 * Asynchronously persists the unit PDF to backend disk vault and Cloud Firestore in the background.
 * Uses parallel batches for Firestore chunk uploads (4x faster).
 */
async function syncRecordToRemoteBackground(newRecord: StoredUnitPdfRecord): Promise<void> {
  const { key, subjectId, subjectName, unitNumber, pdfData } = newRecord;

  // 1. Sync to Backend Server Disk Vault (/api/unit-pdfs) with timeout
  try {
    const res = await fetchWithTimeout(getApiUrl('/api/unit-pdfs'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecord)
    }, 10000);
    if (res.ok) {
      console.log(`[UnitPdfService] Successfully persisted '${key}' to backend disk vault.`);
    }
  } catch (apiErr) {
    console.warn('[UnitPdfService] Server API sync notice:', apiErr);
  }

  // 2. Sync to Cloud Firestore in parallel batches
  try {
    const pdf = pdfData.pdfUrl || '';
    if (pdf.length <= CHUNK_SIZE) {
      await setDoc(doc(db, FIRESTORE_COLLECTION, key), {
        key,
        subjectId,
        subjectName,
        unitNumber,
        pdfData,
        isChunked: false,
        updatedAt: Date.now(),
      });
    } else {
      // Chunked upload for large base64 PDFs
      const chunks: string[] = [];
      for (let i = 0; i < pdf.length; i += CHUNK_SIZE) {
        chunks.push(pdf.substring(i, i + CHUNK_SIZE));
      }

      // Parallel batch uploads (4 chunks simultaneously) for maximum network efficiency
      const BATCH_SIZE = 4;
      for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
        const batch = chunks.slice(i, i + BATCH_SIZE);
        await Promise.all(
          batch.map((chunk, idx) => {
            const chunkIndex = i + idx;
            return setDoc(doc(db, CHUNKS_COLLECTION, `${key}_chunk_${chunkIndex}`), {
              chunk,
              chunkIndex,
              parentKey: key,
            });
          })
        );
      }

      const metadataOnly: UploadedUnitPdf = {
        ...pdfData,
        pdfUrl: '', // reassembled on client fetch
      };

      await setDoc(doc(db, FIRESTORE_COLLECTION, key), {
        key,
        subjectId,
        subjectName,
        unitNumber,
        pdfData: metadataOnly,
        isChunked: true,
        chunkCount: chunks.length,
        updatedAt: Date.now(),
      });
    }
    console.log(`[UnitPdfService] Successfully synchronized '${key}' to Cloud Firestore.`);
  } catch (fsErr) {
    console.warn('[UnitPdfService] Cloud Firestore write notice (locally cached):', fsErr);
  }
}

/**
 * Uploads an AP Sample Paper PDF directly into the student app's AP Sample Paper Sets feature.
 * Saves instantly to in-memory registry + permanent local IndexedDB in <100ms, then
 * synchronizes to backend disk vault and Cloud Firestore in the background.
 */
export async function uploadUnitPdfToApp(
  subjectId: string,
  unitNumber: number,
  subjectName: string,
  pdfData: UploadedUnitPdf
): Promise<StoredUnitPdfRecord> {
  const key = getUnitPdfKey(subjectId, unitNumber);

  // 1. Instant in-memory register (0ms)
  registerUnitPdf(key, pdfData);

  const newRecord: StoredUnitPdfRecord = {
    key,
    subjectId,
    subjectName,
    unitNumber,
    pdfData,
    updatedAt: Date.now(),
    isCustomUpload: true,
  };

  // 2. Save to local permanent IndexedDB (Instant ~30ms)
  try {
    const existing: StoredUnitPdfRecord[] = (await idbGet(IDB_UNIT_PDFS_KEY)) || [];
    const filtered = existing.filter(r => r.key !== key);
    filtered.push(newRecord);
    await idbSet(IDB_UNIT_PDFS_KEY, filtered);
  } catch (idbErr) {
    console.warn('[UnitPdfService] Failed to save unit PDF to IndexedDB:', idbErr);
  }

  // 3. Immediately broadcast event across student app and developer dashboard (0ms)
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('unit-pdfs-updated', { detail: { key, pdfData } }));
    window.dispatchEvent(new CustomEvent('sample-papers-updated'));
  }

  // 4. Asynchronous Cloud & Server Sync in background (non-blocking!)
  syncRecordToRemoteBackground(newRecord).catch(err => {
    console.warn('[UnitPdfService] Background sync warning:', err);
  });

  // 5. Instant UI return!
  return newRecord;
}

/**
 * Deletes an uploaded unit PDF from AP Sample Paper Sets.
 */
export async function deleteUnitPdfFromApp(
  subjectId: string,
  unitNumber: number
): Promise<void> {
  const key = getUnitPdfKey(subjectId, unitNumber);

  // 1. Instant in-memory unregister
  unregisterUnitPdf(key);

  // 2. Remove from local IndexedDB
  try {
    const existing: StoredUnitPdfRecord[] = (await idbGet(IDB_UNIT_PDFS_KEY)) || [];
    const filtered = existing.filter(r => r.key !== key);
    await idbSet(IDB_UNIT_PDFS_KEY, filtered);
  } catch (idbErr) {
    console.warn('[UnitPdfService] Failed to remove from IndexedDB:', idbErr);
  }

  // 3. Broadcast instant UI event
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('unit-pdfs-updated', { detail: { key, deleted: true } }));
    window.dispatchEvent(new CustomEvent('sample-papers-updated'));
  }

  // 4. Remote cleanup in background (non-blocking)
  (async () => {
    try {
      await fetchWithTimeout(getApiUrl(`/api/unit-pdfs/${encodeURIComponent(key)}`), {
        method: 'DELETE'
      }, 5000);
    } catch (apiErr) {
      console.warn('[UnitPdfService] Server API delete notice:', apiErr);
    }
    try {
      await deleteDoc(doc(db, FIRESTORE_COLLECTION, key));
    } catch (fsErr) {
      console.warn('[UnitPdfService] Firestore delete notice:', fsErr);
    }
  })().catch(() => {});
}

/**
 * Returns all custom uploaded Unit PDFs for Developer Dashboard listing.
 * Combines IndexedDB, Server API vault, and in-memory registry so no published paper is ever lost.
 */
export async function getPublishedUnitPdfsList(): Promise<StoredUnitPdfRecord[]> {
  const map = new Map<string, StoredUnitPdfRecord>();

  // 1. Local IndexedDB
  try {
    const cached: StoredUnitPdfRecord[] = (await idbGet(IDB_UNIT_PDFS_KEY)) || [];
    if (Array.isArray(cached)) {
      cached.forEach(c => {
        if (c && c.key) map.set(c.key, c);
      });
    }
  } catch (_) {}

  // 2. Server Disk Vault API
  try {
    const res = await fetchWithTimeout(getApiUrl('/api/unit-pdfs'), {
      headers: { 'Accept': 'application/json' }
    }, 5000);
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json.records)) {
        json.records.forEach((r: any) => {
          if (r && r.key) {
            map.set(r.key, r);
            registerUnitPdf(r.key, r.pdfData);
          }
        });
      }
    }
  } catch (_) {}

  // 3. In-memory registry fallback
  for (const [key, pdfData] of Object.entries(UPLOADED_UNIT_PDFS)) {
    if (!map.has(key) && pdfData) {
      map.set(key, {
        key,
        subjectId: key.split('-').slice(0, -1).join('-'),
        unitNumber: Number(key.split('-').slice(-1)[0]) || 0,
        pdfData,
        updatedAt: Date.now(),
        isCustomUpload: true,
      });
    }
  }

  return Array.from(map.values()).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
}

// Auto-initialize when running in browser
if (typeof window !== 'undefined') {
  initUnitPdfsSync().catch(err => {
    console.warn('[UnitPdfService] Auto-init notice:', err);
  });
}
