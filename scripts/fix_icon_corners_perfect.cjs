const fs = require('fs');
const path = require('path');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const srcFile = 'C:/Users/VICTUS/.gemini/antigravity-ide/brain/1522d5f4-28c5-4e9e-b34c-68f97e0db13e/.user_uploaded/media_1792932998297.jpg';

async function fixCorners() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const imgBuffer = fs.readFileSync(srcFile);
  const dataUri = 'data:image/jpeg;base64,' + imgBuffer.toString('base64');

  await page.setContent(`<!DOCTYPE html><html><body><canvas id="c"></canvas></body></html>`);

  await page.evaluate(async (uri) => {
    const img = new Image();
    img.src = uri;
    await new Promise(r => img.onload = r);

    const size = 512;
    const c = document.getElementById('c');
    c.width = size;
    c.height = size;
    const ctx = c.getContext('2d');

    // 1. Draw image scaled to 512x512
    ctx.drawImage(img, 0, 0, size, size);

    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;

    // 2. Identify Corner Mask using BFS Flood-fill from 4 corners
    // Any contiguous pixel starting from (0,0), (size-1,0), (0,size-1), (size-1,size-1)
    // that is near-white (R>235, G>235, B>235) is part of the outside corner mask.
    const isMask = new Uint8Array(size * size);
    const queue = [];

    function pushIfWhite(x, y) {
      if (x < 0 || x >= size || y < 0 || y >= size) return;
      const idx = y * size + x;
      if (isMask[idx]) return;
      const pIdx = idx * 4;
      // White check
      if (data[pIdx] > 230 && data[pIdx+1] > 230 && data[pIdx+2] > 230) {
        isMask[idx] = 1;
        queue.push((y << 16) | x);
      }
    }

    // Seed 4 corners
    pushIfWhite(0, 0);
    pushIfWhite(size - 1, 0);
    pushIfWhite(0, size - 1);
    pushIfWhite(size - 1, size - 1);

    // Also seed edges in corner regions
    for (let i = 0; i < 30; i++) {
      pushIfWhite(i, 0);
      pushIfWhite(0, i);
      pushIfWhite(size - 1 - i, 0);
      pushIfWhite(size - 1, i);
      pushIfWhite(i, size - 1);
      pushIfWhite(0, size - 1 - i);
      pushIfWhite(size - 1 - i, size - 1);
      pushIfWhite(size - 1, size - 1 - i);
    }

    let head = 0;
    while(head < queue.length) {
      const val = queue[head++];
      const x = val & 0xFFFF;
      const y = val >>> 16;

      pushIfWhite(x + 1, y);
      pushIfWhite(x - 1, y);
      pushIfWhite(x, y + 1);
      pushIfWhite(x, y - 1);
    }

    // 3. For every masked pixel, find the closest unmasked pixel (Euclidean distance)
    // and copy its color (Nearest Neighbor on boundary).
    // To make it super fast and smooth, find boundary pixels first.
    const boundary = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const idx = y * size + x;
        if (!isMask[idx]) {
          // Check if it neighbors any masked pixel
          let isB = false;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const nx = x + dx;
              const ny = y + dy;
              if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
                if (isMask[ny * size + nx]) {
                  isB = true;
                  break;
                }
              }
            }
            if (isB) break;
          }
          if (isB) {
            boundary.push({ x, y, r: data[idx*4], g: data[idx*4+1], b: data[idx*4+2] });
          }
        }
      }
    }

    // Replace all masked pixels with color from closest boundary pixel
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const idx = y * size + x;
        if (isMask[idx]) {
          let minDistSq = Infinity;
          let bestColor = null;

          for (let b of boundary) {
            const distSq = (b.x - x) * (b.x - x) + (b.y - y) * (b.y - y);
            if (distSq < minDistSq) {
              minDistSq = distSq;
              bestColor = b;
            }
          }

          if (bestColor) {
            data[idx*4] = bestColor.r;
            data[idx*4+1] = bestColor.g;
            data[idx*4+2] = bestColor.b;
            data[idx*4+3] = 255;
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }, dataUri);

  const outPath = 'C:/Users/VICTUS/Ai/AP-Exam/store_assets/icon_512_closeup_fixed.png';
  const canvasHandle = await page.$('#c');
  await canvasHandle.screenshot({ path: outPath });
  console.log('Saved fixed close-up icon to:', outPath);

  await browser.close();
}

fixCorners().catch(console.error);
