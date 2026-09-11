import React, { useMemo, memo } from 'react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

interface GlobalMarkdownProps {
  children?: any;
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

  // 1. Repair escaped or eaten control characters in LaTeX math formulas using exact ASCII hex codes:
  // \x0D = carriage return (\r)
  text = text.replace(/\x0D(ightarrow|ho|ight|angle|eal|m|oot|ceil|floor)/g, '\\r$1');
  // \x09 = tab (\t)
  text = text.replace(/\x09(heta|ext|imes|an|au|o|ilde|ag|op|extbf|extit)/g, '\\t$1');
  // \x0C = form feed (\f)
  text = text.replace(/\x0C(rac|orall|lat|oot)/g, '\\f$1');
  // \x08 = backspace (\b)
  text = text.replace(/\x08(eta|egin|ar|ig|oldsymbol|inom|ot|ullet|f|mod)/g, '\\b$1');
  // \x0A = newline (\n)
  text = text.replace(/\x0A(eq|abla|otin|atural|earrow|warrow)/g, '\\n$1');

  // 2. Fix broken/clipped arrow tokens (e.g. "ightarrow" -> "\rightarrow")
  text = text.replace(/(^|[\s$(=_])ightarrow([\s$_^0-9A-Za-z])/g, '$1\\rightarrow$2');
  text = text.replace(/(^|[\s$(=_])rac\{/g, '$1\\frac{');
  text = text.replace(/(^|[\s$(=_])ext\{/g, '$1\\text{');
  text = text.replace(/(^|[\s$(=_])heta([\s$_^0-9A-Za-z])/g, '$1\\theta$2');

  // 3. Heal pseudo-code limits and common mathematical notations
  // Convert full limit equation like lim_{x->-inf} (3x-1)/sqrt(4x^2+5) = 3/(-sqrt(4)) = -3/2
  text = text.replace(/lim_\{?x\s*->\s*-?\s*(?:inf|infinity)\}?\s*\(([^)]+)\)\/sqrt\(([^)]+)\)\s*=\s*([0-9\-\+]+)\/\(-?sqrt\(([0-9]+)\)\)\s*=\s*(-?[0-9]+\/[0-9]+)/gi,
    '$$\\lim_{x \\to -\\infty} \\frac{$1}{\\sqrt{$2}} = \\frac{$3}{-\\sqrt{$4}} = $5$$');

  // Convert limit arrow notations like lim_{x->2}, lim_{x->2^-}, lim_{x->2^+}, lim_{x->c}
  text = text.replace(/(?<!\$)\blim_\{x\s*->\s*([a-zA-Z0-9]+)(\^[\+\-]|\^\{[\+\-]\})?\}(?!\$)/gi, (m, val, sign) => {
    const s = sign ? sign.replace(/[\{\}]/g, '') : '';
    return `$\\lim_{x \\to ${val}${s ? `^{${s.replace('^', '')}}` : ''}}$`;
  });
  text = text.replace(/(?<!\$)\blim_\{x\s*->\s*-?\s*(?:inf|infinity)\}(?!\$)/gi, '$\\lim_{x \\to -\\infty}$');

  // Convert arrow directionals like (x->2^-) or (x->2^+) or x -> -infinity
  text = text.replace(/(?<!\$)\bx\s*->\s*-?\s*(?:infinity|inf)\b(?!\$)/gi, '$x \\to -\\infty$');
  text = text.replace(/(?<!\$)\bx\s*->\s*([0-9a-zA-Z]+)\^([\+\-])(?!\$)/gi, '$x \\to $1^{$2}$');
  text = text.replace(/(?<!\$)\bx\s*->\s*([0-9a-zA-Z]+)(?!\$|\^)/gi, '$x \\to $1$');

  // Convert bare sqrt expressions like sqrt(x^2), sqrt(4x^2+5), sqrt(4)
  text = text.replace(/(?<![\\$a-zA-Z0-9])sqrt\(([^)]+)\)/g, (m, inner) => {
    let cleanInner = inner.replace(/\^([0-9a-zA-Z]+)/g, '^{$1}');
    return `$\\sqrt{${cleanInner}}$`;
  });

  // Convert algebraic derivatives like d/dx[pi^2], dy/dx
  text = text.replace(/(?<!\$)d\/dx\[([^\]]+)\](?!\$)/g, (m, inner) => {
    let clean = inner.replace(/\^([0-9a-zA-Z]+)/g, '^{$1}');
    return `$\\frac{d}{dx}[${clean}]$`;
  });
  text = text.replace(/(?<!\$)dy\/dx(?!\$)/g, '$\\frac{dy}{dx}$');

  // Convert integrals like integral(x^-1 dx)
  text = text.replace(/(?<!\$)integral\(([^)]+)\)(?!\$)/g, (m, inner) => {
    let clean = inner.replace(/\^([0-9a-zA-Z\-]+)/g, '^{$1}');
    return `$\\int (${clean})$`;
  });

  // Convert != to \ne
  text = text.replace(/(?<=\s)!=(?=\s)/g, '$\\ne$');

  text = text.replace(/\\?lim\s*\(\s*x\s*(?:->|\\to)\s*(?:infinity|\\infty)\s*\)/gi, '\\lim_{x \\to \\infty}');
  text = text.replace(/\\left\\\{([^$\n]*?)(?=(\$|\n|$))/g, (m) => m.includes('\\right') ? m : m + '\\right.');


  // 4. Convert standard LaTeX display and inline math delimiters:
  // \[ ... \] -> $$ ... $$
  text = text.replace(/\\\[([\s\S]*?)\\\]/g, '$$\n$1\n$$');
  // \( ... \) -> $ ... $
  text = text.replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');

  // 5. Repair single-backslash row breaks before \hline or at end of table rows:
  // e.g. "4 \ \hline" -> "4 \\ \hline"
  text = text.replace(/([^\\])\\\s*\\hline/g, '$1\\\\ \\hline');
  text = text.replace(/([0-9a-zA-Z\)\}\]])\s*\\\s*(\n|$)/g, '$1 \\\\\n');

  // 5.5. Heal multiline inline math ($ ... \n ... $) where LaTeX formulas were split across line breaks:
  // e.g. "$a = \frac{T - mg\n\sin\theta}{m}$" -> "$a = \frac{T - mg \sin\theta}{m}$"
  text = text.replace(/(?<!\$)\$([^\$\n]+?(?:\\[a-zA-Z]+|[=+\-*/^_])[^\$]*?\n[^\$]+?)\$(?!\$)/g, (match, body) => {
    if (!body.includes('\n\n')) {
      return `$${body.replace(/\s*\n\s*/g, ' ').trim()}$`;
    }
    return match;
  });

  // 6. Wrap bare LaTeX environments (\begin{array}, \begin{matrix}, \begin{cases}, \begin{aligned}, etc.)
  // that are NOT already enclosed in $$ or $
  const envNames = 'array|matrix|pmatrix|bmatrix|Bmatrix|vmatrix|Vmatrix|cases|aligned|align\\*?|gather\\*?|equation\\*?';
  const envRegex = new RegExp(`(?<!\\$|\\$\\$)\\s*(\\\\begin\\{(?:${envNames})\\}[\\s\\S]*?\\\\end\\{(?:${envNames})\\})\\s*(?!\\$|\\$\\$)`, 'g');
  text = text.replace(envRegex, (match, envBody) => {
    return `\n\n$$\n${envBody.trim()}\n$$\n\n`;
  });

  // 7. Fix unclosed/unmatched $$ on a single line (only if line has text + a single $$)
  const lines = text.split('\n');
  const fixedLines = lines.map(line => {
    const trimmed = line.trim();
    if (trimmed === '$$') return line; // Standalone delimiter line is already valid!
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

  // 8. Clean and sanitize math blocks while strictly protecting LaTeX syntax
  // Extract and mask math blocks ($$...$$ and $...$) so we don't accidentally mutate valid LaTeX math formulas
  const mathBlocks: string[] = [];
  const mathTokenRegex = /(\$\$[\s\S]*?\$\$|\$(?:\\.|[^\$\n\\])+\$)/g;

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

    const idx = mathBlocks.length;
    mathBlocks.push(math);
    return `__AP_MATH_TOKEN_${idx}__`;
  });

  // 9. Heal code blocks (fenced ```...``` and inline `...`)
  // Replace LaTeX comparison/math symbols with authentic programming operators in code blocks
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
      .replace(/\b([a-zA-Z0-9_]+)\s*=\s*null\b/g, '$1 == null'); // Heal accidental assignment inside code conditions
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

  // 10. Convert raw LaTeX formatting commands in prose into standard Markdown
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
  maskedText = maskedText.replace(/\\verb\|([^|\n]+)\|/g, '`$1`');
  maskedText = maskedText.replace(/\\verb!([^!\n]+)!/g, '`$1`');
  maskedText = maskedText.replace(/\\verb\+([^+\n]+)\+/g, '`$1`');

  // 11. Heal stray comparison and programming operators in prose outside math mode
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

  // Heal accidental single equals in if (var = null) conditions
  maskedText = maskedText.replace(/\bif\s*\(([^()]+)\)/g, (_m, condition) => {
    return `if (${condition.replace(/\b([a-zA-Z0-9_]+)\s*=\s*null\b/g, '$1 == null')})`;
  });

  // 12. Restore protected LaTeX math blocks
  text = maskedText.replace(/__AP_MATH_TOKEN_(\d+)__/g, (_, idx) => {
    return mathBlocks[Number(idx)] || '';
  });

  // 13. Heal bare superscripts, subscripts, Pandoc syntax, and chemical equations outside math blocks:
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

