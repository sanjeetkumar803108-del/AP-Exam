// AP Statistics Units Data (Official Fall 2026 5-Unit Redesign)
// Comprehensive College Board Course and Exam Description (CED) Alignment
// 29 Comprehensive Quest Levels, 87 High-Yield Questions (3 per Level)
// Balanced Option Distribution across A, B, C, D (21-22 each) with full LaTeX/KaTeX support.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_STATISTICS_UNIT_DEFINITIONS: UnitDefinition[] = [
  // =========================================================================
  // UNIT 1: EXPLORING ONE-VARIABLE DATA AND COLLECTING DATA (20–30%)
  // =========================================================================
  {
    unitIndex: 1,
    unitId: 'u1',
    title: 'Unit 1: Exploring One-Variable Data and Collecting Data',
    shortTitle: 'Unit 1: Data & Collection',
    description: 'Variables, categorical & quantitative representations, summary statistics, 1.5*IQR outlier rule, sampling techniques, and experimental design principles',
    examWeight: '20–30% of AP Exam',
    biome: {
      name: 'Observatory of Distributions & Sampling',
      icon: '📊',
      accentColor: '#0284C7',
      secondaryColor: '#0369A1',
      groundGradient: 'from-sky-100 via-cyan-50 to-blue-100',
      cardBorder: 'border-sky-500',
      trailColor: '#0284c7',
      nodeRing: 'ring-sky-400/40',
      skyTint: 'from-sky-50 to-cyan-50/30'
    },
    levels: [
      {
        id: 101,
        unitIndex: 1,
        levelNumber: 1,
        uniqueKey: 'stats-u1-l1',
        topicNumber: 'Topic 1.1 & 1.2',
        name: 'Variables, Parameters & Observational Units',
        subtitle: 'Distinguishing categorical, discrete, continuous & parameters vs statistics',
        difficulty: 'Easy',
        rewardCoins: 30,
        questions: [
          {
            id: 'stats-u1-l1-q1',
            stem: 'A municipal water authority records several attributes for each household in a city: ZIP code, household water consumption in gallons per billing cycle, whether a filtration system is installed (Yes/No), and the number of residents living in the home. Which of the following correctly classifies these four variables in order?',
            options: [
              'Categorical, Quantitative Continuous, Categorical, Quantitative Discrete',
              'Quantitative Discrete, Quantitative Continuous, Categorical, Quantitative Discrete',
              'Categorical, Quantitative Discrete, Categorical, Quantitative Continuous',
              'Quantitative Continuous, Quantitative Continuous, Categorical, Quantitative Discrete'
            ],
            correctIndex: 0,
            explanation: 'ZIP code is a label used for grouping rather than measurement, making it categorical. Water consumption can take any real value on a continuous interval, making it continuous quantitative. Filtration status (Yes/No) is categorical. The count of residents can only take non-negative integers ($0, 1, 2, \\dots$), making it discrete quantitative.',
            distractorTip: 'ZIP codes are numbers, but arithmetic operations on them are meaningless; hence, they are categorical variables.'
          },
          {
            id: 'stats-u1-l1-q2',
            stem: 'A high school principal surveys a random sample of $120$ seniors out of the $600$ seniors in the graduating class and finds that $78\\%$ plan to attend a four-year college. Historical records indicate that across all $600$ seniors, $72\\%$ actually enrolled in college last year. Which of the following correctly pairs the parameter and the statistic?',
            options: [
              'Parameter: $p = 0.78$; Statistic: $\\hat{p} = 0.72$',
              'Parameter: $p = 0.72$; Statistic: $\\hat{p} = 0.78$',
              'Parameter: $\\mu = 120$; Statistic: $\\bar{x} = 600$',
              'Parameter: $\\hat{p} = 0.78$; Statistic: $p = 0.72$'
            ],
            correctIndex: 1,
            explanation: 'A parameter is a fixed numerical summary of a population ($p = 0.72$ for all 600 seniors). A statistic is a numerical summary computed from a sample ($\hat{p} = 78\\% = 0.78$ from the sample of $n = 120$ seniors).',
            distractorTip: 'Remember: Parameters describe Populations ($P \\to P$), while Statistics describe Samples ($S \\to S$).'
          },
          {
            id: 'stats-u1-l1-q3',
            stem: 'A biomedical researcher measures the weight in kilograms of $50$ laboratory mice before and after administering a dietary supplement. In this statistical investigation, what constitutes an observational unit?',
            options: [
              'The dietary supplement administered to the mice',
              'The average weight loss across all mice in the study',
              'An individual laboratory mouse',
              'The collection of all mice in the laboratory facility'
            ],
            correctIndex: 2,
            explanation: 'An observational unit (or individual) is the single entity from which data values are collected. In this investigation, each individual mouse is the observational unit upon which the variable (weight) is recorded.',
            distractorTip: 'Do not confuse the observational unit (an individual entity) with the sample (the group of entities) or the variable (the characteristic measured).'
          }
        ]
      },
      {
        id: 102,
        unitIndex: 1,
        levelNumber: 2,
        uniqueKey: 'stats-u1-l2',
        topicNumber: 'Topic 1.3 & 1.4',
        name: 'Categorical Data Displays & Relative Frequencies',
        subtitle: 'Frequency tables, bar charts, pie charts & categorical comparisons',
        difficulty: 'Easy',
        rewardCoins: 30,
        questions: [
          {
            id: 'stats-u1-l2-q1',
            stem: 'A university surveyed $400$ incoming freshmen regarding their primary reason for choosing the university: Academic Reputation ($160$), Affordability ($120$), Campus Location ($80$), and Athletic Programs ($40$). If a pie chart is constructed to display this categorical distribution, what is the central angle measure for the sector representing Affordability?',
            options: [
              '$72^\\circ$',
              '$144^\\circ$',
              '$108^\\circ$',
              '$30^\\circ$'
            ],
            correctIndex: 2,
            explanation: 'The relative frequency for Affordability is $\\frac{120}{400} = 0.30$ ($30\\%$). The central angle in a circular pie chart is $0.30 \\times 360^\\circ = 108^\\circ$.',
            distractorTip: 'Be careful not to confuse the percentage ($30\\%$) with the central angle in degrees ($30\\%$ of $360^\\circ = 108^\\circ$).'
          },
          {
            id: 'stats-u1-l2-q2',
            stem: 'A marketing team compares customer satisfaction ratings (Satisfied, Neutral, Dissatisfied) across two store locations: Downtown ($n = 200$) and Suburban ($n = 800$). Which of the following visual displays is most appropriate to evaluate whether customer satisfaction is associated with store location?',
            options: [
              'A side-by-side bar chart showing raw counts of customers in each satisfaction category.',
              'A segmented bar chart or mosaic plot comparing the relative frequencies (percentages) of satisfaction within each store location.',
              'A single histogram displaying total customer counts.',
              'A back-to-back stem-and-leaf plot of satisfaction counts.'
            ],
            correctIndex: 1,
            explanation: 'Because the sample sizes differ substantially ($200$ vs. $800$), raw frequency counts would be misleading. A segmented bar chart or mosaic plot displaying relative frequencies within each location allows direct, unbiased comparisons of the proportions.',
            distractorTip: 'Comparing raw counts across groups with unequal sample sizes is a classic AP distractor; always use relative frequencies (percentages).'
          },
          {
            id: 'stats-u1-l2-q3',
            stem: 'Which of the following is a necessary condition for a bar graph of a categorical variable to be fair and visually accurate?',
            options: [
              'The horizontal axis must represent numerical intervals with no spaces between bars.',
              'The vertical axis must start at zero and maintain a consistent, uniform scale.',
              'The bars must always be arranged in alphabetical order by category name.',
              'The total area of all bars combined must equal exactly $100$ square units.'
            ],
            correctIndex: 1,
            explanation: 'To satisfy the area principle and avoid misleading visual distortion, the vertical frequency or relative frequency axis must begin at $0$. Truncating the vertical axis exaggerates differences between categories.',
            distractorTip: 'Touching bars characterize histograms (for continuous quantitative data), whereas bar charts for categorical data must have distinct gaps between bars.'
          }
        ]
      },
      {
        id: 103,
        unitIndex: 1,
        levelNumber: 3,
        uniqueKey: 'stats-u1-l3',
        topicNumber: 'Topic 1.5 & 1.6',
        name: 'Quantitative Displays & Distribution Descriptions (SOCS)',
        subtitle: 'Histograms, dotplots, stem-plots, shape, center, spread & unusual features',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u1-l3-q1',
            stem: 'A distribution of annual household salaries in a suburban county has a mean of $\\$84,000$ and a median of $\\$58,000$. The histogram shows a long tail extending toward higher incomes. Which of the following best describes the shape of this distribution?',
            options: [
              'Roughly symmetric and bell-shaped',
              'Skewed to the left (negatively skewed)',
              'Skewed to the right (positively skewed)',
              'Uniform across all salary brackets'
            ],
            correctIndex: 2,
            explanation: 'When the tail extends toward larger values and the mean ($\\$84,000$) is substantially greater than the median ($\\$58,000$), the distribution is skewed to the right (positively skewed). Extreme high values pull the non-resistant mean in the direction of the tail.',
            distractorTip: 'Remember: The mean is pulled toward the tail. If Mean > Median, the distribution is skewed right.'
          },
          {
            id: 'stats-u1-l3-q2',
            stem: 'On the AP Statistics exam, when asked to "describe the distribution" of a quantitative variable from a display, which four core characteristics must always be addressed in context?',
            options: [
              'Sample size, Sampling method, Margin of error, and Significance level',
              'Shape, Outliers/Unusual features, Center, and Spread (SOCS) with units of measurement',
              'Mean, Standard deviation, Minimum, and Maximum only',
              'Linearity, Homoscedasticity, Normality, and Independence'
            ],
            correctIndex: 1,
            explanation: 'The official College Board expectation for describing any quantitative distribution is SOCS: Shape (symmetry/skewness, unimodal/bimodal), Outliers/Gaps/Clusters, Center (median or mean), and Spread (IQR, range, or standard deviation), all explicitly tied to the context and units.',
            distractorTip: 'Omitting units or failing to connect the description back to the real-world context of the problem results in lost points on AP FRQs.'
          },
          {
            id: 'stats-u1-l3-q3',
            stem: 'A stem-and-leaf plot displays the ages of attendees at a community theater: \\n\\n$1 \\mid 2 \\ 4 \\ 8$ \\n$2 \\mid 1 \\ 3 \\ 5 \\ 7$ \\n$3 \\mid 0 \\ 4 \\ 9$ \\n$4 \\mid 2 \\ 8$ \\n$5 \\mid 1$ \\n$6 \\mid $ \\n$7 \\mid 6$ \\n\\nKey: $2 \\mid 1 = 21$ years old. Which of the following statements is correct regarding this distribution?',
            options: [
              'The distribution is symmetric with an outlier at age 12.',
              'The distribution is unimodal with a gap in the 60s and an unusual high value at age 76.',
              'The distribution is bimodal with centers at 21 and 76.',
              'The distribution is uniform with a median in the 40s.'
            ],
            correctIndex: 1,
            explanation: 'The distribution has a primary concentration of values in the 10s, 20s, and 30s, followed by a gap in the 60s (stem 6 has no leaves) and an isolated high attendee age of 76.',
            distractorTip: 'Empty stems represents real gaps in the data and must be preserved; never skip stems when constructing stem-and-leaf plots.'
          }
        ]
      },
      {
        id: 104,
        unitIndex: 1,
        levelNumber: 4,
        uniqueKey: 'stats-u1-l4',
        topicNumber: 'Topic 1.7',
        name: 'Summary Statistics & Outlier Identification',
        subtitle: 'Resistant vs non-resistant measures, IQR, and the 1.5*IQR rule',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u1-l4-q1',
            stem: 'A dataset of test scores has a five-number summary: $\\text{Min} = 42$, $Q_1 = 64$, $\\text{Median} = 76$, $Q_3 = 88$, $\\text{Max} = 100$. Using the standard $1.5 \\times \\text{IQR}$ rule, what are the lower and upper fences for identifying potential outliers?',
            options: [
              'Lower fence: $28$; Upper fence: $124$',
              'Lower fence: $40$; Upper fence: $112$',
              'Lower fence: $52$; Upper fence: $100$',
              'Lower fence: $30$; Upper fence: $120$'
            ],
            correctIndex: 0,
            explanation: '$\\text{IQR} = Q_3 - Q_1 = 88 - 64 = 24$. Then $1.5 \\times \\text{IQR} = 1.5 \\times 24 = 36$. \\nLower fence $= Q_1 - 1.5 \\times \\text{IQR} = 64 - 36 = 28$. \\nUpper fence $= Q_3 + 1.5 \\times \\text{IQR} = 88 + 36 = 124$.',
            distractorTip: 'Do not subtract from the median! Outlier fences are built relative to $Q_1$ and $Q_3$, not the median.'
          },
          {
            id: 'stats-u1-l4-q2',
            stem: 'A teacher discovers a grading error and decides to add $5$ points to every student\'s quiz score. How will this linear transformation affect the mean and standard deviation of the scores?',
            options: [
              'The mean will increase by 5 points, and the standard deviation will increase by 5 points.',
              'The mean will increase by 5 points, and the standard deviation will remain unchanged.',
              'The mean will remain unchanged, and the standard deviation will increase by 5 points.',
              'Both the mean and standard deviation will remain unchanged.'
            ],
            correctIndex: 1,
            explanation: 'Adding a constant $c$ to every observation shifts all values along the number line, increasing measures of center (mean, median) by $c$, but does NOT change the distance between values. Thus, measures of spread (standard deviation, IQR, range) remain unchanged.',
            distractorTip: 'Adding/subtracting a constant shifts position only; only multiplying/dividing by a constant scales measures of spread.'
          },
          {
            id: 'stats-u1-l4-q3',
            stem: 'Why are the median and interquartile range (IQR) preferred over the mean and standard deviation when describing a heavily skewed distribution?',
            options: [
              'The median and IQR are easier to compute without modern calculators.',
              'The median and IQR are resistant (robust) statistics that are not strongly influenced by extreme outliers or skewness.',
              'The mean and standard deviation can only be calculated when the sample size $n \\ge 30$.',
              'The median and IQR always produce a narrower range than standard deviation.'
            ],
            correctIndex: 1,
            explanation: 'The median and IQR are resistant measures because their calculations are based on position rather than magnitude. The mean and standard deviation incorporate every individual data value, making them non-resistant to outliers.',
            distractorTip: 'On the AP exam, remember: Symmetric distributions $\\to$ use Mean & Standard Deviation; Skewed distributions or outliers $\\to$ use Median & IQR.'
          }
        ]
      },
      {
        id: 105,
        unitIndex: 1,
        levelNumber: 5,
        uniqueKey: 'stats-u1-l5',
        topicNumber: 'Topic 1.8 & 1.9',
        name: 'Boxplots, Standardized Scores & Comparing Distributions',
        subtitle: '5-number summaries, boxplots, z-score transformations, and relative position',
        difficulty: 'Hard',
        rewardCoins: 40,
        questions: [
          {
            id: 'stats-u1-l5-q1',
            stem: 'Sarah scores an $86$ on a Chemistry exam with a mean of $74$ and standard deviation of $8$. On her History exam, she scores an $88$ where the class mean is $80$ and standard deviation of $5$. On which exam did Sarah perform better relative to her peers?',
            options: [
              'History, because her raw score of 88 is higher than 86.',
              'Chemistry, because her standardized $z$-score is $1.50$ compared to $1.60$ in History.',
              'History, because her standardized $z$-score ($z = 1.60$) is higher than her Chemistry $z$-score ($z = 1.50$).',
              'Her relative performance was identical on both exams.'
            ],
            correctIndex: 2,
            explanation: 'Standardized score $z = \\frac{x - \\mu}{\\sigma}$. \\nChemistry: $z = \\frac{86 - 74}{8} = \\frac{12}{8} = 1.50$. \\nHistory: $z = \\frac{88 - 80}{5} = \\frac{8}{5} = 1.60$. \\nBecause her History $z$-score ($1.60$) is higher, she scored further above the class average relative to the variability of the distribution.',
            distractorTip: 'Raw scores cannot be compared across different distributions; you must calculate standardized $z$-scores to evaluate relative standing.'
          },
          {
            id: 'stats-u1-l5-q2',
            stem: 'Parallel boxplots displaying weekly study hours for STEM majors versus Humanities majors reveal that the median for STEM is $24$ hours ($Q_1 = 18, Q_3 = 30$) and the median for Humanities is $16$ hours ($Q_1 = 12, Q_3 = 20$). What proportion of STEM majors studied at least as many hours as the top $25\\%$ of Humanities majors?',
            options: [
              'Approximately $25\\%$',
              'Approximately $50\\%$',
              'Approximately $75\\%$',
              'Nearly $100\\%$'
            ],
            correctIndex: 2,
            explanation: 'The top $25\\%$ of Humanities majors studied at least $Q_3 = 20$ hours. For STEM majors, $Q_1 = 18$ and the median is $24$. Since $Q_1 = 18$ is below $20$ and the median is $24$, approximately $75\\%$ of STEM majors study above $Q_1$ (which is $18$ hours), meaning at least $75\\%$ study $18$ or more hours.',
            distractorTip: 'Each section of a boxplot (whisker, lower box, upper box, upper whisker) contains exactly $25\\%$ of the data observations.'
          },
          {
            id: 'stats-u1-l5-q3',
            stem: 'If a modified boxplot has an upper whisker that extends to a value of $92$, and an asterisk plotted at $104$, what does the value $92$ represent?',
            options: [
              'The upper fence calculated as $Q_3 + 1.5 \\times \\text{IQR}$',
              'The third quartile $Q_3$ of the dataset',
              'The largest observation in the dataset that is NOT an outlier',
              'The maximum possible value in the population'
            ],
            correctIndex: 2,
            explanation: 'In a modified boxplot, whiskers do not extend to the theoretical outlier fences; they extend to the most extreme actual data point that falls within the fences. Values outside the fences are plotted individually as outlier symbols (asterisks or dots).',
            distractorTip: 'Whiskers stop at the most extreme non-outlier data point in the sample, NOT at the fence boundary itself.'
          }
        ]
      },
      {
        id: 106,
        unitIndex: 1,
        levelNumber: 6,
        uniqueKey: 'stats-u1-l6',
        topicNumber: 'Topic 1.10–1.13',
        name: 'Data Collection, Sampling & Experimental Design (BOSS)',
        subtitle: 'Observational vs experimental, sampling biases, blocking, and causal inference',
        difficulty: 'Boss',
        rewardCoins: 50,
        questions: [
          {
            id: 'stats-u1-l6-q1',
            stem: 'A study investigated whether listening to classical music while studying improves test scores. High school students were invited to volunteer; $50$ students who volunteered were randomly assigned to study with Mozart playing, and $50$ were randomly assigned to study in silence. The music group scored significantly higher on average ($p < 0.01$). To which group can a causal conclusion be properly generalized?',
            options: [
              'Cause-and-effect can be concluded, but the findings can only be generalized to students similar to the volunteers who participated.',
              'Cause-and-effect cannot be concluded because the students were not randomly selected from all high schools.',
              'Cause-and-effect can be concluded and generalized to all high school students nationwide.',
              'No causal conclusion can be made because there was no blinding used in the study.'
            ],
            correctIndex: 0,
            explanation: 'Random assignment of treatments allows for a cause-and-effect conclusion (classical music caused the higher scores). However, because participants were volunteers rather than a random sample from a population, findings can only be generalized to a population similar to those who participated.',
            distractorTip: 'Scope of Inference rule: Random selection allows generalization to the population; Random assignment allows cause-and-effect inference.'
          },
          {
            id: 'stats-u1-l6-q2',
            stem: 'An agronomist wants to test three fertilizer formulations on corn yield across an experimental field. The field has an east-to-west moisture gradient due to a nearby river. What is the most effective experimental design to control for this extraneous source of variation?',
            options: [
              'A completely randomized design assigning treatments entirely at random across all plots.',
              'A randomized block design grouping plots into blocks based on proximity to the river (moisture level), then randomly assigning all three fertilizers within each block.',
              'A matched pairs design assigning all three fertilizers to each individual plot simultaneously.',
              'A voluntary response survey of local farmers observing which fertilizer they use.'
            ],
            correctIndex: 1,
            explanation: 'Blocking groups experimental units by a known source of extraneous variation (soil moisture). Randomly assigning treatments within each homogeneous block isolates the variation due to moisture, allowing more precise comparisons of the fertilizer effects.',
            distractorTip: 'Control what you can, block on what you cannot control, and randomize the rest. Blocking reduces unexplained variation in the response.'
          },
          {
            id: 'stats-u1-l6-q3',
            stem: 'A school board wants to survey student opinions on a new bell schedule. A researcher randomly selects $10$ homerooms out of $60$ total homerooms and surveys every student in those $10$ homerooms. Which sampling method was implemented?',
            options: [
              'Stratified random sampling',
              'Cluster random sampling',
              'Systematic random sampling',
              'Simple random sampling'
            ],
            correctIndex: 1,
            explanation: 'In cluster sampling, the population is divided into heterogeneous groups (clusters, like homerooms). A random sample of entire clusters is chosen, and EVERY individual in the selected clusters is surveyed.',
            distractorTip: 'Stratified = "some from all" (take an SRS from every stratum). Cluster = "all from some" (randomly pick entire clusters and survey everyone in them).'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 2: PROBABILITY, RANDOM VARIABLES & DISTRIBUTIONS (15–25%)
  // =========================================================================
  {
    unitIndex: 2,
    unitId: 'u2',
    title: 'Unit 2: Probability, Random Variables, and Probability Distributions',
    shortTitle: 'Unit 2: Probability & RVs',
    description: 'Two-way tables, probability axioms, conditional probability, discrete random variables, binomial models, normal distributions, and Central Limit Theorem',
    examWeight: '15–25% of AP Exam',
    biome: {
      name: 'Stochastic Sanctuary & Gaussian Peaks',
      icon: '🎲',
      accentColor: '#6366F1',
      secondaryColor: '#4F46E5',
      groundGradient: 'from-indigo-100 via-purple-50 to-blue-100',
      cardBorder: 'border-indigo-500',
      trailColor: '#6366f1',
      nodeRing: 'ring-indigo-400/40',
      skyTint: 'from-indigo-50 to-purple-50/30'
    },
    levels: [
      {
        id: 201,
        unitIndex: 2,
        levelNumber: 1,
        uniqueKey: 'stats-u2-l1',
        topicNumber: 'Topic 2.1 & 2.2',
        name: 'Two-Way Tables & Categorical Association',
        subtitle: 'Joint, marginal & conditional relative frequencies and independence checks',
        difficulty: 'Easy',
        rewardCoins: 30,
        questions: [
          {
            id: 'stats-u2-l1-q1',
            stem: 'A two-way table categorizes $200$ patients by exercise frequency (Regular, None) and cardiovascular health (Healthy, At-Risk). Of the $80$ regular exercisers, $68$ are healthy. Of the $120$ non-exercisers, $60$ are healthy. What is the conditional relative frequency of being healthy given that a patient exercises regularly?',
            options: [
              '$\\frac{68}{200} = 0.34$',
              '$\\frac{68}{80} = 0.85$',
              '$\\frac{68}{128} = 0.53$',
              '$\\frac{80}{200} = 0.40$'
            ],
            correctIndex: 1,
            explanation: 'The conditional probability $P(\\text{Healthy} \\mid \\text{Regular Exercise})$ restricts the sample space to the $80$ regular exercisers. Thus, $\\frac{68}{80} = 0.85$ ($85\\%$).',
            distractorTip: 'When given a condition ("given that..."), the denominator must be the total of the condition group, NOT the grand table total.'
          },
          {
            id: 'stats-u2-l1-q2',
            stem: 'Two events $A$ and $B$ are defined in a random process. If $P(A) = 0.40$, $P(B) = 0.50$, and $P(A \\cap B) = 0.20$, which of the following is true regarding events $A$ and $B$?',
            options: [
              'Events $A$ and $B$ are mutually exclusive but not independent.',
              'Events $A$ and $B$ are independent because $P(A \\cap B) = P(A) \\times P(B)$.',
              'Events $A$ and $B$ are dependent because $P(A \\cup B) \\neq 1.0$.',
              'Events $A$ and $B$ are mutually exclusive because $P(A \\cap B) > 0$.'
            ],
            correctIndex: 1,
            explanation: 'Two events are independent if and only if $P(A \\cap B) = P(A) \\times P(B)$. Here, $0.40 \\times 0.50 = 0.20$, which equals $P(A \\cap B)$. Also, because $P(A \\cap B) = 0.20 \\neq 0$, they are NOT mutually exclusive.',
            distractorTip: 'Mutually exclusive events with non-zero probabilities can NEVER be independent, because if one occurs, the chance of the other drops to zero.'
          },
          {
            id: 'stats-u2-l1-q3',
            stem: 'In a survey of $500$ adults, $60\\%$ favor a public transit proposal. If support for the proposal is independent of age group (Under 40 vs. 40 and Over), what proportion of adults Under 40 should favor the proposal?',
            options: [
              '$0.30$',
              '$0.50$',
              '$0.60$',
              'Cannot be determined without the sample size of each age group.'
            ],
            correctIndex: 2,
            explanation: 'By definition of statistical independence, the conditional probability $P(\\text{Favor} \\mid \\text{Under 40})$ must equal the marginal probability $P(\\text{Favor}) = 0.60$.',
            distractorTip: 'Independence means the occurrence of one category provides zero new information about the likelihood of the other.'
          }
        ]
      },
      {
        id: 202,
        unitIndex: 2,
        levelNumber: 2,
        uniqueKey: 'stats-u2-l2',
        topicNumber: 'Topic 2.3–2.5',
        name: 'Probability Axioms & Disjoint Events',
        subtitle: 'Simulations, sample space, complement rule, and mutually exclusive events',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u2-l2-q1',
            stem: 'According to the Law of Large Numbers, what happens to the relative frequency of getting heads when flipping a balanced coin as the number of flips increases?',
            options: [
              'The relative frequency approaches 0.50, and the exact difference between the number of heads and tails approaches zero.',
              'The relative frequency of heads approaches the theoretical probability of 0.50 over the long run.',
              'If a streak of 10 tails occurs, the coin is due for heads to restore balance.',
              'The total count of heads will always equal half the total flips in any trial of 1,000 flips.'
            ],
            correctIndex: 1,
            explanation: 'The Law of Large Numbers states that as the number of independent trials increases, the empirical relative frequency of an event approaches its true theoretical probability. It does NOT guarantee compensation for past streaks (Gambler\'s Fallacy).',
            distractorTip: 'The "Law of Averages" (the idea that a random process compensates for past outcomes) is a psychological myth; coins have no memory.'
          },
          {
            id: 'stats-u2-l2-q2',
            stem: 'Events $C$ and $D$ are mutually exclusive (disjoint). If $P(C) = 0.25$ and $P(D) = 0.45$, what is $P(C \\cup D)$?',
            options: [
              '$0.70$',
              '$0.5875$',
              '$0.1125$',
              '$0.20$'
            ],
            correctIndex: 0,
            explanation: 'For mutually exclusive events, $P(C \\cap D) = 0$. Using the addition rule: $P(C \\cup D) = P(C) + P(D) - P(C \\cap D) = 0.25 + 0.45 - 0 = 0.70$.',
            distractorTip: 'Only subtract $P(C \\cap D) = P(C)P(D)$ if events are independent. When events are disjoint, their intersection is exactly 0.'
          },
          {
            id: 'stats-u2-l2-q3',
            stem: 'A quality control inspector tests components. The probability that a component passes the electrical test is $0.92$. What is the probability that in a random sample of $3$ independent components, at least one component fails?',
            options: [
              '$1 - (0.92)^3 \\approx 0.2213$',
              '$(0.08)^3 \\approx 0.0005$',
              '$3 \\times (0.08) = 0.2400$',
              '$(0.92)^3 \\approx 0.7787$'
            ],
            correctIndex: 0,
            explanation: 'Use the complement rule: $P(\\text{at least one fails}) = 1 - P(\\text{none fail}) = 1 - P(\\text{all 3 pass})$. Since selections are independent, $P(\\text{all 3 pass}) = (0.92)^3 \\approx 0.7787$. Therefore, $1 - 0.7787 = 0.2213$.',
            distractorTip: 'Whenever a question asks for "at least one," compute $1 - P(\\text{none})$.'
          }
        ]
      },
      {
        id: 203,
        unitIndex: 2,
        levelNumber: 3,
        uniqueKey: 'stats-u2-l3',
        topicNumber: 'Topic 2.6 & 2.7',
        name: 'Conditional Probability & Multiplication Rule',
        subtitle: 'General multiplication rule, tree diagrams, and Bayes reasoning',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u2-l3-q1',
            stem: 'At a tech company, $70\\%$ of software bugs are classified as minor ($M$) and $30\\%$ as critical ($C$). Minor bugs are resolved within 24 hours with probability $0.80$, while critical bugs are resolved within 24 hours with probability $0.40$. Given that a randomly selected bug was resolved within 24 hours, what is the probability that it was a critical bug?',
            options: [
              '$\\frac{0.12}{0.68} \\approx 0.176$',
              '$\\frac{0.12}{0.56} \\approx 0.214$',
              '$\\frac{0.30}{0.70} \\approx 0.429$',
              '$\\frac{0.40}{0.68} \\approx 0.588$'
            ],
            correctIndex: 0,
            explanation: 'Total probability of resolved within 24 hours: $P(R) = P(M \\cap R) + P(C \\cap R) = (0.70)(0.80) + (0.30)(0.40) = 0.56 + 0.12 = 0.68$. Using Bayes\' formula: $P(C \\mid R) = \\frac{P(C \\cap R)}{P(R)} = \\frac{0.12}{0.68} \\approx 0.1765$.',
            distractorTip: 'Always construct a tree diagram: find the joint probabilities along the branches and divide the target branch by the sum of all favorable branches.'
          },
          {
            id: 'stats-u2-l3-q2',
            stem: 'If $P(A) = 0.60$, $P(B) = 0.40$, and $P(A \\mid B) = 0.75$, what is $P(B \\mid A)$?',
            options: [
              '$0.50$',
              '$0.30$',
              '$0.24$',
              '$0.75$'
            ],
            correctIndex: 0,
            explanation: 'First find the joint probability: $P(A \\cap B) = P(B) \\times P(A \\mid B) = (0.40)(0.75) = 0.30$. Then conditional probability $P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.30}{0.60} = 0.50$.',
            distractorTip: 'Notice that $P(A \\mid B) \\neq P(B \\mid A)$; reversing conditions drastically alters the reference space.'
          },
          {
            id: 'stats-u2-l3-q3',
            stem: 'Two independent events $E$ and $F$ have probabilities $P(E) = 0.50$ and $P(F) = 0.30$. What is $P(E \\cup F)$?',
            options: [
              '$0.80$',
              '$0.65$',
              '$0.15$',
              '$0.50$'
            ],
            correctIndex: 1,
            explanation: 'Because $E$ and $F$ are independent, $P(E \\cap F) = P(E) \\times P(F) = (0.50)(0.30) = 0.15$. By the general addition rule: $P(E \\cup F) = P(E) + P(F) - P(E \\cap F) = 0.50 + 0.30 - 0.15 = 0.65$.',
            distractorTip: 'Never simply add $P(E) + P(F)$ unless you are explicitly told the events are mutually exclusive!'
          }
        ]
      },
      {
        id: 204,
        unitIndex: 2,
        levelNumber: 4,
        uniqueKey: 'stats-u2-l4',
        topicNumber: 'Topic 2.8 & 2.9',
        name: 'Discrete Random Variables & Parameters',
        subtitle: 'Probability distributions, expected value, variance and standard deviation',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u2-l4-q1',
            stem: 'A raffle sells $1,000$ tickets at $\\$5$ each. There is one grand prize of $\\$1,000$, two second prizes of $\\$250$ each, and five third prizes of $\\$50$ each. All other tickets win nothing. What is the expected net gain (expected value) for a person purchasing one ticket?',
            options: [
              '$-\\$3.25$',
              '$+\\$1.75$',
              '$-\\$1.75$',
              '$-\\$5.00$'
            ],
            correctIndex: 0,
            explanation: 'Total prize payout $= 1(1000) + 2(250) + 5(50) = 1000 + 500 + 250 = \\$1,750$. Expected prize per ticket $= \\frac{\\$1750}{1000} = \\$1.75$. Expected net gain $= E(X) - \\text{Cost} = \\$1.75 - \\$5.00 = -\\$3.25$.',
            distractorTip: 'Net gain accounts for the ticket cost! A positive gross expected prize of $\\$1.75$ results in a net expected loss of $\\$3.25$.'
          },
          {
            id: 'stats-u2-l4-q2',
            stem: 'Random variable $X$ has mean $\\mu_X = 20$ and standard deviation $\\sigma_X = 4$. Random variable $Y$ has mean $\\mu_Y = 15$ and standard deviation $\\sigma_Y = 3$. If $X$ and $Y$ are independent, what are the mean and standard deviation of $W = 2X - 3Y$?',
            options: [
              '$\\mu_W = 5$; $\\sigma_W = 1$',
              '$\\mu_W = -5$; $\\sigma_W = \\sqrt{73}$',
              '$\\mu_W = -5$; $\\sigma_W = \\sqrt{145}$',
              '$\\mu_W = -5$; $\\sigma_W = 17$'
            ],
            correctIndex: 2,
            explanation: 'Mean: $\\mu_W = 2\\mu_X - 3\\mu_Y = 2(20) - 3(15) = 40 - 45 = -5$. Variances always ADD: $\\text{Var}(W) = 2^2 \\text{Var}(X) + (-3)^2 \\text{Var}(Y) = 4(4^2) + 9(3^2) = 4(16) + 9(9) = 64 + 81 = 145$. Thus, $\\sigma_W = \\sqrt{145} \\approx 12.04$.',
            distractorTip: 'Crucial AP Rule: Variances ALWAYS add, even when subtracting random variables! Never subtract standard deviations.'
          },
          {
            id: 'stats-u2-l4-q3',
            stem: 'Which of the following statements correctly interprets the expected value $\\mu_X = 2.4$ for the number of cars owned by households in a city?',
            options: [
              'The most likely number of cars owned by any randomly chosen household is 2.',
              'Over a very large number of randomly selected households, the average number of cars owned per household will approach 2.4.',
              'Exactly 24 out of every 10 households own a car.',
              'A majority of households in the city own more than 2 cars.'
            ],
            correctIndex: 1,
            explanation: 'The expected value is the theoretical long-run average outcome of a random variable over many repeated trials. It does not have to be an integer and does not represent the mode.',
            distractorTip: 'Expected value is a long-run average, not the most probable single outcome.'
          }
        ]
      },
      {
        id: 205,
        unitIndex: 2,
        levelNumber: 5,
        uniqueKey: 'stats-u2-l5',
        topicNumber: 'Topic 2.10',
        name: 'The Binomial Distribution',
        subtitle: 'BINS criteria, binomial probability formula, mean np, and standard deviation',
        difficulty: 'Hard',
        rewardCoins: 40,
        questions: [
          {
            id: 'stats-u2-l5-q1',
            stem: 'A basketball player makes free throws with an $80\\%$ success rate. Assuming shots are independent, what is the probability that she makes exactly $8$ out of $10$ free throws in a game?',
            options: [
              '$\\binom{10}{8} (0.80)^8 (0.20)^2 \\approx 0.3020$',
              '$(0.80)^8 (0.20)^2 \\approx 0.0067$',
              '$\\binom{10}{8} (0.80)^2 (0.20)^8 \\approx 0.0001$',
              '$0.80 \\times 10 = 8.00$'
            ],
            correctIndex: 0,
            explanation: 'Using the binomial probability formula $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$: with $n = 10$, $k = 8$, $p = 0.80$, we have $\\binom{10}{8} (0.80)^8 (0.20)^2 = 45 \\times 0.16777 \\times 0.04 \\approx 0.3020$.',
            distractorTip: 'Do not forget the combination coefficient $\\binom{n}{k}$; there are $45$ distinct sequences in which she could make $8$ shots out of $10$.'
          },
          {
            id: 'stats-u2-l5-q2',
            stem: 'A multiple-choice quiz contains $25$ independent questions, each with $4$ answer choices. A student randomly guesses on all questions. What are the mean and standard deviation of the number of correct guesses?',
            options: [
              '$\\mu = 6.25$; $\\sigma = 2.165$',
              '$\\mu = 6.25$; $\\sigma = 4.688$',
              '$\\mu = 5.00$; $\\sigma = 2.000$',
              '$\\mu = 10.00$; $\\sigma = 3.162$'
            ],
            correctIndex: 0,
            explanation: 'This is a binomial setting with $n = 25$ and $p = 0.25$. \\nMean: $\\mu = np = 25(0.25) = 6.25$. \\nStandard deviation: $\\sigma = \\sqrt{np(1-p)} = \\sqrt{25(0.25)(0.75)} = \\sqrt{4.6875} \\approx 2.165$.',
            distractorTip: 'Notice that $4.6875$ is the variance; remember to take the square root to find the standard deviation.'
          },
          {
            id: 'stats-u2-l5-q3',
            stem: 'Which of the following scenarios satisfies all four requirements of a binomial setting (BINS)?',
            options: [
              'Recording the number of cards drawn from a standard deck without replacement until an Ace appears.',
              'Selecting 10 marbles without replacement from a bag containing 15 red and 15 blue marbles.',
              'Administering a survey to 50 randomly selected voters from a city of 100,000 to record whether they support Proposition A (Yes/No).',
              'Recording the temperature at noon every day for 30 consecutive days.'
            ],
            correctIndex: 2,
            explanation: 'BINS criteria: Binary outcomes (Yes/No), Independent trials (sample $n = 50 < 10\\%$ of $100,000$), Number of trials fixed ($n = 50$), Same probability of success on each trial ($p$). Options A and B violate independence / fixed trials.',
            distractorTip: 'Sampling without replacement can be treated as binomial as long as the 10% condition ($n \\le 10\\% N$) is satisfied.'
          }
        ]
      },
      {
        id: 206,
        unitIndex: 2,
        levelNumber: 6,
        uniqueKey: 'stats-u2-l6',
        topicNumber: 'Topic 2.11 & 2.12',
        name: 'Normal Distributions & Central Limit Theorem (BOSS)',
        subtitle: 'Empirical rule, z-tables, sampling distributions of means, and CLT',
        difficulty: 'Boss',
        rewardCoins: 50,
        questions: [
          {
            id: 'stats-u2-l6-q1',
            stem: 'The weights of apples in an orchard follow a normal distribution with mean $\\mu = 180$ grams and standard deviation $\\sigma = 20$ grams. A grocery chain only purchases apples with weights in the top $10\\%$ of the harvest. What is the minimum weight an apple must have to qualify for purchase?',
            options: [
              '$196.4$ grams',
              '$205.6$ grams',
              '$212.8$ grams',
              '$154.4$ grams'
            ],
            correctIndex: 1,
            explanation: 'The top $10\\%$ corresponds to a cumulative probability of $0.90$. From the standard normal table, the $z$-score for the 90th percentile is $z \\approx 1.282$. \\nUsing $x = \\mu + z\\sigma = 180 + (1.282)(20) = 180 + 25.64 = 205.64$ grams.',
            distractorTip: 'For the top $10\\%$, find the area to the left ($0.90$), giving a positive $z$-score ($+1.28$). A negative $z$ gives the bottom $10\\%$.'
          },
          {
            id: 'stats-u2-l6-q2',
            stem: 'A heavily right-skewed distribution of repair costs for electric scooters has a mean of $\\mu = \\$250$ and standard deviation of $\\sigma = \\$120$. A rental company selects a random sample of $n = 64$ independent repair bills. Which of the following best describes the sampling distribution of the sample mean repair cost $\\bar{x}$?',
            options: [
              'Heavily right-skewed with mean $\\$250$ and standard deviation $\\$120$.',
              'Approximately normal with mean $\\$250$ and standard deviation $\\$15$.',
              'Approximately normal with mean $\\$250$ and standard deviation $\\$1.875$.',
              'Uniform with mean $\\$250$ and standard deviation $\\$15$.'
            ],
            correctIndex: 1,
            explanation: 'By the Central Limit Theorem (CLT), because the sample size $n = 64 \\ge 30$, the sampling distribution of the sample mean $\\bar{x}$ is approximately normal regardless of population skewness. \\nMean: $\\mu_{\\bar{x}} = \\mu = 250$. \\nStandard deviation: $\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{120}{\\sqrt{64}} = \\frac{120}{8} = 15$.',
            distractorTip: 'The Central Limit Theorem describes the shape of the SAMPLING DISTRIBUTION of sample means, NOT the individual observations in the population or sample!'
          },
          {
            id: 'stats-u2-l6-q3',
            stem: 'Under which of the following conditions does the Central Limit Theorem (CLT) apply to a sampling distribution?',
            options: [
              'Only when the underlying population distribution is already known to be perfectly normal.',
              'When the sample size $n$ is sufficiently large ($n \\ge 30$), guaranteeing that the sampling distribution of the sample mean $\\bar{x}$ is approximately normal.',
              'Whenever the sample proportion satisfies $np \\ge 10$ and $n(1-p) \\ge 10$.',
              'Whenever data are collected using stratified random sampling.'
            ],
            correctIndex: 1,
            explanation: 'The Central Limit Theorem specifically states that for large sample sizes (conventionally $n \\ge 30$), the sampling distribution of $\\bar{x}$ approaches a normal distribution, regardless of the shape of the underlying population.',
            distractorTip: 'Do not confuse the CLT (which applies to MEANS $\\bar{x}$) with the Large Counts condition (which applies to PROPORTIONS $\\hat{p}$).'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 3: INFERENCE FOR CATEGORICAL DATA: PROPORTIONS (15–25%)
  // =========================================================================
  {
    unitIndex: 3,
    unitId: 'u3',
    title: 'Unit 3: Inference for Categorical Data: Proportions',
    shortTitle: 'Unit 3: Proportions & Chi-Square',
    description: 'Sampling distributions of p-hat, one-sample & two-sample z-intervals and tests, Type I/II errors, power, and Chi-Square tests of homogeneity & independence',
    examWeight: '15–25% of AP Exam',
    biome: {
      name: 'Proportion Citadel & Chi-Square Spire',
      icon: '⚖️',
      accentColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      groundGradient: 'from-purple-100 via-violet-50 to-fuchsia-100',
      cardBorder: 'border-purple-500',
      trailColor: '#8b5cf6',
      nodeRing: 'ring-purple-400/40',
      skyTint: 'from-purple-50 to-violet-50/30'
    },
    levels: [
      {
        id: 301,
        unitIndex: 3,
        levelNumber: 1,
        uniqueKey: 'stats-u3-l1',
        topicNumber: 'Topic 3.1 & 3.2',
        name: 'Sampling Distributions for Proportions',
        subtitle: 'Unbiased estimators, standard error, 10% condition, and Large Counts check',
        difficulty: 'Easy',
        rewardCoins: 30,
        questions: [
          {
            id: 'stats-u3-l1-q1',
            stem: 'A pollster samples $n = 400$ registered voters from a city of $250,000$ where the true proportion supporting a tax referendum is $p = 0.65$. What are the mean and standard deviation of the sampling distribution of the sample proportion $\\hat{p}$?',
            options: [
              '$\\mu_{\\hat{p}} = 0.65$; $\\sigma_{\\hat{p}} = \\sqrt{\\frac{(0.65)(0.35)}{400}} \\approx 0.0238$',
              '$\\mu_{\\hat{p}} = 260$; $\\sigma_{\\hat{p}} = \\sqrt{400(0.65)(0.35)} \\approx 9.54$',
              '$\\mu_{\\hat{p}} = 0.65$; $\\sigma_{\\hat{p}} = \\frac{0.65}{\\sqrt{400}} = 0.0325$',
              '$\\mu_{\\hat{p}} = 0.50$; $\\sigma_{\\hat{p}} = \\sqrt{\\frac{(0.50)(0.50)}{400}} = 0.0250$'
            ],
            correctIndex: 0,
            explanation: 'The sample proportion $\\hat{p}$ is an unbiased estimator with mean $\\mu_{\\hat{p}} = p = 0.65$. Because $n = 400 \\le 10\\%(250,000)$, the 10% condition holds, so $\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}} = \\sqrt{\\frac{(0.65)(0.35)}{400}} \\approx 0.0238$.',
            distractorTip: 'Option B gives the mean and standard deviation for the COUNT of successes, not the sample PROPORTION.'
          },
          {
            id: 'stats-u3-l1-q2',
            stem: 'Which condition must be verified to ensure that the sampling distribution of a sample proportion $\\hat{p}$ is approximately normal?',
            options: [
              'The sample size must satisfy $n \\ge 30$.',
              'The Large Counts condition: $np \\ge 10$ and $n(1-p) \\ge 10$.',
              'The population size must be at least 10 times the sample size.',
              'The data must be collected using a double-blind experiment.'
            ],
            correctIndex: 1,
            explanation: 'The sampling distribution of $\\hat{p}$ is approximately normal when both expected successes ($np$) and expected failures ($n(1-p)$) are at least $10$.',
            distractorTip: '$n \\ge 30$ is the Central Limit Theorem condition for MEANS ($\\bar{x}$), not proportions!'
          },
          {
            id: 'stats-u3-l1-q3',
            stem: 'Why is the 10% condition ($n \\le 0.10 N$) checked when sampling without replacement from a finite population?',
            options: [
              'To ensure that the sample size is large enough to achieve normality.',
              'To ensure that trials are virtually independent so the standard deviation formula $\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}$ remains accurate.',
              'To eliminate all potential sources of response bias in the survey.',
              'To guarantee that the sample proportion $\\hat{p}$ equals the population parameter $p$.'
            ],
            correctIndex: 1,
            explanation: 'When sampling without replacement, trials are strictly dependent. However, if the sample is less than $10\\%$ of the population, the dependence is negligible, making the standard deviation formula valid.',
            distractorTip: 'The 10% condition checks INDEPENDENCE; the Large Counts condition checks NORMALITY.'
          }
        ]
      },
      {
        id: 302,
        unitIndex: 3,
        levelNumber: 2,
        uniqueKey: 'stats-u3-l2',
        topicNumber: 'Topic 3.3 & 3.4',
        name: 'One-Sample z-Interval for Proportions',
        subtitle: 'Confidence interval construction, margin of error, and confidence level interpretation',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u3-l2-q1',
            stem: 'A random sample of $500$ consumers finds that $320$ prefer eco-friendly packaging. What is the $95\\%$ confidence interval for the true proportion of all consumers who prefer eco-friendly packaging? (Use $z^* = 1.960$)',
            options: [
              '$0.64 \\pm 1.960 \\sqrt{\\frac{(0.64)(0.36)}{500}} \\approx (0.598, 0.682)$',
              '$0.64 \\pm 1.645 \\sqrt{\\frac{(0.64)(0.36)}{500}} \\approx (0.605, 0.675)$',
              '$0.64 \\pm 1.960 \\sqrt{\\frac{(0.50)(0.50)}{500}} \\approx (0.596, 0.684)$',
              '$320 \\pm 1.960 \\sqrt{500(0.64)(0.36)} \\approx (299, 341)$'
            ],
            correctIndex: 0,
            explanation: 'Sample proportion $\\hat{p} = \\frac{320}{500} = 0.64$. Standard error $SE = \\sqrt{\\frac{(0.64)(0.36)}{500}} \\approx 0.02146$. Margin of error $ME = 1.960 \\times 0.02146 \\approx 0.042$. Interval $= 0.64 \\pm 0.042 = (0.598, 0.682)$.',
            distractorTip: 'For confidence intervals, always use the sample proportion $\\hat{p}$ to calculate standard error, not $0.50$.'
          },
          {
            id: 'stats-u3-l2-q2',
            stem: 'Which of the following is the correct interpretation of a $95\\%$ confidence level?',
            options: [
              'There is a 95% probability that the true population proportion lies within the calculated interval.',
              'If we were to repeat the sampling process many times and calculate a 95% confidence interval from each sample, approximately 95% of the resulting intervals would capture the true population proportion.',
              'Approximately 95% of the observations in the sample fall within the calculated confidence interval.',
              '95% of all potential samples will produce the exact same sample proportion.'
            ],
            correctIndex: 1,
            explanation: 'The confidence LEVEL refers to the long-run success rate of the estimation method under repeated sampling. It does not state that a specific calculated interval has a $95\\%$ probability of containing the parameter (the parameter is a fixed constant, so it is either in the interval or not).',
            distractorTip: 'Avoid saying "there is a 95% chance the parameter is in this interval." State that "95% of intervals created by this method capture the parameter."'
          },
          {
            id: 'stats-u3-l2-q3',
            stem: 'A campaign manager wants to estimate public approval of a mayor within a margin of error of $\\pm 0.03$ with $95\\%$ confidence ($z^* = 1.96$). With no prior estimate of $\\hat{p}$ available, what is the minimum sample size required?',
            options: [
              '$752$',
              '$1,068$',
              '$1,067.11 \\to 1,068$',
              '$1,067.11 \\to 1,068$'
            ],
            correctIndex: 2,
            explanation: 'When no preliminary estimate of $\\hat{p}$ exists, use $\\hat{p} = 0.5$ (the most conservative value that maximizes sample size). \\n$n = \\frac{(z^*)^2 \\hat{p}(1-\\hat{p})}{(ME)^2} = \\frac{(1.96)^2 (0.5)(0.5)}{(0.03)^2} = \\frac{3.8416 \\times 0.25}{0.0009} = \\frac{0.9604}{0.0009} \\approx 1067.11$. Always round UP to the nearest integer: $n = 1,068$.',
            distractorTip: 'Sample sizes must ALWAYS be rounded up to the next whole number to guarantee the margin of error target is met.'
          }
        ]
      },
      {
        id: 303,
        unitIndex: 3,
        levelNumber: 3,
        uniqueKey: 'stats-u3-l3',
        topicNumber: 'Topic 3.5–3.7',
        name: 'One-Sample z-Test for Proportions',
        subtitle: 'Hypotheses setup, z-statistic, p-value calculations, and contextual conclusions',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u3-l3-q1',
            stem: 'A school principal claims that more than $60\\%$ of students eat breakfast daily. In a random sample of $200$ students, $136$ ($68\\%$) report eating breakfast. What are the appropriate null and alternative hypotheses to test the principal\'s claim?',
            options: [
              '$H_0: p = 0.60$ versus $H_a: p > 0.60$',
              '$H_0: \\hat{p} = 0.68$ versus $H_a: \\hat{p} > 0.68$',
              '$H_0: p = 0.68$ versus $H_a: p > 0.60$',
              '$H_0: p = 0.60$ versus $H_a: p \\neq 0.60$'
            ],
            correctIndex: 0,
            explanation: 'Hypotheses must always be written in terms of the population parameter $p$, never sample statistics $\\hat{p}$. The null hypothesis represents the status quo ($p = 0.60$), and the alternative represents the directional claim ($p > 0.60$).',
            distractorTip: 'Never put hats on hypotheses! $H_0$ and $H_a$ are always statements about population parameters ($p$), never sample statistics ($\\hat{p}$).'
          },
          {
            id: 'stats-u3-l3-q2',
            stem: 'For testing $H_0: p = 0.50$ versus $H_a: p > 0.50$ with a sample of $n = 100$ and $\\hat{p} = 0.60$, what is the test statistic $z$ and resulting $p$-value?',
            options: [
              '$z = \\frac{0.60 - 0.50}{\\sqrt{\\frac{(0.50)(0.50)}{100}}} = 2.00$; $p\\text{-value} = 0.0228$',
              '$z = \\frac{0.60 - 0.50}{\\sqrt{\\frac{(0.60)(0.40)}{100}}} = 2.04$; $p\\text{-value} = 0.0207$',
              '$z = 1.645$; $p\\text{-value} = 0.0500$',
              '$z = 2.00$; $p\\text{-value} = 0.0456$'
            ],
            correctIndex: 0,
            explanation: 'In hypothesis testing, we assume $H_0$ is true, so the standard error in the denominator uses the null value $p_0 = 0.50$: \\n$z = \\frac{0.60 - 0.50}{\\sqrt{\\frac{(0.50)(0.50)}{100}}} = \\frac{0.10}{0.05} = 2.00$. \\nFrom normal tables, $P(Z \\ge 2.00) = 1 - 0.9772 = 0.0228$.',
            distractorTip: 'In hypothesis tests for proportions, always use the hypothesized null proportion $p_0$ in the standard deviation formula!'
          },
          {
            id: 'stats-u3-l3-q3',
            stem: 'A hypothesis test for a proportion yields a $p$-value of $0.028$. At a significance level of $\\alpha = 0.05$, which of the following is the most appropriate conclusion in context?',
            options: [
              'Because $p = 0.028 < 0.05$, we reject $H_0$. There is convincing statistical evidence that the true proportion exceeds the null value.',
              'Because $p = 0.028 < 0.05$, we accept $H_a$. We have proven that the alternative hypothesis is true.',
              'Because $p = 0.028 < 0.05$, we fail to reject $H_0$. The evidence is inconclusive.',
              'Because $p = 0.028 < 0.05$, we accept $H_0$. The null hypothesis has been verified.'
            ],
            correctIndex: 0,
            explanation: 'When $p$-value $\\le \\alpha$, the decision is to reject $H_0$. The conclusion must state that there is "convincing statistical evidence" for $H_a$. In statistics, we NEVER say we "accept" or "prove" any hypothesis.',
            distractorTip: 'Never write "prove" or "accept" in an AP conclusion. Always use non-definitive language: "reject $H_0$" and "convincing evidence for $H_a$."'
          }
        ]
      },
      {
        id: 304,
        unitIndex: 3,
        levelNumber: 4,
        uniqueKey: 'stats-u3-l4',
        topicNumber: 'Topic 3.8',
        name: 'Type I Errors, Type II Errors & Power',
        subtitle: 'Error definitions, trade-offs, and factors affecting power (sample size, effect size, alpha)',
        difficulty: 'Hard',
        rewardCoins: 40,
        questions: [
          {
            id: 'stats-u3-l4-q1',
            stem: 'A pharmaceutical company tests a new pain relief medication against a placebo. $H_0$: The medication is not effective. $H_a$: The medication is effective. In this context, which of the following describes a Type I error?',
            options: [
              'Concluding the medication is effective when it actually is not effective.',
              'Concluding the medication is not effective when it actually is effective.',
              'Failing to reject the null hypothesis when the medication has dangerous side effects.',
              'Increasing the sample size to reduce the power of the test.'
            ],
            correctIndex: 0,
            explanation: 'A Type I error occurs when the researcher rejects a true null hypothesis (false positive). In this context, concluding the medication works ($H_a$) when it is actually ineffective ($H_0$ is true) is a Type I error.',
            distractorTip: 'Type I = False Positive (reject true $H_0$). Type II = False Negative (fail to reject false $H_0$).'
          },
          {
            id: 'stats-u3-l4-q2',
            stem: 'Which of the following actions will increase the power of a hypothesis test without changing the true parameter value?',
            options: [
              'Decreasing the sample size $n$.',
              'Decreasing the significance level $\\alpha$ from $0.05$ to $0.01$.',
              'Increasing the sample size $n$.',
              'Increasing the population standard deviation.'
            ],
            correctIndex: 2,
            explanation: 'Power ($1 - \\beta$) is the probability of correctly rejecting a false null hypothesis. Increasing sample size $n$ decreases standard error, narrowing the sampling distributions and increasing power.',
            distractorTip: 'To increase power: (1) Increase sample size $n$, (2) Increase significance level $\\alpha$, (3) Increase effect size, or (4) Reduce variability.'
          },
          {
            id: 'stats-u3-l4-q3',
            stem: 'If a researcher lowers the significance level $\\alpha$ from $0.05$ to $0.01$, how will the probabilities of Type I error ($\\alpha$) and Type II error ($\\beta$) be affected?',
            options: [
              'Type I error probability decreases; Type II error probability increases.',
              'Type I error probability decreases; Type II error probability decreases.',
              'Type I error probability increases; Type II error probability decreases.',
              'Both error probabilities remain completely unchanged.'
            ],
            correctIndex: 0,
            explanation: 'By definition, $P(\\text{Type I error}) = \\alpha$. Lowering $\\alpha$ makes it harder to reject $H_0$, thereby decreasing Type I error risk but increasing the risk of failing to reject a false null hypothesis (Type II error $\\beta$).',
            distractorTip: 'There is an inherent inverse trade-off between $\\alpha$ and $\\beta$; you cannot decrease both without increasing the sample size.'
          }
        ]
      },
      {
        id: 305,
        unitIndex: 3,
        levelNumber: 5,
        uniqueKey: 'stats-u3-l5',
        topicNumber: 'Topic 3.9–3.13',
        name: 'Two-Sample z-Inference for Difference in Proportions',
        subtitle: 'Confidence intervals and hypothesis testing with pooled proportions',
        difficulty: 'Hard',
        rewardCoins: 40,
        questions: [
          {
            id: 'stats-u3-l5-q1',
            stem: 'A 95% confidence interval for the difference in two population proportions $p_1 - p_2$ (Online shoppers vs. In-store shoppers who use coupons) is calculated to be $(-0.08, -0.01)$. What does this interval suggest?',
            options: [
              'Because the interval contains negative numbers, there is no statistically significant difference between the two groups.',
              'Because the interval does not contain 0 and is entirely negative, there is convincing evidence that the proportion of in-store shoppers using coupons ($p_2$) is greater than the proportion of online shoppers ($p_1$).',
              'Approximately 95% of all shoppers in both groups use coupons between 1% and 8% of the time.',
              'Online shoppers use coupons significantly more often than in-store shoppers.'
            ],
            correctIndex: 1,
            explanation: 'Because the entire confidence interval $(-0.08, -0.01)$ lies below zero, $0$ is not a plausible value for $p_1 - p_2$. This provides convincing statistical evidence that $p_1 < p_2$, meaning in-store shoppers have a higher coupon usage rate.',
            distractorTip: 'If a difference interval $(p_1 - p_2)$ is entirely negative, Group 2 is significantly larger than Group 1.'
          },
          {
            id: 'stats-u3-l5-q2',
            stem: 'When conducting a two-sample $z$-test for $H_0: p_1 - p_2 = 0$, why is a pooled (combined) sample proportion $\\hat{p}_c = \\frac{x_1 + x_2}{n_1 + n_2}$ used in the standard error formula?',
            options: [
              'Because the two samples must have identical sample sizes ($n_1 = n_2$).',
              'Because under the null hypothesis, both populations are assumed to have the same common proportion $p_1 = p_2 = p$.',
              'Because the data were collected from a randomized block experiment.',
              'To force the resulting test statistic $z$ to be positive.'
            ],
            correctIndex: 1,
            explanation: 'In hypothesis testing, we assume the null hypothesis is true. Since $H_0$ states $p_1 = p_2$, we pool the successes and sample sizes from both groups to get the best single estimate $\\hat{p}_c$ of this common proportion.',
            distractorTip: 'Only pool for two-sample proportion HYPOTHESIS TESTS. Never pool when constructing two-sample proportion CONFIDENCE INTERVALS.'
          },
          {
            id: 'stats-u3-l5-q3',
            stem: 'In a medical study, $40$ out of $100$ patients in Group 1 recovered, while $60$ out of $150$ patients in Group 2 recovered. What is the pooled sample proportion $\\hat{p}_c$?',
            options: [
              '$\\hat{p}_c = \\frac{40 + 60}{100 + 150} = \\frac{100}{250} = 0.40$',
              '$\\hat{p}_c = \\frac{0.40 + 0.40}{2} = 0.40$',
              '$\\hat{p}_c = \\frac{100}{250} = 0.50$',
              'Both A and B are correct representations of the pooled proportion.'
            ],
            correctIndex: 3,
            explanation: '$\\hat{p}_c = \\frac{x_1 + x_2}{n_1 + n_2} = \\frac{40 + 60}{100 + 150} = \\frac{100}{250} = 0.40$. Because both sample proportions happened to be $0.40$, the unweighted average also equals $0.40$.',
            distractorTip: 'Always use $\\frac{x_1 + x_2}{n_1 + n_2}$ rather than averaging proportions, especially when sample sizes $n_1 \\neq n_2$.'
          }
        ]
      },
      {
        id: 306,
        unitIndex: 3,
        levelNumber: 6,
        uniqueKey: 'stats-u3-l6',
        topicNumber: 'Topic 3.14 & 3.15',
        name: 'Chi-Square Tests of Independence & Homogeneity (BOSS)',
        subtitle: 'Contingency tables, expected counts, degrees of freedom, and chi-square statistics',
        difficulty: 'Boss',
        rewardCoins: 50,
        questions: [
          {
            id: 'stats-u3-l6-q1',
            stem: 'A two-way contingency table has $3$ rows (Job Satisfaction Levels) and $4$ columns (Department Types). What are the degrees of freedom for a Chi-Square test of independence?',
            options: [
              '$12$',
              '$7$',
              '$6$',
              '$11$'
            ],
            correctIndex: 2,
            explanation: 'Degrees of freedom for a two-way Chi-Square test is $df = (r - 1)(c - 1)$. With $r = 3$ and $c = 4$: $df = (3 - 1)(4 - 1) = 2 \\times 3 = 6$.',
            distractorTip: 'Do not multiply $r \\times c$! Degrees of freedom is $(r - 1)(c - 1)$.'
          },
          {
            id: 'stats-u3-l6-q2',
            stem: 'In a $2 \\times 2$ table of customer loyalty and store region, the row total for "Loyal" is $120$, the column total for "North Region" is $150$, and the grand total of customers surveyed is $400$. Under the null hypothesis of independence, what is the expected count for the (Loyal, North) cell?',
            options: [
              '$\\frac{120 \\times 150}{400} = 45$',
              '$\\frac{120 + 150}{2} = 135$',
              '$\\frac{400}{4} = 100$',
              '$\\frac{120}{400} \\times 150 = 35$'
            ],
            correctIndex: 0,
            explanation: 'The expected count under independence is $\\text{Expected Count} = \\frac{(\\text{Row Total})(\\text{Column Total})}{\\text{Table Total}} = \\frac{120 \\times 150}{400} = \\frac{18,000}{400} = 45$.',
            distractorTip: 'Formula to memorize: $\\text{Expected} = \\frac{\\text{Row} \\times \\text{Col}}{\\text{Total}}$. Also verify that all expected counts are $\\ge 5$.'
          },
          {
            id: 'stats-u3-l6-q3',
            stem: 'What is the fundamental difference between a Chi-Square test for Homogeneity and a Chi-Square test for Independence?',
            options: [
              'Test of Homogeneity uses continuous variables; Test of Independence uses categorical variables.',
              'Test of Homogeneity compares a single categorical variable across multiple independent populations/samples; Test of Independence assesses association between two categorical variables within a single random sample.',
              'Test of Homogeneity requires degrees of freedom equal to $n - 1$; Test of Independence uses $(r-1)(c-1)$.',
              'Test of Homogeneity uses two-tailed rejection regions; Test of Independence is always one-tailed.'
            ],
            correctIndex: 1,
            explanation: 'Homogeneity involves $2+$ independent samples or treatments compared on one categorical response variable. Independence involves 1 sample evaluated for a relationship between two categorical variables. The mathematical calculation is identical, but study design and hypotheses differ.',
            distractorTip: 'Study design determines the test: 1 sample with 2 variables = Independence; 2+ samples with 1 variable = Homogeneity.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 4: INFERENCE FOR QUANTITATIVE DATA: MEANS (10–20%)
  // =========================================================================
  {
    unitIndex: 4,
    unitId: 'u4',
    title: 'Unit 4: Inference for Quantitative Data: Means',
    shortTitle: 'Unit 4: Inference for Means',
    description: 'Sampling distributions of x-bar, Student’s t-distributions, one-sample & two-sample t-intervals and t-tests, and matched pairs inference',
    examWeight: '10–20% of AP Exam',
    biome: {
      name: 'Valley of Means & Student\'s t-Peak',
      icon: '📈',
      accentColor: '#F59E0B',
      secondaryColor: '#D97706',
      groundGradient: 'from-amber-100 via-yellow-50 to-orange-100',
      cardBorder: 'border-amber-500',
      trailColor: '#f59e0b',
      nodeRing: 'ring-amber-400/40',
      skyTint: 'from-amber-50 to-yellow-50/30'
    },
    levels: [
      {
        id: 401,
        unitIndex: 4,
        levelNumber: 1,
        uniqueKey: 'stats-u4-l1',
        topicNumber: 'Topic 4.1',
        name: 'Sampling Distribution of the Sample Mean',
        subtitle: 'Mean, standard error, Central Limit Theorem, and normality conditions',
        difficulty: 'Easy',
        rewardCoins: 30,
        questions: [
          {
            id: 'stats-u4-l1-q1',
            stem: 'A population of adult wolves has a mean weight of $\\mu = 40$ kg and standard deviation of $\\sigma = 8$ kg. If random samples of size $n = 16$ are repeatedly collected from this normal population, what are the mean $\\mu_{\\bar{x}}$ and standard deviation $\\sigma_{\\bar{x}}$ of the sampling distribution of sample means?',
            options: [
              '$\\mu_{\\bar{x}} = 40$ kg; $\\sigma_{\\bar{x}} = \\frac{8}{\\sqrt{16}} = 2$ kg',
              '$\\mu_{\\bar{x}} = 40$ kg; $\\sigma_{\\bar{x}} = 8$ kg',
              '$\\mu_{\\bar{x}} = 10$ kg; $\\sigma_{\\bar{x}} = 2$ kg',
              '$\\mu_{\\bar{x}} = 40$ kg; $\\sigma_{\\bar{x}} = \\frac{8}{16} = 0.5$ kg'
            ],
            correctIndex: 0,
            explanation: 'The sample mean $\\bar{x}$ is an unbiased estimator: $\\mu_{\\bar{x}} = \\mu = 40$ kg. The standard deviation of the sampling distribution is $\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{8}{\\sqrt{16}} = \\frac{8}{4} = 2$ kg.',
            distractorTip: 'Always divide the population standard deviation by $\\sqrt{n}$, not $n$.'
          },
          {
            id: 'stats-u4-l1-q2',
            stem: 'How does the shape of a Student\'s $t$-distribution compare to the standard normal ($z$) distribution?',
            options: [
              'The $t$-distribution is skewed to the right with a higher peak than the normal curve.',
              'The $t$-distribution is symmetric and bell-shaped, but has fatter tails and a lower peak than the standard normal curve.',
              'The $t$-distribution is uniform between $-3$ and $+3$.',
              'The $t$-distribution is identical to the normal distribution regardless of degrees of freedom.'
            ],
            correctIndex: 1,
            explanation: 'Student\'s $t$-distribution is bell-shaped and symmetric about $0$, but has heavier (fatter) tails than the normal curve because estimating $\\sigma$ with sample standard deviation $s$ introduces extra variability. As $df \\to \\infty$, the $t$-distribution approaches the standard normal curve.',
            distractorTip: 'Fatter tails mean more area is located in the extremes, requiring larger critical values $t^*$ than $z^*$.'
          },
          {
            id: 'stats-u4-l1-q3',
            stem: 'When constructing a confidence interval for a population mean $\\mu$, which of the following is the primary reason for using a $t$-distribution instead of a $z$-distribution?',
            options: [
              'The sample size is less than 30.',
              'The population standard deviation $\\sigma$ is unknown, so the sample standard deviation $s$ must be used.',
              'The population distribution is skewed.',
              'The data were collected from two dependent samples.'
            ],
            correctIndex: 1,
            explanation: 'In practice, the true population standard deviation $\\sigma$ is almost never known. Substituting sample standard deviation $s$ creates extra uncertainty modeled by the $t$-distribution with $df = n - 1$.',
            distractorTip: 'Even if $n = 500$, if $\\sigma$ is unknown, the theoretically correct procedure is a $t$-interval.'
          }
        ]
      },
      {
        id: 402,
        unitIndex: 4,
        levelNumber: 2,
        uniqueKey: 'stats-u4-l2',
        topicNumber: 'Topic 4.2 & 4.3',
        name: 'One-Sample t-Interval for a Mean',
        subtitle: 'Construction, critical value t*, margin of error, and condition verification',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u4-l2-q1',
            stem: 'A random sample of $n = 25$ coffee cups dispensed by a machine has a sample mean volume of $\\bar{x} = 8.2$ oz and sample standard deviation of $s = 0.3$ oz. A boxplot of the sample shows no extreme outliers or skewness. What is the $95\\%$ confidence interval for the true mean volume? (For $df = 24$, $t^* = 2.064$)',
            options: [
              '$8.2 \\pm 2.064 \\left(\\frac{0.3}{\\sqrt{25}}\\right) = 8.2 \\pm 0.124 \\approx (8.076, 8.324)$',
              '$8.2 \\pm 1.960 \\left(\\frac{0.3}{\\sqrt{25}}\\right) = 8.2 \\pm 0.118 \\approx (8.082, 8.318)$',
              '$8.2 \\pm 2.064 \\left(\\frac{0.3}{25}\\right) = 8.2 \\pm 0.025 \\approx (8.175, 8.225)$',
              '$8.2 \\pm 2.060 (0.3) \\approx (7.58, 8.82)$'
            ],
            correctIndex: 0,
            explanation: 'Standard error $SE = \\frac{s}{\\sqrt{n}} = \\frac{0.3}{5} = 0.06$. Margin of error $ME = t^* \\times SE = 2.064 \\times 0.06 = 0.12384$. Interval $= 8.2 \\pm 0.124 = (8.076, 8.324)$.',
            distractorTip: 'Do not use $z^* = 1.96$ when $\\sigma$ is unknown. With $n = 25$, $df = 24$, so $t^* = 2.064$.'
          },
          {
            id: 'stats-u4-l2-q2',
            stem: 'Which condition is NOT required for a one-sample $t$-interval for a population mean?',
            options: [
              'Random sample or randomized experiment',
              'The sample size must be at least 10 times the population size ($n \\ge 10N$)',
              '10% condition when sampling without replacement ($n \\le 10\\% N$)',
              'Nearly normal condition: Population is normal, or $n \\ge 30$, or sample data has no strong skewness/outliers'
            ],
            correctIndex: 1,
            explanation: 'The 10% condition requires that the sample size be LESS than or equal to $10\\%$ of the population ($n \\le 0.10N$), NOT greater than.',
            distractorTip: 'Watch out for reversed inequalities in condition statements.'
          },
          {
            id: 'stats-u4-l2-q3',
            stem: 'A study reports a $90\\%$ confidence interval for mean commute time as $(22.4, 28.6)$ minutes. What are the point estimate $\\bar{x}$ and the margin of error of this interval?',
            options: [
              'Point estimate: $25.5$ minutes; Margin of error: $3.1$ minutes',
              'Point estimate: $25.0$ minutes; Margin of error: $6.2$ minutes',
              'Point estimate: $22.4$ minutes; Margin of error: $28.6$ minutes',
              'Point estimate: $25.5$ minutes; Margin of error: $6.2$ minutes'
            ],
            correctIndex: 0,
            explanation: 'Point estimate $\\bar{x} = \\frac{\\text{Lower} + \\text{Upper}}{2} = \\frac{22.4 + 28.6}{2} = 25.5$. Margin of error $= \\frac{\\text{Upper} - \\text{Lower}}{2} = \\frac{28.6 - 22.4}{2} = \\frac{6.2}{2} = 3.1$ minutes.',
            distractorTip: 'The width of the interval is twice the margin of error ($2 \\times ME = 6.2$, so $ME = 3.1$).'
          }
        ]
      },
      {
        id: 403,
        unitIndex: 4,
        levelNumber: 3,
        uniqueKey: 'stats-u4-l3',
        topicNumber: 'Topic 4.4 & 4.5',
        name: 'One-Sample t-Test for a Mean',
        subtitle: 'Null/Alternative hypotheses, t-statistic, p-value, and formal decisions',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u4-l3-q1',
            stem: 'An automotive engineer tests whether a new fuel additive increases average highway mileage beyond $30.0$ mpg. A random sample of $16$ cars achieves a mean of $\\bar{x} = 31.8$ mpg with standard deviation $s = 2.4$ mpg. What is the calculated test statistic $t$?',
            options: [
              '$t = \\frac{31.8 - 30.0}{\\frac{2.4}{\\sqrt{16}}} = \\frac{1.8}{0.6} = 3.00$',
              '$t = \\frac{31.8 - 30.0}{2.4} = 0.75$',
              '$t = \\frac{30.0 - 31.8}{\\frac{2.4}{16}} = -12.00$',
              '$t = \\frac{31.8 - 30.0}{\\frac{2.4}{4}} = 1.80$'
            ],
            correctIndex: 0,
            explanation: 'Test statistic $t = \\frac{\\bar{x} - \\mu_0}{\\frac{s}{\\sqrt{n}}} = \\frac{31.8 - 30.0}{\\frac{2.4}{\\sqrt{16}}} = \\frac{1.8}{0.6} = 3.00$ with $df = 16 - 1 = 15$.',
            distractorTip: 'Standard error in the denominator is $s / \\sqrt{n}$. For $n = 16$, $\\sqrt{16} = 4$, so $2.4 / 4 = 0.6$.'
          },
          {
            id: 'stats-u4-l3-q2',
            stem: 'A hypothesis test for $H_0: \\mu = 50$ versus $H_a: \\mu \\neq 50$ with $df = 19$ yields a test statistic of $t = -2.54$. If $P(t \\le -2.54) = 0.01$, what is the $p$-value of this two-sided test?',
            options: [
              '$0.01$',
              '$0.02$',
              '$0.99$',
              '$0.05$'
            ],
            correctIndex: 1,
            explanation: 'For a two-sided test ($H_a: \\mu \\neq \\mu_0$), the $p$-value is the probability of observing a test statistic as extreme or more extreme in EITHER tail: $p\\text{-value} = 2 \\times P(t \\le -2.54) = 2 \\times 0.01 = 0.02$.',
            distractorTip: 'Always double the tail area for two-sided alternative hypotheses ($H_a: \\mu \\neq \\mu_0$).'
          },
          {
            id: 'stats-u4-l3-q3',
            stem: 'In a one-sample $t$-test with $\\alpha = 0.05$, the resulting $p$-value is $0.082$. Which of the following is the correct conclusion?',
            options: [
              'Fail to reject $H_0$. There is not convincing statistical evidence that the true mean differs from the hypothesized value.',
              'Reject $H_0$. There is convincing statistical evidence supporting the alternative hypothesis.',
              'Accept $H_0$. The sample data prove that the true population mean equals the hypothesized value.',
              'Fail to reject $H_0$. The experiment was flawed and must be re-run.'
            ],
            correctIndex: 0,
            explanation: 'Because $p\\text{-value} = 0.082 > \\alpha = 0.05$, we fail to reject $H_0$. We conclude that the data do NOT provide convincing statistical evidence for $H_a$.',
            distractorTip: 'Failing to reject $H_0$ means there is insufficient evidence to convict; it does NOT prove $H_0$ is true.'
          }
        ]
      },
      {
        id: 404,
        unitIndex: 4,
        levelNumber: 4,
        uniqueKey: 'stats-u4-l4',
        topicNumber: 'Topic 4.2 & 4.4 (Matched Pairs)',
        name: 'Matched Pairs t-Procedures',
        subtitle: 'Dependent samples, pre/post designs, and inference for mean difference',
        difficulty: 'Hard',
        rewardCoins: 40,
        questions: [
          {
            id: 'stats-u4-l4-q1',
            stem: 'A sports scientist measures the sprint times of $12$ athletes before and after an intensive 6-week plyometric training program. Each athlete has a paired "before" and "after" time. Which inference procedure is most appropriate to evaluate whether the training program significantly decreased sprint times?',
            options: [
              'A two-sample $t$-test for difference in means with $df = 22$.',
              'A matched pairs $t$-test (one-sample $t$-test on the differences $d = \\text{Before} - \\text{After}$) with $df = 11$.',
              'A two-sample $z$-test for difference in proportions.',
              'A Chi-Square test for independence.'
            ],
            correctIndex: 1,
            explanation: 'Because two measurements are taken on the SAME individual, the samples are dependent (paired). The correct procedure calculates the differences ($d_i$) for each subject and runs a one-sample $t$-test on the single sample of differences with $df = n_{\\text{pairs}} - 1 = 12 - 1 = 11$.',
            distractorTip: 'When data are linked in natural pairs (pre-test/post-test, twins, matched subjects), use a MATCHED PAIRS $t$-test, never a two-sample $t$-test!'
          },
          {
            id: 'stats-u4-l4-q2',
            stem: 'For a matched pairs $t$-test with differences defined as $x_d = \\text{Post} - \\text{Pre}$, the research team hypothesizes that the post-treatment scores will be higher on average. What are the appropriate null and alternative hypotheses?',
            options: [
              '$H_0: \\mu_d = 0$ versus $H_a: \\mu_d > 0$',
              '$H_0: \\mu_d = 0$ versus $H_a: \\mu_d < 0$',
              '$H_0: \\bar{x}_d = 0$ versus $H_a: \\bar{x}_d > 0$',
              '$H_0: \\mu_1 = \\mu_2$ versus $H_a: \\mu_1 \\neq \\mu_2$'
            ],
            correctIndex: 0,
            explanation: 'Because $x_d = \\text{Post} - \\text{Pre}$, higher post-treatment scores mean positive differences ($x_d > 0$). Thus, $H_0: \\mu_d = 0$ versus $H_a: \\mu_d > 0$, where $\\mu_d$ represents the true mean difference.',
            distractorTip: 'Always check the subtraction direction! If $\\text{Pre} - \\text{Post}$ had been used, higher post scores would mean $\\mu_d < 0$.'
          },
          {
            id: 'stats-u4-l4-q3',
            stem: 'A matched pairs $95\\%$ confidence interval for the mean difference in reaction times $\\mu_d = \\text{Distracted} - \\text{Undistracted}$ is $(0.12, 0.38)$ seconds. What does this interval demonstrate?',
            options: [
              'Because the interval contains 0, there is no significant difference in reaction times.',
              'Because the entire interval is positive, there is convincing evidence that being distracted increases mean reaction time by between $0.12$ and $0.38$ seconds.',
              '95% of distracted drivers react 0.25 seconds slower than undistracted drivers.',
              'Reaction times for distracted driving are significantly faster.'
            ],
            correctIndex: 1,
            explanation: 'Since $0$ is not contained in the interval $(0.12, 0.38)$ and all values are positive, we have convincing evidence that $\\mu_d > 0$, meaning distracted driving increases mean reaction time.',
            distractorTip: 'If a difference interval excludes 0, the difference is statistically significant at the corresponding significance level ($\alpha = 1 - C$).'
          }
        ]
      },
      {
        id: 405,
        unitIndex: 4,
        levelNumber: 5,
        uniqueKey: 'stats-u4-l5',
        topicNumber: 'Topic 4.6–4.8',
        name: 'Two-Sample t-Interval for Independent Means',
        subtitle: 'Independent groups, standard error, conservative df, and confidence intervals',
        difficulty: 'Hard',
        rewardCoins: 40,
        questions: [
          {
            id: 'stats-u4-l5-q1',
            stem: 'A study compares the battery life of two laptop models: Model A ($n_1 = 35, \\bar{x}_1 = 11.2$ hrs, $s_1 = 1.4$) and Model B ($n_2 = 40, \\bar{x}_2 = 9.8$ hrs, $s_2 = 1.6$). What is the standard error $SE_{(\\bar{x}_1 - \\bar{x}_2)}$ for estimating the difference in population means $\\mu_1 - \\mu_2$?',
            options: [
              '$SE = \\sqrt{\\frac{1.4^2}{35} + \\frac{1.6^2}{40}} = \\sqrt{\\frac{1.96}{35} + \\frac{2.56}{40}} \\approx 0.346$ hrs',
              '$SE = \\frac{1.4}{\\sqrt{35}} + \\frac{1.6}{\\sqrt{40}} \\approx 0.490$ hrs',
              '$SE = \\sqrt{\\frac{1.4 + 1.6}{75}} \\approx 0.200$ hrs',
              '$SE = \\frac{1.4^2 + 1.6^2}{\\sqrt{75}} \\approx 0.522$ hrs'
            ],
            correctIndex: 0,
            explanation: 'The standard error of the difference between two independent sample means is $SE = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}} = \\sqrt{\\frac{1.96}{35} + \\frac{2.56}{40}} = \\sqrt{0.056 + 0.064} = \\sqrt{0.120} \\approx 0.3464$ hours.',
            distractorTip: 'Do not add standard deviations directly. Standard errors combine through the Pythagorean sum of variances ($s^2/n$).'
          },
          {
            id: 'stats-u4-l5-q2',
            stem: 'When calculating a two-sample $t$-interval without statistical software, which conservative degrees of freedom is accepted by the College Board?',
            options: [
              '$df = n_1 + n_2 - 2$',
              '$df = \\min(n_1 - 1, n_2 - 1)$',
              '$df = n_1 \\times n_2$',
              '$df = \\max(n_1, n_2)$'
            ],
            correctIndex: 1,
            explanation: 'The College Board accepts the conservative degrees of freedom $df = \\min(n_1 - 1, n_2 - 1)$ when technology (Welch-Satterthwaite approximation) is not available.',
            distractorTip: '$df = n_1 + n_2 - 2$ is only valid for pooled $t$-tests (which assume equal population variances and are NOT standard on the AP exam).'
          },
          {
            id: 'stats-u4-l5-q3',
            stem: 'A 95% two-sample $t$-interval for the difference in mean test scores between Method A and Method B $(\\mu_A - \\mu_B)$ is $(-1.5, 4.5)$. What conclusion should be drawn?',
            options: [
              'Method A is significantly more effective than Method B.',
              'Method B is significantly more effective than Method A.',
              'Because the interval contains 0, there is insufficient evidence to conclude that a difference exists in true mean scores between the two methods.',
              'The sample size was too small to construct a valid interval.'
            ],
            correctIndex: 2,
            explanation: 'Because $0$ is included in the interval $(-1.5, 4.5)$, a difference of zero is plausible. Therefore, there is insufficient statistical evidence of a difference in population means.',
            distractorTip: 'When 0 is inside the confidence interval for $\\mu_1 - \\mu_2$, fail to reject $H_0: \\mu_1 = \\mu_2$ at the corresponding significance level.'
          }
        ]
      },
      {
        id: 406,
        unitIndex: 4,
        levelNumber: 6,
        uniqueKey: 'stats-u4-l6',
        topicNumber: 'Topic 4.9 & 4.10',
        name: 'Two-Sample t-Test for Independent Means (BOSS)',
        subtitle: 'Hypothesis testing, test statistic, p-value calculation, and complete inference synthesis',
        difficulty: 'Boss',
        rewardCoins: 50,
        questions: [
          {
            id: 'stats-u4-l6-q1',
            stem: 'Researchers test whether employees who work remotely sleep more on average than employees who commute. \\nSample 1 (Remote): $n_1 = 45, \\bar{x}_1 = 7.8$ hrs, $s_1 = 1.0$ \\nSample 2 (Commute): $n_2 = 50, \\bar{x}_2 = 7.1$ hrs, $s_2 = 1.2$ \\nWhat are the test statistic $t$ and conclusion for $H_0: \\mu_1 - \\mu_2 = 0$ versus $H_a: \\mu_1 - \\mu_2 > 0$?',
            options: [
              '$t = \\frac{7.8 - 7.1}{\\sqrt{\\frac{1.0^2}{45} + \\frac{1.2^2}{50}}} \\approx 3.09$; With a very small $p$-value ($p < 0.002$), reject $H_0$.',
              '$t = \\frac{7.8 - 7.1}{1.0 + 1.2} = 0.318$; Fail to reject $H_0$.',
              '$t = 1.96$; Accept $H_a$.',
              '$t = \\frac{7.8 - 7.1}{\\frac{1.1}{\\sqrt{95}}} \\approx 6.20$; Prove $H_a$.'
            ],
            correctIndex: 0,
            explanation: '$SE = \\sqrt{\\frac{1.0}{45} + \\frac{1.44}{50}} = \\sqrt{0.0222 + 0.0288} = \\sqrt{0.051} \\approx 0.226$. \\n$t = \\frac{7.8 - 7.1}{0.226} = \\frac{0.7}{0.226} \\approx 3.097$. With $df \\approx 92$ and $t > 3$, $p < 0.002 < 0.05$, so we reject $H_0$.',
            distractorTip: 'AP tests use unpooled two-sample $t$-procedures; do not pool variances when conducting tests for independent means.'
          },
          {
            id: 'stats-u4-l6-q2',
            stem: 'Which of the following describes the correct condition checking for a two-sample $t$-test when both sample sizes are small ($n_1 = 14, n_2 = 12$)?',
            options: [
              'Both sample sizes must be greater than 30 by the Central Limit Theorem.',
              'Both sample distributions must show no strong skewness or outliers, or both populations must be known to be approximately normal.',
              'The pooled variance must equal the sum of the two sample variances.',
              'The sample proportions must satisfy $n_1 p_1 \\ge 10$ and $n_2 p_2 \\ge 10$.'
            ],
            correctIndex: 1,
            explanation: 'When $n < 30$, the CLT does not automatically guarantee normality of the sample mean. We must examine graphical displays (boxplots or dotplots) of each sample to verify there are no extreme outliers or strong skewness.',
            distractorTip: 'If sample sizes are small ($n < 30$), explicitly state that boxplots or normal probability plots show no outliers or strong skewness.'
          },
          {
            id: 'stats-u4-l6-q3',
            stem: 'An AP student writes the conclusion: "Since the $p$-value $0.004 < 0.05$, we accept the alternative hypothesis and prove that the new tutoring program works." What critical errors did this student make?',
            options: [
              'The student should have rejected the alternative hypothesis.',
              'The student used definitive language ("accept", "prove"), which violates statistical principles; they should state there is "convincing statistical evidence" to reject $H_0$ and support $H_a$.',
              'The significance level $\\alpha$ should always be $0.01$ rather than $0.05$.',
              'The degrees of freedom were omitted from the conclusion.'
            ],
            correctIndex: 1,
            explanation: 'Statistical tests never "prove" hypotheses or "accept" $H_a$. A conclusion must use non-definitive language: reject $H_0$ and state there is convincing evidence for the alternative in context.',
            distractorTip: 'Using the words "proven" or "accepted" is an automatic scoring deduction on the AP exam.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 5: REGRESSION ANALYSIS (10–20%)
  // =========================================================================
  {
    unitIndex: 5,
    unitId: 'u5',
    title: 'Unit 5: Regression Analysis',
    shortTitle: 'Unit 5: Regression Analysis',
    description: 'Bivariate quantitative data, scatterplots, correlation coefficient r, least-squares regression lines, residuals, and coefficient of determination r²',
    examWeight: '10–20% of AP Exam',
    biome: {
      name: 'Bivariate Ridge & Least-Squares Laboratory',
      icon: '📉',
      accentColor: '#EC4899',
      secondaryColor: '#DB2777',
      groundGradient: 'from-pink-100 via-rose-50 to-fuchsia-100',
      cardBorder: 'border-pink-500',
      trailColor: '#ec4899',
      nodeRing: 'ring-pink-400/40',
      skyTint: 'from-pink-50 to-rose-50/30'
    },
    levels: [
      {
        id: 501,
        unitIndex: 5,
        levelNumber: 1,
        uniqueKey: 'stats-u5-l1',
        topicNumber: 'Topic 5.1',
        name: 'Scatterplots & Bivariate Association',
        subtitle: 'Explanatory vs response variables, form, direction, strength, and unusual features',
        difficulty: 'Easy',
        rewardCoins: 30,
        questions: [
          {
            id: 'stats-u5-l1-q1',
            stem: 'A scatterplot displays the relationship between horsepower ($x$) and fuel economy in miles per gallon ($y$) for $40$ car models. As horsepower increases, fuel economy consistently decreases along a straight path with little scatter around the trend. Which of the following best describes this association?',
            options: [
              'Strong, negative, linear association',
              'Weak, positive, non-linear association',
              'Moderate, negative, non-linear association',
              'Strong, positive, linear association'
            ],
            correctIndex: 0,
            explanation: 'The downward trend indicates a negative direction (as $x$ increases, $y$ decreases). The straight path shows a linear form, and the minimal scatter around the trend indicates strong strength.',
            distractorTip: 'Always describe all four characteristics of a scatterplot: Direction (positive/negative), Form (linear/non-linear), Strength (strong/moderate/weak), and Unusual features (outliers).'
          },
          {
            id: 'stats-u5-l1-q2',
            stem: 'In a study examining how study time impacts exam scores, which variable is the explanatory variable and which axis should it be plotted on?',
            options: [
              'Study time is the explanatory variable and should be placed on the horizontal ($x$) axis.',
              'Exam score is the explanatory variable and should be placed on the horizontal ($x$) axis.',
              'Study time is the response variable and should be placed on the vertical ($y$) axis.',
              'Either variable can be placed on either axis interchangeably.'
            ],
            correctIndex: 0,
            explanation: 'The explanatory (independent) variable is used to predict or explain changes in the response (dependent) variable. By convention, the explanatory variable is placed on the $x$-axis and the response variable on the $y$-axis.',
            distractorTip: 'Explanatory variable $= x$-axis; Response variable $= y$-axis.'
          },
          {
            id: 'stats-u5-l1-q3',
            stem: 'An outlier in a bivariate scatterplot is identified as an influential point. What makes a data point "influential"?',
            options: [
              'It has a $y$-value equal to exactly zero.',
              'Removing the point would substantially change the slope, $y$-intercept, or correlation coefficient of the regression line.',
              'It lies close to the center of the scatterplot $(\\bar{x}, \\bar{y})$.',
              'It has the smallest residual in the entire dataset.'
            ],
            correctIndex: 1,
            explanation: 'An influential point is an observation whose removal would substantially alter the statistical properties of the regression model (specifically slope, intercept, or $r$). Points with extreme $x$-values (high leverage) are often highly influential.',
            distractorTip: 'Points with extreme $x$-values have high leverage and the greatest potential to pull the regression line toward themselves.'
          }
        ]
      },
      {
        id: 502,
        unitIndex: 5,
        levelNumber: 2,
        uniqueKey: 'stats-u5-l2',
        topicNumber: 'Topic 5.2',
        name: 'The Correlation Coefficient (r)',
        subtitle: 'Properties of r, unit-free nature, sensitivity to outliers, and correlation vs causation',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u5-l2-q1',
            stem: 'If the correlation between height (in inches) and weight (in pounds) of high school athletes is $r = 0.72$, what would the correlation coefficient be if height were converted to centimeters ($1 \\text{ in} = 2.54 \\text{ cm}$) and weight to kilograms ($1 \\text{ lb} \\approx 0.4536 \\text{ kg}$)?',
            options: [
              '$r = 0.72$',
              '$r = 0.72 \\times 2.54 = 1.83$',
              '$r = 0.72 \\times (2.54 / 0.4536) \\approx 4.03$',
              '$r = (0.72)^2 = 0.5184$'
            ],
            correctIndex: 0,
            explanation: 'The correlation coefficient $r$ is a standardized, unit-free measure calculated from standardized $z$-scores: $r = \\frac{1}{n-1} \\sum \\left(\\frac{x_i - \\bar{x}}{s_x}\\right)\\left(\\frac{y_i - \\bar{y}}{s_y}\\right)$. Linear transformations (changing units) do NOT change $z$-scores, so $r$ remains exactly $0.72$.',
            distractorTip: 'Correlation $r$ has NO units of measurement and does not change when units of $x$ or $y$ are changed.'
          },
          {
            id: 'stats-u5-l2-q2',
            stem: 'A study discovers a strong positive correlation ($r = 0.88$) between the number of ice cream cones sold in a city and the number of drowning incidents. What is the most appropriate statistical conclusion?',
            options: [
              'Eating ice cream causes cramps that lead to drowning.',
              'Drowning incidents stimulate demand for cold treats.',
              'The strong correlation does not prove causation; both variables are likely confounded by a common lurking variable such as summer temperature.',
              'The correlation coefficient must have been calculated incorrectly because $r$ cannot exceed 0.80.'
            ],
            correctIndex: 2,
            explanation: 'Correlation does NOT imply causation! Both ice cream sales and swimming (which leads to drowning risk) increase during hot summer months. Higher temperature is a common confounding variable driving both outcomes.',
            distractorTip: 'Golden AP Rule: Correlation $\\neq$ Causation. Only a well-designed, randomized controlled experiment can establish cause-and-effect.'
          },
          {
            id: 'stats-u5-l2-q3',
            stem: 'Which of the following values of $r$ represents the strongest linear relationship between two variables?',
            options: [
              '$r = 0.65$',
              '$r = -0.82$',
              '$r = 0.78$',
              '$r = -0.15$'
            ],
            correctIndex: 1,
            explanation: 'The STRENGTH of a linear association is measured by the absolute value $|r|$. Since $|-0.82| = 0.82 > 0.78 > 0.65$, $r = -0.82$ indicates the strongest linear relationship among the choices (a strong negative association).',
            distractorTip: 'Negative does not mean weak! The sign only tells you the direction of the slope; $|r|$ tells you the strength.'
          }
        ]
      },
      {
        id: 503,
        unitIndex: 5,
        levelNumber: 3,
        uniqueKey: 'stats-u5-l3',
        topicNumber: 'Topic 5.3',
        name: 'Linear Regression Models & Predictions',
        subtitle: 'Interpreting slope and y-intercept in context, interpolation vs extrapolation',
        difficulty: 'Medium',
        rewardCoins: 35,
        questions: [
          {
            id: 'stats-u5-l3-q1',
            stem: 'A least-squares regression line predicting tree height in feet ($y$) from trunk diameter in inches ($x$) is given by $\\hat{y} = 12.4 + 2.8x$. How should the slope $b = 2.8$ be interpreted in context?',
            options: [
              'For every 1-inch increase in trunk diameter, the predicted tree height increases by 2.8 feet.',
              'When trunk diameter is 0 inches, the tree height is 2.8 feet.',
              'Every tree in the forest grows by exactly 2.8 feet each year.',
              'For every 2.8-inch increase in trunk diameter, height increases by 12.4 feet.'
            ],
            correctIndex: 0,
            explanation: 'The slope $b$ represents the predicted (or estimated) change in the response variable $y$ for each 1-unit increase in the explanatory variable $x$. Always include "predicted" or "on average" in context.',
            distractorTip: 'Never state that $y$ increases by $b$ as a deterministic fact; you MUST use probabilistic language like "predicted to increase" or "on average."'
          },
          {
            id: 'stats-u5-l3-q2',
            stem: 'The regression equation was developed using trunk diameters ranging from $4$ inches to $20$ inches. If a forester uses this equation to predict the height of a giant redwood tree with a trunk diameter of $48$ inches, what statistical risk is being taken?',
            options: [
              'Confounding bias',
              'Undercoverage',
              'Extrapolation: predicting outside the range of observed explanatory data, making the estimate unreliable.',
              'Simpson\'s Paradox'
            ],
            correctIndex: 2,
            explanation: 'Extrapolation is making predictions using $x$-values outside the domain of the original sample data. We have no evidence that the linear relationship holds beyond $20$ inches, making predictions highly untrustworthy.',
            distractorTip: 'Extrapolation means guessing beyond the boundaries of your data where the pattern may level off, curve, or break down.'
          },
          {
            id: 'stats-u5-l3-q3',
            stem: 'In the regression line $\\hat{y} = 12.4 + 2.8x$, what does the $y$-intercept $a = 12.4$ represent in context?',
            options: [
              'The average trunk diameter across all sampled trees.',
              'The predicted height of a tree when its trunk diameter is 0 inches.',
              'The maximum height any tree can achieve.',
              'The rate of change of tree height per inch of diameter.'
            ],
            correctIndex: 1,
            explanation: 'The $y$-intercept is the predicted value of the response variable $y$ when the explanatory variable $x = 0$. Note that while mathematically defined, a tree with $0$ inch diameter having $12.4$ ft height may have no physical reality in context.',
            distractorTip: 'The $y$-intercept is simply $\\hat{y}$ when $x = 0$, though it frequently lacks practical real-world meaning.'
          }
        ]
      },
      {
        id: 504,
        unitIndex: 5,
        levelNumber: 4,
        uniqueKey: 'stats-u5-l4',
        topicNumber: 'Topic 5.4',
        name: 'Residuals & Residual Plot Analysis',
        subtitle: 'Residual calculation (y - y-hat), assessing linearity, and detecting pattern curvature',
        difficulty: 'Hard',
        rewardCoins: 40,
        questions: [
          {
            id: 'stats-u5-l4-q1',
            stem: 'A regression model predicting used car price from age in years is $\\hat{y} = 28,000 - 1,800x$. A 4-year-old car in the sample actually sold for $\\$22,000$. What is the residual for this observation?',
            options: [
              '$\\text{Residual} = \\$1,200$',
              '$\\text{Residual} = -\\$1,200$',
              '$\\text{Residual} = \\$20,800$',
              '$\\text{Residual} = \\$22,000$'
            ],
            correctIndex: 0,
            explanation: 'Predicted price $\\hat{y} = 28,000 - 1,800(4) = 28,000 - 7,200 = 20,800$. \\nResidual $= y - \\hat{y} = \\text{Actual} - \\text{Predicted} = 22,000 - 20,800 = +1,200$.',
            distractorTip: 'Remember the mnemonic "AP": $\\text{Residual} = \\text{Actual} - \\text{Predicted}$ ($y - \\hat{y}$). Positive residual means the model underestimated the true value.'
          },
          {
            id: 'stats-u5-l4-q2',
            stem: 'A researcher plots residuals against predicted values for a linear regression model. The residual plot exhibits a distinct parabolic, curved U-shape pattern. What does this residual plot indicate about the linear model?',
            options: [
              'The linear model is an appropriate fit because points are balanced above and below zero.',
              'The linear model is NOT appropriate because the curved pattern in the residuals indicates that the true relationship between the variables is non-linear.',
              'The correlation coefficient $r$ must equal exactly 1.0.',
              'The sample size was too small to draw any conclusion.'
            ],
            correctIndex: 1,
            explanation: 'An appropriate linear model produces a residual plot with a random scatter of points around the zero line with no discernible pattern. A curved pattern in the residual plot indicates departure from linearity, meaning a non-linear model would be more appropriate.',
            distractorTip: 'Good linear fit = completely random scatter of residuals around 0. Any pattern or curve in the residual plot = linear model is NOT appropriate!'
          },
          {
            id: 'stats-u5-l4-q3',
            stem: 'Which of the following is always true regarding the residuals of a least-squares regression line?',
            options: [
              'The sum of the residuals $\\sum (y_i - \\hat{y}_i)$ is always equal to zero.',
              'All residuals must be positive.',
              'The standard deviation of residuals is always equal to 1.0.',
              'Every residual is equal to the correlation coefficient $r$.'
            ],
            correctIndex: 0,
            explanation: 'By mathematical construction, the least-squares regression line balances deviations so that the sum of the residuals $\\sum e_i = \\sum (y - \\hat{y}) = 0$, and the mean of the residuals is zero.',
            distractorTip: 'The sum (and mean) of least-squares residuals is ALWAYS zero.'
          }
        ]
      },
      {
        id: 505,
        unitIndex: 5,
        levelNumber: 5,
        uniqueKey: 'stats-u5-l5',
        topicNumber: 'Topic 5.5',
        name: 'Least-Squares Regression & Coefficient of Determination (BOSS)',
        subtitle: 'LSRL formulas, point of averages, and r² variation explained',
        difficulty: 'Boss',
        rewardCoins: 50,
        questions: [
          {
            id: 'stats-u5-l5-q1',
            stem: 'A linear regression model has a correlation coefficient of $r = -0.80$. What is the coefficient of determination $r^2$, and how is it interpreted in context?',
            options: [
              '$r^2 = 0.64$; approximately $64\\%$ of the variation in the response variable $y$ is explained by the linear relationship with the explanatory variable $x$.',
              '$r^2 = -0.64$; approximately $64\\%$ of the data points fall directly on the regression line.',
              '$r^2 = 0.80$; approximately $80\\%$ of the predictions will be exactly accurate.',
              '$r^2 = 0.16$; the linear model explains only $16\\%$ of the response variation.'
            ],
            correctIndex: 0,
            explanation: '$r^2 = (-0.80)^2 = 0.64$ ($64\\%$). The coefficient of determination $r^2$ is the proportion (or percentage) of the total variation in the response variable $y$ that is explained by the linear model with the explanatory variable $x$.',
            distractorTip: 'Template sentence to memorize for $r^2$: "[r²%] of the variation in [response variable y] is explained by the linear relationship with [explanatory variable x]."'
          },
          {
            id: 'stats-u5-l5-q2',
            stem: 'Summary statistics for two variables are: $\\bar{x} = 10$, $s_x = 2$, $\\bar{y} = 30$, $s_y = 6$, and $r = 0.80$. What are the slope $b$ and $y$-intercept $a$ of the least-squares regression line $\\hat{y} = a + bx$?',
            options: [
              'Slope $b = 0.80 \\left(\\frac{6}{2}\\right) = 2.4$; Intercept $a = 30 - 2.4(10) = 6.0$',
              'Slope $b = 0.80 \\left(\\frac{2}{6}\\right) = 0.267$; Intercept $a = 30 - 0.267(10) = 27.33$',
              'Slope $b = 2.4$; Intercept $a = 30$',
              'Slope $b = 6.0$; Intercept $a = 2.4$'
            ],
            correctIndex: 0,
            explanation: 'Slope formula: $b = r \\frac{s_y}{s_x} = 0.80 \\left(\\frac{6}{2}\\right) = 0.80 \\times 3 = 2.4$. The LSRL always passes through the point of averages $(\\bar{x}, \\bar{y})$: $a = \\bar{y} - b\\bar{x} = 30 - 2.4(10) = 30 - 24 = 6.0$. Equation: $\\hat{y} = 6.0 + 2.4x$.',
            distractorTip: 'Slope is $r \\frac{s_y}{s_x}$ ($y$ over $x$, like rise over run); do NOT invert to $s_x / s_y$.'
          },
          {
            id: 'stats-u5-l5-q3',
            stem: 'Which point is GUARANTEED to lie directly on the least-squares regression line for any bivariate quantitative dataset?',
            options: [
              '$(0, 0)$',
              '$(\\bar{x}, \\bar{y})$, the point of averages',
              '$(s_x, s_y)$',
              '$(Q_{1x}, Q_{1y})$'
            ],
            correctIndex: 1,
            explanation: 'The least-squares regression line always passes through the center of mass of the data, which is the point formed by the mean of $x$ and the mean of $y$: $(\\bar{x}, \\bar{y})$.',
            distractorTip: 'The line does NOT have to pass through $(0, 0)$ unless the $y$-intercept happens to be zero, but it ALWAYS passes through $(\\bar{x}, \\bar{y})$.'
          }
        ]
      }
    ]
  }
];
