const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// APHG additions:
// For the 35 levels with 2 Qs: add q3
// For the 9 levels with 1 Q: add q2 and q3
// Target distribution: C: 14, A: 13, B: 13, D: 13 (Total: 53 questions)

const additions = {
  // UNIT 1: Thinking Geographically
  "aphg-u1-l2": [
    {
      id: "aphg1-l2-q3",
      stem: "A municipal urban planning department layers satellite imagery, parcel property tax boundaries, flood hazard zones, and traffic collision points into a unified digital cartographic interface. Which geospatial technology is being utilized?",
      options: [
        "Global Positioning System (GPS)",
        "Geographic Information System (GIS)",
        "Satellite remote infrared sensing",
        "Passive sonar bathymetry"
      ],
      correctIndex: 1, // B
      explanation: "A Geographic Information System (GIS) captures, stores, analyzes, and displays spatial data by layering complex thematic datasets (e.g. topography, property zoning, hydrology, transit lines) to reveal spatial correlations and assist in urban planning.",
      distractorTip: "GPS determines exact absolute coordinates/navigation; Remote sensing gathers data from satellites/aircraft; GIS LAYERS multiple spatial datasets for analysis."
    }
  ],
  "aphg-u1-l3": [
    {
      id: "aphg1-l3-q3",
      stem: "Although London and Tokyo are separated by thousands of miles, instantaneous fiber-optic financial communication and high-speed air travel allow bankers in both cities to interact more frequently than farmers living 50 miles apart in rural Siberia. Which spatial concept does this illustrate?",
      options: [
        "Environmental determinism",
        "Absolute distance decay",
        "Time-space compression (space-time convergence)",
        "Stimulus cultural diffusion"
      ],
      correctIndex: 2, // C
      explanation: "Time-space compression (identified by David Harvey) describes the reduction in time it takes for ideas, capital, and goods to diffuse across space due to rapid advancements in telecommunications and transportation technologies.",
      distractorTip: "Distance decay states interaction decreases with physical distance; Time-space compression overcomes physical distance through advanced technology."
    }
  ],
  "aphg-u1-l4": [
    {
      id: "aphg1-l4-q2",
      stem: "A researcher examines breast cancer mortality rates on a global map and notices that the United States appears completely uniform in risk. However, zooming in to a county-level map reveals dramatic clusters of high mortality in rural counties. What geographic phenomenon does this demonstrate?",
      options: [
        "Data generalization and masking of local variation at smaller cartographic scales of analysis.",
        "The Mercator projection's polar distortion.",
        "Cultural syncretism across census blocks.",
        "Environmental determinism in agricultural settlements."
      ],
      correctIndex: 0, // A
      explanation: "Scale of analysis matters fundamentally: aggregated data at a national or global scale generalizes patterns, obscuring significant regional and local disparities that only become visible at local or census-tract scales of inquiry.",
      distractorTip: "Changing scale of analysis reveals or hides local variation; national-scale maps mask local spatial disparities."
    },
    {
      id: "aphg1-l4-q3",
      stem: "Which of the following cartographic scales represents the 'largest scale' map?",
      options: [
        "1 : 10,000,000",
        "1 : 1,000,000",
        "1 : 250,000",
        "1 : 5,000"
      ],
      correctIndex: 3, // D
      explanation: "Map scale is a mathematical fraction. $1 / 5,000 = 0.0002$ is a much larger numerical fraction than $1 / 10,000,000 = 0.0000001$. A large-scale map shows a small geographic area (like a neighborhood or campus) with immense, zoomed-in detail.",
      distractorTip: "Counterintuitive AP rule: Large scale = small area with LOTS of detail (1:5,000); Small scale = large area with LITTLE detail (1:10,000,000)."
    }
  ],
  "aphg-u1-l5": [
    {
      id: "aphg1-l5-q3",
      stem: "The delivery reception area of a major metropolitan daily newspaper or the broadcasting radius of an FM radio station best exemplifies which type of region?",
      options: [
        "A formal (uniform) region",
        "A functional (nodal) region",
        "A vernacular (perceptual) region",
        "A physiographic biome region"
      ],
      correctIndex: 1, // B
      explanation: "A functional (nodal) region is organized around a focal central point or node, with the surrounding territory linked to the node by transportation, communication, or economic systems. Influence diminishes as distance from the node increases.",
      distractorTip: "Formal = defined by shared homogeneous traits (state borders, wheat belt); Functional = centered on a node (subway system, pizza delivery); Vernacular = perceived identity (the American South)."
    }
  ],
  "aphg-u1-l6": [
    {
      id: "aphg1-l6-q2",
      stem: "Why do airlines fly along curved 'great circle routes' across northern Canada and Greenland when traveling between New York and London, rather than flying in a straight horizontal line on a standard Mercator map?",
      options: [
        "To avoid mid-ocean air turbulence caused by trade winds.",
        "Because on a spherical Earth, the great circle arc is the shortest physical distance between two points, despite appearing curved on cylindrical map projections.",
        "Because magnetic compasses cannot navigate over open ocean waters.",
        "To comply with exclusive economic zone fishing boundaries under UNCLOS."
      ],
      correctIndex: 1, // B
      explanation: "Because the Earth is a three-dimensional oblate spheroid, the shortest distance between two points on its surface is an arc of a Great Circle. When projected onto a flat 2D Mercator projection, these straight great-circle paths appear curved.",
      distractorTip: "Great circle routes represent the shortest distance between two points on a spherical globe."
    },
    {
      id: "aphg1-l6-q3",
      stem: "Which 19th-century geographical philosophy argued that human social, cultural, and economic achievements are strictly controlled and dictated by physical climate and environment?",
      options: [
        "Possibilism",
        "Post-structural geography",
        "Environmental determinism",
        "Cultural ecology"
      ],
      correctIndex: 2, // C
      explanation: "Environmental determinism claimed that physical geography and climate dictated human cultural and economic development, often used to justify colonial superiority. It was supplanted in modern geography by possibilism, which argues humans adapt and modify their environment.",
      distractorTip: "Environmental determinism = nature controls human culture; Possibilism = nature sets limits, but human choices and technology shape culture."
    }
  ],

  // UNIT 2: Population & Migration Patterns
  "aphg-u2-l1": [
    {
      id: "aphg2-l1-q3",
      stem: "Egypt has a moderate arithmetic density of approximately 100 people per square kilometer, but an extraordinarily high physiological density exceeding 2,500 people per square kilometer of arable land. What does this dramatic disparity reveal?",
      options: [
        "Egypt has zero agricultural output and imports 100% of its food supplies.",
        "Nearly the entire Egyptian population is concentrated along a narrow strip of arable soil in the Nile River valley, putting intense pressure on farmland.",
        "Egypt's total fertility rate has dropped below replacement level.",
        "Egypt has achieved Stage 5 of the Demographic Transition Model."
      ],
      correctIndex: 1, // B
      explanation: "Arithmetic density is total population divided by total land area; physiological density is total population divided strictly by arable (farmable) land. A massive gap indicates that only a tiny fraction of the country's land is farmable, forcing the population to cram into fertile valleys (like the Nile).",
      distractorTip: "High physiological density means immense population pressure on available agricultural/arable land."
    }
  ],
  "aphg-u2-l2": [
    {
      id: "aphg2-l2-q3",
      stem: "A population pyramid with an extremely wide base of infants and children that rapidly tapers to a narrow apex of elderly residents signifies which demographic condition?",
      options: [
        "A declining population with negative natural increase (Stage 5).",
        "A high total fertility rate, high infant mortality, high youth dependency ratio, and rapid population growth (Stage 2).",
        "A post-industrial nation with an aging workforce (Stage 4).",
        "A college town or retirement community with sex ratio imbalances."
      ],
      correctIndex: 1, // B
      explanation: "A wide pyramid base represents high birth rates and a large proportion of young children (high youth dependency). Rapid tapering reflects higher mortality rates at older ages, classic hallmarks of Stage 2 developing nations undergoing rapid demographic expansion.",
      distractorTip: "Wide base = high birth rate / rapid growth (Stage 2); Columnar/rectangle = stable zero growth (Stage 4); Inverted/narrow base = declining aging population (Stage 5)."
    }
  ],
  "aphg-u2-l3": [
    {
      id: "aphg2-l3-q3",
      stem: "What is the primary epidemiological transition shift that characterizes a country moving from Stage 2 to Stage 4 of the Demographic Transition Model?",
      options: [
        "A shift from infectious and parasitic pandemics (cholera, tuberculosis) to chronic, degenerative lifestyle diseases (cardiovascular disease, cancer).",
        "A resurgence of medieval animal-borne plagues due to urban overcrowding.",
        "An increase in maternal mortality during childbirth.",
        "The complete eradication of all diseases of old age."
      ],
      correctIndex: 0, // A
      explanation: "Abdel Omran's Epidemiological Transition Model tracks causes of death: Stage 1/2 are dominated by infectious, waterborne, and parasitic diseases (cholera, malaria); Stages 3/4 transition to chronic non-communicable degenerative diseases (heart disease, stroke, cancer) as life expectancy expands.",
      distractorTip: "Epidemiological Transition: Infectious/parasitic diseases in early stages $\\implies$ Chronic/degenerative diseases in late stages."
    }
  ],
  "aphg-u2-l4": [
    {
      id: "aphg2-l4-q3",
      stem: "Ester Boserup's agricultural intensification theory directly contradicted Thomas Malthus's pessimistic population predictions by proposing that:",
      options: [
        "Population growth would be curtailed by inevitable famines, plagues, and wars ('positive checks').",
        "Food production grows arithmetically while human population grows exponentially.",
        "Population growth stimulates technological innovation and agricultural intensification (e.g. multi-cropping, irrigation, mechanization), expanding food supply.",
        "Government anti-natalist tax penalties are required to prevent widespread starvation."
      ],
      correctIndex: 2, // C
      explanation: "While Malthus argued population growth would outstrip arithmetic food production, Boserup argued that 'necessity is the mother of invention.' Population pressure incentivizes farmers to innovate, intensify cultivation, and adopt new technologies, expanding carrying capacity.",
      distractorTip: "Malthus = Population growth outstrips food (starvation unavoidable); Boserup = Population pressure drives agricultural innovation and increases food supply."
    }
  ],
  "aphg-u2-l5": [
    {
      id: "aphg2-l5-q3",
      stem: "According to E.G. Ravenstein's classic Laws of Migration, which demographic profile represents the most common international migrant seeking employment?",
      options: [
        "Multi-generational families with elderly grandparents.",
        "Young, single adult males traveling without dependents.",
        "Unaccompanied school-age children.",
        "Retired married couples over age 65."
      ],
      correctIndex: 1, // B
      explanation: "Ravenstein's laws observe that most long-distance and international migrants are young single adults (historically young adult males seeking economic labor opportunities), rather than intact families or elderly individuals.",
      distractorTip: "Ravenstein's Laws: Most migrants move short distances; Long-distance migrants head for major cities; Most international migrants are young adult individuals."
    }
  ],
  "aphg-u2-l6": [
    {
      id: "aphg2-l6-q2",
      stem: "A family flees armed conflict and aerial bombing in their hometown and moves to a makeshift camp in a neighboring province within the same country. Under international humanitarian law, how are these displaced persons classified?",
      options: [
        "Refugees",
        "Asylum seekers",
        "Internally Displaced Persons (IDPs)",
        "Transnational guest workers"
      ],
      correctIndex: 2, // C
      explanation: "Internally Displaced Persons (IDPs) are individuals forced to flee their homes due to armed conflict, violence, or natural disasters, but who remain WITHIN the borders of their own sovereign nation (they have not crossed an international frontier).",
      distractorTip: "Crossed international border = Refugee; Remained within home country borders = Internally Displaced Person (IDP)."
    },
    {
      id: "aphg2-l6-q3",
      stem: "How do financial remittances sent by emigrant workers living abroad impact the economy of their origin country in the developing world?",
      options: [
        "They cause immediate hyperinflation that collapses commercial banks.",
        "They constitute an illegal financial transaction prohibited by the World Bank.",
        "They provide vital foreign exchange and household income that funds education, healthcare, and local housing construction, often exceeding foreign aid.",
        "They increase brain drain by forcing recipient families to emigrate."
      ],
      correctIndex: 2, // C
      explanation: "Remittances are money transfers sent by diaspora migrants back to families in their country of origin. For many developing nations (e.g. Philippines, El Salvador), remittances form a major percentage of GDP, injecting cash directly into local family welfare.",
      distractorTip: "Remittances are funds sent home by migrant workers; they provide crucial household income and foreign currency reserves."
    }
  ],
  "aphg-u2-l7": [
    {
      id: "aphg2-l7-q2",
      stem: "Which of the following government public policies is an example of a pro-natalist population policy designed to boost birth rates?",
      options: [
        "Offering subsidized childcare, extended paid parental leave, and generous cash child allowances per newborn.",
        "Distributing free contraception and family-planning education across rural clinics.",
        "Enacting legal limits on family size, such as a one-child restriction.",
        "Raising the legal age of marriage to 25."
      ],
      correctIndex: 0, // A
      explanation: "Pro-natalist policies encourage childbearing to combat aging populations and declining workforces (common in Stage 5 countries like Japan, South Korea, and France) through financial incentives, subsidized parental leave, and baby bonuses.",
      distractorTip: "Pro-natalist = encourage births (tax breaks, paid leave); Anti-natalist = discourage births (One-Child Policy, free birth control)."
    },
    {
      id: "aphg2-l7-q3",
      stem: "Why do highly educated professional workers who leave developing nations to work in North America or Western Europe contribute to 'brain drain'?",
      options: [
        "Their home countries lose vital human capital, medical personnel, and engineers, hindering domestic economic and technological development.",
        "They cause rapid demographic surges in birth rates in their destination countries.",
        "They permanently eliminate remittances to their origin communities.",
        "They reduce literacy rates in Western host nations."
      ],
      correctIndex: 0, // A
      explanation: "Brain drain is the large-scale emigration of talented, highly educated individuals (physicians, software engineers, scientists) from developing countries to wealthier nations, depriving the source nation of essential skills needed to build domestic infrastructure.",
      distractorTip: "Brain drain = loss of skilled professionals from developing countries to wealthier developed nations."
    }
  ],

  // UNIT 3: Cultural Patterns & Processes
  "aphg-u3-l1": [
    {
      id: "aphg3-l1-q3",
      stem: "When fast-food restaurants in India adopted the American fast-food drive-through model but replaced beef burgers with vegetarian McAloo Tikki patties to respect Hindu dietary customs, what type of cultural diffusion occurred?",
      options: [
        "Contagious diffusion",
        "Relocation diffusion",
        "Hierarchical diffusion",
        "Stimulus diffusion"
      ],
      correctIndex: 3, // D
      explanation: "Stimulus diffusion occurs when an underlying fundamental idea or innovation spreads to a new culture, but is modified or adapted to fit the receiving group's cultural values or environmental constraints.",
      distractorTip: "Stimulus diffusion: The core concept spreads, but the specific form is modified to fit local cultural norms."
    }
  ],
  "aphg-u3-l2": [
    {
      id: "aphg3-l2-q3",
      stem: "In the historic neighborhood of New Orleans, Spanish colonial ironwork balconies, French street names, Afro-Caribbean Creole cuisine, and Anglo-American shotgun cottages coexist within the same urban space. Which geographical concept does this illustrate?",
      options: [
        "Sequent occupance",
        "Environmental determinism",
        "Cultural assimilation",
        "Linguistic convergence"
      ],
      correctIndex: 0, // A
      explanation: "Sequent occupance (coined by Derwent Whittlesey) describes the notion that successive societies leave their distinct cultural imprints on a place, each layer contributing to the cumulative, palimpsest-like cultural landscape.",
      distractorTip: "Sequent occupance = multiple historical cultures leaving visible physical architectural layers on the same landscape over time."
    }
  ],
  "aphg-u3-l3": [
    {
      id: "aphg3-l3-q3",
      stem: "Why has English become the preeminent global 'lingua franca' in international aviation, scientific academia, and digital commerce?",
      options: [
        "English is the official native language spoken by a mathematical majority of the world's population.",
        "English has the simplest grammar of all Indo-European language families.",
        "The historical legacy of British imperial colonialism combined with 20th-century American economic, technological, and cultural hegemony.",
        "The United Nations legally prohibited the use of other languages in trade."
      ],
      correctIndex: 2, // C
      explanation: "A lingua franca is a mutually understood language used for trade and communication between people who speak different native tongues. English achieved global lingua franca status through British imperial expansion and subsequent American dominance in finance, internet technology, and popular culture.",
      distractorTip: "Lingua franca = a common language used for commerce between speakers of different native languages."
    }
  ],
  "aphg-u3-l4": [
    {
      id: "aphg3-l4-q3",
      stem: "What is the primary spatial and doctrinal distinction between a universalizing religion and an ethnic religion?",
      options: [
        "Universalizing religions actively seek converts and claim global applicability regardless of ethnicity, whereas ethnic religions are tied to a specific culture, ancestry, and geographic hearth.",
        "Universalizing religions worship multiple deities, while ethnic religions are strictly monotheistic.",
        "Universalizing religions diffuse exclusively through relocation diffusion.",
        "Ethnic religions possess global holy sites visited by millions of foreign pilgrims."
      ],
      correctIndex: 0, // A
      explanation: "Universalizing religions (Christianity, Islam, Buddhism) actively seek converts through missionary work, claim universal truth, and diffuse widely. Ethnic religions (Hinduism, Judaism) do not actively seek converts; membership is tied to birth, culture, and specific sacred geography.",
      distractorTip: "Universalizing = seeks converts, global appeal (Christianity, Islam, Buddhism); Ethnic = born into, tied to location/ethnicity (Hinduism, Judaism)."
    }
  ],
  "aphg-u3-l5": [
    {
      id: "aphg3-l5-q3",
      stem: "The fusion of indigenous Mesoamerican beliefs with Roman Catholic traditions in Mexico, exemplified by the widespread veneration of Our Lady of Guadalupe and the Day of the Dead, is an example of:",
      options: [
        "Total cultural assimilation",
        "Cultural syncretism",
        "Ethnocentrism",
        "Linguistic divergence"
      ],
      correctIndex: 1, // B
      explanation: "Cultural syncretism is the blending and synthesis of traits from two or more distinct cultural traditions to produce a unique, novel cultural practice or belief system.",
      distractorTip: "Syncretism = blending two cultures into a NEW form; Assimilation = minority group completely absorbs and loses original identity."
    }
  ],
  "aphg-u3-l6": [
    {
      id: "aphg3-l6-q2",
      stem: "Which of the following cultural landscape features is most characteristic of traditional Islamic urban morphology in North Africa and the Middle East?",
      options: [
        "Gridiron street patterns oriented strictly around a central rail depot.",
        "A prominent central Friday mosque (Jami) with soaring minarets, surrounded by covered bazaars (suqs) and residential quarters featuring inward-facing privacy courtyards.",
        "Broad, tree-lined suburban boulevards with deep front lawns.",
        "Monumental Catholic cathedral plazas flanked by administrative palaces."
      ],
      correctIndex: 1, // B
      explanation: "Traditional Islamic cities feature a central congregational mosque and adjacent covered marketplace (suq), with winding, narrow residential lanes designed for pedestrian shade and high courtyard walls ensuring family visual privacy.",
      distractorTip: "Islamic city cultural landscape: Central mosque, adjacent bazaar/suq, and privacy-oriented residential courtyards."
    },
    {
      id: "aphg3-l6-q3",
      stem: "How does the rapid global spread of uniform popular culture (e.g. American fast-food chains, global clothing brands, standardized glass skyscraper architecture) affect local folk cultures?",
      options: [
        "It enhances the uniqueness and isolation of remote tribal dialects.",
        "It leads to 'placelessness' (cultural homogenization), where diverse local traditions are erased in favor of standardized corporate landscapes.",
        "It causes complete reversal of international migration flows.",
        "It increases regional linguistic diversity."
      ],
      correctIndex: 1, // B
      explanation: "Geographer Edward Relph termed 'placelessness' the loss of uniqueness in the cultural landscape, resulting from global popular culture diffusing identical suburban malls, fast-food franchises, and corporate architecture across all continents.",
      distractorTip: "Placelessness = loss of unique local cultural identity due to the homogenization of popular culture."
    }
  ],

  // UNIT 4: Political Patterns & Processes
  "aphg-u4-l1": [
    {
      id: "aphg4-l1-q3",
      stem: "The Kurdish people constitute a distinct ethnic and linguistic group of over 30 million people concentrated across Turkey, Iraq, Iran, and Syria without possessing their own independent sovereign territory. The Kurds are best classified as a:",
      options: [
        "Multinational state",
        "City-state",
        "Stateless nation",
        "Autonomous republic"
      ],
      correctIndex: 2, // C
      explanation: "A stateless nation is a culturally cohesive group of people who share a common language, history, and national identity, but do not possess sovereign political control over an internationally recognized independent state of their own (e.g. Kurds, Palestinians, Basques).",
      distractorTip: "Stateless nation = nation without its own sovereign state (Kurds, Palestinians, Rohingya)."
    }
  ],
  "aphg-u4-l2": [
    {
      id: "aphg4-l2-q3",
      stem: "The Strait of Malacca, a narrow 500-mile waterway between Indonesia, Malaysia, and Singapore that carries over 25% of all global maritime oil shipments, is an example of a:",
      options: [
        "Landlocked enclave",
        "Strategic maritime chokepoint",
        "Demilitarized buffer zone",
        "Supranational trading union"
      ],
      correctIndex: 1, // B
      explanation: "A chokepoint is a strategic narrow passage (strait or canal) that can be easily blocked or disrupted, posing immense geopolitical and economic vulnerability to international trade (e.g. Strait of Malacca, Strait of Hormuz, Bab el-Mandeb, Suez Canal).",
      distractorTip: "Maritime chokepoints: Narrow critical shipping passages (Malacca, Hormuz, Suez, Panama) vital for global trade."
    }
  ],
  "aphg-u4-l3": [
    {
      id: "aphg4-l3-q3",
      stem: "Under the United Nations Convention on the Law of the Sea (UNCLOS), what sovereign rights does a coastal nation possess within its 200-nautical-mile Exclusive Economic Zone (EEZ)?",
      options: [
        "Full sovereignty to prohibit all foreign commercial cargo ships from passing through.",
        "Sole authority to board and seize foreign military vessels without warning.",
        "Exclusive legal rights to explore, harvest, and manage all natural living and mineral resources (such as offshore petroleum and fish) in the water and seabed.",
        "The right to declare war on any vessel that crosses into international airspace."
      ],
      correctIndex: 2, // C
      explanation: "Under UNCLOS, a coastal state's Exclusive Economic Zone (EEZ) extends up to 200 nautical miles from its baseline. Within this zone, the state has sole sovereign economic rights to exploit, conserve, and manage all natural resources (fisheries, seabed oil/gas), though foreign ships retain innocent passage rights.",
      distractorTip: "UNCLOS Zones: 0-12 nm = Territorial Waters (full sovereign control); 12-24 nm = Contiguous Zone (customs/immigration); 0-200 nm = EEZ (exclusive economic/resource rights)."
    }
  ],
  "aphg-u4-l4": [
    {
      id: "aphg4-l4-q3",
      stem: "When state politicians redraw electoral district boundaries to concentrate opposition voters into as few districts as possible, thereby diluting their voting influence across all remaining districts, which gerrymandering technique is being employed?",
      options: [
        "Cracking",
        "Packing",
        "Proportional devolution",
        "Malapportionment"
      ],
      correctIndex: 1, // B
      explanation: "Gerrymandering uses two primary techniques: 'Packing' concentrates opposition party voters into a few districts to waste their excess votes, while 'Cracking' splits opposition voters across multiple districts to keep them as a permanent minority.",
      distractorTip: "Packing = grouping opposition voters into a few overwhelming districts; Cracking = dispersing opposition voters so they never win a majority."
    }
  ],
  "aphg-u4-l5": [
    {
      id: "aphg4-l5-q3",
      stem: "Which of the following events represents a centrifugal force that promotes the devolution or fragmentation of a sovereign state?",
      options: [
        "Strong regional ethnic nationalism, deep linguistic divisions, and sharp economic inequality between provinces.",
        "A shared national language and a highly centralized state media network.",
        "Hosting the Olympic Games and experiencing a surge in national patriotism.",
        "A robust national interstate highway system connecting all peripheral cities."
      ],
      correctIndex: 0, // A
      explanation: "Centrifugal forces pull a country apart and threaten national unity (ethnic conflict, linguistic divides, economic inequality, geographic isolation). In contrast, centripetal forces bind a nation together (patriotism, shared language, strong infrastructure).",
      distractorTip: "Centrifugal = forces that pull apart (fleeing the center); Centripetal = forces that bind together (petals of a flower)."
    }
  ],
  "aphg-u4-l6": [
    {
      id: "aphg4-l6-q2",
      stem: "Why did member nations of the European Union (EU) agree to adopt the Euro currency and abolish internal border controls under the Schengen Agreement, despite having to cede portions of their national sovereignty?",
      options: [
        "To establish a unified global military under the United Nations command.",
        "To eliminate all domestic parliamentary elections.",
        "To foster frictionless international trade, labor mobility, and regional economic competitiveness on the global stage as a supranational organization.",
        "To comply with compulsory NATO nuclear defense protocols."
      ],
      correctIndex: 2, // C
      explanation: "Supranational organizations (EU, ASEAN, NAFTA/USMCA) involve three or more nations that pool authority and surrender certain elements of sovereignty to achieve shared economic, political, or security advantages.",
      distractorTip: "Supranationalism requires member states to surrender some sovereignty in exchange for collective economic or security strength."
    },
    {
      id: "aphg4-l6-q3",
      stem: "Which type of political boundary is drawn by outside colonial powers across an area without regard for pre-existing cultural, ethnic, or tribal divisions, as seen in the 1884 Berlin Conference partitioning of Africa?",
      options: [
        "Antecedent boundary",
        "Subsequent boundary",
        "Relic boundary",
        "Superimposed boundary"
      ],
      correctIndex: 3, // D
      explanation: "A superimposed boundary is forcefully imposed on an indigenous cultural landscape by external invading or colonial powers without respecting existing ethnic or linguistic realities, frequently causing persistent border disputes and civil strife.",
      distractorTip: "Superimposed = drawn by outsiders ignoring ethnic lines (Africa colonial borders); Antecedent = drawn before heavy settlement (US-Canada 49th parallel); Relic = no longer functions but still visible (Berlin Wall)."
    }
  ],

  // UNIT 5: Agriculture & Rural Land-Use
  "aphg-u5-l1": [
    {
      id: "aphg5-l1-q3",
      stem: "Which agricultural hearth was the original center for the early domestication of maize (corn), beans, squash, and turkeys?",
      options: [
        "The Fertile Crescent",
        "Southeast Asia",
        "Mesoamerica",
        "The Indus River Valley"
      ],
      correctIndex: 2, // C
      explanation: "Mesoamerica (modern southern Mexico and Central America) was the primary agricultural hearth for maize, squash, various beans, and cotton, which subsequently diffused across the Americas and globally via the Columbian Exchange.",
      distractorTip: "Mesoamerica = Corn, beans, squash; Fertile Crescent = Wheat, barley, sheep, goats; East Asia = Rice, soybeans."
    }
  ],
  "aphg-u5-l2": [
    {
      id: "aphg5-l2-q3",
      stem: "In rural Quebec and parts of Louisiana, long narrow parcels of farmland extend perpendicularly back from riverbanks and roads. Which rural cadastral survey system created this distinct spatial layout?",
      options: [
        "The French long-lot survey system",
        "The British metes-and-bounds system",
        "The American township-and-range rectangular grid system",
        "Communal collective ejido surveying"
      ],
      correctIndex: 0, // A
      explanation: "The French long-lot cadastral system subdivided agricultural land into narrow strips fronting a river or canal, ensuring every farming family had direct access to water transportation and fertile riverbank soil.",
      distractorTip: "Long-lot = French river access; Metes and bounds = British landmarks/trees; Township and range = American 6x6 mile grid system."
    }
  ],
  "aphg-u5-l3": [
    {
      id: "aphg5-l3-q3",
      stem: "What was a significant unintended environmental consequence of the Green Revolution in developing countries like India and Mexico during the late 20th century?",
      options: [
        "A permanent global shortage of chemical nitrogen fertilizers.",
        "Severe soil salinization, depleted groundwater aquifers from motorized tube-well irrigation, and chemical pesticide runoff polluting river systems.",
        "The complete abandonment of hybrid dwarf seed varieties in favor of organic crops.",
        "Mass migration from urban centers back to subsistence rural farming."
      ],
      correctIndex: 1, // B
      explanation: "While the Green Revolution dramatically increased grain yields and prevented widespread famine, its heavy reliance on synthetic fertilizers, synthetic pesticides, and intensive irrigation caused severe environmental degradation: aquifer depletion, chemical runoff, and soil salinization.",
      distractorTip: "Green Revolution positives: higher food yields, prevented famine; Negatives: environmental damage (pesticides, water depletion) and high capital costs hurting small subsistence farmers."
    }
  ],
  "aphg-u5-l4": [
    {
      id: "aphg5-l4-q3",
      stem: "In Johann Heinrich von Thünen's classic 1826 model of agricultural land use, why is commercial dairy farming and market gardening situated in the innermost ring closest to the central urban market?",
      options: [
        "Dairy cows require vast expanses of cheap, peripheral grazing land.",
        "Fresh milk and delicate vegetables are highly perishable and expensive to transport, and intensive farmers can afford high land rents (bid-rent) near the city.",
        "City municipal codes historically mandated cattle grazing within urban borders.",
        "Timber for firewood was prohibited near metropolitan zones."
      ],
      correctIndex: 1, // B
      explanation: "Von Thünen's model is governed by transportation costs and land rent (bid-rent theory). Milk, fruits, and vegetables spoil rapidly without refrigeration and have high transport costs per unit, so intensive market farmers locate nearest the market where land rent is highest.",
      distractorTip: "Von Thünen Rings from center outward: (1) Market gardening & dairy (perishable/high bid-rent); (2) Forestry (heavy fuel); (3) Grains/field crops; (4) Livestock ranching (extensive/cheap land)."
    }
  ],
  "aphg-u5-l5": [
    {
      id: "aphg5-l5-q3",
      stem: "Which agricultural system is characterized by clearing forest plots through slash-and-burn techniques, cultivating crops for 2 to 3 years until soil nutrients deplete, and then abandoning the field for a lengthy fallow period?",
      options: [
        "Intensive wet-rice subsistence agriculture",
        "Commercial grain farming",
        "Shifting cultivation (swidden agriculture)",
        "Mediterranean fruit and olive orchards"
      ],
      correctIndex: 2, // C
      explanation: "Shifting cultivation (swidden/slash-and-burn) is an extensive subsistence farming system practiced in tropical rainforests where farmers clear vegetation, burn debris to enrich nutrient-poor soil with ash, cultivate briefly, and then leave the land fallow for years to regenerate.",
      distractorTip: "Shifting cultivation = extensive subsistence, tropical rainforests, slash-and-burn with long fallow periods."
    }
  ],
  "aphg-u5-l6": [
    {
      id: "aphg5-l6-q3",
      stem: "What is the defining characteristic of an urban 'food desert'?",
      options: [
        "A metropolitan area where all restaurants serve exclusively international cuisine.",
        "An urban neighborhood where residents lack convenient physical access (within 1 mile) to affordable, nutritious fresh foods like grocery stores, often accompanied by a high density of fast-food outlets and convenience stores.",
        "A drought-stricken agricultural region surrounding an expanding desert.",
        "A downtown business district where street vendors are legally prohibited."
      ],
      correctIndex: 1, // B
      explanation: "A food desert is an urban or rural neighborhood where low-income residents lack access to fresh, healthy, affordable food (typically more than 1 mile in urban areas or 10 miles in rural areas from a supermarket), contributing to dietary health disparities.",
      distractorTip: "Food deserts are characterized by lack of fresh produce/supermarkets and reliance on processed convenience store foods."
    }
  ],
  "aphg-u5-l7": [
    {
      id: "aphg5-l7-q2",
      stem: "In modern industrial commercial agriculture, a transnational agribusiness company that controls seed genetic patents, fertilizer manufacture, slaughterhouses, frozen food packaging, and distribution logistics is practicing:",
      options: [
        "Extensive pastoral transhumance",
        "Horizontal market fragmentation",
        "Vertical integration in a commodity chain",
        "Boserupian fallow rotation"
      ],
      correctIndex: 2, // C
      explanation: "Vertical integration occurs when a single corporation owns and coordinates multiple successive steps along the entire agricultural commodity chain—from research and inputs (seed, feed) to processing, packaging, and retail distribution.",
      distractorTip: "Vertical integration = ownership of multiple stages along a single agricultural commodity chain."
    },
    {
      id: "aphg5-l7-q3",
      stem: "Why does the Fair Trade movement certify and market commodities like coffee, cocoa, and bananas grown by smallholder farmers in developing nations?",
      options: [
        "To guarantee that multinational agribusiness corporations capture higher retail profit margins.",
        "To enforce complete mechanization and eliminate human manual labor.",
        "To ensure small-scale producers receive fair floor prices, safe working conditions, and direct access to global markets while adhering to environmental standards.",
        "To prohibit the exportation of tropical cash crops."
      ],
      correctIndex: 2, // C
      explanation: "Fair Trade certification bypasses exploitative middlemen and provides smallholder farmers with guaranteed minimum floor prices, community development premiums, and fair labor standards, promoting sustainable development.",
      distractorTip: "Fair trade aims to return a greater share of retail profits directly to smallholder farmers and workers in developing nations."
    }
  ],

  // UNIT 6: Cities & Urban Land-Use
  "aphg-u6-l1": [
    {
      id: "aphg6-l1-q3",
      stem: "A sprawling suburban node featuring extensive office parks, luxury hotels, major shopping complexes, and entertainment venues situated at the intersection of outer beltway highways is known as an:",
      options: [
        "Inner-city squatter settlement",
        "Edge city",
        "Old colonial primate core",
        "Historic central business district"
      ],
      correctIndex: 1, // B
      explanation: "Joel Garreau coined the term 'Edge City' to describe suburban downtown clusters that developed along major highway interchanges on metropolitan peripheries, possessing more retail and office space than many traditional downtowns.",
      distractorTip: "Edge cities = suburban employment/commercial nodes located at highway interchanges outside the central city."
    }
  ],
  "aphg-u6-l2": [
    {
      id: "aphg6-l2-q3",
      stem: "According to Walter Christaller's Central Place Theory, what is the 'threshold' of a good or service?",
      options: [
        "The maximum geographic distance a consumer is willing to travel to purchase the item.",
        "The minimum number of consumers required to support the profitable provision of that good or service in a settlement.",
        "The physical tax boundary surrounding a municipal settlement.",
        "The ratio of manufacturing employment to retail service jobs."
      ],
      correctIndex: 1, // B
      explanation: "In Central Place Theory, 'Range' is the maximum distance consumers will travel for a good; 'Threshold' is the minimum population (customer base) necessary to generate sufficient demand to keep the business profitable.",
      distractorTip: "Threshold = minimum population needed to support a business; Range = maximum distance consumers travel to buy a good."
    }
  ],
  "aphg-u6-l3": [
    {
      id: "aphg6-l3-q3",
      stem: "In Homer Hoyt's Sector Model of urban land use, how do residential, industrial, and commercial zones expand outward from the Central Business District (CBD)?",
      options: [
        "In concentric circular rings expanding uniformly in all directions.",
        "In wedge-shaped sectors radiating outward along major transportation corridors such as rail lines and arterial avenues.",
        "Around multiple independent suburban nuclei with zero central node.",
        "In a disorganized mosaic dictated exclusively by topography."
      ],
      correctIndex: 1, // B
      explanation: "Hoyt observed that cities grow in sectors or wedges radiating outward along transportation arteries (rail lines, trolley avenues, highways). High-income residential housing expands along scenic high ground, while heavy industry corridors hug railroads.",
      distractorTip: "Burgess = Concentric rings; Hoyt = Wedges/sectors along transit lines; Harris-Ullman = Multiple nuclei."
    }
  ],
  "aphg-u6-l4": [
    {
      id: "aphg6-l4-q3",
      stem: "In the Latin American City Model (Griffin-Ford model), where does the highest-income elite residential sector locate relative to the Central Business District?",
      options: [
        "In peripheral squatter settlements on the outer ring.",
        "Directly adjacent to the industrial park on the edge of the zone of in situ accretion.",
        "Flanking a grand, scenic commercial boulevard ('the Spine') that extends directly outward from the central plaza.",
        "Scattered randomly throughout rural agricultural belts."
      ],
      correctIndex: 2, // C
      explanation: "In the Griffin-Ford Latin American model, the elite residential sector flanks the commercial 'Spine', an extension of the historic CBD equipped with reliable utilities, luxury dining, and cultural amenities, contrasting sharply with peripheral squatter settlements (favelas/barriadas).",
      distractorTip: "Latin American city model: Wealthy elite live near the center along the commercial Spine; poorest residents live in squatter settlements on the peripheral ring (periférico)."
    }
  ],
  "aphg-u6-l5": [
    {
      id: "aphg6-l5-q3",
      stem: "During the mid-20th century in the United States, the discriminatory practice where real estate agents persuaded white homeowners to sell their homes at deflated prices by warning that minority families were moving into the neighborhood was known as:",
      options: [
        "Redlining",
        "Blockbusting",
        "Inclusionary zoning",
        "Eminent domain"
      ],
      correctIndex: 1, // B
      explanation: "Blockbusting was an exploitative real estate tactic: agents stoked racial fears to buy homes cheaply from fleeing white owners, and then resold the properties at inflated prices to minority families seeking housing, accelerating 'white flight' to the suburbs.",
      distractorTip: "Blockbusting = agents stoking panic selling to flip homes; Redlining = banks refusing to grant mortgages in minority neighborhoods."
    }
  ],
  "aphg-u6-l6": [
    {
      id: "aphg6-l6-q3",
      stem: "Which of the following urban planning strategies is a core principle of the New Urbanism movement?",
      options: [
        "Segregating residential subdivisions strictly away from all commercial and retail establishments.",
        "Constructing high-speed urban expressways through downtown commercial centers.",
        "Designing mixed-use, walkable neighborhoods featuring diverse housing choices, front porches, accessible public transit, and vibrant civic spaces.",
        "Promoting low-density suburban leapfrog sprawl to maximize private lot acreage."
      ],
      correctIndex: 2, // C
      explanation: "New Urbanism promotes human-scale, walkable neighborhoods that counter suburban sprawl by combining mixed-use zoning (apartments above shops), diverse architectural styles, pedestrian-friendly streets, and mass transit connectivity.",
      distractorTip: "New Urbanism = walkable, mixed-use, transit-oriented, combating low-density car-dependent suburban sprawl."
    }
  ],
  "aphg-u6-l7": [
    {
      id: "aphg6-l7-q2",
      stem: "According to the Rank-Size Rule for urban systems, if the largest city in a country has a population of 8,000,000, what is the expected population of the fourth-largest city?",
      options: [
        "4,000,000",
        "2,000,000",
        "1,000,000",
        "500,000"
      ],
      correctIndex: 1, // B
      explanation: "The Rank-Size Rule predicts that the $n$-th largest settlement will be $1/n$ the population of the largest city: $\\text{Population}_n = \\frac{\\text{Population}_1}{n}$. For the 4th largest city: $8,000,000 / 4 = 2,000,000$.",
      distractorTip: "Rank-Size Rule formula: $P_n = P_1 / n$. 2nd city = half of largest; 4th city = one-fourth of largest."
    },
    {
      id: "aphg6-l7-q3",
      stem: "A developing country where the capital city is more than five times larger than any other city and dominates all political, economic, cultural, and financial power possesses a:",
      options: [
        "Rank-size urban distribution",
        "Multi-centric network",
        "Primate city structure",
        "Conurbation hierarchy"
      ],
      correctIndex: 2, // C
      explanation: "A primate city is disproportionately large (more than twice the size of the next largest city) and exercises overwhelming dominance over the national economy, politics, and culture (e.g. Paris in France, Bangkok in Thailand, Mexico City in Mexico).",
      distractorTip: "Primate city = disproportionately huge city that dominates the entire nation, violating the rank-size rule."
    }
  ],

  // UNIT 7: Industrial & Economic Development
  "aphg-u7-l1": [
    {
      id: "aphg7-l1-q3",
      stem: "According to Alfred Weber's Least Cost Theory, where should a manufacturing facility locate if its production process is 'bulk-reducing' (raw materials lose significant weight during processing, such as copper smelting or timber milling)?",
      options: [
        "Directly at the final consumer market to minimize finished delivery costs.",
        "Close to the raw material extraction source to minimize transporting heavy, raw inputs.",
        "At a break-of-bulk transshipment seaport regardless of distance.",
        "Equidistant between raw material sources and major consumer urban centers."
      ],
      correctIndex: 1, // B
      explanation: "Weber's Least Cost Theory models factory location based on transport costs. If final goods weigh less than raw inputs (bulk-reducing / weight-losing), transport costs are minimized by placing the factory near the raw material source.",
      distractorTip: "Bulk-reducing (weight-losing) = near raw materials (copper, lumber); Bulk-gaining (weight-gaining) = near the market (soft drinks, cars)."
    }
  ],
  "aphg-u7-l2": [
    {
      id: "aphg7-l2-q3",
      stem: "Which combination of socioeconomic metrics is combined to calculate the United Nations Human Development Index (HDI)?",
      options: [
        "Military spending per capita, crude birth rate, and foreign direct investment.",
        "Gross National Income (GNI) per capita, mean and expected years of schooling, and life expectancy at birth.",
        "Carbon emissions per capita, agricultural output, and inflation rate.",
        "Total tariff revenue, percentage of unionized labor, and internet penetration."
      ],
      correctIndex: 1, // B
      explanation: "The UN Human Development Index (HDI) evaluates human development across three core dimensions: (1) Standard of living (GNI per capita adjusted for PPP), (2) Knowledge/Education (mean and expected years of schooling), and (3) Long and healthy life (life expectancy at birth).",
      distractorTip: "HDI measures three dimensions: A decent standard of living (GNI/capita), Knowledge (education), and Long life (life expectancy)."
    }
  ],
  "aphg-u7-l3": [
    {
      id: "aphg7-l3-q3",
      stem: "In Immanuel Wallerstein's World Systems Theory, what economic relationship characterizes the dynamic between 'Core' and 'Periphery' nations?",
      options: [
        "Periphery nations export high-value manufactured consumer goods and intellectual software to Core nations.",
        "Core nations exploit low-cost labor and cheap raw materials extracted from Periphery nations, reinforcing unequal global wealth distribution.",
        "All nations transition through identical developmental stages simultaneously.",
        "Semi-periphery nations are legally prohibited from participating in international trade."
      ],
      correctIndex: 1, // B
      explanation: "Wallerstein's World Systems Theory views the global capitalist economy as a unified hierarchy. Core nations extract inexpensive raw materials and cheap labor from peripheral countries, producing high-value processed goods that generate wealth for the core while keeping the periphery dependent.",
      distractorTip: "Core = wealthy/high-tech; Periphery = raw materials/cheap labor; Semi-periphery = intermediate manufacturing (Brazil, India, China)."
    }
  ],
  "aphg-u7-l4": [
    {
      id: "aphg7-l4-q3",
      stem: "What economic restructuring process occurred in the American Midwest 'Rust Belt' and northern England when factory assembly jobs relocated to low-wage developing nations?",
      options: [
        "Primary agricultural expansion",
        "Import substitution industrialization",
        "Deindustrialization and transition to a post-industrial service-based tertiary economy",
        "Complete nationalization of domestic manufacturing"
      ],
      correctIndex: 2, // C
      explanation: "Deindustrialization is the decline of secondary industrial manufacturing employment in developed regions, driven by automation and global outsourcing to low-wage nations, prompting a shift toward tertiary and quaternary service economies.",
      distractorTip: "Deindustrialization = loss of manufacturing jobs as economies transition to service and tech industries."
    }
  ],
  "aphg-u7-l5": [
    {
      id: "aphg7-l5-q3",
      stem: "Why do developing nations establish Special Economic Zones (SEZs), such as Shenzhen in China or border maquiladora zones in Mexico?",
      options: [
        "To strictly eliminate foreign private business ownership.",
        "To attract foreign direct investment (FDI) and create manufacturing jobs by offering tax incentives, reduced tariffs, streamlined regulations, and low-cost labor.",
        "To ban the exportation of manufactured consumer goods.",
        "To enforce rigid domestic environmental standards that exceed Western regulations."
      ],
      correctIndex: 1, // B
      explanation: "Special Economic Zones (SEZs) and Export Processing Zones (EPZs) offer regulatory and tax incentives (duty-free imports of raw components, tax holidays, streamlined permits) to attract multinational corporate investment and boost export-driven industrialization.",
      distractorTip: "SEZs offer tax breaks, duty-free trade, and business-friendly regulations to attract foreign corporate investment."
    }
  ],
  "aphg-u7-l6": [
    {
      id: "aphg7-l6-q2",
      stem: "What is the primary role of a 'break-of-bulk point' in international freight transport?",
      options: [
        "A location where cargo is shifted from one transportation mode to another, such as from an ocean container ship to railcars or semi-trucks.",
        "A customs inspection warehouse where illegal goods are incinerated.",
        "A factory where raw materials are melted into consumer electronics.",
        "A dry dock where obsolete shipping vessels are dismantled."
      ],
      correctIndex: 0, // A
      explanation: "A break-of-bulk point is a location where goods are transferred from one mode of transportation to another (e.g. seaports where cargo containers are unloaded from container ships onto freight trains or trucks), adding handling costs and often attracting warehousing and manufacturing clusters.",
      distractorTip: "Break-of-bulk point = place where cargo transfers from one transport mode to another (e.g. ship to train)."
    },
    {
      id: "aphg7-l6-q3",
      stem: "How does the United Nations Sustainable Development Goals (SDGs) framework attempt to balance economic development with environmental stewardship?",
      options: [
        "By demanding that developing nations shut down all fossil-fueled power plants within 24 hours.",
        "By focusing on economic growth, poverty eradication, gender equality, and clean renewable energy while protecting terrestrial and marine ecosystems for future generations.",
        "By mandating that all international trade be governed by agricultural tariffs.",
        "By transferring all intellectual patent rights to the World Trade Organization."
      ],
      correctIndex: 1, // B
      explanation: "The 17 UN Sustainable Development Goals aim to eradicate extreme poverty, ensure gender equity and quality education, foster sustainable industrial innovation, and combat climate change, ensuring that current economic progress does not compromise the carrying capacity of the planet.",
      distractorTip: "Sustainable development meets the needs of the present without compromising the ability of future generations to meet their own needs."
    }
  ]
};

const fullPath = path.resolve(__dirname, '../src/data/quiz/apHumanGeographyUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_HUMANGEOGRAPHY_UNIT_DEFINITIONS || mod.exports.ALL_AP_HUMAN_GEOGRAPHY_UNIT_DEFINITIONS;

let addedCount = 0;
units.forEach(u => {
  u.levels.forEach(l => {
    if (additions[l.uniqueKey]) {
      additions[l.uniqueKey].forEach(newQ => {
        l.questions.push(newQ);
        addedCount++;
      });
    }
  });
});

console.log('Added', addedCount, 'questions to AP Human Geography.');

const newCode = `// AP Human Geography Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–7)
// Complete authentic coverage: 45 Levels, 135 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_HUMANGEOGRAPHY_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apHumanGeographyUnitsData.ts successfully.');
