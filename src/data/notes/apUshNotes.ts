import { APUnitNote } from './types';

export const AP_USH_NOTES: APUnitNote[] = [
  // ==========================================
  // PERIOD 1 (1491–1607): EARLY CONTACT & COLUMBIAN EXCHANGE
  // ==========================================
  {
    unitId: 'p1',
    unitNumber: 1,
    title: 'Period 1 (1491–1607): Early Contact & Columbian Exchange',
    examWeight: '4%–6% of AP Exam',
    bigIdea: 'Native societies adapted to diverse North American environments before European contact. The Columbian Exchange transformed demographic, ecological, and economic structures across the Atlantic.',
    keyTheorems: [
      {
        name: 'The Columbian Exchange Ecological Shift',
        conditions: 'Transatlantic transfer of plants, animals, culture, populations, and communicable diseases following 1492.',
        conclusion: 'Old World to New World: Horses, cattle, sugar, wheat, and devastating pathogens (smallpox, measles) decimating up to $90\\%$ of indigenous populations. New World to Old World: Nutrient-dense crops (potatoes, maize, tomatoes, cassava) driving European and Asian population explosions; gold and silver fueling capitalism.',
        apTip: 'Columbian Exchange is the most frequently tested topic in Period 1! Always specify both directions: Epidemics devastated the Americas, while calorie-dense crops triggered population booms in Europe.'
      },
      {
        name: 'The Spanish Encomienda & Caste (Casta) System',
        conditions: 'Spanish colonial socio-economic organization in the Americas.',
        conclusion: 'Encomienda system: Spanish crown granted conquistadors legal rights to extract forced labor and tribute from indigenous populations in exchange for Christianization. Casta system: Strict racial hierarchy determined by birth (Peninsulares $\\rightarrow$ Creoles $\\rightarrow$ Mestizos $\\rightarrow$ Mulattoes $\\rightarrow$ Native Americans $\\rightarrow$ Enslaved Africans).',
        apTip: 'Bartolomé de las Casas argued against the brutal treatment of Native Americans, sparking the 1550 Valladolid Debate against Juan Ginés de Sepúlveda.'
      }
    ],
    formulas: [
      {
        name: 'APUSH HIPP Document Analysis Framework',
        latex: '\\text{HIPP} = \\text{Historical Context} + \\text{Intended Audience} + \\text{Purpose} + \\text{Point of View}',
        explanation: 'Required to earn the sourcing point on Document-Based Questions (DBQs).'
      }
    ],
    sections: [
      {
        heading: '1. Pre-Columbian Native American Regional Adaptations',
        content: `How indigenous societies adapted complex cultures to regional environments:

| Region | Environmental Conditions | Primary Economic Subsistence | Representative Societies |
| :--- | :--- | :--- | :--- |
| **Southwest** | Arid desert, canyon basins | Sedentary agriculture based on maize; sophisticated adobe cliff dwellings and complex irrigation canals | Pueblo, Anasazi, Hopi |
| **Great Plains & Basin** | Vast arid grasslands, sparse water | Nomadic hunter-gatherers tracking American bison (buffalo) herds; portable tepees | Lakota Sioux, Comanche, Apache |
| **Mississippi Valley & East** | Fertile river valleys, humid deciduous forests | Mixed agricultural "Three Sisters" (corn, beans, squash); permanent villages; monumental earthen burial mounds | Cahokia (Mississippian mound builders), Cherokee |
| **Pacific Northwest** | Temperate rainforests, coastal marine | Abundant salmon fishing, whaling, ocean foraging; permanent cedar plank longhouses and carved totem poles | Chinook, Tlingit |`
      }
    ],
    workedExamples: [
      {
        title: 'Evaluating the Impact of the Columbian Exchange (SAQ)',
        topicRef: 'CED 1.2 The Columbian Exchange',
        question: '(a) Briefly describe ONE specific environmental impact of the Columbian Exchange on the Americas. (b) Briefly describe ONE specific demographic impact on Europe. (c) Briefly explain ONE way indigenous peoples resisted European subjugation.',
        solutionSteps: [
          'Step 1: Address prompt (a) - Environmental impact on Americas: The introduction of European domesticated livestock, specifically horses and pigs. Horses revolutionized Great Plains hunting and warfare, while feral pigs rooted up native crops and disrupted indigenous foraging grounds.',
          'Step 2: Address prompt (b) - Demographic impact on Europe: The introduction of American calorie-dense crops, particularly the potato and maize (corn). These hardy staple crops significantly increased nutritional intake, resulting in substantial European population growth and urbanization.',
          'Step 3: Address prompt (c) - Indigenous resistance: Mention military resistance such as the Pueblo Revolt (Popé’s Rebellion) in 1680, or cultural resistance through the blending of Christian rituals with traditional animist beliefs (syncretism).'
        ],
        finalAnswer: '(a) Horses transformed Plains mobility while free-ranging pigs degraded native ecosystems; (b) Potatoes and corn spurred European population expansion; (c) The 1680 Pueblo Revolt successfully expelled Spanish colonists from New Mexico for over a decade.',
        apScoringTip: 'Always follow the A.C.E. method for Short Answer Questions: **A**nswer the prompt directly, **C**ite specific historical evidence, and **E**xplain how the evidence proves your claim.'
      }
    ],
    diagrams: [
      {
        id: 'ush_columbian_exchange',
        title: 'The Columbian Exchange Atlantic Flow',
        subtitle: 'Biological, Agricultural, and Pathogenic Transatlantic Transfers',
        type: 'columbian_exchange_map',
        description: 'Atlantic map diagram showing exchange arrows: Smallpox, measles, horses, and sugarcane moving west to Americas; Corn, potatoes, tobacco, and syphilis moving east to Europe.',
        takeaway: 'The introduction of American staple crops triggered European population booms, while Old World diseases decimated up to 90% of indigenous populations.'
      }
    ],
    commonTraps: [
      'Portraying Native Americans as a single homogeneous culture before 1492. Indigenous North America consisted of hundreds of distinct languages, religions, and governance structures.',
      'Assuming horses were native to North America. Horses were introduced by Spanish explorers in the 16th century.',
      'Overlooking the African slave trade transition. As indigenous populations were devastated by disease, Europeans pivoted to the chattel enslavement of West Africans to meet colonial plantation labor demands.'
    ],
    cramSheet: [
      'Maize cultivation supported dense, sedentary Southwestern and Mississippian civilizations (Cahokia).',
      'Columbian Exchange: Disease (smallpox) wiped out ~90% of native populations; Potatoes/corn fueled European population growth.',
      'Encomienda system: Spanish forced labor system, later replaced by enslaved African labor.',
      'Pueblo Revolt (1680): Successful indigenous revolt against Spanish religious persecution; Spanish returned with greater cultural accommodation.'
    ]
  },

  // ==========================================
  // PERIOD 2 (1607–1754): COLONIAL NORTH AMERICA & MERCANTILISM
  // ==========================================
  {
    unitId: 'p2',
    unitNumber: 2,
    title: 'Period 2 (1607–1754): Colonization & Mercantilism',
    examWeight: '6%–8% of AP Exam',
    bigIdea: 'European powers developed distinct colonial models based on economic goals. British North American colonies evolved regional economies, labor systems, and self-governing institutions under salutary neglect.',
    keyTheorems: [
      {
        name: 'The Mercantilist System and Navigation Acts',
        conditions: 'British imperial economic policy governing Atlantic colonial commerce.',
        conclusion: 'Mercantilism held that national power depended on accumulating bullion (gold/silver) via a favorable balance of trade. Colonies existed solely to supply cheap raw materials (tobacco, sugar, timber) to the mother country and purchase manufactured British goods, enforced by the Navigation Acts.',
        apTip: 'During "Salutary Neglect" (1688–1754), Britain largely ignored strict enforcement of the Navigation Acts, allowing the American colonies to develop independent commercial networks and autonomous democratic traditions.'
      },
      {
        name: 'Bacon’s Rebellion & The Transition to Chattel Slavery',
        conditions: '1676 Virginia frontier uprising led by Nathaniel Bacon against Governor Berkeley.',
        conclusion: 'Frustrated former indentured servants clashed with coastal planter elites over frontier land and Indian policy. Planter elites recognized that poor white indentured servants posed a permanent threat of violent insurrection, triggering the rapid transition to hereditary race-based African chattel slavery as the primary plantation labor force.',
        apTip: 'Bacon’s Rebellion is the turning point for colonial labor: Indentured servitude declined rapidly, and Virginia slave codes formalized race-based hereditary chattel slavery!'
      }
    ],
    formulas: [
      {
        name: 'Triangular Trade Circulation',
        latex: '\\text{British Manufactured Goods} \\rightarrow \\text{West Africa} \\xrightarrow{\\text{Middle Passage}} \\text{Enslaved Africans to Americas} \\rightarrow \\text{Raw Materials to Europe}',
        explanation: 'Interconnected Atlantic mercantile trade circuit.'
      }
    ],
    sections: [
      {
        heading: '1. The 3 Distinct British Colonial Regions Matrix',
        content: `Master the contrasting regional characteristics of the Thirteen Colonies:

| Colonial Region | Geography & Climate | Primary Economic Drivers | Dominant Social & Religious Structure | Governance & Labor Systems |
| :--- | :--- | :--- | :--- | :--- |
| **New England** (MA, NH, CT, RI) | Rocky soil, harsh cold winters, short growing season | Subsistence farming, shipbuilding, timber, commercial fishing, Atlantic maritime trade | Puritan / Congregationalist religious conformity; close-knit town settlements centered on meetinghouses | Direct democracy via **Town Hall Meetings**; family labor; high literacy for Bible reading |
| **Middle Colonies** (NY, PA, NJ, DE) | Temperate climate, fertile broad river valleys | "Breadbasket" wheat, rye, and barley farming; flourishing port commerce in NYC and Philadelphia | High ethnic and religious diversity; William Penn’s **Quaker** "Holy Experiment" practicing religious tolerance | Representative colonial assemblies; indentured servants and tenant farmers |
| **Southern & Chesapeake** (VA, MD, NC, SC, GA) | Rich fertile soils, long warm growing season, swampy tidewater | Cash-crop agriculture: Chesapeake grew **Tobacco**; Deep South grew **Rice and Indigo** | Dispersed rural plantations; aristocratic planter oligarchy; Anglican Church dominance | **Virginia House of Burgesses** (1619); massive reliance on enslaved African chattel labor |`
      }
    ],
    workedExamples: [
      {
        title: 'Comparative Colonization Models (French vs. British)',
        topicRef: 'CED 2.2 European Colonization',
        question: 'Compare the economic goals and interactions with indigenous peoples between the French and British colonial models in 17th-century North America.',
        solutionSteps: [
          'Step 1: Analyze French colonial model: Economic goal was primarily the lucrative **Fur Trade** (beaver pelts). Because few French settlers immigrated (mostly single young men and Jesuit missionaries), they established cooperative alliances and intermarried with indigenous tribes (e.g. Huron, Algonquin).',
          'Step 2: Analyze British colonial model: Economic goal was land acquisition for agricultural settlement (tobacco, cash crops) and family colonies. British arrived in large family groups, demanding permanent land ownership.',
          'Step 3: Compare indigenous relations: The French cultivated trade partnerships and mutual military alliances, while the British engaged in violent conflict (e.g. King Philip’s War, Powhatan Wars) to expel or displace native tribes from agricultural lands.'
        ],
        finalAnswer: 'France focused on the fur trade with few settlers, fostering alliances and intermarriage with Native Americans; Britain sent large family settlements to acquire land for agriculture, driving violent displacement of native populations.',
        apScoringTip: 'Focus on motivations: Trade vs. Land. This fundamental distinction explains why indigenous relations differed so dramatically between European powers.'
      }
    ],
    diagrams: [
      {
        id: 'ush_triangular_trade',
        title: 'The Atlantic Triangular Trade and Middle Passage',
        subtitle: 'Manufactured Goods $\\rightarrow$ Enslaved Africans $\\rightarrow$ Sugar and Tobacco',
        type: 'triangular_trade_map',
        description: 'Atlantic circuit map showing guns/textiles shipped from Britain to West Africa, the horrific Middle Passage transporting enslaved Africans to Caribbean/Americas, and raw sugar/tobacco shipped back to Britain.',
        takeaway: 'The Atlantic mercantilist economy linked Europe, Africa, and the Americas in an exploitative trade network anchored by chattel slavery.'
      }
    ],
    commonTraps: [
      'Assuming the Puritans championed universal religious freedom. Puritans settled New England seeking freedom for THEMSELVES, but banishing religious dissenters like Roger Williams (Rhode Island) and Anne Hutchinson.',
      'Claiming slavery was exclusive to the South. Chattel slavery existed in all 13 colonies, though it became the foundational economic engine primarily in the plantation South.',
      'Forgetting the First Great Awakening (1730s–1740s). Revivalist preachers like George Whitefield and Jonathan Edwards fostered emotional personal faith, challenging traditional religious authority and uniting colonies across regional boundaries.'
    ],
    cramSheet: [
      'Salutary Neglect: Britain left colonies alone to govern themselves until 1763.',
      'House of Burgesses (1619) & Mayflower Compact (1620) established early representative democracy.',
      'Bacon’s Rebellion (1676) accelerated the transition from indentured servitude to African chattel slavery.',
      'First Great Awakening promoted religious pluralism and questioned traditional clerical authority.'
    ]
  },

  // ==========================================
  // PERIOD 3 (1754–1800): REVOLUTION & THE CONSTITUTION
  // ==========================================
  {
    unitId: 'p3',
    unitNumber: 3,
    title: 'Period 3 (1754–1800): Revolution & The Early Republic',
    examWeight: '10%–17% of AP Exam',
    bigIdea: 'The French and Indian War ended salutary neglect, sparking colonial resistance to taxation without representation. The American Revolution yielded a new republic governed by the Constitution.',
    keyTheorems: [
      {
        name: 'The 1763 Imperial Turning Point',
        conditions: 'The conclusion of the French and Indian War (Seven Years’ War) via the Treaty of Paris (1763).',
        conclusion: 'Britain expelled France from North America but was saddled with massive war debt. King George III and Parliament abandoned "Salutary Neglect," issuing the Proclamation of 1763 (forbidding settlement west of the Appalachians) and levying direct taxes (Stamp Act 1765, Townshend Acts) without colonial parliamentary representation.',
        apTip: '1763 is one of the most critical turning-point dates in American history! Before 1763: Salutary neglect and self-rule. After 1763: British taxation, enforcement, and escalating colonial revolt.'
      },
      {
        name: 'The Constitutional Compromises (1787)',
        conditions: 'The Philadelphia Constitutional Convention replacing the weak Articles of Confederation.',
        conclusion: '(1) Great Compromise (Connecticut): Bicameral legislature with House based on population and Senate with equal state representation (2 senators); (2) Three-Fifths Compromise: Enslaved persons counted as 3/5 of a person for legislative apportionment and federal taxation; (3) Bill of Rights: First 10 Amendments guaranteeing individual liberties added to appease Anti-Federalists.',
        apTip: 'Federalists (Hamilton, Madison, Jay) supported ratification via the Federalist Papers; Anti-Federalists feared a distant tyrannical executive and demanded the Bill of Rights.'
      }
    ],
    formulas: [
      {
        name: 'Constitutional Separation of Powers',
        latex: '\\text{Legislative (Article I)} \\iff \\text{Executive (Article II)} \\iff \\text{Judicial (Article III)}',
        explanation: 'Three co-equal federal branches balancing power through institutional checks and balances.'
      }
    ],
    sections: [
      {
        heading: '1. Articles of Confederation vs. US Constitution Comparison',
        content: `Why the Articles of Confederation failed and how the Constitution rectified its weaknesses:

| Feature | Articles of Confederation (1781–1789) | United States Constitution (1789–Present) |
| :--- | :--- | :--- |
| **Federal Sovereignty** | Extremely weak central government; states held ultimate sovereignty | National supremacy via the **Supremacy Clause** (Article VI) |
| **Taxation Power** | Congress could NOT levy taxes; could only request voluntary funds | Congress possesses direct power to levy and collect taxes (Article I, Sec 8) |
| **Executive Branch** | **NO Chief Executive** (no President to enforce laws) | Strong President with veto power and commander-in-chief authority |
| **Judicial Branch** | **NO Federal Court System** | Supreme Court and federal court system created to resolve interstate disputes |
| **Commerce Regulation** | Congress could NOT regulate interstate commerce (states had tariffs) | **Commerce Clause**: Federal government regulates interstate and foreign trade |
| **Catalyst for Change** | **Shays’ Rebellion (1786)**: Mass farmers revolt exposed federal impotence | Constitutional Convention called to establish a more stable union |`
      }
    ],
    workedExamples: [
      {
        title: 'Evaluating Sourcing and Point of View (DBQ Analysis)',
        topicRef: 'CED 3.4 Common Sense & Revolutionary Ideology',
        question: 'Analyze the historical situation and intended audience of Thomas Paine’s pamphlet *Common Sense* (January 1776).',
        solutionSteps: [
          'Step 1: Identify historical situation: In early 1776, the Revolutionary War was underway (Lexington & Concord, Bunker Hill), but most colonists still viewed themselves as British subjects seeking reconciliation with King George III.',
          'Step 2: Identify intended audience: The broad colonial public and common citizens, written in accessible, persuasive prose without Latin or dense legal jargon.',
          'Step 3: Analyze purpose: To persuade ordinary colonists that complete independence was not just necessary, but common sense, arguing that an island (Britain) should not rule a continent, and denouncing hereditary monarchy as unnatural tyranny.',
          'Step 4: Connect to historical significance: *Common Sense* fundamentally shifted public opinion away from reconciliation toward declaring full independence in July 1776.'
        ],
        finalAnswer: 'Paine wrote *Common Sense* to convince common colonists that reconciliation with the British Crown was impossible, mobilizing public support for the Declaration of Independence.',
        apScoringTip: 'When sourcing a document on the DBQ, explain WHY the author’s perspective or historical situation matters for interpreting the document.'
      }
    ],
    diagrams: [
      {
        id: 'ush_checks_balances',
        title: 'Constitutional Separation of Powers and Checks',
        subtitle: 'Legislative $\\iff$ Executive $\\iff$ Judicial Interlocking Powers',
        type: 'checks_and_balances',
        description: 'Triangular diagram showing Congress passing laws/overriding vetoes, President vetoing bills/appointing judges, and Supreme Court striking down unconstitutional acts via judicial review.',
        takeaway: 'Separation of powers and checks and balances prevent any single government branch from usurping tyrannical authority.'
      }
    ],
    commonTraps: [
      'Assuming the Constitution eliminated slavery. The Constitution protected the institution of slavery via the 3/5ths clause, the Fugitive Slave Clause, and a 20-year ban on outlawing the Atlantic slave trade until 1808.',
      'Thinking George Washington was an avid party leader. Washington loathed political parties, warning against factions and foreign entangling alliances in his famous 1796 Farewell Address.',
      'Confusing the Declaration of Independence with the Constitution. The Declaration (1776) justified separation from Britain using John Locke’s natural rights; the Constitution (1787) created the legal structure of the federal government.'
    ],
    cramSheet: [
      '1763: End of French and Indian War, end of Salutary Neglect, Proclamation of 1763.',
      'Stamp Act (1765): First direct internal tax, sparking "No taxation without representation!"',
      'Shays’ Rebellion (1786) proved the Articles of Confederation were too weak.',
      'Alexander Hamilton’s Financial Plan: National Bank (BUS), federal assumption of state debts, protective tariff.',
      'Washington’s Farewell Address (1796): Warned against political parties and permanent foreign alliances.'
    ]
  },

  // ==========================================
  // PERIOD 4 (1800–1848): DEMOCRACY, MARKET REVOLUTION & REFORM
  // ==========================================
  {
    unitId: 'p4',
    unitNumber: 4,
    title: 'Period 4 (1800–1848): Democratization, Market Revolution & Reform',
    examWeight: '10%–17% of AP Exam',
    bigIdea: 'The expansion of democratic suffrage coincided with the Market Revolution. Social reform movements emerged from the Second Great Awakening as sectional tensions deepened.',
    keyTheorems: [
      {
        name: 'The Market Revolution Economic Transformation',
        conditions: 'Antebellum transportation and industrial boom connecting regional economies.',
        conclusion: 'Innovations in transportation (canals, steamboats, railroads) and communication (telegraph) linked western agricultural grain farms to eastern industrial manufacturing centers, shifting the US economy from local agrarian subsistence to specialized commercial market capitalism.',
        apTip: 'The Market Revolution altered gender roles: The "Cult of Domesticity" emerged, designating the public sphere of paid work for men and the private moral home sphere for women.'
      },
      {
        name: 'Jacksonian Democracy and the Second Party System',
        conditions: 'Expansion of universal white male suffrage eliminating property qualifications.',
        conclusion: 'Andrew Jackson championed the "common man," establishing the Democratic Party against Henry Clay’s Whig Party. Jackson expanded presidential authority through aggressive use of the veto, patronage (spoils system), and dismantling the Second Bank of the United States.',
        apTip: 'Contradiction of Jacksonian Democracy: While expanding suffrage for common white men, Jackson violently dispossessed Native Americans (Indian Removal Act of 1830 and the Trail of Tears).'
      }
    ],
    formulas: [
      {
        name: 'Henry Clay’s American System',
        latex: '\\text{American System} = \\text{Protective Tariffs} + \\text{National Bank (BUS)} + \\text{Federally Funded Internal Improvements}',
        explanation: 'Whig economic blueprint to link northern factories with southern and western agriculture.'
      }
    ],
    sections: [
      {
        heading: '1. Antebellum Social Reform Movements from the 2nd Great Awakening',
        content: `How religious revivalism inspired major 19th-century moral crusades:

- **Abolitionism**: Demanded immediate emancipation of enslaved people without compensation.
  - *William Lloyd Garrison*: Published *The Liberator*, founded American Anti-Slavery Society.
  - *Frederick Douglass*: Escaped slavery, published *The North Star*, delivered powerful oratorical condemnations of American hypocrisy.
- **Women’s Rights & Suffrage**:
  - **Seneca Falls Convention (1848)**: Elizabeth Cady Stanton and Lucretia Mott authored the *Declaration of Sentiments*, echoing the Declaration of Independence: "All men AND WOMEN are created equal." Demanded female voting rights.
- **Temperance**: Movement to ban alcohol to reduce domestic violence and worker unreliability.
- **Asylum & Prison Reform**: Dorothea Dix documented horrific abuse of the mentally ill, lobbying for state mental hospitals.`
      }
    ],
    workedExamples: [
      {
        title: 'Analyzing the Missouri Compromise of 1820',
        topicRef: 'CED 4.8 Sectional Conflict & Missouri Compromise',
        question: 'Explain how the Missouri Compromise of 1820 attempted to resolve sectional conflict over the expansion of slavery, and identify its long-term consequence.',
        solutionSteps: [
          'Step 1: Identify context: In 1819, Missouri applied for statehood as a slave state, threatening to upset the equal balance of 11 free and 11 slave states in the Senate.',
          'Step 2: State terms of the compromise (Henry Clay): (1) Missouri admitted as a slave state; (2) Maine carved out of Massachusetts and admitted as a free state, maintaining the 12-12 balance; (3) Slavery prohibited in the remaining Louisiana Territory north of latitude $36^\\circ 30\'\\text{ N}$.',
          'Step 3: Long-term consequence: The compromise temporarily eased sectional tensions, but Thomas Jefferson famously warned it was a "fire bell in the night" that foreshadowed the eventual bloody division of the Union.',
          'Step 4: It was later repealed by the Kansas-Nebraska Act of 1854 and declared unconstitutional by the *Dred Scott* decision in 1857.'
        ],
        finalAnswer: 'The Missouri Compromise admitted Missouri as slave, Maine as free, and drew the $36^\\circ 30\'$ line banning slavery north of it; it temporarily preserved legislative balance but failed to permanently settle the slavery expansion question.',
        apScoringTip: 'Remember all three components of the 1820 compromise: Missouri (slave), Maine (free), and the $36^\\circ 30\'$ boundary line.'
      }
    ],
    diagrams: [
      {
        id: 'ush_missouri_compromise',
        title: 'The Missouri Compromise Line of 1820',
        subtitle: 'Preserving Senate Balance with the $36^\\circ 30\'$ Parallel',
        type: 'missouri_compromise_map',
        description: 'Map showing free states in North, slave states in South, and the $36^\\circ 30\'$ parallel line cutting across the Louisiana Purchase prohibiting slavery north of the line.',
        takeaway: 'Preserving the equal numerical balance between free and slave states in the US Senate was the primary goal of antebellum political compromises.'
      }
    ],
    commonTraps: [
      'Assuming all abolitionists advocated violent rebellion. Most (like Garrison and Douglass) advocated moral suasion; only a few radicals like John Brown advocated armed insurrection.',
      'Confusing the First and Second Great Awakenings. First (1730s): Personal salvation before the Revolution. Second (1820s–1830s): Perfectionism that sparked social reform crusades (abolition, temperance, women’s rights).',
      'Thinking the Monroe Doctrine (1823) gave the US authority to colonize Latin America. The doctrine warned European powers against NEW colonization in the Western Hemisphere; the US did not claim annexation rights until the Roosevelt Corollary in 1904.'
    ],
    cramSheet: [
      'Market Revolution: Canals, steamboats, railroads, telegraph linked regional economies.',
      'McCulloch v. Maryland (1819): Affirmed implied federal powers (BUS is constitutional; states cannot tax federal entities).',
      'Missouri Compromise (1820): Missouri (slave), Maine (free), $36^\\circ 30\'$ parallel divides future territories.',
      'Nullification Crisis (1832): South Carolina rejected federal tariffs; Jackson threatened military force to preserve Union supremacy.',
      'Seneca Falls (1848): Declaration of Sentiments demanded female suffrage.'
    ]
  },

  // ==========================================
  // PERIOD 5 (1844–1877): MANIFEST DESTINY, CIVIL WAR & RECONSTRUCTION
  // ==========================================
  {
    unitId: 'p5',
    unitNumber: 5,
    title: 'Period 5 (1844–1877): Manifest Destiny, Civil War & Reconstruction',
    examWeight: '10%–17% of AP Exam',
    bigIdea: 'Ideologies of Manifest Destiny spurred territorial expansion that ignited toxic debates over slavery. The Civil War preserved the Union, and Reconstruction reshaped constitutional rights.',
    keyTheorems: [
      {
        name: 'The Compromise of 1850 and Popular Sovereignty',
        conditions: 'Managing territorial spoils acquired from the Mexican-American War (Mexican Cession 1848).',
        conclusion: '(1) California admitted as a free state; (2) Utah and New Mexico territories decided slavery via **Popular Sovereignty**; (3) Slave trade banned in Washington D.C.; (4) Harsh new **Fugitive Slave Act** compelling northerners to assist in capturing runaway enslaved people.',
        apTip: 'The Fugitive Slave Act was the most divisive element: It radicalized Northern anti-slavery sentiment, directly inspiring Harriet Beecher Stowe to write *Uncle Tom’s Cabin* (1852) and spurring the Underground Railroad.'
      },
      {
        name: 'The Reconstruction Amendments (13th, 14th, 15th)',
        conditions: 'Post-Civil War constitutional transformation of American citizenship.',
        conclusion: '(1) **13th Amendment (1865)**: Completely abolished slavery and involuntary servitude; (2) **14th Amendment (1868)**: Granted birthright citizenship and guaranteed equal protection of the laws and due process; (3) **15th Amendment (1870)**: Prohibited denying voting rights based on race, color, or previous servitude.',
        apTip: 'Mnemonic: **FREE CITIZENS VOTE** (13 = Free, 14 = Citizens, 15 = Vote). Despite these amendments, Southern states used Black Codes, Jim Crow laws, poll taxes, literacy tests, and KKK terror to suppress freedmen.'
      }
    ],
    formulas: [
      {
        name: 'Civil War Union Advantages vs. Confederate Advantages',
        latex: '\\text{Union: Population (22M vs 9M)} + \\text{Industry (90\\%)} + \\text{Railroads} \\quad \\text{vs.} \\quad \\text{Confederacy: Defensive War} + \\text{Military Generals}',
        explanation: 'Union industrial superiority and naval blockades gradually wore down the Confederacy.'
      }
    ],
    sections: [
      {
        heading: '1. The Escalating Road to Disunion (1850–1861)',
        content: `Key events fracturing the Union leading to secession:

1. **Kansas-Nebraska Act (1854)**: Stephen Douglas introduced popular sovereignty to Kansas and Nebraska, repealing the 1820 Missouri Compromise. Sparked "Bleeding Kansas" and birthed the anti-slavery **Republican Party**.
2. **Dred Scott v. Sandford (1857)**: Chief Justice Roger Taney ruled: (1) African Americans are not citizens and have "no rights which the white man was bound to respect," and (2) The federal government has no constitutional power to prohibit slavery in ANY territory, declaring the Missouri Compromise unconstitutional.
3. **John Brown’s Raid on Harpers Ferry (1859)**: Radical abolitionist attempted to arm enslaved people. Brown was executed, viewed as a martyr in the North and proof of Northern terrorist plots in the South.
4. **Election of Abraham Lincoln (1860)**: Lincoln won without a single Southern electoral vote on a platform opposing the *expansion* of slavery. South Carolina seceded within weeks, followed by the Deep South.`
      }
    ],
    workedExamples: [
      {
        title: 'Evaluating the Emancipation Proclamation (1863)',
        topicRef: 'CED 5.9 Government Policies During the Civil War',
        question: 'Explain the military, diplomatic, and moral objectives of Lincoln’s Emancipation Proclamation (January 1, 1863), and identify which enslaved persons were NOT immediately freed.',
        solutionSteps: [
          'Step 1: Identify legal scope: Lincoln issued the proclamation as Commander-in-Chief as a "fit and necessary war measure." It declared free ONLY those enslaved persons residing in territories currently in active rebellion against the United States.',
          'Step 2: Who was NOT freed: Enslaved persons in the loyal **Border States** (Maryland, Delaware, Kentucky, Missouri) and Union-controlled parts of the Confederacy were NOT freed, because Lincoln feared driving border states into the Confederacy.',
          'Step 3: Military objective: Undermined the Confederate plantation economy and authorized the recruitment of freed Black soldiers into the Union Army (e.g. 54th Massachusetts), providing roughly 180,000 vital troops.',
          'Step 4: Diplomatic objective: Redefined the war as an explicit moral crusade against slavery, making it politically impossible for Britain or France to recognize or aid the Confederacy.',
          'Step 5: Moral shift: Transformed the Union war goal from merely "preserving the Union" to a revolutionary war for human freedom.'
        ],
        finalAnswer: 'The Emancipation Proclamation freed slaves in rebellious Confederate states, added 180,000 Black soldiers to Union ranks, and blocked European intervention; it exempted loyal border states.',
        apScoringTip: 'Never say the Emancipation Proclamation freed ALL slaves! It freed only those in rebel territory; the 13th Amendment was required to officially abolish slavery nationwide.'
      }
    ],
    diagrams: [
      {
        id: 'ush_civil_war_strategy',
        title: 'The Union Anaconda Plan Strategy',
        subtitle: 'Naval Blockade, Mississippi River Control, and March to the Sea',
        type: 'civil_war_map',
        description: 'Map illustrating General Winfield Scott’s Anaconda Plan: Atlantic naval blockade suffocating southern cotton trade, Union gunboats splitting Confederacy along Mississippi River, and Sherman’s March to the Sea crushing southern infrastructure.',
        takeaway: 'The Union triumphed through strategic total war: Suffocating maritime trade, capturing the Mississippi River, and destroying Confederate industrial infrastructure.'
      }
    ],
    commonTraps: [
      'Believing Lincoln entered the presidency to immediately abolish slavery. Lincoln’s initial 1861 goal was strictly to preserve the Union and prevent slavery’s EXPANSION into western territories.',
      'Claiming Reconstruction failed because the South won the war. Reconstruction ended because Northern political will collapsed, finalized by the **Compromise of 1877** (Hayes awarded presidency in exchange for withdrawing federal troops from the South).',
      'Confusing carpetbaggers with scalawags. Carpetbaggers were Northerners who moved south after the war for economic or political opportunity; Scalawags were white Southerners who cooperated with Republican Reconstruction policies.'
    ],
    cramSheet: [
      'Manifest Destiny: Belief in God-given American destiny to expand coast-to-coast.',
      'Dred Scott (1857): Slaves are property, not citizens; Congress cannot ban slavery in territories.',
      'Reconstruction Amendments: 13th (Abolished slavery), 14th (Birthright citizenship & Equal protection), 15th (Voting rights).',
      'Sharecropping: System of debt peonage replacing slavery in the post-war South.',
      'Compromise of 1877: Ended Reconstruction by removing federal troops from the South.'
    ]
  },

  // ==========================================
  // PERIOD 6 (1865–1898): THE GILDED AGE
  // ==========================================
  {
    unitId: 'p6',
    unitNumber: 6,
    title: 'Period 6 (1865–1898): The Gilded Age & Industrialization',
    examWeight: '10%–17% of AP Exam',
    bigIdea: 'Industrial capitalism transformed the American economy, creating corporate monopolies, labor unrest, massive immigration, and the closing of the Western frontier.',
    keyTheorems: [
      {
        name: 'Monopoly Consolidation: Horizontal vs. Vertical Integration',
        conditions: 'Robber barons amassing unprecedented corporate empires during the Second Industrial Revolution.',
        conclusion: 'Horizontal Integration: Buying out or eliminating competitors in the same industry to establish monopoly control (John D. Rockefeller’s Standard Oil trust). Vertical Integration: Controlling every stage of production from raw materials to manufacturing to distribution to eliminate middlemen and slash costs (Andrew Carnegie’s Carnegie Steel).',
        apTip: 'Carnegie defended massive wealth accumulation in *The Gospel of Wealth* (1889), arguing that the wealthy had a moral obligation to act as philanthropic trustees for society.'
      },
      {
        name: 'The Populist (People’s) Party Platform (1892 Omaha Platform)',
        conditions: 'Agrarian revolt of debt-ridden Midwestern and Southern farmers against railroad monopolies and banks.',
        conclusion: 'The Omaha Platform demanded: (1) Free and unlimited coinage of silver ("Free Silver" at 16:1 ratio) to cause inflation and ease farmer debt, (2) Direct election of US Senators, (3) Graduated income tax, (4) Government ownership of railroads and telegraphs, (5) Secret ballots and an 8-hour workday for urban laborers.',
        apTip: 'William Jennings Bryan gave the famous 1896 "Cross of Gold" speech advocating Free Silver. Although the Populist Party collapsed, virtually all their reforms were later adopted during the Progressive Era!'
      }
    ],
    formulas: [
      {
        name: 'Social Darwinism Ideology',
        latex: '\\text{Herbert Spencer: "Survival of the fittest" applied to human socioeconomic classes}',
        explanation: 'Justified extreme wealth inequality and opposed government regulation or labor unions as interference with natural economic evolution.'
      }
    ],
    sections: [
      {
        heading: '1. Gilded Age Labor Unions & Violent Strikes',
        content: `How industrial workers organized against corporate exploitation:

- **Knights of Labor (1869)**: Open to ALL workers (skilled, unskilled, women, African Americans). Collapsed after the **Haymarket Square Riot (1886)** in Chicago, which unfairly linked unions with violent anarchism.
- **American Federation of Labor (AFL, 1886)**: Led by Samuel Gompers. Organized ONLY **skilled craft workers**, focusing on pragmatic "bread-and-butter" issues: Higher wages, shorter 8-hour workdays, and safer working conditions.
- **Great Railroad Strike of 1877 & Pullman Strike (1894)**: Federal troops intervened on the side of corporate management, demonstrating that the Gilded Age federal government consistently allied with capital against organized labor.`
      }
    ],
    workedExamples: [
      {
        title: 'Frederick Jackson Turner’s Frontier Thesis (1893)',
        topicRef: 'CED 6.3 Westward Expansion & Social Culture',
        question: 'Explain the central argument of Frederick Jackson Turner’s "Frontier Thesis" and explain how its proclamation influenced American foreign policy in the 1890s.',
        solutionSteps: [
          'Step 1: State Turner’s core thesis: The continuous presence of an open western frontier shaped American democracy, individualism, egalitarianism, and unique national character, acting as a "safety valve" for urban discontent.',
          'Step 2: Identify turning point: The 1890 US Census announced that the American frontier was officially closed—there was no longer a discernible frontier line of unsettled wilderness.',
          'Step 3: Connect to foreign policy: Turner and contemporary leaders warned that closing the continental frontier would cause social unrest and economic stagnation unless the US found new overseas frontiers to conquer.',
          'Step 4: Result: The Frontier Thesis provided intellectual justification for the rise of American Imperialism in the 1890s (annexation of Hawaii, Spanish-American War, acquisition of Philippines).'
        ],
        finalAnswer: 'Turner argued the frontier forged American democracy and character; its closing in 1890 drove political leaders to seek new overseas commercial and colonial frontiers in the Pacific and Caribbean.',
        apScoringTip: 'Connect the domestic closing of the frontier in 1890 directly to the overseas imperialist expansion of 1898.'
      }
    ],
    diagrams: [
      {
        id: 'ush_monopoly_structures',
        title: 'Horizontal vs. Vertical Integration Monopoly Models',
        subtitle: 'Rockefeller Standard Oil (Horizontal) vs. Carnegie Steel (Vertical)',
        type: 'monopoly_diagram',
        description: 'Diagram comparing horizontal buyout of competing refineries in a single tier vs vertical ownership of iron mines, coal fields, rail lines, and blast furnaces.',
        takeaway: 'Horizontal integration controls an entire tier of the market; vertical integration controls all supply chain stages to eliminate middleman costs.'
      }
    ],
    commonTraps: [
      'Assuming the Sherman Anti-Trust Act (1890) successfully broke up monopolies during the Gilded Age. In reality, the courts initially weaponized the law against LABOR UNIONS, ruling that strikes were illegal restraints on trade!',
      'Confusing "Old" vs. "New" Immigrants. "Old" (pre-1880): Northern/Western Europe (Irish, Germans, British), mostly Protestant and English-speaking. "New" (1880–1920): Southern/Eastern Europe (Italians, Poles, Russian Jews), Catholic/Jewish, facing fierce nativism.',
      'Thinking the Dawes Severalty Act (1887) protected Native American culture. The Dawes Act sought to forcibly assimilate natives by breaking up tribal reservations into individual 160-acre allotments and selling off surplus land.'
    ],
    cramSheet: [
      'Gilded Age coined by Mark Twain: Glittering wealth on the surface concealing underlying poverty, corruption, and exploitation.',
      'Robber Barons: Carnegie (Vertical integration, Steel), Rockefeller (Horizontal integration, Oil).',
      'Dawes Act (1887): Assimilation policy breaking up tribal lands into individual private plots.',
      'Plessy v. Ferguson (1896): Legalized racial segregation under the fraudulent doctrine of "Separate but equal."',
      'Populist Party (1892): Farmers demanded Free Silver, direct election of senators, and income tax.'
    ]
  },

  // ==========================================
  // PERIOD 7 (1890–1945): IMPERIALISM, PROGRESSIVISM, DEPRESSION & WORLD WARS
  // ==========================================
  {
    unitId: 'p7',
    unitNumber: 7,
    title: 'Period 7 (1890–1945): Global Conflict, Progressivism & New Deal',
    examWeight: '10%–17% of AP Exam',
    bigIdea: 'The US transitioned from an isolationist nation to a global superpower through two World Wars. Domestic reform peaked in the Progressive Era and FDR’s New Deal.',
    keyTheorems: [
      {
        name: 'The Progressive Era Amendments (16th, 17th, 18th, 19th)',
        conditions: 'Bipartisan reform response to Gilded Age corporate monopolies, political machines, and social inequities.',
        conclusion: '(1) **16th Amendment (1913)**: Graduated federal income tax; (2) **17th Amendment (1913)**: Direct election of US Senators by the public; (3) **18th Amendment (1919)**: National prohibition of alcoholic beverages; (4) **19th Amendment (1920)**: Granted women the right to vote.',
        apTip: 'Mnemonic: **T**ax, **S**enators, **S**obriety, **S**uffrage (16 = Income Tax, 17 = Direct Senators, 18 = Prohibition, 19 = Women’s Suffrage).'
      },
      {
        name: 'Franklin D. Roosevelt’s New Deal (The 3 R’s)',
        conditions: 'Combating the catastrophic economic collapse of the Great Depression ($25\\%$ unemployment).',
        conclusion: '(1) **Relief** for the unemployed (CCC, WPA public works jobs); (2) **Recovery** for business and agriculture (NRA, AAA paying farmers to reduce crop surplus); (3) **Reform** of financial institutions to prevent future collapses (FDIC bank insurance, SEC stock market oversight, **Social Security Act of 1935**).',
        apTip: 'The New Deal fundamentally transformed American governance: It established the modern welfare state and cemented the principle that the federal government is responsible for the economic security of its citizens.'
      }
    ],
    formulas: [
      {
        name: 'FDR New Deal Coalition',
        latex: '\\text{New Deal Coalition} = \\text{Urban Working Class} + \\text{Labor Unions} + \\text{African Americans} + \\text{Southern Whites} + \\text{Immigrants}',
        explanation: 'Electoral alignment that dominated presidential politics for three decades.'
      }
    ],
    sections: [
      {
        heading: '1. World War I & II Homefront Transformations',
        content: `How global conflicts restructured American society and civil liberties:

- **The Great Migration**: Hundreds of thousands of African Americans fled the violent Jim Crow South to fill industrial manufacturing factory jobs in Northern and Midwestern cities (Chicago, Detroit, NYC), sparking the **Harlem Renaissance**.
- **WWI Civil Liberties Repression**: Espionage and Sedition Acts jailed anti-war dissenters. In *Schenck v. United States* (1919), the Supreme Court ruled free speech can be restricted if it presents a "clear and present danger."
- **WWII Executive Order 9066 & Japanese Internment**: Over 120,000 Japanese Americans (mostly US citizens) forcibly relocated to inland detention camps without due process. Upheld in *Korematsu v. United States* (1944).
- **Women in the Workforce**: "Rosie the Riveter" symbolized millions of women taking high-paying industrial defense jobs, setting the stage for post-war feminist movements.`
      }
    ],
    workedExamples: [
      {
        title: 'Debate Over American Imperialism in 1898',
        topicRef: 'CED 7.2 Imperialism: Debates',
        question: 'Contrast the arguments of American Imperialists and Anti-Imperialists following the Spanish-American War regarding the annexation of the Philippines.',
        solutionSteps: [
          'Step 1: Imperialist arguments (McKinley, Theodore Roosevelt, Henry Cabot Lodge): Argued annexation provided a vital naval refueling station and commercial gateway to Asian markets (China Open Door). Invoked Social Darwinism and "White Man’s Burden" paternalism to "uplift and Christianize" foreign populations.',
          'Step 2: Anti-Imperialist arguments (Mark Twain, Andrew Carnegie, William Jennings Bryan, Anti-Imperialist League): Argued subjugating foreign peoples without their consent violated the fundamental principles of the Declaration of Independence ("consent of the governed").',
          'Step 3: Connect to outcome: Senate ratified the treaty by a narrow margin; the US fought a brutal three-year Philippine-American War to suppress Filipino independence fighters led by Emilio Aguinaldo.'
        ],
        finalAnswer: 'Imperialists cited naval power, commercial access to Asian markets, and racial paternalism; Anti-Imperialists argued colonialism violated the founding democratic principle of self-determination.',
        apScoringTip: 'Remember that Anti-Imperialists included prominent industrialists like Andrew Carnegie alongside labor leaders and writers.'
      }
    ],
    diagrams: [
      {
        id: 'ush_new_deal_programs',
        title: 'FDR’s New Deal: Relief, Recovery, and Reform',
        subtitle: 'The Three R’s Reshaping the Federal Social Safety Net',
        type: 'new_deal_branches',
        description: 'Tree diagram branching into Relief (CCC, WPA), Recovery (AAA, NIRA), and Reform (FDIC, SEC, Social Security Act of 1935).',
        takeaway: 'The New Deal marked a permanent ideological shift from Gilded Age laissez-faire to the modern federal regulatory welfare state.'
      }
    ],
    commonTraps: [
      'Believing the New Deal ended the Great Depression. The New Deal provided vital economic relief and institutional reforms, but full economic recovery and full employment were achieved only by massive defense mobilization in World War II.',
      'Assuming the US joined the League of Nations. President Woodrow Wilson created the League in his 14 Points, but the US Senate (led by Henry Cabot Lodge) rejected the Treaty of Versailles to preserve constitutional warmaking autonomy.',
      'Thinking the 1920s was uniformly prosperous. While urban consumerism boomed, American farmers suffered chronic agricultural depression and debt throughout the entire 1920s due to post-WWI crop surpluses.'
    ],
    cramSheet: [
      'Progressive Era: Muckrakers (Upton Sinclair, Ida Tarbell) exposed corporate abuse; Teddy Roosevelt’s Square Deal regulated trusts.',
      'Progressive Amendments: 16th (Tax), 17th (Senators), 18th (Prohibition), 19th (Women’s Suffrage).',
      'The Great Depression (1929) caused by stock speculation on margin, bank failures, and farm overproduction.',
      'New Deal: Relief, Recovery, Reform (Social Security, FDIC, SEC).',
      'Lend-Lease Act (1941) made the US the "Arsenal of Democracy" before Pearl Harbor forced entry into WWII.'
    ]
  },

  // ==========================================
  // PERIOD 8 (1945–1980): COLD WAR, CIVIL RIGHTS & THE GREAT SOCIETY
  // ==========================================
  {
    unitId: 'p8',
    unitNumber: 8,
    title: 'Period 8 (1945–1980): Cold War, Civil Rights & Vietnam',
    examWeight: '10%–17% of AP Exam',
    bigIdea: 'The Cold War shaped foreign policy through containment and proxy wars. The Civil Rights Movement dismantled legal segregation, while cultural protests divided society.',
    keyTheorems: [
      {
        name: 'The Containment Doctrine (George F. Kennan)',
        conditions: 'US foreign policy strategy to resist Soviet communist expansionism.',
        conclusion: 'The US committed to "contain" communism within its existing borders through economic aid (Marshall Plan), military alliances (NATO), and diplomatic doctrines (Truman Doctrine). Led to proxy wars in Korea (1950–1953) and Vietnam (1964–1973).',
        apTip: 'The Truman Doctrine declared the US would support free peoples resisting subjugation by armed minorities or outside pressures, inaugurating decades of global interventionism.'
      },
      {
        name: 'Landmark Civil Rights Legislation (1964 & 1965)',
        conditions: 'Grassroots civil rights campaigns (Montgomery Bus Boycott, March on Washington, Selma).',
        conclusion: '(1) **Civil Rights Act of 1964**: Banned racial discrimination in all public accommodations and prohibited employment discrimination based on race, sex, or national origin; (2) **Voting Rights Act of 1965**: Outlawed literacy tests and placed southern voting registration under federal oversight.',
        apTip: 'These laws dismantled the entire legal framework of Jim Crow, but alienated southern white voters, prompting a historic political realignments toward the Republican Party.'
      }
    ],
    formulas: [
      {
        name: 'Cold War Domino Theory',
        latex: '\\text{Fall of one nation to communism} \\implies \\text{Neighboring nations fall like dominoes}',
        explanation: 'Provided theoretical justification for US military escalation in Vietnam.'
      }
    ],
    sections: [
      {
        heading: '1. Lyndon B. Johnson’s Great Society vs. FDR’s New Deal',
        content: `Comparing the two peak periods of 20th-century liberal reform:

| Program / Feature | FDR’s New Deal (1930s) | LBJ’s Great Society (1960s) |
| :--- | :--- | :--- |
| **Primary National Context** | Responding to economic **Depression** ($25\\%$ unemployment) | Enacted during a period of unprecedented **Economic Prosperity** |
| **Core Social Target** | Providing direct economic relief, jobs, and financial regulation | Waging the **"War on Poverty"** and securing racial civil rights |
| **Healthcare Programs** | Social Security (pensions, but no universal healthcare) | Created **Medicare** (health insurance for elderly) and **Medicaid** (for low-income) |
| **Education & Environment** | PWA/WPA school construction, Civilian Conservation Corps | Head Start, Elementary and Secondary Education Act, Clean Air/Water Acts |
| **Downfall / Limitation** | Scaled back due to Supreme Court battles and WWII mobilization | Massive federal spending diverted to fund the disastrous **Vietnam War** |`
      }
    ],
    workedExamples: [
      {
        title: 'Brown v. Board of Education (1954) Sourcing Analysis',
        topicRef: 'CED 8.6 Early Steps in the Civil Rights Movement',
        question: 'Explain how the Supreme Court decision in *Brown v. Board of Education* (1954) overturned legal precedent and analyze ONE obstacle that delayed its implementation.',
        solutionSteps: [
          'Step 1: Identify overturned precedent: *Brown* directly overturned the 1896 *Plessy v. Ferguson* doctrine of "separate but equal."',
          'Step 2: Legal reasoning: Chief Justice Earl Warren ruled unanimously that racially segregated schools are inherently unequal and violate the Equal Protection Clause of the 14th Amendment, generating feelings of inferiority among Black children.',
          'Step 3: Analyze implementation obstacle: The Supreme Court ordered desegregation with "all deliberate speed," which Southern states exploited to delay compliance through "Massive Resistance" (e.g. closing public schools, Southern Manifesto, Little Rock Central High crisis requiring federal troops).',
          'Step 4: Conclude: Meaningful desegregation required federal military intervention and the Civil Rights Act of 1964.'
        ],
        finalAnswer: '*Brown v. Board* struck down "separate but equal" as a violation of the 14th Amendment Equal Protection Clause; southern states enacted "Massive Resistance" to stall integration.',
        apScoringTip: 'Always link *Brown v. Board* directly to the **14th Amendment’s Equal Protection Clause**.'
      }
    ],
    diagrams: [
      {
        id: 'ush_cold_war_alliances',
        title: 'Cold War Spheres of Influence and Alliances',
        subtitle: 'NATO (Democracy/Capitalism) vs. Warsaw Pact (Soviet Communism)',
        type: 'cold_war_map',
        description: 'Map of divided Europe showing Churchill’s "Iron Curtain" separating NATO democratic allies in Western Europe from Soviet satellite nations bound by the Warsaw Pact in Eastern Europe.',
        takeaway: 'Cold War geopolitics split the globe into two nuclear-armed ideological blocs governed by containment and Mutually Assured Destruction (MAD).'
      }
    ],
    commonTraps: [
      'Assuming the Cold War involved direct military conflict between the US and the USSR. The US and Soviet Union never fought directly; they engaged through proxy wars (Korea, Vietnam, Afghan-Soviet War) and nuclear brinkmanship (Cuban Missile Crisis).',
      'Confusing Medicare with Medicaid. Medicare is for the ELDERLY (care for seniors); Medicaid is for LOW-INCOME individuals (aid the impoverished).',
      'Thinking the Gulf of Tonkin Resolution was an official declaration of war. Congress never declared war on North Vietnam; the resolution gave President Johnson a "blank check" to escalate military force without formal declaration.'
    ],
    cramSheet: [
      'Containment: George Kennan’s strategy to halt Soviet expansion (Truman Doctrine, Marshall Plan, NATO).',
      'Brown v. Board (1954): Overturned Plessy; segregated public schools violate 14th Amendment.',
      'Civil Rights Act (1964) banned public discrimination; Voting Rights Act (1965) abolished literacy tests.',
      'Gulf of Tonkin Resolution (1964) authorized military escalation in Vietnam; War Powers Act (1973) restricted presidential warmaking.',
      'Watergate Scandal (1974): Richard Nixon resigned after cover-up of DNC break-in was exposed by White House tapes.'
    ]
  },

  // ==========================================
  // PERIOD 9 (1980–PRESENT): CONSERVATISM, GLOBALIZATION & MODERN ERA
  // ==========================================
  {
    unitId: 'p9',
    unitNumber: 9,
    title: 'Period 9 (1980–Present): Conservatism & The Modern Era',
    examWeight: '4%–6% of AP Exam',
    bigIdea: 'The Reagan Revolution inaugurated a conservative resurgence emphasizing deregulation and tax cuts. The end of the Cold War ushered in globalization and the War on Terror.',
    keyTheorems: [
      {
        name: 'The Reagan Revolution and Supply-Side Economics',
        conditions: 'Conservative political resurgence electing Ronald Reagan in 1980.',
        conclusion: '"Reaganomics" (supply-side economics): (1) Major individual and corporate tax cuts (Economic Recovery Tax Act of 1981), (2) Deregulation of finance and environmental restrictions, (3) Massive increases in federal defense spending to outspend the Soviet Union, (4) Cuts to domestic discretionary social programs.',
        apTip: 'Critics noted that while supply-side policies stimulated 1980s economic expansion, pairing tax cuts with massive military spending caused federal national debt to triple!'
      },
      {
        name: 'Post-Cold War Globalization and the War on Terror',
        conditions: 'The 1991 collapse of the Soviet Union and the September 11, 2001 terrorist attacks.',
        conclusion: 'Economic globalization accelerated via multilateral free trade agreements (NAFTA, WTO) and digital internet technology. The 9/11 attacks shifted US national security toward counterterrorism, preemptive war in Afghanistan and Iraq, and domestic surveillance debates (**USA PATRIOT Act**).',
        apTip: 'Debates in Period 9 mirror historical themes: The PATRIOT Act reignited constitutional arguments balancing national security against individual civil liberties (similar to the Alien & Sedition Acts and WWI Espionage Act).'
      }
    ],
    formulas: [
      {
        name: 'Supply-Side Economic Premise (Laffer Curve)',
        latex: '\\text{Lower Tax Rates} \\implies \\text{Higher Private Capital Investment} \\implies \\text{Economic Growth}',
        explanation: 'The conservative economic theory underpinning Reaganomics.'
      }
    ],
    sections: [
      {
        heading: '1. Demographic and Technological Shifts in Modern America',
        content: `Major socioeconomic transformations defining late 20th and 21st century America:

- **The Rise of the Sun Belt**: Population, jobs, and political power shifted from the declining industrial "Rust Belt" (Northeast/Midwest) to the South and Southwest (Sun Belt: Florida, Texas, Arizona, California), driven by defense spending, air conditioning, lower taxes, and non-union labor.
- **The Immigration Act of 1965 Impact**: Abolished the 1920s national origins quotas, sparking massive new immigration predominantly from **Latin America and Asia**, fundamentally transforming American cultural and demographic diversity.
- **The Digital Revolution**: Personal computers, the Internet, mobile smartphones, and social media revolutionized global communications, e-commerce, labor productivity, and media consumption.`
      }
    ],
    workedExamples: [
      {
        title: 'Analyzing the Collapse of the Soviet Union (1991)',
        topicRef: 'CED 9.3 The End of the Cold War',
        question: 'Identify and explain TWO factors that contributed to the dissolution of the Soviet Union in 1991.',
        solutionSteps: [
          'Step 1: Factor 1 - Internal economic and political reforms: Soviet Premier Mikhail Gorbachev instituted **Glasnost** (political openness and freedom of speech) and **Perestroika** (economic restructuring incorporating market incentives). Rather than stabilizing the regime, these policies unleashed long-suppressed nationalist independence movements across Soviet satellite republics.',
          'Step 2: Factor 2 - External military and economic pressure: Ronald Reagan’s aggressive defense buildup (including the Strategic Defense Initiative "Star Wars" proposal) forced the economically stagnant Soviet command economy into an arms race it could not financially sustain.',
          'Step 3: Factor 3 - War in Afghanistan: The costly Soviet quagmire in Afghanistan drained resources and military morale.',
          'Step 4: Conclude: In December 1991, the Soviet flag was lowered, formally ending the Cold War and leaving the United States as the sole global superpower.'
        ],
        finalAnswer: 'The Soviet Union collapsed due to Gorbachev’s internal reforms (Glasnost and Perestroika) that unleashed regional nationalism, combined with crippling economic strain from an unsustainable military arms race with the US.',
        apScoringTip: 'Know the definitions of Glasnost (openness) and Perestroika (economic restructuring) for Period 9 foreign policy questions.'
      }
    ],
    diagrams: [
      {
        id: 'ush_sunbelt_migration',
        title: 'The Rust Belt to Sun Belt Demographic Shift',
        subtitle: 'Deindustrialization in Midwest $\\rightarrow$ Aerospace and Tech Boom in South/West',
        type: 'migration_flow_map',
        description: 'Map showing population arrows fleeing declining manufacturing centers in the Rust Belt (Detroit, Cleveland, Pittsburgh) toward booming Sun Belt cities (Atlanta, Dallas, Phoenix, Las Vegas).',
        takeaway: 'Air conditioning, low taxes, and defense industry contracts shifted millions of citizens and dozens of congressional electoral votes to the Sun Belt.'
      }
    ],
    commonTraps: [
      'Attributing the end of the Cold War solely to US military buildup. Historians emphasize that internal Soviet economic stagnation, bureaucratic corruption, and Gorbachev’s reforms were equally decisive.',
      'Assuming the conservative movement started with Ronald Reagan. The conservative resurgence began in the 1960s with Barry Goldwater, William F. Buckley’s *National Review*, and the Moral Majority founded by Jerry Falwell.',
      'Overlooking constitutional debates surrounding the USA PATRIOT Act. The expansion of government surveillance wiretaps sparked fierce controversy regarding the 4th Amendment protection against unreasonable searches.'
    ],
    cramSheet: [
      'Reaganomics: Tax cuts, deregulation, defense spending increase, cuts to welfare programs.',
      '1991: Dissolution of the Soviet Union officially ends the Cold War.',
      'Immigration Act of 1965 abolished national quotas; majority of modern immigrants come from Latin America and Asia.',
      'Sun Belt shift: Population and political power moved from the Rust Belt to the South and Southwest.',
      'Post-9/11: Creation of Department of Homeland Security and passage of the USA PATRIOT Act.'
    ]
  }
];
