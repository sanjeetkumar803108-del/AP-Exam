/**
 * Authentic College Board AP Topic Cheat Sheets & Golden Formulas
 * 
 * Provides verified, bug-free LaTeX/KaTeX formulas and golden rules
 * tailored to each CED topic and unit.
 */

export interface TopicCheatSheet {
  topic: string;
  title: string;
  goldenRule: string;
  formulas: string[];
  keyTraps: string;
}

const DEFAULT_CHEAT_SHEET: TopicCheatSheet = {
  topic: 'AP Exam Topic',
  title: 'Core Concept Mastery',
  goldenRule: 'Read the prompt carefully to identify given quantities and boundary conditions before calculating.',
  formulas: [
    'Always state governing definitions or theorem conditions first.',
    'Eliminate distractors that reverse units, invert signs, or confuse rates with totals.'
  ],
  keyTraps: 'Never assume a theorem holds without verifying its hypotheses (continuity, differentiability, or closed intervals).'
};

// Curated cheat sheets for high-yield topics
const CHEAT_SHEETS_MAP: Record<string, TopicCheatSheet> = {
  // Unit 1: Limits & Continuity
  '1.1': {
    topic: 'Topic 1.1 & 1.2: Limit Intuition',
    title: 'Limits & Rates of Change',
    goldenRule: 'A limit describes behavior as $x$ approaches a value, NOT necessarily the function value $f(c)$.',
    formulas: [
      'Average Rate of Change on $[a, b] = \\frac{f(b) - f(a)}{b - a}$',
      'Instantaneous Rate of Change at $a = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$',
      'Two-Sided Limit Exists $\\iff \\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = L$'
    ],
    keyTraps: 'Do not confuse average velocity (secant slope) with instantaneous velocity (derivative).'
  },
  '1.2': {
    topic: 'Topic 1.1 & 1.2: Limit Intuition',
    title: 'Limits & Rates of Change',
    goldenRule: 'A limit describes behavior as $x$ approaches a value, NOT necessarily the function value $f(c)$.',
    formulas: [
      'Average Rate on $[a, b] = \\frac{f(b) - f(a)}{b - a}$',
      'Two-Sided Limit: $\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = L$'
    ],
    keyTraps: 'The function does not even need to be defined at $x = c$ for the limit to exist!'
  },
  '1.3': {
    topic: 'Topic 1.3: Graphical Limits',
    title: 'Estimating Limits from Graphs',
    goldenRule: 'Check left and right approach paths independently. If paths arrive at different heights, the limit Does Not Exist (DNE).',
    formulas: [
      'Left Limit: $\\lim_{x \\to c^-} f(x)$ (approaching from left)',
      'Right Limit: $\\lim_{x \\to c^+} f(x)$ (approaching from right)',
      'Hole (Removable): Limit exists, but $f(c) \\neq \\lim_{x \\to c} f(x)$'
    ],
    keyTraps: 'A solid dot represents $f(c)$; the limit follows the curve toward the point, ignoring isolated dots.'
  },
  '1.5': {
    topic: 'Topic 1.5 & 1.6: Algebraic Limits',
    title: 'Factoring, Conjugates & Trig Limits',
    goldenRule: 'Direct substitution giving $\\frac{0}{0}$ is indeterminate — factor, multiply by conjugate, or use special trig limits!',
    formulas: [
      'Radical Conjugate: $(\\sqrt{A} - B)(\\sqrt{A} + B) = A - B^2$',
      'Golden Trig Limit 1: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$',
      'Golden Trig Limit 2: $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$'
    ],
    keyTraps: 'Never conclude a limit is undefined from $\\frac{0}{0}$; you must simplify algebraically.'
  },
  '1.7': {
    topic: 'Topic 1.7: Squeeze Theorem',
    title: 'Squeeze (Sandwich) Theorem',
    goldenRule: 'If $g(x) \\le f(x) \\le h(x)$ near $c$ and $\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L$, then $\\lim_{x \\to c} f(x) = L$.',
    formulas: [
      'Bounding Sine/Cosine: $-1 \\le \\sin(\\theta) \\le 1$ and $-1 \\le \\cos(\\theta) \\le 1$',
      'Multiplied Limit: $\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right) = 0$'
    ],
    keyTraps: 'You must state the two inequality bounds AND show that both outer limits are equal before concluding.'
  },
  '1.11': {
    topic: 'Topic 1.11: Continuity at a Point',
    title: 'The 3-Part Continuity Definition',
    goldenRule: 'Continuity requires: 1) $f(c)$ exists, 2) $\\lim_{x \\to c} f(x)$ exists, and 3) $\\lim_{x \\to c} f(x) = f(c)$.',
    formulas: [
      'Condition 1: $f(c)$ is defined',
      'Condition 2: $\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x)$ (limit exists)',
      'Condition 3: $\\lim_{x \\to c} f(x) = f(c)$'
    ],
    keyTraps: 'Having both a limit and a point is not enough; they MUST equal the exact same numerical value.'
  },
  '1.15': {
    topic: 'Topic 1.15: Intermediate Value Theorem',
    title: 'Intermediate Value Theorem (IVT)',
    goldenRule: 'If $f$ is continuous on $[a, b]$, it takes on every intermediate value between $f(a)$ and $f(b)$.',
    formulas: [
      'Hypothesis: $f$ MUST be continuous on the closed interval $[a, b]$',
      'Conclusion: If $k$ is between $f(a)$ and $f(b)$, then $f(c) = k$ for at least one $c \\in (a, b)$',
      'Root Finding: If $f(a)$ and $f(b)$ have opposite signs, $f(c) = 0$ at least once.'
    ],
    keyTraps: 'IVT guarantees FUNCTION values $y$, NEVER derivative values $f\'(c)$ (that is MVT)!'
  },

  // Unit 2: Differentiation
  '2.1': {
    topic: 'Topic 2.1 & 2.2: Derivative Definition',
    title: 'Limit Definition of Derivative',
    goldenRule: 'The derivative $f\'(x)$ represents the exact slope of the tangent line to $f$ at $x$.',
    formulas: [
      'Limit Definition: $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$',
      'Alternative at Point $c$: $f\'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$',
      'Differentiability implies Continuity: If $f$ is differentiable at $c$, it MUST be continuous at $c$.'
    ],
    keyTraps: 'Continuity does NOT imply differentiability! Sharp corners ($|x|$) and vertical tangents are continuous but not differentiable.'
  },
  '2.5': {
    topic: 'Topic 2.5: Power & Basic Rules',
    title: 'Power, Constant & Sum Rules',
    goldenRule: 'Rewrite radicals as fractional exponents and denominators as negative exponents before differentiating.',
    formulas: [
      'Power Rule: $\\frac{d}{dx}[x^n] = n x^{n-1}$',
      'Constant Multiple: $\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f\'(x)$',
      'Rewrite Radical: $\\sqrt[b]{x^a} = x^{a/b}$'
    ],
    keyTraps: 'Do not forget that $\\frac{d}{dx}[\\pi] = 0$ and $\\frac{d}{dx}[e^2] = 0$ because they are constants, not variables!'
  },
  '2.8': {
    topic: 'Topic 2.8: Product & Quotient Rules',
    title: 'Product & Quotient Differentiation',
    goldenRule: 'Product Rule is $(f\' g + f g\')$. Quotient Rule is $\\frac{\\text{Lo } d(\\text{Hi}) - \\text{Hi } d(\\text{Lo})}{\\text{Lo}^2}$.',
    formulas: [
      'Product Rule: $(fg)\' = f\'g + fg\'$',
      'Quotient Rule: $\\left(\\frac{f}{g}\\right)\' = \\frac{f\'g - fg\'}{g^2}$',
      'Trig Derivatives: $\\frac{d}{dx}[\\tan x] = \\sec^2 x$, $\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$'
    ],
    keyTraps: 'Never write $(fg)\' = f\'g\'$; product of derivatives is a fatal AP calculus blunder!'
  },

  // Unit 3: Chain Rule
  '3.1': {
    topic: 'Topic 3.1: The Chain Rule',
    title: 'Composite Function Differentiation',
    goldenRule: 'Differentiate the outside function leaving inside untouched, THEN multiply by derivative of inside: $f\'(g(x)) \\cdot g\'(x)$.',
    formulas: [
      'Chain Rule: $\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)$',
      'Trig Chain: $\\frac{d}{dx}[\\sin(u)] = \\cos(u) \\cdot u\'$',
      'Exponential: $\\frac{d}{dx}[e^u] = e^u \\cdot u\'$'
    ],
    keyTraps: 'Forgetting $g\'(x)$ is the #1 mistake on AP Exam MCQs. Always peel the layers from outside to inside!'
  },
  '3.2': {
    topic: 'Topic 3.2: Implicit Differentiation',
    title: 'Implicit Differentiation & Tangents',
    goldenRule: 'When differentiating any $y$-term with respect to $x$, always attach $\\frac{dy}{dx}$ by the chain rule.',
    formulas: [
      'Derivative of $y^2$: $\\frac{d}{dx}[y^2] = 2y \\frac{dy}{dx}$',
      'Product of $xy$: $\\frac{d}{dx}[xy] = 1 \\cdot y + x \\frac{dy}{dx}$',
      'Horizontal Tangent: Set numerator of $\\frac{dy}{dx} = 0$; Vertical Tangent: Set denominator $= 0$.'
    ],
    keyTraps: 'When product rule involves $xy$, remember $y$ is a function of $x$, so its derivative is $\\frac{dy}{dx}$.'
  },

  // Boss Level / Comprehensive Synthesis
  'boss': {
    topic: 'Apex Unit Mastery Challenge',
    title: 'Official AP Exam Synthesis & Free-Response',
    goldenRule: 'AP Readers reward clear, structured notation. State the theorem hypotheses first, execute algebra cleanly, and provide full units.',
    formulas: [
      'Continuity Check: $f(c)$ defined $\\land \\lim_{x \\to c} f(x) = f(c)$',
      'Tangent Line: $y - y_1 = m(x - x_1)$ where $m = f\'(x_1)$',
      'Full FRQ Points: 1 pt for hypothesis, 1 pt for calculus setup, 1 pt for final justified answer.'
    ],
    keyTraps: 'Do not skip theorem hypotheses! If you apply IVT or MVT without stating continuity, College Board gives 0 points for justification.'
  }
};

