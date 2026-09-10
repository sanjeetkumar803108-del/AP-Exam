import { auth, db } from '../lib/firebase';
import { collection, addDoc, getDocs, query, where, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import { get, set, del } from 'idb-keyval';

export interface PdfHistoryItem {
  id: string;
  title: string;
  fileUri: string; // Base64 data URI, Blob URI, or empty if stored in IndexedDB
  timestamp: number;
  featureTag: string; // e.g., 'AP Notes', 'AP Sample Papers', 'AP Trap Radar', 'Practice Exam', 'Formula Sheet'
  fileSize?: string;
  pageCount?: number;
  isOfflineSaved?: boolean;
}

const STORAGE_KEY = 'helpyou_ai_pdf_history_v1';
const IDB_MANIFEST_KEY = 'helpyou_ai_pdf_history_manifest_v2';
const PDF_DATA_PREFIX = 'helpyou_ai_offline_pdf_data_';

// In-memory cache for fast instant access during current app session
const memoryPdfCache = new Map<string, string>();

/**
 * Retrieves all saved PDF history records sorted by newest first (synchronous for instant UI).
 */
export function getPdfHistory(): PdfHistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map(item => ({
        ...item,
        // Restore from in-memory cache if available
        fileUri: memoryPdfCache.get(item.id) || item.fileUri || '',
        isOfflineSaved: true
      })).sort((a, b) => b.timestamp - a.timestamp);
    }
  } catch (err) {
    console.warn('[PDFHistory] Error reading PDF history from localStorage:', err);
  }
  return [];
}

/**
 * Retrieves all saved PDF history records with IndexedDB backup verification (async).
 */
export async function getPdfHistoryAsync(): Promise<PdfHistoryItem[]> {
  try {
    const fromIdb = await get<PdfHistoryItem[]>(IDB_MANIFEST_KEY);
    if (Array.isArray(fromIdb) && fromIdb.length > 0) {
      return fromIdb.map(item => ({
        ...item,
        fileUri: memoryPdfCache.get(item.id) || item.fileUri || '',
        isOfflineSaved: true
      })).sort((a, b) => b.timestamp - a.timestamp);
    }
  } catch (err) {
    console.warn('[PDFHistory] Error reading PDF history from IndexedDB:', err);
  }
  return getPdfHistory();
}

/**
 * Retrieves the full offline PDF binary data (Base64 data URI) for any document.
 * Checks: 1. In-memory cache -> 2. IndexedDB -> 3. Manifest fileUri.
 * 100% offline compatible, no network requests.
 */
export async function getOfflinePdfData(id: string): Promise<string | null> {
  // 1. Check in-memory cache
  if (memoryPdfCache.has(id)) {
    const cached = memoryPdfCache.get(id);
    if (cached && cached.length > 100) return cached;
  }

  // 2. Check IndexedDB full storage
  try {
    const dataKey = `${PDF_DATA_PREFIX}${id}`;
    const fromIdb = await get<string>(dataKey);
    if (fromIdb && fromIdb.length > 100) {
      memoryPdfCache.set(id, fromIdb);
      return fromIdb;
    }
  } catch (err) {
    console.warn('[PDFHistory] Error retrieving PDF data from IndexedDB:', err);
  }

  // 3. Fallback: Check localStorage manifest record
  const history = getPdfHistory();
  const found = history.find(item => item.id === id);
  if (found && found.fileUri && found.fileUri.length > 100) {
    memoryPdfCache.set(id, found.fileUri);
    return found.fileUri;
  }

  return null;
}

/**
 * Automatically captures and saves a PDF record into persistent offline storage.
 * Stores full binary payload in IndexedDB (immune to localStorage 5MB limit)
 * while maintaining a fast, lightweight manifest in localStorage and IndexedDB.
 */
