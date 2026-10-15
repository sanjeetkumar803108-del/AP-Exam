import { APUnitNote } from './types';

export const AP_MACROECONOMICS_NOTES: APUnitNote[] = [
  // =========================================================================
  // UNIT 1: BASIC ECONOMIC CONCEPTS, PPC & SCARCITY
  // =========================================================================
  {
    unitId: 'u1',
    unitNumber: 1,
    title: 'Unit 1: Basic Economic Concepts, PPC & Comparative Advantage',
    examWeight: '5%–10% of AP Macroeconomics Exam',
    bigIdea: 'Macroeconomics examines economy-wide phenomena such as growth, inflation, and unemployment. Foundational trade-offs are modeled by the Production Possibilities Curve (PPC), and international trade is governed by comparative advantage and the terms of trade.',
    keyTheorems: [
      {
        name: 'The Law of Increasing Opportunity Cost and Concave PPC',
        conditions: 'Resources (land, labor, capital) are specialized and not perfectly adaptable between consumer goods and capital goods.',
        conclusion: 'As an economy increases the production of one good, the opportunity cost of producing additional units rises. This gives the Production Possibilities Curve (PPC) its bowed-out (concave to the origin) shape.',
        apTip: 'If resources are completely interchangeable and adaptable (e.g. producing calzones vs. pizzas), the PPC is a STRAIGHT LINE with constant opportunity costs!'
      },
      {
        name: 'Comparative Advantage and Mutually Beneficial Terms of Trade',
        conditions: 'Two nations producing two distinct goods with differing opportunity costs.',
        conclusion: 'A nation has an Absolute Advantage if it produces more total output with the same resources. A nation has a Comparative Advantage if it produces a good at a LOWER domestic opportunity cost. Mutually beneficial trade occurs when the terms of trade lie strictly between both nations’ domestic opportunity costs.',
        apTip: 'Mnemonic for opportunity cost: For OUTPUT problems ("OOO" = Output: Other goes Over). For INPUT/Time problems ("IOU" = Input: Other goes Under).'
      },
      {
        name: 'Capital Goods vs. Consumer Goods and Long-Run Economic Growth',
        conditions: 'An economy allocating its scarce productive capacity between consumer goods and capital goods.',
        conclusion: 'Producing more capital goods (factories, machinery, technology) today expands future productive capacity, causing the PPC and Long-Run Aggregate Supply (LRAS) to shift outward further and faster over time than focusing on consumer goods.',
        apTip: 'On the AP Exam, outward shifts of the PPC represent the exact same macroeconomic phenomenon as rightward shifts of the LRAS curve!'
      }
    ],
    formulas: [
      {
        name: 'Opportunity Cost Ratio (Output Method)',
        latex: '\\text{Opportunity Cost of Good A} = \\frac{\\text{Quantity of Good B forgone}}{\\text{Quantity of Good A produced}} \\quad (\\text{"Other Over"})',
        explanation: 'For output tables (tons of wheat, cars per year), place the alternative good in the numerator and the produced good in the denominator.'
      },
      {
        name: 'Opportunity Cost Ratio (Input Method)',
        latex: '\\text{Opportunity Cost of Good A} = \\frac{\\text{Hours/Resources to produce Good A}}{\\text{Hours/Resources to produce Good B}} \\quad (\\text{"Other Under"})',
        explanation: 'For input tables (labor hours or acres needed to produce 1 unit), place the selected good in the numerator and the alternative in the denominator.'
      },
      {
        name: 'Terms of Trade Range',
        latex: '\\text{Exporter\'s Domestic Cost} < \\text{Terms of Trade} < \\text{Importer\'s Domestic Cost}',
        explanation: 'Both trading partners enjoy gains from trade if and only if the trade exchange rate lies strictly between their domestic opportunity costs.'
      }
    ],
    sections: [
      {
        heading: '1. Scarcity, Opportunity Cost & Economic Systems (CED 1.1–1.2)',
        content: `Core macroeconomic foundations:

* **Scarcity**:
  * The fundamental economic problem: society has unlimited wants but limited productive resources.
  * *Microeconomics vs. Macroeconomics*: Micro examines decision-making by individual consumers, households, and firms; Macro analyzes economy-wide aggregates (national output, general price level, inflation, unemployment, fiscal and monetary policy).
  * *Positive vs. Normative Economics*:
    * **Positive**: Factual, evidence-based, testable statements (e.g. "An increase in government spending increases real GDP in the short run").
    * **Normative**: Subjective value judgments and opinions (e.g. "The government should increase spending to support low-income families").
* **The Four Economic Resources (Factors of Production)**:
  1. **Land**: Natural resources (water, arable land, minerals, petroleum); earns **Rent**.
  2. **Labor**: Physical and mental human effort; earns **Wages**.
  3. **Capital**: Durable human-made tools, machinery, software, and physical plants used to produce other goods; earns **Interest**. *(Note: Financial money is NOT economic capital!)*
  4. **Entrepreneurship**: Innovation, risk-taking, and business organization; earns **Profit**.`
      },
      {
        heading: '2. The Production Possibilities Curve (PPC) & Future Growth (CED 1.2–1.3)',
        content: `Production boundaries, opportunity costs, and long-run growth:

* **PPC Classifications**:
  * **Points On Curve (e.g. Point A)**: Full employment of resources; productive efficiency.
  * **Points Inside Curve (e.g. Point B)**: Inefficient allocation; idle resources or cyclical unemployment during a recession.
  * **Points Outside Curve (e.g. Point C)**: Unattainable with current domestic resources; can be consumed **only through international trade**.
* **PPC Shapes**:
  * **Bowed-out (Concave to Origin)**: Reflects the Law of Increasing Opportunity Cost because resources are specialized and not equally adaptable across industries.
  * **Straight-Line PPC**: Constant opportunity costs because resources are completely interchangeable.
* **Capital Goods vs. Consumer Goods**:
  * **Consumer Goods**: Satisfy human wants directly in the current period (food, clothing, consumer electronics).
  * **Capital Goods**: Goods that produce other goods (industrial robotics, computer servers, infrastructure).
  * **Core AP Insight**: A nation allocating more resources to capital goods today shifts its PPC outward **further and faster** in the future, achieving higher long-run economic growth!`
      },
      {
        heading: '3. Comparative Advantage, Output vs. Input & Gains from Trade (CED 1.3)',
        content: `Comprehensive comparative advantage decision matrix:

| Method | Nature of Given Data | Opportunity Cost Formula | Mnemonic | How to Identify Advantage |
| :--- | :--- | :--- | :--- | :--- |
| **Output Method** | Units of **goods produced** in a fixed time period (tons of grain, planes built) | $\\text{Cost of A} = \\frac{\\text{Output B}}{\\text{Output A}}$ | **OOO** (Output: Other goes Over) | **Higher number** = Absolute Advantage; **Lower Cost** = Comparative Advantage |
| **Input Method** | **Resources or time required** to make 1 unit (hours per car, acres per bushel) | $\\text{Cost of A} = \\frac{\\text{Input A}}{\\text{Input B}}$ | **IOU** (Input: Other goes Under) | **Lower number** = Absolute Advantage (faster/fewer inputs); **Lower Cost** = Comparative Advantage |

* **Terms of Trade Formulation**:
  * Mutually beneficial terms of trade must fall strictly between both trading partners\' internal opportunity costs:
    $$\\text{Country A Opportunity Cost} < \\text{Terms of Trade} < \\text{Country B Opportunity Cost}$$
  * Specialization based on comparative advantage expands world output, allowing trading nations to **consume outside their individual domestic PPC frontiers**!`
      },
      {
        heading: '4. Macro Market Supply, Demand & Simultaneous Double Shifts (CED 1.4–1.6)',
        content: `Macroeconomic market dynamics and simultaneous shifts:

* **Demand & Supply Foundations**:
  * **Demand Shifters (TRIBE)**: Tastes, Related goods (Substitutes/Complements), Income (Normal/Inferior), Buyers, Expectations.
  * **Supply Shifters (ROTTEN)**: Resource prices, Other goods prices, Technology, Taxes & Subsidies, Expectations of sellers, Number of sellers.
  * *Change in Price* causes a movement ALONG the curve (change in quantity demanded/supplied); *external factors* SHIFT the entire curve.
* **Simultaneous Double Shift Rule**:
  * When both Demand and Supply shift simultaneously, **one variable (Price or Quantity) is known with certainty, while the other variable is INDETERMINATE!**
  * *Both Shift in Same Direction*:
    * $D \\rightarrow$ and $S \\rightarrow \\implies$ Quantity unambiguously increases ($Q \\uparrow$), Price is **indeterminate**.
    * $D \\leftarrow$ and $S \\leftarrow \\implies$ Quantity unambiguously decreases ($Q \\downarrow$), Price is **indeterminate**.
  * *Shift in Opposite Directions*:
    * $D \\rightarrow$ and $S \\leftarrow \\implies$ Price unambiguously increases ($P \\uparrow$), Quantity is **indeterminate**.
    * $D \\leftarrow$ and $S \\rightarrow \\implies$ Price unambiguously decreases ($P \\downarrow$), Quantity is **indeterminate**.`
      }
    ],
    workedExamples: [
      {
        title: 'Comparative Advantage and Terms of Trade from Macro Output Data',
        topicRef: 'CED Macro 1.3 Comparative Advantage and Gains from Trade',
        question: 'Suppose Country X can produce either 200 Airplanes or 400 Trucks in a year. Country Y can produce either 100 Airplanes or 300 Trucks in a year. (a) Identify which country has the absolute advantage in Airplanes. (b) Calculate the domestic opportunity cost of 1 Airplane for each country. (c) Determine which country has the comparative advantage in Airplanes. (d) Propose an exchange rate for 1 Airplane that benefits both nations.',
        solutionSteps: [
          'Step 1: Identify problem type: Output problem (goods produced per year) $\\implies$ Use "OOO" (Other goes Over).',
          'Step 2: Absolute advantage: Country X produces 200 Airplanes; Country Y produces 100 Airplanes. Because $200 > 100$, **Country X has absolute advantage in Airplanes**.',
          'Step 3: Calculate opportunity costs for 1 Airplane (Trucks / Airplanes):',
          '  * Country X: $1 \\text{ Airplane} = \\frac{400}{200} = 2.0 \\text{ Trucks}$.',
          '  * Country Y: $1 \\text{ Airplane} = \\frac{300}{100} = 3.0 \\text{ Trucks}$.',
          'Step 4: Opportunity cost for 1 Truck (Airplanes / Trucks):',
          '  * Country X: $1 \\text{ Truck} = \\frac{200}{400} = 0.5 \\text{ Airplanes}$.',
          '  * Country Y: $1 \\text{ Truck} = \\frac{100}{300} = 0.33 \\text{ Airplanes}$.',
          'Step 5: Comparative advantage: Country X gives up 2.0 Trucks per Airplane; Country Y gives up 3.0 Trucks. Because $2.0 < 3.0$, **Country X has comparative advantage in Airplanes** (and Country Y in Trucks).',
          'Step 6: Terms of Trade for 1 Airplane: Country X exports Airplanes and requires at least 2.0 Trucks. Country Y imports Airplanes and will pay at most 3.0 Trucks. Beneficial terms of trade: $2.0 \\text{ Trucks} < 1 \\text{ Airplane} < 3.0 \\text{ Trucks}$ (e.g. 1 Airplane for 2.5 Trucks).'
        ],
        finalAnswer: '(a) Country X. (b) Country X: 2.0 Trucks; Country Y: 3.0 Trucks. (c) Country X has comparative advantage in Airplanes. (d) 1 Airplane for 2.5 Trucks.',
        apScoringTip: 'Always show explicit fraction calculations. AP graders award points for the explicit opportunity cost comparison ($2.0 < 3.0$)!'
      }
    ],
    diagrams: [
      {
        id: 'econ_ppc_frontier',
        title: 'Production Possibilities Curve: Scarcity, Trade-offs & Capital Accumulation',
        subtitle: 'Bowed-Out Concave Frontier Illustrating Increasing Opportunity Costs & Growth',
        type: 'ppc_frontier_graph',
        description: 'Bowed-out PPC graph displaying efficient points along the frontier (Point A), inefficient/unemployment points inside (Point B), unattainable points outside (Point C), and an outward curve shift indicating capital accumulation or technological progress.',
        takeaway: 'Concave PPC reflects increasing opportunity costs. Outward shifts require new resources, technological breakthroughs, or capital investment.'
      }
    ],
    commonTraps: [
      'Confusing Absolute Advantage with Comparative Advantage. A country can have an absolute advantage in BOTH goods, but it can NEVER have a comparative advantage in both goods!',
      'Mixing up Input and Output methods. If the table gives "Hours to build 1 unit," it is an INPUT problem (use IOU: Other Under); lower numbers mean higher efficiency!',
      'Thinking points outside the PPC can be attained without trade. Points outside the curve can be consumed ONLY through international specialization and trade.'
    ],
    cramSheet: [
      'Bowed-out PPC = Increasing opportunity costs; Straight-line PPC = Constant opportunity costs.',
      'Output method: OOO (Other Over); Input method: IOU (Other Under).',
      'Comparative advantage = Lowest opportunity cost. Always specialize where opportunity cost is lowest!',
      'Terms of Trade must fall strictly between both domestic opportunity costs.',
      'Producing more Capital Goods today shifts the PPC and LRAS outward faster in the future.',
      'Simultaneous double shifts: One variable (P or Q) is determinate, and the other is always ambiguous.'
    ]
  },

  // =========================================================================
  // UNIT 2: ECONOMIC INDICATORS & THE BUSINESS CYCLE
  // =========================================================================
  {
    unitId: 'u2',
    unitNumber: 2,
    title: 'Unit 2: Economic Indicators and the Business Cycle',
    examWeight: '12%–17% of AP Macroeconomics Exam',
    bigIdea: 'National economic performance is quantified through Gross Domestic Product (GDP), unemployment metrics, and price level indices (CPI/GDP Deflator). The business cycle illustrates short-run fluctuations around long-run potential growth.',
    keyTheorems: [
      {
        name: 'Gross Domestic Product Inclusions and Exclusions',
        conditions: 'Measuring the total market value of all final goods and services produced domestically within a nation in one year.',
        conclusion: 'Expenditure Approach: $GDP = C + I + G + X_n$. GDP excludes: (1) Intermediate goods (prevents double-counting), (2) Used/secondhand goods, (3) Purely financial transactions (stocks, bonds, transfer payments), (4) Non-market and illegal activities.',
        apTip: 'Transfer payments (welfare, Social Security) are EXCLUDED from GDP because no current good or service is produced in exchange! When recipients spend the funds, it enters GDP as Consumer Spending ($C$).'
      },
      {
        name: 'The Fisher Equation (Nominal vs. Real Interest Rates)',
        conditions: 'Adjusting financial borrowing and lending returns for the rate of inflation.',
        conclusion: 'Real Interest Rate equals Nominal Interest Rate minus the Inflation Rate: $r = i - \\pi$. Unexpected inflation redistributes wealth from lenders/creditors to borrowers/debtors.',
        apTip: 'If actual inflation exceeds expected inflation, BORROWERS WIN (they repay loans with inflated, less valuable dollars) and LENDERS LOSE!'
      },
      {
        name: 'The Natural Rate of Unemployment (NRU) and Full Employment',
        conditions: 'An economy operating at its potential output without cyclical unemployment.',
        conclusion: 'Full employment does NOT mean 0% unemployment! The Natural Rate of Unemployment consists of Frictional Unemployment plus Structural Unemployment ($NRU = u_f + u_s$). At full employment, Cyclical Unemployment equals ZERO ($u_c = 0$).',
        apTip: 'If the actual unemployment rate is below the NRU, the economy is experiencing an Inflationary Gap. If above the NRU, a Recessionary Gap!'
      }
    ],
    formulas: [
      {
        name: 'Expenditure Approach to GDP',
        latex: 'GDP = C + I + G + X_n = C + I + G + (X - M)',
        explanation: 'Where $C$ = Consumer Spending, $I$ = Gross Private Domestic Investment, $G$ = Government Purchases, $X_n$ = Net Exports (Exports - Imports).'
      },
      {
        name: 'Unemployment Rate and Labor Force Participation',
        latex: '\\text{Unemployment Rate} = \\frac{\\text{Unemployed}}{\\text{Labor Force}} \\times 100; \\quad \\text{LFPR} = \\frac{\\text{Labor Force}}{\\text{Adult Working Population}} \\times 100',
        explanation: 'Labor Force = Employed + Unemployed (actively seeking work in past 4 weeks). Discouraged workers are excluded from the labor force.'
      },
      {
        name: 'Consumer Price Index (CPI) and Inflation Rate',
        latex: 'CPI = \\frac{\\text{Cost of Basket in Current Year}}{\\text{Cost of Basket in Base Year}} \\times 100; \\quad \\text{Inflation Rate} = \\frac{CPI_2 - CPI_1}{CPI_1} \\times 100',
        explanation: 'Market basket quantities remain fixed at base year amounts to isolate price changes.'
      },
      {
        name: 'GDP Deflator and Real GDP',
        latex: '\\text{GDP Deflator} = \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100; \\quad \\text{Real GDP} = \\frac{\\text{Nominal GDP}}{\\text{GDP Deflator}} \\times 100',
        explanation: 'Unlike the CPI, the GDP Deflator reflects the prices of all domestically produced goods and services without fixed basket bias.'
      },
      {
        name: 'The Fisher Equation',
        latex: 'r = i - \\pi \\quad \\iff \\quad i = r + \\pi',
        explanation: 'Where $r$ is real interest rate, $i$ is nominal interest rate, and $\\pi$ is inflation rate.'
      }
    ],
    sections: [
      {
        heading: '1. The Circular Flow Model & Macroeconomic Identities (CED 2.1)',
        content: `National accounting foundations and sectoral linkages:

* **The Four Sectors of the Macroeconomy**:
  1. **Households**: Own factors of production, receive factor income, and spend on consumer goods ($C$) and private savings ($S$).
  2. **Businesses / Firms**: Hire inputs from households and produce final goods and services.
  3. **Government**: Collects taxes ($T$), provides transfer payments, and makes government purchases ($G$).
  4. **Rest of the World (Foreign Sector)**: Buys domestic exports ($X$) and sells foreign imports ($M$).
* **The Circular Flow Identity**:
  $$\\text{National Expenditure} \\equiv \\text{National Output (Real GDP)} \\equiv \\text{National Income}$$
* **Leakages vs. Injections**:
  * **Leakages**: Income diverted from the domestic spending stream: Savings ($S$) + Taxes ($T$) + Imports ($M$).
  * **Injections**: Spending added into the circular flow: Investment ($I$) + Government Purchases ($G$) + Exports ($X$).
  * In macro equilibrium: Total Leakages $=$ Total Injections ($S + T + M = I + G + X$).`
      },
      {
        heading: '2. Gross Domestic Product: Inclusions, Exclusions & Limitations (CED 2.1–2.2)',
        content: `Detailed measurement of national economic output:

* **The Four Components of GDP ($C + I + G + X_n$)**:
  * **Consumer Spending ($C$)**: Durable goods (cars, appliances), non-durable goods (food, gasoline), and services (healthcare, education). Comprises ~70% of US GDP.
  * **Gross Private Domestic Investment ($I$)**:
    * Business purchases of capital equipment, software, and tools.
    * All commercial and residential construction (new homes).
    * **Changes in Business Inventories**: Unsold goods produced in the current year are counted as inventory investment!
  * **Government Purchases ($G$)**: Federal, state, and local spending on goods and services (defense, roads, police salaries).
  * **Net Exports ($X_n = X - M$)**: Exports minus imports.
* **What is EXCLUDED from GDP?**:
  1. *Intermediate Goods*: Tires installed on a new car (prevents double-counting).
  2. *Used Goods*: Selling a 2018 car in 2026 (was counted in 2018).
  3. *Purely Financial Transactions*: Buying stocks, bonds, or mutual funds.
  4. *Government Transfer Payments*: Social Security, Medicare, welfare, unemployment checks.
  5. *Non-Market & Illegal Activities*: Home cooking, unpaid childcare, black market transactions.
* **Limitations of GDP as a Welfare Metric**:
  * Does not account for income distribution/inequality, environmental degradation/pollution, leisure time, or quality of life improvements.`
      },
      {
        heading: '3. Unemployment: Types, NRU & Measurement Flaws (CED 2.3)',
        content: `Labor market indicators and structural categories:

* **Labor Force Framework**:
  * **Employed**: Worked for pay at least 1 hour in the survey week.
  * **Unemployed**: Jobless, actively seeking work within the past 4 weeks, and available to work.
  * **Not in the Labor Force**: Retirees, full-time students, stay-at-home parents, institutionalized persons, and **Discouraged Workers**.
  * **Discouraged Workers**: Individuals who want a job but gave up searching due to poor prospects. *Because they stop searching, they are dropped from the labor force, causing the official unemployment rate to appear artificially low!*
* **The Three Types of Unemployment**:
  1. **Frictional Unemployment**: Temporary, voluntary transition between jobs (e.g. recent college graduates, workers relocating). Natural and healthy for an economy.
  2. **Structural Unemployment**: Mismatch between workers\' skills and the requirements of available jobs, or geographic mismatch (e.g. automation, AI replacing typists).
  3. **Cyclical Unemployment**: Caused by a contraction in the business cycle or recessionary drop in Aggregate Demand. **Can be eliminated by policy!**
* **The Natural Rate of Unemployment (NRU)**:
  * $$NRU = \\text{Frictional Unemployment} + \\text{Structural Unemployment}$$
  * Full employment occurs when **Cyclical Unemployment $= 0$**!`
      },
      {
        heading: '4. Inflation, Price Indices & Winners/Losers of Inflation (CED 2.4–2.6)',
        content: `Price level measurement, inflation calculations, and redistribution effects:

* **Consumer Price Index (CPI) vs. GDP Deflator**:
  * **CPI**: Measures the average price of a **fixed market basket** of ~80,000 goods/services purchased by urban households. Includes imported consumer goods; excludes capital goods. Suffers from *substitution bias* (overstates inflation by assuming consumers don't switch to cheaper alternatives).
  * **GDP Deflator**: Measures the prices of **all final goods and services produced domestically**. Includes capital goods; excludes imports.
* **Who Wins and Who Loses from Unexpected Inflation?**:
  * **WINNERS**:
    * **Borrowers / Debtors**: Repay loans with dollars that possess lower real purchasing power than when borrowed.
    * **Firms with sticky input costs**: Product prices rise faster than wages/contracts.
  * **LOSERS**:
    * **Lenders / Creditors**: Receive loan repayments that have eroded real purchasing power.
    * **Savers**: Cash holdings lose purchasing power if nominal interest rates are below inflation.
    * **Fixed-Income Pensioners**: Living on fixed nominal stipends that fail to keep pace with rising living costs.`
      },
      {
        heading: '5. The Business Cycle & Output Gaps (CED 2.7)',
        content: `Cyclical oscillations around the potential growth trendline:

* **Phases of the Business Cycle**:
  1. **Expansion (Recovery)**: Real GDP is rising; unemployment is falling; price level may begin to rise.
  2. **Peak**: Real GDP reaches its temporary maximum; economy operates near or above potential output; high inflation risk.
  3. **Contraction (Recession)**: Real GDP is falling for at least two consecutive quarters (6 months); unemployment is rising.
  4. **Trough**: Real GDP reaches its temporary minimum before recovering.
* **Output Gaps**:
  * **Potential GDP (Trendline)**: The level of real output an economy can produce when operating at full employment (at the NRU).
  * **Recessionary Gap**: Actual Real GDP $<$ Potential Real GDP. Unemployment $>$ NRU. Cyclical unemployment $> 0$.
  * **Inflationary Gap**: Actual Real GDP $>$ Potential Real GDP. Unemployment $<$ NRU. Overheated economy.`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating Real GDP, Deflator, and Growth Rates across Years',
        topicRef: 'CED Macro 2.6 Real vs. Nominal Values',
        question: 'An economy produces only two goods: Apples and Computers. In Year 1 (Base Year): 100 Apples at $1 each; 10 Computers at $500 each. In Year 2: 120 Apples at $2 each; 12 Computers at $600 each. (a) Calculate Nominal GDP for Year 1 and Year 2. (b) Calculate Real GDP for Year 2 using Year 1 base prices. (c) Calculate the GDP Deflator for Year 2. (d) What was the economic growth rate between Year 1 and Year 2?',
        solutionSteps: [
          'Step 1: Calculate Nominal GDP (Current Prices × Current Quantities):',
          '  * Year 1 Nominal GDP: $(100 \\times \\$1) + (10 \\times \\$500) = \\$100 + \\$5,000 = \\$5,100$.',
          '  * Year 2 Nominal GDP: $(120 \\times \\$2) + (12 \\times \\$600) = \\$240 + \\$7,200 = \\$7,440$.',
          'Step 2: Calculate Real GDP for Year 2 (Base Year Prices × Current Year Quantities):',
          '  * Year 2 Real GDP: $(120 \\times \\$1) + (12 \\times \\$500) = \\$120 + \\$6,000 = \\$6,120$.',
          'Step 3: Calculate GDP Deflator for Year 2:',
          '  * $\\text{Deflator} = \\frac{\\text{Nominal GDP}_2}{\\text{Real GDP}_2} \\times 100 = \\frac{\\$7,440}{\\$6,120} \\times 100 = 121.57$.',
          'Step 4: Calculate Economic Growth Rate (Percentage change in Real GDP):',
          '  * $\\text{Growth} = \\frac{\\text{Real GDP}_2 - \\text{Real GDP}_1}{\\text{Real GDP}_1} \\times 100 = \\frac{\\$6,120 - \\$5,100}{\\$5,100} \\times 100 = \\frac{1,020}{5,100} \\times 100 = 20.0\\%$.'
        ],
        finalAnswer: '(a) Year 1 Nominal = $5,100; Year 2 Nominal = $7,440. (b) Year 2 Real = $6,120. (c) Year 2 Deflator = 121.57. (d) Growth Rate = 20.0%.',
        apScoringTip: 'Always calculate economic growth using REAL GDP, never Nominal GDP! Nominal GDP includes price inflation.'
      },
      {
        title: 'Evaluating Unemployment Rate and Labor Force Reclassification',
        topicRef: 'CED Macro 2.3 Unemployment Rate Mechanics',
        question: 'A country has an adult working population of 200 million. Currently, 95 million are employed, 5 million are unemployed and actively seeking work, and 10 million are discouraged workers who have given up looking for work. (a) Calculate the official Unemployment Rate. (b) Calculate the Labor Force Participation Rate. (c) If 2 million discouraged workers start actively seeking work, what happens to the official unemployment rate? Explain.',
        solutionSteps: [
          'Step 1: Determine the Labor Force: $\\text{Labor Force} = \\text{Employed} + \\text{Unemployed} = 95 + 5 = 100 \\text{ million}$.',
          '  * Discouraged workers are NOT in the labor force!',
          'Step 2: Calculate Unemployment Rate: $\\text{UR} = \\frac{\\text{Unemployed}}{\\text{Labor Force}} \\times 100 = \\frac{5}{100} \\times 100 = 5.0\\%$.',
          'Step 3: Calculate LFPR: $\\text{LFPR} = \\frac{\\text{Labor Force}}{\\text{Adult Population}} \\times 100 = \\frac{100}{200} \\times 100 = 50.0\\%$.',
          'Step 4: Reclassification shock: 2 million discouraged workers re-enter the labor market:',
          '  * New Unemployed: $5 + 2 = 7$ million.',
          '  * New Labor Force: $100 + 2 = 102$ million.',
          '  * New Unemployment Rate: $\\frac{7}{102} \\times 100 = 6.86\\%$.',
          '  * The unemployment rate **increases** because individuals re-enter the labor force as unemployed before finding jobs!'
        ],
        finalAnswer: '(a) Unemployment Rate = 5.0%. (b) LFPR = 50.0%. (c) Unemployment rate rises to 6.86% as previously discouraged workers re-enter the labor force.',
        apScoringTip: 'A common AP trap asks why unemployment rises when the economy starts improving. The reason is discouraged workers re-entering the labor force!'
      }
    ],
    diagrams: [
      {
        id: 'circular_flow_chart',
        title: 'Macroeconomic Circular Flow: Sectors, Markets & Identities',
        subtitle: 'Interconnection of Households, Firms, Product Markets & Factor Markets',
        type: 'circular_flow_chart',
        description: 'Complete macroeconomic circular flow diagram demonstrating the continuous loop of output, spending, factor payments, and injections/leakages across households, businesses, governments, and the financial sector.',
        takeaway: 'National Expenditure equals National Output equals National Income. Injections (I + G + X) must equal Leakages (S + T + M) in equilibrium.'
      },
      {
        id: 'business_cycle_chart',
        title: 'Macroeconomic Business Cycle: Phases & Output Gaps',
        subtitle: 'Fluctuations in Real GDP around the Potential Growth Trendline',
        type: 'business_cycle_chart',
        description: 'Waveform graph showing peaks (inflationary gaps), contractions, troughs (recessionary gaps), and expansions around the upward-sloping potential GDP trendline.',
        takeaway: 'The business cycle models short-run macroeconomic fluctuations. Recessions create cyclical unemployment; overheating creates demand-pull inflation.'
      }
    ],
    commonTraps: [
      'Counting financial asset purchases (stocks and bonds) in GDP. Buying stocks is merely an ownership transfer of a financial claim, not new economic production!',
      'Including government transfer payments in GDP under Government Purchases. Transfer payments (Social Security, food stamps) are pure wealth transfers and exclude production.',
      'Assuming full employment means a 0% unemployment rate. Full employment always includes Frictional and Structural unemployment (the NRU); only Cyclical unemployment is zero!',
      'Believing everyone loses from inflation. Borrowers on fixed-rate debt WIN during unexpected inflation because they repay loans with devalued dollars.'
    ],
    cramSheet: [
      '$GDP = C + I + G + X_n$. Excludes: used goods, financial assets, transfer payments, non-market items.',
      'Unemployment Rate $= (\\text{Unemployed} / \\text{Labor Force}) \\times 100$. Excludes discouraged workers.',
      'NRU = Frictional + Structural. Full employment $\\implies$ Cyclical unemployment = 0.',
      'Real Interest Rate $= \\text{Nominal Rate} - \\text{Inflation Rate}$ ($r = i - \\pi$).',
      'Unexpected inflation helps borrowers and hurts lenders and fixed-income savers.',
      'Real GDP $= (\\text{Nominal GDP} / \\text{GDP Deflator}) \\times 100$. Isolates real volume from price inflation.'
    ]
  },

  // =========================================================================
  // UNIT 3: NATIONAL INCOME & PRICE DETERMINATION (AD-AS & FISCAL POLICY)
  // =========================================================================
  {
    unitId: 'u3',
    unitNumber: 3,
    title: 'Unit 3: National Income and Price Determination (AD-AS Model)',
    examWeight: '17%–27% of AP Macroeconomics Exam',
    bigIdea: 'The Aggregate Demand–Aggregate Supply (AD-AS) model establishes macroeconomic equilibrium, price levels, and output. Fiscal policy multipliers dictate how changes in government spending and taxes impact national income and output gaps.',
    keyTheorems: [
      {
        name: 'The Downward Slope of Aggregate Demand (AD)',
        conditions: 'An inverse relationship between the general Price Level (PL) and total Real GDP demanded.',
        conclusion: 'The AD curve slopes downward due to three macro effects: (1) The Real Wealth / Balance Effect (higher PL erodes purchasing power of cash assets $\\implies C \\downarrow$), (2) The Interest Rate Effect (higher PL increases money demand, driving interest rates up $\\implies I \\downarrow, C \\downarrow$), and (3) The Foreign Purchases / Exchange Rate Effect (higher domestic PL makes exports uncompetitive $\\implies X_n \\downarrow$).',
        apTip: 'Do NOT use the microeconomic substitution or income effect to explain the slope of AD! The macro AD curve models the entire price level of ALL goods simultaneously.'
      },
      {
        name: 'The Spending Multiplier vs. Tax Multiplier Asymmetry',
        conditions: 'A change in autonomous government spending or lump-sum taxes.',
        conclusion: 'The Spending Multiplier ($k = \\frac{1}{MPS}$) is strictly greater in magnitude than the Tax Multiplier ($k_{\\text{tax}} = -\\frac{MPC}{MPS}$). A $1 increase in government spending has a greater expansionary impact than a $1 tax cut because a portion of tax cuts is saved rather than spent immediately!',
        apTip: 'The Balanced Budget Multiplier is always equal to 1! If government spending and taxes increase by the exact same dollar amount, Real GDP expands by that exact amount.'
      },
      {
        name: 'Long-Run Wage Self-Correction Mechanism',
        conditions: 'An economy experiencing a short-run output gap without government intervention.',
        conclusion: 'In the long run, nominal wages and input prices are flexible: (1) In a Recessionary Gap, high unemployment forces nominal wages DOWN, shifting Short-Run Aggregate Supply (SRAS) to the RIGHT to restore full employment ($Y_f$) at a lower price level. (2) In an Inflationary Gap, tight labor markets push nominal wages UP, shifting SRAS to the LEFT to restore $Y_f$ at a higher price level.',
        apTip: 'In the long run, shifts in Aggregate Demand affect ONLY the aggregate Price Level ($PL$), leaving real output and employment unchanged at potential output ($Y_f$)!'
      }
    ],
    formulas: [
      {
        name: 'Marginal Propensities and Multipliers',
        latex: 'MPC + MPS = 1; \\quad \\text{Spending Multiplier } (k) = \\frac{1}{MPS} = \\frac{1}{1 - MPC}; \\quad \\text{Tax Multiplier } (k_{\\text{tax}}) = -\\frac{MPC}{MPS}',
        explanation: 'Where $MPC = \\Delta C / \\Delta Y$ and $MPS = \\Delta S / \\Delta Y$. Total $\\Delta GDP = \\text{Initial } \\Delta \\text{Spending} \\times k$.'
      },
      {
        name: 'Balanced Budget Multiplier',
        latex: 'k_{\\text{balanced}} = k + k_{\\text{tax}} = \\frac{1}{MPS} + \\left(-\\frac{MPC}{MPS}\\right) = \\frac{1 - MPC}{MPS} = 1',
        explanation: 'Equal increases in government purchases and taxes expand real GDP by the exact change in spending.'
      },
      {
        name: 'Aggregate Demand Identity',
        latex: 'AD = C + I + G + X_n',
        explanation: 'Any shift in consumer confidence, business investment, fiscal spending, or net exports shifts the AD curve.'
      }
    ],
    sections: [
      {
        heading: '1. Aggregate Demand (AD): Foundations & Shifters (CED 3.1)',
        content: `Macro demand schedule and underlying mechanisms:

* **Why is Aggregate Demand Downward Sloping?**:
  1. **The Real Wealth Effect (Pigou Effect)**: When the price level rises, the real purchasing power of accumulated household cash balances and fixed financial assets declines. Consumers feel poorer and reduce consumption ($PL \\uparrow \\implies \\text{Real Wealth} \\downarrow \\implies C \\downarrow$).
  2. **The Interest Rate Effect (Keynes Effect)**: When the price level rises, households and firms require more money for daily transactions. This increases the demand for money, driving nominal interest rates up. Higher interest rates reduce interest-sensitive business investment ($I$) and consumer borrowing for cars/homes ($PL \\uparrow \\implies MD \\uparrow \\implies i \\uparrow \\implies I \\downarrow, C \\downarrow$).
  3. **The Foreign Purchases Effect**: When domestic price levels rise relative to foreign nations, domestic goods become expensive to foreigners, while foreign imports become attractive. Net exports decrease ($PL \\uparrow \\implies \\text{Exports} \\downarrow, \\text{Imports} \\uparrow \\implies X_n \\downarrow$).
* **Shifters of Aggregate Demand ($C + I + G + X_n$)**:
  * **Consumer Spending ($C$)**: Consumer confidence, household wealth (stock market/housing booms), personal income taxes, household indebtedness.
  * **Investment Spending ($I$)**: Real interest rates, expected rate of return on capital, business taxes, technological progress.
  * **Government Purchases ($G$)**: Federal, state, or local fiscal appropriations (military, public infrastructure).
  * **Net Exports ($X_n$)**: Foreign national incomes (foreign boom $\\implies$ exports rise), currency exchange rates (depreciation makes exports cheaper).`
      },
      {
        heading: '2. The Multiplier Effect: Spending, Tax & Balanced Budget Multipliers (CED 3.2)',
        content: `The circular flow ripple effect and multiplier math:

* **Marginal Propensities**:
  * **Marginal Propensity to Consume ($MPC$)**: Fraction of any extra disposable income that households spend:
    $$MPC = \\frac{\\Delta C}{\\Delta Y_d}$$
  * **Marginal Propensity to Save ($MPS$)**: Fraction of any extra disposable income that households save:
    $$MPS = \\frac{\\Delta S}{\\Delta Y_d}$$
  * Identity: $$MPC + MPS = 1$$
* **The Spending Multiplier ($k$)**:
  * An initial change in autonomous spending triggers successive rounds of income and consumption:
    $$k = \\frac{1}{1 - MPC} = \\frac{1}{MPS}$$
  * Total change in Real GDP: $$\\Delta \\text{Real GDP} = \\Delta \\text{Spending} \\times k$$
* **The Tax Multiplier ($k_{\\text{tax}}$)**:
  * When taxes are cut by $1, households do not spend the entire dollar; they save $1 \\times MPS$!
  * Therefore, the initial spending injection is only $\\Delta T \\times MPC$:
    $$k_{\\text{tax}} = -\\frac{MPC}{MPS}$$
  * Notice that the tax multiplier is **negative** (tax hikes reduce GDP) and **smaller in magnitude** than the spending multiplier!`
      },
      {
        heading: '3. Short-Run vs. Long-Run Aggregate Supply (SRAS vs. LRAS) (CED 3.3–3.4)',
        content: `Aggregate production horizons and sticky vs. flexible costs:

* **Short-Run Aggregate Supply (SRAS)**:
  * Slopes upward because **input prices (especially nominal wages) are sticky or fixed in the short run** due to labor contracts, minimum wage laws, and menu costs.
  * As the aggregate price level rises, product prices increase while nominal wages remain fixed, increasing firm profit margins $\\implies$ firms expand output!
  * **Shifters of SRAS (Commodity Prices, Wages, Expectations)**:
    1. *Input / Resource Prices*: Oil shocks, raw materials, commodity costs.
    2. *Nominal Wages*: Increases in wages shift SRAS left.
    3. *Expected Inflation*: If workers expect higher inflation, they demand higher wages $\\implies SRAS$ shifts left.
    4. *Government Business Taxes and Subsidies*.
    5. *Productivity & Technology*: Higher labor productivity shifts SRAS right.
* **Long-Run Aggregate Supply (LRAS)**:
  * Vertical line at **Potential Output / Full Employment ($Y_f$)**.
  * In the long run, all input prices and wages are fully flexible; profit margins are neutral to price levels.
  * **Shifters of LRAS (Identical to PPC Shifters)**:
    * Increases in physical capital stock, labor force size, human capital, and technological innovation.`
      },
      {
        heading: '4. Macroeconomic Equilibrium, Output Gaps & Stagflation (CED 3.5)',
        content: `Short-run states and output gap classifications:

* **Three Macroeconomic States**:
  1. **Full-Employment Equilibrium**:
     * $AD$ intersects $SRAS$ on the vertical $LRAS$ curve at potential output ($Y_f$).
     * Unemployment equals the Natural Rate of Unemployment ($NRU$).
  2. **Recessionary Gap (Negative Output Gap)**:
     * $AD$ intersects $SRAS$ to the left of $LRAS$ ($Y_1 < Y_f$).
     * Unemployment exceeds the NRU; cyclical unemployment is positive; deflationary pressure.
  3. **Inflationary Gap (Positive Output Gap)**:
     * $AD$ intersects $SRAS$ to the right of $LRAS$ ($Y_1 > Y_f$).
     * Unemployment is below the NRU; tight labor markets; demand-pull inflation.
* **Stagflation (Negative Supply Shock)**:
  * Caused by a sudden leftward shift in $SRAS$ (e.g. 1970s OPEC oil embargo).
  * Results in the worst of both worlds: **Price Level rises ($PL \\uparrow$) while Real GDP contracts ($Y \\downarrow$) and Unemployment rises**!`
      },
      {
        heading: '5. Long-Run Self-Correction vs. Discretionary Fiscal Policy (CED 3.6–3.7)',
        content: `Market self-restoration vs. active government intervention:

* **The Self-Correction Mechanism (Flexible Wages in Long Run)**:
  * **In a Recessionary Gap**: Unemployment $> NRU \\implies$ High unemployment creates surplus labor $\\implies$ Workers eventually accept lower nominal wages $\\implies$ Lower production costs shift **$SRAS$ to the RIGHT** $\\implies$ Full employment ($Y_f$) is restored at a lower price level!
  * **In an Inflationary Gap**: Unemployment $< NRU \\implies$ Labor shortages force employers to compete for workers $\\implies$ Nominal wages rise $\\implies$ Higher production costs shift **$SRAS$ to the LEFT** $\\implies$ Full employment ($Y_f$) is restored at a higher price level!
* **Discretionary Fiscal Policy**:
  * **Expansionary Fiscal Policy (Combat Recessions)**:
    * Increase Government Purchases ($G \\uparrow$) or Decrease Personal Taxes ($T \\downarrow$).
    * Shifts Aggregate Demand to the right ($AD \\rightarrow$), closing the recessionary gap.
  * **Contractionary Fiscal Policy (Combat Inflation)**:
    * Decrease Government Purchases ($G \\downarrow$) or Increase Personal Taxes ($T \\uparrow$).
    * Shifts Aggregate Demand to the left ($AD \\leftarrow$), cooling the overheated economy.
* **Automatic Stabilizers**:
  * Built-in fiscal features that cushion macroeconomic shocks without explicit new legislation:
    * *Progressive Income Taxes*: During an expansion, rising incomes push households into higher tax brackets, naturally dampening consumption. During a recession, tax liabilities drop automatically.
    * *Unemployment Insurance & Welfare*: Automatically transfer cash to jobless workers during downturns, supporting aggregate demand.`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating the Required Fiscal Policy to Close a Recessionary Gap',
        topicRef: 'CED Macro 3.2 Fiscal Multipliers and Output Gaps',
        question: 'An economy is in a recession with current Real GDP Y = $800 billion. Potential full-employment output is Yf = $1,000 billion. The Marginal Propensity to Consume is MPC = 0.8. (a) Calculate the Spending Multiplier and the Tax Multiplier. (b) Calculate the recessionary output gap. (c) What change in government purchases is required to close the gap? (d) What change in lump-sum taxes would close the gap instead?',
        solutionSteps: [
          'Step 1: Calculate Marginal Propensity to Save: $MPS = 1 - MPC = 1 - 0.8 = 0.2$.',
          'Step 2: Calculate Multipliers:',
          '  * Spending Multiplier: $k = \\frac{1}{MPS} = \\frac{1}{0.2} = 5$.',
          '  * Tax Multiplier: $k_{\\text{tax}} = -\\frac{MPC}{MPS} = -\\frac{0.8}{0.2} = -4$.',
          'Step 3: Calculate the Output Gap: $\\text{Gap} = Y_f - Y_1 = \\$1,000 - \\$800 = \\$200 \\text{ billion}$ (Recessionary Gap).',
          'Step 4: Required change in Government Purchases (G):',
          '  * $\\Delta \\text{Real GDP} = \\Delta G \\times k \\implies \\$200 = \\Delta G \\times 5 \\implies \\Delta G = \\frac{\\$200}{5} = +\\$40 \\text{ billion}$.',
          '  * The government must **increase purchases by $40 billion**.',
          'Step 5: Required change in Lump-Sum Taxes (T):',
          '  * $\\Delta \\text{Real GDP} = \\Delta T \\times k_{\\text{tax}} \\implies \\$200 = \\Delta T \\times (-4) \\implies \\Delta T = \\frac{\\$200}{-4} = -\\$50 \\text{ billion}$.',
          '  * The government must **cut taxes by $50 billion**.'
        ],
        finalAnswer: '(a) Spending Multiplier = 5; Tax Multiplier = -4. (b) Gap = $200 billion. (c) Increase G by $40 billion. (d) Cut Taxes by $50 billion.',
        apScoringTip: 'Notice that closing the gap requires a LARGER tax cut ($50B) than spending increase ($40B) because households save part of a tax cut!'
      },
      {
        title: 'Graphing Long-Run Self-Correction from a Demand-Side Negative Shock',
        topicRef: 'CED Macro 3.6 Long-Run Macroeconomic Equilibrium',
        question: 'Suppose a collapse in consumer confidence causes Aggregate Demand to fall. (a) State the short-run effect on Price Level, Real GDP, and Unemployment. (b) In the absence of government fiscal or monetary intervention, describe the long-run self-correcting adjustment process. (c) Compare the final price level and real output to their original pre-shock levels.',
        solutionSteps: [
          'Step 1: Short-run shock: Aggregate Demand shifts left ($AD \\leftarrow AD_1$).',
          '  * Price Level falls ($PL_1 \\downarrow$); Real GDP falls ($Y_1 < Y_f$); Unemployment rises above the NRU $\\implies$ **Recessionary Gap**.',
          'Step 2: Long-run adjustment mechanism: In the long run, nominal wages and input prices are flexible.',
          '  * The high unemployment rate creates downward pressure on wages.',
          '  * As existing labor contracts expire, nominal wages fall ($W \\downarrow$).',
          '  * Lower production costs shift **Short-Run Aggregate Supply to the RIGHT ($SRAS \\rightarrow SRAS_2$)**.',
          'Step 3: Long-run resolution: The rightward shift in SRAS restores output to **Potential Output ($Y_f$)**.',
          '  * Final Real Output returns to the full-employment level ($Y_f$).',
          '  * Final Price Level drops further ($PL_2 < PL_1 < PL_0$).'
        ],
        finalAnswer: 'Short run: PL falls, Y falls, unemployment rises. Long run: Wages fall, SRAS shifts right, restoring full employment (Yf) at an even lower price level.',
        apScoringTip: 'When explaining self-correction on an FRQ, you MUST mention that nominal wages fall because of high unemployment, shifting SRAS right!'
      }
    ],
    diagrams: [
      {
        id: 'ad_as_graph',
        title: 'AD-AS Model: Recessionary Gap & Long-Run Self-Correction',
        subtitle: 'Short-Run Output Deficit (Y1 < Yf) Restored by Wage Flexibility',
        type: 'ad_as_graph',
        description: 'Complete AD-AS macroeconomic graph illustrating vertical LRAS at Yf, downward sloping AD, upward sloping SRAS1, short-run recessionary equilibrium E1, and the long-run self-correction shift where falling wages move SRAS to the right.',
        takeaway: 'In the short run, sticky wages create output gaps. In the long run, flexible wages shift SRAS to restore potential output Yf.'
      }
    ],
    commonTraps: [
      'Using microeconomic substitution and income effects to explain the downward slope of AD. Macro AD encompasses ALL goods; you must cite the Real Wealth, Interest Rate, and Foreign Purchases effects!',
      'Assuming the Tax Multiplier is identical to the Spending Multiplier. The tax multiplier is always smaller by 1 because households save part of tax cuts ($MPC + MPS = 1$)!',
      'Thinking fiscal policy shifts LRAS in the short run. Standard fiscal policy shifts Aggregate Demand; only supply-side policies targeting capital/R&D shift LRAS in the long run.',
      'Forgetting that stagflation is caused by a NEGATIVE SUPPLY SHOCK (leftward shift of SRAS), which causes inflation and unemployment to rise simultaneously.'
    ],
    cramSheet: [
      '$AD = C + I + G + X_n$. Downward slope: Wealth Effect, Interest Rate Effect, Foreign Purchases Effect.',
      'Spending Multiplier: $k = 1 / MPS$. Tax Multiplier: $k_{\\text{tax}} = -MPC / MPS$. Balanced budget multiplier = 1.',
      'SRAS is upward sloping due to sticky wages. Shifts with commodity prices, wages, and productivity.',
      'LRAS is vertical at potential GDP ($Y_f$). Shifts with capital, labor force, and technology.',
      'Recessionary gap: $Y < Y_f$; Inflationary gap: $Y > Y_f$. Stagflation is caused by negative supply shocks ($SRAS \\leftarrow$).',
      'Long-run self-correction: Recession $\\implies$ Wages fall $\\implies$ SRAS shifts RIGHT. Inflation $\\implies$ Wages rise $\\implies$ SRAS shifts LEFT.'
    ]
  },

  // =========================================================================
  // UNIT 4: FINANCIAL SECTOR & MONETARY POLICY
  // =========================================================================
  {
    unitId: 'u4',
    unitNumber: 4,
    title: 'Unit 4: Financial Sector, Banking & Monetary Policy',
    examWeight: '18%–23% of AP Macroeconomics Exam',
    bigIdea: 'The financial sector channels funds from savers to borrowers. Central banks conduct monetary policy in limited and ample reserves regimes, dictating interest rates, money creation, and the loanable funds market.',
    keyTheorems: [
      {
        name: 'Inverse Relationship between Bond Prices and Interest Rates',
        conditions: 'Fixed-income debt securities traded in secondary financial bond markets.',
        conclusion: 'Bond prices and interest rates are strictly inversely related ($P_{\\text{bond}} \\uparrow \\iff i \\downarrow$). When market interest rates rise, existing bonds paying lower fixed coupon rates become unattractive, driving their market resale price down.',
        apTip: 'If the central bank buys bonds in open market operations, bond prices rise and interest rates fall!'
      },
      {
        name: 'Fractional Reserve Banking and Money Creation',
        conditions: 'Commercial banks holding a fraction of demand deposits as cash reserves.',
        conclusion: 'When fresh cash is deposited into a commercial bank, the bank retains Required Reserves and lends out Excess Reserves. Loans are redeposited throughout the banking system, expanding the money supply by the Money Multiplier ($MM = \\frac{1}{RR}$).',
        apTip: 'Cash deposited from under a mattress does NOT change the immediate M1 money supply (cash decreases, demand deposits increase equally). It creates the POTENTIAL for new money expansion via excess reserves!'
      },
      {
        name: 'Monetary Policy Regimes: Limited vs. Ample Reserves',
        conditions: 'Central bank operating framework (Federal Reserve updated curriculum standards).',
        conclusion: 'In a Limited Reserves regime, the central bank uses Open Market Operations (buying/selling bonds) to shift the vertical Money Supply. In an Ample Reserves regime (current Fed framework), the central bank has an abundance of reserves and steers interest rates primarily via administered rates: **Interest on Reserve Balances (IORB)**.',
        apTip: 'To conduct expansionary policy in an ample reserves regime, the Fed LOWERS the administered IORB rate!'
      },
      {
        name: 'Crowding Out in the Loanable Funds Market',
        conditions: 'Government running budget deficits financed by issuing Treasury debt securities.',
        conclusion: 'Government borrowing increases the Demand for Loanable Funds (or reduces national savings), driving up the equilibrium Real Interest Rate ($r \\uparrow$). Higher real interest rates reduce private business investment spending ($I$) and interest-sensitive consumer purchases ($C$), crowding out private economic growth.',
        apTip: 'Crowding out reduces the rate of physical capital accumulation, shifting the future LRAS and PPC outward more slowly!'
      }
    ],
    formulas: [
      {
        name: 'Banking Multiplier and Maximum Money Expansion',
        latex: '\\text{Money Multiplier } (MM) = \\frac{1}{RR}; \\quad \\text{Max Money Creation} = \\text{Excess Reserves} \\times MM',
        explanation: 'Where $RR$ is the required reserve ratio. Excess Reserves = Total Reserves - Required Reserves.'
      },
      {
        name: 'The Fisher Equation (Real vs. Nominal Interest)',
        latex: 'r = i - \\pi \\quad \\iff \\quad i = r + \\pi',
        explanation: 'The real interest rate is adjusted for inflation and cleared in the Loanable Funds Market.'
      },
      {
        name: 'Total Bank Reserves Equation',
        latex: '\\text{Total Reserves} = \\text{Required Reserves} + \\text{Excess Reserves}',
        explanation: 'Required Reserves = Demand Deposits × RR. Banks lend only Excess Reserves.'
      }
    ],
    sections: [
      {
        heading: '1. Financial Assets, Functions of Money & Bond Mathematics (CED 4.1–4.3)',
        content: `Foundations of the financial system and liquidity:

* **Three Primary Functions of Money**:
  1. **Medium of Exchange**: Facilitates transactions without the "double coincidence of wants" required in barter economies.
  2. **Unit of Account**: Standardized monetary yardstick to measure and compare the relative economic value of goods and services.
  3. **Store of Value**: Enables purchasing power to be transferred from the present into the future.
* **Definitions of the Money Supply**:
  * **M1 (Highest Liquidity)**: Physical currency in circulation + Demand deposits (checking accounts) + Checkable traveler’s checks.
  * **M2 (Near Monies)**: M1 + Savings deposits + Small-denomination time deposits (CDs under $100k) + Retail money market mutual funds.
  * *Note: Credit cards are NOT money; they are pre-approved short-term loans!*
* **Financial Assets**:
  * **Money**: Perfectly liquid asset with zero nominal return.
  * **Bonds (Debt Securities)**: Legal IOU where borrower promises fixed periodic coupon payments and face value repayment at maturity.
  * **Stocks (Equity Securities)**: Fractional ownership in a corporation; returns come from dividends and capital gains.
  * **The Core Bond Theorem**:
    $$\\text{Bond Prices and Interest Rates are INVERSELY RELATED!}$$
    $$\\text{If } i \\uparrow \\implies P_{\\text{bond}} \\downarrow; \\quad \\text{If } i \\downarrow \\implies P_{\\text{bond}} \\uparrow$$`
      },
      {
        heading: '2. Fractional Reserve Banking & Commercial Bank T-Accounts (CED 4.4)',
        content: `Balance sheets, reserve requirements, and money creation:

* **Bank Balance Sheet (T-Account)**:
  * **Assets (What the bank owns / is owed)**:
    * *Reserves*: Cash in the vault + Deposits at the Federal Reserve.
      * **Required Reserves ($RR \\times \\text{Deposits}$)**: Mandatory legal reserves.
      * **Excess Reserves (Total - Required)**: Loanable funds that generate interest.
    * *Loans*: Outstanding debts owed to the bank by borrowers.
    * *Government Securities (Treasury Bonds)*: Yield interest income.
    * *Physical Assets*: Building, computer infrastructure.
  * **Liabilities & Equity (What the bank owes)**:
    * *Demand Deposits (Checking accounts)*: Customer money payable on demand.
    * *Owner\'s Equity (Bank Capital)*.
* **The Money Creation Process**:
  1. Customer deposits cash into checking $\\implies$ Demand deposits increase.
  2. Bank splits deposit into Required Reserves and Excess Reserves.
  3. Bank lends out **100% of Excess Reserves**.
  4. The loan is spent and redeposited in another bank $\\implies$ Banking system creates money:
     $$\\text{Maximum New Money Created} = \\text{Excess Reserves} \\times \\frac{1}{RR}$$`
      },
      {
        heading: '3. Monetary Policy in Limited vs. Ample Reserves Frameworks (CED 4.5)',
        content: `Central bank policy execution regimes:

* **Framework 1: Limited Reserves Regime (Traditional Model)**:
  * Banks hold scarce reserves; central bank shifts the **vertical Money Supply ($MS$)** curve:
    * **Open Market Operations (OMO)**:
      * *Buy Bonds $\\implies$ "Buy Bigger"* $\\implies$ Increases reserves $\\implies MS$ shifts right $\\implies$ Nominal interest rate falls ($i \\downarrow$).
      * *Sell Bonds $\\implies$ "Sell Smaller"* $\\implies$ Decreases reserves $\\implies MS$ shifts left $\\implies$ Nominal interest rate rises ($i \\uparrow$).
    * **Discount Rate**: The interest rate the central bank charges commercial banks for short-term emergency loans.
    * **Required Reserve Ratio ($RR$)**: Lowering $RR$ increases excess reserves.
* **Framework 2: Ample Reserves Regime (Modern Fed Operating System)**:
  * Commercial banks hold trillions in excess reserves (horizontal demand region for reserves).
  * The Fed administers rates directly without shifting reserve quantities:
    * **Interest on Reserve Balances (IORB)**: The primary monetary policy tool! Rate paid to banks for holding reserves at the Fed.
      * *Expansionary*: **Lower IORB** $\\implies$ Lowers federal funds policy rate $\\implies$ Commercial interest rates drop $\\implies I \\uparrow, C \\uparrow \\implies AD \\rightarrow$.
      * *Contractionary*: **Raise IORB** $\\implies$ Raises policy rate $\\implies I \\downarrow, C \\downarrow \\implies AD \\leftarrow$.
    * **Overnight Reverse Repurchase Agreement (ON RRP) Rate**: Serves as the sub-floor for market rates.`
      },
      {
        heading: '4. The Loanable Funds Market & The Crowding Out Effect (CED 4.6–4.7)',
        content: `Real interest rate determination and deficit consequences:

* **The Loanable Funds Market Graph**:
  * **Vertical Axis**: Real Interest Rate ($r\\%$).
  * **Horizontal Axis**: Quantity of Loanable Funds ($Q_{\\text{LF}}$).
  * **Demand for Loanable Funds ($D_{\\text{LF}}$)**: Borrowers seeking capital (business investment projects + government budget deficits). Downward sloping.
  * **Supply of Loanable Funds ($S_{\\text{LF}}$)**: Savers lending funds (private household savings + foreign capital inflows). Upward sloping.
* **The Crowding Out Mechanism**:
  1. Government implements expansionary fiscal policy (increases spending $G$ or cuts taxes $T$).
  2. Government incurs a **budget deficit** and must issue Treasury bonds to borrow money.
  3. Increased government borrowing **shifts the Demand for Loanable Funds to the RIGHT ($D_{\\text{LF}} \\rightarrow$)** (or reduces national savings, shifting $S_{\\text{LF}} \\leftarrow$).
  4. The equilibrium **Real Interest Rate RISES ($r \\uparrow$)**!
  5. Higher real interest rates reduce private business investment in physical capital ($I \\downarrow$) and consumer durable borrowing ($C \\downarrow$).
  6. **Long-Run Impact**: Lower physical capital investment dampens future economic growth and slows the outward shift of LRAS and PPC!`
      }
    ],
    workedExamples: [
      {
        title: 'T-Account Balance Sheet Analysis and Maximum Money Expansion',
        topicRef: 'CED Macro 4.4 Fractional Reserve Banking',
        question: 'First National Bank has the following balance sheet: Demand Deposits = $100,000; Total Reserves = $30,000; Loans = $50,000; Treasury Bonds = $20,000. The required reserve ratio is 10%. (a) Calculate the bank\'s Required Reserves and Excess Reserves. (b) What is the maximum dollar amount of new loans this single bank can immediately create? (c) What is the maximum expansion in the money supply across the entire banking system? (d) If a customer withdraws $5,000 in cash, what are the bank\'s new Excess Reserves?',
        solutionSteps: [
          'Step 1: Calculate Required Reserves: $\\text{Required Reserves} = \\text{Demand Deposits} \\times RR = \\$100,000 \\times 0.10 = \\$10,000$.',
          'Step 2: Calculate Excess Reserves: $\\text{Excess Reserves} = \\text{Total Reserves} - \\text{Required Reserves} = \\$30,000 - \\$10,000 = \\$20,000$.',
          'Step 3: Single bank loan capacity: A single commercial bank can lend ONLY its excess reserves $\\implies$ **Maximum single bank new loans = $20,000**.',
          'Step 4: Banking system expansion:',
          '  * Money Multiplier: $MM = \\frac{1}{RR} = \\frac{1}{0.10} = 10$.',
          '  * $\\text{Max Money Supply Expansion} = \\text{Excess Reserves} \\times MM = \\$20,000 \\times 10 = \\$200,000$.',
          'Step 5: Impact of $5,000 cash withdrawal:',
          '  * New Demand Deposits: $\\$100,000 - \\$5,000 = \\$95,000$.',
          '  * New Required Reserves: $\\$95,000 \\times 0.10 = \\$9,500$.',
          '  * New Total Reserves: $\\$30,000 - \\$5,000 = \\$25,000$.',
          '  * New Excess Reserves: $\\$25,000 - \\$9,500 = \\$15,500$.'
        ],
        finalAnswer: '(a) Required = $10,000; Excess = $20,000. (b) Single bank can loan $20,000. (c) Banking system expands money supply by up to $200,000. (d) New Excess Reserves = $15,500.',
        apScoringTip: 'Distinguish between "How much can ONE bank lend?" (only its excess reserves) vs. "How much can the ENTIRE banking system create?" (excess reserves × money multiplier)!'
      },
      {
        title: 'Connecting Government Deficits to the Loanable Funds Market and Crowding Out',
        topicRef: 'CED Macro 4.7 Crowding Out Effect',
        question: 'Suppose the government increases spending by $50 billion with no increase in taxes. (a) Draw/describe the impact on the Loanable Funds Market. (b) What happens to the Real Interest Rate? (c) Explain how this fiscal policy affects private business investment spending and long-run economic growth.',
        solutionSteps: [
          'Step 1: Loanable Funds Market effect: To finance its deficit, the government borrows by issuing bonds $\\implies$ **Demand for Loanable Funds shifts RIGHT ($D_{\\text{LF}} \\rightarrow$)**.',
          'Step 2: Real Interest Rate impact: The equilibrium **Real Interest Rate rises ($r \\uparrow$)** in the loanable funds market.',
          'Step 3: Impact on Private Investment: Because the cost of borrowing capital is higher, private businesses cancel marginal capital projects $\\implies$ **Private Business Investment decreases ($I \\downarrow$)** (Crowding Out).',
          'Step 4: Impact on Long-Run Growth: Less physical capital accumulation reduces the growth rate of labor productivity $\\implies$ **Long-run economic growth slows down** (LRAS and PPC shift outward more slowly).'
        ],
        finalAnswer: '(a) DLF shifts right. (b) Real interest rate increases. (c) Higher real interest rates crowd out private investment, slowing long-run capital accumulation and economic growth.',
        apScoringTip: 'Loanable Funds graphs use REAL interest rates ($r\\%$); Money Market graphs use NOMINAL interest rates ($i\\%$). Label your vertical axes with care!'
      }
    ],
    diagrams: [
      {
        id: 'money_market_graph',
        title: 'Money Market: Open Market Operations & Nominal Interest Rates',
        subtitle: 'Central Bank Shifting Money Supply Dictates Equilibrium Policy Rates',
        type: 'money_market_graph',
        description: 'Money market diagram showing vertical money supply MS1, downward-sloping money demand MD, rightward expansionary shift MS2 from bond purchases, and the resulting drop in nominal interest rates from i1 to i2.',
        takeaway: 'Central bank purchases of bonds expand the money supply and drive nominal interest rates down, stimulating investment and aggregate demand.'
      },
      {
        id: 'loanable_funds_graph',
        title: 'Loanable Funds Market: Budget Deficits & Crowding Out',
        subtitle: 'Government Borrowing Drives Up Real Interest Rates and Depresses Investment',
        type: 'loanable_funds_graph',
        description: 'Loanable funds graph illustrating upward-sloping savings supply SLF, downward-sloping demand DLF1, rightward shift to DLF2 due to government budget deficits, higher real interest rate r2, and the crowding out effect callout box.',
        takeaway: 'Government deficit spending drives real interest rates up, crowding out private investment and slowing capital formation.'
      }
    ],
    commonTraps: [
      'Confusing the Money Market (Nominal Interest Rate $i\\%$) with the Loanable Funds Market (Real Interest Rate $r\\%$).',
      'Thinking a cash deposit into a checking account immediately increases the M1 money supply. Currency in circulation drops by the exact amount demand deposits rise; immediate M1 is unchanged!',
      'Ignoring the new Ample Reserves regime tested on AP exams. In an ample reserves framework, the Fed adjusts the **Interest on Reserve Balances (IORB)** rate, NOT open market operations, to steer the policy rate!',
      'Believing bond prices and interest rates move in the same direction. They are ALWAYS INVERSE: when interest rates rise, bond prices FALL!'
    ],
    cramSheet: [
      'Bond Prices and Interest Rates are INVERSELY related ($i \\uparrow \\iff P_{\\text{bond}} \\downarrow$).',
      'Money Multiplier: $MM = 1 / rr$. Max Money Creation = $\\text{Excess Reserves} \\times MM$.',
      'Money Market = Nominal Interest Rate ($i\\%$); Loanable Funds = Real Interest Rate ($r\\%$).',
      'Ample reserves regime: Fed changes the IORB rate to conduct monetary policy.',
      'Deficit spending $\\implies D_{\\text{LF}}$ shifts right $\\implies$ Real Interest Rate rises $\\implies$ Private Investment is Crowded Out.',
      'Cash deposits do not change immediate M1; they create excess reserves for banking expansion.'
    ]
  },

  // =========================================================================
  // UNIT 5: LONG-RUN CONSEQUENCES OF STABILIZATION POLICIES
  // =========================================================================
  {
    unitId: 'u5',
    unitNumber: 5,
    title: 'Unit 5: Long-Run Consequences of Policy, Phillips Curve & Growth',
    examWeight: '20%–30% of AP Macroeconomics Exam',
    bigIdea: 'Macroeconomic policies generate long-run trade-offs between inflation and unemployment modeled by the Phillips Curve. Sustained economic growth requires increases in productivity and capital per worker, governed by supply-side policies and monetary stability.',
    keyTheorems: [
      {
        name: 'The Phillips Curve and AD-AS Mirror Relationship',
        conditions: 'Short-run vs. long-run trade-offs between inflation and unemployment.',
        conclusion: 'The Short-Run Phillips Curve (SRPC) slopes downward, demonstrating an inverse trade-off between inflation and unemployment. The Long-Run Phillips Curve (LRPC) is vertical at the Natural Rate of Unemployment (NRU).',
        apTip: 'A shift in Aggregate Demand causes a MOVEMENT ALONG the SRPC! A shift in Short-Run Aggregate Supply (SRAS) causes the entire SRPC to SHIFT IN THE OPPOSITE DIRECTION! (e.g. $SRAS \\leftarrow \\implies SRPC \\rightarrow$, causing stagflation).'
      },
      {
        name: 'The Quantity Theory of Money and The Equation of Exchange',
        conditions: 'Long-run relationship between money growth and general price inflation.',
        conclusion: '$$M \\times V = P \\times Y$$ Where $M$ = Money Supply, $V$ = Velocity of Money, $P$ = Price Level, and $Y$ = Real GDP. Assuming velocity and real output are stable in the long run, growth in the money supply leads directly to proportional hyperinflation!',
        apTip: 'Inflation is always and everywhere a monetary phenomenon when central banks print currency faster than real economic output growth.'
      },
      {
        name: 'Determinants of Long-Run Economic Growth',
        conditions: 'Sustained expansion of an economy’s potential output per capita over decades.',
        conclusion: 'Long-run economic growth is driven by increases in Labor Productivity, determined by: (1) Physical Capital per Worker, (2) Human Capital (education, skills), (3) Technological Progress, and (4) Institutional Property Rights and Infrastructure.',
        apTip: 'Demand-side fiscal/monetary policies do NOT create long-run growth; they close short-run gaps. Only supply-side factors shift the vertical LRAS and PPC outward!'
      }
    ],
    formulas: [
      {
        name: 'The Equation of Exchange (Quantity Theory)',
        latex: 'M \\times V = P \\times Y',
        explanation: 'Where $M$ = Money Supply, $V$ = Velocity of Money, $P$ = Price Level, and $Y$ = Real GDP ($P \\times Y$ = Nominal GDP).'
      },
      {
        name: 'Labor Productivity Growth',
        latex: '\\text{Labor Productivity} = \\frac{\\text{Real GDP}}{\\text{Aggregate Labor Hours}}',
        explanation: 'Real GDP per capita expands when productivity per worker rises faster than population growth.'
      },
      {
        name: 'Government Debt and Deficit Relationship',
        latex: '\\text{National Debt}_t = \\text{National Debt}_{t-1} + \\text{Annual Budget Deficit}_t',
        explanation: 'Deficit is a flow variable (annual shortfall); National Debt is a stock variable (accumulated debt over history).'
      }
    ],
    sections: [
      {
        heading: '1. The Phillips Curve: Short-Run Trade-off vs. Long-Run Vertical LRPC (CED 5.2)',
        content: `Inflation-unemployment dynamics and expectation shifts:

* **Short-Run Phillips Curve (SRPC)**:
  * Downward-sloping curve showing the inverse relationship between the **Inflation Rate ($\\%$)** on the vertical axis and the **Unemployment Rate ($u\\%$)** on the horizontal axis.
* **The AD-AS to Phillips Curve Mirror Mapping**:
  * **Shift in Aggregate Demand ($AD$) $\\implies$ MOVEMENT along the SRPC**:
    * If $AD$ shifts right ($AD \\rightarrow$): Output rises, unemployment falls, price level rises $\\implies$ **Movement UP and to the LEFT along the SRPC**.
    * If $AD$ shifts left ($AD \\leftarrow$): Output falls, unemployment rises, price level falls $\\implies$ **Movement DOWN and to the RIGHT along the SRPC**.
  * **Shift in Aggregate Supply ($SRAS$) $\\implies$ SHIFT of the SRPC**:
    * If $SRAS$ shifts left (Stagflation / negative supply shock): Price level rises and unemployment rises $\\implies$ **SRPC shifts RIGHT ($SRPC \\rightarrow$)**!
    * If $SRAS$ shifts right (Positive supply shock / productivity surge): Price level falls and unemployment falls $\\implies$ **SRPC shifts LEFT ($SRPC \\leftarrow$)**!
* **Long-Run Phillips Curve (LRPC)**:
  * Vertical line at the **Natural Rate of Unemployment ($NRU$)**.
  * In the long run, there is NO trade-off between inflation and unemployment.
  * *Expected Inflation*: When workers and firms adjust their inflation expectations upward, the SRPC shifts vertically upward!`
      },
      {
        heading: '2. Money Growth, The Equation of Exchange & Hyperinflation (CED 5.3)',
        content: `Monetary quantity theory and price level surges:

* **The Equation of Exchange**:
  $$M \\times V = P \\times Y$$
  * $M$: Total Money Supply (M1 or M2).
  * $V$: **Velocity of Money** (the average number of times a single dollar bill is spent on final goods in a year).
  * $P$: General Price Level (GDP Deflator).
  * $Y$: Real GDP (physical output).
  * $P \\times Y$: **Nominal GDP**.
* **The Classical Quantity Theory of Money**:
  * Assumes Velocity ($V$) is stable and determined by institutional payment habits, and Real GDP ($Y$) is fixed at potential output in the long run.
  * Therefore, **any percentage increase in the Money Supply ($M$) leads directly to an equal percentage increase in the Price Level ($P$)**:
    $$\\%\\Delta M = \\%\\Delta P \\quad (\\text{Inflation})$$
  * When governments print vast quantities of fiat currency to finance budget deficits, hyperinflation ensues (e.g. Weimar Republic 1923, Zimbabwe 2008).`
      },
      {
        heading: '3. Government Deficits, National Debt & Crowding Out Redux (CED 5.4–5.5)',
        content: `Fiscal sustainability and private capital formation:

* **Budget Deficits vs. National Debt**:
  * **Budget Deficit**: An annual flow measurement where government expenditures exceed tax revenues in a given fiscal year ($G > T$).
  * **Budget Surplus**: An annual flow measurement where tax revenues exceed expenditures ($T > G$).
  * **National Debt**: The cumulative stock total of all past deficits minus all past surpluses owed to bondholders.
* **The Long-Run Threat of Deficits**:
  * Deficits require governments to issue Treasury bonds, absorbing loanable funds.
  * Higher real interest rates crowd out private business investment in plants, tools, and research.
  * Over time, a smaller capital stock lowers the capital-to-labor ratio, diminishing future worker productivity and economic growth!`
      },
      {
        heading: '4. Long-Run Economic Growth: Determinants & Supply-Side Policies (CED 5.6)',
        content: `Sustained expansions in potential real GDP per capita:

* **Defining Economic Growth**:
  * An increase in an economy\'s productive capacity over time, measured by the **growth rate of Real GDP per capita**.
  * **Visualized Graphically By**:
    1. An **outward shift of the Production Possibilities Curve (PPC)**.
    2. A **rightward shift of the Long-Run Aggregate Supply (LRAS)** curve.
* **The Core Drivers of Growth (Productivity)**:
  1. **Physical Capital per Worker**: Equipping workers with more and superior machinery, factories, and computing tools.
  2. **Human Capital**: Education, specialized workforce training, and healthcare.
  3. **Technological Progress**: Scientific innovations that increase output per unit of input.
  4. **Public Infrastructure & Institutions**: Reliable transportation, electrical grids, rule of law, and secure property rights.
* **Supply-Side Fiscal Policies**:
  * Policies aimed directly at shifting the LRAS curve to the right:
    * Research and development (R&D) tax credits.
    * Lowering corporate income tax rates to stimulate capital formation.
    * Deregulation to reduce business compliance overhead.`
      }
    ],
    workedExamples: [
      {
        title: 'Mapping an Aggregate Demand Shock to the Phillips Curve',
        topicRef: 'CED Macro 5.2 Demand Shocks and Phillips Curve Movements',
        question: 'Suppose the economy is initially at full employment with 5% inflation and 4% unemployment (NRU = 4%). A surge in business investment shifts Aggregate Demand to the right. (a) Describe the short-run changes in Price Level, Real GDP, and Unemployment. (b) Explain how this change is depicted on the Phillips Curve graph. (c) In the long run, what happens to the Short-Run Phillips Curve as inflation expectations adjust?',
        solutionSteps: [
          'Step 1: AD shock effect: Rightward shift of Aggregate Demand ($AD \\rightarrow$) causes:',
          '  * Price Level rises ($PL \\uparrow$); Real GDP rises above potential ($Y > Y_f$); Unemployment falls below NRU ($u < 4\\%$).',
          'Step 2: Mapping to Phillips Curve:',
          '  * Because the shock originated on the DEMAND side, this is represented by a **MOVEMENT ALONG the existing SRPC**.',
          '  * Movement is **UP and to the LEFT**: Inflation rises above 5% and unemployment falls below 4%.',
          'Step 3: Long-run expectations adjustment:',
          '  * Workers and firms realize actual inflation is higher than anticipated and adjust expected inflation upward.',
          '  * Workers negotiate higher nominal wages to offset cost-of-living increases.',
          '  * Higher wage costs shift Short-Run Aggregate Supply to the left ($SRAS \\leftarrow$).',
          '  * On the Phillips Curve, higher expected inflation **shifts the entire SRPC to the RIGHT ($SRPC \\rightarrow$)**!',
          '  * The economy returns to the Natural Rate of Unemployment ($u = 4\\%$) along the vertical LRPC, but at a permanently higher inflation rate.'
        ],
        finalAnswer: '(a) PL rises, Real GDP rises, unemployment falls. (b) Movement up-left along the existing SRPC. (c) In the long run, higher inflation expectations shift the SRPC to the right, returning unemployment to the 4% NRU.',
        apScoringTip: 'Remember the golden rule: Shifts in AD cause MOVEMENTS along the SRPC. Shifts in SRAS cause SHIFTS of the SRPC in the opposite direction!'
      },
      {
        title: 'Calculating Money Growth and Inflation with the Equation of Exchange',
        topicRef: 'CED Macro 5.3 Quantity Theory of Money',
        question: 'Suppose an economy has a money supply of M = $500 billion, a velocity of money V = 4, and real output of Y = $1,000 billion. (a) Calculate the current Price Level (PL) and Nominal GDP. (b) If the central bank increases the money supply by 10% to $550 billion while velocity and real output remain constant, calculate the new Price Level. (c) What is the resulting inflation rate?',
        solutionSteps: [
          'Step 1: Apply Equation of Exchange ($M \\times V = P \\times Y$):',
          '  * Nominal GDP $= M \\times V = \\$500 \\times 4 = \\$2,000 \\text{ billion}$.',
          '  * Calculate Price Level: $P = \\frac{M \\times V}{Y} = \\frac{\\$2,000}{1,000} = 2.0$.',
          'Step 2: Calculate new Price Level after 10% money supply increase ($M = \\$550$):',
          '  * New Nominal GDP $= \\$550 \\times 4 = \\$2,200 \\text{ billion}$.',
          '  * New Price Level: $P_2 = \\frac{\\$2,200}{1,000} = 2.2$.',
          'Step 3: Calculate Inflation Rate:',
          '  * $\\text{Inflation} = \\frac{P_2 - P_1}{P_1} \\times 100 = \\frac{2.2 - 2.0}{2.0} \\times 100 = \\frac{0.2}{2.0} \\times 100 = 10.0\\%$.',
          '  * A 10% increase in money supply generates an exact 10% increase in the price level!'
        ],
        finalAnswer: '(a) Price Level = 2.0; Nominal GDP = $2,000 billion. (b) New Price Level = 2.2. (c) Inflation Rate = 10.0%.',
        apScoringTip: 'Use the percentage approximation formula on MCQs: $\\%\\Delta M + \\%\\Delta V = \\%\\Delta P + \\%\\Delta Y$. If V and Y are constant, $\\%\\Delta M = \\%\\Delta P$!'
      }
    ],
    diagrams: [
      {
        id: 'phillips_curve_graph',
        title: 'The Phillips Curve: Short-Run Trade-off vs. Vertical LRPC',
        subtitle: 'Demand-Side Movements Along SRPC vs. Supply-Shock Shifts',
        type: 'phillips_curve_graph',
        description: 'Phillips curve graph illustrating downward-sloping SRPC1, vertical LRPC at the Natural Rate of Unemployment (NRU), boom and slump points along the curve, and the rightward stagflation shift to SRPC2.',
        takeaway: 'Demand shifts cause movements along SRPC; supply shocks shift the SRPC in the opposite direction. In the long run, the Phillips Curve is vertical at the NRU.'
      }
    ],
    commonTraps: [
      'Shifting the Phillips Curve when Aggregate Demand changes. An AD shift causes a MOVEMENT ALONG the SRPC; only supply shocks or inflation expectation changes SHIFT the SRPC!',
      'Believing demand-side fiscal stimulus produces long-run economic growth. Fiscal stimulus closes short-run gaps; long-run growth requires increases in capital stock, human capital, and technology!',
      'Thinking velocity of money changes wildly. The Quantity Theory assumes velocity is stable in the long run, linking money growth directly to price inflation.'
    ],
    cramSheet: [
      'Phillips Curve: $AD$ shift = MOVEMENT along SRPC. $SRAS$ shift = SHIFT of SRPC in opposite direction.',
      'LRPC is vertical at the Natural Rate of Unemployment (NRU).',
      'Equation of Exchange: $M \\times V = P \\times Y$. Printing money causes inflation.',
      'Deficit = Annual shortfall ($G > T$); Debt = Cumulative total of all past deficits.',
      'Economic Growth = Increase in Real GDP per capita. Outward shift of PPC = Rightward shift of LRAS.',
      'Growth drivers: Physical capital, human capital, technology, and public institutions.'
    ]
  },

  // =========================================================================
  // UNIT 6: OPEN ECONOMY—INTERNATIONAL TRADE & FINANCE (FOREX)
  // =========================================================================
  {
    unitId: 'u6',
    unitNumber: 6,
    title: 'Unit 6: Open Economy, International Finance & The FOREX Market',
    examWeight: '10%–15% of AP Macroeconomics Exam',
    bigIdea: 'Open economies interact through international trade and financial capital flows. The Balance of Payments balances current and financial accounts, while foreign exchange (FOREX) currency movements impact net exports and aggregate demand.',
    keyTheorems: [
      {
        name: 'The Balance of Payments Accounting Identity',
        conditions: 'Tracking all international economic transactions between a country and the rest of the world.',
        conclusion: '$$\\text{Current Account (CA)} + \\text{Financial Account (FA)} = 0$$ The Current Account records goods, services, net investment income, and unilateral transfers. The Financial Account records purchases and sales of financial assets (stocks, bonds, bank deposits). A Current Account deficit must be balanced by a Financial Account surplus (net capital inflows)!',
        apTip: 'Buying a Toyota car made in Japan is a Current Account debit. Buying a Japanese government bond or Tokyo real estate is a Financial Account transaction!'
      },
      {
        name: 'The Real Interest Rate Link to FOREX and Net Exports',
        conditions: 'Domestic real interest rates changing relative to foreign interest rates.',
        conclusion: 'Higher domestic real interest rates attract foreign financial investors seeking superior returns $\\implies$ Financial capital inflows into the domestic economy $\\implies$ Demand for domestic currency in the FOREX market shifts RIGHT $\\implies$ Domestic currency **APPRECIATES**!',
        apTip: 'The feedback loop: Currency appreciation makes domestic exports expensive and foreign imports cheap $\\implies$ Net Exports decrease ($X_n \\downarrow$) $\\implies$ Aggregate Demand shifts left!'
      },
      {
        name: 'The Reciprocal Currency Exchange Principle',
        conditions: 'Any two currencies traded in the foreign exchange market (e.g. US Dollar vs. Euro).',
        conclusion: 'Currency valuation is strictly reciprocal: if Currency A appreciates relative to Currency B, then Currency B MUST simultaneously depreciate relative to Currency A! If Americans demand more Euros (shifting Demand for Euros right), Americans must supply more Dollars (shifting Supply of Dollars right).',
        apTip: 'Both currencies cannot appreciate at the same time. One always strengthens while the other weakens!'
      }
    ],
    formulas: [
      {
        name: 'Balance of Payments Identity',
        latex: '\\text{Current Account (CA)} + \\text{Financial Account (FA)} = 0',
        explanation: 'Where $\\text{CA} = \\text{Net Exports } (X_n) + \\text{Net Investment Income} + \\text{Net Transfers}$.'
      },
      {
        name: 'Exchange Rate Conversion',
        latex: 'e_{\\text{foreign/domestic}} = \\frac{1}{e_{\\text{domestic/foreign}}}',
        explanation: 'If $1 = €0.80$, then €1 = $1 / 0.80 = $1.25.'
      },
      {
        name: 'Net Export Feedback Loop',
        latex: '\\text{Domestic Currency Appreciates} \\implies \\text{Exports } \\downarrow, \\; \\text{Imports } \\uparrow \\implies X_n \\downarrow \\implies AD \\leftarrow',
        explanation: 'An appreciated currency makes exports uncompetitive and foreign imports cheap.'
      }
    ],
    sections: [
      {
        heading: '1. Balance of Payments Accounts: Current vs. Financial Account (CED 6.1)',
        content: `International accounting and balance of payments framework:

* **1. Current Account (CA)**:
  * Measures the international flow of current goods, services, and income:
    1. **Trade in Goods and Services (Net Exports, $X_n$)**: Exports (credit, money enters) minus Imports (debit, money leaves).
    2. **Net Investment Income**: Dividends, interest, and profits earned by domestic citizens from foreign investments minus earnings paid to foreigners on domestic assets.
    3. **Net Unilateral Transfers**: One-way transfers without a good or service exchanged (foreign aid sent abroad, worker remittances to families overseas).
* **2. Financial Account (FA) / Capital Account**:
  * Measures the purchase and sale of financial and physical assets across borders:
    * Foreign Direct Investment (FDI): A domestic company building a factory abroad.
    * Financial Capital Flows: Foreign purchases of domestic Treasury bonds, corporate debt, or domestic equities.
* **The Fundamental Identity**:
  $$\\text{Current Account} + \\text{Financial Account} = 0$$
  * If a nation imports more goods than it exports (Current Account Deficit), foreigners accumulate domestic currency and use it to buy domestic bonds or assets $\\implies$ **Financial Account Surplus**!`
      },
      {
        heading: '2. The Foreign Exchange (FOREX) Market: Graphs & Mechanics (CED 6.2–6.3)',
        content: `Currency exchange rates, demand/supply curves, and equilibrium:

* **FOREX Market Graph Structure**:
  * **Vertical Axis**: Exchange Rate (Price of one currency in terms of another, e.g. Euros per USD: $€ / \\$$).
  * **Horizontal Axis**: Quantity of domestic currency (e.g. Quantity of USD, $Q_\\$$).
  * **Demand for Currency ($D_\\$)**: Downward sloping. Foreigners demanding domestic currency to purchase domestic goods, services, or financial assets (bonds).
  * **Supply of Currency ($S_\\$)**: Upward sloping. Domestic residents supplying their own currency to buy foreign goods or foreign financial assets.
* **Appreciation vs. Depreciation**:
  * **Appreciation**: An increase in the value of a currency; it takes more foreign currency to buy 1 unit of domestic currency.
  * **Depreciation**: A decrease in the value of a currency; it takes fewer foreign units to buy 1 unit of domestic currency.`
      },
      {
        heading: '3. Shifters of the FOREX Market: The Four Determinants (CED 6.3)',
        content: `What causes currencies to appreciate or depreciate:

1. **Relative Real Interest Rates (Most Tested on AP Exam!)**:
   * If real interest rates in Country A rise relative to Country B:
     * Foreign financial capital flows into Country A seeking higher yields (Financial Account surplus).
     * Foreign investors must first buy Country A\'s currency $\\implies$ **Demand for Country A\'s currency shifts RIGHT ($D_A \\rightarrow$)**.
     * **Country A\'s currency APPRECIATES**!
2. **Relative Price Levels / Inflation Rates**:
   * If inflation in Country A is higher than Country B:
     * Country A\'s goods become relatively expensive.
     * Foreigners buy fewer Country A goods ($D_A \\leftarrow$); Country A residents buy cheaper foreign goods ($S_A \\rightarrow$).
     * **Country A\'s currency DEPRECIATES**!
3. **Relative National Incomes / Economic Growth**:
   * If national income in Country A grows rapidly:
     * Wealthier domestic consumers buy more imported foreign goods.
     * Country A residents supply more currency to buy foreign imports ($S_A \\rightarrow$).
     * **Country A\'s currency DEPRECIATES**!
4. **Consumer Tastes and Preferences**:
   * If foreign consumers develop a preference for Country A\'s cultural goods or electronics $\\implies D_A \\rightarrow \\implies$ Currency appreciates.`
      },
      {
        heading: '4. Exchange Rates & The Net Export Feedback Loop (CED 6.4–6.5)',
        content: `Macro policy interaction with open trade balances:

* **The Currency Appreciation Effect**:
  * Domestic currency appreciates (stronger dollar).
  * Domestic goods become expensive for foreign consumers $\\implies$ **Exports decrease ($X \\downarrow$)**.
  * Foreign goods become cheaper for domestic consumers $\\implies$ **Imports increase ($M \\uparrow$)**.
  * **Net Exports decrease ($X_n \\downarrow$) $\\implies$ Aggregate Demand shifts left ($AD \\leftarrow$)**!
* **The Currency Depreciation Effect**:
  * Domestic currency depreciates (weaker dollar).
  * Domestic goods become cheaper for foreign consumers $\\implies$ **Exports increase ($X \\uparrow$)**.
  * Foreign imports become expensive $\\implies$ **Imports decrease ($M \\downarrow$)**.
  * **Net Exports increase ($X_n \\uparrow$) $\\implies$ Aggregate Demand shifts right ($AD \\rightarrow$)**!
* **The Fiscal Policy Feedback Dilemma**:
  * Government runs a budget deficit $\\implies$ Real interest rates rise ($r \\uparrow$) in the loanable funds market $\\implies$ Foreign capital inflows $\\implies$ Domestic currency appreciates $\\implies$ Net Exports decrease ($X_n \\downarrow$) $\\implies$ **Partially offsets expansionary fiscal policy**!`
      }
    ],
    workedExamples: [
      {
        title: 'Tracing the Impact of Central Bank Rate Hikes on FOREX and Net Exports',
        topicRef: 'CED Macro 6.3 Exchange Rates and 6.4 Net Exports',
        question: 'Suppose real interest rates in the United States rise relative to interest rates in the European Union. (a) Explain the effect on the demand for US dollars in the foreign exchange market. (b) What happens to the value of the US dollar relative to the Euro? (c) What happens to the value of the Euro relative to the US dollar? (d) How will this exchange rate change affect US Net Exports and US Aggregate Demand?',
        solutionSteps: [
          'Step 1: Capital flow motivation: European financial investors seek higher returns on US financial assets (e.g. US Treasury bonds).',
          'Step 2: FOREX demand: To purchase US bonds, Europeans must convert Euros into Dollars $\\implies$ **Demand for US Dollars shifts RIGHT ($D_\\$ \\rightarrow$)**.',
          'Step 3: Currency valuation: Increased demand raises the exchange rate $\\implies$ The **US Dollar APPRECIATES** relative to the Euro.',
          'Step 4: Reciprocal currency: By the reciprocal principle, the **Euro DEPRECIATES** relative to the US Dollar.',
          'Step 5: Impact on trade and AD: An appreciated dollar makes American exports more expensive for Europeans and European imports cheaper for Americans:',
          '  * US Exports decrease; US Imports increase.',
          '  * **US Net Exports decrease ($X_n \\downarrow$)**.',
          '  * Because Net Exports is a component of AD ($AD = C + I + G + X_n$), **US Aggregate Demand shifts LEFT ($AD \\leftarrow$)**.'
        ],
        finalAnswer: '(a) Demand for USD shifts right. (b) USD appreciates. (c) Euro depreciates. (d) US Net Exports decrease and US Aggregate Demand shifts left.',
        apScoringTip: 'Remember the complete chain of causation: Interest rate rises -> Capital inflows -> Currency appreciates -> Exports fall, Imports rise -> Net Exports fall -> AD shifts left!'
      },
      {
        title: 'Classifying Transactions in Balance of Payments Accounts',
        topicRef: 'CED Macro 6.1 Balance of Payments',
        question: 'Classify each of the following international transactions as belonging to the Current Account or the Financial Account, and state whether it is a credit or a debit for the United States: (a) An American tourist buys wine in France. (b) A German investor buys shares of Apple stock on the NASDAQ. (c) A Mexican worker living in the US sends $500 back to family in Mexico. (d) The US government pays interest to Chinese holders of US Treasury bonds.',
        solutionSteps: [
          'Step 1: (a) American tourist buying French wine:',
          '  * This is an import of a foreign good $\\implies$ **Current Account**.',
          '  * Money leaves the United States $\\implies$ **Debit (-)**.',
          'Step 2: (b) German investor buying Apple stock:',
          '  * This is a purchase of a domestic financial asset by a foreigner $\\implies$ **Financial Account**.',
          '  * Foreign money enters the United States $\\implies$ **Credit (+)**.',
          'Step 3: (c) Mexican worker sending remittances home:',
          '  * This is an unrequited unilateral transfer $\\implies$ **Current Account**.',
          '  * Money leaves the United States $\\implies$ **Debit (-)**.',
          'Step 4: (d) US paying interest on Treasury bonds to China:',
          '  * Payment of investment income to foreign asset holders $\\implies$ **Current Account (Net Investment Income)**.',
          '  * Money leaves the United States $\\implies$ **Debit (-)**.'
        ],
        finalAnswer: '(a) Current Account (Debit). (b) Financial Account (Credit). (c) Current Account (Debit). (d) Current Account (Debit).',
        apScoringTip: 'Interest payments on debt are CURRENT ACCOUNT items (investment income), while the purchase/sale of the underlying bond is a FINANCIAL ACCOUNT item!'
      }
    ],
    diagrams: [
      {
        id: 'forex_market_graph',
        title: 'Foreign Exchange (FOREX) Market: Currency Appreciation',
        subtitle: 'Capital Inflows Shift Currency Demand Right, Raising Exchange Rates',
        type: 'forex_market_graph',
        description: 'FOREX market graph showing exchange rate on vertical axis, downward-sloping Demand D$1, rightward shift to D$2 due to high real interest rate capital inflows, upward-sloping Supply S$, and higher equilibrium exchange rate e2.',
        takeaway: 'Higher real interest rates attract foreign capital, appreciating the domestic currency and reducing net exports.'
      }
    ],
    commonTraps: [
      'Assuming an appreciating currency is always good for an economy. A strong currency hurts domestic exporters and reduces net exports, dampening Aggregate Demand!',
      'Thinking both currencies can appreciate at the same time. Exchange rates are reciprocal; if one currency appreciates, the other MUST depreciate.',
      'Confusing the Current Account with the Financial Account. Buying physical goods and services is Current Account; buying financial assets (stocks, bonds, real estate) is Financial Account!',
      'Forgetting that payments of dividends and interest belong in the Current Account under Net Investment Income, not the Financial Account.'
    ],
    cramSheet: [
      'Balance of Payments: Current Account + Financial Account = 0.',
      'Current Account: Goods, Services, Net Investment Income, Unilateral Transfers.',
      'Financial Account: Foreign Direct Investment, Stocks, Bonds, Bank Deposits.',
      'Higher domestic real interest rates $\\implies$ Capital inflows $\\implies$ Currency Appreciates.',
      'Currency Appreciates $\\implies$ Exports fall, Imports rise $\\implies$ Net Exports ($X_n$) decrease $\\implies AD$ falls.',
      'Currency Depreciates $\\implies$ Exports rise, Imports fall $\\implies$ Net Exports ($X_n$) increase $\\implies AD$ rises.'
    ]
  }
];
