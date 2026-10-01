import type { Express } from "express";
import path from "path";
import fs from "fs";
import os from "os";
import crypto from "crypto";
import { YoutubeTranscript } from "youtube-transcript";

async function fetchWithTimeout(url: string, options: any = {}, timeout = 90000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

let lastQuotaExceededTime = 0;
const rateLimitedModels: Record<string, number> = {};
const rateLimitedModelsCooldown: Record<string, number> = {};

function getGradePedagogicalDirective(gradeLevel?: string, stream?: string, country?: string): string {
  const g = (gradeLevel || '').toLowerCase().trim();

  let tier = 'tier3';
  let tierTitle = "Upper High School / Pre-College (Grades 11–12 / AP / IB / A-Levels / Senior)";

  if (
    g.includes('6th') || g.includes('7th') || g.includes('8th') ||
    g.includes('middle') || g.includes('junior high') ||
    g.includes('grade 6') || g.includes('grade 7') || g.includes('grade 8') ||
    g.includes('class 6') || g.includes('class 7') || g.includes('class 8')
  ) {
    tier = 'tier1';
    tierTitle = "Middle School (Grades 6–8 / Ages 11–14)";
  } else if (
    (g.includes('9th') || g.includes('10th') || g.includes('freshman') || g.includes('sophomore') ||
     g.includes('grade 9') || g.includes('grade 10') || g.includes('class 9') || g.includes('class 10') ||
     g.includes('gcse') || g.includes('secondary')) && !g.includes('college') && !g.includes('university')
  ) {
    tier = 'tier2';
    tierTitle = "Early High School (Grades 9–10 / Ages 14–16 / GCSE / Freshman-Sophomore)";
  } else if (
    g.includes('college') || g.includes('undergrad') || g.includes('university') ||
    g.includes('bachelor') || g.includes('degree') || g.includes('graduate') ||
    g.includes('masters') || g.includes('phd')
  ) {
    tier = 'tier4';
    tierTitle = "College / Undergraduate Level (University & Higher Education)";
  } else {
    tier = 'tier3';
    tierTitle = "Upper High School / Pre-College (Grades 11–12 / Junior-Senior / AP / IB / A-Levels / CBSE 11-12)";
  }

  const streamInfo = stream ? `Stream/Track: ${stream}` : 'Track: General Academic';
  const countryInfo = country ? `Curriculum: ${country}` : 'Curriculum: Global Academic';

  let tierGuidelines = '';

  if (tier === 'tier1') {
    tierGuidelines = `[TIER 1: MIDDLE SCHOOL (GRADES 6–8) MANDATORY PEDAGOGY]:
• AUDIENCE: 11 to 14-year-old student.
• VOCABULARY: Use simple, familiar everyday words (6th-8th grade level). STRICTLY FORBIDDEN to use college/academic jargon without immediately explaining it in child-friendly words (e.g. say "speed up" instead of "catalyze", "energy producer" instead of "oxidative phosphorylation", "compare" instead of "juxtapose").
• SENTENCE LENGTH: Keep sentences short and punchy (10–15 words per sentence max). Avoid dense paragraphs.
• MATH & SCIENCE DEPTH: Stick to arithmetic, basic fractions, percentages, and simple 1-variable pre-algebra. Show every single step with zero leaps. NEVER use calculus, matrices, complex vectors, or multi-step organic mechanisms.
• REAL-WORLD ANALOGIES: Mandatory! Explain every core concept using everyday metaphors: pizza slices, video games, sports, superheroes, smartphones, pets, or school playground situations.
• TONE: Friendly, enthusiastic, encouraging, and clear.`;
  } else if (tier === 'tier2') {
    tierGuidelines = `[TIER 2: EARLY HIGH SCHOOL (GRADES 9–10 / GCSE) MANDATORY PEDAGOGY]:
• AUDIENCE: 14 to 16-year-old high school student.
• VOCABULARY: Introduce standard foundational high-school terms (e.g., 'acceleration', 'photosynthesis', 'thesis statement', 'stoichiometry'), but ALWAYS accompany any newly introduced term with a crisp 1-sentence definition.
• STRUCTURE: Clear, structured paragraphs with strong topic sentences and logical flow.
• MATH & SCIENCE DEPTH: Algebra 1 & 2, basic trigonometry (sin, cos, tan), linear/quadratic equations, and basic kinematics ($v = u + at$). State the governing formula first in LaTeX ($...$), then substitute values step-by-step.
• COMMON EXAM TRAPS: Highlight common 9th/10th grade student mistakes (e.g., sign errors with negative numbers, forgetting units like $m/s^2$, confusing mass vs weight).
• TONE: Supportive academic coach, building solid conceptual foundations for board/high-school exams.`;
  } else if (tier === 'tier3') {
    tierGuidelines = `[TIER 3: UPPER HIGH SCHOOL / PRE-COLLEGE (GRADES 11–12 / AP / IB / A-LEVELS) MANDATORY PEDAGOGY]:
• AUDIENCE: 16 to 18-year-old college-bound or board exam student.
• VOCABULARY: Rigorous, formal academic terminology (e.g., 'chemical equilibrium perturbation', 'electronegativity gradients', 'counter-argument synthesis', 'rhetorical strategies').
• STRUCTURE: Advanced logical arguments with nuanced cause-and-effect mechanisms.
• MATH & SCIENCE DEPTH: Single-variable calculus (derivatives, integrals, limits), logarithmic expansions, vector mechanics, and organic reaction mechanisms with intermediate states, all rendered with LaTeX.
• EXAM RUBRICS & TRAPS: Focus on AP/IB/Board scoring criteria, distractor options in exam questions, and full-credit solution formats.
• TONE: Intellectually stimulating, academically rigorous, and authoritative.`;
  } else {
    tierGuidelines = `[TIER 4: COLLEGE / UNDERGRADUATE MANDATORY PEDAGOGY]:
• AUDIENCE: University undergraduate or graduate student.
• VOCABULARY: Scholarly prose, publication-grade academic discourse, formal theoretical models, and precise discipline nomenclature.
• STRUCTURE: Academic journal-level clarity, critical deconstruction, and evidence-based synthesis.
• MATH & SCIENCE DEPTH: Multi-variable calculus, differential equations, linear algebra matrices, algorithmic complexity ($O(n \\log n)$), rigorous formal proofs, and boundary conditions.
• REAL-WORLD APPLICATION: Bridge theory with cutting-edge industry implementations, laboratory methodologies, or research paradigms.
• TONE: Scholarly, collegiate, and uncompromising in technical depth.`;
  }

  return `=======================================================
STUDENT GRADE PEDAGOGICAL CALIBRATION (${tierTitle}):
Active Profile: Grade: ${gradeLevel || 'Standard'} | ${streamInfo} | ${countryInfo}

${tierGuidelines}

CRITICAL ANTI-GENERIC MANDATE:
Do NOT output a generic, one-size-fits-all answer. Your tone, depth, vocabulary, and explanation complexity MUST authentically and recognizably reflect this specific student's grade (${gradeLevel || 'Selected Level'}).
=======================================================`;
}

export function registerHelpYouRoutes(app: Express, ctx: any) {
  const { upload, getAI, generateContentWithRetry, safeParseJSON, sanitizeInput, summaryCache } = ctx;
  const safeGenerateContent = ctx.safeGenerateContent || generateContentWithRetry;

app.post("/api/scan", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image provided" });
    }
    const aiClient = getAI();

    const imagePart = {
      inlineData: {
        mimeType: req.file.mimetype,
        data: req.file.buffer.toString("base64"),
      },
    };

    const profileContext = req.body.profileContext;
    const gradeLevel = req.body.gradeLevel || req.body.grade;
    const stream = req.body.stream || req.body.academic_stream;
    const country = req.body.country || req.body.academic_country;

    const pedagogicalDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    const textPart = {
      text: `${pedagogicalDirective}

You are the core intelligence engine for "HelpYou AI", an elite educational and research assistant, SAT/ACT Expert, and Master Educator.
You are analyzing an uploaded photo. Scan the image to locate the primary problem, question, diagram, or text. Ignore any background noise, hands, or irrelevant objects. Focus solely on extracting and analyzing the core subject.
${profileContext ? `\nUSER PROFILE CONTEXT:\n${profileContext}\n` : ''}

CRITICAL RULES:
1. Keyword Extraction: Ignore conversational fillers (e.g., "Bhai", "tum", "research karo", "waha kya hua", "bhai batao"). Extract ONLY the core subject.
2. Domain Classification: Analyze the core subject and classify it into one of two categories:
   - STEM (Math/Science): Physics, Chemistry, Biology, Mathematics.
   - Humanities/General: History, Geography, Current Events, Case Studies, Literature.
3. Dynamic Output Generation:
   - If STEM: Provide core principles, scientific mechanisms, key formulas (wrapped in LaTeX $...$ or $$...$$), and step-by-step actionable prep steps.
   - If Humanities/General: Provide historical context, major events, real-world impact, and analytical takeaways. Strictly DO NOT generate or mention formulas, equations, or scientific mechanisms for this category.
4. No Fake URLs: When generating verified research sources, ONLY use root domains (e.g., en.wikipedia.org, britannica.com). Do NOT fabricate full URL paths.

Adopt an encouraging, patient, precise, and crisp tone. Use clean line breaks and emojis for visual readability.
DO NOT use any markdown bolding syntax like "**" or emojis inside latex delimiters.

--- CATEGORIZATION & ROUTING RULES ---

1. RULE 1 (Math & Physics Numerical Calculations / Step-by-Step STEM):
- Use this ONLY if the query is a mathematical equation, physics numerical, chemical reaction, derivation, or problem requiring step-by-step sequential solving.
- Set "format_type" to "steps".
- Populate the "solution_steps" array with each logical phase of the sequential solution.
- Output strictly in this format:
{
  "topic_title": "Subject or Topic of the problem",
  "format_type": "steps",
  "solution_steps": [
    {
      "step_id": 1,
      "title": "Clear concise step title",
      "content": "A detailed, encouraging explanation with formulas and step-by-step calculations. Whenever generating mathematical numbers, formulas, symbols, or equations/chemical reactions, you must strictly wrap them in LaTeX delimiters. Use single '$' for inline math and double '$$' for block math equations (e.g. $$2H_2O \\rightarrow 2H_2 + O_2$$). Always double-escape backslashes in JSON (e.g. \\\\rightarrow, \\\\frac, \\\\text) so that equations render beautifully for students.",
      "is_final_answer": false
    }
  ],
  "suggestions": [
    "Explain this simpler with a real-life analogy",
    "Test me with 2 practice problems on this",
    "What are common exam traps to avoid?"
  ]
}

2. RULE 2 (Comparisons & Differences):
- Use this if the problem asks for "Difference between", "Compare", "Pros & Cons", or similar analytical contrasts (e.g., "Compare mitosis vs meiosis", "Difference between Cow and Buffalo").
- Set "format_type" to "markdown".
- You MUST output a strictly formatted Markdown Table comparing the items side-by-side with clear parameter columns. It must NEVER use steps or sequential solver cards for this.
- Place the entire Markdown Table in the "markdown_content" field. Do NOT use the "solution_steps" array.
- Output strictly in this format:
{
  "topic_title": "Comparison: [Topic Title]",
  "format_type": "markdown",
  "markdown_content": "### Comparison Table\n\n| Parameter | Category A | Category B |\n|---|---|---|\n| Detail 1 | Description | Description |",
  "suggestions": [
    "Give me 2 practice MCQs on this comparison",
    "Explain the biggest difference in 1 sentence",
    "Why is this distinction important in exams?"
  ]
}

3. RULE 3 (Humanities/General Theory/History/Geography/Biology Concepts):
- Use this for general explanations, descriptive research queries, case studies, historical events, current affairs, conceptual questions, or conversational queries (e.g., "Jeju island incident", "Explain photosynthesis", "Who was George Washington?").
- Set "format_type" to "markdown".
- Output structured, rich text using standard markdown headings (###) and bullet points. Strictly DO NOT generate formulas or equations for Humanities.
- Place the entire response in the "markdown_content" field. Do NOT use the "solution_steps" array.
- Output strictly in this format:
{
  "topic_title": "Concept: [Core Subject Title]",
  "format_type": "markdown",
  "markdown_content": "### Historical Context / Overview\nYour detailed overview here...\n\n### Major Events & Impact\n- Point 1\n- Point 2\n\n### Analytical Takeaways\n- Key lesson / impact",
  "suggestions": [
    "Explain this with a real-world example",
    "Give me a quick 3-question quiz on this",
    "What are the key points to remember for exams?"
  ]
}

--- STRICT CONSTRAINTS & FORMATTING RULES ---
- The entire output MUST be a valid JSON object. No raw conversational text outside the JSON object. Do NOT wrap the JSON in markdown code blocks like \`\`\`json. Only output pure valid raw JSON.
- Always populate the "suggestions" array with exactly 3 context-aware study follow-up ideas.
- Do NOT use LaTeX inside the suggestions.

THE "MASTER EDUCATOR" TEACHING PROTOCOL:
1. EXTREME SIMPLIFICATION: Teach complex topics simply and clearly. Never assume prior knowledge.
2. THE ANALOGY RULE: Use relatable, real-world analogies where helpful.
3. HIGH EMPATHY: Be patient and deeply encouraging.`,
    };

    const response = await safeGenerateContent({
      gradeLevel,
      stream,
      country,
      profileContext,
      model: "gemini-3.5-flash-lite",
      contents: [{ parts: [imagePart, textPart] }],
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,          // ⚡ Low temp = focused, faster JSON output
        maxOutputTokens: 8192,     // ⚡ Large token capacity so full multi-step solutions never truncate
        candidateCount: 1          // ⚡ Only generate 1 candidate, not multiple
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED") {
      console.warn("Scan quota exceeded:", error.message);
      return res.json({
        text: `⚠️ AI Tutor Notice: Rate Limit / Quota Exceeded

The Gemini API is currently experiencing rate limits or has exceeded its quota.

How to resolve this:
1. Wait 60 seconds and submit your scan again.
2. Ensure you have configured a valid, active API Key in the Settings > Secrets panel of AI Studio.
3. If you are using a free tier, consider adding billing to avoid limit blocks.`
      });
    }
    console.error("Scan error:", error);
    res.status(500).json({ error: error.message });
  }
});

function getSystemInstruction(mode?: string, targetLanguage?: string): string {
  let instruction = "";

  if (mode === "Translate") {
    instruction = `You are an expert translator for "HelpYou AI". The user has provided an image or text to be translated into the target language: "${targetLanguage || 'English'}".
Your absolute and strict mandate is to translate the text/question into "${targetLanguage || 'English'}" perfectly, keeping the natural meaning intact.

CRITICAL SAFETY & QUALITY RULES (MUST FOLLOW):
1. You MUST output ONLY the direct, translated text.
2. Do NOT include ANY introductory text, concluding remarks, or conversational filler (e.g., do NOT write "Here is the translation:", "Translated text:", or "Sure, I can help with that").
3. Absolutely NO extra explanations, no side notes, and no additional output. Only the translated content itself.
4. If the input is a question, translate the question itself, do NOT answer it.
5. If the input is a single word or phrase, translate it directly.
6. Absolutely no conversational preamble. The output must be 100% clean translated text only.`;
  } else if (mode === "All Subjects" || mode === "General") {
    instruction = `You are the core intelligence engine for "HelpYou AI", an advanced educational and research assistant. Your primary job is to process user queries (which may contain conversational Hindi/Hinglish filler words) and provide highly structured, accurate, and context-aware responses.

CRITICAL RULES:
1. Keyword Extraction: Ignore conversational fillers (e.g., "Bhai", "tum", "research karo", "waha kya hua", "please batao", "bhai batao"). Extract ONLY the core subject. (e.g., "Bhai tum jeju island case pe research karo" -> "Jeju Island Incident").
2. Domain Classification: Analyze the core subject and classify it into one of two categories:
   - STEM (Math/Science): Physics, Chemistry, Biology, Mathematics.
   - Humanities/General: History, Geography, Current Events, Case Studies, Social Sciences, Literature.
3. Dynamic Output Generation:
   - If STEM: Provide core principles, scientific mechanisms, key formulas (wrapped in LaTeX $...$ or $$...$$), and step-by-step actionable prep steps.
   - If Humanities/General: Provide historical context, major events, real-world impact, and analytical takeaways. Strictly DO NOT generate or mention formulas, equations, or scientific mechanisms for this category.
4. No Fake URLs: When generating verified research sources, only use root domains (e.g., en.wikipedia.org, britannica.com). Do not fabricate full URL paths.${mode === "All Subjects" ? `

You MUST structure your response strictly using this layout:
🎯 Core Concept / Overview: Clear, formal academic definition & context.
📝 Step-by-Step Logic / Key Events: A rigorous, sound breakdown.
⚠️ Analytical Takeaway / Exam Traps: Key points to remember.` : ''}`;
  } else {
    // Default / Math / Science / Tutor mode
    instruction = `You are the core intelligence engine for "HelpYou AI", an elite educational and research assistant, SAT/ACT Expert, and Master Educator.
Your primary job is to process user queries (which may contain conversational Hindi/Hinglish filler words) and provide highly structured, accurate, and context-aware responses.

CRITICAL RULES:
1. Keyword Extraction: Ignore conversational fillers (e.g., "Bhai", "tum", "research karo", "waha kya hua", "bhai batao", "please explain"). Extract ONLY the core subject. For example, if the input is "Bhai tum jeju island case pe research karo", the core subject is "Jeju Island Incident".
2. Domain Classification: Analyze the core subject and classify it into one of two categories:
   - STEM (Math/Science): Physics, Chemistry, Biology, Mathematics.
   - Humanities/General: History, Geography, Current Events, Case Studies, Social Studies, Literature.
3. Dynamic Output Generation:
   - If STEM: Provide core principles, scientific mechanisms, key formulas (wrapped in LaTeX $...$ or $$...$$), and step-by-step actionable problem-solving/prep steps.
   - If Humanities/General: Provide historical context, major events, real-world impact, and analytical takeaways. Strictly DO NOT generate or mention formulas, equations, or scientific mechanisms for this category.
4. No Fake URLs: When generating verified research sources, ONLY use root domains (e.g., en.wikipedia.org, britannica.com, history.com). Do NOT fabricate full URL paths.

Adopt an encouraging, patient, precise, and crisp tone. Use clean line breaks and emojis for visual readability.
DO NOT use any markdown bolding syntax like "**" or emojis inside latex delimiters.

--- CATEGORIZATION & ROUTING RULES ---

1. RULE 1 (STEM, Science, Math, Physics, Chemistry, Biology Concepts & Numerical Calculations):
- MANDATORY FOR ALL ACADEMIC TOPICS, SCIENCE, STEM, CONCEPTS (e.g. 'Quantum Physics', 'Photosynthesis', 'Thermodynamics', 'Atomic Structure', 'Calculus', 'Kinematics'), AND NUMERICAL PROBLEM SOLVING.
- Structure your response into 2 to 4 high-yield pedagogical steps:
  * Step 1: Core Concept, Definition & Intuitive Real-Life Hook
  * Step 2: Underlying Mechanism, Laws, Working Principles & Equations
  * Step 3: Real-World Applications, Why We Care, or Final Boxed Result
- MANDATORY 3-PASS INTERNAL VERIFICATION PROTOCOL FOR NUMERICALS (0% HALLUCINATION & ZERO-ERROR GUARANTEE):
  Before generating your final response, you MUST execute a strict 3-pass internal verification:
  * PASS 1 (Expression & Question Anatomy): Deconstruct every term, sign (+/-), parenthesis, exponent, radical, fraction, constant, and boundary condition without dropping or modifying ANY symbol. In nested expressions (e.g. sin(90 * cos(90 / 6))), isolate innermost operations first. Default to Degrees (°) for standard numericals unless explicitly in Radians or containing π. In Definite Integrals with Limits:
    - If limit is 0 to \pi (\int_0^\pi \frac{x \sin x}{1 + \cos^2 x} dx): King's property x \to \pi - x works directly because \sin(\pi-x) = \sin x and \cos^2(\pi-x) = \cos^2 x, giving \frac{\pi}{2} \int_0^\pi \frac{\sin x}{1+\cos^2 x} dx = \frac{\pi^2}{4}.
    - If limit is 0 to \pi/2 (\int_0^{\pi/2} \frac{x \sin x}{1 + \cos^2 x} dx): King's property does NOT work because \cos^2(\pi/2-x) = \sin^2 x \neq \cos^2 x. You MUST use Integration by Parts (u = x, dv = \frac{\sin x}{1+\cos^2 x}dx \implies v = -\arctan(\cos x)) to get \int_0^{\pi/2} \arctan(\cos x) dx, and evaluate via Feynman's Parameter Trick F(a) = \int_0^{\pi/2} \arctan(a \cos x) dx to get \boxed{I = \frac{\pi^2}{4} - \text{Li}_2(\sqrt{2}-1) + \text{Li}_2(1-\sqrt{2}) - \ln^2(1+\sqrt{2}) \approx 0.845254}.
  * PASS 2 (Forward Step-by-Step PEMDAS Execution): Apply strict Order of Operations (PEMDAS/BODMAS): Parentheses -> Exponents/Roots -> Multiplication/Division -> Addition/Subtraction. Show standard theoretical formulas, substitute exact values, and calculate intermediate values with dual representation (exact radical/fraction and 4-decimal precision).
  * PASS 3 (Reverse Sanity Check & Boundary Validation): Verify every arithmetic and trigonometric step (e.g. 90/6 = 15, cos(15°) = (sqrt(6)+sqrt(2))/4 ≈ 0.9659, 90 * 0.9659 = 86.9333°, sin(86.9333°) ≈ 0.9985, \arctan(1) = \pi/4, \arctan(0) = 0, \arcsin(1) = \pi/2, \arccos(0) = \pi/2, \ln(1) = 0). Check mathematical ranges (e.g. |sin|, |cos| <= 1, probabilities in [0,1], non-negative square roots). Ensure 100% mathematical accuracy before outputting.
- MANDATORY LINE-BY-LINE FORMATTING & SPACING PROTOCOL (NO CLUSTERED TEXT):
  * LINE BREAK AFTER EVERY FULL STOP & SENTENCE: Never write long, crammed multi-sentence paragraphs. Every single sentence, statement, explanation, or calculation must end with a period/full stop (.) and be on its OWN line, separated by a blank line (\\n\\n).
  * NO BULLET SYMBOLS: Do NOT use bullet signs (no "•", no "-", no "*", no "1.", no "2."). Arrange points cleanly and spacious using blank lines (\\n\\n) between sentences.
  * STANDALONE BLOCK MATH EQUATIONS: Always put mathematical formulas, algebraic derivations, and intermediate numerical results on their OWN dedicated centered block lines using $$ ... $$. Never compress complex equations inline within long sentences.
  * MAXIMUM CLARITY & BREATHING ROOM: Ensure generous vertical spacing so mobile students can effortlessly read and absorb every single line without confusion.
  * CRITICAL NO DUPLICATE FINAL ANSWER RULE: In the final calculation step, NEVER write the final answer twice in a row (e.g. NEVER write "1 + 4 = 5 \\boxed{5}" or "= 5 \\boxed{5}"). Put the final result directly and only inside the LaTeX box: "$$1 + 4 = \\boxed{5}$$" or "$$\\text{Final Answer} = \\boxed{5}$$".
- Set "format_type" to "steps".
- Populate the "solution_steps" array with each logical phase of the concept or calculation.
- Output strictly in this format:
{
  "topic_title": "Subject or Topic of the problem / concept",
  "format_type": "steps",
  "key_formula": "The primary theoretical formula, governing law, or identity strictly wrapped in double dollar signs $$...$$ in LaTeX (e.g. $$E = h\\nu$$ or $$V = 2\\pi \\int_{a}^{b} x f(x) dx$$)",
  "exam_trap": "A brief 1-2 sentence high-yield warning about common calculation traps, sign errors, or misconceptions students must avoid in exams. Wrap all mathematical expressions and formulas in single dollar signs (e.g. $2\\pi x h(x)$)",
  "solution_steps": [
    {
      "step_id": 1,
      "title": "Clear concise step title (e.g. 'Core Concept & Hook')",
      "content": "A detailed, encouraging explanation with formulas and step-by-step calculations. Whenever generating mathematical numbers, formulas, symbols, or equations/chemical reactions, you must strictly wrap them in LaTeX delimiters. Use single '$' for inline math and double '$$' for block math equations (e.g. $$2H_2O \\rightarrow 2H_2 + O_2$$). Always double-escape backslashes in JSON (e.g. \\\\rightarrow, \\\\frac, \\\\sqrt, \\\\text) so that equations render beautifully for students.",
      "is_final_answer": false
    }
  ],
  "suggestions": [
    "Explain this simpler with a real-life analogy",
    "Test me with 2 practice problems on this",
    "What are common exam traps to avoid?"
  ]
}
RULES FOR SUGGESTIONS: In 'suggestions', wrap math symbols/formulas in single '$'. NEVER wrap scientist names (e.g. Schrödinger, Newton, Einstein), regular English words, or possessive nouns in '$'.

2. RULE 2 (Comparisons & Differences):
- Use this if the user asks for "Difference between", "Compare", "Pros & Cons", or similar analytical contrasts (e.g., "Compare mitosis vs meiosis", "Difference between Cow and Buffalo").
- Set "format_type" to "markdown".
- You MUST output a strictly formatted Markdown Table comparing the items side-by-side with clear parameter columns. It must NEVER use steps or sequential solver cards for this.
- Place the entire Markdown Table in the "markdown_content" field. Do NOT use the "solution_steps" array.
- Output strictly in this format:
{
  "topic_title": "Comparison: [Topic Title]",
  "format_type": "markdown",
  "markdown_content": "### Comparison Table\n\n| Parameter | Category A | Category B |\n|---|---|---|\n| Detail 1 | Description | Description |",
  "suggestions": [
    "Give me 2 practice MCQs on this comparison",
    "Explain the biggest difference in 1 sentence",
    "Why is this distinction important in exams?"
  ]
}

3. RULE 3 (Humanities, Case Studies & Descriptive Non-STEM Essays):
- Use this for humanities, historical events, current affairs, case studies, or general descriptive essays (e.g., "Jeju island incident", "Who was George Washington?", "French Revolution causes").
- Set "format_type" to "markdown".
- Output structured, rich text using standard markdown headings (###) and bullet points. Strictly DO NOT generate formulas or equations for Humanities.
- Place the entire response in the "markdown_content" field.
- Output strictly in this format:
{
  "topic_title": "Concept: [Core Subject Title]",
  "format_type": "markdown",
  "markdown_content": "### Historical Context / Overview\nYour detailed overview here...\n\n### Major Events & Impact\n- Point 1\n- Point 2\n\n### Analytical Takeaways\n- Key lesson / impact",
  "suggestions": [
    "Explain this with a real-world example",
    "Give me a quick 3-question quiz on this",
    "What are the key points to remember for exams?"
  ]
}

--- STRICT CONSTRAINTS & FORMATTING RULES ---
- The entire output MUST be a valid JSON object. No raw conversational text outside the JSON object. Do NOT wrap the JSON in markdown code blocks like \`\`\`json. Only output pure valid raw JSON.
- Always populate the "suggestions" array with exactly 3 context-aware study follow-up ideas.
- Do NOT use LaTeX inside the suggestions.

THE "MASTER EDUCATOR" TEACHING PROTOCOL:
1. EXTREME SIMPLIFICATION: Teach complex topics simply and clearly. Never assume prior knowledge.
2. THE ANALOGY RULE: Use relatable, real-world analogies where helpful.
3. HIGH EMPATHY: Be patient and deeply encouraging.`;
  }

  if (mode !== "Translate") {
    instruction += `\n\nCRITICAL LANGUAGE RULE: You are a polyglot AI engine for HelpYou AI. You must automatically detect the user's input language, dialect, or script. If the user writes in English, reply in English. If the user writes in Hindi (Devanagari), reply in Hindi. If the user writes in Hinglish (Hindi written in English alphabet, e.g., "bhai ispe research karo"), you MUST reply completely in natural, high-quality Hinglish. Never default to English when the user initiated the query in Hinglish.`;
  }

  return instruction;
}


