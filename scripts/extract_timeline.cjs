const cp = require('child_process');
const path = require('path');

const target = 'public/welcome-penguin.mp4';
const brain = 'C:/Users/VICTUS/.gemini/antigravity-ide/brain/4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1';
for (const sec of ['1.5', '2.5', '3.5', '4.5', '5.5', '6.5', '7.5', '8.5', '9.5']) {
  const out = path.join(brain, `orig_${sec}.png`);
  cp.execSync(`ffmpeg -y -ss ${sec} -i "${target}" -frames:v 1 -update 1 "${out}"`);
  console.log(`Extracted ${sec}s to ${out}`);
}
