const fs = require('fs');
const path = require('path');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const srcFile = 'C:/Users/VICTUS/.gemini/antigravity-ide/brain/1522d5f4-28c5-4e9e-b34c-68f97e0db13e/.user_uploaded/media_1792932998297.jpg';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();
  const imgBuffer = fs.readFileSync(srcFile);
  const dataUri = 'data:image/jpeg;base64,' + imgBuffer.toString('base64');

  await page.setContent(`<!DOCTYPE html>
<html>
<head>
<style>
  body { margin: 0; padding: 0; background: #000; }
  canvas { display: block; }
</style>
</head>
<body>
<canvas id="c"></canvas>
</body>
</html>`);

  // We will run in-browser canvas scripts to generate the versions
  const versions = [
    { name: 'store_assets/test_fix_pure_inpaint.png', zoom: 1.0 },
    { name: 'store_assets/test_fix_zoom_105.png', zoom: 1.05 },
    { name: 'store_assets/test_fix_zoom_108.png', zoom: 1.08 }
  ];

  for (const ver of versions) {
    await page.evaluate(async (uri, zoom) => {
      const img = new Image();
      img.src = uri;
      await new Promise(r => img.onload = r);

      const targetSize = 512;
      const c = document.getElementById('c');
      c.width = targetSize;
      c.height = targetSize;
      const ctx = c.getContext('2d');

      // Draw image with zoom centered
      const drawW = targetSize * zoom;
      const drawH = targetSize * zoom;
      const offsetX = (targetSize - drawW) / 2;
      const offsetY = (targetSize - drawH) / 2;

      ctx.clearRect(0, 0, targetSize, targetSize);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);

      const imgData = ctx.getImageData(0, 0, targetSize, targetSize);
      const data = imgData.data;

      function isWhite(x, y) {
        if (x < 0 || x >= targetSize || y < 0 || y >= targetSize) return false;
        const i = (y * targetSize + x) * 4;
        return data[i] > 240 && data[i+1] > 240 && data[i+2] > 240;
      }

      // Corner repair using radial inward search:
      // For any white pixel in the 4 corner zones (width/height < 200 or > 312),
      // search along the ray towards center (256, 256) until we hit a non-white pixel,
      // and copy that pixel's color!
      const centerX = targetSize / 2;
      const centerY = targetSize / 2;

      for (let y = 0; y < targetSize; y++) {
        for (let x = 0; x < targetSize; x++) {
          // Check if this pixel is in a corner region
          const inCorner = (x < 150 || x > targetSize - 150) && (y < 150 || y > targetSize - 150);
          if (inCorner && isWhite(x, y)) {
            // Trace ray towards center
            const dx = centerX - x;
            const dy = centerY - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const stepX = dx / dist;
            const stepY = dy / dist;

            let curX = x;
            let curY = y;
            let found = false;
            let sampleColor = null;

            for (let step = 1; step < dist; step++) {
              curX += stepX;
              curY += stepY;
              const ix = Math.round(curX);
              const iy = Math.round(curY);
              if (!isWhite(ix, iy)) {
                // sample slightly inside to avoid antialiasing edge
                const deepX = Math.round(curX + stepX * 2);
                const deepY = Math.round(curY + stepY * 2);
                const safeX = Math.max(0, Math.min(targetSize - 1, deepX));
                const safeY = Math.max(0, Math.min(targetSize - 1, deepY));
                const idx = (safeY * targetSize + safeX) * 4;
                sampleColor = [data[idx], data[idx+1], data[idx+2], 255];
                found = true;
                break;
              }
            }

            if (found && sampleColor) {
              const targetIdx = (y * targetSize + x) * 4;
              data[targetIdx] = sampleColor[0];
              data[targetIdx+1] = sampleColor[1];
              data[targetIdx+2] = sampleColor[2];
              data[targetIdx+3] = 255;
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
    }, dataUri, ver.zoom);

    const outPath = path.resolve(__dirname, '..', ver.name);
    const canvasHandle = await page.$('#c');
    await canvasHandle.screenshot({ path: outPath });
    console.log(`Generated ${ver.name}`);
  }

  await browser.close();
  console.log('Done generating all versions!');
}

main().catch(console.error);