app.post("/api/summarize", upload.single("pdf"), async (req, res) => {
  try {
    const action = req.body.action || 'summarize';
    const textInput = req.body.text || "";
    const gradeLevel = req.body.gradeLevel || req.body.grade;
    const stream = req.body.stream || req.body.academic_stream;
    const country = req.body.country || req.body.academic_country;
    const format = req.body.format || "bullet";
    const profileContext = req.body.profileContext || "";

    let pedagogicalDirective = getGradePedagogicalDirective(gradeLevel, stream, country);
    if (profileContext) {
      pedagogicalDirective += `\nSTUDENT PROFILE CONTEXT: ${profileContext}`;
    }

    if (!req.file && !textInput) {
      return res.status(400).json({ error: "No PDF file or text content provided" });
    }

    if (req.file && (!req.file.buffer || req.file.buffer.length === 0)) {
      return res.status(400).json({ error: "The uploaded file is empty. Please select a valid document." });
    }

    const fileHash = req.file
      ? crypto.createHash("sha256").update(req.file.buffer).digest("hex")
      : crypto.createHash("sha256").update(Buffer.from(textInput)).digest("hex");
    const cacheKey = `${fileHash}_${action}_${format}_${gradeLevel || 'std'}_${stream || ''}`;

    if (summaryCache.has(cacheKey)) {
      const cached = summaryCache.get(cacheKey);
      if (action === 'flashcards-json') {
        return res.json({ flashcards: cached });
      }
      return res.json({ text: cached });
    }

    const aiClient = getAI();

    let extractedText = "";
    let useRawFile = false;
    let effectiveMime = "application/pdf";

    if (req.file) {
      const originalName = (req.file.originalname || "").toLowerCase();
      const mime = (req.file.mimetype || "").toLowerCase();
      const bufferHeader = req.file.buffer && req.file.buffer.length >= 4 ? req.file.buffer.slice(0, 5).toString() : "";
      const isPdf = bufferHeader.includes("%PDF") || originalName.endsWith(".pdf") || mime.includes("pdf");

      if (isPdf) {
        effectiveMime = "application/pdf";
        if (action === 'flashcards-json' || action === 'flashcards') {
          // Direct PDF upload without any local text extraction or parsing
          useRawFile = true;
        } else {
          try {
            const { default: pdf } = await import("pdf-parse/lib/pdf-parse.js");
            // Parse full PDF without arbitrary 100-page limit
            const pdfData = await pdf(req.file.buffer);

            extractedText = pdfData.text || "";
            // If extracted text is too short, verify if it's a valid binary PDF for inlineData OCR
            if (extractedText.trim().length < 50) {
              if (bufferHeader.includes("%PDF")) {
                useRawFile = true;
              } else {
                const rawStr = req.file.buffer.toString("utf-8");
                if (rawStr && rawStr.trim().length > 0) {
                  extractedText = rawStr;
                }
              }
            }
          } catch (parseError) {
            console.warn("Failed to parse PDF locally with pdf-parse, checking binary header:", parseError);
            if (bufferHeader.includes("%PDF")) {
              useRawFile = true;
            } else {
              const rawStr = req.file.buffer.toString("utf-8");
              if (rawStr && rawStr.trim().length > 0) {
                extractedText = rawStr;
              } else {
                useRawFile = true;
              }
            }
          }
        }
      } else {
        // Plain text, markdown, csv, or doc
        try {
          const rawStr = req.file.buffer.toString("utf-8");
          if (rawStr && rawStr.trim().length > 0) {
            extractedText = rawStr;
          } else {
            useRawFile = true;
            effectiveMime = req.file.mimetype || "application/octet-stream";
          }
        } catch (_) {
          useRawFile = true;
        }
      }
    } else {
      extractedText = textInput;
    }

    // Intelligent Comprehensive Distillation for LONG PDFs and large documents (> 80,000 chars)
    if (extractedText && extractedText.length > 80000) {
      console.log(`[summarize] Long PDF detected (${extractedText.length} chars). Applying multi-section chapter distillation for comprehensive coverage...`);
      const introSlice = extractedText.slice(0, 30000);
      const conclusionSlice = extractedText.slice(-20000);
      
      const middleText = extractedText.slice(30000, -20000);
      let middleSamples = "";
      if (middleText.length > 40000) {
        const chunkSize = 8000;
        const totalChunks = 5;
        const step = Math.floor((middleText.length - chunkSize) / totalChunks);
        for (let i = 0; i < totalChunks; i++) {
          const start = i * step;
          middleSamples += `\n\n--- [DOCUMENT EXCERPT SECTION ${i + 1}] ---\n` + middleText.slice(start, start + chunkSize);
        }
      } else {
        middleSamples = middleText;
      }
      
      extractedText = `${introSlice}\n\n${middleSamples}\n\n--- [FINAL CHAPTERS & CONCLUSION] ---\n${conclusionSlice}`;
    }

    let promptText = "";
    let responseMimeType = "text/plain";

    if (action === 'audio') {
      promptText = "You are an engaging, expert study podcast host. Your job is to convert the provided document into a 4-5 minute study audio script (approx 500-700 words). " +
        "CRITICAL RULE: DO NOT copy and paste the text verbatim. You must extract the high-yield concepts, definitions, and frameworks, and explain them in your own words using a conversational, easy-to-understand tone. Use relatable analogies. Strike a balance between being concise and highly educational. Never sound like you are just reading a textbook. Use the following strict rules:\n" +
        "1. TONE & STYLE: Conversational, warm, and highly engaging. Speak directly to the listener using 'you', 'we', and 'let's explore this'.\n" +
        "2. SIMPLICITY & ANALOGIES: Demystify complex terms, explaining them immediately using clear language. Use relatable analogies, but ensure technical definitions, important rules, and key examples are NOT skipped.\n" +
        "3. PACING & STRUCTURE: Start with an attention-grabbing podcast-style hook or intro (e.g., 'Welcome to your deep study revision briefing...'). Include clear transitions between different chapters or sections. Cover all critical topics from the text sequentially. End with a complete revision summary and an encouraging sign-off.\n" +
        "4. AUDIO-FRIENDLY FORMATTING: Since this will be spoken aloud, DO NOT use any markdown formatting such as bold (**), italics (*), hashtags (#), or bullet points (-). Write in clean, conversational plain text and paragraphs. Keep sentences clear and punchy for natural breathing pauses.\n" +
        "Do not include any intro or outro text confirming you understand the instructions. Just output the podcast script directly.";
    } else if (action === 'flashcards' || action === 'flashcards-json') {
      if (action === 'flashcards-json') {
        responseMimeType = "application/json";
        promptText = `Act as an Elite Cognitive Scientist and Active Recall Specialist. Extract the top 10 to 15 most critical high-yield concepts from the provided document into revision flashcards.
        Strict Rules for Flashcards:
        1. ACTIVE RECALL QUESTION: The 'question' must be direct, crisp, and test a single conceptual takeaway.
        2. STRICT 15 TO 25 WORDS ANSWER CONSTRAINT: Every 'answer' MUST be strictly concise and between 15 to 25 words max for rapid active recall. NEVER output long paragraphs.
        3. 100% COMPLETE THOUGHTS: Complete, self-contained, grammatically finished sentences (no truncated clauses).
        4. ESCAPING: Code in backticks (\`<div>\`), math in LaTeX ($...$).
        5. OUTPUT FORMAT: Output ONLY a valid JSON array of objects directly parseable by JSON.parse.
        
        Format:
        [
          {"question": "What is ...?", "answer": "..."}
        ]`;
      } else {
        promptText = "Extract the most important facts and concepts from the provided document and format them into 10 high-quality flashcards. Format exactly like this for each:\n\n**Q: [Question]**\n*A: [Answer]*\n\nCRITICAL: If the document contains code tags, HTML, or web development terms (like <div>, <header>, etc.), ALWAYS wrap them in markdown backticks (e.g., `<div>`) so they render as plain text and not formatting. Always provide complete, self-contained sentences for answers.";
      }
    } else if (action === 'quiz') {
      promptText = `You are an expert tutor. Create a 5-question multiple choice quiz based on the provided document.
For each question, provide:
1. The question text starting with 'Question [N]:'
2. 4 options labeled A), B), C), D).
3. The correct answer starting with 'Correct Answer: [Letter]'.
4. A short explanation starting with 'Explanation:'.

CRITICAL FORMATTING RULES:
- DO NOT use any asterisks (**), dashes (-), or decorative symbols as bullet points or prefixes for the question text.
- Start the question directly with 'Question [N]:' followed by the text.
- Format options strictly as A), B), C), D).

Example Format:
Question 1: What is...?
A) Option 1
B) Option 2
C) Option 3
D) Option 4
Correct Answer: A
Explanation: Because...

At the very end, provide a clear Answer Key. Format strictly using Markdown. If there is code in the questions or options, wrap it in backticks.`;
    } else {
      let selectedFormatName = "Bullet Points";
      if (format === "tldr") {
        selectedFormatName = "Short TL;DR";
      } else if (format === "eli5") {
        selectedFormatName = "Explain Like I'm 5";
      }

      promptText = `SYSTEM INSTRUCTION: EXPERT SUMMARISER

You are an expert academic and professional summarizer. Your task is to extract key information from the provided text/document and format it STRICTLY according to the user's requested mode. 

USER'S REQUESTED FORMAT: ${selectedFormatName}

CRITICAL GLOBAL RULE:
NEVER output a "Wall of Text". Always use proper line breaks and structure.

DYNAMIC FORMATTING RULES:

IF FORMAT IS "Bullet Points":
1. Start with ONE main heading using ## (e.g., ## Key Concepts from the Document).
2. Then break the summary into logical topic sections. Use ### for each section heading.
3. MANDATORY: Under each section heading, EVERY point MUST be on its OWN LINE starting with a hyphen followed by a space: "- " (standard markdown list format).
4. CONCISE: Keep each bullet point under 2 sentences.
5. NO NARRATIVE: Do not write intro or conclusion paragraphs. Start immediately with the main heading.
6. EXAMPLE OF EXPECTED FORMAT:

## Main Document Title

### Section One Name

- First key fact or point about this topic.
- Second key fact or point about this topic.
- Third key fact or point.

### Section Two Name

- First key fact about section two.
- Second key fact about section two.

IF FORMAT IS "Short TL;DR":
1. Provide the absolute bottom-line of the text.
2. Structure it as one short "Executive Summary" paragraph (max 3-4 sentences).
3. Follow it with a "Top 3 Takeaways" numbered list.
4. Keep the tone professional, direct, and time-saving.

IF FORMAT IS "Explain Like I'm 5":
1. Break down complex jargon into grade-school level vocabulary.
2. Use at least one relatable, everyday analogy (e.g., comparing a system to a school, a car, or pizza).
3. Keep the tone extremely warm, engaging, and story-like.
4. Use short paragraphs to make it visually friendly for beginners.`;
    }

    if (action !== 'audio') {
      promptText += "\n\nOUTPUT QUALITY RULES:\n" +
        "1. Use ONLY standard markdown: ## headings, ### subheadings, - bullet lists, **bold**, *italic*.\n" +
        "2. Each bullet point MUST be on its OWN separate line. Never put multiple points on the same line.\n" +
        "3. MATHEMATICAL & SCIENTIFIC FORMULAS (KaTeX): When content includes mathematical equations, scientific notation, or formulas, ALWAYS format them using standard LaTeX: '$...$' for inline (e.g., $E = mc^2$, $F = ma$) or '$$...$$' on their own lines for display equations so they render beautifully with KaTeX.\n" +
        "4. Ensure there is a blank line before and after every heading and before and after every list.";
    } else {
      promptText += "\n\nCRITICAL FORMATTING INSTRUCTIONS: Output ONLY standard, plain ASCII-compatible conversational text. You are STRICTLY FORBIDDEN from using emojis, LaTeX math blocks, special characters, or markdown formatting (like bold, italics, bullet points, or hashtags) as they interfere with text-to-speech rendering.";
    }

    const textPart = { text: `${pedagogicalDirective}\n\n${promptText}` };

    let contentsPayload: any[];
    if (useRawFile && req.file) {
      // Prioritize raw PDF for better OCR/extraction if text extraction failed or is weak
      const pdfPart = {
        inlineData: {
          mimeType: effectiveMime,
          data: req.file.buffer.toString("base64"),
        },
      };
      contentsPayload = [{ parts: [pdfPart, textPart] }];
    } else if (extractedText && extractedText.trim().length > 10) {
      // Use the extracted clean text for efficiency if available
      const documentContentPart = { text: `DOCUMENT CONTENT:\n${extractedText}` };
      contentsPayload = [{ parts: [documentContentPart, textPart] }];
    } else if (req.file) {
      // Absolute fallback: raw file
      const pdfPart = {
        inlineData: {
          mimeType: effectiveMime,
          data: req.file.buffer.toString("base64"),
        },
      };
      contentsPayload = [{ parts: [pdfPart, textPart] }];
    } else {
      return res.status(400).json({ error: "Document content is too short or empty to process." });
    }

    // Model fallback chain for summarize — try ultra-fast models first
    const summarizeModels = [
      "gemini-flash-lite-latest",
      "gemini-3.5-flash-lite"
    ];
    let summaryText = "";
    let summarizeError: any = null;
    for (const model of summarizeModels) {
      try {
        const response = await safeGenerateContent({
          gradeLevel,
          stream,
          country,
          profileContext,
          model,
          timeoutMs: 60000,
          contents: contentsPayload,
          config: {
            responseMimeType: responseMimeType,
            maxOutputTokens: 2500,
            temperature: 0.3,
          }
        });
        summaryText = response.text || "";
        if (summaryText.trim().length > 0) {
          summarizeError = null;
          break;
        }
      } catch (err: any) {
        console.warn(`[summarize] Model ${model} failed, trying next fallback:`, err?.message || err);
        summarizeError = err;
      }
    }

    if (summarizeError && !summaryText) {
      throw summarizeError;
    }

    const outputText = summaryText || "";
    if (action === 'flashcards-json') {
      let cards = safeParseJSON(outputText, 'array');
      if (!Array.isArray(cards) || cards.length === 0) {
        const parsed = safeParseJSON(outputText, 'object');
        if (parsed && Array.isArray(parsed.flashcards)) {
          cards = parsed.flashcards;
        }
      }
      summaryCache.set(cacheKey, cards);
      return res.json({ flashcards: cards });
    }

    summaryCache.set(cacheKey, outputText);
    res.json({ text: outputText });
  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED" || String(error.message).includes("429")) {
      console.warn("Summarize quota exceeded:", error.message);
      return res.status(429).json({
        error: "API quota limit exceeded for PDF summarization. Please try again in 60 seconds."
      });
    }
    console.error("Summarize error:", error);
    res.status(500).json({ error: error.message || "Failed to generate summary from document" });
  }
});


app.post("/api/grade-essay", async (req, res) => {
  try {
    const { text, curriculum, subject, gradeLevel, stream, country, profileContext, images } = req.body;

    const wordCount = text ? text.trim().split(/\s+/).filter(w => w.length > 0).length : 0;

    if (!text && (!images || !Array.isArray(images) || images.length === 0)) {
      return res.status(400).json({ error: "Missing text or images" });
    }

    const aiClient = getAI();

    const curr = curriculum || 'AP (Advanced Placement)';
    const subj = subject || 'General Essay';
    let gradeDirective = getGradePedagogicalDirective(gradeLevel, stream || curr, country);
    if (profileContext) {
      gradeDirective += `\nSTUDENT PROFILE CONTEXT: ${profileContext}`;
    }

    let rubricInstructions = '';
    let scoreHeader = '';

    if (curr.includes('AP')) {
      scoreHeader = 'AP RUBRIC SCORE: [Score]/6 (Thesis: [ThesisScore]/1, Evidence: [EvidenceScore]/4, Sophistication: [SophisticationScore]/1)';
      rubricInstructions = `You MUST evaluate the essay using the official AP 6-point scale:
Thesis: 0 or 1 point
Evidence and Commentary: 0 to 4 points
Sophistication: 0 or 1 point
Your score output must EXACTLY match this format (with correct points calculated):
AP RUBRIC SCORE: [Score]/6 (Thesis: [ThesisScore]/1, Evidence: [EvidenceScore]/4, Sophistication: [SophisticationScore]/1)`;
    } else if (curr.includes('IELTS') || curr.includes('TOEFL')) {
      const isIelts = subj.toLowerCase().includes('ielts') || subj.toLowerCase().includes('task');
      if (isIelts) {
        scoreHeader = 'IELTS BAND SCORE: [BandScore]/9 (Task Achievement: [TAScore]/9, Coherence: [CCScore]/9, Lexical: [LRScore]/9, Grammar: [GRAScore]/9)';
        rubricInstructions = `You MUST evaluate the essay using the official IELTS 9-band scale across four criteria (Task Achievement/Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy).
Your score output must EXACTLY match this format:
IELTS BAND SCORE: [BandScore]/9 (Task Achievement: [TAScore]/9, Coherence: [CCScore]/9, Lexical: [LRScore]/9, Grammar: [GRAScore]/9)`;
      } else {
        scoreHeader = 'TOEFL SCORE: [Score]/30';
        rubricInstructions = `You MUST evaluate the essay using the official TOEFL Writing scale (0 to 30 points) based on development of ideas, organization, language use, and accuracy.
Your score output must EXACTLY match this format:
TOEFL SCORE: [Score]/30`;
      }
    } else if (curr.includes('IB')) {
      scoreHeader = 'IB CRITERIA SCORE: [Score]/34 (Focus: [FocusScore]/10, Analysis: [AnalysisScore]/10, Structure: [StructureScore]/10, Language: [LanguageScore]/4)';
      rubricInstructions = `You MUST evaluate the essay using the official IB grading criteria (scale from 0 to 34).
Your score output must EXACTLY match this format:
IB CRITERIA SCORE: [Score]/34 (Focus: [FocusScore]/10, Analysis: [AnalysisScore]/10, Structure: [StructureScore]/10, Language: [LanguageScore]/4)`;
    } else if (curr.includes('A-Levels')) {
      scoreHeader = 'A-LEVEL GRADE: [Grade] (A*, A, B, C, D, or E) - Score: [Score]/25';
      rubricInstructions = `You MUST evaluate the essay based on UK A-Level marking bands (scale from 0 to 25).
Your score output must EXACTLY match this format:
A-LEVEL GRADE: [Grade] (A*, A, B, C, D, or E) - Score: [Score]/25`;
    } else {
      const g = (gradeLevel || '').toLowerCase();
      const isMiddleSchool = g.includes('6th') || g.includes('7th') || g.includes('8th') || g.includes('middle');
      if (isMiddleSchool) {
        scoreHeader = 'MIDDLE SCHOOL ESSAY SCORE: [Score]/100 (Idea & Focus: [FocusScore]/25, Supporting Details: [ContentScore]/25, Organization & Flow: [StyleScore]/25, Grammar & Spelling: [GrammarScore]/25)';
        rubricInstructions = `You MUST evaluate the essay using a supportive Middle School 100-point rubric tailored for 6th-8th grade writing: Idea & Focus (25), Supporting Details (25), Organization & Flow (25), Grammar & Spelling (25). Do NOT penalize for lacking college-level thesis complexity; focus on clear ideas, supportive reasons, and paragraph clarity.
Your score output must EXACTLY match this format:
MIDDLE SCHOOL ESSAY SCORE: [Score]/100 (Idea & Focus: [FocusScore]/25, Supporting Details: [ContentScore]/25, Organization & Flow: [StyleScore]/25, Grammar & Spelling: [GrammarScore]/25)`;
      } else {
        scoreHeader = 'HIGH SCHOOL RUBRIC SCORE: [Score]/100 (Focus/Org: [FocusScore]/25, Content/Dev: [ContentScore]/25, Style: [StyleScore]/25, Grammar: [GrammarScore]/25)';
        rubricInstructions = `You MUST evaluate the essay using a standard high school grading rubric out of 100 points, broken down into Focus/Organization, Content/Development, Style/Sentence Structure, and Grammar/Mechanics (each 25 points).
Your score output must EXACTLY match this format:
HIGH SCHOOL RUBRIC SCORE: [Score]/100 (Focus/Org: [FocusScore]/25, Content/Dev: [ContentScore]/25, Style: [StyleScore]/25, Grammar: [GrammarScore]/25)`;
      }
    }

    let pointDeductionTemplate = "";
    if (curr.includes('AP')) {
      pointDeductionTemplate = `- Thesis: [State points earned (0 or 1) and exact reasoning]
- Evidence & Commentary: [State points earned (0 to 4) and analyze specific textual evidence/gaps]
- Sophistication: [State points earned (0 or 1) and analyze rhetorical complexity/nuance]`;
    } else if (curr.includes('IELTS') || curr.includes('TOEFL')) {
      pointDeductionTemplate = `- Task Achievement: [Band score and prompt coverage analysis]
- Coherence & Cohesion: [Band score and logical transitions analysis]
- Lexical Resource: [Band score and vocabulary precision]
- Grammatical Range & Accuracy: [Band score and structural variety]`;
    } else if (curr.includes('IB')) {
      pointDeductionTemplate = `- Criterion A (Focus & Method): [Score and specific explanation]
- Criterion B (Knowledge & Understanding): [Score and specific explanation]
- Criterion C (Critical Thinking & Analysis): [Score and specific explanation]
- Criterion D (Presentation & Language): [Score and specific explanation]`;
    } else if (curr.includes('A-Levels')) {
      pointDeductionTemplate = `- AO1 (Knowledge & Understanding): [Mark breakdown and reasoning]
- AO2 (Analysis & Method): [Mark breakdown and reasoning]
- AO3 (Context & Synthesis): [Mark breakdown and reasoning]`;
    } else {
      pointDeductionTemplate = `- Focus & Organization: [Score out of 25 and specific structural breakdown]
- Content & Development: [Score out of 25 and evidence/argument depth]
- Style & Sentence Structure: [Score out of 25 and phrasing/flow]
- Grammar & Mechanics: [Score out of 25 and technical accuracy]`;
    }

    const systemInstruction = `${gradeDirective}

You are a Senior Academic Examiner, Certified College Board AP Reader, and Elite Essay Assessor for the "${curr}" curriculum, specifically for "${subj}".
Your task is to grade and provide rigorous, highly specific, actionable feedback on the student's essay.

GRADE LEVEL CALIBRATION: The student is in Grade: ${gradeLevel || 'Standard'}. Calibrate your explanations, tone, and examples so they are encouraging, academically rigorous, and crystal-clear for this grade level.

CRITICAL GRADING RULES (STRICT COMPLIANCE REQUIRED):
1. OFFICIAL RUBRIC SCORE HEADER:
${rubricInstructions}

2. NO WALL OF TEXT (CATEGORIZED POINT DEDUCTION ANALYSIS):
Under "POINT DEDUCTION ANALYSIS", you MUST break down the score category by category using clean bullet points. For every single category where full points were NOT awarded, explicitly explain the exact deficiency in 1-2 sharp sentences.
${pointDeductionTemplate}

3. ZERO-TOLERANCE MECHANICAL, PUNCTUATION & HOMOPHONE AUDIT:
Under "GRAMMAR, MECHANICS & POLISH", you MUST actively detect and explicitly list EVERY mechanical flaw in the essay, including:
- Comma splices, run-on sentences, missing apostrophes, and punctuation errors.
- Homophone confusion (e.g., "there" vs. "their", "affect" vs. "effect", "your" vs. "you're", "its" vs. "it's").
- Subject-verb disagreement and tense shifts.
NEVER write vague placeholders like "minor word choice issues." You MUST quote the exact erroneous sentence/phrase from the essay and provide the exact corrected sentence!

4. STRUCTURED OUTPUT FORMAT:
Analyze the provided essay and output your response strictly in the following format:

${scoreHeader}

### POINT DEDUCTION ANALYSIS
${pointDeductionTemplate}

### STRENGTHS
- [1-2 sentences highlighting a strong conceptual or stylistic element of the essay with specific examples]

### AREAS FOR IMPROVEMENT
1. [First high-priority structural or argument improvement with actionable advice]
2. [Second high-priority improvement with actionable advice]

### GRAMMAR, MECHANICS & POLISH
[If errors are found, list each one clearly as follows:]
1. [Error Name, e.g. Comma Splice / Homophone Typo / Subject-Verb Agreement]
   - Original: "[Exact quote from student essay]"
   - Correction: "[Exact corrected sentence]"
   - Why: [1 sentence explaining the rule]
[If the essay is mechanically flawless, write: "Zero mechanical or grammatical errors detected. Outstanding prose precision."]

### OVERALL VERDICT
[A supportive, motivating 2-sentence summary providing a clear roadmap for their next revision.]

MATHEMATICAL & SCIENTIFIC FORMULAS (KaTeX):
- When evaluating essays that include scientific, mathematical, or economic principles (e.g. in Biology, Environmental Science, Economics, Chemistry, or Physics), ALWAYS format formulas, variables, and reactions using standard LaTeX: '$...$' for inline (e.g., $E = mc^2$, $PED = \frac{\%\Delta Q}{\%\Delta P}$, $\text{CO}_2$) and '$$...$$' on separate lines for block equations. Never write broken characters.

GIBBERISH / RANDOM TYPING GUARD:
- If the submitted text consists of random typing, keyboard mashing, or lacks coherent sentences, output under the score header: "The submitted text does not contain a coherent essay or recognizable arguments. Please submit a valid written essay to receive full rubric assessment and constructive feedback."`;

    const originalModel = "gemini-flash-lite-latest";
    let modelsToTry = [
      "gemini-flash-lite-latest",
      "gemini-3.5-flash-lite"
    ];

    const now = Date.now();
    const activeModels: string[] = [];
    const backburnerModels: string[] = [];

    for (const m of modelsToTry) {
      const lastLimited = rateLimitedModels[m] || 0;
      const cooldownMs = Math.min(rateLimitedModelsCooldown[m] || 15000, 30000);
      if (now - lastLimited < cooldownMs) {
        backburnerModels.push(m);
      } else {
        activeModels.push(m);
      }
    }

    if (activeModels.length > 0) {
      modelsToTry = [...activeModels, ...backburnerModels];
    }

    // Build contents payload with optional images
    const contentParts = [];
    if (images && Array.isArray(images) && images.length > 0) {
      for (const img of images) {
        if (!img) continue;
        const parts = img.split(',');
        const base64Data = parts[1] || img;
        const mimeType = parts[0]?.split(';')[0]?.split(':')[1] || 'image/jpeg';
        contentParts.push({
          inlineData: {
            mimeType: mimeType,
            data: base64Data
          }
        });
      }
    }
    const targetText = text || "Please read the student's handwritten or typed essay from the attached image(s) and grade it strictly according to the rubric.";
    contentParts.push({ text: targetText });

    let streamResponse = null;
    let lastError: any = null;
    let anyQuotaExceeded = false;

    for (const model of modelsToTry) {
      try {
        const streamConfig: any = {
          systemInstruction: { parts: [{ text: systemInstruction }] },
          temperature: 0.15,
          maxOutputTokens: 3000
        };
        // Only apply thinkingConfig to models that explicitly support it (2.5 Pro/Flash Thinking)
        if (model.includes("thinking") || model.includes("2.5")) {
          streamConfig.thinkingConfig = { thinkingBudget: 0 };
        }

        streamResponse = await aiClient.models.generateContentStream({
          model,
          contents: [{ parts: contentParts }],
          config: streamConfig
        });
        break; // Successfully got the stream
      } catch (err: any) {
        lastError = err;
        const errStr = String(err.message || err);

        const isRateLimitOrQuota = errStr.includes("429") ||
          errStr.includes("quota") ||
          errStr.includes("RESOURCE_EXHAUSTED") ||
          errStr.includes("resource_exhausted") ||
          errStr.includes("limit");

        if (isRateLimitOrQuota) {
          console.warn(`[grade-essay stream] Model ${model} hit rate-limit or quota constraint:`, errStr);
          lastQuotaExceededTime = Date.now();
          rateLimitedModels[model] = Date.now();
          anyQuotaExceeded = true;
          // Continue to next model
          continue;
        } else {
          console.error(`[grade-essay stream] Model ${model} failed:`, errStr);
        }
      }
    }

    // Set streaming headers with immediate flushing and no proxy buffering
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders();

    if (!streamResponse) {
      if (anyQuotaExceeded) {
        res.write("The Gemini API is currently experiencing rate limits. Please try again in 60 seconds.");
      } else {
        res.write("AI generation failed. Please try again or provide a shorter prompt.");
      }
      res.end();
      return;
    }

    let accumulatedOutput = "";
    try {
      for await (const chunk of streamResponse) {
        if (chunk.text) {
          accumulatedOutput += chunk.text;
          res.write(chunk.text);
          if (typeof (res as any).flush === 'function') {
            (res as any).flush();
          }
        }
      }
    } catch (streamErr: any) {
      console.warn("[/api/grade-essay] Stream interrupted midway, attempting recovery...", streamErr?.message);
      try {
        const recoveryRes = await safeGenerateContent({
          gradeLevel,
          stream,
          country,
          profileContext,
          model: "gemini-3.5-flash-lite",
          contents: [{
            parts: [
              ...contentParts,
              ...(accumulatedOutput ? [{ text: `[SYSTEM: Previous streaming was interrupted midway. Please complete the remainder of the grading feedback starting immediately where it cut off]:\n\n${accumulatedOutput}` }] : [])
            ]
          }],
          config: {
            systemInstruction: { parts: [{ text: systemInstruction }] },
            temperature: 0.15,
            maxOutputTokens: 8192
          }
        });
        if (recoveryRes.text) {
          res.write(recoveryRes.text);
          if (typeof (res as any).flush === 'function') {
            (res as any).flush();
          }
        }
      } catch (recErr) {
        console.error("[/api/grade-essay] Stream recovery fallback failed:", recErr);
      }
    }
    res.end();
  } catch (error: any) {
    console.error("Essay Grader error:", error);

    const errorStr = String(error.message || error);
    const isQuotaError = errorStr.includes("429") ||
      errorStr.includes("quota") ||
      errorStr.includes("RESOURCE_EXHAUSTED");

    if (!res.headersSent) {
      if (isQuotaError) {
        res.status(429).json({
          error: "GEMINI_QUOTA_EXHAUSTED",
          message: "The Gemini API is currently experiencing rate limits. Please try again in 60 seconds."
        });
      } else {
        res.status(500).json({ error: error.message || "Failed to grade essay" });
      }
    } else {
      res.end();
    }
  }
});

app.post("/api/scan-essay", upload.single("image"), async (req, res) => {
  try {
    const { gradeLevel } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "No image provided" });
    }
    const aiClient = getAI();

    const imagePart = {
      inlineData: {
        mimeType: req.file.mimetype,
        data: req.file.buffer.toString("base64"),
      },
    };

    const response = await safeGenerateContent({
      model: "gemini-3.5-flash-lite",
      contents: [
        {
          parts: [
            imagePart,
            { text: "Transcribe the handwritten text from this essay image perfectly. Return ONLY the transcribed text. Do not add any conversational filler, intro, outro, or formatting annotations. Keep paragraphs intact as written." }
          ]
        }
      ]
    });

    const text = response.text || "";
    res.json({ text: text.trim() });
  } catch (error: any) {
    console.error("OCR Error:", error);
    res.status(500).json({ error: error.message || "Failed to transcribe image" });
  }
});


app.post("/api/scan-images", upload.array("images", 5), async (req, res) => {
  try {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No images provided" });
    }

    const imageParts = files.map(file => ({
      inlineData: {
        mimeType: file.mimetype,
        data: file.buffer.toString("base64"),
      },
    }));

    const response = await safeGenerateContent({
      model: "gemini-3.5-flash-lite",
      contents: [
        {
          parts: [
            ...imageParts,
            { text: "Transcribe the handwritten and printed text from these images perfectly, preserving their chronological page order. Return ONLY the combined transcribed text. Do not add any conversational filler, intro, outro, or formatting annotations. Keep paragraphs intact as written." }
          ]
        }
      ]
    });

    const text = response.text || "";
    res.json({ text: text.trim() });
  } catch (error: any) {
    console.error("Multimodal OCR Error:", error);
    res.status(500).json({ error: error.message || "Failed to transcribe images" });
  }
});

app.post("/api/generate-flashcards", async (req, res) => {
  try {
    const text = req.body.text || req.body.topic || req.body.content || "";
    const gradeLevel = req.body.gradeLevel || req.body.userGrade;
    const stream = req.body.stream || req.body.academic_stream;
    const country = req.body.country || req.body.academic_country;
    const count = req.body.count;

    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Missing text or topic" });
    }

    const requestedCount = Math.min(Math.max(parseInt(count) || 10, 1), 30);
    const aiClient = getAI();
    const gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    const systemInstruction = `${gradeDirective}

Act as an Elite Cognitive Scientist and Active Recall Specialist.
Your mission is to generate exactly ${requestedCount} high-yield revision flashcards calibrated for a student in Grade: ${gradeLevel || 'Standard'}.

CRITICAL COUNT MANDATE:
The output JSON array MUST contain EXACTLY ${requestedCount} distinct flashcard objects. Never stop early, never output fewer than ${requestedCount} cards, and never omit questions. The output array length MUST be ${requestedCount}.

CRITICAL ACTIVE RECALL & CONCISE LENGTH RULES:
1. PUNCHY ACTIVE RECALL QUESTIONS: The 'question' must be direct, crisp, and test a single core mechanism, formula, definition, historical milestone, or concept appropriate to their grade level.
2. STRICT 15 TO 25 WORDS ANSWER CONSTRAINT: Every 'answer' MUST be strictly concise, punchy, and between 15 to 25 words max. It must be an active recall mnemonic, definition, or key formula concept designed for rapid revision. NEVER output long multi-sentence paragraphs.
3. 100% COMPLETE THOUGHTS: The 15-25 word answer must be grammatically complete and self-contained (no trailing '...', no chopped clauses).
4. LATEX & CODE: If there are formulas, wrap in LaTeX ($...$). If coding/HTML tags, wrap in backticks (\`<div>\`).

CRITICAL OUTPUT FORMAT:
You must output ONLY a valid JSON array of objects. Do not wrap in markdown quotes.

Format:
[
  {
    "question": "What is the primary function of mitochondria in eukaryotic cells?",
    "answer": "Mitochondria generate cellular energy by converting glucose and oxygen into ATP through oxidative phosphorylation and cellular respiration."
  },
  {
    "question": "What is the key principle of Newton's Third Law of Motion?",
    "answer": "Every interacting force creates an equal and opposite reaction acting simultaneously on two distinct interacting physical objects."
  }
]`;

    const response = await safeGenerateContent({
      gradeLevel,
      stream,
      country,
      model: "gemini-3.5-flash-lite",
      contents: [{
        role: "user",
        parts: [{ text: `Generate EXACTLY ${requestedCount} high-yield active recall flashcards with answers strictly between 15 and 25 words from this text or topic for a student in Grade: ${gradeLevel || 'Standard'}. You must provide all ${requestedCount} cards:\n\n${text}` }]
      }],
      config: {
        systemInstruction: { parts: [{ text: systemInstruction }] },
        responseMimeType: "application/json",
        maxOutputTokens: 8192,
        temperature: 0.2
      }
    });

    let outputText = response.text || "[]";
    let cards = safeParseJSON(outputText, 'array');
    if (!Array.isArray(cards) || cards.length === 0) {
      const objParsed = safeParseJSON(outputText, 'object');
      if (objParsed && Array.isArray(objParsed.flashcards)) {
        cards = objParsed.flashcards;
      }
    }
    if (!Array.isArray(cards) || cards.length === 0) {
      const match = outputText.match(/\[\s*\{[\s\S]*\}\s*\]/);
      if (match) {
        try {
          cards = JSON.parse(match[0]);
        } catch (_) {}
      }
    }
    res.json({ flashcards: Array.isArray(cards) ? cards : [] });
  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED") {
      console.warn("Flashcards quota exceeded:", error.message);
      return res.json({
        flashcards: [
          {
            question: "⚠️ AI Tutor Notice: Rate Limit / Quota Exceeded",
            answer: "The Gemini API has exceeded its rate limit. Please wait 60 seconds and try again, or check your API key in settings."
          }
        ]
      });
    }
    console.error("Flashcards error:", error);
    res.status(500).json({ error: error.message || "Failed to generate flashcards" });
  }
});

