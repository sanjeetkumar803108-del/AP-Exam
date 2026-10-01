/**
 * AP Multi-Stage Verification & Quality Gate Engine
 * 
 * Implements the rigorous EdTech multi-stage verification architecture:
 * 1. Blueprint & Scope Verification: Strict College Board CED curriculum boundary enforcement.
 * 2. Mathematical & Feasibility Verifier: Checks limits, domains, physical feasibility, and step parity.
 * 3. Blind Solver Consistency Gate: Ensures prompts are fully self-contained without missing stimuli.
 * 4. Golden Question Vault: Persistent bank of pristine, pre-verified questions with 0ms instant fallback.
 */

import { getSubjectWhitelist } from '../data/apSubjectWhitelists';
import { countSubParts, stripRawSvgMarkup, resolveCanonicalUnit, calculateRealTotalPoints, convertLatexArrayToMarkdownTable } from './apSubjectValidator';


export interface MultiStageResult {
  passed: boolean;
  stageFailed?: 'SCOPE' | 'MATH_FEASIBILITY' | 'BLIND_SOLVER' | 'RUBRIC_MISMATCH';
  reasons: string[];
  repairedQuestion: any;
  replacedFromGoldenVault?: boolean;
}

/**
 * Stage 1: Mathematical & Physical Feasibility Verifier
 */
export function verifyMathAndFeasibility(q: any, subjectId: string): { isValid: boolean; issues: string[] } {
  const issues: string[] = [];
  const s = (subjectId || '').toLowerCase();
  const prompt = String(q.prompt || q.question || '');
  const modelAnswer = String(q.modelAnswer || '');
  const combined = `${prompt} ${modelAnswer}`;

  // 1. Division by zero in definite intervals
  // e.g. integral from 0 to 4 of 1/(x-2) without improper designation
  if (s.includes('calculus') && !s.includes('bc')) {
    const asymptoteMatch = prompt.match(/\/(?:x\s*-\s*([0-9]+))/i);
    if (asymptoteMatch) {
      const c = parseInt(asymptoteMatch[1], 10);
      const intervalMatch = prompt.match(/\[\s*([0-9]+)\s*,\s*([0-9]+)\s*\]/);
      if (intervalMatch) {
        const a = parseInt(intervalMatch[1], 10);
        const b = parseInt(intervalMatch[2], 10);
        if (c > a && c < b) {
          issues.push(`Vertical asymptote at x=${c} lies within interval [${a}, ${b}] without improper integral treatment (BC only).`);
        }
      }
    }
  }

  // 2. Physical impossibility checks
  // (e.g. depth of liquid greater than height of container, or negative mass/speed)
  const depthMatch = combined.match(/depth\s+(?:is|=)\s+([0-9]+(?:\.[0-9]+)?)/i);
  const heightMatch = combined.match(/height\s+(?:is|=)\s+([0-9]+(?:\.[0-9]+)?)/i);
  if (depthMatch && heightMatch) {
    const depth = parseFloat(depthMatch[1]);
    const height = parseFloat(heightMatch[1]);
    if (depth > height) {
      issues.push(`Physical impossibility: Liquid depth (${depth}) exceeds container height (${height}).`);
    }
  }

  // 3. Stated subparts vs Model Answer parity
  const promptParts = countSubParts(prompt);
  const answerParts = countSubParts(modelAnswer);
  if (promptParts.count > 0 && answerParts.count > 0) {
    if (promptParts.count !== answerParts.count) {
      issues.push(`Subpart count mismatch: Prompt has ${promptParts.count} parts (${promptParts.labels.join(',')}) but model answer addresses ${answerParts.count} parts (${answerParts.labels.join(',')}).`);
    }
  }

  // 4. AP Calculus BC Strict Verification Gate
  if (s.includes('bc') || s.includes('calculus bc')) {
    // Ratio Test endpoint check: If series interval of convergence is asked, model answer must test endpoints
    if (combined.includes('interval of convergence') || combined.includes('ratio test')) {
      const testsEndpoints = /(?:endpoint|x\s*=\s*-?\d+|converges\s+at|diverges\s+at)/i.test(modelAnswer);
      if (!testsEndpoints) {
        issues.push("Ratio Test Endpoint Omission: Finding interval of convergence requires explicitly testing both endpoints.");
      }
    }
  }

  // 5. AP Human Geography (APHG) Strict Double-Verification Gate:
  if (s.includes('human') || s.includes('geography') || s.includes('aphg')) {
    // 7-part College Board strict requirement
    if (promptParts.count > 0 && promptParts.count !== 7) {
      issues.push(`AP Human Geography 7-Part Violation: Prompt contains ${promptParts.count} parts (${promptParts.labels.join(',')}), but College Board CED strictly mandates exactly 7 parts (A through G).`);
    }
    // Demographic plausibility check
    const tfrRegex = /(?:tfr|fertility\s+rate)\s*(?:is|=|:)?\s*([0-9]+(?:\.[0-9]+)?)/gi;
    let tfrMatch: RegExpExecArray | null;
    while ((tfrMatch = tfrRegex.exec(combined)) !== null) {
      const val = parseFloat(tfrMatch[1]);
      if (val > 10.0 || (val < 0.5 && val > 0)) {
        issues.push(`Demographic data hallucination: TFR value ${val} violates real-world demographic boundaries (realistic range: 0.8 to 8.5).`);
      }
    }
    // Check for impossible percentages > 100%
    const pctRegex = /([0-9]+(?:\.[0-9]+)?)\s*%/g;
    let pctMatch: RegExpExecArray | null;
    while ((pctMatch = pctRegex.exec(combined)) !== null) {
      const val = parseFloat(pctMatch[1]);
      if (val > 100.0 && !combined.includes('increase') && !combined.includes('growth') && !combined.includes('change')) {
        issues.push(`Percentage hallucination: Proportional demographic share ${val}% exceeds 100%.`);
      }
    }
  }

  // 6. AP Chemistry Strict Verification Gate:
  if (s.includes('chemistry') || s.includes('chem')) {
    // Negative Kelvin check: Temperature in Kelvin cannot be negative
    const kelvinMatch = combined.match(/-\s*([0-9]+(?:\.[0-9]+)?)\s*(?:K\b|kelvin)/i);
    if (kelvinMatch) {
      issues.push(`Absolute temperature violation: Negative Kelvin temperature (-${kelvinMatch[1]} K) is physically impossible.`);
    }
    // Pure solids in K_sp denominator check
    if (combined.includes('k_sp') || combined.includes('ksp')) {
      const solidDenominatorMatch = combined.match(/k_?sp\s*=\s*\[[^\]]+\]\s*\/\s*\[/i);
      if (solidDenominatorMatch) {
        issues.push("K_sp expression violation: Pure solids must NEVER appear in the denominator of a solubility product constant expression.");
      }
    }
    // Thermodynamic unit mismatch: Delta G = Delta H - T Delta S where Delta S is not converted from J to kJ
    if ((combined.includes('\\delta g') || combined.includes('delta g')) &&
        (combined.includes('\\delta h') || combined.includes('delta h')) &&
        (combined.includes('\\delta s') || combined.includes('delta s'))) {
      const hasUnitConversion = /(?:\/\s*1000|10\^?-3|0\.001|\*\s*1000|10\^3)/.test(modelAnswer);
      if (!hasUnitConversion && (modelAnswer.includes('kJ') || modelAnswer.includes('kj')) && (modelAnswer.includes('J/') || modelAnswer.includes('j/'))) {
        issues.push("Thermodynamic unit inconsistency: Gibbs free energy calculation requires converting Delta S from J/(mol*K) to kJ/(mol*K) (dividing by 1000).");
      }
    }
  }

  // 7. AP Biology Strict Verification Gate:
  if (s.includes('biology') || s.includes('bio')) {
    // Null hypothesis check: If null hypothesis is requested, it must strictly state "no effect" or "no difference"
    if (combined.includes('null hypothesis')) {
      const statesNoEffectOrDiff = /(?:no\s+effect|no\s+difference|not\s+affect|does\s+not\s+differ|no\s+significant\s+difference|equal|independent\s+of)/i.test(modelAnswer);
      if (!statesNoEffectOrDiff) {
        issues.push("Null Hypothesis Violation: Null hypothesis must state that the independent variable has NO effect or that there is NO difference between groups.");
      }
    }
    // Codon math check: If nucleotide to amino acid calculation is present, nucleotide count must be divisible by 3
    const nucleotideMatch = combined.match(/(\d+)\s*(?:nucleotides?|base\s*pairs?|bp)\b/i);
    const aminoAcidMatch = combined.match(/(\d+)\s*(?:amino\s*acids?|residues?)\b/i);
    if (nucleotideMatch && aminoAcidMatch && combined.includes('cod')) {
      const nuc = parseInt(nucleotideMatch[1], 10);
      const aa = parseInt(aminoAcidMatch[1], 10);
      if (nuc % 3 !== 0) {
        issues.push(`Codon Translation Math Violation: Nucleotide count ${nuc} is not divisible by 3 (each codon requires exactly 3 nucleotides).`);
      }
      if (Math.abs(Math.floor(nuc / 3) - aa) > 2) {
        issues.push(`Codon Math Discrepancy: ${nuc} nucleotides should translate to approximately ${Math.floor(nuc / 3)} amino acids, but ${aa} was stated.`);
      }
    }
    // Allele frequency range check: 0 <= p, q <= 1
    const alleleFreqMatch = combined.match(/\b(?:p|q)\s*=\s*([0-9]+(?:\.[0-9]+)?)/i);
    if (alleleFreqMatch) {
      const freq = parseFloat(alleleFreqMatch[1]);
      if (freq > 1.0 || freq < 0.0) {
        issues.push(`Allele Frequency Violation: Hardy-Weinberg allele frequency p or q (${freq}) must be between 0.0 and 1.0.`);
      }
    }
    // Standard error non-negativity
    if (combined.includes('se_') || combined.includes('standard error') || combined.includes('error bar')) {
      const negativeSeMatch = combined.match(/(?:-\s*[0-9]+(?:\.[0-9]+)?)\s*(?:se|standard error)/i);
      if (negativeSeMatch) {
        issues.push("Standard Error Violation: Standard error cannot be negative.");
      }
    }
  }

  // 8. AP Physics 1 Strict Verification Gate:
  if (s.includes('physics 1') || s.includes('phys')) {
    // Conservation of momentum when net external force is zero
    if (combined.includes('collision') || combined.includes('collides')) {
      if ((combined.includes('no net external force') || combined.includes('frictionless surface') || combined.includes('horizontal surface')) && combined.includes('momentum')) {
        const statesMomentumChanges = /(?:momentum\s+(?:decreases|increases|changes|is\s+not\s+conserved))/i.test(modelAnswer);
        if (statesMomentumChanges && !combined.includes('external force')) {
          issues.push("Conservation of Momentum Violation: Horizontal momentum must remain constant during collisions if net external force is zero.");
        }
      }
    }
    // Negative kinetic energy check
    const negativeKeMatch = combined.match(/(?:kinetic\s+energy|K|KE)\s*(?:is|=)\s*-\s*([0-9]+(?:\.[0-9]+)?)\s*J/i);
    if (negativeKeMatch) {
      issues.push(`Kinetic Energy Violation: Kinetic energy cannot be negative (-${negativeKeMatch[1]} J).`);
    }
    // Free fall acceleration cannot exceed g without driving force
    const freeFallAccelMatch = combined.match(/(?:free\s*fall|in\s+the\s+air|projectile).*?acceleration\s*(?:is|=)\s*([0-9]+(?:\.[0-9]+)?)\s*m\/s\^?2/i);
    if (freeFallAccelMatch) {
      const aVal = parseFloat(freeFallAccelMatch[1]);
      if (aVal > 11.0) {
        issues.push(`Kinematics Violation: Free-fall vertical acceleration (${aVal} m/s^2) cannot exceed g (9.8 m/s^2) without an external driving force.`);
      }
    }
    // Energy bar chart conservation sum check
    if (combined.includes('energy bar chart') || combined.includes('figure 2 and figure 3')) {
      const sumMatch = combined.match(/(?:sum|total\s+height|total\s+energy).*?equals\s*([0-9]+E_?0)/i);
      if (sumMatch && !modelAnswer.includes(sumMatch[1])) {
        issues.push(`Energy Bar Chart Conservation Violation: Sum of bars across all states must equal declared total energy (${sumMatch[1]}).`);
      }
    }
  }

  // 9. AP Macroeconomics Strict Verification Gate:
  if (s.includes('macro') || s.includes('economics') || s.includes('econ')) {
    // 1. Unemployment Rate formula consistency: Actual Rate = Natural Rate + Cyclical Rate
    const naturalMatch = combined.match(/natural\s+(?:rate\s+of\s+)?unemployment(?:\s+rate)?\s*(?:is|=|:)?\s*([0-9]+(?:\.[0-9]+)?)\s*%/i);
    const cyclicalMatch = combined.match(/cyclical\s+unemployment(?:\s+rate)?\s*(?:is|=|:)?\s*([0-9]+(?:\.[0-9]+)?)\s*%/i);
    const actualMatch = combined.match(/actual\s+unemployment(?:\s+rate)?\s*(?:is|=|:)?\s*([0-9]+(?:\.[0-9]+)?)\s*%/i);

    if (naturalMatch && cyclicalMatch && actualMatch) {
      const nat = parseFloat(naturalMatch[1]);
      const cyc = parseFloat(cyclicalMatch[1]);
      const act = parseFloat(actualMatch[1]);
      const expectedActual = Math.round((nat + cyc) * 10) / 10;
      if (Math.abs(act - expectedActual) > 0.1) {
        issues.push(`Unemployment Rate Math Error: Actual unemployment rate (${act}%) must equal natural rate (${nat}%) + cyclical rate (${cyc}%) = ${expectedActual}%.`);
      }
    }

    // 2. Ample Reserves Tool Guardrail: In ample reserves, central bank changes administered rates / IOR, NOT bond buying/selling
    if (combined.includes('ample reserves')) {
      const proposesBondOperations = /(?:central\s+bank\s+(?:would|should|will)\s+(?:buy|sell|purchase)\s+bonds|open\s+market\s+operations\s+to\s+buy)/i.test(modelAnswer);
      if (proposesBondOperations) {
        issues.push("Ample Reserves Framework Violation: In a banking system with ample reserves, monetary policy is conducted via administered interest rates (Interest on Reserves / IORB), NOT open-market bond operations.");
      }
    }

    // 3. Multiplier Bounds: 0 < MPC < 1 and Spending Multiplier = 1 / (1 - MPC)
    const mpcMatch = combined.match(/(?:marginal\s+propensity\s+to\s+consume|mpc)\s*(?:is|=|:)?\s*([0-9]+(?:\.[0-9]+)?)/i);
    if (mpcMatch) {
      const mpcVal = parseFloat(mpcMatch[1]);
      if (mpcVal <= 0 || mpcVal >= 1.0) {
        issues.push(`MPC Bound Violation: Marginal Propensity to Consume (${mpcVal}) must strictly be between 0 and 1.`);
      }
    }

    // 4. Balance of Payments Identity: CA + CFA = 0
    if (combined.includes('capital and financial account') && (combined.includes('current account') || combined.includes('balance of payments'))) {
      if (combined.includes('current account') && combined.includes('deficit')) {
        const cfaDeficit = /(?:capital\s+and\s+financial\s+account|cfa).*?(?:move\s+into\s+deficit|in\s+deficit)/i.test(modelAnswer);
        if (cfaDeficit) {
          issues.push("Balance of Payments Violation: If the current account moves into deficit, the capital and financial account (CFA) must move into surplus (CA + CFA = 0).");
        }
      }
    }
  }

  // 10. AP English Language & Composition Strict Verification Gate:
  if (s.includes('english') || s.includes('lang')) {
    // Total points must be 6 (Row A: 1 pt, Row B: 4 pts, Row C: 1 pt)
    if (q.totalPoints && q.totalPoints !== 6) {
      issues.push(`AP English Language Score Scaling Violation: Section II essays are scored on a universal 6-point analytic scale (Row A: 1, Row B: 4, Row C: 1). Stated total points: ${q.totalPoints}.`);
    }

    // Synthesis Essay Checks
    if (prompt.includes('Synthesis') || prompt.includes('Source A') || combined.includes('synthesize at least')) {
      const hasSources = /Source\s+[A-D]/i.test(prompt);
      if (!hasSources) {
        issues.push("AP Lang Synthesis Violation: Synthesis prompts must include multiple distinct labeled sources (Sources A-F) embedded in the prompt.");
      }
    }

    // Rhetorical Analysis Checks
    if (prompt.includes('Rhetorical Analysis') || prompt.includes('rhetorical choices')) {
      const hasRhetoricalSituation = /(?:speech|article|letter|essay|address|author|speaker|audience|published)/i.test(prompt);
      if (!hasRhetoricalSituation) {
        issues.push("AP Lang Rhetorical Analysis Violation: Must provide a rich rhetorical situation (speaker, audience, context/exigence, and purpose).");
      }
    }
  }

  // 11. AP Psychology Strict Verification Gate:
  if (s.includes('psych')) {
    // Total points must be 7 for both Question 1 (AAQ) and Question 2 (EBQ)
    if (q.totalPoints && q.totalPoints !== 7) {
      issues.push(`AP Psychology Score Parity Violation: Both AAQ (Q1) and EBQ (Q2) are worth exactly 7 points each (14 points total). Stated total points: ${q.totalPoints}.`);
    }

    // Correlation coefficient validity check: -1.0 <= r <= +1.0
    const corrMatch = combined.match(/\br\s*=\s*(-?[0-9]+(?:\.[0-9]+)?)/i);
    if (corrMatch) {
      const rVal = parseFloat(corrMatch[1]);
      if (rVal < -1.0 || rVal > 1.0) {
        issues.push(`Statistical Calculation Violation: Correlation coefficient r (${rVal}) must be between -1.0 and +1.0.`);
      }
    }

    // Standard deviation non-negativity check
    const sdMatch = combined.match(/(?:standard\s+deviation|SD)\s*(?:is|=|:)?\s*(-[0-9]+(?:\.[0-9]+)?)/i);
    if (sdMatch) {
      issues.push(`Statistical Impossibility: Standard deviation cannot be negative (${sdMatch[1]}).`);
    }

    // p-value probability check: 0 < p <= 1.0
    const pMatch = combined.match(/\bp\s*(?:<|>|=)\s*([0-9]+(?:\.[0-9]+)?)/i);
    if (pMatch) {
      const pVal = parseFloat(pMatch[1]);
      if (pVal > 1.0 || pVal < 0) {
        issues.push(`Probability Value Hallucination: p-value (${pVal}) must be between 0 and 1.0.`);
      }
    }

    // AAQ Question Checks (Parts A-F)
    if (prompt.includes('ARTICLE ANALYSIS') || prompt.includes('AAQ') || prompt.includes('Article Analysis')) {
      const hasParts = countSubParts(prompt);
      if (hasParts.count > 0 && hasParts.count < 5) {
        issues.push(`AP Psychology AAQ Structure Violation: Article Analysis Questions require Parts A through F (Method, Operational Definition, Statistical Interpretation, Ethical Guideline, Generalizability, and Argumentation). Found only ${hasParts.count} parts.`);
      }
    }

    // EBQ Question Checks (3 Sources)
    if (prompt.includes('EVIDENCE-BASED') || prompt.includes('EBQ') || prompt.includes('Evidence-Based')) {
      const hasSources = prompt.includes('Source 1') && prompt.includes('Source 2') && prompt.includes('Source 3');
      if (!hasSources) {
        issues.push("AP Psychology EBQ Structure Violation: Evidence-Based Questions require 3 distinct empirical research summaries (Source 1, Source 2, and Source 3) embedded in the prompt.");
      }
    }
  }

  // 12. AP World History: Modern (WHAP) Strict Verification Gate:
  if (s.includes('world history') || s.includes('whap') || (s.includes('world') && s.includes('history')) || (s.includes('history') && !s.includes('u.s.') && !s.includes('us') && !s.includes('euro'))) {
    const title = String(q.title || '');
    const isDbq = prompt.includes('DOCUMENT-BASED') || prompt.includes('DBQ') || title.includes('DBQ');
    const isLeq = prompt.includes('LONG ESSAY') || prompt.includes('LEQ') || title.includes('LEQ');
    const isSaq = prompt.includes('SHORT-ANSWER') || prompt.includes('SAQ') || title.includes('SAQ') || title.includes('SHORT');

    if (isDbq) {
      if (q.totalPoints && q.totalPoints !== 7) {
        issues.push(`AP World History DBQ Score Parity Violation: Document-Based Questions must be scored on a 7-point rubric (Thesis, Context, Evidence 4+ docs 2 pts, Outside Evidence, Sourcing 2+ docs, Complexity). Stated points: ${q.totalPoints}.`);
      }
      const hasSevenDocs = /Document\s+1/i.test(prompt) && /Document\s+7/i.test(prompt);
      if (!hasSevenDocs) {
        issues.push("AP World History DBQ Source Violation: DBQ prompts must provide 7 distinct labeled documents (Document 1 through Document 7).");
      }
    } else if (isLeq) {
      if (q.totalPoints && q.totalPoints !== 6) {
        issues.push(`AP World History LEQ Score Parity Violation: Long Essay Questions must be scored on a 6-point rubric (Thesis, Context, Evidence 2 pts, Historical Reasoning, Complexity). Stated points: ${q.totalPoints}.`);
      }
    } else if (isSaq) {
      if (q.totalPoints && q.totalPoints !== 3) {
        issues.push(`AP World History SAQ Score Parity Violation: Short-Answer Questions must be scored on a 3-point scale (Parts A, B, C). Stated points: ${q.totalPoints}.`);
      }
      const hasThreeParts = countSubParts(prompt);
      if (hasThreeParts.count > 0 && hasThreeParts.count < 3) {
        issues.push(`AP World History SAQ Structure Violation: SAQs must have 3 distinct parts (A, B, and C). Found ${hasThreeParts.count} parts.`);
      }
    }

    // Chronology check: Anachronisms (e.g. steam engine, telegraph, or railroads before 1750, or Cold War before 1900)
    if (combined.includes('1200') && (combined.includes('1450') || combined.includes('1500'))) {
      if (/\b(?:steam\s+engine|railroad|telegraph|machine\s+gun|airplane|atomic\s+bomb|cold\s+war|soviet)\b/i.test(combined)) {
        issues.push("Historical Chronology Anachronism: Post-1750/Industrial/Modern technologies or entities mentioned in 1200–1450/1500 context.");
      }
    }
  }

  // 13. AP Computer Science A (Java) Strict Verification Gate:
  if (s.includes('computer science a') || s.includes('csa') || (s.includes('computer') && !s.includes('principles') && !s.includes('csp'))) {
    // Score scaling check: 2026 CED (7, 5, 6) or 2025 (9)
    if (q.totalPoints && ![9, 7, 6, 5].includes(q.totalPoints)) {
      issues.push(`AP Computer Science A Score Parity Violation: FRQ point value must be 9 (classic) or 7/5/6 (2026 CED). Stated points: ${q.totalPoints}.`);
    }

    // Class Design (Q2) checks
    if (prompt.includes('Class Design') || prompt.includes('class') || combined.includes('Write the complete') || combined.includes('public class')) {
      if (model.includes('class ') && !model.includes('private ')) {
        issues.push("AP CSA Encapsulation Violation: Instance variables in Class Design questions MUST be declared private.");
      }
    }

    // String comparison with == violation check
    const badStringEq = /"(?:[^"\\]|\\.)*"\s*==|==\s*"(?:[^"\\]|\\.)*"/i.test(model);
    if (badStringEq) {
      issues.push("AP CSA String Equality Violation: Strings in Java must be compared using .equals(), NOT ==.");
    }

    // 2D Array self-pairing guard check
    if (prompt.includes('2D') || prompt.includes('two-dimensional') || combined.includes('[][]')) {
      if (model.includes('r != row && c != col')) {
        issues.push("AP CSA 2D Array Fatal Bug: Self-pairing guard 'r != row && c != col' incorrectly excludes the entire row and column instead of just the single coordinate. Use '!(r == row && c == col)' or 'r != row || c != col'.");
      }
    }
  }

  return {
    isValid: issues.length === 0,
    issues
  };
}

/**
 * Stage 2: Blind Solver Consistency Gate
 * Verifies that the prompt is completely self-contained and not missing required visual stimuli.
 */
export function verifyBlindSolvability(q: any): { isSolvable: boolean; issues: string[] } {
  const issues: string[] = [];
  const prompt = String(q.prompt || q.question || '');
  const diagramSvg = q.diagramSvg || '';

  // Check for phantom graphs / grids:
  // If text refers to "graph shown below", "given in the figure", or "on the grid provided"
  // but there is zero SVG diagram and no explicit analytical formula/coordinates in the text:
  const refersToVisual = /\b(?:graph\s+shown\s+below|figure\s+shown\s+below|on\s+the\s+provided\s+grid|shown\s+in\s+the\s+figure)\b/i.test(prompt);
  const hasCoordinatesOrFormula = /\b(?:consisting\s+of|f\(x\)\s*=|from\s+x\s*=\s*-?\d+\s+to\s+x\s*=\s*-?\d+|line\s+segments?\s+and|semicircle|quarter\s+circle)\b/i.test(prompt);

  if (refersToVisual && !diagramSvg && !hasCoordinatesOrFormula) {
    issues.push("Unsolvable question stem: Refers to an external graph or figure but contains no analytical coordinates or diagramSvg.");
  }

  // AP Lang Synthesis check: Must contain actual Source text if prompt commands synthesizing
  if (/\b(?:synthesize\s+at\s+least\s+three\s+sources|refer\s+to\s+the\s+sources)\b/i.test(prompt) && !prompt.includes('Source A')) {
    issues.push("AP Lang Synthesis Blind Solver Failure: Prompt instructs student to synthesize sources, but Source text is not embedded in the prompt.");
  }

  // AP Psych EBQ check: Must contain 3 sources if prompt commands evidence synthesis
  if (/\b(?:Evidence-Based|EBQ|synthesize\s+the\s+three\s+sources)\b/i.test(prompt) && (!prompt.includes('Source 1') || !prompt.includes('Source 2') || !prompt.includes('Source 3'))) {
    issues.push("AP Psych EBQ Blind Solver Failure: Prompt instructs student to write an Evidence-Based Question, but Source 1, Source 2, or Source 3 summaries are missing.");
  }

  // AP World History DBQ check: Must contain Document 1 through 7 if prompt commands DBQ
  if (/\b(?:DBQ|Document-Based\s+Question)\b/i.test(prompt) && (!prompt.includes('Document 1') || !prompt.includes('Document 7'))) {
    issues.push("AP World History DBQ Blind Solver Failure: Prompt is a DBQ but Documents 1 through 7 are not fully embedded in the prompt.");
  }

  // Check for College Board task verbs (STEM, Social Sciences or Humanities directives)
  const hasTaskVerbs = /\b(?:find|calculate|determine|explain|justify|show\s+that|evaluate|identify|synthesize|analyze|argue|write\s+an\s+essay)\b/i.test(prompt);
  if (!hasTaskVerbs) {
    issues.push("Missing authentic College Board directive verbs (Find, Calculate, Determine, Justify, Explain, Synthesize, Analyze, Argue).");
  }

  return {
    isSolvable: issues.length === 0,
    issues
  };
}

