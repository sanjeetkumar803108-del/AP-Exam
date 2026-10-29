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
const CHUNK_SIZE = 500000; // 500KB per chunk to safely stay within Firestore's 1MB doc limit

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
    await fetch(getApiUrl('/api/unit-pdfs/clear-all'), { method: 'POST' });
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
 * 1. Clears in-memory cache and obsolete faulty paper caches.
 * 2. Loads genuine developer uploads from permanent local IndexedDB storage (v3).
 * 3. Fetches newly uploaded papers from backend Server Disk Vault (/api/unit-pdfs).
 * 4. Also checks Firestore as parallel cloud source.
 * 5. Injects them into UPLOADED_UNIT_PDFS in memory.
 */
export async function initUnitPdfsSync(force = false): Promise<void> {
  if (syncInitialized && !force && typeof window !== 'undefined') return;
  syncInitialized = true;

  // Clear in-memory registry to ensure 0 faulty papers remain
  for (const k in UPLOADED_UNIT_PDFS) {
    delete UPLOADED_UNIT_PDFS[k];
  }

  // Purge legacy IndexedDB keys that stored the obsolete/faulty bundled papers
  try {
    await idbSet('ap_unit_sample_papers_vault_v1', []);
    await idbSet('ap_unit_sample_papers_vault_v2', []);
  } catch (_) {}

  // 1. First Pass: Instant local cache from IndexedDB (v3)
  try {
    const cached: StoredUnitPdfRecord[] = (await idbGet(IDB_UNIT_PDFS_KEY)) || [];
    if (Array.isArray(cached) && cached.length > 0) {
      for (const record of cached) {
        if (record && record.key && record.pdfData) {
          registerUnitPdf(record.key, record.pdfData);
        }
      }
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('unit-pdfs-updated'));
      }
    }
  } catch (err) {
    console.warn('[UnitPdfService] IndexedDB initial load notice:', err);
  }

  // 2. Second Pass: Sync from Backend Server Vault & Firestore
  const syncFromRemote = async () => {
    const recordsMap = new Map<string, StoredUnitPdfRecord>();

    // A. Fetch from backend Server Disk Vault (/api/unit-pdfs)
    try {
      const res = await fetch(getApiUrl('/api/unit-pdfs'), {
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json.records)) {
          for (const rec of json.records) {
            if (rec && rec.key && rec.pdfData) {
              recordsMap.set(rec.key, rec);
              registerUnitPdf(rec.key, rec.pdfData);
            }
          }
        }
      }
    } catch (apiErr) {
      console.warn('[UnitPdfService] Server Vault sync notice:', apiErr);
    }

    // B. Also attempt Cloud Firestore sync
    try {
      if (typeof navigator !== 'undefined' && navigator.onLine) {
        const snapshot = await getDocs(collection(db, FIRESTORE_COLLECTION));
        if (!snapshot.empty) {
          for (const docSnap of snapshot.docs) {
            const data = docSnap.data() as any;
            const key = docSnap.id || data.key;
            if (!key) continue;

            let fullPdfUrl = data.pdfData?.pdfUrl || '';

            // If paper was stored in multiple chunks (>500KB)
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
            }
          }
        }
      }
    } catch (cloudErr) {
      console.warn('[UnitPdfService] Firestore sync notice (offline or permission):', cloudErr);
    }

    // C. Persist merged records to IndexedDB permanently
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
  };

  // Run in background without blocking caller
  syncFromRemote().catch(() => {});
}

/**
 * Uploads an AP Sample Paper PDF directly into the student app's AP Sample Paper Sets feature.
 * Saves to:
 * 1. In-memory registry
 * 2. Permanent local IndexedDB
 * 3. Backend Server Disk Vault (/api/unit-pdfs)
 * 4. Cloud Firestore (with chunking)
 */
