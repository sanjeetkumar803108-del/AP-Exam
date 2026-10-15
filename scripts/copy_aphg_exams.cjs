const fs = require('fs');
const path = require('path');

const publicDir = path.resolve('public/sample-papers');
const androidDir = path.resolve('android/app/src/main/assets/public/sample-papers');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(androidDir)) fs.mkdirSync(androidDir, { recursive: true });

const copyPlan = [];

for (let i = 1; i <= 7; i++) {
  const dir = `C:/Users/VICTUS/.gemini/antigravity-ide/scratch/aphg_unit${i}_exam`;
  const pdfSrc = path.join(dir, `APHG_Unit_${i}_Exam_Master_Set.pdf`);
  const htmlSrc = path.join(dir, 'exam_document.html');

  copyPlan.push({
    src: pdfSrc,
    destNames: [
      `AP_Human_Geography_Unit${i}_Master_Set.pdf`,
      `APHG_Unit_${i}_Exam_Master_Set.pdf`
    ]
  });

  copyPlan.push({
    src: htmlSrc,
    destNames: [
      `AP_Human_Geography_Unit${i}_Master.html`,
      `APHG_Unit_${i}_Exam_Master.html`
    ]
  });
}

// Full Course Exam (250Q)
const fullDir = `C:/Users/VICTUS/.gemini/antigravity-ide/scratch/aphg_full_course_exam`;
const fullPdfSrc = path.join(fullDir, 'APHG_Full_Course_Exam_Master_Set.pdf');
const fullHtmlSrc = path.join(fullDir, 'exam_document.html');

copyPlan.push({
  src: fullPdfSrc,
  destNames: [
    'AP_Human_Geography_Full_Course_Master_Set.pdf',
    'APHG_Full_Course_Exam_Master_Set.pdf',
    'AP_Human_Geography_All_Units_Mastery_250Q.pdf'
  ]
});

copyPlan.push({
  src: fullHtmlSrc,
  destNames: [
    'AP_Human_Geography_Full_Course_Master.html',
    'APHG_Full_Course_Exam_Master.html',
    'AP_Human_Geography_All_Units_Mastery_250Q.html'
  ]
});

let total = 0;
for (const item of copyPlan) {
  if (!fs.existsSync(item.src)) {
    console.error(`Missing source: ${item.src}`);
    continue;
  }
  for (const name of item.destNames) {
    fs.copyFileSync(item.src, path.join(publicDir, name));
    fs.copyFileSync(item.src, path.join(androidDir, name));
    total += 2;
  }
}

console.log(`Successfully deployed all APHG exam files! Total files created: ${total}`);
