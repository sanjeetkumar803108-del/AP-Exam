/**
 * Universal PDF Text Sanitizer & Math Converter for jsPDF Standard Fonts (Helvetica, Times, Courier).
 * 
 * Converts LaTeX math expressions, chemical formulas, calculus limits, integrals,
 * roots, fractions, and superscripts/subscripts into clean, crystal-clear ASCII.
 * 
 * Maps Unicode emojis, surrogate pairs, IPA pronunciation symbols, Greek glyphs,
 * smart quotes, and unprintable characters into universally renderable ASCII.
 * 
 * STRICT ASCII ENFORCEMENT (chars <= 127):
 * Standard fonts in jsPDF (like Helvetica) DO NOT support multi-byte Unicode.
 * Passing ANY character > 127 causes jsPDF to switch to UTF-16BE encoding,
 * which outputs null bytes (\x00) between every single letter, resulting in
 * wide, broken "A  l i m i t  l i m ( x ..." spacing.
 * This sanitizer completely eradicates that bug across all subject PDFs.
 */

/**
 * Converts any LaTeX string into human-readable, beautifully spaced pure ASCII math.
 */
export function formatLatexToAscii(latex: string): string {
  if (!latex) return '';
  let str = String(latex);

  // 1. Remove LaTeX environment wrappers
  str = str.replace(/\\begin\{(?:aligned|matrix|pmatrix|bmatrix|cases|array|split|gather|equation)\*?\}/g, '');
  str = str.replace(/\\end\{(?:aligned|matrix|pmatrix|bmatrix|cases|array|split|gather|equation)\*?\}/g, '');

  // 2. Clean \left and \right delimiters (strictly prevent eating \rightarrow, \rightleftharpoons, etc.)
  str = str.replace(/\\left\s*\\\{/g, '{');
  str = str.replace(/\\right\s*\\\}/g, '}');
  str = str.replace(/\\left\s*([(\[{|])/g, '$1');
  str = str.replace(/\\right\s*([)\]}|])/g, '$1');
  str = str.replace(/\\left\./g, '');
  str = str.replace(/\\right\./g, '');
  str = str.replace(/\\(?:left|right)(?![a-zA-Z])/g, '');

  // 3. Clean alignment tokens and line breaks
  str = str.replace(/&=/g, ' = ');
  str = str.replace(/&/g, ' | ');
  str = str.replace(/\\\\/g, '\n');

  // 4. Unwrap formatting tags: \text{...}, \mathrm{...}, \mathbf{...}, \mathit{...}, \textbf{...}, \textit{...}, \ce{...}, \pu{...}
  for (let loop = 0; loop < 5; loop++) {
    const before = str;
    str = str.replace(/\\(?:text|mathrm|mathbf|mathit|textbf|textit|texttt|textrm|mathcal|mathbb|mathsf|operatorname|ce|pu)\{([^{}]*)\}/g, '$1');
    if (str === before) break;
  }

  // 5. Common Calculus Derivatives before general fractions
  str = str
    .replace(/\\frac\{d\^2y\}\{dx\^2\}/g, 'd^2y/dx^2')
    .replace(/\\frac\{d\^2s\}\{dt\^2\}/g, 'd^2s/dt^2')
    .replace(/\\frac\{dy\}\{dx\}/g, 'dy/dx')
    .replace(/\\frac\{dy\}\{dt\}/g, 'dy/dt')
    .replace(/\\frac\{df\}\{dx\}/g, 'df/dx')
    .replace(/\\frac\{ds\}\{dt\}/g, 'ds/dt')
    .replace(/\\frac\{dv\}\{dt\}/g, 'dv/dt')
    .replace(/\\frac\{d\}\{dx\}/g, 'd/dx')
    .replace(/\\frac\{d\}\{dt\}/g, 'd/dt')
    .replace(/\\frac\{\\partial y\}\{\\partial x\}/g, 'dy/dx')
    .replace(/\\frac\{\\partial\}\{\\partial x\}/g, 'd/dx');

  // 6. Robust recursive fraction parsing (\frac, \dfrac, \tfrac)
  function parseFractions(input: string): string {
    let output = input;
    const fracRegex = /\\(?:d|t)?frac\s*\{/;
    let match = fracRegex.exec(output);
    let iterations = 0;
    while (match && iterations < 30) {
      iterations++;
      const idx = match.index;
      const numStart = idx + match[0].length;
      let depth = 1;
      let numEnd = -1;
      for (let i = numStart; i < output.length; i++) {
        if (output[i] === '{') depth++;
        else if (output[i] === '}') {
          depth--;
          if (depth === 0) { numEnd = i; break; }
        }
      }
      if (numEnd !== -1) {
        let denSearch = numEnd + 1;
        while (denSearch < output.length && /\s/.test(output[denSearch])) {
          denSearch++;
        }
        if (output[denSearch] === '{') {
          const denStart = denSearch + 1;
          depth = 1;
          let denEnd = -1;
          for (let j = denStart; j < output.length; j++) {
            if (output[j] === '{') depth++;
            else if (output[j] === '}') {
              depth--;
              if (depth === 0) { denEnd = j; break; }
            }
          }
          if (denEnd !== -1) {
            const rawNum = output.substring(numStart, numEnd);
            const rawDen = output.substring(denStart, denEnd);
            const num = parseFractions(rawNum).trim();
            const den = parseFractions(rawDen).trim();
            const rep = `(${num}) / (${den})`;
            output = output.substring(0, idx) + rep + output.substring(denEnd + 1);
            match = fracRegex.exec(output);
            continue;
          }
        }
      }
      output = output.substring(0, idx) + output.substring(idx + match[0].length);
      match = fracRegex.exec(output);
    }
    return output;
  }
  str = parseFractions(str);

  // 7. Binomials: \binom{n}{k} -> C(n, k)
  str = str.replace(/\\binom\{([^{}]+)\}\{([^{}]+)\}/g, 'C($1, $2)');

  // 8. Radicals & Roots
  str = str.replace(/\\sqrt\[([^\]]+)\]\{([^{}]+)\}/g, '$1-sqrt($2)');
  str = str.replace(/\\sqrt\[([^\]]+)\]/g, '$1-sqrt');
  str = str.replace(/\\sqrt\{([^{}]+)\}/g, 'sqrt($1)');
  str = str.replace(/\\sqrt/g, 'sqrt');

  // 9. Calculus Limits
  str = str.replace(/\\?lim_\{([a-zA-Z])\s*(?:\\to|\\rightarrow|->)\s*([^}^+^-]+)\^-\}/g, 'lim($1 -> $2^-)');
  str = str.replace(/\\?lim_\{([a-zA-Z])\s*(?:\\to|\\rightarrow|->)\s*([^}^+^-]+)\^\+\}/g, 'lim($1 -> $2^+)');
  str = str.replace(/\\?lim_\{([a-zA-Z])\s*(?:\\to|\\rightarrow|->)\s*([^}]+)\}/g, 'lim($1 -> $2)');
  str = str.replace(/\\?lim_\{([^}]+)\}/g, 'lim($1)');
  str = str.replace(/\\?lim(?![a-zA-Z])/g, 'lim');

  // 10. Integrals, Summations, Products
  str = str.replace(/\\int_\{([^{}]+)\}\^\{([^{}]+)\}/g, 'int[$1 to $2]');
  str = str.replace(/\\int_([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)/g, 'int[$1 to $2]');
  str = str.replace(/\\int_\{([^{}]+)\}/g, 'int[$1]');
  str = str.replace(/\\(?:iint|iiint|oint|int)(?![a-zA-Z])/g, 'int ');
  str = str.replace(/\\sum_\{([^{}]+)\}\^\{([^{}]+)\}/g, 'sum[$1 to $2]');
  str = str.replace(/\\sum_\{([^{}]+)\}/g, 'sum[$1]');
  str = str.replace(/\\sum(?![a-zA-Z])/g, 'sum ');
  str = str.replace(/\\prod_\{([^{}]+)\}\^\{([^{}]+)\}/g, 'prod[$1 to $2]');
  str = str.replace(/\\prod(?![a-zA-Z])/g, 'prod ');

  // 11. Subscripts and Superscripts (Essential for Biology & Chemistry: V_{max}, H^+, H^{+}, Ca^{2+}, \Delta G^\circ)
  str = str.replace(/\^\{\\circ\}|\^\\circ|\\circ|\\degree/g, ' deg');
  str = str.replace(/\^\{([0-9]*[\+\-])\}/g, '^$1');
  str = str.replace(/\^\{([\+\-][0-9]*)\}/g, '^$1');
  str = str.replace(/\^\{([a-zA-Z0-9]+)\}/g, '^$1');
  str = str.replace(/\^\{([^{}]+)\}/g, '^($1)');
  str = str.replace(/_\{([a-zA-Z0-9]+)\}/g, '_$1');
  str = str.replace(/_\{([^{}]+)\}/g, '_($1)');

  // 12. Greek Letters (Capital & Lowercase)
  const greekMap: Record<string, string> = {
    '\\Delta': 'Delta', '\\Gamma': 'Gamma', '\\Theta': 'Theta', '\\Lambda': 'Lambda',
    '\\Xi': 'Xi', '\\Pi': 'Pi', '\\Sigma': 'Sum', '\\Upsilon': 'Upsilon',
    '\\Phi': 'Phi', '\\Psi': 'Psi', '\\Omega': 'Omega',
    '\\alpha': 'alpha', '\\beta': 'beta', '\\gamma': 'gamma', '\\delta': 'delta',
    '\\epsilon': 'epsilon', '\\varepsilon': 'epsilon', '\\zeta': 'zeta', '\\eta': 'eta',
    '\\theta': 'theta', '\\vartheta': 'theta', '\\iota': 'iota', '\\kappa': 'kappa',
    '\\lambda': 'lambda', '\\mu': 'mu', '\\nu': 'nu', '\\xi': 'xi',
    '\\pi': 'pi', '\\varpi': 'pi', '\\rho': 'rho', '\\varrho': 'rho',
    '\\sigma': 'sigma', '\\varsigma': 'sigma', '\\tau': 'tau', '\\upsilon': 'upsilon',
    '\\phi': 'phi', '\\varphi': 'phi', '\\chi': 'chi', '\\psi': 'psi', '\\omega': 'omega'
  };
  for (const [cmd, name] of Object.entries(greekMap)) {
    str = str.split(cmd).join(name);
  }

  // 13. Equilibrium & Arrows
  str = str
    .replace(/\\(?:rightleftharpoons|leftrightarrows|longleftrightarrow|Leftrightarrow|iff)/g, ' <=> ')
    .replace(/\\(?:implies|Rightarrow)/g, ' => ')
    .replace(/\\(?:rightarrow|to|longrightarrow)/g, ' -> ')
    .replace(/\\xrightarrow(?:\[[^\]]*\])?\{([^{}]*)\}/g, ' -[$1]-> ')
    .replace(/\\xrightarrow/g, ' -> ')
    .replace(/\\(?:leftarrow|longleftarrow|Leftarrow)/g, ' <- ')
    .replace(/\\uparrow/g, ' ^ ')
    .replace(/\\downarrow/g, ' v ');

  // 14. Operators, Comparisons, & Mathematical Constants
  str = str
    .replace(/\\(?:dots|cdots|ldots|vdots|ddots)/g, '...')
    .replace(/\\(?:pm|\+\/-)/g, ' +/- ')
    .replace(/\\mp/g, ' -/+ ')
    .replace(/\\(?:times|cdot)/g, ' * ')
    .replace(/\\div/g, ' / ')
    .replace(/\\(?:le|leq)(?![a-zA-Z])/g, ' <= ')
    .replace(/\\(?:ge|geq)(?![a-zA-Z])/g, ' >= ')
    .replace(/\\neq|\\ne(?![a-zA-Z])/g, ' != ')
    .replace(/\\(?:approx|cong)/g, ' ~= ')
    .replace(/\\equiv/g, ' == ')
    .replace(/\\sim/g, ' ~ ')
    .replace(/\\propto/g, ' proportional to ')
    .replace(/\\infty/g, 'infinity')
    .replace(/\\partial/g, 'd')
    .replace(/\\nabla/g, 'grad')
    .replace(/\\in(?![a-zA-Z])/g, ' in ')
    .replace(/\\notin/g, ' not in ')
    .replace(/\\subset(?![a-zA-Z])/g, ' subset of ')
    .replace(/\\subseteq/g, ' subset or equal to ')
    .replace(/\\cup/g, ' U ')
    .replace(/\\cap/g, ' intersect ')
    .replace(/\\emptyset/g, 'empty set')
    .replace(/\\forall/g, 'for all ')
    .replace(/\\exists/g, 'there exists ');

  // 15. Standard Trigonometric and Math Functions (strip backslash)
  str = str.replace(/\\(sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|sinh|cosh|tanh|ln|log|exp|max|min|det|gcd|dim)(?![a-zA-Z])/g, '$1');

  // 16. Accents & Variables
  str = str
    .replace(/\\overline\{([^{}]+)\}/g, 'line($1)')
    .replace(/\\underline\{([^{}]+)\}/g, '$1')
    .replace(/\\hat\{([^{}]+)\}/g, '$1_hat')
    .replace(/\\bar\{([^{}]+)\}/g, '$1_bar')
    .replace(/\\vec\{([^{}]+)\}/g, 'vec($1)');

  // 17. Spacing and LaTeX formatting tokens
  str = str
    .replace(/\\qquad/g, '    |    ')
    .replace(/\\quad/g, '   ')
    .replace(/\\[,;:!]/g, ' ')
    .replace(/\\(?:displaystyle|textstyle|scriptstyle|scriptscriptstyle|limits|nolimits)/g, '');

  // 17b. Piecewise functions (\begin{cases} ... \end{cases})
  str = str.replace(/\\begin\{cases\}([\s\S]*?)\\end\{cases\}/g, (_, body) => {
    const lines = body.split(/\\\\|\n/).map((l: string) => l.trim()).filter(Boolean);
    const cleanedLines = lines.map((l: string) => l.replace(/&/g, '  for  ')).join('; ');
    return `{ ${cleanedLines} }`;
  });

  // 18. Strip math delimiters: $$, $, \[, \], \(, \)
  str = str
    .replace(/\$\$/g, '')
    .replace(/\$/g, '')
    .replace(/\\\[/g, '')
    .replace(/\\\]/g, '')
    .replace(/\\\(/g, '')
    .replace(/\\\)/g, '');

  // 19. Clean up any remaining backslashes and loose command braces
  str = str.replace(/\\left\\\{/g, '{ ');
  str = str.replace(/\\right[.\}]/g, ' }');
  str = str.replace(/\\left/g, '');
  str = str.replace(/\\right/g, '');
  str = str.replace(/\\[a-zA-Z]+/g, '');
  str = str.replace(/\\/g, '');
  // Flatten exponent/subscript braces but preserve top-level piecewise/set braces { ... }
  str = str.replace(/([_\^])\{([^}]+)\}/g, '$1$2');
  str = str.replace(/\{\s*\}/g, '');

  // 20. Clean operator spacing cleanly without breaking compound tokens (<=>, =>, <=, >=, !=, ==, ->)
  str = str.replace(/\s*<=>\s*/g, ' <=> ');
  str = str.replace(/\s*<->\s*/g, ' <-> ');
  str = str.replace(/(?<!<)\s*=>\s*/g, ' => ');
  str = str.replace(/(?<!<)\s*->\s*/g, ' -> ');
  str = str.replace(/(?<!<)\s*<=\s*(?!>)/g, ' <= ');
  str = str.replace(/(?<![<=])\s*>=\s*(?!>)/g, ' >= ');
  str = str.replace(/\s*!=\s*/g, ' != ');
  str = str.replace(/(?<![<!=>])\s*=\s*(?![=>])/g, ' = ');

  return str.replace(/[ \t]+/g, ' ').trim();
}

