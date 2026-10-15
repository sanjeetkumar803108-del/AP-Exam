// scripts/expand_world_history.cjs
// Script to expand all 78 levels of AP World History: Modern (WHAP) to 3 questions per level.
// Adds 78 authentic College Board AP-level questions with comprehensive stems, 4 plausible choices,
// detailed explanations, and distractor tips.

const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/data/quiz/apWorldHistoryUnitsData.ts');
let content = fs.readFileSync(targetPath, 'utf-8');

const newQuestions = [
  // --- UNIT 1: The Global Tapestry (1200–1450) ---
  {
    levelKey: "whap-u1-l1",
    question: {
      id: "whap1-l1-q3",
      stem: "Which of the following best describes the role of the Censorate within the Song Dynasty's bureaucratic government?",
      options: [
        "An independent military council that overruled imperial decrees during times of border invasion.",
        "A diplomatic envoy dispatched exclusively to negotiate tributary relations with nomadic steppe confederacies.",
        "An imperial oversight agency responsible for investigating official corruption and ensuring administrative loyalty to the Emperor.",
        "A hereditary council of Buddhist monks tasked with approving civil service appointments."
      ],
      correctIndex: 2,
      explanation: "The Censorate acted as an imperial surveillance and accountability organ within the Song central government, monitoring civil servants across provinces to prevent graft, corruption, and usurpation of imperial power.",
      distractorTip: "The Censorate was an administrative integrity bureau within the civil bureaucracy, not an external military or religious council."
    }
  },
  {
    levelKey: "whap-u1-l2",
    question: {
      id: "whap1-l2-q3",
      stem: "The development of proto-industrial production in Song China was most evident in which of the following industries?",
      options: [
        "Iron and steel manufacturing, which produced tools, armor, and structural components at scales unrivaled until the European Industrial Revolution.",
        "Mechanized steam-powered textile spinning in automated municipal workshops.",
        "Plantation-scale sugar processing utilizing enslaved labor imported from the Indian Ocean.",
        "State-run monopolistic ivory carving centers dependent on Sub-Saharan African imports."
      ],
      correctIndex: 0,
      explanation: "Song China experienced a massive expansion in metallurgy using coal-fueled blast furnaces, producing tens of thousands of tons of iron annually for farm tools, suspension bridges, and military weapons centuries before Europe's industrial breakthrough.",
      distractorTip: "Steam power was not invented until eighteenth-century Britain; Song proto-industrialization relied on water power, coal, and division of manual labor."
    }
  },
  {
    levelKey: "whap-u1-l3",
    question: {
      id: "whap1-l3-q3",
      stem: "Which of the following developments best illustrates political transformation across Dar al-Islam following the fragmentation of the Abbasid Caliphate?",
      options: [
        "The restoration of direct hereditary rule under Persian Zoroastrian monarchies.",
        "The complete disintegration of Islamic trade routes and permanent abandonment of trans-regional pilgrimage to Mecca.",
        "The establishment of European crusader monarchies across Egypt and Mesopotamia.",
        "The rise of Turkic military states, such as the Seljuks and Mamluks, who exercised political and military power while nominally honoring the Caliph."
      ],
      correctIndex: 3,
      explanation: "As Abbasid central authority waned, Turkic peoples—including enslaved soldiers (Mamluks in Egypt) and pastoral invaders (Seljuks in Persia/Anatolia)—established dominant dynasties (Sultanates) that defended and expanded Islamic territory while retaining the symbolic legitimacy of the Abbasid Caliph.",
      distractorTip: "Remember that while the Abbasid Caliph lost practical political control, the symbolic religious unity of the ummah and the prestige of the caliph remained intact until the Mongol sack of Baghdad in 1258."
    }
  },
  {
    levelKey: "whap-u1-l4",
    question: {
      id: "whap1-l4-q3",
      stem: "How did Sufi missionaries contribute significantly to the geographic expansion of Islam across Afro-Eurasia between 1200 and 1450?",
      options: [
        "By requiring strict adherence to Arabic linguistic and cultural norms before accepting converts.",
        "By emphasizing personal mystical communion, asceticism, and tolerating local cultural syncretism in newly reached frontier regions.",
        "By enforcing orthodox Sharia jurisprudence through punitive civil magistrates.",
        "By acting exclusively as armed cavalrymen conquering coastal commercial ports."
      ],
      correctIndex: 1,
      explanation: "Sufi orders (tariqas) emphasized direct experiential devotion and spiritual love rather than strict legalism, allowing them to adapt Islamic teachings to local folk traditions across South Asia, Southeast Asia, and Sub-Saharan Africa.",
      distractorTip: "Contrast Sufism's flexible, mystical adaptability with the rigid textual jurisprudence of urban ulama scholars."
    }
  },
  {
    levelKey: "whap-u1-l5",
    question: {
      id: "whap1-l5-q3",
      stem: "The Khmer Empire's monumental temple complex at Angkor Wat demonstrates which of the following historical processes in Southeast Asia?",
      options: [
        "The complete suppression of indigenous spiritual customs by incoming Mongol tributary overlords.",
        "The widespread adoption of Christian iconography imported by early Iberian merchants.",
        "The syncretic adoption and monumental architectural adaptation of Indian Hindu and Buddhist traditions by Southeast Asian rulers to legitimize royal authority.",
        "The establishment of an Islamic caliphate across mainland Southeast Asia."
      ],
      correctIndex: 2,
      explanation: "Rulers in Southeast Asia (such as the Khmer Empire) embraced Hindu and Buddhist cosmology, constructing monumental complexes like Angkor Wat (originally dedicated to Vishnu, later Theravada Buddhist) to legitimize their rule as devarajas (god-kings).",
      distractorTip: "Angkor Wat exemplifies 'Indianization'—the voluntary cultural and religious diffusion from South Asia to Southeast Asia via maritime trade, not military conquest."
    }
  },
  {
    levelKey: "whap-u1-l6",
    question: {
      id: "whap1-l6-q3",
      stem: "Which administrative mechanism allowed the Inca Empire (Tawantinsuyu) to integrate a geographically fragmented Andean territory without a written phonetic script or market currency?",
      options: [
        "An extensive 25,000-mile paved royal road system (Qhapaq Ñan) paired with quipu knotted-string record-keeping and state-controlled redistribution warehouses.",
        "Autonomous merchant guilds that traded obsidian and cacao beans across independent coastal city-states.",
        "An elected assembly of provincial clan leaders meeting annually in Cuzco.",
        "Private banking networks providing paper credit to independent peasant farmers."
      ],
      correctIndex: 0,
      explanation: "The Incan state utilized the Qhapaq Ñan (road network) for swift communication by chasqui runners, quipus to track demographic censuses and agricultural reserves, and state storehouses (qollqas) to store and redistribute supplies.",
      distractorTip: "Unlike the Aztec tribute empire which featured market commerce (pochteca merchants), the Inca economy was centrally directed by the state through the mit'a labor duty."
    }
  },
  {
    levelKey: "whap-u1-l7",
    question: {
      id: "whap1-l7-q3",
      stem: "The construction of Great Zimbabwe between the eleventh and fifteenth centuries was primarily financed by its strategic position within which economic network?",
      options: [
        "Trans-Saharan camel caravans carrying Mediterranean rock salt to the Niger River.",
        "Atlantic slave trading routes supplying labor to sugar plantations in São Tomé.",
        "Silk Road overland exchanges connecting Central Asia to the Black Sea.",
        "Interior gold-mining and ivory trade corridors connecting the southern African plateau to Swahili coastal ports on the Indian Ocean."
      ],
      correctIndex: 3,
      explanation: "Great Zimbabwe prospered because its rulers controlled the transit of alluvial gold and ivory from interior mining regions to Swahili coastal trading city-states such as Kilwa and Sofala, where goods were exchanged for Chinese porcelain and Indian textiles.",
      distractorTip: "Do not confuse southern African Great Zimbabwe (Indian Ocean coastal trade connection) with West African empires like Mali and Ghana (Trans-Saharan trade)."
    }
  },
  {
    levelKey: "whap-u1-l8",
    question: {
      id: "whap1-l8-q3",
      stem: "In contrast to the centralized imperial bureaucracy of Song China, state structure in Western Europe between 1200 and 1450 was primarily characterized by:",
      options: [
        "Direct democratic governance organized through universal peasant assemblies.",
        "Political fragmentation among competing feudal lords, decentralized monarchies, and the overarching spiritual authority of the Roman Catholic Church.",
        "Absolute military despotism administered by hereditary nomadic steppe khans.",
        "Total commercial unification under a single transcontinental trade monopoly."
      ],
      correctIndex: 1,
      explanation: "Western Europe lacked a centralized imperial state comparable to Song China; instead, power was fractured into feudal contracts between lords and vassals, autonomous chartered cities, and weak monarchies, unified primarily by the Latin Catholic Church.",
      distractorTip: "Be careful not to confuse early modern European absolutism (post-1500) with medieval feudal fragmentation (1200–1450)."
    }
  },

  // --- UNIT 2: Networks of Exchange (1200–1450) ---
  {
    levelKey: "whap-u2-l1",
    question: {
      id: "whap2-l1-q3",
      stem: "How did commercial innovations such as caravanserais and flying cash (credit instruments) facilitate the expansion of Afro-Eurasian trade networks?",
      options: [
        "They eliminated all tariffs and customs duties imposed by regional dynastic courts.",
        "They substituted livestock barter for precious metal bullion across maritime ports.",
        "They lowered travel risks by providing fortified roadside rest stops and reduced the physical burden and danger of transporting heavy metal coinage.",
        "They prohibited non-Muslim merchants from participating in overland trade."
      ],
      correctIndex: 2,
      explanation: "Caravanserais provided food, water, and armed security for traveling merchants and animals along arid overland routes, while paper credit and letters of credit allowed merchants to deposit cash in one city and withdraw value in another without hauling heavy bronze/silver coins.",
      distractorTip: "Caravanserais were commercial inns and oasis stations, not religious monasteries or naval drydocks."
    }
  },
  {
    levelKey: "whap-u2-l2",
    question: {
      id: "whap2-l2-q3",
      stem: "Which administrative policy implemented during the Pax Mongolica contributed most directly to the flourishing of trans-Eurasian trade and communication?",
      options: [
        "The institutionalization of the Yam courier postal system and the issuance of paiza passports ensuring safe transit for merchants and diplomats.",
        "The forced conversion of all conquered populations to traditional steppe shamanism.",
        "The total prohibition of maritime commerce in favor of exclusive overland caravans.",
        "The replacement of local administrative languages with written Classical Latin."
      ],
      correctIndex: 0,
      explanation: "The Mongol Yam system established relay stations equipped with fresh horses and provisions across Eurasia, while bronze/silver/gold paiza badges gave travelers diplomatic immunity and priority supplies, drastically reducing travel times and banditry.",
      distractorTip: "The Mongols were famous for religious tolerance and adopting local administrative practices, never forcing universal conversion to shamanism."
    }
  },
  {
    levelKey: "whap-u2-l3",
    question: {
      id: "whap2-l3-q3",
      stem: "How did the rule of the Mongol Ilkhanate in Persia differ significantly from the Golden Horde's rule over the Russian principalities?",
      options: [
        "The Ilkhanate abolished all commercial taxation, whereas the Golden Horde created state monopolies over Silk Road trade.",
        "The Golden Horde completely abandoned nomadic customs and built a permanent maritime fleet on the Baltic Sea.",
        "The Ilkhanate was governed exclusively by Chinese bureaucrats dispatched from Khanbaliq.",
        "Ilkhanate rulers converted to Islam and integrated deeply into Persian bureaucratic administration, whereas the Golden Horde remained on the steppe and extracted tribute through Russian princes."
      ],
      correctIndex: 3,
      explanation: "In Persia, Ilkhan Ghazan converted to Islam and patronized Persian arts and administration; in Russia, the Golden Horde ruled indirectly from Sarai on the Volga, using Moscow's grand dukes as tribute tax collectors without assimilating culturally.",
      distractorTip: "Note the contrast: indirect tribute extraction in Russia vs. cultural assimilation and direct bureaucratic governance in Persia."
    }
  },
  {
    levelKey: "whap-u2-l4",
    question: {
      id: "whap2-l4-q3",
      stem: "Why were seasonal monsoon wind cycles central to the operation of maritime commerce in the Indian Ocean?",
      options: [
        "They caused total closures of all maritime ports between November and April each year.",
        "They forced merchants to remain in port cities for months at a time, fostering the growth of cosmopolitan trade diasporas and cultural exchange.",
        "They prevented Chinese vessels from traveling west of the Strait of Malacca.",
        "They allowed European caravels to conquer South Asian ports without local pilots."
      ],
      correctIndex: 1,
      explanation: "Northeast monsoons (winter) blew ships southwest toward Africa and Arabia, while southwest monsoons (summer) blew ships northeast toward India and China. Mariners had to wait out wind shifts, settling in port cities where they intermarried and formed diasporic communities.",
      distractorTip: "Monsoon cycles did not stop trade—they provided predictable, reliable sailing schedules twice a year."
    }
  },
  {
    levelKey: "whap-u2-l5",
    question: {
      id: "whap2-l5-q3",
      stem: "The emergence of the Swahili language along the East African coast between 1200 and 1450 best illustrates which historical process?",
      options: [
        "The forced linguistic imposition of Arabic by an invading Ottoman military fleet.",
        "The isolated preservation of archaic Khoisan dialects uninfluenced by external contacts.",
        "The linguistic syncretism resulting from sustained commercial and cultural interactions between Bantu-speaking coastal communities and Arab/Persian merchants.",
        "The adoption of Portuguese legal terminology during the early medieval era."
      ],
      correctIndex: 2,
      explanation: "Swahili developed as a lingua franca along the East African coast, blending a grammatical Bantu base with significant Arabic and Persian vocabulary as Arab and Persian traders settled in Swahili city-states (Kilwa, Mombasa, Zanzibar).",
      distractorTip: "Swahili is an Afroasiatic/Niger-Congo synthesis (Bantu core + Arabic loanwords), reflecting voluntary mercantile exchange, not imperial conquest."
    }
  },
  {
    levelKey: "whap-u2-l6",
    question: {
      id: "whap2-l6-q3",
      stem: "Which technological innovation was most critical in transforming the Sahara Desert from an insurmountable barrier into a vibrant commercial trade corridor?",
      options: [
        "The camel saddle developed by Berber and Arab nomads, allowing riders to transport cargo weighing up to 500 pounds across arid wastes.",
        "The invention of the iron-hulled paddle steamer for navigating seasonal desert flash floods.",
        "The introduction of horse-drawn wheeled chariots capable of traversing deep sand dunes.",
        "The construction of stone aqueducts spanning from the Mediterranean coast to Lake Chad."
      ],
      correctIndex: 0,
      explanation: "The South Arabian and Berber camel saddles (especially the pack saddle positioned on or behind the hump) allowed the dromedary camel to carry heavy loads of rock salt and gold across 1,000+ miles of waterless terrain.",
      distractorTip: "Wheeled vehicles and horses could not survive long Saharan crossings; the camel was the essential biological pack animal."
    }
  },
  {
    levelKey: "whap-u2-l7",
    question: {
      id: "whap2-l7-q3",
      stem: "The travel accounts written by the Moroccan scholar Ibn Battuta are especially valuable to world historians because they demonstrate:",
      options: [
        "The complete uniformity of Islamic cultural customs across all Afro-Eurasian societies without local variations.",
        "The dominance of European legal codes throughout fourteenth-century African courts.",
        "The total absence of urban trade networks in fourteenth-century Southeast Asia.",
        "The vast extent of Dar al-Islam and the shared legal culture of the Islamic world, alongside regional variations in gender roles and local customs."
      ],
      correctIndex: 3,
      explanation: "Ibn Battuta traveled over 73,000 miles across Africa, the Middle East, India, and China, finding familiar Islamic jurisprudence (as a trained Qadi) everywhere, while often expressing shock at local customs (e.g., greater freedom and unveiled dress of women in Mali).",
      distractorTip: "Ibn Battuta did NOT encounter a monolithic culture; his observations reveal both universal Islamic unity and pronounced local cultural diversity."
    }
  },
  {
    levelKey: "whap-u2-l8",
    question: {
      id: "whap2-l8-q3",
      stem: "How did the diffusion of fast-ripening Champa rice from Vietnam to Song China and the introduction of bananas from Southeast Asia to Sub-Saharan Africa compare in their environmental and demographic impacts?",
      options: [
        "Both crops led to severe desertification and forced urban populations to revert to nomadic hunting.",
        "Both crops enabled significant population growth by allowing cultivation in ecological zones where traditional staple grains could not flourish.",
        "Both crops were grown exclusively as luxury cash crops exported to Western Europe.",
        "Both crops caused immediate mass famines due to acute soil toxicity."
      ],
      correctIndex: 1,
      explanation: "Champa rice was drought-resistant and matured in 60 days, permitting double-cropping on terraced hillsides across southern China; bananas thrived in the moist, warm rainforests of Sub-Saharan Africa where yams struggled, fueling massive Bantu population expansion.",
      distractorTip: "This is a classic AP comparative analysis: biological crop diffusion directly stimulated demographic and agricultural expansion across distinct world regions."
    }
  },

  // --- UNIT 3: Land-Based Empires (1450–1750) ---
  {
    levelKey: "whap-u3-l1",
    question: {
      id: "whap3-l1-q3",
      stem: "What critical technological advantage enabled the Ottoman, Safavid, and Mughal empires to rapidly conquer and consolidate vast territorial realms during the early modern era?",
      options: [
        "Superior ironclad steam warships equipped with radar tracking.",
        "Exclusive possession of cavalry mounted on Arabian warhorses without firearms.",
        "The centralized state adoption of gunpowder weaponry, including heavy siege artillery and massed infantry armed with matchlock muskets.",
        "The deployment of long-range crossbow fortifications along land borders."
      ],
      correctIndex: 2,
      explanation: "The Gunpowder Empires centralized authority by monopolizing the manufacture and tactical deployment of cast-bronze artillery to breach traditional medieval stone fortifications and equipping disciplined infantry with firearms.",
      distractorTip: "Remember that firearms required massive state wealth and metallurgical infrastructure, which favored centralized empires over decentralized feudal nobles."
    }
  },
  {
    levelKey: "whap-u3-l2",
    question: {
      id: "whap3-l2-q3",
      stem: "How did the Devshirme system help Ottoman sultans maintain centralized political authority against potential rivals?",
      options: [
        "By creating an elite corps of soldiers and civil administrators who owed absolute personal loyalty to the Sultan rather than to hereditary Turkish noble families.",
        "By granting hereditary provincial estates and royal titles to prominent Christian European kings.",
        "By completely eliminating the Sultan's imperial council in favor of local religious assemblies.",
        "By rotating the imperial throne among elected provincial governors every four years."
      ],
      correctIndex: 0,
      explanation: "Through the devshirme levy, young Christian boys from the Balkans were converted to Islam, given rigorous military and bureaucratic training, and appointed as Janissaries or viziers; having no family roots in the Turkish aristocracy, their allegiance was exclusively to the Sultan.",
      distractorTip: "Devshirme recruits were not hereditary nobles; they were technically 'slaves of the Sultan' whose status could not be passed down to heirs, preventing entrenched aristocratic rivalries."
    }
  },
  {
    levelKey: "whap-u3-l3",
    question: {
      id: "whap3-l3-q3",
      stem: "In the Mughal Empire, how did the zamindar system function as an instrument of imperial statecraft?",
      options: [
        "Zamindars were Catholic Jesuit missionaries invited to govern provincial judicial tribunals.",
        "Zamindars were naval admirals who patrolled coastal sea lanes to deter European piracy.",
        "Zamindars were Buddhist monks who managed state educational monasteries across Punjab.",
        "Zamindars were regional aristocrats and landed elites who collected agricultural taxes from peasants and forwarded a required quota to the central Mughal treasury."
      ],
      correctIndex: 3,
      explanation: "The Mughals utilized zamindars (local landholders) to assess and collect land revenues from agrarian villages, keeping a percentage of the harvest before remitting the remainder to the imperial court.",
      distractorTip: "Zamindars were local tax intermediaries; under later rulers like Aurangzeb, corruption and over-taxation by zamindars fueled peasant unrest."
    }
  },
  {
    levelKey: "whap-u3-l4",
    question: {
      id: "whap3-l4-q3",
      stem: "How did the Manchu rulers of the Qing Dynasty (1644–1912) legitimize their rule over the overwhelmingly Han Chinese majority?",
      options: [
        "By abolishing Confucianism and establishing Tibetan Buddhism as the sole legal philosophy.",
        "By retaining the traditional Confucian imperial bureaucracy and civil service examinations while maintaining distinct Manchu ethnic and military supremacy.",
        "By requiring all Han Chinese subjects to adopt Portuguese dress and convert to Catholicism.",
        "By dividing imperial territories equally among European trading companies."
      ],
      correctIndex: 1,
      explanation: "The Manchus presented themselves as legitimate Sons of Heaven by continuing Confucian rites and the examination system, employing Han scholars in a dyarchic governance model alongside Manchus, while enforcing the queue hairstyle as a test of loyalty.",
      distractorTip: "The Qing did not abandon Chinese institutions; they mastered and utilized them to legitimize foreign Manchu dynastic rule."
    }
  },
  {
    levelKey: "whap-u3-l5",
    question: {
      id: "whap3-l5-q3",
      stem: "Which of the following architectural monuments was commissioned by French King Louis XIV specifically to centralize royal absolutism and neutralize aristocratic opposition?",
      options: [
        "The Winter Palace in Saint Petersburg.",
        "The Topkapi Palace in Istanbul.",
        "The Palace of Versailles outside Paris.",
        "The Escorial outside Madrid."
      ],
      correctIndex: 2,
      explanation: "Louis XIV built Versailles to showcase the grandeur of the 'Sun King' and compelled French nobles to live at court, distracting them with elaborate etiquette and court patronage to prevent them from organizing regional rebellions against royal centralism.",
      distractorTip: "Versailles is the quintessential AP example of monumental architecture used for political control and royal absolutist legitimation in Europe."
    }
  },
  {
    levelKey: "whap-u3-l6",
    question: {
      id: "whap3-l6-q3",
      stem: "How did the Roman Catholic Church respond to the theological challenges posed by the Protestant Reformation during the Counter-Reformation?",
      options: [
        "By reaffirming traditional Catholic doctrines, reforming bureaucratic corruption, and establishing new missionary orders such as the Society of Jesus (Jesuits).",
        "By accepting Martin Luther's doctrine of salvation through faith alone (sola fide).",
        "By abolishing the Papacy and replacing it with an elected council of Protestant ministers.",
        "By banning all visual art, monumental architecture, and music from church worship."
      ],
      correctIndex: 0,
      explanation: "At the Council of Trent (1545–1563), the Catholic Church reaffirmed papal supremacy, the seven sacraments, and veneration of saints, while curbing corrupt practices like the sale of indulgences and mobilizing the Jesuits to reconvert Europe and evangelize in the Americas and Asia.",
      distractorTip: "The Catholic Church did NOT compromise on core theology with Protestants; it codified orthodoxy while addressing financial and administrative abuses."
    }
  },
  {
    levelKey: "whap-u3-l7",
    question: {
      id: "whap3-l7-q3",
      stem: "The prolonged military conflict between the Ottoman Empire and the Safavid Empire during the sixteenth and seventeenth centuries was primarily fueled by:",
      options: [
        "Disputes over trading rights in the North American fur trade.",
        "Rivalry between Roman Catholic and Eastern Orthodox missionary organizations.",
        "Conflict over maritime navigation through the Strait of Magellan.",
        "A deep sectarian divide between Sunni Ottoman orthodoxy and Twelver Shi'a Safavid theocracy, compounded by territorial competition in Mesopotamia."
      ],
      correctIndex: 3,
      explanation: "The Ottomans championed orthodox Sunni Islam, while Shah Ismail made Twelver Shi'ism the compulsory state religion of Safavid Iran. This theological schism turned the borderlands of Mesopotamia and Azerbaijan into violent battlegrounds (e.g., Battle of Chaldiran in 1514).",
      distractorTip: "Religious ideology was deeply intertwined with territorial rivalry between Istanbul and Isfahan over trade routes and buffer zones."
    }
  },
  {
    levelKey: "whap-u3-l8",
    question: {
      id: "whap3-l8-q3",
      stem: "The founding of Sikhism by Guru Nanak in sixteenth-century Punjab is best understood as a spiritual movement that:",
      options: [
        "Demanded the violent extermination of all preexisting Hindu and Muslim communities in India.",
        "Synthesized elements of Hindu devotional Bhakti traditions with Islamic monotheism, rejecting the caste system and empty ritualism.",
        "Advocated the adoption of Daoist alchemy and Chinese ancestor worship.",
        "Was created by Portuguese Jesuit missionaries to undermine the Mughal throne."
      ],
      correctIndex: 1,
      explanation: "Guru Nanak proclaimed that 'there is no Hindu, there is no Muslim,' preaching radical monotheism, the spiritual equality of all humans regardless of caste or gender, and selfless community service (seva/langar).",
      distractorTip: "Sikhism arose syncretically in the culturally interconnected borderlands of northern India, not from external European interference."
    }
  },

  // --- UNIT 4: Transoceanic Interconnections (1450–1750) ---
  {
    levelKey: "whap-u4-l1",
    question: {
      id: "whap4-l1-q3",
      stem: "Which European vessel design innovation was developed specifically by the Dutch to maximize cargo capacity and minimize operating crew size, revolutionizing global maritime transport?",
      options: [
        "The steam-powered ironclad frigate.",
        "The Greek trireme with three tiers of oarsmen.",
        "The fluyt (flyboat), an inexpensive merchant cargo vessel with a wide hull and pear-shaped cross section.",
        "The Roman galley designed primarily for ramming enemy warships."
      ],
      correctIndex: 2,
      explanation: "The Dutch fluyt was designed strictly for commercial freight rather than naval combat; its pear-shaped hull minimized deck taxes at Danish straits while its block-and-tackle rigging allowed a small crew to haul enormous grain and spice cargos cheaply.",
      distractorTip: "The fluyt was an unarmed or lightly armed merchant workhorse, distinct from armed warships like the Portuguese galleon."
    }
  },
  {
    levelKey: "whap-u4-l2",
    question: {
      id: "whap4-l2-q3",
      stem: "Why did European monarchs—such as King Ferdinand and Queen Isabella of Spain—invest substantial state treasury funds in transoceanic expeditions during the late fifteenth century?",
      options: [
        "To establish direct maritime access to lucrative Asian luxury goods and spices, bypassing high taxes charged by Venetian and Muslim middlemen.",
        "To relocate surplus European industrial factory workers to overseas settler colonies.",
        "To import millions of tons of coal and steel from the Americas to fuel early steam factories.",
        "To ally with the Aztec Empire against the Ottoman Empire."
      ],
      correctIndex: 0,
      explanation: "Western European kingdoms on the Atlantic periphery were burdened by the Ottoman-Venetian monopoly over eastern trade routes; finding an all-water oceanic route to the 'Indies' promised immense commercial wealth and religious converts.",
      distractorTip: "Watch out for anachronistic distractors mentioning industrialization, factories, or coal, which belong to the eighteenth and nineteenth centuries."
    }
  },
  {
    levelKey: "whap-u4-l3",
    question: {
      id: "whap4-l3-q3",
      stem: "Which of the following best describes the global demographic impact of the transfer of American crops (such as potatoes, maize, and manioc) to Europe, Asia, and Africa?",
      options: [
        "It caused severe widespread famines due to invasive agricultural blights across Afro-Eurasia.",
        "It triggered massive depopulation across China and Western Europe during the sixteenth century.",
        "It led to the immediate abandonment of rice and wheat farming throughout Afro-Eurasia.",
        "It supplied calorie-dense nutrition that sparked substantial long-term population growth across Europe, Africa, and East Asia."
      ],
      correctIndex: 3,
      explanation: "American domesticates like potatoes (in northern Europe), maize (in China and the Mediterranean), and manioc/cassava (in tropical Africa) provided far more caloric yield per acre than native staples, stabilizing food supplies and driving global demographic growth.",
      distractorTip: "Keep the demographic contrast straight: catastrophic population decline in the Americas (due to European diseases) vs. robust population growth in Afro-Eurasia (due to American crops)."
    }
  },
  {
    levelKey: "whap-u4-l4",
    question: {
      id: "whap4-l4-q3",
      stem: "The Portuguese maritime empire in the Indian Ocean in the sixteenth century was fundamentally characterized as a:",
      options: [
        "Territorial empire that conquered and settled the vast agricultural interior of India and China.",
        "\"Trading post empire\" that captured strategic choke points (Goa, Malacca, Hormuz) and enforced a naval pass system (cartaz) to extract taxes on maritime commerce.",
        "Religious monastic state governed by the Pope in Rome.",
        "Free-trade customs union that dismantled all merchant tariffs and promoted open navigation."
      ],
      correctIndex: 1,
      explanation: "Portugal lacked the manpower and army to conquer vast Asian land empires like the Mughals or Ming; instead, they established fortified coastal enclaves and forced merchant vessels to buy cartaz passes and pay duties under threat of naval bombardment.",
      distractorTip: "Contrast Portugal's maritime trading-post strategy in Asia with Spain's territorial conquest and colonial settlement in the Americas."
    }
  },
  {
    levelKey: "whap-u4-l5",
    question: {
      id: "whap4-l5-q3",
      stem: "How did Spanish colonial authorities in the Andes adapt the traditional Incan mit'a system to serve the imperial economy?",
      options: [
        "They converted it into a voluntary wage-labor market with collective bargaining rights for indigenous miners.",
        "They abolished the system entirely in compliance with papal humanitarian decrees.",
        "They transformed a rotational communal labor duty for public works into a brutal, compulsory labor levy forcing indigenous men to extract silver at Potosí.",
        "They restricted labor obligations exclusively to Spanish creole landowners."
      ],
      correctIndex: 2,
      explanation: "Under the Incas, the mit'a was a civic reciprocal obligation where communities constructed roads and terraces; the Spanish adapted it coercively to force one-seventh of adult male villagers into toxic, grueling silver extraction at the Potosí 'mountain of silver.'",
      distractorTip: "The Spanish did not invent the mit'a; they co-opted an existing indigenous institution and weaponized it for mercantilist mineral extraction."
    }
  },
  {
    levelKey: "whap-u4-l6",
    question: {
      id: "whap4-l6-q3",
      stem: "What role did the Manila Galleon trade play in the creation of the first truly global economic exchange network?",
      options: [
        "It transported American silver from Acapulco across the Pacific to Manila, where it was exchanged for Chinese silk, porcelain, and tea.",
        "It transported enslaved African laborers directly across the Pacific Ocean to Japanese mining camps.",
        "It delivered European industrial machinery directly to Australian penal colonies.",
        "It established a direct trading monopoly between the Ottoman Empire and the Inca Empire."
      ],
      correctIndex: 0,
      explanation: "Spanish silver mined in Peru and Mexico was shipped from Acapulco to Manila in the Philippines; Chinese merchants eagerly traded luxury silks and porcelains for this silver, because China's Ming Dynasty had mandated silver for imperial tax payments (Single Whip Law).",
      distractorTip: "Manila Galleons linked the Americas with Asia across the Pacific, completing the circuit of global maritime trade initiated by Atlantic voyages."
    }
  },
  {
    levelKey: "whap-u4-l7",
    question: {
      id: "whap4-l7-q3",
      stem: "In West African societies most heavily impacted by the Transatlantic Slave Trade, what was a significant demographic and social consequence?",
      options: [
        "A rapid increase in the adult male population leading to widespread democratization.",
        "The complete eradication of all indigenous linguistic and cultural customs across West Africa.",
        "The universal conversion of all West African states to Roman Catholicism.",
        "A severe gender imbalance caused by the preferential capture of young men, leading to an increase in polygyny and expanded economic roles for women."
      ],
      correctIndex: 3,
      explanation: "European slave traders demanded mostly young men for grueling sugarcane labor in the Americas; the disproportionate removal of males skewed sex ratios in West African regions like the Bight of Benin, resulting in more female-headed households and polygynous marriages.",
      distractorTip: "The Transatlantic trade targeted predominantly young men (unlike the Trans-Saharan or Indian Ocean slave trades, which often targeted women and children for domestic labor)."
    }
  },
  {
    levelKey: "whap-u4-l8",
    question: {
      id: "whap4-l8-q3",
      stem: "The Pueblo Revolt of 1680 in modern-day New Mexico is historically significant because it was:",
      options: [
        "A successful uprising organized by European creoles against British mercantilist taxation.",
        "A coordinated Indigenous rebellion led by Popé that successfully drove Spanish colonizers out of the region for over a decade and temporarily restored native religious practices.",
        "An enslaved African insurrection that established an independent marronage republic in the Rocky Mountains.",
        "A French military assault that incorporated the American Southwest into New France."
      ],
      correctIndex: 1,
      explanation: "Led by the medicine man Popé, Pueblo communities coordinated a massive uprising against Spanish friars and encomenderos, destroying churches and expelling the Spanish until 1692; upon returning, the Spanish moderated their religious coercion and abolished encomiendas.",
      distractorTip: "The Pueblo Revolt is one of the few instances where Indigenous peoples successfully ejected European colonial occupiers from their homeland for an extended period."
    }
  },
  {
    levelKey: "whap-u4-l9",
    question: {
      id: "whap4-l9-q3",
      stem: "In colonial Spanish America, the casta paintings produced during the eighteenth century served primarily to:",
      options: [
        "Advocate for the immediate legal emancipation of all enslaved Afro-descendants.",
        "Document and celebrate the total absence of racial hierarchy in colonial society.",
        "Visually categorize, define, and enforce racialized legal and social hierarchies based on parentage and skin pigmentation.",
        "Train indigenous artisans in Italian Renaissance fresco painting techniques."
      ],
      correctIndex: 2,
      explanation: "Casta paintings depicted mixed-race families (Peninsulares, Creoles, Mestizos, Mulattoes, Zambos) with descriptive captions, reflecting the anxiety of colonial elites to categorize racial mixtures and preserve European socio-legal privileges.",
      distractorTip: "Casta paintings were visual manifestations of the casta system—a rigid, state-recognized racial hierarchy designed to institutionalize white supremacy."
    }
  },

  // --- UNIT 5: Revolutions (1750–1900) ---
  {
    levelKey: "whap-u5-l1",
    question: {
      id: "whap5-l1-q3",
      stem: "Which core concept articulated by Enlightenment philosopher John Locke directly challenged the divine right of absolute monarchs?",
      options: [
        "The doctrine that governments derive their legitimacy from the consent of the governed to protect fundamental natural rights to life, liberty, and property.",
        "The belief that kings are appointed directly by God and are accountable only to divine law.",
        "The theory that society should abolish private property in favor of state-owned agrarian communes.",
        "The principle that religious dogmas should dictate civil criminal codes."
      ],
      correctIndex: 0,
      explanation: "Locke argued that individuals possess natural rights (life, liberty, property) that predate any government; if a monarch violates this social contract, citizens possess the legitimate right to overthrow the regime.",
      distractorTip: "Locke opposed divine right absolutism; his social contract was foundational to the American and French revolutions."
    }
  },
  {
    levelKey: "whap-u5-l2",
    question: {
      id: "whap5-l2-q3",
      stem: "How did the French Revolution's Declaration of the Rights of Man and of the Citizen (1789) reflect Enlightenment egalitarian principles?",
      options: [
        "It established a military dictatorship under Napoleon Bonaparte with hereditary nobility.",
        "It granted equal political voting rights to all women throughout the French Empire.",
        "It restored the absolute authority of the Roman Catholic Church and the First Estate.",
        "It proclaimed the equality of all male citizens before the law, abolished feudal privileges, and declared popular sovereignty."
      ],
      correctIndex: 3,
      explanation: "Drafted by the National Assembly with assistance from Thomas Jefferson, the Declaration dismantled the ancien régime by abolishing aristocratic tax exemptions, establishing equality before the law, and basing sovereignty in the nation.",
      distractorTip: "Notice that the Declaration did NOT extend political rights to women (as Olympe de Gouges pointed out in her Declaration of the Rights of Woman) or immediately abolish slavery in the colonies."
    }
  },
  {
    levelKey: "whap-u5-l3",
    question: {
      id: "whap5-l3-q3",
      stem: "Why is the Haitian Revolution (1791–1804) considered uniquely radical among the Atlantic Revolutions of the late eighteenth and early nineteenth centuries?",
      options: [
        "It was led entirely by British military officers seeking to annex French sugar colonies.",
        "It was the only successful revolution in world history initiated and won by enslaved people, resulting in the permanent abolition of slavery and the creation of an independent Black republic.",
        "It preserved the plantation slave economy while merely substituting French administrators with Spanish officials.",
        "It established a constitutional monarchy that pledged loyalty to the King of France."
      ],
      correctIndex: 1,
      explanation: "Unlike the American and French revolutions, which maintained racial hierarchies or tolerated colonial slavery, the Haitian uprising led by Toussaint Louverture and Jean-Jacques Dessalines dismantled the brutal chattel slavery complex in Saint-Domingue and established the world's first free Black republic.",
      distractorTip: "Remember that Saint-Domingue was the wealthiest sugar colony in the world; the Haitian revolution terrified slaveholders across the Americas."
    }
  },
  {
    levelKey: "whap-u5-l4",
    question: {
      id: "whap5-l4-q3",
      stem: "In his famous 1815 Jamaica Letter, Simón Bolívar articulated which primary complaint against Spanish colonial rule?",
      options: [
        "Spain's refusal to introduce Catholic missionary orders to the Americas.",
        "Spain's total prohibition on the importation of European books and ideas.",
        "The political exclusion of American-born Creoles from high administrative and judicial offices in favor of Iberian-born Peninsulares.",
        "Spain's failure to grant full land ownership to Indigenous and enslaved populations."
      ],
      correctIndex: 2,
      explanation: "Bolívar wrote the Jamaica Letter to rally British support for Latin American independence, arguing that wealthy, educated Creoles were treated as perpetual minors and barred from governing their own countries under the mercantilist and administrative monopoly of Peninsulares.",
      distractorTip: "Creoles led the Latin American revolutions to seize political power from Peninsulares, not to redistribute land or dismantle social inequality for Mestizos, Indigenous, or Afro-descendant peoples."
    }
  },
  {
    levelKey: "whap-u5-l5",
    question: {
      id: "whap5-l5-q3",
      stem: "Which environmental and geographic factor contributed most directly to Great Britain becoming the birthplace of the Industrial Revolution?",
      options: [
        "Abundant, easily accessible deposits of coal and iron ore located near navigable rivers and coastal ports.",
        "Vast tropical timber reserves used to construct wooden water wheels across the highlands.",
        "Complete isolation from global commercial networks and maritime trade.",
        "Mountainous topography that prevented agricultural farming and forced factory urbanization."
      ],
      correctIndex: 0,
      explanation: "Britain possessed geological advantages (rich coal and iron fields close to water transport), combined with capital accumulated from global trade, secure property rights, and an abundant urban labor force created by the enclosure acts.",
      distractorTip: "Geographic proximity of coal and iron to water transport gave Britain a decisive competitive advantage over continental European nations."
    }
  },
  {
    levelKey: "whap-u5-l6",
    question: {
      id: "whap5-l6-q3",
      stem: "Following the arrival of Commodore Matthew Perry's Black Ships, the leaders of Japan's Meiji Restoration (1868) modernized the nation primarily by:",
      options: [
        "Expelling all Western technology and executing anyone who wore foreign clothing.",
        "Submitting voluntarily to European colonial protectorate status.",
        "Handing all state industries over to British private merchant conglomerates.",
        "Implementing state-sponsored industrialization, building a modern railway and telegraph network, and adopting Western military and educational models while preserving the emperor's sacred authority."
      ],
      correctIndex: 3,
      explanation: "To avoid China's fate of being carved into spheres of influence, Meiji reformers adopted the slogan 'Fukoku Kyohei' (Enrich the Country, Strengthen the Military), building state model factories (zaibatsu), establishing compulsory public education, and creating a modern conscript army.",
      distractorTip: "The Meiji Restoration was state-directed modernization to preserve Japanese national sovereignty, not passive Western colonization."
    }
  },
  {
    levelKey: "whap-u5-l7",
    question: {
      id: "whap5-l7-q3",
      stem: "In The Communist Manifesto (1848), Karl Marx and Friedrich Engels argued that human history is fundamentally driven by:",
      options: [
        "The peaceful, voluntary cooperation among competitive free-market merchants.",
        "Inevitable class struggle between the bourgeoisie (who own the means of production) and the exploited proletariat (wage laborers).",
        "Religious revelations revealed through prophetic spiritual leaders.",
        "Biological evolutionary competition among distinct national racial groups."
      ],
      correctIndex: 1,
      explanation: "Marx postulated historical materialism: economic conditions dictate social structures, and industrial capitalism creates an irreconcilable conflict between factory-owning capitalists (bourgeoisie) and exploited workers (proletariat) that would culminate in a proletarian revolution.",
      distractorTip: "Adam Smith championed individual self-interest and the invisible hand of the market; Marx critiqued market capitalism as inherently exploitative and alienating."
    }
  },
  {
    levelKey: "whap-u5-l8",
    question: {
      id: "whap5-l8-q3",
      stem: "In response to harsh working conditions and child labor during the nineteenth century, British industrial workers formed labor unions primarily to:",
      options: [
        "Advocate for the return of feudal serfdom under landed aristocratic knights.",
        "Destroy all municipal railways and burn down urban textile factories.",
        "Engage in collective bargaining and strike action to secure higher wages, shorter working hours, and safer working environments.",
        "Finance transoceanic merchant fleets traveling to East Asia."
      ],
      correctIndex: 2,
      explanation: "Labor unions organized workers across industrial trades, using strikes and collective negotiations to pressure factory owners and Parliament, resulting in legislative reforms like the Factory Acts (limiting hours and restricting child labor).",
      distractorTip: "Do not confuse union reformism and collective bargaining with early Luddite machine-breaking."
    }
  },
  {
    levelKey: "whap-u5-l9",
    question: {
      id: "whap5-l9-q3",
      stem: "The nineteenth-century middle-class ideal known as the \"cult of domesticity\" asserted that:",
      options: [
        "Women should serve as the moral guardians of the private home, separate from the corrupt public sphere of industrial commerce and wage labor.",
        "Women should be drafted into industrial factories alongside male manual laborers on equal terms.",
        "All domestic household chores should be performed exclusively by state-appointed civil servants.",
        "Children should work twelve-hour shifts in textile mills to learn moral discipline."
      ],
      correctIndex: 0,
      explanation: "The Industrial Revolution separated home and work for the rising middle class; while working-class women worked in factories or domestic service out of economic necessity, middle-class culture idealized the home as a serene sanctuary where women nurtured children and religious virtues.",
      distractorTip: "The cult of domesticity was a middle-class cultural norm, not an economic reality for working-class women who endured long factory shifts."
    }
  },

  // --- UNIT 6: Consequences of Industrialization (1750–1900) ---
  {
    levelKey: "whap-u6-l1",
    question: {
      id: "whap6-l1-q3",
      stem: "How did European imperial powers use pseudoscientific concepts like Social Darwinism to justify colonial conquests in Africa and Asia?",
      options: [
        "By arguing that all human cultures possessed equal evolutionary sophistication and deserved immediate self-determination.",
        "By claiming that European nations were economically dependent on Indigenous governance systems.",
        "By asserting that international law prohibited the expansion of national borders beyond Europe.",
        "By misapplying biological theories of natural selection to human societies, arguing that white Europeans were biologically superior and had a racial duty to dominate \"weaker\" peoples."
      ],
      correctIndex: 3,
      explanation: "Social Darwinists like Herbert Spencer twisted Charles Darwin's biological principles to argue that racial hierarchies existed in nature, portraying imperialism as inevitable evolutionary progress and the 'survival of the fittest.'",
      distractorTip: "Social Darwinism was a racist ideological rationale used to justify conquest, distinct from authentic biological science."
    }
  },
  {
    levelKey: "whap-u6-l2",
    question: {
      id: "whap6-l2-q3",
      stem: "At the Berlin Conference (1884–1885), European diplomatic powers established which principle to regulate the partition of the African continent?",
      options: [
        "The requirement to obtain written consent from local African tribal councils before staking claims.",
        "The doctrine of \"effective occupation,\" requiring European states to establish physical administrative presence, police control, and trade outposts before claiming territory.",
        "The immediate abolition of all European colonial protectorates in Africa.",
        "The division of Africa according to pre-existing indigenous linguistic and ethnic boundaries."
      ],
      correctIndex: 1,
      explanation: "Organized by Otto von Bismarck, the Berlin Conference aimed to prevent war among European nations; it established that a power could claim African territory only through 'effective occupation' (troops, civil administration, treaties), completely ignoring African sovereignty.",
      distractorTip: "Zero African leaders were invited to the Berlin Conference, and boundaries were drawn arbitrarily across ethnic homelands."
    }
  },
  {
    levelKey: "whap-u6-l3",
    question: {
      id: "whap6-l3-q3",
      stem: "How did King Leopold II of Belgium administer the Congo Free State between 1885 and 1908?",
      options: [
        "As a democratic federation governed by an elected Congolese parliament.",
        "As a model humanitarian agricultural colony focused on free-market coffee farming.",
        "As a private personal commercial fiefdom where the Force Publique coerced local populations into meeting brutal wild rubber quotas through terror, hostage-taking, and limb amputations.",
        "As a joint scientific expedition operated in partnership with the Kingdom of Benin."
      ],
      correctIndex: 2,
      explanation: "Leopold claimed the Congo as personal property rather than a Belgian state colony; his mercenary army (Force Publique) terrorized villages to harvest wild rubber for the booming bicycle and automobile tire industries, causing an estimated 10 million deaths until international exposure forced the Belgian state to annex the territory in 1908.",
      distractorTip: "The Congo Free State was Leopold's personal property, not initially governed by the Belgian parliament."
    }
  },
  {
    levelKey: "whap-u6-l4",
    question: {
      id: "whap6-l4-q3",
      stem: "Following the suppression of the 1857 Indian Revolt (Sepoy Mutiny), the British government altered its administrative rule over the subcontinent by:",
      options: [
        "Abolishing the British East India Company and placing India under direct rule of the British Crown (the British Raj).",
        "Granting complete national independence and self-rule to the Indian National Congress.",
        "Selling all colonial administrative offices to the French colonial empire.",
        "Converting the entire Indian population to the Anglican Church by royal decree."
      ],
      correctIndex: 0,
      explanation: "The 1857 rebellion exposed the incompetence and instability of company rule; Parliament passed the Government of India Act 1858, dissolving the East India Company and transferring sovereignty directly to Queen Victoria, who was proclaimed Empress of India.",
      distractorTip: "The 1857 Sepoy Mutiny marked the transition from private corporate company rule (EIC) to direct British Crown governance (the Raj)."
    }
  },
  {
    levelKey: "whap-u6-l5",
    question: {
      id: "whap6-l5-q3",
      stem: "How did millenarian religious anti-colonial resistance movements—such as the Xhosa Cattle-Killing Movement in South Africa (1856–1857) and the Ghost Dance in North America (1890)—attempt to counter European imperial expansion?",
      options: [
        "By adopting European parliamentary democracy and petitioning the British monarch.",
        "By establishing joint-stock investment companies to purchase ancestral lands back from colonizers.",
        "By allying with Ottoman naval fleets in the Atlantic Ocean.",
        "By relying on spiritual prophecies and ritual actions, believing that ancestral spirits would intervene to banish white settlers and restore ancestral lands and prosperity."
      ],
      correctIndex: 3,
      explanation: "In both instances, indigenous societies facing catastrophic colonial encroachment turned to prophetic visions (Nongqawuse among the Xhosa, Wovoka among the Paiute/Lakota), believing ritual sacrifices or sacred dances would cause ancestors to rise and drive out white colonizers.",
      distractorTip: "Millenarian movements synthesized spiritual faith with desperate anti-colonial resistance against overwhelming industrial military technology."
    }
  },
  {
    levelKey: "whap-u6-l6",
    question: {
      id: "whap6-l6-q3",
      stem: "How did the Industrial Revolution in Europe reshape the economies of colonized and peripheral regions in the nineteenth century?",
      options: [
        "It encouraged colonized regions to develop heavy machinery and automated manufacturing industries.",
        "It transformed peripheral regions into export-oriented monocultures focused on extracting raw materials (such as cotton, rubber, copper, and palm oil) to feed European factories.",
        "It ended all maritime trade between the Northern and Southern hemispheres.",
        "It caused colonized nations to eliminate all commercial agricultural production."
      ],
      correctIndex: 1,
      explanation: "Imperialism created an asymmetrical global division of labor: industrialized Western nations produced manufactured goods, while colonies were restructured to export agricultural cash crops and minerals, making them vulnerable to global commodity price swings.",
      distractorTip: "Colonized territories were actively discouraged or prevented from developing domestic industrial manufacturing that could compete with European goods."
    }
  },
  {
    levelKey: "whap-u6-l7",
    question: {
      id: "whap6-l7-q3",
      stem: "The Treaty of Nanking (1842), which concluded the First Opium War between Great Britain and Qing China, is categorized as an \"unequal treaty\" because:",
      options: [
        "It forced Great Britain to pay heavy war indemnities to the Qing Emperor.",
        "It required Britain to surrender its colonial holdings in India to China.",
        "It forced China to cede Hong Kong, open five treaty ports to British merchants, pay a massive indemnity, and grant extraterritorial legal rights to British subjects.",
        "It mandated the immediate conversion of the Chinese imperial court to Protestantism."
      ],
      correctIndex: 2,
      explanation: "The Treaty of Nanking was the first in a series of humiliating unequal treaties that eroded Qing sovereignty; British citizens in China were exempt from local Chinese laws (extraterritoriality), and the Qing lost tariff autonomy and the island of Hong Kong.",
      distractorTip: "'Extraterritoriality' meant that foreigners who committed crimes on Chinese soil were tried in their own consular courts, not under Chinese law."
    }
  },
  {
    levelKey: "whap-u6-l8",
    question: {
      id: "whap6-l8-q3",
      stem: "Which of the following best explains why millions of Indian and Chinese contract laborers migrated to the Americas, Africa, and Southeast Asia during the nineteenth century?",
      options: [
        "The global abolition of the Transatlantic Slave Trade created acute labor shortages on tropical sugar and cash-crop plantations, which European powers filled with indentured laborers.",
        "European empires mandated that all factory jobs in London and Paris be staffed by Asian workers.",
        "Rapid industrialization in India and China led workers to establish overseas corporate headquarters.",
        "Colonial governments paid free first-class steamship transit to any Asian family willing to homestead in Canada."
      ],
      correctIndex: 0,
      explanation: "As slavery was phased out across the British (1833), French (1848), and other empires, plantation owners in the Caribbean, Mauritius, and Fiji recruited indentured Asian laborers under multi-year contracts that often resembled slavery in their harsh discipline.",
      distractorTip: "Indentured servitude expanded directly in the wake of the abolition of slavery to maintain cheap plantation labor for global commodities."
    }
  },
  {
    levelKey: "whap-u6-l9",
    question: {
      id: "whap6-l9-q3",
      stem: "The passage of the Chinese Exclusion Act of 1882 in the United States and the White Australia Policy of 1901 reflected which broader global trend in the late nineteenth and early twentieth centuries?",
      options: [
        "The complete closure of international borders to all maritime trade and diplomatic envoys.",
        "The expansion of welcoming, multiracial citizenship policies across all English-speaking countries.",
        "The universal adoption of open-door immigration treaties by Pacific Rim nations.",
        "The rise of nativist racial prejudice and discriminatory legal restrictions by receiving societies aimed at barring non-white immigrant laborers."
      ],
      correctIndex: 3,
      explanation: "White working-class and political groups in recipient countries (US, Canada, Australia) stoked racial fears and accused Asian migrants of depressing wages, lobbying their legislatures to pass racialized immigration quotas and outright bans.",
      distractorTip: "Immigrants formed ethnic enclaves (like Chinatowns) for economic support and physical security precisely because of pervasive nativist legal and social discrimination."
    }
  },

  // --- UNIT 7: Global Conflict (1900 to present) ---
  {
    levelKey: "whap-u7-l1",
    question: {
      id: "whap7-l1-q3",
      stem: "Sun Yat-sen's 1911 Revolution that overthrew the Qing Dynasty sought to reconstruct China on which foundational principles (the \"Three Principles of the People\")?",
      options: [
        "Strict Confucian ancestral hierarchy, feudal military daimyo rule, and absolute isolationism.",
        "Nationalism (overthrowing Manchu rule), Democracy (republican governance), and Livelihood (socioeconomic welfare for the people).",
        "Complete incorporation into the British Empire as a direct crown colony.",
        "A radical Bolshevik dictatorship that eliminated all private peasant agriculture immediately."
      ],
      correctIndex: 1,
      explanation: "Dr. Sun Yat-sen articulated the Three Principles of the People (San Min Chu-i): Minzu (national independence from foreign imperialists and the Manchus), Minquan (constitutional democracy), and Minsheng (people's livelihood and land reform).",
      distractorTip: "Sun Yat-sen was a republican nationalist who ended 2,000+ years of imperial dynastic rule, preceding the rise of the Chinese Communist Party."
    }
  },
  {
    levelKey: "whap-u7-l2",
    question: {
      id: "whap7-l2-q3",
      stem: "How did the system of rigid mutual defense alliances contribute to the outbreak of World War I following the assassination of Archduke Franz Ferdinand?",
      options: [
        "It immediately persuaded all European monarchs to disarm their armies peacefully.",
        "It prevented any military mobilization outside of the Austro-Hungarian Empire.",
        "It created a diplomatic chain reaction that transformed a localized Balkan crisis into a full-scale continental war involving all major European powers.",
        "It forced the United States to declare war on Germany in August 1914."
      ],
      correctIndex: 2,
      explanation: "The Triple Entente (Britain, France, Russia) and Triple Alliance/Central Powers (Germany, Austria-Hungary, Italy) meant that Austria's war on Serbia triggered Russian mobilization, which brought in Germany, France, and ultimately Britain when Belgium was invaded.",
      distractorTip: "The alliance system did not deter war; its rigid mobilization timetables locked the great powers into automatic escalation."
    }
  },
  {
    levelKey: "whap-u7-l3",
    question: {
      id: "whap7-l3-q3",
      stem: "World War I was categorized as a \"total war\" primarily because:",
      options: [
        "Combatant nations mobilized all domestic economic, industrial, and human resources, blurring the traditional distinction between soldiers on the front and civilians on the home front.",
        "Combat was restricted entirely to professional volunteer cavalry regiments on isolated open plains.",
        "No civilians suffered any casualties or economic rationing during the four years of fighting.",
        "Military leaders refused to utilize any mechanized weaponry invented after 1800."
      ],
      correctIndex: 0,
      explanation: "Total war required total national commitment: governments nationalized key industries, imposed food rationing, converted factories to munitions production, recruited women into the industrial workforce, and used censorship and propaganda to control public opinion.",
      distractorTip: "'Total war' refers to the mobilization of entire societies and economies, making civilian infrastructure and factory workers legitimate targets of naval blockades and aerial bombing."
    }
  },
  {
    levelKey: "whap-u7-l4",
    question: {
      id: "whap7-l4-q3",
      stem: "How did Joseph Stalin's Five-Year Plans transform the Soviet economy during the 1930s while Western capitalist nations languished in the Great Depression?",
      options: [
        "By dismantling all state industries and inviting Western private corporations to manage Russian mines.",
        "By adopting laissez-faire free-market capitalism with zero government regulation.",
        "By abandoning all industrial production to focus exclusively on small family farms.",
        "By centralizing the economy under state control (Gosplan), prioritizing heavy industry (coal, steel, electricity), and forcibly collectivizing agriculture at terrible human cost."
      ],
      correctIndex: 3,
      explanation: "Stalin ended Lenin's New Economic Policy and commanded a state-directed crash industrialization program. While the USSR achieved massive increases in heavy industrial output (making it an industrial titan for WWII), forced collectivization provoked widespread resistance and the devastating Holodomor famine.",
      distractorTip: "The Soviet command economy was insulated from the 1929 Wall Street crash, giving the illusion of economic triumph while causing massive domestic suffering."
    }
  },
  {
    levelKey: "whap-u7-l5",
    question: {
      id: "whap7-l5-q3",
      stem: "The League of Nations Mandate System established after World War I provoked widespread anger among Arab nationalists because:",
      options: [
        "It forced all Middle Eastern countries to adopt European Christian state religions.",
        "It broke wartime British and French promises of Arab independence, placing former Ottoman territories (such as Syria, Lebanon, Palestine, and Iraq) under French and British colonial tutelage.",
        "It returned all Middle Eastern lands to direct Ottoman Turkish imperial rule.",
        "It prohibited Arab merchants from selling petroleum on the global market."
      ],
      correctIndex: 1,
      explanation: "Arab leaders like Sharif Hussein had fought alongside the British against the Ottomans under promises of an independent unified Arab state; instead, the secret Sykes-Picot Agreement and the Mandate System effectively colonized the Levant and Mesopotamia under French and British rule.",
      distractorTip: "The Mandate System was essentially a polite euphemism for European colonialism under the guise of preparing territories for future self-governance."
    }
  },
  {
    levelKey: "whap-u7-l6",
    question: {
      id: "whap7-l6-q3",
      stem: "The policy of \"appeasement\" pursued by Britain and France toward Adolf Hitler in the 1930s—culminating in the 1938 Munich Agreement—was based on the mistaken belief that:",
      options: [
        "Nazi Germany possessed no military army or air force.",
        "The Soviet Union would invade Germany if Britain maintained an alliance with Hitler.",
        "Yielding to Hitler's reasonable territorial demands in the Rhineland, Austria, and the Sudetenland would satisfy German grievances and avert another catastrophic continental war.",
        "The United States would fight Germany alone without European assistance."
      ],
      correctIndex: 2,
      explanation: "British Prime Minister Neville Chamberlain and French leaders were haunted by the horrific casualties of WWI; they hoped that conceding the German-speaking Sudetenland of Czechoslovakia would satiate Hitler, but it only emboldened him to conquer the rest of Czechoslovakia and invade Poland.",
      distractorTip: "Appeasement demonstrated that aggressive fascist expansionism could not be contained by diplomatic concessions."
    }
  },
  {
    levelKey: "whap-u7-l7",
    question: {
      id: "whap7-l7-q3",
      stem: "The 1942–1943 Battle of Stalingrad is widely regarded by military historians as the critical turning point of World War II in Europe because:",
      options: [
        "The Soviet Red Army surrounded and annihilated Germany's elite Sixth Army, halting Nazi eastward expansion and putting Germany on a permanent strategic retreat.",
        "It marked the first operational combat deployment of an atomic weapon.",
        "It was the largest amphibious naval landing in Mediterranean history.",
        "It caused the immediate unconditional surrender of Fascist Italy."
      ],
      correctIndex: 0,
      explanation: "Stalingrad was the bloodiest battle in human history (over 1.5 million casualties); the catastrophic loss of the German Sixth Army broke the back of the Wehrmacht and swung the strategic momentum permanently in favor of the Soviet Union on the Eastern Front.",
      distractorTip: "The Eastern Front saw the vast majority of German casualties in WWII; Stalingrad shattered the myth of German invincibility."
    }
  },
  {
    levelKey: "whap-u7-l8",
    question: {
      id: "whap7-l8-q3",
      stem: "The 1948 United Nations Convention on the Prevention and Punishment of the Crime of Genocide was enacted largely in response to:",
      options: [
        "The economic collapse triggered by the Great Depression in Western Europe.",
        "The territorial disputes between the United States and Canada in the Arctic.",
        "The rise of multinational corporations in postwar East Asia.",
        "The systematic, state-sponsored industrial extermination of six million European Jews and millions of others by the Nazi regime during the Holocaust."
      ],
      correctIndex: 3,
      explanation: "Polish-Jewish jurist Raphael Lemkin coined the term 'genocide' during WWII; the global shock at the systematic death camps (Auschwitz, Treblinka) led the UN to codify genocide as a crime under international law, obligating states to prevent and punish acts committed with intent to destroy a national, ethnic, racial, or religious group.",
      distractorTip: "The Nuremberg Trials and the 1948 Genocide Convention established the legal precedent that national leaders can be held criminally accountable for crimes against humanity."
    }
  },
  {
    levelKey: "whap-u7-l9",
    question: {
      id: "whap7-l9-q3",
      stem: "How did the conclusion of World War II in 1945 fundamentally alter the global balance of power?",
      options: [
        "It restored the British Empire as the sole unchallenged economic hegemon of the world.",
        "It destroyed the multipolar European imperial order and established a bipolar international system dominated by two ideological superpowers: the United States and the Soviet Union.",
        "It caused the complete dissolution of all sovereign nation-states in favor of a single world government.",
        "It transferred global geopolitical leadership exclusively to South American republics."
      ],
      correctIndex: 1,
      explanation: "Western European empires (Britain, France, Germany) were bankrupt, devastated by warfare, and unable to sustain global empires; power shifted to the two continental superpowers—the capitalist, democratic United States and the communist Soviet Union—sparking the Cold War.",
      distractorTip: "The end of WWII was the catalyst for the collapse of 400 years of European global dominance and the rapid onset of Asian and African decolonization."
    }
  },

  // --- UNIT 8: Cold War & Decolonization (1900 to present) ---
  {
    levelKey: "whap-u8-l1",
    question: {
      id: "whap8-l1-q3",
      stem: "What was the primary geopolitical purpose of the Marshall Plan (European Recovery Program) enacted by the United States in 1948?",
      options: [
        "To finance the rebuilding of the Soviet Union's industrial infrastructure.",
        "To establish an American nuclear arsenal across Eastern European capital cities.",
        "To provide over $12 billion in economic aid to rebuild war-torn Western European economies, thereby stabilizing democratic governments and containing the spread of communism.",
        "To force European nations to adopt the US dollar as their domestic currency."
      ],
      correctIndex: 2,
      explanation: "US Secretary of State George Marshall recognized that economic despair and physical ruin in postwar Europe provided fertile ground for communist parties to win elections; massive financial grants revived European industry, stimulated US exports, and anchored Western Europe into the capitalist sphere.",
      distractorTip: "The Marshall Plan was an economic prong of the Truman Doctrine's containment strategy."
    }
  },
  {
    levelKey: "whap-u8-l2",
    question: {
      id: "whap8-l2-q3",
      stem: "The 1962 Cuban Missile Crisis was peacefully resolved when Soviet Premier Nikita Khrushchev agreed to withdraw nuclear missiles from Cuba in exchange for:",
      options: [
        "A public US pledge not to invade Cuba and a secret agreement to dismantle American Jupiter missiles stationed in Turkey.",
        "The complete surrender of the US naval base at Guantanamo Bay to Fidel Castro.",
        "The immediate reunification of East and West Germany under Soviet administration.",
        "The abolition of the North Atlantic Treaty Organization (NATO)."
      ],
      correctIndex: 0,
      explanation: "At the height of the crisis, after a tense naval 'quarantine' of Cuba, President John F. Kennedy and Khrushchev reached a compromise: the USSR dismantled Cuban launch sites, while the US promised never to invade Cuba and quietly removed obsolete Jupiter missiles from Turkey.",
      distractorTip: "The Cuban Missile Crisis led directly to the establishment of the Moscow-Washington hotline and the 1963 Nuclear Test Ban Treaty."
    }
  },
  {
    levelKey: "whap-u8-l3",
    question: {
      id: "whap8-l3-q3",
      stem: "The Angolan Civil War (1975–2002) is a prominent example of a Cold War proxy conflict in the Global South because:",
      options: [
        "It was fought exclusively between British and Portuguese colonial armies without indigenous participation.",
        "The United Nations prevented any foreign nations from sending financial or military aid.",
        "It was fought entirely over fishing rights in the South Atlantic Ocean.",
        "Competing anti-colonial factions were heavily backed by rival foreign powers: the Marxist MPLA was supported by the Soviet Union and Cuban combat troops, while UNITA was armed by the United States and apartheid South Africa."
      ],
      correctIndex: 3,
      explanation: "Following Angola's independence from Portugal, internal rivalries escalated into a Cold War proxy war: Cuba dispatched tens of thousands of combat troops and Soviet arms to defend the Marxist MPLA government in Luanda, while the US (via the CIA) and South Africa funded Jonas Savimbi's UNITA.",
      distractorTip: "Proxy wars allowed the superpowers to wage ideological combat in third-world arenas without risking direct, catastrophic nuclear confrontation with each other."
    }
  },
  {
    levelKey: "whap-u8-l4",
    question: {
      id: "whap8-l4-q3",
      stem: "Why did Mao Zedong's \"Great Leap Forward\" (1958–1962) result in one of the deadliest human-made famines in world history?",
      options: [
        "An invasion by Japanese imperial forces devastated China's coastal grain silos.",
        "Forcible collectivization into massive rural communes, diversion of peasant labor to useless \"backyard steel furnaces,\" and falsified grain harvest quotas caused catastrophic agricultural collapse and 30–45 million deaths.",
        "The total refusal of the Chinese government to trade with the Soviet Union.",
        "A catastrophic multi-year flood that completely inundated the Gobi Desert."
      ],
      correctIndex: 1,
      explanation: "Mao sought to bypass Soviet industrial models by mobilizing the rural masses; peasants were forced into giant communes and ordered to produce low-quality iron rather than farming, while local officials lied about harvest yields, causing the state to confiscate the remaining grain and creating the Great Chinese Famine.",
      distractorTip: "Contrast the Great Leap Forward (economic/industrial catastrophe) with the Cultural Revolution (political/ideological purge of traditional culture and intellectual elites)."
    }
  },
  {
    levelKey: "whap-u8-l5",
    question: {
      id: "whap8-l5-q3",
      stem: "Why did Muhammad Ali Jinnah and the All-India Muslim League advocate for the creation of a separate independent state of Pakistan in 1947?",
      options: [
        "They sought to maintain permanent colonial loyalty to the British royal monarchy.",
        "They demanded that South Asia adopt a unified communist command economy.",
        "They feared that in a unified, democratic post-independence India, the Muslim minority would be politically marginalized and dominated by the Hindu majority.",
        "They wanted to establish an overseas trading colony in East Africa."
      ],
      correctIndex: 2,
      explanation: "Jinnah advanced the 'Two-Nation Theory,' asserting that Hindus and Muslims in South Asia constituted distinct nations with different cultures and religions; fearing Hindu majoritarian rule under the Congress Party, the Muslim League demanded an autonomous Muslim homeland (Pakistan).",
      distractorTip: "The tragic 1947 Partition resulted in the displacement of over 15 million people and sectarian massacres that killed between 500,000 and 1 million people."
    }
  },
  {
    levelKey: "whap-u8-l6",
    question: {
      id: "whap8-l6-q3",
      stem: "Kwame Nkrumah of Ghana became a leading ideological figure in postwar Africa by advocating which visionary political philosophy?",
      options: [
        "Pan-Africanism, calling for continental political unity and economic cooperation among newly liberated African states to resist neocolonial exploitation.",
        "Continued colonial membership in the French Community with French as the sole administrative language.",
        "The voluntary re-annexation of African territories by European chartered trading companies.",
        "The establishment of hereditary monarchies based on ancient feudal European models."
      ],
      correctIndex: 0,
      explanation: "Nkrumah argued that individual African states, burdened by artificial colonial borders and resource monocultures, were too weak to resist Western economic domination; he championed Pan-Africanism and the Organization of African Unity (OAU) to unite the continent.",
      distractorTip: "Nkrumah led Ghana to independence through peaceful strikes and negotiations in 1957, in contrast to violent settler conflicts like Algeria or Kenya."
    }
  },
  {
    levelKey: "whap-u8-l7",
    question: {
      id: "whap8-l7-q3",
      stem: "The Non-Aligned Movement (NAM), formalized at the 1961 Belgrade Conference by leaders like Jawaharlal Nehru and Josip Broz Tito, aimed primarily to:",
      options: [
        "Compel all African and Asian nations to join the Warsaw Pact military alliance.",
        "Force newly independent nations to adopt American-style unregulated laissez-faire capitalism.",
        "Form a unified military bloc to wage offensive war against NATO.",
        "Create a collective third diplomatic bloc of developing nations that maintained neutrality and avoided entangling alliances with either the US or the Soviet superpower camps."
      ],
      correctIndex: 3,
      explanation: "NAM gave voice to post-colonial nations in Asia, Africa, and Latin America; leaders sought to preserve their hard-won sovereignty by playing both superpowers off one another for development aid while refusing to host foreign military bases.",
      distractorTip: "'Non-alignment' did not mean passive disengagement; non-aligned nations actively championed decolonization and international development in the UN."
    }
  },
  {
    levelKey: "whap-u8-l8",
    question: {
      id: "whap8-l8-q3",
      stem: "How did the African National Congress (ANC), led by figures such as Nelson Mandela, resist South Africa's minority white apartheid regime?",
      options: [
        "By voluntarily emigrating all Black South Africans to neighboring Botswana.",
        "Through a multifaceted campaign combining nonviolent civil disobedience, international diplomatic pressure and boycotts, and targeted armed sabotage via its wing Umkhonto we Sizwe.",
        "By supporting the apartheid government's Bantustan homeland partition policy.",
        "By relying exclusively on military invasions launched by the British army."
      ],
      correctIndex: 1,
      explanation: "The ANC began with peaceful protests (Defiance Campaign), but after the 1960 Sharpeville Massacre, Mandela co-founded Umkhonto we Sizwe ('Spear of the Nation') for sabotage; decades of domestic resistance combined with global economic boycotts and divestment forced the regime to negotiate the end of apartheid in the 1990s.",
      distractorTip: "The anti-apartheid struggle succeeded through the convergence of domestic resistance, armed pressure, and unprecedented international economic and cultural boycotts."
    }
  },
  {
    levelKey: "whap-u8-l9",
    question: {
      id: "whap8-l9-q3",
      stem: "Which unintended consequence of Mikhail Gorbachev's policy of Glasnost (political openness) contributed most decisively to the dissolution of the Soviet Union in 1991?",
      options: [
        "It caused an immediate military invasion of Moscow by NATO ground forces.",
        "It led the Soviet military to successfully overthrow the United States government.",
        "It unleashed long-suppressed nationalist movements and public criticism across non-Russian Soviet republics (such as the Baltic states, Ukraine, and the Caucasus), fueling demands for full independence.",
        "It forced the Russian Federation to restore the Romanov imperial monarchy."
      ],
      correctIndex: 2,
      explanation: "Glasnost allowed freedom of speech, press, and historical reevaluation; instead of merely revitalizing Soviet communism as Gorbachev hoped, it exposed historical atrocities (like the Gulag and Chernobyl coverup) and allowed ethnic minorities across the republics to mobilize for national self-determination.",
      distractorTip: "Gorbachev intended to reform and save Soviet socialism; glasnost and perestroika unintentionally dismantled the ideological and coercive glue holding the USSR together."
    }
  },

  // --- UNIT 9: Globalization (1900 to present) ---
  {
    levelKey: "whap-u9-l1",
    question: {
      id: "whap9-l1-q3",
      stem: "The invention of standardized containerized shipping (intermodal shipping containers) in the mid-twentieth century dramatically transformed global trade by:",
      options: [
        "Drastically reducing port turnaround times and freight transport costs, enabling the formation of seamless, transoceanic just-in-time manufacturing supply chains.",
        "Eliminating all merchant ocean vessels in favor of transcontinental freight blimps.",
        "Banning maritime commerce through international canals like Suez and Panama.",
        "Quadrupling the cost of maritime shipping, forcing nations to rely on localized artisan workshops."
      ],
      correctIndex: 0,
      explanation: "Standardized intermodal steel containers allowed cargo to be transferred seamlessly between container ships, freight trains, and semi-trucks without manual re-handling at docks, cutting shipping costs by over 90% and enabling globalized supply chains.",
      distractorTip: "Containerization is one of the unsung physical catalysts of modern economic globalization."
    }
  },
  {
    levelKey: "whap-u9-l2",
    question: {
      id: "whap9-l2-q3",
      stem: "What was the primary technological achievement of the mid-twentieth-century Green Revolution spearheaded by Norman Borlaug?",
      options: [
        "The replacement of all agricultural farming with synthetic laboratory meat.",
        "The eradication of all pesticide and chemical fertilizer use globally.",
        "The conversion of all global cropland to organic heirloom potato varieties.",
        "The breeding of high-yielding, pest-resistant dwarf varieties of wheat and rice, paired with synthetic nitrogen fertilizers, chemical irrigation, and mechanization, averting catastrophic famines in India and Mexico."
      ],
      correctIndex: 3,
      explanation: "Borlaug bred semi-dwarf wheat strains whose sturdy stalks could bear heavy grain heads without falling over; introduced to Mexico, India, and Pakistan alongside synthetic fertilizers and irrigation, crop yields skyrocketed, saving an estimated one billion lives.",
      distractorTip: "While the Green Revolution prevented mass famines, critics highlight its environmental costs: groundwater depletion, chemical runoff, and reliance on expensive commercial inputs that harmed smallholders."
    }
  },
  {
    levelKey: "whap-u9-l3",
    question: {
      id: "whap9-l3-q3",
      stem: "The global eradication of smallpox, certified by the World Health Organization (WHO) in 1980, was achieved primarily through:",
      options: [
        "The complete quarantine of entire continental landmasses for thirty years.",
        "A coordinated, worldwide public health campaign combining universal vaccination, surveillance, and ring containment of outbreaks.",
        "The natural evolutionary extinction of the virus without human medical intervention.",
        "The replacement of public sanitation with antibiotic chemical tablets in drinking water."
      ],
      correctIndex: 1,
      explanation: "Smallpox is the only human infectious disease ever completely eradicated; the WHO led an unprecedented international medical campaign that crossed Cold War geopolitical divides to vaccinate populations and track down every active outbreak.",
      distractorTip: "Note that smallpox is viral (treated by vaccines), whereas antibiotics only target bacterial infections."
    }
  },
  {
    levelKey: "whap-u9-l4",
    question: {
      id: "whap9-l4-q3",
      stem: "The 1987 Montreal Protocol is celebrated as a landmark success of international environmental diplomacy because it:",
      options: [
        "Mandated the total prohibition of all petroleum extraction worldwide.",
        "Imposed heavy fines on nations that failed to ban automobiles by the year 2000.",
        "Phased out the production and consumption of chlorofluorocarbons (CFCs) to protect and restore the Earth's stratospheric ozone layer.",
        "Transferred management of the Amazon rainforest to the United Nations Security Council."
      ],
      correctIndex: 2,
      explanation: "Scientists discovered that synthetic CFCs (used in refrigeration and aerosols) were depleting the ozone layer over Antarctica, exposing the planet to dangerous ultraviolet radiation; every UN member state ratified the Montreal Protocol, leading to the near-total phaseout of CFCs.",
      distractorTip: "Contrast the Montreal Protocol (ozone layer protection via CFC phaseout, widely successful) with the Kyoto Protocol / Paris Agreement (carbon greenhouse gas emissions, harder to enforce)."
    }
  },
  {
    levelKey: "whap-u9-l5",
    question: {
      id: "whap9-l5-q3",
      stem: "Neoliberal economic policies championed in the late twentieth century by leaders such as Ronald Reagan and Margaret Thatcher emphasized:",
      options: [
        "Free-market capitalism, privatization of state-owned enterprises, deregulation of financial markets, and reduction of government social spending.",
        "The complete nationalization of all private banks, airlines, and factories.",
        "High protective tariffs to eliminate all international trade with developing countries.",
        "The establishment of Soviet-style state collective farms across urban centers."
      ],
      correctIndex: 0,
      explanation: "Neoliberalism revived classical laissez-faire principles (associated with economists like Milton Friedman and Friedrich Hayek), advocating for minimal state intervention, lower taxes, free trade, and reducing the role of labor unions and welfare states.",
      distractorTip: "Do not confuse the contemporary American political term 'liberal' with 'neoliberalism'—neoliberalism refers to free-market capitalism, deregulation, and privatization."
    }
  },
  {
    levelKey: "whap-u9-l6",
    question: {
      id: "whap9-l6-q3",
      stem: "How do international financial institutions like the International Monetary Fund (IMF) and the World Bank influence economic policy in developing nations?",
      options: [
        "By sending United Nations peacekeeping troops to run national central banks directly.",
        "By granting unconditional gifts of gold bullion with zero repayment requirements.",
        "By prohibiting developing countries from joining international trade organizations.",
        "By providing emergency loans and development financing conditioned on \"Structural Adjustment Programs\" (SAPs) that mandate free-market reforms, privatization, and austerity cuts."
      ],
      correctIndex: 3,
      explanation: "When developing nations faced debt crises, the IMF and World Bank offered bailouts on the condition of adopting 'Washington Consensus' reforms (cutting government subsidies, privatizing public utilities, devaluing currencies), which critics argued worsened poverty and compromised sovereignty.",
      distractorTip: "Structural Adjustment Programs (SAPs) were controversial because austerity cuts often targeted public healthcare, education, and food subsidies."
    }
  },
  {
    levelKey: "whap-u9-l7",
    question: {
      id: "whap9-l7-q3",
      stem: "The 1979 United Nations Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW) is often described as an international bill of rights for women because it:",
      options: [
        "Established an international criminal court exclusively staffed by female judges.",
        "Obligated signatory nations to incorporate gender equality into domestic legislation, eliminate discriminatory laws, and protect women's reproductive, educational, and political rights.",
        "Mandated that all national parliaments maintain a 100% female representation quota.",
        "Banned women from working in private corporate enterprises."
      ],
      correctIndex: 1,
      explanation: "CEDAW defined discrimination against women and set up an agenda for national action, requiring states to eliminate gender disparities in voting, employment, healthcare, marriage, and family law.",
      distractorTip: "CEDAW is the comprehensive international legal instrument addressing gender equality and women's rights across legal, social, and economic spheres."
    }
  },
  {
    levelKey: "whap-u9-l8",
    question: {
      id: "whap9-l8-q3",
      stem: "How has the diffusion of global consumer culture (such as fast-food franchises, Hollywood cinema, and multinational apparel brands) provoked cultural pushback in various parts of the world?",
      options: [
        "It caused all non-Western countries to completely ban the use of television and internet.",
        "It prompted international courts to declare all corporate advertising illegal.",
        "It raised concerns over cultural homogenization (\"Americanization\" or cultural imperialism) and the loss of unique indigenous linguistic and culinary traditions, prompting local cultural preservation movements.",
        "It eliminated all religious diversity across the globe."
      ],
      correctIndex: 2,
      explanation: "While globalization enabled instant cultural exchange (e.g., global fandom for K-Pop or reggae), critics argue that the dominance of Western consumer brands threatens local identities and languages, inspiring grassroots movements to protect traditional heritage.",
      distractorTip: "Culture in a globalized era is characterized by a dual tension: global integration and consumer diffusion on one hand, and localized resistance and cultural revival on the other."
    }
  },
  {
    levelKey: "whap-u9-l9",
    question: {
      id: "whap9-l9-q3",
      stem: "Which structural feature of the United Nations Security Council (UNSC) has most frequently limited its ability to act decisively during major international geopolitical crises?",
      options: [
        "The permanent veto power held by each of the five permanent members (United States, Russia, China, United Kingdom, France), allowing any single power to block resolutions that threaten its interests.",
        "The requirement that all 193 member states of the General Assembly must vote unanimously on every security resolution.",
        "The total lack of any military defense budget or peacekeeping personnel.",
        "The prohibition on discussing conflicts that involve sovereign member nations."
      ],
      correctIndex: 0,
      explanation: "Under the UN Charter, the P5 (Permanent Five) hold veto power over substantive Security Council resolutions; during the Cold War (US vs. USSR) and in contemporary crises, vetoes or threats of vetoes have repeatedly paralyzed the Council from intervening in conflicts.",
      distractorTip: "Note the contrast: the UN General Assembly passes non-binding resolutions where each nation gets one vote; only the UN Security Council can pass binding resolutions and authorize sanctions or military peacekeeping missions."
    }
  }
];

// Extract the array from apWorldHistoryUnitsData.ts
const match = content.match(/export const ALL_AP_WORLD_HISTORY_UNIT_DEFINITIONS: UnitDefinition\[\] = (\[[\s\S]*?\]);\s*$/);
if (!match) {
  console.error("Failed to match ALL_AP_WORLD_HISTORY_UNIT_DEFINITIONS");
  process.exit(1);
}

const units = JSON.parse(match[1]);

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

console.log(`Added ${addedCount} questions to AP World History.`);

const updatedArray = JSON.stringify(units, null, 2);
const prefix = content.substring(0, match.index);
const newContent = `${prefix}export const ALL_AP_WORLD_HISTORY_UNIT_DEFINITIONS: UnitDefinition[] = ${updatedArray};\n`;

fs.writeFileSync(targetPath, newContent, 'utf-8');
console.log("Saved updated apWorldHistoryUnitsData.ts successfully.");
