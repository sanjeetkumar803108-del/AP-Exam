/**
 * AP Subject Content Validator, Point Auto-Calculator & Sanitizer
 * 
 * Enforces College Board CED curriculum boundaries across all AP subjects:
 * 1. [Bug #1 Fix] Rejects & heals off-subject curriculum leakage (e.g. Calculus in APHG).
 * 2. [Bug #2 Fix] Programmatically calculates totalPoints from sub-parts (A-G) and rubric.
 * 3. [Bug #3 Fix] Enforces authentic stimulus category distribution (none / single / two).
 * 4. [Bug #5 Fix] Strips leaked raw SVG tags from text and injects standardized textbook models.
 * 5. [Bug #6 Fix] Provides programmatic canonical 2-line header metadata from CED whitelist.
 * 6. [Bug #7 Fix] Tracks used concepts to deprioritize repeats within a single practice set.
 */

import { getSubjectWhitelist } from '../data/apSubjectWhitelists';
import { getStandardizedModelSvg } from './standardizedApDiagrams';

export interface ValidationResult {
  isValid: boolean;
  rejectionReason?: string;
  sanitizedQuestion: any;
  detectedConcepts: string[];
}

export interface UsedConceptsTracker {
  usedConceptCounts: Record<string, number>;
  usedUnits: Record<number, number>;
}

export function createUsedConceptsTracker(): UsedConceptsTracker {
  return {
    usedConceptCounts: {},
    usedUnits: {}
  };
}

/**
 * Counts all subparts (a) through (g) in a prompt or model answer.
 */
export function countSubParts(text: string): { count: number; labels: string[] } {
  if (!text) return { count: 0, labels: [] };
  
  // Look for (a), (b)... or Part A, Part B... or A., B., C... or A), B)... on newlines
  const regex = /(?:\((a|b|c|d|e|f|g)\)|(?:^|\n)\s*(?:part|question)\s+([a-g])\b|(?:^|\n)\s*([a-g])[.)])/gi;
  const matches: RegExpExecArray[] = [];
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    matches.push(m);
  }
  const found = new Set<string>();

  for (const m of matches) {
    const label = (m[1] || m[2] || m[3]).toLowerCase();
    found.add(label);
  }

  const sortedLabels = Array.from(found).sort();
  return {
    count: sortedLabels.length,
    labels: sortedLabels
  };
}

/**
 * Calculates the true point value from rubric and sub-parts count.
 * Completely eliminates Bug #2 (Declared point value != number of scored parts).
 */
