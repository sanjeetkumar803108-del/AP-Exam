const cp = require('child_process');
const path = require('path');

const brain = 'C:/Users/VICTUS/.gemini/antigravity-ide/brain/4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1';
for (const s of [1, 2, 3, 4, 5, 6, 7, 8]) {
  const out = path.join(brain, `tutor_sec_${s}.png`);
  cp.execSync(`ffmpeg -y -ss ${s} -i public/tutor-penguin.mp4 -vf "crop=338:338:74:232" -frames:v 1 -update 1 "${out}"`);
  console.log(`Saved frame at ${s}s to ${out}`);
}
