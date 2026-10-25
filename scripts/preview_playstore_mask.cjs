const fs = require('fs');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const fileA = 'C:/Users/VICTUS/Ai/AP-Exam/store_assets/icon_from_logo_zoom_125.png';
const fileB = 'C:/Users/VICTUS/Ai/AP-Exam/public/logo.png';

async function preview() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const bA = fs.readFileSync(fileA).toString('base64');
  const bB = fs.readFileSync(fileB).toString('base64');

  await page.setViewport({ width: 1000, height: 550 });
  await page.setContent(`<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #0f172a; color: #f8fafc; font-family: 'Segoe UI', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
  h1 { font-size: 22px; margin-bottom: 25px; color: #38bdf8; }
  .row { display: flex; gap: 50px; }
  .card { text-align: center; }
  .icon-preview {
    width: 180px;
    height: 180px;
    border-radius: 22%; /* Google Play squircle mask */
    box-shadow: 0 12px 35px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1);
    overflow: hidden;
    margin: 0 auto 12px auto;
  }
  .icon-preview img { width: 100%; height: 100%; display: block; }
  .label { font-size: 15px; font-weight: 600; color: #e2e8f0; }
  .sub { font-size: 12px; color: #94a3b8; margin-top: 4px; }
</style>
</head>
<body>
  <h1>Google Play Store Simulation (With Auto-Squircle Mask)</h1>
  <div class="row">
    <div class="card">
      <div class="icon-preview">
        <img src="data:image/png;base64,${bA}" />
      </div>
      <div class="label">Zoomed 1.25x (Recommended)</div>
      <div class="sub">Bold face, full tassel, perfect 90° dark corners</div>
    </div>
    <div class="card">
      <div class="icon-preview">
        <img src="data:image/png;base64,${bB}" />
      </div>
      <div class="label">Original 1.0x (Standard)</div>
      <div class="sub">Full body penguin with blue background</div>
    </div>
  </div>
</body>
</html>`);

  await page.screenshot({ path: 'C:/Users/VICTUS/Ai/AP-Exam/store_assets/playstore_icon_preview.png' });
  console.log('Saved playstore_icon_preview.png');
  await browser.close();
}
preview().catch(console.error);