app.post("/api/generate-pdf-flashcards", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No PDF file uploaded" });
    }

    if (req.file.size > 35 * 1024 * 1024) {
      return res.status(400).json({ error: "File too large. Maximum PDF size is 35MB." });
    }

    const count = req.body.count || 15;
    const gradeLevel = req.body.gradeLevel || req.body.userGrade;
    const stream = req.body.stream || req.body.academic_stream;
    const country = req.body.country || req.body.academic_country;
    const requestedCount = Math.min(Math.max(parseInt(count) || 15, 5), 30);
    const gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    const cacheKey = crypto.createHash("sha256").update(req.file.buffer).digest("hex") + `_pdf_flashcards_${requestedCount}`;
    if (summaryCache.has(cacheKey)) {
      return res.json({ flashcards: summaryCache.get(cacheKey) });
    }

    const systemInstruction = `${gradeDirective}

Act as an Elite Cognitive Scientist and Active Recall Specialist.
Your mission is to thoroughly read, analyze, and comprehend the attached complete PDF document across all its pages, chapters, diagrams, formulas, tables, and sections.
Generate exactly ${requestedCount} high-yield, comprehensive active recall revision flashcards covering the most critical concepts throughout the ENTIRE document calibrated for a student in Grade: ${gradeLevel || 'Standard'}.

CRITICAL ACTIVE RECALL RULES:
1. PUNCHY ACTIVE RECALL QUESTIONS: The 'question' must be direct, crisp, and test a single core mechanism, formula, definition, historical milestone, or concept from the document appropriate to their grade level.
2. STRICT 15 TO 25 WORDS ANSWER CONSTRAINT: Every 'answer' MUST be strictly concise, punchy, and between 15 to 25 words max. It must be an active recall mnemonic, definition, or key formula concept designed for rapid revision. NEVER output long multi-sentence paragraphs.
3. 100% COMPLETE THOUGHTS: The 15-25 word answer must be grammatically complete and self-contained (no trailing '...', no chopped clauses).
4. LATEX & CODE: If there are mathematical formulas, wrap in LaTeX ($...$). If coding/HTML tags, wrap in backticks (\`<div>\`).
5. FULL DOCUMENT COVERAGE: Distribute questions across the entire document (beginning, middle, and end), not just the first few pages.

CRITICAL OUTPUT FORMAT:
Output ONLY a valid JSON array of objects directly parseable by JSON.parse.

Format:
[
  {
    "question": "What is ...?",
    "answer": "..."
  }
]`;

    // Direct PDF multimodal upload without any local text extraction or pdf-parse
    const pdfPart = {
      inlineData: {
        mimeType: req.file.mimetype || "application/pdf",
        data: req.file.buffer.toString("base64"),
      },
    };

    const response = await safeGenerateContent({
      gradeLevel,
      stream,
      country,
      model: "gemini-3.5-flash-lite",
      contents: [{
        parts: [
          pdfPart,
          { text: `Thoroughly analyze all pages of this complete attached PDF document and generate exactly ${requestedCount} high-yield active recall flashcards in the specified JSON array format for a student in Grade: ${gradeLevel || 'Standard'}.` }
        ]
      }],
      config: {
        systemInstruction: { parts: [{ text: systemInstruction }] },
        responseMimeType: "application/json",
        maxOutputTokens: 8192,
        temperature: 0.2
      }
    });

    const outputText = response.text || "[]";
    let cards = safeParseJSON(outputText, 'array');
    if (!Array.isArray(cards) || cards.length === 0) {
      const objParsed = safeParseJSON(outputText, 'object');
      if (objParsed && Array.isArray(objParsed.flashcards)) {
        cards = objParsed.flashcards;
      }
    }

    if (!Array.isArray(cards) || cards.length === 0) {
      return res.status(500).json({ error: "Failed to parse flashcards from PDF content." });
    }

    summaryCache.set(cacheKey, cards);
    return res.json({ flashcards: cards });
  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED") {
      console.warn("PDF Flashcards quota exceeded:", error.message);
      return res.status(429).json({ error: "API quota limit exceeded. Please try again in 60 seconds." });
    }
    console.error("PDF Flashcards Error:", error);
    return res.status(500).json({ error: error.message || "Failed to generate flashcards from PDF" });
  }
});


async function robustFetchYoutubeTranscript(videoId: string): Promise<any[]> {
  console.log(`[robustFetchYoutubeTranscript] Fetching transcript for video: ${videoId}`);

  const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
  ];
  const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];

  let captionTracks: any[] = [];
  let lastError: any = null;

  // Method 1: Try InnerTube API with multiple client options for maximum resilience
  const innerTubeClients = [
    {
      name: 'ANDROID',
      context: {
        client: {
          clientName: 'ANDROID',
          clientVersion: '20.10.38',
        }
      },
      userAgent: 'com.google.android.youtube/20.10.38 (Linux; U; Android 14)'
    },
    {
      name: 'WEB',
      context: {
        client: {
          clientName: 'WEB',
          clientVersion: '2.20240228.01.00',
          hl: 'en',
          gl: 'US'
        }
      },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
    {
      name: 'IOS',
      context: {
        client: {
          clientName: 'IOS',
          clientVersion: '19.29.1',
          deviceModel: 'iPhone16,2',
          osName: 'iPhone',
          osVersion: '17.5.1',
          hl: 'en',
          gl: 'US'
        }
      },
      userAgent: 'com.google.ios.youtube/19.29.1 (iPhone16,2; U; CPU iPhone OS 17_5_1 like Mac OS X; en_US)'
    },
    {
      name: 'TVHTML5',
      context: {
        client: {
          clientName: 'TVHTML5_SIMPLY_EMBEDDED_PLAYER',
          clientVersion: '1.0',
          hl: 'en',
          gl: 'US'
        }
      },
      userAgent: 'Mozilla/5.0 (Chromecast; PlaybackEngine) AppleWebKit/537.36 (KHTML, like Gecko) Kit/6.0.211116.14 Chrome/94.0.4606.111 Safari/537.36'
    }
  ];

  for (const clientConfig of innerTubeClients) {
    try {
      const INNERTUBE_API_URL = 'https://www.youtube.com/youtubei/v1/player?prettyPrint=false';
      console.log(`[robustFetch] Trying InnerTube API (${clientConfig.name} client) for videoId: ${videoId}...`);

      const resp = await fetchWithTimeout(INNERTUBE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': clientConfig.userAgent,
        },
        body: JSON.stringify({
          context: clientConfig.context,
          videoId: videoId,
        }),
      });

      if (resp.ok) {
        const data = await resp.json();
        const tracks = data?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
        if (Array.isArray(tracks) && tracks.length > 0) {
          captionTracks = tracks;
          console.log(`[robustFetch] Successfully fetched ${captionTracks.length} caption tracks from InnerTube API (${clientConfig.name})`);
          break;
        } else {
          console.warn(`[robustFetch] InnerTube API (${clientConfig.name}) response lacked captionTracks. Playability:`, data?.playabilityStatus?.status);
        }
      } else {
        console.warn(`[robustFetch] InnerTube API (${clientConfig.name}) returned status: ${resp.status}`);
      }
    } catch (err: any) {
      console.error(`[robustFetch] InnerTube API (${clientConfig.name}) failed:`, err.message || err);
      lastError = err;
    }
  }

  // Method 2: Try Web Page Scraping with robust parser
  if (captionTracks.length === 0) {
    try {
      console.log(`[robustFetch] Trying Web Page HTML scraping for videoId: ${videoId}...`);
      const url = `https://www.youtube.com/watch?v=${videoId}`;
      const resp = await fetchWithTimeout(url, {
        headers: {
          'User-Agent': randomUserAgent,
          'Accept-Language': 'en-US,en;q=0.9',
        },
      });

      if (!resp.ok) {
        throw new Error(`Web page request failed with status: ${resp.status}`);
      }

      const body = await resp.text();
      if (body.includes('class="g-recaptcha"')) {
        throw new Error("YouTube blocks request with Recaptcha (Too Many Requests / 429)");
      }

      // Try to parse ytInitialPlayerResponse using multiple prefixes
      let playerResponse: any = null;
      const prefixes = [
        "var ytInitialPlayerResponse = ",
        "window['ytInitialPlayerResponse'] = ",
        "window.ytInitialPlayerResponse = ",
        "ytInitialPlayerResponse = "
      ];

      for (const prefix of prefixes) {
        const startIndex = body.indexOf(prefix);
        if (startIndex !== -1) {
          const jsonStart = startIndex + prefix.length;
          let depth = 0;
          for (let i = jsonStart; i < body.length; i++) {
            if (body[i] === '{') depth++;
            else if (body[i] === '}') {
              depth--;
              if (depth === 0) {
                try {
                  playerResponse = JSON.parse(body.slice(jsonStart, i + 1));
                  break;
                } catch (_) { }
              }
            }
          }
          if (playerResponse) break;
        }
      }

      const tracks = playerResponse?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
      if (Array.isArray(tracks) && tracks.length > 0) {
        captionTracks = tracks;
        console.log(`[robustFetch] Successfully fetched ${captionTracks.length} caption tracks from Web Page`);
      } else {
        console.warn(`[robustFetch] No caption tracks found in ytInitialPlayerResponse. Playability:`, playerResponse?.playabilityStatus?.status);
      }
    } catch (err: any) {
      console.error(`[robustFetch] Web Page scraping failed with error:`, err);
      lastError = err;
    }
  }

  if (captionTracks.length === 0) {
    throw lastError || new Error("No caption tracks found or available on this video. Please ensure Closed Captions (CC) are enabled.");
  }

  // Choose the best caption track
  // Logic: First look for English ('en'), then any English variant (starts with 'en'), then any available language track
  let selectedTrack = captionTracks.find(t => t.languageCode === 'en');
  if (!selectedTrack) {
    selectedTrack = captionTracks.find(t => t.languageCode && t.languageCode.startsWith('en'));
  }
  if (!selectedTrack) {
    // Select the first available track
    selectedTrack = captionTracks[0];
    console.log(`[robustFetch] English transcript not found. Falling back to first available language: ${selectedTrack.languageCode}`);
  } else {
    console.log(`[robustFetch] Selected language track: ${selectedTrack.languageCode}`);
  }

  const transcriptURL = selectedTrack.baseUrl;
  if (!transcriptURL) {
    throw new Error("Selected caption track has no baseUrl");
  }

  // Fetch the actual transcript XML
  console.log(`[robustFetch] Fetching transcript XML from: ${transcriptURL}`);
  const transcriptResponse = await fetchWithTimeout(transcriptURL, {
    headers: {
      'User-Agent': randomUserAgent,
    },
  });

  if (!transcriptResponse.ok) {
    throw new Error(`Failed to fetch transcript XML, status: ${transcriptResponse.status}`);
  }

  const xmlText = await transcriptResponse.text();

  // Use YoutubeTranscript's internal parser if available, or write/use a robust local parser
  try {
    const results = (YoutubeTranscript as any).parseTranscriptXml(xmlText, selectedTrack.languageCode);
    if (results && results.length > 0) {
      return results;
    }
  } catch (parseErr) {
    console.error("[robustFetch] YoutubeTranscript.parseTranscriptXml failed, using local fallback parser:", parseErr);
  }

  // Local fallback XML parser
  const results: any[] = [];
  const RE_XML_TRANSCRIPT = /<text start="([^"]*)" dur="([^"]*)">([^<]*)<\/text>/g;
  const pRegex = /<p\s+t="(\d+)"\s+d="(\d+)"[^>]*>([\s\S]*?)<\/p>/g;

  let match;
  while ((match = pRegex.exec(xmlText)) !== null) {
    const startMs = parseInt(match[1], 10);
    const durMs = parseInt(match[2], 10);
    const inner = match[3];
    let text = '';
    const sRegex = /<s[^>]*>([^<]*)<\/s>/g;
    let sMatch;
    while ((sMatch = sRegex.exec(inner)) !== null) {
      text += sMatch[1];
    }
    if (!text) {
      text = inner.replace(/<[^>]+>/g, '');
    }
    text = decodeEntities(text).trim();
    if (text) {
      results.push({
        text,
        duration: durMs,
        offset: startMs,
        lang: selectedTrack.languageCode,
      });
    }
  }

  if (results.length > 0) return results;

  const classicResults = [...xmlText.matchAll(RE_XML_TRANSCRIPT)];
  return classicResults.map((res) => ({
    text: decodeEntities(res[3]),
    duration: parseFloat(res[2]) * 1000,
    offset: parseFloat(res[1]) * 1000,
    lang: selectedTrack.languageCode,
  }));
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

app.post("/api/youtube-summary", async (req, res) => {
  try {
    const { url, followUp, previousSummary, gradeLevel } = req.body;
    if (!url) {
      return res.status(400).json({ error: "Missing YouTube URL" });
    }

    let videoId = "";
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname === 'youtu.be') {
        videoId = parsedUrl.pathname.slice(1);
      } else if (parsedUrl.hostname.includes('youtube.com')) {
        if (parsedUrl.pathname.startsWith('/shorts/')) {
          videoId = parsedUrl.pathname.split('/')[2];
        } else {
          videoId = parsedUrl.searchParams.get('v') || "";
        }
      }
    } catch (e) {
      // Ignored
    }

    if (!videoId) {
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
      videoId = match ? match[1] : url;
    }

    let title = "";
    let authorName = "";
    try {
      const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}&format=json`;
      const oembedRes = await fetchWithTimeout(oembedUrl);
      if (oembedRes.ok) {
        const oembedData = await oembedRes.json();
        title = oembedData.title || "";
        authorName = oembedData.author_name || "";
      }
    } catch (err) {
      console.error("Failed to fetch oembed details", err);
    }

    const fileHash = crypto.createHash("sha256").update(url).digest("hex");
    if (summaryCache.has(fileHash) && !followUp) {
      return res.json({
        text: summaryCache.get(fileHash),
        title: title || "YouTube Video",
        authorName: authorName || "",
        videoId: videoId
      });
    }

    // Handle interactive follow-up suggestions
    if (followUp) {
      const systemInstruction = `You are an expert study coach. The student is asking a follow-up question or requesting an interactive study enhancement based on a previous YouTube video summary.
Your task is to fulfill the request in a highly informative, educational, and engaging way.
Keep your response concise, structured with headings, bullet points, and highlight key terms using markdown.

1. TIMESTAMPS INTEGRATION:
If any specific parts of the video are mentioned, or if referring to specific events, include relevant timestamps formatted exactly as **⏱️ MM:SS** (e.g. **⏱️ 04:20**).

2. INTERACTIVE STUDY SUGGESTIONS:
At the very end of your response, you MUST output 2-3 new interactive follow-up study suggestions formatted exactly as \`[SUGGESTION: ...]\`, e.g.:
\`[SUGGESTION: Explain key concepts simpler]\`
\`[SUGGESTION: Test me with 3 practice questions]\`
\`[SUGGESTION: Generate a list of key terms]\``;

      const promptText = `Previous Summary:
${previousSummary}

Student's Request: "${followUp}"`;

      const response = await safeGenerateContent({
        gradeLevel,
        model: "gemini-3.5-flash-lite",
        contents: { parts: [{ text: promptText }] },
        config: {
          systemInstruction: { parts: [{ text: systemInstruction }] }
        }
      });

      const outputText = response.text || "No response generated.";
      return res.json({
        text: outputText,
        title: title || "YouTube Video",
        authorName: authorName || "",
        videoId: videoId
      });
    }

    let transcriptText = "";
    try {
      console.log(`Attempting to fetch transcript for video: ${videoId}`);
      const transcript = await robustFetchYoutubeTranscript(videoId);

      if (!transcript || transcript.length === 0) {
        throw new Error("No transcript data returned");
      }

      console.log(`Successfully fetched transcript for ${videoId} using robust fetcher`);

      transcriptText = transcript.map(t => {
        const totalSec = Math.floor((t.offset || 0) / 1000);
        const min = Math.floor(totalSec / 60);
        const sec = totalSec % 60;
        const timestampStr = `[${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}]`;
        return `${timestampStr} ${t.text}`;
      }).join(' ');

      // Limit to ~250k characters to prevent timeouts on massive videos
      if (transcriptText.length > 250000) {
        transcriptText = transcriptText.substring(0, 250000) + "... [transcript truncated for length]";
      }

      // If after processing, it's still too short, trigger fallback
      if (transcriptText.trim().split(/\s+/).length < 20) {
        throw new Error("Transcript too short for meaningful summary");
      }
    } catch (e: any) {
      console.warn("YouTube transcript extraction unavailable, returning strict fallback:", e.message || e);
      return res.status(400).json({
        error: "⚠️ I couldn't read the subtitles for this video. Please try pasting the video's transcript directly into the Text Note-Maker."
      });
    }

    const transcriptWordCount = transcriptText.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (transcriptWordCount < 50) {
      return res.status(400).json({
        error: "⚠️ I couldn't read the subtitles for this video. Please try pasting the video's transcript directly into the Text Note-Maker."
      });
    }

    const systemInstruction = `You are an AI assistant tasked with creating high-yield study notes from YouTube videos. Once you have the transcript, create a structured summary with clear headings, bullet points, and key takeaways.
    
1. TIMESTAMPS INTEGRATION:
For each major bullet point, key concept, or important takeaway, locate the closest timestamp in the provided text (formatted as [MM:SS]) and prepend it to the bullet point styled exactly as **⏱️ MM:SS** (e.g., **⏱️ 04:20**). Do not guess timestamps if none are in the transcript, but if they are, use them.

2. INTERACTIVE STUDY SUGGESTIONS:
At the very end of your notes, always include 3 helpful interactive study suggestions wrapped in brackets like \`[SUGGESTION: ...]\`, for example:
\`[SUGGESTION: Explain key concepts simpler]\`
\`[SUGGESTION: Give me a quick 3-question quiz]\`
\`[SUGGESTION: Deep dive into the first half]\``;

    const response = await safeGenerateContent({
      gradeLevel,
      model: "gemini-3.5-flash-lite",
      contents: { parts: [{ text: transcriptText }] },
      config: {
        systemInstruction: { parts: [{ text: systemInstruction }] }
      }
    });

    const outputText = response.text || "No summary generated.";
    summaryCache.set(fileHash, outputText);
    res.json({
      text: outputText,
      title: title || "YouTube Video",
      authorName: authorName || "",
      videoId: videoId
    });
  } catch (error: any) {
    if (error.isRateLimit || error.message === "GEMINI_QUOTA_EXHAUSTED") {
      console.warn("YouTube summary quota exceeded:", error.message);
      return res.status(200).json({
        text: "The YouTube video analysis is currently experiencing high demand. Please try summarizing again in a few moments."
      });
    }
    console.error("YouTube summary error:", error);
    res.status(500).json({ error: error.message || "Failed to generate summary" });
  }
});

app.post("/api/generate-content", async (req, res) => {
  try {
    const { topic, type, tone = "Academic", format = "Standard", gradeLevel, stream, country } = req.body;

    const wordCount = topic ? topic.trim().split(/\s+/).filter(w => w.length > 0).length : 0;

    if (!topic || !type) {
      return res.status(400).json({ error: "Missing topic or type" });
    }

    const aiClient = getAI();
    const gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    let formatSpecificRules = "";
    if (type.toUpperCase() === "ESSAY") {
      const g = (gradeLevel || '').toLowerCase();
      const isMiddleOrEarlyHigh = g.includes('6th') || g.includes('7th') || g.includes('8th') || g.includes('9th') || g.includes('10th') || g.includes('middle') || g.includes('freshman') || g.includes('sophomore');

      if (isMiddleOrEarlyHigh && format !== "APA" && format !== "MLA") {
        formatSpecificRules = `
- GRADE-APPROPRIATE ESSAY STRUCTURE: Structure the essay with an engaging title (# Title), an introductory paragraph with a simple, clear central thesis, 2-4 focused body paragraphs with concrete real-world examples, and a warm, summarizing conclusion.
- ACCESSIBLE LANGUAGE: Keep sentences clear and vocabulary age-appropriate. DO NOT force APA 7th edition headers, student researcher metadata, or complex theoretical citations for middle school and early high school students unless explicitly requested.`;
      } else if (format.includes("APA")) {
        formatSpecificRules = `
- APA 7TH EDITION ESSAY SCHOLARSHIP:
  * Title Block at the beginning:
    # [Complete Descriptive Paper Title]
    **Author:** Student Researcher  
    **Affiliation:** Academic Department, [Institution]  
    **Course:** Academic Writing & Research  
    **Instructor:** Course Examiner  
    **Date:** ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}  
    ---
  * Structure into clear markdown headings (## Introduction, ## Literature Review / Critical Analysis, ## Synthesis & Discussion, ## Conclusion, ## References).
  * MANDATORY IN-TEXT CITATIONS: Integrate parenthetical citations (e.g., (Author, Year)) for empirical claims and theories.
  * 1-TO-1 CITATION MAPPING: Every reference in the ## References list must correspond to an in-text citation in the body.`;
      } else if (format.includes("MLA")) {
        formatSpecificRules = `
- MLA 9TH EDITION ESSAY SCHOLARSHIP:
  * MLA Header at top:
    Student Researcher  
    Course Examiner  
    Academic Writing & Research  
    ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}  
    ### [Centered Title of the Essay]  
    ---
  * Structured analytical paragraphs with in-text parenthetical citations (e.g., (Author Page)).
  * Conclude with ## Works Cited matching body citations.`;
      } else {
        formatSpecificRules = `
- STANDARD ESSAY STRUCTURE:
  * Compelling Title at the top (# Title).
  * Engaging hook and explicit thesis statement in the introductory section.
  * Rich, substantive body paragraphs evaluating mechanisms, counter-perspectives, and evidence.
  * Strong concluding synthesis that leaves the reader with a lasting, insightful takeaway.
  * Do NOT force formal citation codes or author blocks unless the prompt explicitly asks for citations.`;
      }
    } else if (type.toUpperCase() === "BLOG") {
      formatSpecificRules = `
- Ground the text in reality. Use concrete examples, relatable scenarios, or hard numbers.
- Use punchy, scannable paragraphs, Markdown subheadings (###), and bulleted key takeaways.
- Include an eye-catching title, an irresistible hook, and a memorable concluding call-to-action.`;
    } else if (type.toUpperCase() === "POEM") {
      formatSpecificRules = `
- STRICT POEM & STANZA FORMATTING (ZERO PROSE MERGING): Output structured poetic verse with explicit line breaks.
- Separate every stanza with an empty line (\\n\\n).
- Inside each stanza, every single line of poetry MUST end with a newline character (\\n).
- NEVER output continuous prose or block paragraphs for a poem.
- Employ vivid sensory imagery, evocative rhythm, distinct meter, and artistic line breaks.`;
    } else if (type.toUpperCase() === "PARAGRAPH") {
      formatSpecificRules = `
- Deliver a single, highly concentrated, intellectually substantive block of thought without filler fluff (150-250 words).
- Crisp topic sentence, evidence-backed elaboration, and a definitive concluding insight.`;
    }

    let toneSpecificRules = "";
    if (tone.toUpperCase() === "ACADEMIC") {
      toneSpecificRules = `
- Maintain objectivity, elevated scholarship, and formal structure appropriate to the student's grade level.
- Synthesize key mechanisms with authoritative clarity and precise terminology.`;
    } else if (tone.toUpperCase() === "PERSUASIVE") {
      toneSpecificRules = `
- Write with conviction. Be direct, authoritative, and logic-driven.
- Convince the reader using compelling reasoning, empirical examples, and sharp logic.`;
    } else if (tone.toUpperCase() === "CREATIVE") {
      toneSpecificRules = `
- "Show, don't tell."
- Focus on emotional resonance, vivid sensory detail, and imaginative storytelling.
- Avoid melodrama and clichéd tropes.`;
    } else if (tone.toUpperCase() === "CASUAL") {
      toneSpecificRules = `
- Write like a brilliant mentor or an engaging guide.
- Be relatable, conversational, energetic, and highly engaging without being childish.`;
    }

    const systemInstruction = `${gradeDirective}

You are an Elite Academic Author, Senior Essayist, and Master Literary Writer capable of adapting flawlessly to any format, tone, and student grade level (${gradeLevel || 'Standard'}). Your primary goal is to generate high-quality, deeply engaging content tailored to the student's specific academic profile.

1. THE GLOBAL ANTI-ROBOT FILTER (Applies to ALL outputs):
- BAN AI CLICHÉS: Never use overused words like "delve," "testament," "realm," "tapestry," "crucial," "foster," or "unassailable." Use natural, precise, and grade-appropriate vocabulary.
- NO ROBOTIC TRANSITIONS: Eliminate mechanical transitions ("Firstly," "Furthermore," "In conclusion," "Ultimately"). Weave ideas together naturally.
- NO ROBOTIC FILLER: Do not say "Here is your content" or "Certainly". Output ONLY the final content itself.
- LANGUAGE ADAPTABILITY: If the topic prompt is entered in Hindi, Hinglish, Spanish, or any other language, compose the entire piece in that exact language with natural, authentic native phrasing and elevated literary quality.

2. DYNAMIC FORMAT RULES:
${formatSpecificRules}

3. DYNAMIC TONE RULES:
${toneSpecificRules}`;

    const isCreative = type.toUpperCase() === "POEM" || tone.toUpperCase() === "CREATIVE";
    const temperature = isCreative ? 0.75 : tone.toUpperCase() === "PERSUASIVE" ? 0.5 : 0.35;

    const studentContext = [
      gradeLevel ? `Grade: ${gradeLevel}` : '',
      stream ? `Track/Stream: ${stream}` : '',
      country ? `Curriculum: ${country}` : ''
    ].filter(Boolean).join(' | ');

    const promptText = `TASK: Generate a high-quality ${type} on the topic below.
TOPIC: ${topic}
STUDENT PROFILE: ${studentContext || 'Standard Academic Profile'}
CONTENT TYPE: ${type}
TONE: ${tone}
FORMAT: ${format}

CRITICAL EXECUTION:
- Authentically tailor vocabulary, sentence complexity, and subject depth to the student's profile (${studentContext || 'Standard'}).
- Do not produce formulaic AI filler. Deliver a rich, complete, publication-grade piece ready for academic reading or assignment submission.`;

    const response = await safeGenerateContent({
      gradeLevel,
      stream,
      country,
      model: "gemini-flash-lite-latest",
      contents: { parts: [{ text: promptText }] },
      config: { 
        systemInstruction: { parts: [{ text: systemInstruction }] },
        maxOutputTokens: 2500,
        temperature
      }
    });

    const outputText = response.text || "No content generated.";
    res.json({ text: outputText });
  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED" || error.message?.includes("quota")) {
      console.warn("Content generation quota exceeded:", error.message);
      return res.status(429).json({ error: "Generation took too long or failed due to high demand. Please try again in 60 seconds." });
    }
    console.error("Content generation error:", error);
    res.status(500).json({ error: error.message || "Generation took too long or failed. Please try again or provide a shorter prompt." });
  }
});

app.post("/api/grammar-enhance", async (req, res) => {
  try {
    const { text, mode, gradeLevel, stream, country, profileContext, images } = req.body;

    const trimmed = (text || "").trim();
    if (!trimmed && (!images || !Array.isArray(images) || images.length === 0)) {
      return res.status(400).json({ error: "Missing text or images" });
    }

    const aiClient = getAI();
    const userMode = mode === "academic" ? "academic" : "fix";
    let gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);
    if (profileContext) {
      gradeDirective += `\nSTUDENT PROFILE CONTEXT: ${profileContext}`;
    }

    let modeInstruction = "";
    if (userMode === "fix") {
      modeInstruction = `MODE: Fix Grammar Only (Preserves user's original voice)
- Fix all spelling mistakes, grammatical errors, subject-verb agreement issues, punctuation errors, and typos.
- DO NOT rewrite or fundamentally change the user's sentence structure, tone, vocabulary level, or core meaning. Keep it as close to the user's original words as possible, only correcting mistakes and very minor awkward phrasing.`;
    } else {
      modeInstruction = `MODE: Academic Rewrite (Calibrated for Grade: ${gradeLevel || 'Standard'})
- Elevate vocabulary, phrasing, transitions, and flow to match the highest achievement standard of a student in Grade: ${gradeLevel || 'Standard'}.
- Middle school students (Grades 6-8) must receive clear, vibrant, well-structured sentences without artificial college or scientific jargon.
- High school and college students should receive formal academic phrasing, active transitions, and precise conceptual terminology.`;
    }

    const systemInstruction = `${gradeDirective}

You are an Elite Academic Writer, Expert English Editor, and Master Study Coach. Your job is to proofread, correct, and enhance the provided text based on the requested mode and the student's grade level (${gradeLevel || 'Standard'}).

${modeInstruction}

CRITICAL RULES:
1. GIBBERISH / RANDOM TYPING:
   - If the input consists purely of meaningless random characters, random keyboard mashing, or typing tests (e.g. 'Hikjn', 'asdfghj', 'qwerty', '12345'), politely return in "correctedText": "Please provide a valid sentence, paragraph, or essay to check and improve grammar.", with "fixes": ["No meaningful text was detected to correct."].

2. MATHEMATICAL & SCIENTIFIC FORMULAS (KaTeX):
   - If the student's text contains mathematical equations, physics formulas, scientific variables, or chemical reactions, ALWAYS PRESERVE THEM ACCURATELY.
   - Retain or format equations using standard LaTeX syntax: '$...$' for inline math/formulas (e.g., $E = mc^2$, $F = ma$, $v = u + at$) and '$$...$$' on separate lines for block equations.
   - NEVER strip, corrupt, or alter LaTeX backslashes, superscripts, subscripts, or mathematical operators during grammatical correction.

3. PRESERVE INTENT & FORMAT:
   - Keep bullet points, paragraphs, and list structures intact.

CRITICAL OUTPUT FORMAT:
You must return your output strictly in JSON format matching the following schema. Do not output any markdown formatting, wrappers, or conversational text outside the JSON.

{
  "correctedText": "The fully polished and corrected text matching the chosen mode.",
  "fixes": [
    "A concise, educational bullet point of what was fixed and why (e.g., 'Corrected spelling of \"milks\" to \"milk\" because \"milk\" is an uncountable noun.'). Limit to 3-6 key educational fixes."
  ]
}`;

    // Build content payload with optional images
    const contentParts = [];
    if (images && Array.isArray(images) && images.length > 0) {
      for (const img of images) {
        if (!img) continue;
        const parts = img.split(',');
        const base64Data = parts[1] || img;
        const mimeType = parts[0]?.split(';')[0]?.split(':')[1] || 'image/jpeg';
        contentParts.push({
          inlineData: {
            mimeType: mimeType,
            data: base64Data
          }
        });
      }
    }
    const targetText = trimmed || "Please read the text inside the attached image(s), correct any grammatical errors, and enhance it according to the chosen mode.";
    contentParts.push({ text: targetText });

    // Model fallback chain for fast and robust responses
    const grammarModels = [
      "gemini-flash-lite-latest",
      "gemini-3.5-flash-lite",
      "gemini-3.5-flash"
    ];
    let response: any = null;
    let grammarError: any = null;

    for (const model of grammarModels) {
      try {
        response = await safeGenerateContent({
          gradeLevel,
          stream,
          country,
          profileContext,
          model,
          contents: { parts: contentParts },
          config: {
            systemInstruction: { parts: [{ text: systemInstruction }] },
            responseMimeType: "application/json"
          }
        });
        if (response && response.text) {
          grammarError = null;
          break;
        }
      } catch (err: any) {
        console.warn(`[grammar-enhance] Model ${model} failed, trying fallback:`, err?.message || err);
        grammarError = err;
      }
    }

    if (!response && grammarError) {
      throw grammarError;
    }

    const outputRaw = response?.text || "{}";
    let correctedText = "";
    let fixes: string[] = [];

    try {
      const parsed = safeParseJSON(outputRaw, 'object');
      correctedText = parsed.correctedText || parsed.text || outputRaw;
      fixes = Array.isArray(parsed.fixes) ? parsed.fixes : [];
    } catch (parseError) {
      console.log("[grammar-enhance] Failed to parse JSON, falling back to raw output", parseError);
      correctedText = outputRaw;
      fixes = ["Reviewed grammar, spelling, and phrasing structures."];
    }

    res.json({ text: correctedText, fixes });
  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED") {
      console.warn("Grammar enhance quota exceeded:", error.message);
      return res.status(429).json({ error: "The Gemini API is currently experiencing rate limits. Please try again in 60 seconds." });
    }
    console.error("Grammar enhance error:", error);
    res.status(500).json({ error: error.message || "Failed to enhance grammar" });
  }
});


app.post("/api/extract-file-text", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }
    let extractedText = "";
    if (req.file.mimetype === "application/pdf" || req.file.originalname.toLowerCase().endsWith(".pdf")) {
      try {
        const pdfModule: any = await import("pdf-parse/lib/pdf-parse.js");
        const parsePdf = pdfModule.default || pdfModule;
        const pdfData = await parsePdf(req.file.buffer, { max: 60 });
        if (pdfData.numpages > 60) {
          return res.status(400).json({ error: "PDF document exceeds 60 pages limit. Please upload a shorter document." });
        }
        extractedText = pdfData.text || "";
        if (extractedText && extractedText.length > 500000) { extractedText = extractedText.slice(0, 500000); }
      } catch (parseError: any) {
        return res.status(500).json({ error: "Failed to parse PDF: " + parseError.message });
      }
    } else {
      extractedText = req.file.buffer.toString("utf-8");
    }

    if (!extractedText || !extractedText.trim()) {
      return res.status(400).json({ error: "Could not extract any readable text from this file." });
    }

    res.json({ text: extractedText.trim() });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to extract text from file." });
  }
});

app.post("/api/fetch-url-text", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "No URL provided" });
    }

    const targetUrl = url.trim();
    const scraperUrl = `https://r.jina.ai/${targetUrl}`;

    try {
      const response = await fetchWithTimeout(scraperUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "X-No-Cache": "true"
        }
      });

      if (!response.ok) {
        return res.status(500).json({ error: `Unable to read this link. The website's security is blocking our AI. Please copy and paste the article text directly into the box.` });
      }

      let cleanText = await response.text();

      // Validation Gateway
      const blockedPhrases = ["403 forbidden", "access denied", "robot check", "captcha", "cloudflare"];
      const lowercaseText = cleanText.toLowerCase();
      const isBlocked = blockedPhrases.some(phrase => lowercaseText.includes(phrase));

      if (cleanText.length < 20 || isBlocked) {
        return res.status(400).json({ error: "Unable to read this link. The website's security is blocking our AI. Please copy and paste the article text directly into the box." });
      }

      if (cleanText.length > 60000) {
        cleanText = cleanText.slice(0, 60000) + "...";
      }

      res.json({ text: cleanText.trim() });
    } catch (fetchError) {
      res.status(500).json({ error: "Unable to read this link. The website's security is blocking our AI. Please copy and paste the article text directly into the box." });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to retrieve webpage content." });
  }
});


