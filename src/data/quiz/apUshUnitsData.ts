// AP U.S. History (APUSH) Units Data
// Comprehensive College Board CED aligned curriculum (Periods 1–9)
// Authentic primary source context, historiography, legislative milestones, constitutional debates, and socioeconomic transformations.
// Balanced answer choice distribution across A, B, C, D.

import { UnitDefinition, UnitQuestLevel } from './apCalculusUnitsData';

export const ALL_AP_USH_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "p1",
    "title": "Period 1: 1491–1607",
    "shortTitle": "Period 1: Early Contact",
    "description": "Pre-Columbian Native American societies, European exploration, the Columbian Exchange, and Spanish imperial conquest",
    "examWeight": "4–6% of AP Exam",
    "biome": {
      "name": "Mesoamerican Mesa & Galleon Shoals",
      "icon": "⛵",
      "accentColor": "#EF4444",
      "secondaryColor": "#B91C1C",
      "groundGradient": "from-amber-100 via-orange-50 to-red-100",
      "cardBorder": "border-red-500",
      "trailColor": "#ef4444",
      "nodeRing": "ring-red-400/40",
      "skyTint": "from-amber-50 to-orange-50/30"
    },
    "levels": [
      {
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "ush-p1-l1",
        "topicNumber": "Topic 1.1 & 1.2",
        "name": "Native American Societies Before Contact",
        "subtitle": "Ecological adaptation, maize cultivation, and regional diversity",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush1-l1-q1",
            "stem": "How did the introduction of maize (corn) cultivation from Mesoamerica northward into the American Southwest transform Native American societies such as the Pueblo?",
            "options": [
              "It fostered sedentary settlements, complex irrigation networks, and permanent multistory adobe villages.",
              "It caused communities to abandon agriculture and transition entirely to nomadic buffalo hunting on the Great Plains.",
              "It eliminated all social stratification and centralized religious hierarchies.",
              "It provoked immediate catastrophic soil exhaustion, forcing mass migration into the subarctic tundra."
            ],
            "correctIndex": 0,
            "explanation": "Maize agriculture provided a predictable nutritional surplus that enabled Southwestern peoples (Anasazi/Ancestral Pueblo) to build permanent masonry complexes (such as Chaco Canyon) supported by extensive irrigation engineering.",
            "distractorTip": "Nomadic hunting on the Great Plains became dominant only AFTER the Spanish reintroduced the horse in the sixteenth and seventeenth centuries."
          },
          {
            "id": "ush1-l1-q2",
            "stem": "Prior to European arrival, Native American societies in the Great Basin and western Great Plains primarily responded to the arid, resource-scarce environment by:",
            "options": [
              "Constructing massive ceremonial earthen mounds and extensive riverine trade networks.",
              "Developing highly mobile, nomadic hunter-gatherer bands following migratory bison and seasonal game.",
              "Practicing large-scale maritime whaling and salmon preservation in multi-family cedar plank houses.",
              "Establishing commercial plantation monocultures supported by institutional chattel slavery."
            ],
            "correctIndex": 1,
            "explanation": "The arid ecology of the Great Basin and dry western plains lacked the water required for sedentary agriculture, necessitating small, highly mobile bands that migrated seasonally to hunt bison, antelope, and gather wild piñon nuts.",
            "distractorTip": "Earthen mound-building was characteristic of the Mississippi River Valley (Cahokia), while cedar plank houses and whaling defined the Pacific Northwest (Chinook)."
          },
          {
            "id": "ush1-l1-q3",
            "stem": "Which of the following environmental adaptations best explains the development of permanent settlements and matrilineal clans among the Iroquois (Haudenosaunee) in the Northeast?",
            "options": [
              "Nomadic following of migratory caribou herds across subarctic permafrost.",
              "Construction of stone cliff dwellings adapted to deep desert canyons.",
              "Mixed agriculture combining the \"Three Sisters\" (corn, beans, squash) with hunting and seasonal gathering in deciduous woodland environments.",
              "Exclusive reliance on deep-sea whaling along the rocky North Atlantic coast."
            ],
            "correctIndex": 2,
            "explanation": "In the Eastern Woodlands and Northeast, societies like the Iroquois cultivated the 'Three Sisters'—maize, climbing beans, and squash—which provided complementary soil nitrogen and balanced nutrition, fostering permanent multi-family longhouse villages.",
            "distractorTip": "Remember the regional geography: cliff dwellings = Southwest (Pueblo/Anasazi); nomadic bison hunting = Great Plains; Three Sisters mixed farming = Northeast/Eastern Woodlands."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "ush-p1-l2",
        "topicNumber": "Topic 1.3",
        "name": "European Exploration in the Americas",
        "subtitle": "Maritime technology, mercantilist competition, and the search for wealth",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush1-l2-q1",
            "stem": "Which technological innovations were most decisive in enabling Iberian navigators to embark on transoceanic exploration in the late fifteenth century?",
            "options": [
              "The Morse telegraph and mechanical chronometer.",
              "The steam-powered paddle wheeler and ironclad hull construction.",
              "The caravel with triangular lateen sails, the astrolabe, and refined magnetic compasses.",
              "The Bessemer converter and explosive rifled cannon."
            ],
            "correctIndex": 2,
            "explanation": "Portuguese and Spanish mariners synthesized Arab lateen sails with European ship designs to create the caravel—capable of sailing into the wind—while utilizing the astrolabe and magnetic compass for open-ocean positioning.",
            "distractorTip": "Steam power and ironclads are nineteenth-century Industrial Revolution innovations, centuries after Columbus and da Gama."
          },
          {
            "id": "ush1-l2-q2",
            "stem": "What primary economic motive drove Spain and Portugal to sponsor expeditions seeking a direct western maritime route to Asia?",
            "options": [
              "To flee Protestant religious persecution following the German Lutheran Reformation.",
              "To secure rich coal deposits required for domestic industrial factory production.",
              "To establish cooperative agrarian communes governed by democratic assemblies.",
              "To bypass the Venetian and Ottoman merchant monopolies controlling Mediterranean spice and luxury trade routes."
            ],
            "correctIndex": 3,
            "explanation": "Following the Ottoman capture of Constantinople in 1453, overland and eastern Mediterranean spice routes carried exorbitant tariffs, motivating Iberian monarchs to finance Atlantic exploration for direct Asian access.",
            "distractorTip": "Spain remained staunchly Catholic under Ferdinand and Isabella, using Atlantic silver to fund Counter-Reformation warfare, not fleeing Protestant persecution."
          },
          {
            "id": "ush1-l2-q3",
            "stem": "How did the growth of joint-stock companies in Western Europe in the late sixteenth and early seventeenth centuries alter the pattern of transoceanic colonization?",
            "options": [
              "They prohibited monarchs from collecting any customs taxes on imported goods.",
              "They eliminated the risk of maritime exploration by insuring all ships through the Vatican.",
              "They forced all European exploration to be funded exclusively by private religious charities.",
              "They pooled private investor capital to finance risky overseas expeditions, reducing individual financial liability while establishing profitable corporate colonies."
            ],
            "correctIndex": 3,
            "explanation": "Joint-stock companies (such as the Virginia Company) allowed multiple investors to buy shares, spreading risk and raising large capital sums without relying solely on royal treasuries, serving as the commercial engine of English colonization.",
            "distractorTip": "Note the contrast: Spanish expeditions were largely state- and crown-directed (conquistadores licensed by the crown), whereas English colonization relied heavily on private joint-stock corporate charters."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "ush-p1-l3",
        "topicNumber": "Topic 1.4",
        "name": "The Columbian Exchange",
        "subtitle": "Demographic collapse, ecological restructuring, and staple crops",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush1-l3-q1",
            "stem": "What was the most consequential demographic impact of the Columbian Exchange on the Indigenous populations of the Americas?",
            "options": [
              "An estimated 80% to 90% mortality rate caused by virgin-soil epidemics of smallpox, measles, and influenza.",
              "Rapid population increase due to European veterinary medicine and livestock breeding.",
              "Widespread intermarriage leading to the total genetic assimilation of Native populations within twenty years.",
              "Mass voluntary migration of Indigenous groups across the Atlantic to populate Spanish port cities."
            ],
            "correctIndex": 0,
            "explanation": "Having evolved in geographic isolation from Old World crowd pathogens, Indigenous Americans possessed zero acquired immunological resistance, resulting in catastrophic virgin-soil pandemics that decimated societies ahead of physical conquest.",
            "distractorTip": "AP Trap: Gunpowder weapons and steel swords were lethal, but epidemic pathogens were the primary catalyst for the unprecedented demographic collapse."
          },
          {
            "id": "ush1-l3-q2",
            "stem": "Which American domesticates profoundly stimulated population growth and urbanization across Europe following their introduction through the Columbian Exchange?",
            "options": [
              "Wheat and barley.",
              "Corn (maize) and potatoes.",
              "Sugarcane and coffee.",
              "Rice and cotton."
            ],
            "correctIndex": 1,
            "explanation": "Calorie-dense staple crops—especially potatoes and maize—yielded far more nutritional energy per cultivated acre than traditional European grains, reducing famine, stabilizing nutrition, and sustaining the European demographic boom.",
            "distractorTip": "Wheat, barley, and sugarcane were Old World domesticates introduced TO the Americas, not native American crops."
          },
          {
            "id": "ush1-l3-q3",
            "stem": "The introduction of Spanish horses to North America most profoundly transformed the culture and economy of Native American societies in which region?",
            "options": [
              "The Great Plains, where nomadic nations like the Lakota Sioux and Comanche utilized equestrian mobility to become dominant bison hunters and military powers.",
              "The Arctic tundra, where Inuit seal hunters used horses to pull sea sleds across ice packs.",
              "The dense coastal swamplands of the Everglades in Florida.",
              "The urban stone complexes of the Ancestral Pueblo in the Chaco Canyon desert."
            ],
            "correctIndex": 0,
            "explanation": "The Spanish horse completely revolutionized Great Plains societies; formerly sedentary or semi-nomadic foot hunters transformed into formidable equestrian societies capable of pursuing massive bison herds and contesting European expansion.",
            "distractorTip": "Always link the reintroduction of the horse to the transformation of the Great Plains, not the Eastern Woodlands or Southwest."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "ush-p1-l4",
        "topicNumber": "Topic 1.5",
        "name": "Labor, Culture, and Spanish Imperial Rule",
        "subtitle": "The Encomienda system, the Casta hierarchy, and coerced extraction",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush1-l4-q1",
            "stem": "Under the Spanish encomienda system, how did colonial authorities legally justify the forced labor and tribute extraction imposed on Native Americans?",
            "options": [
              "Colonists signed individual wage-labor contracts negotiated through independent Indigenous craft guilds.",
              "Native laborers were granted full Spanish citizenship and voting rights in the royal Council of the Indies.",
              "The Crown granted conquistadors rights to native labor on the condition that settlers protect and convert them to Roman Catholicism.",
              "The system operated as an emergency military conscription solely during declared wars against rival European empires."
            ],
            "correctIndex": 2,
            "explanation": "The encomienda was a royal grant empowering Spanish colonists (encomenderos) to extract labor and tribute from Indigenous villages, under the legal pretense of providing spiritual Christianization and physical defense.",
            "distractorTip": "In reality, the encomienda functioned as brutal coerced servitude, provoking fierce denunciations by friars such as Bartolomé de las Casas."
          },
          {
            "id": "ush1-l4-q2",
            "stem": "The Spanish colonial 'Sistema de Castas' (Caste System) in the Americas was primarily designed to:",
            "options": [
              "Abolish transatlantic slave trade operations by replacing them with voluntary apprentice contracts.",
              "Ensure equal redistribution of silver mining revenues among all ethnic groups.",
              "Facilitate democratic election of colonial viceroers and municipal magistrates.",
              "Establish a rigid socioracial hierarchy determining legal rights, taxation rates, and social privilege based on racial ancestry."
            ],
            "correctIndex": 3,
            "explanation": "The Casta system ranked colonial society based on pureza de sangre (purity of Spanish blood): Peninsulares and Criollos held political power, while Mestizos, Mulattoes, Indigenous, and enslaved Africans occupied subordinate tiers.",
            "distractorTip": "The Casta system was explicitly racial and anti-egalitarian, governing everything from dress codes to legal property rights."
          },
          {
            "id": "ush1-l4-q3",
            "stem": "What was the primary justification articulated by Spanish authorities for the implementation of the encomienda system in the early sixteenth century?",
            "options": [
              "That Indigenous Americans were equal citizens entitled to self-governance under Spanish municipal law.",
              "That Spanish encomenderos were granted Indigenous tribute labor in exchange for providing protection and converting the workers to Roman Catholicism.",
              "That Indigenous workers were legally purchased chattel slaves imported from West Africa.",
              "That private joint-stock investors were contractually required to pay cash wages to local laborers."
            ],
            "correctIndex": 1,
            "explanation": "Under the encomienda, the Spanish crown granted conquistadores the right to exact forced labor and tribute from Indigenous villages, under the legal rationale that the encomendero would instruct them in the Spanish language and Catholic faith.",
            "distractorTip": "In reality, the encomienda functioned as brutal forced servitude; it was not a voluntary wage system or equal feudal partnership."
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "ush-p1-l5",
        "topicNumber": "Topic 1.6",
        "name": "Cultural Interactions & Resistance",
        "subtitle": "Las Casas vs. Sepúlveda, syncretism, and sovereignty struggles",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush1-l5-q1",
            "stem": "The dramatic 1550–1551 Valladolid Debate between Bartolomé de las Casas and Juan Ginés de Sepúlveda centered on which core moral and legal question?",
            "options": [
              "Whether Indigenous Americans possessed human souls and natural rights, or were 'natural slaves' justifiable to subjugate by war.",
              "Whether Spain should cede territorial claims in Florida and the Caribbean to the British Crown.",
              "Whether Catholic missions should translate the Holy Bible into Indigenous tongues rather than Latin.",
              "Whether colonial silver mines in Potosí should be privatized or administered directly by the Papacy."
            ],
            "correctIndex": 0,
            "explanation": "Sepúlveda drew on Aristotle to argue Indigenous peoples were uncivilized 'natural slaves' requiring forceful conquest, whereas Las Casas argued Indians were rational humans whose violent exploitation was un-Christian and criminal.",
            "distractorTip": "The debate was the world's first major state debate on the universal human rights and legal standing of colonized peoples."
          },
          {
            "id": "ush1-l5-q2",
            "stem": "In response to Spanish missionary efforts to eradicate traditional Indigenous spiritual practices, Native Americans frequently:",
            "options": [
              "Completely abandoned all ancestral languages and ceremonial customs within one generation.",
              "Practiced religious syncretism, blending Catholic saints and rituals with enduring ancestral deities and sacred traditions.",
              "Converted unanimously to radical Scottish Presbyterianism to frustrate Spanish Catholic authorities.",
              "Immigrated en masse to the French fur-trading settlements in the St. Lawrence River Valley."
            ],
            "correctIndex": 1,
            "explanation": "Indigenous communities maintained agency by adopting external Catholic iconography (such as the Virgin of Guadalupe) while covertly preserving core ancestral cosmological beliefs, ceremonies, and linguistic traditions.",
            "distractorTip": "Conversions were rarely total or passive; cultural syncretism and subtle resistance were ubiquitous throughout New Spain."
          },
          {
            "id": "ush1-l5-q3",
            "stem": "At the Valladolid Debate (1550–1551), Dominican friar Bartolomé de Las Casas challenged Juan Ginés de Sepúlveda by arguing that:",
            "options": [
              "Spain should withdraw completely from the Americas and surrender all colonial lands to Great Britain.",
              "Indigenous Americans possessed no souls and could not be converted to Christianity.",
              "Indigenous peoples were rational human beings created in God's image who possessed natural rights and should not be subjected to violent enslavement.",
              "Aristotle's doctrine of \"natural slavery\" justified the immediate execution of all non-Christians."
            ],
            "correctIndex": 2,
            "explanation": "Las Casas defended the humanity of Indigenous peoples against Sepúlveda (who used Aristotle to argue that Indians were 'natural slaves' destined for subjugation), arguing that peaceful evangelism rather than coercive conquest was the only morally justifiable Christian path.",
            "distractorTip": "Las Casas is famous as the 'Protector of the Indians'; Sepúlveda defended Spanish imperial conquest and natural inequality."
          }
        ]
      },
      {
        "id": 106,
        "unitIndex": 1,
        "levelNumber": 6,
        "uniqueKey": "ush-p1-l6",
        "topicNumber": "Period 1 Boss Level",
        "name": "Period 1 Capstone & Synthesis",
        "subtitle": "Mastery of pre-contact societies, the Columbian Exchange, and empire",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "ush1-l6-q1",
            "stem": "Which long-term transition in the Spanish colonial economy was triggered by the rapid demographic collapse of the Indigenous labor force and the humanitarian critiques of the encomienda?",
            "options": [
              "The replacement of commercial silver exports with domestic subsistence wheat farming.",
              "The wholesale abandonment of American colonies and return of Spanish settlers to the Iberian Peninsula.",
              "The expansion of the transatlantic slave trade (asiento system) to import coerced African labor for plantation agriculture and mining.",
              "The signing of reciprocal free-trade treaties between the Spanish Crown and independent Iroquois confederacies."
            ],
            "correctIndex": 2,
            "explanation": "As epidemics and abuse decimated Indigenous populations and the Crown phased out the encomienda with the New Laws of 1542, Spanish planters and mine operators turned increasingly to enslaved West Africans via the royal asiento system.",
            "distractorTip": "The collapse of native labor led to the expansion of African chattel slavery, not Spanish withdrawal."
          },
          {
            "id": "ush1-l6-q2",
            "stem": "Which of the following historical conclusions is most directly supported by the diverse social organizations of pre-Columbian North American societies?",
            "options": [
              "Native societies lacked trade networks and remained isolated from neighboring regional cultures.",
              "Prior to 1492, all North American native groups shared a uniform, monolithic culture characterized by centralized monarchies.",
              "Agricultural cultivation was unknown in North America until European explorers introduced basic seed crops.",
              "Indigenous societies developed distinct social, political, and economic systems shaped directly by their regional physical environments."
            ],
            "correctIndex": 3,
            "explanation": "From the settled agricultural Pueblos of the arid Southwest to the mobile bison hunters of the Great Plains and the dense fishing villages of the Pacific Northwest, native cultures were intricately adapted to their regional ecosystems.",
            "distractorTip": "College Board Key Concept: Never view Indigenous peoples as a monolithic block; environmental diversity dictated societal structure."
          },
          {
            "id": "ush1-l6-q3",
            "stem": "When evaluating European and Indigenous interactions between 1491 and 1607, which statement best characterizes how Native Americans asserted agency in response to European colonization?",
            "options": [
              "They immediately abandoned all ancestral cultural traditions and voluntarily assimilated into European society.",
              "They surrendered all territorial claims without armed conflict or diplomatic resistance.",
              "They formed a single, unified continental confederacy that drove all Europeans out of North America.",
              "They forged strategic military alliances with rival European powers, engaged in armed resistance, and syncretically adapted European goods and religious ideas while striving to maintain cultural sovereignty."
            ],
            "correctIndex": 3,
            "explanation": "Native Americans were active historical agents: they exploited rivalries between European empires (Spanish, French, English), resisted militarily (e.g., Pueblo Revolt, Powhatan Wars), and selectively integrated European technologies (firearms, metal tools, horses) into their own cultural frameworks.",
            "distractorTip": "Reject distractors portraying Native Americans as passive victims or completely submissive assimilators; historical agency and resistance are core APUSH themes."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "p2",
    "title": "Period 2: 1607–1754",
    "shortTitle": "Period 2: Colonial Era",
    "description": "Chesapeake tobacco, New England Puritanism, Middle Colonies diversity, transatlantic trade, Bacon's Rebellion, and the First Great Awakening",
    "examWeight": "6–8% of AP Exam",
    "biome": {
      "name": "Plymouth Timber & Chesapeake Tidewater",
      "icon": "🏛️",
      "accentColor": "#D97706",
      "secondaryColor": "#B45309",
      "groundGradient": "from-amber-100 via-stone-50 to-orange-100",
      "cardBorder": "border-amber-500",
      "trailColor": "#d97706",
      "nodeRing": "ring-amber-400/40",
      "skyTint": "from-amber-50 to-stone-50/30"
    },
    "levels": [
      {
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "ush-p2-l1",
        "topicNumber": "Topic 2.1 & 2.2",
        "name": "European Colonization Patterns",
        "subtitle": "Spanish, French, Dutch, and British imperial models compared",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush2-l1-q1",
            "stem": "How did seventeenth-century French colonization in North America differ fundamentally from British settlement patterns?",
            "options": [
              "The French established sparse trading posts focused on the fur trade and allied diplomatically with Native Americans, whereas the British brought large numbers of settlers seeking permanent land ownership.",
              "The French expelled all Catholic missionaries while the British mandated universal adherence to the Anglican Church.",
              "The French established massive sugar plantations dependent exclusively on enslaved labor in the Ohio Valley.",
              "The French completely conquered and enslaved the Iroquois Confederacy by 1620."
            ],
            "correctIndex": 0,
            "explanation": "French colonization relied on small numbers of fur traders (coureurs des bois) and Jesuit missionaries who fostered cooperative diplomatic and commercial alliances with Algonquian tribes, contrasting with British land-clearing settler colonialism.",
            "distractorTip": "British colonists sought exclusive territorial displacement of Native Americans for family farms, leading to frequent border warfare."
          },
          {
            "id": "ush2-l1-q2",
            "stem": "Dutch colonization at New Amsterdam (later New York) was characterized primarily by:",
            "options": [
              "A rigid feudal Catholic military outpost barring all non-Dutch speaking immigrants.",
              "A commercial joint-stock enterprise governed by the Dutch West India Company, focused on trade and religious/ethnic diversity.",
              "A radical agrarian democracy dedicated to the total abolition of all forms of indentured servitude.",
              "A utopian religious sanctuary founded exclusively for dissident English Separatist Pilgrims."
            ],
            "correctIndex": 1,
            "explanation": "New Netherland was established as a merchant-dominated trading hub under the Dutch West India Company, prioritizing profit and commerce over religious conformity, making it the most ethnically diverse colony in North America.",
            "distractorTip": "The English Puritans fled to Massachusetts, not New Amsterdam; the Dutch were pragmatic merchant capitalists."
          },
          {
            "id": "ush2-l1-q3",
            "stem": "How did French colonization in North America differ fundamentally from British colonization during the seventeenth and eighteenth centuries?",
            "options": [
              "French colonizers were relatively few in number and focused on establishing mutual trade alliances (especially the fur trade) and intermarriage with Native Americans, whereas the British brought large numbers of settlers to establish permanent agricultural settlements that displaced Indigenous populations.",
              "French colonizers established large-scale plantation slave economies across the Great Lakes region.",
              "British colonizers forbade private land ownership and required all colonists to live in Catholic mission compounds.",
              "The French established direct democratic town meetings that governed New France without royal interference."
            ],
            "correctIndex": 0,
            "explanation": "The French imperial model in New France relied on coureurs des bois and Jesuit missionaries who integrated into Indigenous trading networks for beaver pelts, whereas English settlers came in family units, demanded private land ownership, and pushed Indigenous tribes westward.",
            "distractorTip": "Compare colonial models: Spanish = extractive conquest & forced labor; French/Dutch = commercial fur trade alliances; English = settler agriculture & land dispossession."
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "ush-p2-l2",
        "topicNumber": "Topic 2.3",
        "name": "The Chesapeake vs. New England",
        "subtitle": "Virginia tobacco fortunes and Massachusetts Puritan covenant theology",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush2-l2-q1",
            "stem": "What was the economic and social cornerstone of the seventeenth-century Chesapeake colonies (Virginia and Maryland)?",
            "options": [
              "Furs and timber extraction governed entirely by democratic Quaker town meetings.",
              "Diversified family-farm cereal grain production integrated with urban textile manufacturing.",
              "The labor-intensive cultivation of tobacco for export, initially reliant on young male indentured servants.",
              "Extensive gold and emerald mining operations under direct royal military supervision."
            ],
            "correctIndex": 2,
            "explanation": "John Rolfe's introduction of mild tobacco created a lucrative cash-crop monoculture that drove high demand for unfree labor, leading Virginia planters to rely on indentured servants under the headright system before transitioning to racial chattel slavery.",
            "distractorTip": "Chesapeake society was rural, dispersed, and male-dominated, unlike New England's close-knit, family-based religious towns."
          },
          {
            "id": "ush2-l2-q2",
            "stem": "John Winthrop's famous sermon aboard the Arbella (1630) declaring Massachusetts Bay a 'City upon a Hill' articulated the Puritan objective of:",
            "options": [
              "Promoting universal suffrage for all residents regardless of church membership or gender.",
              "Establishing absolute religious freedom and separation of church and state for all faiths.",
              "Securing military dominance over French fur traders through an alliance with Catholic Spain.",
              "Creating a holy, reformed Christian commonwealth to serve as a beacon of godly righteousness for England to emulate."
            ],
            "correctIndex": 3,
            "explanation": "Puritans sought to build a visible covenant community where civic government strictly enforced biblical moral law, demonstrating to the Anglican Church in England how a truly purified church society could function.",
            "distractorTip": "Puritans did NOT believe in religious tolerance; dissidents like Roger Williams and Anne Hutchinson were banished for questioning orthodox doctrine."
          },
          {
            "id": "ush2-l2-q3",
            "stem": "The Mayflower Compact (1620) and the New England town meeting system were significant in the development of American political institutions because they:",
            "options": [
              "Granted universal voting rights to all men and women regardless of church membership or property.",
              "Established an early tradition of self-government based on social covenants and direct democratic participation among church-member property owners.",
              "Mandated the complete separation of church and civil government throughout Massachusetts Bay.",
              "Subordinated local colonial legislatures to the absolute authority of the King's Anglican bishops."
            ],
            "correctIndex": 1,
            "explanation": "The Mayflower Compact created a 'civil body politic' governed by majoritarian consent; New England Puritans met in direct town meetings to vote on local bylaws, taxation, and schools, creating a durable precedent for local participatory democracy.",
            "distractorTip": "New England was not a secular democracy; political franchise was initially restricted to adult male 'freemen' who were visible church members."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "ush-p2-l3",
        "topicNumber": "Topic 2.3",
        "name": "The Middle Colonies & Deep South",
        "subtitle": "Quaker tolerance in Pennsylvania and Carolina plantation slavery",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush2-l3-q1",
            "stem": "William Penn founded the colony of Pennsylvania as a 'Holy Experiment' based upon which foundational principles?",
            "options": [
              "Quaker pacifism, religious toleration for all monotheists, and fair, negotiated treaty relations with Native Americans (such as the Delaware/Lenape).",
              "Strict Calvinist predestination and mandatory tithes to the Anglican bishop of London.",
              "A militarized buffer state designed to launch naval attacks against Spanish Florida.",
              "An aristocratic feudal estate where landownership was restricted strictly to the royal Stuart family."
            ],
            "correctIndex": 0,
            "explanation": "Penn envisioned Pennsylvania as a sanctuary for persecuted Quakers and other religious minorities, establishing broad religious tolerance, an elected representative assembly, and unprecedented fair diplomatic relations with native inhabitants.",
            "distractorTip": "Georgia was the military buffer colony against Spanish Florida (founded 1732), not Pennsylvania."
          },
          {
            "id": "ush2-l3-q2",
            "stem": "The economy of the British plantation colonies in the Carolinas and the West Indies differed from the Chesapeake primarily due to their heavy reliance on:",
            "options": [
              "Smallholder wheat cultivation worked exclusively by free European wage laborers.",
              "Sugar and rice cultivation requiring vast numbers of enslaved Africans, creating Black demographic majorities and harsh slave codes.",
              "Cod fishing, timber exports, and shipbuilding financed by colonial Boston banks.",
              "Direct barter commerce with Spanish silver fleets under official papal licenses."
            ],
            "correctIndex": 1,
            "explanation": "South Carolina planters adopted the brutal Barbados slave model, growing rice and indigo in malaria-ridden lowlands where enslaved Africans soon outnumbered white colonists, leading to the strict South Carolina Slave Code of 1740.",
            "distractorTip": "Rice and sugar were far deadlier to cultivate than tobacco, resulting in extreme mortality rates and severe racial policing."
          },
          {
            "id": "ush2-l3-q3",
            "stem": "Why were the Middle Colonies (Pennsylvania, New York, New Jersey, Delaware) often referred to as the \"breadbasket colonies\" of British North America?",
            "options": [
              "They specialized exclusively in the mass production of tobacco and indigo for export to the West Indies.",
              "They imported all their grain from New England to feed large enslaved mining workforces.",
              "Their fertile soil and temperate climate supported high agricultural yields of cereal grains (wheat, barley, rye) and attracted an ethnically and religiously diverse immigrant population.",
              "Their economies were based entirely on oceanic cod fishing and whaling."
            ],
            "correctIndex": 2,
            "explanation": "The Middle Colonies possessed rich soils suited for grain production, and William Penn's policy of religious toleration and peaceful relations with the Delaware Indians attracted diverse European immigrants (Germans, Scots-Irish, Dutch, Quakers).",
            "distractorTip": "The Middle Colonies combined commercial grain agriculture with vibrant port commerce (Philadelphia, New York) and the highest ethnic/religious pluralism in the colonies."
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "ush-p2-l4",
        "topicNumber": "Topic 2.4",
        "name": "Transatlantic Trade & Mercantilism",
        "subtitle": "The Navigation Acts, the Triangular Trade, and salutary neglect",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush2-l4-q1",
            "stem": "Under the economic doctrine of mercantilism, how did the British Parliament seek to regulate colonial American commerce through the Navigation Acts?",
            "options": [
              "By prohibiting the export of all agricultural goods to prioritize domestic colonial manufacturing.",
              "By encouraging the colonies to sign duty-free trade pacts with France, Spain, and the Netherlands.",
              "By mandating that enumerated colonial cash crops (like tobacco and sugar) be shipped exclusively on British ships through British ports.",
              "By abolishing all royal customs duties and opening North American ports to worldwide free trade."
            ],
            "correctIndex": 2,
            "explanation": "Mercantilism held that the colonies existed to enrich the mother country; the Navigation Acts aimed to monopolize colonial raw materials and ensure American consumers purchased manufactured goods exclusively from Great Britain.",
            "distractorTip": "Despite these laws, Britain long practiced 'salutary neglect,' weakly enforcing customs duties and allowing widespread colonial smuggling."
          },
          {
            "id": "ush2-l4-q2",
            "stem": "What was the brutal middle leg of the 'Triangular Trade' network linking West Africa, the Americas, and Europe?",
            "options": [
              "The diplomatic transit of colonial royal governors between London and Jamestown.",
              "The shipment of New England rum and cod directly to Mediterranean Catholic ports.",
              "The overland carriage of Appalachian furs to Montreal fur trading auctions.",
              "The Middle Passage, during which millions of kidnapped Africans were transported across the Atlantic under horrific, deadly conditions."
            ],
            "correctIndex": 3,
            "explanation": "The Middle Passage was the transatlantic voyage of slave ships; crammed into suffocating holds, approximately 15% to 20% of enslaved Africans perished from disease, starvation, and abuse before reaching American shores.",
            "distractorTip": "The triangular trade exchanged manufactured goods for slaves in Africa, slaves for sugar/molasses in the Americas, and raw commodities to Britain."
          },
          {
            "id": "ush2-l4-q3",
            "stem": "How did the British policy of \"salutary neglect\" prior to 1763 influence the economic and political development of the thirteen colonies?",
            "options": [
              "It forced colonial merchants to sell all manufactured goods at bankrupting losses to royal monopolies.",
              "It caused colonial assemblies to disband and surrender all local legislative authority to Parliament.",
              "It led to the immediate military occupation of all colonial seaports by British redcoats.",
              "It allowed the colonies to develop autonomous legislative self-government and thrive through widespread illicit smuggling that routinely evaded parliamentary trade regulations."
            ],
            "correctIndex": 3,
            "explanation": "Under Prime Ministers like Robert Walpole, Britain laxly enforced the Navigation Acts ('salutary neglect') as long as commerce was profitable; this gave colonial assemblies control over local taxes and purse strings, fostering expectations of self-rule.",
            "distractorTip": "Salutary neglect ended abruptly after the French and Indian War in 1763, sparking colonial outrage when Britain began strictly enforcing customs laws and imposing direct taxes."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "ush-p2-l5",
        "topicNumber": "Topic 2.5",
        "name": "Colonial Resistance & Racial Division",
        "subtitle": "Bacon's Rebellion, King Philip's War, and the Pueblo Revolt",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush2-l5-q1",
            "stem": "What was the most significant long-term consequence of Bacon's Rebellion (1676) in colonial Virginia?",
            "options": [
              "Chesapeake planters accelerated the transition from white indentured servitude to permanent, hereditary African chattel slavery to prevent multiracial working-class unrest.",
              "Governor William Berkeley successfully abolished the House of Burgesses and restored direct monarchical feudalism.",
              "The Powhatan Confederacy successfully forced all English settlers to evacuate the Chesapeake.",
              "Virginia passed the first colonial statute outlawing the importation of enslaved laborers."
            ],
            "correctIndex": 0,
            "explanation": "Nathaniel Bacon led landless former indentured servants (black and white together) in rebellion against the planter elite. Terrified by the threat of allied poor laborers, Virginia elites turned to permanent racial slavery, dividing poor whites from enslaved blacks by law.",
            "distractorTip": "Bacon's Rebellion did NOT end colonial government; it fundamentally reshaped the labor system by institutionalizing racial chattel slavery."
          },
          {
            "id": "ush2-l5-q2",
            "stem": "The Pueblo Revolt of 1680 (led by Popé) against Spanish colonial rule in modern-day New Mexico resulted in which notable outcome?",
            "options": [
              "The immediate and permanent cession of New Mexico to the British crown.",
              "The temporary expulsion of the Spanish for twelve years, followed upon Spanish reconquest by greater cultural accommodation of Indigenous spiritual traditions.",
              "The total conversion of all Pueblo peoples to European Protestantism.",
              "The complete destruction of all Catholic churches with zero Spanish attempt to re-enter the territory."
            ],
            "correctIndex": 1,
            "explanation": "The Pueblo Revolt is one of the most successful Indigenous uprisings in North American history; when the Spanish returned in 1692, they abandoned the harsh encomienda and tolerated private traditional Pueblo religious ceremonies.",
            "distractorTip": "The revolt showed Indigenous resistance could successfully check European colonial authority and force policy compromises."
          },
          {
            "id": "ush2-l5-q3",
            "stem": "What was the most significant long-term consequence of Bacon's Rebellion (1676) in colonial Virginia?",
            "options": [
              "Planter elites transitioned away from white indentured servants toward race-based African chattel slavery to prevent future multiracial rebellions of poor laborers.",
              "The Virginia House of Burgesses abolished all private tobacco plantations.",
              "Nathaniel Bacon was crowned the independent monarch of Virginia.",
              "Enslaved Africans were granted full civil rights and distributed free frontier lands."
            ],
            "correctIndex": 0,
            "explanation": "Bacon's alliance of poor frontier indentured servants and enslaved men terrified Virginia's tidewater planters. To eliminate the threat of an unruly landless white class, the gentry sharply increased African slave imports and codified hereditary racial slavery (Virginia Slave Codes of 1705).",
            "distractorTip": "Bacon's Rebellion was the decisive catalyst accelerating the shift from indentured servitude to racialized chattel slavery in the Chesapeake."
          }
        ]
      },
      {
        "id": 206,
        "unitIndex": 2,
        "levelNumber": 6,
        "uniqueKey": "ush-p2-l6",
        "topicNumber": "Topic 2.6 & 2.7",
        "name": "Slavery, the Enlightenment, & Great Awakening",
        "subtitle": "The Stono Rebellion, John Locke, and George Whitefield's revivals",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush2-l6-q1",
            "stem": "How did the First Great Awakening (1730s–1740s), energized by itinerant preachers like George Whitefield and Jonathan Edwards, alter colonial American society?",
            "options": [
              "It led to the immediate statutory abolition of slavery throughout all New England and Middle colonies.",
              "It unified all colonists into a single state-established Anglican church hierarchy under royal decree.",
              "It democratized religious experience across colony boundaries, fostered 'New Light' challenges to established clerical authority, and broke down intercolonial isolation.",
              "It suppressed intellectual life and forced the permanent closure of Harvard, Yale, and Princeton."
            ],
            "correctIndex": 2,
            "explanation": "The Great Awakening emphasized emotional, personal salvation over dry scholastic doctrine, empowering common people to question traditional minister elites and creating shared transatlantic revival networks that foreshadowed revolutionary questioning of political authority.",
            "distractorTip": "Jonathan Edwards delivered 'Sinners in the Hands of an Angry God,' but Whitefield drew thousands in open-air revivals, revolutionizing colonial communication."
          },
          {
            "id": "ush2-l6-q2",
            "stem": "What was the direct legislative reaction of the South Carolina assembly to the Stono Rebellion of 1739?",
            "options": [
              "The replacement of all plantation agriculture with royal naval shipyards.",
              "The complete emancipation of all enslaved individuals in Charleston.",
              "A formal treaty granting sovereign territorial independence to runaway slave communities in Florida.",
              "The enactment of the Negro Act of 1740, which drastically curtailed the rights of enslaved people to assemble, grow their own food, learn to read, or earn money."
            ],
            "correctIndex": 3,
            "explanation": "Following the Stono uprising, terrified planters passed the Negro Act of 1740, codifying severe penalties, mandatory slave patrols, and total restrictions on literacy and movement to crush any future organized rebellion.",
            "distractorTip": "Colonial slave revolts consistently led to harsher legislative crackdowns and tighter surveillance, never voluntary emancipation."
          },
          {
            "id": "ush2-l6-q3",
            "stem": "The First Great Awakening of the 1730s and 1740s, led by itinerant preachers like George Whitefield and Jonathan Edwards, impacted colonial society by:",
            "options": [
              "Unifying all thirteen colonies under the institutional authority of the Church of England.",
              "Challenging traditional clerical hierarchies through emotive evangelical revivals and fostering a shared, trans-colonial religious identity that questioned established authority.",
              "Banning all musical instruments and religious preaching outside of Harvard and Yale universities.",
              "Promoting secular atheism and the rejection of all Christian scripture."
            ],
            "correctIndex": 1,
            "explanation": "The Great Awakening broke the monopoly of traditional 'Old Light' ministers; charismatic 'New Light' preachers emphasized personal salvation, emotional conversion, and spiritual equality, creating the first shared cultural movement across all thirteen colonies and encouraging citizens to question authority.",
            "distractorTip": "The Great Awakening was a religious revival, not a secular movement; yet, by encouraging ordinary people to challenge religious authority, it primed colonists to question British political authority decades later."
          }
        ]
      },
      {
        "id": 207,
        "unitIndex": 2,
        "levelNumber": 7,
        "uniqueKey": "ush-p2-l7",
        "topicNumber": "Period 2 Boss Level",
        "name": "Period 2 Capstone & Synthesis",
        "subtitle": "Mastery of colonial societies, mercantilism, and emerging identity",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "ush2-l7-q1",
            "stem": "The political reality of British 'Salutary Neglect' during the early eighteenth century contributed most directly to:",
            "options": [
              "The development of autonomous colonial representative assemblies (such as the Virginia House of Burgesses and Massachusetts General Court) accustomed to self-taxation and self-rule.",
              "The rapid annexation of the thirteen colonies by the Spanish Viceroyalty of New Spain.",
              "The collapse of transatlantic merchant trade and widespread impoverishment of American port cities.",
              "The total abandonment of English common law in favor of French civil legal codes."
            ],
            "correctIndex": 0,
            "explanation": "Because the British Crown rarely enforced parliamentary trade regulations strictly, colonial legislatures exercised extensive power over local taxation, budgets, and royal governors' salaries, establishing a fierce tradition of self-governance.",
            "distractorTip": "When Parliament attempted to abruptly end salutary neglect after 1763, colonists viewed new taxes as tyrannical violations of their established constitutional liberties."
          },
          {
            "id": "ush2-l7-q2",
            "stem": "The 1735 New York trial of printer John Peter Zenger was an early landmark milestone in the historical development of:",
            "options": [
              "The constitutional right to universal free legal counsel in federal criminal trials.",
              "Freedom of the press and the principle that truth constitutes a valid defense against libel charges.",
              "The federal prohibition against cruel and unusual punishment.",
              "The legal doctrine of judicial review over parliamentary statutes."
            ],
            "correctIndex": 1,
            "explanation": "Zenger's lawyer, Andrew Hamilton, convinced a colonial jury to acquit Zenger for criticizing the corrupt royal governor on the grounds that his published statements were factually true, establishing a vital precedent for colonial press freedom.",
            "distractorTip": "Zenger established freedom of the press, while Marbury v. Madison (1803) established judicial review."
          },
          {
            "id": "ush2-l7-q3",
            "stem": "By the mid-eighteenth century, the process of \"Anglicization\" across the British North American colonies was evidenced by:",
            "options": [
              "The complete refusal of colonial merchants to purchase any manufactured commodities produced in Great Britain.",
              "The total abandonment of the English common law tradition in favor of French civil law.",
              "The widespread adoption of British political ideals, consumer goods, architectural styles, and print culture by colonial elites seeking to emulate English gentility.",
              "The mass conversion of all colonial residents to Roman Catholicism."
            ],
            "correctIndex": 2,
            "explanation": "'Anglicization' describes how colonists became more culturally British over time: reading British newspapers, importing English ceramics and tea sets, copying Georgian architecture, and celebrating English constitutional liberties.",
            "distractorTip": "The paradox of the pre-Revolutionary colonies is that they were becoming more culturally and economically integrated into the British Empire even as they developed habits of political autonomy."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "p3",
    "title": "Period 3: 1754–1800",
    "shortTitle": "Period 3: Revolutionary Era",
    "description": "French and Indian War, imperial taxation, Revolutionary War, Articles of Confederation, Constitutional Convention, and Federalist Era",
    "examWeight": "10–17% of AP Exam",
    "biome": {
      "name": "Independence Hall & Frontier Redoubts",
      "icon": "📜",
      "accentColor": "#3B82F6",
      "secondaryColor": "#1D4ED8",
      "groundGradient": "from-blue-100 via-sky-50 to-indigo-100",
      "cardBorder": "border-blue-500",
      "trailColor": "#3b82f6",
      "nodeRing": "ring-blue-400/40",
      "skyTint": "from-blue-50 to-sky-50/30"
    },
    "levels": [
      {
        "id": 301,
        "unitIndex": 3,
        "levelNumber": 1,
        "uniqueKey": "ush-p3-l1",
        "topicNumber": "Topic 3.1 & 3.2",
        "name": "Seven Years' War & Salutary Neglect",
        "subtitle": "Imperial crisis, Treaty of Paris 1763, and Pontiac's Rebellion",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush3-l1-q1",
            "stem": "What decisive geopolitical shift resulted from the British victory over France in the Seven Years' War (French and Indian War) in 1763?",
            "options": [
              "Spain gained total sovereignty over all thirteen British Atlantic seaboard colonies.",
              "France annexed the Hudson Bay territories and expelled British fur traders from New England.",
              "Great Britain acquired French Canada and all territorial claims east of the Mississippi River, while accumulating immense imperial war debt.",
              "The British Crown dismantled the Royal Navy and granted immediate independence to the American colonies."
            ],
            "correctIndex": 2,
            "explanation": "The 1763 Treaty of Paris expelled French imperial power from North America. However, Britain's national debt doubled to over £130 million, leading Parliament to end 'salutary neglect' and begin directly taxing American colonists to pay for imperial defense.",
            "distractorTip": "Victory in 1763 removed the French military threat from the colonists' frontier, paradoxically making them feel LESS dependent on British troops for protection."
          },
          {
            "id": "ush3-l1-q2",
            "stem": "The Proclamation of 1763 was issued by King George III primarily to achieve which objective?",
            "options": [
              "To compel American merchants to sell all grain exclusively to Spanish Caribbean ports.",
              "To mandate that all colonial children attend Anglican Sunday schools.",
              "To confiscate all firearms and hunting muskets in the colony of Massachusetts.",
              "To halt colonial westward settlement beyond the Appalachian Mountains in order to prevent costly armed conflicts with Native Americans (such as Pontiac's Rebellion)."
            ],
            "correctIndex": 3,
            "explanation": "Following Pontiac's violent uprising against incoming British settlers in the Great Lakes region, the Crown drew a boundary line along the Appalachians, forbidding colonial settlement to pacify tribes and avoid expensive military deployments.",
            "distractorTip": "Colonists were furious at the Proclamation, viewing it as royal tyranny that denied them access to fertile Ohio Valley lands they had fought the French to secure."
          },
          {
            "id": "ush3-l1-q3",
            "stem": "Why did the British Proclamation of 1763 provoke intense fury among American colonists, especially in Virginia and Pennsylvania?",
            "options": [
              "It required all colonists to convert to the French Catholic Church.",
              "It ordered the immediate evacuation of all seaboard colonial port cities.",
              "It abolished the colonial assembly's power to issue paper currency.",
              "It prohibited colonial settlement west of the Appalachian Mountains, frustrating land speculators and frontiersmen who believed they had fought the French and Indian War to secure that territory."
            ],
            "correctIndex": 3,
            "explanation": "To avoid costly clashes with Indigenous confederacies after Pontiac's Rebellion, King George III drew the Proclamation Line of 1763 along the Appalachians, forbidding westward settlement; colonists viewed this as an arbitrary infringement on their liberty and economic opportunity.",
            "distractorTip": "Colonists largely ignored the Proclamation Line and poured over the mountains anyway, establishing an early pattern of defiance against crown authority."
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "ush-p3-l2",
        "topicNumber": "Topic 3.3",
        "name": "Taxation Without Representation",
        "subtitle": "Stamp Act, non-importation agreements, and Declaratory Act",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush3-l2-q1",
            "stem": "Why did the Stamp Act of 1765 provoke far more intense and unified colonial fury than earlier customs duties like the Sugar Act?",
            "options": [
              "It was an internal direct tax on everyday paper documents (legal papers, newspapers, playing cards) enacted by a Parliament where colonists had no elected representation.",
              "It doubled the price of all transatlantic slave imports into Virginia.",
              "It prohibited colonists from worshiping in Congregational churches on Sundays.",
              "It mandated that all colonial paper money be physically shipped to London for royal destruction."
            ],
            "correctIndex": 0,
            "explanation": "Previous taxes were external duties on maritime imports. The Stamp Act was the first internal tax touching daily colonial commercial life, sparking the constitutional rallying cry: 'No taxation without representation!'",
            "distractorTip": "Colonists rejected British Prime Minister George Grenville's theory of 'virtual representation,' insisting that only their own colonial assemblies had the constitutional right to tax them."
          },
          {
            "id": "ush3-l2-q2",
            "stem": "Which strategy implemented by the Stamp Act Congress and local Sons of Liberty proved most effective in forcing Parliament to repeal the Stamp Act in 1766?",
            "options": [
              "Launching a full-scale colonial naval invasion of the British Isles.",
              "Coordinated non-importation and non-consumption boycott agreements that caused severe financial distress for British merchants and exporters.",
              "A total diplomatic secession treaty negotiated with the Austrian Empire.",
              "Unanimous payment of all stamp duties in depreciated colonial paper currency."
            ],
            "correctIndex": 1,
            "explanation": "Colonial non-importation pacts cut British exports to America by nearly 40%. Devastated London merchants petitioned Parliament for immediate repeal, demonstrating the potent leverage of colonial economic boycotts.",
            "distractorTip": "When Parliament repealed the Stamp Act, it simultaneously passed the Declaratory Act (1766), defiantly claiming absolute authority to bind the colonies 'in all cases whatsoever.'"
          },
          {
            "id": "ush3-l2-q3",
            "stem": "Why did the Stamp Act of 1765 generate far more widespread, coordinated resistance throughout the colonies than previous revenue measures like the Sugar Act?",
            "options": [
              "Because it was the first direct internal tax on everyday paper documents consumed by colonists within the colonies, rather than an external duty on overseas maritime trade.",
              "Because it doubled the price of tea imported from the British East India Company.",
              "Because it eliminated trial by jury for all colonial property crimes.",
              "Because it applied exclusively to poor indentured servants while exempting wealthy lawyers and merchants."
            ],
            "correctIndex": 0,
            "explanation": "Previous duties (like the Sugar Act of 1764) were external tariffs on overseas trade (which Parliament had long regulated); the Stamp Act was a direct internal tax on legal deeds, newspapers, and playing cards, violating the sacred British principle that only a people's elected representatives could tax them.",
            "distractorTip": "Keep the constitutional distinction clear: colonists accepted Parliament's right to regulate external trade ('external taxes'), but vehemently rejected Parliament's authority to levy direct 'internal taxes.'"
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "ush-p3-l3",
        "topicNumber": "Topic 3.4",
        "name": "Philosophical Foundations & Common Sense",
        "subtitle": "John Locke's social contract and Thomas Paine's revolutionary pamphlet",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush3-l3-q1",
            "stem": "Thomas Paine's radical January 1776 pamphlet 'Common Sense' was uniquely influential because it:",
            "options": [
              "Argued that only hereditary aristocrats and wealthy merchants possessed the intellect to govern.",
              "Advocated that America should rejoin the French royal empire to escape British taxes.",
              "Used plain, biblical, and accessible language to convince common colonists that monarchical rule was unnatural and total independence was the only moral course.",
              "Proposed a compromise restoring royal governors in exchange for tax exemptions on rum."
            ],
            "correctIndex": 2,
            "explanation": "Paine directly attacked the sacred institution of hereditary monarchy, calling King George III a 'royal brute' and arguing that an island had no natural right to rule a continent, galvanizing widespread popular support for complete independence.",
            "distractorTip": "Before Common Sense, most colonial leaders still claimed they were loyal British subjects merely fighting corrupt parliamentary ministers; Paine shifted the goal to complete independence."
          },
          {
            "id": "ush3-l3-q2",
            "stem": "Which Enlightenment philosopher's social contract theory was most directly incorporated by Thomas Jefferson into the Declaration of Independence (1776)?",
            "options": [
              "Niccolò Machiavelli's advice on deceitful political statecraft in The Prince.",
              "Thomas Hobbes's defense of absolute monarchical sovereignty in Leviathan.",
              "Jean-Jacques Rousseau's demand for the immediate elimination of all private property.",
              "John Locke's doctrine that governments derive their just powers from the consent of the governed to protect natural rights to life, liberty, and estate."
            ],
            "correctIndex": 3,
            "explanation": "Jefferson closely paraphrased Locke's Second Treatise of Government: when a ruler exhibits a 'long train of abuses' violating natural rights, the people have a moral duty to alter or abolish that government.",
            "distractorTip": "Jefferson famously adapted Locke's 'life, liberty, and estate (property)' into the immortal phrase 'life, liberty, and the pursuit of happiness.'"
          },
          {
            "id": "ush3-l3-q3",
            "stem": "In his radical 1776 pamphlet Common Sense, Thomas Paine transformed the colonial political debate by:",
            "options": [
              "Urging the Continental Congress to accept a compromise preserving royal authority under King George III.",
              "Using plain, accessible language and biblical imagery to attack the hereditary institution of monarchy itself and advocate for an independent democratic republic.",
              "Demanding the immediate restoration of the British East India Company's tea monopoly.",
              "Recommending that the thirteen colonies request military annexation by the Russian Empire."
            ],
            "correctIndex": 1,
            "explanation": "Before Paine, many colonists blamed Parliament or corrupt ministers while professing loyalty to the King; Paine attacked the absurdity of an island ruling a continent and the injustice of hereditary kingship, converting hundreds of thousands to the cause of outright independence.",
            "distractorTip": "Common Sense was written in bold, unpretentious prose designed for taverns and public readings, making revolutionary ideology accessible to ordinary working people."
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "ush-p3-l4",
        "topicNumber": "Topic 3.5",
        "name": "The Revolutionary War",
        "subtitle": "Saratoga, French alliance, and the Treaty of Paris 1783",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush3-l4-q1",
            "stem": "Why is the American victory at the Battle of Saratoga (October 1777) universally recognized by historians as the turning point of the Revolutionary War?",
            "options": [
              "It persuaded France to formally recognize American independence and enter the war as a military and financial ally against Great Britain.",
              "It resulted in the immediate capture of the entire British Royal Navy in Boston Harbor.",
              "It prompted King George III to sign an unconditional surrender in London the following week.",
              "It led General George Washington to retire from military service to run for president."
            ],
            "correctIndex": 0,
            "explanation": "General Horatio Gates and Benedict Arnold's capture of British General Burgoyne's army proved the Continentals could defeat a major British force, enabling Benjamin Franklin in Paris to negotiate the Franco-American Treaty of Alliance of 1778.",
            "distractorTip": "French military aid—especially naval fleets under Admiral de Grasse and ground troops under Rochambeau—was essential to trapping Cornwallis at Yorktown in 1781."
          },
          {
            "id": "ush3-l4-q2",
            "stem": "Under the Treaty of Paris (1783) ending the American Revolutionary War, Great Britain formally recognized:",
            "options": [
              "American independence restricted strictly to the original thirteen Atlantic coastal states.",
              "The independence of the United States with boundaries extending west to the Mississippi River, north to the Great Lakes, and south to Spanish Florida.",
              "British retention of all forts and fur trade posts in the Ohio Valley in perpetuity.",
              "A joint Anglo-American protectorate over the Caribbean sugar islands."
            ],
            "correctIndex": 1,
            "explanation": "American diplomats (Franklin, John Adams, John Jay) secured exceptionally generous boundaries, gaining all land east of the Mississippi River, doubling the size of the fledgling republic.",
            "distractorTip": "Spain regained Florida in 1783, while the US border stopped at the Mississippi River (which remained under contested Spanish navigation control)."
          },
          {
            "id": "ush3-l4-q3",
            "stem": "The Battle of Saratoga (1777) is recognized by historians as the decisive military turning point of the American Revolutionary War because:",
            "options": [
              "It resulted in the immediate capture of King George III by General George Washington.",
              "It forced the British army to completely abandon New York City for the remainder of the war.",
              "The dramatic American victory convinced the French monarchy under Louis XVI to enter into a formal military alliance with the United States, providing essential naval, financial, and troop support.",
              "It ended all fighting in North America and initiated the immediate signing of the Treaty of Paris."
            ],
            "correctIndex": 2,
            "explanation": "Horatio Gates and Benedict Arnold forced British General Burgoyne to surrender his entire army at Saratoga; this demonstrated to France that the Americans could defeat British regulars in pitched battle, securing Benjamin Franklin's treaty of alliance in 1778.",
            "distractorTip": "Without French naval power (under Admiral de Grasse) cutting off British escape at Yorktown (1781), the Continental Army could not have forced Cornwallis's surrender."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "ush-p3-l5",
        "topicNumber": "Topic 3.6",
        "name": "The Articles of Confederation",
        "subtitle": "Structural weaknesses, the Northwest Ordinance, and Shays' Rebellion",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush3-l5-q1",
            "stem": "What was the single most glaring structural weakness of the national government under the Articles of Confederation (1781–1789)?",
            "options": [
              "Amendments to the Articles required only a simple majority vote of three out of thirteen states.",
              "The national government possessed an overwhelmingly powerful executive monarch who dissolved state legislatures at will.",
              "The unicameral Confederation Congress lacked the constitutional power to levy taxes, regulate interstate commerce, or enforce its laws with an executive branch.",
              "The federal Supreme Court repeatedly struck down state currency laws as unconstitutional."
            ],
            "correctIndex": 2,
            "explanation": "Having just rebelled against King George III, the Founders deliberately created a weak central government: Congress could only request financial requisitions from sovereign states, leaving the national treasury bankrupt.",
            "distractorTip": "Amendments to the Articles required UNANIMOUS approval of all 13 states, making structural reform virtually impossible."
          },
          {
            "id": "ush3-l5-q2",
            "stem": "What was the most enduring legislative achievement enacted by the Confederation Congress under the Articles of Confederation?",
            "options": [
              "The purchase of the Louisiana Territory from Napoleonic France.",
              "The creation of the First Bank of the United States with a twenty-year charter.",
              "The ratification of the federal Bill of Rights guaranteeing religious liberty.",
              "The Northwest Ordinance of 1787, which established a mechanism for admitting new states on equal footing and prohibited slavery in the Ohio Valley territory."
            ],
            "correctIndex": 3,
            "explanation": "The Northwest Ordinance created an orderly blueprint for public education, statehood admission, and landmark civil liberties, including the historic prohibition of slavery north of the Ohio River.",
            "distractorTip": "The Bank of the US was created under the 1787 Constitution by Hamilton, while the Louisiana Purchase occurred in 1803 under Jefferson."
          },
          {
            "id": "ush3-l5-q3",
            "stem": "What was the most enduring legislative accomplishment achieved under the Articles of Confederation government?",
            "options": [
              "The establishment of a universal federal income tax and national bank.",
              "The creation of a standing continental army of 100,000 professional soldiers.",
              "The negotiation of a permanent free-trade customs union with the Spanish Empire.",
              "The passage of the Northwest Ordinance of 1787, which established a mechanism for admitting new states on equal footing with existing states and permanently banned slavery in the Northwest Territory."
            ],
            "correctIndex": 3,
            "explanation": "The Northwest Ordinance set the precedent for territorial expansion: territories would become self-governing states once reaching 60,000 population, funded public education, and barred slavery north of the Ohio River.",
            "distractorTip": "The Articles government was notoriously weak at taxation and commerce, but its land policies (Land Ordinance of 1785 and Northwest Ordinance of 1787) were visionary successes."
          }
        ]
      },
      {
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "ush-p3-l6",
        "topicNumber": "Topic 3.7",
        "name": "The Constitutional Convention",
        "subtitle": "The Great Compromise, Three-Fifths Clause, and the Electoral College",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush3-l6-q1",
            "stem": "The 'Great Compromise' (Connecticut Compromise) resolved the bitter deadlock between large and small states at the 1787 Constitutional Convention by establishing:",
            "options": [
              "A bicameral national legislature with proportional representation based on population in the House, and equal representation (two senators per state) in the Senate.",
              "A direct national popular vote system for electing both the president and federal judges.",
              "A lifetime executive council consisting of three regional governors with veto power over Congress.",
              "An alternating system where large and small states traded executive branches every four years."
            ],
            "correctIndex": 0,
            "explanation": "Roger Sherman's compromise synthesized James Madison's Virginia Plan (population-based representation) with William Paterson's New Jersey Plan (equal state representation), satisfying both populous and smaller states.",
            "distractorTip": "Revenue bills were required to originate in the House of Representatives because it directly represented the voting populace."
          },
          {
            "id": "ush3-l6-q2",
            "stem": "How did the 1787 Constitutional Convention address the institution of human chattel slavery in the foundational charter?",
            "options": [
              "By declaring all enslaved persons born after 1787 free citizens of the United States.",
              "By counting three-fifths of an enslaved population for congressional representation/taxation, and barring Congress from banning the transatlantic slave trade until 1808.",
              "By explicitly outlawing the domestic slave trade across state borders.",
              "By using the specific word 'slave' thirty-two times throughout the legal text."
            ],
            "correctIndex": 1,
            "explanation": "To preserve Southern ratification, the Constitution protected slavery through the Three-Fifths Clause, the Fugitive Slave Clause, and a twenty-year ban on federal slave import restrictions, while notoriously avoiding the words 'slave' or 'slavery' in the text.",
            "distractorTip": "The Founders used euphemisms like 'other persons' and 'persons held to service or labor' to mask the moral contradiction with the Declaration of Independence."
          },
          {
            "id": "ush3-l6-q3",
            "stem": "At the 1787 Constitutional Convention in Philadelphia, the Great Compromise (Connecticut Compromise) resolved the dispute between large and small states by:",
            "options": [
              "Establishing a bicameral legislature with proportional representation in the House of Representatives and equal representation (two senators) in the Senate.",
              "Abolishing the executive presidency in favor of a rotating triumvirate of governors.",
              "Requiring all federal laws to receive a three-fourths supermajority vote in the state legislatures.",
              "Allocating congressional seats based strictly on the geographical acreage of each state."
            ],
            "correctIndex": 0,
            "explanation": "Roger Sherman brokered the compromise between the Virginia Plan (proportional representation based on population) and the New Jersey Plan (equal representation for each state), creating the modern bicameral Congress.",
            "distractorTip": "Do not confuse the Great Compromise (large vs. small states / legislative structure) with the Three-Fifths Compromise (North vs. South / representation of enslaved persons)."
          }
        ]
      },
      {
        "id": 307,
        "unitIndex": 3,
        "levelNumber": 7,
        "uniqueKey": "ush-p3-l7",
        "topicNumber": "Topic 3.8",
        "name": "Federalists vs. Anti-Federalists",
        "subtitle": "Federalist #10, ratifying debates, and the Bill of Rights",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush3-l7-q1",
            "stem": "In Federalist No. 10, James Madison famously argued that the dangerous threat of political 'factions' (interest groups) is best managed by:",
            "options": [
              "Dividing the United States into three separate, independent confederacies.",
              "Outlawing all opposition political parties and establishing a one-party state.",
              "Establishing an extensive, large republic where a great diversity of competing interests makes it difficult for any single faction to form a tyrannical majority.",
              "Restricting voting rights exclusively to landowning military officers."
            ],
            "correctIndex": 2,
            "explanation": "Anti-Federalists claimed republics could only survive in small, homogeneous territories. Madison inverted this classical theory, demonstrating that an extended republic multiplies factions, neutralizing their corrupting power through pluralistic competition.",
            "distractorTip": "In Federalist No. 51, Madison explained checks and balances and separation of powers: 'Ambition must be made to counteract ambition.'"
          },
          {
            "id": "ush3-l7-q2",
            "stem": "What was the primary objection voiced by Anti-Federalists (such as George Mason and Patrick Henry) against ratifying the proposed Constitution?",
            "options": [
              "The constitutional requirement that all thirteen states ratify amendments unanimously.",
              "The failure to establish a permanent hereditary king to maintain social stability.",
              "The prohibition against levying high import tariffs on foreign manufactured goods.",
              "The lack of a specific, explicit Bill of Rights protecting individual civil liberties against federal encroachment, and fears of an overreaching central government."
            ],
            "correctIndex": 3,
            "explanation": "Anti-Federalists feared the 'necessary and proper' and supremacy clauses would obliterate state sovereignty and individual rights, agreeing to support ratification only after Federalists promised to immediately add a Bill of Rights.",
            "distractorTip": "The Bill of Rights (first ten amendments, drafted by James Madison) was ratified in 1791, fulfilling the Federalists' ratification pledge."
          },
          {
            "id": "ush3-l7-q3",
            "stem": "In Federalist No. 10, James Madison argued that the danger of factionalism in a republic could be best controlled by:",
            "options": [
              "Banning all political parties and civic associations by constitutional amendment.",
              "Creating an extended republic over a large territory, where a great variety of parties and interests make it difficult for an oppressive majority faction to unite and oppress minorities.",
              "Limiting political citizenship strictly to small, homogeneous agrarian townships.",
              "Establishing a hereditary monarch with absolute veto power over the legislature."
            ],
            "correctIndex": 1,
            "explanation": "Classical political theory held that republics could only survive in small city-states; Madison inverted this thesis in Federalist No. 10, arguing that a large, diverse republic prevents any single faction from dominating the national government.",
            "distractorTip": "Anti-Federalists feared that a distant, large republic would inevitably devolve into tyranny; Madison countered that size and diversity were precisely what would protect liberty."
          }
        ]
      },
      {
        "id": 308,
        "unitIndex": 3,
        "levelNumber": 8,
        "uniqueKey": "ush-p3-l8",
        "topicNumber": "Topic 3.9",
        "name": "Hamilton's Financial Plan & Political Parties",
        "subtitle": "Bank of the US, broad constructionism, and the Whiskey Rebellion",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush3-l8-q1",
            "stem": "Alexander Hamilton justified the constitutional legality of creating the First Bank of the United States (1791) by relying upon:",
            "options": [
              "A 'loose/broad construction' of the Constitution grounded in the 'necessary and proper' (elastic) clause of Article I, Section 8.",
              "A strict textual interpretation limiting Congress strictly to the enumerated powers listed verbatim in the Constitution.",
              "An explicit presidential decree issued under George Washington's wartime commander-in-chief powers.",
              "A unanimous ruling handed down by the international court of arbitration in Geneva."
            ],
            "correctIndex": 0,
            "explanation": "Thomas Jefferson argued for strict construction (if it's not explicitly in the Constitution, Congress cannot do it). Hamilton countered that creating a national bank was an 'implied power' necessary to execute enumerated powers like collecting taxes and borrowing money.",
            "distractorTip": "This fundamental constitutional disagreement between Hamilton (Federalists) and Jefferson (Democratic-Republicans) gave birth to America's First Party System."
          },
          {
            "id": "ush3-l8-q2",
            "stem": "How did President George Washington's response to the 1794 Whiskey Rebellion in western Pennsylvania differ fundamentally from the Confederation government's handling of Shays' Rebellion in 1786?",
            "options": [
              "Washington fled the capital and allowed the rebels to occupy the national treasury in Philadelphia.",
              "Washington personally led a federalized militia force of 13,000 troops to swiftly suppress the tax protest, proving the new Constitution could enforce federal law.",
              "Washington immediately abolished all federal excise taxes to placate the protestors.",
              "Washington requested French military intervention to restore domestic order."
            ],
            "correctIndex": 1,
            "explanation": "While the weak Articles government was powerless to stop Shays' Rebellion, the new constitutional government demonstrated decisive executive power and the supremacy of federal law by marching a massive militia into western Pennsylvania.",
            "distractorTip": "The Whiskey Rebellion was provoked by Hamilton's excise tax on distilled spirits, which backcountry farmers distilled from surplus corn as currency."
          },
          {
            "id": "ush3-l8-q3",
            "stem": "How did Alexander Hamilton justify the constitutionality of chartering the First Bank of the United States against Thomas Jefferson's strict constructionist objections?",
            "options": [
              "By citing the President's explicit constitutional authority as Commander-in-Chief of the military.",
              "By arguing that state legislatures possessed no legal authority under the new Constitution.",
              "By invoking the \"necessary and proper\" clause (elastic clause) of Article I, arguing that Congress possessed implied powers to enact legislation reasonably related to its enumerated fiscal duties.",
              "By relying on a binding mutual defense treaty previously ratified with Great Britain."
            ],
            "correctIndex": 2,
            "explanation": "Jefferson argued the Constitution nowhere mentioned a bank; Hamilton countered with the doctrine of 'implied powers,' stating that since Congress had enumerated powers to collect taxes, borrow money, and regulate commerce, a national bank was a 'necessary and proper' means to that constitutional end.",
            "distractorTip": "This historic debate between Hamilton (loose/broad constructionism) and Jefferson (strict constructionism) laid the philosophical groundwork for the first two-party system (Federalists vs. Democratic-Republicans)."
          }
        ]
      },
      {
        "id": 309,
        "unitIndex": 3,
        "levelNumber": 9,
        "uniqueKey": "ush-p3-l9",
        "topicNumber": "Topic 3.10",
        "name": "Foreign Policy & The Federalist Era",
        "subtitle": "Washington's Farewell Address, the XYZ Affair, and Alien & Sedition Acts",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush3-l9-q1",
            "stem": "In his historic Farewell Address of 1796, President George Washington explicitly warned the American public against which two domestic and foreign perils?",
            "options": [
              "The abolition of human chattel slavery and universal public education.",
              "The expansion of western settlement and the construction of interstate turnpikes.",
              "The divisive dangers of partisan political factions and entangling, permanent alliances with foreign European powers.",
              "The establishment of a national currency and the imposition of maritime customs tariffs."
            ],
            "correctIndex": 2,
            "explanation": "Witnessing the bitter rise of political parties and the foreign policy crisis sparked by the French Revolution, Washington urged Americans to cherish national unity, reject partisan factionalism, and avoid permanent alliances that could drag the young nation into European wars.",
            "distractorTip": "Washington's advice established the cornerstone of American isolationist foreign policy that endured until World War II."
          },
          {
            "id": "ush3-l9-q2",
            "stem": "The Kentucky and Virginia Resolutions (1798), authored secretly by Thomas Jefferson and James Madison in response to the Federalist Alien and Sedition Acts, introduced the radical constitutional doctrine of:",
            "options": [
              "The permanent disenfranchisement of all foreign-born naturalized citizens.",
              "The immediate dissolution of the United States Supreme Court and judicial branch.",
              "The legal re-establishment of the British monarchy over Virginia.",
              "State nullification: the theory that sovereign states possess the constitutional authority to declare unconstitutional federal laws null and void within their borders."
            ],
            "correctIndex": 3,
            "explanation": "Adams's Federalist administration weaponized the Sedition Act to imprison Republican newspaper editors. Jefferson and Madison's resolutions argued the Constitution was a compact between sovereign states, empowering states to judge federal overreach and 'nullify' unconstitutional acts.",
            "distractorTip": "John C. Calhoun later weaponized this 'nullification' doctrine in the 1830s Nullification Crisis, laying the ideological groundwork for Southern secession in 1860."
          },
          {
            "id": "ush3-l9-q3",
            "stem": "The Kentucky and Virginia Resolutions (1798), authored secretly by Thomas Jefferson and James Madison, were historically significant because they advanced which constitutional doctrine?",
            "options": [
              "The absolute supremacy of federal judicial review over all state court decisions.",
              "The right of the President to unilaterally suspend the writ of habeas corpus during peacetime.",
              "The constitutional requirement that all federal taxes receive unanimous state approval.",
              "The compact theory of the Union, asserting that individual states could judge the constitutionality of federal laws and \"nullify\" acts (like the Alien and Sedition Acts) that exceeded delegated federal powers."
            ],
            "correctIndex": 3,
            "explanation": "Outraged by the Federalist Alien and Sedition Acts, Jefferson and Madison argued that the states had entered into a voluntary 'compact' to create the national government; therefore, states retained the sovereign right to interpose or nullify unconstitutional federal laws—a doctrine later resurrected by antebellum southern secessionists.",
            "distractorTip": "The nullification doctrine originated here as a defense of free speech against Federalist overreach, but would later be weaponized by John C. Calhoun to defend slavery."
          }
        ]
      },
      {
        "id": 310,
        "unitIndex": 3,
        "levelNumber": 10,
        "uniqueKey": "ush-p3-l10",
        "topicNumber": "Period 3 Boss Level",
        "name": "Period 3 Capstone & Synthesis",
        "subtitle": "Mastery of the American Revolution, Constitution, and early republic",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "ush3-l10-q1",
            "stem": "Why was Thomas Jefferson's victory over John Adams in the presidential election of 1800 heralded as the 'Revolution of 1800'?",
            "options": [
              "It marked the first peaceful transfer of executive political power from one competing political party to another in modern democratic history.",
              "It was accompanied by a violent armed coup in which Republican militias burned federal buildings in Washington, D.C.",
              "It resulted in the immediate constitutional abolition of the presidency and restoration of the Articles of Confederation.",
              "It resulted in the wholesale execution of Federalist cabinet members by military tribunal."
            ],
            "correctIndex": 0,
            "explanation": "Despite vicious partisan mudslinging, the election of 1800 established the sacred democratic precedent that political power could transition peacefully between bitter rival parties through the ballot box rather than bloodshed.",
            "distractorTip": "The 12th Amendment was ratified in 1804 as a direct result of the 1800 election tie between Thomas Jefferson and his running mate Aaron Burr, separating presidential and vice-presidential ballots."
          },
          {
            "id": "ush3-l10-q2",
            "stem": "The post-Revolutionary cultural ideology of 'Republican Motherhood' emphasized that women contributed most vitally to the republic by:",
            "options": [
              "Holding elected political offices and serving on federal judicial benches.",
              "Educating their sons in civic virtue, liberty, and democratic principles within the domestic sphere to cultivate moral citizens.",
              "Serving as armed frontline infantry soldiers in the standing continental army.",
              "Abandoning all household domestic responsibilities to establish urban merchant banking firms."
            ],
            "correctIndex": 1,
            "explanation": "Republican Motherhood expanded female educational opportunities so mothers could effectively school their children in the civic republican virtues necessary to sustain a self-governing democracy, while still confining women's primary role to the private home.",
            "distractorTip": "Republican Motherhood did NOT grant women voting rights or legal equality, but it elevated their moral importance in shaping the future citizenry of the nation."
          },
          {
            "id": "ush3-l10-q3",
            "stem": "The concept of \"Republican Motherhood\" that gained prominence following the American Revolution held that:",
            "options": [
              "Women played a vital civic role in the republic by educating their sons in moral virtue, patriotism, and republican principles, thereby justifying expanded educational access for women.",
              "Women should be granted full voting rights and elected to state legislative offices.",
              "Women should serve alongside men in armed militia regiments during peacetime.",
              "Women should abandon all domestic family responsibilities to work in urban textile factories."
            ],
            "correctIndex": 0,
            "explanation": "Republican Motherhood gave women an elevated civic status within the domestic sphere: as mothers, they were tasked with cultivating virtuous, enlightened citizens necessary for the survival of the republic, which in turn spurred the founding of female academies.",
            "distractorTip": "Republican Motherhood was not political equality or suffrage; it reinforced women's domestic domain while opening new opportunities for female literacy and education."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "p4",
    "title": "Period 4: 1800–1848",
    "shortTitle": "Period 4: Early Republic",
    "description": "Jeffersonian democracy, the Marshall Court, the Market Revolution, Jacksonian democracy, and the Second Great Awakening",
    "examWeight": "10–17% of AP Exam",
    "biome": {
      "name": "Canal Locks & Cotton Gin Mills",
      "icon": "🏭",
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
        "uniqueKey": "ush-p4-l1",
        "topicNumber": "Topic 4.1 & 4.2",
        "name": "Jeffersonian Democracy & The Louisiana Purchase",
        "subtitle": "Strict constructionism, Western agrarian vision, and the Embargo of 1807",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush4-l1-q1",
            "stem": "Why did Thomas Jefferson experience profound constitutional hesitation before consummating the 1803 Louisiana Purchase from France?",
            "options": [
              "He believed the Rocky Mountains were impassable and completely devoid of agricultural value.",
              "He feared Napoleon Bonaparte would use the $15 million purchase price to invade Virginia.",
              "As a strict constructionist, he recognized that the Constitution nowhere explicitly granted the president the power to acquire foreign territory.",
              "The purchase violated a binding mutual defense treaty previously signed with Great Britain."
            ],
            "correctIndex": 2,
            "explanation": "Jefferson championed strict adherence to enumerated constitutional powers. However, purchasing 828,000 square miles for $15 million (doubling the nation's size) forced him to adopt Hamilton's loose constructionist interpretation using the presidential treaty-making power.",
            "distractorTip": "Jefferson prioritized securing control of the Mississippi River and the Port of New Orleans to guarantee an agrarian 'Empire of Liberty' for independent yeoman farmers."
          },
          {
            "id": "ush4-l1-q2",
            "stem": "What was the primary domestic consequence of President Jefferson's Embargo Act of 1807, which prohibited all American exports to foreign ports?",
            "options": [
              "It led to the permanent annexation of British Canada by American frontier militias.",
              "It immediately compelled Great Britain and France to sign unconditional peace treaties with the United States.",
              "It sparked an immediate economic boom in southern cotton and tobacco production.",
              "It devastated the American maritime merchant economy, particularly in New England, while failing to stop British and French impressment."
            ],
            "correctIndex": 3,
            "explanation": "Designed as 'peaceable coercion' to force respect for American neutral shipping rights, the embargo backfired disastrously, shuttering American harbors, triggering widespread bankruptcies, and provoking defiance in New England port cities.",
            "distractorTip": "The economic disaster of the Embargo Act contributed to the revival of the Federalist Party in the Northeast during the 1808 election."
          },
          {
            "id": "ush4-l1-q3",
            "stem": "How did the Embargo Act of 1807 impact the American domestic economy?",
            "options": [
              "It caused an unprecedented economic boom in southern cotton and Chesapeake tobacco exports.",
              "It devastated American maritime shipping, sparking widespread smuggling in New England and unintentionally stimulating northeastern domestic manufacturing.",
              "It forced Great Britain to immediately surrender its North American naval fleets.",
              "It bankrupted the Bank of the United States and triggered the panic of 1819."
            ],
            "correctIndex": 1,
            "explanation": "Jefferson's embargo prohibited American ships from trading with foreign ports to punish Britain and France; while it failed to coerce the European powers, it crippled port commerce, stoked New England secessionist talk, and pushed capital into domestic textile manufacturing.",
            "distractorTip": "Note the unintended consequence: Jefferson, who envisioned an agrarian nation of yeoman farmers, inadvertently accelerated American industrial self-sufficiency."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "ush-p4-l2",
        "topicNumber": "Topic 4.2",
        "name": "The Marshall Court & Judicial Nationalism",
        "subtitle": "Marbury v. Madison, McCulloch v. Maryland, and federal supremacy",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush4-l2-q1",
            "stem": "In the landmark Supreme Court decision Marbury v. Madison (1803), Chief Justice John Marshall established which foundational constitutional principle?",
            "options": [
              "Judicial review: the supreme authority of the federal judiciary to declare acts of Congress unconstitutional.",
              "The constitutional right of state legislatures to nullify federal tariff legislation.",
              "The immediate abolition of capital punishment in all federal territories.",
              "The doctrine that states may tax federal bank branches located within their borders."
            ],
            "correctIndex": 0,
            "explanation": "Marshall brilliantly struck down Section 13 of the Judiciary Act of 1789, establishing the Supreme Court as the ultimate arbiter of constitutional meaning: 'It is emphatically the province and duty of the judicial department to say what the law is.'",
            "distractorTip": "Marshall Court decisions consistently strengthened the power of the federal government and contracts over state sovereignty."
          },
          {
            "id": "ush4-l2-q2",
            "stem": "In McCulloch v. Maryland (1819), the Marshall Court upheld the constitutionality of the Second Bank of the United States and struck down Maryland's state tax on the bank by ruling that:",
            "options": [
              "Individual states possess ultimate sovereign authority over all federal institutions within their borders.",
              "The Constitution grants Congress implied powers under the 'necessary and proper' clause, and 'the power to tax involves the power to destroy.'",
              "Private corporations have no legal protection under the contracts clause of the Constitution.",
              "Only the executive branch has the constitutional authority to regulate state banking currencies."
            ],
            "correctIndex": 1,
            "explanation": "Marshall affirmed the constitutionality of Hamilton's national bank doctrine and declared federal supremacy over state laws: states cannot tax federal instrumentalities because federal law reigns supreme under Article VI.",
            "distractorTip": "In Gibbons v. Ogden (1824), Marshall similarly affirmed federal supremacy by ruling that Congress alone possesses the power to regulate interstate commerce."
          },
          {
            "id": "ush4-l2-q3",
            "stem": "In the landmark ruling McCulloch v. Maryland (1819), Chief Justice John Marshall established which fundamental constitutional principles?",
            "options": [
              "That states possessed the constitutional authority to tax any federal agency operating within their borders.",
              "That the Bill of Rights applied directly to state governments as well as the federal government.",
              "That Congress possessed implied powers under the \"necessary and proper\" clause to create the Second Bank of the United States, and that states could not tax federal instrumentalities (\"the power to tax involves the power to destroy\").",
              "That the Supreme Court could not rule on matters involving state commercial disputes."
            ],
            "correctIndex": 2,
            "explanation": "Marshall upheld the constitutionality of the national bank using Hamilton's implied powers doctrine and declared Maryland's tax on the bank unconstitutional under the Supremacy Clause, reinforcing federal authority over state sovereignty.",
            "distractorTip": "Associate John Marshall with 'judicial nationalism'—consistently strengthening federal supremacy, contracts, and interstate commerce over state legislation."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "ush-p4-l3",
        "topicNumber": "Topic 4.3",
        "name": "War of 1812 & Hartford Convention",
        "subtitle": "British impressment, War Hawks, and the demise of the Federalists",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush4-l3-q1",
            "stem": "Which primary catalyst impelled Congressional 'War Hawks' (such as Henry Clay and John C. Calhoun) to demand war against Great Britain in 1812?",
            "options": [
              "British attempts to forcibly re-impose colonial royal governors over Virginia and Maryland.",
              "A surprise British naval bombardment that leveled New York City.",
              "British impressment of American sailors, commercial shipping blockades, and British armed support for Native American resistance in the Old Northwest.",
              "A formal military alliance signed between Great Britain and Napoleonic France to partition North America."
            ],
            "correctIndex": 2,
            "explanation": "Western and Southern Republicans were outraged by British naval impressment of over 6,000 American seamen and British arms supplied to Tecumseh's confederacy, viewing war as necessary to defend national honor and open western expansion.",
            "distractorTip": "New England merchants actually OPPOSED the War of 1812, continuing illicit trade with British Canada throughout the conflict."
          },
          {
            "id": "ush4-l3-q2",
            "stem": "What was the fatal political consequence of the Hartford Convention (December 1814) for the Federalist Party?",
            "options": [
              "Congress adopted all seven of their proposed constitutional amendments to restrict presidential power.",
              "Federalists successfully elected their candidate president in 1816 and abolished all federal excise taxes.",
              "The party merged with Southern plantation owners to form the modern Democratic Party.",
              "Because extreme delegates discussed New England secession just as the Treaty of Ghent and Jackson's victory at New Orleans arrived, Federalists were branded unpatriotic and their party permanently collapsed."
            ],
            "correctIndex": 3,
            "explanation": "New England Federalists met secretly to propose constitutional amendments curbing Republican influence; when news of their grievances arrived simultaneously with Andrew Jackson's stunning victory at New Orleans, Federalists were disgraced as traitors, effectively destroying the party.",
            "distractorTip": "The collapse of the Federalists ushered in the so-called 'Era of Good Feelings' (1815–1824) under President James Monroe."
          },
          {
            "id": "ush4-l3-q3",
            "stem": "The Hartford Convention of 1814 resulted in the permanent demise of the Federalist Party primarily because:",
            "options": [
              "Federalist delegates voted unanimously to abolish all state militias in New England.",
              "Federalist leaders were arrested and convicted of treason for providing weapons to the British army.",
              "The convention drafted an amendment requiring all presidents to be born in Virginia.",
              "Their secret deliberations—proposing constitutional amendments and hinting at New England secession—arrived in Washington just as news of Jackson's victory at New Orleans and the Treaty of Ghent sparked nationalistic euphoria, painting Federalists as unpatriotic traitors."
            ],
            "correctIndex": 3,
            "explanation": "At Hartford, moderate Federalists voiced frustration over the embargo and War of 1812; arriving in Washington right after Andrew Jackson's triumphant victory at New Orleans, their grievances appeared disloyal, destroying the party's national credibility.",
            "distractorTip": "The demise of the Federalists ushered in the one-party 'Era of Good Feelings' under Democratic-Republican James Monroe."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "ush-p4-l4",
        "topicNumber": "Topic 4.3 & 4.4",
        "name": "Missouri Compromise & Monroe Doctrine",
        "subtitle": "Sectional crisis over slavery expansion and Western Hemisphere diplomacy",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush4-l4-q1",
            "stem": "The Missouri Compromise of 1820, engineered by Henry Clay, temporarily defused the explosive sectional crisis over western slavery expansion by:",
            "options": [
              "Admitting Missouri as a slave state, Maine as a free state, and banning slavery in the remaining Louisiana Purchase territory north of the $36^\\circ 30'$ parallel.",
              "Abolishing the domestic slave trade across all states south of the Ohio River.",
              "Permitting popular sovereignty to determine the legal status of slavery in all future territories.",
              "Mandating that all western territories be settled exclusively by free European immigrants."
            ],
            "correctIndex": 0,
            "explanation": "The compromise preserved the delicate 12-to-12 balance in the U.S. Senate by admitting Maine and Missouri together, while drawing the geographic $36^\\circ 30'$ line north of which slavery was forever barred in the Louisiana Territory.",
            "distractorTip": "Thomas Jefferson famously called the Missouri controversy 'a fire bell in the night' that filled him with terror for the ultimate survival of the Union."
          },
          {
            "id": "ush4-l4-q2",
            "stem": "What was the central diplomatic assertion proclaimed in the Monroe Doctrine (1823), drafted by Secretary of State John Quincy Adams?",
            "options": [
              "The United States will immediately deploy expeditionary troops to assist Greek revolutionaries against the Ottoman Empire.",
              "The American continents are no longer subject to future European colonization, and European interference in sovereign Western Hemisphere nations will be viewed as an act of hostility.",
              "All South American republics must sign permanent military treaties subordinating their foreign policy to Washington.",
              "Great Britain was granted an exclusive, perpetual naval monopoly over the Gulf of Mexico."
            ],
            "correctIndex": 1,
            "explanation": "Alarmed by the potential for European monarchies (the Holy Alliance) to recolonize newly independent Latin American republics, Monroe declared the Western Hemisphere closed to European imperial ambitions, while pledging U.S. non-intervention in European wars.",
            "distractorTip": "Although the U.S. lacked the naval power to enforce it in 1823, Great Britain's Royal Navy enforced the doctrine because it protected British commercial dominance in Latin America."
          },
          {
            "id": "ush4-l4-q3",
            "stem": "The Missouri Compromise of 1820, engineered by Henry Clay, temporarily eased sectional conflict over slavery expansion by:",
            "options": [
              "Admitting Missouri as a slave state and Maine as a free state, while prohibiting slavery in the remainder of the Louisiana Purchase territory north of latitude 36°30'.",
              "Permitting popular sovereignty to determine slavery's legal status in all newly admitted western territories.",
              "Abolishing the domestic interstate slave trade throughout the United States.",
              "Requiring all enslaved people in Missouri to be emancipated upon reaching age twenty-five."
            ],
            "correctIndex": 0,
            "explanation": "Clay's compromise preserved the 11-to-11 balance in the US Senate by admitting Maine (free) and Missouri (slave), drawing the 36°30' parallel across the Louisiana Purchase as the boundary between slave and free territories.",
            "distractorTip": "Thomas Jefferson called the Missouri controversy a 'fire bell in the night,' recognizing that geographic lines dividing the nation over slavery would eventually tear the Union apart."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "ush-p4-l5",
        "topicNumber": "Topic 4.5",
        "name": "Market Revolution: Tech & Infrastructure",
        "subtitle": "The Erie Canal, cotton gin, and national transportation integration",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush4-l5-q1",
            "stem": "The completion of the Erie Canal in 1825 was revolutionary for the American economy because it:",
            "options": [
              "Caused the immediate economic collapse of midwestern agricultural farming.",
              "Allowed ocean-going naval warships to navigate overland from Boston to New Orleans.",
              "Connected the Great Lakes directly to the Hudson River and Atlantic Ocean, dramatically slashing western freight shipping costs and establishing New York City as the nation's premier commercial hub.",
              "Created a federal government monopoly controlling all interstate barge transportation."
            ],
            "correctIndex": 2,
            "explanation": "The Erie Canal dropped freight transit costs from $100 per ton to under $5 per ton, binding the agricultural Midwest economically to the industrial Northeast, accelerating western migration, and fueling New York City's explosive rise.",
            "distractorTip": "The Market Revolution fostered regional specialization: the South grew cotton, the West grew grain/livestock, and the Northeast manufactured goods."
          },
          {
            "id": "ush4-l5-q2",
            "stem": "What was the profound, unintended consequence of Eli Whitney's invention of the cotton gin (1793) on antebellum American society?",
            "options": [
              "It prompted Southern planters to transition their capital into urban rail and steamship manufacturing.",
              "It led to the immediate statutory abolition of slavery across Virginia and Maryland within a decade.",
              "It reduced the total acreage devoted to cotton farming across Georgia and Alabama.",
              "It made short-staple cotton enormously profitable, dramatically revitalizing and expanding the domestic slave trade into the Deep South ('Black Belt')."
            ],
            "correctIndex": 3,
            "explanation": "By mechanically separating seeds from cotton fibers 50 times faster than human hands, the cotton gin created explosive worldwide demand for cotton ('King Cotton'), driving a massive internal slave trade that forcefully relocated over one million enslaved people to the Deep South.",
            "distractorTip": "Whitney thought his invention would reduce the demand for slave labor; instead, it entrenched and vastly expanded the plantation slave economy."
          },
          {
            "id": "ush4-l5-q3",
            "stem": "How did the completion of the Erie Canal in 1825 transform the regional and economic geography of the United States?",
            "options": [
              "It connected the Gulf of Mexico directly to the Pacific Ocean across Central America.",
              "It tied the agricultural commerce of the Old Northwest directly to eastern financial markets via New York City, bypassing southern Mississippi river trade and cementing a northern economic axis.",
              "It led to the immediate economic collapse of all eastern manufacturing centers.",
              "It was funded exclusively by British royal investors who owned the toll rights for fifty years."
            ],
            "correctIndex": 1,
            "explanation": "The Erie Canal linked Lake Erie to the Hudson River, dropping freight costs by 90% and making New York City the nation's premier port, while economically binding midwestern farmers to northeastern urban markets.",
            "distractorTip": "The Erie Canal solidified the North-West economic alliance, leaving the South increasingly isolated in its reliance on King Cotton and river trade down to New Orleans."
          }
        ]
      },
      {
        "id": 406,
        "unitIndex": 4,
        "levelNumber": 6,
        "uniqueKey": "ush-p4-l6",
        "topicNumber": "Topic 4.6",
        "name": "Market Revolution: Society & Immigration",
        "subtitle": "Lowell mill girls, the Cult of Domesticity, and nativist backlash",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush4-l6-q1",
            "stem": "The 'Lowell System' in early nineteenth-century Massachusetts textile manufacturing was notable because it:",
            "options": [
              "Recruited young, unmarried rural farm women to live in supervised company boardinghouses and work mechanized water-powered textile looms.",
              "Relied exclusively on indentured European convicts imported through Boston harbor.",
              "Banned all mechanization and produced woolen goods entirely through manual hand spinning.",
              "Granted factory workers 50% equity ownership in the company and elected manager positions."
            ],
            "correctIndex": 0,
            "explanation": "Francis Cabot Lowell recruited young New England women ('Lowell Mill Girls') to provide a disciplined factory workforce, offering cash wages and cultural lectures, though by the 1830s wage cuts and grueling 12-hour shifts led to early labor walkouts.",
            "distractorTip": "By the 1840s and 1850s, mill owners largely replaced the protesting native farm girls with desperate, cheaper Irish immigrant laborers."
          },
          {
            "id": "ush4-l6-q2",
            "stem": "The antebellum middle-class cultural ideology known as the 'Cult of Domesticity' (or 'Separate Spheres') dictated that women should:",
            "options": [
              "Pursue careers in corporate merchant banking and electoral politics alongside men.",
              "Confine their primary activities to the private domestic sphere, serving as moral guardians, loving wives, and religious nurturers of children.",
              "Serve as frontline commanders in state militias during foreign wars.",
              "Reject traditional marriage and establish cooperative agrarian communes."
            ],
            "correctIndex": 1,
            "explanation": "As the Market Revolution separated the workplace (public sphere for men) from the home (private sphere for women), middle-class cultural ideals prescribed that virtuous women should cultivate piety, purity, submissiveness, and domesticity.",
            "distractorTip": "This ideology applied primarily to middle- and upper-class white women; enslaved women and working-class immigrant women were forced to labor outside the home under grueling conditions."
          },
          {
            "id": "ush4-l6-q3",
            "stem": "How did the \"Lowell System\" in early nineteenth-century Massachusetts textile manufacturing differ from traditional family artisan workshops?",
            "options": [
              "It employed exclusively male convict laborers under armed military supervision.",
              "It outsourced all spinning and weaving to remote agrarian homesteads through the \"putting-out\" system.",
              "It centralized all stages of cloth production under one roof and recruited young, unmarried farm daughters, housing them in supervised company boardinghouses.",
              "It prohibited the use of water-powered or steam-powered machinery."
            ],
            "correctIndex": 2,
            "explanation": "Francis Cabot Lowell established mechanized textile mills that employed young New England farm women ('Lowell mill girls'), providing wages, educational lectures, and company dormitories, marking the transition from artisan craftwork to industrial wage labor.",
            "distractorTip": "By the 1840s and 1850s, mill owners replaced native farm girls with cheaper, desperate Irish immigrant laborers who worked for lower wages under worsening conditions."
          }
        ]
      },
      {
        "id": 407,
        "unitIndex": 4,
        "levelNumber": 7,
        "uniqueKey": "ush-p4-l7",
        "topicNumber": "Topic 4.7 & 4.8",
        "name": "Jacksonian Democracy & Nullification",
        "subtitle": "Universal white male suffrage, the spoils system, and Calhoun's crisis",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush4-l7-q1",
            "stem": "The political rise of Andrew Jackson during the 1820s and 1830s was fueled primarily by which major democratization trend in state voting laws?",
            "options": [
              "The implementation of literacy tests and poll taxes to expand immigrant voting rights.",
              "The ratification of a constitutional amendment granting women the right to vote in presidential elections.",
              "The elimination of property-ownership and taxpaying qualifications for voting, ushering in universal white male suffrage.",
              "The abolition of the Electoral College in favor of an unregulated direct national popular vote."
            ],
            "correctIndex": 2,
            "explanation": "By the 1828 election, nearly all states had abolished property qualifications for white men, allowing the emerging working class and western farmers to rally around the populist 'common man' image of General Andrew Jackson.",
            "distractorTip": "While white male suffrage expanded dramatically, free Black men and all women remained strictly disenfranchised in nearly all states."
          },
          {
            "id": "ush4-l7-q2",
            "stem": "The Nullification Crisis of 1832–1833 erupted when South Carolina declared the federal 'Tariff of Abominations' unconstitutional based on:",
            "options": [
              "A British military ultimatum threatening invasion if tariffs were not dropped to zero.",
              "A Supreme Court ruling declaring all federal customs duties inherently unconstitutional.",
              "An executive order by Andrew Jackson ordering the immediate abolition of the U.S. Navy.",
              "John C. Calhoun's theory that sovereign states retained the constitutional right to nullify federal statutes within their borders, prompting Jackson to secure the Force Bill."
            ],
            "correctIndex": 3,
            "explanation": "Calhoun argued protective tariffs unfairly taxed Southern agriculture to enrich Northern manufacturers. Jackson furiously rejected nullification as treason, threatening military force via the Force Bill while Henry Clay negotiated a compromise tariff.",
            "distractorTip": "The Nullification Crisis was a crucial rehearsal for the Civil War, pitting federal supremacy against Southern states' rights and slavery defense."
          },
          {
            "id": "ush4-l7-q3",
            "stem": "In his South Carolina Exposition and Protest (1828), John C. Calhoun defended the doctrine of nullification by arguing that:",
            "options": [
              "The President possessed the constitutional power to dissolve state legislatures during economic crises.",
              "The Supreme Court had sole jurisdiction over the validity of federal protective tariffs.",
              "The Constitution was an irrevocable, perpetual contract that subordinated all state laws to federal supremacy.",
              "The Union was a compact among sovereign states, and a state convention could declare an unconstitutional federal law (such as the Tariff of Abominations) null and void within its borders."
            ],
            "correctIndex": 3,
            "explanation": "Outraged by the high protective Tariff of 1828 ('Tariff of Abominations'), Calhoun drew upon Jefferson and Madison's Virginia and Kentucky Resolutions to argue that states retained ultimate sovereignty and could nullify federal laws that injured their regional interests.",
            "distractorTip": "Jackson fiercely opposed Calhoun, asserting that nullification was incompatible with the Union and treasonous, threatening to use federal troops (Force Bill)."
          }
        ]
      },
      {
        "id": 408,
        "unitIndex": 4,
        "levelNumber": 8,
        "uniqueKey": "ush-p4-l8",
        "topicNumber": "Topic 4.8",
        "name": "The Bank War & Indian Removal",
        "subtitle": "Jackson's bank veto, Worcester v. Georgia, and the Trail of Tears",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush4-l8-q1",
            "stem": "President Andrew Jackson justified his famous 1832 veto of the bill to recharter the Second Bank of the United States on the grounds that:",
            "options": [
              "The Bank was an unconstitutional, monopolistic institution that enriched wealthy Eastern elites and foreign stockholders at the expense of common agrarian citizens.",
              "The Bank was secretly controlled by the French government to manipulate American elections.",
              "The Bank refused to issue paper banknotes and insisted exclusively on gold coin.",
              "The Supreme Court had previously declared all federal banking corporations illegal in McCulloch v. Maryland."
            ],
            "correctIndex": 0,
            "explanation": "Jackson viewed Nicholas Biddle's Bank as a corrupt financial monster. After vetoing the recharter, Jackson withdrew federal deposits and placed them into state 'pet banks,' triggering a speculative land bubble and the Panic of 1837.",
            "distractorTip": "Jackson's aggressive use of the presidential veto (more than all six previous presidents combined) led opponents to brand him 'King Andrew I' and form the Whig Party."
          },
          {
            "id": "ush4-l8-q2",
            "stem": "How did President Andrew Jackson respond to Chief Justice John Marshall's ruling in Worcester v. Georgia (1832), which affirmed Cherokee territorial sovereignty against state encroachment?",
            "options": [
              "He immediately dispatched federal troops to protect Cherokee sovereignty against the Georgia state militia.",
              "He defied the Supreme Court, refused to enforce the ruling, and used the Indian Removal Act of 1830 to forcibly march the Cherokee on the 'Trail of Tears.'",
              "He introduced a constitutional amendment to grant full U.S. citizenship to all Native Americans.",
              "He persuaded Georgia to cede half its state territory directly to the Cherokee Nation."
            ],
            "correctIndex": 1,
            "explanation": "Marshall ruled Georgia laws had no force on Cherokee land. Jackson famously ignored the Court ('John Marshall has made his decision; now let him enforce it'), resulting in the forced 1838 military relocation that killed over 4,000 Cherokee.",
            "distractorTip": "This is one of the most famous historical examples of an executive refusing to enforce a Supreme Court mandate."
          },
          {
            "id": "ush4-l8-q3",
            "stem": "In Worcester v. Georgia (1832), the Supreme Court under Chief Justice John Marshall ruled that:",
            "options": [
              "The Cherokee Nation was a distinct political community in which the laws of Georgia had no force, meaning individual states could not seize Cherokee land or regulate tribal affairs.",
              "The state of Georgia had the constitutional right to unilaterally abolish Cherokee tribal sovereignty.",
              "Indigenous peoples could not file lawsuits in federal courts because they were not United States citizens.",
              "Andrew Jackson was legally required to execute tribal leaders who refused to sign removal treaties."
            ],
            "correctIndex": 0,
            "explanation": "Marshall ruled that Indian nations were 'domestic dependent nations' entitled to federal treaty protection against state usurpation; however, Andrew Jackson refused to enforce the ruling, leading directly to the forced removal known as the Trail of Tears (1838–1839).",
            "distractorTip": "Remember Jackson's apocryphal remark: 'John Marshall has made his decision; now let him enforce it,' illustrating the limits of judicial review when the executive branch refuses to comply."
          }
        ]
      },
      {
        "id": 409,
        "unitIndex": 4,
        "levelNumber": 9,
        "uniqueKey": "ush-p4-l9",
        "topicNumber": "Topic 4.9",
        "name": "American Culture: Transcendentalism & Art",
        "subtitle": "Emerson, Thoreau, the Hudson River School, and utopian experiments",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush4-l9-q1",
            "stem": "The philosophical movement of Transcendentalism, championed by Ralph Waldo Emerson and Henry David Thoreau, rejected strict rationalism and emphasized:",
            "options": [
              "The worship of industrial machinery and unconditional devotion to commercial wealth.",
              "Blind obedience to established religious dogmas and Calvinist church hierarchies.",
              "Individual self-reliance, the inherent divinity of human intuition, and spiritual communion with untouched nature.",
              "The restoration of monarchical government modeled on British parliamentary rule."
            ],
            "correctIndex": 2,
            "explanation": "Emerson's 'Self-Reliance' and 'The American Scholar' urged Americans to create an original intellectual culture, while Thoreau's Walden and 'Civil Disobedience' advocated nonviolent resistance to unjust laws (such as the Mexican War and slavery).",
            "distractorTip": "Thoreau's essay 'Civil Disobedience' later directly inspired Mahatma Gandhi and Martin Luther King Jr."
          },
          {
            "id": "ush4-l9-q2",
            "stem": "Artists of the antebellum Hudson River School (such as Thomas Cole and Asher Durand) contributed to a distinct national culture by producing:",
            "options": [
              "Portraits depicting European royalty and classical Greek mythological deities.",
              "Satirical political cartoons mocking Southern cotton plantation aristocracy.",
              "Abstract geometric murals designed to decorate urban textile factories.",
              "Luminous, grand landscapes of majestic American wilderness that celebrated the sublimity and spiritual divinity of the continent's untouched nature."
            ],
            "correctIndex": 3,
            "explanation": "The Hudson River School created America's first homegrown artistic movement, capturing dramatic romanticized vistas of the Hudson Valley and Catskill Mountains to visually assert that American wilderness was spiritually superior to decadent Europe.",
            "distractorTip": "Their paintings often included subtle warnings about the encroachment of industrial civilization upon pristine nature."
          },
          {
            "id": "ush4-l9-q3",
            "stem": "American Transcendentalists such as Ralph Waldo Emerson and Henry David Thoreau reacted against the Market Revolution and Enlightenment rationalism by emphasizing:",
            "options": [
              "Strict adherence to traditional Puritan orthodoxy and predestination.",
              "Individual intuition, self-reliance, spiritual communion with nature, and moral resistance to social injustices like slavery.",
              "The absolute supremacy of industrial factory mechanization and corporate wealth accumulation.",
              "The immediate abandonment of all rural living in favor of dense urban tenement dwelling."
            ],
            "correctIndex": 1,
            "explanation": "Transcendentalism celebrated the divinity of the individual soul and nature (Emerson's 'Self-Reliance,' Thoreau's 'Walden'); Thoreau also practiced nonviolent civil disobedience ('Resistance to Civil Government') by refusing to pay taxes supporting the Mexican-American War and slavery.",
            "distractorTip": "Thoreau's essay on Civil Disobedience directly influenced later reformers, including Mohandas Gandhi and Martin Luther King Jr."
          }
        ]
      },
      {
        "id": 410,
        "unitIndex": 4,
        "levelNumber": 10,
        "uniqueKey": "ush-p4-l10",
        "topicNumber": "Topic 4.10 & 4.11",
        "name": "Second Great Awakening & Antebellum Reform",
        "subtitle": "Revivalism, temperance, abolitionism, and the Seneca Falls Convention",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush4-l10-q1",
            "stem": "How did the evangelical revivals of the Second Great Awakening (led by Charles Grandison Finney in western New York's 'burned-over district') transform American society?",
            "options": [
              "By preaching free will, human perfectibility, and personal salvation, inspiring waves of social reform crusades (temperance, abolition, women's rights).",
              "By establishing the Roman Catholic Church as the official state religion across the United States.",
              "By convincing Americans to abandon all reform efforts and wait passively for the end of the world.",
              "By outlawing all Protestant missionary societies in the western territories."
            ],
            "correctIndex": 0,
            "explanation": "Finney rejected gloomy Calvinist predestination, arguing individuals could choose salvation and had a moral obligation to eradicate societal evils, fueling energetic antebellum reform movements like temperance, public schooling, and abolitionism.",
            "distractorTip": "The 'burned-over district' in western New York also birthed new American religious traditions, including Mormonism (Latter-day Saints) founded by Joseph Smith."
          },
          {
            "id": "ush4-l10-q2",
            "stem": "The historic Seneca Falls Convention of 1848, organized by Elizabeth Cady Stanton and Lucretia Mott, produced the 'Declaration of Sentiments', which boldly declared:",
            "options": [
              "The immediate and violent overthrow of the United States federal government.",
              "'We hold these truths to be self-evident: that all men and women are created equal,' and explicitly demanded female suffrage.",
              "That women should be legally barred from owning real property or obtaining divorce.",
              "That women should boycott all cotton products until the Missouri Compromise line was repealed."
            ],
            "correctIndex": 1,
            "explanation": "Modeling their manifesto on the Declaration of Independence, Stanton cataloged the legal, social, and political tyrannies men imposed on women, inaugurating the organized women's rights movement and demanding the right to vote.",
            "distractorTip": "Frederick Douglass attended Seneca Falls and was the only male delegate to eloquently defend Stanton's controversial resolution demanding female suffrage."
          },
          {
            "id": "ush4-l10-q3",
            "stem": "At the 1848 Seneca Falls Convention, organized by Elizabeth Cady Stanton and Lucretia Mott, the Declaration of Sentiments was modeled deliberately upon:",
            "options": [
              "The United States Constitution's Preamble.",
              "The Articles of Confederation.",
              "The Declaration of Independence, boldly asserting that \"all men and women are created equal\" and demanding women's right to vote.",
              "Thomas Paine's Common Sense."
            ],
            "correctIndex": 2,
            "explanation": "Stanton echoed Jefferson's words to expose the hypocrisy of American democracy, detailing a 'long train of abuses and usurpations' by men over women in law, marriage, property, education, and the ballot.",
            "distractorTip": "The demand for women's suffrage (the vote) was the most controversial resolution at Seneca Falls, passing only after Frederick Douglass spoke passionately in its favor."
          }
        ]
      },
      {
        "id": 411,
        "unitIndex": 4,
        "levelNumber": 11,
        "uniqueKey": "ush-p4-l11",
        "topicNumber": "Period 4 Boss Level",
        "name": "Period 4 Capstone & Synthesis",
        "subtitle": "Mastery of democratic expansion, the Market Revolution, and antebellum reform",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "ush4-l11-q1",
            "stem": "William Lloyd Garrison's radical abolitionist newspaper, 'The Liberator' (launched in 1831), broke fundamentally with earlier anti-slavery efforts by advocating:",
            "options": [
              "An armed slave insurrection to execute all plantation owners across the Deep South.",
              "The gradual purchase and voluntary deportation of all free African Americans to the colony of Liberia in Africa.",
              "Immediate, uncompensated emancipation of all enslaved people and total civil equality, rejecting gradualism and colonization.",
              "The peaceful partition of the United States into two separate, sovereign nations."
            ],
            "correctIndex": 2,
            "explanation": "Earlier moderates supported gradual emancipation and colonization in Africa (American Colonization Society). Garrison rejected these as racist compromises, demanding immediate abolition without compensation as a fundamental moral imperative: 'I will be heard!'",
            "distractorTip": "Garrison viewed the U.S. Constitution as 'a covenant with death and an agreement with hell' because of its compromises protecting human bondage."
          },
          {
            "id": "ush4-l11-q2",
            "stem": "Which of the following historical conclusions is most directly supported by the rapid growth of the Market Revolution between 1800 and 1848?",
            "options": [
              "It halted westward expansion and restricted American settlement strictly east of the Appalachian Mountains.",
              "It led to the complete de-urbanization of the Atlantic coastline and the abandonment of international maritime commerce.",
              "It eliminated all economic class divisions and guaranteed equal wealth distribution across all citizens.",
              "It transformed a nation of isolated subsistence family farms into a dynamic, interconnected commercial economy with distinct regional economic specializations."
            ],
            "correctIndex": 3,
            "explanation": "Canals, railroads, the telegraph, and mechanized factories tied the industrial Northeast, agrarian Midwest, and plantation South into a continental market, while widening wealth disparities and deepening sectional conflicts over slavery.",
            "distractorTip": "AP Historical Synthesis: While the Market Revolution created national economic interdependence, it deepened political sectionalism by entrenching Southern reliance on chattel slavery."
          },
          {
            "id": "ush4-l11-q3",
            "stem": "How did the democratization of American politics during the \"Age of Jackson\" (1820s–1840s) contrast with the political status of women and racial minorities?",
            "options": [
              "Universal voting rights were granted to all adult citizens regardless of race, gender, or property ownership.",
              "Southern states granted property-owning free Black men full equal representation in state legislatures.",
              "Native Americans were incorporated into state political parties and elected as congressional delegates.",
              "While property qualifications were eliminated for white men (universal white male suffrage), women remained disenfranchised, and free Black men faced disenfranchisement in states where they had previously voted."
            ],
            "correctIndex": 3,
            "explanation": "Jacksonian democracy dramatically expanded popular political participation for white men of all economic classes, but this democratization went hand-in-hand with heightened racial and gender boundaries, stripping voting rights from free Black men across northern states like New York and Pennsylvania.",
            "distractorTip": "APUSH emphasizes this crucial historical paradox: the expansion of democratic rights for white men coincided with the legal hardening of racial caste and gender exclusion."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "p5",
    "title": "Period 5: 1844–1877",
    "shortTitle": "Period 5: Civil War & Reconstruction",
    "description": "Manifest Destiny, the Mexican-American War, sectional crisis, the Civil War, and the constitutional revolution of Reconstruction",
    "examWeight": "10–17% of AP Exam",
    "biome": {
      "name": "Antietam Ridge & Reconstruction Capitol",
      "icon": "⚔️",
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
        "uniqueKey": "ush-p5-l1",
        "topicNumber": "Topic 5.1 & 5.2",
        "name": "Manifest Destiny & The Mexican-American War",
        "subtitle": "Polk's expansionism, Treaty of Guadalupe Hidalgo, and the Wilmot Proviso",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush5-l1-q1",
            "stem": "The ideological doctrine of 'Manifest Destiny', coined by journalist John L. O'Sullivan in 1845, asserted that:",
            "options": [
              "The United States possessed a divinely ordained mission to expand democratic institutions and civilization across the entire North American continent to the Pacific Ocean.",
              "America should renounce all western territorial claims and focus exclusively on overseas Caribbean naval colonies.",
              "The federal government must sign permanent, unalterable peace treaties ceding Texas and Oregon to European empires.",
              "Slavery was an outdated feudal relic that God commanded the United States to eradicate immediately."
            ],
            "correctIndex": 0,
            "explanation": "Manifest Destiny blended American nationalism, racial superiority, and religious providentialism, providing the ideological justification for annexing Texas, acquiring Oregon, and seizing the Southwest in the Mexican-American War.",
            "distractorTip": "President James K. Polk ('Young Hickory') brilliantly harnessed Manifest Destiny in the 1844 election with expansionist slogans like 'Fifty-Four Forty or Fight!'"
          },
          {
            "id": "ush5-l1-q2",
            "stem": "Why did the Wilmot Proviso (1846), introduced in Congress during the Mexican-American War, ignite explosive sectional fury between North and South?",
            "options": [
              "It demanded that all lands acquired from Mexico be returned immediately with a cash indemnity.",
              "It proposed banning slavery in any territory acquired from Mexico, galvanizing Northern Free Soilers and provoking Southern threats of secession.",
              "It called for the mandatory repeal of all protective industrial tariffs.",
              "It required the immediate dissolution of the United States Army in California."
            ],
            "correctIndex": 1,
            "explanation": "Pennsylvanian Democrat David Wilmot's proviso passed the Northern-dominated House repeatedly but was blocked in the Senate. It proved that territorial conquest would fatally reopen the question of slavery's westward expansion.",
            "distractorTip": "The Proviso never became law, but it gave birth to the Free Soil Party and solidified the sectional divide that led to the Civil War."
          },
          {
            "id": "ush5-l1-q3",
            "stem": "What was the primary objective of the Wilmot Proviso, introduced in the House of Representatives during the Mexican-American War in 1846?",
            "options": [
              "To prohibit slavery in any territory acquired from the Republic of Mexico.",
              "To annex all Mexican territory south to the Isthmus of Panama as slave states.",
              "To repeal the Missouri Compromise and open Maine to slavery.",
              "To force Mexico to pay $100 million in gold reparations to the United States."
            ],
            "correctIndex": 0,
            "explanation": "Pennsylvania Democrat David Wilmot proposed that slavery be banned in any land taken from Mexico; though it passed the House repeatedly, southern senators blocked it, polarizing national politics along purely sectional lines.",
            "distractorTip": "The Wilmot Proviso demonstrated that westward expansion inevitably reignited the explosive question of slavery's extension into the territories."
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "ush-p5-l2",
        "topicNumber": "Topic 5.3",
        "name": "The Compromise of 1850 & Fugitive Slave Law",
        "subtitle": "Henry Clay's compromise, popular sovereignty, and Northern outrage",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush5-l2-q1",
            "stem": "What was the most controversial and inflammatory component of Henry Clay's Compromise of 1850?",
            "options": [
              "The complete abolition of slavery in Washington, D.C.",
              "The immediate admission of Texas as five separate slave states in the Senate.",
              "A stringent new Fugitive Slave Act that required federal commissioners to capture runaway slaves in Northern free states without jury trials and compelled citizens to assist.",
              "The constitutional ban on all future immigration from Europe to the western territories."
            ],
            "correctIndex": 2,
            "explanation": "The Fugitive Slave Act of 1850 outraged the North because it brought the machinery of slave-catching directly into Northern free communities, denying accused runaways the right to testify and fining citizens who refused to assist slave-catchers.",
            "distractorTip": "In response to the Fugitive Slave Law, Northern states passed 'Personal Liberty Laws' to obstruct federal enforcement, and Harriet Beecher Stowe published Uncle Tom's Cabin (1852)."
          },
          {
            "id": "ush5-l2-q2",
            "stem": "What was the immediate political effect of the publication of Harriet Beecher Stowe's anti-slavery novel 'Uncle Tom's Cabin' (1852)?",
            "options": [
              "It led to the complete dissolution of the federal judicial system in New England.",
              "It persuaded Southern plantation owners to voluntarily emancipate over 100,000 enslaved people.",
              "It resulted in the immediate military impeachment of President Millard Fillmore.",
              "It humanized the emotional and physical horrors of slavery for millions of Northern readers, dramatically expanding popular abolitionist sentiment and infuriating the South."
            ],
            "correctIndex": 3,
            "explanation": "Stowe's melodramatic portrayal of Uncle Tom, Little Eva, and the brutal Simon Legree sold 300,000 copies in its first year, making slavery a deeply personal moral issue for everyday Northerners. Abraham Lincoln famously greeted Stowe in 1862 as 'the little woman who wrote the book that made this great war.'",
            "distractorTip": "Southern defenders published dozens of 'Anti-Tom' novels portraying plantation slavery as a benevolent, idyllic institution protecting happy workers."
          },
          {
            "id": "ush5-l2-q3",
            "stem": "Which component of the Compromise of 1850 generated the fiercest, most enduring outrage and resistance throughout the Northern states?",
            "options": [
              "The admission of California as a free state.",
              "The new Fugitive Slave Act, which stripped accused runaways of jury trials, compelled northern citizens to assist in slave-catching, and denied them the right to testify.",
              "The abolition of the slave trade in Washington, D.C.",
              "The assumption of Texas's public debt by the federal government."
            ],
            "correctIndex": 1,
            "explanation": "The Fugitive Slave Act brought the brutality of slavery directly into northern towns; northern states responded by passing 'personal liberty laws,' crowds obstructed federal marshals (e.g., Anthony Burns case), and Harriet Beecher Stowe was inspired to write Uncle Tom's Cabin (1852).",
            "distractorTip": "Southerners who normally championed states' rights demanded aggressive federal power to enforce the Fugitive Slave Act in northern free states."
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "ush-p5-l3",
        "topicNumber": "Topic 5.4",
        "name": "Kansas-Nebraska Act & Bleeding Kansas",
        "subtitle": "Stephen Douglas, popular sovereignty, and the birth of the Republican Party",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush5-l3-q1",
            "stem": "The Kansas-Nebraska Act of 1854, sponsored by Illinois Senator Stephen A. Douglas, shattered antebellum political stability by:",
            "options": [
              "Repealing the sacred Missouri Compromise of 1820 and allowing the legal status of slavery in Kansas and Nebraska to be decided by 'popular sovereignty.'",
              "Mandating that all western territories immediately abolish human bondage.",
              "Annexing the island of Cuba to create three new Caribbean slave states.",
              "Abolishing the United States Senate in favor of direct popular referendums."
            ],
            "correctIndex": 0,
            "explanation": "Douglas wanted a transcontinental railroad through Chicago and needed Southern support. His bill repealed the $36^\\circ 30'$ line, opening areas closed to slavery for 34 years and sparking violent guerrilla warfare ('Bleeding Kansas').",
            "distractorTip": "The outrage over the Kansas-Nebraska Act destroyed the national Whig Party and immediately birthed the modern anti-slavery Republican Party in 1854."
          },
          {
            "id": "ush5-l3-q2",
            "stem": "What was the foundational platform of the newly formed Republican Party in the mid-1850s?",
            "options": [
              "The immediate and total nationwide abolition of slavery through federal military force.",
              "Free Soil: halting the westward expansion of slavery into federal territories, while allowing it to remain undisturbed in existing Southern states.",
              "The re-establishment of the Bank of the United States and the annexation of Canada.",
              "The complete disenfranchisement of all foreign-born Catholic immigrants."
            ],
            "correctIndex": 1,
            "explanation": "Republicans were not radical abolitionists; their core uniting principle was 'Free Soil, Free Labor, Free Men'—the belief that slave labor degraded free white labor and must be strictly confined where it existed so territories remained open for free settlers.",
            "distractorTip": "Republicans argued that if slavery were contained within the South without room to expand, it would eventually wither and die."
          },
          {
            "id": "ush5-l3-q3",
            "stem": "How did Stephen Douglas's 1854 Kansas-Nebraska Act directly cause the collapse of the Second Party System and the birth of the Republican Party?",
            "options": [
              "It banned all political campaigning in federal territories.",
              "It required all Whigs and Democrats to merge into a single national coalition.",
              "It repealed the sacred 36°30' Missouri Compromise line by applying popular sovereignty to lands north of the line, outraging northern Whigs, Free-Soilers, and anti-slavery Democrats who united to form the Republican Party.",
              "It made Kansas an automatic slave state without a territorial referendum."
            ],
            "correctIndex": 2,
            "explanation": "Douglas wanted a transcontinental railroad terminating in Chicago and needed southern support to organize Nebraska territory; repealing the 1820 Missouri Compromise ban on northern slavery destroyed the national Whig Party and sparked the creation of the anti-extensionist Republican Party.",
            "distractorTip": "The core platform of the newly formed Republican Party was 'Free Soil, Free Labor, Free Men'—halting the expansion of slavery into federal territories, not immediate southern abolition."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "ush-p5-l4",
        "topicNumber": "Topic 5.4 & 5.5",
        "name": "Dred Scott Decision & Election of 1860",
        "subtitle": "Taney's ruling, John Brown's Raid, and the secession crisis",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush5-l4-q1",
            "stem": "In the infamous Dred Scott v. Sandford (1857) ruling, Chief Justice Roger B. Taney held that:",
            "options": [
              "Popular sovereignty was the supreme law of the land governing all territories.",
              "Enslaved people who resided on free soil for more than five years were automatically granted full U.S. citizenship.",
              "African Americans were not citizens of the United States, and Congress lacked the constitutional authority to ban slavery in federal territories, nullifying the Missouri Compromise.",
              "The federal government possessed the constitutional power to purchase and emancipate all enslaved persons."
            ],
            "correctIndex": 2,
            "explanation": "Taney infamously wrote that Black people had 'no rights which the white man was bound to respect.' By ruling the Missouri Compromise unconstitutional on the grounds that banning slavery violated slaveholders' Fifth Amendment property rights, Taney declared all territorial bans on slavery illegal.",
            "distractorTip": "The Dred Scott decision enraged Northerners, convinced them of a corrupt 'Slave Power' conspiracy in Washington, and rocketed Abraham Lincoln to national prominence."
          },
          {
            "id": "ush5-l4-q2",
            "stem": "What was the immediate catalyst that prompted South Carolina and six other Lower South states to secede from the Union in the winter of 1860–1861?",
            "options": [
              "The complete closure of all Southern commercial ports by presidential proclamation.",
              "A federal military invasion of Charleston Harbor led by General Winfield Scott.",
              "The passage of a constitutional amendment abolishing slavery nationwide.",
              "The election of Republican Abraham Lincoln to the presidency without carrying a single Southern electoral vote."
            ],
            "correctIndex": 3,
            "explanation": "Lincoln won the 1860 election with a purely Northern electoral majority. Convinced that an anti-slavery Republican administration would ultimately destroy their 'peculiar institution,' South Carolina voted unanimously to secede on December 20, 1860.",
            "distractorTip": "In his Inaugural Address, Lincoln promised not to interfere with slavery where it already existed, but insisted the Union was perpetual and secession was legally void."
          },
          {
            "id": "ush5-l4-q3",
            "stem": "In the infamous 1857 Dred Scott v. Sandford ruling, Chief Justice Roger B. Taney held that:",
            "options": [
              "Enslaved persons became free immediately upon setting foot in any northern state.",
              "The Fugitive Slave Act was unconstitutional because it violated state sovereignty.",
              "Popular sovereignty was the only legal method to determine the status of slavery in federal territories.",
              "Black people—whether enslaved or free—were not citizens and had \"no rights which the white man was bound to respect,\" and that Congress had no constitutional power to prohibit slavery in any federal territory."
            ],
            "correctIndex": 3,
            "explanation": "Taney declared that the Fifth Amendment protected slaveholders' property rights in all territories, rendering the Missouri Compromise unconstitutional and declaring that Black Americans could never be US citizens, shocking northern public opinion and radicalizing the sectional divide.",
            "distractorTip": "The Dred Scott ruling effectively declared the core Republican platform (banning slavery in the territories) unconstitutional, convincing northerners of a conspiratorial 'Slave Power' dominating the federal government."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "ush-p5-l5",
        "topicNumber": "Topic 5.6",
        "name": "Civil War Turning Points & Strategy",
        "subtitle": "The Anaconda Plan, Antietam, Gettysburg, and Vicksburg",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush5-l5-q1",
            "stem": "The Union's comprehensive 'Anaconda Plan', devised by General Winfield Scott, sought to strangle the Confederacy by:",
            "options": [
              "Imposing a naval blockade on Southern ports, seizing control of the Mississippi River to split the Confederacy, and capturing the Confederate capital at Richmond.",
              "Launching an immediate amphibious invasion of Spanish Cuba to cut Confederate supply lines.",
              "Surrendering Washington, D.C., to draw Confederate forces into a snowy winter siege in Massachusetts.",
              "Relying exclusively on guerrilla cavalry raids behind Appalachian mountain lines."
            ],
            "correctIndex": 0,
            "explanation": "Like an anaconda constricting its prey, the strategy squeezed the Southern economy through a maritime blockade and severed the western Confederacy (Texas, Arkansas, Louisiana) by gaining total control of the Mississippi River.",
            "distractorTip": "General Ulysses S. Grant completed the Mississippi River leg of the Anaconda Plan by capturing Vicksburg on July 4, 1863."
          },
          {
            "id": "ush5-l5-q2",
            "stem": "Why was the Battle of Antietam (September 17, 1862)—the bloodiest single day in American military history—a monumental turning point for the Union?",
            "options": [
              "It forced General Robert E. Lee to surrender his entire Army of Northern Virginia unconditionally.",
              "It repelled Robert E. Lee's invasion of Maryland, dissuaded Britain and France from recognizing the Confederacy, and gave Lincoln the victory needed to issue the Emancipation Proclamation.",
              "It resulted in the immediate capture of Richmond by General George McClellan.",
              "It prompted the border states of Maryland and Kentucky to secede and join the Confederacy."
            ],
            "correctIndex": 1,
            "explanation": "Though tactically a draw, Lee's retreat allowed Lincoln to transform the war into a crusade against human slavery, which permanently kept anti-slavery Great Britain and France from intervening on behalf of the Confederacy.",
            "distractorTip": "Before Antietam, Lincoln hesitated to issue the Emancipation Proclamation because he did not want it to look like an act of desperation."
          },
          {
            "id": "ush5-l5-q3",
            "stem": "The dual Union victories at Gettysburg and Vicksburg in July 1863 were decisive in the Civil War because:",
            "options": [
              "Gettysburg ended Robert E. Lee's last invasion of the North, while Vicksburg gave the Union complete control of the Mississippi River, severing the Confederacy in two.",
              "They prompted Great Britain and France to officially enter the war as Confederate allies.",
              "They forced Confederate President Jefferson Davis to unconditionally surrender all southern armies immediately.",
              "They resulted in the capture of the Confederate capital of Richmond, Virginia."
            ],
            "correctIndex": 0,
            "explanation": "Lee lost a third of his army at Gettysburg and was permanently thrown on the defensive; simultaneously, Ulysses S. Grant's siege of Vicksburg split Texas, Arkansas, and Louisiana from the rest of the Confederacy, fulfilling the western prong of the Anaconda Plan.",
            "distractorTip": "July 1863 was the military turning point of the war; after these twin defeats, the Confederacy could only hope to prolong the war until northern war weariness forced a negotiated peace."
          }
        ]
      },
      {
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "ush-p5-l6",
        "topicNumber": "Topic 5.7",
        "name": "Civil War Policies & The Homefront",
        "subtitle": "The Emancipation Proclamation, Gettysburg Address, and wartime legislation",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush5-l6-q1",
            "stem": "Whom did Abraham Lincoln's Emancipation Proclamation (effective January 1, 1863) legally declare free?",
            "options": [
              "Enslaved people living exclusively in the loyal border slave states of Maryland, Delaware, Kentucky, and Missouri.",
              "Every enslaved person residing anywhere within the continental boundaries of the United States.",
              "Only enslaved individuals residing within states or regions currently in active rebellion against the United States, deliberately exempting loyal Border States.",
              "All European indentured servants working in Northern munitions factories."
            ],
            "correctIndex": 2,
            "explanation": "Acting strictly under his constitutional commander-in-chief powers to seize enemy property used to wage war, Lincoln freed slaves in Confederate-controlled territory, while leaving slavery temporarily intact in the loyal Border States to prevent their secession.",
            "distractorTip": "Crucially, the Proclamation also authorized the enlistment of African American soldiers, enabling over 180,000 Black men to fight valiantly for the Union Army (e.g., the 54th Massachusetts)."
          },
          {
            "id": "ush5-l6-q2",
            "stem": "With Southern Democrats absent from Congress during the Civil War, the Republican-dominated federal government enacted landmark domestic legislation, including:",
            "options": [
              "A statute restoring British colonial customs duties on all interstate commerce.",
              "The complete privatization of all national waterways and the abolition of paper currency.",
              "A law forbidding any future federal funding for agricultural or mechanical universities.",
              "The Homestead Act of 1862 (granting 160 acres of western land to settlers) and the Pacific Railway Act (authorizing the transcontinental railroad)."
            ],
            "correctIndex": 3,
            "explanation": "Republicans passed Hamilton's long-delayed vision of dynamic national development: the Homestead Act, the Morrill Land Grant Act (funding state agricultural colleges), and the Pacific Railway Act, alongside the National Banking Acts.",
            "distractorTip": "These laws unleashed massive post-war industrial and agricultural expansion across the American West."
          },
          {
            "id": "ush5-l6-q3",
            "stem": "Lincoln's Emancipation Proclamation (issued January 1, 1863) altered the fundamental nature of the Civil War by:",
            "options": [
              "Freeing all enslaved individuals in every state, including the loyal border states of Maryland and Kentucky.",
              "Transforming the Union war effort into a moral crusade against slavery, authorizing the recruitment of Black soldiers into the Union army, and diplomatically preventing British or French recognition of the Confederacy.",
              "Offering federal cash compensation to all southern slaveholders who surrendered peacefully.",
              "Revoking the US Constitution and instituting permanent military tribunals across the South."
            ],
            "correctIndex": 1,
            "explanation": "Lincoln used his war powers to free enslaved persons only in areas in active rebellion; this kept loyal border states in the Union, paved the way for nearly 200,000 African American soldiers and sailors to fight for freedom, and made European intervention on behalf of the slaveholding South politically impossible.",
            "distractorTip": "The Emancipation Proclamation did NOT free enslaved people in the loyal Union border states (Delaware, Maryland, Kentucky, Missouri); complete constitutional abolition required the 13th Amendment in 1865."
          }
        ]
      },
      {
        "id": 507,
        "unitIndex": 5,
        "levelNumber": 7,
        "uniqueKey": "ush-p5-l7",
        "topicNumber": "Topic 5.8",
        "name": "Radical Reconstruction & Constitutional Amendments",
        "subtitle": "The 13th, 14th, and 15th Amendments, and the Freedmen's Bureau",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush5-l7-q1",
            "stem": "The Fourteenth Amendment to the U.S. Constitution (ratified in 1868) fundamentally revolutionized American constitutional law by:",
            "options": [
              "Granting birthright citizenship to all persons born or naturalized in the U.S. and guaranteeing 'due process' and 'equal protection of the laws' against state violations.",
              "Abolishing the institution of chattel slavery throughout the United States.",
              "Prohibiting the denial of voting rights based on race, color, or previous condition of servitude.",
              "Granting women the constitutional right to vote in all federal elections."
            ],
            "correctIndex": 0,
            "explanation": "The 14th Amendment overturned the Dred Scott decision by establishing birthright citizenship, and created the equal protection and due process clauses that became the legal foundation for the modern civil rights movement.",
            "distractorTip": "Memory Aid for Reconstruction Amendments: 13th = Free (abolish slavery); 14th = Citizens (birthright citizenship & equal protection); 15th = Vote (male voting rights)."
          },
          {
            "id": "ush5-l7-q2",
            "stem": "Why did Radical Republicans in Congress clash bitterly with President Andrew Johnson, ultimately resulting in his 1868 impeachment?",
            "options": [
              "Johnson demanded that all former Confederate generals be immediately executed for treason.",
              "Johnson vetoed civil rights legislation (such as the Civil Rights Act of 1866 and Freedmen's Bureau bills) and tolerated Southern 'Black Codes' that re-enslaved Black labor.",
              "Johnson introduced a bill to confiscate all Southern plantations and redistribute them to northern railroad barons.",
              "Johnson refused to withdraw Union occupation forces from the South after three months."
            ],
            "correctIndex": 1,
            "explanation": "Johnson's lenient Presidential Reconstruction allowed former Confederate elites to regain power and pass Black Codes. Congress passed the Reconstruction Acts over his vetoes, and impeached him when he violated the Tenure of Office Act by firing Secretary of War Edwin Stanton.",
            "distractorTip": "Johnson escaped removal from office by a single vote in the U.S. Senate, but was rendered politically powerless for the remainder of his term."
          },
          {
            "id": "ush5-l7-q3",
            "stem": "The Fourteenth Amendment (1868) transformed the American constitutional framework most fundamentally by:",
            "options": [
              "Granting women the right to vote in all federal elections.",
              "Authorizing individual states to secede from the Union during peacetime.",
              "Establishing birthright citizenship and prohibiting states from depriving any person of life, liberty, or property without due process of law or denying equal protection of the laws.",
              "Eliminating all federal income and property taxes nationwide."
            ],
            "correctIndex": 2,
            "explanation": "To overturn the Dred Scott decision and invalidate southern 'Black Codes,' Congress passed the 14th Amendment; its Due Process and Equal Protection clauses fundamentally shifted the balance of power, making the federal government the protector of individual civil rights against state infringement.",
            "distractorTip": "The Reconstruction Amendments are the 'Second Founding': 13th (Abolition), 14th (Citizenship & Equal Protection), and 15th (Black male voting rights)."
          }
        ]
      },
      {
        "id": 508,
        "unitIndex": 5,
        "levelNumber": 8,
        "uniqueKey": "ush-p5-l8",
        "topicNumber": "Topic 5.9",
        "name": "Southern Resistance & Collapse of Reconstruction",
        "subtitle": "Sharecropping, Ku Klux Klan terror, and the Compromise of 1877",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush5-l8-q1",
            "stem": "Following the Civil War, the predominant economic labor system that trapped millions of formerly enslaved African Americans and poor whites in cyclical poverty was:",
            "options": [
              "Independent homestead farming on 40-acre plots granted by the federal government.",
              "High-wage factory labor in newly constructed heavy industrial steel foundries.",
              "Sharecropping: farming land owned by white planters in exchange for a portion of the harvest, routinely manipulated by planters through high-interest debt peonage.",
              "Cooperative agrarian communal farming funded by British humanitarian societies."
            ],
            "correctIndex": 2,
            "explanation": "Denied the promised '40 acres and a mule' by federal policy, landless freedpeople had to farm white-owned land. Local merchants charged exorbitant interest on seed and tools (the crop-lien system), legally trapping sharecroppers in permanent debt peonage.",
            "distractorTip": "Sharecropping gave freedpeople some day-to-day autonomy from white overseers, but economically reproduced plantation dependency."
          },
          {
            "id": "ush5-l8-q2",
            "stem": "The Compromise of 1877 resolved the disputed 1876 presidential election between Rutherford B. Hayes and Samuel Tilden by:",
            "options": [
              "Mandating that the presidency rotate between Northern and Southern states every two years.",
              "Declaring Samuel Tilden president and executing all federal election commissioners.",
              "Abolishing the 14th and 15th Amendments to the United States Constitution.",
              "Awarding the disputed electoral votes and presidency to Republican Hayes in exchange for the complete withdrawal of all remaining federal troops from the South, ending Reconstruction."
            ],
            "correctIndex": 3,
            "explanation": "In an unwritten backroom deal, Republicans gained the presidency for Hayes, while Democrats secured the withdrawal of federal troops protecting Black voters in Louisiana, South Carolina, and Florida, abandoning freedpeople to white 'Redeemer' Jim Crow rule.",
            "distractorTip": "The end of Reconstruction in 1877 ushered in decades of Black disenfranchisement through poll taxes, literacy tests, grandfather clauses, and lynching."
          },
          {
            "id": "ush5-l8-q3",
            "stem": "Reconstruction came to a formal political end following the disputed presidential election of 1876 when the \"Compromise of 1877\" resulted in:",
            "options": [
              "The impeachment and removal of President Ulysses S. Grant from office.",
              "The immediate re-enslavement of all freedpeople across the Deep South.",
              "The permanent division of the United States into two separate sovereign nations.",
              "Republican Rutherford B. Hayes being awarded the presidency in exchange for the complete withdrawal of all remaining federal troops from the South, abandoning Black civil rights to white Democratic \"Redeemers.\""
            ],
            "correctIndex": 3,
            "explanation": "With 20 disputed electoral votes, an informal backroom deal gave Hayes the White House in exchange for removing federal troops protecting Republican state governments in Louisiana and South Carolina; without military backing, white supremacist Redeemer governments took over, ushering in the Jim Crow era.",
            "distractorTip": "The Compromise of 1877 showed that northern political willpower to protect Black civil rights had evaporated in the face of economic depression and southern white paramilitary violence."
          }
        ]
      },
      {
        "id": 509,
        "unitIndex": 5,
        "levelNumber": 9,
        "uniqueKey": "ush-p5-l9",
        "topicNumber": "Period 5 Boss Level",
        "name": "Period 5 Capstone & Synthesis",
        "subtitle": "Mastery of Manifest Destiny, the Civil War, and Reconstruction",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "ush5-l9-q1",
            "stem": "Which of the following represents the most profound long-term constitutional legacy of the Reconstruction era?",
            "options": [
              "The constitutional framework of the 13th, 14th, and 15th Amendments transferred the ultimate responsibility for protecting individual civil rights from the states to the federal government.",
              "The permanent eradication of all racial prejudice and economic inequality across the American South by 1877.",
              "The elimination of state sovereign borders and the creation of a centralized unitary republic governed exclusively from Washington.",
              "The permanent military occupation of the former Confederacy lasting until World War I."
            ],
            "correctIndex": 0,
            "explanation": "Before the Civil War, the Bill of Rights protected citizens ONLY against federal tyranny (Barron v. Baltimore). Reconstruction amendments fundamentally restructured federalism, empowering Congress and federal courts to protect individual rights against state discrimination.",
            "distractorTip": "Although white supremacists suppressed these rights during the Jim Crow era, the Reconstruction Amendments provided the unshakeable constitutional bedrock for the 20th-century Civil Rights Movement."
          },
          {
            "id": "ush5-l9-q2",
            "stem": "How did the territorial expansion resulting from the Mexican-American War (1846–1848) catalyze the collapse of the Second Party System (Democrats and Whigs)?",
            "options": [
              "It caused both parties to unite unanimously behind the immediate nationwide abolition of slavery.",
              "It forced the explosive question of slavery's expansion back into national politics, splitting both parties along geographic sectional lines rather than national political ideologies.",
              "It bankrupted the federal treasury, forcing the dissolution of all national party headquarters.",
              "It created an overwhelming political majority for the American Anti-Imperialist League."
            ],
            "correctIndex": 1,
            "explanation": "Ralph Waldo Emerson famously predicted: 'The United States will conquer Mexico, but it will be as the man swallows the arsenic which brings him down in turn. Mexico will poison us.' The Mexican Cession proved arsenic: neither Whigs nor Democrats could hold their Northern and Southern wings together over slavery expansion.",
            "distractorTip": "The Whig party disintegrated completely under the pressure of the Kansas-Nebraska Act, replaced in the North by the purely sectional Republican Party."
          },
          {
            "id": "ush5-l9-q3",
            "stem": "Following the Civil War, the widespread transition of formerly enslaved African Americans into the system of agricultural sharecropping meant that:",
            "options": [
              "Freedpeople gained autonomy from direct gang-labor supervision, but were trapped in an exploitative cycle of endless debt to white landowners and merchant credit stores (crop-lien system).",
              "Most freedpeople quickly accumulated cash savings and purchased large independent family estates.",
              "Southern agriculture was entirely replaced by mechanized manufacturing factories.",
              "African Americans were guaranteed equal legal representation on all county agricultural boards."
            ],
            "correctIndex": 0,
            "explanation": "Lacking land of their own after the failure of '40 acres and a mule,' freed families rented small parcels in exchange for sharing a percentage of the crop; high interest rates charged by local merchants under the crop-lien system left most sharecroppers in perpetual debt peonage.",
            "distractorTip": "Sharecropping gave freedpeople some domestic independence from daily white overseers, but economically locked them into poverty and dependent tenancy."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 6,
    "unitId": "p6",
    "title": "Period 6: 1865–1898",
    "shortTitle": "Period 6: Gilded Age",
    "description": "Westward expansion, industrial capitalism, the rise of big business, labor strikes, urbanization, and the Populist revolt",
    "examWeight": "10–17% of AP Exam",
    "biome": {
      "name": "Smokestack Metropolis & Homestead Prairie",
      "icon": "🚂",
      "accentColor": "#F59E0B",
      "secondaryColor": "#D97706",
      "groundGradient": "from-amber-100 via-stone-50 to-yellow-100",
      "cardBorder": "border-amber-500",
      "trailColor": "#f59e0b",
      "nodeRing": "ring-amber-400/40",
      "skyTint": "from-amber-50 to-stone-50/30"
    },
    "levels": [
      {
        "id": 601,
        "unitIndex": 6,
        "levelNumber": 1,
        "uniqueKey": "ush-p6-l1",
        "topicNumber": "Topic 6.1 & 6.2",
        "name": "Westward Expansion & Transcontinental Railroads",
        "subtitle": "Homesteaders, federal subsidies, and cattle frontiers",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush6-l1-q1",
            "stem": "How did the federal government actively catalyze the rapid construction of the Transcontinental Railroad network following the Civil War?",
            "options": [
              "By purchasing all national railroad tracks and administering them under the direct command of the U.S. Postal Service.",
              "By using military conscription to force European immigrants into government-owned labor battalions.",
              "By granting private railroad corporations tens of millions of acres of public land grants alongside massive low-interest federal loans.",
              "By levying an unconstitutional confiscatory tax on eastern manufacturing to finance western construction."
            ],
            "correctIndex": 2,
            "explanation": "Under the Pacific Railway Acts, the federal government granted private railroad companies (Union Pacific and Central Pacific) alternate square-mile sections of public land in a checkerboard pattern along tracks, plus $16,000 to $48,000 in federal bonds per mile constructed.",
            "distractorTip": "Chinese immigrant laborers built the Central Pacific across the treacherous Sierra Nevada mountains, while Irish immigrants built the Union Pacific across the Great Plains."
          },
          {
            "id": "ush6-l1-q2",
            "stem": "What was the devastating ecological and cultural consequence of the expansion of western railroads for Plains Indigenous nations?",
            "options": [
              "The eradication of all native prairie grass by foreign botanical blights.",
              "The mandatory conversion of all grassland into subarctic forest reserves.",
              "The flooding of western river valleys due to massive hydroelectric concrete dams.",
              "The wholesale commercial extermination of the American bison (buffalo) herds, destroying the foundation of Plains Indigenous sustenance and nomadic culture."
            ],
            "correctIndex": 3,
            "explanation": "Railroads transported commercial hide-hunters and military expeditions that slaughtered roughly 30 million buffalo down to fewer than one thousand by 1885, deliberately eliminating the independent food, clothing, and shelter base of Plains Indigenous peoples.",
            "distractorTip": "General Philip Sheridan explicitly celebrated the buffalo hunters for doing more in two years to settle the 'Indian question' than the entire regular army in thirty years."
          },
          {
            "id": "ush6-l1-q3",
            "stem": "The Pacific Railway Act of 1862 and the Homestead Act of 1862 demonstrate which major Civil War-era economic policy of the Republican-controlled federal government?",
            "options": [
              "The strict limitation of all federal government intervention in the economy to preserve states' rights.",
              "The proactive use of federal authority—through massive land grants, subsidies, and free 160-acre homesteads—to accelerate western settlement, market integration, and economic development.",
              "The prohibition of private corporate railroad monopolies west of the Mississippi River.",
              "The immediate reservation of all western public lands exclusively for Indigenous tribal nations."
            ],
            "correctIndex": 1,
            "explanation": "With southern Democrats absent during the Civil War, Republicans enacted their neo-Hamiltonian economic program: the Homestead Act gave 160 acres to settlers willing to farm it for five years, while the Pacific Railway Act gave millions of acres in alternating land grants to corporate rail companies to build the transcontinental railroad.",
            "distractorTip": "Republican wartime legislation (Homestead Act, Pacific Railway Act, Morrill Land-Grant College Act, National Banking Act) fundamentally shaped modern American industrial capitalism."
          }
        ]
      },
      {
        "id": 602,
        "unitIndex": 6,
        "levelNumber": 2,
        "uniqueKey": "ush-p6-l2",
        "topicNumber": "Topic 6.3",
        "name": "Indigenous Dispossession & Resistance",
        "subtitle": "The Dawes Act, Wounded Knee, and Turner's Frontier Thesis",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush6-l2-q1",
            "stem": "The Dawes Severalty Act of 1887 was designed by federal reformers primarily to achieve which objective?",
            "options": [
              "To forcibly assimilate Native Americans by dissolving communal tribal landholdings and allotting individual 160-acre plots to family heads, selling 'surplus' land to white settlers.",
              "To grant sovereign territorial independence to the Sioux and Apache confederacies.",
              "To preserve traditional Native American communal rituals, languages, and religions in perpetuity.",
              "To compensate Indigenous nations with $500 million in gold bullion for historical treaty violations."
            ],
            "correctIndex": 0,
            "explanation": "Under the paternalistic ideology of 'Kill the Indian, save the man' (typified by the Carlisle Indian Industrial School), the Dawes Act broke up tribal communal reservations, devastating native sovereignty and stripping tribes of over 86 million acres of land.",
            "distractorTip": "The Dawes Act was a catastrophe: two-thirds of all native reservation land was lost to white speculators between 1887 and 1934 (when the Indian Reorganization Act reversed it)."
          },
          {
            "id": "ush6-l2-q2",
            "stem": "Why did historian Frederick Jackson Turner's 1893 'Frontier Thesis' spark widespread anxiety among American intellectuals and policymakers?",
            "options": [
              "He claimed that western lands were completely barren and incapable of supporting human civilization.",
              "He argued that the availability of free western land had forged American democracy and individualism, and the official 1890 census announcement that the frontier was closed threatened America's safety valve.",
              "He demonstrated that American democratic institutions were inherited entirely unchanged from medieval England.",
              "He urged Congress to return all lands west of the Mississippi River to Native American tribes."
            ],
            "correctIndex": 1,
            "explanation": "Turner argued the frontier served as a 'safety valve' releasing urban social discontent and cultivating self-reliance; with the frontier closed, Americans began looking outward toward overseas imperial expansion to find new economic and cultural frontiers.",
            "distractorTip": "Turner's thesis directly influenced proponents of late-nineteenth-century American imperialism, such as Theodore Roosevelt and Alfred Thayer Mahan."
          },
          {
            "id": "ush6-l2-q3",
            "stem": "The Dawes Severalty Act of 1887 was designed by federal policymakers primarily to:",
            "options": [
              "Grant sovereign independence and territorial immunity to all western Indigenous reservations.",
              "Force all Indigenous people to relocate to urban industrial factories in Chicago and New York.",
              "Assimilation of Native Americans into mainstream white society by breaking up communal tribal lands into individual 160-acre family allotments and selling \"surplus\" lands to white settlers.",
              "Prohibit Christian missionary schools on reservations."
            ],
            "correctIndex": 2,
            "explanation": "The Dawes Act sought to eradicate tribal identity and communal landholding, turning Native Americans into individual yeoman farmers; in practice, it was disastrous, stripping tribes of over 86 million acres (nearly two-thirds of their reservation land) between 1887 and 1934.",
            "distractorTip": "The Dawes Act paired forced individual land allotment with cultural assimilation programs like off-reservation Indian boarding schools (e.g., Carlisle: 'Kill the Indian, Save the Man')."
          }
        ]
      },
      {
        "id": 603,
        "unitIndex": 6,
        "levelNumber": 3,
        "uniqueKey": "ush-p6-l3",
        "topicNumber": "Topic 6.4",
        "name": "The 'New South': Jim Crow & Disenfranchisement",
        "subtitle": "Sharecropping, Plessy v. Ferguson, Ida B. Wells, and Booker T. Washington",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush6-l3-q1",
            "stem": "In the landmark 1896 case Plessy v. Ferguson, the United States Supreme Court provided constitutional sanction for racial segregation by establishing the doctrine of:",
            "options": [
              "The complete unconstitutionality of the Fourteenth Amendment under state police powers.",
              "The immediate desegregation of all public passenger railroad cars across the South.",
              "'Separate but equal': holding that state racial segregation laws did not violate the Fourteenth Amendment's equal protection clause as long as facilities were equal.",
              "Federal affirmative action mandates requiring integrated municipal employment."
            ],
            "correctIndex": 2,
            "explanation": "Justice Henry Billings Brown held that social equality could not be enforced by law and that segregation did not imply inferiority. Justice John Marshall Harlan delivered the famous lone dissent: 'Our Constitution is color-blind.'",
            "distractorTip": "In reality, segregated facilities for African Americans (schools, hospitals, waiting rooms) were notoriously inferior, underfunded, and humiliating."
          },
          {
            "id": "ush6-l3-q2",
            "stem": "How did Southern states circumvent the Fifteenth Amendment in the 1890s to systematically disenfranchise African American voters?",
            "options": [
              "By completely abolishing municipal and state elections in favor of royal governor appointments.",
              "By passing state constitutional amendments declaring the Fifteenth Amendment null and void.",
              "By requiring that all voters present passports issued by foreign monarchies.",
              "By enacting racially neutral-sounding voting restrictions such as poll taxes, literacy tests, and 'grandfather clauses' enforced by white registrars."
            ],
            "correctIndex": 3,
            "explanation": "Because the 15th Amendment barred disenfranchisement explicitly based on 'race, color, or previous condition of servitude,' Southern states weaponized poll taxes (which poor Blacks could not afford), subjective literacy tests, and grandfather clauses (exempting descendants of those voting before 1867).",
            "distractorTip": "These measures decimated Black political participation: in Louisiana, registered Black voters plummeted from 130,000 in 1896 to just 1,342 by 1904."
          },
          {
            "id": "ush6-l3-q3",
            "stem": "How did the Supreme Court's ruling in Plessy v. Ferguson (1896) entrench the Jim Crow system across the American South?",
            "options": [
              "By declaring that the Fourteenth Amendment prohibited any racial separation in privately owned businesses.",
              "By mandating the integration of all public school systems nationwide.",
              "By striking down all southern poll taxes and literacy tests as unconstitutional violations of the Fifteenth Amendment.",
              "By establishing the \"separate but equal\" doctrine, ruling that racial segregation in public accommodations did not violate the Fourteenth Amendment's Equal Protection Clause as long as facilities were ostensibly equal."
            ],
            "correctIndex": 3,
            "explanation": "Homer Plessy challenged Louisiana's segregated train car law; the Court ruled 7–1 that the 14th Amendment guaranteed political equality, not social equality, giving constitutional sanction to state-mandated segregation across schools, transport, and restrooms until overturned in 1954.",
            "distractorTip": "Justice John Marshall Harlan wrote the lone famous dissent, prophetically warning that 'our Constitution is color-blind' and that the decision would stimulate aggressions on Black rights."
          }
        ]
      },
      {
        "id": 604,
        "unitIndex": 6,
        "levelNumber": 4,
        "uniqueKey": "ush-p6-l4",
        "topicNumber": "Topic 6.5",
        "name": "Industrial Capitalism & Robber Barons",
        "subtitle": "Carnegie steel, Rockefeller oil, Social Darwinism, and Gospel of Wealth",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush6-l4-q1",
            "stem": "What was the core difference between Andrew Carnegie's business strategy of 'vertical integration' and John D. Rockefeller's 'horizontal integration'?",
            "options": [
              "Carnegie controlled all phases of steel production from raw iron ore extraction to railroad shipment, whereas Rockefeller merged with or bought out rival oil refineries to monopolize the refining market.",
              "Carnegie refused to use corporate stock corporations, while Rockefeller operated exclusively through non-profit charitable trusts.",
              "Carnegie manufactured consumer luxury goods, while Rockefeller traded agricultural livestock.",
              "Carnegie relied on federal subsidies, while Rockefeller operated without any private capital."
            ],
            "correctIndex": 0,
            "explanation": "Vertical integration (Carnegie) controls every step of manufacturing (mines, ships, railroads, foundries) to eliminate middlemen and reduce costs. Horizontal integration (Rockefeller's Standard Oil) consolidates competitors in the same industry into a trust or monopoly controlling the entire market.",
            "distractorTip": "By 1890, Rockefeller's Standard Oil controlled roughly 90% of all petroleum refining in the United States."
          },
          {
            "id": "ush6-l4-q2",
            "stem": "Andrew Carnegie's 1889 essay 'The Gospel of Wealth' argued that industrial tycoons and multimillionaires had a moral responsibility to:",
            "options": [
              "Bequeath their entire estates to their direct heirs to establish an American hereditary aristocracy.",
              "Act as trustees of their fortunes by distributing surplus wealth during their lifetimes to fund public institutions (libraries, universities, concert halls) for social self-improvement.",
              "Pay their factory laborers equal wages to company executives to eliminate poverty.",
              "Surrender their private wealth directly to the federal treasury for military spending."
            ],
            "correctIndex": 1,
            "explanation": "Carnegie defended immense wealth inequality as the natural outcome of competition, but asserted that dying rich was a disgrace; wealthy elites must administer their fortunes for the common good by building philanthropic ladders (like over 2,500 public libraries) through which the aspiring poor could elevate themselves.",
            "distractorTip": "Carnegie strictly opposed direct charity or welfare handouts, arguing that giving money directly to the impoverished fostered laziness rather than industriousness."
          },
          {
            "id": "ush6-l4-q3",
            "stem": "Andrew Carnegie's 1889 essay \"The Gospel of Wealth\" argued that:",
            "options": [
              "Wealthy industrial capitalists possessed a moral and social obligation to administer their surplus fortunes during their lifetimes for the public good (e.g., libraries, universities, concert halls) rather than leaving it to heirs or the state.",
              "Government should confiscate all private wealth and redistribute it equally among factory workers.",
              "God ordained that rich men should hoard their money and never donate to charitable causes.",
              "Labor unions should own and manage all industrial steel mills collectively."
            ],
            "correctIndex": 0,
            "explanation": "Carnegie defended the concentration of capital as an inevitable result of free-market competition, but insisted that the man of wealth was merely a trustee for his poorer brethren, famously stating that 'the man who dies thus rich dies disgraced.'",
            "distractorTip": "Carnegie believed in philanthropy that helped people help themselves (libraries, education), not direct handouts to the poor."
          }
        ]
      },
      {
        "id": 605,
        "unitIndex": 6,
        "levelNumber": 5,
        "uniqueKey": "ush-p6-l5",
        "topicNumber": "Topic 6.6",
        "name": "Labor Unions & Violent Strikes",
        "subtitle": "Knights of Labor, the AFL, Haymarket, Homestead, and Pullman",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush6-l5-q1",
            "stem": "How did Samuel Gompers's American Federation of Labor (AFL, founded 1886) differ fundamentally from Terence Powderly's Knights of Labor?",
            "options": [
              "The AFL was a revolutionary socialist organization committed to the armed overthrow of the federal government.",
              "The AFL welcomed all workers regardless of skill, gender, or race, and advocated the complete abolition of the wage system.",
              "The AFL organized only skilled craft workers, eschewed utopian social reforms, and focused pragmatically on 'bread-and-butter' issues: higher wages, shorter hours, and safer conditions.",
              "The AFL barred all strikes and settled disputes exclusively through compulsory federal arbitration."
            ],
            "correctIndex": 2,
            "explanation": "While the Knights of Labor dreamed of a cooperative producer republic including women, Blacks, and unskilled laborers, the AFL restricted membership to skilled craft unions, using collective bargaining and strikes to achieve immediate, practical economic gains.",
            "distractorTip": "The Knights of Labor collapsed rapidly after being unfairly blamed for the anarchist bombing at Chicago's Haymarket Square in 1886."
          },
          {
            "id": "ush6-l5-q2",
            "stem": "During the massive 1894 Pullman Strike, how did the federal government under President Grover Cleveland decisively intervene in the labor conflict?",
            "options": [
              "By ordering company managers to accept collective bargaining contracts negotiated by federal mediators.",
              "By nationalizing the Pullman Palace Car Company and granting striking workers an 8-hour workday.",
              "By arresting company president George Pullman for violating federal antitrust legislation.",
              "By securing a federal court injunction against Eugene V. Debs's American Railway Union and dispatching federal troops to crush the strike on the legal grounds that it interfered with U.S. mail delivery."
            ],
            "correctIndex": 3,
            "explanation": "In virtually all major Gilded Age labor strikes (1877 Rail Strike, Homestead 1892, Pullman 1894), the federal and state governments deployed armed troops, militias, and judicial injunctions on the side of corporate capital against organized labor.",
            "distractorTip": "While imprisoned for defying the Pullman injunction, union leader Eugene V. Debs read Karl Marx and emerged as America's most prominent socialist leader."
          },
          {
            "id": "ush6-l5-q3",
            "stem": "How did the violent 1886 Haymarket Square bombing in Chicago affect the American labor movement?",
            "options": [
              "It persuaded the federal government to immediately legalize the eight-hour workday nationwide.",
              "It led the public and corporate press to unfairly associate labor unions—particularly the inclusive Knights of Labor—with radical violent anarchism, causing the rapid decline of the Knights.",
              "It united all American industrial workers into a single socialist political party.",
              "It caused business owners to willingly accept collective bargaining contracts."
            ],
            "correctIndex": 1,
            "explanation": "While striking for an eight-hour day at the McCormick Reaper plant, a bomb was thrown during a peaceful rally at Haymarket, killing police officers; employers used the tragedy to brand the Knights of Labor as dangerous foreign anarchists, driving workers into the more conservative American Federation of Labor (AFL).",
            "distractorTip": "Samuel Gompers's AFL learned from Haymarket: unlike the Knights of Labor, the AFL focused on skilled white male workers and 'bread-and-butter' unionism (higher wages, fewer hours) rather than broad political reform."
          }
        ]
      },
      {
        "id": 606,
        "unitIndex": 6,
        "levelNumber": 6,
        "uniqueKey": "ush-p6-l6",
        "topicNumber": "Topic 6.7",
        "name": "'New' Immigration, Cities & Political Machines",
        "subtitle": "Southern/Eastern Europeans, Chinese Exclusion, and Jane Addams",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush6-l6-q1",
            "stem": "The 'New Immigrants' who arrived in massive numbers between 1880 and 1920 differed from earlier antebellum immigrant cohorts because they primarily originated from:",
            "options": [
              "Southern and Eastern Europe (Italy, Poland, Russia, Greece, Austria-Hungary), practicing Catholic, Eastern Orthodox, or Jewish faiths.",
              "Northern and Western Europe (Great Britain, Germany, Ireland, Scandinavia), who were predominantly Protestant.",
              "South America and the Caribbean, who spoke Spanish and Portuguese.",
              "East Asia (Japan and Korea), who settled exclusively on midwestern wheat farms."
            ],
            "correctIndex": 0,
            "explanation": "New Immigrants were culturally, linguistically, and religiously distinct from the older Anglo-German Protestant mainstream, settling in dense ethnic enclaves in Northeastern and Midwestern industrial cities to work in factories, mines, and mills.",
            "distractorTip": "Their distinct religious practices and customs triggered fierce nativist hostility from groups like the American Protective Association (APA)."
          },
          {
            "id": "ush6-l6-q2",
            "stem": "What was the primary function of urban political machines (such as New York's Tammany Hall, led by Boss Tweed) in late nineteenth-century American cities?",
            "options": [
              "They advocated the total prohibition of all alcohol and the criminalization of immigration.",
              "They traded municipal patronage jobs, emergency social services, and coal to poor immigrants in exchange for reliable political votes, while pocketing millions through corrupt graft.",
              "They operated non-profit public hospitals financed entirely through voluntary citizen donations.",
              "They campaigned for the immediate abolition of all federal tariffs and trade regulations."
            ],
            "correctIndex": 1,
            "explanation": "In an era before municipal social welfare systems, political machines provided desperately needed survival aid (jobs, housing, food) to arriving immigrants, creating intensely loyal voting blocs that bosses monetized through kickbacks and fraudulent city contracts.",
            "distractorTip": "Muckraking political cartoonist Thomas Nast famously exposed Boss Tweed's corruption in Harper's Weekly, leading to Tweed's conviction and imprisonment."
          },
          {
            "id": "ush6-l6-q3",
            "stem": "How did urban settlement houses, such as Jane Addams's Hull House founded in Chicago in 1889, address the challenges faced by \"New Immigrants\"?",
            "options": [
              "By advocating for federal legislation to deport all foreign-born laborers immediately.",
              "By operating private commercial banks that charged high interest on home mortgages.",
              "By providing immigrant communities with English classes, childcare, kindergarten, job training, and cultural programs, while lobbying for municipal child labor and sanitation reforms.",
              "By requiring all immigrant residents to convert to the Presbyterian Church."
            ],
            "correctIndex": 2,
            "explanation": "Settlement houses were run by educated, middle-class women who lived in immigrant neighborhoods, offering social services, community support, and spearheading early sociological research that drove Progressive municipal reforms.",
            "distractorTip": "Jane Addams and the settlement house movement pioneered the modern profession of social work and demonstrated women's leadership in public reform."
          }
        ]
      },
      {
        "id": 607,
        "unitIndex": 6,
        "levelNumber": 7,
        "uniqueKey": "ush-p6-l7",
        "topicNumber": "Topic 6.8",
        "name": "The Populist Revolt & Free Silver",
        "subtitle": "The Grange, the Omaha Platform, and William Jennings Bryan",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush6-l7-q1",
            "stem": "The Populist (People's) Party, established in 1892 by discontented western and southern farmers, articulated their radical reform demands in the Omaha Platform, which called for:",
            "options": [
              "A return to the gold standard and the deregulation of all interstate railroad freight rates.",
              "The immediate privatization of all national parks and the abolition of public education.",
              "Free and unlimited coinage of silver (bimetallism), government ownership of railroads and telegraphs, a graduated income tax, and direct election of U.S. senators.",
              "The constitutional prohibition of labor unions and strikes across all industries."
            ],
            "correctIndex": 2,
            "explanation": "Facing falling crop prices, crushing railroad shipping rates, and deflationary debt, farmers organized to demand inflation through 'Free Silver' and structural political reforms to restore democratic power to agrarian and industrial producers.",
            "distractorTip": "Nearly all major Populist demands—the graduated income tax (16th Amendment), direct election of senators (17th Amendment), and railroad regulation—were enacted during the subsequent Progressive Era."
          },
          {
            "id": "ush6-l7-q2",
            "stem": "In his impassioned 'Cross of Gold' speech at the 1896 Democratic National Convention, presidential nominee William Jennings Bryan declared that:",
            "options": [
              "Labor unions should be outlawed to protect corporate industrial profits.",
              "The gold standard was established by divine revelation and must be defended against all western silver miners.",
              "The United States should immediately surrender all territorial claims west of the Mississippi.",
              "Mankind must not be crucified upon a 'cross of gold,' championing the unlimited coinage of silver to inflate the currency and relieve indebted farmers."
            ],
            "correctIndex": 3,
            "explanation": "Bryan's electrifying oratory won him both the Democratic and Populist nominations. He argued that cities depended on farms ('Burn down your cities and leave our farms, and your cities will spring up again as if by magic'), pitting agrarian silver interests against eastern gold-standard bankers.",
            "distractorTip": "Republican William McKinley defeated Bryan in 1896 with a massive corporate campaign fund orchestrated by Mark Hanna, cementing the gold standard and urban industrial political supremacy."
          },
          {
            "id": "ush6-l7-q3",
            "stem": "The Populist (People's) Party's 1892 Omaha Platform demanded which radical economic policy designed to alleviate crushing agrarian debt?",
            "options": [
              "The complete replacement of all paper currency with British gold sovereigns.",
              "The privatization of all public schools and postal service routes.",
              "High protective tariffs on agricultural farm equipment imported from Canada.",
              "The unlimited, free coinage of silver at a ratio of 16 to 1 to increase the money supply, cause inflation, and ease debt burdens on western and southern farmers."
            ],
            "correctIndex": 3,
            "explanation": "Farmers faced falling crop prices and deflation under the gold standard; the Populists demanded 'Free Silver' to inflate the currency, along with government ownership of railroads/telegraphs, a graduated income tax, direct election of senators, and an eight-hour workday.",
            "distractorTip": "William Jennings Bryan famously championed the Populist monetary platform in his 1896 'Cross of Gold' speech ('You shall not crucify mankind upon a cross of gold')."
          }
        ]
      },
      {
        "id": 608,
        "unitIndex": 6,
        "levelNumber": 8,
        "uniqueKey": "ush-p6-l8",
        "topicNumber": "Period 6 Boss Level",
        "name": "Period 6 Capstone & Synthesis",
        "subtitle": "Mastery of Gilded Age industrialization, labor, and social movements",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "ush6-l8-q1",
            "stem": "Jane Addams's settlement house movement, exemplified by Hull House in Chicago (founded 1889), represented a pioneering effort to:",
            "options": [
              "Provide community-based education, childcare, healthcare, and English classes to poor urban immigrants while investigating urban living conditions for legislative reform.",
              "Evangelize Native Americans on western reservations into orthodox Calvinist churches.",
              "Lobby Congress to ban all European immigration to protect domestic wage rates.",
              "Train wealthy society women to work as armed police officers in industrial coal towns."
            ],
            "correctIndex": 0,
            "explanation": "Addams and Ellen Gates Starr lived among the immigrant working class in Chicago's slums, pioneering modern social work. Hull House provided practical services while Addams lobbied successfully for juvenile courts, child labor laws, and factory safety legislation.",
            "distractorTip": "Addams became the first American woman to be awarded the Nobel Peace Prize (1931) for her social reform and anti-war pacifism."
          },
          {
            "id": "ush6-l8-q2",
            "stem": "What was the significance of the Chinese Exclusion Act of 1882 in the broader history of United States immigration policy?",
            "options": [
              "It granted automatic birthright citizenship to all Asian contract laborers residing in California.",
              "It was the first major federal legislation to explicitly ban immigration of a specific ethnic/national group based on race and nationality.",
              "It mandated that all Chinese immigrants be assigned 160 acres of public land in the Great Plains.",
              "It outlawed the hiring of white European workers in western silver and gold mines."
            ],
            "correctIndex": 1,
            "explanation": "Pressured by California labor unions (led by Denis Kearney's Workingmen's Party) who claimed Chinese laborers drove down wages, Congress suspended Chinese immigration for ten years and barred Chinese residents from becoming naturalized citizens.",
            "distractorTip": "The Chinese Exclusion Act was continually renewed until it was finally repealed during World War II in 1943 when China became an American wartime ally against Japan."
          },
          {
            "id": "ush6-l8-q3",
            "stem": "What primary strategy did John D. Rockefeller's Standard Oil utilize to achieve near-total monopoly control over the American petroleum refining industry by the 1880s?",
            "options": [
              "Horizontal integration—buying out, undercutting, and absorbing rival oil refineries to control over 90% of refining capacity—combined with railroad rebate collusion.",
              "Relying exclusively on small, independent artisan cooperatives in Pennsylvania.",
              "Selling all corporate refinery assets to European state monopolies.",
              "Refusing to utilize any kerosene or gasoline refining technology."
            ],
            "correctIndex": 0,
            "explanation": "Rockefeller pioneered horizontal integration (merging with or eliminating competitors at the same stage of production) and used secretive railroad rebates to crush rivals; later, he integrated vertically (pipelines, barrels, tanker cars) and formed the Standard Oil Trust.",
            "distractorTip": "Distinguish horizontal integration (controlling all competitors in one industry, like Rockefeller's refineries) from vertical integration (controlling every phase from raw material to finished product, like Carnegie's iron ore mines, rail cars, and steel mills)."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 7,
    "unitId": "p7",
    "title": "Period 7: 1890–1945",
    "shortTitle": "Period 7: Wars & Depression",
    "description": "Imperialism, the Progressive Era, World War I, the Roaring Twenties, the Great Depression, the New Deal, and World War II",
    "examWeight": "10–17% of AP Exam",
    "biome": {
      "name": "Roaring Boulevard & Normandy Beachhead",
      "icon": "🎖️",
      "accentColor": "#3B82F6",
      "secondaryColor": "#1D4ED8",
      "groundGradient": "from-blue-100 via-sky-50 to-indigo-100",
      "cardBorder": "border-blue-500",
      "trailColor": "#3b82f6",
      "nodeRing": "ring-blue-400/40",
      "skyTint": "from-blue-50 to-sky-50/30"
    },
    "levels": [
      {
        "id": 701,
        "unitIndex": 7,
        "levelNumber": 1,
        "uniqueKey": "ush-p7-l1",
        "topicNumber": "Topic 7.1 & 7.2",
        "name": "Imperialism Debates & Spanish-American War",
        "subtitle": "Mahan's sea power, yellow journalism, and the Treaty of Paris 1898",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush7-l1-q1",
            "stem": "Alfred Thayer Mahan's highly influential book, 'The Influence of Sea Power upon History' (1890), argued that the United States must:",
            "options": [
              "Sell all American territorial claims in the Pacific to the German Empire.",
              "Dismantle the U.S. Navy and rely strictly on agrarian self-sufficiency behind continental coastal borders.",
              "Build a modern two-ocean steel steam navy, acquire overseas coaling stations, and construct an interoceanic canal across Central America to secure global economic preeminence.",
              "Prohibit American merchant vessels from engaging in transoceanic Asian commerce."
            ],
            "correctIndex": 2,
            "explanation": "Mahan demonstrated that national greatness throughout history derived from maritime commerce protected by a powerful navy, directly inspiring imperialist leaders like Theodore Roosevelt and Henry Cabot Lodge to expand American naval power and overseas territory.",
            "distractorTip": "Mahan's thesis provided the intellectual blueprint for acquiring Hawaii, Puerto Rico, Guam, and the Philippines, and building the Panama Canal."
          },
          {
            "id": "ush7-l1-q2",
            "stem": "The Anti-Imperialist League (founded 1898, featuring Mark Twain, Andrew Carnegie, and William James) opposed the annexation of the Philippines primarily on the grounds that:",
            "options": [
              "Spain had refused to sign the Treaty of Paris in 1898.",
              "The Philippine archipelago possessed zero agricultural or natural resource value.",
              "The United States Army was too small to fight against the Spanish Royal Navy.",
              "Subjugating a foreign population without their consent violated the fundamental democratic ideals of the Declaration of Independence and the Constitution."
            ],
            "correctIndex": 3,
            "explanation": "Anti-imperialists argued that governing distant colonial subjects without the 'consent of the governed' betrayed America's republican heritage, while warning that foreign imperialism would inevitably breed domestic militarism and tyranny.",
            "distractorTip": "Despite anti-imperialist protests, the Senate ratified the 1898 Treaty of Paris by a single vote, leading directly to the brutal Philippine-American War (1899–1902) led by Emilio Aguinaldo."
          },
          {
            "id": "ush7-l1-q3",
            "stem": "Prominent members of the American Anti-Imperialist League, such as Mark Twain, Jane Addams, and Andrew Carnegie, opposed the annexation of the Philippines in 1898 primarily because:",
            "options": [
              "They believed the Spanish Empire should retain all its Caribbean and Pacific colonies.",
              "They argued that subjugating a foreign people without their consent violated the fundamental democratic principles of the Declaration of Independence and the Constitution.",
              "They wanted the United States to annex Canada instead of Pacific islands.",
              "They feared that sugar imported from the Philippines would destroy American corn farming."
            ],
            "correctIndex": 1,
            "explanation": "Anti-imperialists argued that imperialism was fundamentally hypocritical for a nation born out of an anti-colonial revolution, warning that ruling overseas colonies without granting citizenship would erode constitutional republicanism at home.",
            "distractorTip": "The annexation of the Philippines triggered the brutal Philippine-American War (1899–1902), where Filipino nationalist Emilio Aguinaldo fought American occupation forces."
          }
        ]
      },
      {
        "id": 702,
        "unitIndex": 7,
        "levelNumber": 2,
        "uniqueKey": "ush-p7-l2",
        "topicNumber": "Topic 7.3",
        "name": "Big Stick Diplomacy & Roosevelt Corollary",
        "subtitle": "The Panama Canal, the Open Door Policy, and Latin American intervention",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush7-l2-q1",
            "stem": "The Roosevelt Corollary to the Monroe Doctrine (1904) asserted that in the event of chronic wrongdoing or financial instability in Latin American nations, the United States had the right to:",
            "options": [
              "Exercise an 'international police power' through military intervention to stabilize nations and prevent European imperial recolonization.",
              "Surrender Western Hemisphere territory directly to the League of Nations.",
              "Mandate that all Latin American republics become official incorporated states of the Union.",
              "Impose the metric system and mandatory English language education across the Americas."
            ],
            "correctIndex": 0,
            "explanation": "When European warships threatened to blockade Venezuela and the Dominican Republic to collect unpaid debts, Theodore Roosevelt transformed the defensive Monroe Doctrine into an aggressive justification for unilateral U.S. armed intervention across the Caribbean ('Big Stick Diplomacy').",
            "distractorTip": "The Roosevelt Corollary generated intense, lasting resentment among Latin American nations, who viewed it as Yankee imperial aggression rather than benevolence."
          },
          {
            "id": "ush7-l2-q2",
            "stem": "Secretary of State John Hay's 'Open Door Notes' (1899–1900) sought to protect American commercial interests in China by demanding that:",
            "options": [
              "China be completely partitioned into five permanent colonial dependencies ruled by Western powers.",
              "All European imperial powers and Japan respect equal, non-discriminatory commercial trading rights within their spheres of influence and preserve China's territorial integrity.",
              "American merchant vessels be granted an exclusive naval monopoly over all Chinese river ports.",
              "The Chinese imperial government immediately ban all British opium and textile imports."
            ],
            "correctIndex": 1,
            "explanation": "Fearing that European powers and Japan would carve China into closed imperial spheres of influence, Hay articulated the 'Open Door' policy to ensure American businesses had unrestricted access to China's vast consumer markets without having to colonize Chinese territory.",
            "distractorTip": "The U.S. reinforced this policy by contributing troops to the international expedition that crushed the anti-foreign Boxer Rebellion in Beijing in 1900."
          },
          {
            "id": "ush7-l2-q3",
            "stem": "How did Theodore Roosevelt's \"Roosevelt Corollary\" to the Monroe Doctrine alter United States foreign policy in Latin America?",
            "options": [
              "It renounced all future US military intervention in the Western Hemisphere.",
              "It required Latin American nations to sign mutual defense treaties with Great Britain.",
              "It asserted that chronic wrongdoing or financial instability in Latin American nations would compel the United States to act as an \"international police power\" to intervene and maintain order.",
              "It recognized the sovereignty of the Russian Empire in Central America."
            ],
            "correctIndex": 2,
            "explanation": "Roosevelt expanded the 1823 Monroe Doctrine: whereas Monroe told Europe to stay out, Roosevelt declared that the US would preemptively intervene militarily in Latin American nations (e.g., Dominican Republic, Cuba) to collect debts and prevent European intervention.",
            "distractorTip": "The Roosevelt Corollary transformed the Monroe Doctrine from a defensive shield against European recolonization into an aggressive justification for US military intervention in the Caribbean and Central America."
          }
        ]
      },
      {
        "id": 703,
        "unitIndex": 7,
        "levelNumber": 3,
        "uniqueKey": "ush-p7-l3",
        "topicNumber": "Topic 7.4",
        "name": "The Progressive Era: Muckrakers & Trustbusting",
        "subtitle": "Upton Sinclair, Ida Tarbell, and Theodore Roosevelt's Square Deal",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush7-l3-q1",
            "stem": "How did investigative journalists known as 'Muckrakers' (such as Upton Sinclair and Ida Tarbell) fundamentally reshape early twentieth-century American governance?",
            "options": [
              "By coordinating violent armed uprisings against the Standard Oil Trust and Wall Street banks.",
              "By campaigning for the total abolition of all corporate taxation and federal food inspections.",
              "By publishing sensational, meticulously researched exposés of corporate monopolies, political corruption, and dangerous labor conditions that aroused public outrage and compelled federal regulatory reform.",
              "By lobbying state legislatures to repeal all existing child labor restrictions."
            ],
            "correctIndex": 2,
            "explanation": "Sinclair's The Jungle (1906) exposed horrific sanitary abuses in Chicago's meatpacking plants (spurring the Meat Inspection Act and Pure Food and Drug Act), while Tarbell's History of the Standard Oil Company exposed Rockefeller's cutthroat practices (leading to its 1911 antitrust breakup).",
            "distractorTip": "Theodore Roosevelt coined the term 'muckraker' from John Bunyan's Pilgrim's Progress, acknowledging their reform power while cautioning against excessive sensationalism."
          },
          {
            "id": "ush7-l3-q2",
            "stem": "President Theodore Roosevelt's domestic policy platform, known as the 'Square Deal', focused on which three core Progressive principles (the 'Three Cs')?",
            "options": [
              "Cessation of immigration, creation of monopolies, and centralization of banking.",
              "Conquest of Canada, currency deflation, and constitutional abolition of the Senate.",
              "Corporate deregulation, colonial expansion, and compulsory church attendance.",
              "Control of corporations, consumer protection, and conservation of natural resources."
            ],
            "correctIndex": 3,
            "explanation": "Roosevelt believed the president should serve as a steward for the public welfare: he broke up abusive monopolies (Northern Securities case), protected consumers from adulterated foods/drugs, and set aside roughly 230 million acres of public land for national forests and parks.",
            "distractorTip": "TR distinguished between 'good trusts' (which provided efficient public services and should be regulated) and 'bad trusts' (which abused monopoly power and must be broken up)."
          },
          {
            "id": "ush7-l3-q3",
            "stem": "Upton Sinclair's 1906 muckraking novel The Jungle directly catalyzed the passage of which landmark federal consumer protection legislation?",
            "options": [
              "The Federal Reserve Act of 1913.",
              "The Clayton Antitrust Act of 1914.",
              "The Social Security Act of 1935.",
              "The Pure Food and Drug Act and the Meat Inspection Act of 1906."
            ],
            "correctIndex": 3,
            "explanation": "Sinclair intended to arouse sympathy for exploited immigrant workers in Chicago meatpacking plants ('I aimed at the public's heart, and by accident I hit it in the stomach'); the horrific descriptions of contaminated meat sickened President Theodore Roosevelt and the public, leading directly to federal food safety regulation.",
            "distractorTip": "Muckrakers like Sinclair, Ida Tarbell (Standard Oil), and Jacob Riis (urban slums) used investigative journalism to expose corporate abuses and spur Progressive legislative action."
          }
        ]
      },
      {
        "id": 704,
        "unitIndex": 7,
        "levelNumber": 4,
        "uniqueKey": "ush-p7-l4",
        "topicNumber": "Topic 7.4",
        "name": "Progressive Constitutional Amendments & Wilson",
        "subtitle": "The 16th, 17th, 18th, and 19th Amendments, and the Federal Reserve",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush7-l4-q1",
            "stem": "Which sequence correctly matches the four historic Progressive Constitutional Amendments ratified between 1913 and 1920?",
            "options": [
              "16th (Graduated Income Tax), 17th (Direct Election of U.S. Senators), 18th (Prohibition of Alcohol), 19th (Women's Suffrage).",
              "16th (Abolition of Slavery), 17th (Birthright Citizenship), 18th (Male Voting Rights), 19th (Income Tax).",
              "16th (Direct Election of Senators), 17th (Income Tax), 18th (Women's Suffrage), 19th (Prohibition).",
              "16th (Term Limits on Presidents), 17th (Repeal of Tariffs), 18th (Direct Primary Elections), 19th (Civil Rights)."
            ],
            "correctIndex": 0,
            "explanation": "Progressives structurally democratized and modernized the federal government: the 16th Amendment funded federal programs via progressive income tax; the 17th eliminated state legislature corruption in Senate picks; the 18th banned alcohol; and the 19th granted women the right to vote in 1920.",
            "distractorTip": "Memory Trick: Taxes (16th), Senators (17th), Drinking (18th), Women (19th)."
          },
          {
            "id": "ush7-l4-q2",
            "stem": "The Federal Reserve Act of 1913, signed into law by President Woodrow Wilson, fundamentally restructured the American financial system by creating:",
            "options": [
              "A single, privatized bank in Wall Street with absolute power over state banking charters.",
              "A decentralized national central banking system with twelve regional Federal Reserve banks authorized to issue Federal Reserve notes and regulate credit through interest rates.",
              "The complete abolition of all paper currency in favor of gold and silver coin.",
              "A federal department responsible for setting uniform consumer prices on all retail groceries."
            ],
            "correctIndex": 1,
            "explanation": "Following the Panic of 1907, Wilson and Congress established the 'Fed' to balance private banking interests with public federal oversight, providing an elastic national currency and monetary policy tools to stabilize the banking system.",
            "distractorTip": "The Federal Reserve System was Wilson's greatest legislative achievement under his 'New Freedom' progressive agenda."
          },
          {
            "id": "ush7-l4-q3",
            "stem": "The Federal Reserve Act of 1913, signed into law by Woodrow Wilson, restructured the American banking system by:",
            "options": [
              "Creating a decentralized central bank with twelve regional Federal Reserve Banks and a presidential board, empowered to regulate the money supply and adjust interest rates.",
              "Returning the United States to a strict, unbacked silver monetary standard.",
              "Transferring all private savings accounts directly into the US Treasury.",
              "Eliminating all private commercial banking across the United States."
            ],
            "correctIndex": 0,
            "explanation": "Following the Panic of 1907, the Federal Reserve System was created to provide an 'elastic currency' capable of expanding and contracting with economic needs, stabilizing the banking system while serving as a lender of last resort.",
            "distractorTip": "The Federal Reserve represents a classic Progressive Era reform: creating non-partisan expert regulatory bodies to stabilize the market economy without abolishing capitalism."
          }
        ]
      },
      {
        "id": 705,
        "unitIndex": 7,
        "levelNumber": 5,
        "uniqueKey": "ush-p7-l5",
        "topicNumber": "Topic 7.5 & 7.6",
        "name": "World War I: Mobilization & Homefront",
        "subtitle": "Unrestricted submarine warfare, the Great Migration, and Schenck v. US",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush7-l5-q1",
            "stem": "What was the immediate diplomatic and military catalyst that compelled President Woodrow Wilson to ask Congress for a declaration of war against Germany in April 1917?",
            "options": [
              "The assassination of the British Prime Minister by Austro-Hungarian secret agents.",
              "A direct German air raid on New York Harbor that destroyed federal naval yards.",
              "Germany's resumption of unrestricted submarine warfare in the Atlantic and the interception of the Zimmermann Telegram proposing a German-Mexican military alliance.",
              "A joint military invasion of Texas by German and Spanish imperial armies."
            ],
            "correctIndex": 2,
            "explanation": "Germany sank American merchant vessels without warning and the British intercepted German foreign secretary Arthur Zimmermann's telegram offering Mexico the return of Texas, New Mexico, and Arizona if it attacked the U.S., shattering American neutrality.",
            "distractorTip": "Wilson framed American entry not for territorial gain, but as a moral crusade: 'The world must be made safe for democracy.'"
          },
          {
            "id": "ush7-l5-q2",
            "stem": "In Schenck v. United States (1919), the Supreme Court upheld the conviction of a socialist distributing anti-draft leaflets under the Espionage Act by establishing which constitutional test?",
            "options": [
              "State governors have the sole authority to determine the legality of political pamphleteering.",
              "The First Amendment provides absolute, unconditional protection for all forms of political speech during wartime.",
              "Only naturalized immigrants may be prosecuted for speech criticizing federal foreign policy.",
              "Free speech may be restricted during wartime if the words present a 'clear and present danger' to national security, famously analogized to 'shouting fire in a crowded theater.'"
            ],
            "correctIndex": 3,
            "explanation": "Writing for a unanimous Court, Justice Oliver Wendell Holmes Jr. ruled that civil liberties are not absolute; during wartime, the government may legally suppress speech that poses a 'clear and present danger' to military recruitment and the war effort.",
            "distractorTip": "The Espionage and Sedition Acts were weaponized to imprison over 1,000 anti-war dissidents, including Socialist Party leader Eugene V. Debs."
          },
          {
            "id": "ush7-l5-q3",
            "stem": "In the landmark wartime civil liberties case Schenck v. United States (1919), the Supreme Court upheld the conviction of Charles Schenck under the Espionage Act by establishing which legal doctrine?",
            "options": [
              "That the First Amendment guarantees absolute freedom of speech without any exceptions during wartime.",
              "That freedom of speech can be restricted if the words spoken or printed create a \"clear and present danger\" of bringing about substantive evils that Congress has a right to prevent (such as insubordination in the armed forces).",
              "That state governments are exempt from complying with the Bill of Rights.",
              "That draft resisters are entitled to immediate federal judicial pardons."
            ],
            "correctIndex": 1,
            "explanation": "Justice Oliver Wendell Holmes Jr. wrote that speech is not protected when it creates a 'clear and present danger,' famously analogizing Schenck's anti-draft pamphlets to 'falsely shouting fire in a theatre and causing a panic.'",
            "distractorTip": "During periods of war and national crisis, the federal government has repeatedly restricted civil liberties (e.g., Alien & Sedition Acts 1798, Lincoln's suspension of habeas corpus, Espionage Act 1917, Japanese American internment)."
          }
        ]
      },
      {
        "id": 706,
        "unitIndex": 7,
        "levelNumber": 6,
        "uniqueKey": "ush-p7-l6",
        "topicNumber": "Topic 7.5",
        "name": "Treaty of Versailles & The League of Nations",
        "subtitle": "Wilson's Fourteen Points, Article X, and the Senate ratification fight",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush7-l6-q1",
            "stem": "Why did the United States Senate, led by Republican Foreign Relations Committee Chairman Henry Cabot Lodge, ultimately reject the Treaty of Versailles and refuse to join the League of Nations?",
            "options": [
              "They feared that Article X of the League Covenant would unconstitutionally drag the United States into foreign wars without the explicit, sovereign consent of Congress.",
              "They demanded that the treaty impose far harsher financial reparations and territorial dismemberment on Germany.",
              "They insisted that Great Britain and France surrender all their Caribbean and Pacific island colonies to the United States.",
              "Wilson refused to travel to Paris and boycotted the peace conference negotiations."
            ],
            "correctIndex": 0,
            "explanation": "Lodge and the 'Reservationists' objected to Article X's collective security clause, arguing it surrendered Congress's exclusive constitutional authority under Article I, Section 8 to declare war. Wilson's stubborn refusal to compromise with Senate Republicans doomed the treaty.",
            "distractorTip": "The defeat of the treaty marked a decisive American retreat from internationalism into the interwar isolationism that characterized the 1920s and 1930s."
          },
          {
            "id": "ush7-l6-q2",
            "stem": "What was the demographic and cultural significance of the 'Great Migration' of African Americans that accelerated dramatically during World War I?",
            "options": [
              "Over one million African Americans voluntarily migrated to the colony of Liberia in West Africa.",
              "Hundreds of thousands of African Americans left the rural Jim Crow South for Northern and Midwestern industrial cities to escape racial terror and fill wartime factory labor shortages.",
              "African Americans were forcefully relocated by the federal government to agricultural reservations in the desert Southwest.",
              "African American families abandoned northern cities to establish cotton cooperatives in Alabama."
            ],
            "correctIndex": 1,
            "explanation": "Lured by high factory wages in Chicago, Detroit, New York, and Philadelphia and driven out by boll weevil cotton destruction, disenfranchisement, and lynching, over 1.5 million Black Southerners migrated north, permanently transforming urban politics and birthing the Harlem Renaissance.",
            "distractorTip": "The influx of Black workers also ignited severe racial tensions and white violence, culminating in the bloody 'Red Summer' of 1919 race riots across northern cities."
          },
          {
            "id": "ush7-l6-q3",
            "stem": "Why did the United States Senate—led by \"Reservationist\" Senator Henry Cabot Lodge—ultimately refuse to ratify the 1919 Treaty of Versailles?",
            "options": [
              "Because the treaty gave all German overseas colonies directly to the United States.",
              "Because Woodrow Wilson refused to include the Fourteen Points in the final document.",
              "Because Article X of the League of Nations covenant was seen as obligating the United States to defend member nations, thereby undermining Congress's constitutional power to declare war.",
              "Because the treaty failed to demand sufficient gold reparations from Imperial Germany."
            ],
            "correctIndex": 2,
            "explanation": "Lodge and the Reservationists feared Article X's collective security clause would entangle the US in foreign conflicts without congressional approval; Wilson refused to compromise on amendments, causing the Senate to reject the treaty and keeping the US out of the League of Nations.",
            "distractorTip": "The defeat of the Treaty of Versailles marked the return of the United States to an isolationist foreign policy stance during the interwar 1920s and 1930s."
          }
        ]
      },
      {
        "id": 707,
        "unitIndex": 7,
        "levelNumber": 7,
        "uniqueKey": "ush-p7-l7",
        "topicNumber": "Topic 7.7",
        "name": "The 1920s: Modernity & Cultural Backlash",
        "subtitle": "Consumer culture, Harlem Renaissance, Scopes Trial, and 1924 Quotas",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush7-l7-q1",
            "stem": "The 1925 Scopes 'Monkey' Trial in Dayton, Tennessee, dramatized which profound cultural and ideological clash of the 1920s?",
            "options": [
              "The federal prosecution of organized crime figures for violating the Volstead Prohibition Act.",
              "A legal dispute over the copyright patents of Henry Ford's automated automotive assembly line.",
              "The conflict between modern secular scientific rationalism (Darwinian evolutionary biology) and traditional Christian religious fundamentalism (biblical creationism).",
              "A Supreme Court debate over the legality of racially integrated public schooling."
            ],
            "correctIndex": 2,
            "explanation": "Biology teacher John T. Scopes was tried for violating the Butler Act by teaching evolution. With Clarence Darrow defending Scopes and fundamentalist orator William Jennings Bryan testifying for the prosecution, the trial captivated the nation via live radio.",
            "distractorTip": "Scopes was found guilty and fined $100, but Darrow's cross-examination of Bryan publicly humiliated the anti-evolution fundamentalist movement."
          },
          {
            "id": "ush7-l7-q2",
            "stem": "The National Origins Act of 1924 (Johnson-Reed Act) represented the apex of 1920s nativism by:",
            "options": [
              "Banning all European immigration while encouraging unrestricted migration from the Soviet Union.",
              "Completely opening all American borders to unrestricted, duty-free worldwide immigration.",
              "Mandating that all incoming immigrants pass an advanced English literature examination.",
              "Establishing strict immigration quotas based on 2% of each nationality's population in the 1890 census, deliberately slashing immigration from Southern/Eastern Europe and banning Asians."
            ],
            "correctIndex": 3,
            "explanation": "By calculating quotas using the 1890 census (before the massive wave of Italian, Polish, Russian, and Jewish immigration), Congress intentionally preserved America's Anglo-Saxon Protestant demographic dominance and barred Asian immigrants entirely.",
            "distractorTip": "The law exempted Western Hemisphere immigrants, leading to a surge in Mexican immigration to fill southwestern agricultural labor demands."
          },
          {
            "id": "ush7-l7-q3",
            "stem": "The 1925 Scopes \"Monkey Trial\" in Dayton, Tennessee, dramatized which profound cultural conflict of the 1920s?",
            "options": [
              "The conflict between labor unions and Wall Street financiers over the eight-hour day.",
              "The diplomatic rivalry between the United States and the League of Nations.",
              "The debate over whether to construct intermodal transcontinental highway systems.",
              "The cultural clash between traditional Christian religious fundamentalism and modern scientific secularism over the teaching of Darwinian biological evolution in public schools."
            ],
            "correctIndex": 3,
            "explanation": "Biology teacher John T. Scopes was tried for violating Tennessee's Butler Act; the clash between defense attorney Clarence Darrow and fundamentalist prosecutor William Jennings Bryan was broadcast on national radio, highlighting the cultural divide between urban modernism and rural traditionalism.",
            "distractorTip": "The 1920s were characterized by cultural polarization: modernity/jazz/consumerism vs. Prohibition, the resurgence of the KKK, the Scopes Trial, and nativist immigration quotas."
          }
        ]
      },
      {
        "id": 708,
        "unitIndex": 7,
        "levelNumber": 8,
        "uniqueKey": "ush-p7-l8",
        "topicNumber": "Topic 7.8",
        "name": "The Great Crash & Great Depression",
        "subtitle": "Stock market collapse, bank failures, the Dust Bowl, and Hoover's response",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush7-l8-q1",
            "stem": "Which underlying structural economic weaknesses contributed most directly to the devastating Stock Market Crash of October 1929 and the subsequent Great Depression?",
            "options": [
              "Rampant stock speculation fueled by low-margin buying, severe income inequality, agricultural overproduction/debt, and an unregulated banking system.",
              "Excessive federal welfare spending that bankrupted the United States Department of the Treasury.",
              "A total collapse in international demand for gold bullion and silver coinage.",
              "Severe shortages of industrial factory equipment and a lack of available immigrant laborers."
            ],
            "correctIndex": 0,
            "explanation": "The 1920s economic boom was fragile: the top 5% received one-third of all income, ordinary consumers relied on installment debt, farmers suffered from chronic low prices, and investors bought stocks with only 10% cash down ('buying on margin').",
            "distractorTip": "When stock prices began slipping in late October 1929, margin calls triggered panic selling, wiping out $30 billion in wealth within days."
          },
          {
            "id": "ush7-l8-q2",
            "stem": "Why did President Herbert Hoover's public response to the Great Depression face fierce nationwide public backlash and condemnation?",
            "options": [
              "He immediately nationalized all private commercial banks and heavy industrial factories.",
              "He refused to provide direct federal cash relief to unemployed citizens, insisting on 'rugged individualism', local private charity, and voluntary corporate wage pledges.",
              "He ordered the United States military to invade Mexico to secure emergency oil revenues.",
              "He spent billions of federal dollars providing universal basic income to every American household."
            ],
            "correctIndex": 1,
            "explanation": "Hoover feared federal direct aid would destroy American self-reliance. As millions lost jobs and homes, shantytowns were derisively named 'Hoovervilles,' and his decision to have General Douglas MacArthur violently evict the World War I 'Bonus Army' in 1932 cemented his political defeat.",
            "distractorTip": "Hoover DID create the Reconstruction Finance Corporation (RFC) in 1932 to lend money to banks and railroads, but it was viewed as 'trickle-down' aid too small and too late."
          },
          {
            "id": "ush7-l8-q3",
            "stem": "How did President Herbert Hoover's core political philosophy of \"rugged individualism\" and voluntary cooperation shape his administration's initial response to the Great Depression?",
            "options": [
              "He resisted direct federal cash relief or welfare payments to unemployed citizens, believing it would destroy self-reliance and municipal charity, relying instead on voluntary business pledges and limited emergency loans (Reconstruction Finance Corporation).",
              "He immediately nationalized all private commercial banks and instituted universal basic income.",
              "He forced all unemployed workers into mandatory federal military service.",
              "He dissolved the federal income tax and abolished all protective tariffs on foreign goods."
            ],
            "correctIndex": 0,
            "explanation": "Hoover believed in associative state capitalism and feared that direct federal 'doles' would undermine American character; while he eventually established the RFC in 1932 to loan funds to banks and railroads, his refusal to provide direct federal relief led the public to view him as callous and out of touch.",
            "distractorTip": "Public anger at Hoover crystallized in shantytowns called 'Hoovervilles' and the violent routing of the World War I 'Bonus Army' veterans from Washington in 1932."
          }
        ]
      },
      {
        "id": 709,
        "unitIndex": 7,
        "levelNumber": 9,
        "uniqueKey": "ush-p7-l9",
        "topicNumber": "Topic 7.9",
        "name": "FDR & The New Deal",
        "subtitle": "Relief, Recovery, Reform: CCC, WPA, Social Security, and Wagner Act",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush7-l9-q1",
            "stem": "During his historic 'First Hundred Days' in 1933, President Franklin D. Roosevelt took which immediate, decisive action to halt the nationwide banking panic?",
            "options": [
              "He mandated that all Americans surrender their private currency in exchange for government food stamps.",
              "He permanently closed all commercial banks and transferred all citizen savings to the U.S. Postal Service.",
              "He declared a four-day national 'Bank Holiday' and passed the Emergency Banking Relief Act, allowing sound banks to reopen under federal supervision and reassuring the public in his first 'Fireside Chat.'",
              "He ordered the federal arrest of all commercial bank tellers across the nation."
            ],
            "correctIndex": 2,
            "explanation": "FDR acted swiftly to restore confidence: Congress passed the Emergency Banking Act, the Fed provided liquidity, and FDR's soothing radio Fireside Chat convinced Americans that banks were safe. When banks reopened, citizens redeposited millions of dollars.",
            "distractorTip": "Congress quickly followed with the Glass-Steagall Banking Act of 1933, creating the Federal Deposit Insurance Corporation (FDIC) to insure individual bank deposits."
          },
          {
            "id": "ush7-l9-q2",
            "stem": "The National Labor Relations Act of 1935 (the Wagner Act)—a centerpiece of the 'Second New Deal'—revolutionized American industrial labor relations by:",
            "options": [
              "Prohibiting any worker from receiving overtime pay or participating in factory strikes.",
              "Outlawing all industrial labor unions as unconstitutional conspiracies in restraint of trade.",
              "Mandating that all corporate executives be selected through nationwide secret ballots by union members.",
              "Guaranteeing workers the legal right to form unions, engage in collective bargaining, and striking, while creating the National Labor Relations Board (NLRB) to punish unfair employer labor practices."
            ],
            "correctIndex": 3,
            "explanation": "Known as 'Labor's Magna Carta,' the Wagner Act provided federal protection for unionization, leading to the rapid growth of industrial unions under John L. Lewis's Congress of Industrial Organizations (CIO), including the United Auto Workers.",
            "distractorTip": "Alongside the Social Security Act of 1935 (old-age pensions and unemployment insurance), the Wagner Act laid the institutional foundation for the American middle class."
          },
          {
            "id": "ush7-l9-q3",
            "stem": "The National Labor Relations Act of 1935 (Wagner Act) fundamentally reshaped American industrial relations by:",
            "options": [
              "Declaring all labor strikes and picketing to be federal crimes during peacetime.",
              "Guaranteeing workers the legal right to form labor unions, engage in collective bargaining through representatives of their own choosing, and establishing the National Labor Relations Board (NLRB) to police unfair labor practices.",
              "Banning private corporations from hiring any unionized employees.",
              "Transferring ownership of all American automobile factories to federal labor unions."
            ],
            "correctIndex": 1,
            "explanation": "Dubbed 'Labor's Magna Carta,' the Wagner Act provided federal protection for union organizing and collective bargaining, sparking a massive surge in industrial union membership under the newly formed Congress of Industrial Organizations (CIO).",
            "distractorTip": "The Wagner Act was a cornerstone of FDR's Second New Deal, creating the powerful 'New Deal Coalition' of labor unions, urban working-class voters, minorities, and southern Democrats."
          }
        ]
      },
      {
        "id": 710,
        "unitIndex": 7,
        "levelNumber": 10,
        "uniqueKey": "ush-p7-l10",
        "topicNumber": "Topic 7.10 & 7.11",
        "name": "World War II: Homefront & Mobilization",
        "subtitle": "Lend-Lease, Executive Order 9066, Korematsu, and the Double V Campaign",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush7-l10-q1",
            "stem": "What was the constitutional significance of the Supreme Court's ruling in Korematsu v. United States (1944)?",
            "options": [
              "The Court upheld the forced wartime internment of over 120,000 Japanese Americans under Executive Order 9066 as a constitutionally permissible exercise of emergency military power.",
              "The Court declared Japanese internment unconstitutional and ordered immediate financial compensation to all internees.",
              "The Court ruled that the president has no authority to issue executive orders during declared wars.",
              "The Court ordered the immediate deportation of all Japanese American citizens to Tokyo."
            ],
            "correctIndex": 0,
            "explanation": "Writing for the majority, Justice Hugo Black ruled that the exclusion order was not based on race but on 'military necessity.' In a scathing dissent, Justice Frank Murphy condemned the ruling as legalizing 'the ugly abyss of racism.'",
            "distractorTip": "Over two-thirds of those forced into remote desert concentration camps were Nisei—native-born United States citizens."
          },
          {
            "id": "ush7-l10-q2",
            "stem": "During World War II, the African American 'Double V Campaign', promoted by the Pittsburgh Courier, rallied Black Americans to fight for:",
            "options": [
              "A total military alliance between the United States and the Empire of Japan.",
              "Victory over fascism and totalitarianism abroad in Europe/Asia, and victory over racial segregation and discrimination at home in America.",
              "The secession of five southern states to form an independent African American republic.",
              "The immediate dissolution of the United States War Production Board."
            ],
            "correctIndex": 1,
            "explanation": "African Americans linked the struggle against Nazi racism abroad to the fight against white supremacy at home, pressuring FDR through A. Philip Randolph's threatened March on Washington to issue Executive Order 8802 banning discrimination in defense industries.",
            "distractorTip": "The Double V Campaign laid the vital ideological and organizational groundwork for the modern Civil Rights Movement of the 1950s and 1960s."
          },
          {
            "id": "ush7-l10-q3",
            "stem": "The \"Double V\" Campaign, championed by the Pittsburgh Courier and other African American newspapers during World War II, called for:",
            "options": [
              "Victory for the United States over both Nazi Germany and the Soviet Union simultaneously.",
              "The immediate desegregation of all public swimming pools in New York City.",
              "Victory over fascism abroad against the Axis powers and victory over racial segregation and discrimination at home in the United States.",
              "A double increase in the federal income tax to finance naval aircraft carriers."
            ],
            "correctIndex": 2,
            "explanation": "Black Americans mobilized for the war while enduring Jim Crow segregation in the military and homefront factories; the Double V campaign highlighted the hypocrisy of fighting fascism abroad while tolerating white supremacy at home, laying the direct groundwork for the postwar Civil Rights Movement.",
            "distractorTip": "President Roosevelt responded to civil rights pressure (A. Philip Randolph's threatened March on Washington) by issuing Executive Order 8802, banning discrimination in defense industries."
          }
        ]
      },
      {
        "id": 711,
        "unitIndex": 7,
        "levelNumber": 11,
        "uniqueKey": "ush-p7-l11",
        "topicNumber": "Period 7 Boss Level",
        "name": "Period 7 Capstone & Synthesis",
        "subtitle": "Mastery of modern global conflict, depression, and atomic diplomacy",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "ush7-l11-q1",
            "stem": "President Harry S. Truman justified his momentous decision to drop atomic bombs on Hiroshima and Nagasaki in August 1945 primarily on the strategic rationale that:",
            "options": [
              "The Soviet Union had signed a secret peace treaty with the Japanese imperial military.",
              "The United States lacked sufficient conventional naval vessels to maintain a blockade of Tokyo Harbor.",
              "It would force Japan's unconditional surrender without a bloody, protracted amphibious mainland invasion (Operation Downfall), saving an estimated hundreds of thousands of American and Japanese lives.",
              "He wanted to permanently destroy the Japanese silk and agricultural industry."
            ],
            "correctIndex": 2,
            "explanation": "Truman and military advisers faced fierce Japanese resistance at Iwo Jima and Okinawa. They calculated that a mainland invasion would cost massive casualties; dropping the atomic weapons ended the war within days, though it simultaneously signaled American atomic supremacy to the Soviet Union.",
            "distractorTip": "Historians also note atomic diplomacy: Truman wanted to end the war before the Soviet Union could claim significant occupation territory in East Asia."
          },
          {
            "id": "ush7-l11-q2",
            "stem": "How did Franklin D. Roosevelt's New Deal permanently transform the relationship between the American citizenry and the federal government?",
            "options": [
              "It eliminated the national debt and balanced the federal budget every year from 1933 to 1945.",
              "It abolished the capitalist free-market economy and replaced it with a centrally planned Soviet-style socialist collective.",
              "It permanently weakened federal authority, transferring all taxing and welfare powers exclusively to municipal city halls.",
              "It established the modern regulatory and welfare state, creating the enduring public expectation that the federal government must guarantee economic security, social safety nets, and economic stability."
            ],
            "correctIndex": 3,
            "explanation": "Before FDR, Americans expected little from Washington during depressions. The New Deal fundamentally redefined American liberalism: the federal government assumed direct responsibility for protecting ordinary citizens against unemployment, old-age poverty, banking fraud, and economic collapse.",
            "distractorTip": "The New Deal Coalition (labor unions, blue-collar workers, minorities, urban ethnics, and white Southerners) dominated national presidential politics for the next four decades."
          },
          {
            "id": "ush7-l11-q3",
            "stem": "The Supreme Court's ruling in Korematsu v. United States (1944) is historically significant because the Court:",
            "options": [
              "Declared President Roosevelt's Lend-Lease Act unconstitutional under Article I.",
              "Ordered the immediate desegregation of the United States Armed Forces during wartime.",
              "Struck down the wartime federal draft as an unconstitutional form of involuntary servitude.",
              "Upheld the constitutionality of Executive Order 9066 and the forced internment of over 120,000 Japanese Americans, ruling that military necessity justified the denial of constitutional rights during a national emergency."
            ],
            "correctIndex": 3,
            "explanation": "Despite zero evidence of espionage or sabotage by Japanese Americans, the Court ruled 6–3 that the exclusion and internment was a legitimate military measure, a decision later repudiated by the federal government when Congress formally apologized and paid reparations in the Civil Liberties Act of 1988.",
            "distractorTip": "Korematsu is a landmark example of the Supreme Court failing to protect minority civil liberties during periods of wartime hysteria."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 8,
    "unitId": "p8",
    "title": "Period 8: 1945–1980",
    "shortTitle": "Period 8: Postwar Era",
    "description": "The Cold War, containment, McCarthyism, the Civil Rights Movement, the Vietnam War, the Great Society, and cultural counterculture",
    "examWeight": "10–17% of AP Exam",
    "biome": {
      "name": "Containment Line & Montgomery March",
      "icon": "🚀",
      "accentColor": "#6366F1",
      "secondaryColor": "#4F46E5",
      "groundGradient": "from-indigo-100 via-blue-50 to-purple-100",
      "cardBorder": "border-indigo-500",
      "trailColor": "#6366f1",
      "nodeRing": "ring-indigo-400/40",
      "skyTint": "from-indigo-50 to-purple-50/30"
    },
    "levels": [
      {
        "id": 801,
        "unitIndex": 8,
        "levelNumber": 1,
        "uniqueKey": "ush-p8-l1",
        "topicNumber": "Topic 8.1 & 8.2",
        "name": "Cold War Origins & Containment",
        "subtitle": "The Truman Doctrine, Marshall Plan, Berlin Airlift, and NATO",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush8-l1-q1",
            "stem": "The overarching post-WWII American foreign policy strategy of 'Containment', formulated by diplomat George F. Kennan in his 'Long Telegram' (1946), posited that:",
            "options": [
              "The United States must vigilantly check and contain Soviet geopolitical expansion through patient, long-term diplomatic, economic, and military resistance until the Soviet system collapsed from internal weaknesses.",
              "The United States should launch an immediate preemptive nuclear strike to destroy Moscow and Beijing.",
              "The United States should withdraw all troops to North America and adopt strict diplomatic isolationism.",
              "The United States should sign a mutual defense pact subordinating the U.S. military to Soviet command."
            ],
            "correctIndex": 0,
            "explanation": "Kennan argued that Soviet leadership was inherently expansionist but opportunistic; applying counter-force at every point where the Soviets attempted to expand would prevent World War III while facilitating the eventual internal decay of Soviet communism.",
            "distractorTip": "Containment guided American foreign policy across both Democratic and Republican administrations for over four decades throughout the Cold War."
          },
          {
            "id": "ush8-l1-q2",
            "stem": "What was the primary geopolitical and humanitarian purpose of the Marshall Plan (European Recovery Program, 1948)?",
            "options": [
              "To finance the forced relocation of European refugees to sub-Saharan Africa.",
              "To pump over $13 billion in economic aid into war-devastated Western Europe to rebuild infrastructure, revive capitalist economies, and prevent impoverished nations from voting for communist parties.",
              "To construct a continuous concrete military wall along the border between France and Germany.",
              "To purchase European industrial factories and relocate their machinery to the United States."
            ],
            "correctIndex": 1,
            "explanation": "Secretary of State George Marshall recognized that severe poverty and chaos in postwar Western Europe created fertile soil for communist electoral victories. Rebuilding Western Europe created vital export markets for U.S. goods and anchored strong democratic allies against the USSR.",
            "distractorTip": "The Soviet Union and its Eastern European satellites (under Stalin's orders) rejected Marshall Plan aid, deepening the 'Iron Curtain' divide."
          },
          {
            "id": "ush8-l1-q3",
            "stem": "What was the core strategic doctrine of \"containment\" formulated by American diplomat George F. Kennan in his 1947 \"Long Telegram\"?",
            "options": [
              "The belief that Soviet communism was inherently expansionist and paranoid, requiring firm, long-term, patient resistance to prevent the spread of Soviet influence to new territories until internal contradictions collapsed the regime.",
              "The proposal to launch an immediate preemptive nuclear strike on Moscow to destroy the Soviet Union.",
              "The recommendation to surrender Western Europe to the Soviet Union in exchange for peace in Asia.",
              "The plan to eliminate all American military bases outside the continental United States."
            ],
            "correctIndex": 0,
            "explanation": "Kennan argued that the Soviet Union was ideologically committed to the destruction of capitalism but would retreat in the face of steady, vigilant counterforce; containment became the foundational premise of US Cold War foreign policy (Truman Doctrine, Marshall Plan, NATO).",
            "distractorTip": "Contrast Kennan's 'containment' (holding the line against communist expansion) with the later Republican 'rollback' rhetoric of the 1950s (which was never actually implemented militarily due to nuclear risks)."
          }
        ]
      },
      {
        "id": 802,
        "unitIndex": 8,
        "levelNumber": 2,
        "uniqueKey": "ush-p8-l2",
        "topicNumber": "Topic 8.3 & 8.4",
        "name": "Second Red Scare & Postwar Suburbia",
        "subtitle": "McCarthyism, the GI Bill, Levittown, and the Interstate Highway Act",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush8-l2-q1",
            "stem": "The sensational political crusade led by Wisconsin Senator Joseph McCarthy during the early 1950s ('McCarthyism') was characterized by:",
            "options": [
              "Campaigning for the immediate repeal of the Bill of Rights through national referendums.",
              "Leading armed federal raids on corporate boardrooms to nationalize oil companies.",
              "Making reckless, unsubstantiated allegations that hundreds of high-ranking State Department and Army officials were covert communist spies, creating an atmosphere of widespread hysteria and conformity.",
              "Demanding that the United States dissolve the CIA and merge foreign policy with Canada."
            ],
            "correctIndex": 2,
            "explanation": "McCarthy capitalized on Cold War terrors (the Soviet atomic bomb, the fall of China to Mao, and the Korean War) to smear political opponents without producing evidence, until his bullying tactics were exposed to millions on live television during the 1954 Army-McCarthy hearings.",
            "distractorTip": "The Senate formally censured McCarthy in December 1954, ending his political reign of terror."
          },
          {
            "id": "ush8-l2-q2",
            "stem": "The Servicemen's Readjustment Act of 1944 (popularly known as the 'GI Bill') transformed postwar American society by:",
            "options": [
              "Abolishing all corporate income taxes for veterans who worked in agriculture.",
              "Mandating that all veterans remain on active military duty for an additional twenty years.",
              "Prohibiting returning soldiers from marrying foreign citizens.",
              "Providing returning military veterans with college tuition funding, low-interest home mortgages, and small business loans, propelling millions into the burgeoning middle class."
            ],
            "correctIndex": 3,
            "explanation": "The GI Bill fueled America's postwar economic boom by dramatically expanding university enrollment, stimulating the construction of mass-produced suburban housing developments (like Levittown), and creating an educated professional workforce.",
            "distractorTip": "However, Black veterans were frequently denied these benefits locally by discriminatory Southern banks and universities, widening the racial wealth gap."
          },
          {
            "id": "ush8-l2-q3",
            "stem": "The Servicemen's Readjustment Act of 1944 (GI Bill of Rights) transformed postwar American society and the economy by:",
            "options": [
              "Forcing all returning World War II veterans to work on federal collective farms.",
              "Providing returning veterans with low-interest home mortgages, college tuition grants, and unemployment stipends, sparking a massive expansion of the American middle class and suburban homeownership.",
              "Banning veterans from purchasing consumer automobiles or suburban tract homes.",
              "Excluding all military personnel from receiving federal Social Security pensions."
            ],
            "correctIndex": 1,
            "explanation": "The GI Bill sent over 2 million veterans to colleges and universities and financed millions of suburban homes (such as Levittown), transforming the economy into a high-skill, homeowning middle-class society, although Black veterans frequently faced systemic discrimination from local banks and universities.",
            "distractorTip": "The GI Bill fueled the postwar economic boom and the rise of the Sun Belt, while suburban housing covenants institutionalized racial segregation."
          }
        ]
      },
      {
        "id": 803,
        "unitIndex": 8,
        "levelNumber": 3,
        "uniqueKey": "ush-p8-l3",
        "topicNumber": "Topic 8.5",
        "name": "Civil Rights Movement: 1950s Breakthroughs",
        "subtitle": "Brown v. Board, the Montgomery Bus Boycott, and Little Rock",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush8-l3-q1",
            "stem": "In the monumental unanimous ruling Brown v. Board of Education of Topeka (1954), Chief Justice Earl Warren declared that:",
            "options": [
              "'Separate educational facilities are inherently unequal,' striking down Plessy v. Ferguson and ordering public school desegregation with 'all deliberate speed.'",
              "Public school segregation was constitutional as long as equal federal funding was provided.",
              "Private Christian academies were legally exempt from the Fourteenth Amendment.",
              "The federal government possessed no constitutional authority to regulate public education."
            ],
            "correctIndex": 0,
            "explanation": "Thurgood Marshall and the NAACP Legal Defense Fund utilized psychological evidence (the Clark doll tests) to prove segregation inflicted permanent psychological damage on Black children, leading the Court to rule state-mandated school segregation violated the 14th Amendment's Equal Protection Clause.",
            "distractorTip": "Deep South politicians responded with fierce 'Massive Resistance' and the 'Southern Manifesto,' closing public schools to evade integration."
          },
          {
            "id": "ush8-l3-q2",
            "stem": "What was the crucial strategic lesson demonstrated by the successful 381-day Montgomery Bus Boycott (1955–1956)?",
            "options": [
              "Violence was the only method capable of changing southern municipal statutes.",
              "Disciplined, nonviolent direct action and coordinated mass economic boycotts, led by figures like Dr. Martin Luther King Jr., could effectively dismantle segregated public systems.",
              "The Supreme Court would automatically overturn state segregation without grassroots mobilization.",
              "Bus transit systems were permanently obsolete and should be replaced by horse carriages."
            ],
            "correctIndex": 1,
            "explanation": "Triggered by Rosa Parks's courageous refusal to surrender her seat, the Black community formed the Montgomery Improvement Association, walking and carpooling until the bus company faced bankruptcy and the Supreme Court ruled segregated buses unconstitutional.",
            "distractorTip": "The victory catapulted 26-year-old Dr. Martin Luther King Jr. to national leadership and led to the founding of the Southern Christian Leadership Conference (SCLC) in 1957."
          },
          {
            "id": "ush8-l3-q3",
            "stem": "In the landmark 1954 decision Brown v. Board of Education of Topeka, the Supreme Court under Chief Justice Earl Warren unanimously held that:",
            "options": [
              "State governments could maintain segregated schools if they proved equal per-pupil spending.",
              "The Fourteenth Amendment did not apply to public education institutions.",
              "\"Separate educational facilities are inherently unequal,\" explicitly overturning Plessy v. Ferguson and declaring state-mandated racial segregation in public schools to be a violation of the Equal Protection Clause.",
              "School busing across county lines was unconstitutional under the Tenth Amendment."
            ],
            "correctIndex": 2,
            "explanation": "Thurgood Marshall and the NAACP Legal Defense Fund argued that psychological evidence proved segregation inflicted lasting harm on Black children; Warren wrote that segregating children based on race generates a feeling of inferiority, striking down the legal foundation of Jim Crow.",
            "distractorTip": "Southern politicians resisted Brown with 'Massive Resistance,' issuing the 1956 Southern Manifesto and using state police to block integration, forcing Eisenhower to dispatch the 101st Airborne to Little Rock Central High School in 1957."
          }
        ]
      },
      {
        "id": 804,
        "unitIndex": 8,
        "levelNumber": 4,
        "uniqueKey": "ush-p8-l4",
        "topicNumber": "Topic 8.6",
        "name": "Cold War in the 1950s & 1960s",
        "subtitle": "Eisenhower's New Look, Sputnik, and the Cuban Missile Crisis",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush8-l4-q1",
            "stem": "How did President Dwight D. Eisenhower's Cold War defense policy ('The New Look') seek to contain communism while balancing the federal budget?",
            "options": [
              "By paying annual cash tributes to the Soviet Politburo to guarantee peace.",
              "By quadrupling the size of the infantry and eliminating all atomic research.",
              "By relying on 'Massive Retaliation' and nuclear deterrence (delivering 'more bang for the buck') while reducing costly standing conventional armies.",
              "By surrendering all American military bases in Western Europe and East Asia."
            ],
            "correctIndex": 2,
            "explanation": "Eisenhower and Secretary of State John Foster Dulles practiced 'brinkmanship,' warning that any Soviet aggression would be met with overwhelming nuclear retaliation, allowing the administration to cut military spending on massive conventional ground forces.",
            "distractorTip": "In his famous 1961 Farewell Address, Eisenhower warned the nation against the 'unwarranted influence... of the military-industrial complex.'"
          },
          {
            "id": "ush8-l4-q2",
            "stem": "How did President John F. Kennedy resolve the terrifying thirteen-day Cuban Missile Crisis in October 1962, bringing the world back from the brink of nuclear war?",
            "options": [
              "By ordering the United Nations to annex Cuba as an international trust territory.",
              "By launching an immediate, full-scale nuclear first strike on Havana and Moscow.",
              "By surrendering the U.S. naval base at Guantanamo Bay to Fidel Castro.",
              "By imposing a naval 'quarantine' (blockade) around Cuba, agreeing not to invade Cuba, and secretly pledging to withdraw American Jupiter missiles from Turkey."
            ],
            "correctIndex": 3,
            "explanation": "Kennedy rejected military advisers who demanded an immediate air strike on Soviet missile sites. Instead, his blockade gave Soviet Premier Nikita Khrushchev diplomatic room to negotiate: the Soviets dismantled their Cuban missiles, and the U.S. pledged not to invade Cuba and removed missiles from Turkey.",
            "distractorTip": "The crisis led directly to the installation of the direct Washington-Moscow 'hotline' and the 1963 Nuclear Test Ban Treaty."
          },
          {
            "id": "ush8-l4-q3",
            "stem": "President Dwight D. Eisenhower's \"New Look\" defense strategy relied primarily on which military concept to deter Soviet aggression while containing federal defense spending?",
            "options": [
              "The rapid expansion of conventional infantry ground divisions across Western Europe.",
              "The total abolition of all nuclear weapons stockpiles through international treaties.",
              "The construction of thousands of surface-to-air missile silos along the Mexican border.",
              "\"Massive Retaliation\"—the threat to respond to any communist aggression with disproportionate nuclear strikes, coupled with expanded covert operations by the Central Intelligence Agency (CIA)."
            ],
            "correctIndex": 3,
            "explanation": "Eisenhower and Secretary of State John Foster Dulles sought 'more bang for the buck,' cutting expensive conventional army forces and relying on nuclear deterrence (Strategic Air Command) and CIA interventions (e.g., Iran 1953, Guatemala 1954) to combat communism.",
            "distractorTip": "In his 1961 Farewell Address, Eisenhower warned the nation against the unprecedented influence of the 'military-industrial complex.'"
          }
        ]
      },
      {
        "id": 805,
        "unitIndex": 8,
        "levelNumber": 5,
        "uniqueKey": "ush-p8-l5",
        "topicNumber": "Topic 8.7",
        "name": "The Vietnam War & Escalation",
        "subtitle": "Gulf of Tonkin, the Tet Offensive, and the anti-war movement",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush8-l5-q1",
            "stem": "The Gulf of Tonkin Resolution, passed overwhelmingly by Congress in August 1964 following alleged North Vietnamese torpedo attacks on American destroyers, empowered President Lyndon B. Johnson to:",
            "options": [
              "Take 'all necessary measures to repel any armed attack against the forces of the United States,' serving as a blank check to vastly escalate the ground war without a formal declaration of war.",
              "Immediately withdraw all American military advisers from South Vietnam.",
              "Formally declare war on the Soviet Union and the People's Republic of China.",
              "Annex North Vietnam as an unincorporated territory of the United States."
            ],
            "correctIndex": 0,
            "explanation": "Johnson utilized the resolution to launch Operation Rolling Thunder (sustained aerial bombing) and deploy over 500,000 American combat troops by 1968, dramatically expanding presidential war powers without congressional oversight.",
            "distractorTip": "In 1973, in reaction to the imperial presidency during Vietnam, Congress passed the War Powers Act over Nixon's veto to curb presidential military deployments."
          },
          {
            "id": "ush8-l5-q2",
            "stem": "Why was the January 1968 Tet Offensive by the Viet Cong and North Vietnamese Army a catastrophic psychological turning point for the American war effort?",
            "options": [
              "It resulted in the immediate capture and permanent occupation of Washington, D.C., by North Vietnamese forces.",
              "Although a tactical military defeat for the communists, it completely shattered the Johnson administration's claims that the enemy was weakening and that 'the end was in sight,' widening the credibility gap.",
              "It forced the United States to surrender all naval fleets in the Pacific Ocean.",
              "It persuaded President Johnson to run for a second full term in the 1968 election."
            ],
            "correctIndex": 1,
            "explanation": "Simultaneous surprise attacks across over 100 South Vietnamese cities and the U.S. Embassy in Saigon shocked Americans watching TV news. CBS anchor Walter Cronkite declared the war unwinnable, prompting LBJ to declare he would not seek reelection in March 1968.",
            "distractorTip": "The Tet Offensive fueled massive domestic anti-war protests and splintered the Democratic Party ahead of the violent 1968 Chicago convention."
          },
          {
            "id": "ush8-l5-q3",
            "stem": "What was the profound domestic political consequence of the 1968 Tet Offensive launched by the Viet Cong and North Vietnamese Army?",
            "options": [
              "Although militarily a defeat for communist forces, it shattered the Johnson administration's claims that victory was near, creating a massive \"credibility gap\" and turning mainstream American public opinion against the war.",
              "It resulted in the immediate military capture of Washington, D.C. by North Vietnamese troops.",
              "It led Congress to unanimously pass a declaration of war against the Soviet Union.",
              "It persuaded Lyndon B. Johnson to run for a second full term as president."
            ],
            "correctIndex": 0,
            "explanation": "Tet exposed the contrast between official optimistic Pentagon briefings and the brutal reality shown on television (CBS anchor Walter Cronkite declared the war unwinnable); LBJ's approval ratings plunged, leading him to announce he would not seek reelection in 1968.",
            "distractorTip": "Tet was the psychological turning point of the Vietnam War on the American homefront."
          }
        ]
      },
      {
        "id": 806,
        "unitIndex": 8,
        "levelNumber": 6,
        "uniqueKey": "ush-p8-l6",
        "topicNumber": "Topic 8.8",
        "name": "LBJ's Great Society & Civil Rights Milestones",
        "subtitle": "Civil Rights Act 1964, Voting Rights Act 1965, and the War on Poverty",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush8-l6-q1",
            "stem": "President Lyndon B. Johnson's landmark Civil Rights Act of 1964 accomplished which monumental legislative breakthroughs?",
            "options": [
              "It mandated that all municipal police forces be disbanded and replaced by federal marshals.",
              "It abolished the federal minimum wage and eliminated food stamp programs.",
              "It outlawed racial segregation in all public accommodations (restaurants, hotels, theaters) and prohibited employment discrimination based on race, color, religion, sex, or national origin (Title VII).",
              "It established a mandatory racial quota system for all private home purchases."
            ],
            "correctIndex": 2,
            "explanation": "Enacted after the 1963 March on Washington and a 54-day southern filibuster, the Civil Rights Act used the interstate commerce clause to crush Jim Crow segregation in public life and created the Equal Employment Opportunity Commission (EEOC).",
            "distractorTip": "Johnson famously remarked upon signing: 'I think we may have delivered the South to the Republican Party for your lifetime and mine.'"
          },
          {
            "id": "ush8-l6-q2",
            "stem": "How did the Voting Rights Act of 1965, signed following the televised police violence against peaceful marchers in Selma, Alabama, transform southern politics?",
            "options": [
              "It granted voting rights exclusively to citizens who owned real estate.",
              "It lowered the national voting age to sixteen years old.",
              "It required that all southern elections be held exclusively in the English and Spanish languages.",
              "It banned discriminatory literacy tests and authorized federal examiners to directly register Black voters, leading to a dramatic surge in Black political participation and elected officials."
            ],
            "correctIndex": 3,
            "explanation": "The act dismantled the legal machinery of Jim Crow disenfranchisement: within four years of passage, Black voter registration in Mississippi skyrocketed from 7% to over 67%, fundamentally reshaping American democratic representation.",
            "distractorTip": "The 24th Amendment (ratified 1964) similarly eliminated poll taxes in federal elections, removing another major barrier to voting."
          },
          {
            "id": "ush8-l6-q3",
            "stem": "The Voting Rights Act of 1965 dismantled decades of Jim Crow voter disenfranchisement primarily by:",
            "options": [
              "Lowering the federal voting age from twenty-one to sixteen for all citizens.",
              "Outlawing literacy tests and providing for federal registrars and preclearance oversight for jurisdictions with a history of discriminatory voting practices.",
              "Requiring all citizens to pass an oral constitutional examination before voting.",
              "Banning the use of paper ballots in all state and federal elections."
            ],
            "correctIndex": 1,
            "explanation": "Signed by Lyndon B. Johnson following the Selma to Montgomery marches, the Voting Rights Act gave the federal government the power to enforce the 15th Amendment directly, dramatically increasing African American voter registration and election of Black officials across the South.",
            "distractorTip": "The combination of the Civil Rights Act of 1964 (banning public segregation and workplace discrimination) and Voting Rights Act of 1965 dismantled the legal architecture of southern white supremacy."
          }
        ]
      },
      {
        "id": 807,
        "unitIndex": 8,
        "levelNumber": 7,
        "uniqueKey": "ush-p8-l7",
        "topicNumber": "Topic 8.9",
        "name": "Civil Rights Expansion & Radicalization",
        "subtitle": "Malcolm X, Black Power, Cesar Chavez, AIM, and Stonewall",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush8-l7-q1",
            "stem": "How did the 'Black Power' movement (articulated by Stokely Carmichael and the Black Panther Party in the late 1960s) differ from Dr. Martin Luther King Jr.'s philosophy?",
            "options": [
              "It moved away from nonviolent integration and assimilation, advocating racial pride, economic self-determination, armed self-defense, and community-controlled institutions.",
              "It demanded that all African Americans join the United States Armed Forces to fight in Vietnam.",
              "It advocated the immediate restoration of the Republican Party's Reconstruction policies.",
              "It urged African Americans to reject political voting entirely and embrace European monarchies."
            ],
            "correctIndex": 0,
            "explanation": "Frustrated by persistent urban poverty, police brutality, and slow progress, Black Power leaders rejected nonviolence when attacked, championing African heritage, Black-owned businesses, and revolutionary community programs (such as the Panthers' Free Breakfast for Children).",
            "distractorTip": "Dr. King praised their focus on racial dignity and community programs, but warned that violence and separatist rhetoric would alienate crucial allies."
          },
          {
            "id": "ush8-l7-q2",
            "stem": "Cesar Chavez and Dolores Huerta organized Mexican American agricultural laborers into the United Farm Workers (UFW) by utilizing which highly effective tactic?",
            "options": [
              "Armed military occupations of federal agricultural departments in Washington, D.C.",
              "A nationwide consumer boycott of California table grapes, combined with nonviolent marches, hunger strikes, and union pickets.",
              "Negotiating secret wage agreements with multinational agricultural corporations.",
              "Calling for the complete secession of the southwestern states back to Mexico."
            ],
            "correctIndex": 1,
            "explanation": "Drawing on the nonviolent methods of Gandhi and Dr. King, Chavez and Huerta mobilized millions of American consumers to stop buying California grapes, forcing powerful agribusiness growers to sign unprecedented collective bargaining contracts in 1970.",
            "distractorTip": "The UFW movement energized the broader 'Chicano Movement' (El Movimiento), demanding bilingual education, voting rights, and Mexican American civil pride."
          },
          {
            "id": "ush8-l7-q3",
            "stem": "How did the Black Power movement, articulated in the late 1960s by figures like Stokely Carmichael and the Black Panther Party, diverge from the early Civil Rights Movement led by Martin Luther King Jr.?",
            "options": [
              "By advocating for immediate political alliance with southern conservative white segregationists.",
              "By demanding that the United States surrender all federal authority to the United Nations.",
              "By moving beyond passive nonviolent integration toward racial pride, self-determination, community control of institutions, economic empowerment, and armed self-defense against police brutality.",
              "By rejecting all forms of community health clinics and free breakfast programs."
            ],
            "correctIndex": 2,
            "explanation": "Frustrated by persistent poverty, urban ghettoization, and white backlash despite legislative victories, Black Power advocates emphasized cultural pride ('Black is Beautiful'), economic independence, and armed self-defense, parting ways with King's nonviolent integrationism.",
            "distractorTip": "Do not overlook the Black Panthers' community survival programs (free breakfast for school children, sickle-cell anemia testing), which existed alongside their militant rhetoric."
          }
        ]
      },
      {
        "id": 808,
        "unitIndex": 8,
        "levelNumber": 8,
        "uniqueKey": "ush-p8-l8",
        "topicNumber": "Topic 8.9 & 8.10",
        "name": "Feminism & Modern Environmentalism",
        "subtitle": "The Feminine Mystique, NOW, Title IX, and Rachel Carson's Silent Spring",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush8-l8-q1",
            "stem": "Betty Friedan's groundbreaking 1963 book, 'The Feminine Mystique', galvanized the modern second-wave feminist movement by exposing:",
            "options": [
              "The widespread corruption of public university admissions boards.",
              "The illegal manufacture of military weapons in New England textile mills.",
              "'The problem that has no name': the pervasive dissatisfaction and stifling boredom experienced by educated middle-class suburban housewives confined to domestic roles.",
              "The biological impossibility of women working in heavy industrial manufacturing."
            ],
            "correctIndex": 2,
            "explanation": "Friedan dismantled the post-WWII myth that women found total fulfillment solely through marriage and homemaking, co-founding the National Organization for Women (NOW) in 1966 to fight for workplace equality, reproductive rights, and the Equal Rights Amendment (ERA).",
            "distractorTip": "Phyllis Schlafly's conservative 'STOP ERA' campaign successfully stalled the Equal Rights Amendment in the 1970s, claiming it would destroy traditional family structures."
          },
          {
            "id": "ush8-l8-q2",
            "stem": "Rachel Carson's 1962 bestseller 'Silent Spring' is universally credited with catalyzing the modern environmental movement because it:",
            "options": [
              "Called for the abolition of all federal national parks and wildlife sanctuaries.",
              "Advocated the immediate deforestation of the Appalachian mountain ranges to extract coal.",
              "Demonstrated that global warming was caused exclusively by solar flare fluctuations.",
              "Documented the catastrophic ecological devastation caused by synthetic chemical pesticides (especially DDT) on bird populations, wildlife, and human health."
            ],
            "correctIndex": 3,
            "explanation": "Carson exposed how toxic pesticides bioaccumulated in food chains, poisoning rivers and thinning bald eagle eggshells. Her work forced a nationwide ban on DDT and led directly to the first Earth Day in April 1970, the Clean Air and Water Acts, and the creation of the Environmental Protection Agency (EPA).",
            "distractorTip": "President Richard Nixon signed the bill creating the EPA in 1970, proving that environmental protection was initially a bipartisan priority."
          },
          {
            "id": "ush8-l8-q3",
            "stem": "The publication of Rachel Carson's Silent Spring in 1962 is widely credited with launching the modern environmental movement because it:",
            "options": [
              "Urged the federal government to construct hundreds of offshore nuclear reactors.",
              "Denounced all renewable solar and wind energy research as economically unviable.",
              "Advocated for the immediate clear-cutting of all old-growth Pacific Northwest forests.",
              "Exposed the catastrophic ecological and health hazards of synthetic chemical pesticides like DDT, mobilizing public awareness and leading to the creation of the Environmental Protection Agency (EPA)."
            ],
            "correctIndex": 3,
            "explanation": "Carson documented how DDT bioaccumulated up the food chain, poisoning birds and contaminating human food supplies; despite furious pushback from the chemical industry, her book catalyzed the 1970 Earth Day, the ban on DDT, and the Clean Air and Clean Water Acts under President Nixon.",
            "distractorTip": "Silent Spring is the quintessential text of modern environmentalism, showing that human industrial technology can disrupt delicate global ecological balances."
          }
        ]
      },
      {
        "id": 809,
        "unitIndex": 8,
        "levelNumber": 9,
        "uniqueKey": "ush-p8-l9",
        "topicNumber": "Topic 8.10",
        "name": "1960s Youth Counterculture & Protests",
        "subtitle": "Students for a Democratic Society, Berkeley, and Woodstock",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush8-l9-q1",
            "stem": "The New Left youth organization Students for a Democratic Society (SDS), founded in 1962, outlined their political vision in the Port Huron Statement, demanding:",
            "options": [
              "'Participatory democracy': empowering common citizens and university students to wrest decision-making power away from corrupt corporate and military bureaucracies.",
              "The immediate return of the United States to nineteenth-century laissez-faire capitalism.",
              "The establishment of a permanent military dictatorship to enforce civil rights legislation.",
              "The mandatory closure of all colleges and universities across the nation."
            ],
            "correctIndex": 0,
            "explanation": "Written primarily by Tom Hayden, the manifesto criticized consumer materialism, racial injustice, and Cold War militarism, inspiring student sit-ins (such as the 1964 Berkeley Free Speech Movement) and mass nationwide campus demonstrations against the Vietnam War draft.",
            "distractorTip": "Tragically, in May 1970, Ohio National Guardsmen shot and killed four unarmed student protestors at Kent State University following Nixon's secret invasion of Cambodia."
          },
          {
            "id": "ush8-l9-q2",
            "stem": "The 1960s 'Counterculture' (hippies), exemplified by the massive August 1969 Woodstock Music and Art Fair, was characterized by:",
            "options": [
              "Strict adherence to traditional Puritan dress codes and evangelical Calvinism.",
              "A rejection of mainstream middle-class suburban materialism, conventional social mores, and militarism, in favor of rock music, psychedelic drugs, sexual freedom, and communal living.",
              "Unconditional support for corporate industrial conglomerates and Wall Street speculation.",
              "Demanding the immediate military conquest of North Vietnam and Cuba."
            ],
            "correctIndex": 1,
            "explanation": "Over 400,000 young people gathered peacefully in Bethel, New York, celebrating peace, rock music, and countercultural solidarity, demonstrating the power of youth culture while provoking a deep conservative backlash among older Americans.",
            "distractorTip": "Richard Nixon capitalized on white middle-class backlash against counterculture rebellion and urban riots, winning the 1968 election by appealing to the 'Silent Majority.'"
          },
          {
            "id": "ush8-l9-q3",
            "stem": "In the 1962 Port Huron Statement, the founding document of Students for a Democratic Society (SDS), the New Left expressed its vision for American democracy by demanding:",
            "options": [
              "\"Participatory democracy\"—the active involvement of individual citizens in the major social, economic, and political decisions that govern their lives, rather than passive submission to corporate and bureaucratic elites.",
              "The complete restoration of classical nineteenth-century laissez-faire capitalism.",
              "The immediate nuclear destruction of the Soviet Union and China.",
              "The prohibition of all rock music, peace marches, and college campus political debates."
            ],
            "correctIndex": 0,
            "explanation": "Drafted primarily by Tom Hayden, the Port Huron Statement critiqued the complacency, militarism, and racial bigotry of postwar America, rejecting both Soviet communism and corporate capitalism in favor of grass-roots participatory democracy.",
            "distractorTip": "The New Left of the 1960s focused on civil rights, the anti-war movement, and institutional democratization, distinct from the traditional Old Left's singular focus on working-class unionism."
          }
        ]
      },
      {
        "id": 810,
        "unitIndex": 8,
        "levelNumber": 10,
        "uniqueKey": "ush-p8-l10",
        "topicNumber": "Topic 8.11",
        "name": "Nixon, Détente, Watergate & 1970s Stagflation",
        "subtitle": "Opening to China, SALT I, the Watergate scandal, and the energy crisis",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush8-l10-q1",
            "stem": "What was the brilliant geopolitical objective behind President Richard Nixon and National Security Adviser Henry Kissinger's policy of 'Détente' in 1972?",
            "options": [
              "To establish an official military alliance between the United States and the Warsaw Pact.",
              "To completely surrender South Vietnam and South Korea to Soviet military forces.",
              "To ease Cold War tensions by visiting communist China, exploiting the Sino-Soviet split, and leveraging that relationship to pressure the USSR into the SALT I nuclear arms treaty.",
              "To terminate all American diplomatic relations with European NATO allies."
            ],
            "correctIndex": 2,
            "explanation": "By playing communist rivals China and the Soviet Union against each other ('triangular diplomacy'), Nixon normalized relations with Mao Zedong in Beijing and traveled to Moscow to sign the Strategic Arms Limitation Talks (SALT I) treaty, cooling Cold War tensions.",
            "distractorTip": "Nixon was the first U.S. president to visit the People's Republic of China, an ironic feat made possible by his unshakeable anti-communist credentials ('Only Nixon could go to China')."
          },
          {
            "id": "ush8-l10-q2",
            "stem": "Why was President Richard Nixon forced to resign the presidency on August 9, 1974, becoming the only president in American history to resign?",
            "options": [
              "The Supreme Court declared the entire presidency unconstitutional under the 10th Amendment.",
              "He was convicted of accepting millions in personal bribes from the Chinese government.",
              "He was formally court-martialed by the Joint Chiefs of Staff for military treason.",
              "Subpoenaed White House tape recordings proved he participated directly in the criminal conspiracy to obstruct justice and cover up the 1972 break-in at Democratic headquarters in the Watergate complex."
            ],
            "correctIndex": 3,
            "explanation": "In United States v. Nixon (1974), a unanimous Supreme Court ruled that executive privilege did not shield criminal conversations. When the 'Smoking Gun' tape revealed Nixon ordered the CIA to block the FBI's Watergate investigation, impeachment and conviction were guaranteed, forcing his resignation.",
            "distractorTip": "Watergate, combined with the Pentagon Papers and Vietnam, severely eroded public trust in the presidency and the federal government."
          },
          {
            "id": "ush8-l10-q3",
            "stem": "The foreign policy breakthrough engineered by President Richard Nixon and National Security Advisor Henry Kissinger in 1972 known as \"détente\" was characterized by:",
            "options": [
              "The unconditional withdrawal of the United States from all international treaties and alliances.",
              "A deliberate easing of Cold War tensions through diplomatic engagement, evidenced by Nixon's historic visit to Beijing and the signing of the Strategic Arms Limitation Treaty (SALT I) with the Soviet Union.",
              "The launch of a full-scale ground invasion of North Vietnam.",
              "The establishment of a unified world currency with China and the Soviet Union."
            ],
            "correctIndex": 1,
            "explanation": "Nixon and Kissinger exploited the Sino-Soviet split through 'triangular diplomacy': by opening diplomatic relations with Mao's China, they pressured Soviet leader Leonid Brezhnev into détente, culminating in the historic 1972 Moscow summit and the first strategic nuclear arms limits.",
            "distractorTip": "Realpolitik—basing foreign policy on pragmatic national self-interest rather than rigid moral or ideological dogmas—defined Nixon's approach to China and the USSR."
          }
        ]
      },
      {
        "id": 811,
        "unitIndex": 8,
        "levelNumber": 11,
        "uniqueKey": "ush-p8-l11",
        "topicNumber": "Period 8 Boss Level",
        "name": "Period 8 Capstone & Synthesis",
        "subtitle": "Mastery of postwar liberalism, global conflicts, and the 1970s crisis",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "ush8-l11-q1",
            "stem": "The unprecedented economic crisis of 'Stagflation' that paralyzed the American economy during the 1970s was uniquely difficult to manage because it combined:",
            "options": [
              "Stagnant economic growth and high unemployment alongside soaring, double-digit consumer price inflation (exacerbated by OPEC oil embargoes).",
              "Rapidly falling prices (deflation) combined with a severe shortage of agricultural food supplies.",
              "Massive federal budget surpluses that paralyzed corporate banking investment.",
              "A complete collapse of all foreign international trade caused by the reintroduction of the gold standard."
            ],
            "correctIndex": 0,
            "explanation": "Traditional Keynesian economics held that unemployment and inflation could not rise simultaneously. However, costly Vietnam spending, Great Society programs, and the 1973 OPEC oil shock (quadrupling petroleum prices) produced stagflation, confounding both the Ford and Carter administrations.",
            "distractorTip": "Stagflation shattered postwar confidence and fueled the conservative resurgence that swept Ronald Reagan into the White House in 1980."
          },
          {
            "id": "ush8-l11-q2",
            "stem": "Which of the following historical conclusions is most directly supported by the trajectory of American politics between 1960 and 1980?",
            "options": [
              "The United States abandoned all capitalist enterprise and became a permanently unified socialist republic.",
              "The peak of postwar liberal expansionism in the 1960s (the Great Society and Civil Rights Act) provoked a formidable conservative political backlash that culminated in the Reagan Revolution.",
              "The Supreme Court ceased to play any meaningful role in interpreting constitutional civil liberties.",
              "The American public developed an unshakeable, universal trust in the integrity of federal institutions."
            ],
            "correctIndex": 1,
            "explanation": "The social transformations of the 1960s (civil rights, anti-war protests, counterculture, women's liberation, and Roe v. Wade) alienated working-class whites, evangelical Christians, and suburbanites, who united behind Ronald Reagan's conservative banner in 1980.",
            "distractorTip": "The conservative coalition brought together corporate advocates of deregulation, anti-communist defense hawks, and social conservatives of the Christian Right."
          },
          {
            "id": "ush8-l11-q3",
            "stem": "The economic phenomenon of \"stagflation\" that plagued the American economy throughout the 1970s confounded traditional Keynesian economists because:",
            "options": [
              "Wages and corporate profits were rising simultaneously at historic record levels.",
              "The stock market surged while unemployment fell to zero percent nationwide.",
              "It combined stagnant economic growth and high unemployment with severe, persistent price inflation, exacerbated by the 1973 OPEC oil embargo.",
              "The federal government ran massive annual budget surpluses for ten consecutive years."
            ],
            "correctIndex": 2,
            "explanation": "Keynesian models assumed inflation and unemployment were inversely related (Phillips curve); in the 1970s, soaring energy prices triggered by the 1973 and 1979 OPEC oil shocks caused supply-side inflation while manufacturing plants laid off workers, creating painful stagflation that undermined public faith in New Deal-style government intervention.",
            "distractorTip": "The economic malaise of the 1970s set the stage for the conservative resurgence and Ronald Reagan's supply-side economic revolution in 1980."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 9,
    "unitId": "p9",
    "title": "Period 9: 1980–Present",
    "shortTitle": "Period 9: Modern America",
    "description": "The Reagan Revolution, the end of the Cold War, the digital revolution, globalization, the War on Terror, and 21st-century challenges",
    "examWeight": "4–6% of AP Exam",
    "biome": {
      "name": "Silicon Corridor & Globalized Horizon",
      "icon": "🌐",
      "accentColor": "#10B981",
      "secondaryColor": "#059669",
      "groundGradient": "from-emerald-100 via-teal-50 to-cyan-100",
      "cardBorder": "border-emerald-500",
      "trailColor": "#10b981",
      "nodeRing": "ring-emerald-400/40",
      "skyTint": "from-emerald-50 to-cyan-50/30"
    },
    "levels": [
      {
        "id": 901,
        "unitIndex": 9,
        "levelNumber": 1,
        "uniqueKey": "ush-p9-l1",
        "topicNumber": "Topic 9.1 & 9.2",
        "name": "The Reagan Revolution & Conservative Resurgence",
        "subtitle": "Supply-side economics, deregulation, and the Moral Majority",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ush9-l1-q1",
            "stem": "President Ronald Reagan's conservative economic agenda ('Reaganomics' or supply-side economics) was grounded in which central fiscal policy?",
            "options": [
              "Completely nationalizing all commercial aerospace and petroleum energy companies.",
              "Tripling corporate tax rates to fund a universal federal jobs guarantee for all citizens.",
              "Slashing marginal federal income taxes on corporations and high earners, rolling back federal regulations, and curbing domestic social spending to stimulate private investment and economic growth.",
              "Abolishing the United States Department of Defense to achieve a balanced budget."
            ],
            "correctIndex": 2,
            "explanation": "Supply-side economists argued that excessive taxes stifled investment. Under the Economic Recovery Tax Act of 1981, Reagan cut top marginal tax rates from 70% to 50% (and later 28%), while simultaneously unleashing a massive military spending buildup to defeat Soviet communism.",
            "distractorTip": "While inflation and unemployment dropped, Reagan's massive defense spending combined with tax cuts tripled the federal national debt from $900 billion to nearly $3 trillion."
          },
          {
            "id": "ush9-l1-q2",
            "stem": "The resurgence of conservative political power in the late 1970s and 1980s was heavily galvanized by the 'Religious Right' (such as Jerry Falwell's Moral Majority), which campaigned against:",
            "options": [
              "The appointment of conservative federal judges to the United States Supreme Court.",
              "Federal military defense spending and the construction of nuclear weapons.",
              "Free-market corporate capitalism and international overseas trade pacts.",
              "Abortion rights (Roe v. Wade), the Equal Rights Amendment (ERA), court-ordered school prayer bans, and perceived secular moral decay."
            ],
            "correctIndex": 3,
            "explanation": "Evangelical Christians mobilized as a potent voting bloc within the Republican Party, defending 'traditional family values' against what they perceived as secular liberal permissiveness birthed during the 1960s cultural revolution.",
            "distractorTip": "The Religious Right was crucial in securing Reagan's landslide victories in 1980 and 1984."
          },
          {
            "id": "ush9-l1-q3",
            "stem": "President Ronald Reagan's economic program, commonly known as \"Reaganomics\" or supply-side economics, was based on the premise that:",
            "options": [
              "Heavily increasing corporate tax rates would stimulate federal social welfare spending.",
              "The federal government should nationalize oil refineries and regulate consumer prices.",
              "Eliminating the defense budget would eliminate the national deficit immediately.",
              "Cutting federal income and capital gains taxes, reducing business regulations, and curbing non-defense domestic spending would incentivize private investment, increase productivity, and stimulate overall economic growth."
            ],
            "correctIndex": 3,
            "explanation": "Reagan enacted the Economic Recovery Tax Act of 1981, cutting top tax rates; supply-siders argued that lower taxes would encourage work and investment, expanding the tax base (Laffer Curve), though coupled with massive defense spending (Strategic Defense Initiative), it tripled the national debt.",
            "distractorTip": "Reagan's coalition united free-market fiscal conservatives, social conservatives (the Moral Majority / Religious Right), and Cold War anti-communist hawks."
          }
        ]
      },
      {
        "id": 902,
        "unitIndex": 9,
        "levelNumber": 2,
        "uniqueKey": "ush-p9-l2",
        "topicNumber": "Topic 9.3",
        "name": "The End of the Cold War & Geopolitics",
        "subtitle": "Reagan, Gorbachev, the fall of the Berlin Wall, and the Gulf War",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush9-l2-q1",
            "stem": "How did Soviet leader Mikhail Gorbachev's dual reform policies of 'Glasnost' (openness) and 'Perestroika' (economic restructuring) contribute to the end of the Cold War?",
            "options": [
              "They loosened state censorship, introduced limited market mechanisms, and reduced military commitments, inadvertently unleashing long-suppressed democratic movements that toppled Soviet satellites and dissolved the USSR.",
              "They restored strict Stalinist totalitarianism and launched an invasion of Western Europe.",
              "They led to the immediate military conquest of the United States by Soviet tank divisions.",
              "They forced the United States to abandon all international democratic alliances."
            ],
            "correctIndex": 0,
            "explanation": "Recognizing that the bankrupt Soviet economy could not keep pace with Reagan's military buildup (including the Strategic Defense Initiative 'Star Wars'), Gorbachev introduced reforms and signed the 1987 INF Treaty banning intermediate-range nuclear missiles. However, the reforms triggered a wave of popular revolutions: the Berlin Wall fell in November 1989, and the USSR dissolved on Christmas Day 1991.",
            "distractorTip": "President George H.W. Bush skillfully managed the peaceful collapse of the Soviet empire without military conflict."
          },
          {
            "id": "ush9-l2-q2",
            "stem": "In the 1991 Persian Gulf War (Operation Desert Storm), the United States and a 34-nation international coalition intervened decisively in the Middle East to:",
            "options": [
              "Colonize Iraq and overthrow its government to establish an American territorial protectorate.",
              "Expel Iraqi dictator Saddam Hussein's invading military forces from Kuwait and protect vital international Persian Gulf petroleum reserves.",
              "Capture the Suez Canal and transfer ownership to the United Nations.",
              "Force Saudi Arabia to abandon all petroleum exports to Western European nations."
            ],
            "correctIndex": 1,
            "explanation": "When Iraq invaded oil-rich Kuwait in August 1990, President George H.W. Bush assembled a broad UN coalition. After six weeks of aerial bombardment and a lightning 100-hour ground offensive, coalition forces liberated Kuwait with minimal casualties, demonstrating overwhelming American technological military dominance in the post-Cold War world.",
            "distractorTip": "Bush made the deliberate strategic decision NOT to push to Baghdad to overthrow Saddam Hussein, arguing it would fracture the international coalition and destabilize the region."
          },
          {
            "id": "ush9-l2-q3",
            "stem": "What was the primary objective of the United States-led coalition in the 1991 Persian Gulf War (Operation Desert Storm) under President George H.W. Bush?",
            "options": [
              "To liberate Kuwait following its unprovoked invasion and annexation by Iraqi dictator Saddam Hussein, thereby securing Persian Gulf oil supplies and upholding international law under a UN mandate.",
              "To conquer and occupy Baghdad to overthrow Saddam Hussein's Ba'athist government.",
              "To establish a permanent American colonial protectorate across the Arabian Peninsula.",
              "To force the Soviet Union to withdraw nuclear weapons from the Middle East."
            ],
            "correctIndex": 0,
            "explanation": "Operation Desert Storm mobilized a 35-nation coalition with UN authorization; after a devastating six-week aerial bombardment and a 100-hour ground offensive, coalition forces ejected Iraqi troops from Kuwait, deliberately choosing not to march on Baghdad to preserve coalition unity.",
            "distractorTip": "George H.W. Bush proclaimed a 'New World Order' of international law and multilateral diplomacy, contrasting with the unilateral 2003 invasion of Iraq under his son."
          }
        ]
      },
      {
        "id": 903,
        "unitIndex": 9,
        "levelNumber": 3,
        "uniqueKey": "ush-p9-l3",
        "topicNumber": "Topic 9.4",
        "name": "Technology, Globalization & NAFTA",
        "subtitle": "The digital revolution, Silicon Valley, and free trade debates",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ush9-l3-q1",
            "stem": "The explosive rise of the personal computer, the Internet, and digital telecommunications in the 1990s transformed the American economy primarily by:",
            "options": [
              "Restoring smallholder agriculture as the predominant employer of the American workforce.",
              "Completely eradicating all service-sector jobs across the United States.",
              "Accelerating productivity, birthing Silicon Valley tech giants, and speeding the national transition from heavy industrial manufacturing to a knowledge- and service-based globalized economy.",
              "Causing the immediate bankruptcies of all national telecommunications corporations."
            ],
            "correctIndex": 2,
            "explanation": "The digital revolution fueled the 1990s economic boom under President Bill Clinton. Productivity soared, the 'dot-com' era minted immense tech wealth, and information technology integrated American businesses directly into round-the-clock global financial markets.",
            "distractorTip": "However, this transition accelerated the de-industrialization of the 'Rust Belt' as heavy manufacturing jobs moved overseas or were automated."
          },
          {
            "id": "ush9-l3-q2",
            "stem": "The North American Free Trade Agreement (NAFTA), signed into law by President Bill Clinton in 1993, sparked fierce domestic debate because it:",
            "options": [
              "Banned all American corporations from operating foreign subsidiary branches in North America.",
              "Imposed a 100% protective tariff on all imported Canadian timber and Mexican agricultural produce.",
              "Mandated that all three nations adopt a single, uniform continental currency controlled by Mexico City.",
              "Eliminated trade tariffs between the United States, Canada, and Mexico, which supporters argued boosted trade and lowered consumer prices, while critics argued it outsourced American manufacturing jobs to low-wage Mexican factories."
            ],
            "correctIndex": 3,
            "explanation": "NAFTA created the world's largest free-trade zone. While continental trade tripled, American labor unions and populist politicians fiercely opposed it, arguing it hollowed out blue-collar American manufacturing communities.",
            "distractorTip": "Third-party presidential candidate Ross Perot famously warned in 1992 of a 'giant sucking sound' of American jobs fleeing to Mexico if NAFTA passed."
          },
          {
            "id": "ush9-l3-q3",
            "stem": "The ratification of the North American Free Trade Agreement (NAFTA) in 1993, supported by President Bill Clinton, was intended to:",
            "options": [
              "Impose high protective tariffs on all automobiles manufactured in Mexico and Canada.",
              "Eliminate trade barriers, tariffs, and investment restrictions among the United States, Canada, and Mexico, creating a vast trilateral North American free-trade market.",
              "Create a unified single North American currency managed by the Federal Reserve.",
              "Prohibit American multinational corporations from operating factories overseas."
            ],
            "correctIndex": 1,
            "explanation": "NAFTA accelerated economic globalization by removing trade tariffs between the three nations; while supporters cited lower consumer prices and increased trade volume, labor union critics argued it accelerated the 'deindustrialization' of the Rust Belt by encouraging companies to relocate manufacturing jobs to lower-wage Mexican maquiladoras.",
            "distractorTip": "Clinton pursued a 'Third Way' or 'New Democrat' platform, embracing free-trade globalization and welfare reform while defending social spending on education and technology."
          }
        ]
      },
      {
        "id": 904,
        "unitIndex": 9,
        "levelNumber": 4,
        "uniqueKey": "ush-p9-l4",
        "topicNumber": "Topic 9.5",
        "name": "Demographic Shifts & 21st-Century Society",
        "subtitle": "Immigration surges, the Sun Belt, and changing social debates",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush9-l4-q1",
            "stem": "The profound demographic shifts that transformed the United States in the late twentieth and early twenty-first centuries were driven primarily by:",
            "options": [
              "Surging immigration from Latin America (especially Mexico) and Asia following the landmark Immigration and Nationality Act of 1965, alongside an internal population shift to the 'Sun Belt.'",
              "Massive migration of European aristocrats fleeing the European Union.",
              "The wholesale depopulation of all southern and western metropolitan areas.",
              "A total federal ban on all legal immigration lasting from 1980 to 2010."
            ],
            "correctIndex": 0,
            "explanation": "The 1965 act abolished discriminatory national origins quotas, leading to millions of arriving immigrants from Latin America and Asia. Simultaneously, air conditioning, lower taxes, and defense jobs fueled massive population migration from the cold Rust Belt to the warm Sun Belt (Florida, Texas, California, Arizona), shifting electoral political power southward.",
            "distractorTip": "By the early 2000s, Latinos surpassed African Americans as the nation's largest racial/ethnic minority group."
          },
          {
            "id": "ush9-l4-q2",
            "stem": "The Americans with Disabilities Act of 1990 (ADA), signed by President George H.W. Bush, marked a major civil rights milestone by:",
            "options": [
              "Requiring that all disabled citizens be institutionalized in federal healthcare facilities.",
              "Prohibiting discrimination against individuals with physical or mental disabilities in employment, public accommodations, and transportation, and mandating reasonable accommodations (like wheelchair ramps and braille signs).",
              "Mandating that disabled individuals pay an additional federal excise tax for specialized transportation.",
              "Restricting voting rights exclusively to citizens with no diagnosed physical medical conditions."
            ],
            "correctIndex": 1,
            "explanation": "Modeled directly on the Civil Rights Act of 1964, the ADA transformed American physical infrastructure and workplaces, guaranteeing over 40 million Americans with disabilities equal access to public life and legal protection against employment discrimination.",
            "distractorTip": "The ADA passed with overwhelming bipartisan support, reflecting the expansion of civil rights protections beyond race and gender to include disability."
          },
          {
            "id": "ush9-l4-q3",
            "stem": "How did the Immigration and Nationality Act of 1965 (Hart-Celler Act) reshape American demographic patterns in the late twentieth and early twenty-first centuries?",
            "options": [
              "It banned all immigration from Asia, Africa, and Latin America.",
              "It restored the discriminatory national origins quota system established in the 1920s.",
              "It abolished the 1924 national origins quotas and prioritized family reunification and skilled employment, leading to a dramatic surge in immigration predominantly from Latin America and Asia.",
              "It required all immigrants to live in designated agricultural homesteads in Alaska."
            ],
            "correctIndex": 2,
            "explanation": "Hart-Celler dismantled the racialized 1924 quota system; unexpected by its authors, it dramatically transformed American demographics over the next half-century, making the US far more racially, ethnically, and culturally diverse, with the fastest growth among Hispanic and Asian communities.",
            "distractorTip": "The post-1965 immigration wave, combined with internal migration from the Rust Belt to the Sun Belt (South and Southwest), altered congressional representation and national electoral politics."
          }
        ]
      },
      {
        "id": 905,
        "unitIndex": 9,
        "levelNumber": 5,
        "uniqueKey": "ush-p9-l5",
        "topicNumber": "Topic 9.6",
        "name": "War on Terror & 21st-Century Crises",
        "subtitle": "9/11, the PATRIOT Act, the 2008 Financial Crisis, and healthcare",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ush9-l5-q1",
            "stem": "In the immediate aftermath of the catastrophic September 11, 2001 terrorist attacks by Al-Qaeda, the United States government fundamentally altered domestic and foreign policy by:",
            "options": [
              "Abolishing the United States Constitution and declaring permanent nationwide martial law.",
              "Disbanding all federal intelligence agencies and surrendering international airport security to private contractors.",
              "Enacting the USA PATRIOT Act (expanding federal electronic surveillance and counter-terrorism powers), creating the Department of Homeland Security, and launching the global 'War on Terror' (invading Afghanistan in 2001 and Iraq in 2003).",
              "Withdrawing all American naval and ground forces from the Middle East and East Asia."
            ],
            "correctIndex": 2,
            "explanation": "President George W. Bush proclaimed the 'Bush Doctrine'—asserting the right to wage preemptive military strikes against hostile nations harboring terrorists. Domestically, the PATRIOT Act vastly expanded federal surveillance powers, sparking intense constitutional debates over the balance between national security and fourth amendment civil liberties.",
            "distractorTip": "The 2003 invasion of Iraq to eliminate alleged Weapons of Mass Destruction (WMDs) proved deeply controversial when no stockpiles were found, leading to a protracted counterinsurgency war."
          },
          {
            "id": "ush9-l5-q2",
            "stem": "What was the primary domestic cause of the devastating 2008 Financial Crisis (The Great Recession), the worst economic collapse since the 1930s?",
            "options": [
              "A sudden 500% increase in federal corporate income taxes enacted overnight by Congress.",
              "A catastrophic drought that wiped out 100% of Midwestern wheat and corn harvests.",
              "The total destruction of the federal gold depository at Fort Knox by international hackers.",
              "The widespread collapse of the American housing market caused by predatory subprime mortgage lending and deregulated Wall Street mortgage-backed securities, triggering major investment bank failures."
            ],
            "correctIndex": 3,
            "explanation": "Deregulation allowed Wall Street banks to bundle risky subprime mortgages into complex derivatives. When home prices plummeted in 2007, subprime borrowers defaulted, precipitating the bankruptcy of Lehman Brothers, frozen credit markets, and necessitating a massive $700 billion federal bailout (TARP) and the 2009 American Recovery and Reinvestment Act.",
            "distractorTip": "The crisis triggered double-digit unemployment and gave birth to populist grassroots political movements on both the left (Occupy Wall Street) and the right (the Tea Party)."
          },
          {
            "id": "ush9-l5-q3",
            "stem": "The USA PATRIOT Act, passed overwhelmingly by Congress following the September 11, 2001 terrorist attacks, provoked significant constitutional debate primarily because:",
            "options": [
              "It required all American citizens to serve two years of compulsory military service in Afghanistan.",
              "It abolished the Supreme Court's power of judicial review in all federal cases.",
              "It prohibited federal intelligence agencies from monitoring international financial transactions.",
              "It significantly expanded federal law enforcement and intelligence surveillance powers—such as roving wiretaps, bulk data collection, and delayed-notice search warrants—raising serious Fourth Amendment privacy concerns."
            ],
            "correctIndex": 3,
            "explanation": "Passed in the name of national security, the PATRIOT Act lowered the barrier between foreign intelligence and domestic law enforcement; critics, including civil libertarians and the ACLU, argued that broad warrantless surveillance infringed upon fundamental Fourth Amendment protections against unreasonable searches and seizures.",
            "distractorTip": "The post-9/11 era highlighted the recurring American constitutional tension between national security imperatives and individual civil liberties during times of war."
          }
        ]
      },
      {
        "id": 906,
        "unitIndex": 9,
        "levelNumber": 6,
        "uniqueKey": "ush-p9-l6",
        "topicNumber": "Period 9 Boss Level",
        "name": "Period 9 Capstone & Synthesis",
        "subtitle": "Mastery of modern American politics, globalization, and constitutional evolution",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "ush9-l6-q1",
            "stem": "In the landmark 2015 Supreme Court ruling Obergefell v. Hodges, the Court declared that:",
            "options": [
              "The Fourteenth Amendment's Due Process and Equal Protection Clauses guarantee same-sex couples the fundamental, constitutional right to marry nationwide on equal terms with opposite-sex couples.",
              "Individual states possess the sovereign authority to criminalize same-sex civil unions.",
              "The federal government may legally bar same-sex couples from receiving Social Security spousal benefits.",
              "Marriage is not a fundamental right protected by the United States Constitution."
            ],
            "correctIndex": 0,
            "explanation": "Writing for the 5-4 majority, Justice Anthony Kennedy held that the right to marry is a fundamental liberty protected by the 14th Amendment, invalidating all state bans on same-sex marriage in one of the most rapid and profound civil rights transformations in American legal history.",
            "distractorTip": "Obergefell represented the culmination of decades of LGBTQ+ activism that accelerated following the 1969 Stonewall Riots."
          },
          {
            "id": "ush9-l6-q2",
            "stem": "Which of the following historical conclusions best characterizes the overarching trajectory of American political and economic life from 1980 to the present?",
            "options": [
              "The United States experienced an uninterrupted era of complete bipartisan consensus with zero ideological divisions.",
              "The United States navigated the triumph of conservative market-oriented governance and technological globalization, while experiencing heightened partisan polarization and deep debates over the scope of federal power.",
              "The United States dismantled its entire military establishment and withdrew entirely from global international trade.",
              "The federal government ceased to collect taxes or provide any form of social welfare to citizens."
            ],
            "correctIndex": 1,
            "explanation": "From the Reagan Revolution to the 21st-century battles over healthcare (the Affordable Care Act), immigration reform, civil rights, and foreign interventions, modern America has been defined by sharp ideological debates over the proper role of government, the impacts of globalization, and the defense of constitutional democracy.",
            "distractorTip": "AP Historical Synthesis: Connect modern debates over the scope of federal power (e.g., healthcare and surveillance) back to the foundational Anti-Federalist vs. Federalist debates of 1787."
          },
          {
            "id": "ush9-l6-q3",
            "stem": "In response to the catastrophic 2008 Great Recession, the federal government under Presidents George W. Bush and Barack Obama intervened in the national economy on an unprecedented scale primarily by:",
            "options": [
              "Enacting massive emergency liquidity programs (TARP) to bail out insolvent commercial banks and the auto industry, paired with the American Recovery and Reinvestment Act of 2009 to stimulate consumer demand through federal spending and tax cuts.",
              "Abolishing all federal banking regulations and completely privatizing the Federal Reserve System.",
              "Returning the United States to the nineteenth-century gold standard and balancing the federal budget immediately.",
              "Nationalizing all private residential housing and corporate commercial airlines."
            ],
            "correctIndex": 0,
            "explanation": "The subprime mortgage collapse triggered the worst financial crisis since 1929; Bush signed the $700 billion Troubled Asset Relief Program (TARP) to stabilize the financial system, and Obama enacted an $800+ billion Keynesian stimulus package (ARRA) and the Dodd-Frank Wall Street Reform Act to restore economic growth.",
            "distractorTip": "The government bailouts and stimulus ignited intense political polarization, fueling the rise of both the conservative Tea Party movement and the progressive Occupy Wall Street movement."
          }
        ]
      }
    ]
  }
];
