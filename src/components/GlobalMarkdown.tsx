import React, { useMemo, memo } from 'react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';

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
  // Unescape any HTML entities inside LaTeX math expressions so KaTeX never receives invalid '&lt;', '&gt;', etc.
  const mathTokenRegex = /(\$\$[\s\S]*?\$\$|\$(?:\\.|[^\$\n\\])+\$)/g;
  text = text.replace(mathTokenRegex, (match) => {
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

    // If inside a tabular/matrix environment, restore &amp; to & (column separator), otherwise \&
    if (math.includes('\\begin{')) {
      math = math.replace(/&amp;/g, ' & ');
    } else {
      math = math.replace(/&amp;/g, '\\&');
    }
    
    // Repair single-backslash row breaks inside math blocks
    math = math.replace(/([^\\])\\\s*\\hline/g, '$1\\\\ \\hline');

    // Heal unescaped % inside math expressions so KaTeX does not treat % as a comment and blank out the formula
    math = math.replace(/(?<!\\)%/g, '\\%');

    return math;
  });

  // 9. Unescape HTML entities inside inline code spans and backticks:
  text = text.replace(/`([^`\n]+)`/g, (match, code) => {
    return '`' + code.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') + '`';
  });

  // 10. Heal bare superscripts, subscripts, Pandoc syntax, and chemical equations outside math blocks:
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
    <h1 className="text-base sm:text-lg font-bold text-zinc-900 mt-4 mb-2 tracking-tight leading-snug break-words" {...props} />
  ),
  h2: ({ node, ...props }: any) => (
    <h2 className="text-sm sm:text-base font-bold text-zinc-900 mt-3.5 mb-1.5 tracking-tight leading-snug break-words" {...props} />
  ),
  h3: ({ node, ...props }: any) => (
    <h3 className="text-xs sm:text-sm font-bold text-zinc-800 mt-3 mb-1 tracking-tight leading-snug break-words" {...props} />
  ),
  h4: ({ node, ...props }: any) => (
    <h4 className="text-xs font-bold text-zinc-700 mt-2 mb-1 tracking-tight leading-snug break-words" {...props} />
  ),
  p: ({ node, ...props }: any) => (
    <p className="text-xs sm:text-[13px] text-zinc-800 font-normal leading-relaxed my-2 break-words" {...props} />
  ),
  ul: ({ node, ...props }: any) => (
    <ul className="list-disc pl-4 space-y-1 my-2 text-xs sm:text-[13px] text-zinc-800 leading-relaxed" {...props} />
  ),
  ol: ({ node, ...props }: any) => (
    <ol className="list-decimal pl-4 space-y-1 my-2 text-xs sm:text-[13px] text-zinc-800 leading-relaxed" {...props} />
  ),
  li: ({ node, ...props }: any) => (
    <li className="leading-relaxed" {...props} />
  ),
  table: ({ node, ...props }: any) => (
    <div className="overflow-x-auto my-4 rounded-xl border border-zinc-200 shadow-2xs">
      <table className="w-full text-left border-collapse text-xs sm:text-sm" {...props} />
    </div>
  ),
  thead: ({ node, ...props }: any) => (
    <thead className="bg-zinc-50/90 border-b border-zinc-200" {...props} />
  ),
  th: ({ node, ...props }: any) => (
    <th className="px-3.5 py-2.5 font-bold text-zinc-800 border-b border-zinc-200 whitespace-nowrap text-xs" {...props} />
  ),
  td: ({ node, ...props }: any) => (
    <td className="px-3.5 py-2.5 border-b border-zinc-100 text-zinc-700 text-xs" {...props} />
  ),
  tr: ({ node, ...props }: any) => (
    <tr className="hover:bg-zinc-50/50 transition-colors" {...props} />
  ),
  stepbox: ({ node, ...props }: any) => (
    <div className="bg-white border border-zinc-200/80 shadow-2xs rounded-2xl p-4 my-3 font-sans text-zinc-800" {...props} />
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
