const fs = require('fs');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const srcFile = 'C:/Users/VICTUS/.gemini/antigravity-ide/brain/1522d5f4-28c5-4e9e-b34c-68f97e0db13e/.user_uploaded/media_1792932998297.jpg';

async function inspect() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();
  const imgBuffer = fs.readFileSync(srcFile);
  const dataUri = 'data:image/jpeg;base64,' + imgBuffer.toString('base64');

  await page.setContent(`<!DOCTYPE html><html><body><canvas id="c"></canvas></body></html>`);

  const report = await page.evaluate(async (uri) => {
    const img = new Image();
    img.src = uri;
    await new Promise(r => img.onload = r);
    const c = document.getElementById('c');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const w = c.width;
    const h = c.height;
    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    function getPixel(x, y) {
      const idx = (y * w + x) * 4;
      return [data[idx], data[idx+1], data[idx+2], data[idx+3]];
    }

    // Find corner bounds
    // Top-left: find transition along x=0, y=0, and diagonal
    let diagTL = 0;
    while (diagTL < 300) {
      const p = getPixel(diagTL, diagTL);
      if (p[0] < 245 || p[1] < 245 || p[2] < 245) break;
      diagTL++;
    }

    let diagTR = 0;
    while (diagTR < 300) {
      const p = getPixel(w - 1 - diagTR, diagTR);
      if (p[0] < 245 || p[1] < 245 || p[2] < 245) break;
      diagTR++;
    }

    let diagBL = 0;
    while (diagBL < 300) {
      const p = getPixel(diagBL, h - 1 - diagBL);
      if (p[0] < 245 || p[1] < 245 || p[2] < 245) break;
      diagBL++;
    }

    let diagBR = 0;
    while (diagBR < 300) {
      const p = getPixel(w - 1 - diagBR, h - 1 - diagBR);
      if (p[0] < 245 || p[1] < 245 || p[2] < 245) break;
      diagBR++;
    }

    return {
      width: w,
      height: h,
      diagTL,
      diagTR,
      diagBL,
      diagBR,
      colorAtDiagTL: getPixel(diagTL + 5, diagTL + 5),
      colorAtDiagTR: getPixel(w - 1 - diagTR - 5, diagTR + 5),
      colorAtDiagBL: getPixel(diagBL + 5, h - 1 - diagBL - 5),
      colorAtDiagBR: getPixel(w - 1 - diagBR - 5, h - 1 - diagBR - 5),
    };
  }, dataUri);

  console.log('Inspection Report:', JSON.stringify(report, null, 2));
  await browser.close();
}

inspect().catch(console.error);
