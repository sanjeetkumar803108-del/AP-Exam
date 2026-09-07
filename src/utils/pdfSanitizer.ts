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
 * wide, broken "A  l i m i t  l i m ( x ...)" spacing.
 * This sanitizer completely eradicates that bug across all subject PDFs.
 */

/**
 * Converts any LaTeX string into human-readable, beautifully spaced pure ASCII math.
 */
export function formatLatexToAscii(latex: string): string {
  if (!latex) return '';
  let str = String(latex);

  // 0. Unescape HTML entities so math & text render cleanly in PDF without raw entity strings
  str = str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&le;/g, '<=')
    .replace(/&ge;/g, '>=')
    .replace(/&ne;/g, '!=')
    .replace(/&plusmn;/g, '+/-')
    .replace(/&times;/g, '*')
    .replace(/&divide;/g, '/')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');

  // 1a. Piecewise functions (\begin{cases} ... \end{cases}) BEFORE general environment removal
  str = str.replace(/\\begin\{cases\}([\s\S]*?)\\end\{cases\}/g, (_, body) => {
    const lines = body.split(/\\{2,}|\n/).map((l: string) => l.trim()).filter(Boolean);
    const cleanedLines = lines.map((l: string) => l.replace(/&/g, ' for ')).join('; ');
    return `{ ${cleanedLines} }`;
  });

  // 1b. Remove LaTeX environment wrappers and column alignment specs (e.g. {c|ccccc})
  str = str.replace(/\\begin\{(?:aligned|matrix|pmatrix|bmatrix|cases|array|split|gather|equation)\*?\}(?:\{[^{}]*\})?/g, '');
  str = str.replace(/\\end\{(?:aligned|matrix|pmatrix|bmatrix|cases|array|split|gather|equation)\*?\}/g, '');
  str = str.replace(/\\hline/g, '\n----------------------------------------\n');

  // 2. Clean \left and \right delimiters (strictly prevent eating \rightarrow, \rightleftharpoons, etc.)
  str = str.replace(/\\left\s*\\\{/g, '{');
  str = str.replace(/\\right\s*\\\}/g, '}');
  str = str.replace(/\\left\s*([([\{|])/g, '$1');
  str = str.replace(/\\right\s*([)\]}|])/g, '$1');
  str = str.replace(/\\left\./g, '');
  str = str.replace(/\\right\./g, '');
  str = str.replace(/\\(?:left|right)(?![a-zA-Z])/g, '');

  // 3. Clean alignment tokens and double-backslash line breaks (NEVER replace single backslash!)
  str = str.replace(/&=/g, ' = ');
  str = str.replace(/&/g, ' | ');
  str = str.replace(/\\{2,}/g, '\n');
  str = str.replace(/([^\n])\s*\n/g, '$1\n');

  // 4. Unwrap formatting tags: \text{...}, \mathrm{...}, \mathbf{...}, \mathit{...}, \textbf{...}, \textit{...}, \ce{...}, \pu{...}
  for (let loop = 0; loop < 5; loop++) {
    const before = str;
    str = str.replace(/\\(?:text|mathrm|mathbf|mathit|textbf|textit|texttt|textrm|mathcal|mathbb|mathsf|operatorname|ce|pu)\{([^{}]*)\}/g, '$1');
    if (str === before) break;
  }

  // 4b. Separation between trig functions and following greek/variable (\sin\theta -> \sin \theta)
  str = str.replace(/\\(sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|sinh|cosh|tanh|ln|log|exp)\s*\\([a-zA-Z]+)/g, '$1 $2');
  str = str.replace(/\\(sin|cos|tan|sec|csc|cot|ln|log)\s+([a-zA-Z0-9])/g, '$1 $2');

  // 4c. Letter touching Greek letter (e.g. T\Delta S -> T Delta S)
  str = str.replace(/([a-zA-Z0-9])\\(Delta|Gamma|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega|alpha|beta|gamma|delta|epsilon|varepsilon|zeta|eta|theta|vartheta|iota|kappa|lambda|mu|nu|xi|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\b/g, '$1 $2');

  // 5. Common Calculus Derivatives before general fractions
  str = str.replace(/\\(?:d|t)?frac\{d([a-zA-Z])\}\{d([a-zA-Z])\}/g, 'd$1/d$2');
  str = str.replace(/\\(?:d|t)?frac\{d\^2([a-zA-Z])\}\{d([a-zA-Z])\^2\}/g, 'd^2$1/d$2^2');
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

  // 5b. Pre-clean standard functions so \max, \min, \rm become clean identifiers before subscripts
  str = str.replace(/\\(max|min|sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|sinh|cosh|tanh|ln|log|exp|det|gcd|dim|rm)\b/g, '$1');

  // 5c. Primes and Derivatives
  str = str
    .replace(/\^\{\\prime\\prime\}/g, "''")
    .replace(/\^\{\\prime\}/g, "'")
    .replace(/\\prime\\prime/g, "''")
    .replace(/\\prime/g, "'")
    .replace(/\u2032/g, "'")
    .replace(/\u2033/g, "''")
    .replace(/\u2034/g, "'''");

  // 6. Robust recursive fraction parsing (\frac, \dfrac, \tfrac) with textbook typographical intelligence
  function formatFraction(num: string, den: string): string {
    num = num.trim();
    den = den.trim();

    // Helper to determine if an expression is a "simple term" that doesn't need outer parens in numerator
    const isSimpleTerm = (s: string) => {
      // Single number or simple variable (e.g. 1, 0.693, x, y, h, N, dt, dx, pi, v^2, x^n, e^x, sin x, [H^+])
      if (/^[a-zA-Z0-9_]+(\^[a-zA-Z0-9_\-]+)?$/.test(s)) return true;
      if (/^[0-9]+(\.[0-9]+)?$/.test(s)) return true;
      if (/^[a-zA-Z]+[0-9_]*\([a-zA-Z0-9_,\s]+\)$/.test(s)) return true; // f(x), g(x), f'(x)
      if (/^\[[^\[\]]+\](\^[0-9]+)?$/.test(s)) return true; // [HA], [g(x)]^2
      if (/^\[[^\[\]]+\]\s*\[[^\[\]]+\]$/.test(s)) return true; // [H^+][A^-]
      if (/^[a-zA-Z]+[0-9_]*$/.test(s)) return true; // MP_L, MP_K
      if (/^(?:sin|cos|tan|sec|csc|cot|ln|log|sqrt)\b[^\+\-]*$/.test(s)) return true; // sin x, ln x
      // If it's already wrapped in parens (e.g. (o - e)^2 or (x + h))
      if (/^\([^()]+\)(\^[0-9a-zA-Z_]+)?$/.test(s)) return true;
      return false;
    };

    // Helper to determine if denominator needs parentheses
    const isSimpleDen = (s: string) => {
      if (/^[a-zA-Z0-9_]+(\^[a-zA-Z0-9_\-]+)?$/.test(s)) return true; // x, h, r, k, W, e, 2, 4, 8, dt, dx
      if (/^[0-9]+(\.[0-9]+)?$/.test(s)) return true;
      if (/^[a-zA-Z]+[0-9_]*\([a-zA-Z0-9_,\s]+\)$/.test(s)) return true; // g(x), f(x)
      if (/^\[[^\[\]]+\](\^[0-9]+)?$/.test(s)) return true; // [HA], [Weak Acid], [g(x)]^2
      if (/^[a-zA-Z]+[0-9_]*$/.test(s)) return true; // MP_L
      if (/^\([^()]+\)(\^[0-9a-zA-Z_]+)?$/.test(s)) return true; // (g(x))^2
      return false;
    };

    const cleanNum = isSimpleTerm(num) ? num : `(${num})`;
    const cleanDen = isSimpleDen(den) ? den : `(${den})`;

    return `${cleanNum} / ${cleanDen}`;
  }

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
            const rep = formatFraction(num, den);
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

  // 8. Radicals & Roots (handle up to 3 nesting levels)
  for (let i = 0; i < 3; i++) {
    str = str.replace(/\\sqrt\[([^\]]+)\]\{([^{}]+)\}/g, '$1-sqrt($2)');
    str = str.replace(/\\sqrt\{([^{}]+)\}/g, 'sqrt($1)');
  }
  str = str.replace(/\\sqrt\[([^\]]+)\]/g, '$1-sqrt');
  str = str.replace(/\\sqrt/g, 'sqrt');

  // 9. Calculus Limits — handle one-sided limits (x -> c^-) and (x -> c^+) first
  str = str.replace(/\\?lim_\{([a-zA-Z])\s*(?:\\to|\\rightarrow|->)\s*([^}^+^\-]+)\^\s*-\s*\}/g, 'lim($1 -> $2^-)');
  str = str.replace(/\\?lim_\{([a-zA-Z])\s*(?:\\to|\\rightarrow|->)\s*([^}^+^\-]+)\^\s*\+\s*\}/g, 'lim($1 -> $2^+)');
  str = str.replace(/\\?lim_\{([a-zA-Z])\s*(?:\\to|\\rightarrow|->)\s*([^}]+)\}/g, 'lim($1 -> $2)');
  str = str.replace(/\\?lim_\{([^}]+)\}/g, 'lim($1)');
  str = str.replace(/\\?lim(?![a-zA-Z])/g, 'lim');

  // 10. Integrals, Summations, Products
  str = str.replace(/\\int_\{([^{}]+)\}\^\{([^{}]+)\}/g, 'int[$1 to $2]');
  str = str.replace(/\\int_([a-zA-Z0-9]+)\^\{([^{}]+)\}/g, 'int[$1 to $2]');
  str = str.replace(/\\int_\{([^{}]+)\}\^([a-zA-Z0-9]+)/g, 'int[$1 to $2]');
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
  // Clean subscripts without redundant parentheses: _{max} -> _max, _{cell} -> _cell, _{s,beaker} -> _s,beaker
  str = str.replace(/_\{([a-zA-Z0-9_,\s]+)\}/g, (_m, inner) => {
    const cleanInner = inner.replace(/\s+/g, ' ').trim();
    return `_${cleanInner}`;
  });
  str = str.replace(/_\{([^{}]+)\}/g, '_($1)');

  // 12. Greek Letters (Capital & Lowercase — complete set)
  const greekMap: Record<string, string> = {
    '\\Delta': 'Delta', '\\Gamma': 'Gamma', '\\Theta': 'Theta', '\\Lambda': 'Lambda',
    '\\Xi': 'Xi', '\\Pi': 'Pi', '\\Sigma': 'Sigma', '\\Upsilon': 'Upsilon',
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
    .replace(/\\downarrow/g, ' v ')
    .replace(/\\leftrightarrow/g, ' <-> ');

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
  // Remove any remaining \command patterns (keep content if in braces)
  str = str.replace(/\\[a-zA-Z]+\{([^{}]*)\}/g, '$1');
  str = str.replace(/\\[a-zA-Z]+/g, '');
  str = str.replace(/\\/g, '');
  // Flatten exponent/subscript braces but preserve top-level piecewise/set braces { ... }
  str = str.replace(/([_\^])\{([^}]+)\}/g, '$1$2');
  str = str.replace(/\{\s*\}/g, '');

  // 20. Clean operator spacing cleanly without breaking compound tokens (<=>, =>, <-, ->, <=, >=, !=, ==)
  str = str.replace(/\s*<=>\s*/g, ' <=> ');
  str = str.replace(/\s*<->\s*/g, ' <-> ');
  str = str.replace(/(?<!<)\s*=>\s*/g, ' => ');
  str = str.replace(/(?<!<)\s*->\s*/g, ' -> ');
  str = str.replace(/(?<!<)\s*<=\s*(?!>)/g, ' <= ');
  str = str.replace(/(?<![<=])\s*>=\s*(?!>)/g, ' >= ');
  str = str.replace(/\s*!=\s*/g, ' != ');
  str = str.replace(/(?<![<!==>])\s*=\s*(?![=>])/g, ' = ');

  // Post-clean subscripts: flatten any leftover _(max) -> _max, _(s) -> _s, etc.
  str = str.replace(/_\(([a-zA-Z0-9_,\s]+)\)/g, (_m, inStr) => `_${inStr.trim()}`);
  str = str.replace(/t_\(1\/2\)|t_\{1\/2\}/g, 't_1/2');
  str = str.replace(/\|_\(\(([^)]+)\)\)/g, '| ($1)');
  
  // Clean up nested parentheses and brackets: ((...)) -> (...), ([...]) -> [...]
  for (let i = 0; i < 3; i++) {
    str = str.replace(/\(\(([^\(\)]+)\)\)/g, '($1)');
    str = str.replace(/\(\[([^\[\]]+)\]\)/g, '[$1]');
    str = str.replace(/\[\s*\(([^()]+)\)\s*\]/g, '[$1]');
  }

  // Clean up fractions wrapped in redundant parens:
  str = str.replace(/\(\s*([a-zA-Z0-9_]+)\s*\)\s*\/\s*\(\s*([a-zA-Z0-9_]+)\s*\)/g, '$1 / $2');
  str = str.replace(/\/\s*\(\s*([a-zA-Z0-9_]+)\s*\)(?![a-zA-Z0-9_\^])/g, '/ $1');
  str = str.replace(/(?<![a-zA-Z0-9_\^])\(\s*([a-zA-Z0-9_]+)\s*\)\s*\//g, '$1 /');
  str = str.replace(/\(\s*([0-9]+(?:\.[0-9]+)?)\s*\)\s*\/\s*([a-zA-Z0-9_]+)/g, '$1 / $2');
  str = str.replace(/\(\s*1\s*\)\s*\/\s*\[([^\[\]]+)\]/g, '1 / [$1]');
  str = str.replace(/\(\s*([a-zA-Z0-9\s]+)\s*\)\s*\/\s*\(\s*([0-9]+)\s*\)/g, '($1) / $2');

  // Multi-line alignment spacer cleanup
  str = str.replace(/\s*\|\s*/g, '   |   ');

  return str.replace(/[ \t]+/g, ' ').trim();
}

