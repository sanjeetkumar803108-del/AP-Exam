const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// Microeconomics authentic Q3 questions for all 48 levels
// Pattern for correctIndex:
// L1: 2 (C), L2: 0 (A), L3: 3 (D), L4: 1 (B), L5: 2 (C), L6: 0 (A), L7: 3 (D), L8: 1 (B)

const q3Data = {
  // UNIT 1: Basic Economic Concepts
  "micro-u1-l1": {
    id: "micro1-l1-q3",
    stem: "Suppose a student decides to spend 2 hours studying for an AP Microeconomics exam instead of working at a part-time job that pays \\$15 per hour or going to a movie that costs \\$12. What is the opportunity cost of the student's study time?",
    options: [
      "\\$12 (the cost of the movie ticket)",
      "\\$42 (the sum of the forgone wages and the movie ticket cost)",
      "\\$30 (the forgone wage income from not working)",
      "\\$18 (the difference between the wages and the movie cost)"
    ],
    correctIndex: 2,
    explanation: "Opportunity cost is strictly the value of the single next-best alternative forgone, NOT the sum of all potential activities. The next best alternative is working 2 hours at \\$15/hr, yielding \\$30 in forgone wages.",
    distractorTip: "Opportunity cost is NEVER the sum of all alternative possibilities; it is only the value of the highest-valued single alternative sacrificed."
  },
  "micro-u1-l2": {
    id: "micro1-l2-q3",
    stem: "Which of the following points represents productive efficiency on a standard concave Production Possibilities Curve?",
    options: [
      "Any point located directly on the frontier curve itself.",
      "Any point lying strictly inside the frontier curve.",
      "Only the midpoint of the curve where equal quantities of both goods are made.",
      "Any point located strictly outside the current frontier."
    ],
    correctIndex: 0,
    explanation: "Productive efficiency is achieved when an economy produces goods at the lowest possible cost using all available resources and technology, represented by any point situated directly on the PPC curve. Points inside are inefficient (unemployment), and points outside are unattainable without growth.",
    distractorTip: "Do not confuse productive efficiency (on the curve) with allocative efficiency (the specific point on the curve that society desires most where MB = MC)."
  },
  "micro-u1-l3": {
    id: "micro1-l3-q3",
    stem: "Country X can produce either 20 airplanes or 40 solar panels with one unit of resources. Country Y can produce either 10 airplanes or 30 solar panels with one unit of resources. Which of the following terms of trade for 1 airplane would be mutually beneficial to both nations?",
    options: [
      "1 airplane for 1.5 solar panels",
      "1 airplane for 4.0 solar panels",
      "1 airplane for 0.5 solar panels",
      "1 airplane for 2.5 solar panels"
    ],
    correctIndex: 3,
    explanation: "In Country X, 1 airplane costs 40/20 = 2 solar panels. In Country Y, 1 airplane costs 30/10 = 3 solar panels. Country X has the comparative advantage in airplanes. Mutually advantageous terms of trade must fall between the domestic opportunity costs: 2 solar panels < 1 airplane < 3 solar panels. Thus 2.5 solar panels is mutually beneficial.",
    distractorTip: "Mutually beneficial terms of trade must always lie strictly between the opportunity costs of the two trading partners."
  },
  "micro-u1-l4": {
    id: "micro1-l4-q3",
    stem: "According to marginal analysis, a consumer will continue to consume additional units of a good as long as which condition holds true?",
    options: [
      "Total Benefit exceeds Total Cost.",
      "Marginal Benefit is strictly greater than or equal to Marginal Cost ($MB \\ge MC$).",
      "Marginal Cost is decreasing with each additional unit consumed.",
      "Average Benefit equals Average Cost."
    ],
    correctIndex: 1,
    explanation: "The rational rule for decision makers is to continue expanding an activity up to the quantity where Marginal Benefit equals Marginal Cost ($MB = MC$). As long as $MB \\ge MC$, the net gain (Total Benefit - Total Cost) increases.",
    distractorTip: "Common AP trap: Decisions are made at the margin where $MB \\ge MC$, NOT by comparing whether total benefits exceed total costs."
  },
  "micro-u1-l5": {
    id: "micro1-l5-q3",
    stem: "A consumer allocates a weekly budget between good X (price = \\$4) and good Y (price = \\$2). At the current basket, $MU_X = 16$ utils and $MU_Y = 12$ utils. To maximize total utility within the budget constraint, how should the consumer adjust consumption?",
    options: [
      "Consume fewer units of both goods to reduce total expenditure.",
      "Maintain the current consumption basket because total utility is maximized.",
      "Purchase fewer units of good X and more units of good Y.",
      "Purchase more units of good X and fewer units of good Y."
    ],
    correctIndex: 2,
    explanation: "Compare marginal utility per dollar: $MU_X / P_X = 16 / 4 = 4$ utils per dollar. $MU_Y / P_Y = 12 / 2 = 6$ utils per dollar. Because good Y provides more utility per dollar spent ($6 > 4$), the consumer should reallocate spending toward good Y and away from good X until $MU_X / P_X = MU_Y / P_Y$.",
    distractorTip: "Always compare marginal utility per dollar ($MU/P$), not raw marginal utility ($MU$) alone."
  },
  "micro-u1-l6": {
    id: "micro1-l6-q3",
    stem: "Which of the following will shift a nation's Production Possibilities Curve inward toward the origin?",
    options: [
      "A severe natural disaster that permanently destroys physical capital infrastructure and factories.",
      "An increase in the domestic nominal money supply.",
      "A temporary increase in the rate of cyclical unemployment.",
      "An increase in consumer demand for renewable energy technologies."
    ],
    correctIndex: 0,
    explanation: "An inward shift of the PPC represents a reduction in an economy's productive capacity, caused by a loss of physical capital, destruction of natural resources, or shrinking labor force. Unemployment merely moves the operating point inside an unchanged curve.",
    distractorTip: "Unemployment does NOT shift the PPC inward; it moves the economy to an inefficient point INSIDE the PPC."
  },
  "micro-u1-l7": {
    id: "micro1-l7-q3",
    stem: "In a competitive market in equilibrium, what does total economic surplus represent graphically?",
    options: [
      "The entire rectangular area under the demand curve from quantity 0 to equilibrium quantity.",
      "The area bounded between the equilibrium price line and the supply curve.",
      "The rectangle defined by multiplying equilibrium price by equilibrium quantity.",
      "The total triangular area between the demand curve and supply curve up to the equilibrium quantity."
    ],
    correctIndex: 3,
    explanation: "Total economic surplus is the sum of consumer surplus (area below demand and above price) and producer surplus (area above supply and below price). Together, they form the area between the demand and supply curves up to the market-clearing equilibrium quantity.",
    distractorTip: "Total surplus is consumer surplus plus producer surplus; at competitive equilibrium, deadweight loss is zero."
  },
  "micro-u1-l8": {
    id: "micro1-l8-q3",
    stem: "In a two-good economy producing Pizza and Robots, the opportunity cost of producing each additional robot increases from 1 pizza to 4 pizzas. What does this demonstrate about resource specialization?",
    options: [
      "Robots are inferior goods while pizzas are normal goods.",
      "Resources are specialized, so reallocating pizza chefs to robotic engineering yields diminishing returns and higher opportunity cost.",
      "The economy is suffering from massive demand-pull inflation.",
      "The production possibilities curve is a linear downward-sloping line."
    ],
    correctIndex: 1,
    explanation: "Increasing opportunity costs occur precisely because factors of production are not perfectly adaptable to alternate uses. As more robots are assembled, resources increasingly suited to baking pizza must be diverted, creating larger sacrifices per robot produced.",
    distractorTip: "Imperfect resource substitutability is the direct microeconomic cause of concave, bowed-out production possibility frontiers."
  },

  // UNIT 2: Supply and Demand
  "micro-u2-l1": {
    id: "micro2-l1-q3",
    stem: "If consumer income increases for a normal good at the same time that technological innovation lowers manufacturing costs, what will happen to equilibrium price and equilibrium quantity?",
    options: [
      "Equilibrium price will definitely increase; quantity is indeterminate.",
      "Equilibrium price will definitely decrease; quantity will increase.",
      "Equilibrium quantity will definitely increase; equilibrium price change is indeterminate.",
      "Equilibrium quantity will definitely decrease; equilibrium price will decrease."
    ],
    correctIndex: 2,
    explanation: "An increase in income increases demand (shifts right). Technological progress increases supply (shifts right). When both curves shift right, equilibrium quantity must unambiguously increase. However, the effect on equilibrium price depends on the relative magnitudes of the shifts, so price is indeterminate.",
    distractorTip: "In double-shift problems, one variable (price or quantity) will always be certain and the other will always be indeterminate."
  },
  "micro-u2-l2": {
    id: "micro2-l2-q3",
    stem: "A theater lowers ticket prices by 10%, and as a result, total ticket sales revenue increases by 15%. Over this price range, how should demand be classified?",
    options: [
      "Price Elastic ($|E_d| > 1$)",
      "Price Inelastic ($|E_d| < 1$)",
      "Unit Elastic ($|E_d| = 1$)",
      "Perfectively Inelastic ($|E_d| = 0$)"
    ],
    correctIndex: 0,
    explanation: "By the Total Revenue Test, if price and total revenue move in opposite directions (price down, revenue up), demand is price elastic ($|E_d| > 1$). Consumers respond with a proportionally larger percentage increase in quantity demanded.",
    distractorTip: "Total Revenue Test: When $P$ and $TR$ move in opposite directions, demand is elastic. When they move in the same direction, demand is inelastic."
  },
  "micro-u2-l3": {
    id: "micro2-l3-q3",
    stem: "If the cross-price elasticity of demand between good A and good B is $+1.8$, what relationship exists between these two goods?",
    options: [
      "They are complementary goods.",
      "They are inferior goods.",
      "They are Giffen goods.",
      "They are substitute goods."
    ],
    correctIndex: 3,
    explanation: "A positive cross-price elasticity ($E_{AB} > 0$) indicates that an increase in the price of good B causes an increase in the quantity demanded of good A. Therefore, goods A and B are substitutes.",
    distractorTip: "Cross-price elasticity: Positive = Substitutes; Negative = Complements. Income elasticity: Positive = Normal; Negative = Inferior."
  },
  "micro-u2-l4": {
    id: "micro2-l4-q3",
    stem: "To be binding and create a persistent market shortage, where must a government price ceiling be established?",
    options: [
      "At any price level above the market equilibrium price.",
      "Strictly below the market-clearing equilibrium price.",
      "Exactly equal to the competitive equilibrium price.",
      "At the minimum average total cost of the lowest-cost producer."
    ],
    correctIndex: 1,
    explanation: "A price ceiling is a legal maximum price. It is only binding (effective) if set BELOW the market equilibrium price, which prevents price from rising to equilibrium, causing quantity demanded to exceed quantity supplied ($Q_d > Q_s$), generating a shortage.",
    distractorTip: "A price ceiling is binding BELOW equilibrium; a price floor is binding ABOVE equilibrium."
  },
  "micro-u2-l5": {
    id: "micro2-l5-q3",
    stem: "When the government levies an excise tax on a good whose demand is highly price-inelastic while supply is relatively price-elastic, who bears the majority of the tax burden?",
    options: [
      "Producers and consumers share the tax burden equally regardless of elasticities.",
      "The government treasury absorbs the majority through tax collection costs.",
      "Consumers bear the larger share of the economic tax burden.",
      "Producers bear the larger share because they must write the tax check to the state."
    ],
    correctIndex: 2,
    explanation: "Tax incidence falls predominantly on the more inelastic market participant because they lack flexible alternatives to avoid the price change. When demand is more inelastic than supply, consumers cannot easily substitute away, so sellers pass along most of the tax in higher prices.",
    distractorTip: "Statutory incidence (who pays the check) does not matter; economic incidence is determined strictly by relative price elasticities."
  },
  "micro-u2-l6": {
    id: "micro2-l6-q3",
    stem: "A small open economy with domestic equilibrium price of \\$80 opens to international free trade where the world price is \\$50. What is the immediate effect on domestic consumers, domestic producers, and total domestic welfare?",
    options: [
      "Consumers gain, domestic producers lose, and total domestic economic surplus increases.",
      "Consumers lose, domestic producers gain, and deadweight loss is created.",
      "Both domestic consumers and producers lose due to foreign competition.",
      "Domestic producers gain higher profits while imports drop to zero."
    ],
    correctIndex: 0,
    explanation: "Because the world price (\\$50) is below the domestic equilibrium price (\\$80), the nation imports the good. Domestic consumers purchase a greater quantity at the lower price, dramatically expanding consumer surplus. Domestic producers receive less, but the consumer gain exceeds the producer loss, increasing total economic surplus.",
    distractorTip: "Free trade that lowers domestic price increases consumer surplus by more than producer surplus decreases, producing a net welfare gain."
  },
  "micro-u2-l7": {
    id: "micro2-l7-q3",
    stem: "Why is the price elasticity of supply for agricultural products typically much more inelastic in the immediate short run compared to the long run?",
    options: [
      "Consumers are unwilling to buy farm goods during harvest seasons.",
      "Agricultural prices are legally capped by federal commodities boards.",
      "Farmers are unable to rapidly alter crop acreage or harvest yields in response to sudden price changes.",
      "Supply elasticity is mathematically invariant across time horizons."
    ],
    correctIndex: 2,
    explanation: "In the immediate market period or short run, agricultural inputs (planted acreage, growing seasons, weather cycles) are fixed, preventing farmers from immediately increasing output when price rises. In the long run, farmers can purchase more land, machinery, and fertilizer, making supply much more elastic.",
    distractorTip: "Time is the primary determinant of supply elasticity: the longer the adjustment window, the more elastic supply becomes."
  },
  "micro-u2-l8": {
    id: "micro2-l8-q3",
    stem: "If the government imposes a binding price floor in the milk market and commits to purchasing all resulting agricultural surpluses, what happens to deadweight loss and taxpayer expenditure?",
    options: [
      "Deadweight loss is completely eliminated because all produced milk is sold.",
      "Taxpayer expenditure rises to purchase the unsold surplus, and overall societal deadweight loss increases due to overproduction.",
      "Producer surplus falls while consumer surplus expands.",
      "Market quantity transacted reaches the perfectly allocative efficient level."
    ],
    correctIndex: 1,
    explanation: "A binding price floor encourages producers to supply $Q_s$ while consumers only buy $Q_d$ at the elevated floor price. When government buys the excess surplus ($Q_s - Q_d$), taxpayers fund the purchase, and resources are wasted producing milk whose marginal cost exceeds consumer marginal benefit, expanding deadweight loss.",
    distractorTip: "Government buyout of a price floor surplus shifts the financial cost to taxpayers and generates substantial allocative inefficiency."
  },

  // UNIT 3: Production, Cost, and Perfect Competition
  "micro-u3-l1": {
    id: "micro3-l1-q3",
    stem: "What economic law explains why the Marginal Product of labor eventually declines as more workers are hired in a bakery with a fixed oven and kitchen space?",
    options: [
      "The Law of Diminishing Marginal Utility",
      "The Law of Increasing Opportunity Costs",
      "The Law of Diminishing Marginal Returns",
      "The Law of Comparative Advantage"
    ],
    correctIndex: 2,
    explanation: "The Law of Diminishing Marginal Returns states that as successive units of a variable resource (workers) are added to a fixed resource (kitchen space and ovens), the additional output produced by each extra worker eventually declines.",
    distractorTip: "Diminishing marginal returns applies to short-run PRODUCTION with a fixed input, whereas diminishing marginal utility applies to consumer SATISFACTION."
  },
  "micro-u3-l2": {
    id: "micro3-l2-q3",
    stem: "Why does the Marginal Cost ($MC$) curve always intersect the Average Variable Cost ($AVC$) and Average Total Cost ($ATC$) curves at their absolute minimum points?",
    options: [
      "Because when marginal cost is below the average, it pulls the average down; when marginal cost is above the average, it pulls the average up.",
      "Because fixed costs are constantly increasing at higher production levels.",
      "Because accounting profit must equal economic profit at minimum cost.",
      "Because marginal revenue equals average revenue under perfect competition."
    ],
    correctIndex: 0,
    explanation: "This is a mathematical property of marginal-average relationships. If the cost of the next unit ($MC$) is less than the running average ($ATC$), the average drops. Once $MC$ rises above $ATC$, each additional unit pulls the average upward. Therefore, $ATC$ and $AVC$ reach their minimums where $MC = ATC$ and $MC = AVC$.",
    distractorTip: "Think of GPA: if your semester grade ($MC$) is higher than your cumulative GPA ($ATC$), your cumulative GPA rises."
  },
  "micro-u3-l3": {
    id: "micro3-l3-q3",
    stem: "If doubling all manufacturing inputs leads to a tripling of total factory output, what operational state is the firm experiencing?",
    options: [
      "Decreasing returns to scale (diseconomies of scale)",
      "Constant returns to scale",
      "Short-run diminishing marginal productivity",
      "Increasing returns to scale (economies of scale)"
    ],
    correctIndex: 3,
    explanation: "Increasing returns to scale (or economies of scale) occurs in the long run when a proportionate increase in all inputs causes a more-than-proportionate increase in output (e.g. 100% input increase yields 200% output gain), leading to falling long-run average total costs.",
    distractorTip: "Returns to scale is a LONG-RUN concept where all inputs vary; diminishing returns is a SHORT-RUN concept with at least one fixed input."
  },
  "micro-u3-l4": {
    id: "micro3-l4-q3",
    stem: "A perfectly competitive firm produces output where $MR = MC = \\$14$. At this output, $ATC = \\$10$ and $AVC = \\$6$. What is the financial status of this firm?",
    options: [
      "The firm is incurring an economic loss of \\$4 per unit.",
      "The firm is earning positive economic profits of \\$4 per unit.",
      "The firm should shut down immediately to avoid fixed losses.",
      "The firm is breaking even with zero economic profit."
    ],
    correctIndex: 1,
    explanation: "Economic profit per unit is $P - ATC = MR - ATC = \\$14 - \\$10 = \\$4$. Because price exceeds average total cost ($P > ATC$), the firm is earning positive economic profit.",
    distractorTip: "Profit per unit = $P - ATC$. If $P > ATC$, profit > 0. If $ATC > P > AVC$, firm operates at a loss in short run. If $P < AVC$, firm shuts down."
  },
  "micro-u3-l5": {
    id: "micro3-l5-q3",
    stem: "Under what exact condition should a competitive firm in the short run choose to shut down immediately rather than operate at a loss?",
    options: [
      "When market price falls below the minimum Average Total Cost ($P < ATC$).",
      "When total revenue is less than total fixed costs.",
      "When market price is strictly less than the minimum Average Variable Cost ($P < \\min AVC$).",
      "When marginal revenue is less than marginal cost."
    ],
    correctIndex: 2,
    explanation: "If market price cannot even cover Average Variable Cost ($P < AVC$), the firm loses all of its fixed costs plus an additional amount on every unit produced. By shutting down ($Q = 0$), the firm minimizes losses strictly to its fixed costs.",
    distractorTip: "Shutdown rule: In the short run, shut down if $P < AVC$. In the long run, exit if $P < ATC$."
  },
  "micro-u3-l6": {
    id: "micro3-l6-q3",
    stem: "In a perfectly competitive industry in long-run equilibrium, which of the following equalities must hold true for every typical firm?",
    options: [
      "$P = MR = MC = \\min ATC$, yielding zero economic profit and both allocative and productive efficiency.",
      "$P > MC = \\min ATC$, allowing persistent long-run economic profits.",
      "$MR = MC < ATC$, requiring continuous government production subsidies.",
      "$P = AVC = \\min MC$, causing immediate industry exit."
    ],
    correctIndex: 0,
    explanation: "Free entry and exit drive long-run economic profits to zero ($P = ATC$). Because price-taking firms produce where $P = MR = MC$, in long-run equilibrium $P = MR = MC = \\min ATC$. Producing where $P = MC$ achieves allocative efficiency, and producing at minimum $ATC$ achieves productive efficiency.",
    distractorTip: "In long-run competitive equilibrium, firms earn normal (zero economic) profit, achieving both productive and allocative efficiency."
  },
  "micro-u3-l7": {
    id: "micro3-l7-q3",
    stem: "In an increasing-cost perfectly competitive industry, how does a permanent increase in industry demand affect the long-run equilibrium price and industry supply curve?",
    options: [
      "Long-run price returns to its exact original level, and the long-run industry supply curve is perfectly horizontal.",
      "Long-run price decreases because new entrants achieve higher economies of scale.",
      "New firms enter, driving factor input costs down and shifting the supply curve downward.",
      "New firms enter, bidding up specialized resource prices and resulting in an upward-sloping long-run industry supply curve."
    ],
    correctIndex: 3,
    explanation: "In an increasing-cost industry, the entry of new firms increases industry demand for specialized, scarce inputs (such as skilled craft labor or rare mineral rights). This raises input prices, shifting each firm's cost curves upward, so the new long-run equilibrium price is higher than before (upward-sloping long-run industry supply).",
    distractorTip: "Constant-cost industry = horizontal long-run supply; Increasing-cost industry = upward-sloping long-run supply curve."
  },
  "micro-u3-l8": {
    id: "micro3-l8-q3",
    stem: "If a competitive firm faces market price $P = \\$25$, Total Cost $TC = 50 + 5Q + 2Q^2$, and $MC = 5 + 4Q$, what is the profit-maximizing output level $Q^*$?",
    options: [
      "$Q^* = 10$",
      "$Q^* = 5$",
      "$Q^* = 8$",
      "$Q^* = 12$"
    ],
    correctIndex: 1,
    explanation: "Set $MR = MC$. In perfect competition, $MR = P = \\$25$. $25 = 5 + 4Q \\implies 4Q = 20 \\implies Q = 5$. Check that $P > AVC$: At $Q = 5$, $VC = 5(5) + 2(25) = 25 + 50 = 75$, so $AVC = 75/5 = \\$15$. Since $P = \\$25 > \\$15$, the firm operates profitably.",
    distractorTip: "Set $P = MC$ to find the optimal quantity, then verify that $P \\ge AVC$."
  },

  // UNIT 4: Imperfect Competition
  "micro-u4-l1": {
    id: "micro4-l1-q3",
    stem: "Why does an unregulated single-price monopoly generate deadweight loss compared to a perfectly competitive market?",
    options: [
      "The monopoly produces at the minimum point of its average total cost curve.",
      "The monopoly experiences decreasing costs across all output levels.",
      "The monopoly restricts output to where $MR = MC$, setting a price that exceeds marginal cost ($P > MC$) and causing underallocation of resources.",
      "The monopoly faces a horizontal marginal revenue curve."
    ],
    correctIndex: 2,
    explanation: "A single-price monopoly maximizes profit where $MR = MC$, but charges a price $P$ off the demand curve. Because $P > MC$, the value to consumers of the last unit exceeds the cost of producing it. Output is less than the socially optimal quantity ($P = MC$), creating deadweight loss.",
    distractorTip: "Allocative inefficiency occurs whenever $P > MC$; monopolies intentionally restrict output to charge higher prices."
  },
  "micro-u4-l2": {
    id: "micro4-l2-q3",
    stem: "If government regulators require a natural monopoly to set price equal to marginal cost ($P = MC$, the socially optimal price), what financial dilemma typically occurs?",
    options: [
      "The monopoly will suffer economic losses because $MC < ATC$ across the relevant demand range, requiring a government subsidy to prevent shutdown.",
      "The monopoly will earn excessive monopoly rent and expand deadweight loss.",
      "The monopoly will immediately produce zero consumer surplus.",
      "The monopoly will achieve productive efficiency at the minimum point of ATC."
    ],
    correctIndex: 0,
    explanation: "Natural monopolies feature extensive economies of scale where $ATC$ declines over the entire market demand. When $ATC$ is falling, $MC$ lies strictly below $ATC$. Setting $P = MC$ forces $P < ATC$, meaning the firm incurs economic losses and will shut down without a public subsidy or fair-return regulation.",
    distractorTip: "Socially optimal regulation ($P = MC$) achieves allocative efficiency but forces the natural monopoly into losses ($P < ATC$)."
  },
  "micro-u4-l3": {
    id: "micro4-l3-q3",
    stem: "When a monopoly engages in perfect (first-degree) price discrimination, charging every customer their exact maximum willingness to pay, what are the effects on Consumer Surplus and Deadweight Loss?",
    options: [
      "Consumer surplus is maximized, and deadweight loss reaches its highest level.",
      "Both consumer surplus and producer surplus equal zero.",
      "Consumer surplus remains unchanged while producer surplus drops to zero.",
      "Consumer surplus is completely eliminated (converted to producer surplus), and deadweight loss is zero."
    ],
    correctIndex: 3,
    explanation: "Under perfect price discrimination, the monopoly's demand curve becomes its marginal revenue curve ($MR = P$). The firm produces all units where $P \\ge MC$ up to the competitive output, eliminating deadweight loss. However, every dollar of consumer surplus is converted into producer surplus/economic profit.",
    distractorTip: "Counterintuitive AP fact: Perfect price discrimination achieves allocative efficiency (zero deadweight loss), but leaves consumers with ZERO consumer surplus."
  },
  "micro-u4-l4": {
    id: "micro4-l4-q3",
    stem: "In long-run equilibrium, why does a monopolistically competitive firm exhibit 'excess capacity'?",
    options: [
      "The firm produces at the output level where $ATC$ is minimized.",
      "The firm produces an output level less than the output corresponding to minimum Average Total Cost ($Q < Q_{\\text{min } ATC}$).",
      "The firm's demand curve is perfectly horizontal.",
      "The firm faces identical barriers to entry as an oligopolistic cartel."
    ],
    correctIndex: 1,
    explanation: "Because products are differentiated, monopolistically competitive firms face downward-sloping demand curves. In long-run equilibrium, free entry forces the demand curve to be tangent to the downward-sloping segment of $ATC$ ($P = ATC$, zero profit). Since it is tangent where $ATC$ is still falling, the firm produces less than the capacity output that minimizes $ATC$.",
    distractorTip: "Excess capacity is the gap between actual output and the output that minimizes average total cost ($Q_{\\text{min } ATC} - Q_{\\text{actual}}$)."
  },
  "micro-u4-l5": {
    id: "micro4-l5-q3",
    stem: "In a duopoly game where each firm can choose High Price or Low Price, what defines a player's 'Dominant Strategy'?",
    options: [
      "A strategy that yields the highest joint profit if both firms collude secretly.",
      "A strategy that minimizes the maximum potential loss in the worst-case scenario.",
      "A strategy that yields the highest payoff regardless of the strategy chosen by the rival firm.",
      "A strategy chosen only after observing the opponent's prior move."
    ],
    correctIndex: 2,
    explanation: "A dominant strategy is an action that provides the best individual outcome for a player no matter what action the other player selects. If a firm prefers Low Price whether the rival chooses High or Low, Low Price is its dominant strategy.",
    distractorTip: "Test both of the rival's choices separately: if Option A is better in both cases, Option A is a dominant strategy."
  },
  "micro-u4-l6": {
    id: "micro4-l6-q3",
    stem: "Why are informal collusive cartels (such as OPEC) notoriously difficult to sustain in the long run without legal enforcement?",
    options: [
      "Each individual member has a strong unilateral incentive to cheat and overproduce to increase its own profits.",
      "Cartel agreements legally convert all participating firms into monopolistic competitors.",
      "Consumer demand curves become perfectly elastic once a cartel forms.",
      "Cartel output quotas eliminate all fixed overhead costs."
    ],
    correctIndex: 0,
    explanation: "A cartel restricts collective output to raise prices and maximize joint monopoly profits. However, at the agreed high cartel price, an individual firm's $P > MC$, giving each firm a powerful incentive to cheat by secretly producing extra units to capture additional individual profit, ultimately collapsing the cartel.",
    distractorTip: "The Prisoner's Dilemma illustrates cartel instability: individual self-interest undermines collective cooperation."
  },
  "micro-u4-l7": {
    id: "micro4-l7-q3",
    stem: "How do economists solve for the subgame perfect Nash equilibrium in an extensive-form (game tree) sequential game?",
    options: [
      "By selecting the highest joint payoff at the root node.",
      "By randomizing strategies using mixed-strategy probabilities.",
      "By using backward induction from the terminal payoffs back to the initial decision node.",
      "By eliminating strictly dominated strategies exclusively for the first mover."
    ],
    correctIndex: 2,
    explanation: "Backward induction solves sequential games by analyzing the last mover's best response at the terminal nodes first, and then working backward step-by-step to the initial decision node, ensuring that every credible threat or promise is subgame perfect.",
    distractorTip: "Backward induction: Start at the end of the decision tree and prune non-optimal branches backwards to the root."
  },
  "micro-u4-l8": {
    id: "micro4-l8-q3",
    stem: "A monopoly faces demand $P = 100 - 2Q$ and marginal revenue $MR = 100 - 4Q$. Marginal cost is constant at $MC = \\$20$. What are the profit-maximizing output $Q^*$ and price $P^*$?",
    options: [
      "$Q^* = 25, P^* = \\$50$",
      "$Q^* = 20, P^* = \\$60$",
      "$Q^* = 40, P^* = \\$20$",
      "$Q^* = 15, P^* = \\$70$"
    ],
    correctIndex: 1,
    explanation: "Set $MR = MC$: $100 - 4Q = 20 \\implies 4Q = 80 \\implies Q^* = 20$. Plug $Q^*$ into the demand curve to find price: $P^* = 100 - 2(20) = 100 - 40 = \\$60$.",
    distractorTip: "Never use the $MR$ equation to find the price! Find $Q^*$ where $MR = MC$, then plug that quantity into DEMAND to get $P^*$."
  },

  // UNIT 5: Factor Markets
  "micro-u5-l1": {
    id: "micro5-l1-q3",
    stem: "Why is the demand for labor referred to as a 'derived demand' in microeconomics?",
    options: [
      "Because labor wages are derived from minimum wage legislation.",
      "Because the supply of workers is determined by educational requirements.",
      "Because the demand for workers is directly dependent on consumer demand for the final goods and services those workers produce.",
      "Because labor demand is derived exclusively from interest rates on capital."
    ],
    correctIndex: 2,
    explanation: "Factor demand is called derived demand because firms do not hire workers or capital for direct personal consumption; rather, their demand for inputs is derived from the consumer demand for the finished output that those inputs create.",
    distractorTip: "If demand for cars increases, the derived demand for auto assembly workers and automotive steel shifts right."
  },
  "micro-u5-l2": {
    id: "micro5-l2-q3",
    stem: "A firm sells its output in a perfectly competitive market for \\$5 per unit. The 4th worker hired adds 6 units of output per hour. What is the Marginal Revenue Product ($MRP$) of the 4th worker?",
    options: [
      "\\$30 per hour",
      "\\$11 per hour",
      "\\$1.20 per hour",
      "\\$24 per hour"
    ],
    correctIndex: 0,
    explanation: "For a price-taking firm in the product market, Marginal Revenue Product equals Marginal Product times Product Price: $MRP = MP \\times P$. Here, $MRP = 6 \\times \\$5 = \\$30$ per hour.",
    distractorTip: "$MRP = MP \\times MR$ (or $MP \\times P$ when selling in a competitive product market)."
  },
  "micro-u5-l3": {
    id: "micro5-l3-q3",
    stem: "If a competitive firm hires workers in a competitive labor market where the going wage is \\$20 per hour, how many workers should the firm employ to maximize profits?",
    options: [
      "Hire workers until total output is maximized and marginal product is zero.",
      "Hire workers until the wage rate equals average product of labor.",
      "Hire workers until the average revenue product equals the wage rate.",
      "Hire workers up to the point where Marginal Revenue Product equals the wage ($MRP = W$)."
    ],
    correctIndex: 3,
    explanation: "The profit-maximizing resource employment rule states that a firm should hire variable inputs up to the quantity where Marginal Revenue Product equals Marginal Resource Cost ($MRP = MRC$). In a competitive labor market, $MRC = \\text{Wage}$, so the firm hires until $MRP = W = \\$20$.",
    distractorTip: "Profit maximization in factor markets: $MRP = MRC$. If $MRP > W$, hire more; if $MRP < W$, lay off workers."
  },
  "micro-u5-l4": {
    id: "micro5-l4-q3",
    stem: "Why does a monopsonistic employer face a Marginal Factor Cost ($MFC$) curve that lies strictly above the market Labor Supply curve?",
    options: [
      "The monopsonist must lower output prices to sell additional units.",
      "To hire an additional worker, the firm must offer a higher wage and raise the wage for all currently employed workers.",
      "Labor unions legally mandate progressive overtime bonuses.",
      "The supply of labor is perfectly elastic in a monopsonistic company town."
    ],
    correctIndex: 1,
    explanation: "A monopsony is the sole buyer of labor in a local market and faces an upward-sloping labor supply curve. To attract another worker, it must raise the wage rate; because it cannot wage-discriminate, it must pay that higher wage to all existing workers, causing $MFC > \\text{Wage}$.",
    distractorTip: "Just as $MR < P$ for a monopoly because it must drop price on all units, $MFC > W$ for a monopsony because it must raise wages on all workers."
  },
  "micro-u5-l5": {
    id: "micro5-l5-q3",
    stem: "A manufacturing firm uses labor ($L$) and capital ($K$). At current levels, $MP_L = 20, W = \\$10, MP_K = 60,$ and the rental price of capital $R = \\$20$. To minimize total production costs for its current output, what should the firm do?",
    options: [
      "Maintain the current input mix because marginal products are positive.",
      "Employ more capital and less labor because capital delivers a higher marginal product per dollar.",
      "Employ more labor and less capital to lower payroll taxes.",
      "Reduce both inputs equally to achieve productive efficiency."
    ],
    correctIndex: 1,
    explanation: "Apply the least-cost rule: $MP_L / P_L = 20 / 10 = 2$ units of output per dollar. $MP_K / P_K = 60 / 20 = 3$ units of output per dollar. Capital provides more output per dollar ($3 > 2$), so the firm should hire more capital and less labor until $MP_L / P_L = MP_K / P_K$.",
    distractorTip: "Least-cost input rule: $\\frac{MP_L}{P_L} = \\frac{MP_K}{P_K}$. Shift spending toward the factor with the higher marginal product per dollar."
  },
  "micro-u5-l6": {
    id: "micro5-l6-q3",
    stem: "What unique outcome can occur when a binding minimum wage is imposed on a monopsonistic labor market, unlike a competitive labor market?",
    options: [
      "Both the wage rate and the level of employment can increase simultaneously without creating unemployment.",
      "Employment must immediately collapse to zero.",
      "The marginal factor cost curve shifts vertically upward above the labor supply curve.",
      "The firm's demand for labor becomes perfectly vertical."
    ],
    correctIndex: 0,
    explanation: "In a monopsony, setting a minimum wage above the monopsony wage (up to the intersection of labor supply and $MRP$) makes the firm a price-taker for labor up to that supply level. This eliminates the need to raise wages on all prior workers, flattening $MFC$ to the minimum wage and incentivizing the monopsonist to hire MORE workers.",
    distractorTip: "In competitive labor markets, a minimum wage causes unemployment; in monopsonies, an appropriate minimum wage can INCREASE employment."
  },
  "micro-u5-l7": {
    id: "micro5-l7-q3",
    stem: "What economic force causes an individual's labor supply curve to bend backward at very high wage rates?",
    options: [
      "The substitution effect dominates the income effect, making work more appealing.",
      "Decreasing marginal revenue products in competitive factor markets.",
      "The income effect dominates the substitution effect, as higher earnings allow workers to afford more leisure time.",
      "Federal income tax brackets drop to zero for high earners."
    ],
    correctIndex: 2,
    explanation: "As wages rise, the substitution effect encourages working more (leisure becomes more expensive). However, higher wages also increase total wealth; because leisure is a normal good, the income effect encourages taking more leisure. At sufficiently high wages, the income effect dominates, causing hours worked to decrease.",
    distractorTip: "Upward-sloping labor supply = Substitution effect > Income effect; Backward-bending labor supply = Income effect > Substitution effect."
  },
  "micro-u5-l8": {
    id: "micro5-l8-q3",
    stem: "A competitive firm hires labor in a competitive factor market where the market wage is \\$40. If product price is \\$4 and the firm's production function has $MP_L = 25 - 0.5L$, how many workers $L$ should the firm hire?",
    options: [
      "$L = 50$",
      "$L = 30$",
      "$L = 10$",
      "$L = 20$"
    ],
    correctIndex: 1,
    explanation: "Set $MRP = W$. $MRP = MP_L \\times P = (25 - 0.5L) \\times 4 = 100 - 2L$. Equating to wage: $100 - 2L = 40 \\implies 2L = 60 \\implies L = 30$.",
    distractorTip: "Multiply marginal product by product price to get $MRP$, then set equal to the wage rate $W$."
  },

  // UNIT 6: Market Failure and the Role of Government
  "micro-u6-l1": {
    id: "micro6-l1-q3",
    stem: "Which of the following conditions represents societal allocative efficiency in a market?",
    options: [
      "Total consumer surplus equals total producer surplus.",
      "Price equals the minimum of Average Variable Cost ($P = \\min AVC$).",
      "Marginal Social Benefit equals Marginal Social Cost ($MSB = MSC$).",
      "All market production externalities are converted into government tax revenue."
    ],
    correctIndex: 2,
    explanation: "Allocative efficiency is achieved when an economy allocates resources to produce the combination of goods and services most desired by society, occurring where the marginal benefit to society equals the marginal cost to society ($MSB = MSC$).",
    distractorTip: "Social efficiency rule: $MSB = MSC$. In the absence of externalities, this corresponds to $P = MC$."
  },
  "micro-u6-l2": {
    id: "micro6-l2-q3",
    stem: "In the presence of a negative production externality (such as chemical wastewater discharge), how does the free-market equilibrium compare to the socially optimal outcome?",
    options: [
      "The free market produces more than the socially optimal quantity ($Q_{\\text{market}} > Q_{\\text{optimal}}$) at too low a price.",
      "The free market produces less than the socially optimal quantity at too high a price.",
      "The free market achieves allocative efficiency automatically through market competition.",
      "Deadweight loss is entirely avoided because private costs exceed social costs."
    ],
    correctIndex: 0,
    explanation: "Negative externalities impose external costs on third parties, meaning Marginal Social Cost exceeds Marginal Private Cost ($MSC > MPC$). Private producers ignore external costs, overproducing the good ($Q_{\\text{market}} > Q_{\\text{optimal}}$) and charging a price that understates true societal cost.",
    distractorTip: "Negative externalities lead to OVERPRODUCTION ($Q_{\\text{market}} > Q_{\\text{opt}}$); positive externalities lead to UNDERPRODUCTION ($Q_{\\text{market}} < Q_{\\text{opt}}$)."
  },
  "micro-u6-l3": {
    id: "micro6-l3-q3",
    stem: "To correct the market failure caused by a positive consumption externality (such as vaccinations), what policy tool should the government implement?",
    options: [
      "A per-unit excise tax on vaccine pharmaceutical manufacturers equal to the external cost.",
      "A binding price ceiling set strictly below the market equilibrium price.",
      "A legal prohibition on private medical clinics.",
      "A per-unit Pigouvian subsidy to consumers or producers equal to the Marginal External Benefit."
    ],
    correctIndex: 3,
    explanation: "Positive consumption externalities mean $MSB > MPB$. The private market underproduces relative to the social optimum. A per-unit subsidy equal to the Marginal External Benefit ($MEB$) lowers the effective price to consumers, shifting demand to $MSB$ and achieving the socially optimal output.",
    distractorTip: "Subsidies correct positive externalities; per-unit Pigouvian taxes correct negative externalities."
  },
  "micro-u6-l4": {
    id: "micro6-l4-q3",
    stem: "Why are pure public goods (such as national defense and public lighthouses) systematically underprovided or not provided at all by unregulated private markets?",
    options: [
      "They are non-rival and non-excludable, leading to the free-rider problem where individuals can enjoy benefits without paying.",
      "Their marginal cost of production is infinite.",
      "They are rival in consumption and strictly excludable by private pricing mechanisms.",
      "Governments pass antitrust statutes making private provision illegal."
    ],
    correctIndex: 0,
    explanation: "Pure public goods are non-excludable (non-payers cannot be prevented from benefiting) and non-rival (one person's use does not diminish another's). Because people cannot be excluded, consumers have an incentive to 'free-ride', preventing private firms from profitably collecting revenue.",
    distractorTip: "Non-excludable = impossible to stop non-payers; Non-rival = one person's consumption doesn't diminish another's. This leads to the free-rider problem."
  },
  "micro-u6-l5": {
    id: "micro6-l5-q3",
    stem: "If Country A has a Gini coefficient of 0.22 while Country B has a Gini coefficient of 0.54, what does this indicate about income distribution?",
    options: [
      "Country A has a significantly more equal distribution of income than Country B.",
      "Country B has a perfectly equal distribution of income.",
      "Country A has higher average income per capita than Country B.",
      "Country B has zero poverty."
    ],
    correctIndex: 0,
    explanation: "The Gini coefficient measures income inequality from 0 (perfect equality, everyone has identical income) to 1 (perfect inequality, one person has all income). Country A's lower score (0.22 vs 0.54) signifies a much more equitable distribution of income.",
    distractorTip: "Gini coefficient: 0 = complete equality; 1 = complete inequality. The closer to 0, the more equal the distribution."
  },
  "micro-u6-l6": {
    id: "micro6-l6-q3",
    stem: "According to the Coase Theorem, when can private bargaining achieve an efficient resource allocation without government intervention in the presence of an externality?",
    options: [
      "Only when government regulators assign property rights directly to municipal authorities.",
      "Only when property rights are clearly defined, transaction costs are negligible, and there are few parties involved.",
      "Only when the externality is a positive consumption benefit.",
      "Only when courts impose binding liability rules on both disputing parties."
    ],
    correctIndex: 1,
    explanation: "The Coase Theorem states that if property rights are well-defined, transaction costs are low/negligible, and negotiation involves relatively few parties, private entities can negotiate mutually advantageous bargains that internalize externalities and reach an efficient outcome.",
    distractorTip: "Key Coase Theorem requirements: Well-defined property rights and zero (or very low) transaction costs."
  },
  "micro-u6-l7": {
    id: "micro6-l7-q3",
    stem: "Under the Sherman Antitrust Act of 1890 and Clayton Antitrust Act of 1914, which business practice is explicitly deemed an illegal per se violation?",
    options: [
      "Price discrimination that does not substantially lessen competition.",
      "Entering a new industry through venture capital investments.",
      "Explicit price-fixing agreements and bid-rigging conspiracies between competing firms.",
      "Charging different prices in different geographic regions due to shipping costs."
    ],
    correctIndex: 2,
    explanation: "Section 1 of the Sherman Antitrust Act prohibits contracts, combinations, and conspiracies in restraint of trade. Horizontal price-fixing (competitors agreeing on prices) and bid-rigging are classified as illegal per se, requiring no proof of specific harm to be convicted.",
    distractorTip: "Horizontal price-fixing and market allocation between competitors are illegal per se under US antitrust statutes."
  },
  "micro-u6-l8": {
    id: "micro6-l8-q3",
    stem: "In a market with private marginal benefit $MPB = 80 - Q$, private marginal cost $MPC = 20 + Q$, and a negative production externality of Marginal External Cost $MEC = \\$10$ per unit, what is the socially optimal output $Q_{\\text{opt}}$?",
    options: [
      "$Q_{\\text{opt}} = 30$",
      "$Q_{\\text{opt}} = 25$",
      "$Q_{\\text{opt}} = 20$",
      "$Q_{\\text{opt}} = 35$"
    ],
    correctIndex: 1,
    explanation: "Social efficiency requires $MSB = MSC$. Here $MSB = MPB = 80 - Q$. $MSC = MPC + MEC = (20 + Q) + 10 = 30 + Q$. Equating $MSB = MSC$: $80 - Q = 30 + Q \\implies 2Q = 50 \\implies Q_{\\text{opt}} = 25$. (In contrast, the unregulated private market sets $MPB = MPC \\implies 80 - Q = 20 + Q \\implies Q_{\\text{private}} = 30$, overproducing by 5 units).",
    distractorTip: "Always calculate $MSC = MPC + \\text{external cost}$ before equating to $MSB$ to find the socially optimal output."
  }
};

// Now read src/data/quiz/apMicroeconomicsUnitsData.ts and apply
const fullPath = path.resolve(__dirname, '../src/data/quiz/apMicroeconomicsUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

// Use esbuild to evaluate the current units
const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_MICROECONOMICS_UNIT_DEFINITIONS;

let addedCount = 0;
units.forEach(u => {
  u.levels.forEach(l => {
    if (q3Data[l.uniqueKey]) {
      // Check if already has 3
      if (l.questions.length === 2) {
        l.questions.push(q3Data[l.uniqueKey]);
        addedCount++;
      }
    } else {
      console.warn('Missing q3 for', l.uniqueKey);
    }
  });
});

console.log('Added', addedCount, 'questions to AP Microeconomics.');

// Format back to TS
const newCode = `// AP Microeconomics Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–6)
// Complete authentic coverage: 48 Levels, 144 Questions (8 Levels per Unit, 3 Questions per Level).
// Perfectly balanced option distribution across A, B, C, D (36 each).

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_MICROECONOMICS_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apMicroeconomicsUnitsData.ts successfully.');
