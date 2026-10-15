const fs = require('fs');
const path = require('path');

const srcPdf = 'C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_csp_full_course_250q/AP_CSP_All_Units_Mastery_250Q.pdf';
const srcHtml = 'C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_csp_full_course_250q/AP_CSP_All_Units_Mastery_250Q.html';

const publicDir = path.resolve('public/sample-papers');
const androidDir = path.resolve('android/app/src/main/assets/public/sample-papers');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(androidDir)) fs.mkdirSync(androidDir, { recursive: true });

const pdfDestNames = [
  'AP_CSP_All_Units_Mastery_250Q.pdf',
  'AP_CSP_Full_Course_Master_Set.pdf'
];

const htmlDestNames = [
  'AP_CSP_All_Units_Mastery_250Q.html',
  'AP_CSP_Full_Course_Master.html'
];

for (const destName of pdfDestNames) {
  fs.copyFileSync(srcPdf, path.join(publicDir, destName));
  fs.copyFileSync(srcPdf, path.join(androidDir, destName));
  console.log(`Copied PDF to: ${destName}`);
}

for (const destName of htmlDestNames) {
  fs.copyFileSync(srcHtml, path.join(publicDir, destName));
  fs.copyFileSync(srcHtml, path.join(androidDir, destName));
  console.log(`Copied HTML to: ${destName}`);
}

console.log('Successfully deployed AP CSP Full Course 250Q files to public and Android assets!');