/**
 * Stage 3: Curriculum Scope & Boundary Gate
 */
export function verifyCurriculumScope(q: any, subjectId: string): { inScope: boolean; reasons: string[] } {
  const reasons: string[] = [];
  const whitelist = getSubjectWhitelist(subjectId);
  const combined = `${q.prompt || ''} ${q.modelAnswer || ''} ${Array.isArray(q.scoringRubric) ? q.scoringRubric.join(' ') : ''}`.toLowerCase();

  // Check forbidden signatures
  if (whitelist && Array.isArray(whitelist.forbiddenSignatures)) {
    for (const sig of whitelist.forbiddenSignatures) {
      const match = combined.match(sig);
      if (match) {
        reasons.push(`Curriculum boundary breach: Contains forbidden concept "${match[0]}" for subject "${whitelist.subjectName}".`);
      }
    }
  }

  // Pure AP Calculus AB check:
  const s = (subjectId || '').toLowerCase();
  if (s.includes('calculus') && !s.includes('bc')) {
    const bcSignatures = ['taylor', 'maclaurin', 'ratio test', 'euler', 'logistic', 'polar', 'parametric', 'integration by parts'];
    for (const term of bcSignatures) {
      if (combined.includes(term)) {
        reasons.push(`AP Calculus AB Scope Failure: Contains BC-exclusive topic "${term}".`);
      }
    }
  }

  return {
    inScope: reasons.length === 0,
    reasons
  };
}

/**
 * Stage 4: AP Human Geography Specific Pedagogical & Geographic Model Verifier
 * Rigorously checks for geographical hallucinations, spatial model distortions, and DTM inversions.
 */
export function verifyAphgGeographicalAccuracy(q: any, targetTopic?: string): { isValid: boolean; issues: string[]; canHeal: boolean } {
  const issues: string[] = [];
  const prompt = String(q.prompt || q.question || '');
  const modelAnswer = String(q.modelAnswer || '');
  const combined = `${prompt} ${modelAnswer}`.toLowerCase();

  // 1. DTM Inversion Hallucinations:
  if (combined.includes('stage 2') && (combined.includes('low birth rate') || combined.includes('low cbr') || combined.includes('falling birth rate rapidly'))) {
    issues.push("DTM Stage 2 Hallucination: Stage 2 has high CBR with rapidly falling CDR, not low CBR.");
  }
  if ((combined.includes('stage 4') || combined.includes('stage 5')) && (combined.includes('rapid natural increase') || combined.includes('high nir') || combined.includes('rapidly expanding population'))) {
    issues.push("DTM Stage 4/5 Hallucination: Stage 4/5 exhibits low birth rates with zero or negative population growth.");
  }

  // 2. Von Thünen Model Ring Inversions:
  if (combined.includes('von thunen') || combined.includes('von thünen')) {
    if (combined.includes('dairy') && (combined.includes('outermost ring') || combined.includes('furthest ring') || combined.includes('ring 4'))) {
      issues.push("Von Thünen Spatial Inversion: Dairy farming is in the innermost ring closest to market due to perishability, not outer rings.");
    }
    if (combined.includes('ranching') && (combined.includes('innermost ring') || combined.includes('closest to market') || combined.includes('ring 1'))) {
      issues.push("Von Thünen Spatial Inversion: Extensive cattle ranching is located in outer rings where land rent per hectare is lowest.");
    }
  }

  // 3. Environmental Determinism vs Possibilism:
  if (combined.includes('environmental determinism') && (combined.includes('modern accepted theory') || combined.includes('current geographic consensus'))) {
    issues.push("Philosophical Hallucination: Environmental determinism is rejected in modern AP Human Geography as environmentally simplistic; possibilism is the accepted framework.");
  }

  // 4. Unit 1 Leakage Check:
  const tLower = (targetTopic || '').toLowerCase();
  if (tLower.includes('unit 1') || tLower.includes('thinking geographically')) {
    const laterModels = /\b(?:burgess|hoyt|concentric\s+zone|sector\s+model|multiple\s+nuclei|von\s+th[uü]nen|demographic\s+transition|dtm|population\s+pyramid|wallerstein|world\s+systems|rostow|stages\s+of\s+economic\s+growth|gentrification)\b/i;
    const match = combined.match(laterModels);
    if (match) {
      issues.push(`Unit 1 Boundary Breach: Question contains concept "${match[0]}" from later units (Unit 2-7).`);
      return { isValid: false, issues, canHeal: false };
    }
  }

  // 5. Sub-part Structure (Must be 7 parts A through G):
  const parts = countSubParts(prompt);
  let canHeal = true;
  if (parts.count > 0 && parts.count !== 7) {
    issues.push(`APHG FRQ Structure Anomaly: Found ${parts.count} subparts instead of the mandatory 7 parts (A through G).`);
    if (parts.count < 5) canHeal = false;
  }

  // 6. Prohibited Task Verbs (can be auto-healed)
  if (/\b(?:evaluate|justify)\b/i.test(prompt)) {
    issues.push("APHG Prohibited Verb Notice: Contains 'Evaluate' or 'Justify' (auto-healed to Explain).");
  }

  return {
    isValid: issues.length === 0,
    issues,
    canHeal: canHeal && !issues.some(i => i.includes('Boundary Breach') || i.includes('Hallucination') || i.includes('Inversion'))
  };
}

/**
 * Deep Self-Healer for AP Human Geography FRQs.
 * Auto-corrects verbs, restores missing Part G, converts LaTeX tables, and eliminates phantom stimuli.
 */
export function healAphgQuestion(q: any): any {
  let prompt = convertLatexArrayToMarkdownTable(stripRawSvgMarkup(String(q.prompt || q.question || '')));
  let modelAnswer = convertLatexArrayToMarkdownTable(stripRawSvgMarkup(String(q.modelAnswer || '')));
  let scoringRubric = Array.isArray(q.scoringRubric)
    ? q.scoringRubric.map((r: any) => stripRawSvgMarkup(String(r)))
    : [];

  // 1. Replace illegal task verbs with College Board approved verbs
  prompt = prompt
    .replace(/(\([a-g]\)|(?:^|\n)\s*[A-G][.)])\s*Evaluate\b/gi, '$1 Explain')
    .replace(/(\([a-g]\)|(?:^|\n)\s*[A-G][.)])\s*Justify\s+why\b/gi, '$1 Explain why')
    .replace(/(\([a-g]\)|(?:^|\n)\s*[A-G][.)])\s*Justify\s+how\b/gi, '$1 Explain how')
    .replace(/(\([a-g]\)|(?:^|\n)\s*[A-G][.)])\s*Justify\b/gi, '$1 Explain why');

  scoringRubric = scoringRubric.map(r =>
    r.replace(/\bEvaluate\b/gi, 'Explain')
     .replace(/\bJustify\s+why\b/gi, 'Explain why')
     .replace(/\bJustify\b/gi, 'Explain')
  );

  // 2. Remove phantom visual references if no diagramSvg is provided
  if (!q.diagramSvg) {
    prompt = prompt
      .replace(/\b(?:as\s+shown\s+in\s+the\s+(?:satellite\s+image|imagery|photograph|photo|map|diagram|graphic)\s+(?:above|below|provided))\b/gi, 'in contemporary spatial patterns')
      .replace(/\b(?:referring\s+to\s+the\s+(?:satellite\s+image|imagery|photograph|photo|map|diagram|graphic)\s+(?:above|below|provided))\b/gi, 'considering contemporary spatial patterns');
  }

  // 3. Inject mandatory degree prompt specification if "degree to which" is missing instructions
  if (/degree\s+to\s+which/i.test(prompt) && !/indicate\s+the\s+degree/i.test(prompt)) {
    prompt = prompt.replace(/(Explain\s+the\s+degree\s+to\s+which[^\n.?!]+[.?!]?)/gi, '$1 (Response must indicate the degree [low, moderate, high] and provide an explanation.)');
  }

  // 4. Auto-complete 6 parts -> 7 parts if Part G was omitted
  const parts = countSubParts(prompt);
  if (parts.count === 6 && !parts.labels.includes('g')) {
    prompt += "\n\nG. Explain the degree to which contemporary technological or economic changes accelerate this spatial process. (Response must indicate the degree [low, moderate, high] and provide an explanation.) [1 point]";
    modelAnswer += "\n\nPart G:\nModerate to high degree: Rapid advancements in digital communication and regional trade networks accelerate spatial interaction and diffusion, while local regulations and physical barriers can moderate the overall rate of adoption.";
    scoringRubric.push("Part (g) [1 point]: 1 point for indicating the degree (e.g. moderate/high) and providing a valid explanation of technological or economic acceleration.");
  }

  return {
    ...q,
    prompt,
    modelAnswer,
    scoringRubric,
    totalPoints: 7
  };
}

/**
 * Pristine Unit-by-Unit College Board Golden Question Vault for AP Human Geography (Units 1 to 7)
 */
export const APHG_UNIT_PRISTINE_VAULT: Record<number, any> = {
  1: {
    title: "FREE RESPONSE QUESTION 1  [7 POINTS]",
    prompt: "Geographic Information Systems (GIS) and remote sensing technologies have fundamentally transformed how spatial data is gathered, analyzed, and applied across scales.\n\n(a) Define the concept of a geographic information system (GIS). [1 point]\n\n(b) Describe ONE difference between reference maps and thematic maps. [1 point]\n\n(c) Explain how map projections, such as the Mercator projection, introduce spatial distortion. [1 point]\n\n(d) Describe ONE real-world application of remote sensing data in environmental monitoring or disaster management. [1 point]\n\n(e) Explain why geographers analyze spatial phenomena at different scales of analysis (e.g., local, national, global). [1 point]\n\n(f) Describe ONE difference between the geographic philosophies of environmental determinism and possibilism. [1 point]\n\n(g) Explain the degree to which crowdsourced geospatial data (volunteered geographic information) is reliable for municipal emergency disaster response. (Response must indicate the degree [low, moderate, high] and provide an explanation.) [1 point]",
    totalPoints: 7,
    unitNumber: 1,
    unitTitle: "Thinking Geographically",
    skill: "Unit 1: Geospatial Technologies & Spatial Thinking",
    modelAnswer: "Part A:\nA Geographic Information System (GIS) is a computer hardware and software system designed to capture, store, manipulate, analyze, manage, and present spatially referenced geographic data through multi-layered digital mapping.\n\nPart B:\nReference maps emphasize the precise absolute locations of geographic features (e.g., topographic contours, highways, water bodies, national boundaries), whereas thematic maps display the spatial distribution, density, or patterns of a specific theme, attribute, or phenomenon (e.g., choropleth maps of population density).\n\nPart C:\nBecause the Earth is a three-dimensional sphere, flattening it onto a two-dimensional surface mathematically distorts shape, area, distance, or direction. For example, the cylindrical Mercator projection preserves compass bearings (conformal) but severely distorts landmass area near the poles, making Greenland appear as large as South America.\n\nPart D:\nSatellite sensors and aerial drones gather multispectral infrared imagery to monitor deforestation rates in tropical rainforests, map the spread of active wildfires in real time, or assess flood inundation zones without physical contact.\n\nPart E:\nAnalyzing phenomena at different scales reveals patterns that may be invisible at another scale; for example, a national scale may obscure high local concentrations of poverty or wealth within specific census tracts (the aggregation problem).\n\nPart F:\nEnvironmental determinism claims that physical environment, climate, and topography directly dictate and constrain human cultural and social development, whereas possibilism asserts that the physical environment limits human choices, but humans possess the agency and technology to adapt and alter their surroundings.\n\nPart G:\nModerate degree: While crowdsourced data provides rapid, real-time ground-level updates on road closures and hazard locations from affected citizens, it often suffers from spatial bias, uneven smartphone access among vulnerable populations, and a lack of official verification.",
    scoringRubric: [
      "Part (a) [1 point]: 1 point for defining GIS as a computer-based system that layers, manages, and analyzes spatial data.",
      "Part (b) [1 point]: 1 point for describing reference maps showing absolute locations/features vs thematic maps displaying specific distributions/patterns.",
      "Part (c) [1 point]: 1 point for explaining flattening a 3D sphere distorts area, shape, distance, or direction (e.g., polar exaggeration on Mercator).",
      "Part (d) [1 point]: 1 point for describing drone/satellite imagery used for wildfire tracking, flood mapping, or deforestation monitoring.",
      "Part (e) [1 point]: 1 point for explaining different scales reveal local nuances hidden by national aggregated averages.",
      "Part (f) [1 point]: 1 point for describing environmental determinism as environment dictating human culture vs possibilism where humans adapt using agency and technology.",
      "Part (g) [1 point]: 1 point for stating degree (e.g. moderate/high) and explaining real-time citizen reporting balanced against data verification or demographic bias."
    ]
  },
  2: {
    title: "FREE RESPONSE QUESTION 2  [7 POINTS]",
    prompt: "The Demographic Transition Model (DTM) illustrates historical population changes in birth rates and death rates over time across different societies.\n\n| Country | Crude Birth Rate (CBR) | Crude Death Rate (CDR) | Total Fertility Rate (TFR) | Female Secondary Schooling (%) | GNI per Capita (USD) |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| Country X | 36 per 1,000 | 11 per 1,000 | 4.8 | 32% | $1,800 |\n| Country Y | 18 per 1,000 | 7 per 1,000 | 2.1 | 84% | $12,400 |\n| Country Z | 9 per 1,000 | 11 per 1,000 | 1.3 | 96% | $44,500 |\n\n(a) Using the data in the table, identify the country that is most clearly in Stage 2 of the Demographic Transition Model. [1 point]\n\n(b) Describe ONE demographic characteristic of a country in Stage 4 of the Demographic Transition Model. [1 point]\n\n(c) Using the data in the table, explain how female secondary schooling rates influence the Total Fertility Rate (TFR). [1 point]\n\n(d) Explain ONE economic consequence of an aging population for Country Z. [1 point]\n\n(e) Describe ONE pull factor that could attract migrants from Country X to Country Z. [1 point]\n\n(f) Explain how a high youth dependency ratio in Country X creates challenges for the provision of public services. [1 point]\n\n(g) Explain the degree to which pronatalist government policies (e.g., subsidized childcare, paid parental leave) are effective in raising birth rates in countries like Country Z. [1 point]",
    totalPoints: 7,
    unitNumber: 2,
    unitTitle: "Population & Migration Patterns",
    skill: "Unit 2: Demographic Transition & Development",
    modelAnswer: "Part A:\nCountry X is most clearly in Stage 2 of the DTM, evidenced by a very high crude birth rate (36 per 1,000) and a rapidly declining death rate (11 per 1,000), producing high natural increase.\n\nPart B:\nStage 4 countries exhibit low birth rates and low death rates that converge near replacement level, resulting in zero or near-zero natural population increase.\n\nPart C:\nAs female secondary schooling increases (e.g., from 32% in Country X to 96% in Country Z), women gain greater economic autonomy, delay marriage and childbirth, and gain better reproductive healthcare access, which causes the TFR to decline from 4.8 to 1.3.\n\nPart D:\nAn aging population increases the old-age dependency ratio, placing heavy fiscal strain on state-funded pension systems and healthcare infrastructure while shrinking the active income-tax-paying labor force.\n\nPart E:\nHigher wages and abundant employment opportunities in Country Z (GNI per capita $44,500 vs $1,800 in Country X) serve as powerful economic pull factors for migrant workers.\n\nPart F:\nA large youth cohort requires substantial public investment in elementary education, pediatric healthcare, and immunization programs, diverting scarce capital away from broader infrastructure modernization.\n\nPart G:\nModerate degree: While cash allowances and parental leave alleviate financial barriers for young families, deep cultural norms prioritizing dual-career households and high living/housing costs in advanced economies limit substantial long-term rebounds in TFR.",
    scoringRubric: [
      "Part (a) [1 point]: 1 point for identifying Country X with high CBR and falling CDR.",
      "Part (b) [1 point]: 1 point for describing low birth and death rates, stabilized population, or rectangular population pyramid.",
      "Part (c) [1 point]: 1 point for explaining delayed marriage, career entry, or reproductive autonomy reducing fertility.",
      "Part (d) [1 point]: 1 point for explaining rising pension/healthcare costs or workforce contraction.",
      "Part (e) [1 point]: 1 point for describing higher wages, better jobs, or superior living standards in the receiving nation.",
      "Part (f) [1 point]: 1 point for explaining strain on schools, teacher shortages, or diverted capital expenditure.",
      "Part (g) [1 point]: 1 point for stating degree (e.g. moderate/low) and explaining socio-economic barriers or modest fertility upticks."
    ]
  },
  3: {
    title: "FREE RESPONSE QUESTION 3  [7 POINTS]",
    prompt: "Cultural landscapes reflect the interaction between human societies and their natural physical environment over time through architecture, language, and sacred spaces.\n\n(a) Define the concept of cultural landscape. [1 point]\n\n(b) Describe ONE visible feature of the cultural landscape that reflects religious adherence. [1 point]\n\n(c) Describe ONE difference between universalizing religions and ethnic religions. [1 point]\n\n(d) Explain how European colonialism contributed to the global diffusion of dominant lingua francas, such as English or Spanish. [1 point]\n\n(e) Explain how the rapid diffusion of popular culture can lead to cultural divergence or uniform landscapes (placelessness). [1 point]\n\n(f) Describe ONE way indigenous communities actively preserve endangered minority languages. [1 point]\n\n(g) Explain the degree to which digital streaming media and internet social networks threaten the preservation of traditional folk cultural practices. (Response must indicate the degree [low, moderate, high] and provide an explanation.) [1 point]",
    totalPoints: 7,
    unitNumber: 3,
    unitTitle: "Cultural Patterns & Processes",
    skill: "Unit 3: Cultural Landscapes & Diffusion",
    modelAnswer: "Part A:\nThe cultural landscape is the visible human imprint and modification of the Earth's physical environment by a cultural group, including buildings, agricultural systems, toponyms, and religious architecture.\n\nPart B:\nProminent architectural elements such as church spires, mosque minarets, Hindu temple gopurams, or roadside Buddhist stupas serve as visible manifestations of religious identity on the landscape.\n\nPart C:\nUniversalizing religions (e.g., Christianity, Islam, Buddhism) actively seek converts globally through missionary work regardless of ethnic background, whereas ethnic religions (e.g., Judaism, Hinduism) are closely tied to a specific ethnic group or geographical location without active proselytization.\n\nPart D:\nColonial administrations established bureaucratic governance, legal codes, and public schooling entirely in the European colonizer's tongue, forcing local elites to adopt English or Spanish for commerce and statecraft, permanently embedding them as global lingua francas.\n\nPart E:\nPopular culture promotes standardized commercial architecture, franchise retail stores, and American fast-food chains, replacing unique regional building styles with uniform, homogenous commercial strips (placelessness).\n\nPart F:\nIndigenous communities establish immersion schools, publish bilingual children's literature, and organize cultural youth festivals to transmit ancestral oral vocabularies to younger generations.\n\nPart G:\nModerate to high degree: Constant exposure to mainstream global popular culture among youth accelerates adoption of global secular norms and consumer lifestyles, though digital archiving and online cultural groups also empower revitalization efforts.",
    scoringRubric: [
      "Part (a) [1 point]: 1 point for defining cultural landscape as the visible human imprint or modification of the physical environment.",
      "Part (b) [1 point]: 1 point for describing minarets, church steeples, shrines, or cemetery iconography.",
      "Part (c) [1 point]: 1 point for describing universalizing religions seeking global converts vs ethnic religions tied to a specific group/homeland.",
      "Part (d) [1 point]: 1 point for explaining colonial administrative control, missionary schooling, and trade establishing colonial tongues.",
      "Part (e) [1 point]: 1 point for explaining commercial franchises and mass consumerism producing standardized, homogenous landscapes (placelessness).",
      "Part (f) [1 point]: 1 point for describing immersion schools, bilingual curricula, or tribal elders recording oral histories.",
      "Part (g) [1 point]: 1 point for stating degree (e.g. moderate/high) and explaining youth assimilation into global consumer culture vs digital preservation tools."
    ]
  },
  4: {
    title: "FREE RESPONSE QUESTION 4  [7 POINTS]",
    prompt: "Devolutionary pressures and shifting political boundaries continually shape the contemporary geopolitical map.\n\n(a) Define the concept of devolution in a political geography context. [1 point]\n\n(b) Describe ONE spatial or geographical factor that can contribute to devolutionary pressures within a state. [1 point]\n\n(c) Describe ONE cultural or linguistic difference that can foster regional identity and autonomy movements. [1 point]\n\n(d) Explain how supranational organizations (e.g., the European Union) can challenge traditional state sovereignty. [1 point]\n\n(e) Explain ONE economic challenge that can emerge when a region attempts to achieve full political independence. [1 point]\n\n(f) Explain how physical geography (such as rugged mountain topography or insular archipelagos) can hinder political integration. [1 point]\n\n(g) Explain the degree to which modern telecommunications and digital social media can either promote national integration or accelerate regional political fragmentation. [1 point]",
    totalPoints: 7,
    unitNumber: 4,
    unitTitle: "Political Patterns & Processes",
    skill: "Unit 4: Devolution & Supranationalism",
    modelAnswer: "Part A:\nDevolution is the statutory delegation of powers from the central government of a sovereign state to govern at a subnational level, such as a regional or local administration, or the fracturing of a state into autonomous regional units.\n\nPart B:\nDistance decay and physical isolation from the national capital or core economic region can weaken administrative control and create feelings of political neglect among peripheral populations.\n\nPart C:\nDistinct ethno-linguistic groups with historic linguistic ties (such as Basque in Spain or Quebecois French in Canada) maintain distinct cultural landscapes and communal identity that motivate demands for self-determination.\n\nPart D:\nMember states of supranational organizations must surrender portions of their sovereignty by adopting common supranational trade regulations, environmental standards, or open-border agreements (e.g., Schengen Agreement).\n\nPart E:\nNewly independent regions often face trade barriers, loss of national subsidy transfers, disputes over resource ownership, and the significant cost of establishing independent currency and financial systems.\n\nPart F:\nComplex mountainous terrain or dispersed island chains create physical transport bottlenecks that isolate communities, making central government infrastructure delivery and policing difficult.\n\nPart G:\nHigh degree: Digital social media allows regionally concentrated minority groups to rapidly organize, document grievances, and disseminate separatist narratives globally, greatly accelerating devolutionary mobilization.",
    scoringRubric: [
      "Part (a) [1 point]: 1 point for defining devolution as the transfer of political power from central government to regional levels.",
      "Part (b) [1 point]: 1 point for describing spatial isolation, peripheral distance from core, or spatial friction.",
      "Part (c) [1 point]: 1 point for describing distinct language, religious minority status, or shared historical memory.",
      "Part (d) [1 point]: 1 point for explaining loss of policy autonomy to supranational treaties, judicial rulings, or common trade rules.",
      "Part (e) [1 point]: 1 point for explaining capital flight, currency instability, loss of federal subsidies, or tariff exposure.",
      "Part (f) [1 point]: 1 point for explaining physical barriers limiting transportation, communication, and administrative oversight.",
      "Part (g) [1 point]: 1 point for explaining the degree (e.g. high/moderate) with cause-and-effect reasoning on digital mobilization or counter-state networking."
    ]
  },
  5: {
    title: "FREE RESPONSE QUESTION 5  [7 POINTS]",
    prompt: "Agricultural land use is influenced by distance to markets and the economic rent of land, as conceptualized in spatial agricultural models.\n\nSource 1: Classical spatial modeling demonstrates that agricultural activities locate concentric to the central marketplace based on perishability, bulk, and land rent (Bid-Rent Theory).\nSource 2: Over the past three decades, rapid suburban expansion has converted thousands of hectares of prime agricultural land on the urban periphery into low-density residential subdivisions and commercial corridors.\n\n(a) Using Source 1, identify the agricultural land-use zone located immediately adjacent to the central market. [1 point]\n\n(b) Describe the primary assumption of the bid-rent theory regarding the relationship between land cost and distance from the urban market. [1 point]\n\n(c) Explain why intensive commercial agriculture (e.g., dairy and market gardening) occupies high-rent land closer to the market compared to extensive cattle ranching. [1 point]\n\n(d) Using Source 2, describe ONE negative consequence of converting prime agricultural land into suburban residential developments. [1 point]\n\n(e) Explain how technological advancements in refrigerated transport and highway freight systems have altered spatial land-use patterns described in Source 1. [1 point]\n\n(f) Describe ONE land-use planning policy (such as urban growth boundaries or greenbelts) used by municipal governments to preserve agricultural land from suburban sprawl. [1 point]\n\n(g) Explain the degree to which urban vertical farming and hydroponic greenhouse facilities can sustainably supply a metropolitan population's nutritional demands. [1 point]",
    totalPoints: 7,
    unitNumber: 5,
    unitTitle: "Agriculture & Rural Land-Use",
    skill: "Unit 5: Von Thünen & Agricultural Land Use",
    modelAnswer: "Part A:\nMarket gardening and fresh commercial dairy farming are located immediately adjacent to the central market.\n\nPart B:\nBid-rent theory assumes that land value and rent decrease with increasing distance from the central commercial market, as transportation costs increase.\n\nPart C:\nIntensive dairy and horticulture produce highly perishable goods with high weight-to-value ratios requiring rapid, frequent delivery to market; their high profit margins per acre allow them to outbid extensive cattle ranching for expensive inner-ring land.\n\nPart D:\nSuburban conversion leads to permanent loss of highly fertile topsoil, fragmentation of farm infrastructure, increased urban runoff, and higher food transportation distances.\n\nPart E:\nRefrigerated rail and trucking (reefer units) have dramatically reduced spoilage over long distances, allowing perishable dairy and produce to be grown in distant regions where land and labor are cheaper, expanding the rings outward.\n\nPart F:\nUrban growth boundaries (UGBs) legally designate a perimeter outside of which high-density residential development is prohibited, strictly preserving surrounding farmland and open greenbelts.\n\nPart G:\nLow to moderate degree: While vertical hydroponic facilities efficiently provide leafy greens and herbs with minimal water usage, they consume substantial electricity for artificial lighting and cannot efficiently produce calorie-dense staple crops (e.g., wheat, rice, corn) that form the bulk of human caloric intake.",
    scoringRubric: [
      "Part (a) [1 point]: 1 point for identifying market gardening, horticulture, or intensive dairy farming.",
      "Part (b) [1 point]: 1 point for describing inverse relationship between land cost and distance from market.",
      "Part (c) [1 point]: 1 point for explaining high perishability, daily transport needs, or high revenue per hectare outbidding extensive ranching.",
      "Part (d) [1 point]: 1 point for describing loss of fertile arable land, increased food miles, or habitat loss.",
      "Part (e) [1 point]: 1 point for explaining refrigeration allowing distant production where land costs are lower.",
      "Part (f) [1 point]: 1 point for describing greenbelts, urban growth boundaries, or agricultural preservation zoning.",
      "Part (g) [1 point]: 1 point for stating degree (e.g. low/moderate) and explaining high energy costs and inability to produce staple grain crops."
    ]
  },
  6: {
    title: "FREE RESPONSE QUESTION 6  [7 POINTS]",
    prompt: "Urban spatial structure, suburbanization, and renewal policies continuously transform metropolitan internal geographies.\n\n(a) Identify ONE spatial zone in the Burgess concentric zone model. [1 point]\n\n(b) Describe the primary assumption of the Hoyt sector model regarding how transportation corridors shape urban residential growth. [1 point]\n\n(c) Describe ONE historical consequence of institutional redlining on contemporary neighborhood wealth accumulation. [1 point]\n\n(d) Explain ONE economic cause of gentrification in inner-city metropolitan neighborhoods. [1 point]\n\n(e) Explain ONE negative social consequence of gentrification for long-term lower-income residents. [1 point]\n\n(f) Explain how smart-growth principles or transit-oriented development (TOD) reduce automobile dependency in urban areas. [1 point]\n\n(g) Explain the degree to which municipal greenbelts or urban growth boundaries are effective in curbing suburban sprawl. (Response must indicate the degree [low, moderate, high] and provide an explanation.) [1 point]",
    totalPoints: 7,
    unitNumber: 6,
    unitTitle: "Cities & Urban Land-Use",
    skill: "Unit 6: Internal Urban Structure & Gentrification",
    modelAnswer: "Part A:\nThe Central Business District (CBD), the Zone of Transition, the Zone of Independent Workers' Homes, the Zone of Better Residences, or the Commuter Zone.\n\nPart B:\nThe Hoyt sector model posits that cities develop in wedges or sectors radiating outward along major transportation corridors (rail lines, arterial highways), with high-income housing locating along the most desirable environmental avenues away from industrial rail corridors.\n\nPart C:\nRedlining systematically denied mortgage lending and investment in minority neighborhoods, locking residents out of homeownership equity and creating generational wealth disparities that persist today.\n\nPart D:\nSubstantial rent gaps between depressed inner-city land values and potential commercial returns attract private developers seeking inexpensive historic housing stock close to CBD employment.\n\nPart E:\nRising property valuations and escalating property taxes price out long-term working-class tenants, leading to displacement and dissolution of established neighborhood community bonds.\n\nPart F:\nTransit-oriented development clusters high-density, mixed-use commercial and residential spaces within a five-minute walk of rapid transit stations, allowing residents to meet daily needs and commute without personal motor vehicles.\n\nPart G:\nModerate to high degree: Legally enforced growth boundaries successfully prevent low-density tract housing on surrounding rural land and incentivize brownfield infill redevelopment, although they can also drive up inner-city housing prices.",
    scoringRubric: [
      "Part (a) [1 point]: 1 point for identifying CBD, zone of transition, or commuter zone.",
      "Part (b) [1 point]: 1 point for describing growth radiating outward along transportation axes (rail/highways).",
      "Part (c) [1 point]: 1 point for describing denial of mortgages preventing home equity and generational wealth accumulation.",
      "Part (d) [1 point]: 1 point for explaining rent gap, low initial property prices, or proximity to downtown professional jobs.",
      "Part (e) [1 point]: 1 point for explaining displacement of long-term tenants due to rising rents and property taxes.",
      "Part (f) [1 point]: 1 point for explaining compact pedestrian density around transit hubs reducing car trips.",
      "Part (g) [1 point]: 1 point for stating degree (e.g. moderate/high) and explaining greenbelt containment of sprawl balanced against increased housing costs."
    ]
  },
  7: {
    title: "FREE RESPONSE QUESTION 7  [7 POINTS]",
    prompt: "Spatial patterns of economic development and industrialization reflect uneven global integration, international trade, and shifting labor markets.\n\n(a) Define the economic concept of gross national income (GNI) per capita. [1 point]\n\n(b) Describe ONE difference between primary economic activities and tertiary economic activities. [1 point]\n\n(c) Describe ONE spatial characteristic of export processing zones (EPZs) or special economic zones (SEZs). [1 point]\n\n(d) Using Wallerstein's World Systems Theory, explain how core countries economically interact with peripheral countries. [1 point]\n\n(e) Explain how deindustrialization in traditional manufacturing regions (e.g., the American Rust Belt) impacts local employment structures. [1 point]\n\n(f) Describe ONE indicator used in the United Nations Human Development Index (HDI) other than GNI per capita. [1 point]\n\n(g) Explain the degree to which microloans and microfinance programs empower women economically in developing peripheral countries. (Response must indicate the degree [low, moderate, high] and provide an explanation.) [1 point]",
    totalPoints: 7,
    unitNumber: 7,
    unitTitle: "Industrial & Economic Development",
    skill: "Unit 7: World Systems & Economic Geography",
    modelAnswer: "Part A:\nGross National Income (GNI) per capita is the total domestic and foreign income generated by a country's residents and businesses divided by the total national population.\n\nPart B:\nPrimary economic activities involve direct extraction of natural resources from the earth (e.g., mining, agriculture, forestry), whereas tertiary activities involve providing services to individuals and businesses (e.g., retail, healthcare, financial management, education).\n\nPart C:\nEPZs are typically located near deep-water maritime ports, international borders, or major airports to minimize transport costs and offer tariff-free customs incentives and subsidized utility infrastructure to multinational corporations.\n\nPart D:\nCore countries exploit peripheral countries by importing inexpensive raw materials and low-wage assembly labor, while exporting high-value manufactured consumer goods and financial capital back to the periphery, perpetuating an unequal terms of trade.\n\nPart E:\nDeindustrialization causes widespread layoffs in high-paying unionized factory jobs, forcing displaced workers into lower-paying, non-unionized service-sector positions or leading to structural unemployment and out-migration.\n\nPart F:\nLife expectancy at birth (health dimension) or mean/expected years of schooling (education dimension).\n\nPart G:\nModerate to high degree: Small, low-interest collateral-free loans enable women to purchase agricultural equipment or establish micro-enterprises, increasing household income and social standing, though structural market barriers can limit scaling into large enterprises.",
    scoringRubric: [
      "Part (a) [1 point]: 1 point for defining GNI per capita as total resident/foreign income divided by population.",
      "Part (b) [1 point]: 1 point for describing raw extraction (primary) vs service provision (tertiary).",
      "Part (c) [1 point]: 1 point for describing location near ports/borders, tax exemptions, or export orientation.",
      "Part (d) [1 point]: 1 point for explaining core extracting cheap raw materials/labor and selling back high-value manufactured goods.",
      "Part (e) [1 point]: 1 point for explaining factory job losses, transition to lower-wage service work, or regional economic decline.",
      "Part (f) [1 point]: 1 point for describing life expectancy at birth or mean/expected years of schooling.",
      "Part (g) [1 point]: 1 point for stating degree (e.g. moderate/high) and explaining small business formation and financial independence."
    ]
  }
};

