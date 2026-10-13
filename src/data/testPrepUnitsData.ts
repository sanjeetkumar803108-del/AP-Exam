/**
 * AP Test Prep & Unit-wise Master Sets Registry
 * 
 * Provides canonical College Board CED unit listings for all supported AP subjects,
 * and tracks uploaded PDF practice sets / master booklets.
 * 
 * To add a newly created Unit PDF, simply add an entry to UPLOADED_UNIT_PDFS!
 */

export interface TestPrepUnit {
  unitNumber: number;
  title: string;
  weight: string;
  concepts?: string;
}

export interface TestPrepSubject {
  id: string;
  code: string;
  name: string;
  category: 'STEM & Math' | 'Sciences' | 'Humanities & Social Sciences' | 'English & Tech';
  badgeColor?: string;
  units: TestPrepUnit[];
}

export interface UploadedUnitPdf {
  pdfUrl: string;
  htmlUrl?: string;
  title: string;
  pageCount: number;
  totalQuestions: number;
  mcqCount: number;
  frqCount: number;
  priorityStars?: {
    star5: number;
    star3: number;
    star2: number;
  };
  uploadedDate?: string;
  description?: string;
}

/**
 * Registry of all uploaded Unit Master PDFs.
 * Key format: `${subjectId}-${unitNumber}` (e.g., 'ap-calculus-ab-1')
 */
