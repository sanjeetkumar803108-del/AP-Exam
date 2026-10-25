import { APNoteFormula, APNoteTheorem, APNoteSection, APNoteWorkedExample, APNoteDiagram, APUnitNote } from './types';
export type { APNoteFormula, APNoteTheorem, APNoteSection, APNoteWorkedExample, APNoteDiagram, APUnitNote };

export const AP_CALCULUS_BC_NOTES: APUnitNote[] = [
  {
    "unitId": "u1",
    "unitNumber": 1,
    "title": "Limits and Continuity",
    "examWeight": "10%–12% of AP Exam",
    "bigIdea": "Limits describe the local behavior of functions near a point rather than at the point itself, establishing the analytical foundation for continuity, derivatives, and definite integrals.",
    "keyTheorems": [
      {
        "name": "Intermediate Value Theorem (IVT)",
        "conditions": "f(x) must be continuous on the closed interval [a, b].",
        "conclusion": "For any value d strictly between f(a) and f(b), there exists at least one number c in the open interval (a, b) such that f(c) = d.",
        "apTip": "On FRQs, you MUST explicitly write \"Since f is continuous on [a, b]...\" before invoking IVT. Missing this hypothesis forfeits the justification point!"
      },
      {
        "name": "Squeeze (Sandwich) Theorem",
        "conditions": "g(x) <= f(x) <= h(x) for all x in an open interval containing c (except possibly at c), and lim_{x->c} g(x) = lim_{x->c} h(x) = L.",
        "conclusion": "lim_{x->c} f(x) = L.",
        "apTip": "Commonly tested with bounded oscillating trigonometric factors, such as lim_{x->0} x^2 * sin(1/x) = 0 because -x^2 <= x^2*sin(1/x) <= x^2."
      },
      {
        "name": "Extreme Value Theorem (EVT - Continuity Foundation)",
        "conditions": "f(x) is continuous on a closed interval [a, b].",
        "conclusion": "f(x) must attain an absolute maximum value and an absolute minimum value at least once on [a, b].",
        "apTip": "Both hypotheses are non-negotiable: if the interval is open (a, b) or f has a discontinuity, EVT does not guarantee extrema."
      }
    ],
    "formulas": [
      {
        "name": "Three-Part Continuity Definition at a Point",
        "latex": "\\lim_{x \\to c} f(x) = f(c)",
        "explanation": "Requires 3 independent checks: (1) f(c) is defined, (2) lim_{x->c} f(x) exists (left-hand limit = right-hand limit), and (3) lim_{x->c} f(x) equals f(c)."
      },
      {
        "name": "Fundamental Trigonometric Limits",
        "latex": "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\quad \\text{and} \\quad \\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0",
        "explanation": "Angles must be in radians. Generalized form: lim_{x->0} sin(kx)/x = k and lim_{x->0} sin(kx)/sin(mx) = k/m."
      },
      {
        "name": "Horizontal Asymptotes (End Behavior at Infinity)",
        "latex": "\\lim_{x \\to \\infty} f(x) = L \\quad \\text{or} \\quad \\lim_{x \\to -\\infty} f(x) = L \\implies y = L",
        "explanation": "A rational or algebraic function can have at most TWO horizontal asymptotes (one for +infinity, one for -infinity)."
      },
      {
        "name": "Vertical Asymptotes (Infinite Discontinuities)",
        "latex": "\\lim_{x \\to c^+} f(x) = \\pm\\infty \\quad \\text{or} \\quad \\lim_{x \\to c^-} f(x) = \\pm\\infty \\implies x = c",
        "explanation": "Occurs at non-removable zeros of the denominator where the numerator does not cancel to zero."
      }
    ],
    "sections": [
      {
        "heading": "1. Defining Limits & Limit Notation (CED 1.1–1.2)",
        "content": "A limit $\\lim_{x \\to c} f(x) = L$ means that as $x$ gets arbitrarily close to $c$ (from both sides), $f(x)$ approaches the value $L$.\n- **Crucial Distinction:** The limit describes what happens **near** $x = c$, NOT what happens **at** $x = c$. $f(c)$ does not even need to exist for $\\lim_{x \\to c} f(x)$ to exist!\n- **One-Sided Limits:**\n  - Left-hand limit: $\\lim_{x \\to c^-} f(x)$ (approaching from $x < c$)\n  - Right-hand limit: $\\lim_{x \\to c^+} f(x)$ (approaching from $x > c$)\n- **Two-Sided Limit Existence Theorem:**\n  $$\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = L$$\n- If left-hand limit $\\neq$ right-hand limit, the two-sided limit **Does Not Exist (DNE)**."
      },
      {
        "heading": "2. Algebraic Limit Evaluation Strategies (CED 1.5–1.7)",
        "content": "Always attempt direct substitution first. If substitution yields a real number $L$, that is your limit. If substitution yields $\\frac{k}{0}$ (where $k \\neq 0$), the limit is $\\pm\\infty$ (Vertical Asymptote) or DNE.\n\nIf substitution yields the indeterminate form $\\frac{0}{0}$, apply these four algebraic tools:\n\n| Strategy | When to Use | Typical AP Technique |\n| :--- | :--- | :--- |\n| **Factoring & Canceling** | Rational polynomial expressions | Factor numerator and denominator; cancel $(x - c)$ hole. |\n| **Rationalizing Conjugates** | Radicals in numerator/denominator | Multiply top and bottom by $(\\sqrt{A} + B)$ to eliminate difference of squares. |\n| **Complex Fractions** | Fractions within fractions | Multiply all terms by the common denominator of internal fractions. |\n| **Trigonometric Identities** | Expressions with $\\sin, \\cos, \\tan$ | Use $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ or rewrite $\\tan x = \\frac{\\sin x}{\\cos x}$. |\n\n*Important AP Communication Rule:* NEVER write \"$= \\frac{0}{0}$\" as an equation! In AP grading, $\\frac{0}{0}$ is undefined. State: *\"Because $\\lim_{x\\to c} f(x) = 0$ and $\\lim_{x\\to c} g(x) = 0$, the limit produces indeterminate form $0/0$.\"*"
      },
      {
        "heading": "3. Limits at Infinity & Horizontal Asymptotes (CED 1.14–1.15)",
        "content": "To evaluate $\\lim_{x \\to \\pm\\infty} \\frac{P(x)}{Q(x)}$ for rational functions, compare the degrees of numerator ($n$) and denominator ($d$):\n\n1. **Bottom-Heavy ($n < d$):** $\\lim_{x \\to \\pm\\infty} f(x) = 0 \\implies$ Horizontal Asymptote at $y = 0$.\n2. **Equal Degrees ($n = d$):** $\\lim_{x \\to \\pm\\infty} f(x) = \\frac{a_n}{b_d}$ (ratio of leading coefficients) $\\implies$ Horizontal Asymptote at $y = \\frac{a_n}{b_d}$.\n3. **Top-Heavy ($n > d$):** $\\lim_{x \\to \\pm\\infty} f(x) = \\pm\\infty \\implies$ No Horizontal Asymptote (Slant or polynomial growth).\n\n*The Radical Trap on Negative Infinity:*\nRemember that $\\sqrt{x^2} = |x|$. When $x \\to -\\infty$, $x$ is negative, so $\\sqrt{x^2} = -x$!\n$$\\lim_{x \\to -\\infty} \\frac{4x - 1}{\\sqrt{9x^2 + 2}} = \\lim_{x \\to -\\infty} \\frac{4x}{\\sqrt{x^2} \\cdot \\sqrt{9 + \\frac{2}{x^2}}} = \\lim_{x \\to -\\infty} \\frac{4x}{-x \\cdot \\sqrt{9}} = -\\frac{4}{3}$$\nThus, this function has TWO horizontal asymptotes: $y = \\frac{4}{3}$ as $x \\to \\infty$, and $y = -\\frac{4}{3}$ as $x \\to -\\infty$."
      },
      {
        "heading": "4. Three-Part Definition of Continuity & Discontinuities (CED 1.10–1.13)",
        "content": "A function $f(x)$ is continuous at $x = c$ if and only if:\n1. $f(c)$ is defined ($c$ is in the domain of $f$).\n2. $\\lim_{x \\to c} f(x)$ exists ($\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = L$).\n3. $\\lim_{x \\to c} f(x) = f(c)$ (the limit value equals the function value).\n\n**Classification of Discontinuities:**\n- **Removable (Hole):** $\\lim_{x \\to c} f(x)$ exists, but $f(c)$ is undefined or $f(c) \\neq \\lim_{x \\to c} f(x)$.\n- **Jump Discontinuity:** $\\lim_{x \\to c^-} f(x) \\neq \\lim_{x \\to c^+} f(x)$ (both one-sided limits are finite numbers, but unequal). Common in piecewise functions.\n- **Infinite Discontinuity:** One or both one-sided limits approach $\\pm\\infty$ ($x = c$ is a vertical asymptote).\n- **Essential / Oscillating:** Function oscillates infinitely fast as $x \\to c$ (e.g., $f(x) = \\sin(1/x)$ at $x = 0$)."
      },
      {
        "heading": "5. Intermediate Value Theorem (IVT) Protocol (CED 1.16)",
        "content": "The Intermediate Value Theorem states that if $f$ is continuous on $[a, b]$, it must take on every value between $f(a)$ and $f(b)$.\n\n**The Official 3-Step FRQ Answer Template:**\n1. **State Continuity:** *\"Since $f(x)$ is continuous on the closed interval $[a, b]$...\"*\n2. **Evaluate Endpoints & State Inequality:** Calculate $f(a)$ and $f(b)$, then show that target value $d$ lies between them: *\"Because $f(a) < d < f(b)$ (or $f(b) < d < f(a)$)...\"*\n3. **Invoke IVT & Conclude:** *\"...by the Intermediate Value Theorem (IVT), there exists at least one value $c$ in $(a, b)$ such that $f(c) = d$.\"*\n\n*Roots Corollary:* If $f(a)$ and $f(b)$ have opposite signs ($f(a) \\cdot f(b) < 0$), then $f(x)$ has at least one root $c \\in (a, b)$ where $f(c) = 0$."
      }
    ],
    "workedExamples": [
      {
        "title": "Evaluating Limits with Conjugate Radicals",
        "topicRef": "CED 1.6 Algebraic Manipulation",
        "question": "Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{x + 9} - 3}{x}$.",
        "solutionSteps": [
          "Step 1: Substitute x = 0: (\\sqrt{0+9} - 3)/0 = (3 - 3)/0 = 0/0 (indeterminate form).",
          "Step 2: Multiply numerator and denominator by conjugate (\\sqrt{x + 9} + 3):",
          "\\frac{(\\sqrt{x+9} - 3)(\\sqrt{x+9} + 3)}{x(\\sqrt{x+9} + 3)} = \\frac{(x + 9) - 9}{x(\\sqrt{x+9} + 3)} = \\frac{x}{x(\\sqrt{x+9} + 3)}",
          "Step 3: Cancel common factor of x for x != 0:",
          "\\lim_{x \\to 0} \\frac{1}{\\sqrt{x + 9} + 3}",
          "Step 4: Direct substitute x = 0: \\frac{1}{\\sqrt{9} + 3} = \\frac{1}{3 + 3} = \\frac{1}{6}."
        ],
        "finalAnswer": "1/6",
        "apScoringTip": "Never leave intermediate equal signs pointing to 0/0. Show the factoring and algebraic cancellation explicitly."
      },
      {
        "title": "Determining Values of Constants for Piecewise Continuity",
        "topicRef": "CED 1.11 Defining Continuity at a Point",
        "question": "Find constants a and b such that f(x) is continuous everywhere: f(x) = { 2x + a for x < 1; 5 for x = 1; b*x^2 - 3 for x > 1 }.",
        "solutionSteps": [
          "Step 1: For f to be continuous at x = 1, lim_{x->1^-} f(x) = f(1) and lim_{x->1^+} f(x) = f(1).",
          "Step 2: Left-hand limit: lim_{x->1^-} (2x + a) = 2(1) + a = 2 + a.",
          "Step 3: Equate left limit to f(1) = 5: 2 + a = 5 ==> a = 3.",
          "Step 4: Right-hand limit: lim_{x->1^+} (b*x^2 - 3) = b(1)^2 - 3 = b - 3.",
          "Step 5: Equate right limit to f(1) = 5: b - 3 = 5 ==> b = 8."
        ],
        "finalAnswer": "a = 3, b = 8",
        "apScoringTip": "Show both one-sided limits separately before setting them equal to f(1). AP readers look for the explicit limit statements."
      }
    ],
    "diagrams": [
      {
        "id": "hole_jump_asymptote_comparison",
        "title": "The Three Types of Discontinuities",
        "subtitle": "Removable (Hole) vs Jump vs Infinite (Vertical Asymptote)",
        "type": "discontinuity_types",
        "description": "Hole: two-sided limit exists but f(c) != L. Jump: one-sided limits are finite but unequal. Vertical asymptote: values shoot to +/- infinity.",
        "takeaway": "Only removable discontinuities can be repaired by defining or redefining f(c)."
      }
    ],
    "commonTraps": [
      "Writing \"= 0/0\" in equality chains on FRQs. 0/0 is undefined. State: \"Since lim numerator = 0 and lim denominator = 0, applying algebraic simplification...\"",
      "Assuming continuity implies differentiability. Sharp turns like f(x) = |x| at x = 0 are continuous but NOT differentiable.",
      "Forgetting the negative sign when evaluating limits at -infinity involving radicals: sqrt(x^2) = -x for x < 0.",
      "Using IVT without verifying and stating that f is continuous on the closed interval [a, b]."
    ],
    "cramSheet": [
      "Limit exists <=> Left-hand limit = Right-hand limit.",
      "Continuous at c <=> f(c) defined, lim exists, and lim f(x) = f(c).",
      "Horizontal Asymptote: lim_{x->+/-inf} f(x) = L. Bottom heavy = 0, Equal degrees = ratio of leading coefficients.",
      "IVT guarantees a y-value (output), NEVER an x-value (input).",
      "lim_{x->0} sin(x)/x = 1, lim_{x->0} (1 - cos x)/x = 0."
    ]
  },
  {
    "unitId": "u2",
    "unitNumber": 2,
    "title": "Differentiation: Definition and Fundamental Properties",
    "examWeight": "10%–12% of AP Exam",
    "bigIdea": "The derivative quantifies the instantaneous rate of change of a function, defined as the limit of secant slopes. Differentiability requires local smoothness and strict continuity.",
    "keyTheorems": [
      {
        "name": "Differentiability Implies Continuity Theorem",
        "conditions": "f(x) is differentiable at x = c (i.e. f'(c) exists as a finite real number).",
        "conclusion": "f(x) is guaranteed to be continuous at x = c.",
        "apTip": "The CONVERSE IS FALSE! Continuity does NOT guarantee differentiability. Functions with sharp corners (f(x) = |x|), cusps (f(x) = x^(2/3)), or vertical tangents (f(x) = x^(1/3)) are continuous yet non-differentiable at x = 0."
      },
      {
        "name": "Linearity of the Derivative Operator",
        "conditions": "Functions f and g are differentiable; c is any constant.",
        "conclusion": "d/dx[c*f(x)] = c*f'(x) and d/dx[f(x) +/- g(x)] = f'(x) +/- g'(x).",
        "apTip": "Allows splitting complicated polynomials and combinations into term-by-term derivatives."
      }
    ],
    "formulas": [
      {
        "name": "Limit Definition of Derivative (h-form)",
        "latex": "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
        "explanation": "Represents the limiting slope of the secant line between (x, f(x)) and (x+h, f(x+h)) as the horizontal distance h approaches 0."
      },
      {
        "name": "Alternative Limit Definition at a Specific Point x = a",
        "latex": "f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}",
        "explanation": "Heavily tested on AP MCQs as \"derivatives in disguise\". If a limit matches this structure, avoid algebraic expansion and simply evaluate f'(a)."
      },
      {
        "name": "Power Rule",
        "latex": "\\frac{d}{dx}[x^n] = n x^{n-1} \\quad \\text{for any real } n",
        "explanation": "Bring down exponent, decrease power by 1. Rewrite radicals as x^(p/q) and denominators as x^(-n) before applying!"
      },
      {
        "name": "Product Rule",
        "latex": "\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)",
        "explanation": "Derivative of first times second, plus first times derivative of second. NEVER multiply derivatives: (f*g)' != f'*g'!"
      },
      {
        "name": "Quotient Rule",
        "latex": "\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}",
        "explanation": "Mnemonic: \"Low d-High minus High d-Low over Low squared\". The subtraction order in the numerator is strictly non-commutative."
      },
      {
        "name": "Derivatives of Exponential and Logarithmic Functions",
        "latex": "\\frac{d}{dx}[e^x] = e^x, \\quad \\frac{d}{dx}[a^x] = a^x \\ln a, \\quad \\frac{d}{dx}[\\ln x] = \\frac{1}{x}, \\quad \\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}",
        "explanation": "Base e is natural; other bases require scaling by ln(a)."
      },
      {
        "name": "Derivatives of All 6 Trigonometric Functions",
        "latex": "\\begin{aligned} \\frac{d}{dx}[\\sin x] &= \\cos x & \\frac{d}{dx}[\\cos x] &= -\\sin x \\\\ \\frac{d}{dx}[\\tan x] &= \\sec^2 x & \\frac{d}{dx}[\\cot x] &= -\\csc^2 x \\\\ \\frac{d}{dx}[\\sec x] &= \\sec x \\tan x & \\frac{d}{dx}[\\csc x] &= -\\csc x \\cot x \\end{aligned}",
        "explanation": "All \"co-\" functions (cosine, cotangent, cosecant) produce a NEGATIVE sign in their derivative!"
      }
    ],
    "sections": [
      {
        "heading": "1. Average vs. Instantaneous Rate of Change (CED 2.1–2.2)",
        "content": "Understanding the transition from algebra to calculus:\n- **Average Rate of Change (AROC):** Measures slope of the secant line between two distinct points $(a, f(a))$ and $(b, f(b))$:\n  $$\\text{AROC} = \\frac{f(b) - f(a)}{b - a}$$\n- **Instantaneous Rate of Change (IROC):** The slope of the tangent line at a single instant $x = a$, defined as the limit of secant slopes:\n  $$\\text{IROC} = f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h} = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$\n- On AP Exam word problems, when asked for \"rate of change\", it **always means instantaneous rate** unless the word \"average\" is explicitly stated."
      },
      {
        "heading": "2. Recognizing \"Derivatives in Disguise\" (CED 2.3)",
        "content": "The College Board frequently tests whether students recognize standard limit structures as derivatives:\n\n| Disguised Limit Problem | Underlying Function $f(x)$ & Point $a$ | Derivative Evaluation | Correct Answer |\n| :--- | :--- | :--- | :--- |\n| $\\lim_{h \\to 0} \\frac{\\cos(\\pi + h) - \\cos(\\pi)}{h}$ | $f(x) = \\cos x$ at $a = \\pi$ | $f'(x) = -\\sin x \\implies -\\sin(\\pi)$ | **$0$** |\n| $\\lim_{x \\to 2} \\frac{x^{10} - 1024}{x - 2}$ | $f(x) = x^{10}$ at $a = 2$ | $f'(x) = 10x^9 \\implies 10(2)^9$ | **$5120$** |\n| $\\lim_{h \\to 0} \\frac{e^{3+h} - e^3}{h}$ | $f(x) = e^x$ at $a = 3$ | $f'(x) = e^x \\implies e^3$ | **$e^3$** |\n| $\\lim_{x \\to \\pi/4} \\frac{\\tan x - 1}{x - \\pi/4}$ | $f(x) = \\tan x$ at $a = \\pi/4$ | $f'(x) = \\sec^2 x \\implies \\sec^2(\\pi/4)$ | **$(\\sqrt{2})^2 = 2$** |\n\n*Exam Hack:* Never expand high powers like $(x+h)^{10}$ or use L'Hôpital's Rule unnecessarily; identify the parent function and evaluate its derivative directly!"
      },
      {
        "heading": "3. Four Failures of Differentiability (CED 2.4)",
        "content": "For $f'(c)$ to exist, the curve must be continuous at $c$ and have the SAME finite tangent slope from both left and right. Differentiation fails in four distinct scenarios:\n\n1. **Corner (Sharp Turn):** Left and right limits of the difference quotient exist but are unequal. Example: $f(x) = |x|$ at $x = 0$ (left slope is $-1$, right slope is $+1$).\n2. **Cusp (Sharp Point):** Secant slopes approach opposite infinities. Example: $f(x) = x^{2/3}$ at $x = 0$ (left slope $\\to -\\infty$, right slope $\\to +\\infty$).\n3. **Vertical Tangent Line:** Tangent line is perpendicular to the $x$-axis, so slope is infinite. Example: $f(x) = x^{1/3}$ at $x = 0$ (both slopes $\\to +\\infty$).\n4. **Any Discontinuity:** If $f$ is not continuous at $c$ (hole, jump, or asymptote), $f'(c)$ automatically DOES NOT EXIST."
      },
      {
        "heading": "4. Estimating Derivatives from Discrete Tabular Data (CED 2.3)",
        "content": "On AP Free Response Question 1 or 2, you are almost always given a data table and asked to estimate $f'(c)$ for a point $c$ that lies between two recorded inputs $t_1 < c < t_2$.\n\n**The Symmetric Secant Rule:**\n$$f'(c) \\approx \\frac{f(t_2) - f(t_1)}{t_2 - t_1}$$\n**Essential Rules to Earn Full AP Credit:**\n1. Choose the two data points that **immediately bracket** the target value $c$. (Do NOT use the first and last table entries!).\n2. Show the difference quotient: $\\frac{f(t_2) - f(t_1)}{t_2 - t_1}$ with the exact numbers from the table.\n3. Attach authentic units of measure: $\\frac{\\text{units of } f}{\\text{units of } t}$. (e.g., if $H(t)$ is temperature in $^\\circ\\text{F}$ and $t$ is minutes, $H'(5)$ has units $^\\circ\\text{F/min}$)."
      },
      {
        "heading": "5. Tangent Line Equations & Local Approximations (CED 2.1–2.2)",
        "content": "To write the tangent line to $y = f(x)$ at $x = a$:\n1. Find the point of tangency: $(a, f(a))$.\n2. Find the slope of tangency: $m = f'(a)$.\n3. Write the equation in **Point-Slope Form**:\n   $$y - f(a) = f'(a)(x - a)$$\n\n*AP Chief Reader Pro-Tip:* Never waste time converting to slope-intercept form ($y = mx + b$) on free response questions. Point-slope form earns 100% full credit and eliminates careless algebraic arithmetic slips!"
      },
      {
        "heading": "6. Limit Definitions of Derivative Equivalence & Non-Differentiability Proofs (CED 2.1-2.4)",
        "content": "Rigorous analysis of the two equivalent limit definitions of the derivative:\n\n* **Definition 1 (Derivative as a Function)**:\n  $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$\n* **Definition 2 (Derivative at a Specific Point $x = a$)**:\n  $$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$\n* **Differentiability Implies Continuity Theorem**:\n  * If a function $f$ is differentiable at $x = c$, then $f$ MUST be continuous at $x = c$.\n  * **Proof**: $\\lim_{x \\to c} [f(x) - f(c)] = \\lim_{x \\to c} \\left[\\frac{f(x)-f(c)}{x-c} \\cdot (x-c)\\right] = f'(c) \\cdot 0 = 0 \\implies \\lim_{x \\to c} f(x) = f(c)$.\n  * **The Converse is FALSE**: Continuity does NOT imply differentiability!\n* **The Four Geometric Modes of Non-Differentiability**:\n  1. **Corner**: Left-hand derivative and right-hand derivative exist but are unequal finite numbers (e.g., $f(x) = |x|$ at $x=0$, where $f'_-(0) = -1$ and $f'_+(0) = +1$).\n  2. **Cusp**: Left-hand and right-hand derivatives approach opposite infinities (e.g., $f(x) = x^{2/3}$ at $x=0$, where slopes blow up to $-\\infty$ and $+\\infty$).\n  3. **Vertical Tangent**: Secant slopes approach the same infinity: $\\lim_{x \\to a} |f'(x)| = \\infty$ (e.g., $f(x) = x^{1/3}$ at $x=0$).\n  4. **Discontinuity**: Jump, removable hole, or infinite asymptote (continuity is a strict prerequisite for differentiability)."
      },
      {
        "heading": "7. Transcendental Differentiation & Logarithmic Differentiation Technique (CED 2.7-2.9)",
        "content": "Derivatives of exponential, logarithmic, and variable-base functions:\n\n* **The Special Trigonometric Limits**:\n  $$\\lim_{\\theta \\to 0} \\frac{\\sin\\theta}{\\theta} = 1 \\quad \\text{and} \\quad \\lim_{\\theta \\to 0} \\frac{1 - \\cos\\theta}{\\theta} = 0$$\n* **General Exponential & Logarithmic Rules**:\n  * $\\frac{d}{dx}[a^x] = a^x \\ln a$ (for $a > 0, a \\neq 1$).\n  * $\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$.\n* **The Logarithmic Differentiation Technique (Variable Base & Variable Exponent)**:\n  * When differentiating expressions of the form $y = [g(x)]^{h(x)}$ (e.g., $y = x^{\\sin x}$), neither the Power Rule nor the Exponential Rule applies!\n  * **Step-by-Step Procedure**:\n    1. Take natural logarithm of both sides: $\\ln y = \\ln[g(x)^{h(x)}] = h(x) \\cdot \\ln[g(x)]$.\n    2. Differentiate implicitly with respect to $x$: $\\frac{1}{y} \\frac{dy}{dx} = h'(x)\\ln[g(x)] + h(x) \\frac{g'(x)}{g(x)}$.\n    3. Multiply through by $y$: $\\frac{dy}{dx} = y \\left[h'(x)\\ln(g(x)) + \\frac{h(x)g'(x)}{g(x)}\\right]$.\n    4. Substitute original function $y$: $\\frac{dy}{dx} = [g(x)]^{h(x)} \\left[h'(x)\\ln(g(x)) + \\frac{h(x)g'(x)}{g(x)}\\right]$."
      }
    ],
    "workedExamples": [
      {
        "title": "Estimating Instantaneous Rate of Change from a Table with Units",
        "topicRef": "CED 2.3 Estimating Derivatives",
        "question": "A hot metal rod cools in a lab. Temperature $T(t)$ in $^\\circ\\text{C}$ is recorded over time $t$ in minutes: $T(0) = 180, T(2) = 142, T(5) = 100, T(9) = 65$. Estimate $T'(3.5)$ and interpret its meaning in context with correct units.",
        "solutionSteps": [
          "Step 1: Identify the two points that immediately bracket t = 3.5: t_1 = 2 and t_2 = 5.",
          "Step 2: Set up the average rate of change secant formula: T'(3.5) \\approx \\frac{T(5) - T(2)}{5 - 2}.",
          "Step 3: Substitute values: \\frac{100 - 142}{5 - 2} = \\frac{-42}{3} = -14 ^\\circ\\text{C/min}.",
          "Step 4: Contextual interpretation: At time t = 3.5 minutes, the temperature of the rod is decreasing at an approximate rate of 14 ^\\circ\\text{C per minute}."
        ],
        "finalAnswer": "T'(3.5) \\approx -14 ^\\circ\\text{C/min}",
        "apScoringTip": "When using the word \"decreasing\", omit the negative sign in the verbal sentence (\"decreasing at 14 ^\\circC/min\"). If you write \"decreasing at -14\", you create a double negative which AP readers penalize."
      },
      {
        "title": "Applying Quotient and Product Rules with Trigonometric Functions",
        "topicRef": "CED 2.8–2.10",
        "question": "Find $\\frac{dy}{dx}$ for $y = \\frac{x^2 \\sin x}{e^x + 1}$.",
        "solutionSteps": [
          "Step 1: Identify structure: Overall quotient u/v where u = x^2 * sin(x) and v = e^x + 1.",
          "Step 2: Differentiate numerator u using product rule: u' = (2x)(sin x) + (x^2)(cos x).",
          "Step 3: Differentiate denominator v: v' = e^x.",
          "Step 4: Apply Quotient Rule: dy/dx = [u' * v - u * v'] / [v^2].",
          "Step 5: Substitute: \\frac{[(2x \\sin x + x^2 \\cos x)(e^x + 1)] - [(x^2 \\sin x)(e^x)]}{(e^x + 1)^2}."
        ],
        "finalAnswer": "\\frac{(2x \\sin x + x^2 \\cos x)(e^x + 1) - x^2 e^x \\sin x}{(e^x + 1)^2}",
        "apScoringTip": "On AP Free Response, do NOT waste time multiplying out or simplifying algebraic numerators unless specifically instructed to solve for zero. Unsimplified correct derivatives earn full points."
      }
    ],
    "diagrams": [
      {
        "id": "tangent_secant_limit",
        "title": "Secant Lines Collapsing into the Tangent Line",
        "subtitle": "Geometric Limit Definition as h -> 0",
        "type": "tangent_limit",
        "description": "As point Q(x+h, f(x+h)) slides along the curve toward fixed point P(x, f(x)), secant line slopes approach the instantaneous tangent line slope.",
        "takeaway": "Derivative is the exact instantaneous rate of change and the slope of the tangent line."
      }
    ],
    "commonTraps": [
      "Claiming continuity implies differentiability. |x| at x = 0 is continuous but not differentiable (sharp corner).",
      "Quotient Rule sign reversal: Writing (High dLow - Low dHigh). The numerator is strictly (Low dHigh - High dLow).",
      "Forgetting the negative sign on \"co-\" trig derivatives: d/dx[cos x] = -sin x, d/dx[cot x] = -csc^2 x, d/dx[csc x] = -csc x cot x.",
      "Dropping units in tabular rate estimations. Always write (units of numerator) / (units of denominator)."
    ],
    "cramSheet": [
      "Differentiable => Continuous. Continuous does NOT mean differentiable.",
      "Product Rule: (uv)' = u'v + uv'. Quotient Rule: (u/v)' = (u'v - uv') / v^2.",
      "Trig: sin' = cos, cos' = -sin, tan' = sec^2, sec' = sec*tan, cot' = -csc^2, csc' = -csc*cot.",
      "Exponentials/Logs: d/dx[e^x] = e^x, d/dx[a^x] = a^x ln(a), d/dx[ln x] = 1/x.",
      "Point-slope tangent line: y - y_1 = m(x - x_1)."
    ]
  },
  {
    "unitId": "u3",
    "unitNumber": 3,
    "title": "Differentiation: Composite, Implicit, and Inverse Functions",
    "examWeight": "9%–13% of AP Exam",
    "bigIdea": "The Chain Rule extends differentiation to composite functions, enabling differentiation of implicit equations, geometric relations, and inverse functions without solving explicitly for y.",
    "keyTheorems": [
      {
        "name": "The Chain Rule",
        "conditions": "g is differentiable at x and f is differentiable at g(x).",
        "conclusion": "The composite function F(x) = f(g(x)) is differentiable at x, with derivative F'(x) = f'(g(x)) * g'(x). In Leibniz notation: dy/dx = (dy/du) * (du/dx).",
        "apTip": "Work from the outside in! Differentiate the outer function leaving the inner untouched, then multiply by the derivative of the inner."
      },
      {
        "name": "Derivative of an Inverse Function Theorem",
        "conditions": "f is differentiable and strictly monotonic (one-to-one) on an interval containing a, with f'(a) != 0, and f(a) = b (so that f^(-1)(b) = a).",
        "conclusion": "(f^(-1))'(b) = 1 / f'(a) = 1 / f'(f^(-1)(b)).",
        "apTip": "The classic trap: The input to the inverse derivative is b (the y-value of f), NOT a! Find the x-value where f(x) = b, compute f'(x), and take its reciprocal."
      }
    ],
    "formulas": [
      {
        "name": "The Chain Rule (Function & Power Forms)",
        "latex": "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x) \\quad \\text{and} \\quad \\frac{d}{dx}[(u(x))^n] = n(u(x))^{n-1} \\cdot u'(x)",
        "explanation": "Always remember to multiply by the derivative of the inside term u'(x)."
      },
      {
        "name": "Derivative of Inverse Functions",
        "latex": "(f^{-1})'(b) = \\frac{1}{f'(a)} \\quad \\text{where } f(a) = b",
        "explanation": "The slope of the inverse function at (b, a) is the reciprocal of the slope of the original function at (a, b)."
      },
      {
        "name": "Inverse Trigonometric Derivatives",
        "latex": "\\begin{aligned} \\frac{d}{dx}[\\arcsin u] &= \\frac{u'}{\\sqrt{1 - u^2}} & \\frac{d}{dx}[\\arccos u] &= -\\frac{u'}{\\sqrt{1 - u^2}} \\\\ \\frac{d}{dx}[\\arctan u] &= \\frac{u'}{1 + u^2} & \\frac{d}{dx}[\\text{arcsec } u] &= \\frac{u'}{|u|\\sqrt{u^2 - 1}} \\end{aligned}",
        "explanation": "arctan(u) is the most heavily tested on the AP exam because it does not involve radicals."
      },
      {
        "name": "Logarithmic Differentiation",
        "latex": "y = [f(x)]^{g(x)} \\implies \\ln y = g(x) \\ln(f(x)) \\implies \\frac{1}{y}\\frac{dy}{dx} = \\frac{d}{dx}[g(x)\\ln(f(x))]",
        "explanation": "Essential for variable-base with variable-exponent functions where power and exponential rules both fail."
      }
    ],
    "sections": [
      {
        "heading": "1. The Chain Rule & Nested Composites (CED 3.1)",
        "content": "The Chain Rule is the engine of calculus:\n$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$\n**Nested Multi-Layer Chains:**\nWhen a function has three or more layers, such as $y = \\sin^4(3x^2 - 5) = [\\sin(3x^2 - 5)]^4$:\n1. **Outer layer:** $[\\dots]^4 \\implies 4[\\dots]^3$\n2. **Middle layer:** $\\sin(\\dots) \\implies \\cos(\\dots)$\n3. **Inner layer:** $3x^2 - 5 \\implies 6x$\n$$\\frac{dy}{dx} = 4[\\sin(3x^2 - 5)]^3 \\cdot \\cos(3x^2 - 5) \\cdot (6x) = 24x \\sin^3(3x^2 - 5)\\cos(3x^2 - 5)$$"
      },
      {
        "heading": "2. Implicit Differentiation 4-Step Protocol (CED 3.2)",
        "content": "When equations relate $x$ and $y$ implicitly (e.g. circles, ellipses, foliums $x^3 + y^3 = 6xy$):\n1. **Differentiate both sides with respect to $x$:** Every time you differentiate a term with $y$, apply the Chain Rule and multiply by $\\frac{dy}{dx}$ (since $y$ is an implicit function of $x$).\n2. **Handle the Product Rule on Mixed Terms:** $\\frac{d}{dx}[x y] = (1)(y) + x\\frac{dy}{dx} = y + x\\frac{dy}{dx}$. (Do NOT forget the $y$ term!).\n3. **Collect all terms containing $\\frac{dy}{dx}$ on the left side** of the equation and move all non-$\\frac{dy}{dx}$ terms to the right side.\n4. **Factor out $\\frac{dy}{dx}$ and divide:**\n   $$\\frac{dy}{dx}(A) = B \\implies \\frac{dy}{dx} = \\frac{B}{A}$$"
      },
      {
        "heading": "3. Higher-Order Implicit Derivatives (Finding d²y/dx²) (CED 3.6)",
        "content": "On AP Free Response Questions, you are frequently asked to find $\\frac{d^2y}{dx^2}$ for an implicit equation:\n1. Differentiate the first derivative $\\frac{dy}{dx}$ with respect to $x$ (usually requiring the **Quotient Rule**).\n2. The resulting expression will contain both $x, y$, and $\\frac{dy}{dx}$.\n3. **MANDATORY AP STEP:** Substitute the expression for $\\frac{dy}{dx}$ found in the previous step into the second derivative so that $\\frac{d^2y}{dx^2}$ is expressed purely in terms of $x$ and $y$!\n4. Simplify the numerator by finding a common denominator."
      },
      {
        "heading": "4. Horizontal and Vertical Tangents of Implicit Curves (CED 3.2)",
        "content": "Given $\\frac{dy}{dx} = \\frac{N(x, y)}{D(x, y)}$:\n- **Horizontal Tangents:** Set numerator equal to zero: $N(x, y) = 0$ (provided $D(x, y) \\neq 0$). The slope is $0$.\n- **Vertical Tangents:** Set denominator equal to zero: $D(x, y) = 0$ (provided $N(x, y) \\neq 0$). The slope is undefined (tangent is vertical line $x = c$).\n- **Points on the Curve:** Once you find a relationship (e.g., $y = 2x$), substitute it back into the **original implicit equation** to find the actual coordinates $(x, y)$!"
      },
      {
        "heading": "5. Inverse Function Derivatives Protocol (CED 3.3)",
        "content": "Given that $g(x) = f^{-1}(x)$, find $g'(b)$:\n1. Set $f(x) = b$ and solve for $x = a$. (So $(a, b)$ is on $f$ and $(b, a)$ is on $g$).\n2. Differentiate the original function: $f'(x)$.\n3. Evaluate $f'(a)$ at the input $a$.\n4. Take the reciprocal:\n   $$g'(b) = \\frac{1}{f'(a)}$$\n*Geometric Interpretation:* Reflection across $y = x$ swaps $\\frac{\\Delta y}{\\Delta x}$ to $\\frac{\\Delta x}{\\Delta y}$, so slopes are reciprocals."
      },
      {
        "heading": "6. Implicit Differentiation of Higher Derivatives & Tangency Analysis (CED 3.2)",
        "content": "Mastering multi-stage implicit differentiation and concavity:\n\n* **Finding Second Derivatives ($d^2y/dx^2$) Implicitly**:\n  * Differentiating an implicit relation $F(x, y) = 0$ yields a first derivative: $\\frac{dy}{dx} = \\frac{P(x, y)}{Q(x, y)}$.\n  * To calculate $\\frac{d^2y}{dx^2}$:\n    1. Apply the Quotient Rule to $\\frac{dy}{dx}$: $\\frac{d^2y}{dx^2} = \\frac{Q \\cdot \\frac{d}{dx}[P] - P \\cdot \\frac{d}{dx}[Q]}{Q^2}$.\n    2. Any derivative of a $y$-term generates a factor of $\\frac{dy}{dx}$ via the Chain Rule!\n    3. **CRITICAL AP REQUIREMENT**: You MUST substitute the algebraic expression for $\\frac{dy}{dx}$ back into the equation, and simplify into a single fraction!\n* **Horizontal vs. Vertical Tangent Lines on Implicit Curves**:\n  * **Horizontal Tangents**: Set numerator of $\\frac{dy}{dx}$ equal to zero ($P(x, y) = 0$) AND verify denominator $Q(x, y) \\neq 0$. Substitute points back into original curve equation.\n  * **Vertical Tangents**: Set denominator of $\\frac{dy}{dx}$ equal to zero ($Q(x, y) = 0$) AND verify numerator $P(x, y) \\neq 0$."
      },
      {
        "heading": "7. Inverse Function Derivatives & Inverse Trigonometric Derivations (CED 3.3-3.4)",
        "content": "Differentiating inverses and geometric trigonometric derivations:\n\n* **The Inverse Function Derivative Formula**:\n  $$(f^{-1})'(b) = \\frac{1}{f'(f^{-1}(b))} = \\frac{1}{f'(a)}, \\quad \\text{where } f(a) = b$$\n  * **FRQ 4-Step Table Lookup Strategy**:\n    1. Identify target value $b$ where you need $(f^{-1})'(b)$.\n    2. Search table or function to find input $a$ such that $f(a) = b$.\n    3. Evaluate derivative of original function at that input: $f'(a)$.\n    4. Take the reciprocal: $(f^{-1})'(b) = 1/f'(a)$.\n* **Derivation of $\\frac{d}{dx}[\\arcsin x]$ via Right Triangle Geometry**:\n  * Let $y = \\arcsin x \\implies \\sin y = x$.\n  * Differentiating implicitly: $\\cos y \\cdot \\frac{dy}{dx} = 1 \\implies \\frac{dy}{dx} = \\frac{1}{\\cos y}$.\n  * In a right triangle with angle $y$, $\\text{opposite} = x$ and $\\text{hypotenuse} = 1$.\n  * By Pythagorean theorem, $\\text{adjacent} = \\sqrt{1 - x^2} \\implies \\cos y = \\sqrt{1 - x^2}$.\n  * Therefore: $\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1 - x^2}}$."
      }
    ],
    "workedExamples": [
      {
        "title": "Implicit Differentiation with Product Rule and Tangent Line",
        "topicRef": "CED 3.2 Implicit Differentiation",
        "question": "Find the equation of the tangent line to the curve $x^2 - 3xy + y^2 = 5$ at the point $(1, 4)$.",
        "solutionSteps": [
          "Step 1: Differentiate both sides w.r.t x: d/dx[x^2] - 3*d/dx[xy] + d/dx[y^2] = d/dx[5].",
          "Step 2: Apply product rule to -3xy: 2x - 3(y + x*dy/dx) + 2y*dy/dx = 0.",
          "Step 3: Expand: 2x - 3y - 3x*dy/dx + 2y*dy/dx = 0.",
          "Step 4: Plug in point (x, y) = (1, 4) immediately to simplify arithmetic:",
          "2(1) - 3(4) - 3(1)*dy/dx + 2(4)*dy/dx = 0 ==> 2 - 12 - 3*dy/dx + 8*dy/dx = 0.",
          "-10 + 5*dy/dx = 0 ==> 5*dy/dx = 10 ==> dy/dx = 2.",
          "Step 5: Write point-slope equation: y - 4 = 2(x - 1)."
        ],
        "finalAnswer": "y - 4 = 2(x - 1)",
        "apScoringTip": "Pro-Tip: Plug the numbers (x = 1, y = 4) in immediately after differentiating rather than solving algebraically for dy/dx. It saves 2 minutes and avoids algebra slips."
      },
      {
        "title": "Calculating Inverse Derivative from Tabular Values",
        "topicRef": "CED 3.3 Inverse Functions",
        "question": "Let f be a differentiable function. Selected values are: f(2) = 5, f'(2) = 3, f(5) = 8, f'(5) = 7. If g(x) = f^(-1)(x), find g'(5).",
        "solutionSteps": [
          "Step 1: Identify that g is the inverse of f, so g'(5) = 1 / f'(g(5)).",
          "Step 2: Find g(5): Since f(2) = 5, by definition of inverse f^(-1)(5) = 2, so g(5) = 2.",
          "Step 3: Evaluate f' at this input: f'(2) = 3.",
          "Step 4: Take the reciprocal: g'(5) = 1 / f'(2) = 1 / 3."
        ],
        "finalAnswer": "g'(5) = 1/3",
        "apScoringTip": "Do NOT use f'(5) = 7! The input to g is 5, which corresponds to input 2 for f. The answer is 1/f'(2) = 1/3, not 1/7."
      }
    ],
    "diagrams": [
      {
        "id": "inverse_reciprocal_slopes",
        "title": "Geometric Symmetry of Inverse Derivatives",
        "subtitle": "Points (a, b) and (b, a) Across the Line y = x",
        "type": "inverse_slopes",
        "description": "The reflection of the tangent line across y = x inverts run and rise, making the slopes exact reciprocals: m_inverse = 1 / m_original.",
        "takeaway": "Derivative of inverse function at b is the reciprocal of the original derivative at a."
      }
    ],
    "commonTraps": [
      "Forgetting the product rule on mixed term xy: d/dx[xy] is y + x(dy/dx), NOT just x(dy/dx).",
      "Inverse derivative input error: Using 1/f'(b) instead of 1/f'(a) where f(a) = b.",
      "Forgetting the chain rule when differentiating trigonometric functions with arguments other than x: d/dx[sin(5x)] = 5*cos(5x), NOT cos(5x)."
    ],
    "cramSheet": [
      "Chain Rule: d/dx[f(g(x))] = f'(g(x)) * g'(x).",
      "Implicit: Attach dy/dx whenever differentiating y.",
      "(f^(-1))'(b) = 1 / f'(a) where f(a) = b.",
      "d/dx[arctan x] = 1 / (1 + x^2).",
      "d/dx[arcsin x] = 1 / sqrt(1 - x^2)."
    ]
  },
  {
    "unitId": "u4",
    "unitNumber": 4,
    "title": "Contextual Applications of Differentiation",
    "examWeight": "10%–15% of AP Exam",
    "bigIdea": "Derivatives model physical dynamic phenomena, connecting position, velocity, and acceleration in motion, tracking geometric rates of change over time, and linearizing non-linear functions.",
    "keyTheorems": [
      {
        "name": "L'Hôpital's Rule for Indeterminate Forms",
        "conditions": "f and g are differentiable near c; lim_{x->c} f(x) = 0 and lim_{x->c} g(x) = 0 (or both approach +/- infinity), and g'(x) != 0 near c.",
        "conclusion": "\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}.",
        "apTip": "CRITICAL AP FRQ RULE: NEVER write \"= 0/0\" or \"= inf/inf\". You MUST state: \"lim f(x) = 0 and lim g(x) = 0, so by L'Hôpital's Rule...\" Taking derivatives without establishing the indeterminate form loses the justification point."
      }
    ],
    "formulas": [
      {
        "name": "Rectilinear Particle Motion Relationships",
        "latex": "v(t) = s'(t) = \\frac{ds}{dt}, \\quad a(t) = v'(t) = s''(t) = \\frac{dv}{dt}, \\quad \\text{Speed} = |v(t)|",
        "explanation": "Position s(t), velocity v(t), acceleration a(t). Particle changes direction when v(t) changes sign (passes through 0 with sign change)."
      },
      {
        "name": "Speed Increasing vs. Decreasing Criterion",
        "latex": "\\text{Speed Increasing: } v(t) \\cdot a(t) > 0 \\quad | \\quad \\text{Speed Decreasing: } v(t) \\cdot a(t) < 0",
        "explanation": "Speed increases when velocity and acceleration have the SAME sign; speed decreases when velocity and acceleration have OPPOSITE signs."
      },
      {
        "name": "Local Linear Approximation (Tangent Line Linearization)",
        "latex": "L(x) = f(a) + f'(a)(x - a)",
        "explanation": "Approximates f(x) near x = a using the tangent line."
      },
      {
        "name": "Concavity Over/Under Estimation Rule",
        "latex": "f''(x) > 0 \\text{ (Concave Up)} \\implies \\text{Underestimate} \\quad | \\quad f''(x) < 0 \\text{ (Concave Down)} \\implies \\text{Overestimate}",
        "explanation": "Tangent lines sit BELOW concave-up curves (underestimate) and ABOVE concave-down curves (overestimate)."
      }
    ],
    "sections": [
      {
        "heading": "1. Rectilinear Particle Motion & Direction Changes (CED 4.2)",
        "content": "A particle moves along a horizontal axis with position $s(t)$, velocity $v(t) = s'(t)$, and acceleration $a(t) = v'(t)$:\n\n| Velocity $v(t)$ | Acceleration $a(t)$ | Sign of $v(t) \\cdot a(t)$ | Physical Motion Description |\n| :--- | :--- | :--- | :--- |\n| **Positive (+)** | **Positive (+)** | Positive $(>0)$ | Moving Right & **Speeding Up** |\n| **Positive (+)** | **Negative (-)** | Negative $(<0)$ | Moving Right & **Slowing Down** |\n| **Negative (-)** | **Negative (-)** | Positive $(>0)$ | Moving Left & **Speeding Up** |\n| **Negative (-)** | **Positive (+)** | Negative $(<0)$ | Moving Left & **Slowing Down** |\n| **Zero ($0$)** | Any | $0$ | Instantaneously at rest |\n\n*Direction Change Test:* The particle changes direction **if and only if** $v(t) = 0$ (or undefined) AND $v(t)$ changes sign from positive to negative or negative to positive! Merely having $v(t) = 0$ does not guarantee a direction change."
      },
      {
        "heading": "2. The 6-Step Related Rates Master Protocol (CED 4.4–4.5)",
        "content": "Related rates problems involve geometric variables changing with respect to time $t$:\n\n1. **Draw a sketch & assign variables:** Identify quantities that vary with time ($r(t), h(t), V(t)$) vs constants that never change (e.g., ladder length $L = 10$).\n2. **List \"Given\" rates and \"Wanted\" rate:** Write derivatives with respect to time (e.g., Given $\\frac{dV}{dt} = 5$, find $\\frac{dh}{dt}$ when $h = 3$).\n3. **Write the primary geometric formula:** Relate the variables (e.g., Cone volume $V = \\frac{1}{3}\\pi r^2 h$, Pythagorean theorem $x^2 + y^2 = z^2$, Sphere $V = \\frac{4}{3}\\pi r^3$).\n4. **Eliminate unwanted variables using geometry:**\n   - In inverted conical tanks: Use similar triangles $\\frac{r}{h} = \\frac{R_{tank}}{H_{tank}} \\implies r = \\left(\\frac{R}{H}\\right)h$ so $V = \\frac{1}{3}\\pi \\left(\\frac{R}{H}h\\right)^2 h = K h^3$.\n5. **Differentiate implicitly with respect to time $t$:** Apply the Chain Rule:\n   $$\\frac{dV}{dt} = 3K h^2 \\frac{dh}{dt}$$\n6. **Substitute known numerical values and solve:** ONLY substitute numbers AFTER differentiation is complete!"
      },
      {
        "heading": "3. Canonical Related Rates Scenarios Reference",
        "content": "Master equations for the most common AP exam scenarios:\n\n- **Sliding Ladder:** $x^2 + y^2 = L^2 \\implies 2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$. Note: $\\frac{dy}{dt}$ will be negative as ladder slides down.\n- **Conical Reservoir:** $V = \\frac{1}{3}\\pi r^2 h$. Eliminate $r$ using similar triangles $r = \\frac{R}{H}h \\implies V = \\frac{\\pi R^2}{3H^2}h^3$.\n- **Walking Away from a Streetlight:**\n  - Let $x$ be distance from pole, $s$ be length of shadow.\n  - By similar triangles: $\\frac{H_{pole}}{x + s} = \\frac{h_{person}}{s}$.\n  - Rate shadow length is growing $= \\frac{ds}{dt}$.\n  - Rate tip of shadow is moving $= \\frac{d}{dt}[x + s] = \\frac{dx}{dt} + \\frac{ds}{dt}$."
      },
      {
        "heading": "4. Local Linearity, Linearization & Over/Under Estimation (CED 4.6)",
        "content": "The tangent line $L(x) = f(a) + f'(a)(x - a)$ provides an accurate local approximation of $f(x)$ for values of $x$ close to $a$.\n\n**Overestimate vs. Underestimate Justification:**\n- To justify whether $L(x)$ is an overestimate or underestimate, evaluate the **second derivative $f''(x)$** on the interval between $a$ and $x$:\n  - If $f''(x) > 0$ (curve is **concave up**), the curve lies above the tangent line, so $L(x)$ is an **UNDERESTIMATE**.\n  - If $f''(x) < 0$ (curve is **concave down**), the curve lies below the tangent line, so $L(x)$ is an **OVERESTIMATE**.\n- *Required AP Wording:* \"Since $f''(x) < 0$ on the interval $[a, x]$, the graph of $f$ is concave down, and therefore the tangent line approximation is an overestimate.\""
      },
      {
        "heading": "5. L'Hôpital's Rule Official FRQ Presentation Protocol (CED 4.7)",
        "content": "When evaluating $\\lim_{x \\to c} \\frac{f(x)}{g(x)}$ producing $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$:\n\n**The 3-Step Presentation Required by AP Chief Readers:**\n1. Separately show that the limit of the numerator equals 0 (or $\\pm\\infty$):\n   $$\\lim_{x \\to c} f(x) = 0$$\n2. Separately show that the limit of the denominator equals 0 (or $\\pm\\infty$):\n   $$\\lim_{x \\to c} g(x) = 0$$\n3. State that L'Hôpital's Rule applies and take derivatives of numerator and denominator independently:\n   $$\\lim_{x \\to c} \\frac{f(x)}{g(x)} \\stackrel{\\text{L'H}}{=} \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$\n*Do NOT use the quotient rule here! Differentiate top and bottom separately.*"
      },
      {
        "heading": "6. Multi-Dimensional Related Rates Paradigms & Geometric Elimination (CED 4.4-4.5)",
        "content": "Advanced related rates algorithms for classic AP scenarios:\n\n* **The Inverted Conical Tank Paradigm**:\n  * Water flows into an inverted cone of base radius $R_0$ and height $H_0$ at rate $\\frac{dV}{dt}$.\n  * Geometry: $V = \\frac{1}{3}\\pi r^2 h$. This has two independent variables ($r$ and $h$).\n  * **Similar Triangles Elimination**: $\\frac{r}{h} = \\frac{R_0}{H_0} \\implies r = \\left(\\frac{R_0}{H_0}\\right)h$.\n  * Substituting $r$: $V = \\frac{1}{3}\\pi \\left(\\frac{R_0}{H_0} h\\right)^2 h = \\frac{\\pi R_0^2}{3 H_0^2} h^3$.\n  * Differentiating with respect to time $t$: $\\frac{dV}{dt} = \\frac{\\pi R_0^2}{H_0^2} h^2 \\frac{dh}{dt}$.\n  * Solve directly for the rate of water level rise $\\frac{dh}{dt}$ without needing $dr/dt$!\n* **The Walking Person & Shadow Length Paradigm**:\n  * A person of height $h_p$ walks away from a street lamp of height $H_L$ at speed $\\frac{dx}{dt}$.\n  * Let $x$ be distance from lamppost to person, and $s$ be length of shadow.\n  * Similar triangles: $\\frac{s}{h_p} = \\frac{x + s}{H_L} \\implies s(H_L - h_p) = h_p x \\implies s = \\left(\\frac{h_p}{H_L - h_p}\\right) x$.\n  * Rate of shadow lengthening: $\\frac{ds}{dt} = \\left(\\frac{h_p}{H_L - h_p}\\right) \\frac{dx}{dt}$.\n  * **AP TRAP**: If asked for the rate at which the *tip of the shadow* is moving, that is $\\frac{d}{dt}(x + s) = \\frac{dx}{dt} + \\frac{ds}{dt}$!"
      },
      {
        "heading": "7. Local Linearity, Tangent Line Approximations & Error Bounds (CED 4.6)",
        "content": "Constructing tangent lines for numerical approximation:\n\n* **The Linearization Formula**:\n  $$L(x) = f(a) + f'(a)(x - a)$$\n* **Over-Approximation vs. Under-Approximation Rule**:\n  * The error of the linear approximation is determined by the **concavity** of the function:\n  * **Concave Up ($f''(x) > 0$)**: The tangent line lies strictly **BELOW** the curve of $f(x)$ $\\implies$ $L(x)$ is an **Under-approximation** ($L(x) < f(x)$).\n  * **Concave Down ($f''(x) < 0$)**: The tangent line lies strictly **ABOVE** the curve of $f(x)$ $\\implies$ $L(x)$ is an **Over-approximation** ($L(x) > f(x)$).\n  * *AP Justification Standard*: To earn the justification point on an FRQ, you must explicitly state: *\"Since $f''(x) < 0$ on the interval, the graph of $f$ is concave down, and therefore the tangent line approximation is an overestimate.\"*"
      }
    ],
    "workedExamples": [
      {
        "title": "Conical Tank Related Rates Full Solution",
        "topicRef": "CED 4.5 Related Rates",
        "question": "Water drains from an inverted conical tank (height 10 m, top radius 4 m) at a constant rate of 2 m^3/min. How fast is the water level dropping when the water is 6 m deep?",
        "solutionSteps": [
          "Step 1: Identify given rate: dV/dt = -2 m^3/min (negative because volume is decreasing).",
          "Step 2: Relate r and h using similar triangles: r / h = 4 / 10 = 2/5 ==> r = (2/5)h.",
          "Step 3: Substitute r into volume formula: V = (1/3)*pi*r^2*h = (1/3)*pi*[(2/5)h]^2*h = (4*pi/75)*h^3.",
          "Step 4: Differentiate with respect to time t: dV/dt = (4*pi/75)*3*h^2*(dh/dt) = (4*pi/25)*h^2*(dh/dt).",
          "Step 5: Substitute h = 6 and dV/dt = -2: -2 = (4*pi/25)*(6)^2*(dh/dt) = (4*pi/25)*(36)*(dh/dt) = (144*pi/25)*(dh/dt).",
          "Step 6: Solve for dh/dt: dh/dt = -2 * (25 / (144*pi)) = -50 / (144*pi) = -25 / (72*pi) m/min."
        ],
        "finalAnswer": "dh/dt = -25 / (72*pi) m/min (Water level is dropping at 25/(72*pi) m/min)",
        "apScoringTip": "State the units clearly (m/min). If the question asks \"how fast is the water level dropping\", the positive quantity 25/(72*pi) m/min is required."
      },
      {
        "title": "Particle Speed Analysis with Derivatives",
        "topicRef": "CED 4.2 Straight-Line Motion",
        "question": "A particle moves along a line with position s(t) = 2t^3 - 9t^2 + 12t - 4 for t >= 0. Determine whether the particle is speeding up or slowing down at t = 1.5.",
        "solutionSteps": [
          "Step 1: Find velocity v(t) = s'(t) = 6t^2 - 18t + 12.",
          "Step 2: Evaluate velocity at t = 1.5: v(1.5) = 6(1.5)^2 - 18(1.5) + 12 = 6(2.25) - 27 + 12 = 13.5 - 27 + 12 = -1.5 < 0 (moving left).",
          "Step 3: Find acceleration a(t) = v'(t) = 12t - 18.",
          "Step 4: Evaluate acceleration at t = 1.5: a(1.5) = 12(1.5) - 18 = 18 - 18 = 0.",
          "Step 5: Conclude: Since a(1.5) = 0, the particle is neither speeding up nor slowing down at this instant (speed is at an instantaneous extremum)."
        ],
        "finalAnswer": "Neither speeding up nor slowing down (a(1.5) = 0)",
        "apScoringTip": "Always evaluate both v(t) and a(t) and compare their signs. Speeding up requires v and a to have the same sign; slowing down requires opposite signs."
      }
    ],
    "diagrams": [
      {
        "id": "tangent_concavity_over_under",
        "title": "Concavity and Tangent Line Approximation Error",
        "subtitle": "Why Concave Up Underestimates and Concave Down Overestimates",
        "type": "concavity_tangent",
        "description": "Concave up curves bend upward away from their tangents, leaving the tangent below the curve. Concave down curves bend downward away from their tangents, leaving the tangent above.",
        "takeaway": "Concave up => Underestimate. Concave down => Overestimate."
      }
    ],
    "commonTraps": [
      "Saying \"speed is increasing because acceleration is positive\". Speed increases only when v(t) and a(t) have the SAME sign! If v < 0 and a > 0, speed is decreasing.",
      "Plugging numbers into related rates equations before taking the derivative! Always differentiate symbolically first, then substitute numbers.",
      "Writing \"= 0/0\" on L'Hôpital FRQ problems. Show limits of top and bottom separately.",
      "Forgetting units on contextual word problems: ft/sec, m/min^2, gallons/hour."
    ],
    "cramSheet": [
      "v(t) = s'(t), a(t) = v'(t), Speed = |v(t)|.",
      "Speed increases <=> v(t) and a(t) have same sign.",
      "Tangent Line: L(x) = f(a) + f'(a)(x - a).",
      "f'' > 0 (concave up) => Underestimate. f'' < 0 (concave down) => Overestimate.",
      "L'Hôpital: Show lim top = 0 and lim bottom = 0 separately before taking derivatives."
    ]
  },
  {
    "unitId": "u5",
    "unitNumber": 5,
    "title": "Analytical Applications of Differentiation",
    "examWeight": "15%–18% of AP Exam (Heaviest AB Unit)",
    "bigIdea": "Derivatives unlock the structural anatomy of functions—identifying where functions rise and fall, finding global and local extrema, analyzing curvature through concavity, and optimizing geometric and economic systems.",
    "keyTheorems": [
      {
        "name": "Mean Value Theorem for Derivatives (MVT)",
        "conditions": "f(x) must be continuous on the closed interval [a, b] AND differentiable on the open interval (a, b).",
        "conclusion": "There exists at least one number c in (a, b) such that f'(c) = (f(b) - f(a)) / (b - a).",
        "apTip": "The instantaneous slope at some interior point c must equal the average secant slope over [a, b]. You MUST state BOTH continuity and differentiability hypotheses on FRQs!"
      },
      {
        "name": "Rolle's Theorem (Special Case of MVT)",
        "conditions": "f(x) is continuous on [a, b], differentiable on (a, b), and f(a) = f(b).",
        "conclusion": "There exists at least one number c in (a, b) such that f'(c) = 0 (horizontal tangent).",
        "apTip": "Used to prove the existence of critical points, stationary states, or uniqueness of roots."
      },
      {
        "name": "Extreme Value Theorem (EVT)",
        "conditions": "f(x) is continuous on a closed interval [a, b].",
        "conclusion": "f(x) is guaranteed to attain both an absolute (global) maximum value and an absolute (global) minimum value on [a, b].",
        "apTip": "The Candidates Test is the mandatory analytical procedure to locate these extrema."
      }
    ],
    "formulas": [
      {
        "name": "Mean Value Theorem Equation",
        "latex": "f'(c) = \\frac{f(b) - f(a)}{b - a} \\quad \\text{for some } c \\in (a, b)",
        "explanation": "Guarantees a point c where the tangent line is parallel to the secant line connecting endpoints."
      },
      {
        "name": "Critical Number Definition",
        "latex": "x = c \\quad \\text{such that } f'(c) = 0 \\quad \\text{or} \\quad f'(c) \\text{ Does Not Exist}",
        "explanation": "Critical numbers are interior domain candidates for local extrema."
      },
      {
        "name": "Second Derivative Test for Local Extrema",
        "latex": "f'(c) = 0 \\text{ and } f''(c) < 0 \\implies \\text{Local Max} \\quad | \\quad f'(c) = 0 \\text{ and } f''(c) > 0 \\implies \\text{Local Min}",
        "explanation": "If f''(c) = 0, the test is INCONCLUSIVE (must fall back to the First Derivative Test)."
      },
      {
        "name": "Point of Inflection Criterion",
        "latex": "f''(c) = 0 \\text{ or undefined} \\quad \\text{AND } f''(x) \\text{ CHANGES SIGN at } x = c",
        "explanation": "A point of inflection requires a strict change in concavity (concave up to down or down to up)."
      }
    ],
    "sections": [
      {
        "heading": "1. The Mean Value Theorem (MVT) Protocol (CED 5.1)",
        "content": "The Mean Value Theorem bridges the average rate of change and the instantaneous rate of change:\n\n**The Official 3-Step MVT Presentation:**\n1. **Hypothesis Verification:** Explicitly write:\n   - *\"Since $f(x)$ is continuous on the closed interval $[a, b]$ and differentiable on the open interval $(a, b)$...\"*\n2. **Compute the Average Rate of Change:**\n   $$\\text{AROC} = \\frac{f(b) - f(a)}{b - a}$$\n3. **Conclude with MVT:**\n   - *\"...by the Mean Value Theorem, there exists at least one $c \\in (a, b)$ such that $f'(c) = \\frac{f(b) - f(a)}{b - a}$.\"*\n\n*Common Failure Point:* If $f(x)$ has a cusp, corner, or discontinuity inside $(a, b)$ (like $f(x) = |x|$ or $f(x) = 1/x$), MVT DOES NOT APPLY!"
      },
      {
        "heading": "2. First Derivative Test & Monotonicity (CED 5.3–5.4)",
        "content": "Analyzing the sign of the first derivative $f'(x)$:\n- If $f'(x) > 0$ on an interval, then $f(x)$ is **strictly increasing** on that interval.\n- If $f'(x) < 0$ on an interval, then $f(x)$ is **strictly decreasing** on that interval.\n- If $f'(x) = 0$ on an interval, then $f(x)$ is **constant** on that interval.\n\n**The First Derivative Test for Local (Relative) Extrema:**\nLet $c$ be a critical number of $f$:\n- **Local Maximum:** $f'(x)$ changes sign from **positive to negative** at $x = c$.\n- **Local Minimum:** $f'(x)$ changes sign from **negative to positive** at $x = c$.\n- **No Extremum:** $f'(x)$ does not change sign at $x = c$ (e.g. $f(x) = x^3$ at $x = 0$, where $f'(x) \\ge 0$ on both sides).\n\n*AP Justification Wording:* \"Because $f'(x)$ changes from positive to negative at $x = c$, $f$ has a relative maximum at $x = c$.\" (Never just say \"because the sign chart changes\")."
      },
      {
        "heading": "3. The Candidates Test for Absolute (Global) Extrema (CED 5.5)",
        "content": "To find the absolute maximum and minimum values of a continuous function on a closed interval $[a, b]$, use the **Candidates Test**:\n\n1. **Find all critical numbers** in the open interval $(a, b)$ by solving $f'(x) = 0$ or where $f'(x)$ is undefined.\n2. **Discard any critical numbers outside** of the interval $[a, b]$.\n3. **Construct a 2-Column Table of Candidates:** Evaluate $f(x)$ at:\n   - The left endpoint: $x = a$\n   - All interior critical numbers: $x = c_1, c_2, \\dots$\n   - The right endpoint: $x = b$\n4. **Identify Extrema:**\n   - The **largest value** in the $f(x)$ column is the **absolute maximum**.\n   - The **smallest value** in the $f(x)$ column is the **absolute minimum**.\n\n*Warning:* A sign chart ALONE cannot earn full points for absolute extrema on closed intervals; the Candidates Test table is required!"
      },
      {
        "heading": "4. Concavity, Inflection Points & Second Derivative Test (CED 5.6–5.7)",
        "content": "The second derivative describes the curvature (bending) of the function:\n- $f''(x) > 0 \\iff f'(x)$ is increasing $\\iff f(x)$ is **Concave Up** (holds water, tangent lies below curve).\n- $f''(x) < 0 \\iff f'(x)$ is decreasing $\\iff f(x)$ is **Concave Down** (sheds water, tangent lies above curve).\n\n**Point of Inflection (POI):**\nA point $(c, f(c))$ on the curve is a Point of Inflection **if and only if**:\n1. $f(x)$ is continuous at $c$.\n2. $f''(c) = 0$ or $f''(c)$ does not exist.\n3. **$f''(x)$ strictly changes sign** (from positive to negative or negative to positive) across $x = c$.\n*Crucial Warning:* Having $f''(c) = 0$ does NOT guarantee an inflection point! For $f(x) = x^4$, $f''(0) = 0$, but $f''(x) = 12x^2 \\ge 0$ everywhere, so no sign change occurs and $x = 0$ is NOT a point of inflection!"
      },
      {
        "heading": "5. Connecting the Graphs of f, f', and f'' (CED 5.8–5.9)",
        "content": "The most common AP graphical question gives the graph of the derivative $f'(x)$ and asks about the original function $f(x)$:\n\n| Feature of $f(x)$ | Feature on the Graph of Derivative $f'(x)$ | Feature of $f''(x)$ |\n| :--- | :--- | :--- |\n| **$f$ is Increasing** | $f'$ is **above the $x$-axis** ($f' > 0$) | N/A |\n| **$f$ is Decreasing** | $f'$ is **below the $x$-axis** ($f' < 0$) | N/A |\n| **Relative Maximum** | $f'$ crosses $x$-axis from **above to below** ($+ \\to -$) | $f'' < 0$ |\n| **Relative Minimum** | $f'$ crosses $x$-axis from **below to above** ($- \\to +$) | $f'' > 0$ |\n| **$f$ is Concave Up** | $f'$ is **increasing** (positive slope) | $f'' > 0$ |\n| **$f$ is Concave Down** | $f'$ is **decreasing** (negative slope) | $f'' < 0$ |\n| **Point of Inflection** | $f'$ has a **local maximum or local minimum** | $f''$ changes sign |"
      },
      {
        "heading": "6. Applied Optimization 5-Step Protocol (CED 5.10–5.11)",
        "content": "Optimization problems require finding the absolute maximum or minimum of a real-world quantity:\n1. **Assign variables and draw a diagram:** Label quantities clearly.\n2. **Write the Primary (Objective) Equation:** The quantity to be maximized or minimized (e.g. Area $A = x y$, Volume $V = x^2 h$, Cost $C = 20(2x^2) + 12(4xh)$).\n3. **Write the Secondary (Constraint) Equation:** Relate the variables using given restrictions (e.g. Perimeter $2x + 2y = 100$, Volume $x^2 h = 500$).\n4. **Express Objective Function in a single variable:** Substitute constraint into primary equation to get $f(x)$. Determine the practical domain $[a, b]$.\n5. **Find critical points & apply Candidates Test:** Evaluate $f(x)$ at endpoints and critical numbers to verify global optimality."
      }
    ],
    "workedExamples": [
      {
        "title": "Candidates Test for Absolute Extrema on a Closed Interval",
        "topicRef": "CED 5.5 Absolute Extrema",
        "question": "Find the absolute maximum and absolute minimum values of $f(x) = 2x^3 - 3x^2 - 12x + 5$ on the closed interval $[-2, 4]$.",
        "solutionSteps": [
          "Step 1: Check continuity: f(x) is a polynomial, continuous everywhere on [-2, 4], so EVT guarantees absolute extrema.",
          "Step 2: Find critical numbers: f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1).",
          "Set f'(x) = 0 ==> x = 2 and x = -1. Both lie inside the open interval (-2, 4).",
          "Step 3: Construct the Candidates Table evaluating f(x) at endpoints x = -2, 4 and critical values x = -1, 2:",
          "- f(-2) = 2(-8) - 3(4) - 12(-2) + 5 = -16 - 12 + 24 + 5 = 1.",
          "- f(-1) = 2(-1) - 3(1) - 12(-1) + 5 = -2 - 3 + 12 + 5 = 12.",
          "- f(2) = 2(8) - 3(4) - 12(2) + 5 = 16 - 12 - 24 + 5 = -15.",
          "- f(4) = 2(64) - 3(16) - 12(4) + 5 = 128 - 48 - 48 + 5 = 37.",
          "Step 4: Identify extrema from the table:",
          "Absolute Maximum value is 37 (occurs at x = 4).",
          "Absolute Minimum value is -15 (occurs at x = 2)."
        ],
        "finalAnswer": "Absolute Max = 37 at x = 4; Absolute Min = -15 at x = 2",
        "apScoringTip": "Be sure to distinguish between the maximum VALUE (the y-value 37) and WHERE it occurs (the x-value 4). If the exam asks for the absolute maximum, give the y-value."
      },
      {
        "title": "Reading the Graph of f' to Find Points of Inflection",
        "topicRef": "CED 5.8 Sketching and Graph Analysis",
        "question": "The graph of f'(x), the derivative of f, is shown. If f' has relative extrema at x = -2, x = 1, and x = 4, find all x-coordinates of the points of inflection of f(x) and justify your answer.",
        "solutionSteps": [
          "Step 1: Recall definition: A point of inflection on f occurs where f''(x) changes sign.",
          "Step 2: Relate f'' to f': Since f'' is the derivative of f', f'' changes sign where f' changes between increasing and decreasing.",
          "Step 3: A function changes between increasing and decreasing exactly at its local extrema (peaks and valleys).",
          "Step 4: Therefore, f has points of inflection at x = -2, x = 1, and x = 4.",
          "Step 5: Write the official justification: \"f has points of inflection at x = -2, x = 1, and x = 4 because f'(x) changes between increasing and decreasing at these points, meaning f''(x) changes sign.\""
        ],
        "finalAnswer": "x = -2, 1, 4",
        "apScoringTip": "Do not simply say \"because f' has a local max/min\". You must explicitly connect it to concavity by stating \"meaning f'' changes sign\"."
      }
    ],
    "diagrams": [
      {
        "id": "f_fprime_fdoubleprime_relationship",
        "title": "The Trinity of Calculus: f, f', and f'' Relationships",
        "subtitle": "From Function Shape to First Derivative Slope to Second Derivative Concavity",
        "type": "derivative_trinity",
        "description": "Side-by-side alignment showing how zeros of f' correspond to peaks/valleys of f, and zeros of f'' correspond to inflection points of f.",
        "takeaway": "Local extrema of f occur where f' changes sign; inflection points of f occur where f' has local extrema."
      }
    ],
    "commonTraps": [
      "Claiming a critical point is a local extremum without verifying a sign change! If f'(c) = 0 but f' does not change sign, there is no extremum.",
      "Forgetting endpoints in the Candidates Test. Absolute extrema frequently occur at endpoints on closed intervals!",
      "Assuming f''(c) = 0 implies an inflection point. A point of inflection REQUIRES a sign change in f''.",
      "Applying MVT when differentiability fails (e.g. sharp turn or vertical tangent on the interior of the interval)."
    ],
    "cramSheet": [
      "MVT: f continuous on [a, b], diff on (a, b) => f'(c) = (f(b)-f(a))/(b-a).",
      "First Deriv Test: f' + to - => Local Max; f' - to + => Local Min.",
      "Absolute Extrema: Candidates Test (evaluate endpoints and critical numbers in a table).",
      "Second Deriv Test: f'(c)=0 and f''(c)<0 => Local Max; f''(c)>0 => Local Min.",
      "Inflection Point: f'' changes sign <=> f' has a local extremum."
    ]
  },
  {
    "unitId": "u6",
    "unitNumber": 6,
    "title": "Integration and Accumulation of Change",
    "examWeight": "17%–20% of AP Exam (Core Heavyweight)",
    "bigIdea": "Definite integrals compute total accumulation of varying quantities over an interval. The Fundamental Theorem of Calculus establishes the profound inverse relationship between differentiation and integration.",
    "keyTheorems": [
      {
        "name": "Fundamental Theorem of Calculus (Part 1: Accumulation Functions)",
        "conditions": "f is continuous on [a, b] and g(x) = \\int_a^x f(t) dt.",
        "conclusion": "g is differentiable on (a, b) and g'(x) = \\frac{d}{dx}\\left[\\int_a^x f(t) dt\\right] = f(x). Generalized Leibniz Rule: \\frac{d}{dx}\\left[\\int_{u(x)}^{v(x)} f(t) dt\\right] = f(v(x))v'(x) - f(u(x))u'(x).",
        "apTip": "Every time you differentiate an accumulation integral, plug in the upper limit and multiply by its derivative, minus plug in the lower limit multiplied by its derivative."
      },
      {
        "name": "Fundamental Theorem of Calculus (Part 2: Evaluation Theorem)",
        "conditions": "f is continuous on [a, b] and F is any antiderivative of f (so F' = f).",
        "conclusion": "\\int_a^b f(x) dx = F(b) - F(a).",
        "apTip": "The cornerstone of definite integration: Net accumulation of rate of change over [a, b] equals total net change of the original quantity."
      },
      {
        "name": "The Net Change Theorem",
        "conditions": "A quantity changes at rate f(t) = Q'(t) from t = a to t = b.",
        "conclusion": "Q(b) = Q(a) + \\int_a^b Q'(t) dt = Q(a) + \\int_a^b f(t) dt.",
        "apTip": "This is the most frequently tested formula on the entire AP Calculus exam: Future Value = Initial Value + Accumulated Net Change."
      }
    ],
    "formulas": [
      {
        "name": "Riemann Sum Limit Definition of Definite Integral",
        "latex": "\\int_a^b f(x) dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x \\quad \\text{where } \\Delta x = \\frac{b - a}{n}",
        "explanation": "Converts infinite Riemann sums to definite integrals for instantaneous evaluation."
      },
      {
        "name": "Trapezoidal Rule Approximation",
        "latex": "\\text{Trap} = \\frac{\\Delta x}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + \\dots + 2f(x_{n-1}) + f(x_n)]",
        "explanation": "Average of Left and Right Riemann sums. For unequal subintervals, calculate each trapezoid individually: (b_i - a_i)/2 * (y_1 + y_2)."
      },
      {
        "name": "Leibniz Integral Derivative Rule (FTC 1 with Chain Rule)",
        "latex": "\\frac{d}{dx}\\left[\\int_{u(x)}^{v(x)} f(t) dt\\right] = f(v(x)) \\cdot v'(x) - f(u(x)) \\cdot u'(x)",
        "explanation": "Must apply the Chain Rule to non-linear upper and lower limits of integration."
      },
      {
        "name": "Integration by u-Substitution (Change of Variables)",
        "latex": "\\int f(g(x)) g'(x) dx = \\int f(u) du \\quad \\text{and} \\quad \\int_a^b f(g(x)) g'(x) dx = \\int_{g(a)}^{g(b)} f(u) du",
        "explanation": "When applying u-sub on definite integrals, always transform the limits of integration from x to u to avoid back-substitution."
      },
      {
        "name": "Standard Antiderivative Master Formulas",
        "latex": "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\; (n \\neq -1), \\quad \\int \\frac{1}{x} dx = \\ln|x| + C, \\quad \\int e^{kx} dx = \\frac{1}{k}e^{kx} + C, \\quad \\int \\frac{1}{1 + x^2} dx = \\arctan x + C",
        "explanation": "Always remember the absolute value inside ln|x| and the +C constant for indefinite integrals."
      }
    ],
    "sections": [
      {
        "heading": "1. Riemann Sum Approximations on Tabular Data (CED 6.2)",
        "content": "On AP Free Response Question 1 or 2, you are almost universally asked to compute a Riemann Sum from non-uniform table data:\n\n- **Left Riemann Sum (LRAM):** Uses left endpoint of each subinterval:\n  $$\\text{Area} \\approx \\sum (x_{i} - x_{i-1}) \\cdot f(x_{i-1})$$\n- **Right Riemann Sum (RRAM):** Uses right endpoint of each subinterval:\n  $$\\text{Area} \\approx \\sum (x_{i} - x_{i-1}) \\cdot f(x_{i})$$\n- **Midpoint Riemann Sum (MRAM):** Uses the midpoint of intervals (requires equal-width pairing of subintervals).\n- **Trapezoidal Rule:**\n  $$\\text{Area} \\approx \\sum (x_{i} - x_{i-1}) \\cdot \\frac{f(x_{i-1}) + f(x_{i})}{2}$$\n\n*Warning for Unequal Widths:* The standard formula $\\frac{\\Delta x}{2}[y_0 + 2y_1 + \\dots + y_n]$ applies **ONLY** when all subintervals have the exact same width $\\Delta x$. For data tables with varying time gaps, calculate each trapezoid area separately!"
      },
      {
        "heading": "2. Riemann Sum Over/Under Estimation Rules (CED 6.2)",
        "content": "How function characteristics govern Riemann sum errors:\n\n| Approximation Method | Function Behavior ($f$) | Overestimate vs. Underestimate |\n| :--- | :--- | :--- |\n| **Left Riemann Sum** | Strictly **Increasing** ($f' > 0$) | **Underestimate** (rectangles sit below curve) |\n| **Left Riemann Sum** | Strictly **Decreasing** ($f' < 0$) | **Overestimate** (rectangles stick above curve) |\n| **Right Riemann Sum** | Strictly **Increasing** ($f' > 0$) | **Overestimate** (rectangles stick above curve) |\n| **Right Riemann Sum** | Strictly **Decreasing** ($f' < 0$) | **Underestimate** (rectangles sit below curve) |\n| **Trapezoidal Sum** | Strictly **Concave Up** ($f'' > 0$) | **Overestimate** (trapezoid secants sit above curve) |\n| **Trapezoidal Sum** | Strictly **Concave Down** ($f'' < 0$) | **Underestimate** (trapezoid secants sit below curve) |\n\n*Key AP Exam Insight:* Left and Right sums depend **ONLY on whether $f$ is increasing or decreasing** (first derivative). Trapezoidal sums depend **ONLY on concavity** (second derivative)!"
      },
      {
        "heading": "3. Fundamental Theorem of Calculus Part 1 (Accumulation Functions) (CED 6.4)",
        "content": "Let $g(x) = \\int_a^x f(t) dt$. The Fundamental Theorem of Calculus states that integration and differentiation are inverse operations:\n$$g'(x) = f(x) \\quad \\text{and} \\quad g''(x) = f'(x)$$\n\n**Evaluating Function Values from a Graph of $f$:**\n- $g(a) = \\int_a^a f(t) dt = 0$.\n- $g(b) = \\int_a^b f(t) dt =$ Area of geometric shapes (triangles, rectangles, semicircles) between curve and horizontal axis.\n- **Regions ABOVE the $t$-axis count as POSITIVE area.**\n- **Regions BELOW the $t$-axis count as NEGATIVE area.**\n- **Reversing Limits of Integration:** $\\int_b^a f(t) dt = -\\int_a^b f(t) dt$. If you integrate backwards from right to left, flip the signs of all areas!"
      },
      {
        "heading": "4. Algebraic Integration Techniques (CED 6.9–6.10)",
        "content": "When standard power rules fail, deploy these algebraic strategies:\n\n1. **$u$-Substitution (Reverse Chain Rule):** Look for an inside function $u(x)$ whose derivative $u'(x)$ appears as a multiplying factor.\n   $$\\int 2x \\cos(x^2) dx \\implies u = x^2, du = 2x dx \\implies \\int \\cos u du = \\sin(x^2) + C$$\n2. **Polynomial Long Division (Improper Rational Functions):** If the degree of the numerator is greater than or equal to the degree of the denominator ($n \\ge d$), divide before integrating:\n   $$\\int \\frac{x^2 + 1}{x - 1} dx = \\int \\left(x + 1 + \\frac{2}{x - 1}\\right) dx = \\frac{1}{2}x^2 + x + 2\\ln|x - 1| + C$$\n3. **Completing the Square (Arctan Form):**\n   $$\\int \\frac{1}{x^2 + 6x + 10} dx = \\int \\frac{1}{(x + 3)^2 + 1} dx = \\arctan(x + 3) + C$$"
      },
      {
        "heading": "5. The Net Change Theorem in Contextual Modeling (CED 6.8)",
        "content": "The Net Change Theorem states:\n$$Q(b) = Q(a) + \\int_a^b Q'(t) dt$$\n**Typical AP Scenarios:**\n- **Water in a Tank:** $\\text{Volume at time } t = V(0) + \\int_0^t (\\text{Rate In} - \\text{Rate Out}) dt$.\n- **Particle Position:** $s(b) = s(a) + \\int_a^b v(t) dt$.\n- **Temperature Cooling:** $T(t) = T(0) + \\int_0^t T'(u) du$.\n\n*Essential AP Tip:* Always remember to add the INITIAL AMOUNT $Q(a)$! The integral $\\int_a^b Q'(t) dt$ only calculates the change, not the final total."
      },
      {
        "heading": "6. Riemann Sum Over/Under-Estimation Rules & Unequal Subintervals (CED 6.2-6.3)",
        "content": "Connecting analytical properties to numerical approximation bounds:\n\n* **Riemann Sum Approximation Bounds**:\n  * **Increasing Function ($f'(x) > 0$)**:\n    * Left Riemann Sum: **Underestimate**.\n    * Right Riemann Sum: **Overestimate**.\n  * **Decreasing Function ($f'(x) < 0$)**:\n    * Left Riemann Sum: **Overestimate**.\n    * Right Riemann Sum: **Underestimate**.\n  * **Concave Up Function ($f''(x) > 0$)**:\n    * Trapezoidal Sum: **Overestimate** (secant lines lie above the curve).\n    * Midpoint Riemann Sum: **Underestimate**.\n  * **Concave Down Function ($f''(x) < 0$)**:\n    * Trapezoidal Sum: **Underestimate** (secant chords cut below the curve).\n    * Midpoint Riemann Sum: **Overestimate**.\n* **Unequal Subinterval Calculations from Data Tables**:\n  * On AP FRQ Question 1, data tables almost always have **unequal step sizes** $\\Delta x_i = x_{i} - x_{i-1}$!\n  * You CANNOT factor out a common $\\Delta x$! You must compute each rectangle or trapezoid individually:\n    $$\\text{Trapezoid Approximation} = \\sum_{i=1}^n \\left(\\frac{f(x_{i-1}) + f(x_i)}{2}\\right) (x_i - x_{i-1})$$"
      },
      {
        "heading": "7. The Rate-In / Rate-Out Net Accumulation Model (CED 6.4-6.5)",
        "content": "The dominant template of AP Calculus FRQ Question 1:\n\n* **The General Accumulation Equation**:\n  $$A(t) = A(t_0) + \\int_{t_0}^t [R_{\\text{in}}(s) - R_{\\text{out}}(s)] \\, ds$$\n  * $A(t)$: Total quantity of substance in the system at time $t$.\n  * $A(t_0)$: Initial quantity at time $t_0$.\n  * $R_{\\text{in}}(t)$: Rate at which substance enters the system (e.g., liters/hour).\n  * $R_{\\text{out}}(t)$: Rate at which substance leaves the system.\n* **Critical Points of Accumulation**:\n  * By Fundamental Theorem of Calculus: $A'(t) = R_{\\text{in}}(t) - R_{\\text{out}}(t)$.\n  * Critical points occur when $A'(t) = 0 \\implies R_{\\text{in}}(t) = R_{\\text{out}}(t)$.\n  * Amount is **increasing** when $R_{\\text{in}}(t) > R_{\\text{out}}(t)$.\n  * Amount is **decreasing** when $R_{\\text{in}}(t) < R_{\\text{out}}(t)$.\n  * Absolute maximum/minimum must be evaluated using the **Candidates Test** (checking critical points and endpoints $t = 0, t = T$)."
      }
    ],
    "workedExamples": [
      {
        "title": "Applying FTC Part 1 with Chain Rule and Leibniz Rule",
        "topicRef": "CED 6.4 Accumulation Functions",
        "question": "Find $g'(x)$ if $g(x) = \\int_{2x}^{x^3} \\sqrt{1 + t^2} dt$.",
        "solutionSteps": [
          "Step 1: Apply the generalized Leibniz Rule: d/dx[\\int_{u(x)}^{v(x)} f(t) dt] = f(v(x))*v'(x) - f(u(x))*u'(x).",
          "Step 2: Identify terms: f(t) = \\sqrt{1 + t^2}, upper limit v(x) = x^3 (v'(x) = 3x^2), lower limit u(x) = 2x (u'(x) = 2).",
          "Step 3: Evaluate upper part: f(v(x))*v'(x) = \\sqrt{1 + (x^3)^2} \\cdot (3x^2) = 3x^2 \\sqrt{1 + x^6}.",
          "Step 4: Evaluate lower part: f(u(x))*u'(x) = \\sqrt{1 + (2x)^2} \\cdot (2) = 2 \\sqrt{1 + 4x^2}.",
          "Step 5: Subtract lower from upper: g'(x) = 3x^2 \\sqrt{1 + x^6} - 2 \\sqrt{1 + 4x^2}."
        ],
        "finalAnswer": "g'(x) = 3x^2 \\sqrt{1 + x^6} - 2 \\sqrt{1 + 4x^2}",
        "apScoringTip": "Students frequently forget the Chain Rule factor on the limits (e.g. omitting the 3x^2 and 2). Both derivative factors are mandatory."
      },
      {
        "title": "Trapezoidal Approximation on Unequal Intervals with Justification",
        "topicRef": "CED 6.2 Riemann Sums",
        "question": "The rate of oil consumption R(t) in barrels/day is measured: R(0) = 12, R(3) = 18, R(7) = 24, R(10) = 32. Use a trapezoidal sum to approximate total consumption over [0, 10]. If R is known to be concave up (R'' > 0), is this an overestimate or underestimate?",
        "solutionSteps": [
          "Step 1: Check interval widths: [0, 3] has width 3; [3, 7] has width 4; [7, 10] has width 3. Intervals are unequal, so calculate each trapezoid separately.",
          "Step 2: Trapezoid 1: (3/2) * (12 + 18) = 1.5 * 30 = 45.",
          "Step 3: Trapezoid 2: (4/2) * (18 + 24) = 2 * 42 = 84.",
          "Step 4: Trapezoid 3: (3/2) * (24 + 32) = 1.5 * 56 = 84.",
          "Step 5: Total sum: 45 + 84 + 84 = 213 barrels.",
          "Step 6: Justification: Since R''(t) > 0 on [0, 10], the function is concave up. The secant line connecting points on a concave up curve lies above the curve, so the trapezoidal sum is an OVERESTIMATE."
        ],
        "finalAnswer": "Approx = 213 barrels; Overestimate because R(t) is concave up (R'' > 0)",
        "apScoringTip": "Remember to cite CONCAVITY when justifying trapezoidal errors. Mentioning that R is increasing will not earn the error justification point for a trapezoidal sum."
      }
    ],
    "diagrams": [
      {
        "id": "ftc_accumulation_graph",
        "title": "Accumulation Function g(x) = Integral from a to x of f(t) dt",
        "subtitle": "Connecting Area Under Curve to Slopes of g(x)",
        "type": "accumulation_integral",
        "description": "As x advances, the net signed area under f(t) accumulates, showing how zeros of f produce extrema in g, and peaks of f produce inflection points in g.",
        "takeaway": "g(x) is the area, g'(x) = f(x) is the height, g''(x) = f'(x) is the slope of the graph of f."
      }
    ],
    "commonTraps": [
      "Forgetting the initial condition in Net Change problems: Q(b) = Q(a) + \\int_a^b Q'(t) dt. Omitting Q(a) is the #1 mistake on AP FRQ #1!",
      "Applying the uniform trapezoidal formula when table subintervals have different widths (\\Delta x is not constant).",
      "Citing \"increasing\" instead of \"concave up\" for trapezoidal error justifications. Trapezoids depend strictly on concavity!",
      "Integrating backwards without flipping signs: \\int_5^0 f(t) dt = -\\int_0^5 f(t) dt."
    ],
    "cramSheet": [
      "FTC 1: d/dx[\\int_a^x f(t) dt] = f(x). Chain Rule: multiply by limit derivatives.",
      "FTC 2: \\int_a^b f'(x) dx = f(b) - f(a).",
      "Net Change: Total = Initial + \\int (Rate In - Rate Out) dt.",
      "Trapezoid Error: Concave Up => Overestimate; Concave Down => Underestimate.",
      "Left Sum: Increasing => Under; Decreasing => Over. Right Sum: Increasing => Over; Decreasing => Under."
    ]
  },
  {
    "unitId": "u7",
    "unitNumber": 7,
    "title": "Differential Equations",
    "examWeight": "6%–12% of AP Exam",
    "bigIdea": "Differential equations model dynamic systems where the rate of change of a quantity depends on the quantity itself, solved geometrically with slope fields and analytically by separation of variables.",
    "keyTheorems": [
      {
        "name": "Separation of Variables Existence Theorem",
        "conditions": "A first-order differential equation can be factored into dy/dx = g(x) * h(y) where h(y) != 0.",
        "conclusion": "The equation can be rewritten as (1/h(y)) dy = g(x) dx and integrated directly on both sides.",
        "apTip": "Separation of variables is tested on almost every single AP Calculus AB Free Response section (Question 4, 5, or 6, worth 5 to 6 points). Missing the initial separation step forfeits ALL subsequent points!"
      },
      {
        "name": "Exponential Growth and Decay Theorem",
        "conditions": "The rate of change of a quantity y is directly proportional to the amount present: dy/dt = k*y.",
        "conclusion": "The general solution is y(t) = y_0 * e^(k*t), where y_0 = y(0) is the initial quantity and k is the continuous growth/decay constant.",
        "apTip": "If k > 0, it represents exponential growth (e.g. bacteria, compound interest); if k < 0, it represents exponential decay (e.g. radioactive isotopes, drug clearance)."
      }
    ],
    "formulas": [
      {
        "name": "Separation of Variables Form",
        "latex": "\\frac{dy}{dx} = g(x)h(y) \\implies \\int \\frac{1}{h(y)} dy = \\int g(x) dx + C",
        "explanation": "Must introduce the constant + C immediately upon integration, NOT at the very end."
      },
      {
        "name": "Exponential Growth / Decay Law",
        "latex": "\\frac{dy}{dt} = ky \\iff y = C e^{kt}",
        "explanation": "When dy/dt = k(y - T_a), it represents Newton's Law of Cooling with ambient temperature T_a."
      },
      {
        "name": "Slope Field Tangent Line Equation",
        "latex": "m = \\left.\\frac{dy}{dx}\\right|_{(x, y)} = f(x, y)",
        "explanation": "At each grid point (x, y), draw a short line segment with slope m."
      }
    ],
    "sections": [
      {
        "heading": "1. Reading and Sketching Slope Fields (CED 7.3–7.4)",
        "content": "A slope field is a visual representation of all possible solutions to a differential equation $\\frac{dy}{dx} = f(x, y)$:\n\n**How to Sketch a Slope Field:**\n1. Pick each designated grid point $(x, y)$.\n2. Calculate the numerical value of $\\frac{dy}{dx}$.\n3. Draw a short, accurate tangent segment through the point with that slope.\n\n**Key Diagnostic Signposts to Identify Equations:**\n- **Slopes depend ONLY on $x$ (e.g., $\\frac{dy}{dx} = x - 1$):**\n  - Slopes are identical in any vertical column (same $x$-coordinate).\n  - Slopes are horizontal ($m = 0$) along vertical line $x = 1$.\n- **Slopes depend ONLY on $y$ (e.g., $\\frac{dy}{dx} = 2 - y$):**\n  - Slopes are identical in any horizontal row (same $y$-coordinate).\n  - Slopes are horizontal ($m = 0$) along horizontal line $y = 2$ (equilibrium solution).\n- **Slopes depend on BOTH $x$ and $y$ (e.g., $\\frac{dy}{dx} = -\\frac{x}{y}$):**\n  - Slopes are 0 along the $y$-axis ($x = 0$, horizontal tangents).\n  - Slopes are undefined (vertical tangents) along the $x$-axis ($y = 0$)."
      },
      {
        "heading": "2. The Separation of Variables 4-Step Protocol (CED 7.6–7.7)",
        "content": "This is the highest-value procedure on the entire AP Free Response exam:\n\n1. **Step 1: Separate the Variables (1 Point)**\n   - Move all terms involving $y$ and $dy$ to the left side, and all terms involving $x$ and $dx$ to the right side (using multiplication or division only, never addition or subtraction):\n     $$\\frac{1}{h(y)} dy = g(x) dx$$\n   - *CRITICAL:* If you do not correctly separate variables, you score **0 out of 5** on the entire question!\n2. **Step 2: Antidifferentiate Both Sides (2 Points)**\n   - Integrate each side separately:\n     $$\\int \\frac{1}{h(y)} dy = \\int g(x) dx$$\n   - **MANDATORY:** Add the constant $+ C$ to the $x$-side **IMMEDIATELY** upon integrating!\n3. **Step 3: Solve for the Constant $C$ using the Initial Condition (1 Point)**\n   - Substitute the given initial condition $(x_0, y_0)$ right away while the equation is still simple:\n     $$G(y_0) = F(x_0) + C \\implies C = G(y_0) - F(x_0)$$\n4. **Step 4: Solve Explicitly for $y = f(x)$ (1 Point)**\n   - Isolate $y$ algebraically. When taking a square root ($y = \\pm\\sqrt{\\dots}$), choose the sign ($+$ or $-$) that matches the initial condition $y_0$!"
      },
      {
        "heading": "3. Exponential Growth & Newton's Law of Cooling (CED 7.8)",
        "content": "Whenever the rate of change is proportional to the difference between a quantity and a constant:\n- **Radioactive Decay:** $\\frac{dy}{dt} = -k y \\implies y(t) = y_0 e^{-kt}$.\n  - Half-life $t_{1/2}$: Set $y = \\frac{1}{2}y_0 \\implies \\frac{1}{2} = e^{-kt_{1/2}} \\implies t_{1/2} = \\frac{\\ln 2}{k}$.\n- **Newton's Law of Cooling:** $\\frac{dT}{dt} = -k(T - T_a)$, where $T_a$ is the ambient temperature.\n  - Separating variables yields: $\\ln|T - T_a| = -kt + C \\implies T(t) = T_a + (T_0 - T_a)e^{-kt}$."
      },
      {
        "heading": "5. The Official AP Separation of Variables 5-Point Scoring Rubric (CED 7.6-7.7)",
        "content": "Step-by-step master guide to securing all 5 points on the classic differential equation FRQ:\n\n* **The Official College Board 5-Point Rubric Breakdown**:\n  * **Point 1 (Separation of Variables)**: Collect all $y$ terms with $dy$ and all $x$ terms with $dx$ (e.g., $\\frac{1}{y}dy = k dx$). **CRITICAL**: If you fail to separate variables, you earn **0 out of 5 points**, even if the rest of your math is correct!\n  * **Point 2 & 3 (Antiderivatives)**: Integrate both sides correctly (e.g., $\\ln|y| = kx$).\n  * **Point 4 (Constant of Integration $+C$ & Initial Condition)**: Write $+C$ immediately upon antidifferentiation, and substitute the given initial point $(x_0, y_0)$ to solve for $C$.\n  * **Point 5 (Explicit Solution for $y$)**: Algebraically isolate $y = f(x)$, ensuring correct absolute value branch resolution.\n* **Resolving Absolute Value Branches**:\n  * $\\ln|y| = kx + C \\implies |y| = e^{kx + C} = e^C e^{kx} = A e^{kx}$.\n  * If initial condition has $y(0) > 0$, then $y = +A e^{kx}$.\n  * If initial condition has $y(0) < 0$, then $y = -A e^{kx}$."
      },
      {
        "heading": "6. Slope Fields Analysis & Solution Curve Trajectories (CED 7.3-7.4)",
        "content": "Visualizing differential equations without analytical solutions:\n\n* **Constructing Slope Fields**:\n  * For a given differential equation $\\frac{dy}{dx} = f(x, y)$, calculate slope value at each designated grid point $(x, y)$ and draw a short line segment with that slope.\n  * Slopes with value 0 must be drawn strictly horizontal.\n  * Undefined slopes (division by zero) must NOT have a line segment drawn.\n* **Analyzing Patterns in Slope Fields**:\n  * If slopes depend **only on $x$** (e.g., $dy/dx = 2x$), slopes are identical along any **vertical column**.\n  * If slopes depend **only on $y$** (e.g., $dy/dx = y - 1$), slopes are identical along any **horizontal row**.\n  * Equilibrium solutions occur where $dy/dx = 0$ along a horizontal line (e.g., $y = 1$)."
      }
    ],
    "workedExamples": [
      {
        "title": "Separation of Variables with Initial Condition Protocol",
        "topicRef": "CED 7.6–7.7 Finding Particular Solutions",
        "question": "Find the particular solution $y = f(x)$ to the differential equation $\\frac{dy}{dx} = \\frac{2x}{y}$ with initial condition $f(1) = -2$. State the domain of the solution.",
        "solutionSteps": [
          "Step 1 (Separate variables): y dy = 2x dx.",
          "Step 2 (Integrate both sides): \\int y dy = \\int 2x dx ==> (1/2)y^2 = x^2 + C_1 ==> y^2 = 2x^2 + C.",
          "Step 3 (Solve for C using initial condition x = 1, y = -2): (-2)^2 = 2(1)^2 + C ==> 4 = 2 + C ==> C = 2.",
          "Step 4 (Substitute C back): y^2 = 2x^2 + 2.",
          "Step 5 (Solve for y): y = \\pm\\sqrt{2x^2 + 2}. Since f(1) = -2 is negative, we MUST choose the negative branch: y = -\\sqrt{2x^2 + 2}.",
          "Step 6 (Domain): Since 2x^2 + 2 > 0 for all real x, the domain is all real numbers (-inf, inf)."
        ],
        "finalAnswer": "y = -\\sqrt{2x^2 + 2}",
        "apScoringTip": "Remember to choose the NEGATIVE square root sign! Leaving y = \\pm\\sqrt{2x^2 + 2} will lose the final answer point because a function cannot have \\pm."
      }
    ],
    "diagrams": [
      {
        "id": "slope_field_solution_curve",
        "title": "Slope Field with Particular Solution Curve",
        "subtitle": "Following the Streamlines of dy/dx",
        "type": "slope_field",
        "description": "Grid of tangent segments showing how initial condition (x_0, y_0) acts as an anchor, determining a single continuous trajectory through the field.",
        "takeaway": "A solution curve must pass through the initial condition and follow the flow of slopes without crossing vertical asymptotes."
      }
    ],
    "commonTraps": [
      "The \"+C\" Disaster: Forgetting to add +C immediately upon integrating, or adding +C at the very end after solving for y. (Immediate loss of 3 points out of 5!).",
      "Sign error in square roots: Writing y = \\pm\\sqrt{\\dots} instead of choosing the correct sign matching the initial condition.",
      "Separation algebra failure: Trying to separate dy/dx = x + y by writing dy - y = x dx. Separation must be multiplicative/divisive!"
    ],
    "cramSheet": [
      "Separate variables: g(y) dy = f(x) dx. Integrate immediately: \\int g(y) dy = \\int f(x) dx + C.",
      "Plug in initial condition immediately to find C.",
      "Exponential Growth: dy/dt = ky <=> y = C*e^(kt).",
      "Horizontal rows have same slope => dy/dx depends only on y.",
      "Vertical columns have same slope => dy/dx depends only on x."
    ]
  },
  {
    "unitId": "u8",
    "unitNumber": 8,
    "title": "Applications of Integration",
    "examWeight": "10%–15% of AP Exam",
    "bigIdea": "Definite integrals measure spatial geometry and accumulated physical change, determining the average value of varying phenomena, the area between intersecting curves, and the volumes of three-dimensional solids.",
    "keyTheorems": [
      {
        "name": "Mean Value Theorem for Integrals",
        "conditions": "f(x) is continuous on the closed interval [a, b].",
        "conclusion": "There exists at least one number c in (a, b) such that f(c) = f_avg = \\frac{1}{b - a} \\int_a^b f(x) dx, meaning \\int_a^b f(x) dx = f(c)(b - a).",
        "apTip": "Geometrically, the area under the curve equals the area of a rectangle with width (b - a) and height f(c)."
      }
    ],
    "formulas": [
      {
        "name": "Average Value of a Function on [a, b]",
        "latex": "f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x) dx",
        "explanation": "Represents the continuous mean height of the function over the interval. Do not confuse with Average Rate of Change!"
      },
      {
        "name": "Displacement vs. Total Distance Traveled",
        "latex": "\\text{Displacement} = \\int_{t_1}^{t_2} v(t) dt \\quad | \\quad \\text{Total Distance} = \\int_{t_1}^{t_2} |v(t)| dt",
        "explanation": "Displacement is net change in position s(t_2) - s(t_1); Total Distance accounts for all movement regardless of direction."
      },
      {
        "name": "Area Between Two Curves",
        "latex": "A = \\int_a^b [f(x) - g(x)] dx \\quad \\text{(Top - Bottom)} \\quad \\text{or} \\quad A = \\int_c^d [x_R(y) - x_L(y)] dy \\quad \\text{(Right - Left)}",
        "explanation": "Find intersection points to determine limits of integration a and b."
      },
      {
        "name": "Volume with Known Cross Sections",
        "latex": "V = \\int_a^b A(x) dx \\quad \\text{where } s(x) = f(x) - g(x) \\text{ is the base width}",
        "explanation": "Square: A = s^2; Semicircle: A = (pi/8)s^2; Equilateral Triangle: A = (sqrt(3)/4)s^2; Isosceles Right Triangle (hypotenuse on base): A = (1/4)s^2."
      },
      {
        "name": "Volume of Revolution: Disk Method (No Hole)",
        "latex": "V = \\pi \\int_a^b [R(x)]^2 dx \\quad \\text{or} \\quad V = \\pi \\int_c^d [R(y)]^2 dy",
        "explanation": "Radius R is distance from the curve to the axis of revolution."
      },
      {
        "name": "Volume of Revolution: Washer Method (Hollow Interior)",
        "latex": "V = \\pi \\int_a^b \\left( [R(x)]^2 - [r(x)]^2 \\right) dx \\quad \\text{(Outer Radius } R, \\text{ Inner Radius } r)",
        "explanation": "CRITICAL: Integrate difference of squares [R^2 - r^2], NOT [R - r]^2!"
      }
    ],
    "sections": [
      {
        "heading": "1. Average Value vs. Average Rate of Change (CED 8.1)",
        "content": "The most frequent vocabulary trap on the AP Exam:\n\n| Concept | What It Computes | Governing Formula | Key Indicator in Problem |\n| :--- | :--- | :--- | :--- |\n| **Average Value** | The average **height** or **amount** of a function | $f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x) dx$ | *\"Find the average temperature...\"* |\n| **Average Rate of Change** | The average **slope** or **rate** between two points | $\\text{AROC} = \\frac{f(b) - f(a)}{b - a}$ | *\"Find the average rate of change of temperature...\"* |\n\n*Mnemonic:* If asked for the average of $f$, you integrate $f$. If asked for the average rate of change of $f$, you find the slope of $f$!"
      },
      {
        "heading": "2. Particle Motion: Displacement vs. Total Distance (CED 8.2)",
        "content": "For a particle with velocity $v(t)$:\n- **Net Displacement on $[t_1, t_2]$:**\n  $$\\Delta s = s(t_2) - s(t_1) = \\int_{t_1}^{t_2} v(t) dt$$\n- **Current Position at time $t_2$:**\n  $$s(t_2) = s(t_1) + \\int_{t_1}^{t_2} v(t) dt$$\n- **Total Distance Traveled on $[t_1, t_2]$:**\n  $$\\text{Distance} = \\int_{t_1}^{t_2} |v(t)| dt$$\n\n*Analytical Calculation without a Calculator:* To compute $\\int |v(t)| dt$ by hand, find all times where $v(t) = 0$, split the integral into subintervals where $v(t) > 0$ and $v(t) < 0$, and negate the negative regions:\n$$\\text{Total Distance} = \\left|\\int_{t_1}^{t_c} v(t) dt\\right| + \\left|\\int_{t_c}^{t_2} v(t) dt\\right|$$"
      },
      {
        "heading": "3. Area Between Two Curves (CED 8.4–8.5)",
        "content": "To find the area bounded by two intersecting curves:\n1. **Vertical Slices (integrate with respect to $x$):**\n   $$A = \\int_a^b [y_{\\text{top}} - y_{\\text{bottom}}] dx$$\n   Use when functions are easily expressed as $y = f(x)$.\n2. **Horizontal Slices (integrate with respect to $y$):**\n   $$A = \\int_c^d [x_{\\text{right}} - x_{\\text{left}}] dy$$\n   Use when functions are given as $x = g(y)$ or when vertical lines cross curves multiple times.\n3. **Multiple Crossing Regions:** If curves cross at $x = c \\in (a, b)$, split into two integrals:\n   $$A = \\int_a^c [f(x) - g(x)] dx + \\int_c^b [g(x) - f(x)] dx$$"
      },
      {
        "heading": "4. Volumes with Known Geometric Cross Sections (CED 8.7)",
        "content": "A 3D solid rests on a flat base bounded by curves $y_1$ and $y_2$. The slice thickness is $dx$, and the cross-sectional base length is $s(x) = y_{\\text{top}} - y_{\\text{bottom}}$:\n\n$$V = \\int_a^b A(x) dx$$\n\n| Cross Section Shape | Area Formula $A(x)$ in terms of Base $s(x)$ | Integral Volume Formula |\n| :--- | :--- | :--- |\n| **Square** | $A = s^2$ | $V = \\int_a^b [f(x) - g(x)]^2 dx$ |\n| **Semicircle** (diameter on base) | $A = \\frac{1}{2}\\pi r^2 = \\frac{1}{2}\\pi \\left(\\frac{s}{2}\\right)^2 = \\frac{\\pi}{8}s^2$ | $V = \\frac{\\pi}{8}\\int_a^b [f(x) - g(x)]^2 dx$ |\n| **Equilateral Triangle** | $A = \\frac{\\sqrt{3}}{4}s^2$ | $V = \\frac{\\sqrt{3}}{4}\\int_a^b [f(x) - g(x)]^2 dx$ |\n| **Isosceles Right Triangle** (leg on base) | $A = \\frac{1}{2}s^2$ | $V = \\frac{1}{2}\\int_a^b [f(x) - g(x)]^2 dx$ |\n| **Isosceles Right Triangle** (hypotenuse on base) | $A = \\frac{1}{4}s^2$ | $V = \\frac{1}{4}\\int_a^b [f(x) - g(x)]^2 dx$ |\n| **Rectangle with Height $h$** | $A = s \\cdot h$ | $V = \\int_a^b [f(x) - g(x)] \\cdot h(x) dx$ |"
      },
      {
        "heading": "5. Solids of Revolution: Disk vs. Washer Method (CED 8.8)",
        "content": "When revolving a 2D region around an axis:\n\n- **Disk Method (Solid Cylinder, No Hole):**\n  $$V = \\pi \\int_a^b [R(x)]^2 dx$$\n  Where radius $R(x) = |\\text{Curve} - \\text{Axis}|$.\n\n- **Washer Method (Hollow Solid with Hole):**\n  $$V = \\pi \\int_a^b \\left( [R_{\\text{outer}}(x)]^2 - [r_{\\text{inner}}(x)]^2 \\right) dx$$\n  - $R_{\\text{outer}}$ is the distance from the **farthest boundary** to the axis of revolution.\n  - $r_{\\text{inner}}$ is the distance from the **closest boundary** to the axis of revolution.\n\n**Revolving Around Arbitrary Lines (The Distance Formula):**\n- Revolve around $y = k$ (horizontal line below region): $R = y_{\\text{top}} - k, r = y_{\\text{bottom}} - k$.\n- Revolve around $y = k$ (horizontal line above region): $R = k - y_{\\text{bottom}}, r = k - y_{\\text{top}}$.\n- Revolve around $x = h$ (vertical line to left): $R = x_{\\text{right}} - h, r = x_{\\text{left}} - h$.\n- Revolve around $x = h$ (vertical line to right): $R = h - x_{\\text{left}}, r = h - x_{\\text{right}}$."
      },
      {
        "heading": "6. Solids of Revolution: Disk, Washer & Cross-Sections Matrix (CED 8.7-8.12)",
        "content": "Comprehensive volume integration reference formulas:\n\n* **Volumes with Known Cross-Sections (Base in $xy$-plane)**:\n  $$V = \\int_a^b A(x) \\, dx$$\n  * Let side length of cross-section be $s(x) = y_{\\text{top}} - y_{\\text{bottom}}$:\n  * **Squares**: $A(x) = [s(x)]^2$\n  * **Semicircles**: $A(x) = \\frac{\\pi}{8} [s(x)]^2$\n  * **Equilateral Triangles**: $A(x) = \\frac{\\sqrt{3}}{4} [s(x)]^2$\n  * **Isosceles Right Triangles (Leg on Base)**: $A(x) = \\frac{1}{2} [s(x)]^2$\n  * **Isosceles Right Triangles (Hypotenuse on Base)**: $A(x) = \\frac{1}{4} [s(x)]^2$\n* **Solids of Revolution (Disk & Washer Methods)**:\n  * **Revolution about Horizontal Axis $y = k$**:\n    $$V = \\pi \\int_a^b \\left( [R(x)]^2 - [r(x)]^2 \\right) \\, dx$$\n    * Outer radius: $R(x) = |y_{\\text{far}} - k|$\n    * Inner radius: $r(x) = |y_{\\text{near}} - k|$\n  * **Revolution about Vertical Axis $x = h$**:\n    $$V = \\pi \\int_c^d \\left( [R(y)]^2 - [r(y)]^2 \\right) \\, dy$$"
      },
      {
        "heading": "7. Arc Length & Physical Accumulation Integrals (CED 8.13)",
        "content": "Calculating path length and work integrals:\n\n* **Arc Length Formula of a Smooth Curve**:\n  $$L = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx = \\int_c^d \\sqrt{1 + [g'(y)]^2} \\, dy$$\n  * Derived from Pythagorean theorem: $dL = \\sqrt{dx^2 + dy^2} = \\sqrt{1 + (dy/dx)^2} dx$.\n* **Work Integrals for Pumping Liquids**:\n  * Pumping liquid of weight density $\\rho g$ out the top of a tank of height $H$:\n    $$W = \\int_{y_{\\min}}^{y_{\\max}} (\\text{Force on slice}) \\cdot (\\text{Distance slice travels}) = \\int_{y_{\\min}}^{y_{\\max}} \\rho g A(y) (H - y) \\, dy$$"
      }
    ],
    "workedExamples": [
      {
        "title": "Washer Method Revolved Around an Offset Horizontal Line y = -1",
        "topicRef": "CED 8.8 Solids of Revolution",
        "question": "Find the volume of the solid generated when the region bounded by $y = \\sqrt{x}$, the horizontal line $y = 2$, and the $y$-axis is revolved around the line $y = -1$.",
        "solutionSteps": [
          "Step 1: Sketch region and find intersection: y = \\sqrt{x} intersects y = 2 at x = 4. Region extends from x = 0 to x = 4.",
          "Step 2: Identify top and bottom curves: y_{top} = 2 and y_{bottom} = \\sqrt{x}.",
          "Step 3: Axis of revolution is y = -1 (below the region).",
          "Step 4: Find outer radius R(x): Distance from axis y = -1 to top curve y = 2: R(x) = 2 - (-1) = 3.",
          "Step 5: Find inner radius r(x): Distance from axis y = -1 to bottom curve y = \\sqrt{x}: r(x) = \\sqrt{x} - (-1) = \\sqrt{x} + 1.",
          "Step 6: Set up Washer Volume Integral: V = \\pi \\int_0^4 [R(x)^2 - r(x)^2] dx = \\pi \\int_0^4 [3^2 - (\\sqrt{x} + 1)^2] dx.",
          "Step 7: Expand integrand: 9 - (x + 2\\sqrt{x} + 1) = 8 - x - 2x^{1/2}.",
          "Step 8: Integrate: \\pi [8x - (1/2)x^2 - (4/3)x^{3/2}] from 0 to 4.",
          "Step 9: Evaluate: \\pi [8(4) - (1/2)(16) - (4/3)(8)] = \\pi [32 - 8 - 32/3] = \\pi [24 - 32/3] = \\pi [72/3 - 32/3] = 40\\pi / 3."
        ],
        "finalAnswer": "V = 40\\pi / 3",
        "apScoringTip": "The most common Washer trap is squaring the difference: \\pi \\int (R - r)^2 dx. This scores 0 points! It must strictly be \\pi \\int (R^2 - r^2) dx."
      },
      {
        "title": "Volume with Equilateral Triangle Cross Sections",
        "topicRef": "CED 8.7 Cross Sections",
        "question": "The base of a solid is the region bounded by $y = x^2$ and $y = 4$. Cross sections perpendicular to the $y$-axis are equilateral triangles. Set up and evaluate the integral for volume.",
        "solutionSteps": [
          "Step 1: Cross sections are perpendicular to the y-axis, so integrate with respect to y from y = 0 to y = 4.",
          "Step 2: Solve curves for x in terms of y: y = x^2 ==> x = \\pm\\sqrt{y}. Right curve is x = +\\sqrt{y}, left curve is x = -\\sqrt{y}.",
          "Step 3: Base length s(y) = x_{right} - x_{left} = \\sqrt{y} - (-sqrt{y}) = 2\\sqrt{y}.",
          "Step 4: Area of an equilateral triangle with side s: A(y) = (\\sqrt{3}/4) * s^2 = (\\sqrt{3}/4) * (2\\sqrt{y})^2 = (\\sqrt{3}/4) * (4y) = \\sqrt{3} * y.",
          "Step 5: Set up volume integral: V = \\int_0^4 A(y) dy = \\int_0^4 \\sqrt{3} y dy.",
          "Step 6: Integrate: \\sqrt{3} * [(1/2)y^2] from 0 to 4 = \\sqrt{3} * [(1/2)(16) - 0] = 8\\sqrt{3}."
        ],
        "finalAnswer": "V = 8\\sqrt{3}",
        "apScoringTip": "Notice the slicing direction: \"perpendicular to the y-axis\" requires integration with respect to y. Integrating w.r.t x loses the setup points."
      }
    ],
    "diagrams": [
      {
        "id": "washer_cross_section_disk",
        "title": "Washer vs. Disk Revolution Geometry",
        "subtitle": "Outer Radius R(x) and Inner Radius r(x)",
        "type": "washer_geometry",
        "description": "Rotating around an offset axis creates a circular donut cross-section of area pi*(R^2 - r^2), integrated along the axis of revolution.",
        "takeaway": "R is distance from axis to outer curve; r is distance from axis to inner curve."
      }
    ],
    "commonTraps": [
      "Writing \\pi \\int (R - r)^2 dx instead of \\pi \\int (R^2 - r^2) dx for the Washer Method. This is the #1 algebraic error on volume FRQs!",
      "Confusing Average Value (\\frac{1}{b-a}\\int f dx) with Average Rate of Change (\\frac{f(b)-f(a)}{b-a}).",
      "Confusing Displacement (\\int v dt) with Total Distance (\\int |v| dt).",
      "Integrating with respect to the wrong variable when cross sections are perpendicular to the y-axis (must integrate dy, not dx!)."
    ],
    "cramSheet": [
      "Average Value: f_avg = \\frac{1}{b - a} \\int_a^b f(x) dx.",
      "Total Distance = \\int_{t_1}^{t_2} |v(t)| dt; Displacement = \\int_{t_1}^{t_2} v(t) dt.",
      "Area: \\int (y_top - y_bottom) dx or \\int (x_right - x_left) dy.",
      "Cross sections: Square s^2, Semicircle (\\pi/8)s^2, Equilateral (\\sqrt{3}/4)s^2.",
      "Washer: V = \\pi \\int (R^2 - r^2) dx. Disk: V = \\pi \\int R^2 dx."
    ]
  },
  {
    "unitId": "u9",
    "unitNumber": 9,
    "title": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
    "examWeight": "11%–12% of AP Exam (BC Exclusive)",
    "bigIdea": "Parametric equations, planar vectors, and polar coordinates liberate calculus from Cartesian function restrictions, modeling multi-dimensional motion, curved trajectories, and rotational angular geometry.",
    "keyTheorems": [
      {
        "name": "Second Derivative of Parametric Curves Theorem",
        "conditions": "x(t) and y(t) are twice-differentiable with x'(t) != 0.",
        "conclusion": "\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left[\\frac{dy}{dx}\\right]}{\\frac{dx}{dt}} = \\frac{\\frac{d}{dt}[y'(t)/x'(t)]}{x'(t)}.",
        "apTip": "THE #1 PARAMETRIC TRAP ON THE AP BC EXAM: d^2y/dx^2 is NOT y''(t) / x''(t)! You MUST differentiate dy/dx with respect to t, and then divide by dx/dt."
      },
      {
        "name": "Planar Vector Motion Speed & Distance Theorem",
        "conditions": "A particle moves along a curve with position vector r(t) = <x(t), y(t)> and velocity v(t) = <x'(t), y'(t)>.",
        "conclusion": "Instantaneous Speed is the vector magnitude ||v(t)|| = \\sqrt{(x'(t))^2 + (y'(t))^2}. Total Distance Traveled on [t_1, t_2] is \\int_{t_1}^{t_2} \\sqrt{(x'(t))^2 + (y'(t))^2} dt.",
        "apTip": "Do not confuse Displacement vector r(t_2) - r(t_1) with scalar Total Distance Traveled \\int ||v(t)|| dt!"
      }
    ],
    "formulas": [
      {
        "name": "Parametric First and Second Derivatives",
        "latex": "\\frac{dy}{dx} = \\frac{y'(t)}{x'(t)} \\quad \\text{and} \\quad \\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left[\\frac{dy}{dx}\\right]}{x'(t)}",
        "explanation": "Slope of tangent line dy/dx and concavity d^2y/dx^2 for parametric curves."
      },
      {
        "name": "Parametric Arc Length / Total Distance Traveled",
        "latex": "L = \\int_{t_1}^{t_2} \\sqrt{(x'(t))^2 + (y'(t))^2} dt",
        "explanation": "Computes the actual perimeter path length traced out by a moving object."
      },
      {
        "name": "Vector Kinematics Relationships",
        "latex": "\\mathbf{r}(t) = \\langle x(t), y(t) \\rangle, \\quad \\mathbf{v}(t) = \\langle x'(t), y'(t) \\rangle, \\quad \\mathbf{a}(t) = \\langle x''(t), y''(t) \\rangle, \\quad \\text{Speed} = ||\\mathbf{v}(t)||",
        "explanation": "Differentiate component-wise. Position at time t: x(t) = x(t_0) + \\int_{t_0}^t x'(u) du and y(t) = y(t_0) + \\int_{t_0}^t y'(u) du."
      },
      {
        "name": "Polar to Cartesian Coordinate Transformations",
        "latex": "x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad r^2 = x^2 + y^2, \\quad \\tan\\theta = \\frac{y}{x}",
        "explanation": "Converts polar curves r = f(\\theta) into parametric coordinates with parameter \\theta."
      },
      {
        "name": "Slope of a Polar Curve dy/dx",
        "latex": "\\frac{dy}{dx} = \\frac{\\frac{dy}{d\\theta}}{\\frac{dx}{d\\theta}} = \\frac{r'(\\theta)\\sin\\theta + r(\\theta)\\cos\\theta}{r'(\\theta)\\cos\\theta - r(\\theta)\\sin\\theta}",
        "explanation": "Derived by applying product rule to x = r*cos(\\theta) and y = r*sin(\\theta). Do NOT confuse dy/dx with dr/d\\theta!"
      },
      {
        "name": "Area of a Polar Region Bounded by r = f(\\theta)",
        "latex": "A = \\frac{1}{2} \\int_\\alpha^\\beta [r(\\theta)]^2 d\\theta",
        "explanation": "Calculates area swept out by radial rays from \\theta = \\alpha to \\theta = \\beta."
      },
      {
        "name": "Area Between Two Polar Curves",
        "latex": "A = \\frac{1}{2} \\int_\\alpha^\\beta \\left( [r_{\\text{outer}}(\\theta)]^2 - [r_{\\text{inner}}(\\theta)]^2 \\right) d\\theta",
        "explanation": "Must square the individual radii BEFORE subtracting: r_outer^2 - r_inner^2, NOT (r_outer - r_inner)^2!"
      }
    ],
    "sections": [
      {
        "heading": "1. Parametric Derivatives & The Infamous d²y/dx² Trap (CED 9.1–9.2)",
        "content": "Given parametric equations $x = f(t)$ and $y = g(t)$:\n- **First Derivative (Slope of Tangent Line):**\n  $$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{y'(t)}{x'(t)} \\quad (\\text{provided } x'(t) \\neq 0)$$\n- **Second Derivative (Concavity):**\n  $$\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left[\\frac{dy}{dx}\\right] = \\frac{\\frac{d}{dt}\\left[\\frac{dy}{dx}\\right]}{\\frac{dx}{dt}}$$\n\n*THE DANGEROUS MISTAKE:* Students constantly calculate $\\frac{y''(t)}{x''(t)}$.\nThis is completely invalid! To find $\\frac{d^2y}{dx^2}$:\n1. Compute $\\frac{dy}{dx}$.\n2. Differentiate $\\frac{dy}{dx}$ with respect to $t$.\n3. **DIVIDE by $x'(t)$** one more time!"
      },
      {
        "heading": "2. Vector-Valued Motion on the AP Exam (CED 9.3)",
        "content": "On AP Calculus BC Free Response Question 1 or 2, a particle moves in the $xy$-plane with position $\\mathbf{r}(t) = \\langle x(t), y(t) \\rangle$:\n\n- **Velocity Vector:** $\\mathbf{v}(t) = \\langle x'(t), y'(t) \\rangle$\n- **Speed (Scalar):** $|\\mathbf{v}(t)| = \\sqrt{(x'(t))^2 + (y'(t))^2}$\n- **Acceleration Vector:** $\\mathbf{a}(t) = \\langle x''(t), y''(t) \\rangle$\n- **Total Distance Traveled on $[t_1, t_2]$:**\n  $$\\text{Distance} = \\int_{t_1}^{t_2} \\text{Speed } dt = \\int_{t_1}^{t_2} \\sqrt{(x'(t))^2 + (y'(t))^2} dt$$\n\n**Finding Position at time $t_2$ given initial position at $t_1$:**\n$$x(t_2) = x(t_1) + \\int_{t_1}^{t_2} x'(t) dt \\quad \\text{and} \\quad y(t_2) = y(t_1) + \\int_{t_1}^{t_2} y'(t) dt$$\nAlways calculate the $x$ and $y$ coordinates independently!"
      },
      {
        "heading": "3. Polar Coordinates & Slopes of Tangents (CED 9.4–9.5)",
        "content": "In polar coordinates, points are $(r, \\theta)$ where $r$ is directed radial distance and $\\theta$ is angular ray:\n- $x = r \\cos\\theta$\n- $y = r \\sin\\theta$\n\n**The Difference Between $\\frac{dr}{d\\theta}$ and $\\frac{dy}{dx}$:**\n- **$\\frac{dr}{d\\theta}$:** Measures how fast the distance from the origin changes with respect to angle $\\theta$.\n  - If $r > 0$ and $\\frac{dr}{d\\theta} > 0$, the curve is moving **away from the origin**.\n  - If $r > 0$ and $\\frac{dr}{d\\theta} < 0$, the curve is moving **toward the origin**.\n- **$\\frac{dy}{dx}$:** The slope of the geometric tangent line in the Cartesian plane:\n  $$\\frac{dy}{dx} = \\frac{\\frac{d}{d\\theta}[r\\sin\\theta]}{\\frac{d}{d\\theta}[r\\cos\\theta]} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$$"
      },
      {
        "heading": "4. Polar Area Swept Out by Rays (CED 9.6)",
        "content": "Polar area is based on sectors of a circle rather than vertical rectangles:\n$$\\text{Area of Circular Sector} = \\frac{1}{2} r^2 \\Delta\\theta \\implies A = \\frac{1}{2} \\int_\\alpha^\\beta [r(\\theta)]^2 d\\theta$$\n\n**Finding Limits of Integration ($\\alpha$ and $\\beta$):**\n- Trace the curve from start to finish.\n- Set $r(\\theta) = 0$ to find where the curve passes through the origin (pole).\n- For a multi-loop rose curve $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$:\n  - One petal is traced as the curve leaves the origin ($r = 0$) and returns to the origin ($r = 0$)."
      },
      {
        "heading": "5. Area Between Two Polar Curves (CED 9.7)",
        "content": "To find the area bounded between two polar curves $r_1(\\theta)$ and $r_2(\\theta)$:\n1. Find intersection angles by setting $r_1(\\theta) = r_2(\\theta)$ and checking the pole ($r = 0$).\n2. Identify which curve is further from the origin ($r_{\\text{outer}}$) and which is closer ($r_{\\text{inner}}$) along radial rays.\n3. Integrate:\n   $$A = \\frac{1}{2} \\int_\\alpha^\\beta \\left( [r_{\\text{outer}}(\\theta)]^2 - [r_{\\text{inner}}(\\theta)]^2 \\right) d\\theta$$\n\n*Severe AP Deduction Warning:* Writing $\\frac{1}{2}\\int (r_{\\text{outer}} - r_{\\text{inner}})^2 d\\theta$ results in an automatic zero on the integral setup. You must square each radius individually!"
      },
      {
        "heading": "6. Polar Curve Calculus: Slopes & Area Between Loops (CED 9.7-9.9)",
        "content": "Derivations of polar slopes and enclosed area integrals:\n\n* **Slope of Tangent Line to a Polar Curve $r = f(\\theta)$**:\n  * Using parametric relations $x = r\\cos\\theta = f(\\theta)\\cos\\theta$ and $y = r\\sin\\theta = f(\\theta)\\sin\\theta$:\n    $$\\frac{dy}{dx} = \\frac{\\frac{dy}{d\\theta}}{\\frac{dx}{d\\theta}} = \\frac{\\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta}{\\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta}$$\n  * Tangent lines at the pole (origin, where $r = 0$): $\\frac{dy}{dx} = \\frac{0 + 0}{\\frac{dr}{d\\theta}\\cos\\theta - 0} = \\tan\\theta$.\n* **Area Enclosed by Polar Curves**:\n  $$A = \\frac{1}{2} \\int_\\alpha^\\beta [r(\\theta)]^2 \\, d\\theta$$\n  * Area between two curves $r_{\\text{outer}}$ and $r_{\\text{inner}}$:\n    $$A = \\frac{1}{2} \\int_\\alpha^\\beta \\left( [r_{\\text{outer}}(\\theta)]^2 - [r_{\\text{inner}}(\\theta)]^2 \\right) \\, d\\theta$$\n  * Always determine limits $\\alpha$ and $\\beta$ by setting $r_1(\\theta) = r_2(\\theta)$ or tracing the sweep direction."
      },
      {
        "heading": "7. Vector-Valued Functions, Velocity, Speed & Particle Planar Distance (CED 9.1-9.3)",
        "content": "Parametric motion in two dimensions:\n\n* **Kinematic Vectors in 2D**:\n  * Position: $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$\n  * Velocity: $\\vec{v}(t) = \\langle x'(t), y'(t) \\rangle$\n  * Acceleration: $\\vec{a}(t) = \\langle x''(t), y''(t) \\rangle$\n* **Speed vs. Distance**:\n  * **Speed (Magnitude of Velocity)**:\n    $$\\text{Speed} = \\|\\vec{v}(t)\\| = \\sqrt{[x'(t)]^2 + [y'(t)]^2}$$\n  * **Total Distance Traveled on $[t_1, t_2]$**:\n    $$\\text{Total Distance} = \\int_{t_1}^{t_2} \\sqrt{[x'(t)]^2 + [y'(t)]^2} \\, dt$$\n  * **Displacement Vector**:\n    $$\\Delta \\vec{r} = \\langle x(t_2) - x(t_1), y(t_2) - y(t_1) \\rangle = \\left\\langle \\int_{t_1}^{t_2} x'(t)dt, \\int_{t_1}^{t_2} y'(t)dt \\right\\rangle$$"
      }
    ],
    "workedExamples": [
      {
        "title": "Parametric Second Derivative and Concavity Calculation",
        "topicRef": "CED 9.2 Parametric Derivatives",
        "question": "A curve is defined by $x(t) = t^3 - 3t$ and $y(t) = 2t^2$. Find $\\frac{d^2y}{dx^2}$ in terms of $t$ and determine the concavity at $t = 2$.",
        "solutionSteps": [
          "Step 1: Compute first derivatives w.r.t t: dx/dt = 3t^2 - 3 and dy/dt = 4t.",
          "Step 2: Find first derivative dy/dx: dy/dx = (dy/dt) / (dx/dt) = 4t / (3t^2 - 3).",
          "Step 3: Differentiate dy/dx with respect to t using the Quotient Rule:",
          "d/dt[dy/dx] = [(4)(3t^2 - 3) - (4t)(6t)] / (3t^2 - 3)^2 = [12t^2 - 12 - 24t^2] / (3t^2 - 3)^2 = (-12t^2 - 12) / (3t^2 - 3)^2.",
          "Step 4: Divide by dx/dt to find d^2y/dx^2:",
          "d^2y/dx^2 = \\frac{d/dt[dy/dx]}{dx/dt} = \\frac{-12t^2 - 12}{(3t^2 - 3)^2 \\cdot (3t^2 - 3)} = \\frac{-12(t^2 + 1)}{(3t^2 - 3)^3}.",
          "Step 5: Evaluate at t = 2: dx/dt = 3(4) - 3 = 9. d/dt[dy/dx] = (-12(5))/(9)^2 = -60 / 81.",
          "d^2y/dx^2 = (-60/81) / 9 = -60 / 729 = -20 / 243 < 0.",
          "Step 6: Concavity: Since d^2y/dx^2 < 0 at t = 2, the curve is Concave Down."
        ],
        "finalAnswer": "d^2y/dx^2 = \\frac{-12(t^2 + 1)}{(3t^2 - 3)^3}; Concave Down at t = 2",
        "apScoringTip": "Always write down the formula d^2y/dx^2 = (d/dt[dy/dx]) / (dx/dt). Forgetting to divide by dx/dt in the final denominator is the most common error on this problem."
      },
      {
        "title": "Area Inside One Petal of a Polar Rose Curve",
        "topicRef": "CED 9.6 Polar Area",
        "question": "Find the area of one petal of the rose curve $r = 4\\cos(3\\theta)$.",
        "solutionSteps": [
          "Step 1: Determine the angular boundaries of one petal by finding where r(\\theta) = 0:",
          "4*cos(3\\theta) = 0 ==> cos(3\\theta) = 0 ==> 3\\theta = -\\pi/2, \\pi/2 ==> \\theta = -\\pi/6, \\pi/6.",
          "Step 2: Set up the polar area integral for one petal from \\theta = -\\pi/6 to \\theta = \\pi/6:",
          "A = (1/2) * \\int_{-\\pi/6}^{\\pi/6} [4\\cos(3\\theta)]^2 d\\theta = (1/2) * 16 * \\int_{-\\pi/6}^{\\pi/6} \\cos^2(3\\theta) d\\theta = 8 * \\int_{-\\pi/6}^{\\pi/6} \\cos^2(3\\theta) d\\theta.",
          "Step 3: By symmetry, integrate from 0 to \\pi/6 and multiply by 2: A = 16 * \\int_0^{\\pi/6} \\cos^2(3\\theta) d\\theta.",
          "Step 4: Apply half-angle identity: \\cos^2(3\\theta) = [1 + \\cos(6\\theta)] / 2:",
          "A = 16 * \\int_0^{\\pi/6} \\frac{1 + \\cos(6\\theta)}{2} d\\theta = 8 * [\\theta + \\frac{1}{6}\\sin(6\\theta)]_0^{\\pi/6}.",
          "Step 5: Evaluate bounds: 8 * [(\\pi/6 + (1/6)\\sin(\\pi)) - (0 + (1/6)\\sin(0))] = 8 * [\\pi/6 + 0] = 8\\pi / 6 = 4\\pi / 3."
        ],
        "finalAnswer": "Area = 4\\pi / 3",
        "apScoringTip": "Remember the half factor (1/2) in front of polar area integrals. Many students forget the (1/2) and double the correct answer."
      }
    ],
    "diagrams": [
      {
        "id": "polar_sector_area_geometry",
        "title": "Radial Sectors in Polar Area Integration",
        "subtitle": "dA = (1/2) * r^2 * d\\theta",
        "type": "polar_sectors",
        "description": "Polar area integrates circular wedges of angle d\\theta and radius r(\\theta) spreading out from the origin pole.",
        "takeaway": "Area is (1/2) * integral of r^2 d\\theta; individual radii are squared before integrating."
      }
    ],
    "commonTraps": [
      "Computing d^2y/dx^2 as y''(t) / x''(t). This is completely wrong! d^2y/dx^2 = (d/dt[dy/dx]) / (dx/dt).",
      "Squaring the difference in polar area: Writing (1/2) * \\int (r_outer - r_inner)^2 d\\theta instead of (1/2) * \\int (r_outer^2 - r_inner^2) d\\theta.",
      "Confusing dr/d\\theta with dy/dx. dr/d\\theta is the rate of change of distance from the origin; dy/dx is the slope of the tangent line in Cartesian space.",
      "Forgetting the 1/2 factor in front of the polar area integral."
    ],
    "cramSheet": [
      "Parametric slope: dy/dx = y'(t) / x'(t). Concavity: d^2y/dx^2 = [d/dt(dy/dx)] / x'(t).",
      "Vector speed: ||v(t)|| = \\sqrt{(x')^2 + (y')^2}. Distance = \\int ||v(t)|| dt.",
      "Polar conversions: x = r*cos(\\theta), y = r*sin(\\theta), r^2 = x^2 + y^2.",
      "Polar Area: A = (1/2) * \\int r^2 d\\theta. Two curves: (1/2) * \\int (r_outer^2 - r_inner^2) d\\theta.",
      "Distance from origin increasing <=> r and dr/d\\theta have the same sign."
    ]
  },
  {
    "unitId": "u10",
    "unitNumber": 10,
    "title": "Infinite Sequences and Series",
    "examWeight": "17%–18% of AP Exam (BC Crown Jewel)",
    "bigIdea": "Infinite series bridge finite algebraic polynomial approximations with transcendental functions through Taylor polynomials and power series convergence.",
    "keyTheorems": [
      {
        "name": "The Ratio Test for Absolute Convergence",
        "conditions": "\\sum a_n is an infinite series with non-zero terms; L = \\lim_{n \\to \\infty} |a_{n+1} / a_n|.",
        "conclusion": "If L < 1, the series converges absolutely. If L > 1 (or L = \\infty), the series diverges. If L = 1, the test is INCONCLUSIVE (must use another test).",
        "apTip": "The Ratio Test is the universal workhorse for finding the radius of convergence R of power series. Remember: when L = 1, test endpoints separately!"
      },
      {
        "name": "Alternating Series Error Bound (Leibniz Error Bound)",
        "conditions": "An alternating series \\sum (-1)^n b_n satisfies AST (terms are positive, decreasing, and \\lim b_n = 0).",
        "conclusion": "The truncation error of the Nth partial sum S_N satisfies: |Error| = |S - S_N| <= b_{N+1} (the absolute value of the FIRST OMITTED TERM).",
        "apTip": "The easiest error bound: the error is strictly bounded by the magnitude of the next term in the series!"
      },
      {
        "name": "Lagrange Error Bound (Taylor's Remainder Theorem)",
        "conditions": "f is (n+1)-times differentiable on an interval containing center c and evaluation point x; P_n(x) is the nth-degree Taylor polynomial.",
        "conclusion": "|R_n(x)| = |f(x) - P_n(x)| <= \\frac{M}{(n+1)!} |x - c|^{n+1}, where M = \\max |f^{(n+1)}(z)| on the interval between c and x.",
        "apTip": "To maximize |f^{(n+1)}(z)|, choose the z-value on the interval [c, x] that makes the derivative as large as possible."
      }
    ],
    "formulas": [
      {
        "name": "Geometric Series Sum Formula",
        "latex": "\\sum_{n=0}^\\infty a r^n = \\frac{a}{1 - r} \\quad \\text{converges if and only if } |r| < 1",
        "explanation": "If |r| >= 1, the geometric series diverges."
      },
      {
        "name": "p-Series Convergence Benchmark",
        "latex": "\\sum_{n=1}^\\infty \\frac{1}{n^p} \\quad \\text{converges if } p > 1, \\quad \\text{diverges if } p \\le 1",
        "explanation": "p = 1 is the divergent Harmonic Series \\sum 1/n."
      },
      {
        "name": "General Taylor and Maclaurin Polynomial Formula",
        "latex": "P_n(x) = \\sum_{k=0}^n \\frac{f^{(k)}(c)}{k!}(x - c)^k = f(c) + f'(c)(x - c) + \\frac{f''(c)}{2!}(x - c)^2 + \\dots + \\frac{f^{(n)}(c)}{n!}(x - c)^n",
        "explanation": "A Maclaurin polynomial is simply a Taylor polynomial centered at c = 0."
      },
      {
        "name": "Six Essential Maclaurin Series to Memorize",
        "latex": "\\begin{aligned} \\frac{1}{1 - x} &= \\sum_{n=0}^\\infty x^n = 1 + x + x^2 + \\dots & (|x| < 1) \\\\ e^x &= \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\dots & (-\\infty < x < \\infty) \\\\ \\sin x &= \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots & (-\\infty < x < \\infty) \\\\ \\cos x &= \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots & (-\\infty < x < \\infty) \\\\ \\ln(1 + x) &= \\sum_{n=1}^\\infty (-1)^{n+1}\\frac{x^n}{n} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots & (-1 < x \\le 1) \\\\ \\arctan x &= \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{2n+1} = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\dots & (-1 \\le x \\le 1) \\end{aligned}",
        "explanation": "Memorize these 6 series! Differentiate, integrate, or substitute into them to generate new series."
      }
    ],
    "sections": [
      {
        "heading": "1. The 10 Convergence Tests Master Reference Matrix (CED 10.1–10.8)",
        "content": "The ultimate diagnostic chart for determining the convergence or divergence of infinite series:\n\n| Test Name | Series Form | Condition for Convergence | Condition for Divergence | Crucial AP Exam Nuance |\n| :--- | :--- | :--- | :--- | :--- |\n| **$n$th-Term Test** | Any $\\sum a_n$ | **NEVER proves convergence!** | $\\lim_{n \\to \\infty} a_n \\neq 0$ | If $\\lim a_n = 0$, test is INCONCLUSIVE! |\n| **Geometric Series** | $\\sum a r^n$ | $|r| < 1$ (Sum $= \\frac{a}{1 - r}$) | $|r| \\ge 1$ | First term $a$ is obtained by plugging in starting $n$. |\n| **$p$-Series** | $\\sum \\frac{1}{n^p}$ | $p > 1$ | $p \\le 1$ | $p = 1$ is the divergent Harmonic Series. |\n| **Alternating Series (AST)** | $\\sum (-1)^n b_n$ | $b_{n+1} \\le b_n$ and $\\lim b_n = 0$ | Fails if $\\lim b_n \\neq 0$ ($n$th-term) | Terms $b_n$ must be positive and non-increasing. |\n| **Integral Test** | $\\sum a_n$ with $f(n)=a_n$ | $\\int_1^\\infty f(x) dx$ converges | $\\int_1^\\infty f(x) dx$ diverges | $f$ must be continuous, positive, and decreasing. |\n| **Direct Comparison (DCT)** | $\\sum a_n, a_n > 0$ | $a_n \\le c_n$ and $\\sum c_n$ converges | $a_n \\ge d_n$ and $\\sum d_n$ diverges | Direct inequality must hold for all $n$. |\n| **Limit Comparison (LCT)** | $\\sum a_n, a_n > 0$ | $\\lim \\frac{a_n}{b_n} = L \\in (0, \\infty)$ and $\\sum b_n$ converges | $\\lim \\frac{a_n}{b_n} = L \\in (0, \\infty)$ and $\\sum b_n$ diverges | Best for messy rational/radical algebraic expressions. |\n| **Ratio Test** | Any $\\sum a_n$ | $\\lim |\\frac{a_{n+1}}{a_n}| = L < 1$ | $\\lim |\\frac{a_{n+1}}{a_n}| = L > 1$ | If $L = 1$, inconclusive. Ideal for factorials and $c^n$. |"
      },
      {
        "heading": "2. Absolute vs. Conditional Convergence (CED 10.9)",
        "content": "A series with alternating signs can converge in one of two ways:\n- **Absolute Convergence:** The series $\\sum a_n$ converges AND the positive series $\\sum |a_n|$ also converges. (Example: $\\sum \\frac{(-1)^n}{n^2}$ converges absolutely because $\\sum \\frac{1}{n^2}$ is a convergent $p$-series with $p = 2$).\n- **Conditional Convergence:** The alternating series $\\sum a_n$ converges (by AST), BUT the absolute series $\\sum |a_n|$ diverges! (Example: The Alternating Harmonic Series $\\sum \\frac{(-1)^{n+1}}{n}$ converges by AST, but $\\sum \\frac{1}{n}$ is the divergent Harmonic Series)."
      },
      {
        "heading": "3. Power Series: Radius and Interval of Convergence (CED 10.12)",
        "content": "A power series centered at $c$ has the form $\\sum a_n (x - c)^n$:\n\n**The 3-Step Procedure to Find the Interval of Convergence:**\n1. **Apply the Ratio Test:**\n   $$L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}(x - c)^{n+1}}{a_n(x - c)^n} \\right| = |x - c| \\cdot \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$$\n2. **Set $L < 1$ and solve for $|x - c| < R$:**\n   - $R$ is the **Radius of Convergence**.\n   - The open interval of convergence is $(c - R, c + R)$.\n3. **MANDATORY AP STEP: Test Endpoints Separately!**\n   - Substitute $x = c - R$ and $x = c + R$ into the original series.\n   - Use AST, $p$-series, or LCT to check convergence at each boundary.\n   - Update brackets accordingly: $(c - R, c + R)$, $[c - R, c + R)$, $(c - R, c + R]$, or $[c - R, c + R]$."
      },
      {
        "heading": "4. Constructing Taylor & Maclaurin Polynomials (CED 10.11)",
        "content": "A Taylor polynomial $P_n(x)$ centered at $c$ matches the value and first $n$ derivatives of $f(x)$ at $c$:\n$$P_n(x) = f(c) + f'(c)(x - c) + \\frac{f''(c)}{2!}(x - c)^2 + \\frac{f'''(c)}{3!}(x - c)^3 + \\dots + \\frac{f^{(n)}(c)}{n!}(x - c)^n$$\n\n**Coefficient Formula:**\n$$\\text{Coefficient of } (x - c)^k = \\frac{f^{(k)}(c)}{k!} \\iff f^{(k)}(c) = k! \\cdot (\\text{Coefficient})$$\n*Top Exam Question:* If given the Taylor series $P(x) = 3 - 5(x - 2) + 7(x - 2)^2 - 4(x - 2)^3$, find $f'''(2)$:\n$$\\text{Coefficient of } (x - 2)^3 = -4 = \\frac{f'''(2)}{3!} \\implies f'''(2) = -4 \\cdot 6 = -24.$$"
      },
      {
        "heading": "5. Error Bounds: Alternating Series vs. Lagrange (CED 10.10–10.13)",
        "content": "When a Taylor polynomial $P_n(x)$ approximates $f(x)$, the error $|R_n(x)| = |f(x) - P_n(x)|$ is bounded by two distinct rules:\n\n**1. Alternating Series Error Bound (ASEB):**\nIf the series alternates with decreasing terms approaching 0:\n$$|\\text{Error}| \\le |a_{N+1}| \\quad (\\text{the first omitted term})$$\n\n**2. Lagrange Error Bound (Taylor's Remainder):**\nFor any Taylor polynomial approximation (even non-alternating):\n$$|R_n(x)| \\le \\frac{M}{(n+1)!} |x - c|^{n+1}$$\nWhere $M = \\max |f^{(n+1)}(z)|$ on the closed interval between the center $c$ and evaluation point $x$.\n- On AP Free Response questions, $M$ is typically given to you directly (e.g. *\"The graph of $|f^{(4)}(x)|$ is bounded by 12\"*)."
      },
      {
        "heading": "6. Lagrange Error Bound & Taylor Remainder Mechanics (CED 10.11)",
        "content": "Quantifying truncation error in Taylor polynomial approximations:\n\n* **The Lagrange Error Bound (Taylor’s Remainder Theorem)**:\n  * If $f(x)$ is approximated by its $n^{\\text{th}}$-degree Taylor polynomial $P_n(x)$ centered at $c$, the maximum error is bounded by:\n    $$|R_n(x)| = |f(x) - P_n(x)| \\le \\frac{M}{(n+1)!} |x - c|^{n+1}$$\n  * where $M$ is the maximum value of $|f^{(n+1)}(t)|$ on the closed interval between $c$ and $x$.\n* **The Alternating Series Error Bound (Leibniz Remainder)**:\n  * If a convergent series satisfies the Alternating Series Test conditions ($a_n > 0$, decreasing, $\\lim a_n = 0$), then the error in using partial sum $S_N$ is strictly less than the magnitude of the first omitted term:\n    $$|R_N| = |S - S_N| \\le a_{N+1}$$\n  * Much simpler to compute than Lagrange and tested frequently on FRQ 6!"
      }
    ],
    "workedExamples": [
      {
        "title": "Finding Radius and Interval of Convergence with Endpoint Testing",
        "topicRef": "CED 10.12 Power Series",
        "question": "Find the radius of convergence and the interval of convergence for the power series $\\sum_{n=1}^\\infty \\frac{(x - 3)^n}{n \\cdot 4^n}$.",
        "solutionSteps": [
          "Step 1: Set up the Ratio Test: L = lim_{n->inf} |a_{n+1} / a_n|.",
          "L = lim_{n->inf} | \\frac{(x - 3)^{n+1}}{(n+1)4^{n+1}} * \\frac{n * 4^n}{(x - 3)^n} | = |x - 3| * lim_{n->inf} \\frac{n}{4(n+1)} = \\frac{|x - 3|}{4}.",
          "Step 2: For absolute convergence, set L < 1: |x - 3| / 4 < 1 ==> |x - 3| < 4.",
          "Radius of Convergence R = 4. Open interval: -4 < x - 3 < 4 ==> -1 < x < 7.",
          "Step 3: Test Left Endpoint x = -1:",
          "Substitute x = -1 into original series: \\sum_{n=1}^\\infty \\frac{(-1 - 3)^n}{n 4^n} = \\sum_{n=1}^\\infty \\frac{(-4)^n}{n 4^n} = \\sum_{n=1}^\\infty \\frac{(-1)^n 4^n}{n 4^n} = \\sum_{n=1}^\\infty \\frac{(-1)^n}{n}.",
          "This is the Alternating Harmonic Series, which CONVERGES by the Alternating Series Test (terms 1/n are positive, decreasing, and lim 1/n = 0).",
          "Therefore, include x = -1 (use square bracket [).",
          "Step 4: Test Right Endpoint x = 7:",
          "Substitute x = 7 into original series: \\sum_{n=1}^\\infty \\frac{(7 - 3)^n}{n 4^n} = \\sum_{n=1}^\\infty \\frac{4^n}{n 4^n} = \\sum_{n=1}^\\infty \\frac{1}{n}.",
          "This is the Harmonic Series (p-series with p = 1), which DIVERGES.",
          "Therefore, exclude x = 7 (use parenthesis )).",
          "Step 5: Write the final interval of convergence: [-1, 7)."
        ],
        "finalAnswer": "Radius R = 4; Interval of Convergence = [-1, 7)",
        "apScoringTip": "AP scoring rubrics typically allocate 1 point for setting up the Ratio Test, 1 point for identifying R, 1 point for testing endpoints, and 1 point for the correct interval brackets. Missing the endpoint tests forfeits 2 out of 4 points!"
      },
      {
        "title": "Lagrange Error Bound on Taylor Polynomial",
        "topicRef": "CED 10.13 Lagrange Error Bound",
        "question": "Let P_3(x) be the third-degree Taylor polynomial for f(x) about x = 2. It is known that |f^{(4)}(x)| <= 6 for all x in [2, 2.5]. Use the Lagrange error bound to show that |f(2.5) - P_3(2.5)| <= 0.016.",
        "solutionSteps": [
          "Step 1: Identify terms for Lagrange error formula: degree n = 3, center c = 2, evaluation point x = 2.5, interval [2, 2.5].",
          "Step 2: Formula: |R_3(2.5)| <= \\frac{M}{(3 + 1)!} |2.5 - 2|^{3 + 1} = \\frac{M}{4!} |0.5|^4.",
          "Step 3: Determine M: M is the maximum of |f^{(4)}(x)| on [2, 2.5]. We are given |f^{(4)}(x)| <= 6, so M = 6.",
          "Step 4: Compute: \\frac{6}{4!} * (0.5)^4 = \\frac{6}{24} * (1/2)^4 = \\frac{1}{4} * \\frac{1}{16} = \\frac{1}{64}.",
          "Step 5: Convert 1/64 to decimal: 1/64 = 0.015625.",
          "Step 6: Since 0.015625 <= 0.016, the bound is confirmed."
        ],
        "finalAnswer": "|R_3(2.5)| <= 1/64 = 0.015625 <= 0.016",
        "apScoringTip": "State the interval [2, 2.5] and show the explicit fraction \\frac{M}{(n+1)!}|x-c|^{n+1} with numerical substitutions before evaluating."
      }
    ],
    "diagrams": [
      {
        "id": "taylor_polynomial_convergence",
        "title": "Successive Convergence of Taylor Polynomials to sin(x)",
        "subtitle": "P_1(x), P_3(x), P_5(x), P_7(x) Hugging the Sine Wave",
        "type": "taylor_visual",
        "description": "As degree increases from 1 to 7, each higher-degree polynomial matches more derivatives at center x = 0, hugging the true function over an ever-widening domain.",
        "takeaway": "Higher-degree polynomials widen the interval of accuracy; on infinite radius series, P_n(x) converges everywhere."
      }
    ],
    "commonTraps": [
      "Claiming the nth-term test proves convergence when \\lim a_n = 0! The nth-term test can ONLY prove divergence. If \\lim a_n = 0, you must use another test.",
      "Forgetting to test endpoints for power series interval of convergence.",
      "Confusing conditional convergence with absolute convergence. If \\sum |a_n| converges, it is absolute; if \\sum a_n converges but \\sum |a_n| diverges, it is conditional.",
      "Calculating f^{(k)}(c) as just the coefficient without multiplying by k! Remember f^{(k)}(c) = k! * (Coefficient)."
    ],
    "cramSheet": [
      "nth-term: lim a_n != 0 => Diverges. lim a_n = 0 => Inconclusive.",
      "Geometric: \\sum a r^n = a/(1 - r) for |r| < 1. p-Series: \\sum 1/n^p converges for p > 1.",
      "Ratio Test: lim |a_{n+1}/a_n| < 1 => Converges absolutely. Always test endpoints!",
      "Alternating Error: |Error| <= |a_{N+1}| (first omitted term).",
      "Lagrange Error: |R_n(x)| <= \\frac{M}{(n+1)!} |x - c|^{n+1}.",
      "Memorize: e^x = \\sum x^n/n!, sin x = \\sum (-1)^n x^{2n+1}/(2n+1)!, cos x = \\sum (-1)^n x^{2n}/(2n)!."
    ]
  }
];
