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

export interface SubjectVisual {
  icon: string;
  gradient: string;
  description: string;
}

export const TEST_PREP_SUBJECT_VISUALS: Record<string, SubjectVisual> = {
  'ap-calculus-ab': {
    icon: '📐',
    gradient: 'from-blue-600 via-indigo-700 to-blue-900',
    description: 'Limits, Derivatives, Analytical Applications, Definite Integrals & Differential Equations (Units 1–8)',
  },
  'ap-calculus-bc': {
    icon: '📈',
    gradient: 'from-purple-600 via-violet-700 to-indigo-900',
    description: 'All Calculus AB Core Curriculum PLUS 2 Advanced BC-Exclusive Units: Parametric/Polar/Vectors & Infinite Sequences and Series (Units 1–10)',
  },
  'ap-statistics': {
    icon: '📊',
    gradient: 'from-blue-600 via-indigo-700 to-cyan-900',
    description: 'One-Variable Data & Study Design, Probability & Distributions, Inference for Proportions, Inference for Means & Regression Analysis (Units 1–5)',
  },
  'ap-physics': {
    icon: '⚡',
    gradient: 'from-amber-600 via-orange-600 to-amber-900',
    description: 'Kinematics, Dynamics, Work-Energy, Momentum, Torque, Rotational Dynamics, Oscillations & Fluids (Units 1–8)',
  },
  'ap-chemistry': {
    icon: '⚗️',
    gradient: 'from-fuchsia-600 via-purple-700 to-violet-900',
    description: 'Atomic Models, Chemical Bonding, IMFs, Kinetics, Thermodynamics, Equilibrium, Acids & Bases & Electrochemistry (Units 1–9)',
  },
  'ap-biology': {
    icon: '🧬',
    gradient: 'from-emerald-600 via-teal-700 to-emerald-900',
    description: 'Chemistry of Life, Cell Structure, Energetics, Cell Cycle, Heredity, Gene Expression, Natural Selection & Ecology (Units 1–8)',
  },
  'ap-environmental-science': {
    icon: '🌿',
    gradient: 'from-green-700 via-emerald-800 to-teal-950',
    description: 'Ecosystems, Biodiversity, Populations, Earth Systems, Land/Water Use, Energy, Atmospheric/Aquatic Pollution & Global Change (Units 1–9)',
  },
  'ap-human-geography': {
    icon: '🗺️',
    gradient: 'from-orange-700 via-amber-800 to-stone-900',
    description: 'Thinking Geographically, DTM, Cultural Diffusion, Political Borders, Von Thünen Agriculture, Urban Models & Economic Development (Units 1–7)',
  },
  'ap-psychology': {
    icon: '🧠',
    gradient: 'from-pink-700 via-rose-800 to-purple-950',
    description: 'Biological Bases of Behavior, Cognition & Memory, Development & Learning, Social Psychology & Mental Health (Units 1–5)',
  },
  'ap-us-history': {
    icon: '🏛️',
    gradient: 'from-red-700 via-rose-800 to-stone-900',
    description: 'Periods 1–9: From Pre-Columbian Societies and the American Revolution to the Cold War and Modern Era (Periods 1–9)',
  },
  'ap-world-history': {
    icon: '🌍',
    gradient: 'from-amber-700 via-orange-800 to-stone-900',
    description: '1200 CE to Present: The Global Tapestry, Networks of Exchange, Land-Based Empires, Revolutions, Industrialization & Globalization (Units 1–9)',
  },
  'ap-microeconomics': {
    icon: '📊',
    gradient: 'from-emerald-700 via-teal-800 to-slate-950',
    description: 'Basic Economic Concepts, Supply & Demand, Elasticity, Production Costs, Perfect Competition, Monopolies, Factor Markets & Market Failure (Units 1–6)',
  },
  'ap-macroeconomics': {
    icon: '📈',
    gradient: 'from-teal-700 via-cyan-800 to-slate-950',
    description: 'Economic Indicators (GDP, CPI, Unemployment), AD-AS Model, Fiscal Policy Multipliers, Banking System, Phillips Curve & FOREX (Units 1–6)',
  },
  'ap-computer-science': {
    icon: '💻',
    gradient: 'from-indigo-700 via-blue-800 to-slate-950',
    description: 'Java Programming: Primitive Types, Using Objects, Booleans, Loops, Writing Classes, 1D/2D Arrays, ArrayList, Inheritance & Recursion (Units 1–10)',
  },
  'ap-computer-science-principles': {
    icon: '🌐',
    gradient: 'from-cyan-600 via-teal-600 to-sky-900',
    description: 'Creative Development, Data Representation, Algorithms, Pseudocode, Internet Protocols & Cybersecurity (Units 1–5)',
  },
  'ap-english-lang': {
    icon: '✍️',
    gradient: 'from-sky-700 via-teal-800 to-slate-900',
    description: 'Rhetorical Situation, Claims, Evidence, Synthesis of Sources, Argumentative Structure, Diction & Syntax (Units 1–6)',
  },
};