/**
 * Universal PDF Text Sanitizer for jsPDF Standard Fonts (Helvetica, Times, Courier).
 * Runs full LaTeX conversion, Unicode normalizations, emoji stripping, and strict ASCII enforcement.
 */
export function sanitizePdfText(text: string): string {
  if (!text) return '';

  let str = String(text);

  // 0. Comprehensive LaTeX math to clean ASCII conversion
  str = formatLatexToAscii(str);

  // 1. Normalize Unicode IPA Pronunciation & Phonetic Symbols to readable Latin typography
  const phoneticMap: Record<string, string> = {
    'ə': 'e', 'ǝ': 'e', 'æ': 'ae', 'œ': 'oe', 'ʌ': 'u', 'ɑ': 'a', 'ɒ': 'o',
    'ɔ': 'o', 'ɛ': 'e', 'ɜ': 'er', 'ɪ': 'i', 'ʊ': 'u', 'iː': 'ee', 'uː': 'oo',
    'ɔː': 'or', 'ɑː': 'ah', 'ɜː': 'ur', 'eɪ': 'ay', 'aɪ': 'eye', 'ɔɪ': 'oy',
    'aʊ': 'ow', 'əʊ': 'oh', 'oʊ': 'oh', 'ɪə': 'eer', 'eə': 'air', 'ʊə': 'oor',
    'θ': 'th', 'ð': 'th', 'ʃ': 'sh', 'ʒ': 'zh', 'ʧ': 'ch', 'tʃ': 'ch',
    'ʤ': 'j', 'dʒ': 'j', 'ŋ': 'ng', 'ɡ': 'g', 'ɣ': 'gh', 'ʁ': 'r', 'ɾ': 'r',
    'ʔ': "'", 'ˈ': "'", 'ˌ': ',', 'ː': ':', 'ˑ': '.', '̃': '~'
  };

  for (const [symbol, replacement] of Object.entries(phoneticMap)) {
    str = str.split(symbol).join(replacement);
  }

  // 2. Convert emojis, checkmarks, bullets to pure ASCII
  str = str
    .replace(/[\u2705\u2714\u2611\u{1F5F8}]/gu, '[v] ')
    .replace(/[\u274C\u274E\u2716\u2718\u{1F5D9}]/gu, '[x] ')
    .replace(/[\u26A0\u{1F6A8}]/gu, '[!] ')
    .replace(/[\u27A1\u{1F449}\u25B6\u2794\u279C\u2192]/gu, ' -> ')
    .replace(/[\u2B05\u{1F448}\u25C0\u2190]/gu, ' <- ')
    .replace(/[\u2B06\u{1F53C}\u25B2\u2191]/gu, ' ^ ')
    .replace(/[\u2B07\u{1F53D}\u25BC\u2193]/gu, ' v ')
    .replace(/[\u2B50\u{1F31F}\u2728\u2734\u2605]/gu, '* ')
    .replace(/[\u{1F4A1}]/gu, '[Tip] ')
    .replace(/[\u{1F511}]/gu, '[Key] ')
    .replace(/[\u{1F4CC}\u{1F4CD}\u2022\u25CF\u25AA\u25E6]/gu, '- ')
    .replace(/[\u{1F3AF}\u{1F680}\u{1F4DA}\u{1F9E0}\u26A1\u{1F50D}\u{1F4DD}\u{1F399}\u{1F525}\u{1F3C6}\u{1F393}\u{1F4D6}\u{1F3F7}]/gu, '- ')
    .replace(/0\uFE0F?\u20E3/gu, '0. ')
    .replace(/1\uFE0F?\u20E3/gu, '1. ')
    .replace(/2\uFE0F?\u20E3/gu, '2. ')
    .replace(/3\uFE0F?\u20E3/gu, '3. ')
    .replace(/4\uFE0F?\u20E3/gu, '4. ')
    .replace(/5\uFE0F?\u20E3/gu, '5. ')
    .replace(/6\uFE0F?\u20E3/gu, '6. ')
    .replace(/7\uFE0F?\u20E3/gu, '7. ')
    .replace(/8\uFE0F?\u20E3/gu, '8. ')
    .replace(/9\uFE0F?\u20E3/gu, '9. ')
    .replace(/\u{1F51F}/gu, '10. ');

  // 3. Mathematical Greek, Scientific & Calculus Unicode symbols -> clean ASCII
  str = str
    .replace(/θ/g, 'theta')
    .replace(/π/g, 'pi')
    .replace(/α/g, 'alpha')
    .replace(/β/g, 'beta')
    .replace(/γ/g, 'gamma')
    .replace(/λ/g, 'lambda')
    .replace(/Δ/g, 'Delta')
    .replace(/δ/g, 'delta')
    .replace(/μ/g, 'mu')
    .replace(/σ/g, 'sigma')
    .replace(/ω/g, 'omega')
    .replace(/Ω/g, 'Omega')
    .replace(/Σ/g, 'Sum')
    .replace(/∞/g, 'infinity')
    .replace(/≈/g, '~=')
    .replace(/≠/g, '!=')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/±/g, '+/-')
    .replace(/∓/g, '-+')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/·/g, '*')
    .replace(/√/g, 'sqrt')
    .replace(/∫/g, 'integral')
    .replace(/∂/g, 'd')
    .replace(/∈/g, ' in ')
    .replace(/∉/g, ' not in ')
    .replace(/⟺/g, ' <=> ')
    .replace(/⟹/g, ' => ')
    .replace(/↔/g, ' <-> ')
    .replace(/→/g, ' -> ')
    .replace(/←/g, ' <- ');

  // 4. Normalize Unicode Superscripts & Subscripts to clean ASCII
  const superMap: Record<string, string> = {
    '⁰': '^0', '¹': '^1', '²': '^2', '³': '^3', '⁴': '^4',
    '⁵': '^5', '⁶': '^6', '⁷': '^7', '⁸': '^8', '⁹': '^9',
    '⁺': '^+', '⁻': '^-', 'ⁿ': '^n', 'ˣ': '^x', 'ᵗ': '^t', 'ᵏ': '^k'
  };
  for (const [sup, repl] of Object.entries(superMap)) {
    str = str.split(sup).join(repl);
  }

  const subMap: Record<string, string> = {
    '₀': '_0', '₁': '_1', '₂': '_2', '₃': '_3', '₄': '_4',
    '₅': '_5', '₆': '_6', '₇': '_7', '₈': '_8', '₉': '_9',
    '₊': '_+', '₋': '_-', 'ₙ': '_n', 'ᵢ': '_i'
  };
  for (const [sub, repl] of Object.entries(subMap)) {
    str = str.split(sub).join(repl);
  }

  // 5. Normalize Latin diacritics / accents (e.g. ā, ē, ī, ō, ū, ñ, é, à -> a, e, i, o, u, n, e, a)
  try {
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  } catch (_) {}

  // 6. Normalize smart quotes, dashes, ellipsis, non-breaking spaces
  str = str
    .replace(/[\u201C\u201D\u201E\u201F\u00AB\u00BB]/g, '"')
    .replace(/[\u2018\u2019\u201A\u201B\u02BB\u02BC`]/g, "'")
    .replace(/[\u2013\u2014\u2015]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/[\u00A0\u2002\u2003\u2009]/g, ' ')
    .replace(/[\u200B-\u200D\uFEFF]/g, '');

  // 7. Strip any remaining Unicode emojis or surrogate pairs
  try {
    str = str.replace(/\p{Extended_Pictographic}/gu, ' ');
  } catch (_) {
    str = str.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, ' ');
  }

  // 8. STRICT ASCII GUARANTEE (code <= 127):
  // Any remaining non-ASCII character will cause jsPDF standard fonts to switch
  // to UTF-16BE (2-byte), producing blank spaces between every single letter!
  let asciiSafe = '';
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code <= 127) {
      asciiSafe += str[i];
    } else {
      const ch = str[i];
      if (ch === '°') asciiSafe += ' deg';
      else if (ch === '©') asciiSafe += '(c)';
      else if (ch === '®') asciiSafe += '(R)';
      else if (ch === '™') asciiSafe += '(TM)';
      else if (ch === '•' || ch === '·') asciiSafe += '-';
      else if (ch === '…') asciiSafe += '...';
      else if (ch === '–' || ch === '—') asciiSafe += '-';
      else if (ch === '’' || ch === '‘') asciiSafe += "'";
      else if (ch === '”' || ch === '“') asciiSafe += '"';
      else asciiSafe += ' ';
    }
  }

  // 9. Clean up redundant spaces and empty lines
  return asciiSafe
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    .trim();
}