/**
 * Returns a guaranteed pristine College Board question for the requested APHG Unit (1-7)
 */
export function getAphgPristineUnitQuestion(unitNum?: number, targetTopic?: string, idx: number = 0): any {
  let u = unitNum;
  if (!u && targetTopic) {
    const match = targetTopic.match(/unit\s*([1-7])/i);
    if (match) u = parseInt(match[1], 10);
  }
  if (!u || u < 1 || u > 7) {
    u = ((idx % 7) + 1);
  }
  const q = APHG_UNIT_PRISTINE_VAULT[u] || APHG_UNIT_PRISTINE_VAULT[1];
  return { ...q, id: idx + 1 };
}

/**
 * Golden Question Vault: Pristine, pre-verified College Board FRQ references
 */
export const PRISTINE_GOLDEN_QUESTIONS: Record<string, any[]> = {
  'aphg': Object.values(APHG_UNIT_PRISTINE_VAULT),
  'ap-human-geography': Object.values(APHG_UNIT_PRISTINE_VAULT),
  'apes': [

    {
      title: "FREE RESPONSE QUESTION 1  [10 POINTS]",
      prompt: "Agricultural runoff carrying synthetic fertilizers enters an estuarine watershed, resulting in periodic algal blooms and fish mortality events.\n\n(A) Identify one primary nutrient found in synthetic agricultural runoff that causes cultural eutrophication. [1 point]\n\n(B) Describe the sequence of biological events that leads to hypoxia following an algal bloom in an aquatic ecosystem. [1 point]\n\n(C) Identify the level of dissolved oxygen (in mg/L) below which an aquatic zone is considered hypoxic. [1 point]\n\n(D) Describe one physiological effect that low dissolved oxygen levels have on fish species inhabiting the estuary. [1 point]\n\n(E) Researchers design an investigation to test the effectiveness of riparian buffer zones in reducing nitrate concentrations in agricultural runoff. They establish three 100-meter test plots: Plot A with a 0-meter buffer (bare field to stream), Plot B with a 15-meter grass buffer, and Plot C with a 30-meter forested buffer. Stream water samples are collected weekly for 6 months.\n(i) Identify a testable hypothesis for the researchers' investigation. [1 point]\n(ii) Identify the independent variable in this experiment. [1 point]\n(iii) Identify the dependent variable in this experiment. [1 point]\n(iv) Explain why Plot A was included in the experimental design. [1 point]\n\n(F) Propose a realistic agricultural management practice, other than planting riparian buffers, that farmers could implement to reduce nutrient runoff into waterways. [1 point]\n\n(G) Justify the solution proposed in part (F) by providing an additional environmental or economic advantage other than reducing runoff pollution. [1 point]",
      totalPoints: 10,
      unitNumber: 8,
      unitTitle: "Aquatic and Terrestrial Pollution",
      skill: "Unit 8: Cultural Eutrophication and Investigation Design",
      modelAnswer: "Part A:\nNitrates (or phosphates / nitrogen / phosphorus).\n\nPart B:\nExcess nutrients cause a rapid population explosion of algae. When the algae die, aerobic decomposers (bacteria) consume dissolved oxygen as they break down the dead biomass, causing dissolved oxygen concentrations in the water column to drop precipitously.\n\nPart C:\nBelow 2.0 mg/L (or 2 to 3 mg/L).\n\nPart D:\nFish experience respiratory stress, reduced metabolic rates, suffocation, or are forced to flee the area, leading to fish mortality events.\n\nPart E:\n(i) Hypothesis: If the width of the riparian buffer zone increases, then the concentration of nitrates in the adjacent stream runoff will decrease.\n(ii) Independent Variable: The width or type of riparian buffer zone (0 m, 15 m grass, 30 m forested).\n(iii) Dependent Variable: The concentration of nitrates (mg/L) in the stream water samples.\n(iv) Plot A serves as a control group (baseline) to measure runoff nitrate levels in the complete absence of a buffer zone.\n\nPart F:\nFarmers can adopt precision agriculture (applying fertilizer only where and when needed based on soil testing) or plant non-commercial cover crops (such as clover or rye) during fallow seasons to absorb excess soil nutrients.\n\nPart G:\nPlanting cover crops also prevents wind and water soil erosion, improves soil organic matter and moisture retention, and reduces the need for expensive synthetic fertilizer purchases in subsequent planting cycles.",
      scoringRubric: [
        "Part A [1 point]: 1 point for identifying nitrogen/nitrate or phosphorus/phosphate.",
        "Part B [1 point]: 1 point for explaining algae die -> bacterial decomposition consumes dissolved oxygen -> hypoxia.",
        "Part C [1 point]: 1 point for identifying <= 2 mg/L or 2-3 mg/L.",
        "Part D [1 point]: 1 point for describing respiratory distress, suffocation, or fish kills.",
        "Part E(i) [1 point]: 1 point for testable hypothesis stating directional relationship between buffer width and nitrate levels.",
        "Part E(ii) [1 point]: 1 point for identifying buffer width/presence as IV.",
        "Part E(iii) [1 point]: 1 point for identifying nitrate concentration in stream as DV.",
        "Part E(iv) [1 point]: 1 point for describing Plot A as the control/baseline.",
        "Part F [1 point]: 1 point for proposing precision fertilizer application, cover crops, or drip fertigation.",
        "Part G [1 point]: 1 point for justifying with an additional co-benefit: reduced soil erosion, increased soil fertility, or cost savings on fertilizers."
      ]
    }
  ],
  'ap-environmental-science': [
    // Alias to apes
  ],
  'ap-calculus-ab': [
    {
      title: "FREE RESPONSE QUESTION 1  [9 POINTS]",
      prompt: "A chemical processing plant discharges treated effluent into a storage reservoir at a rate modeled by $R(t) = 400 + 120\\sin\\left(\\frac{t^2}{10}\\right)$, measured in liters per hour, for $0 \\le t \\le 8$ hours. Water evaporates from the reservoir at a constant rate of $250$ liters per hour. At time $t = 0$, the reservoir holds $5000$ liters of treated effluent.\n\n(a) Is the amount of treated effluent in the reservoir increasing or decreasing at time $t = 3$ hours? Give a reason for your answer. [2 points]\n\n(b) Write an integral expression for the total volume $V(t)$, in liters, of effluent in the reservoir at any time $t$. [2 points]\n\n(c) Find the total amount of effluent, in liters, discharged into the reservoir during the interval $0 \\le t \\le 8$. [2 points]\n\n(d) At what time $t$, for $0 \\le t \\le 8$, is the amount of effluent in the reservoir at an absolute minimum? Justify your answer. [3 points]",
      totalPoints: 9,
      unitNumber: 6,
      unitTitle: "Integration & Accumulation of Change",
      skill: "Unit 6: Rate In / Rate Out Accumulation",
      modelAnswer: "Part (a):\nThe net rate of change of effluent in the reservoir is given by $N(t) = R(t) - 250$.\nAt $t = 3$, $N(3) = R(3) - 250 = 400 + 120\\sin(0.9) - 250 = 150 + 120(0.7833) = 244.0 > 0$.\nSince $N(3) > 0$, the amount of treated effluent in the reservoir is increasing at time $t = 3$.\n\nPart (b):\nThe volume at any time $t$ is $V(t) = 5000 + \\int_0^t (R(u) - 250) \\, du$.\n\nPart (c):\nTotal effluent discharged is $\\int_0^8 R(t) \\, dt = \\int_0^8 \\left(400 + 120\\sin\\left(\\frac{t^2}{10}\\right)\\right) dt = 400(8) + 120 \\int_0^8 \\sin\\left(\\frac{t^2}{10}\\right) dt \\approx 3200 + 494.3 = 3694.3$ liters.\n\nPart (d):\nCandidates for absolute minimum on $[0, 8]$ are critical points where $N(t) = R(t) - 250 = 0$, and endpoints $t = 0, 8$.\nSince $R(t) = 400 + 120\\sin(t^2/10) \\ge 400 - 120 = 280 > 250$ for all $t$, $N(t) > 0$ strictly for all $t \\in [0, 8]$.\nBecause $V'(t) = N(t) > 0$ on $[0, 8]$, $V(t)$ is strictly increasing on the entire interval.\nTherefore, the absolute minimum occurs at the left endpoint $t = 0$ hours with $V(0) = 5000$ liters.",
      scoringRubric: [
        "Part (a) [2 points]: 1 point for evaluating net rate N(3) = R(3) - 250, 1 point for correct conclusion that amount is increasing with reasoning.",
        "Part (b) [2 points]: 1 point for definite integral setup with limits, 1 point for including initial condition 5000.",
        "Part (c) [2 points]: 1 point for integrand R(t), 1 point for numerical evaluation with correct units.",
        "Part (d) [3 points]: 1 point for considering N(t) = 0 or analyzing sign of V'(t), 1 point for identifying t = 0 as candidate, 1 point for justification using Extreme Value Theorem or monotonic behavior."
      ]
    },
    {
      title: "FREE RESPONSE QUESTION 2  [9 POINTS]",
      prompt: "A particle moves along the $x$-axis so that its velocity at time $t$ is given by the differentiable function $v(t) = 2t\\cos(t) - 3$, for $0 \\le t \\le 6$. At time $t = 0$, the particle's position is $x(0) = 4$.\n\n(a) Find the acceleration of the particle at time $t = 2$. [2 points]\n\n(b) Is the speed of the particle increasing or decreasing at time $t = 2$? Explain your reasoning. [2 points]\n\n(c) Find the total distance traveled by the particle over the time interval $0 \\le t \\le 6$. [2 points]\n\n(d) During the interval $0 \\le t \\le 6$, does the particle ever change directions? Justify your answer. [3 points]",
      totalPoints: 9,
      unitNumber: 4,
      unitTitle: "Contextual Applications of Differentiation",
      skill: "Unit 4: Straight-Line Particle Motion",
      modelAnswer: "Part (a):\n$a(t) = v'(t) = \\frac{d}{dt}(2t\\cos(t) - 3) = 2\\cos(t) - 2t\\sin(t)$.\nAt $t = 2$, $a(2) = 2\\cos(2) - 4\\sin(2) \\approx 2(-0.4161) - 4(0.9093) = -0.832 - 3.637 = -4.469$.\n\nPart (b):\nVelocity at $t = 2$: $v(2) = 2(2)\\cos(2) - 3 = 4(-0.4161) - 3 = -1.664 - 3 = -4.664 < 0$.\nAcceleration at $t = 2$: $a(2) \\approx -4.469 < 0$.\nSince both velocity $v(2)$ and acceleration $a(2)$ have the same sign (both negative), the speed of the particle is increasing at time $t = 2$.\n\nPart (c):\nTotal distance traveled is given by the definite integral of speed: $\\text{Total Distance} = \\int_0^6 |v(t)| \\, dt = \\int_0^6 |2t\\cos(t) - 3| \\, dt \\approx 18.271$.\n\nPart (d):\nThe particle changes direction if and only if its velocity $v(t)$ changes sign.\nSince $\\cos(t) \\le 1$ for all $t$, $2t\\cos(t) \\le 2t$.\nOn $[0, 1]$, $2t\\cos(t) \\le 2$, so $v(t) \\le 2 - 3 = -1 < 0$.\nSolving $v(t) = 0 \\iff 2t\\cos(t) = 3$: On $[0, 6]$, $v(t) < 0$ except where $2t\\cos(t) > 3$.\nAt $t = 5$, $2(5)\\cos(5) = 10(0.2837) = 2.837 < 3$, so $v(t) < 0$.\nAt $t = 6$, $2(6)\\cos(6) = 12(0.9602) = 11.52 > 3$, so $v(6) = 11.52 - 3 = 8.52 > 0$.\nSince $v(t)$ is continuous, $v(0) = -3 < 0$, and $v(6) > 0$, by the Intermediate Value Theorem $v(t) = 0$ for some $t \\in (0, 6)$, and changes sign from negative to positive. Therefore, the particle changes direction.",
      scoringRubric: [
        "Part (a) [2 points]: 1 point for derivative setup a(t) = v'(t), 1 point for accurate acceleration value a(2).",
        "Part (b) [2 points]: 1 point for finding signs of v(2) and a(2), 1 point for correct conclusion that speed is increasing with justification.",
        "Part (c) [2 points]: 1 point for absolute value definite integral expression, 1 point for evaluated distance.",
        "Part (d) [3 points]: 1 point for condition v(t) changes sign, 1 point for applying Intermediate Value Theorem or finding root, 1 point for valid conclusion."
      ]
    },
    {
      title: "FREE RESPONSE QUESTION 3  [9 POINTS]",
      prompt: "Consider the differential equation $\\frac{dy}{dx} = (y - 2)(x + 1)$. Let $y = f(x)$ be the particular solution to the differential equation with the initial condition $f(0) = 5$.\n\n(a) A portion of the slope field for the differential equation is given. Sketch the solution curve that passes through $(0, 5)$. [1 point]\n\n(b) Write an equation for the line tangent to the graph of $f$ at $x = 0$. Use this tangent line to approximate $f(0.2)$. [2 points]\n\n(c) Find $\\frac{d^2y}{dx^2}$ in terms of $x$ and $y$. Determine whether the approximation in part (b) is an overestimate or an underestimate of $f(0.2)$. Justify your answer. [2 points]\n\n(d) Find the particular solution $y = f(x)$ to the differential equation with initial condition $f(0) = 5$. [4 points]",
      totalPoints: 9,
      unitNumber: 7,
      unitTitle: "Differential Equations & Slope Fields",
      skill: "Unit 7: Separation of Variables & Tangent Approximation",
      modelAnswer: "Part (a):\nThe solution curve starts at $(0, 5)$ and follows the tangent segments upward and rightward as $x > 0$.\n\nPart (b):\nAt $(0, 5)$, $\\frac{dy}{dx} = (5 - 2)(0 + 1) = 3(1) = 3$.\nThe tangent line equation is $y - 5 = 3(x - 0) \\implies y = 3x + 5$.\nAt $x = 0.2$, $f(0.2) \\approx 3(0.2) + 5 = 0.6 + 5 = 5.6$.\n\nPart (c):\n$\\frac{d^2y}{dx^2} = \\frac{d}{dx}[(y - 2)(x + 1)] = \\frac{dy}{dx}(x + 1) + (y - 2)(1) = (y - 2)(x + 1)^2 + (y - 2) = (y - 2)[(x + 1)^2 + 1]$.\nNear $(0, 5)$ for $x \\in [0, 0.2]$ where $y > 2$: $(y - 2) > 0$ and $(x + 1)^2 + 1 > 0$, so $\\frac{d^2y}{dx^2} > 0$.\nSince the second derivative is strictly positive, the graph of $f$ is concave up on this interval.\nTherefore, the tangent line lies below the curve, meaning the approximation $5.6$ is an underestimate.\n\nPart (d):\n$\\frac{dy}{dx} = (y - 2)(x + 1) \\implies \\frac{1}{y - 2} \\, dy = (x + 1) \\, dx$.\nIntegrating both sides: $\\int \\frac{1}{y - 2} \\, dy = \\int (x + 1) \\, dx \\implies \\ln|y - 2| = \\frac{x^2}{2} + x + C$.\nUsing initial condition $f(0) = 5$: $\\ln|5 - 2| = 0 + 0 + C \\implies C = \\ln(3)$.\n$\\ln|y - 2| = \\frac{x^2}{2} + x + \\ln(3) \\implies |y - 2| = e^{\\frac{x^2}{2} + x + \\ln(3)} = 3e^{\\frac{x^2}{2} + x}$.\nSince $y(0) = 5 > 2$, $y - 2 = 3e^{\\frac{x^2}{2} + x} \\implies y = 3e^{\\frac{x^2}{2} + x} + 2$.",
      scoringRubric: [
        "Part (a) [1 point]: 1 point for drawing continuous curve through (0, 5) adhering to slope direction.",
        "Part (b) [2 points]: 1 point for tangent line slope and equation y = 3x + 5, 1 point for evaluation 5.6.",
        "Part (c) [2 points]: 1 point for implicit second derivative computation, 1 point for stating concave up with conclusion of underestimate.",
        "Part (d) [4 points]: 1 point for separation of variables, 1 point for antiderivatives ln|y-2| and x^2/2 + x, 1 point for constant of integration C = ln(3), 1 point for explicit solution y = 3e^(x^2/2 + x) + 2."
      ]
    }
  ],
  'ap-calculus-bc': [
    {
      title: "FREE RESPONSE QUESTION 1  [9 POINTS]",
      prompt: "The Taylor series for a function $f$ about $x = 2$ is given by $\\sum_{n=1}^\\infty \\frac{(x - 2)^n}{n \\cdot 4^n} = \\frac{x-2}{4} + \\frac{(x-2)^2}{2 \\cdot 16} + \\frac{(x-2)^3}{3 \\cdot 64} + \\dots$ and converges to $f(x)$ on its interval of convergence.\n\n(a) Using the ratio test, find the interval of convergence of the Taylor series for $f$ about $x = 2$. Justify your answer. [5 points]\n\n(b) Find the first three nonzero terms and the general term of the Taylor series for $f'$, the derivative of $f$, about $x = 2$. [2 points]\n\n(c) The Taylor series for $f'$ is a geometric series. For all $x$ in the interval of convergence of $f'$, show that $f'(x) = \\frac{1}{6 - x}$. [1 point]\n\n(d) The second-degree Taylor polynomial for $f$ about $x = 2$ is used to approximate $f(2.5)$. Given that $|f'''(x)| \\le 0.05$ for all $x \\in [2, 2.5]$, use the Lagrange error bound to show that this approximation differs from $f(2.5)$ by at most $0.002$. [1 point]",
      totalPoints: 9,
      unitNumber: 10,
      unitTitle: "Infinite Sequences and Series",
      skill: "Unit 10: Ratio Test, Power Series & Error Bounds",
      modelAnswer: "Part (a):\nRatio test setup: $\\lim_{n \\to \\infty} \\left| \\frac{(x - 2)^{n+1}}{(n+1) \\cdot 4^{n+1}} \\cdot \\frac{n \\cdot 4^n}{(x - 2)^n} \\right| = \\lim_{n \\to \\infty} \\left( \\frac{|x - 2|}{4} \\cdot \\frac{n}{n+1} \\right) = \\frac{|x - 2|}{4}$.\nFor absolute convergence: $\\frac{|x - 2|}{4} < 1 \\iff |x - 2| < 4 \\iff -2 < x < 6$.\nTesting endpoints individually:\nAt $x = -2$: The series is $\\sum_{n=1}^\\infty \\frac{(-4)^n}{n \\cdot 4^n} = \\sum_{n=1}^\\infty \\frac{(-1)^n}{n}$, which converges by the Alternating Series Test since $\\frac{1}{n} > 0$, $\\frac{1}{n}$ is strictly decreasing, and $\\lim_{n\\to\\infty} \\frac{1}{n} = 0$.\nAt $x = 6$: The series is $\\sum_{n=1}^\\infty \\frac{4^n}{n \\cdot 4^n} = \\sum_{n=1}^\\infty \\frac{1}{n}$, which is the harmonic series ($p$-series with $p = 1$) and diverges.\nTherefore, the interval of convergence is $[-2, 6)$.\n\nPart (b):\nDifferentiating term-by-term: $f'(x) = \\frac{d}{dx} \\left[ \\frac{x-2}{4} + \\frac{(x-2)^2}{32} + \\frac{(x-2)^3}{192} + \\dots + \\frac{(x-2)^n}{n \\cdot 4^n} + \\dots \\right] = \\frac{1}{4} + \\frac{x-2}{16} + \\frac{(x-2)^2}{64} + \\dots$.\nThe general term is $\\frac{(x - 2)^{n-1}}{4^n}$ for $n \\ge 1$.\n\nPart (c):\nThe series for $f'(x)$ is a geometric series with first term $a = \\frac{1}{4}$ and common ratio $r = \\frac{x - 2}{4}$.\nSince $|r| = \\frac{|x-2|}{4} < 1$ for all $x \\in (-2, 6)$, the infinite sum is:\n$f'(x) = \\frac{a}{1 - r} = \\frac{1/4}{1 - \\frac{x - 2}{4}} = \\frac{1/4}{\\frac{4 - (x - 2)}{4}} = \\frac{1}{6 - x}$.\n\nPart (d):\nBy the Lagrange error bound: $|f(2.5) - P_2(2.5)| \\le \\frac{\\max_{2 \\le t \\le 2.5} |f'''(t)|}{3!} |2.5 - 2|^3$.\nGiven that $\\max |f'''(t)| \\le 0.05$ on $[2, 2.5]$:\n$\\text{Error} \\le \\frac{0.05}{6} (0.5)^3 = \\frac{0.05 \\cdot 0.125}{6} = \\frac{0.00625}{6} \\approx 0.001042 \\le 0.002$.\nTherefore, the approximation differs from $f(2.5)$ by at most $0.002$.",
      scoringRubric: [
        "Part (a) [5 points]: 1 point for setting up ratio with absolute values, 1 point for limit of ratio |x - 2|/4, 1 point for interior interval (-2, 6), 1 point for considering both endpoints x = -2 and x = 6, 1 point for analysis at endpoints (AST at x = -2, harmonic divergence at x = 6) and final interval [-2, 6).",
        "Part (b) [2 points]: 1 point for first three nonzero terms 1/4 + (x-2)/16 + (x-2)^2/64, 1 point for general term (x-2)^(n-1)/4^n.",
        "Part (c) [1 point]: 1 point for identifying geometric series ratio (x-2)/4 and showing algebraic equivalence to 1/(6-x).",
        "Part (d) [1 point]: 1 point for Lagrange error bound form (0.05/6)*(0.5)^3 and explicitly connecting with inequality <= 0.002."
      ]
    },
    {
      title: "FREE RESPONSE QUESTION 2  [9 POINTS]",
      prompt: "Curve $C$ is defined by the polar equation $r(\\theta) = 3 + 2\\cos(2\\theta)$ for $0 \\le \\theta \\le \\pi$. The circle $r = 3$ is also graphed in the $xy$-plane.\n\n(a) Find the rate of change of $r$ with respect to $\\theta$ at the point on curve $C$ where $\\theta = \\frac{\\pi}{3}$. Show the setup for your calculations. [1 point]\n\n(b) Find the area of the region that lies inside curve $C$ but outside the circle $r = 3$. Show the setup for your calculations. [3 points]\n\n(c) Find the value of $\\theta$ in the interval $0 \\le \\theta \\le \\frac{\\pi}{2}$ that corresponds to the point on curve $C$ with the maximum distance from the origin. Justify your answer. [3 points]\n\n(d) A particle moves along curve $C$ such that $\\frac{d\\theta}{dt} = 4$ radians per second for all $t$. Find the rate at which the particle's distance from the origin changes with respect to time when $\\theta = \\frac{\\pi}{3}$. Show the setup for your calculations. [2 points]",
      totalPoints: 9,
      unitNumber: 9,
      unitTitle: "Parametric Equations, Polar Coordinates, & Vector-Valued Functions",
      skill: "Unit 9: Polar Area & Motion on Polar Curves",
      modelAnswer: "Part (a):\n$\\frac{dr}{d\\theta} = \\frac{d}{d\\theta}(3 + 2\\cos(2\\theta)) = -4\\sin(2\\theta)$.\nAt $\\theta = \\frac{\\pi}{3}$, $\\frac{dr}{d\\theta}\\Big|_{\\theta = \\pi/3} = -4\\sin\\left(\\frac{2\\pi}{3}\\right) = -4\\left(\\frac{\\sqrt{3}}{2}\\right) = -2\\sqrt{3} \\approx -3.464$.\n\nPart (b):\nCurve $C$ and circle intersect where $3 + 2\\cos(2\\theta) = 3 \\iff \\cos(2\\theta) = 0$.\nOn $[0, \\pi]$, $2\\theta = \\frac{\\pi}{2}$ and $2\\theta = \\frac{3\\pi}{2} \\implies \\theta = \\frac{\\pi}{4}$ and $\\theta = \\frac{3\\pi}{4}$.\n$C$ lies outside $r = 3$ where $2\\cos(2\\theta) > 0$, which occurs on $[0, \\frac{\\pi}{4}]$ and $[\\frac{3\\pi}{4}, \\pi]$.\nBy symmetry, Area $= 2 \\cdot \\frac{1}{2} \\int_0^{\\pi/4} \\left( (3 + 2\\cos(2\\theta))^2 - 3^2 \\right) d\\theta = \\int_0^{\\pi/4} (12\\cos(2\\theta) + 4\\cos^2(2\\theta)) \\, d\\theta \\approx 7.571$.\n\nPart (c):\nThe distance from the origin is $r(\\theta) = 3 + 2\\cos(2\\theta)$.\nOn $[0, \\frac{\\pi}{2}]$, critical points occur where $\\frac{dr}{d\\theta} = -4\\sin(2\\theta) = 0 \\implies 2\\theta = 0 \\implies \\theta = 0$.\nCandidates test on $[0, \\frac{\\pi}{2}]$:\nAt $\\theta = 0$: $r(0) = 3 + 2\\cos(0) = 5$.\nAt $\\theta = \\frac{\\pi}{2}$: $r(\\pi/2) = 3 + 2\\cos(\\pi) = 1$.\nBy the Candidates Test, the maximum distance from the origin is $5$, occurring at $\\theta = 0$.\n\nPart (d):\nBy the chain rule, $\\frac{dr}{dt} = \\frac{dr}{d\\theta} \\cdot \\frac{d\\theta}{dt}$.\nFrom part (a), $\\frac{dr}{d\\theta}\\Big|_{\\theta = \\pi/3} = -2\\sqrt{3}$.\nGiven $\\frac{d\\theta}{dt} = 4$: $\\frac{dr}{dt} = (-2\\sqrt{3})(4) = -8\\sqrt{3} \\approx -13.856$ units per second.",
      scoringRubric: [
        "Part (a) [1 point]: 1 point for derivative setup and correct evaluation dr/dtheta = -2*sqrt(3) (or -3.464).",
        "Part (b) [3 points]: 1 point for limits of integration theta = pi/4 and 3pi/4 (or 0 to pi/4 with symmetry factor 2), 1 point for integrand with squared difference of radii ((3+2cos(2theta))^2 - 3^2), 1 point for correct numerical area 7.571.",
        "Part (c) [3 points]: 1 point for considering dr/dtheta = 0, 1 point for global Candidates Test evaluating endpoints theta = 0, pi/2, 1 point for answer theta = 0 with maximum distance 5.",
        "Part (d) [2 points]: 1 point for product of derivatives (dr/dtheta)*(dtheta/dt), 1 point for correct rate of change -8*sqrt(3) (or -13.856)."
      ]
    },
    {
      title: "FREE RESPONSE QUESTION 3  [9 POINTS]",
      prompt: "Consider the differential equation $\\frac{dy}{dx} = (2 - x)(y - 1)^2$ with initial condition $f(1) = 2$. Let $y = f(x)$ be the particular solution to the differential equation.\n\n(a) Find $f''(1)$, the value of $\\frac{d^2y}{dx^2}$ at the point $(1, 2)$. Show the work that leads to your answer. [2 points]\n\n(b) Write an equation for the line tangent to the graph of $f$ at $x = 1$. Use this line to approximate $f(1.1)$. [2 points]\n\n(c) Use Euler's method, starting at $x = 1$ with two steps of equal size $\\Delta x = 0.1$, to approximate $f(1.2)$. Show the computations that lead to your answer. [2 points]\n\n(d) Use separation of variables to find the particular solution $y = f(x)$ to the differential equation with initial condition $f(1) = 2$. [3 points]",
      totalPoints: 9,
      unitNumber: 7,
      unitTitle: "Differential Equations",
      skill: "Unit 7: Euler's Method, Higher Derivatives & Separation of Variables",
      modelAnswer: "Part (a):\nAt $(1, 2)$: $\\frac{dy}{dx}\\Big|_{(1, 2)} = (2 - 1)(2 - 1)^2 = 1(1) = 1$.\nDifferentiating using the product rule and chain rule:\n$\\frac{d^2y}{dx^2} = \\frac{d}{dx}[(2 - x)(y - 1)^2] = -1(y - 1)^2 + (2 - x) \\cdot 2(y - 1)\\frac{dy}{dx}$.\nEvaluating at $(1, 2)$ with $\\frac{dy}{dx} = 1$:\n$f''(1) = -(2 - 1)^2 + (2 - 1) \\cdot 2(2 - 1)(1) = -1 + 2 = 1$.\n\nPart (b):\nThe tangent line at $(1, 2)$ with slope $m = 1$ is $y - 2 = 1(x - 1) \\implies y = x + 1$.\nAt $x = 1.1$: $f(1.1) \\approx 1.1 + 1 = 2.1$.\n\nPart (c):\nStep size $\\Delta x = 0.1$.\nStep 1: At $(x_0, y_0) = (1, 2)$:\n$\\frac{dy}{dx}\\Big|_{(1, 2)} = (2 - 1)(2 - 1)^2 = 1$.\n$f(1.1) \\approx y_1 = 2 + 1(0.1) = 2.1$.\nStep 2: At $(x_1, y_1) = (1.1, 2.1)$:\n$\\frac{dy}{dx}\\Big|_{(1.1, 2.1)} = (2 - 1.1)(2.1 - 1)^2 = 0.9(1.1)^2 = 0.9(1.21) = 1.089$.\n$f(1.2) \\approx y_2 = 2.1 + 1.089(0.1) = 2.1 + 0.1089 = 2.2089 \\approx 2.209$.\n\nPart (d):\n$\\frac{dy}{dx} = (2 - x)(y - 1)^2 \\implies \\frac{1}{(y - 1)^2} \\, dy = (2 - x) \\, dx$.\nIntegrating both sides: $\\int (y - 1)^{-2} \\, dy = \\int (2 - x) \\, dx \\implies -\\frac{1}{y - 1} = 2x - \\frac{x^2}{2} + C$.\nApplying initial condition $f(1) = 2$:\n$-\\frac{1}{2 - 1} = -1 = 2(1) - \\frac{1}{2} + C \\implies -1 = \\frac{3}{2} + C \\implies C = -\\frac{5}{2}$.\n$-\\frac{1}{y - 1} = 2x - \\frac{x^2}{2} - \\frac{5}{2} = \\frac{4x - x^2 - 5}{2} \\implies \\frac{1}{y - 1} = \\frac{x^2 - 4x + 5}{2}$.\n$y - 1 = \\frac{2}{x^2 - 4x + 5} \\implies y = 1 + \\frac{2}{x^2 - 4x + 5}$.",
      scoringRubric: [
        "Part (a) [2 points]: 1 point for product and chain rule application, 1 point for f''(1) = 1.",
        "Part (b) [2 points]: 1 point for tangent line equation y = x + 1, 1 point for approximation 2.1.",
        "Part (c) [2 points]: 1 point for first Euler step with y_1 = 2.1, 1 point for second Euler step with approximation 2.209 (or 2.2089).",
        "Part (d) [3 points]: 1 point for separation of variables and antiderivatives, 1 point for constant C = -5/2, 1 point for explicit particular solution y = 1 + 2/(x^2 - 4x + 5)."
      ]
    }
  ],
  'ap-chemistry': [
    {
      title: "LONG FREE-RESPONSE QUESTION 1  [10 POINTS]",
      prompt: "A student titrates a $25.0\\text{ mL}$ sample of an unknown monoprotic weak acid, $\\text{HA}$, with a standardized $0.100\\text{ M } \\text{NaOH}(aq)$ solution using a calibrated pH meter. The titration reaches the equivalence point after the addition of $35.0\\text{ mL}$ of the titrant. The pH of the solution at the half-equivalence point ($17.5\\text{ mL}$ of $\\text{NaOH}$ added) is $4.82$.\n\n(a) Write the balanced net ionic equation for the reaction that occurs during the titration. [1 point]\n\n(b) Calculate the initial molar concentration of the weak acid $\\text{HA}$ in the original $25.0\\text{ mL}$ sample. [1 point]\n\n(c) Determine the value of the acid-dissociation constant, $K_a$, of the weak acid $\\text{HA}$. [2 points]\n\n(d) State whether the pH at the equivalence point is greater than, less than, or equal to $7.00$. Justify your answer with a chemical equation. [2 points]\n\n(e) In a separate experiment, a buffer solution is prepared containing $0.120\\text{ M } \\text{HA}$ and $0.180\\text{ M } \\text{NaA}$. Calculate the pH of this buffer solution. [2 points]\n\n(f) A student suggests using an indicator with a $pK_a$ of $4.5$ to detect the equivalence point of this titration. Explain why this indicator is unsuitable for this titration. [2 points]",
      totalPoints: 10,
      unitNumber: 8,
      unitTitle: "Acids and Bases",
      skill: "Unit 8: Weak Acid Titrations, Buffers & Acid Equilibria",
      modelAnswer: "Part (a):\n$\\text{HA}(aq) + \\text{OH}^-(aq) \\rightarrow \\text{A}^-(aq) + \\text{H}_2\\text{O}(l)$\n\nPart (b):\nMoles of $\\text{OH}^-$ added at equivalence point:\n$n = (0.0350\\text{ L})(0.100\\text{ mol/L}) = 0.00350\\text{ mol } \\text{OH}^-$\nBecause the stoichiometric ratio is $1:1$, moles of $\\text{HA} = 0.00350\\text{ mol}$.\nInitial concentration:\n$[\\text{HA}] = \\frac{0.00350\\text{ mol}}{0.0250\\text{ L}} = 0.140\\text{ M}$\n\nPart (c):\nAt the half-equivalence point ($17.5\\text{ mL}$), exactly half of the initial $\\text{HA}$ has been converted to its conjugate base $\\text{A}^-$, so $[\\text{HA}] = [\\text{A}^-]$.\nBy the Henderson-Hasselbalch equation, $\\text{pH} = pK_a + \\log\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right) = pK_a + \\log(1) = pK_a$.\nTherefore, $pK_a = 4.82$.\n$K_a = 10^{-pK_a} = 10^{-4.82} = 1.51 \\times 10^{-5}$ (or $1.5 \\times 10^{-5}$).\n\nPart (d):\nThe pH at the equivalence point is greater than $7.00$.\nJustification: At the equivalence point, all $\\text{HA}$ and $\\text{OH}^-$ have reacted to produce the conjugate base $\\text{A}^-$, which hydrolyzes in water to produce hydroxide ions:\n$\\text{A}^-(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{HA}(aq) + \\text{OH}^-(aq)$\nThe generation of excess $\\text{OH}^-$ ions results in a basic solution ($\\text{pH} > 7.00$).\n\nPart (e):\nUsing the Henderson-Hasselbalch equation:\n$\\text{pH} = pK_a + \\log\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right) = 4.82 + \\log\\left(\\frac{0.180}{0.120}\\right) = 4.82 + \\log(1.50) = 4.82 + 0.176 = 5.00$\n\nPart (f):\nAn indicator changes color near its $pK_a$ (range $\\approx pK_a \\pm 1$, or pH $3.5$ to $5.5$).\nBecause the titration involves a weak acid and a strong base, the equivalence point occurs at a basic pH ($\\text{pH} > 7.00$, typically $\\approx 8.5-9.0$).\nAn indicator with $pK_a = 4.5$ would change color in the acidic buffer region long before the true equivalence point is reached, leading to a significant premature endpoint error.",
      scoringRubric: [
        "Part (a) [1 point]: Point 01 [1 pt] for correct balanced net ionic equation HA(aq) + OH-(aq) -> A-(aq) + H2O(l).",
        "Part (b) [1 point]: Point 02 [1 pt] for stoichiometric calculation yielding [HA] = 0.140 M.",
        "Part (c) [2 points]: Point 03 [1 pt] for stating that pH = pKa at the half-equivalence point; Point 04 [1 pt] for calculating Ka = 10^(-4.82) = 1.5 x 10^(-5).",
        "Part (d) [2 points]: Point 05 [1 pt] for stating pH > 7.00; Point 06 [1 pt] for hydrolysis equation A-(aq) + H2O(l) <=> HA(aq) + OH-(aq) demonstrating OH- formation.",
        "Part (e) [2 points]: Point 07 [1 pt] for Henderson-Hasselbalch setup pH = 4.82 + log(0.180/0.120); Point 08 [1 pt] for final pH = 5.00.",
        "Part (f) [2 points]: Point 09 [1 pt] for identifying that the equivalence point pH is basic (> 7); Point 10 [1 pt] for explaining that an indicator with pKa = 4.5 changes color prematurely in the acidic region."
      ]
    },
    {
      title: "SHORT FREE-RESPONSE QUESTION 4  [4 POINTS]",
      prompt: "Consider the sulfur tetrafluoride molecule, $\\text{SF}_4$.\n\n(a) Draw a complete Lewis electron-dot diagram for the $\\text{SF}_4$ molecule, showing all nonbonding valence electron pairs. [1 point]\n\n(b) Based on VSEPR theory, state the electron-domain geometry and the molecular geometry of $\\text{SF}_4$. [1 point]\n\n(c) Identify the hybridization of the sulfur atom in $\\text{SF}_4$. [1 point]\n\n(d) Explain whether the $\\text{SF}_4$ molecule is polar or nonpolar, referencing bond dipoles and molecular symmetry. [1 point]",
      totalPoints: 4,
      unitNumber: 2,
      unitTitle: "Molecular and Ionic Compound Structure and Properties",
      skill: "Unit 2: Lewis Structures, VSEPR & Hybridization",
      modelAnswer: "Part (a):\nThe sulfur atom has 6 valence electrons and each of the 4 fluorine atoms contributes 7 valence electrons: $6 + 4(7) = 34$ valence electrons.\nThe central S atom forms 4 single covalent bonds to the 4 F atoms (8 bonding electrons), each F atom receives 3 lone pairs (24 nonbonding electrons), and the remaining 2 valence electrons form 1 nonbonding lone pair on the central sulfur atom.\n\nPart (b):\nThe central sulfur atom has 5 electron domains (4 bonding pairs + 1 lone pair).\nElectron-domain geometry: Trigonal bipyramidal.\nMolecular geometry: Seesaw.\n\nPart (c):\nWith 5 electron domains surrounding the central sulfur atom, the hybridization is $sp^3d$.\n\nPart (d):\nThe $\\text{SF}_4$ molecule is polar.\nJustification: The S-F bonds are polar due to the electronegativity difference between sulfur and fluorine. Because the seesaw molecular geometry is asymmetric (the lone pair occupies an equatorial position, causing bond angle distortion), the individual S-F bond dipole moments do not cancel out, resulting in a net nonzero molecular dipole moment.",
      scoringRubric: [
        "Part (a) [1 point]: Point 01 [1 pt] for valid Lewis diagram with central S having 4 single bonds to F, 3 lone pairs on each F, and 1 lone pair on S (34 total valence electrons).",
        "Part (b) [1 point]: Point 02 [1 pt] for identifying electron-domain geometry as trigonal bipyramidal and molecular geometry as seesaw.",
        "Part (c) [1 point]: Point 03 [1 pt] for stating sp3d hybridization.",
        "Part (d) [1 point]: Point 04 [1 pt] for stating that the molecule is polar because polar S-F bond dipoles do not cancel due to asymmetric seesaw geometry."
      ]
    }
  ],
  'chemistry': [
    // Alias to ap-chemistry
  ],
  'ap-biology': [
    {
      title: "LONG FREE-RESPONSE QUESTION 1  [9 POINTS]",
      prompt: "Yeast cells (*Saccharomyces cerevisiae*) carry out cellular respiration using various carbohydrate substrates. Researchers investigated the rate of respiration by measuring carbon dioxide ($CO_2$) production in respirometers over a 30-minute period at $25^\\circ\\text{C}$. Four treatment flasks were prepared with identical yeast suspensions: Flask 1 received no carbohydrate; Flask 2 received $5\\%\\text{ glucose}$; Flask 3 received $5\\%\\text{ maltose}$; and Flask 4 received $5\\%\\text{ lactose}$. The rate of $CO_2$ production was recorded as follows: Flask 1: $0.05\\text{ mL/min}$; Flask 2: $1.42\\text{ mL/min}$; Flask 3: $0.88\\text{ mL/min}$; Flask 4: $0.06\\text{ mL/min}$.\n\n(a) Identify the cellular organelle and the specific sub-compartment where the pyruvate dehydrogenase complex decarboxylates pyruvate in eukaryotic cells. [1 point]\n\n(b) In reference to the experimental setup:\n(i) Identify the dependent variable in this experiment. [1 point]\n(ii) Justify the inclusion of Flask 1 in the experimental design. [1 point]\n(iii) Describe the quantitative trend in carbon dioxide production observed across the four treatment groups. [1 point]\n\n(c) In reference to metabolic pathways:\n(i) Identify the independent variable in this experiment. [1 point]\n(ii) Identify the carbohydrate treatment that yeast cells were least capable of metabolizing. [1 point]\n(iii) A yeast gene encoding an enzyme required for disaccharide cleavage has a coding sequence of $1,272$ nucleotides. Calculate the length, in amino acid residues, of the resulting polypeptide assuming no post-translational splicing. [1 point]\n\n(d) Researchers introduce sodium azide, a potent inhibitor of cytochrome c oxidase in Complex IV of the electron transport chain, to Flask 2 ($5\\%\\text{ glucose}$).\n(i) Predict the effect of sodium azide on the rate of carbon dioxide production in Flask 2 under aerobic conditions. [1 point]\n(ii) Justify your prediction using your knowledge of oxidative phosphorylation and feedback regulation of the citric acid cycle. [1 point]",
      totalPoints: 9,
      unitNumber: 3,
      unitTitle: "Cellular Energetics",
      skill: "Unit 3: Cellular Respiration, Control Groups & Metabolic Calculations",
      modelAnswer: "Part (a):\nThe mitochondrion, specifically the mitochondrial matrix.\n\nPart (b):\n(i) The dependent variable is the rate of carbon dioxide ($CO_2$) gas production (measured in mL/min).\n(ii) Flask 1 serves as a negative control to demonstrate that substantial $CO_2$ evolution requires an exogenous carbohydrate substrate and to establish the baseline level of endogenous respiration in the yeast cells.\n(iii) Glucose supported the highest rate of respiration ($1.42\\text{ mL/min}$), maltose supported a moderate rate ($0.88\\text{ mL/min}$), and lactose supported a negligible rate ($0.06\\text{ mL/min}$) that was virtually identical to the negative control lacking carbohydrate ($0.05\\text{ mL/min}$).\n\nPart (c):\n(i) The independent variable is the type of carbohydrate substrate provided to the yeast cells.\n(ii) Lactose (Flask 4), because its $CO_2$ production rate of $0.06\\text{ mL/min}$ was not significantly different from the carbohydrate-free control ($0.05\\text{ mL/min}$).\n(iii) Each codon consists of 3 nucleotides: $1,272\\text{ nucleotides} \\div 3 = 424\\text{ amino acid residues}$.\n\nPart (d):\n(i) The rate of $CO_2$ production will significantly decrease.\n(ii) Sodium azide blocks electron transfer from Complex IV to oxygen, halting the electron transport chain and proton gradient formation. Consequently, NADH cannot be reoxidized to $\\text{NAD}^+$ via aerobic respiration. Depletion of the $\\text{NAD}^+$ pool stalls the citric acid cycle (which requires $\\text{NAD}^+$ as an electron acceptor), dramatically decreasing overall metabolic decarboxylation and $CO_2$ release.",
      scoringRubric: [
        "Part (a) [1 point]: Point A1 [1 pt] for identifying the mitochondrion / mitochondrial matrix.",
        "Part (b) [3 points]: Point B1 [1 pt] for identifying CO2 production rate as DV; Point B2 [1 pt] for justifying Flask 1 as negative control isolating carbohydrate dependence; Point B3 [1 pt] for describing trend (glucose highest > maltose > lactose ≈ control).",
        "Part (c) [3 points]: Point C1 [1 pt] for identifying type of carbohydrate as IV; Point C2 [1 pt] for identifying lactose group; Point C3 [1 pt] for calculation: 1272 / 3 = 424 amino acids.",
        "Part (d) [2 points]: Point D1 [1 pt] for predicting decreased CO2 production; Point D2 [1 pt] for justifying via NADH accumulation and NAD+ depletion halting citric acid cycle."
      ]
    },
    {
      title: "LONG FREE-RESPONSE QUESTION 2  [9 POINTS]",
      prompt: "Transpiration in vascular plants is regulated by environmental factors that influence water vapor diffusion through stomatal pores. Botanists investigated the transpiration rate of bean seedlings (*Phaseolus vulgaris*) under four environmental conditions: Room temperature still air (Control), High wind velocity, High relative humidity, and High ambient temperature. The mean transpiration rates and standard errors of the mean ($\\pm 2\\text{SE}_{\\bar{x}}$) were determined:\n- Control: $4.2 \\pm 0.4\\text{ }\\mu\\text{L/min}\\cdot\\text{cm}^2$\n- High Wind: $7.8 \\pm 0.6\\text{ }\\mu\\text{L/min}\\cdot\\text{cm}^2$\n- High Humidity: $1.5 \\pm 0.3\\text{ }\\mu\\text{L/min}\\cdot\\text{cm}^2$\n- High Temperature: $7.2 \\pm 0.5\\text{ }\\mu\\text{L/min}\\cdot\\text{cm}^2$\n\n(a) Describe the physical property of water molecules that generates the continuous hydrostatic tensile column pulling water from roots to leaves through xylem tracheids. [1 point]\n\n(b) Using the data provided:\n(i) Identify the appropriate type of graph to represent the experimental data across the four distinct treatment conditions. [1 point]\n(ii) Describe how standard error of the mean ($\\pm 2\\text{SE}_{\\bar{x}}$) error bars should be visually constructed on the graph for the High Wind and High Temperature groups. [1 point]\n(iii) Identify the appropriate variable and units that should be placed on the vertical (y) axis. [1 point]\n(iv) Describe the relationship between relative humidity and plant transpiration rate. [1 point]\n\n(c) In reference to physiological thresholds:\n(i) Identify which treatment conditions resulted in a greater than $50\\%$ increase in transpiration rate compared to the control condition. [1 point]\n(ii) Under severe water stress, plants synthesize the phytohormone abscisic acid (ABA). Predict the physiological effect of ABA on guard cells and stomatal aperture. [1 point]\n\n(d) A student claims that the High Wind condition caused a statistically significantly higher transpiration rate than the High Temperature condition.\n(i) Based on the data, state whether you support or refute the student's claim. Use the standard error of the mean ($\\pm 2\\text{SE}_{\\bar{x}}$) to justify your answer. [1 point]\n(ii) Explain ONE agricultural strategy or leaf morphological adaptation that reduces excessive transpiration losses in arid environments. [1 point]",
      totalPoints: 9,
      unitNumber: 2,
      unitTitle: "Cell Structure and Function",
      skill: "Unit 2: Water Potential, Transpiration & Statistical Significance",
      modelAnswer: "Part (a):\nCohesion, which is the intermolecular hydrogen bonding between water molecules that enables them to form an unbroken, continuous column under negative hydrostatic tension, combined with adhesion to xylem cell walls.\n\nPart (b):\n(i) A bar graph (or column chart) with discrete, non-continuous categories on the horizontal axis.\n(ii) For High Wind, plot a bar to $7.8$ with an error bar extending from $7.2$ ($7.8 - 0.6$) to $8.4$ ($7.8 + 0.6$). For High Temperature, plot a bar to $7.2$ with an error bar extending from $6.7$ ($7.2 - 0.5$) to $7.7$ ($7.2 + 0.5$).\n(iii) Mean Transpiration Rate, with units of $\\mu\\text{L/min}\\cdot\\text{cm}^2$.\n(iv) An inverse (or negative) relationship: As relative humidity increases, the water potential gradient between the moist substomatal cavity and the atmosphere decreases, causing the transpiration rate to decrease.\n\nPart (c):\n(i) A $50\\%$ increase above the control ($4.2$) is $4.2 + 2.1 = 6.3\\text{ }\\mu\\text{L/min}\\cdot\\text{cm}^2$. Both the High Wind ($7.8$) and High Temperature ($7.2$) conditions exceed this threshold.\n(ii) ABA triggers an efflux of potassium ions ($K^+$) and anions from guard cells, causing water to exit by osmosis; the loss of turgor pressure causes guard cells to become flaccid, closing the stomatal pore.\n\nPart (d):\n(i) Refute the claim. The lower bound of the High Wind error bar ($7.8 - 0.6 = 7.2$) and the upper bound of the High Temperature error bar ($7.2 + 0.5 = 7.7$) overlap (range $7.2$ to $7.7$). Because the $\\pm 2\\text{SE}_{\\bar{x}}$ error bars overlap, there is no statistically significant difference between the two treatment means.\n(ii) Planting windbreaks around fields to reduce wind velocity at crop canopy level, or selecting crop varieties with thick waxy cuticles, trichomes (leaf hairs) that trap boundary layer moisture, or sunken stomata.",
      scoringRubric: [
        "Part (a) [1 point]: Point A1 [1 pt] for describing cohesion / hydrogen bonding between water molecules.",
        "Part (b) [4 points]: Point B1 [1 pt] for identifying bar graph; Point B2 [1 pt] for constructing error bars [7.2-8.4] and [6.7-7.7]; Point B3 [1 pt] for y-axis title and units; Point B4 [1 pt] for describing inverse relationship between humidity and transpiration.",
        "Part (c) [2 points]: Point C1 [1 pt] for identifying High Wind and High Temperature (> 6.3 uL/min*cm^2); Point C2 [1 pt] for predicting guard cell flaccidity and stomatal closure.",
        "Part (d) [2 points]: Point D1 [1 pt] for refuting claim citing error bar overlap between 7.2 and 7.7 (no statistically significant difference); Point D2 [1 pt] for explaining thick cuticle, sunken stomata, trichomes, or windbreaks."
      ]
    },
    {
      title: "SHORT FREE-RESPONSE QUESTION 3  [4 POINTS]",
      prompt: "Marine ecologists investigated the role of the predatory sea star *Pisaster ochraceus* in intertidal rocky shore ecosystems. In an experimental manipulation, researchers established two adjacent 10-meter coastal plots: Plot A was maintained in its natural state with sea stars present, while in Plot B, all sea stars were manually removed and continually excluded for two years. After two years, researchers measured the species richness of primary producers (algae) and sessile invertebrates.\n\n(a) Describe the ecological role of a keystone predator in maintaining biodiversity within a community. [1 point]\n\n(b) Identify the control group in this investigation and explain why it was necessary to include this group. [1 point]\n\n(c) State the null hypothesis for this ecological investigation. [1 point]\n\n(d) Following predator removal in Plot B, the blue mussel (*Mytilus californianus*) rapidly monopolized over $90\\%$ of available rock space, reducing total community species richness from 15 species to 1 species. Justify this ecological outcome using the principle of competitive exclusion. [1 point]",
      totalPoints: 4,
      unitNumber: 8,
      unitTitle: "Ecology",
      skill: "Unit 8: Community Ecology, Keystone Species & Null Hypothesis",
      modelAnswer: "Part (a):\nA keystone predator exerts strong top-down regulation disproportionate to its abundance by preying on competitively dominant herbivores or filter feeders, preventing competitive exclusion and thereby preserving high species diversity across the community.\n\nPart (b):\nPlot A (with sea stars present) is the control group. It is necessary because it establishes baseline species richness under natural environmental conditions (e.g., wave action, seasonal temperature fluctuations) to ensure that any observed changes in Plot B are directly attributable to the removal of the predator rather than confounding climatic variables.\n\nPart (c):\nThe removal of the predatory sea star *Pisaster ochraceus* has NO effect on the species richness of sessile invertebrates and algae in the intertidal rocky community.\n\nPart (d):\nBlue mussels are superior competitors for space on rocky intertidal surfaces. Under natural conditions, sea star predation controls mussel populations; in the absence of predation pressure, mussels outcompete all subordinate invertebrate and algal species for limited physical attachment space, competitively excluding them until only the dominant competitor persists.",
      scoringRubric: [
        "Part (a) [1 point]: 1 pt for describing keystone predator preventing competitive dominance to maintain community diversity.",
        "Part (b) [1 point]: 1 pt for identifying Plot A as control AND explaining that it isolates predator presence from background environmental factors.",
        "Part (c) [1 point]: 1 pt for stating null hypothesis that predator removal has NO effect on species richness/diversity.",
        "Part (d) [1 point]: 1 pt for justifying outcome via competitive exclusion: mussels outcompete other species for limited space in absence of predation."
      ]
    }
  ],
  'biology': [
    // Alias to ap-biology
  ],
  'ap-physics-1': [
    {
      title: "QUESTION 1: MATHEMATICAL ROUTINES (MR)  [10 POINTS]",
      prompt: "Water exits the nozzle of an ornamental fountain at an angle $\\theta_0$ above the horizontal.\n\nAt time $t = 0$, a droplet of water exits the nozzle and follows a parabolic trajectory through the air. The droplet reaches a maximum vertical height $h_1$ above the nozzle. At time $t = t_f$, the droplet returns to the original vertical height of the nozzle. Atmospheric drag is negligible.\n\nPart A\n(i) On rectangular coordinate axes, sketch graphs of the horizontal component $v_x(t)$ and vertical component $v_y(t)$ of the velocity of the water droplet as functions of time $t$ from $t = 0$ to $t = t_f$. [2 points]\n\n(ii) Starting with a fundamental kinematic principle or an equation from the reference information, derive an expression for the launch speed $v_0$ of the water exiting the nozzle. Express your answer in terms of $\\theta_0$, $h_1$, and fundamental constants. [2 points]\n\n(iii) The nozzle has a circular cross-section with radius $r_0$. Derive an expression for the volume flow rate $Q = \\frac{V}{t}$ of the water exiting the nozzle. Express your answer in terms of $\\theta_0$, $h_1$, $r_0$, and fundamental constants. [3 points]\n\nPart B\nThe fountain nozzle is replaced with a narrower nozzle of radius $r_2 < r_0$. The water exits the new nozzle at the exact same angle $\\theta_0$ above the horizontal, and the volume flow rate $Q$ exiting the new nozzle is identical to the volume flow rate exiting the original nozzle. A water droplet exiting the new nozzle reaches a maximum height $h_2$ above the nozzle.\n\nIndicate whether $h_2$ is greater than, less than, or equal to $h_1$:\n• $h_2 > h_1$\n• $h_2 < h_1$\n• $h_2 = h_1$\n\nJustify your answer. In your justification, include qualitative physical reasoning beyond mathematical equations. [3 points]",
      totalPoints: 10,
      unitNumber: 8,
      unitTitle: "Fluids & Kinematics",
      skill: "Unit 8: Continuity Equation, Fluid Flow Rate & 2D Kinematics",
      modelAnswer: "Part A (i):\n- Horizontal velocity $v_x(t)$: A continuous, horizontal line at a constant positive value ($v_{x0} = v_0\\cos\\theta_0$) from $t = 0$ to $t = t_f$, since there are no horizontal forces.\n- Vertical velocity $v_y(t)$: A straight line with a constant negative slope of $-g$, beginning at $+v_0\\sin\\theta_0$ at $t = 0$, crossing zero at $t = t_f / 2$ (maximum height), and reaching $-v_0\\sin\\theta_0$ at $t = t_f$.\n\nPart A (ii):\nStarting with the kinematic relation from the equation sheet:\n$$v_y^2 = v_{y0}^2 + 2a_y(y - y_0)$$\nAt maximum height $y = h_1$, the vertical velocity is zero ($v_y = 0$), and the vertical acceleration is $a_y = -g$:\n$$0 = (v_0\\sin\\theta_0)^2 - 2gh_1$$\n$$(v_0\\sin\\theta_0)^2 = 2gh_1 \\implies v_0\\sin\\theta_0 = \\sqrt{2gh_1}$$\n$$v_0 = \\frac{\\sqrt{2gh_1}}{\\sin\\theta_0}$$\n\nPart A (iii):\nStarting with the definition of volume flow rate from the equation sheet:\n$$Q = \\frac{V}{t} = A v_0$$\nFor a circular cross-section of radius $r_0$, the cross-sectional area is $A = \\pi r_0^2$. Substituting $v_0$ from Part A (ii):\n$$Q = (\\pi r_0^2) \\left( \\frac{\\sqrt{2gh_1}}{\\sin\\theta_0} \\right) = \\frac{\\pi r_0^2\\sqrt{2gh_1}}{\\sin\\theta_0}$$\n\nPart B:\nClaim: $h_2 > h_1$\nJustification:\nFrom the principle of continuity for incompressible fluid flow, the volume flow rate is the product of cross-sectional area and exit speed ($Q = Av$). Because the new nozzle has a smaller radius, its cross-sectional area is reduced. Since the volume flow rate remains constant, the water must exit the narrower nozzle with a greater initial launch speed ($v_2 > v_0$). Because the launch angle $\\theta_0$ is unchanged, the vertical component of launch velocity is also greater. The maximum height reached depends directly on the initial vertical kinetic energy transformed into gravitational potential energy; therefore, a greater vertical launch speed results in a greater maximum vertical height ($h_2 > h_1$).",
      scoringRubric: [
        "Part A (i) [2 points]: Point A1 [1 pt] for sketching a nonzero, horizontal line for the horizontal component of velocity from t = 0 to t_f; Point A2 [1 pt] for sketching a straight line with a constant negative slope that crosses the horizontal axis at t = t_f / 2 for the vertical velocity.",
        "Part A (ii) [2 points]: Point A3 [1 pt] for starting with a kinematic equation (v_y^2 = v_y0^2 + 2a_y(y - y0)) or conservation of energy relating speed and height; Point A4 [1 pt] for correctly substituting v_y0 = v0*sin(theta_0), v_y = 0 at max height, and isolating v0 = sqrt(2gh_1) / sin(theta_0).",
        "Part A (iii) [3 points]: Point A5 [1 pt] for including the product of cross-sectional area and speed (Q = Av); Point A6 [1 pt] for substituting A = pi*r0^2; Point A7 [1 pt] for substituting v0 consistent with Part A (ii) to yield Q = pi*r0^2 * sqrt(2gh_1) / sin(theta_0).",
        "Part B [3 points]: Point B1 [1 pt] for indicating h2 > h1; Point B2 [1 pt] for qualitatively explaining that smaller nozzle area with constant flow rate requires a greater exit speed; Point B3 [1 pt] for qualitatively linking the greater exit speed (and vertical component) to a greater maximum height."
      ]
    },
    {
      title: "QUESTION 2: TRANSLATION BETWEEN REPRESENTATIONS (TBR)  [12 POINTS]",
      prompt: "A block of mass $M$ is released from rest at position $x = 0$ near the top of an incline making an angle $\\theta$ with the horizontal. The surface is frictionless. At position $x = 8D$, the block contacts an uncompressed spring with spring constant $k$. The block compresses the spring and momentarily comes to rest at position $x = 12D$. Gravitational potential energy $U_g$ is defined to be zero at $x = 12D$.\n\nPart A\nComplete the energy bar charts (LOL diagrams) representing the kinetic energy $K$, gravitational potential energy $U_g$, and spring potential energy $U_s$ of the block-spring-Earth system at $x = 0$ and $x = 6D$. At $x = 10D$, the system has $K = 7E_0$, $U_g = 2E_0$, and $U_s = 3E_0$. [3 points]\n\nPart B\nStarting with conservation of mechanical energy, derive an expression for the spring constant $k$. Express your answer in terms of $M$, $\\theta$, $D$, and physical constants. [4 points]\n\nPart C\nOn coordinate axes from $x = 8D$ to $x = 12D$:\n(i) Sketch and label a line or curve representing the total mechanical energy $E$ of the system. [1 point]\n(ii) Sketch and label a line or curve representing the gravitational potential energy $U_g$ of the system. [2 points]\n\nPart D\nIndicate whether the speed $v_{9D}$ of the block at $x = 9D$ is greater than, less than, or equal to the speed $v_{8D}$ of the block at $x = 8D$:\n• $v_{9D} > v_{8D}$\n• $v_{9D} < v_{8D}$\n• $v_{9D} = v_{8D}$\nJustify how your response is consistent with the energy curves in Part C. [2 points]",
      totalPoints: 12,
      unitNumber: 3,
      unitTitle: "Work, Energy & Power",
      skill: "Unit 3: Mechanical Energy Conservation & Incline Geometry",
      modelAnswer: "Part A:\n- At $x = 0$: The block is at rest ($K = 0$), the spring is uncompressed ($U_s = 0$), and all energy is gravitational potential energy. Since total mechanical energy is $E_{total} = K + U_g + U_s = 7E_0 + 2E_0 + 3E_0 = 12E_0$, the bar chart for $x = 0$ has a single bar for $U_g$ of height $12E_0$.\n- At $x = 6D$: The block has descended halfway to the spring ($U_s = 0$). Gravitational potential energy has decreased linearly from $12E_0$ to $6E_0$. By conservation of energy, the remaining energy is kinetic: $K = 6E_0$ and $U_g = 6E_0$ (summing to $12E_0$).\n\nPart B:\nStarting with conservation of mechanical energy between $x = 0$ (release from rest) and $x = 12D$ (momentary rest against compressed spring):\n$$E_i = E_f$$\n$$U_{g,i} + K_i + U_{s,i} = U_{g,f} + K_f + U_{s,f}$$\n$$Mg\\Delta y + 0 + 0 = 0 + 0 + \\frac{1}{2}k(\\Delta x)^2$$\nAlong the incline of angle $\\theta$, the vertical descent over distance $12D$ is $\\Delta y = 12D\\sin\\theta$. The spring compression distance from $x = 8D$ to $x = 12D$ is $\\Delta x = 12D - 8D = 4D$:\n$$Mg(12D\\sin\\theta) = \\frac{1}{2}k(4D)^2$$\n$$12MgD\\sin\\theta = \\frac{1}{2}k(16D^2) = 8kD^2$$\n$$k = \\frac{12MgD\\sin\\theta}{8D^2} = \\frac{3Mg\\sin\\theta}{2D}$$\n\nPart C:\n(i) Total mechanical energy $E$: A horizontal, continuous straight line at constant value $12E_0$ from $x = 8D$ to $x = 12D$.\n(ii) Gravitational potential energy $U_g$: A straight line with constant negative slope starting at $(8D, 4E_0)$ and decreasing linearly to $(12D, 0)$.\n\nPart D:\nClaim: $v_{9D} > v_{8D}$\nJustification:\nFrom the conservation of mechanical energy equation $K = E_{total} - (U_g + U_s)$, the kinetic energy at any point equals the total energy ($12E_0$) minus the sum of potential energies. At $x = 8D$, $U_g = 4E_0$ and $U_s = 0$, giving $K_{8D} = 8E_0$. At $x = 9D$, the block has lost $1E_0$ of gravitational potential energy ($U_g = 3E_0$), but the parabolic spring potential energy curve shows $U_s < 1E_0$ (specifically $U_s = \\frac{1}{16}(12E_0) = 0.75E_0$). Thus, the total potential energy at $9D$ is $3.75E_0 < 4.0E_0$, leaving $K_{9D} = 8.25E_0 > 8E_0$. Since mass is constant, higher kinetic energy implies greater speed ($v_{9D} > v_{8D}$).",
      scoringRubric: [
        "Part A [3 points]: Point A1 [1 pt] for drawing one bar in Figure 2 showing only gravitational potential energy (Ug); Point A2 [1 pt] for including only K and Ug in Figure 3; Point A3 [1 pt] for drawing bars in both figures whose total heights respectively equal 12E0.",
        "Part B [4 points]: Point B1 [1 pt] for a multistep derivation beginning with conservation of energy (E0 = Ef); Point B2 [1 pt] for equating gravitational potential energy to spring potential energy; Point B3 [1 pt] for substituting Delta y = 12D*sin(theta) and Delta x = 4D (with (4D)^2 = 16D^2); Point B4 [1 pt] for correctly isolating k = (3/2)*(Mg*sin(theta)/D).",
        "Part C [3 points]: Point C1 [1 pt] for sketching a horizontal continuous line at 12E0 labeled E; Point C2 [1 pt] for sketching a straight decreasing line labeled Ug; Point C3 [1 pt] for starting the Ug line at (8D, 4E0) and ending at (12D, 0).",
        "Part D [2 points]: Point D1 [1 pt] for indicating v_9D > v_8D consistent with graph; Point D2 [1 pt] for a justification correctly relating speed to kinetic energy and showing that the sum of Ug + Us decreases between 8D and 9D."
      ]
    },
    {
      title: "QUESTION 3: EXPERIMENTAL DESIGN AND ANALYSIS (LAB)  [10 POINTS]",
      prompt: "Students investigate rotational equilibrium using a uniform meterstick of mass $M = 0.20\\text{ kg}$ pivoted at its center ($50\\text{ cm}$ mark). A spring scale is attached to the $10\\text{ cm}$ mark, exerting a downward force to keep the stick horizontal. A block of unknown mass $m_0$ is suspended from various hole locations on the opposite side of the pivot. The students cannot attach the block directly to the spring scale.\n\nPart A\n(i) Describe an experimental procedure to collect data allowing the students to determine $m_0$ using a linear graph. [1 point]\n(ii) Describe an experimental step necessary to reduce experimental uncertainty. [1 point]\n\nPart B\n(i) Indicate quantities that could be plotted on the horizontal and vertical axes to yield a straight line whose slope can be used to determine $m_0$. [1 point]\n(ii) Describe mathematically how the slope of this graph is related to the mass $m_0$. [1 point]\n\nPart C\nIn a second trial, the meterstick is attached to an axle at the wall and suspended horizontally by a string at angle $\\theta$, measured by a spring scale. The tension is given by $F_T = \\frac{5Mg}{6\\sin\\theta}$.\n(i) Indicate what quantity could be plotted on the vertical axis against $\\frac{1}{\\sin\\theta}$ on the horizontal axis to yield a linear graph. [1 point]\n(ii) Plot the data on a grid with proper labels and units. [2 points]\n(iii) Draw a straight best-fit line. [1 point]\n\nPart D\nUsing the slope of the best-fit line, calculate an experimental value for $M$. [2 points]",
      totalPoints: 10,
      unitNumber: 5,
      unitTitle: "Torque & Rotational Equilibrium",
      skill: "Unit 5: Static Equilibrium, Torque Balance & Linearization",
      modelAnswer: "Part A (i):\nAttach the block of unknown mass $m_0$ at the $60\\text{ cm}$ mark. Apply a downward vertical force with the spring scale at the $10\\text{ cm}$ mark ($40\\text{ cm}$ from pivot) until the meterstick is completely horizontal. Record the distance $d$ from the pivot to the block and the spring scale reading $F_s$. Repeat this procedure by attaching the block at different hole positions ($70\\text{ cm}, 80\\text{ cm}, 90\\text{ cm}$).\n\nPart A (ii):\nTo reduce experimental uncertainty, take multiple repeated force readings (3 to 5 trials) at each individual block location and calculate the average force before changing the block's position.\n\nPart B (i):\nVertical axis: Spring scale force $F_s$ (in $\\text{N}$)\nHorizontal axis: Distance from pivot to block $d$ (in $\\text{m}$)\n\nPart B (ii):\nSetting net torque about the pivot equal to zero:\n$$\\Sigma \\tau = F_s d_{scale} - m_0 g d = 0 \\implies F_s = \\left( \\frac{m_0 g}{d_{scale}} \\right) d$$\nSince $d_{scale} = 0.40\\text{ m}$, the slope of the $F_s$ vs. $d$ graph is $\\text{Slope} = \\frac{m_0 g}{d_{scale}}$. Therefore:\n$$m_0 = \\frac{\\text{Slope} \\cdot d_{scale}}{g}$$\n\nPart C (i):\nVertical axis: Tension force $F_T$ (in $\\text{N}$)\n\nPart C (ii) & (iii):\nVertical axis is labeled $F_T\\text{ (N)}$ with a linear scale from $0$ to $25\\text{ N}$. Data points are plotted accurately, and a single, smooth straight line of best fit is drawn passing evenly through the scatter plot.\n\nPart D:\nFrom the given relationship $F_T = \\left( \\frac{5Mg}{6} \\right) \\left( \\frac{1}{\\sin\\theta} \\right)$, the slope of the best-fit line is $\\text{Slope} = \\frac{5Mg}{6}$.\nSelecting two points on the best-fit line: $(0.5, 4.0\\text{ N})$ and $(2.5, 21.0\\text{ N})$:\n$$\\text{Slope} = \\frac{21.0\\text{ N} - 4.0\\text{ N}}{2.5 - 0.5} = \\frac{17.0}{2.0} = 8.5\\text{ N}$$\n$$M = \\frac{6 \\cdot \\text{Slope}}{5g} = \\frac{6(8.5\\text{ N})}{5(9.8\\text{ m/s}^2)} = \\frac{51.0}{49.0} \\approx 1.04\\text{ kg}$$",
      scoringRubric: [
        "Part A [2 points]: Point A1 [1 pt] for describing procedure measuring force while block is attached at various measured distances; Point A2 [1 pt] for indicating multiple trials for each location to reduce uncertainty.",
        "Part B [2 points]: Point B1 [1 pt] for indicating appropriate quantities that yield linear dependence (e.g. Fs vs d); Point B2 [1 pt] for correctly relating slope to m0 (m0 = slope * d_scale / g).",
        "Part C [4 points]: Point C1 [1 pt] for listing FT on vertical axis; Point C2 [2 pts] for labeling axis with linear scale AND units (N) and correctly plotting points; Point C3 [1 pt] for drawing an appropriate straight best-fit line.",
        "Part D [2 points]: Point D1 [1 pt] for correctly relating slope to M (M = 6*slope / (5g)); Point D2 [1 pt] for calculating value of M within accepted experimental range (0.90 kg to 1.15 kg) using points on the line."
      ]
    },
    {
      title: "QUESTION 4: QUALITATIVE/QUANTITATIVE TRANSLATION (QQT)  [8 POINTS]",
      prompt: "In Scenario 1, a diver holds a solid block of mass $m$ and volume $V$ completely submerged at rest in a freshwater tank of density $\\rho_1$. The block is released from rest and accelerates upward with initial acceleration $a_1$. Viscous drag is negligible.\n\nIn Scenario 2, the diver holds the identical block at rest submerged in saltwater of density $\\rho_2 > \\rho_1$. The block is released from rest and accelerates upward with initial acceleration $a_2$.\n\nPart A\nIndicate whether $a_1$ is greater than, less than, or equal to $a_2$:\n• $a_1 > a_2$\n• $a_1 < a_2$\n• $a_1 = a_2$\nJustify your answer in terms of ALL forces exerted on the block in each scenario. Use qualitative physical reasoning beyond referencing equations. [3 points]\n\nPart B\nConsider the general case where a block of mass $m$ and volume $V$ is completely submerged in a fluid of density $\\rho$.\nStarting with Newton's second law, derive an expression for the initial upward acceleration $a$ of the block when released from rest. Express your answer in terms of $m$, $V$, $\\rho$, and fundamental constants. [3 points]\n\nPart C\nIndicate whether your derived expression for acceleration $a$ in Part B is consistent with your claim in Part A. Briefly justify your answer using functional dependence reasoning referencing your Part B derivation. [2 points]",
      totalPoints: 8,
      unitNumber: 8,
      unitTitle: "Fluids & Dynamics",
      skill: "Unit 8: Archimedes Buoyancy, Fluid Density & Newton's Second Law",
      modelAnswer: "Part A:\nClaim: $a_1 < a_2$\nJustification:\nTwo vertical forces act on the block in each liquid: a downward gravitational force (weight $mg$) and an upward buoyant force exerted by the displaced fluid. Because the block is identical in both scenarios, the downward force of gravity is identical in both tanks. The upward buoyant force is directly proportional to the density of the fluid displaced by the submerged volume. Because the saltwater has a greater density than freshwater ($\\rho_2 > \\rho_1$), the buoyant force on the block is greater in saltwater. Consequently, the net upward force (buoyant force minus weight) is greater in saltwater, which imparts a greater upward acceleration ($a_2 > a_1$).\n\nPart B:\nStarting with Newton's second law in translational form from the reference sheet:\n$$\\Sigma F_y = m a$$\nTaking upward as the positive direction, the net vertical force is the upward buoyant force minus the downward gravitational force:\n$$F_b - F_g = m a$$\nFrom the reference information, the buoyant force for a submerged volume $V$ in fluid density $\\rho$ is $F_b = \\rho V g$, and $F_g = mg$:\n$$\\rho V g - mg = m a$$\nDividing both sides by the mass $m$:\n$$a = \\frac{\\rho V g - mg}{m} = \\frac{\\rho V g}{m} - g$$\n\nPart C:\nClaim: Yes, consistent.\nJustification:\nThe mathematical expression derived in Part B shows that the initial upward acceleration $a$ is directly proportional to the fluid density $\\rho$, since $\\rho$ appears as a linear factor in the numerator of the positive driving term $\\frac{\\rho V g}{m}$. As fluid density increases from $\\rho_1$ to $\\rho_2$, the value of $\\frac{\\rho V g}{m}$ increases while the subtracted gravitational term $g$ remains constant. Therefore, a larger density produces a larger acceleration, which directly validates the qualitative claim made in Part A that $a_2 > a_1$.",
      scoringRubric: [
        "Part A [3 points]: Point A1 [1 pt] for indicating a1 < a2; Point A2 [1 pt] for indicating that the downward gravitational force (weight) is identical in both fluids; Point A3 [1 pt] for justifying that the saltwater exerts a larger upward buoyant force because it is denser, creating a larger net upward force.",
        "Part B [3 points]: Point B1 [1 pt] for starting derivation with Newton's second law (Sigma F = ma); Point B2 [1 pt] for substituting Fb = rho*V*g for buoyant force; Point B3 [1 pt] for correct isolated expression for upward acceleration a = (rho*V*g)/m - g.",
        "Part C [2 points]: Point C1 [1 pt] for addressing the functional dependence between acceleration a and density rho (e.g. proportional, numerator); Point C2 [1 pt] for correctly demonstrating that because rho is in the numerator, higher density leads to higher acceleration, consistent with Part A."
      ]
    }
  ],
  'ap-physics': [],
  'physics': [],
  'ap-english-lang': [
    {
      title: "QUESTION 1: SYNTHESIS ESSAY  [6 POINTS]",
      prompt: `**Suggested reading and writing time: 55 minutes (15 minutes reading and analyzing sources, 40 minutes writing)**\n\nDirections: The following prompt is based on the accompanying six sources (Sources A–F).\n\nThis question requires you to integrate a variety of sources into a coherent, well-written essay. Refer to the sources to support your position; avoid merely summarizing the sources. Support your line of reasoning with an argument that responds to the prompt. Synthesize at least three of the sources.\n\n### Introduction\nIn contemporary public life, digital platforms and news aggregators increasingly rely on algorithmic recommendation engines to curate information feeds tailored to individual user behaviors and preferences. While proponents argue that algorithmic filtering maximizes informational efficiency and democratizes access to relevant knowledge, critics contend that predictive curation encloses citizens within ideological echo chambers, diminishes exposure to contrasting perspectives, and fractures the shared factual baseline essential for democratic deliberation.\n\n### Assignment\nCarefully read the following six sources, including the introductory information for each source. Write an essay that synthesizes at least three of the sources for support and takes a position on the extent to which algorithmic content curation enhances or impedes informed democratic citizenship.\n\n---\n\n### Source A (Monograph)\n*Adapted from Elena Vance, The Architecture of Certainty: Machine Learning and Civic Epistemology, University Academic Press, 2023.*\n\n"When information systems prioritize engagement over epistemic diversity, they fundamentally reshape the civic posture of the user. In physical public squares, exposure to dissenting viewpoints is an inevitable by-product of geographic co-presence. Algorithmic curation, by contrast, operates on the logic of friction minimization: it delivers content pre-calibrated to affirm preexisting cognitive frameworks. Over time, this predictive tailoring creates an illusion of universal consensus within the user's localized digital sphere, rendering opposing claims not merely unconvincing, but unfathomable. The danger is not simply misinformation; it is epistemic closure."\n\n---\n\n### Source B (Quantitative Data Table)\n*Adapted from the Pew Research Initiative on Media and Democracy, "Survey of Public News Consumption and Algorithmic Trust Across Demographics," 2024.*\n\n| Age Demographic | % Relying on Algorithmic Feeds as Primary News Source | % Who Report Algorithmic Feeds Help Discover Novel Topics | % Who Report Encountering Opposing Political Views Weekly | % Trusting Curated Feeds More Than Traditional Editorial Gatekeepers |\n| :--- | :---: | :---: | :---: | :---: |\n| 18–29 | 74% | 68% | 27% | 58% |\n| 30–49 | 59% | 54% | 34% | 46% |\n| 50–64 | 41% | 38% | 46% | 32% |\n| 65+ | 28% | 29% | 53% | 22% |\n\n---\n\n### Source C (Policy Editorial)\n*Adapted from Marcus Reed, "The Myth of the Passive Citizen in the Algorithmic Age," Technological Policy Review, 2022.*\n\n"To characterize users of algorithmic platforms as passive sheep herdable into extremism is to underestimate human agency and the historical reality of media consumption. Before personalized curation, broadcast media was controlled by a handful of corporate conglomerates that enforced a sterile, homogenizing Overton window. Today's algorithmic discovery empowers marginalized voices, subcultures, and localized grassroots investigative reporting that traditional broadcast gatekeepers routinely ignored. The algorithm does not dictate our curiosity; it amplifies our latent interests, granting ordinary citizens unprecedented autonomy over their intellectual trajectories."\n\n---\n\n### Source D (Sociological Study)\n*Adapted from Dr. Aris Thorne and Dr. Maya Lin, "Cognitive Friction and Deliberative Fatigue in Digital Public Spheres," Journal of Social Informatics, 2023.*\n\n"Deliberative democracy requires a threshold level of cognitive friction—the uncomfortable confrontation with evidence that challenges one's cherished convictions. When platforms optimize for seamless user retention, they systematically eliminate this friction. Our neuro-behavioral trials indicate that participants exposed to curated algorithmic feeds experience significantly lower cognitive dissonance than those navigating unstructured archives. However, when subsequently placed in cross-partisan deliberative panels, algorithm-acclimated subjects exhibited higher hostility indices and a decreased willingness to accept factual compromises."\n\n---\n\n### Source E (Legal Commentary)\n*Adapted from Justice Sarah Morales, "Algorithmic Gatekeeping and the First Amendment Tradition," Columbia Constitutional Law Journal, 2024.*\n\n"The First Amendment was conceived to prevent government orthodoxy, operating on Justice Holmes's celebrated premise of a 'free trade in ideas.' Yet the invisible hand of the commercial marketplace has yielded proprietary algorithms whose sorting mechanisms are trade secrets shielded from public accountability. When private entities mediate public discourse through opacity-shrouded code designed exclusively to maximize ad-revenue monetization, the structural conditions prerequisite for informed consent of the governed are eroded from within, without a single state actor ever passing a censorship statute."\n\n---\n\n### Source F (Analytical Synthesis Chart)\n*Adapted from Global Digital Governance Monitor, "Comparative Information Health Across News Delivery Paradigms," 2024.*\n\n"Studies measuring information health reveal a clear trade-off: Algorithmic feeds score highest in user discovery of niche educational topics (8.2/10) and speed of emergency information dissemination (9.1/10), but score lowest in cross-partisan empathy (3.1/10) and resilience against coordinated computational propaganda (2.9/10). In contrast, curated public broadcasting scores moderately across all dimensions (6.5/10), preserving civic stability at the cost of informational velocity."`,
      totalPoints: 6,
      unitNumber: 1,
      unitTitle: "Unit 1: Synthesis & Line of Reasoning",
      skill: "Synthesis Essay (Row A: Thesis 0-1, Row B: Evidence & Commentary 0-4, Row C: Sophistication 0-1)",
      modelAnswer: `While digital algorithms offer unprecedented speed in niche knowledge discovery and dismantle traditional corporate gatekeeping, algorithmic content curation fundamentally impedes informed democratic citizenship by optimizing for cognitive ease rather than epistemic friction, thereby sequestering citizens into ideologically insulated enclaves that fracture the shared factual baseline required for meaningful civic self-governance.\n\nDemocracy has never functioned as a frictionless marketplace of passive amusement; rather, it demands that citizens engage in deliberative friction—an active wrestling with contradictory viewpoints to negotiate collective policy. As Elena Vance observes in Source A, physical public spaces historically compelled citizens into spontaneous encounters with opposing perspectives, whereas algorithmic feeds operate on "friction minimization," systematically isolating users within an "architecture of certainty" that breeds epistemic closure. This psychological isolation is corroborated by empirical data from the Pew Research Initiative (Source B), which reveals a stark democratic vulnerability: among younger voters (ages 18–29), 74% rely primarily on algorithmic feeds, yet only 27% report encountering opposing political viewpoints on a weekly basis, compared to 53% among older generations navigating more traditional media. When nearly three-quarters of rising voters consume news engineered to eliminate intellectual dissonance, civic deliberation is supplanted by the dogmatic reinforcement of preexisting biases.\n\nProponents such as Marcus Reed (Source C) counter that algorithmic platforms liberate the public from the narrow, monolithic orthodoxy of mid-twentieth-century broadcast conglomerates, decentralizing power and allowing grassroots movements to flourish. While Reed rightly identifies that personalized curation enhances informational agency for marginalized subcultures, his argument conflates individual discovery with collective civic competence. Empowering an individual to locate niche communities does not compensate for the loss of a coherent public square. When private corporate platforms, as Justice Morales warns in Source E, mediate democratic discourse using proprietary algorithms shielded from public scrutiny and designed solely to maximize commercial engagement, the constitutional "free trade in ideas" degenerates into a monetization of outrage. Without deliberate structural friction (Source D), exposure to algorithmic purity leaves citizens psychologically ill-equipped to accept the compromises inherent in democratic governance.\n\nUltimately, informed citizenship cannot be measured merely by the volume or velocity of content an individual consumes. It requires the capacity to evaluate contradictory arguments and recognize the legitimacy of fellow citizens' competing interests. By replacing public deliberation with private behavioral prediction, algorithmic curation transforms active democratic participants into atomized epistemic consumers, undermining the very foundation of self-governance.`,
      scoringRubric: [
        "Row A: Thesis (0-1 point) [1 pt]: 1 point for a defensible thesis that establishes a clear line of reasoning taking a position on the extent to which algorithmic curation enhances or impedes informed democratic citizenship. Must be more than a restatement of the prompt.",
        "Row B: Evidence and Commentary (0-4 points) [4 pts]: 4 points for synthesizing evidence from at least three sources (e.g., Sources A, B, and E) with sustained, insightful commentary that explicitly explains how the evidence supports the line of reasoning connecting cognitive friction and corporate monetization to the erosion of democratic deliberation.",
        "Row C: Sophistication (0-1 point) [1 pt]: 1 point for demonstrating a complex understanding of the rhetorical situation, acknowledging the tension between individual informational empowerment (Reed, Source C) and institutional civic fragility (Morales, Source E), and maintaining a persuasive, rhetorically mature style throughout."
      ]
    },
    {
      title: "QUESTION 2: RHETORICAL ANALYSIS ESSAY  [6 POINTS]",
      prompt: `**Suggested time: 40 minutes**\n\nDirections: The following prompt is based on the passage below.\n\n### Introduction & Rhetorical Situation\nIn October 1968, renowned marine biologist and conservation advocate Dr. Evelyn Montgomery addressed the National Association of Chemical Manufacturers at their annual symposium in New York City. At the time, the rapid postwar expansion of synthetic petrochemicals and persistent pesticides was generating enormous corporate profits, while emerging scientific evidence pointed to irreversible bioaccumulation in aquatic ecosystems and threats to avian biodiversity. Montgomery was invited to deliver the keynote address to an audience of industrial executives, chemical engineers, and corporate investors who were largely skeptical of environmental regulations.\n\n### Assignment\nCarefully read the text of Dr. Montgomery's speech below. Write an essay that analyzes the rhetorical choices Montgomery makes to convey her message regarding the ethical responsibility of chemical innovators to harmonize industrial ambition with ecological permanence.\n\n---\n\n### Speech Excerpt: Dr. Evelyn Montgomery (October 1968)\n"Gentlemen of the Association:\n\nI stand before you this morning not as an adversary of human ingenuity, nor as an apostle of primitive austerity, but as a fellow investigator of the natural world. In this grand hall, surrounded by men whose patents have conquered famine, vanquished typhus, and synthesized fibers that clothe millions, it would be churlish to deny that chemistry is the bedrock of modern civilization. You have spent four decades bending refractory atoms to the sovereign will of human necessity. That triumph is real, and it is magnificent.\n\nYet, as I walked along the shoreline of Long Island Sound at dawn yesterday, I did not find the triumph of human intellect; I found the silent calculus of its collateral debt. In the marsh grasses, where the incoming tide once stirred the vibrant feeding of terns and ospreys, there was an unnatural, brooding hush. The osprey clutches lay cracked in their aeries—eggshells thinned to brittle translucence by chlorinated hydrocarbons that your laboratories synthesized with brilliant precision, but without ecological forethought.\n\nYou have measured your success with calibrated instruments: fractional distillation yields, corporate balance sheets, and parts per million of crop yield enhancement. But the biosphere does not keep its books in quarterly dividends. Nature keeps an eternal ledger, and its arithmetic is unforgiving. When you inject into the global bloodstream synthetic compounds whose molecular bonds no living enzyme can dismantle, you are not merely engineering convenience; you are writing promissory notes that will be foreclosed by your children.\n\nConsider the paradox of our shared inheritance. The chemist looks at an organochlorine molecule and sees an intellectual masterpiece—a stable lattice of carbon and chlorine engineered to resist fungal rot and withstand the elements. But in biology, that very stability is a sentence of permanent trespass. What you celebrate as endurance, the sea experiences as an unyielding poison. An atom that never breaks down never leaves; it ascends through trophic tiers, concentrating with mathematical malice in the fatty tissues of plankton, of shad, of bluefish, until it breaches the nurseries of the sea.\n\nLet us speak with the candor that belongs to scientists. You have been told by your marketing counsels that regulation is an ideological impediment, a bureaucratic dampener on enterprise. I ask you today to transcend the narrow horizon of the balance sheet. True genius does not conquer nature by fracturing its cycles; true genius imitates the closed loops of the living cosmos, where every byproduct is the cradle of future life. You possess the intellectual capital, the synthetic acumen, and the research facilities to inaugurate a new era of benign molecular architecture. The question before this assembly is not whether mankind will continue to manufacture the material fabric of its existence; the question is whether you will choose to be the architects of a sustainable renaissance or the prosperous caretakers of an impoverished earth."`,
      totalPoints: 6,
      unitNumber: 2,
      unitTitle: "Unit 2: Rhetorical Situation & Analysis",
      skill: "Rhetorical Analysis Essay (Row A: Thesis 0-1, Row B: Evidence & Commentary 0-4, Row C: Sophistication 0-1)",
      modelAnswer: `In her 1968 address to the National Association of Chemical Manufacturers, Dr. Evelyn Montgomery confronts a hostile audience of corporate executives and chemical engineers by establishing a shared professional ethos, contrasting micro-level industrial triumphs with macro-level biological reckonings, and reframing technological stewardship as the highest manifestation of scientific genius in order to persuade her listeners that genuine innovation requires molecular responsibility toward ecological permanence.\n\nMontgomery begins by deliberately disarming an audience predisposed to dismiss conservationists as anti-progress agitators. Rather than adopting an antagonistic posture, she introduces herself as a "fellow investigator of the natural world," validating their professional pride by explicitly praising their "triumph" in conquering famine and synthesizing essential materials. By deploying elevated, admiring diction—terming their achievements "magnificent" and acknowledging their mastery over "refractory atoms"—Montgomery builds common ground grounded in empirical discipline. This tactical concession flatters the executives' intellect, lowering their defensive guard so they are receptive to the ethical challenge that follows.\n\nHaving established this collegiate solidarity, Montgomery abruptly pivots from abstract praise to visceral sensory contrast, exposing the devastating gap between laboratory intentions and ecological reality. She juxtaposes the "grand hall" of human celebration with the "unnatural, brooding hush" of Long Island Sound, grounding her critique in poignant empirical observation: osprey clutches cracked due to eggshells "thinned to brittle translucence." Through financial metaphors, she contrasts their "quarterly dividends" with nature's "eternal ledger," warning that synthetic compounds are "promissory notes that will be foreclosed by your children." Furthermore, by analyzing the dual nature of chemical stability—noting that the very molecular permanence chemists celebrate as an "intellectual masterpiece" functions in biology as a "sentence of permanent trespass"—she exposes the myopic reductionism of industrial chemistry without insulting the chemists' intelligence.\n\nFinally, Montgomery elevates the speech into a moral challenge by redefining the very definition of scientific "genius." Rejecting corporate counsels who frame ecological safeguards as bureaucratic impediments, she urges the assembly to abandon the "narrow horizon of the balance sheet" and deploy their "intellectual capital" toward "benign molecular architecture." By framing the choice not as commerce versus nature, but as becoming "architects of a sustainable renaissance" versus "prosperous caretakers of an impoverished earth," Montgomery enlists their ambition, transforming environmental restraint from a corporate loss into an inspiring frontier of technological leadership.`,
      scoringRubric: [
        "Row A: Thesis (0-1 point) [1 pt]: 1 point for a defensible thesis that analyzes Montgomery's rhetorical choices (e.g., establishing collegial ethos, contrasting industrial and biological scales of permanence, and redefining scientific genius) to convey her message regarding environmental responsibility.",
        "Row B: Evidence and Commentary (0-4 points) [4 pts]: 4 points for providing specific textual evidence and insightful commentary that explains how Montgomery's rhetorical choices navigate audience skepticism, expose the tragic irony of chemical persistence, and appeal to the executives' professional ambition.",
        "Row C: Sophistication (0-1 point) [1 pt]: 1 point for demonstrating a complex understanding of the rhetorical situation (particularly the hostile corporate audience in 1968) and analyzing the nuanced relationship between speaker ethos, commercial exigence, and moral persuasion."
      ]
    },
    {
      title: "QUESTION 3: ARGUMENT ESSAY  [6 POINTS]",
      prompt: `**Suggested time: 40 minutes**\n\nDirections: The following prompt is based on the quotation below.\n\n### Prompt Context & Quotation\nIn a 1953 philosophical lecture on the nature of democratic institutions and scientific inquiry, political theorist Hannah Arendt observed:\n\n> *"The most radical revolutionary will become a conservative the day after the revolution, for the human mind craves the security of settled orthodoxy far more deeply than it loves the disruptive pursuit of truth."*\n\n### Assignment\nCarefully consider Arendt's assertion regarding the human tendency to trade intellectual and political disruption for the comfort of established orthodoxy.\n\nWrite an essay that argues your position on the extent to which progress in human societies requires the continuous disruption of settled orthodoxies rather than the consolidation of stable consensus.`,
      totalPoints: 6,
      unitNumber: 7,
      unitTitle: "Unit 7: Complex Argumentation & Sophistication",
      skill: "Argument Essay (Row A: Thesis 0-1, Row B: Evidence & Commentary 0-4, Row C: Sophistication 0-1)",
      modelAnswer: `While the consolidation of stable consensus is essential for codifying civil rights into enduring legal frameworks and enabling coordinated civic life, substantive human progress fundamentally relies upon the continuous disruption of settled orthodoxies, because unexamined consensus inevitably stagnates into dogmatic complacency that protects entrenched power and blinds societies to emerging ethical and scientific truths.\n\nHuman history demonstrates that institutional consensus frequently functions not as the objective culmination of truth, but as a normalized defense of societal inequity. In the nineteenth-century United States, the compromise-driven political consensus regarding the legality of chattel slavery—exemplified by the Missouri Compromise of 1820 and the Compromise of 1850—attempted to preserve national stability by treating human bondage as a settled property right. It was only through the unyielding, disruptive agitation of abolitionists such as Frederick Douglass and Harriet Tubman, who intentionally shattered the comforting illusions of Northern neutrality, that the moral atrocity of the institution was forced onto the national conscience. Douglass understood that settled orthodoxy was the enemy of justice, recognizing that power concedes nothing without a demand. Had society prioritized the maintenance of tranquil consensus, the structural brutality of legal enslavement would have persisted indefinitely under the guise of civic harmony.\n\nSimilarly, in the history of science, intellectual advancement requires shattering deeply held dogmas. In the early seventeenth century, the geocentric Ptolemaic model enjoyed the overwhelming consensus of both the Catholic Church and classical European academia, offering a comforting, anthropocentric worldview that anchored cosmic order. When Galileo Galilei championed heliocentrism, his observational evidence disrupted centuries of settled theology and natural philosophy. Despite facing the Roman Inquisition, Galileo's refusal to capitulate to institutional orthodoxy catalyzed the Scientific Revolution, establishing empirical falsification rather than authoritarian deference as the engine of scientific progress.\n\nCritics of perpetual disruption, echoing Arendt's warning regarding revolutionary volatility, legitimately contend that unmitigated rebellion can devolve into nihilistic chaos, as demonstrated by the Jacobin Reign of Terror during the French Revolution, which dismantled all societal scaffolding without establishing functional governance. True progress undoubtedly requires periodic consolidation: the disruptive moral breakthroughs of the Civil Rights Movement of the 1960s ultimately required the stabilizing codification of the Civil Rights Act of 1964 and Voting Rights Act of 1965 to produce lasting structural protections. Yet consolidation must always be understood as a temporary harbor, never a final destination. When consensus becomes sacrosanct, it breeds ideological ossification. Therefore, while institutional stability preserves the hard-won gains of the past, continuous intellectual and moral disruption remains the indispensable catalyst that propels human societies toward higher states of justice and enlightenment.`,
      scoringRubric: [
        "Row A: Thesis (0-1 point) [1 pt]: 1 point for a defensible thesis establishing a clear line of reasoning that qualifies the tension between continuous disruption and stabilizing consensus in societal progress.",
        "Row B: Evidence and Commentary (0-4 points) [4 pts]: 4 points for providing multiple specific, varied pieces of historical, scientific, or cultural evidence (e.g., 19th-century abolitionist disruption of political compromise, Galileo's scientific challenge to Ptolemaic orthodoxy, and the post-disruption codification of the 1964 Civil Rights Act) supported by sustained commentary linking evidence to the line of reasoning.",
        "Row C: Sophistication (0-1 point) [1 pt]: 1 point for demonstrating a complex understanding of the argument by effectively qualifying the claim (differentiating productive disruption from nihilistic chaos like the French Reign of Terror and acknowledging the vital role of legal consolidation), maintaining a sophisticated academic voice throughout."
      ]
    }
  ],
  'ap-psychology': [
    {
      title: "QUESTION 1: ARTICLE ANALYSIS QUESTION (AAQ)  [7 POINTS]",
      prompt: `**Suggested reading and writing time: 25 minutes (10 minutes reading and 15 minutes writing)**\n\nDirections: Read the summary of the empirical research article below and respond to parts A, B, C, D, E, and F.\n\n### Study Summary: "The Impact of Active Retrieval Practice on Memory Retention Under Acute Evaluative Stress"\n*Adapted from Harrison, K. L., & Chen, J. M. (2023). Cognitive Neuropsychology and Memory Systems, 38(2), 142–158.*\n\n**Background & Purpose:**\nCognitive psychologists have long recognized that testing during the learning phase (retrieval practice) promotes long-term retention more effectively than passive restudy. However, real-world educational testing frequently induces acute psychosocial stress, which elevates circulating glucocorticoids and can impair memory retrieval from hippocampal networks. Researchers conducted a study to examine whether the protective benefits of retrieval practice persist when participants are subjected to acute evaluative stress prior to final memory testing.\n\n**Participants & Recruitment:**\nA sample of 120 undergraduate students (mean age = 19.4 years; 68 female, 52 male) was recruited from introductory psychology lecture courses at a large Midwestern state university. Participants received course extra credit for their participation. The study received formal approval from the university Institutional Review Board (IRB), and all participants signed an informed consent document acknowledging they could withdraw at any time without penalty.\n\n**Methodology:**\nParticipants were randomly assigned to one of two initial learning conditions for 40 unfamiliar Swahili-English vocabulary word pairs: (1) **Retrieval Practice Condition**, in which participants engaged in three successive cycles of active cued recall with feedback, or (2) **Restudy Condition**, in which participants viewed the word pairs across three successive timed reading exposures of identical duration. Forty-eight hours later, all participants returned to the laboratory and were randomly assigned to either the **Trier Social Stress Test (TSST)**—which involved delivering an unexpected 5-minute videotaped speech before a stone-faced evaluation committee followed by mental arithmetic—or a **Non-Stress Control Task** involving reading non-evaluative magazines. Immediately following the stress or control manipulation, all participants completed a 40-item cued-recall test to measure retention.\n\n**Results:**\n| Initial Learning Condition | Stress Condition | Mean Vocabulary Pairs Recalled (out of 40) | Standard Deviation (SD) |\n| :--- | :--- | :---: | :---: |\n| Retrieval Practice | Acute Stress (TSST) | 28.4 | 3.2 |\n| Retrieval Practice | No Stress Control | 29.1 | 2.9 |\n| Restudy | Acute Stress (TSST) | 14.2 | 3.8 |\n| Restudy | No Stress Control | 21.6 | 3.4 |\n\nA two-way analysis of variance revealed a statistically significant interaction between learning condition and stress ($F(1, 116) = 18.72, p < 0.001$). Post-hoc testing confirmed that participants in the Restudy condition suffered a statistically significant 34.3% decline in recall when exposed to acute stress ($p < 0.01$), whereas participants in the Retrieval Practice condition demonstrated no statistically significant reduction in recall between the stress and control conditions ($p = 0.42$). Following testing, researchers conducted a debriefing session explaining the nature of the TSST stress manipulation.\n\n---\n\n### Questions\n(A) Identify the research design/method used by the researchers in the study. [1 point]\n\n(B) Describe the operational definition of memory retention used in the study. [1 point]\n\n(C) Describe what the difference in mean recall scores between the stressed and non-stressed Restudy groups indicates in the context of the study. [1 point]\n\n(D) Identify an ethical guideline that the researchers followed in the study. [1 point]\n\n(E) Explain whether the researchers can generalize their findings regarding memory retention under stress to all adults in the general population. [1 point]\n\n(F) Explain how the findings from the Retrieval Practice group support the psychological concept of levels of processing (or elaborative rehearsal). [2 points: 1 point for citing specific research finding; 1 point for explaining psychological mechanism]`,
      totalPoints: 7,
      unitNumber: 2,
      unitTitle: "Unit 2: Cognition & Memory",
      skill: "Article Analysis Question (Parts A-F, 7 Points)",
      modelAnswer: `Part A:\nThe researchers used a controlled experiment (specifically a 2x2 factorial laboratory experiment with random assignment).\n\nPart B:\nThe operational definition of memory retention was the number of Swahili-English vocabulary word pairs correctly recalled out of 40 on the cued-recall test administered 48 hours after learning.\n\nPart C:\nThe lower mean recall score of the stressed Restudy group (14.2 pairs) compared to the non-stressed Restudy group (21.6 pairs) indicates that acute psychosocial stress significantly impairs long-term memory retrieval when material has only been encoded through passive restudy.\n\nPart D:\nThe researchers followed the ethical guideline of informed consent (all participants signed an informed consent form before the study), institutional review board (IRB) approval, protection from harm/debriefing (participants were debriefed about the stress manipulation after testing), or the right to withdraw without penalty.\n\nPart E:\nThe researchers cannot generalize their findings to all adults because the sample was drawn exclusively from undergraduate college students at a single university, who are not demographically or cognitively representative of the broader adult population across different age brackets and educational backgrounds. (Generalizability is limited by sample representativeness, not sample size).\n\nPart F:\nPoint 1 (Finding): Participants in the Retrieval Practice condition maintained a high mean recall score (28.4 out of 40) under acute stress, showing no statistically significant impairment compared to the non-stress retrieval group (29.1).\nPoint 2 (Concept Connection): This finding supports the concept of levels of processing because active retrieval practice requires deeper semantic cognitive elaboration and active reconstructive effort than passive reading, creating stronger and more resilient synaptic memory traces that resist the disruptive interference of stress hormones on retrieval.`,
      scoringRubric: [
        "Part A [1 point]: 1 point for identifying the research design as an experiment (or factorial laboratory experiment). Chief Reader Note: Stating 'survey' or 'test' earns 0 points.",
        "Part B [1 point]: 1 point for describing the operational definition as the number of vocabulary pairs correctly recalled out of 40 on the 48-hour cued-recall test. Must be quantifiable.",
        "Part C [1 point]: 1 point for explaining that acute stress reduced recall performance in the restudy group (including direction of difference in context). Simply restating numbers without direction earns 0 points.",
        "Part D [1 point]: 1 point for identifying informed consent, debriefing, IRB approval, or right to withdraw from the text.",
        "Part E [1 point]: 1 point for explaining that findings cannot be generalized to all adults because the college student sample is not representative of the broader adult population. Chief Reader Note: Citing 'sample size too small' earns 0 points.",
        "Part F [2 points]: 1 point for citing specific empirical finding showing retrieval practice preserved recall under stress (28.4 vs 14.2) + 1 point for explaining how active retrieval fosters deeper semantic processing/elaborative encoding that creates stronger memory pathways resistant to stress disruption."
      ]
    },
    {
      title: "QUESTION 2: EVIDENCE-BASED QUESTION (EBQ)  [7 POINTS]",
      prompt: `**Suggested reading and writing time: 45 minutes (15 minutes reading and 30 minutes writing)**\n\nDirections: Synthesize the three empirical research studies provided below to respond to the prompt in parts A, B, and C.\n\n### Overarching Research Question\nAnalyze the extent to which digital media use influences adolescent psychological well-being.\n\n---\n\n### Source 1: Longitudinal Study on Screen Time Modality and Affective Symptoms\n*Adapted from Kowalski, R. M., & Patel, S. T. (2023). Journal of Youth and Adolescence, 52(4), 789–804.*\n\n**Method & Sample:**\nResearchers conducted a two-year prospective longitudinal cohort study tracking 850 adolescents (aged 13–16 at baseline) across eight diverse public school districts. Participants completed bi-annual validated psychometric assessments measuring daily digital screen time divided into two modalities: (1) **Passive Consumption** (passively scrolling social media feeds, viewing algorithmically curated short videos) and (2) **Active Interactive Engagement** (direct peer messaging, collaborative digital gaming, video calls with family/friends). Depressive symptoms and self-esteem were assessed using the Beck Depression Inventory for Youth (BDI-Y) and Rosenberg Self-Esteem Scale.\n\n**Findings:**\nHierarchical regression analyses revealed that higher hours of daily passive screen consumption at baseline significantly predicted elevated depressive symptom scores two years later ($\\beta = 0.38, p < 0.001$) and lower self-esteem ($\\beta = -0.31, p < 0.01$). In contrast, daily hours spent in active interactive digital communication predicted higher perceived social connectedness and was associated with a slight decrease in depressive symptoms ($\\beta = -0.14, p = 0.03$). The authors concluded that the psychological consequence of screen time is contingent upon the functional modality of engagement rather than gross screen duration alone.\n\n---\n\n### Source 2: Controlled Experiment on Social Comparison Feeds and Body Image Distress\n*Adapted from Nguyen, T. H., Alvarez, M. C., & Becker, D. E. (2022). Clinical Psychological Science, 10(6), 1145–1160.*\n\n**Method & Sample:**\nA sample of 220 female adolescents (aged 14–17) was recruited for a randomized laboratory experiment. Participants were randomly assigned to one of two 20-minute smartphone browsing conditions: (1) **Curated Idealized Feed Condition**, browsing an active Instagram account populated with digitally enhanced peer and influencer lifestyle/fitness images, or (2) **Neutral Nature Feed Condition**, browsing an active account populated with wildlife and scenic photography. Immediately before and after the browsing session, participants completed the State Body Dissatisfaction Scale and Positive and Negative Affect Schedule (PANAS).\n\n**Findings:**\nParticipants in the Curated Idealized Feed condition exhibited a statistically significant post-browsing surge in state body dissatisfaction ($t(108) = 6.42, p < 0.001, d = 0.84$) and a significant increase in negative affect ($p < 0.01$). Participants in the Neutral Nature Feed condition showed no significant change in body satisfaction or affect ($p = 0.76$). Furthermore, 82% of participants in the idealized feed group explicitly reported comparing their physical appearance unfavorably to the images displayed.\n\n---\n\n### Source 3: Cross-Sectional Neuro-Behavioral Survey on Nocturnal Device Use and Sleep Debt\n*Adapted from Thorne, E. B., & Martinez, G. R. (2024). Sleep Medicine and Adolescent Neurodevelopment, 45(1), 58–71.*\n\n**Method & Sample:**\nResearchers surveyed 1,100 high school students (grades 9–12) using wearable actigraphy sleep monitors and self-reported sleep quality diaries over a consecutive 14-day school testing period. The study measured nocturnal smartphone notifications, screen use within 60 minutes of bedtime, sleep latency (minutes required to fall asleep), and total rapid eye movement (REM) sleep duration.\n\n**Findings:**\nStudents who reported active screen engagement within 60 minutes of bedtime experienced an average sleep latency of 48.6 minutes, compared to 19.2 minutes for students with zero pre-sleep screen use ($t = 9.81, p < 0.001$). Actigraphy recordings revealed a significant 22% reduction in total REM sleep duration among nocturnal screen users ($p < 0.01$). Prolonged sleep latency and reduced REM sleep were both strongly correlated with self-reported daytime emotional dysregulation ($r = 0.54, p < 0.001$) and generalized academic anxiety.\n\n---\n\n### Instructions & Tasks\nRespond to parts A, B, and C.\n\n(A) Articulate a defensible claim that responds to the prompt. [1 point]\n\n(B) Support your claim using evidence and psychological reasoning: [3 points]\n(i) Describe a specific piece of empirical evidence from Source 1 or Source 2 that supports your claim, including the source citation. [1 point]\n(ii) Explain how this evidence supports your claim, applying a RELEVANT PSYCHOLOGICAL CONCEPT from the AP Psychology CED to explain the underlying psychological mechanism. [2 points: 1 point for linking evidence to claim; 1 point for concept application]\n\n(C) Support your claim using a DIFFERENT piece of evidence and psychological reasoning: [3 points]\n(i) Describe a DIFFERENT specific piece of empirical evidence from a DIFFERENT source (e.g., Source 3) that supports your claim, including the source citation. [1 point]\n(ii) Explain how this new evidence supports your claim, applying a DIFFERENT PSYCHOLOGICAL CONCEPT from the AP Psychology CED to explain the underlying psychological mechanism. [2 points: 1 point for linking evidence to claim; 1 point for applying a DISTINCT second psychological concept]`,
      totalPoints: 7,
      unitNumber: 4,
      unitTitle: "Unit 4: Social Psychology & Mental Health",
      skill: "Evidence-Based Question (EBQ - Parts A-C, 7 Points)",
      modelAnswer: `Part A:\nWhile active digital communication can foster positive peer connectedness, passive and nocturnal digital media use significantly diminishes adolescent psychological well-being by facilitating harmful social comparison processes and disrupting restorative sleep architecture.\n\nPart B:\n(i) Evidence from Source 2:\nIn a controlled experiment by Nguyen et al. (2022, Source 2), female adolescents who spent 20 minutes browsing a curated idealized lifestyle and appearance feed exhibited a statistically significant surge in state body dissatisfaction (t = 6.42, p < 0.001, d = 0.84) and negative affect, with 82% reporting unfavorable self-evaluations.\n\n(ii) Reasoning & Psychological Concept Application (Upward Social Comparison / Relative Deprivation):\nThis evidence demonstrates that digital media harms well-being when users passively consume idealized portrayals of peers. The underlying mechanism is explained by the psychological concept of upward social comparison: when adolescents contrast their own unfiltered daily lives against curated, filtered highlights of others, they perceive themselves as inferior, which triggers relative deprivation, diminishes self-worth, and escalates depressive feelings.\n\nPart C:\n(i) Evidence from Source 3:\nIn the neuro-behavioral study by Thorne and Martinez (2024, Source 3), high school students who engaged with screens within 60 minutes of bedtime experienced significantly longer sleep latency (48.6 minutes vs 19.2 minutes) and a 22% reduction in total REM sleep duration, which strongly correlated with daytime emotional dysregulation (r = 0.54, p < 0.001).\n\n(ii) Reasoning & DIFFERENT Psychological Concept Application (Circadian Rhythm Disruption / Melatonin Suppression):\nThis evidence supports the claim by illustrating how nocturnal device use impairs affective health through a physiological pathway. The underlying mechanism is circadian rhythm disruption: exposure to blue light emitted by smartphone screens suppresses melatonin secretion by the pineal gland via the suprachiasmatic nucleus (SCN), delaying sleep onset and fragmenting REM sleep architecture, which impairs the prefrontal cortex's ability to regulate mood and increases vulnerability to anxiety. (This concept is distinct from upward social comparison used in Part B).`,
      scoringRubric: [
        "Part A [1 point]: 1 point for a defensible scientific claim that establishes a line of reasoning evaluating the impact of digital media on adolescent well-being. Must take a position beyond mere prompt restatement.",
        "Part B(i) [1 point]: 1 point for describing specific empirical evidence from Source 1 or Source 2 with citation (e.g. Nguyen et al. body dissatisfaction t=6.42, d=0.84, or Kowalski passive screen beta=0.38).",
        "Part B(ii) [2 points]: 1 point for explaining how evidence supports claim + 1 point for applying a substantive CED concept (e.g. Upward Social Comparison, Relative Deprivation, or Normative Social Influence). Chief Reader Note: Generic terms like 'variable' or 'experiment' earn 0 points.",
        "Part C(i) [1 point]: 1 point for describing different empirical evidence from a different source (Source 3) with citation (e.g. Thorne & Martinez sleep latency 48.6m vs 19.2m and 22% REM reduction).",
        "Part C(ii) [2 points]: 1 point for explaining how new evidence supports claim + 1 point for applying a DISTINCT second CED concept (e.g. Circadian Rhythm Disruption, Melatonin/SCN Regulation, or Sleep Deprivation on Prefrontal Executive Function). Chief Reader Note: Repeating the concept from Part B earns 0 points for concept application."
      ]
    }
  ],
  'ap-computer-science': [
    {
      title: "QUESTION 1: METHODS AND CONTROL STRUCTURES  [7 POINTS]",
      prompt: `This question involves scheduling charging sessions at an electric vehicle (EV) charging station. The charging station has a fixed number of charging bays, numbered 1 through 10. The \`ChargingStation\` class contains two helper methods: \`isBayAvailable\` and \`reserveBay\`.\n\n\`\`\`java\npublic class ChargingStation {\n    /** Returns true if bay is available for charging; false otherwise.\n     *  Precondition: 1 <= bay <= 10\n     */\n    private boolean isBayAvailable(int bay)\n    { /* implementation not shown */ }\n\n    /** Reserves the bay for an EV vehicle.\n     *  Precondition: 1 <= bay <= 10\n     */\n    private void reserveBay(int bay)\n    { /* implementation not shown */ }\n\n    /** Searches bays from startBay to endBay, inclusive, for the first available bay.\n     *  Returns the bay number of the first available bay found, or -1 if no bay is available.\n     *  Precondition: 1 <= startBay <= endBay <= 10\n     */\n    public int findFirstAvailableBay(int startBay, int endBay)\n    { /* to be implemented in part (a) */ }\n\n    /** Searches bays from startBay to endBay for an available bay. If found, reserves the\n     *  bay and returns true; otherwise returns false.\n     *  Precondition: 1 <= startBay <= endBay <= 10\n     */\n    public boolean bookChargingSession(int startBay, int endBay)\n    { /* to be implemented in part (b) */ }\n}\n\`\`\`\n\n**Part (a)**: Write the \`findFirstAvailableBay\` method, which searches bays from \`startBay\` to \`endBay\`, inclusive, and returns the lowest-numbered available bay. If no available bay is found, it returns \`-1\`.\n\n**Part (b)**: Write the \`bookChargingSession\` method, which searches from \`startBay\` to \`endBay\`, inclusive. If an available bay is found, it calls \`reserveBay\` on that bay and returns \`true\`; otherwise returns \`false\`.`,
      totalPoints: 7,
      unitNumber: 1,
      unitTitle: "Unit 1 & 2: Methods and Control Structures",
      skill: "Methods & Control Structures (Q1)",
      modelAnswer: `\`\`\`java\n// Part (a)\npublic int findFirstAvailableBay(int startBay, int endBay) {\n    for (int bay = startBay; bay <= endBay; bay++) {\n        if (isBayAvailable(bay)) {\n            return bay;\n        }\n    }\n    return -1;\n}\n\n// Part (b)\npublic boolean bookChargingSession(int startBay, int endBay) {\n    int bay = findFirstAvailableBay(startBay, endBay);\n    if (bay != -1) {\n        reserveBay(bay);\n        return true;\n    }\n    return false;\n}\n\`\`\``,
      scoringRubric: [
        "Part (a) Point 1 [1 pt]: Correctly loops through all bays from startBay to endBay, inclusive (no off-by-one errors).",
        "Part (a) Point 2 [1 pt]: Calls isBayAvailable with bay as parameter within the loop.",
        "Part (a) Point 3 [1 pt]: Returns the first available bay number, and returns -1 after checking all bays (algorithm).",
        "Part (b) Point 4 [1 pt]: Calls findFirstAvailableBay with correct parameters startBay and endBay.",
        "Part (b) Point 5 [1 pt]: Checks whether the returned bay number represents an available bay (bay != -1).",
        "Part (b) Point 6 [1 pt]: Calls reserveBay with the identified bay number when available.",
        "Part (b) Point 7 [1 pt]: Returns true if reserved, false otherwise without calling findFirstAvailableBay multiple times (algorithm)."
      ]
    },
    {
      title: "QUESTION 2: CLASS DESIGN  [7 POINTS]",
      prompt: `This question involves designing a complete Java class named \`StepTracker\` that tracks daily physical activity.\n\nA \`StepTracker\` object is created with an \`int\` parameter representing the minimum number of steps required for a day to be considered "active". The class provides the following methods:\n- \`addDailySteps(int steps)\`: Records the step count for a day.\n- \`activeDays()\`: Returns the number of active days.\n- \`averageSteps()\`: Returns the average number of steps per day as a \`double\`. If no days have been tracked, returns \`0.0\`.\n\n### Sample Execution Trace Table\n| Statement | Return Value | Explanation |\n| :--- | :--- | :--- |\n| \`StepTracker tr = new StepTracker(10000);\` | | Initialized with 10,000 steps active threshold |\n| \`tr.activeDays();\` | \`0\` | No days tracked yet |\n| \`tr.averageSteps();\` | \`0.0\` | No days tracked, returns 0.0 |\n| \`tr.addDailySteps(9000);\` | | Day 1 tracked (not active) |\n| \`tr.addDailySteps(5000);\` | | Day 2 tracked (not active) |\n| \`tr.activeDays();\` | \`0\` | No active days |\n| \`tr.averageSteps();\` | \`7000.0\` | (9000 + 5000) / 2 = 7000.0 |\n| \`tr.addDailySteps(13000);\` | | Day 3 tracked (active, >= 10000) |\n| \`tr.activeDays();\` | \`1\` | 1 active day |\n| \`tr.averageSteps();\` | \`9000.0\` | (9000 + 5000 + 13000) / 3 = 9000.0 |\n\nWrite the complete \`StepTracker\` class. Your implementation must meet all specifications and conform to the examples shown in the table.`,
      totalPoints: 7,
      unitNumber: 3,
      unitTitle: "Unit 3: Class Design & Encapsulation",
      skill: "Class Design (Q2)",
      modelAnswer: `\`\`\`java\npublic class StepTracker {\n    private int minSteps;\n    private int totalSteps;\n    private int numDays;\n    private int numActiveDays;\n\n    public StepTracker(int minActiveSteps) {\n        minSteps = minActiveSteps;\n        totalSteps = 0;\n        numDays = 0;\n        numActiveDays = 0;\n    }\n\n    public void addDailySteps(int steps) {\n        totalSteps += steps;\n        numDays++;\n        if (steps >= minSteps) {\n            numActiveDays++;\n        }\n    }\n\n    public int activeDays() {\n        return numActiveDays;\n    }\n\n    public double averageSteps() {\n        if (numDays == 0) {\n            return 0.0;\n        }\n        return (double) totalSteps / numDays;\n    }\n}\n\`\`\``,
      scoringRubric: [
        "Point 1 [1 pt]: Declares class header: public class StepTracker without parentheses.",
        "Point 2 [1 pt]: Declares all appropriate private instance variables (minSteps, totalSteps, numDays, numActiveDays).",
        "Point 3 [1 pt]: Declares public constructor header StepTracker(int ...) and initializes all instance variables correctly.",
        "Point 4 [1 pt]: Declares method headers: public void addDailySteps(int), public int activeDays(), public double averageSteps().",
        "Point 5 [1 pt]: In addDailySteps, updates total steps and total days, and conditionally increments active days.",
        "Point 6 [1 pt]: In averageSteps, guards against division by zero when numDays == 0 and returns 0.0.",
        "Point 7 [1 pt]: In averageSteps, calculates and returns floating-point quotient (double) totalSteps / numDays (algorithm)."
      ]
    },
    {
      title: "QUESTION 3: ARRAY / ARRAYLIST  [5 POINTS]",
      prompt: `This question involves analyzing student attendance records across courses. The \`CourseRecord\` class has methods \`getStudentID()\` and \`getAbsences()\`.\n\nThe \`Attendance\` class maintains two \`ArrayList<CourseRecord>\` instance variables: \`historyList\` and \`mathList\`.\n\n\`\`\`java\npublic class Attendance {\n    private ArrayList<CourseRecord> historyList;\n    private ArrayList<CourseRecord> mathList;\n\n    /** Returns the number of students who are enrolled in both the history course and the math course\n     *  but have more absences in the history course than the math course.\n     *  Preconditions:\n     *  - No student ID appears multiple times in historyList or mathList.\n     *  - historyList and mathList do not contain null elements.\n     *  Postcondition: historyList and mathList are unchanged.\n     */\n    public int moreHistoryThanMathAbsences()\n    { /* to be implemented */ }\n}\n\`\`\`\n\nWrite the \`moreHistoryThanMathAbsences\` method. Elements of \`historyList\` and \`mathList\` must remain unchanged.`,
      totalPoints: 5,
      unitNumber: 4,
      unitTitle: "Unit 4: Arrays and ArrayList",
      skill: "Data Analysis with ArrayList (Q3)",
      modelAnswer: `\`\`\`java\npublic int moreHistoryThanMathAbsences() {\n    int count = 0;\n    for (CourseRecord hst : historyList) {\n        for (CourseRecord mth : mathList) {\n            if (hst.getStudentID().equals(mth.getStudentID())) {\n                if (hst.getAbsences() > mth.getAbsences()) {\n                    count++;\n                }\n            }\n        }\n    }\n    return count;\n}\n\`\`\``,
      scoringRubric: [
        "Point 1 [1 pt]: Accesses all elements in historyList and mathList using nested loops (no bounds errors).",
        "Point 2 [1 pt]: Calls getStudentID() on CourseRecord elements from both lists and compares using .equals().",
        "Point 3 [1 pt]: Calls getAbsences() on matching CourseRecord objects and compares with > operator.",
        "Point 4 [1 pt]: Initializes count accumulator to 0 and increments within conditional block.",
        "Point 5 [1 pt]: Returns correct count of students with more history absences without modifying original lists (algorithm)."
      ]
    },
    {
      title: "QUESTION 4: 2D ARRAYS  [6 POINTS]",
      prompt: `This question involves evaluating game board rows represented by a 2D array of \`Space\` objects. The \`Space\` class contains \`getColor()\` (returns \`String\`) and \`getPoints()\` (returns \`int\`).\n\nThe \`GameBoard\` class maintains a 2D array of \`Space\` objects:\n\n\`\`\`java\npublic class GameBoard {\n    private Space[][] board;\n\n    /** Returns the point value of the row in board specified by targetRow.\n     *  The point value is the sum of the points in the row, or two times the sum\n     *  if all spaces in the row have the same color.\n     *  Preconditions: No elements of board are null. board has at least 2 rows and 2 cols.\n     *  targetRow is a valid row index.\n     */\n    public int getPointsForRow(int targetRow)\n    { /* to be implemented */ }\n}\n\`\`\`\n\nWrite the \`getPointsForRow\` method. The point value is the sum of points in \`board[targetRow]\`, multiplied by 2 if every space in that row has identical color.`,
      totalPoints: 6,
      unitNumber: 4,
      unitTitle: "Unit 4: 2D Arrays",
      skill: "2D Array Row Traversal & Comparison (Q4)",
      modelAnswer: `\`\`\`java\npublic int getPointsForRow(int targetRow) {\n    int sum = 0;\n    boolean sameColor = true;\n    String firstColor = board[targetRow][0].getColor();\n\n    for (int col = 0; col < board[targetRow].length; col++) {\n        Space current = board[targetRow][col];\n        sum += current.getPoints();\n        if (!current.getColor().equals(firstColor)) {\n            sameColor = false;\n        }\n    }\n\n    if (sameColor) {\n        return sum * 2;\n    }\n    return sum;\n}\n\`\`\``,
      scoringRubric: [
        "Point 1 [1 pt]: Accesses all elements of board[targetRow] across all columns (no bounds errors).",
        "Point 2 [1 pt]: Calls getColor() and getPoints() on Space elements of the row.",
        "Point 3 [1 pt]: Compares space colors using .equals() (NOT ==).",
        "Point 4 [1 pt]: Accumulates points of all spaces in target row into a sum variable.",
        "Point 5 [1 pt]: Correctly determines whether all spaces in the row share the same color (algorithm).",
        "Point 6 [1 pt]: Returns sum * 2 if all colors match, or sum otherwise without early return (algorithm)."
      ]
    }
  ],
  'ap-world-history': [
    {
      title: "SECTION II PART A: DOCUMENT-BASED QUESTION (DBQ)  [7 POINTS]",
      prompt: `**Suggested reading and writing time: 60 minutes (15 minutes reading and 45 minutes writing)**\n\nDirections: Question 1 is based on the accompanying Documents 1–7. The documents have been edited for the purpose of this exercise. In your response you should do the following:\n- Respond to the prompt with a historically defensible thesis or claim that establishes a line of reasoning.\n- Describe a broader historical context relevant to the prompt.\n- Support an argument in response to the prompt using at least six documents.\n- Use at least one additional piece of the specific historical evidence beyond that found in the documents.\n- For at least two documents, explain how or why the document's point of view, purpose, historical situation, and/or audience is relevant to an argument.\n- Demonstrate a complex understanding of a historical development that is the focus of the prompt, using evidence to corroborate, qualify, or modify an argument.\n\n### Historical Prompt\nEvaluate the extent to which European transoceanic maritime connections disrupted existing indigenous economic and commercial networks in South and Southeast Asia in the period 1450–1750.\n\n---\n\n### Document 1\n*Source: Official diplomatic letter from Sultan Alauddin Mansur Syah of Aceh (Sumatra) to the Ottoman Sultan Murad III, 1568.*\n"The Portuguese infidels have fortified the port of Malacca and continuously assault the merchant fleets of our faithful Muslim traders navigating between India, Calicut, and our archipelago. They seek to monopolize the royal pepper routes and divert revenue from Islamic ports. We earnestly entreat Your Imperial Majesty to dispatch Ottoman cannons, siege engineers, and armaments so our combined fleets may break their naval blockade and restore unrestricted transit for the merchants of Islam across the Indian Ocean."\n\n---\n\n### Document 2\n*Source: Official instruction register of Jan Pieterszoon Coen, Governor-General of the Dutch East India Company (VOC), Batavia (Java), 1622.*\n"We cannot maintain commerce without war, nor war without commerce. To guarantee our exclusive monopoly over nutmeg and cloves in the Banda Islands and the Moluccas, all indigenous vessels sailing without a VOC pass (pas-cedul) shall be treated as contraband pirates, their cargoes confiscated, and their commanders punished. No Asian junk or Portuguese merchant may trade in these seas without our express license."\n\n---\n\n### Document 3\n*Source: Jean-Baptiste Tavernier, French Huguenot gem merchant and traveler, travel journal published as Six Voyages in Turkey, Persia, and India, 1676, describing commerce in Surat, Mughal Empire.*\n"The port of Surat is the chief emporium of all the Indies. Although the English and Dutch companies have substantial warehouses here, they are entirely dependent upon the wealthy Hindu and Jain banyas (financiers). These indigenous bankers control the mints, exchange European silver reals into Mughal rupees at advantageous margins, and issue bills of exchange (hundis) that finance both local weaving villages and European ship cargoes. If an indigenous merchant feels mistreated by the Europeans, the Mughal governor shuts the gates and suspends all outbound exports until satisfaction is made."\n\n---\n\n### Document 4\n*Source: Letter from King Narai of Ayutthaya (Siam) to King Louis XIV of France, 1686.*\n"Wishing to preserve our royal ports against the overbearing demands of the Dutch company, who continually seek exclusive monopoly over our tin and deerskin exports, we welcome French merchants and diplomatic envoys to reside in our capital. By inviting multiple European nations to compete alongside our Chinese, Persian, and Siamese merchants, our Kingdom maintains sovereignty and prevents any single foreign crown from dominating our coastal commerce."\n\n---\n\n### Document 5\n*Source: Memorial to the Kangxi Emperor of the Qing Dynasty from Shi Lang, Admiral of the Imperial Navy, 1684, regarding maritime trade bans.*\n"Although the court enacted coastal evacuation bans to sever pirate ties, hundreds of merchant junks from Fujian and Guangdong sail annually to Manila, Batavia, and Nagasaki laden with silk, tea, and porcelain. Asian ports desperately depend on our manufactured goods, and return vast quantities of foreign silver bullion to our southern provinces. Lifting the sea ban and licensing our native merchants will fill the imperial treasury and ensure that European companies must purchase our products on Chinese terms."\n\n---\n\n### Document 6\n*Source: Records of the British East India Company (EIC) Council at Fort St. George (Madras), India, 1704.*\n"Our investments in printed calicoes and fine muslins have suffered severe delays this season due to the immense credit provided to weavers by Gujarati and Armenian merchant syndicates. These local traders offer higher advance payments in silver than our charter allows, thereby securing the highest-grade textiles for the Red Sea and Persian Gulf markets before our supercargoes can intervene. We must negotiate amicable rate terms with local broker Virji Vora to secure our seasonal consignments."\n\n---\n\n### Document 7\n*Source: Japanese Red Seal (Shuinsen) trading permit and navigational maritime route chart preserved in the Nagasaki archives, circa 1630.*\n*(Visual artifact: Map illustrating seasonal monsoon shipping corridors connecting Kyoto and Nagasaki with the ports of Faifo (Vietnam), Ayutthaya (Siam), Manila (Philippines), and Patani (Malay Peninsula), annotated with cargo lists containing copper, silver, silk, deer hides, and ceramics exchanged between Japanese, Chinese, and Southeast Asian merchant guilds without European intermediaries.)*`,
      totalPoints: 7,
      unitNumber: 4,
      unitTitle: "Unit 4: Transoceanic Interconnections (c. 1450 to c. 1750)",
      skill: "Document-Based Question (DBQ - 7 Points)",
      modelAnswer: `Between 1450 and 1750, European maritime expansion into South and Southeast Asia—spearheaded initially by Portuguese armed trading posts and later by Dutch and British joint-stock chartered companies—partially disrupted traditional coastal chokepoints and localized spice monopolies. However, this disruption was largely confined to insular maritime corridors, as powerful land-based states like the Mughal Empire and resilient indigenous mercantile syndicates continued to dominate trans-regional finance, manufacturing, and inland trade networks, compelling Europeans to adapt to preexisting Asian commercial structures.\n\n### Contextualization\nPrior to 1450, the Indian Ocean basin flourished as a peaceful, polycentric commercial crossroads connecting Swahili city-states, the Islamic Middle East, India, and Ming China, governed by seasonal monsoon winds rather than naval militarism. The fall of Constantinople to the Ottoman Empire in 1453 and European mercantilist desires to bypass Islamic trade intermediaries motivated Iberian exploratory voyages around the Cape of Good Hope. Concurrently, the global demand for American silver—extracted from Potosí and Zacatecas—fueled transoceanic liquidity, as European merchants utilized silver to purchase Asian luxury commodities like spices, silk, and porcelain.\n\n### Evidence from Documents & Analysis\nEuropean maritime powers undoubtedly disrupted local commercial autonomy through naval violence and coercive monopolies in specific maritime zones. In Document 1, the Sultan of Aceh laments that Portuguese naval blockades at Malacca actively assaulted peaceful Muslim merchant fleets, prompting an appeal for Ottoman armaments to counter Iberian aggression. In Document 2, VOC Governor-General Jan Pieterszoon Coen explicitly codifies this violent disruption, articulating a ruthless militarized policy where indigenous vessels lacking a Dutch pass were confiscated and treated as contraband to establish a monopoly over the Banda spice trade.\n\nYet, European disruption was severely constrained by the power of land-based Asian empires and domestic financiers. In the Mughal Empire, as Jean-Baptiste Tavernier observes in Document 3, European companies at Surat were completely subservient to indigenous Hindu and Jain banya bankers, who controlled the mints, converted European silver bullion, and issued hundis (bills of exchange). Indigenous rulers actively checked European aggression; as Tavernier notes, the Mughal governor could instantly shut down European trade if merchants were mistreated. Similarly, British East India Company records at Madras (Document 6) acknowledge that Gujarati and Armenian merchant syndicates consistently outbid the British by providing higher silver credit advances to local weavers, forcing European supercargoes to rely on prominent Indian brokers like Virji Vora.\n\nFurthermore, Southeast Asian and East Asian states actively counterbalanced European encroachments through strategic diplomacy and independent trade networks. King Narai of Ayutthaya (Document 4) deliberately welcomed French merchants to create diplomatic leverage against the aggressive Dutch VOC, ensuring that Siamese, Chinese, and Persian merchants maintained competitive autonomy. In China, Admiral Shi Lang (Document 5) successfully advocated for lifting maritime bans because Chinese junks sailing to Manila and Batavia commanded favorable terms of trade, drawing massive influxes of foreign silver into the Qing economy. This indigenous commercial vitality is corroborated by Document 7, which illustrates active 17th-century Japanese Red Seal maritime corridors across Vietnam, Siam, and the Philippines, proving that robust intra-Asian commerce flourished independently of European shipping.\n\n### Outside Evidence\nBeyond the provided documents, the Manila Galleon trade (established in 1571) demonstrates how Asian economic networks subordinated European commercial goals. Spanish galleons transported hundreds of tons of silver from Acapulco across the Pacific to Manila, where nearly all of it was eagerly absorbed by Chinese merchants in exchange for silks and porcelain to meet the domestic tax demands of the Ming Single Whip Law. Rather than dismantling the Chinese economy, European maritime connections acted as a supply pipeline that reinforced the global primacy of Chinese manufacturing.\n\n### Sourcing (HIPP)\nThe historical situation and purpose of Document 2 are vital to understanding its extreme rhetoric: Coen was writing an internal administrative instruction to VOC directors during the consolidation of the Dutch commercial empire, intentionally justifying brutal military subjugation in the Banda Islands to secure shareholder profits back in Amsterdam. In contrast, the point of view of Jean-Baptiste Tavernier in Document 3 reflects that of an independent European merchant and gem connoisseur; lacking allegiance to any single national trading company, Tavernier offers an objective, unvarnished assessment of European vulnerability and the immense financial sophistication of indigenous Indian banking houses.\n\n### Complex Understanding (Nuance & Synthesis)\nUltimately, the historical impact of European transoceanic connections was characterized by a profound dichotomy rather than uniform disruption. In fragile, insular environments such as the Moluccas, European naval violence eradicated indigenous autonomy and coerced labor systems. However, across the vast continental empires of Mughal India, Ayutthayan Siam, and Qing China, European companies were compelled to operate merely as "country traders" and financial intermediaries within preexisting Asian economic frameworks, demonstrating the enduring resilience of Asian trade networks until the advent of the Industrial Revolution in the late 18th century.`,
      scoringRubric: [
        "Thesis/Claim (0-1 pt) [1 pt]: Historically defensible thesis establishing a line of reasoning evaluating the extent of economic disruption (e.g. coastal/insular disruption vs inland and financial resilience).",
        "Contextualization (0-1 pt) [1 pt]: Accurately describes broader historical context (e.g. pre-existing Indian Ocean monsoon trade, Ottoman trade chokepoints, Fall of Constantinople, or American silver influx).",
        "Evidence from the Documents (0-2 pts) [2 pts]: 1 pt for using content from at least 3 documents to address prompt; 2 pts for supporting an argument in response to prompt using at least 6 documents.",
        "Evidence Beyond the Documents (0-1 pt) [1 pt]: Provides at least one additional specific historical example outside documents (e.g. Manila galleons, Ming Single Whip Law, Potosí silver, or British East India Company royal charter).",
        "Sourcing / HIPP (0-1 pt) [1 pt]: Explains how or why the document's Historical situation, Intended audience, Purpose, or Point of view is relevant to an argument for at least 2 documents (e.g. Coen's administrative purpose in Doc 2, Tavernier's merchant POV in Doc 3).",
        "Complex Understanding (0-1 pt) [1 pt]: Demonstrates complex historical understanding through nuance, corroboration, or qualification (e.g. contrasting violent Dutch monopolization in the Moluccas with complete European financial subservience to Mughal bankers and Qing export dominance)."
      ]
    },
    {
      title: "SECTION II PART B: LONG ESSAY QUESTION (LEQ)  [6 POINTS]",
      prompt: `**Suggested writing time: 40 minutes**\n\nDirections: In your response you should do the following:\n- Respond to the prompt with a historically defensible thesis or claim that establishes a line of reasoning.\n- Describe a broader historical context relevant to the prompt.\n- Support an argument in response to the prompt using at least two pieces of specific and relevant evidence.\n- Use historical reasoning (e.g., comparison, causation, or continuity and change) to structure an argument.\n- Demonstrate a complex understanding of a historical development that is the focus of the prompt, using evidence to corroborate, qualify, or modify an argument.\n\n### Historical Prompt\nIn the period 1200 to 1450, evaluate the extent to which the expansion of trans-regional empires (such as the Mongol Empire or the Mali Empire) fostered cultural and economic exchange across Afro-Eurasia.`,
      totalPoints: 6,
      unitNumber: 2,
      unitTitle: "Unit 2: Networks of Exchange (c. 1200 to c. 1450)",
      skill: "Long Essay Question (LEQ - 6 Points)",
      modelAnswer: `In the period from 1200 to 1450, the unprecedented expansion of trans-regional empires—most notably the Mongol Empire across Eurasia and the Mali Empire in West Africa—profoundly accelerated cross-cultural synthesis, commercial integration, and the transcontinental diffusion of technological innovations by establishing secure communication networks; however, this imperial consolidation also produced devastating unintended consequences, most notably facilitating the catastrophic spread of pandemic diseases that destabilized the very civilizations it connected.\n\n### Contextualization\nFollowing the fragmentation of classical empires, Afro-Eurasia in the post-classical era was characterized by regionalized kingdoms and decentralized feudal structures. Although long-distance commerce persisted along the Silk Roads, the Indian Ocean, and Trans-Saharan routes, merchants faced recurrent extortion from regional warlords, hazardous terrain, and divergent legal systems. The dramatic rise of pastoral nomadic confederations in Central Asia under Genghis Khan and centralized West African state-building in the Sahel transformed these fractured corridors into unified geopolitical zones, creating the institutional stability necessary for trans-regional interaction.\n\n### Thesis & Historical Reasoning (Causation & Continuity/Change)\nThe expansion of the Mongol Empire catalyzed global economic integration by establishing the Pax Mongolica across Eurasia. By conquering diverse polities from China's Song Dynasty to the Abbasid Caliphate in Baghdad and the Russian principalities, the Mongols imposed uniform legal codes (the Yassa) and guarded trans-continental caravans. To accelerate administrative and commercial logistics, the Mongols expanded the Yam system—a postal courier network of relay stations equipped with fresh horses and supply depots—and issued the paiza, an official passport guaranteeing safe conduct to foreign merchants and diplomatic envoys. This unprecedented geopolitical security dramatically reduced transaction costs and risk along the Silk Roads, enabling Italian merchants like Marco Polo to travel from Venice to the court of Kublai Khan in Khanbaliq (Dadu) and return with detailed geographical records.\n\nBeyond overland commercial wealth, imperial expansion fostered profound technological, scientific, and cultural transfers across civilizational boundaries. Under Mongol auspices, Chinese technologies such as papermaking, movable type printing, the magnetic compass, and gunpowder diffused westward to the Islamic world and Western Europe, where they subsequently revolutionized European military architecture and maritime navigation. Similarly, Mongol rulers in the Ilkhanate (Persia) and Yuan Dynasty established observatories and medical academies where Persian astronomers and Chinese physicians collaborated, synthesizing Islamic astronomical tables with Chinese botanical knowledge.\n\nIn West Africa, the Mali Empire under Sundiata Keita and later Mansa Musa achieved comparable trans-regional synthesis along the Trans-Saharan trade routes. By controlling the prolific gold fields of Bure and Bambuk and regulating the vital salt trade through Taghaza, Mali became an indispensable node in the wider Mediterranean and Islamic economic system. Mansa Musa’s legendary 1324 pilgrimage (hajj) to Mecca distributed so much gold in Cairo that it devalued the metal for over a decade, advertising Mali’s immense wealth to European cartographers (as depicted in the 1375 Catalan Atlas). Upon his return, Mansa Musa recruited Andalusian architects, such as Abu Ishaq al-Sahili, to construct the monumental mud-brick Djinguereber Mosque in Timbuktu, transforming the city into a renowned Islamic intellectual center with extensive madrasas that attracted scholarly manuscripts across North Africa.\n\n### Complex Understanding (Nuance & Qualification)\nHowever, a comprehensive historical evaluation reveals that imperial integration was accompanied by monumental structural destruction and demographic collapse. The very logistical infrastructure that facilitated the safe transit of silk, gold, and ideas also served as an open conduit for biological contagion. In the 1340s, the Black Death (bubonic plague caused by Yersinia pestis) spread rapidly along Mongol trade arteries and naval routes from Central Asia into Western Europe, the Middle East, and North Africa, killing an estimated one-third to one-half of the populations in affected areas. This demographic catastrophe severed agricultural supply chains, triggered urban economic collapse, and ultimately precipitated the political disintegration of the Mongol khanates themselves. Thus, while trans-regional empires successfully forged the foundational economic and intellectual bridges of the pre-modern world, their hyper-connected arteries simultaneously unleashed catastrophic biological vulnerabilities that permanently reshaped human history.`,
      scoringRubric: [
        "Thesis/Claim (0-1 pt) [1 pt]: Historically defensible thesis establishing a clear line of reasoning (e.g. accelerated cultural/economic transfer via Pax Mongolica and Trans-Saharan routes qualified by biological devastation of the Black Death).",
        "Contextualization (0-1 pt) [1 pt]: Accurately describes broader historical context (e.g. fractured post-classical Afro-Eurasian trade routes, rise of pastoral nomadic confederations, or Trans-Saharan trade).",
        "Evidence (0-2 pts) [2 pts]: 1 pt for providing at least 2 specific historical examples; 2 pts for supporting an argument in response to the prompt using multiple specific examples (e.g. Yam system, paiza passport, Pax Mongolica, Marco Polo, diffusion of gunpowder/papermaking, Mansa Musa's hajj, Timbuktu, Catalan Atlas).",
        "Historical Reasoning (0-1 pt) [1 pt]: Uses historical reasoning (causation, comparison, or CCOT) to structure a sustained argument on how empires facilitated exchange.",
        "Complex Understanding (0-1 pt) [1 pt]: Demonstrates a complex understanding of the historical development by qualifying or modifying the argument (e.g. weighing the positive commercial/cultural transfers against the devastating demographic and economic collapse caused by the plague/Black Death)."
      ]
    }
  ]
};