app.post("/api/summarize-text", async (req, res) => {
  try {
    const { text, format, gradeLevel, stream, country, profileContext } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Please enter a topic or text to summarize." });
    }

    const trimmedText = text.trim();
    if (trimmedText.length < 2) {
      return res.json({ text: "Please enter a valid topic, paragraph, or paste your study notes to summarize." });
    }

    const aiClient = getAI();
    const summaryFormat = format || "bullet";
    const gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    // Link block phrases check (only if text looks like a URL scrape error or blocked link)
    const blockedPhrases = ["403 forbidden", "access denied", "robot check", "captcha", "cloudflare"];
    const lowercaseText = trimmedText.toLowerCase();
    if (blockedPhrases.some(p => lowercaseText.includes(p)) && (lowercaseText.includes('http') || lowercaseText.includes('www') || lowercaseText.includes('error') || lowercaseText.includes('403'))) {
      return res.json({ text: "Unable to read this link. The website's security is blocking our AI. Please copy and paste the article text directly into the box." });
    }

    let selectedFormatName = "Bullet Points";
    if (summaryFormat === "tldr") {
      selectedFormatName = "Short TL;DR";
    } else if (summaryFormat === "eli5") {
      selectedFormatName = "Explain Like I'm 5";
    }

    const systemInstruction = `${gradeDirective}

SYSTEM INSTRUCTION: EXPERT SUMMARISER

You are an expert academic and professional summarizer. Your task is to extract key information from the provided text or topic and format it STRICTLY according to the user's requested mode, tightly calibrated to the student's grade level (${gradeLevel || 'Standard'}).

USER'S REQUESTED FORMAT: ${selectedFormatName}

CRITICAL RULES:
1. TOPIC VS TEXT HANDLING:
   - If the student provides a brief topic, concept name, or question (e.g. "Photosynthesis", "Newton's laws", "World War 2", "Ohm's Law"), synthesize and provide a comprehensive, high-yield academic summary explaining that topic in depth with clear definitions, principles, and key facts according to the requested format.
   - If the input is a long article or document notes, extract and condense the core ideas without losing vital academic facts.
   - If the input consists purely of meaningless random characters or typing tests (e.g., 'Hikjn', 'asdfghj', 'qwerty'), politely state: "Please provide a valid topic, paragraph, or paste your study notes to generate an accurate summary."

2. NEVER output a "Wall of Text". Always use proper line breaks and structure.

DYNAMIC FORMATTING RULES:

IF FORMAT IS "Bullet Points":
1. Start with ONE main heading using ## (e.g., ## Key Concepts & Summary).
2. Then break the summary into logical topic sections. Use ### for each section heading.
3. MANDATORY: Under each section heading, EVERY point MUST be on its OWN LINE starting with "- " (standard markdown list).
4. CONCISE & HIGH-YIELD: Keep each bullet point under 2 sentences.
5. NO NARRATIVE: Do not write conversational filler intro or conclusion paragraphs. Start immediately with the main heading.
6. EXAMPLE OF EXPECTED FORMAT:

## Main Topic Summary

### Section One

- First key fact about this section.
- Second key fact about this section.

### Section Two

- First key fact about section two.
- Second key fact about section two.

IF FORMAT IS "Short TL;DR":
1. Provide the absolute bottom-line of the text/topic.
2. Structure it as one short "Executive Summary" paragraph (max 3-4 sentences).
3. Follow it with a "Top 3 Takeaways" numbered list.
4. Keep the tone professional, direct, and time-saving.

IF FORMAT IS "Explain Like I'm 5":
1. Break down complex jargon into friendly, intuitive vocabulary.
2. Use at least one relatable, everyday analogy.
3. Keep the tone extremely warm, engaging, and story-like.
4. Use short paragraphs to make it visually friendly for beginners.

OUTPUT QUALITY & MATHEMATICAL FORMULAS (KaTeX):
1. Use ONLY standard markdown: ## headings, ### subheadings, - bullet lists, **bold**, *italic*.
2. Each bullet point MUST be on its OWN separate line. Never put multiple points on the same line.
3. MATHEMATICAL & SCIENTIFIC FORMULAS (KaTeX): When summarizing content involving mathematics, physics, or chemistry, ALWAYS format equations and mathematical variables using standard LaTeX syntax:
   - Use '$...$' for inline math/formulas (e.g., $E = mc^2$, $F = ma$, $\\lambda = \\frac{h}{p}$).
   - Use '$$...$$' on separate lines for standalone equations or multi-step derivations.
   This ensures crisp, beautiful KaTeX rendering for the student.
4. Ensure there is a blank line before and after every heading and list block.`;

    // Model fallback chain for text summarize
    const textSumModels = [
      "gemini-flash-lite-latest",
      "gemini-3.5-flash-lite"
    ];
    let textSummaryResult = "";
    let textSumError: any = null;
    for (const model of textSumModels) {
      try {
        const response = await safeGenerateContent({
          gradeLevel,
          stream,
          country,
          profileContext,
          model,
          contents: { parts: [{ text: trimmedText }] },
          config: { systemInstruction: { parts: [{ text: systemInstruction }] }, maxOutputTokens: 2500, temperature: 0.3 }
        });
        textSummaryResult = response.text || "";
        textSumError = null;
        break;
      } catch (err: any) {
        console.warn(`[summarize-text] Model ${model} failed, trying next fallback:`, err?.message || err);
        textSumError = err;
        continue;
      }
    }
    if (textSumError && !textSummaryResult) throw textSumError;

    res.json({ text: textSummaryResult });
  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED") {
      console.warn("Text summarize quota exceeded:", error.message);
      return res.json({
        text: `⚠️ AI Tutor Notice: Rate Limit / Quota Exceeded\n\nThe Gemini API is currently experiencing rate limits. Please wait 60 seconds and try again.`
      });
    }
    console.error("Text summarize error:", error);
    res.status(500).json({ error: error.message || "Failed to summarize text." });
  }
});



app.post("/api/generate-questions", async (req, res) => {
  try {
    const topic = req.body.topic || req.body.prompt || req.body.text || "";
    const gradeLevel = req.body.gradeLevel || req.body.userGrade || "10th Grade / Secondary";
    const count = req.body.count;
    const stream = req.body.stream;
    const country = req.body.country;
    const requestedCount = Math.min(Math.max(parseInt(count) || 5, 1), 30);
    const topicText = topic && topic.trim() ? topic.trim() : `important core concepts in ${stream || 'academic curriculum'}`;

    const systemInstruction = `You are a Chief Academic Examiner, Master Board Question Paper Setter, and Senior Pedagogical Architect.
Your task is to craft authentic, real-exam style SUBJECTIVE (descriptive / open-ended) practice questions along with official examiner marking rubrics and score allocations.

CRITICAL ARCHITECTURE RULES:

1. SUBJECT & DOMAIN INTEGRITY:
   - Automatically detect the true academic subject of the given topic (Literature, Science, Mathematics, Social Sciences, Commerce, Computer Science).
   - Use clean LaTeX ($...$) for all math and science formulas (e.g. $F = ma$, $H_2O$, $V = IR$).

2. REAL EXAM QUESTION VARIETY:
   - Provide a realistic, diverse blend across the ${requestedCount} questions:
     * Standalone Short/Medium Conceptual Questions (2–3 Marks).
     * Standalone Long Analytical / Evaluative Questions (5–6 Marks).
     * Multi-part questions ((a) and (b)) only when naturally appropriate.

3. GRADE & CURRICULUM CALIBRATION:
   - Target Grade: ${gradeLevel}. Match vocabulary and difficulty strictly to this grade level.

4. MANDATORY COMPREHENSIVE MODEL ANSWER ('expectedAnswer'):
   - You MUST provide a complete, high-yield, step-by-step model solution in 'expectedAnswer' for EVERY SINGLE question.
   - For mathematical, science, and numerical questions: Write out the full derivation, explicit formulas in LaTeX ($...$), working steps, and final answer with units.
   - For literature, humanities, and descriptive questions: Write a structured, multi-paragraph complete answer.
   - NEVER leave 'expectedAnswer' blank, empty, or generic!

5. OFFICIAL MARKING RUBRIC ('keyRubricPoints'):
   - Provide an array of 2-4 key scoring criteria with explicit mark allocations (e.g. "[1 Mark] Correct formula...", "[1 Mark] Final calculated value with units...").

6. STRICT JSON OUTPUT FORMAT:
   - Return ONLY a valid JSON object with the key "questions".
   - Do NOT wrap in markdown blockquotes or include commentary.

JSON structure:
{
  "questions": [
    {
      "question": "Question text here...",
      "expectedAnswer": "Comprehensive step-by-step model answer here...",
      "keyRubricPoints": [
        "[1 Mark] Key concept 1",
        "[1 Mark] Key concept 2"
      ]
    }
  ]
}`;

    const avoidList = Array.isArray(req.body.avoidPrompts) ? req.body.avoidPrompts.filter(Boolean).slice(0, 10) : [];
    const avoidDirective = avoidList.length > 0
      ? `\nSTRICT ANTI-REPETITION: Do NOT generate questions similar to these previously answered prompts:\n${avoidList.map((p: string, i: number) => `  [${i+1}] ${p.slice(0, 100)}`).join('\n')}`
      : '';

    const userStreamDirective = stream && stream.trim() ? `Academic Track / Context: ${stream}.` : '';
    const userCountryDirective = country && country.trim() ? `Education Board / Region: ${country}.` : '';

    const userPrompt = `Topic: "${topicText}".
Target Grade: ${gradeLevel}.
${userStreamDirective}
${userCountryDirective}
Directive: Generate exactly ${requestedCount} authentic, high-yield subjective practice questions tailored to this topic and grade.
CRITICAL COUNT MANDATE: The output array MUST contain EXACTLY ${requestedCount} question objects. Never stop early or generate fewer than ${requestedCount}.
For each question, provide:
1. 'question': Authentic exam question.
2. 'expectedAnswer': Comprehensive, non-empty step-by-step official model solution (MANDATORY).
3. 'keyRubricPoints': 2-4 point marking rubric with mark values.${avoidDirective}`;

    let generatedText = "";
    try {
      const response = await safeGenerateContent({
        gradeLevel,
        stream,
        country,
        model: "gemini-flash-lite-latest",
        contents: { parts: [{ text: userPrompt }] },
        config: {
          systemInstruction: { parts: [{ text: systemInstruction }] },
          responseMimeType: "application/json",
          maxOutputTokens: 8192,
          temperature: 0.6
        }
      });
      generatedText = response.text || "";
    } catch (apiError: any) {
      console.warn("API Error during subjective question generation:", apiError);
      throw apiError;
    }

    const sanitizeQuestions = (list: any[]) => list.map(q => {
      if (typeof q === 'string') {
        return {
          question: q,
          expectedAnswer: `Official Model Solution:\n• Core Principle: Address the foundational concepts and theoretical definitions required by: "${q.slice(0, 100)}...".\n• Step-by-Step Analysis: Provide comprehensive reasoning, governing formulas ($...$), and structured arguments.\n• Conclusion: Summarize key deductions with precision and necessary units.`,
          keyRubricPoints: [
            "[1 Mark] Accurate conceptual definition or formula",
            "[2 Marks] Step-by-step reasoning and mathematical / analytical proof",
            "[1 Mark] Final accurate conclusion or calculated value with units"
          ]
        };
      }
      const rawAns = q.expectedAnswer ?? q.answer ?? q.solution ?? q.modelAnswer ?? q.model_answer ?? q.expected_answer ?? q.detailedAnswer ?? q.explanation ?? '';
      const rawRub = q.keyRubricPoints ?? q.rubric ?? q.rubricPoints ?? q.key_rubric_points ?? q.markingScheme ?? q.marking_scheme ?? [];
      const questionText = q.question || q.title || q.prompt || '';
      const finalAns = typeof rawAns === 'string' ? rawAns.trim() : (Array.isArray(rawAns) ? rawAns.join('\n\n') : String(rawAns || ''));
      return {
        ...q,
        question: questionText,
        expectedAnswer: finalAns || `Official Model Solution:\n• Core Principle: Address the foundational concepts and theoretical definitions required by: "${questionText.slice(0, 100)}...".\n• Step-by-Step Analysis: Provide comprehensive reasoning, governing formulas ($...$), and structured arguments.\n• Conclusion: Summarize key deductions with precision and necessary units.`,
        keyRubricPoints: Array.isArray(rawRub) && rawRub.length > 0 ? rawRub.map((r: any) => String(r).trim()).filter(Boolean) : (typeof rawRub === 'string' && rawRub.trim() ? [rawRub.trim()] : [
          "[1 Mark] Accurate conceptual definition or formula",
          "[2 Marks] Step-by-step reasoning and mathematical / analytical proof",
          "[1 Mark] Final accurate conclusion or calculated value with units"
        ])
      };
    });

    let parsed = safeParseJSON(generatedText, 'object');
    if (parsed && Array.isArray(parsed.questions) && parsed.questions.length > 0) {
      return res.json({ questions: sanitizeQuestions(parsed.questions) });
    } else if (Array.isArray(parsed) && parsed.length > 0) {
      return res.json({ questions: sanitizeQuestions(parsed) });
    } else if (parsed && typeof parsed === 'object') {
      const found = Object.values(parsed).find(v => Array.isArray(v) && v.length > 0);
      if (found) return res.json({ questions: sanitizeQuestions(found as any[]) });
    }

    // Secondary attempt with array mode in case the model returned a top-level array
    parsed = safeParseJSON(generatedText, 'array');
    if (Array.isArray(parsed) && parsed.length > 0) {
      return res.json({ questions: sanitizeQuestions(parsed) });
    }

    throw new Error("Failed to generate a valid subjective questions structure.");

  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED") {
      return res.status(429).json({ 
        error: "QUOTA_EXCEEDED",
        text: `⚠️ AI Tutor Notice: Rate Limit / Quota Exceeded\n\nThe Gemini API is currently experiencing rate limits. Please try again in 60 seconds.`
      });
    }
    console.error("Question generation endpoint error:", error);
    res.status(500).json({ error: error.message || "Failed to generate questions" });
  }
});

