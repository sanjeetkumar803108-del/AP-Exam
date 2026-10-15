const fs = require('fs');
const path = require('path');

const bioPapers = [
  {
    id: "paper_bio_full_curriculum_master_starred",
    subjectId: "ap-biology",
    subjectName: "AP Biology",
    title: "Full Curriculum Mixed Master Examination (Units 1–8 Complete Review)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Biology_Full_Curriculum_Master_Exam_Set.pdf",
    fileName: "AP_Biology_Full_Curriculum_Master_Exam_Set.pdf",
    fileSize: "14.40 MB",
    uploadedAt: 1791835000000,
    description: "276-Page Comprehensive Full Curriculum Master Examination Set (250 Questions: Q1–200 MCQs + Q201–250 FRQs) covering all 8 units of AP Biology with priority star ratings, vector biological diagrams, diagnostic answer key matrix, worked solutions, and official AP scoring rubrics.",
    totalMarks: 650,
    durationMinutes: 360
  },
  {
    id: "paper_bio_unit_1_master_starred",
    subjectId: "ap-biology",
    subjectName: "AP Biology",
    title: "Unit 1: Chemistry of Life (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Biology_Unit1_Master_Exam_Set.pdf",
    fileName: "AP_Biology_Unit1_Master_Exam_Set.pdf",
    fileSize: "6.49 MB",
    uploadedAt: 1791835100000,
    description: "101-Page Complete AP Biology Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) with Priority Stars, Step-by-Step Solutions, and 10-Point Official Rubrics for Unit 1: Chemistry of Life, Water Properties, and Biological Macromolecules.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_bio_unit_2_master_starred",
    subjectId: "ap-biology",
    subjectName: "AP Biology",
    title: "Unit 2: Cell Structure & Function (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Biology_Unit2_Master_Exam_Set.pdf",
    fileName: "AP_Biology_Unit2_Master_Exam_Set.pdf",
    fileSize: "6.87 MB",
    uploadedAt: 1791835200000,
    description: "108-Page Complete AP Biology Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 2: Cell Size & Surface Area-to-Volume Ratios, Plasma Membrane Permeability, Membrane Transport, Tonicity, and Osmoregulation.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_bio_unit_3_master_starred",
    subjectId: "ap-biology",
    subjectName: "AP Biology",
    title: "Unit 3: Cellular Energetics (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Biology_Unit3_Master_Exam_Set.pdf",
    fileName: "AP_Biology_Unit3_Master_Exam_Set.pdf",
    fileSize: "7.37 MB",
    uploadedAt: 1791835300000,
    description: "116-Page Complete AP Biology Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 3: Enzyme Catalysis, ATP Coupling, Photosynthesis (Light & Dark Reactions), and Cellular Respiration.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_bio_unit_4_master_starred",
    subjectId: "ap-biology",
    subjectName: "AP Biology",
    title: "Unit 4: Cell Communication & Cell Cycle (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Biology_Unit4_Master_Exam_Set.pdf",
    fileName: "AP_Biology_Unit4_Master_Exam_Set.pdf",
    fileSize: "6.88 MB",
    uploadedAt: 1791835400000,
    description: "111-Page Complete AP Biology Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 4: Signal Transduction Pathways, Feedback Mechanisms, Mitosis, and Cell Cycle Checkpoints.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_bio_unit_5_master_starred",
    subjectId: "ap-biology",
    subjectName: "AP Biology",
    title: "Unit 5: Heredity (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Biology_Unit5_Master_Exam_Set.pdf",
    fileName: "AP_Biology_Unit5_Master_Exam_Set.pdf",
    fileSize: "6.35 MB",
    uploadedAt: 1791835500000,
    description: "102-Page Complete AP Biology Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 5: Meiosis, Mendelian Genetics, Non-Mendelian Inheritance, Pedigrees, and Chi-Square Analysis.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_bio_unit_6_master_starred",
    subjectId: "ap-biology",
    subjectName: "AP Biology",
    title: "Unit 6: Gene Expression & Regulation (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Biology_Unit6_Master_Exam_Set.pdf",
    fileName: "AP_Biology_Unit6_Master_Exam_Set.pdf",
    fileSize: "7.07 MB",
    uploadedAt: 1791835600000,
    description: "113-Page Complete AP Biology Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 6: DNA Replication, Transcription, Translation, Operons, Epigenetics, and Biotechnology Tools.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_bio_unit_7_master_starred",
    subjectId: "ap-biology",
    subjectName: "AP Biology",
    title: "Unit 7: Natural Selection & Evolution (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Biology_Unit7_Master_Exam_Set.pdf",
    fileName: "AP_Biology_Unit7_Master_Exam_Set.pdf",
    fileSize: "7.36 MB",
    uploadedAt: 1791835700000,
    description: "121-Page Complete AP Biology Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 7: Hardy-Weinberg Equilibrium, Cladograms, Evidence of Evolution, and Speciation Mechanisms.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_bio_unit_8_master_starred",
    subjectId: "ap-biology",
    subjectName: "AP Biology",
    title: "Unit 8: Ecology & Community Interactions (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Biology_Unit8_Master_Exam_Set.pdf",
    fileName: "AP_Biology_Unit8_Master_Exam_Set.pdf",
    fileSize: "7.02 MB",
    uploadedAt: 1791835800000,
    description: "130-Page Complete AP Biology Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 8: Energy Flow in Ecosystems, Population Dynamics, Trophic Cascades, and Ecosystem Disruptions.",
    totalMarks: 180,
    durationMinutes: 195
  }
];

const paths = [
  path.resolve('src/data/defaultSamplePapers.json'),
  path.resolve('data/sample_papers_vault.json')
];

for (const p of paths) {
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    const existingIds = new Set(data.map(item => item.id));

    let added = 0;
    for (const paper of bioPapers) {
      if (!existingIds.has(paper.id)) {
        data.push(paper);
        added++;
      }
    }
    fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${p}: added ${added} papers (Total: ${data.length})`);
  }
}
