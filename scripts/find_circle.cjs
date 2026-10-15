const cp = require('child_process');
const fs = require('fs');
const path = require('path');

const imgPath = path.join('C:/Users/VICTUS/.gemini/antigravity-ide/brain/4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1', 'tutor_video_frame.jpg');

// Use ffmpeg to convert to ppm or read raw
const raw = cp.execSync(`ffmpeg -v error -i "${imgPath}" -f rawvideo -pix_fmt rgb24 -`, { maxBuffer: 10 * 1024 * 1024 });
const width = 496;
const height = 880;

let minX = width, maxX = 0, minY = height, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 3;
    const r = raw[idx], g = raw[idx+1], b = raw[idx+2];
    if (r > 20 || g > 20 || b > 20) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

console.log('Circle bounds:', { minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY });
const cx = Math.round((minX + maxX) / 2);
const cy = Math.round((minY + maxY) / 2);
const diam = Math.max(maxX - minX, maxY - minY);
console.log('Center:', { cx, cy }, 'Diameter:', diam);

// Crop a square around the circle:
const cropX = Math.max(0, cx - Math.floor(diam / 2));
const cropY = Math.max(0, cy - Math.floor(diam / 2));
console.log(`Crop filter: crop=${diam}:${diam}:${cropX}:${cropY}`);
