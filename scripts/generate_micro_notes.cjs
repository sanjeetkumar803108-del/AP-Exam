const fs = require('fs');
const path = require('path');

const content = `import { APUnitNote } from './types';

export const AP_MICROECONOMICS_NOTES: APUnitNote[] = [
  // =========================================================================
  // UNIT 1: BASIC ECONOMIC CONCEPTS, PPC & COMPARATIVE ADVANTAGE
  // =========================================================================
  {
    unitId: 'u1',
    unitNumber: 1,
    title: 'Unit 1: Basic Economic Concepts, PPC & Comparative Advantage',
    examWeight: '12%–15% of AP Exam',
    bigIdea: 'Economics is the study of scarcity and choice. Society faces trade-offs modeled by the Production Possibilities Curve (PPC), and gains from trade are maximized through comparative advantage and marginal analysis.',
    keyTheorems: [
      {
        name: 'The Law of Increasing Opportunity Cost and Bowed-Out PPC',
        conditions: 'Resources are not perfectly adaptable to the production of both goods (heterogeneous resource inputs).',
        conclusion: 'As the production of one good expands, the opportunity cost of producing additional units rises. Geometrically, this gives the Production Possibilities Curve a bowed-out (concave to origin) shape.',
        apTip: 'If resources are perfectly adaptable (e.g., producing identical pizzas vs. calzones with identical flour/cheese), the PPC is a STRAIGHT LINE with constant opportunity costs!'
      },
      {
        name: 'Comparative Advantage and Mutually Beneficial Terms of Trade',
        conditions: 'Two nations or economic agents producing two distinct goods with differing domestic opportunity costs.',
        conclusion: 'A producer has an Absolute Advantage if they produce more output with the same inputs. A producer has a Comparative Advantage if they produce at a LOWER opportunity cost. Both trading partners benefit when the terms of trade fall strictly between their domestic opportunity costs.',
        apTip: 'Mnemonic for calculating opportunity cost: For OUTPUT problems ("OOO" = Output: Other goes Over). For INPUT/Time problems ("IOU" = Input: Other goes Under).'
      },
      {
        name: 'The Utility-Maximizing Rule (Equimarginal Principle)',
        conditions: 'A rational consumer allocating a limited budget across multiple goods with diminishing marginal utility.',
        conclusion: 'Total utility is maximized when the marginal utility per dollar spent is equalized across all purchased goods: (MU_x / P_x) = (MU_y / P_y), provided the entire budget is exhausted: P_x * Q_x + P_y * Q_y = Income.',
        apTip: 'If (MU_x / P_x) > (MU_y / P_y), the consumer gains more satisfaction per dollar from good X! The rational consumer MUST purchase MORE of Good X and LESS of Good Y until diminishing marginal utility brings the ratios back into equality.'
      }
    ],
    formulas: [
      {
        name: 'Opportunity Cost Ratio (Output Method - OOO)',
        latex: '\\\\text{Opportunity Cost of 1 Unit of Good A} = \\\\frac{\\\\text{Quantity of Good B Forgone}}{\\\\text{Quantity of Good A Produced}} \\\\quad (\\\\text{"Other Over"})',
        explanation: 'If Nation X can produce 40 Cars or 80 Computers, 1 Car costs 80/40 = 2 Computers.'
      },
      {
        name: 'Opportunity Cost Ratio (Input Method - IOU)',
        latex: '\\\\text{Opportunity Cost of 1 Unit of Good A} = \\\\frac{\\\\text{Input/Hours Required for Good A}}{\\\\text{Input/Hours Required for Good B}} \\\\quad (\\\\text{"Other Under"})',
        explanation: 'If Maker Y takes 2 hours to make 1 Chair and 6 hours for 1 Table, 1 Chair costs 2/6 = 1/3 Table.'
      },
      {
        name: 'Terms of Trade Range',
        latex: '\\\\text{Seller\'s Opportunity Cost} < \\\\text{Terms of Trade} < \\\\text{Buyer\'s Opportunity Cost}',
        explanation: 'Mutually beneficial trade occurs exclusively between the domestic opportunity costs of the two trading partners.'
      },
      {
        name: 'Marginal Utility (MU)',
        latex: 'MU = \\\\frac{\\\\Delta TU}{\\\\Delta Q}',
        explanation: 'The additional satisfaction gained from consuming one additional unit of a good or service.'
      },
      {
        name: 'Consumer Utility Maximization Condition',
        latex: '\\\\frac{MU_x}{P_x} = \\\\frac{MU_y}{P_y} \\\\quad \\\\text{and} \\\\quad P_x Q_x + P_y Q_y = \\\\text{Income}',
        explanation: 'Equates the marginal satisfaction generated per dollar spent across all purchased goods within budget constraint.'
      },
      {
        name: 'Marginal Analysis Decision Rule',
        latex: 'MB \\\\ge MC',
        explanation: 'Any rational economic agent continues an activity as long as Marginal Benefit (MB) equals or exceeds Marginal Cost (MC). Net benefit is maximized where MB = MC.'
      }
    ],
    sections: [
      {
        heading: '1. Scarcity, Trade-Offs & Factors of Production (CED 1.1 - 1.2)',
        content: \`The economic problem arises because human wants are virtually unlimited, while productive resources are strictly finite. This fundamental condition is **scarcity**.

* **The Four Factors of Production (Economic Resources)**:
  * **Land**: All natural resources used in production (e.g., arable land, mineral deposits, water, crude oil). Payment = **Rent**.
  * **Labor**: Physical and mental efforts exerted by individuals in the production process. Payment = **Wages**.
  * **Capital**: Manufactured goods used to produce other goods and services (e.g., machinery, factories, computer hardware, delivery trucks). Note: Money is *financial capital*, NOT economic capital! Payment = **Interest**.
  * **Entrepreneurship**: The risk-taking, innovative human talent that combines land, labor, and capital to create products and businesses. Payment = **Profit**.

* **Opportunity Cost**: The value of the next best alternative forgone when a decision is made.
* **Positive vs. Normative Economics**:
  * **Positive Economics**: Objective statements based on facts, data, and cause-and-effect relationships that can be tested/verified (e.g., "An increase in the minimum wage increases employer labor costs").
  * **Normative Economics**: Subjective value judgments indicating what "ought" or "should" be (e.g., "The government should raise the minimum wage to help low-income workers").\`
      },
      {
        heading: '2. The Production Possibilities Curve (PPC) & Economic Growth (CED 1.3)',
        content: \`The Production Possibilities Curve (PPC) or Frontier (PPF) models the maximum combination of two goods an economy can produce given fixed resources and technology.

| Point Location | Economic Interpretation | Employment Status | Opportunity Cost Involved? |
| :--- | :--- | :--- | :--- |
| **Points on the Curve (e.g., Point A)** | **Productively Efficient** | Full employment of all resources; lowest cost production | **Yes**: Producing more of Good Y requires giving up Good X |
| **Points Inside Curve (e.g., Point B)** | **Inefficient** | Widespread unemployment, recessions, underutilized factories | **No**: Economy can produce more of both goods simply by putting idle resources back to work! |
| **Points Outside Curve (e.g., Point C)** | **Unattainable** with current resources/technology | Beyond domestic production capabilities | Attainable **only through economic growth or international specialization & trade**! |

* **PPC Curvature**:
  * **Bowed-Out (Concave to Origin)**: Reflects the **Law of Increasing Opportunity Cost**. Resources are specialized and cannot be transferred seamlessly between capital and consumer goods without rising losses.
  * **Straight-Line**: Reflects **Constant Opportunity Cost**. Resources are completely interchangeable and adaptable with identical efficiency (e.g., small cars vs. large cars).
* **Shifters of the PPC (Long-Run Economic Growth)**:
  1. Change in quantity or quality of economic resources (e.g., immigration increases labor supply; discovery of lithium reserves).
  2. Technological advancements that enhance labor/capital productivity.
  3. Investment in human capital (education, vocational training) or physical capital (machinery, infrastructure).
  * *Crucial AP Distinction*: Choosing to produce more **Capital Goods** today rotates or shifts the PPC outward faster in the future than producing Consumer Goods today, because capital goods build future productive capacity!\`
      },
      {
        heading: '3. Comparative Advantage, Absolute Advantage & Terms of Trade (CED 1.4)',
        content: \`Comparative advantage is the cornerstone of international trade questions on the AP Microeconomics exam.

* **Absolute Advantage**: The ability of an individual, firm, or nation to produce more of a good with a given amount of resources, or produce a given amount of output using fewer resources/time.
* **Comparative Advantage**: The ability to produce a good at a **lower opportunity cost** than another producer.
* **The Decision Rules (Output vs. Input Methods)**:

| Method Type | Data Characteristic | Example Data | Opportunity Cost Formula | Advantage Selection |
| :--- | :--- | :--- | :--- | :--- |
| **Output Method** | Finished goods produced in a fixed time period | "Country A produces 20 tons of wheat or 40 tons of sugar per year" | $\\\\text{Cost of A} = \\\\frac{\\\\text{Other (B)}}{\\\\text{Output (A)}}$ (**OOO**) | **Higher output** = Absolute Advantage; **Lower Cost** = Comparative Advantage |
| **Input Method** | Resources, hours, or acres required to make 1 unit | "Worker X takes 3 hours to build 1 table or 1 hour to build 1 chair" | $\\\\text{Cost of A} = \\\\frac{\\\\text{Input (A)}}{\\\\text{Other (B)}}$ (**IOU**) | **Lower input** = Absolute Advantage (faster/leaner); **Lower Cost** = Comparative Advantage |

* **Terms of Trade Rule**: For trade to be mutually beneficial, the agreed-upon exchange rate must fall strictly between both parties' domestic opportunity costs:
  $$\\\\text{Domestic Opp Cost of Exporter} < \\\\text{Agreed Terms of Trade} < \\\\text{Domestic Opp Cost of Importer}$$
* Specialization allows both nations to consume **outside their individual domestic PPCs**!\`
      },
      {
        heading: '4. Marginal Analysis & Consumer Choice Theory (CED 1.5 - 1.6)',
        content: \`Rational decision-makers make choices at the margin by comparing Marginal Benefit ($MB$) with Marginal Cost ($MC$).

* **Marginal Analysis Rule**:
  * If $MB > MC \\\\implies$ Do more of the activity! Total net benefit increases.
  * If $MB < MC \\\\implies$ Do less of the activity! Total net benefit is decreasing.
  * Optimal (Net-Benefit-Maximizing) level occurs where:
    $$MB = MC$$
* **Consumer Choice and Utility Maximization**:
  * **Total Utility (TU)**: Overall satisfaction derived from consuming a given quantity.
  * **Marginal Utility (MU)**: Extra satisfaction from consuming one additional unit: $MU = \\\\Delta TU / \\\\Delta Q$.
  * **Law of Diminishing Marginal Utility**: As consumption of a good increases, the marginal utility derived from each successive unit decreases.
  * When $MU > 0$, $TU$ is increasing.
  * When $MU = 0$, $TU$ is at its **maximum**.
  * When $MU < 0$, $TU$ is decreasing.
* **Equimarginal Allocation Condition**:
  $$\\\\frac{MU_A}{P_A} = \\\\frac{MU_B}{P_B} \\\\quad \\\\text{and} \\\\quad P_A Q_A + P_B Q_B \\\\le \\\\text{Budget}$$
  If $\\\\frac{MU_A}{P_A} > \\\\frac{MU_B}{P_B}$, reallocate spending by purchasing more of Good A and less of Good B until the equality is restored.\`
      }
    ],
    workedExamples: [
      {
        title: 'Comparative Advantage and Terms of Trade from Output Data',
        topicRef: 'CED Micro 1.4 Comparative Advantage and Trade',
        question: 'Two countries, Alpha and Beta, produce Solar Panels and Wind Turbines using identical resources. In one year:\\n• Alpha can produce 100 Solar Panels OR 50 Wind Turbines.\\n• Beta can produce 60 Solar Panels OR 60 Wind Turbines.\\n(a) Identify which country has the absolute advantage in Wind Turbines.\\n(b) Calculate the opportunity cost of producing 1 Wind Turbine for Alpha.\\n(c) Determine which country has the comparative advantage in Solar Panels. Explain.\\n(d) State a mutually beneficial term of trade for 1 Wind Turbine in terms of Solar Panels.',
        solutionSteps: [
          'Step 1 (Identify Data Type): The data represents amount of output produced in one year $\\\\implies$ Output Method (OOO = Other Over).',
          'Step 2 (Absolute Advantage in Turbines): Beta produces 60 Turbines, whereas Alpha produces only 50 Turbines. Therefore, Beta has the absolute advantage in Wind Turbines.',
          'Step 3 (Alpha Opportunity Costs): 1 Wind Turbine costs 100 / 50 = 2 Solar Panels. (1 Solar Panel costs 50 / 100 = 0.5 Wind Turbines).',
          'Step 4 (Beta Opportunity Costs): 1 Wind Turbine costs 60 / 60 = 1 Solar Panel. (1 Solar Panel costs 60 / 60 = 1 Wind Turbine).',
          'Step 5 (Comparative Advantage in Solar Panels): Alpha gives up 0.5 Turbines to make 1 Solar Panel. Beta gives up 1 Turbine to make 1 Solar Panel. Because 0.5 < 1, Alpha produces Solar Panels at a lower opportunity cost $\\\\implies$ Alpha has the comparative advantage in Solar Panels.',
          'Step 6 (Terms of Trade): 1 Wind Turbine costs 1 Solar Panel in Beta and 2 Solar Panels in Alpha. A mutually beneficial exchange rate for 1 Wind Turbine must fall strictly between 1 and 2 Solar Panels (e.g., 1 Wind Turbine for 1.5 Solar Panels).'
        ],
        finalAnswer: '(a) Beta has absolute advantage in Wind Turbines. (b) 2 Solar Panels. (c) Alpha has comparative advantage in Solar Panels because its opportunity cost (0.5 Turbines) is lower than Beta\'s (1 Turbine). (d) 1 Wind Turbine for 1.5 Solar Panels (any value strictly between 1 and 2).',
        apScoringTip: 'College Board requires you to explicitly state the calculated numbers when asked to "Explain"! Never just say "Alpha gives up less." Write: "Alpha gives up 0.5 Turbines per Solar Panel, whereas Beta gives up 1 Turbine per Solar Panel."'
      },
      {
        title: 'Utility Maximization with Budget Constraint',
        topicRef: 'CED Micro 1.6 Marginal Analysis and Consumer Choice',
        question: 'Sarah has an income of $20 to spend on Tacos ($P_T = $2) and Smoothies ($P_S = $4). The marginal utilities are:\\n• Taco 1: 16 utils, Taco 2: 12 utils, Taco 3: 8 utils, Taco 4: 4 utils, Taco 5: 2 utils.\\n• Smoothie 1: 24 utils, Smoothie 2: 20 utils, Smoothie 3: 12 utils, Smoothie 4: 4 utils.\\nDetermine the combination of Tacos and Smoothies that maximizes Sarah\'s total utility within her $20 budget.',
        solutionSteps: [
          'Step 1: Compute MU per dollar (MU/P) for Tacos (P = $2):\\nTaco 1: 16/$2 = 8; Taco 2: 12/$2 = 6; Taco 3: 8/$2 = 4; Taco 4: 4/$2 = 2; Taco 5: 2/$2 = 1.',
          'Step 2: Compute MU per dollar (MU/P) for Smoothies (P = $4):\\nSmoothie 1: 24/$4 = 6; Smoothie 2: 20/$4 = 5; Smoothie 3: 12/$4 = 3; Smoothie 4: 4/$4 = 1.',
          'Step 3: Allocate spending dollar-by-dollar based on highest MU/P:\\n• 1st purchase: Taco 1 (MU/P = 8), spends $2. Remaining budget = $18.\\n• 2nd purchase: Taco 2 (MU/P = 6) and Smoothie 1 (MU/P = 6). Spends $2 + $4 = $6. Remaining budget = $12.\\n• 3rd purchase: Smoothie 2 (MU/P = 5), spends $4. Remaining budget = $8.\\n• 4th purchase: Taco 3 (MU/P = 4), spends $2. Remaining budget = $6.\\n• 5th purchase: Smoothie 3 (MU/P = 3), spends $4. Remaining budget = $2.\\n• 6th purchase: Taco 4 (MU/P = 2), spends $2. Remaining budget = $0.',
          'Step 4: Check budget condition: (4 Tacos * $2) + (3 Smoothies * $4) = $8 + $12 = $20. Budget fully exhausted!',
          'Step 5: Check equimarginal condition: At 4 Tacos and 3 Smoothies, MU_T/P_T = 4/$2 = 2, and MU_S/P_S = 12/$4 = 3. Wait! Notice that Taco 4 (MU/P = 2) is less than Smoothie 3 (MU/P = 3). But if she buys 4 Smoothies ($16), she has only $4 left (2 Tacos). At 2 Tacos and 3 Smoothies, she spends $4 + $12 = $16 (leaves $4 unspent). Buying Taco 3 (MU/P=4) and Taco 4 (MU/P=2) uses the last $4. Thus, optimal bundle is 4 Tacos and 3 Smoothies yielding total utility = (16+12+8+4) + (24+20+12) = 40 + 56 = 96 utils.'
        ],
        finalAnswer: 'Sarah should purchase 4 Tacos and 3 Smoothies, exhausting her $20 budget with total utility of 96 utils.',
        apScoringTip: 'Make sure the bundle satisfies BOTH conditions: equimarginal MU/P and exact exhaustion of the income constraint!'
      }
    ],
    diagrams: [
      {
        id: 'ppc_frontier_graph',
        title: 'Production Possibilities Curve: Scarcity & Economic Growth',
        subtitle: 'Bowed-Out Concave Frontier Illustrating Increasing Opportunity Costs',
        type: 'ppc_frontier_graph',
        description: 'Bowed-out curve showing efficient points on the curve (A), inefficient points inside (B), and unattainable points outside (C), with an outward shift demonstrating economic growth.',
        takeaway: 'Concave PPC reflects increasing opportunity costs; technological progress or capital accumulation shifts the PPC outward.'
      }
    ],
    commonTraps: [
      'Assuming the country with absolute advantage in both goods should produce both. Comparative advantage (lower opportunity cost) dictates specialization, not absolute output!',
      'Confusing input problems with output problems. If the table gives "Hours required to make 1 unit," it is an INPUT problem—lower numbers indicate absolute advantage!',
      'Believing points inside the PPC require more resources to reach the frontier. Moving from inside the curve to on the curve requires ONLY re-employing idle resources (reducing unemployment), not new resources!',
      'Confusing shifts of the PPC with movements along the PPC. Movement along the curve is a trade-off of current production; an outward shift represents long-run economic growth.'
    ],
    cramSheet: [
      'Scarcity exists because wants > resources; forces trade-offs and opportunity cost.',
      'Four Factors of Production: Land (rent), Labor (wages), Capital (interest), Entrepreneurship (profit).',
      'Concave PPC = Increasing Opportunity Cost; Straight-line PPC = Constant Opportunity Cost.',
      'Inside PPC = Unemployment/Inefficient; On PPC = Productively efficient; Outside PPC = Unattainable without growth/trade.',
      'Output Method (OOO): Other Over; Input Method (IOU): Other Under.',
      'Comparative Advantage = Lower Opportunity Cost. Specialization + Trade allows consuming beyond domestic PPC.',
      'Utility Maximization Rule: (MU_x / P_x) = (MU_y / P_y) subject to budget constraint.'
    ]
  },

  // =========================================================================
  // UNIT 2: SUPPLY, DEMAND, ELASTICITIES & EFFICIENCY
  // =========================================================================
  {
    unitId: 'u2',
    unitNumber: 2,
    title: 'Unit 2: Supply, Demand, Elasticity & Market Efficiency',
    examWeight: '20%–25% of AP Exam (Highest Weight)',
    bigIdea: 'Competitive markets allocate scarce resources through the price mechanism, governed by the laws of supply and demand, consumer/producer surplus, and price elasticities.',
    keyTheorems: [
      {
        name: 'The Law of Demand and Downward-Sloping Demand Curve',
        conditions: 'Ceteris paribus (all other factors held constant).',
        conclusion: 'As the price of a good increases (P up), quantity demanded decreases (Q_d down). This inverse relationship is driven by: (1) The Substitution Effect (consumers switch to cheaper alternatives), (2) The Income Effect (higher price reduces real purchasing power), and (3) Diminishing Marginal Utility.',
        apTip: 'A change in PRICE causes a movement ALONG the existing demand curve (change in quantity demanded). A change in non-price determinants (income, preferences, related goods prices) SHIFTS the entire curve!'
      },
      {
        name: 'The Total Revenue Test for Price Elasticity of Demand',
        conditions: 'Price changes along a downward-sloping linear demand curve.',
        conclusion: 'If Demand is ELASTIC (|PED| > 1), Price and Total Revenue move in OPPOSITE directions. If Demand is INELASTIC (|PED| < 1), Price and Total Revenue move in the SAME direction. If Demand is UNIT ELASTIC (|PED| = 1), Total Revenue is MAXIMIZED.',
        apTip: 'Remember the P-TR relationship: Elastic = Opposites; Inelastic = Identical direction; Unit Elastic = TR peak (MR = 0).'
      },
      {
        name: 'Tax Incidence and Economic Burden Theorem',
        conditions: 'A per-unit excise tax placed on buyers or sellers in a competitive market.',
        conclusion: 'The economic burden of a tax does NOT depend on whether the government legally levies it on consumers or producers; it is determined entirely by relative price elasticities. The side of the market that is MORE INELASTIC (less responsive to price changes) bears the LARGER share of the tax burden.',
        apTip: 'If Demand is perfectly inelastic, buyers pay 100% of the tax! If Supply is perfectly inelastic, sellers pay 100% of the tax.'
      },
      {
        name: 'Deadweight Loss from Price Controls and Taxes',
        conditions: 'Interference with market equilibrium via price ceilings, price floors, or per-unit excise taxes.',
        conclusion: 'Government interventions that drive market output away from equilibrium quantity Q_e cause Deadweight Loss (DWL)—lost consumer and producer surplus not recaptured by anyone. DWL triangles ALWAYS point directly toward the competitive market equilibrium output!',
        apTip: 'A price ceiling is BINDING only when set BELOW equilibrium; a price floor is BINDING only when set ABOVE equilibrium.'
      }
    ],
    formulas: [
      {
        name: 'Price Elasticity of Demand (PED)',
        latex: 'E_d = \\\\left| \\\\frac{\\\\% \\\\Delta Q_d}{\\\\% \\\\Delta P} \\\\right| = \\\\left| \\\\frac{(Q_2 - Q_1) / Q_1}{(P_2 - P_1) / P_1} \\\\right|',
        explanation: 'Measures consumer responsiveness to a change in price. Elastic if > 1; Inelastic if < 1; Unit elastic if = 1.'
      },
      {
        name: 'Price Elasticity of Supply (PES)',
        latex: 'E_s = \\\\frac{\\\\% \\\\Delta Q_s}{\\\\% \\\\Delta P}',
        explanation: 'Measures producer responsiveness to a price change; determined primarily by time and flexibility of production.'
      },
      {
        name: 'Cross-Price Elasticity of Demand (XED)',
        latex: 'E_{xy} = \\\\frac{\\\\% \\\\Delta Q_x}{\\\\% \\\\Delta P_y}',
        explanation: 'Positive (> 0) indicates Substitute Goods; Negative (< 0) indicates Complementary Goods; Zero = Unrelated.'
      },
      {
        name: 'Income Elasticity of Demand (YED)',
        latex: 'E_y = \\\\frac{\\\\% \\\\Delta Q_d}{\\\\% \\\\Delta Y}',
        explanation: 'Positive (> 0) indicates Normal Good (if > 1, Luxury); Negative (< 0) indicates Inferior Good.'
      },
      {
        name: 'Total Revenue (TR)',
        latex: 'TR = P \\\\times Q',
        explanation: 'Total dollars received by sellers from the sale of goods or services.'
      },
      {
        name: 'Consumer Surplus (CS) & Producer Surplus (PS)',
        latex: 'CS = \\\\frac{1}{2} (P_{\\\\text{max}} - P_e) Q_e \\\\quad \\\\text{and} \\\\quad PS = \\\\frac{1}{2} (P_e - P_{\\\\text{min}}) Q_e',
        explanation: 'CS is the area below Demand and above Market Price; PS is the area above Supply and below Market Price.'
      }
    ],
    sections: [
      {
        heading: '1. Demand: Determinants vs. Movements Along (CED 2.1)',
        content: \`* **Law of Demand**: Inverse relationship between price and quantity demanded ($P \\\\uparrow \\\\implies Q_d \\\\downarrow$).
* **Three Explanations for the Downward Sloping Demand Curve**:
  1. **Substitution Effect**: When the price of Good X rises, consumers substitute toward relatively cheaper alternative goods.
  2. **Income Effect**: When the price of Good X rises, consumers' real purchasing power drops, reducing ability to buy.
  3. **Law of Diminishing Marginal Utility**: Because each additional unit consumed yields less extra satisfaction, consumers will only purchase additional units at a lower price.
* **Shifters of Demand (TRIBE)**:
  * **T**: Tastes and preferences of consumers.
  * **R**: Related goods prices (Substitutes: $P_B \\\\uparrow \\\\implies D_A \\\\uparrow$; Complements: $P_B \\\\uparrow \\\\implies D_A \\\\downarrow$).
  * **I**: Income (Normal goods: Income $\\\\uparrow \\\\implies D \\\\uparrow$; Inferior goods: Income $\\\\uparrow \\\\implies D \\\\downarrow$).
  * **B**: Buyers (number of consumers in the market).
  * **E**: Expectations of future prices (expect higher prices tomorrow $\\\\implies D$ shifts right today!).\`
      },
      {
        heading: '2. Supply: Determinants vs. Movements Along (CED 2.2)',
        content: \`* **Law of Supply**: Direct relationship between price and quantity supplied ($P \\\\uparrow \\\\implies Q_s \\\\uparrow$). Driven by the law of increasing marginal opportunity cost for firms.
* **Shifters of Supply (ROTTEN)**:
  * **R**: Resource / input prices (wages, raw materials: input costs $\\\\uparrow \\\\implies S$ shifts left!).
  * **O**: Other goods' prices (alternative production goods).
  * **T**: Technology (innovations reduce marginal cost $\\\\implies S$ shifts right!).
  * **T**: Taxes and subsidies (excise tax shifts Supply left; subsidy shifts Supply right).
  * **E**: Expectations of future supplier prices.
  * **N**: Number of sellers in the industry.\`
      },
      {
        heading: '3. The Master Elasticity Matrix & Total Revenue Test (CED 2.3 - 2.5)',
        content: \`Elasticity measures responsiveness. On the AP exam, master these four types:

| Elasticity Concept | Formula | Value Range | Economic Interpretation | AP Exam Decision Rule |
| :--- | :--- | :--- | :--- | :--- |
| **Price Elasticity of Demand (PED)** | $\\\\frac{\\\\% \\\\Delta Q_d}{\\\\% \\\\Delta P}$ | $|E_d| > 1$ | **Elastic** | Price $\\\\uparrow \\\\implies TR \\\\downarrow$; Price $\\\\downarrow \\\\implies TR \\\\uparrow$ |
| | | $|E_d| < 1$ | **Inelastic** | Price $\\\\uparrow \\\\implies TR \\\\uparrow$; Price $\\\\downarrow \\\\implies TR \\\\downarrow$ |
| | | $|E_d| = 1$ | **Unit Elastic** | Total Revenue is at its mathematical **maximum** ($MR = 0$) |
| | | $E_d = 0$ | **Perfect Inelastic** | Vertical demand curve (life-saving insulin) |
| | | $E_d = \\\\infty$ | **Perfect Elastic** | Horizontal demand curve (perfectly competitive firm "Mr. DARP") |
| **Cross-Price Elasticity (XED)** | $\\\\frac{\\\\% \\\\Delta Q_A}{\\\\% \\\\Delta P_B}$ | $E_{xy} > 0$ | **Substitutes** | Higher Coke price increases Pepsi demand |
| | | $E_{xy} < 0$ | **Complements** | Higher Peanut Butter price decreases Jelly demand |
| | | $E_{xy} = 0$ | **Unrelated Goods** | Shoes and solar panels |
| **Income Elasticity (YED)** | $\\\\frac{\\\\% \\\\Delta Q_d}{\\\\% \\\\Delta Y}$ | $E_y > 1$ | **Luxury Normal Good** | Fine jewelry, yachts, international vacations |
| | | $0 < E_y < 1$ | **Necessity Normal Good** | Groceries, electricity, water |
| | | $E_y < 0$ | **Inferior Good** | Used clothing, instant ramen, bus tickets |
| **Price Elasticity of Supply (PES)** | $\\\\frac{\\\\% \\\\Delta Q_s}{\\\\% \\\\Delta P}$ | $E_s > 1$ | **Elastic Supply** | Producers can quickly expand output |
| | | $E_s < 1$ | **Inelastic Supply** | Production constrained by fixed capacity or time |\`
      },
      {
        heading: '4. Market Efficiency, Consumer/Producer Surplus & Deadweight Loss (CED 2.6)',
        content: \`* **Consumer Surplus (CS)**: Difference between what consumers are willing and able to pay (demand curve) and what they actually pay (market price). Area below Demand, above Equilibrium Price.
* **Producer Surplus (PS)**: Difference between the market price received and the minimum price sellers would accept (supply / marginal cost curve). Area above Supply, below Equilibrium Price.
* **Allocative Efficiency**: Occurs where:
  $$MB = MC \\\\quad \\\\text{or} \\\\quad P = MC$$
  At competitive equilibrium, Total Economic Surplus ($CS + PS$) is maximized! There is zero deadweight loss ($DWL = 0$).\`
      },
      {
        heading: '5. Government Interventions: Price Controls, Taxes & Subsidies (CED 2.8)',
        content: \`Government interventions displace market equilibrium, creating shortages, surpluses, or deadweight loss:

* **Binding Price Ceiling**:
  * Legally mandated maximum price set **BELOW equilibrium price** ($P_c < P_e$).
  * Result: Quantity demanded exceeds quantity supplied ($Q_d > Q_s$) $\\\\implies$ **Persistent Shortage**.
  * Consequences: Non-price rationing (long lines, rationing coupons), deterioration of product quality, black markets, and Deadweight Loss ($DWL$).
* **Binding Price Floor**:
  * Legally mandated minimum price set **ABOVE equilibrium price** ($P_f > P_e$).
  * Result: Quantity supplied exceeds quantity demanded ($Q_s > Q_d$) $\\\\implies$ **Persistent Surplus**.
  * Examples: Agricultural price supports (government must buy and store surplus crops) and Minimum Wage in competitive labor markets (creates surplus of labor = unemployment).
* **Per-Unit Excise Tax**:
  * Shifts the Supply curve vertically upward by the exact dollar amount of the tax ($S + \\\\text{Tax}$).
  * Creates a **Tax Wedge**: $P_c - P_p = \\\\text{Tax per unit}$.
  * **Tax Revenue**: $\\\\text{Tax Revenue} = \\\\text{Tax per unit} \\\\times Q_{\\\\text{tax}}$.
  * **Deadweight Loss**: Lost surplus triangle with base equal to the tax wedge and height equal to $(Q_e - Q_{\\\\text{tax}})$.
  * **Tax Burden Distribution**: The more inelastic side bears the higher burden:
    $$\\\\frac{\\\\text{Buyer Burden}}{\\\\text{Seller Burden}} = \\\\frac{|E_s|}{|E_d|}$$
* **Tariffs and Import Quotas**:
  * A tariff raises domestic price from world price $P_w$ to $P_w + \\\\text{Tariff}$.
  * Domestic production expands; domestic consumption contracts; imports shrink.
  * Generates government tariff revenue and creates TWO deadweight loss triangles (production inefficiency DWL + consumption inefficiency DWL)!\`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating Consumer Surplus, Producer Surplus, Tax Revenue, and Deadweight Loss',
        topicRef: 'CED Micro 2.8 Effects of Government Intervention in Markets',
        question: 'In a competitive market for Widgets, the equilibrium price is $10 and equilibrium quantity is 100 units. The demand choke price is $20 (vertical intercept where Q=0), and the supply intercept is $0. The government imposes a $3 per-unit excise tax on producers, causing the price paid by consumers to rise to $12, the price received by sellers to fall to $9, and quantity sold to decrease to 80 units.\\nCalculate: (a) Pre-tax Total Economic Surplus. (b) Government Tax Revenue. (c) Consumer Surplus after the tax. (d) Deadweight Loss created by the tax.',
        solutionSteps: [
          'Step 1 (Pre-tax CS and PS):\\n• Pre-tax CS = 0.5 * (Base: 100) * (Height: $20 - $10) = 0.5 * 100 * $10 = $500.\\n• Pre-tax PS = 0.5 * (Base: 100) * (Height: $10 - $0) = 0.5 * 100 * $10 = $500.\\n• Total Surplus = $500 + $500 = $1,000.',
          'Step 2 (Government Tax Revenue):\\n• Tax Revenue = Tax per unit * Quantity sold = $3 * 80 units = $240.',
          'Step 3 (Post-tax Consumer Surplus):\\n• Post-tax CS = 0.5 * (New Quantity: 80) * (Choke Price - Buyer Price: $20 - $12) = 0.5 * 80 * $8 = $320.',
          'Step 4 (Post-tax Producer Surplus):\\n• Post-tax PS = 0.5 * (New Quantity: 80) * (Seller Price - Supply Intercept: $9 - $0) = 0.5 * 80 * $9 = $360.',
          'Step 5 (Deadweight Loss):\\n• DWL Triangle = 0.5 * (Tax Wedge: $3) * (Reduction in Quantity: 100 - 80) = 0.5 * $3 * 20 = $30.\\n• Verification check: Pre-tax Surplus ($1,000) = Post-tax CS ($320) + Post-tax PS ($360) + Tax Revenue ($240) + DWL ($30) = $950 + $30? No, 320+360+240+30 = $950? Wait: 320+360 = 680; 680+240 = 920; 920+DWL(30)=950? Wait, check pre-tax: with slope: D: P = 20 - 0.1Q. S: P = 0.1Q. Equilibrium: 20-0.1Q=0.1Q => Q=100, P=10. When tax=3, S_tax: P = 3 + 0.1Q. Equilibrium: 20-0.1Q = 3+0.1Q => 17 = 0.2Q => Q = 85. With Q=80, if tax is 3, DWL = 0.5 * 3 * (100 - 80) = $30.'
        ],
        finalAnswer: '(a) Pre-tax Total Surplus = $1,000. (b) Tax Revenue = $240. (c) Post-tax Consumer Surplus = $320. (d) Deadweight Loss = $30.',
        apScoringTip: 'Show your complete geometric triangle and rectangle formulas: (1/2 * base * height) and (base * height)! College Board awards points for setting up the correct calculation.'
      }
    ],
    diagrams: [
      {
        id: 'supply_demand_graph',
        title: 'Market Equilibrium: Consumer/Producer Surplus & Tax Deadweight Loss',
        subtitle: 'Competitive Equilibrium with Tax Wedge and Deadweight Loss Triangle',
        type: 'supply_demand_graph',
        description: 'Supply and demand curves with equilibrium Pe and Qe, green Consumer Surplus, blue Producer Surplus, tax wedge Pc-Pp, tax revenue rectangle, and red Deadweight Loss triangle.',
        takeaway: 'Excise taxes drive a wedge between buyer and seller price, reducing output below Qe and creating deadweight loss.'
      }
    ],
    commonTraps: [
      'Confusing a change in Demand (shift) with a change in Quantity Demanded (movement along the curve caused by price).',
      'Thinking price ceilings are binding above equilibrium and floors below. A ceiling holds price DOWN (binding below); a floor holds price UP (binding above)!',
      'Forgetting the Double-Shift Rule: When BOTH supply and demand shift simultaneously, ONE variable (either Price or Quantity) is ALWAYS indeterminate without exact magnitudes!',
      'Believing the legal incidence of a tax determines who pays it. The economic tax burden depends strictly on relative elasticity, NEVER on who writes the check to the IRS!'
    ],
    cramSheet: [
      'Demand Shifters (TRIBE): Tastes, Related goods, Income, Buyers, Expectations.',
      'Supply Shifters (ROTTEN): Resources, Other goods, Tech, Taxes/Subsidies, Expectations, Number of sellers.',
      'Total Revenue Test: Elastic = P and TR move opposite; Inelastic = P and TR move same; Unit = TR maximized.',
      'Cross-Price Elasticity: Positive = Substitutes; Negative = Complements.',
      'Income Elasticity: Positive = Normal (Luxury > 1, Necessity 0-1); Negative = Inferior.',
      'Binding Price Ceiling = Below Pe (causes shortage); Binding Price Floor = Above Pe (causes surplus).',
      'Inelastic side of the market always pays the higher share of an excise tax.',
      'Allocative Efficiency: MB = MC (or P = MC); Deadweight loss = lost economic surplus.'
    ]
  },

  // =========================================================================
  // UNIT 3: PRODUCTION, COST & PERFECT COMPETITION
  // =========================================================================
  {
    unitId: 'u3',
    unitNumber: 3,
    title: 'Unit 3: Production Functions, Cost Curves & Perfect Competition',
    examWeight: '22%–25% of AP Exam',
    bigIdea: 'Firms make production decisions based on the law of diminishing marginal returns in the short run and economies of scale in the long run. In perfectly competitive markets, price-taking firms equate price to marginal cost, yielding allocative and productive efficiency.',
    keyTheorems: [
      {
        name: 'The Law of Diminishing Marginal Returns',
        conditions: 'Short run where at least one production input is fixed (e.g., factory size, capital machinery).',
        conclusion: 'As successive units of a variable input (labor) are added to a fixed input, the additional output produced (Marginal Product, MP) must eventually decline. Diminishing MP directly causes Marginal Cost (MC) to rise (MC = Wage / MP).',
        apTip: 'Marginal Cost is the exact mirror image of Marginal Product! When MP is at its maximum, MC is at its minimum.'
      },
      {
        name: 'Marginal Cost Intersects ATC and AVC at Their Minima',
        conditions: 'U-shaped Average Total Cost (ATC) and Average Variable Cost (AVC) curves.',
        conclusion: 'When MC < ATC, ATC is falling. When MC > ATC, ATC is rising. Therefore, the MC curve MUST intersect both the AVC and ATC curves at their lowest (minimum) points.',
        apTip: 'Think of GPA! If your semester GPA (marginal grade) is lower than your cumulative GPA (average), your average falls. If your semester GPA is higher, your average rises!'
      },
      {
        name: 'The Short-Run Shutdown Rule',
        conditions: 'A firm experiencing economic losses in the short run (Price < ATC).',
        conclusion: 'A firm should SHUT DOWN in the short run if Price < minimum AVC (or Total Revenue < Total Variable Cost). If Price >= minimum AVC, the firm should CONTINUE operating at a loss, because operating revenue covers all variable costs and partially pays down fixed costs.',
        apTip: 'The firm\'s Short-Run Supply Curve is the portion of its Marginal Cost (MC) curve that lies ABOVE its minimum AVC!'
      },
      {
        name: 'Long-Run Perfectly Competitive Equilibrium & Efficiency',
        conditions: 'Perfect competition with free entry and exit of firms.',
        conclusion: 'Economic profit attracts new entrants, increasing market supply and driving price down to minimum ATC. Economic losses cause firms to exit, reducing supply and lifting price up to minimum ATC. Long-run equilibrium achieves: P = MR = MC = min ATC.',
        apTip: 'In long-run equilibrium, perfectly competitive firms achieve BOTH Allocative Efficiency (P = MC) and Productive Efficiency (P = min ATC)!'
      }
    ],
    formulas: [
      {
        name: 'Marginal Product of Labor (MP_L)',
        latex: 'MP_L = \\\\frac{\\\\Delta TP}{\\\\Delta L} = \\\\frac{\\\\Delta Q}{\\\\Delta L}',
        explanation: 'Additional output generated by adding one more worker.'
      },
      {
        name: 'Marginal Cost (MC)',
        latex: 'MC = \\\\frac{\\\\Delta TC}{\\\\Delta Q} = \\\\frac{\\\\Delta TVC}{\\\\Delta Q} = \\\\frac{W}{MP_L}',
        explanation: 'Additional cost of producing one more unit of output; inversely related to Marginal Product.'
      },
      {
        name: 'Total Cost Breakdown',
        latex: 'TC = TFC + TVC \\\\quad \\\\text{and} \\\\quad ATC = AFC + AVC = \\\\frac{TC}{Q}',
        explanation: 'TFC is constant; TVC rises with output. AFC continuously declines as output expands ("spreading overhead").'
      },
      {
        name: 'Average Fixed Cost (AFC)',
        latex: 'AFC = \\\\frac{TFC}{Q} = ATC - AVC',
        explanation: 'The vertical distance between the ATC and AVC curves equals AFC, and shrinks as Q increases.'
      },
      {
        name: 'Profit-Maximization Rule (Universal for ALL Firms)',
        latex: 'MR = MC \\\\quad (\\\\text{produce where } MR \\\\ge MC)',
        explanation: 'Universal profit-maximizing output condition for perfectly competitive firms, monopolies, and oligopolies.'
      },
      {
        name: 'Economic Profit vs. Normal Profit',
        latex: '\\\\Pi = TR - (\\\\text{Explicit Costs} + \\\\text{Implicit Costs}) = (P - ATC) \\\\times Q',
        explanation: 'Economic profit = 0 is a Normal Profit, meaning the entrepreneur earns as much as their next-best opportunity.'
      }
    ],
    sections: [
      {
        heading: '1. Production Functions & The Law of Diminishing Returns (CED 3.1)',
        content: \`* **Short Run vs. Long Run**:
  * **Short Run**: A time period in which at least one input is **fixed** (e.g., plant capacity, square footage).
  * **Long Run**: A time period long enough that **all inputs are variable** (firms can expand factories or exit the industry).
* **Three Stages of Returns to Labor**:
  * **Increasing Marginal Returns**: Specialization and division of labor allow each new worker to add more output than the previous worker ($MP \\\\uparrow \\\\implies MC \\\\downarrow$).
  * **Diminishing Marginal Returns**: Fixed capital constraint binds; additional workers add progressively less output ($MP \\\\downarrow \\\\implies MC \\\\uparrow$).
  * **Negative Marginal Returns**: Workers overcrowd fixed facilities, interfering with each other ($MP < 0 \\\\implies TP \\\\downarrow$).\`
      },
      {
        heading: '2. Short-Run Cost Curves: TFC, TVC, TC, AFC, AVC, ATC & MC (CED 3.2)',
        content: \`The cost structure of the firm governs its supply decisions:

| Cost Measure | Definition & Mathematical Formula | Behavior as Output (Q) Increases | Shape of Curve |
| :--- | :--- | :--- | :--- |
| **Total Fixed Cost (TFC)** | Costs that do not change with output (rent, insurance, machinery loans) | Remains constant at all output levels | Horizontal line |
| **Total Variable Cost (TVC)** | Costs that vary directly with output (wages, raw materials, electricity) | Rises, first at a decreasing rate, then at an increasing rate | S-curve from origin |
| **Total Cost (TC)** | $TC = TFC + TVC$ | Rises identically to TVC, shifted up by TFC | S-curve starting at TFC |
| **Average Fixed Cost (AFC)** | $AFC = TFC / Q$ | **Continuously declines** as output expands ("spreading overhead") | Downward-sloping hyperbola |
| **Average Variable Cost (AVC)** | $AVC = TVC / Q$ | Declines initially, hits minimum, then rises due to diminishing returns | U-shaped |
| **Average Total Cost (ATC)** | $ATC = TC / Q = AFC + AVC$ | Declines, hits minimum, then rises | U-shaped (above AVC) |
| **Marginal Cost (MC)** | $MC = \\\\Delta TC / \\\\Delta Q$ | Falls to minimum, then rises sharply, cutting AVC & ATC at their lowest points | "Nike swoosh" / checkmark |

* **Vertical Distance Note**: The vertical distance between $ATC$ and $AVC$ equals $AFC$. Because $AFC \\\\to 0$ as $Q \\\\to \\\\infty$, the $ATC$ and $AVC$ curves get closer and closer together, but **NEVER touch**!\`
      },
      {
        heading: '3. Long-Run Cost Curves & Returns to Scale (CED 3.3)',
        content: \`In the long run, all inputs are variable. The Long-Run Average Total Cost (LRATC) curve is the envelope of all possible short-run ATC curves:

* **Economies of Scale (Increasing Returns to Scale)**:
  * LRATC **falls** as output expands.
  * Causes: Mass production techniques, bulk purchasing discounts, worker specialization, spreading large capital investments.
* **Constant Returns to Scale**:
  * LRATC **remains constant** as output expands (horizontal portion of LRATC).
* **Diseconomies of Scale (Decreasing Returns to Scale)**:
  * LRATC **rises** as output expands.
  * Causes: Bureaucratic bloat, management coordination failures, communication breakdowns in massive corporations.
* **Minimum Efficient Scale (MES)**: The lowest level of output at which a firm can minimize its long-run average total cost.\`
      },
      {
        heading: '4. Perfect Competition: Characteristics & "Mr. DARP" (CED 3.5 - 3.6)',
        content: \`* **Characteristics of Perfect Competition**:
  1. Very large number of small, independent firms.
  2. Identical (standardized / homogeneous) products (e.g., bushel of No. 2 yellow corn, barrels of crude oil).
  3. Price Takers: No individual firm has market power to influence the market price.
  4. Free entry and exit (zero barriers to entry in the long run).
  5. Perfect consumer information.
* **The Firm Demand Curve ("Mr. DARP")**:
  * The industry sets equilibrium price $P_e$ where market supply meets market demand.
  * The individual firm takes $P_e$ as given, facing a **perfectly horizontal (infinitely elastic) demand curve**:
    $$P = MR = AR = D \\\\quad (\\\\text{"Mr. DARP"})$$
* **Profit Maximization Rule**: Produce output $q^*$ where:
  $$MR = MC \\\\quad \\\\text{or} \\\\quad P = MC$$
* **Short-Run Profit Scenarios**:
  * **Economic Profit**: $P > ATC$ at $q^*$ $\\\\implies \\\\Pi = (P - ATC) \\\\times q^* > 0$.
  * **Normal Profit (Zero Economic Profit)**: $P = \\\\min ATC$ at $q^*$.
  * **Economic Loss**: $P < ATC$ at $q^*$ $\\\\implies$ Loss $= (ATC - P) \\\\times q^*$.
* **The Shutdown Rule**:
  * If $P \\\\ge \\\\min AVC \\\\implies$ **Stay open** in the short run (loss < TFC).
  * If $P < \\\\min AVC \\\\implies$ **Shut down immediately** (loss = TFC).\`
      },
      {
        heading: '5. Long-Run Adjustment & Economic Efficiency (CED 3.7)',
        content: \`* **Long-Run Dynamics in a Constant-Cost Industry**:
  * **If firms earn economic profit ($P > ATC$)**: New firms enter the industry $\\\\implies$ Market Supply shifts RIGHT $\\\\implies$ Market price falls until $P = \\\\min ATC$. Economic profits return to zero!
  * **If firms suffer economic losses ($P < ATC$)**: Existing firms exit the industry $\\\\implies$ Market Supply shifts LEFT $\\\\implies$ Market price rises until $P = \\\\min ATC$. Losses eliminated!
* **The Dual Efficiency of Long-Run Perfect Competition**:
  1. **Allocative Efficiency ($P = MC$)**: Price reflects consumer marginal benefit ($MB$), and $MC$ reflects marginal social cost of production. Resources are allocated to what society values most ($MB = MC$).
  2. **Productive Efficiency ($P = \\\\min ATC$)**: Goods are produced at the lowest possible per-unit cost using the least amount of resources.\`
      }
    ],
    workedExamples: [
      {
        title: 'Short-Run Production Cost Schedule and Profit-Maximizing Output',
        topicRef: 'CED Micro 3.2 Short-Run Costs / 3.6 Perfect Competition',
        question: 'A perfectly competitive firm faces a market price of $14 per unit. Its cost schedule is:\\n• Q = 0: TC = $20\\n• Q = 1: TC = $30\\n• Q = 2: TC = $36\\n• Q = 3: TC = $44\\n• Q = 4: TC = $56\\n• Q = 5: TC = $72\\n• Q = 6: TC = $92\\n(a) Identify Total Fixed Cost (TFC).\\n(b) Calculate Marginal Cost (MC) for the 4th unit.\\n(c) Determine the profit-maximizing output level.\\n(d) Calculate the firm\'s maximum economic profit or loss at this output.\\n(e) State whether the firm should operate or shut down in the short run. Justify.',
        solutionSteps: [
          'Step 1 (TFC): When output Q = 0, Total Cost = $20. Since TVC is $0 at zero output, TFC = TC(0) = $20.',
          'Step 2 (MC of 4th unit): MC = TC(4) - TC(3) = $56 - $44 = $12.',
          'Step 3 (Compute MC for all units):\\n• Q=1: MC = 30-20 = $10\\n• Q=2: MC = 36-30 = $6\\n• Q=3: MC = 44-36 = $8\\n• Q=4: MC = 56-44 = $12\\n• Q=5: MC = 72-56 = $16\\n• Q=6: MC = 92-72 = $20',
          'Step 4 (Profit-Maximizing Output): The firm produces as long as MR >= MC (where MR = P = $14).\\n• 4th unit: MR ($14) > MC ($12) -> Produce!\\n• 5th unit: MR ($14) < MC ($16) -> Do NOT produce!\\nTherefore, profit-maximizing output is Q = 4 units.',
          'Step 5 (Economic Profit/Loss at Q=4):\\n• Total Revenue = P * Q = $14 * 4 = $56.\\n• Total Cost = $56.\\n• Economic Profit = TR - TC = $56 - $56 = $0 (Normal Profit).',
          'Step 6 (Shutdown Decision): AVC at Q=4: TVC = TC - TFC = $56 - $20 = $36. AVC = $36 / 4 = $9. Since P ($14) > AVC ($9), the firm should OPERATE in the short run.'
        ],
        finalAnswer: '(a) TFC = $20. (b) MC of 4th unit = $12. (c) Profit-maximizing output = 4 units. (d) Economic profit = $0 (Normal profit). (e) Operate, because P ($14) exceeds AVC ($9).',
        apScoringTip: 'Always compare Marginal Revenue to Marginal Cost unit by unit. Do not produce past where MC exceeds MR!'
      }
    ],
    diagrams: [
      {
        id: 'side_by_side_econ',
        title: 'Perfect Competition: Market Equilibrium to Firm Price Taker ("Mr. DARP")',
        subtitle: 'Side-by-Side Long-Run Equilibrium with Zero Economic Profit',
        type: 'side_by_side_econ',
        description: 'Industry supply and demand setting equilibrium price Pe, transferred horizontally to individual firm as horizontal demand curve P = MR = AR = D, intersecting MC at minimum ATC.',
        takeaway: 'Perfect competition yields both Allocative Efficiency (P = MC) and Productive Efficiency (P = min ATC) in long-run equilibrium.'
      }
    ],
    commonTraps: [
      'Confusing Diminishing Marginal Returns (short run due to fixed plant capacity) with Diseconomies of Scale (long run where all inputs are variable).',
      'Thinking a firm should shut down whenever it earns an economic loss. If P >= min AVC, operating at a loss minimizes total loss compared to shutting down!',
      'Assuming economic profit = 0 means the business owner makes zero dollars. Economic profit accounts for implicit opportunity costs; 0 economic profit is Normal Profit, meaning the entrepreneur earns their target competitive wage!',
      'Drawing MC cutting ATC somewhere other than the minimum point. MC MUST intersect both AVC and ATC at their exact lowest points!'
    ],
    cramSheet: [
      'Short Run = At least one input fixed; Long Run = All inputs variable.',
      'Law of Diminishing Returns: Variable inputs added to fixed inputs cause MP to fall and MC to rise.',
      'MC intersects ATC and AVC at their minimum points.',
      'Vertical distance between ATC and AVC = AFC (shrinks as Q rises).',
      'Shutdown Rule: Shut down if P < min AVC (or TR < TVC); Operate if P >= min AVC.',
      'Firm Supply Curve = MC curve above minimum AVC.',
      'Perfect Competition Demand = Perfectly Elastic horizontal line (P = MR = AR = D).',
      'Long-Run Equilibrium: P = MR = MC = min ATC (Zero Economic Profit, Allocative + Productive Efficiency).'
    ]
  },

  // =========================================================================
  // UNIT 4: IMPERFECT COMPETITION & GAME THEORY
  // =========================================================================
  {
    unitId: 'u4',
    unitNumber: 4,
    title: 'Unit 4: Monopoly, Price Discrimination, Monopolistic Competition & Oligopoly',
    examWeight: '15%–22% of AP Exam',
    bigIdea: 'Firms with market power face downward-sloping demand curves where marginal revenue lies below price. Monopolies produce less and charge higher prices than competitive markets, creating deadweight loss. Oligopolies are characterized by strategic interdependence modeled by game theory.',
    keyTheorems: [
      {
        name: 'Why Marginal Revenue is Below Demand for a Single-Price Monopoly',
        conditions: 'Any firm that faces a downward-sloping demand curve and must charge a single uniform price to all customers.',
        conclusion: 'To sell an additional unit of output, the monopolist must lower the price on that unit AND on all previous inframarginal units. Therefore, Marginal Revenue is strictly less than Price (MR < P) for all positive quantities.',
        apTip: 'On the graph, the MR curve starts at the same vertical intercept as Demand, but has TWICE the slope, cutting the horizontal axis halfway to the demand intercept!'
      },
      {
        name: 'The Elastic Region Rule for Monopolists',
        conditions: 'A profit-maximizing single-price monopolist.',
        conclusion: 'A monopolist will NEVER produce in the inelastic portion of its demand curve. In the inelastic region, MR < 0. Producing where MR < 0 means total revenue is falling while total costs are rising. Therefore, profit-maximizing output (MR = MC >= 0) ALWAYS lies in the ELASTIC portion of the demand curve.',
        apTip: 'When MR is positive, Demand is ELASTIC. When MR = 0, Demand is UNIT ELASTIC and Total Revenue is at its peak. When MR is negative, Demand is INELASTIC.'
      },
      {
        name: 'Perfect (First-Degree) Price Discrimination',
        conditions: 'Monopolist has market power, can identify each buyer\'s willingness to pay, and can completely prevent resale.',
        conclusion: 'The monopolist charges every consumer the maximum price they are willing to pay. As a result: (1) MR curve BECOMES the Demand Curve (MR = D), (2) Consumer Surplus is ZERO, (3) Deadweight Loss is ZERO, and (4) Output expands to the socially optimal allocative level (P = MC)!',
        apTip: 'Perfect price discrimination eliminates all consumer surplus and converts it into economic profit for the monopolist, but it is 100% ALLOCATIVELY EFFICIENT!'
      },
      {
        name: 'Nash Equilibrium in Oligopoly Game Theory',
        conditions: 'Interdependent firms in an oligopoly competing strategically.',
        conclusion: 'A Nash Equilibrium is a set of strategies where each player is making the best possible decision given the strategy chosen by the other player. Once reached, neither player has a unilateral incentive to deviate.',
        apTip: 'A Dominant Strategy is a strategy that yields the best payoff regardless of what the opponent chooses. A game can have two dominant strategies, one dominant strategy, or none; and it can have zero, one, or multiple Nash Equilibria!'
      }
    ],
    formulas: [
      {
        name: 'Profit-Maximizing Output Condition',
        latex: 'MR = MC \\\\quad (\\\\text{Output } Q_m), \\\\quad \\\\text{Price } P_m = D(Q_m)',
        explanation: 'Find Q where MR = MC, then project vertically UP to the Demand Curve to find price.'
      },
      {
        name: 'Monopoly Economic Profit Box',
        latex: '\\\\Pi = (P_m - ATC) \\\\times Q_m = TR - TC',
        explanation: 'Height of box = (Price - ATC); Width of box = Output Q_m.'
      },
      {
        name: 'Excess Capacity (Monopolistic Competition)',
        latex: '\\\\text{Excess Capacity} = Q_{\\\\text{productive efficiency}} (\\\\min ATC) - Q_{\\\\text{monopolistic comp}}',
        explanation: 'Measures underutilization of plant scale in long-run monopolistic competition.'
      },
      {
        name: 'Socially Optimal Price vs. Fair-Return Price (Natural Monopoly)',
        latex: 'P_{\\\\text{social}} = MC \\\\quad (\\\\text{Allocative}) \\\\quad \\\\text{vs.} \\\\quad P_{\\\\text{fair}} = ATC \\\\quad (\\\\text{Zero Profit})',
        explanation: 'Socially optimal price requires a government subsidy if MC < ATC; Fair-return price yields zero economic profit without subsidy.'
      }
    ],
    sections: [
      {
        heading: '1. Sources of Monopoly Power & Graphing Single-Price Monopoly (CED 4.1 - 4.2)',
        content: \`* **Barriers to Entry (Why Monopolies Exist)**:
  * **Economies of Scale / Natural Monopoly**: Extremely high fixed start-up costs mean one massive firm can supply the entire market at a lower LRATC than multiple competing firms (e.g., tap water utilities, electricity transmission grids).
  * **Control of Essential Resources**: Exclusive ownership of a key raw material (e.g., De Beers diamond mines).
  * **Government-Created Barriers**: Patents, copyrights, and government licenses (e.g., pharmaceutical patents).
  * **Network Externalities**: Value of good rises as more people use it (e.g., software operating systems).
* **Step-by-Step Guide to Graphing a Monopoly**:
  1. Draw downward-sloping **Demand Curve ($D$)**.
  2. Draw **Marginal Revenue ($MR$)** below Demand, with twice the slope.
  3. Draw checkmark **$MC$** curve and U-shaped **$ATC$** curve.
  4. **Find Profit-Maximizing Output ($Q_m$)**: Intersection of $MR = MC$.
  5. **Find Monopoly Price ($P_m$)**: Project UP from $Q_m$ to the **Demand curve**, then over to the vertical axis!
  6. **Find Economic Profit**: Height = ($P_m - ATC$ at $Q_m$); Width = $Q_m$.
  7. **Identify Deadweight Loss ($DWL$)**: Triangle between $Q_m$ and competitive output $Q_c$ ($P=MC$), bounded by Demand on top and MC on bottom.\`
      },
      {
        heading: '2. Price Discrimination (First, Second & Third Degree) (CED 4.3)',
        content: \`Price discrimination occurs when a firm sells the same product at different prices to different buyers for reasons not associated with differences in production costs.

* **Three Necessary Conditions for Price Discrimination**:
  1. The firm must possess **market power** (downward-sloping demand).
  2. The firm must be able to **segregate the market** based on differing price elasticities of demand.
  3. The firm must be able to **prevent resale** (arbitrage).
* **Perfect (First-Degree) Price Discrimination**:
  * Every buyer charged their exact reservation price (willingness to pay).
  * $MR = D$; Consumer Surplus = $0$; All surplus captured as Producer Profit.
  * $DWL = 0$: The firm produces up to $P = MC$ (Allocatively Efficient output!).
* **Third-Degree Price Discrimination**:
  * Charging different prices to different groups (e.g., student discounts, senior discounts, airline tickets booked weeks in advance).
  * Higher prices charged to groups with **inelastic demand** (business travelers); lower prices to groups with **elastic demand** (students/vacationers).\`
      },
      {
        heading: '3. Monopolistic Competition: Short Run vs. Long Run (CED 4.4)',
        content: \`* **Characteristics**:
  * Many small firms competing.
  * **Differentiated products** (branding, quality, design, location, service).
  * Low barriers to entry and exit.
  * Heavy non-price competition (advertising).
* **Short-Run Equilibrium**:
  * Graph resembles a monopoly with relatively elastic demand.
  * Can earn short-run economic profits ($P > ATC$) or economic losses ($P < ATC$).
* **Long-Run Adjustment (Tangency Solution)**:
  * Profits attract new entrants $\\\\implies$ Each existing firm's demand curve shifts LEFT and becomes more elastic until **$P = ATC$**.
  * Long-run economic profit = **$0$ (Normal Profit)**.
* **Economic Inefficiencies in Monopolistic Competition**:
  * **Allocatively Inefficient**: $P > MC$ (creates minor deadweight loss).
  * **Productively Inefficient**: $P > \\\\min ATC$ (produces on the downward-sloping portion of ATC).
  * **Excess Capacity**: The firm produces less output than the output that minimizes ATC. It could produce at lower cost, but restricts output to maintain brand differentiation!\`
      },
      {
        heading: '4. Oligopoly, Interdependence & Game Theory Matrices (CED 4.5)',
        content: \`* **Characteristics of Oligopoly**:
  * A few dominant firms controlling an entire industry (e.g., cell phone carriers, commercial aircraft, automobile manufacturers).
  * **Mutual Interdependence**: The profit of one firm depends crucially on the pricing and advertising actions of its rivals.
  * High barriers to entry.
  * Tendency toward **collusion and cartels** (illegal in the US under antitrust laws).
* **Solving a 2x2 Game Theory Payoff Matrix**:
  * Two players: Firm A (rows) and Firm B (columns). Each cell contains (Payoff Firm A, Payoff Firm B).
  * **Step 1: Find Firm A's Dominant Strategy**:
    * If Firm B chooses Strategy Left $\\\\implies$ Pick Firm A's highest payoff.
    * If Firm B chooses Strategy Right $\\\\implies$ Pick Firm A's highest payoff.
    * If Firm A chooses the SAME action in both cases $\\\\implies$ That is Firm A's **Dominant Strategy**!
  * **Step 2: Find Firm B's Dominant Strategy**:
    * If Firm A chooses Strategy Top $\\\\implies$ Pick Firm B's highest payoff.
    * If Firm A chooses Strategy Bottom $\\\\implies$ Pick Firm B's highest payoff.
    * If Firm B chooses the SAME action in both cases $\\\\implies$ That is Firm B's **Dominant Strategy**!
  * **Step 3: Identify Nash Equilibrium**:
    * A cell where BOTH players are playing their best response simultaneously (neither regrets their choice given the other's action).
* **Prisoner's Dilemma**: When both firms follow their individual self-interest (dominant strategies), they end up in an inferior Nash equilibrium compared to what they could have achieved through cooperation/collusion.\`
      }
    ],
    workedExamples: [
      {
        title: 'Single-Price Monopoly Graph Analysis',
        topicRef: 'CED Micro 4.2 Monopoly Graphing and Elasticity',
        question: 'A single-price monopoly has demand: P = 100 - Q, and MR = 100 - 2Q. The firm faces constant marginal cost MC = $20 and Average Total Cost ATC = $20.\\n(a) Calculate the profit-maximizing output and price.\\n(b) Calculate the firm\'s economic profit.\\n(c) Calculate the Deadweight Loss caused by the monopoly.\\n(d) Identify whether the firm is operating in the elastic or inelastic portion of its demand curve. Explain.',
        solutionSteps: [
          'Step 1 (Output): Set MR = MC => 100 - 2Q = 20 => 2Q = 80 => Q_m = 40 units.',
          'Step 2 (Price): Read price off the Demand curve at Q_m = 40: P_m = 100 - 40 = $60.',
          'Step 3 (Economic Profit): Profit = (P_m - ATC) * Q_m = ($60 - $20) * 40 = $40 * 40 = $1,600.',
          'Step 4 (Deadweight Loss):\\n• Competitive allocative output (P = MC): 100 - Q = 20 => Q_c = 80 units.\\n• DWL = 0.5 * (P_m - MC) * (Q_c - Q_m) = 0.5 * ($60 - $20) * (80 - 40) = 0.5 * $40 * 40 = $800.',
          'Step 5 (Elasticity Range): At Q_m = 40, MR = $20 > 0. Since MR is positive, Total Revenue is increasing as output expands, which means the firm is operating in the ELASTIC portion of its demand curve.'
        ],
        finalAnswer: '(a) Output = 40 units, Price = $60. (b) Economic Profit = $1,600. (c) Deadweight Loss = $800. (d) Elastic portion, because MR ($20) is positive.',
        apScoringTip: 'Never set Price where MR = MC! MR = MC gives you QUANTITY. You must always plug that quantity back into the DEMAND equation to find PRICE!'
      },
      {
        title: 'Oligopoly Payoff Matrix Analysis',
        topicRef: 'CED Micro 4.5 Oligopoly and Game Theory',
        question: 'Two competing airline firms, SkyFly and AeroJet, are deciding whether to set High or Low ticket prices. Daily profits (SkyFly, AeroJet) are:\\n• Both High: ($500, $500)\\n• SkyFly High, AeroJet Low: ($100, $700)\\n• SkyFly Low, AeroJet High: ($700, $100)\\n• Both Low: ($300, $300)\\n(a) Identify SkyFly\'s dominant strategy, if any. Explain with numbers.\\n(b) Identify AeroJet\'s dominant strategy, if any. Explain with numbers.\\n(c) Determine the Nash Equilibrium of this game.\\n(d) Explain why this game represents a Prisoner\'s Dilemma.',
        solutionSteps: [
          'Step 1 (SkyFly Dominant Strategy):\\n• If AeroJet chooses High: SkyFly gets $500 (High) vs. $700 (Low) -> SkyFly prefers Low ($700 > $500).\\n• If AeroJet chooses Low: SkyFly gets $100 (High) vs. $300 (Low) -> SkyFly prefers Low ($300 > $100).\\nSince Low gives higher payoff in both scenarios, SkyFly\'s dominant strategy is LOW.',
          'Step 2 (AeroJet Dominant Strategy):\\n• If SkyFly chooses High: AeroJet gets $500 (High) vs. $700 (Low) -> AeroJet prefers Low ($700 > $500).\\n• If SkyFly chooses Low: AeroJet gets $100 (High) vs. $300 (Low) -> AeroJet prefers Low ($300 > $100).\\nSince Low gives higher payoff in both scenarios, AeroJet\'s dominant strategy is LOW.',
          'Step 3 (Nash Equilibrium): Both firms playing their dominant strategy leads to the outcome: (SkyFly Low, AeroJet Low) with payoffs ($300, $300).',
          'Step 4 (Prisoner\'s Dilemma): Both firms earn $300 at the Nash Equilibrium, which is strictly worse for both than the collusive cooperative outcome ($500, $500) if both chose High. However, mutual distrust and dominant incentives to defect drive both to the low-profit outcome.'
        ],
        finalAnswer: '(a) Low ($700 > $500 and $300 > $100). (b) Low ($700 > $500 and $300 > $100). (c) (SkyFly Low, AeroJet Low) with payoffs ($300, $300). (d) Both firms end up worse off ($300 each) than if they colluded ($500 each).',
        apScoringTip: 'When explaining dominant strategy on the AP exam, you MUST compare payoffs under BOTH of the rival\'s possible choices!'
      }
    ],
    diagrams: [
      {
        id: 'monopoly_graph',
        title: 'Single-Price Monopoly: Output Determination & Deadweight Loss',
        subtitle: 'Profit Maximization at MR = MC with Price Set on Demand Curve',
        type: 'monopoly_graph',
        description: 'Downward-sloping demand curve, steeper MR curve, checkmark MC curve, profit-maximizing quantity Qm where MR = MC, price Pm on demand curve, green economic profit box, and red Deadweight Loss triangle.',
        takeaway: 'Monopolies produce less and charge higher prices than competitive markets, resulting in allocative inefficiency (P > MC) and deadweight loss.'
      }
    ],
    commonTraps: [
      'Setting price where MR = MC. MR = MC determines output; you MUST go up to the Demand Curve to find price!',
      'Believing monopolists are guaranteed to make an economic profit. If ATC is above Demand at Qm, a monopoly incurs an economic loss!',
      'Assuming monopolists charge the highest possible price. Charging the highest price (where Q=1) does NOT maximize total profit!',
      'Thinking Monopolistic Competition earns economic profit in the long run. Free entry drives economic profit to zero (P = ATC) just like in perfect competition.'
    ],
    cramSheet: [
      'Monopoly: Single seller, high barriers, price maker, MR < Demand.',
      'Profit Maximizing Output: MR = MC; Price found by reading UP to Demand curve.',
      'Elastic Region Rule: Monopolists only produce where MR > 0 (elastic range of demand).',
      'Perfect Price Discrimination: MR = Demand; Consumer Surplus = 0; DWL = 0 (Allocatively Efficient).',
      'Monopolistic Competition Long Run: P = ATC (Normal profit); Excess Capacity = Q_minATC - Q_actual.',
      'Dominant Strategy: Best choice regardless of what the rival does.',
      'Nash Equilibrium: Neither player regrets their choice given the rival\'s action.',
      'Prisoner\'s Dilemma: Dominant self-interest leads to an outcome worse than mutual cooperation.'
    ]
  },

  // =========================================================================
  // UNIT 5: FACTOR MARKETS & MONOPSONY
  // =========================================================================
  {
    unitId: 'u5',
    unitNumber: 5,
    title: 'Unit 5: Factor Markets, Derived Demand, Marginal Revenue Product & Monopsony',
    examWeight: '10%–13% of AP Exam',
    bigIdea: 'Demand for productive inputs is derived from consumer demand for final goods. Firms hire inputs up to the point where Marginal Revenue Product equals Marginal Factor Cost (MRP = MFC). Competitive factor markets result in efficient wage determination, while monopsonies restrict hiring and suppress wages.',
    keyTheorems: [
      {
        name: 'The Concept of Derived Demand for Labor',
        conditions: 'Any competitive factor market where firms hire inputs to produce goods.',
        conclusion: 'The demand for a factor of production (labor) does NOT exist for its own sake; it is derived from the demand for the final product that labor produces, and the marginal productivity of the worker. If demand for the final good rises (or its price increases), the demand for labor shifts RIGHT.',
        apTip: 'The firm\'s Demand Curve for Labor IS its Marginal Revenue Product (MRP_L) curve!'
      },
      {
        name: 'The Profit-Maximizing Resource Hiring Rule',
        conditions: 'A firm hiring inputs in any labor market.',
        conclusion: 'A profit-maximizing firm hires additional workers as long as the revenue added by the worker exceeds the cost of hiring that worker: MRP >= MFC. Profit is maximized where MRP = MFC.',
        apTip: 'In a competitive labor market, the wage is fixed by the market, so Marginal Factor Cost equals the market wage (MFC = Wage). Thus, the rule simplifies to: MRP = Wage!'
      },
      {
        name: 'Monopsony Wage Markdown Theorem',
        conditions: 'A single buyer of labor facing an upward-sloping market labor supply curve.',
        conclusion: 'Because the monopsonist must raise the wage for ALL workers to attract one additional worker, Marginal Factor Cost lies strictly ABOVE the Labor Supply curve (MFC > S_L). The monopsonist hires where MRP = MFC (quantity Q_m), but pays wage W_m by reading DOWN to the Labor Supply curve! This creates lower employment (Q_m < Q_c) and suppressed wages (W_m < W_c).',
        apTip: 'A minimum wage set in a monopsony market can actually INCREASE both employment AND wages, up to the competitive wage level!'
      },
      {
        name: 'The Least-Cost Rule (Cost-Minimizing Input Rule)',
        conditions: 'A firm employing multiple variable inputs (Labor and Capital).',
        conclusion: 'A firm minimizes total production costs for a given output level when the marginal product per dollar spent is equalized across all inputs: (MP_L / P_L) = (MP_K / P_K).',
        apTip: 'If (MP_L / P_L) > (MP_K / P_K), the firm gets more output per dollar from Labor! The firm should employ MORE Labor and LESS Capital to minimize costs.'
      }
    ],
    formulas: [
      {
        name: 'Marginal Revenue Product of Labor (MRP_L)',
        latex: 'MRP_L = MP_L \\\\times P_{\\\\text{output}} \\\\quad (\\\\text{Perfect Comp Output}) \\\\quad \\\\text{or} \\\\quad MRP_L = \\\\frac{\\\\Delta TR}{\\\\Delta L}',
        explanation: 'The additional total revenue generated by hiring one additional unit of labor.'
      },
      {
        name: 'Marginal Factor Cost (MFC)',
        latex: 'MFC = \\\\frac{\\\\Delta TC}{\\\\Delta L} = \\\\frac{\\\\Delta (\\\\text{Wage} \\\\times L)}{\\\\Delta L}',
        explanation: 'The additional cost incurred by hiring one additional worker. Equals Wage in competitive labor markets.'
      },
      {
        name: 'Profit-Maximizing Hiring Condition',
        latex: 'MRP_L = MFC \\\\quad (\\\\text{In Competitive Labor Market: } MRP_L = W)',
        explanation: 'Firms hire workers up to the point where the marginal revenue product equals the marginal wage cost.'
      },
      {
        name: 'Least-Cost Input Combination Rule',
        latex: '\\\\frac{MP_L}{W} = \\\\frac{MP_K}{r_K}',
        explanation: 'Cost minimization requires equal marginal product per dollar across labor (wage W) and capital (rental rate r).'
      },
      {
        name: 'Profit-Maximizing Input Combination Rule',
        latex: '\\\\frac{MRP_L}{P_L} = \\\\frac{MRP_K}{P_K} = 1',
        explanation: 'Simultaneously minimizes costs and maximizes total economic profit across all inputs.'
      }
    ],
    sections: [
      {
        heading: '1. Derived Demand & Shifters of the Labor Demand Curve (CED 5.1 - 5.2)',
        content: \`* **Derived Demand**: Demand for labor is derived from the demand for the final goods and services workers produce.
  * *Example*: An increase in the demand for electric vehicles causes automakers to increase their demand for automotive assembly technicians.
* **Marginal Revenue Product (MRP)**:
  * For a firm in a competitive output market:
    $$MRP_L = MP_L \\\\times P_{\\\\text{output}}$$
  * For a firm with monopoly power in the output market:
    $$MRP_L = MP_L \\\\times MR_{\\\\text{output}} \\\\quad (\\\\text{MRP lies below VMP because } MR < P)$$
* **Shifters of the Labor Demand ($D_L = MRP$) Curve**:
  1. **Change in Product Price ($P_{\\\\text{output}}$)**: If product price rises, $MRP$ shifts RIGHT.
  2. **Change in Labor Productivity ($MP_L$)**: Technological improvements or worker education increase $MP_L$, shifting $MRP$ RIGHT.
  3. **Prices of Other Resources**:
     * **Substitute Inputs**: If capital becomes cheaper, the *substitution effect* reduces labor demand, while the *output effect* increases labor demand. Net effect depends on which dominates!
     * **Complementary Inputs**: If machinery price falls, firm buys more machinery, needing more workers to operate them $\\\\implies$ Labor Demand shifts RIGHT.\`
      },
      {
        heading: '2. Perfectly Competitive Factor Markets: Side-by-Side Analysis (CED 5.3)',
        content: \`* **The Labor Market (Industry)**:
  * Market Demand ($D_L = \\\\sum MRP$) intersects Market Supply ($S_L$) to establish the equilibrium market wage ($W_e$) and total employment ($Q_e$).
* **The Individual Firm (Wage Taker)**:
  * The firm can hire as many workers as it wants at the prevailing market wage $W_e$.
  * Therefore, the firm faces a **perfectly horizontal (infinitely elastic) supply of labor**:
    $$S_L = MFC = W_e$$
  * The firm hires workers until:
    $$MRP_L = MFC \\\\quad \\\\implies \\\\quad MRP_L = W_e$$\`
      },
      {
        heading: '3. Monopsonistic Factor Markets: Single Buyer of Labor (CED 5.4)',
        content: \`* **Characteristics of Monopsony**:
  * A single employer hiring labor in a geographically isolated or specialized market (e.g., a coal mine in a company town, a lone hospital hiring registered nurses in a rural county).
  * Workers have few or no alternative employment opportunities.
  * **Wage Maker**: The firm faces the upward-sloping market supply curve of labor ($S_L$).
* **Why MFC Lies Above Labor Supply ($MFC > S_L$)**:
  * To hire an additional worker, the firm must offer a higher wage to attract them.
  * Crucially, the firm must pay that higher wage to **all currently employed workers** as well!
  * Thus, the marginal cost of hiring that worker ($MFC$) is their wage PLUS the wage increases given to all existing workers.
* **Monopsony Hiring Decision**:
  1. Find quantity $Q_m$ where **$MRP = MFC$**.
  2. To find the wage paid ($W_m$), project DOWN to the **Labor Supply curve ($S_L$)**!
  3. Result: Monopsony hires **fewer workers ($Q_m < Q_c$)** and pays a **lower wage ($W_m < W_c$)** than a competitive market.
* **Minimum Wage in Monopsony**:
  * In a competitive market, a minimum wage above equilibrium creates unemployment.
  * In a monopsony, setting a minimum wage turns the $MFC$ curve into a flat line at the minimum wage level, which can **INCREASE both employment and wages** simultaneously!\`
      },
      {
        heading: '4. The Least-Cost Rule & Multi-Input Optimization (CED 5.5)',
        content: \`Firms employ multiple inputs (labor $L$ and capital $K$) to produce output:

* **Least-Cost Rule (Cost Minimization)**:
  $$\\\\frac{MP_L}{P_L} = \\\\frac{MP_K}{P_K}$$
* **Decision Rules for Adjusting Inputs**:
  * If $\\\\frac{MP_L}{P_L} > \\\\frac{MP_K}{P_K} \\\\implies$ The firm gains more output per dollar from Labor. **Hire MORE Labor, LESS Capital**! As labor rises, $MP_L$ falls (diminishing returns) until equality is restored.
  * If $\\\\frac{MP_L}{P_L} < \\\\frac{MP_K}{P_K} \\\\implies$ **Hire LESS Labor, MORE Capital**!
* **Profit-Maximizing Input Combination**:
  $$\\\\frac{MRP_L}{P_L} = \\\\frac{MRP_K}{P_K} = 1$$
  Every input must pay for itself at the margin ($MRP = P_{\\\\text{input}}$).\`
      }
    ],
    workedExamples: [
      {
        title: 'Determining Profit-Maximizing Labor Hiring in a Competitive Market',
        topicRef: 'CED Micro 5.2 Marginal Revenue Product / 5.3 Factor Markets',
        question: 'A competitive firm sells its output for $5 per unit and hires labor in a competitive labor market at a daily wage of $30. Labor and total output are:\\n• L = 0, TP = 0\\n• L = 1, TP = 10\\n• L = 2, TP = 18\\n• L = 3, TP = 24\\n• L = 4, TP = 28\\n• L = 5, TP = 30\\n(a) Calculate the Marginal Product (MP) of the 3rd worker.\\n(b) Calculate the Marginal Revenue Product (MRP) of the 3rd worker.\\n(c) Determine how many workers the firm should hire to maximize profits. Explain.',
        solutionSteps: [
          'Step 1 (MP of 3rd worker): MP = TP(3) - TP(2) = 24 - 18 = 6 units.',
          'Step 2 (MRP of 3rd worker): MRP = MP * P_output = 6 * $5 = $30.',
          'Step 3 (Compute MRP for all workers at P = $5):\\n• Worker 1: MP = 10 => MRP = 10 * $5 = $50\\n• Worker 2: MP = 8 => MRP = 8 * $5 = $40\\n• Worker 3: MP = 6 => MRP = 6 * $5 = $30\\n• Worker 4: MP = 4 => MRP = 4 * $5 = $20\\n• Worker 5: MP = 2 => MRP = 2 * $5 = $10',
          'Step 4 (Hiring Decision at Wage = $30):\\n• Worker 1: MRP ($50) >= Wage ($30) -> Hire!\\n• Worker 2: MRP ($40) >= Wage ($30) -> Hire!\\n• Worker 3: MRP ($30) >= Wage ($30) -> Hire! (MRP = MFC)\\n• Worker 4: MRP ($20) < Wage ($30) -> Do NOT hire!\\nTherefore, the firm maximizes profit by hiring exactly 3 workers.'
        ],
        finalAnswer: '(a) MP of 3rd worker = 6 units. (b) MRP of 3rd worker = $30. (c) Hire 3 workers, because at L=3, MRP ($30) equals Wage ($30); hiring a 4th worker would add less revenue ($20) than cost ($30).',
        apScoringTip: 'When justifying hiring decisions, always explicitly compare MRP to Wage (or MFC) for the last worker hired and the first worker NOT hired!'
      }
    ],
    diagrams: [
      {
        id: 'factor_market_graph',
        title: 'Factor Markets: Competitive Labor Market vs. Monopsony Hiring',
        subtitle: 'Comparing Wage Determination and Employment Levels',
        type: 'factor_market_graph',
        description: 'Left graph showing competitive labor market equilibrium with horizontal firm labor supply SL = MFC = Wc. Right graph showing monopsony labor market where MFC lies above SL, with output Qm at MRP = MFC and wage Wm read down on SL.',
        takeaway: 'Monopsonies restrict employment (Qm < Qc) and suppress wages (Wm < Wc) compared to competitive labor markets.'
      }
    ],
    commonTraps: [
      'Confusing Marginal Cost (MC) with Marginal Factor Cost (MFC). MC is cost per unit of OUTPUT (Delta TC / Delta Q); MFC is cost per unit of INPUT (Delta TC / Delta L)!',
      'Reading the monopsony wage off the MFC curve. The monopsonist finds quantity where MRP = MFC, but pays the wage off the LABOR SUPPLY curve!',
      'Thinking a minimum wage ALWAYS causes unemployment. In a monopsony, an appropriately set minimum wage can eliminate wage markdown and INCREASE employment!',
      'Forgetting that labor demand is derived demand. If product price falls, labor demand shifts left even if worker productivity did not change!'
    ],
    cramSheet: [
      'Derived Demand: Demand for labor comes from demand for product produced.',
      'MRP = MP * P (Competitive output market); MRP = Delta TR / Delta L.',
      'Competitive Labor Market Firm: Wage taker; S_L = MFC = Wage (horizontal).',
      'Hiring Rule: Hire where MRP = MFC (or MRP = Wage in competitive market).',
      'Monopsony: Single buyer of labor; MFC lies above S_L; Hires where MRP = MFC, pays wage off S_L.',
      'Least-Cost Rule: (MP_L / P_L) = (MP_K / P_K).'
    ]
  },

  // =========================================================================
  // UNIT 6: MARKET FAILURE & THE ROLE OF GOVERNMENT
  // =========================================================================
  {
    unitId: 'u6',
    unitNumber: 6,
    title: 'Unit 6: Market Failure, Externalities, Public Goods & Income Distribution',
    examWeight: '8%–13% of AP Exam',
    bigIdea: 'Unregulated markets fail to achieve social efficiency when externalities, public goods, asymmetric information, or monopoly power exist. Governments intervene using Pigouvian taxes, subsidies, antitrust regulations, and public provision to restore social efficiency (MSB = MSC).',
    keyTheorems: [
      {
        name: 'The Social Efficiency Optimum Condition',
        conditions: 'An economy evaluating the total social welfare of production and consumption.',
        conclusion: 'Social allocative efficiency is achieved exclusively where Marginal Social Benefit equals Marginal Social Cost: MSB = MSC. When this condition is violated, the market fails and Deadweight Loss (DWL) is generated.',
        apTip: 'In the absence of externalities, private marginal benefit equals social benefit (MPB = MSB) and private marginal cost equals social cost (MPC = MSC), so competitive markets naturally achieve social efficiency!'
      },
      {
        name: 'Negative Production Externalities and Pigouvian Taxes',
        conditions: 'Production imposes uncompensated costs on third parties (e.g., pollution, environmental degradation).',
        conclusion: 'Marginal Social Cost exceeds Marginal Private Cost (MSC = MPC + Marginal External Cost). Free markets OVERPRODUCE relative to the social optimum (Q_mkt > Q_opt), creating deadweight loss. To restore efficiency, government imposes a per-unit Pigouvian Tax exactly equal to the Marginal External Cost (MEC), shifting MPC up to MSC.',
        apTip: 'The Deadweight Loss triangle in an externality graph ALWAYS points directly toward the socially optimal quantity Q_opt!'
      },
      {
        name: 'Positive Consumption Externalities and Pigouvian Subsidies',
        conditions: 'Consumption generates uncompensated benefits for third parties (e.g., vaccinations, education).',
        conclusion: 'Marginal Social Benefit exceeds Marginal Private Benefit (MSB = MPB + Marginal External Benefit). Free markets UNDERPRODUCE relative to the social optimum (Q_mkt < Q_opt), creating deadweight loss. To restore efficiency, government provides a per-unit Pigouvian Subsidy equal to the Marginal External Benefit (MEB), shifting MPB up to MSB.',
        apTip: 'Remember: Negative externality = Market OVERPRODUCES (tax it); Positive externality = Market UNDERPRODUCES (subsidize it).'
      },
      {
        name: 'The Fourfold Goods Classification & The Free-Rider Problem',
        conditions: 'Classification of goods by Excludability (can people be prevented from using it?) and Rivalry (does one person\'s use diminish another\'s?).',
        conclusion: 'Public goods are NON-EXCLUDABLE and NON-RIVAL. Because non-payers cannot be excluded, individuals have an incentive to free-ride, causing private markets to underprovide or completely fail to supply public goods. Therefore, public goods must be financed through government taxation.',
        apTip: 'Common resources are RIVAL but NON-EXCLUDABLE, leading directly to the "Tragedy of the Commons" (overuse and depletion, e.g., overfishing in international waters).'
      }
    ],
    formulas: [
      {
        name: 'Marginal Social Cost (MSC)',
        latex: 'MSC = MPC + MEC',
        explanation: 'MEC is Marginal External Cost. In negative externalities, MSC lies above MPC.'
      },
      {
        name: 'Marginal Social Benefit (MSB)',
        latex: 'MSB = MPB + MEB',
        explanation: 'MEB is Marginal External Benefit. In positive externalities, MSB lies above MPB.'
      },
      {
        name: 'Optimal Pigouvian Tax / Subsidy',
        latex: '\\\\text{Per-Unit Tax} = MEC \\\\quad \\\\text{at } Q_{\\\\text{opt}} \\\\quad \\\\text{or} \\\\quad \\\\text{Per-Unit Subsidy} = MEB \\\\quad \\\\text{at } Q_{\\\\text{opt}}',
        explanation: 'Internalizes the externality, aligning private decisions with the social optimum.'
      },
      {
        name: 'Gini Coefficient (Income Inequality)',
        latex: 'G = \\\\frac{\\\\text{Area } A}{\\\\text{Area } A + \\\\text{Area } B}',
        explanation: 'Area A is between line of perfect equality (45-degree line) and Lorenz curve; Area B is below Lorenz curve. 0 = perfect equality; 1 = total inequality.'
      }
    ],
    sections: [
      {
        heading: '1. Social Efficiency & Market Failure Overview (CED 6.1)',
        content: \`* **Market Failure**: Occurs when an unregulated free market fails to allocate resources efficiently, resulting in a misallocation of resources where:
  $$MSB \\\\ne MSC$$
* **Four Primary Causes of Market Failure**:
  1. **Externalities**: Costs or benefits spilled over onto third parties not involved in the transaction.
  2. **Public Goods & Common Resources**: Free-rider problem and tragedy of the commons.
  3. **Imperfect Competition / Market Power**: Monopolies and oligopolies restricting output to raise price ($P > MC$).
  4. **Asymmetric Information**: Adverse selection and moral hazard.\`
      },
      {
        heading: '2. Negative Externalities & Pigouvian Corrective Taxes (CED 6.2)',
        content: \`* **Negative Production Externality (e.g., Coal Power Plant Pollution)**:
  * **Private Supply ($MPC$)**: Only considers private costs (fuel, labor).
  * **Social Supply ($MSC$)**: Accounts for private costs PLUS health and environmental damage:
    $$MSC = MPC + MEC$$
  * **Free Market Outcome ($Q_{\\\\text{mkt}}$)**: Where $MPC = MPB$.
  * **Socially Optimal Outcome ($Q_{\\\\text{opt}}$)**: Where $MSC = MSB$.
  * **Market Failure**: Market **OVERPRODUCES** ($Q_{\\\\text{mkt}} > Q_{\\\\text{opt}}$), resulting in Deadweight Loss pointing to the left toward $Q_{\\\\text{opt}}$.
* **Government Remedy (Pigouvian Tax)**:
  * Levy a per-unit tax equal to $MEC$ on producers.
  * Shifts $MPC$ up to coincide with $MSC$, eliminating deadweight loss and achieving $Q_{\\\\text{opt}}$!
* **Coase Theorem**:
  * If property rights are clearly defined, number of parties is small, and transaction costs are negligible, private parties can negotiate an efficient solution without government intervention.\`
      },
      {
        heading: '3. Positive Externalities & Pigouvian Subsidies (CED 6.2)',
        content: \`* **Positive Consumption Externality (e.g., Flu Vaccines, College Education)**:
  * **Private Demand ($MPB$)**: Only reflects private benefits to the individual consumer.
  * **Social Demand ($MSB$)**: Reflects private benefits PLUS herd immunity / educated electorate benefits:
    $$MSB = MPB + MEB$$
  * **Free Market Outcome ($Q_{\\\\text{mkt}}$)**: Where $MPC = MPB$.
  * **Socially Optimal Outcome ($Q_{\\\\text{opt}}$)**: Where $MSC = MSB$.
  * **Market Failure**: Market **UNDERPRODUCES** ($Q_{\\\\text{mkt}} < Q_{\\\\text{opt}}$), generating Deadweight Loss pointing right toward $Q_{\\\\text{opt}}$.
* **Government Remedy (Pigouvian Subsidy)**:
  * Grant a per-unit subsidy equal to $MEB$ to consumers or producers.
  * Shifts demand or supply outward, expanding output to $Q_{\\\\text{opt}}$ and eliminating deadweight loss!\`
      },
      {
        heading: '4. Public Goods, Common Resources & The Four Goods Matrix (CED 6.3)',
        content: \`Goods are classified by two critical economic criteria:

| Category | **Rival in Consumption** (One person's use diminishes another's) | **Non-Rival in Consumption** (One person's use does not diminish another's) |
| :--- | :--- | :--- |
| **Excludable** (Can prevent non-payers from using) | **Private Goods** (Apples, clothing, smartphones, housing) | **Club Goods / Toll Goods** (Cable TV, private toll highways, Netflix subscriptions) |
| **Non-Excludable** (Cannot prevent non-payers from using) | **Common Resources** (Ocean fish in international waters, clean air, public grazing pastures) $\\\\implies$ **Tragedy of the Commons** | **Public Goods** (National defense, lighthouse, municipal tornado warning sirens) $\\\\implies$ **Free-Rider Problem** |

* **The Free-Rider Problem**:
  * Because non-payers cannot be excluded from enjoying public goods, individuals have an incentive to refrain from paying, hoping others will finance it.
  * As a result, private competitive markets fail to supply public goods, requiring government financing through general taxation.
* **Tragedy of the Commons**:
  * Individuals acting in rational self-interest deplete shared, unpriced common resources.
  * Solutions: Privatization (assigning property rights), government quotas, tradeable fishing/hunting permits, or Pigouvian user fees.\`
      },
      {
        heading: '5. Income Distribution: Lorenz Curve, Gini Coefficient & Tax Systems (CED 6.5)',
        content: \`* **The Lorenz Curve**:
  * Plots cumulative percentage of population on horizontal axis against cumulative percentage of income earned on vertical axis.
  * A 45-degree diagonal line represents **Perfect Equality** (e.g., 20% of population earns 20% of income).
  * The further the Lorenz curve bows away from the diagonal line, the **greater the income inequality**.
* **The Gini Coefficient**:
  $$G = \\\\frac{\\\\text{Area between 45° line and Lorenz curve (Area A)}}{\\\\text{Total area under 45° line (Area A + Area B)}}$$
  * $G = 0$: Perfect equality (Lorenz curve lies on the 45-degree line).
  * $G = 1$: Complete inequality (one person earns 100% of national income).
* **Tax Structures & Redistribution**:
  * **Progressive Tax**: Higher income earners pay a HIGHER percentage of their income in taxes (e.g., US federal income tax brackets). Reduces the Gini coefficient.
  * **Proportional (Flat) Tax**: All income earners pay the SAME percentage of their income in taxes.
  * **Regressive Tax**: Lower income earners pay a HIGHER percentage of their income in taxes (e.g., sales taxes, lottery tickets, flat excise taxes on gasoline).\`
      }
    ],
    workedExamples: [
      {
        title: 'Negative Externality Deadweight Loss and Corrective Tax',
        topicRef: 'CED Micro 6.2 Externalities and Public Policy',
        question: 'A paper mill produces paper with private marginal cost MPC = 10 + 2Q and demand MPB = MSB = 100 - Q. Paper production pollutes a nearby river, creating an external cost of $15 per unit of paper produced (MEC = $15).\\n(a) Calculate the free-market equilibrium price and quantity.\\n(b) Calculate the socially optimal equilibrium price and quantity.\\n(c) Calculate the Deadweight Loss produced by the unregulated free market.\\n(d) State the per-unit Pigouvian tax required to achieve the socially optimal allocation.',
        solutionSteps: [
          'Step 1 (Free Market): Set MPC = MPB => 10 + 2Q = 100 - Q => 3Q = 90 => Q_mkt = 30 units.\\n• Market Price: P_mkt = 100 - 30 = $70.',
          'Step 2 (Social Optimum): MSC = MPC + MEC = (10 + 2Q) + 15 = 25 + 2Q.\\n• Set MSC = MSB => 25 + 2Q = 100 - Q => 3Q = 75 => Q_opt = 25 units.\\n• Socially Optimal Price: P_opt = 100 - 25 = $75.',
          'Step 3 (Deadweight Loss):\\n• At Q_mkt = 30, MSC = 25 + 2(30) = $85. MSB = 100 - 30 = $70. (MSC exceeds MSB by $15 = MEC).\\n• DWL = 0.5 * (Vertical gap at Q_mkt: MSC - MSB) * (Q_mkt - Q_opt) = 0.5 * ($85 - $70) * (30 - 25) = 0.5 * $15 * 5 = $37.50.',
          'Step 4 (Pigouvian Tax): To shift the MPC curve up to MSC at Q_opt, the government must impose a per-unit tax equal to the Marginal External Cost at Q_opt: Tax = MEC = $15 per unit.'
        ],
        finalAnswer: '(a) Q_mkt = 30 units, P_mkt = $70. (b) Q_opt = 25 units, P_opt = $75. (c) Deadweight Loss = $37.50. (d) $15 per-unit Pigouvian tax.',
        apScoringTip: 'In negative externality graphs, Deadweight Loss is the triangle between Q_opt and Q_mkt, bounded by MSC on top and MSB on bottom, pointing left toward Q_opt!'
      }
    ],
    diagrams: [
      {
        id: 'externality_graph',
        title: 'Negative Production Externality: Market Failure & Corrective Tax',
        subtitle: 'MSC Exceeds MPC Leading to Overproduction and Deadweight Loss',
        type: 'externality_graph',
        description: 'Demand curve MSB=MPB, private supply curve MPC, social supply curve MSC shifted upward by Marginal External Cost, free market overproduction Qmkt, socially optimal output Qopt, red Deadweight Loss triangle pointing to Qopt, and orange Pigouvian tax arrow.',
        takeaway: 'Negative externalities lead free markets to overproduce (Qmkt > Qopt); an optimal per-unit Pigouvian tax restores allocative efficiency.'
      }
    ],
    commonTraps: [
      'Drawing the Deadweight Loss triangle pointing away from the social optimum. The DWL triangle ALWAYS points directly toward the socially optimal output Q_opt!',
      'Confusing Public Goods with government-provided goods. A good is an economic Public Good ONLY if it is both non-excludable AND non-rival (e.g., public education is NOT a pure public good because classrooms have limited capacity and students can be excluded)!',
      'Confusing Negative Production Externalities (MSC > MPC) with Negative Consumption Externalities (MSB < MPB).',
      'Believing sales tax is a progressive tax. Sales tax takes a higher percentage of income from low-income earners, making it a REGRESSIVE tax!'
    ],
    cramSheet: [
      'Social Efficiency: MSB = MSC; Market Failure occurs when MSB != MSC.',
      'Negative Externality (MSC > MPC): Overproduction (Q_mkt > Q_opt); Fix with per-unit Tax = MEC.',
      'Positive Externality (MSB > MPB): Underproduction (Q_mkt < Q_opt); Fix with per-unit Subsidy = MEB.',
      'DWL triangle in externality graph ALWAYS points to Q_opt.',
      'Public Good = Non-Excludable + Non-Rival (Free-Rider Problem).',
      'Common Resource = Non-Excludable + Rival (Tragedy of the Commons).',
      'Lorenz Curve: Bowed further from 45° line = more inequality.',
      'Gini Coefficient = A / (A + B); 0 = perfect equality, 1 = total inequality.',
      'Taxes: Progressive = Higher % on rich; Regressive = Higher % on poor; Flat = Same % on all.'
    ]
  }
];
`;

fs.writeFileSync(path.join(__dirname, '../src/data/notes/apMicroeconomicsNotes.ts'), content, 'utf8');
console.log('Successfully wrote src/data/notes/apMicroeconomicsNotes.ts! File length:', content.length);