/**
 * Retrieves the tailored cheat sheet for any given topic number or title.
 */
export function getTopicCheatSheet(
  topicNumber?: string,
  levelName?: string,
  difficulty?: string
): TopicCheatSheet {
  if (difficulty === 'Boss' || levelName?.toLowerCase().includes('boss')) {
    return CHEAT_SHEETS_MAP['boss'];
  }

  if (topicNumber) {
    const cleanNum = topicNumber.replace(/Topic\s*/i, '').trim();
    // Direct match (e.g. "1.1")
    if (CHEAT_SHEETS_MAP[cleanNum]) {
      return CHEAT_SHEETS_MAP[cleanNum];
    }
    // Prefix match (e.g. "1.1 & 1.2" -> "1.1")
    const firstNum = cleanNum.split(/[\s,&-]+/)[0];
    if (CHEAT_SHEETS_MAP[firstNum]) {
      return CHEAT_SHEETS_MAP[firstNum];
    }
  }

  // Keyword fallback
  const lowerName = (levelName || '').toLowerCase();
  if (lowerName.includes('limit')) return CHEAT_SHEETS_MAP['1.1'];
  if (lowerName.includes('graph')) return CHEAT_SHEETS_MAP['1.3'];
  if (lowerName.includes('algebra') || lowerName.includes('conjugate')) return CHEAT_SHEETS_MAP['1.5'];
  if (lowerName.includes('continuity')) return CHEAT_SHEETS_MAP['1.11'];
  if (lowerName.includes('intermediate') || lowerName.includes('ivt')) return CHEAT_SHEETS_MAP['1.15'];
  if (lowerName.includes('power')) return CHEAT_SHEETS_MAP['2.5'];
  if (lowerName.includes('product') || lowerName.includes('quotient')) return CHEAT_SHEETS_MAP['2.8'];
  if (lowerName.includes('chain')) return CHEAT_SHEETS_MAP['3.1'];
  if (lowerName.includes('implicit')) return CHEAT_SHEETS_MAP['3.2'];

  return {
    ...DEFAULT_CHEAT_SHEET,
    topic: topicNumber || 'AP Exam Topic',
    title: levelName || 'Core Topic Principles'
  };
}
