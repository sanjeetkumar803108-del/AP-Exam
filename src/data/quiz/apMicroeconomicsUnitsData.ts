// AP Microeconomics Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–6)
// Complete authentic coverage: 48 Levels, 144 Questions (8 Levels per Unit, 3 Questions per Level).
// Perfectly balanced option distribution across A, B, C, D (36 each).

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_MICROECONOMICS_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Unit 1: Basic Economic Concepts",
    "shortTitle": "Unit 1: Basic Concepts",
    "description": "Scarcity, opportunity cost, Production Possibilities Curve (PPC), comparative advantage, terms of trade, marginal analysis, and utility maximization",
    "examWeight": "12–15% of AP Micro Exam",
    "biome": {
      "name": "Scarcity Summit & Opportunity Frontier",
      "icon": "🏔️",
      "accentColor": "#10B981",
      "secondaryColor": "#059669",
      "groundGradient": "from-emerald-100 via-teal-50 to-green-100",
      "cardBorder": "border-emerald-500",
      "trailColor": "#10b981",
      "nodeRing": "ring-emerald-400/40",
      "skyTint": "from-emerald-50 to-teal-50/30"
    },
    "levels": [
      {
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "micro-u1-l1",
        "topicNumber": "Topic 1.1 & 1.2",
        "name": "Scarcity, Opportunity Cost & Economic Systems",
        "subtitle": "Trade-offs and command vs market allocation",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "micro1-l1-q1",
            "stem": "An entrepreneur quits a corporate job paying $60,000 per year and spends $10,000 of personal savings that was earning 5% interest annually to start a bakery. In the first year, total revenues are $100,000 and explicit operating expenses are $35,000. What are the economic profit and accounting profit of the bakery?",
            "options": [
              "Accounting Profit = $65,000; Economic Profit = $4,500",
              "Accounting Profit = $40,000; Economic Profit = $0",
              "Accounting Profit = $65,000; Economic Profit = -$5,000",
              "Accounting Profit = $100,000; Economic Profit = $65,000"
            ],
            "correctIndex": 0,
            "explanation": "Accounting Profit = Total Revenue - Explicit Costs = $100,000 - $35,000 = $65,000. Implicit costs include forgone salary ($60,000) plus forgone interest ($10,000 * 0.05 = $500), totaling $60,500. Economic Profit = Accounting Profit - Implicit Costs = $65,000 - $60,500 = $4,500.",
            "distractorTip": "Economic profit accounts for both explicit and implicit opportunity costs, whereas accounting profit counts explicit costs only."
          },
          {
            "id": "micro1-l1-q2",
            "stem": "In a pure market economy, how is the fundamental economic question of WHAT goods and services to produce primarily resolved?",
            "options": [
              "By centralized government ministries establishing five-year industrial quota targets.",
              "By consumer sovereignty and price signals that direct profit-seeking firms to produce high-demand goods.",
              "By tradition and customary barter systems passed down through ancestral lines.",
              "By labor unions mandating output ceilings across major production sectors."
            ],
            "correctIndex": 1,
            "explanation": "In a market economic system, consumers express preferences through their spending decisions (dollar votes). The resulting prices and economic profits incentivize private firms to allocate scarce productive factors toward producing those desired goods.",
            "distractorTip": "Command economies rely on central planning committees; market economies rely on decentralized prices and consumer demand."
          },
          {
            "id": "micro1-l1-q3",
            "stem": "Suppose a student decides to spend 2 hours studying for an AP Microeconomics exam instead of working at a part-time job that pays \\$15 per hour or going to a movie that costs \\$12. What is the opportunity cost of the student's study time?",
            "options": [
              "\\$12 (the cost of the movie ticket)",
              "\\$42 (the sum of the forgone wages and the movie ticket cost)",
              "\\$30 (the forgone wage income from not working)",
              "\\$18 (the difference between the wages and the movie cost)"
            ],
            "correctIndex": 2,
            "explanation": "Opportunity cost is strictly the value of the single next-best alternative forgone, NOT the sum of all potential activities. The next best alternative is working 2 hours at \\$15/hr, yielding \\$30 in forgone wages.",
            "distractorTip": "Opportunity cost is NEVER the sum of all alternative possibilities; it is only the value of the highest-valued single alternative sacrificed."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "micro-u1-l2",
        "topicNumber": "Topic 1.3",
        "name": "Production Possibilities Curve (PPC)",
        "subtitle": "Opportunity costs and productive growth",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "micro1-l2-q1",
            "stem": "A nation's Production Possibilities Curve for producing Capital Goods and Consumer Goods is bowed outward (concave to the origin). What economic principle explains this characteristic shape?",
            "options": [
              "Constant opportunity costs across both manufacturing sectors.",
              "The law of demand causing consumers to purchase fewer capital goods at higher prices.",
              "The law of increasing opportunity cost, because economic resources are not perfectly adaptable between producing capital and consumer goods.",
              "Diminishing marginal utility of capital accumulation."
            ],
            "correctIndex": 2,
            "explanation": "A concave (bowed-out) PPC directly illustrates increasing opportunity costs: specialized economic resources (such as fertile farmland or precision robotic tooling) are not equally well-suited to producing both goods. Transferring resources to one sector forces greater sacrifices of the other good.",
            "distractorTip": "Straight-line PPC = Constant opportunity cost; Bowed-out PPC = Increasing opportunity cost due to imperfect resource adaptability."
          },
          {
            "id": "micro1-l2-q2",
            "stem": "Which of the following events will cause a permanent outward shift of an economy's entire Production Possibilities Curve?",
            "options": [
              "A decline in the national unemployment rate from 8% to 4%.",
              "A war that destroys manufacturing factories and transportation networks.",
              "An increase in the domestic price level for all finished consumer products.",
              "A technological breakthrough in automated robotics that increases labor productivity across all industries."
            ],
            "correctIndex": 3,
            "explanation": "An outward shift in the PPC represents long-run economic growth, requiring an increase in the quantity/quality of resources or technological advancement. Re-employing idle workers moves the economy from an inefficient point INSIDE the PPC to a point on the frontier, but does not shift the curve.",
            "distractorTip": "Decreasing unemployment is a movement from inside the PPC to ON the PPC, NOT an outward shift of the PPC frontier!"
          },
          {
            "id": "micro1-l2-q3",
            "stem": "Which of the following points represents productive efficiency on a standard concave Production Possibilities Curve?",
            "options": [
              "Any point located directly on the frontier curve itself.",
              "Any point lying strictly inside the frontier curve.",
              "Only the midpoint of the curve where equal quantities of both goods are made.",
              "Any point located strictly outside the current frontier."
            ],
            "correctIndex": 0,
            "explanation": "Productive efficiency is achieved when an economy produces goods at the lowest possible cost using all available resources and technology, represented by any point situated directly on the PPC curve. Points inside are inefficient (unemployment), and points outside are unattainable without growth.",
            "distractorTip": "Do not confuse productive efficiency (on the curve) with allocative efficiency (the specific point on the curve that society desires most where MB = MC)."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "micro-u1-l3",
        "topicNumber": "Topic 1.4",
        "name": "Comparative Advantage & Terms of Trade",
        "subtitle": "Specialization and mutually beneficial exchange",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro1-l3-q1",
            "stem": "In one hour of labor, Country A can produce 20 loaves of bread or 40 jars of jam. Country B can produce 15 loaves of bread or 15 jars of jam. Which country holds the comparative advantage in producing bread, and what is its opportunity cost?",
            "options": [
              "Country B has comparative advantage in bread, with an opportunity cost of 1 jar of jam per loaf.",
              "Country A has comparative advantage in bread, with an opportunity cost of 0.5 jars of jam per loaf.",
              "Country A has comparative advantage in bread, with an opportunity cost of 2 jars of jam per loaf.",
              "Country B has comparative advantage in jam, with an opportunity cost of 1 loaf of bread per jar."
            ],
            "correctIndex": 0,
            "explanation": "Output Method (OOO = Output: Other goes Over): For Country A, 1 Bread = 40/20 = 2 Jams. For Country B, 1 Bread = 15/15 = 1 Jam. Because Country B incurs a lower opportunity cost to produce bread (1 Jam < 2 Jams), Country B holds the comparative advantage in bread.",
            "distractorTip": "Compare opportunity costs: the producer with the lower opportunity cost holds comparative advantage!"
          },
          {
            "id": "micro1-l3-q2",
            "stem": "Country X's domestic opportunity cost of producing 1 airplane is 50 cars. Country Y's domestic opportunity cost of producing 1 airplane is 80 cars. Which terms of trade will allow both countries to gain from international trade?",
            "options": [
              "1 airplane for 40 cars",
              "1 airplane for 65 cars",
              "1 airplane for 90 cars",
              "1 car for 2 airplanes"
            ],
            "correctIndex": 1,
            "explanation": "Mutually beneficial terms of trade must fall strictly between both trading partners' domestic opportunity costs: 50 Cars < 1 Airplane < 80 Cars. At 65 cars, Country X (the airplane exporter) receives more than its 50-car cost, and Country Y (the importer) pays less than its 80-car domestic cost.",
            "distractorTip": "Terms of trade must lie between the seller's cost and buyer's cost: Seller Cost < Terms of Trade < Buyer Cost."
          },
          {
            "id": "micro1-l3-q3",
            "stem": "Country X can produce either 20 airplanes or 40 solar panels with one unit of resources. Country Y can produce either 10 airplanes or 30 solar panels with one unit of resources. Which of the following terms of trade for 1 airplane would be mutually beneficial to both nations?",
            "options": [
              "1 airplane for 1.5 solar panels",
              "1 airplane for 4.0 solar panels",
              "1 airplane for 0.5 solar panels",
              "1 airplane for 2.5 solar panels"
            ],
            "correctIndex": 3,
            "explanation": "In Country X, 1 airplane costs 40/20 = 2 solar panels. In Country Y, 1 airplane costs 30/10 = 3 solar panels. Country X has the comparative advantage in airplanes. Mutually advantageous terms of trade must fall between the domestic opportunity costs: 2 solar panels < 1 airplane < 3 solar panels. Thus 2.5 solar panels is mutually beneficial.",
            "distractorTip": "Mutually beneficial terms of trade must always lie strictly between the opportunity costs of the two trading partners."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "micro-u1-l4",
        "topicNumber": "Topic 1.5",
        "name": "Cost-Benefit & Marginal Analysis",
        "subtitle": "Optimal decision rule MB >= MC",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro1-l4-q1",
            "stem": "A workshop is deciding how many hours to operate daily. The 4th hour adds $500 in total revenue and $350 in total cost. The 5th hour adds $400 in total revenue and $400 in total cost. The 6th hour adds $300 in total revenue and $450 in total cost. To maximize total profit, how many hours should the workshop operate?",
            "options": [
              "4 hours, because marginal profit is highest ($150).",
              "6 hours, because total revenue is maximized.",
              "5 hours, because marginal benefit equals marginal cost ($MB = MC$).",
              "Zero hours, because average costs are increasing."
            ],
            "correctIndex": 2,
            "explanation": "Profit maximization requires expanding an activity as long as Marginal Benefit exceeds or equals Marginal Cost ($MB >= MC$). At 5 hours, $MB = $400 and $MC = $400, maximizing cumulative net benefit. Operating the 6th hour creates a loss on that hour ($MC = $450 > $MB = $300), reducing total profit.",
            "distractorTip": "Optimize where MB = MC, NOT where marginal profit is maximized! Stopping where MB > MC leaves cumulative profit on the table."
          },
          {
            "id": "micro1-l4-q2",
            "stem": "A biotech firm has spent $5 million developing a medical diagnostic tool. A regulatory delay occurs, and finishing the tool requires an additional $1 million. The firm now projects the tool will generate $1.6 million in total sales. How should the firm treat the initial $5 million expenditure?",
            "options": [
              "Abandon the project, because total costs ($6 million) exceed projected revenue ($1.6 million) by $4.4 million.",
              "Liquidate corporate patents to cover the unamortized overhead.",
              "Count the $5 million as an implicit cost that offsets future corporate dividend taxes.",
              "Treat the $5 million as a sunk cost, and complete the project because prospective marginal revenue ($1.6 million) exceeds marginal cost ($1.0 million)."
            ],
            "correctIndex": 3,
            "explanation": "The $5 million already spent is a sunk cost: it cannot be recovered regardless of future decisions. Sunk costs must be ignored in forward-looking decision analysis. Comparing prospective marginal revenue ($1.6M) with prospective marginal cost ($1.0M) yields a net gain of $600,000, minimizing overall firm loss.",
            "distractorTip": "Sunk cost rule: Sunk costs are in the past and unrecoverable; ignore them in marginal decisions!"
          },
          {
            "id": "micro1-l4-q3",
            "stem": "According to marginal analysis, a consumer will continue to consume additional units of a good as long as which condition holds true?",
            "options": [
              "Total Benefit exceeds Total Cost.",
              "Marginal Benefit is strictly greater than or equal to Marginal Cost ($MB \\ge MC$).",
              "Marginal Cost is decreasing with each additional unit consumed.",
              "Average Benefit equals Average Cost."
            ],
            "correctIndex": 1,
            "explanation": "The rational rule for decision makers is to continue expanding an activity up to the quantity where Marginal Benefit equals Marginal Cost ($MB = MC$). As long as $MB \\ge MC$, the net gain (Total Benefit - Total Cost) increases.",
            "distractorTip": "Common AP trap: Decisions are made at the margin where $MB \\ge MC$, NOT by comparing whether total benefits exceed total costs."
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "micro-u1-l5",
        "topicNumber": "Topic 1.6",
        "name": "Marginal Utility & Consumer Choice",
        "subtitle": "Utility maximization rule",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro1-l5-q1",
            "stem": "A student buys Tacos ($P_T = $2) and Smoothies ($P_S = $4). At her current bundle, the marginal utility of the last taco is 10 utils and the marginal utility of the last smoothie is 12 utils. To maximize total utility subject to her budget constraint, what should the student do?",
            "options": [
              "Consume more Tacos and fewer Smoothies, because $\\frac{MU_T}{P_T} > \\frac{MU_S}{P_S}$.",
              "Consume more Smoothies and fewer Tacos, because total utility of smoothies is higher.",
              "Keep consumption unchanged, because both goods deliver positive marginal utility.",
              "Consume only Smoothies, because 12 utils is greater than 10 utils."
            ],
            "correctIndex": 0,
            "explanation": "Calculate marginal utility per dollar: For Tacos: MU_T / P_T = 10 / 2 = 5 utils/$. For Smoothies: MU_S / P_S = 12 / 4 = 3 utils/$. Because tacos deliver 5 utils per dollar compared to 3 for smoothies, shifting spending toward tacos increases total utility until MU_T/P_T = MU_S/P_S.",
            "distractorTip": "Utility Maximization Rule: Compare MU/P (marginal utility per dollar), never raw marginal utility!"
          },
          {
            "id": "micro1-l5-q2",
            "stem": "What economic law provides the primary theoretical explanation for why an individual's demand curve for a good slopes downward?",
            "options": [
              "The law of increasing opportunity cost in consumer production.",
              "The law of diminishing marginal utility, which dictates that consumers are only willing to purchase additional units at progressively lower prices.",
              "The law of comparative advantage in household labor allocation.",
              "The law of supply reflecting upward-sloping marginal cost curves."
            ],
            "correctIndex": 1,
            "explanation": "The law of diminishing marginal utility states that as a consumer consumes successive units of a product, the extra utility (satisfaction) derived from each additional unit decreases. Because marginal utility falls, consumers are only willing to buy more units if the price falls.",
            "distractorTip": "Diminishing marginal utility explains downward-sloping demand; diminishing marginal returns explains upward-sloping marginal cost!"
          },
          {
            "id": "micro1-l5-q3",
            "stem": "A consumer allocates a weekly budget between good X (price = \\$4) and good Y (price = \\$2). At the current basket, $MU_X = 16$ utils and $MU_Y = 12$ utils. To maximize total utility within the budget constraint, how should the consumer adjust consumption?",
            "options": [
              "Consume fewer units of both goods to reduce total expenditure.",
              "Maintain the current consumption basket because total utility is maximized.",
              "Purchase fewer units of good X and more units of good Y.",
              "Purchase more units of good X and fewer units of good Y."
            ],
            "correctIndex": 2,
            "explanation": "Compare marginal utility per dollar: $MU_X / P_X = 16 / 4 = 4$ utils per dollar. $MU_Y / P_Y = 12 / 2 = 6$ utils per dollar. Because good Y provides more utility per dollar spent ($6 > 4$), the consumer should reallocate spending toward good Y and away from good X until $MU_X / P_X = MU_Y / P_Y$.",
            "distractorTip": "Always compare marginal utility per dollar ($MU/P$), not raw marginal utility ($MU$) alone."
          }
        ]
      },
      {
        "id": 106,
        "unitIndex": 1,
        "levelNumber": 6,
        "uniqueKey": "micro-u1-l6",
        "topicNumber": "Topic 1.3",
        "name": "PPC Shifts & Long-Run Economic Growth",
        "subtitle": "Technological innovation and capital vs consumer trade-offs",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro1-l6-q1",
            "stem": "An economy chooses between producing capital goods (factories, robotics) and consumer goods (clothing, snacks). If Country Alpha allocates 70% of its resources to capital goods while Country Beta allocates 10% to capital goods, what will happen to their respective PPCs over the next two decades?",
            "options": [
              "Country Beta's PPC will shift outward significantly faster because consumer spending drives short-run aggregate demand.",
              "Both countries' PPCs will shift inward due to resource depletion.",
              "Country Alpha's PPC will shift outward much more substantially because investing in capital goods expands future productive capacity.",
              "Neither PPC will change because technology is globally constant."
            ],
            "correctIndex": 2,
            "explanation": "Capital goods are productive equipment that augment future output. Sacrificing current consumption to invest heavily in capital goods accelerates economic growth, shifting the nation's PPC outward more rapidly over time.",
            "distractorTip": "Consumer goods provide immediate utility but do not build future production capacity. Capital goods drive long-run PPC expansion."
          },
          {
            "id": "micro1-l6-q2",
            "stem": "A breakthrough invention doubles agricultural crop yields while leaving industrial manufacturing technology unchanged. How is this illustrated on a PPC with Agricultural Goods on the vertical axis and Manufactured Goods on the horizontal axis?",
            "options": [
              "A parallel outward shift of the entire curve.",
              "A parallel inward shift of the entire curve.",
              "An outward rotation along the horizontal axis only.",
              "An asymmetric outward rotation anchored at the same horizontal intercept for manufactured goods but extending further up the vertical axis for agricultural goods."
            ],
            "correctIndex": 3,
            "explanation": "When technological advancement is sector-specific, the maximum potential output of only that sector increases. The curve pivots or rotates outward along the agricultural axis while the manufacturing intercept remains unchanged.",
            "distractorTip": "Sector-specific technology causes a rotation/pivot; economy-wide increases in labor or capital shift the entire curve outward."
          },
          {
            "id": "micro1-l6-q3",
            "stem": "Which of the following will shift a nation's Production Possibilities Curve inward toward the origin?",
            "options": [
              "A severe natural disaster that permanently destroys physical capital infrastructure and factories.",
              "An increase in the domestic nominal money supply.",
              "A temporary increase in the rate of cyclical unemployment.",
              "An increase in consumer demand for renewable energy technologies."
            ],
            "correctIndex": 0,
            "explanation": "An inward shift of the PPC represents a reduction in an economy's productive capacity, caused by a loss of physical capital, destruction of natural resources, or shrinking labor force. Unemployment merely moves the operating point inside an unchanged curve.",
            "distractorTip": "Unemployment does NOT shift the PPC inward; it moves the economy to an inefficient point INSIDE the PPC."
          }
        ]
      },
      {
        "id": 107,
        "unitIndex": 1,
        "levelNumber": 7,
        "uniqueKey": "micro-u1-l7",
        "topicNumber": "Topic 1.6 & 1.7",
        "name": "Consumer & Producer Surplus in Competitive Markets",
        "subtitle": "Welfare economics and total economic surplus",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro1-l7-q1",
            "stem": "A consumer is willing to pay \\$45 for a concert ticket. The market equilibrium price is \\$30. If the consumer purchases the ticket at equilibrium, what is the consumer surplus generated, and what does it represent?",
            "options": [
              "\\$15; the net economic benefit received above the price paid.",
              "\\$45; the total utility derived from the concert.",
              "\\$75; the sum of willingness to pay and market price.",
              "\\$0; because competitive markets eliminate all surplus."
            ],
            "correctIndex": 0,
            "explanation": "Consumer Surplus (CS) = Maximum Willingness to Pay - Actual Price Paid = \\$45 - \\$30 = \\$15. It quantifies the net gain or monetary value of satisfaction the buyer enjoys beyond what they paid.",
            "distractorTip": "Consumer surplus is the area below the demand curve and above the market price."
          },
          {
            "id": "micro1-l7-q2",
            "stem": "In an unregulated, perfectly competitive market at equilibrium with no externalities, what can be concluded about total economic surplus (Consumer Surplus + Producer Surplus)?",
            "options": [
              "Total surplus is zero because consumer surplus exactly cancels producer surplus.",
              "Total economic surplus is maximized, achieving allocative efficiency where Marginal Benefit equals Marginal Cost ($MB = MC$).",
              "Producer surplus is minimized to protect buyers from exploitation.",
              "Deadweight loss reaches its maximum possible value."
            ],
            "correctIndex": 1,
            "explanation": "In competitive market equilibrium without externalities, every unit where Marginal Social Benefit exceeds Marginal Social Cost is produced and consumed. Total surplus is maximized and deadweight loss is zero, achieving allocative efficiency.",
            "distractorTip": "Any output level other than equilibrium reduces total surplus and creates deadweight loss."
          },
          {
            "id": "micro1-l7-q3",
            "stem": "In a competitive market in equilibrium, what does total economic surplus represent graphically?",
            "options": [
              "The entire rectangular area under the demand curve from quantity 0 to equilibrium quantity.",
              "The area bounded between the equilibrium price line and the supply curve.",
              "The rectangle defined by multiplying equilibrium price by equilibrium quantity.",
              "The total triangular area between the demand curve and supply curve up to the equilibrium quantity."
            ],
            "correctIndex": 3,
            "explanation": "Total economic surplus is the sum of consumer surplus (area below demand and above price) and producer surplus (area above supply and below price). Together, they form the area between the demand and supply curves up to the market-clearing equilibrium quantity.",
            "distractorTip": "Total surplus is consumer surplus plus producer surplus; at competitive equilibrium, deadweight loss is zero."
          }
        ]
      },
      {
        "id": 108,
        "unitIndex": 1,
        "levelNumber": 8,
        "uniqueKey": "micro-u1-l8",
        "topicNumber": "Unit 1 Boss",
        "name": "Apex Micro Foundations Crucible",
        "subtitle": "Comprehensive mastery of PPC, trade, and utility optimization",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "micro1-l8-q1",
            "stem": "A country operating on its PPC produces at a point where the marginal benefit of clean energy exceeds the marginal cost of clean energy ($MB > MC$). Is this economy allocatively and productively efficient?",
            "options": [
              "It is both allocatively and productively efficient because it is on the PPC.",
              "It is neither allocatively nor productively efficient.",
              "It is productively efficient (operating on the frontier) but allocatively inefficient (producing the wrong combination where $MB \\neq MC$).",
              "It is allocatively efficient but productively inefficient."
            ],
            "correctIndex": 2,
            "explanation": "Productive efficiency is achieved whenever an economy produces on its PPC (no wasted resources). Allocative efficiency requires producing the specific combination most desired by society, which occurs only where $MB = MC$. If $MB > MC$, society desires more clean energy, so the current mix is allocatively inefficient.",
            "distractorTip": "Any point on the PPC is productively efficient, but only ONE point on the PPC is allocatively efficient."
          },
          {
            "id": "micro1-l8-q2",
            "stem": "If a worker earns \\$20 per hour and spends 1 hour cleaning the house, what is the opportunity cost if the worker would have otherwise worked an overtime hour paid at time-and-a-half (\\$30/hr)?",
            "options": [
              "\\$0, because cleaning one's own house does not involve money.",
              "\\$10, the difference between standard and overtime pay.",
              "\\$20, the base hourly wage.",
              "\\$30, the true next-best foregone alternative earnings."
            ],
            "correctIndex": 3,
            "explanation": "Opportunity cost is defined as the value of the single most desirable foregone alternative. Here, the worker chose cleaning over working 1 hour of overtime worth \\$30. The opportunity cost of cleaning is \\$30.",
            "distractorTip": "Opportunity cost is not an average; it is strictly the value of the single next best alternative."
          },
          {
            "id": "micro1-l8-q3",
            "stem": "In a two-good economy producing Pizza and Robots, the opportunity cost of producing each additional robot increases from 1 pizza to 4 pizzas. What does this demonstrate about resource specialization?",
            "options": [
              "Robots are inferior goods while pizzas are normal goods.",
              "Resources are specialized, so reallocating pizza chefs to robotic engineering yields diminishing returns and higher opportunity cost.",
              "The economy is suffering from massive demand-pull inflation.",
              "The production possibilities curve is a linear downward-sloping line."
            ],
            "correctIndex": 1,
            "explanation": "Increasing opportunity costs occur precisely because factors of production are not perfectly adaptable to alternate uses. As more robots are assembled, resources increasingly suited to baking pizza must be diverted, creating larger sacrifices per robot produced.",
            "distractorTip": "Imperfect resource substitutability is the direct microeconomic cause of concave, bowed-out production possibility frontiers."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Unit 2: Supply and Demand",
    "shortTitle": "Unit 2: Supply & Demand",
    "description": "Equilibrium, elasticity (price, cross-price, income), consumer/producer surplus, price controls, excise taxes, subsidies, and international trade/tariffs",
    "examWeight": "20–25% of AP Micro Exam",
    "biome": {
      "name": "Equilibrium Agora & Elasticity Basin",
      "icon": "⚖️",
      "accentColor": "#14B8A6",
      "secondaryColor": "#0D9488",
      "groundGradient": "from-teal-100 via-emerald-50 to-cyan-100",
      "cardBorder": "border-teal-500",
      "trailColor": "#14b8a6",
      "nodeRing": "ring-teal-400/40",
      "skyTint": "from-teal-50 to-cyan-50/30"
    },
    "levels": [
      {
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "micro-u2-l1",
        "topicNumber": "Topic 2.1, 2.2 & 2.7",
        "name": "Demand, Supply & Double Shifts",
        "subtitle": "Market equilibrium shifts and indeterminate outcomes",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "micro2-l1-q1",
            "stem": "Which of the following scenarios will cause a movement along the demand curve for coffee, rather than a shift of the demand curve?",
            "options": [
              "A scientific study proving coffee enhances cognitive function.",
              "A decrease in the price of tea, a close substitute.",
              "A severe freeze in coffee plantations that destroys crop yields and raises the retail price of brewed coffee.",
              "An increase in average household disposable income, assuming coffee is a normal good."
            ],
            "correctIndex": 2,
            "explanation": "A change in the good's own price causes a MOVEMENT ALONG the demand curve (change in quantity demanded). The freeze shifts the SUPPLY curve left, raising equilibrium price and moving buyers along their demand curve. The other choices are non-price determinants that shift the demand curve.",
            "distractorTip": "Own-price change = Movement along curve (Change in Quantity Demanded); Non-price determinant = Shift of curve (Change in Demand)."
          },
          {
            "id": "micro2-l1-q2",
            "stem": "In the market for electric scooters, battery manufacturing technology improves (lowering costs), while consumer preferences shift away from scooters due to safety regulations. What is the definite effect on market equilibrium price and quantity?",
            "options": [
              "Price is indeterminate, and quantity increases.",
              "Price decreases, and quantity increases.",
              "Price increases, and quantity is indeterminate.",
              "Price decreases, and quantity is indeterminate."
            ],
            "correctIndex": 3,
            "explanation": "Improved battery technology shifts Supply right (S ->: P down, Q up). Weaker consumer preference shifts Demand left (D <-: P down, Q down). Both shifts depress equilibrium price, so Price definitely DECREASES. However, Supply pushes Quantity up while Demand pulls Quantity down, making Quantity INDETERMINATE.",
            "distractorTip": "Double Shift Rule: When both curves shift simultaneously, one variable (P or Q) is definite, and the other is always indeterminate!"
          },
          {
            "id": "micro2-l1-q3",
            "stem": "If consumer income increases for a normal good at the same time that technological innovation lowers manufacturing costs, what will happen to equilibrium price and equilibrium quantity?",
            "options": [
              "Equilibrium price will definitely increase; quantity is indeterminate.",
              "Equilibrium price will definitely decrease; quantity will increase.",
              "Equilibrium quantity will definitely increase; equilibrium price change is indeterminate.",
              "Equilibrium quantity will definitely decrease; equilibrium price will decrease."
            ],
            "correctIndex": 2,
            "explanation": "An increase in income increases demand (shifts right). Technological progress increases supply (shifts right). When both curves shift right, equilibrium quantity must unambiguously increase. However, the effect on equilibrium price depends on the relative magnitudes of the shifts, so price is indeterminate.",
            "distractorTip": "In double-shift problems, one variable (price or quantity) will always be certain and the other will always be indeterminate."
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "micro-u2-l2",
        "topicNumber": "Topic 2.3",
        "name": "Price Elasticity of Demand & Total Revenue",
        "subtitle": "PED formula and total revenue test",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro2-l2-q1",
            "stem": "When the price of streaming subscriptions decreases by 10%, the quantity of subscriptions demanded increases by 25%. What is the price elasticity of demand (PED), and how does this price cut affect total revenue?",
            "options": [
              "PED = 2.5 (elastic); Total Revenue increases.",
              "PED = 0.4 (inelastic); Total Revenue decreases.",
              "PED = 2.5 (inelastic); Total Revenue remains unchanged.",
              "PED = -0.4 (elastic); Total Revenue increases."
            ],
            "correctIndex": 0,
            "explanation": "PED = |% Change in Qd / % Change in P| = |25% / -10%| = 2.5. Because PED > 1, demand is elastic. Under the Total Revenue Test, when demand is elastic, price and total revenue move in opposite directions: cutting price generates a proportionally larger increase in quantity, increasing total revenue.",
            "distractorTip": "Total Revenue Test: Elastic demand = P and TR move in opposite directions; Inelastic demand = P and TR move in the same direction."
          },
          {
            "id": "micro2-l2-q2",
            "stem": "A pharmaceutical manufacturer raises the price of a patented life-saving medication by 15% and observes that its total sales revenue increases by 10%. What does this demonstrate about the price elasticity of demand for the drug?",
            "options": [
              "Demand is perfectly elastic (PED = infinity).",
              "Demand is relatively price inelastic (PED < 1).",
              "Demand is relatively price elastic (PED > 1).",
              "Demand is unitary elastic (PED = 1)."
            ],
            "correctIndex": 1,
            "explanation": "When an increase in price causes total revenue to rise, demand is relatively price inelastic (PED < 1). For goods with few substitutes, consumers cannot easily reduce purchases, so the percentage decrease in quantity demanded is smaller than the percentage price increase.",
            "distractorTip": "If Price and Total Revenue move in the SAME direction, demand is INELASTIC!"
          },
          {
            "id": "micro2-l2-q3",
            "stem": "A theater lowers ticket prices by 10%, and as a result, total ticket sales revenue increases by 15%. Over this price range, how should demand be classified?",
            "options": [
              "Price Elastic ($|E_d| > 1$)",
              "Price Inelastic ($|E_d| < 1$)",
              "Unit Elastic ($|E_d| = 1$)",
              "Perfectively Inelastic ($|E_d| = 0$)"
            ],
            "correctIndex": 0,
            "explanation": "By the Total Revenue Test, if price and total revenue move in opposite directions (price down, revenue up), demand is price elastic ($|E_d| > 1$). Consumers respond with a proportionally larger percentage increase in quantity demanded.",
            "distractorTip": "Total Revenue Test: When $P$ and $TR$ move in opposite directions, demand is elastic. When they move in the same direction, demand is inelastic."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "micro-u2-l3",
        "topicNumber": "Topic 2.5",
        "name": "Cross-Price & Income Elasticities",
        "subtitle": "Substitutes, complements, normal & inferior goods",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro2-l3-q1",
            "stem": "The cross-price elasticity of demand between Good X and Good Y is calculated as E_XY = -1.8. What is the economic relationship between these two goods?",
            "options": [
              "Good X and Good Y are substitute goods.",
              "Good X and Good Y are luxury goods.",
              "Good X and Good Y are complementary goods.",
              "Good X is an inferior good and Good Y is a normal good."
            ],
            "correctIndex": 2,
            "explanation": "Cross-Price Elasticity (E_XY = % Change in Qd_X / % Change in P_Y) measures responsiveness between goods. A negative coefficient (E_XY < 0) means an increase in the price of Good Y causes demand for Good X to fall, which characterizes complementary goods (e.g. video game consoles and games).",
            "distractorTip": "Cross-Price Elasticity: Positive (+) = Substitutes; Negative (-) = Complements; Zero (0) = Unrelated goods."
          },
          {
            "id": "micro2-l3-q2",
            "stem": "An economic survey reveals that when household incomes fall by 6% during an economic downturn, the quantity demanded of generic store-brand canned soup increases by 12%. What are the income elasticity of demand (E_I) and the classification of this good?",
            "options": [
              "E_I = +2.0; normal luxury good",
              "E_I = +0.5; normal necessity good",
              "E_I = -0.5; substitute good",
              "E_I = -2.0; inferior good"
            ],
            "correctIndex": 3,
            "explanation": "Income Elasticity E_I = % Change in Qd / % Change in Income = 12% / (-6%) = -2.0. A negative income elasticity (E_I < 0) indicates an inverse relationship between income and demand: as incomes drop, consumers buy more generic soup, classifying it as an INFERIOR good.",
            "distractorTip": "Income Elasticity: Positive (+) = Normal good (Luxury if > 1, Necessity if 0 to 1); Negative (-) = Inferior good."
          },
          {
            "id": "micro2-l3-q3",
            "stem": "If the cross-price elasticity of demand between good A and good B is $+1.8$, what relationship exists between these two goods?",
            "options": [
              "They are complementary goods.",
              "They are inferior goods.",
              "They are Giffen goods.",
              "They are substitute goods."
            ],
            "correctIndex": 3,
            "explanation": "A positive cross-price elasticity ($E_{AB} > 0$) indicates that an increase in the price of good B causes an increase in the quantity demanded of good A. Therefore, goods A and B are substitutes.",
            "distractorTip": "Cross-price elasticity: Positive = Substitutes; Negative = Complements. Income elasticity: Positive = Normal; Negative = Inferior."
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "micro-u2-l4",
        "topicNumber": "Topic 2.8",
        "name": "Price Controls: Ceilings & Floors",
        "subtitle": "Shortages, surpluses, and deadweight loss",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro2-l4-q1",
            "stem": "The free market equilibrium rent for apartments is $1,500. The municipal government introduces a binding rent control law setting maximum rent at $1,000. Which of the following is an inevitable consequence of this policy?",
            "options": [
              "A persistent housing shortage (quantity demanded exceeds quantity supplied) and deadweight loss.",
              "A surplus of apartments resulting in landlord vacancies.",
              "An outward shift of the apartment supply curve.",
              "An increase in producer surplus enjoyed by property owners."
            ],
            "correctIndex": 0,
            "explanation": "A price ceiling is binding when set BELOW equilibrium price. At $1,000, quantity demanded exceeds quantity supplied (Qd > Qs), causing an unresolved shortage. Because transactions are reduced below the competitive equilibrium volume, deadweight loss is created.",
            "distractorTip": "A price ceiling is binding only BELOW equilibrium, causing a shortage (Qd > Qs)."
          },
          {
            "id": "micro2-l4-q2",
            "stem": "The equilibrium wage for entry-level retail staff is $11 per hour. The government enacts a binding minimum wage of $16 per hour. What market outcome will occur?",
            "options": [
              "A shortage of workers, where retailers cannot fill open job postings.",
              "A surplus of labor (unemployment), where quantity of labor supplied exceeds quantity demanded (Qs > Qd).",
              "An increase in total retail employment and zero deadweight loss.",
              "A downward shift in the market supply curve of labor."
            ],
            "correctIndex": 1,
            "explanation": "A minimum wage is a price floor. To be binding, a price floor must be set ABOVE the equilibrium price. At $16/hr, more individuals want to work (Qs increases) while stores hire fewer employees (Qd decreases), resulting in a labor surplus (unemployment) and deadweight loss.",
            "distractorTip": "A price floor is binding only ABOVE equilibrium, causing a surplus (Qs > Qd)."
          },
          {
            "id": "micro2-l4-q3",
            "stem": "To be binding and create a persistent market shortage, where must a government price ceiling be established?",
            "options": [
              "At any price level above the market equilibrium price.",
              "Strictly below the market-clearing equilibrium price.",
              "Exactly equal to the competitive equilibrium price.",
              "At the minimum average total cost of the lowest-cost producer."
            ],
            "correctIndex": 1,
            "explanation": "A price ceiling is a legal maximum price. It is only binding (effective) if set BELOW the market equilibrium price, which prevents price from rising to equilibrium, causing quantity demanded to exceed quantity supplied ($Q_d > Q_s$), generating a shortage.",
            "distractorTip": "A price ceiling is binding BELOW equilibrium; a price floor is binding ABOVE equilibrium."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "micro-u2-l5",
        "topicNumber": "Topic 2.8",
        "name": "Per-Unit Taxes, Subsidies & Tax Incidence",
        "subtitle": "Elasticity and deadweight loss triangles",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro2-l5-q1",
            "stem": "The government levies a $3 per-unit excise tax on suppliers of gasoline. Demand for gasoline is highly price inelastic (PED = 0.2) while supply is price elastic (PES = 1.5). Who bears the majority of the economic burden of the tax?",
            "options": [
              "Gasoline suppliers, because the tax is legally collected from them.",
              "Gasoline suppliers and consumers share the tax burden equally (50/50).",
              "Gasoline consumers, because demand is significantly more inelastic than supply.",
              "The government, through deadweight loss subsidies."
            ],
            "correctIndex": 2,
            "explanation": "Tax incidence depends on the relative price elasticities of supply and demand, not legal assignment. The market side with fewer substitution options (more inelastic) bears the heavier burden. Because PED (0.2) is much less than PES (1.5), consumers absorb most of the tax.",
            "distractorTip": "Inelasticity pays the tax! The more inelastic party cannot easily substitute away, so they bear the tax burden."
          },
          {
            "id": "micro2-l5-q2",
            "stem": "Under which of the following market conditions will the imposition of an excise tax generate the LARGEST deadweight loss?",
            "options": [
              "When both demand and supply are perfectly inelastic.",
              "When demand is perfectly inelastic and supply is unit elastic.",
              "When the tax rate is zero.",
              "When both demand and supply are highly price elastic."
            ],
            "correctIndex": 3,
            "explanation": "Deadweight loss equals 0.5 * Tax * Delta_Q. When both demand and supply are price elastic, buyers and sellers are highly sensitive to price changes. Imposing a tax triggers a large contraction in quantity exchanged (Delta_Q is large), maximizing deadweight loss.",
            "distractorTip": "Elastic curves produce LARGE deadweight loss; perfectly inelastic curves produce ZERO deadweight loss!"
          },
          {
            "id": "micro2-l5-q3",
            "stem": "When the government levies an excise tax on a good whose demand is highly price-inelastic while supply is relatively price-elastic, who bears the majority of the tax burden?",
            "options": [
              "Producers and consumers share the tax burden equally regardless of elasticities.",
              "The government treasury absorbs the majority through tax collection costs.",
              "Consumers bear the larger share of the economic tax burden.",
              "Producers bear the larger share because they must write the tax check to the state."
            ],
            "correctIndex": 2,
            "explanation": "Tax incidence falls predominantly on the more inelastic market participant because they lack flexible alternatives to avoid the price change. When demand is more inelastic than supply, consumers cannot easily substitute away, so sellers pass along most of the tax in higher prices.",
            "distractorTip": "Statutory incidence (who pays the check) does not matter; economic incidence is determined strictly by relative price elasticities."
          }
        ]
      },
      {
        "id": 206,
        "unitIndex": 2,
        "levelNumber": 6,
        "uniqueKey": "micro-u2-l6",
        "topicNumber": "Topic 2.9",
        "name": "International Trade, World Price & Tariffs",
        "subtitle": "Gains from trade, tariffs, and quota deadweight loss",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro2-l6-q1",
            "stem": "In a closed domestic market for solar panels, the equilibrium price is $300. When the country opens to free international trade, the world price is $180. What happens to domestic consumer surplus, producer surplus, and total economic surplus?",
            "options": [
              "Consumer surplus increases, producer surplus decreases, and total surplus increases due to net gains from trade.",
              "Consumer surplus decreases, producer surplus increases, and total surplus decreases.",
              "Both consumer surplus and producer surplus increase simultaneously.",
              "Consumer surplus increases, but total surplus decreases because domestic producers lose market share."
            ],
            "correctIndex": 0,
            "explanation": "Because world price ($180) is below closed equilibrium ($300), the nation becomes an importer. Domestic consumers gain substantial surplus from cheaper prices and greater volume. Although domestic producers lose surplus, consumer gains exceed producer losses, raising total surplus.",
            "distractorTip": "Opening to trade at a lower world price: Consumers gain, domestic producers lose, but TOTAL national surplus increases!"
          },
          {
            "id": "micro2-l6-q2",
            "stem": "If an importing nation levies a per-unit tariff on foreign steel imports, what are the specific welfare consequences on the domestic economy?",
            "options": [
              "Domestic steel price falls, imports increase, and government revenue falls.",
              "Domestic steel price rises, domestic production rises, imports decline, and two deadweight loss triangles are created (production inefficiency and consumer underconsumption).",
              "Domestic consumer surplus increases while foreign producers absorb the deadweight loss.",
              "Total domestic economic surplus increases because tariff revenues exceed consumer losses."
            ],
            "correctIndex": 1,
            "explanation": "A tariff raises domestic price above the world price. This protects higher-cost domestic producers (production inefficiency deadweight loss) and forces consumers to purchase less (consumption distortion deadweight loss). Total domestic surplus declines by these two deadweight loss triangles.",
            "distractorTip": "Tariffs create TWO deadweight loss triangles: one from inefficient domestic production, and one from lost consumer surplus."
          },
          {
            "id": "micro2-l6-q3",
            "stem": "A small open economy with domestic equilibrium price of \\$80 opens to international free trade where the world price is \\$50. What is the immediate effect on domestic consumers, domestic producers, and total domestic welfare?",
            "options": [
              "Consumers gain, domestic producers lose, and total domestic economic surplus increases.",
              "Consumers lose, domestic producers gain, and deadweight loss is created.",
              "Both domestic consumers and producers lose due to foreign competition.",
              "Domestic producers gain higher profits while imports drop to zero."
            ],
            "correctIndex": 0,
            "explanation": "Because the world price (\\$50) is below the domestic equilibrium price (\\$80), the nation imports the good. Domestic consumers purchase a greater quantity at the lower price, dramatically expanding consumer surplus. Domestic producers receive less, but the consumer gain exceeds the producer loss, increasing total economic surplus.",
            "distractorTip": "Free trade that lowers domestic price increases consumer surplus by more than producer surplus decreases, producing a net welfare gain."
          }
        ]
      },
      {
        "id": 207,
        "unitIndex": 2,
        "levelNumber": 7,
        "uniqueKey": "micro-u2-l7",
        "topicNumber": "Topic 2.4",
        "name": "Price Elasticity of Supply & Time Horizons",
        "subtitle": "PES determinants and market adjustment periods",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro2-l7-q1",
            "stem": "Why is the price elasticity of supply ($PES$) for commercial real estate or beachfront hotels virtually zero in the immediate market period, but significantly positive in the long run?",
            "options": [
              "Because consumer preferences for hotels disappear during the winter.",
              "Because construction materials become infinitely abundant during economic booms.",
              "Because in the immediate market period physical capacity is fixed and cannot be expanded regardless of price, whereas in the long run new hotels can be constructed and capital expanded.",
              "Because property taxes are illegal in the immediate market period."
            ],
            "correctIndex": 2,
            "explanation": "Price elasticity of supply measures responsiveness of quantity supplied to price changes. In the immediate market period, supply is perfectly inelastic (vertical) because output is fixed. Over the long run, firms have time to build new facilities, purchase equipment, and enter the market, making supply substantially more elastic.",
            "distractorTip": "Time is the primary determinant of PES: Supply is more inelastic in the short run and more elastic in the long run."
          },
          {
            "id": "micro2-l7-q2",
            "stem": "A 10% increase in the market price of organic avocados induces agricultural growers to expand harvest shipments by 18% over a two-year production cycle. What is the price elasticity of supply ($PES$), and how is supply characterized?",
            "options": [
              "$PES = 0.55$; supply is price inelastic.",
              "$PES = -1.8$; supply is inferior.",
              "$PES = 1.0$; supply is unit elastic.",
              "$PES = 1.8$; supply is price elastic."
            ],
            "correctIndex": 3,
            "explanation": "$PES = \\%\\Delta Q_s / \\%\\Delta P = 18\\% / 10\\% = 1.8$. Because $PES > 1$, quantity supplied responds more than proportionally to the price increase, classifying supply as price elastic.",
            "distractorTip": "Price Elasticity of Supply formula: % Change in Qs / % Change in Price. PES > 1 = Elastic; PES < 1 = Inelastic."
          },
          {
            "id": "micro2-l7-q3",
            "stem": "Why is the price elasticity of supply for agricultural products typically much more inelastic in the immediate short run compared to the long run?",
            "options": [
              "Consumers are unwilling to buy farm goods during harvest seasons.",
              "Agricultural prices are legally capped by federal commodities boards.",
              "Farmers are unable to rapidly alter crop acreage or harvest yields in response to sudden price changes.",
              "Supply elasticity is mathematically invariant across time horizons."
            ],
            "correctIndex": 2,
            "explanation": "In the immediate market period or short run, agricultural inputs (planted acreage, growing seasons, weather cycles) are fixed, preventing farmers from immediately increasing output when price rises. In the long run, farmers can purchase more land, machinery, and fertilizer, making supply much more elastic.",
            "distractorTip": "Time is the primary determinant of supply elasticity: the longer the adjustment window, the more elastic supply becomes."
          }
        ]
      },
      {
        "id": 208,
        "unitIndex": 2,
        "levelNumber": 8,
        "uniqueKey": "micro-u2-l8",
        "topicNumber": "Unit 2 Boss",
        "name": "Apex Supply, Demand & Welfare Crucible",
        "subtitle": "Mastery of equilibrium, elasticity, controls, and trade",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "micro2-l8-q1",
            "stem": "If a market is characterized by a downward-sloping demand curve and an upward-sloping supply curve, what is the effect of replacing an import quota with an equivalent tariff that generates the exact same volume of imports?",
            "options": [
              "The tariff generates government tax revenue, whereas the quota transfers that revenue to foreign license-holders or importers as quota rent (unless the quota licenses are auctioned).",
              "The tariff causes higher deadweight loss than the equivalent quota.",
              "The tariff lowers the domestic price while the quota raises the domestic price.",
              "The quota completely eliminates domestic consumer surplus while the tariff protects it."
            ],
            "correctIndex": 0,
            "explanation": "Both an equivalent tariff and quota raise domestic price by the same amount and create the same two deadweight loss triangles. However, under a tariff, the revenue rectangle goes directly to the domestic government. Under an unauctioned quota, this revenue (quota rent) is captured by foreign exporters or quota holders.",
            "distractorTip": "Tariff vs. Quota: Price and DWL effects are identical, but tariff revenue goes to the domestic government while quota rent goes to license holders!"
          },
          {
            "id": "micro2-l8-q2",
            "stem": "A city imposes a \\$2 per-ride tax on ride-share passengers. If demand for ride-shares is perfectly inelastic, who pays the tax, and what is the deadweight loss generated?",
            "options": [
              "Drivers pay the entire tax, and deadweight loss is maximized.",
              "Passengers pay the entire \\$2 tax (price rises by exactly \\$2), quantity exchanged remains unchanged, and deadweight loss is zero.",
              "The tax is split evenly (\\$1 each), and deadweight loss is 50%.",
              "Ride-share platforms absorb the tax out of venture capital subsidies."
            ],
            "correctIndex": 1,
            "explanation": "When demand is perfectly inelastic (vertical demand curve), consumers have no substitutes and must buy the exact same quantity regardless of price. Sellers pass 100% of the tax onto consumers (P rises by the full \\$2). Because equilibrium quantity does not change (\\Delta Q = 0), deadweight loss is ZERO.",
            "distractorTip": "Perfect Inelasticity = 100% tax incidence on that side AND ZERO deadweight loss because quantity does not distort!"
          },
          {
            "id": "micro2-l8-q3",
            "stem": "If the government imposes a binding price floor in the milk market and commits to purchasing all resulting agricultural surpluses, what happens to deadweight loss and taxpayer expenditure?",
            "options": [
              "Deadweight loss is completely eliminated because all produced milk is sold.",
              "Taxpayer expenditure rises to purchase the unsold surplus, and overall societal deadweight loss increases due to overproduction.",
              "Producer surplus falls while consumer surplus expands.",
              "Market quantity transacted reaches the perfectly allocative efficient level."
            ],
            "correctIndex": 1,
            "explanation": "A binding price floor encourages producers to supply $Q_s$ while consumers only buy $Q_d$ at the elevated floor price. When government buys the excess surplus ($Q_s - Q_d$), taxpayers fund the purchase, and resources are wasted producing milk whose marginal cost exceeds consumer marginal benefit, expanding deadweight loss.",
            "distractorTip": "Government buyout of a price floor surplus shifts the financial cost to taxpayers and generates substantial allocative inefficiency."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Unit 3: Production, Cost, and the Perfect Competition Model",
    "shortTitle": "Unit 3: Production & Costs",
    "description": "Production function, diminishing returns, cost curves (TC, MC, ATC, AVC, AFC), economies of scale, profit maximization (MR=MC), shutdown rule, and perfect competition equilibrium",
    "examWeight": "22–25% of AP Micro Exam",
    "biome": {
      "name": "Marginal Cost Valley & Perfect Competition Plains",
      "icon": "🏭",
      "accentColor": "#0284C7",
      "secondaryColor": "#0369A1",
      "groundGradient": "from-sky-100 via-blue-50 to-cyan-100",
      "cardBorder": "border-sky-500",
      "trailColor": "#0284c7",
      "nodeRing": "ring-sky-400/40",
      "skyTint": "from-sky-50 to-blue-50/30"
    },
    "levels": [
      {
        "id": 301,
        "unitIndex": 3,
        "levelNumber": 1,
        "uniqueKey": "micro-u3-l1",
        "topicNumber": "Topic 3.1",
        "name": "Production Function & Diminishing Returns",
        "subtitle": "Marginal and average product dynamics",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "micro3-l1-q1",
            "stem": "What economic principle explains why, in the short run with a fixed factory size, hiring additional workers eventually causes Marginal Product (MP) to decline?",
            "options": [
              "Diseconomies of scale resulting from management bureaucracy.",
              "The law of diminishing marginal utility among factory laborers.",
              "The Law of Diminishing Marginal Returns, because additional units of variable labor must share fixed capital equipment.",
              "Constant returns to scale across industrial assembly lines."
            ],
            "correctIndex": 2,
            "explanation": "The Law of Diminishing Marginal Returns states that as successive units of a variable resource (labor) are added to a fixed resource (capital/plant size), the additional output (Marginal Product) produced by each additional worker will eventually decrease.",
            "distractorTip": "Diminishing returns is a SHORT-RUN concept with at least one fixed input; diseconomies of scale is a LONG-RUN concept where all inputs are variable."
          },
          {
            "id": "micro3-l1-q2",
            "stem": "When Marginal Product (MP) of labor is greater than Average Product (AP) of labor, what must be true about Average Product?",
            "options": [
              "Average Product is at its absolute minimum.",
              "Average Product is decreasing.",
              "Average Product is equal to Total Product.",
              "Average Product is increasing."
            ],
            "correctIndex": 3,
            "explanation": "The mathematical relationship between marginal and average quantities dictates that when the marginal value is above the average (MP > AP), it pulls the average up, so AP is increasing. MP intersects AP at AP's maximum point.",
            "distractorTip": "Think of GPA: if your semester grade (marginal) is higher than your cumulative GPA (average), your cumulative GPA rises!"
          },
          {
            "id": "micro3-l1-q3",
            "stem": "What economic law explains why the Marginal Product of labor eventually declines as more workers are hired in a bakery with a fixed oven and kitchen space?",
            "options": [
              "The Law of Diminishing Marginal Utility",
              "The Law of Increasing Opportunity Costs",
              "The Law of Diminishing Marginal Returns",
              "The Law of Comparative Advantage"
            ],
            "correctIndex": 2,
            "explanation": "The Law of Diminishing Marginal Returns states that as successive units of a variable resource (workers) are added to a fixed resource (kitchen space and ovens), the additional output produced by each extra worker eventually declines.",
            "distractorTip": "Diminishing marginal returns applies to short-run PRODUCTION with a fixed input, whereas diminishing marginal utility applies to consumer SATISFACTION."
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "micro-u3-l2",
        "topicNumber": "Topic 3.2",
        "name": "Short-Run Cost Curves (TC, MC, ATC, AVC, AFC)",
        "subtitle": "Cost relationships and intersections",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro3-l2-q1",
            "stem": "As a firm expands its output, what happens to its Average Fixed Cost (AFC) and the vertical distance between Average Total Cost (ATC) and Average Variable Cost (AVC)?",
            "options": [
              "AFC continually declines, and the vertical distance between ATC and AVC shrinks toward zero.",
              "AFC remains constant, and the vertical distance between ATC and AVC stays constant.",
              "AFC increases exponentially, causing ATC and AVC to diverge.",
              "AFC initially declines but rises after Marginal Cost intersects ATC."
            ],
            "correctIndex": 0,
            "explanation": "Average Fixed Cost is Total Fixed Cost divided by output (AFC = TFC / Q). Because TFC is constant, AFC continually declines as output increases (spreading overhead). Since ATC = AVC + AFC, the vertical gap between ATC and AVC equals AFC, which shrinks as output rises.",
            "distractorTip": "ATC - AVC = AFC. Because AFC continually declines as output expands, ATC and AVC get closer and closer together!"
          },
          {
            "id": "micro3-l2-q2",
            "stem": "Where does the Marginal Cost (MC) curve intersect the Average Variable Cost (AVC) and Average Total Cost (ATC) curves?",
            "options": [
              "At their respective maximum points.",
              "At their respective minimum points.",
              "At the vertical axis intercept where output is zero.",
              "Only where Total Fixed Cost equals Total Variable Cost."
            ],
            "correctIndex": 1,
            "explanation": "Marginal Cost pulls average costs down when MC is below them and pushes them up when MC is above them. Consequently, MC intersects both AVC and ATC at their respective lowest (minimum) points.",
            "distractorTip": "MC always slices through the MINIMUM of AVC and the MINIMUM of ATC!"
          },
          {
            "id": "micro3-l2-q3",
            "stem": "Why does the Marginal Cost ($MC$) curve always intersect the Average Variable Cost ($AVC$) and Average Total Cost ($ATC$) curves at their absolute minimum points?",
            "options": [
              "Because when marginal cost is below the average, it pulls the average down; when marginal cost is above the average, it pulls the average up.",
              "Because fixed costs are constantly increasing at higher production levels.",
              "Because accounting profit must equal economic profit at minimum cost.",
              "Because marginal revenue equals average revenue under perfect competition."
            ],
            "correctIndex": 0,
            "explanation": "This is a mathematical property of marginal-average relationships. If the cost of the next unit ($MC$) is less than the running average ($ATC$), the average drops. Once $MC$ rises above $ATC$, each additional unit pulls the average upward. Therefore, $ATC$ and $AVC$ reach their minimums where $MC = ATC$ and $MC = AVC$.",
            "distractorTip": "Think of GPA: if your semester grade ($MC$) is higher than your cumulative GPA ($ATC$), your cumulative GPA rises."
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "micro-u3-l3",
        "topicNumber": "Topic 3.3",
        "name": "Long-Run Costs & Economies of Scale",
        "subtitle": "LRATC shapes and minimum efficient scale",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro3-l3-q1",
            "stem": "When an automobile manufacturer doubles all of its productive inputs (doubles factory size, robotics, and workforce) and its total output more than doubles, causing Long-Run Average Total Cost (LRATC) to fall, what is the firm experiencing?",
            "options": [
              "Diminishing marginal returns in variable production.",
              "Diseconomies of scale due to communication bottlenecks.",
              "Economies of scale (increasing returns to scale).",
              "Constant returns to scale across assembly plants."
            ],
            "correctIndex": 2,
            "explanation": "Economies of scale occur in the long run when expanding plant size and all inputs allows for labor specialization, bulk purchasing, and advanced automation, causing output to expand faster than costs and lowering LRATC.",
            "distractorTip": "Falling LRATC as output expands = Economies of Scale; Rising LRATC = Diseconomies of Scale."
          },
          {
            "id": "micro3-l3-q2",
            "stem": "What is the term for the lowest level of output at which a firm can minimize its Long-Run Average Total Cost (LRATC)?",
            "options": [
              "The shutdown output threshold.",
              "The profit-maximizing boundary point.",
              "The allocatively efficient capacity point.",
              "The Minimum Efficient Scale (MES)."
            ],
            "correctIndex": 3,
            "explanation": "Minimum Efficient Scale (MES) is the smallest output volume at which a firm exhausts economies of scale and reaches the lowest point on its LRATC curve. If MES is very large relative to total market demand, a natural monopoly or oligopoly emerges.",
            "distractorTip": "Minimum Efficient Scale (MES) marks the start of the lowest-cost region on the LRATC curve."
          },
          {
            "id": "micro3-l3-q3",
            "stem": "If doubling all manufacturing inputs leads to a tripling of total factory output, what operational state is the firm experiencing?",
            "options": [
              "Decreasing returns to scale (diseconomies of scale)",
              "Constant returns to scale",
              "Short-run diminishing marginal productivity",
              "Increasing returns to scale (economies of scale)"
            ],
            "correctIndex": 3,
            "explanation": "Increasing returns to scale (or economies of scale) occurs in the long run when a proportionate increase in all inputs causes a more-than-proportionate increase in output (e.g. 100% input increase yields 200% output gain), leading to falling long-run average total costs.",
            "distractorTip": "Returns to scale is a LONG-RUN concept where all inputs vary; diminishing returns is a SHORT-RUN concept with at least one fixed input."
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "micro-u3-l4",
        "topicNumber": "Topic 3.4 & 3.5",
        "name": "Profit Maximization & Types of Profit",
        "subtitle": "The golden rule MR = MC and normal profit",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro3-l4-q1",
            "stem": "A firm in any market structure discovers that at its current output level, Marginal Revenue is $24 and Marginal Cost is $18. To maximize total profit, what should the firm do?",
            "options": [
              "Expand output, because producing an additional unit adds more to revenue than to cost (MR > MC).",
              "Reduce output, because producing fewer units raises selling price.",
              "Maintain current output, because profit is already positive.",
              "Shut down operations immediately, because MC is below MR."
            ],
            "correctIndex": 0,
            "explanation": "The profit-maximization rule states that a firm should produce where MR = MC. If MR > MC ($24 > $18), producing an extra unit adds $6 to total profit. The firm should expand output until MR equals MC.",
            "distractorTip": "If MR > MC, produce MORE! If MR < MC, produce LESS! Max profit is where MR = MC."
          },
          {
            "id": "micro3-l4-q2",
            "stem": "When a business earns zero economic profit (Normal Profit), which of the following statements is true?",
            "options": [
              "The firm is bankrupt and unable to pay its explicit wages.",
              "The firm's total revenues exactly cover both its explicit costs and its implicit opportunity costs.",
              "The firm's accounting profit must be strictly negative.",
              "The firm should shut down operations to avoid insolvency."
            ],
            "correctIndex": 1,
            "explanation": "Zero economic profit means Total Revenue equals Total Economic Cost (Explicit + Implicit Costs). The business owner is earning an accounting profit exactly equal to what their capital and labor could earn in their next best alternative venture (Normal Profit), providing no incentive to exit.",
            "distractorTip": "Zero economic profit = Normal profit! The business is doing just as well as its best alternative."
          },
          {
            "id": "micro3-l4-q3",
            "stem": "A perfectly competitive firm produces output where $MR = MC = \\$14$. At this output, $ATC = \\$10$ and $AVC = \\$6$. What is the financial status of this firm?",
            "options": [
              "The firm is incurring an economic loss of \\$4 per unit.",
              "The firm is earning positive economic profits of \\$4 per unit.",
              "The firm should shut down immediately to avoid fixed losses.",
              "The firm is breaking even with zero economic profit."
            ],
            "correctIndex": 1,
            "explanation": "Economic profit per unit is $P - ATC = MR - ATC = \\$14 - \\$10 = \\$4$. Because price exceeds average total cost ($P > ATC$), the firm is earning positive economic profit.",
            "distractorTip": "Profit per unit = $P - ATC$. If $P > ATC$, profit > 0. If $ATC > P > AVC$, firm operates at a loss in short run. If $P < AVC$, firm shuts down."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "micro-u3-l5",
        "topicNumber": "Topic 3.6",
        "name": "Short-Run Decisions: Shutdown Rule",
        "subtitle": "When to operate at a loss vs shut down",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro3-l5-q1",
            "stem": "A perfectly competitive wheat farmer sells wheat at the market price of $6 per bushel. At the profit-maximizing output where MR = MC, the farmer's Average Total Cost (ATC) is $8 and Average Variable Cost (AVC) is $5. What is the farmer's best short-run decision?",
            "options": [
              "Shut down immediately to avoid incurring any losses.",
              "Increase price to $8 to eliminate the economic loss.",
              "Continue operating in the short run at a loss, because price exceeds Average Variable Cost (P >= AVC).",
              "Expand output until Average Total Cost drops to $6."
            ],
            "correctIndex": 2,
            "explanation": "Because Price ($6) is below ATC ($8), the firm incurs an economic loss. However, because Price ($6) is greater than AVC ($5), each unit sold contributes $1 toward covering fixed costs. Shutting down would cause the firm to lose its entire Total Fixed Cost ($3/unit), whereas operating limits the loss to $2/unit.",
            "distractorTip": "Shutdown Rule: If P < AVC, shut down! If AVC <= P < ATC, continue operating at a loss in the short run to pay part of fixed costs."
          },
          {
            "id": "micro3-l5-q2",
            "stem": "What curve represents a perfectly competitive firm's short-run supply curve?",
            "options": [
              "The entire Average Total Cost curve.",
              "The horizontal demand curve at the market price.",
              "The Average Variable Cost curve below Marginal Cost.",
              "The portion of its Marginal Cost (MC) curve that lies above its minimum Average Variable Cost (AVC)."
            ],
            "correctIndex": 3,
            "explanation": "A competitive firm will produce where P = MR = MC as long as P >= AVC. At any price below minimum AVC, the firm shuts down (Q = 0). Therefore, the firm's short-run supply curve is its Marginal Cost curve on and above the shutdown point (minimum AVC).",
            "distractorTip": "Firm's Short-Run Supply Curve = MC curve ABOVE minimum AVC!"
          },
          {
            "id": "micro3-l5-q3",
            "stem": "Under what exact condition should a competitive firm in the short run choose to shut down immediately rather than operate at a loss?",
            "options": [
              "When market price falls below the minimum Average Total Cost ($P < ATC$).",
              "When total revenue is less than total fixed costs.",
              "When market price is strictly less than the minimum Average Variable Cost ($P < \\min AVC$).",
              "When marginal revenue is less than marginal cost."
            ],
            "correctIndex": 2,
            "explanation": "If market price cannot even cover Average Variable Cost ($P < AVC$), the firm loses all of its fixed costs plus an additional amount on every unit produced. By shutting down ($Q = 0$), the firm minimizes losses strictly to its fixed costs.",
            "distractorTip": "Shutdown rule: In the short run, shut down if $P < AVC$. In the long run, exit if $P < ATC$."
          }
        ]
      },
      {
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "micro-u3-l6",
        "topicNumber": "Topic 3.7",
        "name": "Perfect Competition Long-Run Equilibrium",
        "subtitle": "Allocative and productive efficiency",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro3-l6-q1",
            "stem": "In long-run equilibrium in a perfectly competitive constant-cost industry, which conditions must hold simultaneously for every individual firm?",
            "options": [
              "Price = Marginal Revenue = Marginal Cost = Minimum Average Total Cost, with zero economic profit.",
              "Price exceeds Marginal Cost, generating sustained economic profits.",
              "Firms earn positive economic profit because barriers to entry prevent new entrants.",
              "Marginal Revenue exceeds Average Total Cost, causing firms to exit the industry."
            ],
            "correctIndex": 0,
            "explanation": "Free entry and exit guarantee that if economic profits exist, new firms enter, increasing market supply and lowering price until economic profit is zero. In long-run equilibrium: P = MR = MC = min(ATC). Firms earn normal profit.",
            "distractorTip": "In long-run perfect competition: P = MR = MC = min ATC. Economic profit is ZERO!"
          },
          {
            "id": "micro3-l6-q2",
            "stem": "Why is long-run equilibrium in a perfectly competitive market considered both allocatively efficient and productively efficient?",
            "options": [
              "Because total revenue is maximized and firms face downward-sloping demand curves.",
              "Because Price equals Marginal Cost (allocative efficiency, maximizing consumer/producer surplus) and Price equals minimum Average Total Cost (productive efficiency, producing at lowest cost).",
              "Because consumer surplus is completely eliminated and transferred to producers.",
              "Because firms engage in non-price advertising competition."
            ],
            "correctIndex": 1,
            "explanation": "Allocative efficiency occurs where P = MC (the value society places on the last unit equals the marginal cost of production). Productive efficiency occurs where P = min(ATC) (goods are produced at the lowest possible per-unit cost). Perfect competition achieves both in the long run.",
            "distractorTip": "Allocative Efficiency: P = MC. Productive Efficiency: P = min ATC."
          },
          {
            "id": "micro3-l6-q3",
            "stem": "In a perfectly competitive industry in long-run equilibrium, which of the following equalities must hold true for every typical firm?",
            "options": [
              "$P = MR = MC = \\min ATC$, yielding zero economic profit and both allocative and productive efficiency.",
              "$P > MC = \\min ATC$, allowing persistent long-run economic profits.",
              "$MR = MC < ATC$, requiring continuous government production subsidies.",
              "$P = AVC = \\min MC$, causing immediate industry exit."
            ],
            "correctIndex": 0,
            "explanation": "Free entry and exit drive long-run economic profits to zero ($P = ATC$). Because price-taking firms produce where $P = MR = MC$, in long-run equilibrium $P = MR = MC = \\min ATC$. Producing where $P = MC$ achieves allocative efficiency, and producing at minimum $ATC$ achieves productive efficiency.",
            "distractorTip": "In long-run competitive equilibrium, firms earn normal (zero economic) profit, achieving both productive and allocative efficiency."
          }
        ]
      },
      {
        "id": 307,
        "unitIndex": 3,
        "levelNumber": 7,
        "uniqueKey": "micro-u3-l7",
        "topicNumber": "Topic 3.7",
        "name": "Constant-Cost vs. Increasing-Cost Industries",
        "subtitle": "Long-run industry supply curve shapes",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "micro3-l7-q1",
            "stem": "In an increasing-cost perfectly competitive industry (such as commercial oil drilling or lithium mining), what happens to individual firms' cost curves and the industry price when market demand increases in the long run?",
            "options": [
              "New firm entry drives input prices down, shifting ATC curves downward and lowering the long-run price.",
              "New firm entry has zero impact on resource costs, so the long-run supply curve is perfectly horizontal.",
              "New firm entry bids up specialized factor costs, shifting each firm's ATC and MC curves upward and resulting in an upward-sloping long-run industry supply curve.",
              "Individual firms become natural monopolies due to economies of scale."
            ],
            "correctIndex": 2,
            "explanation": "In an increasing-cost industry, expanding industry output bids up the prices of specialized inputs (e.g. drilling rigs, petroleum engineers). As new firms enter, cost curves (ATC and MC) shift UP for all firms, requiring a higher equilibrium price to break even in the long run (upward-sloping long-run industry supply).",
            "distractorTip": "Increasing-Cost Industry = Entry bids up input costs -> Upward-sloping Long-Run Supply curve!"
          },
          {
            "id": "micro3-l7-q2",
            "stem": "What is the slope of the long-run industry supply curve in a perfectly competitive CONSTANT-COST industry?",
            "options": [
              "Downward-sloping, indicating increasing returns.",
              "Upward-sloping, reflecting diminishing returns in capital markets.",
              "Vertical, indicating fixed total capacity.",
              "Perfectly horizontal (infinitely elastic at the minimum of ATC)."
            ],
            "correctIndex": 3,
            "explanation": "In a constant-cost industry, the entry and exit of firms does not alter the resource prices or cost curves of existing firms. Therefore, long-run equilibrium always returns to the original minimum ATC, creating a perfectly horizontal long-run industry supply curve.",
            "distractorTip": "Constant-Cost Industry: Entry/exit does not change input prices -> Long-Run Supply is HORIZONTAL!"
          },
          {
            "id": "micro3-l7-q3",
            "stem": "In an increasing-cost perfectly competitive industry, how does a permanent increase in industry demand affect the long-run equilibrium price and industry supply curve?",
            "options": [
              "Long-run price returns to its exact original level, and the long-run industry supply curve is perfectly horizontal.",
              "Long-run price decreases because new entrants achieve higher economies of scale.",
              "New firms enter, driving factor input costs down and shifting the supply curve downward.",
              "New firms enter, bidding up specialized resource prices and resulting in an upward-sloping long-run industry supply curve."
            ],
            "correctIndex": 3,
            "explanation": "In an increasing-cost industry, the entry of new firms increases industry demand for specialized, scarce inputs (such as skilled craft labor or rare mineral rights). This raises input prices, shifting each firm's cost curves upward, so the new long-run equilibrium price is higher than before (upward-sloping long-run industry supply).",
            "distractorTip": "Constant-cost industry = horizontal long-run supply; Increasing-cost industry = upward-sloping long-run supply curve."
          }
        ]
      },
      {
        "id": 308,
        "unitIndex": 3,
        "levelNumber": 8,
        "uniqueKey": "micro-u3-l8",
        "topicNumber": "Unit 3 Boss",
        "name": "Apex Production, Costs & Competition Crucible",
        "subtitle": "Comprehensive cost table analysis and equilibrium mastery",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "micro3-l8-q1",
            "stem": "A perfectly competitive firm faces a market price of \\$50. At output Q = 100, its Average Total Cost is \\$40, Average Variable Cost is \\$30, and Marginal Cost is \\$50. What is the firm's total economic profit, and what will happen in the industry in the long run?",
            "options": [
              "Total profit is \\$1,000; new firms will enter, shifting industry supply right until price falls to minimum ATC.",
              "Total profit is \\$5,000; existing firms will expand plant sizes permanently.",
              "Total profit is -\\$1,000; firms will immediately shut down.",
              "Total profit is \\$0; the industry is already in long-run equilibrium."
            ],
            "correctIndex": 0,
            "explanation": "Profit per unit = Price - ATC = \\$50 - \\$40 = \\$10. Total Economic Profit = Profit/unit * Q = \\$10 * 100 = \\$1,000. Because economic profit is positive, new firms will be attracted into the industry. Their entry shifts market supply rightward, depressing market price until P = min(ATC) and economic profit is zero.",
            "distractorTip": "Positive economic profit (P > ATC) attracts entry, shifting industry supply RIGHT and lowering price to zero profit!"
          },
          {
            "id": "micro3-l8-q2",
            "stem": "A firm's Total Cost function produces TC = \\$120 at Q = 1, TC = \\$150 at Q = 2, TC = \\$190 at Q = 3, and TC = \\$240 at Q = 4. Total Fixed Cost is \\$80. What are the Marginal Cost of the 3rd unit and Average Variable Cost at Q = 3?",
            "options": [
              "MC = \\$50; AVC = \\$63.33",
              "MC = \\$40; AVC = \\$36.67",
              "MC = \\$70; AVC = \\$47.50",
              "MC = \\$40; AVC = \\$63.33"
            ],
            "correctIndex": 1,
            "explanation": "MC of 3rd unit = TC(3) - TC(2) = \\$190 - \\$150 = \\$40. Total Variable Cost (TVC) at Q = 3 is TC(3) - TFC = \\$190 - \\$80 = \\$110. Average Variable Cost (AVC) = TVC / Q = \\$110 / 3 = \\$36.67.",
            "distractorTip": "MC = Delta TC / Delta Q. TVC = TC - TFC. AVC = TVC / Q."
          },
          {
            "id": "micro3-l8-q3",
            "stem": "If a competitive firm faces market price $P = \\$25$, Total Cost $TC = 50 + 5Q + 2Q^2$, and $MC = 5 + 4Q$, what is the profit-maximizing output level $Q^*$?",
            "options": [
              "$Q^* = 10$",
              "$Q^* = 5$",
              "$Q^* = 8$",
              "$Q^* = 12$"
            ],
            "correctIndex": 1,
            "explanation": "Set $MR = MC$. In perfect competition, $MR = P = \\$25$. $25 = 5 + 4Q \\implies 4Q = 20 \\implies Q = 5$. Check that $P > AVC$: At $Q = 5$, $VC = 5(5) + 2(25) = 25 + 50 = 75$, so $AVC = 75/5 = \\$15$. Since $P = \\$25 > \\$15$, the firm operates profitably.",
            "distractorTip": "Set $P = MC$ to find the optimal quantity, then verify that $P \\ge AVC$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Unit 4: Imperfect Competition",
    "shortTitle": "Unit 4: Imperfect Comp",
    "description": "Monopoly, price discrimination, natural monopoly regulation, monopolistic competition, oligopoly, game theory payoff matrices, and Nash equilibrium",
    "examWeight": "15–22% of AP Micro Exam",
    "biome": {
      "name": "Monopoly Citadel & Game Theory Arena",
      "icon": "🏰",
      "accentColor": "#8B5CF6",
      "secondaryColor": "#6D28D9",
      "groundGradient": "from-purple-100 via-violet-50 to-indigo-100",
      "cardBorder": "border-purple-500",
      "trailColor": "#8b5cf6",
      "nodeRing": "ring-purple-400/40",
      "skyTint": "from-purple-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "micro-u4-l1",
        "topicNumber": "Topic 4.1 & 4.2",
        "name": "Monopoly Pricing, Output & Deadweight Loss",
        "subtitle": "Why MR < P and deadweight loss creation",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "micro4-l1-q1",
            "stem": "Why does a single-price monopolist's Marginal Revenue (MR) curve lie below its downward-sloping Demand curve for all positive levels of output?",
            "options": [
              "Because the government enforces price ceilings on monopoly profits.",
              "Because the monopolist faces constant marginal costs.",
              "Because to sell an additional unit of output, the monopolist must lower the price not only on that marginal unit, but on all previous units sold.",
              "Because consumer surplus increases with each additional unit sold."
            ],
            "correctIndex": 2,
            "explanation": "A single-price monopolist is a price maker facing market demand. To expand sales by one unit, it must reduce price on all units. The revenue gain on the marginal unit is offset by the price reduction on inframarginal units, causing Marginal Revenue to be strictly less than Price (MR < P).",
            "distractorTip": "Single-price monopoly: MR < P because lowering price to sell one more unit cuts the revenue received on all previous units!"
          },
          {
            "id": "micro4-l1-q2",
            "stem": "Compared to an otherwise identical perfectly competitive market, how do a single-price monopolist's equilibrium price and quantity compare, and what is the market efficiency outcome?",
            "options": [
              "The monopoly charges a lower price, produces higher output, and achieves allocative efficiency.",
              "The monopoly charges the same price but produces lower output with zero deadweight loss.",
              "The monopoly charges a higher price and produces higher output, maximizing consumer surplus.",
              "The monopoly charges a higher price, restricts output, and creates deadweight loss."
            ],
            "correctIndex": 3,
            "explanation": "A monopolist restricts output to where MR = MC and charges the higher price on the demand curve (P_m > P_c and Q_m < Q_c). Because P > MC at equilibrium, the market produces less than the socially optimal quantity, creating deadweight loss and transferring consumer surplus to monopoly profit.",
            "distractorTip": "Monopoly outcome: Higher Price, Lower Output, and Deadweight Loss compared to perfect competition."
          },
          {
            "id": "micro4-l1-q3",
            "stem": "Why does an unregulated single-price monopoly generate deadweight loss compared to a perfectly competitive market?",
            "options": [
              "The monopoly produces at the minimum point of its average total cost curve.",
              "The monopoly experiences decreasing costs across all output levels.",
              "The monopoly restricts output to where $MR = MC$, setting a price that exceeds marginal cost ($P > MC$) and causing underallocation of resources.",
              "The monopoly faces a horizontal marginal revenue curve."
            ],
            "correctIndex": 2,
            "explanation": "A single-price monopoly maximizes profit where $MR = MC$, but charges a price $P$ off the demand curve. Because $P > MC$, the value to consumers of the last unit exceeds the cost of producing it. Output is less than the socially optimal quantity ($P = MC$), creating deadweight loss.",
            "distractorTip": "Allocative inefficiency occurs whenever $P > MC$; monopolies intentionally restrict output to charge higher prices."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "micro-u4-l2",
        "topicNumber": "Topic 4.2",
        "name": "Natural Monopoly & Price Regulation",
        "subtitle": "Socially optimal (P=MC) vs fair-return (P=ATC)",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro4-l2-q1",
            "stem": "If a government regulatory agency forces a natural monopoly to charge the Socially Optimal Price (Allocatively Efficient Price where P = MC), and MC lies below ATC at that output level, what financial consequence will the utility experience?",
            "options": [
              "The utility will suffer an economic loss (negative economic profit) and will require a government subsidy to avoid bankruptcy.",
              "The utility will earn substantial monopoly profits and expand capacity.",
              "The utility will earn exactly zero economic profit (fair return).",
              "The utility's marginal cost will instantly increase to match average total cost."
            ],
            "correctIndex": 0,
            "explanation": "Socially optimal pricing sets P = MC. In a natural monopoly with declining average total costs, MC is strictly below ATC over the relevant range of market demand. Setting P = MC results in P < ATC, causing the firm to incur economic losses. To keep the utility operating, the government must provide a subsidy.",
            "distractorTip": "Socially Optimal Price: P = MC (Allocatively efficient, but firm loses money if MC < ATC). Fair-Return Price: P = ATC (Zero economic profit, no subsidy needed)."
          },
          {
            "id": "micro4-l2-q2",
            "stem": "Under Fair-Return Price Regulation of a natural monopoly, the government sets the regulated price equal to Average Total Cost (P = ATC). What is the economic outcome of this regulatory compromise?",
            "options": [
              "The monopoly earns zero accounting profit and shuts down.",
              "The monopoly earns zero economic profit (normal profit) without requiring a taxpayer subsidy, but some deadweight loss remains.",
              "Allocative efficiency is achieved with zero deadweight loss.",
              "Price is set equal to Marginal Cost."
            ],
            "correctIndex": 1,
            "explanation": "Fair-return pricing sets P = ATC where the demand curve intersects ATC. At this price, Total Revenue equals Total Economic Cost, so the firm earns a normal profit without needing a taxpayer subsidy. However, because P > MC, deadweight loss is reduced but not completely eliminated.",
            "distractorTip": "Fair-Return: P = ATC. Normal profit, no government subsidy needed, but slight deadweight loss remains."
          },
          {
            "id": "micro4-l2-q3",
            "stem": "If government regulators require a natural monopoly to set price equal to marginal cost ($P = MC$, the socially optimal price), what financial dilemma typically occurs?",
            "options": [
              "The monopoly will suffer economic losses because $MC < ATC$ across the relevant demand range, requiring a government subsidy to prevent shutdown.",
              "The monopoly will earn excessive monopoly rent and expand deadweight loss.",
              "The monopoly will immediately produce zero consumer surplus.",
              "The monopoly will achieve productive efficiency at the minimum point of ATC."
            ],
            "correctIndex": 0,
            "explanation": "Natural monopolies feature extensive economies of scale where $ATC$ declines over the entire market demand. When $ATC$ is falling, $MC$ lies strictly below $ATC$. Setting $P = MC$ forces $P < ATC$, meaning the firm incurs economic losses and will shut down without a public subsidy or fair-return regulation.",
            "distractorTip": "Socially optimal regulation ($P = MC$) achieves allocative efficiency but forces the natural monopoly into losses ($P < ATC$)."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "micro-u4-l3",
        "topicNumber": "Topic 4.3",
        "name": "Price Discrimination",
        "subtitle": "Perfect price discrimination outcomes",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro4-l3-q1",
            "stem": "Which of the following is an essential precondition for a firm to successfully practice price discrimination between different customer segments?",
            "options": [
              "The firm must be a price-taker operating in a perfectly competitive market.",
              "Customers must have identical price elasticities of demand.",
              "The firm must possess market power, be able to identify differences in willingness to pay, and effectively prevent arbitrage (resale).",
              "The government must subsidize all consumer purchases."
            ],
            "correctIndex": 2,
            "explanation": "Price discrimination requires three conditions: (1) Market power (downward-sloping demand), (2) The ability to segment consumers based on differing price elasticity / willingness to pay, and (3) The ability to prevent low-price buyers from reselling to high-price buyers (preventing arbitrage).",
            "distractorTip": "Price discrimination requires market power and NO RESALE (preventing arbitrage)."
          },
          {
            "id": "micro4-l3-q2",
            "stem": "If a monopolist engages in Perfect (First-Degree) Price Discrimination, charging every individual buyer their exact maximum willingness to pay, what happens to Consumer Surplus and Deadweight Loss?",
            "options": [
              "Consumer Surplus is maximized, and Deadweight Loss is maximized.",
              "Consumer Surplus is positive, but Deadweight Loss increases.",
              "Both Consumer Surplus and Producer Surplus are eliminated.",
              "Consumer Surplus is reduced to zero, Deadweight Loss is zero, and the firm produces the socially optimal output level."
            ],
            "correctIndex": 3,
            "explanation": "Under perfect price discrimination, the firm captures the entire area under the demand curve as revenue (MR = Demand). Consumer surplus becomes zero because every buyer pays their maximum reservation price. The firm expands output until P = MC, so Deadweight Loss is ZERO and output is socially optimal!",
            "distractorTip": "Perfect Price Discrimination: Consumer Surplus = 0, Deadweight Loss = 0, Output = Socially Optimal (P = MC)!"
          },
          {
            "id": "micro4-l3-q3",
            "stem": "When a monopoly engages in perfect (first-degree) price discrimination, charging every customer their exact maximum willingness to pay, what are the effects on Consumer Surplus and Deadweight Loss?",
            "options": [
              "Consumer surplus is maximized, and deadweight loss reaches its highest level.",
              "Both consumer surplus and producer surplus equal zero.",
              "Consumer surplus remains unchanged while producer surplus drops to zero.",
              "Consumer surplus is completely eliminated (converted to producer surplus), and deadweight loss is zero."
            ],
            "correctIndex": 3,
            "explanation": "Under perfect price discrimination, the monopoly's demand curve becomes its marginal revenue curve ($MR = P$). The firm produces all units where $P \\ge MC$ up to the competitive output, eliminating deadweight loss. However, every dollar of consumer surplus is converted into producer surplus/economic profit.",
            "distractorTip": "Counterintuitive AP fact: Perfect price discrimination achieves allocative efficiency (zero deadweight loss), but leaves consumers with ZERO consumer surplus."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "micro-u4-l4",
        "topicNumber": "Topic 4.4",
        "name": "Monopolistic Competition",
        "subtitle": "Product differentiation, zero profit tangency & excess capacity",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro4-l4-q1",
            "stem": "In the long-run equilibrium of a monopolistically competitive industry (such as fast-food restaurants), what is the firm's financial profit and pricing condition?",
            "options": [
              "Economic profit is zero because price equals Average Total Cost (P = ATC), but the firm operates with excess capacity because price exceeds Marginal Cost (P > MC).",
              "Firms earn sustained economic profit because high barriers to entry prevent new entrants.",
              "The firm achieves productive efficiency by producing at the minimum of ATC.",
              "Price equals Marginal Cost, achieving allocative efficiency."
            ],
            "correctIndex": 0,
            "explanation": "Because entry and exit are easy, economic profit attracts new competitors until the firm's demand curve shifts left and becomes tangent to ATC (P = ATC, zero economic profit). However, because the demand curve is downward-sloping, it touches ATC on its downward-sloping segment, meaning the firm produces less than the minimum-ATC output, creating excess capacity and P > MC.",
            "distractorTip": "Monopolistic Competition Long-Run: Zero economic profit (P = ATC), but has EXCESS CAPACITY and is neither allocatively nor productively efficient."
          },
          {
            "id": "micro4-l4-q2",
            "stem": "What is the definition of 'Excess Capacity' in a monopolistically competitive market?",
            "options": [
              "The surplus inventory that goes unsold due to binding price floors.",
              "The difference between the firm's profit-maximizing output and the output that minimizes Average Total Cost.",
              "The extra factory machinery leased during seasonal demand surges.",
              "The difference between market demand and market supply."
            ],
            "correctIndex": 1,
            "explanation": "Excess capacity is the gap between the firm's actual output (where MR = MC) and its productively efficient output (where ATC is minimized). The firm could lower per-unit production costs by expanding output, but chooses not to because doing so would reduce its profit.",
            "distractorTip": "Excess Capacity = Productively Efficient Output (min ATC) - Actual Profit-Maximizing Output."
          },
          {
            "id": "micro4-l4-q3",
            "stem": "In long-run equilibrium, why does a monopolistically competitive firm exhibit 'excess capacity'?",
            "options": [
              "The firm produces at the output level where $ATC$ is minimized.",
              "The firm produces an output level less than the output corresponding to minimum Average Total Cost ($Q < Q_{\\text{min } ATC}$).",
              "The firm's demand curve is perfectly horizontal.",
              "The firm faces identical barriers to entry as an oligopolistic cartel."
            ],
            "correctIndex": 1,
            "explanation": "Because products are differentiated, monopolistically competitive firms face downward-sloping demand curves. In long-run equilibrium, free entry forces the demand curve to be tangent to the downward-sloping segment of $ATC$ ($P = ATC$, zero profit). Since it is tangent where $ATC$ is still falling, the firm produces less than the capacity output that minimizes $ATC$.",
            "distractorTip": "Excess capacity is the gap between actual output and the output that minimizes average total cost ($Q_{\\text{min } ATC} - Q_{\\text{actual}}$)."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "micro-u4-l5",
        "topicNumber": "Topic 4.5",
        "name": "Oligopoly & Game Theory: Payoff Matrix",
        "subtitle": "Interdependence, dominant strategies, and prisoner's dilemma",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro4-l5-q1",
            "stem": "In game theory, what is the definition of a 'Dominant Strategy' for a player?",
            "options": [
              "A strategy that ensures the highest possible collective payout for both firms when colluding.",
              "A strategy that minimizes the competitor's market share.",
              "A strategy that yields the best outcome for a player regardless of the strategy chosen by the rival player.",
              "A strategy chosen only after observing the opponent's move in a sequential game."
            ],
            "correctIndex": 2,
            "explanation": "A dominant strategy is an action that provides a strictly higher payoff to a player no matter what action the rival firm chooses. If a player's best response is the same across all possible moves of the rival, that action is a dominant strategy.",
            "distractorTip": "Dominant strategy: Best choice REGARDLESS of what the other player does!"
          },
          {
            "id": "micro4-l5-q2",
            "stem": "Consider two duopoly airlines, Alpha and Beta. Both can choose High Price or Low Price. If both choose High Price, each earns $100M. If both choose Low Price, each earns $40M. If one chooses Low Price while the other chooses High Price, the low-price firm earns $140M and the high-price firm earns $20M. What are the dominant strategies, and what is the outcome?",
            "options": [
              "Both firms have a dominant strategy to choose High Price, earning $100M each.",
              "Neither firm has a dominant strategy, so the outcome is random.",
              "Alpha chooses High Price and Beta chooses Low Price.",
              "Both firms have a dominant strategy to choose Low Price, resulting in a Prisoner's Dilemma where each earns $40M."
            ],
            "correctIndex": 3,
            "explanation": "For Alpha: If Beta chooses High, Alpha gets $140M (Low) vs $100M (High) -> Low is better. If Beta chooses Low, Alpha gets $40M (Low) vs $20M (High) -> Low is better. Thus, Low Price is Alpha's dominant strategy. Symmetrically, Low Price is Beta's dominant strategy. Both choose Low Price, earning $40M each, worse than the collusive $100M (Prisoner's Dilemma).",
            "distractorTip": "Prisoner's Dilemma: Dominant self-interest leads both players to a non-cooperative outcome worse than mutual cooperation."
          },
          {
            "id": "micro4-l5-q3",
            "stem": "In a duopoly game where each firm can choose High Price or Low Price, what defines a player's 'Dominant Strategy'?",
            "options": [
              "A strategy that yields the highest joint profit if both firms collude secretly.",
              "A strategy that minimizes the maximum potential loss in the worst-case scenario.",
              "A strategy that yields the highest payoff regardless of the strategy chosen by the rival firm.",
              "A strategy chosen only after observing the opponent's prior move."
            ],
            "correctIndex": 2,
            "explanation": "A dominant strategy is an action that provides the best individual outcome for a player no matter what action the other player selects. If a firm prefers Low Price whether the rival chooses High or Low, Low Price is its dominant strategy.",
            "distractorTip": "Test both of the rival's choices separately: if Option A is better in both cases, Option A is a dominant strategy."
          }
        ]
      },
      {
        "id": 406,
        "unitIndex": 4,
        "levelNumber": 6,
        "uniqueKey": "micro-u4-l6",
        "topicNumber": "Topic 4.5",
        "name": "Nash Equilibrium & Cartel Stability",
        "subtitle": "Equilibrium without unilateral deviation and cheating incentives",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro4-l6-q1",
            "stem": "What defines a 'Nash Equilibrium' in non-cooperative game theory?",
            "options": [
              "A situation in which each player is choosing their best strategy given the strategies chosen by other players, meaning no player has an incentive to unilaterally deviate.",
              "A situation where both players collude to maximize total industry profit.",
              "An outcome where one firm bankrupts the other through predatory pricing.",
              "A condition where neither firm possesses a dominant strategy."
            ],
            "correctIndex": 0,
            "explanation": "A Nash Equilibrium occurs when each player's choice is optimal given the other players' choices. At a Nash equilibrium, no firm can improve its individual payoff by changing its strategy alone (unilaterally).",
            "distractorTip": "Nash Equilibrium: No player has an incentive to unilaterally change their move!"
          },
          {
            "id": "micro4-l6-q2",
            "stem": "Why are formal collusive agreements (cartels) between oligopoly firms notoriously difficult to maintain over time, even when legally permitted?",
            "options": [
              "Because cartels are forced to price at Marginal Cost by competitive fringe firms.",
              "Because each individual cartel member has a strong economic incentive to cheat by secretly lowering price or expanding output to capture greater individual profits.",
              "Because cartel collusion always lowers total industry profit compared to competition.",
              "Because consumer demand becomes perfectly elastic under collusive agreements."
            ],
            "correctIndex": 1,
            "explanation": "While an output-restricting cartel maximizes joint monopoly profits, each individual member faces a private incentive to cheat: expanding its own production beyond the quota at the high cartel price adds substantial profit, while the downward price impact is shared across all cartel members.",
            "distractorTip": "Cartel instability: Individual incentive to cheat by expanding output destroys collective monopoly pricing!"
          },
          {
            "id": "micro4-l6-q3",
            "stem": "Why are informal collusive cartels (such as OPEC) notoriously difficult to sustain in the long run without legal enforcement?",
            "options": [
              "Each individual member has a strong unilateral incentive to cheat and overproduce to increase its own profits.",
              "Cartel agreements legally convert all participating firms into monopolistic competitors.",
              "Consumer demand curves become perfectly elastic once a cartel forms.",
              "Cartel output quotas eliminate all fixed overhead costs."
            ],
            "correctIndex": 0,
            "explanation": "A cartel restricts collective output to raise prices and maximize joint monopoly profits. However, at the agreed high cartel price, an individual firm's $P > MC$, giving each firm a powerful incentive to cheat by secretly producing extra units to capture additional individual profit, ultimately collapsing the cartel.",
            "distractorTip": "The Prisoner's Dilemma illustrates cartel instability: individual self-interest undermines collective cooperation."
          }
        ]
      },
      {
        "id": 407,
        "unitIndex": 4,
        "levelNumber": 7,
        "uniqueKey": "micro-u4-l7",
        "topicNumber": "Topic 4.5",
        "name": "Sequential Games & Subgame Perfection",
        "subtitle": "Game trees, backward induction, and credible threats",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "micro4-l7-q1",
            "stem": "In an extensive-form (game tree) sequential game, an incumbent airline threatens: 'If a low-cost startup enters our hub, we will slash prices to zero and trigger a mutually ruinous price war.' If fighting the price war costs the incumbent \\$50M while accommodating the entrant yields \\$20M in profit, how will the entrant evaluate the threat?",
            "options": [
              "The entrant will be deterred because the incumbent has first-mover advantage.",
              "The entrant will collude with the incumbent by splitting the terminal gates.",
              "The entrant will ignore the threat because it is non-credible: once entry occurs, the incumbent's best payoff is to accommodate (\\$20M > -\\$50M).",
              "The entrant will shut down and file for Chapter 11 bankruptcy."
            ],
            "correctIndex": 2,
            "explanation": "By backward induction, players evaluate future decisions at the terminal decision node. If entry occurs, the incumbent faces a choice between accommodation (+\\$20M) and price war (-\\$50M). Rational self-interest dictates accommodation. The threat of price war is therefore non-credible, and the entrant enters.",
            "distractorTip": "Backward Induction: Look forward and reason backward. Threats that harm the threatener if carried out are non-credible!"
          },
          {
            "id": "micro4-l7-q2",
            "stem": "What economic mechanism can an incumbent firm employ to transform an empty threat into a 'Credible Threat' that successfully deters potential competitors from entering?",
            "options": [
              "Issuing an informal public press release promising fair competition.",
              "Lowering prices for existing consumers while reducing product advertising.",
              "Refusing to apply for intellectual property patent protections.",
              "Making an irreversible commitment, such as investing in irreversible excess manufacturing capacity that guarantees fighting an entrant is profitable."
            ],
            "correctIndex": 3,
            "explanation": "A credible commitment requires binding oneself in advance so that following through on the action is optimal or unavoidable. Sunk investments in excess capacity or contractual penalty clauses alter payoffs, making deterrence credible.",
            "distractorTip": "Credible threats require irreversible commitments or altered payoff structures!"
          },
          {
            "id": "micro4-l7-q3",
            "stem": "How do economists solve for the subgame perfect Nash equilibrium in an extensive-form (game tree) sequential game?",
            "options": [
              "By selecting the highest joint payoff at the root node.",
              "By randomizing strategies using mixed-strategy probabilities.",
              "By using backward induction from the terminal payoffs back to the initial decision node.",
              "By eliminating strictly dominated strategies exclusively for the first mover."
            ],
            "correctIndex": 2,
            "explanation": "Backward induction solves sequential games by analyzing the last mover's best response at the terminal nodes first, and then working backward step-by-step to the initial decision node, ensuring that every credible threat or promise is subgame perfect.",
            "distractorTip": "Backward induction: Start at the end of the decision tree and prune non-optimal branches backwards to the root."
          }
        ]
      },
      {
        "id": 408,
        "unitIndex": 4,
        "levelNumber": 8,
        "uniqueKey": "micro-u4-l8",
        "topicNumber": "Unit 4 Boss",
        "name": "Apex Imperfect Competition Citadel",
        "subtitle": "Comparing monopoly, monopolistic competition, and oligopoly efficiency",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "micro4-l8-q1",
            "stem": "Rank the following market structures from lowest barriers to entry to highest barriers to entry:",
            "options": [
              "Perfect Competition -> Monopolistic Competition -> Oligopoly -> Monopoly",
              "Monopolistic Competition -> Perfect Competition -> Monopoly -> Oligopoly",
              "Oligopoly -> Monopoly -> Perfect Competition -> Monopolistic Competition",
              "Monopoly -> Oligopoly -> Monopolistic Competition -> Perfect Competition"
            ],
            "correctIndex": 0,
            "explanation": "Perfect competition has zero barriers to entry (free entry/exit). Monopolistic competition has very low barriers (easy entry/exit). Oligopoly has high barriers (substantial capital, patents, scale). Monopoly has insurmountable barriers (exclusive franchise, patents, control of essential resource).",
            "distractorTip": "Entry barrier continuum: Free (PC) -> Easy (MC) -> High (Oligopoly) -> Insurmountable (Monopoly)."
          },
          {
            "id": "micro4-l8-q2",
            "stem": "Which of the following market structures features mutual interdependence among competing firms, meaning each firm must anticipate rivals' reactions before changing prices or advertising?",
            "options": [
              "Perfect Competition, because all goods are homogeneous.",
              "Oligopoly, where a small number of large firms dominate the market.",
              "Single-Price Monopoly, because the monopolist dictates output.",
              "Monopolistic Competition, because firms sell differentiated products."
            ],
            "correctIndex": 1,
            "explanation": "Mutual interdependence is the defining hallmark of oligopoly. Because only a few large sellers dominate the market, any price cut, marketing campaign, or capacity expansion by one firm directly affects rivals' sales, compelling them to react.",
            "distractorTip": "Mutual Interdependence is the UNIQUE signature characteristic of OLIGOPOLY!"
          },
          {
            "id": "micro4-l8-q3",
            "stem": "A monopoly faces demand $P = 100 - 2Q$ and marginal revenue $MR = 100 - 4Q$. Marginal cost is constant at $MC = \\$20$. What are the profit-maximizing output $Q^*$ and price $P^*$?",
            "options": [
              "$Q^* = 25, P^* = \\$50$",
              "$Q^* = 20, P^* = \\$60$",
              "$Q^* = 40, P^* = \\$20$",
              "$Q^* = 15, P^* = \\$70$"
            ],
            "correctIndex": 1,
            "explanation": "Set $MR = MC$: $100 - 4Q = 20 \\implies 4Q = 80 \\implies Q^* = 20$. Plug $Q^*$ into the demand curve to find price: $P^* = 100 - 2(20) = 100 - 40 = \\$60$.",
            "distractorTip": "Never use the $MR$ equation to find the price! Find $Q^*$ where $MR = MC$, then plug that quantity into DEMAND to get $P^*$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Unit 5: Factor Markets",
    "shortTitle": "Unit 5: Factor Markets",
    "description": "Derived demand for labor, Marginal Revenue Product (MRP), Marginal Factor Cost (MFC), profit-maximizing hiring (MRP=MFC), monopsony, and least-cost rule",
    "examWeight": "10–13% of AP Micro Exam",
    "biome": {
      "name": "Factor Foundry & Monopsony Mill",
      "icon": "⚙️",
      "accentColor": "#F59E0B",
      "secondaryColor": "#D97706",
      "groundGradient": "from-amber-100 via-orange-50 to-yellow-100",
      "cardBorder": "border-amber-500",
      "trailColor": "#f59e0b",
      "nodeRing": "ring-amber-400/40",
      "skyTint": "from-amber-50 to-orange-50/30"
    },
    "levels": [
      {
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "micro-u5-l1",
        "topicNumber": "Topic 5.1",
        "name": "Derived Demand for Factors of Production",
        "subtitle": "Why resource demand stems from product demand",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "micro5-l1-q1",
            "stem": "Why is the demand for productive inputs (such as carpenters or copper) referred to as 'Derived Demand' in microeconomics?",
            "options": [
              "Because resource prices are derived from central government wage schedules.",
              "Because the demand curve for labor is derived from the supply curve of capital.",
              "Because the demand for a resource is directly derived from the demand for the final goods and services that the resource helps produce.",
              "Because factor prices are derived from the international foreign exchange rate."
            ],
            "correctIndex": 2,
            "explanation": "Derived demand means firms do not demand resources for their own sake, but rather for their contribution to producing final consumer goods. For instance, demand for carpenters increases when the consumer demand for new housing rises.",
            "distractorTip": "Derived Demand: Demand for labor comes from consumer demand for the final product!"
          },
          {
            "id": "micro5-l1-q2",
            "stem": "Which of the following events will cause the market demand curve for aerospace engineers to shift to the right?",
            "options": [
              "A decrease in the market wage paid to aerospace engineers.",
              "A decrease in the consumer demand for commercial airliners and satellites.",
              "An increase in the price of college tuition for engineering students.",
              "An increase in the market price of commercial airliners and a technological advance that raises engineer productivity."
            ],
            "correctIndex": 3,
            "explanation": "Labor demand is determined by Marginal Revenue Product (MRP = MP * P_output). An increase in product price (P_output) or an increase in worker productivity (MP) increases MRP, shifting the labor demand curve to the right.",
            "distractorTip": "Labor demand shifts right if (1) output price rises, (2) worker productivity rises, or (3) price of substitute resources rises."
          },
          {
            "id": "micro5-l1-q3",
            "stem": "Why is the demand for labor referred to as a 'derived demand' in microeconomics?",
            "options": [
              "Because labor wages are derived from minimum wage legislation.",
              "Because the supply of workers is determined by educational requirements.",
              "Because the demand for workers is directly dependent on consumer demand for the final goods and services those workers produce.",
              "Because labor demand is derived exclusively from interest rates on capital."
            ],
            "correctIndex": 2,
            "explanation": "Factor demand is called derived demand because firms do not hire workers or capital for direct personal consumption; rather, their demand for inputs is derived from the consumer demand for the finished output that those inputs create.",
            "distractorTip": "If demand for cars increases, the derived demand for auto assembly workers and automotive steel shifts right."
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "micro-u5-l2",
        "topicNumber": "Topic 5.2",
        "name": "Marginal Revenue Product & Marginal Factor Cost",
        "subtitle": "Formulas and wage-taker conditions",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro5-l2-q1",
            "stem": "A firm operating in a perfectly competitive product market sells t-shirts for $10 each. Hiring a 4th worker increases total t-shirt output from 50 to 65 shirts per day. What is the Marginal Revenue Product (MRP) of the 4th worker?",
            "options": [
              "$150",
              "$650",
              "$15",
              "$500"
            ],
            "correctIndex": 0,
            "explanation": "Marginal Product (MP) of the 4th worker = 65 - 50 = 15 shirts. Marginal Revenue Product (MRP) = MP * Price of Output = 15 shirts * $10/shirt = $150. The 4th worker generates $150 of additional revenue for the firm.",
            "distractorTip": "MRP = Marginal Product * Price of Output (in competitive product markets)."
          },
          {
            "id": "micro5-l2-q2",
            "stem": "In a perfectly competitive labor market, what is the shape of the labor supply curve facing an individual hiring firm, and what does it equal?",
            "options": [
              "Downward-sloping, equal to Marginal Revenue Product.",
              "Perfectly horizontal (elastic), equal to the market wage and Marginal Factor Cost (Wage = MFC).",
              "Upward-sloping, equal to Average Variable Cost.",
              "Perfectly vertical (inelastic), equal to total labor population."
            ],
            "correctIndex": 1,
            "explanation": "An individual firm in a competitive labor market is a wage taker: it can hire as many workers as it wants at the market wage. Therefore, the labor supply curve facing the firm is perfectly horizontal (elastic), where Supply = Wage = Marginal Factor Cost (MFC).",
            "distractorTip": "Competitive labor market: Firm is a wage-taker! Supply of labor to the firm is horizontal: Wage = MFC."
          },
          {
            "id": "micro5-l2-q3",
            "stem": "A firm sells its output in a perfectly competitive market for \\$5 per unit. The 4th worker hired adds 6 units of output per hour. What is the Marginal Revenue Product ($MRP$) of the 4th worker?",
            "options": [
              "\\$30 per hour",
              "\\$11 per hour",
              "\\$1.20 per hour",
              "\\$24 per hour"
            ],
            "correctIndex": 0,
            "explanation": "For a price-taking firm in the product market, Marginal Revenue Product equals Marginal Product times Product Price: $MRP = MP \\times P$. Here, $MRP = 6 \\times \\$5 = \\$30$ per hour.",
            "distractorTip": "$MRP = MP \\times MR$ (or $MP \\times P$ when selling in a competitive product market)."
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "micro-u5-l3",
        "topicNumber": "Topic 5.3",
        "name": "Profit-Maximizing Resource Hiring Rule",
        "subtitle": "MRP = MFC condition and calculations",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro5-l3-q1",
            "stem": "A competitive firm discovers that at its current employment level, the Marginal Revenue Product of the last worker hired is $180 per day, while the market wage (MFC) is $120 per day. To maximize total profit, what should the firm do?",
            "options": [
              "Fire workers until MRP falls to zero.",
              "Lower the wage offered to $100 per day.",
              "Hire additional workers, because MRP exceeds MFC ($180 > $120).",
              "Maintain current employment, because profit per worker is $60."
            ],
            "correctIndex": 2,
            "explanation": "The profit-maximizing hiring rule dictates hiring workers up to the point where MRP = MFC. If MRP > MFC ($180 > $120), hiring one more worker adds $60 to total profit. The firm should hire more workers until diminishing marginal returns bring MRP down to equal $120.",
            "distractorTip": "Resource hiring rule: Hire more workers if MRP > MFC! Stop when MRP = MFC."
          },
          {
            "id": "micro5-l3-q2",
            "stem": "A firm sells chairs for $20 each in a competitive market and hires labor at $100 per day. The 1st worker produces 10 chairs, the 2nd produces 9, the 3rd produces 7, the 4th produces 5, and the 5th produces 3. How many workers should the firm hire to maximize profit?",
            "options": [
              "1 worker",
              "2 workers",
              "3 workers",
              "4 workers, because the 4th worker's MRP ($100) equals the daily wage ($100)."
            ],
            "correctIndex": 3,
            "explanation": "Calculate Marginal Revenue Product (MRP = MP * P) for each worker: Worker 1: 10 * $20 = $200. Worker 2: 9 * $20 = $180. Worker 3: 7 * $20 = $140. Worker 4: 5 * $20 = $100. Worker 5: 3 * $20 = $60. The wage is $100 per day. The firm hires up to MRP = MFC, which occurs at the 4th worker ($100 = $100). Hiring the 5th worker would lose $40.",
            "distractorTip": "Calculate MRP = MP * Price for each worker, and compare with the daily wage. Stop where MRP = Wage!"
          },
          {
            "id": "micro5-l3-q3",
            "stem": "If a competitive firm hires workers in a competitive labor market where the going wage is \\$20 per hour, how many workers should the firm employ to maximize profits?",
            "options": [
              "Hire workers until total output is maximized and marginal product is zero.",
              "Hire workers until the wage rate equals average product of labor.",
              "Hire workers until the average revenue product equals the wage rate.",
              "Hire workers up to the point where Marginal Revenue Product equals the wage ($MRP = W$)."
            ],
            "correctIndex": 3,
            "explanation": "The profit-maximizing resource employment rule states that a firm should hire variable inputs up to the quantity where Marginal Revenue Product equals Marginal Resource Cost ($MRP = MRC$). In a competitive labor market, $MRC = \\text{Wage}$, so the firm hires until $MRP = W = \\$20$.",
            "distractorTip": "Profit maximization in factor markets: $MRP = MRC$. If $MRP > W$, hire more; if $MRP < W$, lay off workers."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "micro-u5-l4",
        "topicNumber": "Topic 5.5",
        "name": "Monopsony Labor Market",
        "subtitle": "Single buyer of labor and MFC above labor supply",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro5-l4-q1",
            "stem": "Why does the Marginal Factor Cost (MFC) curve lie strictly ABOVE the labor supply curve in a monopsony labor market?",
            "options": [
              "Because to hire an additional worker, the monopsonist must raise the wage for that marginal worker AND for all previously hired workers.",
              "Because the government imposes a binding minimum wage on monopsonies.",
              "Because worker productivity declines exponentially as employment rises.",
              "Because the monopsonist operates in a perfectly competitive product market."
            ],
            "correctIndex": 0,
            "explanation": "A monopsony is the sole employer in a town. To attract an extra worker, it must move up the upward-sloping market labor supply curve, paying a higher wage. Because it must pay this higher wage to all existing workers as well, the marginal cost of hiring an additional worker (MFC) exceeds the wage on the supply curve.",
            "distractorTip": "Monopsony MFC > Supply of Labor: Raising the wage to attract one more worker raises wages for ALL workers!"
          },
          {
            "id": "micro5-l4-q2",
            "stem": "Compared to a competitive labor market equilibrium, what are the wage and employment outcomes in a monopsony labor market?",
            "options": [
              "The monopsony hires more workers and pays a higher wage than a competitive market.",
              "The monopsony hires fewer workers and pays a lower wage than a competitive market.",
              "The monopsony pays a wage equal to Marginal Revenue Product.",
              "The monopsony achieves allocative efficiency in labor distribution."
            ],
            "correctIndex": 1,
            "explanation": "A monopsonist determines employment where MRP = MFC, which results in fewer workers hired than a competitive market (where MRP = Supply). It then pays the wage indicated by the labor supply curve for that lower employment level, resulting in both lower employment and lower wages, creating deadweight loss.",
            "distractorTip": "Monopsony exploitation: Hires FEWER workers and pays a LOWER wage than a competitive labor market!"
          },
          {
            "id": "micro5-l4-q3",
            "stem": "Why does a monopsonistic employer face a Marginal Factor Cost ($MFC$) curve that lies strictly above the market Labor Supply curve?",
            "options": [
              "The monopsonist must lower output prices to sell additional units.",
              "To hire an additional worker, the firm must offer a higher wage and raise the wage for all currently employed workers.",
              "Labor unions legally mandate progressive overtime bonuses.",
              "The supply of labor is perfectly elastic in a monopsonistic company town."
            ],
            "correctIndex": 1,
            "explanation": "A monopsony is the sole buyer of labor in a local market and faces an upward-sloping labor supply curve. To attract another worker, it must raise the wage rate; because it cannot wage-discriminate, it must pay that higher wage to all existing workers, causing $MFC > \\text{Wage}$.",
            "distractorTip": "Just as $MR < P$ for a monopoly because it must drop price on all units, $MFC > W$ for a monopsony because it must raise wages on all workers."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "micro-u5-l5",
        "topicNumber": "Topic 5.6",
        "name": "Least-Cost Combination of Inputs Rule",
        "subtitle": "Cost minimization and input substitution",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro5-l5-q1",
            "stem": "A manufacturing firm employs labor and capital. The marginal product of labor is 60 units and the wage is $15/hr. The marginal product of capital is 100 units and the rental price of capital is $50/hr. To minimize the cost of producing its current output level, what should the firm do?",
            "options": [
              "Hire more capital and less labor, because capital has a higher raw marginal product.",
              "Keep the current input combination unchanged, because both inputs have positive marginal products.",
              "Hire more labor and less capital, because the marginal product per dollar of labor (4 units/$) exceeds that of capital (2 units/$).",
              "Shut down operations until capital rental rates decrease."
            ],
            "correctIndex": 2,
            "explanation": "The Least-Cost Rule compares marginal product per dollar: MP_L / P_L = 60 / 15 = 4 units per dollar. MP_K / P_K = 100 / 50 = 2 units per dollar. Because labor yields 4 units per dollar versus 2 for capital, the firm gets more output per dollar from labor. Employing more labor and less capital lowers total production cost.",
            "distractorTip": "Least-Cost Rule: Compare MP_L / P_L with MP_K / P_K. Shift toward the input with higher MP per dollar!"
          },
          {
            "id": "micro5-l5-q2",
            "stem": "What is the condition for a firm to maximize profit using both labor (L) and capital (K) in competitive factor markets?",
            "options": [
              "MP_L = MP_K and P_L = P_K.",
              "MRP_L = Wage and MRP_K = 0.",
              "TR = TC and MR = MC.",
              "MRP_L / P_L = MRP_K / P_K = 1."
            ],
            "correctIndex": 3,
            "explanation": "Profit maximization requires that each factor be employed up to the point where its marginal revenue product equals its price (MRP_L = P_L and MRP_K = P_K). Dividing both sides yields MRP_L / P_L = MRP_K / P_K = 1, ensuring both cost minimization and profit-maximizing output.",
            "distractorTip": "Least-Cost Rule: MP_L / P_L = MP_K / P_K; Profit-Maximizing Input Rule: MRP_L / P_L = MRP_K / P_K = 1."
          },
          {
            "id": "micro5-l5-q3",
            "stem": "A manufacturing firm uses labor ($L$) and capital ($K$). At current levels, $MP_L = 20, W = \\$10, MP_K = 60,$ and the rental price of capital $R = \\$20$. To minimize total production costs for its current output, what should the firm do?",
            "options": [
              "Maintain the current input mix because marginal products are positive.",
              "Employ more capital and less labor because capital delivers a higher marginal product per dollar.",
              "Employ more labor and less capital to lower payroll taxes.",
              "Reduce both inputs equally to achieve productive efficiency."
            ],
            "correctIndex": 1,
            "explanation": "Apply the least-cost rule: $MP_L / P_L = 20 / 10 = 2$ units of output per dollar. $MP_K / P_K = 60 / 20 = 3$ units of output per dollar. Capital provides more output per dollar ($3 > 2$), so the firm should hire more capital and less labor until $MP_L / P_L = MP_K / P_K$.",
            "distractorTip": "Least-cost input rule: $\\frac{MP_L}{P_L} = \\frac{MP_K}{P_K}$. Shift spending toward the factor with the higher marginal product per dollar."
          }
        ]
      },
      {
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "micro-u5-l6",
        "topicNumber": "Topic 5.4",
        "name": "Minimum Wage in Monopsony vs. Competitive Labor Markets",
        "subtitle": "How minimum wages can increase employment in a monopsony",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "micro5-l6-q1",
            "stem": "Why can enacting a modest minimum wage in a MONOPSONY labor market paradoxically INCREASE total employment, unlike in a competitive labor market?",
            "options": [
              "Because the minimum wage flattens the labor supply curve facing the firm, making Marginal Factor Cost equal to the minimum wage ($MFC = W_{min}$) and eliminating the incentive to restrict hiring.",
              "Because monopsonists receive federal tax exemptions when wages rise.",
              "Because workers' marginal productivity instantly doubles under statutory wage floors.",
              "Because the monopsonist transforms into a consumer cooperative."
            ],
            "correctIndex": 0,
            "explanation": "In a monopsony, the firm restricts hiring because hiring an extra worker forces it to raise wages for all previous workers ($MFC > Wage$). Imposing a binding minimum wage between the monopsony wage and the competitive wage makes the firm a wage taker up to that supply point ($MFC = W_{min}$). Because hiring an additional worker no longer raises wages for others, the firm hires MORE workers!",
            "distractorTip": "In a monopsony, a moderate minimum wage ELIMINATES the upward-sloping MFC spike, INCREASING employment toward the competitive level!"
          },
          {
            "id": "micro5-l6-q2",
            "stem": "In a perfectly competitive labor market, what is the standard microeconomic effect of imposing a binding minimum wage above the market equilibrium wage?",
            "options": [
              "Employment increases and deadweight loss is eliminated.",
              "Quantity of labor supplied exceeds quantity demanded, creating a surplus of labor (unemployment) and deadweight loss.",
              "The labor demand curve shifts to the right.",
              "Firms earn positive economic profit from higher payroll costs."
            ],
            "correctIndex": 1,
            "explanation": "In a competitive labor market, a minimum wage set above equilibrium acts as a price floor. At the higher wage, fewer workers are demanded ($Q_d$ falls) while more workers seek jobs ($Q_s$ rises), creating unemployment ($Q_s - Q_d$) and deadweight loss.",
            "distractorTip": "Competitive labor market minimum wage: Creates labor surplus (unemployment) and deadweight loss!"
          },
          {
            "id": "micro5-l6-q3",
            "stem": "What unique outcome can occur when a binding minimum wage is imposed on a monopsonistic labor market, unlike a competitive labor market?",
            "options": [
              "Both the wage rate and the level of employment can increase simultaneously without creating unemployment.",
              "Employment must immediately collapse to zero.",
              "The marginal factor cost curve shifts vertically upward above the labor supply curve.",
              "The firm's demand for labor becomes perfectly vertical."
            ],
            "correctIndex": 0,
            "explanation": "In a monopsony, setting a minimum wage above the monopsony wage (up to the intersection of labor supply and $MRP$) makes the firm a price-taker for labor up to that supply level. This eliminates the need to raise wages on all prior workers, flattening $MFC$ to the minimum wage and incentivizing the monopsonist to hire MORE workers.",
            "distractorTip": "In competitive labor markets, a minimum wage causes unemployment; in monopsonies, an appropriate minimum wage can INCREASE employment."
          }
        ]
      },
      {
        "id": 507,
        "unitIndex": 5,
        "levelNumber": 7,
        "uniqueKey": "micro-u5-l7",
        "topicNumber": "Topic 5.2",
        "name": "Labor Supply Elasticity & Backward-Bending Supply",
        "subtitle": "Income effect vs substitution effect in labor supply",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "micro5-l7-q1",
            "stem": "When an individual's wage increases significantly, the substitution effect encourages the worker to work MORE hours (leisure becomes more expensive). However, if the worker chooses to work FEWER hours at very high wages (the backward-bending portion of labor supply), what explains this behavior?",
            "options": [
              "The substitution effect has completely vanished.",
              "The worker's marginal revenue product has turned negative.",
              "The income effect dominates: the worker is wealthy enough to purchase more leisure (a normal good), choosing more free time over additional income.",
              "The government taxes 100% of overtime earnings."
            ],
            "correctIndex": 2,
            "explanation": "Leisure is a normal good. A wage increase has two conflicting effects: (1) Substitution effect: leisure costs more in foregone wages, incentivizing work. (2) Income effect: higher wage increases purchasing power, allowing the worker to afford more leisure. When wages become very high, the income effect overpowers the substitution effect, causing labor supply to bend backward.",
            "distractorTip": "Backward-bending labor supply: Income effect (desire for leisure) overpowers substitution effect at high wages!"
          },
          {
            "id": "micro5-l7-q2",
            "stem": "Which of the following would cause an outward (rightward) shift in the market supply curve of registered nurses?",
            "options": [
              "A strict new certification requirement that adds two years to nursing degrees.",
              "An increase in wages paid to physical therapists (an alternative occupation for nurses).",
              "A decrease in the retirement age for hospital nurses.",
              "A government program that fully subsidizes nursing school tuition and increases immigration visas for medical professionals."
            ],
            "correctIndex": 3,
            "explanation": "Labor supply shifts rightward when the pool of qualified workers expands, licensing requirements are eased, working conditions improve, or education is subsidized. Subsidizing tuition and expanding work visas directly expands the supply of nurses.",
            "distractorTip": "Shifters of labor supply: Number of qualified workers, training/education requirements, alternative job wages, and non-monetary amenities."
          },
          {
            "id": "micro5-l7-q3",
            "stem": "What economic force causes an individual's labor supply curve to bend backward at very high wage rates?",
            "options": [
              "The substitution effect dominates the income effect, making work more appealing.",
              "Decreasing marginal revenue products in competitive factor markets.",
              "The income effect dominates the substitution effect, as higher earnings allow workers to afford more leisure time.",
              "Federal income tax brackets drop to zero for high earners."
            ],
            "correctIndex": 2,
            "explanation": "As wages rise, the substitution effect encourages working more (leisure becomes more expensive). However, higher wages also increase total wealth; because leisure is a normal good, the income effect encourages taking more leisure. At sufficiently high wages, the income effect dominates, causing hours worked to decrease.",
            "distractorTip": "Upward-sloping labor supply = Substitution effect > Income effect; Backward-bending labor supply = Income effect > Substitution effect."
          }
        ]
      },
      {
        "id": 508,
        "unitIndex": 5,
        "levelNumber": 8,
        "uniqueKey": "micro-u5-l8",
        "topicNumber": "Unit 5 Boss",
        "name": "Apex Factor Market Foundry Crucible",
        "subtitle": "Comprehensive factor pricing, MRP, and least-cost optimization",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "micro5-l8-q1",
            "stem": "A textile factory uses automated looms (capital) and weavers (labor). The wage is \\$20/hr, and the rental rate of a loom is \\$40/hr. The marginal product of a weaver is 10 yards of fabric per hour. If the firm is currently operating at the least-cost combination of inputs, what MUST be the marginal product of an automated loom?",
            "options": [
              "20 yards per hour",
              "5 yards per hour",
              "40 yards per hour",
              "80 yards per hour"
            ],
            "correctIndex": 0,
            "explanation": "The Least-Cost Rule mandates: $MP_L / P_L = MP_K / P_K$. Here, $MP_L / P_L = 10 / 20 = 0.5$ yards per dollar. For the loom: $MP_K / 40 = 0.5$. Solving for $MP_K$: $MP_K = 0.5 * 40 = 20$ yards per hour.",
            "distractorTip": "Least-Cost Rule formula: MP_L / Wage = MP_K / Rental Rate. Set both ratios equal and solve for the unknown MP!"
          },
          {
            "id": "micro5-l8-q2",
            "stem": "If the price of robotic automation equipment decreases dramatically, how will this affect the demand for human assembly-line workers if robots and human workers are strong SUBSTITUTES?",
            "options": [
              "Demand for human workers will increase due to derived demand.",
              "Demand for human workers will decrease (shift left) because the substitution effect of cheaper robots outweighs any output expansion effect.",
              "The wage paid to human workers will rise to compensate for automation.",
              "The marginal revenue product of human workers will become vertical."
            ],
            "correctIndex": 1,
            "explanation": "When two inputs are substitutes, a drop in the price of one input triggers two effects: (1) Substitution effect: the firm replaces human workers with cheaper robots (demand for labor falls). (2) Output effect: lower production costs increase overall output, raising demand for all inputs. When inputs are strong substitutes, the substitution effect dominates, shifting labor demand to the left.",
            "distractorTip": "Cheaper substitute machinery: If substitution effect > output effect, demand for labor DECREASES."
          },
          {
            "id": "micro5-l8-q3",
            "stem": "A competitive firm hires labor in a competitive factor market where the market wage is \\$40. If product price is \\$4 and the firm's production function has $MP_L = 25 - 0.5L$, how many workers $L$ should the firm hire?",
            "options": [
              "$L = 50$",
              "$L = 30$",
              "$L = 10$",
              "$L = 20$"
            ],
            "correctIndex": 1,
            "explanation": "Set $MRP = W$. $MRP = MP_L \\times P = (25 - 0.5L) \\times 4 = 100 - 2L$. Equating to wage: $100 - 2L = 40 \\implies 2L = 60 \\implies L = 30$.",
            "distractorTip": "Multiply marginal product by product price to get $MRP$, then set equal to the wage rate $W$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 6,
    "unitId": "u6",
    "title": "Unit 6: Market Failure and the Role of Government",
    "shortTitle": "Unit 6: Market Failure",
    "description": "Social efficiency (MSB=MSC), negative externalities and Pigouvian taxes, positive externalities and subsidies, public goods, free riders, tragedy of the commons, Lorenz curve, and Gini coefficient",
    "examWeight": "8–12% of AP Micro Exam",
    "biome": {
      "name": "Pigouvian Sanctuary & Commons Basin",
      "icon": "🌳",
      "accentColor": "#10B981",
      "secondaryColor": "#047857",
      "groundGradient": "from-emerald-100 via-green-50 to-teal-100",
      "cardBorder": "border-emerald-600",
      "trailColor": "#10b981",
      "nodeRing": "ring-emerald-400/40",
      "skyTint": "from-emerald-50 to-green-50/30"
    },
    "levels": [
      {
        "id": 601,
        "unitIndex": 6,
        "levelNumber": 1,
        "uniqueKey": "micro-u6-l1",
        "topicNumber": "Topic 6.1",
        "name": "Social Efficiency & Allocative Efficiency",
        "subtitle": "MSB = MSC condition and deadweight loss",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "micro6-l1-q1",
            "stem": "In microeconomics, at what output level is a market considered socially optimal (allocatively efficient)?",
            "options": [
              "Where Marginal Social Benefit equals Marginal Social Cost (MSB = MSC).",
              "Where Total Revenue equals Total Cost.",
              "Where consumer surplus is zero and producer surplus is maximized.",
              "Where price is set at the minimum of Average Variable Cost."
            ],
            "correctIndex": 0,
            "explanation": "Allocative efficiency and social optimality are achieved when the marginal benefit society derives from the last unit equals the marginal cost to society of producing it: MSB = MSC. Any departure generates deadweight loss.",
            "distractorTip": "Socially optimal output condition: MSB = MSC!"
          },
          {
            "id": "micro6-l1-q2",
            "stem": "If a market produces an output where Marginal Social Cost exceeds Marginal Social Benefit (MSC > MSB), what is the economic outcome?",
            "options": [
              "The market is underproducing, and expanding output would increase net social welfare.",
              "The market is overproducing, creating a deadweight loss because the cost of the last units exceeds their societal value.",
              "The market has achieved Pareto optimality.",
              "Consumer surplus is maximized at zero deadweight loss."
            ],
            "correctIndex": 1,
            "explanation": "When MSC > MSB, society is spending more scarce resources to produce additional units than consumers value them. The market is overproducing, creating deadweight loss. Society would be better off reducing output to where MSB = MSC.",
            "distractorTip": "MSC > MSB = Overproduction (produce less!); MSB > MSC = Underproduction (produce more!)."
          },
          {
            "id": "micro6-l1-q3",
            "stem": "Which of the following conditions represents societal allocative efficiency in a market?",
            "options": [
              "Total consumer surplus equals total producer surplus.",
              "Price equals the minimum of Average Variable Cost ($P = \\min AVC$).",
              "Marginal Social Benefit equals Marginal Social Cost ($MSB = MSC$).",
              "All market production externalities are converted into government tax revenue."
            ],
            "correctIndex": 2,
            "explanation": "Allocative efficiency is achieved when an economy allocates resources to produce the combination of goods and services most desired by society, occurring where the marginal benefit to society equals the marginal cost to society ($MSB = MSC$).",
            "distractorTip": "Social efficiency rule: $MSB = MSC$. In the absence of externalities, this corresponds to $P = MC$."
          }
        ]
      },
      {
        "id": 602,
        "unitIndex": 6,
        "levelNumber": 2,
        "uniqueKey": "micro-u6-l2",
        "topicNumber": "Topic 6.2",
        "name": "Negative Externalities & Pigouvian Taxes",
        "subtitle": "Spillover costs and internalizing externalities",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro6-l2-q1",
            "stem": "A chemical plant dumps toxic effluent into a river, imposing pollution costs on downstream communities. What is the relationship between private and social cost curves, and what is the market failure?",
            "options": [
              "Marginal Private Cost equals Marginal Social Cost, so the market is efficient.",
              "Marginal Social Benefit exceeds Marginal Private Benefit, causing underproduction.",
              "Marginal Social Cost exceeds Marginal Private Cost (MSC > MPC), causing the unregulated free market to overproduce chemicals.",
              "Marginal Private Cost exceeds Marginal Social Cost, causing underproduction."
            ],
            "correctIndex": 2,
            "explanation": "Pollution is a negative production externality: Marginal Social Cost = Marginal Private Cost + Marginal External Damage (MSC > MPC). Because the firm ignores external damage, the unregulated market produces where MPC = MPB, resulting in overproduction (Q_market > Q_optimal) and deadweight loss.",
            "distractorTip": "Negative Externality: MSC > MPC. Unregulated market OVERPRODUCES and underprices the good!"
          },
          {
            "id": "micro6-l2-q2",
            "stem": "How can the government intervene to correct a negative production externality and achieve the socially optimal output level?",
            "options": [
              "Provide a per-unit subsidy to the polluting firm.",
              "Establish a price floor below the market equilibrium price.",
              "Mandate that the firm hire additional workers.",
              "Impose a per-unit Pigouvian tax on the producer equal to the marginal external damage (MEC)."
            ],
            "correctIndex": 3,
            "explanation": "A per-unit Pigouvian tax equal to the marginal external damage shifts the firm's private supply curve (MPC) up to coincide with the Marginal Social Cost (MSC) curve. This internalizes the externality, raising the price to consumers and reducing equilibrium output to the socially optimal level (MSB = MSC).",
            "distractorTip": "Negative Externality Remedy: Per-unit Pigouvian TAX equal to marginal external cost!"
          },
          {
            "id": "micro6-l2-q3",
            "stem": "In the presence of a negative production externality (such as chemical wastewater discharge), how does the free-market equilibrium compare to the socially optimal outcome?",
            "options": [
              "The free market produces more than the socially optimal quantity ($Q_{\\text{market}} > Q_{\\text{optimal}}$) at too low a price.",
              "The free market produces less than the socially optimal quantity at too high a price.",
              "The free market achieves allocative efficiency automatically through market competition.",
              "Deadweight loss is entirely avoided because private costs exceed social costs."
            ],
            "correctIndex": 0,
            "explanation": "Negative externalities impose external costs on third parties, meaning Marginal Social Cost exceeds Marginal Private Cost ($MSC > MPC$). Private producers ignore external costs, overproducing the good ($Q_{\\text{market}} > Q_{\\text{optimal}}$) and charging a price that understates true societal cost.",
            "distractorTip": "Negative externalities lead to OVERPRODUCTION ($Q_{\\text{market}} > Q_{\\text{opt}}$); positive externalities lead to UNDERPRODUCTION ($Q_{\\text{market}} < Q_{\\text{opt}}$)."
          }
        ]
      },
      {
        "id": 603,
        "unitIndex": 6,
        "levelNumber": 3,
        "uniqueKey": "micro-u6-l3",
        "topicNumber": "Topic 6.2",
        "name": "Positive Externalities & Pigouvian Subsidies",
        "subtitle": "Spillover benefits and correcting underproduction",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "micro6-l3-q1",
            "stem": "When individuals receive flu vaccinations, they protect not only themselves but also reduce disease transmission to unvaccinated individuals. In an unregulated free market, what is the economic outcome?",
            "options": [
              "Marginal Social Benefit exceeds Marginal Private Benefit (MSB > MPB), causing the unregulated free market to underproduce vaccinations.",
              "The market overproduces vaccines, creating a deadweight loss from excessive healthcare spending.",
              "Marginal Private Benefit exceeds Marginal Social Benefit, creating an economic surplus.",
              "The market achieves socially optimal efficiency automatically without intervention."
            ],
            "correctIndex": 0,
            "explanation": "Vaccinations create a positive consumption externality (spillover benefit): Marginal Social Benefit = Marginal Private Benefit + Marginal External Benefit (MSB > MPB). Unregulated consumers only purchase based on private benefits (MPB = MPC), resulting in underproduction (Q_market < Q_optimal).",
            "distractorTip": "Positive Externality: MSB > MPB. Unregulated market UNDERPRODUCES relative to socially optimal quantity!"
          },
          {
            "id": "micro6-l3-q2",
            "stem": "What public policy intervention can the government use to achieve allocative efficiency in a market with a positive consumption externality?",
            "options": [
              "Levy an excise tax on pharmaceutical companies.",
              "Provide a per-unit Pigouvian subsidy to consumers or suppliers equal to the marginal external benefit (MEB).",
              "Impose a binding price ceiling on vaccine sales.",
              "Outlaw private health clinics and establish a state monopoly."
            ],
            "correctIndex": 1,
            "explanation": "A per-unit subsidy equal to the marginal external benefit shifts the demand/supply curve, encouraging greater consumption and expanding market output from the underproduced level to the socially optimal quantity where MSB = MSC, eliminating deadweight loss.",
            "distractorTip": "Positive Externality Remedy: Per-unit Pigouvian SUBSIDY equal to marginal external benefit!"
          },
          {
            "id": "micro6-l3-q3",
            "stem": "To correct the market failure caused by a positive consumption externality (such as vaccinations), what policy tool should the government implement?",
            "options": [
              "A per-unit excise tax on vaccine pharmaceutical manufacturers equal to the external cost.",
              "A binding price ceiling set strictly below the market equilibrium price.",
              "A legal prohibition on private medical clinics.",
              "A per-unit Pigouvian subsidy to consumers or producers equal to the Marginal External Benefit."
            ],
            "correctIndex": 3,
            "explanation": "Positive consumption externalities mean $MSB > MPB$. The private market underproduces relative to the social optimum. A per-unit subsidy equal to the Marginal External Benefit ($MEB$) lowers the effective price to consumers, shifting demand to $MSB$ and achieving the socially optimal output.",
            "distractorTip": "Subsidies correct positive externalities; per-unit Pigouvian taxes correct negative externalities."
          }
        ]
      },
      {
        "id": 604,
        "unitIndex": 6,
        "levelNumber": 4,
        "uniqueKey": "micro-u6-l4",
        "topicNumber": "Topic 6.3",
        "name": "Public Goods, Free-Riders & Common Resources",
        "subtitle": "Rivalry, excludability, and tragedy of the commons",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro6-l4-q1",
            "stem": "Public goods such as national defense and lighthouses are characterized by which two economic properties, and what market failure problem arises?",
            "options": [
              "Excludable and rival; principal-agent problem.",
              "Excludable and non-rival; moral hazard problem.",
              "Non-excludable and non-rival; the Free-Rider Problem, which causes private markets to underproduce or fail to produce the good.",
              "Non-excludable and rival; adverse selection problem."
            ],
            "correctIndex": 2,
            "explanation": "Public goods are non-excludable (non-payers cannot be prevented from enjoying the good) and non-rival (one person's consumption does not reduce availability to others). The free-rider problem occurs because individuals can benefit without paying, so private firms cannot collect sufficient revenue, necessitating government provision through taxation.",
            "distractorTip": "Public Goods: Non-excludable & Non-rival. Problem: Free-Rider Problem."
          },
          {
            "id": "micro6-l4-q2",
            "stem": "Common pool resources (such as wild fish stocks in international waters) are non-excludable but rival in consumption. What economic dilemma inevitably occurs without property rights or regulation?",
            "options": [
              "The Free-Rider Problem, leading to a surplus of wild fish.",
              "A natural monopoly where a single fishing fleet dominates the ocean.",
              "Allocative efficiency achieved through unregulated competition.",
              "The Tragedy of the Commons, where self-interested harvesters deplete and overexploit the resource."
            ],
            "correctIndex": 3,
            "explanation": "Common resources are non-excludable (anyone can fish) but rival (fish caught by one boat are unavailable to others). Without property rights or government quotas/permits, individual fishers ignore the depletion cost imposed on others, leading to overexploitation and collapse (Tragedy of the Commons).",
            "distractorTip": "Common Pool Resources: Non-excludable but RIVAL. Problem: Tragedy of the Commons (overconsumption/depletion)!"
          },
          {
            "id": "micro6-l4-q3",
            "stem": "Why are pure public goods (such as national defense and public lighthouses) systematically underprovided or not provided at all by unregulated private markets?",
            "options": [
              "They are non-rival and non-excludable, leading to the free-rider problem where individuals can enjoy benefits without paying.",
              "Their marginal cost of production is infinite.",
              "They are rival in consumption and strictly excludable by private pricing mechanisms.",
              "Governments pass antitrust statutes making private provision illegal."
            ],
            "correctIndex": 0,
            "explanation": "Pure public goods are non-excludable (non-payers cannot be prevented from benefiting) and non-rival (one person's use does not diminish another's). Because people cannot be excluded, consumers have an incentive to 'free-ride', preventing private firms from profitably collecting revenue.",
            "distractorTip": "Non-excludable = impossible to stop non-payers; Non-rival = one person's consumption doesn't diminish another's. This leads to the free-rider problem."
          }
        ]
      },
      {
        "id": 605,
        "unitIndex": 6,
        "levelNumber": 5,
        "uniqueKey": "micro-u6-l5",
        "topicNumber": "Topic 6.5",
        "name": "Income Inequality, Lorenz Curve & Tax Systems",
        "subtitle": "Gini coefficient, progressive, proportional, and regressive taxation",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro6-l5-q1",
            "stem": "How does the Lorenz Curve represent income inequality, and what does a Gini Coefficient of 0 versus 1 signify?",
            "options": [
              "The Lorenz Curve plots cumulative percent of income against cumulative percent of households; Gini = 0 indicates perfect income equality, while Gini = 1 indicates complete inequality (one household has all income).",
              "The Lorenz Curve plots inflation against unemployment; Gini = 0 indicates maximum stagflation.",
              "The Lorenz Curve illustrates marginal tax brackets; Gini = 0 indicates a regressive tax system.",
              "The Lorenz Curve measures deadweight loss from tariffs; Gini = 1 indicates free trade."
            ],
            "correctIndex": 0,
            "explanation": "The Lorenz Curve plots the cumulative percentage of total national income earned by cumulative percentages of the population. The 45-degree diagonal line represents perfect equality. The Gini Coefficient is the ratio of the area between the 45-degree line and the Lorenz curve to the total area under the diagonal. Gini = 0 represents perfect equality; Gini = 1 represents absolute inequality.",
            "distractorTip": "Gini Coefficient: 0 = Complete Equality (everyone earns same); 1 = Complete Inequality (one person has everything)."
          },
          {
            "id": "micro6-l5-q2",
            "stem": "A retail sales tax of 8% on all clothing and grocery purchases requires lower-income households to pay a higher percentage of their annual income in sales taxes than wealthy households. How is this tax structure classified?",
            "options": [
              "A progressive tax structure.",
              "A regressive tax structure.",
              "A proportional (flat) tax structure.",
              "A Pigouvian lump-sum subsidy."
            ],
            "correctIndex": 1,
            "explanation": "A regressive tax takes a larger percentage of income from low-income earners than from high-income earners. Because low-income households spend a larger fraction of their income on immediate consumption goods, sales taxes absorb a higher proportion of their total income, making them regressive.",
            "distractorTip": "Progressive: Higher tax % as income rises; Proportional: Same tax % for all; Regressive: Higher tax % on lower incomes."
          },
          {
            "id": "micro6-l5-q3",
            "stem": "If Country A has a Gini coefficient of 0.22 while Country B has a Gini coefficient of 0.54, what does this indicate about income distribution?",
            "options": [
              "Country A has a significantly more equal distribution of income than Country B.",
              "Country B has a perfectly equal distribution of income.",
              "Country A has higher average income per capita than Country B.",
              "Country B has zero poverty."
            ],
            "correctIndex": 0,
            "explanation": "The Gini coefficient measures income inequality from 0 (perfect equality, everyone has identical income) to 1 (perfect inequality, one person has all income). Country A's lower score (0.22 vs 0.54) signifies a much more equitable distribution of income.",
            "distractorTip": "Gini coefficient: 0 = complete equality; 1 = complete inequality. The closer to 0, the more equal the distribution."
          }
        ]
      },
      {
        "id": 606,
        "unitIndex": 6,
        "levelNumber": 6,
        "uniqueKey": "micro-u6-l6",
        "topicNumber": "Topic 6.2",
        "name": "The Coase Theorem & Private Bargaining",
        "subtitle": "Property rights and zero transaction cost efficiency",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "micro6-l6-q1",
            "stem": "According to the Coase Theorem, private individuals can resolve externalities efficiently through bargaining without government intervention under which critical conditions?",
            "options": [
              "Government agencies dictate exact compensation prices.",
              "Transaction costs are prohibitively high and property rights are undefined.",
              "Property rights are clearly defined, number of bargaining parties is small, and transaction costs are negligible (near zero).",
              "Both parties operate under perfectly competitive product markets."
            ],
            "correctIndex": 2,
            "explanation": "The Coase Theorem asserts that when property rights are clearly assigned and transaction costs are near zero, private bargaining between affected parties will achieve an allocatively efficient outcome regardless of who initially holds the property right.",
            "distractorTip": "Coase Theorem requirements: (1) Clear property rights, (2) Low/zero transaction costs, (3) Small number of parties."
          },
          {
            "id": "micro6-l6-q2",
            "stem": "A beekeeper's bees pollinate a neighboring apple orchard (a positive externality). If transaction costs are zero and the beekeeper owns the pollination rights, what will happen according to the Coase Theorem?",
            "options": [
              "The beekeeper will poison the bees to extract compensation.",
              "The government must impose a binding price ceiling on honey.",
              "The orchard owner will abandon farming.",
              "The apple orchard owner will pay the beekeeper to maintain hives near the orchard, achieving the socially optimal level of pollination without government subsidy."
            ],
            "correctIndex": 3,
            "explanation": "Because pollination enhances apple yields, the orchard owner values the bees' presence. With zero transaction costs, the orchard owner negotiates a payment to the beekeeper that covers the cost of expanding hives, internalizing the positive externality and reaching the socially optimal output.",
            "distractorTip": "Coase Theorem: Self-interested private contracts can internalize externalities when bargaining costs are low!"
          },
          {
            "id": "micro6-l6-q3",
            "stem": "According to the Coase Theorem, when can private bargaining achieve an efficient resource allocation without government intervention in the presence of an externality?",
            "options": [
              "Only when government regulators assign property rights directly to municipal authorities.",
              "Only when property rights are clearly defined, transaction costs are negligible, and there are few parties involved.",
              "Only when the externality is a positive consumption benefit.",
              "Only when courts impose binding liability rules on both disputing parties."
            ],
            "correctIndex": 1,
            "explanation": "The Coase Theorem states that if property rights are well-defined, transaction costs are low/negligible, and negotiation involves relatively few parties, private entities can negotiate mutually advantageous bargains that internalize externalities and reach an efficient outcome.",
            "distractorTip": "Key Coase Theorem requirements: Well-defined property rights and zero (or very low) transaction costs."
          }
        ]
      },
      {
        "id": 607,
        "unitIndex": 6,
        "levelNumber": 7,
        "uniqueKey": "micro-u6-l7",
        "topicNumber": "Topic 6.4",
        "name": "Antitrust Legislation & Monopoly Regulation",
        "subtitle": "Sherman Act, Clayton Act, and anti-competitive practices",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "micro6-l7-q1",
            "stem": "What was the landmark purpose of historic United States antitrust statutes (such as the Sherman Antitrust Act of 1890 and the Clayton Act of 1914)?",
            "options": [
              "To promote market competition, prevent monopolies from forming through illegal conspiracies or mergers, and prohibit anti-competitive practices such as predatory pricing and tying contracts.",
              "To nationalize all private industrial corporations under federal ownership.",
              "To establish maximum wage ceilings for industrial labor unions.",
              "To eliminate international import tariffs on agricultural products."
            ],
            "correctIndex": 0,
            "explanation": "Antitrust laws are designed to protect consumer welfare and economic efficiency by curbing monopoly power, prohibiting price-fixing cartels, blocking anti-competitive horizontal mergers, and preventing restraint of trade.",
            "distractorTip": "Antitrust laws exist to promote competitive markets and prevent monopoly abuses!"
          },
          {
            "id": "micro6-l7-q2",
            "stem": "When two major telecommunication carriers with overlapping cellular networks propose a merger, the Federal Trade Commission (FTC) evaluates the merger's effect on market concentration. If the merger would substantially reduce competition and create high barriers, how will regulators respond?",
            "options": [
              "Award federal tax subsidies to the merging firms.",
              "Challenge and block the horizontal merger in federal court to prevent anti-competitive pricing power.",
              "Force all consumer phone subscriptions to become public goods.",
              "Mandate that both firms charge the socially optimal price ($P = MC$)."
            ],
            "correctIndex": 1,
            "explanation": "A horizontal merger unites direct competitors in the same industry. If regulators determine that the merger creates excessive market concentration (measured by the Herfindahl-Hirschman Index, HHI) and harms consumers through higher prices, the FTC or Department of Justice blocks the merger.",
            "distractorTip": "Horizontal mergers between direct competitors are closely scrutinized and blocked if they reduce competition."
          },
          {
            "id": "micro6-l7-q3",
            "stem": "Under the Sherman Antitrust Act of 1890 and Clayton Antitrust Act of 1914, which business practice is explicitly deemed an illegal per se violation?",
            "options": [
              "Price discrimination that does not substantially lessen competition.",
              "Entering a new industry through venture capital investments.",
              "Explicit price-fixing agreements and bid-rigging conspiracies between competing firms.",
              "Charging different prices in different geographic regions due to shipping costs."
            ],
            "correctIndex": 2,
            "explanation": "Section 1 of the Sherman Antitrust Act prohibits contracts, combinations, and conspiracies in restraint of trade. Horizontal price-fixing (competitors agreeing on prices) and bid-rigging are classified as illegal per se, requiring no proof of specific harm to be convicted.",
            "distractorTip": "Horizontal price-fixing and market allocation between competitors are illegal per se under US antitrust statutes."
          }
        ]
      },
      {
        "id": 608,
        "unitIndex": 6,
        "levelNumber": 8,
        "uniqueKey": "micro-u6-l8",
        "topicNumber": "Unit 6 Boss",
        "name": "Apex Market Failure & Public Policy Crucible",
        "subtitle": "Comprehensive mastery of externalities, public goods, and distribution",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "micro6-l8-q1",
            "stem": "Three neighbors consider hiring a private street security patrol costing \\$900 per month. Neighbor A values the service at \\$400, Neighbor B values it at \\$350, and Neighbor C values it at \\$300. Which of the following is true regarding social optimality and private market provision?",
            "options": [
              "The patrol is socially inefficient because each individual's valuation is less than \\$900.",
              "Private markets will easily provide the service without any free-rider difficulties.",
              "The service is socially optimal because Total Marginal Benefit (\\$1,050) exceeds Total Cost (\\$900), but private markets may fail to fund it due to the free-rider problem.",
              "Neighbor A will be legally forced to pay the full \\$900."
            ],
            "correctIndex": 2,
            "explanation": "For a non-rival public good, society's total demand is the VERTICAL sum of individual marginal benefits: \\$400 + \\$350 + \\$300 = \\$1,050. Because Total Marginal Benefit (\\$1,050) > Total Cost (\\$900), providing the patrol is socially efficient. However, because security is non-excludable, each neighbor has an incentive to free-ride, leading to private market underprovision.",
            "distractorTip": "Public goods demand is summed VERTICALLY: Total Social Benefit = Sum of individual willingness to pay!"
          },
          {
            "id": "micro6-l8-q2",
            "stem": "If Country X has a Gini Coefficient of 0.28 while Country Y has a Gini Coefficient of 0.52, what can be accurately inferred about their income distributions?",
            "options": [
              "Country Y has a higher GDP per capita than Country X.",
              "Country X has a significantly more unequal distribution of income than Country Y.",
              "Country Y has a perfectly progressive income tax system.",
              "Country X has a much more equal distribution of income than Country Y, where income is heavily concentrated among top earners."
            ],
            "correctIndex": 3,
            "explanation": "The Gini coefficient measures inequality on a scale from 0 to 1. Closer to 0 represents greater equality; closer to 1 represents greater inequality. Country X (0.28) has substantially more equitable income distribution, whereas Country Y (0.52) has severe income concentration.",
            "distractorTip": "Gini: Lower number = More EQUAL; Higher number = More UNEQUAL."
          },
          {
            "id": "micro6-l8-q3",
            "stem": "In a market with private marginal benefit $MPB = 80 - Q$, private marginal cost $MPC = 20 + Q$, and a negative production externality of Marginal External Cost $MEC = \\$10$ per unit, what is the socially optimal output $Q_{\\text{opt}}$?",
            "options": [
              "$Q_{\\text{opt}} = 30$",
              "$Q_{\\text{opt}} = 25$",
              "$Q_{\\text{opt}} = 20$",
              "$Q_{\\text{opt}} = 35$"
            ],
            "correctIndex": 1,
            "explanation": "Social efficiency requires $MSB = MSC$. Here $MSB = MPB = 80 - Q$. $MSC = MPC + MEC = (20 + Q) + 10 = 30 + Q$. Equating $MSB = MSC$: $80 - Q = 30 + Q \\implies 2Q = 50 \\implies Q_{\\text{opt}} = 25$. (In contrast, the unregulated private market sets $MPB = MPC \\implies 80 - Q = 20 + Q \\implies Q_{\\text{private}} = 30$, overproducing by 5 units).",
            "distractorTip": "Always calculate $MSC = MPC + \\text{external cost}$ before equating to $MSB$ to find the socially optimal output."
          }
        ]
      }
    ]
  }
];