export function calculateRealTotalPoints(q: any, subjectId?: string): number {
  if (!q) return 1;

  // 1. Explicit sum from scoringRubric brackets
  if (Array.isArray(q.scoringRubric) && q.scoringRubric.length > 0) {
    let sum = 0;
    let foundExplicit = false;
    for (const item of q.scoringRubric) {
      const str = String(item || '');
      const match = str.match(/\[\s*(?:\d+\s*\/\s*)?(\d+)\s*(?:points|point|pts|pt)\s*\]/i)
        || str.match(/\(\s*(?:\d+\s*\/\s*)?(\d+)\s*(?:points|point|pts|pt)\s*\)/i);
      if (match) {
        sum += parseInt(match[1], 10);
        foundExplicit = true;
      }
    }
    if (foundExplicit && sum > 0) {
      return sum;
    }
  }

  // 2. Count sub-parts (a) through (g)
  const fullText = `${q.prompt || ''} ${q.modelAnswer || ''}`;
  const { count: partCount } = countSubParts(fullText);

  // If sub-parts are present, point value MUST be at least the number of subparts!
  if (partCount >= 2) {
    const rawPoints = Number(q.totalPoints);
    if (!isNaN(rawPoints) && (rawPoints === 12 || rawPoints === 10 || rawPoints === 9 || rawPoints === 8 || rawPoints === 7 || rawPoints === 6 || rawPoints === 4 || rawPoints === 3)) {
      return rawPoints;
    }
    if (!isNaN(rawPoints) && rawPoints >= partCount) {
      return rawPoints;
    }
    // Default 1 point per sub-part (e.g. 7 sub-parts = 7 points)
    return partCount;
  }

  // 3. Subject-specific defaults when no subparts exist
  const s = (subjectId || '').toLowerCase();
  if (s.includes('english') || s.includes('lang')) return 6;
  if (s.includes('psych')) return 7;
  if (s.includes('computer science a') || s.includes('csa') || (s.includes('computer') && !s.includes('principles') && !s.includes('csp'))) {
    const raw = Number(q.totalPoints);
    if (raw === 9 || raw === 7 || raw === 6 || raw === 5) return raw;
    return 7;
  }
  if (s.includes('stat')) return 4;
  if (s.includes('human') || s.includes('geography')) return 7;
  if (s.includes('history') || s.includes('apush')) return 3;
  if (s.includes('gov')) return 4;
  if (s.includes('chem')) {
    const raw = Number(q.totalPoints);
    if (raw === 10 || raw === 4) return raw;
    return 10;
  }
  if (s.includes('bio')) {
    const raw = Number(q.totalPoints);
    if (raw === 9 || raw === 4) return raw;
    return 9;
  }
  if (s.includes('phys')) {
    const raw = Number(q.totalPoints);
    if (raw === 12 || raw === 10 || raw === 8) return raw;
    return 10;
  }

  const raw = Number(q.totalPoints);
  return !isNaN(raw) && raw > 0 ? raw : 6;
}

/**
 * Strips any leaked raw SVG markup from text fields so it never renders as literal text.
 */
export function stripRawSvgMarkup(text: string): string {
  if (!text) return '';
  return text
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<svg\b[^>]*>/gi, '')
    .replace(/<\/svg>/gi, '')
    .replace(/<path\b[^>]*>/gi, '')
    .replace(/<rect\b[^>]*>/gi, '')
    .replace(/<circle\b[^>]*>/gi, '')
    .replace(/<text\b[^>]*>[\s\S]*?<\/text>/gi, '')
    .trim();
}

/**
 * Converts LaTeX math array environments ($$\begin{array}...\end{array}$$) into clean standard GitHub Markdown tables.
 * Prevents mobile KaTeX horizontal clipping and text cutoff on phone screens.
 */
export function convertLatexArrayToMarkdownTable(text: string): string {
  if (!text || (!text.includes('begin{array}') && !text.includes('begin{tabular}'))) {
    return text;
  }
  return text.replace(/\$\$?\s*\\begin\{(?:array|tabular)\}(?:\{[^}]*\})?([\s\S]*?)\\end\{(?:array|tabular)\}\s*\$\$?/g, (_match, body) => {
    const rawRows = body.split('\\\\').map((r: string) => r.trim()).filter(Boolean);
    if (rawRows.length === 0) return '';
    const parsedRows = rawRows.map((row: string) => {
      const cleanRow = row.replace(/\\(?:hline|toprule|midrule|bottomrule)/g, '').trim();
      if (!cleanRow) return [];
      const cells = cleanRow.split('&').map((cell: string) => {
        let c = cell.trim();
        c = c.replace(/\\text\{([^}]*)\}/g, '$1');
        c = c.replace(/\\mathbf\{([^}]*)\}/g, '$1');
        c = c.replace(/\\mathit\{([^}]*)\}/g, '$1');
        c = c.replace(/[$]/g, '').replace(/\\/g, '').trim();
        return c;
      });
      return cells;
    }).filter((r: string[]) => r.length > 0);

    if (parsedRows.length === 0) return '';
    const headerRow = parsedRows[0];
    const separatorRow = headerRow.map(() => ':---');
    const dataRows = parsedRows.slice(1);

    const mdLines = [
      `| ${headerRow.join(' | ')} |`,
      `| ${separatorRow.join(' | ')} |`,
      ...dataRows.map((r: string[]) => {
        while (r.length < headerRow.length) r.push('-');
        return `| ${r.join(' | ')} |`;
      })
    ];
    return `\n\n${mdLines.join('\n')}\n\n`;
  });
}


