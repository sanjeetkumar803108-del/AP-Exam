const fs = require('fs');
const path = require('path');

const scratchDir = 'C:\\Users\\VICTUS\\.gemini\\antigravity-ide\\scratch';
const publicDir = path.join(__dirname, '..', 'public', 'sample-papers');
const androidDir = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'assets', 'public', 'sample-papers');

// The 10 capital-letter folders explicitly shown in the user's screenshot
const items = [
  {
    folder: 'APES_All_Units_Mastery_250Q_PDF',
    pdfFile: 'AP_Environmental_Science_All_Units_Mastery_250Q.pdf',
    unit: 0,
    title: 'Full Course Mixed Master Practice Set (Units 1–9 Comprehensive 250Q)',
    id: 'paper_apes_all_units_mastery_250q',
    pageCount: 317,
    totalQuestions: 250,
    mcqCount: 200,
    frqCount: 50,
    marks: 450,
    duration: 360,
    desc: '317-Page Complete AP Environmental Science Master Examination Set (250 Questions: 200 MCQs + 50 Multi-Part Free Response Questions) covering all 9 Units with Priority Star Badges, Comprehensive Step-by-Step Solutions, Distractor Explanations, and Official 10-Point Rubrics.'
  },
  {
    folder: 'APES_Unit_1_Practice_PDF',
    pdfFile: 'AP_Environmental_Science_Unit_1_Mastery_100Q.pdf',
    unit: 1,
    title: 'Unit 1: The Living World: Ecosystems (Priority-Starred 100-Question Master Set)',
    id: 'paper_apes_unit_1_master_starred',
    pageCount: 116,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    marks: 190,
    duration: 195,
    desc: '116-Page Complete AP Environmental Science Master Examination Set (100 Questions: 90 MCQs + 10 Free Response Questions) with Priority Star Badges, Step-by-Step Solutions, Distractor Analysis, and 10-Point Rubrics for Unit 1: Ecosystems, Biogeochemical Cycles, and Primary Productivity.'
  },
  {
    folder: 'APES_Unit_2_Practice_PDF',
    pdfFile: 'AP_Environmental_Science_Unit_2_Mastery_100Q.pdf',
    unit: 2,
    title: 'Unit 2: The Living World: Biodiversity (Priority-Starred 100-Question Master Set)',
    id: 'paper_apes_unit_2_master_starred',
    pageCount: 117,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    marks: 190,
    duration: 195,
    desc: '117-Page Complete AP Environmental Science Master Examination Set (100 Questions: 90 MCQs + 10 Free Response Questions) with Priority Star Badges, Step-by-Step Solutions, Distractor Analysis, and 10-Point Rubrics for Unit 2: Ecosystem Services, Island Biogeography, Ecological Tolerance, and Succession.'
  },
  {
    folder: 'APES_Unit_3_Practice_PDF',
    pdfFile: 'AP_Environmental_Science_Unit_3_Mastery_100Q.pdf',
    unit: 3,
    title: 'Unit 3: Populations & Demographics (Priority-Starred 100-Question Master Set)',
    id: 'paper_apes_unit_3_master_starred',
    pageCount: 118,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    marks: 190,
    duration: 195,
    desc: '118-Page Complete AP Environmental Science Master Examination Set (100 Questions: 90 MCQs + 10 Free Response Questions) with Priority Star Badges, Step-by-Step Solutions, Distractor Analysis, and 10-Point Rubrics for Unit 3: Generalist/Specialist, Survivorship Curves, Carrying Capacity, and Demographic Transition.'
  },
  {
    folder: 'APES_Unit_4_Practice_PDF',
    pdfFile: 'AP_Environmental_Science_Unit_4_Mastery_100Q.pdf',
    unit: 4,
    title: 'Unit 4: Earth Systems & Resources (Priority-Starred 100-Question Master Set)',
    id: 'paper_apes_unit_4_master_starred',
    pageCount: 125,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    marks: 190,
    duration: 195,
    desc: '125-Page Complete AP Environmental Science Master Examination Set (100 Questions: 90 MCQs + 10 Free Response Questions) with Priority Star Badges, Step-by-Step Solutions, Distractor Analysis, and 10-Point Rubrics for Unit 4: Tectonics, Soil Profiles, Atmospheric Cells, Watersheds, and El Niño.'
  },
  {
    folder: 'APES_Unit_5_Practice_PDF',
    pdfFile: 'AP_Environmental_Science_Unit_5_Mastery_100Q.pdf',
    unit: 5,
    title: 'Unit 5: Land & Water Use Management (Priority-Starred 100-Question Master Set)',
    id: 'paper_apes_unit_5_master_starred',
    pageCount: 125,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    marks: 190,
    duration: 195,
    desc: '125-Page Complete AP Environmental Science Master Examination Set (100 Questions: 90 MCQs + 10 Free Response Questions) with Priority Star Badges, Step-by-Step Solutions, Distractor Analysis, and 10-Point Rubrics for Unit 5: Tragedy of the Commons, Irrigation, IPM, CAFOs, and Sustainable Agriculture.'
  },
  {
    folder: 'APES_Unit_6_Practice_PDF',
    pdfFile: 'AP_Environmental_Science_Unit_6_Mastery_100Q.pdf',
    unit: 6,
    title: 'Unit 6: Energy Resources & Consumption (Priority-Starred 100-Question Master Set)',
    id: 'paper_apes_unit_6_master_starred',
    pageCount: 126,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    marks: 190,
    duration: 195,
    desc: '126-Page Complete AP Environmental Science Master Examination Set (100 Questions: 90 MCQs + 10 Free Response Questions) with Priority Star Badges, Step-by-Step Solutions, Distractor Analysis, and 10-Point Rubrics for Unit 6: Fossil Fuels, Nuclear Fission, Solar, Wind, Hydroelectric, and Energy Calculations.'
  },
  {
    folder: 'APES_Unit_7_Practice_PDF',
    pdfFile: 'AP_Environmental_Science_Unit_7_Mastery_100Q.pdf',
    unit: 7,
    title: 'Unit 7: Atmospheric Pollution (Priority-Starred 100-Question Master Set)',
    id: 'paper_apes_unit_7_master_starred',
    pageCount: 111,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    marks: 190,
    duration: 195,
    desc: '111-Page Complete AP Environmental Science Master Examination Set (100 Questions: 90 MCQs + 10 Free Response Questions) with Priority Star Badges, Step-by-Step Solutions, Distractor Analysis, and 10-Point Rubrics for Unit 7: Criteria Pollutants, Photochemical Smog, Inversions, Indoor Air, and Acid Rain.'
  },
  {
    folder: 'APES_Unit_8_Practice_PDF',
    pdfFile: 'AP_Environmental_Science_Unit_8_Mastery_100Q.pdf',
    unit: 8,
    title: 'Unit 8: Aquatic & Terrestrial Pollution (Priority-Starred 100-Question Master Set)',
    id: 'paper_apes_unit_8_master_starred',
    pageCount: 116,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    marks: 190,
    duration: 195,
    desc: '116-Page Complete AP Environmental Science Master Examination Set (100 Questions: 90 MCQs + 10 Free Response Questions) with Priority Star Badges, Step-by-Step Solutions, Distractor Analysis, and 10-Point Rubrics for Unit 8: Point/Nonpoint Sources, Endocrine Disruptors, Eutrophication, POPs, Landfills, and LD50.'
  },
  {
    folder: 'APES_Unit_9_Practice_PDF',
    pdfFile: 'AP_Environmental_Science_Unit_9_Mastery_100Q.pdf',
    unit: 9,
    title: 'Unit 9: Global Change & Climate Dynamics (Priority-Starred 100-Question Master Set)',
    id: 'paper_apes_unit_9_master_starred',
    pageCount: 111,
    totalQuestions: 100,
    mcqCount: 90,
    frqCount: 10,
    marks: 190,
    duration: 195,
    desc: '111-Page Complete AP Environmental Science Master Examination Set (100 Questions: 90 MCQs + 10 Free Response Questions) with Priority Star Badges, Step-by-Step Solutions, Distractor Analysis, and 10-Point Rubrics for Unit 9: Ozone Depletion, Greenhouse Effect, Ocean Acidification, Invasive Species, and Climate Mitigation.'
  }
];

