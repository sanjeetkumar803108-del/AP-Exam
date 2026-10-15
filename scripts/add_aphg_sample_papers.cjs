const fs = require('fs');
const path = require('path');

const aphgPapers = [
  {
    id: "paper_aphg_full_course_master_starred",
    subjectId: "ap-human-geography",
    subjectName: "AP Human Geography",
    title: "Full Course Mixed Master Examination (Units 1–7 Complete Review)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Human_Geography_Full_Course_Master_Set.pdf",
    fileName: "AP_Human_Geography_Full_Course_Master_Set.pdf",
    fileSize: "10.85 MB",
    uploadedAt: 1791837000000,
    description: "241-Page Comprehensive Full Course Master Examination Set (250 Questions: Q1–200 MCQs + Q201–250 FRQs) covering all 7 units of AP Human Geography with priority star ratings, regional maps, diagnostic answer keys, worked solutions, and official AP scoring rubrics.",
    totalMarks: 650,
    durationMinutes: 360
  },
  {
    id: "paper_aphg_unit_1_master_starred",
    subjectId: "ap-human-geography",
    subjectName: "AP Human Geography",
    title: "Unit 1: Thinking Geographically (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Human_Geography_Unit1_Master_Set.pdf",
    fileName: "AP_Human_Geography_Unit1_Master_Set.pdf",
    fileSize: "5.21 MB",
    uploadedAt: 1791837100000,
    description: "86-Page Complete APHG Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 1: Thinking Geographically, Map Projections, Geospatial Data, and Regional Concepts with complete rubrics.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_aphg_unit_2_master_starred",
    subjectId: "ap-human-geography",
    subjectName: "AP Human Geography",
    title: "Unit 2: Population & Migration Patterns (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Human_Geography_Unit2_Master_Set.pdf",
    fileName: "AP_Human_Geography_Unit2_Master_Set.pdf",
    fileSize: "5.51 MB",
    uploadedAt: 1791837200000,
    description: "86-Page Complete APHG Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 2: Demographic Transition Model (DTM), Population Pyramids, and Ravenstein’s Laws of Migration.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_aphg_unit_3_master_starred",
    subjectId: "ap-human-geography",
    subjectName: "AP Human Geography",
    title: "Unit 3: Cultural Patterns and Processes (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Human_Geography_Unit3_Master_Set.pdf",
    fileName: "AP_Human_Geography_Unit3_Master_Set.pdf",
    fileSize: "5.56 MB",
    uploadedAt: 1791837300000,
    description: "86-Page Complete APHG Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 3: Cultural Landscapes, Language Families, Universalizing vs. Ethnic Religions, and Diffusion.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_aphg_unit_4_master_starred",
    subjectId: "ap-human-geography",
    subjectName: "AP Human Geography",
    title: "Unit 4: Political Patterns and Processes (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Human_Geography_Unit4_Master_Set.pdf",
    fileName: "AP_Human_Geography_Unit4_Master_Set.pdf",
    fileSize: "5.71 MB",
    uploadedAt: 1791837400000,
    description: "86-Page Complete APHG Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 4: Political Boundaries, UNCLOS, Devolution, Gerrymandering, and Supranationalism.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_aphg_unit_5_master_starred",
    subjectId: "ap-human-geography",
    subjectName: "AP Human Geography",
    title: "Unit 5: Agriculture & Rural Land-Use Patterns (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Human_Geography_Unit5_Master_Set.pdf",
    fileName: "AP_Human_Geography_Unit5_Master_Set.pdf",
    fileSize: "5.06 MB",
    uploadedAt: 1791837500000,
    description: "86-Page Complete APHG Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 5: Agricultural Hearths, Green Revolution, Subsistence vs Commercial Agriculture, and Von Thünen Model.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_aphg_unit_6_master_starred",
    subjectId: "ap-human-geography",
    subjectName: "AP Human Geography",
    title: "Unit 6: Cities and Urban Land-Use Patterns (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Human_Geography_Unit6_Master_Set.pdf",
    fileName: "AP_Human_Geography_Unit6_Master_Set.pdf",
    fileSize: "4.98 MB",
    uploadedAt: 1791837600000,
    description: "86-Page Complete APHG Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 6: Urbanization, Megacities, Central Place Theory, Concentric/Sector Models, and Gentrification.",
    totalMarks: 180,
    durationMinutes: 195
  },
  {
    id: "paper_aphg_unit_7_master_starred",
    subjectId: "ap-human-geography",
    subjectName: "AP Human Geography",
    title: "Unit 7: Industrial and Economic Development (Priority-Starred 100-Question Master Set)",
    year: "2026",
    pdfUrl: "/sample-papers/AP_Human_Geography_Unit7_Master_Set.pdf",
    fileName: "AP_Human_Geography_Unit7_Master_Set.pdf",
    fileSize: "4.84 MB",
    uploadedAt: 1791837700000,
    description: "86-Page Complete APHG Master Examination Set (100 Questions: 90 MCQs + 10 FRQs) for Unit 7: Industrial Revolution, Weber’s Least Cost Theory, Rostow’s Growth Model, and Wallerstein’s World Systems Theory.",
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
    for (const paper of aphgPapers) {
      if (!existingIds.has(paper.id)) {
        data.push(paper);
        added++;
      }
    }
    fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${p}: added ${added} APHG papers (Total: ${data.length})`);
  }
}
