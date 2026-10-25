const fs = require('fs');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const srcFile = 'C:/Users/VICTUS/Ai/AP-Exam/public/logo.png';

async function generateZoomedFromPublicLogo() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const imgBuffer = fs.readFileSync(srcFile);
  const dataUri = 'data:image/png;base64,' + imgBuffer.toString('base64');

  await page.setContent(`<!DOCTYPE html><html><body><canvas id="c"></canvas></body></html>`);

  // Let's test two zooms: 1.25x and 1.35x
  const tests = [
    { name: 'store_assets/icon_from_logo_zoom_125.png', zoom: 1.25, offsetYRatio: -0.02 },
    { name: 'store_assets/icon_from_logo_zoom_135.png', zoom: 1.35, offsetYRatio: -0.04 }
  ];

  for (const t of tests) {
    await page.evaluate(async (uri, zoom, offsetYRatio) => {
      const img = new Image();
      img.src = uri;
      await new Promise(r => img.onload = r);

      const size = 512;
      const c = document.getElementById('c');
      c.width = size;
      c.height = size;
      const ctx = c.getContext('2d');

      // Draw background color first just in case
      ctx.fillStyle = '#0b1122';
      ctx.fillRect(0, 0, size, size);

      // Centered zoom with slight vertical adjustment
      const drawSize = size * zoom;
      const offsetX = (size - drawSize) / 2;
      const offsetY = (size - drawSize) / 2 + (size * offsetYRatio);

      ctx.drawImage(img, offsetX, offsetY, drawSize, drawSize);
    }, dataUri, t.zoom, t.offsetYRatio);

    const canvasHandle = await page.$('#c');
    await canvasHandle.screenshot({ path: 'C:/Users/VICTUS/Ai/AP-Exam/' + t.name });
    console.log('Saved:', t.name);
  }

  await browser.close();
}

generateZoomedFromPublicLogo().catch(console.error);
