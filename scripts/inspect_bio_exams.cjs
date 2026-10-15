const fs = require('fs');
const path = require('path');

const units = [];

for (let i = 1; i <= 8; i++) {
  const dir = `C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_unit${i}_exam`;
  const pdfName = `AP_Biology_Unit${i}_Master_Exam_Set.pdf`;
  const pdfPath = path.join(dir, pdfName);
  const htmlPath = path.join(dir, 'exam_document.html');

  let title = '';
  let pages = 0;
  let mcqCount = 0;
  let frqCount = 0;
  let sizeMb = 0;

  if (fs.existsSync(pdfPath)) {
    sizeMb = (fs.statSync(pdfPath).size / (1024 * 1024)).toFixed(2);
  }

  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    title = titleMatch ? titleMatch[1] : '';

    const pageMatches = html.match(/class=["'][^"']*page[\s"']/gi);
    pages = pageMatches ? pageMatches.length : 0;

    const mcqMatches = html.match(/class=["'][^"']*mcq-question/gi);
    mcqCount = mcqMatches ? mcqMatches.length : 0;

    const frqMatches = html.match(/class=["'][^"']*frq-question/gi);
    frqCount = frqMatches ? frqMatches.length : 0;
  }

  units.push({
    unit: i,
    pdfName,
    pdfPath,
    htmlPath,
    title,
    pages,
    mcqCount,
    frqCount,
    sizeMb
  });
}

const fullDir = `C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam`;
const fullPdf = `AP_Biology_Full_Curriculum_Master_Exam_Set.pdf`;
const fullPdfPath = path.join(fullDir, fullPdf);
const fullHtmlPath = path.join(fullDir, 'exam_document.html');

let fullTitle = '';
let fullPages = 0;
let fullMcq = 0;
let fullFrq = 0;
let fullSizeMb = 0;

if (fs.existsSync(fullPdfPath)) {
  fullSizeMb = (fs.statSync(fullPdfPath).size / (1024 * 1024)).toFixed(2);
}

if (fs.existsSync(fullHtmlPath)) {
  const html = fs.readFileSync(fullHtmlPath, 'utf8');
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  fullTitle = titleMatch ? titleMatch[1] : '';

  const pageMatches = html.match(/class=["'][^"']*page[\s"']/gi);
  fullPages = pageMatches ? pageMatches.length : 0;

  const mcqMatches = html.match(/class=["'][^"']*mcq-question/gi);
  fullMcq = mcqMatches ? mcqMatches.length : 0;

  const frqMatches = html.match(/class=["'][^"']*frq-question/gi);
  fullFrq = frqMatches ? frqMatches.length : 0;
}

units.push({
  unit: 0,
  pdfName: fullPdf,
  pdfPath: fullPdfPath,
  htmlPath: fullHtmlPath,
  title: fullTitle,
  pages: fullPages,
  mcqCount: fullMcq,
  frqCount: fullFrq,
  sizeMb: fullSizeMb
});

console.log(JSON.stringify(units, null, 2));
