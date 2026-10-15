// scripts/expand_ush.cjs
// Script to expand all 79 levels of AP US History (APUSH) to 3 questions per level.
// Adds 79 authentic College Board AP-level questions with comprehensive stems, 4 plausible choices,
// detailed explanations, and distractor tips.

const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const targetPath = path.resolve(__dirname, '../src/data/quiz/apUshUnitsData.ts');
const code = fs.readFileSync(targetPath, 'utf8');

const newQuestions = [
  // --- PERIOD 1: 1491–1607 (6 levels) ---
  {
    levelKey: "ush-p1-l1",
    question: {
      id: "ush1-l1-q3",
      stem: "Which of the following environmental adaptations best explains the development of permanent settlements and matrilineal clans among the Iroquois (Haudenosaunee) in the Northeast?",
      options: [
        "Nomadic following of migratory caribou herds across subarctic permafrost.",
        "Construction of stone cliff dwellings adapted to deep desert canyons.",
        "Mixed agriculture combining the \"Three Sisters\" (corn, beans, squash) with hunting and seasonal gathering in deciduous woodland environments.",
        "Exclusive reliance on deep-sea whaling along the rocky North Atlantic coast."
      ],
      correctIndex: 2,
      explanation: "In the Eastern Woodlands and Northeast, societies like the Iroquois cultivated the 'Three Sisters'—maize, climbing beans, and squash—which provided complementary soil nitrogen and balanced nutrition, fostering permanent multi-family longhouse villages.",
      distractorTip: "Remember the regional geography: cliff dwellings = Southwest (Pueblo/Anasazi); nomadic bison hunting = Great Plains; Three Sisters mixed farming = Northeast/Eastern Woodlands."
    }
  },
  {
    levelKey: "ush-p1-l2",
    question: {
      id: "ush1-l2-q3",
      stem: "How did the growth of joint-stock companies in Western Europe in the late sixteenth and early seventeenth centuries alter the pattern of transoceanic colonization?",
      options: [
        "They prohibited monarchs from collecting any customs taxes on imported goods.",
        "They eliminated the risk of maritime exploration by insuring all ships through the Vatican.",
        "They forced all European exploration to be funded exclusively by private religious charities.",
        "They pooled private investor capital to finance risky overseas expeditions, reducing individual financial liability while establishing profitable corporate colonies."
      ],
      correctIndex: 3,
      explanation: "Joint-stock companies (such as the Virginia Company) allowed multiple investors to buy shares, spreading risk and raising large capital sums without relying solely on royal treasuries, serving as the commercial engine of English colonization.",
      distractorTip: "Note the contrast: Spanish expeditions were largely state- and crown-directed (conquistadores licensed by the crown), whereas English colonization relied heavily on private joint-stock corporate charters."
    }
  },
  {
    levelKey: "ush-p1-l3",
    question: {
      id: "ush1-l3-q3",
      stem: "The introduction of Spanish horses to North America most profoundly transformed the culture and economy of Native American societies in which region?",
      options: [
        "The Great Plains, where nomadic nations like the Lakota Sioux and Comanche utilized equestrian mobility to become dominant bison hunters and military powers.",
        "The Arctic tundra, where Inuit seal hunters used horses to pull sea sleds across ice packs.",
        "The dense coastal swamplands of the Everglades in Florida.",
        "The urban stone complexes of the Ancestral Pueblo in the Chaco Canyon desert."
      ],
      correctIndex: 0,
      explanation: "The Spanish horse completely revolutionized Great Plains societies; formerly sedentary or semi-nomadic foot hunters transformed into formidable equestrian societies capable of pursuing massive bison herds and contesting European expansion.",
      distractorTip: "Always link the reintroduction of the horse to the transformation of the Great Plains, not the Eastern Woodlands or Southwest."
    }
  },
  {
    levelKey: "ush-p1-l4",
    question: {
      id: "ush1-l4-q3",
      stem: "What was the primary justification articulated by Spanish authorities for the implementation of the encomienda system in the early sixteenth century?",
      options: [
        "That Indigenous Americans were equal citizens entitled to self-governance under Spanish municipal law.",
        "That Spanish encomenderos were granted Indigenous tribute labor in exchange for providing protection and converting the workers to Roman Catholicism.",
        "That Indigenous workers were legally purchased chattel slaves imported from West Africa.",
        "That private joint-stock investors were contractually required to pay cash wages to local laborers."
      ],
      correctIndex: 1,
      explanation: "Under the encomienda, the Spanish crown granted conquistadores the right to exact forced labor and tribute from Indigenous villages, under the legal rationale that the encomendero would instruct them in the Spanish language and Catholic faith.",
      distractorTip: "In reality, the encomienda functioned as brutal forced servitude; it was not a voluntary wage system or equal feudal partnership."
    }
  },
  {
    levelKey: "ush-p1-l5",
    question: {
      id: "ush1-l5-q3",
      stem: "At the Valladolid Debate (1550–1551), Dominican friar Bartolomé de Las Casas challenged Juan Ginés de Sepúlveda by arguing that:",
      options: [
        "Spain should withdraw completely from the Americas and surrender all colonial lands to Great Britain.",
        "Indigenous Americans possessed no souls and could not be converted to Christianity.",
        "Indigenous peoples were rational human beings created in God's image who possessed natural rights and should not be subjected to violent enslavement.",
        "Aristotle's doctrine of \"natural slavery\" justified the immediate execution of all non-Christians."
      ],
      correctIndex: 2,
      explanation: "Las Casas defended the humanity of Indigenous peoples against Sepúlveda (who used Aristotle to argue that Indians were 'natural slaves' destined for subjugation), arguing that peaceful evangelism rather than coercive conquest was the only morally justifiable Christian path.",
      distractorTip: "Las Casas is famous as the 'Protector of the Indians'; Sepúlveda defended Spanish imperial conquest and natural inequality."
    }
  },
  {
    levelKey: "ush-p1-l6",
    question: {
      id: "ush1-l6-q3",
      stem: "When evaluating European and Indigenous interactions between 1491 and 1607, which statement best characterizes how Native Americans asserted agency in response to European colonization?",
      options: [
        "They immediately abandoned all ancestral cultural traditions and voluntarily assimilated into European society.",
        "They surrendered all territorial claims without armed conflict or diplomatic resistance.",
        "They formed a single, unified continental confederacy that drove all Europeans out of North America.",
        "They forged strategic military alliances with rival European powers, engaged in armed resistance, and syncretically adapted European goods and religious ideas while striving to maintain cultural sovereignty."
      ],
      correctIndex: 3,
      explanation: "Native Americans were active historical agents: they exploited rivalries between European empires (Spanish, French, English), resisted militarily (e.g., Pueblo Revolt, Powhatan Wars), and selectively integrated European technologies (firearms, metal tools, horses) into their own cultural frameworks.",
      distractorTip: "Reject distractors portraying Native Americans as passive victims or completely submissive assimilators; historical agency and resistance are core APUSH themes."
    }
  },

  // --- PERIOD 2: 1607–1754 (7 levels) ---
  {
    levelKey: "ush-p2-l1",
    question: {
      id: "ush2-l1-q3",
      stem: "How did French colonization in North America differ fundamentally from British colonization during the seventeenth and eighteenth centuries?",
      options: [
        "French colonizers were relatively few in number and focused on establishing mutual trade alliances (especially the fur trade) and intermarriage with Native Americans, whereas the British brought large numbers of settlers to establish permanent agricultural settlements that displaced Indigenous populations.",
        "French colonizers established large-scale plantation slave economies across the Great Lakes region.",
        "British colonizers forbade private land ownership and required all colonists to live in Catholic mission compounds.",
        "The French established direct democratic town meetings that governed New France without royal interference."
      ],
      correctIndex: 0,
      explanation: "The French imperial model in New France relied on coureurs des bois and Jesuit missionaries who integrated into Indigenous trading networks for beaver pelts, whereas English settlers came in family units, demanded private land ownership, and pushed Indigenous tribes westward.",
      distractorTip: "Compare colonial models: Spanish = extractive conquest & forced labor; French/Dutch = commercial fur trade alliances; English = settler agriculture & land dispossession."
    }
  },
  {
    levelKey: "ush-p2-l2",
    question: {
      id: "ush2-l2-q3",
      stem: "The Mayflower Compact (1620) and the New England town meeting system were significant in the development of American political institutions because they:",
      options: [
        "Granted universal voting rights to all men and women regardless of church membership or property.",
        "Established an early tradition of self-government based on social covenants and direct democratic participation among church-member property owners.",
        "Mandated the complete separation of church and civil government throughout Massachusetts Bay.",
        "Subordinated local colonial legislatures to the absolute authority of the King's Anglican bishops."
      ],
      correctIndex: 1,
      explanation: "The Mayflower Compact created a 'civil body politic' governed by majoritarian consent; New England Puritans met in direct town meetings to vote on local bylaws, taxation, and schools, creating a durable precedent for local participatory democracy.",
      distractorTip: "New England was not a secular democracy; political franchise was initially restricted to adult male 'freemen' who were visible church members."
    }
  },
  {
    levelKey: "ush-p2-l3",
    question: {
      id: "ush2-l3-q3",
      stem: "Why were the Middle Colonies (Pennsylvania, New York, New Jersey, Delaware) often referred to as the \"breadbasket colonies\" of British North America?",
      options: [
        "They specialized exclusively in the mass production of tobacco and indigo for export to the West Indies.",
        "They imported all their grain from New England to feed large enslaved mining workforces.",
        "Their fertile soil and temperate climate supported high agricultural yields of cereal grains (wheat, barley, rye) and attracted an ethnically and religiously diverse immigrant population.",
        "Their economies were based entirely on oceanic cod fishing and whaling."
      ],
      correctIndex: 2,
      explanation: "The Middle Colonies possessed rich soils suited for grain production, and William Penn's policy of religious toleration and peaceful relations with the Delaware Indians attracted diverse European immigrants (Germans, Scots-Irish, Dutch, Quakers).",
      distractorTip: "The Middle Colonies combined commercial grain agriculture with vibrant port commerce (Philadelphia, New York) and the highest ethnic/religious pluralism in the colonies."
    }
  },
  {
    levelKey: "ush-p2-l4",
    question: {
      id: "ush2-l4-q3",
      stem: "How did the British policy of \"salutary neglect\" prior to 1763 influence the economic and political development of the thirteen colonies?",
      options: [
        "It forced colonial merchants to sell all manufactured goods at bankrupting losses to royal monopolies.",
        "It caused colonial assemblies to disband and surrender all local legislative authority to Parliament.",
        "It led to the immediate military occupation of all colonial seaports by British redcoats.",
        "It allowed the colonies to develop autonomous legislative self-government and thrive through widespread illicit smuggling that routinely evaded parliamentary trade regulations."
      ],
      correctIndex: 3,
      explanation: "Under Prime Ministers like Robert Walpole, Britain laxly enforced the Navigation Acts ('salutary neglect') as long as commerce was profitable; this gave colonial assemblies control over local taxes and purse strings, fostering expectations of self-rule.",
      distractorTip: "Salutary neglect ended abruptly after the French and Indian War in 1763, sparking colonial outrage when Britain began strictly enforcing customs laws and imposing direct taxes."
    }
  },
  {
    levelKey: "ush-p2-l5",
    question: {
      id: "ush2-l5-q3",
      stem: "What was the most significant long-term consequence of Bacon's Rebellion (1676) in colonial Virginia?",
      options: [
        "Planter elites transitioned away from white indentured servants toward race-based African chattel slavery to prevent future multiracial rebellions of poor laborers.",
        "The Virginia House of Burgesses abolished all private tobacco plantations.",
        "Nathaniel Bacon was crowned the independent monarch of Virginia.",
        "Enslaved Africans were granted full civil rights and distributed free frontier lands."
      ],
      correctIndex: 0,
      explanation: "Bacon's alliance of poor frontier indentured servants and enslaved men terrified Virginia's tidewater planters. To eliminate the threat of an unruly landless white class, the gentry sharply increased African slave imports and codified hereditary racial slavery (Virginia Slave Codes of 1705).",
      distractorTip: "Bacon's Rebellion was the decisive catalyst accelerating the shift from indentured servitude to racialized chattel slavery in the Chesapeake."
    }
  },
  {
    levelKey: "ush-p2-l6",
    question: {
      id: "ush2-l6-q3",
      stem: "The First Great Awakening of the 1730s and 1740s, led by itinerant preachers like George Whitefield and Jonathan Edwards, impacted colonial society by:",
      options: [
        "Unifying all thirteen colonies under the institutional authority of the Church of England.",
        "Challenging traditional clerical hierarchies through emotive evangelical revivals and fostering a shared, trans-colonial religious identity that questioned established authority.",
        "Banning all musical instruments and religious preaching outside of Harvard and Yale universities.",
        "Promoting secular atheism and the rejection of all Christian scripture."
      ],
      correctIndex: 1,
      explanation: "The Great Awakening broke the monopoly of traditional 'Old Light' ministers; charismatic 'New Light' preachers emphasized personal salvation, emotional conversion, and spiritual equality, creating the first shared cultural movement across all thirteen colonies and encouraging citizens to question authority.",
      distractorTip: "The Great Awakening was a religious revival, not a secular movement; yet, by encouraging ordinary people to challenge religious authority, it primed colonists to question British political authority decades later."
    }
  },
  {
    levelKey: "ush-p2-l7",
    question: {
      id: "ush2-l7-q3",
      stem: "By the mid-eighteenth century, the process of \"Anglicization\" across the British North American colonies was evidenced by:",
      options: [
        "The complete refusal of colonial merchants to purchase any manufactured commodities produced in Great Britain.",
        "The total abandonment of the English common law tradition in favor of French civil law.",
        "The widespread adoption of British political ideals, consumer goods, architectural styles, and print culture by colonial elites seeking to emulate English gentility.",
        "The mass conversion of all colonial residents to Roman Catholicism."
      ],
      correctIndex: 2,
      explanation: "'Anglicization' describes how colonists became more culturally British over time: reading British newspapers, importing English ceramics and tea sets, copying Georgian architecture, and celebrating English constitutional liberties.",
      distractorTip: "The paradox of the pre-Revolutionary colonies is that they were becoming more culturally and economically integrated into the British Empire even as they developed habits of political autonomy."
    }
  },

  // --- PERIOD 3: 1754–1800 (10 levels) ---
  {
    levelKey: "ush-p3-l1",
    question: {
      id: "ush3-l1-q3",
      stem: "Why did the British Proclamation of 1763 provoke intense fury among American colonists, especially in Virginia and Pennsylvania?",
      options: [
        "It required all colonists to convert to the French Catholic Church.",
        "It ordered the immediate evacuation of all seaboard colonial port cities.",
        "It abolished the colonial assembly's power to issue paper currency.",
        "It prohibited colonial settlement west of the Appalachian Mountains, frustrating land speculators and frontiersmen who believed they had fought the French and Indian War to secure that territory."
      ],
      correctIndex: 3,
      explanation: "To avoid costly clashes with Indigenous confederacies after Pontiac's Rebellion, King George III drew the Proclamation Line of 1763 along the Appalachians, forbidding westward settlement; colonists viewed this as an arbitrary infringement on their liberty and economic opportunity.",
      distractorTip: "Colonists largely ignored the Proclamation Line and poured over the mountains anyway, establishing an early pattern of defiance against crown authority."
    }
  },
  {
    levelKey: "ush-p3-l2",
    question: {
      id: "ush3-l2-q3",
      stem: "Why did the Stamp Act of 1765 generate far more widespread, coordinated resistance throughout the colonies than previous revenue measures like the Sugar Act?",
      options: [
        "Because it was the first direct internal tax on everyday paper documents consumed by colonists within the colonies, rather than an external duty on overseas maritime trade.",
        "Because it doubled the price of tea imported from the British East India Company.",
        "Because it eliminated trial by jury for all colonial property crimes.",
        "Because it applied exclusively to poor indentured servants while exempting wealthy lawyers and merchants."
      ],
      correctIndex: 0,
      explanation: "Previous duties (like the Sugar Act of 1764) were external tariffs on overseas trade (which Parliament had long regulated); the Stamp Act was a direct internal tax on legal deeds, newspapers, and playing cards, violating the sacred British principle that only a people's elected representatives could tax them.",
      distractorTip: "Keep the constitutional distinction clear: colonists accepted Parliament's right to regulate external trade ('external taxes'), but vehemently rejected Parliament's authority to levy direct 'internal taxes.'"
    }
  },
  {
    levelKey: "ush-p3-l3",
    question: {
      id: "ush3-l3-q3",
      stem: "In his radical 1776 pamphlet Common Sense, Thomas Paine transformed the colonial political debate by:",
      options: [
        "Urging the Continental Congress to accept a compromise preserving royal authority under King George III.",
        "Using plain, accessible language and biblical imagery to attack the hereditary institution of monarchy itself and advocate for an independent democratic republic.",
        "Demanding the immediate restoration of the British East India Company's tea monopoly.",
        "Recommending that the thirteen colonies request military annexation by the Russian Empire."
      ],
      correctIndex: 1,
      explanation: "Before Paine, many colonists blamed Parliament or corrupt ministers while professing loyalty to the King; Paine attacked the absurdity of an island ruling a continent and the injustice of hereditary kingship, converting hundreds of thousands to the cause of outright independence.",
      distractorTip: "Common Sense was written in bold, unpretentious prose designed for taverns and public readings, making revolutionary ideology accessible to ordinary working people."
    }
  },
  {
    levelKey: "ush-p3-l4",
    question: {
      id: "ush3-l4-q3",
      stem: "The Battle of Saratoga (1777) is recognized by historians as the decisive military turning point of the American Revolutionary War because:",
      options: [
        "It resulted in the immediate capture of King George III by General George Washington.",
        "It forced the British army to completely abandon New York City for the remainder of the war.",
        "The dramatic American victory convinced the French monarchy under Louis XVI to enter into a formal military alliance with the United States, providing essential naval, financial, and troop support.",
        "It ended all fighting in North America and initiated the immediate signing of the Treaty of Paris."
      ],
      correctIndex: 2,
      explanation: "Horatio Gates and Benedict Arnold forced British General Burgoyne to surrender his entire army at Saratoga; this demonstrated to France that the Americans could defeat British regulars in pitched battle, securing Benjamin Franklin's treaty of alliance in 1778.",
      distractorTip: "Without French naval power (under Admiral de Grasse) cutting off British escape at Yorktown (1781), the Continental Army could not have forced Cornwallis's surrender."
    }
  },
  {
    levelKey: "ush-p3-l5",
    question: {
      id: "ush3-l5-q3",
      stem: "What was the most enduring legislative accomplishment achieved under the Articles of Confederation government?",
      options: [
        "The establishment of a universal federal income tax and national bank.",
        "The creation of a standing continental army of 100,000 professional soldiers.",
        "The negotiation of a permanent free-trade customs union with the Spanish Empire.",
        "The passage of the Northwest Ordinance of 1787, which established a mechanism for admitting new states on equal footing with existing states and permanently banned slavery in the Northwest Territory."
      ],
      correctIndex: 3,
      explanation: "The Northwest Ordinance set the precedent for territorial expansion: territories would become self-governing states once reaching 60,000 population, funded public education, and barred slavery north of the Ohio River.",
      distractorTip: "The Articles government was notoriously weak at taxation and commerce, but its land policies (Land Ordinance of 1785 and Northwest Ordinance of 1787) were visionary successes."
    }
  },
  {
    levelKey: "ush-p3-l6",
    question: {
      id: "ush3-l6-q3",
      stem: "At the 1787 Constitutional Convention in Philadelphia, the Great Compromise (Connecticut Compromise) resolved the dispute between large and small states by:",
      options: [
        "Establishing a bicameral legislature with proportional representation in the House of Representatives and equal representation (two senators) in the Senate.",
        "Abolishing the executive presidency in favor of a rotating triumvirate of governors.",
        "Requiring all federal laws to receive a three-fourths supermajority vote in the state legislatures.",
        "Allocating congressional seats based strictly on the geographical acreage of each state."
      ],
      correctIndex: 0,
      explanation: "Roger Sherman brokered the compromise between the Virginia Plan (proportional representation based on population) and the New Jersey Plan (equal representation for each state), creating the modern bicameral Congress.",
      distractorTip: "Do not confuse the Great Compromise (large vs. small states / legislative structure) with the Three-Fifths Compromise (North vs. South / representation of enslaved persons)."
    }
  },
  {
    levelKey: "ush-p3-l7",
    question: {
      id: "ush3-l7-q3",
      stem: "In Federalist No. 10, James Madison argued that the danger of factionalism in a republic could be best controlled by:",
      options: [
        "Banning all political parties and civic associations by constitutional amendment.",
        "Creating an extended republic over a large territory, where a great variety of parties and interests make it difficult for an oppressive majority faction to unite and oppress minorities.",
        "Limiting political citizenship strictly to small, homogeneous agrarian townships.",
        "Establishing a hereditary monarch with absolute veto power over the legislature."
      ],
      correctIndex: 1,
      explanation: "Classical political theory held that republics could only survive in small city-states; Madison inverted this thesis in Federalist No. 10, arguing that a large, diverse republic prevents any single faction from dominating the national government.",
      distractorTip: "Anti-Federalists feared that a distant, large republic would inevitably devolve into tyranny; Madison countered that size and diversity were precisely what would protect liberty."
    }
  },
  {
    levelKey: "ush-p3-l8",
    question: {
      id: "ush3-l8-q3",
      stem: "How did Alexander Hamilton justify the constitutionality of chartering the First Bank of the United States against Thomas Jefferson's strict constructionist objections?",
      options: [
        "By citing the President's explicit constitutional authority as Commander-in-Chief of the military.",
        "By arguing that state legislatures possessed no legal authority under the new Constitution.",
        "By invoking the \"necessary and proper\" clause (elastic clause) of Article I, arguing that Congress possessed implied powers to enact legislation reasonably related to its enumerated fiscal duties.",
        "By relying on a binding mutual defense treaty previously ratified with Great Britain."
      ],
      correctIndex: 2,
      explanation: "Jefferson argued the Constitution nowhere mentioned a bank; Hamilton countered with the doctrine of 'implied powers,' stating that since Congress had enumerated powers to collect taxes, borrow money, and regulate commerce, a national bank was a 'necessary and proper' means to that constitutional end.",
      distractorTip: "This historic debate between Hamilton (loose/broad constructionism) and Jefferson (strict constructionism) laid the philosophical groundwork for the first two-party system (Federalists vs. Democratic-Republicans)."
    }
  },
  {
    levelKey: "ush-p3-l9",
    question: {
      id: "ush3-l9-q3",
      stem: "The Kentucky and Virginia Resolutions (1798), authored secretly by Thomas Jefferson and James Madison, were historically significant because they advanced which constitutional doctrine?",
      options: [
        "The absolute supremacy of federal judicial review over all state court decisions.",
        "The right of the President to unilaterally suspend the writ of habeas corpus during peacetime.",
        "The constitutional requirement that all federal taxes receive unanimous state approval.",
        "The compact theory of the Union, asserting that individual states could judge the constitutionality of federal laws and \"nullify\" acts (like the Alien and Sedition Acts) that exceeded delegated federal powers."
      ],
      correctIndex: 3,
      explanation: "Outraged by the Federalist Alien and Sedition Acts, Jefferson and Madison argued that the states had entered into a voluntary 'compact' to create the national government; therefore, states retained the sovereign right to interpose or nullify unconstitutional federal laws—a doctrine later resurrected by antebellum southern secessionists.",
      distractorTip: "The nullification doctrine originated here as a defense of free speech against Federalist overreach, but would later be weaponized by John C. Calhoun to defend slavery."
    }
  },
  {
    levelKey: "ush-p3-l10",
    question: {
      id: "ush3-l10-q3",
      stem: "The concept of \"Republican Motherhood\" that gained prominence following the American Revolution held that:",
      options: [
        "Women played a vital civic role in the republic by educating their sons in moral virtue, patriotism, and republican principles, thereby justifying expanded educational access for women.",
        "Women should be granted full voting rights and elected to state legislative offices.",
        "Women should serve alongside men in armed militia regiments during peacetime.",
        "Women should abandon all domestic family responsibilities to work in urban textile factories."
      ],
      correctIndex: 0,
      explanation: "Republican Motherhood gave women an elevated civic status within the domestic sphere: as mothers, they were tasked with cultivating virtuous, enlightened citizens necessary for the survival of the republic, which in turn spurred the founding of female academies.",
      distractorTip: "Republican Motherhood was not political equality or suffrage; it reinforced women's domestic domain while opening new opportunities for female literacy and education."
    }
  },

  // --- PERIOD 4: 1800–1848 (11 levels) ---
  {
    levelKey: "ush-p4-l1",
    question: {
      id: "ush4-l1-q3",
      stem: "How did the Embargo Act of 1807 impact the American domestic economy?",
      options: [
        "It caused an unprecedented economic boom in southern cotton and Chesapeake tobacco exports.",
        "It devastated American maritime shipping, sparking widespread smuggling in New England and unintentionally stimulating northeastern domestic manufacturing.",
        "It forced Great Britain to immediately surrender its North American naval fleets.",
        "It bankrupted the Bank of the United States and triggered the panic of 1819."
      ],
      correctIndex: 1,
      explanation: "Jefferson's embargo prohibited American ships from trading with foreign ports to punish Britain and France; while it failed to coerce the European powers, it crippled port commerce, stoked New England secessionist talk, and pushed capital into domestic textile manufacturing.",
      distractorTip: "Note the unintended consequence: Jefferson, who envisioned an agrarian nation of yeoman farmers, inadvertently accelerated American industrial self-sufficiency."
    }
  },
  {
    levelKey: "ush-p4-l2",
    question: {
      id: "ush4-l2-q3",
      stem: "In the landmark ruling McCulloch v. Maryland (1819), Chief Justice John Marshall established which fundamental constitutional principles?",
      options: [
        "That states possessed the constitutional authority to tax any federal agency operating within their borders.",
        "That the Bill of Rights applied directly to state governments as well as the federal government.",
        "That Congress possessed implied powers under the \"necessary and proper\" clause to create the Second Bank of the United States, and that states could not tax federal instrumentalities (\"the power to tax involves the power to destroy\").",
        "That the Supreme Court could not rule on matters involving state commercial disputes."
      ],
      correctIndex: 2,
      explanation: "Marshall upheld the constitutionality of the national bank using Hamilton's implied powers doctrine and declared Maryland's tax on the bank unconstitutional under the Supremacy Clause, reinforcing federal authority over state sovereignty.",
      distractorTip: "Associate John Marshall with 'judicial nationalism'—consistently strengthening federal supremacy, contracts, and interstate commerce over state legislation."
    }
  },
  {
    levelKey: "ush-p4-l3",
    question: {
      id: "ush4-l3-q3",
      stem: "The Hartford Convention of 1814 resulted in the permanent demise of the Federalist Party primarily because:",
      options: [
        "Federalist delegates voted unanimously to abolish all state militias in New England.",
        "Federalist leaders were arrested and convicted of treason for providing weapons to the British army.",
        "The convention drafted an amendment requiring all presidents to be born in Virginia.",
        "Their secret deliberations—proposing constitutional amendments and hinting at New England secession—arrived in Washington just as news of Jackson's victory at New Orleans and the Treaty of Ghent sparked nationalistic euphoria, painting Federalists as unpatriotic traitors."
      ],
      correctIndex: 3,
      explanation: "At Hartford, moderate Federalists voiced frustration over the embargo and War of 1812; arriving in Washington right after Andrew Jackson's triumphant victory at New Orleans, their grievances appeared disloyal, destroying the party's national credibility.",
      distractorTip: "The demise of the Federalists ushered in the one-party 'Era of Good Feelings' under Democratic-Republican James Monroe."
    }
  },
  {
    levelKey: "ush-p4-l4",
    question: {
      id: "ush4-l4-q3",
      stem: "The Missouri Compromise of 1820, engineered by Henry Clay, temporarily eased sectional conflict over slavery expansion by:",
      options: [
        "Admitting Missouri as a slave state and Maine as a free state, while prohibiting slavery in the remainder of the Louisiana Purchase territory north of latitude 36°30'.",
        "Permitting popular sovereignty to determine slavery's legal status in all newly admitted western territories.",
        "Abolishing the domestic interstate slave trade throughout the United States.",
        "Requiring all enslaved people in Missouri to be emancipated upon reaching age twenty-five."
      ],
      correctIndex: 0,
      explanation: "Clay's compromise preserved the 11-to-11 balance in the US Senate by admitting Maine (free) and Missouri (slave), drawing the 36°30' parallel across the Louisiana Purchase as the boundary between slave and free territories.",
      distractorTip: "Thomas Jefferson called the Missouri controversy a 'fire bell in the night,' recognizing that geographic lines dividing the nation over slavery would eventually tear the Union apart."
    }
  },
  {
    levelKey: "ush-p4-l5",
    question: {
      id: "ush4-l5-q3",
      stem: "How did the completion of the Erie Canal in 1825 transform the regional and economic geography of the United States?",
      options: [
        "It connected the Gulf of Mexico directly to the Pacific Ocean across Central America.",
        "It tied the agricultural commerce of the Old Northwest directly to eastern financial markets via New York City, bypassing southern Mississippi river trade and cementing a northern economic axis.",
        "It led to the immediate economic collapse of all eastern manufacturing centers.",
        "It was funded exclusively by British royal investors who owned the toll rights for fifty years."
      ],
      correctIndex: 1,
      explanation: "The Erie Canal linked Lake Erie to the Hudson River, dropping freight costs by 90% and making New York City the nation's premier port, while economically binding midwestern farmers to northeastern urban markets.",
      distractorTip: "The Erie Canal solidified the North-West economic alliance, leaving the South increasingly isolated in its reliance on King Cotton and river trade down to New Orleans."
    }
  },
  {
    levelKey: "ush-p4-l6",
    question: {
      id: "ush4-l6-q3",
      stem: "How did the \"Lowell System\" in early nineteenth-century Massachusetts textile manufacturing differ from traditional family artisan workshops?",
      options: [
        "It employed exclusively male convict laborers under armed military supervision.",
        "It outsourced all spinning and weaving to remote agrarian homesteads through the \"putting-out\" system.",
        "It centralized all stages of cloth production under one roof and recruited young, unmarried farm daughters, housing them in supervised company boardinghouses.",
        "It prohibited the use of water-powered or steam-powered machinery."
      ],
      correctIndex: 2,
      explanation: "Francis Cabot Lowell established mechanized textile mills that employed young New England farm women ('Lowell mill girls'), providing wages, educational lectures, and company dormitories, marking the transition from artisan craftwork to industrial wage labor.",
      distractorTip: "By the 1840s and 1850s, mill owners replaced native farm girls with cheaper, desperate Irish immigrant laborers who worked for lower wages under worsening conditions."
    }
  },
  {
    levelKey: "ush-p4-l7",
    question: {
      id: "ush4-l7-q3",
      stem: "In his South Carolina Exposition and Protest (1828), John C. Calhoun defended the doctrine of nullification by arguing that:",
      options: [
        "The President possessed the constitutional power to dissolve state legislatures during economic crises.",
        "The Supreme Court had sole jurisdiction over the validity of federal protective tariffs.",
        "The Constitution was an irrevocable, perpetual contract that subordinated all state laws to federal supremacy.",
        "The Union was a compact among sovereign states, and a state convention could declare an unconstitutional federal law (such as the Tariff of Abominations) null and void within its borders."
      ],
      correctIndex: 3,
      explanation: "Outraged by the high protective Tariff of 1828 ('Tariff of Abominations'), Calhoun drew upon Jefferson and Madison's Virginia and Kentucky Resolutions to argue that states retained ultimate sovereignty and could nullify federal laws that injured their regional interests.",
      distractorTip: "Jackson fiercely opposed Calhoun, asserting that nullification was incompatible with the Union and treasonous, threatening to use federal troops (Force Bill)."
    }
  },
  {
    levelKey: "ush-p4-l8",
    question: {
      id: "ush4-l8-q3",
      stem: "In Worcester v. Georgia (1832), the Supreme Court under Chief Justice John Marshall ruled that:",
      options: [
        "The Cherokee Nation was a distinct political community in which the laws of Georgia had no force, meaning individual states could not seize Cherokee land or regulate tribal affairs.",
        "The state of Georgia had the constitutional right to unilaterally abolish Cherokee tribal sovereignty.",
        "Indigenous peoples could not file lawsuits in federal courts because they were not United States citizens.",
        "Andrew Jackson was legally required to execute tribal leaders who refused to sign removal treaties."
      ],
      correctIndex: 0,
      explanation: "Marshall ruled that Indian nations were 'domestic dependent nations' entitled to federal treaty protection against state usurpation; however, Andrew Jackson refused to enforce the ruling, leading directly to the forced removal known as the Trail of Tears (1838–1839).",
      distractorTip: "Remember Jackson's apocryphal remark: 'John Marshall has made his decision; now let him enforce it,' illustrating the limits of judicial review when the executive branch refuses to comply."
    }
  },
  {
    levelKey: "ush-p4-l9",
    question: {
      id: "ush4-l9-q3",
      stem: "American Transcendentalists such as Ralph Waldo Emerson and Henry David Thoreau reacted against the Market Revolution and Enlightenment rationalism by emphasizing:",
      options: [
        "Strict adherence to traditional Puritan orthodoxy and predestination.",
        "Individual intuition, self-reliance, spiritual communion with nature, and moral resistance to social injustices like slavery.",
        "The absolute supremacy of industrial factory mechanization and corporate wealth accumulation.",
        "The immediate abandonment of all rural living in favor of dense urban tenement dwelling."
      ],
      correctIndex: 1,
      explanation: "Transcendentalism celebrated the divinity of the individual soul and nature (Emerson's 'Self-Reliance,' Thoreau's 'Walden'); Thoreau also practiced nonviolent civil disobedience ('Resistance to Civil Government') by refusing to pay taxes supporting the Mexican-American War and slavery.",
      distractorTip: "Thoreau's essay on Civil Disobedience directly influenced later reformers, including Mohandas Gandhi and Martin Luther King Jr."
    }
  },
  {
    levelKey: "ush-p4-l10",
    question: {
      id: "ush4-l10-q3",
      stem: "At the 1848 Seneca Falls Convention, organized by Elizabeth Cady Stanton and Lucretia Mott, the Declaration of Sentiments was modeled deliberately upon:",
      options: [
        "The United States Constitution's Preamble.",
        "The Articles of Confederation.",
        "The Declaration of Independence, boldly asserting that \"all men and women are created equal\" and demanding women's right to vote.",
        "Thomas Paine's Common Sense."
      ],
      correctIndex: 2,
      explanation: "Stanton echoed Jefferson's words to expose the hypocrisy of American democracy, detailing a 'long train of abuses and usurpations' by men over women in law, marriage, property, education, and the ballot.",
      distractorTip: "The demand for women's suffrage (the vote) was the most controversial resolution at Seneca Falls, passing only after Frederick Douglass spoke passionately in its favor."
    }
  },
  {
    levelKey: "ush-p4-l11",
    question: {
      id: "ush4-l11-q3",
      stem: "How did the democratization of American politics during the \"Age of Jackson\" (1820s–1840s) contrast with the political status of women and racial minorities?",
      options: [
        "Universal voting rights were granted to all adult citizens regardless of race, gender, or property ownership.",
        "Southern states granted property-owning free Black men full equal representation in state legislatures.",
        "Native Americans were incorporated into state political parties and elected as congressional delegates.",
        "While property qualifications were eliminated for white men (universal white male suffrage), women remained disenfranchised, and free Black men faced disenfranchisement in states where they had previously voted."
      ],
      correctIndex: 3,
      explanation: "Jacksonian democracy dramatically expanded popular political participation for white men of all economic classes, but this democratization went hand-in-hand with heightened racial and gender boundaries, stripping voting rights from free Black men across northern states like New York and Pennsylvania.",
      distractorTip: "APUSH emphasizes this crucial historical paradox: the expansion of democratic rights for white men coincided with the legal hardening of racial caste and gender exclusion."
    }
  },

  // --- PERIOD 5: 1844–1877 (9 levels) ---
  {
    levelKey: "ush-p5-l1",
    question: {
      id: "ush5-l1-q3",
      stem: "What was the primary objective of the Wilmot Proviso, introduced in the House of Representatives during the Mexican-American War in 1846?",
      options: [
        "To prohibit slavery in any territory acquired from the Republic of Mexico.",
        "To annex all Mexican territory south to the Isthmus of Panama as slave states.",
        "To repeal the Missouri Compromise and open Maine to slavery.",
        "To force Mexico to pay $100 million in gold reparations to the United States."
      ],
      correctIndex: 0,
      explanation: "Pennsylvania Democrat David Wilmot proposed that slavery be banned in any land taken from Mexico; though it passed the House repeatedly, southern senators blocked it, polarizing national politics along purely sectional lines.",
      distractorTip: "The Wilmot Proviso demonstrated that westward expansion inevitably reignited the explosive question of slavery's extension into the territories."
    }
  },
  {
    levelKey: "ush-p5-l2",
    question: {
      id: "ush5-l2-q3",
      stem: "Which component of the Compromise of 1850 generated the fiercest, most enduring outrage and resistance throughout the Northern states?",
      options: [
        "The admission of California as a free state.",
        "The new Fugitive Slave Act, which stripped accused runaways of jury trials, compelled northern citizens to assist in slave-catching, and denied them the right to testify.",
        "The abolition of the slave trade in Washington, D.C.",
        "The assumption of Texas's public debt by the federal government."
      ],
      correctIndex: 1,
      explanation: "The Fugitive Slave Act brought the brutality of slavery directly into northern towns; northern states responded by passing 'personal liberty laws,' crowds obstructed federal marshals (e.g., Anthony Burns case), and Harriet Beecher Stowe was inspired to write Uncle Tom's Cabin (1852).",
      distractorTip: "Southerners who normally championed states' rights demanded aggressive federal power to enforce the Fugitive Slave Act in northern free states."
    }
  },
  {
    levelKey: "ush-p5-l3",
    question: {
      id: "ush5-l3-q3",
      stem: "How did Stephen Douglas's 1854 Kansas-Nebraska Act directly cause the collapse of the Second Party System and the birth of the Republican Party?",
      options: [
        "It banned all political campaigning in federal territories.",
        "It required all Whigs and Democrats to merge into a single national coalition.",
        "It repealed the sacred 36°30' Missouri Compromise line by applying popular sovereignty to lands north of the line, outraging northern Whigs, Free-Soilers, and anti-slavery Democrats who united to form the Republican Party.",
        "It made Kansas an automatic slave state without a territorial referendum."
      ],
      correctIndex: 2,
      explanation: "Douglas wanted a transcontinental railroad terminating in Chicago and needed southern support to organize Nebraska territory; repealing the 1820 Missouri Compromise ban on northern slavery destroyed the national Whig Party and sparked the creation of the anti-extensionist Republican Party.",
      distractorTip: "The core platform of the newly formed Republican Party was 'Free Soil, Free Labor, Free Men'—halting the expansion of slavery into federal territories, not immediate southern abolition."
    }
  },
  {
    levelKey: "ush-p5-l4",
    question: {
      id: "ush5-l4-q3",
      stem: "In the infamous 1857 Dred Scott v. Sandford ruling, Chief Justice Roger B. Taney held that:",
      options: [
        "Enslaved persons became free immediately upon setting foot in any northern state.",
        "The Fugitive Slave Act was unconstitutional because it violated state sovereignty.",
        "Popular sovereignty was the only legal method to determine the status of slavery in federal territories.",
        "Black people—whether enslaved or free—were not citizens and had \"no rights which the white man was bound to respect,\" and that Congress had no constitutional power to prohibit slavery in any federal territory."
      ],
      correctIndex: 3,
      explanation: "Taney declared that the Fifth Amendment protected slaveholders' property rights in all territories, rendering the Missouri Compromise unconstitutional and declaring that Black Americans could never be US citizens, shocking northern public opinion and radicalizing the sectional divide.",
      distractorTip: "The Dred Scott ruling effectively declared the core Republican platform (banning slavery in the territories) unconstitutional, convincing northerners of a conspiratorial 'Slave Power' dominating the federal government."
    }
  },
  {
    levelKey: "ush-p5-l5",
    question: {
      id: "ush5-l5-q3",
      stem: "The dual Union victories at Gettysburg and Vicksburg in July 1863 were decisive in the Civil War because:",
      options: [
        "Gettysburg ended Robert E. Lee's last invasion of the North, while Vicksburg gave the Union complete control of the Mississippi River, severing the Confederacy in two.",
        "They prompted Great Britain and France to officially enter the war as Confederate allies.",
        "They forced Confederate President Jefferson Davis to unconditionally surrender all southern armies immediately.",
        "They resulted in the capture of the Confederate capital of Richmond, Virginia."
      ],
      correctIndex: 0,
      explanation: "Lee lost a third of his army at Gettysburg and was permanently thrown on the defensive; simultaneously, Ulysses S. Grant's siege of Vicksburg split Texas, Arkansas, and Louisiana from the rest of the Confederacy, fulfilling the western prong of the Anaconda Plan.",
      distractorTip: "July 1863 was the military turning point of the war; after these twin defeats, the Confederacy could only hope to prolong the war until northern war weariness forced a negotiated peace."
    }
  },
  {
    levelKey: "ush-p5-l6",
    question: {
      id: "ush5-l6-q3",
      stem: "Lincoln's Emancipation Proclamation (issued January 1, 1863) altered the fundamental nature of the Civil War by:",
      options: [
        "Freeing all enslaved individuals in every state, including the loyal border states of Maryland and Kentucky.",
        "Transforming the Union war effort into a moral crusade against slavery, authorizing the recruitment of Black soldiers into the Union army, and diplomatically preventing British or French recognition of the Confederacy.",
        "Offering federal cash compensation to all southern slaveholders who surrendered peacefully.",
        "Revoking the US Constitution and instituting permanent military tribunals across the South."
      ],
      correctIndex: 1,
      explanation: "Lincoln used his war powers to free enslaved persons only in areas in active rebellion; this kept loyal border states in the Union, paved the way for nearly 200,000 African American soldiers and sailors to fight for freedom, and made European intervention on behalf of the slaveholding South politically impossible.",
      distractorTip: "The Emancipation Proclamation did NOT free enslaved people in the loyal Union border states (Delaware, Maryland, Kentucky, Missouri); complete constitutional abolition required the 13th Amendment in 1865."
    }
  },
  {
    levelKey: "ush-p5-l7",
    question: {
      id: "ush5-l7-q3",
      stem: "The Fourteenth Amendment (1868) transformed the American constitutional framework most fundamentally by:",
      options: [
        "Granting women the right to vote in all federal elections.",
        "Authorizing individual states to secede from the Union during peacetime.",
        "Establishing birthright citizenship and prohibiting states from depriving any person of life, liberty, or property without due process of law or denying equal protection of the laws.",
        "Eliminating all federal income and property taxes nationwide."
      ],
      correctIndex: 2,
      explanation: "To overturn the Dred Scott decision and invalidate southern 'Black Codes,' Congress passed the 14th Amendment; its Due Process and Equal Protection clauses fundamentally shifted the balance of power, making the federal government the protector of individual civil rights against state infringement.",
      distractorTip: "The Reconstruction Amendments are the 'Second Founding': 13th (Abolition), 14th (Citizenship & Equal Protection), and 15th (Black male voting rights)."
    }
  },
  {
    levelKey: "ush-p5-l8",
    question: {
      id: "ush5-l8-q3",
      stem: "Reconstruction came to a formal political end following the disputed presidential election of 1876 when the \"Compromise of 1877\" resulted in:",
      options: [
        "The impeachment and removal of President Ulysses S. Grant from office.",
        "The immediate re-enslavement of all freedpeople across the Deep South.",
        "The permanent division of the United States into two separate sovereign nations.",
        "Republican Rutherford B. Hayes being awarded the presidency in exchange for the complete withdrawal of all remaining federal troops from the South, abandoning Black civil rights to white Democratic \"Redeemers.\""
      ],
      correctIndex: 3,
      explanation: "With 20 disputed electoral votes, an informal backroom deal gave Hayes the White House in exchange for removing federal troops protecting Republican state governments in Louisiana and South Carolina; without military backing, white supremacist Redeemer governments took over, ushering in the Jim Crow era.",
      distractorTip: "The Compromise of 1877 showed that northern political willpower to protect Black civil rights had evaporated in the face of economic depression and southern white paramilitary violence."
    }
  },
  {
    levelKey: "ush-p5-l9",
    question: {
      id: "ush5-l9-q3",
      stem: "Following the Civil War, the widespread transition of formerly enslaved African Americans into the system of agricultural sharecropping meant that:",
      options: [
        "Freedpeople gained autonomy from direct gang-labor supervision, but were trapped in an exploitative cycle of endless debt to white landowners and merchant credit stores (crop-lien system).",
        "Most freedpeople quickly accumulated cash savings and purchased large independent family estates.",
        "Southern agriculture was entirely replaced by mechanized manufacturing factories.",
        "African Americans were guaranteed equal legal representation on all county agricultural boards."
      ],
      correctIndex: 0,
      explanation: "Lacking land of their own after the failure of '40 acres and a mule,' freed families rented small parcels in exchange for sharing a percentage of the crop; high interest rates charged by local merchants under the crop-lien system left most sharecroppers in perpetual debt peonage.",
      distractorTip: "Sharecropping gave freedpeople some domestic independence from daily white overseers, but economically locked them into poverty and dependent tenancy."
    }
  },

  // --- PERIOD 6: 1865–1898 (8 levels) ---
  {
    levelKey: "ush-p6-l1",
    question: {
      id: "ush6-l1-q3",
      stem: "The Pacific Railway Act of 1862 and the Homestead Act of 1862 demonstrate which major Civil War-era economic policy of the Republican-controlled federal government?",
      options: [
        "The strict limitation of all federal government intervention in the economy to preserve states' rights.",
        "The proactive use of federal authority—through massive land grants, subsidies, and free 160-acre homesteads—to accelerate western settlement, market integration, and economic development.",
        "The prohibition of private corporate railroad monopolies west of the Mississippi River.",
        "The immediate reservation of all western public lands exclusively for Indigenous tribal nations."
      ],
      correctIndex: 1,
      explanation: "With southern Democrats absent during the Civil War, Republicans enacted their neo-Hamiltonian economic program: the Homestead Act gave 160 acres to settlers willing to farm it for five years, while the Pacific Railway Act gave millions of acres in alternating land grants to corporate rail companies to build the transcontinental railroad.",
      distractorTip: "Republican wartime legislation (Homestead Act, Pacific Railway Act, Morrill Land-Grant College Act, National Banking Act) fundamentally shaped modern American industrial capitalism."
    }
  },
  {
    levelKey: "ush-p6-l2",
    question: {
      id: "ush6-l2-q3",
      stem: "The Dawes Severalty Act of 1887 was designed by federal policymakers primarily to:",
      options: [
        "Grant sovereign independence and territorial immunity to all western Indigenous reservations.",
        "Force all Indigenous people to relocate to urban industrial factories in Chicago and New York.",
        "Assimilation of Native Americans into mainstream white society by breaking up communal tribal lands into individual 160-acre family allotments and selling \"surplus\" lands to white settlers.",
        "Prohibit Christian missionary schools on reservations."
      ],
      correctIndex: 2,
      explanation: "The Dawes Act sought to eradicate tribal identity and communal landholding, turning Native Americans into individual yeoman farmers; in practice, it was disastrous, stripping tribes of over 86 million acres (nearly two-thirds of their reservation land) between 1887 and 1934.",
      distractorTip: "The Dawes Act paired forced individual land allotment with cultural assimilation programs like off-reservation Indian boarding schools (e.g., Carlisle: 'Kill the Indian, Save the Man')."
    }
  },
  {
    levelKey: "ush-p6-l3",
    question: {
      id: "ush6-l3-q3",
      stem: "How did the Supreme Court's ruling in Plessy v. Ferguson (1896) entrench the Jim Crow system across the American South?",
      options: [
        "By declaring that the Fourteenth Amendment prohibited any racial separation in privately owned businesses.",
        "By mandating the integration of all public school systems nationwide.",
        "By striking down all southern poll taxes and literacy tests as unconstitutional violations of the Fifteenth Amendment.",
        "By establishing the \"separate but equal\" doctrine, ruling that racial segregation in public accommodations did not violate the Fourteenth Amendment's Equal Protection Clause as long as facilities were ostensibly equal."
      ],
      correctIndex: 3,
      explanation: "Homer Plessy challenged Louisiana's segregated train car law; the Court ruled 7–1 that the 14th Amendment guaranteed political equality, not social equality, giving constitutional sanction to state-mandated segregation across schools, transport, and restrooms until overturned in 1954.",
      distractorTip: "Justice John Marshall Harlan wrote the lone famous dissent, prophetically warning that 'our Constitution is color-blind' and that the decision would stimulate aggressions on Black rights."
    }
  },
  {
    levelKey: "ush-p6-l4",
    question: {
      id: "ush6-l4-q3",
      stem: "Andrew Carnegie's 1889 essay \"The Gospel of Wealth\" argued that:",
      options: [
        "Wealthy industrial capitalists possessed a moral and social obligation to administer their surplus fortunes during their lifetimes for the public good (e.g., libraries, universities, concert halls) rather than leaving it to heirs or the state.",
        "Government should confiscate all private wealth and redistribute it equally among factory workers.",
        "God ordained that rich men should hoard their money and never donate to charitable causes.",
        "Labor unions should own and manage all industrial steel mills collectively."
      ],
      correctIndex: 0,
      explanation: "Carnegie defended the concentration of capital as an inevitable result of free-market competition, but insisted that the man of wealth was merely a trustee for his poorer brethren, famously stating that 'the man who dies thus rich dies disgraced.'",
      distractorTip: "Carnegie believed in philanthropy that helped people help themselves (libraries, education), not direct handouts to the poor."
    }
  },
  {
    levelKey: "ush-p6-l5",
    question: {
      id: "ush6-l5-q3",
      stem: "How did the violent 1886 Haymarket Square bombing in Chicago affect the American labor movement?",
      options: [
        "It persuaded the federal government to immediately legalize the eight-hour workday nationwide.",
        "It led the public and corporate press to unfairly associate labor unions—particularly the inclusive Knights of Labor—with radical violent anarchism, causing the rapid decline of the Knights.",
        "It united all American industrial workers into a single socialist political party.",
        "It caused business owners to willingly accept collective bargaining contracts."
      ],
      correctIndex: 1,
      explanation: "While striking for an eight-hour day at the McCormick Reaper plant, a bomb was thrown during a peaceful rally at Haymarket, killing police officers; employers used the tragedy to brand the Knights of Labor as dangerous foreign anarchists, driving workers into the more conservative American Federation of Labor (AFL).",
      distractorTip: "Samuel Gompers's AFL learned from Haymarket: unlike the Knights of Labor, the AFL focused on skilled white male workers and 'bread-and-butter' unionism (higher wages, fewer hours) rather than broad political reform."
    }
  },
  {
    levelKey: "ush-p6-l6",
    question: {
      id: "ush6-l6-q3",
      stem: "How did urban settlement houses, such as Jane Addams's Hull House founded in Chicago in 1889, address the challenges faced by \"New Immigrants\"?",
      options: [
        "By advocating for federal legislation to deport all foreign-born laborers immediately.",
        "By operating private commercial banks that charged high interest on home mortgages.",
        "By providing immigrant communities with English classes, childcare, kindergarten, job training, and cultural programs, while lobbying for municipal child labor and sanitation reforms.",
        "By requiring all immigrant residents to convert to the Presbyterian Church."
      ],
      correctIndex: 2,
      explanation: "Settlement houses were run by educated, middle-class women who lived in immigrant neighborhoods, offering social services, community support, and spearheading early sociological research that drove Progressive municipal reforms.",
      distractorTip: "Jane Addams and the settlement house movement pioneered the modern profession of social work and demonstrated women's leadership in public reform."
    }
  },
  {
    levelKey: "ush-p6-l7",
    question: {
      id: "ush6-l7-q3",
      stem: "The Populist (People's) Party's 1892 Omaha Platform demanded which radical economic policy designed to alleviate crushing agrarian debt?",
      options: [
        "The complete replacement of all paper currency with British gold sovereigns.",
        "The privatization of all public schools and postal service routes.",
        "High protective tariffs on agricultural farm equipment imported from Canada.",
        "The unlimited, free coinage of silver at a ratio of 16 to 1 to increase the money supply, cause inflation, and ease debt burdens on western and southern farmers."
      ],
      correctIndex: 3,
      explanation: "Farmers faced falling crop prices and deflation under the gold standard; the Populists demanded 'Free Silver' to inflate the currency, along with government ownership of railroads/telegraphs, a graduated income tax, direct election of senators, and an eight-hour workday.",
      distractorTip: "William Jennings Bryan famously championed the Populist monetary platform in his 1896 'Cross of Gold' speech ('You shall not crucify mankind upon a cross of gold')."
    }
  },
  {
    levelKey: "ush-p6-l8",
    question: {
      id: "ush6-l8-q3",
      stem: "What primary strategy did John D. Rockefeller's Standard Oil utilize to achieve near-total monopoly control over the American petroleum refining industry by the 1880s?",
      options: [
        "Horizontal integration—buying out, undercutting, and absorbing rival oil refineries to control over 90% of refining capacity—combined with railroad rebate collusion.",
        "Relying exclusively on small, independent artisan cooperatives in Pennsylvania.",
        "Selling all corporate refinery assets to European state monopolies.",
        "Refusing to utilize any kerosene or gasoline refining technology."
      ],
      correctIndex: 0,
      explanation: "Rockefeller pioneered horizontal integration (merging with or eliminating competitors at the same stage of production) and used secretive railroad rebates to crush rivals; later, he integrated vertically (pipelines, barrels, tanker cars) and formed the Standard Oil Trust.",
      distractorTip: "Distinguish horizontal integration (controlling all competitors in one industry, like Rockefeller's refineries) from vertical integration (controlling every phase from raw material to finished product, like Carnegie's iron ore mines, rail cars, and steel mills)."
    }
  },

  // --- PERIOD 7: 1890–1945 (11 levels) ---
  {
    levelKey: "ush-p7-l1",
    question: {
      id: "ush7-l1-q3",
      stem: "Prominent members of the American Anti-Imperialist League, such as Mark Twain, Jane Addams, and Andrew Carnegie, opposed the annexation of the Philippines in 1898 primarily because:",
      options: [
        "They believed the Spanish Empire should retain all its Caribbean and Pacific colonies.",
        "They argued that subjugating a foreign people without their consent violated the fundamental democratic principles of the Declaration of Independence and the Constitution.",
        "They wanted the United States to annex Canada instead of Pacific islands.",
        "They feared that sugar imported from the Philippines would destroy American corn farming."
      ],
      correctIndex: 1,
      explanation: "Anti-imperialists argued that imperialism was fundamentally hypocritical for a nation born out of an anti-colonial revolution, warning that ruling overseas colonies without granting citizenship would erode constitutional republicanism at home.",
      distractorTip: "The annexation of the Philippines triggered the brutal Philippine-American War (1899–1902), where Filipino nationalist Emilio Aguinaldo fought American occupation forces."
    }
  },
  {
    levelKey: "ush-p7-l2",
    question: {
      id: "ush7-l2-q3",
      stem: "How did Theodore Roosevelt's \"Roosevelt Corollary\" to the Monroe Doctrine alter United States foreign policy in Latin America?",
      options: [
        "It renounced all future US military intervention in the Western Hemisphere.",
        "It required Latin American nations to sign mutual defense treaties with Great Britain.",
        "It asserted that chronic wrongdoing or financial instability in Latin American nations would compel the United States to act as an \"international police power\" to intervene and maintain order.",
        "It recognized the sovereignty of the Russian Empire in Central America."
      ],
      correctIndex: 2,
      explanation: "Roosevelt expanded the 1823 Monroe Doctrine: whereas Monroe told Europe to stay out, Roosevelt declared that the US would preemptively intervene militarily in Latin American nations (e.g., Dominican Republic, Cuba) to collect debts and prevent European intervention.",
      distractorTip: "The Roosevelt Corollary transformed the Monroe Doctrine from a defensive shield against European recolonization into an aggressive justification for US military intervention in the Caribbean and Central America."
    }
  },
  {
    levelKey: "ush-p7-l3",
    question: {
      id: "ush7-l3-q3",
      stem: "Upton Sinclair's 1906 muckraking novel The Jungle directly catalyzed the passage of which landmark federal consumer protection legislation?",
      options: [
        "The Federal Reserve Act of 1913.",
        "The Clayton Antitrust Act of 1914.",
        "The Social Security Act of 1935.",
        "The Pure Food and Drug Act and the Meat Inspection Act of 1906."
      ],
      correctIndex: 3,
      explanation: "Sinclair intended to arouse sympathy for exploited immigrant workers in Chicago meatpacking plants ('I aimed at the public's heart, and by accident I hit it in the stomach'); the horrific descriptions of contaminated meat sickened President Theodore Roosevelt and the public, leading directly to federal food safety regulation.",
      distractorTip: "Muckrakers like Sinclair, Ida Tarbell (Standard Oil), and Jacob Riis (urban slums) used investigative journalism to expose corporate abuses and spur Progressive legislative action."
    }
  },
  {
    levelKey: "ush-p7-l4",
    question: {
      id: "ush7-l4-q3",
      stem: "The Federal Reserve Act of 1913, signed into law by Woodrow Wilson, restructured the American banking system by:",
      options: [
        "Creating a decentralized central bank with twelve regional Federal Reserve Banks and a presidential board, empowered to regulate the money supply and adjust interest rates.",
        "Returning the United States to a strict, unbacked silver monetary standard.",
        "Transferring all private savings accounts directly into the US Treasury.",
        "Eliminating all private commercial banking across the United States."
      ],
      correctIndex: 0,
      explanation: "Following the Panic of 1907, the Federal Reserve System was created to provide an 'elastic currency' capable of expanding and contracting with economic needs, stabilizing the banking system while serving as a lender of last resort.",
      distractorTip: "The Federal Reserve represents a classic Progressive Era reform: creating non-partisan expert regulatory bodies to stabilize the market economy without abolishing capitalism."
    }
  },
  {
    levelKey: "ush-p7-l5",
    question: {
      id: "ush7-l5-q3",
      stem: "In the landmark wartime civil liberties case Schenck v. United States (1919), the Supreme Court upheld the conviction of Charles Schenck under the Espionage Act by establishing which legal doctrine?",
      options: [
        "That the First Amendment guarantees absolute freedom of speech without any exceptions during wartime.",
        "That freedom of speech can be restricted if the words spoken or printed create a \"clear and present danger\" of bringing about substantive evils that Congress has a right to prevent (such as insubordination in the armed forces).",
        "That state governments are exempt from complying with the Bill of Rights.",
        "That draft resisters are entitled to immediate federal judicial pardons."
      ],
      correctIndex: 1,
      explanation: "Justice Oliver Wendell Holmes Jr. wrote that speech is not protected when it creates a 'clear and present danger,' famously analogizing Schenck's anti-draft pamphlets to 'falsely shouting fire in a theatre and causing a panic.'",
      distractorTip: "During periods of war and national crisis, the federal government has repeatedly restricted civil liberties (e.g., Alien & Sedition Acts 1798, Lincoln's suspension of habeas corpus, Espionage Act 1917, Japanese American internment)."
    }
  },
  {
    levelKey: "ush-p7-l6",
    question: {
      id: "ush7-l6-q3",
      stem: "Why did the United States Senate—led by \"Reservationist\" Senator Henry Cabot Lodge—ultimately refuse to ratify the 1919 Treaty of Versailles?",
      options: [
        "Because the treaty gave all German overseas colonies directly to the United States.",
        "Because Woodrow Wilson refused to include the Fourteen Points in the final document.",
        "Because Article X of the League of Nations covenant was seen as obligating the United States to defend member nations, thereby undermining Congress's constitutional power to declare war.",
        "Because the treaty failed to demand sufficient gold reparations from Imperial Germany."
      ],
      correctIndex: 2,
      explanation: "Lodge and the Reservationists feared Article X's collective security clause would entangle the US in foreign conflicts without congressional approval; Wilson refused to compromise on amendments, causing the Senate to reject the treaty and keeping the US out of the League of Nations.",
      distractorTip: "The defeat of the Treaty of Versailles marked the return of the United States to an isolationist foreign policy stance during the interwar 1920s and 1930s."
    }
  },
  {
    levelKey: "ush-p7-l7",
    question: {
      id: "ush7-l7-q3",
      stem: "The 1925 Scopes \"Monkey Trial\" in Dayton, Tennessee, dramatized which profound cultural conflict of the 1920s?",
      options: [
        "The conflict between labor unions and Wall Street financiers over the eight-hour day.",
        "The diplomatic rivalry between the United States and the League of Nations.",
        "The debate over whether to construct intermodal transcontinental highway systems.",
        "The cultural clash between traditional Christian religious fundamentalism and modern scientific secularism over the teaching of Darwinian biological evolution in public schools."
      ],
      correctIndex: 3,
      explanation: "Biology teacher John T. Scopes was tried for violating Tennessee's Butler Act; the clash between defense attorney Clarence Darrow and fundamentalist prosecutor William Jennings Bryan was broadcast on national radio, highlighting the cultural divide between urban modernism and rural traditionalism.",
      distractorTip: "The 1920s were characterized by cultural polarization: modernity/jazz/consumerism vs. Prohibition, the resurgence of the KKK, the Scopes Trial, and nativist immigration quotas."
    }
  },
  {
    levelKey: "ush-p7-l8",
    question: {
      id: "ush7-l8-q3",
      stem: "How did President Herbert Hoover's core political philosophy of \"rugged individualism\" and voluntary cooperation shape his administration's initial response to the Great Depression?",
      options: [
        "He resisted direct federal cash relief or welfare payments to unemployed citizens, believing it would destroy self-reliance and municipal charity, relying instead on voluntary business pledges and limited emergency loans (Reconstruction Finance Corporation).",
        "He immediately nationalized all private commercial banks and instituted universal basic income.",
        "He forced all unemployed workers into mandatory federal military service.",
        "He dissolved the federal income tax and abolished all protective tariffs on foreign goods."
      ],
      correctIndex: 0,
      explanation: "Hoover believed in associative state capitalism and feared that direct federal 'doles' would undermine American character; while he eventually established the RFC in 1932 to loan funds to banks and railroads, his refusal to provide direct federal relief led the public to view him as callous and out of touch.",
      distractorTip: "Public anger at Hoover crystallized in shantytowns called 'Hoovervilles' and the violent routing of the World War I 'Bonus Army' veterans from Washington in 1932."
    }
  },
  {
    levelKey: "ush-p7-l9",
    question: {
      id: "ush7-l9-q3",
      stem: "The National Labor Relations Act of 1935 (Wagner Act) fundamentally reshaped American industrial relations by:",
      options: [
        "Declaring all labor strikes and picketing to be federal crimes during peacetime.",
        "Guaranteeing workers the legal right to form labor unions, engage in collective bargaining through representatives of their own choosing, and establishing the National Labor Relations Board (NLRB) to police unfair labor practices.",
        "Banning private corporations from hiring any unionized employees.",
        "Transferring ownership of all American automobile factories to federal labor unions."
      ],
      correctIndex: 1,
      explanation: "Dubbed 'Labor's Magna Carta,' the Wagner Act provided federal protection for union organizing and collective bargaining, sparking a massive surge in industrial union membership under the newly formed Congress of Industrial Organizations (CIO).",
      distractorTip: "The Wagner Act was a cornerstone of FDR's Second New Deal, creating the powerful 'New Deal Coalition' of labor unions, urban working-class voters, minorities, and southern Democrats."
    }
  },
  {
    levelKey: "ush-p7-l10",
    question: {
      id: "ush7-l10-q3",
      stem: "The \"Double V\" Campaign, championed by the Pittsburgh Courier and other African American newspapers during World War II, called for:",
      options: [
        "Victory for the United States over both Nazi Germany and the Soviet Union simultaneously.",
        "The immediate desegregation of all public swimming pools in New York City.",
        "Victory over fascism abroad against the Axis powers and victory over racial segregation and discrimination at home in the United States.",
        "A double increase in the federal income tax to finance naval aircraft carriers."
      ],
      correctIndex: 2,
      explanation: "Black Americans mobilized for the war while enduring Jim Crow segregation in the military and homefront factories; the Double V campaign highlighted the hypocrisy of fighting fascism abroad while tolerating white supremacy at home, laying the direct groundwork for the postwar Civil Rights Movement.",
      distractorTip: "President Roosevelt responded to civil rights pressure (A. Philip Randolph's threatened March on Washington) by issuing Executive Order 8802, banning discrimination in defense industries."
    }
  },
  {
    levelKey: "ush-p7-l11",
    question: {
      id: "ush7-l11-q3",
      stem: "The Supreme Court's ruling in Korematsu v. United States (1944) is historically significant because the Court:",
      options: [
        "Declared President Roosevelt's Lend-Lease Act unconstitutional under Article I.",
        "Ordered the immediate desegregation of the United States Armed Forces during wartime.",
        "Struck down the wartime federal draft as an unconstitutional form of involuntary servitude.",
        "Upheld the constitutionality of Executive Order 9066 and the forced internment of over 120,000 Japanese Americans, ruling that military necessity justified the denial of constitutional rights during a national emergency."
      ],
      correctIndex: 3,
      explanation: "Despite zero evidence of espionage or sabotage by Japanese Americans, the Court ruled 6–3 that the exclusion and internment was a legitimate military measure, a decision later repudiated by the federal government when Congress formally apologized and paid reparations in the Civil Liberties Act of 1988.",
      distractorTip: "Korematsu is a landmark example of the Supreme Court failing to protect minority civil liberties during periods of wartime hysteria."
    }
  },

  // --- PERIOD 8: 1945–1980 (11 levels) ---
  {
    levelKey: "ush-p8-l1",
    question: {
      id: "ush8-l1-q3",
      stem: "What was the core strategic doctrine of \"containment\" formulated by American diplomat George F. Kennan in his 1947 \"Long Telegram\"?",
      options: [
        "The belief that Soviet communism was inherently expansionist and paranoid, requiring firm, long-term, patient resistance to prevent the spread of Soviet influence to new territories until internal contradictions collapsed the regime.",
        "The proposal to launch an immediate preemptive nuclear strike on Moscow to destroy the Soviet Union.",
        "The recommendation to surrender Western Europe to the Soviet Union in exchange for peace in Asia.",
        "The plan to eliminate all American military bases outside the continental United States."
      ],
      correctIndex: 0,
      explanation: "Kennan argued that the Soviet Union was ideologically committed to the destruction of capitalism but would retreat in the face of steady, vigilant counterforce; containment became the foundational premise of US Cold War foreign policy (Truman Doctrine, Marshall Plan, NATO).",
      distractorTip: "Contrast Kennan's 'containment' (holding the line against communist expansion) with the later Republican 'rollback' rhetoric of the 1950s (which was never actually implemented militarily due to nuclear risks)."
    }
  },
  {
    levelKey: "ush-p8-l2",
    question: {
      id: "ush8-l2-q3",
      stem: "The Servicemen's Readjustment Act of 1944 (GI Bill of Rights) transformed postwar American society and the economy by:",
      options: [
        "Forcing all returning World War II veterans to work on federal collective farms.",
        "Providing returning veterans with low-interest home mortgages, college tuition grants, and unemployment stipends, sparking a massive expansion of the American middle class and suburban homeownership.",
        "Banning veterans from purchasing consumer automobiles or suburban tract homes.",
        "Excluding all military personnel from receiving federal Social Security pensions."
      ],
      correctIndex: 1,
      explanation: "The GI Bill sent over 2 million veterans to colleges and universities and financed millions of suburban homes (such as Levittown), transforming the economy into a high-skill, homeowning middle-class society, although Black veterans frequently faced systemic discrimination from local banks and universities.",
      distractorTip: "The GI Bill fueled the postwar economic boom and the rise of the Sun Belt, while suburban housing covenants institutionalized racial segregation."
    }
  },
  {
    levelKey: "ush-p8-l3",
    question: {
      id: "ush8-l3-q3",
      stem: "In the landmark 1954 decision Brown v. Board of Education of Topeka, the Supreme Court under Chief Justice Earl Warren unanimously held that:",
      options: [
        "State governments could maintain segregated schools if they proved equal per-pupil spending.",
        "The Fourteenth Amendment did not apply to public education institutions.",
        "\"Separate educational facilities are inherently unequal,\" explicitly overturning Plessy v. Ferguson and declaring state-mandated racial segregation in public schools to be a violation of the Equal Protection Clause.",
        "School busing across county lines was unconstitutional under the Tenth Amendment."
      ],
      correctIndex: 2,
      explanation: "Thurgood Marshall and the NAACP Legal Defense Fund argued that psychological evidence proved segregation inflicted lasting harm on Black children; Warren wrote that segregating children based on race generates a feeling of inferiority, striking down the legal foundation of Jim Crow.",
      distractorTip: "Southern politicians resisted Brown with 'Massive Resistance,' issuing the 1956 Southern Manifesto and using state police to block integration, forcing Eisenhower to dispatch the 101st Airborne to Little Rock Central High School in 1957."
    }
  },
  {
    levelKey: "ush-p8-l4",
    question: {
      id: "ush8-l4-q3",
      stem: "President Dwight D. Eisenhower's \"New Look\" defense strategy relied primarily on which military concept to deter Soviet aggression while containing federal defense spending?",
      options: [
        "The rapid expansion of conventional infantry ground divisions across Western Europe.",
        "The total abolition of all nuclear weapons stockpiles through international treaties.",
        "The construction of thousands of surface-to-air missile silos along the Mexican border.",
        "\"Massive Retaliation\"—the threat to respond to any communist aggression with disproportionate nuclear strikes, coupled with expanded covert operations by the Central Intelligence Agency (CIA).",
      ],
      correctIndex: 3,
      explanation: "Eisenhower and Secretary of State John Foster Dulles sought 'more bang for the buck,' cutting expensive conventional army forces and relying on nuclear deterrence (Strategic Air Command) and CIA interventions (e.g., Iran 1953, Guatemala 1954) to combat communism.",
      distractorTip: "In his 1961 Farewell Address, Eisenhower warned the nation against the unprecedented influence of the 'military-industrial complex.'"
    }
  },
  {
    levelKey: "ush-p8-l5",
    question: {
      id: "ush8-l5-q3",
      stem: "What was the profound domestic political consequence of the 1968 Tet Offensive launched by the Viet Cong and North Vietnamese Army?",
      options: [
        "Although militarily a defeat for communist forces, it shattered the Johnson administration's claims that victory was near, creating a massive \"credibility gap\" and turning mainstream American public opinion against the war.",
        "It resulted in the immediate military capture of Washington, D.C. by North Vietnamese troops.",
        "It led Congress to unanimously pass a declaration of war against the Soviet Union.",
        "It persuaded Lyndon B. Johnson to run for a second full term as president."
      ],
      correctIndex: 0,
      explanation: "Tet exposed the contrast between official optimistic Pentagon briefings and the brutal reality shown on television (CBS anchor Walter Cronkite declared the war unwinnable); LBJ's approval ratings plunged, leading him to announce he would not seek reelection in 1968.",
      distractorTip: "Tet was the psychological turning point of the Vietnam War on the American homefront."
    }
  },
  {
    levelKey: "ush-p8-l6",
    question: {
      id: "ush8-l6-q3",
      stem: "The Voting Rights Act of 1965 dismantled decades of Jim Crow voter disenfranchisement primarily by:",
      options: [
        "Lowering the federal voting age from twenty-one to sixteen for all citizens.",
        "Outlawing literacy tests and providing for federal registrars and preclearance oversight for jurisdictions with a history of discriminatory voting practices.",
        "Requiring all citizens to pass an oral constitutional examination before voting.",
        "Banning the use of paper ballots in all state and federal elections."
      ],
      correctIndex: 1,
      explanation: "Signed by Lyndon B. Johnson following the Selma to Montgomery marches, the Voting Rights Act gave the federal government the power to enforce the 15th Amendment directly, dramatically increasing African American voter registration and election of Black officials across the South.",
      distractorTip: "The combination of the Civil Rights Act of 1964 (banning public segregation and workplace discrimination) and Voting Rights Act of 1965 dismantled the legal architecture of southern white supremacy."
    }
  },
  {
    levelKey: "ush-p8-l7",
    question: {
      id: "ush8-l7-q3",
      stem: "How did the Black Power movement, articulated in the late 1960s by figures like Stokely Carmichael and the Black Panther Party, diverge from the early Civil Rights Movement led by Martin Luther King Jr.?",
      options: [
        "By advocating for immediate political alliance with southern conservative white segregationists.",
        "By demanding that the United States surrender all federal authority to the United Nations.",
        "By moving beyond passive nonviolent integration toward racial pride, self-determination, community control of institutions, economic empowerment, and armed self-defense against police brutality.",
        "By rejecting all forms of community health clinics and free breakfast programs."
      ],
      correctIndex: 2,
      explanation: "Frustrated by persistent poverty, urban ghettoization, and white backlash despite legislative victories, Black Power advocates emphasized cultural pride ('Black is Beautiful'), economic independence, and armed self-defense, parting ways with King's nonviolent integrationism.",
      distractorTip: "Do not overlook the Black Panthers' community survival programs (free breakfast for school children, sickle-cell anemia testing), which existed alongside their militant rhetoric."
    }
  },
  {
    levelKey: "ush-p8-l8",
    question: {
      id: "ush8-l8-q3",
      stem: "The publication of Rachel Carson's Silent Spring in 1962 is widely credited with launching the modern environmental movement because it:",
      options: [
        "Urged the federal government to construct hundreds of offshore nuclear reactors.",
        "Denounced all renewable solar and wind energy research as economically unviable.",
        "Advocated for the immediate clear-cutting of all old-growth Pacific Northwest forests.",
        "Exposed the catastrophic ecological and health hazards of synthetic chemical pesticides like DDT, mobilizing public awareness and leading to the creation of the Environmental Protection Agency (EPA)."
      ],
      correctIndex: 3,
      explanation: "Carson documented how DDT bioaccumulated up the food chain, poisoning birds and contaminating human food supplies; despite furious pushback from the chemical industry, her book catalyzed the 1970 Earth Day, the ban on DDT, and the Clean Air and Clean Water Acts under President Nixon.",
      distractorTip: "Silent Spring is the quintessential text of modern environmentalism, showing that human industrial technology can disrupt delicate global ecological balances."
    }
  },
  {
    levelKey: "ush-p8-l9",
    question: {
      id: "ush8-l9-q3",
      stem: "In the 1962 Port Huron Statement, the founding document of Students for a Democratic Society (SDS), the New Left expressed its vision for American democracy by demanding:",
      options: [
        "\"Participatory democracy\"—the active involvement of individual citizens in the major social, economic, and political decisions that govern their lives, rather than passive submission to corporate and bureaucratic elites.",
        "The complete restoration of classical nineteenth-century laissez-faire capitalism.",
        "The immediate nuclear destruction of the Soviet Union and China.",
        "The prohibition of all rock music, peace marches, and college campus political debates."
      ],
      correctIndex: 0,
      explanation: "Drafted primarily by Tom Hayden, the Port Huron Statement critiqued the complacency, militarism, and racial bigotry of postwar America, rejecting both Soviet communism and corporate capitalism in favor of grass-roots participatory democracy.",
      distractorTip: "The New Left of the 1960s focused on civil rights, the anti-war movement, and institutional democratization, distinct from the traditional Old Left's singular focus on working-class unionism."
    }
  },
  {
    levelKey: "ush-p8-l10",
    question: {
      id: "ush8-l10-q3",
      stem: "The foreign policy breakthrough engineered by President Richard Nixon and National Security Advisor Henry Kissinger in 1972 known as \"détente\" was characterized by:",
      options: [
        "The unconditional withdrawal of the United States from all international treaties and alliances.",
        "A deliberate easing of Cold War tensions through diplomatic engagement, evidenced by Nixon's historic visit to Beijing and the signing of the Strategic Arms Limitation Treaty (SALT I) with the Soviet Union.",
        "The launch of a full-scale ground invasion of North Vietnam.",
        "The establishment of a unified world currency with China and the Soviet Union."
      ],
      correctIndex: 1,
      explanation: "Nixon and Kissinger exploited the Sino-Soviet split through 'triangular diplomacy': by opening diplomatic relations with Mao's China, they pressured Soviet leader Leonid Brezhnev into détente, culminating in the historic 1972 Moscow summit and the first strategic nuclear arms limits.",
      distractorTip: "Realpolitik—basing foreign policy on pragmatic national self-interest rather than rigid moral or ideological dogmas—defined Nixon's approach to China and the USSR."
    }
  },
  {
    levelKey: "ush-p8-l11",
    question: {
      id: "ush8-l11-q3",
      stem: "The economic phenomenon of \"stagflation\" that plagued the American economy throughout the 1970s confounded traditional Keynesian economists because:",
      options: [
        "Wages and corporate profits were rising simultaneously at historic record levels.",
        "The stock market surged while unemployment fell to zero percent nationwide.",
        "It combined stagnant economic growth and high unemployment with severe, persistent price inflation, exacerbated by the 1973 OPEC oil embargo.",
        "The federal government ran massive annual budget surpluses for ten consecutive years."
      ],
      correctIndex: 2,
      explanation: "Keynesian models assumed inflation and unemployment were inversely related (Phillips curve); in the 1970s, soaring energy prices triggered by the 1973 and 1979 OPEC oil shocks caused supply-side inflation while manufacturing plants laid off workers, creating painful stagflation that undermined public faith in New Deal-style government intervention.",
      distractorTip: "The economic malaise of the 1970s set the stage for the conservative resurgence and Ronald Reagan's supply-side economic revolution in 1980."
    }
  },

  // --- PERIOD 9: 1980–PRESENT (6 levels) ---
  {
    levelKey: "ush-p9-l1",
    question: {
      id: "ush9-l1-q3",
      stem: "President Ronald Reagan's economic program, commonly known as \"Reaganomics\" or supply-side economics, was based on the premise that:",
      options: [
        "Heavily increasing corporate tax rates would stimulate federal social welfare spending.",
        "The federal government should nationalize oil refineries and regulate consumer prices.",
        "Eliminating the defense budget would eliminate the national deficit immediately.",
        "Cutting federal income and capital gains taxes, reducing business regulations, and curbing non-defense domestic spending would incentivize private investment, increase productivity, and stimulate overall economic growth."
      ],
      correctIndex: 3,
      explanation: "Reagan enacted the Economic Recovery Tax Act of 1981, cutting top tax rates; supply-siders argued that lower taxes would encourage work and investment, expanding the tax base (Laffer Curve), though coupled with massive defense spending (Strategic Defense Initiative), it tripled the national debt.",
      distractorTip: "Reagan's coalition united free-market fiscal conservatives, social conservatives (the Moral Majority / Religious Right), and Cold War anti-communist hawks."
    }
  },
  {
    levelKey: "ush-p9-l2",
    question: {
      id: "ush9-l2-q3",
      stem: "What was the primary objective of the United States-led coalition in the 1991 Persian Gulf War (Operation Desert Storm) under President George H.W. Bush?",
      options: [
        "To liberate Kuwait following its unprovoked invasion and annexation by Iraqi dictator Saddam Hussein, thereby securing Persian Gulf oil supplies and upholding international law under a UN mandate.",
        "To conquer and occupy Baghdad to overthrow Saddam Hussein's Ba'athist government.",
        "To establish a permanent American colonial protectorate across the Arabian Peninsula.",
        "To force the Soviet Union to withdraw nuclear weapons from the Middle East."
      ],
      correctIndex: 0,
      explanation: "Operation Desert Storm mobilized a 35-nation coalition with UN authorization; after a devastating six-week aerial bombardment and a 100-hour ground offensive, coalition forces ejected Iraqi troops from Kuwait, deliberately choosing not to march on Baghdad to preserve coalition unity.",
      distractorTip: "George H.W. Bush proclaimed a 'New World Order' of international law and multilateral diplomacy, contrasting with the unilateral 2003 invasion of Iraq under his son."
    }
  },
  {
    levelKey: "ush-p9-l3",
    question: {
      id: "ush9-l3-q3",
      stem: "The ratification of the North American Free Trade Agreement (NAFTA) in 1993, supported by President Bill Clinton, was intended to:",
      options: [
        "Impose high protective tariffs on all automobiles manufactured in Mexico and Canada.",
        "Eliminate trade barriers, tariffs, and investment restrictions among the United States, Canada, and Mexico, creating a vast trilateral North American free-trade market.",
        "Create a unified single North American currency managed by the Federal Reserve.",
        "Prohibit American multinational corporations from operating factories overseas."
      ],
      correctIndex: 1,
      explanation: "NAFTA accelerated economic globalization by removing trade tariffs between the three nations; while supporters cited lower consumer prices and increased trade volume, labor union critics argued it accelerated the 'deindustrialization' of the Rust Belt by encouraging companies to relocate manufacturing jobs to lower-wage Mexican maquiladoras.",
      distractorTip: "Clinton pursued a 'Third Way' or 'New Democrat' platform, embracing free-trade globalization and welfare reform while defending social spending on education and technology."
    }
  },
  {
    levelKey: "ush-p9-l4",
    question: {
      id: "ush9-l4-q3",
      stem: "How did the Immigration and Nationality Act of 1965 (Hart-Celler Act) reshape American demographic patterns in the late twentieth and early twenty-first centuries?",
      options: [
        "It banned all immigration from Asia, Africa, and Latin America.",
        "It restored the discriminatory national origins quota system established in the 1920s.",
        "It abolished the 1924 national origins quotas and prioritized family reunification and skilled employment, leading to a dramatic surge in immigration predominantly from Latin America and Asia.",
        "It required all immigrants to live in designated agricultural homesteads in Alaska."
      ],
      correctIndex: 2,
      explanation: "Hart-Celler dismantled the racialized 1924 quota system; unexpected by its authors, it dramatically transformed American demographics over the next half-century, making the US far more racially, ethnically, and culturally diverse, with the fastest growth among Hispanic and Asian communities.",
      distractorTip: "The post-1965 immigration wave, combined with internal migration from the Rust Belt to the Sun Belt (South and Southwest), altered congressional representation and national electoral politics."
    }
  },
  {
    levelKey: "ush-p9-l5",
    question: {
      id: "ush9-l5-q3",
      stem: "The USA PATRIOT Act, passed overwhelmingly by Congress following the September 11, 2001 terrorist attacks, provoked significant constitutional debate primarily because:",
      options: [
        "It required all American citizens to serve two years of compulsory military service in Afghanistan.",
        "It abolished the Supreme Court's power of judicial review in all federal cases.",
        "It prohibited federal intelligence agencies from monitoring international financial transactions.",
        "It significantly expanded federal law enforcement and intelligence surveillance powers—such as roving wiretaps, bulk data collection, and delayed-notice search warrants—raising serious Fourth Amendment privacy concerns."
      ],
      correctIndex: 3,
      explanation: "Passed in the name of national security, the PATRIOT Act lowered the barrier between foreign intelligence and domestic law enforcement; critics, including civil libertarians and the ACLU, argued that broad warrantless surveillance infringed upon fundamental Fourth Amendment protections against unreasonable searches and seizures.",
      distractorTip: "The post-9/11 era highlighted the recurring American constitutional tension between national security imperatives and individual civil liberties during times of war."
    }
  },
  {
    levelKey: "ush-p9-l6",
    question: {
      id: "ush9-l6-q3",
      stem: "In response to the catastrophic 2008 Great Recession, the federal government under Presidents George W. Bush and Barack Obama intervened in the national economy on an unprecedented scale primarily by:",
      options: [
        "Enacting massive emergency liquidity programs (TARP) to bail out insolvent commercial banks and the auto industry, paired with the American Recovery and Reinvestment Act of 2009 to stimulate consumer demand through federal spending and tax cuts.",
        "Abolishing all federal banking regulations and completely privatizing the Federal Reserve System.",
        "Returning the United States to the nineteenth-century gold standard and balancing the federal budget immediately.",
        "Nationalizing all private residential housing and corporate commercial airlines."
      ],
      correctIndex: 0,
      explanation: "The subprime mortgage collapse triggered the worst financial crisis since 1929; Bush signed the $700 billion Troubled Asset Relief Program (TARP) to stabilize the financial system, and Obama enacted an $800+ billion Keynesian stimulus package (ARRA) and the Dodd-Frank Wall Street Reform Act to restore economic growth.",
      distractorTip: "The government bailouts and stimulus ignited intense political polarization, fueling the rise of both the conservative Tea Party movement and the progressive Occupy Wall Street movement."
    }
  }
];

