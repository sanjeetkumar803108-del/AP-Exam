// AP Macroeconomics Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–6)
// Complete authentic coverage: 48 Levels, 144 Questions (8 Levels per Unit, 3 Questions per Level).
// Perfectly balanced option distribution across A, B, C, D (36 each).

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_MACROECONOMICS_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Unit 1: Basic Economic Concepts",
    "shortTitle": "Unit 1: Basic Concepts",
    "description": "Scarcity, opportunity cost, Production Possibilities Curve (PPC), capital accumulation vs consumer goods, comparative advantage, terms of trade, and macro supply and demand",
    "examWeight": "5–10% of AP Macro Exam",
    "biome": {
      "name": "Macro Foundations Frontier & Trade Basin",
      "icon": "🏔️",
      "accentColor": "#0EA5E9",
      "secondaryColor": "#0284C7",
      "groundGradient": "from-sky-100 via-blue-50 to-indigo-100",
      "cardBorder": "border-sky-500",
      "trailColor": "#0ea5e9",
      "nodeRing": "ring-sky-400/40",
      "skyTint": "from-sky-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "macro-u1-l1",
        "topicNumber": "Topic 1.1 & 1.2",
        "name": "Scarcity, Opportunity Cost & Resource Allocation",
        "subtitle": "National trade-offs and capital vs consumer allocations",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "macro1-l1-q1",
            "stem": "A nation allocates $100 billion of federal budget funds to construct high-speed rail networks rather than upgrading electrical energy grids. What is the fundamental opportunity cost of this federal expenditure?",
            "options": [
              "The value of the modernized electrical grid infrastructure forgone by choosing the rail project.",
              "The $100 billion in interest payments paid to foreign bondholders.",
              "The accounting depreciation of high-speed train engines over a 20-year span.",
              "The tax revenue generated from newly employed construction laborers."
            ],
            "correctIndex": 0,
            "explanation": "In macroeconomic analysis, opportunity cost is the value of the next best alternative forgone when making a societal resource allocation choice. The opportunity cost of building rail networks is the value and benefits of the modern electrical grid that could not be funded.",
            "distractorTip": "Opportunity cost is the highest-valued forgone alternative, not monetary accounting payments or subsequent tax revenues."
          },
          {
            "id": "macro1-l1-q2",
            "stem": "Why do command economies characterized by centralized state planning typically struggle to achieve allocative efficiency compared to market economies?",
            "options": [
              "Because command economies have perfectly vertical Aggregate Supply curves in the short run.",
              "Because centralized planning committees lack accurate decentralized price signals to match production quantities with consumer preferences.",
              "Because command economies have higher structural unemployment rates during business cycle expansions.",
              "Because command economies maintain zero national debt and zero currency liquidity."
            ],
            "correctIndex": 1,
            "explanation": "Market economies rely on price signals driven by consumer demand and producer costs to allocate scarce resources to their most valued uses. Without market prices, central planners face severe information deficits, leading to surpluses of unwanted goods and severe shortages of essential goods.",
            "distractorTip": "Market economies utilize price signals for allocative efficiency; command economies lack flexible price mechanisms."
          },
          {
            "id": "macro1-l1-q3",
            "stem": "Which of the following scenarios best illustrates the macroeconomic concept of scarcity?",
            "options": [
              "A household chooses between purchasing groceries or paying for home heating.",
              "A commercial bank issues home loans to qualified credit applicants.",
              "A government with limited tax revenues must choose between expanding national healthcare coverage or increasing infrastructure spending.",
              "A manufacturing firm increases overtime pay to hire additional factory assembly workers."
            ],
            "correctIndex": 2,
            "explanation": "Scarcity is the fundamental economic condition where society has unlimited human wants while possessing strictly limited productive resources. At the macroeconomic level, national governments face trade-offs between competing fiscal priorities due to finite budget resources.",
            "distractorTip": "Macroeconomics focuses on economy-wide resource constraints (government budget trade-offs), whereas microeconomics focuses on individual consumer or firm decisions."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "macro-u1-l2",
        "topicNumber": "Topic 1.3",
        "name": "Production Possibilities Curve & Capital Accumulation",
        "subtitle": "PPC curvature, capital vs consumer goods, and economic growth",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "macro1-l2-q1",
            "stem": "Nation Alpha and Nation Beta have identical Production Possibilities Curves for Consumer Goods and Capital Goods. Nation Alpha produces mostly Capital Goods (industrial machinery, factories), while Nation Beta produces mostly Consumer Goods (apparel, electronics). What will be the long-run macroeconomic consequence?",
            "options": [
              "Nation Beta's PPC will shift outward faster than Nation Alpha's PPC.",
              "Nation Alpha's unemployment rate will permanently rise to 100%.",
              "Nation Alpha will experience a greater outward shift in its PPC over time, achieving faster long-run economic growth than Nation Beta.",
              "Both nations' PPCs will shift inward due to capital equipment depreciation."
            ],
            "correctIndex": 2,
            "explanation": "Capital goods represent physical capital investment (machinery, tools, plants) that expands future productive capacity. A nation that dedicates a larger share of current output to capital goods accumulates more capital stock, shifting its PPC outward faster in the future and accelerating long-run economic growth.",
            "distractorTip": "Producing more capital goods today yields faster outward PPC shifts (higher long-run growth) tomorrow!"
          },
          {
            "id": "macro1-l2-q2",
            "stem": "An economy operating with an 11% unemployment rate during a deep macroeconomic downturn is located at which position relative to its Production Possibilities Curve?",
            "options": [
              "Beyond the curve, at an unattainable output point.",
              "Exactly on the curve, at a point of allocative efficiency.",
              "Shifting the entire PPC inward toward the origin.",
              "Inside the curve, indicating inefficient underutilization of available productive resources."
            ],
            "correctIndex": 3,
            "explanation": "Points on the PPC represent full employment of all available resources (natural rate of unemployment). High unemployment means labor resources are idle, placing the economy strictly INSIDE its production possibilities frontier. Returning to full employment moves the economy from inside toward the frontier, without shifting the curve itself.",
            "distractorTip": "Recession and high unemployment place the economy INSIDE the PPC. Full employment places the economy ON the PPC."
          },
          {
            "id": "macro1-l2-q3",
            "stem": "Which combination of production choices will shift a nation's Production Possibilities Curve outward the most in the long run?",
            "options": [
              "Allocating a large proportion of current resources toward producing Capital Goods rather than Consumer Goods.",
              "Maximizing the current production of luxury Consumer Goods to satisfy immediate household demand.",
              "Operating at a point strictly inside the current PPC to conserve scarce physical resources.",
              "Imposing high tariffs on imported raw industrial materials to protect domestic factory jobs."
            ],
            "correctIndex": 0,
            "explanation": "Capital goods (machinery, factory equipment, technological tools) expand an economy's future productive capacity. By sacrificing current consumer goods in favor of capital investment, a nation accelerates capital accumulation and achieves faster long-run economic growth (shifting the PPC outward).",
            "distractorTip": "Producing capital goods fuels long-run growth; producing consumer goods provides immediate satisfaction but yields slower future expansion."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "macro-u1-l3",
        "topicNumber": "Topic 1.4",
        "name": "Comparative Advantage & Macro Gains from Trade",
        "subtitle": "Input vs output methods and terms of trade",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro1-l3-q1",
            "stem": "With one unit of resources, the United States can produce either 100 tons of soybeans or 50 commercial jet engines. Brazil can produce either 80 tons of soybeans or 20 commercial jet engines. Which nation holds the comparative advantage in producing soybeans, and what is its opportunity cost?",
            "options": [
              "Brazil has comparative advantage in soybeans, with an opportunity cost of 0.25 jet engines per ton.",
              "The United States has comparative advantage in soybeans, with an opportunity cost of 2 jet engines per ton.",
              "Brazil has comparative advantage in jet engines, with an opportunity cost of 4 tons of soybeans per engine.",
              "The United States has comparative advantage in soybeans, with an opportunity cost of 0.5 jet engines per ton."
            ],
            "correctIndex": 0,
            "explanation": "Output Method (OOO = Output: Other goes Over): For USA, 1 Soybean = 50/100 = 0.5 Jet Engines. For Brazil, 1 Soybean = 20/80 = 0.25 Jet Engines. Brazil has the lower opportunity cost in soybeans (0.25 < 0.50), giving Brazil the comparative advantage in soybeans. USA has comparative advantage in jet engines (1 Jet Engine = 2 Soybeans vs Brazil's 4 Soybeans).",
            "distractorTip": "Compare opportunity costs: the nation with the lower opportunity cost holds comparative advantage!"
          },
          {
            "id": "macro1-l3-q2",
            "stem": "Nation X produces 1 airplane at an opportunity cost of 40 tons of wheat. Nation Y produces 1 airplane at an opportunity cost of 70 tons of wheat. Which of the following terms of trade would allow BOTH nations to consume beyond their domestic PPCs?",
            "options": [
              "1 airplane for 30 tons of wheat",
              "1 airplane for 55 tons of wheat",
              "1 airplane for 85 tons of wheat",
              "1 ton of wheat for 2 airplanes"
            ],
            "correctIndex": 1,
            "explanation": "For both nations to benefit from trade, the mutually agreed terms of trade must fall strictly between their domestic opportunity costs: 40 Wheat < 1 Airplane < 70 Wheat. At 55 tons of wheat, Nation X (exporter) receives more than its 40-ton cost, and Nation Y (importer) pays less than its 70-ton domestic cost.",
            "distractorTip": "Mutually beneficial terms of trade must be between seller cost and buyer cost: Seller Cost < Terms of Trade < Buyer Cost."
          },
          {
            "id": "macro1-l3-q3",
            "stem": "Country Alpha can produce 100 bushels of wheat or 50 barrels of oil. Country Beta can produce 60 bushels of wheat or 40 barrels of oil. Which country has the comparative advantage in oil, and what is its opportunity cost?",
            "options": [
              "Country Alpha, with an opportunity cost of 2 bushels of wheat per barrel of oil.",
              "Country Alpha, with an opportunity cost of 0.5 bushels of wheat per barrel of oil.",
              "Country Beta, with an opportunity cost of 0.67 bushels of wheat per barrel of oil.",
              "Country Beta, with an opportunity cost of 1.5 bushels of wheat per barrel of oil."
            ],
            "correctIndex": 3,
            "explanation": "For Alpha: 1 barrel of oil costs 100/50 = 2 bushels of wheat. For Beta: 1 barrel of oil costs 60/40 = 1.5 bushels of wheat. Because Beta sacrifices fewer bushels of wheat per barrel of oil (1.5 < 2.0), Country Beta has the comparative advantage in oil production.",
            "distractorTip": "Comparative advantage goes to the producer with the lower opportunity cost: 1.5 bushels of wheat < 2.0 bushels of wheat."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "macro-u1-l4",
        "topicNumber": "Topic 1.5 & 1.6",
        "name": "Macro Demand and Supply Foundations",
        "subtitle": "Determinants of market equilibrium in key national markets",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro1-l4-q1",
            "stem": "In the nationwide market for crude petroleum (a key industrial input), crude oil pipeline disruptions decrease domestic oil extraction, while an economic expansion increases consumer driving. What are the definite effects on the equilibrium price and quantity of petroleum?",
            "options": [
              "Price is indeterminate, and quantity increases.",
              "Price decreases, and quantity is indeterminate.",
              "Price increases, and quantity is indeterminate.",
              "Price decreases, and quantity decreases."
            ],
            "correctIndex": 2,
            "explanation": "Pipeline disruptions shift Supply left (S <-: Price up, Quantity down). Higher driving shifts Demand right (D ->: Price up, Quantity up). Both shifts push equilibrium price upward, so Price definitely INCREASES. However, Supply decreases quantity while Demand increases quantity, making equilibrium Quantity INDETERMINATE without knowing shift magnitudes.",
            "distractorTip": "Double Shift Rule: When supply shifts left and demand shifts right, price unequivocally RISES, while quantity is INDETERMINATE."
          },
          {
            "id": "macro1-l4-q2",
            "stem": "Which of the following changes will cause a rightward shift in the market supply curve of domestically produced agricultural crops?",
            "options": [
              "An increase in the wage rate demanded by agricultural farmworkers.",
              "An increase in the retail market price of agricultural crops.",
              "A severe drought that damages national topsoil across the Midwest.",
              "A federal subsidy provided to farmers that lowers per-bushel production costs and advances in genetic drought-resistant crop engineering."
            ],
            "correctIndex": 3,
            "explanation": "A supply curve shifts right when input costs decrease or technology advances. A federal subsidy lowers production costs, and technological advances in bioengineering increase output per acre, shifting supply right. Higher wages or droughts shift supply left, while crop price changes cause movements along the supply curve.",
            "distractorTip": "Subsidies and technological advances shift supply to the RIGHT; input cost increases shift supply to the LEFT."
          },
          {
            "id": "macro1-l4-q3",
            "stem": "In the market for hybrid vehicles, what will happen to equilibrium price and quantity if household incomes rise (assuming hybrids are normal goods) while battery manufacturing costs decline?",
            "options": [
              "Equilibrium price will definitely increase; quantity is indeterminate.",
              "Equilibrium quantity will definitely increase; equilibrium price change is indeterminate.",
              "Equilibrium price will definitely decrease; quantity will increase.",
              "Equilibrium quantity will definitely decrease; price will decrease."
            ],
            "correctIndex": 1,
            "explanation": "Higher income increases demand (shifts right). Lower production costs increase supply (shifts right). Both shifts unambiguously increase equilibrium quantity. However, the demand shift puts upward pressure on price while the supply shift puts downward pressure on price, leaving the net change in equilibrium price indeterminate.",
            "distractorTip": "Double shift rule: If demand and supply both increase, quantity definitely rises, but price is indeterminate without knowing the shift magnitudes."
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "macro-u1-l5",
        "topicNumber": "Topic 1.6",
        "name": "Market Equilibrium & Price Allocations",
        "subtitle": "Consumer surplus, producer surplus, and market clearing",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro1-l5-q1",
            "stem": "At the free-market equilibrium price for steel in a market economy, which condition is satisfied?",
            "options": [
              "Quantity demanded equals quantity supplied, and total economic surplus (consumer surplus plus producer surplus) is maximized.",
              "Deadweight loss is maximized, because producers receive zero economic profit.",
              "Consumer surplus is zero, and producer surplus equals total revenue.",
              "Government tax revenue equals total production cost."
            ],
            "correctIndex": 0,
            "explanation": "Market equilibrium clears the market where Qd = Qs. At this competitive price and output, all mutually beneficial trades between buyers and sellers are executed, maximizing total social surplus (Consumer Surplus + Producer Surplus) and achieving allocative efficiency with zero deadweight loss.",
            "distractorTip": "Competitive market equilibrium maximizes total societal surplus (Consumer Surplus + Producer Surplus) with zero deadweight loss."
          },
          {
            "id": "macro1-l5-q2",
            "stem": "If the market price of lumber is artificially held above the market equilibrium price by a legally mandated agricultural price support, what economic condition results in the lumber sector?",
            "options": [
              "A persistent shortage of lumber, where builders cannot acquire construction materials.",
              "A persistent surplus of lumber, where quantity supplied exceeds quantity demanded, creating deadweight loss.",
              "An outward shift in the market demand curve for lumber.",
              "An increase in total consumer surplus enjoyed by residential homebuilders."
            ],
            "correctIndex": 1,
            "explanation": "A price floor set above the equilibrium price prevents price from falling to equilibrium. At this artificially high price, suppliers produce more (Qs rises) while buyers purchase less (Qd falls), creating a persistent surplus (Qs > Qd) and deadweight loss from blocked transactions.",
            "distractorTip": "Price Floor ABOVE equilibrium = Binding floor = Persistent SURPLUS (Qs > Qd)."
          },
          {
            "id": "macro1-l5-q3",
            "stem": "If the market price of wheat is currently above the market-clearing equilibrium price, what market dynamic will occur in a competitive economy?",
            "options": [
              "A persistent shortage will emerge as consumers demand more wheat than is available.",
              "The government must issue rationing coupons to prevent market collapse.",
              "A market surplus will develop, exerting downward competitive pressure on price until equilibrium is restored.",
              "The market supply curve will shift inward to eliminate the price gap."
            ],
            "correctIndex": 2,
            "explanation": "When price exceeds equilibrium, quantity supplied exceeds quantity demanded ($Q_s > Q_d$), creating an excess supply (surplus). To sell unsold inventory, competing suppliers lower prices until quantity demanded equals quantity supplied at the equilibrium price.",
            "distractorTip": "Price above equilibrium = Surplus (downward price pressure); Price below equilibrium = Shortage (upward price pressure)."
          }
        ]
      },
      {
        "id": 106,
        "unitIndex": 1,
        "levelNumber": 6,
        "uniqueKey": "macro-u1-l6",
        "topicNumber": "Topic 1.3",
        "name": "Capital Accumulation & Long-Run Growth on the PPC",
        "subtitle": "Capital vs consumer goods and expanding productive capacity",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro1-l6-q1",
            "stem": "An economy chooses between producing capital goods (industrial robotics, infrastructure) and consumer goods (automobiles, clothing). If the country shifts resources to produce significantly more capital goods today, how will this societal choice affect its Production Possibilities Curve (PPC) in the future?",
            "options": [
              "Its PPC will immediately shift inward due to depleted consumer savings.",
              "Its PPC will remain unchanged because total labor supply is constant.",
              "Its PPC will shift outward significantly more in future decades because capital goods expand the nation's long-run productive capacity.",
              "Its PPC will become a straight downward-sloping line."
            ],
            "correctIndex": 2,
            "explanation": "Capital goods are productive resources used to manufacture other goods. Allocating more resources toward capital goods today fosters capital deepening and higher productivity, causing the nation's PPC and Long-Run Aggregate Supply (LRAS) curve to shift outward more rapidly over time.",
            "distractorTip": "Capital goods investment drives future economic growth, shifting the PPC outward!"
          },
          {
            "id": "macro1-l6-q2",
            "stem": "Which of the following events would cause an economy's entire Production Possibilities Curve (PPC) to shift outward?",
            "options": [
              "A decrease in the national unemployment rate from 8% to 4%.",
              "An increase in the central bank's policy interest rate.",
              "An increase in government transfer payments to low-income families.",
              "An influx of skilled immigrant labor combined with technological advances in manufacturing."
            ],
            "correctIndex": 3,
            "explanation": "An outward shift of the PPC represents an increase in potential output (economic growth). This requires an increase in the quantity or quality of the factors of production (labor, capital, land, entrepreneurship) or an advancement in technology.",
            "distractorTip": "Reducing unemployment moves production from INSIDE the PPC to the frontier; expanding resources or technology shifts the PPC OUTWARD!"
          },
          {
            "id": "macro1-l6-q3",
            "stem": "Which of the following events will cause a permanent outward shift of an economy's Production Possibilities Curve?",
            "options": [
              "A permanent increase in labor productivity due to widespread adoption of artificial intelligence and advanced automation.",
              "A reduction in the central bank's policy interest rate.",
              "An increase in consumer spending on imported manufactured goods.",
              "A decrease in the national unemployment rate from 6% to 4%."
            ],
            "correctIndex": 0,
            "explanation": "The PPC shifts outward only when an economy's productive capacity expands, driven by technological breakthroughs, increases in capital stock, discovery of natural resources, or labor force growth. Lower interest rates or lower unemployment merely change the current operating point.",
            "distractorTip": "Decreasing unemployment moves an economy from inside the PPC toward the curve; it does NOT shift the curve itself."
          }
        ]
      },
      {
        "id": 107,
        "unitIndex": 1,
        "levelNumber": 7,
        "uniqueKey": "macro-u1-l7",
        "topicNumber": "Topic 1.4",
        "name": "Comparative Advantage & Gains from Macroeconomic Trade",
        "subtitle": "Opportunity cost differentials and international specialization",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro1-l7-q1",
            "stem": "Nation X can produce 50 tons of grain or 25 tons of steel per day. Nation Y can produce 30 tons of grain or 30 tons of steel per day. Which nation possesses the comparative advantage in steel, and what terms of trade will benefit both countries for 1 ton of steel?",
            "options": [
              "Nation Y has comparative advantage in steel; terms of trade: 1 ton of steel for 1.5 tons of grain.",
              "Nation X has comparative advantage in steel; terms of trade: 1 ton of steel for 0.5 tons of grain.",
              "Nation Y has comparative advantage in steel; terms of trade: 1 ton of steel for 3 tons of grain.",
              "Nation X has comparative advantage in steel; terms of trade: 1 ton of steel for 1 ton of grain."
            ],
            "correctIndex": 0,
            "explanation": "Nation X's opportunity cost for 1 ton of steel = 50 / 25 = 2 tons of grain. Nation Y's opportunity cost for 1 ton of steel = 30 / 30 = 1 ton of grain. Nation Y has a lower opportunity cost (1 < 2) and thus comparative advantage in steel. Mutually beneficial trade occurs between their opportunity costs: 1 ton grain < 1 ton steel < 2 tons grain. 1.5 tons of grain benefits both nations.",
            "distractorTip": "Comparative advantage belongs to the lower-opportunity-cost producer. Terms of trade must lie strictly between the two domestic opportunity costs."
          },
          {
            "id": "macro1-l7-q2",
            "stem": "When two nations specialize according to comparative advantage and trade with mutually beneficial terms of trade, what happens to their consumption possibilities?",
            "options": [
              "Both nations are forced to consume inside their respective PPCs due to transportation costs.",
              "Both nations are able to consume at points BEYOND their domestic Production Possibilities Curves.",
              "One nation consumes outside its PPC while the other experiences severe deadweight loss.",
              "World production of both goods decreases due to resource reallocation."
            ],
            "correctIndex": 1,
            "explanation": "Specialization and trade allow countries to exploit comparative advantages, increasing total world output. Through trade, each nation can exchange goods at terms better than its domestic opportunity cost, allowing consumption outside (beyond) its individual PPC.",
            "distractorTip": "Trade does NOT shift a nation's PPC; it allows consumption OUTSIDE the domestic PPC!"
          },
          {
            "id": "macro1-l7-q3",
            "stem": "Suppose Country A produces 10 tons of steel at an opportunity cost of 20 tons of grain, while Country B produces 10 tons of steel at an opportunity cost of 30 tons of grain. Which terms of trade for 10 tons of steel would be accepted by both nations?",
            "options": [
              "10 tons of steel for 15 tons of grain",
              "10 tons of steel for 35 tons of grain",
              "10 tons of steel for 18 tons of grain",
              "10 tons of steel for 25 tons of grain"
            ],
            "correctIndex": 3,
            "explanation": "Country A's opportunity cost is 20 grain; Country B's is 30 grain. Country A will export steel as long as it receives more than 20 grain. Country B will import steel as long as it pays less than 30 grain. Any terms of trade strictly between 20 and 30 grain (such as 25 tons of grain) will be mutually acceptable.",
            "distractorTip": "Terms of trade must lie strictly between the domestic opportunity costs of the two trading nations: 20 < Terms of Trade < 30."
          }
        ]
      },
      {
        "id": 108,
        "unitIndex": 1,
        "levelNumber": 8,
        "uniqueKey": "macro-u1-l8",
        "topicNumber": "Unit 1 Boss",
        "name": "Apex Macro Foundations Crucible",
        "subtitle": "Comprehensive mastery of scarcity, PPC, trade, and macro supply/demand",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "macro1-l8-q1",
            "stem": "An economy is currently operating at a point on its PPC. If consumer preferences shift dramatically toward electric vehicles and away from gasoline trucks, what will happen to the economy's position on the PPC?",
            "options": [
              "The economy will move to a point inside the PPC because old factories are abandoned.",
              "The PPC will rotate outward along the gasoline axis.",
              "The economy will move along its existing PPC from one point on the curve to another point with more electric vehicles and fewer gasoline trucks.",
              "The PPC will shift inward due to structural adjustment."
            ],
            "correctIndex": 2,
            "explanation": "When resources are fully employed, shifting production from one product to another is represented as a movement ALONG the existing production possibilities curve. It reflects reallocating existing resources rather than changing the economy's overall productive capacity.",
            "distractorTip": "Reallocating production between two goods is a movement ALONG the PPC, not a shift of the curve."
          },
          {
            "id": "macro1-l8-q2",
            "stem": "Which of the following describes the difference between positive macroeconomic statements and normative macroeconomic statements?",
            "options": [
              "Positive statements are based on value judgments; normative statements are based on mathematical formulas.",
              "Positive statements describe the future; normative statements describe historical facts.",
              "Positive statements are only made by central bankers; normative statements are made by commercial banks.",
              "Positive statements are factual assertions that can be tested against empirical evidence; normative statements express subjective value judgments about what policy ought to be."
            ],
            "correctIndex": 3,
            "explanation": "Positive economics deals with 'what is' and can be validated or refuted using empirical data (e.g. 'Raising the minimum wage increased unemployment by 1%'). Normative economics deals with 'what ought to be' and involves subjective ethics or values (e.g. 'The government should raise the minimum wage to help poor families').",
            "distractorTip": "Positive = Testable facts ('what is'); Normative = Value judgments and opinions ('what ought to be')."
          },
          {
            "id": "macro1-l8-q3",
            "stem": "Why does the circular flow model demonstrate that national aggregate income must mathematically equal national aggregate expenditure in an economy?",
            "options": [
              "Because all corporate profits are taxed at 100% by the government.",
              "Because every dollar spent on final goods and services by one economic agent becomes gross income for another economic agent.",
              "Because the commercial banking system holds 100% required reserves against all deposits.",
              "Because import expenditures must equal export revenues in foreign exchange markets."
            ],
            "correctIndex": 1,
            "explanation": "In the circular flow model, every transaction has a buyer and a seller. The total dollar amount spent to purchase finished final goods and services ($GDP = C + I + G + X_n$) flows directly to factors of production as wages, rents, interest, and profits, making Aggregate Expenditure identically equal to Aggregate Income.",
            "distractorTip": "In national income accounting: Aggregate Expenditure $\\equiv$ Aggregate Output $\\equiv$ Aggregate Income."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Unit 2: Economic Indicators and the Business Cycle",
    "shortTitle": "Unit 2: Indicators & Cycle",
    "description": "Circular flow, GDP components (C+I+G+Xn), nominal vs real GDP, GDP deflator, unemployment types (frictional, structural, cyclical), CPI inflation, and business cycle phases",
    "examWeight": "12–16% of AP Macro Exam",
    "biome": {
      "name": "Macro Metric Observatory & CPI Peak",
      "icon": "📊",
      "accentColor": "#3B82F6",
      "secondaryColor": "#1D4ED8",
      "groundGradient": "from-blue-100 via-sky-50 to-indigo-100",
      "cardBorder": "border-blue-500",
      "trailColor": "#3b82f6",
      "nodeRing": "ring-blue-400/40",
      "skyTint": "from-blue-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "macro-u2-l1",
        "topicNumber": "Topic 2.1 & 2.2",
        "name": "Circular Flow & GDP Expenditure Components",
        "subtitle": "C + I + G + Xn and excluded transactions",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "macro2-l1-q1",
            "stem": "Which of the following transactions is included in the official calculation of United States Gross Domestic Product (GDP)?",
            "options": [
              "A resident purchasing 100 shares of Microsoft corporate stock through an online broker.",
              "The federal government sending monthly Social Security retirement checks to elderly citizens.",
              "A domestic construction firm purchasing newly manufactured bulldozers built in Illinois.",
              "A homeowner buying a residential house originally constructed in 1985."
            ],
            "correctIndex": 2,
            "explanation": "GDP measures the market value of all final goods and services produced domestically within a nation in a given year. Newly manufactured bulldozers represent business investment (I). Purely financial asset transfers (stocks/bonds), transfer payments (Social Security), and used goods (1985 home) are excluded.",
            "distractorTip": "Excluded from GDP: Used goods, financial assets (stocks/bonds), transfer payments (welfare/Social Security), and intermediate goods."
          },
          {
            "id": "macro2-l1-q2",
            "stem": "Why are intermediate goods (such as sheet metal purchased by an automaker or flour purchased by a commercial bakery) excluded from direct calculation in GDP?",
            "options": [
              "Because intermediate goods are classified as imports from foreign manufacturers.",
              "Because intermediate goods do not possess physical monetary value.",
              "Because intermediate goods are counted exclusively under the government spending (G) component.",
              "To avoid double counting, because the value of intermediate goods is already embedded in the final retail price of the finished product."
            ],
            "correctIndex": 3,
            "explanation": "If the value of flour were counted when sold to a baker and then counted again in the retail price of bread, the flour would be counted twice (double counting). GDP includes only the market value of final goods and services to prevent overstating national economic output.",
            "distractorTip": "Double counting prevention: Only FINAL goods are counted in GDP, never intermediate components."
          },
          {
            "id": "macro2-l1-q3",
            "stem": "Which of the following transactions is directly included in the calculation of the current year's US Gross Domestic Product (GDP)?",
            "options": [
              "The purchase of 100 shares of tech stock on the New York Stock Exchange.",
              "The purchase of a used residential home originally constructed in 1985.",
              "A legal fee paid to an attorney for drawing up corporate incorporation documents.",
              "Social Security retirement benefit checks issued by the federal government."
            ],
            "correctIndex": 2,
            "explanation": "GDP measures the market value of all final goods and services produced domestically within a given time period. Legal services are newly produced final services and are included in GDP. Stocks are financial asset transfers, used homes were counted in 1985, and Social Security checks are government transfer payments (no current production).",
            "distractorTip": "GDP exclusions: Used goods, financial asset transfers (stocks/bonds), transfer payments (welfare/Social Security), and non-market household work."
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "macro-u2-l2",
        "topicNumber": "Topic 2.3 & 2.6",
        "name": "Nominal vs Real GDP & GDP Deflator",
        "subtitle": "Price level adjustments and deflator formula",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro2-l2-q1",
            "stem": "In Year 1, an economy's Nominal GDP is $500 billion and its GDP Deflator is 100. In Year 2, its Nominal GDP rises to $660 billion and its GDP Deflator rises to 120. What is the Real GDP in Year 2, and by what percentage did real output grow?",
            "options": [
              "Real GDP = $550 billion; real output grew by 10%.",
              "Real GDP = $600 billion; real output grew by 20%.",
              "Real GDP = $550 billion; real output grew by 32%.",
              "Real GDP = $792 billion; real output fell by 5%."
            ],
            "correctIndex": 0,
            "explanation": "Formula: Real GDP = (Nominal GDP / GDP Deflator) * 100. For Year 2: Real GDP = ($660 billion / 120) * 100 = $550 billion. In Year 1 (base year where deflator=100), Real GDP was $500 billion. Real output growth = [($550 - $500) / $500] * 100 = 10%.",
            "distractorTip": "Real GDP = (Nominal GDP / GDP Deflator) * 100. Always deflate nominal values to isolate physical output changes!"
          },
          {
            "id": "macro2-l2-q2",
            "stem": "If an economy's Nominal GDP increased by 7% during a year while its Real GDP increased by only 2%, what approximately occurred to the aggregate price level?",
            "options": [
              "The price level decreased by 5% (deflation).",
              "The price level increased by approximately 5% (inflation).",
              "The price level remained perfectly constant.",
              "The GDP Deflator dropped to zero."
            ],
            "correctIndex": 1,
            "explanation": "By approximation: % Change in Nominal GDP = % Change in Real GDP + % Change in Price Level. Therefore, % Change in Price Level = 7% - 2% = +5%. The nominal increase was driven largely by inflation (5%) rather than real output expansion (2%).",
            "distractorTip": "% Change in Nominal GDP ~= % Change in Real GDP + Inflation Rate."
          },
          {
            "id": "macro2-l2-q3",
            "stem": "In Year 1 (base year), an economy has Nominal GDP of \\$500 billion and GDP deflator of 100. In Year 2, Nominal GDP rises to \\$660 billion while the GDP deflator rises to 110. What is Real GDP in Year 2?",
            "options": [
              "\\$600 billion",
              "\\$726 billion",
              "\\$550 billion",
              "\\$660 billion"
            ],
            "correctIndex": 0,
            "explanation": "Real GDP = $\\frac{\\text{Nominal GDP}}{\\text{GDP Deflator}} \\times 100 = \\frac{\\$660 \\text{ billion}}{110} \\times 100 = \\$600 \\text{ billion}$.",
            "distractorTip": "Real GDP deflates nominal figures to remove price inflation: Real GDP = (Nominal GDP / Deflator) * 100."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "macro-u2-l3",
        "topicNumber": "Topic 2.4",
        "name": "Unemployment Measurement & Natural Rate",
        "subtitle": "Labor force participation and NRU definition",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro2-l3-q1",
            "stem": "An economy has a civilian non-institutional population of 200 million. 120 million are employed, 10 million are unemployed and actively seeking work, and 70 million are retired or not seeking work. What is the official Unemployment Rate and the Labor Force Participation Rate?",
            "options": [
              "Unemployment Rate = 5.0%; Labor Force Participation Rate = 60.0%",
              "Unemployment Rate = 8.3%; Labor Force Participation Rate = 50.0%",
              "Unemployment Rate = 7.7%; Labor Force Participation Rate = 65.0%",
              "Unemployment Rate = 10.0%; Labor Force Participation Rate = 70.0%"
            ],
            "correctIndex": 2,
            "explanation": "Labor Force = Employed + Unemployed = 120M + 10M = 130 million. Unemployment Rate = (Unemployed / Labor Force) * 100 = (10 / 130) * 100 = 7.69% (~7.7%). Labor Force Participation Rate = (Labor Force / Adult Population) * 100 = (130 / 200) * 100 = 65.0%.",
            "distractorTip": "Unemployment Rate denominator is the LABOR FORCE (Employed + Unemployed), NOT total population!"
          },
          {
            "id": "macro2-l3-q2",
            "stem": "When an economy is operating at Full Employment (where actual GDP equals potential output), what is the status of cyclical, frictional, and structural unemployment?",
            "options": [
              "All unemployment is zero, meaning 100% of adult citizens are employed.",
              "Frictional unemployment is zero, while cyclical unemployment is at its maximum.",
              "Structural unemployment is zero, and the natural rate of unemployment equals zero.",
              "Cyclical unemployment is zero, and actual unemployment equals the Natural Rate of Unemployment (Frictional + Structural)."
            ],
            "correctIndex": 3,
            "explanation": "Full employment does NOT mean 0% unemployment. It means Cyclical Unemployment is ZERO. The economy still experiences natural worker transitions (Frictional) and industrial skill mismatch (Structural). Thus, at full employment, Actual Unemployment = Natural Rate of Unemployment (NRU = Frictional + Structural).",
            "distractorTip": "Full Employment: Cyclical Unemployment = 0; Actual Unemployment = NRU (Frictional + Structural)."
          },
          {
            "id": "macro2-l3-q3",
            "stem": "An economy has a total adult non-institutionalized population of 200 million, a civilian labor force of 120 million, and 114 million employed workers. What is the national unemployment rate?",
            "options": [
              "3.0%",
              "6.0%",
              "40.0%",
              "5.0%"
            ],
            "correctIndex": 3,
            "explanation": "Unemployed workers = Labor Force - Employed = 120 million - 114 million = 6 million. Unemployment Rate = $\\frac{\\text{Unemployed}}{\\text{Civilian Labor Force}} \\times 100 = \\frac{6}{120} \\times 100 = 5.0\\%$.",
            "distractorTip": "The unemployment rate is divided by the LABOR FORCE (120M), NEVER the total population (200M)!"
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "macro-u2-l4",
        "topicNumber": "Topic 2.4",
        "name": "Types of Unemployment",
        "subtitle": "Frictional, structural, cyclical, and seasonal classifications",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro2-l4-q1",
            "stem": "A certified auto assembly worker in Detroit is laid off because the automaker permanently replaced human welding with AI robotic arms, and the worker does not possess computer programming skills. What type of unemployment is this worker experiencing?",
            "options": [
              "Structural unemployment",
              "Frictional unemployment",
              "Cyclical unemployment",
              "Seasonal unemployment"
            ],
            "correctIndex": 0,
            "explanation": "Structural unemployment occurs when there is a mismatch between the skills workers possess and the skills demanded by employers, often caused by technological disruption or industrial restructuring. The worker must acquire new training to find employment.",
            "distractorTip": "Structural = Skill mismatch / technological obsolescence; Frictional = Voluntary search / between jobs; Cyclical = Recessionary downturn."
          },
          {
            "id": "macro2-l4-q2",
            "stem": "A financial analyst voluntarily leaves an investment bank in Chicago to relocate to Austin, Texas, and is currently interviewing with multiple tech firms for a new role. How is this worker classified?",
            "options": [
              "A discouraged worker excluded from the labor force.",
              "Frictionally unemployed",
              "Structurally unemployed",
              "Cyclically unemployed"
            ],
            "correctIndex": 1,
            "explanation": "Frictional unemployment is voluntary and temporary, representing workers who are between jobs, searching for the best career fit, or recent college graduates entering the labor market. It is a natural and healthy component of a dynamic economy.",
            "distractorTip": "Frictional unemployment represents normal search time between jobs or new entrants entering the labor market."
          },
          {
            "id": "macro2-l4-q3",
            "stem": "A software engineer voluntarily quits a job in Seattle to relocate to Austin and spend two months searching for a position with a clean-energy startup. How is this worker classified?",
            "options": [
              "Structurally unemployed",
              "Frictionally unemployed",
              "Cyclically unemployed",
              "A discouraged worker outside the labor force"
            ],
            "correctIndex": 1,
            "explanation": "Frictional unemployment consists of workers who are temporarily between jobs, voluntarily switching employers, or entering the labor force seeking jobs that match their existing skills and geographic preferences.",
            "distractorTip": "Frictional = between jobs/searching; Structural = skills obsolete or geographic mismatch; Cyclical = caused by recessionary decline in AD."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "macro-u2-l5",
        "topicNumber": "Topic 2.5",
        "name": "Inflation, CPI & Real Interest Rates",
        "subtitle": "CPI basket, inflation calculations, and the Fisher equation",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro2-l5-q1",
            "stem": "The Consumer Price Index (CPI) was 200 in 2024 and rose to 210 in 2025. What was the annual rate of inflation, and if a bank charged an 8% nominal interest rate on loans during this period, what was the real interest rate earned by the bank?",
            "options": [
              "Inflation = 10%; Real Interest Rate = -2%",
              "Inflation = 5%; Real Interest Rate = 13%",
              "Inflation = 5%; Real Interest Rate = 3%",
              "Inflation = 10%; Real Interest Rate = 8%"
            ],
            "correctIndex": 2,
            "explanation": "Inflation Rate = [(CPI_2025 - CPI_2024) / CPI_2024] * 100 = [(210 - 200) / 200] * 100 = 5%. Using the Fisher Equation: Real Interest Rate = Nominal Interest Rate - Inflation Rate = 8% - 5% = 3%.",
            "distractorTip": "Fisher Equation: Real Interest Rate = Nominal Interest Rate - Inflation Rate."
          },
          {
            "id": "macro2-l5-q2",
            "stem": "A commercial bank issues a 30-year fixed-rate mortgage at an annual interest rate of 6%, expecting inflation to average 2% annually. However, unanticipated inflation surges to an average of 6% annually. Who benefits and who is hurt by this unanticipated inflation?",
            "options": [
              "Both the commercial bank and the homebuyer benefit equally.",
              "The commercial bank benefits, and the homebuyer is hurt.",
              "Neither party is affected, because the interest rate was legally fixed.",
              "The homebuyer (borrower) benefits, and the commercial bank (lender) is hurt."
            ],
            "correctIndex": 3,
            "explanation": "Unanticipated inflation helps borrowers and hurts lenders. The borrower repays the fixed mortgage using dollars that have significantly less purchasing power than expected. The bank expected a real return of 4% (6% - 2%), but received a real return of 0% (6% - 6%), suffering an economic loss in purchasing power.",
            "distractorTip": "Unanticipated Inflation: Borrowers WIN (repay with cheaper dollars); Lenders & fixed-income earners LOSE."
          },
          {
            "id": "macro2-l5-q3",
            "stem": "If a commercial bank issues a 3-year fixed-rate car loan at an 8% nominal interest rate expecting 3% inflation, but actual inflation turns out to be 6%, who is helped and who is hurt?",
            "options": [
              "Both the bank and borrower benefit equally from the higher inflation rate.",
              "The commercial bank benefits because nominal rates are fixed.",
              "The borrower benefits and the lending bank is hurt, because the loan is repaid with less valuable dollars.",
              "Neither party is affected because real interest rates cannot change after loan signing."
            ],
            "correctIndex": 2,
            "explanation": "By the Fisher equation, Real Interest Rate = Nominal Rate - Inflation Rate. Expected real rate = 8% - 3% = 5%. Actual real rate = 8% - 6% = 2%. Because the actual real return received by the bank drops from 5% to 2%, borrowers pay back loans in inflated, less valuable dollars, gaining at the lender's expense.",
            "distractorTip": "Unexpected inflation helps BORROWERS (repay with cheaper dollars) and hurts LENDERS and fixed-income savers."
          }
        ]
      },
      {
        "id": 206,
        "unitIndex": 2,
        "levelNumber": 6,
        "uniqueKey": "macro-u2-l6",
        "topicNumber": "Topic 2.7",
        "name": "The Business Cycle & Output Gaps",
        "subtitle": "Peak, trough, recessionary and inflationary gaps",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro2-l6-q1",
            "stem": "During the expansionary phase of the business cycle as an economy approaches its cyclical peak, what typically happens to Real GDP, the unemployment rate, and the inflation rate?",
            "options": [
              "Real GDP increases, the unemployment rate decreases, and the inflation rate tends to rise.",
              "Real GDP decreases, the unemployment rate increases, and the inflation rate falls.",
              "Real GDP increases, the unemployment rate increases, and the inflation rate falls.",
              "Real GDP and the price level both permanently fall to zero."
            ],
            "correctIndex": 0,
            "explanation": "During a business cycle expansion, aggregate spending rises, driving up Real GDP. As firms expand production, they hire more workers, pushing unemployment down below the natural rate. As capacity constraints are reached near the peak, upward pressure on wages and prices accelerates inflation.",
            "distractorTip": "Expansion phase: Real GDP rises, unemployment falls, inflation rises toward the peak."
          },
          {
            "id": "macro2-l6-q2",
            "stem": "What is the term for a macroeconomic situation where an economy experiences negative real economic growth (recession) accompanied simultaneously by high and accelerating inflation?",
            "options": [
              "Hyperdeflation",
              "Stagflation",
              "Liquidity trap equilibrium",
              "Deflationary depression"
            ],
            "correctIndex": 1,
            "explanation": "Stagflation (stagnant growth + inflation) occurs when a severe negative supply shock (e.g. an abrupt spike in global energy prices) shifts the Short-Run Aggregate Supply (SRAS) curve to the left, causing output to fall (recession/unemployment) while price levels rise.",
            "distractorTip": "Stagflation = Stagnant output (recession) + High inflation, caused by a negative supply shock (SRAS shifts left)."
          },
          {
            "id": "macro2-l6-q3",
            "stem": "When an economy is operating at a point where actual Real GDP is strictly less than potential Real GDP ($Y < Y_f$), what type of output gap exists and what is true about the unemployment rate?",
            "options": [
              "A recessionary gap exists, and the actual unemployment rate exceeds the natural rate of unemployment ($u > u_n$).",
              "An inflationary gap exists, and the actual unemployment rate is zero.",
              "A stagflationary gap exists, and cyclical unemployment is negative.",
              "A full-employment gap exists, and the natural rate equals the cyclical rate."
            ],
            "correctIndex": 0,
            "explanation": "When actual output falls below full-employment potential ($Y < Y_f$), a recessionary gap exists. In a recessionary gap, cyclical unemployment is positive, causing the actual unemployment rate to rise above the natural rate of unemployment ($u = u_n + \\text{cyclical} > u_n$).",
            "distractorTip": "Recessionary gap: $Y < Y_f$ and $u > u_n$ (positive cyclical unemployment); Inflationary gap: $Y > Y_f$ and $u < u_n$."
          }
        ]
      },
      {
        "id": 207,
        "unitIndex": 2,
        "levelNumber": 7,
        "uniqueKey": "macro-u2-l7",
        "topicNumber": "Topic 2.6",
        "name": "GDP Deflator vs. Consumer Price Index (CPI)",
        "subtitle": "Price level index formulas and substitution bias",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "macro2-l7-q1",
            "stem": "In a given year, a nation's Nominal GDP is \\$12 trillion and its Real GDP (measured in base-year dollars) is \\$10 trillion. What is the nation's GDP Deflator, and how much have domestic output prices risen since the base year?",
            "options": [
              "GDP Deflator = 83.3; prices have fallen by 16.7%.",
              "GDP Deflator = 100.0; prices are unchanged.",
              "GDP Deflator = 120.0; prices have risen by 20.0%.",
              "GDP Deflator = 200.0; prices have doubled."
            ],
            "correctIndex": 2,
            "explanation": "GDP Deflator = (Nominal GDP / Real GDP) * 100 = (\\$12T / \\$10T) * 100 = 1.20 * 100 = 120.0. A deflator of 120 means the price level of all domestically produced goods and services has risen by 20% since the base year (where the deflator equals 100).",
            "distractorTip": "GDP Deflator = (Nominal GDP / Real GDP) * 100. Base year is always 100."
          },
          {
            "id": "macro2-l7-q2",
            "stem": "Why does the Consumer Price Index (CPI) tend to systematically OVERSTATE the true increase in the cost of living over time compared to the GDP Deflator?",
            "options": [
              "Because CPI includes intermediate capital goods purchased by manufacturing corporations.",
              "Because CPI uses real-time chain-weighted hedonic price adjustments.",
              "Because CPI measures only exported goods produced domestically.",
              "Because CPI uses a fixed market basket of consumer goods, suffering from substitution bias when consumers switch away from goods whose prices rise rapidly toward cheaper alternatives."
            ],
            "correctIndex": 3,
            "explanation": "The CPI uses a fixed market basket of consumer goods determined by periodic household surveys. When the price of beef rises, consumers substitute toward chicken. Because the fixed CPI basket assumes households continue buying the same quantities of beef, it overstates the actual increase in the cost of living (substitution bias).",
            "distractorTip": "CPI uses a FIXED basket (subject to substitution bias); GDP Deflator includes ALL domestically produced goods and updates quantities annually."
          },
          {
            "id": "macro2-l7-q3",
            "stem": "Why does the Consumer Price Index (CPI) tend to slightly overstate the true cost of living over time compared to the GDP Deflator?",
            "options": [
              "The CPI excludes consumer services such as medical care and transportation.",
              "The CPI is calculated using current-year variable production weights rather than fixed weights.",
              "The CPI includes prices of industrial machinery and defense equipment purchased by the government.",
              "The CPI uses a fixed market basket of consumer goods and fails to fully account for consumer substitution toward cheaper alternatives."
            ],
            "correctIndex": 3,
            "explanation": "The CPI suffers from substitution bias: it tracks a fixed basket of goods. When the price of beef rises, consumers substitute toward chicken. Because the CPI assumes households continue buying the exact same quantity of expensive beef, it overstates the actual increase in living costs.",
            "distractorTip": "CPI uses a fixed consumer basket (substitution bias); GDP deflator includes ALL currently produced domestic goods and services."
          }
        ]
      },
      {
        "id": 208,
        "unitIndex": 2,
        "levelNumber": 8,
        "uniqueKey": "macro-u2-l8",
        "topicNumber": "Unit 2 Boss",
        "name": "Apex Economic Indicators & Business Cycle Crucible",
        "subtitle": "Mastery of GDP, CPI, unemployment calculations, and output gaps",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "macro2-l8-q1",
            "stem": "An economy's civilian non-institutional population is 200 million. 120 million people are employed and 10 million people are actively seeking employment. 70 million are retired or not seeking work. What are the Labor Force Participation Rate (LFPR) and the Unemployment Rate (UR)?",
            "options": [
              "LFPR = 65.0%; Unemployment Rate = 7.69%",
              "LFPR = 60.0%; Unemployment Rate = 5.00%",
              "LFPR = 65.0%; Unemployment Rate = 8.33%",
              "LFPR = 70.0%; Unemployment Rate = 10.00%"
            ],
            "correctIndex": 0,
            "explanation": "Labor Force = Employed + Unemployed = 120M + 10M = 130 million. LFPR = (Labor Force / Civilian Population) * 100 = (130 / 200) * 100 = 65.0%. Unemployment Rate = (Unemployed / Labor Force) * 100 = (10 / 130) * 100 = 7.69%.",
            "distractorTip": "Unemployment rate is divided by the LABOR FORCE (Employed + Unemployed), NOT the total population!"
          },
          {
            "id": "macro2-l8-q2",
            "stem": "If unexpected inflation occurs at an annual rate of 8% while lenders and borrowers originally agreed to a 5% fixed nominal interest rate based on expected inflation of 2%, who gains and who loses from this unexpected inflation?",
            "options": [
              "Lenders gain because the nominal dollar value of debt repayments is higher.",
              "Borrowers gain and lenders lose, because the real interest rate becomes negative ($r = 5\\% - 8\\% = -3\\%$), so borrowers repay loans with dollars that have significantly lower purchasing power.",
              "Both borrowers and lenders gain equally from expanded money velocity.",
              "Neither party is affected because fixed interest contracts are legally indexed to gold."
            ],
            "correctIndex": 1,
            "explanation": "By the Fisher equation, Real Interest Rate = Nominal Rate - Actual Inflation. The expected real rate was 5% - 2% = 3%. The actual real rate is 5% - 8% = -3%. Borrowers repay debt using dollars worth much less than anticipated, while lenders receive repayments that purchase less, redistributing wealth from lenders to borrowers.",
            "distractorTip": "Unexpected inflation HURTS lenders and FIXED-income retirees; it BENEFITS borrowers who repay in depreciated dollars!"
          },
          {
            "id": "macro2-l8-q3",
            "stem": "Suppose an economy's CPI was 200 in Year 1 and rises to 210 in Year 2. A worker's nominal wage increased by 3% over the same period. What happened to the worker's real wage?",
            "options": [
              "Real wage increased by 3%.",
              "Real wage decreased by approximately 2%.",
              "Real wage increased by 5%.",
              "Real wage remained perfectly unchanged."
            ],
            "correctIndex": 1,
            "explanation": "Inflation rate = $\\frac{210 - 200}{200} \\times 100 = \\frac{10}{200} \\times 100 = 5.0\\%$. The percentage change in real wage $\\approx \\%\\Delta \\text{Nominal Wage} - \\%\\Delta \\text{Price Level} = 3.0\\% - 5.0\\% = -2.0\\%$. Because inflation exceeded nominal wage growth, purchasing power fell by 2%.",
            "distractorTip": "% change in Real Wage = % change in Nominal Wage - Inflation Rate. If inflation > wage growth, real purchasing power falls."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Unit 3: National Income and Price Determination",
    "shortTitle": "Unit 3: AD-AS & Fiscal Policy",
    "description": "Aggregate Demand (AD) and its downward slope, Aggregate Supply (SRAS & LRAS), macroeconomic equilibrium, recessionary/inflationary gaps, multipliers, and fiscal policy",
    "examWeight": "17–27% of AP Macro Exam",
    "biome": {
      "name": "Equilibrium Summit & Fiscal Canyon",
      "icon": "🏛️",
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
        "id": 301,
        "unitIndex": 3,
        "levelNumber": 1,
        "uniqueKey": "macro-u3-l1",
        "topicNumber": "Topic 3.1 & 3.2",
        "name": "Aggregate Demand Slope Determinants",
        "subtitle": "Wealth effect, interest rate effect, and foreign purchases effect",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "macro3-l1-q1",
            "stem": "Why does the Aggregate Demand (AD) curve slope downward in macroeconomic models, unlike a microeconomic demand curve for an individual product?",
            "options": [
              "Because the law of diminishing marginal utility applies across all manufacturing sectors.",
              "Because central banks manipulate currency exchange rates whenever nominal wages rise.",
              "Because of the Real Wealth Effect, the Interest Rate Effect, and the Foreign Purchases (Net Export) Effect.",
              "Because higher prices cause consumers to substitute toward imported goods exclusively."
            ],
            "correctIndex": 2,
            "explanation": "The AD curve slopes downward due to three macro effects: (1) Real Wealth Effect: higher price levels erode the real purchasing power of accumulated wealth, cutting consumption; (2) Interest Rate Effect: higher price levels increase demand for money, raising interest rates and reducing investment; (3) Foreign Purchases Effect: higher domestic prices make exports less competitive, cutting net exports.",
            "distractorTip": "Micro demand slopes down due to substitution and income effects; Macro AD slopes down due to Wealth, Interest Rate, and Foreign Purchases effects!"
          },
          {
            "id": "macro3-l1-q2",
            "stem": "Which of the following events will shift the Aggregate Demand (AD) curve to the right?",
            "options": [
              "A substantial increase in personal income tax rates on households.",
              "A collapse in consumer confidence regarding future job security.",
              "A major appreciation of the domestic currency that reduces foreign purchases of exports.",
              "A decrease in the real interest rate that spurs businesses to invest in new machinery and equipment."
            ],
            "correctIndex": 3,
            "explanation": "A decrease in real interest rates lowers the cost of borrowing for firms, spurring private business investment spending (I). Since Investment is a major component of Aggregate Demand (AD = C + I + G + X_n), higher investment shifts the AD curve to the right. Higher taxes, lower confidence, or currency appreciation shift AD to the left.",
            "distractorTip": "AD shifts right when C, I, G, or X_n increases. Lower interest rates boost Investment (I), shifting AD right."
          },
          {
            "id": "macro3-l1-q3",
            "stem": "Which of the following explains why the Aggregate Demand (AD) curve is downward sloping, distinguishing it from a microeconomic demand curve?",
            "options": [
              "The substitution of domestic goods for identical foreign goods when relative wages change.",
              "The law of diminishing marginal utility across all consumer product categories.",
              "The interest rate effect: higher price levels increase money demand, driving up nominal interest rates and dampening investment spending.",
              "The income effect of wage adjustments across industrial manufacturing plants."
            ],
            "correctIndex": 2,
            "explanation": "The three reasons the AD curve slopes downward are: (1) The Real Wealth Effect (higher $P$ erodes purchasing power), (2) The Interest Rate Effect (higher $P$ increases money demand, raising interest rates and reducing $I$ and $C$), and (3) The Foreign Purchases/Exchange Rate Effect (higher domestic $P$ makes exports less competitive, reducing $X_n$).",
            "distractorTip": "Micro demand slopes down due to substitution/income effects between individual goods; AD slopes down due to wealth, interest rate, and foreign purchases effects."
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "macro-u3-l2",
        "topicNumber": "Topic 3.3 & 3.4",
        "name": "Short-Run Aggregate Supply & Sticky Wages",
        "subtitle": "Sticky wages/prices and supply shock determinants",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro3-l2-q1",
            "stem": "Why does the Short-Run Aggregate Supply (SRAS) curve slope upward in the short run?",
            "options": [
              "Because input prices (nominal wages and resource costs) are sticky or inflexible in the short run, so higher output prices increase firm profit margins and incentivize higher production.",
              "Because firms operate with perfectly flexible nominal wages that adjust instantly to inflation.",
              "Because the production possibilities curve shifts outward whenever nominal prices increase.",
              "Because technological innovation increases automatically when the price level rises."
            ],
            "correctIndex": 0,
            "explanation": "In the short run, nominal wages and other input contracts are sticky (fixed by long-term union agreements or contracts). When the aggregate price level rises, output selling prices rise while input costs remain fixed, expanding profit margins and prompting firms to increase output.",
            "distractorTip": "SRAS slopes upward because nominal wages and resource prices are STICKY in the short run!"
          },
          {
            "id": "macro3-l2-q2",
            "stem": "Which of the following will cause the Short-Run Aggregate Supply (SRAS) curve to shift to the LEFT?",
            "options": [
              "A technological advance that enhances labor productivity across all manufacturing lines.",
              "An abrupt, substantial increase in the global price of crude oil and imported raw materials.",
              "A nationwide reduction in nominal business wages.",
              "An increase in household consumer spending financed by credit."
            ],
            "correctIndex": 1,
            "explanation": "An increase in the price of key production inputs (such as global crude oil or widespread wages) raises per-unit production costs across the economy, shifting the SRAS curve to the left (a negative supply shock). Technology gains or wage drops shift SRAS right, while consumer spending shifts AD.",
            "distractorTip": "Input cost increases (wages, oil, raw materials) shift SRAS to the LEFT; productivity gains shift SRAS to the RIGHT."
          },
          {
            "id": "macro3-l2-q3",
            "stem": "Why is the Short-Run Aggregate Supply (SRAS) curve upward sloping in the short run?",
            "options": [
              "Nominal wages and input costs are sticky (inflexible) in the short run due to labor contracts, so higher product prices increase firm profitability and output.",
              "Technological innovation increases continuously in the short run.",
              "The central bank automatically lowers interest rates as output expands.",
              "All product and resource prices adjust instantaneously to price level shocks."
            ],
            "correctIndex": 0,
            "explanation": "In the short run, nominal wages and other factor input prices are fixed by labor agreements, leases, and implicit contracts (sticky wages). When the overall price level rises, output prices rise faster than input costs, widening profit margins and inducing firms to expand production.",
            "distractorTip": "Sticky input costs and wages in the short run make SRAS upward sloping; in the long run, all prices are fully flexible, making LRAS vertical."
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "macro-u3-l3",
        "topicNumber": "Topic 3.5 & 3.6",
        "name": "Long-Run Aggregate Supply & Macro Equilibrium",
        "subtitle": "Potential GDP, vertical LRAS, and full-employment output",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro3-l3-q1",
            "stem": "Why is the Long-Run Aggregate Supply (LRAS) curve represented as a vertical line at the economy's potential output (Y_f)?",
            "options": [
              "Because government regulatory agencies fix all retail prices in the long run.",
              "Because aggregate demand is completely unaffected by price level changes in the long run.",
              "Because in the long run, all wages and input prices are fully flexible and adjust proportionally to price level changes, leaving real output determined solely by productive resources and technology.",
              "Because the unemployment rate is permanently reduced to 0% in the long run."
            ],
            "correctIndex": 2,
            "explanation": "In the long run, contracts expire and all wages and input costs adjust fully to changes in the price level. Since relative prices and real profit margins return to equilibrium, changes in the aggregate price level have zero effect on real GDP. Real output is fixed at potential GDP (full employment).",
            "distractorTip": "LRAS is vertical because wages and resource prices are FULLY FLEXIBLE in the long run!"
          },
          {
            "id": "macro3-l3-q2",
            "stem": "In long-run macroeconomic equilibrium, at what intersection point does the economy operate?",
            "options": [
              "Where the Short-Run Aggregate Supply curve intersects the vertical axis at zero price.",
              "Where the Aggregate Demand curve is tangent to the consumer price index.",
              "Where actual unemployment is twice the natural rate of unemployment.",
              "Where the Aggregate Demand (AD) curve, Short-Run Aggregate Supply (SRAS) curve, and Long-Run Aggregate Supply (LRAS) curve intersect simultaneously at potential output (Y_f)."
            ],
            "correctIndex": 3,
            "explanation": "Long-run macroeconomic equilibrium occurs where AD, SRAS, and LRAS intersect at the same price level and real GDP level (Y_f). At this point, the economy is operating at full employment (actual unemployment = natural rate of unemployment), and expected price levels equal actual price levels.",
            "distractorTip": "Long-run equilibrium: AD = SRAS = LRAS at full-employment output Y_f."
          },
          {
            "id": "macro3-l3-q3",
            "stem": "In the AD-AS model, what does the vertical Long-Run Aggregate Supply (LRAS) curve represent?",
            "options": [
              "The maximum theoretical physical output attainable if all citizens work 24 hours a day.",
              "The output level where structural and frictional unemployment are completely eliminated.",
              "The price level where the central bank stabilizes the money supply.",
              "The economy's potential output ($Y_f$) achieved when all input prices are fully flexible and unemployment equals the natural rate ($u = u_n$)."
            ],
            "correctIndex": 3,
            "explanation": "LRAS is vertical at potential GDP ($Y_f$) because in the long run, input prices (including nominal wages) fully adjust to changes in the price level. As a result, the price level does not affect real output in the long run, and the economy operates at full employment ($u = u_n$ with zero cyclical unemployment).",
            "distractorTip": "At LRAS, actual unemployment equals the natural rate of unemployment ($u = u_n$); cyclical unemployment is zero."
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "macro-u3-l4",
        "topicNumber": "Topic 3.7",
        "name": "Output Gaps: Recessionary vs Inflationary",
        "subtitle": "Self-correcting mechanism and gap adjustments",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro3-l4-q1",
            "stem": "An economy is currently operating at an equilibrium Real GDP below its potential output (Y < Y_f). What type of output gap exists, and what will happen in the long run if the government does not intervene (self-correction)?",
            "options": [
              "A recessionary gap; high unemployment will eventually put downward pressure on nominal wages, shifting the SRAS curve to the right until full employment is restored.",
              "An inflationary gap; firms will raise prices, shifting Aggregate Demand to the right.",
              "A recessionary gap; wages will rise automatically, shifting SRAS left.",
              "An inflationary gap; potential GDP will shift inward to match current output."
            ],
            "correctIndex": 0,
            "explanation": "When actual output is below potential output (Y < Y_f), the economy has a recessionary gap, and unemployment exceeds the natural rate. Without policy intervention, high unemployment causes workers to accept lower nominal wages over time. Falling input costs shift SRAS to the right, returning output to Y_f at a lower price level.",
            "distractorTip": "Recessionary gap self-correction: High unemployment -> Nominal wages fall -> SRAS shifts RIGHT back to Y_f."
          },
          {
            "id": "macro3-l4-q2",
            "stem": "An economy experiences an inflationary gap where current Real GDP exceeds potential output (Y > Y_f). How does the economy self-correct back to long-run equilibrium in the absence of fiscal or monetary policy?",
            "options": [
              "Aggregate demand decreases automatically because consumer incomes collapse.",
              "Labor shortages and low unemployment put upward pressure on nominal wages, increasing production costs and shifting the SRAS curve to the left until output returns to Y_f.",
              "The LRAS curve shifts permanently outward to accommodate the excess demand.",
              "Nominal wages fall, shifting the SRAS curve to the right."
            ],
            "correctIndex": 1,
            "explanation": "In an inflationary gap, output exceeds capacity and unemployment is below the natural rate. Tight labor markets force employers to compete for scarce workers by bidding up nominal wages. Higher wage costs shift the SRAS curve to the left, restoring output to Y_f at a higher equilibrium price level.",
            "distractorTip": "Inflationary gap self-correction: Labor shortages -> Nominal wages rise -> SRAS shifts LEFT back to Y_f."
          },
          {
            "id": "macro3-l4-q3",
            "stem": "An economy is currently experiencing an inflationary gap where $Y > Y_f$. If the government and central bank do not intervene, how will the economy automatically self-adjust back to long-run equilibrium?",
            "options": [
              "Consumer demand will collapse, shifting the Aggregate Demand curve rapidly to the left.",
              "Nominal wages and resource prices will eventually rise due to labor shortages, shifting the SRAS curve to the left until output returns to $Y_f$ at a higher price level.",
              "The Long-Run Aggregate Supply curve will shift rightward to match actual output.",
              "Firms will permanently reduce product prices to clear excess inventory."
            ],
            "correctIndex": 1,
            "explanation": "In an inflationary gap, output exceeds potential and unemployment is below the natural rate. Tight labor markets force employers to compete for workers by bidding up nominal wages. As wages rise, production costs increase, shifting SRAS to the left until real GDP returns to potential output ($Y_f$) at a higher equilibrium price level.",
            "distractorTip": "Long-run self-adjustment always occurs via shifting SRAS: In an inflationary gap, wages rise and SRAS shifts LEFT. In a recessionary gap, wages fall and SRAS shifts RIGHT."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "macro-u3-l5",
        "topicNumber": "Topic 3.8",
        "name": "Fiscal Multipliers & Keynesian Spending",
        "subtitle": "MPC, MPS, spending multiplier, and tax multiplier formulas",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro3-l5-q1",
            "stem": "If the Marginal Propensity to Consume (MPC) in an economy is 0.8, what are the Spending Multiplier and the Tax Multiplier, respectively?",
            "options": [
              "Spending Multiplier = 1.25; Tax Multiplier = -0.25",
              "Spending Multiplier = 4; Tax Multiplier = -5",
              "Spending Multiplier = 5; Tax Multiplier = -4",
              "Spending Multiplier = 10; Tax Multiplier = -8"
            ],
            "correctIndex": 2,
            "explanation": "Marginal Propensity to Save (MPS) = 1 - MPC = 1 - 0.8 = 0.2. Spending Multiplier = 1 / MPS = 1 / 0.2 = 5. Tax Multiplier = -MPC / MPS = -0.8 / 0.2 = -4. (Notice the tax multiplier is always negative and has an absolute value of 1 less than the spending multiplier).",
            "distractorTip": "Spending Multiplier = 1 / (1 - MPC) = 1 / MPS. Tax Multiplier = -MPC / MPS. Tax multiplier is always 1 less in magnitude!"
          },
          {
            "id": "macro3-l5-q2",
            "stem": "An economy faces a recessionary gap of $40 billion. Assuming the Marginal Propensity to Consume (MPC) is 0.75, what is the minimum change in government spending (G) required to close the gap?",
            "options": [
              "Increase government spending by $40 billion.",
              "Increase government spending by $30 billion.",
              "Increase government spending by $53.3 billion.",
              "Increase government spending by $10 billion."
            ],
            "correctIndex": 3,
            "explanation": "MPS = 1 - 0.75 = 0.25. Spending Multiplier = 1 / MPS = 1 / 0.25 = 4. Change in Real GDP = Multiplier * Change in G. Therefore, $40 billion = 4 * Change in G => Change in G = $40 billion / 4 = $10 billion. An initial $10 billion injection expands aggregate output by $40 billion.",
            "distractorTip": "Change in Real GDP = Spending Multiplier * Change in G. Required Delta_G = Gap / Multiplier!"
          },
          {
            "id": "macro3-l5-q3",
            "stem": "If the Marginal Propensity to Consume ($MPC$) is 0.8, what are the government spending multiplier and the tax multiplier?",
            "options": [
              "Spending Multiplier = 4; Tax Multiplier = -3",
              "Spending Multiplier = 10; Tax Multiplier = -9",
              "Spending Multiplier = 5; Tax Multiplier = -4",
              "Spending Multiplier = 1.25; Tax Multiplier = -0.8"
            ],
            "correctIndex": 2,
            "explanation": "Marginal Propensity to Save ($MPS$) = $1 - MPC = 1 - 0.8 = 0.2$. Spending Multiplier = $\\frac{1}{MPS} = \\frac{1}{0.2} = 5$. Tax Multiplier = $-\\frac{MPC}{MPS} = -\\frac{0.8}{0.2} = -4$.",
            "distractorTip": "Spending multiplier is always positive and 1 greater in absolute magnitude than the tax multiplier: $k_{\\text{spend}} - |k_{\\text{tax}}| = 1$."
          }
        ]
      },
      {
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "macro-u3-l6",
        "topicNumber": "Topic 3.9",
        "name": "Fiscal Policy & Automatic Stabilizers",
        "subtitle": "Discretionary fiscal stimulus and progressive tax stabilizers",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro3-l6-q1",
            "stem": "Which combination of fiscal policy actions represents an expansionary fiscal policy designed to combat a recessionary output gap?",
            "options": [
              "Increasing government purchases of goods and services, and/or decreasing personal income taxes.",
              "Decreasing government spending, and increasing personal income taxes.",
              "Selling government treasury bonds on the open market, and raising reserve requirements.",
              "Raising the federal funds rate and decreasing unemployment benefits."
            ],
            "correctIndex": 0,
            "explanation": "Expansionary fiscal policy involves government actions to stimulate aggregate demand: increasing government expenditures directly injects spending, while reducing taxes increases household disposable income, spurring consumption and shifting the AD curve right.",
            "distractorTip": "Expansionary Fiscal Policy: Increase G and/or Decrease Taxes. (Open market operations are MONETARY policy, not fiscal!)."
          },
          {
            "id": "macro3-l6-q2",
            "stem": "Why are progressive income taxes and means-tested unemployment insurance benefits called 'Automatic Stabilizers' in macroeconomics?",
            "options": [
              "Because they automatically balance the federal government budget every fiscal quarter.",
              "Because they automatically adjust tax collections and transfer payments countercyclically without requiring new legislation from Congress, moderating business cycle fluctuations.",
              "Because they automatically adjust central bank interest rates.",
              "Because they eliminate the national debt during economic recessions."
            ],
            "correctIndex": 1,
            "explanation": "Automatic stabilizers operate without new legislative action. In a recession, as incomes fall, workers move into lower tax brackets (reducing tax withdrawals) and more people qualify for unemployment benefits (injecting income). This cushions the decline in disposable income and aggregate demand automatically.",
            "distractorTip": "Automatic Stabilizers: Work WITHOUT new legislative laws (e.g. progressive income taxes and unemployment benefits)."
          },
          {
            "id": "macro3-l6-q3",
            "stem": "Which of the following functions as an automatic stabilizer during a macroeconomic recession without requiring any new legislative action by Congress?",
            "options": [
              "Progressive income tax collections automatically decline and unemployment insurance payments automatically increase, moderating the decline in disposable income.",
              "Congress passes an emergency infrastructure appropriation bill.",
              "The Federal Reserve lowers the target range for the federal funds rate.",
              "State governors balance municipal budgets by cutting public school teacher salaries."
            ],
            "correctIndex": 0,
            "explanation": "Automatic stabilizers are fiscal mechanisms built into the tax and transfer system that automatically cushion economic fluctuations without deliberate legislative policy changes. During a downturn, falling incomes lower tax liabilities, and more people qualify for unemployment benefits, stabilizing disposable income and aggregate demand.",
            "distractorTip": "Discretionary fiscal policy requires new legislation (passing a bill); automatic stabilizers happen automatically through existing tax and welfare laws."
          }
        ]
      },
      {
        "id": 307,
        "unitIndex": 3,
        "levelNumber": 7,
        "uniqueKey": "macro-u3-l7",
        "topicNumber": "Topic 3.8 & 3.9",
        "name": "The Balanced Budget Multiplier & Cost-Push Inflation",
        "subtitle": "Net fiscal impacts and supply shocks",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "macro3-l7-q1",
            "stem": "The federal government simultaneously increases government purchases of goods and services by \\$100 billion and raises lump-sum taxes by \\$100 billion to maintain a balanced budget. If the Marginal Propensity to Consume (MPC) is 0.8, what is the net impact on equilibrium real GDP?",
            "options": [
              "Real GDP changes by \\$0 because the tax increase exactly cancels out government purchases.",
              "Real GDP decreases by \\$400 billion because taxes destroy private investment.",
              "Real GDP increases by exactly \\$100 billion, because the Balanced Budget Multiplier is always equal to 1.",
              "Real GDP increases by \\$500 billion due to the spending multiplier."
            ],
            "correctIndex": 2,
            "explanation": "Spending multiplier = 1 / (1 - 0.8) = 5. Change in GDP from spending = +\\$100B * 5 = +\\$500B. Tax multiplier = -0.8 / (1 - 0.8) = -4. Change in GDP from taxes = \\$100B * (-4) = -\\$400B. Net Change in GDP = +\\$500B - \\$400B = +\\$100 billion. The Balanced Budget Multiplier is always 1 because households save a fraction of the tax increase (MPS = 0.2), so the initial drop in consumption is less than the initial government spending injection.",
            "distractorTip": "Balanced Budget Multiplier theorem: An equal increase in G and T increases GDP by EXACTLY the amount of the change in G! Multiplier = 1."
          },
          {
            "id": "macro3-l7-q2",
            "stem": "A geopolitical crisis disrupts global crude oil pipelines, causing energy prices to triple. In the short-run AD-AS model, what happens to the price level and real output (stagflation)?",
            "options": [
              "Aggregate Demand shifts right, raising price level and raising output.",
              "Long-Run Aggregate Supply shifts right due to higher resource extraction.",
              "Aggregate Demand shifts left, lowering price level and lowering output.",
              "Short-Run Aggregate Supply (SRAS) shifts left, causing the price level to rise and real GDP to fall (stagflation)."
            ],
            "correctIndex": 3,
            "explanation": "A negative supply shock (higher input/energy prices) shifts the SRAS curve leftward. This pushes the price level up (cost-push inflation) while simultaneously contracting real output below full employment (recession), producing stagflation.",
            "distractorTip": "Negative supply shock = SRAS shifts LEFT -> Stagflation (Higher Price Level + Lower Real GDP)."
          },
          {
            "id": "macro3-l7-q3",
            "stem": "If the government increases spending by \\$40 billion and simultaneously increases lump-sum taxes by \\$40 billion, what will be the net impact on Aggregate Demand according to the Balanced Budget Multiplier?",
            "options": [
              "Aggregate demand remains perfectly unchanged because the tax cancels the spending.",
              "Aggregate demand decreases by \\$40 billion because taxes hurt consumer confidence.",
              "Aggregate demand increases by \\$160 billion due to the spending multiplier.",
              "Aggregate demand increases by exactly \\$40 billion because the balanced budget multiplier equals 1."
            ],
            "correctIndex": 3,
            "explanation": "The Balanced Budget Multiplier is always equal to 1. Spending Multiplier + Tax Multiplier = $\\frac{1}{MPS} + \\left(-\\frac{MPC}{MPS}\\right) = \\frac{1 - MPC}{MPS} = \\frac{MPS}{MPS} = 1$. An equal increase in $G$ and $T$ of \\$40B increases total equilibrium GDP by $1 \\times \\$40\\text{B} = \\$40\\text{B}$.",
            "distractorTip": "Balanced budget multiplier theorem: $\\Delta Y = \\Delta G$ when $\\Delta G = \\Delta T$. The net multiplier is always exactly 1."
          }
        ]
      },
      {
        "id": 308,
        "unitIndex": 3,
        "levelNumber": 8,
        "uniqueKey": "macro-u3-l8",
        "topicNumber": "Unit 3 Boss",
        "name": "Apex AD-AS Macro Equilibrium & Fiscal Policy Crucible",
        "subtitle": "Full-spectrum output gaps, fiscal interventions, and self-correction",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "macro3-l8-q1",
            "stem": "An economy is in a recessionary gap with real GDP \\$200 billion below potential output ($Y_f$). If the Marginal Propensity to Save (MPS) is 0.25 and the government wishes to restore full employment exclusively through government purchases without changing taxes, what change in government spending ($G$) is required?",
            "options": [
              "Increase government purchases by \\$50 billion.",
              "Increase government purchases by \\$200 billion.",
              "Decrease government purchases by \\$50 billion.",
              "Increase government purchases by \\$800 billion."
            ],
            "correctIndex": 0,
            "explanation": "Spending Multiplier = 1 / MPS = 1 / 0.25 = 4. The recessionary gap is \\$200 billion. Required change in G = Gap / Multiplier = \\$200B / 4 = +\\$50 billion. Increasing G by \\$50 billion shifts AD rightward by \\$200 billion, restoring full employment.",
            "distractorTip": "Required Change in G = Target Output Gap / Spending Multiplier (where Multiplier = 1 / MPS)."
          },
          {
            "id": "macro3-l8-q2",
            "stem": "Suppose an economy experiencing an inflationary gap (output above full employment, $Y > Y_f$) receives NO government fiscal or monetary policy intervention. How does the economy self-correct back to long-run equilibrium?",
            "options": [
              "Consumer confidence falls, shifting Aggregate Demand leftward to zero inflation.",
              "Nominal wages and input costs eventually rise due to labor shortages; higher production costs shift SRAS leftward until output returns to $Y_f$ at a higher price level.",
              "Firms lower prices to sell unsold inventories, shifting SRAS rightward.",
              "Potential output ($Y_f$) automatically expands to match the higher short-run output."
            ],
            "correctIndex": 1,
            "explanation": "In an inflationary gap, labor markets are tight and unemployment is below the natural rate. Over time, workers demand higher nominal wages to match higher living costs. Rising wages increase unit production costs, shifting the SRAS curve leftward until real output returns to long-run potential ($Y_f$) at a permanently higher price level.",
            "distractorTip": "Long-run self-correction: In an inflationary gap, wages RISE, shifting SRAS LEFT back to full employment at a higher price level."
          },
          {
            "id": "macro3-l8-q3",
            "stem": "An economy is in a recessionary gap with actual Real GDP \\$200 billion below potential GDP. If the $MPC = 0.75$, what minimum change in government spending ($G$) is needed to restore full employment?",
            "options": [
              "Increase government spending by \\$200 billion.",
              "Increase government spending by \\$50 billion.",
              "Increase government spending by \\$150 billion.",
              "Decrease government spending by \\$50 billion."
            ],
            "correctIndex": 1,
            "explanation": "$MPS = 1 - 0.75 = 0.25$. Spending Multiplier = $\\frac{1}{0.25} = 4$. Required change in $G$: $\\Delta Y = \\Delta G \\times \\text{Multiplier} \\implies 200 = \\Delta G \\times 4 \\implies \\Delta G = \\frac{200}{4} = \\$50\\text{ billion}$.",
            "distractorTip": "Divide the output gap by the spending multiplier: $\\Delta G = \\frac{\\text{Output Gap}}{\\text{Multiplier}} = \\frac{200}{4} = 50$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Unit 4: Financial Sector",
    "shortTitle": "Unit 4: Financial Sector",
    "description": "Financial assets, money functions, fractional reserve banking, money creation, money market (nominal rates), loanable funds (real rates), and central bank monetary policy",
    "examWeight": "18–22% of AP Macro Exam",
    "biome": {
      "name": "Central Bank Vault & Loanable Capital Basin",
      "icon": "🏦",
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
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "macro-u4-l1",
        "topicNumber": "Topic 4.1 & 4.2",
        "name": "Financial Assets, Money Functions & Liquidity",
        "subtitle": "Medium of exchange, unit of account, and M1 vs M2",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "macro4-l1-q1",
            "stem": "A shopper visits a grocery store and notices that a gallon of milk is priced at $3.99 and a loaf of bread is priced at $2.50. In this scenario, money is functioning primarily as a:",
            "options": [
              "Store of value",
              "Medium of deferred settlement",
              "Unit of account (standard of value)",
              "Financial derivative"
            ],
            "correctIndex": 2,
            "explanation": "Money functions as a Unit of Account when it provides a common numerical measure for the value of goods and services, allowing individuals to compare relative prices and calculate economic transactions efficiently.",
            "distractorTip": "Money Functions: Medium of Exchange = Buying goods; Unit of Account = Pricing / comparing value; Store of Value = Saving purchasing power over time."
          },
          {
            "id": "macro4-l1-q2",
            "stem": "Which list correctly orders financial assets from the MOST liquid to the LEAST liquid?",
            "options": [
              "Real estate property, corporate bonds, checking account deposits, physical cash currency.",
              "Corporate stocks, municipal real estate, certificate of deposit, physical currency.",
              "Gold bullion, commercial real estate, physical cash currency, savings accounts.",
              "Physical cash currency, commercial bank checking account deposits, corporate bonds, commercial real estate."
            ],
            "correctIndex": 3,
            "explanation": "Liquidity measures the ease and speed with which an asset can be converted into money without loss of purchasing power. Physical cash currency is perfectly liquid (M1), followed by demand deposits (checking accounts), then marketable securities (corporate bonds), and lastly physical real estate (which takes significant time and transaction costs to liquidate).",
            "distractorTip": "Liquidity order: Cash -> Checking deposits -> Stocks/Bonds -> Physical Real Estate!"
          },
          {
            "id": "macro4-l1-q3",
            "stem": "Which of the following assets possesses the highest degree of liquidity in the financial system?",
            "options": [
              "A 30-year US Treasury bond",
              "A commercial real estate office park",
              "Currency and checkable bank demand deposits",
              "A rare coin collection and fine art"
            ],
            "correctIndex": 2,
            "explanation": "Liquidity measures the ease and speed with which an asset can be converted directly into the economy's medium of exchange without loss of value. Physical currency and checkable demand deposits constitute M1 money and are perfectly liquid.",
            "distractorTip": "Currency and demand deposits have the highest liquidity; physical real estate and collectibles have very low liquidity."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "macro-u4-l2",
        "topicNumber": "Topic 4.3",
        "name": "Fractional Reserve Banking & Balance Sheets",
        "subtitle": "Required reserves, excess reserves, and T-accounts",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro4-l2-q1",
            "stem": "A commercial bank receives a new cash deposit of $10,000 from a customer. The reserve requirement ratio set by the central bank is 10%. If the bank holds zero initial excess reserves, what are the bank's Required Reserves and new Excess Reserves available to loan?",
            "options": [
              "Required Reserves = $1,000; Excess Reserves = $9,000",
              "Required Reserves = $10,000; Excess Reserves = $0",
              "Required Reserves = $500; Excess Reserves = $9,500",
              "Required Reserves = $9,000; Excess Reserves = $1,000"
            ],
            "correctIndex": 0,
            "explanation": "Required Reserves = Total Deposits * Reserve Ratio = $10,000 * 0.10 = $1,000. Excess Reserves = Total Reserves - Required Reserves = $10,000 - $1,000 = $9,000. The bank can legally lend out its entire $9,000 in excess reserves.",
            "distractorTip": "Required Reserves = Deposits * Reserve Ratio; Excess Reserves = Total Reserves - Required Reserves. Banks can only loan EXCESS reserves!"
          },
          {
            "id": "macro4-l2-q2",
            "stem": "On a commercial bank's T-account balance sheet, how are customer demand deposits (checking accounts) and loans extended to borrowers classified?",
            "options": [
              "Deposits are Assets; Loans are Liabilities.",
              "Deposits are Liabilities (the bank owes money to depositors); Loans are Assets (borrowers owe money to the bank).",
              "Both deposits and loans are classified as Liabilities.",
              "Both deposits and loans are classified as Net Worth."
            ],
            "correctIndex": 1,
            "explanation": "Customer deposits represent money the bank owes to its depositors on demand, making them Liabilities for the bank. Loans issued to borrowers represent legal claims to future repayments plus interest, making them income-generating Assets for the bank.",
            "distractorTip": "Bank Balance Sheet: Deposits = Liabilities (owed to customers); Loans & Reserves = Assets (owned by bank)."
          },
          {
            "id": "macro4-l2-q3",
            "stem": "A commercial bank receives a new cash deposit of \\$10,000. If the legal reserve requirement is 10%, what are the bank's required reserves and maximum initial new loan amount?",
            "options": [
              "Required Reserves = \\$1,000; Maximum Initial Loan = \\$9,000",
              "Required Reserves = \\$10,000; Maximum Initial Loan = \\$0",
              "Required Reserves = \\$500; Maximum Initial Loan = \\$9,500",
              "Required Reserves = \\$9,000; Maximum Initial Loan = \\$1,000"
            ],
            "correctIndex": 0,
            "explanation": "Required reserves = Deposit $\\times$ Reserve Ratio = $\\$10,000 \\times 0.10 = \\$1,000$. Excess reserves = Total Reserves - Required Reserves = $\\$10,000 - \\$1,000 = \\$9,000$. A single commercial bank can lend only up to its excess reserves, which is \\$9,000.",
            "distractorTip": "A single bank creates loans equal to its EXCESS reserves (\\$9,000); the entire banking system can create loans up to excess reserves $\\times$ multiplier."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "macro-u4-l3",
        "topicNumber": "Topic 4.4",
        "name": "Money Creation & The Money Multiplier",
        "subtitle": "Deposit expansion formula 1 / rr",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro4-l3-q1",
            "stem": "If the reserve requirement ratio set by the central bank is 20%, what is the simple money multiplier, and what is the maximum total increase in the money supply from a $5,000 injection of new excess reserves into the banking system?",
            "options": [
              "Money Multiplier = 20; Maximum money supply expansion = $100,000",
              "Money Multiplier = 2; Maximum money supply expansion = $10,000",
              "Money Multiplier = 5; Maximum money supply expansion = $25,000",
              "Money Multiplier = 4; Maximum money supply expansion = $20,000"
            ],
            "correctIndex": 2,
            "explanation": "Simple Money Multiplier = 1 / Reserve Requirement Ratio = 1 / 0.20 = 5. Maximum Money Supply Creation = Excess Reserves * Money Multiplier = $5,000 * 5 = $25,000.",
            "distractorTip": "Simple Money Multiplier = 1 / Reserve Ratio. Max Money Created = Excess Reserves * Multiplier."
          },
          {
            "id": "macro4-l3-q2",
            "stem": "Which real-world friction would cause the actual money supply expansion in an economy to be LESS than the theoretical maximum calculated by the simple money multiplier?",
            "options": [
              "Commercial banks holding zero excess reserves.",
              "All citizens immediately depositing 100% of cash into checking accounts.",
              "The central bank reducing the reserve requirement ratio.",
              "Borrowers holding part of loan proceeds as physical cash currency (cash drain) and banks choosing to hold excess reserves rather than lending them out fully."
            ],
            "correctIndex": 3,
            "explanation": "The simple money multiplier assumes banks lend 100% of excess reserves and the public redeposits 100% of loan proceeds. If individuals keep cash in their wallets (cash leakage/drain) or banks hold excess reserves due to risk aversion, the deposit expansion process is truncated, reducing actual money creation.",
            "distractorTip": "Cash leaks (currency drains) and banks holding excess reserves reduce actual money creation below the theoretical maximum!"
          },
          {
            "id": "macro4-l3-q3",
            "stem": "If the reserve requirement is 20% and a bank receives a fresh \\$5,000 cash deposit from outside the banking system, what is the maximum potential increase in the money supply for the entire banking system?",
            "options": [
              "\\$100,000",
              "\\$5,000",
              "\\$1,000",
              "\\$20,000"
            ],
            "correctIndex": 3,
            "explanation": "Required reserves = 20% of \\$5,000 = \\$1,000. Initial excess reserves = \\$4,000. Simple money multiplier = $\\frac{1}{rr} = \\frac{1}{0.20} = 5$. Maximum potential expansion of checkable deposits from lending = Excess Reserves $\\times$ Multiplier = $\\$4,000 \\times 5 = \\$20,000$. (The initial \\$5,000 was already currency, so the net new money created is \\$20,000).",
            "distractorTip": "Maximum money creation = Initial Excess Reserves $\\times$ Money Multiplier = $\\$4,000 \\times 5 = \\$20,000$."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "macro-u4-l4",
        "topicNumber": "Topic 4.5",
        "name": "The Money Market & Nominal Interest Rates",
        "subtitle": "Money demand, money supply, and nominal rate determination",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro4-l4-q1",
            "stem": "In the Money Market, what is the vertical axis, and why does the Money Demand (MD) curve slope downward?",
            "options": [
              "Vertical axis: Nominal Interest Rate. MD slopes downward because higher interest rates increase the opportunity cost of holding non-interest-bearing cash, leading households to hold less money.",
              "Vertical axis: Real Interest Rate. MD slopes downward because higher prices reduce purchasing power.",
              "Vertical axis: Price Level. MD slopes downward because the central bank controls currency printing.",
              "Vertical axis: Inflation Rate. MD slopes downward because banks hold fewer excess reserves."
            ],
            "correctIndex": 0,
            "explanation": "The Money Market features the Nominal Interest Rate on the vertical axis and the Quantity of Money on the horizontal axis. When nominal interest rates are high, the opportunity cost of holding liquid cash (forgoing interest on bonds) is high, so people hold less cash, giving Money Demand its downward slope.",
            "distractorTip": "Money Market: Vertical axis is NOMINAL Interest Rate. Downward slope reflects opportunity cost of holding money vs bonds."
          },
          {
            "id": "macro4-l4-q2",
            "stem": "If the central bank conducts Open Market Operations by purchasing government bonds from commercial banks, what happens to the Money Supply curve and the equilibrium nominal interest rate?",
            "options": [
              "Money Supply shifts left, raising nominal interest rates.",
              "Money Supply shifts right, lowering nominal interest rates.",
              "Money Demand shifts right, raising nominal interest rates.",
              "Money Supply remains unchanged, but inflation drops to zero."
            ],
            "correctIndex": 1,
            "explanation": "When the central bank buys bonds, it pays banks with liquid reserves. This injects money into the banking system, shifting the vertical Money Supply curve to the right (MS ->). With more money available, the equilibrium nominal interest rate falls.",
            "distractorTip": "Central bank BUYS bonds = BIGGER money supply (shifts right) -> Interest rates FALL! (Mnemonic: Buy = Bigger)."
          },
          {
            "id": "macro4-l4-q3",
            "stem": "In the money market, what will happen to the equilibrium nominal interest rate if the central bank sells government bonds on the open market?",
            "options": [
              "The nominal interest rate will decrease as money supply expands.",
              "The nominal interest rate will increase because selling bonds drains bank reserves and shifts the money supply curve leftward.",
              "The nominal interest rate will remain constant because money demand is vertical.",
              "The nominal interest rate will drop to zero due to the liquidity trap."
            ],
            "correctIndex": 1,
            "explanation": "When the central bank sells government bonds, commercial banks buy them with reserves, reducing bank reserve balances and shifting the money supply ($MS$) curve to the left. Along a downward-sloping money demand curve, the shortage of money bids up the equilibrium nominal interest rate.",
            "distractorTip": "Open market operations: Buying bonds = Bigger money supply (lower interest rates); Selling bonds = Smaller money supply (higher interest rates)."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "macro-u4-l5",
        "topicNumber": "Topic 4.6",
        "name": "The Loanable Funds Market & Real Interest Rates",
        "subtitle": "Savings supply, investment demand, and real interest rates",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro4-l5-q1",
            "stem": "In the Loanable Funds Market, what economic variable is plotted on the vertical axis, and who represents the Supply and Demand sides of loanable funds?",
            "options": [
              "Nominal Interest Rate; Central Bank is Supply, Commercial Banks are Demand.",
              "Price Level; Government is Supply, Households are Demand.",
              "Real Interest Rate; Savers (households/foreign capital inflows) represent Supply, and Borrowers (firms investing in capital/government deficits) represent Demand.",
              "Exchange Rate; Importers represent Supply, Exporters represent Demand."
            ],
            "correctIndex": 2,
            "explanation": "The Loanable Funds market coordinates domestic savings and investment. The vertical axis is the REAL Interest Rate. The Supply of loanable funds comes from national savings (households, business retained earnings, capital inflows). The Demand for loanable funds comes from private firms funding investment projects and governments financing budget deficits.",
            "distractorTip": "Loanable Funds Market: Vertical axis is REAL Interest Rate. Supply = Savings; Demand = Investment borrowing."
          },
          {
            "id": "macro4-l5-q2",
            "stem": "If the national government incurs a large fiscal budget deficit and borrows extensively in the loanable funds market, what is the effect on the equilibrium real interest rate and private business investment?",
            "options": [
              "Real interest rates decrease, and private investment expands.",
              "Supply of loanable funds shifts right, lowering real interest rates.",
              "Demand for loanable funds decreases, causing deflation.",
              "Demand for loanable funds shifts right, increasing the real interest rate and crowding out private investment spending."
            ],
            "correctIndex": 3,
            "explanation": "Government borrowing to finance deficits shifts the Demand for loanable funds to the right. This drives up the equilibrium real interest rate. At higher borrowing costs, private firms cancel capital investment projects, an effect known as Crowding Out.",
            "distractorTip": "Government budget deficits increase demand for loanable funds -> Real interest rate RISES -> Private investment is CROWDED OUT!"
          },
          {
            "id": "macro4-l5-q3",
            "stem": "In the Loanable Funds Market, which curve represents the demand for loanable funds and which price equilibrates this market?",
            "options": [
              "The supply curve represents government borrowing; the price is the nominal interest rate.",
              "The demand curve represents consumer and business borrowing for investment; the price is the nominal exchange rate.",
              "The demand curve represents borrowers seeking funds for capital investment; the equilibrium price is the Real Interest Rate.",
              "The supply curve represents commercial bank reserve requirements; the price is the federal funds rate."
            ],
            "correctIndex": 2,
            "explanation": "In the loanable funds market, demand reflects borrowers (firms funding capital projects and governments financing deficits). Supply reflects private domestic savings and net capital inflows. The vertical axis and equilibrium price is the REAL interest rate (unlike the money market which determines the nominal interest rate).",
            "distractorTip": "Money Market = Nominal Interest Rate; Loanable Funds Market = Real Interest Rate."
          }
        ]
      },
      {
        "id": 406,
        "unitIndex": 4,
        "levelNumber": 6,
        "uniqueKey": "macro-u4-l6",
        "topicNumber": "Topic 4.7",
        "name": "Central Bank Monetary Policy Tools",
        "subtitle": "Traditional reserve requirements vs modern ample reserves (IORB)",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro4-l6-q1",
            "stem": "In a modern monetary policy system with Ample Reserves (such as the Federal Reserve post-2008), what primary administered tool does the central bank use to influence short-term policy interest rates?",
            "options": [
              "The Interest on Reserve Balances (IORB) rate paid to commercial banks on their reserve holdings.",
              "The legal reserve requirement ratio, which is adjusted weekly.",
              "Physical printing and destruction of paper banknotes.",
              "Direct price controls on corporate stock margins."
            ],
            "correctIndex": 0,
            "explanation": "In an ample-reserves framework, the banking system holds abundant reserves, so small open-market operations cannot shift supply to change rates. Instead, the central bank sets the Interest on Reserve Balances (IORB) rate, which acts as a benchmark floor: banks will not lend to others below what they can earn risk-free from the central bank.",
            "distractorTip": "Ample Reserves Framework: Central bank changes policy interest rates primarily via the Interest on Reserve Balances (IORB) rate!"
          },
          {
            "id": "macro4-l6-q2",
            "stem": "If a central bank operating in a limited-reserves system wants to enact contractionary monetary policy to combat high inflation, which set of policy actions should it implement?",
            "options": [
              "Buy government bonds, lower the discount rate, and decrease the reserve requirement.",
              "Sell government bonds on the open market, increase the discount rate, and/or raise the reserve requirement ratio.",
              "Decrease income taxes and increase federal grants.",
              "Lower the policy rate to zero percent."
            ],
            "correctIndex": 1,
            "explanation": "Contractionary monetary policy aims to reduce the money supply and raise interest rates. The central bank sells government securities (absorbing reserves), raises the discount rate (cost of borrowing from the Fed), or raises reserve requirements, making loans scarcer and shifting AD left.",
            "distractorTip": "Contractionary Monetary Policy: SELL bonds, RAISE discount rate, RAISE reserve requirement."
          },
          {
            "id": "macro4-l6-q3",
            "stem": "Under an ample-reserves monetary policy framework, what is the Federal Reserve's primary policy tool used to steer the federal funds rate?",
            "options": [
              "The Interest on Reserve Balances (IORB) rate.",
              "Open market purchases of long-term corporate bonds.",
              "Adjusting mandatory legal reserve requirements on commercial banks.",
              "Directly setting price controls on consumer mortgage loans."
            ],
            "correctIndex": 0,
            "explanation": "In an ample-reserves regime, banks hold massive reserves, making the reserve supply curve flat (horizontal) at the administered rate. The Fed uses administered rates—primarily the Interest on Reserve Balances (IORB) rate—as a reservation rate to anchor and steer the federal funds rate without adjusting reserve quantities.",
            "distractorTip": "In modern AP Macro: Under AMPLE reserves, the Fed uses IORB and the discount rate; under LIMITED reserves, it uses open market operations and reserve requirements."
          }
        ]
      },
      {
        "id": 407,
        "unitIndex": 4,
        "levelNumber": 7,
        "uniqueKey": "macro-u4-l7",
        "topicNumber": "Topic 4.6",
        "name": "Federal Reserve Ample Reserves Framework",
        "subtitle": "Administered rates: IORB, ON RRP, and policy rate targeting",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "macro4-l7-q1",
            "stem": "Under the Federal Reserve's current 'Ample Reserves' monetary policy operating framework, why does changing the statutory reserve requirement or engaging in small open market operations no longer effectively steer the federal funds rate?",
            "options": [
              "Because the banking system is prohibited from borrowing overnight reserves.",
              "Because commercial banks hold zero excess reserves at all times.",
              "Because the volume of reserves in the banking system is so massive that the reserve demand curve intersects reserve supply in its flat, near-zero horizontal region.",
              "Because the U.S. Treasury sets market interest rates by executive decree."
            ],
            "correctIndex": 2,
            "explanation": "In an ample-reserves regime, reserves are so abundant that banks have no scarcity of reserves. The supply curve intersects the flat (infinitely elastic) portion of reserve demand. Therefore, small shifts in reserve supply via traditional open market operations do not change interest rates. Instead, the Fed uses administered rates.",
            "distractorTip": "Ample Reserves Framework: Reserves are super-abundant on the flat part of the demand curve; the Fed steers rates using ADMINISTERED rates (IORB)."
          },
          {
            "id": "macro4-l7-q2",
            "stem": "What is the primary administered policy interest rate that the Federal Reserve adjusts to raise or lower the target range for the federal funds rate in an ample-reserves environment?",
            "options": [
              "The prime lending rate charged by private commercial banks.",
              "The 30-year fixed residential mortgage benchmark rate.",
              "The statutory corporate capital gains tax rate.",
              "The Interest on Reserve Balances (IORB) rate paid by the Fed on deposits held by depository institutions."
            ],
            "correctIndex": 3,
            "explanation": "The IORB (Interest on Reserve Balances) rate acts as a reservation rate and floor for overnight lending. No commercial bank will lend reserves to another bank in the federal funds market for less than it can earn risk-free depositing those reserves at the Fed. Adjusting IORB shifts the federal funds rate target.",
            "distractorTip": "In ample reserves, the Fed's PRIMARY policy tool is the IORB (Interest on Reserve Balances) rate!"
          },
          {
            "id": "macro4-l7-q3",
            "stem": "If the Federal Reserve raises the Interest on Reserve Balances (IORB) rate, what is the transmission mechanism to market interest rates and Aggregate Demand?",
            "options": [
              "Banks lend more to consumers, expanding money supply and raising investment spending.",
              "Banks demand fewer reserves, driving the federal funds rate down toward zero.",
              "The money multiplier doubles, shifting the aggregate supply curve rightward.",
              "Banks arbitrage by requiring higher rates on interbank loans, raising the federal funds rate, elevating borrowing costs, and dampening interest-sensitive investment and consumption."
            ],
            "correctIndex": 3,
            "explanation": "Because banks can earn the risk-free IORB rate directly at the Fed, they will not lend reserves in the federal funds market at any rate below IORB. Raising IORB shifts the federal funds rate upward, which ripples into higher mortgage, auto, and corporate loan rates, reducing investment ($I$) and consumption ($C$), shifting AD left.",
            "distractorTip": "Higher IORB $\\implies$ Higher Policy Rate $\\implies$ Higher Market Interest Rates $\\implies$ Lower $I$ & $C$ $\\implies$ AD shifts left."
          }
        ]
      },
      {
        "id": 408,
        "unitIndex": 4,
        "levelNumber": 8,
        "uniqueKey": "macro-u4-l8",
        "topicNumber": "Unit 4 Boss",
        "name": "Apex Financial Sector & Monetary Policy Crucible",
        "subtitle": "Bank balance sheets, money multiplier, and bond pricing",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "macro4-l8-q1",
            "stem": "First National Bank receives a \\$10,000 cash deposit from a retail customer. The required reserve ratio is 10%, and the bank holds zero excess reserves initially. What are the immediate change in the bank's required reserves and the maximum possible expansion of the money supply in the entire banking system?",
            "options": [
              "Required reserves increase by \\$1,000; the maximum money supply creation is \\$90,000.",
              "Required reserves increase by \\$10,000; the maximum money supply creation is \\$100,000.",
              "Required reserves increase by \\$1,000; the maximum money supply creation is \\$10,000.",
              "Required reserves do not change; the maximum money supply creation is \\$9,000."
            ],
            "correctIndex": 0,
            "explanation": "Required reserves = 10% of \\$10,000 = \\$1,000. Excess reserves created = \\$10,000 - \\$1,000 = \\$9,000. Money multiplier = 1 / rr = 1 / 0.10 = 10. Maximum expansion of new loans and checkable deposits in the banking system = Excess Reserves * Multiplier = \\$9,000 * 10 = \\$90,000. (Note: The initial \\$10,000 was already part of M1 as currency, so new money created is \\$90,000).",
            "distractorTip": "New money created = Initial Excess Reserves * Money Multiplier = \\$9,000 * 10 = \\$90,000!"
          },
          {
            "id": "macro4-l8-q2",
            "stem": "What is the fundamental relationship between the market interest rate and the market price of previously issued fixed-rate bonds?",
            "options": [
              "Interest rates and bond prices move in the same direction.",
              "Interest rates and bond prices have an inverse relationship: when interest rates rise, bond prices fall.",
              "Bond prices are permanently fixed and never fluctuate after issuance.",
              "Interest rates only affect stock prices, leaving bond yields unchanged."
            ],
            "correctIndex": 1,
            "explanation": "Bond prices and interest rates are inversely related. When market interest rates rise, newly issued bonds offer higher coupon yields. Older existing bonds with lower fixed coupon payments become less attractive, so their market price must decline until their yield matches the prevailing market rate.",
            "distractorTip": "Inverse relationship: When interest rates go UP, bond prices go DOWN!"
          },
          {
            "id": "macro4-l8-q3",
            "stem": "A commercial bank has \\$100 million in checkable deposits, \\$25 million in total reserves, and a required reserve ratio of 10%. How much in additional loans can this bank legally extend immediately?",
            "options": [
              "\\$10 million",
              "\\$15 million",
              "\\$25 million",
              "\\$75 million"
            ],
            "correctIndex": 1,
            "explanation": "Required reserves = 10% of \\$100 million = \\$10 million. Excess reserves = Total Reserves - Required Reserves = \\$25 million - \\$10 million = \\$15 million. A single bank can immediately create loans equal to its excess reserves, which is \\$15 million.",
            "distractorTip": "Lending capacity of a single bank = Excess Reserves = Total Reserves - Required Reserves."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Unit 5: Long-Run Consequences of Stabilization Policies",
    "shortTitle": "Unit 5: Long-Run Policy",
    "description": "Fiscal/monetary interactions, Phillips Curve (short-run vs long-run), national debt, crowding out, and long-run economic growth (capital deepening & productivity)",
    "examWeight": "20–30% of AP Macro Exam",
    "biome": {
      "name": "Phillips Plateau & Capital Accumulation Range",
      "icon": "📈",
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
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "macro-u5-l1",
        "topicNumber": "Topic 5.1 & 5.2",
        "name": "Policy Mixes: Short-Run vs Long-Run Adjustments",
        "subtitle": "Demand expansion and nominal wage self-correction",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "macro5-l1-q1",
            "stem": "The government enacts an aggressive expansionary fiscal policy during a recession, successfully shifting Aggregate Demand to the right. In the long run, as nominal wages and input prices fully adjust to the higher price level, what will happen to Real GDP and the aggregate price level?",
            "options": [
              "Real GDP will remain permanently elevated above potential output with zero inflation.",
              "Real GDP will permanently fall to zero, causing hyperinflation.",
              "SRAS will shift left as nominal wages rise, returning Real GDP to potential output (Y_f) at an even higher price level.",
              "The Long-Run Aggregate Supply curve will shift left to match recessionary output."
            ],
            "correctIndex": 2,
            "explanation": "Shifting AD right increases output and price levels in the short run. However, once output exceeds potential GDP, tight labor markets bid up nominal wages. Higher input costs shift SRAS left, returning Real GDP to Y_f in the long run, but leaving the economy at a permanently higher price level.",
            "distractorTip": "Demand-side stimulus increases Real GDP in the SHORT run, but in the LONG run only raises the price level (output returns to Y_f)!"
          },
          {
            "id": "macro5-l1-q2",
            "stem": "If the central bank increases the money supply at a rate significantly faster than the long-run growth rate of real output, what is the inevitable long-run consequence according to the Quantity Theory of Money (MV = PY)?",
            "options": [
              "Real output will double every fiscal year.",
              "The velocity of money will drop to zero, causing deflation.",
              "Nominal interest rates will permanently remain at zero.",
              "Sustained inflation, where the aggregate price level rises in proportion to the excess money growth."
            ],
            "correctIndex": 3,
            "explanation": "The Quantity Theory of Money (M * V = P * Y) states that assuming velocity (V) and real output (Y) are stable or determined by productive factors in the long run, growth in the money supply (M) translates directly into a proportionate rise in the price level (P), causing inflation.",
            "distractorTip": "Quantity Theory of Money: Excessive money growth in the long run leads directly to INFLATION!"
          },
          {
            "id": "macro5-l1-q3",
            "stem": "An economy is in short-run equilibrium with an inflationary gap. If the central bank conducts contractionary monetary policy, what will be the effect on the nominal interest rate, Real GDP, and price level?",
            "options": [
              "Interest rate decreases; Real GDP increases; price level increases.",
              "Interest rate increases; Real GDP increases; price level decreases.",
              "Interest rate increases; Real GDP decreases; price level decreases.",
              "Interest rate decreases; Real GDP decreases; price level decreases."
            ],
            "correctIndex": 2,
            "explanation": "Contractionary monetary policy (raising policy interest rates) increases the cost of borrowing. This reduces interest-sensitive investment ($I$) and consumption ($C$), shifting Aggregate Demand to the left. Real GDP falls back toward potential output and upward pressure on the price level subsides.",
            "distractorTip": "Contractionary monetary policy: Interest rate $\\uparrow$, $I$ & $C$ $\\downarrow$, AD shifts left $\\implies$ Real GDP $\\downarrow$, Price Level $\\downarrow$."
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "macro-u5-l2",
        "topicNumber": "Topic 5.2 & 5.3",
        "name": "The Short-Run Phillips Curve (SRPC)",
        "subtitle": "Inflation-unemployment trade-off and curve shifts",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro5-l2-q1",
            "stem": "The Short-Run Phillips Curve (SRPC) illustrates an inverse relationship between which two macroeconomic variables, and what causes a MOVEMENT ALONG the SRPC?",
            "options": [
              "Inflation and Unemployment; caused by shifts in Aggregate Demand (AD).",
              "Real Interest Rates and Investment; caused by shifts in Money Supply.",
              "Government Debt and GDP; caused by changes in the tax multiplier.",
              "Exports and Imports; caused by foreign exchange fluctuations."
            ],
            "correctIndex": 0,
            "explanation": "The SRPC models the trade-off between inflation and unemployment in the short run. When Aggregate Demand shifts right, price level and output rise (unemployment falls), moving the economy upward and leftward ALONG the SRPC. When AD shifts left, output falls and price level drops, moving downward and rightward along the SRPC.",
            "distractorTip": "Shift in AD = Movement ALONG the SRPC; Shift in SRAS = Shift OF the SRPC!"
          },
          {
            "id": "macro5-l2-q2",
            "stem": "A major negative supply shock occurs when global crude oil prices quadruple. What happens to the Short-Run Aggregate Supply (SRAS) curve and the Short-Run Phillips Curve (SRPC)?",
            "options": [
              "SRAS shifts right, and the economy moves downward along the SRPC.",
              "SRAS shifts left (stagflation: higher price level, higher unemployment), which causes the entire SRPC to shift to the RIGHT (outward).",
              "SRAS shifts left, and the SRPC shifts to the left.",
              "Both SRAS and SRPC become vertical lines."
            ],
            "correctIndex": 1,
            "explanation": "A negative supply shock shifts SRAS to the left, causing stagflation: higher inflation and higher unemployment simultaneously. Because both variables worsen at every level of output, the entire Short-Run Phillips Curve shifts to the RIGHT (upward and outward).",
            "distractorTip": "A leftward shift in SRAS shifts the SRPC to the RIGHT! (They shift in OPPOSITE directions)."
          },
          {
            "id": "macro5-l2-q3",
            "stem": "Along a stable Short-Run Phillips Curve (SRPC), what short-run trade-off exists for policymakers using demand-side stabilization policies?",
            "options": [
              "A trade-off between higher inflation and lower unemployment.",
              "A trade-off between economic growth and environmental preservation.",
              "A trade-off between government tax revenue and the national debt.",
              "A trade-off between real wages and nominal exchange rates."
            ],
            "correctIndex": 0,
            "explanation": "The SRPC illustrates an inverse relationship between inflation and unemployment in the short run. Policies that expand AD lower unemployment but generate higher inflation (moving upward-left along SRPC). Policies that contract AD lower inflation but raise unemployment (moving downward-right along SRPC).",
            "distractorTip": "Movement along SRPC is caused by shifts in AGGREGATE DEMAND. Shifts of the SRPC are caused by shifts in AGGREGATE SUPPLY (supply shocks or expected inflation)."
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "macro-u5-l3",
        "topicNumber": "Topic 5.3",
        "name": "The Long-Run Phillips Curve (LRPC)",
        "subtitle": "Natural rate of unemployment and vertical LRPC",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro5-l3-q1",
            "stem": "What is the shape and economic meaning of the Long-Run Phillips Curve (LRPC)?",
            "options": [
              "Downward-sloping, indicating a permanent long-run trade-off between inflation and unemployment.",
              "Horizontal at the target inflation rate of 2%.",
              "Vertical at the Natural Rate of Unemployment (NRU), indicating that there is no long-run trade-off between inflation and unemployment.",
              "Upward-sloping, indicating that inflation increases unemployment in the long run."
            ],
            "correctIndex": 2,
            "explanation": "In the long run, expected inflation adjusts fully to actual inflation, and the economy returns to its potential output. Unemployment returns to its Natural Rate of Unemployment (NRU). Therefore, the LRPC is vertical at the NRU, meaning policy cannot permanently lower unemployment below NRU through inflation.",
            "distractorTip": "LRPC is a VERTICAL line at the Natural Rate of Unemployment (NRU). No long-run trade-off exists!"
          },
          {
            "id": "macro5-l3-q2",
            "stem": "Which of the following events will cause the Long-Run Phillips Curve (LRPC) to shift to the LEFT?",
            "options": [
              "An increase in the minimum legal wage that increases structural unemployment.",
              "An increase in expected inflation from 2% to 6%.",
              "An increase in the money supply by the central bank.",
              "Improved job matching internet platforms and job retraining programs that permanently reduce the Natural Rate of Unemployment."
            ],
            "correctIndex": 3,
            "explanation": "The LRPC is located at the Natural Rate of Unemployment (NRU = Frictional + Structural). The LRPC shifts left only if the NRU decreases. Job placement platforms reduce frictional search time, and retraining reduces structural mismatch, lowering the NRU and shifting the LRPC left (and shifting LRAS right).",
            "distractorTip": "LRPC shifts only when the Natural Rate of Unemployment changes! Lower NRU shifts LRPC to the LEFT."
          },
          {
            "id": "macro5-l3-q3",
            "stem": "What will cause the entire Short-Run Phillips Curve (SRPC) to shift outward and to the right?",
            "options": [
              "A major technological breakthrough that reduces manufacturing costs across the economy.",
              "An increase in consumer confidence that expands aggregate demand.",
              "A reduction in expected inflation from 5% to 2%.",
              "A negative supply shock (such as a sudden spike in global crude oil prices) that increases production costs and expected inflation."
            ],
            "correctIndex": 3,
            "explanation": "A negative supply shock (cost-push inflation) shifts SRAS to the left, resulting in higher inflation and higher unemployment (stagflation). In the Phillips curve diagram, this is represented by an outward, rightward shift of the entire SRPC curve.",
            "distractorTip": "SRAS shifts left $\\implies$ SRPC shifts right (worse trade-off: higher inflation AND higher unemployment at every point)."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "macro-u5-l4",
        "topicNumber": "Topic 5.4 & 5.5",
        "name": "Deficits, National Debt & Crowding Out",
        "subtitle": "Budget deficits and private investment reduction",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro5-l4-q1",
            "stem": "When the federal government runs an ongoing budget deficit and borrows heavily by issuing treasury bonds, what is the primary transmission mechanism of the Crowding Out Effect?",
            "options": [
              "Government borrowing increases demand for loanable funds -> Real interest rates rise -> Private business investment in physical capital decreases -> Long-run economic growth slows.",
              "Government borrowing reduces the national debt -> Inflation falls -> Consumer spending drops.",
              "Government borrowing shifts Aggregate Supply right -> Real wages fall -> Exports decline.",
              "Government borrowing forces the central bank to destroy currency reserves."
            ],
            "correctIndex": 0,
            "explanation": "Crowding out occurs when government deficit financing drives up real interest rates in the loanable funds market. Higher interest rates make borrowing expensive for private firms, crowding out private investment in new factories and machinery, which impairs future capital accumulation and economic growth.",
            "distractorTip": "Crowding Out Chain: Deficit -> Higher Real Interest Rate -> Less Private Investment -> Slower Long-Run Growth."
          },
          {
            "id": "macro5-l4-q2",
            "stem": "What is the distinction between a federal government's annual Budget Deficit and the National Debt?",
            "options": [
              "The deficit is the total accumulated debt over history, while the national debt is the annual shortfall.",
              "The budget deficit is the annual amount by which government expenditures exceed tax revenues in a single year, while the national debt is the cumulative total of all past deficits minus surpluses owed by the government.",
              "The deficit is owed exclusively to foreign governments, while the national debt is owed domestically.",
              "There is no distinction; both terms refer to the identical dollar value."
            ],
            "correctIndex": 1,
            "explanation": "The budget deficit is a flow variable representing the annual shortfall between spending and revenues in a given fiscal year. The national debt is a stock variable representing the cumulative total of all outstanding treasury securities and liabilities accumulated over history.",
            "distractorTip": "Deficit = Annual shortfall (flow); Debt = Total accumulated borrowing over history (stock)."
          },
          {
            "id": "macro5-l4-q3",
            "stem": "What is the primary mechanism of the 'Crowding-Out Effect' resulting from government deficit spending?",
            "options": [
              "Government spending eliminates private sector consumer goods through rationing.",
              "Government borrowing in the loanable funds market increases real interest rates, reducing private business capital investment.",
              "Higher taxes reduce corporate profits, forcing firms to shut down.",
              "Increased money supply creates hyperinflation that destroys paper currency."
            ],
            "correctIndex": 1,
            "explanation": "When government engages in deficit spending, it borrows by issuing Treasury bonds, increasing demand for loanable funds (or reducing national savings). This drives up real interest rates. Higher borrowing costs discourage private firms from purchasing capital equipment, 'crowding out' private investment and slowing capital accumulation.",
            "distractorTip": "Crowding out chain of events: Deficit $\\implies$ Government borrows $\\implies$ Demand for loanable funds $\\uparrow$ $\\implies$ Real interest rate $\\uparrow$ $\\implies$ Private investment $\\downarrow$."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "macro-u5-l5",
        "topicNumber": "Topic 5.6 & 5.7",
        "name": "Long-Run Economic Growth & Productivity",
        "subtitle": "Capital deepening, human capital, and outward LRAS shifts",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro5-l5-q1",
            "stem": "Which of the following factors is the primary driver of sustained long-run increases in Real GDP per capita (economic growth)?",
            "options": [
              "Increases in consumer credit card borrowing limits.",
              "High annual inflation rates that encourage rapid money circulation.",
              "Growth in labor productivity driven by capital deepening, human capital investment (education/training), and technological innovation.",
              "Decreases in the nation's labor force participation rate."
            ],
            "correctIndex": 2,
            "explanation": "Long-run economic growth (rising living standards) requires producing more output per worker (labor productivity). This is achieved through: (1) Physical capital deepening (more tools/machines per worker), (2) Human capital investment (education and vocational training), and (3) Technological progress.",
            "distractorTip": "Long-Run Growth drivers: Physical Capital, Human Capital (education), and Technology/Productivity!"
          },
          {
            "id": "macro5-l5-q2",
            "stem": "How is long-run economic growth represented graphically on the AD-AS model and the Production Possibilities Curve (PPC)?",
            "options": [
              "A downward movement along the Aggregate Demand curve, and a movement from on the PPC to inside the PPC.",
              "A rightward shift of the Short-Run Aggregate Supply curve only, with no change in LRAS.",
              "An increase in the price level on the AD-AS model, and an inward shift of the PPC.",
              "A rightward shift of the vertical Long-Run Aggregate Supply (LRAS) curve, accompanied by an outward shift of the entire Production Possibilities Curve."
            ],
            "correctIndex": 3,
            "explanation": "Long-run economic growth represents an expansion of potential capacity. On the AD-AS graph, this is shown as a rightward shift of the vertical LRAS curve (from Y_f1 to Y_f2). On the PPC model, it is illustrated as an outward expansion of the production possibilities frontier.",
            "distractorTip": "Economic Growth = LRAS shifts RIGHT and PPC shifts OUTWARD!"
          },
          {
            "id": "macro5-l5-q3",
            "stem": "Which of the following public policies is most effective at promoting sustainable long-run economic growth (shifting LRAS and the PPC rightward)?",
            "options": [
              "Increasing federal transfer payments to stimulate immediate consumer demand.",
              "Imposing import quotas on foreign capital goods to protect domestic steel producers.",
              "Investing in STEM education, workforce training, and public research and development infrastructure.",
              "Raising corporate tax rates to pay down the national debt immediately."
            ],
            "correctIndex": 2,
            "explanation": "Long-run economic growth is driven by increases in labor productivity and capital accumulation. Investments in education and training enhance human capital; investments in R&D and infrastructure improve technology and physical capital, permanently expanding the economy's productive capacity.",
            "distractorTip": "Short-run stabilization shifts AD; long-run economic growth requires expanding productive capacity (human capital, physical capital, technology)."
          }
        ]
      },
      {
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "macro-u5-l6",
        "topicNumber": "Topic 5.3",
        "name": "The Quantity Theory of Money & Hyperinflation",
        "subtitle": "The equation of exchange: M * V = P * Y",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "macro5-l6-q1",
            "stem": "According to the classical Quantity Theory of Money ($M \\times V = P \\times Y$), if velocity ($V$) and real output ($Y$) are assumed to be stable or constant in the long run, what is the direct consequence of a central bank increasing the money supply ($M$) by 15% annually?",
            "options": [
              "The price level ($P$) will increase by exactly 15%, causing 15% annual inflation.",
              "Real GDP will permanently increase by 15% with zero price changes.",
              "Velocity will automatically collapse to zero.",
              "The natural rate of unemployment will drop by 15 percentage points."
            ],
            "correctIndex": 0,
            "explanation": "In the Equation of Exchange ($MV = PY$), if Velocity ($V$) and Real GDP ($Y$) are fixed in the long run, changes in the money supply ($M$) translate directly into proportional changes in the price level ($P$). A 15% growth in money supply creates 15% inflation.",
            "distractorTip": "Quantity Theory of Money: Inflation is always and everywhere a monetary phenomenon! Rapid money growth directly drives price level increases."
          },
          {
            "id": "macro5-l6-q2",
            "stem": "Why have historical episodes of catastrophic hyperinflation (such as in Weimar Germany in 1923 or Zimbabwe in 2008) almost universally been triggered by governments running massive fiscal deficits?",
            "options": [
              "Because governments tied their currencies to foreign silver reserves.",
              "Because governments were unable to collect taxes or borrow from financial markets, and resorted to printing astronomical sums of fiat money to pay state debts and military salaries.",
              "Because central banks aggressively increased the reserve requirement ratio on private banks.",
              "Because consumer confidence was so high that money velocity turned negative."
            ],
            "correctIndex": 1,
            "explanation": "Hyperinflation occurs when a government faces enormous expenses but cannot finance them through taxes or bond sales. When the central bank finances government deficits by printing fiat currency (monetizing the debt), money supply explodes, destroying public confidence in the currency and sending prices soaring exponentially.",
            "distractorTip": "Hyperinflation root cause: Printing massive quantities of money to finance government budget deficits!"
          },
          {
            "id": "macro5-l6-q3",
            "stem": "According to the Quantity Theory of Money equation ($M \\times V = P \\times Y$), what happens in the long run if velocity ($V$) and real output ($Y$) are relatively constant and the central bank rapidly increases the money supply ($M$)?",
            "options": [
              "The price level ($P$) increases proportionately, resulting in high inflation.",
              "Real GDP ($Y$) doubles while the price level remains unchanged.",
              "Velocity ($V$) increases exponentially to offset the money expansion.",
              "The natural rate of unemployment drops permanently to zero."
            ],
            "correctIndex": 0,
            "explanation": "In the equation of exchange $MV = PY$, if velocity of money ($V$) and real output ($Y$, anchored at potential output by factor endowments) are stable in the long run, percentage changes in the money supply translate directly into equal percentage increases in the price level: $\\%\\Delta M = \\%\\Delta P$. Rapid money creation causes inflation.",
            "distractorTip": "The Quantity Theory of Money: In the long run, 'Inflation is always and everywhere a monetary phenomenon' ($M \\uparrow \\implies P \\uparrow$)."
          }
        ]
      },
      {
        "id": 507,
        "unitIndex": 5,
        "levelNumber": 7,
        "uniqueKey": "macro-u5-l7",
        "topicNumber": "Topic 5.5",
        "name": "Crowding Out in the Loanable Funds Market",
        "subtitle": "Deficit spending, real interest rates, and private investment reduction",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "macro5-l7-q1",
            "stem": "When a government engages in deficit-financed expansionary fiscal policy, it borrows heavily in the loanable funds market. What is the step-by-step chain of events that leads to the 'Crowding Out' of private investment?",
            "options": [
              "Government borrowing decreases loanable funds demand, lowering interest rates and increasing private investment.",
              "Government borrowing shifts the demand for loanable funds left, lowering consumer prices.",
              "Government borrowing shifts the demand for loanable funds rightward (or reduces national saving), driving up real interest rates; higher borrowing costs cause private firms to reduce physical capital investment expenditures.",
              "Private banks refuse to hold sovereign government debt, causing deflation."
            ],
            "correctIndex": 2,
            "explanation": "When government borrows to finance deficits, demand for loanable funds shifts right (or public saving falls, shifting supply left). This bids up the equilibrium real interest rate. At higher interest rates, borrowing becomes more expensive for private corporations, reducing ('crowding out') private capital investment.",
            "distractorTip": "Crowding Out chain: Deficit spending -> Higher Real Interest Rates -> Lower Private Investment -> Slower Long-Run Growth."
          },
          {
            "id": "macro5-l7-q2",
            "stem": "What is the primary long-run negative consequence of persistent crowding out on the nation's macroeconomic performance?",
            "options": [
              "The currency permanently depreciates against all foreign currencies.",
              "Frictional unemployment becomes permanently zero.",
              "The federal government runs perpetual budget surpluses.",
              "Reduced private investment in machinery, technology, and factories slows physical capital accumulation, reducing future labor productivity and slowing the outward shift of LRAS and the PPC."
            ],
            "correctIndex": 3,
            "explanation": "Physical capital accumulation is a key engine of labor productivity and economic growth. When high interest rates crowd out business investment in capital goods, future productive capacity grows more slowly, dampening long-run economic growth and the outward shift of the PPC.",
            "distractorTip": "Crowding out reduces private capital formation, dampening long-run economic growth!"
          },
          {
            "id": "macro5-l7-q3",
            "stem": "How does persistent crowding out of private capital investment affect an economy's long-run aggregate supply curve over time?",
            "options": [
              "LRAS will shift rightward at an accelerated pace due to government infrastructure.",
              "LRAS will shift leftward immediately due to currency depreciation.",
              "The slope of the LRAS curve will change from vertical to horizontal.",
              "The rate of growth of the capital stock slows, causing the LRAS curve to shift rightward more slowly than it otherwise would have."
            ],
            "correctIndex": 3,
            "explanation": "Crowding out reduces private business investment in new factories, machines, and tools. Because the capital stock grows more slowly (or fails to replace depreciated equipment), future labor productivity grows at a diminished rate, curtailing the long-run outward shift of LRAS and the PPC.",
            "distractorTip": "Crowding out hurts long-run economic growth because lower private investment slows the accumulation of physical capital."
          }
        ]
      },
      {
        "id": 508,
        "unitIndex": 5,
        "levelNumber": 8,
        "uniqueKey": "macro-u5-l8",
        "topicNumber": "Unit 5 Boss",
        "name": "Apex Long-Run Consequences & Growth Crucible",
        "subtitle": "Mastery of Phillips curves, deficits, national debt, and growth policies",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "macro5-l8-q1",
            "stem": "What causes the Short-Run Phillips Curve (SRPC) to shift to the right, presenting policymakers with a worse trade-off between inflation and unemployment at every point?",
            "options": [
              "A negative supply shock (such as a sudden surge in energy prices) or an increase in expected inflation.",
              "An increase in consumer confidence that shifts Aggregate Demand rightward.",
              "A decrease in the natural rate of unemployment.",
              "A balanced budget fiscal reform that reduces national debt."
            ],
            "correctIndex": 0,
            "explanation": "The SRPC shifts whenever the SRAS curve shifts (in the opposite direction) or when inflationary expectations change. A negative supply shock (SRAS shifts left) causes stagflation (higher inflation AND higher unemployment), shifting the SRPC outward to the right.",
            "distractorTip": "SRAS shifts left -> SRPC shifts RIGHT! (Supply shocks worsen the inflation-unemployment trade-off)."
          },
          {
            "id": "macro5-l8-q2",
            "stem": "Which of the following government policies is most likely to increase the rate of long-run economic growth by shifting both the LRAS curve and the PPC outward?",
            "options": [
              "Increasing tariffs on all imported industrial components.",
              "Providing tax credits for private business research and development (R&D) and funding workforce STEM education and vocational training.",
              "Increasing government transfer payments funded by corporate borrowing.",
              "Decreasing the legal retirement age to 50 to reduce the labor force."
            ],
            "correctIndex": 1,
            "explanation": "Long-run growth is driven by technological progress, human capital development, and physical capital investment. R&D tax incentives and education investments increase innovation and worker productivity, expanding the economy's productive potential (shifting LRAS and PPC outward).",
            "distractorTip": "Supply-side policies promoting technology, R&D, and human capital permanently shift LRAS and the PPC outward."
          },
          {
            "id": "macro5-l8-q3",
            "stem": "If the natural rate of unemployment is 4.5% and the actual unemployment rate is 6.5%, what is the cyclical unemployment rate and what type of fiscal policy is appropriate?",
            "options": [
              "Cyclical unemployment is -2.0%; contractionary fiscal policy is appropriate.",
              "Cyclical unemployment is 2.0%; expansionary fiscal policy (increasing $G$ or cutting taxes) is appropriate.",
              "Cyclical unemployment is 11.0%; supply-side deregulation is required.",
              "Cyclical unemployment is 0%; no policy action is needed."
            ],
            "correctIndex": 1,
            "explanation": "Actual unemployment = Natural rate + Cyclical rate $\\implies 6.5\\% = 4.5\\% + \\text{Cyclical} \\implies \\text{Cyclical rate} = 2.0\\%$. Because cyclical unemployment is positive, the economy is in a recessionary gap ($Y < Y_f$). Expansionary fiscal policy (increasing government spending or reducing taxes) will shift AD right to close the gap.",
            "distractorTip": "Cyclical unemployment = Actual rate - Natural rate = $6.5\\% - 4.5\\% = 2.0\\%$. Positive cyclical unemployment indicates a recessionary gap."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 6,
    "unitId": "u6",
    "title": "Unit 6: Open Economy—International Trade and Finance",
    "shortTitle": "Unit 6: International Finance",
    "description": "Balance of payments (Current vs Financial Account), Foreign Exchange (FOREX) market, currency appreciation/depreciation determinants, exchange rate feedback on net exports, and capital flows",
    "examWeight": "10–13% of AP Macro Exam",
    "biome": {
      "name": "Global Currency Port & FOREX Archipelago",
      "icon": "🌐",
      "accentColor": "#0D9488",
      "secondaryColor": "#0F766E",
      "groundGradient": "from-teal-100 via-cyan-50 to-emerald-100",
      "cardBorder": "border-teal-500",
      "trailColor": "#0d9488",
      "nodeRing": "ring-teal-400/40",
      "skyTint": "from-teal-50 to-cyan-50/30"
    },
    "levels": [
      {
        "id": 601,
        "unitIndex": 6,
        "levelNumber": 1,
        "uniqueKey": "macro-u6-l1",
        "topicNumber": "Topic 6.1 & 6.2",
        "name": "Balance of Payments: Current vs Financial Account",
        "subtitle": "Trade balance vs financial asset transactions",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "macro6-l1-q1",
            "stem": "In a nation's Balance of Payments accounting, which transaction is recorded strictly in the Current Account?",
            "options": [
              "A domestic consumer purchasing an imported automobile manufactured in Germany.",
              "A foreign corporate investor purchasing $50 million of domestic commercial real estate.",
              "A domestic multinational firm building a semiconductor factory in Vietnam.",
              "A foreign central bank purchasing domestic 10-year Treasury bonds."
            ],
            "correctIndex": 0,
            "explanation": "The Current Account records trade in physical goods and services (exports and imports), net investment income, and unilateral transfers (foreign aid). Buying an imported car is an import of goods in the Current Account. Purchasing financial assets, factories, or bonds is recorded in the Financial (Capital) Account.",
            "distractorTip": "Current Account = Physical goods, services, net transfers; Financial Account = Stocks, bonds, real estate, direct investment."
          },
          {
            "id": "macro6-l1-q2",
            "stem": "If a nation has a Current Account deficit of $80 billion, what must be true of its Financial (Capital) Account balance in the absence of official reserve changes?",
            "options": [
              "The Financial Account must have a deficit of $80 billion.",
              "The Financial Account must have a surplus of $80 billion, because Current Account + Financial Account = 0.",
              "The Financial Account must equal zero.",
              "The nation's currency will cease to be traded on international markets."
            ],
            "correctIndex": 1,
            "explanation": "The Balance of Payments identity dictates that: Current Account + Financial Account = 0. A nation that imports more goods and services than it exports (Current Account deficit of -$80B) must finance that deficit by selling domestic assets or borrowing from abroad (Financial Account surplus of +$80B).",
            "distractorTip": "Balance of Payments identity: Current Account + Financial Account = 0. A deficit in one must balance a surplus in the other!"
          },
          {
            "id": "macro6-l1-q3",
            "stem": "A US citizen purchases shares of stock in a Japanese robotics corporation, and a German tourist pays for a hotel room in New York City. How are these two transactions recorded in the US Balance of Payments?",
            "options": [
              "Stock purchase in Current Account; Hotel stay in Financial Account.",
              "Both transactions are recorded exclusively in the Capital Account.",
              "Stock purchase in Financial Account; Hotel stay in Current Account (export of services).",
              "Neither transaction is counted because international currencies were exchanged."
            ],
            "correctIndex": 2,
            "explanation": "Purchasing foreign financial assets (shares of stock) is recorded in the Financial (Capital) Account as a capital outflow. Providing tourism hospitality services to a foreign visitor is an export of services and is recorded in the Current Account as a credit (inflow of funds).",
            "distractorTip": "Current account = Goods, services, net investment income, and unilateral transfers. Financial account = Purchase/sale of financial and real assets."
          }
        ]
      },
      {
        "id": 602,
        "unitIndex": 6,
        "levelNumber": 2,
        "uniqueKey": "macro-u6-l2",
        "topicNumber": "Topic 6.3",
        "name": "Foreign Exchange (FOREX) Market Fundamentals",
        "subtitle": "Currency appreciation and depreciation mechanics",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "macro6-l2-q1",
            "stem": "In the Foreign Exchange (FOREX) market between the US Dollar (\\$) and the British Pound (£), if the exchange rate changes from £1 = \\$1.20 to £1 = \\$1.50, what has happened to the value of each currency?",
            "options": [
              "Both the US Dollar and the British Pound have appreciated.",
              "The US Dollar has appreciated, and the British Pound has depreciated.",
              "The British Pound has appreciated (it now buys more dollars), and the US Dollar has depreciated (it now takes more dollars to buy one pound).",
              "The exchange rate change has zero impact on currency values."
            ],
            "correctIndex": 2,
            "explanation": "When 1 Pound rises from \\$1.20 to \\$1.50, the Pound gains purchasing power against the Dollar (it APPRECIATES). Conversely, Americans must now pay \\$1.50 instead of \\$1.20 for one Pound, meaning the US Dollar has lost relative value (it DEPRECIATES). Currency movements are always reciprocal mirror opposites.",
            "distractorTip": "Reciprocal Currency Rule: If Currency A appreciates relative to B, Currency B MUST depreciate relative to A!"
          },
          {
            "id": "macro6-l2-q2",
            "stem": "If Americans develop a surging preference for traveling to Japan for tourism, how does this affect the FOREX market for Japanese Yen and US Dollars?",
            "options": [
              "Supply of Yen increases, causing the Yen to depreciate.",
              "Demand for US Dollars shifts right, appreciating the Dollar.",
              "Demand for Japanese Yen decreases, and the Yen depreciates.",
              "Demand for Japanese Yen shifts right (appreciating the Yen), and Supply of US Dollars shifts right (depreciating the Dollar)."
            ],
            "correctIndex": 3,
            "explanation": "To vacation in Japan, American tourists must sell US Dollars and purchase Japanese Yen. This increases the Demand for Yen (shifting Yen demand right, APPRECIATING the Yen) and increases the Supply of Dollars in the foreign exchange market (DEPRECIATING the Dollar).",
            "distractorTip": "To buy foreign goods or travel abroad, you must SUPPLY domestic currency and DEMAND foreign currency!"
          },
          {
            "id": "macro6-l2-q3",
            "stem": "In the foreign exchange market for Mexican Pesos against US Dollars, what will happen if US consumers develop a strong preference for Mexican avocado imports?",
            "options": [
              "Demand for pesos will increase, and the Mexican Peso will appreciate against the US Dollar.",
              "Supply of pesos will increase, and the Mexican Peso will depreciate.",
              "Demand for dollars will increase in Mexico.",
              "Both currencies will depreciate simultaneously."
            ],
            "correctIndex": 0,
            "explanation": "To buy more Mexican avocados, US importers must convert US dollars into Mexican pesos. In the FOREX market, this increases the demand for pesos (shifts demand right) and increases the supply of dollars (shifts supply right). As a result, the Mexican peso appreciates (takes more dollars to buy 1 peso).",
            "distractorTip": "When US consumers want to buy foreign goods, they demand foreign currency (appreciating it) and supply US dollars (depreciating it)."
          }
        ]
      },
      {
        "id": 603,
        "unitIndex": 6,
        "levelNumber": 3,
        "uniqueKey": "macro-u6-l3",
        "topicNumber": "Topic 6.4",
        "name": "Determinants of Exchange Rate Shifts",
        "subtitle": "Real interest rate differentials, inflation, and capital flows",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro6-l3-q1",
            "stem": "Suppose real interest rates in the United States rise significantly relative to real interest rates in the European Union. What will be the immediate impact on international financial capital flows and the value of the US Dollar?",
            "options": [
              "European investors will seek higher returns on US financial assets, increasing the demand for US Dollars and causing the US Dollar to APPRECIATE.",
              "Capital will flow out of the US into Europe, causing the Dollar to depreciate.",
              "Demand for US Dollars will decrease, because Europeans cannot buy US bonds.",
              "The Euro will appreciate against the Dollar due to higher US interest rates."
            ],
            "correctIndex": 0,
            "explanation": "Higher real interest rates in the US offer higher yields on bonds. European financial investors move funds to the US (capital inflow into US). To buy US assets, Europeans must buy US Dollars, shifting the demand for dollars right and appreciating the US Dollar relative to the Euro.",
            "distractorTip": "High domestic real interest rates -> Attracts foreign capital inflows -> Demand for currency rises -> Currency APPRECIATES!"
          },
          {
            "id": "macro6-l3-q2",
            "stem": "If Country X experiences an inflation rate of 12% while its major trading partner Country Y experiences an inflation rate of only 2%, what is the expected impact on Country X's currency in the foreign exchange market?",
            "options": [
              "Country X's currency will appreciate because prices are higher.",
              "Country X's currency will DEPRECIATE, because higher domestic prices make Country X's exports less attractive and make Country Y's cheaper imports more attractive.",
              "Country X's currency will remain perfectly fixed.",
              "Country Y's currency will experience severe hyperinflation."
            ],
            "correctIndex": 1,
            "explanation": "High inflation in Country X makes its goods relatively expensive for foreigners, reducing foreign demand for Country X's currency (exports fall). Simultaneously, consumers in Country X prefer cheaper foreign goods from Country Y, increasing the supply of Country X's currency to buy foreign exchange. Both shifts cause Country X's currency to DEPRECIATE.",
            "distractorTip": "High domestic inflation makes domestic goods expensive -> Exports fall, imports rise -> Currency DEPRECIATES!"
          },
          {
            "id": "macro6-l3-q3",
            "stem": "If the real interest rate in the United States rises significantly relative to real interest rates in the European Union, what will happen to international financial capital flows and the value of the US dollar?",
            "options": [
              "Financial capital will flow out of the US, depreciating the dollar.",
              "European investors will buy fewer US assets, leaving the exchange rate unchanged.",
              "US investors will send capital to Europe seeking higher bond yields.",
              "Financial capital will flow into the US seeking higher returns, increasing demand for dollars and causing the dollar to appreciate."
            ],
            "correctIndex": 3,
            "explanation": "Global financial capital seeks the highest risk-adjusted real return. When US real interest rates rise relative to foreign rates, international investors purchase US bonds and assets. This requires exchanging euros for dollars, increasing demand for dollars, appreciating the US dollar in the FOREX market.",
            "distractorTip": "Higher relative real interest rates $\\implies$ Financial capital inflows $\\implies$ Demand for domestic currency $\\uparrow$ $\\implies$ Currency appreciates."
          }
        ]
      },
      {
        "id": 604,
        "unitIndex": 6,
        "levelNumber": 4,
        "uniqueKey": "macro-u6-l4",
        "topicNumber": "Topic 6.5",
        "name": "Exchange Rate Feedback on Net Exports & AD",
        "subtitle": "Net export transmission mechanism to aggregate demand",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro6-l4-q1",
            "stem": "When a nation's currency APPRECIATES significantly in the foreign exchange market, what is the impact on its exports, imports, and Aggregate Demand (AD)?",
            "options": [
              "Exports increase, imports decrease, and AD shifts to the right.",
              "Exports become cheaper for foreign buyers, boosting domestic manufacturing.",
              "Domestic exports become relatively more expensive for foreigners and foreign imports become cheaper for domestic residents, causing Net Exports (X_n) to fall and shifting AD to the LEFT.",
              "Both exports and imports rise at the identical rate, leaving AD unaffected."
            ],
            "correctIndex": 2,
            "explanation": "When domestic currency appreciates (strong currency), foreign buyers find domestic exports more expensive, causing exports to drop. At the same time, foreign imports become cheaper for domestic consumers, causing imports to rise. Net Exports (X_n = Exports - Imports) decline, shifting Aggregate Demand to the left.",
            "distractorTip": "Currency Appreciates -> Exports Fall, Imports Rise -> Net Exports (X_n) Fall -> AD shifts LEFT!"
          },
          {
            "id": "macro6-l4-q2",
            "stem": "If a country's currency DEPRECIATES on the foreign exchange market, how does this affect domestic employment and the short-run price level?",
            "options": [
              "Unemployment increases and the price level falls.",
              "Net exports decrease, shifting Aggregate Demand left.",
              "Domestic output becomes less competitive internationally.",
              "Exports become cheaper for foreigners and imports become more expensive, increasing Net Exports, which shifts Aggregate Demand right, increasing employment and raising the price level."
            ],
            "correctIndex": 3,
            "explanation": "Currency depreciation makes domestic goods bargains for foreign buyers (exports surge) and makes imported goods expensive (imports drop). Net Exports increase, shifting Aggregate Demand to the right. This increases real output and employment, while putting upward pressure on the price level.",
            "distractorTip": "Currency Depreciates -> Exports Rise, Imports Fall -> Net Exports (X_n) Rise -> AD shifts RIGHT (output & employment rise)!"
          },
          {
            "id": "macro6-l4-q3",
            "stem": "When the US dollar appreciates significantly against major world currencies, what is the net impact on US exports, US imports, and US Aggregate Demand?",
            "options": [
              "Exports become cheaper, imports become more expensive, and AD shifts right.",
              "Exports become more expensive for foreigners, imports become cheaper for US consumers, Net Exports decline, and AD shifts left.",
              "Both exports and imports increase equally, leaving AD unchanged.",
              "Domestic price level increases immediately due to cost-push inflation."
            ],
            "correctIndex": 1,
            "explanation": "An appreciated dollar makes US exports more expensive abroad (reducing export volume) and makes foreign imports cheaper for Americans (increasing import volume). Net exports ($X_n = \\text{Exports} - \\text{Imports}$) decline, which reduces Aggregate Demand ($AD = C + I + G + X_n$) and shifts the AD curve to the left.",
            "distractorTip": "Appreciated currency $\\implies$ Exports $\\downarrow$, Imports $\\uparrow$ $\\implies$ Net Exports ($X_n$) $\\downarrow$ $\\implies$ AD shifts left."
          }
        ]
      },
      {
        "id": 605,
        "unitIndex": 6,
        "levelNumber": 5,
        "uniqueKey": "macro-u6-l5",
        "topicNumber": "Topic 6.6",
        "name": "Net Capital Outflow & International Capital Mobility",
        "subtitle": "Global capital mobility and financial integration",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "macro6-l5-q1",
            "stem": "What is the definition of Net Capital Outflow (NCO), and what must NCO equal in an open economy's balance of payments?",
            "options": [
              "NCO is the purchase of foreign assets by domestic residents minus the purchase of domestic assets by foreigners, and it must equal Net Exports (NCO = X_n).",
              "NCO is the total value of foreign currency printed by the domestic central bank.",
              "NCO is the difference between government tax revenues and federal bond yields.",
              "NCO is the total volume of physical container ships departing domestic ports."
            ],
            "correctIndex": 0,
            "explanation": "Net Capital Outflow (NCO) measures the net flow of funds invested abroad: (Domestic acquisition of foreign assets) - (Foreign acquisition of domestic assets). In open-economy macroeconomics, Net Capital Outflow must equal Net Exports (NCO = X_n), balancing the trade and financial flows.",
            "distractorTip": "Net Capital Outflow (NCO) = Domestic purchases of foreign assets - Foreign purchases of domestic assets = Net Exports (X_n)."
          },
          {
            "id": "macro6-l5-q2",
            "stem": "If foreign investors perceive growing political and fiscal instability in Country Z, triggering a sudden 'Capital Flight' (massive selling of domestic assets to move funds abroad), what will happen to Country Z's real interest rates and currency value?",
            "options": [
              "Real interest rates will drop to zero, and the currency will appreciate.",
              "Supply of loanable funds in Country Z decreases (shifting real interest rates UP), and the massive supply of Country Z's currency on FOREX causes its currency to sharply DEPRECIATE.",
              "Foreign capital inflows will surge into Country Z's commercial banks.",
              "Country Z's balance of payments will permanently collapse to zero."
            ],
            "correctIndex": 1,
            "explanation": "Capital flight means funds are withdrawn from Country Z's financial markets, shifting the supply of loanable funds left and spiking domestic real interest rates. To move funds abroad, investors sell Country Z's currency in mass, flooding the FOREX market with supply and causing the currency to crash (depreciate sharply).",
            "distractorTip": "Capital Flight: Loanable funds supply drops -> Real interest rates spike UP -> Currency DEPRECIATES sharply!"
          },
          {
            "id": "macro6-l5-q3",
            "stem": "Under a flexible floating exchange rate system, what mathematical relationship must hold between a nation's Current Account ($CA$) and its Financial Account ($FA$)?",
            "options": [
              "Current Account must strictly equal Financial Account ($CA = FA$).",
              "Both accounts must maintain positive surpluses simultaneously.",
              "Current Account plus Financial Account must balance to zero ($CA + FA = 0$), so a deficit in one is offset by a surplus in the other.",
              "The Financial Account must equal zero in long-run trade equilibrium."
            ],
            "correctIndex": 2,
            "explanation": "In the balance of payments, every transaction involves a trade in goods/services or assets. If a country runs a Current Account deficit (importing more goods/services than it exports), it must finance this gap by selling domestic financial assets or borrowing abroad, creating an offsetting Financial Account surplus ($CA + FA = 0$).",
            "distractorTip": "Balance of Payments identity: Current Account + Financial Account = 0. A trade deficit ($CA < 0$) requires a capital inflow ($FA > 0$)."
          }
        ]
      },
      {
        "id": 606,
        "unitIndex": 6,
        "levelNumber": 6,
        "uniqueKey": "macro-u6-l6",
        "topicNumber": "Topic 6.6",
        "name": "Real Interest Rate Differentials & Capital Flows",
        "subtitle": "Cross-border financial capital flows and FOREX shifts",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "macro6-l6-q1",
            "stem": "Suppose real interest rates on government bonds in the United States rise significantly relative to real interest rates in Japan. How will international financial capital respond, and what is the effect on the U.S. dollar and Japanese yen in the foreign exchange (FOREX) market?",
            "options": [
              "Japanese investors seek higher yields by purchasing U.S. financial assets; demand for the U.S. dollar increases (appreciating the dollar) while the supply of yen increases (depreciating the yen).",
              "Capital flows from the U.S. to Japan, causing the dollar to depreciate and the yen to appreciate.",
              "Both currencies depreciate simultaneously against gold.",
              "U.S. net exports will immediately surge due to the interest rate differential."
            ],
            "correctIndex": 0,
            "explanation": "Global financial investors seek the highest real return on assets. Higher U.S. real interest rates attract foreign capital inflows. Japanese investors must convert yen into dollars to buy U.S. bonds, increasing the demand for dollars (appreciating the dollar) and increasing the supply of yen on the FOREX market (depreciating the yen).",
            "distractorTip": "Higher domestic real interest rates attract financial capital inflows -> Currency APPRECIATES!"
          },
          {
            "id": "macro6-l6-q2",
            "stem": "When the U.S. dollar appreciates significantly against foreign currencies, how does this currency appreciation affect U.S. net exports and Aggregate Demand in the short run?",
            "options": [
              "U.S. exports become cheaper for foreigners, increasing net exports and expanding AD.",
              "U.S. goods become relatively more expensive for foreign buyers (reducing exports) while foreign imports become cheaper for Americans (increasing imports); net exports fall, shifting Aggregate Demand leftward.",
              "Both exports and imports freeze completely.",
              "The domestic price level increases immediately due to cost-push pressure."
            ],
            "correctIndex": 1,
            "explanation": "A stronger (appreciated) dollar makes American exports more expensive in foreign currency terms, reducing exports ($X$ falls). Simultaneously, it makes foreign imports cheaper for U.S. consumers, raising imports ($M$ rises). Because Net Exports ($NX = X - M$) declines, Aggregate Demand ($AD = C + I + G + NX$) shifts to the left.",
            "distractorTip": "Appreciated Currency -> Exports fall, Imports rise -> Net Exports (NX) falls -> AD shifts LEFT!"
          },
          {
            "id": "macro6-l6-q3",
            "stem": "If the domestic price level in Country X increases by 20% while the price level in Country Y remains stable, what will happen to the exchange rate of Country X's currency according to Purchasing Power Parity (PPP)?",
            "options": [
              "Country X's currency will appreciate by 20% to reflect higher domestic costs.",
              "Country X's currency will depreciate against Country Y's currency to restore purchasing power equilibrium.",
              "Country Y's central bank will be forced to devalue its currency.",
              "The nominal exchange rate will remain fixed by international monetary treaties."
            ],
            "correctIndex": 1,
            "explanation": "Purchasing Power Parity implies that exchange rates adjust to equalize the purchasing power of different currencies. If Country X experiences 20% inflation, its goods become relatively expensive. Foreigners demand less of X's goods, while residents of X buy more imports from Y, causing Country X's currency to depreciate until purchasing parity is restored.",
            "distractorTip": "Higher relative inflation depreciates a country's currency in the foreign exchange market."
          }
        ]
      },
      {
        "id": 607,
        "unitIndex": 6,
        "levelNumber": 7,
        "uniqueKey": "macro-u6-l7",
        "topicNumber": "Topic 6.5",
        "name": "Fiscal & Monetary Policy Feedback on the Open Economy",
        "subtitle": "Policy transmission mechanisms through exchange rates and trade",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "macro6-l7-q1",
            "stem": "If the central bank executes contractionary monetary policy (raising interest rates to combat inflation), what is the resulting chain of events in the open economy via exchange rates and net exports?",
            "options": [
              "Higher interest rates repel foreign capital, depreciating the currency and stimulating exports.",
              "Higher interest rates have zero impact on exchange rates in floating regimes.",
              "Higher interest rates attract foreign financial capital inflows, appreciating the domestic currency; currency appreciation makes exports more expensive and imports cheaper, reinforcing the contraction of Aggregate Demand through lower net exports.",
              "Domestic firms increase foreign direct investment, causing the current account surplus to double."
            ],
            "correctIndex": 2,
            "explanation": "Higher interest rates attract foreign investors, driving up demand for the domestic currency and appreciating the exchange rate. The stronger currency dampens exports and encourages imports, lowering net exports ($NX$). This reduction in $NX$ reinforces the contractionary monetary policy by dampening Aggregate Demand further.",
            "distractorTip": "Contractionary monetary policy: Higher interest rates -> Currency appreciates -> Net Exports fall -> AD contracts even more!"
          },
          {
            "id": "macro6-l7-q2",
            "stem": "A country's government initiates massive deficit spending to fund infrastructure. According to open economy macroeconomics, how does the resulting crowding out effect transmit into the foreign trade balance (the 'Twin Deficits' hypothesis)?",
            "options": [
              "Deficit spending lowers interest rates, depreciating the currency and creating a massive trade surplus.",
              "Government borrowing reduces national debt, balancing the current account.",
              "The budget deficit is strictly offset by private corporate savings without altering exchange rates.",
              "Government borrowing bids up domestic real interest rates, attracting foreign capital and appreciating the currency; the stronger currency reduces net exports, converting the budget deficit into an enlarged trade deficit."
            ],
            "correctIndex": 3,
            "explanation": "The 'Twin Deficits' phenomenon links federal budget deficits to trade deficits. Government borrowing raises domestic real interest rates, pulling in foreign capital. This appreciates the national currency, which makes domestic exports less competitive and imports cheaper, causing net exports to decline and enlarging the trade deficit.",
            "distractorTip": "Twin Deficits: Government Budget Deficit -> Higher Interest Rates -> Appreciated Currency -> Trade Deficit!"
          },
          {
            "id": "macro6-l7-q3",
            "stem": "How does an expansionary fiscal policy (deficit spending financed by government borrowing) affect the open economy through the international exchange rate transmission mechanism?",
            "options": [
              "Government borrowing drives down interest rates, leading to currency appreciation and higher exports.",
              "Government borrowing increases domestic real interest rates, attracting foreign financial capital, appreciating the domestic currency, and reducing net exports (reinforcing crowding out).",
              "Government borrowing eliminates foreign exchange reserves held by the central bank.",
              "Domestic currency depreciates, causing net exports to expand and completely eliminate the deficit."
            ],
            "correctIndex": 1,
            "explanation": "Deficit spending increases government borrowing, driving up domestic real interest rates. Higher interest rates attract foreign financial capital seeking yield, increasing demand for domestic currency and causing it to appreciate. The stronger currency makes exports more expensive and imports cheaper, reducing net exports and partially offsetting the expansionary fiscal stimulus.",
            "distractorTip": "Open-economy crowding out: Deficit $\\implies$ Real Interest Rate $\\uparrow$ $\\implies$ Capital inflows $\\implies$ Currency appreciates $\\implies$ Net Exports $\\downarrow$."
          }
        ]
      },
      {
        "id": 608,
        "unitIndex": 6,
        "levelNumber": 8,
        "uniqueKey": "macro-u6-l8",
        "topicNumber": "Unit 6 Boss",
        "name": "Apex Open Economy & International Finance Crucible",
        "subtitle": "Comprehensive Balance of Payments, FOREX equilibrium, and policy synthesis",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "macro6-l8-q1",
            "stem": "In the Balance of Payments accounting identity, if a country has a Current Account deficit of \\$50 billion, what must be true of its Financial (Capital) Account balance (assuming official reserves and statistical discrepancies are zero)?",
            "options": [
              "The Financial Account must be exactly zero.",
              "It must have a Financial Account deficit of \\$50 billion to balance the books.",
              "It must have a Financial Account surplus of \\$50 billion, indicating net capital inflows from foreigners purchasing domestic assets.",
              "The country is legally in national default."
            ],
            "correctIndex": 2,
            "explanation": "The Balance of Payments must balance: Current Account (CA) + Financial Account (FA) = 0. If CA = -\\$50 billion (a deficit from importing more goods/services than exporting), the nation must finance this deficit by selling \\$50 billion of domestic assets (stocks, bonds, real estate) to foreigners, creating a Financial Account surplus of +\\$50 billion.",
            "distractorTip": "Balance of Payments: Current Account Deficit = Financial (Capital) Account SURPLUS! CA + FA = 0."
          },
          {
            "id": "macro6-l8-q2",
            "stem": "If the British government levies high protective tariffs on imported American automobiles, how will this policy affect the equilibrium exchange rate of the British pound in the FOREX market in the short run?",
            "options": [
              "The pound will depreciate because British citizens will buy more American dollars.",
              "American consumers will immediately stop buying British goods.",
              "The exchange rate between the pound and the dollar will be fixed at parity.",
              "British demand for American cars drops, reducing British demand for U.S. dollars and reducing the supply of British pounds on the FOREX market; with fewer pounds supplied, the pound appreciates."
            ],
            "correctIndex": 3,
            "explanation": "Tariffs on American cars reduce British purchases of U.S. imports. To buy fewer American cars, British buyers need fewer U.S. dollars, which means they supply fewer British pounds to the FOREX market. A leftward shift in the supply of pounds causes the pound to appreciate relative to the dollar.",
            "distractorTip": "Tariff reduces imports -> Reduces supply of domestic currency on FOREX -> Domestic currency APPRECIATES!"
          },
          {
            "id": "macro6-l8-q3",
            "stem": "Suppose 1 US Dollar currently trades for 0.80 Euros. If the exchange rate changes to 1 US Dollar = 0.90 Euros, what has occurred to the currencies?",
            "options": [
              "The US Dollar has depreciated against the Euro, and the Euro has appreciated against the Dollar.",
              "The US Dollar has appreciated against the Euro, and the Euro has depreciated against the Dollar.",
              "Both currencies have depreciated against gold reserves.",
              "The purchasing power of the Euro has increased by 10% in the United States."
            ],
            "correctIndex": 1,
            "explanation": "Previously, \\$1 bought 0.80 euros; now \\$1 buys 0.90 euros. Because each dollar now buys more euros, the US dollar has appreciated. Conversely, it now takes more euros to purchase 1 dollar (from $1/0.80 = 1.25$ euros down to $1/0.90 = 1.11$ dollars per euro), so the euro has depreciated.",
            "distractorTip": "If \\$1 buys more units of foreign currency, the dollar has APPRECIATED and the foreign currency has DEPRECIATED."
          }
        ]
      }
    ]
  }
];