export function getTestPrepSubjectVisual(subjectId: string): SubjectVisual {
  return TEST_PREP_SUBJECT_VISUALS[subjectId] || {
    icon: '📚',
    gradient: 'from-indigo-600 via-purple-700 to-indigo-950',
    description: '',
  };
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
    star5?: number;
    star4?: number;
    star3?: number;
    star2?: number;
  };
  uploadedDate?: string;
  description?: string;
}

/**
 * Registry of all uploaded Unit Master PDFs.
 * Key format: `${subjectId}-${unitNumber}` (e.g., 'ap-calculus-ab-1')
 */
export const UPLOADED_UNIT_PDFS: Record<string, UploadedUnitPdf> = {};

export function getUnitPdfKey(subjectId: string, unitNumber: number): string {
  return `${subjectId}-${unitNumber}`;
}

export function hasUnitPdf(subjectId: string, unitNumber: number): boolean {
  return Boolean(UPLOADED_UNIT_PDFS[getUnitPdfKey(subjectId, unitNumber)]);
}

export function getUnitPdf(subjectId: string, unitNumber: number): UploadedUnitPdf | undefined {
  return UPLOADED_UNIT_PDFS[getUnitPdfKey(subjectId, unitNumber)];
}

export function registerUnitPdf(key: string, pdfData: UploadedUnitPdf): void {
  UPLOADED_UNIT_PDFS[key] = pdfData;
}

