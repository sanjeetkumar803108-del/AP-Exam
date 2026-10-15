// AP Economics Units Data (Integrated Micro & Macro Curriculum)
// Comprehensive College Board CED aligned curriculum (Units 1–6)
// Complete authentic coverage: 48 Levels, 144 Questions (8 Levels per Unit, 3 Questions per Level).
// Perfectly balanced option distribution across A, B, C, D (36 each).

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_ECONOMICS_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Micro 1: Supply, Demand & Elasticity",
    "shortTitle": "Micro 1: Supply & Demand",
    "description": "Market equilibrium, price elasticity of demand (PED), total revenue test, consumer/producer surplus, and deadweight loss from price controls/taxes",
    "examWeight": "15–20% of AP Micro Exam",
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
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "econ-u1-l1",
        "topicNumber": "Topic 2.1, 2.2 & 2.7",
        "name": "Demand, Supply & Double Shifts",
        "subtitle": "Market equilibrium shifts and indeterminate outcomes",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ec1-l1-q1",
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
            "id": "ec1-l1-q2",
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
            "id": "econ1-l1-q3",
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
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "econ-u1-l2",
        "topicNumber": "Topic 2.3",
        "name": "Price Elasticity of Demand & Total Revenue",
        "subtitle": "PED formula and total revenue test",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec1-l2-q1",
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
            "id": "ec1-l2-q2",
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
            "id": "econ1-l2-q3",
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
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "econ-u1-l3",
        "topicNumber": "Topic 2.5",
        "name": "Cross-Price & Income Elasticities",
        "subtitle": "Substitutes, complements, normal & inferior goods",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec1-l3-q1",
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
            "id": "ec1-l3-q2",
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
            "id": "econ1-l3-q3",
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
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "econ-u1-l4",
        "topicNumber": "Topic 2.8",
        "name": "Price Controls: Ceilings & Floors",
        "subtitle": "Shortages, surpluses, and deadweight loss",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec1-l4-q1",
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
            "id": "ec1-l4-q2",
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
            "id": "econ1-l4-q3",
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
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "econ-u1-l5",
        "topicNumber": "Topic 2.8",
        "name": "Per-Unit Taxes, Subsidies & Tax Incidence",
        "subtitle": "Elasticity and deadweight loss triangles",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec1-l5-q1",
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
            "id": "ec1-l5-q2",
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
            "id": "econ1-l5-q3",
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
        "id": 106,
        "unitIndex": 1,
        "levelNumber": 6,
        "uniqueKey": "econ-u1-l6",
        "topicNumber": "Topic 2.9",
        "name": "International Trade, World Price & Tariffs",
        "subtitle": "Gains from trade, tariffs, and quota deadweight loss",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec1-l6-q1",
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
            "id": "ec1-l6-q2",
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
            "id": "econ1-l6-q3",
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
        "id": 107,
        "unitIndex": 1,
        "levelNumber": 7,
        "uniqueKey": "econ-u1-l7",
        "topicNumber": "Topic 2.4",
        "name": "Price Elasticity of Supply & Time Horizons",
        "subtitle": "PES determinants and market adjustment periods",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec1-l7-q1",
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
            "id": "ec1-l7-q2",
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
            "id": "econ1-l7-q3",
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
        "id": 108,
        "unitIndex": 1,
        "levelNumber": 8,
        "uniqueKey": "econ-u1-l8",
        "topicNumber": "Unit 2 Boss",
        "name": "Apex Supply, Demand & Welfare Crucible",
        "subtitle": "Mastery of equilibrium, elasticity, controls, and trade",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "ec1-l8-q1",
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
            "id": "ec1-l8-q2",
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
            "id": "econ1-l8-q3",
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
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Micro 2: Production Costs & Perfect Competition",
    "shortTitle": "Micro 2: Perfect Competition",
    "description": "Explicit vs implicit costs, law of diminishing marginal returns, cost curves (MC, ATC, AVC), profit maximization (MR = MC), and shutdown rule",
    "examWeight": "22–28% of AP Micro Exam",
    "biome": {
      "name": "Marginal Cost Valley & Perfect Competition Plains",
      "icon": "📈",
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
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "econ-u2-l1",
        "topicNumber": "Topic 3.1",
        "name": "Production Function & Diminishing Returns",
        "subtitle": "Marginal and average product dynamics",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ec2-l1-q1",
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
            "id": "ec2-l1-q2",
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
            "id": "econ2-l1-q3",
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
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "econ-u2-l2",
        "topicNumber": "Topic 3.2",
        "name": "Short-Run Cost Curves (TC, MC, ATC, AVC, AFC)",
        "subtitle": "Cost relationships and intersections",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec2-l2-q1",
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
            "id": "ec2-l2-q2",
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
            "id": "econ2-l2-q3",
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
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "econ-u2-l3",
        "topicNumber": "Topic 3.3",
        "name": "Long-Run Costs & Economies of Scale",
        "subtitle": "LRATC shapes and minimum efficient scale",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec2-l3-q1",
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
            "id": "ec2-l3-q2",
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
            "id": "econ2-l3-q3",
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
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "econ-u2-l4",
        "topicNumber": "Topic 3.4 & 3.5",
        "name": "Profit Maximization & Types of Profit",
        "subtitle": "The golden rule MR = MC and normal profit",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec2-l4-q1",
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
            "id": "ec2-l4-q2",
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
            "id": "econ2-l4-q3",
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
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "econ-u2-l5",
        "topicNumber": "Topic 3.6",
        "name": "Short-Run Decisions: Shutdown Rule",
        "subtitle": "When to operate at a loss vs shut down",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec2-l5-q1",
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
            "id": "ec2-l5-q2",
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
            "id": "econ2-l5-q3",
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
        "id": 206,
        "unitIndex": 2,
        "levelNumber": 6,
        "uniqueKey": "econ-u2-l6",
        "topicNumber": "Topic 3.7",
        "name": "Perfect Competition Long-Run Equilibrium",
        "subtitle": "Allocative and productive efficiency",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec2-l6-q1",
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
            "id": "ec2-l6-q2",
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
            "id": "econ2-l6-q3",
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
        "id": 207,
        "unitIndex": 2,
        "levelNumber": 7,
        "uniqueKey": "econ-u2-l7",
        "topicNumber": "Topic 3.7",
        "name": "Constant-Cost vs. Increasing-Cost Industries",
        "subtitle": "Long-run industry supply curve shapes",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "ec2-l7-q1",
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
            "id": "ec2-l7-q2",
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
            "id": "econ2-l7-q3",
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
        "id": 208,
        "unitIndex": 2,
        "levelNumber": 8,
        "uniqueKey": "econ-u2-l8",
        "topicNumber": "Unit 3 Boss",
        "name": "Apex Production, Costs & Competition Crucible",
        "subtitle": "Comprehensive cost table analysis and equilibrium mastery",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "ec2-l8-q1",
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
            "id": "ec2-l8-q2",
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
            "id": "econ2-l8-q3",
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
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Micro 3: Imperfect Competition & Game Theory",
    "shortTitle": "Micro 3: Imperfect Competition",
    "description": "Monopoly pricing, single-price vs perfect price discrimination, natural monopoly regulation, game theory payoff matrices, and Nash equilibrium",
    "examWeight": "15–22% of AP Micro Exam",
    "biome": {
      "name": "Monopoly Citadel & Game Arena",
      "icon": "🏰",
      "accentColor": "#8B5CF6",
      "secondaryColor": "#7C3AED",
      "groundGradient": "from-purple-100 via-violet-50 to-indigo-100",
      "cardBorder": "border-purple-500",
      "trailColor": "#8b5cf6",
      "nodeRing": "ring-purple-400/40",
      "skyTint": "from-purple-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 301,
        "unitIndex": 3,
        "levelNumber": 1,
        "uniqueKey": "econ-u3-l1",
        "topicNumber": "Topic 4.1 & 4.2",
        "name": "Monopoly Pricing, Output & Deadweight Loss",
        "subtitle": "Why MR < P and deadweight loss creation",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ec3-l1-q1",
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
            "id": "ec3-l1-q2",
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
            "id": "econ3-l1-q3",
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
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "econ-u3-l2",
        "topicNumber": "Topic 4.2",
        "name": "Natural Monopoly & Price Regulation",
        "subtitle": "Socially optimal (P=MC) vs fair-return (P=ATC)",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec3-l2-q1",
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
            "id": "ec3-l2-q2",
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
            "id": "econ3-l2-q3",
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
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "econ-u3-l3",
        "topicNumber": "Topic 4.3",
        "name": "Price Discrimination",
        "subtitle": "Perfect price discrimination outcomes",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec3-l3-q1",
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
            "id": "ec3-l3-q2",
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
            "id": "econ3-l3-q3",
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
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "econ-u3-l4",
        "topicNumber": "Topic 4.4",
        "name": "Monopolistic Competition",
        "subtitle": "Product differentiation, zero profit tangency & excess capacity",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec3-l4-q1",
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
            "id": "ec3-l4-q2",
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
            "id": "econ3-l4-q3",
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
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "econ-u3-l5",
        "topicNumber": "Topic 4.5",
        "name": "Oligopoly & Game Theory: Payoff Matrix",
        "subtitle": "Interdependence, dominant strategies, and prisoner's dilemma",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec3-l5-q1",
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
            "id": "ec3-l5-q2",
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
            "id": "econ3-l5-q3",
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
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "econ-u3-l6",
        "topicNumber": "Topic 4.5",
        "name": "Nash Equilibrium & Cartel Stability",
        "subtitle": "Equilibrium without unilateral deviation and cheating incentives",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec3-l6-q1",
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
            "id": "ec3-l6-q2",
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
            "id": "econ3-l6-q3",
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
        "id": 307,
        "unitIndex": 3,
        "levelNumber": 7,
        "uniqueKey": "econ-u3-l7",
        "topicNumber": "Topic 4.5",
        "name": "Sequential Games & Subgame Perfection",
        "subtitle": "Game trees, backward induction, and credible threats",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "ec3-l7-q1",
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
            "id": "ec3-l7-q2",
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
            "id": "econ3-l7-q3",
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
        "id": 308,
        "unitIndex": 3,
        "levelNumber": 8,
        "uniqueKey": "econ-u3-l8",
        "topicNumber": "Unit 4 Boss",
        "name": "Apex Imperfect Competition Citadel",
        "subtitle": "Comparing monopoly, monopolistic competition, and oligopoly efficiency",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "ec3-l8-q1",
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
            "id": "ec3-l8-q2",
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
            "id": "econ3-l8-q3",
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
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Macro 1: Economic Indicators (GDP & Inflation)",
    "shortTitle": "Macro 1: GDP & Inflation",
    "description": "Circular flow, Nominal vs Real GDP, GDP deflator, Consumer Price Index (CPI), types of unemployment, and natural rate of unemployment (NRU)",
    "examWeight": "12–17% of AP Macro Exam",
    "biome": {
      "name": "GDP Summit & Inflation Plateau",
      "icon": "📊",
      "accentColor": "#3B82F6",
      "secondaryColor": "#2563EB",
      "groundGradient": "from-blue-100 via-sky-50 to-cyan-100",
      "cardBorder": "border-blue-500",
      "trailColor": "#3b82f6",
      "nodeRing": "ring-blue-400/40",
      "skyTint": "from-blue-50 to-sky-50/30"
    },
    "levels": [
      {
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "econ-u4-l1",
        "topicNumber": "Topic 2.1 & 2.2",
        "name": "Circular Flow & GDP Expenditure Components",
        "subtitle": "C + I + G + Xn and excluded transactions",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ec4-l1-q1",
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
            "id": "ec4-l1-q2",
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
            "id": "econ4-l1-q3",
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
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "econ-u4-l2",
        "topicNumber": "Topic 2.3 & 2.6",
        "name": "Nominal vs Real GDP & GDP Deflator",
        "subtitle": "Price level adjustments and deflator formula",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec4-l2-q1",
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
            "id": "ec4-l2-q2",
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
            "id": "econ4-l2-q3",
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
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "econ-u4-l3",
        "topicNumber": "Topic 2.4",
        "name": "Unemployment Measurement & Natural Rate",
        "subtitle": "Labor force participation and NRU definition",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec4-l3-q1",
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
            "id": "ec4-l3-q2",
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
            "id": "econ4-l3-q3",
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
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "econ-u4-l4",
        "topicNumber": "Topic 2.4",
        "name": "Types of Unemployment",
        "subtitle": "Frictional, structural, cyclical, and seasonal classifications",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec4-l4-q1",
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
            "id": "ec4-l4-q2",
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
            "id": "econ4-l4-q3",
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
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "econ-u4-l5",
        "topicNumber": "Topic 2.5",
        "name": "Inflation, CPI & Real Interest Rates",
        "subtitle": "CPI basket, inflation calculations, and the Fisher equation",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec4-l5-q1",
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
            "id": "ec4-l5-q2",
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
            "id": "econ4-l5-q3",
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
        "id": 406,
        "unitIndex": 4,
        "levelNumber": 6,
        "uniqueKey": "econ-u4-l6",
        "topicNumber": "Topic 2.7",
        "name": "The Business Cycle & Output Gaps",
        "subtitle": "Peak, trough, recessionary and inflationary gaps",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec4-l6-q1",
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
            "id": "ec4-l6-q2",
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
            "id": "econ4-l6-q3",
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
        "id": 407,
        "unitIndex": 4,
        "levelNumber": 7,
        "uniqueKey": "econ-u4-l7",
        "topicNumber": "Topic 2.6",
        "name": "GDP Deflator vs. Consumer Price Index (CPI)",
        "subtitle": "Price level index formulas and substitution bias",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "ec4-l7-q1",
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
            "id": "ec4-l7-q2",
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
            "id": "econ4-l7-q3",
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
        "id": 408,
        "unitIndex": 4,
        "levelNumber": 8,
        "uniqueKey": "econ-u4-l8",
        "topicNumber": "Unit 2 Boss",
        "name": "Apex Economic Indicators & Business Cycle Crucible",
        "subtitle": "Mastery of GDP, CPI, unemployment calculations, and output gaps",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "ec4-l8-q1",
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
            "id": "ec4-l8-q2",
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
            "id": "econ4-l8-q3",
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
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Macro 2: AD-AS Model & Fiscal Policy",
    "shortTitle": "Macro 2: AD-AS & Fiscal Policy",
    "description": "Aggregate Demand, Short-Run and Long-Run Aggregate Supply, macroeconomic equilibrium, spending/tax multipliers, and discretionary fiscal policy",
    "examWeight": "20–25% of AP Macro Exam",
    "biome": {
      "name": "Aggregate Equilibrium Ridge",
      "icon": "🏛️",
      "accentColor": "#EF4444",
      "secondaryColor": "#DC2626",
      "groundGradient": "from-red-100 via-rose-50 to-orange-100",
      "cardBorder": "border-red-500",
      "trailColor": "#ef4444",
      "nodeRing": "ring-red-400/40",
      "skyTint": "from-red-50 to-rose-50/30"
    },
    "levels": [
      {
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "econ-u5-l1",
        "topicNumber": "Topic 3.1 & 3.2",
        "name": "Aggregate Demand Slope Determinants",
        "subtitle": "Wealth effect, interest rate effect, and foreign purchases effect",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ec5-l1-q1",
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
            "id": "ec5-l1-q2",
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
            "id": "econ5-l1-q3",
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
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "econ-u5-l2",
        "topicNumber": "Topic 3.3 & 3.4",
        "name": "Short-Run Aggregate Supply & Sticky Wages",
        "subtitle": "Sticky wages/prices and supply shock determinants",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec5-l2-q1",
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
            "id": "ec5-l2-q2",
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
            "id": "econ5-l2-q3",
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
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "econ-u5-l3",
        "topicNumber": "Topic 3.5 & 3.6",
        "name": "Long-Run Aggregate Supply & Macro Equilibrium",
        "subtitle": "Potential GDP, vertical LRAS, and full-employment output",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec5-l3-q1",
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
            "id": "ec5-l3-q2",
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
            "id": "econ5-l3-q3",
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
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "econ-u5-l4",
        "topicNumber": "Topic 3.7",
        "name": "Output Gaps: Recessionary vs Inflationary",
        "subtitle": "Self-correcting mechanism and gap adjustments",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec5-l4-q1",
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
            "id": "ec5-l4-q2",
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
            "id": "econ5-l4-q3",
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
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "econ-u5-l5",
        "topicNumber": "Topic 3.8",
        "name": "Fiscal Multipliers & Keynesian Spending",
        "subtitle": "MPC, MPS, spending multiplier, and tax multiplier formulas",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec5-l5-q1",
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
            "id": "ec5-l5-q2",
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
            "id": "econ5-l5-q3",
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
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "econ-u5-l6",
        "topicNumber": "Topic 3.9",
        "name": "Fiscal Policy & Automatic Stabilizers",
        "subtitle": "Discretionary fiscal stimulus and progressive tax stabilizers",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec5-l6-q1",
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
            "id": "ec5-l6-q2",
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
            "id": "econ5-l6-q3",
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
        "id": 507,
        "unitIndex": 5,
        "levelNumber": 7,
        "uniqueKey": "econ-u5-l7",
        "topicNumber": "Topic 3.8 & 3.9",
        "name": "The Balanced Budget Multiplier & Cost-Push Inflation",
        "subtitle": "Net fiscal impacts and supply shocks",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "ec5-l7-q1",
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
            "id": "ec5-l7-q2",
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
            "id": "econ5-l7-q3",
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
        "id": 508,
        "unitIndex": 5,
        "levelNumber": 8,
        "uniqueKey": "econ-u5-l8",
        "topicNumber": "Unit 3 Boss",
        "name": "Apex AD-AS Macro Equilibrium & Fiscal Policy Crucible",
        "subtitle": "Full-spectrum output gaps, fiscal interventions, and self-correction",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "ec5-l8-q1",
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
            "id": "ec5-l8-q2",
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
            "id": "econ5-l8-q3",
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
    "unitIndex": 6,
    "unitId": "u6",
    "title": "Macro 3: Financial Sector & Monetary Policy",
    "shortTitle": "Macro 3: Financial Sector",
    "description": "Money functions, fractional reserve banking, money multiplier, money market, loanable funds market, and Federal Reserve ample reserves framework",
    "examWeight": "15–20% of AP Macro Exam",
    "biome": {
      "name": "Federal Reserve Vault & Liquidity Springs",
      "icon": "🏦",
      "accentColor": "#059669",
      "secondaryColor": "#047857",
      "groundGradient": "from-emerald-100 via-teal-50 to-cyan-100",
      "cardBorder": "border-emerald-600",
      "trailColor": "#059669",
      "nodeRing": "ring-emerald-500/40",
      "skyTint": "from-emerald-50 to-teal-50/30"
    },
    "levels": [
      {
        "id": 601,
        "unitIndex": 6,
        "levelNumber": 1,
        "uniqueKey": "econ-u6-l1",
        "topicNumber": "Topic 4.1 & 4.2",
        "name": "Financial Assets, Money Functions & Liquidity",
        "subtitle": "Medium of exchange, unit of account, and M1 vs M2",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ec6-l1-q1",
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
            "id": "ec6-l1-q2",
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
            "id": "econ6-l1-q3",
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
        "id": 602,
        "unitIndex": 6,
        "levelNumber": 2,
        "uniqueKey": "econ-u6-l2",
        "topicNumber": "Topic 4.3",
        "name": "Fractional Reserve Banking & Balance Sheets",
        "subtitle": "Required reserves, excess reserves, and T-accounts",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec6-l2-q1",
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
            "id": "ec6-l2-q2",
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
            "id": "econ6-l2-q3",
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
        "id": 603,
        "unitIndex": 6,
        "levelNumber": 3,
        "uniqueKey": "econ-u6-l3",
        "topicNumber": "Topic 4.4",
        "name": "Money Creation & The Money Multiplier",
        "subtitle": "Deposit expansion formula 1 / rr",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ec6-l3-q1",
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
            "id": "ec6-l3-q2",
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
            "id": "econ6-l3-q3",
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
        "id": 604,
        "unitIndex": 6,
        "levelNumber": 4,
        "uniqueKey": "econ-u6-l4",
        "topicNumber": "Topic 4.5",
        "name": "The Money Market & Nominal Interest Rates",
        "subtitle": "Money demand, money supply, and nominal rate determination",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec6-l4-q1",
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
            "id": "ec6-l4-q2",
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
            "id": "econ6-l4-q3",
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
        "id": 605,
        "unitIndex": 6,
        "levelNumber": 5,
        "uniqueKey": "econ-u6-l5",
        "topicNumber": "Topic 4.6",
        "name": "The Loanable Funds Market & Real Interest Rates",
        "subtitle": "Savings supply, investment demand, and real interest rates",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec6-l5-q1",
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
            "id": "ec6-l5-q2",
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
            "id": "econ6-l5-q3",
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
        "id": 606,
        "unitIndex": 6,
        "levelNumber": 6,
        "uniqueKey": "econ-u6-l6",
        "topicNumber": "Topic 4.7",
        "name": "Central Bank Monetary Policy Tools",
        "subtitle": "Traditional reserve requirements vs modern ample reserves (IORB)",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ec6-l6-q1",
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
            "id": "ec6-l6-q2",
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
            "id": "econ6-l6-q3",
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
        "id": 607,
        "unitIndex": 6,
        "levelNumber": 7,
        "uniqueKey": "econ-u6-l7",
        "topicNumber": "Topic 4.6",
        "name": "Federal Reserve Ample Reserves Framework",
        "subtitle": "Administered rates: IORB, ON RRP, and policy rate targeting",
        "difficulty": "Hard",
        "rewardCoins": 45,
        "questions": [
          {
            "id": "ec6-l7-q1",
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
            "id": "ec6-l7-q2",
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
            "id": "econ6-l7-q3",
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
        "id": 608,
        "unitIndex": 6,
        "levelNumber": 8,
        "uniqueKey": "econ-u6-l8",
        "topicNumber": "Unit 4 Boss",
        "name": "Apex Financial Sector & Monetary Policy Crucible",
        "subtitle": "Bank balance sheets, money multiplier, and bond pricing",
        "difficulty": "Hard",
        "rewardCoins": 60,
        "questions": [
          {
            "id": "ec6-l8-q1",
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
            "id": "ec6-l8-q2",
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
            "id": "econ6-l8-q3",
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
  }
];
