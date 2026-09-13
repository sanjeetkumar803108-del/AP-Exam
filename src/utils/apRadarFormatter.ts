/**
 * AP Radar AI Answer and Explanation Formatter
 * 
 * Ensures:
 * 1. Literal escaped newlines (\\n, \\r\\n) are converted to clean double newlines.
 * 2. Step 1, Step 2, Step 3, etc. are properly highlighted with bold titles and generous spacing.
 * 3. Part (a), Part (b), etc. are separated with clean line breaks.
 * 4. "Earns X point(s) for..." scoring criteria are broken into bullet points.
 * 5. Dense monolithic paragraphs (> 120 chars) are intelligently subdivided into bullet points.
 */

export function formatAiAnswerText(input: any): string {
  if (!input) return '';
  let str = String(input).trim();

  // 1. Unescape literal escaped newlines e.g. \n or \r\n
  // Protect LaTeX commands starting with \n (e.g. \neq, \nabla, \notin, \natural, \nearrow, \nwarrow)
  str = str.replace(/\\r\\n/g, '\n\n');
  str = str.replace(/\\n(?!(?:eq|abla|otin|atural|earrow|warrow)\b)/g, '\n\n');
  str = str.replace(/\\t/g, ' ');

  // 2. Format Step headers: Step 1 [Concept]: or Step 1: or Step 1 -
  // Ensure double newlines before and after, with bold formatting
  str = str.replace(/(?:^|\n|\s*)\b(Step\s*\d+(?:\s*\[[^\]]+\])?(?:\s*[:\-])?)\s*/gi, '\n\n**$1**\n\n');

  // 3. Format Part headers: Part A:, Part (a):, Part 1: (strictly require \bPart\b to avoid words like "particle")
  str = str.replace(/(?:^|\n|\s*)\bPart\b\s*(\([A-Za-z0-9]+\)|[A-Da-d0-9]+)(?:\s*\[[^\]]+\])?(?:\s*[:\-])?\s*/gi, '\n\n**Part $1:**\n\n');

  // 4. Split "Earns X point(s) for..." into clean bullet points
  str = str.replace(/(?:^|\.\s+|\n+)(Earns?\s+\d+\s+points?\s+(?:for|if|to|by)\b)/gi, '\n\n- **$1**');

  // 5. Intelligent long paragraph breakdown into bullet points:
  // If a block of text has multiple sentences and is longer than ~120 chars with no lists,
  // split each sentence into a clean bullet point for maximum legibility.
  const paragraphs = str.split(/\n{2,}/);
  const formattedParagraphs = paragraphs.map(p => {
    const trimmed = p.trim();
    if (!trimmed) return '';

    // Skip if it's already a markdown header, blockquote, or list
    if (trimmed.startsWith('#') || trimmed.startsWith('- ') || trimmed.startsWith('* ') || /^\d+\.\s/.test(trimmed)) {
      return trimmed;
    }

    // Skip standalone bold Step or Part headers
    if (/^\*\*(?:Step|Part)[\s\S]*\*\*$/.test(trimmed)) {
      return trimmed;
    }

    // Skip code blocks or markdown tables
    if (trimmed.startsWith('```') || trimmed.startsWith('|')) {
      return trimmed;
    }

    // If it's a long paragraph (> 120 chars) with multiple complete sentences
    if (trimmed.length > 120) {
      const sentences = splitIntoSentences(trimmed);
      if (sentences.length >= 2) {
        return sentences.map(s => `- ${s}`).join('\n\n');
      }
    }

    return trimmed;
  });

  return formattedParagraphs.join('\n\n').replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * Safely splits a paragraph into complete sentences while protecting math blocks
 * ($...$, $$...$$) and abbreviations (e.g., i.e., vs., Fig., t = 2.0).
 */
function splitIntoSentences(text: string): string[] {
  // Mask math tokens first
  const mathTokens: string[] = [];
  let masked = text.replace(/(\$\$[\s\S]*?\$\$|\$(?:\\.|[^\$\n\\])+\$)/g, (m) => {
    const idx = mathTokens.length;
    mathTokens.push(m);
    return `__MATH_TOK_${idx}__`;
  });

  // Protect common abbreviations and decimals
  masked = masked.replace(/\b(e\.g\.|i\.e\.|vs\.|fig\.|dr\.|mr\.|ms\.|prof\.|approx\.)/gi, (m) => m.replace(/\./g, '__DOT__'));
  // Protect decimal numbers like 2.0 or 3.14
  masked = masked.replace(/(\d+)\.(\d+)/g, '$1__DOT__$2');

  // Split on sentence boundary: period, exclamation, or question mark followed by space and capital letter or number
  const rawSentences = masked.split(/(?<=[.!?])\s+(?=[A-Z0-9_])/);

  return rawSentences.map(s => {
    let unmasked = s.replace(/__DOT__/g, '.');
    unmasked = unmasked.replace(/__MATH_TOK_(\d+)__/g, (_, i) => mathTokens[Number(i)] || '');
    return unmasked.trim();
  }).filter(Boolean);
}
