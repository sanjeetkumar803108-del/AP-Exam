const fs = require('fs');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const srcFile = 'C:/Users/VICTUS/.gemini/antigravity-ide/brain/1522d5f4-28c5-4e9e-b34c-68f97e0db13e/.user_uploaded/media_1792932998297.jpg';

async function scan() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const imgBuffer = fs.readFileSync(srcFile);
  const dataUri = 'data:image/jpeg;base64,' + imgBuffer.toString('base64');
  await page.setContent('<!DOCTYPE html><html><body><canvas id="c"></canvas></body></html>');
  
  const res = await page.evaluate(async (uri) => {
    const img = new Image();
    img.src = uri;
    await new Promise(r => img.onload = r);
    const c = document.getElementById('c');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, c.width, c.height).data;
    function get(x,y) { const i = (y*c.width+x)*4; return [data[i], data[i+1], data[i+2]]; }
    
    // Top-left y=50 from x=0 to 100
    const row50 = [];
    for(let x=0; x<120; x+=10) {
      row50.push({x, color: get(x, 50)});
    }
    // Bottom-left y=970 from x=0 to 120
    const row970 = [];
    for(let x=0; x<120; x+=10) {
      row970.push({x, color: get(x, 970)});
    }
    // Bottom-center y=1023
    const bottomCenter = get(501, 1023);
    // Left-center x=0, y=512
    const leftCenter = get(0, 512);

    return { row50, row970, bottomCenter, leftCenter };
  }, dataUri);

  console.log('Scan Results:', JSON.stringify(res, null, 2));
  await browser.close();
}
scan().catch(console.error);
