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

/**
 * Built-in baseline canonical papers bundled with the app.
 * Guaranteed to be available even on fresh install or zero network.
 */
export const BUNDLED_DEFAULT_UNIT_PAPERS: StoredUnitPdfRecord[] = [
  // AP Calculus AB
  {
    key: 'ap-calculus-ab-0',
    subjectId: 'ap-calculus-ab',
    subjectName: 'AP Calculus AB',
    unitNumber: 0,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_AB_Full_Units_Mixed_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_AB_Full_Units_Mixed_Master.html',
      title: 'AP Calculus AB Full Course Mixed Master Paper (Units 1–8)',
      pageCount: 85,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format full course exam paper.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-ab-1',
    subjectId: 'ap-calculus-ab',
    subjectName: 'AP Calculus AB',
    unitNumber: 1,
    pdfData: {
      pdfUrl: '/sample-papers/ap-calculus-unit1.html',
      htmlUrl: '/sample-papers/ap-calculus-unit1.html',
      title: 'AP Calculus AB Unit 1 Master Paper (Limits & Continuity)',
      pageCount: 45,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 1 Limits & Continuity.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-ab-2',
    subjectId: 'ap-calculus-ab',
    subjectName: 'AP Calculus AB',
    unitNumber: 2,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_AB_Unit2_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_AB_Unit2_Master.html',
      title: 'AP Calculus AB Unit 2 Master Paper (Differentiation: Definition & Properties)',
      pageCount: 42,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 2 Differentiation.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-ab-3',
    subjectId: 'ap-calculus-ab',
    subjectName: 'AP Calculus AB',
    unitNumber: 3,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_AB_Unit3_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_AB_Unit3_Master.html',
      title: 'AP Calculus AB Unit 3 Master Paper (Composite, Implicit & Inverse)',
      pageCount: 44,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 3 Composite Differentiation.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-ab-4',
    subjectId: 'ap-calculus-ab',
    subjectName: 'AP Calculus AB',
    unitNumber: 4,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_AB_Unit4_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_AB_Unit4_Master.html',
      title: 'AP Calculus AB Unit 4 Master Paper (Contextual Applications of Differentiation)',
      pageCount: 46,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 4 Applications of Differentiation.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-ab-5',
    subjectId: 'ap-calculus-ab',
    subjectName: 'AP Calculus AB',
    unitNumber: 5,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_AB_Unit5_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_AB_Unit5_Master.html',
      title: 'AP Calculus AB Unit 5 Master Paper (Analytical Applications of Differentiation)',
      pageCount: 48,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 5 Analytical Differentiation.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-ab-6',
    subjectId: 'ap-calculus-ab',
    subjectName: 'AP Calculus AB',
    unitNumber: 6,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_AB_Unit6_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_AB_Unit6_Master.html',
      title: 'AP Calculus AB Unit 6 Master Paper (Integration & Accumulation of Change)',
      pageCount: 45,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 6 Integration.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-ab-7',
    subjectId: 'ap-calculus-ab',
    subjectName: 'AP Calculus AB',
    unitNumber: 7,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_AB_Unit7_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_AB_Unit7_Master.html',
      title: 'AP Calculus AB Unit 7 Master Paper (Differential Equations)',
      pageCount: 42,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 7 Differential Equations.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-ab-8',
    subjectId: 'ap-calculus-ab',
    subjectName: 'AP Calculus AB',
    unitNumber: 8,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_AB_Unit8_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_AB_Unit8_Master.html',
      title: 'AP Calculus AB Unit 8 Master Paper (Applications of Integration)',
      pageCount: 47,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 8 Applications of Integration.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },

  // AP Calculus BC
  {
    key: 'ap-calculus-bc-0',
    subjectId: 'ap-calculus-bc',
    subjectName: 'AP Calculus BC',
    unitNumber: 0,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_BC_All_Units_Mastery_250Q.html',
      htmlUrl: '/sample-papers/AP_Calculus_BC_All_Units_Mastery_250Q.html',
      title: 'AP Calculus BC Full Units Comprehensive Master Paper (250Q)',
      pageCount: 120,
      totalQuestions: 250,
      mcqCount: 220,
      frqCount: 30,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format comprehensive master exam.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-bc-1',
    subjectId: 'ap-calculus-bc',
    subjectName: 'AP Calculus BC',
    unitNumber: 1,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_BC_Unit1_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_BC_Unit1_Master.html',
      title: 'AP Calculus BC Unit 1 Master Paper (Limits and Continuity)',
      pageCount: 45,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 1.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-bc-6',
    subjectId: 'ap-calculus-bc',
    subjectName: 'AP Calculus BC',
    unitNumber: 6,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_BC_Unit6_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_BC_Unit6_Master.html',
      title: 'AP Calculus BC Unit 6 Master Paper (Integration & Accumulation)',
      pageCount: 48,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 6.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-calculus-bc-10',
    subjectId: 'ap-calculus-bc',
    subjectName: 'AP Calculus BC',
    unitNumber: 10,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Calculus_BC_Unit10_Master.html',
      htmlUrl: '/sample-papers/AP_Calculus_BC_Unit10_Master.html',
      title: 'AP Calculus BC Unit 10 Master Paper (Infinite Sequences and Series)',
      pageCount: 52,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 10 Series.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },

  // AP Human Geography
  {
    key: 'ap-human-geography-0',
    subjectId: 'ap-human-geography',
    subjectName: 'AP Human Geography',
    unitNumber: 0,
    pdfData: {
      pdfUrl: '/sample-papers/APHG_Full_Course_Exam_Master.html',
      htmlUrl: '/sample-papers/APHG_Full_Course_Exam_Master.html',
      title: 'AP Human Geography Full Course Master Exam',
      pageCount: 95,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format full course exam paper.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-human-geography-1',
    subjectId: 'ap-human-geography',
    subjectName: 'AP Human Geography',
    unitNumber: 1,
    pdfData: {
      pdfUrl: '/sample-papers/APHG_Unit_1_Exam_Master.html',
      htmlUrl: '/sample-papers/APHG_Unit_1_Exam_Master.html',
      title: 'AP Human Geography Unit 1 Master Exam (Thinking Geographically)',
      pageCount: 52,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 1 Thinking Geographically.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-human-geography-2',
    subjectId: 'ap-human-geography',
    subjectName: 'AP Human Geography',
    unitNumber: 2,
    pdfData: {
      pdfUrl: '/sample-papers/APHG_Unit_2_Exam_Master.html',
      htmlUrl: '/sample-papers/APHG_Unit_2_Exam_Master.html',
      title: 'AP Human Geography Unit 2 Master Exam (Population & Migration)',
      pageCount: 50,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 2 Population.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-human-geography-3',
    subjectId: 'ap-human-geography',
    subjectName: 'AP Human Geography',
    unitNumber: 3,
    pdfData: {
      pdfUrl: '/sample-papers/APHG_Unit_3_Exam_Master.html',
      htmlUrl: '/sample-papers/APHG_Unit_3_Exam_Master.html',
      title: 'AP Human Geography Unit 3 Master Exam (Cultural Patterns & Processes)',
      pageCount: 51,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 3 Culture.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-human-geography-4',
    subjectId: 'ap-human-geography',
    subjectName: 'AP Human Geography',
    unitNumber: 4,
    pdfData: {
      pdfUrl: '/sample-papers/APHG_Unit_4_Exam_Master.html',
      htmlUrl: '/sample-papers/APHG_Unit_4_Exam_Master.html',
      title: 'AP Human Geography Unit 4 Master Exam (Political Patterns & Processes)',
      pageCount: 52,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 4 Politics.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-human-geography-5',
    subjectId: 'ap-human-geography',
    subjectName: 'AP Human Geography',
    unitNumber: 5,
    pdfData: {
      pdfUrl: '/sample-papers/APHG_Unit_5_Exam_Master.html',
      htmlUrl: '/sample-papers/APHG_Unit_5_Exam_Master.html',
      title: 'AP Human Geography Unit 5 Master Exam (Agriculture & Rural Land-Use)',
      pageCount: 49,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 5 Agriculture.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-human-geography-6',
    subjectId: 'ap-human-geography',
    subjectName: 'AP Human Geography',
    unitNumber: 6,
    pdfData: {
      pdfUrl: '/sample-papers/APHG_Unit_6_Exam_Master.html',
      htmlUrl: '/sample-papers/APHG_Unit_6_Exam_Master.html',
      title: 'AP Human Geography Unit 6 Master Exam (Cities & Urban Land-Use)',
      pageCount: 50,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 6 Cities.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-human-geography-7',
    subjectId: 'ap-human-geography',
    subjectName: 'AP Human Geography',
    unitNumber: 7,
    pdfData: {
      pdfUrl: '/sample-papers/APHG_Unit_7_Exam_Master.html',
      htmlUrl: '/sample-papers/APHG_Unit_7_Exam_Master.html',
      title: 'AP Human Geography Unit 7 Master Exam (Industrial & Economic Development)',
      pageCount: 51,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 7 Industry.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },

  // AP Biology
  {
    key: 'ap-biology-0',
    subjectId: 'ap-biology',
    subjectName: 'AP Biology',
    unitNumber: 0,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Biology_Full_Curriculum_Master.html',
      htmlUrl: '/sample-papers/AP_Biology_Full_Curriculum_Master.html',
      title: 'AP Biology Full Course Comprehensive Master Exam',
      pageCount: 110,
      totalQuestions: 120,
      mcqCount: 100,
      frqCount: 20,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format full course exam paper.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-biology-1',
    subjectId: 'ap-biology',
    subjectName: 'AP Biology',
    unitNumber: 1,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Biology_Unit1_Master.html',
      htmlUrl: '/sample-papers/AP_Biology_Unit1_Master.html',
      title: 'AP Biology Unit 1 Master Exam (Chemistry of Life)',
      pageCount: 48,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 1 Chemistry of Life.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-biology-2',
    subjectId: 'ap-biology',
    subjectName: 'AP Biology',
    unitNumber: 2,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Biology_Unit2_Master.html',
      htmlUrl: '/sample-papers/AP_Biology_Unit2_Master.html',
      title: 'AP Biology Unit 2 Master Exam (Cell Structure & Function)',
      pageCount: 50,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 2 Cells.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-biology-3',
    subjectId: 'ap-biology',
    subjectName: 'AP Biology',
    unitNumber: 3,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Biology_Unit3_Master.html',
      htmlUrl: '/sample-papers/AP_Biology_Unit3_Master.html',
      title: 'AP Biology Unit 3 Master Exam (Cellular Energetics)',
      pageCount: 52,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 3 Cellular Energetics.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-biology-4',
    subjectId: 'ap-biology',
    subjectName: 'AP Biology',
    unitNumber: 4,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Biology_Unit4_Master.html',
      htmlUrl: '/sample-papers/AP_Biology_Unit4_Master.html',
      title: 'AP Biology Unit 4 Master Exam (Cell Communication & Cell Cycle)',
      pageCount: 52,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 4 Cell Communication.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-biology-5',
    subjectId: 'ap-biology',
    subjectName: 'AP Biology',
    unitNumber: 5,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Biology_Unit5_Master.html',
      htmlUrl: '/sample-papers/AP_Biology_Unit5_Master.html',
      title: 'AP Biology Unit 5 Master Exam (Heredity & Genetics)',
      pageCount: 48,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 5 Heredity.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-biology-6',
    subjectId: 'ap-biology',
    subjectName: 'AP Biology',
    unitNumber: 6,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Biology_Unit6_Master.html',
      htmlUrl: '/sample-papers/AP_Biology_Unit6_Master.html',
      title: 'AP Biology Unit 6 Master Exam (Gene Expression & Regulation)',
      pageCount: 53,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 6 Gene Expression.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-biology-7',
    subjectId: 'ap-biology',
    subjectName: 'AP Biology',
    unitNumber: 7,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Biology_Unit7_Master.html',
      htmlUrl: '/sample-papers/AP_Biology_Unit7_Master.html',
      title: 'AP Biology Unit 7 Master Exam (Natural Selection & Evolution)',
      pageCount: 55,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 7 Evolution.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-biology-8',
    subjectId: 'ap-biology',
    subjectName: 'AP Biology',
    unitNumber: 8,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Biology_Unit8_Master.html',
      htmlUrl: '/sample-papers/AP_Biology_Unit8_Master.html',
      title: 'AP Biology Unit 8 Master Exam (Ecology)',
      pageCount: 52,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 8 Ecology.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },

  // AP Environmental Science
  {
    key: 'ap-environmental-science-0',
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    unitNumber: 0,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Environmental_Science_All_Units_Mastery_250Q.html',
      htmlUrl: '/sample-papers/AP_Environmental_Science_All_Units_Mastery_250Q.html',
      title: 'AP Environmental Science Full Course Comprehensive Master Exam (250Q)',
      pageCount: 125,
      totalQuestions: 250,
      mcqCount: 220,
      frqCount: 30,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format full course exam paper.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-environmental-science-1',
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    unitNumber: 1,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Environmental_Science_Unit_1_Mastery_100Q.html',
      htmlUrl: '/sample-papers/AP_Environmental_Science_Unit_1_Mastery_100Q.html',
      title: 'AP Environmental Science Unit 1 Master Paper (The Living World: Ecosystems)',
      pageCount: 55,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 1 Ecosystems.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-environmental-science-2',
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    unitNumber: 2,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Environmental_Science_Unit_2_Mastery_100Q.html',
      htmlUrl: '/sample-papers/AP_Environmental_Science_Unit_2_Mastery_100Q.html',
      title: 'AP Environmental Science Unit 2 Master Paper (Biodiversity)',
      pageCount: 53,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 2 Biodiversity.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-environmental-science-3',
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    unitNumber: 3,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Environmental_Science_Unit_3_Mastery_100Q.html',
      htmlUrl: '/sample-papers/AP_Environmental_Science_Unit_3_Mastery_100Q.html',
      title: 'AP Environmental Science Unit 3 Master Paper (Populations)',
      pageCount: 54,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 3 Populations.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-environmental-science-4',
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    unitNumber: 4,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Environmental_Science_Unit_4_Mastery_100Q.html',
      htmlUrl: '/sample-papers/AP_Environmental_Science_Unit_4_Mastery_100Q.html',
      title: 'AP Environmental Science Unit 4 Master Paper (Earth Systems & Resources)',
      pageCount: 56,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 4 Earth Systems.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-environmental-science-5',
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    unitNumber: 5,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Environmental_Science_Unit_5_Mastery_100Q.html',
      htmlUrl: '/sample-papers/AP_Environmental_Science_Unit_5_Mastery_100Q.html',
      title: 'AP Environmental Science Unit 5 Master Paper (Land & Water Use)',
      pageCount: 55,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 5 Land and Water.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-environmental-science-6',
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    unitNumber: 6,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Environmental_Science_Unit_6_Mastery_100Q.html',
      htmlUrl: '/sample-papers/AP_Environmental_Science_Unit_6_Mastery_100Q.html',
      title: 'AP Environmental Science Unit 6 Master Paper (Energy Resources & Consumption)',
      pageCount: 57,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 6 Energy Resources.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-environmental-science-7',
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    unitNumber: 7,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Environmental_Science_Unit_7_Mastery_100Q.html',
      htmlUrl: '/sample-papers/AP_Environmental_Science_Unit_7_Mastery_100Q.html',
      title: 'AP Environmental Science Unit 7 Master Paper (Atmospheric Pollution)',
      pageCount: 53,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 7 Atmospheric Pollution.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-environmental-science-8',
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    unitNumber: 8,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Environmental_Science_Unit_8_Mastery_100Q.html',
      htmlUrl: '/sample-papers/AP_Environmental_Science_Unit_8_Mastery_100Q.html',
      title: 'AP Environmental Science Unit 8 Master Paper (Aquatic & Terrestrial Pollution)',
      pageCount: 54,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 8 Pollution.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-environmental-science-9',
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    unitNumber: 9,
    pdfData: {
      pdfUrl: '/sample-papers/AP_Environmental_Science_Unit_9_Mastery_100Q.html',
      htmlUrl: '/sample-papers/AP_Environmental_Science_Unit_9_Mastery_100Q.html',
      title: 'AP Environmental Science Unit 9 Master Paper (Global Change)',
      pageCount: 51,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 9 Global Change.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },

  // AP Computer Science Principles
  {
    key: 'ap-computer-science-principles-0',
    subjectId: 'ap-computer-science-principles',
    subjectName: 'AP Computer Science Principles',
    unitNumber: 0,
    pdfData: {
      pdfUrl: '/sample-papers/AP_CSP_Full_Course_Master.html',
      htmlUrl: '/sample-papers/AP_CSP_Full_Course_Master.html',
      title: 'AP Computer Science Principles Full Course Master Exam',
      pageCount: 90,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format full course exam paper.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-computer-science-principles-1',
    subjectId: 'ap-computer-science-principles',
    subjectName: 'AP Computer Science Principles',
    unitNumber: 1,
    pdfData: {
      pdfUrl: '/sample-papers/AP_CSP_Unit1_Master.html',
      htmlUrl: '/sample-papers/AP_CSP_Unit1_Master.html',
      title: 'AP CSP Unit 1 Master Exam (Creative Development)',
      pageCount: 46,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 1 Creative Development.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-computer-science-principles-2',
    subjectId: 'ap-computer-science-principles',
    subjectName: 'AP Computer Science Principles',
    unitNumber: 2,
    pdfData: {
      pdfUrl: '/sample-papers/AP_CSP_Unit2_Master.html',
      htmlUrl: '/sample-papers/AP_CSP_Unit2_Master.html',
      title: 'AP CSP Unit 2 Master Exam (Data Representation)',
      pageCount: 47,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 2 Data.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-computer-science-principles-3',
    subjectId: 'ap-computer-science-principles',
    subjectName: 'AP Computer Science Principles',
    unitNumber: 3,
    pdfData: {
      pdfUrl: '/sample-papers/AP_CSP_Unit3_Master.html',
      htmlUrl: '/sample-papers/AP_CSP_Unit3_Master.html',
      title: 'AP CSP Unit 3 Master Exam (Algorithms and Programming)',
      pageCount: 49,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 3 Algorithms.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-computer-science-principles-4',
    subjectId: 'ap-computer-science-principles',
    subjectName: 'AP Computer Science Principles',
    unitNumber: 4,
    pdfData: {
      pdfUrl: '/sample-papers/AP_CSP_Unit4_Master.html',
      htmlUrl: '/sample-papers/AP_CSP_Unit4_Master.html',
      title: 'AP CSP Unit 4 Master Exam (Computer Systems and Networks)',
      pageCount: 50,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 4 Systems and Networks.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  },
  {
    key: 'ap-computer-science-principles-5',
    subjectId: 'ap-computer-science-principles',
    subjectName: 'AP Computer Science Principles',
    unitNumber: 5,
    pdfData: {
      pdfUrl: '/sample-papers/AP_CSP_Unit5_Master.html',
      htmlUrl: '/sample-papers/AP_CSP_Unit5_Master.html',
      title: 'AP CSP Unit 5 Master Exam (Impact of Computing)',
      pageCount: 48,
      totalQuestions: 100,
      mcqCount: 90,
      frqCount: 10,
      uploadedDate: 'Oct 2026',
      description: 'Official College Board format exam paper for Unit 5 Impact.'
    },
    updatedAt: 1729000000000,
    isCustomUpload: false
  }
];

let syncInitialized = false;

/**
 * Initializes synchronization of dynamically uploaded AP Sample Paper sets.
 * 1. Seeds built-in canonical default papers.
 * 2. Loads from permanent local IndexedDB storage.
 * 3. Fetches newly uploaded papers from backend Server Disk Vault (/api/unit-pdfs).
 * 4. Also checks Firestore as parallel cloud source.
 * 5. Injects them into UPLOADED_UNIT_PDFS in memory.
 */
export async function initUnitPdfsSync(force = false): Promise<void> {
  if (syncInitialized && !force && typeof window !== 'undefined') return;
  syncInitialized = true;

  // 1. Seed baseline default unit papers into in-memory registry
  for (const bundled of BUNDLED_DEFAULT_UNIT_PAPERS) {
    if (!UPLOADED_UNIT_PDFS[bundled.key]) {
      registerUnitPdf(bundled.key, bundled.pdfData);
    }
  }

  // 2. First Pass: Instant local cache from IndexedDB
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

  // 3. Second Pass: Sync from Backend Server Vault & Firestore
  const syncFromRemote = async () => {
    const recordsMap = new Map<string, StoredUnitPdfRecord>();

    // Seed bundled papers first
    BUNDLED_DEFAULT_UNIT_PAPERS.forEach(b => recordsMap.set(b.key, b));

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
    if (recordsMap.size > 0) {
      try {
        const existing: StoredUnitPdfRecord[] = (await idbGet(IDB_UNIT_PDFS_KEY)) || [];
        existing.forEach(r => {
          if (!recordsMap.has(r.key)) {
            recordsMap.set(r.key, r);
            if (r.key && r.pdfData) registerUnitPdf(r.key, r.pdfData);
          }
        });
        const merged = Array.from(recordsMap.values());
        await idbSet(IDB_UNIT_PDFS_KEY, merged);

        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('unit-pdfs-updated'));
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

  return BUNDLED_DEFAULT_UNIT_PAPERS;
}

// Auto-initialize when running in browser
if (typeof window !== 'undefined') {
  initUnitPdfsSync().catch(err => {
    console.warn('[UnitPdfService] Auto-init notice:', err);
  });
}
