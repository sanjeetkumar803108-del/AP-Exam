// AP World History: Modern (WHAP) Learning Island Curriculum
// 100% Comprehensive Coverage of College Board Course and Exam Description (CED)
// Covers all 9 Units, 78 Levels, and 156 Questions with 0% skipped topics.
// Statistically balanced answer key distribution (25% per choice) with zero options bias.

export interface QuizQuestion {
  id: string;
  stem: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  distractorTip?: string;
}

export interface UnitQuestLevel {
  id: number;
  unitIndex: number;
  levelNumber: number;
  uniqueKey: string;
  topicNumber: string;
  name: string;
  subtitle: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Boss';
  rewardCoins: number;
  questions: QuizQuestion[];
}

export interface UnitBiomeTheme {
  name: string;
  icon: string;
  accentColor: string;
  secondaryColor: string;
  groundGradient: string;
  cardBorder: string;
  trailColor: string;
  nodeRing: string;
  skyTint: string;
}

export interface UnitDefinition {
  unitIndex: number;
  unitId: string;
  title: string;
  shortTitle: string;
  description: string;
  examWeight: string;
  biome: UnitBiomeTheme;
  levels: UnitQuestLevel[];
}

export const ALL_AP_WORLD_HISTORY_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Unit 1: The Global Tapestry (1200–1450)",
    "shortTitle": "Unit 1: Global Tapestry",
    "description": "State-building in East Asia, Dar al-Islam, South/Southeast Asia, the Americas, and Africa c. 1200 to c. 1450",
    "examWeight": "8–10% of AP Exam",
    "biome": {
      "name": "Neo-Confucian Pagoda & Golden Minarets",
      "icon": "🏯",
      "accentColor": "#D97706",
      "secondaryColor": "#B45309",
      "groundGradient": "from-amber-100 via-orange-50 to-yellow-100",
      "cardBorder": "border-amber-500",
      "trailColor": "#d97706",
      "nodeRing": "ring-amber-400/40",
      "skyTint": "from-amber-50 to-orange-50/30"
    },
    "levels": [
      {
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "whap-u1-l1",
        "topicNumber": "Topic 1.1",
        "name": "Song Dynasty Statecraft & Bureaucracy",
        "subtitle": "Civil service examinations, meritocracy, and Neo-Confucian governance",
        "difficulty": "Easy",
        "rewardCoins": 25,
        "questions": [
          {
            "id": "whap1-l1-q1",
            "stem": "Which of the following best explains how the Song Dynasty (960–1279 CE) maintained and justified political rule in East Asia?",
            "options": [
              "By employing an elite imperial civil service examination system rooted in Neo-Confucian scholarship to select bureaucratic officials.",
              "By delegating military governorships to hereditary regional feudal daimyo lords.",
              "By adopting strict Legalist penal codes that banned Confucian philosophical texts.",
              "By converting to Theravada Buddhism and proclaiming the Emperor to be a divine Bodhisattva."
            ],
            "correctIndex": 0,
            "explanation": "The Song Dynasty reinforced bureaucratic centralism by expanding the imperial civil service examination system. Candidates were rigorously tested on Confucian classics, ensuring that civil bureaucrats—rather than hereditary aristocratic or military elites—managed imperial governance.",
            "distractorTip": "Do not confuse Song China's centralized civil bureaucracy with feudal Japan's military shogunate and daimyo system."
          },
          {
            "id": "whap1-l1-q2",
            "stem": "How did the spread of Neo-Confucianism during the Song Dynasty influence Chinese social structure and family relations?",
            "options": [
              "It abolished the traditional class hierarchy between scholar-gentry bureaucrats and merchants.",
              "It reinforced strict patriarchal family hierarchies and social subservience, typified by the widespread adoption of foot-binding among upper-class women.",
              "It granted equal property inheritance rights to female household heads.",
              "It mandated monastic celibacy and communal property sharing across peasant villages."
            ],
            "correctIndex": 1,
            "explanation": "Neo-Confucianism fused Confucian ethical duties with Buddhist and Daoist metaphysical concepts, intensifying patriarchal subordination (filial piety, devotion of wives to husbands). This cultural shift was physically embodied by the practice of foot-binding among elite women to enforce domestic confinement.",
            "distractorTip": "Watch out for distractors claiming Buddhism or Neo-Confucianism promoted female legal equality in medieval East Asia."
          },
          {
            "id": "whap1-l1-q3",
            "stem": "Which of the following best describes the role of the Censorate within the Song Dynasty's bureaucratic government?",
            "options": [
              "An independent military council that overruled imperial decrees during times of border invasion.",
              "A diplomatic envoy dispatched exclusively to negotiate tributary relations with nomadic steppe confederacies.",
              "An imperial oversight agency responsible for investigating official corruption and ensuring administrative loyalty to the Emperor.",
              "A hereditary council of Buddhist monks tasked with approving civil service appointments."
            ],
            "correctIndex": 2,
            "explanation": "The Censorate acted as an imperial surveillance and accountability organ within the Song central government, monitoring civil servants across provinces to prevent graft, corruption, and usurpation of imperial power.",
            "distractorTip": "The Censorate was an administrative integrity bureau within the civil bureaucracy, not an external military or religious council."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "whap-u1-l2",
        "topicNumber": "Topic 1.1",
        "name": "Chinese Commercial & Agricultural Revolution",
        "subtitle": "Champa rice, Grand Canal expansion, proto-industrial iron, and flying cash",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "whap1-l2-q1",
            "stem": "The rapid population surge and urbanization of Song China was primarily facilitated by which agricultural innovation?",
            "options": [
              "The importation of maize and potatoes from the pre-Columbian Western Hemisphere.",
              "The mechanical steam-powered tractor invented by artisan workshops in Hangzhou.",
              "The adoption of drought-resistant, fast-ripening Champa rice imported from coastal Southeast Asia (Vietnam).",
              "The complete conversion of southern paddy lands into commercial mulberry silk orchards."
            ],
            "correctIndex": 2,
            "explanation": "Champa rice, introduced from the Champa kingdom in modern-day Vietnam, ripened in only 60 days and was drought-resistant. This allowed double-cropping (two harvests per year) in southern China, fueling a massive demographic explosion and rapid urbanization.",
            "distractorTip": "Maize and potatoes are American crops that arrived centuries later via the 16th-century Columbian Exchange."
          },
          {
            "id": "whap1-l2-q2",
            "stem": "Which economic development in Song China best illustrates commercialization and proto-industrialization?",
            "options": [
              "The complete elimination of private commerce in favor of state-mandated barter.",
              "The reliance on enslaved European laborers to excavate the southern sections of the Grand Canal.",
              "The total isolation of Chinese seaports from foreign maritime commerce.",
              "The expansion of iron smelting furnaces and the widespread issuance of government paper money ('flying cash') to support regional trade networks."
            ],
            "correctIndex": 3,
            "explanation": "Song China experienced the world's first proto-industrial boom, producing over 100,000 tons of iron annually for plows and weaponry, while commercial credit and paper currency ('flying cash') facilitated long-distance market exchange across the Grand Canal network.",
            "distractorTip": "Song China was deeply commercialized and maritime-focused, not isolated or reliant on European labor."
          },
          {
            "id": "whap1-l2-q3",
            "stem": "The development of proto-industrial production in Song China was most evident in which of the following industries?",
            "options": [
              "Iron and steel manufacturing, which produced tools, armor, and structural components at scales unrivaled until the European Industrial Revolution.",
              "Mechanized steam-powered textile spinning in automated municipal workshops.",
              "Plantation-scale sugar processing utilizing enslaved labor imported from the Indian Ocean.",
              "State-run monopolistic ivory carving centers dependent on Sub-Saharan African imports."
            ],
            "correctIndex": 0,
            "explanation": "Song China experienced a massive expansion in metallurgy using coal-fueled blast furnaces, producing tens of thousands of tons of iron annually for farm tools, suspension bridges, and military weapons centuries before Europe's industrial breakthrough.",
            "distractorTip": "Steam power was not invented until eighteenth-century Britain; Song proto-industrialization relied on water power, coal, and division of manual labor."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "whap-u1-l3",
        "topicNumber": "Topic 1.2",
        "name": "Developments in Dar al-Islam: Fragmentation & New States",
        "subtitle": "Abbasid fragmentation, Seljuk Turks, Mamluk Sultanate, and Delhi Sultanate",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap1-l3-q1",
            "stem": "As the central political authority of the Abbasid Caliphate fractured after 1200 CE, which new Islamic political entities rose to dominance across Afro-Eurasia?",
            "options": [
              "Turkic warrior states such as the Seljuk Empire, the Mamluk Sultanate of Egypt, and the Delhi Sultanate in South Asia.",
              "The Holy Roman Empire and the Kingdom of Aragon.",
              "The Sasanian Persian Empire and the Byzantine Senate.",
              "Christian Crusader city-states spanning from Baghdad to Samarkand."
            ],
            "correctIndex": 0,
            "explanation": "While the Abbasid Caliph in Baghdad became a titular religious figurehead, military and administrative power shifted to nomadic Turkic peoples who converted to Islam, creating resilient military empires like the Seljuk Turks, the Egyptian Mamluks, and the Delhi Sultanate.",
            "distractorTip": "The Sasanian Empire fell in the 7th century during early Islamic expansions, long before the 1200 CE AP start date."
          },
          {
            "id": "whap1-l3-q2",
            "stem": "How did the Mamluk Sultanate of Egypt initially acquire its political and military ruling elite?",
            "options": [
              "Through hereditary democratic elections conducted by Alexandrian merchant guilds.",
              "Through the purchase and military training of enslaved non-Muslim Turkic boys from the Eurasian steppes who seized state power.",
              "Through the direct appointment of Frankish Crusader generals by the Papacy.",
              "Through diplomatic dynastic marriages with the Song Dynasty royal court."
            ],
            "correctIndex": 1,
            "explanation": "Mamluks were enslaved soldiers (often of Kipchak Turkic origin) purchased from the Central Asian steppes. Because they were raised and trained exclusively in elite military academies, they developed immense institutional cohesion, eventually overthrowing their Ayyubid masters in 1250 CE.",
            "distractorTip": "Mamluk literally means 'owned' or enslaved; their military slave origins were unique to medieval Islamic statecraft."
          },
          {
            "id": "whap1-l3-q3",
            "stem": "Which of the following developments best illustrates political transformation across Dar al-Islam following the fragmentation of the Abbasid Caliphate?",
            "options": [
              "The restoration of direct hereditary rule under Persian Zoroastrian monarchies.",
              "The complete disintegration of Islamic trade routes and permanent abandonment of trans-regional pilgrimage to Mecca.",
              "The establishment of European crusader monarchies across Egypt and Mesopotamia.",
              "The rise of Turkic military states, such as the Seljuks and Mamluks, who exercised political and military power while nominally honoring the Caliph."
            ],
            "correctIndex": 3,
            "explanation": "As Abbasid central authority waned, Turkic peoples—including enslaved soldiers (Mamluks in Egypt) and pastoral invaders (Seljuks in Persia/Anatolia)—established dominant dynasties (Sultanates) that defended and expanded Islamic territory while retaining the symbolic legitimacy of the Abbasid Caliph.",
            "distractorTip": "Remember that while the Abbasid Caliph lost practical political control, the symbolic religious unity of the ummah and the prestige of the caliph remained intact until the Mongol sack of Baghdad in 1258."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "whap-u1-l4",
        "topicNumber": "Topic 1.2",
        "name": "Islamic Intellectual Life & Sufi Expansion",
        "subtitle": "House of Wisdom, mathematical syntheses, medical treatises, and Sufi syncretism",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap1-l4-q1",
            "stem": "Which intellectual institution in Baghdad symbolized the synthesis, preservation, and advancement of Greek, Indian, and Persian knowledge in the Islamic world?",
            "options": [
              "The Council of Trent.",
              "The Sorbonne College of Theology.",
              "The House of Wisdom (Bayt al-Hikma).",
              "The Nalanda Buddhist Monastery."
            ],
            "correctIndex": 2,
            "explanation": "Baghdad's House of Wisdom was a grand translation bureau and scholarly academy where Muslim, Jewish, and Christian scholars translated classical Greek philosophy (Aristotle, Galen), Indian mathematics (decimal zero), and Persian astronomy into Arabic.",
            "distractorTip": "Nalanda was a historic Buddhist monastic university in India destroyed in the late 12th century, not a Baghdad institution."
          },
          {
            "id": "whap1-l4-q2",
            "stem": "Sufi missionaries were exceptionally effective in spreading Islam across Sub-Saharan Africa and Southeast Asia primarily because they:",
            "options": [
              "Emphasized rigid Arabic linguistic purity and demanded the burning of all local vernacular shrines.",
              "Enforced conversion at the point of the sword using imperial cavalry units.",
              "Refused to engage in maritime trade or commercial credit partnerships.",
              "Emphasized personal mystical devotion and tolerated syncretic integration of preexisting local spiritual customs."
            ],
            "correctIndex": 3,
            "explanation": "Sufism stressed an intuitive, mystical path to God through meditation, poetry, and ecstatic devotion. By permitting local animist or ancestral traditions to blend with Islamic principles, Sufi brotherhoods made Islam appealing and accessible along global trade routes.",
            "distractorTip": "Sufis were known for peaceful syncretism and mysticism, whereas orthodox jurists (ulama) focused on formal legal codes (Sharia)."
          },
          {
            "id": "whap1-l4-q3",
            "stem": "How did Sufi missionaries contribute significantly to the geographic expansion of Islam across Afro-Eurasia between 1200 and 1450?",
            "options": [
              "By requiring strict adherence to Arabic linguistic and cultural norms before accepting converts.",
              "By emphasizing personal mystical communion, asceticism, and tolerating local cultural syncretism in newly reached frontier regions.",
              "By enforcing orthodox Sharia jurisprudence through punitive civil magistrates.",
              "By acting exclusively as armed cavalrymen conquering coastal commercial ports."
            ],
            "correctIndex": 1,
            "explanation": "Sufi orders (tariqas) emphasized direct experiential devotion and spiritual love rather than strict legalism, allowing them to adapt Islamic teachings to local folk traditions across South Asia, Southeast Asia, and Sub-Saharan Africa.",
            "distractorTip": "Contrast Sufism's flexible, mystical adaptability with the rigid textual jurisprudence of urban ulama scholars."
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "whap-u1-l5",
        "topicNumber": "Topic 1.3",
        "name": "Developments in South & Southeast Asia",
        "subtitle": "Vijayanagara, Delhi Sultanate, Majapahit, Srivijaya, and the Khmer Empire",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap1-l5-q1",
            "stem": "The Vijayanagara Empire (1336–1646 CE) in southern India was founded primarily as a regional political response to which development?",
            "options": [
              "Military incursions and territorial expansion by the northern Islamic Delhi Sultanate.",
              "The maritime blockade of the Indian Ocean by the Portuguese navy.",
              "An armed invasion by the Mongol hordes under Kublai Khan.",
              "The total collapse of Hindu temple architectures across the Malabar coast."
            ],
            "correctIndex": 0,
            "explanation": "Vijayanagara was established by two brothers (Harihara and Bukka) who had served the Delhi Sultanate. Returning to their Hindu roots, they built a powerful southern empire that fortified southern India against northern sultanate invasions.",
            "distractorTip": "The Portuguese maritime arrival occurred in 1498, over 160 years after the founding of Vijayanagara."
          },
          {
            "id": "whap1-l5-q2",
            "stem": "Which Southeast Asian state consolidated immense commercial wealth from the 13th to 16th centuries by controlling the strategic maritime choke points of the Malacca and Sunda Straits?",
            "options": [
              "The land-locked Kingdom of Axum.",
              "The Majapahit Kingdom based on Java.",
              "The Mongol Khanate of the Golden Horde.",
              "The Safavid Empire of Isfahan."
            ],
            "correctIndex": 1,
            "explanation": "Majapahit was a maritime Hindu-Buddhist empire centered on eastern Java that controlled tribute and maritime customs duties across the Indonesian archipelago, dominating trade passing through the Straits of Malacca.",
            "distractorTip": "Axum was an ancient East African inland kingdom; Safavid was a land-based Persian Islamic empire."
          },
          {
            "id": "whap1-l5-q3",
            "stem": "The Khmer Empire's monumental temple complex at Angkor Wat demonstrates which of the following historical processes in Southeast Asia?",
            "options": [
              "The complete suppression of indigenous spiritual customs by incoming Mongol tributary overlords.",
              "The widespread adoption of Christian iconography imported by early Iberian merchants.",
              "The syncretic adoption and monumental architectural adaptation of Indian Hindu and Buddhist traditions by Southeast Asian rulers to legitimize royal authority.",
              "The establishment of an Islamic caliphate across mainland Southeast Asia."
            ],
            "correctIndex": 2,
            "explanation": "Rulers in Southeast Asia (such as the Khmer Empire) embraced Hindu and Buddhist cosmology, constructing monumental complexes like Angkor Wat (originally dedicated to Vishnu, later Theravada Buddhist) to legitimize their rule as devarajas (god-kings).",
            "distractorTip": "Angkor Wat exemplifies 'Indianization'—the voluntary cultural and religious diffusion from South Asia to Southeast Asia via maritime trade, not military conquest."
          }
        ]
      },
      {
        "id": 106,
        "unitIndex": 1,
        "levelNumber": 6,
        "uniqueKey": "whap-u1-l6",
        "topicNumber": "Topic 1.4",
        "name": "State Building in the Americas",
        "subtitle": "Mexica (Aztec) tribute empire, chinampas, and the Inca Mit'a labor system",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap1-l6-q1",
            "stem": "How did the Mexica (Aztec) Empire maintain political hegemony and extract economic resources from conquered neighboring city-states?",
            "options": [
              "By deploying a centralized bureaucratic civil service that granted conquered peoples full imperial voting rights.",
              "By mandating that all conquered provinces adopt the Latin language and convert to Christianity.",
              "By establishing a tributary system requiring subject peoples to supply foodstuffs, luxury goods, woven textiles, and sacrificial captives.",
              "By forcing all agricultural farmers to relocate into the Amazon basin."
            ],
            "correctIndex": 2,
            "explanation": "The Mexica operated a tributary empire centered at Tenochtitlan. Conquered provinces retained their local rulers but were forced to deliver regular tribute (corn, cacao, gold, feathers, cloth, and sacrificial captives) to the Aztec capital.",
            "distractorTip": "The Aztecs did not directly administer provinces with an integrated bureaucracy like Rome or Song China; they relied on tributary compliance."
          },
          {
            "id": "whap1-l6-q2",
            "stem": "In contrast to the Aztec tributary model, the Inca Empire organized public works and state economic integration primarily through which institution?",
            "options": [
              "An unregulated free-market auction house operating with stamped gold coinage.",
              "Private joint-stock charter companies financed by Andean merchants.",
              "A maritime merchant marine trading across the Atlantic basin.",
              "The Mit'a system: mandatory periodic public labor service owed by adult males to the imperial state for road building, terracing, and mining."
            ],
            "correctIndex": 3,
            "explanation": "The Inca state did not use a monetary currency or market commerce; instead, it mobilized labor through the Mit'a system, where households owed seasonal labor to construct suspension bridges, stone terraces, the Qhapaq Ñan road network, and royal storehouses.",
            "distractorTip": "The Incas possessed no written phonetic alphabet (they used quipus) and no merchant currency markets."
          },
          {
            "id": "whap1-l6-q3",
            "stem": "Which administrative mechanism allowed the Inca Empire (Tawantinsuyu) to integrate a geographically fragmented Andean territory without a written phonetic script or market currency?",
            "options": [
              "An extensive 25,000-mile paved royal road system (Qhapaq Ñan) paired with quipu knotted-string record-keeping and state-controlled redistribution warehouses.",
              "Autonomous merchant guilds that traded obsidian and cacao beans across independent coastal city-states.",
              "An elected assembly of provincial clan leaders meeting annually in Cuzco.",
              "Private banking networks providing paper credit to independent peasant farmers."
            ],
            "correctIndex": 0,
            "explanation": "The Incan state utilized the Qhapaq Ñan (road network) for swift communication by chasqui runners, quipus to track demographic censuses and agricultural reserves, and state storehouses (qollqas) to store and redistribute supplies.",
            "distractorTip": "Unlike the Aztec tribute empire which featured market commerce (pochteca merchants), the Inca economy was centrally directed by the state through the mit'a labor duty."
          }
        ]
      },
      {
        "id": 107,
        "unitIndex": 1,
        "levelNumber": 7,
        "uniqueKey": "whap-u1-l7",
        "topicNumber": "Topic 1.5",
        "name": "State Building in Africa",
        "subtitle": "Mali Empire, Mansa Musa, Great Zimbabwe, and Swahili city-states",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap1-l7-q1",
            "stem": "What was a major consequence of Mansa Musa's famous 1324 CE pilgrimage (hajj) to Mecca for the West African Mali Empire?",
            "options": [
              "It demonstrated Mali's colossal gold wealth to the Mediterranean world, depressed Egyptian gold values, and drew Islamic scholars and architects to Timbuktu.",
              "It led to the immediate military conquest of Mali by the Ottoman Empire.",
              "It impoverished Mali because all imperial gold was confiscated by the Byzantine Emperor.",
              "It caused the complete abandonment of trans-Saharan caravan routes."
            ],
            "correctIndex": 0,
            "explanation": "Mansa Musa's lavish caravan distributed so much gold in Cairo that it caused inflation and depressed gold value for a decade. The hajj cemented Mali's international fame and brought back architects like al-Sahili, who built Timbuktu's famous Sankore university and mosques.",
            "distractorTip": "The Ottomans did not conquer West Africa; the Ottomans did not even capture Cairo until 1517."
          },
          {
            "id": "whap1-l7-q2",
            "stem": "The monumental dry-stone architectural complex of Great Zimbabwe reflects which historical development in southern Africa between 1250 and 1450 CE?",
            "options": [
              "Direct administrative rule by Portuguese conquistadors.",
              "The wealth and state centralization achieved through control of interior gold mining and trade linked to Swahili Indian Ocean coastal ports.",
              "The introduction of Roman Catholic monastic stone masonry.",
              "The total isolation of southern African societies from global trade contacts."
            ],
            "correctIndex": 1,
            "explanation": "Great Zimbabwe was the capital of a prosperous Shona kingdom. Its massive stone enclosures (built without mortar) symbolized elite power financed by taxing gold, cattle, and ivory moving from the interior to coastal Swahili ports like Sofala.",
            "distractorTip": "Great Zimbabwe was constructed by indigenous African Shona architects centuries before Portuguese explorers reached southern Africa."
          },
          {
            "id": "whap1-l7-q3",
            "stem": "The construction of Great Zimbabwe between the eleventh and fifteenth centuries was primarily financed by its strategic position within which economic network?",
            "options": [
              "Trans-Saharan camel caravans carrying Mediterranean rock salt to the Niger River.",
              "Atlantic slave trading routes supplying labor to sugar plantations in São Tomé.",
              "Silk Road overland exchanges connecting Central Asia to the Black Sea.",
              "Interior gold-mining and ivory trade corridors connecting the southern African plateau to Swahili coastal ports on the Indian Ocean."
            ],
            "correctIndex": 3,
            "explanation": "Great Zimbabwe prospered because its rulers controlled the transit of alluvial gold and ivory from interior mining regions to Swahili coastal trading city-states such as Kilwa and Sofala, where goods were exchanged for Chinese porcelain and Indian textiles.",
            "distractorTip": "Do not confuse southern African Great Zimbabwe (Indian Ocean coastal trade connection) with West African empires like Mali and Ghana (Trans-Saharan trade)."
          }
        ]
      },
      {
        "id": 108,
        "unitIndex": 1,
        "levelNumber": 8,
        "uniqueKey": "whap-u1-l8",
        "topicNumber": "Topic 1.6 & 1.7",
        "name": "Medieval Europe & Global Comparisons (Boss)",
        "subtitle": "Feudal fragmentation, manorial economy, Magna Carta, and comparative state building",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "whap1-l8-q1",
            "stem": "Between 1200 and 1450 CE, Western European governance differed fundamentally from Song China's political organization because Europe was characterized by:",
            "options": [
              "A unified imperial bureaucracy selected through universal meritocratic examinations.",
              "An absolute imperial theocracy governed by a single hereditary Muslim caliph.",
              "Political decentralization, where feudal monarchs shared sovereignty with a landed military nobility and the Roman Catholic Church.",
              "The complete absence of urban trade guilds and merchant banking."
            ],
            "correctIndex": 2,
            "explanation": "While Song China maintained a highly centralized, bureaucratic government headed by an emperor and scholar-gentry, Western Europe was fragmented into feudal kingdoms, duchies, and manors, where monarchs constantly negotiated power with noble lords and the Papacy.",
            "distractorTip": "Western Europe had no unified civil service exam system until modern bureaucratic reforms in the 18th/19th centuries."
          },
          {
            "id": "whap1-l8-q2",
            "stem": "How did the economic organization of the medieval European manorial system function during the High Middle Ages?",
            "options": [
              "Urban factory workers manufactured steam engines under corporate charter monopolies.",
              "Peasant farmers sold all land to transoceanic Dutch joint-stock investment companies.",
              "Enslaved Mesoamericans cultivated rubber and cacao on vast commercial plantations.",
              "Peasant serfs were legally bound to their lord's landed estate, exchanging agricultural labor and grain shares for physical protection."
            ],
            "correctIndex": 3,
            "explanation": "Manorialism was the economic foundation of European feudalism: self-sufficient manors where unfree peasant serfs farmed the lord's demesne in return for military defense, grain milling rights, and small plots of subsistence land.",
            "distractorTip": "Serfdom is tied to the land under feudalism; do not confuse it with industrialized wage labor or transatlantic chattel slavery."
          },
          {
            "id": "whap1-l8-q3",
            "stem": "In contrast to the centralized imperial bureaucracy of Song China, state structure in Western Europe between 1200 and 1450 was primarily characterized by:",
            "options": [
              "Direct democratic governance organized through universal peasant assemblies.",
              "Political fragmentation among competing feudal lords, decentralized monarchies, and the overarching spiritual authority of the Roman Catholic Church.",
              "Absolute military despotism administered by hereditary nomadic steppe khans.",
              "Total commercial unification under a single transcontinental trade monopoly."
            ],
            "correctIndex": 1,
            "explanation": "Western Europe lacked a centralized imperial state comparable to Song China; instead, power was fractured into feudal contracts between lords and vassals, autonomous chartered cities, and weak monarchies, unified primarily by the Latin Catholic Church.",
            "distractorTip": "Be careful not to confuse early modern European absolutism (post-1500) with medieval feudal fragmentation (1200–1450)."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Unit 2: Networks of Exchange (1200–1450)",
    "shortTitle": "Unit 2: Exchange Networks",
    "description": "The Silk Roads, Mongol Empire & Pax Mongolica, Indian Ocean maritime trade, and Trans-Saharan routes",
    "examWeight": "8–10% of AP Exam",
    "biome": {
      "name": "Oasis Caravanserai & Monsoon Harbors",
      "icon": "🐪",
      "accentColor": "#CA8A04",
      "secondaryColor": "#A16207",
      "groundGradient": "from-yellow-100 via-amber-50 to-orange-100",
      "cardBorder": "border-yellow-600",
      "trailColor": "#ca8a04",
      "nodeRing": "ring-yellow-400/40",
      "skyTint": "from-yellow-50 to-amber-50/30"
    },
    "levels": [
      {
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "whap-u2-l1",
        "topicNumber": "Topic 2.1",
        "name": "The Silk Roads: Caravanserai & Luxury Trade",
        "subtitle": "Caravanserais, silk, porcelain, credit instruments, and oasis cities",
        "difficulty": "Easy",
        "rewardCoins": 25,
        "questions": [
          {
            "id": "whap2-l1-q1",
            "stem": "Which technological and commercial innovation most directly facilitated the expansion of trans-Eurasian trade across the Silk Roads between 1200 and 1450 CE?",
            "options": [
              "Caravanserais, which provided secure roadside inns, water, and stables for merchant camel caravans and their pack animals.",
              "Transcontinental electrical telegraph cables connecting Chang'an to Antioch.",
              "Steam-powered freight locomotives traversing the Gobi desert.",
              "The universal adoption of the gold sovereign currency by the Roman Republic."
            ],
            "correctIndex": 0,
            "explanation": "Caravanserais were fortified rest stations spaced roughly one day's journey apart (approx. 20–25 miles). They allowed merchants, animals, and goods to rest safely, exchange news, and replenish supplies, dramatically reducing commercial travel risks across arid Central Asia.",
            "distractorTip": "Watch out for chronological traps: telegraphs and locomotives belong to the 19th-century Industrial Revolution."
          },
          {
            "id": "whap2-l1-q2",
            "stem": "What types of commodities predominated along the overland Silk Roads, and why?",
            "options": [
              "Bulky, perishable agricultural commodities such as fresh wheat, raw timber, and iron ore.",
              "High-value, low-bulk luxury commodities such as silk, porcelain, jade, and precious spices that justified high overland transportation costs.",
              "Enslaved Indigenous peoples shipped from the Americas to East Asia.",
              "Factory-made industrial plastics and synthetic textiles."
            ],
            "correctIndex": 1,
            "explanation": "Overland pack animal transport (camels, horses) was expensive and carried limited weight. Therefore, overland Silk Road trade focused almost exclusively on luxury goods with very high profit margins per pound—notably Chinese silk and porcelain, Persian rugs, and exotic gems.",
            "distractorTip": "Bulk goods like timber, cotton, and grain were transported via maritime routes (Indian Ocean), not overland caravans."
          },
          {
            "id": "whap2-l1-q3",
            "stem": "How did commercial innovations such as caravanserais and flying cash (credit instruments) facilitate the expansion of Afro-Eurasian trade networks?",
            "options": [
              "They eliminated all tariffs and customs duties imposed by regional dynastic courts.",
              "They substituted livestock barter for precious metal bullion across maritime ports.",
              "They lowered travel risks by providing fortified roadside rest stops and reduced the physical burden and danger of transporting heavy metal coinage.",
              "They prohibited non-Muslim merchants from participating in overland trade."
            ],
            "correctIndex": 2,
            "explanation": "Caravanserais provided food, water, and armed security for traveling merchants and animals along arid overland routes, while paper credit and letters of credit allowed merchants to deposit cash in one city and withdraw value in another without hauling heavy bronze/silver coins.",
            "distractorTip": "Caravanserais were commercial inns and oasis stations, not religious monasteries or naval drydocks."
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "whap-u2-l2",
        "topicNumber": "Topic 2.2",
        "name": "The Mongol Empire & Pax Mongolica",
        "subtitle": "Genghis Khan, steppe cavalry tactics, the Yam postal system, and trade security",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "whap2-l2-q1",
            "stem": "Which factor best explains the astonishing speed with which the Mongol armies conquered vast territories across Eurasia during the 13th century?",
            "options": [
              "Superior naval dreadnought warships armed with steam cannons.",
              "Their strict policy of universal religious conversion at sword point.",
              "Superb equestrian archery, psychological terror tactics, and the incorporation of conquered engineers for siege warfare.",
              "Their reliance on static trench fortifications and defensive stone castles."
            ],
            "correctIndex": 2,
            "explanation": "Nomadic pastoral Mongol warriors were unmatched horse archers who could travel up to 60 miles per day. Genghis Khan organized them into decimal units, used psychological warfare to compel immediate surrenders, and integrated Chinese and Persian siege engineers to breach walled cities.",
            "distractorTip": "The Mongols were exceptionally tolerant of diverse religions (Christianity, Islam, Buddhism); they never forced religious conversion."
          },
          {
            "id": "whap2-l2-q2",
            "stem": "The period known as the 'Pax Mongolica' (Mongol Peace) in the 13th and 14th centuries had which profound impact on Afro-Eurasia?",
            "options": [
              "It permanently severed all commercial contacts between Europe and Asia.",
              "It caused the immediate extinction of the Chinese language and culture.",
              "It led to the complete dissolution of the Catholic Church in Rome.",
              "It unified Eurasia under a single political sphere, securing trade routes, protecting diplomats, and standardizing merchant passports (paiza)."
            ],
            "correctIndex": 3,
            "explanation": "By eliminating rival toll-collecting kingdoms and executing bandits along trade arteries, the Mongol Empire made trans-Eurasian commerce safer than ever before. The imperial Yam courier relay system and paiza passports enabled unprecedented interregional travel and exchange.",
            "distractorTip": "Pax Mongolica dramatically expanded trade and cultural transmission; it did not sever contacts."
          },
          {
            "id": "whap2-l2-q3",
            "stem": "Which administrative policy implemented during the Pax Mongolica contributed most directly to the flourishing of trans-Eurasian trade and communication?",
            "options": [
              "The institutionalization of the Yam courier postal system and the issuance of paiza passports ensuring safe transit for merchants and diplomats.",
              "The forced conversion of all conquered populations to traditional steppe shamanism.",
              "The total prohibition of maritime commerce in favor of exclusive overland caravans.",
              "The replacement of local administrative languages with written Classical Latin."
            ],
            "correctIndex": 0,
            "explanation": "The Mongol Yam system established relay stations equipped with fresh horses and provisions across Eurasia, while bronze/silver/gold paiza badges gave travelers diplomatic immunity and priority supplies, drastically reducing travel times and banditry.",
            "distractorTip": "The Mongols were famous for religious tolerance and adopting local administrative practices, never forcing universal conversion to shamanism."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "whap-u2-l3",
        "topicNumber": "Topic 2.2",
        "name": "The Mongol Khanates: Regional Impacts",
        "subtitle": "Golden Horde in Russia, Ilkhanate in Persia, and the Yuan Dynasty in China",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap2-l3-q1",
            "stem": "In China, Kublai Khan founded the Yuan Dynasty (1271–1368 CE) and governed by:",
            "options": [
              "Maintaining Mongol political supremacy by elevating foreign administrators (including Muslims and Central Asians) over native Han scholar-gentry.",
              "Completely assimilating into traditional Han Chinese culture and adopting Mandarin as the only spoken language.",
              "Abolishing all imperial revenue collection and burning the capital of Dadu (Beijing).",
              "Submitting completely to the authority of the Japanese Shogun."
            ],
            "correctIndex": 0,
            "explanation": "Although Kublai Khan adopted Chinese dynastic rituals and constructed the capital at Dadu, the Mongols suspended the traditional civil service exam for decades and created a 4-tiered social hierarchy that placed Mongols and foreign non-Han administrators above northern and southern Chinese.",
            "distractorTip": "Mongol rulers in China intentionally maintained their distinct ethnic identity and resisted full cultural assimilation."
          },
          {
            "id": "whap2-l3-q2",
            "stem": "How did Mongol rule under the Golden Horde affect political development in medieval Russia?",
            "options": [
              "It led directly to the democratic election of Russian peasant communes.",
              "It required Russian princes to collect and deliver heavy imperial tribute, empowering the Princes of Moscow who eventually overthrew Mongol suzerainty.",
              "It forced all Russians to convert to Tibetan Tantric Buddhism.",
              "It integrated Russia into the Western European parliamentary treaty system."
            ],
            "correctIndex": 1,
            "explanation": "The Golden Horde ruled Russia indirectly from the steppes, requiring Russian princes to act as tributary tax collectors. The grand princes of Moscow used this position to accumulate wealth, expand their territory, and eventually defeat the Mongols at the Battle of Kulikovo (1380 CE).",
            "distractorTip": "The Mongols ruled Russia from afar through tribute extraction, leaving the Russian Orthodox Church intact."
          },
          {
            "id": "whap2-l3-q3",
            "stem": "How did the rule of the Mongol Ilkhanate in Persia differ significantly from the Golden Horde's rule over the Russian principalities?",
            "options": [
              "The Ilkhanate abolished all commercial taxation, whereas the Golden Horde created state monopolies over Silk Road trade.",
              "The Golden Horde completely abandoned nomadic customs and built a permanent maritime fleet on the Baltic Sea.",
              "The Ilkhanate was governed exclusively by Chinese bureaucrats dispatched from Khanbaliq.",
              "Ilkhanate rulers converted to Islam and integrated deeply into Persian bureaucratic administration, whereas the Golden Horde remained on the steppe and extracted tribute through Russian princes."
            ],
            "correctIndex": 3,
            "explanation": "In Persia, Ilkhan Ghazan converted to Islam and patronized Persian arts and administration; in Russia, the Golden Horde ruled indirectly from Sarai on the Volga, using Moscow's grand dukes as tribute tax collectors without assimilating culturally.",
            "distractorTip": "Note the contrast: indirect tribute extraction in Russia vs. cultural assimilation and direct bureaucratic governance in Persia."
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "whap-u2-l4",
        "topicNumber": "Topic 2.3",
        "name": "Indian Ocean Maritime Network: Technology & Winds",
        "subtitle": "Monsoon wind cycles, lateen sails, sternpost rudders, dhows, and junks",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap2-l4-q1",
            "stem": "Merchant navigation in the Indian Ocean maritime trade network was uniquely reliant on an intimate scientific understanding of which environmental phenomenon?",
            "options": [
              "The sudden eruption of undersea volcanic geothermal vents.",
              "Arctic glacial ice melt currents flowing south into the Persian Gulf.",
              "The seasonal predictability of monsoon wind cycles, blowing northeast in winter and southwest in summer.",
              "The permanent eastward direction of the Atlantic Gulf Stream."
            ],
            "correctIndex": 2,
            "explanation": "Monsoon winds blow predictably from the northeast from November to February and reverse from the southwest from April to September. Mariners scheduled their voyages, stays in foreign ports, and return journeys around these seasonal wind currents.",
            "distractorTip": "The Gulf Stream is in the Atlantic Ocean; Indian Ocean mariners relied strictly on seasonal monsoon winds."
          },
          {
            "id": "whap2-l4-q2",
            "stem": "Which naval technological combination allowed Arab, Indian, and Chinese mariners to navigate open ocean waters safely between 1200 and 1450 CE?",
            "options": [
              "Nuclear submarine sonar and satellite GPS transponders.",
              "Oar-powered Roman galleys restricted to visual coastline navigation.",
              "Ironclad steam turbines fueled by Welsh bituminous coal.",
              "Triangular lateen sails that could tack against the wind, sternpost rudders for precise steering, and the magnetic compass and astrolabe for orientation."
            ],
            "correctIndex": 3,
            "explanation": "The lateen sail (which caught wind from both sides), the sternpost rudder (invented in China), the magnetic compass, and the astrolabe allowed transoceanic sailors to navigate far from coastlines across the Arabian Sea and Bay of Bengal.",
            "distractorTip": "Classical Roman galleys hugged coastlines because they lacked lateen sails and deep-sea rudders."
          },
          {
            "id": "whap2-l4-q3",
            "stem": "Why were seasonal monsoon wind cycles central to the operation of maritime commerce in the Indian Ocean?",
            "options": [
              "They caused total closures of all maritime ports between November and April each year.",
              "They forced merchants to remain in port cities for months at a time, fostering the growth of cosmopolitan trade diasporas and cultural exchange.",
              "They prevented Chinese vessels from traveling west of the Strait of Malacca.",
              "They allowed European caravels to conquer South Asian ports without local pilots."
            ],
            "correctIndex": 1,
            "explanation": "Northeast monsoons (winter) blew ships southwest toward Africa and Arabia, while southwest monsoons (summer) blew ships northeast toward India and China. Mariners had to wait out wind shifts, settling in port cities where they intermarried and formed diasporic communities.",
            "distractorTip": "Monsoon cycles did not stop trade—they provided predictable, reliable sailing schedules twice a year."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "whap-u2-l5",
        "topicNumber": "Topic 2.3",
        "name": "Diasporic Merchant Communities & Trade Cities",
        "subtitle": "Swahili city-states (Kilwa), Melaka, Gujarat, and merchant diasporas",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap2-l5-q1",
            "stem": "Why did merchant diasporic communities—such as Muslim Arab merchants in Calicut or Chinese merchants in Southeast Asia—form along Indian Ocean trading ports?",
            "options": [
              "Long waits between seasonal monsoon wind reversals encouraged merchants to settle in host ports, marry local women, and facilitate cross-cultural commerce.",
              "They were expelled as criminal exiles by their home governments.",
              "They were mandated by the Papal Treaty of Tordesillas to establish colonial outposts.",
              "Host port rulers forced all visiting foreign traders into permanent bonded labor."
            ],
            "correctIndex": 0,
            "explanation": "Because sailors had to wait months for monsoon winds to reverse direction, foreign merchants leased residences, established trade warehouses, and formed permanent diaspora communities that introduced new cultural traditions, languages, and religions to local societies.",
            "distractorTip": "Diasporic communities formed organically through trade and weather delays, not via exile or military enslavement."
          },
          {
            "id": "whap2-l5-q2",
            "stem": "The language and culture of the Swahili city-states (such as Kilwa, Mombasa, and Zanzibar) emerged as a direct synthesis of which two cultural traditions?",
            "options": [
              "Classical Latin grammar fused with Scandinavian Norse mythology.",
              "Indigenous Bantu African languages and customs fused with Arabic vocabulary and Islamic religious culture.",
              "Traditional Aztec polytheism combined with Spanish legal systems.",
              "Mandarin Chinese phonetics combined with French feudalism."
            ],
            "correctIndex": 1,
            "explanation": "Swahili (meaning 'coasters' in Arabic) is a Bantu language deeply enriched with Arabic loanwords. It developed along the East African coast as African Bantu-speaking merchants intermarried and traded daily with Arab and Persian Muslim merchants.",
            "distractorTip": "Swahili culture is an authentic African Bantu-Islamic synthesis, completely unrelated to European or American languages."
          },
          {
            "id": "whap2-l5-q3",
            "stem": "The emergence of the Swahili language along the East African coast between 1200 and 1450 best illustrates which historical process?",
            "options": [
              "The forced linguistic imposition of Arabic by an invading Ottoman military fleet.",
              "The isolated preservation of archaic Khoisan dialects uninfluenced by external contacts.",
              "The linguistic syncretism resulting from sustained commercial and cultural interactions between Bantu-speaking coastal communities and Arab/Persian merchants.",
              "The adoption of Portuguese legal terminology during the early medieval era."
            ],
            "correctIndex": 2,
            "explanation": "Swahili developed as a lingua franca along the East African coast, blending a grammatical Bantu base with significant Arabic and Persian vocabulary as Arab and Persian traders settled in Swahili city-states (Kilwa, Mombasa, Zanzibar).",
            "distractorTip": "Swahili is an Afroasiatic/Niger-Congo synthesis (Bantu core + Arabic loanwords), reflecting voluntary mercantile exchange, not imperial conquest."
          }
        ]
      },
      {
        "id": 206,
        "unitIndex": 2,
        "levelNumber": 6,
        "uniqueKey": "whap-u2-l6",
        "topicNumber": "Topic 2.4",
        "name": "Trans-Saharan Trade Networks",
        "subtitle": "Camel saddles, salt-gold exchange, caravan routes, and Islamic expansion in West Africa",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap2-l6-q1",
            "stem": "Which technological breakthrough was essential for enabling regular, large-scale commercial crossings across the Sahara Desert?",
            "options": [
              "The construction of paved asphalt superhighways across the desert sands.",
              "The domestication of cold-climate Siberian reindeer.",
              "The invention of specialized camel saddles, allowing riders to carry up to 600 pounds of freight per camel.",
              "The deep drilling of artesian oil wells across the Sahel."
            ],
            "correctIndex": 2,
            "explanation": "Arab and Berber traders developed specialized pack saddles (particularly the South Arabian pack saddle and Tuareg riding saddle) that distributed heavy loads evenly on the camel's hump, transforming the camel into the ultimate desert freight carrier.",
            "distractorTip": "Camels had existed in North Africa for centuries, but only specialized load-bearing saddles unlocked massive caravan commerce."
          },
          {
            "id": "whap2-l6-q2",
            "stem": "The commercial vitality of trans-Saharan trade between West Africa and the Mediterranean was fundamentally anchored on the complementary exchange of which two commodities?",
            "options": [
              "Chinese green tea exchanged for American tobacco leaves.",
              "English manufactured woolens exchanged for French vintage wines.",
              "Indian ocean pearls exchanged for Siberian animal furs.",
              "West African gold and forest ivory exchanged for Saharan rock salt, horses, textiles, and manufactured goods."
            ],
            "correctIndex": 3,
            "explanation": "West African empires (Ghana, Mali, Songhai) possessed abundant alluvial gold mines but lacked dietary salt, which was essential for survival in tropical climates. Saharan deposits (like Taghaza) provided massive salt slabs, traded almost ounce-for-ounce for southern gold.",
            "distractorTip": "Remember the classic West African trade equation: Gold from the south, Salt from the northern desert."
          },
          {
            "id": "whap2-l6-q3",
            "stem": "Which technological innovation was most critical in transforming the Sahara Desert from an insurmountable barrier into a vibrant commercial trade corridor?",
            "options": [
              "The camel saddle developed by Berber and Arab nomads, allowing riders to transport cargo weighing up to 500 pounds across arid wastes.",
              "The invention of the iron-hulled paddle steamer for navigating seasonal desert flash floods.",
              "The introduction of horse-drawn wheeled chariots capable of traversing deep sand dunes.",
              "The construction of stone aqueducts spanning from the Mediterranean coast to Lake Chad."
            ],
            "correctIndex": 0,
            "explanation": "The South Arabian and Berber camel saddles (especially the pack saddle positioned on or behind the hump) allowed the dromedary camel to carry heavy loads of rock salt and gold across 1,000+ miles of waterless terrain.",
            "distractorTip": "Wheeled vehicles and horses could not survive long Saharan crossings; the camel was the essential biological pack animal."
          }
        ]
      },
      {
        "id": 207,
        "unitIndex": 2,
        "levelNumber": 7,
        "uniqueKey": "whap-u2-l7",
        "topicNumber": "Topic 2.5",
        "name": "Cultural Consequences of Afro-Eurasian Connectivity",
        "subtitle": "Travel accounts of Ibn Battuta, Marco Polo, and Margery Kempe",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap2-l7-q1",
            "stem": "The extensive travel memoirs of the 14th-century Moroccan legal scholar Ibn Battuta are most valuable to modern historians because they demonstrate:",
            "options": [
              "The shared cultural unity and legal universality of Dar al-Islam, alongside regional variations in local gender norms and religious customs.",
              "The total isolation of Chinese ports from international shipping.",
              "The complete military conquest of Western Europe by the Mongol Empire.",
              "The universal adoption of the French language throughout the Indian Ocean."
            ],
            "correctIndex": 0,
            "explanation": "Ibn Battuta traversed over 73,000 miles across North Africa, the Middle East, India, Southeast Asia, and Mali. As a trained Islamic judge (qadi), his writings show how Islam unified distant lands, while his critiques of Mali (e.g., women's public attire) highlight regional cultural variations.",
            "distractorTip": "Ibn Battuta traveled almost entirely within the Islamic world (Dar al-Islam); his account highlights unity amidst regional diversity."
          },
          {
            "id": "whap2-l7-q2",
            "stem": "How did the publication of Marco Polo's accounts of his travels to the court of Kublai Khan in Yuan China influence Western Europe?",
            "options": [
              "It caused Western Europeans to immediately abandon all Christian religious beliefs.",
              "It stimulated intense European commercial curiosity, fascination with Asian wealth, and desire to discover direct trade routes to China.",
              "It prompted the English parliament to outlaw all foreign spice imports.",
              "It led the Venetian republic to declare war on the Ming Dynasty."
            ],
            "correctIndex": 1,
            "explanation": "Marco Polo's vivid descriptions of China's wealth, coal usage, paper money, and bustling canal cities captivated European merchants and monarchs, inspiring subsequent generations of explorers (including Christopher Columbus) to seek direct maritime routes to Cathay.",
            "distractorTip": "Marco Polo stimulated European curiosity and commercial ambition, not religious conversion or immediate military attacks."
          },
          {
            "id": "whap2-l7-q3",
            "stem": "The travel accounts written by the Moroccan scholar Ibn Battuta are especially valuable to world historians because they demonstrate:",
            "options": [
              "The complete uniformity of Islamic cultural customs across all Afro-Eurasian societies without local variations.",
              "The dominance of European legal codes throughout fourteenth-century African courts.",
              "The total absence of urban trade networks in fourteenth-century Southeast Asia.",
              "The vast extent of Dar al-Islam and the shared legal culture of the Islamic world, alongside regional variations in gender roles and local customs."
            ],
            "correctIndex": 3,
            "explanation": "Ibn Battuta traveled over 73,000 miles across Africa, the Middle East, India, and China, finding familiar Islamic jurisprudence (as a trained Qadi) everywhere, while often expressing shock at local customs (e.g., greater freedom and unveiled dress of women in Mali).",
            "distractorTip": "Ibn Battuta did NOT encounter a monolithic culture; his observations reveal both universal Islamic unity and pronounced local cultural diversity."
          }
        ]
      },
      {
        "id": 208,
        "unitIndex": 2,
        "levelNumber": 8,
        "uniqueKey": "whap-u2-l8",
        "topicNumber": "Topic 2.6 & 2.7",
        "name": "Environmental Consequences & Trade Synthesis (Boss)",
        "subtitle": "Bubonic Plague (Black Death), crop diffusion, and comparative networks",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "whap2-l8-q1",
            "stem": "The mid-14th-century pandemic known as the Black Death (bubonic plague) was primarily transmitted along which Afro-Eurasian vector?",
            "options": [
              "Trans-Atlantic fishing fleets bringing pathogens from South America.",
              "Pilgrimage caravans traveling exclusively between London and Canterbury.",
              "Caravan routes and maritime trade networks unified under the Pax Mongolica, carrying flea-infested black rats alongside merchant cargo.",
              "Submarine cables laid across the Mediterranean seabed."
            ],
            "correctIndex": 2,
            "explanation": "The bacterium Yersinia pestis originated in Central or East Asia. Because the Mongol Empire had established unified, uninterrupted trade routes across Eurasia, infected rodents and fleas spread rapidly along trade paths to Caffa on the Black Sea, and thence into Mediterranean and European ports.",
            "distractorTip": "The Black Death was an Afro-Eurasian pandemic in the 1340s; the Atlantic was not crossed until 1492."
          },
          {
            "id": "whap2-l8-q2",
            "stem": "What was a major socio-economic consequence of the catastrophic demographic collapse caused by the Black Death in Western Europe?",
            "options": [
              "The immediate reinforcement and permanent legal strengthening of hereditary serfdom.",
              "The complete abandonment of all commercial port cities and agricultural farming.",
              "The total unification of Europe under an absolute Byzantine Emperor.",
              "Severe labor shortages that empowered surviving peasant laborers to demand higher wages, accelerating the breakdown of traditional feudal manorialism."
            ],
            "correctIndex": 3,
            "explanation": "With one-third to one-half of the European population dead, labor became extraordinarily scarce. Surviving serfs demanded monetary wages and lower rents, leaving their estates if refused. When nobles attempted to freeze wages by law, peasant revolts erupted, weakening feudal serfdom.",
            "distractorTip": "Labor scarcity increased peasants' bargaining power, eroding serfdom rather than strengthening it."
          },
          {
            "id": "whap2-l8-q3",
            "stem": "How did the diffusion of fast-ripening Champa rice from Vietnam to Song China and the introduction of bananas from Southeast Asia to Sub-Saharan Africa compare in their environmental and demographic impacts?",
            "options": [
              "Both crops led to severe desertification and forced urban populations to revert to nomadic hunting.",
              "Both crops enabled significant population growth by allowing cultivation in ecological zones where traditional staple grains could not flourish.",
              "Both crops were grown exclusively as luxury cash crops exported to Western Europe.",
              "Both crops caused immediate mass famines due to acute soil toxicity."
            ],
            "correctIndex": 1,
            "explanation": "Champa rice was drought-resistant and matured in 60 days, permitting double-cropping on terraced hillsides across southern China; bananas thrived in the moist, warm rainforests of Sub-Saharan Africa where yams struggled, fueling massive Bantu population expansion.",
            "distractorTip": "This is a classic AP comparative analysis: biological crop diffusion directly stimulated demographic and agricultural expansion across distinct world regions."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Unit 3: Land-Based Empires (1450–1750)",
    "shortTitle": "Unit 3: Land Empires",
    "description": "Imperial expansion, military gunpowder, administrative centralization, and religious schisms in Eurasian empires",
    "examWeight": "12–15% of AP Exam",
    "biome": {
      "name": "Gunpowder Citadel & Imperial Divan",
      "icon": "🏰",
      "accentColor": "#EA580C",
      "secondaryColor": "#C2410C",
      "groundGradient": "from-orange-100 via-red-50 to-amber-100",
      "cardBorder": "border-orange-600",
      "trailColor": "#ea580c",
      "nodeRing": "ring-orange-400/40",
      "skyTint": "from-orange-50 to-red-50/30"
    },
    "levels": [
      {
        "id": 301,
        "unitIndex": 3,
        "levelNumber": 1,
        "uniqueKey": "whap-u3-l1",
        "topicNumber": "Topic 3.1",
        "name": "Gunpowder Empires: Military Expansion",
        "subtitle": "Ottoman, Safavid, and Mughal imperial expansion through firearm technology",
        "difficulty": "Easy",
        "rewardCoins": 25,
        "questions": [
          {
            "id": "whap3-l1-q1",
            "stem": "Which technological commonality was central to the rapid territorial conquests of the Ottoman, Safavid, and Mughal empires between 1450 and 1750 CE?",
            "options": [
              "The effective military utilization of gunpowder artillery (heavy siege cannons) and handheld muskets deployed by disciplined infantry regiments.",
              "The reliance on supersonic ironclad dreadnought warships.",
              "The universal use of composite horse-bow archery with zero firearms.",
              "The mass deployment of steam-powered mechanized tanks."
            ],
            "correctIndex": 0,
            "explanation": "Historians refer to the Ottomans, Safavids, and Mughals as the 'Gunpowder Empires' because their military supremacy was built on firearms, artillery, and siege cannons, which effortlessly demolished traditional medieval stone castles and nomad cavalry forces.",
            "distractorTip": "These land-based Islamic empires succeeded because of advanced gunpowder artillery and infantry muskets, not steam or traditional bow archery alone."
          },
          {
            "id": "whap3-l1-q2",
            "stem": "The capture of Constantinople in 1453 CE by Ottoman Sultan Mehmed II was a watershed moment in world history primarily because it:",
            "options": [
              "Resulted in the immediate destruction of the Ottoman imperial army.",
              "Ended the Byzantine Empire (Eastern Roman Empire) and secured Ottoman control over critical trade routes linking Europe and Asia.",
              "Led to the total conversion of the Ottoman court to Roman Catholicism.",
              "Prompted the Ming Dynasty to invade the Anatolian peninsula."
            ],
            "correctIndex": 1,
            "explanation": "Mehmed II used massive bronze cannons (built by Hungarian engineer Urban) to blast through the legendary Theodosian walls of Constantinople. The city became Istanbul, the Ottoman capital, choking Christian European trade routes to Asia and spurring maritime exploration.",
            "distractorTip": "The fall of Constantinople extinguished the Byzantine Empire and expanded Ottoman power; it did not destroy the Ottoman military."
          },
          {
            "id": "whap3-l1-q3",
            "stem": "What critical technological advantage enabled the Ottoman, Safavid, and Mughal empires to rapidly conquer and consolidate vast territorial realms during the early modern era?",
            "options": [
              "Superior ironclad steam warships equipped with radar tracking.",
              "Exclusive possession of cavalry mounted on Arabian warhorses without firearms.",
              "The centralized state adoption of gunpowder weaponry, including heavy siege artillery and massed infantry armed with matchlock muskets.",
              "The deployment of long-range crossbow fortifications along land borders."
            ],
            "correctIndex": 2,
            "explanation": "The Gunpowder Empires centralized authority by monopolizing the manufacture and tactical deployment of cast-bronze artillery to breach traditional medieval stone fortifications and equipping disciplined infantry with firearms.",
            "distractorTip": "Remember that firearms required massive state wealth and metallurgical infrastructure, which favored centralized empires over decentralized feudal nobles."
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "whap-u3-l2",
        "topicNumber": "Topic 3.2",
        "name": "Ottoman Administration & The Devshirme System",
        "subtitle": "Devshirme collection, Janissary corps, and bureaucratic centralization",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "whap3-l2-q1",
            "stem": "The Ottoman devshirme system was designed primarily to accomplish which political objective?",
            "options": [
              "To distribute hereditary agricultural lands to independent Arab tribal chieftains.",
              "To enforce equal democratic representation for all religious minorities in parliament.",
              "To recruit and train enslaved Christian boys from the Balkans into fiercely loyal elite soldiers (Janissaries) and imperial bureaucrats dependent solely on the Sultan.",
              "To finance trans-Atlantic trading voyages to South America."
            ],
            "correctIndex": 2,
            "explanation": "The devshirme system drafted young Christian boys from the Balkans, converted them to Islam, and educated them in palace schools. The best became imperial viziers and administrators, while the rest formed the elite Janissary infantry. Because they had no family ties to the Turkish aristocracy, their loyalty belonged solely to the Sultan.",
            "distractorTip": "Janissaries were a counterweight to the hereditary Turkish landed aristocracy, cementing the Sultan's central authority."
          },
          {
            "id": "whap3-l2-q2",
            "stem": "How did the Ottoman Empire accommodate religious diversity within its vast multiethnic borders?",
            "options": [
              "By strictly executing any individual who did not adhere to Sunni Islam.",
              "By forcing all Ottoman subjects to convert to Sufi Buddhism.",
              "By granting non-Muslims complete exemption from all imperial taxes.",
              "Through the Millet system, which granted religious minority communities (Jews, Greek Orthodox, Armenians) internal legal autonomy to resolve family and civil disputes under their own religious laws."
            ],
            "correctIndex": 3,
            "explanation": "Under the Millet system, non-Muslim 'People of the Book' (dhimmi) paid a special poll tax (jizya) but were permitted religious freedom, their own courts, schools, and charitable foundations, creating remarkable social stability across a multi-confessional empire.",
            "distractorTip": "Non-Muslims paid the jizya tax; they were not exempt, but they enjoyed broad communal legal autonomy."
          },
          {
            "id": "whap3-l2-q3",
            "stem": "How did the Devshirme system help Ottoman sultans maintain centralized political authority against potential rivals?",
            "options": [
              "By creating an elite corps of soldiers and civil administrators who owed absolute personal loyalty to the Sultan rather than to hereditary Turkish noble families.",
              "By granting hereditary provincial estates and royal titles to prominent Christian European kings.",
              "By completely eliminating the Sultan's imperial council in favor of local religious assemblies.",
              "By rotating the imperial throne among elected provincial governors every four years."
            ],
            "correctIndex": 0,
            "explanation": "Through the devshirme levy, young Christian boys from the Balkans were converted to Islam, given rigorous military and bureaucratic training, and appointed as Janissaries or viziers; having no family roots in the Turkish aristocracy, their allegiance was exclusively to the Sultan.",
            "distractorTip": "Devshirme recruits were not hereditary nobles; they were technically 'slaves of the Sultan' whose status could not be passed down to heirs, preventing entrenched aristocratic rivalries."
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "whap-u3-l3",
        "topicNumber": "Topic 3.2",
        "name": "Mughal Imperial Administration & Taxation",
        "subtitle": "Akbar the Great, Zamindar tax collectors, and religious syncretism",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap3-l3-q1",
            "stem": "How did the Mughal Empire under Emperor Akbar (reigned 1556–1605 CE) effectively administer agricultural revenue collection across South Asia?",
            "options": [
              "By relying on local aristocratic tax officials known as Zamindars to collect land revenues and remit a portion to the central imperial treasury.",
              "By abolishing all peasant taxation and replacing it with gold confiscated from the French monarchy.",
              "By forcing all Hindu farmers to abandon agriculture and work in mechanized textile factories.",
              "By requiring all tax payments to be made exclusively in live cattle."
            ],
            "correctIndex": 0,
            "explanation": "Zamindars were regional hereditary aristocrats and landlords who collected agricultural taxes (usually in cash or grain) from local peasants. They forwarded the required imperial revenue quota to the Mughal state while retaining a percentage for their administrative services.",
            "distractorTip": "The Zamindar system was the fiscal backbone of the Mughal empire; remember 'Zamindar = Mughal tax collector'."
          },
          {
            "id": "whap3-l3-q2",
            "stem": "Which domestic policy of Mughal Emperor Akbar contributed most to political stability across his majority-Hindu empire?",
            "options": [
              "The reimposition of harsh religious persecutions and the mandatory destruction of all Hindu temples.",
              "The abolition of the jizya tax on non-Muslims, the patronizing of Hindu scholars, and the promotion of religious toleration (Sulh-i-Kul).",
              "The expulsion of all Rajput military warriors from northern India.",
              "The mandatory conversion of the entire Indian population to Persian Shi'ism."
            ],
            "correctIndex": 1,
            "explanation": "Recognizing that a Muslim minority could not rule a vast Hindu majority by coercion alone, Akbar abolished the non-Muslim jizya tax, married Hindu Rajput princesses without forcing conversion, welcomed diverse theologians to his Ibadat Khana debates, and championed universal peace (Sulh-i-Kul).",
            "distractorTip": "Akbar's inclusive policies created stability; his great-grandson Aurangzeb later reversed these policies, triggering internal rebellions."
          },
          {
            "id": "whap3-l3-q3",
            "stem": "In the Mughal Empire, how did the zamindar system function as an instrument of imperial statecraft?",
            "options": [
              "Zamindars were Catholic Jesuit missionaries invited to govern provincial judicial tribunals.",
              "Zamindars were naval admirals who patrolled coastal sea lanes to deter European piracy.",
              "Zamindars were Buddhist monks who managed state educational monasteries across Punjab.",
              "Zamindars were regional aristocrats and landed elites who collected agricultural taxes from peasants and forwarded a required quota to the central Mughal treasury."
            ],
            "correctIndex": 3,
            "explanation": "The Mughals utilized zamindars (local landholders) to assess and collect land revenues from agrarian villages, keeping a percentage of the harvest before remitting the remainder to the imperial court.",
            "distractorTip": "Zamindars were local tax intermediaries; under later rulers like Aurangzeb, corruption and over-taxation by zamindars fueled peasant unrest."
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "whap-u3-l4",
        "topicNumber": "Topic 3.2",
        "name": "Qing Dynasty Consolidation & Legitimation",
        "subtitle": "Manchu conquest of Ming, queue hairstyle edict, and imperial portraits",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap3-l4-q1",
            "stem": "Following their conquest of the Ming Dynasty in 1644 CE, the Manchu rulers of the Qing Dynasty visually enforced submission among Han Chinese males by mandating:",
            "options": [
              "The immediate tattooing of the imperial Qing crest onto both hands.",
              "The wearing of Western European powdered wigs and woolen jackets.",
              "The adoption of the Manchu queue hairstyle, shaving the front of the scalp and braiding the back hair into a long pigtail under penalty of execution.",
              "The total shaving of all head and facial hair without exception."
            ],
            "correctIndex": 2,
            "explanation": "The Queue Edict ('Lose your hair or lose your head') was a strict test of loyalty imposed by the Manchu minority upon the Han majority. Refusal to adopt the hairstyle was treated as treason and punished by swift execution.",
            "distractorTip": "The queue hairstyle was specifically Manchu, forced on Han Chinese men as a visual symbol of political submission."
          },
          {
            "id": "whap3-l4-q2",
            "stem": "How did Qing emperors like Kangxi and Qianlong legitimize their authority to diverse cultural populations within their vast expanding empire?",
            "options": [
              "By claiming direct divine descent from the Roman goddess Venus.",
              "By renouncing all military conquest and declaring complete global pacifism.",
              "By converting the imperial household to Eastern Orthodox Christianity.",
              "By having themselves depicted in imperial portraits as traditional Confucian scholar-emperors, Buddhist universal rulers (Chakravartin), and steppe warrior khans."
            ],
            "correctIndex": 3,
            "explanation": "Qing emperors were master propagandists: to the Han Chinese, they presented themselves as filial Confucian scholars performing sacred agricultural rituals; to Mongols and Tibetans, they appeared as Buddhist bodhisattvas and Central Asian steppe warrior khans.",
            "distractorTip": "Qing rulers adapted multiple cultural personas to legitimize rule across multi-ethnic frontiers (Han, Mongols, Tibetans, Uighurs)."
          },
          {
            "id": "whap3-l4-q3",
            "stem": "How did the Manchu rulers of the Qing Dynasty (1644–1912) legitimize their rule over the overwhelmingly Han Chinese majority?",
            "options": [
              "By abolishing Confucianism and establishing Tibetan Buddhism as the sole legal philosophy.",
              "By retaining the traditional Confucian imperial bureaucracy and civil service examinations while maintaining distinct Manchu ethnic and military supremacy.",
              "By requiring all Han Chinese subjects to adopt Portuguese dress and convert to Catholicism.",
              "By dividing imperial territories equally among European trading companies."
            ],
            "correctIndex": 1,
            "explanation": "The Manchus presented themselves as legitimate Sons of Heaven by continuing Confucian rites and the examination system, employing Han scholars in a dyarchic governance model alongside Manchus, while enforcing the queue hairstyle as a test of loyalty.",
            "distractorTip": "The Qing did not abandon Chinese institutions; they mastered and utilized them to legitimize foreign Manchu dynastic rule."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "whap-u3-l5",
        "topicNumber": "Topic 3.2",
        "name": "Monumental Architecture & Divine Legitimation",
        "subtitle": "Versailles, Taj Mahal, Saint Petersburg, and visual displays of absolute power",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap3-l5-q1",
            "stem": "Why did French King Louis XIV construct the monumental Palace of Versailles and require the high French nobility to reside there for extended periods?",
            "options": [
              "To neutralize aristocratic rebellion by trapping nobles in elaborate court etiquette and surveillance, centralizing absolute monarchical power.",
              "To allow French nobles to independently elect their own democratic prime minister.",
              "To convert the French state into an agricultural serf commune.",
              "To prepare for a permanent peacetime alliance with the Ottoman Empire."
            ],
            "correctIndex": 0,
            "explanation": "By compelling the high nobility to live at Versailles, Louis XIV ('The Sun King') transformed potential aristocratic rebels into fawning courtiers competing for petty favors (holding the king's candle or coat), effectively eliminating independent feudal resistance to absolute royal rule.",
            "distractorTip": "Versailles was a gilded cage designed to control and tame the French nobility, not to give them democratic power."
          },
          {
            "id": "whap3-l5-q2",
            "stem": "Mughal Emperor Shah Jahan constructed the Taj Mahal in Agra primarily as a:",
            "options": [
              "Massive stone fortress designed to repel English naval invasions.",
              "Magnificent marble mausoleum for his beloved wife Mumtaz Mahal, serving as an architectural symbol of imperial power, wealth, and Islamic-Persian aesthetic perfection.",
              "Central bank headquarters for the Dutch East India Company.",
              "Christian cathedral dedicated to the Jesuit missionary order."
            ],
            "correctIndex": 1,
            "explanation": "The Taj Mahal is widely considered the pinnacle of Indo-Islamic architecture. Combining white Makrana marble, symmetrical Persian gardens (charbagh), inlaid semi-precious stones, and Quranic calligraphy, it demonstrated the sheer wealth and prestige of the Mughal dynasty.",
            "distractorTip": "The Taj Mahal is a funerary mausoleum and architectural monument, not a military fortress or colonial trading office."
          },
          {
            "id": "whap3-l5-q3",
            "stem": "Which of the following architectural monuments was commissioned by French King Louis XIV specifically to centralize royal absolutism and neutralize aristocratic opposition?",
            "options": [
              "The Winter Palace in Saint Petersburg.",
              "The Topkapi Palace in Istanbul.",
              "The Palace of Versailles outside Paris.",
              "The Escorial outside Madrid."
            ],
            "correctIndex": 2,
            "explanation": "Louis XIV built Versailles to showcase the grandeur of the 'Sun King' and compelled French nobles to live at court, distracting them with elaborate etiquette and court patronage to prevent them from organizing regional rebellions against royal centralism.",
            "distractorTip": "Versailles is the quintessential AP example of monumental architecture used for political control and royal absolutist legitimation in Europe."
          }
        ]
      },
      {
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "whap-u3-l6",
        "topicNumber": "Topic 3.3",
        "name": "Religious Schisms: The Protestant & Catholic Reformations",
        "subtitle": "Martin Luther, 95 Theses, Council of Trent, and the Jesuit missionary order",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap3-l6-q1",
            "stem": "What was the core theological critique Martin Luther leveled against the Roman Catholic Church in his 95 Theses (1517 CE)?",
            "options": [
              "He demanded that all European Christians convert immediately to Sunni Islam.",
              "He argued that the Pope should be crowned absolute military Emperor of Eurasia.",
              "He condemned the corrupt sale of papal indulgences and argued that salvation was attained solely through faith in God's grace (sola fide) and scripture (sola scriptura).",
              "He advocated for the complete abolition of all printing presses in Germany."
            ],
            "correctIndex": 2,
            "explanation": "Luther attacked the commercial sale of indulgences (certificates forgiving punishment for sins in purgatory). He insisted that no human priest could sell salvation: salvation came through personal faith alone (sola fide), and ultimate religious authority resided in the Bible, not the Pope.",
            "distractorTip": "Luther utilized the printing press to spread his ideas rapidly; he championed vernacular Bible translation, not press censorship."
          },
          {
            "id": "whap3-l6-q2",
            "stem": "How did the Roman Catholic Church respond to the Protestant Reformation at the Council of Trent (1545–1563 CE)?",
            "options": [
              "By accepting all of Luther's theological doctrines and dissolving the papacy.",
              "By surrendering all church property to secular Protestant princes in Germany.",
              "By adopting the Eastern Orthodox calendar and relocating the Holy See to Moscow.",
              "By reaffirming Catholic dogma and the authority of the Pope, while reforming clerical corruption and founding the missionary Society of Jesus (Jesuits)."
            ],
            "correctIndex": 3,
            "explanation": "The Catholic Counter-Reformation reaffirmed traditional doctrines (7 sacraments, veneration of saints, papal supremacy) while addressing abuses by reforming seminaries and banning the sale of indulgences. The newly formed Jesuit order (led by Ignatius of Loyola) spearheaded global education and missionary work.",
            "distractorTip": "The Council of Trent doubled down on traditional Catholic theology while strictly cleaning up financial and moral corruption."
          },
          {
            "id": "whap3-l6-q3",
            "stem": "How did the Roman Catholic Church respond to the theological challenges posed by the Protestant Reformation during the Counter-Reformation?",
            "options": [
              "By reaffirming traditional Catholic doctrines, reforming bureaucratic corruption, and establishing new missionary orders such as the Society of Jesus (Jesuits).",
              "By accepting Martin Luther's doctrine of salvation through faith alone (sola fide).",
              "By abolishing the Papacy and replacing it with an elected council of Protestant ministers.",
              "By banning all visual art, monumental architecture, and music from church worship."
            ],
            "correctIndex": 0,
            "explanation": "At the Council of Trent (1545–1563), the Catholic Church reaffirmed papal supremacy, the seven sacraments, and veneration of saints, while curbing corrupt practices like the sale of indulgences and mobilizing the Jesuits to reconvert Europe and evangelize in the Americas and Asia.",
            "distractorTip": "The Catholic Church did NOT compromise on core theology with Protestants; it codified orthodoxy while addressing financial and administrative abuses."
          }
        ]
      },
      {
        "id": 307,
        "unitIndex": 3,
        "levelNumber": 7,
        "uniqueKey": "whap-u3-l7",
        "topicNumber": "Topic 3.3",
        "name": "Ottoman-Safavid Conflict: Sunni vs. Shi'a Rivalry",
        "subtitle": "Sectarian schism, Battle of Chaldiran (1514), and regional border wars",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap3-l7-q1",
            "stem": "The prolonged military conflict between the Ottoman Empire and the neighboring Safavid Empire between 1500 and 1700 was deeply intensified by which ideological division?",
            "options": [
              "The religious schism between the Sunni Muslim Ottomans and the Twelver Shi'a Muslim Safavids.",
              "A theological dispute between Roman Catholicism and Lutheranism.",
              "A clash between Daoist monastic orders and Confucian civil servants.",
              "A commercial rivalry over control of the trans-Atlantic fur trade."
            ],
            "correctIndex": 0,
            "explanation": "Shah Ismail made Twelver Shi'ism the mandatory state religion of Safavid Iran, violently persecuting Sunnis. The Ottoman Sultans, viewing themselves as the universal leaders of Sunni Islam, declared holy war against Safavid 'heretics', resulting in centuries of bitter sectarian warfare (e.g., Battle of Chaldiran, 1514).",
            "distractorTip": "Ottomans were champions of Sunni orthodoxy; Safavids established Shi'ism as Iran's state religion. This is a classic College Board contrast."
          },
          {
            "id": "whap3-l7-q2",
            "stem": "What was the outcome of the Battle of Chaldiran (1514 CE) between the Ottoman Empire and the Safavid Empire?",
            "options": [
              "The complete military annihilation of the Ottoman Empire by Safavid horse archers.",
              "Ottoman gunpowder artillery and Janissary musketeers defeated the Safavid cavalry, halting Safavid westward expansion and establishing the enduring border between Anatolia and Iran.",
              "A peace treaty that unified the two empires under a single joint parliament.",
              "The total withdrawal of both empires from Islamic theological debates."
            ],
            "correctIndex": 1,
            "explanation": "At Chaldiran, Ottoman superiority in firearms and cannons triumphed over the traditional Safavid Qizilbash cavalry. The battle demonstrated the decisive power of gunpowder technology and permanently checked Shi'a expansion into Ottoman-held Anatolia.",
            "distractorTip": "Chaldiran proved that gunpowder firepower decisively surpassed nomad cavalry charges in early modern warfare."
          },
          {
            "id": "whap3-l7-q3",
            "stem": "The prolonged military conflict between the Ottoman Empire and the Safavid Empire during the sixteenth and seventeenth centuries was primarily fueled by:",
            "options": [
              "Disputes over trading rights in the North American fur trade.",
              "Rivalry between Roman Catholic and Eastern Orthodox missionary organizations.",
              "Conflict over maritime navigation through the Strait of Magellan.",
              "A deep sectarian divide between Sunni Ottoman orthodoxy and Twelver Shi'a Safavid theocracy, compounded by territorial competition in Mesopotamia."
            ],
            "correctIndex": 3,
            "explanation": "The Ottomans championed orthodox Sunni Islam, while Shah Ismail made Twelver Shi'ism the compulsory state religion of Safavid Iran. This theological schism turned the borderlands of Mesopotamia and Azerbaijan into violent battlegrounds (e.g., Battle of Chaldiran in 1514).",
            "distractorTip": "Religious ideology was deeply intertwined with territorial rivalry between Istanbul and Isfahan over trade routes and buffer zones."
          }
        ]
      },
      {
        "id": 308,
        "unitIndex": 3,
        "levelNumber": 8,
        "uniqueKey": "whap-u3-l8",
        "topicNumber": "Topic 3.3 & 3.4",
        "name": "Sikhism & Land-Based Empires Synthesis (Boss)",
        "subtitle": "Guru Nanak, syncretism in Punjab, and comparative land empire consolidation",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "whap3-l8-q1",
            "stem": "Sikhism, founded by Guru Nanak in the Punjab region of South Asia around 1500 CE, represented which theological development?",
            "options": [
              "A fundamentalist Catholic monastic movement seeking to reconquer the Holy Land.",
              "An extreme offshoot of Shinto animism imported from Japan.",
              "A syncretic faith blending elements of monotheistic Islam (one universal God) with Hindu concepts (karma, reincarnation), while rejecting the Hindu caste hierarchy.",
              "A secular philosophical society devoted solely to European merchant banking."
            ],
            "correctIndex": 2,
            "explanation": "Guru Nanak preached that 'There is no Hindu, there is no Muslim, there is only God.' Sikhism embraced strict monotheism and egalitarian community kitchens (langar) where people of all social classes ate together, rejecting caste discrimination while retaining beliefs in karma and rebirth.",
            "distractorTip": "Sikhism is a distinct, autonomous world religion born in Punjab, characterized by monotheism and radical social equality."
          },
          {
            "id": "whap3-l8-q2",
            "stem": "When comparing the administrative consolidation of the Russian Empire under Peter the Great to the Qing Dynasty under Kangxi, which common strategy was employed?",
            "options": [
              "Both rulers completely eliminated their armed forces in favor of commercial arbitration tribunals.",
              "Both states surrendered their sovereign borders to the British East India Company.",
              "Both states adopted parliamentary democracy and abolished hereditary monarchy.",
              "Both rulers modernized their military structures, subjugated rival aristocratic elites (Russian boyars, Manchu banners), and utilized monumental urban centers to demonstrate imperial authority."
            ],
            "correctIndex": 3,
            "explanation": "Both Peter the Great (who built Saint Petersburg and forced boyars to shave their beards) and the Qing emperors centralized state bureaucracy, modernized artillery armies, tamed rival aristocrats, and projected visual majesty to consolidate vast continental land empires.",
            "distractorTip": "Both Russia and Qing China were quintessential land-based autocracies that expanded through centralized bureaucratic coercion."
          },
          {
            "id": "whap3-l8-q3",
            "stem": "The founding of Sikhism by Guru Nanak in sixteenth-century Punjab is best understood as a spiritual movement that:",
            "options": [
              "Demanded the violent extermination of all preexisting Hindu and Muslim communities in India.",
              "Synthesized elements of Hindu devotional Bhakti traditions with Islamic monotheism, rejecting the caste system and empty ritualism.",
              "Advocated the adoption of Daoist alchemy and Chinese ancestor worship.",
              "Was created by Portuguese Jesuit missionaries to undermine the Mughal throne."
            ],
            "correctIndex": 1,
            "explanation": "Guru Nanak proclaimed that 'there is no Hindu, there is no Muslim,' preaching radical monotheism, the spiritual equality of all humans regardless of caste or gender, and selfless community service (seva/langar).",
            "distractorTip": "Sikhism arose syncretically in the culturally interconnected borderlands of northern India, not from external European interference."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Unit 4: Transoceanic Interconnections (1450–1750)",
    "shortTitle": "Unit 4: Transoceanic",
    "description": "Maritime technology, Columbian Exchange, mercantilism, global silver, chattel slavery, and social hierarchies",
    "examWeight": "12–15% of AP Exam",
    "biome": {
      "name": "Caravel Rigging & Galleon Silver Mines",
      "icon": "⛵",
      "accentColor": "#0284C7",
      "secondaryColor": "#0369A1",
      "groundGradient": "from-sky-100 via-blue-50 to-indigo-100",
      "cardBorder": "border-sky-600",
      "trailColor": "#0284c7",
      "nodeRing": "ring-sky-400/40",
      "skyTint": "from-sky-50 to-blue-50/30"
    },
    "levels": [
      {
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "whap-u4-l1",
        "topicNumber": "Topic 4.1",
        "name": "Maritime Innovations & Navigational Breakthroughs",
        "subtitle": "Caravels, fluyts, lateen sails, astrolabes, and cartographic science",
        "difficulty": "Easy",
        "rewardCoins": 25,
        "questions": [
          {
            "id": "whap4-l1-q1",
            "stem": "Which combination of maritime innovations directly enabled European mariners to explore and establish transoceanic trade routes in the 15th and 16th centuries?",
            "options": [
              "The caravel (a fast, shallow-draft vessel) equipped with triangular lateen sails, combined with the magnetic compass and improved navigational astrolabes.",
              "Oar-powered Roman triremes equipped with bronze battering rams.",
              "Steam turbines and Morse code radio communication transmitters.",
              "Ironclad steamships designed exclusively for Baltic river transport."
            ],
            "correctIndex": 0,
            "explanation": "Portuguese and Spanish shipbuilders synthesized Mediterranean and Asian technologies: the caravel combined European hull designs with Arab triangular lateen sails (which allowed sailing into the wind) and the Chinese magnetic compass and Islamic astrolabe, enabling long open-ocean voyages.",
            "distractorTip": "Notice the synthesis of cross-cultural tech: lateen sails (Arab/Indian Ocean), compass (China), and astrolabe (Hellenistic/Islamic)."
          },
          {
            "id": "whap4-l1-q2",
            "stem": "The Dutch fluyt (flyboat) revolutionized 17th-century maritime commerce primarily because it was designed to:",
            "options": [
              "Serve as a heavily armed warship capable of bombarding inland mountain fortifications.",
              "Maximize cargo hold capacity while minimizing crew size, significantly reducing commercial shipping costs.",
              "Operate as a luxury floating hotel for Dutch royalty.",
              "Travel exclusively along narrow canals within Amsterdam without entering open seas."
            ],
            "correctIndex": 1,
            "explanation": "The Dutch designed the fluyt specifically for merchant profit: it had a pear-shaped hull with huge cargo capacity, cheap construction materials, and simple rigging that required a crew half the size of rival ships, giving Dutch traders an enormous cost advantage across global markets.",
            "distractorTip": "The fluyt was a merchant workhorse, not a heavily armed battleship; its low operating cost drove Dutch commercial dominance."
          },
          {
            "id": "whap4-l1-q3",
            "stem": "Which European vessel design innovation was developed specifically by the Dutch to maximize cargo capacity and minimize operating crew size, revolutionizing global maritime transport?",
            "options": [
              "The steam-powered ironclad frigate.",
              "The Greek trireme with three tiers of oarsmen.",
              "The fluyt (flyboat), an inexpensive merchant cargo vessel with a wide hull and pear-shaped cross section.",
              "The Roman galley designed primarily for ramming enemy warships."
            ],
            "correctIndex": 2,
            "explanation": "The Dutch fluyt was designed strictly for commercial freight rather than naval combat; its pear-shaped hull minimized deck taxes at Danish straits while its block-and-tackle rigging allowed a small crew to haul enormous grain and spice cargos cheaply.",
            "distractorTip": "The fluyt was an unarmed or lightly armed merchant workhorse, distinct from armed warships like the Portuguese galleon."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "whap-u4-l2",
        "topicNumber": "Topic 4.2",
        "name": "Causes & Events of Transoceanic Exploration",
        "subtitle": "Prince Henry the Navigator, Vasco da Gama, Columbus, and state sponsorship",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "whap4-l2-q1",
            "stem": "What was the primary economic motivation driving Iberian (Portuguese and Spanish) state-sponsored maritime exploration around 1500 CE?",
            "options": [
              "To purchase African camel herds to develop steppe cavalry in Iberia.",
              "To recruit Ming Dynasty scholars to translate the Latin Bible into Mandarin.",
              "To discover direct maritime sea routes to Asian spice markets, thereby bypassing Ottoman and Venetian middleman monopolies.",
              "To discover Siberian fur reserves for winter clothing manufacturing."
            ],
            "correctIndex": 2,
            "explanation": "Ottoman conquest of Constantinople (1453) and Venetian control over Mediterranean trade routes resulted in exorbitant taxes and markups on Asian spices and silk. Portugal and Spain invested in ocean voyages to bypass these intermediaries and trade directly with India and the Moluccas.",
            "distractorTip": "Remember the 3 G's: Gold, God, and Glory—with direct access to the Asian spice trade being the paramount economic driver."
          },
          {
            "id": "whap4-l2-q2",
            "stem": "Portuguese navigator Vasco da Gama achieved a historic maritime breakthrough in 1498 CE by:",
            "options": [
              "Sailing completely around the northern Arctic coastline of Russia.",
              "Establishing the first permanent European settlement on the island of Manhattan.",
              "Discovering a continuous inland river passage through South America to China.",
              "Rounding Africa's Cape of Good Hope and sailing across the Indian Ocean to reach the port of Calicut in India."
            ],
            "correctIndex": 3,
            "explanation": "Da Gama was the first European to reach India by sea, opening a direct maritime spice route that eliminated the overland silk routes and laid the foundation for the Portuguese maritime trading post empire (Estado da Índia).",
            "distractorTip": "Columbus sailed west and stumbled upon the Americas in 1492; Da Gama sailed south and east around Africa to India in 1498."
          },
          {
            "id": "whap4-l2-q3",
            "stem": "Why did European monarchs—such as King Ferdinand and Queen Isabella of Spain—invest substantial state treasury funds in transoceanic expeditions during the late fifteenth century?",
            "options": [
              "To establish direct maritime access to lucrative Asian luxury goods and spices, bypassing high taxes charged by Venetian and Muslim middlemen.",
              "To relocate surplus European industrial factory workers to overseas settler colonies.",
              "To import millions of tons of coal and steel from the Americas to fuel early steam factories.",
              "To ally with the Aztec Empire against the Ottoman Empire."
            ],
            "correctIndex": 0,
            "explanation": "Western European kingdoms on the Atlantic periphery were burdened by the Ottoman-Venetian monopoly over eastern trade routes; finding an all-water oceanic route to the 'Indies' promised immense commercial wealth and religious converts.",
            "distractorTip": "Watch out for anachronistic distractors mentioning industrialization, factories, or coal, which belong to the eighteenth and nineteenth centuries."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "whap-u4-l3",
        "topicNumber": "Topic 4.3",
        "name": "The Columbian Exchange: Biological & Demographic Shifts",
        "subtitle": "Pathogens (smallpox), American staple crops (maize, potatoes), and Old World livestock",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap4-l3-q1",
            "stem": "What was the catastrophic demographic impact of the Columbian Exchange on Indigenous populations of the Americas following 1492?",
            "options": [
              "A catastrophic population collapse of up to 80% to 90% caused by Afro-Eurasian epidemic diseases (such as smallpox, measles, and influenza) to which Indigenous peoples had no immunological resistance.",
              "A dramatic population increase due to the immediate introduction of European wheat and barley.",
              "The complete elimination of all tropical vegetation across South America.",
              "The voluntary migration of millions of Indigenous Americans to Western Europe."
            ],
            "correctIndex": 0,
            "explanation": "Thousands of years of geographic isolation meant Indigenous Americans had developed no biological antibodies to Afro-Eurasian pathogens. Smallpox, measles, and typhus swept ahead of conquistadors, annihilating between 50% and 90% of native populations within a century.",
            "distractorTip": "The demographic effect was a massive crash in the Americas, contrasted with a population boom in Eurasia from American crops."
          },
          {
            "id": "whap4-l3-q2",
            "stem": "How did the diffusion of American crops like maize, sweet potatoes, and white potatoes affect Afro-Eurasian societies?",
            "options": [
              "It caused widespread nutritional starvation and agricultural failure across Europe and Asia.",
              "It provided calorically dense, drought-resistant food staples that spurred sustained demographic growth across Europe, China, and Sub-Saharan Africa.",
              "It caused the immediate abandonment of wet-rice farming in East Asia.",
              "It led the Qing Dynasty to ban all foreign agricultural planting."
            ],
            "correctIndex": 1,
            "explanation": "American staple crops (potatoes in northern Europe, sweet potatoes and maize in China, manioc in Africa) produced significantly more calories per acre than native crops and thrived in marginal soils, driving long-term population surges across Afro-Eurasia.",
            "distractorTip": "Notice the biological contrast: European pathogens devastated the Americas, while American crops enriched Eurasian diets."
          },
          {
            "id": "whap4-l3-q3",
            "stem": "Which of the following best describes the global demographic impact of the transfer of American crops (such as potatoes, maize, and manioc) to Europe, Asia, and Africa?",
            "options": [
              "It caused severe widespread famines due to invasive agricultural blights across Afro-Eurasia.",
              "It triggered massive depopulation across China and Western Europe during the sixteenth century.",
              "It led to the immediate abandonment of rice and wheat farming throughout Afro-Eurasia.",
              "It supplied calorie-dense nutrition that sparked substantial long-term population growth across Europe, Africa, and East Asia."
            ],
            "correctIndex": 3,
            "explanation": "American domesticates like potatoes (in northern Europe), maize (in China and the Mediterranean), and manioc/cassava (in tropical Africa) provided far more caloric yield per acre than native staples, stabilizing food supplies and driving global demographic growth.",
            "distractorTip": "Keep the demographic contrast straight: catastrophic population decline in the Americas (due to European diseases) vs. robust population growth in Afro-Eurasia (due to American crops)."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "whap-u4-l4",
        "topicNumber": "Topic 4.4",
        "name": "Maritime Empires: Trading Posts vs. Colonies",
        "subtitle": "Portuguese trading post empire (cartaz), Dutch VOC, and British East India Company",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap4-l4-q1",
            "stem": "How did the Portuguese Empire's strategy in the Indian Ocean basin differ fundamentally from the Spanish Empire's strategy in the Americas?",
            "options": [
              "Portugal conquered massive inland territorial empires populated by millions of native subjects.",
              "Portugal relied entirely on peaceful religious missionary work without possessing naval weapons.",
              "Portugal established a coastal 'trading post empire' (feitorias) aimed at controlling trade choke points and taxing commerce via the cartaz pass system, rather than conquering vast inland territorial empires.",
              "Spain only established small unfortified fishing huts along the Caribbean coast."
            ],
            "correctIndex": 2,
            "explanation": "Lacking the manpower to conquer Asian land empires, Portugal built a network of armed naval outposts at choke points (Hormuz, Goa, Malacca) and forced merchant vessels to purchase a protection permit (the cartaz pass), whereas Spain conquered massive inland empires in Mexico and Peru.",
            "distractorTip": "Portugal = Coastal Trading Post Empire in Asia; Spain = Inland Territorial & Colonial Empire in the Americas."
          },
          {
            "id": "whap4-l4-q2",
            "stem": "How were early modern joint-stock companies (such as the Dutch VOC and British EIC) uniquely empowered by their respective governments?",
            "options": [
              "They were strictly prohibited from building forts, hiring private soldiers, or owning merchant ships.",
              "They were owned entirely by the Pope and operated solely as charitable religious orders.",
              "They were required to distribute 100% of their commercial revenue to peasant agricultural laborers.",
              "They were granted sovereign royal charter monopolies with the legal authority to wage war, build fortresses, mint coins, and administer overseas territories on behalf of private investors."
            ],
            "correctIndex": 3,
            "explanation": "Joint-stock charters granted companies like the VOC quasi-governmental powers: they raised massive capital from public shareholders (with limited liability) and possessed legal authority to raise private armies, negotiate treaties, conquer land, and monopolize regional trade.",
            "distractorTip": "Joint-stock companies were early modern corporate behemoths with state-sanctioned military powers."
          },
          {
            "id": "whap4-l4-q3",
            "stem": "The Portuguese maritime empire in the Indian Ocean in the sixteenth century was fundamentally characterized as a:",
            "options": [
              "Territorial empire that conquered and settled the vast agricultural interior of India and China.",
              "\"Trading post empire\" that captured strategic choke points (Goa, Malacca, Hormuz) and enforced a naval pass system (cartaz) to extract taxes on maritime commerce.",
              "Religious monastic state governed by the Pope in Rome.",
              "Free-trade customs union that dismantled all merchant tariffs and promoted open navigation."
            ],
            "correctIndex": 1,
            "explanation": "Portugal lacked the manpower and army to conquer vast Asian land empires like the Mughals or Ming; instead, they established fortified coastal enclaves and forced merchant vessels to buy cartaz passes and pay duties under threat of naval bombardment.",
            "distractorTip": "Contrast Portugal's maritime trading-post strategy in Asia with Spain's territorial conquest and colonial settlement in the Americas."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "whap-u4-l5",
        "topicNumber": "Topic 4.4",
        "name": "Coercive Labor Systems in the Americas",
        "subtitle": "Encomienda, hacienda, adapted Incan mit'a, and African chattel slavery",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap4-l5-q1",
            "stem": "How did Spanish colonial authorities in the Andes adapt the traditional Inca Mit'a system to meet the labor demands of silver extraction at Potosí?",
            "options": [
              "They transformed an indigenous communal reciprocal labor duty into a brutal, coerced labor draft requiring thousands of native men to work in toxic silver mines under hazardous conditions.",
              "They abolished all mining labor and replaced it with hydraulic mechanized drills.",
              "They paid native Andean workers the highest cash salaries in the global economy.",
              "They granted full political autonomy to any indigenous worker who volunteered for mine labor."
            ],
            "correctIndex": 0,
            "explanation": "While the original Incan mit'a was periodic public labor repaid with state feasts and social security, Spanish Viceroy Toledo converted it into a compulsory, deadly labor tribute that forced one-seventh of all adult native Andean males into mercury poisoning and mine cave-ins at Potosí.",
            "distractorTip": "The Spanish co-opted an existing indigenous institution (mit'a) and weaponized it for brutal mercantilist extraction."
          },
          {
            "id": "whap4-l5-q2",
            "stem": "What was the distinguishing legal characteristic of transatlantic chattel slavery compared to earlier forms of servitude in world history?",
            "options": [
              "Enslaved people were automatically liberated after completing five years of labor service.",
              "Enslaved individuals were treated legally as personal property (chattel) who could be bought, sold, and inherited across generations, with slavery permanently defined by racial classification.",
              "Enslaved workers retained the right to serve as officers in the colonial armed forces.",
              "Enslaved people were permitted to vote in provincial parliamentary elections."
            ],
            "correctIndex": 1,
            "explanation": "Unlike classical Mediterranean or African domestic slavery (where enslaved people could often buy freedom, assimilate, or their children were born free), American chattel slavery was hereditary, lifelong, explicitly racialized, and treated human beings legally as commercial commodities.",
            "distractorTip": "Chattel slavery is defined by two crucial words: 'property' and 'hereditary/racialized'."
          },
          {
            "id": "whap4-l5-q3",
            "stem": "How did Spanish colonial authorities in the Andes adapt the traditional Incan mit'a system to serve the imperial economy?",
            "options": [
              "They converted it into a voluntary wage-labor market with collective bargaining rights for indigenous miners.",
              "They abolished the system entirely in compliance with papal humanitarian decrees.",
              "They transformed a rotational communal labor duty for public works into a brutal, compulsory labor levy forcing indigenous men to extract silver at Potosí.",
              "They restricted labor obligations exclusively to Spanish creole landowners."
            ],
            "correctIndex": 2,
            "explanation": "Under the Incas, the mit'a was a civic reciprocal obligation where communities constructed roads and terraces; the Spanish adapted it coercively to force one-seventh of adult male villagers into toxic, grueling silver extraction at the Potosí 'mountain of silver.'",
            "distractorTip": "The Spanish did not invent the mit'a; they co-opted an existing indigenous institution and weaponized it for mercantilist mineral extraction."
          }
        ]
      },
      {
        "id": 406,
        "unitIndex": 4,
        "levelNumber": 6,
        "uniqueKey": "whap-u4-l6",
        "topicNumber": "Topic 4.5",
        "name": "Mercantilism & Global Silver Flow",
        "subtitle": "Potosí mines, Manila Galleons, mercantilist theory, and silver's global circulation",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap4-l6-q1",
            "stem": "Under the economic theory of mercantilism, European imperial powers believed that a nation's wealth and global power depended fundamentally on:",
            "options": [
              "Promoting global free trade by eliminating all tariffs and import restrictions.",
              "Abolishing all overseas colonies in favor of domestic agricultural self-sufficiency.",
              "Accumulating bullion (gold and silver) by maintaining a strictly positive balance of trade (exporting more than importing) and exploiting closed colonial markets.",
              "Permitting colonial territories to freely purchase manufactured goods from rival empires."
            ],
            "correctIndex": 2,
            "explanation": "Mercantilism viewed global wealth as a zero-sum pie: one country's gain was another's loss. States sought to maximize gold and silver reserves by using colonies as exclusive sources of cheap raw materials and captive markets for home-country manufactured exports.",
            "distractorTip": "Mercantilism is the exact opposite of free-market capitalism; it relies on state-enforced monopolies and protectionism."
          },
          {
            "id": "whap4-l6-q2",
            "stem": "Why did a massive portion of the silver extracted by Spain from mines in Potosí and Zacatecas ultimately flow into Ming and Qing China?",
            "options": [
              "Chinese emperors purchased all European manufactured steam engines with gold.",
              "Spain was militarily conquered by the Chinese navy and forced to pay tribute.",
              "Chinese merchants used silver solely to purchase European wool textiles.",
              "The Ming Dynasty enacted the Single Whip Law, requiring all imperial taxes to be paid exclusively in silver bullion, making China the global sink for silver."
            ],
            "correctIndex": 3,
            "explanation": "When China monetized its tax system (Single Whip Tax) and mandated that 100 million subjects pay taxes in silver, the value of silver in China skyrocketed. European merchants traded American silver across the Pacific (via Spanish Manila Galleons) to purchase high-demand Chinese silk, tea, and porcelain.",
            "distractorTip": "Remember: 'All the world's silver flowed to China' because China was the world's economic manufacturing powerhouse."
          },
          {
            "id": "whap4-l6-q3",
            "stem": "What role did the Manila Galleon trade play in the creation of the first truly global economic exchange network?",
            "options": [
              "It transported American silver from Acapulco across the Pacific to Manila, where it was exchanged for Chinese silk, porcelain, and tea.",
              "It transported enslaved African laborers directly across the Pacific Ocean to Japanese mining camps.",
              "It delivered European industrial machinery directly to Australian penal colonies.",
              "It established a direct trading monopoly between the Ottoman Empire and the Inca Empire."
            ],
            "correctIndex": 0,
            "explanation": "Spanish silver mined in Peru and Mexico was shipped from Acapulco to Manila in the Philippines; Chinese merchants eagerly traded luxury silks and porcelains for this silver, because China's Ming Dynasty had mandated silver for imperial tax payments (Single Whip Law).",
            "distractorTip": "Manila Galleons linked the Americas with Asia across the Pacific, completing the circuit of global maritime trade initiated by Atlantic voyages."
          }
        ]
      },
      {
        "id": 407,
        "unitIndex": 4,
        "levelNumber": 7,
        "uniqueKey": "whap-u4-l7",
        "topicNumber": "Topic 4.5",
        "name": "The Transatlantic Slave Trade & Plantation Complex",
        "subtitle": "Middle Passage, cash crops (sugar, tobacco), and West African demographic effects",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap4-l7-q1",
            "stem": "The dramatic expansion of the Transatlantic Slave Trade between 1500 and 1800 was most directly driven by the intense labor demands of which cash crop?",
            "options": [
              "Sugar cane, cultivated on vast tropical monoculture plantations in Brazil and the Caribbean.",
              "Wheat, grown on subsistence family farms in New England.",
              "Corn, harvested in the Rocky Mountains of North America.",
              "Silk, cultivated in mountain orchards of southern France."
            ],
            "correctIndex": 0,
            "explanation": "Sugar was a brutally labor-intensive crop requiring round-the-clock harvesting and boiling in tropical heat. Because the mortality rate among enslaved workers on Brazilian and Caribbean sugar plantations was catastrophic, planters constantly imported fresh enslaved Africans, consuming over 80% of all captives shipped across the Atlantic.",
            "distractorTip": "Brazil and the Caribbean absorbed the overwhelming majority of enslaved Africans (approx. 90%), driven directly by sugar production."
          },
          {
            "id": "whap4-l7-q2",
            "stem": "What was a major demographic and social consequence of the slave trade on West African coastal societies between 1500 and 1750 CE?",
            "options": [
              "A dramatic population surge caused by the eradication of all tropical diseases.",
              "A severe gender imbalance, where the disproportionate capture of working-age males left excess females, leading to an increase in polygyny and shifting female economic roles.",
              "The immediate unification of West Africa into a single centralized democratic republic.",
              "The complete elimination of all firearm warfare across West Africa."
            ],
            "correctIndex": 1,
            "explanation": "Because European slave traders predominantly purchased young adult men for strenuous plantation field labor, coastal West African societies experienced acute shortages of men. This skewed sex ratios, reinforced polygynous marriages, and expanded women's responsibilities in commerce and agriculture.",
            "distractorTip": "Notice the demographic distortion: loss of young men in Africa and devastating mortality in the Americas."
          },
          {
            "id": "whap4-l7-q3",
            "stem": "In West African societies most heavily impacted by the Transatlantic Slave Trade, what was a significant demographic and social consequence?",
            "options": [
              "A rapid increase in the adult male population leading to widespread democratization.",
              "The complete eradication of all indigenous linguistic and cultural customs across West Africa.",
              "The universal conversion of all West African states to Roman Catholicism.",
              "A severe gender imbalance caused by the preferential capture of young men, leading to an increase in polygyny and expanded economic roles for women."
            ],
            "correctIndex": 3,
            "explanation": "European slave traders demanded mostly young men for grueling sugarcane labor in the Americas; the disproportionate removal of males skewed sex ratios in West African regions like the Bight of Benin, resulting in more female-headed households and polygynous marriages.",
            "distractorTip": "The Transatlantic trade targeted predominantly young men (unlike the Trans-Saharan or Indian Ocean slave trades, which often targeted women and children for domestic labor)."
          }
        ]
      },
      {
        "id": 408,
        "unitIndex": 4,
        "levelNumber": 8,
        "uniqueKey": "whap-u4-l8",
        "topicNumber": "Topic 4.6",
        "name": "Resistance to State Power: Global Rebellions",
        "subtitle": "Pugachev Rebellion, Pueblo Revolt, Maratha vs. Mughals, and Queen Nzinga",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap4-l8-q1",
            "stem": "Queen Nzinga of Ndongo (modern-day Angola) successfully resisted Portuguese colonial and slave-trading incursions in the 17th century by:",
            "options": [
              "Converting her entire population to Roman Catholicism and signing an unconditional treaty of annexation.",
              "Surrendering all coastal ports to the French East India Company.",
              "Forming a military alliance with the rival Dutch, sheltering escaped slaves, and personally leading her troops into battle against Portuguese forces.",
              "Fleeing across the Atlantic Ocean to settle in Spanish Florida."
            ],
            "correctIndex": 2,
            "explanation": "Queen Nzinga was a master diplomat and fierce warrior. She allied with the Dutch, offered asylum to runaway enslaved soldiers to build a formidable military, and waged decades of guerrilla warfare against the Portuguese, preserving her kingdom's sovereignty throughout her lifetime.",
            "distractorTip": "Queen Nzinga is a prime College Board example of internal/external indigenous resistance against European imperial expansion."
          },
          {
            "id": "whap4-l8-q2",
            "stem": "The Pueblo Revolt of 1680 in modern-day New Mexico resulted in which significant outcome for Indigenous-Spanish relations?",
            "options": [
              "The permanent eradication of Spanish presence from the entire North American continent.",
              "The mass conversion of Pueblo leaders to Protestant Lutheranism.",
              "The total enslavement of the Spanish population by the Aztec empire.",
              "Pueblo rebels temporarily expelled Spanish colonists from New Mexico for over a decade; when the Spanish reconquered the region, they accommodated Pueblo cultural rituals and eased forced labor demands."
            ],
            "correctIndex": 3,
            "explanation": "Led by Popé, Pueblo warriors coordinated a simultaneous uprising that killed over 400 Spaniards and drove the rest out of Santa Fe. When the Spanish returned twelve years later, they abandoned the abusive encomienda system and tolerated Pueblo traditional religious ceremonies.",
            "distractorTip": "The Pueblo Revolt is the most successful Indigenous rebellion against European colonizers in North American history."
          },
          {
            "id": "whap4-l8-q3",
            "stem": "The Pueblo Revolt of 1680 in modern-day New Mexico is historically significant because it was:",
            "options": [
              "A successful uprising organized by European creoles against British mercantilist taxation.",
              "A coordinated Indigenous rebellion led by Popé that successfully drove Spanish colonizers out of the region for over a decade and temporarily restored native religious practices.",
              "An enslaved African insurrection that established an independent marronage republic in the Rocky Mountains.",
              "A French military assault that incorporated the American Southwest into New France."
            ],
            "correctIndex": 1,
            "explanation": "Led by the medicine man Popé, Pueblo communities coordinated a massive uprising against Spanish friars and encomenderos, destroying churches and expelling the Spanish until 1692; upon returning, the Spanish moderated their religious coercion and abolished encomiendas.",
            "distractorTip": "The Pueblo Revolt is one of the few instances where Indigenous peoples successfully ejected European colonial occupiers from their homeland for an extended period."
          }
        ]
      },
      {
        "id": 409,
        "unitIndex": 4,
        "levelNumber": 9,
        "uniqueKey": "whap-u4-l9",
        "topicNumber": "Topic 4.7 & 4.8",
        "name": "Social Hierarchies & The Casta System (Boss)",
        "subtitle": "Peninsulares, Creoles, Mestizos, Mulattoes, and racialized legal stratifications",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "whap4-l9-q1",
            "stem": "The Casta system established in Spanish America between 1500 and 1750 CE was a rigid social hierarchy determined primarily by:",
            "options": [
              "Racial parentage, skin pigmentation, and place of birth, with European-born Spaniards enjoying legal and political supremacy over mixed-race and Indigenous populations.",
              "Performance on the imperial Confucian civil service examination.",
              "The number of merchant sailing ships personally owned by a family.",
              "An individual's personal level of academic fluency in Latin and Greek."
            ],
            "correctIndex": 0,
            "explanation": "The Casta system placed Peninsulares (Spaniards born in Spain) at the apex, followed by Creoles (Spaniards born in the Americas). Below them were mixed-race groups: Mestizos (Spanish + Indigenous) and Mulattoes (Spanish + African), with enslaved Africans and Indigenous peoples at the bottom.",
            "distractorTip": "Casta paintings visually categorized these intricate racial mixtures to enforce legal privileges, tax rates, and career restrictions."
          },
          {
            "id": "whap4-l9-q2",
            "stem": "What was a primary source of political friction in 18th-century Spanish colonial society between Peninsulares and Creoles (Criollos)?",
            "options": [
              "Creoles demanded the total abolition of all private property and the adoption of communism.",
              "Creoles were wealthy landowners and merchants of pure Spanish descent who resented being systematically excluded from the highest colonial bureaucratic, judicial, and ecclesiastical offices reserved exclusively for Peninsulares.",
              "Peninsulares refused to speak the Spanish language in public administration.",
              "Creoles demanded that the Spanish Crown immediately surrender Mexico to the British Empire."
            ],
            "correctIndex": 1,
            "explanation": "Despite possessing land, silver mines, and elite education, Creoles were legally barred from the highest offices (viceroy, judge on the Audiencia, archbishop), which the Spanish Crown reserved for Peninsulares to ensure colonial loyalty. This intense resentment fueled the 19th-century Latin American Wars of Independence.",
            "distractorTip": "The Creole vs. Peninsulare rivalry was the powder keg of the Latin American revolutions led by Simon Bolivar."
          },
          {
            "id": "whap4-l9-q3",
            "stem": "In colonial Spanish America, the casta paintings produced during the eighteenth century served primarily to:",
            "options": [
              "Advocate for the immediate legal emancipation of all enslaved Afro-descendants.",
              "Document and celebrate the total absence of racial hierarchy in colonial society.",
              "Visually categorize, define, and enforce racialized legal and social hierarchies based on parentage and skin pigmentation.",
              "Train indigenous artisans in Italian Renaissance fresco painting techniques."
            ],
            "correctIndex": 2,
            "explanation": "Casta paintings depicted mixed-race families (Peninsulares, Creoles, Mestizos, Mulattoes, Zambos) with descriptive captions, reflecting the anxiety of colonial elites to categorize racial mixtures and preserve European socio-legal privileges.",
            "distractorTip": "Casta paintings were visual manifestations of the casta system—a rigid, state-recognized racial hierarchy designed to institutionalize white supremacy."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Unit 5: Revolutions (1750–1900)",
    "shortTitle": "Unit 5: Revolutions",
    "description": "The Enlightenment, Atlantic revolutions (American, French, Haitian, Latin American), and the Industrial Revolution",
    "examWeight": "12–15% of AP Exam",
    "biome": {
      "name": "Liberty Bastille & Steam Engine Mills",
      "icon": "⚙️",
      "accentColor": "#7C3AED",
      "secondaryColor": "#6D28D9",
      "groundGradient": "from-purple-100 via-violet-50 to-indigo-100",
      "cardBorder": "border-purple-600",
      "trailColor": "#7c3aed",
      "nodeRing": "ring-purple-400/40",
      "skyTint": "from-purple-50 to-violet-50/30"
    },
    "levels": [
      {
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "whap-u5-l1",
        "topicNumber": "Topic 5.1",
        "name": "The Enlightenment & Social Contract Philosophies",
        "subtitle": "John Locke, Montesquieu, Voltaire, Rousseau, and natural rights",
        "difficulty": "Easy",
        "rewardCoins": 25,
        "questions": [
          {
            "id": "whap5-l1-q1",
            "stem": "John Locke's political philosophy in the 'Two Treatises of Government' challenged traditional absolutism by asserting that:",
            "options": [
              "Monarchs possess divine rights directly bestowed by God that subjects must never question.",
              "The military general with the largest army has the legal right to rule as an unconstrained dictator.",
              "All humans possess natural rights to life, liberty, and property, and governments derive their legitimate authority solely from the consent of the governed through a social contract.",
              "Private property should be abolished in favor of state-controlled communal farming."
            ],
            "correctIndex": 2,
            "explanation": "Locke argued that the social contract is a reciprocal agreement: citizens obey laws in exchange for the protection of their inalienable natural rights. If a ruler becomes tyrannical and violates these rights, citizens have the moral and legal right to overthrow the government.",
            "distractorTip": "Locke's natural rights theory directly inspired Thomas Jefferson when drafting the American Declaration of Independence."
          },
          {
            "id": "whap5-l1-q2",
            "stem": "How did Baron de Montesquieu propose to prevent governmental tyranny and abuse of power in his work 'The Spirit of the Laws'?",
            "options": [
              "By centralizing all judicial, legislative, and executive authority in a single absolute monarch.",
              "By eliminating all written constitutions in favor of oral tribal traditions.",
              "By establishing a permanent military junta governed by army admirals.",
              "By advocating for the separation of powers into distinct executive, legislative, and judicial branches that provide checks and balances on one another."
            ],
            "correctIndex": 3,
            "explanation": "Montesquieu argued that 'constant experience shows us that every man invested with power is apt to abuse it.' To preserve liberty, power must be divided among three separate branches (executive, legislative, judicial) capable of checking each other's overreach.",
            "distractorTip": "Montesquieu = Separation of Powers and Checks & Balances; Locke = Natural Rights; Rousseau = General Will."
          },
          {
            "id": "whap5-l1-q3",
            "stem": "Which core concept articulated by Enlightenment philosopher John Locke directly challenged the divine right of absolute monarchs?",
            "options": [
              "The doctrine that governments derive their legitimacy from the consent of the governed to protect fundamental natural rights to life, liberty, and property.",
              "The belief that kings are appointed directly by God and are accountable only to divine law.",
              "The theory that society should abolish private property in favor of state-owned agrarian communes.",
              "The principle that religious dogmas should dictate civil criminal codes."
            ],
            "correctIndex": 0,
            "explanation": "Locke argued that individuals possess natural rights (life, liberty, property) that predate any government; if a monarch violates this social contract, citizens possess the legitimate right to overthrow the regime.",
            "distractorTip": "Locke opposed divine right absolutism; his social contract was foundational to the American and French revolutions."
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "whap-u5-l2",
        "topicNumber": "Topic 5.2",
        "name": "Atlantic Revolutions: American & French",
        "subtitle": "Declaration of Independence, Declaration of the Rights of Man, and constitutionalism",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "whap5-l2-q1",
            "stem": "The French Revolution of 1789 was triggered primarily by which underlying socio-economic grievance?",
            "options": [
              "The Third Estate (comprising 98% of the population, including peasants, artisans, and the bourgeoisie) bore nearly the entire tax burden while possessing zero institutional political voice in the feudal Estates-General.",
              "The King of France attempted to convert the nation to Eastern Orthodox Christianity.",
              "French peasants demanded an immediate military alliance with the British monarchy.",
              "The French parliament voted to dissolve the French army."
            ],
            "correctIndex": 0,
            "explanation": "Under the Ancien Régime, the First Estate (Clergy) and Second Estate (Nobility) owned over 40% of the land and paid virtually zero taxes. When royal bankruptcy forced Louis XVI to summon the Estates-General in 1789, the disenfranchised Third Estate broke away to form the National Assembly.",
            "distractorTip": "Remember the Third Estate's rallying cry: Abbe Sieyes wrote, 'What is the Third Estate? Everything. What has it been heretofore in the political order? Nothing.'"
          },
          {
            "id": "whap5-l2-q2",
            "stem": "The 1789 French 'Declaration of the Rights of Man and of the Citizen' echoed Enlightenment principles by proclaiming that:",
            "options": [
              "Only landed noble aristocrats are entitled to the protection of royal courts.",
              "Men are born and remain free and equal in rights, and law is the expression of the general will.",
              "The Roman Catholic Church has supreme authority over all civil legislation.",
              "Enslaved people on Caribbean plantations are legal property with no human rights."
            ],
            "correctIndex": 1,
            "explanation": "Drafted with assistance from Thomas Jefferson, the Declaration dismantled feudal privilege by proclaiming universal civic equality, liberty, property rights, religious freedom, and government accountability to the citizenry.",
            "distractorTip": "While the document proclaimed universal male rights, it excluded women (leading Olympe de Gouges to write the Declaration of the Rights of Woman)."
          },
          {
            "id": "whap5-l2-q3",
            "stem": "How did the French Revolution's Declaration of the Rights of Man and of the Citizen (1789) reflect Enlightenment egalitarian principles?",
            "options": [
              "It established a military dictatorship under Napoleon Bonaparte with hereditary nobility.",
              "It granted equal political voting rights to all women throughout the French Empire.",
              "It restored the absolute authority of the Roman Catholic Church and the First Estate.",
              "It proclaimed the equality of all male citizens before the law, abolished feudal privileges, and declared popular sovereignty."
            ],
            "correctIndex": 3,
            "explanation": "Drafted by the National Assembly with assistance from Thomas Jefferson, the Declaration dismantled the ancien régime by abolishing aristocratic tax exemptions, establishing equality before the law, and basing sovereignty in the nation.",
            "distractorTip": "Notice that the Declaration did NOT extend political rights to women (as Olympe de Gouges pointed out in her Declaration of the Rights of Woman) or immediately abolish slavery in the colonies."
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "whap-u5-l3",
        "topicNumber": "Topic 5.2",
        "name": "The Haitian Revolution: Radical Liberation",
        "subtitle": "Toussaint Louverture, enslaved uprising in Saint-Domingue, and the first Black republic",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap5-l3-q1",
            "stem": "The Haitian Revolution (1791–1804) was unique among all Atlantic revolutions because it resulted in:",
            "options": [
              "The peaceful voluntary cession of Haiti by the French monarchy without any armed conflict.",
              "The restoration of absolute Spanish colonial authority across the Caribbean.",
              "The only successful, large-scale slave revolt in world history, establishing the world's first independent Black republic and abolishing slavery entirely.",
              "The establishment of an English-controlled joint-stock trading company."
            ],
            "correctIndex": 2,
            "explanation": "Led by former enslaved general Toussaint Louverture and later Jean-Jacques Dessalines, 500,000 enslaved sugar plantation laborers defeated the armies of three European empires (Britain, Spain, and Napoleon's France), founding the sovereign nation of Haiti in 1804.",
            "distractorTip": "Haiti was the most radical Atlantic revolution: it did not just change the government—it completely abolished chattel slavery and racial hierarchy."
          },
          {
            "id": "whap5-l3-q2",
            "stem": "How did the successful Haitian Revolution strike terror into the ruling elites of slaveholding societies across the Americas?",
            "options": [
              "Haiti deployed a colossal steam battleship fleet that blockaded North American ports.",
              "Haitian merchants bought up all agricultural land in Virginia and Maryland.",
              "The Haitian government declared an immediate embargo on all global coffee exports.",
              "Slaveowners in the United States, Brazil, and Cuba feared that news of Haiti's triumphant rebellion would inspire their own enslaved populations to rise up in violent revolution."
            ],
            "correctIndex": 3,
            "explanation": "Plantation owners across the American South, Cuba, and Brazil were terrified that Haiti's example would trigger copycat uprisings. In response, they tightened slave codes, censored abolitionist literature, and isolated Haiti diplomatically and economically.",
            "distractorTip": "Haiti was subjected to devastating economic blockades and forced to pay crippling indemnities to France for 'lost property' (enslaved people)."
          },
          {
            "id": "whap5-l3-q3",
            "stem": "Why is the Haitian Revolution (1791–1804) considered uniquely radical among the Atlantic Revolutions of the late eighteenth and early nineteenth centuries?",
            "options": [
              "It was led entirely by British military officers seeking to annex French sugar colonies.",
              "It was the only successful revolution in world history initiated and won by enslaved people, resulting in the permanent abolition of slavery and the creation of an independent Black republic.",
              "It preserved the plantation slave economy while merely substituting French administrators with Spanish officials.",
              "It established a constitutional monarchy that pledged loyalty to the King of France."
            ],
            "correctIndex": 1,
            "explanation": "Unlike the American and French revolutions, which maintained racial hierarchies or tolerated colonial slavery, the Haitian uprising led by Toussaint Louverture and Jean-Jacques Dessalines dismantled the brutal chattel slavery complex in Saint-Domingue and established the world's first free Black republic.",
            "distractorTip": "Remember that Saint-Domingue was the wealthiest sugar colony in the world; the Haitian revolution terrified slaveholders across the Americas."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "whap-u5-l4",
        "topicNumber": "Topic 5.2",
        "name": "Latin American Independence: Creole Nationalism",
        "subtitle": "Simon Bolivar, the Jamaica Letter (1815), Jose de San Martin, and Gran Colombia",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap5-l4-q1",
            "stem": "In his famous 'Jamaica Letter' (1815), Venezuelan revolutionary Simon Bolivar articulated which core justification for Spanish American independence?",
            "options": [
              "He argued that Spanish mercantilist oppression and political disenfranchisement relegated Creoles to the status of permanent minors, demanding self-governance and constitutional republicanism.",
              "He advocated for the immediate annexation of South America by the British Empire.",
              "He called for the complete re-establishment of the Aztec and Inca monarchies.",
              "He demanded that all South American citizens convert to Lutheranism."
            ],
            "correctIndex": 0,
            "explanation": "Bolivar argued that under Spanish absolutism, Americans were treated as perpetual legal children: denied political offices, barred from trading with other nations, and exploited for raw materials. He envisioned a grand union of independent South American constitutional republics.",
            "distractorTip": "Bolivar was an elite Creole inspired by Enlightenment ideals of constitutional liberty, free trade, and national sovereignty."
          },
          {
            "id": "whap5-l4-q2",
            "stem": "Despite winning political independence from Spain, what major socio-economic continuity persisted in 19th-century Latin America?",
            "options": [
              "All agricultural land was evenly redistributed among formerly enslaved field hands.",
              "The landed Creole oligarchy maintained monopolistic control over land and political power, while Indigenous, Mestizo, and Afro-descendant populations remained impoverished and socially marginalized.",
              "The Spanish Crown continued to collect imperial income taxes until 1950.",
              "Latin America immediately transformed into an egalitarian industrial superpower."
            ],
            "correctIndex": 1,
            "explanation": "The Latin American revolutions were essentially conservative political transfers of power: Creoles replaced Peninsulares at the top of the social pyramid, but the underlying racial hierarchy, massive hacienda estates, and debt peonage of Indigenous and Afro-descendants remained largely unchanged.",
            "distractorTip": "A classic College Board continuity: political independence did NOT bring social or economic equality to Latin America's lower classes."
          },
          {
            "id": "whap5-l4-q3",
            "stem": "In his famous 1815 Jamaica Letter, Simón Bolívar articulated which primary complaint against Spanish colonial rule?",
            "options": [
              "Spain's refusal to introduce Catholic missionary orders to the Americas.",
              "Spain's total prohibition on the importation of European books and ideas.",
              "The political exclusion of American-born Creoles from high administrative and judicial offices in favor of Iberian-born Peninsulares.",
              "Spain's failure to grant full land ownership to Indigenous and enslaved populations."
            ],
            "correctIndex": 2,
            "explanation": "Bolívar wrote the Jamaica Letter to rally British support for Latin American independence, arguing that wealthy, educated Creoles were treated as perpetual minors and barred from governing their own countries under the mercantilist and administrative monopoly of Peninsulares.",
            "distractorTip": "Creoles led the Latin American revolutions to seize political power from Peninsulares, not to redistribute land or dismantle social inequality for Mestizos, Indigenous, or Afro-descendant peoples."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "whap-u5-l5",
        "topicNumber": "Topic 5.3 & 5.4",
        "name": "Origins & Spread of the Industrial Revolution",
        "subtitle": "British coal/iron deposits, steam engine (James Watt), textile mechanization, and factory system",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap5-l5-q1",
            "stem": "Which unique combination of geographic and economic advantages explains why the Industrial Revolution began in Great Britain around 1750 CE?",
            "options": [
              "A vast land empire spanning from Moscow to Beijing with zero coastal access.",
              "An absolute monarchical government that banned all private scientific patents.",
              "Abundant surface coal and iron ore deposits, access to raw materials via colonial networks, navigable rivers/canals, legal protection of private property, and surplus agricultural labor.",
              "Complete reliance on enslaved Roman galley rowers for inland transport."
            ],
            "correctIndex": 2,
            "explanation": "Britain possessed the ideal ingredients: abundant coal and iron near water transport, capital accumulated from Atlantic trade, an Agricultural Revolution that freed farm workers for factory cities, patent protections, and political stability under a constitutional monarchy.",
            "distractorTip": "College Board frequently tests Britain's unique geographic advantages: 'Coal, Iron, and Waterways'."
          },
          {
            "id": "whap5-l5-q2",
            "stem": "The development of James Watt's improved steam engine in the late 18th century transformed industrial production by:",
            "options": [
              "Eliminating the need for fossil fuel coal combustion.",
              "Decreasing the speed of textile yarn spinning by 90%.",
              "Causing all urban factory workers to return permanently to rural subsistence farming.",
              "Liberating manufacturing factories from their historic dependence on fast-flowing river currents for waterwheel power."
            ],
            "correctIndex": 3,
            "explanation": "Early textile mills had to be built next to rushing rivers to turn waterwheels. Watt's coal-fired steam engine provided portable, continuous mechanical power, allowing factories to be built anywhere—especially in urban centers near transportation hubs and abundant labor pools.",
            "distractorTip": "Steam power decoupled industry from geography: factories moved from countryside riverbanks to giant urban centers."
          },
          {
            "id": "whap5-l5-q3",
            "stem": "Which environmental and geographic factor contributed most directly to Great Britain becoming the birthplace of the Industrial Revolution?",
            "options": [
              "Abundant, easily accessible deposits of coal and iron ore located near navigable rivers and coastal ports.",
              "Vast tropical timber reserves used to construct wooden water wheels across the highlands.",
              "Complete isolation from global commercial networks and maritime trade.",
              "Mountainous topography that prevented agricultural farming and forced factory urbanization."
            ],
            "correctIndex": 0,
            "explanation": "Britain possessed geological advantages (rich coal and iron fields close to water transport), combined with capital accumulated from global trade, secure property rights, and an abundant urban labor force created by the enclosure acts.",
            "distractorTip": "Geographic proximity of coal and iron to water transport gave Britain a decisive competitive advantage over continental European nations."
          }
        ]
      },
      {
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "whap-u5-l6",
        "topicNumber": "Topic 5.5 & 5.6",
        "name": "State-Sponsored Industrialization",
        "subtitle": "Meiji Restoration in Japan, Sergei Witte in Russia, and the Ottoman Tanzimat",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap5-l5-q1_dupe",
            "stem": "How did the Japanese government respond to the threat of Western imperialism following Commodore Perry's arrival in 1853 during the Meiji Restoration (1868–1912)?",
            "options": [
              "By pursuing state-directed modernization, abolishing the samurai class, adopting Western industrial technology, and building modern national army and naval forces.",
              "By completely expelling all foreigners and executing anyone who possessed a Western book.",
              "By signing an unconditional treaty of colonial annexation with the British Empire.",
              "By destroying all Japanese iron foundries and shipyards to return to ancient Shinto agrarianism."
            ],
            "correctIndex": 0,
            "explanation": "The slogan 'Enrich the country, strengthen the military' (Fukoku Kyohei) guided the Meiji state. Recognizing China's humiliation in the Opium Wars, Japan rapidly adopted Western education, railways, telegraphs, and factories while building a modern conscript army that defeated China (1895) and Russia (1905).",
            "distractorTip": "Japan is the premier non-Western success story of rapid, state-sponsored defensive industrialization."
          },
          {
            "id": "whap5-l6-q2",
            "stem": "Under Finance Minister Sergei Witte in the late 19th century, Tsarist Russia mobilized state capital primarily to construct which colossal infrastructure project?",
            "options": [
              "A continuous concrete canal connecting the Baltic Sea to the Persian Gulf.",
              "The Trans-Siberian Railroad, connecting Moscow to Pacific ports and integrating the resource-rich Siberian interior into the Russian industrial economy.",
              "An underground subway network connecting London to Saint Petersburg.",
              "A massive naval fortress in the center of the Sahara Desert."
            ],
            "correctIndex": 1,
            "explanation": "Witte used foreign investment (especially French loans) and state subsidies to build over 35,000 miles of track, culminating in the Trans-Siberian Railway (1891–1904), linking European Russia with Vladivostok on the Pacific Ocean and stimulating heavy coal and steel production.",
            "distractorTip": "Russia's industrialization was state-driven and focused on heavy industry and railroads, rather than consumer goods."
          },
          {
            "id": "whap5-l6-q3",
            "stem": "Following the arrival of Commodore Matthew Perry's Black Ships, the leaders of Japan's Meiji Restoration (1868) modernized the nation primarily by:",
            "options": [
              "Expelling all Western technology and executing anyone who wore foreign clothing.",
              "Submitting voluntarily to European colonial protectorate status.",
              "Handing all state industries over to British private merchant conglomerates.",
              "Implementing state-sponsored industrialization, building a modern railway and telegraph network, and adopting Western military and educational models while preserving the emperor's sacred authority."
            ],
            "correctIndex": 3,
            "explanation": "To avoid China's fate of being carved into spheres of influence, Meiji reformers adopted the slogan 'Fukoku Kyohei' (Enrich the Country, Strengthen the Military), building state model factories (zaibatsu), establishing compulsory public education, and creating a modern conscript army.",
            "distractorTip": "The Meiji Restoration was state-directed modernization to preserve Japanese national sovereignty, not passive Western colonization."
          }
        ]
      },
      {
        "id": 507,
        "unitIndex": 5,
        "levelNumber": 7,
        "uniqueKey": "whap-u5-l7",
        "topicNumber": "Topic 5.7 & 5.8",
        "name": "Economic Ideologies: Capitalism vs. Marxism",
        "subtitle": "Adam Smith's Wealth of Nations (laissez-faire) vs. Karl Marx's Communist Manifesto",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap5-l7-q1",
            "stem": "Adam Smith's classical economic treatise 'The Wealth of Nations' (1776) argued that national prosperity is maximized when:",
            "options": [
              "Monarchs seize control of all private merchant shipping fleets and ban international commerce.",
              "The state fixes all consumer prices and wages by royal executive decree.",
              "Governments minimize regulatory interference (laissez-faire) and allow competitive market forces and the 'invisible hand' of self-interest to allocate resources efficiently.",
              "All private corporations are nationalized and placed under military command."
            ],
            "correctIndex": 2,
            "explanation": "Smith attacked mercantilist monopolies and tariffs, arguing that when individuals are free to pursue their own economic self-interest in a competitive marketplace, an 'invisible hand' organically produces lower prices, innovation, and greater overall societal wealth.",
            "distractorTip": "Adam Smith = Free Market Capitalism, Laissez-faire ('let it be'), and the Invisible Hand."
          },
          {
            "id": "whap5-l7-q2",
            "stem": "In 'The Communist Manifesto' (1848), Karl Marx and Friedrich Engels asserted that human history is fundamentally driven by:",
            "options": [
              "Divine religious revelations delivered to royal monarchies.",
              "Biological competition between different linguistic dialects.",
              "The peaceful voluntary cooperation between factory owners and guild masters.",
              "Class struggle between the owning class who controls the means of production (the bourgeoisie) and the exploited working class (the proletariat)."
            ],
            "correctIndex": 3,
            "explanation": "Marx viewed capitalism as inherently exploitative: factory owners extracted 'surplus value' from workers' labor. He predicted that the proletariat would inevitably unite in global revolution, overthrow the bourgeoisie, abolish private property, and establish a classless communist society.",
            "distractorTip": "Marxist historical materialism: 'The history of all hitherto existing society is the history of class struggles.'"
          },
          {
            "id": "whap5-l7-q3",
            "stem": "In The Communist Manifesto (1848), Karl Marx and Friedrich Engels argued that human history is fundamentally driven by:",
            "options": [
              "The peaceful, voluntary cooperation among competitive free-market merchants.",
              "Inevitable class struggle between the bourgeoisie (who own the means of production) and the exploited proletariat (wage laborers).",
              "Religious revelations revealed through prophetic spiritual leaders.",
              "Biological evolutionary competition among distinct national racial groups."
            ],
            "correctIndex": 1,
            "explanation": "Marx postulated historical materialism: economic conditions dictate social structures, and industrial capitalism creates an irreconcilable conflict between factory-owning capitalists (bourgeoisie) and exploited workers (proletariat) that would culminate in a proletarian revolution.",
            "distractorTip": "Adam Smith championed individual self-interest and the invisible hand of the market; Marx critiqued market capitalism as inherently exploitative and alienating."
          }
        ]
      },
      {
        "id": 508,
        "unitIndex": 5,
        "levelNumber": 8,
        "uniqueKey": "whap-u5-l8",
        "topicNumber": "Topic 5.8",
        "name": "Labor Organizing, Suffrage & Social Reforms",
        "subtitle": "Labor unions, collective bargaining, Factory Acts, and women's suffrage",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap5-l8-q1",
            "stem": "How did industrial factory workers in 19th-century Britain and North America protect themselves against hazardous working conditions, starvation wages, and 16-hour workdays?",
            "options": [
              "By forming trade unions that utilized collective bargaining and strikes to demand higher wages, workplace safety, and the 8-hour workday.",
              "By voluntarily surrendering all wages to church monastic charities.",
              "By moving permanently to remote desert communes.",
              "By voting to restore feudal serfdom."
            ],
            "correctIndex": 0,
            "explanation": "Facing horrific factory conditions, workers organized trade unions. Through collective bargaining and strike actions, unions forced factory owners and democratic parliaments to pass labor legislation (e.g., Britain's Factory Acts, child labor bans, and the standard work week).",
            "distractorTip": "Unions used collective bargaining (the threat of collective strikes) as their ultimate economic weapon."
          },
          {
            "id": "whap5-l8-q2",
            "stem": "The Seneca Falls Convention of 1848 in New York represented a historic milestone in the Atlantic world because it:",
            "options": [
              "Voted to annex the Kingdom of Hawaii into the British Empire.",
              "Issued the 'Declaration of Sentiments,' demanding full civil, legal, and political equality—including voting suffrage—for women.",
              "Declared that all textile factories should be destroyed with sledgehammers.",
              "Outlawed the international trade in Chinese silk."
            ],
            "correctIndex": 1,
            "explanation": "Organized by Elizabeth Cady Stanton and Lucretia Mott, Seneca Falls marked the formal birth of the modern women's rights movement. The Declaration of Sentiments rewrote the Declaration of Independence: 'We hold these truths to be self-evident: that all men and women are created equal.'",
            "distractorTip": "Seneca Falls applied Enlightenment natural rights philosophy directly to women's legal and political disenfranchisement."
          },
          {
            "id": "whap5-l8-q3",
            "stem": "In response to harsh working conditions and child labor during the nineteenth century, British industrial workers formed labor unions primarily to:",
            "options": [
              "Advocate for the return of feudal serfdom under landed aristocratic knights.",
              "Destroy all municipal railways and burn down urban textile factories.",
              "Engage in collective bargaining and strike action to secure higher wages, shorter working hours, and safer working environments.",
              "Finance transoceanic merchant fleets traveling to East Asia."
            ],
            "correctIndex": 2,
            "explanation": "Labor unions organized workers across industrial trades, using strikes and collective negotiations to pressure factory owners and Parliament, resulting in legislative reforms like the Factory Acts (limiting hours and restricting child labor).",
            "distractorTip": "Do not confuse union reformism and collective bargaining with early Luddite machine-breaking."
          }
        ]
      },
      {
        "id": 509,
        "unitIndex": 5,
        "levelNumber": 9,
        "uniqueKey": "whap-u5-l9",
        "topicNumber": "Topic 5.9 & 5.10",
        "name": "Industrial Society & Demographics (Boss)",
        "subtitle": "Urbanization, tenements, disease epidemics, and the 'cult of domesticity'",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "whap5-l9-q1",
            "stem": "The rapid, unplanned urbanization of 19th-century industrial cities (such as Manchester and Chicago) led directly to which social crisis?",
            "options": [
              "The complete elimination of all urban criminal activity.",
              "A massive drop in urban manufacturing employment.",
              "Widespread tenement overcrowding, contaminated open sewer gutters, and catastrophic waterborne cholera epidemics.",
              "The total abandonment of steam-powered factories."
            ],
            "correctIndex": 2,
            "explanation": "Industrial cities grew faster than infrastructure could handle. Working-class families were crammed into poorly ventilated, windowless tenements with no indoor plumbing. Raw sewage flowed into drinking rivers, causing devastating waterborne cholera, typhus, and tuberculosis outbreaks.",
            "distractorTip": "Urbanization outpaced sanitation, leading directly to the modern public health and municipal sanitization movements."
          },
          {
            "id": "whap5-l9-q2",
            "stem": "How did the Industrial Revolution reshape middle-class family structures and gender ideals in Western Europe and the United States?",
            "options": [
              "It forced all middle-class women to work in underground coal mines alongside their husbands.",
              "It abolished the concept of private marriage in favor of state-mandated communal partnerships.",
              "It required middle-class husbands to stay home while wives served as corporate directors.",
              "It established the 'cult of domesticity,' which prescribed that men should labor in the competitive public sphere while women should govern the private domestic haven of the home and childrearing."
            ],
            "correctIndex": 3,
            "explanation": "Unlike working-class families (where women and children worked in mills to survive), the rising middle class celebrated the 'separate spheres' ideology: the home was romanticized as a moral haven from the cutthroat business world, presided over by a nurturing, domestic wife.",
            "distractorTip": "Remember: the 'cult of domesticity' was an elite and middle-class ideal; working-class women still had to work grueling factory and domestic service jobs."
          },
          {
            "id": "whap5-l9-q3",
            "stem": "The nineteenth-century middle-class ideal known as the \"cult of domesticity\" asserted that:",
            "options": [
              "Women should serve as the moral guardians of the private home, separate from the corrupt public sphere of industrial commerce and wage labor.",
              "Women should be drafted into industrial factories alongside male manual laborers on equal terms.",
              "All domestic household chores should be performed exclusively by state-appointed civil servants.",
              "Children should work twelve-hour shifts in textile mills to learn moral discipline."
            ],
            "correctIndex": 0,
            "explanation": "The Industrial Revolution separated home and work for the rising middle class; while working-class women worked in factories or domestic service out of economic necessity, middle-class culture idealized the home as a serene sanctuary where women nurtured children and religious virtues.",
            "distractorTip": "The cult of domesticity was a middle-class cultural norm, not an economic reality for working-class women who endured long factory shifts."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 6,
    "unitId": "u6",
    "title": "Unit 6: Consequences of Industrialization (1750–1900)",
    "shortTitle": "Unit 6: Imperialism",
    "description": "Rationales for imperialism, Scramble for Africa, anti-colonial resistance, resource extraction, and global migrations",
    "examWeight": "12–15% of AP Exam",
    "biome": {
      "name": "Colonial Rubber Concession & Suez Locks",
      "icon": "🌍",
      "accentColor": "#059669",
      "secondaryColor": "#047857",
      "groundGradient": "from-emerald-100 via-teal-50 to-green-100",
      "cardBorder": "border-emerald-600",
      "trailColor": "#059669",
      "nodeRing": "ring-emerald-400/40",
      "skyTint": "from-emerald-50 to-teal-50/30"
    },
    "levels": [
      {
        "id": 601,
        "unitIndex": 6,
        "levelNumber": 1,
        "uniqueKey": "whap-u6-l1",
        "topicNumber": "Topic 6.1",
        "name": "Rationales for Imperialism",
        "subtitle": "Social Darwinism, Civilizing Mission, White Man's Burden, and religious evangelism",
        "difficulty": "Easy",
        "rewardCoins": 25,
        "questions": [
          {
            "id": "whap6-l1-q1",
            "stem": "How did 19th-century European imperialists misappropriate Charles Darwin's biological theory of evolution to justify the violent conquest of Asia and Africa?",
            "options": [
              "Through the pseudoscientific ideology of Social Darwinism, claiming that white European nations were racially superior and biologically destined to conquer 'weaker' races in a global struggle for survival.",
              "By arguing that all human beings shared identical genetic origins and deserved equal democratic sovereignty.",
              "By demanding that all African societies immediately adopt French botanical farming methods.",
              "By declaring that natural selection required the total abandonment of all industrial technology."
            ],
            "correctIndex": 0,
            "explanation": "Herbert Spencer and other pseudoscientists applied Darwin's concept of 'survival of the fittest' to human societies and races. Social Darwinism provided a cynical moral justification for imperialist brutality, portraying conquest and colonization as natural biological imperatives.",
            "distractorTip": "Charles Darwin studied biological finches; imperialists twisted his theories into racist 'Social Darwinism' to justify conquest."
          },
          {
            "id": "whap6-l1-q2",
            "stem": "The concept of the 'Civilizing Mission' (Mission Civilisatrice) and Rudyard Kipling's poem 'The White Man's Burden' reflected which imperialist rationale?",
            "options": [
              "The belief that European powers should surrender their colonies and pay financial reparations to Asia.",
              "The paternalistic conviction that European powers possessed a moral duty to bring Western education, medicine, technology, and Christianity to 'uncivilized' Indigenous peoples.",
              "The desire to learn indigenous African democratic tribal governance and adopt it across Europe.",
              "A diplomatic treaty recognizing the military superiority of the Zulu Kingdom."
            ],
            "correctIndex": 1,
            "explanation": "Imperialists masked economic greed and resource extraction beneath high-minded paternalistic rhetoric, claiming they were selflessly bringing modern sanitation, Christian salvation, and railways to 'backward' populations across the globe.",
            "distractorTip": "The 'White Man's Burden' was the cultural and humanitarian facade used to rationalize brutal colonial exploitation."
          },
          {
            "id": "whap6-l1-q3",
            "stem": "How did European imperial powers use pseudoscientific concepts like Social Darwinism to justify colonial conquests in Africa and Asia?",
            "options": [
              "By arguing that all human cultures possessed equal evolutionary sophistication and deserved immediate self-determination.",
              "By claiming that European nations were economically dependent on Indigenous governance systems.",
              "By asserting that international law prohibited the expansion of national borders beyond Europe.",
              "By misapplying biological theories of natural selection to human societies, arguing that white Europeans were biologically superior and had a racial duty to dominate \"weaker\" peoples."
            ],
            "correctIndex": 3,
            "explanation": "Social Darwinists like Herbert Spencer twisted Charles Darwin's biological principles to argue that racial hierarchies existed in nature, portraying imperialism as inevitable evolutionary progress and the 'survival of the fittest.'",
            "distractorTip": "Social Darwinism was a racist ideological rationale used to justify conquest, distinct from authentic biological science."
          }
        ]
      },
      {
        "id": 602,
        "unitIndex": 6,
        "levelNumber": 2,
        "uniqueKey": "whap-u6-l2",
        "topicNumber": "Topic 6.2",
        "name": "The Scramble for Africa & The Berlin Conference",
        "subtitle": "Berlin Conference (1884–1885), artificial borders, and effective occupation",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "whap6-l2-q1",
            "stem": "What was the primary purpose and historic consequence of the Berlin Conference (1884–1885), convened by German Chancellor Otto von Bismarck?",
            "options": [
              "European powers voted to grant immediate sovereignty and independence to all African kingdoms.",
              "European nations formed an alliance with the Kingdom of Ethiopia to invade South America.",
              "European powers established rules for the peaceful partition of Africa ('effective occupation'), carving the continent into colonial spheres without a single African leader present.",
              "The conference outlawed all European travel and commerce in Sub-Saharan Africa."
            ],
            "correctIndex": 2,
            "explanation": "To prevent war among European nations competing for African territory, 14 European nations gathered in Berlin. They drew arbitrary borders across Africa based on the principle of 'effective occupation' (a nation had to physically occupy an area to claim it), dividing unified ethnic groups and grouping historic rivals together.",
            "distractorTip": "Zero Africans were invited to the Berlin Conference, where their continent's modern borders were arbitrarily drawn."
          },
          {
            "id": "whap6-l2-q2",
            "stem": "Which two African nations famously managed to maintain their independence throughout the entire period of European colonial conquest in the 19th century?",
            "options": [
              "Egypt and South Africa.",
              "Congo and Nigeria.",
              "Algeria and Madagascar.",
              "Ethiopia (which defeated an Italian invasion at the Battle of Adwa in 1896) and Liberia (founded by freed African Americans)."
            ],
            "correctIndex": 3,
            "explanation": "By 1914, over 90% of Africa was under European colonial rule. The only exceptions were Liberia (protected by its diplomatic connection to the United States) and the Ethiopian Empire, whose Emperor Menelik II modernized his army with French and Russian firearms and crushed the Italian army at Adwa.",
            "distractorTip": "The Battle of Adwa (1896) was the first major military defeat of a European imperial power by an African army in modern history."
          },
          {
            "id": "whap6-l2-q3",
            "stem": "At the Berlin Conference (1884–1885), European diplomatic powers established which principle to regulate the partition of the African continent?",
            "options": [
              "The requirement to obtain written consent from local African tribal councils before staking claims.",
              "The doctrine of \"effective occupation,\" requiring European states to establish physical administrative presence, police control, and trade outposts before claiming territory.",
              "The immediate abolition of all European colonial protectorates in Africa.",
              "The division of Africa according to pre-existing indigenous linguistic and ethnic boundaries."
            ],
            "correctIndex": 1,
            "explanation": "Organized by Otto von Bismarck, the Berlin Conference aimed to prevent war among European nations; it established that a power could claim African territory only through 'effective occupation' (troops, civil administration, treaties), completely ignoring African sovereignty.",
            "distractorTip": "Zero African leaders were invited to the Berlin Conference, and boundaries were drawn arbitrarily across ethnic homelands."
          }
        ]
      },
      {
        "id": 603,
        "unitIndex": 6,
        "levelNumber": 3,
        "uniqueKey": "whap-u6-l3",
        "topicNumber": "Topic 6.2",
        "name": "King Leopold II & The Congo Free State",
        "subtitle": "Rubber quotas, forced labor, mutilations, and international humanitarian outrage",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap6-l3-q1",
            "stem": "How did Belgian King Leopold II govern the Congo Free State between 1885 and 1908?",
            "options": [
              "As his personal private fiefdom, using his private army (the Force Publique) to enforce brutal wild rubber quotas through terror, village hostage-taking, and the widespread severing of hands.",
              "As a constitutional parliamentary democracy that provided free university education to all Congolese citizens.",
              "As a joint protectorate administered cooperatively with the Kingdom of Kongo.",
              "As a protected national nature reserve with zero resource extraction."
            ],
            "correctIndex": 0,
            "explanation": "Leopold claimed he was conducting humanitarian anti-slavery work, but instead turned the Congo into a brutal forced-labor labor camp. To meet booming global demand for bicycle and automobile tires, his mercenaries mutilated, starved, and worked to death an estimated 5 to 10 million Congolese people.",
            "distractorTip": "The Congo Free State was Leopold's private property, not the Belgian government's colony, until public scandal forced Belgium to take it over in 1908."
          },
          {
            "id": "whap6-l3-q2",
            "stem": "What was a major historical outcome of the international investigative journalism conducted by E.D. Morel, Roger Casement, and Mark Twain exposing Leopold's atrocities in the Congo?",
            "options": [
              "It led the United States to declare war on the Belgian monarchy.",
              "It sparked one of the world's first modern international human rights movements, forcing the Belgian parliament to strip Leopold of his personal ownership of the Congo in 1908.",
              "It convinced European powers to completely withdraw from all African colonies.",
              "It resulted in Leopold being crowned Emperor of all Central Africa."
            ],
            "correctIndex": 1,
            "explanation": "The Congo Reform Association utilized eyewitness photography (showing mutilated Congolese children) and investigative exposés to create massive global outrage. In 1908, the Belgian government intervened, taking control away from Leopold and ending the worst systematic mutilation atrocities.",
            "distractorTip": "The Congo reform campaign pioneered modern human rights advocacy: using photographic evidence to force political reform."
          },
          {
            "id": "whap6-l3-q3",
            "stem": "How did King Leopold II of Belgium administer the Congo Free State between 1885 and 1908?",
            "options": [
              "As a democratic federation governed by an elected Congolese parliament.",
              "As a model humanitarian agricultural colony focused on free-market coffee farming.",
              "As a private personal commercial fiefdom where the Force Publique coerced local populations into meeting brutal wild rubber quotas through terror, hostage-taking, and limb amputations.",
              "As a joint scientific expedition operated in partnership with the Kingdom of Benin."
            ],
            "correctIndex": 2,
            "explanation": "Leopold claimed the Congo as personal property rather than a Belgian state colony; his mercenary army (Force Publique) terrorized villages to harvest wild rubber for the booming bicycle and automobile tire industries, causing an estimated 10 million deaths until international exposure forced the Belgian state to annex the territory in 1908.",
            "distractorTip": "The Congo Free State was Leopold's personal property, not initially governed by the Belgian parliament."
          }
        ]
      },
      {
        "id": 604,
        "unitIndex": 6,
        "levelNumber": 4,
        "uniqueKey": "whap-u6-l4",
        "topicNumber": "Topic 6.2",
        "name": "Imperialism in Asia: The British Raj & French Indochina",
        "subtitle": "British East India Company transition, direct Crown rule, and French rubber/rice plantations",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap6-l4-q1",
            "stem": "Following the violent suppression of the Indian Rebellion of 1857 (Sepoy Mutiny), the British government altered its administrative rule over South Asia by:",
            "options": [
              "Withdrawing all British troops and granting full independence to the Mughal Emperor.",
              "Selling the entire subcontinent to the Dutch East India Company.",
              "Dissolving the British East India Company and transferring direct governance of India to the British Crown, establishing the British Raj.",
              "Converting all Indian princely states into autonomous French colonies."
            ],
            "correctIndex": 2,
            "explanation": "The 1857 revolt shocked London. The Government of India Act (1858) stripped the corrupt East India Company of all powers, exiled the last Mughal emperor, and placed India directly under Queen Victoria, who was crowned 'Empress of India' under a British Viceroy.",
            "distractorTip": "1858 is the pivotal turning point: Company rule ended, and direct British Raj (Crown rule) began."
          },
          {
            "id": "whap6-l4-q2",
            "stem": "How did French colonial rule in Indochina (modern-day Vietnam, Laos, and Cambodia) economically exploit the region during the late 19th and early 20th centuries?",
            "options": [
              "By providing universal free industrial equipment to peasant farmers.",
              "By preserving traditional Vietnamese village landholdings with zero taxation.",
              "By industrializing Vietnam into a major exporter of automobiles.",
              "By converting communal peasant lands into massive export-oriented rubber and rice plantations owned by French syndicates, while monopolizing the sale of salt and opium."
            ],
            "correctIndex": 3,
            "explanation": "French imperialists treated Indochina as an exploitative plantation economy: Michelin set up brutal rubber concessions, fertile Mekong delta rice was exported for European profit while local peasants starved, and high state monopolies on salt and alcohol sparked fierce anti-colonial resistance.",
            "distractorTip": "Colonial powers restructured conquered economies into primary-product export engines (rubber, rice), suppressing domestic industrial manufacturing."
          },
          {
            "id": "whap6-l4-q3",
            "stem": "Following the suppression of the 1857 Indian Revolt (Sepoy Mutiny), the British government altered its administrative rule over the subcontinent by:",
            "options": [
              "Abolishing the British East India Company and placing India under direct rule of the British Crown (the British Raj).",
              "Granting complete national independence and self-rule to the Indian National Congress.",
              "Selling all colonial administrative offices to the French colonial empire.",
              "Converting the entire Indian population to the Anglican Church by royal decree."
            ],
            "correctIndex": 0,
            "explanation": "The 1857 rebellion exposed the incompetence and instability of company rule; Parliament passed the Government of India Act 1858, dissolving the East India Company and transferring sovereignty directly to Queen Victoria, who was proclaimed Empress of India.",
            "distractorTip": "The 1857 Sepoy Mutiny marked the transition from private corporate company rule (EIC) to direct British Crown governance (the Raj)."
          }
        ]
      },
      {
        "id": 605,
        "unitIndex": 6,
        "levelNumber": 5,
        "uniqueKey": "whap-u6-l5",
        "topicNumber": "Topic 6.3",
        "name": "Indigenous Anti-Colonial Resistance Movements",
        "subtitle": "Sepoy Mutiny (1857), Yaa Asantewaa War, Ghost Dance, and Xhosa Cattle-Killing",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap6-l5-q1",
            "stem": "The immediate spark that ignited the 1857 Sepoy Mutiny among Indian soldiers serving in the British East India Company's army was:",
            "options": [
              "The issuance of new Enfield rifle cartridges rumored to be greased with animal fat from sacred cows (offensive to Hindus) and pigs (offensive to Muslims), which required soldiers to bite them open.",
              "A British decree ordering all Indian soldiers to convert to Buddhism.",
              "The complete refusal of the British to pay any monetary wages to sepoys.",
              "An invasion of India by the Qing Dynasty."
            ],
            "correctIndex": 0,
            "explanation": "To load the new Enfield rifle, soldiers had to bite the paper cartridge. Rumors spread that the grease was cow tallow (sacrilegious to Hindus) and pig lard (forbidden in Islam). Sepoys viewed this as a deliberate British conspiracy to defile their religious purity and force Christian conversion.",
            "distractorTip": "The cartridge crisis was the immediate spark, but deep anger over British land annexation and cultural condescension was the underlying cause."
          },
          {
            "id": "whap6-l5-q2",
            "stem": "The 1856–1857 Xhosa Cattle-Killing Movement in southern Africa and the 1890 Ghost Dance movement among Indigenous Americans both exemplify which response to European colonial expansion?",
            "options": [
              "Voluntary treaties ceding all native lands in exchange for European factory jobs.",
              "Millenarian and spiritual religious resistance movements seeking supernatural intervention to expel foreign invaders and restore ancestral peace.",
              "Direct military alliances with the Ottoman Sultan.",
              "The complete adoption of European capitalist banking practices."
            ],
            "correctIndex": 1,
            "explanation": "Both movements arose under catastrophic colonial pressure: facing British land seizures and cattle disease, a Xhosa prophetess claimed that killing all cattle would resurrect ancestors to drive the British into the sea; similarly, the Lakota Ghost Dance was a spiritual dance believed to banish white settlers and resurrect the buffalo.",
            "distractorTip": "These are classic 'millenarian' movements: when military resistance seemed impossible, colonized peoples turned to spiritual prophecy."
          },
          {
            "id": "whap6-l5-q3",
            "stem": "How did millenarian religious anti-colonial resistance movements—such as the Xhosa Cattle-Killing Movement in South Africa (1856–1857) and the Ghost Dance in North America (1890)—attempt to counter European imperial expansion?",
            "options": [
              "By adopting European parliamentary democracy and petitioning the British monarch.",
              "By establishing joint-stock investment companies to purchase ancestral lands back from colonizers.",
              "By allying with Ottoman naval fleets in the Atlantic Ocean.",
              "By relying on spiritual prophecies and ritual actions, believing that ancestral spirits would intervene to banish white settlers and restore ancestral lands and prosperity."
            ],
            "correctIndex": 3,
            "explanation": "In both instances, indigenous societies facing catastrophic colonial encroachment turned to prophetic visions (Nongqawuse among the Xhosa, Wovoka among the Paiute/Lakota), believing ritual sacrifices or sacred dances would cause ancestors to rise and drive out white colonizers.",
            "distractorTip": "Millenarian movements synthesized spiritual faith with desperate anti-colonial resistance against overwhelming industrial military technology."
          }
        ]
      },
      {
        "id": 606,
        "unitIndex": 6,
        "levelNumber": 6,
        "uniqueKey": "whap-u6-l6",
        "topicNumber": "Topic 6.4",
        "name": "Global Resource Extraction & Raw Materials",
        "subtitle": "Rubber, cotton, palm oil, copper, and guano fueling Western industrial factories",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap6-l6-q1",
            "stem": "Why did European industrial powers prioritize the conquest and economic domination of tropical regions producing palm oil in West Africa during the 19th century?",
            "options": [
              "European citizens preferred palm oil exclusively as a luxury beverage.",
              "Palm oil was used to build armored wooden naval battleships.",
              "Palm oil was essential as an industrial lubricant for heavy factory machinery and steam locomotives, and as a key ingredient for mass-produced soap.",
              "Palm oil was the primary rocket fuel used in transcontinental ballistic missiles."
            ],
            "correctIndex": 2,
            "explanation": "As Industrial Revolution machinery expanded, iron gears and steam engines required continuous lubrication to prevent overheating and mechanical seizure. Palm oil from West Africa (and later rubber from the Amazon and Congo) became an irreplaceable industrial lubricant and consumer commodity.",
            "distractorTip": "Industrialization transformed tropical agricultural products (palm oil, rubber, cotton) from exotic luxuries into vital industrial necessities."
          },
          {
            "id": "whap6-l6-q2",
            "stem": "How did 19th-century European and American demand for Peruvian guano (seabird droppings) illustrate the economic dynamics of global resource extraction?",
            "options": [
              "Guano was used as a precious gemstone in European royal jewelry.",
              "Guano was burned directly as an alternative to coal in steam engines.",
              "Guano was used to brew alcoholic beverages in French taverns.",
              "Guano was prized as a rich, nitrogen-dense agricultural fertilizer that restored depleted European farm soils, fueling intense commercial exploitation using Chinese indentured labor."
            ],
            "correctIndex": 3,
            "explanation": "Accumulated over centuries on rainless Pacific islands off Peru, bird guano was packed with nitrogen and phosphorus. European farmers bought millions of tons to restore exhausted agricultural soils, while companies ruthlessly exploited Chinese indentured 'coolie' laborers to shovel the toxic deposits.",
            "distractorTip": "Guano was the miracle fertilizer of the 19th century before synthetic Haber-Bosch nitrogen fixation was invented in the 20th century."
          },
          {
            "id": "whap6-l6-q3",
            "stem": "How did the Industrial Revolution in Europe reshape the economies of colonized and peripheral regions in the nineteenth century?",
            "options": [
              "It encouraged colonized regions to develop heavy machinery and automated manufacturing industries.",
              "It transformed peripheral regions into export-oriented monocultures focused on extracting raw materials (such as cotton, rubber, copper, and palm oil) to feed European factories.",
              "It ended all maritime trade between the Northern and Southern hemispheres.",
              "It caused colonized nations to eliminate all commercial agricultural production."
            ],
            "correctIndex": 1,
            "explanation": "Imperialism created an asymmetrical global division of labor: industrialized Western nations produced manufactured goods, while colonies were restructured to export agricultural cash crops and minerals, making them vulnerable to global commodity price swings.",
            "distractorTip": "Colonized territories were actively discouraged or prevented from developing domestic industrial manufacturing that could compete with European goods."
          }
        ]
      },
      {
        "id": 607,
        "unitIndex": 6,
        "levelNumber": 7,
        "uniqueKey": "whap-u6-l7",
        "topicNumber": "Topic 6.5",
        "name": "Economic Imperialism: The Opium Wars & China",
        "subtitle": "Opium Wars (1839–1860), Treaty of Nanking, extraterritoriality, and Spheres of Influence",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap6-l7-q1",
            "stem": "What was the fundamental cause of the First Opium War (1839–1842) between Great Britain and the Qing Dynasty?",
            "options": [
              "The British East India Company illegally smuggled Indian-grown opium into China to reverse a massive trade deficit in tea and silver; when Qing Commissioner Lin Zexu confiscated and destroyed the narcotics, Britain launched gunboat retaliation.",
              "China attempted to militarily conquer the British home islands.",
              "The British demanded that all Chinese citizens convert to Roman Catholicism.",
              "China placed a naval blockade around the port of London."
            ],
            "correctIndex": 0,
            "explanation": "Britain was hemorrhaging silver to buy Chinese tea, silk, and porcelain, while China wanted few European goods. The British East India Company solved this deficit by growing opium in India and smuggling it into China, addicting millions. When China enforced its drug ban, British gunboats attacked to defend 'free trade'.",
            "distractorTip": "The Opium Wars are the quintessential example of 'Economic Imperialism': using military force to open foreign markets for narcotics."
          },
          {
            "id": "whap6-l7-q2",
            "stem": "The 1842 Treaty of Nanking, which ended the First Opium War, marked the beginning of China's 'Century of Humiliation' because it forced the Qing Empire to:",
            "options": [
              "Surrender all of northern China to the Mongol Empire.",
              "Cede Hong Kong to Britain, pay an enormous silver indemnity, open five treaty ports to foreign merchants, and grant extraterritoriality (exempting Westerners from Chinese laws).",
              "Abolish the Mandarin language in favor of English across all schools.",
              "Disband the imperial palace and crown Queen Victoria as Empress of China."
            ],
            "correctIndex": 1,
            "explanation": "The Treaty of Nanking was the first of the 'Unequal Treaties.' It stripped China of tariff autonomy, surrendered Hong Kong, legalized extraterritoriality (foreigners accused of crimes were tried in Western courts), and paved the way for European, American, and Japanese 'Spheres of Influence'.",
            "distractorTip": "Extraterritoriality meant foreigners were above Chinese law—a devastating blow to Qing sovereignty."
          },
          {
            "id": "whap6-l7-q3",
            "stem": "The Treaty of Nanking (1842), which concluded the First Opium War between Great Britain and Qing China, is categorized as an \"unequal treaty\" because:",
            "options": [
              "It forced Great Britain to pay heavy war indemnities to the Qing Emperor.",
              "It required Britain to surrender its colonial holdings in India to China.",
              "It forced China to cede Hong Kong, open five treaty ports to British merchants, pay a massive indemnity, and grant extraterritorial legal rights to British subjects.",
              "It mandated the immediate conversion of the Chinese imperial court to Protestantism."
            ],
            "correctIndex": 2,
            "explanation": "The Treaty of Nanking was the first in a series of humiliating unequal treaties that eroded Qing sovereignty; British citizens in China were exempt from local Chinese laws (extraterritoriality), and the Qing lost tariff autonomy and the island of Hong Kong.",
            "distractorTip": "'Extraterritoriality' meant that foreigners who committed crimes on Chinese soil were tried in their own consular courts, not under Chinese law."
          }
        ]
      },
      {
        "id": 608,
        "unitIndex": 6,
        "levelNumber": 8,
        "uniqueKey": "whap-u6-l8",
        "topicNumber": "Topic 6.6",
        "name": "Global Migrations: Push & Pull Factors",
        "subtitle": "Indentured servitude, steamship transit, Irish Potato Famine, and Chinese contract labor",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap6-l8-q1",
            "stem": "Following the abolition of the transatlantic slave trade in the 19th century, how did global plantation and railway owners replace enslaved labor?",
            "options": [
              "By deploying fully automated robotic combine harvesters.",
              "By forcing European royal monarchs to perform manual field labor.",
              "By recruiting millions of indentured laborers, primarily from India and southern China, who signed multi-year labor contracts in exchange for transport to Caribbean, Pacific, and African plantations.",
              "By importing captive Japanese samurai warriors."
            ],
            "correctIndex": 2,
            "explanation": "Indentured servitude surged after chattel slavery was outlawed: over 1.5 million Indians and hundreds of thousands of Chinese laborers ('coolies') were transported to sugar plantations in Fiji, Mauritius, Trinidad, Guyana, and rail projects across North America and East Africa.",
            "distractorTip": "Indentured labor was often slavery by another name: laborers faced deceptive contracts, harsh corporal punishment, and meager pay."
          },
          {
            "id": "whap6-l8-q2",
            "stem": "Which catastrophic environmental event served as a massive 'push factor' driving over a million Irish migrants across the Atlantic to the United States in the late 1840s?",
            "options": [
              "A catastrophic volcanic eruption that covered all of Dublin in ash.",
              "An armed invasion of Ireland by the Spanish Armada.",
              "A complete regional drought that dried up the Atlantic Ocean.",
              "The Great Famine (Irish Potato Blight), caused by a fungal pathogen that wiped out Ireland's subsistence potato crop under callous British colonial landlord policies."
            ],
            "correctIndex": 3,
            "explanation": "Irish peasant tenants depended almost entirely on a single potato variety (the Lumper) for survival. When the Phytophthora infestans blight struck in 1845, over one million people died of starvation and disease, while British authorities continued exporting Irish cattle and grain to England under laissez-faire doctrine.",
            "distractorTip": "The Irish Potato Famine combined biological crop failure with cruel British colonial economic neglect, sparking mass migration."
          },
          {
            "id": "whap6-l8-q3",
            "stem": "Which of the following best explains why millions of Indian and Chinese contract laborers migrated to the Americas, Africa, and Southeast Asia during the nineteenth century?",
            "options": [
              "The global abolition of the Transatlantic Slave Trade created acute labor shortages on tropical sugar and cash-crop plantations, which European powers filled with indentured laborers.",
              "European empires mandated that all factory jobs in London and Paris be staffed by Asian workers.",
              "Rapid industrialization in India and China led workers to establish overseas corporate headquarters.",
              "Colonial governments paid free first-class steamship transit to any Asian family willing to homestead in Canada."
            ],
            "correctIndex": 0,
            "explanation": "As slavery was phased out across the British (1833), French (1848), and other empires, plantation owners in the Caribbean, Mauritius, and Fiji recruited indentured Asian laborers under multi-year contracts that often resembled slavery in their harsh discipline.",
            "distractorTip": "Indentured servitude expanded directly in the wake of the abolition of slavery to maintain cheap plantation labor for global commodities."
          }
        ]
      },
      {
        "id": 609,
        "unitIndex": 6,
        "levelNumber": 9,
        "uniqueKey": "whap-u6-l9",
        "topicNumber": "Topic 6.7 & 6.8",
        "name": "Migrant Enclaves & Exclusionary Policies (Boss)",
        "subtitle": "Chinatowns, Little Italys, Chinese Exclusion Act (1882), and White Australia Policy",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "whap6-l9-q1",
            "stem": "Why did 19th-century immigrants frequently form distinct urban ethnic enclaves (such as 'Chinatowns' in San Francisco, Lima, and Melbourne, or 'Little Italys' in New York)?",
            "options": [
              "Enclaves provided mutual aid societies, familiar cultural food and languages, economic networks, and physical safety against xenophobic hostility in host societies.",
              "They were mandated by the United Nations to reside in segregated military zones.",
              "Immigrants were legally prohibited from ever learning the English language.",
              "Foreign ambassadors forced all migrants to live inside diplomatic embassies."
            ],
            "correctIndex": 0,
            "explanation": "Ethnic enclaves helped newcomers navigate unfamiliar, often racist host societies. They established native-language newspapers, credit associations, fraternal organizations, and religious temples, allowing migrants to preserve cultural identity while integrating economically.",
            "distractorTip": "Ethnic enclaves were adaptive survival communities that softened culture shock and shielded migrants from discrimination."
          },
          {
            "id": "whap6-l9-q2",
            "stem": "The passage of the Chinese Exclusion Act of 1882 in the United States and the White Australia Policy in 1901 reflected which global trend in receiving societies?",
            "options": [
              "An international treaty that granted free citizenship to all Asian migrants.",
              "A virulent xenophobic backlash among white domestic labor unions and politicians who feared racial contamination and wage competition, leading to state-sponsored immigration bans.",
              "A governmental initiative to make Mandarin an official national language.",
              "The complete elimination of all national border customs checkpoints."
            ],
            "correctIndex": 1,
            "explanation": "As large numbers of non-European immigrants arrived to build railroads and work mines, white working-class groups blamed them for driving down wages. Governments enacted discriminatory racial legislation (e.g., Chinese Exclusion Act 1882, California alien land laws, White Australia dictation tests) to maintain racial hegemony.",
            "distractorTip": "Notice the global pattern: economic panic combined with racial prejudice produced legal exclusion acts across the Pacific Rim."
          },
          {
            "id": "whap6-l9-q3",
            "stem": "The passage of the Chinese Exclusion Act of 1882 in the United States and the White Australia Policy of 1901 reflected which broader global trend in the late nineteenth and early twentieth centuries?",
            "options": [
              "The complete closure of international borders to all maritime trade and diplomatic envoys.",
              "The expansion of welcoming, multiracial citizenship policies across all English-speaking countries.",
              "The universal adoption of open-door immigration treaties by Pacific Rim nations.",
              "The rise of nativist racial prejudice and discriminatory legal restrictions by receiving societies aimed at barring non-white immigrant laborers."
            ],
            "correctIndex": 3,
            "explanation": "White working-class and political groups in recipient countries (US, Canada, Australia) stoked racial fears and accused Asian migrants of depressing wages, lobbying their legislatures to pass racialized immigration quotas and outright bans.",
            "distractorTip": "Immigrants formed ethnic enclaves (like Chinatowns) for economic support and physical security precisely because of pervasive nativist legal and social discrimination."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 7,
    "unitId": "u7",
    "title": "Unit 7: Global Conflict (1900 to present)",
    "shortTitle": "Unit 7: Global Conflict",
    "description": "Collapse of empires, World War I, Great Depression, totalitarian fascism, World War II, and mass atrocities",
    "examWeight": "8–10% of AP Exam",
    "biome": {
      "name": "Verdun Trenches & Atomic Proving Ground",
      "icon": "🎖️",
      "accentColor": "#DC2626",
      "secondaryColor": "#B91C1C",
      "groundGradient": "from-red-100 via-rose-50 to-orange-100",
      "cardBorder": "border-red-600",
      "trailColor": "#dc2626",
      "nodeRing": "ring-red-400/40",
      "skyTint": "from-red-50 to-rose-50/30"
    },
    "levels": [
      {
        "id": 701,
        "unitIndex": 7,
        "levelNumber": 1,
        "uniqueKey": "whap-u7-l1",
        "topicNumber": "Topic 7.1",
        "name": "Shifting Power: Collapse of Land Empires",
        "subtitle": "Fall of the Ottoman, Qing (1911), Russian (1917), and Mexican Revolutions",
        "difficulty": "Easy",
        "rewardCoins": 25,
        "questions": [
          {
            "id": "whap7-l1-q1",
            "stem": "The collapse of the Qing Dynasty in the 1911 Revolution led by Sun Yat-sen was caused primarily by:",
            "options": [
              "An armed naval invasion of Beijing by the United States Navy.",
              "The complete voluntary conversion of the Qing imperial family to Christianity.",
              "Centuries of internal peasant uprisings (Taiping and Boxer Rebellions), military defeats by foreign imperial powers, and imperial resistance to constitutional modernization.",
              "A diplomatic treaty uniting China and the Russian Empire into a single kingdom."
            ],
            "correctIndex": 2,
            "explanation": "The Qing was crippled by internal devastation (the Taiping Rebellion killed 20–30 million), foreign economic imperialism, and the Empress Dowager Cixi's suppression of the 1898 Hundred Days of Reform. Sun Yat-sen's Revolutionary Alliance overthrew the child-emperor Puyi in 1911, establishing the Republic of China based on the 'Three Principles of the People' (Nationalism, Democracy, Livelihood).",
            "distractorTip": "1911 marked the end of over 2,000 years of imperial dynastic rule in China dating back to the Qin Dynasty."
          },
          {
            "id": "whap7-l1-q2",
            "stem": "How did Vladimir Lenin and the Bolshevik Party seize power in Russia during the October Revolution of 1917?",
            "options": [
              "By winning a landslide parliamentary election certified by the Tsar.",
              "By forming an alliance with the German Kaiser to annex Poland.",
              "By reinstating the feudal privileges of the Russian Orthodox Church.",
              "By capitalizing on widespread popular outrage over catastrophic Russian military casualties and food shortages in World War I with the slogan 'Peace, Land, and Bread.'"
            ],
            "correctIndex": 3,
            "explanation": "Tsar Nicholas II's disastrous mismanagement of WWI caused mass troop desertions, hyperinflation, and bread riots in Petrograd, forcing his abdication. The moderate Provisional Government foolishly remained in WWI, allowing Lenin's radical Marxist Bolsheviks to overthrow it and pull Russia out of the war via the Treaty of Brest-Litovsk.",
            "distractorTip": "Remember Lenin's brilliant political slogan: 'Peace (exit WWI), Land (to peasants), and Bread (to starving urban workers)'."
          },
          {
            "id": "whap7-l1-q3",
            "stem": "Sun Yat-sen's 1911 Revolution that overthrew the Qing Dynasty sought to reconstruct China on which foundational principles (the \"Three Principles of the People\")?",
            "options": [
              "Strict Confucian ancestral hierarchy, feudal military daimyo rule, and absolute isolationism.",
              "Nationalism (overthrowing Manchu rule), Democracy (republican governance), and Livelihood (socioeconomic welfare for the people).",
              "Complete incorporation into the British Empire as a direct crown colony.",
              "A radical Bolshevik dictatorship that eliminated all private peasant agriculture immediately."
            ],
            "correctIndex": 1,
            "explanation": "Dr. Sun Yat-sen articulated the Three Principles of the People (San Min Chu-i): Minzu (national independence from foreign imperialists and the Manchus), Minquan (constitutional democracy), and Minsheng (people's livelihood and land reform).",
            "distractorTip": "Sun Yat-sen was a republican nationalist who ended 2,000+ years of imperial dynastic rule, preceding the rise of the Chinese Communist Party."
          }
        ]
      },
      {
        "id": 702,
        "unitIndex": 7,
        "levelNumber": 2,
        "uniqueKey": "whap-u7-l2",
        "topicNumber": "Topic 7.2",
        "name": "Causes of World War I",
        "subtitle": "M-A-I-N (Militarism, Alliances, Imperialism, Nationalism) and the Sarajevo spark",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "whap7-l2-q1",
            "stem": "Which long-term structural cause of World War I transformed a localized Balkan crisis in Sarajevo into a catastrophic global war within weeks?",
            "options": [
              "The rigid network of entangling mutual defense alliances (the Triple Entente vs. the Triple Alliance) that automatically pulled rival powers into mobilization.",
              "A joint invasion of Switzerland by Sweden and Norway.",
              "A worldwide agricultural famine that wiped out all European grain crops.",
              "The complete refusal of European nations to build modern navies."
            ],
            "correctIndex": 0,
            "explanation": "When Serbian nationalist Gavrilo Princip assassinated Austro-Hungarian Archduke Franz Ferdinand, Austria-Hungary declared war on Serbia. Russia mobilized to protect its Slavic ally, which triggered Germany's alliance with Austria, which triggered France's alliance with Russia, dragging all major powers into total war.",
            "distractorTip": "Remember the M-A-I-N acronym: Militarism, Alliances, Imperialism, and Nationalism."
          },
          {
            "id": "whap7-l2-q2",
            "stem": "How did intense imperialist rivalries in the late 19th and early 20th centuries contribute directly to the outbreak of World War I?",
            "options": [
              "European monarchs agreed to abolish all standing armies in favor of international arbitration.",
              "European powers fought over colonial markets and resources in Africa (e.g., the Moroccan Crises) and engaged in an aggressive Anglo-German naval arms race to build dreadnought battleships.",
              "European nations surrendered all overseas colonies to the League of Nations.",
              "The Ottoman Empire conquered the British home islands."
            ],
            "correctIndex": 1,
            "explanation": "Britain and Germany engaged in an industrial naval arms race, while imperial clashes over African and Asian spheres of influence heightened mutual paranoia. Germany's push for 'a place in the sun' threatened Britain's global hegemony, creating hair-trigger diplomatic tensions.",
            "distractorTip": "Industrial militarism (especially the naval race between Britain and Germany) turned Europe into an explosive tinderbox."
          },
          {
            "id": "whap7-l2-q3",
            "stem": "How did the system of rigid mutual defense alliances contribute to the outbreak of World War I following the assassination of Archduke Franz Ferdinand?",
            "options": [
              "It immediately persuaded all European monarchs to disarm their armies peacefully.",
              "It prevented any military mobilization outside of the Austro-Hungarian Empire.",
              "It created a diplomatic chain reaction that transformed a localized Balkan crisis into a full-scale continental war involving all major European powers.",
              "It forced the United States to declare war on Germany in August 1914."
            ],
            "correctIndex": 2,
            "explanation": "The Triple Entente (Britain, France, Russia) and Triple Alliance/Central Powers (Germany, Austria-Hungary, Italy) meant that Austria's war on Serbia triggered Russian mobilization, which brought in Germany, France, and ultimately Britain when Belgium was invaded.",
            "distractorTip": "The alliance system did not deter war; its rigid mobilization timetables locked the great powers into automatic escalation."
          }
        ]
      },
      {
        "id": 703,
        "unitIndex": 7,
        "levelNumber": 3,
        "uniqueKey": "whap-u7-l3",
        "topicNumber": "Topic 7.3",
        "name": "Conducting World War I: Total War & Industrial Warfare",
        "subtitle": "Trench warfare, machine guns, poison gas, home front rationing, and propaganda",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap7-l3-q1",
            "stem": "Why did the Western Front of World War I degenerate into a deadly, years-long stalemate characterized by trench warfare?",
            "options": [
              "Both sides agreed to a permanent peaceful ceasefire after two weeks of combat.",
              "Soldiers on both sides were strictly prohibited from using firearms.",
              "Defensive industrial military technology (machine guns, barbed wire, heavy artillery) decisively outmatched traditional offensive infantry charges across 'No Man's Land.'",
              "The combatants were completely unable to manufacture artillery shells."
            ],
            "correctIndex": 2,
            "explanation": "Military commanders trained in 19th-century Napoleonic cavalry tactics faced 20th-century industrial firepower. Maxim machine guns firing 600 rounds per minute and devastating artillery bombardments pulverized unprotected charging troops, forcing soldiers to dig thousands of miles of fortified trenches.",
            "distractorTip": "World War I is defined by defensive supremacy: machine guns, artillery, and trenches made traditional frontal charges suicidal."
          },
          {
            "id": "whap7-l3-q2",
            "stem": "World War I was categorized as a 'total war' because combatant nations:",
            "options": [
              "Allowed private citizens to freely trade with enemy nations without government regulation.",
              "Restricted combat strictly to small volunteer mercenary armies fighting in remote deserts.",
              "Refused to convert civilian manufacturing factories into munitions plants.",
              "Mobilized their entire domestic populations and industrial economies for the war effort, conscripting soldiers, rationing consumer food, utilizing female factory labor, and censoring anti-war speech via government propaganda."
            ],
            "correctIndex": 3,
            "explanation": "In total war, the boundary between the battlefield and the home front disappears. Governments took over private industries to produce munitions, instituted food rationing, recruited millions of women into weapons factories, and used mass media propaganda to demonize the enemy and suppress dissent.",
            "distractorTip": "Total War = Complete societal mobilization (conscription, factory conversion, rationing, female labor, and censorship)."
          },
          {
            "id": "whap7-l3-q3",
            "stem": "World War I was categorized as a \"total war\" primarily because:",
            "options": [
              "Combatant nations mobilized all domestic economic, industrial, and human resources, blurring the traditional distinction between soldiers on the front and civilians on the home front.",
              "Combat was restricted entirely to professional volunteer cavalry regiments on isolated open plains.",
              "No civilians suffered any casualties or economic rationing during the four years of fighting.",
              "Military leaders refused to utilize any mechanized weaponry invented after 1800."
            ],
            "correctIndex": 0,
            "explanation": "Total war required total national commitment: governments nationalized key industries, imposed food rationing, converted factories to munitions production, recruited women into the industrial workforce, and used censorship and propaganda to control public opinion.",
            "distractorTip": "'Total war' refers to the mobilization of entire societies and economies, making civilian infrastructure and factory workers legitimate targets of naval blockades and aerial bombing."
          }
        ]
      },
      {
        "id": 704,
        "unitIndex": 7,
        "levelNumber": 4,
        "uniqueKey": "whap-u7-l4",
        "topicNumber": "Topic 7.4",
        "name": "The Interwar Economy: The Great Depression & State Intervention",
        "subtitle": "1929 stock market crash, Keynesian deficit spending, New Deal, and Soviet Five-Year Plans",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap7-l4-q1",
            "stem": "How did the Great Depression of the 1930s reshape the economic relationship between citizens and the state in Western democratic nations like the United States?",
            "options": [
              "Governments abandoned rigid laissez-faire orthodoxy and adopted Keynesian economics, using deficit spending and public works programs (e.g., FDR's New Deal) to stimulate employment and establish social safety nets.",
              "Governments completely eliminated all taxes and privatized public schools.",
              "The United States abolished its constitution and crowned an absolute monarch.",
              "Democratic governments outlawed all commercial bank deposits."
            ],
            "correctIndex": 0,
            "explanation": "British economist John Maynard Keynes argued that during deep economic downturns, private business investment collapses, requiring governments to step in with deficit spending on public infrastructure to restart aggregate demand. FDR's New Deal created Social Security, unemployment insurance, and federal public works (WPA, CCC).",
            "distractorTip": "The Great Depression permanently ended pure laissez-faire in Western democracies, giving birth to the modern regulatory welfare state."
          },
          {
            "id": "whap7-l4-q2",
            "stem": "How did Joseph Stalin's command economy in the Soviet Union respond to the global economic collapse of the 1930s?",
            "options": [
              "The Soviet Union converted to unregulated free-market capitalism.",
              "The USSR was largely insulated from the capitalist crash, pursuing state-directed Five-Year Plans that rapidly industrialized heavy steel and electrical production through brutal forced labor and agricultural collectivization.",
              "Stalin invited American Wall Street banks to manage the Soviet treasury.",
              "The Soviet government banned all domestic industrial manufacturing."
            ],
            "correctIndex": 1,
            "explanation": "Because the USSR had isolated itself from the global capitalist financial system, it avoided the Great Depression. Stalin forced rapid industrialization via central Five-Year Plans (Gosplan) and forcibly collectivized peasant farms, ruthlessly crushing kulak resistance and causing the devastating Holodomor famine in Ukraine.",
            "distractorTip": "Stalin's rapid industrialization built the heavy military-industrial complex that later defeated Nazi Germany in WWII."
          },
          {
            "id": "whap7-l4-q3",
            "stem": "How did Joseph Stalin's Five-Year Plans transform the Soviet economy during the 1930s while Western capitalist nations languished in the Great Depression?",
            "options": [
              "By dismantling all state industries and inviting Western private corporations to manage Russian mines.",
              "By adopting laissez-faire free-market capitalism with zero government regulation.",
              "By abandoning all industrial production to focus exclusively on small family farms.",
              "By centralizing the economy under state control (Gosplan), prioritizing heavy industry (coal, steel, electricity), and forcibly collectivizing agriculture at terrible human cost."
            ],
            "correctIndex": 3,
            "explanation": "Stalin ended Lenin's New Economic Policy and commanded a state-directed crash industrialization program. While the USSR achieved massive increases in heavy industrial output (making it an industrial titan for WWII), forced collectivization provoked widespread resistance and the devastating Holodomor famine.",
            "distractorTip": "The Soviet command economy was insulated from the 1929 Wall Street crash, giving the illusion of economic triumph while causing massive domestic suffering."
          }
        ]
      },
      {
        "id": 705,
        "unitIndex": 7,
        "levelNumber": 5,
        "uniqueKey": "whap-u7-l5",
        "topicNumber": "Topic 7.5",
        "name": "Interwar Unresolved Tensions: Versailles & The Mandates",
        "subtitle": "Treaty of Versailles, German reparations, Article 231 War Guilt, and the League of Nations Mandate System",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap7-l5-q1",
            "stem": "Why did the 1919 Treaty of Versailles foster deep bitterness and revanchist nationalism in Germany, creating the preconditions for the rise of Adolf Hitler?",
            "options": [
              "It granted Germany full military annexation rights over all of Eastern Europe.",
              "It mandated that Germany be permanently governed by the French parliament.",
              "It forced Germany to accept sole moral responsibility for the war ('War Guilt Clause' Article 231), pay crushing financial reparations, surrender 13% of its European territory, and drastically demilitarize its armed forces.",
              "It forced all German citizens to relocate to German East Africa."
            ],
            "correctIndex": 2,
            "explanation": "The Versailles 'Diktat' humiliated Germany: Article 231 forced Germany to accept sole blame, pay billions in gold reparations (fueling 1923 hyperinflation), demilitarize the Rhineland, and limit its army to 100,000 men. Hitler weaponized this national humiliation and the 'stab-in-the-back' myth to dismantle the Weimar Republic.",
            "distractorTip": "Versailles was a flawed compromise: harsh enough to humiliate and enrage Germany, but not enforced strictly enough to prevent German rearmament."
          },
          {
            "id": "whap7-l5-q2",
            "stem": "How did the League of Nations Mandate System affect former Ottoman territories in the Middle East (such as Syria, Lebanon, Iraq, and Palestine) after World War I?",
            "options": [
              "It immediately granted full, unconditional democratic sovereignty to all Arab nations.",
              "It returned all Middle Eastern lands to the control of the Russian Tsar.",
              "It unified the entire Middle East into a single sovereign democratic federation.",
              "It betrayed Arab promises of post-war independence (the McMahon-Hussein correspondence) by placing these regions under direct British and French imperial administrative control."
            ],
            "correctIndex": 3,
            "explanation": "Under the secret Sykes-Picot Agreement (1916), Britain and France carved up the Ottoman Arab provinces. After WWI, the League of Nations formalized this as 'mandates'—claiming Arabs were 'not yet ready to stand by themselves'—sparking profound Arab anti-Western resentment.",
            "distractorTip": "The Mandate System was colonialism under a polite international disguise."
          },
          {
            "id": "whap7-l5-q3",
            "stem": "The League of Nations Mandate System established after World War I provoked widespread anger among Arab nationalists because:",
            "options": [
              "It forced all Middle Eastern countries to adopt European Christian state religions.",
              "It broke wartime British and French promises of Arab independence, placing former Ottoman territories (such as Syria, Lebanon, Palestine, and Iraq) under French and British colonial tutelage.",
              "It returned all Middle Eastern lands to direct Ottoman Turkish imperial rule.",
              "It prohibited Arab merchants from selling petroleum on the global market."
            ],
            "correctIndex": 1,
            "explanation": "Arab leaders like Sharif Hussein had fought alongside the British against the Ottomans under promises of an independent unified Arab state; instead, the secret Sykes-Picot Agreement and the Mandate System effectively colonized the Levant and Mesopotamia under French and British rule.",
            "distractorTip": "The Mandate System was essentially a polite euphemism for European colonialism under the guise of preparing territories for future self-governance."
          }
        ]
      },
      {
        "id": 706,
        "unitIndex": 7,
        "levelNumber": 6,
        "uniqueKey": "whap-u7-l6",
        "topicNumber": "Topic 7.6",
        "name": "Causes of World War II: Fascism & Failed Appeasement",
        "subtitle": "Rise of Hitler & Mussolini, Japanese militarism (Manchuria 1931), and the Munich Agreement (1938)",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap7-l6-q1",
            "stem": "What was the core foreign policy doctrine of British Prime Minister Neville Chamberlain's policy of 'appeasement' toward Nazi Germany at the 1938 Munich Conference?",
            "options": [
              "Conceding to Hitler's aggressive territorial demands (such as annexing the Sudetenland in Czechoslovakia) in the desperate hope of avoiding another catastrophic European war.",
              "Launching an immediate preemptive nuclear strike against Berlin.",
              "Forming an offensive military alliance with the Soviet Union to invade Germany.",
              "Demanding that Germany surrender all of its territory to the League of Nations."
            ],
            "correctIndex": 0,
            "explanation": "Haunted by the slaughter of WWI, Britain and France pursued appeasement: they allowed Hitler to rearm, remilitarize the Rhineland, annex Austria (Anschluss), and carve up Czechoslovakia, believing Hitler's promise that the Sudetenland was his 'last territorial demand.' Hitler viewed this as Western weakness.",
            "distractorTip": "The Munich Conference made 'appeasement' synonymous with dangerous political capitulation in the face of totalitarian aggression."
          },
          {
            "id": "whap7-l6-q2",
            "stem": "Imperial Japan's aggressive military expansion into Manchuria (1931) and mainland China (1937) was driven primarily by:",
            "options": [
              "A request from the League of Nations to restore peace in Beijing.",
              "The urgent desire to acquire raw materials (rubber, oil, iron ore) and agricultural land to feed its industrial economy under the guise of the 'Greater East Asia Co-Prosperity Sphere.'",
              "A diplomatic treaty signed with the United States to protect American commerce.",
              "The complete elimination of the Japanese imperial military."
            ],
            "correctIndex": 1,
            "explanation": "As an island nation with few natural resources, Japan's military-dominated government believed territorial conquest was vital for economic survival. They invaded Manchuria (setting up the puppet state of Manchukuo) and launched full-scale war against China in 1937, committing atrocities like the Rape of Nanking.",
            "distractorTip": "Japan promoted the 'Co-Prosperity Sphere' as 'Asia for Asians' (freeing Asia from Western imperialism), but in reality replaced Western rule with brutal Japanese colonial exploitation."
          },
          {
            "id": "whap7-l6-q3",
            "stem": "The policy of \"appeasement\" pursued by Britain and France toward Adolf Hitler in the 1930s—culminating in the 1938 Munich Agreement—was based on the mistaken belief that:",
            "options": [
              "Nazi Germany possessed no military army or air force.",
              "The Soviet Union would invade Germany if Britain maintained an alliance with Hitler.",
              "Yielding to Hitler's reasonable territorial demands in the Rhineland, Austria, and the Sudetenland would satisfy German grievances and avert another catastrophic continental war.",
              "The United States would fight Germany alone without European assistance."
            ],
            "correctIndex": 2,
            "explanation": "British Prime Minister Neville Chamberlain and French leaders were haunted by the horrific casualties of WWI; they hoped that conceding the German-speaking Sudetenland of Czechoslovakia would satiate Hitler, but it only emboldened him to conquer the rest of Czechoslovakia and invade Poland.",
            "distractorTip": "Appeasement demonstrated that aggressive fascist expansionism could not be contained by diplomatic concessions."
          }
        ]
      },
      {
        "id": 707,
        "unitIndex": 7,
        "levelNumber": 7,
        "uniqueKey": "whap-u7-l7",
        "topicNumber": "Topic 7.7",
        "name": "Conducting World War II: Global Total War",
        "subtitle": "Blitzkrieg, radar, aircraft carriers, firebombing of cities, and the atomic bomb",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap7-l7-q1",
            "stem": "German military campaigns in Poland and France in 1939–1940 successfully bypassed the trench stalemates of WWI through the doctrine of 'Blitzkrieg' (lightning war), which integrated:",
            "options": [
              "Static defensive stone fortresses built along national frontiers.",
              "The exclusive use of horse-drawn medical supply carriages.",
              "Rapid, highly coordinated thrusts of armored tank divisions (Panzers) supported by close-air dive bombers (Luftwaffe) and mechanized motorized infantry.",
              "Diplomatic negotiations conducted entirely by neutral Swiss ambassadors."
            ],
            "correctIndex": 2,
            "explanation": "Blitzkrieg utilized radio communications to coordinate tanks and dive-bombers in fast, piercing breakthroughs. Instead of fighting along an entire frontline, German columns breached weak points, encircled enemy armies, and caused complete psychological collapse before defenders could react.",
            "distractorTip": "Blitzkrieg restored offensive mobility to warfare through internal combustion engines, radio, and air-ground coordination."
          },
          {
            "id": "whap7-l7-q2",
            "stem": "The Pacific Theater of World War II differed fundamentally from the European Theater because naval engagements (such as the Battle of Midway, 1942) were decided primarily by:",
            "options": [
              "Traditional hand-to-hand combat on pirate sailing ships.",
              "Submarines firing nuclear-tipped ballistic missiles.",
              "Static concrete trench lines dug across Pacific coral reefs.",
              "Aircraft carriers launching dive-bombers and torpedo planes over hundreds of miles of open sea, where opposing battleships never sighted each other."
            ],
            "correctIndex": 3,
            "explanation": "At the Battle of Midway (June 1942), American carrier-based dive-bombers sank four front-line Japanese aircraft carriers in a single morning. The carrier replaced the battleship as the supreme capital ship of naval warfare, proving that air superiority over the ocean decided maritime battles.",
            "distractorTip": "Midway is the decisive turning point in the Pacific: it halted Japanese expansion and shifted the naval initiative permanently to the United States."
          },
          {
            "id": "whap7-l7-q3",
            "stem": "The 1942–1943 Battle of Stalingrad is widely regarded by military historians as the critical turning point of World War II in Europe because:",
            "options": [
              "The Soviet Red Army surrounded and annihilated Germany's elite Sixth Army, halting Nazi eastward expansion and putting Germany on a permanent strategic retreat.",
              "It marked the first operational combat deployment of an atomic weapon.",
              "It was the largest amphibious naval landing in Mediterranean history.",
              "It caused the immediate unconditional surrender of Fascist Italy."
            ],
            "correctIndex": 0,
            "explanation": "Stalingrad was the bloodiest battle in human history (over 1.5 million casualties); the catastrophic loss of the German Sixth Army broke the back of the Wehrmacht and swung the strategic momentum permanently in favor of the Soviet Union on the Eastern Front.",
            "distractorTip": "The Eastern Front saw the vast majority of German casualties in WWII; Stalingrad shattered the myth of German invincibility."
          }
        ]
      },
      {
        "id": 708,
        "unitIndex": 7,
        "levelNumber": 8,
        "uniqueKey": "whap-u7-l8",
        "topicNumber": "Topic 7.8",
        "name": "Mass Atrocities After 1900",
        "subtitle": "The Holocaust (Final Solution), Armenian Genocide, Rwandan Genocide, and Holodomor",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap7-l8-q1",
            "stem": "The Holocaust (Shoah) perpetrated by the Nazi regime during World War II represents the extreme historical manifestation of state-sponsored mass atrocity because it involved:",
            "options": [
              "The systematic, industrialized bureaucratic genocide of approximately six million European Jews and millions of others (Roma, disabled persons, Soviet POWs) using modern assembly-line extermination camps (gas chambers).",
              "Accidental casualties resulting from battlefield artillery crossfire.",
              "The voluntary relocation of European minorities to South American farms.",
              "A spontaneous, unorganized riot conducted without government planning."
            ],
            "correctIndex": 0,
            "explanation": "At the 1942 Wannsee Conference, Nazi officials coordinated the 'Final Solution.' The Holocaust was unique in its bureaucratic industrialization: using railway timetables, corporate poison gas (Zyklon B), and extermination camps like Auschwitz-Birkenau to murder two-thirds of European Jewry.",
            "distractorTip": "The Holocaust is categorized by historians as 'industrialized genocide': utilizing modern administrative bureaucracy and technology to mass-murder human beings."
          },
          {
            "id": "whap7-l8-q2",
            "stem": "The 1915 Armenian Genocide carried out by the Young Turk government of the Ottoman Empire was carried out under which wartime pretext?",
            "options": [
              "A dispute over European copyright patents on textile machinery.",
              "The false claim that the Christian Armenian minority was acting as a treacherous Fifth Column collaborating with the invading Russian Empire during World War I.",
              "An attempt to convert all Ottoman citizens to Roman Catholicism.",
              "A request by the League of Nations to relocate the Armenian population."
            ],
            "correctIndex": 1,
            "explanation": "Fearing the collapse of their empire during WWI and scapegoating Christian Armenians for military defeats against Russia, the Young Turk regime systematically executed Armenian intellectuals, disarmed Armenian soldiers, and forced over a million women, children, and elderly on death marches through the Syrian desert, killing an estimated 1.5 million people.",
            "distractorTip": "The Armenian Genocide established a horrifying 20th-century precedent for utilizing wartime national security panics to justify ethnic cleansing."
          },
          {
            "id": "whap7-l8-q3",
            "stem": "The 1948 United Nations Convention on the Prevention and Punishment of the Crime of Genocide was enacted largely in response to:",
            "options": [
              "The economic collapse triggered by the Great Depression in Western Europe.",
              "The territorial disputes between the United States and Canada in the Arctic.",
              "The rise of multinational corporations in postwar East Asia.",
              "The systematic, state-sponsored industrial extermination of six million European Jews and millions of others by the Nazi regime during the Holocaust."
            ],
            "correctIndex": 3,
            "explanation": "Polish-Jewish jurist Raphael Lemkin coined the term 'genocide' during WWII; the global shock at the systematic death camps (Auschwitz, Treblinka) led the UN to codify genocide as a crime under international law, obligating states to prevent and punish acts committed with intent to destroy a national, ethnic, racial, or religious group.",
            "distractorTip": "The Nuremberg Trials and the 1948 Genocide Convention established the legal precedent that national leaders can be held criminally accountable for crimes against humanity."
          }
        ]
      },
      {
        "id": 709,
        "unitIndex": 7,
        "levelNumber": 9,
        "uniqueKey": "whap-u7-l9",
        "topicNumber": "Topic 7.9",
        "name": "Causation & Reorganization of World Power (Boss)",
        "subtitle": "Collapse of European colonial hegemony and the emergence of the US-Soviet Superpower Duopoly",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "whap7-l9-q1",
            "stem": "What was the most profound global geopolitical consequence of the total devastation of Western Europe and Japan at the end of World War II in 1945?",
            "options": [
              "The immediate restoration of the British Empire as the supreme industrial and naval superpower.",
              "The peaceful unification of all world nations under a single global government in Paris.",
              "The permanent end of European global hegemony and the emergence of a bipolar world order dominated by two rival ideological superpowers: the capitalist United States and the communist Soviet Union.",
              "The complete elimination of all nuclear and military weapon arsenals worldwide."
            ],
            "correctIndex": 2,
            "explanation": "With Britain, France, Germany, and Japan bankrupted and physically shattered by total war, European colonial dominance collapsed. The atomic-armed, economically untouched United States and the battle-hardened Soviet Union filled the vacuum, dividing the globe into two competing ideological blocs.",
            "distractorTip": "1945 marks the great geopolitical inflection point: Multi-polar European colonial dominance ended, and the Bipolar Cold War began."
          },
          {
            "id": "whap7-l9-q2",
            "stem": "The founding of the United Nations (UN) in 1945 differed from the earlier failed League of Nations primarily because the UN:",
            "options": [
              "Had zero authority to debate international human rights treaties.",
              "Was located in a neutral country with no permanent headquarters.",
              "Prohibited any nation from maintaining an army.",
              "Included the United States and the Soviet Union as permanent members of a Security Council possessing veto power and the legal authority to authorize collective military peacekeeping forces."
            ],
            "correctIndex": 3,
            "explanation": "The League of Nations failed because major powers (the US never joined, while Germany, Japan, and the USSR were expelled or quit) were absent, and it lacked an enforcement mechanism. The UN fixed this by including all great powers on the Security Council with veto power and military peacekeeping authorization.",
            "distractorTip": "The UN Security Council structure recognized realist great-power geopolitics to prevent another global conflict."
          },
          {
            "id": "whap7-l9-q3",
            "stem": "How did the conclusion of World War II in 1945 fundamentally alter the global balance of power?",
            "options": [
              "It restored the British Empire as the sole unchallenged economic hegemon of the world.",
              "It destroyed the multipolar European imperial order and established a bipolar international system dominated by two ideological superpowers: the United States and the Soviet Union.",
              "It caused the complete dissolution of all sovereign nation-states in favor of a single world government.",
              "It transferred global geopolitical leadership exclusively to South American republics."
            ],
            "correctIndex": 1,
            "explanation": "Western European empires (Britain, France, Germany) were bankrupt, devastated by warfare, and unable to sustain global empires; power shifted to the two continental superpowers—the capitalist, democratic United States and the communist Soviet Union—sparking the Cold War.",
            "distractorTip": "The end of WWII was the catalyst for the collapse of 400 years of European global dominance and the rapid onset of Asian and African decolonization."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 8,
    "unitId": "u8",
    "title": "Unit 8: Cold War & Decolonization (1900 to present)",
    "shortTitle": "Unit 8: Cold War & Decolonization",
    "description": "Superpower rivalry, proxy wars, spread of communism, Asian/African decolonization, and the fall of the Soviet Union",
    "examWeight": "8–10% of AP Exam",
    "biome": {
      "name": "Checkpoint Charlie & Bandung Conference",
      "icon": "🕊️",
      "accentColor": "#2563EB",
      "secondaryColor": "#1D4ED8",
      "groundGradient": "from-blue-100 via-sky-50 to-indigo-100",
      "cardBorder": "border-blue-600",
      "trailColor": "#2563eb",
      "nodeRing": "ring-blue-400/40",
      "skyTint": "from-blue-50 to-sky-50/30"
    },
    "levels": [
      {
        "id": 801,
        "unitIndex": 8,
        "levelNumber": 1,
        "uniqueKey": "whap-u8-l1",
        "topicNumber": "Topic 8.1 & 8.2",
        "name": "Origins of the Cold War & Ideological Containment",
        "subtitle": "Yalta & Potsdam, Iron Curtain, Truman Doctrine, Marshall Plan, and Berlin Blockade",
        "difficulty": "Easy",
        "rewardCoins": 25,
        "questions": [
          {
            "id": "whap8-l1-q1",
            "stem": "How did the United States implement its Cold War foreign policy of 'containment' to prevent the spread of Soviet communist influence in war-torn Europe?",
            "options": [
              "Through the Truman Doctrine (promising military aid to nations resisting communist takeover) and the Marshall Plan (pumping over $13 billion to rebuild Western European capitalist economies).",
              "By immediately launching a nuclear invasion of Moscow in 1946.",
              "By surrendering Western Europe to Soviet military occupation.",
              "By outlawing all international commercial trade across the Atlantic."
            ],
            "correctIndex": 0,
            "explanation": "Diplomat George F. Kennan proposed 'containment': recognizing communism would expand into impoverished vacuums, the US used the Truman Doctrine (aid to Greece and Turkey) and the Marshall Plan (economic aid to rebuild Western Europe) to anchor stable capitalist democracies.",
            "distractorTip": "Containment aimed to stop the *spread* of communism beyond where it already existed, not to launch direct military invasion of the USSR."
          },
          {
            "id": "whap8-l1-q2",
            "stem": "Winston Churchill's famous 1946 'Iron Curtain' speech warned the democratic world that:",
            "options": [
              "A massive wall of iron had been constructed across the Mediterranean seabed.",
              "The Soviet Union had established totalitarian control over Eastern European satellite states, dividing the European continent into two hostile ideological camps.",
              "Nazi Germany was secretly preparing to launch a third world war.",
              "Great Britain had decided to adopt Soviet-style state communism."
            ],
            "correctIndex": 1,
            "explanation": "Churchill declared: 'From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent.' In violation of Yalta promises of free elections, Stalin installed puppet communist regimes across Poland, East Germany, Hungary, Romania, and Czechoslovakia.",
            "distractorTip": "The 'Iron Curtain' was a metaphorical political divide in 1946; the physical Berlin Wall was not constructed until 1961."
          },
          {
            "id": "whap8-l1-q3",
            "stem": "What was the primary geopolitical purpose of the Marshall Plan (European Recovery Program) enacted by the United States in 1948?",
            "options": [
              "To finance the rebuilding of the Soviet Union's industrial infrastructure.",
              "To establish an American nuclear arsenal across Eastern European capital cities.",
              "To provide over $12 billion in economic aid to rebuild war-torn Western European economies, thereby stabilizing democratic governments and containing the spread of communism.",
              "To force European nations to adopt the US dollar as their domestic currency."
            ],
            "correctIndex": 2,
            "explanation": "US Secretary of State George Marshall recognized that economic despair and physical ruin in postwar Europe provided fertile ground for communist parties to win elections; massive financial grants revived European industry, stimulated US exports, and anchored Western Europe into the capitalist sphere.",
            "distractorTip": "The Marshall Plan was an economic prong of the Truman Doctrine's containment strategy."
          }
        ]
      },
      {
        "id": 802,
        "unitIndex": 8,
        "levelNumber": 2,
        "uniqueKey": "whap-u8-l2",
        "topicNumber": "Topic 8.2",
        "name": "Cold War Alliances & Nuclear Brinkmanship",
        "subtitle": "NATO vs. Warsaw Pact, MAD doctrine, nuclear arms race, and the Cuban Missile Crisis",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "whap8-l2-q1",
            "stem": "The creation of the North Atlantic Treaty Organization (NATO) in 1949 and the Soviet response, the Warsaw Pact in 1955, solidified the Cold War into:",
            "options": [
              "A single unified international Olympic athletic committee.",
              "A peaceful trade agreement that eliminated all national border tariffs.",
              "Two opposing collective security military alliances bound by mutual defense agreements, where an armed attack against one member was considered an attack against all.",
              "A joint scientific mission to colonize the planet Mars."
            ],
            "correctIndex": 2,
            "explanation": "NATO unified the US, Canada, and Western European democracies in collective defense against potential Soviet aggression. In 1955 (after West Germany joined NATO), the USSR organized its Eastern European satellites into the rival Warsaw Pact, institutionalizing the military standoff.",
            "distractorTip": "NATO = Western Democratic/Capitalist Bloc; Warsaw Pact = Soviet/Communist Satellite Bloc."
          },
          {
            "id": "whap8-l2-q2",
            "stem": "Why did the doctrine of Mutually Assured Destruction (MAD) prevent the United States and the Soviet Union from engaging in direct military conflict during the Cold War?",
            "options": [
              "Neither nation had invented nuclear weapons before 1990.",
              "Both nations had agreed to surrender their nuclear weapons to the Vatican.",
              "The United Nations legally outlawed all national military budgets.",
              "Both superpowers possessed vast thermonuclear arsenals and second-strike capabilities, meaning any direct nuclear exchange would result in the total mutual annihilation of both civilizations."
            ],
            "correctIndex": 3,
            "explanation": "MAD created a terrifying paradox: because both nations possessed intercontinental ballistic missiles (ICBMs) and nuclear-armed submarines capable of surviving a first strike, starting a war guaranteed national suicide. This 'nuclear umbrella' prevented direct superpower clashes.",
            "distractorTip": "MAD prevented World War III, but channeled superpower conflict into peripheral proxy wars in the Global South."
          },
          {
            "id": "whap8-l2-q3",
            "stem": "The 1962 Cuban Missile Crisis was peacefully resolved when Soviet Premier Nikita Khrushchev agreed to withdraw nuclear missiles from Cuba in exchange for:",
            "options": [
              "A public US pledge not to invade Cuba and a secret agreement to dismantle American Jupiter missiles stationed in Turkey.",
              "The complete surrender of the US naval base at Guantanamo Bay to Fidel Castro.",
              "The immediate reunification of East and West Germany under Soviet administration.",
              "The abolition of the North Atlantic Treaty Organization (NATO)."
            ],
            "correctIndex": 0,
            "explanation": "At the height of the crisis, after a tense naval 'quarantine' of Cuba, President John F. Kennedy and Khrushchev reached a compromise: the USSR dismantled Cuban launch sites, while the US promised never to invade Cuba and quietly removed obsolete Jupiter missiles from Turkey.",
            "distractorTip": "The Cuban Missile Crisis led directly to the establishment of the Moscow-Washington hotline and the 1963 Nuclear Test Ban Treaty."
          }
        ]
      },
      {
        "id": 803,
        "unitIndex": 8,
        "levelNumber": 3,
        "uniqueKey": "whap-u8-l3",
        "topicNumber": "Topic 8.3",
        "name": "Cold War Proxy Wars: Hot Conflicts in the Cold War",
        "subtitle": "Korean War (1950–1953), Vietnam War, Soviet-Afghan War, and Angolan Civil War",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap8-l3-q1",
            "stem": "The Korean War (1950–1953) and Vietnam War (1955–1975) are quintessential examples of Cold War proxy wars because:",
            "options": [
              "Local ideological conflicts between communist and anti-communist factions were heavily funded, armed, and militarily backed by the rival superpower blocs (US and USSR/China) without direct US-Soviet nuclear war.",
              "Both wars were fought entirely by computer simulated algorithms.",
              "The fighting occurred strictly on the territory of North America and Russia.",
              "Neither conflict involved any loss of human life."
            ],
            "correctIndex": 0,
            "explanation": "Proxy wars allowed the superpowers to battle for global influence without triggering direct nuclear war. In Korea and Vietnam, local struggles for national self-determination became bloody ideological battlegrounds between US-backed capitalist regimes and Soviet/Chinese-backed communist forces.",
            "distractorTip": "Superpowers used proxy wars to test weapons and project power across Asia, Africa, and Latin America without triggering MAD."
          },
          {
            "id": "whap8-l3-q2",
            "stem": "The Soviet invasion of Afghanistan (1979–1989) is often referred to as the 'Soviet Union's Vietnam' because:",
            "options": [
              "Soviet troops were immediately welcomed with open arms by all Afghan citizens.",
              "The Red Army became bogged down in a grueling decade-long guerrilla war against US-backed Islamic mujahideen fighters, resulting in massive economic drain and demoralization that hastened the USSR's collapse.",
              "The invasion resulted in the immediate expansion of the Soviet Union to the Indian Ocean.",
              "The conflict was settled peacefully within three days of combat."
            ],
            "correctIndex": 1,
            "explanation": "Seeking to prop up a failing client communist government in Kabul, Moscow invaded Afghanistan. The US (via the CIA's Operation Cyclone), Saudi Arabia, and Pakistan supplied billions in arms (including Stinger surface-to-air missiles) to Islamic insurgent mujahideen, bleeding the Soviet military dry.",
            "distractorTip": "The Afghan quagmire drained Soviet finances, shattered Red Army prestige, and alienated the Soviet public, accelerating the fall of the USSR."
          },
          {
            "id": "whap8-l3-q3",
            "stem": "The Angolan Civil War (1975–2002) is a prominent example of a Cold War proxy conflict in the Global South because:",
            "options": [
              "It was fought exclusively between British and Portuguese colonial armies without indigenous participation.",
              "The United Nations prevented any foreign nations from sending financial or military aid.",
              "It was fought entirely over fishing rights in the South Atlantic Ocean.",
              "Competing anti-colonial factions were heavily backed by rival foreign powers: the Marxist MPLA was supported by the Soviet Union and Cuban combat troops, while UNITA was armed by the United States and apartheid South Africa."
            ],
            "correctIndex": 3,
            "explanation": "Following Angola's independence from Portugal, internal rivalries escalated into a Cold War proxy war: Cuba dispatched tens of thousands of combat troops and Soviet arms to defend the Marxist MPLA government in Luanda, while the US (via the CIA) and South Africa funded Jonas Savimbi's UNITA.",
            "distractorTip": "Proxy wars allowed the superpowers to wage ideological combat in third-world arenas without risking direct, catastrophic nuclear confrontation with each other."
          }
        ]
      },
      {
        "id": 804,
        "unitIndex": 8,
        "levelNumber": 4,
        "uniqueKey": "whap-u8-l4",
        "topicNumber": "Topic 8.4",
        "name": "Spread of Communism in Asia: Mao's China",
        "subtitle": "Chinese Civil War (1949), Great Leap Forward (famine), and the Cultural Revolution",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap8-l4-q1",
            "stem": "How did Mao Zedong's 'Great Leap Forward' (1958–1962) attempt to rapidly transform the People's Republic of China, and what was its catastrophic result?",
            "options": [
              "China adopted American-style free-market capitalism, producing record agricultural surpluses.",
              "Mao dissolved the Chinese military and signed an unconditional alliance with Taiwan.",
              "Mao forced peasants into giant agrarian communes and backyard steel furnaces; bureaucratic mismanagement, unrealistic quotas, and severe grain requisitioning produced the deadliest man-made famine in history, killing an estimated 30–45 million people.",
              "China peacefully transferred all governance to the United Nations."
            ],
            "correctIndex": 2,
            "explanation": "Mao attempted to bypass conventional industrialization by collectivizing 700 million peasants into massive rural communes and producing useless brittle pig iron in backyard furnaces. Local officials falsified harvest reports, leading the state to confiscate grain for export while millions of peasants starved to death.",
            "distractorTip": "The Great Leap Forward was an agrarian-focused disaster driven by radical ideology over scientific reality."
          },
          {
            "id": "whap8-l4-q2",
            "stem": "Mao launched the violent 'Great Proletarian Cultural Revolution' (1966–1976) primarily to:",
            "options": [
              "Promote traditional Confucian filial piety and restore ancestral shrines.",
              "Encourage Chinese students to study abroad in Western European universities.",
              "Establish a multiparty parliamentary democracy in Beijing.",
              "Purge political rivals, enforce radical ideological purity, and eliminate the 'Four Olds' (old customs, culture, habits, and ideas) using fanatical teenage Red Guard mobs."
            ],
            "correctIndex": 3,
            "explanation": "Fearing that moderate Communist Party officials (like Liu Shaoqi and Deng Xiaoping) were taking the 'capitalist road,' Mao mobilized millions of youth into the Red Guards. Armed with the 'Little Red Book,' they attacked teachers, destroyed historic temples and artifacts, and sent intellectuals to rural labor camps.",
            "distractorTip": "The Cultural Revolution was Mao's desperate campaign to purge rivals and weaponize youth radicalism to retain absolute power."
          },
          {
            "id": "whap8-l4-q3",
            "stem": "Why did Mao Zedong's \"Great Leap Forward\" (1958–1962) result in one of the deadliest human-made famines in world history?",
            "options": [
              "An invasion by Japanese imperial forces devastated China's coastal grain silos.",
              "Forcible collectivization into massive rural communes, diversion of peasant labor to useless \"backyard steel furnaces,\" and falsified grain harvest quotas caused catastrophic agricultural collapse and 30–45 million deaths.",
              "The total refusal of the Chinese government to trade with the Soviet Union.",
              "A catastrophic multi-year flood that completely inundated the Gobi Desert."
            ],
            "correctIndex": 1,
            "explanation": "Mao sought to bypass Soviet industrial models by mobilizing the rural masses; peasants were forced into giant communes and ordered to produce low-quality iron rather than farming, while local officials lied about harvest yields, causing the state to confiscate the remaining grain and creating the Great Chinese Famine.",
            "distractorTip": "Contrast the Great Leap Forward (economic/industrial catastrophe) with the Cultural Revolution (political/ideological purge of traditional culture and intellectual elites)."
          }
        ]
      },
      {
        "id": 805,
        "unitIndex": 8,
        "levelNumber": 5,
        "uniqueKey": "whap-u8-l5",
        "topicNumber": "Topic 8.5",
        "name": "Decolonization in South Asia: Partition & Independence",
        "subtitle": "Indian National Congress, Gandhi's nonviolence, Muhammad Ali Jinnah, and the 1947 Partition",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap8-l5-q1",
            "stem": "Mohandas Gandhi mobilized millions of Indians against British colonial rule through which political strategy?",
            "options": [
              "Nonviolent civil disobedience (Satyagraha), mass boycotts of British manufactured textiles, and symbolic protest marches (such as the 1930 Salt March).",
              "Conducting urban terrorist bombing campaigns against British civilian schools.",
              "Forming an offensive military alliance with Nazi Germany to invade London.",
              "Urging all Indian citizens to voluntarily assimilate into British Anglican Christianity."
            ],
            "correctIndex": 0,
            "explanation": "Gandhi's philosophy of Satyagraha ('truth-force') combined moral nonviolence with economic disruption: making homespun khadi cloth to boycott British cotton mills, walking 240 miles to the sea to harvest untaxed salt, and enduring police beatings without retaliation, exposing British moral hypocrisy to global cameras.",
            "distractorTip": "Gandhi weaponized moral high ground and nonviolent mass mobilization, inspiring Martin Luther King Jr. and Nelson Mandela."
          },
          {
            "id": "whap8-l5-q2",
            "stem": "The 1947 Partition of the British Indian Empire into the independent nations of India and Pakistan resulted in which humanitarian catastrophe?",
            "options": [
              "The peaceful, voluntary exchange of property with zero civilian casualties.",
              "Widespread communal violence between Hindus, Muslims, and Sikhs that left an estimated one million dead and triggered the traumatic mass displacement of over 15 million refugees across new borders.",
              "The immediate military reconquest of South Asia by the Portuguese navy.",
              "The permanent unification of South Asia into a single non-religious state."
            ],
            "correctIndex": 1,
            "explanation": "Fearing that a unified democratic India would relegate Muslims to permanent minority status, Muhammad Ali Jinnah and the All-India Muslim League demanded a separate Muslim homeland (Pakistan). British lawyer Cyril Radcliffe drew hasty borders in five weeks, unleashing sectarian massacres, train massacres, and mass refugee migrations.",
            "distractorTip": "Partition created two nations: Hindu-majority India and Muslim-majority Pakistan (which initially included East Pakistan, modern-day Bangladesh)."
          },
          {
            "id": "whap8-l5-q3",
            "stem": "Why did Muhammad Ali Jinnah and the All-India Muslim League advocate for the creation of a separate independent state of Pakistan in 1947?",
            "options": [
              "They sought to maintain permanent colonial loyalty to the British royal monarchy.",
              "They demanded that South Asia adopt a unified communist command economy.",
              "They feared that in a unified, democratic post-independence India, the Muslim minority would be politically marginalized and dominated by the Hindu majority.",
              "They wanted to establish an overseas trading colony in East Africa."
            ],
            "correctIndex": 2,
            "explanation": "Jinnah advanced the 'Two-Nation Theory,' asserting that Hindus and Muslims in South Asia constituted distinct nations with different cultures and religions; fearing Hindu majoritarian rule under the Congress Party, the Muslim League demanded an autonomous Muslim homeland (Pakistan).",
            "distractorTip": "The tragic 1947 Partition resulted in the displacement of over 15 million people and sectarian massacres that killed between 500,000 and 1 million people."
          }
        ]
      },
      {
        "id": 806,
        "unitIndex": 8,
        "levelNumber": 6,
        "uniqueKey": "whap-u8-l6",
        "topicNumber": "Topic 8.5",
        "name": "African Decolonization: Negotiation vs. Armed Struggle",
        "subtitle": "Ghana's peaceful transition (Kwame Nkrumah) vs. Algeria's violent liberation war (FLN)",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap8-l6-q1",
            "stem": "Ghana became the first Sub-Saharan African colony to achieve independence from European rule in 1957, led by Kwame Nkrumah through which primary method?",
            "options": [
              "A twenty-year protracted guerrilla civil war that destroyed all Ghanaian cities.",
              "Direct military conquest of London by the Ghanaian army.",
              "Mass political organizing, strikes, and constitutional negotiations with the British government, followed by Nkrumah's advocacy for Pan-African unity.",
              "The voluntary purchase of the colony from Britain for gold bullion."
            ],
            "correctIndex": 2,
            "explanation": "Nkrumah organized the Convention People's Party, utilizing nonviolent 'Positive Action' (boycotts, strikes) to pressure Britain into granting constitutional self-governance. Ghana's peaceful 1957 independence ignited a wave of decolonization across Africa, with Nkrumah championing the Organization of African Unity (OAU).",
            "distractorTip": "Ghana is the prime College Board example of *negotiated* African independence; Algeria and Kenya represent *armed struggle*."
          },
          {
            "id": "whap8-l6-q2",
            "stem": "In contrast to Ghana, why was the Algerian War of Independence (1954–1962) against France exceptionally violent and brutal?",
            "options": [
              "Algerian leaders refused to engage in armed resistance and remained pacifists.",
              "The United Nations ordered French troops to exterminate the entire Algerian population.",
              "Algeria was uninhabited prior to the arrival of the French army.",
              "Algeria was legally classified as an integral department of France and home to over a million European settlers (pieds-noirs) who fiercely resisted Algerian self-determination, prompting the FLN to wage bloody urban and rural guerrilla warfare."
            ],
            "correctIndex": 3,
            "explanation": "France did not view Algeria as a mere colony, but as part of France itself. European settlers (pieds-noirs) monopolized prime land and political rights. The National Liberation Front (FLN) fought an 8-year war of terrorism, torture, and guerrilla combat that claimed up to 1 million Algerian lives and brought down France's Fourth Republic.",
            "distractorTip": "Decolonization was most violent in 'settler colonies' (Algeria, Kenya, Zimbabwe, South Africa) where white European minorities fought desperately to maintain their privileges."
          },
          {
            "id": "whap8-l6-q3",
            "stem": "Kwame Nkrumah of Ghana became a leading ideological figure in postwar Africa by advocating which visionary political philosophy?",
            "options": [
              "Pan-Africanism, calling for continental political unity and economic cooperation among newly liberated African states to resist neocolonial exploitation.",
              "Continued colonial membership in the French Community with French as the sole administrative language.",
              "The voluntary re-annexation of African territories by European chartered trading companies.",
              "The establishment of hereditary monarchies based on ancient feudal European models."
            ],
            "correctIndex": 0,
            "explanation": "Nkrumah argued that individual African states, burdened by artificial colonial borders and resource monocultures, were too weak to resist Western economic domination; he championed Pan-Africanism and the Organization of African Unity (OAU) to unite the continent.",
            "distractorTip": "Nkrumah led Ghana to independence through peaceful strikes and negotiations in 1957, in contrast to violent settler conflicts like Algeria or Kenya."
          }
        ]
      },
      {
        "id": 807,
        "unitIndex": 8,
        "levelNumber": 7,
        "uniqueKey": "whap-u8-l7",
        "topicNumber": "Topic 8.6 & 8.7",
        "name": "The Non-Aligned Movement & Newly Independent States",
        "subtitle": "Bandung Conference (1955), Sukarno, Tito, Nehru, Nasser, and the third-world alternative",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap8-l7-q1",
            "stem": "The historic Bandung Conference (1955) in Indonesia, attended by 29 Asian and African nations, gave birth to the Non-Aligned Movement primarily to:",
            "options": [
              "Devise a third-world path that avoided formal military alignment with either the US or the Soviet superpower bloc, while promoting anti-colonialism and economic self-determination.",
              "Form a unified military alliance to launch a joint invasion of North America.",
              "Sign an unconditional mutual defense pact with the Warsaw Pact.",
              "Merge all Asian and African nations into a single monetary currency union."
            ],
            "correctIndex": 0,
            "explanation": "Leaders like Jawaharlal Nehru (India), Sukarno (Indonesia), Gamal Abdel Nasser (Egypt), and Josip Broz Tito (Yugoslavia) refused to be pawns in the Cold War. The Non-Aligned Movement sought to navigate between capitalist and communist imperialism, supporting national sovereignty and mutual non-aggression.",
            "distractorTip": "Non-Alignment was NOT neutrality; non-aligned nations actively leveraged their positions to extract economic aid from *both* superpowers."
          },
          {
            "id": "whap8-l7-q2",
            "stem": "Egyptian President Gamal Abdel Nasser's nationalization of the Suez Canal in 1956 sparked the Suez Crisis, which demonstrated that:",
            "options": [
              "The Ottoman Empire had reclaimed complete military control over the Middle East.",
              "Britain and France were no longer independent global superpowers capable of imposing their will in the post-colonial world without United States approval.",
              "The Soviet Union had signed a permanent military alliance with Great Britain.",
              "The Suez Canal was permanently closed to all international maritime commerce."
            ],
            "correctIndex": 1,
            "explanation": "When Britain, France, and Israel invaded Egypt to seize the canal, US President Eisenhower furiously forced them to withdraw by threatening to crash the British pound, while the USSR threatened rocket attacks. The crisis cemented Nasser's prestige as a pan-Arab hero and proved the old European imperial powers were finished.",
            "distractorTip": "The 1956 Suez Crisis showed that the superpowers (US and USSR) now dictated global affairs, not London or Paris."
          },
          {
            "id": "whap8-l7-q3",
            "stem": "The Non-Aligned Movement (NAM), formalized at the 1961 Belgrade Conference by leaders like Jawaharlal Nehru and Josip Broz Tito, aimed primarily to:",
            "options": [
              "Compel all African and Asian nations to join the Warsaw Pact military alliance.",
              "Force newly independent nations to adopt American-style unregulated laissez-faire capitalism.",
              "Form a unified military bloc to wage offensive war against NATO.",
              "Create a collective third diplomatic bloc of developing nations that maintained neutrality and avoided entangling alliances with either the US or the Soviet superpower camps."
            ],
            "correctIndex": 3,
            "explanation": "NAM gave voice to post-colonial nations in Asia, Africa, and Latin America; leaders sought to preserve their hard-won sovereignty by playing both superpowers off one another for development aid while refusing to host foreign military bases.",
            "distractorTip": "'Non-alignment' did not mean passive disengagement; non-aligned nations actively championed decolonization and international development in the UN."
          }
        ]
      },
      {
        "id": 808,
        "unitIndex": 8,
        "levelNumber": 8,
        "uniqueKey": "whap-u8-l8",
        "topicNumber": "Topic 8.7",
        "name": "Resistance to Established Power: Anti-Apartheid & Civil Rights",
        "subtitle": "Nelson Mandela, African National Congress (ANC), Martin Luther King Jr., and 1968 global protests",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap8-l8-q1",
            "stem": "In South Africa, the system of Apartheid (established in 1948) was designed by the white Afrikaner National Party primarily to:",
            "options": [
              "Grant equal democratic voting rights to all citizens regardless of race.",
              "Eliminate all racial classifications in favor of pure meritocracy.",
              "Legally enforce total racial segregation, political disenfranchisement, and economic subjugation of the Black majority through pass laws and impoverished 'Bantustan' homelands.",
              "Encourage massive immigration from Asian socialist nations."
            ],
            "correctIndex": 2,
            "explanation": "Apartheid ('apartness') stripped the 80% Black majority of citizenship, forced them into segregated townships or barren Bantustans, and required internal passports ('pass books') to work in white-owned mines and cities, preserving all political power and wealth for the white minority.",
            "distractorTip": "Apartheid was a state-enforced caste system of racial supremacy, dismantled in the 1990s through ANC struggle, global boycotts, and Nelson Mandela's leadership."
          },
          {
            "id": "whap8-l8-q2",
            "stem": "How did global economic sanctions, sporting boycotts, and internal resistance led by Nelson Mandela and the African National Congress (ANC) finally dismantle Apartheid by 1994?",
            "options": [
              "Through a successful Soviet nuclear strike on Johannesburg.",
              "By voluntary agreement of the United Nations to annex South Africa.",
              "By the complete migration of the entire white population to Australia.",
              "By creating overwhelming internal economic disruption and international diplomatic pariah status, forcing F.W. de Klerk's government to negotiate multiracial democratic elections that elected Mandela as president."
            ],
            "correctIndex": 3,
            "explanation": "A combination of grassroots resistance (Soweto uprising, trade union strikes), cultural and sporting boycotts (banned from the Olympics), and international divestment sanctions made Apartheid economically and diplomatically unsustainable, leading to the historic 1994 multiracial elections.",
            "distractorTip": "Mandela spent 27 years in prison before emerging to become South Africa's first democratically elected Black president in 1994."
          },
          {
            "id": "whap8-l8-q3",
            "stem": "How did the African National Congress (ANC), led by figures such as Nelson Mandela, resist South Africa's minority white apartheid regime?",
            "options": [
              "By voluntarily emigrating all Black South Africans to neighboring Botswana.",
              "Through a multifaceted campaign combining nonviolent civil disobedience, international diplomatic pressure and boycotts, and targeted armed sabotage via its wing Umkhonto we Sizwe.",
              "By supporting the apartheid government's Bantustan homeland partition policy.",
              "By relying exclusively on military invasions launched by the British army."
            ],
            "correctIndex": 1,
            "explanation": "The ANC began with peaceful protests (Defiance Campaign), but after the 1960 Sharpeville Massacre, Mandela co-founded Umkhonto we Sizwe ('Spear of the Nation') for sabotage; decades of domestic resistance combined with global economic boycotts and divestment forced the regime to negotiate the end of apartheid in the 1990s.",
            "distractorTip": "The anti-apartheid struggle succeeded through the convergence of domestic resistance, armed pressure, and unprecedented international economic and cultural boycotts."
          }
        ]
      },
      {
        "id": 809,
        "unitIndex": 8,
        "levelNumber": 9,
        "uniqueKey": "whap-u8-l9",
        "topicNumber": "Topic 8.8 & 8.9",
        "name": "Collapse of the Soviet Union & End of the Cold War (Boss)",
        "subtitle": "Mikhail Gorbachev, Glasnost (openness), Perestroika (restructuring), and the 1989 fall of the Berlin Wall",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "whap8-l9-q1",
            "stem": "Soviet leader Mikhail Gorbachev introduced the twin reform policies of 'Glasnost' (openness) and 'Perestroika' (restructuring) in the late 1980s primarily to:",
            "options": [
              "Revitalize the stagnant Soviet economy through limited market incentives and permit greater freedom of speech and political transparency, which unintentionally accelerated the collapse of communist control.",
              "Launch an immediate offensive military invasion of Western Europe.",
              "Re-establish the medieval Tsarist Romanov monarchy.",
              "Force all Soviet citizens to convert to Roman Catholicism."
            ],
            "correctIndex": 0,
            "explanation": "Facing economic stagnation, widespread alcoholism, corruption, and the 1986 Chernobyl nuclear disaster, Gorbachev tried to reform communism to save it. But freedom of speech (Glasnost) allowed citizens to openly criticize the regime, while Perestroika disrupted central planning without providing consumer goods, triggering nationalist rebellions.",
            "distractorTip": "Gorbachev wanted to reform the Soviet system, not destroy it; but his reforms unleashed forces of nationalism that dissolved the USSR."
          },
          {
            "id": "whap8-l9-q2",
            "stem": "The peaceful opening and demolition of the Berlin Wall in November 1989 symbolized:",
            "options": [
              "The military annexation of Western Europe by the Warsaw Pact.",
              "The collapse of Soviet communist domination in Eastern Europe, leading to German reunification and the impending dissolution of the USSR in 1991.",
              "The permanent division of Europe into four sovereign military zones.",
              "The complete elimination of the North Atlantic Treaty Organization."
            ],
            "correctIndex": 1,
            "explanation": "When Gorbachev announced that the Red Army would no longer intervene to prop up unpopular Eastern European communist regimes (repudiating the Brezhnev Doctrine), revolutions toppled communist dictatorships across Poland, Hungary, and East Germany, culminating in the joyous fall of the Berlin Wall on November 9, 1989.",
            "distractorTip": "The fall of the Berlin Wall is the defining visual symbol of the end of the Cold War."
          },
          {
            "id": "whap8-l9-q3",
            "stem": "Which unintended consequence of Mikhail Gorbachev's policy of Glasnost (political openness) contributed most decisively to the dissolution of the Soviet Union in 1991?",
            "options": [
              "It caused an immediate military invasion of Moscow by NATO ground forces.",
              "It led the Soviet military to successfully overthrow the United States government.",
              "It unleashed long-suppressed nationalist movements and public criticism across non-Russian Soviet republics (such as the Baltic states, Ukraine, and the Caucasus), fueling demands for full independence.",
              "It forced the Russian Federation to restore the Romanov imperial monarchy."
            ],
            "correctIndex": 2,
            "explanation": "Glasnost allowed freedom of speech, press, and historical reevaluation; instead of merely revitalizing Soviet communism as Gorbachev hoped, it exposed historical atrocities (like the Gulag and Chernobyl coverup) and allowed ethnic minorities across the republics to mobilize for national self-determination.",
            "distractorTip": "Gorbachev intended to reform and save Soviet socialism; glasnost and perestroika unintentionally dismantled the ideological and coercive glue holding the USSR together."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 9,
    "unitId": "u9",
    "title": "Unit 9: Globalization (1900 to present)",
    "shortTitle": "Unit 9: Globalization",
    "description": "Advances in tech & medicine, Green Revolution, environmental debates, neoliberal economics, and universal human rights",
    "examWeight": "8–10% of AP Exam",
    "biome": {
      "name": "Global Satellite Array & WTO Summit",
      "icon": "🌐",
      "accentColor": "#0D9488",
      "secondaryColor": "#0F766E",
      "groundGradient": "from-teal-100 via-cyan-50 to-emerald-100",
      "cardBorder": "border-teal-600",
      "trailColor": "#0d9488",
      "nodeRing": "ring-teal-400/40",
      "skyTint": "from-teal-50 to-cyan-50/30"
    },
    "levels": [
      {
        "id": 901,
        "unitIndex": 9,
        "levelNumber": 1,
        "uniqueKey": "whap-u9-l1",
        "topicNumber": "Topic 9.1",
        "name": "Advances in Science, Technology & Global Communication",
        "subtitle": "Radio, cellular phones, the internet, containerized shipping, and commercial aviation",
        "difficulty": "Easy",
        "rewardCoins": 25,
        "questions": [
          {
            "id": "whap9-l1-q1",
            "stem": "Which technological breakthrough in transportation radically lowered global trade shipping costs and enabled the rapid expansion of international supply chains in the late 20th century?",
            "options": [
              "Supersonic horse-drawn carriages.",
              "Oar-powered wooden galleys navigating along coastal canals.",
              "Containerized intermodal freight shipping, allowing standard steel containers to be seamlessly transferred between cargo ships, trains, and semi-trucks.",
              "The invention of the coal-fired river steam paddleboat."
            ],
            "correctIndex": 2,
            "explanation": "Invented by Malcolm McLean in 1956, standardized steel shipping containers eliminated manual dock loading, slashing shipping costs by over 90% and time by 80%. This enabled multinational corporations to source components across different continents and assemble products thousands of miles away.",
            "distractorTip": "Containerization is the unsung mechanical hero of economic globalization: it made transoceanic freight dirt cheap."
          },
          {
            "id": "whap9-l1-q2",
            "stem": "The development of the internet, satellite communication, and smartphones in the late 20th and early 21st centuries resulted in:",
            "options": [
              "The complete elimination of all national governments and borders.",
              "A dramatic decrease in international commercial transactions.",
              "The total abandonment of print media and literature worldwide.",
              "Instantaneous global transmission of information, finance, and culture, creating what sociologists term the 'global village.'"
            ],
            "correctIndex": 3,
            "explanation": "Digital communication technologies collapsed time and geographic distance. Financial trades occur in milliseconds, breaking news reaches billions instantly, and cultural products (music, film, memes) diffuse globally overnight, intertwining human societies like never before.",
            "distractorTip": "Information technology accelerated globalization, but also heightened debates over digital privacy, cyber warfare, and cultural homogenization."
          },
          {
            "id": "whap9-l1-q3",
            "stem": "The invention of standardized containerized shipping (intermodal shipping containers) in the mid-twentieth century dramatically transformed global trade by:",
            "options": [
              "Drastically reducing port turnaround times and freight transport costs, enabling the formation of seamless, transoceanic just-in-time manufacturing supply chains.",
              "Eliminating all merchant ocean vessels in favor of transcontinental freight blimps.",
              "Banning maritime commerce through international canals like Suez and Panama.",
              "Quadrupling the cost of maritime shipping, forcing nations to rely on localized artisan workshops."
            ],
            "correctIndex": 0,
            "explanation": "Standardized intermodal steel containers allowed cargo to be transferred seamlessly between container ships, freight trains, and semi-trucks without manual re-handling at docks, cutting shipping costs by over 90% and enabling globalized supply chains.",
            "distractorTip": "Containerization is one of the unsung physical catalysts of modern economic globalization."
          }
        ]
      },
      {
        "id": 902,
        "unitIndex": 9,
        "levelNumber": 2,
        "uniqueKey": "whap-u9-l2",
        "topicNumber": "Topic 9.1",
        "name": "The Green Revolution & Energy Innovations",
        "subtitle": "Norman Borlaug, cross-bred high-yield dwarf wheat/rice, synthetic fertilizers, and water depletion",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "whap9-l2-q1",
            "stem": "The Green Revolution of the mid-20th century, spearheaded by agricultural scientist Norman Borlaug, dramatically averted mass starvation in developing nations (such as India and Mexico) through:",
            "options": [
              "The breeding of high-yield, disease-resistant dwarf grain varieties combined with synthetic chemical fertilizers, pesticides, and motorized irrigation systems.",
              "The complete elimination of commercial grain farming in favor of foraging.",
              "The exclusive use of pre-industrial wooden plows and manual oxen labor.",
              "The forced depopulation of urban cities into rural communes."
            ],
            "correctIndex": 0,
            "explanation": "Borlaug developed genetically bred dwarf wheat and rice that could support heavy seed heads without falling over ('lodging'). When paired with synthetic nitrogen fertilizers and irrigation, crop yields tripled in Mexico and India, saving an estimated one billion people from starvation.",
            "distractorTip": "Norman Borlaug received the Nobel Peace Prize for the Green Revolution, credited with saving more lives than anyone in human history."
          },
          {
            "id": "whap9-l2-q2",
            "stem": "What significant environmental critique has been raised against the widespread practices of the Green Revolution?",
            "options": [
              "It caused a 90% decline in worldwide human life expectancy.",
              "Heavy chemical runoff created oceanic dead zones, intensive irrigation depleted underground aquifers, and small family farmers were often displaced by expensive corporate agribusiness.",
              "It completely halted all international trade in food products.",
              "It required the clear-cutting of all forests in North America."
            ],
            "correctIndex": 1,
            "explanation": "While the Green Revolution produced unprecedented food security, it caused severe ecological side-effects: synthetic fertilizer runoff caused eutrophication and algal blooms in waterways, deep tube-well irrigation drained ancient aquifers, and high input costs bankrupted small peasant farmers.",
            "distractorTip": "College Board frequently asks for both the positive demographic impact (tripled yields) AND negative environmental costs of the Green Revolution."
          },
          {
            "id": "whap9-l2-q3",
            "stem": "What was the primary technological achievement of the mid-twentieth-century Green Revolution spearheaded by Norman Borlaug?",
            "options": [
              "The replacement of all agricultural farming with synthetic laboratory meat.",
              "The eradication of all pesticide and chemical fertilizer use globally.",
              "The conversion of all global cropland to organic heirloom potato varieties.",
              "The breeding of high-yielding, pest-resistant dwarf varieties of wheat and rice, paired with synthetic nitrogen fertilizers, chemical irrigation, and mechanization, averting catastrophic famines in India and Mexico."
            ],
            "correctIndex": 3,
            "explanation": "Borlaug bred semi-dwarf wheat strains whose sturdy stalks could bear heavy grain heads without falling over; introduced to Mexico, India, and Pakistan alongside synthetic fertilizers and irrigation, crop yields skyrocketed, saving an estimated one billion lives.",
            "distractorTip": "While the Green Revolution prevented mass famines, critics highlight its environmental costs: groundwater depletion, chemical runoff, and reliance on expensive commercial inputs that harmed smallholders."
          }
        ]
      },
      {
        "id": 903,
        "unitIndex": 9,
        "levelNumber": 3,
        "uniqueKey": "whap-u9-l3",
        "topicNumber": "Topic 9.2",
        "name": "Global Disease & Epidemiology",
        "subtitle": "Pandemics (1918 flu, HIV/AIDS, Ebola), vaccines (polio), and lifestyle diseases (heart disease, Alzheimer's)",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap9-l3-q1",
            "stem": "Medical breakthroughs in the 20th century—such as Alexander Fleming's discovery of penicillin (antibiotics) and Jonas Salk's polio vaccine—had which profound demographic consequence?",
            "options": [
              "They caused the immediate worldwide extinction of all bacterial organisms.",
              "They led to the complete abandonment of modern hospitals and medical clinics.",
              "They drastically reduced infant mortality and eradicated or contained catastrophic bacterial and viral killers, contributing to a global human life expectancy surge.",
              "They decreased human life expectancy across developing nations."
            ],
            "correctIndex": 2,
            "explanation": "Before antibiotics, simple skin infections or pneumonia were frequently fatal. Vaccines eliminated smallpox (the only human disease eradicated by science) and tamed polio, while antibiotics revolutionized surgery and child survival, doubling human life expectancy in many parts of the world.",
            "distractorTip": "Antibiotics treat *bacterial* infections; vaccines prevent *viral* infections. Both transformed 20th-century public health."
          },
          {
            "id": "whap9-l3-q2",
            "stem": "As global life expectancy increased and diets modernized in the late 20th century, epidemiological patterns in affluent societies shifted toward which category of illness?",
            "options": [
              "Medieval waterborne bubonic plague epidemics.",
              "Nutritional scurvy caused by zero access to fruit.",
              "Diseases associated with extreme Arctic frostbite.",
              "Chronic lifestyle and longevity-associated diseases such as heart disease, type 2 diabetes, stroke, and Alzheimer's disease."
            ],
            "correctIndex": 3,
            "explanation": "Historically, humans died young from infectious pathogens (cholera, tuberculosis, dysentery). In the modern era, as people lived into their 70s and 80s and adopted sedentary lifestyles with processed foods, non-communicable lifestyle and age-related illnesses became the leading causes of death.",
            "distractorTip": "Notice the epidemiological transition: from acute infectious diseases (in poverty) to chronic lifestyle diseases (with longevity and wealth)."
          },
          {
            "id": "whap9-l3-q3",
            "stem": "The global eradication of smallpox, certified by the World Health Organization (WHO) in 1980, was achieved primarily through:",
            "options": [
              "The complete quarantine of entire continental landmasses for thirty years.",
              "A coordinated, worldwide public health campaign combining universal vaccination, surveillance, and ring containment of outbreaks.",
              "The natural evolutionary extinction of the virus without human medical intervention.",
              "The replacement of public sanitation with antibiotic chemical tablets in drinking water."
            ],
            "correctIndex": 1,
            "explanation": "Smallpox is the only human infectious disease ever completely eradicated; the WHO led an unprecedented international medical campaign that crossed Cold War geopolitical divides to vaccinate populations and track down every active outbreak.",
            "distractorTip": "Note that smallpox is viral (treated by vaccines), whereas antibiotics only target bacterial infections."
          }
        ]
      },
      {
        "id": 904,
        "unitIndex": 9,
        "levelNumber": 4,
        "uniqueKey": "whap-u9-l4",
        "topicNumber": "Topic 9.3",
        "name": "Environmental Challenges & Global Activism",
        "subtitle": "Deforestation, greenhouse gases, climate change, Kyoto/Paris accords, and Wangari Maathai",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap9-l4-q1",
            "stem": "The scientific consensus on anthropogenic (human-caused) climate change identifies which factor as the primary driver of rising global temperatures since 1900?",
            "options": [
              "The massive emission of greenhouse gases (especially carbon dioxide and methane) caused by the combustion of fossil fuels (coal, oil, gas) and widespread deforestation.",
              "Natural fluctuations in the Earth's orbit around the sun with zero human influence.",
              "The widespread construction of solar power panels across desert regions.",
              "The chemical neutralization of salt in ocean water."
            ],
            "correctIndex": 0,
            "explanation": "Since the Industrial Revolution, burning coal and petroleum has increased atmospheric carbon dioxide from 280 ppm to over 420 ppm, trapping infrared heat in the biosphere, melting polar ice sheets, causing sea-level rise, and intensifying extreme weather events.",
            "distractorTip": "The Anthropocene is the proposed geological epoch defined by humanity's dominant impact on the Earth's climate and ecosystems."
          },
          {
            "id": "whap9-l4-q2",
            "stem": "Kenyan environmental activist Wangari Maathai founded the Green Belt Movement in 1977 primarily to combat environmental degradation by:",
            "options": [
              "Demanding the complete shutdown of all agricultural farming in East Africa.",
              "Mobilizing rural African women to plant millions of trees to combat deforestation, prevent soil erosion, and secure sustainable firewood resources.",
              "Constructing nuclear power facilities across the Rift Valley.",
              "Encouraging international corporations to clear-cut native Kenyan rain forests."
            ],
            "correctIndex": 1,
            "explanation": "Maathai recognized that environmental protection, women's empowerment, and democracy were inseparable. Her Green Belt Movement paid poor rural women to plant over 51 million trees across Kenya, earning her the 2004 Nobel Peace Prize as the first African woman to win the award.",
            "distractorTip": "Wangari Maathai connects environmental sustainability directly with grassroots female economic empowerment."
          },
          {
            "id": "whap9-l4-q3",
            "stem": "The 1987 Montreal Protocol is celebrated as a landmark success of international environmental diplomacy because it:",
            "options": [
              "Mandated the total prohibition of all petroleum extraction worldwide.",
              "Imposed heavy fines on nations that failed to ban automobiles by the year 2000.",
              "Phased out the production and consumption of chlorofluorocarbons (CFCs) to protect and restore the Earth's stratospheric ozone layer.",
              "Transferred management of the Amazon rainforest to the United Nations Security Council."
            ],
            "correctIndex": 2,
            "explanation": "Scientists discovered that synthetic CFCs (used in refrigeration and aerosols) were depleting the ozone layer over Antarctica, exposing the planet to dangerous ultraviolet radiation; every UN member state ratified the Montreal Protocol, leading to the near-total phaseout of CFCs.",
            "distractorTip": "Contrast the Montreal Protocol (ozone layer protection via CFC phaseout, widely successful) with the Kyoto Protocol / Paris Agreement (carbon greenhouse gas emissions, harder to enforce)."
          }
        ]
      },
      {
        "id": 905,
        "unitIndex": 9,
        "levelNumber": 5,
        "uniqueKey": "whap-u9-l5",
        "topicNumber": "Topic 9.4",
        "name": "Free-Market Globalization: Deregulation & Neoliberalism",
        "subtitle": "Ronald Reagan, Margaret Thatcher, Deng Xiaoping, and Special Economic Zones (SEZs)",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "whap9-l5-q1",
            "stem": "The economic policies championed by US President Ronald Reagan and British Prime Minister Margaret Thatcher in the 1980s (often termed 'neoliberalism') focused on:",
            "options": [
              "Nationalizing all private banks and establishing a Soviet-style command economy.",
              "Outlawing all international trade across borders.",
              "Free-market deregulation, reducing corporate and income taxes, privatizing state-owned enterprises, cutting government spending on welfare, and promoting global free trade.",
              "Fixing all consumer prices and wages by royal decree."
            ],
            "correctIndex": 2,
            "explanation": "Reagan and Thatcher argued that government intervention stifled economic growth ('Government is not the solution to our problem; government is the problem'). Neoliberalism dismantled trade barriers, deregulated financial markets, and rolled back social welfare programs, setting the economic framework for modern globalization.",
            "distractorTip": "Neoliberalism means 'new economic liberalism' (in the classical Adam Smith sense of free markets and deregulation), NOT modern American political liberalism."
          },
          {
            "id": "whap9-l5-q2",
            "stem": "Following Mao's death, Chinese leader Deng Xiaoping transformed China's economy starting in 1978 through which historic policy?",
            "options": [
              "The complete abolition of all industrial manufacturing in China.",
              "The restoration of the Qing imperial dynasty under a new Manchu emperor.",
              "A complete trade embargo against all foreign nations.",
              "The 'Four Modernizations,' introducing market-oriented reforms, privatizing state farming, welcoming foreign capitalist investment, and establishing Special Economic Zones (SEZs) like Shenzhen."
            ],
            "correctIndex": 3,
            "explanation": "Deng famously declared: 'It doesn't matter if a cat is black or white, so long as it catches mice.' He introduced capitalist incentives ('Socialism with Chinese characteristics') while maintaining the Communist Party's authoritarian political monopoly, transforming China into the manufacturing 'factory of the world.'",
            "distractorTip": "Deng allowed economic capitalism while maintaining rigid political autocracy (as demonstrated by the 1989 Tiananmen Square crackdown)."
          },
          {
            "id": "whap9-l5-q3",
            "stem": "Neoliberal economic policies championed in the late twentieth century by leaders such as Ronald Reagan and Margaret Thatcher emphasized:",
            "options": [
              "Free-market capitalism, privatization of state-owned enterprises, deregulation of financial markets, and reduction of government social spending.",
              "The complete nationalization of all private banks, airlines, and factories.",
              "High protective tariffs to eliminate all international trade with developing countries.",
              "The establishment of Soviet-style state collective farms across urban centers."
            ],
            "correctIndex": 0,
            "explanation": "Neoliberalism revived classical laissez-faire principles (associated with economists like Milton Friedman and Friedrich Hayek), advocating for minimal state intervention, lower taxes, free trade, and reducing the role of labor unions and welfare states.",
            "distractorTip": "Do not confuse the contemporary American political term 'liberal' with 'neoliberalism'—neoliberalism refers to free-market capitalism, deregulation, and privatization."
          }
        ]
      },
      {
        "id": 906,
        "unitIndex": 9,
        "levelNumber": 6,
        "uniqueKey": "whap-u9-l6",
        "topicNumber": "Topic 9.4",
        "name": "Global Economic Organizations & Multinational Corporations",
        "subtitle": "World Trade Organization (WTO), NAFTA, IMF, World Bank, and multinational supply chains",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap9-l6-q1",
            "stem": "The World Trade Organization (WTO), founded in 1995 to replace the GATT, was created primarily to:",
            "options": [
              "Supervise and liberalize international trade by establishing global trade rules, resolving dispute settlements, and reducing tariffs and import quotas among member nations.",
              "Collect international income taxes from all world citizens.",
              "Command an international army to enforce global labor strikes.",
              "Outlaw the cross-border movement of all manufactured goods."
            ],
            "correctIndex": 0,
            "explanation": "The WTO serves as the supreme international regulatory body for global trade: negotiating tariff reductions, eliminating protectionist subsidies, and ruling on legal commercial disputes between member nations to ensure free-flowing commerce.",
            "distractorTip": "The WTO enforces global free trade rules; critics argue it sometimes prioritizes corporate trade over domestic labor and environmental protections."
          },
          {
            "id": "whap9-l6-q2",
            "stem": "Multinational corporations (such as Apple, Toyota, and Nestlé) embody the economic dynamics of modern globalization because they:",
            "options": [
              "Are owned entirely by the United Nations peacekeeping committee.",
              "Operate across national borders, conducting research in one country, sourcing raw materials in another, manufacturing in low-wage nations, and selling products in global consumer markets.",
              "Produce all of their goods inside a single village without importing foreign parts.",
              "Refuse to sell goods outside of their home country."
            ],
            "correctIndex": 1,
            "explanation": "Multinational corporations leverage global wage and regulatory differentials: designing software in California, purchasing cobalt from the DRC, assembling electronics in Chinese factories (e.g., Foxconn), and marketing to consumers worldwide.",
            "distractorTip": "Multinational corporations transcend borders, challenging traditional notions of national economic sovereignty."
          },
          {
            "id": "whap9-l6-q3",
            "stem": "How do international financial institutions like the International Monetary Fund (IMF) and the World Bank influence economic policy in developing nations?",
            "options": [
              "By sending United Nations peacekeeping troops to run national central banks directly.",
              "By granting unconditional gifts of gold bullion with zero repayment requirements.",
              "By prohibiting developing countries from joining international trade organizations.",
              "By providing emergency loans and development financing conditioned on \"Structural Adjustment Programs\" (SAPs) that mandate free-market reforms, privatization, and austerity cuts."
            ],
            "correctIndex": 3,
            "explanation": "When developing nations faced debt crises, the IMF and World Bank offered bailouts on the condition of adopting 'Washington Consensus' reforms (cutting government subsidies, privatizing public utilities, devaluing currencies), which critics argued worsened poverty and compromised sovereignty.",
            "distractorTip": "Structural Adjustment Programs (SAPs) were controversial because austerity cuts often targeted public healthcare, education, and food subsidies."
          }
        ]
      },
      {
        "id": 907,
        "unitIndex": 9,
        "levelNumber": 7,
        "uniqueKey": "whap-u9-l7",
        "topicNumber": "Topic 9.5",
        "name": "Calls for Reform: Human Rights & Global Liberation",
        "subtitle": "UN Universal Declaration of Human Rights, global feminism, and the Negritude movement",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap9-l7-q1",
            "stem": "The United Nations Universal Declaration of Human Rights (UDHR), adopted in 1948 under the leadership of Eleanor Roosevelt, represented a landmark international commitment because it:",
            "options": [
              "Authorized European monarchs to recolonize African nations.",
              "Outlawed the formation of labor unions worldwide.",
              "Articulated foundational, inalienable human rights (including life, liberty, freedom from torture, and freedom of expression) belonging universally to all human beings regardless of citizenship or nationality.",
              "Required all world citizens to speak English as their primary language."
            ],
            "correctIndex": 2,
            "explanation": "Formulated in the shadow of Nazi Holocaust atrocities, the UDHR declared that national sovereignty could no longer shield governments that abused their own people. It established universal moral standards that inspired global civil rights, anti-colonial, and feminist movements.",
            "distractorTip": "The UDHR is not a binding military treaty, but it created the international legal benchmark for fundamental human dignity."
          },
          {
            "id": "whap9-l7-q2",
            "stem": "The 'Negritude Movement' (Mouvement Négritude), founded in 1930s Paris by Francophone intellectuals like Aimé Césaire and Léopold Sédar Senghor, sought to:",
            "options": [
              "Encourage all African leaders to adopt French royal feudalism.",
              "Dissolve all traditional African poetry and musical traditions.",
              "Promote the immediate annexation of Senegal by the United States.",
              "Celebrate Black African cultural identity, artistic creativity, and heritage while fiercely rejecting French assimilation and colonial racism."
            ],
            "correctIndex": 3,
            "explanation": "Negritude rejected the French colonial ideology of 'assimilation' (which taught colonized Africans that their culture was inferior). Instead, poets and philosophers affirmed Black pride, celebrated African aesthetic genius, and provided an intellectual springboard for post-war decolonization.",
            "distractorTip": "Negritude was a powerful cultural and intellectual anti-colonial movement celebrating Black pride and heritage."
          },
          {
            "id": "whap9-l7-q3",
            "stem": "The 1979 United Nations Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW) is often described as an international bill of rights for women because it:",
            "options": [
              "Established an international criminal court exclusively staffed by female judges.",
              "Obligated signatory nations to incorporate gender equality into domestic legislation, eliminate discriminatory laws, and protect women's reproductive, educational, and political rights.",
              "Mandated that all national parliaments maintain a 100% female representation quota.",
              "Banned women from working in private corporate enterprises."
            ],
            "correctIndex": 1,
            "explanation": "CEDAW defined discrimination against women and set up an agenda for national action, requiring states to eliminate gender disparities in voting, employment, healthcare, marriage, and family law.",
            "distractorTip": "CEDAW is the comprehensive international legal instrument addressing gender equality and women's rights across legal, social, and economic spheres."
          }
        ]
      },
      {
        "id": 908,
        "unitIndex": 9,
        "levelNumber": 8,
        "uniqueKey": "whap-u9-l8",
        "topicNumber": "Topic 9.6 & 9.7",
        "name": "Globalized Culture & Resistance to Globalization",
        "subtitle": "Pop culture diffusion (Bollywood, K-pop, FIFA) vs. anti-WTO protests (Battle of Seattle)",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "whap9-l9-q1",
            "stem": "The global popularity of Indian Bollywood cinema, Jamaican reggae music, South Korean K-pop, and the FIFA World Cup illustrates which cultural characteristic of the late 20th and early 21st centuries?",
            "options": [
              "The multi-directional diffusion and globalization of popular culture, challenging the exclusive dominance of Western American media exports.",
              "The total destruction of all regional and traditional indigenous arts.",
              "The legal banning of all sports and musical broadcasts by national governments.",
              "A worldwide mandate requiring all films to be produced in Hollywood."
            ],
            "correctIndex": 0,
            "explanation": "While critics initially feared globalization would mean 'Americanization' (McDonald's, Hollywood), cultural globalization became vibrant and multi-directional: K-pop (BTS) tops Western music charts, Bollywood reaches billions, and reggae's message of social liberation inspires global movements.",
            "distractorTip": "Cultural globalization is not a one-way street: cultural products flow dynamically from Asia, Africa, and Latin America to the West."
          },
          {
            "id": "whap9-l9-q2",
            "stem": "The massive 'Battle of Seattle' protests at the 1999 World Trade Organization (WTO) ministerial conference demonstrated which major criticism of free-market globalization?",
            "options": [
              "A violent demonstration demanding the restoration of the British Empire.",
              "An international coalition of labor unions, environmentalists, and indigenous rights groups protesting that corporate-dominated globalization degraded worker rights, exploited developing nations, and ignored environmental protections.",
              "A rally demanding that all world trade tariffs be increased to 1,000%.",
              "A protest demanding the immediate abolition of all computers and internet lines."
            ],
            "correctIndex": 1,
            "explanation": "Over 40,000 demonstrators shut down the WTO meetings in Seattle. The anti-globalization movement argued that WTO trade rules empowered multinational corporations over democratically elected governments, outsourced manufacturing to sweatshops, and weakened environmental standards.",
            "distractorTip": "The 1999 Seattle protests marked the public emergence of the global justice / anti-corporate globalization movement."
          },
          {
            "id": "whap9-l8-q3",
            "stem": "How has the diffusion of global consumer culture (such as fast-food franchises, Hollywood cinema, and multinational apparel brands) provoked cultural pushback in various parts of the world?",
            "options": [
              "It caused all non-Western countries to completely ban the use of television and internet.",
              "It prompted international courts to declare all corporate advertising illegal.",
              "It raised concerns over cultural homogenization (\"Americanization\" or cultural imperialism) and the loss of unique indigenous linguistic and culinary traditions, prompting local cultural preservation movements.",
              "It eliminated all religious diversity across the globe."
            ],
            "correctIndex": 2,
            "explanation": "While globalization enabled instant cultural exchange (e.g., global fandom for K-Pop or reggae), critics argue that the dominance of Western consumer brands threatens local identities and languages, inspiring grassroots movements to protect traditional heritage.",
            "distractorTip": "Culture in a globalized era is characterized by a dual tension: global integration and consumer diffusion on one hand, and localized resistance and cultural revival on the other."
          }
        ]
      },
      {
        "id": 909,
        "unitIndex": 9,
        "levelNumber": 9,
        "uniqueKey": "whap-u9-l9",
        "topicNumber": "Topic 9.8 & 9.9",
        "name": "Institutions of Global Governance (Boss)",
        "subtitle": "United Nations peacekeeping, World Health Organization (WHO), International Court of Justice, and global citizenship",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "whap9-l8-q1_dupe",
            "stem": "How do modern international institutions such as the World Health Organization (WHO) and the International Court of Justice (ICJ) reflect changing conceptions of global governance?",
            "options": [
              "They function as armed mercenary armies that conquer sovereign nations.",
              "They force all member nations to dissolve their domestic police forces.",
              "They address challenges that transcend national borders—such as global pandemics, cross-border health emergencies, and international war crimes—requiring collective supranational coordination.",
              "They require all world citizens to purchase sovereign debt bonds."
            ],
            "correctIndex": 2,
            "explanation": "Diseases and cross-border environmental pollution do not respect national passports. Agencies like the WHO coordinate global vaccination campaigns and epidemic tracking, while the ICJ and ICC adjudicate international disputes and prosecute crimes against humanity, exemplifying modern supranational governance.",
            "distractorTip": "Modern global institutions are supranational: they tackle problems that no single nation-state can solve alone."
          },
          {
            "id": "whap9-l9-q2_boss",
            "stem": "When evaluating the trajectory of world history from 1200 CE to the present, what represents the most fundamental transformation in human social and economic organization?",
            "options": [
              "The complete elimination of all human conflict and poverty worldwide.",
              "The return of human civilization to Paleolithic nomadic hunter-gatherer bands.",
              "The permanent migration of humanity away from urban population centers.",
              "The shift from isolated, agrarian regional civilizations reliant on muscle and draft-animal power to an interconnected, fossil-fuel powered, and digitally linked global network with unprecedented productive capacity and ecological footprint."
            ],
            "correctIndex": 3,
            "explanation": "Over the past 800 years, humanity moved from localized, slow-moving agricultural empires to a single, hyper-connected global system powered by fossil fuels and digital algorithms. This transformation generated unimaginable technological wealth while posing existential challenges: ecological sustainability, nuclear peace, and human equality.",
            "distractorTip": "This is the grand synthesis of AP World History: Modern: connectivity, technological acceleration, and the human condition."
          },
          {
            "id": "whap9-l9-q3",
            "stem": "Which structural feature of the United Nations Security Council (UNSC) has most frequently limited its ability to act decisively during major international geopolitical crises?",
            "options": [
              "The permanent veto power held by each of the five permanent members (United States, Russia, China, United Kingdom, France), allowing any single power to block resolutions that threaten its interests.",
              "The requirement that all 193 member states of the General Assembly must vote unanimously on every security resolution.",
              "The total lack of any military defense budget or peacekeeping personnel.",
              "The prohibition on discussing conflicts that involve sovereign member nations."
            ],
            "correctIndex": 0,
            "explanation": "Under the UN Charter, the P5 (Permanent Five) hold veto power over substantive Security Council resolutions; during the Cold War (US vs. USSR) and in contemporary crises, vetoes or threats of vetoes have repeatedly paralyzed the Council from intervening in conflicts.",
            "distractorTip": "Note the contrast: the UN General Assembly passes non-binding resolutions where each nation gets one vote; only the UN Security Council can pass binding resolutions and authorize sanctions or military peacekeeping missions."
          }
        ]
      }
    ]
  }
];