function getCollegeBoardSubjectGuidelines(subject: string, questionType: 'objective' | 'subjective'): string {
  const s = (subject || '').toLowerCase();
  
  if (s.includes('human geography') || s.includes('aphg')) {
    if (questionType === 'objective') {
      return `AP HUMAN GEOGRAPHY (APHG) EXAM SPECIFICATIONS (College Board CED - #1 Grade 9 AP):
- Target Audience: Grade 9 (Freshman) High School Students. Stimulus-based, testing spatial perspective, geographic patterns, and real-world regional connections across Units 1–7.
- Core Topics:
  1. Thinking Geographically (Geospatial tech [GIS, GPS, remote sensing], scales of analysis [local, regional, national, global], formal/functional/perceptual regions).
  2. Population & Migration (Demographic Transition Model [DTM Stages 1-5], population pyramids, dependency ratios, Malthusian theory, push/pull factors, Ravenstein's laws, refugees/IDPs).
  3. Cultural Patterns & Processes (Hearths, spatial diffusion [contagious, hierarchical, stimulus, relocation], acculturation, assimilation, language families, universalizing vs ethnic religions).
  4. Political Patterns & Processes (Sovereignty, nation-states, stateless nations, supranationalism [UN, EU, NATO], devolution, gerrymandering, boundaries/UNCLOS).
  5. Agriculture & Rural Land-Use (Von Thünen model, Green Revolution, subsistence vs commercial agriculture, intensive vs extensive farming, global supply chains).
  6. Cities & Urban Land-Use (Burgess Concentric Zone, Hoyt Sector, Harris-Ullman Multiple Nuclei, Galactic model, Christaller's Central Place Theory, rank-size rule, primate cities, gentrification, New Urbanism).
  7. Industrial & Economic Development (Wallerstein World Systems [Core/Periphery], Rostow 5 Stages of Economic Growth, Weber Least Cost Theory, HDI, UN SDGs).
- Stimulus Requirement: Ground questions in realistic geographic stimuli (demographic data charts, regional map descriptions, population pyramid profiles, or geographic case studies).
- Distractors: Plausible 9th-grade misconceptions (e.g., confusing environmental determinism with possibilism, confusing hierarchical with contagious diffusion, or misidentifying DTM stages).
- MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING PROTOCOL:
  Before finalizing any MCQ, perform an internal self-audit:
  1. Geographic Fact Check: Verify demographic numbers, geographic models (DTM 1-5, Von Thünen, Burgess, Rostow, Wallerstein), and regional associations.
  2. Single Unambiguous Key Check: Ensure exactly ONE option (the key) is unequivocally correct based on College Board CED definitions. The other 3 options must be distinct 9th-grade student misconceptions.
  3. Stimulus Solvability: If referring to a data table or map description, ensure all needed evidence is explicitly given.
  4. Instant Self-Healing: If you find ANY ambiguity, incorrect geographic fact, or invalid distractor during your self-check, DO NOT output it. Discard and completely regenerate or heal the question immediately before returning the final JSON.`;
    } else {
      return `AP HUMAN GEOGRAPHY FREE RESPONSE EXAM STANDARDS (COLLEGE BOARD SECTION II - 100% AUTHENTIC REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED FROM OFFICIAL EXAM SETS (2023, 2024, 2025, 2026):
You are the College Board AP Human Geography Chief Reader. Section II has 3 questions (1 hr 15 min). Every question you generate MUST strictly follow this exact real-exam blueprint:

1. MANDATORY 7-PART SUB-QUESTION ANATOMY (PARTS A THROUGH G):
- Every single Free Response Question MUST consist of EXACTLY 7 distinct parts labeled:
  A. [Sub-question]
  B. [Sub-question]
  C. [Sub-question]
  D. [Sub-question]
  E. [Sub-question]
  F. [Sub-question]
  G. [Sub-question]
- Outputting fewer than 7 parts or more than 7 parts is STRICTLY FORBIDDEN.
- TOTAL POINTS: EXACTLY 7 POINTS (Each part A through G is worth exactly 1 point: +1 pt per part).

2. THE 3 OFFICIAL COLLEGE BOARD QUESTION ARCHETYPES:
- QUESTION TYPE 1 (NO STIMULUS - CONCEPTUAL / SPATIAL SCENARIO):
  * Begins with a 1-2 sentence real-world geographic scenario setting the spatial and thematic context.
  * Followed immediately by: "Respond to parts A, B, C, D, E, F, and G."
  * No visual, map, or table stimulus. Tests pure spatial concepts, spatial models, and multi-unit linkages.
- QUESTION TYPE 2 (ONE STIMULUS - AUTHENTIC DATA TABLE OR CANONICAL THEMATIC MAP):
  * Rooted in EXACTLY ONE authentic stimulus:
    [PILLAR 1: CANONICAL THEMATIC MAP / SPATIAL MODEL]:
    - If testing a visual model, open the prompt with one of the canonical College Board figures:
      * Unit 2 (Population & Migration): "Figure 1: Demographic Transition Model (DTM Stages 1–5)" OR "Figure 1: Global Total Fertility Rates (TFR) Thematic Choropleth Map" OR "Figure 1: Major Global Transnational Migration Corridors and Labor Flows Map"
      * Unit 5 (Agriculture): "Figure 1: Von Thünen Model of Agricultural Land-Use"
      * Unit 6 (Cities & Urban): "Figure 1: Burgess Concentric Zone Urban Model" OR "Figure 1: Hoyt Sector Model (Axial Urban Corridors)" OR "Figure 1: Harris-Ullman Multiple Nuclei and Galactic Edge City Model"
      * Unit 7 (Industrial & Economic Development): "Figure 1: Wallerstein World Systems Theory (Core-Periphery Spatial Model)"
      (The platform automatically attaches pixel-perfect vector SVG maps for these canonical models!)
    [PILLAR 2: AUTHENTIC DEMOGRAPHIC / SPATIAL MARKDOWN DATA TABLE - THE #1 MOST COMMON COLLEGE BOARD STIMULUS]:
    - Format as a clean standard GitHub Markdown table (| Region/Country | CBR | CDR | TFR | GNI per Capita |) with authentic institutional citations (UN, World Bank, FAO). NEVER use LaTeX math arrays ($$\\begin{array}).
  * Parts A & B MUST explicitly reference the stimulus: "Using the map shown in Figure 1, identify..." or "Using the data in the table, identify...".
- QUESTION TYPE 3 (TWO STIMULI - COMPARATIVE SYNTHESIS):
  * Rooted in TWO complementary sources labeled "Source 1" and "Source 2":
    [PILLAR 3: PAIRED SPATIAL REGIONAL CASE SCENARIOS]:
    - Source 1: Thematic Map or Spatial Boundary Scenario (e.g. "Source 1: Figure 1 - Major Global Transnational Migration Corridors Map" OR subnational administrative governance scenario).
    - Source 2: Paired Demographic, Economic, or Remittance Survey Data Table (e.g. "Source 2: Table 1 - Foreign Remittance Inflows and Emigration Statistics by Country of Origin").
  * Requires comparative synthesis between Source 1 and Source 2 across subparts (e.g. Part A analyzes Source 1, Part B analyzes Source 2, Part C compares the relationship between Source 1 and Source 2).

3. STRATIFIED DISTRIBUTION BY SESSION QUESTION COUNT:
When generating a batch of questions, assign archetypes based on the total requested question count:
- IF COUNT == 3 (Official Exam Simulation Set):
  * Question 1 = Type 1 (No Stimulus)
  * Question 2 = Type 2 (One Stimulus: Data Table or Thematic Map)
  * Question 3 = Type 3 (Two Stimuli: Comparative 2 Sources/Maps/Tables)
- IF COUNT == 5 (Practice Bank):
  * Questions 1 & 2 = Type 1 (No Stimulus)
  * Questions 3 & 4 = Type 2 (One Stimulus)
  * Question 5 = Type 3 (Two Stimuli)
- IF COUNT == 10 (Marathon Bank):
  * Questions 1, 2, 3 = Type 1 (No Stimulus)
  * Questions 4, 5, 6 = Type 2 (One Stimulus)
  * Questions 7, 8, 9, 10 = Type 3 (Two Stimuli)
- IF COUNT == 15 (Mega Practice Bank):
  * Questions 1 to 5 = Type 1 (No Stimulus)
  * Questions 6 to 10 = Type 2 (One Stimulus)
  * Questions 11 to 15 = Type 3 (Two Stimuli)

4. OFFICIAL COLLEGE BOARD COMMAND VERB HIERARCHY:
Each part (A through G) must use an authentic College Board command verb:
- "Identify..." (1-2 concise sentences identifying the specific concept, spatial trend, or datum from stimulus).
- "Define..." (Precise academic definition of the geographical term, model, or principle).
- "Describe..." (Provide relevant observable characteristics, spatial patterns, or demographic trends).
- "Explain..." (MUST provide cause-and-effect line of reasoning showing HOW or WHY mechanism X leads to outcome Y in geographic context).
- SIGNATURE COLLEGE BOARD COMMAND VERB (MANDATORY IN PART F OR G):
  "Explain the degree to which... (Response must indicate the degree [low, moderate, high] and provide an explanation.)"

5. MANDATORY CROSS-UNIT SYNTHESIS (NEVER ISOLATE TO A SINGLE UNIT):
Real College Board questions synthesize concepts across multiple units:
- Combine Unit 2 (Population/Migration) + Unit 6 (Cities/Urban land-use/Housing discrimination/Sustainability).
- Combine Unit 4 (Political/Sovereignty/Federalism) + Unit 6 (Metropolitan transit fragmentation/Edge cities).
- Combine Unit 5 (Agriculture/Green Revolution) + Unit 7 (Economic development/Trade interdependence/Commodity dependence).
- Combine Unit 3 (Cultural diffusion/Linguistic patterns) + Unit 4 (Colonialism/Devolution/Indigenous autonomy).

6. COPYRIGHT & ORIGINALITY SAFEGUARD:
- DO NOT copy verbatim questions, maps, or exact numbers from the official 2023-2026 exam PDFs.
- Invent 100% fresh, realistic global scenarios (e.g. agricultural commodity exports in Southeast Asia, pastoral migration in Central Asia, metropolitan boundary governance in European/North American transit systems, demographic shifts in aging vs youthful nations).

7. SCORING RUBRIC & EXEMPLARY MODEL ANSWER:
- In "totalPoints", specify exactly 7.
- In "scoringRubric", provide a strict 7-item array (+1 point for each part A through G) stating the exact criteria required to earn the point.
- In "modelAnswer", provide a complete exemplary response with clear labels: "Part A: ...\\n\\nPart B: ...\\n\\nPart C: ...\\n\\nPart D: ...\\n\\nPart E: ...\\n\\nPart F: ...\\n\\nPart G: ...".

8. MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING PROTOCOL:
Before returning any Free Response Question, the AI MUST execute a rigorous internal quality audit:
- Check 1 (7-Part Completeness): Does the question have EXACTLY 7 parts labeled A through G? (If not, immediately expand or adjust to exactly 7 parts).
- Check 2 (Points Parity): Is every single part worth exactly 1 point, totaling exactly 7 points? Does the scoring rubric have 7 distinct items (+1 for each part)?
- Check 3 (College Board Command Verbs): Does part F or G contain the signature command: "Explain the degree to which..."? Do earlier parts correctly use Identify, Define, Describe, and Explain?
- Check 4 (Geographic Plausibility & Model Integrity): Are all demographic data points (TFR, CBR, CDR, IMR) realistic for the identified countries? Are geographic models (Von Thünen concentric rings, Burgess, Hoyt, Rostow stages, Wallerstein world systems) applied with 100% textbook accuracy without hallucinations?
- Check 5 (Self-Correction & Regeneration): If ANY part is flawed, ambiguous, or lacks geographic rigor, the AI MUST discard and replace that sub-part, or completely rewrite and heal the question to 100% College Board perfection before outputting.`;
    }
  }

  if (s.includes('environmental') || s.includes('apes')) {
    if (questionType === 'objective') {
      return `AP ENVIRONMENTAL SCIENCE (APES) EXAM SPECIFICATIONS (College Board CED):
- Target Level: Grade 9-10 introductory environmental lab science. High conceptual clarity, data interpretation, and environmental problem-solving across Units 1–9.
- Core Units:
  1-3. Ecosystems, biogeochemical cycles (carbon, nitrogen, phosphorus, water), trophic cascades, 10% rule, biodiversity, ecosystem services, population ecology (r/K selection, survivorship curves, carrying capacity).
  4-6. Earth systems (soil texture triangle, atmosphere, El Niño), land & water use (Tragedy of the Commons, Green Revolution, irrigation, IPM, CAFOs, mining), energy resources (fossil fuels, nuclear, solar, wind, efficiency).
  7-9. Atmospheric pollution (photochemical smog, acid deposition, thermal inversions), aquatic/terrestrial pollution (eutrophication, biomagnification, LD50, landfills), global change (stratospheric ozone depletion, ocean acidification, climate mitigation).
- Quantitative Reasoning: Include realistic environmental math (Rule of 70, LD50 toxicity, percent change, metric conversions).
- Distractors: Represent common student traps (confusing ozone depletion with global warming, confusing point vs nonpoint pollution).`;
    } else {
      return `AP ENVIRONMENTAL SCIENCE FREE RESPONSE EXAM STANDARDS (COLLEGE BOARD SECTION II - 100% AUTHENTIC REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED FROM OFFICIAL EXAM SETS (2024, 2025, 2026 DIGITAL STANDARDS):
You are the College Board AP Environmental Science (APES) Chief Reader and Lead Exam Developer. Section II consists of 3 free-response questions (1 hour 10 minutes, suggested 22 minutes per question).
Every single Free Response Question you generate MUST strictly conform to this exact official blueprint:

1. MANDATORY 10-POINT ATOMIC ANATOMY (POINT 01 TO POINT 10):
- Every single FRQ MUST yield EXACTLY 10 discrete, binary scoring points (Earned = 1, Not Earned = 0). Total Points: EXACTLY 10 POINTS.
- Structure subparts clearly as Parts A through J (or Parts A through G/H with labeled subparts (i) and (ii)) such that the sum of all points is EXACTLY 10.
- Outputting fewer than 10 points or more than 10 points is STRICTLY FORBIDDEN.

2. THE 3 CANONICAL COLLEGE BOARD APES QUESTION ARCHETYPES (ROTATE EVENLY):
- QUESTION ARCHETYPE 1: "DESIGN AN INVESTIGATION" (10 POINTS):
  * Stimulus: Opens with a real-world ecological or lab investigation scenario accompanied by a data table, graph, or food web diagram (e.g. aquatic stream dissolved oxygen/BOD gradient, elevational avian community distribution, or soil fertility under different agricultural regimes).
  * 10-Point Distribution Structure:
    - Concept Application (2-3 pts): Connect to foundational ecology (trophic levels/cascades, r/K selection strategies, generalist vs specialist traits, ecosystem resistance/resilience).
    - Data Analysis (2-3 pts): Read specific datum from stimulus ("Identify the value of... at [condition]"), describe overall trend ("Describe the relationship between X and Y - direct, inverse, or nonlinear"), and evaluate whether given data support or refute a stated hypothesis.
    - Scientific Inquiry & Experimental Design (4-5 pts):
      * Identify a testable scientific question or hypothesis (must state directional relationship).
      * Identify the Independent Variable (IV) and Dependent Variable (DV) with laboratory precision.
      * Describe the purpose of a control group or baseline treatment.
      * Explain how an experimental modification (e.g. seasonal temperature shift, change in substrate/sediment, disturbance) would alter the experimental results.
      * Explain why a diverse community recovers faster from disturbance (genetic diversity, niche partitioning) or describe an anthropogenic habitat disruption effect (habitat fragmentation, edge effect).

- QUESTION ARCHETYPE 2: "ANALYZE AN ENVIRONMENTAL PROBLEM & PROPOSE A SOLUTION" (10 POINTS):
  * Stimulus: Anchored to a real geographic map, geological/climatological diagram, or multi-decade land-use trend (e.g. tectonic rift valley/convergent plate boundary, El Niño/La Niña sea-surface temperature and jet-stream shifts, or land cover changes from 1700-present).
  * 10-Point Distribution Structure:
    - Earth Systems & Biomes (2-3 pts): Identify plate boundary type, atmospheric circulation pattern, or contrast climatic conditions between two terrestrial biomes.
    - Environmental Problem & Mechanism (3-4 pts): Explain the causal chain of an ecological or environmental disturbance (e.g. impervious surfaces causing urban stormwater flooding, clear-cutting increasing water temperature, invasive species outcompeting natives, or pesticide treadmill).
    - Propose a Realistic Solution (1 pt): Must propose an authentic, actionable engineering, agricultural, or policy intervention (e.g. permeable pavement, green roofs, wildlife overpass corridor, crop rotation, Integrated Pest Management).
    - SIGNATURE COLLEGE BOARD TWIN-POINT RULE - JUSTIFY WITH CO-BENEFIT (1 pt):
      "Justify the solution proposed in part [X] by providing an additional advantage OTHER THAN [the primary problem solved in part X]." (e.g. permeable pavement also recharges groundwater aquifers and reduces runoff pollutants; green roofs also mitigate the urban heat island effect and improve building insulation).
    - Environmental Tradeoff / Sustainable Practice (2 pts): Secondary succession process, sustainable forestry (prescribed burns, brush clearing), or biocontrol methods.

- QUESTION ARCHETYPE 3: "ANALYZE AN ENVIRONMENTAL PROBLEM - DOING CALCULATIONS" (10 POINTS):
  * Stimulus: Grounded in energy generation (coal, natural gas, nuclear, solar), resource consumption (water usage, vehicle fuel economy), or wildlife population demographics.
  * 10-Point Distribution Structure:
    - Qualitative Environmental Problem & Source (3 pts): Identify anthropogenic pollutant source (e.g. particulate matter from industrial boilers/mining), describe pollution control mechanisms (vapor recovery nozzles, electrostatic precipitators, wet scrubbers), or explain acid rain chemistry.
    - Environmental Solution & Justification (2 pts): Realistic conservation policy or technology upgrade with co-benefit justification.
    - Multi-Step Quantitative Calculations (5 pts total):
      * Minimum 2 distinct calculation problems, each awarded as PAIRED POINTS:
        - 1 Point for Correct Formula Setup (numbers and mathematical relationship clearly displayed).
        - 1 Point for Correct Numerical Calculation.
      * Calculation Types to deploy:
        1. Percent Change: ((New - Old) / Old) * 100
        2. Rule of 70 Doubling Time: Time = 70 / r (where r is the annual growth percentage)
        3. Dimensional Analysis / Unit Conversions: Fuel consumption per household, kWh to pounds of coal combusted, metric conversions, or energy efficiency.
      * MANDATORY CLEAN NUMBERS RULE: Numbers MUST be mathematically pre-calibrated to produce clean, realistic integers or simple 1-decimal values (e.g. 11,000 houses, 0.88 kWh/lb, 14 gallons). NEVER generate messy irrational decimals that distract from scientific methodology.

3. OFFICIAL COLLEGE BOARD COMMAND VERB HIERARCHY:
- "Identify...": 1 concise factual phrase or numerical value directly from stimulus. No elaborate explanations.
- "Describe...": State specific observable characteristics, biological adaptations, or directional trends.
- "Explain...": STRICT REQUIREMENT - Must provide an unbroken cause-and-effect chain: [Cause] --> [Biophysical Mechanism] --> [Resulting Outcome]. Mentioning the outcome alone without the scientific mechanism earns 0 points!
- "Propose a realistic solution...": Actionable, implementable environmental or engineering solution.
- "Justify...": Must provide a distinct secondary ecological, public health, or economic advantage.
- "Calculate... Show your work": Include explicit work setup and final answer with appropriate units.

4. ORIGINALITY & ANTI-HALLUCINATION SAFEGUARD (NO VERBATIM COPYING):
- Under NO circumstances copy the exact organisms, data tables, or questions from the 2024/2025/2026 released PDF exams (DO NOT reuse Chickadees, Ocelots, or Serengeti Wildebeest verbatim).
- Use them strictly as pedagogical blueprints.
- Invent 100% fresh, authentic environmental scenarios rooted in real geographic systems: Chesapeake Bay watershed, Everglades restoration, Mono Lake water diversion, Amazonian deforestation corridors, Colorado River water rights, or Three Gorges Dam impacts.
- SCIENTIFIC REALITY BOUNDS: Dissolved Oxygen must be 0-14 mg/L; natural water pH 5.0-8.5; power plant efficiency 30-45%; trophic transfer strictly conforms to 10% rule.

5. SCORING RUBRIC & EXEMPLARY MODEL ANSWER:
- In "totalPoints", specify exactly 10.
- In "scoringRubric", provide a strict 10-item array (Point 01 through Point 10) specifying exact point-by-point criteria and acceptable student response variations.
- In "modelAnswer", provide a complete exemplary 10/10 response with clear part labels (e.g. "Part A: ... \\n\\nPart B: ...").`;
    }
  }

  if (s.includes('principles') || s.includes('csp')) {
    if (questionType === 'objective') {
      return `AP COMPUTER SCIENCE PRINCIPLES (CSP) EXAM SPECIFICATIONS (College Board CED):
- Target Level: Grade 9-10 foundational computing. Focus on computational thinking, algorithm logic, data representation, and societal impacts (Units 1–5).
- Scope: Creative development, binary/hex numbers, data compression (lossy vs lossless), pseudocode algorithms (robot grid traversal, conditional iteration, list filtering), Internet architecture (IP, TCP/IP, packet routing, fault tolerance), cybersecurity (public-key encryption, phishing, DDoS), and computing ethics.
- Distractors: Represent algorithmic off-by-one errors, Boolean logic inversion (AND vs OR), or confusing lossy vs lossless compression.`;
    } else {
      return `AP COMPUTER SCIENCE PRINCIPLES (AP CSP) SECTION II: WRITTEN RESPONSE (College Board 2024-2026 Official Standard):
- Exam Structure: Section II lasts 60 minutes and consists of 2 Questions (4 Written-Response Prompts) based on a student's "Personalized Project Reference" (PPR).
- Total Written Response Score: Exactly 4 Points (1 point each for WR 1, WR 2a, WR 2b, WR 2c). Overall Create Performance Task is 6 points (Video 1 pt + Program Requirements 1 pt + 4 WR pts).
- STEP 1 (MANDATORY STUDENT PPR GENERATION):
  Before asking the prompts, you MUST provide a realistic student Personalized Project Reference (PPR) in Python or JavaScript from a plausible domain (e.g. Smart Fitness Tracker, E-Commerce Cart, Weather Station Logger, Gaming Inventory, Playlist Shuffler, Gradebook):
  1. List Section: Contains a non-trivial list with multiple elements (>= 4 dynamic elements).
  2. Procedure Section: A student-developed procedure with at least ONE EXPLICIT PARAMETER, containing SELECTION ('if'/'else') and ITERATION ('for'/'while' loop) traversing or manipulating the list.
- STEP 2 (THE 4 OFFICIAL WRITTEN-RESPONSE PROMPTS):
  * Question 1 (Written Response 1 - 1 Point): Program Design, Function, and Purpose.
    - Angle: Valid input & program action OR Unexpected/invalid input handling OR Example output demonstrating functionality OR Code documentation rationale for another programmer.
  * Question 2(a) (Written Response 2a - 1 Point): Algorithm Development.
    - Angle: Describing what is accomplished by the body of the first iteration statement OR identifying the Boolean expression in the first selection statement with specific values evaluating to true/false with causal reasoning OR iteration stopping condition and terminating boundary values.
  * Question 2(b) (Written Response 2b - 1 Point): Errors and Testing.
    - Angle: Providing two procedure calls with specific arguments causing two different code segments to execute OR proposing a modification that introduces a LOGIC ERROR (not a syntax error) and describing the deviated behavioral outcome OR accepted arguments causing edge-case failure.
  * Question 2(c) (Written Response 2c - 1 Point): Data and Procedural Abstraction.
    - Angle: Explaining how the list uses abstraction to manage complexity and describing how the code would be rewritten without lists (e.g. separate individual variables) OR explaining how code adapts when new elements are added to the list OR explaining procedural maintainability.
- STRICT SANITY & ANTI-HALLUCINATION GUARDRAILS:
  - ZERO PDF REPETITION / ZERO COPYING: Do NOT copy verbatim prompts or code from official exam releases. Invent 100% original scenarios.
  - CODE-PROMPT DEPENDENCY LOCK: If a prompt asks about iteration, the code MUST have a loop. If it asks about selection, the code MUST have an if-statement. If it asks for two calls executing different segments, the procedure MUST have at least two reachable branches.
  - MATHEMATICALLY SOLVABLE DATA: All conditions must have reachable true and false branches. Never ask impossible mathematical statements like 'x > 10 and x < 2'.
  - LOGIC ERROR DEFINITION: A logic error is a mistake in an algorithm causing incorrect behavior/output, NOT a syntax/compile error.
- SCORING RUBRIC & DECISION RULES:
  - In 'totalPoints', specify 4 (or 6 if including video/program requirements).
  - Provide a strict 4-item rubric with explicit Decision Rules detailing exactly when to award (+1) and 'Do NOT award a point if' (e.g. trivial iteration, one-element list, repeating code without explaining accomplishment, missing explicit parameter, vague explanation).`;
    }
  }

  if (s.includes('calculus bc')) {
    if (questionType === 'objective') {
      return `AP CALCULUS BC EXAM SPECIFICATIONS (College Board CED):
- Coverage: Full AB curriculum PLUS BC-exclusive topics: Parametric equations, vector motion in 2D (velocity/acceleration vectors, speed = sqrt((x')^2 + (y')^2)), polar functions (polar area = (1/2)*integral(r^2 dTheta)), integration by parts, partial fractions, improper integrals, Euler's method, logistic differential equations (dP/dt = kP(1 - P/M)), and Infinite Series.
- Infinite Series focus: Geometric series, Taylor/Maclaurin polynomial approximations, nth-term divergence, Ratio test for radius & interval of convergence, Alternating Series Test.
- Distractors must represent classic student misconceptions: omitting chain rule in parametric derivatives, sign errors in integration by parts, forgetting to check endpoints in interval of convergence.
- Format all math expressions cleanly using LaTeX ($...$).`;
    } else {
      return `AP CALCULUS BC SECTION II: FREE RESPONSE (College Board 2023-2026 Official CED Standards - 9 Points per FRQ):
- Exam Architecture: Section II consists of 6 Free-Response Questions lasting 90 minutes (54 total points):
  * Part A: Questions 1 & 2 (30 minutes, Graphing Calculator REQUIRED in RADIAN mode).
  * Part B: Questions 3 to 6 (60 minutes, NO Calculator permitted).
- Scoring Scale: Every single FRQ is worth EXACTLY 9 Points (P1 through P9), broken into 3 to 4 subparts: (a), (b), (c), (d).
- Mathematical Rigor: The prompt function MUST match the rubric solution with 100% exactness. All series must have provable convergence, all integrals must be solvable, and no impossible physical data is permitted.

1. THE 6 CANONICAL COLLEGE BOARD BC FRQ ARCHETYPES (ROTATE EVENLY ACROSS SESSIONS):
- ARCHETYPE 1 (Part A, Calculator Active): RATE IN / RATE OUT ACCUMULATION & TABULAR FUNCTIONS
  * Real-World Context: Fluid flow, thermal cooling/heating, biological arrival rates, or pollutant diffusion.
  * Sub-part (a): Average rate of change using difference quotient [f(b) - f(a)] / (b - a) with physical units (e.g. gal/sec^2, words/min^2, deg C/min).
  * Sub-part (b): Approximating definite integral int_a^b f(t) dt using Riemann sums (Right, Left, Midpoint, or Trapezoidal) with table data. Contextual interpretation: "integral gives the net change / total accumulation of [quantity] from t=a to t=b [units]".
  * Sub-part (c): Average value formula: (1/(b - a)) * int_a^b f(t) dt, or solving f'(t) = average rate of change via calculator.
  * Sub-part (d): Optimization / Net accumulation function A(t) = C(t) - int_a^t rate(x) dx: finding absolute maximum/minimum on closed interval [a, b] using CANDIDATES TEST (evaluating endpoints and all critical points).

- ARCHETYPE 2 (Part A, Calculator Active): 2D PARAMETRIC VECTOR MOTION OR POLAR CURVES & AREA
  * Sub-option 2A: POLAR CURVES r(theta) (BC Exclusive):
    - Rate of change dr/dtheta at theta = theta_0 with calculator derivative.
    - Polar area bounded between two curves: Area = (1/2) * int_alpha^beta (r_1(theta)^2 - r_2(theta)^2) dtheta. (Note: Must square each r individually; (r1 - r2)^2 is strictly incorrect).
    - Extreme distance from y-axis (x = r*cos(theta), solve dx/dtheta = 0) or from x-axis (y = r*sin(theta), solve dy/dtheta = 0) with Candidates Test justification.
    - Chain rule rate of change with respect to time: dr/dt = (dr/dtheta) * (dtheta/dt).
  * Sub-option 2B: 2D PARAMETRIC VECTOR MOTION (BC Exclusive):
    - Position <x(t), y(t)>, velocity vector <x'(t), y'(t)>, acceleration vector <x''(t), y''(t)>.
    - Speed at t = t_0: ||v(t_0)|| = sqrt((x'(t_0))^2 + (y'(t_0))^2).
    - Slope of tangent line: dy/dx = y'(t) / x'(t).
    - Total distance traveled (arc length): int_a^b sqrt((x'(t))^2 + (y'(t))^2) dt.
    - Position from initial condition: x(t) = x(t_0) + int_{t_0}^t x'(u) du.

- ARCHETYPE 3 (Part B, No Calculator): DIFFERENTIAL EQUATIONS & SLOPE FIELDS
  * Real-world contextual differential equation dy/dt = (1/k)(A - y) * g(t).
  * Sub-part (a): Slope field sketch passing through initial point (x_0, y_0) respecting horizontal/vertical asymptotes.
  * Sub-part (b): Tangent line equation y = y_0 + m(x - x_0) to approximate value at x_1.
  * Sub-part (c): Overestimate vs Underestimate using second derivative d^2y/dx^2 via implicit differentiation and chain rule. If d^2y/dx^2 > 0 -> concave up -> tangent line lies below curve -> UNDERESTIMATE.
  * Sub-part (d): Separation of Variables (4 Points): int dy/h(y) = int g(x) dx. Must separate variables (+1), find antiderivatives (+1), incorporate constant C with initial condition (+1), and solve explicitly for y (+1).

- ARCHETYPE 4 (Part B, No Calculator): GRAPHICAL ANALYSIS OF f' & ACCUMULATION FUNCTION g(x) = int_a^x f(t) dt
  * Given graph of continuous f (consisting of line segments and semicircles) on closed interval [a, b].
  * Sub-part (a): Evaluating g'(x) = f(x) using Fundamental Theorem of Calculus (FTC Part 1).
  * Sub-part (b): Points of inflection of g: locations where f changes from increasing to decreasing (or vice versa), or f attains relative extrema.
  * Sub-part (c): Geometric evaluation of g(x) using triangle, trapezoid, and semicircle areas (area = (1/2)*pi*r^2), correctly handling reversal of limits: int_6^0 f(t) dt = -int_0^6 f(t) dt.
  * Sub-part (d): Absolute minimum / maximum on [a, b] using CANDIDATES TEST (Must evaluate critical points where f(x) = 0 AND endpoints x = a, x = b).

- ARCHETYPE 5 (Part B, No Calculator): ADVANCED INTEGRATION TECHNIQUES & EULER'S METHOD (BC Exclusive)
  * Sub-part (a): Higher-order implicit derivative d^2y/dx^2 at point (x_0, y_0) using product and chain rules.
  * Sub-part (b): Euler's Method: Approximating f(x_2) starting at (x_0, y_0) with 2 steps of equal size Delta x. Must clearly present step calculations: y_{k+1} = y_k + (dy/dx)|_{(x_k, y_k)} * Delta x.
  * Sub-part (c): Advanced Integration: Integration by parts (int u dv = uv - int v du), partial fractions decomposition, or Improper Integral int_a^inf g(x) dx = lim_{b->inf} int_a^b g(x) dx. (MUST use proper limit notation; arithmetic with infinity like 1/inf = 0 is penalised).
  * Sub-part (d): Taylor polynomial generated from differential equation or error bound.

- ARCHETYPE 6 (Part B, No Calculator): THE SIGNATURE BC INFINITE SERIES & TAYLOR POLYNOMIALS (BC Signature)
  * Given Taylor/Maclaurin series sum_{n=1}^inf a_n (x - c)^n or function with higher derivatives.
  * Sub-part (a): Ratio Test for Interval of Convergence (5 Points):
    - Set up ratio: lim_{n->inf} |a_{n+1} / a_n| (+1 pt).
    - Evaluate limit of ratio in terms of |x - c| (+1 pt).
    - Interior interval of convergence (c - R, c + R) (+1 pt).
    - Consider BOTH endpoints individually (+1 pt).
    - Detailed analysis of endpoints (using Alternating Series Test, p-series, or Limit Comparison Test to harmonic series) and final interval (+1 pt).
  * Sub-part (b): Term-by-term differentiation or integration to find first 3-4 nonzero terms and general term of f'(x) or int f(x) dx.
  * Sub-part (c): Geometric series verification: Identify first term a and common ratio r, verify sum S = a / (1 - r) on interval of convergence.
  * Sub-part (d): Error Bound Justification:
    - Alternating Series Error Bound: |f(x) - P_n(x)| <= |a_{n+1}| (first omitted term).
    - Lagrange Error Bound: |f(x) - P_n(x)| <= [max |f^{(n+1)}(t)| / (n+1)!] * |x - c|^{n+1}.
    - CRITICAL SCORING RULE: Inequality MUST use '<=' (writing '=' or '<' forfeits the analysis point).

2. CHIEF READER REPORT SCORING PRINCIPLES & TYPICAL TRAPS (ENFORCE IN RUBRICS):
- Setup Required: A bare numerical answer without integral/differential setup earns 0 points for setup.
- Candidates Test: To earn the justification point for absolute extrema, students must provide a global argument evaluating the function at ALL critical points AND both endpoints. Local derivative tests earn 0 justification points.
- Speed Increasing/Decreasing: Speed is increasing if and only if velocity and acceleration have the SAME sign; decreasing if OPPOSITE signs. Mentioning only acceleration earns 0 points.
- No Arithmetic with Infinity: Do NOT write expressions like '38 / (25 + inf^2) = 0'. Must write 'lim_{t->inf} [expression] = 0'.
- Polar Area Factor: Must include the 1/2 factor and square the radius: (1/2) * int (r)^2 dtheta.
- Precision: Decimal approximations must be accurate to 3 decimal places (rounded or truncated).

3. MANDATORY TWO-PASS DOUBLE-VERIFICATION PROTOCOL:
- PASS 1 (Analytical Pre-Solving): Before finalizing the question, internally solve every subpart. Verify that all integrals yield clean real values, critical points lie strictly within the designated domain, Euler's method steps do not divide by zero, and series ratio tests produce valid non-zero radii.
- PASS 2 (Rubric Consistency): Verify that total points = exactly 9 points (P1 to P9 labeled), all subparts (a)-(d) have corresponding model answers and scoring breakdown, and no impossible physical data exists.`;
    }
  }

  if (s.includes('calculus ab') || s.includes('calculus')) {
    if (questionType === 'objective') {
      return `AP CALCULUS AB EXAM SPECIFICATIONS (College Board CED Units 1-8 STRICTLY):
- STRICT CURRICULUM BOUNDARY: Under NO circumstances include Calculus BC topics!
  * FORBIDDEN: NO Infinite Series, NO Sequences, NO Ratio Test, NO Alternating Series, NO Taylor/Maclaurin series.
  * FORBIDDEN: NO Euler's Method, NO Logistic Differential Equations (dP/dt = kP(1-P/M)).
  * FORBIDDEN: NO Integration by Parts, NO Partial Fractions, NO Parametric/Polar curves.
- Permitted Coverage:
  * Unit 1: Limits & Continuity (evaluating limits algebraically, one-sided limits, vertical/horizontal asymptotes, IVT).
  * Unit 2 & 3: Differentiation Fundamentals & Composite/Implicit (power, product, quotient, chain rule, implicit differentiation dy/dx, derivatives of exp/log/trig/inverse trig).
  * Unit 4 & 5: Contextual & Analytical Applications (related rates, straight-line 1D particle motion [s(t), v(t), a(t), speed], MVT, EVT, First/Second Derivative Tests, concavity, optimization).
  * Unit 6: Integration and Accumulation (Riemann sums [left, right, midpoint, trapezoidal], FTC Part 1 & 2, u-substitution, net change).
  * Unit 7: Differential Equations (slope fields, separable differential equations dy/dx = g(x)h(y), exponential growth/decay dy/dt = ky).
  * Unit 8: Applications of Integration (average value of a function, area between curves, volume of solids of revolution [disk/washer method], volume with known cross-sections).
- Format all equations cleanly in LaTeX ($...$). Distractors must represent real student misconceptions (omitting chain rule factor, forgetting '+ C', confusing velocity with acceleration).`;
    } else {
      return `AP CALCULUS AB SECTION II: FREE RESPONSE (College Board 2023-2026 Official CED Standards - 9 Points per FRQ):
- Exam Architecture: Section II consists of 6 Free-Response Questions lasting 90 minutes (54 total points):
  * Part A: Questions 1 & 2 (30 minutes, Graphing Calculator REQUIRED in RADIAN mode).
  * Part B: Questions 3 to 6 (60 minutes, NO Calculator permitted).
- Scoring Scale: Every single FRQ is worth EXACTLY 9 Points (P1 through P9), broken into 3 to 4 subparts: (a), (b), (c), (d).

1. THE 6 CANONICAL COLLEGE BOARD FRQ ARCHETYPES (ROTATE EVENLY ACROSS SESSIONS):
- ARCHETYPE 1 (Part A, Calculator Active): RATE IN / RATE OUT ACCUMULATION & TABULAR FUNCTIONS
  * Real-World Context: Fluid flow, thermal cooling/heating, population migration, or vehicle arrival rates.
  * Sub-part 1: Average rate of change over [a, b] using difference quotient with physical units (e.g. gal/sec^2).
  * Sub-part 2: Approximating definite integral using Riemann sums (Right, Left, Midpoint, or Trapezoidal) with table data. Meaning of integral: "gives the net change in [quantity] from t=a to t=b [units]".
  * Sub-part 3: Applying Mean Value Theorem (MVT) or IVT: MUST verify prerequisite ("f is differentiable on (a, b) implies f is continuous on [a, b]").
  * Sub-part 4: Average value formula: (1/(b - a)) * int_a^b f(t) dt or finding instantaneous rate equal to average rate.
- ARCHETYPE 2 (Part A, Calculator Active): RECTILINEAR PARTICLE MOTION OR AREA & KNOWN CROSS-SECTIONS
  * Motion Subparts:
    - Direction change: Must establish v(t) = 0 AND velocity changes sign (not just v(t) = 0).
    - Speeding up vs Slowing down: Must evaluate signs of BOTH velocity v(t) AND acceleration a(t) = v'(t). If same sign -> speeding up; opposite signs -> slowing down.
    - Total Distance: int_a^b |v(t)| dt vs Displacement: int_a^b v(t) dt.
  * Area/Volume Subparts:
    - Area: int_a^b (top - bottom) dx.
    - Known Cross-Section: Volume = int_a^b Area(x) dx (Rectangles b*h, Squares s^2, Semicircles (pi/8)s^2).
    - Revolution: pi * int_a^b (R(x)^2 - r(x)^2) dx about horizontal line y = k.
- ARCHETYPE 3 (Part B, No Calculator): DIFFERENTIAL EQUATIONS & SLOPE FIELDS
  * Sub-part 1: Slope field sketch passing through initial point (x_0, y_0) respecting asymptotes.
  * Sub-part 2: Tangent line equation y = y_0 + m(x - x_0) to approximate value at x_1.
  * Sub-part 3: Determining overestimate vs underestimate using second derivative d^2y/dx^2 via chain rule. If d^2y/dx^2 > 0 -> concave up -> tangent line lies below curve -> UNDERESTIMATE.
  * Sub-part 4: Separation of Variables (4 Points): int dy/h(y) = int g(x) dx. Must separate variables (+1), find antiderivatives (+1), incorporate constant of integration C with initial condition (+1), and solve explicitly for y (+1).
- ARCHETYPE 4 (Part B, No Calculator): GRAPHICAL ANALYSIS OF f' & ACCUMULATION FUNCTION g(x) = int_a^x f'(t) dt
  * Given graph of f'(x) consisting of line segments and semicircles on closed interval [a, b].
  * Sub-part 1: Evaluating g'(x) = f'(x) using Fundamental Theorem of Calculus (FTC Part 1).
  * Sub-part 2: Points of inflection of g: locations where f' changes from increasing to decreasing (or vice versa), or f' attains relative extrema.
  * Sub-part 3: Geometric evaluation of g(x) using triangle/trapezoid/semicircle areas with sign respect.
  * Sub-part 4: Absolute minimum / maximum on [a, b] using CANDIDATES TEST (Must evaluate critical points where f'(x) = 0 AND endpoints x = a, x = b).
- ARCHETYPE 5 (Part B, No Calculator): FUNCTIONS FROM A TABLE & DIFFERENTIATION RULES
  * Table of twice-differentiable functions f(x), f'(x), g(x), g'(x).
  * Sub-part 1: Chain Rule: h'(x) = f'(g(x)) * g'(x) evaluated at table value.
  * Sub-part 2: Product/Quotient Rule with second derivative concavity: k''(x) sign analysis.
  * Sub-part 3: Fundamental Theorem of Calculus: int_0^a f'(3x) dx = (1/3)(f(3a) - f(0)).
  * Sub-part 4: IVT / MVT existence justification with continuous/differentiable preconditions.
- ARCHETYPE 6 (Part B, No Calculator): IMPLICIT DIFFERENTIATION & RELATED RATES
  * Curve defined implicitly: F(x, y) = C.
  * Sub-part 1: Show that dy/dx = N(x, y) / D(x, y) using product rule on xy and chain rule on y^n.
  * Sub-part 2: Horizontal tangent (N(x, y) = 0) vs Vertical tangent (D(x, y) = 0), verifying point lies on curve.
  * Sub-part 3: Tangent line approximation at given point.
  * Sub-part 4: Related Rates: Differentiating with respect to time t to find dy/dt given dx/dt.

2. STRICT ANTI-HALLUCINATION & MATHEMATICAL SOLVABILITY LOCKS:
- ZERO PDF COPYING / ZERO REPETITION: Do NOT copy functions or exact numbers from the 2023-2026 PDF exams (do NOT reuse Stephen swimming, milk bottle warming, or coffee cup). Invent 100% fresh, authentic scenarios.
- NO ASYMPTOTES IN INTERVALS: Never define an integral on [a, b] where the integrand has a vertical asymptote or division by zero inside the interval.
- CANDIDATES TEST MANDATE: Global extrema on a closed interval MUST use a candidates test table evaluating both critical points and endpoints. A local First Derivative Test alone is insufficient for global extrema.
- CLEAN 3-DECIMAL ACCURACY: In calculator-active questions, all numerical answers must be accurate to at least 3 decimal places (rounded or truncated).
- STRICT 9-POINT RUBRIC: 'totalPoints' must be exactly 9. Scoring rubric must provide 9 distinct points (P1 to P9) with specific scoring notes explaining point-award conditions and common student misconceptions.

3. MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING PROTOCOL:
Before outputting any Calculus AB FRQ, execute an internal solver verification:
- Pass 1: Solve the problem step-by-step. Verify that derivatives, integrals, and limits are analytically correct.
- Pass 2: Check that curves intersect at the claimed bounds. Check that Candidate Test table values match the function. Check that separation of variables produces an algebraically valid solution.
- Self-Healing: If ANY calculation error, sign mistake, or unsolvable equation is detected, immediately correct and re-solve the question before returning the final JSON.`;
    }
  }

  if (s.includes('biology')) {
    if (questionType === 'objective') {
      return `AP BIOLOGY EXAM SPECIFICATIONS (College Board CED):
- Stimulus-Based Design: Base questions on authentic biological investigations (e.g. cellular respiration respirometers, gel electrophoresis band patterns, spectrophotometric enzyme curves, water potential potato cylinders, pedigree tracking, or Hardy-Weinberg population data).
- Visual Diagrams & Curves (MANDATORY): For Cellular Energetics (Unit 3), Cell Structure (Unit 2), Genetics (Unit 5), or Ecology (Unit 8), generate the complete SVG diagram in "diagramSvg" (viewBox="0 0 400 220") and specify "diagramType".
- Diverse Organisms & Real Biological Systems: NEVER use generic placeholders like 'Enzyme X' or repeat identical experimental scenarios. Vary the organism (e.g. yeast, spinach, bovine liver catalase, E. coli, marine phytoplankton, Drosophila, Arabidopsis thaliana) and real enzymes (catalase, pepsin, salivary amylase, RuBisCO, ATP synthase, cytochrome c oxidase).
- Core Themes: Chemistry of life, cell structure & energetics (photosynthesis/respiration), cell communication & cell cycle, heredity & genetics, gene expression & regulation, natural selection, ecology.
- Question Style: Questions must require students to analyze experimental data, make scientific claims, identify controls, or predict the biological consequence of an inhibitor or mutation.`;
    } else {
      return `AP BIOLOGY FREE RESPONSE STANDARDS (College Board CED):
- Formats:
  1. Long FRQ (8-10 points): Interpreting & Evaluating Experimental Results. Includes experimental design, specifying independent/dependent variables, graphing with standard error bars (±2 SEM), calculating means, and Null Hypothesis / Chi-Square testing.
  2. Short FRQ (4 points): Scientific Investigation (identifying negative/positive controls), Conceptual Analysis (predicting effects of disruption/mutation), or Model Analysis (analyzing cell signaling cascades).
- Visual Diagrams & Curves (MANDATORY): For Cellular Energetics, Genetics (pedigrees), or Ecology, generate the complete SVG graph in "diagramSvg" (viewBox="0 0 400 220") with labeled axes, data points, and appropriate "diagramType". NEVER use generic 'Enzyme X' - use real biological enzymes and realistic experimental parameters.
- Rubric: Precise point allocation (+1 pt for identifying control, +1 pt for calculating rate, +1 pt for biological justification).`;
    }
  }

  if (s.includes('chemistry')) {
    if (questionType === 'objective') {
      return `AP CHEMISTRY EXAM SPECIFICATIONS (College Board CED):
- Content: Atomic structure & PES spectra, molecular bonding & Lewis/VSEPR, intermolecular forces & properties, chemical reactions & stoichiometry, kinetics rate laws, thermodynamics (Delta H, Delta S, Delta G = -RT ln K), equilibrium & Le Chatelier's principle, acids & bases (titration curves, buffers), electrochemistry.
- Visuals & Diagrams: Include particulate representations (drawings of atoms/molecules in a container), molecular geometry descriptions, and reaction energy profiles.
- Distractors: Represent stoichiometry mole-ratio errors, confusing Delta H with Delta G, or inverted equilibrium expressions.`;
    } else {
      return `AP CHEMISTRY FREE RESPONSE STANDARDS (College Board CED):
- Formats:
  1. Long FRQ (10 points): Multi-part problem covering multi-step stoichiometry, net ionic equations, thermodynamics calculations, electrochemistry cell potentials (E_cell = E_cathode - E_anode), and acid-base buffer calculations (Henderson-Hasselbalch equation).
  2. Short FRQ (4 points): Lewis structures & resonance, VSEPR molecular geometry and bond angles, intermolecular forces comparing boiling points, or Beer-Lambert Law spectrophotometry (A = epsilon * b * c).
- Rubric: Must break down exact points (+1 pt for balanced net ionic equation, +1 pt for ICE table setup, +1 pt for final answer with correct significant figures and units).`;
    }
  }

  if (s.includes('physics 1')) {
    if (questionType === 'objective') {
      return `AP PHYSICS 1: ALGEBRA-BASED EXAM SPECIFICATIONS (Updated College Board CED):
- Format: Strictly 4 answer choices (A-D, single-select).
- Scope: Kinematics, Newton's Laws, Work/Energy/Power, Linear Momentum, Torque & Rotational Motion, Simple Harmonic Motion, AND newly integrated FLUIDS (density, pressure, buoyant force, Archimedes principle, continuity equation, Bernoulli's equation).
- Cognitive Focus: Qualitative proportional reasoning (e.g. 'If radius doubles and angular velocity is halved, what happens to centripetal acceleration?'), force diagrams, and conservation laws.`;
    } else {
      return `AP PHYSICS 1 FREE RESPONSE STANDARDS (College Board CED):
- Four Official FRQ Types:
  1. Mathematical Routines (algebraic derivations, energy/momentum conservation).
  2. Translation Between Representations (connecting equations to graphs like Force vs Time or Velocity vs Time).
  3. Experimental Design (outlining a lab setup, list of apparatus, step-by-step procedure to reduce uncertainty, and data analysis plan).
  4. Qualitative / Quantitative Translation (QQT) (explaining a physical phenomenon in clear conceptual prose without equations first, then deriving the algebraic formula to prove it).
- Total points: 7 to 12 points with explicit point-by-point rubric.`;
    }
  }

  if (s.includes('computer science a')) {
    if (questionType === 'objective') {
      return `AP COMPUTER SCIENCE A EXAM SPECIFICATIONS (College Board Java Subset):
- Java Syntax: Code snippets strictly following the official Java Quick Reference (String, Math, ArrayList, 1D/2D arrays, OOP inheritance, polymorphism).
- Concepts: Loop bounds, tracing variable mutations, Boolean logic (De Morgan's laws), recursion execution traces, class design, and searching/sorting algorithms (binary search, selection/insertion/merge sort).
- Distractors: Off-by-one errors (e.g., '< arr.length' vs '<= arr.length'), NullPointerException triggers, confusing '=' with '==', integer division truncation.`;
    } else {
      return `AP COMPUTER SCIENCE A FREE RESPONSE STANDARDS (College Board CED):
- Format: 4 Authentic Java Coding Questions (9 Points Each):
  - Question 1: Methods and Control Structures (loops, conditionals, helper methods).
  - Question 2: Class Design (writing a complete Java class with private instance variables, constructor, getters/setters, and specified methods).
  - Question 3: Array / ArrayList (traversing, filtering, or modifying elements, avoiding ConcurrentModificationException and index errors).
  - Question 4: 2D Array (nested row/column loops, grid manipulation).
- Rubric: Strict 9-point rubric awarding points for method header, loops, conditionals, accessing elements, returning correct value.`;
    }
  }

  if (s.includes('u.s. history') || s.includes('us history') || s.includes('apush')) {
    if (questionType === 'objective') {
      return `AP U.S. HISTORY (APUSH) EXAM SPECIFICATIONS (College Board CED):
- Stimulus-Based: Every single question set MUST be anchored to a primary source excerpt (presidential speech, newspaper editorial, letter, treaty, colonial document) or secondary historical analysis from Periods 1-9 (1491-Present).
- Historical Thinking Skills: Contextualization, causation, continuity and change over time (CCOT), comparison.
- Distractors: Factually true statements from a DIFFERENT historical era or claims that mischaracterize the author's argument.`;
    } else {
      return `AP U.S. HISTORY (APUSH) FREE RESPONSE STANDARDS (College Board CED):
- Formats:
  1. DBQ (Document-Based Question, 7-Point Rubric): Provide 7 distinct historical source documents (Author, Source, Year, Excerpt). Rubric: Thesis (1 pt), Contextualization (1 pt), Evidence from 3+ docs (1 pt) or 6+ docs (2 pts), Outside Evidence (1 pt), Sourcing/HIPP analysis (1 pt), Historical Complexity (1 pt).
  2. LEQ (Long Essay Question, 6-Point Rubric): Historical prompt testing Causation, CCOT, or Comparison without documents.
  3. SAQ (Short Answer Question): 3 parts (a), (b), (c) strictly requiring the ACE format (Answer, Cite specific evidence, Explain connection).`;
    }
  }

  if (s.includes('world history')) {
    if (questionType === 'objective') {
      return `AP WORLD HISTORY: MODERN EXAM SPECIFICATIONS (College Board CED):
- Time Period: 1200 CE to the Present.
- Stimulus-Based: Provide primary excerpts from historical travelers (Ibn Battuta, Marco Polo), imperial edicts (Mongol, Ottoman, Ming), colonial treaties, or Cold War declarations.
- Themes: Global Tapestry, Networks of Exchange, Land-Based Empires, Transoceanic Interconnections, Revolutions, Industrialization, Global Conflicts, Decolonization, and Globalization.`;
    } else {
      return `AP WORLD HISTORY: MODERN FREE RESPONSE STANDARDS (College Board CED):
- Formats:
  1. DBQ (Document-Based Question, 7-Point Rubric): 7 historical documents from world history.
  2. LEQ (Long Essay Question, 6-Point Rubric): Global historical causation, comparison, or CCOT.
  3. SAQ (Short Answer Question): 3 distinct parts (a), (b), (c) in ACE format.
- Rubrics must strictly follow the official College Board historical rubrics.`;
    }
  }

  if (s.includes('english') || s.includes('lang')) {
    if (questionType === 'objective') {
      return `AP ENGLISH LANGUAGE & COMPOSITION EXAM SPECIFICATIONS (College Board CED):
- Reading Questions: Non-fiction rhetorical analysis passage (speech, essay, letter). Analyze author's purpose, claims, line of reasoning, rhetorical choices (diction, syntax, appeals to ethos/pathos/logos), and tone.
- Writing Questions: Excerpt from a draft student essay. Ask how to revise thesis statements, enhance sentence variety, improve transitional phrases, or integrate evidence cohesively.`;
    } else {
      return `AP ENGLISH LANGUAGE FREE RESPONSE STANDARDS (College Board CED):
- 3 Authentic AP Lang Essay Types (Each scored on the official 6-Point Analytic Rubric):
  1. Synthesis Essay: Present a prompt and 6 diverse sources (articles, statistics, visual data). Students must synthesize at least 3 sources to support an argument.
  2. Rhetorical Analysis Essay: Provide an authentic non-fiction speech/letter and ask students to analyze how the author uses rhetorical choices to convey their message.
  3. Argument Essay: Present a philosophical, cultural, or social claim to defend, challenge, or qualify with evidence from history, literature, or personal observation.
- Rubric: 1 pt Thesis, 4 pts Evidence & Commentary, 1 pt Sophistication.`;
    }
  }

  if (s.includes('psychology')) {
    if (questionType === 'objective') {
      return `AP PSYCHOLOGY EXAM SPECIFICATIONS (Updated College Board CED):
- Format: Scenario-based questions applying psychological principles to real-world behavioral situations.
- Content: Biological bases of behavior (neurotransmitters, brain structures, nervous system), sensation & perception, learning (operant/classical conditioning), cognitive psychology (memory, biases), developmental psychology, personality theories, social psychology, clinical psychology (DSM-5 diagnostic criteria).`;
    } else {
      return `AP PSYCHOLOGY FREE RESPONSE STANDARDS (Updated College Board CED):
- 2 Official FRQ Types:
  1. Article Analysis Question (AAQ): Provide an empirical psychological research study abstract. Students must identify independent/dependent variables, confounding variables, assess statistical significance (p < 0.05), and evaluate APA ethical guidelines (informed consent, debriefing, confidentiality).
  2. Evidence-Based Question (EBQ): Students synthesize psychological concepts to construct a defensible claim supported by empirical evidence.
- Rubric: Clearly specify which psychological concepts earn points and required justifications.`;
    }
  }

  if (s.includes('economic')) {
    if (questionType === 'objective') {
      return `AP MICRO & MACROECONOMICS EXAM SPECIFICATIONS (College Board CED):
- Microeconomics: Supply & demand elasticity, consumer/producer surplus, market structures (perfect competition, monopoly, oligopoly), externalities, marginal cost/revenue, factor markets.
- Macroeconomics: GDP, inflation, unemployment, Aggregate Demand / Aggregate Supply (AD-AS), fiscal policy, monetary policy (Federal Reserve tools), Money Market, Loanable Funds, Phillips Curve, Foreign Exchange.
- Distractors: Confusing shifts of a curve with movements along a curve, or miscalculating tax incidence / multiplier effects.`;
    } else {
      return `AP ECONOMICS FREE RESPONSE STANDARDS (College Board CED):
- Formats:
  1. Long FRQ (10 points, ~30 min): Multi-part scenario with explicit graphing instructions (e.g., 'Draw a correctly labeled graph of the money market and show the effect of an open market purchase of bonds on the nominal interest rate').
  2. Short FRQ (5 points, ~15 min): Targeted calculations (elasticity, spending multiplier, balance of payments) and directional explanations.
- Rubric: Explicit points for graph labeling, curve shift directions, and numerical calculations.`;
    }
  }

  // Fallback for general AP Subjects
  return `College Board AP Course and Exam Description standards for ${subject}. High rigor, analytical thinking, stimulus-based.`;
}

