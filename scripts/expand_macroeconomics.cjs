const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const q3Data = {
  // UNIT 1: Basic Economic Concepts
  "macro-u1-l1": {
    id: "macro1-l1-q3",
    stem: "Which of the following scenarios best illustrates the macroeconomic concept of scarcity?",
    options: [
      "A household chooses between purchasing groceries or paying for home heating.",
      "A commercial bank issues home loans to qualified credit applicants.",
      "A government with limited tax revenues must choose between expanding national healthcare coverage or increasing infrastructure spending.",
      "A manufacturing firm increases overtime pay to hire additional factory assembly workers."
    ],
    correctIndex: 2,
    explanation: "Scarcity is the fundamental economic condition where society has unlimited human wants while possessing strictly limited productive resources. At the macroeconomic level, national governments face trade-offs between competing fiscal priorities due to finite budget resources.",
    distractorTip: "Macroeconomics focuses on economy-wide resource constraints (government budget trade-offs), whereas microeconomics focuses on individual consumer or firm decisions."
  },
  "macro-u1-l2": {
    id: "macro1-l2-q3",
    stem: "Which combination of production choices will shift a nation's Production Possibilities Curve outward the most in the long run?",
    options: [
      "Allocating a large proportion of current resources toward producing Capital Goods rather than Consumer Goods.",
      "Maximizing the current production of luxury Consumer Goods to satisfy immediate household demand.",
      "Operating at a point strictly inside the current PPC to conserve scarce physical resources.",
      "Imposing high tariffs on imported raw industrial materials to protect domestic factory jobs."
    ],
    correctIndex: 0,
    explanation: "Capital goods (machinery, factory equipment, technological tools) expand an economy's future productive capacity. By sacrificing current consumer goods in favor of capital investment, a nation accelerates capital accumulation and achieves faster long-run economic growth (shifting the PPC outward).",
    distractorTip: "Producing capital goods fuels long-run growth; producing consumer goods provides immediate satisfaction but yields slower future expansion."
  },
  "macro-u1-l3": {
    id: "macro1-l3-q3",
    stem: "Country Alpha can produce 100 bushels of wheat or 50 barrels of oil. Country Beta can produce 60 bushels of wheat or 40 barrels of oil. Which country has the comparative advantage in oil, and what is its opportunity cost?",
    options: [
      "Country Alpha, with an opportunity cost of 2 bushels of wheat per barrel of oil.",
      "Country Alpha, with an opportunity cost of 0.5 bushels of wheat per barrel of oil.",
      "Country Beta, with an opportunity cost of 0.67 bushels of wheat per barrel of oil.",
      "Country Beta, with an opportunity cost of 1.5 bushels of wheat per barrel of oil."
    ],
    correctIndex: 3,
    explanation: "For Alpha: 1 barrel of oil costs 100/50 = 2 bushels of wheat. For Beta: 1 barrel of oil costs 60/40 = 1.5 bushels of wheat. Because Beta sacrifices fewer bushels of wheat per barrel of oil (1.5 < 2.0), Country Beta has the comparative advantage in oil production.",
    distractorTip: "Comparative advantage goes to the producer with the lower opportunity cost: 1.5 bushels of wheat < 2.0 bushels of wheat."
  },
  "macro-u1-l4": {
    id: "macro1-l4-q3",
    stem: "In the market for hybrid vehicles, what will happen to equilibrium price and quantity if household incomes rise (assuming hybrids are normal goods) while battery manufacturing costs decline?",
    options: [
      "Equilibrium price will definitely increase; quantity is indeterminate.",
      "Equilibrium quantity will definitely increase; equilibrium price change is indeterminate.",
      "Equilibrium price will definitely decrease; quantity will increase.",
      "Equilibrium quantity will definitely decrease; price will decrease."
    ],
    correctIndex: 1,
    explanation: "Higher income increases demand (shifts right). Lower production costs increase supply (shifts right). Both shifts unambiguously increase equilibrium quantity. However, the demand shift puts upward pressure on price while the supply shift puts downward pressure on price, leaving the net change in equilibrium price indeterminate.",
    distractorTip: "Double shift rule: If demand and supply both increase, quantity definitely rises, but price is indeterminate without knowing the shift magnitudes."
  },
  "macro-u1-l5": {
    id: "macro1-l5-q3",
    stem: "If the market price of wheat is currently above the market-clearing equilibrium price, what market dynamic will occur in a competitive economy?",
    options: [
      "A persistent shortage will emerge as consumers demand more wheat than is available.",
      "The government must issue rationing coupons to prevent market collapse.",
      "A market surplus will develop, exerting downward competitive pressure on price until equilibrium is restored.",
      "The market supply curve will shift inward to eliminate the price gap."
    ],
    correctIndex: 2,
    explanation: "When price exceeds equilibrium, quantity supplied exceeds quantity demanded ($Q_s > Q_d$), creating an excess supply (surplus). To sell unsold inventory, competing suppliers lower prices until quantity demanded equals quantity supplied at the equilibrium price.",
    distractorTip: "Price above equilibrium = Surplus (downward price pressure); Price below equilibrium = Shortage (upward price pressure)."
  },
  "macro-u1-l6": {
    id: "macro1-l6-q3",
    stem: "Which of the following events will cause a permanent outward shift of an economy's Production Possibilities Curve?",
    options: [
      "A permanent increase in labor productivity due to widespread adoption of artificial intelligence and advanced automation.",
      "A reduction in the central bank's policy interest rate.",
      "An increase in consumer spending on imported manufactured goods.",
      "A decrease in the national unemployment rate from 6% to 4%."
    ],
    correctIndex: 0,
    explanation: "The PPC shifts outward only when an economy's productive capacity expands, driven by technological breakthroughs, increases in capital stock, discovery of natural resources, or labor force growth. Lower interest rates or lower unemployment merely change the current operating point.",
    distractorTip: "Decreasing unemployment moves an economy from inside the PPC toward the curve; it does NOT shift the curve itself."
  },
  "macro-u1-l7": {
    id: "macro1-l7-q3",
    stem: "Suppose Country A produces 10 tons of steel at an opportunity cost of 20 tons of grain, while Country B produces 10 tons of steel at an opportunity cost of 30 tons of grain. Which terms of trade for 10 tons of steel would be accepted by both nations?",
    options: [
      "10 tons of steel for 15 tons of grain",
      "10 tons of steel for 35 tons of grain",
      "10 tons of steel for 18 tons of grain",
      "10 tons of steel for 25 tons of grain"
    ],
    correctIndex: 3,
    explanation: "Country A's opportunity cost is 20 grain; Country B's is 30 grain. Country A will export steel as long as it receives more than 20 grain. Country B will import steel as long as it pays less than 30 grain. Any terms of trade strictly between 20 and 30 grain (such as 25 tons of grain) will be mutually acceptable.",
    distractorTip: "Terms of trade must lie strictly between the domestic opportunity costs of the two trading nations: 20 < Terms of Trade < 30."
  },
  "macro-u1-l8": {
    id: "macro1-l8-q3",
    stem: "Why does the circular flow model demonstrate that national aggregate income must mathematically equal national aggregate expenditure in an economy?",
    options: [
      "Because all corporate profits are taxed at 100% by the government.",
      "Because every dollar spent on final goods and services by one economic agent becomes gross income for another economic agent.",
      "Because the commercial banking system holds 100% required reserves against all deposits.",
      "Because import expenditures must equal export revenues in foreign exchange markets."
    ],
    correctIndex: 1,
    explanation: "In the circular flow model, every transaction has a buyer and a seller. The total dollar amount spent to purchase finished final goods and services ($GDP = C + I + G + X_n$) flows directly to factors of production as wages, rents, interest, and profits, making Aggregate Expenditure identically equal to Aggregate Income.",
    distractorTip: "In national income accounting: Aggregate Expenditure $\\equiv$ Aggregate Output $\\equiv$ Aggregate Income."
  },

  // UNIT 2: Economic Indicators and the Business Cycle
  "macro-u2-l1": {
    id: "macro2-l1-q3",
    stem: "Which of the following transactions is directly included in the calculation of the current year's US Gross Domestic Product (GDP)?",
    options: [
      "The purchase of 100 shares of tech stock on the New York Stock Exchange.",
      "The purchase of a used residential home originally constructed in 1985.",
      "A legal fee paid to an attorney for drawing up corporate incorporation documents.",
      "Social Security retirement benefit checks issued by the federal government."
    ],
    correctIndex: 2,
    explanation: "GDP measures the market value of all final goods and services produced domestically within a given time period. Legal services are newly produced final services and are included in GDP. Stocks are financial asset transfers, used homes were counted in 1985, and Social Security checks are government transfer payments (no current production).",
    distractorTip: "GDP exclusions: Used goods, financial asset transfers (stocks/bonds), transfer payments (welfare/Social Security), and non-market household work."
  },
  "macro-u2-l2": {
    id: "macro2-l2-q3",
    stem: "In Year 1 (base year), an economy has Nominal GDP of \\$500 billion and GDP deflator of 100. In Year 2, Nominal GDP rises to \\$660 billion while the GDP deflator rises to 110. What is Real GDP in Year 2?",
    options: [
      "\\$600 billion",
      "\\$726 billion",
      "\\$550 billion",
      "\\$660 billion"
    ],
    correctIndex: 0,
    explanation: "Real GDP = $\\frac{\\text{Nominal GDP}}{\\text{GDP Deflator}} \\times 100 = \\frac{\\$660 \\text{ billion}}{110} \\times 100 = \\$600 \\text{ billion}$.",
    distractorTip: "Real GDP deflates nominal figures to remove price inflation: Real GDP = (Nominal GDP / Deflator) * 100."
  },
  "macro-u2-l3": {
    id: "macro2-l3-q3",
    stem: "An economy has a total adult non-institutionalized population of 200 million, a civilian labor force of 120 million, and 114 million employed workers. What is the national unemployment rate?",
    options: [
      "3.0%",
      "6.0%",
      "40.0%",
      "5.0%"
    ],
    correctIndex: 3,
    explanation: "Unemployed workers = Labor Force - Employed = 120 million - 114 million = 6 million. Unemployment Rate = $\\frac{\\text{Unemployed}}{\\text{Civilian Labor Force}} \\times 100 = \\frac{6}{120} \\times 100 = 5.0\\%$.",
    distractorTip: "The unemployment rate is divided by the LABOR FORCE (120M), NEVER the total population (200M)!"
  },
  "macro-u2-l4": {
    id: "macro2-l4-q3",
    stem: "A software engineer voluntarily quits a job in Seattle to relocate to Austin and spend two months searching for a position with a clean-energy startup. How is this worker classified?",
    options: [
      "Structurally unemployed",
      "Frictionally unemployed",
      "Cyclically unemployed",
      "A discouraged worker outside the labor force"
    ],
    correctIndex: 1,
    explanation: "Frictional unemployment consists of workers who are temporarily between jobs, voluntarily switching employers, or entering the labor force seeking jobs that match their existing skills and geographic preferences.",
    distractorTip: "Frictional = between jobs/searching; Structural = skills obsolete or geographic mismatch; Cyclical = caused by recessionary decline in AD."
  },
  "macro-u2-l5": {
    id: "macro2-l5-q3",
    stem: "If a commercial bank issues a 3-year fixed-rate car loan at an 8% nominal interest rate expecting 3% inflation, but actual inflation turns out to be 6%, who is helped and who is hurt?",
    options: [
      "Both the bank and borrower benefit equally from the higher inflation rate.",
      "The commercial bank benefits because nominal rates are fixed.",
      "The borrower benefits and the lending bank is hurt, because the loan is repaid with less valuable dollars.",
      "Neither party is affected because real interest rates cannot change after loan signing."
    ],
    correctIndex: 2,
    explanation: "By the Fisher equation, Real Interest Rate = Nominal Rate - Inflation Rate. Expected real rate = 8% - 3% = 5%. Actual real rate = 8% - 6% = 2%. Because the actual real return received by the bank drops from 5% to 2%, borrowers pay back loans in inflated, less valuable dollars, gaining at the lender's expense.",
    distractorTip: "Unexpected inflation helps BORROWERS (repay with cheaper dollars) and hurts LENDERS and fixed-income savers."
  },
  "macro-u2-l6": {
    id: "macro2-l6-q3",
    stem: "When an economy is operating at a point where actual Real GDP is strictly less than potential Real GDP ($Y < Y_f$), what type of output gap exists and what is true about the unemployment rate?",
    options: [
      "A recessionary gap exists, and the actual unemployment rate exceeds the natural rate of unemployment ($u > u_n$).",
      "An inflationary gap exists, and the actual unemployment rate is zero.",
      "A stagflationary gap exists, and cyclical unemployment is negative.",
      "A full-employment gap exists, and the natural rate equals the cyclical rate."
    ],
    correctIndex: 0,
    explanation: "When actual output falls below full-employment potential ($Y < Y_f$), a recessionary gap exists. In a recessionary gap, cyclical unemployment is positive, causing the actual unemployment rate to rise above the natural rate of unemployment ($u = u_n + \\text{cyclical} > u_n$).",
    distractorTip: "Recessionary gap: $Y < Y_f$ and $u > u_n$ (positive cyclical unemployment); Inflationary gap: $Y > Y_f$ and $u < u_n$."
  },
  "macro-u2-l7": {
    id: "macro2-l7-q3",
    stem: "Why does the Consumer Price Index (CPI) tend to slightly overstate the true cost of living over time compared to the GDP Deflator?",
    options: [
      "The CPI excludes consumer services such as medical care and transportation.",
      "The CPI is calculated using current-year variable production weights rather than fixed weights.",
      "The CPI includes prices of industrial machinery and defense equipment purchased by the government.",
      "The CPI uses a fixed market basket of consumer goods and fails to fully account for consumer substitution toward cheaper alternatives."
    ],
    correctIndex: 3,
    explanation: "The CPI suffers from substitution bias: it tracks a fixed basket of goods. When the price of beef rises, consumers substitute toward chicken. Because the CPI assumes households continue buying the exact same quantity of expensive beef, it overstates the actual increase in living costs.",
    distractorTip: "CPI uses a fixed consumer basket (substitution bias); GDP deflator includes ALL currently produced domestic goods and services."
  },
  "macro-u2-l8": {
    id: "macro2-l8-q3",
    stem: "Suppose an economy's CPI was 200 in Year 1 and rises to 210 in Year 2. A worker's nominal wage increased by 3% over the same period. What happened to the worker's real wage?",
    options: [
      "Real wage increased by 3%.",
      "Real wage decreased by approximately 2%.",
      "Real wage increased by 5%.",
      "Real wage remained perfectly unchanged."
    ],
    correctIndex: 1,
    explanation: "Inflation rate = $\\frac{210 - 200}{200} \\times 100 = \\frac{10}{200} \\times 100 = 5.0\\%$. The percentage change in real wage $\\approx \\%\\Delta \\text{Nominal Wage} - \\%\\Delta \\text{Price Level} = 3.0\\% - 5.0\\% = -2.0\\%$. Because inflation exceeded nominal wage growth, purchasing power fell by 2%.",
    distractorTip: "% change in Real Wage = % change in Nominal Wage - Inflation Rate. If inflation > wage growth, real purchasing power falls."
  },

  // UNIT 3: National Income and Price Determination
  "macro-u3-l1": {
    id: "macro3-l1-q3",
    stem: "Which of the following explains why the Aggregate Demand (AD) curve is downward sloping, distinguishing it from a microeconomic demand curve?",
    options: [
      "The substitution of domestic goods for identical foreign goods when relative wages change.",
      "The law of diminishing marginal utility across all consumer product categories.",
      "The interest rate effect: higher price levels increase money demand, driving up nominal interest rates and dampening investment spending.",
      "The income effect of wage adjustments across industrial manufacturing plants."
    ],
    correctIndex: 2,
    explanation: "The three reasons the AD curve slopes downward are: (1) The Real Wealth Effect (higher $P$ erodes purchasing power), (2) The Interest Rate Effect (higher $P$ increases money demand, raising interest rates and reducing $I$ and $C$), and (3) The Foreign Purchases/Exchange Rate Effect (higher domestic $P$ makes exports less competitive, reducing $X_n$).",
    distractorTip: "Micro demand slopes down due to substitution/income effects between individual goods; AD slopes down due to wealth, interest rate, and foreign purchases effects."
  },
  "macro-u3-l2": {
    id: "macro3-l2-q3",
    stem: "Why is the Short-Run Aggregate Supply (SRAS) curve upward sloping in the short run?",
    options: [
      "Nominal wages and input costs are sticky (inflexible) in the short run due to labor contracts, so higher product prices increase firm profitability and output.",
      "Technological innovation increases continuously in the short run.",
      "The central bank automatically lowers interest rates as output expands.",
      "All product and resource prices adjust instantaneously to price level shocks."
    ],
    correctIndex: 0,
    explanation: "In the short run, nominal wages and other factor input prices are fixed by labor agreements, leases, and implicit contracts (sticky wages). When the overall price level rises, output prices rise faster than input costs, widening profit margins and inducing firms to expand production.",
    distractorTip: "Sticky input costs and wages in the short run make SRAS upward sloping; in the long run, all prices are fully flexible, making LRAS vertical."
  },
  "macro-u3-l3": {
    id: "macro3-l3-q3",
    stem: "In the AD-AS model, what does the vertical Long-Run Aggregate Supply (LRAS) curve represent?",
    options: [
      "The maximum theoretical physical output attainable if all citizens work 24 hours a day.",
      "The output level where structural and frictional unemployment are completely eliminated.",
      "The price level where the central bank stabilizes the money supply.",
      "The economy's potential output ($Y_f$) achieved when all input prices are fully flexible and unemployment equals the natural rate ($u = u_n$)."
    ],
    correctIndex: 3,
    explanation: "LRAS is vertical at potential GDP ($Y_f$) because in the long run, input prices (including nominal wages) fully adjust to changes in the price level. As a result, the price level does not affect real output in the long run, and the economy operates at full employment ($u = u_n$ with zero cyclical unemployment).",
    distractorTip: "At LRAS, actual unemployment equals the natural rate of unemployment ($u = u_n$); cyclical unemployment is zero."
  },
  "macro-u3-l4": {
    id: "macro3-l4-q3",
    stem: "An economy is currently experiencing an inflationary gap where $Y > Y_f$. If the government and central bank do not intervene, how will the economy automatically self-adjust back to long-run equilibrium?",
    options: [
      "Consumer demand will collapse, shifting the Aggregate Demand curve rapidly to the left.",
      "Nominal wages and resource prices will eventually rise due to labor shortages, shifting the SRAS curve to the left until output returns to $Y_f$ at a higher price level.",
      "The Long-Run Aggregate Supply curve will shift rightward to match actual output.",
      "Firms will permanently reduce product prices to clear excess inventory."
    ],
    correctIndex: 1,
    explanation: "In an inflationary gap, output exceeds potential and unemployment is below the natural rate. Tight labor markets force employers to compete for workers by bidding up nominal wages. As wages rise, production costs increase, shifting SRAS to the left until real GDP returns to potential output ($Y_f$) at a higher equilibrium price level.",
    distractorTip: "Long-run self-adjustment always occurs via shifting SRAS: In an inflationary gap, wages rise and SRAS shifts LEFT. In a recessionary gap, wages fall and SRAS shifts RIGHT."
  },
  "macro-u3-l5": {
    id: "macro3-l5-q3",
    stem: "If the Marginal Propensity to Consume ($MPC$) is 0.8, what are the government spending multiplier and the tax multiplier?",
    options: [
      "Spending Multiplier = 4; Tax Multiplier = -3",
      "Spending Multiplier = 10; Tax Multiplier = -9",
      "Spending Multiplier = 5; Tax Multiplier = -4",
      "Spending Multiplier = 1.25; Tax Multiplier = -0.8"
    ],
    correctIndex: 2,
    explanation: "Marginal Propensity to Save ($MPS$) = $1 - MPC = 1 - 0.8 = 0.2$. Spending Multiplier = $\\frac{1}{MPS} = \\frac{1}{0.2} = 5$. Tax Multiplier = $-\\frac{MPC}{MPS} = -\\frac{0.8}{0.2} = -4$.",
    distractorTip: "Spending multiplier is always positive and 1 greater in absolute magnitude than the tax multiplier: $k_{\\text{spend}} - |k_{\\text{tax}}| = 1$."
  },
  "macro-u3-l6": {
    id: "macro3-l6-q3",
    stem: "Which of the following functions as an automatic stabilizer during a macroeconomic recession without requiring any new legislative action by Congress?",
    options: [
      "Progressive income tax collections automatically decline and unemployment insurance payments automatically increase, moderating the decline in disposable income.",
      "Congress passes an emergency infrastructure appropriation bill.",
      "The Federal Reserve lowers the target range for the federal funds rate.",
      "State governors balance municipal budgets by cutting public school teacher salaries."
    ],
    correctIndex: 0,
    explanation: "Automatic stabilizers are fiscal mechanisms built into the tax and transfer system that automatically cushion economic fluctuations without deliberate legislative policy changes. During a downturn, falling incomes lower tax liabilities, and more people qualify for unemployment benefits, stabilizing disposable income and aggregate demand.",
    distractorTip: "Discretionary fiscal policy requires new legislation (passing a bill); automatic stabilizers happen automatically through existing tax and welfare laws."
  },
  "macro-u3-l7": {
    id: "macro3-l7-q3",
    stem: "If the government increases spending by \\$40 billion and simultaneously increases lump-sum taxes by \\$40 billion, what will be the net impact on Aggregate Demand according to the Balanced Budget Multiplier?",
    options: [
      "Aggregate demand remains perfectly unchanged because the tax cancels the spending.",
      "Aggregate demand decreases by \\$40 billion because taxes hurt consumer confidence.",
      "Aggregate demand increases by \\$160 billion due to the spending multiplier.",
      "Aggregate demand increases by exactly \\$40 billion because the balanced budget multiplier equals 1."
    ],
    correctIndex: 3,
    explanation: "The Balanced Budget Multiplier is always equal to 1. Spending Multiplier + Tax Multiplier = $\\frac{1}{MPS} + \\left(-\\frac{MPC}{MPS}\\right) = \\frac{1 - MPC}{MPS} = \\frac{MPS}{MPS} = 1$. An equal increase in $G$ and $T$ of \\$40B increases total equilibrium GDP by $1 \\times \\$40\\text{B} = \\$40\\text{B}$.",
    distractorTip: "Balanced budget multiplier theorem: $\\Delta Y = \\Delta G$ when $\\Delta G = \\Delta T$. The net multiplier is always exactly 1."
  },
  "macro-u3-l8": {
    id: "macro3-l8-q3",
    stem: "An economy is in a recessionary gap with actual Real GDP \\$200 billion below potential GDP. If the $MPC = 0.75$, what minimum change in government spending ($G$) is needed to restore full employment?",
    options: [
      "Increase government spending by \\$200 billion.",
      "Increase government spending by \\$50 billion.",
      "Increase government spending by \\$150 billion.",
      "Decrease government spending by \\$50 billion."
    ],
    correctIndex: 1,
    explanation: "$MPS = 1 - 0.75 = 0.25$. Spending Multiplier = $\\frac{1}{0.25} = 4$. Required change in $G$: $\\Delta Y = \\Delta G \\times \\text{Multiplier} \\implies 200 = \\Delta G \\times 4 \\implies \\Delta G = \\frac{200}{4} = \\$50\\text{ billion}$.",
    distractorTip: "Divide the output gap by the spending multiplier: $\\Delta G = \\frac{\\text{Output Gap}}{\\text{Multiplier}} = \\frac{200}{4} = 50$."
  },

  // UNIT 4: Financial Sector
  "macro-u4-l1": {
    id: "macro4-l1-q3",
    stem: "Which of the following assets possesses the highest degree of liquidity in the financial system?",
    options: [
      "A 30-year US Treasury bond",
      "A commercial real estate office park",
      "Currency and checkable bank demand deposits",
      "A rare coin collection and fine art"
    ],
    correctIndex: 2,
    explanation: "Liquidity measures the ease and speed with which an asset can be converted directly into the economy's medium of exchange without loss of value. Physical currency and checkable demand deposits constitute M1 money and are perfectly liquid.",
    distractorTip: "Currency and demand deposits have the highest liquidity; physical real estate and collectibles have very low liquidity."
  },
  "macro-u4-l2": {
    id: "macro4-l2-q3",
    stem: "A commercial bank receives a new cash deposit of \\$10,000. If the legal reserve requirement is 10%, what are the bank's required reserves and maximum initial new loan amount?",
    options: [
      "Required Reserves = \\$1,000; Maximum Initial Loan = \\$9,000",
      "Required Reserves = \\$10,000; Maximum Initial Loan = \\$0",
      "Required Reserves = \\$500; Maximum Initial Loan = \\$9,500",
      "Required Reserves = \\$9,000; Maximum Initial Loan = \\$1,000"
    ],
    correctIndex: 0,
    explanation: "Required reserves = Deposit $\\times$ Reserve Ratio = $\\$10,000 \\times 0.10 = \\$1,000$. Excess reserves = Total Reserves - Required Reserves = $\\$10,000 - \\$1,000 = \\$9,000$. A single commercial bank can lend only up to its excess reserves, which is \\$9,000.",
    distractorTip: "A single bank creates loans equal to its EXCESS reserves (\\$9,000); the entire banking system can create loans up to excess reserves $\\times$ multiplier."
  },
  "macro-u4-l3": {
    id: "macro4-l3-q3",
    stem: "If the reserve requirement is 20% and a bank receives a fresh \\$5,000 cash deposit from outside the banking system, what is the maximum potential increase in the money supply for the entire banking system?",
    options: [
      "\\$100,000",
      "\\$5,000",
      "\\$1,000",
      "\\$20,000"
    ],
    correctIndex: 3,
    explanation: "Required reserves = 20% of \\$5,000 = \\$1,000. Initial excess reserves = \\$4,000. Simple money multiplier = $\\frac{1}{rr} = \\frac{1}{0.20} = 5$. Maximum potential expansion of checkable deposits from lending = Excess Reserves $\\times$ Multiplier = $\\$4,000 \\times 5 = \\$20,000$. (The initial \\$5,000 was already currency, so the net new money created is \\$20,000).",
    distractorTip: "Maximum money creation = Initial Excess Reserves $\\times$ Money Multiplier = $\\$4,000 \\times 5 = \\$20,000$."
  },
  "macro-u4-l4": {
    id: "macro4-l4-q3",
    stem: "In the money market, what will happen to the equilibrium nominal interest rate if the central bank sells government bonds on the open market?",
    options: [
      "The nominal interest rate will decrease as money supply expands.",
      "The nominal interest rate will increase because selling bonds drains bank reserves and shifts the money supply curve leftward.",
      "The nominal interest rate will remain constant because money demand is vertical.",
      "The nominal interest rate will drop to zero due to the liquidity trap."
    ],
    correctIndex: 1,
    explanation: "When the central bank sells government bonds, commercial banks buy them with reserves, reducing bank reserve balances and shifting the money supply ($MS$) curve to the left. Along a downward-sloping money demand curve, the shortage of money bids up the equilibrium nominal interest rate.",
    distractorTip: "Open market operations: Buying bonds = Bigger money supply (lower interest rates); Selling bonds = Smaller money supply (higher interest rates)."
  },
  "macro-u4-l5": {
    id: "macro4-l5-q3",
    stem: "In the Loanable Funds Market, which curve represents the demand for loanable funds and which price equilibrates this market?",
    options: [
      "The supply curve represents government borrowing; the price is the nominal interest rate.",
      "The demand curve represents consumer and business borrowing for investment; the price is the nominal exchange rate.",
      "The demand curve represents borrowers seeking funds for capital investment; the equilibrium price is the Real Interest Rate.",
      "The supply curve represents commercial bank reserve requirements; the price is the federal funds rate."
    ],
    correctIndex: 2,
    explanation: "In the loanable funds market, demand reflects borrowers (firms funding capital projects and governments financing deficits). Supply reflects private domestic savings and net capital inflows. The vertical axis and equilibrium price is the REAL interest rate (unlike the money market which determines the nominal interest rate).",
    distractorTip: "Money Market = Nominal Interest Rate; Loanable Funds Market = Real Interest Rate."
  },
  "macro-u4-l6": {
    id: "macro4-l6-q3",
    stem: "Under an ample-reserves monetary policy framework, what is the Federal Reserve's primary policy tool used to steer the federal funds rate?",
    options: [
      "The Interest on Reserve Balances (IORB) rate.",
      "Open market purchases of long-term corporate bonds.",
      "Adjusting mandatory legal reserve requirements on commercial banks.",
      "Directly setting price controls on consumer mortgage loans."
    ],
    correctIndex: 0,
    explanation: "In an ample-reserves regime, banks hold massive reserves, making the reserve supply curve flat (horizontal) at the administered rate. The Fed uses administered rates—primarily the Interest on Reserve Balances (IORB) rate—as a reservation rate to anchor and steer the federal funds rate without adjusting reserve quantities.",
    distractorTip: "In modern AP Macro: Under AMPLE reserves, the Fed uses IORB and the discount rate; under LIMITED reserves, it uses open market operations and reserve requirements."
  },
  "macro-u4-l7": {
    id: "macro4-l7-q3",
    stem: "If the Federal Reserve raises the Interest on Reserve Balances (IORB) rate, what is the transmission mechanism to market interest rates and Aggregate Demand?",
    options: [
      "Banks lend more to consumers, expanding money supply and raising investment spending.",
      "Banks demand fewer reserves, driving the federal funds rate down toward zero.",
      "The money multiplier doubles, shifting the aggregate supply curve rightward.",
      "Banks arbitrage by requiring higher rates on interbank loans, raising the federal funds rate, elevating borrowing costs, and dampening interest-sensitive investment and consumption."
    ],
    correctIndex: 3,
    explanation: "Because banks can earn the risk-free IORB rate directly at the Fed, they will not lend reserves in the federal funds market at any rate below IORB. Raising IORB shifts the federal funds rate upward, which ripples into higher mortgage, auto, and corporate loan rates, reducing investment ($I$) and consumption ($C$), shifting AD left.",
    distractorTip: "Higher IORB $\\implies$ Higher Policy Rate $\\implies$ Higher Market Interest Rates $\\implies$ Lower $I$ & $C$ $\\implies$ AD shifts left."
  },
  "macro-u4-l8": {
    id: "macro4-l8-q3",
    stem: "A commercial bank has \\$100 million in checkable deposits, \\$25 million in total reserves, and a required reserve ratio of 10%. How much in additional loans can this bank legally extend immediately?",
    options: [
      "\\$10 million",
      "\\$15 million",
      "\\$25 million",
      "\\$75 million"
    ],
    correctIndex: 1,
    explanation: "Required reserves = 10% of \\$100 million = \\$10 million. Excess reserves = Total Reserves - Required Reserves = \\$25 million - \\$10 million = \\$15 million. A single bank can immediately create loans equal to its excess reserves, which is \\$15 million.",
    distractorTip: "Lending capacity of a single bank = Excess Reserves = Total Reserves - Required Reserves."
  },

  // UNIT 5: Long-Run Consequences of Stabilization Policies
  "macro-u5-l1": {
    id: "macro5-l1-q3",
    stem: "An economy is in short-run equilibrium with an inflationary gap. If the central bank conducts contractionary monetary policy, what will be the effect on the nominal interest rate, Real GDP, and price level?",
    options: [
      "Interest rate decreases; Real GDP increases; price level increases.",
      "Interest rate increases; Real GDP increases; price level decreases.",
      "Interest rate increases; Real GDP decreases; price level decreases.",
      "Interest rate decreases; Real GDP decreases; price level decreases."
    ],
    correctIndex: 2,
    explanation: "Contractionary monetary policy (raising policy interest rates) increases the cost of borrowing. This reduces interest-sensitive investment ($I$) and consumption ($C$), shifting Aggregate Demand to the left. Real GDP falls back toward potential output and upward pressure on the price level subsides.",
    distractorTip: "Contractionary monetary policy: Interest rate $\\uparrow$, $I$ & $C$ $\\downarrow$, AD shifts left $\\implies$ Real GDP $\\downarrow$, Price Level $\\downarrow$."
  },
  "macro-u5-l2": {
    id: "macro5-l2-q3",
    stem: "Along a stable Short-Run Phillips Curve (SRPC), what short-run trade-off exists for policymakers using demand-side stabilization policies?",
    options: [
      "A trade-off between higher inflation and lower unemployment.",
      "A trade-off between economic growth and environmental preservation.",
      "A trade-off between government tax revenue and the national debt.",
      "A trade-off between real wages and nominal exchange rates."
    ],
    correctIndex: 0,
    explanation: "The SRPC illustrates an inverse relationship between inflation and unemployment in the short run. Policies that expand AD lower unemployment but generate higher inflation (moving upward-left along SRPC). Policies that contract AD lower inflation but raise unemployment (moving downward-right along SRPC).",
    distractorTip: "Movement along SRPC is caused by shifts in AGGREGATE DEMAND. Shifts of the SRPC are caused by shifts in AGGREGATE SUPPLY (supply shocks or expected inflation)."
  },
  "macro-u5-l3": {
    id: "macro5-l3-q3",
    stem: "What will cause the entire Short-Run Phillips Curve (SRPC) to shift outward and to the right?",
    options: [
      "A major technological breakthrough that reduces manufacturing costs across the economy.",
      "An increase in consumer confidence that expands aggregate demand.",
      "A reduction in expected inflation from 5% to 2%.",
      "A negative supply shock (such as a sudden spike in global crude oil prices) that increases production costs and expected inflation."
    ],
    correctIndex: 3,
    explanation: "A negative supply shock (cost-push inflation) shifts SRAS to the left, resulting in higher inflation and higher unemployment (stagflation). In the Phillips curve diagram, this is represented by an outward, rightward shift of the entire SRPC curve.",
    distractorTip: "SRAS shifts left $\\implies$ SRPC shifts right (worse trade-off: higher inflation AND higher unemployment at every point)."
  },
  "macro-u5-l4": {
    id: "macro5-l4-q3",
    stem: "What is the primary mechanism of the 'Crowding-Out Effect' resulting from government deficit spending?",
    options: [
      "Government spending eliminates private sector consumer goods through rationing.",
      "Government borrowing in the loanable funds market increases real interest rates, reducing private business capital investment.",
      "Higher taxes reduce corporate profits, forcing firms to shut down.",
      "Increased money supply creates hyperinflation that destroys paper currency."
    ],
    correctIndex: 1,
    explanation: "When government engages in deficit spending, it borrows by issuing Treasury bonds, increasing demand for loanable funds (or reducing national savings). This drives up real interest rates. Higher borrowing costs discourage private firms from purchasing capital equipment, 'crowding out' private investment and slowing capital accumulation.",
    distractorTip: "Crowding out chain of events: Deficit $\\implies$ Government borrows $\\implies$ Demand for loanable funds $\\uparrow$ $\\implies$ Real interest rate $\\uparrow$ $\\implies$ Private investment $\\downarrow$."
  },
  "macro-u5-l5": {
    id: "macro5-l5-q3",
    stem: "Which of the following public policies is most effective at promoting sustainable long-run economic growth (shifting LRAS and the PPC rightward)?",
    options: [
      "Increasing federal transfer payments to stimulate immediate consumer demand.",
      "Imposing import quotas on foreign capital goods to protect domestic steel producers.",
      "Investing in STEM education, workforce training, and public research and development infrastructure.",
      "Raising corporate tax rates to pay down the national debt immediately."
    ],
    correctIndex: 2,
    explanation: "Long-run economic growth is driven by increases in labor productivity and capital accumulation. Investments in education and training enhance human capital; investments in R&D and infrastructure improve technology and physical capital, permanently expanding the economy's productive capacity.",
    distractorTip: "Short-run stabilization shifts AD; long-run economic growth requires expanding productive capacity (human capital, physical capital, technology)."
  },
  "macro-u5-l6": {
    id: "macro5-l6-q3",
    stem: "According to the Quantity Theory of Money equation ($M \\times V = P \\times Y$), what happens in the long run if velocity ($V$) and real output ($Y$) are relatively constant and the central bank rapidly increases the money supply ($M$)?",
    options: [
      "The price level ($P$) increases proportionately, resulting in high inflation.",
      "Real GDP ($Y$) doubles while the price level remains unchanged.",
      "Velocity ($V$) increases exponentially to offset the money expansion.",
      "The natural rate of unemployment drops permanently to zero."
    ],
    correctIndex: 0,
    explanation: "In the equation of exchange $MV = PY$, if velocity of money ($V$) and real output ($Y$, anchored at potential output by factor endowments) are stable in the long run, percentage changes in the money supply translate directly into equal percentage increases in the price level: $\\%\\Delta M = \\%\\Delta P$. Rapid money creation causes inflation.",
    distractorTip: "The Quantity Theory of Money: In the long run, 'Inflation is always and everywhere a monetary phenomenon' ($M \\uparrow \\implies P \\uparrow$)."
  },
  "macro-u5-l7": {
    id: "macro5-l7-q3",
    stem: "How does persistent crowding out of private capital investment affect an economy's long-run aggregate supply curve over time?",
    options: [
      "LRAS will shift rightward at an accelerated pace due to government infrastructure.",
      "LRAS will shift leftward immediately due to currency depreciation.",
      "The slope of the LRAS curve will change from vertical to horizontal.",
      "The rate of growth of the capital stock slows, causing the LRAS curve to shift rightward more slowly than it otherwise would have."
    ],
    correctIndex: 3,
    explanation: "Crowding out reduces private business investment in new factories, machines, and tools. Because the capital stock grows more slowly (or fails to replace depreciated equipment), future labor productivity grows at a diminished rate, curtailing the long-run outward shift of LRAS and the PPC.",
    distractorTip: "Crowding out hurts long-run economic growth because lower private investment slows the accumulation of physical capital."
  },
  "macro-u5-l8": {
    id: "macro5-l8-q3",
    stem: "If the natural rate of unemployment is 4.5% and the actual unemployment rate is 6.5%, what is the cyclical unemployment rate and what type of fiscal policy is appropriate?",
    options: [
      "Cyclical unemployment is -2.0%; contractionary fiscal policy is appropriate.",
      "Cyclical unemployment is 2.0%; expansionary fiscal policy (increasing $G$ or cutting taxes) is appropriate.",
      "Cyclical unemployment is 11.0%; supply-side deregulation is required.",
      "Cyclical unemployment is 0%; no policy action is needed."
    ],
    correctIndex: 1,
    explanation: "Actual unemployment = Natural rate + Cyclical rate $\\implies 6.5\\% = 4.5\\% + \\text{Cyclical} \\implies \\text{Cyclical rate} = 2.0\\%$. Because cyclical unemployment is positive, the economy is in a recessionary gap ($Y < Y_f$). Expansionary fiscal policy (increasing government spending or reducing taxes) will shift AD right to close the gap.",
    distractorTip: "Cyclical unemployment = Actual rate - Natural rate = $6.5\\% - 4.5\\% = 2.0\\%$. Positive cyclical unemployment indicates a recessionary gap."
  },

  // UNIT 6: Open Economy—International Trade and Finance
  "macro-u6-l1": {
    id: "macro6-l1-q3",
    stem: "A US citizen purchases shares of stock in a Japanese robotics corporation, and a German tourist pays for a hotel room in New York City. How are these two transactions recorded in the US Balance of Payments?",
    options: [
      "Stock purchase in Current Account; Hotel stay in Financial Account.",
      "Both transactions are recorded exclusively in the Capital Account.",
      "Stock purchase in Financial Account; Hotel stay in Current Account (export of services).",
      "Neither transaction is counted because international currencies were exchanged."
    ],
    correctIndex: 2,
    explanation: "Purchasing foreign financial assets (shares of stock) is recorded in the Financial (Capital) Account as a capital outflow. Providing tourism hospitality services to a foreign visitor is an export of services and is recorded in the Current Account as a credit (inflow of funds).",
    distractorTip: "Current account = Goods, services, net investment income, and unilateral transfers. Financial account = Purchase/sale of financial and real assets."
  },
  "macro-u6-l2": {
    id: "macro6-l2-q3",
    stem: "In the foreign exchange market for Mexican Pesos against US Dollars, what will happen if US consumers develop a strong preference for Mexican avocado imports?",
    options: [
      "Demand for pesos will increase, and the Mexican Peso will appreciate against the US Dollar.",
      "Supply of pesos will increase, and the Mexican Peso will depreciate.",
      "Demand for dollars will increase in Mexico.",
      "Both currencies will depreciate simultaneously."
    ],
    correctIndex: 0,
    explanation: "To buy more Mexican avocados, US importers must convert US dollars into Mexican pesos. In the FOREX market, this increases the demand for pesos (shifts demand right) and increases the supply of dollars (shifts supply right). As a result, the Mexican peso appreciates (takes more dollars to buy 1 peso).",
    distractorTip: "When US consumers want to buy foreign goods, they demand foreign currency (appreciating it) and supply US dollars (depreciating it)."
  },
  "macro-u6-l3": {
    id: "macro6-l3-q3",
    stem: "If the real interest rate in the United States rises significantly relative to real interest rates in the European Union, what will happen to international financial capital flows and the value of the US dollar?",
    options: [
      "Financial capital will flow out of the US, depreciating the dollar.",
      "European investors will buy fewer US assets, leaving the exchange rate unchanged.",
      "US investors will send capital to Europe seeking higher bond yields.",
      "Financial capital will flow into the US seeking higher returns, increasing demand for dollars and causing the dollar to appreciate."
    ],
    correctIndex: 3,
    explanation: "Global financial capital seeks the highest risk-adjusted real return. When US real interest rates rise relative to foreign rates, international investors purchase US bonds and assets. This requires exchanging euros for dollars, increasing demand for dollars, appreciating the US dollar in the FOREX market.",
    distractorTip: "Higher relative real interest rates $\\implies$ Financial capital inflows $\\implies$ Demand for domestic currency $\\uparrow$ $\\implies$ Currency appreciates."
  },
  "macro-u6-l4": {
    id: "macro6-l4-q3",
    stem: "When the US dollar appreciates significantly against major world currencies, what is the net impact on US exports, US imports, and US Aggregate Demand?",
    options: [
      "Exports become cheaper, imports become more expensive, and AD shifts right.",
      "Exports become more expensive for foreigners, imports become cheaper for US consumers, Net Exports decline, and AD shifts left.",
      "Both exports and imports increase equally, leaving AD unchanged.",
      "Domestic price level increases immediately due to cost-push inflation."
    ],
    correctIndex: 1,
    explanation: "An appreciated dollar makes US exports more expensive abroad (reducing export volume) and makes foreign imports cheaper for Americans (increasing import volume). Net exports ($X_n = \\text{Exports} - \\text{Imports}$) decline, which reduces Aggregate Demand ($AD = C + I + G + X_n$) and shifts the AD curve to the left.",
    distractorTip: "Appreciated currency $\\implies$ Exports $\\downarrow$, Imports $\\uparrow$ $\\implies$ Net Exports ($X_n$) $\\downarrow$ $\\implies$ AD shifts left."
  },
  "macro-u6-l5": {
    id: "macro6-l5-q3",
    stem: "Under a flexible floating exchange rate system, what mathematical relationship must hold between a nation's Current Account ($CA$) and its Financial Account ($FA$)?",
    options: [
      "Current Account must strictly equal Financial Account ($CA = FA$).",
      "Both accounts must maintain positive surpluses simultaneously.",
      "Current Account plus Financial Account must balance to zero ($CA + FA = 0$), so a deficit in one is offset by a surplus in the other.",
      "The Financial Account must equal zero in long-run trade equilibrium."
    ],
    correctIndex: 2,
    explanation: "In the balance of payments, every transaction involves a trade in goods/services or assets. If a country runs a Current Account deficit (importing more goods/services than it exports), it must finance this gap by selling domestic financial assets or borrowing abroad, creating an offsetting Financial Account surplus ($CA + FA = 0$).",
    distractorTip: "Balance of Payments identity: Current Account + Financial Account = 0. A trade deficit ($CA < 0$) requires a capital inflow ($FA > 0$)."
  },
  "macro-u6-l6": {
    id: "macro6-l6-q3",
    stem: "If the domestic price level in Country X increases by 20% while the price level in Country Y remains stable, what will happen to the exchange rate of Country X's currency according to Purchasing Power Parity (PPP)?",
    options: [
      "Country X's currency will appreciate by 20% to reflect higher domestic costs.",
      "Country X's currency will depreciate against Country Y's currency to restore purchasing power equilibrium.",
      "Country Y's central bank will be forced to devalue its currency.",
      "The nominal exchange rate will remain fixed by international monetary treaties."
    ],
    correctIndex: 1,
    explanation: "Purchasing Power Parity implies that exchange rates adjust to equalize the purchasing power of different currencies. If Country X experiences 20% inflation, its goods become relatively expensive. Foreigners demand less of X's goods, while residents of X buy more imports from Y, causing Country X's currency to depreciate until purchasing parity is restored.",
    distractorTip: "Higher relative inflation depreciates a country's currency in the foreign exchange market."
  },
  "macro-u6-l7": {
    id: "macro6-l7-q3",
    stem: "How does an expansionary fiscal policy (deficit spending financed by government borrowing) affect the open economy through the international exchange rate transmission mechanism?",
    options: [
      "Government borrowing drives down interest rates, leading to currency appreciation and higher exports.",
      "Government borrowing increases domestic real interest rates, attracting foreign financial capital, appreciating the domestic currency, and reducing net exports (reinforcing crowding out).",
      "Government borrowing eliminates foreign exchange reserves held by the central bank.",
      "Domestic currency depreciates, causing net exports to expand and completely eliminate the deficit."
    ],
    correctIndex: 1,
    explanation: "Deficit spending increases government borrowing, driving up domestic real interest rates. Higher interest rates attract foreign financial capital seeking yield, increasing demand for domestic currency and causing it to appreciate. The stronger currency makes exports more expensive and imports cheaper, reducing net exports and partially offsetting the expansionary fiscal stimulus.",
    distractorTip: "Open-economy crowding out: Deficit $\\implies$ Real Interest Rate $\\uparrow$ $\\implies$ Capital inflows $\\implies$ Currency appreciates $\\implies$ Net Exports $\\downarrow$."
  },
  "macro-u6-l8": {
    id: "macro6-l8-q3",
    stem: "Suppose 1 US Dollar currently trades for 0.80 Euros. If the exchange rate changes to 1 US Dollar = 0.90 Euros, what has occurred to the currencies?",
    options: [
      "The US Dollar has depreciated against the Euro, and the Euro has appreciated against the Dollar.",
      "The US Dollar has appreciated against the Euro, and the Euro has depreciated against the Dollar.",
      "Both currencies have depreciated against gold reserves.",
      "The purchasing power of the Euro has increased by 10% in the United States."
    ],
    correctIndex: 1,
    explanation: "Previously, \\$1 bought 0.80 euros; now \\$1 buys 0.90 euros. Because each dollar now buys more euros, the US dollar has appreciated. Conversely, it now takes more euros to purchase 1 dollar (from $1/0.80 = 1.25$ euros down to $1/0.90 = 1.11$ dollars per euro), so the euro has depreciated.",
    distractorTip: "If \\$1 buys more units of foreign currency, the dollar has APPRECIATED and the foreign currency has DEPRECIATED."
  }
};

const fullPath = path.resolve(__dirname, '../src/data/quiz/apMacroeconomicsUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_MACROECONOMICS_UNIT_DEFINITIONS;

let addedCount = 0;
units.forEach(u => {
  u.levels.forEach(l => {
    if (q3Data[l.uniqueKey]) {
      if (l.questions.length === 2) {
        l.questions.push(q3Data[l.uniqueKey]);
        addedCount++;
      }
    } else {
      console.warn('Missing q3 for', l.uniqueKey);
    }
  });
});

console.log('Added', addedCount, 'questions to AP Macroeconomics.');

const newCode = `// AP Macroeconomics Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–6)
// Complete authentic coverage: 48 Levels, 144 Questions (8 Levels per Unit, 3 Questions per Level).
// Perfectly balanced option distribution across A, B, C, D (36 each).

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_MACROECONOMICS_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apMacroeconomicsUnitsData.ts successfully.');
