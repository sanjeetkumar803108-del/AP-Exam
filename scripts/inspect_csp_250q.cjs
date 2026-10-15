const fs = require('fs');
const html = fs.readFileSync('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_csp_full_course_250q/AP_CSP_All_Units_Mastery_250Q.html', 'utf8');
const title = html.match(/<title>([^<]+)<\/title>/i);
const pages = (html.match(/class=["'][^"']*page[\s"']/gi) || []).length;
const pdfStat = fs.statSync('C:/Users/VICTUS/.gemini/antigravity-ide/scratch/ap_csp_full_course_250q/AP_CSP_All_Units_Mastery_250Q.pdf');
const sizeMb = (pdfStat.size / (1024 * 1024)).toFixed(2);

console.log('Title:', title ? title[1] : 'none');
console.log('Pages:', pages);
console.log('Size:', sizeMb + ' MB');