export function unregisterUnitPdf(key: string): void {
  delete UPLOADED_UNIT_PDFS[key];
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
      { unitNumber: 0, title: 'Full Course Mixed Master Set (Units 1–8 Comprehensive)', weight: 'Weight: 100%' },
      { unitNumber: 1, title: 'Limits and Continuity', weight: 'Weight: 10%–12%' },
      { unitNumber: 2, title: 'Differentiation: Definition & Properties', weight: 'Weight: 10%–12%' },
      { unitNumber: 3, title: 'Composite, Implicit & Inverse Differentiation', weight: 'Weight: 9%–13%' },
      { unitNumber: 4, title: 'Contextual Applications of Differentiation', weight: 'Weight: 10%–15%' },
      { unitNumber: 5, title: 'Analytical Applications of Differentiation', weight: 'Weight: 15%–18%' },
      { unitNumber: 6, title: 'Integration & Accumulation of Change', weight: 'Weight: 17%–20%' },
      { unitNumber: 7, title: 'Differential Equations', weight: 'Weight: 6%–12%' },
      { unitNumber: 8, title: 'Applications of Integration', weight: 'Weight: 10%–15%' },
    ],
  },
  {
    id: 'ap-calculus-bc',
    code: 'CAL',
    name: 'AP Calculus BC',
    category: 'STEM & Math',
    badgeColor: 'bg-[#7c3aed]',
    units: [
      { unitNumber: 0, title: 'Full Course Mixed Master Practice Set (Units 1–10 Comprehensive 250Q)', weight: 'Weight: 100%' },
      { unitNumber: 1, title: 'Limits and Continuity', weight: 'Weight: 4%–7%' },
      { unitNumber: 2, title: 'Differentiation: Definition & Fundamental Properties', weight: 'Weight: 4%–7%' },
      { unitNumber: 3, title: 'Composite, Implicit, and Inverse Functions', weight: 'Weight: 4%–7%' },
      { unitNumber: 4, title: 'Contextual Applications of Differentiation', weight: 'Weight: 6%–9%' },
      { unitNumber: 5, title: 'Analytical Applications of Differentiation', weight: 'Weight: 8%–11%' },
      { unitNumber: 6, title: 'Integration and Accumulation of Change', weight: 'Weight: 17%–20%' },
      { unitNumber: 7, title: 'Differential Equations', weight: 'Weight: 6%–9%' },
      { unitNumber: 8, title: 'Applications of Integration', weight: 'Weight: 6%–9%' },
      { unitNumber: 9, title: 'Parametric Equations, Polar Coordinates & Vector Functions', weight: 'Weight: 11%–12%' },
      { unitNumber: 10, title: 'Infinite Sequences and Series', weight: 'Weight: 17%–18%' },
    ],
  },
  {
    id: 'ap-statistics',
    code: 'STAT',
    name: 'AP Statistics',
    category: 'STEM & Math',
    badgeColor: 'bg-[#2563eb]',
    units: [
      { unitNumber: 1, title: 'Exploring One-Variable Data and Collecting Data', weight: 'Weight: 20%–30%' },
      { unitNumber: 2, title: 'Probability, Random Variables, and Probability Distributions', weight: 'Weight: 15%–25%' },
      { unitNumber: 3, title: 'Inference for Categorical Data: Proportions', weight: 'Weight: 15%–25%' },
      { unitNumber: 4, title: 'Inference for Quantitative Data: Means', weight: 'Weight: 10%–20%' },
      { unitNumber: 5, title: 'Regression Analysis', weight: 'Weight: 10%–20%' },
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
      { unitNumber: 1, title: 'Kinematics: 1D & 2D Motion', weight: 'Weight: 12%–18%' },
      { unitNumber: 2, title: 'Force and Translational Dynamics', weight: 'Weight: 16%–20%' },
      { unitNumber: 3, title: 'Work, Energy, and Power', weight: 'Weight: 16%–24%' },
      { unitNumber: 4, title: 'Linear Momentum and Collisions', weight: 'Weight: 12%–18%' },
      { unitNumber: 5, title: 'Torque and Rotational Dynamics', weight: 'Weight: 12%–18%' },
      { unitNumber: 6, title: 'Energy and Momentum of Rotating Systems', weight: 'Weight: 8%–12%' },
      { unitNumber: 7, title: 'Oscillations & Simple Harmonic Motion', weight: 'Weight: 4%–6%' },
      { unitNumber: 8, title: 'Fluids (Statics & Dynamics)', weight: 'Weight: 10%–14%' },
    ],
  },
  {
    id: 'ap-chemistry',
    code: 'CHE',
    name: 'AP Chemistry',
    category: 'Sciences',
    badgeColor: 'bg-[#a855f7]',
    units: [
      { unitNumber: 1, title: 'Atomic Structure and Properties', weight: 'Weight: 7%–9%' },
      { unitNumber: 2, title: 'Molecular and Ionic Compound Structure', weight: 'Weight: 7%–9%' },
      { unitNumber: 3, title: 'Intermolecular Forces and Properties', weight: 'Weight: 18%–22%' },
      { unitNumber: 4, title: 'Chemical Reactions and Stoichiometry', weight: 'Weight: 7%–9%' },
      { unitNumber: 5, title: 'Kinetics and Rate Laws', weight: 'Weight: 7%–9%' },
      { unitNumber: 6, title: 'Thermodynamics & Enthalpy', weight: 'Weight: 7%–9%' },
      { unitNumber: 7, title: 'Equilibrium & Le Chatelier', weight: 'Weight: 7%–9%' },
      { unitNumber: 8, title: 'Acids and Bases (Buffers & Titrations)', weight: 'Weight: 11%–15%' },
      { unitNumber: 9, title: 'Applications of Thermodynamics & Electrochemistry', weight: 'Weight: 7%–9%' },
    ],
  },
  {
    id: 'ap-biology',
    code: 'BIO',
    name: 'AP Biology',
    category: 'Sciences',
    badgeColor: 'bg-[#10b981]',
    units: [
      { unitNumber: 0, title: 'Full Curriculum Mixed Master Set (Units 1–8 Comprehensive)', weight: 'Weight: 100%' },
      { unitNumber: 1, title: 'Chemistry of Life (Water, Carbon, Macromolecules)', weight: 'Weight: 8%–11%' },
      { unitNumber: 2, title: 'Cell Structure and Function', weight: 'Weight: 10%–13%' },
      { unitNumber: 3, title: 'Cellular Energetics (Photosynthesis & Respiration)', weight: 'Weight: 12%–16%' },
      { unitNumber: 4, title: 'Cell Communication and Cell Cycle', weight: 'Weight: 10%–15%' },
      { unitNumber: 5, title: 'Heredity and Mendelian Genetics', weight: 'Weight: 8%–11%' },
      { unitNumber: 6, title: 'Gene Expression and Regulation', weight: 'Weight: 12%–16%' },
      { unitNumber: 7, title: 'Natural Selection & Evolution', weight: 'Weight: 13%–20%' },
      { unitNumber: 8, title: 'Ecology & Community Interactions', weight: 'Weight: 10%–15%' },
    ],
  },
  {
    id: 'ap-environmental-science',
    code: 'APES',
    name: 'AP Environmental Science',
    category: 'Sciences',
    badgeColor: 'bg-[#15803d]',
    units: [
      { unitNumber: 0, title: 'Full Course Mixed Master Practice Set (Units 1–9 Comprehensive 250Q)', weight: 'Weight: 100%' },
      { unitNumber: 1, title: 'The Living World: Ecosystems', weight: 'Weight: 6%–8%' },
      { unitNumber: 2, title: 'The Living World: Biodiversity', weight: 'Weight: 6%–8%' },
      { unitNumber: 3, title: 'Populations & Demographic Transition', weight: 'Weight: 10%–15%' },
      { unitNumber: 4, title: 'Earth Systems and Resources', weight: 'Weight: 10%–15%' },
      { unitNumber: 5, title: 'Land and Water Use (Agriculture, Forestry)', weight: 'Weight: 10%–15%' },
      { unitNumber: 6, title: 'Energy Resources and Consumption', weight: 'Weight: 10%–15%' },
      { unitNumber: 7, title: 'Atmospheric Pollution & Smog', weight: 'Weight: 7%–10%' },
      { unitNumber: 8, title: 'Aquatic and Terrestrial Pollution', weight: 'Weight: 7%–10%' },
      { unitNumber: 9, title: 'Global Change (Climate & Ozone)', weight: 'Weight: 15%–20%' },
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
      { unitNumber: 0, title: 'Full Course Mixed Master Practice Set (Units 1–7 Comprehensive 250Q)', weight: 'Weight: 100%' },
      { unitNumber: 1, title: 'Thinking Geographically & Spatial Analysis', weight: 'Weight: 8%–10%' },
      { unitNumber: 2, title: 'Population and Migration Patterns & Processes', weight: 'Weight: 12%–17%' },
      { unitNumber: 3, title: 'Cultural Patterns and Processes (Language, Religion)', weight: 'Weight: 12%–17%' },
      { unitNumber: 4, title: 'Political Patterns and Processes (Boundaries, Sovereignty)', weight: 'Weight: 12%–17%' },
      { unitNumber: 5, title: 'Agriculture and Rural Land-Use Patterns (Von Thünen)', weight: 'Weight: 12%–17%' },
      { unitNumber: 6, title: 'Cities and Urban Land-Use Patterns', weight: 'Weight: 12%–17%' },
      { unitNumber: 7, title: 'Industrial and Economic Development Patterns', weight: 'Weight: 12%–17%' },
    ],
  },
  {
    id: 'ap-psychology',
    code: 'PSY',
    name: 'AP Psychology',
    category: 'Humanities & Social Sciences',
    badgeColor: 'bg-[#db2777]',
    units: [
      { unitNumber: 1, title: 'Biological Bases of Behavior & Brain Structures', weight: 'Weight: 15%–25%' },
      { unitNumber: 2, title: 'Cognition, Memory, Intelligence & Problem Solving', weight: 'Weight: 15%–25%' },
      { unitNumber: 3, title: 'Development and Learning Across the Lifespan', weight: 'Weight: 15%–25%' },
      { unitNumber: 4, title: 'Social Psychology and Personality', weight: 'Weight: 15%–20%' },
      { unitNumber: 5, title: 'Mental and Physical Health (Disorders & Therapies)', weight: 'Weight: 15%–25%' },
    ],
  },
  {
    id: 'ap-us-history',
    code: 'USH',
    name: 'AP U.S. History',
    category: 'Humanities & Social Sciences',
    badgeColor: 'bg-[#dc2626]',
    units: [
      { unitNumber: 1, title: 'Period 1: 1491–1607 (Pre-Columbian & First Contact)', weight: 'Weight: 4%–6%' },
      { unitNumber: 2, title: 'Period 2: 1607–1754 (Colonial America)', weight: 'Weight: 6%–8%' },
      { unitNumber: 3, title: 'Period 3: 1754–1800 (Revolution & Early Republic)', weight: 'Weight: 10%–17%' },
      { unitNumber: 4, title: 'Period 4: 1800–1848 (Jacksonian Democracy & Expansion)', weight: 'Weight: 10%–17%' },
      { unitNumber: 5, title: 'Period 5: 1844–1877 (Civil War & Reconstruction)', weight: 'Weight: 10%–17%' },
      { unitNumber: 6, title: 'Period 6: 1865–1898 (Gilded Age & Industrialization)', weight: 'Weight: 10%–17%' },
      { unitNumber: 7, title: 'Period 7: 1890–1945 (Imperialism, Great Depression, WWII)', weight: 'Weight: 10%–17%' },
      { unitNumber: 8, title: 'Period 8: 1945–1980 (Cold War & Civil Rights)', weight: 'Weight: 10%–17%' },
      { unitNumber: 9, title: 'Period 9: 1980–Present (Reagan, Tech & Modern Era)', weight: 'Weight: 4%–6%' },
    ],
  },
  {
    id: 'ap-world-history',
    code: 'WHAP',
    name: 'AP World History: Modern',
    category: 'Humanities & Social Sciences',
    badgeColor: 'bg-[#d97706]',
    units: [
      { unitNumber: 1, title: 'Unit 1: The Global Tapestry (c. 1200–c. 1450)', weight: 'Weight: 8%–10%' },
      { unitNumber: 2, title: 'Unit 2: Networks of Exchange (Silk Road, Indian Ocean)', weight: 'Weight: 8%–10%' },
      { unitNumber: 3, title: 'Unit 3: Land-Based Empires (c. 1450–c. 1750)', weight: 'Weight: 12%–15%' },
      { unitNumber: 4, title: 'Unit 4: Transoceanic Interconnections (Maritime Empires)', weight: 'Weight: 12%–15%' },
      { unitNumber: 5, title: 'Unit 5: Revolutions (Enlightenment & Industrial)', weight: 'Weight: 12%–15%' },
      { unitNumber: 6, title: 'Unit 6: Consequences of Industrialization (Imperialism)', weight: 'Weight: 12%–15%' },
      { unitNumber: 7, title: 'Unit 7: Global Conflict (WWI, Interwar, WWII)', weight: 'Weight: 8%–10%' },
      { unitNumber: 8, title: 'Unit 8: Cold War and Decolonization', weight: 'Weight: 8%–10%' },
      { unitNumber: 9, title: 'Unit 9: Globalization (c. 1900–Present)', weight: 'Weight: 8%–10%' },
    ],
  },
  {
    id: 'ap-microeconomics',
    code: 'MICRO',
    name: 'AP Microeconomics',
    category: 'Humanities & Social Sciences',
    badgeColor: 'bg-[#10b981]',
    units: [
      { unitNumber: 1, title: 'Basic Economic Concepts (PPC, Trade, Scarcity)', weight: 'Weight: 12%–15%' },
      { unitNumber: 2, title: 'Supply and Demand, Elasticity & Equilibrium', weight: 'Weight: 20%–25%' },
      { unitNumber: 3, title: 'Production, Cost, and Perfect Competition', weight: 'Weight: 22%–28%' },
      { unitNumber: 4, title: 'Imperfect Competition (Monopoly, Oligopoly)', weight: 'Weight: 15%–22%' },
      { unitNumber: 5, title: 'Factor Markets (Labor Supply & MRP)', weight: 'Weight: 10%–18%' },
      { unitNumber: 6, title: 'Market Failure and Role of Government', weight: 'Weight: 12%–18%' },
    ],
  },
  {
    id: 'ap-macroeconomics',
    code: 'MACRO',
    name: 'AP Macroeconomics',
    category: 'Humanities & Social Sciences',
    badgeColor: 'bg-[#0ea5e9]',
    units: [
      { unitNumber: 1, title: 'Basic Economic Concepts (Scarcity & Opportunity Cost)', weight: 'Weight: 5%–10%' },
      { unitNumber: 2, title: 'Economic Indicators & Circular Flow (GDP, Inflation)', weight: 'Weight: 12%–17%' },
      { unitNumber: 3, title: 'AD-AS Model and Fiscal Policy', weight: 'Weight: 17%–27%' },
      { unitNumber: 4, title: 'Financial Sector, Money Supply & Banking', weight: 'Weight: 18%–23%' },
      { unitNumber: 5, title: 'Long-Run Stabilization & Phillips Curve', weight: 'Weight: 20%–30%' },
      { unitNumber: 6, title: 'Open Economy: Capital Flows and FOREX', weight: 'Weight: 10%–13%' },
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
      { unitNumber: 1, title: 'Primitive Types (Variables & Arithmetic)', weight: 'Weight: 2.5%–5%' },
      { unitNumber: 2, title: 'Using Objects (String, Math, Classes)', weight: 'Weight: 5%–7.5%' },
      { unitNumber: 3, title: 'Boolean Expressions and if Statements', weight: 'Weight: 15%–17.5%' },
      { unitNumber: 4, title: 'Iteration (while & for Loops)', weight: 'Weight: 17.5%–22.5%' },
      { unitNumber: 5, title: 'Writing Classes (Constructors, Encapsulation)', weight: 'Weight: 5%–7.5%' },
      { unitNumber: 6, title: 'Array (1D Traversal & Algorithms)', weight: 'Weight: 10%–15%' },
      { unitNumber: 7, title: 'ArrayList (Dynamic Collections & Searches)', weight: 'Weight: 2.5%–7.5%' },
      { unitNumber: 8, title: '2D Array (Matrices & Grid Traversals)', weight: 'Weight: 7.5%–10%' },
      { unitNumber: 9, title: 'Inheritance & Polymorphism', weight: 'Weight: 5%–10%' },
      { unitNumber: 10, title: 'Recursion & Recursive Search/Sort', weight: 'Weight: 5%–7.5%' },
    ],
  },
  {
    id: 'ap-computer-science-principles',
    code: 'CSP',
    name: 'AP Computer Science Principles',
    category: 'English & Tech',
    badgeColor: 'bg-[#0891b2]',
    units: [
      { unitNumber: 0, title: 'Full Course Mixed Master Practice Set (Big Ideas 1–5 Comprehensive 250Q)', weight: 'Weight: 100%' },
      { unitNumber: 1, title: 'Creative Development & Collaboration', weight: 'Weight: 10%–13%' },
      { unitNumber: 2, title: 'Data Representation & Compression', weight: 'Weight: 17%–22%' },
      { unitNumber: 3, title: 'Algorithms and Programming (Pseudocode)', weight: 'Weight: 30%–35%' },
      { unitNumber: 4, title: 'Computer Systems and Networks (Internet & IP)', weight: 'Weight: 11%–15%' },
      { unitNumber: 5, title: 'Impact of Computing & Cybersecurity', weight: 'Weight: 21%–26%' },
    ],
  },
  {
    id: 'ap-english-lang',
    code: 'LANG',
    name: 'AP English Language & Comp',
    category: 'English & Tech',
    badgeColor: 'bg-[#0284c7]',
    units: [
      { unitNumber: 1, title: 'Rhetorical Situation: Claims & Exigence', weight: 'Weight: 11%–14%' },
      { unitNumber: 2, title: 'Appeals, Audience & Line of Reasoning', weight: 'Weight: 11%–14%' },
      { unitNumber: 3, title: 'Synthesis: Evaluating Multiple Sources', weight: 'Weight: 33% FRQ' },
      { unitNumber: 4, title: 'Argument Structure & Counterclaims', weight: 'Weight: 33% FRQ' },
      { unitNumber: 5, title: 'Style, Diction, Tone & Syntax Mastery', weight: 'Weight: 13%–16%' },
      { unitNumber: 6, title: 'Rhetorical Analysis Essay Mastery', weight: 'Weight: 33% FRQ' },
    ],
  },
];
