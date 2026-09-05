import { get, set, del } from 'idb-keyval';
import { savePdfToHistory } from './pdfHistory';

export interface OfflineNoteMeta {
  id: string; // e.g. "calc_ab_u1"
  unitId: string; // "u1"
  unitNumber: number;
  subjectId: string; // "calc_ab"
  subjectTitle: string; // "AP Calculus AB"
  title: string; // "Limits and Continuity"
  examWeight: string; // "10-12% Exam Weight"
  fileSize: string; // "185.4 KB"
  pageCount: number; // 5
  savedAt: number; // timestamp
}

export interface SaveOfflineNoteInput {
  unitId: string;
  unitNumber: number;
  subjectId: string;
  subjectTitle: string;
  title: string;
  examWeight: string;
  pdfDataUri: string;
  fileSize: string;
  pageCount: number;
}

const MANIFEST_KEY = 'helpyou_ai_offline_notes_manifest_v1';
const PDF_KEY_PREFIX = 'helpyou_ai_offline_pdf_data_';

/**
 * Retrieve the manifest of all downloaded offline notes (metadata only, fast).
 */
export async function getOfflineNotesManifest(): Promise<OfflineNoteMeta[]> {
  try {
    // 1. Try IndexedDB first
    const fromIdb = await get<OfflineNoteMeta[]>(MANIFEST_KEY);
    if (Array.isArray(fromIdb) && fromIdb.length > 0) {
      return fromIdb.sort((a, b) => b.savedAt - a.savedAt);
    }

    // 2. Fallback to localStorage
    const raw = localStorage.getItem(MANIFEST_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.sort((a, b) => b.savedAt - a.savedAt);
      }
    }
  } catch (err) {
    console.warn('[OfflineNotes] Error reading manifest:', err);
  }
  return [];
}

/**
 * Synchronous helper to read downloaded unit IDs from localStorage for instantaneous UI badges.
 */
export function getDownloadedUnitIdsSync(): string[] {
  try {
    const raw = localStorage.getItem(MANIFEST_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const ids: string[] = [];
        parsed.forEach(item => {
          if (item.id) ids.push(item.id);
          if (item.unitId) ids.push(item.unitId);
          if (item.subjectId && item.unitId) ids.push(`${item.subjectId}_${item.unitId}`);
        });
        return ids;
      }
    }
  } catch (err) {
    // ignore
  }
  return [];
}

/**
 * Save a unit PDF into the app's persistent offline storage and history.
 */
export async function saveOfflineNote(input: SaveOfflineNoteInput): Promise<OfflineNoteMeta> {
  const noteId = `${input.subjectId}_${input.unitId}`;
  const meta: OfflineNoteMeta = {
    id: noteId,
    unitId: input.unitId,
    unitNumber: input.unitNumber,
    subjectId: input.subjectId,
    subjectTitle: input.subjectTitle,
    title: input.title,
    examWeight: input.examWeight,
    fileSize: input.fileSize,
    pageCount: input.pageCount,
    savedAt: Date.now(),
  };

  // 1. Store full PDF Data in IndexedDB (handles large multi-MB PDFs without localStorage limits)
  const dataKey = `${PDF_KEY_PREFIX}${noteId}`;
  try {
    await set(dataKey, input.pdfDataUri);
  } catch (idbErr) {
    console.warn('[OfflineNotes] IndexedDB write failed, falling back to localStorage:', idbErr);
    try {
      localStorage.setItem(dataKey, input.pdfDataUri);
    } catch (lsErr) {
      console.error('[OfflineNotes] Storage quota exceeded:', lsErr);
    }
  }

  // 2. Update Manifest in both IndexedDB and localStorage
  const currentManifest = await getOfflineNotesManifest();
  const updatedManifest = [
    meta,
    ...currentManifest.filter(m => m.id !== noteId),
  ];

  try {
    await set(MANIFEST_KEY, updatedManifest);
  } catch {
    // ignore
  }
  try {
    localStorage.setItem(MANIFEST_KEY, JSON.stringify(updatedManifest));
  } catch {
    // ignore
  }

  // 3. Register in centralized app PDF History so it appears in the History screen as well
  try {
    savePdfToHistory({
      title: `${input.subjectTitle} - Unit ${input.unitNumber}: ${input.title}.pdf`,
      fileUri: input.pdfDataUri,
      featureTag: 'AP Notes',
      fileSize: input.fileSize,
      pageCount: input.pageCount,
    });
  } catch (histErr) {
    console.warn('[OfflineNotes] Error registering in PDF history:', histErr);
  }

  // 4. Dispatch custom event for real-time reactivity across components
  window.dispatchEvent(new CustomEvent('offline-notes-updated', { detail: { meta } }));

  return meta;
}

/**
 * Retrieve the offline PDF data URI for a specific unit.
 */
export async function getOfflineNotePdfData(noteIdOrUnitId: string): Promise<string | null> {
  const noteId = noteIdOrUnitId.includes('_') ? noteIdOrUnitId : `calc_ab_${noteIdOrUnitId}`;
  const dataKey = `${PDF_KEY_PREFIX}${noteId}`;

  try {
    const fromIdb = await get<string>(dataKey);
    if (fromIdb) return fromIdb;
  } catch {
    // ignore
  }

  // Fallback to localStorage
  try {
    const fromLs = localStorage.getItem(dataKey);
    if (fromLs) return fromLs;
  } catch {
    // ignore
  }

  return null;
}

/**
 * Delete a downloaded note from in-app offline storage.
 */
export async function deleteOfflineNote(noteIdOrUnitId: string): Promise<void> {
  const noteId = noteIdOrUnitId.includes('_') ? noteIdOrUnitId : `calc_ab_${noteIdOrUnitId}`;
  const dataKey = `${PDF_KEY_PREFIX}${noteId}`;

  try {
    await del(dataKey);
  } catch {
    // ignore
  }
  try {
    localStorage.removeItem(dataKey);
  } catch {
    // ignore
  }

  const currentManifest = await getOfflineNotesManifest();
  const updatedManifest = currentManifest.filter(m => m.id !== noteId && m.unitId !== noteIdOrUnitId);

  try {
    await set(MANIFEST_KEY, updatedManifest);
  } catch {
    // ignore
  }
  try {
    localStorage.setItem(MANIFEST_KEY, JSON.stringify(updatedManifest));
  } catch {
    // ignore
  }

  window.dispatchEvent(new CustomEvent('offline-notes-updated', { detail: { deletedId: noteId } }));
}