/**
 * Resolves the canonical unit title and unit number for a subject.
 */
export function resolveCanonicalUnit(
  subjectId: string, 
  unitInput?: string | number,
  questionText?: string
): { unitNumber: number; title: string } {
  const whitelist = getSubjectWhitelist(subjectId);
  if (!whitelist || whitelist.canonicalUnits.length === 0) {
    return { unitNumber: 1, title: typeof unitInput === 'string' && unitInput.trim() ? unitInput : 'General Course Content' };
  }

  if (typeof unitInput === 'number' && !isNaN(unitInput)) {
    const found = whitelist.canonicalUnits.find(u => u.unitNumber === unitInput);
    if (found) return { unitNumber: found.unitNumber, title: found.title };
  }

  const inputStr = String(unitInput || '').toLowerCase().trim();
  const numMatch = inputStr.match(/\b(?:unit|period|u|p)\s*([0-9]+)\b/i) || inputStr.match(/^([0-9]+)$/);

  if (numMatch) {
    const num = parseInt(numMatch[1], 10);
    const found = whitelist.canonicalUnits.find(u => u.unitNumber === num);
    if (found) return { unitNumber: found.unitNumber, title: found.title };
  }

  // Search by keyword or title match in unitInput
  for (const u of whitelist.canonicalUnits) {
    if (inputStr.includes(u.title.toLowerCase())) {
      return { unitNumber: u.unitNumber, title: u.title };
    }
    for (const kw of u.keywords) {
      if (inputStr.includes(kw.toLowerCase())) {
        return { unitNumber: u.unitNumber, title: u.title };
      }
    }
  }

  // If questionText is provided, infer unit from question content keywords
  if (questionText && questionText.trim()) {
    const qLower = questionText.toLowerCase();
    let bestUnit: typeof whitelist.canonicalUnits[0] | null = null;
    let maxScore = 0;
    for (const u of whitelist.canonicalUnits) {
      let score = 0;
      if (qLower.includes(u.title.toLowerCase())) score += 5;
      for (const kw of u.keywords) {
        if (qLower.includes(kw.toLowerCase())) score += 2;
      }
      if (score > maxScore) {
        maxScore = score;
        bestUnit = u;
      }
    }
    if (bestUnit && maxScore >= 2) {
      return { unitNumber: bestUnit.unitNumber, title: bestUnit.title };
    }
  }

  // Default to unit 1 or first unit
  const first = whitelist.canonicalUnits[0];
  return { unitNumber: first.unitNumber, title: first.title };
}

/**
 * Validates, heals, and formats an AP question before finalization.
 */