function getGranularSubjectArchetypes(subject: string, unitOrTopic: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `Core conceptual inquiry #${i + 1} for ${unitOrTopic || subject}`);
}

function getDynamicTopicVariation(subject: string, unitOrTopic: string, count: number): string {
  const archetypes = getGranularSubjectArchetypes(subject, unitOrTopic, count);
  return archetypes.map((arch, idx) => `  - Question ${idx + 1} Target Archetype: ${arch}`).join('\n');
}


const MCQ_LETTERS = ['A', 'B', 'C', 'D'];

/**
 * Generates a balanced, non-consecutive target position sequence for N questions.
 * Guarantees ~25% chance for A, B, C, D and NO adjacent identical answers.
 * Also eliminates predictable sequential cycles.
 */
function generateBalancedAnswerSequence(count: number): number[] {
  if (count <= 0) return [];
  if (count === 1) return [Math.floor(Math.random() * 4)];

  const pool: number[] = [];
  const fullSets = Math.floor(count / 4);
  const remainder = count % 4;

  for (let s = 0; s < fullSets; s++) {
    pool.push(0, 1, 2, 3);
  }

  const remOptions = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
  for (let r = 0; r < remainder; r++) {
    pool.push(remOptions[r]);
  }

  for (let attempt = 0; attempt < 50; attempt++) {
    const candidate = [...pool];
    for (let i = candidate.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidate[i], candidate[j]] = [candidate[j], candidate[i]];
    }

    // Fix any adjacent duplicates by swapping with a valid position
    for (let i = 0; i < candidate.length - 1; i++) {
      if (candidate[i] === candidate[i + 1]) {
        for (let k = 0; k < candidate.length; k++) {
          if (
            candidate[k] !== candidate[i] &&
            (k === 0 || candidate[k - 1] !== candidate[i + 1]) &&
            (k === candidate.length - 1 || candidate[k + 1] !== candidate[i + 1]) &&
            candidate[k] !== candidate[i + 2]
          ) {
            [candidate[i + 1], candidate[k]] = [candidate[k], candidate[i + 1]];
            break;
          }
        }
      }
    }

    let hasAdjDup = false;
    let hasCycle = false;
    let cycleCount = 0;
    for (let i = 0; i < candidate.length - 1; i++) {
      if (candidate[i] === candidate[i + 1]) {
        hasAdjDup = true;
        break;
      }
      if ((candidate[i] + 1) % 4 === candidate[i + 1]) {
        cycleCount++;
      } else {
        cycleCount = 0;
      }
      if (cycleCount >= 3) {
        hasCycle = true;
        break;
      }
    }

    if (!hasAdjDup && !hasCycle) {
      return candidate;
    }
  }

  // Fallback generation guaranteeing no adjacent duplicates
  const res: number[] = [];
  let last = -1;
  const counts = [0, 0, 0, 0];
  for (let i = 0; i < count; i++) {
    const validNext = [0, 1, 2, 3].filter(x => x !== last);
    validNext.sort((a, b) => counts[a] - counts[b] + (Math.random() - 0.5));
    const chosen = validNext[0];
    res.push(chosen);
    counts[chosen]++;
    last = chosen;
  }
  return res;
}

/**
 * Shuffles options for Test Prep and Trap Radar questions to guarantee 25% balance across A, B, C, D
 * with no consecutive identical answers, synchronizing traps and explanations.
 */
function shuffleAndBalanceQuestions(questions: any[]): any[] {
  if (!Array.isArray(questions) || questions.length === 0) return questions;

  const targetPositions = generateBalancedAnswerSequence(questions.length);

  return questions.map((q, qIdx) => {
    if (q.format === 'subjective') return q;

    const rawOptions = Array.isArray(q.options) ? q.options.map(String) : [];
    if (rawOptions.length < 4) return q;

    const rawAns = String(q.correctAnswer || '').trim();
    let currentCorrectIdx = -1;

    if (Array.isArray(q.traps) && q.traps.length > 0) {
      const correctTrapIdx = q.traps.findIndex((t: any) => t.isCorrect);
      if (correctTrapIdx >= 0 && correctTrapIdx < 4) {
        currentCorrectIdx = correctTrapIdx;
      }
    }

    if (currentCorrectIdx === -1) {
      const letterMatch =
        rawAns.match(/^Option\s+([A-Da-d])/i) ||
        rawAns.match(/^([A-Da-d])[\)\.:\s]/i) ||
        rawAns.match(/^([A-Da-d])$/i);
      if (letterMatch) {
        const matchedLetter = (letterMatch[1] || letterMatch[0]).charAt(0).toUpperCase();
        const lIdx = MCQ_LETTERS.indexOf(matchedLetter);
        if (lIdx >= 0 && lIdx < 4) currentCorrectIdx = lIdx;
      }
    }

    if (currentCorrectIdx === -1) {
      const cleanRawAns = rawAns.toLowerCase().replace(/^[a-d][\)\.:\s]+/, '').trim();
      const foundIdx = rawOptions.findIndex(opt => {
        const cleanOpt = opt.toLowerCase().replace(/^[a-d][\)\.:\s]+/, '').trim();
        return cleanOpt === cleanRawAns;
      });
      if (foundIdx >= 0) currentCorrectIdx = foundIdx;
    }

    if (currentCorrectIdx === -1) currentCorrectIdx = 0;

    const origLetter = MCQ_LETTERS[currentCorrectIdx];

    const items = rawOptions.slice(0, 4).map((opt, idx) => {
      const cleanText = opt.replace(/^[A-Da-d][\)\.:\s]\s*/, '').trim();
      const trap = Array.isArray(q.traps) && q.traps[idx] ? { ...q.traps[idx] } : null;
      return {
        content: cleanText,
        isCorrect: idx === currentCorrectIdx,
        trap
      };
    });

    const correctItem = items[currentCorrectIdx];
    const distractorItems = items.filter((_, idx) => idx !== currentCorrectIdx);

    // Randomize distractors
    for (let d = distractorItems.length - 1; d > 0; d--) {
      const rand = Math.floor(Math.random() * (d + 1));
      [distractorItems[d], distractorItems[rand]] = [distractorItems[rand], distractorItems[d]];
    }

    const targetPos = targetPositions[qIdx];
    const newLetter = MCQ_LETTERS[targetPos];
    const reorderedItems: any[] = [];
    let distractorIdx = 0;

    for (let pos = 0; pos < 4; pos++) {
      if (pos === targetPos) {
        reorderedItems.push(correctItem);
      } else {
        reorderedItems.push(distractorItems[distractorIdx++]);
      }
    }

    const newOptions = reorderedItems.map((item, pos) => `${MCQ_LETTERS[pos]}) ${item.content}`);
    const newCorrectAnswer = newOptions[targetPos];

    let newExplanation = q.explanation || "";
    if (origLetter && origLetter !== newLetter) {
      newExplanation = newExplanation
        .replace(new RegExp(`\\bOption\\s+${origLetter}\\b`, 'gi'), `Option ${newLetter}`)
        .replace(new RegExp(`\\b${origLetter}\\s+is\\s+correct\\b`, 'gi'), `${newLetter} is correct`)
        .replace(new RegExp(`\\(${origLetter}\\)\\s+is\\s+correct\\b`, 'gi'), `(${newLetter}) is correct`);
    }

    const result: any = {
      ...q,
      options: newOptions,
      correctAnswer: newCorrectAnswer,
      explanation: newExplanation
    };

    if (Array.isArray(q.traps) && q.traps.length > 0) {
      result.traps = reorderedItems.map((item, pos) => {
        if (item.trap) {
          return {
            ...item.trap,
            option: MCQ_LETTERS[pos],
            isCorrect: pos === targetPos
          };
        }
        return {
          option: MCQ_LETTERS[pos],
          isCorrect: pos === targetPos,
          trapType: pos === targetPos ? '🎯 Official College Board Target' : '⚠️ Psychometric Distractor Trap',
          trapDescription: pos === targetPos ? 'Target Answer' : 'Common Distractor',
          collegeBoardMindset: 'AP CED Standard'
        };
      });
    }

    return result;
  });
}

const shuffleAndBalanceTestPrepQuestions = shuffleAndBalanceQuestions;
const shuffleAndBalanceTrapRadarQuestions = shuffleAndBalanceQuestions;

const AP_CODE_MATH_LATEX_FORMATTING = `CRITICAL CODE, MATH & LATEX FORMATTING:
- FOR COMPUTER SCIENCE / PROGRAMMING (AP Computer Science A, AP Computer Science Principles):
  * Always format code snippets inside standard Markdown fenced code blocks (\`\`\`java ... \`\`\`).
  * In code blocks and programming expressions, ALWAYS use standard programming operators: '<=', '>=', '!=', '==', '&&', '||', '<', '>'. NEVER substitute LaTeX symbols like \\leqslant, \\le, \\ge, \\times into code!
  * For inline variable names, methods, or keywords in question text (e.g. \`reverseString("APCS")\`, \`true\`, \`false\`, \`StackOverflowError\`), ALWAYS use Markdown backticks (\`code\`) and NEVER raw LaTeX like \\texttt{...}.
- FOR MATHEMATICS & SCIENCE (AP Calculus, AP Physics, AP Chemistry, AP Statistics):
  * Wrap all mathematical expressions in valid LaTeX syntax: $...$ for inline or $$...$$ for block.
  * For data tables and matrices, ALWAYS wrap in $$ block delimiters:
    $$\\begin{array}{c|ccccc} x & -1 & 0 & 2 & 3 & 4 \\\\ \\hline g(x) & -5 & 3 & -2 & 7 & 10 \\end{array}$$
    NEVER output bare \\begin{array} without $$...$$ delimiters!
  * For piecewise functions, ALWAYS use clean LaTeX with $$:
    $$f(x) = \\begin{cases} g(x) & \\text{for } x < c \\\\ h(x) & \\text{for } x \\ge c \\end{cases}$$
    NEVER write raw unescaped pseudo-code like 'f(x) = { ... }' or '<=' inside math equations that breaks KaTeX!
  * Always double-escape backslashes in JSON output: \\\\frac, \\\\le, \\\\ge, \\\\to, \\\\infty, \\\\begin{cases}, \\\\end{cases}, \\\\begin{array}, \\\\end{array}.`;


app.post("/api/generate-quiz", async (req, res) => {
  try {
    const { topic, gradeLevel, stream, country, count } = req.body;
    if (!topic) {
      return res.status(400).json({ error: "Missing topic" });
    }

    const requestedCount = Math.min(Math.max(parseInt(count) || 5, 1), 30);
    const aiClient = getAI();
    const gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    const systemInstruction = `${gradeDirective}

You are an Elite Academic Tutor and Curriculum Exam Expert. The user will provide a subject or specific topic. 
Your ONLY job is to generate a highly accurate, exam-level Multiple Choice Quiz for that topic calibrated for a student in Grade: ${gradeLevel || 'Standard'}.

CRITICAL RULES:
1. STRICT JSON OUTPUT: You must output ONLY a valid JSON array. Do not wrap it in markdown blockquotes like \`\`\`json. Absolutely ZERO conversational text before or after the JSON.
2. FORMAT: Generate exactly ${requestedCount} questions. Each question must have exactly 4 options and a short explanation.
3. CORRECT ANSWER: The "correctAnswer" field MUST be a single string that EXACTLY matches one of the strings in the "options" array. Do not return an array of multiple correct answers.
4. MULTIPLE EQUATIONS FORMATTING: If generating any math questions, options, or explanations that contain multiple equations (such as systems of linear equations), you must strictly separate the equations using a clear delimiter like the word 'and' or a newline character (\\n) so they do not blend together into a single string.
5. MATHEMATICAL & SCIENTIFIC NOTATION (LATEX):
   - Wrap ALL mathematical equations, expressions, variables, superscripts (exponents), and subscripts in standard single dollar signs ($...).
   - ALWAYS format math as valid LaTeX: write $x^3$, $3x^2$, $e^x$, $f(x) = x^3 \cdot e^x$, $\frac{d}{dx}[u \cdot v] = u'v + uv'$.
   - In options, write: "A) $3x^2 \cdot e^x$", "B) $3x^2 \cdot e^x + x^3 \cdot e^x$".
   - NEVER output raw carets (^) or raw asterisks (*) for math without LaTeX delimiters (NEVER write 'x^3 * e^x').
   - For chemistry and subscripts, write $H_2O$, $CO_2$, $x_1$, $x_2$.

Use this exact JSON structure:
[
  {
    "question": "Which of the following best characterizes the key mechanism of [Concept]?",
    "options": ["A) Statement 1", "B) Statement 2", "C) Statement 3", "D) Statement 4"],
    "correctAnswer": "A) Statement 1",
    "explanation": "Concise 1-2 sentence educational breakdown justifying why the correct option is true."
  }
]`;

    const avoidList = Array.isArray(req.body.avoidPrompts) ? req.body.avoidPrompts.filter(Boolean).slice(0, 10) : [];
    const avoidDirective = avoidList.length > 0
      ? `\nSTRICT ANTI-REPETITION: Do NOT repeat or generate questions similar to these previously tested prompts:\n${avoidList.map((p: string, i: number) => `  [${i+1}] ${p.slice(0, 100)}`).join('\n')}`
      : '';

    let quizText = "";
    try {
      const response = await safeGenerateContent({
        gradeLevel,
        stream,
        country,
        model: "gemini-flash-lite-latest",
        contents: { parts: [{ text: `Topic: ${topic}. CRITICAL COUNT MANDATE: Generate EXACTLY ${requestedCount} multiple choice questions in the JSON array now.${avoidDirective}` }] },
        config: {
          systemInstruction: { parts: [{ text: systemInstruction }] },
          responseMimeType: "application/json",
          maxOutputTokens: Math.min(requestedCount * 350, 8192),
          temperature: 0.6
        }
      });
      quizText = response.text || "";
    } catch (apiError: any) {
      console.warn("API Error during quiz generation:", apiError);
      throw apiError;
    }

    const parsed = safeParseJSON(quizText, 'array');
    if (Array.isArray(parsed) && parsed.length > 0) {
      return res.json({ quiz: parsed });
    }
    if (parsed && typeof parsed === 'object') {
      const arr = Object.values(parsed).find(v => Array.isArray(v) && v.length > 0);
      if (arr) return res.json({ quiz: arr });
    }

    throw new Error("Failed to generate a valid quiz structure.");

  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED") {
      return res.status(429).json({
        error: "QUOTA_EXCEEDED",
        text: `⚠️ AI Tutor Notice: Rate Limit / Quota Exceeded\n\nThe Gemini API is currently experiencing rate limits. Please try again in 60 seconds.`
      });
    }
    console.error("Quiz generation endpoint error:", error);
    res.status(500).json({ error: error.message || "Failed to generate quiz" });
  }
});

app.post("/api/generate-pdf-quiz", upload.single("pdf"), async (req, res) => {
  try {
    const { gradeLevel, stream, country, count } = req.body;
    if (!req.file) {
      console.warn("[PDF Quiz API] No PDF file provided in request.");
      return res.status(400).json({ error: "No PDF file provided" });
    }

    console.log(`[PDF Quiz API] Received file: ${req.file.originalname}, Size: ${req.file.size} bytes`);

    // Enforce 10MB size limit
    const maxSizeBytes = 10 * 1024 * 1024; // 10MB
    if (req.file.size > maxSizeBytes) {
      return res.status(400).json({ error: "PDF file size must not exceed 10MB." });
    }

    // Attempt text extraction first using pdf-parse
    let extractedText = "";
    let numPages = 0;
    try {
      const pdfModule: any = await import("pdf-parse/lib/pdf-parse.js");
      const pdfParser = pdfModule.default || pdfModule;
      const pdfData = await pdfParser(req.file.buffer, { max: 51 });
      numPages = pdfData.numpages;
      extractedText = pdfData.text || "";
      console.log(`[PDF Quiz API] PDF parse complete. Pages: ${numPages}, Extracted text length: ${extractedText.trim().length}`);
    } catch (parseError) {
      console.warn("[PDF Quiz API] Failed to parse PDF locally with pdf-parse:", parseError);
    }

    if (numPages > 50) {
      return res.status(400).json({ error: "PDF document exceeds 50 pages limit. Please upload a shorter document (max 50 pages)." });
    }

    const requestedCount = Math.min(Math.max(parseInt(count) || 5, 1), 30);
    const gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    const systemInstruction = `${gradeDirective}

You are an expert exam creator. Analyze the provided study material and extract the most high-yield concepts. Generate exactly ${requestedCount} multiple choice questions based strictly on this text/document, calibrated for a student in Grade: ${gradeLevel || 'Standard'}. Output your response STRICTLY in JSON format as an array of objects. Each object must have the following keys: 'question' (string), 'options' (an array of exactly 4 strings), 'correctAnswer' (string, must exactly match one of the options), and 'explanation' (string, detailing why the answer is correct).

CRITICAL RULES:
1. STRICT JSON OUTPUT: You must output ONLY a valid JSON array. Do not wrap it in markdown blockquotes like \`\`\`json. Absolutely ZERO conversational text before or after the JSON.
2. FORMAT: Generate exactly ${requestedCount} questions. Each question must have exactly 4 options and a short explanation.
3. CORRECT ANSWER: The "correctAnswer" field MUST be a single string that EXACTLY matches one of the strings in the "options" array.
4. MULTIPLE EQUATIONS FORMATTING: If generating any math questions, options, or explanations that contain multiple equations (such as systems of linear equations), you must strictly separate the equations using a clear delimiter like the word 'and' or a newline character (\\n) so they do not blend together into a single string.
5. MATHEMATICAL & SCIENTIFIC NOTATION (LATEX):
   - Wrap ALL mathematical equations, expressions, variables, superscripts (exponents), and subscripts in standard single dollar signs ($...).
   - ALWAYS format math as valid LaTeX: write $x^3$, $3x^2$, $e^x$, $f(x) = x^3 \cdot e^x$, $\frac{d}{dx}[u \cdot v] = u'v + uv'$.
   - In options, write: "A) $3x^2 \cdot e^x$", "B) $3x^2 \cdot e^x + x^3 \cdot e^x$".
   - NEVER output raw carets (^) or raw asterisks (*) for math without LaTeX delimiters (NEVER write 'x^3 * e^x').
   - For chemistry and subscripts, write $H_2O$, $CO_2$, $x_1$, $x_2$.

Use this exact JSON structure:
[
  {
    "question": "Sample multiple choice question...",
    "options": ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
    "correctAnswer": "A) Option A",
    "explanation": "Because..."
  }
]`;

    let response;
    if (extractedText && extractedText.trim().length >= 50) {
      console.log("[PDF Quiz API] Using high-reliability text extraction path...");
      const slicedText = extractedText.length > 150000 ? extractedText.slice(0, 150000) : extractedText;
      response = await safeGenerateContent({
        gradeLevel,
        stream,
        country,
        model: "gemini-3.5-flash-lite",
        contents: [{
          parts: [{ text: `DOCUMENT CONTENT:\n${slicedText}\n\nGenerate the ${requestedCount}-question JSON quiz now based strictly on the content above for a student in Grade: ${gradeLevel || 'Standard'}.` }]
        }],
        config: {
          systemInstruction: { parts: [{ text: systemInstruction }] },
          responseMimeType: "application/json",
          maxOutputTokens: 8192
        }
      });
    } else {
      console.log("[PDF Quiz API] Falling back to base64 PDF multimodal processing path (scanned PDF or low-quality extraction)...");
      const pdfPart = {
        inlineData: {
          mimeType: "application/pdf",
          data: req.file.buffer.toString("base64"),
        },
      };

      response = await safeGenerateContent({
        gradeLevel,
        stream,
        country,
        model: "gemini-3.5-flash-lite",
        contents: [{
          parts: [
            pdfPart,
            { text: `Analyze the attached PDF document and generate the ${requestedCount}-question JSON quiz now based strictly on its content for a student in Grade: ${gradeLevel || 'Standard'}.` }
          ]
        }],
        config: {
          systemInstruction: { parts: [{ text: systemInstruction }] },
          responseMimeType: "application/json",
          maxOutputTokens: 8192
        }
      });
    }

    let quizText = response.text || "";
    console.log(`[PDF Quiz API] Gemini response received. Length: ${quizText.length} characters.`);
    try {
      const parsed = safeParseJSON(quizText, 'array');
      if (Array.isArray(parsed) && parsed.length > 0) {
        console.log(`[PDF Quiz API] Successfully parsed quiz with ${parsed.length} questions.`);
        return res.json({ quiz: parsed });
      }
    } catch (parseError) {
      console.error("[PDF Quiz API] JSON parse error for PDF quiz output:", parseError, quizText);
    }

    return res.status(400).json({ error: "Failed to generate a valid quiz structure from the PDF. Please ensure it has readable text or images." });
  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED") {
      return res.status(429).json({
        error: "QUOTA_EXCEEDED",
        text: `⚠️ AI Tutor Notice: Rate Limit / Quota Exceeded\n\nThe Gemini API is currently experiencing rate limits. Please try again in 60 seconds.`
      });
    }
    console.error("[PDF Quiz API] PDF quiz generation error:", error);
    res.status(400).json({ error: error.message || "Failed to generate quiz from PDF" });
  }
});

app.post("/api/generate-image-quiz", upload.single("image"), async (req, res) => {
  try {
    const { gradeLevel, stream, country, count } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "No image provided" });
    }

    const imagePart = {
      inlineData: {
        mimeType: req.file.mimetype,
        data: req.file.buffer.toString("base64"),
      },
    };

    const requestedCount = Math.min(Math.max(parseInt(count) || 5, 1), 30);
    const gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    const systemInstruction = `${gradeDirective}

You are an expert exam creator and visual analyzer. Analyze the textbook page, question sheet, or study material in the provided image. Identify the key academic topics, concepts, or exercises shown on the page. Generate exactly ${requestedCount} multiple choice questions based strictly on the content of that textbook page, calibrated for a student in Grade: ${gradeLevel || 'Standard'}.
    
CRITICAL RULES:
1. STRICT JSON OUTPUT: You must output ONLY a valid JSON array. Do not wrap it in markdown blockquotes like \`\`\`json. Absolutely ZERO conversational text before or after the JSON.
2. FORMAT: Generate exactly ${requestedCount} questions. Each question must have exactly 4 options (prefixed with A), B), C), D)) and a short explanation.
3. CORRECT ANSWER: The "correctAnswer" field MUST be a single string that EXACTLY matches one of the strings in the "options" array.
4. MULTIPLE EQUATIONS FORMATTING: If generating any math questions, options, or explanations that contain multiple equations (such as systems of linear equations), you must strictly separate the equations using a clear delimiter like the word 'and' or a newline character (\\n) so they do not blend together into a single string.
5. MATHEMATICAL & SCIENTIFIC NOTATION (LATEX):
   - Wrap ALL mathematical equations, expressions, variables, superscripts (exponents), and subscripts in standard single dollar signs ($...).
   - ALWAYS format math as valid LaTeX: write $x^3$, $3x^2$, $e^x$, $f(x) = x^3 \cdot e^x$, $\frac{d}{dx}[u \cdot v] = u'v + uv'$.
   - In options, write: "A) $3x^2 \cdot e^x$", "B) $3x^2 \cdot e^x + x^3 \cdot e^x$".
   - NEVER output raw carets (^) or raw asterisks (*) for math without LaTeX delimiters (NEVER write 'x^3 * e^x').
   - For chemistry and subscripts, write $H_2O$, $CO_2$, $x_1$, $x_2$.

Use this exact JSON structure:
[
  {
    "question": "Based on the concept in the image, what is...",
    "options": ["A) Option A", "B) Option B", "C) Option C", "D) Option D"],
    "correctAnswer": "A) Option A",
    "explanation": "Because..."
  }
]`;

    const response = await safeGenerateContent({
      gradeLevel,
      stream,
      country,
      model: "gemini-3.5-flash-lite",
      contents: [{ parts: [imagePart, { text: `Analyze this textbook page image and generate exactly ${requestedCount} multiple choice questions for a student in Grade: ${gradeLevel || 'Standard'}.` }] }],
      config: {
        systemInstruction: { parts: [{ text: systemInstruction }] },
        responseMimeType: "application/json",
        maxOutputTokens: 8192
      }
    });

    let quizText = response.text || "";
    try {
      const parsed = safeParseJSON(quizText, 'array');
      if (Array.isArray(parsed) && parsed.length > 0) {
        return res.json({ quiz: parsed });
      }
    } catch (parseError) {
      console.error("JSON parse error for image quiz output:", parseError, quizText);
    }

    return res.status(500).json({ error: "Failed to generate a valid quiz structure from the image." });
  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA_EXHAUSTED") {
      return res.status(429).json({
        error: "QUOTA_EXCEEDED",
        text: `⚠️ AI Tutor Notice: Rate Limit / Quota Exceeded\n\nThe Gemini API is currently experiencing rate limits. Please try again in 60 seconds.`
      });
    }
    console.error("Image quiz generation error:", error);
    res.status(500).json({ error: error.message || "Failed to generate quiz from image" });
  }
});

interface SearchSourceItem {
  title: string;
  uri: string;
  sourceName: string;
  snippet: string;
  pubDate?: string;
  type: 'news' | 'encyclopedia' | 'knowledge' | 'academic';
}

function extractSearchKeywords(userQuery: string): string[] {
  const clean = userQuery
    .replace(/^(bhai|tum|please|zara|karo|batao|explain|mujhe|janna|hai|deep|search|what is|tell me|who is|when was|kya|kab|kaun|kitna|where|capital|kya hai|kiske|kisne|about|latest news on|give me information on)\s+/gi, '')
    .trim();
  const keywords: string[] = [];
  if (clean && clean.length > 1) keywords.push(clean);
  if (clean !== userQuery.trim() && userQuery.trim().length > 1) keywords.push(userQuery.trim());
  return keywords.length > 0 ? keywords : [userQuery.trim()];
}

async function performLiveWebSearch(query: string, searchKeywords: string[] = [], userCountry: string = 'United States'): Promise<SearchSourceItem[]> {
  const sources: SearchSourceItem[] = [];
  const seenUrls = new Set<string>();

  const primaryClean = extractSearchKeywords(query)[0] || query;
  const queriesToSearch = Array.from(new Set([primaryClean, ...searchKeywords]))
    .filter(q => q && q.length > 1)
    .slice(0, 2);

  const isIndia = (userCountry || '').toLowerCase().includes('india');
  const glParam = isIndia ? 'IN' : 'US';
  const hlParam = isIndia ? 'en-IN' : 'en-US';

  const searchTasks = queriesToSearch.map(async (kw) => {
    const encoded = encodeURIComponent(kw);

    // 1. Google News Real-Time RSS (High speed, 2500ms timeout)
    try {
      const rssUrl = `https://news.google.com/rss/search?q=${encoded}&hl=${hlParam}&gl=${glParam}&ceid=${glParam}:en`;
      const rssRes = await fetchWithTimeout(rssUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      }, 2500);

      if (rssRes.ok) {
        const xml = await rssRes.text();
        const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
        for (let i = 0; i < Math.min(6, items.length); i++) {
          const block = items[i][1];
          const title = (block.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '')
            .replace(/<!\[CDATA\[|\]\]>/g, '')
            .replace(/&amp;/g, '&')
            .trim();
          const link = (block.match(/<link>([\s\S]*?)<\/link>/)?.[1] || '').replace(/<!\[CDATA\[|\]\]>/g, '').trim();
          const source = (block.match(/<source[^>]*>([\s\S]*?)<\/source>/)?.[1] || '').replace(/<!\[CDATA\[|\]\]>/g, '').trim();
          const pubDate = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] || '';

          const rawDesc = block.match(/<description>([\s\S]*?)<\/description>/)?.[1] || '';
          const cleanDesc = rawDesc
            .replace(/<!\[CDATA\[|\]\]>/g, '')
            .replace(/<[^>]+>/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/\s+/g, ' ')
            .trim();

          const richSnippet = cleanDesc && cleanDesc.length > 20
            ? `${cleanDesc} (Published: ${pubDate}, Source: ${source || 'News Wire'})`
            : `Headline: ${title}. Published: ${pubDate} by ${source || 'News Wire'}.`;

          if (title && link && !seenUrls.has(link)) {
            seenUrls.add(link);
            sources.push({
              title,
              uri: link,
              sourceName: source || 'Live Verified News Wire',
              snippet: richSnippet,
              pubDate,
              type: 'news'
            });
          }
        }
      }
    } catch (e: any) {
      console.warn(`[performLiveWebSearch] News RSS notice for "${kw}":`, e.message || e);
    }

    // 2. Encyclopedic / Conceptual Summary API (High speed, 2000ms timeout)
    try {
      const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(kw.replace(/ /g, '_'))}`;
      const sumRes = await fetchWithTimeout(summaryUrl, {
        headers: { 'User-Agent': 'HelpYouAI-AcademicSearch/1.0' }
      }, 2000);

      if (sumRes.ok) {
        const sumData = await sumRes.json();
        if (sumData.title && sumData.extract) {
          const academicRefUrl = `https://www.britannica.com/search?query=${encodeURIComponent(sumData.title)}`;
          if (!seenUrls.has(academicRefUrl)) {
            seenUrls.add(academicRefUrl);
            sources.push({
              title: `${sumData.title} - Academic Encyclopedic Context`,
              uri: academicRefUrl,
              sourceName: 'Encyclopaedia Britannica Academic',
              snippet: sumData.extract,
              type: 'encyclopedia'
            });
          }
        }
      }
    } catch (_) {}
  });

  await Promise.allSettled(searchTasks);
  return sources;
}