// Wire up subject alias references so they share the pristine question banks
PRISTINE_GOLDEN_QUESTIONS['chemistry'] = PRISTINE_GOLDEN_QUESTIONS['ap-chemistry'];
PRISTINE_GOLDEN_QUESTIONS['biology'] = PRISTINE_GOLDEN_QUESTIONS['ap-biology'];
PRISTINE_GOLDEN_QUESTIONS['ap-physics'] = PRISTINE_GOLDEN_QUESTIONS['ap-physics-1'];
PRISTINE_GOLDEN_QUESTIONS['physics'] = PRISTINE_GOLDEN_QUESTIONS['ap-physics-1'];
PRISTINE_GOLDEN_QUESTIONS['ap-lang'] = PRISTINE_GOLDEN_QUESTIONS['ap-english-lang'];
PRISTINE_GOLDEN_QUESTIONS['ap-english'] = PRISTINE_GOLDEN_QUESTIONS['ap-english-lang'];
PRISTINE_GOLDEN_QUESTIONS['english-lang'] = PRISTINE_GOLDEN_QUESTIONS['ap-english-lang'];
PRISTINE_GOLDEN_QUESTIONS['ap-psych'] = PRISTINE_GOLDEN_QUESTIONS['ap-psychology'];
PRISTINE_GOLDEN_QUESTIONS['psychology'] = PRISTINE_GOLDEN_QUESTIONS['ap-psychology'];
PRISTINE_GOLDEN_QUESTIONS['psych'] = PRISTINE_GOLDEN_QUESTIONS['ap-psychology'];
PRISTINE_GOLDEN_QUESTIONS['csa'] = PRISTINE_GOLDEN_QUESTIONS['ap-computer-science'];
PRISTINE_GOLDEN_QUESTIONS['ap-csa'] = PRISTINE_GOLDEN_QUESTIONS['ap-computer-science'];
PRISTINE_GOLDEN_QUESTIONS['computer-science-a'] = PRISTINE_GOLDEN_QUESTIONS['ap-computer-science'];
PRISTINE_GOLDEN_QUESTIONS['ap-whap'] = PRISTINE_GOLDEN_QUESTIONS['ap-world-history'];
PRISTINE_GOLDEN_QUESTIONS['whap'] = PRISTINE_GOLDEN_QUESTIONS['ap-world-history'];
PRISTINE_GOLDEN_QUESTIONS['world-history'] = PRISTINE_GOLDEN_QUESTIONS['ap-world-history'];

