const fs = require('fs');
const path = require('path');

const publicDir = path.resolve('public/sample-papers');
const androidDir = path.resolve('android/app/src/main/assets/public/sample-papers');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(androidDir)) {
  fs.mkdirSync(androidDir, { recursive: true });
}

const copyPlan = [];

for (let i = 1; i <= 8; i++) {
  const dir = `C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_unit${i}_exam`;
  const pdfSrc = path.join(dir, `AP_Biology_Unit${i}_Master_Exam_Set.pdf`);
  const htmlSrc = path.join(dir, 'exam_document.html');

  copyPlan.push({
    src: pdfSrc,
    destNames: [
      `AP_Biology_Unit${i}_Master_Exam_Set.pdf`,
      `AP_Biology_Unit${i}_Master_Set.pdf`
    ]
  });

  copyPlan.push({
    src: htmlSrc,
    destNames: [
      `AP_Biology_Unit${i}_Master.html`,
      `AP_Biology_Unit${i}_Master_Exam.html`
    ]
  });
}

// Full curriculum
const fullDir = `C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam`;
const fullPdfSrc = path.join(fullDir, 'AP_Biology_Full_Curriculum_Master_Exam_Set.pdf');
const fullHtmlSrc = path.join(fullDir, 'exam_document.html');

copyPlan.push({
  src: fullPdfSrc,
  destNames: [
    'AP_Biology_Full_Curriculum_Master_Exam_Set.pdf',
    'AP_Biology_Full_Curriculum_Master_Set.pdf',
    'AP_Biology_All_Units_Mastery_250Q.pdf'
  ]
});

copyPlan.push({
  src: fullHtmlSrc,
  destNames: [
    'AP_Biology_Full_Curriculum_Master.html',
    'AP_Biology_All_Units_Mastery_250Q.html'
  ]
});

let copiedCount = 0;

for (const item of copyPlan) {
  if (!fs.existsSync(item.src)) {
    console.error(`Missing source file: ${item.src}`);
    continue;
  }
  const stat = fs.statSync(item.src);
  const sizeMb = (stat.size / (1024 * 1024)).toFixed(2);
  console.log(`Processing: ${path.basename(item.src)} (${sizeMb} MB)`);

  for (const destName of item.destNames) {
    const pubDest = path.join(publicDir, destName);
    fs.copyFileSync(item.src, pubDest);

    const androidDest = path.join(androidDir, destName);
    fs.copyFileSync(item.src, androidDest);

    copiedCount += 2;
  }
}

console.log(`\nSuccessfully deployed all AP Biology PDFs and HTMLs! Total files written: ${copiedCount}`);
