import { APUnitNote } from './types';

export const AP_ENGLISH_LANG_NOTES: APUnitNote[] = [
  // ==========================================
  // UNIT 1: RHETORICAL SITUATION & CLAIMS
  // ==========================================
  {
    unitId: 'u1',
    unitNumber: 1,
    title: 'Rhetorical Situation & Claims',
    examWeight: '11%–15% of AP Exam',
    bigIdea: 'Writers make deliberate choices based on the rhetorical situation (exigence, audience, purpose, context, speaker) to convey defensible claims.',
    keyTheorems: [
      {
        name: 'The SPACE-CAT Rhetorical Framework',
        conditions: 'Deconstructing any non-fiction argument or rhetorical passage.',
        conclusion: 'Analysis requires identifying: Speaker (persona & credibility), Purpose (action desired from reader), Audience (beliefs & biases), Context (historical/social setting), Exigence (the catalyst/spark), Choices (stylistic devices), Appeals (ethos/pathos/logos), Tone (author attitude).',
        apTip: 'Exigence is NOT just the topic. Exigence is the immediate problem, event, or urgency that compelled the author to speak or write at that exact moment.'
      },
      {
        name: 'Defensible Thesis Construction',
        conditions: 'Formulating the central claim for rhetorical analysis or argumentative essays.',
        conclusion: 'A defensible thesis must take a stance that could be reasonably contested, specifying rhetorical choices and the author’s ultimate purpose/message rather than merely summarizing the passage.',
        apTip: 'Never write "The author uses diction and rhetorical questions to persuade the audience." Diction is just words! Specify the *type* of diction (e.g. "somber, militaristic diction") and state *what* the audience is persuaded to believe.'
      }
    ],
    formulas: [
      {
        name: 'Rhetorical Analysis Thesis Formula',
        latex: '\\text{Context/Exigence} + \\text{Specific Rhetorical Choices} \\rightarrow \\text{Core Message / Ultimate Purpose}',
        explanation: 'In response to [Exigence], [Speaker] employs [Choice 1] and [Choice 2] in order to [Action/Conviction desired in Audience].'
      }
    ],
    sections: [
      {
        heading: '1. SPACE-CAT Component Matrix',
        content: `Complete breakdown of rhetorical situation elements:

| Element | Guiding Question | Critical Distinction |
| :--- | :--- | :--- |
| **Speaker** | Who is conveying the message? | Distinct from the actual person; examine their persona, values, and established authority. |
| **Purpose** | What reaction does the writer want? | What the author wants the audience to *do*, *think*, or *feel* after reading. |
| **Audience** | Who are the intended recipients? | Identify their prior knowledge, socio-economic background, vulnerabilities, and potential resistance. |
| **Context** | What historical currents surround the text? | The broader political, cultural, or philosophical environment of the era. |
| **Exigence** | What spark demanded this speech/text now? | The immediate catalyst that made silence impossible. |
| **Choices** | How did the author construct arguments? | Structural moves, juxtaposition, syntax pacing, analogies, and shifts. |
| **Appeals** | How is connection established? | Ethos (character/trust), Pathos (emotion/values), Logos (reason/evidence). |
| **Tone** | What is the author's emotional stance? | Shifts in tone across the text signal transitions in argument or emotional climax. |`
      }
    ],
    workedExamples: [
      {
        title: 'Formulating a Sophisticated Rhetorical Analysis Thesis',
        topicRef: 'CED 1.2 Rhetorical Analysis Essay (Q2)',
        question: 'Analyze how Florence Kelley utilizes rhetorical choices in her 1905 speech before the National American Woman Suffrage Association to oppose child labor laws.',
        solutionSteps: [
          'Step 1: Identify Exigence: The horrific working conditions of young girls in textile mills while women lack the voting franchise to enact legislative reform.',
          'Step 2: Identify Rhetorical Choices: Repetitive juxtaposition of children working through the night while adult consumers sleep, alongside persistent oxymorons and statistical appeals.',
          'Step 3: Connect to Purpose: To awaken moral culpability in enfranchised citizens and mobilize suffragists toward legislative boycott.',
          'Step 4: Synthesize into Thesis: "In her 1905 address, Florence Kelley strategically juxtaposes the grueling nocturnal labor of adolescent girls with the comfortable slumber of privileged adults, and deploys stinging statistical evidence to expose society’s collective guilt, ultimately rallying suffragists to harness consumer power and enact child labor reform."'
        ],
        finalAnswer: 'A high-scoring thesis identifying 2 distinct choices (juxtaposition, statistical appeals) tied directly to Kelley’s legislative and moral purpose.',
        apScoringTip: 'Earn the thesis point on Row A by ensuring your claim cannot be answered with a simple "yes" or "no" and offers an analytical roadmap.'
      }
    ],
    diagrams: [
      {
        id: 'rhetorical_triangle',
        title: 'Aristotelian Rhetorical Triangle',
        subtitle: 'Interlocking Dynamics of Speaker, Audience, and Message',
        type: 'rhetoric_triangle',
        description: 'Triangular model showing how Text/Message balances between Speaker Credibility (Ethos), Audience Emotion (Pathos), and Logical Evidence (Logos).',
        takeaway: 'Rhetoric is never isolated text; every word is tailored specifically to bridge the speaker with the audience’s worldview.'
      }
    ],
    commonTraps: [
      'Labeling devices without explaining function (e.g. saying "the author uses a metaphor" without explaining what ideas the metaphor connects for the audience).',
      'Confusing tone with mood. Tone is the author’s attitude toward the subject; mood is the emotional atmosphere felt by the reader.',
      'Paraphrasing the passage sequentially instead of organizing paragraphs around rhetorical functions.'
    ],
    cramSheet: [
      'SPACE-CAT: Speaker, Purpose, Audience, Context, Exigence, Choices, Appeals, Tone.',
      'Thesis must name specific strategies and the author’s intended purpose.',
      'Exigence is the catalyst that prompted the text, not just the general topic.',
      'Explain the "So What?": Always link the choice to audience reaction.'
    ]
  },

  // ==========================================
  // UNIT 2: EVIDENCE & APPEALS (ETHOS, PATHOS, LOGOS)
  // ==========================================
  {
    unitId: 'u2',
    unitNumber: 2,
    title: 'Evidence & Rhetorical Appeals',
    examWeight: '12%–16% of AP Exam',
    bigIdea: 'Arguments achieve persuasiveness by integrating diverse evidence types with ethical, emotional, and logical appeals.',
    keyTheorems: [
      {
        name: 'The Classical Triad of Rhetorical Appeals',
        conditions: 'Evaluating persuasive mechanics in non-fiction argumentation.',
        conclusion: '(1) Ethos establishes moral character, expertise, and good faith; (2) Pathos evokes empathy, outrage, fear, or patriotic pride; (3) Logos establishes logical coherence through deductive syllogisms, empirical data, and causal reasoning.',
        apTip: 'Never write "The author uses ethos." Ethos is not a tool you pick up; it is an impression created! Write "The author establishes ethos by highlighting their decades of field experience."'
      },
      {
        name: 'Evidence Sufficiency and Validity',
        conditions: 'Evaluating the strength of support for claims.',
        conclusion: 'Effective evidence must be: (1) Sufficient in quantity, (2) Representative rather than cherry-picked, (3) Relevant to the claim, and (4) Timely and credible.',
        apTip: 'Anecdotal evidence creates emotional connection (Pathos), but requires empirical or statistical support (Logos) to survive skeptical scrutiny.'
      }
    ],
    formulas: [
      {
        name: 'Toulmin Argument Model',
        latex: '\\text{Claim} \\xleftarrow{\\text{Qualifier}} \\text{Data (Evidence)} + \\text{Warrant (Underlying Assumption)}',
        explanation: 'Data supports the Claim only when the Warrant (the bridge) is accepted by the audience.'
      }
    ],
    sections: [
      {
        heading: '1. Types of Evidence & Strategic Deployment',
        content: `Comparative guide to evidence types in AP essays:

| Evidence Type | Primary Strength | Vulnerability / Limitation | Ideal Context |
| :--- | :--- | :--- | :--- |
| **Statistical / Empirical** | Irrefutable scale; builds unimpeachable Logos | Can feel dry, detached, or easily manipulated | Policy arguments, economic analyses, scientific claims |
| **Historical Precedent** | Demonstrates past outcomes of similar choices | Situations may not be perfectly analogous | Constitutional debates, foreign policy, societal trends |
| **Personal Anecdote** | Evokes immediate empathy; humanizes abstract data | Can be dismissed as atypical or unrepresentative | Introductions, emotional appeals, individual rights |
| **Expert Testimony** | Confers instant credibility (Ethos); specialized insight | Subject to authority bias if consensus is disputed | Complex technical subjects, ethical quandaries |
| **Analogical Evidence** | Clarifies complex or unfamiliar ideas through comparison | Analogy breaks down if key dissimilarities exist | Conceptual explanations, philosophical debate |`
      }
    ],
    workedExamples: [
      {
        title: 'Analyzing Evidence Function in Synthesis Prompts',
        topicRef: 'CED 2.3 Synthesis Argument Construction',
        question: 'How does an author effectively integrate an excerpt about automated labor from an academic journal alongside a worker’s personal narrative?',
        solutionSteps: [
          'Step 1: Identify role of the academic journal: Establishes macro-economic trends and empirical data on displaced jobs (Logos).',
          'Step 2: Identify role of the personal narrative: Illustrates the human cost, psychological disorientation, and family strain (Pathos).',
          'Step 3: Synthesize connection: The narrative grounds the abstract statistics into tangible human consequences, while the journal ensures the story is not seen as an isolated fluke.',
          'Step 4: Draft commentary: "By pairing macro-level statistical models from Oxford economists with the poignant narrative of a laid-off machinist, the author demonstrates both systemic breadth and individual emotional devastation."'
        ],
        finalAnswer: 'Seamless integration where qualitative emotion and quantitative authority mutually reinforce the core claim.',
        apScoringTip: 'In the Synthesis essay (Q1), you must cite at least 3 distinct sources and converse *between* them rather than summarizing them one by one.'
      }
    ],
    diagrams: [
      {
        id: 'toulmin_diagram',
        title: 'Toulmin Model of Argumentation',
        subtitle: 'Claim, Data, Warrant, Backing, Counter-Argument, Rebuttal',
        type: 'toulmin_structure',
        description: 'Flowchart showing how Data leads to Claim via Warrant, fortified by Backing and protected by Rebuttal.',
        takeaway: 'The strength of an argument lies in the unspoken Warrant connecting the evidence to the conclusion.'
      }
    ],
    commonTraps: [
      'Treating Ethos, Pathos, and Logos as physical devices instead of rhetorical appeals.',
      'Dropping long quotes into an essay without analysis (the "quote dump" trap). Always embed quotes and spend twice as much text analyzing them.',
      'Failing to establish the warrant—assuming the reader automatically agrees that the evidence proves the claim.'
    ],
    cramSheet: [
      'Ethos = credibility; Pathos = emotion/values; Logos = logic/facts.',
      'Toulmin Model: Claim $\\rightarrow$ Data $\\rightarrow$ Warrant (connection) $\\rightarrow$ Backing.',
      'Embed quotes smoothly into your own sentence syntax.',
      'Commentary must explain *how* the evidence proves the specific claim.'
    ]
  },

  // ==========================================
  // UNIT 3: SYNTHESIS OF MULTIPLE SOURCES
  // ==========================================
  {
    unitId: 'u3',
    unitNumber: 3,
    title: 'Synthesis of Multiple Sources',
    examWeight: '13%–17% of AP Exam',
    bigIdea: 'Advanced argumentation requires conversing between multiple perspectives, reconciling divergent evidence, and carving out an independent stance.',
    keyTheorems: [
      {
        name: 'The Dinner Table Metaphor of Synthesis',
        conditions: 'Writing the AP English Language Question 1 (Synthesis Essay).',
        conclusion: 'Sources should be treated as guests at a dinner table debating a controversial issue. The writer acts as the host who facilitates dialogue, pointing out where Source A agrees with Source B, where Source C exposes a flaw in Source A, and introducing the writer’s own nuanced conclusion.',
        apTip: 'Never dedicate Paragraph 1 to Source A, Paragraph 2 to Source B, and Paragraph 3 to Source C! Organize paragraphs by sub-arguments, citing multiple sources within each paragraph.'
      },
      {
        name: 'Attribution & Academic Integrity',
        conditions: 'Incorporating secondary sources into a timed synthesis essay.',
        conclusion: 'Every direct quote, paraphrased data point, or unique concept from the prompt packet must be explicitly attributed using either parenthetical citations (e.g. `[Source A]`) or signal phrases (e.g. `According to Dr. Ellis in Source B...`).',
        apTip: 'College Board requires citing at least 3 sources to earn points on Row B (Evidence & Commentary). Citing 4 sources provides insurance against misinterpretation.'
      }
    ],
    formulas: [
      {
        name: 'Source Synthesis Structure',
        latex: '\\text{Sub-Claim} \\rightarrow \\text{Source A Evidence} \\xleftrightarrow{\\text{Comparison / Contrast}} \\text{Source B Evidence} \\rightarrow \\text{Writer Commentary}',
        explanation: 'Put sources into conversation before delivering your own analytical verdict.'
      }
    ],
    sections: [
      {
        heading: '1. Scoring Rubric Guide for Synthesis Essay (Q1)',
        content: `Three-row analytic rubric breakdown:

| Rubric Row | Max Points | Core Requirement | How to Secure Maximum Score |
| :--- | :--- | :--- | :--- |
| **Row A: Thesis** | 1 pt | Responds to prompt with a defensible claim establishing a line of reasoning | Avoid repeating the prompt; assert a clear policy direction or philosophical judgment. |
| **Row B: Evidence & Commentary** | 4 pts | Incorporates at least 3 sources with comprehensive commentary | Show relationships between sources; explain *why* and *how* the evidence advances your thesis. |
| **Row C: Sophistication** | 1 pt | Demonstrates nuanced understanding, complex context, or vivid prose | Acknowledge complexities/tensions, recognize alternative interpretations, or craft an exceptional voice. |`
      }
    ],
    workedExamples: [
      {
        title: 'Constructing a Multi-Source Body Paragraph',
        topicRef: 'CED 3.2 Synthesizing Differing Perspectives',
        question: 'Synthesize sources on whether cursive handwriting should continue to be mandated in elementary school curricula.',
        solutionSteps: [
          'Step 1: Frame paragraph claim: Cursive instruction develops neurological pathways, yet digital typing provides indispensable workforce readiness.',
          'Step 2: Introduce cognitive evidence: Cite Source B (neuroscience study showing fine motor benefits of cursive).',
          'Step 3: Introduce opposing practical evidence: Cite Source E (survey of employers showing 98% prioritize touch-typing over handwritten cursive).',
          'Step 4: Synthesize tension in commentary: While Source B validly champions cognitive stimulation, Source E proves that an uncompromising focus on cursive squanders curriculum hours needed for digital literacy. Therefore, schools should retain cursive strictly as an early motor exercise rather than a prolonged testing metric.'
        ],
        finalAnswer: 'A synthesis paragraph balancing cognitive science and modern economic utility with nuanced compromise.',
        apScoringTip: 'Synthesizing two sources in a single paragraph immediately elevates your commentary to the 3–4 point range on Row B.'
      }
    ],
    diagrams: [
      {
        id: 'synthesis_matrix',
        title: 'Synthesis Cross-Source Conversation Matrix',
        subtitle: 'Mapping Overlaps, Contradictions, and Nuance',
        type: 'synthesis_mapping',
        description: 'Matrix showing Source A and Source D agreeing on economic costs, while Source C disputes their environmental assumptions.',
        takeaway: 'True synthesis is not summarizing texts; it is mapping where authors collide and forging your own reasoned position.'
      }
    ],
    commonTraps: [
      'Writing an essay that sounds like a book report summarizing one source at a time.',
      'Citing only 2 sources (automatic cap on Row B score). Always use at least 3, ideally 4.',
      'Letting the sources take over your paper. Your voice and argument must lead; sources exist only to serve your thesis.'
    ],
    cramSheet: [
      'Always cite at least 3 prompt sources (cite 4 for safety).',
      'Organize by themes/arguments, never by individual source documents.',
      'Put sources in dialogue: "While Source A asserts X, Source C complicates this by showing Y."',
      'Maintain your independent voice as the author throughout.'
    ]
  },

  // ==========================================
  // UNIT 4: ARGUMENTATIVE STRUCTURE & LOGIC
  // ==========================================
  {
    unitId: 'u4',
    unitNumber: 4,
    title: 'Argumentative Structure & Logic',
    examWeight: '14%–18% of AP Exam',
    bigIdea: 'Robust arguments employ coherent lines of reasoning, anticipate counter-arguments, and avoid common logical fallacies.',
    keyTheorems: [
      {
        name: 'The Classical Argumentative Architecture',
        conditions: 'Organizing a persuasive essay or speech (Exordium to Peroratio).',
        conclusion: 'Six classical stages: (1) Exordium (Introduction & Hook), (2) Narratio (Background facts), (3) Partitio (Thesis & line of reasoning), (4) Confirmatio (Body paragraphs proving claims), (5) Refutatio (Concession & rebuttal), (6) Peroratio (Conclusion & resonant call to action).',
        apTip: 'A concession without a rebuttal weakens your argument! Always concede gracefully ("While critics reasonably argue X...") and immediately rebut with stronger evidence ("...this perspective overlooks Y").'
      },
      {
        name: 'Inductive vs. Deductive Reasoning',
        conditions: 'Building logical lines of reasoning.',
        conclusion: 'Inductive reasoning moves from specific observations to broad probabilistic generalizations (risk of hasty generalization). Deductive reasoning moves from universal premises through a syllogism to an inescapable specific conclusion (valid if premises are true).',
        apTip: 'Deductive Syllogism: Major Premise (All humans are mortal) + Minor Premise (Socrates is human) $\\implies$ Conclusion (Socrates is mortal).'
      }
    ],
    formulas: [
      {
        name: 'Concession and Rebuttal Structure',
        latex: '\\text{Concession (Admit valid counterpoint)} + \\text{Pivot Turn} + \\text{Rebuttal (Demonstrate superior claim)}',
        explanation: 'Although [Counter-Perspective], nevertheless [Primary Argument] because [Compelling Justification].'
      }
    ],
    sections: [
      {
        heading: '1. Logical Fallacies Master Catalog',
        content: `Major logical fallacies tested on AP English Language MCQs and avoided in FRQs:

| Fallacy | Definition | Illustrative Example |
| :--- | :--- | :--- |
| **Ad Hominem** | Attacking the person’s character rather than addressing their argument | "You cannot trust Dr. Smith’s climate data because he drives a gas-guzzling truck." |
| **Straw Man** | Oversimplifying or misrepresenting an opponent’s stance to make it easy to attack | "Those advocating for public transit want to ban all personal automobiles." |
| **False Dilemma (Either/Or)** | Presenting two extreme options as the only possibilities, ignoring middle ground | "Either we cut education spending in half, or our city faces bankruptcy." |
| **Post Hoc Ergo Propter Hoc** | Assuming that because event B followed event A, event A caused event B | "Right after the mayor was elected, it rained. He clearly brought an end to the drought." |
| **Slippery Slope** | Claiming a minor initial step will inevitably trigger a catastrophic chain reaction | "If students are allowed to use phones at lunch, academic discipline will crumble entirely." |
| **Hasty Generalization** | Drawing a universal conclusion from an insufficient or unrepresentative sample size | "My grandfather smoked two packs a day and lived to 95; smoking isn't harmful." |
| **Bandwagon (Ad Populum)** | Claiming a proposition is true or right simply because it is popular | "Millions of people believe this conspiracy, so there must be truth to it." |`
      }
    ],
    workedExamples: [
      {
        title: 'Drafting an Argument Essay with High-Yield Concession (Q3)',
        topicRef: 'CED 4.1 Free-Response Argumentation',
        question: 'Write an argumentative paragraph defending or challenging the assertion that adversity develops character.',
        solutionSteps: [
          'Step 1: Formulate qualified stance: Adversity can forge resilience, but catastrophic trauma often permanently degrades human flourishing.',
          'Step 2: Provide historical/literary evidence: Contrast Abraham Lincoln’s political and personal setbacks with the intergenerational trauma of economic displacement.',
          'Step 3: Construct concession: Concede that moderate adversity builds emotional fortitude and psychological adaptability.',
          'Step 4: Execute rebuttal: However, romanticizing all suffering ignores institutional poverty and abuse, which stunt potential rather than elevating character.',
          'Step 5: Synthesize line of reasoning: "While moderate hardships undoubtedly teach perseverance, romanticizing adversity as a universal crucible overlooks destructive trauma; systematic deprivation breaks the human spirit far more often than it ennobles it."'
        ],
        finalAnswer: 'A qualified, mature argument avoiding binary oversimplification.',
        apScoringTip: 'Qualified arguments ("under specific circumstances X is true, but when Y occurs, Z results") consistently earn the Row C Sophistication point over absolutist claims.'
      }
    ],
    diagrams: [
      {
        id: 'argument_syllogism',
        title: 'Deductive Syllogism vs. Inductive Leap',
        subtitle: 'Top-Down Inescapable Logic vs. Bottom-Up Probabilistic Evidence',
        type: 'logic_architecture',
        description: 'Diagram contrasting deductive certainty from valid premises with inductive extrapolation requiring empirical guardrails.',
        takeaway: 'Flawed premises corrupt deductive logic; unrepresentative samples invalidate inductive logic.'
      }
    ],
    commonTraps: [
      'Using absolute language like "always," "never," "everyone," or "nobody." Qualified words like "frequently," "often," and "many" are logically defensible.',
      'Ignoring the counter-argument completely, which leads to simplistic arguments that score low on sophistication.',
      'Committing fallacies in your own writing—especially slippery slopes and false dilemmas.'
    ],
    cramSheet: [
      'Classical Structure: Exordium $\\rightarrow$ Narratio $\\rightarrow$ Partitio $\\rightarrow$ Confirmatio $\\rightarrow$ Refutatio $\\rightarrow$ Peroratio.',
      'Always qualify arguments: Avoid "always" and "never".',
      'Concession + Rebuttal: Acknowledge the counter-argument, then prove your claim holds more weight.',
      'Recognize common fallacies: Ad Hominem, Straw Man, False Dilemma, Slippery Slope.'
    ]
  },

  // ==========================================
  // UNIT 5: STYLE, DICTION & SYNTAX
  // ==========================================
  {
    unitId: 'u5',
    unitNumber: 5,
    title: 'Style, Diction & Syntax',
    examWeight: '12%–16% of AP Exam',
    bigIdea: 'Stylistic choices—including word choice, sentence structure, figurative tropes, and tonal shifts—shape authorial voice and amplify rhetorical impact.',
    keyTheorems: [
      {
        name: 'The Rhetorical Power of Syntax',
        conditions: 'Analyzing sentence structure, rhythm, and pacing in prose.',
        conclusion: 'Writers manipulate syntax to control reader pacing and emphasize ideas: (1) Periodic sentences delay the main clause until the end to build suspense; (2) Cumulative (loose) sentences state the main idea first, then accumulate descriptive details; (3) Parallelism creates cadence and equal conceptual weight; (4) Chiasmus inverts phrasing for memorable emphasis.',
        apTip: 'Short, staccato sentences surrounded by lengthy compound-complex sentences create dramatic emphasis. Always analyze the *contrast* in sentence lengths.'
      },
      {
        name: 'Denotation vs. Connotation in Diction',
        conditions: 'Evaluating lexical choices and authorial tone.',
        conclusion: 'Denotation is the dictionary definition of a word; connotation is the cultural, emotional, and psychological associations it evokes. Shifting from neutral denotation to loaded connotation reveals implicit bias and steers audience emotion.',
        apTip: 'Consider the differences between "house," "home," and "shack." All share the same denotation (a dwelling), but evoke starkly contrasting emotional responses.'
      }
    ],
    formulas: [
      {
        name: 'Syntactic Balance Rule',
        latex: '\\text{Parallelism: } A + B + C \\text{ (same grammatical category)}',
        explanation: 'Example: "to think clearly, to speak boldly, and to act decisively" (infinitive verbs in series).'
      }
    ],
    sections: [
      {
        heading: '1. Rhetorical Tropes and Schemes Classification',
        content: `Master table of stylistic devices:

| Device Category | Term | Definition | Illustrative Example |
| :--- | :--- | :--- | :--- |
| **Scheme (Word Order)** | **Anaphora** | Repetition of a word/phrase at the start of successive clauses | "We shall fight on the beaches, we shall fight on the landing grounds..." |
| **Scheme (Word Order)** | **Epistrophe** | Repetition of a word/phrase at the end of successive clauses | "...government of the people, by the people, for the people." |
| **Scheme (Word Order)** | **Antithesis** | Juxtaposition of contrasting ideas in parallel grammatical structures | "Ask not what your country can do for you—ask what you can do for your country." |
| **Scheme (Word Order)** | **Polysyndeton** | Deliberate use of multiple conjunctions in close succession | "We lived and laughed and loved and died." (Slows pacing, emphasizes weight) |
| **Scheme (Word Order)** | **Asyndeton** | Deliberate omission of conjunctions between words/clauses | "I came, I saw, I conquered." (Accelerates pacing, conveys decisive energy) |
| **Trope (Figurative)** | **Metonymy** | Substituting the name of an attribute for the entity itself | "The pen is mightier than the sword" (Pen = written word; sword = military force) |
| **Trope (Figurative)** | **Synecdoche** | Using a physical part to represent the entire whole | "All hands on deck" (Hands = sailors/workers) |`
      }
    ],
    workedExamples: [
      {
        title: 'Analyzing Tone Shifts via Diction in Rhetorical Analysis',
        topicRef: 'CED 5.2 Identifying Tonal Progression',
        question: 'Identify the tone shift in an excerpt that begins with cold, bureaucratic terminology ("the aforementioned subjects will be processed according to schedule") and concludes with intimate, visceral imagery ("our children will weep into empty cradles").',
        solutionSteps: [
          'Step 1: Analyze early diction: "processed," "aforementioned," "schedule" $\\implies$ Clinical, detached, bureaucratic tone.',
          'Step 2: Analyze late diction: "children," "weep," "empty cradles" $\\implies$ Visceral, agonized, elegiac tone.',
          'Step 3: Identify the shift: The author transitions from sterile institutional critique to immediate human tragedy.',
          'Step 4: Explain rhetorical function: This shift strips away the illusion of administrative neutrality, forcing the audience to confront the horrific emotional reality masked by sanitized political language.'
        ],
        finalAnswer: 'A transition from clinical detachment to raw, emotive grief that unmasks administrative cruelty.',
        apScoringTip: 'Highlighting and explaining *tone shifts* is one of the most reliable ways to demonstrate sophisticated analytical insight.'
      }
    ],
    diagrams: [
      {
        id: 'syntax_pacing',
        title: 'Syntactic Pacing and Dramatic Focus',
        subtitle: 'Periodic vs. Cumulative vs. Balanced Structures',
        type: 'syntax_flow',
        description: 'Visual waveform showing tension building up in periodic sentences versus instant release in loose sentences.',
        takeaway: 'Sentence structure controls the rhythm of reading; changing syntax alters emotional impact.'
      }
    ],
    commonTraps: [
      'Simply listing devices without explaining their effect (the "device hunting" trap).',
      'Describing tone as simply "positive" or "negative." Use precise adjectives like "reverent," "cynical," "wistful," or "indignant."',
      'Confusing metonymy with metaphor. Metonymy relies on association; metaphor relies on comparison.'
    ],
    cramSheet: [
      'Anaphora = repeat at start; Epistrophe = repeat at end.',
      'Asyndeton = no conjunctions (fast); Polysyndeton = many conjunctions (slow, heavy).',
      'Periodic sentence = main idea at the very end (suspense).',
      'Never use broad tone words like "happy" or "sad"; use "euphoric", "somber", "satirical".'
    ]
  },

  // ==========================================
  // UNIT 6: MULTIPLE CHOICE: READING & REVISION
  // ==========================================
  {
    unitId: 'u6',
    unitNumber: 6,
    title: 'Multiple Choice: Reading & Revision',
    examWeight: '18%–22% of AP Exam',
    bigIdea: 'The AP Lang MCQ exam tests dual competencies: analytical reading of complex historical texts and writer-as-editor revision strategies.',
    keyTheorems: [
      {
        name: 'The Two Halves of the AP Lang MCQ Section',
        conditions: 'Taking Section I of the AP English Language and Composition Exam (45 Questions, 60 Minutes).',
        conclusion: 'Section I consists of: (1) Reading Questions (approx. 23–25 questions on 2–3 nonfiction passages): Tests comprehension of rhetorical strategies, argument structure, and word-in-context; (2) Writing/Revision Questions (approx. 20–22 questions on 3–4 draft passages): Tests your ability to act as an editor, improving thesis clarity, paragraph transitions, evidence strength, and syntactic cohesion.',
        apTip: 'Writing questions are faster to answer than Reading questions! Manage your time so you do not run out of minutes before reaching the high-efficiency revision passages.'
      },
      {
        name: 'The Rule of Contextual Sentence Placement',
        conditions: 'Solving "Where should sentence X be added?" or "Which transition word best connects sentences Y and Z?"',
        conclusion: 'A successfully placed sentence must link backward to the preceding idea through reference pronouns or semantic echo, and launch forward to the subsequent sentence without introducing abrupt thematic breaks.',
        apTip: 'Watch out for transition traps: "However" signals contrast, "Moreover" signals continuation, "Consequently" signals cause-and-effect. Test the relationship before choosing.'
      }
    ],
    formulas: [
      {
        name: 'MCQ Time Management Equation',
        latex: '\\frac{60 \\text{ minutes}}{45 \\text{ questions}} \\approx 1.33 \\text{ min/question} \\implies 13\\text{–}15 \\text{ min per passage set}',
        explanation: 'Spend ~15 min on Reading passage sets and ~10-12 min on Writing/Revision passage sets.'
      }
    ],
    sections: [
      {
        heading: '1. Writing / Revision Question Types & Decision Rules',
        content: `Standard question stems and winning strategies:

| Revision Task | Typical Question Stem | Winning Editorial Rule |
| :--- | :--- | :--- |
| **Adding a Thesis** | "Which choice best introduces the main argument of the passage?" | Pick the option that previews a line of reasoning, matches all subsequent paragraphs, and is defensible. |
| **Transition Selection** | "Which choice provides the most effective transition between sentences 4 and 5?" | Identify the logical relationship: Contrast (however), Addition (furthermore), Cause (therefore), or Concession (admittedly). |
| **Combining Sentences** | "Which choice most effectively combines sentences 8 and 9?" | Eliminate options with passive voice, unnecessary wordiness, comma splices, or dangling modifiers. Favor clarity and concise subordination. |
| **Evidence Enhancement** | "The writer wants to add evidence to support the claim in sentence 12. Which choice best accomplishes this?" | Select evidence that directly answers the claim with specific empirical data or concrete precedent, avoiding vague generalities. |
| **Deleting Text** | "Should the writer keep or delete the underlined sentence?" | Keep if it directly supports the paragraph’s topic; delete if it is an irrelevant digression or disrupts flow. |`
      }
    ],
    workedExamples: [
      {
        title: 'Mastering a Complex Reading MCQ Word-in-Context Item',
        topicRef: 'CED 6.1 Deconstructing Authorial Meaning',
        question: 'In a 19th-century essay, an author writes that an opposing statesman displayed "admirable dexterity in evading the constitutional dilemma." What does "dexterity" mean in this context?',
        solutionSteps: [
          'Step 1: Analyze literal definition: Physical skill or agility with one’s hands.',
          'Step 2: Read surrounding context: The statesman is "evading" a constitutional problem, avoiding a direct confrontation with the law.',
          'Step 3: Evaluate tone: The author is critiquing the evasion, meaning "admirable dexterity" is used with dry, sarcastic irony.',
          'Step 4: Conclude contextual meaning: Dexterity here means mental cleverness, adroitness, or manipulative evasion—not genuine virtue or physical grace.'
        ],
        finalAnswer: 'Clever political maneuvering or adroit evasion (used ironically).',
        apScoringTip: 'On historical prose questions, never pick the most common modern dictionary definition without verifying tone and historical context.'
      }
    ],
    diagrams: [
      {
        id: 'mcq_pacing_strategy',
        title: 'MCQ Pacing & Section Division',
        subtitle: 'Balancing Reading Analysis (50%) and Editorial Revision (50%)',
        type: 'mcq_strategy_chart',
        description: 'Timeline showing 30 minutes allocated to deep historical reading passages and 30 minutes allocated to rapid editorial draft revisions.',
        takeaway: 'Revision questions are lower cognitive load; do not get bogged down on early reading questions at the expense of writing points.'
      }
    ],
    commonTraps: [
      'Picking an answer choice that is factually true in real life, but not supported anywhere in the provided text.',
      'Selecting a revision sentence that sounds sophisticated but introduces a tangential topic not developed in the paragraph.',
      'Rushing through the passage and answering questions from memory. Always re-read 2 lines above and below the cited line number!'
    ],
    cramSheet: [
      '45 questions in 60 minutes: ~14 minutes per passage set.',
      'Reading questions test author intent, word-in-context, and structural function.',
      'Writing questions test grammar, transitions, thesis strength, and sentence placement.',
      'For transitions: Identify the relationship first (contrast, causality, addition) before looking at the choices.'
    ]
  }
];
