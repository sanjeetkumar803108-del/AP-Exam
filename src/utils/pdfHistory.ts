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
 * Strict filter to prevent pre-bundled offline material (AP Notes & Mind Map Revision Notes)
 * from ever being saved to or displayed in the user-generated "Saved Offline PDFs" feature.
 */
export function isExcludedFromPdfHistory(tag: string = '', title: string = ''): boolean {
  const t = (tag || '').toLowerCase().trim();
  const s = (title || '').toLowerCase().trim();

  // AP Notes checks
  if (t === 'ap notes' || t === 'ap note' || t === 'ap_notes' || t === 'apnotes') return true;
  if (t.includes('unit note') || (t.includes('unit') && t.includes('note'))) return true;
  if (s.includes('unit_notes') || (s.includes('_unit_') && s.includes('notes')) || s.includes('unit notes')) return true;
  if (s.includes('helpyou_ai') && s.includes('unit_') && !s.includes('trap')) return true;
  if (s.includes('unit') && s.includes('notes') && !s.includes('trap') && !s.includes('radar')) return true;

  // Mind Map checks
  if (t.includes('mind map') || t.includes('mindmap') || t.includes('revision note')) return true;
  if (s.includes('mind_map') || s.includes('mindmap') || s.includes('revision_note')) return true;

  return false;
}

/**
 * Retrieves all saved PDF history records sorted by newest first (synchronous for instant UI).
 * Automatically purges and filters out built-in AP Notes, Mind Maps, and dead volatile blob: items.
 */
export function getPdfHistory(): PdfHistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const filtered = parsed.filter(item => {
        if (!item || !item.title) return false;
        if (isExcludedFromPdfHistory(item.featureTag, item.title)) return false;
        // Purge legacy records that only held temporary blob URLs (broken on reload)
        if (item.fileUri && item.fileUri.startsWith('blob:') && !memoryPdfCache.has(item.id)) {
          return false;
        }
        return true;
      });

      // Auto-purge any excluded or corrupted items from persisted storage if present
      if (filtered.length !== parsed.length) {
        try {
          const lightweightManifest = filtered.map(rec => ({
            ...rec,
            fileUri: (rec.fileUri && rec.fileUri.length < 200 && !rec.fileUri.startsWith('data:') && !rec.fileUri.startsWith('blob:')) ? rec.fileUri : ''
          }));
          localStorage.setItem(STORAGE_KEY, JSON.stringify(lightweightManifest));
        } catch {}
      }

      return filtered.map(item => ({
        ...item,
        // Restore from in-memory cache if available
        fileUri: memoryPdfCache.get(item.id) || (item.fileUri && !item.fileUri.startsWith('blob:') ? item.fileUri : ''),
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
      const filtered = fromIdb.filter(item => {
        if (!item || !item.title) return false;
        if (isExcludedFromPdfHistory(item.featureTag, item.title)) return false;
        if (item.fileUri && item.fileUri.startsWith('blob:') && !memoryPdfCache.has(item.id)) {
          return false;
        }
        return true;
      });
      if (filtered.length !== fromIdb.length) {
        set(IDB_MANIFEST_KEY, filtered).catch(() => {});
      }
      return filtered.map(item => ({
        ...item,
        fileUri: memoryPdfCache.get(item.id) || (item.fileUri && !item.fileUri.startsWith('blob:') ? item.fileUri : ''),
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
 * 100% offline compatible, rejects dead volatile blob: URLs.
 */
export async function getOfflinePdfData(id: string): Promise<string | null> {
  // 1. Check in-memory cache
  if (memoryPdfCache.has(id)) {
    const cached = memoryPdfCache.get(id);
    if (cached && (cached.startsWith('data:application/pdf') || cached.length > 500)) return cached;
  }

  // 2. Check IndexedDB full storage
  try {
    const dataKey = `${PDF_DATA_PREFIX}${id}`;
    const fromIdb = await get<string>(dataKey);
    if (fromIdb && (fromIdb.startsWith('data:application/pdf') || fromIdb.length > 500)) {
      memoryPdfCache.set(id, fromIdb);
      return fromIdb;
    }
  } catch (err) {
    console.warn('[PDFHistory] Error retrieving PDF data from IndexedDB:', err);
  }

  // 3. Fallback: Check localStorage manifest record
  const history = getPdfHistory();
  const found = history.find(item => item.id === id);
  if (found && found.fileUri && (found.fileUri.startsWith('data:application/pdf') || found.fileUri.length > 500)) {
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
}): PdfHistoryItem | null {
  // Guard 1: Never save built-in materials (AP Notes and Mind Maps) to user Saved Offline PDFs
  if (isExcludedFromPdfHistory(item.featureTag, item.title)) {
    console.log('[PDFHistory] Excluded pre-bundled material from Saved Offline PDFs:', item.title);
    return null;
  }

  // Guard 2: Never save temporary blob: URLs to persistent history (they die on reload)
  if (item.fileUri && item.fileUri.startsWith('blob:')) {
    console.warn('[PDFHistory] Refused to save temporary blob: URL to offline history:', item.title);
    return null;
  }

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

  // 3. Save lightweight manifest to localStorage (omit huge Base64 strings and blob URLs)
  const lightweightManifest = updated.map(rec => ({
    ...rec,
    fileUri: (rec.fileUri && rec.fileUri.length < 200 && !rec.fileUri.startsWith('data:') && !rec.fileUri.startsWith('blob:')) 
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
