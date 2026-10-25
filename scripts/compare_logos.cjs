const fs = require('fs');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const fileA = 'C:/Users/VICTUS/Ai/AP-Exam/public/logo.png';
const fileB = 'C:/Users/VICTUS/.gemini/antigravity-ide/brain/1522d5f4-28c5-4e9e-b34c-68f97e0db13e/.user_uploaded/media_1792932998297.jpg';

async function compare() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const bA = fs.readFileSync(fileA).toString('base64');
  const bB = fs.readFileSync(fileB).toString('base64');

  await page.setViewport({ width: 1100, height: 600 });
  await page.setContent(`<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #1e1e2e; color: #fff; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; gap: 40px; margin: 0; }
  .box { text-align: center; }
  img { width: 400px; height: 400px; border-radius: 8px; border: 2px solid #444; background: #fff; }
  h2 { margin-bottom: 10px; font-size: 18px; }
</style>
</head>
<body>
  <div class="box">
    <h2>Option A: Existing public/logo.png (Full Square Navy)</h2>
    <img src="data:image/png;base64,${bA}" />
  </div>
  <div class="box">
    <h2>Option B: User's New Close-up (With Corner Issue)</h2>
    <img src="data:image/jpeg;base64,${bB}" />
  </div>
</body>
</html>`);

  await page.screenshot({ path: 'C:/Users/VICTUS/Ai/AP-Exam/store_assets/logo_comparison.png' });
  console.log('Saved logo_comparison.png');
  await browser.close();
}
compare().catch(console.error);
