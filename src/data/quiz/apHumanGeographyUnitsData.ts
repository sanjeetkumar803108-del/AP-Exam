// AP Human Geography Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–7)
// Complete authentic coverage: 45 Levels, 135 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_HUMAN_GEOGRAPHY_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Unit 1: Thinking Geographically",
    "shortTitle": "Unit 1: Geospatial",
    "description": "Geospatial tech (GIS, GPS, remote sensing), spatial concepts, scales of analysis, and formal/functional/vernacular regions",
    "examWeight": "8–10% of AP Exam",
    "biome": {
      "name": "Cartographer’s Coast & GIS Archipelago",
      "icon": "🗺️",
      "accentColor": "#0284C7",
      "secondaryColor": "#0369A1",
      "groundGradient": "from-sky-100 via-teal-50 to-emerald-100",
      "cardBorder": "border-sky-500",
      "trailColor": "#0284c7",
      "nodeRing": "ring-sky-400/40",
      "skyTint": "from-sky-50 to-teal-50/30"
    },
    "levels": [
      {
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "aphg-u1-l1",
        "topicNumber": "Topic 1.1",
        "name": "Map Projections & Distortions",
        "subtitle": "Mercator, Peters, Robinson & distortion types",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg1-l1-q1",
            "stem": "Which statement accurately describes the main limitation of the Mercator map projection?",
            "options": [
              "It severely distorts land area at high latitudes near the poles while preserving shape and direction.",
              "It distorts compass directions while keeping landmass sizes strictly accurate.",
              "It is an interrupted projection that splits ocean basins.",
              "It can only be used to map local city neighborhoods."
            ],
            "correctIndex": 0,
            "explanation": "The Mercator projection is conformal: lines of latitude and longitude intersect at 90-degree angles, preserving direction for nautical navigation, but area is massively exaggerated towards the North and South Poles (making Greenland appear larger than Africa, despite Africa being 14x larger).",
            "distractorTip": "Remember: All 2D maps have distortion. Mercator distorts AREA/SIZE, while Gall-Peters distorts SHAPE."
          },
          {
            "id": "hg1-l1-q2",
            "stem": "A choropleth map uses which technique to represent geographical data?",
            "options": [
              "Dots of equal size where each dot represents a specific frequency of occurrence.",
              "Different color shading or patterns to indicate categorical or quantitative values per predefined region.",
              "Distorting the geographical size of countries proportional to the statistical value being mapped.",
              "Contour lines connecting points of equal atmospheric pressure or elevation."
            ],
            "correctIndex": 1,
            "explanation": "Choropleth maps use color gradations or shading within defined political/statistical boundaries (like states or counties) to visualize density or rates.",
            "distractorTip": "Cartograms distort shape/size; dot density maps use dots; isoline maps connect equal values."
          },
          {
            "id": "hg1-l1-q3",
            "stem": "Why might a cartographer choose the Robinson projection over the Mercator projection for an introductory world geography textbook?",
            "options": [
              "It preserves exact compass bearings for long-distance marine navigators.",
              "It has zero distortion of both area and shape simultaneously.",
              "It visually balances distortions of shape, area, distance, and direction for a visually pleasing global overview.",
              "It portrays landmasses as flat polygons without curved meridian lines."
            ],
            "correctIndex": 2,
            "explanation": "The Robinson projection is a compromise projection. It balances all four geometric properties (shape, area, distance, direction) so that none are completely distorted, producing an aesthetically balanced classroom map.",
            "distractorTip": "AP Exam Trap: No flat map can have zero distortion because projecting a 3D sphere onto a 2D plane always distorts at least one geometric property."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "aphg-u1-l2",
        "topicNumber": "Topic 1.2",
        "name": "Geospatial Technologies & Data",
        "subtitle": "GIS layering, GPS navigation, and Remote Sensing satellites",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "hg1-l2-q1",
            "stem": "Urban planners combine layers of soil drainage, flood zones, transportation corridors, and zoning boundaries to select a hospital site. Which technology are they utilizing?",
            "options": [
              "Photogrammetric compass surveys",
              "Global Positioning System (GPS)",
              "Remote Sensing satellite photography alone",
              "Geographic Information Systems (GIS)"
            ],
            "correctIndex": 3,
            "explanation": "GIS is a computer hardware and software system that captures, stores, analyzes, and overlays multiple thematic spatial data layers to solve complex planning problems.",
            "distractorTip": "GPS determines absolute location coordinates; Remote Sensing collects imagery; GIS layers and analyzes multiple data sets."
          },
          {
            "id": "hg1-l2-q2",
            "stem": "Agricultural scientists monitor deforestation in the Amazon Basin and assess crop health across entire continents over consecutive decades. Which spatial technology provides this primary data?",
            "options": [
              "Remote Sensing via multispectral satellite imagery",
              "Global Positioning System (GPS) handheld receivers",
              "In-person census survey questionnaires",
              "Paper topographic cartography"
            ],
            "correctIndex": 0,
            "explanation": "Remote sensing is the acquisition of data about Earth's surface from a distance using satellites or aircraft mounted with multispectral scanners, radar, or cameras.",
            "distractorTip": "Remote sensing provides raw visual/spectral imagery; GIS is used later to analyze that imagery."
          },
          {
            "id": "aphg1-l2-q3",
            "stem": "A municipal urban planning department layers satellite imagery, parcel property tax boundaries, flood hazard zones, and traffic collision points into a unified digital cartographic interface. Which geospatial technology is being utilized?",
            "options": [
              "Global Positioning System (GPS)",
              "Geographic Information System (GIS)",
              "Satellite remote infrared sensing",
              "Passive sonar bathymetry"
            ],
            "correctIndex": 1,
            "explanation": "A Geographic Information System (GIS) captures, stores, analyzes, and displays spatial data by layering complex thematic datasets (e.g. topography, property zoning, hydrology, transit lines) to reveal spatial correlations and assist in urban planning.",
            "distractorTip": "GPS determines exact absolute coordinates/navigation; Remote sensing gathers data from satellites/aircraft; GIS LAYERS multiple spatial datasets for analysis."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "aphg-u1-l3",
        "topicNumber": "Topic 1.3",
        "name": "Spatial Concepts & Interaction",
        "subtitle": "Distance decay, space-time compression & possibilism",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "hg1-l3-q1",
            "stem": "High-speed internet, commercial aviation, and fiber-optic communication have drastically reduced the friction of distance, allowing ideas and money to traverse continents in seconds. What geographic concept does this illustrate?",
            "options": [
              "Environmental determinism",
              "Space-time compression",
              "Distance decay",
              "Stimulus diffusion"
            ],
            "correctIndex": 1,
            "explanation": "Space-time compression refers to the reduction in time it takes for something to reach another place as a result of improved transportation and communications technology.",
            "distractorTip": "Distance decay describes interaction decreasing with distance; space-time compression overcomes distance decay through technology."
          },
          {
            "id": "hg1-l3-q2",
            "stem": "The statement \"Tropical climates cause human societies to be lazy and uncivilized, whereas temperate European climates force people to develop industry and advanced technology\" is an example of which rejected historical concept?",
            "options": [
              "Cultural relativism",
              "Possibilism",
              "Environmental determinism",
              "Sequent occupance"
            ],
            "correctIndex": 2,
            "explanation": "Environmental determinism is the 19th/early 20th-century belief that the physical environment (especially climate) strictly controls human social development. It was rejected for Eurocentric and racist biases.",
            "distractorTip": "Possibilism is the modern consensus: the environment sets constraints, but humans have cultural agency to adapt."
          },
          {
            "id": "aphg1-l3-q3",
            "stem": "Although London and Tokyo are separated by thousands of miles, instantaneous fiber-optic financial communication and high-speed air travel allow bankers in both cities to interact more frequently than farmers living 50 miles apart in rural Siberia. Which spatial concept does this illustrate?",
            "options": [
              "Environmental determinism",
              "Absolute distance decay",
              "Time-space compression (space-time convergence)",
              "Stimulus cultural diffusion"
            ],
            "correctIndex": 2,
            "explanation": "Time-space compression (identified by David Harvey) describes the reduction in time it takes for ideas, capital, and goods to diffuse across space due to rapid advancements in telecommunications and transportation technologies.",
            "distractorTip": "Distance decay states interaction decreases with physical distance; Time-space compression overcomes physical distance through advanced technology."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "aphg-u1-l4",
        "topicNumber": "Topic 1.4",
        "name": "Scales of Analysis",
        "subtitle": "Local, national, and global data aggregation",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "hg1-l4-q1",
            "stem": "A map of the United States shows the entire country shaded as high wealth based on national average GDP per capita. However, a county-level map reveals severe poverty in regions like Appalachia and the Mississippi Delta. What spatial lesson does this comparison demonstrate?",
            "options": [
              "Choropleth maps cannot display economic wealth.",
              "National scale maps are always more scientifically accurate than county-level maps.",
              "Local data invalidates national economic statistics.",
              "Changing the scale of analysis can reveal local variations and disparities that are masked by aggregated national-scale data."
            ],
            "correctIndex": 3,
            "explanation": "Scale of analysis is fundamental in AP Human Geography. Aggregated data at national scales hides significant internal economic, social, or health disparities that only become apparent at sub-national and local scales.",
            "distractorTip": "High-level aggregation always smooths out and hides regional extremes."
          },
          {
            "id": "aphg1-l4-q2",
            "stem": "A researcher examines breast cancer mortality rates on a global map and notices that the United States appears completely uniform in risk. However, zooming in to a county-level map reveals dramatic clusters of high mortality in rural counties. What geographic phenomenon does this demonstrate?",
            "options": [
              "Data generalization and masking of local variation at smaller cartographic scales of analysis.",
              "The Mercator projection's polar distortion.",
              "Cultural syncretism across census blocks.",
              "Environmental determinism in agricultural settlements."
            ],
            "correctIndex": 0,
            "explanation": "Scale of analysis matters fundamentally: aggregated data at a national or global scale generalizes patterns, obscuring significant regional and local disparities that only become visible at local or census-tract scales of inquiry.",
            "distractorTip": "Changing scale of analysis reveals or hides local variation; national-scale maps mask local spatial disparities."
          },
          {
            "id": "aphg1-l4-q3",
            "stem": "Which of the following cartographic scales represents the 'largest scale' map?",
            "options": [
              "1 : 10,000,000",
              "1 : 1,000,000",
              "1 : 250,000",
              "1 : 5,000"
            ],
            "correctIndex": 3,
            "explanation": "Map scale is a mathematical fraction. $1 / 5,000 = 0.0002$ is a much larger numerical fraction than $1 / 10,000,000 = 0.0000001$. A large-scale map shows a small geographic area (like a neighborhood or campus) with immense, zoomed-in detail.",
            "distractorTip": "Counterintuitive AP rule: Large scale = small area with LOTS of detail (1:5,000); Small scale = large area with LITTLE detail (1:10,000,000)."
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "aphg-u1-l5",
        "topicNumber": "Topic 1.5",
        "name": "Regional Analysis",
        "subtitle": "Formal, Functional (Nodal), and Vernacular regions",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "hg1-l5-q1",
            "stem": "Which of the following is the best example of a functional (nodal) region?",
            "options": [
              "The broadcast reception area of a metropolitan television station",
              "The French-speaking area of southern Belgium (Wallonia)",
              "The Rocky Mountain biome defined by alpine vegetation",
              "The American \"Rust Belt\" defined by economic decline"
            ],
            "correctIndex": 0,
            "explanation": "A functional (nodal) region is organized around a focal central point or node, with the surrounding area connected to the node via transportation, communication, or economic activity. As distance from the node increases, interaction diminishes.",
            "distractorTip": "Wallonia and the Rockies are FORMAL regions (shared uniform characteristic); the Rust Belt is a VERNACULAR/PERCEPTUAL region."
          },
          {
            "id": "hg1-l5-q2",
            "stem": "The concept of \"The American South\" or \"The Middle East\" is best categorized as which type of region?",
            "options": [
              "Formal (Uniform) region",
              "Vernacular (Perceptual) region",
              "Functional (Nodal) region",
              "Physiographic administrative zone"
            ],
            "correctIndex": 1,
            "explanation": "A vernacular (or perceptual) region exists as a conceptual construct of people's cultural identity, informal mental maps, and shared feelings rather than strict legal or scientific boundaries.",
            "distractorTip": "People disagree on where the exact borders of \"The South\" or \"The Midwest\" begin and end because they are vernacular."
          },
          {
            "id": "aphg1-l5-q3",
            "stem": "The delivery reception area of a major metropolitan daily newspaper or the broadcasting radius of an FM radio station best exemplifies which type of region?",
            "options": [
              "A formal (uniform) region",
              "A functional (nodal) region",
              "A vernacular (perceptual) region",
              "A physiographic biome region"
            ],
            "correctIndex": 1,
            "explanation": "A functional (nodal) region is organized around a focal central point or node, with the surrounding territory linked to the node by transportation, communication, or economic systems. Influence diminishes as distance from the node increases.",
            "distractorTip": "Formal = defined by shared homogeneous traits (state borders, wheat belt); Functional = centered on a node (subway system, pizza delivery); Vernacular = perceived identity (the American South)."
          }
        ]
      },
      {
        "id": 106,
        "unitIndex": 1,
        "levelNumber": 6,
        "uniqueKey": "aphg-u1-l6",
        "topicNumber": "Unit 1 Boss",
        "name": "Apex Geospatial Crucible",
        "subtitle": "Map scale, GIS overlay, and scale of inquiry synthesis",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "hg1-l6-q1",
            "stem": "A researcher is using two maps: Map X has a representative fraction of 1:25,000, while Map Y has a representative fraction of 1:1,000,000. Which statement regarding their scales and features is true?",
            "options": [
              "Map X covers an entire continent, whereas Map Y shows a single city park.",
              "Map Y is a larger-scale map because 1,000,000 is a larger number than 25,000.",
              "Map X is a larger-scale map that shows a smaller geographic area with much greater local detail.",
              "Both maps have identical scale because representative fractions represent unitless ratios."
            ],
            "correctIndex": 2,
            "explanation": "Scale is a fraction: $\\frac{1}{25,000} > \\frac{1}{1,000,000}$. Therefore, 1:25,000 is a \"LARGE-SCALE\" map because the fraction is larger. Large-scale maps zoom in on a small area (like a city neighborhood) to display high detail. Small-scale maps zoom out to show a large area (like the world) with low detail.",
            "distractorTip": "Counter-intuitive AP Trap: A \"large-scale\" map shows a SMALL area in great detail; a \"small-scale\" map shows a LARGE area with low detail!"
          },
          {
            "id": "aphg1-l6-q2",
            "stem": "Why do airlines fly along curved 'great circle routes' across northern Canada and Greenland when traveling between New York and London, rather than flying in a straight horizontal line on a standard Mercator map?",
            "options": [
              "To avoid mid-ocean air turbulence caused by trade winds.",
              "Because on a spherical Earth, the great circle arc is the shortest physical distance between two points, despite appearing curved on cylindrical map projections.",
              "Because magnetic compasses cannot navigate over open ocean waters.",
              "To comply with exclusive economic zone fishing boundaries under UNCLOS."
            ],
            "correctIndex": 1,
            "explanation": "Because the Earth is a three-dimensional oblate spheroid, the shortest distance between two points on its surface is an arc of a Great Circle. When projected onto a flat 2D Mercator projection, these straight great-circle paths appear curved.",
            "distractorTip": "Great circle routes represent the shortest distance between two points on a spherical globe."
          },
          {
            "id": "aphg1-l6-q3",
            "stem": "Which 19th-century geographical philosophy argued that human social, cultural, and economic achievements are strictly controlled and dictated by physical climate and environment?",
            "options": [
              "Possibilism",
              "Post-structural geography",
              "Environmental determinism",
              "Cultural ecology"
            ],
            "correctIndex": 2,
            "explanation": "Environmental determinism claimed that physical geography and climate dictated human cultural and economic development, often used to justify colonial superiority. It was supplanted in modern geography by possibilism, which argues humans adapt and modify their environment.",
            "distractorTip": "Environmental determinism = nature controls human culture; Possibilism = nature sets limits, but human choices and technology shape culture."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Unit 2: Population & Migration Patterns",
    "shortTitle": "Unit 2: Population",
    "description": "Demographic Transition Model (DTM Stages 1-5), population pyramids, Malthusian theory, push/pull factors, and refugees",
    "examWeight": "12–17% of AP Exam",
    "biome": {
      "name": "Oasis Valley & Demographer’s Steppes",
      "icon": "👥",
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
        "uniqueKey": "aphg-u2-l1",
        "topicNumber": "Topic 2.1",
        "name": "Population Densities",
        "subtitle": "Arithmetic, Physiological, and Agricultural density",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg2-l1-q1",
            "stem": "Country X has a moderate arithmetic density, but its physiological density is extremely high. What does this geographic comparison indicate about Country X?",
            "options": [
              "The country’s crude birth rate is currently declining.",
              "The country has very few people living in urban centers.",
              "The country has virtually no farmers relative to its cropland.",
              "Only a tiny percentage of the country’s total land area is arable (suitable for agriculture)."
            ],
            "correctIndex": 3,
            "explanation": "Arithmetic density is total population divided by total land area. Physiological density is total population divided by arable (farmable) land. A huge gap between the two means only a small sliver of land can support agriculture (e.g., Egypt, where 95% of people live on 5% of arable Nile land).",
            "distractorTip": "Physiological density directly measures carrying capacity pressure on arable farmland."
          },
          {
            "id": "hg2-l1-q2",
            "stem": "A country with a very low agricultural density but a high physiological density is most likely characterized by which economic profile?",
            "options": [
              "A highly developed economy utilizing modern, mechanized commercial farming technology (e.g., the Netherlands).",
              "A subsistence agrarian economy where nearly all citizens work as manual farmers.",
              "A nomadic pastoralist society living in an arid desert.",
              "A Stage 1 pre-industrial hunting-and-gathering territory."
            ],
            "correctIndex": 0,
            "explanation": "Agricultural density is the number of farmers per unit of arable land. A low agricultural density means very few farmers are needed to cultivate the land, which signifies advanced mechanization, tractors, and commercial agribusiness.",
            "distractorTip": "Low agricultural density = developed, mechanized farming; High agricultural density = developing, manual labor farming."
          },
          {
            "id": "aphg2-l1-q3",
            "stem": "Egypt has a moderate arithmetic density of approximately 100 people per square kilometer, but an extraordinarily high physiological density exceeding 2,500 people per square kilometer of arable land. What does this dramatic disparity reveal?",
            "options": [
              "Egypt has zero agricultural output and imports 100% of its food supplies.",
              "Nearly the entire Egyptian population is concentrated along a narrow strip of arable soil in the Nile River valley, putting intense pressure on farmland.",
              "Egypt's total fertility rate has dropped below replacement level.",
              "Egypt has achieved Stage 5 of the Demographic Transition Model."
            ],
            "correctIndex": 1,
            "explanation": "Arithmetic density is total population divided by total land area; physiological density is total population divided strictly by arable (farmable) land. A massive gap indicates that only a tiny fraction of the country's land is farmable, forcing the population to cram into fertile valleys (like the Nile).",
            "distractorTip": "High physiological density means immense population pressure on available agricultural/arable land."
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "aphg-u2-l2",
        "topicNumber": "Topic 2.2",
        "name": "Population Pyramids & Composition",
        "subtitle": "Youth dependency, aging societies, and sex ratios",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "hg2-l2-q1",
            "stem": "A population pyramid with an extremely broad base and rapidly tapering top characterizes a country that is experiencing which demographic reality?",
            "options": [
              "Sub-replacement fertility and a severe elderly dependency crisis (Stage 5).",
              "High crude birth rates, high total fertility rates, and a high youth dependency ratio (Stage 2).",
              "Stable population growth with low birth rates and low death rates (Stage 4).",
              "A massive temporary influx of male guest workers."
            ],
            "correctIndex": 1,
            "explanation": "A wide base indicates high numbers of newborns and children (high birth rate and fertility), typical of Stage 2 developing nations (like Niger or Uganda) with high youth dependency ratios.",
            "distractorTip": "A wide base = youth boom; an inverted/top-heavy pyramid = aging crisis."
          },
          {
            "id": "hg2-l2-q2",
            "stem": "A population pyramid displays an asymmetrical bulge in the 20–45 age cohort on the male side only. What is the most plausible geographic explanation for this anomaly?",
            "options": [
              "The country has achieved Stage 5 of the Demographic Transition.",
              "The country has implemented a strict pro-natalist policy for baby boys.",
              "The country has experienced large-scale immigration of male guest workers for construction or oil industries (e.g., Qatar or UAE).",
              "Female life expectancy has drastically dropped below male life expectancy."
            ],
            "correctIndex": 2,
            "explanation": "Persian Gulf states like Qatar and the United Arab Emirates have extreme male bulges in adult working age cohorts due to millions of male migrant guest workers hired for heavy construction and petroleum extraction.",
            "distractorTip": "Asymmetrical male-only bulges almost always indicate guest worker or military base demographics."
          },
          {
            "id": "aphg2-l2-q3",
            "stem": "A population pyramid with an extremely wide base of infants and children that rapidly tapers to a narrow apex of elderly residents signifies which demographic condition?",
            "options": [
              "A declining population with negative natural increase (Stage 5).",
              "A high total fertility rate, high infant mortality, high youth dependency ratio, and rapid population growth (Stage 2).",
              "A post-industrial nation with an aging workforce (Stage 4).",
              "A college town or retirement community with sex ratio imbalances."
            ],
            "correctIndex": 1,
            "explanation": "A wide pyramid base represents high birth rates and a large proportion of young children (high youth dependency). Rapid tapering reflects higher mortality rates at older ages, classic hallmarks of Stage 2 developing nations undergoing rapid demographic expansion.",
            "distractorTip": "Wide base = high birth rate / rapid growth (Stage 2); Columnar/rectangle = stable zero growth (Stage 4); Inverted/narrow base = declining aging population (Stage 5)."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "aphg-u2-l3",
        "topicNumber": "Topic 2.3",
        "name": "Demographic Transition Model (DTM)",
        "subtitle": "Stages 1 through 5 & Epidemiological transitions",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "hg2-l3-q1",
            "stem": "What is the primary factor that causes countries to transition from Stage 2 to Stage 3 of the Demographic Transition Model?",
            "options": [
              "The industrial revolution arrives, causing mortality rates to plummet.",
              "Crude death rates suddenly increase due to pandemic diseases.",
              "Total fertility rates climb above 5.0 children per woman.",
              "Crude birth rates begin to decline rapidly as urbanization increases and female education and economic opportunities expand."
            ],
            "correctIndex": 3,
            "explanation": "The hallmark of Stage 3 is a sharp drop in the Crude Birth Rate (CBR). As societies urbanize, children become economic costs rather than farm assets, and women gain greater access to education and jobs.",
            "distractorTip": "Death rates fall in Stage 2; birth rates fall in Stage 3."
          },
          {
            "id": "hg2-l3-q2",
            "stem": "Country Y has a Crude Birth Rate of 8 per 1,000 and a Crude Death Rate of 11 per 1,000. It is experiencing a negative Rate of Natural Increase (NIR < 0). Which DTM stage does Country Y occupy?",
            "options": [
              "Stage 5 (Declining/Contracting Population)",
              "Stage 4 (Stationary/Zero Growth)",
              "Stage 3 (Late Expanding)",
              "Stage 2 (Early Expanding)"
            ],
            "correctIndex": 0,
            "explanation": "Stage 5 represents demographic decline where death rates exceed birth rates ($CDR > CBR$), leading to a shrinking natural population (e.g., Japan, Germany, Italy, South Korea).",
            "distractorTip": "Stage 4 is near zero growth ($CBR \\approx CDR$); Stage 5 is negative growth ($CBR < CDR$)."
          },
          {
            "id": "aphg2-l3-q3",
            "stem": "What is the primary epidemiological transition shift that characterizes a country moving from Stage 2 to Stage 4 of the Demographic Transition Model?",
            "options": [
              "A shift from infectious and parasitic pandemics (cholera, tuberculosis) to chronic, degenerative lifestyle diseases (cardiovascular disease, cancer).",
              "A resurgence of medieval animal-borne plagues due to urban overcrowding.",
              "An increase in maternal mortality during childbirth.",
              "The complete eradication of all diseases of old age."
            ],
            "correctIndex": 0,
            "explanation": "Abdel Omran's Epidemiological Transition Model tracks causes of death: Stage 1/2 are dominated by infectious, waterborne, and parasitic diseases (cholera, malaria); Stages 3/4 transition to chronic non-communicable degenerative diseases (heart disease, stroke, cancer) as life expectancy expands.",
            "distractorTip": "Epidemiological Transition: Infectious/parasitic diseases in early stages $\\implies$ Chronic/degenerative diseases in late stages."
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "aphg-u2-l4",
        "topicNumber": "Topic 2.4",
        "name": "Malthusian Theory & Population Policies",
        "subtitle": "Thomas Malthus, Neo-Malthusians & Pro/Anti-natalism",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "hg2-l4-q1",
            "stem": "Which critique represents the most significant historical flaw in Thomas Malthus’s 1798 prediction that global population would outstrip world food production?",
            "options": [
              "He assumed that world birth rates would decline too quickly.",
              "He failed to anticipate massive agricultural technological advancements (the Green Revolution, mechanized farming, synthetic fertilizers) that drastically expanded food output.",
              "He incorrectly believed that population grew linearly rather than exponentially.",
              "He failed to predict the invention of the steam locomotive."
            ],
            "correctIndex": 1,
            "explanation": "Malthus stated population grew exponentially while food production grew arithmetically. He did not foresee the 2nd and 3rd Agricultural Revolutions (synthetic nitrogen, hybrid seeds, mechanization) which allowed food production to outpace population growth.",
            "distractorTip": "Ester Boserup argued against Malthus: population growth stimulates agricultural innovation (\"necessity is the mother of invention\")."
          },
          {
            "id": "hg2-l4-q2",
            "stem": "Governments offering subsidized daycare, paid maternal/paternal leave, and cash baby bonuses to encourage families to have more children are implementing which policy?",
            "options": [
              "Eugenics mandates",
              "Anti-natalist policies",
              "Pro-natalist policies",
              "Malthusian preventative checks"
            ],
            "correctIndex": 2,
            "explanation": "Pro-natalist policies are adopted by Stage 4/5 countries facing aging populations and shrinking workforces (like France, Sweden, and Japan) to raise birth and fertility rates.",
            "distractorTip": "Anti-natalist = restrict births (e.g., China’s former One-Child policy); Pro-natalist = encourage births."
          },
          {
            "id": "aphg2-l4-q3",
            "stem": "Ester Boserup's agricultural intensification theory directly contradicted Thomas Malthus's pessimistic population predictions by proposing that:",
            "options": [
              "Population growth would be curtailed by inevitable famines, plagues, and wars ('positive checks').",
              "Food production grows arithmetically while human population grows exponentially.",
              "Population growth stimulates technological innovation and agricultural intensification (e.g. multi-cropping, irrigation, mechanization), expanding food supply.",
              "Government anti-natalist tax penalties are required to prevent widespread starvation."
            ],
            "correctIndex": 2,
            "explanation": "While Malthus argued population growth would outstrip arithmetic food production, Boserup argued that 'necessity is the mother of invention.' Population pressure incentivizes farmers to innovate, intensify cultivation, and adopt new technologies, expanding carrying capacity.",
            "distractorTip": "Malthus = Population growth outstrips food (starvation unavoidable); Boserup = Population pressure drives agricultural innovation and increases food supply."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "aphg-u2-l5",
        "topicNumber": "Topic 2.5",
        "name": "Migration Push/Pull Factors & Ravenstein",
        "subtitle": "Economic drivers, gravity model, and distance decay",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "hg2-l5-q1",
            "stem": "According to E.G. Ravenstein’s classic Laws of Migration, which demographic group is historically most likely to make international, long-distance moves?",
            "options": [
              "Unaccompanied young children.",
              "Large multi-generational rural families.",
              "Elderly retired individuals seeking warmer climates.",
              "Young, single adult males seeking economic employment."
            ],
            "correctIndex": 3,
            "explanation": "Ravenstein observed that long-distance international migrants are predominantly young single adults seeking economic jobs, as they have fewer family obligations tethering them to their homeland.",
            "distractorTip": "Ravenstein: Short distance = internal/female; Long distance = international/young single adults."
          },
          {
            "id": "hg2-l5-q2",
            "stem": "A migrant leaves their home country intending to move to Chicago. En route, they stop in Atlanta, find a well-paying job and affordable apartment, and decide to settle there permanently. In geography, Atlanta represents what?",
            "options": [
              "An intervening opportunity",
              "An intervening obstacle",
              "A step migration node",
              "A counter-stream friction"
            ],
            "correctIndex": 0,
            "explanation": "An intervening opportunity is an attractive economic, social, or physical feature of a closer location that intercepts a migrant on their journey, causing them to settle there instead of the original destination.",
            "distractorTip": "An intervening OBSTACLE stops migration (e.g., border wall, lack of money); an intervening OPPORTUNITY satisfies migration."
          },
          {
            "id": "aphg2-l5-q3",
            "stem": "According to E.G. Ravenstein's classic Laws of Migration, which demographic profile represents the most common international migrant seeking employment?",
            "options": [
              "Multi-generational families with elderly grandparents.",
              "Young, single adult males traveling without dependents.",
              "Unaccompanied school-age children.",
              "Retired married couples over age 65."
            ],
            "correctIndex": 1,
            "explanation": "Ravenstein's laws observe that most long-distance and international migrants are young single adults (historically young adult males seeking economic labor opportunities), rather than intact families or elderly individuals.",
            "distractorTip": "Ravenstein's Laws: Most migrants move short distances; Long-distance migrants head for major cities; Most international migrants are young adult individuals."
          }
        ]
      },
      {
        "id": 206,
        "unitIndex": 2,
        "levelNumber": 6,
        "uniqueKey": "aphg-u2-l6",
        "topicNumber": "Topic 2.6",
        "name": "Refugees, IDPs & Remittances",
        "subtitle": "Forced migration, asylum, and transnational money flows",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "hg2-l6-q1",
            "stem": "What is the crucial legal distinction between an Internally Displaced Person (IDP) and a Refugee under international law?",
            "options": [
              "An IDP is migrating voluntarily for agricultural work, whereas a refugee is forced.",
              "A refugee has crossed an recognized international border to escape persecution or war, whereas an IDP has fled their home but remains within their own country.",
              "Refugees are eligible for economic remittances, whereas IDPs cannot receive money.",
              "IDPs are protected by the UN Refugee Convention, whereas refugees receive no legal status."
            ],
            "correctIndex": 1,
            "explanation": "Under the 1951 UN Convention, a Refugee is someone who has crossed an international boundary owing to well-founded fear of persecution. An IDP is forced to flee their home due to conflict or disaster but stays within the borders of their home nation.",
            "distractorTip": "Crossing an international border is the absolute prerequisite for official UN refugee status."
          },
          {
            "id": "aphg2-l6-q2",
            "stem": "A family flees armed conflict and aerial bombing in their hometown and moves to a makeshift camp in a neighboring province within the same country. Under international humanitarian law, how are these displaced persons classified?",
            "options": [
              "Refugees",
              "Asylum seekers",
              "Internally Displaced Persons (IDPs)",
              "Transnational guest workers"
            ],
            "correctIndex": 2,
            "explanation": "Internally Displaced Persons (IDPs) are individuals forced to flee their homes due to armed conflict, violence, or natural disasters, but who remain WITHIN the borders of their own sovereign nation (they have not crossed an international frontier).",
            "distractorTip": "Crossed international border = Refugee; Remained within home country borders = Internally Displaced Person (IDP)."
          },
          {
            "id": "aphg2-l6-q3",
            "stem": "How do financial remittances sent by emigrant workers living abroad impact the economy of their origin country in the developing world?",
            "options": [
              "They cause immediate hyperinflation that collapses commercial banks.",
              "They constitute an illegal financial transaction prohibited by the World Bank.",
              "They provide vital foreign exchange and household income that funds education, healthcare, and local housing construction, often exceeding foreign aid.",
              "They increase brain drain by forcing recipient families to emigrate."
            ],
            "correctIndex": 2,
            "explanation": "Remittances are money transfers sent by diaspora migrants back to families in their country of origin. For many developing nations (e.g. Philippines, El Salvador), remittances form a major percentage of GDP, injecting cash directly into local family welfare.",
            "distractorTip": "Remittances are funds sent home by migrant workers; they provide crucial household income and foreign currency reserves."
          }
        ]
      },
      {
        "id": 207,
        "unitIndex": 2,
        "levelNumber": 7,
        "uniqueKey": "aphg-u2-l7",
        "topicNumber": "Unit 2 Boss",
        "name": "Apex Demography Crucible",
        "subtitle": "Comprehensive demographic synthesis and policy analysis",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "hg2-l7-q1",
            "stem": "Country Z has a Total Fertility Rate of 1.3, an elderly dependency ratio of 45%, and an annual negative natural population growth of -0.4%. Its government chooses not to increase immigration. What major economic challenge will Country Z face in the coming two decades?",
            "options": [
              "A drastic shortage of elementary school classrooms and maternal hospitals.",
              "Severe overpopulation and mass starvation predicted by Malthusian theory.",
              "A shrinking domestic labor tax base struggling to fund soaring public pensions and geriatric healthcare costs.",
              "Rapid rural-to-urban hyper-urbanization in squatter settlements."
            ],
            "correctIndex": 2,
            "explanation": "With a TFR of 1.3 (well below replacement 2.1) and high elderly dependency, the workforce shrinks while retirees swell. Without working-age immigrants, taxes collected from workers drop while spending on pensions and healthcare balloons (the classic Stage 5 dilemma facing Japan and Italy).",
            "distractorTip": "Low TFR creates labor deficits, NOT overpopulation."
          },
          {
            "id": "aphg2-l7-q2",
            "stem": "Which of the following government public policies is an example of a pro-natalist population policy designed to boost birth rates?",
            "options": [
              "Offering subsidized childcare, extended paid parental leave, and generous cash child allowances per newborn.",
              "Distributing free contraception and family-planning education across rural clinics.",
              "Enacting legal limits on family size, such as a one-child restriction.",
              "Raising the legal age of marriage to 25."
            ],
            "correctIndex": 0,
            "explanation": "Pro-natalist policies encourage childbearing to combat aging populations and declining workforces (common in Stage 5 countries like Japan, South Korea, and France) through financial incentives, subsidized parental leave, and baby bonuses.",
            "distractorTip": "Pro-natalist = encourage births (tax breaks, paid leave); Anti-natalist = discourage births (One-Child Policy, free birth control)."
          },
          {
            "id": "aphg2-l7-q3",
            "stem": "Why do highly educated professional workers who leave developing nations to work in North America or Western Europe contribute to 'brain drain'?",
            "options": [
              "Their home countries lose vital human capital, medical personnel, and engineers, hindering domestic economic and technological development.",
              "They cause rapid demographic surges in birth rates in their destination countries.",
              "They permanently eliminate remittances to their origin communities.",
              "They reduce literacy rates in Western host nations."
            ],
            "correctIndex": 0,
            "explanation": "Brain drain is the large-scale emigration of talented, highly educated individuals (physicians, software engineers, scientists) from developing countries to wealthier nations, depriving the source nation of essential skills needed to build domestic infrastructure.",
            "distractorTip": "Brain drain = loss of skilled professionals from developing countries to wealthier developed nations."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Unit 3: Cultural Patterns & Processes",
    "shortTitle": "Unit 3: Culture",
    "description": "Diffusion mechanisms, cultural landscape, language families, universalizing vs ethnic religions, and assimilation",
    "examWeight": "12–17% of AP Exam",
    "biome": {
      "name": "Bazaar of Dialects & Sacred Spires",
      "icon": "🏛️",
      "accentColor": "#8B5CF6",
      "secondaryColor": "#7C3AED",
      "groundGradient": "from-purple-100 via-indigo-50 to-violet-100",
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
        "uniqueKey": "aphg-u3-l1",
        "topicNumber": "Topic 3.1",
        "name": "Culture & Diffusion Types",
        "subtitle": "Expansion, Relocation, Hierarchical, Contagious, and Stimulus",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg3-l1-q1",
            "stem": "Fast-food restaurant chains offering Maharaja Mac veggie burgers in India or tofu burgers in Japan rather than beef burgers is an example of which type of diffusion?",
            "options": [
              "Hierarchical diffusion",
              "Contagious diffusion",
              "Relocation diffusion",
              "Stimulus diffusion"
            ],
            "correctIndex": 3,
            "explanation": "Stimulus diffusion occurs when an underlying fundamental idea or innovation spreads to a new culture, but is modified or adapted to fit the local cultural norms or dietary taboos.",
            "distractorTip": "The concept (fast-food burger) diffused, but the specific form changed to respect Hindu cultural reverence for cows."
          },
          {
            "id": "hg3-l1-q2",
            "stem": "A new high-end fashion trend starts on designer runways in Paris, spreads to boutiques in New York and Tokyo, then to suburban shopping malls, and finally to rural discount stores. What diffusion pattern does this follow?",
            "options": [
              "Hierarchical diffusion",
              "Contagious diffusion",
              "Relocation diffusion",
              "Stimulus diffusion"
            ],
            "correctIndex": 0,
            "explanation": "Hierarchical diffusion spreads downward through a cascade from elite nodes of authority, wealth, or power (global fashion capitals) to secondary centers and eventually down to the broader population.",
            "distractorTip": "Hierarchical moves down a ladder of power/size; Contagious spreads person-to-person like a wave."
          },
          {
            "id": "aphg3-l1-q3",
            "stem": "When fast-food restaurants in India adopted the American fast-food drive-through model but replaced beef burgers with vegetarian McAloo Tikki patties to respect Hindu dietary customs, what type of cultural diffusion occurred?",
            "options": [
              "Contagious diffusion",
              "Relocation diffusion",
              "Hierarchical diffusion",
              "Stimulus diffusion"
            ],
            "correctIndex": 3,
            "explanation": "Stimulus diffusion occurs when an underlying fundamental idea or innovation spreads to a new culture, but is modified or adapted to fit the receiving group's cultural values or environmental constraints.",
            "distractorTip": "Stimulus diffusion: The core concept spreads, but the specific form is modified to fit local cultural norms."
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "aphg-u3-l2",
        "topicNumber": "Topic 3.2",
        "name": "Cultural Landscapes & Sequent Occupance",
        "subtitle": "Built environment, sense of place, and Carl Sauer",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "hg3-l2-q1",
            "stem": "In the historic district of New Orleans, tourists observe French street names, Spanish wrought-iron architecture, Caribbean shotgun houses, and African musical traditions. What geographical concept does this layering of cultures over time exemplify?",
            "options": [
              "Environmental determinism",
              "Sequent occupance",
              "Gentrification",
              "Cultural divergence"
            ],
            "correctIndex": 1,
            "explanation": "Sequent occupance (coined by Derwent Whittlesey) is the notion that successive societies leave their distinct cultural imprints on a place, with each contributing to the cumulative cultural landscape.",
            "distractorTip": "Sequent occupance is cultural landscape archaeology: layers of past groups visible in modern cities."
          },
          {
            "id": "hg3-l2-q2",
            "stem": "Geographer Carl Sauer defined the \"Cultural Landscape\" as:",
            "options": [
              "A digital topographic map generated exclusively by satellite GPS sensors.",
              "A wilderness region untouched by human settlement or agriculture.",
              "The visible imprint of human activity, culture, and technology on the natural physical environment.",
              "The political boundary lines drawn on international globe projections."
            ],
            "correctIndex": 2,
            "explanation": "Carl Sauer posited that the cultural landscape is fashioned from a natural landscape by a cultural group. \"Culture is the agent, the natural area is the medium, the cultural landscape is the result.\"",
            "distractorTip": "Look for built environment features: barns, churches, architectural styles, and road systems."
          },
          {
            "id": "aphg3-l2-q3",
            "stem": "In the historic neighborhood of New Orleans, Spanish colonial ironwork balconies, French street names, Afro-Caribbean Creole cuisine, and Anglo-American shotgun cottages coexist within the same urban space. Which geographical concept does this illustrate?",
            "options": [
              "Sequent occupance",
              "Environmental determinism",
              "Cultural assimilation",
              "Linguistic convergence"
            ],
            "correctIndex": 0,
            "explanation": "Sequent occupance (coined by Derwent Whittlesey) describes the notion that successive societies leave their distinct cultural imprints on a place, each layer contributing to the cumulative, palimpsest-like cultural landscape.",
            "distractorTip": "Sequent occupance = multiple historical cultures leaving visible physical architectural layers on the same landscape over time."
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "aphg-u3-l3",
        "topicNumber": "Topic 3.3",
        "name": "Language Patterns & Lingua Franca",
        "subtitle": "Indo-European tree, dialects, isoglosses & pidgin",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "hg3-l3-q1",
            "stem": "Which language family is spoken by the largest percentage of the global population, encompassing English, Spanish, Hindi, and Russian?",
            "options": [
              "Niger-Congo",
              "Sino-Tibetan",
              "Afro-Asiatic",
              "Indo-European"
            ],
            "correctIndex": 3,
            "explanation": "Indo-European is the world's largest language family, spoken by roughly 45% of humanity across Germanic, Romance, Slavic, and Indo-Iranian branches. Sino-Tibetan is second (approx 20%).",
            "distractorTip": "English and Hindi belong to the same parent language family (Indo-European)!"
          },
          {
            "id": "hg3-l3-q2",
            "stem": "In maritime East Africa, traders from diverse ethnic backgrounds speaking Arabic, Persian, Hindi, and various Bantu languages communicated using Swahili. In this context, Swahili functioned as what?",
            "options": [
              "A lingua franca",
              "An isolated language",
              "An official state dialect",
              "An endangered language"
            ],
            "correctIndex": 0,
            "explanation": "A lingua franca is a mutually understood language utilized for trade and international communication between groups that speak different native mother tongues (e.g., Swahili in East Africa, English globally).",
            "distractorTip": "A lingua franca allows commerce across language boundaries."
          },
          {
            "id": "aphg3-l3-q3",
            "stem": "Why has English become the preeminent global 'lingua franca' in international aviation, scientific academia, and digital commerce?",
            "options": [
              "English is the official native language spoken by a mathematical majority of the world's population.",
              "English has the simplest grammar of all Indo-European language families.",
              "The historical legacy of British imperial colonialism combined with 20th-century American economic, technological, and cultural hegemony.",
              "The United Nations legally prohibited the use of other languages in trade."
            ],
            "correctIndex": 2,
            "explanation": "A lingua franca is a mutually understood language used for trade and communication between people who speak different native tongues. English achieved global lingua franca status through British imperial expansion and subsequent American dominance in finance, internet technology, and popular culture.",
            "distractorTip": "Lingua franca = a common language used for commerce between speakers of different native languages."
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "aphg-u3-l4",
        "topicNumber": "Topic 3.4",
        "name": "Religions: Universalizing vs. Ethnic",
        "subtitle": "Global proselytizing faiths vs culture-specific traditions",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "hg3-l4-q1",
            "stem": "Which pairing correctly classifies a Universalizing Religion with an Ethnic Religion?",
            "options": [
              "Universalizing: Judaism; Ethnic: Christianity",
              "Universalizing: Islam; Ethnic: Hinduism",
              "Universalizing: Shinto; Ethnic: Buddhism",
              "Universalizing: Hinduism; Ethnic: Islam"
            ],
            "correctIndex": 1,
            "explanation": "Universalizing religions (Christianity, Islam, Buddhism, Sikhism) actively seek converts and view their truths as globally applicable. Ethnic religions (Hinduism, Judaism, Shinto) appeal primarily to one specific cultural or ethnic group in a localized hearth.",
            "distractorTip": "Hinduism is the largest Ethnic religion in the world; Islam is universalizing."
          },
          {
            "id": "hg3-l4-q2",
            "stem": "Pilgrimage to sacred sites is central to many world religions. Why is the Hajj to Mecca considered a pilgrimage within a Universalizing Religion, while bathing in the Ganges River at Varanasi is tied to an Ethnic Religion?",
            "options": [
              "Hinduism has no sacred physical sites or rivers.",
              "Only people born in Saudi Arabia are permitted to perform the Hajj.",
              "Mecca unites Muslims of all global ethnicities in a universal religious duty, whereas bathing in the Ganges is deeply tied to the specific sacred physical geography and cultural traditions of Hinduism in India.",
              "Buddhists and Christians are required to perform the pilgrimage to Varanasi."
            ],
            "correctIndex": 2,
            "explanation": "Universalizing religions have sacred sites associated with the founder's life (e.g. Mecca, Jerusalem, Bodh Gaya) that draw international believers regardless of national origin. Ethnic religions hold places sacred because of physical geographic features (rivers, mountains) embedded in that culture's ancestral homeland.",
            "distractorTip": "Ethnic religions revere physical geography (mountains, holy rivers); universalizing religions revere holy places tied to the founder’s life."
          },
          {
            "id": "aphg3-l4-q3",
            "stem": "What is the primary spatial and doctrinal distinction between a universalizing religion and an ethnic religion?",
            "options": [
              "Universalizing religions actively seek converts and claim global applicability regardless of ethnicity, whereas ethnic religions are tied to a specific culture, ancestry, and geographic hearth.",
              "Universalizing religions worship multiple deities, while ethnic religions are strictly monotheistic.",
              "Universalizing religions diffuse exclusively through relocation diffusion.",
              "Ethnic religions possess global holy sites visited by millions of foreign pilgrims."
            ],
            "correctIndex": 0,
            "explanation": "Universalizing religions (Christianity, Islam, Buddhism) actively seek converts through missionary work, claim universal truth, and diffuse widely. Ethnic religions (Hinduism, Judaism) do not actively seek converts; membership is tied to birth, culture, and specific sacred geography.",
            "distractorTip": "Universalizing = seeks converts, global appeal (Christianity, Islam, Buddhism); Ethnic = born into, tied to location/ethnicity (Hinduism, Judaism)."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "aphg-u3-l5",
        "topicNumber": "Topic 3.5",
        "name": "Acculturation, Assimilation & Syncretism",
        "subtitle": "Cultural integration, loss of identity, and new blends",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "hg3-l5-q1",
            "stem": "When Caribbean enslaved peoples combined Catholic veneration of saints with Yoruba spiritual traditions to create Santería, which cultural process took place?",
            "options": [
              "Cultural divergence",
              "Complete assimilation",
              "Ethnocentrism",
              "Syncretism"
            ],
            "correctIndex": 3,
            "explanation": "Syncretism is the blending of traits from two or more distinct cultures to create a completely new cultural practice, faith, or tradition.",
            "distractorTip": "Assimilation erases the original culture; Syncretism blends them into something new."
          },
          {
            "id": "hg3-l5-q2",
            "stem": "An immigrant family from South Korea settles in Toronto, Canada. Over time, the parents learn English and adopt Canadian workplace practices while continuing to cook traditional Korean cuisine, celebrate Chuseok, and speak Korean at home. This family is exhibiting:",
            "options": [
              "Acculturation (adopting elements of the dominant culture while retaining original cultural heritage)",
              "Assimilation (complete loss of native cultural identity)",
              "Nativism",
              "Sequent occupance"
            ],
            "correctIndex": 0,
            "explanation": "Acculturation is the adoption of certain cultural and social characteristics of one group by another (e.g. language, clothing for school/work) while maintaining distinct cultural traditions, beliefs, and foods at home.",
            "distractorTip": "Acculturation = adopting parts of a new culture while KEEPING your own. Assimilation = completely losing your original culture."
          },
          {
            "id": "aphg3-l5-q3",
            "stem": "The fusion of indigenous Mesoamerican beliefs with Roman Catholic traditions in Mexico, exemplified by the widespread veneration of Our Lady of Guadalupe and the Day of the Dead, is an example of:",
            "options": [
              "Total cultural assimilation",
              "Cultural syncretism",
              "Ethnocentrism",
              "Linguistic divergence"
            ],
            "correctIndex": 1,
            "explanation": "Cultural syncretism is the blending and synthesis of traits from two or more distinct cultural traditions to produce a unique, novel cultural practice or belief system.",
            "distractorTip": "Syncretism = blending two cultures into a NEW form; Assimilation = minority group completely absorbs and loses original identity."
          }
        ]
      },
      {
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "aphg-u3-l6",
        "topicNumber": "Unit 3 Boss",
        "name": "Apex Cultural Crucible",
        "subtitle": "Sacred geography, linguistic landscapes, and diffusion synthesis",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "hg3-l6-q1",
            "stem": "In Quebec, provincial laws mandate that French must be the predominant language on commercial outdoor signs and in workplaces. What geographic objective does this language policy serve?",
            "options": [
              "Completely eliminating the English language from Canada.",
              "Preserving French linguistic cultural identity against the assimilative pressure of the surrounding Anglophone North American cultural landscape.",
              "Promoting international lingua franca commerce.",
              "Implementing stimulus diffusion of American pop culture."
            ],
            "correctIndex": 1,
            "explanation": "Quebec’s Bill 101 and language charters act as centripetal cultural buffers designed to protect the French language from being assimilated by the surrounding English-speaking majority in Canada and the US.",
            "distractorTip": "Language laws in bilingual regions act as cultural preservation shields against dominant language assimilation."
          },
          {
            "id": "aphg3-l6-q2",
            "stem": "Which of the following cultural landscape features is most characteristic of traditional Islamic urban morphology in North Africa and the Middle East?",
            "options": [
              "Gridiron street patterns oriented strictly around a central rail depot.",
              "A prominent central Friday mosque (Jami) with soaring minarets, surrounded by covered bazaars (suqs) and residential quarters featuring inward-facing privacy courtyards.",
              "Broad, tree-lined suburban boulevards with deep front lawns.",
              "Monumental Catholic cathedral plazas flanked by administrative palaces."
            ],
            "correctIndex": 1,
            "explanation": "Traditional Islamic cities feature a central congregational mosque and adjacent covered marketplace (suq), with winding, narrow residential lanes designed for pedestrian shade and high courtyard walls ensuring family visual privacy.",
            "distractorTip": "Islamic city cultural landscape: Central mosque, adjacent bazaar/suq, and privacy-oriented residential courtyards."
          },
          {
            "id": "aphg3-l6-q3",
            "stem": "How does the rapid global spread of uniform popular culture (e.g. American fast-food chains, global clothing brands, standardized glass skyscraper architecture) affect local folk cultures?",
            "options": [
              "It enhances the uniqueness and isolation of remote tribal dialects.",
              "It leads to 'placelessness' (cultural homogenization), where diverse local traditions are erased in favor of standardized corporate landscapes.",
              "It causes complete reversal of international migration flows.",
              "It increases regional linguistic diversity."
            ],
            "correctIndex": 1,
            "explanation": "Geographer Edward Relph termed 'placelessness' the loss of uniqueness in the cultural landscape, resulting from global popular culture diffusing identical suburban malls, fast-food franchises, and corporate architecture across all continents.",
            "distractorTip": "Placelessness = loss of unique local cultural identity due to the homogenization of popular culture."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Unit 4: Political Patterns & Processes",
    "shortTitle": "Unit 4: Political",
    "description": "Sovereignty, nation-states, stateless nations, boundaries, UNCLOS maritime zones, gerrymandering, federal vs unitary systems, devolution, and supranationalism",
    "examWeight": "12–17% of AP Exam",
    "biome": {
      "name": "Citadel of Sovereignty & Maritime Straits",
      "icon": "🏛️",
      "accentColor": "#EF4444",
      "secondaryColor": "#DC2626",
      "groundGradient": "from-red-100 via-rose-50 to-amber-100",
      "cardBorder": "border-red-500",
      "trailColor": "#ef4444",
      "nodeRing": "ring-red-400/40",
      "skyTint": "from-rose-50 to-red-50/30"
    },
    "levels": [
      {
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "aphg-u4-l1",
        "topicNumber": "Topic 4.1 & 4.2",
        "name": "Nations, States & Sovereignty",
        "subtitle": "Stateless nations, nation-states, multinational states & autonomy",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg4-l1-q1",
            "stem": "The Kurds are an ethnic group of over 30 million people spanning Turkey, Iraq, Iran, and Syria who share a distinct cultural identity but lack their own recognized sovereign territory. In political geography, the Kurds are best classified as a:",
            "options": [
              "Autonomous federal republic",
              "Nation-state",
              "Stateless nation",
              "Sovereign microstate"
            ],
            "correctIndex": 2,
            "explanation": "A stateless nation is a cultural/ethnic group possessing a national identity and shared heritage that lacks its own independent sovereign state (e.g., Kurds, Palestinians, Basques, and Rohingya).",
            "distractorTip": "Remember the distinction: A \"Nation\" is a cultural group of people; a \"State\" is a sovereign political territory. When a nation lacks its own state, it is a stateless nation."
          },
          {
            "id": "hg4-l1-q2",
            "stem": "Which country is the classic textbook example of a Nation-State where political boundaries closely align with a single dominant cultural identity?",
            "options": [
              "Nigeria (encompassing over 250 distinct ethnic and linguistic groups)",
              "Canada (composed of English-speaking Canadians, French Québécois, and First Nations)",
              "Belgium (divided between Flemish Dutch speakers and Walloon French speakers)",
              "Japan (over 98% of the population is ethnically Japanese within sovereign boundaries)"
            ],
            "correctIndex": 3,
            "explanation": "A nation-state exists when the political borders of a state coincide almost perfectly with the geographic distribution of a single ethnic/cultural group. Japan and Iceland are prime examples due to extreme cultural homogeneity and geographic isolation.",
            "distractorTip": "Canada, Belgium, and Nigeria are multinational states containing multiple distinct historical nations within one political entity."
          },
          {
            "id": "aphg4-l1-q3",
            "stem": "The Kurdish people constitute a distinct ethnic and linguistic group of over 30 million people concentrated across Turkey, Iraq, Iran, and Syria without possessing their own independent sovereign territory. The Kurds are best classified as a:",
            "options": [
              "Multinational state",
              "City-state",
              "Stateless nation",
              "Autonomous republic"
            ],
            "correctIndex": 2,
            "explanation": "A stateless nation is a culturally cohesive group of people who share a common language, history, and national identity, but do not possess sovereign political control over an internationally recognized independent state of their own (e.g. Kurds, Palestinians, Basques).",
            "distractorTip": "Stateless nation = nation without its own sovereign state (Kurds, Palestinians, Rohingya)."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "aphg-u4-l2",
        "topicNumber": "Topic 4.3",
        "name": "Shatterbelts & Strategic Maritime Chokepoints",
        "subtitle": "Geopolitical friction, buffer zones, and maritime trade straits",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg4-l2-q1",
            "stem": "The Strait of Malacca, connecting the Indian Ocean to the South China Sea, is considered one of the world’s most critical geopolitical \"chokepoints\" because:",
            "options": [
              "A narrow waterway through which massive volumes of global petroleum and container shipments must pass, making it vulnerable to disruption, piracy, or military blockade.",
              "It is the only oceanic passage between North America and Europe.",
              "International maritime law forbids commercial cargo ships from navigating its waters.",
              "It is controlled entirely by a single landlocked central Asian nation."
            ],
            "correctIndex": 0,
            "explanation": "A chokepoint is a narrow strategic geographical feature (such as a strait or canal) that channels vital global trade. Over 25% of all global seaborne oil passes through the narrow Strait of Malacca between Malaysia, Indonesia, and Singapore.",
            "distractorTip": "Key AP chokepoints to memorize: Strait of Malacca, Strait of Hormuz (Persian Gulf oil), Bab-el-Mandeb (Red Sea), Suez Canal, and Panama Canal."
          },
          {
            "id": "hg4-l2-q2",
            "stem": "Historically, the Balkan Peninsula and Eastern Europe were termed \"shatterbelts\" because:",
            "options": [
              "They were completely depopulated by volcanic eruptions.",
              "They were unstable regions caught between competing external superpower spheres of influence and fractured by internal ethno-religious conflicts.",
              "Their political boundaries were determined exclusively by corporate agricultural monopolies.",
              "They were maritime island chains with no sovereign landmasses."
            ],
            "correctIndex": 1,
            "explanation": "A shatterbelt is a geographic region caught between stronger, colliding external political or cultural forces, under persistent stress and subject to repeated political fragmentation and conflict (e.g., Eastern Europe during the Cold War, the Middle East).",
            "distractorTip": "A buffer state is an independent country between two rival powers; a shatterbelt is an entire volatile region under external stress."
          },
          {
            "id": "aphg4-l2-q3",
            "stem": "The Strait of Malacca, a narrow 500-mile waterway between Indonesia, Malaysia, and Singapore that carries over 25% of all global maritime oil shipments, is an example of a:",
            "options": [
              "Landlocked enclave",
              "Strategic maritime chokepoint",
              "Demilitarized buffer zone",
              "Supranational trading union"
            ],
            "correctIndex": 1,
            "explanation": "A chokepoint is a strategic narrow passage (strait or canal) that can be easily blocked or disrupted, posing immense geopolitical and economic vulnerability to international trade (e.g. Strait of Malacca, Strait of Hormuz, Bab el-Mandeb, Suez Canal).",
            "distractorTip": "Maritime chokepoints: Narrow critical shipping passages (Malacca, Hormuz, Suez, Panama) vital for global trade."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "aphg-u4-l3",
        "topicNumber": "Topic 4.4 & 4.5",
        "name": "Political Boundaries & UNCLOS Maritime Law",
        "subtitle": "Superimposed, antecedent, relic borders and the 200 NM EEZ",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg4-l3-q1",
            "stem": "The modern political borders of Sub-Saharan Africa, drawn by European colonial powers during the 1884–1885 Berlin Conference without regard for indigenous ethnic, linguistic, or cultural territories, are classified as:",
            "options": [
              "Relic boundaries",
              "Antecedent boundaries",
              "Superimposed boundaries",
              "Subsequent boundaries"
            ],
            "correctIndex": 2,
            "explanation": "A superimposed boundary is forcibly drawn across an existing cultural landscape by an outside conquering power, frequently dividing unified ethnic groups or forcing historical rivals into the same state (as seen throughout post-colonial Africa).",
            "distractorTip": "Antecedent = drawn BEFORE dense human settlement (e.g., US-Canada 49th parallel); Relic = no longer functions but remains on the cultural landscape (e.g., Berlin Wall); Subsequent = drawn after cultural landscape develops."
          },
          {
            "id": "hg4-l3-q2",
            "stem": "Under the United Nations Convention on the Law of the Sea (UNCLOS), an Exclusive Economic Zone (EEZ) grants a coastal sovereign state:",
            "options": [
              "Unrestricted military jurisdiction over foreign vessels across all international oceans.",
              "Complete sovereignty to prohibit foreign commercial ships from sailing through the zone.",
              "Full legal control over all land territory up to 200 miles inland from the beach.",
              "Exclusive economic rights to explore and exploit all marine living resources (fishing) and seabed minerals up to 200 nautical miles from its coastline."
            ],
            "correctIndex": 3,
            "explanation": "UNCLOS establishes 3 major coastal zones: Territorial Waters (12 NM - full sovereignty), Contiguous Zone (24 NM - customs/immigration enforcement), and the EEZ (200 NM - exclusive rights over fish, oil, gas, and seabed minerals, while allowing freedom of foreign navigation).",
            "distractorTip": "Don't confuse Territorial Waters (12 NM, full sovereignty) with EEZ (200 NM, economic resources only, foreign ships have innocent passage)."
          },
          {
            "id": "aphg4-l3-q3",
            "stem": "Under the United Nations Convention on the Law of the Sea (UNCLOS), what sovereign rights does a coastal nation possess within its 200-nautical-mile Exclusive Economic Zone (EEZ)?",
            "options": [
              "Full sovereignty to prohibit all foreign commercial cargo ships from passing through.",
              "Sole authority to board and seize foreign military vessels without warning.",
              "Exclusive legal rights to explore, harvest, and manage all natural living and mineral resources (such as offshore petroleum and fish) in the water and seabed.",
              "The right to declare war on any vessel that crosses into international airspace."
            ],
            "correctIndex": 2,
            "explanation": "Under UNCLOS, a coastal state's Exclusive Economic Zone (EEZ) extends up to 200 nautical miles from its baseline. Within this zone, the state has sole sovereign economic rights to exploit, conserve, and manage all natural resources (fisheries, seabed oil/gas), though foreign ships retain innocent passage rights.",
            "distractorTip": "UNCLOS Zones: 0-12 nm = Territorial Waters (full sovereign control); 12-24 nm = Contiguous Zone (customs/immigration); 0-200 nm = EEZ (exclusive economic/resource rights)."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "aphg-u4-l4",
        "topicNumber": "Topic 4.6 & 4.7",
        "name": "Internal Boundaries & Forms of Governance",
        "subtitle": "Gerrymandering (packing/cracking) vs Unitary and Federal systems",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg4-l4-q1",
            "stem": "In redistricting, \"cracking\" is a partisan gerrymandering strategy specifically designed to:",
            "options": [
              "Disperse opposing party voters across multiple voting districts so they remain a permanent minority in every district.",
              "Concentrate all opposing party voters into a single district so they win that seat with 95% of the vote.",
              "Abolish all legislative districts and switch to a nationwide popular vote.",
              "Ensure equal proportional representation for third-party candidates."
            ],
            "correctIndex": 0,
            "explanation": "Cracking splits and dilutes opposition voters among several districts to prevent them from constituting a majority in any single district. Packing, by contrast, concentrates them into one or two safe districts to minimize their impact elsewhere.",
            "distractorTip": "Packing = stuffing all opposition into 1 super-concentrated district; Cracking = fragmenting opposition into minorities across many districts."
          },
          {
            "id": "hg4-l4-q2",
            "stem": "Why do geographically vast or ethnically diverse countries like the United States, Canada, India, and Nigeria utilize a Federal system of governance rather than a Unitary system?",
            "options": [
              "Federal systems eliminate the need for national armed forces and central taxation.",
              "Federalism allocates constitutionally protected political powers to regional sub-units (states/provinces), accommodating localized ethnic, legal, and regional diversity.",
              "Unitary systems are legally prohibited under the United Nations Charter.",
              "Federal systems guarantee that a single central dictator commands all local police and court systems."
            ],
            "correctIndex": 1,
            "explanation": "A federal system divides power between central and provincial/state governments, allowing regional authorities to govern local affairs. This helps prevent rebellion and accommodates regional diversity in large, multicultural nations.",
            "distractorTip": "Unitary states (like France and Japan) concentrate nearly all power in the national capital, which works best in compact, culturally cohesive states."
          },
          {
            "id": "aphg4-l4-q3",
            "stem": "When state politicians redraw electoral district boundaries to concentrate opposition voters into as few districts as possible, thereby diluting their voting influence across all remaining districts, which gerrymandering technique is being employed?",
            "options": [
              "Cracking",
              "Packing",
              "Proportional devolution",
              "Malapportionment"
            ],
            "correctIndex": 1,
            "explanation": "Gerrymandering uses two primary techniques: 'Packing' concentrates opposition party voters into a few districts to waste their excess votes, while 'Cracking' splits opposition voters across multiple districts to keep them as a permanent minority.",
            "distractorTip": "Packing = grouping opposition voters into a few overwhelming districts; Cracking = dispersing opposition voters so they never win a majority."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "aphg-u4-l5",
        "topicNumber": "Topic 4.8, 4.9 & 4.10",
        "name": "Devolution, Supranationalism & Centrifugal Forces",
        "subtitle": "Subnational autonomy, the European Union, and state fragmentation",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg4-l5-q1",
            "stem": "The establishment of regional parliaments in Scotland and Wales within the United Kingdom is an example of which political geographic process?",
            "options": [
              "Supranationalism",
              "Irredentism",
              "Devolution",
              "Annexation"
            ],
            "correctIndex": 2,
            "explanation": "Devolution is the transfer or delegation of political authority and decision-making power from a central sovereign government to regional subnational administrations.",
            "distractorTip": "Devolution transfers power DOWNWARD from national to regional governments; Supranationalism transfers power UPWARD to multi-state organizations (like the EU)."
          },
          {
            "id": "hg4-l5-q2",
            "stem": "When member states join a supranational organization such as the European Union (EU), what political trade-off must sovereign national governments accept?",
            "options": [
              "They are legally prohibited from trading with nations outside the supranational bloc.",
              "They must dissolve their national flags, distinct languages, and historical constitutions.",
              "They are forced to merge their domestic populations into a single unified ethnic identity.",
              "They surrender a degree of individual national sovereignty in exchange for collective economic integration, common trade regulations, and open borders."
            ],
            "correctIndex": 3,
            "explanation": "Supranationalism involves three or more states forming an alliance for mutual benefit (e.g., EU, ASEAN, NATO). Member nations willingly cede some individual sovereign authority (such as currency control or border checkpoints) to adhere to common policies.",
            "distractorTip": "Brexit was driven by British voters wishing to reclaim national sovereignty from EU regulations and immigration mandates."
          },
          {
            "id": "aphg4-l5-q3",
            "stem": "Which of the following events represents a centrifugal force that promotes the devolution or fragmentation of a sovereign state?",
            "options": [
              "Strong regional ethnic nationalism, deep linguistic divisions, and sharp economic inequality between provinces.",
              "A shared national language and a highly centralized state media network.",
              "Hosting the Olympic Games and experiencing a surge in national patriotism.",
              "A robust national interstate highway system connecting all peripheral cities."
            ],
            "correctIndex": 0,
            "explanation": "Centrifugal forces pull a country apart and threaten national unity (ethnic conflict, linguistic divides, economic inequality, geographic isolation). In contrast, centripetal forces bind a nation together (patriotism, shared language, strong infrastructure).",
            "distractorTip": "Centrifugal = forces that pull apart (fleeing the center); Centripetal = forces that bind together (petals of a flower)."
          }
        ]
      },
      {
        "id": 406,
        "unitIndex": 4,
        "levelNumber": 6,
        "uniqueKey": "aphg-u4-l6",
        "topicNumber": "Unit 4 Boss",
        "name": "Apex Sovereign Citadel",
        "subtitle": "Maritime territoriality, EEZ disputes, and geopolitical synthesis",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "hg4-l6-q1",
            "stem": "In the South China Sea, multiple sovereign states contest overlapping 200-nautical-mile Exclusive Economic Zones (EEZs) around the Spratly and Paracel Islands. China has constructed artificial military islands to reinforce its historic \"Nine-Dash Line\" claim. Which international legal framework is central to evaluating these conflicting maritime claims?",
            "options": [
              "The United Nations Convention on the Law of the Sea (UNCLOS), which stipulates that sovereign EEZs must be projected from recognized natural land territory, not artificially constructed reefs.",
              "The Warsaw Pact Maritime Defense Accord of 1955.",
              "The Kyoto Protocol for oceanic greenhouse gas emissions.",
              "The Treaty of Tordesillas regulating imperial oceanic division."
            ],
            "correctIndex": 0,
            "explanation": "Under UNCLOS, 200 NM EEZ rights can only be claimed from natural landmasses capable of sustaining human habitation. In 2016, the Permanent Court of Arbitration ruled under UNCLOS that low-tide reefs and submerged shoals modified by artificial dredging do not generate sovereign EEZ rights.",
            "distractorTip": "UNCLOS is the governing international treaty for all maritime boundary disputes on the AP exam."
          },
          {
            "id": "aphg4-l6-q2",
            "stem": "Why did member nations of the European Union (EU) agree to adopt the Euro currency and abolish internal border controls under the Schengen Agreement, despite having to cede portions of their national sovereignty?",
            "options": [
              "To establish a unified global military under the United Nations command.",
              "To eliminate all domestic parliamentary elections.",
              "To foster frictionless international trade, labor mobility, and regional economic competitiveness on the global stage as a supranational organization.",
              "To comply with compulsory NATO nuclear defense protocols."
            ],
            "correctIndex": 2,
            "explanation": "Supranational organizations (EU, ASEAN, NAFTA/USMCA) involve three or more nations that pool authority and surrender certain elements of sovereignty to achieve shared economic, political, or security advantages.",
            "distractorTip": "Supranationalism requires member states to surrender some sovereignty in exchange for collective economic or security strength."
          },
          {
            "id": "aphg4-l6-q3",
            "stem": "Which type of political boundary is drawn by outside colonial powers across an area without regard for pre-existing cultural, ethnic, or tribal divisions, as seen in the 1884 Berlin Conference partitioning of Africa?",
            "options": [
              "Antecedent boundary",
              "Subsequent boundary",
              "Relic boundary",
              "Superimposed boundary"
            ],
            "correctIndex": 3,
            "explanation": "A superimposed boundary is forcefully imposed on an indigenous cultural landscape by external invading or colonial powers without respecting existing ethnic or linguistic realities, frequently causing persistent border disputes and civil strife.",
            "distractorTip": "Superimposed = drawn by outsiders ignoring ethnic lines (Africa colonial borders); Antecedent = drawn before heavy settlement (US-Canada 49th parallel); Relic = no longer functions but still visible (Berlin Wall)."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Unit 5: Agriculture & Rural Land-Use",
    "shortTitle": "Unit 5: Agriculture",
    "description": "Von Thünen spatial model, Green Revolution, subsistence vs commercial farming, agricultural hearths, rural survey systems, and sustainable food systems",
    "examWeight": "12–17% of AP Exam",
    "biome": {
      "name": "Von Thünen Concentric Plains & Green Fields",
      "icon": "🌾",
      "accentColor": "#16A34A",
      "secondaryColor": "#15803D",
      "groundGradient": "from-green-100 via-emerald-50 to-lime-100",
      "cardBorder": "border-green-500",
      "trailColor": "#16a34a",
      "nodeRing": "ring-green-400/40",
      "skyTint": "from-green-50 to-lime-50/30"
    },
    "levels": [
      {
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "aphg-u5-l1",
        "topicNumber": "Topic 5.1 & 5.2",
        "name": "Agricultural Hearths & Columbian Exchange",
        "subtitle": "First agricultural revolution, domestication hearths, and global crop diffusion",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg5-l1-q1",
            "stem": "Which primary crop hearth was responsible for the initial domestication of maize (corn), beans, and squash thousands of years ago?",
            "options": [
              "The Fertile Crescent (Southwest Asia)",
              "Mesoamerica and Central America",
              "The Indus River Valley",
              "Sub-Saharan Africa"
            ],
            "correctIndex": 1,
            "explanation": "Mesoamerica was the independent agricultural hearth where indigenous populations domesticated maize, beans, squash, and peppers. Southwest Asia (Fertile Crescent) was the hearth of wheat, barley, sheep, and goats.",
            "distractorTip": "Know primary hearths: Fertile Crescent = Wheat/Barley/Cattle; SE Asia = Taro/Bananas; East Asia = Rice/Soybeans; Mesoamerica = Maize/Beans."
          },
          {
            "id": "hg5-l1-q2",
            "stem": "Following 1492, the Columbian Exchange diffused which staple New World crop to Europe, where it dramatically boosted calorie yields per acre and sustained rapid population growth?",
            "options": [
              "Sugar Cane",
              "Wheat",
              "The Potato",
              "Coffee"
            ],
            "correctIndex": 2,
            "explanation": "The potato was native to the Andean highlands of South America. Introduced to Europe through the Columbian Exchange, its high caloric density, ease of growth in cool damp soils, and resistance to crop destruction fueled explosive European demographic growth.",
            "distractorTip": "Wheat, sugar cane, horses, and smallpox moved from Old World to New World; potatoes, maize, tomatoes, and tobacco moved from New World to Old World."
          },
          {
            "id": "aphg5-l1-q3",
            "stem": "Which agricultural hearth was the original center for the early domestication of maize (corn), beans, squash, and turkeys?",
            "options": [
              "The Fertile Crescent",
              "Southeast Asia",
              "Mesoamerica",
              "The Indus River Valley"
            ],
            "correctIndex": 2,
            "explanation": "Mesoamerica (modern southern Mexico and Central America) was the primary agricultural hearth for maize, squash, various beans, and cotton, which subsequently diffused across the Americas and globally via the Columbian Exchange.",
            "distractorTip": "Mesoamerica = Corn, beans, squash; Fertile Crescent = Wheat, barley, sheep, goats; East Asia = Rice, soybeans."
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "aphg-u5-l2",
        "topicNumber": "Topic 5.3 & 5.4",
        "name": "Second Agricultural Revolution & Rural Survey Systems",
        "subtitle": "Enclosure Acts, crop rotation, and cadastral survey landscapes",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg5-l2-q1",
            "stem": "How did the Second Agricultural Revolution in Great Britain (1700s–1800s) directly catalyze the Industrial Revolution?",
            "options": [
              "It banned the export of cereal grains across European waterways.",
              "It eliminated all forms of commercial livestock ranching.",
              "It forced all factory workers to return to subsistence peasant farming.",
              "Mechanized tools (like the seed drill) and the Enclosure Acts drastically increased crop yields while displacing peasant farmers, creating a large urban labor pool for emerging factories."
            ],
            "correctIndex": 3,
            "explanation": "The Second Agricultural Revolution introduced crop rotation (Norfolk four-course system), selective livestock breeding, and mechanization. Enclosure Acts consolidated communal pastures into private commercial farms, pushing redundant farm laborers into industrial city factories.",
            "distractorTip": "The Second Ag Revolution fed the growing cities of the Industrial Revolution and provided its factory workforce."
          },
          {
            "id": "hg5-l2-q2",
            "stem": "Which rural settlement survey pattern divides land into narrow rectangular strips extending backward from a riverbank, ensuring equal water access for all homesteads in Louisiana and Quebec?",
            "options": [
              "The French long-lot system",
              "The English metes and bounds system",
              "The US Township and Range grid system",
              "The nucleated circular village layout"
            ],
            "correctIndex": 0,
            "explanation": "The French long-lot system created narrow parcels perpendicular to navigable waterways, ensuring each landowner had frontage on the river for transportation and fertile alluvial floodplain soils.",
            "distractorTip": "Metes and bounds uses trees/rocks/streams; Township and Range uses a rigid 6-by-6 mile square grid (Land Ordinance of 1785)."
          },
          {
            "id": "aphg5-l2-q3",
            "stem": "In rural Quebec and parts of Louisiana, long narrow parcels of farmland extend perpendicularly back from riverbanks and roads. Which rural cadastral survey system created this distinct spatial layout?",
            "options": [
              "The French long-lot survey system",
              "The British metes-and-bounds system",
              "The American township-and-range rectangular grid system",
              "Communal collective ejido surveying"
            ],
            "correctIndex": 0,
            "explanation": "The French long-lot cadastral system subdivided agricultural land into narrow strips fronting a river or canal, ensuring every farming family had direct access to water transportation and fertile riverbank soil.",
            "distractorTip": "Long-lot = French river access; Metes and bounds = British landmarks/trees; Township and range = American 6x6 mile grid system."
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "aphg-u5-l3",
        "topicNumber": "Topic 5.5 & 5.6",
        "name": "The Green Revolution (Third Agricultural Revolution)",
        "subtitle": "HYVs, Norman Borlaug, chemical inputs, and environmental trade-offs",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg5-l3-q1",
            "stem": "What was the primary technological achievement of the Third Agricultural (Green) Revolution spearheaded by Norman Borlaug in the 1960s?",
            "options": [
              "The invention of the horse collar and three-field crop rotation.",
              "The scientific breeding of high-yielding, semi-dwarf varieties of wheat and rice paired with synthetic chemical fertilizers, pesticides, and mechanized irrigation.",
              "The global transition from commercial agribusiness back to communal hunter-gatherer foraging.",
              "The complete replacement of motorized machinery with organic draft animals."
            ],
            "correctIndex": 1,
            "explanation": "The Green Revolution used biotechnology to breed high-yielding varieties (HYVs) of dwarf wheat and rice that could support heavy seed heads without falling over, combined with synthetic nitrogen fertilizers, chemical pest control, and tube-well irrigation.",
            "distractorTip": "The Green Revolution dramatically increased food supply in Mexico, India, and the Philippines, but had limited impact in Sub-Saharan Africa due to different staple crops (sorghum, cassava, yams)."
          },
          {
            "id": "hg5-l3-q2",
            "stem": "Which environmental and socio-economic critique is commonly associated with the Green Revolution in developing countries like India?",
            "options": [
              "Rapid reforestation that converted all commercial cropland into wildlife reserves.",
              "A permanent catastrophic collapse in worldwide grain output.",
              "Groundwater aquifer depletion from tube-well pumping, chemical runoff causing aquatic eutrophication, and heavy debt burdens for small farmers unable to afford expensive seeds and fertilizers.",
              "A complete elimination of commercial fertilizer manufacturing plants worldwide."
            ],
            "correctIndex": 2,
            "explanation": "Intensive irrigation depleted the water table (e.g. in Punjab, India), synthetic runoff caused algal blooms in waterways, and high capital costs for patented seeds and chemicals concentrated land ownership in wealthy agribusinesses, marginalizing smallholder farmers.",
            "distractorTip": "AP FRQs regularly ask for both positive effects (prevented famines, boosted yields) and negative effects (chemical pollution, water depletion, smallholder debt)."
          },
          {
            "id": "aphg5-l3-q3",
            "stem": "What was a significant unintended environmental consequence of the Green Revolution in developing countries like India and Mexico during the late 20th century?",
            "options": [
              "A permanent global shortage of chemical nitrogen fertilizers.",
              "Severe soil salinization, depleted groundwater aquifers from motorized tube-well irrigation, and chemical pesticide runoff polluting river systems.",
              "The complete abandonment of hybrid dwarf seed varieties in favor of organic crops.",
              "Mass migration from urban centers back to subsistence rural farming."
            ],
            "correctIndex": 1,
            "explanation": "While the Green Revolution dramatically increased grain yields and prevented widespread famine, its heavy reliance on synthetic fertilizers, synthetic pesticides, and intensive irrigation caused severe environmental degradation: aquifer depletion, chemical runoff, and soil salinization.",
            "distractorTip": "Green Revolution positives: higher food yields, prevented famine; Negatives: environmental damage (pesticides, water depletion) and high capital costs hurting small subsistence farmers."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "aphg-u5-l4",
        "topicNumber": "Topic 5.7 & 5.8",
        "name": "Von Thünen Model & Bid-Rent Theory",
        "subtitle": "Concentric spatial zones based on perishability, land rent, and transportation costs",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg5-l4-q1",
            "stem": "In Johann Heinrich von Thünen’s agricultural land-use model (1826), why are commercial dairy farming and market gardening situated in the innermost ring closest to the central market city?",
            "options": [
              "Extensive grain farming generates higher revenue per acre than fluid milk.",
              "Dairy cows require the largest and cheapest grazing pastures.",
              "Municipal building codes legally mandate that all timber must be harvested within city limits.",
              "Fresh milk and produce are highly perishable and costly to transport rapidly without spoiling, and their high profit per acre justifies paying high land rent near the urban core."
            ],
            "correctIndex": 3,
            "explanation": "Von Thünen recognized that perishable commodities (milk, berries, green vegetables) must reach market before spoiling. Under Bid-Rent Theory, intensive horticulture yields high value per acre and can outbid other land uses for prime land near the market.",
            "distractorTip": "Ring sequence from center out: (1) Market gardening & Dairy, (2) Forest/Timber, (3) Extensive field grains, (4) Livestock ranching."
          },
          {
            "id": "hg5-l4-q2",
            "stem": "According to the Bid-Rent Theory, what happens to the price of agricultural land as distance from the central urban market increases?",
            "options": [
              "Land rent drops sharply, prompting a shift from intensive farming (high capital/labor per acre) to extensive farming (low capital/labor across large acreage).",
              "Land rent increases exponentially, forcing farmers to build vertical hydroponic greenhouses.",
              "Land prices remain completely uniform regardless of distance or transportation cost.",
              "Land can no longer be used for any agricultural purpose beyond 5 miles from the city center."
            ],
            "correctIndex": 0,
            "explanation": "Bid-Rent Theory demonstrates that land values decrease with increasing distance from the central market. Near the market, farmers must farm intensively to cover high rents; far from the market, cheap land allows extensive farming like wheat cultivation and cattle grazing.",
            "distractorTip": "Intensive agriculture = small land, high capital/labor (Ring 1). Extensive agriculture = vast land, low labor/capital per acre (Rings 3 & 4)."
          },
          {
            "id": "aphg5-l4-q3",
            "stem": "In Johann Heinrich von Thünen's classic 1826 model of agricultural land use, why is commercial dairy farming and market gardening situated in the innermost ring closest to the central urban market?",
            "options": [
              "Dairy cows require vast expanses of cheap, peripheral grazing land.",
              "Fresh milk and delicate vegetables are highly perishable and expensive to transport, and intensive farmers can afford high land rents (bid-rent) near the city.",
              "City municipal codes historically mandated cattle grazing within urban borders.",
              "Timber for firewood was prohibited near metropolitan zones."
            ],
            "correctIndex": 1,
            "explanation": "Von Thünen's model is governed by transportation costs and land rent (bid-rent theory). Milk, fruits, and vegetables spoil rapidly without refrigeration and have high transport costs per unit, so intensive market farmers locate nearest the market where land rent is highest.",
            "distractorTip": "Von Thünen Rings from center outward: (1) Market gardening & dairy (perishable/high bid-rent); (2) Forestry (heavy fuel); (3) Grains/field crops; (4) Livestock ranching (extensive/cheap land)."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "aphg-u5-l5",
        "topicNumber": "Topic 5.9 & 5.10",
        "name": "Subsistence vs. Commercial Agricultural Systems",
        "subtitle": "Shifting cultivation, pastoral nomadism, wet rice, and Mediterranean farming",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg5-l5-q1",
            "stem": "Which agricultural practice involves cutting vegetation, burning debris to enrich nutrient-poor tropical soils with ash, and rotating to a new forest plot every few years to allow natural fallow regeneration?",
            "options": [
              "Intensive subsistence wet rice farming",
              "Shifting cultivation (slash-and-burn / swidden agriculture)",
              "Commercial dairy and livestock feedlot operations",
              "Mediterranean commercial olive and citrus horticulture"
            ],
            "correctIndex": 1,
            "explanation": "Shifting cultivation (swidden/milpa) is an extensive subsistence practice in tropical rainforest biomes (Amazon, Congo Basin, Southeast Asia) where nutrient-poor soils require burning brush to provide ash fertilizer for 2-3 years of harvest before shifting.",
            "distractorTip": "Shifting cultivation is extensive subsistence; Intensive wet rice farming on terraced hillsides is intensive subsistence supporting dense Asian populations."
          },
          {
            "id": "hg5-l5-q2",
            "stem": "Pastoral nomadism is predominantly practiced in which geographic climate region?",
            "options": [
              "Temperate rainforests with year-round heavy rainfall.",
              "Humid subtropical coastal plains with rich alluvial soils.",
              "Arid and semi-arid drylands where low precipitation makes crop cultivation nearly impossible (e.g., North Africa, the Middle East, and Central Asia).",
              "Subarctic tundra regions dedicated entirely to commercial dairy production."
            ],
            "correctIndex": 2,
            "explanation": "Pastoral nomads herd domesticated grazing animals (camels, sheep, goats) across drylands where arid conditions prevent regular crop farming. They often practice transhumance—seasonal migration of herds between mountain pastures in summer and lowlands in winter.",
            "distractorTip": "Transhumance is the seasonal movement of livestock between mountain and lowland pastures."
          },
          {
            "id": "aphg5-l5-q3",
            "stem": "Which agricultural system is characterized by clearing forest plots through slash-and-burn techniques, cultivating crops for 2 to 3 years until soil nutrients deplete, and then abandoning the field for a lengthy fallow period?",
            "options": [
              "Intensive wet-rice subsistence agriculture",
              "Commercial grain farming",
              "Shifting cultivation (swidden agriculture)",
              "Mediterranean fruit and olive orchards"
            ],
            "correctIndex": 2,
            "explanation": "Shifting cultivation (swidden/slash-and-burn) is an extensive subsistence farming system practiced in tropical rainforests where farmers clear vegetation, burn debris to enrich nutrient-poor soil with ash, cultivate briefly, and then leave the land fallow for years to regenerate.",
            "distractorTip": "Shifting cultivation = extensive subsistence, tropical rainforests, slash-and-burn with long fallow periods."
          }
        ]
      },
      {
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "aphg-u5-l6",
        "topicNumber": "Topic 5.11 & 5.12",
        "name": "Modern Agribusiness, Food Deserts & Sustainability",
        "subtitle": "Vertical integration, CAFOs, urban food accessibility, and fair trade",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg5-l6-q1",
            "stem": "How does modern vertical integration in corporate agribusiness (commodity chains) differ from traditional family farming?",
            "options": [
              "Every individual farmer processes and packages all food items entirely by hand on their own homestead.",
              "Farmers trade all crops exclusively through local community barter without using currency.",
              "Governments legally prohibit food corporations from using motorized transportation or refrigeration.",
              "A single multinational corporation owns or contracts all stages of production—from patented seed genetic design, animal feedlots (CAFOs), food processing, packaging, to supermarket distribution."
            ],
            "correctIndex": 3,
            "explanation": "Vertical integration in agribusiness allows corporate giants (e.g., Tyson, Cargill) to control each link of the agricultural commodity chain, minimizing costs, maximizing scale, and reducing the independence of small contract farmers.",
            "distractorTip": "CAFO stands for Concentrated Animal Feeding Operation (factory feedlots for rapid beef/poultry fattening)."
          },
          {
            "id": "hg5-l6-q2",
            "stem": "In human geography, an urban \"food desert\" is defined as a neighborhood where residents:",
            "options": [
              "Lack convenient access to affordable, nutritious, fresh food (like supermarkets) and are primarily served by fast food outlets and convenience stores.",
              "Experience severe sandstorms that physically bury local restaurant buildings.",
              "Are legally forbidden by local municipal zoning from purchasing food during daylight hours.",
              "Rely exclusively on rooftop hydroponic gardens for all household caloric intake."
            ],
            "correctIndex": 0,
            "explanation": "Food deserts are low-income urban or rural areas where a substantial number of residents lack a car and live more than 1 mile (urban) or 10 miles (rural) from a full-service supermarket, leading to poor nutrition and higher rates of diabetes and heart disease.",
            "distractorTip": "Food deserts are common in neglected inner-city zones characterized by historical disinvestment."
          },
          {
            "id": "aphg5-l6-q3",
            "stem": "What is the defining characteristic of an urban 'food desert'?",
            "options": [
              "A metropolitan area where all restaurants serve exclusively international cuisine.",
              "An urban neighborhood where residents lack convenient physical access (within 1 mile) to affordable, nutritious fresh foods like grocery stores, often accompanied by a high density of fast-food outlets and convenience stores.",
              "A drought-stricken agricultural region surrounding an expanding desert.",
              "A downtown business district where street vendors are legally prohibited."
            ],
            "correctIndex": 1,
            "explanation": "A food desert is an urban or rural neighborhood where low-income residents lack access to fresh, healthy, affordable food (typically more than 1 mile in urban areas or 10 miles in rural areas from a supermarket), contributing to dietary health disparities.",
            "distractorTip": "Food deserts are characterized by lack of fresh produce/supermarkets and reliance on processed convenience store foods."
          }
        ]
      },
      {
        "id": 507,
        "unitIndex": 5,
        "levelNumber": 7,
        "uniqueKey": "aphg-u5-l7",
        "topicNumber": "Unit 5 Boss",
        "name": "Apex Agrarian Heartland",
        "subtitle": "Modifying Von Thünen in a globalized agro-industrial economy",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "hg5-l7-q1",
            "stem": "In the 21st century, supermarkets in North America and Western Europe stock fresh grapes, berries, and asparagus year-round, imported from Chile, Peru, and Kenya during the Northern Hemisphere winter. How does this global agricultural commodity network modify Von Thünen’s classic model?",
            "options": [
              "It proves that transportation costs are now completely zero for all agricultural products.",
              "Refrigerated container ships, cold chains, air freight, and counter-seasonal hemisphere production have expanded the spatial scale of perishable production to global proportions.",
              "It forces all Southern Hemisphere farmers to abandon commercial agriculture and adopt pastoral nomadism.",
              "It confines fresh vegetable farming exclusively to suburban rooftop greenhouses."
            ],
            "correctIndex": 1,
            "explanation": "While Von Thünen’s economic logic (Bid-Rent and transport costs) still holds, modern technological advancements (refrigerated cold chains, cargo planes, containerization) and seasonal trade have transformed local concentric rings into a dynamic, planet-wide agricultural system.",
            "distractorTip": "Modern refrigeration and high-speed transit allow perishable goods (dairy, flowers, fruits) to be grown far from markets wherever climate and labor costs are advantageous."
          },
          {
            "id": "aphg5-l7-q2",
            "stem": "In modern industrial commercial agriculture, a transnational agribusiness company that controls seed genetic patents, fertilizer manufacture, slaughterhouses, frozen food packaging, and distribution logistics is practicing:",
            "options": [
              "Extensive pastoral transhumance",
              "Horizontal market fragmentation",
              "Vertical integration in a commodity chain",
              "Boserupian fallow rotation"
            ],
            "correctIndex": 2,
            "explanation": "Vertical integration occurs when a single corporation owns and coordinates multiple successive steps along the entire agricultural commodity chain—from research and inputs (seed, feed) to processing, packaging, and retail distribution.",
            "distractorTip": "Vertical integration = ownership of multiple stages along a single agricultural commodity chain."
          },
          {
            "id": "aphg5-l7-q3",
            "stem": "Why does the Fair Trade movement certify and market commodities like coffee, cocoa, and bananas grown by smallholder farmers in developing nations?",
            "options": [
              "To guarantee that multinational agribusiness corporations capture higher retail profit margins.",
              "To enforce complete mechanization and eliminate human manual labor.",
              "To ensure small-scale producers receive fair floor prices, safe working conditions, and direct access to global markets while adhering to environmental standards.",
              "To prohibit the exportation of tropical cash crops."
            ],
            "correctIndex": 2,
            "explanation": "Fair Trade certification bypasses exploitative middlemen and provides smallholder farmers with guaranteed minimum floor prices, community development premiums, and fair labor standards, promoting sustainable development.",
            "distractorTip": "Fair trade aims to return a greater share of retail profits directly to smallholder farmers and workers in developing nations."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 6,
    "unitId": "u6",
    "title": "Unit 6: Cities & Urban Land-Use",
    "shortTitle": "Unit 6: Urban",
    "description": "Burgess Concentric Zone, Hoyt Sector, Harris-Ullman Multiple Nuclei, Central Place Theory, Latin American/African models, gentrification, redlining, and New Urbanism",
    "examWeight": "12–17% of AP Exam",
    "biome": {
      "name": "Skyline Metropolis & Concentric Rings",
      "icon": "🏙️",
      "accentColor": "#3B82F6",
      "secondaryColor": "#1D4ED8",
      "groundGradient": "from-blue-100 via-indigo-50 to-slate-100",
      "cardBorder": "border-blue-500",
      "trailColor": "#3b82f6",
      "nodeRing": "ring-blue-400/40",
      "skyTint": "from-blue-50 to-slate-50/30"
    },
    "levels": [
      {
        "id": 601,
        "unitIndex": 6,
        "levelNumber": 1,
        "uniqueKey": "aphg-u6-l1",
        "topicNumber": "Topic 6.1 & 6.2",
        "name": "Urbanization, Megacities & Edge Cities",
        "subtitle": "Metacities, suburban sprawl, boomburbs, and infrastructure strain",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg6-l1-q1",
            "stem": "A city with a total population exceeding 10 million residents is classified as a \"Megacity,\" while a metropolitan area exceeding 20 million residents (such as Tokyo, Delhi, or Shanghai) is classified as a:",
            "options": [
              "Autonomous borough",
              "Primate enclave",
              "Metacity",
              "Garden suburb"
            ],
            "correctIndex": 2,
            "explanation": "Megacities have populations over 10 million; Metacities are massive hyper-urban agglomerations with over 20 million residents. Most rapid megacity growth today occurs in developing countries across Asia, Africa, and Latin America.",
            "distractorTip": "Megacity = >10 million; Metacity = >20 million. Both experience intense infrastructure pressure (sanitation, housing, transportation)."
          },
          {
            "id": "hg6-l1-q2",
            "stem": "What distinguishes an \"Edge City\" located along a suburban highway beltway from a traditional residential bedroom suburb?",
            "options": [
              "Edge cities contain only heavy primary agricultural farms.",
              "Edge cities have zero automobile access and rely exclusively on horse-drawn carriages.",
              "Edge cities are legally forbidden from constructing commercial shopping stores.",
              "An edge city contains millions of square feet of corporate office space, shopping malls, hotels, and entertainment complexes, serving as its own economic employment node rather than just a dormitory town."
            ],
            "correctIndex": 3,
            "explanation": "Joel Garreau defined Edge Cities as suburban nodes located near major expressway junctions that contain extensive office and retail space, often possessing more jobs than residents and rivaling the historic downtown CBD.",
            "distractorTip": "Tysons Corner, Virginia (outside Washington, DC) is the classic textbook example of an Edge City."
          },
          {
            "id": "aphg6-l1-q3",
            "stem": "A sprawling suburban node featuring extensive office parks, luxury hotels, major shopping complexes, and entertainment venues situated at the intersection of outer beltway highways is known as an:",
            "options": [
              "Inner-city squatter settlement",
              "Edge city",
              "Old colonial primate core",
              "Historic central business district"
            ],
            "correctIndex": 1,
            "explanation": "Joel Garreau coined the term 'Edge City' to describe suburban downtown clusters that developed along major highway interchanges on metropolitan peripheries, possessing more retail and office space than many traditional downtowns.",
            "distractorTip": "Edge cities = suburban employment/commercial nodes located at highway interchanges outside the central city."
          }
        ]
      },
      {
        "id": 602,
        "unitIndex": 6,
        "levelNumber": 2,
        "uniqueKey": "aphg-u6-l2",
        "topicNumber": "Topic 6.3 & 6.4",
        "name": "Central Place Theory & Urban Hierarchy",
        "subtitle": "Range, threshold, hexagonal hinterlands, and the Rank-Size Rule",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg6-l2-q1",
            "stem": "In Walter Christaller’s Central Place Theory (1933), the term \"Threshold\" refers to:",
            "options": [
              "The minimum number of customers required to support a business or service profitably.",
              "The maximum distance a customer is willing to travel to obtain a good or service.",
              "The legal boundary separating a city from surrounding agricultural land.",
              "The maximum architectural height permitted for commercial skyscrapers in the CBD."
            ],
            "correctIndex": 0,
            "explanation": "Threshold is the minimum population base needed to make a service viable (low-order goods like convenience stores have low thresholds; high-order services like professional sports stadiums or cancer hospitals have high thresholds).",
            "distractorTip": "Threshold = Minimum customers needed. Range = Maximum distance customers will travel."
          },
          {
            "id": "hg6-l2-q2",
            "stem": "If a country’s urban settlement pattern conforms strictly to the Rank-Size Rule, and its largest city has a population of 6,000,000, what should be the expected population of the 3rd largest city?",
            "options": [
              "3,000,000",
              "2,000,000 (calculated as Population of Largest City divided by rank n: 6,000,000 / 3)",
              "1,000,000",
              "600,000"
            ],
            "correctIndex": 1,
            "explanation": "The Rank-Size Rule states that the nth largest city will be 1/n the size of the largest city (City 2 = 1/2 of City 1; City 3 = 1/3 of City 1: 6,000,000 / 3 = 2,000,000).",
            "distractorTip": "Contrast with a Primate City (like Paris, London, or Mexico City), which is more than twice as large as the second-largest city and dominates national economy and culture."
          },
          {
            "id": "aphg6-l2-q3",
            "stem": "According to Walter Christaller's Central Place Theory, what is the 'threshold' of a good or service?",
            "options": [
              "The maximum geographic distance a consumer is willing to travel to purchase the item.",
              "The minimum number of consumers required to support the profitable provision of that good or service in a settlement.",
              "The physical tax boundary surrounding a municipal settlement.",
              "The ratio of manufacturing employment to retail service jobs."
            ],
            "correctIndex": 1,
            "explanation": "In Central Place Theory, 'Range' is the maximum distance consumers will travel for a good; 'Threshold' is the minimum population (customer base) necessary to generate sufficient demand to keep the business profitable.",
            "distractorTip": "Threshold = minimum population needed to support a business; Range = maximum distance consumers travel to buy a good."
          }
        ]
      },
      {
        "id": 603,
        "unitIndex": 6,
        "levelNumber": 3,
        "uniqueKey": "aphg-u6-l3",
        "topicNumber": "Topic 6.5",
        "name": "Classic North American Urban Models",
        "subtitle": "Burgess Concentric, Hoyt Sector, and Harris-Ullman Multiple Nuclei",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg6-l3-q1",
            "stem": "Homer Hoyt’s Sector Model (1939) modified Burgess’s concentric rings by showing that urban residential and industrial zones expand in:",
            "options": [
              "Random scattered clusters disconnected from transportation networks.",
              "Uniform concentric circles driven entirely by horse-and-buggy travel.",
              "Wedges radiating outward from the central business district along major transportation corridors (railroads, streetcars, and arterial highways).",
              "A single linear coastal shoreline with no central downtown."
            ],
            "correctIndex": 2,
            "explanation": "Hoyt observed that cities grow in pie-shaped wedges/sectors along transit lines. Industrial factories cluster along rail corridors, low-income worker housing borders the noisy factories, and high-income residences expand along scenic, high-ground transit arteries.",
            "distractorTip": "Burgess (1925) = Concentric rings; Hoyt (1939) = Sectors/Wedges along transit; Harris-Ullman (1945) = Multiple Nuclei with specialized activity nodes."
          },
          {
            "id": "hg6-l3-q2",
            "stem": "In the Burgess Concentric Zone Model, which zone immediately surrounds the central business district (CBD) and is characterized by deteriorated housing, warehouses, and low-income immigrant tenements?",
            "options": [
              "Zone of Independent Workers’ Homes (Zone 3)",
              "Commuter Zone (Zone 5)",
              "Zone of Better Residences (Zone 4)",
              "Zone of Transition (Zone 2)"
            ],
            "correctIndex": 3,
            "explanation": "Zone 2 is the \"Zone of Transition,\" where business and light manufacturing encroach upon older residential neighborhoods, leading to housing deterioration and affordable rental tenements for newly arrived immigrants.",
            "distractorTip": "Burgess rings from center outward: (1) CBD, (2) Zone of Transition, (3) Blue-collar working class, (4) Middle-class residences, (5) Suburban commuter zone."
          },
          {
            "id": "aphg6-l3-q3",
            "stem": "In Homer Hoyt's Sector Model of urban land use, how do residential, industrial, and commercial zones expand outward from the Central Business District (CBD)?",
            "options": [
              "In concentric circular rings expanding uniformly in all directions.",
              "In wedge-shaped sectors radiating outward along major transportation corridors such as rail lines and arterial avenues.",
              "Around multiple independent suburban nuclei with zero central node.",
              "In a disorganized mosaic dictated exclusively by topography."
            ],
            "correctIndex": 1,
            "explanation": "Hoyt observed that cities grow in sectors or wedges radiating outward along transportation arteries (rail lines, trolley avenues, highways). High-income residential housing expands along scenic high ground, while heavy industry corridors hug railroads.",
            "distractorTip": "Burgess = Concentric rings; Hoyt = Wedges/sectors along transit lines; Harris-Ullman = Multiple nuclei."
          }
        ]
      },
      {
        "id": 604,
        "unitIndex": 6,
        "levelNumber": 4,
        "uniqueKey": "aphg-u6-l4",
        "topicNumber": "Topic 6.6",
        "name": "World Regional Urban Models",
        "subtitle": "Griffin-Ford Latin American model, African 3-CBD model, and McGee SE Asian model",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg6-l4-q1",
            "stem": "In the Griffin-Ford Latin American City Model, where is high-income elite residential housing situated relative to the central business district?",
            "options": [
              "Flanking a grand commercial \"Spine\" (boulevard) that extends outward from the CBD, complete with upscale shopping, restaurants, and municipal amenities.",
              "On the outermost periphery in makeshift squatter settlements.",
              "Directly inside the industrial factory zone with no water or sewer access.",
              "On isolated offshore islands connected only by ferry."
            ],
            "correctIndex": 0,
            "explanation": "In Latin American cities (e.g., Mexico City, Buenos Aires), the wealthy live close to the central core and along a commercial spine radiating from the CBD. Wealth decreases with distance from the center, ending in the peripheral squatter settlements (periférico / favelas).",
            "distractorTip": "This is the opposite of North American suburbanization, where the wealthiest residents fled the inner city for suburban commuter fringes."
          },
          {
            "id": "hg6-l4-q2",
            "stem": "The de Blij Sub-Saharan African City Model is uniquely characterized by having which structural feature in its urban core?",
            "options": [
              "A single circular skyscraper surrounded by an impassable moat.",
              "Three distinct Central Business Districts: a Colonial CBD, a Traditional/Indigenous CBD, and an open-air periodic Market Zone.",
              "No commercial trade facilities of any kind.",
              "A high-tech industrial park located in the exact geographic center surrounded by farms."
            ],
            "correctIndex": 1,
            "explanation": "Sub-Saharan African cities reflect colonial and pre-colonial history through 3 CBDs: (1) Colonial CBD with grid layout and vertical offices, (2) Traditional CBD with single-story curbside commerce, and (3) Open-air market zone with bustling periodic stall traders.",
            "distractorTip": "Three CBDs = African City Model; Commercial Spine = Latin American Model; Port Zone focal point = Southeast Asian Model."
          },
          {
            "id": "aphg6-l4-q3",
            "stem": "In the Latin American City Model (Griffin-Ford model), where does the highest-income elite residential sector locate relative to the Central Business District?",
            "options": [
              "In peripheral squatter settlements on the outer ring.",
              "Directly adjacent to the industrial park on the edge of the zone of in situ accretion.",
              "Flanking a grand, scenic commercial boulevard ('the Spine') that extends directly outward from the central plaza.",
              "Scattered randomly throughout rural agricultural belts."
            ],
            "correctIndex": 2,
            "explanation": "In the Griffin-Ford Latin American model, the elite residential sector flanks the commercial 'Spine', an extension of the historic CBD equipped with reliable utilities, luxury dining, and cultural amenities, contrasting sharply with peripheral squatter settlements (favelas/barriadas).",
            "distractorTip": "Latin American city model: Wealthy elite live near the center along the commercial Spine; poorest residents live in squatter settlements on the peripheral ring (periférico)."
          }
        ]
      },
      {
        "id": 605,
        "unitIndex": 6,
        "levelNumber": 5,
        "uniqueKey": "aphg-u6-l5",
        "topicNumber": "Topic 6.7 & 6.8",
        "name": "Urban Disinvestment & Discriminatory Housing Policies",
        "subtitle": "Redlining, blockbusting, racial steering, and infrastructural segregation",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg6-l5-q1",
            "stem": "During the mid-20th century in the United States, the discriminatory practice known as \"Redlining\" involved:",
            "options": [
              "Realtors paying minority families to move into wealthy white suburban neighborhoods.",
              "City planners painting red curbs to prohibit all public bus transportation.",
              "Financial banks and mortgage lenders drawing red lines on municipal maps and systematically refusing loans to home buyers in predominantly African American and minority neighborhoods.",
              "Construction companies building red brick walls around suburban gated communities."
            ],
            "correctIndex": 2,
            "explanation": "Redlining was institutionalized lending discrimination by banks and the Home Owners' Loan Corporation (HOLC), marking minority neighborhoods as \"hazardous\" for credit, starving inner-city communities of investment capital and locking generations out of homeownership wealth.",
            "distractorTip": "Redlining = banks denying mortgages. Blockbusting = realtors stoking racial fear to buy low from whites and sell high to minorities."
          },
          {
            "id": "hg6-l5-q2",
            "stem": "What is \"Blockbusting\" in urban geography?",
            "options": [
              "The zoning law that restricts commercial businesses to corner street blocks.",
              "The municipal demolition of derelict highway overpasses to create greenways.",
              "The construction of concrete block buildings in the central business district.",
              "A predatory practice where realtors convinced white homeowners to sell their homes cheaply by stoking fears that minority families were moving into the neighborhood, then reselling those homes at inflated prices to incoming minority buyers."
            ],
            "correctIndex": 3,
            "explanation": "Blockbusting accelerated \"white flight\" to suburbs by exploiting racial prejudice for realtor commission profits, destabilizing integrated urban neighborhoods.",
            "distractorTip": "Blockbusting was outlawed by the federal Fair Housing Act of 1968, but its spatial segregation legacies persist in many American cities."
          },
          {
            "id": "aphg6-l5-q3",
            "stem": "During the mid-20th century in the United States, the discriminatory practice where real estate agents persuaded white homeowners to sell their homes at deflated prices by warning that minority families were moving into the neighborhood was known as:",
            "options": [
              "Redlining",
              "Blockbusting",
              "Inclusionary zoning",
              "Eminent domain"
            ],
            "correctIndex": 1,
            "explanation": "Blockbusting was an exploitative real estate tactic: agents stoked racial fears to buy homes cheaply from fleeing white owners, and then resold the properties at inflated prices to minority families seeking housing, accelerating 'white flight' to the suburbs.",
            "distractorTip": "Blockbusting = agents stoking panic selling to flip homes; Redlining = banks refusing to grant mortgages in minority neighborhoods."
          }
        ]
      },
      {
        "id": 606,
        "unitIndex": 6,
        "levelNumber": 6,
        "uniqueKey": "aphg-u6-l6",
        "topicNumber": "Topic 6.9, 6.10 & 6.11",
        "name": "Gentrification, New Urbanism & Smart Growth",
        "subtitle": "Displacement vs renewal, mixed-use zoning, and walkable transit communities",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg6-l6-q1",
            "stem": "While Gentrification revitalizes deteriorating inner-city housing stock and boosts municipal property tax revenues, its primary socio-economic drawback is that:",
            "options": [
              "Surging property values and rental rates displace longtime low-income renters and historic neighborhood small businesses who can no longer afford to live there.",
              "It permanently reduces city tax revenues and leads to total municipal bankruptcy.",
              "It causes all middle-class professionals to flee to rural farming villages.",
              "It forces municipal governments to dismantle all subway and light-rail lines."
            ],
            "correctIndex": 0,
            "explanation": "Gentrification brings capital investment, renovated architecture, and new commerce, but rapidly rising rents and property taxes drive out low-income vulnerable residents who lack the financial means to stay in their historic communities.",
            "distractorTip": "AP exam questions always evaluate gentrification through dual lenses: infrastructural reinvestment vs displacement of vulnerable populations."
          },
          {
            "id": "hg6-l6-q2",
            "stem": "New Urbanism and Smart Growth policies counter suburban automobile sprawl by designing urban communities that prioritize:",
            "options": [
              "Wider 10-lane expressways connecting single-family subdivisions on 2-acre lots.",
              "Walkable pedestrian-scaled streets, mixed-use zoning (residential apartments situated above ground-floor retail shops), and proximity to public transit stops.",
              "Separating residential homes miles away from all commercial and retail services.",
              "Eliminating all sidewalks and bike paths to maximize vehicular parking lot capacity."
            ],
            "correctIndex": 1,
            "explanation": "New Urbanism creates human-scale, walkable, transit-oriented developments (TOD) with mixed-use buildings (apartments over cafes/groceries) and green spaces, reducing carbon emissions and reliance on personal automobiles.",
            "distractorTip": "New Urbanism = Walkable + Mixed-use + Transit-Oriented. Conventional sprawl = Car-dependent + Single-use zoning + cul-de-sacs."
          },
          {
            "id": "aphg6-l6-q3",
            "stem": "Which of the following urban planning strategies is a core principle of the New Urbanism movement?",
            "options": [
              "Segregating residential subdivisions strictly away from all commercial and retail establishments.",
              "Constructing high-speed urban expressways through downtown commercial centers.",
              "Designing mixed-use, walkable neighborhoods featuring diverse housing choices, front porches, accessible public transit, and vibrant civic spaces.",
              "Promoting low-density suburban leapfrog sprawl to maximize private lot acreage."
            ],
            "correctIndex": 2,
            "explanation": "New Urbanism promotes human-scale, walkable neighborhoods that counter suburban sprawl by combining mixed-use zoning (apartments above shops), diverse architectural styles, pedestrian-friendly streets, and mass transit connectivity.",
            "distractorTip": "New Urbanism = walkable, mixed-use, transit-oriented, combating low-density car-dependent suburban sprawl."
          }
        ]
      },
      {
        "id": 607,
        "unitIndex": 6,
        "levelNumber": 7,
        "uniqueKey": "aphg-u6-l7",
        "topicNumber": "Unit 6 Boss",
        "name": "Apex Skyline Metropolis",
        "subtitle": "Spatial synthesis: Urban models, Christaller thresholds, and equitable revitalization",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "hg6-l7-q1",
            "stem": "A metropolitan region implements an Urban Growth Boundary (UGB) to preserve surrounding greenbelts and agricultural farmland from suburban sprawl. According to urban economic models, what is the most likely consequence inside the bounded urban core?",
            "options": [
              "The collapse of all public transit systems due to lack of municipal population density.",
              "A complete abandonment of city downtowns as residents move into remote wilderness areas.",
              "Higher land values and denser residential infill development (such as multi-family apartment complexes and townhomes) within the existing urban footprint.",
              "The immediate conversion of all inner-city office towers into single-family ranch homes."
            ],
            "correctIndex": 2,
            "explanation": "An Urban Growth Boundary (like Portland, Oregon’s) restricts outward spatial expansion. Because the supply of buildable land is capped, land values rise, incentivizing high-density infill development, brownfield redevelopment, and mixed-use transit-oriented housing.",
            "distractorTip": "Greenbelts and Urban Growth Boundaries contain urban sprawl and protect rural land, but necessitate higher residential density inside the boundary."
          },
          {
            "id": "aphg6-l7-q2",
            "stem": "According to the Rank-Size Rule for urban systems, if the largest city in a country has a population of 8,000,000, what is the expected population of the fourth-largest city?",
            "options": [
              "4,000,000",
              "2,000,000",
              "1,000,000",
              "500,000"
            ],
            "correctIndex": 1,
            "explanation": "The Rank-Size Rule predicts that the $n$-th largest settlement will be $1/n$ the population of the largest city: $\\text{Population}_n = \\frac{\\text{Population}_1}{n}$. For the 4th largest city: $8,000,000 / 4 = 2,000,000$.",
            "distractorTip": "Rank-Size Rule formula: $P_n = P_1 / n$. 2nd city = half of largest; 4th city = one-fourth of largest."
          },
          {
            "id": "aphg6-l7-q3",
            "stem": "A developing country where the capital city is more than five times larger than any other city and dominates all political, economic, cultural, and financial power possesses a:",
            "options": [
              "Rank-size urban distribution",
              "Multi-centric network",
              "Primate city structure",
              "Conurbation hierarchy"
            ],
            "correctIndex": 2,
            "explanation": "A primate city is disproportionately large (more than twice the size of the next largest city) and exercises overwhelming dominance over the national economy, politics, and culture (e.g. Paris in France, Bangkok in Thailand, Mexico City in Mexico).",
            "distractorTip": "Primate city = disproportionately huge city that dominates the entire nation, violating the rank-size rule."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 7,
    "unitId": "u7",
    "title": "Unit 7: Industrial & Economic Development",
    "shortTitle": "Unit 7: Development",
    "description": "Alfred Weber’s Least Cost Theory, Rostow’s 5 Stages of Growth, Wallerstein’s World Systems Theory, HDI, gender inequality, SEZs, and global commodity chains",
    "examWeight": "12–17% of AP Exam",
    "biome": {
      "name": "Global Supply Chain Archipelago & Industrial Ports",
      "icon": "🏭",
      "accentColor": "#F59E0B",
      "secondaryColor": "#D97706",
      "groundGradient": "from-amber-100 via-orange-50 to-amber-200",
      "cardBorder": "border-amber-500",
      "trailColor": "#f59e0b",
      "nodeRing": "ring-amber-400/40",
      "skyTint": "from-amber-50 to-orange-50/30"
    },
    "levels": [
      {
        "id": 701,
        "unitIndex": 7,
        "levelNumber": 1,
        "uniqueKey": "aphg-u7-l1",
        "topicNumber": "Topic 7.1 & 7.2",
        "name": "Alfred Weber’s Least Cost Theory",
        "subtitle": "Bulk-gaining vs bulk-reducing industries and agglomeration economies",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg7-l1-q1",
            "stem": "Why do soft-drink bottling facilities (such as Coca-Cola or Pepsi) locate close to consumer urban markets rather than raw ingredient sources?",
            "options": [
              "Federal zoning regulations prohibit beverages from being transported across state lines.",
              "Soft drinks require special volcanic spring water found only under downtown skyscrapers.",
              "Beverage bottling is a bulk-reducing manufacturing process.",
              "Adding ubiquitous heavy water to syrup concentrate makes the final packaged beverage heavier and bulkier than the initial inputs (a bulk-gaining industry), so locating near the market minimizes high outbound shipping costs."
            ],
            "correctIndex": 3,
            "explanation": "Bulk-gaining (weight-gaining) industries gain weight or volume during production (e.g., soda bottling, automobile assembly). To minimize shipping expenses for the heavy final product, plants locate close to the market.",
            "distractorTip": "Bulk-Gaining (soda, cars, bread) = Near Market. Bulk-Reducing (copper smelting, paper mills) = Near Raw Materials."
          },
          {
            "id": "hg7-l1-q2",
            "stem": "A copper smelting plant purifies massive quantities of low-grade copper ore into lightweight pure copper cathodes before shipping. Under Alfred Weber’s Least Cost Theory, where should this plant locate?",
            "options": [
              "Adjacent to the copper mine, because the process is bulk-reducing (weight-losing) and shipping heavy waste rock would be economically wasteful.",
              "In a downtown CBD financial district near major stock exchanges.",
              "At a midpoint international airport with no highway connections.",
              "Directly inside high-end suburban shopping centers."
            ],
            "correctIndex": 0,
            "explanation": "Copper ore contains less than 1% pure metal; the rest is heavy rock waste (slag). Smelting is bulk-reducing (weight-losing), so the processing plant must locate near the mineral source to avoid shipping tons of worthless waste.",
            "distractorTip": "Bulk-reducing industries always locate near raw materials to shed weight before long-distance transport."
          },
          {
            "id": "aphg7-l1-q3",
            "stem": "According to Alfred Weber's Least Cost Theory, where should a manufacturing facility locate if its production process is 'bulk-reducing' (raw materials lose significant weight during processing, such as copper smelting or timber milling)?",
            "options": [
              "Directly at the final consumer market to minimize finished delivery costs.",
              "Close to the raw material extraction source to minimize transporting heavy, raw inputs.",
              "At a break-of-bulk transshipment seaport regardless of distance.",
              "Equidistant between raw material sources and major consumer urban centers."
            ],
            "correctIndex": 1,
            "explanation": "Weber's Least Cost Theory models factory location based on transport costs. If final goods weigh less than raw inputs (bulk-reducing / weight-losing), transport costs are minimized by placing the factory near the raw material source.",
            "distractorTip": "Bulk-reducing (weight-losing) = near raw materials (copper, lumber); Bulk-gaining (weight-gaining) = near the market (soft drinks, cars)."
          }
        ]
      },
      {
        "id": 702,
        "unitIndex": 7,
        "levelNumber": 2,
        "uniqueKey": "aphg-u7-l2",
        "topicNumber": "Topic 7.3 & 7.4",
        "name": "Measures of Economic Development & Gender Equity",
        "subtitle": "HDI indicators, Gender Inequality Index (GII), and microfinance",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg7-l2-q1",
            "stem": "The United Nations Human Development Index (HDI) evaluates a country’s overall socio-economic progress by combining which three fundamental dimensions?",
            "options": [
              "Total military defense spending, gold reserves, and total territorial land area.",
              "A decent standard of living (GNI per capita PPP), a long and healthy life (Life Expectancy at birth), and access to knowledge (Mean and Expected Years of Schooling).",
              "Carbon emission tonnage, steel production, and length of paved highways.",
              "Total number of smartphones per capita, internet server speed, and skyscraper density."
            ],
            "correctIndex": 1,
            "explanation": "HDI moves beyond pure GDP by evaluating: (1) Standard of living (Gross National Income per capita adjusted for Purchasing Power Parity), (2) Health (Life Expectancy), and (3) Education (average and expected schooling years). HDI ranges from 0.0 to 1.0.",
            "distractorTip": "GNI per capita alone can mask extreme inequality; HDI provides a holistic view of human welfare."
          },
          {
            "id": "hg7-l2-q2",
            "stem": "How does providing microfinance loans (such as those pioneered by the Grameen Bank) specifically advance gender equity and local economic development in peripheral countries?",
            "options": [
              "Microfinance forces all recipients to work exclusively in foreign-owned multinational sweatshops.",
              "Microloans require borrowers to surrender their national passports and emigrate to core countries.",
              "Small collateral-free microloans allow impoverished women to launch small local businesses, boosting household income, increasing female decision-making autonomy, and improving child nutrition and schooling.",
              "Microfinance replaces national currencies with gold bullion."
            ],
            "correctIndex": 2,
            "explanation": "Microloans give women in the informal economy access to capital to purchase sewing machines, livestock, or seeds. Repayment rates are exceptionally high (>95%), and women reinvest earnings into family health, nutrition, and children’s education.",
            "distractorTip": "Microfinance is a recurring AP Human Geography concept linking gender empowerment (GII reduction) to grassroots economic development."
          },
          {
            "id": "aphg7-l2-q3",
            "stem": "Which combination of socioeconomic metrics is combined to calculate the United Nations Human Development Index (HDI)?",
            "options": [
              "Military spending per capita, crude birth rate, and foreign direct investment.",
              "Gross National Income (GNI) per capita, mean and expected years of schooling, and life expectancy at birth.",
              "Carbon emissions per capita, agricultural output, and inflation rate.",
              "Total tariff revenue, percentage of unionized labor, and internet penetration."
            ],
            "correctIndex": 1,
            "explanation": "The UN Human Development Index (HDI) evaluates human development across three core dimensions: (1) Standard of living (GNI per capita adjusted for PPP), (2) Knowledge/Education (mean and expected years of schooling), and (3) Long and healthy life (life expectancy at birth).",
            "distractorTip": "HDI measures three dimensions: A decent standard of living (GNI/capita), Knowledge (education), and Long life (life expectancy)."
          }
        ]
      },
      {
        "id": 703,
        "unitIndex": 7,
        "levelNumber": 3,
        "uniqueKey": "aphg-u7-l3",
        "topicNumber": "Topic 7.5 & 7.6",
        "name": "Theories of Development: Rostow vs. Wallerstein",
        "subtitle": "5 Stages of Modernization vs Core-Periphery World Systems Theory",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg7-l3-q1",
            "stem": "Which statement accurately describes a major theoretical critique of Walt Rostow’s 5-Stage Modernization Model (1960)?",
            "options": [
              "It was formulated exclusively for communist planned economies like the Soviet Union.",
              "It claims that no country can ever advance past the traditional subsistence stage.",
              "It argues that agriculture generates higher global profit margins than high-tech service industries.",
              "It assumes all countries develop along the exact same Western European linear trajectory, ignoring colonial exploitation, unequal global trade terms, and environmental limits."
            ],
            "correctIndex": 3,
            "explanation": "Rostow assumed a universal 5-stage path (Traditional Society $\\to$ Preconditions $\\to$ Take-off $\\to$ Drive to Maturity $\\to$ High Mass Consumption). Critics point out that peripheral countries face structural dependency and neo-colonial barriers that make Western-style linear development unrealistic.",
            "distractorTip": "Rostow = Optimistic internal linear growth; Wallerstein = Structural global inequality and dependency."
          },
          {
            "id": "hg7-l3-q2",
            "stem": "In Immanuel Wallerstein’s World Systems Theory, what is the core structural economic relationship between Core and Periphery countries?",
            "options": [
              "Core nations exploit cheap labor and extract raw natural resources from periphery nations, selling back high-value manufactured consumer goods and maintaining economic dominance.",
              "Periphery nations control all global high-tech intellectual property and financial banking capital.",
              "Core and periphery nations trade agricultural raw commodities on completely equal barter terms.",
              "Periphery nations collect tariffs from core nations to maintain dominance in global shipping."
            ],
            "correctIndex": 0,
            "explanation": "Wallerstein models a spatial division of labor: Core nations (wealthy, technologically advanced) extract raw commodities and cheap factory labor from the Periphery, reinforcing dependency. Semi-periphery nations (e.g. Brazil, India, China, Mexico) exhibit both core and periphery characteristics.",
            "distractorTip": "Core = high wealth/tech (US, Germany, Japan); Semi-Periphery = manufacturing/industrializing (BRICS, Mexico); Periphery = raw materials/low income (Sub-Saharan Africa, parts of Central America)."
          },
          {
            "id": "aphg7-l3-q3",
            "stem": "In Immanuel Wallerstein's World Systems Theory, what economic relationship characterizes the dynamic between 'Core' and 'Periphery' nations?",
            "options": [
              "Periphery nations export high-value manufactured consumer goods and intellectual software to Core nations.",
              "Core nations exploit low-cost labor and cheap raw materials extracted from Periphery nations, reinforcing unequal global wealth distribution.",
              "All nations transition through identical developmental stages simultaneously.",
              "Semi-periphery nations are legally prohibited from participating in international trade."
            ],
            "correctIndex": 1,
            "explanation": "Wallerstein's World Systems Theory views the global capitalist economy as a unified hierarchy. Core nations extract inexpensive raw materials and cheap labor from peripheral countries, producing high-value processed goods that generate wealth for the core while keeping the periphery dependent.",
            "distractorTip": "Core = wealthy/high-tech; Periphery = raw materials/cheap labor; Semi-periphery = intermediate manufacturing (Brazil, India, China)."
          }
        ]
      },
      {
        "id": 704,
        "unitIndex": 7,
        "levelNumber": 4,
        "uniqueKey": "aphg-u7-l4",
        "topicNumber": "Topic 7.7",
        "name": "Trade, Deindustrialization & The Global Division of Labor",
        "subtitle": "Outsourcing, offshoring, the Rust Belt, and Just-in-Time delivery",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg7-l4-q1",
            "stem": "The \"New International Division of Labor\" is characterized by which global economic shift since the late 20th century?",
            "options": [
              "All manufacturing has returned entirely to Western European craft workshops.",
              "Low-skilled, labor-intensive manufacturing has relocated to low-wage developing countries in the semi-periphery and periphery, while core nations retain high-tech engineering, financial services, and corporate headquarters.",
              "Core countries have completely eliminated all quaternary and quinary knowledge-based economic sectors.",
              "Developing nations have legally banned foreign direct investment from multinational corporations."
            ],
            "correctIndex": 1,
            "explanation": "Transnational corporations take advantage of lower labor costs, tax breaks, and weaker environmental regulations by offshoring assembly jobs to countries like China, Vietnam, and Bangladesh, while retaining management, design, and capital in core nations.",
            "distractorTip": "Primary = raw extraction; Secondary = manufacturing; Tertiary = retail/services; Quaternary = information/finance; Quinary = executive decision-making."
          },
          {
            "id": "hg7-l4-q2",
            "stem": "What was the primary driver of Deindustrialization and the formation of the \"Rust Belt\" in the US Midwest and the UK Midlands?",
            "options": [
              "A federal mandate requiring all citizens to purchase only hand-crafted artisan goods.",
              "Severe tropical hurricanes destroying all factory foundations in Ohio and Michigan.",
              "Automation and the relocation of manufacturing plants to lower-cost domestic regions (the Sun Belt) and overseas foreign nations, leaving behind abandoned brownfields and high structural unemployment.",
              "The total global exhaustion of all iron ore and coal reserves on Earth."
            ],
            "correctIndex": 2,
            "explanation": "Deindustrialization occurred as heavy industries (steel, automotive) closed uncompetitive older plants due to foreign competition and technological automation, shifting capital toward low-wage non-union Sun Belt states and overseas.",
            "distractorTip": "Deindustrialization transformed the manufacturing \"Factory Belt\" into the \"Rust Belt,\" prompting population migration to the Sun Belt."
          },
          {
            "id": "aphg7-l4-q3",
            "stem": "What economic restructuring process occurred in the American Midwest 'Rust Belt' and northern England when factory assembly jobs relocated to low-wage developing nations?",
            "options": [
              "Primary agricultural expansion",
              "Import substitution industrialization",
              "Deindustrialization and transition to a post-industrial service-based tertiary economy",
              "Complete nationalization of domestic manufacturing"
            ],
            "correctIndex": 2,
            "explanation": "Deindustrialization is the decline of secondary industrial manufacturing employment in developed regions, driven by automation and global outsourcing to low-wage nations, prompting a shift toward tertiary and quaternary service economies.",
            "distractorTip": "Deindustrialization = loss of manufacturing jobs as economies transition to service and tech industries."
          }
        ]
      },
      {
        "id": 705,
        "unitIndex": 7,
        "levelNumber": 5,
        "uniqueKey": "aphg-u7-l5",
        "topicNumber": "Topic 7.8",
        "name": "Special Economic Zones, Free Trade & Sustainability",
        "subtitle": "SEZs, EPZs, Maquiladoras, UN SDGs, and ecotourism",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "hg7-l5-q1",
            "stem": "Governments in developing countries establish Special Economic Zones (SEZs) and Export Processing Zones (EPZs) primarily to:",
            "options": [
              "Prohibit foreign multinational corporations from selling goods within their borders.",
              "Isolate their domestic population from all modern communication technology.",
              "Preserve virgin tropical rainforests from all human contact.",
              "Attract foreign direct investment (FDI) and create industrial manufacturing jobs by offering tax holidays, duty-free imports of machinery, and streamlined regulatory procedures."
            ],
            "correctIndex": 3,
            "explanation": "SEZs (like Shenzhen in China, or Maquiladora zones along the US-Mexico border) offer foreign investors special economic incentives—such as low corporate tax rates, tariff exemptions on raw material imports, and cheap labor—to boost export industrialization.",
            "distractorTip": "Maquiladoras are Mexican assembly plants located near the US border that import duty-free components, assemble products, and export finished goods to the US."
          },
          {
            "id": "hg7-l5-q2",
            "stem": "How does Ecotourism contribute to both economic development and environmental conservation in countries like Costa Rica and Kenya?",
            "options": [
              "It generates foreign exchange revenue and local hospitality employment by allowing travelers to experience natural ecosystems responsibly, creating an economic incentive to protect forests and wildlife rather than clear-cut or poach them.",
              "It converts all national parks into open-pit strip mines.",
              "It requires tourists to construct permanent industrial manufacturing factories inside nature reserves.",
              "It replaces all native flora and fauna with imported agricultural livestock."
            ],
            "correctIndex": 0,
            "explanation": "Ecotourism monetizes ecological preservation. When local communities earn income as guides, lodge operators, and conservation rangers, living biodiversity becomes more valuable than lumber extraction or land clearing.",
            "distractorTip": "Ecotourism aligns with UN Sustainable Development Goals (SDGs) by promoting sustainable livelihoods without destroying fragile biomes."
          },
          {
            "id": "aphg7-l5-q3",
            "stem": "Why do developing nations establish Special Economic Zones (SEZs), such as Shenzhen in China or border maquiladora zones in Mexico?",
            "options": [
              "To strictly eliminate foreign private business ownership.",
              "To attract foreign direct investment (FDI) and create manufacturing jobs by offering tax incentives, reduced tariffs, streamlined regulations, and low-cost labor.",
              "To ban the exportation of manufactured consumer goods.",
              "To enforce rigid domestic environmental standards that exceed Western regulations."
            ],
            "correctIndex": 1,
            "explanation": "Special Economic Zones (SEZs) and Export Processing Zones (EPZs) offer regulatory and tax incentives (duty-free imports of raw components, tax holidays, streamlined permits) to attract multinational corporate investment and boost export-driven industrialization.",
            "distractorTip": "SEZs offer tax breaks, duty-free trade, and business-friendly regulations to attract foreign corporate investment."
          }
        ]
      },
      {
        "id": 706,
        "unitIndex": 7,
        "levelNumber": 6,
        "uniqueKey": "aphg-u7-l6",
        "topicNumber": "Unit 7 Boss",
        "name": "Apex Global Economy",
        "subtitle": "Supply chain vulnerabilities, commodity dependence, and the post-Fordist era",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "hg7-l6-q1",
            "stem": "Modern \"Just-in-Time\" (JIT) manufacturing reduces warehouse storage costs by having parts delivered immediately before assembly. However, as demonstrated by recent global crises, what is the primary vulnerability of JIT logistics in a post-Fordist globalized economy?",
            "options": [
              "Firms are legally forced to maintain 5 years of excess warehouse inventory.",
              "Any disruption along the international supply chain—such as port congestion, geopolitical chokepoint closures, or factory shutdowns—can immediately halt assembly lines worldwide because firms hold zero inventory buffer.",
              "It makes containerized oceanic shipping completely obsolete.",
              "It prevents computers and electronic robotics from being used on factory floors."
            ],
            "correctIndex": 1,
            "explanation": "Fordist manufacturing relied on mass assembly and massive warehouses of stored inventory (\"just-in-case\"). Post-Fordist production uses flexible JIT delivery to cut storage costs, but leaves corporations vulnerable to cascading supply chain disruptions when transit is blocked.",
            "distractorTip": "Post-Fordist = flexible production + JIT delivery + global outsourcing. Fordist = standardized mass production + assembly line + local inventory storage."
          },
          {
            "id": "aphg7-l6-q2",
            "stem": "What is the primary role of a 'break-of-bulk point' in international freight transport?",
            "options": [
              "A location where cargo is shifted from one transportation mode to another, such as from an ocean container ship to railcars or semi-trucks.",
              "A customs inspection warehouse where illegal goods are incinerated.",
              "A factory where raw materials are melted into consumer electronics.",
              "A dry dock where obsolete shipping vessels are dismantled."
            ],
            "correctIndex": 0,
            "explanation": "A break-of-bulk point is a location where goods are transferred from one mode of transportation to another (e.g. seaports where cargo containers are unloaded from container ships onto freight trains or trucks), adding handling costs and often attracting warehousing and manufacturing clusters.",
            "distractorTip": "Break-of-bulk point = place where cargo transfers from one transport mode to another (e.g. ship to train)."
          },
          {
            "id": "aphg7-l6-q3",
            "stem": "How does the United Nations Sustainable Development Goals (SDGs) framework attempt to balance economic development with environmental stewardship?",
            "options": [
              "By demanding that developing nations shut down all fossil-fueled power plants within 24 hours.",
              "By focusing on economic growth, poverty eradication, gender equality, and clean renewable energy while protecting terrestrial and marine ecosystems for future generations.",
              "By mandating that all international trade be governed by agricultural tariffs.",
              "By transferring all intellectual patent rights to the World Trade Organization."
            ],
            "correctIndex": 1,
            "explanation": "The 17 UN Sustainable Development Goals aim to eradicate extreme poverty, ensure gender equity and quality education, foster sustainable industrial innovation, and combat climate change, ensuring that current economic progress does not compromise the carrying capacity of the planet.",
            "distractorTip": "Sustainable development meets the needs of the present without compromising the ability of future generations to meet their own needs."
          }
        ]
      }
    ]
  }
];
