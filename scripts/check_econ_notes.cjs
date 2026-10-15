const fs = require('fs');
const content = fs.readFileSync('src/data/notes/apEconomicsNotes.ts', 'utf8');
const unitMatches = [...content.matchAll(/unitNumber:\s*(\d+)[^}]*?title:\s*'([^']+)'/gs)];
unitMatches.forEach(m => console.log(`Unit ${m[1]}: ${m[2]}`));