export const UPLOADED_UNIT_PDFS: Record<string, UploadedUnitPdf> = {
  'ap-calculus-ab-1': {
    pdfUrl: '/sample-papers/AP_Calculus_AB_Unit1_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_AB_Unit1_Master.html',
    title: 'AP Calculus AB – Unit 1: Limits & Continuity (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 40, // 30 MCQs + 10 FRQs
      star3: 40,
      star2: 20,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 100-Question Priority-Starred Examination Repository with Navy + Ivory + Gold luxury typography, 90 MCQs, 10 multi-part FRQs, and AP scoring rubrics.',
  },
  'ap-calculus-ab-2': {
    pdfUrl: '/sample-papers/AP_Calculus_AB_Unit2_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_AB_Unit2_Master.html',
    title: 'AP Calculus AB – Unit 2: Differentiation (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 43, // 33 MCQs + 10 FRQs
      star3: 35,
      star2: 22,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 100-Question Priority-Starred Examination Repository for Unit 2: Differentiation Definition and Fundamental Properties, 90 MCQs, 10 multi-part FRQs with scoring rubrics.',
  },
  'ap-calculus-ab-3': {
    pdfUrl: '/sample-papers/AP_Calculus_AB_Unit3_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_AB_Unit3_Master.html',
    title: 'AP Calculus AB – Unit 3: Composite, Implicit & Inverse Functions (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 35,
      star3: 50,
      star2: 15,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 FRQs) for Unit 3: Chain Rule, Implicit Differentiation, Inverse Function Derivatives, and Inverse Trig Rules with official scoring rubrics.',
  },
  'ap-calculus-ab-4': {
    pdfUrl: '/sample-papers/AP_Calculus_AB_Unit4_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_AB_Unit4_Master.html',
    title: 'AP Calculus AB – Unit 4: Contextual Applications of Differentiation (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 42,
      star3: 40,
      star2: 18,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 FRQs) for Unit 4: Straight-Line Motion, Related Rates, Local Linearization, and L’Hospital’s Rule with official scoring rubrics.',
  },
  'ap-calculus-ab-5': {
    pdfUrl: '/sample-papers/AP_Calculus_AB_Unit5_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_AB_Unit5_Master.html',
    title: 'AP Calculus AB – Unit 5: Analytical Applications of Differentiation (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 45,
      star3: 38,
      star2: 17,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 FRQs) for Unit 5: Mean Value Theorem, First/Second Derivative Tests, Concavity, Inflection Points, and Optimization with official scoring rubrics.',
  },
  'ap-calculus-ab-6': {
    pdfUrl: '/sample-papers/AP_Calculus_AB_Unit6_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_AB_Unit6_Master.html',
    title: 'AP Calculus AB – Unit 6: Integration and Accumulation of Change (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 44,
      star3: 38,
      star2: 18,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 FRQs) for Unit 6: Accumulation & Net Change, Riemann Sums, Fundamental Theorem of Calculus, Definite Integrals, and Motion with official scoring rubrics.',
  },
  'ap-calculus-ab-7': {
    pdfUrl: '/sample-papers/AP_Calculus_AB_Unit7_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_AB_Unit7_Master.html',
    title: 'AP Calculus AB – Unit 7: Differential Equations (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 42,
      star3: 40,
      star2: 18,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 FRQs) for Unit 7: Modeling with Differential Equations, Slope Fields, Separation of Variables, Exponential Growth & Decay, and Logistic Models with official scoring rubrics.',
  },
  'ap-calculus-ab-8': {
    pdfUrl: '/sample-papers/AP_Calculus_AB_Unit8_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_AB_Unit8_Master.html',
    title: 'AP Calculus AB – Unit 8: Applications of Integration (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 45,
      star3: 40,
      star2: 15,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 FRQs) for Unit 8: Average Value, Position & Velocity Accumulation, Area Between Curves, Volumes with Known Cross Sections, Disk Method, and Washer Method with official scoring rubrics.',
  },
  'ap-calculus-ab-0': {
    pdfUrl: '/sample-papers/AP_Calculus_AB_Full_Units_Mixed_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_AB_Full_Units_Mixed_Master.html',
    title: 'AP Calculus AB – Full Course Mixed Examination (Units 1–8 Master Set)',
    pageCount: 242,
    totalQuestions: 250,
    mcqCount: 200,
    frqCount: 50,
    priorityStars: {
      star5: 110,
      star3: 100,
      star2: 40,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 242-Page Priority-Starred Master Examination Set covering all 8 units of AP Calculus AB: 200 MCQs + 50 FRQs with complete diagnostic answer keys, worked solutions, and AP scoring rubrics.',
  },
  'ap-calculus-ab-full': {
    pdfUrl: '/sample-papers/AP_Calculus_AB_Full_Units_Mixed_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_AB_Full_Units_Mixed_Master.html',
    title: 'AP Calculus AB – Full Course Mixed Examination (Units 1–8 Master Set)',
    pageCount: 242,
    totalQuestions: 250,
    mcqCount: 200,
    frqCount: 50,
    priorityStars: {
      star5: 110,
      star3: 100,
      star2: 40,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 242-Page Priority-Starred Master Examination Set covering all 8 units of AP Calculus AB: 200 MCQs + 50 FRQs with complete diagnostic answer keys, worked solutions, and AP scoring rubrics.',
  },
  // ================= AP CALCULUS BC (UNITS 1–10) =================
  'ap-calculus-bc-1': {
    pdfUrl: '/sample-papers/AP_Calculus_BC_Unit1_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_BC_Unit1_Master.html',
    title: 'AP Calculus BC – Unit 1: Limits & Continuity (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 40,
      star3: 40,
      star2: 20,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 100-Question Priority-Starred Examination Repository (90 MCQs + 10 FRQs) for Unit 1: Limits & Continuity with step-by-step worked solutions and AP scoring rubrics.',
  },
  'ap-calculus-bc-2': {
    pdfUrl: '/sample-papers/AP_Calculus_BC_Unit2_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_BC_Unit2_Master.html',
    title: 'AP Calculus BC – Unit 2: Differentiation: Definition & Fundamental Properties (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 43,
      star3: 35,
      star2: 22,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 100-Question Priority-Starred Examination Repository for Unit 2: Differentiation Definition and Fundamental Properties, 90 MCQs, 10 multi-part FRQs with scoring rubrics.',
  },
  'ap-calculus-bc-3': {
    pdfUrl: '/sample-papers/AP_Calculus_BC_Unit3_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_BC_Unit3_Master.html',
    title: 'AP Calculus BC – Unit 3: Composite, Implicit & Inverse Functions (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 35,
      star3: 50,
      star2: 15,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 FRQs) for Unit 3: Chain Rule, Implicit Differentiation, and Inverse Function Derivatives.',
  },
  'ap-calculus-bc-4': {
    pdfUrl: '/sample-papers/AP_Calculus_BC_Unit4_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_BC_Unit4_Master.html',
    title: 'AP Calculus BC – Unit 4: Contextual Applications of Differentiation (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 42,
      star3: 40,
      star2: 18,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 FRQs) for Unit 4: Straight-Line Motion, Related Rates, Local Linearization, and L’Hospital’s Rule.',
  },
  'ap-calculus-bc-5': {
    pdfUrl: '/sample-papers/AP_Calculus_BC_Unit5_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_BC_Unit5_Master.html',
    title: 'AP Calculus BC – Unit 5: Analytical Applications of Differentiation (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 45,
      star3: 38,
      star2: 17,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 FRQs) for Unit 5: Mean Value Theorem, Extreme Value Theorem, 1st & 2nd Derivative Tests, and Optimization.',
  },
  'ap-calculus-bc-6': {
    pdfUrl: '/sample-papers/AP_Calculus_BC_Unit6_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_BC_Unit6_Master.html',
    title: 'AP Calculus BC – Unit 6: Integration and Accumulation of Change (Priority-Starred Master Set)',
    pageCount: 79,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 50,
      star3: 35,
      star2: 15,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 79-Page BC Master Examination Set (90 MCQs + 10 FRQs): Integration by Parts, Partial Fractions, Improper Integrals, Tabular Integration, and Riemann Sum accumulations.',
  },
  'ap-calculus-bc-7': {
    pdfUrl: '/sample-papers/AP_Calculus_BC_Unit7_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_BC_Unit7_Master.html',
    title: 'AP Calculus BC – Unit 7: Differential Equations (Priority-Starred Master Set)',
    pageCount: 79,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 48,
      star3: 36,
      star2: 16,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 79-Page BC Master Examination Set (90 MCQs + 10 FRQs): Euler’s Method, Logistic Differential Equations with Carrying Capacity, Separation of Variables, and Slope Fields.',
  },
  'ap-calculus-bc-8': {
    pdfUrl: '/sample-papers/AP_Calculus_BC_Unit8_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_BC_Unit8_Master.html',
    title: 'AP Calculus BC – Unit 8: Applications of Integration (Priority-Starred Master Set)',
    pageCount: 79,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 52,
      star3: 34,
      star2: 14,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 79-Page BC Master Examination Set (90 MCQs + 10 FRQs): Arc Length of Planar Curves, Accumulation Functions, Volumes by Slicing & Washers, and Average Value.',
  },
  'ap-calculus-bc-9': {
    pdfUrl: '/sample-papers/AP_Calculus_BC_Unit9_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_BC_Unit9_Master.html',
    title: 'AP Calculus BC – Unit 9: Parametric Equations, Polar Coordinates & Vector Functions (Priority-Starred Master Set)',
    pageCount: 79,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 55,
      star3: 32,
      star2: 13,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 79-Page BC Exclusive Master Examination Set (90 MCQs + 10 FRQs): Planar Vector Motion, Speed & Total Distance, Parametric Tangent Slopes, and Polar Curve Enclosed Areas.',
  },
  'ap-calculus-bc-10': {
    pdfUrl: '/sample-papers/AP_Calculus_BC_Unit10_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Calculus_BC_Unit10_Master.html',
    title: 'AP Calculus BC – Unit 10: Infinite Sequences and Series (Priority-Starred Master Set)',
    pageCount: 79,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 58,
      star3: 30,
      star2: 12,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 79-Page BC Highest-Weight Master Examination Set (90 MCQs + 10 FRQs): Convergence Tests (Ratio, Integral, Alt Series), Taylor & Maclaurin Polynomials, Power Series Radius & Interval, and Lagrange Error Bound.',
  },
  // ================= AP HUMAN GEOGRAPHY (UNITS 1–3) =================
  'ap-human-geography-1': {
    pdfUrl: '/sample-papers/AP_Human_Geography_Unit1_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Human_Geography_Unit1_Master.html',
    title: 'AP Human Geography – Unit 1: Thinking Geographically (Priority-Starred Master Set)',
    pageCount: 86,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 42,
      star3: 38,
      star2: 20,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 86-Page Priority-Starred Master Examination Set (90 MCQs + 10 Multi-Part FRQs) for Unit 1: Thinking Geographically, Spatial Patterns, Map Projections, Geospatial Technologies, and Regional Analysis with complete diagnostic answer keys, worked solutions, and AP scoring rubrics.',
  },
  'ap-human-geography-2': {
    pdfUrl: '/sample-papers/AP_Human_Geography_Unit2_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Human_Geography_Unit2_Master.html',
    title: 'AP Human Geography – Unit 2: Population & Migration Patterns (Priority-Starred Master Set)',
    pageCount: 86,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 45,
      star3: 36,
      star2: 19,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 86-Page Priority-Starred Master Examination Set (90 MCQs + 10 Multi-Part FRQs) for Unit 2: Population Densities, Demographic Transition Model (DTM), Epidemiologic Transition, Malthusian Theory, Population Pyramids, and Ravenstein’s Laws of Migration with complete rubrics.',
  },
  'ap-human-geography-3': {
    pdfUrl: '/sample-papers/AP_Human_Geography_Unit3_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Human_Geography_Unit3_Master.html',
    title: 'AP Human Geography – Unit 3: Cultural Patterns and Processes (Priority-Starred Master Set)',
    pageCount: 86,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 44,
      star3: 38,
      star2: 18,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 86-Page Priority-Starred Master Examination Set (90 MCQs + 10 Multi-Part FRQs) for Unit 3: Cultural Hearths, Relocation & Expansion Diffusion, Cultural Landscapes, Language Families, Universalizing vs. Ethnic Religions, and Acculturation/Assimilation with complete rubrics.',
  },
  'ap-human-geography-4': {
    pdfUrl: '/sample-papers/AP_Human_Geography_Unit4_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_Human_Geography_Unit4_Master.html',
    title: 'AP Human Geography – Unit 4: Political Patterns and Processes (Priority-Starred Master Set)',
    pageCount: 86,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 48,
      star3: 34,
      star2: 18,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 86-Page Priority-Starred Master Examination Set (90 MCQs + 10 Multi-Part FRQs) for Unit 4: Political Boundaries, UNCLOS, Devolution, Gerrymandering, and Supranationalism with complete rubrics.',
  },
  'ap-computer-science-principles-1': {
    pdfUrl: '/sample-papers/AP_CSP_Unit1_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_CSP_Unit1_Master.html',
    title: 'AP Computer Science Principles – Unit 1: Creative Development & Collaboration (Priority-Starred Master Set)',
    pageCount: 86,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 49,
      star3: 33,
      star2: 18,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 86-Page Priority-Starred Master Examination Set (90 MCQs + 10 Create Performance Task Style FRQs) for Unit 1: Creative Development & Collaboration, Pair Programming, Event-Driven Design, Error Typologies, and IP Licensing with 9-point rubrics.',
  },
  'ap-computer-science-principles-2': {
    pdfUrl: '/sample-papers/AP_CSP_Unit2_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_CSP_Unit2_Master.html',
    title: 'AP Computer Science Principles – Unit 2: Data Representation & Compression (Priority-Starred Master Set)',
    pageCount: 86,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 53,
      star4: 34,
      star3: 13,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 86-Page Priority-Starred Master Examination Set (90 MCQs + 10 Create Performance Task Style FRQs) for Unit 2: Positional Binary, Hexadecimal, Integer Overflow, Floating-Point Round-Off, Analog/Digital Sampling, Lossless RLE/LZW, Lossy Perceptual Codecs, and Metadata Privacy with 9-point rubrics.',
  },
  'ap-computer-science-principles-3': {
    pdfUrl: '/sample-papers/AP_CSP_Unit3_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_CSP_Unit3_Master.html',
    title: 'AP Computer Science Principles – Unit 3: Algorithms & Programming (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 58,
      star4: 42,
      star3: 0,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 Create Performance Task Style FRQs) for Unit 3: Variables, Modulo, Boolean Logic, Nested Conditionals, Iteration, Robot Grid Navigation, 1-Indexed Lists, Procedures & Parameters, Linear/Binary Search, Simulations, Algorithmic Efficiency, and Undecidable Problems with 9-point rubrics.',
  },
  'ap-computer-science-principles-4': {
    pdfUrl: '/sample-papers/AP_CSP_Unit4_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_CSP_Unit4_Master.html',
    title: 'AP Computer Science Principles – Unit 4: Computer Systems and Networks (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 64,
      star4: 36,
      star3: 0,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 Create Performance Task Style FRQs) for Unit 4: Internet Architecture, Open Standards (IETF), IPv4/IPv6 Hierarchies, TCP vs UDP, DNS Resolution & Spoofing, Fault Tolerance & Network Topologies, Parallel Speedup & Amdahl’s Law, Distributed Systems & DDoS, and Public-Key Cryptography (RSA) with 9-point rubrics.',
  },
  'ap-computer-science-principles-5': {
    pdfUrl: '/sample-papers/AP_CSP_Unit5_Master_Set.pdf',
    htmlUrl: '/sample-papers/AP_CSP_Unit5_Master.html',
    title: 'AP Computer Science Principles – Unit 5: Impact of Computing (Priority-Starred Master Set)',
    pageCount: 85,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 64,
      star4: 36,
      star3: 0,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 85-Page Priority-Starred Master Examination Set (90 MCQs + 10 Create Performance Task Style FRQs) for Unit 5: Beneficial & Harmful Effects, The Digital Divide, Algorithmic Bias & Training Data Proxies, Crowdsourcing & Citizen Science, Intellectual Property (Copyright, Creative Commons, Open Source), Personally Identifiable Information (PII) & Re-Identification, Cybersecurity (Phishing, Malware, Ransomware), and Multi-Factor Authentication (MFA) with 9-point rubrics.',
  },
  'ap-environmental-science-7': {
    pdfUrl: '/sample-papers/AP_Environmental_Science_Unit_7_Mastery_100Q.pdf',
    htmlUrl: '/sample-papers/AP_Environmental_Science_Unit_7_Mastery_100Q.html',
    title: 'AP Environmental Science – Unit 7: Atmospheric Pollution (Priority-Starred Master Set)',
    pageCount: 86,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    priorityStars: {
      star5: 50,
      star4: 35,
      star3: 15,
    },
    uploadedDate: 'October 2026',
    description: 'Complete 86-Page Priority-Starred Master Examination Set (90 MCQs + 10 Multi-Part FRQs) for Unit 7: Criteria Pollutants (SPLONC), Photochemical Smog Diurnal Cycles, Thermal Inversions, Particulate Dynamics (PM2.5/PM10), Indoor Air Hazards (Radon-222, Asbestos, Mold), Flue Gas Scrubbers & ESPs, Acid Deposition & Watershed Buffering, and Noise Pollution with 10-point rubrics.',
  },
};

