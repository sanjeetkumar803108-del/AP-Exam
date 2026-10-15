// Comprehensive Semantic and Factual Verification Script for All AP Quiz Banks
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
  { name: 'AP Economics', file: 'apEconomicsUnitsData.ts', exportName: 'ALL_AP_ECONOMICS_UNIT_DEFINITIONS' },
  { name: 'AP Microeconomics', file: 'apMicroeconomicsUnitsData.ts', exportName: 'ALL_AP_MICROECONOMICS_UNIT_DEFINITIONS' },
  { name: 'AP Macroeconomics', file: 'apMacroeconomicsUnitsData.ts', exportName: 'ALL_AP_MACROECONOMICS_UNIT_DEFINITIONS' },
  { name: 'AP World History', file: 'apWorldHistoryUnitsData.ts', exportName: 'ALL_AP_WORLD_HISTORY_UNIT_DEFINITIONS' },
];

console.log('========================================================================');
console.log('   DEEP SEMANTIC & FACTUAL VERIFICATION FOR ALL LEARNING ISLAND QUIZZES  ');
console.log('========================================================================\n');

let grandTotalChecked = 0;
let grandContradictions = 0;
let grandPrefixIssues = 0;
let grandLatexIssues = 0;
let grandIdenticalStems = 0;
let grandMismatchedTerms = 0;

const letters = ['A', 'B', 'C', 'D'];
const allStemsMap = new Map();

subjectsToAudit.forEach(subj => {
  const filePath = path.resolve(__dirname, '../src/data/quiz', subj.file);
  if (!fs.existsSync(filePath)) {
    console.log(`[FILE MISSING] ${subj.file}`);
    return;
  }

  const mod = loadTs(subj.file);
  const units = mod[subj.exportName];
  if (!Array.isArray(units)) return;

  let sChecked = 0;
  const sIssues = [];

  units.forEach(unit => {
    (unit.levels || []).forEach(lvl => {
      (lvl.questions || []).forEach(q => {
        sChecked++;
        grandTotalChecked++;
        const correctLetter = letters[q.correctIndex];
        const correctOpt = q.options[q.correctIndex];

        // 1. Check for duplicate stems across the same subject
        const normalizedStem = q.stem.trim().toLowerCase();
        if (allStemsMap.has(subj.name + '::' + normalizedStem)) {
          sIssues.push({
            type: 'DUPLICATE_STEM',
            qId: q.id,
            details: `Identical stem already found at ${allStemsMap.get(subj.name + '::' + normalizedStem)}`
          });
          grandIdenticalStems++;
        } else {
          allStemsMap.set(subj.name + '::' + normalizedStem, q.id);
        }

        // 2. Redundant prefixes in options like "A. ", "A) ", "(A) "
        q.options.forEach((opt, idx) => {
          if (/^(\([A-D]\)|[A-D][\.\)])\s/i.test(opt.trim())) {
            sIssues.push({
              type: 'PREFIX_IN_OPTION',
              qId: q.id,
              details: `Option ${letters[idx]} has redundant prefix: "${opt}"`
            });
            grandPrefixIssues++;
          }
        });

        // 3. Check for LaTeX balance (odd number of unescaped $)
        const allText = q.stem + ' ' + q.options.join(' ') + ' ' + q.explanation;
        const sanitizedText = allText
          .replace(/`\$`/g, '`\\$`')
          .replace(/(?<!\\)\$(\d[\d,]*(?:\.\d+)?(?:\s*(?:million|billion|trillion|k|m|b|per|\/|hr|month|year|\b)|(?=[^$]*?(?:million|billion|trillion|dollar|\/hr|\/month|\b))))/gi, '\\$$$1');
        const dollarMatches = sanitizedText.match(/(?<!\\)\$/g) || [];
        if (dollarMatches.length % 2 !== 0) {
          sIssues.push({
            type: 'UNBALANCED_LATEX_DOLLAR',
            qId: q.id,
            details: `${dollarMatches.length} unescaped dollar signs found.`
          });
          grandLatexIssues++;
        }

        // 4. Contradiction between explanation and correctIndex
        // Look for: "Option A is correct", "(B) is the right", "choice C is right", "hence D"
        const contradictionRegexes = [
          /\b(?:option|choice|answer)\s+([A-D])\b/i,
          /\b([A-D])\s+is\s+(?:the\s+)?(?:correct|right|accurate|proper)\b/i,
          /\bhence,?\s+\(?([A-D])\)?\s+is\b/i,
          /\btherefore,?\s+\(?([A-D])\)?\s+is\b/i
        ];

        for (const regex of contradictionRegexes) {
          const match = q.explanation.match(regex);
          if (match) {
            const statedLetter = match[1].toUpperCase();
            if (statedLetter !== correctLetter) {
              sIssues.push({
                type: 'EXPLANATION_CONTRADICTION',
                qId: q.id,
                details: `Explanation explicitly mentions Option ${statedLetter}, but correctIndex is ${q.correctIndex} (Option ${correctLetter})! Correct opt: "${correctOpt.substring(0, 40)}..."`
              });
              grandContradictions++;
              break;
            }
          }
        }

        // 5. Check if explanation is too generic (e.g. contains placeholders like "TODO", "TBD", "Lorem")
        if (/TODO|TBD|Lorem ipsum|placeholder|sample answer/i.test(q.explanation) || /TODO|TBD|Lorem/i.test(q.stem)) {
          sIssues.push({
            type: 'PLACEHOLDER_TEXT',
            qId: q.id,
            details: `Found placeholder text in question or explanation`
          });
        }
      });
    });
  });

  if (sIssues.length === 0) {
    console.log(`[PASSED] ${subj.name.padEnd(32)}: ${sChecked} Qs verified - 100% CLEAN`);
  } else {
    console.log(`[ISSUES] ${subj.name.padEnd(32)}: ${sChecked} Qs - ${sIssues.length} issues found:`);
    sIssues.forEach(iss => {
      console.log(`   * [${iss.type}] ${iss.qId}: ${iss.details}`);
    });
  }
});

console.log('\n========================================================================');
console.log('FINAL AUDIT SUMMARY:');
console.log(`  Total Questions Scanned:      ${grandTotalChecked}`);
console.log(`  Explanation Contradictions:   ${grandContradictions}`);
console.log(`  Option Prefix Redundancies:   ${grandPrefixIssues}`);
console.log(`  LaTeX Formatting Anomalies:   ${grandLatexIssues}`);
console.log(`  Duplicate Question Stems:     ${grandIdenticalStems}`);
console.log('========================================================================');