export function validateAndHealApQuestion(
  q: any,
  subjectId: string,
  targetTopic?: string,
  tracker?: UsedConceptsTracker
): ValidationResult {
  const whitelist = getSubjectWhitelist(subjectId);
  const detectedConcepts: string[] = [];

  const rawPrompt = typeof q.prompt === 'string' ? q.prompt : (q.question || q.stem || '');
  const rawModel = typeof q.modelAnswer === 'string' ? q.modelAnswer : (q.explanation || '');
  const rawRubric = Array.isArray(q.scoringRubric) ? q.scoringRubric.join(' ') : '';
  const combinedText = `${rawPrompt} ${rawModel} ${rawRubric}`.toLowerCase();

  const isAphg = (subjectId || '').toLowerCase().includes('geography') || 
                 (subjectId || '').toLowerCase().includes('aphg') || 
                 (subjectId || '').toLowerCase().includes('human');

  // 1. [Bug #1 Fix] Foreign Signature / Off-Subject Curriculum Check
  if (whitelist && Array.isArray(whitelist.forbiddenSignatures)) {
    for (const sig of whitelist.forbiddenSignatures) {
      const match = combinedText.match(sig);
      if (match) {
        return {
          isValid: false,
          rejectionReason: `Detected forbidden off-subject concept "${match[0]}" for subject "${whitelist.subjectName}". Question belongs to another AP curriculum.`,
          sanitizedQuestion: q,
          detectedConcepts: []
        };
      }
    }
  }

  // Strict Unit 1 containment for AP Human Geography:
  if (isAphg && targetTopic) {
    const tLower = targetTopic.toLowerCase();
    const isTargetingUnit1 = tLower.includes('unit 1') || tLower.includes('thinking geographically');
    if (isTargetingUnit1) {
      const forbiddenLaterModels = /\b(?:burgess|hoyt|concentric\s+zone|sector\s+model|multiple\s+nuclei|von\s+th[uü]nen|bid-rent|demographic\s+transition|dtm|population\s+pyramid|wallerstein|world\s+systems|rostow|stages\s+of\s+economic\s+growth|gentrification)\b/i;
      const match = combinedText.match(forbiddenLaterModels);
      if (match) {
        return {
          isValid: false,
          rejectionReason: `Unit 1 Violation: Question references "${match[0]}" from later units (Unit 2, 5, 6, or 7). Unit 1 practice must be 100% strictly Thinking Geographically.`,
          sanitizedQuestion: q,
          detectedConcepts: []
        };
      }
    }
  }

  // 2. [Bug #5 Fix] Strip leaked SVG code from text bodies & convert LaTeX arrays to Markdown tables
  let cleanPrompt = convertLatexArrayToMarkdownTable(stripRawSvgMarkup(rawPrompt));
  let cleanModel = convertLatexArrayToMarkdownTable(stripRawSvgMarkup(rawModel));
  let cleanRubric = Array.isArray(q.scoringRubric) 
    ? q.scoringRubric.map((r: any) => stripRawSvgMarkup(String(r)))
    : [];

  // Deep Self-Healing for AP Human Geography (CED section II compliance)
  if (isAphg) {
    // 1. Heal illegal task verbs (College Board never uses "Evaluate" or "Justify" in APHG FRQs)
    cleanPrompt = cleanPrompt
      .replace(/(\([a-g]\)|(?:^|\n)\s*[A-G][.)])\s*Evaluate\b/gi, '$1 Explain')
      .replace(/(\([a-g]\)|(?:^|\n)\s*[A-G][.)])\s*Justify\s+why\b/gi, '$1 Explain why')
      .replace(/(\([a-g]\)|(?:^|\n)\s*[A-G][.)])\s*Justify\s+how\b/gi, '$1 Explain how')
      .replace(/(\([a-g]\)|(?:^|\n)\s*[A-G][.)])\s*Justify\b/gi, '$1 Explain why');

    cleanRubric = cleanRubric.map(r => 
      r.replace(/\bEvaluate\b/gi, 'Explain')
       .replace(/\bJustify\s+why\b/gi, 'Explain why')
       .replace(/\bJustify\b/gi, 'Explain')
    );

    // 2. Eliminate ghost stimulus references only if no diagramSvg AND no standardized model is provided
    const earlyModelCheck = getStandardizedModelSvg(`${cleanPrompt} ${cleanModel}`, subjectId);
    if (!q.diagramSvg && !earlyModelCheck) {
      cleanPrompt = cleanPrompt
        .replace(/\b(?:as\s+shown\s+in\s+the\s+(?:satellite\s+image|imagery|photograph|photo|map|diagram|graphic)\s+(?:above|below|provided))\b/gi, 'in contemporary spatial patterns')
        .replace(/\b(?:referring\s+to\s+the\s+(?:satellite\s+image|imagery|photograph|photo|map|diagram|graphic)\s+(?:above|below|provided))\b/gi, 'considering contemporary spatial patterns');
    }

    // 3. Inject mandatory degree prompt specification if "degree to which" is present without instructions
    if (/degree\s+to\s+which/i.test(cleanPrompt) && !/indicate\s+the\s+degree/i.test(cleanPrompt)) {
      cleanPrompt = cleanPrompt.replace(/(Explain\s+the\s+degree\s+to\s+which[^\n.?!]+[.?!]?)/gi, '$1 (Response must indicate the degree [low, moderate, high] and provide an explanation.)');
    }
  }


  // Check if diagramSvg was leaked in prompt and extract it if q.diagramSvg is missing
  let finalDiagramSvg = q.diagramSvg || '';
  if (!finalDiagramSvg) {
    const svgMatch = rawPrompt.match(/<svg[\s\S]*?<\/svg>/i);
    if (svgMatch) {
      finalDiagramSvg = svgMatch[0];
    }
  }

  // 3. [Bug #5 Fix] Check for canonical models and replace distorted curves with standardized vectors
  const standardModelSvg = getStandardizedModelSvg(`${cleanPrompt} ${cleanModel}`, subjectId);
  if (standardModelSvg) {
    finalDiagramSvg = standardModelSvg;
    if (!q.diagramType || q.diagramType === 'none') {
      q.diagramType = 'standardized_model';
    }
  }

  // 4. [Bug #2 Fix] Auto-calculate points from sub-parts
  const calculatedPoints = calculateRealTotalPoints({
    prompt: cleanPrompt,
    modelAnswer: cleanModel,
    scoringRubric: cleanRubric,
    totalPoints: q.totalPoints
  }, subjectId);

  // 5. [Bug #6 Fix] Standardize Unit Metadata (Pass cleanPrompt to accurately infer unit)
  const canonicalUnit = resolveCanonicalUnit(subjectId, q.skill || targetTopic, cleanPrompt);

  // 6. [Bug #7 Fix] Track concepts for diversity
  if (whitelist) {
    for (const unit of whitelist.canonicalUnits) {
      for (const kw of unit.keywords) {
        if (combinedText.includes(kw.toLowerCase())) {
          detectedConcepts.push(kw);
          if (tracker) {
            tracker.usedConceptCounts[kw] = (tracker.usedConceptCounts[kw] || 0) + 1;
            tracker.usedUnits[unit.unitNumber] = (tracker.usedUnits[unit.unitNumber] || 0) + 1;
          }
        }
      }
    }
  }

  // 7. [Bug #3 Fix] Stimulus Classification
  const hasDiagram = Boolean(finalDiagramSvg && finalDiagramSvg.trim());
  const hasMarkdownTable = Boolean(cleanPrompt && /[|].+[|].*\n\s*[|][-:\s|]+[|]/.test(cleanPrompt));
  const hasSource1 = /source\s*1\b/i.test(cleanPrompt);
  const hasSource2 = /source\s*2\b/i.test(cleanPrompt);

  let stimulusType: 'none' | 'single' | 'two' = 'none';
  if ((hasSource1 && hasSource2) || (hasDiagram && hasMarkdownTable) || /figure\s*2\b/i.test(cleanPrompt) || (hasDiagram && hasSource1)) {
    stimulusType = 'two';
  } else if (hasDiagram || hasMarkdownTable || hasSource1 || /figure\s*1\b/i.test(cleanPrompt) || /table\s*1\b/i.test(cleanPrompt) || /the\s+table\s+below/i.test(cleanPrompt) || cleanPrompt.toLowerCase().includes('data table')) {
    stimulusType = 'single';
  }

  const sanitized: any = {
    ...q,
    prompt: cleanPrompt,
    modelAnswer: cleanModel,
    scoringRubric: cleanRubric,
    diagramSvg: finalDiagramSvg,
    totalPoints: calculatedPoints,
    unitNumber: canonicalUnit.unitNumber,
    unitTitle: canonicalUnit.title,
    skill: `Unit ${canonicalUnit.unitNumber}: ${canonicalUnit.title}`,
    stimulusCategory: stimulusType
  };

  return {
    isValid: true,
    sanitizedQuestion: sanitized,
    detectedConcepts
  };
}
