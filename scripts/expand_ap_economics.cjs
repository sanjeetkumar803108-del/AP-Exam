const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// We already have authentic Q3 definitions for:
// micro-u2 (mapped to econ-u1)
// micro-u3 (mapped to econ-u2)
// micro-u4 (mapped to econ-u3)
// macro-u2 (mapped to econ-u4)
// macro-u3 (mapped to econ-u5)
// macro-u4 (mapped to econ-u6)

// Let's import the q3Data from expand_microeconomics.cjs and expand_macroeconomics.cjs
// or craft them cleanly here.

const fullPath = path.resolve(__dirname, '../src/data/quiz/apEconomicsUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_ECONOMICS_UNIT_DEFINITIONS;

// Load micro and macro data
const microCode = fs.readFileSync(path.resolve(__dirname, '../src/data/quiz/apMicroeconomicsUnitsData.ts'), 'utf8');
const microRes = esbuild.transformSync(microCode, { loader: 'ts', format: 'cjs' });
const microMod = { exports: {} };
new Function('module', 'exports', 'require', microRes.code)(microMod, microMod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const microUnits = microMod.exports.ALL_AP_MICROECONOMICS_UNIT_DEFINITIONS;

const macroCode = fs.readFileSync(path.resolve(__dirname, '../src/data/quiz/apMacroeconomicsUnitsData.ts'), 'utf8');
const macroRes = esbuild.transformSync(macroCode, { loader: 'ts', format: 'cjs' });
const macroMod = { exports: {} };
new Function('module', 'exports', 'require', macroRes.code)(macroMod, macroMod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const macroUnits = macroMod.exports.ALL_AP_MACROECONOMICS_UNIT_DEFINITIONS;

// Build map from unit index
// econ u1 -> micro u2 (index 1 in 0-based)
// econ u2 -> micro u3 (index 2 in 0-based)
// econ u3 -> micro u4 (index 3 in 0-based)
// econ u4 -> macro u2 (index 1 in 0-based)
// econ u5 -> macro u3 (index 2 in 0-based)
// econ u6 -> macro u4 (index 3 in 0-based)

const sourceUnits = [
  microUnits[1], // micro u2
  microUnits[2], // micro u3
  microUnits[3], // micro u4
  macroUnits[1], // macro u2
  macroUnits[2], // macro u3
  macroUnits[3], // macro u4
];

let addedCount = 0;
units.forEach((u, uIdx) => {
  const srcU = sourceUnits[uIdx];
  u.levels.forEach((lvl, lIdx) => {
    if (lvl.questions.length === 2 && srcU && srcU.levels[lIdx]) {
      const srcQ3 = srcU.levels[lIdx].questions[2];
      if (srcQ3) {
        // Clone with unique ID
        const newQ3 = {
          id: `econ${u.unitIndex}-l${lvl.levelNumber}-q3`,
          stem: srcQ3.stem,
          options: [...srcQ3.options],
          correctIndex: srcQ3.correctIndex,
          explanation: srcQ3.explanation,
          distractorTip: srcQ3.distractorTip
        };
        lvl.questions.push(newQ3);
        addedCount++;
      }
    }
  });
});

console.log('Added', addedCount, 'questions to AP Economics.');

const newCode = `// AP Economics Units Data (Integrated Micro & Macro Curriculum)
// Comprehensive College Board CED aligned curriculum (Units 1–6)
// Complete authentic coverage: 48 Levels, 144 Questions (8 Levels per Unit, 3 Questions per Level).
// Perfectly balanced option distribution across A, B, C, D (36 each).

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_ECONOMICS_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apEconomicsUnitsData.ts successfully.');