app.post("/api/fix-mistake", async (req, res) => {
  try {
    const { question, wrongInput, correctConcept, gradeLevel, stream, country } = req.body;

    const safeQuestion = (question || "Academic Problem").slice(0, 3000);
    const safeWrong = (wrongInput || "Incorrect attempt").slice(0, 1000);
    const safeCorrect = (correctConcept || "Correct method / concept").slice(0, 2000);
    const gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    const systemInstruction = `${gradeDirective}

You are the Lead Master of Academic Conceptual Clarity & Mistake Correction.
Your job is to analyze a student's academic mistake and provide a structured 3-part conceptual breakdown calibrated for a student in Grade: ${gradeLevel || 'Standard'}.
Be direct, encouraging, precise, and crystal-clear.

CRITICAL MATHEMATICAL & SCIENTIFIC NOTATION (LATEX) RULE:
Wrap ALL mathematical equations, expressions, variables, superscripts (exponents), and subscripts in standard single dollar signs ($...). Always format math as valid LaTeX: write $x^3$, $3x^2$, $e^x$, $v = u + at$, $9.8\\text{ m/s}^2$. NEVER output raw carets (^) without LaTeX delimiters. For chemistry and subscripts, write $\\text{H}_2\\text{O}$, $\\text{CO}_2$, $\\text{O}_2$.

STRICT JSON OUTPUT FORMAT (Return ONLY a single valid JSON object, NO markdown wrappers):
{
  "why_it_happened": "One crisp sentence identifying the conceptual trap or reason behind the mistake.",
  "the_fix": "The absolute correct concept explained in simple, memorable terms.",
  "pro_memory_trick": "A clever mnemonic, practical rule of thumb, or analogy to never forget this."
}`;

    const prompt = `Student Mistake Context:
- Problem / Question: ${safeQuestion}
- Student's Incorrect Input: ${safeWrong}
- Correct Concept / Solution: ${safeCorrect}
- Target Grade Level: ${gradeLevel || "Standard"}

Analyze this mistake and provide the 3-part JSON fix for this grade level.`;

    const response = await safeGenerateContent({
      gradeLevel,
      stream,
      country,
      model: "gemini-3.5-flash-lite",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: { parts: [{ text: systemInstruction }] },
        responseMimeType: "application/json"
      }
    });

    let rawText = response.text || "";
    let parsedResult = safeParseJSON(rawText, 'object');
    if (!parsedResult || !parsedResult.the_fix) {
      parsedResult = {
        why_it_happened: `There was a confusion with the underlying problem setup.`,
        the_fix: `The correct concept is: ${safeCorrect}`,
        pro_memory_trick: "💡 Memory Rule: Always double check the core formula and units before answering!"
      };
    }

    res.json(parsedResult);
  } catch (error: any) {
    console.error("Fix mistake endpoint error:", error);
    res.json({
      why_it_happened: "A common misunderstanding of the fundamental concept.",
      the_fix: req.body?.correctConcept ? `The correct concept is: ${req.body.correctConcept}` : "Review the key formula and step-by-step logic.",
      pro_memory_trick: "💡 Pro Tip: Write down the given values and formula first to avoid calculation traps!"
    });
  }
});

app.post("/api/quiz-ai-help", async (req, res) => {
  try {
    const { question, options, correctAnswer, explanation, mode, gradeLevel, stream, country } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Missing question" });
    }

    const isHint = mode === 'hint';
    const gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    const systemInstruction = `${gradeDirective}

You are an elite Master Academic Coach and Professor.
A student in Grade: ${gradeLevel || 'Standard'} is answering a multiple-choice question and clicked ${isHint ? '"Explain Question & Hint"' : '"Explain Step-by-Step Answer"'}.

CRITICAL PEDAGOGICAL MANDATE:
1. ${isHint 
     ? `DO NOT reveal the final correct option or direct answer!
Structure your response in rich, clean Markdown with these exact sections:
### 🎯 What This Question Is Asking
Break down the problem in simple, encouraging terms. Explain what scenario is being described, what the question is asking you to solve or identify, and why this concept matters.
### 🔑 Core Concepts & Key Mechanism
Explain the foundational concept, biological pathway, chemical mechanism, historical context, or mathematical theorem involved.
### 💡 Guided Progressive Hints
- **Hint 1 (Starting Point):** A gentle conceptual clue to get started.
- **Hint 2 (Critical Connection):** Connect the key mechanism to the terms in the choices.
- **Hint 3 (Elimination Clue):** What common trap or confusion should they avoid? How can they eliminate wrong distractors?`
     : `Deliver an exhaustive, comprehensive, master-tier explanation.
Structure your response in rich, clean Markdown with these exact sections:
### 🎯 Correct Answer & Comprehensive Summary
State the official correct answer clearly, with an executive summary explaining why it is 100% correct.
### 📝 In-Depth Step-by-Step Breakdown & Mechanism
Provide a thorough, step-by-step conceptual walkthrough or mathematical derivation. Explain the underlying biological mechanism, chemical pathway, historical context, or mathematical working in complete detail.
### ❌ Why the Other Options Are Incorrect
Break down the wrong options and explain specifically why they fail or represent common exam misconceptions.
### 💡 High-Yield Exam Tip & Pitfall
Provide an exam-tested mnemonic, trap alert, or key takeaway specifically tailored to this exact subject and topic.`}

2. MATHEMATICAL FORMULAS & SCIENTIFIC NOTATION (STRICT KA-TEX RULES):
   - CRITICAL: EVERY single mathematical formula, derivation step, variable, equation, number with units, and chemical symbol MUST be fully enclosed in LaTeX dollar signs ($...$ for inline or $$...$$ for display blocks).
   - NEVER output raw un-bracketed LaTeX syntax (such as \\frac, \\sqrt, \\cos, \\sin, \\text{}, \\cdot, \\theta, \\circ) without enclosing dollar signs ($...$).
   - NEVER leave unmatched or dangling dollar signs (e.g. NEVER write 'gives: v_{0x}=...$' with an unclosed '$').
   - When writing equations after colons or introductory text, ALWAYS wrap the entire equation in dollar signs: e.g. 'gives: $v_{0x} = v_0 \\cos(\\theta)$', NEVER 'gives: v_{0x}=...$'.
   - When explaining options, wrap all math and units: e.g. '• A) $10\\text{ m/s}$: This represents $20\\sin(30^\\circ)$ which...'.
   - Use standard subscripts and superscripts: e.g. $NADH$, $FADH_2$, $ATP$, $H_2O$, $x^2$, $10^{-5}$, $v_{0x}$, $v_{0y}$.
   - Never write bare asterisks for multiplication (use $\\cdot$ or $\\times$).

3. TONE & DEPTH:
   - Highly encouraging, intellectually rigorous, crystal-clear, and thorough. Calibrated perfectly to the student's grade level.`;

    const userPrompt = `Student Question:
${question}

Available Options:
${options && options.length > 0 ? (Array.isArray(options) ? options.join('\n') : options) : 'N/A'}

${correctAnswer ? `Official Correct Option: ${correctAnswer}\n` : ''}${explanation ? `Provided Context/Explanation: ${explanation}\n` : ''}
Goal: Generate a master-level ${isHint ? 'question breakdown and 3 progressive hints without spoiling the final choice' : 'full step-by-step solution, option-by-option analysis, and subject-specific exam tip'} for a student in Grade: ${gradeLevel || 'Standard'}.`;

    const response = await safeGenerateContent({
      gradeLevel,
      stream,
      country,
      model: "gemini-3.5-flash-lite",
      contents: [{ role: "user", parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: { parts: [{ text: systemInstruction }] },
        temperature: 0.3
      }
    });

    return res.json({ explanation: response.text || "Here is a breakdown to help you with this question." });
  } catch (error: any) {
    console.error("Quiz AI Help Error:", error);
    return res.status(500).json({ error: error.message || "Failed to generate AI help" });
  }
});

app.post("/api/generate-practice", async (req, res) => {
  try {
    const { question, wrongInput, correctConcept, sourceFeature, gradeLevel, stream, country } = req.body;

    const safeQuestion = (question || "Academic Concept").slice(0, 3000);
    const safeWrong = (wrongInput || "Incorrect attempt").slice(0, 1000);
    const safeCorrect = (correctConcept || "Correct concept").slice(0, 2000);
    const gradeDirective = getGradePedagogicalDirective(gradeLevel, stream, country);

    const systemInstruction = `${gradeDirective}

You are an Elite Academic Practice Coach.
Your task is to generate exactly 3 multiple-choice practice questions that test the SAME core concept as the student's mistake, but with fresh numbers, contexts, or scenarios, calibrated for a student in Grade: ${gradeLevel || 'Standard'}.

RULES:
1. Generate exactly 3 questions with increasing mastery (Easy, Medium, Mastery).
2. Each question MUST have exactly 4 distinct options.
3. "correctIndex" MUST be an integer (0, 1, 2, or 3).
4. "explanation" MUST be 1-2 concise, encouraging sentences.
5. MATHEMATICAL & SCIENTIFIC NOTATION (LATEX): Wrap ALL mathematical equations, expressions, variables, superscripts (exponents), and subscripts in standard single dollar signs ($...). Always format math as valid LaTeX: write $x^3$, $3x^2$, $e^x$, $f(x) = x^3 \cdot e^x$. NEVER output raw carets (^) without LaTeX delimiters. For chemistry and subscripts, write $H_2O$, $CO_2$.

STRICT JSON OUTPUT (Return ONLY a JSON array with 3 question objects):
[
  {
    "question": "Clear, concise practice question text?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "Clear explanation of why Option A is correct."
  }
]`;

    const prompt = `Student Mistake Context:
- Source Area: ${sourceFeature || "General"}
- Original Question: ${safeQuestion}
- Incorrect Input: ${safeWrong}
- Correct Principle: ${safeCorrect}
- Target Grade: ${gradeLevel || "Standard"}

Generate 3 fresh similar practice questions to help the student master this concept at their grade level.`;

    const response = await safeGenerateContent({
      gradeLevel,
      stream,
      country,
      model: "gemini-3.5-flash-lite",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: { parts: [{ text: systemInstruction }] },
        responseMimeType: "application/json"
      }
    });

    let rawText = response.text || "";
    let parsedResult = safeParseJSON(rawText, 'array');

    // Handle when AI returns wrapped object { questions: [...] }
    if (!Array.isArray(parsedResult)) {
      const obj = safeParseJSON(rawText, 'object');
      if (obj && Array.isArray(obj.questions)) {
        parsedResult = obj.questions;
      } else if (obj && Array.isArray(obj.practice_questions)) {
        parsedResult = obj.practice_questions;
      } else if (obj && Array.isArray(obj.practiceQuestions)) {
        parsedResult = obj.practiceQuestions;
      }
    }

    if (!Array.isArray(parsedResult) || parsedResult.length === 0) {
      parsedResult = [
        {
          question: `Regarding the concept from "${safeQuestion.slice(0, 120)}...", which statement is accurate?`,
          options: [
            safeCorrect.slice(0, 80) || "The formal rule applies directly",
            "An alternative incorrect interpretation",
            "The variables are mutually exclusive",
            "None of the above are valid"
          ],
          correctIndex: 0,
          explanation: `The correct principle is: ${safeCorrect.slice(0, 200)}.`
        },
        {
          question: `What is the most effective approach when solving problems on this topic?`,
          options: [
            "Apply the standard formula and verify given constraints",
            "Assume the first intuitive guess without verification",
            "Disregard intermediate calculations",
            "Skip unit checks"
          ],
          correctIndex: 0,
          explanation: "Always apply the formal definition and check your given values step-by-step."
        },
        {
          question: `Which key takeaway ensures full mastery of this question in future exams?`,
          options: [
            "Mastering the underlying formula and its assumptions",
            "Memorizing only final answers",
            "Relying on elimination alone",
            "Ignoring edge cases"
          ],
          correctIndex: 0,
          explanation: "Mastering the underlying formula and assumptions ensures you can solve any variation!"
        }
      ];
    }

    res.json(parsedResult);
  } catch (error: any) {
    console.error("Generate practice endpoint error:", error);
    res.json([
      {
        question: `Based on your mistake, which statement accurately reflects the correct concept?`,
        options: [
          req.body?.correctConcept ? req.body.correctConcept.slice(0, 80) : "The formal rule applies directly",
          "An alternative incorrect assumption",
          "The inverse relationship holds true",
          "Cannot be determined from given data"
        ],
        correctIndex: 0,
        explanation: req.body?.correctConcept ? `The correct concept is: ${req.body.correctConcept}` : "Review the correct concept to ensure full mastery."
      },
      {
        question: "What is the best strategy to verify your answer when solving similar problems?",
        options: [
          "Cross-verify using the fundamental formula and units",
          "Guess based on option lengths",
          "Ignore edge conditions",
          "Skip intermediate algebraic steps"
        ],
        correctIndex: 0,
        explanation: "Cross-verifying with the core formula and checking units guarantees full accuracy!"
      },
      {
        question: "Which of the following is a classic trap to avoid in this category?",
        options: [
          "Confusing similar-sounding terms or opposite signs",
          "Reading the entire question carefully",
          "Writing down given information clearly",
          "Checking the final units"
        ],
        correctIndex: 0,
        explanation: "Watch out for sign errors and term confusions—that is where most marks are lost!"
      }
    ]);
  }
});

app.post("/api/live-study-tutor", async (req, res) => {
  const rawQueryInput = req.body.query || req.body.prompt || req.body.search || "";
  const profileContext = req.body.profileContext;
  const studentNotes = req.body.studentNotes;
  const gradeLevel = req.body.gradeLevel || req.body.userGrade || "11th Grade (Junior)";
  const country = req.body.country || "United States";
  const academicStream = req.body.academicStream || "STEM / Engineering";

  try {
    if (!rawQueryInput || !rawQueryInput.trim()) {
      return res.status(400).json({ error: "Missing search query" });
    }

    const rawQuery = rawQueryInput.trim();

    // 1. Smart Keyword & Entity Extraction
    const keywords = extractSearchKeywords(rawQuery);

    // 2. Detect Small / Date / Direct Fact Query vs Complex Topic
    const isSmallOrDateQuery = rawQuery.split(/\s+/).length <= 8 || 
      /\b(when|date|launch|born|died|kab|kitne|kitna|kaun|kisne|kisko|kaha|where|who is|what is|capital|full form|ceo|founder|prime minister|president|released|announced|exam date|admit card|score|result|headquarters|hq|established)\b/i.test(rawQuery);

    // 3. Multi-Engine Real-Time Live Web Search (Google News RSS, Britannica Context)
    const searchResults = await performLiveWebSearch(rawQuery, keywords, country);

    const verifiedContextString = searchResults.map((s, idx) =>
      `[Source ${idx + 1}] Title: ${s.title}\nURL: ${s.uri}\nPublisher: ${s.sourceName} (${s.pubDate || 'Recent'})\nContent Snippet: ${s.snippet}\n`
    ).join('\n---\n');

    const gradeDirective = getGradePedagogicalDirective(gradeLevel, academicStream, country);
    const currentDateStr = new Date().toISOString().slice(0, 10);

    const systemInstruction = `${gradeDirective}

You are the lead intelligence engine for "Deep Search AI" in the "HelpYou AI" app.
Current Real-Time Date: ${currentDateStr}. Treat this as the absolute present moment.
Your mission is to provide 100% accurate, up-to-date, grounded answers for student queries.

CRITICAL ADAPTIVE FORMATTING & BEHAVIOR DIRECTIVE:
1. QUERY INTENT CLASSIFICATION:
${isSmallOrDateQuery ? `   - [ACTIVE MODE: DIRECT & CONCISE ANSWER]
     * The user has asked a date, small query, or specific factual question ("${rawQuery}").
     * GIVE A DIRECT, SIMPLE, CRISP ANSWER. Do NOT output a lengthy thesis or artificial 4-section report.
     * The very first line/bullet of "live_updates" MUST state the exact answer or date IMMEDIATELY in bold (e.g. "**Chandrayaan-3 was launched on July 14, 2023 at 2:35 PM IST.**" or in Hinglish: "**Chandrayaan-3 ko 14 July 2023 ko dopehar 2:35 baje launch kiya gaya tha.**").
     * Follow with 2 to 3 concise, high-value bullet points explaining essential verified context with citations [1], [2].
     * Keep "action_steps" to 1-2 practical takeaways.` : `   - [ACTIVE MODE: STRUCTURED POINT-WISE BREAKDOWN]
     * The user has asked a broad, academic, or complex topic ("${rawQuery}").
     * Provide an elite, point-wise, structured research report with small markdown subheadings and clear bullet points.
     * Organize cleanly into 3-4 logical subheadings (e.g., "### 📌 Core Background & Definition", "### 🔍 Key Developments & Timeline", "### ⚖️ Real-World Impact & Analysis", "### 💡 High-Yield Takeaways").
     * Under each subheading, provide 2 to 3 detailed bullet points starting with bold anchors (* **Bold Anchor:** explanation [1]).`}

2. REAL-TIME FACTUAL ACCURACY & CURRENT NEWS:
   - Ground strictly in verified live context provided below.
   - For latest news, dates, or current events, state exact real-world names, dates, organizations, or developments. Never guess or write vague summaries like "recently".

3. STRICT WIKIPEDIA HARD-BAN:
   - NEVER cite, link, or output "wikipedia.org" or "wikimedia.org" URLs or titles anywhere in your output.
   - Strictly prioritize peer-reviewed journals (.edu, .gov, Nature, Science, IEEE, NIH, JSTOR, Springer, Elsevier, Crossref DOI), authoritative encyclopedias (Encyclopaedia Britannica), accredited national education boards (CollegeBoard, NCERT, UCAS), and verified global news wires (Reuters, AP, BBC).

4. MANDATORY INLINE CITATIONS PROTOCOL:
   - Every single factual claim, statistic, date, or event in "live_updates" MUST include an inline numerical bracket citation immediately following the fact (e.g. "...approved on January 14, 2026 [1]...", "...launched on July 14, 2023 [1]...").
   - Every citation number [1], [2] MUST correspond directly to the 1-based index in "source_links".

5. LANGUAGE MATCHING:
   - If the user wrote in Hinglish (e.g. "bhai Chandrayaan 3 kab launch hua tha"), write the entire response in natural, articulate, crisp Hinglish.
   - If Hindi, write Hindi. If English, write English.

6. HEADLINE:
   - "topic_title" MUST be a crisp, elegant headline of 3 to 6 words max.

STRICT JSON OUTPUT FORMAT:
{
  "topic_title": "Concise Main Headline (3-6 words)",
  "match_score": "98%",
  "live_updates": [
    "markdown formatted text / bullet points with citations [1], [2]"
  ],
  "action_steps": [
    "Practical action step 1",
    "Practical action step 2"
  ],
  "pro_tips": "In-depth educator pro-tip or memory anchor.",
  "related_queries": [
    "Follow-up research question 1",
    "Follow-up research question 2"
  ],
  "source_links": [
    "verified url 1",
    "verified url 2"
  ]
}`;

    const contentPrompt = `STUDENT SEARCH QUERY: "${rawQuery}"
STUDENT ACADEMIC PROFILE & LOCATION:
- Country: ${country}
- Grade Level: ${gradeLevel}
- Academic Stream: ${academicStream}
${profileContext ? `ADDITIONAL PROFILE CONTEXT:\n${profileContext}\n` : ""}
${studentNotes ? `STUDENT LOCAL STUDY NOTES / TARGET SYLLABUS:\n${studentNotes}\n` : ""}

VERIFIED REAL-TIME LIVE WEB CONTEXT:
${verifiedContextString || "No external search feeds returned. Synthesize using accurate, verified ground truth from peer-reviewed databases."}

${isSmallOrDateQuery 
  ? "Generate a direct, simple, concise answer with the exact date/fact stated immediately in bold, followed by 2-3 crisp bullet points with inline citations." 
  : "Generate an elite, point-wise, structured academic research report with small markdown subheadings (### ...) and bullet points with inline citations."}
Return strictly the JSON structure specified above.`;

    const response = await safeGenerateContent({
      gradeLevel,
      stream: academicStream,
      country,
      model: "gemini-flash-lite-latest",
      contents: [{ parts: [{ text: contentPrompt }] }],
      config: {
        systemInstruction: { parts: [{ text: systemInstruction }] },
        responseMimeType: "application/json",
        temperature: 0.2,
        maxOutputTokens: isSmallOrDateQuery ? 650 : 1800
      }
    });

    let rawText = response.text || "";
    let parsedResult: any = null;
    try {
      parsedResult = safeParseJSON(rawText, 'object');
      if (!parsedResult || !parsedResult.topic_title || !parsedResult.live_updates) {
        throw new Error("Invalid or incomplete JSON response from model");
      }
    } catch (parseError) {
      console.error("[live-study-tutor] JSON parse failed, constructing grounded result from raw text:", parseError);
      parsedResult = {
        topic_title: keywords[0] || rawQuery,
        match_score: "96%",
        live_updates: rawText ? [rawText] : ["Live research synthesis completed successfully."],
        action_steps: [
          `Review core concepts and definitions of ${keywords[0] || rawQuery}`,
          `Analyze key mechanisms, timeline, and exam implications`,
          `Verify understanding against authoritative academic references`
        ],
        pro_tips: `Focus on the underlying core principles and timeline rather than rote memorization when studying ${keywords[0] || rawQuery}.`,
        related_queries: [
          `Key timeline of ${keywords[0] || rawQuery}`,
          `Exam takeaways for ${keywords[0] || rawQuery}`,
          `Important facts about ${keywords[0] || rawQuery}`
        ],
        source_links: searchResults.map(s => s.uri).slice(0, 5)
      };
    }

    // Build verified detailed_sources with exact titles and working URLs (Wikipedia Hard-Banned)
    const cleanSources: string[] = [];
    const detailedSources: { title: string; uri: string; sourceName?: string }[] = [];
    const seenUrls = new Set<string>();

    const candidateLinks = Array.isArray(parsedResult.source_links) && parsedResult.source_links.length > 0
      ? parsedResult.source_links
      : searchResults.map(s => s.uri);

    for (const link of candidateLinks) {
      if (typeof link !== 'string' || !link.startsWith('http') || seenUrls.has(link) || link.includes('wikipedia.org') || link.includes('wikimedia.org')) continue;
      seenUrls.add(link);
      cleanSources.push(link);

      const matched = searchResults.find(s => s.uri === link);
      let displayTitle = matched?.title;
      if (!displayTitle) {
        try {
          const u = new URL(link);
          const host = u.hostname.replace(/^www\./, '');
          if (host.includes('britannica')) displayTitle = 'Encyclopaedia Britannica Academic';
          else if (host.includes('nature')) displayTitle = 'Nature Journal Research';
          else if (host.includes('doi.org')) displayTitle = 'Peer-Reviewed DOI Study';
          else if (host.includes('news.google')) displayTitle = 'Google News Live Feed';
          else displayTitle = `${host} Verified Research`;
        } catch (_) {
          displayTitle = 'Verified Academic Source';
        }
      }
      detailedSources.push({
        title: displayTitle || 'Verified Research Source',
        uri: link,
        sourceName: matched?.sourceName || 'Academic Resource'
      });
    }

    // Fallback: If model returned no valid links or search was sparse, provide authoritative accredited research portals
    if (detailedSources.length === 0) {
      const mainKeyword = keywords[0] || rawQuery;
      const encodedKw = encodeURIComponent(mainKeyword);
      const countryNorm = (country || '').toLowerCase();

      const britannicaUrl = `https://www.britannica.com/search?query=${encodedKw}`;
      const natureUrl = `https://www.nature.com/search?q=${encodedKw}`;

      cleanSources.push(britannicaUrl, natureUrl);
      detailedSources.push(
        { title: `${mainKeyword} - Encyclopaedia Britannica Academic`, uri: britannicaUrl, sourceName: "Encyclopaedia Britannica" },
        { title: `${mainKeyword} - Nature Academic Research Index`, uri: natureUrl, sourceName: "Nature Journal" }
      );

      if (countryNorm.includes('india')) {
        cleanSources.push("https://ncert.nic.in");
        detailedSources.push({ title: "NCERT National Academic Repository", uri: "https://ncert.nic.in", sourceName: "NCERT India" });
      } else if (countryNorm.includes('kingdom') || countryNorm.includes('uk')) {
        cleanSources.push("https://www.gov.uk/education");
        detailedSources.push({ title: "UK Department for Education Official Portal", uri: "https://www.gov.uk/education", sourceName: "GOV.UK Education" });
      } else {
        cleanSources.push("https://www.loc.gov");
        detailedSources.push({ title: "Library of Congress Academic Database", uri: "https://www.loc.gov", sourceName: "Library of Congress" });
      }
    }

    parsedResult.source_links = cleanSources.slice(0, 6);
    parsedResult.detailed_sources = detailedSources.slice(0, 6);

    // Strictly clamp any citation [X] > total sources so bad hallucinated numbers never appear
    const finalSourcesCount = parsedResult.detailed_sources.length;
    if (finalSourcesCount > 0) {
      const clampCitations = (text: string) => {
        if (!text) return '';
        return text.replace(/\[\s*(\d+)\s*\]/g, (_, p1) => {
          let n = parseInt(p1, 10);
          if (n > finalSourcesCount) {
            n = ((n - 1) % finalSourcesCount) + 1;
          } else if (n < 1) {
            n = 1;
          }
          return `[${n}]`;
        });
      };

      if (Array.isArray(parsedResult.live_updates)) {
        parsedResult.live_updates = parsedResult.live_updates.map((u: any) => typeof u === 'string' ? clampCitations(u) : u);
      } else if (typeof parsedResult.live_updates === 'string') {
        parsedResult.live_updates = clampCitations(parsedResult.live_updates);
      }
    }

    if (!Array.isArray(parsedResult.related_queries) || parsedResult.related_queries.length === 0) {
      parsedResult.related_queries = [
        `Key milestones of ${parsedResult.topic_title}`,
        `Exam questions on ${parsedResult.topic_title}`,
        `Latest 2026 updates regarding ${parsedResult.topic_title}`
      ];
    }

    res.json(parsedResult);
  } catch (error: any) {
    console.error("[live-study-tutor] Fatal error:", error);
    res.status(500).json({
      error: error.message || "Failed to conduct deep research search. Please try again.",
      success: false
    });
  }
});

// Shared Daily Trivia Cache for ALL users on each calendar date
const dailySharedTriviaCache: Record<string, any> = {};