export function formatMathForPdf(text: string): string {
  return sanitizePdfText(text);
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
    .replace(/Σ/g, 'Sigma')
    .replace(/φ/g, 'phi')
    .replace(/ψ/g, 'psi')
    .replace(/χ/g, 'chi')
    .replace(/ξ/g, 'xi')
    .replace(/ε/g, 'epsilon')
    .replace(/η/g, 'eta')
    .replace(/ν/g, 'nu')
    .replace(/ρ/g, 'rho')
    .replace(/τ/g, 'tau')
    .replace(/∞/g, 'infinity')
    .replace(/≈/g, '~=')
    .replace(/≠/g, '!=')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/≡/g, '==')
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
    .replace(/←/g, ' <- ')
    .replace(/⇌/g, ' <=> ');

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
      else if (ch === '\u2018' || ch === '\u2019') asciiSafe += "'";
      else if (ch === '\u201C' || ch === '\u201D') asciiSafe += '"';
      else asciiSafe += ' ';
    }
  }

  // 9. Clean up redundant spaces and empty lines
  return asciiSafe
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    .trim();
}

export interface PdfSolutionStep {
  label: string;
  content: string;
}

/**
 * Detects whether an answer or problem statement contains mathematical derivations or calculations.
 */
export function isCalculationText(text: string): boolean {
  if (!text) return false;
  const calcPatterns = [
    /\\(?:frac|int|lim|sum|sqrt|cdot|times|partial|approx|le|ge)\b/,
    /[$=][^$\n]*\d+/,
    /\d+\s*[\+\-\*\/=]\s*\d+/,
    /\b(calculate|computed?|derivat\w*|integral\w*|solve for|evaluate)\b/i,
    /\b(dy\/dx|f'\(x\)|f''\(x\)|lim_\{|\\int_)\b/,
    /\b(m\/s\^?2?|kg|mol|Joules?|Watts?|Volts?|Ohms?|Hz)\b/,
    /\b(for\s*\(|while\s*\(|int\s+[a-zA-Z]|System\.out)\b/
  ];
  return calcPatterns.some(p => p.test(text));
}

/**
 * Normalizes glued words, punctuation, and part delimiters (e.g. "holds.(b)" -> "holds.\n\n(b)")
 * and parses multi-part solutions/explanations into clean blocks.
 * IMPORTANT: For theory-based questions, suppresses robotic "Step 1:", "Step 2:" labels
 * so that narrative analysis flows as cohesive, dignified paragraphs.
 * For calculation-based questions, preserves sequential mathematical steps.
 */
export function parseSolutionStepsForPdf(rawText: string, forceCalculation?: boolean): PdfSolutionStep[] {
  if (!rawText || !rawText.trim()) return [];

  // 1. Sanitize text first
  let text = sanitizePdfText(rawText);

  // 2. Fix glued periods between words (e.g. "continuity.Next" -> "continuity. Next")
  text = text.replace(/([a-z]{2,})\.([A-Z])/g, '$1. $2');

  // 3. Fix missing spaces after commas, colons, semicolons, and parentheses
  text = text.replace(/([,;:])([A-Za-z])/g, '$1 $2');
  text = text.replace(/(\))([A-Za-z]{2,})/g, '$1 $2');
  text = text.replace(/([A-Za-z]{2,})(\()/g, '$1 $2');
  text = text.replace(/(\*\*[^*]+\*\*)([A-Za-z])/g, '$1 $2');
  text = text.replace(/([A-Za-z])(\*\*[^*]+\*\*)/g, '$1 $2');

  // 4. Fix glued subparts:
  text = text.replace(/([^\n\r])\s*(\([a-eA-E]\)|Part\s*\(?[A-Ea-e1-9]\)?:?|Step\s*\d+:?)(?=\s+[A-Za-z0-9]|\s*$)/g, '$1\n\n$2 ');

  // 5. Fix glued MCQ options and choices
  text = text.replace(/([^\n\r])\s*(Choice\s*\(?[A-D]\)?|Option\s*\(?[A-D]\)?|Distractor\s*\(?[A-D]\)?)/gi, '$1\n\n$2');

  // Detect whether this explanation is calculation-based or theory-based
  const isCalc = forceCalculation ?? isCalculationText(text);

  // 6. Split into blocks
  const rawBlocks = text
    .split(/\n\s*\n|\n/)
    .map(b => b.trim())
    .filter(b => b.length > 0);

  if (rawBlocks.length === 0) return [];

  const steps: PdfSolutionStep[] = [];

  for (let i = 0; i < rawBlocks.length; i++) {
    const block = rawBlocks[i];

    // Check patterns
    const parenPartMatch = block.match(/^\s*\(?([a-eA-E])\)?[:\-\.]?\s*(.*)$/s);
    const namedPartMatch = block.match(/^\s*Part\s*\(?([a-eA-E1-9])\)?[:\-\.]?\s*(.*)$/is);
    const stepMatch = block.match(/^\s*Step\s*(\d+)[:\-\.]?\s*(.*)$/is);
    const choiceMatch = block.match(/^\s*(Choice\s*\(?[A-D]\)?|Option\s*\(?[A-D]\)?|Distractor\s*\(?[A-D]\)?)[:\-\.]?\s*(.*)$/is);
    const numberedMatch = block.match(/^\s*(\d+)[\.\)]\s+(.*)$/s);

    if (parenPartMatch && parenPartMatch[1]) {
      const partLetter = parenPartMatch[1].toLowerCase();
      steps.push({
        label: `Part (${partLetter}):`,
        content: parenPartMatch[2].trim()
      });
    } else if (namedPartMatch && namedPartMatch[1]) {
      steps.push({
        label: `Part (${namedPartMatch[1].toLowerCase()}):`,
        content: namedPartMatch[2].trim()
      });
    } else if (stepMatch && stepMatch[1]) {
      if (isCalc) {
        steps.push({
          label: `Step ${stepMatch[1]}:`,
          content: stepMatch[2].trim()
        });
      } else {
        // Theory question: DO NOT write "Step 1:". Present content as cohesive analysis.
        steps.push({
          label: '',
          content: stepMatch[2].trim()
        });
      }
    } else if (choiceMatch && choiceMatch[1]) {
      steps.push({
        label: `${choiceMatch[1].trim()}:`,
        content: choiceMatch[2].trim()
      });
    } else if (numberedMatch && numberedMatch[1] && rawBlocks.length > 1) {
      if (isCalc) {
        steps.push({
          label: `Step ${numberedMatch[1]}:`,
          content: numberedMatch[2].trim()
        });
      } else {
        steps.push({
          label: '',
          content: numberedMatch[2].trim()
        });
      }
    } else {
      // If block 0 has no label, but block 1 has Part (b):, block 0 is Part (a):
      if (i === 0 && rawBlocks.length > 1 && rawBlocks[1].match(/^\s*\(?[bB]\)?/)) {
        steps.push({
          label: 'Part (a):',
          content: block
        });
      } else {
        // Only assign "Step X:" if this is a calculation problem; for theory, keep label empty
        const shouldAddStepLabel = isCalc && rawBlocks.length > 1 && !block.startsWith('•') && !block.startsWith('-');
        steps.push({
          label: shouldAddStepLabel ? `Step ${i + 1}:` : '',
          content: block
        });
      }
    }
  }

  return steps;
}
