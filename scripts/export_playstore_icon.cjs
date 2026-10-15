const fs = require('fs');
const path = require('path');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const srcFile = 'C:/Users/VICTUS/.gemini/antigravity-ide/brain/4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1/penguin_best_bg_1791960127623.jpg';

async function exportPlayStore512() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();
  const imgBuffer = fs.readFileSync(srcFile);
  const dataUri = 'data:image/jpeg;base64,' + imgBuffer.toString('base64');

  const html = `<!DOCTYPE html>
  <html>
  <head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body, html { width: 512px; height: 512px; overflow: hidden; background: #0b1120; }
    img { width: 512px; height: 512px; display: block; object-fit: cover; }
  </style>
  </head>
  <body>
    <img src="${dataUri}" />
  </body>
  </html>`;

  await page.setViewport({ width: 512, height: 512, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'load' });

  const outPlayStorePng = 'C:/Users/VICTUS/.gemini/antigravity-ide/scratch/playstore_icon_512x512.png';
  const outPublicLogo = path.join(__dirname, '..', 'public', 'logo.png');

  await page.screenshot({ path: outPlayStorePng });
  console.log('Saved Play Store 512x512 to:', outPlayStorePng);
  await browser.close();
}

exportPlayStore512().catch(err => {
  console.error(err);
  process.exit(1);
});