export function savePdfToHistory(item: {
  title: string;
  fileUri: string;
  featureTag: string;
  fileSize?: string;
  pageCount?: number;
}): PdfHistoryItem {
  const history = getPdfHistory();
  
  // Format title neatly
  let cleanTitle = item.title.trim() || 'HelpYou_AI_Document.pdf';
  if (!cleanTitle.toLowerCase().endsWith('.pdf')) {
    cleanTitle += '.pdf';
  }

  // Check for any duplicate by title or id
  const existingIdx = history.findIndex(
    record => record.title === cleanTitle
  );

  let targetRecord: PdfHistoryItem;
  let updated: PdfHistoryItem[];

  const rawDataUri = item.fileUri || '';

  if (existingIdx !== -1) {
    // Duplicate found! Update existing record with new timestamp and move to top
    const existing = history[existingIdx];
    targetRecord = {
      ...existing,
      timestamp: Date.now(),
      fileSize: item.fileSize || existing.fileSize,
      pageCount: item.pageCount || existing.pageCount,
      featureTag: item.featureTag || existing.featureTag,
      fileUri: rawDataUri,
      isOfflineSaved: true
    };
    const filtered = history.filter((_, idx) => idx !== existingIdx);
    updated = [targetRecord, ...filtered].slice(0, 50);
  } else {
    // Completely new record
    targetRecord = {
      id: `pdf_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      title: cleanTitle,
      fileUri: rawDataUri,
      timestamp: Date.now(),
      featureTag: item.featureTag || 'Practice PDF',
      fileSize: item.fileSize,
      pageCount: item.pageCount,
      isOfflineSaved: true
    };
    updated = [targetRecord, ...history].slice(0, 50);
  }

  // 1. Cache full binary data in memory for instant active session access
  if (rawDataUri) {
    memoryPdfCache.set(targetRecord.id, rawDataUri);
  }

  // 2. Persist full binary payload into IndexedDB (asynchronously, safe from quota crash)
  if (rawDataUri) {
    const dataKey = `${PDF_DATA_PREFIX}${targetRecord.id}`;
    set(dataKey, rawDataUri).catch(err => {
      console.warn('[PDFHistory] IndexedDB binary write warning:', err);
    });
  }

  // 3. Save lightweight manifest to localStorage (omit huge Base64 strings to stay well within 5MB)
  const lightweightManifest = updated.map(rec => ({
    ...rec,
    // If fileUri is a huge base64 string (> 200 chars), omit it from localStorage
    fileUri: (rec.fileUri && rec.fileUri.length < 200 && !rec.fileUri.startsWith('data:')) 
      ? rec.fileUri 
      : ''
  }));

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lightweightManifest));
    window.dispatchEvent(new CustomEvent('pdf-history-updated', { detail: { record: targetRecord } }));
  } catch (err) {
    console.warn('[PDFHistory] Quota error on manifest, trimming:', err);
    try {
      const trimmed = lightweightManifest.slice(0, 20);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
      window.dispatchEvent(new CustomEvent('pdf-history-updated', { detail: { record: targetRecord } }));
    } catch (e) {
      console.error('[PDFHistory] Failed to write manifest to localStorage:', e);
    }
  }

  // 4. Also backup full manifest to IndexedDB
  set(IDB_MANIFEST_KEY, lightweightManifest).catch(() => {});

  // 5. Asynchronously synchronize metadata with Firestore if the user is authenticated
  if (auth.currentUser) {
    addDoc(collection(db, 'pdf_history'), {
      userId: auth.currentUser.uid,
      id: targetRecord.id,
      title: targetRecord.title,
      fileUri: '', // Don't upload massive base64 to Firestore doc to prevent 1MB Firestore limit
      timestamp: targetRecord.timestamp,
      featureTag: targetRecord.featureTag,
      fileSize: targetRecord.fileSize || null,
      pageCount: targetRecord.pageCount || null
    }).catch(err => {
      console.warn('[PDFHistory] Notice writing PDF record to cloud:', err);
    });
  }

  return targetRecord;
}

/**
 * Removes a specific PDF record from storage by ID (both manifest and IndexedDB payload).
 */
export function deletePdfFromHistory(id: string): void {
  memoryPdfCache.delete(id);

  // 1. Delete from IndexedDB binary storage
  del(`${PDF_DATA_PREFIX}${id}`).catch(() => {});

  // 2. Update manifest in localStorage
  const history = getPdfHistory();
  const updated = history.filter(item => item.id !== id);
  const lightweightManifest = updated.map(rec => ({
    ...rec,
    fileUri: (rec.fileUri && rec.fileUri.length < 200 && !rec.fileUri.startsWith('data:')) ? rec.fileUri : ''
  }));

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lightweightManifest));
    window.dispatchEvent(new CustomEvent('pdf-history-updated', { detail: { deletedId: id } }));
  } catch (err) {
    console.warn('[PDFHistory] Error deleting item from localStorage:', err);
  }

  // 3. Update IndexedDB manifest
  set(IDB_MANIFEST_KEY, lightweightManifest).catch(() => {});

  // 4. Delete from Firestore if authenticated
  if (auth.currentUser) {
    getDocs(query(collection(db, 'pdf_history'), where('userId', '==', auth.currentUser.uid), where('id', '==', id)))
      .then(snapshot => {
        snapshot.forEach(document => {
          deleteDoc(doc(db, 'pdf_history', document.id)).catch(err => {
            console.warn('[PDFHistory] Notice deleting PDF record from cloud:', err);
          });
        });
      })
      .catch(() => {});
  }
}

/**
 * Clears all PDF history records and their IndexedDB payloads.
 */
export function clearPdfHistory(): void {
  const history = getPdfHistory();
  
  // Clear in-memory cache and IndexedDB binaries
  for (const item of history) {
    memoryPdfCache.delete(item.id);
    del(`${PDF_DATA_PREFIX}${item.id}`).catch(() => {});
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('pdf-history-updated', { detail: { cleared: true } }));
  } catch (err) {
    console.warn('[PDFHistory] Error clearing localStorage:', err);
  }

  del(IDB_MANIFEST_KEY).catch(() => {});

  // Clear from Firestore if authenticated
  if (auth.currentUser) {
    getDocs(query(collection(db, 'pdf_history'), where('userId', '==', auth.currentUser.uid)))
      .then(snapshot => {
        const batch = writeBatch(db);
        snapshot.forEach(document => {
          batch.delete(doc(db, 'pdf_history', document.id));
        });
        batch.commit().catch(() => {});
      })
      .catch(() => {});
  }
}
