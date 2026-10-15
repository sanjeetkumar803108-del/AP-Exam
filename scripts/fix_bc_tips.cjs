const fs = require('fs');
let code = fs.readFileSync('src/data/quiz/apCalculusBcUnitsData.ts', 'utf8');

const t1 = 'from $\\pi/3$ to $\\pi/2$, $4\\cos\\theta$ bounds it.",\n          },';
const r1 = 'from $\\pi/3$ to $\\pi/2$, $4\\cos\\theta$ bounds it.",\n            "distractorTip": "When finding the intersection of areas, always draw radial rays from the origin to see which curve forms the boundary!"\n          },';

const t2 = '5 - \\int_0^2 3\\cos(t^2) \\, dt$.",\n          },';
const r2 = '5 - \\int_0^2 3\\cos(t^2) \\, dt$.",\n            "distractorTip": "Working backwards in time: x(start) = x(end) - \\int_{start}^{end} v(t) dt."\n          },';

const t3 = '=\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$.",\n          },';
const r3 = '=\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$.",\n            "distractorTip": "Recognizing numerical series as specific Taylor series evaluated at a constant point is a signature College Board question."\n          },';

code = code.replace(t1, r1);
code = code.replace(t2, r2);
code = code.replace(t3, r3);

fs.writeFileSync('src/data/quiz/apCalculusBcUnitsData.ts', code, 'utf8');
console.log('Done fixing BC tips');