export async function uploadUnitPdfToApp(
  subjectId: string,
  unitNumber: number,
  subjectName: string,
  pdfData: UploadedUnitPdf
): Promise<StoredUnitPdfRecord> {
  const key = getUnitPdfKey(subjectId, unitNumber);

  // 1. Instant in-memory register
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

  // 2. Save to local permanent IndexedDB
  try {
    const existing: StoredUnitPdfRecord[] = (await idbGet(IDB_UNIT_PDFS_KEY)) || [];
    const filtered = existing.filter(r => r.key !== key);
    filtered.push(newRecord);
    await idbSet(IDB_UNIT_PDFS_KEY, filtered);
  } catch (idbErr) {
    console.warn('[UnitPdfService] Failed to save unit PDF to IndexedDB:', idbErr);
  }

  // 3. Save to Backend Server Disk Vault (/api/unit-pdfs)
  try {
    const res = await fetch(getApiUrl('/api/unit-pdfs'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecord)
    });
    if (res.ok) {
      console.log(`[UnitPdfService] Successfully persisted '${key}' to backend disk vault.`);
    }
  } catch (apiErr) {
    console.warn('[UnitPdfService] Server API sync notice:', apiErr);
  }

  // 4. Save to Cloud Firestore
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

      for (let i = 0; i < chunks.length; i++) {
        await setDoc(doc(db, CHUNKS_COLLECTION, `${key}_chunk_${i}`), {
          chunk: chunks[i],
          chunkIndex: i,
          parentKey: key,
        });
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
  } catch (fsErr) {
    console.warn('[UnitPdfService] Cloud Firestore write notice (locally & server cached):', fsErr);
  }

  // 5. Broadcast event across student app and developer dashboard
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('unit-pdfs-updated', { detail: { key, pdfData } }));
    window.dispatchEvent(new CustomEvent('sample-papers-updated'));
  }

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

  // 1. Unregister in-memory
  unregisterUnitPdf(key);

  // 2. Remove from IndexedDB
  try {
    const existing: StoredUnitPdfRecord[] = (await idbGet(IDB_UNIT_PDFS_KEY)) || [];
    const filtered = existing.filter(r => r.key !== key);
    await idbSet(IDB_UNIT_PDFS_KEY, filtered);
  } catch (idbErr) {
    console.warn('[UnitPdfService] Failed to remove from IndexedDB:', idbErr);
  }

  // 3. Remove from Backend Server Vault (/api/unit-pdfs)
  try {
    await fetch(getApiUrl(`/api/unit-pdfs/${encodeURIComponent(key)}`), {
      method: 'DELETE'
    });
  } catch (apiErr) {
    console.warn('[UnitPdfService] Server API delete notice:', apiErr);
  }

  // 4. Remove from Firestore
  try {
    await deleteDoc(doc(db, FIRESTORE_COLLECTION, key));
  } catch (fsErr) {
    console.warn('[UnitPdfService] Failed to delete from Firestore:', fsErr);
  }

  // 5. Broadcast event
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('unit-pdfs-updated', { detail: { key, deleted: true } }));
    window.dispatchEvent(new CustomEvent('sample-papers-updated'));
  }
}

/**
 * Returns all custom uploaded Unit PDFs for Developer Dashboard listing.
 */
export async function getPublishedUnitPdfsList(): Promise<StoredUnitPdfRecord[]> {
  try {
    const cached: StoredUnitPdfRecord[] = (await idbGet(IDB_UNIT_PDFS_KEY)) || [];
    if (cached.length > 0) {
      return cached.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    }
  } catch (_) {}

  // Fallback to Server API
  try {
    const res = await fetch(getApiUrl('/api/unit-pdfs'), {
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json.records)) {
        return json.records.sort((a: any, b: any) => (b.updatedAt || 0) - (a.updatedAt || 0));
      }
    }
  } catch (_) {}

  return [];
}

// Auto-initialize when running in browser
if (typeof window !== 'undefined') {
  initUnitPdfsSync().catch(err => {
    console.warn('[UnitPdfService] Auto-init notice:', err);
  });
}