// Fallback & Canonical Questions Database for Daily & Bonus Trivia
const triviaFallbackDatabase: Record<string, any[]> = {
  stem: [
    {
      id: "stem_fb_1",
      subject: "Physics",
      topic: "Kinematics & Freefall Acceleration",
      question: "A ball is projected vertically upward. At its highest apex point, what is the magnitude and direction of its acceleration?",
      options: ["0 m/s²", "9.8 m/s² downward", "9.8 m/s² upward", "Cannot be determined without launch mass"],
      correctIndex: 1,
      latexEquation: "a = -g \\approx -9.8\\text{ m/s}^2 \\quad (\\text{constant downward})",
      shortExplanation: "Velocity is momentarily zero at the apex, but the gravitational acceleration pulls downward constantly at 9.8 m/s².",
      examTrapWarning: "Common mistake: Confusing instantaneous zero velocity with acceleration. Speed stops, but gravity never switches off!"
    },
    {
      id: "stem_fb_2",
      subject: "Chemistry",
      topic: "Thermodynamics & Real Gas Deviation",
      question: "Under which specific physical conditions does a real gas exhibit its MAXIMUM deviation from ideal gas behavior?",
      options: ["High temperature and low pressure", "Low temperature and high pressure", "High temperature and high pressure", "Low temperature and low pressure"],
      correctIndex: 1,
      latexEquation: "\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT",
      shortExplanation: "Low temperature slows molecules (amplifying intermolecular attractions) while high pressure reduces free volume, maximizing deviations.",
      examTrapWarning: "Common mistake: Inverting the relationship. Real gases behave MOST ideally at high temperature and low pressure, NOT low temp / high pressure!"
    },
    {
      id: "stem_fb_3",
      subject: "Biology / Mathematics",
      topic: "Cellular Respiration & Energy Yield",
      question: "Which organelle is responsible for synthesizing ATP through aerobic cellular respiration in eukaryotic cells?",
      options: ["Ribosome", "Mitochondria", "Chloroplast", "Endoplasmic Reticulum"],
      correctIndex: 1,
      latexEquation: "\\text{Glucose} + 6\\,\\text{O}_2 \\rightarrow 6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} + 36\\,\\text{ATP}",
      shortExplanation: "Mitochondria generate cellular ATP via the citric acid cycle and oxidative phosphorylation on the cristae inner membrane.",
      examTrapWarning: "Common mistake: Confusing chloroplasts (which produce sugars via photosynthesis in plants) with mitochondria (the universal powerhouses)."
    },
    {
      id: "stem_fb_4",
      subject: "Physics",
      topic: "Projectile Trajectory Curvature",
      question: "A projectile is launched with velocity u at angle θ. At the highest point of its trajectory, what is its radius of curvature?",
      options: ["u² / g", "(u² cos²θ) / g", "(u² sin²θ) / g", "Infinity"],
      correctIndex: 1,
      latexEquation: "R = \\frac{v^2}{a_\\perp} = \\frac{(u\\cos\\theta)^2}{g}",
      shortExplanation: "At the apex, velocity is purely horizontal (u cos θ) and normal acceleration is g, yielding R = (u² cos²θ)/g.",
      examTrapWarning: "Common mistake: Selecting u²/g by forgetting that speed at the vertex is u cos θ, not the initial speed u!"
    },
    {
      id: "stem_fb_5",
      subject: "Chemistry",
      topic: "Coordination Chemistry & Nitrosyl State",
      question: "In the brown ring coordination complex [Fe(H2O)5(NO)]SO4, what is the formal oxidation state of Iron (Fe)?",
      options: ["+2", "+3", "+1", "0"],
      correctIndex: 2,
      latexEquation: "[\\text{Fe}^{+1}(\\text{H}_2\\text{O})_5(\\text{NO}^+)]\\text{SO}_4^{2-}",
      shortExplanation: "Nitric oxide coordinates as the nitrosonium ion (NO⁺), transferring an electron to iron so Fe adopts a +1 oxidation state.",
      examTrapWarning: "Common mistake: Assuming NO is a neutral ligand and concluding Fe is +2. In the brown ring test, NO is NO⁺!"
    },
    {
      id: "stem_fb_6",
      subject: "Biology / Mathematics",
      topic: "Plant Physiology & C4 Fixation",
      question: "In C4 plants, what is the primary stable 4-carbon product formed following initial atmospheric CO2 fixation in mesophyll cells?",
      options: ["Oxaloacetate (OAA)", "3-Phosphoglycerate (3-PGA)", "Malate", "Aspartate"],
      correctIndex: 0,
      latexEquation: "\\text{PEP} + \\text{CO}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{PEPcase}} \\text{Oxaloacetate (4C)}",
      shortExplanation: "PEP carboxylase fixes CO2 to produce Oxaloacetate (4C), which is subsequently reduced to malate.",
      examTrapWarning: "Common mistake: Selecting 3-PGA (which is the C3 pathway first product) or Malate (which is the transported form, not the first product)!"
    },
    {
      id: "stem_fb_7",
      subject: "Physics",
      topic: "Spring Potential Energy Under Equal Force",
      question: "Two ideal springs with spring constants k1 and k2 (k1 > k2) are stretched by applying equal forces F. Which spring stores more energy?",
      options: ["Spring 1 (k1)", "Spring 2 (k2)", "Both store equal energy", "Depends on spring unstretched length"],
      correctIndex: 1,
      latexEquation: "U = \\frac{F^2}{2k} \\implies U \\propto \\frac{1}{k} \\quad (\\text{for constant } F)",
      shortExplanation: "When force is identical, stored energy is inversely proportional to k (U = F²/2k). The softer spring (k2) stores more energy.",
      examTrapWarning: "Common mistake: Using U = 1/2 k x² and assuming larger k gives larger energy. That formula applies when extension x is identical, not force F!"
    },
    {
      id: "stem_fb_8",
      subject: "Chemistry",
      topic: "Molecular Geometry & Dipole Moment",
      question: "Which of the following molecules possesses polar covalent bonds but has an overall net dipole moment of exactly zero (μ = 0)?",
      options: ["SF4", "XeF4", "ClF3", "H2O"],
      correctIndex: 1,
      latexEquation: "\\text{XeF}_4: \\text{sp}^3\\text{d}^2 \\text{ (Square Planar Geometry)} \\implies \\vec{\\mu} = 0",
      shortExplanation: "XeF4 has 4 bond pairs and 2 axial lone pairs in a square planar geometry, causing bond dipoles and lone pairs to cancel symmetrically.",
      examTrapWarning: "Common mistake: Confusing XeF4 with SF4. SF4 has a see-saw geometry with a non-zero dipole moment!"
    },
    {
      id: "stem_fb_9",
      subject: "Biology / Mathematics",
      topic: "Human Physiology & Coagulation Cascade",
      question: "During the blood coagulation cascade, which enzyme complex directly catalyzes the conversion of inactive Prothrombin into active Thrombin?",
      options: ["Thrombokinase (Prothrombinase)", "Thrombin", "Fibrinogen", "Heparin"],
      correctIndex: 0,
      latexEquation: "\\text{Prothrombin} \\xrightarrow{\\text{Thrombokinase} + \\text{Ca}^{2+}} \\text{Thrombin}",
      shortExplanation: "Thrombokinase (Factor Xa + Va + Ca²⁺) cleaves prothrombin into thrombin, which then converts fibrinogen into fibrin threads.",
      examTrapWarning: "Common mistake: Selecting Thrombin or Fibrin. Thrombin is the product of the conversion, not the activating enzyme!"
    }
  ],
  commerce: [
    {
      id: "comm_fb_1",
      subject: "Accountancy",
      topic: "Forfeiture of Shares",
      question: "When shares issued at a premium are forfeited for non-payment of call money, which amount is debited to Share Capital?",
      options: ["Called-up nominal face value", "Total issue price including premium", "Paid-up amount only", "Current market value of the shares"],
      correctIndex: 0,
      latexEquation: "\\text{Share Capital Dr.} = \\text{Number of Shares} \\times \\text{Called-up Face Value}",
      shortExplanation: "Share capital is always credited with called-up nominal value, so upon forfeiture it must be debited with called-up nominal value, excluding premium.",
      examTrapWarning: "Common mistake: Debiting the premium into Share Capital. If premium was already collected, it cannot be touched or reversed here!"
    },
    {
      id: "comm_fb_2",
      subject: "Economics",
      topic: "Price Elasticity Sign Interpretation",
      question: "If price elasticity of demand is calculated as -1.8, how is the responsiveness of consumers technically categorized?",
      options: ["Inelastic", "Elastic (magnitude > 1)", "Unitary elastic", "Perfectively inelastic"],
      correctIndex: 1,
      latexEquation: "e_d = \\left|\\frac{\\% \\Delta Q}{\\% \\Delta P}\\right| = |-1.8| = 1.8 > 1 \\implies \\text{Elastic}",
      shortExplanation: "The negative sign reflects downward sloping demand. In economic elasticity analysis, magnitude |e_d| = 1.8 indicates elastic demand.",
      examTrapWarning: "Common mistake: Treating -1.8 as mathematically less than 1 (inelastic). The minus sign is purely directional!"
    },
    {
      id: "comm_fb_3",
      subject: "Business Studies",
      topic: "Working Capital Operating Cycle",
      question: "Which of the following business decisions directly shortens the working capital operating cycle of a firm?",
      options: ["Increasing inventory turnover velocity", "Extending longer credit terms to buyers", "Reducing credit period taken from suppliers", "Stockpiling larger raw material buffers"],
      correctIndex: 0,
      latexEquation: "\\text{Operating Cycle} = \\text{Raw Mat. Days} + \\text{WIP Days} + \\text{Debtor Days} - \\text{Creditor Days}",
      shortExplanation: "Faster conversion of inventory into sales reduces inventory holding days, directly shortening the cash-to-cash operating cycle.",
      examTrapWarning: "Common mistake: Thinking reducing supplier credit shortens the cycle. Paying suppliers faster actually INCREASES the cash gap!"
    },
    {
      id: "comm_fb_4",
      subject: "Accountancy",
      topic: "Cash Flow Statement Categorization",
      question: "Under standard Accounting Standards, dividend paid by a financing enterprise is classified under which cash flow activity?",
      options: ["Financing activity", "Operating activity", "Investing activity", "Extraordinary activity"],
      correctIndex: 0,
      latexEquation: "\\text{Dividend Paid} \\implies \\text{Outflow from Financing Activity}",
      shortExplanation: "Regardless of whether a company is financial or non-financial, dividend paid is always a Financing activity as it relates to capital providers.",
      examTrapWarning: "Common mistake: Classifying dividend paid as operating for finance firms. Interest can be operating, but dividend paid is ALWAYS financing!"
    },
    {
      id: "comm_fb_5",
      subject: "Economics",
      topic: "Production Possibility Curve Curvature",
      question: "Why is a standard Production Possibility Curve (PPC) typically concave to the origin?",
      options: ["Increasing marginal opportunity cost", "Constant marginal opportunity cost", "Decreasing marginal returns to scale", "Perfect resource substitutability"],
      correctIndex: 0,
      latexEquation: "\\text{MOC} = \\frac{\\Delta \\text{Loss}}{\\Delta \\text{Gain}} \\uparrow \\implies \\text{Concave Curve}",
      shortExplanation: "Resources are not equally efficient in the production of all goods, so transferring resources increases the opportunity cost per unit sacrificed.",
      examTrapWarning: "Common mistake: Confusing convex indifference curves with concave PPCs (increasing marginal opportunity cost)!"
    },
    {
      id: "comm_fb_6",
      subject: "Business Studies",
      topic: "Capital Structure & Financial Leverage",
      question: "Trading on equity (financial leverage) produces favorable returns for equity shareholders ONLY when:",
      options: ["Return on Investment (ROI) exceeds Cost of Debt", "Cost of Debt exceeds Return on Investment", "Tax rate is exactly zero", "Debt-to-equity ratio is zero"],
      correctIndex: 0,
      latexEquation: "\\text{ROI} > K_d \\implies \\text{EPS Increases with Debt}",
      shortExplanation: "When the company earns a higher return on borrowed funds than the interest rate paid, the surplus expands Earnings Per Share (EPS).",
      examTrapWarning: "Common mistake: Believing adding debt always increases equity returns. If ROI falls below interest cost, financial leverage turns negative!"
    }
  ],
  humanities: [
    {
      id: "hum_fb_1",
      subject: "Polity & Constitution",
      topic: "Basic Structure Doctrine",
      question: "In which landmark verdict did the Supreme Court establish that Parliament cannot amend the 'Basic Structure' of the Constitution?",
      options: ["Kesavananda Bharati v. State of Kerala (1973)", "Golaknath v. State of Punjab (1967)", "Minerva Mills v. Union of India (1980)", "Maneka Gandhi v. Union of India (1978)"],
      correctIndex: 0,
      latexEquation: "\\text{Article 368} \\neq \\text{Power to Destroy Basic Structure}",
      shortExplanation: "The 13-judge bench in Kesavananda Bharati ruled that constitutional amending power cannot be used to damage its foundational identity.",
      examTrapWarning: "Common mistake: Selecting Golaknath. Golaknath barred amending Fundamental Rights, but Kesavananda Bharati created the Basic Structure doctrine!"
    },
    {
      id: "hum_fb_2",
      subject: "Critical Logic & Reasoning",
      topic: "Formal Fallacies in Deduction",
      question: "Identify the formal logical fallacy: 'If it rains, the pitch becomes wet. The pitch is wet. Therefore, it rained.'",
      options: ["Affirming the Consequent", "Denying the Antecedent", "Ad Hominem Attack", "Post Hoc Ergo Propter Hoc"],
      correctIndex: 0,
      latexEquation: "(P \\implies Q) \\land Q \\centernot\\implies P",
      shortExplanation: "The pitch could be wet due to ground sprinklers. Inferring the condition P from the result Q is the formal fallacy of Affirming the Consequent.",
      examTrapWarning: "Common mistake: Confusing Affirming the Consequent with Denying the Antecedent. Here the speaker observed the outcome Q, not not-P!"
    },
    {
      id: "hum_fb_3",
      subject: "Geography",
      topic: "Planetary Atmospheric Circulation",
      question: "Between the equator and 30° North/South latitude, which major atmospheric convection circulation cell operates?",
      options: ["Hadley Cell", "Ferrel Cell", "Polar Cell", "Walker Circulation"],
      correctIndex: 0,
      latexEquation: "0^\\circ \\rightarrow 30^\\circ\\text{ Lat} \\implies \\text{Hadley Thermal Cell}",
      shortExplanation: "Warm air rises at the Intertropical Convergence Zone (ITCZ) and sinks around the 30° subtropical high-pressure belt, forming the Hadley cell.",
      examTrapWarning: "Common mistake: Selecting Ferrel cell. The Ferrel cell operates in mid-latitudes between 30° and 60°!"
    },
    {
      id: "hum_fb_4",
      subject: "Polity & Law",
      topic: "Fundamental Rights During Emergency",
      question: "During a National Emergency proclaimed under Article 352, which Fundamental Rights CANNOT be suspended under any circumstances?",
      options: ["Articles 20 and 21", "Articles 19 and 20", "Articles 14 and 19", "Article 32"],
      correctIndex: 0,
      latexEquation: "\\text{44th Amendment (1978)} \\implies \\text{Art 20 \\& 21 Immune}",
      shortExplanation: "The 44th Constitutional Amendment (1978) established that protection in respect of conviction (Art 20) and right to life & personal liberty (Art 21) can never be suspended.",
      examTrapWarning: "Common mistake: Thinking Article 19 remains immune. Article 19 is automatically suspended under external emergency!"
    },
    {
      id: "hum_fb_5",
      subject: "Critical Logic",
      topic: "Causality vs Sequence Fallacy",
      question: "Assuming that because event B occurred immediately after event A, event A must have caused event B is which logical error?",
      options: ["Post hoc ergo propter hoc", "Strawman fallacy", "Begging the question", "Red herring fallacy"],
      correctIndex: 0,
      latexEquation: "\\text{Temporal Succession} \\neq \\text{Causal Mechanism}",
      shortExplanation: "Chronological sequence alone does not establish causation without empirical mechanism, committing the 'post hoc' error.",
      examTrapWarning: "Common mistake: Confusing post hoc with correlation fallacies. Post hoc specifically hinges on sequential timing ('after this, therefore because of this')."
    },
    {
      id: "hum_fb_6",
      subject: "Geography & Cartography",
      topic: "Map Scale Ratios",
      question: "Which of the following representative fractions (RF) represents the LARGEST scale map (showing greatest localized detail)?",
      options: ["1 : 25,000", "1 : 100,000", "1 : 250,000", "1 : 1,000,000"],
      correctIndex: 0,
      latexEquation: "\\frac{1}{25,000} > \\frac{1}{1,000,000} \\implies \\text{Larger Fraction = Larger Scale}",
      shortExplanation: "A larger numerical fraction represents a larger scale, displaying features in greater real-world size and detail per centimeter.",
      examTrapWarning: "Common mistake: Selecting 1:1,000,000 because the denominator is larger. Larger denominator means a smaller fraction and a SMALLER scale!"
    }
  ],
  middleSchool: [
    {
      id: "mid_fb_1",
      subject: "Physical Science",
      topic: "Speed vs Velocity in Circular Paths",
      question: "A bicycle travels around a circular track at a constant speedometer reading of 20 km/h. Does the bicycle have constant velocity?",
      options: ["No, because its direction of motion is continuously changing", "Yes, because its speed is constant", "Yes, because its acceleration is zero", "No, because its speed is zero"],
      correctIndex: 0,
      latexEquation: "\\vec{v} = v \\cdot \\hat{u} \\implies \\frac{d\\vec{v}}{dt} \\neq 0 \\quad (\\text{centripetal acceleration})",
      shortExplanation: "Velocity is a vector having both speed and direction. Changing direction around a circle means velocity is constantly changing.",
      examTrapWarning: "Common mistake: Assuming 'constant speed' equals 'constant velocity'. Any change in direction changes velocity and causes acceleration!"
    },
    {
      id: "mid_fb_2",
      subject: "Chemical Science",
      topic: "The Logarithmic pH Scale",
      question: "Solution A has a pH of 3 and Solution B has a pH of 6. How many times more acidic (higher H⁺ concentration) is Solution A than Solution B?",
      options: ["1,000 times", "3 times", "30 times", "2 times"],
      correctIndex: 0,
      latexEquation: "\\frac{[\\text{H}^+]_A}{[\\text{H}^+]_B} = 10^{(6 - 3)} = 10^3 = 1,000",
      shortExplanation: "Each step on the pH scale represents a 10-fold change in hydrogen ion concentration. A difference of 3 pH units means 10 × 10 × 10 = 1,000 times.",
      examTrapWarning: "Common mistake: Subtracting 6 - 3 = 3 and selecting '3 times'. The pH scale is logarithmic, not linear!"
    },
    {
      id: "mid_fb_3",
      subject: "Life Science & Math",
      topic: "Plant vs Animal Cell Organelles",
      question: "Which organelle allows plant cells to manufacture their own food through photosynthesis but is absent in animal cells?",
      options: ["Chloroplast", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      correctIndex: 0,
      latexEquation: "6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} \\xrightarrow{\\text{Chlorophyll}} \\text{Glucose} + 6\\,\\text{O}_2",
      shortExplanation: "Chloroplasts contain green chlorophyll pigments to trap light energy for photosynthesis and are exclusive to plant/algal cells.",
      examTrapWarning: "Common mistake: Selecting mitochondria. Both plant and animal cells possess mitochondria for cellular respiration!"
    },
    {
      id: "mid_fb_4",
      subject: "Physical Science",
      topic: "Reflection & Plane Mirror Image Distance",
      question: "You stand 2 meters in front of a flat plane mirror. What is the total distance between you and your virtual image?",
      options: ["4 meters", "2 meters", "1 meter", "0 meters"],
      correctIndex: 0,
      latexEquation: "d_{\\text{total}} = d_{\\text{object}} + d_{\\text{image}} = 2\\text{ m} + 2\\text{ m} = 4\\text{ m}",
      shortExplanation: "The virtual image forms 2 meters behind the mirror's reflecting surface, making the distance from you to your image 2 + 2 = 4 meters.",
      examTrapWarning: "Common mistake: Answering 2 meters (the distance to the mirror). The question asks for the total distance between you and your image!"
    },
    {
      id: "mid_fb_5",
      subject: "Chemical Science",
      topic: "Physical vs Chemical Changes",
      question: "Which of the following processes represents a chemical change (forming new substances with different bonds)?",
      options: ["Rusting of an iron nail in damp air", "Melting of ice cubes into liquid water", "Dissolving sugar crystals in tea", "Boiling water into steam"],
      correctIndex: 0,
      latexEquation: "4\\,\\text{Fe} + 3\\,\\text{O}_2 + x\\,\\text{H}_2\\text{O} \\rightarrow 2\\,\\text{Fe}_2\\text{O}_3 \\cdot x\\,\\text{H}_2\\text{O}",
      shortExplanation: "Rusting creates iron oxide, a completely new chemical compound that cannot be reversed by simple physical cooling.",
      examTrapWarning: "Common mistake: Thinking dissolving sugar is chemical. Dissolving is a physical mixture that can be reversed by water evaporation!"
    },
    {
      id: "mid_fb_6",
      subject: "Life Science & Math",
      topic: "Negative Exponents Arithmetic",
      question: "What is the exact numerical fraction value of 5⁻²?",
      options: ["1 / 25", "-25", "-10", "1 / 10"],
      correctIndex: 0,
      latexEquation: "5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}",
      shortExplanation: "A negative exponent indicates reciprocal division, not a negative product. 5⁻² = 1 / (5²) = 1 / 25.",
      examTrapWarning: "Common mistake: Multiplying 5 × (-2) = -10, or placing a negative sign to get -25. Negative powers flip to denominator!"
    }
  ]
};

/**
 * Returns deterministic canonical daily 3 questions for a dateKey (e.g. '2026-09-23').
 * Guarantees that ALL users on the same calendar day get the exact same 3 questions across the entire app.
 */
function getCanonicalDailyBooster(dateKey: string): { dayNumber: number; theme: string; questions: any[] } {
  const parts = (dateKey || new Date().toISOString().split("T")[0]).split("-").map(Number);
  const year = parts[0] || 2026;
  const month = parts[1] || 1;
  const day = parts[2] || 1;
  const dayOfYear = Math.floor((Date.UTC(year, month - 1, day) - Date.UTC(year, 0, 0)) / 86400000);

  const pool = triviaFallbackDatabase.stem;
  const poolLen = pool.length;

  const idx1 = Math.abs(dayOfYear * 3) % poolLen;
  const idx2 = (idx1 + 1) % poolLen;
  const idx3 = (idx1 + 2) % poolLen;

  return {
    dayNumber: dayOfYear,
    theme: "Daily Exam Trap Booster",
    questions: [pool[idx1], pool[idx2], pool[idx3]]
  };
}

/**
 * Helper to extract unseen fallback questions for user's stream with zero repetition.
 */
function pickUnseenFallbackQuestions(
  streamKey: string,
  count: number,
  excludeQuestions?: string[]
): any[] {
  const normalizeStr = (s: string) => s ? s.toLowerCase().replace(/[^a-z0-9]/g, "") : "";
  const excludesSet = new Set((excludeQuestions || []).map(q => normalizeStr(q)));

  const isQuestionSeen = (qText: string) => {
    const norm = normalizeStr(qText);
    if (!norm) return false;
    if (excludesSet.has(norm)) return true;
    for (const ex of excludesSet) {
      if (ex.length > 15 && (norm.includes(ex) || ex.includes(norm))) {
        return true;
      }
    }
    return false;
  };

  const primaryPool = triviaFallbackDatabase[streamKey] || triviaFallbackDatabase.stem;
  let unseen = primaryPool.filter(q => !isQuestionSeen(q.question));

  if (unseen.length < count) {
    const otherPools = Object.entries(triviaFallbackDatabase)
      .filter(([key]) => key !== streamKey)
      .flatMap(([, list]) => list);
    const moreUnseen = otherPools.filter(q => !isQuestionSeen(q.question));
    unseen = [...unseen, ...moreUnseen];
  }

  // Guaranteed Backfill: Ensure poolCopy has AT LEAST count (3) items
  const poolCopy = [...unseen];
  if (poolCopy.length < count) {
    for (const q of primaryPool) {
      if (poolCopy.length >= count) break;
      if (!poolCopy.some(item => item.question === q.question)) {
        poolCopy.push(q);
      }
    }
  }
  if (poolCopy.length < count) {
    for (const q of triviaFallbackDatabase.stem) {
      if (poolCopy.length >= count) break;
      if (!poolCopy.some(item => item.question === q.question)) {
        poolCopy.push(q);
      }
    }
  }

  for (let i = poolCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [poolCopy[i], poolCopy[j]] = [poolCopy[j], poolCopy[i]];
  }

  return poolCopy.slice(0, Math.max(3, count));
}

app.post("/api/generate-trivia", async (req, res) => {
  try {
    const { gradeLevel, academicStream, studyLevel, topic, excludeQuestions, country, isBonus, count, dateKey } = req.body;
    const requestedCount = Math.max(3, Math.min(10, Number(count) || 3));
    const currentDateKey = dateKey || new Date().toISOString().split("T")[0];
    const isBonusSession = isBonus === true || isBonus === "true";

    // 1. OFFICIAL DAILY QUIZ: MUST BE 100% IDENTICAL FOR ALL USERS ON THIS DATE
    if (!isBonusSession) {
      if (dailySharedTriviaCache[currentDateKey]) {
        const cachedBooster = dailySharedTriviaCache[currentDateKey];
        return res.json({
          booster: cachedBooster,
          questions: cachedBooster.questions,
          trivia: cachedBooster.questions[0],
          isCached: true
        });
      }

      // Generate canonical daily booster for today's date
      const canonicalBooster = getCanonicalDailyBooster(currentDateKey);
      dailySharedTriviaCache[currentDateKey] = canonicalBooster;

      return res.json({
        booster: canonicalBooster,
        questions: canonicalBooster.questions,
        trivia: canonicalBooster.questions[0]
      });
    }

    // 2. PRACTICE BONUS BOOSTER: UNIQUE, PERSONALIZED, STRICT ZERO REPETITION FOR EACH USER
    const studentGrade = gradeLevel || studyLevel || "11th Grade";
    const studentStream = academicStream || "STEM / Science & Engineering";
    const studentCountry = country || "Global";

    const normalizeStr = (s: string) => s ? s.toLowerCase().replace(/[^a-z0-9]/g, "") : "";
    const excludesSet = new Set<string>((excludeQuestions || []).map((q: any) => normalizeStr(String(q || ''))));

    const isQuestionSeen = (qText: string) => {
      const norm = normalizeStr(qText);
      if (!norm || norm.length < 5) return false;
      if (excludesSet.has(norm)) return true;
      for (const ex of excludesSet) {
        if (ex.length > 20 && (norm.includes(ex) || ex.includes(norm))) {
          return true;
        }
      }
      return false;
    };

    const gradeDirective = getGradePedagogicalDirective(studentGrade, studentStream, studentCountry);

    const streamLower = studentStream.toLowerCase();
    const gradeLower = studentGrade.toLowerCase();
    const isMiddleSchool = gradeLower.includes("6") || gradeLower.includes("7") || gradeLower.includes("8") || gradeLower.includes("9") || gradeLower.includes("10");
    const isCommerce = streamLower.includes("commerce") || streamLower.includes("business") || streamLower.includes("econ") || streamLower.includes("account");
    const isHumanities = streamLower.includes("human") || streamLower.includes("art") || streamLower.includes("law") || streamLower.includes("pol");
    const isSTEM = !isCommerce && !isHumanities && !isMiddleSchool;

    let targetStreamKey = "stem";
    if (isCommerce) targetStreamKey = "commerce";
    else if (isHumanities) targetStreamKey = "humanities";
    else if (isMiddleSchool) targetStreamKey = "middleSchool";

    let subjectCurriculumGuidance = "";
    if (isSTEM) {
      subjectCurriculumGuidance = `
STRICT SUBJECT MODEL FOR STEM (${studentGrade} / JEE / NEET / SAT / AP):
- Card 1: Physics (Mechanics, Optics, Thermodynamics, Modern Physics, Rotational Motion, or Kinematics targeting mathematical sign or inverse-square traps).
- Card 2: Chemistry (Physical, Inorganic, or Organic targeting periodic exceptions, hybridization traps, equilibrium Le Chatelier shifts, or reaction reagent traps).
- Card 3: Biology or Mathematics (For Bio: Cell bio, Biomolecules, Genetics, or Physiology with confusable biochemical pathways; For Math: Limits, calculus, vectors, or probability traps).`;
    } else if (isCommerce) {
      subjectCurriculumGuidance = `
STRICT SUBJECT MODEL FOR COMMERCE (${studentGrade}):
- Card 1: Accountancy (Debit/Credit rules, Depreciation calculation traps, Share forfeiture/capital reserve, Cash Flow operating vs financing).
- Card 2: Economics (Price elasticity sign traps, Opportunity cost paradoxes, GDP vs Real GDP deflator traps, National income double counting).
- Card 3: Business Studies / Financial Math (Capital structure leverage risk, working capital operating cycle, interest formula traps, Consumer Protection Act).`;
    } else if (isHumanities) {
      subjectCurriculumGuidance = `
STRICT SUBJECT MODEL FOR HUMANITIES / ARTS / LAW (${studentGrade}):
- Card 1: History / Polity (Constitutional amendment traps, landmark case traps, Fundamental Rights emergency immunity, chronological sequence traps).
- Card 2: Critical Logic & Reasoning (Formal syllogism traps, affirming the consequent, post hoc fallacies, correlation vs causation).
- Card 3: Geography / Economics (Cartographic scale RF traps, planetary wind Hadley/Ferrel cells, climate circulation, resource allocation).`;
    } else if (isMiddleSchool) {
      subjectCurriculumGuidance = `
STRICT SUBJECT MODEL FOR FOUNDATIONAL SCIENCE & MATH (${studentGrade}):
- Card 1: Physical Science (Speed vs velocity, light reflection/refraction sign traps, density and buoyant force traps, plane mirror image distance).
- Card 2: Chemical Science (Acids/bases logarithmic pH traps, physical vs chemical change traps, reaction balancing traps, atomic structure).
- Card 3: Biology & Quantitative Reasoning (Plant vs animal cell traps, negative exponent reciprocal rules, fraction percentage traps).`;
    } else {
      subjectCurriculumGuidance = `
STRICT SUBJECT MODEL:
- Card 1: Science / Quantitative Reasoning (Algebraic or physical scaling traps).
- Card 2: Conceptual Logic (Counter-intuitive scientific or logical principles).
- Card 3: Analytical Problem Solving (Common cognitive fallacies or terminology confusion traps).`;
    }

    const randomSeed = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const currentDayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);

    let attempts = 0;
    let finalBooster: any = null;

    while (attempts < 2) {
      attempts++;

      const promptText = `You are the Daily Trivia Engine for HelpYou AI, calibrated for ${studentGrade} (${studentStream}) students.
Target: High-Yield Micro-Assessment focusing on "Exam Traps" (negative-marking traps where 80%+ students make careless errors).
Curricular Subject Breakdown:
${subjectCurriculumGuidance}
${topic && topic.trim().length > 0 ? `Specific Focus Theme: ${topic}` : `Theme: High-Yield Exam Traps (Seed: ${randomSeed})`}
${studentCountry ? `Curricular Context: Aligned with standard national/competitive syllabus for ${studentCountry}.` : ""}
${excludeQuestions && Array.isArray(excludeQuestions) && excludeQuestions.length > 0 ? `FORBIDDEN QUESTIONS (DO NOT REPEAT OR PARAPHRASE ANY OF THESE): ${JSON.stringify(excludeQuestions.slice(-60))}` : ""}

CRITICAL ZERO-REPETITION MANDATE:
- Generate EXACTLY ${requestedCount} multiple-choice micro-questions.
- Do NOT repeat ANY question from the forbidden list above.
- NEVER use generic textbook cliché questions (do NOT use Earth radius contraction by 1.5%, do NOT use Chlorine vs Fluorine electron gain enthalpy, do NOT use Krebs cycle NADH vs NADPH).
- Formulate completely novel, creative, curriculum-authentic questions calibrated specifically for ${studentGrade} (${studentStream}).
- Keep question length STRICTLY under 25 words.
- Options: Exactly 4 distinct, plausible options.
- Explanations must not exceed 40 words.
- Include 'latexEquation' with valid KaTeX math/chemical formulas (e.g. g = \\frac{GM}{R^2} or \\mathrm{CO_2}).
- Always include 'examTrapWarning' explicitly pointing out the exact careless trap where 80%+ of students lose negative marks.

STRICT OUTPUT JSON FORMAT:
{
  "dayNumber": ${currentDayOfYear},
  "theme": "Dynamic Exam Trap Mastery",
  "questions": [
    {
      "id": "q1",
      "subject": "<Subject 1 appropriate to student stream>",
      "topic": "<Specific Trap Topic 1>",
      "question": "<Novel exam trap question strictly under 25 words>",
      "options": ["<Distractor A>", "<Correct Answer>", "<Distractor C>", "<Distractor D>"],
      "correctIndex": 1,
      "latexEquation": "<Proper KaTeX formula>",
      "shortExplanation": "<Precise conceptual rationale under 40 words>",
      "examTrapWarning": "<Careless trap warning explicitly showing why 80%+ students pick the wrong option>"
    }
  ]
}`;

      const systemInstruction = `${gradeDirective}

You are the Daily Trivia Engine for HelpYou AI, calibrated for ${studentGrade} (${studentStream}) students.
Generate exactly ${requestedCount} multiple-choice micro-questions targeting "Exam Traps" (negative-marking traps where 80%+ students make careless errors).
Return strictly a valid JSON object matching the requested schema with exactly ${requestedCount} items in the "questions" array.`;

      const response = await safeGenerateContent({
        gradeLevel: studentGrade,
        stream: studentStream,
        country: studentCountry,
        model: "gemini-3.5-flash-lite",
        contents: [{ parts: [{ text: promptText }] }],
        config: {
          systemInstruction: { parts: [{ text: systemInstruction }] },
          responseMimeType: "application/json"
        }
      });

      const triviaText = response.text || "";
      const parsed = safeParseJSON(triviaText, 'object');

      if (parsed && Array.isArray(parsed.questions) && parsed.questions.length > 0) {
        const validQuestions: any[] = [];
        const seenInCurrentRun = new Set<string>();

        for (const q of parsed.questions) {
          if (
            q && 
            q.question && 
            typeof q.question === 'string' &&
            Array.isArray(q.options) && 
            q.options.length === 4 && 
            typeof q.correctIndex === 'number' &&
            q.correctIndex >= 0 && 
            q.correctIndex < 4
          ) {
            const norm = normalizeStr(q.question);
            if (!isQuestionSeen(q.question) && !seenInCurrentRun.has(norm)) {
              seenInCurrentRun.add(norm);
              q.examTrapWarning = q.examTrapWarning || q.trapWarning || q.exam_trap_warning || q.trap || q.examTrap || q.commonMistake || "Watch out for common sign or formula pitfalls on this concept.";
              q.shortExplanation = q.shortExplanation || q.explanation || q.takeaway || q.rationale || q.solution || q.reason || q.answerExplanation || "Review the core definition and step-by-step formula.";
              validQuestions.push(q);
            }
          }
        }

        if (validQuestions.length >= requestedCount) {
          finalBooster = {
            dayNumber: parsed.dayNumber || currentDayOfYear,
            theme: parsed.theme || "Personalized Exam Trap Practice",
            questions: validQuestions.slice(0, requestedCount)
          };
          break;
        } else if (validQuestions.length > 0) {
          const needed = requestedCount - validQuestions.length;
          const supplement = pickUnseenFallbackQuestions(targetStreamKey, needed, excludeQuestions);
          finalBooster = {
            dayNumber: parsed.dayNumber || currentDayOfYear,
            theme: parsed.theme || "Personalized Exam Trap Practice",
            questions: [...validQuestions, ...supplement].slice(0, requestedCount)
          };
          break;
        }
      }
    }

    if (finalBooster && finalBooster.questions.length >= requestedCount) {
      return res.json({ 
        booster: finalBooster,
        questions: finalBooster.questions,
        trivia: finalBooster.questions[0]
      });
    }

    // If AI failed or timed out, use unseen fallback pool
    const fallbackList = pickUnseenFallbackQuestions(targetStreamKey, requestedCount, excludeQuestions);
    return res.json({
      booster: {
        dayNumber: currentDayOfYear,
        theme: "Personalized Exam Trap Practice",
        questions: fallbackList
      },
      questions: fallbackList,
      trivia: fallbackList[0],
      isFallback: true
    });
  } catch (error: any) {
    console.warn("Trivia generation error (falling back to unseen stream pool safely):", error);

    const streamLower = (req.body.academicStream || req.body.stream || "").toLowerCase();
    const gradeLower = (req.body.gradeLevel || req.body.studyLevel || req.body.userGrade || "").toLowerCase();
    const isMiddleSchool = gradeLower.includes("6") || gradeLower.includes("7") || gradeLower.includes("8") || gradeLower.includes("9") || gradeLower.includes("10");
    const isCommerce = streamLower.includes("commerce") || streamLower.includes("business") || streamLower.includes("econ") || streamLower.includes("account");
    const isHumanities = streamLower.includes("human") || streamLower.includes("art") || streamLower.includes("law") || streamLower.includes("pol");
    
    let targetStreamKey = "stem";
    if (isCommerce) targetStreamKey = "commerce";
    else if (isHumanities) targetStreamKey = "humanities";
    else if (isMiddleSchool) targetStreamKey = "middleSchool";

    const requestedCount = Math.max(3, Math.min(10, Number(req.body.count) || 3));
    const fallbackList = pickUnseenFallbackQuestions(targetStreamKey, requestedCount, req.body.excludeQuestions);

    res.json({ 
      booster: {
        dayNumber: 1,
        theme: "Exam Trap Avoidance Booster",
        questions: fallbackList
      }, 
      questions: fallbackList, 
      trivia: fallbackList[0], 
      isFallback: true 
    });
  }
});

// Premium Subscriptions State Storage (File-backed database fallback)
const SUBS_FILE_PATH = path.join(process.cwd(), "subscriptions.json");

function getStoredSubscriptions(): Record<string, boolean> {
  try {
    if (fs.existsSync(SUBS_FILE_PATH)) {
      return JSON.parse(fs.readFileSync(SUBS_FILE_PATH, "utf-8"));
    }
  } catch (error) {
    console.error("Error reading subscriptions from file:", error);
  }
  return {};
}

function writeStoredSubscriptions(subs: Record<string, boolean>) {
  try {
    fs.writeFileSync(SUBS_FILE_PATH, JSON.stringify(subs, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving subscriptions to file:", error);
  }
}

// REST Endpoint to persist/verify VIP subscription status across accounts
}
