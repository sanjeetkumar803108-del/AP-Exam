const { execSync } = require('child_process');
const fs = require('fs');

console.log('1. Generating MP4...');
execSync('ffmpeg -y -i public/tutor-penguin.mp4 -to 00:00:05.0 -vf "crop=338:338:74:232,tpad=stop_mode=clone:stop_duration=1.0" -c:v libx264 -crf 20 -c:a aac public/tutor-penguin-circle.mp4', { stdio: 'inherit' });

console.log('2. Generating WebM...');
execSync('ffmpeg -y -i public/tutor-penguin.mp4 -to 00:00:05.0 -vf "crop=338:338:74:232,tpad=stop_mode=clone:stop_duration=1.0" -c:v libvpx-vp9 -b:v 800k -c:a libopus public/tutor-penguin-circle.webm', { stdio: 'inherit' });

console.log('3. Extracting face poster...');
execSync('ffmpeg -y -sseof -0.1 -i public/tutor-penguin-circle.mp4 -frames:v 1 -q:v 2 public/tutor-penguin-face.jpg', { stdio: 'inherit' });

console.log('4. Copying to android assets...');
fs.copyFileSync('public/tutor-penguin-circle.mp4', 'android/app/src/main/assets/public/tutor-penguin-circle.mp4');
fs.copyFileSync('public/tutor-penguin-circle.webm', 'android/app/src/main/assets/public/tutor-penguin-circle.webm');
fs.copyFileSync('public/tutor-penguin-face.jpg', 'android/app/src/main/assets/public/tutor-penguin-face.jpg');

console.log('All tutor assets generated and synced to Android assets successfully!');