// Ensure target directories exist
fs.mkdirSync(publicDir, { recursive: true });
fs.mkdirSync(androidDir, { recursive: true });

console.log('--- STEP 1: COPYING PDFS FROM CAPITAL FOLDERS ---');
items.forEach(it => {
  const src = path.join(scratchDir, it.folder, it.pdfFile);
  if (!fs.existsSync(src)) {
    console.error('ERROR: Source missing:', src);
    process.exit(1);
  }
  const stat = fs.statSync(src);
  it.fileSizeBytes = stat.size;
  it.fileSize = (stat.size / (1024 * 1024)).toFixed(2) + ' MB';

  const pubDst = path.join(publicDir, it.pdfFile);
  fs.copyFileSync(src, pubDst);

  const androidDst = path.join(androidDir, it.pdfFile);
  fs.copyFileSync(src, androidDst);

  console.log(`[Copied] ${it.folder} -> ${it.pdfFile} (${it.fileSize})`);
});

console.log('\n--- STEP 2: UPDATING defaultSamplePapers.json & sample_papers_vault.json ---');
const defaultPapersPath = path.join(__dirname, '..', 'src', 'data', 'defaultSamplePapers.json');
const vaultPapersPath = path.join(__dirname, '..', 'data', 'sample_papers_vault.json');

const defaultPapers = JSON.parse(fs.readFileSync(defaultPapersPath, 'utf8'));
const vaultPapers = JSON.parse(fs.readFileSync(vaultPapersPath, 'utf8'));

// Build paper objects
const now = 1791950000000;
const newPaperEntries = items.map(it => ({
  id: it.id,
  subjectId: 'ap-environmental-science',
  subjectName: 'AP Environmental Science',
  title: it.title,
  year: '2026',
  pdfUrl: `/sample-papers/${it.pdfFile}`,
  fileName: it.pdfFile,
  fileSize: it.fileSize,
  uploadedAt: now,
  description: it.desc,
  totalMarks: it.marks,
  durationMinutes: it.duration
}));

// Function to merge papers without duplicates
function mergePapers(existingList, toAdd) {
  const map = new Map();
  // Keep non-apes papers and any existing papers
  existingList.forEach(p => map.set(p.id, p));
  // Add/overwrite with complete updated APES papers
  toAdd.forEach(p => map.set(p.id, p));
  return Array.from(map.values());
}

const updatedDefault = mergePapers(defaultPapers, newPaperEntries);
const updatedVault = mergePapers(vaultPapers, newPaperEntries);

fs.writeFileSync(defaultPapersPath, JSON.stringify(updatedDefault, null, 2), 'utf8');
fs.writeFileSync(vaultPapersPath, JSON.stringify(updatedVault, null, 2), 'utf8');

console.log(`defaultSamplePapers.json: Total papers now = ${updatedDefault.length}`);
console.log(`sample_papers_vault.json: Total papers now = ${updatedVault.length}`);
console.log(`APES papers registered: ${updatedDefault.filter(p => p.subjectId === 'ap-environmental-science').length}`);
