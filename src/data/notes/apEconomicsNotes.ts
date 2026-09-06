import { APUnitNote } from './types';

export const AP_ECONOMICS_NOTES: APUnitNote[] = [
  // ==========================================
  // UNIT 1: MICRO 1: SUPPLY, DEMAND & ELASTICITY
  // ==========================================
  {
    unitId: 'u1',
    unitNumber: 1,
    title: 'Micro 1: Supply, Demand & Elasticity',
    examWeight: '15%–20% of AP Exam',
    bigIdea: 'Competitive markets allocate scarce resources through the price mechanism, governed by the laws of supply and demand, consumer/producer surplus, and price elasticities.',
    keyTheorems: [
      {
        name: 'The Law of Demand and Downward-Sloping Demand Curve',
        conditions: 'Ceteris paribus (all other factors held constant).',
        conclusion: 'As the price of a good increases ($P \\uparrow$), quantity demanded decreases ($Q_d \\downarrow$). This inverse relationship is driven by: (1) The Substitution Effect (consumers switch to cheaper alternatives), (2) The Income Effect (higher price reduces real purchasing power), and (3) Diminishing Marginal Utility.',
        apTip: 'A change in PRICE causes a movement ALONG the existing demand curve (change in quantity demanded). A change in non-price determinants (income, preferences, related goods prices) SHIFTS the entire curve!'
      },
      {
        name: 'Deadweight Loss from Price Controls and Taxes',
        conditions: 'Interference with market equilibrium via price ceilings, price floors, or per-unit excise taxes.',
        conclusion: 'Government interventions that drive market output away from equilibrium quantity $Q_e$ create Deadweight Loss (DWL)—the loss of total economic surplus that is neither captured by consumers, producers, nor government tax revenue.',
        apTip: 'A Price Ceiling is binding ONLY when set BELOW equilibrium (causes shortage). A Price Floor is binding ONLY when set ABOVE equilibrium (causes surplus, e.g. minimum wage).'
      }
    ],
    formulas: [
      {
        name: 'Price Elasticity of Demand (Midpoint Formula)',
        latex: 'E_d = \\left| \\frac{\\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2}}{\\frac{P_2 - P_1}{(P_1 + P_2)/2}} \\right|',
        explanation: 'If $E_d > 1$, demand is Elastic; if $E_d < 1$, Inelastic; if $E_d = 1$, Unit Elastic.'
      },
      {
        name: 'Total Revenue Rule of Elasticity',
        latex: '\\text{If } E_d < 1 \\text{ (Inelastic)}, \\; P \\uparrow \\implies TR \\uparrow; \\quad \\text{If } E_d > 1 \\text{ (Elastic)}, \\; P \\uparrow \\implies TR \\downarrow',
        explanation: 'Firms maximize total revenue where demand is unit elastic ($E_d = 1$ and $MR = 0$).'
      }
    ],
    sections: [
      {
        heading: '1. Elasticity Categories and Cross-Elasticity Matrix',
        content: `Classification of economic elasticities:

| Elasticity Metric | Formula Concept | Coefficient Interpretation | Economic Classification |
| :--- | :--- | :--- | :--- |
| **Price Elasticity of Demand ($E_d$)** | $\%\\Delta Q_d / \\%\\Delta P$ | $E_d > 1$ $\\implies$ Elastic | Luxury goods, many substitutes |
| | | $E_d < 1$ $\\implies$ Inelastic | Necessities, few substitutes |
| **Cross-Price Elasticity ($E_{xy}$)** | $\%\\Delta Q_{d,x} / \\%\\Delta P_y$ | $E_{xy} > 0$ (Positive) | **Substitutes** (e.g. Coke & Pepsi) |
| | | $E_{xy} < 0$ (Negative) | **Complements** (e.g. Coffee & Creamer) |
| **Income Elasticity ($E_i$)** | $\%\\Delta Q_d / \\%\\Delta \\text{Income}$ | $E_i > 0$ (Positive) | **Normal Good** (demand rises with income) |
| | | $E_i < 0$ (Negative) | **Inferior Good** (e.g. ramen noodles, used cars) |`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating Deadweight Loss and Tax Incidence',
        topicRef: 'CED Micro 2.8 Taxes and Market Efficiency',
        question: 'In a competitive widget market, equilibrium is $P_e = $10, Q_e = 100$. The government levies a $2 per-unit excise tax on producers, raising consumer price to $11, lowering net producer price to $9, and reducing market transactions to $Q_t = 80$. Calculate: (a) Government tax revenue, and (b) Deadweight Loss (DWL).',
        solutionSteps: [
          'Step 1: Calculate Tax Revenue: $\\text{Revenue} = \\text{Tax per unit} \\times Q_t = \\$2 \\times 80 = \\$160$.',
          'Step 2: Identify loss in quantity: $\\Delta Q = Q_e - Q_t = 100 - 80 = 20$ units.',
          'Step 3: Calculate Deadweight Loss: DWL is the triangular area between supply and demand curves over the lost output: $\\text{DWL} = \\frac{1}{2} \\times \\text{Tax} \\times \\Delta Q = \\frac{1}{2} \\times \\$2 \\times 20 = \\$20$.',
          'Step 4: Tax Incidence: Consumers pay $11 - $10 = $1; producers pay $10 - $9 = $1 $\\implies$ Tax burden is split evenly due to equal elasticities.'
        ],
        finalAnswer: 'Tax Revenue = $160; Deadweight Loss (DWL) = $20.',
        apScoringTip: 'Remember the triangle area formula for Deadweight Loss: $\\frac{1}{2} \\times \\text{Tax} \\times (Q_e - Q_t)$.'
      }
    ],
    diagrams: [
      {
        id: 'econ_supply_demand_tax',
        title: 'Consumer Surplus, Producer Surplus & Tax Deadweight Loss',
        subtitle: 'Triangular Welfare Distribution in Competitive Markets',
        type: 'supply_demand_graph',
        description: 'Classic X-shaped graph showing Consumer Surplus top triangle, Producer Surplus bottom triangle, Tax Revenue rectangle, and Deadweight Loss triangle.',
        takeaway: 'Taxes drive a wedge between consumer and producer prices, creating Deadweight Loss by eliminating mutually beneficial transactions.'
      }
    ],
    commonTraps: [
      'Confusing a "change in demand" (shift of the curve) with a "change in quantity demanded" (movement along the curve caused by price).',
      'Thinking a price ceiling set above equilibrium causes a surplus. An above-equilibrium price ceiling is NON-BINDING and has zero market effect!',
      'Assuming the entity legally obligated to pay the tax bears the economic burden. Tax incidence depends entirely on the relative elasticities of supply and demand, not who writes the check to the government.'
    ],
    cramSheet: [
      'Supply and Demand shift: Price changes cause movements ALONG the curve; external factors SHIFT the curve.',
      'Elasticity: $E_d > 1$ elastic, $E_d < 1$ inelastic. Midpoint on linear demand is unit elastic ($MR = 0$).',
      'Cross-price elasticity: Positive = Substitutes; Negative = Complements.',
      'Income elasticity: Positive = Normal; Negative = Inferior.',
      'Binding price ceiling = BELOW equilibrium (Shortage); Binding price floor = ABOVE equilibrium (Surplus).'
    ]
  },

  // ==========================================
  // UNIT 2: MICRO 2: PRODUCTION COSTS & PERFECT COMPETITION
  // ==========================================
  {
    unitId: 'u2',
    unitNumber: 2,
    title: 'Micro 2: Production Costs & Perfect Competition',
    examWeight: '12%–15% of AP Exam',
    bigIdea: 'Firms minimize costs across short-run and long-run horizons, maximizing profit where $MR = MC$, with perfect competition driving economic profits to zero in the long run.',
    keyTheorems: [
      {
        name: 'The Golden Profit Maximization Rule ($MR = MC$)',
        conditions: 'Any firm in any market structure (Perfect Competition, Monopoly, Oligopoly).',
        conclusion: 'A rational firm maximizes total profit (or minimizes losses) by producing the output quantity where Marginal Revenue equals Marginal Cost ($MR = MC$), provided price covers average variable cost in the short run.',
        apTip: 'If $MR > MC$, produce more! The extra revenue from that unit exceeds the cost. If $MR < MC$, produce less!'
      },
      {
        name: 'The Short-Run Shutdown Rule vs. Long-Run Exit Rule',
        conditions: 'Operating decisions for a loss-making firm.',
        conclusion: 'In the short run, fixed costs are sunk. A firm should shut down immediately if Price falls below Average Variable Cost ($P < AVC$). If $AVC \\le P < ATC$, the firm continues operating in the short run to offset a portion of fixed costs. In the long run, the firm exits if $P < ATC$.',
        apTip: 'The competitive firm’s short-run supply curve is the Marginal Cost ($MC$) curve ABOVE minimum $AVC$!'
      }
    ],
    formulas: [
      {
        name: 'Cost Equations',
        latex: 'TC = TFC + TVC, \\quad ATC = AFC + AVC, \\quad MC = \\frac{\\Delta TC}{\\Delta Q}',
        explanation: 'Marginal Cost always intersects Average Variable Cost ($AVC$) and Average Total Cost ($ATC$) at their lowest points.'
      },
      {
        name: 'Perfect Competition Price Taker Condition',
        latex: 'P = MR = AR = D \\quad \\text{("Mr. Darp")}',
        explanation: 'In perfect competition, firm faces perfectly horizontal demand curve at market price.'
      }
    ],
    sections: [
      {
        heading: '1. Production Costs Matrix & Minimum Cost Intersections',
        content: `Cost structures and geometric relationships:

| Cost Metric | Abbreviation | Formula | Geometric Behavior on Graph |
| :--- | :--- | :--- | :--- |
| **Total Cost** | $TC$ | $TFC + TVC$ | Upward sloping; vertical distance between $TC$ and $TVC$ is $TFC$ |
| **Marginal Cost** | $MC$ | $\\Delta TC / \\Delta Q$ | U-shaped checkmark; hits minimum of $AVC$ and $ATC$ |
| **Average Total Cost** | $ATC$ | $TC / Q$ | U-shaped; minimum $ATC$ is the productive efficiency point |
| **Average Variable Cost** | $AVC$ | $TVC / Q$ | U-shaped; minimum $AVC$ is the short-run shutdown price |
| **Average Fixed Cost** | $AFC$ | $TFC / Q$ | Continually declining asymptote toward 0 as output expands |`
      }
    ],
    workedExamples: [
      {
        title: 'Long-Run Equilibrium Adjustment in Perfectly Competitive Markets',
        topicRef: 'CED Micro 3.7 Perfect Competition Long-Run Equilibrium',
        question: 'A competitive firm is currently earning positive economic profits ($P > ATC$). Describe the dynamic market adjustment that restores long-run equilibrium.',
        solutionSteps: [
          'Step 1: Short-run state: Economic profit $\\implies$ Total revenue exceeds opportunity costs.',
          'Step 2: Market entry: Because there are NO barriers to entry, new firms enter the industry seeking profit.',
          'Step 3: Industry supply shift: Market supply curve shifts RIGHT ($S \\rightarrow S_1$).',
          'Step 4: Price effect: Market price falls ($P \\downarrow$).',
          'Step 5: Individual firm impact: Horizontal demand curve drops until $P = \\text{minimum } ATC$.',
          'Step 6: Long-run outcome: Economic profits fall to ZERO (normal profit), entry ceases, and both Productive ($P = \\min ATC$) and Allocative ($P = MC$) efficiency are achieved.'
        ],
        finalAnswer: 'New firms enter $\\implies$ Market supply shifts right $\\implies$ Market price falls $\\implies$ Economic profits erode to zero.',
        apScoringTip: 'Remember: Zero economic profit does NOT mean zero accounting profit! It means the firm earns a normal profit covering all explicit and implicit opportunity costs.'
      }
    ],
    diagrams: [
      {
        id: 'perfect_comp_side_by_side',
        title: 'Side-by-Side Market and Firm Perfectly Competitive Graphs',
        subtitle: 'Market Supply/Demand Setting Price for the "Mr. DARP" Horizontal Firm Curve',
        type: 'side_by_side_econ',
        description: 'Classic side-by-side graphs: Left graph shows market equilibrium price crossing horizontally over to the right graph as horizontal line P = MR = AR = D.',
        takeaway: 'Individual competitive firms are price takers with zero market power; price is dictated entirely by global industry equilibrium.'
      }
    ],
    commonTraps: [
      'Thinking a firm should shut down whenever it is losing money. If $P > AVC$, staying open minimizes losses by paying off part of fixed costs!',
      'Forgetting that $MC$ cuts through the MINIMUM of both $ATC$ and $AVC$.',
      'Confusing diminishing marginal returns (short-run phenomenon due to fixed plant size) with diseconomies of scale (long-run phenomenon due to managerial bureaucracy).'
    ],
    cramSheet: [
      'Produce where $MR = MC$ to maximize profit.',
      'Perfect competition: $P = MR = AR = D$ ("Mr. DARP").',
      'Shutdown rule: If $P < AVC$, shut down immediately.',
      'Long-run equilibrium: Zero economic profit ($P = \\min ATC = MC$).',
      'Productive efficiency: $P = \\min ATC$; Allocative efficiency: $P = MC$.'
    ]
  },

  // ==========================================
  // UNIT 3: MICRO 3: IMPERFECT COMPETITION & GAME THEORY
  // ==========================================
  {
    unitId: 'u3',
    unitNumber: 3,
    title: 'Micro 3: Imperfect Competition & Game Theory',
    examWeight: '12%–15% of AP Exam',
    bigIdea: 'Imperfect markets (monopolies, oligopolies, monopolistic competition) restrict output, generate deadweight loss, and engage in strategic game-theoretic interdependence.',
    keyTheorems: [
      {
        name: 'Monopoly Price and Output Inefficiency',
        conditions: 'Single firm with high barriers to entry facing downward-sloping demand.',
        conclusion: 'Because a monopoly must lower price on all units to sell more, Marginal Revenue lies BELOW the Demand curve ($MR < P$). The monopolist produces where $MR = MC$ and charges the price consumers are willing to pay on the Demand curve ($P_m > MC$). Monopolies under-produce, charge higher prices, and create deadweight loss.',
        apTip: 'A natural monopoly has economies of scale over the entire market demand curve (continually downward-sloping $ATC$). Regulators enforce the Fair-Return Price ($P = ATC$) or Socially Optimal Price ($P = MC$).'
      },
      {
        name: 'Nash Equilibrium in Oligopolistic Game Theory',
        conditions: 'Strategic interdependence between oligopolistic firms (Payoff Matrix).',
        conclusion: 'A Dominant Strategy is an action that yields the best outcome regardless of what the competitor chooses. A Nash Equilibrium is an outcome where neither player has an incentive to unilaterally deviate from their chosen strategy given the other player’s choice.',
        apTip: 'In a Prisoner’s Dilemma payoff matrix, collusion (both cooperating) yields the highest joint profit, but the dominant strategy tempts both to defect, landing in an inferior Nash equilibrium.'
      }
    ],
    formulas: [
      {
        name: 'Monopoly Downward Sloping Marginal Revenue',
        latex: 'MR < P \\quad \\text{for any } Q > 0',
        explanation: 'Monopolist must lower the price on previous units to sell an additional unit.'
      },
      {
        name: 'Perfect Price Discrimination Condition',
        latex: '\\text{First-Degree Discrimination: } MR = D \\implies \\text{Consumer Surplus} = 0, \\; \\text{DWL} = 0',
        explanation: 'Charging each consumer their exact willingness to pay captures all surplus into producer profit.'
      }
    ],
    sections: [
      {
        heading: '1. Market Structures Comparative Matrix',
        content: `Comprehensive taxonomy of the four major market structures:

| Characteristic | Perfect Competition | Monopolistic Competition | Oligopoly | Monopoly |
| :--- | :--- | :--- | :--- | :--- |
| **Number of Firms** | Thousands (very large) | Many | Few dominant firms | One single seller |
| **Type of Product** | Standardized (identical) | Differentiated | Standardized or differentiated | Unique (no close substitutes) |
| **Barriers to Entry** | None (free entry/exit) | Low | High (patents, scale) | Very high (legal, geographic) |
| **Control Over Price** | None (Price Taker) | Some | Substantial (Interdependent) | High (Price Maker) |
| **Demand Curve** | Perfectly Elastic (Horizontal) | Downward sloping (Elastic) | Kinked / Interdependent | Downward sloping (Inelastic) |
| **Long-Run Profit** | Zero ($P = \\min ATC$) | Zero ($P = ATC$) | Positive economic profit | Positive economic profit |
| **Efficiency** | Productive & Allocative | Excess capacity (not efficient) | Neither efficient | Neither efficient |`
      }
    ],
    workedExamples: [
      {
        title: 'Solving a $2 \\times 2$ Oligopoly Game Theory Payoff Matrix',
        topicRef: 'CED Micro 4.4 Oligopoly and Game Theory',
        question: 'Two airlines (AirA and FlyB) decide whether to set High or Low ticket prices. Profits ($AirA, FlyB): Both High = ($100, $100); AirA High & FlyB Low = ($20, $150); AirA Low & FlyB High = ($150, $20); Both Low = ($50, $50). (a) Does AirA have a dominant strategy? (b) Identify the Nash Equilibrium.',
        solutionSteps: [
          'Step 1: Determine AirA’s dominant strategy: If FlyB chooses High, AirA prefers Low ($150 > $100). If FlyB chooses Low, AirA prefers Low ($50 > $20). Regardless of FlyB, AirA always chooses **Low**.',
          'Step 2: Determine FlyB’s dominant strategy: By symmetry, if AirA chooses High, FlyB chooses Low ($150 > $100); if AirA chooses Low, FlyB chooses Low ($50 > $20). FlyB always chooses **Low**.',
          'Step 3: Combine strategies: Both firms have a dominant strategy to choose Low.',
          'Step 4: Find Nash Equilibrium: At (Low, Low), neither firm can unilaterally switch to High without losing money ($50 \\rightarrow $20).'
        ],
        finalAnswer: '(a) Yes, AirA’s dominant strategy is to price Low. (b) Nash Equilibrium is (AirA Low, FlyB Low) with payoffs ($50, $50).',
        apScoringTip: 'To prove a dominant strategy on an FRQ, you MUST test both possible actions of the opponent explicitly!'
      }
    ],
    diagrams: [
      {
        id: 'monopoly_deadweight_loss',
        title: 'Monopoly Pricing, Profit, and Deadweight Loss',
        subtitle: 'MR < Demand, Quantity Set at MR = MC, Price Read Up to Demand',
        type: 'monopoly_graph',
        description: 'Graph showing MR curve falling steeper than Demand. Qm chosen where MR=MC, price Pm projected up to Demand curve, creating deadweight loss triangle against competitive Q.',
        takeaway: 'Monopolies restrict quantity and inflate prices above marginal cost, destroying allocative efficiency.'
      }
    ],
    commonTraps: [
      'Reading monopoly price off the $MR$ curve. Monopolies produce where $MR = MC$, but charge the price corresponding to that quantity on the DEMAND curve!',
      'Thinking a Nash equilibrium must maximize joint profits. (Low, Low) is Nash even though (High, High) produces higher combined profits.',
      'Assuming monopolistic competition earns economic profits in the long run. Free entry erodes profits to zero, leaving excess capacity.'
    ],
    cramSheet: [
      'Monopoly: $MR < D$. Produce where $MR = MC$, go UP to Demand curve for Price.',
      'Natural monopoly: Declining $ATC$. Socially optimal price is $P = MC$; Fair-return is $P = ATC$.',
      'Dominant strategy: The best move regardless of what the other player does.',
      'Nash equilibrium: Neither player wants to deviate unilaterally.',
      'Perfect price discrimination: $MR = D$, Consumer Surplus = 0, Deadweight Loss = 0.'
    ]
  },

  // ==========================================
  // UNIT 4: MACRO 1: ECONOMIC INDICATORS (GDP & INFLATION)
  // ==========================================
  {
    unitId: 'u4',
    unitNumber: 4,
    title: 'Macro 1: Economic Indicators (GDP & Inflation)',
    examWeight: '12%–16% of AP Exam',
    bigIdea: 'National economic performance is quantified using Gross Domestic Product (GDP), unemployment metrics, and price level indices (CPI/GDP Deflator).',
    keyTheorems: [
      {
        name: 'Gross Domestic Product Inclusions and Exclusions',
        conditions: 'Measuring total market value of final goods/services produced domestically in one year.',
        conclusion: 'Expenditure approach: $GDP = C + I + G + (X - M)$. GDP excludes: (1) Intermediate goods (avoids double counting), (2) Used/secondhand goods, (3) Purely financial transactions (stocks/bonds), (4) Government transfer payments (welfare/Social Security), and (5) Non-market/illegal activities.',
        apTip: 'Transfer payments are NOT part of GDP because no current good or service is produced in exchange. When recipients spend that money, it enters GDP under Consumer Spending ($C$).'
      },
      {
        name: 'Nominal vs. Real GDP and the GDP Deflator',
        conditions: 'Distinguishing economic output growth from price level inflation.',
        conclusion: 'Nominal GDP measures output using current prices; Real GDP measures output using constant base-year prices. Only Real GDP reflects actual physical production growth.',
        apTip: 'If Nominal GDP grew by 5% and the GDP Deflator grew by 3%, Real GDP grew by approximately $5\\% - 3\\% = 2\\%$.'
      }
    ],
    formulas: [
      {
        name: 'GDP Expenditure Equation',
        latex: 'GDP = C + I + G + X_n \\quad (X_n = \\text{Exports} - \\text{Imports})',
        explanation: 'C = Consumer spending, I = Business investment, G = Government spending, Xn = Net exports.'
      },
      {
        name: 'Unemployment Rate Formula',
        latex: '\\text{Unemployment Rate} = \\frac{\\text{Unemployed}}{\\text{Labor Force}} \\times 100',
        explanation: 'Labor force includes only those working or actively seeking work. Discouraged workers are excluded.'
      },
      {
        name: 'Consumer Price Index (CPI) and Inflation Rate',
        latex: '\\text{CPI} = \\frac{\\text{Cost of Market Basket in Current Year}}{\\text{Cost of Market Basket in Base Year}} \\times 100',
        explanation: '$\\text{Inflation Rate} = \\frac{\\text{CPI}_2 - \\text{CPI}_1}{\\text{CPI}_1} \\times 100$.'
      }
    ],
    sections: [
      {
        heading: '1. The Three Types of Unemployment Matrix',
        content: `Classification of unemployment:

| Unemployment Type | Underlying Cause | Economic Remedy | Is it part of the Natural Rate? |
| :--- | :--- | :--- | :--- |
| **Frictional** | Voluntary job transitions, recent college graduates seeking employment | Improved job boards, career counseling | **YES** (Healthy, temporary) |
| **Structural** | Mismatch between worker skills and market needs (automation, globalization) | Job retraining programs, education subsidies | **YES** (Permanent skill shifts) |
| **Cyclical** | Inadequate aggregate demand during economic downturns (recession) | Expansionary fiscal and monetary stimulus | **NO** (Zero at full employment) |`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating Real Interest Rate and Inflation Winners/Losers',
        topicRef: 'CED Macro 2.6 Real vs. Nominal Interest Rates',
        question: 'A bank issues a 30-year mortgage at a fixed nominal interest rate of 6%. The bank expected inflation to be 2%. However, unexpected inflation surges to 5%. Calculate: (a) Expected real interest rate, (b) Actual real interest rate, and (c) State whether the borrower or the lender is helped by the unexpected inflation.',
        solutionSteps: [
          'Step 1: Apply Fisher Equation: $\\text{Real Interest Rate} = \\text{Nominal Rate} - \\text{Inflation Rate}$.',
          'Step 2: Calculate expected real rate: $r_e = 6\\% - 2\\% = 4\\%$.',
          'Step 3: Calculate actual real rate: $r_a = 6\\% - 5\\% = 1\\%$.',
          'Step 4: Determine winner and loser: The borrower pays back the loan with inflated, less valuable dollars. The real return earned by the bank dropped from 4% down to 1%.',
          'Step 5: Conclude: Unexpected inflation **benefits the borrower** and **harms the lender**.'
        ],
        finalAnswer: '(a) Expected real rate = 4%. (b) Actual real rate = 1%. (c) The borrower is helped; the lender is hurt.',
        apScoringTip: 'Remember: Unexpected inflation HELPS borrowers and HURTS lenders (and savers with fixed interest).'
      }
    ],
    diagrams: [
      {
        id: 'macro_business_cycle',
        title: 'The Macroeconomic Business Cycle Waveform',
        subtitle: 'Peak, Contraction (Recession), Trough, Expansion & Trend Line',
        type: 'business_cycle_chart',
        description: 'Oscillating wave around an upward-sloping long-run potential GDP trend line, showing cyclical unemployment during troughs and inflationary gaps at peaks.',
        takeaway: 'Actual GDP fluctuates above and below potential GDP; full employment occurs where the economy intersects the trend line.'
      }
    ],
    commonTraps: [
      'Counting discouraged workers as unemployed. If a person stops looking for work, they leave the labor force entirely, causing the official unemployment rate to ARTIFICIALLY DROP!',
      'Counting used cars or older homes in GDP. Only NEW goods produced in the current year count.',
      'Confusing the CPI with the GDP Deflator. CPI measures consumer market baskets (includes imports); GDP Deflator measures all domestic production (excludes foreign imports).'
    ],
    cramSheet: [
      'GDP formula: $C + I + G + (X - M)$. Excludes used goods, transfers, and intermediate goods.',
      'Natural Rate of Unemployment (NRU) = Frictional + Structural. Cyclical is ZERO at full employment.',
      'Fisher Equation: $\\text{Real Interest Rate} = \\text{Nominal Interest Rate} - \\text{Inflation Rate}$.',
      'Unexpected inflation hurts lenders and savers; helps borrowers with fixed-rate debt.'
    ]
  },

  // ==========================================
  // UNIT 5: MACRO 2: AD-AS MODEL & FISCAL POLICY
  // ==========================================
  {
    unitId: 'u5',
    unitNumber: 5,
    title: 'Macro 2: AD-AS Model & Fiscal Policy',
    examWeight: '12%–16% of AP Exam',
    bigIdea: 'The Aggregate Demand–Aggregate Supply (AD-AS) model illustrates macroeconomic equilibrium, recessionary/inflationary gaps, and fiscal policy multipliers.',
    keyTheorems: [
      {
        name: 'The Long-Run Self-Correction Mechanism',
        conditions: 'An economy operating in a recessionary or inflationary gap without government intervention.',
        conclusion: 'In a recessionary gap ($Y < Y_f$), high unemployment forces nominal wages to fall in the long run. Lower resource costs cause Short-Run Aggregate Supply to shift RIGHT ($SRAS \\rightarrow$), restoring full employment $Y_f$ at a lower price level. In an inflationary gap ($Y > Y_f$), wages rise, shifting $SRAS$ LEFT, restoring $Y_f$ at a higher price level.',
        apTip: 'Wages and input prices are STICKY in the short run, but FLEXIBLE in the long run. The Long-Run Aggregate Supply ($LRAS$) curve is vertical at potential output $Y_f$.'
      },
      {
        name: 'Spending Multiplier vs. Tax Multiplier',
        conditions: 'Discretionary fiscal policy implemented by Congress/President.',
        conclusion: 'The Spending Multiplier ($1 / MPS$) is always larger in absolute magnitude than the Tax Multiplier ($-MPC / MPS$). Initial government spending directly injects 100% of funds into aggregate demand, whereas a tax cut is partially saved by consumers according to their Marginal Propensity to Save ($MPS$).',
        apTip: 'Balanced Budget Multiplier is always equal to 1! If government increases spending and taxes by the exact same amount $\\Delta G = \\Delta T$, real GDP increases by exactly $\\Delta G$.'
      }
    ],
    formulas: [
      {
        name: 'Marginal Propensities and Multipliers',
        latex: 'MPC + MPS = 1, \\quad \\text{Spending Multiplier} = \\frac{1}{MPS}, \\quad \\text{Tax Multiplier} = -\\frac{MPC}{MPS}',
        explanation: '$\\Delta GDP = \\Delta G \\times \\text{Spending Multiplier}$.'
      },
      {
        name: 'Total Output Change Equation',
        latex: '\\Delta Y = \\Delta G \\left( \\frac{1}{1 - MPC} \\right) = -\\Delta T \\left( \\frac{MPC}{1 - MPC} \\right)',
        explanation: 'Shows impact of government purchases versus tax adjustments.'
      }
    ],
    sections: [
      {
        heading: '1. Macroeconomic Gaps and Fiscal Policy Countermeasures',
        content: `Diagnosis and policy matrix:

| Economic Condition | Output Gap | Price Level Pressure | Fiscal Policy Direction | Specific Policy Actions |
| :--- | :--- | :--- | :--- | :--- |
| **Recessionary Gap** | $Y < Y_f$ (Cyclical unemployment $> 0$) | Deflationary / Disinflation | **Expansionary Fiscal Policy** | $\\uparrow$ Government spending ($G$), $\\downarrow$ Taxes ($T$) |
| **Inflationary Gap** | $Y > Y_f$ (Overheating, tight labor) | Inflationary ($P \\uparrow$) | **Contractionary Fiscal Policy** | $\\downarrow$ Government spending ($G$), $\\uparrow$ Taxes ($T$) |
| **Stagflation** | $Y < Y_f$ and $P \\uparrow$ (Negative supply shock) | High inflation + recession | Supply-side deregulation | Subsidies for inputs; tricky for monetary/fiscal policy |`
      }
    ],
    workedExamples: [
      {
        title: 'Calculating Required Fiscal Stimulus to Close a Recessionary Gap',
        topicRef: 'CED Macro 3.8 Fiscal Policy Multipliers',
        question: 'An economy has a recessionary gap of $400 billion. The marginal propensity to consume ($MPC$) is 0.8. Calculate: (a) The spending multiplier, (b) The minimum change in government spending ($G$) needed to close the gap, and (c) The change in taxes ($T$) needed if tax cuts were used instead.',
        solutionSteps: [
          'Step 1: Calculate $MPS$: $MPS = 1 - MPC = 1 - 0.8 = 0.2$.',
          'Step 2: Calculate Spending Multiplier: $M_s = \\frac{1}{MPS} = \\frac{1}{0.2} = 5$.',
          'Step 3: Calculate required $\\Delta G$: $\\Delta Y = \\Delta G \\times M_s \\implies 400 = \\Delta G \\times 5 \\implies \\Delta G = +\\$80\\text{ billion}$.',
          'Step 4: Calculate Tax Multiplier: $M_t = -\\frac{MPC}{MPS} = -\\frac{0.8}{0.2} = -4$.',
          'Step 5: Calculate required $\\Delta T$: $\\Delta Y = \\Delta T \\times M_t \\implies 400 = \\Delta T \\times (-4) \\implies \\Delta T = -\\$100\\text{ billion}$.'
        ],
        finalAnswer: '(a) Spending multiplier = 5. (b) Increase government spending by $80 billion. (c) Decrease taxes by $100 billion.',
        apScoringTip: 'Notice that tax cuts require a LARGER dollar amount ($100B vs $80B) because part of the tax cut is saved ($20B) rather than spent.'
      }
    ],
    diagrams: [
      {
        id: 'ad_as_recessionary_gap',
        title: 'AD-AS Graph: Recessionary Gap and Self-Correction',
        subtitle: 'Equilibrium Below Full Employment and Long-Run SRAS Right Shift',
        type: 'ad_as_graph',
        description: 'Macro AD-AS graph with vertical LRAS line at Yf. Intersection of AD and SRAS sits to the left of LRAS, showing the recessionary gap.',
        takeaway: 'In the long run, falling wages shift SRAS right, restoring potential GDP without government intervention.'
      }
    ],
    commonTraps: [
      'Assuming the spending multiplier and tax multiplier are equal. The spending multiplier is always 1 unit larger than the tax multiplier magnitude.',
      'Shifting $LRAS$ when aggregate demand increases. Shifts in $AD$ only change short-run output; $LRAS$ moves ONLY when productive capacity changes (capital stock, tech, human capital).',
      'Confusing a government budget deficit (annual shortfall of tax revenues vs spending) with the national debt (accumulation of all past deficits).'
    ],
    cramSheet: [
      '$MPC + MPS = 1$; Spending Multiplier = $1 / MPS$; Tax Multiplier = $-MPC / MPS$.',
      'Recessionary Gap: $Y < Y_f$. Fix with $\\uparrow G$ or $\\downarrow T$.',
      'Inflationary Gap: $Y > Y_f$. Fix with $\\downarrow G$ or $\\uparrow T$.',
      'Long-run self-correction: Nominal wages adjust, shifting $SRAS$ to restore $Y_f$.',
      'Balanced budget multiplier = 1.'
    ]
  },

  // ==========================================
  // UNIT 6: MACRO 3: FINANCIAL SECTOR & MONETARY POLICY
  // ==========================================
  {
    unitId: 'u6',
    unitNumber: 6,
    title: 'Macro 3: Financial Sector & Monetary Policy',
    examWeight: '15%–20% of AP Exam',
    bigIdea: 'Central banks control the money supply and interest rates through monetary tools, impacting investment, aggregate demand, and the money market.',
    keyTheorems: [
      {
        name: 'Fractional Reserve Banking and the Money Multiplier',
        conditions: 'Commercial bank balance sheets (T-Accounts) and reserve requirements.',
        conclusion: 'Banks hold a fraction of demand deposits as Required Reserves ($RR = \\text{Deposit} \\times rr$) and loan out Excess Reserves ($ER$). The Simple Money Multiplier equals $1 / rr$. Maximum potential money creation equals $\\text{Excess Reserves} \\times \\text{Money Multiplier}$.',
        apTip: 'If a customer deposits $1,000 in cash into a bank, the IMMEDIATE money supply ($M1$) DOES NOT CHANGE! Cash in circulation drops by $1,000, and demand deposits rise by $1,000.'
      },
      {
        name: 'The Transmission Mechanism of Monetary Policy',
        conditions: 'Central Bank adjusting policy tools (e.g. Open Market Operations, Administered Rates).',
        conclusion: 'Expansionary Policy: Fed buys bonds $\\implies$ Bank reserves $\\uparrow$ $\\implies$ Nominal Interest Rates $\\downarrow$ $\\implies$ Investment & Interest-sensitive Consumption $\\uparrow$ $\\implies$ Aggregate Demand shifts RIGHT ($AD \\uparrow$) $\\implies$ Real GDP ($Y$) and Price Level ($PL$) increase.',
        apTip: 'Remember the acronym: **B**uy **B**ig = Buy bonds, bigger money supply. **S**ell **S**mall = Sell bonds, smaller money supply.'
      }
    ],
    formulas: [
      {
        name: 'Money Multiplier and Maximum Expansion',
        latex: '\\text{Money Multiplier} = \\frac{1}{rr}, \\quad \\Delta M1_{\\max} = \\text{Excess Reserves} \\times \\frac{1}{rr}',
        explanation: 'Where $rr$ is the reserve requirement ratio set by the central bank.'
      },
      {
        name: 'Bond Price and Interest Rate Inverse Relationship',
        latex: 'P_{\\text{bond}} \\propto \\frac{1}{\\text{Nominal Interest Rate}}',
        explanation: 'When interest rates rise, existing bond prices fall, and vice versa.'
      }
    ],
    sections: [
      {
        heading: '1. Central Bank Monetary Policy Toolkit Matrix',
        content: `Tools for expansionary vs. contractionary policy:

| Policy Tool | Expansionary Action (Fight Recession) | Contractionary Action (Fight Inflation) | Impact on Money Supply / Reserves |
| :--- | :--- | :--- | :--- |
| **Open Market Operations (OMO)** | **Buy Treasury Bonds** ("Buy = Bigger") | **Sell Treasury Bonds** ("Sell = Smaller") | Directly injects / drains reserves into banking system |
| **Discount Rate** | Lower the discount rate | Raise the discount rate | Lowers / raises cost of borrowing from the Fed |
| **Reserve Requirement ($rr$)** | Decrease reserve ratio | Increase reserve ratio | Frees up excess reserves / locks up lending |
| **Administered Rates (IORB)** | Lower Interest on Reserve Balances | Raise Interest on Reserve Balances | Primary modern tool controlling the policy rate |`
      }
    ],
    workedExamples: [
      {
        title: 'T-Account Balance Sheet Analysis and Money Creation',
        topicRef: 'CED Macro 4.4 Banking and the Expansion of the Money Supply',
        question: 'First National Bank has $100,000 in demand deposits, $10,000 in required reserves, and $15,000 in excess reserves. The reserve requirement is 10%. (a) If Jane deposits $5,000 cash into her checking account, how much does the bank’s required reserves increase? (b) What is the maximum amount the bank can initially lend from Jane’s deposit? (c) What is the maximum possible expansion of the money supply throughout the entire banking system from this initial $5,000 deposit?',
        solutionSteps: [
          'Step 1: Required reserves on new deposit: $5,000 \\times 10\\% = \\$500$.',
          'Step 2: Initial lending by First National: The remainder is excess reserves: $\\$5,000 - \\$500 = \\$4,500$. First National can lend up to **$4,500**.',
          'Step 3: Calculate money multiplier: $M = \\frac{1}{rr} = \\frac{1}{0.10} = 10$.',
          'Step 4: System-wide expansion: Maximum money creation $= \\text{New Excess Reserves} \\times M = \\$4,500 \\times 10 = \\$45,000$.'
        ],
        finalAnswer: '(a) Required reserves increase by $500. (b) Bank can initially lend $4,500. (c) Maximum system-wide money creation = $45,000.',
        apScoringTip: 'Be careful! The cash deposit of $5,000 was already part of M1. The *new money created* is strictly the loans generated ($45,000).'
      }
    ],
    diagrams: [
      {
        id: 'money_market_interest_rates',
        title: 'The Money Market and Investment Demand Curves',
        subtitle: 'Vertical Money Supply ($M_s$) and Downward Sloping Money Demand ($M_d$)',
        type: 'money_market_graph',
        description: 'Side-by-side graph: Money market on left showing vertical MS shifting right, lowering nominal interest rate; right graph showing lower interest rate boosting investment demand.',
        takeaway: 'Central banks control money supply directly; shifting MS changes nominal interest rates and stimulates investment.'
      }
    ],
    commonTraps: [
      'Confusing the money market graph (nominal interest rate, vertical money supply) with the loanable funds graph (real interest rate, upward sloping supply of private savings).',
      'Forgetting that bond prices and interest rates move in OPPOSITE directions.',
      'Thinking a deposit increases the total money supply by the deposit amount. Currency in circulation drops by the exact same amount!'
    ],
    cramSheet: [
      'Money multiplier: $1 / rr$. Maximum creation = $\\text{Excess Reserves} \\times (1 / rr)$.',
      'Fed buys bonds $\\implies$ Bank reserves $\\uparrow$ $\\implies$ Interest rate $\\downarrow$ $\\implies$ $AD \\uparrow$.',
      'Bond prices and interest rates move in OPPOSITE directions.',
      'Money market: Nominal interest rate on vertical axis, vertical $M_s$.',
      'Loanable funds market: Real interest rate on vertical axis, upward-sloping supply of savings.'
    ]
  }
];
