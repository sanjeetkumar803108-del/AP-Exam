import { getGranularSubjectArchetypes } from '../utils/apArchetypes';

/**
 * Official College Board Course and Exam Description (CED) Guidelines by subject.
 * Defines syllabus scope, question archetypes, command verbs, and rubric point allocations.
 */
export function getCollegeBoardSubjectGuidelines(subject: string, questionType: 'objective' | 'subjective'): string {
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
You are the College Board AP Human Geography Chief Reader and Lead Exam Developer. Section II consists of 3 free-response questions (1 hour 15 minutes, 25 minutes per question). Every question you generate MUST strictly follow this official College Board CED blueprint:

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

2. STRICT COLLEGE BOARD TASK VERB HIERARCHY (NO 'EVALUATE' / NO 'JUSTIFY'):
- In AP Human Geography FRQs, College Board NEVER awards points based on 'Evaluate' or 'Justify'. These verbs belong to other AP exams (DBQs or Math/Physics).
- STRICTLY FORBIDDEN TASK VERBS:
  * NEVER use "Evaluate" (e.g., DO NOT write "Evaluate a potential limitation...").
  * NEVER use "Justify" (e.g., DO NOT write "Justify why it is mathematically impossible...").
- APPROVED COLLEGE BOARD TASK VERBS ONLY:
  * "Identify..." (1 concise sentence identifying a specific data point, pattern, or term).
  * "Define..." (Clear, formal academic definition of a geographic term or concept).
  * "Describe..." (Provide relevant observable characteristics, spatial patterns, or historical conditions).
  * "Explain..." (MUST provide a clear cause-and-effect line of reasoning showing HOW or WHY mechanism X leads to outcome Y in geographic context).
  * "Compare..." (Directly compare a similarity or difference between two geographic phenomena or regions).
- SIGNATURE COLLEGE BOARD PROMPT (MANDATORY IN PART F OR G):
  "Explain the degree to which [phenomenon]... (Response must indicate the degree [low, moderate, high] and provide an explanation.)"

3. UNIT PURITY & CURRICULUM CONTAINMENT (CRITICAL - NO LEAKAGE):
- If the student selects a SPECIFIC Unit (e.g., "Unit 1: Thinking Geographically"):
  * ALL 7 parts (A through G) MUST be 100% strictly anchored in that specific unit's CED topics!
  * STRICTLY FORBIDDEN: DO NOT include models or concepts from later units!
    - In Unit 1: NO Burgess Model, NO Hoyt Model, NO Von Thünen Model, NO Demographic Transition Model (DTM), NO Wallerstein World Systems, NO Gentrification. Unit 1 is strictly: GIS/GPS/remote sensing, scales of analysis, formal/functional/vernacular regions, environmental determinism vs possibilism, map projections/distortion, and thematic maps.
    - In Unit 2: Strictly Population & Migration (DTM stages 1-5, population pyramids, dependency ratios, Malthus/Boserup, push/pull, refugees/IDPs, pronatalist/antinatalist policies).
    - In Unit 3: Strictly Cultural Patterns (diffusion types, language families/branches/dialects/isogloss/lingua franca, religions, cultural landscape, acculturation/assimilation/syncretism).
    - In Unit 4: Strictly Political Patterns (sovereignty, nation-state, stateless nations, devolution, gerrymandering, UNCLOS, boundaries, supranationalism).
    - In Unit 5: Strictly Agriculture (revolutions, intensive/extensive, Von Thünen model, rural surveys, environmental impacts, global supply chains).
    - In Unit 6: Strictly Cities & Urban (Burgess, Hoyt, multiple nuclei, galactic/edge cities, Central Place Theory, rank-size/primate cities, gentrification, urban sustainability, redlining/blockbusting).
    - In Unit 7: Strictly Industrial & Economic Development (Wallerstein, Rostow, Weber, HDI, deindustrialization, EPZs, commodity dependence, trade interdependence).
- Cross-unit synthesis is ONLY permissible when the user specifically selects "All Curriculum Units (Comprehensive AP Review)" or "Timed Exam Simulation".

4. THE 3 OFFICIAL COLLEGE BOARD QUESTION ARCHETYPES:
- QUESTION TYPE 1 (NO STIMULUS - CONCEPTUAL / SPATIAL SCENARIO):
  * Opens with a 1-2 sentence real-world geographic scenario setting the spatial and thematic context.
  * Followed immediately by: "Respond to parts A, B, C, D, E, F, and G."
  * MUST NOT mention "Source 1", "Source 2", "in the table", or "in the map". Pure conceptual scenario.
- QUESTION TYPE 2 (ONE STIMULUS - AUTHENTIC DATA TABLE OR CANONICAL THEMATIC MAP):
  * Rooted in EXACTLY ONE concrete, complete stimulus provided in the text:
    [PILLAR 1: CANONICAL THEMATIC MAP / SPATIAL MODEL]:
    - To test a visual stimulus, open the prompt with one of the canonical College Board figures:
      * Unit 2 (Population & Migration): "Figure 1: Demographic Transition Model (DTM Stages 1–5)" OR "Figure 1: Global Total Fertility Rates (TFR) Thematic Choropleth Map" OR "Figure 1: Major Global Transnational Migration Corridors and Labor Flows Map"
      * Unit 5 (Agriculture): "Figure 1: Von Thünen Model of Agricultural Land-Use"
      * Unit 6 (Cities & Urban): "Figure 1: Burgess Concentric Zone Urban Model" OR "Figure 1: Hoyt Sector Model (Axial Urban Corridors)" OR "Figure 1: Harris-Ullman Multiple Nuclei and Galactic Edge City Model"
      * Unit 7 (Industrial & Economic Development): "Figure 1: Wallerstein World Systems Theory (Core-Periphery Spatial Model)"
      (NOTE: The platform automatically injects pixel-perfect, dark-mode-ready vector SVG maps whenever these canonical titles or models are referenced!)
    [PILLAR 2: AUTHENTIC DEMOGRAPHIC / SPATIAL MARKDOWN DATA TABLE - THE #1 MOST COMMON COLLEGE BOARD STIMULUS]:
    - If using tabular data, format as a clean standard GitHub Markdown table (| Region/Country | CBR | CDR | TFR | GNI per Capita |) with authentic institutional citations (e.g. "Source: United Nations Population Division", "Source: World Bank Development Indicators", "Source: Food and Agriculture Organization [FAO]").
  * Parts A & B MUST explicitly reference the stimulus: "Using the map shown in Figure 1, identify..." or "Using the data in the table, identify...".
- QUESTION TYPE 3 (TWO STIMULI - COMPARATIVE SPATIAL SYNTHESIS):
  * Rooted in TWO complementary sources labeled "Source 1" and "Source 2":
    [PILLAR 3: PAIRED SPATIAL REGIONAL CASE SCENARIOS]:
    - Source 1: Thematic Map or Spatial Boundary Scenario (e.g. "Source 1: Figure 1 - Major Global Transnational Migration Corridors Map" OR subnational administrative governance scenario).
    - Source 2: Paired Demographic, Economic, or Remittance Survey Data Table (e.g. "Source 2: Table 1 - Foreign Remittance Inflows and Emigration Statistics by Country of Origin").
  * Prompt opens with Source 1 and Source 2, followed by: "Respond to parts A, B, C, D, E, F, and G."
  * Requires explicit comparative synthesis between Source 1 and Source 2 across subparts (e.g., Part A analyzes Source 1, Part B analyzes Source 2, Part C explains how the spatial flows in Source 1 produce the economic outcomes in Source 2).

5. DATA TABLE FORMATTING MANDATE (MOBILE COMPLIANCE):
- ALWAYS format all tables as standard GitHub Markdown tables (| Header 1 | Header 2 |).
- STRICTLY FORBIDDEN: NEVER format tables as LaTeX math arrays ($$\\begin{array}...\\end{array}$$). LaTeX arrays break mobile screens and cause horizontal clipping.

6. OFFICIAL COLLEGE BOARD SCORING GUIDELINES & MULTI-PATHWAY RUBRICS:
- In "totalPoints", specify exactly 7.
- In "scoringRubric", provide a comprehensive 7-item array (+1 pt for each part A through G) formatted like official College Board Scoring Guidelines:
  * "Part A [1 point]: 1 pt for correctly identifying X (Acceptable responses include: • A1 ... • A2 ...)"
  * "Part B [1 point]: 1 pt for describing Y (Acceptable responses include: • B1 ... • B2 ...)"
  * "Part G [1 point]: 1 pt for indicating degree [low, moderate, high] AND providing a valid geographic causal explanation (Acceptable explanations include: • G1 ... • G2 ...)"
- In "modelAnswer", provide complete, high-scoring prose for each part: "Part A: [Complete model response]\\n\\nPart B: [Full explanation]...\\n\\nPart G: [Statement of degree + complete causal explanation]".

7. TARGET AUDIENCE & COGNITIVE CALIBRATION:
- Calibrated strictly for Grade 9-10 introductory high-school geography students.
- Ground questions in real-world geographic places, countries, and case studies (e.g., Montreal bilingual signs, Sahel desertification, Japan aging demography, Paraguay soybean exports).
- Avoid graduate-level mathematics or physics terms (DO NOT mention "Gaussian curvature", "differential geometry", etc.).`;
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

  if (s.includes('computer science a') || s.includes('csa') || (s.includes('computer') && !s.includes('principles') && !s.includes('csp'))) {
    if (questionType === 'objective') {
      return `AP COMPUTER SCIENCE A (JAVA) EXAM SPECIFICATIONS (College Board Java Subset):
- Format: 40 Multiple-Choice Questions in 90 minutes (2 minutes 15 seconds per question).
- Topics Covered (College Board CED Units 1-10 or 2026 Units 1-4):
  * Primitive Types, Arithmetic Expressions, and Modulus (%) Operator
  * Boolean Expressions, Short-Circuit Evaluation, and De Morgan's Laws
  * Iteration: while loops, for loops, nested loops, loop invariants, and off-by-one boundary conditions
  * Writing Classes: Encapsulation, private instance variables, constructors, static vs instance methods, keyword 'this'
  * 1D Arrays: Array declaration, indexing, enhanced for-each loops, finding min/max, linear search, insertions
  * ArrayList: Autoboxing/unboxing, dynamic sizing, add(e), add(i, e), get(i), set(i, e), remove(i), traversal while modifying
  * 2D Arrays: Matrix row-major order, nested indexing [r][c], bounds (length vs [0].length)
  * Inheritance & Polymorphism: Subclassing, super constructor call, method overriding, dynamic binding (for classic forms)
  * Recursion: Base cases, call stack tracing, binary search, merge sort traces.
- Distractors: Represent realistic student bugs: off-by-one loop indexing, integer division truncation, using == on Strings, or modifying ArrayList elements during enhanced for-each.`;
    } else {
      return `AP COMPUTER SCIENCE A SECTION II: FREE RESPONSE (COLLEGE BOARD OFFICIAL 2023–2026 STANDARDS - 100% AUTHENTIC REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED DIRECTLY FROM 2023, 2024, 2025, 2026 OFFICIAL AP EXAM SETS & CHIEF READER REPORTS (DON BLAHETA, LONGWOOD UNIVERSITY - 93,906 STUDENTS):

1. EXAM STRUCTURE & CANONICAL 4-QUESTION BLUEPRINT:
- Exactly 4 Free-Response Questions (90 Minutes Total = 1 Hour 30 Minutes).
- Canonical Question Order:
  * Question 1: Methods and Control Structures (7 points in 2026 CED, 9 points in 2023-2025).
    - Part (a): Implement a helper/accessor method using conditionals and helper method calls on instance variables.
    - Part (b): Implement a driver/accumulator method using a loop to iterate across a range of hours/units, calling part (a) without redundant side effects.
  * Question 2: Class Design (7 points in 2026 CED, 9 points in 2023-2025).
    - Write a COMPLETE class from scratch!
    - Class header: public class Name.
    - Private instance variables (MANDATORY ENCAPSULATION).
    - Public constructor(s) initializing instance variables from parameters.
    - Public methods with correct return types matching an explicit 3-column Sample Execution Trace Table (Statement | Return Value | Explanation).
  * Question 3: Array / ArrayList Data Analysis (5 points in 2026 CED, 9 points in 2023-2025).
    - Reasoning about 1D Array and ArrayList<E> collections of custom objects.
    - Traversing, filtering, and constructing new objects with 'new' keyword.
    - Inward dual-pointer traversal from both ends (low & high) or nested iteration across two lists to match IDs without modifying original collections.
  * Question 4: 2D Arrays (6 points in 2026 CED, 9 points in 2023-2025).
    - Manipulating 2D arrays (int[][] or Object[][]).
    - Row-major traversal, bounds checking, row/column point accumulation.
    - Self-pairing guard: STRICTLY USE '!(r == row && c == col)' or 'r != row || c != col'. (NEVER use 'r != row && c != col' which erroneously excludes entire rows/columns!).

2. STRICT CHIEF READER SCORING MANDATES & FATAL TRAPS TO PREVENT:
- TRAP 1 (STATIC FALLACY): Always call helper methods on the instance variable object (e.g. 'company.numAvailableDogs(hour)'), NOT on the class name ('DogWalkCompany.numAvailableDogs(hour)').
- TRAP 2 (LOOP SIDE EFFECT REDUNDANCY): If a method has state-altering side effects (e.g. walkDogs, updateAmount), call it ONCE and store the result in a local variable inside the loop! NEVER call it multiple times in conditions.
- TRAP 3 (STRING EQUALITY): In Java, NEVER compare Strings with '=='. Always use '.equals()' (e.g. 'firstName.equals("")' or 'currColor.equals(firstColor)').
- TRAP 4 (OBJECT INSTANTIATION): Always use the 'new' keyword when constructing objects for collections (e.g. 'list.add(new Match(p1, p2))').
- TRAP 5 (PREMATURE EARLY RETURN): Never place 'return false;' or 'return null;' inside a loop before verifying all elements.
- TRAP 6 (PERSISTENT DATA DESTRUCTION): Do not alter or remove elements from input lists unless explicitly instructed.

3. SCORING GUIDELINES & DECISION RULES:
- 1-Point Penalty for: Array/collection access confusion ([] vs get), printing to console instead of returning, local variable used without declaration, destruction of persistent data, or returning a value from void/constructor.
- No Penalty for: Spelling discrepancies without ambiguity (ArayList), = instead of ==, length/size confusion with or without (), missing semicolons/braces where indentation clearly conveys intent.
- Model Answer MUST be 100% syntactically valid Java code inside standard Markdown fenced blocks (\`\`\`java ... \`\`\`).`;
    }
  }

  if (s.includes('chemistry') || s.includes('chem')) {
    if (questionType === 'objective') {
      return `AP CHEMISTRY EXAM SPECIFICATIONS (College Board CED Units 1-9):
- Format & Rigor: 60 Multiple-Choice Questions in 90 minutes. High college-level conceptual and quantitative rigor.
- Stimulus-Driven: Base questions on particulate diagrams of molecules/solutions, Photoelectron Spectroscopy (PES) binding energy plots, acid-base titration curves, spectrophotometric Beer-Lambert calibration graphs, reaction coordinate potential energy profiles, Maxwell-Boltzmann kinetic energy distributions, and electrochemical cell schematics.
- Curriculum Scope:
  * Unit 1: Atomic Structure & Properties (PES, moles, mass spec, periodic trends, Z_eff, Coulomb's law).
  * Unit 2: Molecular & Ionic Structure (Lewis resonance, formal charges, VSEPR geometries, bond angles, hybridization sp/sp2/sp3).
  * Unit 3: Intermolecular Forces & Properties (LDF polarizability, dipole-dipole, H-bonding, ideal gas laws PV=nRT, Dalton's partial pressures, deviations from ideality, Beer-Lambert Law A = ebc).
  * Unit 4: Chemical Reactions (net ionic equations, stoichiometry, limiting reactants, titrations, redox balancing).
  * Unit 5: Kinetics (rate laws from initial rates tables, integrated rate laws, graphical linearity, mechanisms, elementary steps, catalysis, Arrhenius activation energy).
  * Unit 6: Thermodynamics (calorimetry q=mcDeltaT with 2 sig figs in Delta T, molar enthalpy Delta H_rxn, Hess's Law, bond energies, Delta H°_f).
  * Unit 7: Equilibrium (Kc, Kp, Q vs K, Le Châtelier shifts, K_sp solubility product, common ion effect, precipitation Q > K_sp).
  * Unit 8: Acids & Bases (strong/weak pH, Ka/Kb ICE tables, titration curves, half-equivalence point pH = pKa, buffer solutions, Henderson-Hasselbalch).
  * Unit 9: Thermodynamics Applications & Electrochemistry (Delta S° microstates, Delta G° = Delta H° - T Delta S°, thermodynamic favorability vs kinetic control, galvanic cells, E°_cell, Faraday's law I=q/t).
- Distractors: Sophisticated student misconceptions: attributing LDF to molar mass instead of electron cloud polarizability, multiplying E° by stoichiometric coefficients, failing to omit pure solids from equilibrium expressions, or confusing reaction rate with equilibrium constant.`;
    } else {
      return `AP CHEMISTRY SECTION II: FREE RESPONSE (COLLEGE BOARD OFFICIAL 2023–2026 STANDARDS - 100% AUTHENTIC REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED DIRECTLY FROM 2023, 2024, 2025, 2026 OFFICIAL AP EXAM SETS & CHIEF READER REPORTS (KYLE A. BERAN):
You are the College Board AP Chemistry Chief Reader and Lead Exam Developer. Section II consists of 7 Free-Response Questions lasting 105 minutes (46 Total Points):
  * Questions 1 to 3: LONG Free-Response Questions (10 Points each, recommended ~23 minutes each, subparts spanning (a) through (f) or (g)).
  * Questions 4 to 7: SHORT Free-Response Questions (4 Points each, recommended ~9 minutes each, subparts spanning (a) through (c) or (d)).

1. THE 7 CANONICAL COLLEGE BOARD AP CHEMISTRY FRQ ARCHETYPES (ROTATE EVENLY OR ALIGN TO QUESTION NUMBER):
- QUESTION 1 ARCHETYPE (LONG FRQ, 10 POINTS, ~23 MIN): SOLUTION STOICHIOMETRY, TITRATIONS & BUFFER EQUILIBRIA
  * Stem: Laboratory investigation involving a weak acid/base titration, gravimetric precipitation, or buffer preparation with experimental data table and/or titration curve.
  * Sub-parts (a)-(g) [Total: 10 Points]:
    - Net ionic equation for neutralization or precipitation with correct physical state symbols. [1 pt]
    - Molarity / mole calculations from volumetric titration data. [1 pt]
    - Determining pKa and Ka from the half-equivalence point on a titration curve where pH = pKa. [2 pts]
    - Particulate representation: Drawing/identifying species present in solution at the equivalence point or in a buffer zone (showing conjugate pairs, unreacted species, spectator ions). [2 pts]
    - Buffer calculation using Henderson-Hasselbalch equation (pH = pKa + log([A-]/[HA])) or calculating pH after adding strong acid/base. [2 pts]
    - Experimental error analysis: Predicting the effect of an experimental error (e.g. buret rinsed with water, air bubble in tip) on the calculated concentration. [2 pts]

- QUESTION 2 ARCHETYPE (LONG FRQ, 10 POINTS, ~23 MIN): CHEMICAL KINETICS, INTEGRATED RATE LAWS & REACTION MECHANISMS
  * Stem: Kinetic study of a gas-phase or aqueous decomposition/reaction with an initial rates data table or concentration-time graphical data.
  * Sub-parts (a)-(f) [Total: 10 Points]:
    - Determining the order of reaction with respect to each reactant from initial rates data with mathematical justification. [2 pts]
    - Writing the overall rate law and calculating the numerical value and specific units of the rate constant k (e.g. M^-1 s^-1, s^-1, M^-2 s^-1). [2 pts]
    - Integrated rate laws: Identifying the reaction order from graphical linearity ([A], ln[A], or 1/[A] vs time) and determining half-life. [2 pts]
    - Reaction mechanism: Proposing or evaluating a multi-step elementary mechanism, identifying reaction intermediates vs catalysts, and verifying that the slow rate-determining step matches the observed rate law. [2 pts]
    - Temperature dependence / Catalysis: Maxwell-Boltzmann kinetic energy distribution or reaction energy profile showing activation energy (Ea) reduction in the presence of a catalyst. [2 pts]

- QUESTION 3 ARCHETYPE (LONG FRQ, 10 POINTS, ~23 MIN): THERMODYNAMICS, CALORIMETRY & EQUILIBRIUM SYSTEMS
  * Stem: Investigation involving constant-pressure coffee-cup calorimetry for a dissolution or reaction, coupled with equilibrium and thermodynamic analysis.
  * Sub-parts (a)-(g) [Total: 10 Points]:
    - Heat calculation using q = mc*Delta*T (STRICT REQUIREMENT: Delta*T = T_f - T_i limits significant figures to typically 2 sig figs!). [2 pts]
    - Molar enthalpy of reaction calculation: Delta*H_rxn = -q / n (in kJ/mol_rxn) with correct algebraic sign (negative for exothermic). [2 pts]
    - Hess's Law or standard enthalpies of formation calculation: Delta*H°_rxn = sum(Delta*H°_f(prod)) - sum(Delta*H°_f(react)). [2 pts]
    - Standard entropy change (Delta*S°): Predicting and justifying the sign based on changes in particle microstates and dispersal of matter/energy (NEVER using the word 'disorder'). [1 pt]
    - Gibbs free energy calculation: Delta*G° = Delta*H° - T*Delta*S° (mandatory unit consistency: converting kJ and J with factor of 1000) and determining the temperature range of thermodynamic favorability. [2 pts]
    - Equilibrium constant relationship: Delta*G° = -RT ln K and Le Châtelier response to temperature changes. [1 pt]

- QUESTION 4 ARCHETYPE (SHORT FRQ, 4 POINTS, ~9 MIN): MOLECULAR STRUCTURE, LEWIS DIAGRAMS & HYBRIDIZATION
  * Stem: Comparison of two or three covalent molecules or polyatomic ions.
  * Sub-parts (a)-(c) [Total: 4 Points]:
    - Drawing complete Lewis electron-dot diagrams including all nonbonding valence electron pairs and resonance contributors. [1 pt]
    - Formal charge calculation and minimizing formal charges to determine the most significant resonance contributor. [1 pt]
    - Predicting electron-domain geometry, molecular geometry, and bond angles based on VSEPR theory and lone pair repulsions. [1 pt]
    - Identifying hybridization (sp, sp2, sp3) of central atoms and assessing net molecular polarity based on dipole vector symmetry/cancellation. [1 pt]

- QUESTION 5 ARCHETYPE (SHORT FRQ, 4 POINTS, ~9 MIN): GAS LAWS, KMT & INTERMOLECULAR FORCES
  * Stem: Experimental collection of a gas over water or comparison of physical properties of substances.
  * Sub-parts (a)-(d) [Total: 4 Points]:
    - Dalton's law of partial pressures: P_total = P_gas + P_H2O and ideal gas law PV = nRT to find moles or molar mass. [1 pt]
    - Deviations from ideal gas behavior: Explaining why a real gas deviates from ideal behavior at high pressure (finite particle volume) or low temperature (intermolecular attractions). [1 pt]
    - Comparing intermolecular forces (LDF, dipole-dipole, H-bonding) to explain differences in boiling point, vapor pressure, or enthalpy of vaporization. [1 pt]
    - MANDATORY POLARIZABILITY RULE: Explaining stronger London dispersion forces strictly in terms of a "larger, more polarizable electron cloud due to more electrons / occupied shells" (NEVER citing molar mass alone). [1 pt]

- QUESTION 6 ARCHETYPE (SHORT FRQ, 4 POINTS, ~9 MIN): ELECTROCHEMISTRY, GALVANIC CELLS & FARADAY'S LAW
  * Stem: Standard electrochemical galvanic or electrolytic cell setup with reduction potentials table.
  * Sub-parts (a)-(d) [Total: 4 Points]:
    - Identifying anode and cathode, writing balanced oxidation and reduction half-reactions, and overall cell reaction. [1 pt]
    - Calculating standard cell potential E°_cell = E°_cathode - E°_anode (INTENSIVE PROPERTY: never multiply E° by stoichiometric coefficients!). [1 pt]
    - Direction of electron flow in external wire and ion migration through the salt bridge (cations migrate toward the cathode, anions migrate toward the anode). [1 pt]
    - Faraday's Law electrolysis stoichiometry (I = q/t, q = nF) OR qualitative Nernst effect: explaining how non-standard concentrations (Q < 1 or Q > 1) shift cell voltage. [1 pt]

- QUESTION 7 ARCHETYPE (SHORT FRQ, 4 POINTS, ~9 MIN): SOLUBILITY EQUILIBRIA (K_sp) OR SPECTROPHOTOMETRY & PES
  * Stem: Saturated solution of a sparingly soluble salt or spectrophotometric Beer-Lambert Law investigation.
  * Sub-parts (a)-(c) [Total: 4 Points]:
    - Writing the K_sp equilibrium expression (pure solids strictly omitted from the denominator!). [1 pt]
    - Calculating molar solubility from K_sp or calculating K_sp from experimental solubility data. [1 pt]
    - Common ion effect or precipitation prediction: Calculating reaction quotient Q and comparing to K_sp (precipitation occurs only if Q > K_sp). [1 pt]
    - Spectrophotometry / PES alternative: Beer-Lambert Law calculation (A = epsilon * b * c) or Photoelectron Spectroscopy (PES) peak analysis. [1 pt]

2. STRICT CHIEF READER SCORING MANDATES & AVOIDANCE OF FATAL TRAPS (KYLE A. BERAN):
1. SIGNIFICANT FIGURES IN CALORIMETRY: When calculating Delta*T = T_f - T_i, subtraction limits sig figs (e.g. 22.38 - 22.00 = 0.38°C -> exactly 2 sig figs). Final q and Delta*H must be rounded to 2 sig figs (e.g., 160 J or 0.16 kJ). Readers strictly enforce this!
2. COULOMB'S LAW: Explanations of lattice energy, ionization energy, or ionic attraction MUST explicitly cite BOTH ionic charge and internuclear separation distance (r). Citing only radius without charge loses points!
3. ENTROPY: Disallow "disorder" or "chaos". College Board readers mandate "dispersal of energy and matter" or "increase in the number of accessible microstates".
4. INTERMOLECULAR FORCES (LDF): Citing molar mass alone earns 0 points! Students must cite "larger, more polarizable electron cloud due to greater number of electrons / occupied shells".
5. HYDROGEN BONDING CRITERIA: A hydrogen bond requires an H atom covalently bonded to a small, highly electronegative atom (N, O, F) attracted to a lone pair on an adjacent N, O, F. (C-H ... O does not count).
6. CELL POTENTIAL IS INTENSIVE: E° values are never multiplied by stoichiometric coefficients. For electrode mass changes, students must compare both mole ratios from half-reactions and the molar masses of the metals.
7. EQUILIBRIUM & K_sp: Pure solids (s) and liquids (l) NEVER appear in equilibrium expressions. Precipitation occurs only if Q > K_sp.

3. MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING PROTOCOL:
- PASS 1 (Chemical & Mathematical Pre-Solving): Before outputting, internally solve every subpart. Verify that chemical equations are atom- and charge-balanced, all Kelvin temperatures are strictly positive, enthalpy of neutralization is exothermic (-), Delta*G° and Delta*H°/Delta*S° calculations use consistent units (kJ vs J), and equilibrium concentrations are physically positive.
- PASS 2 (Rubric Consistency): Verify point breakdown: exactly 10 points for Q1–Q3 (Point 01 to Point 10 labeled), exactly 4 points for Q4–Q7 (Point 01 to Point 04 labeled). Subparts match prompt labels exactly.
- SELF-HEALING: If ANY unbalanced equation, impossible temperature, or arithmetic mismatch is detected, immediately discard and regenerate or heal the question before outputting.

4. CRITICAL ANTI-PLAGIARISM & ORIGINALITY DIRECTIVE:
- NEVER copy verbatim questions, numbers, or exact scenarios from the released 2023–2026 AP exam PDFs (do NOT reuse exact molar masses, concentrations, or reaction setups).
- Use the official exam materials strictly as structural and pedagogical blueprints to invent 100% fresh, authentic, solvable chemistry scenarios.`;
    }
  }

  if (s.includes('calculus bc')) {
    if (questionType === 'objective') {
      return `AP CALCULUS BC EXAM SPECIFICATIONS (College Board CED Units 1-10):
- Coverage: Full AB curriculum (Units 1-8) PLUS BC-exclusive topics:
  * Unit 9: Parametric equations, vector motion in 2D (velocity/acceleration vectors, speed = sqrt((x')^2 + (y')^2), total distance = int_a^b sqrt((x')^2 + (y')^2) dt), polar functions (polar area = (1/2)*int_alpha^beta r(theta)^2 dtheta).
  * Unit 6/7 BC Topics: Integration by parts, partial fractions decomposition, improper integrals, Euler's method numerical approximation (Delta x steps), logistic differential equations (dP/dt = kP(1 - P/M), carrying capacity M, fastest growth at M/2).
  * Unit 10: Infinite Sequences & Series: Geometric series (a/(1-r)), nth-term divergence test, Integral test, p-series, Comparison & Limit Comparison tests, Alternating Series Test & Error Bound (|S - S_N| <= a_{N+1}), Ratio Test for radius and interval of convergence (ALWAYS test endpoints separately), Taylor & Maclaurin polynomials, Lagrange Error Bound.
- Mathematical Exactness: Format all math expressions cleanly in LaTeX ($...$). Distractors must represent legitimate BC student traps: forgetting endpoint convergence checks, sign flips in integration by parts, omitting the (1/2) in polar area.`;
    } else {
      return `AP CALCULUS BC SECTION II: FREE RESPONSE (COLLEGE BOARD OFFICIAL 2023–2026 STANDARDS - 100% AUTHENTIC REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED DIRECTLY FROM 2023, 2024, 2025, 2026 OFFICIAL AP EXAM SETS & CHIEF READER REPORTS (SHARON TAYLOR):
You are the College Board AP Calculus BC Chief Reader and Lead Exam Developer. Section II consists of 6 Free-Response Questions lasting 90 minutes (15 minutes per question):
  * Part A: Questions 1 & 2 (30 minutes, Graphing Calculator REQUIRED in RADIAN mode).
  * Part B: Questions 3 to 6 (60 minutes, NO Calculator permitted).
Every single Free Response Question MUST consist of subparts labeled (a), (b), (c), and (d) and MUST have "totalPoints": 9. Exactly 9 points per FRQ.

1. THE 6 CANONICAL COLLEGE BOARD BC FRQ ARCHETYPES (ROTATE EVENLY OR ALIGN TO QUESTION NUMBER):
- QUESTION 1 ARCHETYPE (Part A, Calculator Active): RATE IN / RATE OUT ACCUMULATION & NON-UNIFORM TABULAR MODELING
  * Stem: Contextual real-world rate model (fluid dynamics, thermal transfer, population arrival/migration, or chemical reaction) presented either as a non-uniform data table or an analytical rate function.
  * Sub-part (a) [2 Points: P1, P2]: Average rate of change using difference quotient [f(b) - f(a)] / (b - a) with mandatory physical units (e.g. gal/sec^2, words/min^2, °C/min), OR Average Value Formula: (1 / (b - a)) * int_a^b f(t) dt.
  * Sub-part (b) [2 Points: P3, P4]: Definite integral approximation using Riemann sums (Left, Right, Midpoint, or Trapezoidal with non-uniform intervals). Meaning of integral interpretation in context: "integral gives the net change / total accumulation of [quantity] from t=a to t=b [units]".
  * Sub-part (c) [2 Points: P5, P6]: Symbolic limit expression describing end-behavior (e.g. lim_{t->inf} C'(t) = 0), OR finding time t where instantaneous rate equals average rate via calculator solver.
  * Sub-part (d) [3 Points: P7, P8, P9]: Optimization / Net Accumulation Function A(t) = C(t) - int_a^t rate(x) dx: finding absolute maximum/minimum on closed interval [a, b]. MANDATORY CANDIDATES TEST TABLE evaluating endpoints and all critical points.

- QUESTION 2 ARCHETYPE (Part A, Calculator Active): BC POLAR CURVES & AREA OR 2D PARAMETRIC VECTOR MOTION
  * Sub-option 2A: POLAR CURVES r(theta) (BC Exclusive Signature):
    - Sub-part (a) [1 Point: P1]: Rate of change dr/dtheta at theta = theta_0 with calculator numerical derivative.
    - Sub-part (b) [3 Points: P2, P3, P4]: Polar area bounded between two curves: Area = (1/2) * int_alpha^beta (r_1(theta)^2 - r_2(theta)^2) dtheta. (Note: Must square each r individually; (r1 - r2)^2 is strictly incorrect). Limits alpha and beta found via calculator solver.
    - Sub-part (c) [3 Points: P5, P6, P7]: Extreme distance from y-axis (x = r*cos(theta), solve dx/dtheta = 0) or from x-axis (y = r*sin(theta), solve dy/dtheta = 0) with global Candidates Test justification.
    - Sub-part (d) [2 Points: P8, P9]: Rate of change of distance from origin with respect to time: dr/dt = (dr/dtheta) * (dtheta/dt).
  * Sub-option 2B: 2D PARAMETRIC VECTOR MOTION (BC Exclusive):
    - Position <x(t), y(t)>, velocity vector <x'(t), y'(t)>, acceleration vector <x''(t), y''(t)>.
    - Speed at t = t_0: ||v(t_0)|| = sqrt((x'(t_0))^2 + (y'(t_0))^2).
    - Slope of tangent line: dy/dx = y'(t) / x'(t).
    - Position from initial condition: x(t) = x(t_0) + int_{t_0}^t x'(u) du.
    - Total distance traveled (arc length): int_a^b sqrt((x'(t))^2 + (y'(t))^2) dt.

- QUESTION 3 ARCHETYPE (Part B, No Calculator): CONTEXTUAL DIFFERENTIAL EQUATIONS & SLOPE FIELDS
  * Stem: Real-world contextual differential equation dy/dt = (1/k)(A - y) * g(t) with initial condition (t_0, y_0).
  * Sub-part (a) [2 Points: P1, P2]: Slope field verification / sketch of solution curve passing through (t_0, y_0) respecting asymptotes.
  * Sub-part (b) [2 Points: P3, P4]: Tangent line equation y = y_0 + m(t - t_0) to approximate solution at nearby value t_1.
  * Sub-part (c) [2 Points: P5, P6]: Determining overestimate vs underestimate using second derivative d^2y/dt^2 via implicit differentiation and chain rule. If d^2y/dt^2 > 0 -> concave up -> tangent line lies below curve -> UNDERESTIMATE. If d^2y/dt^2 < 0 -> concave down -> OVERESTIMATE.
  * Sub-part (d) [3 Points: P7, P8, P9]: Separation of Variables: int dy/h(y) = int g(t) dt. Must separate variables (+1), find antiderivatives (+1), incorporate constant of integration C with initial condition and solve explicitly for y (+1).

- QUESTION 4 ARCHETYPE (Part B, No Calculator): GRAPHICAL ANALYSIS OF f' & ACCUMULATION FUNCTION g(x) = int_c^x f(t) dt
  * Stem: Continuous function f defined on closed interval [-a, b]. The graph of f' consists of geometric semicircles and straight line segments.
  * Sub-part (a) [2 Points: P1, P2]: Evaluating g'(x) = f(x) and specific derivative value using Fundamental Theorem of Calculus (FTC Part 1).
  * Sub-part (b) [2 Points: P3, P4]: Points of inflection of g: locations where f' changes from increasing to decreasing (or vice versa), or f' attains relative extrema. Reason must be tied directly to graph of f'.
  * Sub-part (c) [2 Points: P5, P6]: Geometric evaluation of g(x) using triangle, trapezoid, and semicircle areas ((1/2)*pi*r^2), correctly handling sign and limit reversal: int_c^0 f(t) dt = -int_0^c f(t) dt.
  * Sub-part (d) [3 Points: P7, P8, P9]: Absolute minimum / maximum on closed interval using CANDIDATES TEST. Must evaluate critical points where f(x) = 0 AND endpoints.

- QUESTION 5 ARCHETYPE (Part B, No Calculator): ADVANCED BC CALCULUS (EULER'S METHOD / IMPROPER INTEGRALS / PARTS)
  * Sub-part (a) [2 Points: P1, P2]: Higher-order implicit derivative d^2y/dx^2 at point (x_0, y_0) using product and chain rules.
  * Sub-part (b) [2 Points: P3, P4]: Second-degree Taylor polynomial for f about center x = c.
  * Sub-part (c) [2 Points: P5, P6]: Lagrange Error Bound: Bounding remainder |f(x) - P_n(x)| <= [max |f^{(n+1)}(t)| / (n+1)!] * |x - c|^{n+1}. CRITICAL RULE: Inequality MUST use '<=' (writing '=' or '<' forfeits point).
  * Sub-part (d) [3 Points: P7, P8, P9]: Euler's Method: Approximating f(x_2) starting at (x_0, y_0) with 2 steps of equal size Delta x. Table of steps (x, y, dy/dx, Delta y) with explicit numerical substitution, OR Improper Integrals int_a^inf g(x) dx = lim_{b->inf} int_a^b g(x) dx.

- QUESTION 6 ARCHETYPE (Part B, No Calculator): THE SIGNATURE BC INFINITE SERIES & TAYLOR POLYNOMIALS
  * Stem: Given Taylor/Maclaurin series sum_{n=1}^inf a_n (x - c)^n or function with derivatives of all orders.
  * Sub-part (a) [4-5 Points: P1, P2, P3, P4, P5]: Ratio Test for Interval of Convergence:
    - Set up ratio lim_{n->inf} |a_{n+1} / a_n| (+1 pt).
    - Evaluate limit of ratio in terms of |x - c| (+1 pt).
    - Interior interval of convergence (c - R, c + R) (+1 pt).
    - Consider BOTH endpoints individually (+1 pt).
    - Rigorous endpoint analysis (using Alternating Series Test, p-series, or Limit Comparison Test to harmonic series) and final interval (+1 pt).
  * Sub-part (b) [2 Points: P6, P7]: Term-by-term differentiation or integration to find first 3-4 nonzero terms and general term of f'(x) or int f(x) dx.
  * Sub-part (c) [1-2 Points: P8]: Geometric series verification: Identify first term a and common ratio r, verify sum S = a / (1 - r) on interval of convergence.
  * Sub-part (d) [1 Point: P9]: Alternating Series Error Bound: |f(x) - P_n(x)| <= |a_{n+1}| (magnitude of first omitted term), or convergence testing at outside point.

2. STRICT CHIEF READER SCORING PRINCIPLES & FATAL TRAPS (ENFORCE IN RUBRICS):
- THE CANDIDATES TEST MANDATE: To earn the justification point for absolute extrema on a closed interval [a, b], students MUST evaluate the function at ALL critical points AND both endpoints in a table. A local First Derivative Test alone earns 0 justification points.
- "DIFFERENTIABLE IMPLIES CONTINUOUS": When using IVT or EVT, students must explicitly write "Because f is differentiable, f is continuous". Stating only that f is continuous without justification loses the hypothesis point.
- 3-DECIMAL PRECISION RULE: In calculator-active questions, final numerical answers must be accurate to at least 3 decimal places (rounded or truncated, e.g. 2.778 or 2.777).
- NO ARITHMETIC WITH INFINITY: Writing expressions like '38 / (25 + inf^2) = 0' is treated as informal scratch work and loses credit. Students must write proper limit notation lim_{t->inf}.
- NO SIMPLIFICATION REQUIRED: Answers like (100 - 90)/2 or (1/4)(11.112896) earn full credit without simplification.
- SPEED INCREASING/DECREASING: Speed increases if velocity and acceleration have the SAME sign; decreases if OPPOSITE signs. Mentioning acceleration alone earns 0 points.
- POLAR AREA FACTOR: Must include 1/2 factor and square each radius individually: (1/2)*int (r_1^2 - r_2^2) dtheta.

3. CRITICAL ANTI-PLAGIARISM & ORIGINALITY DIRECTIVE:
- Under NO circumstances copy verbatim functions, characters, or numbers from released exam PDFs (do NOT reuse 7.6arctan(0.2t), coffee cooling, milk warming, or reading rate table verbatim).
- Use them strictly as pedagogical blueprints to invent 100% fresh, solvable, mathematically elegant scenarios.

4. MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING PROTOCOL:
- PASS 1 (Analytical Pre-Solving): Before finalizing any question, internally solve every subpart. Verify that all integrals yield clean real values, critical points lie strictly within the designated domain, Euler's method steps do not divide by zero, and series ratio tests produce valid non-zero radii.
- PASS 2 (Rubric Consistency): Verify that total points = exactly 9 points (P1 to P9 labeled), all subparts (a)-(d) have corresponding model answers and scoring breakdown, and no impossible physical data exists.
- SELF-HEALING: If ANY calculation error, sign mistake, asymptote within interval, or unsolvable equation is detected, immediately discard and regenerate or heal the question before outputting.`;
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
  3. Rubric: Must break down exact points (+1 pt for balanced net ionic equation, +1 pt for ICE table setup, +1 pt for final answer with correct significant figures and units).`;
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
      return `AP U.S. HISTORY (APUSH) SHORT-ANSWER QUESTION (SAQ) EXAM STANDARDS (COLLEGE BOARD SECTION I, PART B - 100% REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED FROM OFFICIAL EXAM SETS (2023, 2025, 2026):
You are the College Board AP U.S. History Chief Reader and Test Developer. Every Short-Answer Question (SAQ) you generate MUST strictly follow this exact real-exam blueprint:

1. MANDATORY 3-PART ANATOMY (PARTS A, B, AND C) & EXACT 3 POINTS:
- Every single SAQ MUST consist of EXACTLY 3 distinct sub-questions labeled:
  A. [Sub-question]
  B. [Sub-question]
  C. [Sub-question]
- Outputting fewer than 3 parts or more than 3 parts is STRICTLY FORBIDDEN.
- TOTAL POINTS: EXACTLY 3 POINTS (Each part A, B, and C is worth exactly 1 point: +1 pt per part).

2. THE 3 OFFICIAL COLLEGE BOARD APUSH QUESTION ARCHETYPES:
- QUESTION TYPE 1 (PAIRED SECONDARY SOURCES - TWO HISTORIANS - COMPULSORY Q1 STYLE):
  * Features TWO conflicting historical interpretations of a major development (e.g. New Deal, Reconstruction, Revolution, Cold War origins, Jeffersonian democracy).
  * Excerpts MUST include: Source: [Historian Name], historian, [Book Title], published in [Year].
  * Formulated with strict College Board prompt structure:
    "Using the excerpts, respond to parts A, B, and C."
    - A. Briefly describe one major difference between [Historian 1]'s and [Historian 2]'s historical interpretations of [topic].
    - B. Briefly explain how one specific event or development from [Year A to Year B] NOT explicitly mentioned in the excerpts could be used to support [Historian 1]'s argument.
    - C. Briefly explain how one specific event or development from [Year A to Year B] NOT explicitly mentioned in the excerpts could be used to support [Historian 2]'s argument.
- QUESTION TYPE 2 (SINGLE PRIMARY SOURCE - HISTORICAL TEXT OR POLITICAL CARTOON - COMPULSORY Q2 STYLE):
  * Rooted in ONE authentic primary source excerpt (e.g. speech by political leader, muckraker critique, women's rights pamphlet, court ruling, presidential address, or indigenous leader speech).
  * Excerpts MUST include: Source: [Author Name], [Title / Context], [Year].
  * Formulated with HAPP / Sourcing analysis:
    "Using the excerpt, respond to parts A, B, and C."
    - A. Briefly describe the author's point of view, purpose, or intended audience as expressed in the excerpt.
    - B. Briefly explain how one specific historical development between [Year A] and [Year B] contributed to the ideas expressed in the excerpt.
    - C. Briefly explain how ideas such as those reflected in the excerpt resulted in one specific effect between [Year B] and [Year C].
- QUESTION TYPE 3 (NO STIMULUS - HISTORICAL REASONING & COMPARISON - Q3/Q4 STYLE):
  * Non-stimulus prompt testing historical reasoning (Comparison, Causation, or Continuity and Change over Time [CCOT]) across periods.
  * Formulated with comparative regional or group analysis:
    "Respond to parts A, B, and C."
    - A. Briefly describe one way that [factor/movement] influenced [debates/migration/reforms] from [Year A] to [Year B].
    - B. Briefly explain one similarity in how [factor] influenced the development of two regions/groups in the United States from [Year A] to [Year B].
    - C. Briefly explain one difference in how [factor] influenced the development of two regions/groups in the United States from [Year A] to [Year B].

3. STRATIFIED DISTRIBUTION BY SESSION QUESTION COUNT:
When generating a batch of questions, assign archetypes based on total requested question count:
- IF COUNT == 3 (Official Exam Simulation Set):
  * Question 1 = Type 1 (Paired Historians)
  * Question 2 = Type 2 (Single Primary Source)
  * Question 3 = Type 3 (No Stimulus Comparative Reasoning)
- IF COUNT == 5 (Practice Bank):
  * Questions 1 & 2 = Type 1 (Paired Historians)
  * Questions 3 & 4 = Type 2 (Single Primary Source)
  * Question 5 = Type 3 (No Stimulus)
- IF COUNT == 10 (Marathon Bank):
  * Questions 1, 2, 3 = Type 1 (Paired Historians)
  * Questions 4, 5, 6 = Type 2 (Single Primary Source)
  * Questions 7, 8, 9, 10 = Type 3 (No Stimulus)
- IF COUNT == 15 (Mega Practice Bank):
  * Questions 1 to 5 = Type 1 (Paired Historians across diverse periods)
  * Questions 6 to 10 = Type 2 (Single Primary Source across diverse periods)
  * Questions 11 to 15 = Type 3 (No Stimulus Comparative Drills)

4. UNIT SCOPE & SYLLABUS INTEGRATION:
- If a specific APUSH Period (Period 1 to Period 9) is selected, ALL questions in the session MUST be strictly anchored to that chosen historical era!
- If Full Units / All Periods is selected, questions MUST be evenly distributed across Periods 1 to 9 (Colonial 1491-1754, Revolutionary 1754-1800, Early Republic 1800-1848, Civil War/Reconstruction 1844-1877, Gilded Age 1865-1898, Progressive/WWI/WWII 1890-1945, Cold War/Civil Rights 1945-1980, Modern 1980-Present).

5. THE UNIVERSAL SAQ SCORING STANDARD: THE ACE METHOD:
In "modelAnswer", every part (A, B, C) MUST be written in explicit, exemplary ACE format:
- A (Answer): Direct, historically defensible 1-sentence answer to the prompt.
- C (Cite): Specific historical proper noun evidence (e.g. *Wagner Act, Compromise of 1850, Proclamation of 1763, Interstate Commerce Act, Marshall Plan*).
- E (Explain): 1-2 sentences explaining HOW/WHY this specific evidence directly proves the claim.
- In "scoringRubric", provide a strict 3-item array:
  ["Part A [1 point]: 1 pt for identifying/describing core difference/point of view", "Part B [1 point]: 1 pt for outside historical evidence with valid explanation", "Part C [1 point]: 1 pt for outside historical evidence with valid explanation"].

6. COPYRIGHT & ORIGINALITY SAFEGUARD:
- DO NOT copy verbatim excerpts, historian passages, or questions from official College Board PDFs.
- Invent original, realistic historical excerpts, simulated historian debates, and authentic primary source texts.`;
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

  if (s.includes('biology') || s.includes('bio')) {
    if (questionType === 'objective') {
      return `AP BIOLOGY EXAM SPECIFICATIONS (College Board CED):
- Target Audience: High School Biology Students taking the official AP Biology Exam.
- Stimulus-Based: Ground questions in experimental setups, data tables, biological diagrams, metabolic pathways, gel electrophoresis, or phylogenetic trees across Units 1–8.
- Scientific Practices: Concept explanation, visual representations, questions & methods, representing & describing data, statistical tests (Chi-square, standard error of the mean ±2 SE_x), argumentation.
- Content: Chemistry of Life, Cell Structure & Function, Cellular Energetics (photosynthesis, cellular respiration, enzymes), Cell Communication & Cell Cycle, Heredity & Meiosis, Gene Expression & Regulation, Natural Selection & Evolution, Ecology.
- Distractors: Common biological misconceptions (e.g. confusing allosteric with competitive inhibition, confusing natural selection with individual adaptation, misinterpreting overlapping error bars).`;
    } else {
      return `AP BIOLOGY FREE RESPONSE EXAM STANDARDS (COLLEGE BOARD SECTION II - 100% AUTHENTIC REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED DIRECTLY FROM OFFICIAL EXAM SETS (2023, 2024, 2025, 2026) & CHIEF READER REPORTS (JAY MAGER, AMY DOLING):
Section II consists of 6 Free-Response Questions (90 Minutes, 34 Points Total). Every single question you generate MUST strictly follow this official College Board CED blueprint:

1. MANDATORY SECTION II STRUCTURE & POINT ALLOCATION:
- Exactly 6 Free Response Questions (90 Minutes, 34 Points Total).
- Questions 1 & 2 (LONG FREE-RESPONSE QUESTIONS): Exactly 9 points each (~25 minutes each).
- Questions 3 to 6 (SHORT FREE-RESPONSE QUESTIONS): Exactly 4 points each (~10 minutes each).

2. THE 6 CANONICAL COLLEGE BOARD AP BIOLOGY ARCHETYPES:
- QUESTION 1 (Long FRQ, 9 Points, ~25 Min) — Interpreting and Evaluating Experimental Results:
  * Scenario: Real-world biological experiment with an experimental setup, data table, and biochemical/physiological scenario.
  * Subparts:
    - Part (a) [1 pt]: Identify/describe the biological process or cellular component (e.g. enzyme function, transport across membrane, cellular respiration pathway).
    - Part (b) [3 pts]:
      • b1 [1 pt]: Identify the dependent variable.
      • b2 [1 pt]: Justify the inclusion of the negative or positive control group (must explain the specific variable being isolated, NOT vague "to see what is normal").
      • b3 [1 pt]: Describe the experimental trend or quantitative relationship across experimental groups.
    - Part (c) [3 pts]:
      • c1 [1 pt]: Identify the independent variable.
      • c2 [1 pt]: Identify a specific experimental group or condition.
      • c3 [1 pt]: Perform a quantitative calculation (e.g. nucleotide-to-amino acid ratio where nucleotides divided by 3 = amino acids, rate of reaction change, or percentage difference).
    - Part (d) [2 pts]:
      • d1 [1 pt]: Predict the effect of an environmental perturbation, chemical inhibitor, or genetic mutation on the system.
      • d2 [1 pt]: Justify the prediction using biological principles, negative/positive feedback, or biochemical pathways.

- QUESTION 2 (Long FRQ, 9 Points, ~25 Min) — Interpreting and Evaluating Experimental Results with Graphing:
  * Scenario: Quantitative investigation containing sample mean data and standard error of the mean (±2 SE_x) with graphing and statistical significance analysis.
  * Subparts:
    - Part (a) [1 pt]: Describe a fundamental chemical or biological property (e.g. polarity, hydrogen bonding, phospholipid bilayer permeability).
    - Part (b) [4 pts]:
      • b1 [1 pt]: Select appropriate graph type (bar graph for discrete categories, line graph for continuous time/concentration).
      • b2 [1 pt]: Plot points or construct bars with accurate standard error bars (±2 SE_x).
      • b3 [1 pt]: Label axes with proper variable names and units, using uniform, linear scales.
      • b4 [1 pt]: Interpret data or determine rate of change from the graph.
    - Part (c) [2 pts]:
      • c1 [1 pt]: Identify a specific quantitative threshold (e.g. concentration producing >50% response) from the plotted data.
      • c2 [1 pt]: Predict physiological or cellular outcome if the pathway is disrupted.
    - Part (d) [2 pts]:
      • d1 [1 pt]: Support or refute a scientific claim using statistical significance based on whether the ±2 SE_x error bars overlap or do not overlap (overlapping = no statistically significant difference).
      • d2 [1 pt]: Explain an agricultural, ecological, or evolutionary implication of the experimental findings.

- QUESTION 3 (Short FRQ, 4 Points, ~10 Min) — Scientific Investigation:
  * Scenario: Field ecology, cellular biology, or physiological investigation testing a scientific question.
  * Subparts:
    - Part (a) [1 pt]: Describe an ecological role, trophic cascade, keystone species interaction, or cellular mechanism.
    - Part (b) [1 pt]: Identify the negative control group and explain why it is essential to establish baseline data.
    - Part (c) [1 pt]: State the null hypothesis for the investigation (MUST strictly assert that the independent variable has NO effect or that there is NO difference between treatment groups).
    - Part (d) [1 pt]: Justify a directional experimental modification or predict result if control conditions are altered.

- QUESTION 4 (Short FRQ, 4 Points, ~10 Min) — Conceptual Analysis:
  * Scenario: Evolutionary biology, genetics, or cellular communication scenario without full data tables.
  * Subparts:
    - Part (a) [1 pt]: State genetic evidence of evolution (MUST be defined as a change in allele or gene frequencies in a population over time).
    - Part (b) [1 pt]: Explain the mechanism of speciation or adaptation (e.g. geographic isolation preventing gene flow leading to allopatric speciation and accumulation of reproductive barriers).
    - Part (c) [1 pt]: Predict the effect of altered selective pressures, resource availability, or gene dosage.
    - Part (d) [1 pt]: Justify the prediction connecting molecular/genetic mechanism to organismal/population phenotype.

- QUESTION 5 (Short FRQ, 4 Points, ~10 Min) — Analyze Model or Visual Representation:
  * Scenario: Visual model or diagram of a biochemical cascade, organelle structure, or enzyme kinetics.
  * Subparts:
    - Part (a) [1 pt]: Describe a molecular interaction or structural feature (e.g. enzyme active site shape and charge complementarity with substrate).
    - Part (b) [1 pt]: Explain a regulatory mechanism (e.g. allosteric noncompetitive inhibitor binding to an allosteric site inducing a conformational change that reduces substrate affinity).
    - Part (c) [1 pt]: Identify an intermediate, receptor, or organelle from the visual model.
    - Part (d) [1 pt]: Predict and explain the consequence of denaturation or mutation (e.g. extreme pH or temperature disrupting hydrogen/ionic bonds in tertiary structure).

- QUESTION 6 (Short FRQ, 4 Points, ~10 Min) — Analyze Data:
  * Scenario: Quantitative data presentation (gel electrophoresis, qPCR expression, flow cytometry, or box plot).
  * Subparts:
    - Part (a) [1 pt]: Identify a baseline, median, or specific molecular marker from the data/figure.
    - Part (b) [1 pt]: Describe differences between experimental groups or identify phenotypic patterns from gel bands/expression levels.
    - Part (c) [1 pt]: Synthesize data across two figures or conditions to support or evaluate a scientific claim.
    - Part (d) [1 pt]: Explain the molecular or genetic mechanism linking the observed molecular data to the organism's phenotype or disease state.

3. STRICT CHIEF READER SCORING MANDATES & AVOIDANCE OF FATAL TRAPS:
1. NULL HYPOTHESIS RULE: Writing an alternative hypothesis or directional prediction earns 0 points! The null hypothesis MUST state: "The [independent variable] has NO effect on [dependent variable]" or "There is NO difference in [dependent variable] between [groups]".
2. CONTROL GROUP JUSTIFICATION: Vague answers like "to see what is normal" or "to compare results" earn 0 points! The student must explicitly state what variable is being held constant to isolate the treatment effect.
3. ERROR BAR OVERLAP RULE (±2 SE_x): If error bars overlap, there is NO statistically significant difference between the means. Citing numerical differences when error bars overlap loses the point!
4. GENETIC DEFINITION OF EVOLUTION: Answering with "animals adapt" or "traits change" earns 0 points! The student MUST specify: "a change in allele (or gene) frequencies in a population over time (or generations)".
5. CODON TRANSLATION MATH: Each amino acid corresponds to 3 nucleotides. Dividing nucleotides by 3 yields amino acids.
6. ALLOSTERIC VS COMPETITIVE INHIBITION: An inhibitor binding to a site other than the active site causing a conformational change is an ALLOSTERIC / NONCOMPETITIVE inhibitor, NEVER competitive.
7. COMMAND VERBS: "Describe" = state features/patterns; "Explain" = provide mechanism (cause -> molecular link -> effect); "Justify" = cite biological principles or evidence to support claim.

4. MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING PROTOCOL:
- PASS 1 (Biological & Mathematical Pre-Solving):
  * Check null hypothesis syntax (no effect / no difference).
  * Check codon translation math (nucleotides divisible by 3).
  * Check that standard error bars (±2 SE_x) are non-negative and mathematically plausible.
  * Check that allele frequencies p and q satisfy 0 <= p, q <= 1 and p + q = 1.
- PASS 2 (Rubric Consistency):
  * For Q1 & Q2: Exactly 9 points labeled Part (a) [1 pt], Part (b) [3 pts: b1, b2, b3], Part (c) [3 pts: c1, c2, c3], Part (d) [2 pts: d1, d2].
  * For Q3–Q6: Exactly 4 points labeled Part (a) [1 pt], Part (b) [1 pt], Part (c) [1 pt], Part (d) [1 pt].
- SELF-HEALING:
  * If ANY scientific inaccuracy, contradictory error bar, or rubric mismatch is detected, immediately heal or regenerate before outputting.

5. ZERO VERBATIM COPYING / ANTI-PLAGIARISM DIRECTIVE:
- NEVER copy verbatim scenarios, organisms, numbers, or questions from released 2023–2026 AP exam PDFs.
- Use released exams strictly as architectural blueprints to generate 100% original, scientifically accurate, and solvable scenarios.`;
    }
  }

  if (s.includes('physics 1') || s.includes('phys')) {
    if (questionType === 'objective') {
      return `AP PHYSICS 1: ALGEBRA-BASED EXAM SPECIFICATIONS (College Board CED):
- Target Audience: High School Physics students taking the official AP Physics 1 Exam.
- Exam Structure: 40 Multiple-Choice Questions (80 Minutes, 2 minutes per question).
- Units Covered (Units 1–8):
  1. Kinematics (1D/2D motion, projectile trajectories, velocity-time graph slopes and areas).
  2. Force and Translational Dynamics (Newton's 1st/2nd/3rd laws, free-body diagrams, static/kinetic friction, circular motion).
  3. Work, Energy, and Power (Conservation of mechanical energy, work-energy theorem, spring potential energy, power).
  4. Linear Momentum (Impulse-momentum theorem, elastic/inelastic collisions, center of mass velocity, internal vs external forces).
  5. Torque and Rotational Dynamics (Rotational equilibrium, Newton's 2nd law in rotational form tau = I*alpha, angular momentum).
  6. Energy and Momentum of Rotating Systems (Rolling without slipping, rotational kinetic energy K = (1/2)I*omega^2).
  7. Oscillations (Simple harmonic motion, mass-spring systems T = 2*pi*sqrt(m/k), simple pendulums T = 2*pi*sqrt(L/g)).
  8. Fluids (Density rho = m/V, buoyant force F_b = rho*V*g, Archimedes principle, continuity equation A1*v1 = A2*v2, Bernoulli's equation).
- Distractors: Classic physics misconceptions (confusing mass with weight, confusing velocity with acceleration, misinterpreting Newton's 3rd law action-reaction pairs, treating normal force as always equal to mg on inclines).`;
    } else {
      return `AP PHYSICS 1 FREE RESPONSE EXAM STANDARDS (COLLEGE BOARD SECTION II - 100% AUTHENTIC 2025/2026 REVAMP):
PEDAGOGICAL INTELLIGENCE DERIVED DIRECTLY FROM OFFICIAL EXAM SETS (2023, 2024, 2025, 2026) & CHIEF READER REPORTS (BRIAN UTTER, UC MERCED - 174,992 STUDENTS):
Section II consists of EXACTLY 4 Free-Response Questions (1 Hour 40 Minutes = 100 Minutes Total, 40 Points Total). Every single question you generate MUST strictly follow this official 2025/2026 College Board CED blueprint:

1. MANDATORY SECTION II STRUCTURE & POINT ALLOCATION (EXACTLY 4 QUESTIONS • 40 POINTS • 100 MINUTES):
- Question 1 (MATHEMATICAL ROUTINES - MR): Exactly 10 points (~25 minutes).
- Question 2 (TRANSLATION BETWEEN REPRESENTATIONS - TBR): Exactly 12 points (~25-30 minutes).
- Question 3 (EXPERIMENTAL DESIGN AND ANALYSIS - LAB): Exactly 10 points (~25-30 minutes).
- Question 4 (QUALITATIVE/QUANTITATIVE TRANSLATION - QQT): Exactly 8 points (~20 minutes).

2. THE 4 CANONICAL COLLEGE BOARD AP PHYSICS 1 ARCHETYPES:
- QUESTION 1 (10 Points, ~25 Min) — Mathematical Routines (MR):
  * Topics: Kinematics, Linear Momentum & Collisions, or Fluids.
  * Anatomy:
    - Part A (i) [2 pts]: Graph sketching of physical components (e.g. horizontal velocity v_x as a nonzero horizontal line and vertical velocity v_y as a line with constant negative slope crossing horizontal axis; OR momentum p_x as a continuous horizontal line across all time intervals).
    - Part A (ii) [2 pts]: Multi-step derivation for velocity/speed (e.g. exit speed v = sqrt(2gh_1)/sin(theta_0) or post-collision speed v_f = (5/6)v_c) starting strictly from fundamental laws (p_i = p_f or kinematics/energy).
    - Part A (iii) [3 pts]: Multi-step derivation of secondary quantity (e.g. volume flow rate V/t = A*v = pi*r_0^2 * v or change in kinetic energy Delta K = K_f - K_i = -(1/12)m_c*v_c^2) with correct mass/geometry substitutions.
    - Part B [3 pts]: Qualitative claim (e.g. h_2 > h_1 or momentum 'Remains constant') with thorough qualitative justification linking physical causes (e.g. smaller radius -> smaller area -> greater speed from continuity -> greater vertical height; OR frictional contact forces are internal to system -> net external force is zero -> momentum conserved).

- QUESTION 2 (12 Points, ~25-30 Min) — Translation Between Representations (TBR):
  * Topics: Mechanical Energy Conservation, Incline Dynamics & Springs, or Collisions with Position-Time Graphs.
  * Anatomy:
    - Part A [3 pts]: Energy bar chart (LOL diagram) completion. Sum of bar heights in every single state MUST strictly equal the declared total mechanical energy (e.g. 12*E_0). Single bar for pure potential energy at release (12*E_0), split bars for intermediate positions.
    - Part B [4 pts]: Multi-step derivation of physical parameter (e.g. spring constant k = (3/2)*(Mg*sin(theta)/D)) starting with E_i = E_f, with accurate geometric substitution for incline height Delta y = 12D*sin(theta) and spring compression Delta x = 4D (recognizing (4D)^2 = 16D^2).
    - Part C [3 pts]: Multi-curve graphing on coordinate grid:
      • Sketching total mechanical energy E as a horizontal continuous line at 12*E_0.
      • Sketching gravitational potential energy U_g as a straight decreasing line starting at (8D, 4E_0) and reaching 0 at 12D.
    - Part D [2 pts]: Speed comparison claim (e.g. v_9D > v_8D) with justification consistent with the sketched graph curves (showing U_g + U_s is lower at 9D, leaving higher kinetic energy K).

- QUESTION 3 (10 Points, ~25-30 Min) — Experimental Design and Analysis (LAB):
  * Topics: Torque & Meterstick Balance, Photogate & Incline Friction, or Harmonic Motion with Limited Equipment.
  * Anatomy:
    - Part A [2 pts]: Experimental procedure to determine unknown physical quantity (mass m_0 or friction coefficient mu_k) using only specified apparatus (meterstick, spring scale, photogate). Must include explicit steps to reduce experimental uncertainty (repeated trials across multiple distinct positions).
    - Part B [2 pts]: Equation linearization analysis. Indicate quantities to plot on vertical and horizontal axes such that the slope yields the unknown quantity, and explicitly state how the slope is mathematically related to the unknown.
    - Part C [4 pts]: Coordinate grid plotting and graphing:
      • Part C (i) [1 pt]: Label vertical axis with proper physical quantity.
      • Part C (ii) [2 pts]: Label axis with uniform linear numerical scale AND matching units (e.g. F_T (N) or v^2 (m^2/s^2)), and plot data points accurately.
      • Part C (iii) [1 pt]: Draw a single, smooth straight line of best fit representing the trend (NEVER connect-the-dots).
    - Part D [2 pts]: Calculate experimental value of target quantity using the slope of the drawn best-fit line (must pick two coordinates ON the line, NOT raw table points) and solve for the unknown within realistic experimental range.

- QUESTION 4 (8 Points, ~20 Min) — Qualitative/Quantitative Translation (QQT):
  * Topics: Fluids (Buoyancy & Fluid Density) or Rotational Dynamics (Rotational Inertia & Torque).
  * Anatomy:
    - Part A [3 pts]: Qualitative physical comparison (e.g. a_1 < a_2 or omega_Y > omega_X) with qualitative justification referencing ALL forces or torques without mathematical equations (e.g. identical downward weight mg, larger buoyant force in denser fluid, thus greater net upward force and greater acceleration).
    - Part B [3 pts]: Mathematical derivation starting from Newton's Second Law in translational form (Sigma F = ma -> F_b - mg = ma -> a = (rho*V*g)/m - g) or rotational form (tau = I*alpha -> F_0*r_0 = I*alpha -> omega = sqrt(2F_0*ell_0 / I)) for the acceleration or angular speed.
    - Part C [2 pts]: Consistency evaluation bridging Part B's derived equation to Part A's claim, explicitly utilizing functional dependence terminology ('directly proportional', 'numerator', 'inversely related') to prove consistency.

3. STRICT CHIEF READER SCORING MANDATES & AVOIDANCE OF FATAL TRAPS (BRIAN UTTER REPORT):
1. FIRST PRINCIPLES MANDATE: Every derivation MUST explicitly begin with an equation from the reference sheet (p_i = p_f, Sigma F = ma, E_i = E_f, tau = I*alpha). Starting with substituted numbers or intermediate expressions forfeits the first point!
2. INTERNAL VS EXTERNAL FORCES: Frictional contact force between colliding bodies (block sliding on cart) is an INTERNAL force. Because net external force is zero, total momentum strictly remains constant. Saying friction decreases total system momentum loses all justification points!
3. INCLINE HEIGHT GEOMETRY: Height change on an incline of length D and angle theta is Delta y = D*sin(theta). Forgetting sin(theta) causes derivation point loss.
4. ALGEBRAIC SQUARING INTEGRITY: (4D)^2 = 16D^2, NOT 4D^2.
5. GRAPH AXES REQUIRE BOTH NAME AND UNIT: Writing only 'Force' or only 'N' loses credit; both are required (e.g. 'Force (N)' or 'F_T (N)').
6. BEST-FIT LINE CALCULATION: Slopes MUST be calculated from two points ON the best-fit line, NOT from raw data points in the table. Never draw connect-the-dots lines.
7. FLUID VARIABLE NOTATION: Greek letter rho (density) must NEVER be confused with p (momentum/pressure). Buoyant acceleration must account for both buoyant force AND weight: a = (rho*V*g - mg)/m.
8. QQT FUNCTIONAL DEPENDENCE: Part C must explicitly use functional dependence terminology ('directly proportional', 'in the numerator', 'as rho increases, a increases') to link Part B derivation to Part A claim.

4. MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING PROTOCOL:
- PASS 1 (Physics & Conservation Law Pre-Solving):
  * Verify mechanical energy conservation in LOL charts (sum of bars = 12*E_0 in all states).
  * Verify linear momentum conservation in collisions with zero net external force.
  * Verify non-negative kinetic energy and real-valued speeds (no imaginary roots).
  * Verify linear slope is physically realistic (0 < mu_k < 1.0).
- PASS 2 (Rubric Consistency & Point Parity):
  * For Q1 (MR): Exactly 10 points (A(i): 2, A(ii): 2, A(iii): 3, B: 3).
  * For Q2 (TBR): Exactly 12 points (A: 3, B: 4, C: 3, D: 2).
  * For Q3 (LAB): Exactly 10 points (A: 2, B: 2, C: 4, D: 2).
  * For Q4 (QQT): Exactly 8 points (A: 3, B: 3, C: 2).
- SELF-HEALING:
  * If ANY physical impossibility, broken conservation law, or rubric point mismatch is detected, immediately heal or regenerate before outputting.

5. ZERO VERBATIM COPYING / ANTI-PLAGIARISM DIRECTIVE:
- NEVER copy verbatim scenarios, numbers, or questions from released 2023–2026 AP Physics 1 exam PDFs.
- Use released exams strictly as architectural blueprints to generate 100% original, scientifically accurate, and solvable scenarios.`;
    }
  }

  if (s.includes('macro') || s.includes('economics') || s.includes('econ')) {
    if (questionType === 'objective') {
      return `AP MACROECONOMICS EXAM SPECIFICATIONS (College Board CED Units 1-6):
- Target Level: Grade 11-12 College-Level Introductory Macroeconomics. Rigorous analytical reasoning, model interpretation, and policy mechanism tracing across Units 1–6.
- Curriculum Scope:
  * Unit 1: Basic Economic Concepts (Scarcity, Opportunity Cost, Production Possibilities Curve [PPC], Comparative Advantage and Terms of Trade, Marginal Analysis).
  * Unit 2: Economic Indicators and the Business Cycle (Circular Flow, Real vs Nominal GDP, GDP Deflator, Unemployment categories [Frictional, Structural, Cyclical, Natural Rate], CPI and Inflation, Costs of Inflation).
  * Unit 3: National Income and Price Determination (Aggregate Demand [AD] components, Multipliers [Spending Multiplier = 1/(1-MPC), Tax Multiplier = -MPC/(1-MPC)], Short-Run Aggregate Supply [SRAS], Long-Run Aggregate Supply [LRAS], Macroeconomic Equilibrium, Output Gaps [Recessionary vs Inflationary], Long-Run Self-Adjustment, Automatic Stabilizers).
  * Unit 4: Financial Sector (Financial Assets [Money, Bonds, Stocks], Nominal vs Real Interest Rates [Fisher Equation], Banking and Money Creation, Money Market [Limited Reserves], Loanable Funds Market, Central Bank Tools [Ample Reserves Framework: Administered Rates / Interest on Reserves vs Limited Reserves: OMO, Discount Rate, Reserve Ratio]).
  * Unit 5: Long-Run Consequences of Stabilization Policies (Fiscal and Monetary Policy interactions, Government Deficits and National Debt, Crowding Out, Phillips Curve [Short-Run SRPC vs Long-Run LRPC], Money Growth and Inflation [Quantity Theory MV=PY], Economic Growth and Productivity).
  * Unit 6: Open Economy - International Trade and Finance (Balance of Payments [Current Account CA + Capital and Financial Account CFA = 0], Foreign Exchange [Forex] Market, Exchange Rate determinants, Net Exports and Capital Inflows).
- Distractors: Sophisticated student traps identified in Chief Reader reports (e.g. confusing administered rates with open market operations in ample reserves, inverting Forex currency fractions, miscalculating multiplier effects by multiplying rather than dividing by multiplier, or confusing movements along Phillips curve with shifts).
- MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING PROTOCOL:
  1. Formula and Math Check: Verify all calculations (GDP Deflator, CPI, Unemployment rates, Multipliers) yield clean whole integers or standard halves/tenths.
  2. Economic Model Integrity: Ensure 100% CED theoretical consistency (e.g. higher real interest rate -> increased foreign capital inflow -> currency appreciates -> net exports decrease).
  3. Single Unambiguous Key Check: Ensure exactly ONE option is unequivocally correct according to College Board definitions.
  4. Self-Healing: If any numerical contradiction or economic inconsistency is found during self-check, regenerate immediately.`;
    } else {
      return `AP MACROECONOMICS FREE RESPONSE EXAM STANDARDS (COLLEGE BOARD SECTION II - 100% AUTHENTIC REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED DIRECTLY FROM OFFICIAL 2023, 2024, 2025, 2026 AP EXAM SETS & CHIEF READER REPORTS (SAM ANDOH, SOUTHERN CONNECTICUT STATE UNIVERSITY - 176,938 STUDENTS):
You are the College Board AP Macroeconomics Chief Reader and Lead Exam Developer. Section II consists of 3 Free-Response Questions (1 Hour Total: 10 minutes reading/planning + 50 minutes writing; 20 Points Total).
Every question generated MUST strictly conform to this official College Board CED blueprint:

1. THE 3 OFFICIAL CANONICAL AP MACRO QUESTION ARCHETYPES & POINT PARITY:
- QUESTION 1: LONG FREE-RESPONSE QUESTION [EXACTLY 10 POINTS] (~25 Minutes):
  * Themes: Comprehensive Macroeconomic Equilibrium, Policy Shocks, Graphical Cascades, and Global Open Economy Linkages.
  * Anatomy & 10-Point Distribution (Points 1 through 10):
    - Initial State & Baseline Graph (Points 1 & 2): State initial equilibrium (Recessionary Gap, Inflationary Gap, or Long-Run Equilibrium).
      • Part (a) [2 pts]: Draw a correctly labeled graph of either:
        (1) Aggregate Demand, Short-Run Aggregate Supply, and Long-Run Aggregate Supply (AD, SRAS, LRAS) with equilibrium real output and price level labeled Y1 and PL1, and full-employment output labeled YF; OR
        (2) Short-Run and Long-Run Phillips Curves (SRPC, LRPC) with current short-run equilibrium labeled point X and natural unemployment plotted.
    - Long-Run Self-Adjustment OR Policy Shock (Points 3 & 4):
      • Part (b) [2 pts]: (i) Explain how the economy adjusts in the long run (wages/input prices adjust, shifting SRAS or SRPC) OR analyze the short-run effect of a fiscal/private investment shock on real output. (ii) On the graph in part (a), show the new short-run equilibrium labeled PL2 or point S/Z.
    - Financial / Loanable Funds Market Link (Points 5 & 6):
      • Part (c) / (d) [2 pts]: Draw a correctly labeled graph of the Loanable Funds Market (Real interest rate r vs Quantity of loanable funds Q) showing the effect of government borrowing / budget deficit or savings changes on the equilibrium real interest rate.
    - Open Economy, Forex & Balance of Payments Link (Points 7 to 10):
      • Part (d) / (e) / (f) [4 pts]:
        - Flow of international financial capital into/out of the economy based solely on the real interest rate differential with economic explanation (foreign investors seek higher returns).
        - Correctly labeled graph of the Foreign Exchange (Forex) market for the currency (Vertical axis MUST be labeled as a fraction, e.g. RHM/VTC or USD/ZAR, and show shift in Demand or Supply with directional arrows).
        - Effect on the international value of the currency (Appreciation or Depreciation).
        - Effect on Net Exports and short-run Employment.
        - Mandatory Balance of Payments Identity: State whether Capital and Financial Account (CFA) balance moves into surplus/deficit and explain that the Current Account (CA) moved into deficit/surplus and balance of payments must balance (CA + CFA = 0).

- QUESTION 2: SHORT FREE-RESPONSE QUESTION [EXACTLY 5 POINTS] (~12.5 Minutes):
  * Themes: Monetary Policy Tools & Banking Mechanics (Ample Reserves vs Limited Reserves Framework), Reserve Market Graph, and Financial Assets.
  * Anatomy & 5-Point Distribution (Points 1 through 5):
    - Policy Identification (Points 1 & 2):
      • Prompt explicitly states whether the banking system has "AMPLE RESERVES" or "LIMITED RESERVES".
      • If AMPLE RESERVES: Central bank tool is strictly **decreasing or increasing administered interest rates (Interest on Reserve Balances / IORB)**. Open market operations of buying/selling bonds do NOT shift the policy rate in ample reserves!
      • If LIMITED RESERVES: Central bank tool is **Open Market Operations (Buying or Selling government bonds)**, Discount Rate, or Reserve Ratio.
    - The Reserve Market or Money Market Graph (Points 3 & 4):
      • If Ample Reserves, draw a correctly labeled graph of the Reserve Market (Vertical axis = Policy Rate, Horizontal axis = Quantity of Reserves). Show downward-sloping demand curve that becomes a horizontal floor in the range of ample reserves, vertical supply curve SR, and show shift in administered rates resulting in a change in the policy rate.
      • If Limited Reserves, draw the Money Market graph (Vertical axis = Nominal Interest Rate, Horizontal axis = Quantity of Money, vertical MS curve shifted right or left, downward-sloping MD).
    - Asset Price & Macroeconomic Ripple Effect (Point 5):
      • State effect of policy rate on price of previously issued bonds (inverse relationship: higher interest rate -> bond prices decrease).
      • Explain effect on price level or real output through interest-sensitive spending (consumption, investment, or net exports) affecting aggregate demand.

- QUESTION 3: SHORT FREE-RESPONSE QUESTION [EXACTLY 5 POINTS] (~12.5 Minutes):
  * Themes: Macroeconomic Data Tables, Multipliers, Output Gaps & Automatic Stabilizers.
  * Anatomy & 5-Point Distribution (Points 1 through 5):
    - Data Analysis from Table (Points 1 & 2):
      • Table provides 2-3 goods, prices, and quantities across Year 1 (base year) and Year 2.
      • Point 1 [1 pt]: Real vs Nominal GDP comparison in base year with explanation (Real GDP = Nominal GDP in base year because no price level changes have occurred, and real values always equal nominal values in base year).
      • Point 2 [1 pt]: Calculate Real GDP in Year 2 with explicit numerical work: Real GDP = sum of (Base Year Price * Current Year Quantity).
    - Multiplier & Output Gap Calculation (Points 3 & 4):
      • Point 3 [1 pt]: Draw correctly labeled AD-AS graph showing short-run equilibrium relative to potential GDP (YF), indicating recessionary or inflationary gap.
      • Point 4 [1 pt]: Given MPC (e.g. 0.75, 0.8, 0.9), calculate minimum change and state direction of change in government spending required to close the output gap in the short run:
        Spending Multiplier = 1 / (1 - MPC). Minimum Change = Output Gap / Spending Multiplier. (Must show formula setup and work!).
    - Automatic Stabilizers / Economic Policy (Point 5):
      • Point 5 [1 pt]: Explain how automatic stabilizers (e.g. progressive income taxes or transfer payments) reduce the effect of the output fluctuation in the short run without discretionary action.

2. STRICT COMMAND VERBS & THE "EXPLAIN" STANDARD (CHIEF READER SAM ANDOH STANDARD):
- "Identify" / "State": 1 concise sentence asserting the specific economic outcome or policy tool.
- "Calculate ... Show your work": MUST include formula setup with substituted numbers and final answer with correct units/currency (e.g. "Decrease of $100 million" or "Increase of $150 million").
- "Draw a correctly labeled graph":
  * Both axes explicitly labeled (e.g. Price Level and Real GDP; Inflation Rate (%) and Unemployment Rate (%)).
  * All curves clearly labeled (AD, SRAS, LRAS; SRPC, LRPC; SR, DR; SLF, DLF).
  * Equilibrium points and dotted lines to axes (Y1, PL1; point X; r1, Q1; PR1, Q1).
  * Directional arrows or clear labels indicating curve shifts or movements along curves.
- "Explain": FULL TRANSMISSION CHAIN MANDATE:
  * Stating an assertion alone ("Output will increase") when asked to "Explain" EARNS 0 POINTS!
  * Every explanation MUST trace the complete causal mechanism:
    - Example for Interest Rate: [Policy Action] -> [Cost of Borrowing / Interest Rate] -> [Interest-sensitive Investment & Consumption] -> [Aggregate Demand shift] -> [Price level / Real GDP outcome].
    - Example for Forex/CFA: [Higher Real Interest Rate] -> [Foreign investors seek higher returns] -> [Increased financial capital inflow] -> [CFA moves into surplus / Demand for currency increases -> Appreciation].

3. EXAM SIMULATION VS PRACTICE MODE STRUCTURE:
- EXAM SIMULATION MODE:
  * Exactly 3 Questions (The Authentic Triad):
    - Question 1: Long FRQ (10 Points)
    - Question 2: Short FRQ - Monetary Policy & Banking (5 Points)
    - Question 3: Short FRQ - Data Tables & Multipliers (5 Points)
    - Total = Exactly 20 Points.
- PRACTICE BANK MODE (5, 10, or 15 QUESTIONS):
  * When student selects 5, 10, or 15 questions, cycle across the 3 canonical archetypes in repeating, mixed sequences:
    - For 5 Questions: Question 1 (Long, 10 pts) -> Question 2 (Short Ample, 5 pts) -> Question 3 (Short Data, 5 pts) -> Question 4 (Long Phillips/Forex, 10 pts) -> Question 5 (Short Limited Reserves, 5 pts).
    - For 10 Questions: 3 full cycles of the 3 canonical archetypes with diverse macro shocks (Recessionary, Inflationary, Stagflation, Open Economy) + 1 comprehensive capstone question.
    - For 15 Questions: 5 full cycles rotating across all Units 1-6 with diverse real-world macro shocks.

4. MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING QUALITY GATE:
Before outputting any question, execute this internal quality audit:
- AUDIT 1 (Math & Solvability Verification):
  * Unemployment math: Actual Rate = Natural Rate + Cyclical Rate. Numbers must add up cleanly.
  * Multiplier calculation: Verify MPC + MPS = 1 and Output Gap / Multiplier produces clean integers (no messy irrational decimals).
  * Tables: Base year Real GDP must equal Nominal GDP.
- AUDIT 2 (Ample vs Limited Reserves Policy Guardrail):
  * If prompt states "The banking system has ample reserves", the correct policy action CANNOT be buying/selling bonds! It MUST be changing administered interest rates or interest on reserves (IOR).
  * If prompt states "limited reserves", OMO bond purchases/sales apply.
- AUDIT 3 (Balance of Payments & Forex Verification):
  * Verify the balance of payments identity CA + CFA = 0.
  * In Forex graph, verify vertical axis is written as a currency fraction (e.g. Currency A / Currency B).
- AUDIT 4 (Zero Verbatim Copying / Anti-Plagiarism Directive):
  * NEVER copy fictitious countries (Vanderlandia, Noralandia, Zeta, Northland, Maltrose, Vortania, Barrikos, Jenland, Middleland, Micanapy, Foxhound, Lizland) or exact numbers verbatim from released exams.
  * Invent 100% fresh, original nations (e.g., Aveloria, Valdoria, Oakhaven, Solaria, Zephyria, Mirandis, Kaeland) with authentic, original macroeconomic scenarios.
- SELF-HEALING: If ANY mathematical contradiction, policy mismatch, or rubric flaw is detected during self-audit, immediately heal or regenerate the question before delivering JSON.`;
    }
  }

  if (s.includes('english') || s.includes('lang')) {
    if (questionType === 'objective') {
      return `AP ENGLISH LANGUAGE & COMPOSITION EXAM SPECIFICATIONS (College Board CED Units 1-9):
- Target Level: Grade 11 AP Track (Advanced Rhetorical Analysis & Critical Writing).
- Exam Structure: 45 MCQs, 60 minutes (~80 seconds per question).
- Section I Breakdown:
  * Reading Questions (23–25 Questions): 3–4 non-fiction prose passages (memoirs, speeches, journalistic essays, scientific/philosophical treatises).
    - Rhetorical Analysis: Identify authorial purpose, rhetorical situation (speaker, audience, exigence), main claim, and underlying assumptions.
    - Argumentative Reasoning: Evaluate the author's line of reasoning, warrants, grounds, and structural transitions.
    - Rhetorical Devices & Style: Analyze the function of diction, syntax, tone shifts, juxtaposition, antithesis, parallelism, and figurative analogies.
  * Writing Questions (20–22 Questions): 3–4 draft student essays/passages.
    - Revising for Rhetorical Effectiveness: Choose the best sentence to introduce a paragraph, select the most defensible thesis revision, or enhance sentence variety.
    - Cohesion & Transitions: Choose optimal transitional words or phrases (e.g. furthermore, consequently, nevertheless, in contrast) to link claims logically.
    - Evidence Integration: Select the most effective and relevant evidence to substantiate a specific claim, or embed quoted material smoothly with signal phrases.
- Distractors: Common AP student traps identified in Chief Reader reports (e.g. confusing the author's voice with a cited opposing argument, mistaking tone for mood, selecting overly broad or indefensible thesis revisions, or choosing grammatically correct but rhetorically weak revisions).
- MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING QUALITY GATE:
  1. Passage Rigor: Non-fiction passages must possess genuine rhetorical depth, sophisticated syntax, and identifiable authorial stance.
  2. Single Unambiguous Key Check: Ensure exactly ONE option is undeniably the most effective rhetorical choice according to College Board standards.
  3. Plausible Distractors: Incorrect choices must reflect authentic student writing misconceptions.
  4. Self-Healing: Discard and regenerate any ambiguous or simplistic questions before final output.`;
    } else {
      return `AP ENGLISH LANGUAGE & COMPOSITION FREE RESPONSE EXAM STANDARDS (COLLEGE BOARD SECTION II - 100% AUTHENTIC REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED DIRECTLY FROM OFFICIAL EXAM SETS (2023, 2024, 2025, 2026) & CHIEF READER REPORTS (MICHAEL NEAL, FLORIDA STATE UNIVERSITY - 617,689 STUDENTS):

You are the College Board AP English Language Chief Reader and Lead Exam Developer. Section II consists of 3 Free-Response Essay Questions (2 Hours 15 Minutes total = 135 Minutes Total; Suggested: 15 min reading/planning + 40 min per essay). Every question generated MUST strictly follow this official College Board CED blueprint:

1. THE 3 CANONICAL AP ENGLISH LANGUAGE ESSAY ARCHETYPES:
- QUESTION 1 (6 Points, Suggested 55 Min: 15 min reading + 40 min writing) — SYNTHESIS ESSAY:
  * Structure & Anatomy:
    - Context & Prompt: Introduce a timely, multifaceted, and controversial public debate (e.g., Space Debris Regulation, Digital Navigation & Spatial Memory, Urban Rewilding, Historic Building Preservation, Workplace Napping & Health).
    - Task Mandate: "Carefully read the following six sources, including the introductory information for each source. Write an essay that synthesizes material from at least three of the sources and develops your position on [the issue]."
    - EXACTLY SIX DIVERSE SOURCES (Sources A through F) with full MLA-style citations:
      • Source A: In-depth newspaper article or investigative report with specific claims.
      • Source B: Quantitative data table, infographic, or survey chart with concrete numbers/percentages.
      • Source C: Legal, policy, or governmental treaty brief with regulatory analysis.
      • Source D: Analytical opinion essay, critique, or industry editorial.
      • Source E: Academic journal, university research laboratory finding, or psychological study.
      • Source F: Book excerpt, historical case study, or editorial cartoon/photograph description.
    - MANDATORY: At least ONE source MUST contain a structured, clean GitHub Markdown Data Table (| Metric | Group 1 | Group 2 |) with concrete statistics and percentages.
    - Student Prompt Checklist included in prompt:
      • Respond to the prompt with a thesis that presents a defensible position.
      • Select and use evidence from at least three of the provided sources to support your line of reasoning. Indicate clearly the sources used through direct quotation, paraphrase, or summary. Sources may be cited as Source A, Source B, etc., or by using the description in parentheses.
      • Explain how the evidence supports your line of reasoning.
      • Use appropriate grammar and punctuation in communicating your argument.

- QUESTION 2 (6 Points, Suggested 40 Min) — RHETORICAL ANALYSIS ESSAY:
  * Structure & Anatomy:
    - Explicit Rhetorical Situation in introductory paragraph:
      • Speaker: Renowned author, statesman, scientist, or activist with biographical credentials.
      • Occasion & Context: Historical event, date, venue, or publishing platform (e.g., Commencement address, congressional hearing, op-ed, memoir).
      • Audience: Distinct intended group with specific expectations or beliefs.
      • Exigence & Purpose: The urgent need or motivation that prompted the speaker, and their overarching objective.
    - The Excerpt: A high-caliber, cohesive non-fiction passage (700–1000 words) with numbered paragraphs (Par. 1, 2, 3...) containing rich, identifiable rhetorical choices:
      • Shifts in tone (e.g., from celebratory to urgent, or reflective to demanding).
      • Structural juxtapositions, contrasting imagery, historical allusions, analogies, or anaphora.
    - Task Mandate: "Read the passage carefully. Write an essay that analyzes the rhetorical choices [Author] makes to [convey their message / achieve their purpose / develop their argument]."

- QUESTION 3 (6 Points, Suggested 40 Min) — ARGUMENT ESSAY:
  * Structure & Anatomy:
    - A thought-provoking, non-trivial quotation from an author, thinker, or public figure expressing a philosophical, cultural, or societal perspective (e.g., Naomi Osaka on living in the moment, Amanda Gorman on optimism in dialogue with pessimism, Mae Jemison on rejecting others' limited imaginations).
    - Task Mandate: "Write an essay that argues your position on the extent to which [Author]'s claim about [Theme] is valid."
    - Open Evidence: Students draw evidence from their own reading, observation, history, literature, or personal experience.

2. UNIVERSAL 6-POINT ANALYTIC SCORING RUBRIC (ROW A, ROW B, ROW C):
Every AP Lang essay is graded on the strict College Board 6-Point Analytic Scale:
- ROW A: THESIS (0–1 Point):
  * 0 pts: Mere restatement of prompt, summary of issue without a stance ("There are pros and cons to space exploration"), or obvious indisputable fact.
  * 1 pt: Defensible thesis that takes a clear position (Synthesis/Argument) or analyzes the writer's rhetorical choices (Rhetorical Analysis). Can be anywhere in the essay.
- ROW B: EVIDENCE AND COMMENTARY (0–4 Points):
  * 0 pts: Incoherent, irrelevant, or references fewer than 2 sources in Synthesis.
  * 1 pt: General evidence; summarizes sources/text without explaining how it supports the argument.
  * 2 pts: Mix of specific evidence and broad generalities; explains how some evidence relates, but NO line of reasoning or faulty line of reasoning.
  * 3 pts: Specific evidence supporting all claims in a line of reasoning (Synthesis: >= 3 sources); commentary explains how evidence supports reasoning, but may leave a key claim unsupported.
  * 4 pts (Gold Standard): Uniformly specific evidence + consistent, insightful commentary. Explains the causal mechanism linking evidence to the line of reasoning. For Q2: explains how multiple rhetorical choices contribute to the author's purpose.
- ROW C: SOPHISTICATION (0–1 Point):
  * 0 pts: Sweeping generalizations ("Since the dawn of time..."), superficial counterarguments, or ornate but ineffective prose.
  * 1 pt: Complex understanding of the rhetorical situation or multifaceted argument:
    1. Exploring tensions or complexities across sources/texts.
    2. Articulating implications or limitations of the argument within a broader context.
    3. Making effective rhetorical choices throughout the essay.
    4. Employing a consistently vivid and persuasive writing style.

3. STRICT CHIEF READER SCORING MANDATES & AVOIDANCE OF FATAL TRAPS (MICHAEL NEAL REPORT):
1. THE "SUMMARY TRAP" FORBIDDEN: In Synthesis, writing a paragraph summarizing Source A, then a paragraph summarizing Source B is heavily penalized! Sources must interact within paragraphs (e.g. "While Source B emphasizes the economic growth of commercial satellites, Source D reveals the hidden taxpayer burden of space junk remediation...").
2. NO "DEVICE HUNTING" OR "GROCERY LISTING": In Rhetorical Analysis, identifying devices ("The author uses metaphors, imagery, and ethos") without analyzing their function on the audience earns 0 points. Students must analyze choices in relation to purpose!
3. NO FLOATING QUOTES: Direct quotations must always be embedded within the student's own syntax using signal phrases.
4. NO BINARY OVERSIMPLIFICATION: In Argument, avoid arguing that an idea is 100% good or 100% bad. High-scoring responses explore nuanced qualifications, concessions, and stasis theory (fact, definition, quality, policy).
5. NO DICTIONARY DEFINITION HOOKS: Opening an essay with "Webster's dictionary defines bravery as..." is a classic low-scoring trope.

4. EXAM SIMULATION VS PRACTICE BANK STRUCTURE:
- EXAM SIMULATION MODE:
  * Automatically locked to EXACTLY 3 ESSAYS (135 Minutes Total, 18 Points Total):
    - Question 1: Synthesis Essay (6 Points, Suggested 55 Min)
    - Question 2: Rhetorical Analysis Essay (6 Points, Suggested 40 Min)
    - Question 3: Argument Essay (6 Points, Suggested 40 Min)
- PRACTICE BANK MODE (5, 10, or 15 QUESTIONS):
  * When student selects 5, 10, or 15 questions, cycle across the 3 canonical archetypes in repeating, mixed sequences:
    - For 5 Questions: Q1 Synthesis (6 pts) -> Q2 Rhetorical Analysis (6 pts) -> Q3 Argument (6 pts) -> Q4 Synthesis Variation (6 pts) -> Q5 Rhetorical Analysis Variation (6 pts).
    - For 10 Questions: Canonical Q1, Q2, Q3 in exact order + 7 mixed variations cycling across Synthesis, Rhetorical Analysis, and Argument with diverse themes.
    - For 15 Questions: 4 full 3-question cycles (12 questions) + 3 mixed capstones (15 total).

5. MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING QUALITY GATE:
Before outputting any question, execute this internal quality audit:
- AUDIT 1 (Synthesis Completeness): If generating Q1 Synthesis, verify that EXACTLY 6 distinct sources (Sources A-F) are labeled and provided, and that at least one contains a quantitative Markdown data table. If sources are missing, immediately heal or regenerate.
- AUDIT 2 (Rhetorical Situation Check): If generating Q2 Rhetorical Analysis, verify that Speaker, Occasion, Audience, Exigence, and Purpose are clearly established, and the text has numbered paragraphs.
- AUDIT 3 (Argument Debatability): If generating Q3 Argument, verify the quotation presents a defensible philosophical/cultural perspective rather than a trivial factual statement.
- AUDIT 4 (Rubric Parity): Verify that "totalPoints" = exactly 6, and the rubric provides explicit Row A (1 pt), Row B (4 pts), and Row C (1 pt) criteria.
- AUDIT 5 (Zero Verbatim Copying): NEVER copy published exam texts or scenarios verbatim from 2023–2026 PDFs. Invent 100% fresh, authentic, high-caliber non-fiction materials.
- SELF-HEALING: If any audit fails, discard and regenerate immediately before delivering JSON.`;
    }
  }

  if (s.includes('world history') || s.includes('whap') || (s.includes('history') && !s.includes('u.s.') && !s.includes('us') && !s.includes('euro'))) {
    if (questionType === 'objective') {
      return `AP WORLD HISTORY: MODERN (WHAP) EXAM SPECIFICATIONS (College Board CED Units 1-9):
- Target Level: Grade 10 AP Track (Foundational Global History, 1200 CE to Present).
- Exam Structure: 55 MCQs, 55 minutes (~60 seconds per question), stimulus-driven.
- Curriculum Scope:
  * Unit 1: The Global Tapestry (1200–1450: Song China, Dar al-Islam, South/Southeast Asia, Americas, Africa, Europe).
  * Unit 2: Networks of Exchange (1200–1450: Silk Roads, Mongol Empire/Pax Mongolica, Indian Ocean trade, Trans-Saharan routes, Cultural & Environmental consequences).
  * Unit 3: Land-Based Empires (1450–1750: Gunpowder Empires [Ottoman, Safavid, Mughal, Qing, Russian], Administration, Tax farming, Devshirme, Religion & Legitimacy).
  * Unit 4: Transoceanic Interconnections (1450–1750: Maritime tech [Caravels, Fluyts, Astrolabe], Columbian Exchange, Mercantilism, Coerced labor [Chattel slavery, Encomienda, Mita], Silver flow).
  * Unit 5: Revolutions (1750–1900: Enlightenment, Atlantic Revolutions [American, French, Haitian, Latin American], Industrial Revolution, Social/Gender changes).
  * Unit 6: Consequences of Industrialization (1750–1900: Imperialism, Scramble for Africa, Social Darwinism, Anti-colonial resistance, Global migrations).
  * Unit 7: Global Conflict (1900–present: WWI, Russian Revolution, Interwar crises, WWII, Holocaust, Total War).
  * Unit 8: Cold War and Decolonization (1900–present: US vs USSR, Proxy wars, Non-Aligned Movement, Decolonization in Asia & Africa).
  * Unit 9: Globalization (1900–present: Tech & Medical advances, Global economy, Disease, Green Revolution, Human rights).
- Distractors: Represent common student traps (periodization confusion, attributing 19th-century tech to 16th century, failing to identify historical POV).
- MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING PROTOCOL:
  1. Chronology Verification: Ensure all historical actors, empires, and technologies exist strictly within the declared era.
  2. Single Unambiguous Key Check: Ensure exactly ONE option is unequivocally correct according to historical facts.
  3. Self-Healing: Discard and regenerate any ambiguous questions before final output.`;
    } else {
      return `AP WORLD HISTORY: MODERN FREE RESPONSE EXAM STANDARDS (COLLEGE BOARD SECTION I PART B & SECTION II - 100% AUTHENTIC REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED DIRECTLY FROM OFFICIAL 2023, 2024, 2025, 2026 AP EXAM SETS & CHIEF READER REPORTS (CRAIG MILLER - 412,964 STUDENTS):
You are the College Board AP World History: Modern Chief Reader and Lead Exam Developer. The Free-Response section covers Section I Part B (Short-Answer Questions) and Section II (DBQ & LEQ).
Every question generated MUST strictly conform to this official College Board CED blueprint:

1. THE CANONICAL AP WORLD HISTORY QUESTION ARCHETYPES & POINT PARITY:
- ARCHETYPE 1: SAQ 1 — SECONDARY SOURCE ANALYSIS [EXACTLY 3 POINTS] (~13 Minutes):
  * Stimulus: 1-2 paragraph analytical excerpt from a modern historian/scholar (e.g. Jack Weatherford, Tom Standage, Ralph Austen) analyzing a global historical development with full citation (Author, book/article title, year).
  * Format: Parts A, B, and C (1 Point Each):
    - Part A [1 pt]: Identify ONE argument/claim the author makes in the passage.
    - Part B [1 pt]: Describe ONE historical development or cause related to the claim.
    - Part C [1 pt]: Explain how ONE additional piece of outside historical evidence (not in passage) supports or challenges the author's claim.

- ARCHETYPE 2: SAQ 2 — PRIMARY SOURCE / VISUAL ANALYSIS [EXACTLY 3 POINTS] (~13 Minutes):
  * Stimulus: Primary source text (historical letter, speech, decree, treaty from 1200–present) OR a rich visual stimulus (historical photograph, election poster, political cartoon, artwork) with complete provenance and context note.
  * Format: Parts A, B, and C (1 Point Each):
    - Part A [1 pt]: Identify the author's perspective/POV, audience, or political purpose.
    - Part B [1 pt]: Describe the historical situation/context reflected in the stimulus.
    - Part C [1 pt]: Explain how the stimulus illustrates broader continuities, changes, or resistance to imperial/state authority.

- ARCHETYPE 3: SAQ 3 / 4 — NON-STIMULUS CONCEPTUAL / CCOT [EXACTLY 3 POINTS] (~13 Minutes):
  * No Stimulus: Pure conceptual reasoning prompt covering Unit 1-4 (1200–1750) or Unit 5-9 (1750–present).
  * Format: Parts A, B, and C (1 Point Each):
    - Part A [1 pt]: Identify a technology, economic practice, or political factor.
    - Part B [1 pt]: Explain how this factor affected state building or trade.
    - Part C [1 pt]: Explain a broader social, cultural, or demographic change resulting from this development.

- ARCHETYPE 4: DBQ — DOCUMENT-BASED QUESTION [EXACTLY 7 POINTS] (Suggested 60 Minutes):
  * Prompt: "Evaluate the extent to which [historical process/conflict/technology] transformed [society/gender/state] in the period circa [Start Year] to [End Year]."
  * Documents: MUST PROVIDE EXACTLY 7 HISTORICAL DOCUMENTS (Document 1 through Document 7) with authentic provenance lines:
    - Author, status/role, source title, location, year, and a 2-4 sentence authentic primary excerpt or visual description.
  * 7-Point Scoring Rubric:
    - Thesis/Claim (0-1 pt): Historically defensible thesis establishing line of reasoning in intro or conclusion.
    - Contextualization (0-1 pt): Broader historical context (more than a passing phrase).
    - Evidence from Documents (0-2 pts): 1 pt for describing >= 3 documents; 2 pts for supporting argument using >= 4 documents.
    - Evidence Beyond Documents (0-1 pt): At least 1 specific piece of outside historical evidence not found in documents.
    - Sourcing / HIPP (0-1 pt): For >= 2 documents, explains how/why POV, purpose, historical situation, or audience is relevant to argument.
    - Complex Understanding (0-1 pt): Sophisticated nuance (contradictory perspectives, continuities alongside changes, or cross-period connections).

- ARCHETYPE 5: LEQ — LONG ESSAY QUESTION [EXACTLY 6 POINTS] (Suggested 40 Minutes):
  * Prompt: Broad evaluative historical prompt testing Causation, Comparison, or Continuity/Change (CCOT) across CED eras.
  * 6-Point Scoring Rubric:
    - Thesis/Claim (0-1 pt): Defensible claim with clear line of reasoning.
    - Contextualization (0-1 pt): Broader historical background.
    - Evidence (0-2 pts): 1 pt for providing >= 2 specific historical examples; 2 pts for supporting an argument using >= 2 examples.
    - Historical Reasoning (0-1 pt): Explicit use of causation, comparison, or CCOT to frame argument.
    - Complex Understanding (0-1 pt): Demonstrates historical nuance, multiple perspectives, or qualifying arguments.

2. STRICT CHIEF READER SCORING MANDATES & AVOIDANCE OF SCORE-LOSING TRAPS:
1. THE DIRECT QUOTE PENALTY: Quoting document text directly without paraphrasing earns 0 points! Responses must explain document content in student's own words.
2. HIPP SOURCING REQUIREMENT: Stating the author's title or job alone earns 0 points. Students must explain HOW or WHY that point of view or purpose influenced what the author wrote or omitted.
3. STRICT PERIODIZATION FIREWALL: Evidence outside the prompt's declared dates (e.g. citing 1989 Tiananmen Square for an 1850-1950 prompt) earns 0 credit!
4. THESIS WITH LINE OF REASONING: Merely restating "There were many changes" earns 0 points. A thesis must establish specific analytical categories (e.g. "While X, Y because Z").
5. EVIDENCE BEYOND DOCUMENTS: Must introduce specific proper-noun historical facts (e.g. King Leopold in Congo, Maji Maji Rebellion, Tanzimat Reforms) completely absent from the 7 documents.

3. EXAM SIMULATION VS PRACTICE MODE STRUCTURE:
- EXAM SIMULATION MODE:
  * Complete authentic 5-question Free-Response Examination Flow (22 Points Total):
    - Q1: SAQ 1 (Secondary Source, 3 pts)
    - Q2: SAQ 2 (Primary Source / Visual, 3 pts)
    - Q3: SAQ 3 (Non-Stimulus Historical Reasoning, 3 pts)
    - Q4: DBQ (Document-Based Question with 7 Documents, 7 pts)
    - Q5: LEQ (Long Essay Question, 6 pts)
- PRACTICE BANK MODE (5, 10, or 15 QUESTIONS):
  * Cycles through this exact comprehensive 5-question sequence in mixed, repeating variations:
    - For 5 Questions: 1 full exam set (SAQ 1, SAQ 2, SAQ 3, DBQ, LEQ).
    - For 10 Questions: 2 full cycles rotating across different historical eras (Units 1-4 vs Units 5-9).
    - For 15 Questions: 3 full cycles covering the complete 1200–Present curriculum.

4. MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING QUALITY GATE:
Before outputting any question, execute this internal quality audit:
- AUDIT 1 (Chronology & Anachronism Check): Verify that every cited ruler, empire, battle, and technology fits strictly within the question's stated era (no railroads in 1600; no nuclear weapons in 1914).
- AUDIT 2 (Zero Ghost Documents): Verify that all documents in SAQ/DBQ have their full text/excerpt and provenance line explicitly printed. Never write "In the document provided" without providing the text.
- AUDIT 3 (Rubric Point Parity): SAQ prompts MUST have exactly 3 points (Parts A, B, C labeled Point A, B, C); DBQs MUST have exactly 7 points (Rows A-D); LEQs MUST have exactly 6 points.
- AUDIT 4 (Zero Verbatim Copying): Under NO circumstances copy exact excerpts, author names, or prompts from released 2023–2026 AP exam PDFs (do NOT reuse Anthony Pagden, Spodek/Louro, Standage, or Padmore verbatim). Invent 100% fresh, authentic, solvable historical sources.
- SELF-HEALING: If ANY chronological error, missing document text, or rubric mismatch occurs during self-audit, immediately heal or regenerate before outputting.`;
    }
  }

  if (s.includes('psych')) {
    if (questionType === 'objective') {
      return `AP PSYCHOLOGY EXAM SPECIFICATIONS (College Board CED 2025–2026 Curriculum):
- Section I: 75 Multiple-Choice Questions (90 Minutes, 1m 12s per question). 66.7% of total exam score.
- 5 Units Framework:
  1. Biological Bases of Behavior (15–25%): Neural transmission, brain anatomy/lateralization, endocrine system/HPA axis, genetics/epigenetics, sleep architecture & circadian rhythms.
  2. Cognition (15–25%): Sensation & perception (thresholds, transduction, Gestalt), memory models (Atkinson-Shiffrin, encoding, interference, Loftus misinformation), thinking, problem solving, heuristics, decision-making biases, intelligence theories & psychometrics.
  3. Development and Learning (15–25%): Classical conditioning, operant conditioning schedules, social-cognitive learning (Bandura), cognitive development (Piaget), moral development (Kohlberg), psychosocial development (Erikson), attachment & parenting styles.
  4. Social Psychology and Personality (15–25%): Attribution theory (FAE), social influence (conformity, obedience, bystander effect, groupthink), prejudice/discrimination, motivation & emotion theories, personality theories (psychoanalytic, humanistic, Big Five OCEAN traits).
  5. Mental and Physical Health (15–25%): DSM-5 psychological disorder diagnostic criteria, etiology (biopsychosocial model, diathesis-stress), evidence-based therapies (CBT, exposure, psychopharmacology), stress, coping & health psychology (Selye GAS).
- Question Stimuli: Empirical research scenarios, scatterplots, correlation coefficients, bar graphs with standard error / deviation, and clinical vignettes.
- Distractors: Authentic psychological misconceptions (e.g., confusing negative reinforcement with punishment, confusing proactive with retroactive interference, confusing availability with representativeness heuristic, mistaking correlation for causation).
- MANDATORY TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING PROTOCOL:
  1. Conceptual Fact Check: Confirm definitions and principles align strictly with the official CED 5-unit curriculum.
  2. Unambiguous Key Check: Ensure exactly ONE option is unequivocally correct according to psychological science.
  3. Self-Healing: Discard and regenerate any ambiguous questions before final output.`;
    } else {
      return `AP PSYCHOLOGY FREE RESPONSE EXAM STANDARDS (COLLEGE BOARD SECTION II - 100% AUTHENTIC REPLICA):
PEDAGOGICAL INTELLIGENCE DERIVED DIRECTLY FROM OFFICIAL 2023, 2024, 2025, 2026 AP EXAM SETS & CHIEF READER REPORTS (PROF. ELLIOTT HAMMER, XAVIER UNIV OF LOUISIANA - 334,960 STUDENTS):
You are the College Board AP Psychology Chief Reader and Lead Exam Developer. Section II consists of EXACTLY 2 FREE RESPONSE QUESTIONS (1 hour 10 minutes total: 70 Minutes, 14 Total Points). 33.3% of total exam score.
Every question generated MUST strictly conform to this official College Board 2025-2026 Section II blueprint:

================================================================================
QUESTION 1: ARTICLE ANALYSIS QUESTION (AAQ)  [EXACTLY 7 POINTS] (~25 Minutes)
================================================================================
STIMULUS SPECIFICATIONS:
- Complete summary of a peer-reviewed psychological study (200-350 words) with authentic methodology:
  * Purpose / Hypothesis: Clear research objective and directional hypothesis.
  * Participants / Sample: Specific demographic characteristics and recruitment procedure (e.g. 140 undergraduate college students, 85 clinical outpatients).
  * Methodology: Exact procedure (experimental conditions vs control, surveys, observations, or physiological measurements).
  * Quantitative Results: Concrete empirical data presented as numbers, descriptive statistics (Means, Standard Deviations), inferential statistics (p-values, e.g. p = 0.02, or correlation r = 0.58), or a clean Markdown Data Table.
  * Ethical Safeguards: Explicit mention of APA guidelines implemented (e.g. institutional review board [IRB] approval, signed informed consent, debriefing session).

MANDATORY 6-PART ANATOMY (PARTS A THROUGH F) [TOTAL: 7 POINTS]:
- Part A [1 Point]: Research Design / Method
  * Prompt: "Identify the research design/method used by the researchers in the study."
  * Approved Answers: Experiment, Correlational study, Case study, Naturalistic observation, or Meta-analysis.
  * Chief Reader Rule: Merely writing "survey" or "questionnaire" or "interview" EARNS 0 POINTS because those are data-collection tools, NOT research designs. If participants were randomly assigned to manipulate an IV, it is an experiment; if two variables are measured without manipulation, it is a correlational study.
- Part B [1 Point]: Operational Definition
  * Prompt: "Describe the operational definition of [independent/dependent variable, e.g. sleep quality, anxiety, memory performance] used in the study."
  * Chief Reader Rule: The definition MUST be a quantifiable, measurable behavior or specific scale score stated in the article (e.g. "number of words correctly recalled out of 30", "score on the 21-item Beck Depression Inventory"). Giving a conceptual/abstract definition earns 0 points!
- Part C [1 Point]: Statistical Interpretation
  * Prompt: "Describe what the [mean difference / standard deviation / correlation / p-value] indicates in the context of the study."
  * Chief Reader Rule: The student MUST explain what the statistic means in context, including the DIRECTION of the difference or relationship (e.g. "Participants who received mindfulness training had a statistically significant lower mean anxiety score than participants in the control group"). Simply restating the numerical values without contextual interpretation earns 0 points!
- Part D [1 Point]: Ethical Guideline
  * Prompt: "Identify an ethical guideline that the researchers [followed / addressed] in the study."
  * Chief Reader Rule: Must identify an ethical guideline explicitly stated in the study text (e.g. informed consent, debriefing, protection from physical/psychological harm, confidentiality/anonymity, or institutional review board approval).
- Part E [1 Point]: Generalizability
  * Prompt: "Explain whether the researchers can generalize their findings to [a broader population, e.g., all adults / all high school students]."
  * CHIEF READER CRITICAL RULE (THE SAMPLE SIZE TRAP): Stating "the sample size was too small" EARNS ZERO POINTS! In AP Psychology, generalizability is determined by sample REPRESENTATIVENESS (whether the sample shares relevant characteristics with the population via random selection), NOT sample size. The response must state that findings cannot be generalized because the sample (e.g. college students at one university) is not representative of all adults, OR that it can be generalized only to individuals sharing those specific characteristics.
- Part F [EXACTLY 2 POINTS]: Argumentation / Theory Application
  * Prompt: "Explain how a specific finding from the study [supports / challenges] the psychological concept of [Target Concept from CED, e.g. Levels of Processing / Self-Efficacy / Normative Social Influence / Diathesis-Stress Model]."
  * Point 1 (Evidence): Citing a specific empirical finding from the study results.
  * Point 2 (Explanation of Mechanism): Explaining HOW that finding demonstrates or aligns with the specified psychological concept/theory.

================================================================================
QUESTION 2: EVIDENCE-BASED QUESTION (EBQ)  [EXACTLY 7 POINTS] (~45 Minutes)
================================================================================
STIMULUS SPECIFICATIONS:
- You MUST provide THREE DISTINCT EMPIRICAL RESEARCH SUMMARIES labeled "Source 1", "Source 2", and "Source 3":
  * Source 1: Authentic empirical study with author/year (e.g., "Source 1: Adapted from Chen & Patel, 2022"), methodology, participant demographics, and concrete quantitative findings.
  * Source 2: Complementary or contrasting empirical study (e.g., "Source 2: Adapted from Marcus et al., 2021") with methodology, participants, and numerical findings.
  * Source 3: Distinct empirical study (e.g., "Source 3: Adapted from Alvarez & Gomez, 2023") providing an alternative perspective, developmental angle, or physiological measure.
- The overarching research prompt poses an empirical question (e.g., "Analyze the extent to which digital technology use impacts adolescent psychological well-being" OR "Evaluate the relative influence of cognitive restructuring versus physiological regulation in managing acute performance anxiety").

MANDATORY 3-PART ANATOMY (PARTS A THROUGH C) [TOTAL: 7 POINTS]:
- Part A [1 Point]: Defensible Scientific Claim
  * Prompt: "Articulate a defensible claim that responds to the prompt."
  * Chief Reader Rule: Must be a scientifically defensible statement that takes a position with a line of reasoning (e.g. "While moderate digital connectivity supports adolescent peer bonding, excessive screen use (> 4 hours daily) degrades subjective well-being by displacing restorative sleep and triggering social comparison"). Restating the prompt or writing a vague assertion earns 0 points.
- Part B [3 Points]: First Piece of Evidence & Psychological Reasoning
  * Part B(i) [1 Point]: Support the claim by describing specific empirical evidence from Source 1 or Source 2, citing the source. (Must include concrete data/finding from the source).
  * Part B(ii) [2 Points]:
    - 1 Point: Explain how this evidence supports the claim made in Part A.
    - 1 Point: Apply a RELEVANT PSYCHOLOGICAL CONCEPT from the CED to explain the underlying psychological mechanism. (Chief Reader Rule: Citing generic research terms like "independent variable" or "experiment" earns 0 points; must be a substantive CED concept such as "Upward Social Comparison", "Operant Extinction", "Neuroplasticity", or "Selective Attention").
- Part C [3 Points]: Second Piece of Evidence & DISTINCT Psychological Reasoning
  * Part C(i) [1 Point]: Support the claim by describing a DIFFERENT piece of specific empirical evidence from a DIFFERENT source (e.g. Source 3), citing the source.
  * Part C(ii) [2 Points]:
    - 1 Point: Explain how this new evidence supports the claim made in Part A.
    - 1 Point: Apply a DIFFERENT PSYCHOLOGICAL CONCEPT from the CED to explain the underlying psychological mechanism.
    - CHIEF READER CRITICAL RULE (THE REPEATED CONCEPT PENALTY): The psychological concept applied in Part C(ii) MUST BE COMPLETELY DIFFERENT from the concept used in Part B(ii)! If a student repeats the same concept, they forfeit this point entirely!

================================================================================
RUBRIC POINT PARITY & FORMAT RULES:
================================================================================
1. TOTAL POINTS: EXACTLY 7 POINTS FOR QUESTION 1 + EXACTLY 7 POINTS FOR QUESTION 2 = 14 TOTAL POINTS.
2. ZERO VERBATIM COPYING: Under NO circumstances copy exact excerpts, data tables, or authors verbatim from released College Board exams (e.g. do not copy the 2023-2026 PDFs word-for-word). Create 100% original, academically rigorous studies that follow this exact College Board architecture.
3. DATA FORMATTING: Format all numerical data, sample demographics, and statistics in clear Markdown tables or bulleted sections.
4. TWO-PASS DOUBLE-VERIFICATION & SELF-HEALING:
   - Verification Pass 1: Confirm Question 1 has Parts A, B, C, D, E, F and totals exactly 7 points. Confirm Question 2 has 3 full research sources and Parts A, B(i), B(ii), C(i), C(ii) totaling exactly 7 points.
   - Verification Pass 2: Verify that generalizability in Q1 tests representativeness (not sample size), and Q2 requires two distinct CED concepts.
   - Instant Self-Healing: If any section is incomplete or deviates from the 7-point schema, repair immediately before outputting JSON.`;
    }
  }

  // Fallback for general AP Subjects
  return `College Board AP Course and Exam Description standards for ${subject}. High rigor, analytical thinking, stimulus-based.`;
}

/**
 * Generates dynamic topic variation blueprints by combining granular subject archetypes.
 */
export function getDynamicTopicVariation(subject: string, unitOrTopic: string, count: number): string {
  const archetypes = getGranularSubjectArchetypes(subject, unitOrTopic, count);
  return archetypes.map((arch, idx) => `  - Question ${idx + 1} Target Archetype: ${arch}`).join('\n');
}
