// Master audit script for all AP subjects in src/data/quiz
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

console.log('================================================================');
console.log('       MASTER DEEP QA AUDIT OF ALL 14 AP SUBJECT QUIZ BANKS      ');
console.log('================================================================\n');

let grandTotalUnits = 0;
let grandTotalLevels = 0;
let grandTotalQuestions = 0;
let grandTotalIssues = 0;
const subjectReports = [];

subjectsToAudit.forEach(subj => {
  const filePath = path.resolve(__dirname, '../src/data/quiz', subj.file);
  if (!fs.existsSync(filePath)) {
    console.log(`[FILE MISSING] ${subj.file}`);
    return;
  }

  let units = null;
  try {
    const mod = loadTs(subj.file);
    units = mod[subj.exportName];
  } catch (err) {
    console.error(`Error loading ${subj.name} (${subj.file}):`, err.message);
    grandTotalIssues++;
    return;
  }

  if (!Array.isArray(units)) {
    console.log(`[INVALID DATA] ${subj.name} did not yield an array of units.`);
    grandTotalIssues++;
    return;
  }

  let sUnits = units.length;
  let sLevels = 0;
  let sQuestions = 0;
  const issues = [];
  const qIds = new Set();
  const lvlIds = new Set();
  const lvlKeys = new Set();
  const choiceDist = [0, 0, 0, 0];

  units.forEach((unit, uIdx) => {
    if (!unit.levels || !Array.isArray(unit.levels)) {
      issues.push(`Unit ${unit.unitIndex || uIdx + 1} has no valid levels array`);
      return;
    }
    sLevels += unit.levels.length;

    unit.levels.forEach((lvl, lIdx) => {
      if (lvlIds.has(lvl.id)) {
        issues.push(`Duplicate Level ID: ${lvl.id} in Unit ${unit.unitIndex}`);
      }
      lvlIds.add(lvl.id);

      if (lvlKeys.has(lvl.uniqueKey)) {
        issues.push(`Duplicate Level uniqueKey: ${lvl.uniqueKey} in Unit ${unit.unitIndex}`);
      }
      lvlKeys.add(lvl.uniqueKey);

      if (!lvl.questions || !Array.isArray(lvl.questions)) {
        issues.push(`Level ${lvl.uniqueKey || lvl.id} has no valid questions array`);
        return;
      }

      lvl.questions.forEach((q, qIdx) => {
        sQuestions++;

        // ID check
        if (!q.id) {
          issues.push(`Question at level ${lvl.uniqueKey} idx ${qIdx} has no id`);
        } else if (qIds.has(q.id)) {
          issues.push(`Duplicate Question ID: ${q.id} in level ${lvl.uniqueKey}`);
        } else {
          qIds.add(q.id);
        }

        // Stem check
        if (!q.stem || typeof q.stem !== 'string' || q.stem.trim().length < 10) {
          issues.push(`Invalid stem in ${q.id}: "${q.stem}"`);
        }

        // Options check
        if (!Array.isArray(q.options) || q.options.length !== 4) {
          issues.push(`Question ${q.id} does not have 4 options (has ${q.options ? q.options.length : 0})`);
        } else {
          const uniqueOpts = new Set(q.options.map(o => (typeof o === 'string' ? o.trim() : '')));
          if (uniqueOpts.size !== 4) {
            issues.push(`Question ${q.id} has duplicate options: ${JSON.stringify(q.options)}`);
          }
          q.options.forEach((opt, oIdx) => {
            if (!opt || typeof opt !== 'string' || opt.trim().length === 0) {
              issues.push(`Question ${q.id} has empty option at index ${oIdx}`);
            }
          });
        }

        // CorrectIndex check
        if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3 || !Number.isInteger(q.correctIndex)) {
          issues.push(`Question ${q.id} has invalid correctIndex: ${q.correctIndex}`);
        } else {
          choiceDist[q.correctIndex]++;
        }

        // Explanation check
        if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length < 10) {
          issues.push(`Question ${q.id} has missing or too short explanation`);
        }

        // Distractor tip check
        if (!q.distractorTip || typeof q.distractorTip !== 'string' || q.distractorTip.trim().length < 5) {
          issues.push(`Question ${q.id} has missing or too short distractorTip`);
        }
      });
    });
  });

  grandTotalUnits += sUnits;
  grandTotalLevels += sLevels;
  grandTotalQuestions += sQuestions;
  grandTotalIssues += issues.length;

  subjectReports.push({
    name: subj.name,
    file: subj.file,
    units: sUnits,
    levels: sLevels,
    questions: sQuestions,
    choiceDist,
    issues
  });
});

// Print report
subjectReports.forEach(r => {
  console.log(`[SUBJECT] ${r.name.padEnd(32)} | Units: ${String(r.units).padStart(2)} | Levels: ${String(r.levels).padStart(3)} | Qs: ${String(r.questions).padStart(3)}`);
  console.log(`  Choice Distribution: A=${r.choiceDist[0]}, B=${r.choiceDist[1]}, C=${r.choiceDist[2]}, D=${r.choiceDist[3]}`);
  if (r.issues.length === 0) {
    console.log(`  Status: 100% CLEAN - ZERO ERRORS OR WARNINGS`);
  } else {
    console.log(`  Status: ${r.issues.length} ISSUES FOUND:`);
    r.issues.slice(0, 10).forEach(iss => console.log(`    - ${iss}`));
  }
  console.log('');
});

console.log('================================================================');
console.log(`FINAL MASTER AUDIT TOTALS:`);
console.log(`  Total Subjects Audited: ${subjectReports.length}`);
console.log(`  Total Units:            ${grandTotalUnits}`);
console.log(`  Total Levels:           ${grandTotalLevels}`);
console.log(`  Total Questions:        ${grandTotalQuestions}`);
console.log(`  Total Integrity Issues: ${grandTotalIssues}`);
console.log('================================================================');
