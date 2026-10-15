const fs = require('fs');
const path = require('path');

const units = [];

for (let i = 1; i <= 7; i++) {
  const dir = `C:/Users/VICTUS/.gemini/antigravity-ide/scratch/aphg_unit${i}_exam`;
  const pdfName = `APHG_Unit_${i}_Exam_Master_Set.pdf`;
  const pdfPath = path.join(dir, pdfName);
  const htmlPath = path.join(dir, 'exam_document.html');

  let title = '';
  let pages = 0;
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
  }

  units.push({
    unit: i,
    pdfName,
    pdfPath,
    htmlPath,
    title,
    pages,
    sizeMb
  });
}

const fullDir = `C:/Users/VICTUS/.gemini/antigravity-ide/scratch/aphg_full_course_exam`;
const fullPdf = `APHG_Full_Course_Exam_Master_Set.pdf`;
const fullPdfPath = path.join(fullDir, fullPdf);
const fullHtmlPath = path.join(fullDir, 'exam_document.html');

let fullTitle = '';
let fullPages = 0;
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
}

units.push({
  unit: 0,
  pdfName: fullPdf,
  pdfPath: fullPdfPath,
  htmlPath: fullHtmlPath,
  title: fullTitle,
  pages: fullPages,
  sizeMb: fullSizeMb
});

console.log(JSON.stringify(units, null, 2));
