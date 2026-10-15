const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

function loadTs(file) {
  const fullPath = path.resolve(__dirname, '../src/data/quiz', file);
  const code = fs.readFileSync(fullPath, 'utf8');
  const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
  const mod = { exports: {} };
  const customRequire = (reqPath) => {
    if (reqPath.startsWith('.')) {
      const targetTs = path.resolve(__dirname, '../src/data/quiz', reqPath.endsWith('.ts') ? reqPath : reqPath + '.ts');
      if (fs.existsSync(targetTs)) return loadTs(path.basename(targetTs));
    }
    return require(reqPath);
  };
  const fn = new Function('module', 'exports', 'require', res.code);
  fn(mod, mod.exports, customRequire);
  return mod.exports;
}

const subjectsToAudit = [
  { name: 'AP Calculus AB', file: 'apCalculusUnitsData.ts', exportName: 'ALL_CALC_AB_UNIT_DEFINITIONS' },
  { name: 'AP Calculus BC', file: 'apCalculusBcUnitsData.ts', exportName: 'ALL_CALC_BC_UNIT_DEFINITIONS' },
  { name: 'AP Physics 1', file: 'apPhysicsUnitsData.ts', exportName: 'ALL_AP_PHYSICS_UNIT_DEFINITIONS' },
  { name: 'AP Human Geography', file: 'apHumanGeographyUnitsData.ts', exportName: 'ALL_AP_HUMAN_GEOGRAPHY_UNIT_DEFINITIONS' },
  { name: 'AP Environmental Science', file: 'apEnvironmentalUnitsData.ts', exportName: 'ALL_AP_ENVIRONMENTAL_UNIT_DEFINITIONS' },
  { name: 'AP Computer Science Principles', file: 'apCspUnitsData.ts', exportName: 'ALL_AP_CSP_UNIT_DEFINITIONS' },
  { name: 'AP Biology', file: 'apBiologyUnitsData.ts', exportName: 'ALL_AP_BIOLOGY_UNIT_DEFINITIONS' },
  { name: 'AP Chemistry', file: 'apChemistryUnitsData.ts', exportName: 'ALL_AP_CHEMISTRY_UNIT_DEFINITIONS' },
  { name: 'AP Computer Science A', file: 'apCsaUnitsData.ts', exportName: 'ALL_AP_CSA_UNIT_DEFINITIONS' },
  { name: 'AP Psychology', file: 'apPsychologyUnitsData.ts', exportName: 'ALL_AP_PSYCHOLOGY_UNIT_DEFINITIONS' },
  { name: 'AP US History', file: 'apUshUnitsData.ts', exportName: 'ALL_AP_USH_UNIT_DEFINITIONS' },
  { name: 'AP English Lang', file: 'apEnglishLangUnitsData.ts', exportName: 'ALL_AP_ENGLISH_LANG_UNIT_DEFINITIONS' },
  { name: 'AP Microeconomics', file: 'apMicroeconomicsUnitsData.ts', exportName: 'ALL_AP_MICROECONOMICS_UNIT_DEFINITIONS' },
  { name: 'AP Macroeconomics', file: 'apMacroeconomicsUnitsData.ts', exportName: 'ALL_AP_MACROECONOMICS_UNIT_DEFINITIONS' },
  { name: 'AP World History', file: 'apWorldHistoryUnitsData.ts', exportName: 'ALL_AP_WORLD_HISTORY_UNIT_DEFINITIONS' },
];

console.log('=== QUESTIONS PER LEVEL PER SUBJECT ===\n');
let grandTotalUnder3 = 0;
let grandTotalLevels = 0;

subjectsToAudit.forEach(s => {
  const mod = loadTs(s.file);
  const units = mod[s.exportName];
  let lessThan3 = 0;
  let totalL = 0;
  let dist = {};
  units.forEach(u => {
    u.levels.forEach(l => {
      totalL++;
      const qLen = l.questions.length;
      dist[qLen] = (dist[qLen] || 0) + 1;
      if (qLen < 3) lessThan3++;
    });
  });
  grandTotalUnder3 += lessThan3;
  grandTotalLevels += totalL;
  console.log(`${s.name.padEnd(30)} | Total: ${String(totalL).padStart(3)} | < 3 Qs: ${String(lessThan3).padStart(3)} | Dist (Qs->count): ${JSON.stringify(dist)}`);
});

console.log(`\nGrand Total Levels: ${grandTotalLevels}`);
console.log(`Grand Total Levels with < 3 Qs: ${grandTotalUnder3}`);
