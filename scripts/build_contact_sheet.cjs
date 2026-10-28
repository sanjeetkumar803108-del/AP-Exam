const fs = require('fs');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const dir = 'C:/Users/VICTUS/.gemini/antigravity-ide/brain/1522d5f4-28c5-4e9e-b34c-68f97e0db13e/.user_uploaded/';

const files = [
  'media_1792925756550.png',
  'media_1792926076009.jpg',
  'media_1792926411255.jpg',
  'media_1792926802430.png',
  'media_1792927225687.jpg',
  'media_1792927508491.png',
  'media_1792927708294.png',
  'media_1792928129337.png',
  'media_1792928408809.jpg'
];

async function main() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const cards = files.map((f, i) => {
    const buf = fs.readFileSync(dir + f);
    const mime = f.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const uri = `data:${mime};base64,` + buf.toString('base64');
    return `<div style="text-align:center; width: 220px;">
      <div style="font-size:12px; color:#fff; margin-bottom:4px;">#${i+1}: ${f}</div>
      <img src="${uri}" style="width:200px; height:auto; border-radius:8px; border:1px solid #444;" />
    </div>`;
  }).join('');

  await page.setViewport({ width: 1200, height: 900 });
  await page.setContent(`<!DOCTYPE html><html><body style="background:#111; color:#fff; display:flex; flex-wrap:wrap; gap:20px; padding:20px;">${cards}</body></html>`);
  
  await page.screenshot({ path: 'C:/Users/VICTUS/Ai/AP-Exam/store_assets/all_screenshots_montage.png' });
  console.log('Saved montage to store_assets/all_screenshots_montage.png');
  await browser.close();
}
main();
