import { APNoteFormula, APNoteTheorem, APNoteSection, APNoteWorkedExample, APNoteDiagram, APUnitNote } from './types';
export type { APNoteFormula, APNoteTheorem, APNoteSection, APNoteWorkedExample, APNoteDiagram, APUnitNote };

export const AP_STATISTICS_NOTES: APUnitNote[] = [
  // ==========================================
  // UNIT 1: EXPLORING ONE-VARIABLE DATA AND COLLECTING DATA
  // Official Fall 2026 Redesign Framework (CED Units 1 & 3 consolidated)
  // Exam Weight: 20%–30% of AP Exam (Highest Weight!)
  // ==========================================
  {
    unitId: 'u1',
    unitNumber: 1,
    title: 'Exploring One-Variable Data and Collecting Data',
    examWeight: '20%–30% of AP Exam (Highest Weight!)',
    bigIdea: 'Patterns in univariate data reveal distributions of categorical and quantitative variables. Rigorous data collection via random sampling allows generalization to populations, while random assignment in experiments establishes causality.',
    keyTheorems: [
      {
        name: 'The 1.5 x IQR Rule for Outliers',
        conditions: 'Quantitative distribution with first quartile Q1, third quartile Q3, and Interquartile Range IQR = Q3 - Q1.',
        conclusion: 'An observation x is an outlier if x < Q1 - 1.5(IQR) or x > Q3 + 1.5(IQR).',
        apTip: 'On FRQs, you MUST show the numeric calculations for both fences: Q1 - 1.5(IQR) and Q3 + 1.5(IQR), and explicitly compare the candidate data value to the fence before declaring it an outlier!'
      },
      {
        name: 'The Empirical Rule (68-95-99.7% Rule)',
        conditions: 'The distribution of the quantitative variable must be approximately Normal (bell-shaped and symmetric).',
        conclusion: 'Approximately 68% of observations fall within 1 standard deviation of the mean (mu +/- sigma), 95% within 2 standard deviations (mu +/- 2sigma), and 99.7% within 3 standard deviations (mu +/- 3sigma).',
        apTip: 'Never apply the 68-95-99.7% rule to skewed distributions or distributions without verified approximate normality.'
      },
      {
        name: 'The Golden Rule of Scope of Inference',
        conditions: 'Distinguishing between random selection and random assignment in study design.',
        conclusion: 'Random selection of individuals allows inferences to be generalized to the broader population. Random assignment of experimental units to treatments allows inferences about cause and effect.',
        apTip: 'Observational studies NEVER establish causality because treatments are not randomly assigned, leaving open alternative explanations from confounding variables.'
      },
      {
        name: 'Principles of Experimental Design',
        conditions: 'Designing a valid scientific experiment with experimental units and treatments.',
        conclusion: 'A well-designed experiment incorporates: (1) Comparison of two or more treatments, (2) Random assignment to balance confounding variables across groups, (3) Control of extraneous variables, (4) Replication with sufficient experimental units, and (5) Blocking when appropriate.',
        apTip: 'Remember: Blocking is to experiments what stratification is to sampling. You block to reduce known variation in the response variable associated with an identifiable characteristic.'
      }
    ],
    formulas: [
      {
        name: 'Sample Mean',
        latex: '\\bar{x} = \\frac{\\sum x_i}{n}',
        explanation: 'The arithmetic average of n observations. Non-resistant to extreme outliers or skewness.'
      },
      {
        name: 'Sample Standard Deviation',
        latex: 's_x = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}',
        explanation: 'Measures typical distance of observations from the sample mean. Denominator is (n - 1) degrees of freedom. Non-resistant to outliers.'
      },
      {
        name: 'Interquartile Range (IQR)',
        latex: '\\text{IQR} = Q_3 - Q_1',
        explanation: 'The range of the middle 50% of ordered data. Resistant to extreme outliers and skewness.'
      },
      {
        name: 'Outlier Boundary Fences',
        latex: '\\text{Lower Fence} = Q_1 - 1.5(\\text{IQR}), \\quad \\text{Upper Fence} = Q_3 + 1.5(\\text{IQR})',
        explanation: 'Any observation falling strictly beyond these two boundary cutoffs is flagged as a statistical outlier.'
      },
      {
        name: 'Standardized Score (Z-Score)',
        latex: 'z = \\frac{x - \\mu}{\\sigma} \\quad \\text{or} \\quad z = \\frac{x - \\bar{x}}{s_x}',
        explanation: 'Measures the number of standard deviations an observation x lies above (z > 0) or below (z < 0) the mean.'
      }
    ],
    sections: [
      {
        heading: '1. Categorical vs. Quantitative Variables & Graphical Displays (CED 1.1–1.4)',
        content: `Understanding variable types and selecting appropriate graphical displays is fundamental:
- **Categorical Variables**: Place individuals into categories or groups (e.g., blood type, college major, zip code).
  - *Graphical Displays*: Frequency tables, relative frequency tables, bar charts, and segmented (stacked) bar charts.
  - *Golden Rule*: Bar charts MUST have spaces between bars to indicate distinct discrete categories.
- **Quantitative Variables**: Take numerical values for which arithmetic operations (like averaging) make sense (e.g., height, test scores, reaction time).
  - *Discrete Quantitative*: Countable values with distinct gaps (e.g., number of siblings).
  - *Continuous Quantitative*: Unbroken measurements within an interval (e.g., race completion time, weight).
  - *Graphical Displays*: Dotplots, stemplots (stem-and-leaf), histograms, and boxplots.
  - *Golden Rule for Histograms*: Bars touch each other; the height of each bar represents the frequency (or relative frequency) of values falling within each equal-width bin interval.

| Variable Type | Core Nature | Recommended Visual Displays | Key Graphical Features | Common AP Exam Pitfalls |
| :--- | :--- | :--- | :--- | :--- |
| **Categorical** | Qualitative groups or labels | Frequency Table, Relative Frequency Table, Bar Chart, Segmented Bar Chart | Distinct categories on axis; spaces between bars | Never describe categorical data as "skewed" or "normal"; never calculate mean of zip codes. |
| **Quantitative Discrete** | Countable numeric values with gaps (0, 1, 2...) | Dotplot, Stem-and-leaf plot | Shows individual data points; reveals exact clusters and gaps | Forgetting to provide a **Key** for stemplots (e.g. $4 \\mid 2 = 42$); omission loses credit. |
| **Quantitative Continuous** | Measurements along an unbroken interval | Histogram, Modified Boxplot, Cumulative Relative Frequency Plot | Binned intervals (bins touch); 5-number summary with outlier fences | Confusing histograms with bar charts; boxplots do not reveal unimodality vs multimodality.`
      },
      {
        heading: '2. Describing Univariate Quantitative Distributions: SOCS Framework (CED 1.5–1.7)',
        content: `Whenever asked on an AP FRQ to "describe" or "compare" distributions, you MUST address all 4 elements of **SOCS** with explicit context and comparative language:
1. **S - Shape**:
   - *Symmetric*: Left and right halves mirror each other; unimodal bell or uniform.
   - *Skewed Right (Positively Skewed)*: Long tail stretches to the right (toward higher positive values); peak on the left.
   - *Skewed Left (Negatively Skewed)*: Long tail stretches to the left (toward lower values); peak on the right.
   - *Modality*: Unimodal (one peak), bimodal (two peaks), or multimodal.
2. **O - Outliers**:
   - Identify any unusually high or low values. State candidate outliers by name or calculate them using the $1.5 \\times \\text{IQR}$ rule. Mention any notable clusters or gaps.
3. **C - Center**:
   - Provide a numerical measure of center. Use **Median** for skewed data or data with outliers (resistant). Use **Mean** for approximately symmetric distributions with no outliers.
4. **S - Spread**:
   - Provide a numerical measure of variability. Pair **Median with IQR** (or Range). Pair **Mean with Standard Deviation**.
- **Crucial AP Comparison Rule**: When comparing two distributions on FRQs, use explicit comparative terms such as *"Distribution A has a greater median than Distribution B"* or *"Distribution A exhibits more variability than Distribution B"*. Never simply list values in isolation!`
      },
      {
        heading: '3. Resistant vs. Non-Resistant Summary Statistics & Mean-Median Relationships (CED 1.8)',
        content: `Summary statistics react differently to extreme values and skewness:

| Statistic | Type / Role | Formula / Notation | Resistant to Outliers? | Behavior Under Skewness | AP FRQ Recommendation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mean** | Center | $\\bar{x} = \\frac{\\sum x_i}{n}$ | **NO (Non-Resistant)** | Pulled toward extreme values in tail (Right: $\\bar{x} > M$; Left: $\\bar{x} < M$) | Use strictly for roughly symmetric distributions with no outliers. |
| **Median ($M$)** | Center | Middle 50th percentile | **YES (Resistant)** | Stays stable at the center of ranked observations | **Always prefer Median** for skewed distributions or datasets with outliers. |
| **Standard Deviation** | Spread | $s_x = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ | **NO (Non-Resistant)** | Inflated dramatically by squaring large outlier distances | Pair with Mean; never report alone for heavily skewed data. |
| **IQR** | Spread | $\\text{IQR} = Q_3 - Q_1$ | **YES (Resistant)** | Completely unaffected by extreme values beyond quartiles | **Always pair with Median** to report resistant spread. |
| **Range** | Spread | $\\text{Max} - \\text{Min}$ | **NO (Extreme Sensitivity)** | Highly volatile; depends entirely on single most extreme points | Supplementary only; never report as sole spread metric on FRQs. |

- **Summary of Mean vs. Median Shift Rule**:
  - *Roughly Symmetric*: $\\text{Mean} \\approx \\text{Median}$
  - *Skewed Right*: $\\text{Mean} > \\text{Median}$ (extreme high values inflate the mean)
  - *Skewed Left*: $\\text{Mean} < \\text{Median}$ (extreme low values depress the mean)`
      },
      {
        heading: '4. Standardized Scores (Z-Scores) & Normal Distributions (CED 1.9–1.10)',
        content: `Standardizing data allows direct comparison between observations from different distributions:
- **Calculating a Z-Score**:
  $$z = \\frac{x - \\mu}{\\sigma}$$
- **Interpretation in AP Context**:
  - *"The value $x$ is $|z|$ standard deviations above (if $z > 0$) or below (if $z < 0$) the mean of [contextual variable]."*
- **Effects of Linear Transformations on Data**:
  - *Adding or Subtracting a Constant $c$ ($x_{new} = x + c$)*:
    - Center & Location (Mean, Median, Quartiles, Min, Max): Increases or decreases by $c$.
    - Spread (Standard Deviation, IQR, Range): **UNCHANGED**!
    - Shape: **UNCHANGED**!
  - *Multiplying or Dividing by a Constant $c > 0$ ($x_{new} = c \\cdot x$)*:
    - Center & Location: Multiplied or divided by $c$.
    - Spread: Multiplied or divided by $c$.
    - Shape: **UNCHANGED**!
- **Standard Normal Calculations**:
  - For normal distributions $N(\\mu, \\sigma)$, find probabilities using $z = \\frac{x - \\mu}{\\sigma}$ and standard normal tables (or \`normalcdf(lower, upper, mu, sigma)\`).
  - To find cutoffs for given percentiles, use \`invNorm(area_to_left, mu, sigma)\`.`
      },
      {
        heading: '5. Data Collection: Sampling Methods & Potential Biases (CED 3.1–3.4)',
        content: `Sampling methodologies dictate whether findings can be generalized to the target population:

| Sampling Methodology | Implementation Strategy | Primary Advantage | Major Vulnerability / Bias | AP Mnemonic / Rule |
| :--- | :--- | :--- | :--- | :--- |
| **Simple Random Sample (SRS)** | Number all population units $1$ to $N$; draw $n$ unique labels using RNG | Equal chance for every unit AND every possible combination of size $n$ | Practical gold standard; unbiased | Baseline comparison for all sampling theory. |
| **Stratified Random Sample** | Divide into **homogeneous** strata (e.g. grade levels); take an independent SRS within **every** stratum | Guarantees representation of key subgroups; **reduces sampling variability** | Requires prior knowledge of population strata | **"SOME FROM ALL"**; strata are internally homogeneous. |
| **Cluster Sample** | Divide into **heterogeneous** mini-populations (e.g. homerooms); randomly pick *some* clusters and survey **all** units in them | Cost-effective and logistically convenient | High variability if clusters do not mirror population | **"ALL FROM SOME"**; clusters are internally heterogeneous. |
| **Systematic Sample** | Order population $1$ to $N$; pick random starting point $1$ to $k$, then select every $k$-th individual | Simple to execute in production or field lines | Biased if list possesses a hidden cyclical or periodic pattern | Check for periodic periodicity in sampling frame. |
| **Voluntary Response (Uncontrolled)** | Open broadcast invitation; participants self-select | Zero logistics cost | **Severe Bias**: Attracts individuals with extreme (usually negative) opinions | **Never allows generalization** to population! |
| **Convenience Sample (Uncontrolled)** | Select easiest individuals to reach (e.g. first 50 shoppers at a mall) | Quick and inexpensive | **Undercoverage**: Leaves out large segments of target population | **Severely biased**; unrepresentative of target population. |

- **Key Sources of Nonsampling & Sampling Bias**:
  - *Undercoverage*: Systematic exclusion of specific demographics from the sampling frame (e.g. phone book surveys excluding cell-only users).
  - *Nonresponse Bias*: Selected participants cannot be contacted or decline to participate (fundamentally distinct from voluntary response!).
  - *Response / Question Wording Bias*: Leading phrasing, confusing wording, or interviewer behavior influences the responses given.`
      },
      {
        heading: '6. Principles of Experimental Design & Blocking (CED 3.5–3.7)',
        content: `Experimental design establishes causal relationships between explanatory and response variables:

| Experimental Principle | Operational Definition | Role in Causal Inference | AP FRQ Scoring Justification Template |
| :--- | :--- | :--- | :--- |
| **Comparison** | Comparing two or more treatments (including a control or placebo) | Eliminates confounding from outside temporal or environmental effects | "Comparing Treatment A to Control isolates the active effect from background environmental changes." |
| **Random Assignment** | Allocating experimental units to treatments using chance | **Balances confounding variables** across groups; creates roughly equivalent baseline groups | "Random assignment balances unidentified confounding variables across treatment groups so differences in response can be attributed to the treatment." |
| **Control** | Keeping extraneous conditions identical across treatment groups | Minimizes unexplained variability in the response variable | "Controlling room temperature and lighting prevents these external factors from adding extraneous noise to response measurements." |
| **Replication** | Imposing treatments on a sufficient number of experimental units | Distinguishes treatment effects from random chance / natural variation | "Using 40 subjects per group ensures differences are reproducible and not merely an artifact of chance variation." |
| **Blinding (Single / Double)** | Concealing treatment identity from subjects and/or evaluators | Prevents placebo effect in subjects and subconscious bias in evaluators | "Double blinding ensures neither patients nor evaluating physicians bias self-reports or objective ratings." |
| **Randomized Blocking** | Grouping units by a known nuisance variable *before* random assignment | **Reduces within-group variability**; increases statistical power | "Block by initial health status to account for known variability in recovery time, then randomly assign treatments within each block." |`
      }
    ],
    workedExamples: [
      {
        title: 'Comparing Distributions and Rigorous Outlier Calculation',
        topicRef: 'CED Stat 1.6 & 1.7 Summarizing and Comparing Quantitative Data',
        question: 'A quality engineer records the battery lifespans (in hours) of two prototype smartphones under continuous video streaming. Prototype A has a 5-number summary of: Min = 6.2, Q1 = 8.4, Median = 9.8, Q3 = 10.6, Max = 15.1. (a) Determine whether the maximum lifespan of 15.1 hours for Prototype A is a statistical outlier using the 1.5 x IQR rule. (b) If Prototype B has a symmetric distribution with Mean = 9.5 hours and Standard Deviation = 1.1 hours, compare the centers and spreads of the two prototypes.',
        solutionSteps: [
          'Step 1: Calculate the Interquartile Range (IQR) for Prototype A: IQR = Q3 - Q1 = 10.6 - 8.4 = 2.2 hours.',
          'Step 2: Calculate 1.5 times the IQR: 1.5 * 2.2 = 3.3 hours.',
          'Step 3: Calculate the upper outlier fence: Upper Fence = Q3 + 1.5(IQR) = 10.6 + 3.3 = 13.9 hours.',
          'Step 4: Compare the maximum value (15.1 hours) to the upper fence: Since 15.1 > 13.9, the observation 15.1 hours is confirmed to be an outlier.',
          'Step 5: Compare Centers in context: Prototype A has a median battery life of 9.8 hours, which is slightly greater than the mean battery life of Prototype B (9.5 hours).',
          'Step 6: Compare Spreads in context: Prototype A has an IQR of 2.2 hours and a range of 15.1 - 6.2 = 8.9 hours, whereas Prototype B has a standard deviation of 1.1 hours (with approximately 95% of lifespans falling within 2 standard deviations, or between 7.3 and 11.7 hours). Prototype A exhibits greater overall variability in battery lifespan than Prototype B.'
        ],
        finalAnswer: '15.1 hours is an outlier (15.1 > 13.9). Prototype A has a greater center (median 9.8 hrs vs 9.5 hrs) and exhibits greater spread than Prototype B.',
        apScoringTip: 'Always explicitly show the numeric fence calculation (10.6 + 3.3 = 13.9) and explicitly state the inequality (15.1 > 13.9). On comparisons, always use comparative words like "greater than" or "more variable".'
      },
      {
        title: 'Designing a Randomized Block Experiment',
        topicRef: 'CED Stat 3.6 Selecting an Experimental Design',
        question: 'An agricultural researcher wants to test the effect of three new fertilizers (A, B, C) on the yield of tomato plants. The testing field has a steep moisture gradient: the lower section is wet and boggy, while the upper section is dry and rocky. Explain why a randomized block design is preferable to a completely randomized design, identify the blocking variable, and describe how treatments should be assigned.',
        solutionSteps: [
          'Step 1: Identify the nuisance/extraneous variable: Soil moisture level varies systematically across the field and is strongly associated with tomato plant yield.',
          'Step 2: Justify the block design: If a completely randomized design were used, one fertilizer might by chance be assigned mostly to the wet lower section, making it impossible to separate the effect of the fertilizer from the effect of soil moisture (confounding). Blocking removes this moisture variability from the experimental error.',
          'Step 3: Define the blocking variable: Soil moisture level (Block 1: Wet/boggy lower section; Block 2: Dry/rocky upper section).',
          'Step 4: Describe random assignment within blocks: Within the wet lower section, randomly assign an equal number of tomato plants to Fertilizer A, Fertilizer B, and Fertilizer C (e.g., by numbering plants 01-30, placing numbers in a hat, and drawing 10 for each fertilizer).',
          'Step 5: Repeat random assignment separately in the dry upper section: Independently, randomly assign plants in the dry section to Fertilizers A, B, and C in equal proportions.',
          'Step 6: Measure and compare yields: Record tomato yield at harvest and compare the mean yields of Fertilizers A, B, and C across both moisture conditions.'
        ],
        finalAnswer: 'Block by field moisture gradient (wet lower vs dry upper section) to control for yield variability; independently randomize fertilizers A, B, and C within each block.',
        apScoringTip: 'To earn full credit on AP experimental design questions, explicitly state that random assignment of treatments happens SEPARATELY within each block!'
      }
    ],
    diagrams: [
      {
        id: 'u1-diag-boxplot',
        title: 'Modified Boxplot and Outlier Fences',
        subtitle: 'Visualizing 5-Number Summary and 1.5 x IQR Boundaries',
        type: 'boxplot_geometry',
        description: 'A modified boxplot displays Minimum (non-outlier), Q1, Median, Q3, and Maximum (non-outlier). Individual outlier observations beyond Q1 - 1.5(IQR) or Q3 + 1.5(IQR) are plotted as isolated dots.',
        takeaway: 'Whiskers on a modified boxplot extend only to the most extreme observation that falls WITHIN the outlier fences, never to the fences themselves!'
      },
      {
        id: 'u1-diag-skewness',
        title: 'Distribution Skewness and Center Shifts',
        subtitle: 'Relative Positions of Mean and Median',
        type: 'distribution_skew_comparison',
        description: 'In a right-skewed distribution, the long right tail pulls the mean to the right of the median (Mean > Median). In a left-skewed distribution, the mean is pulled to the left (Mean < Median). In a symmetric distribution, Mean = Median.',
        takeaway: 'When selecting summary statistics for skewed data, always report the Median and IQR because they are resistant to the skewness.'
      },
      {
        id: 'u1-diag-empirical',
        title: 'The Empirical Rule (68-95-99.7% Bell Curve)',
        subtitle: 'Normal Standard Deviation Intervals and Percentile Areas',
        type: 'normal_curve_empirical_rule',
        description: 'Under an approximately Normal distribution, 68% of data fall within 1 standard deviation of the mean, 95% within 2 standard deviations, and 99.7% within 3 standard deviations.',
        takeaway: 'The empirical rule applies ONLY to bell-shaped, approximately normal distributions; never apply it to skewed or unknown shapes!'
      },
      {
        id: 'u1-diag-sampling',
        title: 'Probability Sampling Methodologies',
        subtitle: 'SRS vs. Stratified vs. Cluster vs. Systematic Sampling',
        type: 'sampling_methods_comparison',
        description: 'Rigorous visual comparison of probability study designs: Stratified samples homogeneous subgroups to reduce variability, whereas Cluster randomly samples entire heterogeneous mini-populations.',
        takeaway: 'Stratified = "Some from all" (homogeneous groups). Cluster = "All from some" (heterogeneous groups).'
      }
    ],
    commonTraps: [
      'Omitting Context in Descriptions: Describing shape, center, or spread without mentioning the variable name and units of measurement will result in a partial (P) or incomplete score on FRQs.',
      'Conflating Stratification and Blocking: Stratifying is a SAMPLING technique used to select representative participants; Blocking is an EXPERIMENTAL technique used to group experimental units to reduce response variation.',
      'Claiming Causation from Observational Studies: Never use causal verbs like "causes", "leads to", or "proves" unless the study is a randomized controlled experiment.',
      'Misinterpreting Z-Scores: Stating that a z-score of -1.8 means "1.8 below average" is incomplete; you must explicitly state "1.8 standard deviations below the mean".'
    ],
    cramSheet: [
      'SOCS: Shape (symmetric/skewed), Outliers (1.5xIQR), Center (mean vs median), Spread (SD vs IQR) with context.',
      'Resistant metrics: Median and IQR. Non-resistant: Mean, Standard Deviation, and Range.',
      'Mean vs Median: Skewed Right -> Mean > Median; Skewed Left -> Mean < Median; Symmetric -> Mean approx Median.',
      'Outlier Fences: Lower = Q1 - 1.5(IQR); Upper = Q3 + 1.5(IQR). Any point strictly outside is an outlier.',
      'Linear transformation effects: Adding a constant changes center only; Multiplying changes both center and spread.',
      'Random Selection -> Generalize to population. Random Assignment -> Cause-and-effect conclusions.',
      'Blocking: Group units by a confounding variable BEFORE random assignment to reduce within-group variation.'
    ]
  },

  // ==========================================
  // UNIT 2: PROBABILITY, RANDOM VARIABLES, AND PROBABILITY DISTRIBUTIONS
  // Official Fall 2026 Redesign Framework (CED Units 4 & 5 consolidated)
  // Exam Weight: 15%–25% of AP Exam
  // ==========================================
  {
    unitId: 'u2',
    unitNumber: 2,
    title: 'Probability, Random Variables, and Probability Distributions',
    examWeight: '15%–25% of AP Exam',
    bigIdea: 'Probability models quantify randomness over repeated trials via the Law of Large Numbers. The behaviors of discrete random variables, linear combinations, and sampling distributions form the mathematical bedrock for all statistical inference.',
    keyTheorems: [
      {
        name: 'The Law of Large Numbers (LLN)',
        conditions: 'Independent repetitions of a random phenomenon under identical conditions.',
        conclusion: 'As the number of trials increases without bound, the empirical relative frequency of an event approaches its true theoretical probability.',
        apTip: 'The LLN guarantees long-run stability, NOT short-run compensation. The "Law of Averages" (the gambler\'s fallacy that a streak of heads means tails is "due") is completely false!'
      },
      {
        name: 'The Central Limit Theorem (CLT)',
        conditions: 'A random sample of size n >= 30 drawn from ANY population with finite mean mu and standard deviation sigma.',
        conclusion: 'The sampling distribution of the sample mean x-bar is approximately Normal, regardless of the underlying population shape.',
        apTip: 'The CLT applies strictly to the sampling distribution of x-bar, NEVER to the population distribution or to individual sample observations!'
      },
      {
        name: 'Linear Combination Variance Rule',
        conditions: 'Two random variables X and Y that are independent.',
        conclusion: 'Variances ALWAYS add: Var(X + Y) = Var(X) + Var(Y) AND Var(X - Y) = Var(X) + Var(Y). Standard deviations NEVER add directly: sigma_{X +/- Y} = sqrt(sigma_X^2 + sigma_Y^2).',
        apTip: 'One of the most heavily tested traps on the AP exam: when finding the standard deviation of X - Y, students incorrectly subtract variances. Var(X - Y) is ALWAYS Var(X) + Var(Y)!'
      },
      {
        name: 'The 10% Condition for Sampling Without Replacement',
        conditions: 'Sampling without replacement from a finite population of size N with sample size n.',
        conclusion: 'If n <= 0.10N, the selections can be treated as virtually independent, and standard error formulas remain valid.',
        apTip: 'Always verify the 10% condition when applying formulas for the standard error of sampling distributions in finite populations.'
      }
    ],
    formulas: [
      {
        name: 'General Addition Rule for Probability',
        latex: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
        explanation: 'Probability that event A or event B (or both) occurs. If A and B are mutually exclusive (disjoint), P(A and B) = 0.'
      },
      {
        name: 'Conditional Probability',
        latex: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} \\quad (\\text{for } P(B) > 0)',
        explanation: 'Probability that event A occurs given that event B is already known to have occurred.'
      },
      {
        name: 'Mathematical Test for Independence',
        latex: 'P(A \\mid B) = P(A) \\iff P(A \\cap B) = P(A) \\cdot P(B)',
        explanation: 'Events A and B are independent if knowledge of B occurring does not change the probability of A occurring.'
      },
      {
        name: 'Expected Value of Discrete Random Variable',
        latex: 'E(X) = \\mu_X = \\sum x_i \\cdot P(X = x_i)',
        explanation: 'The long-run average outcome of a discrete random variable X over many repeated trials.'
      },
      {
        name: 'Variance of Discrete Random Variable',
        latex: '\\text{Var}(X) = \\sigma_X^2 = \\sum (x_i - \\mu_X)^2 \\cdot P(X = x_i)',
        explanation: 'The expected squared deviation from the mean for a discrete random variable.'
      },
      {
        name: 'Linear Transformation Rules',
        latex: 'E(aX + b) = aE(X) + b, \\quad \\text{Var}(aX + b) = a^2 \\text{Var}(X), \\quad \\sigma_{aX+b} = |a|\\sigma_X',
        explanation: 'Adding b shifts the center only. Multiplying by a scales both center and spread.'
      },
      {
        name: 'Binomial Probability Formula',
        latex: 'P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}, \\quad \\mu = np, \\quad \\sigma = \\sqrt{np(1 - p)}',
        explanation: 'Calculates the probability of exactly k successes in n independent Bernoulli trials with constant probability p.'
      },
      {
        name: 'Sampling Distribution of the Mean',
        latex: '\\mu_{\\bar{x}} = \\mu, \\quad \\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}',
        explanation: 'Center is equal to the population mean. Spread decreases proportionally to the square root of sample size n.'
      },
      {
        name: 'Sampling Distribution of the Proportion',
        latex: '\\mu_{\\hat{p}} = p, \\quad \\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1 - p)}{n}}',
        explanation: 'Approximately Normal when Large Counts condition holds: np >= 10 and n(1 - p) >= 10.'
      }
    ],
    sections: [
      {
        heading: '1. Probability Foundations, Addition Rules & Independence (CED 4.1–4.3)',
        content: `Probability describes the long-run proportion of times an outcome occurs:
- **Sample Space ($S$)**: The set of all possible outcomes of a random process.
- **Probability Axioms**:
  - $0 \\leq P(A) \\leq 1$ for any event $A$.
  - $P(S) = 1$.
  - **Complement Rule**: $P(A^c) = 1 - P(A)$.

| Probability Rule | Mathematical Formula | Governing Conditions | AP Exam Interpretation |
| :--- | :--- | :--- | :--- |
| **Complement Rule** | $P(A^c) = 1 - P(A)$ | Universal for any event $A$ | "At least one" shortcut: $P(\\text{at least 1 success}) = 1 - P(\\text{0 successes})$. |
| **Addition (General)** | $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ | Any two events $A$ and $B$ | Subtract the overlapping intersection $P(A \\cap B)$ to avoid double-counting. |
| **Addition (Disjoint)** | $P(A \\cup B) = P(A) + P(B)$ | **Mutually exclusive only** ($P(A \\cap B) = 0$) | Events cannot occur simultaneously; no overlap exists in Venn diagram. |
| **Multiplication (General)** | $P(A \\cap B) = P(A) \\cdot P(B \\mid A)$ | Any two events $A$ and $B$ ($P(A) > 0$) | Sequence of dependent events; evaluate on probability tree branches. |
| **Multiplication (Independent)** | $P(A \\cap B) = P(A) \\cdot P(B)$ | **Independent events only** | Occurrence of $A$ has no influence on the probability of $B$. |
| **Conditional Probability** | $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$ | $P(B) > 0$ | Restrict the sample space strictly to the sub-universe where $B$ has occurred.`
      },
      {
        heading: '2. Conditional Probability, Multiplication Rules & Two-Way Tables (CED 4.4–4.6)',
        content: `Calculating conditional probabilities from contingency tables and tree diagrams:

| Diagnostic Feature | Mutually Exclusive (Disjoint) Events | Independent Events | Crucial AP Exam Relationship |
| :--- | :--- | :--- | :--- |
| **Definition** | Events cannot occur together ($A \\cap B = \\emptyset$) | Knowledge that $B$ occurred does not alter $P(A)$ | **Mutually exclusive events with $P > 0$ can NEVER be independent!** |
| **Venn Diagram** | Separate non-overlapping circles | Circles overlap; intersection area $= P(A) \\cdot P(B)$ | If $A$ happens, $B$ is impossible ($P(B \\mid A) = 0 \\neq P(B)$). |
| **Formula Proof** | $P(A \\cap B) = 0$ | $P(A \\mid B) = P(A)$ OR $P(A \\cap B) = P(A) \\cdot P(B)$ | On FRQs, test $P(A \\mid B) = P(A)$ with decimals to formally justify independence. |`
      },
      {
        heading: '3. Discrete Random Variables, Expected Value & Linear Combinations (CED 4.7–4.9)',
        content: `Properties of discrete probability distributions and algebraic transformations:

| Operation / Setting | Expected Value $E(\\cdot)$ | Variance $\\text{Var}(\\cdot)$ | Standard Deviation $\\sigma$ | AP Exam Warning / Trap |
| :--- | :--- | :--- | :--- | :--- |
| **Single Variable $X$** | $\\mu_X = \\sum x_i p_i$ | $\\sigma_X^2 = \\sum (x_i - \\mu_X)^2 p_i$ | $\\sigma_X = \\sqrt{\\text{Var}(X)}$ | Probabilities must satisfy $\\sum p_i = 1$ and $0 \\le p_i \\le 1$. |
| **Linear Shift ($X + c$)** | $E(X + c) = \\mu_X + c$ | $\\text{Var}(X + c) = \\sigma_X^2$ | $\\sigma_{X+c} = \\sigma_X$ | Adding constant shifts center; **spread is UNCHANGED**! |
| **Constant Scale ($aX$)** | $E(aX) = a\\mu_X$ | $\\text{Var}(aX) = a^2 \\sigma_X^2$ | $\\sigma_{aX} = |a|\\sigma_X$ | Variance scales by $a^2$; standard deviation scales by $|a|$. |
| **Sum ($X + Y$) (Indep)** | $E(X + Y) = \\mu_X + \\mu_Y$ | $\\text{Var}(X + Y) = \\sigma_X^2 + \\sigma_Y^2$ | $\\sigma_{X+Y} = \\sqrt{\\sigma_X^2 + \\sigma_Y^2}$ | Variances add; standard deviations **NEVER add directly**! |
| **Difference ($X - Y$) (Indep)** | $E(X - Y) = \\mu_X - \\mu_Y$ | $\\text{Var}(X - Y) = \\sigma_X^2 + \\sigma_Y^2$ | $\\sigma_{X-Y} = \\sqrt{\\sigma_X^2 + \\sigma_Y^2}$ | **Lethal Trap**: $\\text{Var}(X - Y)$ is STILL $\\sigma_X^2 + \\sigma_Y^2$ (Variances always accumulate!). |`
      },
      {
        heading: '4. Binomial & Geometric Distributions (CED 4.10–4.12)',
        content: `Models for counting successes in repeated Bernoulli trials:
- **The BINS Criteria for Binomial Setting**:
  - **B - Binary**: Two possible outcomes per trial (Success or Failure).
  - **I - Independent**: Trials are independent.
  - **N - Number**: Number of trials $n$ is fixed in advance.
  - **S - Same Probability**: Probability of success $p$ is constant on each trial.
- **Binomial Formulas**:
  $$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}, \\quad \\mu_X = np, \\quad \\sigma_X = \\sqrt{np(1 - p)}$$
  - Calculator commands: \`binompdf(n, p, k)\` for $P(X = k)$; \`binomcdf(n, p, k)\` for $P(X \\le k)$.
- **The Geometric Setting (Waiting-Time Model)**:
  - Binary, Independent, Same $p$, but trials continue until the **FIRST** success occurs.
  - $P(Y = k) = (1 - p)^{k - 1} p$
  - Expected number of trials until first success: $\\mu_Y = \\frac{1}{p}$`
      },
      {
        heading: '5. Sampling Distributions & The Central Limit Theorem (CED 5.1–5.4)',
        content: `The critical bridge between descriptive probability and inferential statistics:

| Sampling Distribution | Parameter | Estimator Statistic | Center $\\mu_{\\text{stat}}$ | Standard Error Formula | Condition for Spread Formula | Normality / Shape Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Sample Mean ($\\bar{x}$)** | $\\mu$ | $\\bar{x}$ | $\\mu_{\\bar{x}} = \\mu$ (Unbiased) | $\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$ | $10\\%$ Condition: $n \\le 0.10N$ | Normal population OR **$n \\ge 30$ (Central Limit Theorem)** |
| **Sample Proportion ($\\hat{p}$)** | $p$ | $\\hat{p} = \\frac{X}{n}$ | $\\mu_{\\hat{p}} = p$ (Unbiased) | $\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1 - p)}{n}}$ | $10\\%$ Condition: $n \\le 0.10N$ | **Large Counts Condition**: $np \\ge 10$ and $n(1 - p) \\ge 10$ |
| **Difference of Means ($\\bar{x}_1 - \\bar{x}_2$)** | $\\mu_1 - \\mu_2$ | $\\bar{x}_1 - \\bar{x}_2$ | $\\mu_{\\bar{x}_1 - \\bar{x}_2} = \\mu_1 - \\mu_2$ | $\\sigma_{\\bar{x}_1 - \\bar{x}_2} = \\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}$ | Independent samples and both $n_i \\le 0.10N_i$ | Both populations Normal OR both $n_1, n_2 \\ge 30$ (CLT) |
| **Difference of Proportions ($\\hat{p}_1 - \\hat{p}_2$)** | $p_1 - p_2$ | $\\hat{p}_1 - \\hat{p}_2$ | $\\mu_{\\hat{p}_1 - \\hat{p}_2} = p_1 - p_2$ | $\\sigma_{\\hat{p}_1 - \\hat{p}_2} = \\sqrt{\\frac{p_1(1-p_1)}{n_1} + \\frac{p_2(1-p_2)}{n_2}}$ | Independent samples and both $n_i \\le 0.10N_i$ | Large counts for both: $n_1 p_1, n_1(1-p_1), n_2 p_2, n_2(1-p_2) \\ge 10$ |`
      }
    ],
    workedExamples: [
      {
        title: 'Combining Independent Random Variables (Difference of Variables)',
        topicRef: 'CED Stat 4.9 Combining Independent Random Variables',
        question: 'A coffee shop prepares espresso shots with brewing time X (mean 25 seconds, SD 2 seconds) and steams milk with time Y (mean 32 seconds, SD 4 seconds). Assume X and Y are independent and approximately normally distributed. (a) Calculate the mean and standard deviation of the total drink preparation time T = X + Y. (b) Find the mean and standard deviation of the difference D = Y - X. (c) Calculate the probability that milk steaming takes at least 10 seconds longer than espresso brewing.',
        solutionSteps: [
          'Step 1: Compute the mean of the total time T = X + Y: E(T) = E(X) + E(Y) = 25 + 32 = 57 seconds.',
          'Step 2: Compute the standard deviation of total time T: Since X and Y are independent, Var(T) = Var(X) + Var(Y) = 2^2 + 4^2 = 4 + 16 = 20. Thus, SD(T) = sqrt(20) approx 4.47 seconds.',
          'Step 3: Compute the mean of difference D = Y - X: E(D) = E(Y) - E(X) = 32 - 25 = 7 seconds.',
          'Step 4: Compute the standard deviation of difference D: Crucially, variances still ADD! Var(D) = Var(Y) + Var(X) = 4^2 + 2^2 = 20. SD(D) = sqrt(20) approx 4.47 seconds.',
          'Step 5: Compute the probability P(D >= 10): Standardize D to a z-score using z = (10 - 7) / sqrt(20) = 3 / 4.4721 approx 0.67.',
          'Step 6: Calculate normal probability: P(Z >= 0.67) = 1 - 0.7486 = 0.2514 (or normalcdf(10, 1E99, 7, 4.472) = 0.2512).'
        ],
        finalAnswer: 'Mean total time = 57 sec, SD = 4.47 sec; Mean difference = 7 sec, SD = 4.47 sec; P(Y - X >= 10) approx 0.251.',
        apScoringTip: 'Never subtract variances when finding Var(Y - X). Var(Y - X) = Var(Y) + Var(X) is one of the most common scoring deduction items on Section II FRQs.'
      },
      {
        title: 'Central Limit Theorem & Sampling Distribution Probability',
        topicRef: 'CED Stat 5.3 Central Limit Theorem for Means',
        question: 'The weight of checked baggage on an airline flight has a strongly right-skewed distribution with mean mu = 42 pounds and standard deviation sigma = 14 pounds. A flight carries n = 49 randomly selected passengers with one checked bag each. (a) Can we assume the weight of an individual passenger bag is normally distributed? (b) Describe the sampling distribution of the sample mean baggage weight x-bar. (c) What is the probability that the average weight x-bar exceeds 45 pounds?',
        solutionSteps: [
          'Step 1: Individual bag distribution: No. The problem explicitly states that individual baggage weights have a strongly right-skewed distribution.',
          'Step 2: Sampling distribution center: By unbiased estimation, mu_{x-bar} = mu = 42 pounds.',
          'Step 3: Sampling distribution spread: By the standard error formula, sigma_{x-bar} = sigma / sqrt(n) = 14 / sqrt(49) = 14 / 7 = 2.0 pounds (assuming 49 bags is <= 10% of all checked bags).',
          'Step 4: Sampling distribution shape: By the Central Limit Theorem, because the sample size n = 49 >= 30, the sampling distribution of the sample mean x-bar is approximately Normal, despite the parent population being strongly skewed.',
          'Step 5: Compute z-score for x-bar = 45: z = (45 - 42) / 2.0 = 3 / 2.0 = 1.50.',
          'Step 6: Calculate upper tail probability: P(X-bar >= 45) = P(Z >= 1.50) = 1 - 0.9332 = 0.0668 (or normalcdf(45, 1E99, 42, 2.0) = 0.0668).'
        ],
        finalAnswer: 'The sampling distribution of x-bar is approx Normal with mean = 42 lbs and SD = 2.0 lbs; P(x-bar > 45) = 0.0668.',
        apScoringTip: 'When invoking the Central Limit Theorem, always state: "Since n = 49 >= 30, the Central Limit Theorem ensures that the sampling distribution of x-bar is approximately normal."'
      }
    ],
    diagrams: [
      {
        id: 'u2-diag-clt',
        title: 'The Central Limit Theorem Mechanism',
        subtitle: 'From Skewed Population to Normal Sampling Distribution',
        type: 'clt_distribution_progression',
        description: 'Even if the underlying population is heavily skewed, uniform, or bimodal, taking samples of size n >= 30 causes the distribution of sample averages (x-bar) to converge into a smooth, bell-shaped normal curve centered at mu with standard error sigma / sqrt(n).',
        takeaway: 'The CLT applies to the sample mean x-bar, NOT to the sample data themselves. The sample data will still reflect the original skewed shape!'
      },
      {
        id: 'u2-diag-variance',
        title: 'Independent Variance Addition Rule',
        subtitle: 'Why Var(X - Y) is Var(X) + Var(Y)',
        type: 'variance_combination_model',
        description: 'Uncertainty compounds when combining random variables regardless of whether you are adding or subtracting them. Subtracting two uncertain quantities increases overall variability, meaning Var(X - Y) = Var(X) + Var(Y).',
        takeaway: 'Never subtract variances. Variances always accumulate.'
      },
      {
        id: 'u2-diag-binomial',
        title: 'Binomial Distribution & Normal Approximation',
        subtitle: 'Discrete Bernoulli Bars Enveloped by Continuous Normal Curve',
        type: 'binomial_normal_approximation',
        description: 'When the Large Counts condition is met (np >= 10 and n(1 - p) >= 10), the discrete binomial probability histogram becomes indistinguishable from a smooth normal curve N(np, sqrt(np(1-p))).',
        takeaway: 'Always verify both expected counts np >= 10 and n(1 - p) >= 10 before using normal calculations for binomial problems!'
      }
    ],
    commonTraps: [
      'Confusing Mutually Exclusive with Independent: Mutually exclusive means events cannot happen together (P(A and B) = 0). Independent means knowing one occurs does not change the probability of the other (P(A|B) = P(A)). They are mutually contradictory for positive events!',
      'Subtracting Variances: Calculating Var(X - Y) = Var(X) - Var(Y). Variances ALWAYS add!',
      'Claiming the Population Becomes Normal under CLT: The Central Limit Theorem never changes the population distribution; it applies only to the distribution of the statistic x-bar across repeated samples.',
      'Forgetting the Square Root of n in Standard Error: Writing sigma_{x-bar} = sigma / n instead of sigma / sqrt(n).'
    ],
    cramSheet: [
      'Probability rules: P(A or B) = P(A) + P(B) - P(A and B). P(A|B) = P(A and B) / P(B).',
      'Independence test: P(A|B) = P(A) OR P(A and B) = P(A)*P(B).',
      'Combining independent variables: E(X +/- Y) = E(X) +/- E(Y). Var(X +/- Y) = Var(X) + Var(Y). SD = sqrt(Var_X + Var_Y).',
      'Binomial: BINS (Binary, Independent, Fixed n, Same p). mu = np, sigma = sqrt(np(1-p)).',
      'Sampling mean: mu_{x-bar} = mu, sigma_{x-bar} = sigma / sqrt(n). CLT applies when n >= 30.',
      'Sampling proportion: mu_{p-hat} = p, sigma_{p-hat} = sqrt(p(1-p)/n). Normal if np >= 10 and n(1-p) >= 10.'
    ]
  },

  // ==========================================
  // UNIT 3: INFERENCE FOR CATEGORICAL DATA: PROPORTIONS
  // Official Fall 2026 Redesign Framework (CED Units 6 & 8 consolidated)
  // Exam Weight: 15%–25% of AP Exam
  // ==========================================
  {
    unitId: 'u3',
    unitNumber: 3,
    title: 'Inference for Categorical Data: Proportions',
    examWeight: '15%–25% of AP Exam',
    bigIdea: 'Statistical inference allows researchers to estimate unknown population proportions and test claims using sampling distributions. Chi-Square goodness-of-fit and independence procedures evaluate relationships across categorical variables.',
    keyTheorems: [
      {
        name: 'The 4-Step Inference Protocol',
        conditions: 'Required structure on all AP Statistics free-response inference questions.',
        conclusion: '1. State hypotheses & significance level alpha. 2. Plan: identify procedure and verify conditions. 3. Do: calculate test statistic & P-value (or confidence interval). 4. Conclude: interpret in context.',
        apTip: 'Omitting any of the 4 steps will result in a lower rubric score. In Step 4, always state: "Because the P-value (X) is less than/greater than alpha (Y), we reject/fail to reject H0. There is/is not convincing statistical evidence that..."'
      },
      {
        name: 'Duality Between Confidence Intervals & Two-Sided Tests',
        conditions: 'Inference for a population proportion or difference of proportions at significance level alpha.',
        conclusion: 'A two-sided test at significance level alpha rejects H0 if and only if the hypothesized null value falls outside the corresponding (1 - alpha)100% confidence interval.',
        apTip: 'If a 95% confidence interval for p1 - p2 is (-0.08, -0.02), zero is not in the interval, meaning a two-sided test at alpha = 0.05 will reject H0: p1 - p2 = 0!'
      },
      {
        name: 'Type I Error, Type II Error & Power Dynamics',
        conditions: 'Hypothesis testing framework with null hypothesis H0 and alternative H1.',
        conclusion: 'Type I Error (alpha) is rejecting true H0. Type II Error (beta) is failing to reject false H0. Power (1 - beta) is correctly rejecting false H0. Increasing alpha increases power. Increasing sample size n increases power and decreases both error probabilities.',
        apTip: 'On FRQs, describing the error in context requires stating the actual mistake AND the real-world consequence that ensues.'
      },
      {
        name: 'Chi-Square Expected Counts Condition',
        conditions: 'Chi-square goodness-of-fit, homogeneity, or independence tests.',
        conclusion: 'All expected cell counts must be at least 5 (E_i >= 5). Observed counts may be any non-negative integer.',
        apTip: 'Do not confuse observed counts with expected counts. The condition E >= 5 applies strictly to the calculated expected values!'
      }
    ],
    formulas: [
      {
        name: 'One-Sample Z-Interval for a Proportion',
        latex: '\\hat{p} \\pm z^* \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}',
        explanation: 'Point estimate plus/minus margin of error. Critical value z* comes from the standard normal distribution (e.g., 1.96 for 95% confidence).'
      },
      {
        name: 'One-Sample Z-Test for a Proportion',
        latex: 'z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1 - p_0)}{n}}}',
        explanation: 'Notice: the standard error uses the hypothesized null value p0, NOT the sample proportion p-hat!'
      },
      {
        name: 'Two-Sample Z-Interval for Difference of Proportions',
        latex: '(\\hat{p}_1 - \\hat{p}_2) \\pm z^* \\sqrt{\\frac{\\hat{p}_1(1 - \\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1 - \\hat{p}_2)}{n_2}}',
        explanation: 'Used to estimate the true difference p1 - p2 between two independent population proportions.'
      },
      {
        name: 'Pooled (Combined) Proportion for Two-Sample Z-Test',
        latex: '\\hat{p}_c = \\frac{X_1 + X_2}{n_1 + n_2}, \\quad z = \\frac{(\\hat{p}_1 - \\hat{p}_2) - 0}{\\sqrt{\\hat{p}_c(1 - \\hat{p}_c)\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}',
        explanation: 'Under H0: p1 = p2, both samples share a common proportion, so counts of successes are pooled to compute standard error.'
      },
      {
        name: 'Chi-Square Test Statistic',
        latex: '\\chi^2 = \\sum \\frac{(O - E)^2}{E}',
        explanation: 'Measures total squared discrepancy between observed frequencies (O) and expected frequencies (E).'
      },
      {
        name: 'Expected Cell Count in Two-Way Table',
        latex: 'E = \\frac{\\text{Row Total} \\times \\text{Column Total}}{\\text{Table Total}}',
        explanation: 'Calculates the expected count for each cell under the null hypothesis of independence or homogeneity.'
      },
      {
        name: 'Degrees of Freedom for Chi-Square',
        latex: '\\text{GOF: } df = k - 1; \\quad \\text{Two-Way Table: } df = (r - 1)(c - 1)',
        explanation: 'k is the number of categories; r is the number of rows; c is the number of columns.'
      }
    ],
    sections: [
      {
        heading: '1. Confidence Intervals for a Single Population Proportion (CED 6.1–6.3)',
        content: `Constructing and interpreting confidence intervals for categorical proportions:
- **General Structure of a Confidence Interval**:
  $$\\text{Estimate} \\pm (\\text{Critical Value}) \\times (\\text{Standard Error})$$

| Categorical Procedure | Parameter Tested | Formula / Test Statistic | Standard Error Component | Required Normality / Sample Conditions |
| :--- | :--- | :--- | :--- | :--- |
| **1-Sample $z$-Interval** | $p$ | $\\hat{p} \\pm z^* \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}$ | $SE = \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}$ | Random, $n \\le 0.10N$, $n\\hat{p} \\ge 10$, $n(1 - \\hat{p}) \\ge 10$ |
| **1-Sample $z$-Test** | $p$ | $z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1 - p_0)}{n}}}$ | $\\sigma_0 = \\sqrt{\\frac{p_0(1 - p_0)}{n}}$ (Null $p_0$!) | Random, $n \\le 0.10N$, $np_0 \\ge 10$, $n(1 - p_0) \\ge 10$ |
| **2-Sample $z$-Interval** | $p_1 - p_2$ | $(\\hat{p}_1 - \\hat{p}_2) \\pm z^* \\sqrt{\\frac{\\hat{p}_1(1 - \\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1 - \\hat{p}_2)}{n_2}}$ | Unpooled separate sample variances | Both samples Random, 10% condition, and all 4 counts $\\ge 10$ |
| **2-Sample $z$-Test** | $p_1 - p_2$ | $z = \\frac{(\\hat{p}_1 - \\hat{p}_2) - 0}{\\sqrt{\\hat{p}_c(1 - \\hat{p}_c)\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}$ | **Pooled $\\hat{p}_c = \\frac{X_1 + X_2}{n_1 + n_2}$** | Both samples Random, 10% condition, expected counts from $\\hat{p}_c \\ge 10$ |

- **Interpreting the Confidence Interval in Context**:
  - *"We are [C]% confident that the interval from [Lower Bound] to [Upper Bound] captures the true population proportion of [contextual parameter]."*
- **Interpreting the Confidence Level**:
  - *"If we were to take many random samples of the same size from this population and calculate a [C]% confidence interval from each sample, about [C]% of the resulting intervals would capture the true population proportion."*`
      },
      {
        heading: '2. Significance Tests for a Single Proportion (CED 6.4–6.6)',
        content: `Carrying out one-sample $z$-tests for a proportion:
- **Step 1: State**:
  - Hypotheses: $H_0: p = p_0$ vs. $H_a: p > p_0$ (or $< p_0$, or $\\neq p_0$).
  - Significance level $\\alpha$ (typically $0.05$).
  - Define $p$ as the true population proportion in context!
- **Step 2: Plan**:
  - Name: One-sample $z$-test for a proportion.
  - Verify conditions: Random, 10% condition ($n \\le 0.10N$), and Large Counts using null value ($np_0 \\ge 10$ and $n(1 - p_0) \\ge 10$).
- **Step 3: Do**:
  - Test statistic:
    $$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1 - p_0)}{n}}}$$
  - Calculate $P$-value using standard normal distribution.
- **Step 4: Conclude**:
  - Compare $P$-value to $\\alpha$.
  - State definitive decision (reject $H_0$ or fail to reject $H_0$) and write the contextual conclusion.`
      },
      {
        heading: '3. Type I Errors, Type II Errors & Statistical Power (CED 6.7)',
        content: `Analyzing errors in hypothesis testing:

| State of Nature / Decision | $H_0$ is Actually True | $H_0$ is Actually False ($H_a$ is True) | Mathematical Probability | Contextual Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **Reject $H_0$** (Statistically Significant) | **TYPE I ERROR** | **CORRECT DECISION (POWER)** | $P(\\text{Type I}) = \\alpha$ | False positive; claiming an effect or difference exists when it does not. |
| **Fail to Reject $H_0$** (Inconclusive) | **CORRECT DECISION** | **TYPE II ERROR** | $P(\\text{Type II}) = \\beta$ | False negative; failing to detect a true underlying effect or difference. |

- **Power of the Test ($1 - \\beta$)**: The probability of correctly rejecting $H_0$ when a specific alternative parameter value is true.
- **Strategic Ways to Increase Power**:
  1. **Increase sample size $n$**: Shrinks standard error $\\frac{\\sigma}{\\sqrt{n}}$, separating curves and increasing power without inflating $\\alpha$.
  2. **Increase significance level $\\alpha$** (e.g. from $0.01$ to $0.05$): Expands rejection region, reducing $\\beta$ and increasing power.
  3. **Increase effect size**: If the true parameter is farther from $p_0$, the alternative curve shifts further away, boosting power.
  4. **Decrease variability $\\sigma$**: Better experimental control narrows sampling spreads.`
      },
      {
        heading: '4. Two-Sample Z-Inference for Difference of Proportions (CED 6.8–6.10)',
        content: `Comparing proportions across two independent populations or treatment groups:
- **Confidence Interval for $p_1 - p_2$**:
  $$(\\hat{p}_1 - \\hat{p}_2) \\pm z^* \\sqrt{\\frac{\\hat{p}_1(1 - \\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1 - \\hat{p}_2)}{n_2}}$$
- **Hypothesis Test for $p_1 - p_2$**:
  - Null hypothesis: $H_0: p_1 - p_2 = 0$ (or $p_1 = p_2$).
  - **The Pooled Proportion**: Because $H_0$ assumes $p_1 = p_2$, pool all successes together:
    $$\\hat{p}_c = \\frac{X_1 + X_2}{n_1 + n_2}$$
  - Test statistic:
    $$z = \\frac{(\\hat{p}_1 - \\hat{p}_2) - 0}{\\sqrt{\\hat{p}_c(1 - \\hat{p}_c)\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}$$`
      },
      {
        heading: '5. Chi-Square Goodness-of-Fit Tests (CED 8.1–8.3)',
        content: `Testing whether a one-variable categorical distribution matches a specified model:
- **Hypotheses**:
  - $H_0$: The specified distribution of categorical outcomes is correct.
  - $H_a$: The specified distribution is not correct.
- **Degrees of Freedom**: $df = k - 1$ (where $k$ is number of categories).
- **Test Statistic**:
  $$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$
- **Conditions**:
  1. Random sample or randomized experiment.
  2. 10% condition if sampling without replacement.
  3. **Large Expected Counts**: All expected cell counts $E_i \\ge 5$.
- *Note*: The Chi-Square distribution is strictly non-negative, right-skewed, and becomes more symmetric as $df$ increases. Chi-Square tests are **always one-tailed (upper tail)**!`
      },
      {
        heading: '6. Chi-Square Tests for Homogeneity & Independence (CED 8.4–8.6)',
        content: `Analyzing two-way tables of categorical variables:

| Chi-Square Test | Experimental / Sampling Design | Null Hypothesis $H_0$ Formulation | Degrees of Freedom | Calculation of Expected Counts $E$ |
| :--- | :--- | :--- | :--- | :--- |
| **Goodness-of-Fit (GOF)** | Single sample; **1 categorical variable** with $k$ levels | Proportions equal specified historical distribution: $p_1 = c_1, p_2 = c_2...$ | $df = k - 1$ | $E_i = n \\cdot p_i$ |
| **Test for Homogeneity** | **Multiple independent samples** (or 1 experiment with multiple treatment groups) | The distribution of categorical variable is the same across all populations | $df = (r - 1)(c - 1)$ | $E = \\frac{\\text{Row Total} \\times \\text{Col Total}}{\\text{Table Total}}$ |
| **Test for Independence** | **Single random sample**; individuals classified by **2 categorical variables** | There is no association between Variable 1 and Variable 2 in the population | $df = (r - 1)(c - 1)$ | $E = \\frac{\\text{Row Total} \\times \\text{Col Total}}{\\text{Table Total}}$ |`
      }
    ],
    workedExamples: [
      {
        title: 'Full 4-Step One-Sample Z-Test for a Proportion',
        topicRef: 'CED Stat 6.4 Significance Test for a Proportion',
        question: 'A tech company claims that at least 85% of its smart home hub users are satisfied. A consumer watchdog organization takes an SRS of 200 users and finds that 156 report being satisfied. Carry out an appropriate significance test at alpha = 0.05 to determine if the true satisfaction rate is less than claimed.',
        solutionSteps: [
          'Step 1 (State): Let p = the true proportion of all smart home hub users who are satisfied. Hypotheses: H0: p = 0.85 vs Ha: p < 0.85. Significance level alpha = 0.05.',
          'Step 2 (Plan): Name of test: One-sample z-test for a proportion. Check conditions: (1) Random: SRS of 200 users is given. (2) 10% Condition: 200 users <= 10% of all company users (assuming N >= 2,000). (3) Large Counts: n*p0 = 200(0.85) = 170 >= 10, and n(1 - p0) = 200(0.15) = 30 >= 10. Conditions are met.',
          'Step 3 (Do): Sample proportion p-hat = 156 / 200 = 0.78. Test statistic z = (p-hat - p0) / sqrt[p0(1 - p0) / n] = (0.78 - 0.85) / sqrt[(0.85)(0.15) / 200] = -0.07 / sqrt[0.1275 / 200] = -0.07 / 0.02525 approx -2.77. P-value: P(Z <= -2.77) = 0.0028.',
          'Step 4 (Conclude): Because the P-value (0.0028) is less than alpha = 0.05, we reject the null hypothesis H0. There is convincing statistical evidence that the true proportion of satisfied smart home hub users is less than 0.85 (85%).'
        ],
        finalAnswer: 'z = -2.77, P-value = 0.0028. Reject H0 at alpha = 0.05. Convincing evidence that satisfaction rate is less than 85%.',
        apScoringTip: 'Always calculate standard error using the null proportion p0 = 0.85 in hypothesis testing, NOT the sample proportion 0.78!'
      },
      {
        title: 'Chi-Square Test of Independence with Two-Way Table',
        topicRef: 'CED Stat 8.5 Chi-Square Test of Independence',
        question: 'A random sample of 300 adults is categorized by exercise frequency (Regular vs Irregular) and sleep quality (Good vs Poor). The data are: Regular & Good = 110, Regular & Poor = 40 (Total Regular = 150); Irregular & Good = 70, Irregular & Poor = 80 (Total Irregular = 150). Total Good = 180, Total Poor = 120. Perform a Chi-Square test of independence at alpha = 0.01.',
        solutionSteps: [
          'Step 1 (State): H0: Exercise frequency and sleep quality are independent in the adult population. Ha: Exercise frequency and sleep quality are not independent (there is an association). alpha = 0.01.',
          'Step 2 (Plan): Name: Chi-Square Test of Independence. Conditions: (1) Random sample of 300 adults given. (2) 10% Condition: 300 adults <= 10% of all adults. (3) Expected counts: E(Reg, Good) = (150*180)/300 = 90; E(Reg, Poor) = (150*120)/300 = 60; E(Irreg, Good) = (150*180)/300 = 90; E(Irreg, Poor) = (150*120)/300 = 60. All expected cell counts are >= 5 (min expected is 60).',
          'Step 3 (Do): Compute Chi-Square statistic: chi^2 = (110 - 90)^2 / 90 + (40 - 60)^2 / 60 + (70 - 90)^2 / 90 + (80 - 60)^2 / 60 = 400/90 + 400/60 + 400/90 + 400/60 = 4.444 + 6.667 + 4.444 + 6.667 = 22.22. Degrees of freedom df = (2 - 1)(2 - 1) = 1. P-value: P(chi^2 >= 22.22) = 0.0000024 (P < 0.0001).',
          'Step 4 (Conclude): Because the P-value (< 0.0001) is less than alpha = 0.01, we reject H0. There is convincing statistical evidence of an association between exercise frequency and sleep quality among adults.'
        ],
        finalAnswer: 'chi^2 = 22.22, df = 1, P-value < 0.0001. Reject H0; convincing evidence of an association between exercise and sleep.',
        apScoringTip: 'You must display the calculated expected cell counts in your write-up to earn the condition check point on FRQs.'
      }
    ],
    diagrams: [
      {
        id: 'u3-diag-errors',
        title: 'Decision Matrix: Type I Error, Type II Error & Power',
        subtitle: 'Truth vs. Statistical Decision',
        type: 'hypothesis_decision_matrix',
        description: 'If H0 is true, rejecting it is a Type I Error (prob alpha); failing to reject is correct (prob 1 - alpha). If H0 is false, failing to reject is a Type II Error (prob beta); correctly rejecting it is Power (prob 1 - beta).',
        takeaway: 'Increasing sample size n increases statistical power without needing to inflate the Type I error rate alpha.'
      },
      {
        id: 'u3-diag-power',
        title: 'Power Curve, Alpha & Beta Trade-offs',
        subtitle: 'Overlapping Null and Alternative Sampling Distributions',
        type: 'power_curve_type1_type2',
        description: 'Visualizes the critical value boundary C separating the null distribution H0 and the true alternative distribution Ha, with shaded regions for alpha, beta, and statistical power (1 - beta).',
        takeaway: 'Increasing sample size narrows both curves, expanding power without increasing the Type I error rate!'
      },
      {
        id: 'u3-diag-chisquare',
        title: 'Chi-Square Distribution Geometry',
        subtitle: 'Right-Skewed Distribution with Upper-Tail Rejection',
        type: 'chi_square_curve',
        description: 'Chi-Square distributions are bounded at zero and skewed to the right. As degrees of freedom increase, the peak shifts right and the distribution becomes more bell-shaped. All Chi-Square tests are one-tailed with rejection in the upper tail.',
        takeaway: 'Chi-square test statistics can never be negative because all discrepancies (O - E) are squared before summation.'
      }
    ],
    commonTraps: [
      'Using Sample Proportion p-hat in the Hypothesis Test SE: Calculating test statistic z using sqrt[p-hat(1 - p-hat)/n] instead of the null value p0. In testing, the null hypothesis is assumed true, so p0 MUST be used in the denominator.',
      'Misinterpreting Confidence Level: Writing "There is a 95% chance that the true proportion lies between 0.42 and 0.58." The parameter is constant; the 95% refers to the long-run capture rate across repeated sampling.',
      'Confusing Test of Homogeneity with Test of Independence: Homogeneity compares multiple independent populations; Independence evaluates two categorical variables within a single sample.'
    ],
    cramSheet: [
      '1-Prop Z-Interval: p-hat +/- z* sqrt[p-hat(1 - p-hat)/n]. Conditions: Random, 10% (n <= 0.10N), Large Counts (n*p-hat >= 10, n(1 - p-hat) >= 10).',
      '1-Prop Z-Test: z = (p-hat - p0) / sqrt[p0(1 - p0)/n]. Uses null p0 in denominator!',
      '2-Prop Z-Test: Pool successes p_c = (X1 + X2)/(n1 + n2) for the standard error.',
      'Type I Error = Reject true H0 (prob alpha). Type II Error = Fail to reject false H0 (prob beta). Power = 1 - beta.',
      'Chi-Square GOF: df = k - 1. Chi-Square Independence/Homogeneity: df = (r - 1)(c - 1).',
      'Expected count formula: E = (Row Total * Col Total) / Table Total. All E >= 5.'
    ]
  },

  // ==========================================
  // UNIT 4: INFERENCE FOR QUANTITATIVE DATA: MEANS
  // Official Fall 2026 Redesign Framework (CED Unit 7)
  // Exam Weight: 10%–20% of AP Exam
  // ==========================================
  {
    unitId: 'u4',
    unitNumber: 4,
    title: 'Inference for Quantitative Data: Means',
    examWeight: '10%–20% of AP Exam',
    bigIdea: 'When population standard deviation sigma is unknown, Student\'s t-distribution provides exact inferential models for population means. Matched pairs designs analyze differences within dependent pairs as a single-sample procedure.',
    keyTheorems: [
      {
        name: 'The Student\'s t-Distribution Model',
        conditions: 'Quantitative sample with sample standard deviation s replacing unknown population sigma.',
        conclusion: 'The standardized statistic t = (x-bar - mu) / (s / sqrt(n)) follows a t-distribution with df = n - 1 degrees of freedom.',
        apTip: 'The t-distribution has fatter (heavier) tails than the standard normal distribution to account for additional uncertainty in estimating sigma with s. As df -> infinity, the t-distribution approaches N(0, 1).'
      },
      {
        name: 'Robustness of t-Procedures (Normal Condition)',
        conditions: 'Assessing normality for t-inference when sample size n < 30.',
        conclusion: 't-procedures are robust against non-normality if: (1) n >= 30 by CLT, OR (2) population is stated Normal, OR (3) for n < 30, a graph of the sample data shows no strong skewness and no outliers.',
        apTip: 'On FRQs with small raw data sets (n < 30), you MUST sketch a quick dotplot or boxplot of the sample data and explicitly write: "The dotplot shows no strong skewness and no outliers, so the t-procedure is appropriate."'
      },
      {
        name: 'The Matched Pairs Principle',
        conditions: 'Experimental or observational data collected in naturally paired units (e.g., pre/post test on same subjects, twins, matched plots).',
        conclusion: 'The data must be converted into a single column of pairwise differences d = x_1 - x_2, and analyzed using a ONE-sample t-procedure on mu_d.',
        apTip: 'One of the biggest blunders on AP exams is performing a two-sample t-test on paired data. If the subjects are paired, you MUST run a one-sample t-test on the differences!'
      }
    ],
    formulas: [
      {
        name: 'Standard Error of the Sample Mean',
        latex: 'SE_{\\bar{x}} = \\frac{s}{\\sqrt{n}}',
        explanation: 'Estimates the standard deviation of the sampling distribution of x-bar when sigma is unknown.'
      },
      {
        name: 'One-Sample t-Interval for a Mean',
        latex: '\\bar{x} \\pm t^* \\left(\\frac{s}{\\sqrt{n}}\\right) \\quad (df = n - 1)',
        explanation: 'Critical value t* comes from Table B with df = n - 1.'
      },
      {
        name: 'One-Sample t-Test Statistic',
        latex: 't = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}} \\quad (df = n - 1)',
        explanation: 'Measures how many estimated standard errors sample mean x-bar is from hypothesized null mean mu0.'
      },
      {
        name: 'Paired t-Test Statistic (Matched Pairs)',
        latex: 't = \\frac{\\bar{x}_d - \\mu_0}{s_d / \\sqrt{n}} \\quad (df = n - 1, \\text{typically } \\mu_0 = 0)',
        explanation: 'x-bar_d is the mean of the pairwise differences, and s_d is the standard deviation of the differences.'
      },
      {
        name: 'Two-Sample t-Interval for Difference of Means',
        latex: '(\\bar{x}_1 - \\bar{x}_2) \\pm t^* \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}',
        explanation: 'Conservative degrees of freedom: df = min(n1 - 1, n2 - 1), or software Satterthwaite df.'
      },
      {
        name: 'Two-Sample t-Test Statistic for Difference of Means',
        latex: 't = \\frac{(\\bar{x}_1 - \\bar{x}_2) - 0}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}',
        explanation: 'Never pool variances for two-sample t-procedures in AP Statistics unless instructed that population variances are equal.'
      }
    ],
    sections: [
      {
        heading: '1. The t-Distribution & Estimating a Population Mean (CED 7.1–7.3)',
        content: `Why the Student's $t$-distribution is required for quantitative inference:
- **The Core Problem**: In real life, the population standard deviation $\\sigma$ is unknown. When we substitute the sample standard deviation $s$ into the standard error formula, we introduce an additional source of random variability.

| Feature / Metric | Standard Normal Distribution ($Z$) | Student's $t$-Distribution ($t$) | Practical AP Exam Implication |
| :--- | :--- | :--- | :--- |
| **When to Use** | $\\sigma$ is **known** (virtually never in reality) | $\\sigma$ is **unknown**; estimated by sample $s$ | $99\\%$ of quantitative AP exam inference uses $t$-procedures! |
| **Shape & Peak** | Symmetric, bell-shaped, single peak at $0$ | Symmetric, bell-shaped, single peak at $0$ (lower peak) | As $df = n - 1 \\to \\infty$, $t$-distribution converges to $Z$. |
| **Tail Thickness** | Thin exponential tails | **Fatter, heavier tails** | Higher probability in tails accounts for estimating $\\sigma$ with $s$. |
| **Critical Value (95%)** | $z^* = 1.960$ (Fixed constant) | $t^* = 2.228$ ($df=10$), $t^* = 4.303$ ($df=2$) | Because $t^* > z^*$, $t$-confidence intervals are wider and more conservative. |
| **Degrees of Freedom** | None | $df = n - 1$ | You must explicitly state your degrees of freedom on all Section II FRQs! |

- **One-Sample $t$-Interval for $\\mu$**:
  $$\\bar{x} \\pm t^* \\left(\\frac{s}{\\sqrt{n}}\\right)$$`
      },
      {
        heading: '2. Significance Tests for a Single Mean (CED 7.4–7.6)',
        content: `Executing the 4-step hypothesis testing protocol for a mean:
- **Step 1: State**:
  - Hypotheses: $H_0: \\mu = \\mu_0$ vs. $H_a: \\mu > \\mu_0$ (or $< \\mu_0$, or $\\neq \\mu_0$).
  - Significance level $\\alpha$ (e.g., $0.05$).
  - Define $\\mu$ as the true population mean in context!
- **Step 2: Plan**:
  - Identify procedure: One-sample $t$-test for a mean.
  - Verify all 3 conditions (Random, 10% condition, Normal/Large sample).
- **Step 3: Do**:
  - Test statistic:
    $$t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}, \\quad df = n - 1$$
  - Compute $P$-value from Table B or \`tcdf(lower, upper, df)\`.
- **Step 4: Conclude**:
  - State decision: Compare $P$-value to $\\alpha$. Conclude in context regarding the claim.`
      },
      {
        heading: '3. Inference for Paired Data: Matched Pairs t-Procedures (CED 7.7)',
        content: `Mastering matched pairs designs and paired $t$-tests:

| Experimental Design | Matched Pairs Design (Dependent) | Two Independent Samples Design |
| :--- | :--- | :--- |
| **Data Structure** | Paired observations on **same subject** (Before/After) or naturally matched pairs (twins) | Two completely unrelated, independent groups of individuals |
| **Statistical Analysis** | Compute differences $d_i = x_{1i} - x_{2i}$; analyze as **1-Sample $t$-procedure** on $\\mu_d$ | Analyze difference of means $\\bar{x}_1 - \\bar{x}_2$ using **2-Sample $t$-procedure** |
| **Degrees of Freedom** | $df = n_{\\text{pairs}} - 1$ | Conservative $df = \\min(n_1 - 1, n_2 - 1)$ or software Satterthwaite $df$ |
| **Standard Error** | $SE = \\frac{s_d}{\\sqrt{n}}$ | $SE = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$ |
| **Major AP Pitfall** | **Never perform a 2-sample test on paired data!** | Never pair unrelated subjects; pooling is NOT allowed in AP Statistics. |`
      },
      {
        heading: '4. Comparing Two Independent Means & Robustness Conditions (CED 7.8–7.10)',
        content: `Inference for comparing means of two independent groups:

| Sample Size ($n$) | Normality / Robustness Diagnostic Protocol | Acceptable Evidence on AP FRQ |
| :--- | :--- | :--- |
| **$n \\ge 30$ (Large)** | **Central Limit Theorem (CLT)** applies automatically | "Since $n_1 = 35 \\ge 30$ and $n_2 = 40 \\ge 30$, the CLT guarantees approximate normality of $\\bar{x}_1 - \\bar{x}_2$." |
| **$15 \\le n < 30$ (Moderate)** | $t$-procedures are robust against moderate non-normality | Sketch a quick boxplot/dotplot; confirm **no extreme skewness** and **no outliers**. |
| **$n < 15$ (Small)** | $t$-procedures are valid **only if data are roughly symmetric** | Sketch dotplot; confirm data are roughly symmetric with **zero outliers**. |

- **Confidence Interval for $\\mu_1 - \\mu_2$**:
  $$(\\bar{x}_1 - \\bar{x}_2) \\pm t^* \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}$$
- **Significance Test for $\\mu_1 - \\mu_2$**:
  $$t = \\frac{(\\bar{x}_1 - \\bar{x}_2) - 0}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}$$`
      }
    ],
    workedExamples: [
      {
        title: 'Full 4-Step Matched Pairs t-Test for Mean Difference',
        topicRef: 'CED Stat 7.7 Paired t-Test for Mean Difference',
        question: 'A physical therapist investigates whether a new stretching routine increases hip flexibility. Ten athletes have their hip range of motion (in degrees) measured Before and After a 4-week program. The differences (After - Before) have summary statistics: n = 10 pairs, mean difference x-bar_d = 4.2 degrees, standard deviation of differences s_d = 2.1 degrees. A dotplot of the 10 differences shows no outliers and is roughly symmetric. Test at alpha = 0.05 whether the routine significantly increases flexibility.',
        solutionSteps: [
          'Step 1 (State): Let mu_d = the true mean difference in hip flexibility (After - Before) for all athletes completing the program. Hypotheses: H0: mu_d = 0 vs Ha: mu_d > 0. Significance level alpha = 0.05.',
          'Step 2 (Plan): Name of test: Paired t-test for a mean difference. Check conditions: (1) Random: Assume these 10 athletes are representative of the target population. (2) 10% Condition: 10 athletes <= 10% of all potential athletes. (3) Normal: The sample size n = 10 < 30, but the problem states that a dotplot of the sample differences shows no outliers and is roughly symmetric, so the t-procedure is appropriate.',
          'Step 3 (Do): Test statistic: t = (x-bar_d - 0) / [s_d / sqrt(n)] = (4.2 - 0) / [2.1 / sqrt(10)] = 4.2 / (2.1 / 3.1623) = 4.2 / 0.6641 approx 6.32. Degrees of freedom df = 10 - 1 = 9. P-value: P(T >= 6.32) using tcdf(6.32, 1E99, 9) = 0.000067 (P < 0.0001).',
          'Step 4 (Conclude): Because the P-value (0.000067) is less than alpha = 0.05, we reject H0. There is convincing statistical evidence that the new stretching routine significantly increases mean hip flexibility in athletes.'
        ],
        finalAnswer: 't = 6.32, df = 9, P-value = 0.000067. Reject H0; convincing evidence that the stretching routine increases flexibility.',
        apScoringTip: 'Clearly define mu_d with direction (After - Before) in Step 1. Using a two-sample t-test instead of a paired t-test will result in an automatic deduction on the Plan and Do steps.'
      },
      {
        title: 'Two-Sample t-Interval for Difference Between Two Means',
        topicRef: 'CED Stat 7.8 Two-Sample t-Interval for mu1 - mu2',
        question: 'An agronomist compares the nitrogen content (in ppm) of soil under two tillage methods. An SRS of 35 No-Till plots yields x-bar_1 = 48.2 ppm with s_1 = 5.4 ppm. An independent SRS of 40 Conventional-Till plots yields x-bar_2 = 43.1 ppm with s_2 = 6.1 ppm. Construct and interpret a 95% confidence interval for the difference in mean nitrogen content (No-Till minus Conventional).',
        solutionSteps: [
          'Step 1 (Plan & Check Conditions): Two-Sample t-Interval for mu1 - mu2. (1) Independent SRSs given. (2) 10% condition: 35 <= 10% of all No-Till plots, 40 <= 10% of all Conventional plots. (3) Large Sample: Both n1 = 35 >= 30 and n2 = 40 >= 30, so the CLT guarantees approximate normality of the sampling distributions.',
          'Step 2 (Degrees of Freedom): Conservative df = min(35 - 1, 40 - 1) = 34. Using Table B, critical value t* for 95% confidence with df = 34 (or software df = 72.8): t* approx 2.032 (conservative) or 1.993 (software). Using software df = 72.8, t* = 1.993.',
          'Step 3 (Calculate Point Estimate & SE): Difference in means = x-bar_1 - x-bar_2 = 48.2 - 43.1 = 5.1 ppm. Standard Error SE = sqrt(s1^2/n1 + s2^2/n2) = sqrt(5.4^2/35 + 6.1^2/40) = sqrt(29.16/35 + 37.21/40) = sqrt(0.8331 + 0.9303) = sqrt(1.7634) approx 1.328 ppm.',
          'Step 4 (Compute Interval): Margin of error = 1.993 * 1.328 = 2.65 ppm. Interval: 5.1 +/- 2.65 = (2.45, 7.75) ppm.',
          'Step 5 (Conclude in context): We are 95% confident that the interval from 2.45 ppm to 7.75 ppm captures the true difference in mean soil nitrogen content (mu_{No-Till} - mu_{Conventional}). Because zero is not in the interval, there is convincing evidence that No-Till soil has a higher mean nitrogen content.'
        ],
        finalAnswer: '95% CI: (2.45, 7.75) ppm (or conservative (2.40, 7.80) ppm). We are 95% confident that No-Till soil has 2.45 to 7.75 ppm more nitrogen on average.',
        apScoringTip: 'Either conservative df = min(n1-1, n2-1) or calculator software df is accepted on AP exams. State which df you used!'
      }
    ],
    diagrams: [
      {
        id: 'u4-diag-tcurve',
        title: 'Student\'s t-Distribution vs Standard Normal',
        subtitle: 'Heavier Tails Account for Uncertainty in Estimating Sigma',
        type: 't_distribution_comparison',
        description: 'The t-distribution has fatter tails and a lower peak than the standard normal N(0, 1) curve. As degrees of freedom increase from df = 2 to df = 30 to infinity, the t-curve converges smoothly to the normal distribution.',
        takeaway: 'Heavier tails mean critical values t* are strictly larger than corresponding z* values, creating wider, more conservative confidence intervals.'
      },
      {
        id: 'u4-diag-paired',
        title: 'Matched Pairs Data Geometry',
        subtitle: 'Collapsing Two Measurements into One Difference Vector',
        type: 'paired_difference_histogram',
        description: 'In a matched pairs experiment, individual differences d = After - Before are computed for each unit. The analysis collapses into a one-sample t-test testing whether the true mean difference mu_d is distinct from zero.',
        takeaway: 'Never conduct a two-sample t-test on matched pairs. Pairing eliminates unit-to-unit variation, providing substantially more statistical power.'
      },
      {
        id: 'u4-diag-ci-capture',
        title: '95% Confidence Level Repeated Sampling',
        subtitle: 'Simulating 20 Random Intervals Around Fixed Population Mean',
        type: 'confidence_interval_capture_rate',
        description: 'In repeated sampling, approximately 95% of constructed confidence intervals will capture the fixed, true population parameter mu, while 5% will miss.',
        takeaway: 'Once calculated, an interval contains mu with probability 1 or 0; 95% is the long-run capture rate of the method!'
      }
    ],
    commonTraps: [
      'Conducting Two-Sample t-Test on Paired Data: If data are collected in pairs (e.g., pre/post test), analyzing them as two independent samples ignores the pairing and loses substantial credit on the exam.',
      'Writing Hypotheses with Sample Statistics: Writing H0: x-bar = 50 instead of H0: mu = 50. Hypotheses are ALWAYS about unobserved population parameters!',
      'Pooling Standard Deviations: Selecting the "Pooled: Yes" option on graphing calculators. Always choose "Pooled: No" for two-sample t-procedures in AP Statistics.',
      'Failing to Check Normality for Small Samples: When n < 30, failing to graph the sample data (dotplot or boxplot) and comment on the lack of strong skewness and outliers forfeits the condition point.'
    ],
    cramSheet: [
      'Standard Error of mean: SE = s / sqrt(n). Degrees of freedom: df = n - 1.',
      '1-Sample t-Interval: x-bar +/- t* (s / sqrt(n)). 1-Sample t-Test: t = (x-bar - mu0) / (s / sqrt(n)).',
      'Normal condition check: If n >= 30, CLT applies. If n < 30, plot data and verify NO strong skewness and NO outliers.',
      'Matched Pairs: Compute differences d = x1 - x2. Run 1-Sample t-procedure on mu_d with df = n_pairs - 1.',
      '2-Sample t-Test: t = (x-bar1 - x-bar2) / sqrt[s1^2/n1 + s2^2/n2]. Never pool variances (Pooled: No).',
      't vs z: Use t whenever population standard deviation sigma is unknown (which is 99% of quantitative inference).'
    ]
  },

  // ==========================================
  // UNIT 5: REGRESSION ANALYSIS
  // Official Fall 2026 Redesign Framework (CED Units 2 & 9 consolidated)
  // Exam Weight: 10%–20% of AP Exam
  // ==========================================
  {
    unitId: 'u5',
    unitNumber: 5,
    title: 'Regression Analysis',
    examWeight: '10%–20% of AP Exam',
    bigIdea: 'Bivariate relationships are modeled using least-squares regression lines. Assessing model adequacy via correlation, residuals, and coefficient of determination leads directly to statistical inference for the true population slope.',
    keyTheorems: [
      {
        name: 'The Least-Squares Property',
        conditions: 'Fitting a linear regression model y-hat = a + bx to bivariate quantitative data.',
        conclusion: 'The least-squares regression line (LSRL) minimizes the sum of squared residuals: sum (y_i - y-hat_i)^2. The line always passes through the point of means (x-bar, y-bar).',
        apTip: 'The sum of the raw residuals sum (y_i - y-hat_i) is always equal to 0 for any least-squares regression line!'
      },
      {
        name: 'LINE Conditions for Regression Inference',
        conditions: 'Conducting confidence intervals or hypothesis tests for the population slope beta_1.',
        conclusion: 'L - Linear relationship (residual plot shows no curve). I - Independent observations (10% condition). N - Normal distribution of residuals (histogram of residuals is symmetric). E - Equal variance (residual plot shows constant vertical spread across all x).',
        apTip: 'Remember the acronym LINE to verify all 4 required conditions on regression inference FRQs.'
      },
      {
        name: 'Influential Points vs. High Leverage Points',
        conditions: 'Identifying unusual observations on a scatterplot.',
        conclusion: 'A point has high leverage if its x-value is far from the mean of x (x-bar). A point is influential if removing it substantially changes the slope b, y-intercept a, or correlation r.',
        apTip: 'A high leverage point whose y-value aligns with the linear trend of the other data will STRENGTHEN the correlation r and have little impact on the slope, but it is still high leverage!'
      }
    ],
    formulas: [
      {
        name: 'Least-Squares Regression Line (LSRL)',
        latex: '\\hat{y} = a + bx \\quad \\text{or} \\quad \\hat{y} = b_0 + b_1 x',
        explanation: 'y-hat is the predicted response variable; a is the y-intercept; b is the slope; x is the explanatory variable.'
      },
      {
        name: 'Slope of LSRL from Summary Statistics',
        latex: 'b = r \\left(\\frac{s_y}{s_x}\\right)',
        explanation: 'The slope is the correlation r scaled by the ratio of standard deviations of y and x.'
      },
      {
        name: 'Y-Intercept of LSRL from Summary Statistics',
        latex: 'a = \\bar{y} - b\\bar{x}',
        explanation: 'Derived from the fact that the LSRL must pass through the centroid point of averages (x-bar, y-bar).'
      },
      {
        name: 'Residual Formula',
        latex: 'e_i = y_i - \\hat{y}_i \\quad (\\text{AP mnemonic: } \\text{Actual} - \\text{Predicted})',
        explanation: 'Positive residual: point lies above the line (model underpredicted). Negative residual: point lies below the line (model overpredicted).'
      },
      {
        name: 'Coefficient of Determination (R-squared)',
        latex: 'r^2 = (r)^2 = \\frac{\\sum (\\hat{y}_i - \\bar{y})^2}{\\sum (y_i - \\bar{y})^2}',
        explanation: 'The proportion of total variation in the response variable y that is explained by the linear relationship with explanatory variable x.'
      },
      {
        name: 'Confidence Interval for Population Slope',
        latex: 'b \\pm t^* SE_b \\quad (df = n - 2)',
        explanation: 'Used to estimate the true slope beta1 of the population regression line. Critical value t* has df = n - 2.'
      },
      {
        name: 'Significance Test for Slope',
        latex: 't = \\frac{b - 0}{SE_b} \\quad (df = n - 2)',
        explanation: 'Tests H0: beta1 = 0 (no linear relationship) vs Ha: beta1 != 0. Read directly from computer output!'
      }
    ],
    sections: [
      {
        heading: '1. Scatterplots, Explanatory/Response Variables & Correlation (r) (CED 2.1–2.4)',
        content: `Analyzing bivariate quantitative data and interpreting linear association:
- **Variables**:
  - *Explanatory Variable ($x$)*: The independent variable graphed on the horizontal axis that explains or predicts changes in $y$.
  - *Response Variable ($y$)*: The dependent variable graphed on the vertical axis that measures the outcome of a study.
- **Describing Scatterplots (DUFS Framework)**:
  - **D - Direction**: Positive (as $x \\uparrow, y \\uparrow$), Negative (as $x \\uparrow, y \\downarrow$), or None.
  - **U - Unusual Points**: Outliers, high leverage points, clusters, or gaps.
  - **F - Form**: Linear vs. Curved / Non-linear.
  - **S - Strength**: Weak, Moderate, or Strong (based on how tightly points cluster around the trend).
- **The Correlation Coefficient ($r$)**:
  - Measures the strength and direction of the **linear** relationship between two quantitative variables.
  - $-1 \\le r \\le 1$.
  - $r > 0$ indicates positive association; $r < 0$ indicates negative association; $r = \\pm 1$ indicates a perfect straight line.
  - **Properties of $r$**:
    1. **Unitless**: Scaling or changing units of $x$ or $y$ (e.g., inches to cm) does NOT change $r$.
    2. **Symmetric**: Swapping $x$ and $y$ does NOT change $r$.
    3. **Non-resistant**: Highly sensitive to extreme outliers!
    4. **Linear only**: A curved relationship can have $r \\approx 0$ even if there is a perfect non-linear pattern!`
      },
      {
        heading: '2. The Least-Squares Regression Line (LSRL) & Slope Interpretation (CED 2.5–2.6)',
        content: `Constructing and interpreting the best-fit line:
- **LSRL Equation**:
  $$\\hat{y} = a + bx$$
  - *Critical AP Notation*: Always write $\\hat{y}$ (y-hat) or write descriptive variable names with a hat (e.g., $\\widehat{\\text{Price}} = 120 + 45(\\text{Size})$). Writing $y = a + bx$ will lose points!
- **Interpreting the Slope ($b$) in Context (Template)**:
  - *"For each additional 1 [unit of $x$], the predicted [response variable $y$] increases/decreases by [|b| units of $y$]."*
  - *Mandatory Words*: You **MUST** include the word *"predicted"* or *"estimated"*!
- **Interpreting the Y-Intercept ($a$) in Context (Template)**:
  - *"When [explanatory variable $x$] is 0 [units], the predicted [response variable $y$] is [a units]."*
- **The Danger of Extrapolation**:
  - Predicting $y$ for $x$-values far outside the domain of the explanatory data is unreliable because we have no evidence the linear pattern continues beyond the observed data range.`
      },
      {
        heading: '3. Residuals & Assessing Model Adequacy via Residual Plots (CED 2.7–2.8)',
        content: `Evaluating whether a linear model is appropriate:
- **Definition of a Residual**:
  $$\\text{Residual} = y - \\hat{y} \\quad (\\text{Actual } y - \\text{Predicted } \\hat{y})$$
  - Positive residual: Point lies above the line (the model underpredicted).
  - Negative residual: Point lies below the line (the model overpredicted).

| Residual Plot Pattern | Diagnostic Interpretation | Linear Model Status | Prescribed Next Step |
| :--- | :--- | :--- | :--- |
| **Uniform Random Scatter** around $e = 0$ | Errors are random with constant vertical spread | **Appropriate**; LINE conditions verified | Proceed with linear model and slope inference. |
| **Curved / U-Shaped Pattern** | Systematic non-linear curvature in data | **NOT Appropriate**; model violates linearity | Transform variables (e.g. $\\log y$ or $\\sqrt{x}$) or fit non-linear curve. |
| **Megaphone / Fan Pattern** | Variance of residuals expands as $x$ increases | **Violates Equal Variance** assumption | Inference invalid; standard errors are biased. |`
      },
      {
        heading: '4. Coefficient of Determination (R-squared) & Residual Standard Deviation (CED 2.9)',
        content: `Quantifying goodness of fit and prediction error:
- **The Coefficient of Determination ($r^2$)**:
  - Represents the proportion of total variation in $y$ explained by the linear model.
  - **Official College Board Interpretation Template**:
    - *"Approximately $[r^2 \\times 100]\\%$ of the variation in [response variable $y$ in context] is accounted for by the linear model relating it to [explanatory variable $x$ in context]."*
- **Standard Deviation of the Residuals ($s$)**:
  $$s = \\sqrt{\\frac{\\sum (y_i - \\hat{y}_i)^2}{n - 2}}$$
  - **Official College Board Interpretation Template**:
    - *"When using the least-squares regression line to predict [response variable $y$] from [explanatory variable $x$], our predictions will typically be off by about [$s$ units of $y$]."*`
      },
      {
        heading: '5. Outliers, Leverage & Influential Points (CED 2.10)',
        content: `Classifying unusual observations in bivariate data:

| Observation Category | Geometric Characteristic ($x, y$) | Effect on Slope ($b$) | Effect on Correlation ($r$) | Impact on Residual ($e$) |
| :--- | :--- | :--- | :--- | :--- |
| **Outlier in $y$ (Low Leverage)** | Typical $x$-value; extreme vertical $y$-value | Minimal effect on slope | **Weakens $r$** (decreases magnitude) | **Very large residual** |
| **High Leverage Point (On Trend)** | Extreme horizontal $x$-value; aligns with linear pattern | Minimal effect on slope | **Strengthens $r$** (increases $|r|$) | Small residual |
| **Influential Point (High Leverage & Off Trend)** | Extreme horizontal $x$-value; deviates from linear pattern | **Substantially changes slope** (acts as a lever arm) | **Drastically weakens $r$** | Moderate to large residual |`
      },
      {
        heading: '6. Statistical Inference for the Population Slope (beta_1) & Output Decoding (CED 9.1–9.4)',
        content: `Conducting confidence intervals and hypothesis tests for slope:

| Output Term | Statistical Meaning | Mathematical Notation | AP FRQ Purpose & Interpretation |
| :--- | :--- | :--- | :--- |
| **Constant Coef** | $y$-intercept of fitted LSRL | $a$ | Predicted response when explanatory variable $x = 0$. |
| **Variable Coef** | Slope of fitted LSRL | $b$ | Predicted change in $y$ per 1-unit increase in $x$. |
| **SE Coef (Slope)** | Standard error of the slope | $SE_b$ | Estimates variation of sample slope $b$ across repeated samples. |
| **$T$-Ratio** | Test statistic for $H_0: \\beta_1 = 0$ | $t = \\frac{b - 0}{SE_b}$ | Number of standard errors $b$ is from hypothesized null slope 0. |
| **$P$-Value** | 2-tailed significance probability | $P(T \\le -|t| \\text{ or } T \\ge |t|)$ | Reject $H_0$ if $P < \\alpha$; divide by 2 for one-sided $H_a$. |
| **$S$** | Residual standard deviation | $s$ | Typical prediction error when using LSRL to predict $y$. |
| **$R$-Sq** | Coefficient of determination | $r^2$ | Proportion of variation in $y$ explained by linear model with $x$. |

- **LINE Conditions for Slope Inference**:
  - **L - Linear**: Scatterplot shows a linear pattern; residual plot shows random scatter.
  - **I - Independent**: Individual observations are independent ($10\\%$ condition: $n \\le 0.10N$).
  - **N - Normal Residuals**: Histogram/dotplot of residuals is roughly symmetric with no extreme outliers.
  - **E - Equal Variance**: Residual plot exhibits constant vertical spread across all values of $x$.`
      }
    ],
    workedExamples: [
      {
        title: 'Interpreting Computer Regression Output & Calculating Residuals',
        topicRef: 'CED Stat 2.5 & 2.7 Linear Regression and Residuals',
        question: 'A botanist investigates the relationship between weekly sunlight exposure (x, in hours) and the growth of orchid stems (y, in mm). The computer output is: Predictor: Constant Coef = 8.20, SE = 2.10; Sunlight Coef = 3.45, SE = 0.52; S = 1.84, R-Sq = 68.4%. (a) Write the equation of the least-squares regression line. (b) Interpret the slope in context. (c) Interpret R-Sq in context. (d) An orchid receiving 12 hours of sunlight grew 46.0 mm. Calculate and interpret its residual.',
        solutionSteps: [
          'Step 1: Write the LSRL equation: Growth-hat = 8.20 + 3.45(Sunlight) or y-hat = 8.20 + 3.45x, where y-hat is predicted stem growth in mm and x is weekly sunlight in hours.',
          'Step 2: Interpret the slope (3.45): For each additional 1 hour of weekly sunlight exposure, the predicted stem growth increases by 3.45 mm.',
          'Step 3: Interpret R-Sq (68.4%): Approximately 68.4% of the variation in orchid stem growth is accounted for by the linear model relating growth to weekly sunlight exposure.',
          'Step 4: Calculate the predicted growth for x = 12: y-hat = 8.20 + 3.45(12) = 8.20 + 41.40 = 49.60 mm.',
          'Step 5: Calculate the residual: Residual = Actual - Predicted = y - y-hat = 46.0 - 49.60 = -3.60 mm.',
          'Step 6: Interpret the residual: The actual stem growth of this orchid was 3.60 mm less than predicted by the least-squares regression line.'
        ],
        finalAnswer: 'y-hat = 8.20 + 3.45x. Slope: predicted growth increases by 3.45 mm per hour of sun. Residual = -3.60 mm (actual was 3.60 mm less than predicted).',
        apScoringTip: 'Always include the hat symbol (y-hat) and include the word "predicted" or "estimated" in your slope interpretation. Never say "growth increases by 3.45 mm" without the word predicted!'
      },
      {
        title: 'Full 4-Step Hypothesis Test for Slope beta_1',
        topicRef: 'CED Stat 9.3 Significance Test for Slope of Regression Line',
        question: 'An environmentalist measures water temperature (x, in degrees Celsius) and dissolved oxygen concentration (y, in mg/L) in n = 18 randomly selected stream locations. Computer output yields: Constant Coef = 14.82, SE = 1.25; Temperature Coef = -0.380, SE = 0.082; S = 0.74, R-Sq = 57.2%. The residual plot shows a random scatter of points with constant vertical spread. Test at alpha = 0.01 whether dissolved oxygen decreases significantly as water temperature increases.',
        solutionSteps: [
          'Step 1 (State): Let beta_1 = the true slope of the population regression line relating dissolved oxygen to water temperature. Hypotheses: H0: beta_1 = 0 vs Ha: beta_1 < 0. Significance level alpha = 0.01.',
          'Step 2 (Plan): Name of test: Linear regression t-test for slope beta_1. Check conditions (LINE): (1) Linear: Residual plot shows random scatter with no curved pattern. (2) Independent: 18 stream locations are randomly selected and <= 10% of all stream locations. (3) Normal: Assume residuals are approximately normal. (4) Equal Variance: Residual plot shows roughly constant vertical spread. Conditions are satisfied.',
          'Step 3 (Do): From output: b = -0.380, SE_b = 0.082. Degrees of freedom df = n - 2 = 18 - 2 = 16. Test statistic t = (b - 0) / SE_b = -0.380 / 0.082 approx -4.634. P-value: P(T <= -4.634) with df = 16. Using tcdf(-1E99, -4.634, 16) = 0.00014 (or P < 0.001).',
          'Step 4 (Conclude): Because the P-value (0.00014) is less than alpha = 0.01, we reject H0. There is convincing statistical evidence that dissolved oxygen concentration decreases significantly as water temperature increases.'
        ],
        finalAnswer: 't = -4.634, df = 16, P-value = 0.00014. Reject H0 at alpha = 0.01; convincing evidence of a negative linear relationship.',
        apScoringTip: 'Remember that degrees of freedom for regression inference is n - 2, NOT n - 1. Also note whether the alternative hypothesis is one-sided (< or >) or two-sided (!=); computer output tables typically display two-sided P-values!'
      }
    ],
    diagrams: [
      {
        id: 'u5-diag-residuals',
        title: 'Residual Geometry and Line Fit',
        subtitle: 'Actual vs Predicted (y - y-hat) Discrepancies',
        type: 'residual_geometry_scatterplot',
        description: 'Each residual represents the vertical distance from a data point (x, y) to the fitted regression line y-hat. The least-squares regression line minimizes the sum of squared vertical distances sum (y - y-hat)^2.',
        takeaway: 'Residuals are always measured VERTICALLY along the y-axis, never perpendicularly to the regression line.'
      },
      {
        id: 'u5-diag-leverage',
        title: 'Leverage vs. Influential Points',
        subtitle: 'How Extreme Observations Affect Slope and Correlation',
        type: 'leverage_influence_plot',
        description: 'An observation with an extreme x-value has high leverage. If it falls away from the linear trend, it acts as a lever arm and tilts the regression line toward itself, substantially altering the slope and intercept.',
        takeaway: 'Removing an influential point causes a dramatic shift in slope b, intercept a, or correlation r.'
      },
      {
        id: 'u5-diag-resplot',
        title: 'Residual Plot Diagnostics',
        subtitle: 'Model Appropriateness: Random Scatter vs Curved Pattern vs Fan Shape',
        type: 'residual_plot_diagnostics',
        description: 'Evaluating residual plots against the horizontal zero axis: random scatter confirms a linear model is appropriate, whereas curved or fan patterns indicate non-linearity or heteroscedasticity.',
        takeaway: 'Linear models are appropriate ONLY when the residual plot exhibits random scatter with constant vertical spread!'
      },
      {
        id: 'u5-diag-output',
        title: 'Reading Computer Regression Output',
        subtitle: 'Annotated Minitab, R, and Graphing Calculator Regression Tables',
        type: 'regression_computer_output_annotated',
        description: 'Decodes every key term in standard regression tables: Constant intercept a, explanatory slope b, standard error SE_b, t-test statistic, P-value, residual standard deviation s, and coefficient of determination r^2.',
        takeaway: 'On computer output tables, the slope b is ALWAYS next to the explanatory variable name, NEVER next to "Constant"!'
      }
    ],
    commonTraps: [
      'Omitting "Predicted" in Slope Interpretations: Writing "For every 1 hour increase in x, y increases by 3.45" will lose credit. You MUST write "the PREDICTED value of y increases by 3.45".',
      'Extrapolation: Using a regression model to predict y for an x-value far outside the range of explanatory data used to fit the model.',
      'Misinterpreting R-squared: Stating that r^2 is the probability that the line is accurate. r^2 is the proportion of variation in y accounted for by the linear model relating it to x.',
      'Using df = n - 1 for Regression Inference: For linear regression inference, df = n - 2 because two parameters (alpha and beta_1) are estimated.'
    ],
    cramSheet: [
      'LSRL equation: y-hat = a + bx. Slope b = r(s_y / s_x). Intercept a = y-bar - b(x-bar). Passes through (x-bar, y-bar).',
      'Residual = y - y-hat (Actual - Predicted). Sum of residuals is always 0.',
      'Residual plot: Random scatter -> Linear model is appropriate. Curved pattern -> Linear model is NOT appropriate.',
      'R-squared: Proportion of variation in y accounted for by the linear relationship with x.',
      'Standard error of residuals s: Typical prediction error in units of y.',
      'Regression inference: df = n - 2. Test statistic t = (b - 0) / SE_b. Confidence interval = b +/- t* SE_b.',
      'LINE conditions: Linear, Independent, Normal residuals, Equal variance of residuals.'
    ]
  }
];
