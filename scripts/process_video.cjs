const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const downloadDir = 'C:/Users/VICTUS/Downloads';
const files = fs.readdirSync(downloadDir).filter(f => f.includes('Baby_penguin'));
if (files.length === 0) {
  console.error('No matching video file found');
  process.exit(1);
}

const srcFile = path.join(downloadDir, files[0]);
console.log('Source video found:', srcFile);

const targetMp4 = path.join(__dirname, '../public/welcome-penguin.mp4');
fs.copyFileSync(srcFile, targetMp4);
console.log('Copied to:', targetMp4, 'Size:', fs.statSync(targetMp4).size);

const framePath = path.join('C:/Users/VICTUS/.gemini/antigravity-ide/brain/4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1', 'penguin_video_frame.jpg');
const probeCmd = `ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration,nb_frames,pix_fmt -of json "${targetMp4}"`;
const info = cp.execSync(probeCmd, { encoding: 'utf-8' });
console.log('Video Stream info:', info);

for (const t of [0, 2, 4, 6, 8, 9]) {
  const f = path.join('C:/Users/VICTUS/.gemini/antigravity-ide/brain/4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1', `frame_${t}s.jpg`);
  cp.execSync(`ffmpeg -y -ss ${t} -i "${targetMp4}" -vframes 1 "${f}"`);
  console.log(`Frame at ${t}s saved to: ${f}`);
}

