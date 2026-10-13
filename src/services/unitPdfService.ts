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

const IDB_UNIT_PDFS_KEY = 'ap_unit_sample_papers_vault_v1';
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

let syncInitialized = false;

/**
 * Initializes synchronization of dynamically uploaded AP Sample Paper sets.
 * 1. Loads from permanent local IndexedDB storage.
 * 2. Fetches any newly uploaded papers from Firestore cloud database.
 * 3. Injects them into UPLOADED_UNIT_PDFS in memory.
 */
export async function initUnitPdfsSync(): Promise<void> {
  if (syncInitialized && typeof window !== 'undefined') return;
  syncInitialized = true;

  // 1. First Pass: Instant local cache from IndexedDB
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

  // 2. Second Pass: Cloud Firestore sync
  try {
    const snapshot = await getDocs(collection(db, FIRESTORE_COLLECTION));
    if (!snapshot.empty) {
      const recordsToStore: StoredUnitPdfRecord[] = [];

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

          registerUnitPdf(key, resolvedPdfData);

          recordsToStore.push({
            key,
            subjectId: data.subjectId,
            subjectName: data.subjectName,
            unitNumber: data.unitNumber,
            pdfData: resolvedPdfData,
            updatedAt: data.updatedAt || Date.now(),
            isCustomUpload: true,
          });
        }
      }

      // Persist merged papers to IndexedDB for permanent offline access
      if (recordsToStore.length > 0) {
        const existing: StoredUnitPdfRecord[] = (await idbGet(IDB_UNIT_PDFS_KEY)) || [];
        const map = new Map<string, StoredUnitPdfRecord>();
        existing.forEach(r => map.set(r.key, r));
        recordsToStore.forEach(r => map.set(r.key, r));
        const merged = Array.from(map.values());
        await idbSet(IDB_UNIT_PDFS_KEY, merged);

        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('unit-pdfs-updated'));
        }
      }
    }
  } catch (cloudErr) {
    console.warn('[UnitPdfService] Firestore sync notice (offline or permission):', cloudErr);
  }
}

/**
 * Uploads an AP Sample Paper PDF directly into the student app's AP Sample Paper Sets feature.
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

  // 3. Save to Cloud Firestore
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
    console.warn('[UnitPdfService] Could not sync unit PDF to Firestore (locally cached):', fsErr);
  }

  // 4. Broadcast event across student app and developer dashboard
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

  // 3. Remove from Firestore
  try {
    await deleteDoc(doc(db, FIRESTORE_COLLECTION, key));
  } catch (fsErr) {
    console.warn('[UnitPdfService] Failed to delete from Firestore:', fsErr);
  }

  // 4. Broadcast event
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
    return cached.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  } catch {
    return [];
  }
}

// Auto-initialize when running in browser
if (typeof window !== 'undefined') {
  initUnitPdfsSync().catch(err => {
    console.warn('[UnitPdfService] Auto-init notice:', err);
  });
}