const remarkPluginsList = [remarkMath, remarkGfm];
const rehypePluginsList: any[] = [[rehypeKatex, { strict: false, throwOnError: false }], rehypeRaw];

const defaultComponents = {
  h1: ({ node, ...props }: any) => (
    <h1 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-4 mb-2 tracking-tight leading-snug break-words" {...props} />
  ),
  h2: ({ node, ...props }: any) => (
    <h2 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 mt-3.5 mb-1.5 tracking-tight leading-snug break-words" {...props} />
  ),
  h3: ({ node, ...props }: any) => (
    <h3 className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-3 mb-1 tracking-tight leading-snug break-words" {...props} />
  ),
  h4: ({ node, ...props }: any) => (
    <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 mt-2 mb-1 tracking-tight leading-snug break-words" {...props} />
  ),
  p: ({ node, ...props }: any) => (
    <p className="text-xs sm:text-[13px] text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed my-2 break-words" {...props} />
  ),
  ul: ({ node, ...props }: any) => (
    <ul className="list-disc pl-4 space-y-1 my-2 text-xs sm:text-[13px] text-zinc-800 dark:text-zinc-200 leading-relaxed" {...props} />
  ),
  ol: ({ node, ...props }: any) => (
    <ol className="list-decimal pl-4 space-y-1 my-2 text-xs sm:text-[13px] text-zinc-800 dark:text-zinc-200 leading-relaxed" {...props} />
  ),
  li: ({ node, ...props }: any) => (
    <li className="leading-relaxed" {...props} />
  ),
  code: ({ node, inline, className, children, ...props }: any) => {
    const isInline = !className && !String(children).includes('\n');
    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 mx-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 font-mono text-[12px] font-semibold border border-purple-200/80 dark:border-purple-800/60 break-words"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={`font-mono text-xs text-zinc-100 ${className || ''}`} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ node, children, ...props }: any) => (
    <pre
      className="p-3.5 my-3 rounded-2xl bg-zinc-950 dark:bg-zinc-900 text-zinc-100 font-mono text-xs overflow-x-auto border border-zinc-800/90 shadow-xs leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  ),
  blockquote: ({ node, ...props }: any) => (
    <blockquote className="border-l-4 border-purple-500 pl-3.5 my-2.5 text-zinc-700 dark:text-zinc-300 italic text-xs sm:text-sm bg-purple-50/40 dark:bg-purple-950/20 py-1.5 rounded-r-xl" {...props} />
  ),
  table: ({ node, ...props }: any) => (
    <div className="overflow-x-auto my-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xs">
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
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-2xs rounded-2xl p-4 my-3 font-sans text-zinc-800 dark:text-zinc-200" {...props} />
  ),
};

function GlobalMarkdown({ children, className = '', components = {} }: GlobalMarkdownProps) {
  if (!children) return null;

  const processedContent = useMemo(() => {
    return cleanMarkdownMath(children);
  }, [children]);

  const mergedComponents = useMemo(() => {
    if (!components || Object.keys(components).length === 0) {
      return defaultComponents;
    }
    return { ...defaultComponents, ...components };
  }, [components]);

  return (
    <div className={`markdown-body ${className}`}>
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
