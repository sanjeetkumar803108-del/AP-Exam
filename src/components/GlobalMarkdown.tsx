import React, { useMemo, memo } from 'react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

interface GlobalMarkdownProps {
  children?: any;
  content?: any;
  className?: string;
  components?: any;
}

/**
 * Normalizes and heals math/chemical equations for student-friendly crystal-clear KaTeX rendering:
 * 1. Restores escaped/eaten ASCII control codes (\x0D carriage return -> \r, \x09 tab -> \t, etc.)
 * 2. Repairs broken arrow commands like "ightarrow" -> "\rightarrow"
 * 3. Ensures unmatched $$ block delimiters are cleanly balanced to prevent red error leaks.
 */
export function cleanMarkdownMath(content: string): string {
  if (!content) return '';
  let text = String(content);

  // 0. Unescape literal escaped newlines (e.g. ".\nStep 2" or "\\n")
  // Protect LaTeX commands starting with \n (e.g. \neq, \nabla, \notin, \natural, \nearrow, \nwarrow)
  text = text.replace(/\\r\\n/g, '\n\n');
  text = text.replace(/\\n(?!(?:eq|abla|otin|atural|earrow|warrow)\b)/g, '\n\n');

  // Strip standalone orphaned asterisks on their own lines (e.g. "**\n\nStep 1...\n\n**")
  text = text.replace(/^\s*\*\*\s*$/gm, '');
  // Strip orphaned bullet asterisks (e.g. "• **\n" or "- **\n")
  text = text.replace(/(?:^|\n)\s*[-*•]\s*\*\*\s*(?:\n|$)/g, '\n');
  // Clean up bullet points starting with empty bold tags like "• **: "
  text = text.replace(/(?:^|\n)\s*([-*•])\s*\*\*:\s*/g, '\n$1 ');

  // Strip AI internal monologue / scratchpad leaks in explanations (e.g. "However, wait—let's trace carefully...")
  text = text.replace(/(?:However,\s*wait[\u2014\-]|Wait,\s*let['’]s|Let['’]s\s*(?:re-verify|make\s*sure|check|test|verify|trace|set\s*option)|Ah,\s*let['’]s)[\s\S]*?(?=(?:\bDistractor\s*Analysis\b|\bStep\s*\d+\b|(?:\n\s*[-*•]?\s*Option\s*[A-D]\b)|$))/gi, '');

  // Strip backticks on numbers, arithmetic expressions, variables, and common types in explanations so they don't render as awkward boxes
  text = text.replace(/`([0-9]+(?:\.[0-9]+)?)`/g, '$1');
  text = text.replace(/`([a-zA-Z0-9_.]+(?:\s*[\+\-\*\/\%]\s*[a-zA-Z0-9_.]+)+)`/g, '$1');
  text = text.replace(/`([\+\-\*\/\%\(\)\=\<\>\!\,]+)`/g, '$1');
  text = text.replace(/`(\([a-zA-Z0-9_.\s\+\-\*\/]+\))`/g, '$1');
  text = text.replace(/`\b(int|double|boolean|char|float|long|short|byte|void|String|true|false)\b`/gi, '$1');
  text = text.replace(/`([a-zA-Z_][a-zA-Z0-9_]*)`/g, '$1');

  // Enforce clean line breaks and spacing between Steps and Distractor Analysis
  text = text.replace(/([.!?])\s*(Step\s*\d+\s*[:\-])\s*/gi, '$1\n\n**$2**\n\n');
  text = text.replace(/([.!?])\s*\*{0,2}(Distractor\s*Analysis\s*[:\-])\*{0,2}\s*/gi, '$1\n\n**$2**\n\n');
  text = text.replace(/(?:^|\n)\s*\*{0,2}(Distractor\s*Analysis\s*[:\-])\*{0,2}\s*/gi, '\n\n**$1**\n\n');

  // Format distractor options as clear, separated bullet points:
  text = text.replace(/(?:[.!?]|\n|^)\s*[-*•]\s*(Option\s*[A-D]\b(?:\s*\([^)\n]+\))?)\s*[:\-]?\s*/gi, '\n- **$1:** ');
  text = text.replace(/([.!?])\s*(Option\s*[A-D]\b(?:\s*\([^)\n]+\))?)\s*[:\-]\s*/gi, '$1\n- **$2:** ');

  // Normalize Step headers at start of text or line:
  text = text.replace(/^\s*(?:[-*•]\s*)?\*{0,2}\s*(Step\s*\d+(?:\s*(?:\[[^\]]+\]|\([^)]+\)))?(?:\s*[:\-])?)\s*\*{0,2}\s*/gi, '**$1**\n\n');
  text = text.replace(/(?:\n\s*[-*•]?\s*\*{0,2}\s*)(Step\s*\d+(?:\s*(?:\[[^\]]+\]|\([^)]+\)))?(?:\s*[:\-])?)\s*\*{0,2}\s*/gi, '\n\n**$1**\n\n');

  // Clean double spaces inside parentheses
  text = text.replace(/\(\s+/g, '(').replace(/\s+\)/g, ')');

  // Deduplicate excessive colons like ":**:" or "::::"
  text = text.replace(/:\*\*:/g, ':**');
  text = text.replace(/:\s*:\s*/g, ': ');

  // Clean any accidental **** bold tags
  text = text.replace(/\*{4,}/g, '**');

  // Deduplicate excessive newlines (max 2 consecutive newlines)
  text = text.replace(/\n{3,}/g, '\n\n');

  // Fix missing opening ** on labels like "- Teacher Verdict**: " -> "- **Teacher Verdict:** "
  text = text.replace(/^(\s*[-*•]\s*)([A-Za-z0-9\s/]+?)\*\*\s*:\s*/gm, '$1**$2:** ');

  // Fix label with colon outside bold like "- **Teacher Verdict**:" -> "- **Teacher Verdict:**"
  text = text.replace(/^(\s*[-*•]\s*\*\*[^*:\n]+?)\*\*\s*:\s*/gm, '$1:** ');

  // Heal stray trailing ** on list lines (e.g. "- **Total AP Points:** 0 / 4 Points (0%)**")
  text = text.replace(/^(\s*[-*•]\s*\*\*[^*:\n]+?\*\*:\s*)([^*\n]+?)\*\*\s*$/gm, (_m, prefix, val) => {
    return `${prefix}**${val.trim().replace(/\*+/g, '')}**`;
  });
  text = text.replace(/^(\s*[-*•]\s*\*\*[^*:\n]+?:\s*)([^*\n]+?)\*\*\s*$/gm, (_m, prefix, val) => {
    return `${prefix}**${val.trim().replace(/\*+/g, '')}**`;
  });

  // Ensure subparts in rubric evaluations are separated on distinct bullet points with generous spacing:
  // Handles inline Part (b), Part (c) following text with dashes (-), en-dashes (–), em-dashes (—), bullets (•)
  const inlineSubpartRegex = /([a-zA-Z0-9\.\)\]\!;])\s*[\-\u2013\u2014•·*]?\s*\b(Part\s*\([a-dA-D0-9]+\)\s*\[\s*\d+\s*(?:\/\s*\d+)?\s*(?:points|point|pts|pt)\])(?:\s*[:\-])?\s*/gi;
  text = text.replace(inlineSubpartRegex, (_match, endChar, partLabel) => {
    return `${endChar}\n\n- **${partLabel}:** `;
  });

  // If a line starts with "- Part (a) [X pts]:" (without bold), wrap label in bold
  text = text.replace(/^(\s*[-*•]\s*)(Part\s*\([a-dA-D0-9]+\)\s*\[\s*\d+\s*(?:\/\s*\d+)?\s*(?:points|point|pts|pt)\])\s*:\s*(?!\*)/gim, '$1**$2:** ');

  // If a line starts with "- **Part (a) [X pts]**:", move colon inside bold
  text = text.replace(/^(\s*[-*•]\s*\*\*Part\s*\([a-dA-D0-9]+\)\s*\[\s*\d+\s*(?:\/\s*\d+)?\s*(?:points|point|pts|pt)\])\*\*\s*:\s*/gim, '$1:** ');
  text = text.replace(/\*\*\*\*/g, '**');

  // Clean up any accidental orphaned asterisks
  text = text.replace(/(?:^|\n)\s*[-*•]\s*[\*\-–—]\s*(?:\n|$)/g, '\n');
  text = text.replace(/\*\*\s*\*\*/g, '');
  text = text.replace(/^\s*\*\*\s*$/gm, '');

  // 1. Convert standard LaTeX display and inline math delimiters:
  // \[ ... \] -> $$ ... $$
  text = text.replace(/\\\[([\s\S]*?)\\\]/g, '$$\n$1\n$$');
  // \( ... \) -> $ ... $
  text = text.replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');

  // 2. CRITICAL STEP: Sanitize and wrap LaTeX environments & tables (array, matrix, cases, tabular)
  // Convert tabular to array (KaTeX array compatibility)
  text = text.replace(/\\begin\{tabular\}(?:\s*\{([^}]*)\})?/g, (_m, colSpec) => {
    return `\\begin{array}{${colSpec || 'c|ccccc'}}`;
  });
  text = text.replace(/\\end\{tabular\}/g, '\\end{array}');

  // Strip ALL stray dollar signs immediately adjacent to \begin{env} or \end{env}
  const envNames = 'array|matrix|pmatrix|bmatrix|Bmatrix|vmatrix|Vmatrix|cases|aligned|align\\*?|gather\\*?|equation\\*?';
  const stripDollarRegexBegin = new RegExp(`\\$+\\s*(\\\\begin\\{(?:${envNames})\\})`, 'g');
  const stripDollarRegexBeginAfter = new RegExp(`(\\\\begin\\{(?:${envNames})\\})\\s*\\$+`, 'g');
  const stripDollarRegexEnd = new RegExp(`\\$+\\s*(\\\\end\\{(?:${envNames})\\})`, 'g');
  const stripDollarRegexEndAfter = new RegExp(`(\\\\end\\{(?:${envNames})\\})\\s*\\$+`, 'g');

  text = text.replace(stripDollarRegexBegin, '$1');
  text = text.replace(stripDollarRegexBeginAfter, '$1');
  text = text.replace(stripDollarRegexEnd, '$1');
  text = text.replace(stripDollarRegexEndAfter, '$1');

  // Wrap all environments (array, cases, matrix, etc.) that are not already enclosed in $$
  const envRegex = new RegExp(`(?<!\\$\\$)\\s*(\\\\begin\\{(${envNames})\\}([\\s\\S]*?)\\\\end\\{\\2\\})\\s*(?!\\$\\$)`, 'g');
  text = text.replace(envRegex, (_m, _full, envName, body) => {
    let cleanBody = body.replace(/\$+/g, '');
    let colSpec = '';
    if (envName === 'array') {
      const colMatch = cleanBody.match(/^\s*\{([^}]*)\}/);
      if (colMatch) {
        colSpec = `{${colMatch[1]}}`;
        cleanBody = cleanBody.slice(colMatch[0].length);
      } else {
        colSpec = '{c|ccccc}';
      }
    }
    // Clean row breaks and hlines
    cleanBody = cleanBody.replace(/([^\\])\\\s*\\hline/g, '$1 \\\\ \\hline');
    cleanBody = cleanBody.replace(/([0-9a-zA-Z\)\}\]])\s*\\hline/g, '$1 \\\\ \\hline');
    cleanBody = cleanBody.replace(/([0-9a-zA-Z\)\}\]])\s*\\\s*(\n|$)/g, '$1 \\\\\n');
    cleanBody = cleanBody.trim();

    return `\n\n$$\n\\begin{${envName}}${colSpec}\n${cleanBody}\n\\end{${envName}}\n$$\n\n`;
  });

  // 3. Repair escaped or eaten control characters in LaTeX math formulas using exact ASCII hex codes:
  text = text.replace(/\x0D(ightarrow|ho|ight|angle|eal|m|oot|ceil|floor)/g, '\\r$1');
  text = text.replace(/\x09(heta|ext|imes|an|au|o|ilde|ag|op|extbf|extit)/g, '\\t$1');
  text = text.replace(/\x0C(rac|orall|lat|oot)/g, '\\f$1');
  text = text.replace(/\x08(eta|egin|ar|ig|oldsymbol|inom|ot|ullet|f|mod)/g, '\\b$1');
  text = text.replace(/\x0A(eq|abla|otin|atural|earrow|warrow)/g, '\\n$1');
  text = text.replace(/\x0B(ec|dots|dash)/g, '\\v$1');

  // Fix broken/clipped arrow & math tokens
  text = text.replace(/(^|[\s$(=_])imes(?=[\s$_^0-9A-Za-z\(\[\{])/g, '$1\\times ');
  text = text.replace(/(^|[\s$(=_])ightarrow([\s$_^0-9A-Za-z])/g, '$1\\rightarrow$2');
  text = text.replace(/(^|[\s$(=_])rac\{/g, '$1\\frac{');
  text = text.replace(/(^|[\s$(=_])ext\{/g, '$1\\text{');
  text = text.replace(/(^|[\s$(=_])heta([\s$_^0-9A-Za-z])/g, '$1\\theta$2');
  text = text.replace(/([0-9a-zA-Z])\\'/g, "$1'");
  text = text.replace(/(?<![0-9a-zA-Z\)\}])\^\s*\\?circ/g, '^{\\circ}');
  text = text.replace(/(\d+)\^\\?circ(?![a-zA-Z{])/g, '$1^{\\circ}');

  // Heal multiline inline math ($ ... \n ... $) where LaTeX formulas were split across line breaks
  text = text.replace(/(?<!\$)\$([^\$\n]+?(?:\\[a-zA-Z]+|[=+\-*/^_])[^\$]*?\n[^\$]+?)\$(?!\$)/g, (match, body) => {
    if (!body.includes('\n\n')) {
      return `$${body.replace(/\s*\n\s*/g, ' ').trim()}$`;
    }
    return match;
  });

  // Fix unclosed/unmatched $$ on a single line
  const lines = text.split('\n');
  const fixedLines = lines.map(line => {
    const trimmed = line.trim();
    if (trimmed === '$$') return line;
    const count = (trimmed.match(/\$\$/g) || []).length;
    if (count === 1) {
      if (trimmed.endsWith('$$')) {
        return '$$' + trimmed;
      } else if (trimmed.startsWith('$$')) {
        return trimmed + '$$';
      }
    }
    return line;
  });
  text = fixedLines.join('\n');

  // 3.5. CRITICAL LATEX HEALING: Auto-detect and wrap bare LaTeX formulas, parenthetical math & equations outside $...$
  const latexMathKeywords = [
    'frac', 'dfrac', 'cfrac', 'sqrt', 'lim', 'int', 'iint', 'iiint', 'oint', 'sum', 'prod',
    'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'arcsin', 'arccos', 'arctan',
    'ln', 'log', 'exp', 'infty', 'theta', 'alpha', 'beta', 'gamma', 'delta',
    'epsilon', 'lambda', 'mu', 'pi', 'sigma', 'tau', 'phi', 'omega',
    'Delta', 'Sigma', 'Omega', 'to', 'rightarrow', 'leftarrow', 'times',
    'div', 'pm', 'mp', 'le', 'ge', 'ne', 'approx', 'equiv', 'cdot',
    'partial', 'nabla', 'forall', 'exists', 'in', 'notin', 'subset', 'subseteq',
    'quad', 'qquad', 'boxed', 'vec', 'hat', 'bar', 'mathbf', 'mathrm'
  ];

  // A. Standalone pure math formulas/identities without '$' (e.g. key_formula: "V = 2\pi \int_{a}^{b} x f(x) dx, \quad A(w) = w \cdot h(w)")
  if (!text.includes('$')) {
    const trimmed = text.trim();
    const hasMathCmd = new RegExp(`\\\\(?:${latexMathKeywords.join('|')})(?![a-zA-Z])`).test(trimmed);
    if (hasMathCmd) {
      const words = trimmed.match(/\b[a-zA-Z]{3,}\b/g) || [];
      const mathTerms = new Set([...latexMathKeywords, 'sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'arcsin', 'arccos', 'arctan', 'log', 'exp']);
      const proseWords = words.filter(w => !mathTerms.has(w.toLowerCase()));
      if (proseWords.length <= 1) {
        text = `$$\n${trimmed}\n$$`;
      }
    }
  }

  // B. Parenthetical or bracketed math expressions with LaTeX commands: (2\pi x h(x)) -> ($2\pi x h(x)$)
  const nestedParenRegex = new RegExp(`(?<!\\$)\\(((?:[^()\\n]|\\([^()\\n]*\\))*?\\\\(?:${latexMathKeywords.join('|')})(?![a-zA-Z])(?:[^()\\n]|\\([^()\\n]*\\))*?)\\)(?!\\$)`, 'g');
  text = text.replace(nestedParenRegex, (match, inner) => {
    const commonWords = /\b(the|is|are|was|were|because|since|always|never|remember|note)\b/i;
    if (!commonWords.test(inner)) {
      return `($${inner.trim()}$)`;
    }
    return match;
  });

  const nestedBracketRegex = new RegExp(`(?<!\\$)\\[([^\\]\\n]*?\\\\(?:${latexMathKeywords.join('|')})(?![a-zA-Z])[^\\]\\n]*?)\\](?!\\$)`, 'g');
  text = text.replace(nestedBracketRegex, (match, inner) => {
    const commonWords = /\b(the|is|are|was|were|because|since)\b/i;
    if (!commonWords.test(inner)) {
      return `[$${inner.trim()}$]`;
    }
    return match;
  });

  // 4. MASK MATH TOKENS FIRST so that prose transformations never touch inside math formulas!
  const mathBlocks: string[] = [];
  const mathTokenRegex = /(\$\$[\s\S]*?\$\$|\$(?!\s)(?:\\.|[^\$\n\\])+?(?<!\s)\$)/g;

  let maskedText = text.replace(mathTokenRegex, (match) => {
    let math = match
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&le;/g, '\\le ')
      .replace(/&ge;/g, '\\ge ')
      .replace(/&ne;/g, '\\ne ')
      .replace(/&plusmn;/g, '\\pm ')
      .replace(/&times;/g, '\\times ')
      .replace(/&divide;/g, '\\div ')
      .replace(/&quot;/g, '"')
      .replace(/&nbsp;/g, ' ');

    if (math.includes('\\begin{')) {
      math = math.replace(/&amp;/g, ' & ');
    } else {
      math = math.replace(/&amp;/g, '\\&');
    }
    math = math.replace(/([^\\])\\\s*\\hline/g, '$1\\\\ \\hline');
    math = math.replace(/(?<!\\)%/g, '\\%');
    // Normalize double-escaped LaTeX commands
    math = math.replace(/\\\\([a-zA-Z]+)/g, (_m, cmd) => '\\' + cmd);
    math = math.replace(/(?<=[\s$])quad\b/g, '\\quad');
    math = math.replace(/(?<!\\text\{)\\\$/g, '\\text{\\$}');

    // Repair accidental extra trailing closing braces
    const openBraces = (math.match(/\{/g) || []).length;
    const closeBraces = (math.match(/\}/g) || []).length;
    if (closeBraces > openBraces) {
      math = math.replace(/(\\frac\{[^{}]*\}\{[^{}]*\})\}/g, '$1');
    }

    const idx = mathBlocks.length;
    mathBlocks.push(math);
    return `__AP_MATH_TOKEN_${idx}__`;
  });

  // 5. TRANSFORM PROSE OUTSIDE MATH TOKENS (SAFE TO OPERATE ON maskedText)
  // Auto-wrap calculus functions and derivatives in prose outside math mode (e.g. f'(1), f'(a), f''(x), g'(x)):
  maskedText = maskedText.replace(/(?<![$\w\\])\b([fghFGH]'{1,3}\([a-zA-Z0-9\+\-]+\))(?![$\w])/g, '$$$1$$');
  maskedText = maskedText.replace(/(?<![$\w\\])\b([fghFGH]\([a-zA-Z0-9\+\-]+\))(?![$\w])/g, '$$$1$$');

  // Pseudo-code limits & arrow notations in prose
  maskedText = maskedText.replace(/lim_\{?x\s*->\s*-?\s*(?:inf|infinity)\}?\s*\(([^)]+)\)\/sqrt\(([^)]+)\)\s*=\s*([0-9\-\+]+)\/\(-?sqrt\(([0-9]+)\)\)\s*=\s*(-?[0-9]+\/[0-9]+)/gi,
    '$$\\lim_{x \\to -\\infty} \\frac{$1}{\\sqrt{$2}} = \\frac{$3}{-\\sqrt{$4}} = $5$$');
  maskedText = maskedText.replace(/(?<!\$)\blim_\{x\s*->\s*([a-zA-Z0-9]+)(\^[\+\-]|\^\{[\+\-]\})?\}(?!\$)/gi, (_m, val, sign) => {
    const s = sign ? sign.replace(/[\{\}]/g, '') : '';
    return `$\\lim_{x \\to ${val}${s ? `^{${s.replace('^', '')}}` : ''}}$`;
  });
  maskedText = maskedText.replace(/(?<!\$)\blim_\{x\s*->\s*-?\s*(?:inf|infinity)\}(?!\$)/gi, '$\\lim_{x \\to -\\infty}$');
  maskedText = maskedText.replace(/(?<!\$)\bx\s*->\s*-?\s*(?:infinity|inf)\b(?!\$)/gi, '$x \\to -\\infty$');
  maskedText = maskedText.replace(/(?<!\$)\bx\s*->\s*([0-9a-zA-Z]+)\^([\+\-])(?!\$)/gi, '$x \\to $1^{$2}$');
  maskedText = maskedText.replace(/(?<!\$)\bx\s*->\s*([0-9a-zA-Z]+)(?!\$|\^)/gi, '$x \\to $1$');

  // Bare sqrt in prose
  maskedText = maskedText.replace(/(?<![\\$a-zA-Z0-9])sqrt\(([^)]+)\)/g, (_m, inner) => {
    let cleanInner = inner.replace(/\^([0-9a-zA-Z]+)/g, '^{$1}');
    return `$\\sqrt{${cleanInner}}$`;
  });

  // Bare d/dx, dy/dx in prose
  maskedText = maskedText.replace(/(?<!\$)d\/dx\[([^\]]+)\](?!\$)/g, (_m, inner) => {
    let clean = inner.replace(/\^([0-9a-zA-Z]+)/g, '^{$1}');
    return `$\\frac{d}{dx}[${clean}]$`;
  });
  maskedText = maskedText.replace(/(?<!\$)dy\/dx(?!\$)/g, '$\\frac{dy}{dx}$');

  // Bare integrals in prose
  maskedText = maskedText.replace(/(?<!\$)integral\(([^)]+)\)(?!\$)/g, (_m, inner) => {
    let clean = inner.replace(/\^([0-9a-zA-Z\-]+)/g, '^{$1}');
    return `$\\int (${clean})$`;
  });
  maskedText = maskedText.replace(/(?<!\$)\\int(?![a-zA-Z])(?:_[a-zA-Z0-9^{}\\]+)?(?:\^[a-zA-Z0-9^{}\\]+)?\s+[^\n,;:.!?$]*?\bd[xytuvz]\b(?:\s*=\s*[^\n,;:.!?$]+)?(?!\$)/g, (match) => {
    return `$${match.trim()}$`;
  });

  // Bare equations with fractions/roots in prose (e.g. x = \frac{1}{\sqrt{2}} or \frac{a}{b})
  maskedText = maskedText.replace(/(?<![$\w\\])(?:([a-zA-Z0-9_'\(\)]+\s*[=<>≤≥≠≈]\s*))?(\\(?:frac|dfrac|cfrac|sqrt|boxed)\b(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})+(?:\s*[\+\-\*\/\^=]\s*(?:[0-9a-zA-Z]+|\\[a-zA-Z]+(?:\{[^{}]*\})*))?(?:\s*d[xytuv])?)(?!\$)/g, (_m, lhs, rhs) => {
    return `$${(lhs || '') + rhs.trim()}$`;
  });

  // Bare Greek letters & math symbols in prose outside math mode (e.g. \pi, \theta, \alpha, \beta, \infty)
  maskedText = maskedText.replace(/(?<![$\w\\])(\d*\\(?:pi|theta|alpha|beta|gamma|delta|epsilon|lambda|mu|sigma|tau|phi|omega|Delta|Sigma|Omega|infty|cdot)\b(?:\s*[\^=<>+\-*/]\s*[a-zA-Z0-9]+)?)(?![$\w])/g, (_m, expr) => {
    return `$${expr.trim()}$`;
  });

  // Unicode math symbols in prose
  maskedText = maskedText.replace(/(?<!\$)\bf_avg\s*=\s*1\/\(b-a\)\s*(?:∫|\\u222b|\\int)_?\{?([a-zA-Z0-9]*)\}?\^?\{?([a-zA-Z0-9]*)\}?\s*f\(x\)\s*dx(?!\$)/g,
    '$$f_{\\text{avg}} = \\frac{1}{b-a} \\int_{$1}^{$2} f(x)\\,dx$$');
  maskedText = maskedText.replace(/(?:∫|\\u222b)_([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)/g, '\\int_{$1}^{$2}');
  maskedText = maskedText.replace(/(?:∫|\\u222b)_([a-zA-Z0-9]+)/g, '\\int_{$1}');
  maskedText = maskedText.replace(/(?:∫|\\u222b)/g, '\\int');
  maskedText = maskedText.replace(/²|\\u00b2/g, '^2');
  maskedText = maskedText.replace(/³|\\u00b3/g, '^3');
  maskedText = maskedText.replace(/(?:√|\\u221a)\(([^)]+)\)/g, '\\sqrt{$1}');
  maskedText = maskedText.replace(/(?:√|\\u221a)([a-zA-Z0-9])/g, '\\sqrt{$1}');
  maskedText = maskedText.replace(/(?:π|\\u03c0)(?=\s*\\int|\s*[A-Za-z0-9]|\s*\(|\s*\^|\s*=)/g, '\\pi ');
  maskedText = maskedText.replace(/(?:∞|\\u221e)/g, '\\infty');

  maskedText = maskedText.replace(/(?<![0-9/$])0\/0(?![0-9/$])/g, '$\\frac{0}{0}$');
  maskedText = maskedText.replace(/(?<!\$)\\infty\/\\infty(?!\$)/g, '$\\frac{\\infty}{\\infty}$');
  maskedText = maskedText.replace(/(?<!\$)1\/\\sqrt\{([^}]+)\}(?!\$)/g, '$\\frac{1}{\\sqrt{$1}}$');
  maskedText = maskedText.replace(/(?<!\$)1\/\((1\+x\^2)\)(?!\$)/g, '$\\frac{1}{$1}$');
  maskedText = maskedText.replace(/(?<=\s)!=(?=\s)/g, '$\\ne$');

  // Protect currency symbols outside math
  maskedText = maskedText.replace(/\$([A-Z][a-zA-Z0-9_]*\s*,\s*[A-Z][a-zA-Z0-9_]*)/g, '($1');
  maskedText = maskedText.replace(/(^|[\s(])\$(\d+(?:,\d{3})*(?:\.\d+)?)(?!\w)/g, (_m, prefix, num) => {
    return `${prefix}\\$${num}`;
  });

  // Heal code blocks (fenced and inline)
  maskedText = maskedText.replace(/(```[a-zA-Z0-9_-]*\n[\s\S]*?```)/g, (block) => {
    return block
      .replace(/\\(?:leqslant|le)\b/g, '<=')
      .replace(/\\(?:geqslant|ge)\b/g, '>=')
      .replace(/\\(?:neq|ne)\b/g, '!=')
      .replace(/\\(?:to|rightarrow)\b/g, '->')
      .replace(/\\times\b/g, '*')
      .replace(/\\texttt\{([^{}]*)\}/g, '$1')
      .replace(/\\textbf\{([^{}]*)\}/g, '$1')
      .replace(/\\textit\{([^{}]*)\}/g, '$1')
      .replace(/\b([a-zA-Z0-9_]+)\s*=\s*null\b/g, '$1 == null');
  });

  maskedText = maskedText.replace(/`([^`\n]+)`/g, (_m, code) => {
    const cleanCode = code
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/\\(?:leqslant|le)\b/g, '<=')
      .replace(/\\(?:geqslant|ge)\b/g, '>=')
      .replace(/\\(?:neq|ne)\b/g, '!=')
      .replace(/\\(?:to|rightarrow)\b/g, '->')
      .replace(/\\times\b/g, '*')
      .replace(/\\texttt\{([^{}]*)\}/g, '$1');
    return '`' + cleanCode + '`';
  });

  // Convert raw LaTeX formatting commands in prose into standard Markdown
  let prevMasked = '';
  let iterations = 0;
  while (prevMasked !== maskedText && iterations < 8) {
    prevMasked = maskedText;
    iterations++;
    maskedText = maskedText.replace(/\\texttt\{([^{}]*)\}/g, '`$1`');
    maskedText = maskedText.replace(/\\textbf\{([^{}]*)\}/g, '**$1**');
    maskedText = maskedText.replace(/\\textit\{([^{}]*)\}/g, '*$1*');
    maskedText = maskedText.replace(/\\emph\{([^{}]*)\}/g, '*$1*');
    maskedText = maskedText.replace(/\\textsf\{([^{}]*)\}/g, '$1');
    maskedText = maskedText.replace(/\\textrm\{([^{}]*)\}/g, '$1');
    maskedText = maskedText.replace(/\\textnormal\{([^{}]*)\}/g, '$1');
    maskedText = maskedText.replace(/\\underline\{([^{}]*)\}/g, '<u>$1</u>');
  }

  // Heal operators in prose
  maskedText = maskedText
    .replace(/\\(?:leqslant|le)\b/g, '<=')
    .replace(/\\(?:geqslant|ge)\b/g, '>=')
    .replace(/\\(?:neq|ne)\b/g, '!=')
    .replace(/\\times\b/g, '×')
    .replace(/\\to\b/g, '->')
    .replace(/\\rightarrow\b/g, '->')
    .replace(/\\leftarrow\b/g, '<-')
    .replace(/\\dots\b|\\ldots\b/g, '...')
    .replace(/\\quad\b/g, '  ')
    .replace(/\\qquad\b/g, '    ');

  // 6. RESTORE PROTECTED LATEX MATH BLOCKS
  text = maskedText.replace(/__AP_MATH_TOKEN_(\d+)__/g, (_, idx) => {
    return mathBlocks[Number(idx)] || '';
  });

  // 7. Heal bare superscripts, subscripts, Pandoc syntax, and chemical equations outside math blocks:
  text = text
    .replace(/~([a-zA-Z0-9_\+\-]+)~/g, '<sub>$1</sub>')
    .replace(/\^([a-zA-Z0-9_\+\-]+)\^/g, '<sup>$1</sup>');

  text = text.replace(/(?<!\$)\\ce\{([^{}]+)\}(?!\$)/g, (_m, body) => {
    let ce = body;
    ce = ce.replace(/\^\{?([0-9]*[\+\-])\}?/g, '<sup>$1</sup>');
    ce = ce.replace(/([A-Za-z\)])(\d+)/g, '$1<sub>$2</sub>');
    return ce;
  });

  return text;
}


/**
 * Normalizes quiz questions, options, and explanations so any math expressions
 * (whether formatted in standard LaTeX or bare commands like \lim, \frac, \int)
 * render with crystal-clear KaTeX typography.
 */
export function prepareQuizMath(input: any): string {
  if (!input) return '';
  let text = String(input);

  // 1. Fix double-escaped backslashes (e.g. \\frac -> \frac, \\lim -> \lim)
  text = text.replace(/\\\\([a-zA-Z]+)/g, '\\$1');

  // 2. Convert pseudo-math limits like "lim (x -> 0) [sin(5x) / (2x)]"
  text = text.replace(/\blim\s*\(\s*x\s*(?:->|\\to)\s*([0-9a-zA-Z\-+]+)\s*\)\s*\[([^\]]+)\]/gi, (_m, target, expr) => {
    let cleanExpr = expr.replace(/\s*\/\s*/g, '}{');
    return `$\\lim_{x \\to ${target}} \\frac{${cleanExpr}}$`;
  });

  // 3. Convert "integral from a to b of f(x) dx"
  text = text.replace(/\bintegral\s+from\s+([0-9a-zA-Z\-+]+)\s+to\s+([0-9a-zA-Z\-+]+)\s+of\s+([^\s,?.!]+(?:\s+[^\s,?.!]+)*\s+dx)/gi, (_m, a, b, integrand) => {
    return `$\\int_{${a}}^{${b}} ${integrand}$`;
  });

  // 4. Convert standalone chemical formulas outside math mode: e.g. (SF6), (H2O), (CO2), (O2)
  text = text.replace(/(?<!\\text\{|\\|\$|[a-zA-Z0-9])(SF6|H2O|CO2|O2|CH4|NH3|NaCl|CaCO3|H2SO4|HCl)(?![\\$a-zA-Z0-9])/g, (_m, formula) => {
    const formatted = formula.replace(/([A-Z][a-z]*)(\d+)?/g, (_x: string, elem: string, count: string) => {
      return `\\text{${elem}}` + (count ? `_{${count}}` : '');
    });
    return `$${formatted}$`;
  });

  // 5. Common genetics alleles outside math
  text = text.replace(/(?<!\\|\$|[a-zA-Z0-9])(p\^2|q\^2|2pq)(?![\\$a-zA-Z0-9])/g, (term) => `$${term}$`);

  // 6. Auto-wrap bare LaTeX commands not enclosed in $...$
  const latexCommands = [
    'frac', 'sqrt', 'lim', 'int', 'iint', 'iiint', 'oint', 'sum', 'prod',
    'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'arcsin', 'arccos', 'arctan',
    'ln', 'log', 'exp', 'infty', 'theta', 'alpha', 'beta', 'gamma', 'delta',
    'epsilon', 'lambda', 'mu', 'pi', 'sigma', 'tau', 'phi', 'omega',
    'Delta', 'Sigma', 'Omega', 'to', 'rightarrow', 'leftarrow', 'times',
    'div', 'pm', 'mp', 'le', 'ge', 'ne', 'approx', 'equiv', 'cdot',
    'partial', 'nabla', 'forall', 'exists', 'in', 'notin', 'subset', 'subseteq'
  ];

  if (!text.includes('$')) {
    const hasMathCommand = new RegExp(`\\\\(?:${latexCommands.join('|')})\\b`).test(text);
    if (hasMathCommand) {
      const words = text.split(/\s+/);
      const isShortFormula = words.length <= 8 && !/^[A-Z][a-z]+ [a-z]+ [a-z]+/.test(text);
      if (isShortFormula) {
        text = `$${text.trim()}$`;
      } else {
        text = text.replace(/(\\(?:lim|int|frac|sqrt|sum|prod)\b[^\s,?.!]+(?:\s+[^\s,?.!]+)*)/g, (match) => {
          return `$${match.trim()}$`;
        });
      }
    }
  }

  // 7. Wrap standalone fractions like "-3/4", "5/2", "T / 2", "1/cos(x)", "T / 4" in options if short
  if (!text.includes('$') && /^[-+]?\s*([a-zA-Z0-9]+)\s*\/\s*([a-zA-Z0-9()]+)$/.test(text.trim())) {
    text = text.trim().replace(/^([-+]?)\s*([a-zA-Z0-9]+)\s*\/\s*([a-zA-Z0-9()]+)$/, (_m, sign, num, den) => {
      return `$${sign}\\frac{${num}}{${den}}$`;
    });
  }

  // 8. Balance unclosed single dollar signs if any
  const dollarCount = (text.match(/(?<!\\)\$/g) || []).length;
  if (dollarCount % 2 !== 0) {
    text = text + '$';
  }

  return text;
}

const remarkPluginsList = [remarkMath, remarkGfm];
const rehypePluginsList: any[] = [[rehypeKatex, { strict: false, throwOnError: false }], rehypeRaw];

const defaultComponents = {
  h1: ({ node, ...props }: any) => (
    <h1 className="text-base sm:text-lg font-black text-zinc-950 dark:text-zinc-100 mt-4 mb-2 tracking-tight leading-snug break-words" {...props} />
  ),
  h2: ({ node, ...props }: any) => (
    <h2 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-zinc-100 mt-3.5 mb-1.5 tracking-tight leading-snug break-words" {...props} />
  ),
  h3: ({ node, ...props }: any) => (
    <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-3 mb-1 tracking-tight leading-snug break-words" {...props} />
  ),
  h4: ({ node, ...props }: any) => (
    <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-200 mt-2 mb-1 tracking-tight leading-snug break-words" {...props} />
  ),
  p: ({ node, ...props }: any) => (
    <p className="text-xs sm:text-[13px] text-zinc-950 dark:text-zinc-100 font-medium leading-relaxed my-2.5 break-words min-w-0 max-w-full" {...props} />
  ),
  ul: ({ node, ...props }: any) => (
    <ul className="list-disc pl-4 space-y-2 my-2.5 text-xs sm:text-[13px] text-zinc-950 dark:text-zinc-100 font-medium leading-relaxed min-w-0 max-w-full overflow-x-auto" {...props} />
  ),
  ol: ({ node, ...props }: any) => (
    <ol className="list-decimal pl-4 space-y-2 my-2.5 text-xs sm:text-[13px] text-zinc-950 dark:text-zinc-100 font-medium leading-relaxed min-w-0 max-w-full overflow-x-auto" {...props} />
  ),
  li: ({ node, ...props }: any) => (
    <li className="leading-relaxed text-zinc-950 dark:text-zinc-100 font-medium my-1 min-w-0 max-w-full break-words" {...props} />
  ),
  sub: ({ node, ...props }: any) => (
    <sub className="text-[0.8em] font-bold align-sub" {...props} />
  ),
  sup: ({ node, ...props }: any) => (
    <sup className="text-[0.8em] font-bold align-super" {...props} />
  ),
  code: ({ node, inline, className, children, ...props }: any) => {
    const isInline = !className && !String(children).includes('\n');
    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 mx-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono text-[12px] font-semibold break-words max-w-full"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={`font-mono text-xs text-zinc-100 break-words ${className || ''}`} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ node, children, ...props }: any) => (
    <pre
      className="p-3 my-2 rounded-xl bg-zinc-900 text-zinc-100 font-mono text-xs overflow-x-auto max-w-full border border-zinc-800 shadow-xs leading-relaxed"
      style={{ maxWidth: '100%', boxSizing: 'border-box' }}
      {...props}
    >
      {children}
    </pre>
  ),
  blockquote: ({ node, ...props }: any) => (
    <blockquote className="border-l-4 border-purple-500 pl-3.5 my-2.5 text-zinc-700 dark:text-zinc-300 italic text-xs sm:text-sm bg-purple-50/40 dark:bg-purple-950/20 py-1.5 rounded-r-xl min-w-0 max-w-full overflow-x-auto" {...props} />
  ),
  table: ({ node, ...props }: any) => (
    <div className="overflow-x-auto my-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xs max-w-full">
      <table className="w-full text-left border-collapse text-xs sm:text-sm" {...props} />
    </div>
  ),
  thead: ({ node, ...props }: any) => (
    <thead className="bg-zinc-50/90 dark:bg-zinc-800/90 border-b border-zinc-200 dark:border-zinc-700" {...props} />
  ),
  th: ({ node, ...props }: any) => (
    <th className="px-3.5 py-2.5 font-bold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 whitespace-nowrap text-xs" {...props} />
  ),
  td: ({ node, ...props }: any) => (
    <td className="px-3.5 py-2.5 border-b border-zinc-100 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs" {...props} />
  ),
  tr: ({ node, ...props }: any) => (
    <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 transition-colors" {...props} />
  ),
  stepbox: ({ node, ...props }: any) => (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-2xs rounded-2xl p-4 my-3 font-sans text-zinc-800 dark:text-zinc-200 min-w-0 max-w-full overflow-x-auto" {...props} />
  ),
};

function GlobalMarkdown({ children, content, className = '', components = {} }: GlobalMarkdownProps) {
  const rawText = content !== undefined ? content : children;
  if (!rawText) return null;

  const processedContent = useMemo(() => {
    return cleanMarkdownMath(rawText);
  }, [rawText]);

  const mergedComponents = useMemo(() => {
    if (!components || Object.keys(components).length === 0) {
      return defaultComponents;
    }
    return { ...defaultComponents, ...components };
  }, [components]);

  return (
    <div className={`markdown-body w-full max-w-full min-w-0 overflow-x-auto ${className}`}>
      <Markdown
        remarkPlugins={remarkPluginsList}
        rehypePlugins={rehypePluginsList}
        components={mergedComponents}
      >
        {processedContent}
      </Markdown>
    </div>
  );
}

export default memo(GlobalMarkdown);
