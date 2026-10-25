const fs = require('fs');
const path = require('path');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const baseDir = path.resolve(__dirname, '..');
const originalLogoPath = path.join(baseDir, 'store_assets', 'icon_from_logo_zoom_125.png');
const resDir = path.join(baseDir, 'android', 'app', 'src', 'main', 'res');

async function unifyAllLogos() {
  console.log('=== UNIFYING APP LOGO ACROSS ALL PLATFORMS ===');
  console.log('Source Master:', originalLogoPath);

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();

  const imgBuffer = fs.readFileSync(originalLogoPath);
  const dataUri = 'data:image/png;base64,' + imgBuffer.toString('base64');

  async function renderToPath(targetPath, size, isRound = false) {
    const html = `<!DOCTYPE html>
    <html>
    <head>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body, html { width: ${size}px; height: ${size}px; overflow: hidden; background: transparent; }
      .container {
        width: ${size}px;
        height: ${size}px;
        overflow: hidden;
        border-radius: ${isRound ? '50%' : '0px'};
        background: #0b1120;
      }
      img { width: 100%; height: 100%; object-fit: cover; display: block; }
    </style>
    </head>
    <body>
      <div class="container">
        <img src="${dataUri}" />
      </div>
    </body>
    </html>`;

    await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: 'load' });
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    await page.screenshot({ path: targetPath, omitBackground: isRound });
    console.log(`[Generated] ${size}x${size} (round=${isRound}) -> ${path.relative(baseDir, targetPath)}`);
  }

  // 1. Web & Main App Assets
  console.log('\n--- 1. WEB & APP BUNDLE ASSETS ---');
  await renderToPath(path.join(baseDir, 'public', 'logo.png'), 512, false);
  await renderToPath(path.join(baseDir, 'public', 'favicon.png'), 512, false);
  await renderToPath(path.join(baseDir, 'src', 'assets', 'logo.png'), 512, false);
  await renderToPath(path.join(baseDir, 'store_assets', 'icon_512.png'), 512, false);
  await renderToPath(path.join(baseDir, 'android', 'app', 'src', 'main', 'assets', 'public', 'logo.png'), 512, false);
  await renderToPath(path.join(baseDir, 'android', 'app', 'src', 'main', 'assets', 'public', 'favicon.png'), 512, false);

  // 2. Android App Launcher Mipmaps
  console.log('\n--- 2. ANDROID LAUNCHER ICONS (MIPMAP) ---');
  const mipmaps = [
    { dir: 'mipmap-mdpi', size: 48, fgSize: 108 },
    { dir: 'mipmap-hdpi', size: 72, fgSize: 162 },
    { dir: 'mipmap-xhdpi', size: 96, fgSize: 216 },
    { dir: 'mipmap-xxhdpi', size: 144, fgSize: 324 },
    { dir: 'mipmap-xxxhdpi', size: 192, fgSize: 432 }
  ];

  for (const m of mipmaps) {
    const targetDir = path.join(resDir, m.dir);
    // Standard square launcher icon
    await renderToPath(path.join(targetDir, 'ic_launcher.png'), m.size, false);
    // Round launcher icon
    await renderToPath(path.join(targetDir, 'ic_launcher_round.png'), m.size, true);
    // Adaptive foreground icon
    await renderToPath(path.join(targetDir, 'ic_launcher_foreground.png'), m.fgSize, false);
  }

  await browser.close();
  console.log('\nSUCCESS: All logos successfully unified across Web, React Assets, Store Assets, and Android!');
}

unifyAllLogos().catch(err => {
  console.error('Error unifying logos:', err);
  process.exit(1);
});