// Load using esbuild
const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
const fn = new Function('module', 'exports', 'require', res.code);
fn(mod, mod.exports, (p) => ({ ALL_CALC_AB_UNIT_DEFINITIONS: [] }));
const units = mod.exports.ALL_AP_USH_UNIT_DEFINITIONS;

let addedCount = 0;
const qMap = new Map();
newQuestions.forEach(item => {
  qMap.set(item.levelKey, item.question);
});

units.forEach(unit => {
  unit.levels.forEach(level => {
    if (qMap.has(level.uniqueKey)) {
      const q = qMap.get(level.uniqueKey);
      // Ensure question doesn't already exist
      if (!level.questions.some(existing => existing.id === q.id)) {
        level.questions.push(q);
        addedCount++;
      }
    }
  });
});

console.log(`Added ${addedCount} questions to AP US History.`);

const header = `// AP U.S. History (APUSH) Units Data
// Comprehensive College Board CED aligned curriculum (Periods 1–9)
// Authentic primary source context, historiography, legislative milestones, constitutional debates, and socioeconomic transformations.
// Balanced answer choice distribution across A, B, C, D.

import { UnitDefinition, UnitQuestLevel } from './apCalculusUnitsData';

export const ALL_AP_USH_UNIT_DEFINITIONS: UnitDefinition[] = `;

const updatedContent = header + JSON.stringify(units, null, 2) + `;\n`;

fs.writeFileSync(targetPath, updatedContent, 'utf-8');
console.log("Saved updated apUshUnitsData.ts successfully.");
