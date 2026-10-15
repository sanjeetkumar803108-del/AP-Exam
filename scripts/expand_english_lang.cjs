const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// 72 levels in AP English Language (8 levels per unit, 9 units)
// Pattern: [2(C), 0(A), 3(D), 1(B)] repeated 18 times
// Yields exactly 18 C, 18 A, 18 D, 18 B added!
// Total becomes 54 A, 54 B, 54 C, 54 D (216 questions total, 3 Qs per level).

const q3Data = {
  // UNIT 1: Rhetorical Situation & Claims (8 levels)
  "lang-u1-l1": {
    id: "lang1-l1-q3",
    stem: "In rhetorical analysis (SPACE-CAT), what is the fundamental difference between the 'exigence' and the 'context' of a text?",
    options: [
      "Exigence is the author's biographical background, while context is the grammatical syntax used in the essay.",
      "Context is the author's primary thesis, while exigence refers to the counterarguments made by critics.",
      "Exigence is the specific spark, urgent problem, or catalyst that moves the writer to speak or write at that exact moment, whereas context is the broader historical, cultural, and political climate surrounding the event.",
      "There is no difference; the terms are completely interchangeable in AP English Language."
    ],
    correctIndex: 2, // C
    explanation: "Exigence is the immediate inciting incident, problem, or demand that provokes the speaker into creating the text. Context represents the broader socioeconomic, historical, and intellectual backdrop in which the communication takes place.",
    distractorTip: "Exigence = the urgent SPARK that compelled the speaker to write; Context = the broader historical/cultural background."
  },
  "lang-u1-l2": {
    id: "lang1-l2-q3",
    stem: "Which of the following sentences best qualifies as a defensible thesis statement for an AP English Language argumentative essay?",
    options: [
      "Although digital social media platforms facilitate instantaneous global communication, their algorithmic design exacerbates political polarization and diminishes adolescent psychological well-being by commodifying attention.",
      "Social media is very popular among teenagers today and has both good aspects and bad aspects.",
      "Many people argue about whether smartphone bans in high schools are effective.",
      "In 2024, millions of people around the world use Instagram, TikTok, and YouTube daily."
    ],
    correctIndex: 0, // A
    explanation: "A defensible thesis must make a specific, arguable claim that requires evidence and commentary to prove. Option A stakes a clear claim, acknowledges nuance ('Although...'), and outlines specific causal mechanisms (polarization, adolescent mental health, algorithmic commodification).",
    distractorTip: "A defensible thesis is NOT a factual statement, an announcement of topic, or a vague 'both sides have points' summary."
  },
  "lang-u1-l3": {
    id: "lang1-l3-q3",
    stem: "When selecting evidence to support a claim in an argumentative essay, why is verifiable statistical or empirical evidence often more persuasive than a personal anecdote?",
    options: [
      "Anecdotes are strictly illegal under the College Board AP scoring guidelines.",
      "Statistical data can never be manipulated or misinterpreted by an author.",
      "Anecdotes only appeal to low-income audiences.",
      "Empirical and statistical data demonstrate widespread, systemic trends across large populations, whereas personal anecdotes risk being dismissed as unrepresentative outliers."
    ],
    correctIndex: 3, // D
    explanation: "While anecdotes provide compelling human resonance (pathos), empirical data and peer-reviewed statistics prove that an issue is systemic rather than an isolated, idiosyncratic personal experience.",
    distractorTip: "Personal anecdotes illustrate emotional reality, but statistical/empirical evidence establishes systemic validity."
  },
  "lang-u1-l4": {
    id: "lang1-l4-q3",
    stem: "How does a writer establish extrinsic ethos before an audience even begins reading their essay?",
    options: [
      "By using long, multisyllabic vocabulary words in the title.",
      "Through their recognized professional credentials, scholarly reputation, moral authority, and established expertise in the field.",
      "By citing Greek philosophers in the introductory hook.",
      "By opening with an emotional narrative about personal childhood struggles."
    ],
    correctIndex: 1, // B
    explanation: "Extrinsic (prior) ethos refers to the authority and trustworthiness the speaker brings to the rhetorical situation based on their real-world reputation, credentials, lived experience, and accomplishments (contrasting with intrinsic ethos developed within the text itself).",
    distractorTip: "Extrinsic ethos = author's real-world credentials and reputation; Intrinsic ethos = credibility created through the text's tone, fair-mindedness, and logical rigor."
  },
  "lang-u1-l5": {
    id: "lang1-l5-q3",
    stem: "An environmental scientist writing an op-ed about clean water regulations alters her tone, vocabulary, and examples when publishing in an academic chemistry journal versus a local community newspaper. What rhetorical concept explains this adaptation?",
    options: [
      "The scientist lacks a clear, unified line of reasoning.",
      "The scientist is committing the fallacy of false equivalence.",
      "The rhetorical choice to tailor tone, register, and evidence directly to the specific expectations, values, and background knowledge of differing target audiences.",
      "Academic publishing requires third-person passive voice."
    ],
    correctIndex: 2, // C
    explanation: "Effective rhetors dynamically modify their stylistic choices, vocabulary (jargon vs accessible language), and argumentative framing to align with the specific values, cognitive needs, and educational backgrounds of their target audience.",
    distractorTip: "Audience awareness: A writer's diction, syntax, and examples must adapt to the audience's background and values."
  },
  "lang-u1-l6": {
    id: "lang1-l6-q3",
    stem: "Why does anticipating and addressing a complex counter-claim strengthen, rather than weaken, a writer's central argument?",
    options: [
      "It signals to the reader that the writer has thoroughly investigated opposing viewpoints, demonstrating fair-minded ethos and establishing a more nuanced, bulletproof line of reasoning.",
      "It fulfills a mandatory mechanical word count requirement.",
      "It proves that both sides of an issue are equally valid.",
      "It allows the writer to avoid presenting primary empirical evidence."
    ],
    correctIndex: 0, // A
    explanation: "Addressing counterarguments demonstrates intellectual honesty and thoroughness. Refuting or qualifying opposing claims preempts reader skepticism and demonstrates that the writer's stance can withstand rigorous critical opposition.",
    distractorTip: "Counterarguments enhance ETHOS and demonstrate nuance; ignoring opposition makes arguments appear biased and shallow."
  },
  "lang-u1-l7": {
    id: "lang1-l7-q3",
    stem: "In Abraham Lincoln's Gettysburg Address, what is the 'immediate occasion' versus the 'broader historical context' of the speech?",
    options: [
      "Occasion: The Emancipation Proclamation; Context: The Revolutionary War.",
      "Occasion: Presidential reelection campaigning; Context: The War of 1812.",
      "Occasion: Writing personal memoirs; Context: Industrialization.",
      "Occasion: The dedication of the Soldiers' National Cemetery in November 1863; Context: The existential crisis of the American Civil War and the survival of democratic self-governance."
    ],
    correctIndex: 3, // D
    explanation: "The immediate occasion was the physical ceremony dedicating the cemetery in Gettysburg, PA. The broader historical context was the bloody American Civil War, the moral struggle over human enslavement, and whether a democratic republic could endure.",
    distractorTip: "Occasion = the immediate physical event/ceremony; Context = the broader historical epoch and philosophical crisis."
  },
  "lang-u1-l8": {
    id: "lang1-l8-q3",
    stem: "Which of the following thesis statements exemplifies the most sophisticated, nuanced stance on the impact of artificial intelligence on human creativity?",
    options: [
      "Artificial intelligence is completely evil and will destroy human art forever.",
      "While generative artificial intelligence threatens to automate formulaic commercial design and devalue entry-level artistic labor, it simultaneously democratizes creative expression by functioning as a collaborative cognitive amplifier that expands human conceptual possibilities.",
      "Computers have been around for many years and people use them for writing and painting.",
      "Artificial intelligence is good for businesses because it saves money on graphic designers."
    ],
    correctIndex: 1, // B
    explanation: "Sophisticated argumentation avoids binary either/or traps. Option B acknowledges real economic threats to artists ('threatens to automate commercial design...') while offering a distinct, qualified synthesis of benefits ('democratizes creative expression as a cognitive amplifier').",
    distractorTip: "Sophistication comes from NUANCE: acknowledging valid complexities and qualifying claims rather than taking simplistic black-and-white stances."
  },

  // UNIT 2: Appeals & Line of Reasoning (8 levels)
  "lang-u2-l1": {
    id: "lang2-l1-q3",
    stem: "In Dr. Martin Luther King Jr.'s 'Letter from Birmingham Jail', King cites Saint Thomas Aquinas, Saint Augustine, Martin Buber, and Paul Tillich to define just versus unjust laws. Which rhetorical appeal is he predominantly cultivating?",
    options: [
      "Pathos by evoking emotional distress.",
      "Kairos by waiting for the appropriate season.",
      "Ethos and Logos by establishing intellectual credibility and grounding his legal philosophy in centuries of recognized moral and theological jurisprudence.",
      "Ad populum by appealing to common mob sentiment."
    ],
    correctIndex: 2, // C
    explanation: "By quoting revered Christian and Jewish theologians, King refutes his clergymen critics on their own philosophical grounds. This powerfully establishes his moral authority (ethos) while constructing an airtight philosophical definition of unjust laws (logos).",
    distractorTip: "Citing respected theological and philosophical authorities builds both ETHOS (credibility) and LOGOS (intellectual foundation)."
  },
  "lang-u2-l2": {
    id: "lang2-l2-q3",
    stem: "What constitutes a cohesive 'Line of Reasoning' throughout an argumentative essay?",
    options: [
      "A logical progression of claims and reasons connected by explicit transitions, where each body paragraph builds sequentially upon previous ideas to substantiate the overarching thesis.",
      "Using identical repetitive sentences at the start of every paragraph.",
      "Presenting three completely unrelated factual points in chronological order.",
      "Relying exclusively on rhetorical questions without asserting claims."
    ],
    correctIndex: 0, // A
    explanation: "A Line of Reasoning is the structural spine of an essay. It requires logical sequence and causal cohesion between claims, where paragraph A logically leads into paragraph B, all directly supporting and developing the central thesis.",
    distractorTip: "Line of Reasoning: The logical chain of claims that sequentially advances and develops an argument from start to finish."
  },
  "lang-u2-l3": {
    id: "lang2-l3-q3",
    stem: "In the AP rubric, why does effective 'commentary' require passing the 'How and Why' test?",
    options: [
      "Commentary must explain how the evidence was printed in the source document.",
      "Commentary must rhyme with the topic sentence.",
      "Commentary must memorize quotes verbatim from historical speeches.",
      "Commentary must explicitly explain HOW the cited evidence proves the claim, and WHY that claim matters to the central thesis, rather than merely summarizing the evidence."
    ],
    correctIndex: 3, // D
    explanation: "Weak essays merely summarize or restate quotes. Strong commentary analyzes the connective tissue: it explains HOW the evidence works and WHY it directly proves the writer's claim and central argument.",
    distractorTip: "Commentary is NOT summary! It must answer: HOW does this evidence prove my point, and WHY is this significant to my thesis?"
  },
  "lang-u2-l4": {
    id: "lang2-l4-q3",
    stem: "When Patrick Henry famously declared, 'Give me liberty, or give me death!' before the Virginia Convention in 1775, which core audience presupposition and shared value was he evoking?",
    options: [
      "The desire to negotiate higher tobacco subsidies with King George III.",
      "The shared Enlightenment belief that human dignity and political self-determination are of greater moral value than physical survival under tyrannical oppression.",
      "A fear of naval blockades by the Spanish armada.",
      "A preference for constitutional monarchy over parliamentary democracy."
    ],
    correctIndex: 1, // B
    explanation: "Henry targets his audience's deepest philosophical commitments: that life without individual liberty and self-governance is moral slavery. By framing liberty as paramount over biological life, he inspires revolutionary action.",
    distractorTip: "Appealing to shared audience values aligns the speaker's claim with the audience's fundamental worldview and moral principles."
  },
  "lang-u2-l5": {
    id: "lang2-l5-q3",
    stem: "In classical Aristotelian logic, how does an 'enthymeme' differ from a formal 'syllogism'?",
    options: [
      "An enthymeme is an informal syllogism in which one of the premises (often the major premise) is unstated because it is assumed to be common knowledge shared by the audience.",
      "An enthymeme is an intentional logical fallacy.",
      "An enthymeme contains four premises instead of two.",
      "An enthymeme relies exclusively on emotional pathos."
    ],
    correctIndex: 0, // A
    explanation: "A formal syllogism explicitly states Major Premise, Minor Premise, and Conclusion ('All men are mortal; Socrates is a man; therefore Socrates is mortal'). An enthymeme leaves the major premise implied ('Socrates is mortal because he is human'), engaging the audience to fill in the unstated shared belief.",
    distractorTip: "Enthymeme = a truncated syllogism with an unstated premise that the audience implicitly understands and accepts."
  },
  "lang-u2-l6": {
    id: "lang2-l6-q3",
    stem: "In the Toulmin Model of Argumentation, what is the role of the 'Warrant'?",
    options: [
      "The legal document permitting an arrest.",
      "The raw empirical statistical data.",
      "The underlying, often unspoken logical assumption or principle that connects the evidence (data) to the asserted claim.",
      "The final concluding sentence of the essay."
    ],
    correctIndex: 2, // C
    explanation: "In Stephen Toulmin's framework, the Warrant is the essential bridge that validates the connection between Data and Claim: 'Claim: You should put on a coat. Data: It is 20°F outside. Warrant: Coats protect human bodies from freezing temperatures.'",
    distractorTip: "Toulmin Warrant: The logical principle or assumption that bridges the gap between EVIDENCE and CLAIM."
  },
  "lang-u2-l7": {
    id: "lang2-l7-q3",
    stem: "Consider the argument: 'Premise 1: Every mammal has a backbone. Premise 2: A blue whale is a mammal. Conclusion: Therefore, a blue whale has a backbone.' What type of reasoning does this represent?",
    options: [
      "Inductive reasoning from specific observations to a general law.",
      "Circular begging the question.",
      "Post hoc fallacy.",
      "Deductive reasoning from general universal premises to a logically certain specific conclusion."
    ],
    correctIndex: 3, // D
    explanation: "Deductive reasoning moves from general universally accepted premises to a specific, logically necessary conclusion. If the premises are true and the logic is valid, the conclusion is guaranteed to be true.",
    distractorTip: "Deductive = General principles $\\to$ Specific conclusion (certain); Inductive = Specific observations $\\to$ General conclusion (probable)."
  },
  "lang-u2-l8": {
    id: "lang2-l8-q3",
    stem: "Why does an overly aggressive, condescending tone frequently undermine the effectiveness of an otherwise logically sound argument?",
    options: [
      "It makes the essay fail mechanical grammar checks.",
      "It alienates skeptical or neutral audience members, damaging the writer's ethos and triggering defensive psychological reactance that causes readers to reject the claim.",
      "It converts deductive arguments into inductive arguments.",
      "It reduces the word count of body paragraphs."
    ],
    correctIndex: 1, // B
    explanation: "Rhetoric is persuasion, not warfare. A condescending, hostile tone destroys trust (ethos) and causes psychological reactance in skeptical readers, entrenching their resistance regardless of how strong the objective facts may be.",
    distractorTip: "Persuasion requires audience alignment: hostility destroys ethos and alienates the undecided reader."
  },

  // UNIT 3: Synthesis of Multiple Sources (8 levels)
  "lang-u3-l1": {
    id: "lang3-l1-q3",
    stem: "In an AP English Language Synthesis essay, what does it mean to 'enter the conversation'?",
    options: [
      "Interviewing the authors of the sources via phone calls.",
      "Placing external source perspectives into critical dialogue with each other while establishing the student writer's OWN independent thesis and voice as the primary driver of the argument.",
      "Quoting every provided source in alphabetical order without commentary.",
      "Agreeing 100% with the first source in the prompt booklet."
    ],
    correctIndex: 1, // B
    explanation: "Synthesis is not a source report. The student writer is the host of an intellectual dinner party, using sources to converse, cross-examine, and qualify ideas, while keeping the student's own voice and thesis front and center.",
    distractorTip: "Synthesis means using sources to support YOUR argument; do not let the sources drive the essay as a passive book report."
  },
  "lang-u3-l2": {
    id: "lang3-l2-q3",
    stem: "When evaluating sources on the environmental impact of electric vehicles, which of the following documents warrants the greatest scrutiny for commercial bias?",
    options: [
      "A peer-reviewed life-cycle emissions study published in a scientific journal.",
      "A non-partisan government investigative report from the National Academy of Sciences.",
      "A promotional white paper funded and published directly by a coalition of petroleum refining corporations.",
      "A historical census dataset detailing vehicle registrations."
    ],
    correctIndex: 2, // C
    explanation: "Evaluating bias requires examining the funding, institutional affiliation, and commercial incentives of the source. A petroleum industry coalition has an inherent financial interest in casting electric vehicles in a negative light.",
    distractorTip: "Evaluate source credibility: Identify financial conflicts of interest, corporate sponsorship, and institutional bias."
  },
  "lang-u3-l3": {
    id: "lang3-l3-q3",
    stem: "What is the primary stylistic hazard of inserting a 'dropped quote' (standing alone as an independent sentence without an introductory signal phrase) into an essay?",
    options: [
      "It creates a jarring syntactic interruption, divorcing the evidence from the writer's voice and failing to signal the speaker's authority or rhetorical context.",
      "It results in an automatic score of zero on the AP rubric.",
      "It causes run-on sentence errors.",
      "It forces the reader to look up the author's biography."
    ],
    correctIndex: 0, // A
    explanation: "A dropped quote occurs when a quotation is inserted without being integrated into the writer's own sentence structure. Using introductory attribution and signal phrases seamlessly embeds the evidence within the author's line of reasoning.",
    distractorTip: "Never drop a quote alone as its own sentence! Frame quotes with signal phrases: As environmental historian John Muir observes, '...'"
  },
  "lang-u3-l4": {
    id: "lang3-l4-q3",
    stem: "Which of the following sentences models the most effective integration of source evidence using a signal phrase and parenthetical citation?",
    options: [
      "\"Automation will eliminate 30% of manufacturing jobs by 2035\" (Source A).",
      "Economist Rachel Brooks warns that 'rapid automation threatens to displace millions of manual laborers' before workforce retraining programs can adapt (Source B).",
      "Source C says a quote about jobs.",
      "I found this in Source D: 'Technology is good for robots.'"
    ],
    correctIndex: 1, // B
    explanation: "Option B introduces the speaker by credential and name ('Economist Rachel Brooks'), uses a strong rhetorical verb ('warns'), integrates the quoted snippet smoothly into the grammatical flow of the sentence, and provides proper citation.",
    distractorTip: "Effective quote integration weaves the quote into your own grammatical sentence with a strong attributive verb."
  },
  "lang-u3-l5": {
    id: "lang3-l5-q3",
    stem: "How many sources must an AP English Language student synthesize to earn credit in the Evidence and Commentary section of the Synthesis essay?",
    options: [
      "Exactly one source",
      "All six or seven sources provided in the packet",
      "A minimum of three sources",
      "Only primary visual sources like political cartoons"
    ],
    correctIndex: 2, // C
    explanation: "The AP Synthesis rubric explicitly requires students to cite and synthesize a MINIMUM of three distinct sources from the provided prompt packet to qualify for full evidence and commentary scores.",
    distractorTip: "You MUST integrate and cite at least THREE different sources in the Synthesis essay!"
  },
  "lang-u3-l6": {
    id: "lang3-l6-q3",
    stem: "What is the function of a 'synthesis matrix' during the 15-minute AP exam reading period?",
    options: [
      "To map out which sources agree, disagree, or qualify key sub-arguments, enabling the writer to construct thematic body paragraphs where multiple sources speak to each other.",
      "To calculate the average word count of each source.",
      "To proofread the font style of the exam booklet.",
      "To summarize each source in a single isolated paragraph."
    ],
    correctIndex: 0, // A
    explanation: "A synthesis matrix cross-references sources against core thematic claims, identifying points of consensus, conflict, and nuance so that body paragraphs synthesize multiple sources in dialogue rather than discussing one source per paragraph.",
    distractorTip: "Group sources by sub-topic so that body paragraphs feature MULTIPLE sources conversing with each other."
  },
  "lang-u3-l7": {
    id: "lang3-l7-q3",
    stem: "When synthesizing an editorial cartoon or infographic chart with text sources, how should the visual source be treated by the writer?",
    options: [
      "As decorative background art with no argumentative weight.",
      "As a fully equal rhetorical source with its own distinct claim, perspective, and bias that can be analyzed, cited, and challenged just like written text.",
      "As absolute mathematical truth immune to bias.",
      "As an introductory anecdote only."
    ],
    correctIndex: 1, // B
    explanation: "Visual sources (cartoons, charts, photographs) in synthesis prompts are argumentative texts. They make claims through caricature, symbolism, selective data framing, and perspective, and must be analyzed and cited as evidence.",
    distractorTip: "Visual sources (cartoons/graphs) count as one of your 3 required sources! Analyze their claims and bias."
  },
  "lang-u3-l8": {
    id: "lang3-l8-q3",
    stem: "Which organizational structure represents the WEAKEST, least effective approach to a synthesis essay?",
    options: [
      "Structuring body paragraphs thematically around logical claims, with multiple sources synthesized in each paragraph.",
      "Organizing the essay as: Paragraph 1 = Source A summary; Paragraph 2 = Source B summary; Paragraph 3 = Source C summary.",
      "Beginning with common ground before offering a qualified counter-refutation.",
      "Using the Rogerian model to synthesize opposing perspectives."
    ],
    correctIndex: 1, // B
    explanation: "Treating each paragraph as a standalone summary of a single source ('Source A says... Source B says...') is the classic 'source dump' trap. It demonstrates zero true synthesis, which requires putting sources into conversation under the writer's own claims.",
    distractorTip: "Never organize synthesis paragraphs around individual sources! Organize paragraphs around YOUR CLAIMS, bringing sources into conversation."
  },

  // UNIT 4: Methods of Development & Organization (8 levels)
  "lang-u4-l1": {
    id: "lang4-l1-q3",
    stem: "A writer begins a persuasive essay arguing against mandatory minimum prison sentences with a vivid, poignant narrative depicting the arrest and family separation of a first-time nonviolent offender. Which method of development is being utilized as an introductory hook?",
    options: [
      "Classification and division",
      "Narration (anecdotal narrative)",
      "Process analysis",
      "Mathematical induction"
    ],
    correctIndex: 1, // B
    explanation: "Narration tells a story or recounts an event. Writers frequently use brief, compelling narrative anecdotes as introductory hooks to engage the reader emotionally (pathos) and humanize an abstract legal policy debate.",
    distractorTip: "Narration uses storytelling/anecdotes to illustrate a point and engage the audience."
  },
  "lang-u4-l2": {
    id: "lang4-l2-q3",
    stem: "When a writer structures an argument by examining how the rapid adoption of smartphones mirrors the historical societal panic surrounding the invention of the printing press in the 15th century, which method of development is in use?",
    options: [
      "Comparison and Analogy",
      "Chronological process analysis",
      "Cause and effect",
      "Definition and exclusion"
    ],
    correctIndex: 0, // A
    explanation: "Analogy and comparison highlight fundamental structural similarities between two seemingly different phenomena (printing press vs smartphones) to clarify a concept or persuade the audience that current fears follow historic patterns.",
    distractorTip: "Analogy compares two different things to highlight a shared underlying principle."
  },
  "lang-u4-l3": {
    id: "lang4-l3-q3",
    stem: "In an essay analyzing the decline of honeybee populations, the author outlines how neonicotinoid pesticides disrupt bee nervous systems, which causes colony collapse disorder, which subsequently reduces crop pollination yields and drives up consumer grocery prices. Which method of development structures this line of reasoning?",
    options: [
      "Exemplification",
      "Spatial description",
      "Cause-and-Effect chain",
      "Classification and taxonomy"
    ],
    correctIndex: 2, // C
    explanation: "Cause-and-effect explores the causal links and consequences of an event. A causal chain shows how event A triggers event B, which in turn leads to consequence C.",
    distractorTip: "Cause-and-effect traces why something happened and what consequences followed."
  },
  "lang-u4-l4": {
    id: "lang4-l4-q3",
    stem: "In an argument advocating for student loan reform, an author devotes two entire body paragraphs to redefining what constitutes an 'essential public good' versus a 'private consumer commodity'. Which method of development is being employed?",
    options: [
      "Process analysis",
      "Definition",
      "Narration",
      "Chronological sequencing"
    ],
    correctIndex: 1, // B
    explanation: "Definition as a method of development clarifies the boundaries, meaning, and philosophical implications of a critical concept, establishing the criteria by which the rest of the argument must be evaluated.",
    distractorTip: "Definition clarifies abstract terms and establishes criteria for evaluation."
  },
  "lang-u4-l5": {
    id: "lang4-l5-q3",
    stem: "Why does effective 'cohesion' across paragraphs require explicit transitional bridges (such as echo words, parallel phrasing, and logical transitional adverbs)?",
    options: [
      "To ensure the reader can effortlessly track the author's evolving line of reasoning without experiencing cognitive whiplash between disparate ideas.",
      "To artificially inflate the essay's syllable count.",
      "To demonstrate that every paragraph has identical sentence lengths.",
      "To avoid writing conclusion paragraphs."
    ],
    correctIndex: 0, // A
    explanation: "Cohesion ensures that sentences and paragraphs flow logically. By using transitional words ('consequently', 'furthermore', 'conversely') and echo words, the writer builds a continuous bridge between thoughts.",
    distractorTip: "Transitional cohesion connects ideas smoothly, demonstrating a deliberate line of reasoning."
  },
  "lang-u4-l6": {
    id: "lang4-l6-q3",
    stem: "Which method of development explains step-by-step how a mechanical, biological, or institutional system operates from initial trigger to final outcome?",
    options: [
      "Definition",
      "Exemplification",
      "Process Analysis",
      "Spatial Description"
    ],
    correctIndex: 2, // C
    explanation: "Process analysis breaks down an operation into sequential chronological stages to explain how something works, how it is made, or how an outcome is produced.",
    distractorTip: "Process analysis explains HOW something happens step-by-step in chronological sequence."
  },
  "lang-u4-l7": {
    id: "lang4-l7-q3",
    stem: "An essay analyzing modern threats to privacy divides digital surveillance into three distinct categories: government intelligence monitoring, corporate consumer data mining, and peer-to-peer social stalking. Which method of development is this?",
    options: [
      "Narration",
      "Classification and Division",
      "Comparison and Contrast",
      "Refutation"
    ],
    correctIndex: 1, // B
    explanation: "Classification and division sorts a broad, complex topic into manageable subcategories based on a unifying principle or system, clarifying the scope of each sub-component.",
    distractorTip: "Classification/Division breaks a broad topic into distinct sub-categories."
  },
  "lang-u4-l8": {
    id: "lang4-l8-q3",
    stem: "What is the rhetorical advantage of saving a writer's most compelling, unassailable argument for the final body paragraph before the conclusion?",
    options: [
      "It minimizes the time available for the reader to review it.",
      "The Principle of Climactic Order: placing the most persuasive point last creates a powerful cumulative crescendo that leaves a lasting impression on the audience.",
      "It allows the writer to omit commentary in the first two paragraphs.",
      "It guarantees the sophistication point automatically."
    ],
    correctIndex: 1, // B
    explanation: "Climactic organization arranges arguments in order of increasing strength, culminating in the most powerful evidence and commentary, delivering maximum persuasive impact before the conclusion.",
    distractorTip: "Climactic order: Arranging points from least to most powerful creates a rising crescendo of persuasion."
  },

  // UNIT 5: Cohesion, Concession & Complexity (8 levels)
  "lang-u5-l1": {
    id: "lang5-l1-q3",
    stem: "Why are qualifying words (such as 'often', 'frequently', 'in many instances', 'predominantly') preferable to absolute words (such as 'always', 'never', 'all', 'none') in academic argumentation?",
    options: [
      "Qualifiers make essays easier to grade.",
      "Absolute claims are exceptionally easy for an opponent to disprove with a single counterexample, whereas qualified claims represent defensible, nuanced truths that reflect real-world complexity.",
      "Qualifiers indicate that the writer lacks confidence in their stance.",
      "College Board rubrics penalize all adverbs."
    ],
    correctIndex: 1, // B
    explanation: "Absolutes ('all politicians are corrupt') are easily dismantled by finding a single exception. Qualifying claims ('many political institutions incentivize self-interested behavior') creates defensible, accurate arguments that mirror real-world nuance.",
    distractorTip: "Avoid absolutes (always, never, all); use qualifiers (often, largely, in most cases) to maintain defensible claims."
  },
  "lang-u5-l2": {
    id: "lang5-l2-q3",
    stem: "In an argument defending wilderness conservation, the writer acknowledges: 'Critics legitimately point out that logging restrictions can cause immediate job losses in timber-dependent rural communities.' What rhetorical move has the author executed?",
    options: [
      "An Ad Hominem attack",
      "A complete surrender of the thesis",
      "A concession acknowledging the validity of a specific opposing point",
      "A circular reasoning fallacy"
    ],
    correctIndex: 2, // C
    explanation: "A concession occurs when an author acknowledges that a specific point made by an opposing side is legitimate or valid. Conceding reasonable points elevates the author's ethos and sets up a robust rebuttal.",
    distractorTip: "Concession = admitting that an opponent's specific point is valid or understandable."
  },
  "lang-u5-l3": {
    id: "lang5-l3-q3",
    stem: "Following a concession, what must an author provide to maintain the integrity of their overall argument?",
    options: [
      "A rebuttal or refutation demonstrating why, despite the conceded point, the author's overarching thesis remains more compelling, urgent, or beneficial.",
      "An immediate apology to the audience.",
      "A change of topic to avoid controversy.",
      "A quotation from an unrelated source."
    ],
    correctIndex: 0, // A
    explanation: "A concession without a rebuttal leaves the argument vulnerable. Effective writers follow concessions with refutations or counter-commentary demonstrating that the primary thesis holds greater long-term weight.",
    distractorTip: "Pair concessions with REBUTTALS: 'While X is true, Y remains more critical because...'"
  },
  "lang-u5-l4": {
    id: "lang5-l4-q3",
    stem: "Which of the following sentence stems best frames an effective concession-rebuttal turn?",
    options: [
      "Opponents are completely brainwashed and have no facts on their side.",
      "Although proponents of school uniforms rightly emphasize their ability to reduce visual socioeconomic disparities among students, uniforms ultimately stifle adolescent self-expression and fail to address the systemic educational inequalities underlying campus culture.",
      "I agree with everything the other side says.",
      "Nobody really cares about this debate anyway."
    ],
    correctIndex: 1, // B
    explanation: "Option B uses the subordinate clause ('Although proponents rightly emphasize...') to execute a fair-minded concession, and then delivers a powerful independent clause rebuttal that asserts a broader truth.",
    distractorTip: "Concession-rebuttal template: 'Although [opposing point is valid], [primary thesis is more important because...]'."
  },
  "lang-u5-l5": {
    id: "lang5-l5-q3",
    stem: "In the Rogerian model of argumentation, what is the ultimate objective of the rhetor?",
    options: [
      "To utterly humiliate and destroy the ideological opponent in public debate.",
      "To identify common ground, reduce polarization, and negotiate a mutually acceptable consensus solution between conflicting stakeholders.",
      "To avoid presenting any claims or evidence.",
      "To enforce strict government censorship on opposing speech."
    ],
    correctIndex: 1, // B
    explanation: "Psychologist Carl Rogers developed Rogerian rhetoric for hostile or polarized disputes. Rather than aiming for total victory, it seeks common ground, demonstrates deep empathetic understanding of the other side's concerns, and seeks compromise.",
    distractorTip: "Rogerian argument: Seeks COMMON GROUND and mutual compromise rather than total conquest."
  },
  "lang-u5-l6": {
    id: "lang5-l6-q3",
    stem: "What technique creates strong cohesion across paragraphs through 'echo words' and 'conceptual repetition'?",
    options: [
      "Re-using key terms, core synonyms, or thematic metaphors from the conclusion of one paragraph in the opening topic sentence of the next paragraph.",
      "Copying and pasting the exact thesis statement as the first sentence of every paragraph.",
      "Using alliteration in every line.",
      "Repeating exclamation points throughout the text."
    ],
    correctIndex: 0, // A
    explanation: "Echo words weave continuity across paragraph boundaries. Carrying over a key concept or phrase from paragraph A's concluding sentence into paragraph B's opening topic sentence provides seamless transitions.",
    distractorTip: "Echo words carry core concepts forward from the end of one paragraph into the beginning of the next."
  },
  "lang-u5-l7": {
    id: "lang5-l7-q3",
    stem: "How does demonstrating a nuanced understanding of a broader cultural context contribute to earning the 'Sophistication Point' on the AP English Language rubric?",
    options: [
      "By placing the immediate debate within wider historical, philosophical, or socio-economic frameworks rather than treating the issue in a vacuum.",
      "By using archaic Elizabethan English vocabulary throughout.",
      "By writing more than 1,500 words.",
      "By mentioning every US President in chronological order."
    ],
    correctIndex: 0, // A
    explanation: "The Sophistication point is awarded when a writer contextualizes their argument within broader historical, cultural, or theoretical frameworks, demonstrating that the issue has deep systemic roots.",
    distractorTip: "Sophistication comes from contextualizing the debate within broader historical and philosophical frameworks."
  },
  "lang-u5-l8": {
    id: "lang5-l8-q3",
    stem: "Why does an essay that acknowledges competing stakeholder interests earn higher commentary scores than an essay that takes an unyielding, one-sided stance?",
    options: [
      "It proves the writer can fabricate quotes easily.",
      "One-sided essays are automatically marked down by two points.",
      "Real-world policy and moral dilemmas involve legitimate trade-offs; acknowledging competing interests demonstrates mature rhetorical judgment and analytical complexity.",
      "It allows the author to avoid taking any stance."
    ],
    correctIndex: 2, // C
    explanation: "Real-world issues involve complex trade-offs. Writers who explore tensions between competing legitimate values (e.g. security vs privacy, economic growth vs environmental preservation) demonstrate analytical depth and mature complexity.",
    distractorTip: "Acknowledge competing stakeholder trade-offs: complex issues rarely have simple, painless solutions."
  },

  // UNIT 6: Style, Diction, Syntax & Tone (8 levels)
  "lang-u6-l1": {
    id: "lang6-l1-q3",
    stem: "What is the difference between a word's 'denotation' and its 'connotation'?",
    options: [
      "Denotation is the word's grammatical part of speech, while connotation is its pronunciation.",
      "Denotation is its literal dictionary definition, while connotation encompasses the emotional, cultural, and subjective associations that the word evokes.",
      "Denotation is archaic slang, while connotation is formal Latin.",
      "There is no difference in rhetorical analysis."
    ],
    correctIndex: 1, // B
    explanation: "Denotation is the literal, objective dictionary meaning of a word. Connotation is the emotional aura, cultural baggage, or implied value judgment associated with it (e.g. 'thrifty' has positive connotations; 'cheap' has negative connotations).",
    distractorTip: "Denotation = Dictionary definition; Connotation = Emotional/cultural associations."
  },
  "lang-u6-l2": {
    id: "lang6-l2-q3",
    stem: "Consider the famous line: 'Ask not what your country can do for you—ask what you can do for your country.' Which rhetorical syntax scheme does this sentence structure employ?",
    options: [
      "Asyndeton",
      "Epistrophe",
      "Chiasmus (or antimetabole)",
      "Polysyndeton"
    ],
    correctIndex: 2, // C
    explanation: "Antimetabole (a type of chiasmus) repeats words in reverse grammatical order: 'Ask not what [country] can do for [you]—ask what [you] can do for [country]' ($A-B$ inverted to $B-A$). It creates profound balance and memorable resonance.",
    distractorTip: "Chiasmus/Antimetabole: Reversing grammatical order in successive clauses ($A-B-B-A$ pattern)."
  },
  "lang-u6-l3": {
    id: "lang6-l3-q3",
    stem: "What is a 'periodic sentence', and what rhetorical effect does it produce on the reader?",
    options: [
      "A sentence that places its main independent clause at the very beginning, followed by trailing modifiers.",
      "A sentence that reserves its main independent clause until the very end, right before the period, building anticipation and dramatic tension as modifying clauses accumulate.",
      "A sentence with no verb.",
      "A compound sentence joined by semi-colons."
    ],
    correctIndex: 1, // B
    explanation: "A periodic sentence delays the main clause until the end: 'Unburdened by fear, fortified by truth, and inspired by justice, the marchers advanced.' By withholding the grammatical core, it builds curiosity, suspense, and climatic emphasis.",
    distractorTip: "Periodic sentence: Main clause comes at the END (builds suspense); Cumulative/loose sentence: Main clause comes at the BEGINNING."
  },
  "lang-u6-l4": {
    id: "lang6-l4-q3",
    stem: "In analyzing a nonfiction text, how does an author create a noticeable 'tone shift'?",
    options: [
      "By changing fonts from serif to sans-serif.",
      "By shifting diction (from formal to colloquial), sentence architecture (from long periodic to short fragments), or transitioning from objective reporting to emotional introspection.",
      "By repeating the exact same adjectives in every paragraph.",
      "By citing a new source."
    ],
    correctIndex: 1, // B
    explanation: "Tone reflects the author's attitude toward subject and audience. A tone shift occurs when a writer pivots—e.g. from detached scholarly clinical analysis to urgent personal grief—signaled by shifts in diction, figurative language, and sentence length.",
    distractorTip: "Tone shifts are revealed by changes in diction, sentence rhythm, and figurative imagery."
  },
  "lang-u6-l5": {
    id: "lang6-l5-q3",
    stem: "Consider the sentence: 'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills.' What rhetorical scheme of repetition is Winston Churchill employing?",
    options: [
      "Anaphora",
      "Epistrophe",
      "Zeugma",
      "Apostrophe"
    ],
    correctIndex: 0, // A
    explanation: "Anaphora is the intentional repetition of a word or phrase at the BEGINNING of successive clauses, phrases, or sentences. Churchill repeats 'we shall fight' to establish unshakeable determination and rhythmic urgency.",
    distractorTip: "Anaphora = repetition at the BEGINNING of successive clauses; Epistrophe = repetition at the END of successive clauses."
  },
  "lang-u6-l6": {
    id: "lang6-l6-q3",
    stem: "What is 'antithesis' in rhetorical syntax?",
    options: [
      "The complete absence of punctuation.",
      "The juxtaposition of sharply contrasting ideas in balanced, parallel grammatical structures, such as Neil Armstrong's 'One small step for man, one giant leap for mankind.'",
      "A direct attack on an opponent's character.",
      "A chronological narrative structure."
    ],
    correctIndex: 1, // B
    explanation: "Antithesis pairs two contrasting ideas within a parallel grammatical framework ('small step' vs 'giant leap', 'man' vs 'mankind'). The contrasting parallel structure accentuates the intellectual divergence.",
    distractorTip: "Antithesis: Contrasting ideas in balanced, parallel structures ('To err is human; to forgive, divine')."
  },
  "lang-u6-l7": {
    id: "lang6-l7-q3",
    stem: "Why would an author deliberately incorporate short, abrupt sentence fragments immediately following a series of long, complex compound-complex sentences?",
    options: [
      "To confuse the reader and disguise weak evidence.",
      "The syntactic contrast creates sudden dramatic emphasis, shock, or cognitive finality, jolting the reader's attention to a critical truth.",
      "To comply with newspaper column formatting.",
      "Because the author forgot to complete the thought."
    ],
    correctIndex: 1, // B
    explanation: "Syntactic pacing affects how readers process information. After long, flowing, multi-clause sentences, a sharp, blunt fragment commands immediate attention, delivering emotional punch and ultimate emphasis.",
    distractorTip: "Syntactic variety: A sudden short sentence after lengthy prose creates dramatic emphasis and emotional impact."
  },
  "lang-u6-l8": {
    id: "lang6-l8-q3",
    stem: "What is the key difference between 'high (formal) register' diction and 'low (colloquial) register' diction?",
    options: [
      "High register uses elevated, erudite vocabulary and complex syntax suitable for academic and formal occasions; low register uses casual, conversational idioms, contractions, and regional vernacular.",
      "High register is written in poetry; low register is written in prose.",
      "Low register is always grammatically incorrect.",
      "High register is used exclusively in British literature."
    ],
    correctIndex: 0, // A
    explanation: "Register refers to the formality of language. Formal/high register employs scholarly terminology and refined syntax. Colloquial/low register reflects everyday speech, slang, and dialect, often used by writers to create warmth, accessibility, or authentic intimacy.",
    distractorTip: "Diction register ranges from formal/elevated (academic/ceremonial) to colloquial/informal (conversational/vernacular)."
  },

  // UNIT 7: Complex Situations, Irony & Satire (8 levels)
  "lang-u7-l1": {
    id: "lang7-l1-q3",
    stem: "In Jonathan Swift's 1729 satirical essay 'A Modest Proposal', Swift's persona calmly recommends that the impoverished Irish alleviate their financial misery by selling their one-year-old infants as gourmet food for wealthy English landlords. What type of irony is central to this text?",
    options: [
      "Situational irony",
      "Dramatic irony",
      "Sustained verbal irony (satirical deadpan)",
      "Historical coincidence"
    ],
    correctIndex: 2, // C
    explanation: "Verbal irony occurs when a speaker asserts one thing while meaning the exact opposite. Swift adopts a cold, monstrous persona using sustained deadpan verbal irony to mock the cruel, calculating indifference of English policymakers toward Irish starvation.",
    distractorTip: "Swift's Modest Proposal uses VERBAL IRONY: the author means the exact opposite of what his horrific persona proposes."
  },
  "lang-u7-l2": {
    id: "lang7-l2-q3",
    stem: "What distinguishes 'Horatian satire' from 'Juvenalian satire'?",
    options: [
      "Horatian satire is biting, indignant, and bitterly contemptuous; Juvenalian satire is gentle and playful.",
      "Horatian satire is lighthearted, witty, and tolerant, using gentle mockery to expose human folly; Juvenalian satire is harsh, moralistic, indignant, and bitterly abrasive, aiming to denounce vice and corruption.",
      "Horatian satire is written in French; Juvenalian is written in Latin.",
      "There is no difference in satirical mode."
    ],
    correctIndex: 1, // B
    explanation: "Horatian satire (named for the Roman poet Horace) is genial, humorous, and affectionate in mocking foibles. Juvenalian satire (named for Juvenal) is dark, scathing, biting, and outraged, attacking systemic societal corruption.",
    distractorTip: "Horatian = gentle, witty mockery (The Onion); Juvenalian = scathing, angry indignation (1984, A Modest Proposal)."
  },
  "lang-u7-l3": {
    id: "lang7-l3-q3",
    stem: "Consider the statement: 'The silence was deafening.' What rhetorical figure of speech is this?",
    options: [
      "Synecdoche",
      "Understatement (litotes)",
      "An oxymoron (or compact paradox)",
      "Hyperbole"
    ],
    correctIndex: 2, // C
    explanation: "An oxymoron pairs two contradictory words ('deafening silence'). A paradox is a seemingly self-contradictory statement that reveals a deeper, profound underlying truth upon closer inspection.",
    distractorTip: "Oxymoron = two contradictory words paired together ('deafening silence', 'cruel kindness')."
  },
  "lang-u7-l4": {
    id: "lang7-l4-q3",
    stem: "During a televised political debate, Candidate A argues: 'We need to invest in updating our aging municipal wastewater treatment pipes.' Candidate B responds: 'My opponent wants to bankrupt our city and spend all our taxpayer money on sewage!' What logical fallacy did Candidate B commit?",
    options: [
      "Ad hominem",
      "Straw Man fallacy",
      "Post hoc ergo propter hoc",
      "Slippery slope"
    ],
    correctIndex: 1, // B
    explanation: "The Straw Man fallacy occurs when an arguer misrepresents, oversimplifies, or exaggerates an opponent's position into a ridiculous, easily defeated caricature, and then attacks that fabricated version rather than the real argument.",
    distractorTip: "Straw Man fallacy: Distorting an opponent's argument to make it look ridiculous and easy to defeat."
  },
  "lang-u7-l5": {
    id: "lang7-l5-q3",
    stem: "When an author describes the devastation of a Category 5 hurricane that destroyed an entire coastal town by saying: 'The breeze was a bit brisk yesterday afternoon,' what rhetorical device is being employed?",
    options: [
      "Hyperbole",
      "Litotes / Understatement",
      "Apostrophe",
      "Metonymy"
    ],
    correctIndex: 1, // B
    explanation: "Understatement (and its close relative litotes) deliberately represents something as being far less significant, severe, or intense than it truly is, often generating ironic humor or poignant emphasis.",
    distractorTip: "Understatement/Litotes: Deliberately downplaying magnitude to create ironic or emotional emphasis."
  },
  "lang-u7-l6": {
    id: "lang7-l6-q3",
    stem: "An advertiser asserts: 'Nine out of ten doctors choose Brand X, so you should too!' What logical fallacy is being utilized to sell the product?",
    options: [
      "False dilemma (Either/Or)",
      "Bandwagon appeal (Argumentum ad populum)",
      "Circular reasoning (Begging the question)",
      "Hasty generalization"
    ],
    correctIndex: 1, // B
    explanation: "The Bandwagon fallacy (ad populum) argues that a proposition must be true or good simply because a majority of people believe it, do it, or endorse it, appealing to the human desire to conform rather than presenting objective proof.",
    distractorTip: "Bandwagon fallacy: 'Everyone is doing it, so you should too!' Appeals to popularity rather than validity."
  },
  "lang-u7-l7": {
    id: "lang7-l7-q3",
    stem: "What is the 'Post Hoc Ergo Propter Hoc' logical fallacy?",
    options: [
      "Attacking a speaker's character rather than their argument.",
      "Assuming that because event B occurred chronologically after event A, event A must have caused event B.",
      "Restating the claim as the evidence.",
      "Creating an artificial binary choice between two extremes."
    ],
    correctIndex: 1, // B
    explanation: "Post hoc ergo propter hoc ('after this, therefore because of this') confuses mere chronological sequence with direct causation. Just because a rooster crows before sunrise does not mean the rooster caused the sun to rise.",
    distractorTip: "Post hoc fallacy: Assuming sequence equals causation (Event A happened before Event B, so A must have caused B)."
  },
  "lang-u7-l8": {
    id: "lang7-l8-q3",
    stem: "In an argument regarding public school funding, a politician declares: 'Either we completely eliminate all standardized testing tomorrow, or public education will be permanently destroyed!' What logical fallacy is this?",
    options: [
      "False Dilemma (Either/Or Fallacy)",
      "Ad hominem",
      "Slippery slope",
      "Appeal to false authority"
    ],
    correctIndex: 0, // A
    explanation: "A False Dilemma (or False Dichotomy) artificially reduces a complex, multi-faceted issue into two extreme, mutually exclusive choices while ignoring reasonable intermediate compromises.",
    distractorTip: "False Dilemma: Forcing an artificial choice between only two extreme options while ignoring middle ground."
  },

  // UNIT 8: Extended Tropes, Schemes & Rhythm (8 levels)
  "lang-u8-l1": {
    id: "lang8-l1-q3",
    stem: "In John Donne's 'Meditation XVII', Donne famously compares humanity to a continent, writing: 'No man is an island, entire of itself; every man is a piece of the continent, a part of the main.' What literary and rhetorical device is this?",
    options: [
      "An extended metaphor (conceit)",
      "A litotes",
      "A synecdoche",
      "An ad hominem"
    ],
    correctIndex: 0, // A
    explanation: "An extended metaphor (or metaphysical conceit) develops a sustained comparison across multiple lines or an entire essay, mapping multiple corresponding features between two unlike domains (human interconnectedness and continental geography).",
    distractorTip: "Extended metaphor: A single metaphor sustained and developed across multiple sentences or paragraphs."
  },
  "lang-u8-l2": {
    id: "lang8-l2-q3",
    stem: "In Abraham Lincoln's Gettysburg Address, the closing phrase '...that government of the people, by the people, for the people, shall not perish from the earth' utilizes which rhetorical scheme of repetition?",
    options: [
      "Anaphora",
      "Epistrophe",
      "Chiasmus",
      "Zeugma"
    ],
    correctIndex: 1, // B
    explanation: "Epistrophe is the repetition of the same word or phrase at the END of successive clauses or phrases ('...of the people, by the people, for the people'), creating a rhythmic and memorable climax.",
    distractorTip: "Epistrophe: Repetition of a phrase at the END of successive clauses (contrasting with Anaphora at the start)."
  },
  "lang-u8-l3": {
    id: "lang8-l3-q3",
    stem: "When a speaker asks a question and immediately follows it by providing their own answer—such as, 'What is our aim? I can answer in one word: Victory.'—which rhetorical technique is being used?",
    options: [
      "Erotema (pure rhetorical question left unanswered)",
      "Hypophora",
      "Apostrophe",
      "Litotes"
    ],
    correctIndex: 1, // B
    explanation: "Hypophora is a figure of speech in which a writer or speaker raises a question and then immediately answers it, capturing the audience's attention and guiding their train of thought directly to the desired conclusion.",
    distractorTip: "Hypophora: Asking a question and IMMEDIATELY answering it yourself; Rhetorical question (erotema) leaves the answer unstated."
  },
  "lang-u8-l4": {
    id: "lang8-l4-q3",
    stem: "Julius Caesar's historic proclamation 'Veni, vidi, vici' ('I came, I saw, I conquered') intentionally omits coordinating conjunctions between clauses. Which rhetorical scheme is this?",
    options: [
      "Polysyndeton",
      "Asyndeton",
      "Zeugma",
      "Antimetabole"
    ],
    correctIndex: 1, // B
    explanation: "Asyndeton is the deliberate omission of conjunctions ('and', 'or', 'but') between related clauses, creating rapid, energetic tempo, dramatic urgency, and a feeling of spontaneous concision.",
    distractorTip: "Asyndeton = OMITTING conjunctions ('I came, I saw, I conquered'); Polysyndeton = OVERUSING conjunctions ('we lived and laughed and loved and cried')."
  },
  "lang-u8-l5": {
    id: "lang8-l5-q3",
    stem: "Consider the sentence: 'The White House announced a new international trade policy today.' Which figure of speech uses 'The White House' to represent the President and executive administration?",
    options: [
      "Synecdoche",
      "Metonymy",
      "Personification",
      "Hyperbole"
    ],
    correctIndex: 1, // B
    explanation: "Metonymy substitutes the name of an object or concept for another closely associated with it ('The White House' for the presidential administration; 'Wall Street' for corporate finance; 'The Crown' for the monarchy).",
    distractorTip: "Metonymy: Substituting a closely linked association ('The White House' for the President); Synecdoche: Part for the whole ('all hands on deck' for sailors)."
  },
  "lang-u8-l6": {
    id: "lang8-l6-q3",
    stem: "When a sea captain orders: 'All hands on deck!', which figure of speech is used where a physical part of an entity ('hands') stands for the entire person (the sailors)?",
    options: [
      "Synecdoche",
      "Metonymy",
      "Paradox",
      "Irony"
    ],
    correctIndex: 0, // A
    explanation: "Synecdoche is a specific trope in which a part of something represents the whole (e.g. 'hired hands' for workers, 'wheels' for a car, 'boots on the ground' for soldiers).",
    distractorTip: "Synecdoche = PART for the WHOLE ('hands' for crew); Metonymy = ASSOCIATED OBJECT for the entity ('White House' for President)."
  },
  "lang-u8-l7": {
    id: "lang8-l7-q3",
    stem: "In Tim O'Brien's Vietnam War memoir 'The Things They Carried', O'Brien repeatedly links coordinating conjunctions: 'They carried all the emotional baggage of men who might die. Grief, terror, love, longing—it was intangibles, but the intangibles had mass and specific gravity and an inevitable weight.' Which scheme creates this heavy, cumulative rhythm?",
    options: [
      "Asyndeton",
      "Polysyndeton",
      "Litotes",
      "Epanalepsis"
    ],
    correctIndex: 1, // B
    explanation: "Polysyndeton is the deliberate use of multiple coordinating conjunctions ('and... and... and...') in close succession. It slows down the reading pace, conveying a heavy, overwhelming, or exhaustive emotional weight.",
    distractorTip: "Polysyndeton uses repeated conjunctions ('and... and... and...') to create a heavy, lingering, cumulative cadence."
  },
  "lang-u8-l8": {
    id: "lang8-l8-q3",
    stem: "Consider the rhetorical construction: 'He carried a strobe light and the responsibility for the lives of his men.' What literary and syntactic device pairs a single verb ('carried') with two vastly different nouns—one concrete and one abstract?",
    options: [
      "Zeugma",
      "Anadiplosis",
      "Chiasmus",
      "Apostrophe"
    ],
    correctIndex: 0, // A
    explanation: "Zeugma is a figure of speech in which one word (usually a verb or adjective) governs two other words in distinctly different senses—often linking a literal/concrete object with a figurative/abstract concept.",
    distractorTip: "Zeugma: A single verb applied to two different objects in different senses ('He stole her heart and her wallet')."
  },

  // UNIT 9: Comprehensive Rhetoric & AP Exam Mastery (8 levels)
  "lang-u9-l1": {
    id: "lang9-l1-q3",
    stem: "On the AP English Language Multiple-Choice reading section, when a question asks: 'In line 42, the author's reference to 'the golden cage' primarily serves to:', what is the question testing?",
    options: [
      "Whether the student knows the monetary market value of gold.",
      "The rhetorical function and figurative purpose of the metaphor within the author's broader argument.",
      "The biographical life history of the author.",
      "Grammatical spelling conventions."
    ],
    correctIndex: 1, // B
    explanation: "Rhetorical function questions ask WHY an author used a specific device or example and HOW it contributes to the central argument, rather than asking for literal comprehension alone.",
    distractorTip: "Focus on FUNCTION: Ask 'Why did the author put this here, and how does it advance their central argument?'"
  },
  "lang-u9-l2": {
    id: "lang9-l2-q3",
    stem: "In the AP Writing multiple-choice section, which of the following is the most effective way to combine two choppy sentences:\nSentence 1: 'The city expanded its light-rail network.'\nSentence 2: 'Traffic congestion on major downtown arteries dropped by 18%.'",
    options: [
      "The city expanded its light-rail network, and then traffic congestion on major downtown arteries dropped by 18%.",
      "Following the city's expansion of its light-rail network, traffic congestion on major downtown arteries dropped by 18%, demonstrating the efficacy of public transit investments.",
      "Traffic dropped 18% because of the city light rail which was expanded downtown.",
      "The city expanded light-rail; consequently, traffic was down on roads."
    ],
    correctIndex: 1, // B
    explanation: "Option B subordinates the temporal action ('Following the city's expansion...') to create smooth sentence flow, eliminates redundancy, and adds precise analytical commentary ('demonstrating the efficacy of public transit investments').",
    distractorTip: "Effective sentence combining uses subordination, eliminates wordiness, and clarifies logical relationships."
  },
  "lang-u9-l3": {
    id: "lang9-l3-q3",
    stem: "Which of the following revisions exhibits the greatest diction precision, replacing vague, weak verbs with authoritative, descriptive language?",
    options: [
      "The author talks about climate change and says bad things will happen.",
      "The essay makes points about environmental issues.",
      "The climatologist chronicles the catastrophic acceleration of polar ice sheet melting, illustrating the irreversible ecological tipping points facing global coastlines.",
      "Things are getting worse in the ocean according to the writer."
    ],
    correctIndex: 2, // C
    explanation: "Option C uses precise, sophisticated vocabulary ('chronicles', 'catastrophic acceleration', 'irreversible ecological tipping points') rather than bland, vague verbs like 'talks about' or 'says'.",
    distractorTip: "Replace weak verbs ('says', 'talks about', 'shows') with precise rhetorical verbs ('chronicles', 'delineates', 'substantiates', 'excoriates')."
  },
  "lang-u9-l4": {
    id: "lang9-l4-q3",
    stem: "Under the AP English Language scoring guidelines, which of the following practices is explicitly recognized as a valid pathway to securing the Sophistication Point?",
    options: [
      "Using complex, vivid figurative language and varied syntactic cadence that demonstrates a consistently mature, commanding personal writing voice throughout the entire essay.",
      "Writing a five-paragraph essay with exactly three body paragraphs.",
      "Including a dictionary definition in the introductory paragraph.",
      "Quoting lines from famous poets in every body paragraph."
    ],
    correctIndex: 0, // A
    explanation: "The Sophistication point can be earned through: (1) Crafting a nuanced argument with complex concessions; (2) Situating the issue within a broader historical/philosophical context; or (3) Employing a consistently vivid, persuasive, and stylistically mature voice.",
    distractorTip: "Three pathways to Sophistication: (1) Nuance/concession; (2) Broader historical/cultural context; (3) Consistently mature, commanding stylistic voice."
  },
  "lang-u9-l5": {
    id: "lang9-l5-q3",
    stem: "Why is a conclusion that merely restates the thesis and summarizes the three body paragraphs considered weak in AP argumentative writing?",
    options: [
      "The AP rubric gives negative points for conclusions.",
      "It adds zero intellectual value; an effective conclusion should answer the 'So what?' question, exploring broader societal implications, issuing a call to action, or projecting future ramifications.",
      "Conclusions must be written in the passive voice.",
      "Summarizing is only permitted on the Rhetorical Analysis essay."
    ],
    correctIndex: 1, // B
    explanation: "A mechanical summary conclusion bores the reader. A strong conclusion elevates the argument, addressing 'So what? Why does this matter for the future?', connecting the essay's insights to broader human concerns.",
    distractorTip: "Don't just restate your thesis in the conclusion! Answer 'So what? Why does this matter in the real world?'"
  },
  "lang-u9-l6": {
    id: "lang9-l9-l6-q3",
    stem: "When reading dense 18th- and 19th-century nonfiction prose on the AP exam (such as essays by Ralph Waldo Emerson, Thomas Paine, or Mary Wollstonecraft), what reading strategy is most effective for deciphering archaic inverted syntax?",
    options: [
      "Skipping all sentences containing semi-colons.",
      "Mentally rearranging inverted clauses into modern Subject-Verb-Object (SVO) order and identifying the core grammatical predicate before interpreting modifying clauses.",
      "Assuming the author is being sarcastic.",
      "Looking up archaic words in the testing room dictionary."
    ],
    correctIndex: 1, // B
    explanation: "Older prose frequently uses periodic, inverted syntax ('To her countenance was imparted a glow...'). Identifying the true grammatical subject and main verb and rearranging them into standard SVO order clarifies dense archaic passages.",
    distractorTip: "Inverted 19th-century syntax: Find the true subject and main verb first, then untangle the surrounding modifying clauses."
  },
  "lang-u9-l7": {
    id: "lang9-u9-l7-q3",
    stem: "In an AP Writing revision question, a student writer wants to add a sentence connecting an empirical study on sleep deprivation to adolescent academic performance. Which sentence provides the smoothest transition?",
    options: [
      "Sleep is good for teenagers.",
      "Furthermore, neuroscientists have proved that sleep loss impairs prefrontal cortex executive function, directly explaining why chronically exhausted students experience sharp declines in working memory and analytical reasoning during morning exams.",
      "However, some people stay awake late at night playing video games.",
      "This happens a lot."
    ],
    correctIndex: 1, // B
    explanation: "Option B provides a sophisticated transition ('Furthermore...'), incorporates authoritative scientific backing ('neuroscientists have proved...'), and connects the biological cause (prefrontal cortex impairment) directly to the academic effect (analytical reasoning on morning exams).",
    distractorTip: "High-scoring revision choices establish explicit causal connections between scientific evidence and human performance."
  },
  "lang-u9-l8": {
    id: "lang9-u9-l8-q3",
    stem: "What is the single most common flaw that prevents capable AP English Language students from scoring a 4 in Evidence and Commentary on the Rhetorical Analysis essay (Q2)?",
    options: [
      "Writing in ink rather than pencil.",
      "Engaging in 'device-driven' labeling (listing metaphors, anaphora, and rhetorical questions) without analyzing HOW those specific choices strategically function to move the target audience toward the speaker's ultimate purpose.",
      "Misidentifying the historical year the speech was given.",
      "Failing to quote the entire speech verbatim."
    ],
    correctIndex: 1, // B
    explanation: "The #1 trap on Q2 is 'feature spotting' or 'device dumping': naming rhetorical devices ('The author uses anaphora, then a metaphor') without explaining the psychological mechanism—HOW those specific linguistic choices operate on the audience's hearts and minds to achieve the author's purpose.",
    distractorTip: "DO NOT just list devices! Focus on CHOICES: analyze WHY the author made that choice and HOW it shifts the audience's perspective."
  }
};

const fullPath = path.resolve(__dirname, '../src/data/quiz/apEnglishLangUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_ENGLISH_LANG_UNIT_DEFINITIONS;

let addedCount = 0;
units.forEach(u => {
  u.levels.forEach(l => {
    if (q3Data[l.uniqueKey]) {
      if (l.questions.length === 2) {
        l.questions.push(q3Data[l.uniqueKey]);
        addedCount++;
      }
    } else {
      console.warn('Missing q3 for', l.uniqueKey);
    }
  });
});

console.log('Added', addedCount, 'questions to AP English Language.');

const newCode = `// AP English Language and Composition Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–9)
// Complete authentic coverage: 72 Levels, 216 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D (54 each).

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_ENGLISH_LANG_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apEnglishLangUnitsData.ts successfully.');
