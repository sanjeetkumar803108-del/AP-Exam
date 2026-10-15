import { APUnitNote } from './types';

export const AP_MICROECONOMICS_NOTES: APUnitNote[] = [
  // =========================================================================
  // UNIT 1: BASIC ECONOMIC CONCEPTS, PPC, TRADE & UTILITY MAXIMIZATION
  // =========================================================================
  {
    unitId: 'u1',
    unitNumber: 1,
    title: 'Unit 1: Basic Economic Concepts, PPC, Trade & Consumer Choice',
    examWeight: '12%–15% of AP Microeconomics Exam',
    bigIdea: 'Economics is the study of scarcity and choice. Society faces trade-offs modeled by the Production Possibilities Curve (PPC), gains from trade are realized through comparative advantage, and rational consumers maximize utility where marginal utility per dollar is equalized.',
    keyTheorems: [
      {
        name: 'The Law of Increasing Opportunity Cost and Concave PPC',
        conditions: 'Resources are specialized and not perfectly adaptable to the production of both alternative goods.',
        conclusion: 'As the economy produces more of one good, the opportunity cost of producing additional units rises. Geometrically, this gives the Production Possibilities Curve (PPC) its bowed-out (concave to the origin) shape.',
        apTip: 'If resources are perfectly adaptable (e.g. wheat vs. corn or calzones vs. pizzas), the PPC is a STRAIGHT LINE with constant opportunity costs!'
      },
      {
        name: 'Comparative Advantage and the Gains from Trade',
        conditions: 'Two nations or producers producing two distinct goods with differing opportunity cost structures.',
        conclusion: 'A producer has an Absolute Advantage if they can produce more total output (or use fewer resources/hours). A producer has a Comparative Advantage if they produce a good at a LOWER domestic opportunity cost. Mutually beneficial trade occurs when the terms of trade lie strictly between both producers’ domestic opportunity costs.',
        apTip: 'Mnemonic for calculating opportunity cost: For OUTPUT problems ("OOO" = Output: Other goes Over). For INPUT/Time problems ("IOU" = Input: Other goes Under).'
      },
      {
        name: 'The Utility-Maximizing Consumer Choice Rule',
        conditions: 'A consumer allocating a fixed income budget across two goods with diminishing marginal utility.',
        conclusion: 'Total utility is maximized when the marginal utility per dollar spent is equalized across all goods: $\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y}$, subject to the budget constraint $I = P_X Q_X + P_Y Q_Y$.',
        apTip: 'If $\\frac{MU_X}{P_X} > \\frac{MU_Y}{P_Y}$, the consumer gains more satisfaction per dollar from Good X. To maximize utility, they must reallocate spending: buy MORE of Good X and LESS of Good Y!'
      }
    ],
    formulas: [
      {
        name: 'Opportunity Cost Ratio (Output Method)',
        latex: '\\text{Opportunity Cost of Good A} = \\frac{\\text{Quantity of Good B forgone}}{\\text{Quantity of Good A produced}} \\quad (\\text{"Other Over"})',
        explanation: 'For output tables (goods produced per day/year), put the alternative good in the numerator and the desired good in the denominator.'
      },
      {
        name: 'Opportunity Cost Ratio (Input Method)',
        latex: '\\text{Opportunity Cost of Good A} = \\frac{\\text{Hours/Resources to produce Good A}}{\\text{Hours/Resources to produce Good B}} \\quad (\\text{"Other Under"})',
        explanation: 'For input tables (hours or acres required per unit of output), put the desired good in the numerator and the alternative good in the denominator.'
      },
      {
        name: 'Terms of Trade Range',
        latex: '\\text{Seller\'s Domestic Opportunity Cost} < \\text{Terms of Trade} < \\text{Buyer\'s Domestic Opportunity Cost}',
        explanation: 'Both trading partners enjoy gains from trade if and only if the trade exchange rate falls strictly between their domestic costs.'
      },
      {
        name: 'Utility-Maximizing Rule (Optimal Bundle)',
        latex: '\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y} \\quad \\text{and} \\quad P_X Q_X + P_Y Q_Y = \\text{Income}',
        explanation: 'Equalize marginal utility per dollar spent while fully exhausting the consumer’s income budget.'
      }
    ],
    sections: [
      {
        heading: '1. Scarcity, Factors of Production & Marginal Decision Making (CED 1.1–1.2)',
        content: `Core foundational economic principles for AP Microeconomics:

* **Scarcity vs. Poverty**:
  * **Scarcity**: Unlimited human wants exceed limited economic resources. Scarcity exists universally across all societies and income levels.
  * **Microeconomics vs. Macroeconomics**: Micro analyzes individual decision-makers (households, workers, firms), whereas macro studies aggregate economic phenomena (GDP, inflation, unemployment).
  * **Positive vs. Normative Statements**:
    * *Positive*: Factual, testable, objective assertions (e.g. "A minimum wage of $15 increases teenage unemployment").
    * *Normative*: Value judgments and opinion-based recommendations (e.g. "The government ought to raise the minimum wage to help families").
* **The Four Factors of Production**:
  1. **Land**: All natural gifts of nature (water, oil, timber, mineral deposits); earns **Rent**.
  2. **Labor**: Physical and mental efforts exerted by individuals; earns **Wages**.
  3. **Capital**:
     * *Physical Capital*: Human-made durable tools, machines, equipment, and factories used to produce goods; earns **Interest**.
     * *Human Capital*: Skills, education, training, and health embodied in workers.
  4. **Entrepreneurship**: Risk-taking, innovation, and resource organization; earns **Profit**.
* **Marginal Analysis & Rational Choice**:
  * Rational individuals make decisions "at the margin."
  * **Rule**: Undertake an action as long as **Marginal Benefit $\\ge$ Marginal Cost ($MB \\ge MC$)**.
  * Net benefits are maximized where $MB = MC$.
  * **Sunk Costs**: Costs that have already been incurred and cannot be recovered. Sunk costs are irrelevant to prospective decisions and must be ignored!`
      },
      {
        heading: '2. The Production Possibilities Curve (PPC), Growth & Capital Trade-Offs (CED 1.2–1.3)',
        content: `Production boundaries, opportunity costs, and long-run economic growth:

* **PPC Assumptions & Points Classification**:
  * **Point On Curve (e.g. Point A)**: Productively efficient; full utilization of all available resources and technology.
  * **Point Inside Curve (e.g. Point B)**: Inefficient; indicates idle resources, underemployment, or structural recession.
  * **Point Outside Curve (e.g. Point C)**: Unattainable with current domestic resources; can be consumed **only through international trade**.
* **PPC Curvature & Opportunity Cost Shapes**:
  * **Bowed-Out (Concave to Origin) PPC**: Law of Increasing Opportunity Cost. Economic resources are specialized and not equally suited to producing both goods (e.g. transferring agricultural land to manufacture microchips).
  * **Straight-Line PPC**: Constant opportunity costs. Resources are completely interchangeable and equally adaptable (e.g. producing calzones vs. pizzas).
* **Shifts vs. Movements Along the PPC**:
  * *Movement along the curve*: Reflects a reallocation of existing resources (trade-off between consumer goods and capital goods).
  * *Outward PPC shift (Economic Growth)*: Driven by:
    1. Discovery of new natural resources or labor force growth.
    2. Technological progress and innovation.
    3. Investment in physical and human capital.
* **Capital Goods vs. Consumer Goods & Future Growth**:
  * **Consumer Goods**: Goods produced for immediate consumption (e.g. food, video games).
  * **Capital Goods**: Goods used to produce other goods (e.g. robotics, heavy machinery, research laboratories).
  * **AP Exam Core Insight**: An economy that produces a higher ratio of capital goods today will shift its PPC outward **further and faster** in the future than an economy focusing on consumer goods!`
      },
      {
        heading: '3. Comparative Advantage, Output vs. Input Methods & Terms of Trade (CED 1.3–1.4)',
        content: `Comprehensive comparative advantage decision matrix:

| Metric / Method | Nature of Given Data | Opportunity Cost Formula | AP Mnemonic | Identifying Advantage |
| :--- | :--- | :--- | :--- | :--- |
| **Output Method** | Units of **goods produced** in a fixed time period (tons of wheat, cars/day) | $\\text{Cost of A} = \\frac{\\text{Output B}}{\\text{Output A}}$ | **OOO** (Output: Other goes Over) | **Higher number** = Absolute Advantage; **Lower Cost** = Comparative Advantage |
| **Input Method** | **Resources or time required** to produce 1 unit of output (hours per table, acres per crop) | $\\text{Cost of A} = \\frac{\\text{Input A}}{\\text{Input B}}$ | **IOU** (Input: Other goes Under) | **Lower number** = Absolute Advantage (faster/fewer resources); **Lower Cost** = Comparative Advantage |

* **Terms of Trade Formulation**:
  * For two trading partners to mutually gain from trade, the agreed exchange rate must lie strictly between their internal domestic opportunity costs:
    $$\\text{Country A Opportunity Cost} < \\text{Terms of Trade} < \\text{Country B Opportunity Cost}$$
  * Specialization based on comparative advantage expands total world output, allowing both nations to consume at a point **outside their individual domestic PPC frontiers**!`
      },
      {
        heading: '4. Consumer Choice, Diminishing Marginal Utility & Utility Maximization (CED 1.6)',
        content: `Consumer behavioral theory and the equimarginal spending principle:

* **Utility Concepts**:
  * **Total Utility ($TU$)**: The overall cumulative satisfaction derived from consuming a specific quantity of a good.
  * **Marginal Utility ($MU$)**: The additional satisfaction gained from consuming one more unit of a good:
    $$MU = \\frac{\\Delta TU}{\\Delta Q}$$
  * **The Law of Diminishing Marginal Utility**: As an individual consumes more units of a specific good during a given period, the extra utility derived from each subsequent unit decreases.
  * **Relationship between $TU$ and $MU$**:
    * When $MU > 0$, $TU$ is rising.
    * When $MU = 0$, $TU$ reaches its maximum peak!
    * When $MU < 0$, $TU$ begins to decline.
* **The Utility-Maximizing Rule (Optimal Consumption Bundle)**:
  * A rational consumer spends their limited income across Goods $X$ and $Y$ such that the marginal utility per dollar is equalized across all goods:
    $$\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y}$$
  * Reallocation Dynamics on the AP Exam:
    * If $\\frac{MU_X}{P_X} > \\frac{MU_Y}{P_Y}$: Reallocate budget by purchasing **more of Good X** and **less of Good Y**. As $Q_X \\uparrow$, $MU_X \\downarrow$ due to diminishing marginal utility, restoring equality!
    * If $\\frac{MU_X}{P_X} < \\frac{MU_Y}{P_Y}$: Reallocate budget by purchasing **more of Good Y** and **less of Good X**.`
      }
    ],
    workedExamples: [
      {
        title: 'Determining Comparative Advantage from Output Data and Terms of Trade',
        topicRef: 'CED Micro 1.3 Comparative Advantage and Gains from Trade',
        question: 'Suppose in one working week, Country Alpha can produce either 100 Solar Panels or 50 Wind Turbines. Country Beta can produce either 60 Solar Panels or 40 Wind Turbines. (a) Determine which country has the absolute advantage in Wind Turbines. (b) Calculate the opportunity cost of 1 Solar Panel for each country. (c) Identify which country has the comparative advantage in Solar Panels. (d) Propose a mutually beneficial terms of trade for 1 Wind Turbine.',
        solutionSteps: [
          'Step 1: Problem Classification: The data is given in total units of output produced in a fixed week $\\implies$ OUTPUT problem $\\implies$ Use "OOO" (Other goes Over).',
          'Step 2: Absolute Advantage: Country Alpha can produce 50 Turbines, whereas Country Beta can produce 40 Turbines. Because $50 > 40$, **Country Alpha has absolute advantage in Wind Turbines**.',
          'Step 3: Opportunity Costs for Solar Panels (Panels = A, Turbines = B $\\implies$ Turbines / Panels):',
          '  * Country Alpha: $1 \\text{ Solar Panel} = \\frac{50}{100} = 0.5 \\text{ Wind Turbines}$.',
          '  * Country Beta: $1 \\text{ Solar Panel} = \\frac{40}{60} = 0.67 \\text{ Wind Turbines}$.',
          'Step 4: Opportunity Costs for Wind Turbines (Reciprocal):',
          '  * Country Alpha: $1 \\text{ Wind Turbine} = \\frac{100}{50} = 2.0 \\text{ Solar Panels}$.',
          '  * Country Beta: $1 \\text{ Wind Turbine} = \\frac{60}{40} = 1.5 \\text{ Solar Panels}$.',
          'Step 5: Comparative Advantage: Alpha gives up 0.5 Turbines per Panel, while Beta gives up 0.67 Turbines. Because $0.5 < 0.67$, **Country Alpha has comparative advantage in Solar Panels** (and Beta in Turbines).',
          'Step 6: Terms of Trade for 1 Wind Turbine: Country Beta exports Turbines and requires at least 1.5 Panels. Country Alpha imports Turbines and will pay at most 2.0 Panels. Terms of trade must satisfy: $1.5 \\text{ Panels} < 1 \\text{ Turbine} < 2.0 \\text{ Panels}$ (e.g. 1 Wind Turbine for 1.75 Solar Panels).'
        ],
        finalAnswer: '(a) Country Alpha. (b) Alpha: 0.5 Turbines; Beta: 0.67 Turbines. (c) Country Alpha. (d) 1 Wind Turbine for 1.75 Solar Panels.',
        apScoringTip: 'College Board graders require explicit fraction calculations and comparisons. Never state "Alpha has comparative advantage" without showing the calculated opportunity costs $0.5 < 0.67$!'
      },
      {
        title: 'Utility Maximization with Budget Constraint',
        topicRef: 'CED Micro 1.6 Marginal Analysis and Consumer Choice',
        question: 'Sarah has an entertainment budget of $20. Movie tickets cost $10 each, and Books cost $5 each. Marginal utilities: Movie 1 = 60 utils, Movie 2 = 30 utils; Book 1 = 40 utils, Book 2 = 25 utils, Book 3 = 10 utils. Determine Sarah’s optimal utility-maximizing consumption bundle and calculate her total utility.',
        solutionSteps: [
          'Step 1: Calculate Marginal Utility per Dollar ($MU / P$) for each item:',
          '  * Movie 1: $60 / \\$10 = 6.0$ utils/$; Movie 2: $30 / \\$10 = 3.0$ utils/$',
          '  * Book 1: $40 / \\$5 = 8.0$ utils/$; Book 2: $25 / \\$5 = 5.0$ utils/$; Book 3: $10 / \\$5 = 2.0$ utils/$',
          'Step 2: Allocate budget by selecting the highest $MU / P$ sequentially:',
          '  * 1st Purchase: Book 1 ($8.0 > 6.0$). Cost = $5. Budget remaining = $15.',
          '  * 2nd Purchase: Movie 1 ($6.0 > 5.0$). Cost = $10. Budget remaining = $5.',
          '  * 3rd Purchase: Book 2 ($5.0 > 3.0$). Cost = $5. Budget remaining = $0.',
          'Step 3: Check equimarginal condition and budget exhaustion:',
          '  * At 1 Movie and 2 Books: $\\frac{MU_M}{P_M} = \\frac{30}{10} = 3.0$ utils/$ is not equal, but no further dollars remain! Budget: $1 \\times \\$10 + 2 \\times \\$5 = \\$20$.',
          'Step 4: Calculate Total Utility: $TU = 40 (\\text{Book 1}) + 60 (\\text{Movie 1}) + 25 (\\text{Book 2}) = 125 \\text{ utils}$.'
        ],
        finalAnswer: 'Optimal bundle: 1 Movie ticket and 2 Books. Total Utility = 125 utils.',
        apScoringTip: 'Always construct a dedicated $MU/P$ column on table questions. Full points depend on showing $MU / P$ comparisons.'
      }
    ],
    diagrams: [
      {
        id: 'econ_ppc_frontier',
        title: 'Production Possibilities Curve: Scarcity, Trade-offs & Economic Growth',
        subtitle: 'Bowed-Out Concave Frontier Illustrating Increasing Opportunity Costs',
        type: 'ppc_frontier_graph',
        description: 'Classic concave PPC graph displaying efficient points along the frontier (Point A), inefficient/unemployment points inside (Point B), unattainable points outside (Point C), and an outward curve shift indicating capital accumulation or technological progress.',
        takeaway: 'A bowed-out curve reflects increasing opportunity costs. Outward shifts require new resources, technological breakthroughs, or capital investment.'
      }
    ],
    commonTraps: [
      'Assuming that a nation with an absolute advantage in both goods has no reason to trade. Comparative advantage (lower opportunity cost) determines trade, not absolute productivity!',
      'Inverting the opportunity cost formula by mixing up Output and Input problems. Always ask: "Is the data in widgets produced (Output: Other Over) or in hours needed per unit (Input: Other Under)?"',
      'Confusing a shift of the PPC with a movement along the PPC. Reallocating existing resources is a movement; economic growth or technological progress is an outward shift.',
      'Maximizing total utility by simply equating marginal utilities ($MU_X = MU_Y$) rather than marginal utilities PER DOLLAR ($\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y}$).'
    ],
    cramSheet: [
      'Bowed-out PPC = Increasing opportunity costs; Straight-line PPC = Constant opportunity costs.',
      'Output method: OOO (Other Over); Input method: IOU (Other Under).',
      'Comparative advantage = Lowest opportunity cost. Always specialize where opportunity cost is lowest!',
      'Terms of Trade must fall strictly between both domestic opportunity costs.',
      'Utility maximization: $\\frac{MU_X}{P_X} = \\frac{MU_Y}{P_Y}$ subject to budget $P_X Q_X + P_Y Q_Y = I$.',
      'When $MU > 0$, $TU$ rises; when $MU = 0$, $TU$ peaks; when $MU < 0$, $TU$ falls.',
      'If $\\frac{MU_X}{P_X} > \\frac{MU_Y}{P_Y}$, reallocate budget by purchasing MORE of Good X and LESS of Good Y.'
    ]
  },

  // =========================================================================
  // UNIT 2: SUPPLY, DEMAND, ELASTICITIES & MARKET WELFARE
  // =========================================================================
  {
    unitId: 'u2',
    unitNumber: 2,
    title: 'Unit 2: Supply, Demand, Elasticity & Government Interventions',
    examWeight: '20%–25% of AP Microeconomics Exam',
    bigIdea: 'Markets allocate resources through the price mechanism. Consumer and producer surpluses measure economic welfare, price elasticities govern market responsiveness, and government price controls and taxes create deadweight loss.',
    keyTheorems: [
      {
        name: 'The Law of Demand and Downward Slope Foundations',
        conditions: 'Ceteris paribus (all other economic factors held constant).',
        conclusion: 'Price and quantity demanded are inversely related ($P \\uparrow \\implies Q_d \\downarrow$). This slope is explained by: (1) Substitution Effect (consumers switch to relatively cheaper substitutes), (2) Income Effect (higher price reduces real purchasing power), and (3) Law of Diminishing Marginal Utility.',
        apTip: 'A change in PRICE causes a movement ALONG the existing curve (change in quantity demanded). A change in a non-price determinant SHIFTS the entire demand curve!'
      },
      {
        name: 'Deadweight Loss (DWL) from Price Controls and Taxes',
        conditions: 'Market intervention that forces transaction volume away from competitive equilibrium ($Q_e$).',
        conclusion: 'Interventions drive a wedge between willingness to pay and marginal cost, eliminating mutually beneficial transactions. The lost total surplus that is captured by neither consumers, producers, nor the government is Deadweight Loss (DWL).',
        apTip: 'A Price Ceiling is binding ONLY when set BELOW equilibrium (causing shortages). A Price Floor is binding ONLY when set ABOVE equilibrium (causing surpluses, e.g. minimum wage).'
      },
      {
        name: 'Tax Incidence and Relative Elasticity Principle',
        conditions: 'Imposition of a per-unit excise tax on producers or consumers.',
        conclusion: 'The economic burden of a tax falls disproportionately on whichever side of the market is MORE INELASTIC. If Demand is more inelastic than Supply, buyers bear the greater tax burden. If Supply is more inelastic, sellers bear the greater burden.',
        apTip: 'Statutory tax incidence (who writes the check to the government) has ZERO impact on economic tax incidence!'
      }
    ],
    formulas: [
      {
        name: 'Price Elasticity of Demand (Midpoint Formula)',
        latex: 'E_d = \\left| \\frac{\\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2}}{\\frac{P_2 - P_1}{(P_1 + P_2)/2}} \\right| = \\left| \\frac{\\%\\Delta Q_d}{\\%\\Delta P} \\right|',
        explanation: 'Always taken as an absolute value. $E_d > 1$: Elastic; $E_d < 1$: Inelastic; $E_d = 1$: Unit Elastic.'
      },
      {
        name: 'Total Revenue Test of Elasticity',
        latex: '\\text{Inelastic: } P \\uparrow \\implies TR \\uparrow; \\quad \\text{Elastic: } P \\uparrow \\implies TR \\downarrow; \\quad \\text{Unit Elastic: } \\Delta P \\implies TR \\text{ constant (peak)}',
        explanation: 'Firms with linear demand maximize total revenue at the midpoint where $E_d = 1$ and Marginal Revenue $MR = 0$.'
      },
      {
        name: 'Cross-Price Elasticity of Demand ($E_{XY}$)',
        latex: 'E_{XY} = \\frac{\\%\\Delta Q_{d,X}}{\\%\\Delta P_Y}',
        explanation: 'If $E_{XY} > 0$: Substitutes (e.g. Coke & Pepsi). If $E_{XY} < 0$: Complements (e.g. Coffee & Creamer). If $E_{XY} = 0$: Independent.'
      },
      {
        name: 'Income Elasticity of Demand ($E_I$)',
        latex: 'E_I = \\frac{\\%\\Delta Q_d}{\\%\\Delta \\text{Income}}',
        explanation: 'If $E_I > 0$: Normal Good ($E_I > 1$: Luxury; $0 < E_I < 1$: Necessity). If $E_I < 0$: Inferior Good.'
      },
      {
        name: 'Deadweight Loss (Excise Tax Triangle)',
        latex: '\\text{DWL} = \\frac{1}{2} \\times \\text{Tax per unit} \\times (Q_e - Q_t)',
        explanation: 'The triangular area bounded between demand and supply curves over the reduction in output.'
      }
    ],
    sections: [
      {
        heading: '1. Determinants of Demand & Supply: Shifts vs. Movements (CED 2.1–2.2)',
        content: `Distinguishing market curve shifts from movements along curves:

* **Demand Determinants (Acronym: TRIBE)**:
  * **T**: Tastes and Consumer Preferences.
  * **R**: Related Goods Prices:
    * *Substitutes*: $P_{\\text{Pepsi}} \\uparrow \\implies D_{\\text{Coke}} \\uparrow$ (Positive relationship).
    * *Complements*: $P_{\\text{Coffee}} \\uparrow \\implies D_{\\text{Creamer}} \\downarrow$ (Inverse relationship).
  * **I**: Income:
    * *Normal Good*: Income $\\uparrow \\implies D \\uparrow$ (Steak, new cars).
    * *Inferior Good*: Income $\\uparrow \\implies D \\downarrow$ (Ramen noodles, bus transit, used clothes).
  * **B**: Buyers (Number of consumers in the market).
  * **E**: Expectations of future prices ($P_{\\text{future}} \\uparrow \\implies D_{\\text{today}} \\uparrow$).
* **Supply Determinants (Acronym: ROTTEN)**:
  * **R**: Resource / Input Prices (wages, raw materials, energy).
  * **O**: Other Goods Prices (producers switch to more profitable alternatives).
  * **T**: Technology (innovations reduce costs, shifting supply right).
  * **T**: Taxes and Subsidies (per-unit tax shifts supply left/up; subsidy shifts supply right/down).
  * **E**: Expectations of suppliers.
  * **N**: Number of sellers in the industry.
* **Double Shift Rule**:
  * When both Demand and Supply shift simultaneously, **one variable (Price or Quantity) can be determined with certainty, and the other variable is INDETERMINATE!**
  * Example: Demand shifts right ($D \\rightarrow$) and Supply shifts right ($S \\rightarrow$):
    * Quantity unambiguously increases ($Q \\uparrow$).
    * Price is **indeterminate** (depends on the relative magnitude of the shifts).`
      },
      {
        heading: '2. Comprehensive Elasticity Matrix & The Total Revenue Test (CED 2.3–2.5)',
        content: `Taxonomy of all four economic elasticities tested on the AP Exam:

| Elasticity Metric | Mathematical Formula | Numerical Value | Economic Interpretation | Typical Product Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Price Elasticity of Demand ($E_d$)** | $|\\%\\Delta Q_d / \\%\\Delta P|$ | $E_d > 1$ | **Elastic**: High sensitivity to price | Restaurant meals, airline flights, designer clothes |
| **Price Elasticity of Demand ($E_d$)** | $|\\%\\Delta Q_d / \\%\\Delta P|$ | $E_d < 1$ | **Inelastic**: Low sensitivity to price | Insulin, gasoline, tap water, electricity |
| **Price Elasticity of Demand ($E_d$)** | $|\\%\\Delta Q_d / \\%\\Delta P|$ | $E_d = 1$ | **Unit Elastic**: Percentage changes are equal | Midpoint of any linear downward-sloping demand |
| **Price Elasticity of Demand ($E_d$)** | $|\\%\\Delta Q_d / \\%\\Delta P|$ | $E_d = 0$ | **Perfect Inelastic**: Vertical curve | Life-saving medicine without substitutes |
| **Price Elasticity of Demand ($E_d$)** | $|\\%\\Delta Q_d / \\%\\Delta P|$ | $E_d = \\infty$ | **Perfect Elastic**: Horizontal curve | Individual firm's demand in perfect competition |
| **Cross-Price Elasticity ($E_{XY}$)** | $\\%\\Delta Q_{d,X} / \\%\\Delta P_Y$ | $E_{XY} > 0$ | **Substitutes** | Butter and margarine, Uber and Lyft |
| **Cross-Price Elasticity ($E_{XY}$)** | $\\%\\Delta Q_{d,X} / \\%\\Delta P_Y$ | $E_{XY} < 0$ | **Complements** | Printers and ink cartridges, peanut butter and jelly |
| **Income Elasticity ($E_I$)** | $\\%\\Delta Q_d / \\%\\Delta \\text{Income}$ | $E_I > 1$ | **Luxury Normal Good** | Fine jewelry, yachts, overseas vacations |
| **Income Elasticity ($E_I$)** | $\\%\\Delta Q_d / \\%\\Delta \\text{Income}$ | $0 < E_I < 1$ | **Necessity Normal Good** | Groceries, clothing, toilet paper |
| **Income Elasticity ($E_I$)** | $\\%\\Delta Q_d / \\%\\Delta \\text{Income}$ | $E_I < 0$ | **Inferior Good** | Canned goods, used cars, laundromat services |
| **Price Elasticity of Supply ($E_s$)** | $\\%\\Delta Q_s / \\%\\Delta P$ | $E_s > 1$ / $E_s < 1$ | **Elastic / Inelastic Supply** | Primary determinant is time/flexibility to adjust inputs |`
      },
      {
        heading: '3. Consumer Surplus, Producer Surplus & Allocative Efficiency (CED 2.6)',
        content: `Welfare economics and surplus allocation:

* **Consumer Surplus (CS)**:
  * The difference between the maximum price consumers are willing to pay and the market price actually paid:
    $$CS = \\int (P_{\\text{demand}} - P_{\\text{market}}) \\, dQ$$
  * Geometrically: The triangular area **below the demand curve and above the market price**.
* **Producer Surplus (PS)**:
  * The difference between the market price received and the minimum price sellers would accept (marginal cost):
    $$PS = \\int (P_{\\text{market}} - P_{\\text{supply}}) \\, dQ$$
  * Geometrically: The triangular area **above the supply curve and below the market price**.
* **Total Economic Surplus ($CS + PS$)**:
  * Maximized in a free, competitive market equilibrium ($P_e, Q_e$).
  * **Allocative Efficiency**: Achieved when society produces the exact output where Marginal Benefit equals Marginal Cost ($MB = MC$, or $P = MC$). No deadweight loss exists!`
      },
      {
        heading: '4. Government Interventions: Price Ceilings, Price Floors & Excise Taxes (CED 2.8)',
        content: `Market distortions, deadweight loss, and tax incidence:

* **Binding Price Ceiling (Legal Maximum Price)**:
  * Binding **ONLY when set BELOW equilibrium price ($P_C < P_e$)**.
  * **Consequences**:
    * Causes chronic **shortage**: Quantity demanded exceeds quantity supplied ($Q_d > Q_s$).
    * Reduces output to $Q_s$, creating Deadweight Loss (DWL).
    * Fosters non-price rationing, deteriorated product quality, and illegal black markets.
    * Example: Rent control.
* **Binding Price Floor (Legal Minimum Price)**:
  * Binding **ONLY when set ABOVE equilibrium price ($P_F > P_e$)**.
  * **Consequences**:
    * Causes persistent **surplus**: Quantity supplied exceeds quantity demanded ($Q_s > Q_d$).
    * Reduces transactions to $Q_d$, creating Deadweight Loss.
    * Example: Minimum wage (labor surplus = unemployment among low-skilled workers).
* **Per-Unit Excise Taxes and Deadweight Loss**:
  * Imposing a per-unit tax shifts the supply curve vertically upward by the exact dollar tax amount.
  * Drives a wedge between consumer price ($P_c$) and producer net price ($P_p$).
  * **Tax Revenue** $= \\text{Tax} \\times Q_t$ (rectangular area).
  * **Deadweight Loss** $= \\frac{1}{2} \\times \\text{Tax} \\times (Q_e - Q_t)$ (triangular area).
  * *Extreme Elasticity Cases*:
    * If demand is **perfectly inelastic**, consumers pay 100% of the tax, and Deadweight Loss $= 0$!
    * If demand is **perfectly elastic**, producers pay 100% of the tax.`
      },
      {
        heading: '5. International Trade, Tariffs & Quotas (CED 2.9)',
        content: `Global market integration and protectionist trade barriers:

* **Free Trade Equilibrium at World Price ($P_w$)**:
  * If World Price is below domestic autarky price ($P_w < P_d$):
    * Domestic production falls to $Q_s$.
    * Domestic consumption expands to $Q_d$.
    * Volume of **Imports** $= Q_d - Q_s$.
    * Consumer Surplus increases massively; domestic producer surplus contracts. Total surplus increases by the gains from trade triangle!
* **Impact of a Tariff ($P_t = P_w + \\text{Tariff}$)**:
  * Increases domestic market price to $P_t$.
  * Domestic production increases from $Q_1$ to $Q_2$.
  * Domestic consumption decreases from $Q_4$ to $Q_3$.
  * Imports contract to $Q_3 - Q_2$.
  * **Government Tariff Revenue**: Center rectangle $= \\text{Tariff} \\times (Q_3 - Q_2)$.
  * **Two Deadweight Loss Triangles**:
    1. *Production Distortion DWL (Left Triangle)*: Inefficient domestic producers producing at higher cost than world price.
    2. *Consumption Distortion DWL (Right Triangle)*: Consumers who are priced out of the market by the tariff.`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating Deadweight Loss and Tax Incidence under an Excise Tax',
        topicRef: 'CED Micro 2.8 Taxes and Market Efficiency',
        question: 'In a competitive widget market, equilibrium price is $10 and equilibrium quantity is 100 units. The government imposes a $3 per-unit excise tax on producers. Consequently, consumer price rises to $12, producer net price falls to $9, and quantity falls to 80 units. Calculate: (a) Government tax revenue, (b) Consumer tax burden and Producer tax burden per unit, (c) Total Deadweight Loss (DWL), and (d) State which curve is more relatively inelastic.',
        solutionSteps: [
          'Step 1: Calculate Government Tax Revenue: $\\text{Revenue} = \\text{Tax per unit} \\times Q_t = \\$3 \\times 80 = \\$240$.',
          'Step 2: Calculate Tax Incidence per unit:',
          '  * Consumer Share: $P_c - P_e = \\$12 - \\$10 = \\$2$ per unit ($66.7\\%$ of total tax).',
          '  * Producer Share: $P_e - P_p = \\$10 - \\$9 = \\$1$ per unit ($33.3\\%$ of total tax).',
          'Step 3: Calculate Deadweight Loss: $\\text{DWL} = \\frac{1}{2} \\times \\text{Tax} \\times \\Delta Q = \\frac{1}{2} \\times \\$3 \\times (100 - 80) = \\frac{1}{2} \\times \\$3 \\times 20 = \\$30$.',
          'Step 4: Relative Elasticity Determination: Buyers bear $2 of the $3 tax while sellers bear only $1. Because the side paying more is relatively more inelastic, **Demand is more inelastic than Supply**.'
        ],
        finalAnswer: '(a) Tax Revenue = $240. (b) Buyers pay $2/unit, Sellers pay $1/unit. (c) DWL = $30. (d) Demand is more inelastic than Supply.',
        apScoringTip: 'Remember that Deadweight Loss is always a triangle: $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$. Ensure you multiply by 0.5!'
      },
      {
        title: 'International Trade and Tariff Welfare Analysis',
        topicRef: 'CED Micro 2.9 Tariffs and Quotas',
        question: 'Under autarky, Country Z consumes 50 bikes at $200. With free trade at world price $Pw = $100, domestic producers supply 20 bikes while consumers demand 80 bikes. A $30 tariff raises domestic price to $130, where domestic supply is 30 bikes and demand is 70 bikes. Calculate: (a) Free trade imports vs. tariff imports, (b) Government tariff revenue, and (c) Total Deadweight Loss caused by the tariff.',
        solutionSteps: [
          'Step 1: Free Trade Imports $= Q_d - Q_s = 80 - 20 = 60$ bikes.',
          'Step 2: Tariff Imports $= Q_d\' - Q_s\' = 70 - 30 = 40$ bikes.',
          'Step 3: Government Tariff Revenue $= \\text{Tariff} \\times \\text{Tariff Imports} = \\$30 \\times 40 = \\$1,200$.',
          'Step 4: Deadweight Loss consists of two triangles:',
          '  * Production Inefficiency Triangle: $\\frac{1}{2} \\times \\text{Tariff} \\times \\Delta Q_s = \\frac{1}{2} \\times \\$30 \\times (30 - 20) = \\$150$.',
          '  * Consumption Inefficiency Triangle: $\\frac{1}{2} \\times \\text{Tariff} \\times \\Delta Q_d = \\frac{1}{2} \\times \\$30 \\times (80 - 70) = \\$150$.',
          '  * Total $\\text{DWL} = \\$150 + \\$150 = \\$300$.'
        ],
        finalAnswer: '(a) Free trade imports = 60; Tariff imports = 40. (b) Tariff Revenue = $1,200. (c) Total DWL = $300.',
        apScoringTip: 'On AP FRQs, tariffs generate TWO distinct DWL triangles. Be sure to sum both areas!'
      }
    ],
    diagrams: [
      {
        id: 'econ_supply_demand_tax',
        title: 'Consumer Surplus, Producer Surplus & Tax Deadweight Loss',
        subtitle: 'Welfare Distribution and Deadweight Loss Triangle in Competitive Markets',
        type: 'supply_demand_graph',
        description: 'Standard competitive equilibrium diagram illustrating the top Consumer Surplus triangle, bottom Producer Surplus triangle, tax revenue rectangle, and the deadweight loss triangle created by market distortions.',
        takeaway: 'Taxes drive a wedge between buyer and seller prices, shrinking output and generating deadweight loss.'
      },
      {
        id: 'econ_trade_tariff_graph',
        title: 'International Trade: World Price, Tariff Revenue & DWL',
        subtitle: 'Protectionist Distortion of Imports and Domestic Consumer Welfare',
        type: 'trade_tariff_graph',
        description: 'Trade diagram depicting domestic supply and demand, horizontal world price line Pw, tariff price line Pt, government tariff revenue box, and the two deadweight loss triangles.',
        takeaway: 'Tariffs protect domestic producers and yield government revenue at the expense of consumer surplus and overall allocative efficiency.'
      }
    ],
    commonTraps: [
      'Confusing a "change in demand" (shift of the entire curve) with a "change in quantity demanded" (movement along the curve caused solely by a change in the good\'s own price).',
      'Believing a price ceiling set above equilibrium causes a surplus. A ceiling above equilibrium is NON-BINDING and has zero effect on market price or quantity!',
      'Assuming the entity that physically pays the tax bears the economic burden. Tax incidence depends entirely on the relative price elasticities of supply and demand.',
      'Forgetting that when Demand is unit elastic, Total Revenue is at its MAXIMUM and Marginal Revenue is equal to zero ($MR = 0$).'
    ],
    cramSheet: [
      'Demand shifts: TRIBE. Supply shifts: ROTTEN. Own price change = Movement ALONG curve.',
      'Elasticity: $E_d > 1$ Elastic (luxuries); $E_d < 1$ Inelastic (necessities). Midpoint of linear demand is unit elastic ($MR = 0$).',
      'Cross-price elasticity: Positive = Substitutes; Negative = Complements.',
      'Income elasticity: Positive = Normal ($E_I > 1$ Luxury); Negative = Inferior.',
      'Binding Price Ceiling = BELOW equilibrium (Shortage); Binding Price Floor = ABOVE equilibrium (Surplus).',
      'Tax incidence: Inelastic side pays more. DWL triangle points toward competitive equilibrium quantity.'
    ]
  },

  // =========================================================================
  // UNIT 3: PRODUCTION, COSTS & PERFECT COMPETITION
  // =========================================================================
  {
    unitId: 'u3',
    unitNumber: 3,
    title: 'Unit 3: Production, Cost, and the Perfect Competition Model',
    examWeight: '22%–25% of AP Microeconomics Exam',
    bigIdea: 'Firms minimize production costs in the short run and long run, guided by the law of diminishing returns. Profit is maximized where Marginal Revenue equals Marginal Cost ($MR = MC$), with perfect competition achieving zero economic profit in the long run.',
    keyTheorems: [
      {
        name: 'The Golden Profit Maximization Rule ($MR = MC$)',
        conditions: 'Any firm across ANY market structure (Perfect Competition, Monopoly, Monopolistic Competition, Oligopoly).',
        conclusion: 'A rational firm maximizes total economic profit (or minimizes total economic loss) by producing the exact output quantity where Marginal Revenue equals Marginal Cost ($MR = MC$), provided price covers average variable cost in the short run.',
        apTip: 'If $MR > MC$, produce more! The extra unit adds more to revenue than to cost. If $MR < MC$, produce less!'
      },
      {
        name: 'The Short-Run Shutdown Rule vs. Long-Run Exit Rule',
        conditions: 'Operating decisions for a firm experiencing short-run economic losses ($P < ATC$).',
        conclusion: 'In the short run, fixed costs are sunk. A firm should SHUT DOWN immediately if Price falls below Average Variable Cost ($P < AVC$). If $AVC \\le P < ATC$, the firm continues operating in the short run because it covers all variable costs and pays down a portion of fixed costs. In the long run, the firm exits if $P < ATC$.',
        apTip: 'The competitive firm’s short-run supply curve is the Marginal Cost ($MC$) curve ABOVE minimum $AVC$!'
      },
      {
        name: 'Long-Run Zero Economic Profit and Dual Efficiency',
        conditions: 'Perfect competition in long-run equilibrium with free entry and exit.',
        conclusion: 'Free entry and exit guarantees that economic profits equal zero in the long run ($P = \\min ATC$). The competitive firm achieves BOTH Productive Efficiency ($P = \\min ATC$) and Allocative Efficiency ($P = MC$).',
        apTip: 'Zero economic profit is NOT zero accounting profit! Normal profit covers the entrepreneur\'s implicit opportunity costs.'
      }
    ],
    formulas: [
      {
        name: 'Short-Run Cost Relationships',
        latex: 'TC = TFC + TVC, \\quad ATC = AFC + AVC, \\quad MC = \\frac{\\Delta TC}{\\Delta Q} = \\frac{\\Delta TVC}{\\Delta Q} = \\frac{W}{MP_L}',
        explanation: 'Average Fixed Cost ($AFC = TFC/Q$) continually approaches zero as output expands. $MC$ cuts through the minimum of both $AVC$ and $ATC$.'
      },
      {
        name: 'Perfect Competition Price Taker Condition ("Mr. DARP")',
        latex: 'P = MR = AR = D',
        explanation: 'Because the firm is a price taker, its demand curve is horizontal and perfectly elastic at the market price.'
      },
      {
        name: 'Economic Profit vs. Accounting Profit',
        latex: '\\text{Accounting Profit} = TR - \\text{Explicit Costs}; \\quad \\text{Economic Profit} = TR - (\\text{Explicit} + \\text{Implicit Costs})',
        explanation: 'Economic profit is always lower than accounting profit due to the inclusion of implicit opportunity costs.'
      },
      {
        name: 'Long-Run Competitive Equilibrium Condition',
        latex: 'P = MR = MC = \\min ATC',
        explanation: 'Triple equality guaranteeing zero economic profit, productive efficiency, and allocative efficiency simultaneously.'
      }
    ],
    sections: [
      {
        heading: '1. Production Functions, Marginal Product & Diminishing Returns (CED 3.1)',
        content: `Short-run physical production dynamics:

* **Short Run vs. Long Run**:
  * **Short Run**: A time horizon in which at least one input is fixed (typically plant size, factories, or heavy machinery) while other inputs (labor, raw materials) are variable.
  * **Long Run**: A time horizon in which all inputs are variable; firms can adjust plant capacity or enter/exit the industry.
* **Production Function Metrics**:
  * **Total Product ($TP$)**: Total output produced with a given quantity of inputs.
  * **Marginal Product of Labor ($MP_L$)**: The additional output produced by hiring one more worker:
    $$MP_L = \\frac{\\Delta TP}{\\Delta L}$$
  * **Average Product ($AP_L$)**: Output per unit of labor: $AP_L = TP / L$.
* **The Law of Diminishing Marginal Returns**:
  * As successive units of a variable resource (labor) are added to a fixed resource (capital), the marginal output attributable to each additional variable input eventually declines.
  * **Three Stages of Production**:
    1. *Stage 1 (Increasing Marginal Returns)*: $MP$ is rising due to specialization and division of labor.
    2. *Stage 2 (Diminishing Marginal Returns)*: $MP$ is positive but falling due to fixed equipment crowding. Rational firms operate exclusively in Stage 2!
    3. *Stage 3 (Negative Marginal Returns)*: $MP < 0$; workers get in each other's way, causing $TP$ to decline.
* **The Mathematical Link between $MP$ and $MC$**:
  * Marginal Product and Marginal Cost are exact mirror images!
  * $$MC = \\frac{W}{MP_L}$$
  * When $MP$ is at its maximum, $MC$ is at its absolute minimum!`
      },
      {
        heading: '2. Short-Run Cost Curves & Geometry (CED 3.2)',
        content: `Comprehensive short-run cost structures:

| Cost Metric | Notation | Formula | Geometric Characteristics on Cost Graph |
| :--- | :--- | :--- | :--- |
| **Total Fixed Cost** | $TFC$ | Fixed at all $Q$ | Horizontal line; must be paid even if output is zero |
| **Total Variable Cost** | $TVC$ | $TC - TFC$ | Starts at origin; increases at decreasing rate then increasing rate |
| **Total Cost** | $TC$ | $TFC + TVC$ | Upward sloping; vertical distance from $TVC$ is always $TFC$ |
| **Average Fixed Cost** | $AFC$ | $TFC / Q$ | Continually declining asymptote toward 0 ("spreading overhead") |
| **Average Variable Cost** | $AVC$ | $TVC / Q$ | U-shaped; minimum point is the short-run shutdown price |
| **Average Total Cost** | $ATC$ | $TC / Q = AFC + AVC$ | U-shaped; vertical distance to $AVC$ shrinks as $AFC \\to 0$ |
| **Marginal Cost** | $MC$ | $\\Delta TC / \\Delta Q$ | Checkmark curve; cuts through **minimum of $AVC$ and minimum of $ATC$** |`
      },
      {
        heading: '3. Long-Run Costs: Economies, Constant & Diseconomies of Scale (CED 3.3)',
        content: `Long-run envelope curve and scale efficiency:

* **Long-Run Average Total Cost ($LRATC$) Curve**:
  * The "envelope" curve consisting of the lowest points of all possible short-run $ATC$ curves for various plant sizes.
* **The Three Regions of $LRATC$**:
  1. **Economies of Scale (Increasing Returns to Scale)**:
     * $LRATC$ decreases as output increases (downward-sloping portion).
     * *Causes*: Labor specialization, bulk purchasing discounts, specialized high-efficiency robotics.
  2. **Constant Returns to Scale**:
     * $LRATC$ is flat and constant over output expansion.
  3. **Diseconomies of Scale (Decreasing Returns to Scale)**:
     * $LRATC$ increases as output increases (upward-sloping portion).
     * *Causes*: Managerial bureaucracy, communication bottlenecks, worker alienation in massive corporate conglomerates.
* **Minimum Efficient Scale (MES)**:
  * The lowest output level where a firm can minimize long-run average total cost. Determines the number of firms an industry can sustain.`
      },
      {
        heading: '4. Perfect Competition: Characteristics, Firm Demand & "Mr. DARP" (CED 3.5–3.6)',
        content: `Perfect competition market assumptions and firm price-taking behavior:

* **Core Characteristics**:
  * Very large number of buyers and sellers (thousands of firms).
  * Standardized, homogeneous product (e.g. bushel of No. 2 yellow corn, gallon of milk).
  * Price takers: Individual firm has zero market power to influence price.
  * Completely free entry and exit in the long run (no barriers).
  * Perfect information across all market participants.
* **The Firm’s Horizontal Demand Curve ("Mr. DARP")**:
  * While the market industry demand curve is downward sloping, the **individual competitive firm faces a perfectly horizontal, perfectly elastic demand curve**:
    $$P = \\text{MR} = \\text{AR} = \\text{D} \\quad (\\text{"Mr. DARP"})$$
  * Marginal Revenue ($MR$) equals price because selling one more unit adds exactly the market price to total revenue.`
      },
      {
        heading: '5. Short-Run Decisions: Profit, Loss, and the Shutdown Rule (CED 3.6)',
        content: `Decision matrix for short-run profit and loss scenarios:

* **Profit Maximization Rule**:
  * Firm produces output $q^*$ where **$MR = MC$**.
* **Three Short-Run Scenarios**:
  1. **Economic Profit ($P > ATC$)**:
     * Price exceeds average cost. Profit box $= (P - ATC) \\times q^*$.
  2. **Economic Loss ($AVC \\le P < ATC$)**:
     * Firm operates at a loss. However, staying open generates enough revenue to pay **all variable costs and part of fixed costs**!
     * Loss from staying open is less than total fixed costs.
  3. **Immediate Shutdown ($P < AVC$)**:
     * If price falls below minimum average variable cost, the firm loses all fixed costs PLUS some variable costs for every unit produced!
     * **Shutdown Rule**: If $P < \\min AVC$, shut down immediately ($q = 0$). Loss equals $TFC$.
* **Firm Short-Run Supply Curve**:
  * The firm's short-run supply curve is the portion of its **Marginal Cost ($MC$) curve that lies ABOVE minimum $AVC$**!`
      },
      {
        heading: '6. Long-Run Equilibrium Adjustments & Dual Efficiencies (CED 3.7)',
        content: `Industry entry/exit dynamic adjustments to long-run equilibrium:

* **Adjustment to Short-Run Economic Profits**:
  * Short-run profits ($P > ATC$) $\\implies$ New firms enter seeking profit $\\implies$ Market supply curve shifts right ($S \\rightarrow S_1$) $\\implies$ Market price falls until $P = \\min ATC$ $\\implies$ Economic profits erode to ZERO (normal profit).
* **Adjustment to Short-Run Economic Losses**:
  * Short-run losses ($P < ATC$) $\\implies$ Existing firms exit the industry $\\implies$ Market supply shifts left ($S \\leftarrow S_1$) $\\implies$ Market price rises until $P = \\min ATC$ $\\implies$ Remaining firms earn normal profit.
* **Dual Efficiencies in Long-Run Equilibrium**:
  1. **Productive Efficiency**: Producing goods at the lowest possible cost:
     $$P = \\min ATC$$
  2. **Allocative Efficiency**: Producing the combination of goods most valued by society:
     $$P = MC$$
  * Perfect competition is the only market structure that achieves **both productive and allocative efficiency simultaneously in the long run**!`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating Profit, Shutdown, and Breakeven Points from Cost Data',
        topicRef: 'CED Micro 3.2 Short-Run Costs and 3.6 Shutdown Rule',
        question: 'A competitive firm has Total Fixed Cost TFC = $100. Total Variable Costs at various output levels: Q=1: TVC=$40; Q=2: TVC=$70; Q=3: TVC=$90; Q=4: TVC=$120; Q=5: TVC=$160; Q=6: TVC=$210. (a) Calculate MC, AVC, and ATC for Q=1 to Q=6. (b) Find the shutdown price. (c) If market price is P = $40, find the profit-maximizing output and total economic profit. (d) What will happen in the long run?',
        solutionSteps: [
          'Step 1: Construct the cost schedule table:',
          '  * Q=1: TVC=40, TC=140, MC=40, AVC=40.0, ATC=140.0',
          '  * Q=2: TVC=70, TC=170, MC=30, AVC=35.0, ATC=85.0',
          '  * Q=3: TVC=90, TC=190, MC=20, AVC=30.0, ATC=63.3',
          '  * Q=4: TVC=120, TC=220, MC=30, AVC=30.0, ATC=55.0',
          '  * Q=5: TVC=160, TC=260, MC=40, AVC=32.0, ATC=52.0',
          '  * Q=6: TVC=210, TC=310, MC=50, AVC=35.0, ATC=51.7',
          'Step 2: Find Shutdown Price: Shutdown occurs at minimum AVC. Min AVC = $30 (at Q=3 and Q=4). Therefore, **Shutdown price is $30**.',
          'Step 3: Profit Maximization at P = $40: The firm produces where P = MR = MC. Looking at the table, MC = $40 at **Q = 5 units**.',
          '  * Check Shutdown: At Q=5, P ($40) > AVC ($32) $\\implies$ Firm operates!',
          '  * Calculate Total Revenue: $TR = P \\times Q = \\$40 \\times 5 = \\$200$.',
          '  * Calculate Total Cost: $TC = \\$260$ (or $ATC \\times Q = \\$52 \\times 5 = \\$260$).',
          '  * Calculate Profit: $\\text{Profit} = TR - TC = \\$200 - \\$260 = -\\$60$ (Loss of $60).',
          '  * Because P ($40) > AVC ($32), the firm loses $60 by staying open, which is better than losing $100 (TFC) by shutting down!',
          'Step 4: Long-run outcome: Because firms suffer economic losses, firms will exit the industry $\\implies$ Market supply shifts left $\\implies$ Price rises until $P = \\min ATC$.'
        ],
        finalAnswer: '(a) Table constructed. (b) Shutdown Price = $30. (c) Q = 5 units, Profit = -$60 (Loss). (d) Firms exit industry; supply shifts left; price rises.',
        apScoringTip: 'When asked whether a firm should stay open, always explicitly compare Price to AVC! If Price >= AVC, justify that operating covers variable costs.'
      },
      {
        title: 'Side-by-Side Market & Firm Long-Run Equilibrium Adjustment',
        topicRef: 'CED Micro 3.7 Perfect Competition Long-Run Adjustments',
        question: 'The market for avocados is in long-run competitive equilibrium. Due to a new health study, consumer demand for avocados increases permanently. Explain the short-run and long-run adjustments for: (a) Market price and quantity, (b) Individual firm price, output, and economic profit, and (c) Long-run equilibrium price and firm profit.',
        solutionSteps: [
          'Step 1: Market Demand Shock: Market demand shifts right ($D \\rightarrow D_1$).',
          'Step 2: Short-Run Market Outcome: Market price rises ($P_e \\uparrow$) and market output expands ($Q_e \\uparrow$).',
          'Step 3: Short-Run Firm Outcome: Because the firm is a price taker, its horizontal demand curve shifts up ($P_1 = MR_1$). The firm produces where $MR_1 = MC$, expanding output ($q \\uparrow$) and earning **positive economic profit ($P > ATC$)**.',
          'Step 4: Long-Run Adjustment: Positive profits attract new avocado growers (free entry). Market supply shifts right ($S \\rightarrow S_1$).',
          'Step 5: Long-Run Market & Firm Resolution: Market price drops back to original $\\min ATC$. Individual firm output returns to original $q$, and economic profits return to **ZERO (normal profit)**. Total industry output increases due to more firms in the market.'
        ],
        finalAnswer: 'Short run: Price rises, firm earns profit. Long run: New firms enter, supply shifts right, price falls back to min ATC, zero economic profit restored.',
        apScoringTip: 'Side-by-side graphs are tested on almost every AP Micro FRQ. Always label Market axes with uppercase (P, Q) and Firm axes with lowercase (P, q)!'
      }
    ],
    diagrams: [
      {
        id: 'cost_curves_graph',
        title: 'Short-Run Cost Curves: MC, ATC, AVC & AFC Geometry',
        subtitle: 'U-Shaped Cost Dynamics and Critical Shutdown & Breakeven Thresholds',
        type: 'cost_curves_graph',
        description: 'Comprehensive cost curve diagram illustrating the checkmark MC curve intersecting minimum AVC (shutdown threshold) and minimum ATC (productive efficiency / breakeven threshold), with declining asymptotic AFC.',
        takeaway: 'Marginal Cost cuts through the lowest point of both AVC and ATC. The firm shuts down if P < min AVC and breaks even at P = min ATC.'
      },
      {
        id: 'perfect_comp_side_by_side',
        title: 'Side-by-Side Market and Firm Perfectly Competitive Graphs',
        subtitle: 'Global Industry Supply/Demand Dictates Horizontal "Mr. DARP" for Price-Taking Firm',
        type: 'side_by_side_econ',
        description: 'Side-by-side graphs showing Market Supply and Demand establishing equilibrium price on the left, which crosses horizontally over to the individual firm on the right as P = MR = AR = D, intersecting MC at min ATC.',
        takeaway: 'Individual competitive firms have zero market power; free entry and exit drives price to minimum ATC with zero economic profit in the long run.'
      }
    ],
    commonTraps: [
      'Believing a firm should shut down whenever it is losing money ($P < ATC$). If $P \\ge AVC$, staying open minimizes losses by paying off part of fixed costs!',
      'Drawing the Marginal Cost ($MC$) curve without cutting through the exact minimum points of $AVC$ and $ATC$. College Board graders will deduct points if $MC$ does not intersect both minimums!',
      'Confusing Diminishing Marginal Returns with Diseconomies of Scale. Diminishing returns is a SHORT-RUN concept caused by fixed plant capacity; Diseconomies of scale is a LONG-RUN concept caused by managerial bureaucracy.',
      'Assuming zero economic profit means the business owner makes nothing. Zero economic profit means the owner earns a NORMAL profit covering all opportunity costs!'
    ],
    cramSheet: [
      'Golden rule: Produce where $MR = MC$ to maximize profit or minimize loss.',
      'Perfect competition: $P = MR = AR = D$ ("Mr. DARP").',
      'Short-run shutdown rule: If $P < \\min AVC$, shut down immediately ($q = 0$).',
      'Firm short-run supply curve = $MC$ curve above minimum $AVC$.',
      'Long-run competitive equilibrium: $P = MR = MC = \\min ATC$ (Zero economic profit).',
      'Dual efficiency: Productive ($P = \\min ATC$) and Allocative ($P = MC$).'
    ]
  },

  // =========================================================================
  // UNIT 4: IMPERFECT COMPETITION & GAME THEORY
  // =========================================================================
  {
    unitId: 'u4',
    unitNumber: 4,
    title: 'Unit 4: Imperfect Competition, Monopoly & Game Theory',
    examWeight: '15%–22% of AP Microeconomics Exam',
    bigIdea: 'Imperfect markets (monopoly, oligopoly, monopolistic competition) face downward-sloping demand curves and possess market power. Monopolies restrict output to inflate prices, generating deadweight loss, while oligopolists engage in strategic game theory.',
    keyTheorems: [
      {
        name: 'Monopoly Marginal Revenue Inequity ($MR < P$)',
        conditions: 'Single firm facing a downward-sloping market demand curve without price discrimination.',
        conclusion: 'To sell an additional unit of output, the monopolist must lower the price on that unit AND all previous units. Therefore, Marginal Revenue is strictly less than price ($MR < P$), and the $MR$ curve lies entirely below the Demand curve.',
        apTip: 'A monopoly will NEVER produce in the inelastic region of its demand curve! In the inelastic range, $MR < 0$, so reducing output increases Total Revenue and reduces Total Cost, increasing profit!'
      },
      {
        name: 'First-Degree (Perfect) Price Discrimination Paradox',
        conditions: 'Monopolist with complete information charging each buyer their exact maximum willingness to pay.',
        conclusion: 'Because the firm does not have to lower price on preceding units, $MR = \\text{Demand}$. Consumer Surplus is entirely converted into Producer Profit ($CS = 0$). Output expands to the competitive level ($Q = Q_c$), and Deadweight Loss equals zero ($DWL = 0$)!',
        apTip: 'Perfect price discrimination produces the ALLOCATIVELY EFFICIENT output quantity, but captures all economic surplus as profit!'
      },
      {
        name: 'Nash Equilibrium in Oligopolistic Game Theory',
        conditions: 'Strategic interdependence between two oligopoly firms represented by a payoff matrix.',
        conclusion: 'A Dominant Strategy is an action that yields the highest payoff regardless of what the rival chooses. A Nash Equilibrium is an outcome where neither player has an incentive to unilaterally deviate from their chosen strategy.',
        apTip: 'In a Prisoner’s Dilemma, both players have a dominant strategy to defect (e.g. price low), leading to a Nash equilibrium that yields lower joint profits than collusive cooperation.'
      }
    ],
    formulas: [
      {
        name: 'Monopoly Profit Calculation',
        latex: '\\text{Profit} = (P_M - ATC_M) \\times Q_M = TR - TC',
        explanation: 'Produce $Q_M$ where $MR = MC$, read price $P_M$ UP to the Demand curve, and read cost $ATC_M$ off the average total cost curve.'
      },
      {
        name: 'Natural Monopoly Regulation Prices',
        latex: '\\text{Fair-Return: } P = ATC \\; (\\text{Normal Profit}); \\quad \\text{Socially Optimal: } P = MC \\; (\\text{Allocative Efficiency, Loss Requires Subsidy})',
        explanation: 'Regulators enforce Fair-Return pricing to keep the utility solvent without government subsidies, or Socially Optimal pricing to eliminate DWL.'
      },
      {
        name: 'Monopolistic Competition Long-Run Tangency',
        latex: 'P = ATC \\quad \\text{at } Q_{LR} \\text{ where } MR = MC \\quad (\\text{with } P > MC)',
        explanation: 'Free entry erodes profits to zero, but tangency occurs to the left of minimum $ATC$, causing Excess Capacity.'
      }
    ],
    sections: [
      {
        heading: '1. Market Structures Taxonomy: The Four Market Models (CED 4.1)',
        content: `Comprehensive comparative taxonomy of all four AP Microeconomics market structures:

| Feature / Metric | Perfect Competition | Monopolistic Competition | Oligopoly | Pure Monopoly |
| :--- | :--- | :--- | :--- | :--- |
| **Number of Firms** | Thousands (very large) | Many (20–100) | Few dominant firms (2–5) | One single seller |
| **Type of Product** | Standardized / Identical | Differentiated (branding) | Standardized or Differentiated | Unique (no close substitutes) |
| **Control Over Price** | None (Price Taker) | Some (Price Searcher) | Substantial (Interdependent) | High (Price Maker) |
| **Barriers to Entry** | None (Free entry/exit) | Low | High (economies of scale, patents) | Very High / Impassable |
| **Demand Curve** | Horizontal ($P = MR = AR = D$) | Downward sloping (Elastic) | Kinked / Interdependent | Downward sloping (Market Demand) |
| **Marginal Revenue** | $MR = P$ | $MR < P$ | Discontinuous / Strategic | $MR < P$ (twice as steep) |
| **Long-Run Profit** | Zero ($P = \\min ATC$) | Zero ($P = ATC$, tangent) | Positive economic profit | Positive economic profit |
| **Productive Efficiency?** | **YES** ($P = \\min ATC$) | **NO** (Excess capacity) | **NO** | **NO** |
| **Allocative Efficiency?** | **YES** ($P = MC$) | **NO** ($P > MC$) | **NO** ($P > MC$) | **NO** ($P > MC$, creates DWL) |`
      },
      {
        heading: '2. Pure Monopoly: Downward Sloping Demand, Profit & Deadweight Loss (CED 4.2)',
        content: `Monopoly behavior, profit maximization, and social inefficiency:

* **Barriers to Entry (Why Monopolies Exist)**:
  1. *Control of a Key Resource* (e.g. De Beers historical diamond monopoly).
  2. *Government-Created Barriers* (patents, copyrights, exclusive public franchises).
  3. *Natural Economies of Scale* (high fixed infrastructure costs make one firm cheapest).
* **The Profit-Maximization Process**:
  1. **Find Output**: Set Marginal Revenue equal to Marginal Cost (**$MR = MC$**) to find $Q_M$.
  2. **Find Price**: Go vertically UP from $Q_M$ to the **Demand curve** to find the price consumers are willing to pay ($P_M$).
  3. **Calculate Profit**: Read $ATC$ at $Q_M$. $\\text{Economic Profit} = (P_M - ATC) \\times Q_M$.
* **Why Monopolies Cause Market Failure**:
  * Compared to competitive markets, monopolies **charge higher prices ($P_M > P_c$) and produce lower quantities ($Q_M < Q_c$)**.
  * **Allocatively Inefficient**: $P_M > MC$, meaning society values the next unit more than it costs to produce.
  * Creates **Deadweight Loss (DWL)**: Triangular area between Demand and $MC$ from $Q_M$ to competitive output $Q_c$.`
      },
      {
        heading: '3. Natural Monopoly & Public Utility Regulation (CED 4.2)',
        content: `Natural monopolies and government regulatory options:

* **Definition of Natural Monopoly**:
  * An industry where immense economies of scale exist such that a single firm can supply the entire market at a lower average cost than two or more firms (e.g. municipal water systems, electrical grid).
  * $LRATC$ declines continuously across the entire relevant market demand range!
* **Two Regulatory Pricing Dilemmas**:
  1. **Socially Optimal Price ($P = MC$)**:
     * Regulators set price where Demand intersects $MC$.
     * **Pros**: Achieves allocative efficiency and eliminates Deadweight Loss ($DWL = 0$).
     * **Cons**: Because $MC$ lies below declining $ATC$, the firm suffers **economic losses ($P < ATC$)** and will go bankrupt without an ongoing government lump-sum subsidy!
  2. **Fair-Return Price ($P = ATC$)**:
     * Regulators set price where Demand intersects $ATC$.
     * **Pros**: Firm earns normal profit (zero economic profit); no government subsidy is needed! Output is higher than unregulated monopoly ($Q_{\\text{FR}} > Q_M$).
     * **Cons**: Still causes minor deadweight loss because $P > MC$.`
      },
      {
        heading: '4. First-Degree (Perfect) Price Discrimination (CED 4.3)',
        content: `Mechanisms and welfare consequences of price discrimination:

* **Conditions Required for Price Discrimination**:
  1. Firm must possess market power (downward-sloping demand).
  2. Firm must be able to segregate buyers into groups based on their price elasticities of demand.
  3. Firm must be able to prevent resale (arbitrage).
* **Perfect Price Discrimination (1st Degree)**:
  * Monopolist charges each individual consumer their exact maximum willingness to pay.
  * **Revolutionary Effects**:
    * Since the firm doesn't lower the price for previous buyers, **$MR = \\text{Demand}$**!
    * **Consumer Surplus is completely eliminated ($CS = 0$)**; all surplus is converted into firm profit.
    * Output expands to the competitive level where $P = MC$ ($Q = Q_c$).
    * **Deadweight Loss is ZERO ($DWL = 0$)**; perfect price discrimination is allocatively efficient!`
      },
      {
        heading: '5. Monopolistic Competition: Tangency & Excess Capacity (CED 4.4)',
        content: `Monopolistic competition short-run vs. long-run dynamics:

* **Product Differentiation & Elastic Demand**:
  * Many firms sell differentiated products (real or perceived differences via advertising, packaging, location).
  * Demand is highly elastic because close substitutes exist.
* **Short Run vs. Long Run**:
  * *Short Run*: Firm can earn economic profit or incur economic losses ($MR = MC$).
  * *Long Run*: Free entry and exit shifts the firm's demand curve until **Demand is TANGENT to $ATC$** at the profit-maximizing output ($q_{\\text{LR}}$).
  * In the long run, economic profits equal **ZERO ($P = ATC$)**.
* **Excess Capacity**:
  * Because the demand curve is downward sloping, tangency with $ATC$ occurs on the **downward-sloping portion of $ATC$ (to the left of minimum $ATC$)**!
  * **Excess Capacity** $= q_{\\text{capacity}} (\\min ATC) - q_{\\text{LR}}$ (the gap between cost-minimizing output and actual output).
  * Monopolistic competitors fail to achieve productive efficiency ($P > \\min ATC$) or allocative efficiency ($P > MC$).`
      },
      {
        heading: '6. Oligopoly, Cartels & Strategic Game Theory (CED 4.5)',
        content: `Strategic interdependence and payoff matrix analysis:

* **Oligopoly Dynamics**:
  * Dominated by a few large firms whose decisions are **mutually interdependent**.
  * **Cartels and Collusion**: Explicit agreements to restrict output and fix high prices (acting like a monopoly). Cartels are inherently unstable because each individual member faces a strong incentive to cheat by expanding output!
* **$2 \\times 2$ Game Theory Payoff Matrix**:
  * Displays payoffs for two players choosing between two strategies.
  * *Convention*: Row Player payoff is listed first; Column Player payoff is listed second.
* **Key Analytical Concepts**:
  * **Dominant Strategy**: A strategy that provides a strictly better payoff regardless of the strategy chosen by the rival.
  * **Nash Equilibrium**: A set of strategies where neither player has an incentive to unilaterally change their move given what the opponent is doing.
  * **Prisoner\'s Dilemma**: A game where both players have a dominant strategy to compete/defect, resulting in an outcome that is inferior to mutual cooperation.`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating Monopoly Output, Price, Profit, and Deadweight Loss',
        topicRef: 'CED Micro 4.2 Monopoly Pricing and Welfare Inefficiency',
        question: 'A pure monopolist faces market demand P = 100 - Q and Marginal Revenue MR = 100 - 2Q. The firm has constant Marginal Cost MC = $20 and Average Total Cost ATC = $20. (a) Find the profit-maximizing output Qm and price Pm. (b) Calculate the monopoly’s total economic profit. (c) Calculate Consumer Surplus and Deadweight Loss. (d) What would price and quantity be under perfect competition?',
        solutionSteps: [
          'Step 1: Profit-maximizing output where MR = MC:',
          '  * $100 - 2Q = 20 \\implies 2Q = 80 \\implies Q_M = 40$ units.',
          'Step 2: Find Monopoly Price by projecting Qm up to Demand:',
          '  * $P_M = 100 - (40) = \\$60$.',
          'Step 3: Calculate Economic Profit: $\\text{Profit} = (P_M - ATC) \\times Q_M = (\\$60 - \\$20) \\times 40 = \\$40 \\times 40 = \\$1,600$.',
          'Step 4: Calculate Consumer Surplus: Triangular area from Pm ($60) up to choke price ($100):',
          '  * $CS = \\frac{1}{2} \\times (\\$100 - \\$60) \\times 40 = \\frac{1}{2} \\times \\$40 \\times 40 = \\$800$.',
          'Step 5: Competitive Benchmark: Under competition, P = MC $\\implies 100 - Q = 20 \\implies Q_c = 80$ units, $P_c = \\$20$.',
          'Step 6: Calculate Deadweight Loss: Triangular area between Demand and MC from Qm (40) to Qc (80):',
          '  * $\\text{DWL} = \\frac{1}{2} \\times (P_M - MC) \\times (Q_c - Q_M) = \\frac{1}{2} \\times (\\$60 - \\$20) \\times (80 - 40) = \\frac{1}{2} \\times \\$40 \\times 40 = \\$800$.'
        ],
        finalAnswer: '(a) Qm = 40, Pm = $60. (b) Profit = $1,600. (c) CS = $800, DWL = $800. (d) Competitive: Qc = 80, Pc = $20.',
        apScoringTip: 'Remember to project quantity UP to the Demand curve to find the monopoly price! Never read price off the Marginal Revenue curve.'
      },
      {
        title: 'Solving a $2 \\times 2$ Oligopoly Game Theory Payoff Matrix',
        topicRef: 'CED Micro 4.5 Oligopoly and Game Theory',
        question: 'Firm A and Firm B are competing airlines deciding whether to set High or Low ticket prices. Payoff matrix (Firm A Profit, Firm B Profit): Both High = ($100, $100); Firm A High & Firm B Low = ($20, $150); Firm A Low & Firm B High = ($150, $20); Both Low = ($50, $50). (a) Does Firm A have a dominant strategy? Explain. (b) Does Firm B have a dominant strategy? Explain. (c) Identify the Nash Equilibrium. (d) Explain why this represents a Prisoner\'s Dilemma.',
        solutionSteps: [
          'Step 1: Test Firm A’s choices for each move of Firm B:',
          '  * If Firm B chooses High: Firm A earns $100 with High or $150 with Low $\\implies$ Firm A prefers **Low** ($150 > $100).',
          '  * If Firm B chooses Low: Firm A earns $20 with High or $50 with Low $\\implies$ Firm A prefers **Low** ($50 > $20).',
          '  * Regardless of Firm B, Firm A always chooses Low $\\implies$ **Firm A\'s dominant strategy is Low**.',
          'Step 2: Test Firm B’s choices for each move of Firm A (by symmetry):',
          '  * If Firm A chooses High: Firm B prefers Low ($150 > $100).',
          '  * If Firm A chooses Low: Firm B prefers Low ($50 > $20).',
          '  * **Firm B\'s dominant strategy is Low**.',
          'Step 3: Nash Equilibrium: Both players have dominant strategies to choose Low $\\implies$ **Nash Equilibrium is (Firm A Low, Firm B Low) with payoffs ($50, $50)**.',
          'Step 4: Prisoner\'s Dilemma justification: Mutual cooperation (High, High) would yield ($100, $100), but self-interest drives both to the inferior Nash equilibrium ($50, $50).'
        ],
        finalAnswer: '(a) Yes, Firm A’s dominant strategy is Low. (b) Yes, Firm B’s dominant strategy is Low. (c) Nash Equilibrium: (Low, Low) with payoffs ($50, $50). (d) Non-cooperative Nash yields lower payoffs than collusive cooperation.',
        apScoringTip: 'On FRQs, to earn the point for explaining a dominant strategy, you MUST state the player’s best response to BOTH possible actions of the other player!'
      }
    ],
    diagrams: [
      {
        id: 'monopoly_deadweight_loss',
        title: 'Monopoly Pricing, Profit & Deadweight Loss',
        subtitle: 'Marginal Revenue Below Demand Curve Generates Economic Profit and DWL',
        type: 'monopoly_graph',
        description: 'Monopoly graph displaying downward sloping Demand, steeper MR curve, profit-maximizing quantity Qm where MR = MC, price Pm projected up to Demand, shaded profit rectangle, and the deadweight loss triangle.',
        takeaway: 'Monopolists restrict output and charge prices above marginal cost, creating economic profit and deadweight loss.'
      },
      {
        id: 'natural_monopoly_graph',
        title: 'Natural Monopoly: Fair-Return vs. Socially Optimal Regulation',
        subtitle: 'Continually Declining LRATC and Rate Regulation Dilemmas',
        type: 'natural_monopoly_graph',
        description: 'Diagram showing declining LRATC curve, low flat MC curve, unregulated monopoly output Qm, Fair-Return price P = ATC (zero economic profit), and Socially Optimal price P = MC (allocatively efficient but requiring subsidy).',
        takeaway: 'Fair-Return pricing (P = ATC) provides normal profit without subsidies; Socially Optimal pricing (P = MC) achieves allocative efficiency but requires a government subsidy.'
      },
      {
        id: 'monopolistic_comp_graph',
        title: 'Monopolistic Competition: Long-Run Tangency & Excess Capacity',
        subtitle: 'Zero Economic Profit with Downward-Sloping Demand and Excess Capacity',
        type: 'monopolistic_comp_graph',
        description: 'Graph showing highly elastic demand curve tangent to ATC at profit-maximizing output Qlr, with the excess capacity gap between Qlr and the minimum ATC capacity output Qcap.',
        takeaway: 'Monopolistic competition achieves zero economic profit in the long run but leaves excess capacity and fails allocative efficiency.'
      },
      {
        id: 'game_theory_matrix',
        title: 'Game Theory: 2x2 Payoff Matrix & Nash Equilibrium',
        subtitle: 'Strategic Interdependence, Dominant Strategies & Prisoner\'s Dilemma',
        type: 'game_theory_matrix',
        description: 'Clean vector 2x2 matrix detailing strategies for Firm A and Firm B, payoffs in each cell, and the unique Nash equilibrium highlighted in green.',
        takeaway: 'A Nash equilibrium is an outcome where neither player can improve their payoff by unilaterally changing their chosen action.'
      }
    ],
    commonTraps: [
      'Reading monopoly price off the Marginal Revenue curve. Always produce where $MR = MC$, but read the price OFF THE DEMAND CURVE!',
      'Assuming that monopolies can charge any price they want. Monopolies are constrained by consumer demand; charging too high a price reduces sales along the demand curve.',
      'Thinking a Nash equilibrium must maximize total joint profit. In a Prisoner\'s Dilemma, (Low, Low) is the Nash equilibrium even though (High, High) earns more combined profit!',
      'Believing monopolistic competition earns economic profit in the long run. Free entry erodes profits to zero ($P = ATC$), leaving excess capacity.'
    ],
    cramSheet: [
      'Monopoly: $MR < D$. Produce where $MR = MC$, go UP to Demand curve for Price.',
      'Monopolies never produce in the inelastic demand range ($MR < 0$).',
      'Natural monopoly: Fair-return is $P = ATC$; Socially optimal is $P = MC$ (needs subsidy).',
      'Perfect price discrimination: $MR = D$, $CS = 0$, $DWL = 0$ (allocatively efficient).',
      'Monopolistic competition (Long Run): $P = ATC$ (Zero profit), but has Excess Capacity.',
      'Dominant strategy: Best move regardless of opponent. Nash equilibrium: Neither player wants to deviate.'
    ]
  },

  // =========================================================================
  // UNIT 5: FACTOR MARKETS & MONOPSONY
  // =========================================================================
  {
    unitId: 'u5',
    unitNumber: 5,
    title: 'Unit 5: Factor Markets & Wage Determination',
    examWeight: '10%–13% of AP Microeconomics Exam',
    bigIdea: 'Factor markets determine input prices and employment levels. The demand for labor is a derived demand based on marginal revenue product ($MRP$), and monopsonies exert wage-setting power, suppressing wages below marginal revenue product.',
    keyTheorems: [
      {
        name: 'The Profit-Maximizing Resource Hiring Rule ($MRP = MFC$)',
        conditions: 'Firms hiring variable resources (labor) in competitive or non-competitive factor markets.',
        conclusion: 'A rational firm maximizes total profit by employing labor up to the exact quantity where Marginal Revenue Product equals Marginal Factor Cost ($MRP_L = MFC_L$). If $MRP > MFC$, the worker adds more to revenue than to cost, so hire them!',
        apTip: 'In a competitive labor market, $MFC$ equals the market wage ($MFC = W$). In a monopsony (single employer), $MFC > W$ because raising the wage to attract a worker raises wages for all existing employees!'
      },
      {
        name: 'The Derived Demand Principle',
        conditions: 'Any factor of production (labor, land, capital) utilized to produce final goods.',
        conclusion: 'The demand for an economic resource is derived directly from consumer demand for the final good that the resource helps produce. If consumer demand for electric cars increases, the demand for autoworkers will shift right!',
        apTip: 'Determinants of labor demand shift: (1) Price of final product ($P_X$), (2) Worker productivity ($MP_L$), and (3) Prices of substitute or complementary inputs.'
      },
      {
        name: 'The Least-Cost Input Optimization Rule',
        conditions: 'Firms combining multiple variable inputs (Labor $L$ and Capital $K$) to produce output.',
        conclusion: 'A firm minimizes total production costs when the marginal product per dollar spent is equalized across all inputs: $\\frac{MP_L}{P_L} = \\frac{MP_K}{P_K}$.',
        apTip: 'If $\\frac{MP_L}{P_L} > \\frac{MP_K}{P_K}$, the firm obtains more output per dollar from labor $\\implies$ Hire MORE labor and LESS capital!'
      }
    ],
    formulas: [
      {
        name: 'Marginal Revenue Product of Labor ($MRP_L$)',
        latex: 'MRP_L = MP_L \\times P_X = \\frac{\\Delta TR}{\\Delta L}',
        explanation: 'Where $MP_L$ is marginal product of labor and $P_X$ is product price in a competitive output market. $MRP_L$ is the firm’s demand curve for labor.'
      },
      {
        name: 'Marginal Factor Cost ($MFC_L$)',
        latex: 'MFC_L = \\frac{\\Delta TC}{\\Delta L} = \\frac{\\Delta \\text{Total Wage Cost}}{\\Delta L}',
        explanation: 'In competitive labor markets, $MFC = \\text{Wage}$. In monopsony, $MFC > \\text{Wage}$.'
      },
      {
        name: 'Least-Cost Input Combination Rule',
        latex: '\\frac{MP_L}{W} = \\frac{MP_K}{r}',
        explanation: 'Where $W$ is the wage rate of labor and $r$ is the rental rate of capital.'
      }
    ],
    sections: [
      {
        heading: '1. Factor Markets vs. Product Markets: The Circular Flow Inversion (CED 5.1)',
        content: `Understanding the circular flow reversal in factor markets:

* **Product Markets vs. Factor Markets**:
  * *Product Markets*: Households are buyers (Demand); Firms are sellers (Supply).
  * *Factor Markets (Labor, Capital, Land)*: **Firms are buyers (Demand)**; **Households/Workers are sellers (Supply)**.
* **Derived Demand**:
  * Demand for labor is not direct; it is derived from the demand for the good or service that labor creates.
  * *Example*: If consumer demand for smartphones increases, price rises $\\implies$ Marginal Revenue Product ($MRP = MP \\times P$) increases $\\implies$ Labor demand shifts right ($D_L \\rightarrow$)!`
      },
      {
        heading: '2. Marginal Revenue Product ($MRP$) & Marginal Factor Cost ($MFC$) (CED 5.2)',
        content: `Labor productivity and hiring thresholds:

* **Marginal Revenue Product ($MRP_L$)**:
  * The extra revenue generated by employing one additional unit of labor:
    $$MRP_L = MP_L \\times P_X$$
  * *Shape*: Downward-sloping due to the Law of Diminishing Marginal Returns ($MP_L \\downarrow$).
  * **The $MRP_L$ curve IS the firm’s demand curve for labor!**
* **Shifters of the Labor Demand Curve**:
  1. **Change in Product Price ($P_X$)**: If product price rises, $MRP$ shifts right.
  2. **Change in Worker Productivity ($MP_L$)**: Technological tools or human capital training make workers more productive, shifting $MRP$ right.
  3. **Prices of Other Resources**:
     * *Substitute Resources*: If machines become cheaper, substitution effect reduces labor demand, but output effect may increase labor demand.
     * *Complementary Resources*: Cheaper machinery increases labor demand.
* **Marginal Factor Cost ($MFC_L$)**:
  * The additional cost incurred by hiring one more worker:
    $$MFC_L = \\frac{\\Delta \\text{Total Labor Cost}}{\\Delta L}$$`
      },
      {
        heading: '3. Perfectly Competitive Labor Markets (CED 5.3)',
        content: `Wage-taking behavior in competitive factor markets:

* **Characteristics**:
  * Many firms competing to hire workers with identical skills.
  * Many independent workers supplying labor.
  * Free mobility and perfect wage information.
* **Individual Firm as Wage Taker**:
  * The firm can hire as many workers as it wants at the market-determined equilibrium wage ($W_c$).
  * **Supply of Labor to the Firm is a HORIZONTAL, perfectly elastic line**:
    $$S_L = MFC_L = \\text{Wage } (W)$$
* **Profit-Maximizing Hiring Rule**:
  * Hire workers up to the point where:
    $$MRP_L = MFC_L = W$$`
      },
      {
        heading: '4. Monopsony: The Single Buyer of Labor (CED 5.3)',
        content: `Monopsony power, wage suppression, and factor deadweight loss:

* **Definition of Monopsony**:
  * A factor market with a **single employer** of labor (e.g. a remote coal mining company town, a specialized hospital in a rural county).
* **Why $MFC$ Lies ABOVE the Labor Supply Curve ($MFC > S_L$)**:
  * The monopsonist faces the upward-sloping market supply curve of labor.
  * To hire an additional worker, the firm must raise the wage rate, and **must pay that higher wage to ALL previously hired workers as well**!
  * Therefore, the marginal cost of the extra worker exceeds the wage paid.
* **Monopsonistic Hiring Decision (Two-Step Process)**:
  1. **Determine Quantity**: Find employment level where **$MRP = MFC$** (yields $Q_m$).
  2. **Determine Wage**: Go vertically DOWN from $Q_m$ to the **Labor Supply Curve ($S_L$)** to read the wage paid ($W_m$).
* **Monopsony Inefficiency Outcome**:
  * Monopsonies **hire fewer workers ($Q_m < Q_c$) and pay a lower wage ($W_m < W_c$)** than a competitive labor market.
  * Creates Deadweight Loss by under-allocating labor resources.`
      },
      {
        heading: '5. Multi-Input Optimization & The Least-Cost Rule (CED 5.4)',
        content: `Cost minimization across multiple productive factors:

* **The Least-Cost Rule**:
  * A firm operating with multiple inputs (Labor $L$ and Capital $K$) minimizes the total cost of producing any given output level when:
    $$\\frac{MP_L}{P_L} = \\frac{MP_K}{P_K} \\quad \\left(\\text{or } \\frac{MP_L}{W} = \\frac{MP_K}{r}\\right)$$
* **Adjustment Dynamics on the AP Exam**:
  * If $\\frac{MP_L}{P_L} > \\frac{MP_K}{P_K}$: The firm gets more output per dollar spent on labor. **Hire MORE Labor and LESS Capital!** (As $L \\uparrow$, $MP_L \\downarrow$ until equality is restored).
  * If $\\frac{MP_L}{P_L} < \\frac{MP_K}{P_K}$: The firm gets more output per dollar from capital. **Hire MORE Capital and LESS Labor!**`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating Optimal Labor Hiring Quantity from Production and Wage Data',
        topicRef: 'CED Micro 5.2 Marginal Revenue Product and Labor Demand',
        question: 'A competitive firm sells chairs for $10 each in a competitive product market. The market wage for carpenters is $60 per day. Production schedule: 0 workers = 0 chairs; 1 worker = 10 chairs; 2 = 18; 3 = 24; 4 = 28; 5 = 30; 6 = 31. (a) Calculate MP and MRP for each worker. (b) How many workers should the firm hire to maximize profit? (c) If product price falls to $5, how many workers will the firm hire?',
        solutionSteps: [
          'Step 1: Calculate Marginal Product (MP) for each worker:',
          '  * Worker 1: $10 - 0 = 10$ chairs; Worker 2: $18 - 10 = 8$; Worker 3: $24 - 18 = 6$; Worker 4: $28 - 24 = 4$; Worker 5: $30 - 28 = 2$; Worker 6: $31 - 30 = 1$.',
          'Step 2: Calculate Marginal Revenue Product ($MRP = MP \\times P = MP \\times \\$10$):',
          '  * Worker 1: $10 \\times \\$10 = \\$100$; Worker 2: $8 \\times \\$10 = \\$80$; Worker 3: $6 \\times \\$10 = \\$60$; Worker 4: $4 \\times \\$10 = \\$40$; Worker 5: $2 \\times \\$10 = \\$20$; Worker 6: $1 \\times \\$10 = \\$10$.',
          'Step 3: Compare $MRP$ to market wage ($W = \\$60$):',
          '  * Worker 1: $\\$100 > \\$60$ (Hire); Worker 2: $\\$80 > \\$60$ (Hire); Worker 3: $\\$60 = \\$60$ (Hire); Worker 4: $\\$40 < \\$60$ (Do NOT hire).',
          '  * Firm should hire **3 workers**.',
          'Step 4: Product price falls to $5 ($MRP = MP \\times \\$5$):',
          '  * Worker 1: $10 \\times 5 = \\$50 < \\$60$ $\\implies$ The firm will hire **0 workers** (or shut down) because no worker produces $60 in revenue!'
        ],
        finalAnswer: '(a) MP and MRP calculated. (b) Hire 3 workers. (c) Hire 0 workers (MRP < Wage).',
        apScoringTip: 'Always compare MRP to MFC (Wage). Never evaluate hiring based on Marginal Product alone!'
      },
      {
        title: 'Applying the Least-Cost Input Rule between Labor and Capital',
        topicRef: 'CED Micro 5.4 Least-Cost Combination of Resources',
        question: 'A manufacturing firm employs labor and capital. The wage rate is PL = $20 per hour, and the rental rate of capital is PK = $50 per hour. Currently, the marginal product of labor is MPL = 40 units, and the marginal product of capital is MPK = 150 units. (a) Is the firm currently minimizing costs? Explain. (b) What adjustment in labor and capital should the firm make to minimize costs?',
        solutionSteps: [
          'Step 1: Calculate Marginal Product per dollar for each input:',
          '  * For Labor: $\\frac{MP_L}{P_L} = \\frac{40}{\\$20} = 2.0$ units per dollar.',
          '  * For Capital: $\\frac{MP_K}{P_K} = \\frac{150}{\\$50} = 3.0$ units per dollar.',
          'Step 2: Evaluate the Least-Cost condition: $\\frac{MP_L}{P_L} = 2.0 \\ne 3.0 = \\frac{MP_K}{P_K}$.',
          '  * The firm is **NOT minimizing costs** because the marginal product per dollar spent on capital exceeds that of labor ($3.0 > 2.0$).',
          'Step 3: Determine adjustments: To minimize costs, the firm should spend more dollars where it gets more output per dollar:',
          '  * The firm should **employ MORE Capital and LESS Labor**.',
          '  * As Capital increases, $MP_K$ will fall; as Labor decreases, $MP_L$ will rise until equality is achieved.'
        ],
        finalAnswer: '(a) No, MPL/PL (2.0) < MPK/PK (3.0). (b) Employ more Capital and less Labor.',
        apScoringTip: 'Remember: "Buy more of the one with the higher MP per dollar!" Always state the fractions explicitly.'
      }
    ],
    diagrams: [
      {
        id: 'factor_market_graph',
        title: 'Labor Factor Market: Competitive vs. Monopsony Hiring',
        subtitle: 'Marginal Revenue Product (MRP) vs. Marginal Factor Cost (MFC)',
        type: 'factor_market_graph',
        description: 'Two-panel diagram comparing competitive labor market equilibrium (horizontal SL = MFC = Wc) against a monopsony labor market where the MFC curve lies above the upward-sloping labor supply curve, resulting in wage suppression Wm < MRP.',
        takeaway: 'Competitive firms pay W = MRP; Monopsonies restrict hiring where MRP = MFC and pay a suppressed wage Wm off the labor supply curve.'
      }
    ],
    commonTraps: [
      'Confusing factor markets with product markets: In factor markets, INDIVIDUALS supply labor, and FIRMS demand labor!',
      'Reading the monopsony wage off the $MRP$ curve. The monopsonist determines quantity where $MRP = MFC$, but pays the wage off the SUPPLY curve ($S_L$)!',
      'Thinking derived demand depends on worker happiness. Derived demand depends entirely on consumer demand for the FINAL PRODUCT that workers produce.',
      'Assuming that a minimum wage in a monopsony always causes unemployment. A moderate minimum wage in a monopsony can actually INCREASE employment by neutralizing the upward-sloping $MFC$ curve!'
    ],
    cramSheet: [
      'Derived Demand: Demand for labor comes from consumer demand for the final product.',
      '$MRP = MP \\times P$; Hire where $MRP = MFC$.',
      'Competitive labor market: $S_L = MFC = \\text{Wage}$ (horizontal line).',
      'Monopsony: Single employer; $MFC$ curve lies strictly ABOVE labor supply curve ($S_L$).',
      'Monopsony hires where $MRP = MFC$ and pays wage $W_m$ off $S_L$ curve ($W_m < MRP$).',
      'Least-cost rule: $\\frac{MP_L}{P_L} = \\frac{MP_K}{P_K}$. Spend more on input with higher $MP/P$.'
    ]
  },

  // =========================================================================
  // UNIT 6: MARKET FAILURE & THE ROLE OF GOVERNMENT
  // =========================================================================
  {
    unitId: 'u6',
    unitNumber: 6,
    title: 'Unit 6: Market Failure, Externalities & Public Goods',
    examWeight: '8%–13% of AP Microeconomics Exam',
    bigIdea: 'Free markets fail when private costs/benefits diverge from social costs/benefits (externalities) or when goods are non-excludable and non-rival (public goods). Government intervention through taxes, subsidies, and regulation can restore social efficiency.',
    keyTheorems: [
      {
        name: 'Negative Externalities and Free Market Overproduction',
        conditions: 'Production generates uncompensated spillover costs on third parties (e.g. factory industrial pollution).',
        conclusion: 'Marginal Social Cost exceeds Marginal Private Cost ($MSC = MPC + \\text{MEC} > MPC$). The unregulated market overproduces ($Q_{\\text{mkt}} > Q_{\\text{opt}}$) and charges too low a price, creating deadweight loss. Government remedies: Levying a per-unit **Pigouvian Tax equal to marginal external cost** shifts $MPC$ up to $MSC$, internalizing the externality.',
        apTip: 'The deadweight loss triangle ALWAYS points toward the socially optimal quantity ($Q_{\\text{opt}}$), resembling an arrowhead pointing to where output ought to be!'
      },
      {
        name: 'Positive Externalities and Free Market Underproduction',
        conditions: 'Consumption generates uncompensated spillover benefits for third parties (e.g. vaccines, higher education).',
        conclusion: 'Marginal Social Benefit exceeds Marginal Private Benefit ($MSB = MPB + \\text{MEB} > MPB$). The unregulated market underproduces ($Q_{\\text{mkt}} < Q_{\\text{opt}}$), generating deadweight loss. Government remedies: Providing a per-unit **Pigouvian Subsidy equal to marginal external benefit** shifts $MPB$ up to $MSB$.',
        apTip: 'Positive externalities ALSO create deadweight loss because mutually beneficial transactions are being forgone!'
      },
      {
        name: 'Public Goods and the Free-Rider Dilemma',
        conditions: 'Goods characterized by Non-Excludability (cannot prevent non-payers) and Non-Rivalry in consumption.',
        conclusion: 'Because individuals can enjoy public goods without paying (the Free-Rider problem), private markets fail to supply them profitably. The government must finance public goods via taxation up to where Marginal Social Benefit equals Marginal Social Cost ($MSB = MSC$).',
        apTip: 'Examples of pure public goods: National defense, streetlights, lighthouses, disease eradication.'
      }
    ],
    formulas: [
      {
        name: 'Social Cost and Benefit Equations',
        latex: 'MSC = MPC + \\text{MEC}, \\quad MSB = MPB + \\text{MEB}',
        explanation: 'Where $MEC$ is marginal external cost (negative externality) and $MEB$ is marginal external benefit (positive externality).'
      },
      {
        name: 'Socially Optimal Output Condition',
        latex: 'MSB = MSC \\implies \\text{Allocative Efficiency (Zero DWL)}',
        explanation: 'Competitive free markets achieve social efficiency if and only if external costs and external benefits are zero.'
      },
      {
        name: 'Gini Coefficient Formula',
        latex: 'G = \\frac{\\text{Area } A}{\\text{Area } A + \\text{Area } B}',
        explanation: 'Where Area A is between the 45-degree line of perfect equality and the Lorenz curve, and Area B is below the Lorenz curve. G = 0 is perfect equality; G = 1 is total inequality.'
      }
    ],
    sections: [
      {
        heading: '1. Social Allocative Efficiency: MSB = MSC Benchmark (CED 6.1)',
        content: `Welfare benchmark and market failure definitions:

* **Social Allocative Efficiency**:
  * Society maximizes net social welfare when output is produced where:
    $$\\text{Marginal Social Benefit } (MSB) = \\text{Marginal Social Cost } (MSC)$$
* **Market Failure**:
  * Any situation where the unregulated free market fails to allocate resources efficiently, resulting in $MSB \\ne MSC$ and generating Deadweight Loss.
  * **Primary Causes of Market Failure**:
    1. *Externalities* (spillover costs or benefits).
    2. *Public Goods and Common Resources* (free-rider problem and tragedy of the commons).
    3. *Imperfect Competition* (monopolies restricting output).
    4. *Asymmetric Information* (adverse selection and moral hazard).`
      },
      {
        heading: '2. Negative Externalities (Spillover Costs) & Pigouvian Taxes (CED 6.2)',
        content: `Negative externalities and corrective market policy:

* **Characteristics**:
  * Production imposes third-party costs (pollution, toxic waste, second-hand smoke).
  * **Marginal Social Cost exceeds Marginal Private Cost**:
    $$MSC = MPC + \\text{MEC} > MPC$$
  * Free market produces where $MPC = MPB \\implies Q_{\\text{mkt}}$.
  * Social optimum is where $MSC = MSB \\implies Q_{\\text{opt}}$.
  * **Outcome**: Free market **OVERPRODUCES ($Q_{\\text{mkt}} > Q_{\\text{opt}}$)** and underprices.
* **Deadweight Loss**:
  * The triangle formed between $MSC$ and $MSB$ over the excess production interval from $Q_{\\text{opt}}$ to $Q_{\\text{mkt}}$.
  * **The DWL triangle ALWAYS points leftward like an arrowhead toward $Q_{\\text{opt}}$!**
* **Government Correction**:
  * Impose a per-unit **Pigouvian Tax** exactly equal to the Marginal External Cost (vertical distance between $MSC$ and $MPC$).
  * Shifts $MPC$ upward to align with $MSC$, internalizing the externality.`
      },
      {
        heading: '3. Positive Externalities (Spillover Benefits) & Pigouvian Subsidies (CED 6.2)',
        content: `Positive externalities and public support:

* **Characteristics**:
  * Consumption confers third-party benefits (vaccines, education, scientific research).
  * **Marginal Social Benefit exceeds Marginal Private Benefit**:
    $$MSB = MPB + \\text{MEB} > MPB$$
  * Free market produces where $MPC = MPB \\implies Q_{\\text{mkt}}$.
  * Social optimum is where $MSC = MSB \\implies Q_{\\text{opt}}$.
  * **Outcome**: Free market **UNDERPRODUCES ($Q_{\\text{mkt}} < Q_{\\text{opt}}$)**.
* **Deadweight Loss**:
  * The triangle between $MSB$ and $MSC$ over the under-produced output from $Q_{\\text{mkt}}$ to $Q_{\\text{opt}}$.
  * The DWL triangle points rightward toward $Q_{\\text{opt}}$!
* **Government Correction**:
  * Provide a per-unit **Pigouvian Subsidy** equal to the Marginal External Benefit (vertical distance between $MSB$ and $MPB$).
  * Shifts $MPB$ upward to align with $MSB$, restoring social efficiency.`
      },
      {
        heading: '4. The Four-Quadrant Taxonomy of Economic Goods (CED 6.3)',
        content: `Classification of economic goods based on Rivalry and Excludability:

| Good Category | Excludable in Consumption? | Rival in Consumption? | Classic Examples | Primary Market Failure / Policy Remedy |
| :--- | :--- | :--- | :--- | :--- |
| **Private Goods** | **YES** (can prevent non-payers) | **YES** (one person\'s use diminishes another) | Pizza, laptops, haircuts, clothing | Free markets allocate efficiently without failure |
| **Public Goods** | **NO** (cannot exclude non-payers) | **NO** (one person\'s use doesn\'t diminish) | National defense, streetlights, lighthouses | **Free-Rider Problem** $\\implies$ Government tax financing |
| **Common Resources** | **NO** (open access) | **YES** (overuse depletes resource) | Ocean fisheries, grazing pastures, clean air | **Tragedy of the Commons** $\\implies$ Quotas, property rights |
| **Club / Toll Goods** | **YES** (membership/fee) | **NO** (until congested) | Cable TV, toll bridges, movie theaters | Natural monopoly $\\implies$ Regulated user pricing |

* **The Free-Rider Problem**: Because individuals cannot be excluded from enjoying public goods, they refuse to pay voluntary prices, resulting in private market under-provision.
* **The Tragedy of the Commons**: When common resources are rival but non-excludable, individuals have an incentive to over-exploit them before others do (e.g. overfishing). Solution: Assign private property rights (Coase Theorem), issue tradable fishing quotas, or impose government permits.`
      },
      {
        heading: '5. Taxes & Subsidies: Per-Unit vs. Lump-Sum Effects on Firm Curves (CED 6.4)',
        content: `CRITICAL AP EXAM DISTINCTION: How tax mechanisms affect cost curves and output:

| Tax / Subsidy Type | Cost Curves Affected | Does Marginal Cost ($MC$) Shift? | Does Output ($Q$) Change? | Does Price ($P$) Change? |
| :--- | :--- | :--- | :--- | :--- |
| **Per-Unit Tax** | Variable cost $\\implies$ Shifts **$MC, AVC, ATC$ UP** | **YES** ($MC$ shifts up) | **YES: Output decreases ($Q \\downarrow$)** | **YES: Price increases ($P \\uparrow$)** |
| **Lump-Sum Tax** | Fixed cost $\\implies$ Shifts **$ATC, AFC$ UP** | **NO** ($MC$ is unaffected) | **NO: Output remains unchanged** | **NO: Price remains unchanged** |
| **Per-Unit Subsidy** | Variable benefit $\\implies$ Shifts **$MC, AVC, ATC$ DOWN** | **YES** ($MC$ shifts down) | **YES: Output increases ($Q \\uparrow$)** | **YES: Price decreases ($P \\downarrow$)** |
| **Lump-Sum Subsidy** | Fixed benefit $\\implies$ Shifts **$ATC, AFC$ DOWN** | **NO** ($MC$ is unaffected) | **NO: Output remains unchanged** | **NO: Price remains unchanged** |

* **AP Exam Gold Standard Rule**: Because profit-maximizing output is determined where $MR = MC$, a **lump-sum tax changes fixed costs only, leaving $MC$ unchanged**. Therefore, the firm\'s profit-maximizing output and price DO NOT CHANGE in the short run (only firm profit decreases)!`
      },
      {
        heading: '6. Income Inequality, The Lorenz Curve & Tax Progressivity (CED 6.5)',
        content: `Measuring income distribution and government taxation structures:

* **The Lorenz Curve**:
  * A graphical representation of income distribution that plots cumulative percentage of population against cumulative percentage of total income earned.
  * **45-Degree Diagonal Line**: Line of Perfect Income Equality (e.g. bottom 20% of population earns 20% of income).
  * The further the Lorenz curve sags downward away from the diagonal line, the **greater the degree of income inequality**.
* **The Gini Coefficient ($G$)**:
  * A mathematical index of inequality derived from the Lorenz curve:
    $$G = \\frac{\\text{Area } A}{\\text{Area } A + \\text{Area } B}$$
  * $G = 0$: Perfect Equality (Lorenz curve lies on the 45-degree line).
  * $G = 1$: Complete Inequality (one individual captures 100% of national income).
* **Tax Structures & Income Distribution**:
  1. **Progressive Tax**: Average tax rate increases as income increases (e.g. US federal income tax brackets). Shifts the after-tax Lorenz curve closer to the 45-degree line!
  2. **Proportional (Flat) Tax**: Average tax rate remains constant across all income levels.
  3. **Regressive Tax**: Average tax rate decreases as income increases (e.g. sales taxes and excise taxes consume a larger percentage of a poor person\'s income than a rich person\'s).`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating the Optimal Pigouvian Tax and DWL for a Negative Externality',
        topicRef: 'CED Micro 6.2 Externalities and Pigouvian Taxation',
        question: 'A chemical factory produces fertilizer with private marginal cost MPC = 10 + Q. Pollution imposes a marginal external damage of MEC = $20 per unit. Market demand is P = 100 - Q. (a) Find free market equilibrium quantity Qmkt and price Pmkt. (b) Find the socially optimal quantity Qopt and price Popt. (c) State the exact per-unit Pigouvian tax required to internalize the externality. (d) Calculate the Deadweight Loss eliminated by the tax.',
        solutionSteps: [
          'Step 1: Free market equilibrium where MPC = MPB (Demand):',
          '  * $10 + Q = 100 - Q \\implies 2Q = 90 \\implies Q_{\\text{mkt}} = 45$ units.',
          '  * $P_{\\text{mkt}} = 100 - 45 = \\$55$.',
          'Step 2: Marginal Social Cost: $MSC = MPC + \\text{MEC} = (10 + Q) + 20 = 30 + Q$.',
          'Step 3: Socially optimal equilibrium where MSC = MSB (Demand):',
          '  * $30 + Q = 100 - Q \\implies 2Q = 70 \\implies Q_{\\text{opt}} = 35$ units.',
          '  * $P_{\\text{opt}} = 100 - 35 = \\$65$.',
          'Step 4: Notice that unregulated market overproduces: $45 > 35$ units.',
          'Step 5: Required Pigouvian Tax: The per-unit tax must equal Marginal External Cost: **$20 per unit**.',
          'Step 6: Calculate Deadweight Loss eliminated: $\\text{DWL} = \\frac{1}{2} \\times \\text{MEC} \\times (Q_{\\text{mkt}} - Q_{\\text{opt}}) = \\frac{1}{2} \\times \\$20 \\times (45 - 35) = \\frac{1}{2} \\times \\$20 \\times 10 = \\$100$.'
        ],
        finalAnswer: '(a) Qmkt = 45, Pmkt = $55. (b) Qopt = 35, Popt = $65. (c) Per-unit tax = $20. (d) Eliminated DWL = $100.',
        apScoringTip: 'The Pigouvian tax must equal the vertical distance between MSC and MPC at the socially optimal output!'
      },
      {
        title: 'Analyzing the Differential Impact of Per-Unit vs. Lump-Sum Taxes on a Monopolist',
        topicRef: 'CED Micro 6.4 Government Taxes on Market Structures',
        question: 'A pharmaceutical monopolist is producing output where MR = MC. The government is considering two tax proposals: (Option 1) A $5 per-unit excise tax, or (Option 2) A $5,000 lump-sum annual franchise tax. For each option, explain the effect on: (a) Marginal Cost, (b) Output and Price, and (c) Firm Economic Profit.',
        solutionSteps: [
          'Step 1: Option 1 (Per-Unit Tax):',
          '  * Marginal Cost: Per-unit tax is a variable cost $\\implies$ **MC shifts UP** by $5.',
          '  * Output and Price: The new intersection of MR = MC occurs at a lower quantity $\\implies$ **Output decreases ($Q \\downarrow$)** and **Price increases ($P \\uparrow$)**.',
          '  * Profit: Total revenue falls and costs rise $\\implies$ **Profit decreases**.',
          'Step 2: Option 2 (Lump-Sum Tax):',
          '  * Marginal Cost: Lump-sum tax is a fixed cost $\\implies$ **MC is COMPLETELY UNAFFECTED** (does not shift).',
          '  * Output and Price: Because profit-maximizing condition $MR = MC$ is unchanged $\\implies$ **Output ($Q$) and Price ($P$) DO NOT CHANGE**!',
          '  * Profit: Fixed costs rise (ATC shifts up) $\\implies$ **Profit decreases** by exactly $5,000.'
        ],
        finalAnswer: 'Per-unit tax: MC rises, Q falls, P rises, profit falls. Lump-sum tax: MC unchanged, Q and P unchanged, profit falls.',
        apScoringTip: 'This exact comparison appears repeatedly on AP Micro exams. Memorize: Lump-sum taxes DO NOT shift Marginal Cost or change output in the short run!'
      }
    ],
    diagrams: [
      {
        id: 'externality_graph',
        title: 'Negative Externality: Marginal Social Cost & Pigouvian Tax',
        subtitle: 'Market Overproduction and Pigouvian Correction of Environmental Spillovers',
        type: 'externality_graph',
        description: 'Negative externality graph illustrating MSC curve shifted above private MPC, free market output Qmkt, socially optimal output Qopt, Pigouvian tax equal to external cost, and the DWL triangle pointing toward Qopt.',
        takeaway: 'Unregulated markets overproduce goods with negative externalities. A per-unit Pigouvian tax equal to marginal external cost restores allocative efficiency.'
      },
      {
        id: 'lorenz_curve_gini',
        title: 'Income Inequality: Lorenz Curve & Gini Coefficient Calculation',
        subtitle: 'Cumulative Income Distribution and Quantifying Societal Disparity',
        type: 'lorenz_curve_gini',
        description: 'Diagram depicting the 45-degree line of perfect income equality, sagging Lorenz curve, shaded Area A and Area B, and the Gini coefficient formula G = A / (A + B).',
        takeaway: 'The Gini coefficient measures inequality between 0 (perfect equality) and 1 (complete inequality). Progressive taxes pull the Lorenz curve closer to the 45-degree line.'
      }
    ],
    commonTraps: [
      'Assuming positive externalities do not create deadweight loss. Underproducing a good with positive spillovers creates deadweight loss because mutually beneficial social transactions are missed!',
      'Confusing the direction of the Deadweight Loss triangle. The DWL triangle ALWAYS points like an arrowhead toward the socially optimal quantity ($Q_{\\text{opt}}$).',
      'Believing public schooling is a pure public good. Public schools are excludable and rival; education is a private good with massive POSITIVE EXTERNALITIES.',
      'Thinking a lump-sum tax causes a firm to reduce its output in the short run. A lump-sum tax increases fixed costs only; because $MC$ is unaffected, output remains UNCHANGED!'
    ],
    cramSheet: [
      'Negative externality: $MSC > MPC$. Free market OVERPRODUCES. Fix with Per-Unit Pigouvian Tax.',
      'Positive externality: $MSB > MPB$. Free market UNDERPRODUCES. Fix with Per-Unit Pigouvian Subsidy.',
      'DWL triangle always points toward the socially optimal output ($Q_{\\text{opt}}$).',
      'Public goods: Non-rival & Non-excludable (Free-Rider problem).',
      'Common resources: Rival & Non-excludable (Tragedy of the Commons).',
      'Per-unit tax shifts $MC \\implies Q \\downarrow, P \\uparrow$. Lump-sum tax shifts only $ATC \\implies Q$ and $P$ unchanged.',
      'Gini Coefficient: $G = \\frac{A}{A + B}$. $0 = \\text{Equality}, 1 = \\text{Total Inequality}$.'
    ]
  }
];
