const fs = require('fs');
const path = require('path');

const cspFullPaper = {
  id: "paper_csp_full_course_master_starred",
  subjectId: "ap-computer-science-principles",
  subjectName: "AP Computer Science Principles",
  title: "Full Course Mixed Master Examination (250-Question Comprehensive Set)",
  year: "2026",
  pdfUrl: "/sample-papers/AP_CSP_All_Units_Mastery_250Q.pdf",
  fileName: "AP_CSP_All_Units_Mastery_250Q.pdf",
  fileSize: "12.26 MB",
  uploadedAt: 1791836000000,
  description: "269-Page Comprehensive Full Course Master Examination Set (250 Questions: Q1–220 MCQs + Q221–250 Create Performance Task Prompts) covering all 5 Big Ideas of AP CSP with priority star ratings, pseudocode diagrams, diagnostic answer key matrix, worked solutions, and official College Board scoring rubrics.",
  totalMarks: 650,
  durationMinutes: 360
};

const paths = [
  path.resolve('src/data/defaultSamplePapers.json'),
  path.resolve('data/sample_papers_vault.json')
];

for (const p of paths) {
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    const exists = data.some(item => item.id === cspFullPaper.id);
    if (!exists) {
      data.push(cspFullPaper);
      fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Added CSP Full Exam to ${p}. Total: ${data.length}`);
    } else {
      console.log(`CSP Full Exam already present in ${p}`);
    }
  }
}
