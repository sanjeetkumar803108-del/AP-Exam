const fs = require('fs');
const puppeteer = require('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_bio_full_syllabus_exam/node_modules/puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const logoPath = 'C:/Users/VICTUS/Ai/AP-Exam/store_assets/icon_from_logo_zoom_125.png';

async function generateFeatureGraphic() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const logoBase64 = fs.readFileSync(logoPath).toString('base64');
  const logoUri = 'data:image/png;base64,' + logoBase64;

  await page.setViewport({ width: 1024, height: 500, deviceScaleFactor: 1 });
  
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1024px;
    height: 500px;
    overflow: hidden;
    background: radial-gradient(circle at 25% 50%, #1e1b4b 0%, #0f172a 60%, #020617 100%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #fff;
    display: flex;
    align-items: center;
    position: relative;
  }

  /* Decorative Ambient Lights */
  .glow-cyan {
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%);
    top: 50px;
    left: 40px;
    filter: blur(40px);
    pointer-events: none;
  }
  .glow-gold {
    position: absolute;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.12) 0%, transparent 70%);
    bottom: -50px;
    right: 100px;
    filter: blur(50px);
    pointer-events: none;
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 70px;
    gap: 55px;
    z-index: 10;
  }

  /* Left: 3D Mascot in Premium Squircle Badge */
  .mascot-card {
    width: 290px;
    height: 290px;
    border-radius: 54px;
    overflow: hidden;
    position: relative;
    box-shadow: 
      0 20px 45px -10px rgba(0, 0, 0, 0.7),
      0 0 0 2px rgba(255, 255, 255, 0.15),
      0 0 35px rgba(56, 189, 248, 0.25);
    background: #0b1122;
    flex-shrink: 0;
  }
  .mascot-card img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  /* Right: Typography & Badges */
  .text-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .badge-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }
  .ced-pill {
    background: rgba(251, 191, 36, 0.15);
    border: 1px solid rgba(251, 191, 36, 0.4);
    color: #fbbf24;
    font-size: 13px;
    font-weight: 800;
    padding: 5px 14px;
    border-radius: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  h1 {
    font-size: 46px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 60%, #cbd5e1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 22px;
    font-weight: 700;
    color: #38bdf8;
    margin-bottom: 24px;
    letter-spacing: -0.2px;
  }

  .features-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .feature-tag {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #e2e8f0;
    font-size: 13px;
    font-weight: 600;
    padding: 7px 16px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
</style>
</head>
<body>
  <div class="glow-cyan"></div>
  <div class="glow-gold"></div>

  <div class="content-wrapper">
    <div class="mascot-card">
      <img src="${logoUri}" alt="Professor Pang" />
    </div>

    <div class="text-side">
      <div class="badge-row">
        <span class="ced-pill">★ 100% College Board CED Aligned</span>
      </div>
      <h1>AI Prep for AP Exams</h1>
      <div class="subtitle">Score a 5 with AI Tutoring & High-Yield Notes</div>
      <div class="features-grid">
        <div class="feature-tag"><span>⚡</span> Instant Step-by-Step Solver</div>
        <div class="feature-tag"><span>📝</span> 16+ AP Subject Notes</div>
        <div class="feature-tag"><span>⚔️</span> 1v1 Quiz Battles</div>
        <div class="feature-tag"><span>🎯</span> AP Trap Radar™</div>
      </div>
    </div>
  </div>
</body>
</html>`;

  await page.setContent(html, { waitUntil: 'load' });
  const outPath = 'C:/Users/VICTUS/Ai/AP-Exam/store_assets/feature_graphic_1024x500.png';
  await page.screenshot({ path: outPath });
  console.log('Saved ultra-premium feature graphic to:', outPath);
  await browser.close();
}

generateFeatureGraphic().catch(console.error);