/**
 * Main Pipeline Orchestrator:
 * Takes raw generated questions, runs through all 3 stages, and repairs or swaps from Golden Vault.
 */
export function runMultiStageVerificationPipeline(
  rawQuestions: any[],
  subjectId: string,
  targetTopic?: string
): { verifiedQuestions: any[]; stats: { total: number; passedDirect: number; healed: number; replacedFromVault: number } } {
  const verifiedQuestions: any[] = [];
  let passedDirect = 0;
  let healed = 0;
  let replacedFromVault = 0;

  const s = (subjectId || '').toLowerCase();
  const isAphg = s.includes('geography') || s.includes('aphg') || s.includes('human');
  const isApes = s.includes('environmental') || s.includes('apes');
  const isCalculusBc = s.includes('bc') || s.includes('calculus bc');
  const isChem = s.includes('chemistry') || s.includes('chem');
  const isBio = s.includes('biology') || s.includes('bio');
  const isPhys1 = s.includes('physics 1') || s.includes('phys');
  const isLang = s.includes('english') || s.includes('lang');
  const isPsych = s.includes('psych');
  const isCsa = s.includes('computer science a') || s.includes('csa') || (s.includes('computer') && !s.includes('principles') && !s.includes('csp'));
  const isWhap = s.includes('world history') || s.includes('whap') || (s.includes('world') && s.includes('history')) || (s.includes('history') && !s.includes('u.s.') && !s.includes('us') && !s.includes('euro'));
  const goldenKey = isWhap ? 'ap-world-history' : (isCsa ? 'ap-computer-science' : (isPsych ? 'ap-psychology' : (isLang ? 'ap-english-lang' : (isAphg ? 'aphg' : (isApes ? 'apes' : (isCalculusBc ? 'ap-calculus-bc' : (isChem ? 'ap-chemistry' : (isBio ? 'ap-biology' : (isPhys1 ? 'ap-physics-1' : (s.includes('calculus') ? 'ap-calculus-ab' : s))))))))));
  const goldenBank = PRISTINE_GOLDEN_QUESTIONS[goldenKey] || PRISTINE_GOLDEN_QUESTIONS[s] || (isWhap ? PRISTINE_GOLDEN_QUESTIONS['ap-world-history'] : (isCsa ? PRISTINE_GOLDEN_QUESTIONS['ap-computer-science'] : (isPsych ? PRISTINE_GOLDEN_QUESTIONS['ap-psychology'] : (isLang ? PRISTINE_GOLDEN_QUESTIONS['ap-english-lang'] : (isCalculusBc ? PRISTINE_GOLDEN_QUESTIONS['ap-calculus-bc'] : (isChem ? PRISTINE_GOLDEN_QUESTIONS['ap-chemistry'] : (isBio ? PRISTINE_GOLDEN_QUESTIONS['ap-biology'] : (isPhys1 ? PRISTINE_GOLDEN_QUESTIONS['ap-physics-1'] : (isAphg ? PRISTINE_GOLDEN_QUESTIONS['aphg'] : (isApes ? PRISTINE_GOLDEN_QUESTIONS['apes'] : PRISTINE_GOLDEN_QUESTIONS['ap-calculus-ab'])))))))))) || [];

  for (let idx = 0; idx < rawQuestions.length; idx++) {
    const rawQ = rawQuestions[idx];
    let processedQ = rawQ;

    if (isAphg) {
      // Step 1 of APHG Double Verification: Deep Structural Self-Healing
      processedQ = healAphgQuestion(processedQ);
      healed++;
    }

    // Resolve canonical unit early for precise fallback matching
    const promptStr = String(processedQ.prompt || processedQ.question || '');
    const canonical = resolveCanonicalUnit(subjectId, processedQ.unitNumber || processedQ.unitTitle || targetTopic, promptStr);

    const getFallback = (qIndex: number) => {
      if (isAphg) {
        return getAphgPristineUnitQuestion(canonical.unitNumber, targetTopic, qIndex);
      }
      return goldenBank[qIndex % goldenBank.length] || processedQ;
    };

    // Stage 1: Scope Check
    const scopeCheck = verifyCurriculumScope(processedQ, subjectId);
    if (!scopeCheck.inScope) {
      console.warn(`[MultiStageVerification] Q${idx + 1} REJECTED by Scope Gate:`, scopeCheck.reasons);
      const fallback = getFallback(idx);
      verifiedQuestions.push({ ...fallback, id: idx + 1 });
      replacedFromVault++;
      continue;
    }

    // Stage 2: Solvability Check
    const solvabilityCheck = verifyBlindSolvability(processedQ);
    if (!solvabilityCheck.isSolvable) {
      console.warn(`[MultiStageVerification] Q${idx + 1} REJECTED by Blind Solver Gate:`, solvabilityCheck.issues);
      const fallback = getFallback(idx);
      verifiedQuestions.push({ ...fallback, id: idx + 1 });
      replacedFromVault++;
      continue;
    }

    // Stage 3: Math & Feasibility Check
    const mathCheck = verifyMathAndFeasibility(processedQ, subjectId);
    if (!mathCheck.isValid) {
      console.warn(`[MultiStageVerification] Q${idx + 1} REJECTED by Math Feasibility Gate:`, mathCheck.issues);
      const fallback = getFallback(idx);
      verifiedQuestions.push({ ...fallback, id: idx + 1 });
      replacedFromVault++;
      continue;
    }

    // Stage 4: APHG Specific Double-Verification (Zero-Hallucination Gate)
    if (isAphg) {
      const aphgCheck = verifyAphgGeographicalAccuracy(processedQ, targetTopic);
      if (!aphgCheck.isValid) {
        console.warn(`[MultiStageVerification] Q${idx + 1} APHG Geographical Model Gate FAILED:`, aphgCheck.issues);
        if (!aphgCheck.canHeal) {
          console.warn(`[MultiStageVerification] Q${idx + 1} Cannot be safely healed. Replacing with Unit ${canonical.unitNumber} pristine Golden Vault question.`);
          const fallback = getFallback(idx);
          verifiedQuestions.push({ ...fallback, id: idx + 1 });
          replacedFromVault++;
          continue;
        }
      }
    }

    // Auto-heal minor metadata
    const realPoints = isWhap
      ? (rawQuestions.length === 2
          ? (idx === 0 ? 7 : 6)
          : (processedQ.totalPoints === 7 || processedQ.totalPoints === 6 || processedQ.totalPoints === 3 ? processedQ.totalPoints : (idx % 5 === 0 ? 7 : (idx % 5 === 1 ? 6 : 3))))
      : isAphg ? 7 : (isApes ? 10 : (isPsych ? 7 : calculateRealTotalPoints(processedQ, subjectId)));

    const healedQuestion = {
      ...processedQ,
      id: idx + 1,
      totalPoints: realPoints,
      prompt: stripRawSvgMarkup(processedQ.prompt || processedQ.question || ''),
      modelAnswer: stripRawSvgMarkup(processedQ.modelAnswer || ''),
      unitNumber: canonical.unitNumber,
      unitTitle: canonical.title,
      skill: `Unit ${canonical.unitNumber}: ${canonical.title}`
    };

    verifiedQuestions.push(healedQuestion);
    passedDirect++;
  }


  return {
    verifiedQuestions,
    stats: {
      total: rawQuestions.length,
      passedDirect,
      healed,
      replacedFromVault
    }
  };
}
