const fs = require('fs');
const lines = fs.readFileSync('src/components/CalculusDiagramSvg.tsx', 'utf8').split('\n');
lines.forEach((line, i) => {
  if (line.includes('ppc_frontier_graph') || line.includes('monopoly_graph') || line.includes('side_by_side_econ')) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
});