export function getUnitPdfKey(subjectId: string, unitNumber: number): string {
  return `${subjectId}-${unitNumber}`;
}

export function hasUnitPdf(subjectId: string, unitNumber: number): boolean {
  return Boolean(UPLOADED_UNIT_PDFS[getUnitPdfKey(subjectId, unitNumber)]);
}

export function getUnitPdf(subjectId: string, unitNumber: number): UploadedUnitPdf | undefined {
  return UPLOADED_UNIT_PDFS[getUnitPdfKey(subjectId, unitNumber)];
}

/**
 * All Official AP Subjects and their CED Units
 */
export const ALL_TEST_PREP_SUBJECTS: TestPrepSubject[] = [
  // ================= STEM & MATH =================
  {
    id: 'ap-calculus-ab',
    code: 'CAL',
    name: 'AP Calculus AB',
    category: 'STEM & Math',
    badgeColor: 'bg-[#6366f1]',
    units: [
      { unitNumber: 0, title: 'Full Course Mixed Master Set (Units 1–8 Comprehensive)', weight: '100% Full Exam Weight', concepts: '200 MCQs + 50 FRQs • All Units Mixed' },
      { unitNumber: 1, title: 'Limits and Continuity', weight: '10%–12% of AP Exam', concepts: '8 Concept Nodes' },
      { unitNumber: 2, title: 'Differentiation: Definition & Properties', weight: '10%–12% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Composite, Implicit & Inverse Differentiation', weight: '9%–13% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 4, title: 'Contextual Applications of Differentiation', weight: '10%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Analytical Applications of Differentiation', weight: '15%–18% of AP Exam (Highest Weight!)', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Integration & Accumulation of Change', weight: '17%–20% of AP Exam (Highest Weight!)', concepts: '4 Concept Nodes' },
      { unitNumber: 7, title: 'Differential Equations', weight: '6%–12% of AP Exam', concepts: '2 Concept Nodes' },
      { unitNumber: 8, title: 'Applications of Integration', weight: '10%–15% of AP Exam', concepts: '3 Concept Nodes' },
    ],
  },
  {
    id: 'ap-calculus-bc',
    code: 'CAL',
    name: 'AP Calculus BC',
    category: 'STEM & Math',
    badgeColor: 'bg-[#7c3aed]',
    units: [
      { unitNumber: 1, title: 'Limits and Continuity', weight: '4%–7% of AP Exam', concepts: '8 Concept Nodes' },
      { unitNumber: 2, title: 'Differentiation: Definition & Fundamental Properties', weight: '4%–7% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Composite, Implicit, and Inverse Functions', weight: '4%–7% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 4, title: 'Contextual Applications of Differentiation', weight: '6%–9% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Analytical Applications of Differentiation', weight: '8%–11% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Integration and Accumulation of Change', weight: '17%–20% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 7, title: 'Differential Equations', weight: '6%–9% of AP Exam', concepts: '2 Concept Nodes' },
      { unitNumber: 8, title: 'Applications of Integration', weight: '6%–9% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 9, title: 'Parametric Equations, Polar Coordinates & Vector Functions', weight: '11%–12% of AP Exam (BC Exclusive)', concepts: '3 Concept Nodes' },
      { unitNumber: 10, title: 'Infinite Sequences and Series', weight: '17%–18% of AP Exam (BC Exclusive Highest Weight!)', concepts: '4 Concept Nodes' },
    ],
  },
  {
    id: 'ap-statistics',
    code: 'STAT',
    name: 'AP Statistics',
    category: 'STEM & Math',
    badgeColor: 'bg-[#2563eb]',
    units: [
      { unitNumber: 1, title: 'Exploring One-Variable Data', weight: '15%–23% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 2, title: 'Exploring Two-Variable Data', weight: '5%–7% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Collecting Data (Sampling & Experiments)', weight: '12%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 4, title: 'Probability, Random Variables & Distributions', weight: '10%–20% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 5, title: 'Sampling Distributions & Central Limit Theorem', weight: '7%–12% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Inference for Categorical Data: Proportions', weight: '12%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 7, title: 'Inference for Quantitative Data: Means', weight: '10%–18% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 8, title: 'Inference for Categorical Data: Chi-Square', weight: '2%–5% of AP Exam', concepts: '2 Concept Nodes' },
      { unitNumber: 9, title: 'Inference for Quantitative Data: Slopes', weight: '2%–5% of AP Exam', concepts: '2 Concept Nodes' },
    ],
  },

  // ================= SCIENCES =================
  {
    id: 'ap-physics',
    code: 'PHY',
    name: 'AP Physics 1: Algebra-Based',
    category: 'Sciences',
    badgeColor: 'bg-[#6366f1]',
    units: [
      { unitNumber: 1, title: 'Kinematics: 1D & 2D Motion', weight: '12%–18% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 2, title: 'Force and Translational Dynamics', weight: '16%–20% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 3, title: 'Work, Energy, and Power', weight: '16%–24% of AP Exam (Highest Weight!)', concepts: '4 Concept Nodes' },
      { unitNumber: 4, title: 'Linear Momentum and Collisions', weight: '12%–18% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Torque and Rotational Dynamics', weight: '12%–18% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Energy and Momentum of Rotating Systems', weight: '8%–12% of AP Exam', concepts: '2 Concept Nodes' },
      { unitNumber: 7, title: 'Oscillations & Simple Harmonic Motion', weight: '4%–6% of AP Exam', concepts: '2 Concept Nodes' },
      { unitNumber: 8, title: 'Fluids (Statics & Dynamics)', weight: '10%–14% of AP Exam', concepts: '3 Concept Nodes' },
    ],
  },
  {
    id: 'ap-chemistry',
    code: 'CHE',
    name: 'AP Chemistry',
    category: 'Sciences',
    badgeColor: 'bg-[#a855f7]',
    units: [
      { unitNumber: 1, title: 'Atomic Structure and Properties', weight: '7%–9% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 2, title: 'Molecular and Ionic Compound Structure', weight: '7%–9% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Intermolecular Forces and Properties', weight: '18%–22% of AP Exam (Highest Weight!)', concepts: '5 Concept Nodes' },
      { unitNumber: 4, title: 'Chemical Reactions and Stoichiometry', weight: '7%–9% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Kinetics and Rate Laws', weight: '7%–9% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Thermodynamics & Enthalpy', weight: '7%–9% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 7, title: 'Equilibrium & Le Chatelier', weight: '7%–9% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 8, title: 'Acids and Bases (Buffers & Titrations)', weight: '11%–15% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 9, title: 'Applications of Thermodynamics & Electrochemistry', weight: '7%–9% of AP Exam', concepts: '3 Concept Nodes' },
    ],
  },
  {
    id: 'ap-biology',
    code: 'BIO',
    name: 'AP Biology',
    category: 'Sciences',
    badgeColor: 'bg-[#10b981]',
    units: [
      { unitNumber: 1, title: 'Chemistry of Life (Water, Carbon, Macromolecules)', weight: '8%–11% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 2, title: 'Cell Structure and Function', weight: '10%–13% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 3, title: 'Cellular Energetics (Photosynthesis & Respiration)', weight: '12%–16% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 4, title: 'Cell Communication and Cell Cycle', weight: '10%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Heredity and Mendelian Genetics', weight: '8%–11% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Gene Expression and Regulation', weight: '12%–16% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 7, title: 'Natural Selection & Evolution', weight: '13%–20% of AP Exam (Highest Weight!)', concepts: '4 Concept Nodes' },
      { unitNumber: 8, title: 'Ecology & Community Interactions', weight: '10%–15% of AP Exam', concepts: '3 Concept Nodes' },
    ],
  },
  {
    id: 'ap-environmental-science',
    code: 'APES',
    name: 'AP Environmental Science',
    category: 'Sciences',
    badgeColor: 'bg-[#15803d]',
    units: [
      { unitNumber: 1, title: 'The Living World: Ecosystems', weight: '6%–8% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 2, title: 'The Living World: Biodiversity', weight: '6%–8% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Populations & Demographic Transition', weight: '10%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 4, title: 'Earth Systems and Resources', weight: '10%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Land and Water Use (Agriculture, Forestry)', weight: '10%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Energy Resources and Consumption', weight: '10%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 7, title: 'Atmospheric Pollution & Smog', weight: '7%–10% of AP Exam', concepts: '2 Concept Nodes' },
      { unitNumber: 8, title: 'Aquatic and Terrestrial Pollution', weight: '7%–10% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 9, title: 'Global Change (Climate & Ozone)', weight: '15%–20% of AP Exam (Highest Weight!)', concepts: '3 Concept Nodes' },
    ],
  },

  // ================= HUMANITIES & SOCIAL SCIENCES =================
  {
    id: 'ap-human-geography',
    code: 'APHG',
    name: 'AP Human Geography',
    category: 'Humanities & Social Sciences',
    badgeColor: 'bg-[#ea580c]',
    units: [
      { unitNumber: 1, title: 'Thinking Geographically & Spatial Analysis', weight: '8%–10% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 2, title: 'Population and Migration Patterns & Processes', weight: '12%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 3, title: 'Cultural Patterns and Processes (Language, Religion)', weight: '12%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 4, title: 'Political Patterns and Processes (Boundaries, Sovereignty)', weight: '12%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 5, title: 'Agriculture and Rural Land-Use Patterns (Von Thünen)', weight: '12%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 6, title: 'Cities and Urban Land-Use Patterns', weight: '12%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 7, title: 'Industrial and Economic Development Patterns', weight: '12%–17% of AP Exam', concepts: '4 Concept Nodes' },
    ],
  },
  {
    id: 'ap-psychology',
    code: 'PSY',
    name: 'AP Psychology',
    category: 'Humanities & Social Sciences',
    badgeColor: 'bg-[#db2777]',
    units: [
      { unitNumber: 1, title: 'Biological Bases of Behavior & Brain Structures', weight: '15%–25% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 2, title: 'Cognition, Memory, Intelligence & Problem Solving', weight: '15%–25% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Development and Learning Across the Lifespan', weight: '15%–25% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 4, title: 'Social Psychology and Personality', weight: '15%–20% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Mental and Physical Health (Disorders & Therapies)', weight: '15%–25% of AP Exam', concepts: '3 Concept Nodes' },
    ],
  },
  {
    id: 'ap-us-history',
    code: 'USH',
    name: 'AP U.S. History',
    category: 'Humanities & Social Sciences',
    badgeColor: 'bg-[#dc2626]',
    units: [
      { unitNumber: 1, title: 'Period 1: 1491–1607 (Pre-Columbian & First Contact)', weight: '4%–6% of AP Exam', concepts: '2 Concept Nodes' },
      { unitNumber: 2, title: 'Period 2: 1607–1754 (Colonial America)', weight: '6%–8% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Period 3: 1754–1800 (Revolution & Early Republic)', weight: '10%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 4, title: 'Period 4: 1800–1848 (Jacksonian Democracy & Expansion)', weight: '10%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 5, title: 'Period 5: 1844–1877 (Civil War & Reconstruction)', weight: '10%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 6, title: 'Period 6: 1865–1898 (Gilded Age & Industrialization)', weight: '10%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 7, title: 'Period 7: 1890–1945 (Imperialism, Great Depression, WWII)', weight: '10%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 8, title: 'Period 8: 1945–1980 (Cold War & Civil Rights)', weight: '10%–17% of AP Exam', concepts: '4 Concept Nodes' },
      { unitNumber: 9, title: 'Period 9: 1980–Present (Reagan, Tech & Modern Era)', weight: '4%–6% of AP Exam', concepts: '2 Concept Nodes' },
    ],
  },
  {
    id: 'ap-world-history',
    code: 'WHAP',
    name: 'AP World History: Modern',
    category: 'Humanities & Social Sciences',
    badgeColor: 'bg-[#d97706]',
    units: [
      { unitNumber: 1, title: 'Unit 1: The Global Tapestry (c. 1200–c. 1450)', weight: '8%–10% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 2, title: 'Unit 2: Networks of Exchange (Silk Road, Indian Ocean)', weight: '8%–10% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Unit 3: Land-Based Empires (c. 1450–c. 1750)', weight: '12%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 4, title: 'Unit 4: Transoceanic Interconnections (Maritime Empires)', weight: '12%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Unit 5: Revolutions (Enlightenment & Industrial)', weight: '12%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Unit 6: Consequences of Industrialization (Imperialism)', weight: '12%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 7, title: 'Unit 7: Global Conflict (WWI, Interwar, WWII)', weight: '8%–10% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 8, title: 'Unit 8: Cold War and Decolonization', weight: '8%–10% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 9, title: 'Unit 9: Globalization (c. 1900–Present)', weight: '8%–10% of AP Exam', concepts: '3 Concept Nodes' },
    ],
  },
  {
    id: 'ap-economics',
    code: 'ECON',
    name: 'AP Micro & Macroeconomics',
    category: 'Humanities & Social Sciences',
    badgeColor: 'bg-[#0d9488]',
    units: [
      { unitNumber: 1, title: 'Basic Economic Concepts (PPC, Trade, Scarcity)', weight: 'Micro & Macro Foundation', concepts: '3 Concept Nodes' },
      { unitNumber: 2, title: 'Supply and Demand, Elasticity & Equilibrium', weight: 'Micro Core (20%–25%)', concepts: '4 Concept Nodes' },
      { unitNumber: 3, title: 'Production, Cost, and Perfect Competition', weight: 'Micro Core (22%–28%)', concepts: '4 Concept Nodes' },
      { unitNumber: 4, title: 'Imperfect Competition (Monopoly, Oligopoly)', weight: 'Micro Core (15%–22%)', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Factor Markets (Labor Supply & MRP)', weight: 'Micro Core (10%–18%)', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Market Failure and Role of Government', weight: 'Micro Core (12%–18%)', concepts: '3 Concept Nodes' },
      { unitNumber: 7, title: 'Economic Indicators & Circular Flow (GDP, Inflation)', weight: 'Macro Core (12%–17%)', concepts: '3 Concept Nodes' },
      { unitNumber: 8, title: 'AD-AS Model and Fiscal Policy', weight: 'Macro Core (17%–27%)', concepts: '4 Concept Nodes' },
      { unitNumber: 9, title: 'Financial Sector, Money Supply & Banking', weight: 'Macro Core (18%–23%)', concepts: '3 Concept Nodes' },
      { unitNumber: 10, title: 'Long-Run Stabilization & Phillips Curve', weight: 'Macro Core (20%–30%)', concepts: '3 Concept Nodes' },
      { unitNumber: 11, title: 'Open Economy: Capital Flows and FOREX', weight: 'Macro Core (10%–13%)', concepts: '3 Concept Nodes' },
    ],
  },

  // ================= ENGLISH & TECH =================
  {
    id: 'ap-computer-science',
    code: 'CSA',
    name: 'AP Computer Science A',
    category: 'English & Tech',
    badgeColor: 'bg-[#4f46e5]',
    units: [
      { unitNumber: 1, title: 'Primitive Types (Variables & Arithmetic)', weight: '2.5%–5% of AP Exam', concepts: '2 Concept Nodes' },
      { unitNumber: 2, title: 'Using Objects (String, Math, Classes)', weight: '5%–7.5% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Boolean Expressions and if Statements', weight: '15%–17.5% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 4, title: 'Iteration (while & for Loops)', weight: '17.5%–22.5% of AP Exam (Highest Weight!)', concepts: '4 Concept Nodes' },
      { unitNumber: 5, title: 'Writing Classes (Constructors, Encapsulation)', weight: '5%–7.5% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Array (1D Traversal & Algorithms)', weight: '10%–15% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 7, title: 'ArrayList (Dynamic Collections & Searches)', weight: '2.5%–7.5% of AP Exam', concepts: '2 Concept Nodes' },
      { unitNumber: 8, title: '2D Array (Matrices & Grid Traversals)', weight: '7.5%–10% of AP Exam', concepts: '2 Concept Nodes' },
      { unitNumber: 9, title: 'Inheritance & Polymorphism', weight: '5%–10% of AP Exam', concepts: '3 Concept Nodes' },
      { unitNumber: 10, title: 'Recursion & Recursive Search/Sort', weight: '5%–7.5% of AP Exam', concepts: '2 Concept Nodes' },
    ],
  },
  {
    id: 'ap-computer-science-principles',
    code: 'CSP',
    name: 'AP Computer Science Principles',
    category: 'English & Tech',
    badgeColor: 'bg-[#0891b2]',
    units: [
      { unitNumber: 1, title: 'Creative Development & Collaboration', weight: 'Big Idea 1 (10%–13%)', concepts: '3 Concept Nodes' },
      { unitNumber: 2, title: 'Data Representation & Compression', weight: 'Big Idea 2 (17%–22%)', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Algorithms and Programming (Pseudocode)', weight: 'Big Idea 3 (30%–35% Highest!)', concepts: '5 Concept Nodes' },
      { unitNumber: 4, title: 'Computer Systems and Networks (Internet & IP)', weight: 'Big Idea 4 (11%–15%)', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Impact of Computing & Cybersecurity', weight: 'Big Idea 5 (21%–26%)', concepts: '3 Concept Nodes' },
    ],
  },
  {
    id: 'ap-english-lang',
    code: 'LANG',
    name: 'AP English Language & Comp',
    category: 'English & Tech',
    badgeColor: 'bg-[#0284c7]',
    units: [
      { unitNumber: 1, title: 'Rhetorical Situation: Claims & Exigence', weight: 'Skill Category 1', concepts: '3 Concept Nodes' },
      { unitNumber: 2, title: 'Appeals, Audience & Line of Reasoning', weight: 'Skill Category 2', concepts: '3 Concept Nodes' },
      { unitNumber: 3, title: 'Synthesis: Evaluating Multiple Sources', weight: 'Synthesis Free-Response', concepts: '3 Concept Nodes' },
      { unitNumber: 4, title: 'Argument Structure & Counterclaims', weight: 'Argument Free-Response', concepts: '3 Concept Nodes' },
      { unitNumber: 5, title: 'Style, Diction, Tone & Syntax Mastery', weight: 'Skill Category 3', concepts: '3 Concept Nodes' },
      { unitNumber: 6, title: 'Rhetorical Analysis Essay Mastery', weight: 'Analysis Free-Response', concepts: '3 Concept Nodes' },
    ],
  },
];
