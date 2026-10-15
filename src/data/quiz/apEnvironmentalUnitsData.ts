// AP Environmental Science Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–9)
// Complete authentic coverage: 56 Levels, 168 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_ENVIRONMENTAL_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Unit 1: The Living World: Ecosystems",
    "shortTitle": "Unit 1: Ecosystems",
    "description": "Biogeochemical cycles (nitrogen, phosphorus, carbon, hydrologic), primary productivity (NPP = GPP - R), terrestrial & aquatic biomes, and trophic energy flow",
    "examWeight": "6–8% of AP Exam",
    "biome": {
      "name": "Evergreen Canopy & Biogeochemical Springs",
      "icon": "🌿",
      "accentColor": "#16A34A",
      "secondaryColor": "#15803D",
      "groundGradient": "from-green-100 via-emerald-50 to-teal-100",
      "cardBorder": "border-green-500",
      "trailColor": "#16a34a",
      "nodeRing": "ring-green-400/40",
      "skyTint": "from-green-50 to-emerald-50/30"
    },
    "levels": [
      {
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "apes-u1-l1",
        "topicNumber": "Topic 1.1 - 1.3",
        "name": "Biomes & Ecological Niches",
        "subtitle": "Climatograms, resource partitioning, and aquatic depth zones",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es1-l1-q1",
            "stem": "Five species of warblers co-exist in the same spruce forest by foraging for insects at different heights and distinct radial zones within the spruce trees. This ecological phenomenon is an example of:",
            "options": [
              "Resource partitioning",
              "Competitive exclusion leading to extinction",
              "Primary ecological succession",
              "Parasitism"
            ],
            "correctIndex": 0,
            "explanation": "Resource partitioning occurs when competing species use different parts of a shared resource or use resources at different times or places, reducing direct niche overlap and allowing long-term coexistence.",
            "distractorTip": "Competitive exclusion states two species cannot occupy the exact same niche; resource partitioning is the adaptive evolutionary division of that niche."
          },
          {
            "id": "es1-l1-q2",
            "stem": "Which terrestrial biome is characterized by low annual precipitation, cold freezing winters, and subsoil that remains permanently frozen as permafrost, preventing deep tree root penetration?",
            "options": [
              "Taiga (Boreal forest)",
              "Tundra",
              "Temperate grassland",
              "Chaparral"
            ],
            "correctIndex": 1,
            "explanation": "The arctic tundra has an extremely short growing season, low precipitation (cold desert conditions), and a permafrost layer that restricts vegetation to low-growing mosses, lichens, and dwarf shrubs.",
            "distractorTip": "Taiga/boreal has evergreen coniferous trees (pine/spruce/fir); Tundra has permafrost and NO tall trees."
          },
          {
            "id": "apes1-l1-q3",
            "stem": "Which terrestrial biome is characterized by permafrost, extremely low annual precipitation, low average temperatures, and vegetation dominated by low-growing lichens, mosses, and dwarf shrubs?",
            "options": [
              "Boreal forest (Taiga)",
              "Temperate grassland",
              "Tundra",
              "Temperate rainforest"
            ],
            "correctIndex": 2,
            "explanation": "The Arctic and Alpine Tundra biomes are defined by a permanently frozen subsoil layer known as permafrost, short growing seasons, cold windy climates, and stunted vegetation lacking deep root systems.",
            "distractorTip": "Tundra = permafrost, low precipitation, lichens/mosses; Taiga (Boreal forest) = coniferous evergreen trees (spruce/pine)."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "apes-u1-l2",
        "topicNumber": "Topic 1.4 & 1.5",
        "name": "The Carbon & Nitrogen Cycles",
        "subtitle": "Photosynthesis, fossil reservoirs, nitrogen fixation & denitrification",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es1-l2-q1",
            "stem": "In the nitrogen cycle, which biological process converts unreactive atmospheric nitrogen gas ($N_2$) into bioavailable ammonia ($NH_3$) or ammonium ($NH_4^+$) in root nodules of legumes?",
            "options": [
              "Assimilation",
              "Denitrification",
              "Nitrogen fixation",
              "Ammonification"
            ],
            "correctIndex": 2,
            "explanation": "Nitrogen fixation is performed by specialized bacteria (such as Rhizobium living symbiotically in legume root nodules, or free-living cyanobacteria) that break the triple covalent bond of $N_2$ gas to produce ammonia/ammonium.",
            "distractorTip": "Remember the sequence: Fixation ($N_2 \\to NH_3/NH_4^+$) $\\to$ Nitrification ($NH_4^+ \\to NO_2^- \\to NO_3^-$) $\\to$ Assimilation $\\to$ Denitrification (returns $N_2$ to atmosphere)."
          },
          {
            "id": "es1-l2-q2",
            "stem": "What is the largest long-term carbon reservoir (sink) on Earth that stores carbon for millions of years?",
            "options": [
              "Agricultural crop soils",
              "The terrestrial atmosphere",
              "Living tropical rainforest vegetation",
              "Sedimentary rocks (such as limestone, $CaCO_3$, and fossil fuel formations)"
            ],
            "correctIndex": 3,
            "explanation": "The vast majority of Earth’s carbon is locked in sedimentary rock formations (limestone, dolomite, and marine calcified sediments) and deep fossil fuel deposits, holding over $99\\%$ of global carbon for geologic timescales.",
            "distractorTip": "The ocean is the largest active/dissolved sink, but sedimentary rock is the single largest long-term reservoir on Earth."
          },
          {
            "id": "apes1-l2-q3",
            "stem": "In the biogeochemical nitrogen cycle, which biological process converts airborne inert atmospheric nitrogen gas ($N_2$) into biologically usable ammonia ($NH_3$) or ammonium ($NH_4^+$)?",
            "options": [
              "Biological nitrogen fixation by specialized bacteria (such as Rhizobium living in legume root nodules)",
              "Denitrification by anaerobic wetland bacteria",
              "Assimilation by autotrophic phytoplankton",
              "Ammonification by fungal decomposers"
            ],
            "correctIndex": 0,
            "explanation": "Atmospheric nitrogen ($N_2$) contains a strong triple covalent bond that plants cannot break directly. Nitrogen-fixing bacteria (such as Rhizobium symbiotic with legumes, and free-living cyanobacteria) convert $N_2$ into ammonia ($NH_3$) and ammonium ($NH_4^+$).",
            "distractorTip": "Nitrogen Fixation: $N_2 \\to NH_3/NH_4^+$; Nitrification: $NH_4^+ \\to NO_2^- \\to NO_3^-$; Denitrification: $NO_3^- \\to N_2$ gas."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "apes-u1-l3",
        "topicNumber": "Topic 1.6 & 1.7",
        "name": "The Phosphorus & Hydrologic Cycles",
        "subtitle": "Weathering of apatite, limiting nutrients, and transpiration",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es1-l3-q1",
            "stem": "Which major biogeochemical cycle lacks a significant atmospheric gaseous phase, making it a critical limiting nutrient in terrestrial soils and freshwater lakes?",
            "options": [
              "The phosphorus cycle",
              "The nitrogen cycle",
              "The carbon cycle",
              "The sulfur cycle"
            ],
            "correctIndex": 0,
            "explanation": "Phosphorus does not circulate through the atmosphere in significant gaseous forms. It cycles slowly from geologic weathering of rock minerals into soil and water, making it readily exhausted and frequently limiting in ecosystems.",
            "distractorTip": "Phosphorus = NO atmospheric component. Nitrogen, Carbon, Sulfur, and Water all have major gaseous atmospheric phases."
          },
          {
            "id": "es1-l3-q2",
            "stem": "Large-scale deforestation in the Amazon Basin disrupts the regional hydrologic cycle primarily by drastically reducing which physical process?",
            "options": [
              "Surface ocean evaporation.",
              "Transpiration from forest canopy trees, which diminishes atmospheric humidity and downwind rainfall.",
              "Groundwater infiltration of volcanic magma.",
              "Atmospheric ozone formation."
            ],
            "correctIndex": 1,
            "explanation": "Tropical trees pump vast amounts of soil water into the atmosphere through transpiration (evapotranspiration). Deforestation removes this biological moisture pump, creating regional droughts and microclimate warming.",
            "distractorTip": "Transpiration is evaporation of water from plant leaves through open stomata into the atmosphere."
          },
          {
            "id": "apes1-l3-q3",
            "stem": "Why does the phosphorus cycle operate at a vastly slower geological pace compared to the carbon, nitrogen, and water cycles?",
            "options": [
              "Phosphorus atoms are destroyed during nuclear fission.",
              "Phosphorus is only absorbed by chemosynthetic deep-sea bacteria.",
              "Phosphorus is insoluble in liquid water under all conditions.",
              "The phosphorus cycle lacks a significant atmospheric gaseous phase; its primary environmental reservoir is stored in sedimentary rock minerals that release phosphate slowly via weathering."
            ],
            "correctIndex": 3,
            "explanation": "Unlike nitrogen or carbon, phosphorus does not form a stable atmospheric gas under environmental temperatures and pressures. Its major sink is lithospheric sedimentary rock, from which it is released only through slow geological uplift and weathering.",
            "distractorTip": "The Phosphorus cycle has NO gaseous atmospheric phase! Its main sink is rock/sediment."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "apes-u1-l4",
        "topicNumber": "Topic 1.8",
        "name": "Primary Productivity & Respiration",
        "subtitle": "NPP = GPP - R and open ocean vs wetland comparisons",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es1-l4-q1",
            "stem": "In a temperate forest ecosystem, Gross Primary Productivity (GPP) is measured at $24{,}000\\,\\text{kcal/m}^2/\\text{yr}$. If autotrophic cellular respiration ($R$) consumes $14{,}000\\,\\text{kcal/m}^2/\\text{yr}$, what is the Net Primary Productivity (NPP) available to primary consumers?",
            "options": [
              "$14{,}000\\,\\text{kcal/m}^2/\\text{yr}$",
              "$38{,}000\\,\\text{kcal/m}^2/\\text{yr}$",
              "$10{,}000\\,\\text{kcal/m}^2/\\text{yr}$",
              "$1.71\\,\\text{kcal/m}^2/\\text{yr}$"
            ],
            "correctIndex": 2,
            "explanation": "Net Primary Productivity is the rate at which producers store chemical energy minus the energy they consume for their own respiration: $\\text{NPP} = \\text{GPP} - R = 24{,}000 - 14{,}000 = 10{,}000\\,\\text{kcal/m}^2/\\text{yr}$.",
            "distractorTip": "Formula: $\\text{NPP} = \\text{GPP} - R$. NPP represents the actual biomass added and available to herbivores."
          },
          {
            "id": "es1-l4-q2",
            "stem": "Although estuaries and coral reefs have the highest Net Primary Productivity PER SQUARE METER, which biome contributes the largest TOTAL quantity of net primary productivity globally, and why?",
            "options": [
              "Desert biomes, because high solar insolation accelerates cacti metabolism.",
              "Tropical rainforests, because trees grow on three vertical canopy tiers.",
              "Arctic tundra, because 24 hours of summer sunlight maximizes photosynthesis.",
              "The open ocean, because its massive global surface area covers over $70\\%$ of Earth despite low productivity per unit area."
            ],
            "correctIndex": 3,
            "explanation": "While the open ocean has low NPP per square meter due to nutrient limitations, its astronomical surface area (over 360 million square kilometers) makes it the largest contributor to global total biomass synthesis.",
            "distractorTip": "Know the difference: HIGHEST NPP/m² = Estuaries/Swamps/Coral Reefs. HIGHEST GLOBAL TOTAL NPP = Open Ocean."
          },
          {
            "id": "apes1-l4-q3",
            "stem": "An aquatic ecosystem has a Gross Primary Productivity (GPP) of $8.5\\text{ mg } O_2/\\text{L/day}$. If primary producers consume $3.5\\text{ mg } O_2/\\text{L/day}$ during cellular respiration (R), what is the Net Primary Productivity (NPP)?",
            "options": [
              "12.0 mg O₂/L/day",
              "5.0 mg O₂/L/day",
              "2.4 mg O₂/L/day",
              "29.75 mg O₂/L/day"
            ],
            "correctIndex": 1,
            "explanation": "Net Primary Productivity is the rate at which biomass energy is stored after accounting for the metabolic respiration of producers: $NPP = GPP - R = 8.5 - 3.5 = 5.0\\text{ mg } O_2/\\text{L/day}$.",
            "distractorTip": "Core APES equation: $NPP = GPP - R$. NPP represents the actual biomass available to consumers."
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "apes-u1-l5",
        "topicNumber": "Topic 1.9 & 1.10",
        "name": "Trophic Levels, 10% Rule & Food Webs",
        "subtitle": "Second law of thermodynamics and keystone predator cascades",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es1-l5-q1",
            "stem": "According to the 10% Rule of ecological efficiency, if primary producers in a grassland store $50{,}000\\,\\text{J}$ of energy in their biomass, approximately how much energy will be incorporated into the biomass of secondary consumers (carnivores)?",
            "options": [
              "$500\\,\\text{J}$",
              "$5{,}000\\,\\text{J}$",
              "$50\\,\\text{J}$",
              "$25{,}000\\,\\text{J}$"
            ],
            "correctIndex": 0,
            "explanation": "Energy transfers between trophic levels with roughly $10\\%$ efficiency (the remaining $90\\%$ is lost as metabolic heat under the 2nd Law of Thermodynamics). Producers: $50{,}000\\,\\text{J} \\to$ Primary consumers: $5{,}000\\,\\text{J} \\to$ Secondary consumers: $500\\,\\text{J}$.",
            "distractorTip": "Count trophic steps: Producers $\\to$ Herbivores (Step 1: 10%) $\\to$ Carnivores (Step 2: 10% of 10% = 1%). $50{,}000 \\times 0.01 = 500\\,\\text{J}$."
          },
          {
            "id": "es1-l5-q2",
            "stem": "In the Pacific Northwest kelp forest ecosystem, sea otters feed on herbivorous sea urchins. When sea otters were hunted near extinction, sea urchin populations exploded and decimated the kelp forest, creating barren seafloors. In this food web, sea otters function as a:",
            "options": [
              "Pioneer species",
              "Keystone species",
              "Secondary decomposer",
              "Primary producer"
            ],
            "correctIndex": 1,
            "explanation": "A keystone species exerts strong regulatory control over ecosystem structure and biodiversity disproportionate to its abundance. Removing the apex sea otter triggered a top-down trophic cascade destroying the kelp forest.",
            "distractorTip": "Keystone species have a disproportionate impact on community diversity; their removal causes ecosystem collapse."
          },
          {
            "id": "apes1-l5-q3",
            "stem": "According to the Second Law of Thermodynamics and the 10% Rule of ecological efficiency, what happens to the remaining 90% of energy that is NOT transferred to the next higher trophic level?",
            "options": [
              "It is converted into mineral phosphorus in the soil.",
              "It is reflected back into deep space as ultraviolet radiation.",
              "It is dissipated as low-quality metabolic heat during cellular respiration and lost via unconsumed biomass and waste.",
              "It is stored indefinitely in decomposer spores."
            ],
            "correctIndex": 2,
            "explanation": "The Second Law of Thermodynamics dictates that energy transformations are never 100% efficient; each transfer results in increased entropy. Roughly 90% of biomass energy is lost at each trophic step as metabolic heat through respiration, movement, and undigested waste.",
            "distractorTip": "Energy is NOT recycled; it flows through ecosystems in one direction, dissipating as low-quality metabolic heat."
          }
        ]
      },
      {
        "id": 106,
        "unitIndex": 1,
        "levelNumber": 6,
        "uniqueKey": "apes-u1-l6",
        "topicNumber": "Unit 1 Boss",
        "name": "Apex Ecosystem Crucible",
        "subtitle": "Agricultural runoff, nitrogen loading, and aquatic hypoxia synthesis",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "es1-l6-q1",
            "stem": "Excess synthetic nitrate and phosphate fertilizer runoff from Midwestern agricultural fields drains down the Mississippi River into the Gulf of Mexico. Which sequence correctly describes the biochemical chain of events leading to the seasonal Gulf \"Dead Zone\"?",
            "options": [
              "Algae consume all dissolved oxygen through photosynthetic respiration during daylight.",
              "Fertilizer chemicals directly poison fish through neurotoxic bioaccumulation.",
              "Nutrient enrichment triggers an explosive algal bloom $\\to$ algae die and sink $\\to$ aerobic decomposers proliferate and consume dissolved oxygen $\\to$ widespread aquatic hypoxia.",
              "Nitrogen gas bubbles out of solution, evaporating the water column."
            ],
            "correctIndex": 2,
            "explanation": "Cultural eutrophication occurs when excess nutrients cause algae overgrowth. When the short-lived algae die, aerobic decomposer bacteria multiply rapidly, consuming dissolved oxygen (BOD spikes) and causing hypoxia ($DO < 2\\,\\text{mg/L}$) that kills or displaces marine life.",
            "distractorTip": "Notice the key agent: It is NOT living algae that consume the oxygen—it is the AEROBIC BACTERIA decomposing dead algae that deplete the oxygen!"
          },
          {
            "id": "es1-l6-q2",
            "stem": "Why do higher trophic levels (such as apex predatory eagles or polar bears) have vastly smaller total populations and biomass than primary producers in the same ecosystem?",
            "options": [
              "Decomposers consume all available nitrogen before apex predators can access it.",
              "Apex predators produce fewer chromosomes per gamete.",
              "Sunlight is completely absorbed by primary consumers.",
              "The Second Law of Thermodynamics dictates that energy is degraded into metabolic heat at each trophic transfer, leaving progressively less energy to support high-tier biomass."
            ],
            "correctIndex": 3,
            "explanation": "Because roughly $90\\%$ of energy is lost as heat at each trophic step, energy pyramids must narrow rapidly. A vast base of primary producers is energetically required to sustain a small population of apex predators.",
            "distractorTip": "Energy pyramids are always upright and cannot be inverted because energy must obey thermodynamics."
          },
          {
            "id": "apes1-l6-q3",
            "stem": "In an ecological food web, if a disease decimates the population of secondary consumer frogs, what immediate trophic cascade impact is most likely to occur?",
            "options": [
              "Primary consumer herbivorous insect populations will increase, while tertiary consumer snake populations will decline.",
              "Producers will immediately double their photosynthetic rate.",
              "Apex predator eagle populations will increase tenfold.",
              "Decomposers will cease mineral recycling."
            ],
            "correctIndex": 0,
            "explanation": "Removing intermediate secondary consumers releases primary consumers (insects) from predation pressure, causing their population to increase. Simultaneously, higher-level carnivores that feed on frogs (snakes) lose a major food source, causing their population to decline.",
            "distractorTip": "Trace food web shifts: Prey of the removed species increases (less predation); Predators of the removed species decrease (less food)."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Unit 2: The Living World: Biodiversity",
    "shortTitle": "Unit 2: Biodiversity",
    "description": "Ecosystem services (provisioning, regulating, cultural, supporting), island biogeography, ecological tolerance, natural disruptions, adaptations, and primary/secondary succession",
    "examWeight": "6–8% of AP Exam",
    "biome": {
      "name": "Coral Atoll & Archipelago Ridge",
      "icon": "🏝️",
      "accentColor": "#0EA5E9",
      "secondaryColor": "#0284C7",
      "groundGradient": "from-sky-100 via-cyan-50 to-blue-100",
      "cardBorder": "border-sky-500",
      "trailColor": "#0ea5e9",
      "nodeRing": "ring-sky-400/40",
      "skyTint": "from-sky-50 to-blue-50/30"
    },
    "levels": [
      {
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "apes-u2-l1",
        "topicNumber": "Topic 2.1 & 2.2",
        "name": "Biodiversity & Four Ecosystem Services",
        "subtitle": "Provisioning, regulating, supporting, and cultural services",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es2-l1-q1",
            "stem": "Wetlands absorb storm surge waters and filter excess sediments and pollutants from agricultural runoff. These two functions are examples of which category of ecosystem service?",
            "options": [
              "Regulating services",
              "Provisioning services",
              "Cultural services",
              "Commercial extraction services"
            ],
            "correctIndex": 0,
            "explanation": "Regulating services are natural processes that regulate environmental conditions—such as flood control, water purification, pollination, disease regulation, and carbon sequestration.",
            "distractorTip": "Provisioning = physical goods (timber, crops, drinking water); Regulating = control processes (flood mitigation, climate buffer); Supporting = basic cycle foundations; Cultural = recreation/ecotourism."
          },
          {
            "id": "es2-l1-q2",
            "stem": "A wild forest provides timber for construction, medicinal plants for pharmaceutical research, and clean fresh drinking water. These tangible, harvestable products are classified as:",
            "options": [
              "Regulating services",
              "Provisioning services",
              "Supporting services",
              "Cultural services"
            ],
            "correctIndex": 1,
            "explanation": "Provisioning services encompass any type of material or energy output directly harvested or extracted from nature by humans (e.g., food, timber, fuel, natural medicines).",
            "distractorTip": "If humans can physically harvest or bottle the item for direct consumption, it is a Provisioning service."
          },
          {
            "id": "apes2-l1-q3",
            "stem": "Wetland ecosystems provide water purification by filtering agricultural sediments and heavy metals, store floodwaters to reduce downstream property damage, and recharge municipal aquifers. These benefits are classified as which category of ecosystem service?",
            "options": [
              "Provisioning services",
              "Cultural services",
              "Supporting services",
              "Regulating services"
            ],
            "correctIndex": 3,
            "explanation": "Regulating services are benefits obtained from the regulation of ecosystem processes, including water purification, flood mitigation, climate regulation, pollination, and disease vector control.",
            "distractorTip": "Four Ecosystem Services: Provisioning = goods extracted (lumber, food); Regulating = processes moderated (flood control, water filtration); Cultural = recreation/beauty; Supporting = underlying processes (soil formation, photosynthesis)."
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "apes-u2-l2",
        "topicNumber": "Topic 2.3",
        "name": "Island Biogeography Theory",
        "subtitle": "MacArthur & Wilson: Island size and distance from mainland",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es2-l2-q1",
            "stem": "According to the MacArthur-Wilson Theory of Island Biogeography, which island should support the highest species richness in dynamic equilibrium?",
            "options": [
              "A small island located close to the mainland.",
              "A small island located far from the mainland.",
              "A large island located close to the mainland.",
              "A large island located far from the mainland."
            ],
            "correctIndex": 2,
            "explanation": "Large islands provide more habitat niches and lower extinction rates; proximity to the mainland ensures high immigration/colonization rates. Thus, large and near islands possess the highest species richness.",
            "distractorTip": "High Immigration = Close to mainland. Low Extinction = Large land area. Winner: Large & Close."
          },
          {
            "id": "es2-l2-q2",
            "stem": "Why are island specialist species particularly vulnerable to extinction when invasive species are introduced by humans?",
            "options": [
              "Island ecosystems have zero primary productivity.",
              "Island species possess higher genetic diversity than mainland populations.",
              "Island species reproduce at exponential rates that exhaust food supplies.",
              "Island specialists evolved in isolated environments with narrow ecological niches and no evolutionary defenses against novel continental predators or competitors."
            ],
            "correctIndex": 3,
            "explanation": "Geographic isolation leads island endemics to evolve narrow specialized niches and lose defensive behaviors against predators (e.g., flightless dodo birds). Invasive generalist species easily outcompete and prey upon them.",
            "distractorTip": "Island endemics are classic ecological specialists with small populations and low genetic diversity."
          },
          {
            "id": "apes2-l2-q3",
            "stem": "According to the MacArthur-Wilson Theory of Island Biogeography, which type of island will support the highest equilibrium species richness?",
            "options": [
              "A small island located far from the continental mainland.",
              "A large island located close to the continental mainland.",
              "A small island located close to the continental mainland.",
              "A large island located far from the continental mainland."
            ],
            "correctIndex": 1,
            "explanation": "Species richness on an island represents a dynamic equilibrium between immigration and extinction. Large islands have higher habitat diversity and lower extinction rates. Islands close to the mainland have higher immigration rates. Therefore, large and near islands possess the highest biodiversity.",
            "distractorTip": "Island Biogeography: Highest species richness = LARGE size (lower extinction) + NEAR mainland (higher immigration)."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "apes-u2-l3",
        "topicNumber": "Topic 2.4 & 2.5",
        "name": "Ecological Tolerance & Natural Disruptions",
        "subtitle": "Optimal ranges, zones of physiological stress, and Milankovitch cycles",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es2-l3-q1",
            "stem": "Trout thrive in water temperatures between $12^\\circ\\text{C}$ and $18^\\circ\\text{C}$. When thermal pollution elevates river temperatures to $24^\\circ\\text{C}$, adult trout survive but stop reproducing and experience stunted growth. At $24^\\circ\\text{C}$, the trout are in their:",
            "options": [
              "Zone of physiological stress",
              "Optimum range",
              "Zone of intolerance",
              "Competitive exclusion zone"
            ],
            "correctIndex": 0,
            "explanation": "Within an organism’s range of tolerance, the zone of physiological stress allows survival, but conditions are suboptimal, impairing growth, feeding, and reproduction. The zone of intolerance results in death.",
            "distractorTip": "Optimum = Thriving and reproducing; Physiological Stress = Surviving but suffering/not reproducing; Intolerance = Death."
          },
          {
            "id": "es2-l3-q2",
            "stem": "Periodic changes in Earth’s orbital eccentricity, axial tilt, and precession over tens of thousands of years are known as:",
            "options": [
              "Hadley cell oscillations",
              "Milankovitch cycles (which drive historical glacial and interglacial climate transitions)",
              "Coriolis tectonic pulses",
              "El Niño Southern Oscillations"
            ],
            "correctIndex": 1,
            "explanation": "Milankovitch cycles describe subtle variations in Earth’s orbit (eccentricity), tilt (obliquity), and wobble (precession) over 20,000 to 100,000-year cycles, naturally triggering ice ages and warm interglacials.",
            "distractorTip": "Milankovitch cycles explain long-term natural climate change over geologic timescales."
          },
          {
            "id": "apes2-l3-q3",
            "stem": "A river experiencing thermal pollution from an industrial power plant discharge increases in temperature from $18^\\circ\\text{C}$ to $32^\\circ\\text{C}$. Cold-water trout die off, while warm-water carp survive and reproduce. This scenario illustrates:",
            "options": [
              "Genetic drift in an isolated population.",
              "Competitive exclusion by an invasive species.",
              "Ecological tolerance, where trout have a narrow thermal range of tolerance and carp have a broader range.",
              "Secondary succession following a volcanic blast."
            ],
            "correctIndex": 2,
            "explanation": "Ecological tolerance refers to the range of abiotic conditions (temperature, salinity, pH, dissolved oxygen) in which an organism can survive and reproduce. Exceeding a species' optimum range causes physiological stress and mortality.",
            "distractorTip": "Ecological tolerance: Organisms experience physiological stress and death when abiotic conditions move outside their tolerance range."
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "apes-u2-l4",
        "topicNumber": "Topic 2.6 & 2.7",
        "name": "Evolutionary Adaptations & Succession",
        "subtitle": "Primary vs secondary succession, pioneer species, and climax communities",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es2-l4-q1",
            "stem": "Following the retreat of a glacier, bare volcanic granite rock is exposed with zero pre-existing soil. Which process of ecological recovery will occur, and which pioneer organism typically initiates soil formation?",
            "options": [
              "Primary succession, initiated by burrowing earthworms.",
              "Secondary succession, initiated by fast-growing pioneer deciduous trees.",
              "Primary succession, initiated by lichens and mosses that chemically weather rock into thin soil.",
              "Secondary succession, initiated by annual weed grasses."
            ],
            "correctIndex": 2,
            "explanation": "Primary succession begins in lifeless areas with NO soil (e.g., cooled lava flows, retreating glaciers). Pioneer lichens and mosses secrete acids that weather bare rock, creating the earliest organic soil layer.",
            "distractorTip": "NO SOIL at start = PRIMARY succession (lichens on rock). SOIL INTACT at start (after fire or flood) = SECONDARY succession."
          },
          {
            "id": "es2-l4-q2",
            "stem": "An abandoned agricultural cornfield slowly transitions over a century into an oak-hickory hardwood forest. Why does this secondary succession proceed much more rapidly than primary succession on cooled lava?",
            "options": [
              "Agricultural land cannot be colonized by pioneer weeds.",
              "Primary succession lacks sunlight.",
              "Secondary succession requires zero rainfall.",
              "Intact nutrient-rich soil and an existing seed bank are already present in the substrate."
            ],
            "correctIndex": 3,
            "explanation": "Secondary succession starts with intact soil containing organic matter, beneficial soil microbes, and dormant seeds, eliminating the centuries-long process of rock weathering required in primary succession.",
            "distractorTip": "Soil presence is the critical variable separating primary from secondary succession speed."
          },
          {
            "id": "apes2-l4-q3",
            "stem": "Following the retreat of a glacier, bare rock is exposed with zero pre-existing soil. Which pioneer species is most critical for initiating primary ecological succession by breaking down rock to form primitive soil?",
            "options": [
              "Lichens and mosses that secrete mild organic acids",
              "Fast-growing hardwood oak trees",
              "Annual agricultural grasses",
              "Deep-rooted nitrogen-fixing shrubs"
            ],
            "correctIndex": 0,
            "explanation": "Primary succession begins on lifeless bare rock or volcanic basalt devoid of soil. Pioneer species like lichens (symbiotic fungi and algae) colonize bare rock, secreting acids that weather the mineral substrate, accumulating organic matter to form the first layer of soil.",
            "distractorTip": "Primary succession starts with NO SOIL (bare rock $\\to$ lichens pioneer); Secondary succession starts WITH SOIL already intact (after forest fire)."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "apes-u2-l5",
        "topicNumber": "Unit 2 Boss",
        "name": "Apex Biodiversity Crucible",
        "subtitle": "Habitat fragmentation, wildlife corridors, and genetic diversity loss",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "es2-l5-q1",
            "stem": "A four-lane interstate highway is constructed through a contiguous old-growth forest, cleaving it into two isolated woodland parcels. Which ecological consequence is most likely to occur in the fragmented parcels?",
            "options": [
              "Increased \"edge effect\" microclimates (more wind, sunlight, and invasive species) along with reduced gene flow and inbreeding in isolated animal populations.",
              "An immediate surge in interior forest specialist bird populations.",
              "A complete cessation of all primary ecological succession.",
              "A uniform decrease in all forest edge predator species."
            ],
            "correctIndex": 0,
            "explanation": "Habitat fragmentation creates artificial edges with higher wind and temperatures, favoring edge species and invasives while displacing interior specialists. Isolated populations suffer genetic drift and inbreeding depression.",
            "distractorTip": "Wildlife corridors (overpasses/underpasses) are the primary engineering solution to reconnect fragmented populations and restore gene flow."
          },
          {
            "id": "es2-l5-q2",
            "stem": "Why does high genetic diversity within a population of endangered Florida panthers improve their long-term resilience to environmental disturbances compared to a genetically uniform population?",
            "options": [
              "Genetic diversity guarantees that every individual grows to a larger physical size.",
              "A genetically diverse population is more likely to contain individuals with pre-existing genetic traits that can survive a novel disease outbreak or climate shift.",
              "Genetically uniform populations are completely immune to viral infections.",
              "High genetic diversity eliminates the need for primary producers."
            ],
            "correctIndex": 1,
            "explanation": "Genetic diversity provides the raw material for natural selection. If a new pathogen strikes, genetic variation ensures some individuals possess resistance alleles to survive and reproduce, preventing population extinction.",
            "distractorTip": "Genetic diversity = population resilience against unexpected disease, climate shocks, or habitat changes."
          },
          {
            "id": "apes2-l5-q3",
            "stem": "Why are generalist species typically more resilient to sudden human-induced environmental disruptions than specialist species?",
            "options": [
              "Generalists have smaller population sizes and lower genetic diversity.",
              "Generalists reproduce only during specific seasons of the year.",
              "Generalists occupy broad ecological niches, tolerate a wide range of abiotic conditions, and utilize diverse food resources, allowing them to adapt when conditions change.",
              "Generalists are always apex predators with no natural competitors."
            ],
            "correctIndex": 2,
            "explanation": "Generalists (e.g. raccoons, coyotes, rats) have broad niches, varied diets, and wide environmental tolerances, allowing them to thrive during habitat alterations. Specialists (e.g. pandas, koalas) have narrow niches and specific food requirements, making them highly vulnerable to extinction.",
            "distractorTip": "Generalists thrive in changing/disrupted environments; Specialists thrive in constant, stable environments."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Unit 3: Populations",
    "shortTitle": "Unit 3: Populations",
    "description": "Generalist vs specialist species, K-selected vs r-selected species, survivorship curves, carrying capacity & overshoot, age-structure diagrams, TFR, Rule of 70, and the Demographic Transition Model (DTM)",
    "examWeight": "10–15% of AP Exam",
    "biome": {
      "name": "Savanna Basin & Demographic Plateau",
      "icon": "📊",
      "accentColor": "#F59E0B",
      "secondaryColor": "#D97706",
      "groundGradient": "from-amber-100 via-orange-50 to-yellow-100",
      "cardBorder": "border-amber-500",
      "trailColor": "#f59e0b",
      "nodeRing": "ring-amber-400/40",
      "skyTint": "from-amber-50 to-orange-50/30"
    },
    "levels": [
      {
        "id": 301,
        "unitIndex": 3,
        "levelNumber": 1,
        "uniqueKey": "apes-u3-l1",
        "topicNumber": "Topic 3.1 & 3.2",
        "name": "Generalist vs. Specialist & Reproductive Strategies",
        "subtitle": "K-selected vs r-selected reproductive traits",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es3-l1-q1",
            "stem": "Which set of characteristics accurately describes a K-selected species, such as an African elephant or human?",
            "options": [
              "Early reproduction, short lifespans, and boom-and-bust population cycles.",
              "Small body size, rapid sexual maturity, thousands of eggs, and zero parental care.",
              "Large body size, few offspring per reproductive event, significant parental investment, and high survivorship of juveniles.",
              "High reproductive capacity with extreme vulnerability to carrying capacity."
            ],
            "correctIndex": 2,
            "explanation": "K-selected species invest heavily in a small number of offspring, grow slowly to large adult size, provide extensive parental care, and typically maintain population sizes near environmental carrying capacity ($K$).",
            "distractorTip": "K-selected = Quality over quantity (elephants, whales, humans); r-selected = Quantity over quality (insects, frogs, weeds)."
          },
          {
            "id": "es3-l1-q2",
            "stem": "When an invasive pest species is introduced into a rapidly changing, disturbed ecosystem, why do Generalist species typically outcompete Specialist species?",
            "options": [
              "Specialists have zero resource competition in disturbed habitats.",
              "Specialists reproduce faster and produce more offspring than generalists.",
              "Generalists are strictly primary autotrophic producers.",
              "Generalists have broad ecological niches, tolerate a wide range of environmental conditions, and can consume diverse food sources."
            ],
            "correctIndex": 3,
            "explanation": "Generalists (like raccoons, coyotes, and dandelions) thrive in changing environments because they adapt to varied diets and microclimates, whereas specialists (like koalas or giant pandas) depend on specific food or habitat and suffer when conditions shift.",
            "distractorTip": "Constant, stable environment = Specialist advantage. Disturbed, fluctuating environment = Generalist advantage."
          },
          {
            "id": "apes3-l1-q3",
            "stem": "Which set of reproductive characteristics is characteristic of a $K$-selected species (such as elephants, whales, or humans)?",
            "options": [
              "Small body size, rapid sexual maturity, producing thousands of offspring, and zero parental care.",
              "Large body size, late sexual maturity, producing few offspring per reproductive event, and investing significant parental care.",
              "High intrinsic growth rate ($r$) and frequent population boom-and-bust cycles.",
              "Type III survivorship curve with high early juvenile mortality."
            ],
            "correctIndex": 1,
            "explanation": "$K$-selected species are adapted to stable environments near carrying capacity ($K$). They invest heavily in a small number of offspring, have long lifespans, large body sizes, and high parental investment.",
            "distractorTip": "$K$-selected = large, few offspring, high parental care, stable populations near $K$; $r$-selected = small, many offspring, no parental care, boom-and-bust."
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "apes-u3-l2",
        "topicNumber": "Topic 3.3",
        "name": "Survivorship Curves",
        "subtitle": "Type I, Type II, and Type III mortality patterns",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es3-l2-q1",
            "stem": "Marine sea turtles lay hundreds of eggs on sandy beaches. The vast majority of hatchlings are consumed by predators within days, but the few individuals that survive to adulthood enjoy long lifespans. This survivorship pattern is classified as:",
            "options": [
              "Type III survivorship curve",
              "Type I survivorship curve",
              "Type II survivorship curve",
              "Exponential J-curve"
            ],
            "correctIndex": 0,
            "explanation": "Type III survivorship (common in r-selected species, fish, marine invertebrates, and trees) features extremely high juvenile mortality, with high survival rates for the few individuals reaching reproductive adulthood.",
            "distractorTip": "Type I = Low early mortality, die in old age (humans). Type II = Constant death rate throughout life (birds, rodents). Type III = High early mortality (sea turtles, frogs)."
          },
          {
            "id": "es3-l2-q2",
            "stem": "Songbirds and small rodents display roughly equal probability of mortality at every age throughout their lifespan. Their mortality pattern is represented by:",
            "options": [
              "A convex Type I survivorship curve",
              "A linear Type II survivorship curve",
              "A concave Type III survivorship curve",
              "A parabolic Bell curve"
            ],
            "correctIndex": 1,
            "explanation": "Type II survivorship exhibits a constant mortality rate regardless of age. On a semi-logarithmic graph, it appears as a straight diagonal line sloping downward.",
            "distractorTip": "Type II curve is a constant straight line representing uniform risk of death at all ages."
          },
          {
            "id": "apes3-l2-q3",
            "stem": "A species of marine oyster produces over 100 million eggs per spawning event. Over 99% of larvae are consumed by planktivorous predators within the first 48 hours of life, but individuals that successfully settle onto a coral reef and grow a shell survive for decades. Which survivorship curve does this species exhibit?",
            "options": [
              "Type I survivorship curve",
              "Type II survivorship curve",
              "Type III survivorship curve",
              "Linear exponential curve"
            ],
            "correctIndex": 2,
            "explanation": "Type III survivorship curves are characterized by high juvenile mortality rates early in life, with a high survival probability for the few individuals that reach adulthood (typical of oysters, frogs, insects, and marine fish).",
            "distractorTip": "Type I = high survival until old age (humans, mammals); Type II = constant mortality rate throughout life (songbirds); Type III = high juvenile mortality (oysters, fish, trees)."
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "apes-u3-l3",
        "topicNumber": "Topic 3.4 & 3.5",
        "name": "Carrying Capacity, Overshoot & Limiting Factors",
        "subtitle": "Exponential vs logistic growth, overshoot, and dieback",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es3-l3-q1",
            "stem": "When a reindeer population introduced to an isolated island exceeds the habitat’s carrying capacity ($K$), what ecological outcome typically follows?",
            "options": [
              "The population stabilizes instantly at carrying capacity with zero deaths.",
              "A permanent increase in carrying capacity.",
              "Overshoot followed by resource depletion and a severe population crash (dieback).",
              "The reindeer mutate into r-selected generalists."
            ],
            "correctIndex": 2,
            "explanation": "When a population overshoots carrying capacity, overgrazing and starvation rapidly deplete critical forage resources, precipitating a steep population dieback/crash.",
            "distractorTip": "Overshoot occurs because of reproductive time lags; it is inevitably followed by resource collapse and dieback."
          },
          {
            "id": "es3-l3-q2",
            "stem": "Which factor limiting population growth is classified as Density-INDEPENDENT?",
            "options": [
              "Predation by an apex carnivore pack",
              "Transmission of an infectious bacterial parasite",
              "Competition for limited nesting sites",
              "A catastrophic forest fire or flash flood"
            ],
            "correctIndex": 3,
            "explanation": "Density-independent factors (weather, natural disasters, volcanic eruptions, seasonal freezes) kill organisms regardless of population density. Disease, competition, and predation are density-dependent.",
            "distractorTip": "Density-dependent = intensity scales with crowd size. Density-independent = natural disaster strikes regardless of how many individuals are present."
          },
          {
            "id": "apes3-l3-q3",
            "stem": "When a reindeer herd introduced to St. Matthew Island exponentially exceeded its carrying capacity ($N > K$), what was the immediate demographic consequence?",
            "options": [
              "The population underwent overshoot, depleted available lichen food resources, and experienced a catastrophic population crash (dieback).",
              "The carrying capacity of the island permanently doubled.",
              "The reindeer evolved into an $r$-selected species within one generation.",
              "The herd established a stable equilibrium without starvation."
            ],
            "correctIndex": 0,
            "explanation": "When a population exceeds environmental carrying capacity (overshoot), resource depletion (overgrazing) degrades the habitat, leading to widespread famine, disease, and a severe population dieback/crash.",
            "distractorTip": "Overshoot occurs when population exceeds carrying capacity $K$, inevitably followed by resource depletion and a population crash (dieback)."
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "apes-u3-l4",
        "topicNumber": "Topic 3.6",
        "name": "Age-Structure Diagrams (Population Pyramids)",
        "subtitle": "Rapid growth, stable columns, and negative population momentum",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es3-l4-q1",
            "stem": "An age-structure diagram with a very broad base tapering sharply to a narrow peak indicates that the country’s population is:",
            "options": [
              "Rapidly growing, because a large proportion of the population is in the pre-reproductive age category (0–14 years).",
              "Experiencing negative population growth and rapid aging.",
              "Completely stabilized with replacement-level fertility.",
              "Composed primarily of post-reproductive elderly citizens."
            ],
            "correctIndex": 0,
            "explanation": "A triangular pyramid with a wide base signifies high birth rates and a young population. Because a massive cohort of young people will soon enter their reproductive years, the population possesses strong built-in demographic momentum.",
            "distractorTip": "Broad base = Rapid growth (e.g., Nigeria). Column/rectangle = Stable (e.g., USA). Narrow base = Declining (e.g., Japan, Germany)."
          },
          {
            "id": "es3-l4-q2",
            "stem": "A nation’s population pyramid has inverted, with the 0–14 age bracket significantly narrower than the 45–60 age bracket. What socio-economic challenge is this nation most likely to confront?",
            "options": [
              "Severe school overcrowding and an acute shortage of elementary teachers.",
              "A rising dependency ratio with an aging population and a shrinking tax-paying workforce to fund pensions and healthcare.",
              "An unsustainable infant population explosion.",
              "Widespread food famine due to overpopulation."
            ],
            "correctIndex": 1,
            "explanation": "An aging population (like Japan or Italy) faces an inverted pyramid: fewer young workers must financially support a growing elderly cohort (high elderly dependency ratio), straining public healthcare and pension systems.",
            "distractorTip": "Narrow base = Sub-replacement fertility and elderly dependency burden."
          },
          {
            "id": "apes3-l4-q3",
            "stem": "An age-structure diagram for a developing country exhibits a broad pyramid base with over 45% of the population under age 15. Even if total fertility rates immediately drop to replacement level (2.1 children per woman), why will the country's total population continue to expand for decades?",
            "options": [
              "The country's death rate will drop to zero.",
              "Emigration laws prevent citizens from leaving.",
              "Population momentum: the massive cohort of young people currently entering their reproductive years will produce a large absolute number of births.",
              "The country will shift back to Stage 1 of the demographic transition."
            ],
            "correctIndex": 2,
            "explanation": "Population momentum occurs because an age structure dominated by children creates a massive wave of future parents. Even if each couple has only 2 children, the enormous absolute number of reproductive-age couples ensures continued population growth for several generations.",
            "distractorTip": "Population momentum: A youthful age structure guarantees population growth for decades even after fertility drops to replacement level."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "apes-u3-l5",
        "topicNumber": "Topic 3.7 & 3.8",
        "name": "TFR & The Rule of 70 Calculations",
        "subtitle": "Doubling time = 70 / r% and replacement fertility rates",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es3-l5-q1",
            "stem": "A developing nation has an annual population growth rate of $r = 3.5\\%$. According to the Rule of 70, in approximately how many years will this nation’s population double?",
            "options": [
              "$245\\text{ years}$",
              "$35\\text{ years}$",
              "$20\\text{ years}$",
              "$10\\text{ years}$"
            ],
            "correctIndex": 2,
            "explanation": "The Rule of 70 states that Doubling Time $= \\frac{70}{r\\%}$, where $r$ is entered directly as a percentage (not a decimal). $\\text{Doubling Time} = \\frac{70}{3.5} = 20\\text{ years}$.",
            "distractorTip": "Do NOT convert the percentage to a decimal! Divide $70$ by $3.5$, NOT $70 / 0.035$."
          },
          {
            "id": "es3-l5-q2",
            "stem": "Which socio-economic factor is universally recognized as the single most effective intervention for reducing Total Fertility Rate (TFR) in developing countries?",
            "options": [
              "Constructing municipal hydroelectric dams.",
              "Distributing free chemical fertilizers to subsistence farmers.",
              "Mandating universal military conscription.",
              "Increasing educational opportunities, literacy, and economic autonomy for girls and women."
            ],
            "correctIndex": 3,
            "explanation": "Educating women delays marriage, increases access to family planning and career opportunities, and drastically reduces infant mortality, leading women to choose smaller family sizes and lowering TFR.",
            "distractorTip": "Female literacy and empowerment are the premier solutions for lowering TFR on AP Environmental Science exams."
          },
          {
            "id": "apes3-l5-q3",
            "stem": "A developing country has a constant annual population growth rate of 3.5%. According to the Rule of 70, how many years will it take for this country's population to double?",
            "options": [
              "70 years",
              "35 years",
              "14 years",
              "20 years"
            ],
            "correctIndex": 3,
            "explanation": "The Rule of 70 calculates doubling time: $\\text{Doubling Time} = \\frac{70}{\\text{Growth Rate } (\\%)} = \\frac{70}{3.5} = 20\\text{ years}$.",
            "distractorTip": "Rule of 70: Doubling Time = $70 / r$ (keep $r$ as a percentage, do not convert 3.5% to 0.035 in this formula!)."
          }
        ]
      },
      {
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "apes-u3-l6",
        "topicNumber": "Topic 3.9 & Unit 3 Boss",
        "name": "The Demographic Transition Model (DTM)",
        "subtitle": "Stages 1–4 birth/death rates and industrialization synthesis",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "es3-l6-q1",
            "stem": "In the Demographic Transition Model (DTM), why does a country in Stage 2 (Transitional) experience explosive population growth?",
            "options": [
              "Death rates plummet due to improvements in food supply, sanitation, and medicine, while birth rates remain stubbornly high.",
              "Birth rates spike sharply upward while death rates remain constant.",
              "Immigration from foreign nations exceeds domestic birth rates.",
              "Both birth and death rates reach replacement levels."
            ],
            "correctIndex": 0,
            "explanation": "In Stage 2, public health, clean water, and food security drop the Crude Death Rate (CDR) rapidly. However, cultural traditions keep Crude Birth Rate (CBR) elevated, creating a large gap between births and deaths that produces exponential population growth.",
            "distractorTip": "Stage 2 growth is driven by FALLING DEATH RATES, not rising birth rates!"
          },
          {
            "id": "es3-l6-q2",
            "stem": "A nation transitions from Stage 3 to Stage 4 of the DTM. What demographic indicators characterize Stage 4 (Post-Industrial)?",
            "options": [
              "High birth rates and high death rates produce a stagnant, tiny population.",
              "Low birth rates match low death rates, stabilizing the total population at a high level or entering slight negative growth.",
              "Death rates exceed birth rates due to lack of medical facilities.",
              "Total fertility rate rises above 4.5 children per woman."
            ],
            "correctIndex": 1,
            "explanation": "In Stage 4, widespread female education, urbanization, and contraception bring birth rates down to equalize with low death rates, stabilizing the population size (e.g., US, Canada, Western Europe).",
            "distractorTip": "Stage 1: High CBR/CDR (stable low pop). Stage 2: Falling CDR, high CBR (boom). Stage 3: Falling CBR (slowing growth). Stage 4: Low CBR/CDR (stable high pop)."
          },
          {
            "id": "apes3-l6-q3",
            "stem": "During Stage 2 (Transitional Stage) of the Demographic Transition Model, what demographic shift causes rapid, explosive population growth?",
            "options": [
              "Birth rates spike upward while death rates remain constant.",
              "Death rates plummet rapidly due to improved sanitation, clean water, and food security, while birth rates remain stubbornly high.",
              "Both birth and death rates drop to equal low levels.",
              "Massive immigration quadruples the labor force."
            ],
            "correctIndex": 1,
            "explanation": "In Stage 2, death rates drop dramatically due to advances in public health, clean water, hygiene, and nutrition. However, cultural norms maintain high birth rates, opening a wide gap between births and deaths ($CBR - CDR$), causing rapid population growth.",
            "distractorTip": "Stage 2 population explosion is caused by falling DEATH rates, NOT rising birth rates!"
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Unit 4: Earth Systems & Resources",
    "shortTitle": "Unit 4: Earth Systems",
    "description": "Plate tectonics, soil horizons & soil texture triangle, atmospheric layers & Hadley cells, watersheds, solar insolation, rain shadow effect, and El Niño/La Niña (ENSO)",
    "examWeight": "10–15% of AP Exam",
    "biome": {
      "name": "Tectonic Rift & Atmospheric Ridge",
      "icon": "🌍",
      "accentColor": "#8B5CF6",
      "secondaryColor": "#7C3AED",
      "groundGradient": "from-purple-100 via-indigo-50 to-blue-100",
      "cardBorder": "border-purple-500",
      "trailColor": "#8b5cf6",
      "nodeRing": "ring-purple-400/40",
      "skyTint": "from-purple-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "apes-u4-l1",
        "topicNumber": "Topic 4.1",
        "name": "Plate Tectonics & Continental Boundaries",
        "subtitle": "Convergent, divergent, transform plates and subduction zones",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es4-l1-q1",
            "stem": "Deep ocean trenches, volcanic island arcs, and powerful subduction earthquakes occur along which type of plate tectonic boundary?",
            "options": [
              "Transform fault boundary like the San Andreas Fault",
              "Divergent boundary along a mid-ocean ridge",
              "Convergent boundary between an oceanic plate and a continental plate (or two oceanic plates)",
              "Passive continental margin"
            ],
            "correctIndex": 2,
            "explanation": "At convergent boundaries where dense oceanic crust collides with continental or younger oceanic crust, the denser oceanic plate subducts into the asthenosphere, melting and forming deep oceanic trenches and volcanic arcs.",
            "distractorTip": "Subduction and deep trenches ONLY occur at CONVERGENT boundaries. Divergent creates seafloor spreading; Transform creates lateral earthquakes with no magma."
          },
          {
            "id": "es4-l1-q2",
            "stem": "New oceanic crust is continuously formed by upwelling basaltic magma at which tectonic feature?",
            "options": [
              "Deep ocean subduction trenches",
              "Convergent continental-continental collision zones like the Himalayas",
              "Transform faults",
              "Divergent boundaries along mid-ocean spreading ridges (such as the Mid-Atlantic Ridge)"
            ],
            "correctIndex": 3,
            "explanation": "Divergent plate boundaries pull apart, allowing molten magma from the mantle to ascend, cool, and form new oceanic lithospheric crust along mid-ocean ridges.",
            "distractorTip": "Divergent = Crust CREATED. Convergent = Crust DESTROYED/SUBDUCTED. Transform = Crust CONSERVED (slides past)."
          },
          {
            "id": "apes4-l1-q3",
            "stem": "At a convergent tectonic boundary where an oceanic plate collides with a continental plate, which geological feature is formed as the denser oceanic slab sinks into the asthenosphere?",
            "options": [
              "A deep ocean trench parallel to a volcanic mountain arc on the continent.",
              "A mid-ocean spreading ridge with rift valleys.",
              "A shallow transform fault line with zero volcanism.",
              "A continental rift valley like the East African Rift."
            ],
            "correctIndex": 0,
            "explanation": "Oceanic crust is denser (basaltic) than continental crust (granitic). When they converge, the oceanic plate subducts into the mantle, carving an oceanic trench offshore and melting mantle rock to feed a volcanic arc on the continental margin (e.g. the Andes or Cascades).",
            "distractorTip": "Oceanic-Continental subduction = Deep ocean trench + Continental volcanic mountain arc (e.g. Andes, Cascades)."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "apes-u4-l2",
        "topicNumber": "Topic 4.2 & 4.3",
        "name": "Soil Horizons & Soil Properties",
        "subtitle": "O, A, B, C horizons, soil texture triangle, and permeability",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es4-l2-q1",
            "stem": "A soil sample is tested and found to contain $40\\%$ sand, $40\\%$ silt, and $20\\%$ clay. Using the soil texture triangle, what is the classification of this soil, and why is it ideal for commercial agriculture?",
            "options": [
              "Loam; it provides a balanced mix of good drainage/aeration (from sand) and excellent water/nutrient retention (from silt and clay).",
              "Pure clay; it completely seals water from draining.",
              "Pure sand; it allows water to drain immediately without absorption.",
              "Gravelly silt; it lacks organic matter."
            ],
            "correctIndex": 0,
            "explanation": "A mix of roughly $40\\%$ sand, $40\\%$ silt, and $20\\%$ clay forms a loam. Loams have optimal pore spacing: large pores for root respiration and drainage, and small clay/silt pores for moisture and nutrient cation retention.",
            "distractorTip": "Loam is the premier agricultural soil texture. Pure sand drains too fast; pure clay causes waterlogging and root rot."
          },
          {
            "id": "es4-l2-q2",
            "stem": "In a mature forest soil profile, which horizon contains the highest concentration of decomposed organic humus and dark biological topsoil?",
            "options": [
              "The C Horizon (Partially weathered parent rock)",
              "The A Horizon (Topsoil)",
              "The B Horizon (Subsoil mineral accumulation)",
              "The R Horizon (Bedrock)"
            ],
            "correctIndex": 1,
            "explanation": "The O horizon is surface leaf litter. Directly beneath it, the A horizon (topsoil) combines mineral particles with decomposed organic matter (humus), harboring the highest microbial activity and plant root density.",
            "distractorTip": "Horizon order from surface down: O (Organic litter) $\\to$ A (Topsoil/humus) $\\to$ E (Eluviation/leached) $\\to$ B (Subsoil) $\\to$ C (Weathered rock) $\\to$ R (Bedrock)."
          },
          {
            "id": "apes4-l2-q3",
            "stem": "A soil sample composed of 70% sand, 20% silt, and 10% clay will exhibit which combination of physical properties?",
            "options": [
              "Extremely low water drainage and high nutrient retention capacity.",
              "High water permeability, rapid drainage, and low water-holding capacity.",
              "Heavy soil compaction prone to waterlogging.",
              "Zero aeration for plant root respiration."
            ],
            "correctIndex": 1,
            "explanation": "Sand particles are large with large pore spaces between them, leading to high permeability and rapid infiltration. However, sandy soils have poor water-holding capacity and low cation exchange capacity (CEC), requiring frequent irrigation and fertilizing.",
            "distractorTip": "Sand = large pores, high permeability, rapid drainage; Clay = tiny pores, low permeability, high water/nutrient retention."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "apes-u4-l3",
        "topicNumber": "Topic 4.4 & 4.5",
        "name": "Atmospheric Layers & Global Wind Patterns",
        "subtitle": "Troposphere, Stratosphere, Hadley cells, and the Coriolis effect",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es4-l3-q1",
            "stem": "In which atmospheric layer does virtually all human weather occur, containing over $75\\%$ of total atmospheric mass and decreasing in temperature with increasing altitude?",
            "options": [
              "The Mesosphere",
              "The Stratosphere",
              "The Troposphere",
              "The Thermosphere"
            ],
            "correctIndex": 2,
            "explanation": "The troposphere extends from Earth's surface to about 10–15 km altitude. It contains nearly all atmospheric water vapor and weather phenomena, and cools with altitude because it is heated from below by Earth's surface.",
            "distractorTip": "Weather occurs in the TROPOSPHERE. The protective ozone layer is in the STRATOSPHERE."
          },
          {
            "id": "es4-l3-q2",
            "stem": "At the equator ($0^\\circ$ latitude), intense solar heating causes warm, moist air to rise, cool adiabatically, and produce heavy precipitation. The dry air then travels poleward and sinks at $30^\\circ$ North and South latitude, creating the world's great deserts. This atmospheric circulation loop is called:",
            "options": [
              "A Coriolis vortex",
              "A Ferrel cell",
              "A Polar cell",
              "A Hadley cell"
            ],
            "correctIndex": 3,
            "explanation": "Hadley cells are tropical atmospheric convection loops: warm air rises at the equator (ITCZ, low pressure, rainforests), travels aloft, and sinks at $30^\\circ$ N and S (subtropical high pressure, dry deserts like the Sahara and Sonoran).",
            "distractorTip": "Equator ($0^\\circ$) = Rising moist air (Rainforests). $30^\\circ$ N/S = Sinking dry air (Deserts). Driven by Hadley cells."
          },
          {
            "id": "apes4-l3-q3",
            "stem": "In which atmospheric layer does virtually all Earth weather occur, and where is atmospheric pressure at its highest?",
            "options": [
              "Stratosphere",
              "Thermosphere",
              "Troposphere",
              "Mesosphere"
            ],
            "correctIndex": 2,
            "explanation": "The troposphere extends from Earth's surface to approximately 10-15 km altitude. It contains 75-80% of atmospheric mass, the highest air pressure, and virtually all water vapor, clouds, and convective weather systems.",
            "distractorTip": "Troposphere = weather and highest density; Stratosphere = ozone layer ($O_3$) that absorbs UV radiation."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "apes-u4-l4",
        "topicNumber": "Topic 4.6 & 4.7",
        "name": "Watersheds & Solar Insolation",
        "subtitle": "Drainage basins, slope, and Earth's 23.5° axial tilt",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es4-l4-q1",
            "stem": "What is the primary astronomical cause of Earth’s distinct seasonal changes throughout the year?",
            "options": [
              "Earth’s constant $23.5^\\circ$ axial tilt relative to its orbital plane, causing variations in the angle of solar insolation and daylight duration.",
              "The elliptical orbit bringing Earth significantly closer to the Sun in July.",
              "Periodic sunspot activity alternating every 6 months.",
              "The moon blocking solar radiation during equinoxes."
            ],
            "correctIndex": 0,
            "explanation": "Earth's seasons are caused exclusively by its $23.5^\\circ$ axial tilt. When the Northern Hemisphere is tilted toward the Sun (June solstice), solar rays strike at a direct perpendicular angle (higher insolation), producing summer.",
            "distractorTip": "Seasons are NOT caused by distance to the Sun! Earth is actually closest to the Sun (perihelion) in January during Northern Hemisphere winter."
          },
          {
            "id": "es4-l4-q2",
            "stem": "In a watershed, how does planting forested riparian buffer zones along agricultural stream banks reduce nutrient pollution in downstream rivers?",
            "options": [
              "Trees evaporate all incoming river water into the upper stratosphere.",
              "Vegetation slows surface runoff, intercepts eroded sediments, and tree roots absorb dissolved nitrates and phosphates before they enter the stream.",
              "Tree leaves convert chemical fertilizers into inorganic granite rock.",
              "Riparian roots increase flash flooding velocity."
            ],
            "correctIndex": 1,
            "explanation": "Riparian buffers (vegetated stream banks) act as biological sponges: plant roots absorb excess agricultural nitrogen and phosphorus fertilizers, while ground vegetation filters sediment, keeping waterways clear and clean.",
            "distractorTip": "Riparian buffers = vegetated streamside zones that prevent agricultural runoff from contaminating rivers."
          },
          {
            "id": "apes4-l4-q3",
            "stem": "Why do equatorial regions receive significantly more intense solar radiation (insolation) per square meter than polar regions?",
            "options": [
              "The equator is 50 million miles closer to the Sun.",
              "Solar rays strike the equator at a near-perpendicular $90^\\circ$ angle, concentrating energy over a small surface area and passing through less atmospheric path length.",
              "The greenhouse effect only operates between the Tropics of Cancer and Capricorn.",
              "Polar ice caps absorb 100% of incoming solar infrared light."
            ],
            "correctIndex": 1,
            "explanation": "Due to Earth's curvature, sunlight strikes the equator perpendicularly ($90^\\circ$ angle of incidence), concentrating solar irradiance over a compact surface area. At high latitudes, solar rays strike at oblique angles, spreading the same energy over a larger area while passing through thicker atmosphere.",
            "distractorTip": "Equatorial insolation is high because solar rays hit perpendicularly ($90^\\circ$), concentrating solar energy per unit area."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "apes-u4-l5",
        "topicNumber": "Topic 4.8",
        "name": "The Rain Shadow Effect",
        "subtitle": "Adiabatic cooling on windward slopes vs arid leeward deserts",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es4-l5-q1",
            "stem": "Moist oceanic air approaches a coastal mountain range (such as the Cascade Mountains in Washington). As the air mass is forced up the windward slope, what occurs?",
            "options": [
              "The air loses all oxygen and sinks into volcanic fissures.",
              "The air compresses, warms, and causes severe drought on the windward side.",
              "The air expands, cools adiabatically, water vapor condenses, and heavy precipitation falls on the windward side.",
              "The air creates a permanent high-pressure desert along the coastline."
            ],
            "correctIndex": 2,
            "explanation": "As air ascends a mountain slope, atmospheric pressure decreases, causing adiabatic expansion and cooling. Once the dew point is reached, clouds form and shed heavy rain on the windward coast.",
            "distractorTip": "Windward = Rising air $\\to$ cools adiabatically $\\to$ condensation and rain. Leeward = Sinking air $\\to$ warms $\\to$ dry rain shadow desert."
          },
          {
            "id": "es4-l5-q2",
            "stem": "What climatic conditions are found on the LEEWARD side of the mountain range in the rain shadow effect?",
            "options": [
              "Deep marine coral reefs.",
              "Dense temperate rainforests with continuous daily thunderstorms.",
              "Subarctic permafrost tundra.",
              "Arid and semi-arid desert conditions, because the descending air warms adiabatically and has already lost its moisture."
            ],
            "correctIndex": 3,
            "explanation": "On the leeward side, dry air sinks and compresses, warming adiabatically. Because warm dry air has high moisture-holding capacity, evaporation exceeds precipitation, creating rain shadow deserts (e.g., eastern Washington, Great Basin).",
            "distractorTip": "The leeward side is dry because the air already lost its moisture on the windward side."
          },
          {
            "id": "apes4-l5-q3",
            "stem": "In the Rain Shadow Effect, what climatic conditions develop on the leeward side of a high mountain range?",
            "options": [
              "Dense temperate rainforest with year-round heavy precipitation.",
              "Arid or semi-arid desert conditions, because sinking air warms adiabatically and holds moisture rather than releasing rain.",
              "Glacial ice sheets caused by continuous cloud cover.",
              "Frequent coastal hurricanes."
            ],
            "correctIndex": 1,
            "explanation": "Moist oceanic air hits the windward side, rises, cools adiabatically, condenses, and precipitates. As the dry air crests the peak and descends the leeward side, it compresses and warms adiabatically, absorbing moisture and creating arid rain-shadow deserts (e.g. Great Basin, Mojave).",
            "distractorTip": "Windward side = rising air, cooling, heavy rain, lush forests; Leeward side = descending air, warming, dry rain-shadow desert."
          }
        ]
      },
      {
        "id": 406,
        "unitIndex": 4,
        "levelNumber": 6,
        "uniqueKey": "apes-u4-l6",
        "topicNumber": "Topic 4.9 & Unit 4 Boss",
        "name": "El Niño-Southern Oscillation (ENSO)",
        "subtitle": "Trade wind reversals, upwelling collapse, and global climate anomalies",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "es4-l6-q1",
            "stem": "During an El Niño event, what atmospheric and oceanic changes occur across the equatorial Pacific Ocean?",
            "options": [
              "Easterly trade winds weaken or reverse $\\to$ warm surface water sloshes eastward toward South America $\\to$ coastal upwelling of cold, nutrient-rich water collapses off Peru.",
              "Trade winds strengthen, increasing cold coastal upwelling off South America.",
              "The Pacific Ocean freezes over completely.",
              "Drought strikes South America while torrential flooding hits Australia."
            ],
            "correctIndex": 0,
            "explanation": "In normal conditions, strong trade winds blow warm water west toward Indonesia, allowing cold nutrient-rich upwelling along Peru. During El Niño, trade winds weaken, warm water shifts east, and the thermocline deepens off South America, shutting off upwelling and collapsing the anchovy fishery.",
            "distractorTip": "El Niño = Weak trade winds + warm water moves EAST + Upwelling SUPPRESSED off Peru + Fisheries collapse."
          },
          {
            "id": "es4-l6-q2",
            "stem": "How does an El Niño event typically alter regional weather patterns in the southern United States and northwestern South America?",
            "options": [
              "Severe widespread drought across Florida and California.",
              "Increased rainfall, stormy weather, and flash flooding in the southern US and coastal Peru, with severe droughts in Australia and Indonesia.",
              "Total elimination of all winter precipitation in North America.",
              "Massive blizzards in equatorial Brazil."
            ],
            "correctIndex": 1,
            "explanation": "The eastward shift of warm Pacific water shifts the polar and subtropical jet streams southward, steering wet, cool stormy weather across the southern US and coastal South America, while causing severe drought and bushfires in Australia and Indonesia.",
            "distractorTip": "El Niño brings WET/FLOODS to coastal Peru & Southern US, and DRY/DROUGHT to Australia & Indonesia. La Niña does the exact opposite."
          },
          {
            "id": "apes4-l6-q3",
            "stem": "During an El Niño event (the warm phase of the ENSO cycle), what occurs in the eastern equatorial Pacific Ocean off the coast of Peru?",
            "options": [
              "Trade winds strengthen, intensifying nutrient-rich cold-water upwelling.",
              "Sea surface temperatures drop, causing historic droughts along coastal South America.",
              "Prevailing trade winds weaken or reverse, allowing warm surface waters to surge eastward, suppressing coastal cold-water upwelling and devastating commercial anchovy fisheries.",
              "Monsoons in Australia double in frequency."
            ],
            "correctIndex": 2,
            "explanation": "During El Niño, equatorial trade winds weaken or reverse. Warm Pacific surface waters slosh eastward to the South American coast. The deep thermocline suppresses the normal upwelling of nutrient-dense cold water, collapsing anchovy fisheries while bringing flooding rains to Peru and droughts to Australia/Indonesia.",
            "distractorTip": "El Niño: WEAKENED trade winds $\\implies$ WARM water off South America $\\implies$ SUPPRESSED upwelling $\\implies$ collapsed fisheries."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Unit 5: Land & Water Use",
    "shortTitle": "Unit 5: Land & Water",
    "description": "Tragedy of the commons, clearcutting, Green Revolution, irrigation (drip vs flood, salinization), pest control & IPM, meat production (CAFOs vs free-range), overfishing, mining (AMD), and ecological footprints",
    "examWeight": "10–15% of AP Exam",
    "biome": {
      "name": "Agrarian Basin & Alluvial Terraces",
      "icon": "🚜",
      "accentColor": "#CA8A04",
      "secondaryColor": "#A16207",
      "groundGradient": "from-yellow-100 via-amber-50 to-lime-100",
      "cardBorder": "border-yellow-500",
      "trailColor": "#ca8a04",
      "nodeRing": "ring-yellow-400/40",
      "skyTint": "from-yellow-50 to-amber-50/30"
    },
    "levels": [
      {
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "apes-u5-l1",
        "topicNumber": "Topic 5.1 & 5.2",
        "name": "Tragedy of the Commons & Forest Harvesting",
        "subtitle": "Shared open-access exploitation and clearcutting vs selective cutting",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es5-l1-q1",
            "stem": "Garrett Hardin’s concept of the \"Tragedy of the Commons\" describes an economic scenario where:",
            "options": [
              "Communities cooperate to preserve wildlife preserves without government intervention.",
              "A government heavily taxes private agricultural corporations.",
              "Individual users act independently in their own self-interest to deplete or spoil a shared, unregulated open-access resource, even though it harms the collective community.",
              "Private landholders underutilize their own personal property."
            ],
            "correctIndex": 2,
            "explanation": "The Tragedy of the Commons occurs with open-access public resources (international ocean fisheries, common pastureland, atmospheric air) where individual short-term incentive to extract resources exceeds accountability, leading to resource collapse.",
            "distractorTip": "Classic commons examples on AP exam: oceanic overfishing, atmospheric pollution, and public pasture overgrazing."
          },
          {
            "id": "es5-l1-q2",
            "stem": "Compared to selective timber cutting, what major environmental harm is caused by commercial clearcutting of entire forest stands?",
            "options": [
              "An increase in soil water-retention capacity.",
              "A permanent reduction in atmospheric oxygen concentration.",
              "An immediate increase in deep-forest interior bird diversity.",
              "Severe topsoil erosion, increased water runoff, stream siltation that suffocates fish spawning beds, and warmer stream temperatures due to loss of canopy shade."
            ],
            "correctIndex": 3,
            "explanation": "Clearcutting removes all tree roots that stabilize soil and canopies that intercept rain, leading to severe erosion, muddy runoff, stream sedimentation, and elevated water temperatures from direct sunlight.",
            "distractorTip": "Clearcutting causes both terrestrial degradation (erosion, nutrient leaching) and aquatic degradation (siltation, thermal shock)."
          },
          {
            "id": "apes5-l1-q3",
            "stem": "Which of the following scenarios best exemplifies the 'Tragedy of the Commons' described by Garrett Hardin?",
            "options": [
              "A private landowner fencing their pasture to prevent soil erosion.",
              "Individual commercial fishing fleets overharvesting bluefin tuna in unregulated international waters, each acting in self-interest until the fishery collapses.",
              "A municipal water utility installing smart water meters to charge tiered rates.",
              "A national park requiring backcountry wilderness camping permits."
            ],
            "correctIndex": 1,
            "explanation": "The Tragedy of the Commons occurs when individuals with open access to a shared, unregulated resource act independently according to their own self-interest, ultimately depleting or spoiling that resource (e.g. oceanic fisheries, the atmosphere, public grazing lands).",
            "distractorTip": "Tragedy of the Commons applies to SHARED, OPEN-ACCESS resources lacking private ownership or government regulation."
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "apes-u5-l2",
        "topicNumber": "Topic 5.3 - 5.5",
        "name": "Agricultural Practices & Irrigation Systems",
        "subtitle": "Drip irrigation (>90% efficient), salinization, and waterlogging",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es5-l2-q1",
            "stem": "Which agricultural irrigation method delivers water directly to plant root zones through perforated plastic tubing with the highest water-conservation efficiency (>90%) and minimal evaporation loss?",
            "options": [
              "Drip irrigation",
              "Flood irrigation",
              "Furrow irrigation",
              "Center-pivot spray irrigation"
            ],
            "correctIndex": 0,
            "explanation": "Drip (trickle) irrigation releases small, targeted droplets directly at plant root systems, minimizing evaporation and runoff with efficiency exceeding 90–95%, though it requires higher initial equipment capital.",
            "distractorTip": "Irrigation efficiency ranking: Drip (>90%) > Spray (75–85%) > Furrow (60%) > Flood (~50%). Flood irrigation loses half its water to evaporation."
          },
          {
            "id": "es5-l2-q2",
            "stem": "Repeated long-term flood irrigation in arid and semi-arid climates frequently causes \"Soil Salinization.\" What physical mechanism drives this degradation?",
            "options": [
              "Farmers accidentally dump chemical table salt onto fields.",
              "Irrigation water evaporates rapidly in hot sun, leaving behind dissolved mineral salts that accumulate in the topsoil to levels toxic to crop roots.",
              "Earthworms excrete sodium chloride when flooded.",
              "Plant roots secrete salts during anaerobic respiration."
            ],
            "correctIndex": 1,
            "explanation": "All natural freshwater contains small amounts of dissolved mineral salts. In arid regions with high evaporation, water evaporates quickly while leaving salts behind. Over years, toxic salt crunches build up in the root zone (salinization).",
            "distractorTip": "Salinization is solved or flushed by applying massive amounts of clean water (leaching), which requires extensive drainage systems."
          },
          {
            "id": "apes5-l2-q3",
            "stem": "Which agricultural irrigation technique is the most water-efficient, delivering water directly to plant root zones with minimal evaporation and runoff losses?",
            "options": [
              "Flood irrigation",
              "Drip (micro-irrigation) systems",
              "Furrow irrigation",
              "Center-pivot high-pressure overhead sprayers"
            ],
            "correctIndex": 1,
            "explanation": "Drip irrigation uses perforated tubing at or below the soil surface to deliver water directly to plant roots at low pressure, achieving over 90-95% water efficiency with near-zero evaporation or runoff losses (though it has high installation costs).",
            "distractorTip": "Irrigation efficiency: Drip (95%) > Spray (80%) > Flood (60%) > Furrow (30-50%)."
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "apes-u5-l3",
        "topicNumber": "Topic 5.6 & 5.7",
        "name": "Pest Control & Integrated Pest Management (IPM)",
        "subtitle": "Pesticide treadmill vs biological controls, crop rotation, and pheromone traps",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es5-l3-q1",
            "stem": "What is the \"Pesticide Treadmill\" in modern agriculture?",
            "options": [
              "The biological breakdown of pesticides into harmless organic sugars.",
              "The physical transport of agricultural chemicals on conveyor belts.",
              "A cycle where chemical pesticide applications kill susceptible pests, leaving resistant survivors to multiply, forcing farmers to apply progressively higher doses and more toxic chemicals.",
              "The legal requirement to rotate pesticides every ten years."
            ],
            "correctIndex": 2,
            "explanation": "The pesticide treadmill is a classic case of directional natural selection: repeated spraying selects for genetically resistant insects. Farmers must spend more money on newer, stronger chemical cocktails as pests evolve resistance.",
            "distractorTip": "Pesticide treadmill = Evolutionary resistance requiring stronger, more frequent chemical applications."
          },
          {
            "id": "es5-l3-q2",
            "stem": "Integrated Pest Management (IPM) minimizes environmental damage by employing which primary management philosophy?",
            "options": [
              "Flooding fields permanently to drown terrestrial pests.",
              "Completely eliminating 100% of all insects from agricultural fields using broad-spectrum poisons.",
              "Using only genetically modified crops with zero crop rotation.",
              "Combining biological controls (natural predators), physical cultural practices (crop rotation), and targeted synthetic chemical pesticides only as a last resort."
            ],
            "correctIndex": 3,
            "explanation": "IPM does not aim to eradicate all pests, but rather to manage pest populations below an economic injury threshold using natural predators (ladybugs), pheromone traps, habitat diversification, and minimal targeted pesticides.",
            "distractorTip": "IPM goal = Reduce pest damage economically while minimizing chemical harm; it does NOT mean zero chemical use, but rather targeted, minimized use."
          },
          {
            "id": "apes5-l3-q3",
            "stem": "In an Integrated Pest Management (IPM) program, which strategy is prioritized before applying synthetic chemical pesticides?",
            "options": [
              "Immediate aerial spraying of broad-spectrum organophosphates at the first sign of an insect.",
              "Genetically modifying all native bird species.",
              "Cultural and biological controls, such as crop rotation, introducing natural predatory beneficial insects (like ladybugs), and regular pest monitoring.",
              "Flooding fields with saline aquifer water."
            ],
            "correctIndex": 2,
            "explanation": "IPM emphasizes long-term pest management using a hierarchy of practices: biological controls (predators/parasites), cultural controls (crop rotation, intercropping), and mechanical barriers. Synthetic broad-spectrum pesticides are used strictly as a targeted last resort.",
            "distractorTip": "IPM does NOT aim to eliminate all pests completely; it keeps pest populations below economic injury thresholds using biological and cultural controls first."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "apes-u5-l4",
        "topicNumber": "Topic 5.8",
        "name": "Meat Production Methods: CAFOs vs. Free-Range",
        "subtitle": "Concentrated feedlots, antibiotic resistance, and grain-to-meat conversion",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es5-l4-q1",
            "stem": "Concentrated Animal Feeding Operations (CAFOs) allow rapid, low-cost meat production, but create which major environmental and public health hazards?",
            "options": [
              "Massive concentrated manure lagoons that leak nitrates and E. coli into groundwater, and routine sub-therapeutic antibiotic use that breeds drug-resistant bacteria.",
              "Widespread deforestation of subarctic tundra.",
              "A complete depletion of all global atmospheric carbon dioxide.",
              "The total elimination of all methane emissions."
            ],
            "correctIndex": 0,
            "explanation": "High-density feedlots generate millions of gallons of liquid animal manure that contaminate local aquifers with nitrates and pathogens, while preventative antibiotic feeding accelerates the rise of antibiotic-resistant bacterial strains (superbugs).",
            "distractorTip": "CAFO drawbacks: Manure lagoon overflows $\\to$ nutrient runoff/eutrophication; Antibiotics $\\to$ resistant pathogens; Methane ($CH_4$) $\\to$ greenhouse gas."
          },
          {
            "id": "es5-l4-q2",
            "stem": "From a thermodynamic and trophic perspective, why does eating lower on the food chain (a plant-based diet) require vastly less land, water, and energy than consuming feedlot beef?",
            "options": [
              "Cattle convert $100\\%$ of ingested plant calories into muscle mass.",
              "Roughly $90\\%$ of energy is lost as heat at each trophic step, requiring roughly $10\\,\\text{kg}$ of grain forage to produce just $1\\,\\text{kg}$ of edible beef.",
              "Plants require higher fossil fuel energy per calorie than grazing livestock.",
              "Herbivorous cattle generate zero greenhouse gases."
            ],
            "correctIndex": 1,
            "explanation": "Under the 10% rule, feeding grain to cattle introduces an extra trophic level where $90\\%$ of energy is dissipated as metabolic heat and waste, demanding far more agricultural acreage and irrigation than direct human consumption of grains.",
            "distractorTip": "Eating producers directly bypasses the 90% energy loss of the second trophic level."
          },
          {
            "id": "apes5-l4-q3",
            "stem": "What is an environmental drawback associated with raising livestock in Concentrated Animal Feeding Operations (CAFOs) compared to free-range grazing?",
            "options": [
              "CAFOs require ten times more physical pasture land per animal.",
              "Enormous concentrations of animal manure in waste lagoons can leak, contaminating local groundwater with nitrates and causing eutrophication in nearby streams.",
              "CAFO cattle produce zero greenhouse gas emissions.",
              "Free-range cattle require daily therapeutic antibiotic injections."
            ],
            "correctIndex": 1,
            "explanation": "CAFOs crowd thousands of animals into small feedlots, producing massive volumes of concentrated manure stored in open slurry lagoons. When lagoons breach or overflow during storms, runoff contaminates waterways with pathogens, hormones, antibiotics, and nitrogen/phosphorus that trigger eutrophication.",
            "distractorTip": "CAFO trade-offs: High density and cheap meat, but massive manure lagoons cause water contamination, odor, antibiotic resistance, and high greenhouse emissions."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "apes-u5-l5",
        "topicNumber": "Topic 5.9 & 5.10",
        "name": "Overfishing & Mining Impacts",
        "subtitle": "Bottom trawling bycatch, aquaculture, and Acid Mine Drainage (AMD)",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es5-l5-q1",
            "stem": "Why is commercial \"Bottom Trawling\" considered the most ecologically destructive marine fishing technique?",
            "options": [
              "It exclusively targets toxic apex sharks.",
              "It uses acoustic sonar that evaporates ocean water.",
              "Weighted nets dragged across the ocean floor scrape and demolish complex coral reefs, sponges, and benthic habitats, while catching massive unintended \"bycatch.\"",
              "It releases radioactive plutonium into commercial fish markets."
            ],
            "correctIndex": 2,
            "explanation": "Bottom trawling acts like clearcutting the ocean floor: heavy steel doors and nets crush fragile deep-sea coral structures that took centuries to grow, while indiscriminately catching non-target marine life (bycatch) that is discarded dead.",
            "distractorTip": "Bottom trawling destroys benthic (seafloor) habitats and generates massive bycatch."
          },
          {
            "id": "es5-l5-q2",
            "stem": "At abandoned metal and coal mines, rainwater reacts with exposed iron pyrite minerals ($FeS_2$) and oxygen to produce sulfuric acid ($H_2SO_4$). This environmental phenomenon is called:",
            "options": [
              "Cultural eutrophication.",
              "Subsurface tectonic fracking.",
              "Thermal plume inversion.",
              "Acid Mine Drainage (AMD), which severely lowers stream pH and leaches toxic heavy metals (lead, arsenic) into local aquatic food webs."
            ],
            "correctIndex": 3,
            "explanation": "Acid Mine Drainage occurs when sulfur-bearing minerals (pyrite) are unearthed and exposed to air and water, generating sulfuric acid that washes into streams, turning water orange/red and mobilizing lethal heavy metals.",
            "distractorTip": "Pyrite ($FeS_2$) + Oxygen + Water = Sulfuric acid ($H_2SO_4$) + Orange iron hydroxide precipitate (Acid Mine Drainage)."
          },
          {
            "id": "apes5-l5-q3",
            "stem": "In marine commercial fisheries, what is 'bycatch'?",
            "options": [
              "Fish raised inside artificial aquaculture pens.",
              "Non-target marine organisms (such as dolphins, sea turtles, sharks, and juvenile fish) unintentionally caught and killed in commercial fishing nets and longlines.",
              "The legal quota of target catch permitted by maritime regulations.",
              "Fish that escape from bottom trawls."
            ],
            "correctIndex": 1,
            "explanation": "Bycatch refers to unwanted, non-target marine wildlife caught incidentally during commercial fishing operations (drift nets, longlines, bottom trawling), often discarded dead or dying back into the ocean.",
            "distractorTip": "Bycatch = non-target species (turtles, dolphins, sharks) accidentally caught and killed in commercial fishing nets."
          }
        ]
      },
      {
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "apes-u5-l6",
        "topicNumber": "Topic 5.11 & 5.12",
        "name": "Urban Runoff, Heat Islands & Sustainability",
        "subtitle": "Impervious surfaces, permeable pavers, and Maximum Sustainable Yield (MSY)",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es5-l6-q1",
            "stem": "Urbanization replaces natural forests and vegetated wetlands with impervious asphalt and concrete surfaces. What is the primary hydrologic impact of this land-use change?",
            "options": [
              "Decreased groundwater infiltration, increased stormwater runoff volume and velocity, and heightened flash flood peaks in nearby streams.",
              "Increased groundwater recharge and higher water tables.",
              "A complete elimination of urban surface runoff.",
              "Decreased water temperatures in local urban retention ponds."
            ],
            "correctIndex": 0,
            "explanation": "Impervious surfaces prevent rainwater from naturally percolating into aquifers. Water rapidly sheets off pavement into storm drains, causing severe flash flooding, stream bank erosion, and thermal shock from heated pavement runoff.",
            "distractorTip": "Mitigation for urban runoff: permeable pavers, rain gardens, green roofs, and bioswales."
          },
          {
            "id": "es5-l6-q2",
            "stem": "In wildlife and fisheries management, harvesting a biological population at its Maximum Sustainable Yield (MSY) corresponds to maintaining population density at roughly:",
            "options": [
              "Exactly at carrying capacity ($K$), where growth rate is zero.",
              "Half of the environmental carrying capacity ($K/2$), where the population exhibits its fastest instantaneous growth rate.",
              "Near zero, to prevent intraspecific competition.",
              "Double the carrying capacity ($2K$)."
            ],
            "correctIndex": 1,
            "explanation": "Under the logistic growth model, the population growth rate ($dN/dt$) is maximized at the inflection point of the S-curve, which occurs at half the carrying capacity ($K/2$). Harvesting at MSY keeps the population growing at its maximum possible speed.",
            "distractorTip": "MSY = $K/2$ (fastest growth). Harvesting above MSY causes population collapse."
          },
          {
            "id": "apes5-l6-q3",
            "stem": "How do urban green roofs and permeable interlocking concrete pavers help mitigate the environmental impacts of urban development?",
            "options": [
              "They increase surface albedo and increase stormwater runoff velocity.",
              "They absorb rainwater, promoting groundwater recharge and reducing municipal stormwater runoff while mitigating the urban heat island effect through evapotranspiration.",
              "They permanently eliminate urban smog without reducing automobile traffic.",
              "They replace the need for wastewater sewage treatment plants."
            ],
            "correctIndex": 1,
            "explanation": "Urban areas are dominated by impermeable asphalt and concrete that generate massive stormwater runoff and absorb solar heat (urban heat island). Permeable pavements allow stormwater infiltration, while green roofs insulate buildings and provide evaporative cooling.",
            "distractorTip": "Permeable pavers + green roofs = decrease stormwater runoff, reduce urban heat island effect, recharge aquifers."
          }
        ]
      },
      {
        "id": 507,
        "unitIndex": 5,
        "levelNumber": 7,
        "uniqueKey": "apes-u5-l7",
        "topicNumber": "Unit 5 Boss",
        "name": "Apex Land & Water Crucible",
        "subtitle": "Ogallala Aquifer overdraft, center-pivot depletion, and agricultural remediation",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "es5-l7-q1",
            "stem": "The High Plains (Ogallala) Aquifer beneath the central United States is being depleted at a rate vastly exceeding its natural recharge rate. What long-term agricultural and geologic consequence will result if current pumping overdraft continues unchecked?",
            "options": [
              "The sudden emergence of active volcanic geysers across Nebraska.",
              "Saltwater intrusion from the Atlantic Ocean into Kansas soils.",
              "Severe land subsidence (ground compaction), dry farm wells, and the forced abandonment of irrigated corn/grain farming back to low-yield dryland farming.",
              "An immediate increase in municipal artesian well pressures."
            ],
            "correctIndex": 2,
            "explanation": "The Ogallala is a non-renewable fossil aquifer. Overdrafting collapses pore spaces between sediment grains (land subsidence) and lowers the water table beyond the reach of economic pumping, threatening American grain production.",
            "distractorTip": "Groundwater overdraft leads to cone of depression, dry wells, land subsidence, and (in coastal areas) saltwater intrusion."
          },
          {
            "id": "es5-l7-q2",
            "stem": "Which agricultural soil conservation practice involves plowing and planting crops horizontally across the natural slope of a hillside rather than up and down the fall line?",
            "options": [
              "Continuous mono-cropping",
              "Clearcut trenching",
              "Subsurface broadcast tilling",
              "Contour plowing (which creates miniature ridges that slow surface water runoff and halt gully erosion)"
            ],
            "correctIndex": 3,
            "explanation": "Contour plowing follows the natural elevation contours of the land, creating horizontal furrows that trap water and prevent rainwater from carving rapid erosive gullies down the hillside.",
            "distractorTip": "Soil conservation techniques: Contour plowing, terracing (steep slopes), no-till farming, cover crops, and windbreaks/shelterbelts."
          },
          {
            "id": "apes5-l7-q3",
            "stem": "What is the primary cause of soil salinization in arid and semi-arid agricultural lands?",
            "options": [
              "Excessive rainfall leaching minerals down into the bedrock.",
              "Applying synthetic organic nitrogen fertilizers.",
              "Repeated irrigation with groundwater containing dissolved mineral salts, followed by high rates of surface water evaporation that leave salts concentrated in topsoil.",
              "Planting deep-rooted perennial prairie grasses."
            ],
            "correctIndex": 2,
            "explanation": "Irrigation water contains small amounts of dissolved salts. In arid regions with high heat and low rainfall, water evaporates rapidly from the soil surface, leaving behind accumulated mineral salts that stunt plant growth and poison crops.",
            "distractorTip": "Soil salinization: In arid regions, repeated irrigation + high evaporation leaves toxic mineral salts behind in topsoil."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 6,
    "unitId": "u6",
    "title": "Unit 6: Energy Resources & Consumption",
    "shortTitle": "Unit 6: Energy Resources",
    "description": "Energy units & cogeneration, coal types, hydraulic fracturing (fracking), nuclear fission & half-life math, solar (passive/active PV), hydroelectric, geothermal, and hydrogen fuel cells",
    "examWeight": "10–15% of AP Exam",
    "biome": {
      "name": "Uranium Caldera & High-Voltage Grid",
      "icon": "⚡",
      "accentColor": "#EAB308",
      "secondaryColor": "#CA8A04",
      "groundGradient": "from-amber-100 via-yellow-50 to-orange-100",
      "cardBorder": "border-yellow-500",
      "trailColor": "#eab308",
      "nodeRing": "ring-yellow-400/40",
      "skyTint": "from-amber-50 to-yellow-50/30"
    },
    "levels": [
      {
        "id": 601,
        "unitIndex": 6,
        "levelNumber": 1,
        "uniqueKey": "apes-u6-l1",
        "topicNumber": "Topic 6.1 - 6.3",
        "name": "Energy Concepts, Cogeneration & Coal Ranks",
        "subtitle": "Combined Heat and Power (CHP) and peat to anthracite progression",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es6-l1-q1",
            "stem": "Cogeneration (Combined Heat and Power, or CHP) increases industrial energy efficiency up to $80\\%$ by:",
            "options": [
              "Capturing the waste heat generated during electricity production and using it for space heating or industrial manufacturing processes.",
              "Burning twice as much coal in a specialized pressurized boiler.",
              "Converting electrical energy back into unrefined crude petroleum.",
              "Generating electricity using perpetual motion generators."
            ],
            "correctIndex": 0,
            "explanation": "Conventional power plants waste up to $65\\%$ of their fuel energy as exhaust heat. Cogeneration harnesses this byproduct steam to heat nearby buildings or power industrial equipment, dramatically boosting overall thermodynamic efficiency.",
            "distractorTip": "Cogeneration = Generating BOTH electricity AND useful thermal heat from the same fuel source."
          },
          {
            "id": "es6-l1-q2",
            "stem": "Which rank of coal has undergone the greatest geologic heat and metamorphic pressure, possesses the highest carbon and energy density, and burns with the lowest moisture and sulfur content?",
            "options": [
              "Bituminous",
              "Anthracite",
              "Lignite",
              "Peat"
            ],
            "correctIndex": 1,
            "explanation": "Coal progression: Peat (not coal) $\\to$ Lignite (brown coal, low heat) $\\to$ Bituminous (high sulfur, common in power plants) $\\to$ Anthracite (hard coal, highest heat, cleanest burning, lowest sulfur).",
            "distractorTip": "Remember the alphabetical order: Peat $\\to$ Lignite $\\to$ Bituminous $\\to$ Anthracite (increasing energy density and carbon purity)."
          },
          {
            "id": "apes6-l1-q3",
            "stem": "In an industrial cogeneration (combined heat and power, CHP) facility, how is overall energy efficiency improved?",
            "options": [
              "Waste heat produced during electricity generation is captured and utilized for industrial process steam or space heating.",
              "Electricity is converted directly into nuclear fuel.",
              "Coal is mixed with petroleum to double combustion temperature.",
              "Power lines are cooled with liquid nitrogen to eliminate electrical resistance."
            ],
            "correctIndex": 0,
            "explanation": "Cogeneration uses a single fuel source to simultaneously produce both electricity and useful thermal energy (steam/heat). By capturing waste heat that conventional power plants vent into cooling towers, CHP systems achieve energy efficiencies exceeding 70-80%.",
            "distractorTip": "Cogeneration (Combined Heat and Power): Uses waste heat from electricity generation for building or industrial heating, drastically improving fuel efficiency."
          }
        ]
      },
      {
        "id": 602,
        "unitIndex": 6,
        "levelNumber": 2,
        "uniqueKey": "apes-u6-l2",
        "topicNumber": "Topic 6.4 & 6.5",
        "name": "Fossil Fuels & Hydraulic Fracturing (Fracking)",
        "subtitle": "Shale gas extraction, groundwater methane contamination, and induced seismicity",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es6-l2-q1",
            "stem": "Hydraulic fracturing (\"Fracking\") extracts natural gas (methane) and tight oil from impermeable deep subterranean shale formations by:",
            "options": [
              "Using high-voltage electrical coils to melt bedrock into liquid magma.",
              "Detonating subterranean nuclear warheads inside coal mines.",
              "Drilling horizontally and injecting high-pressure water, sand, and chemical solvents to fracture rock layers and release trapped hydrocarbons.",
              "Flooding deep shale with compressed liquid nitrogen."
            ],
            "correctIndex": 2,
            "explanation": "Fracking involves directional horizontal drilling into shale beds, followed by the injection of millions of gallons of pressurized water, proppants (sand to keep cracks open), and chemical additives to liberate trapped gas.",
            "distractorTip": "Fracking environmental concerns: Methane leaking into drinking wells, wastewater disposal inducing earthquakes, and VOC emissions."
          },
          {
            "id": "es6-l2-q2",
            "stem": "Compared to conventional coal combustion, burning Natural Gas (primarily methane, $CH_4$) in power plants produces:",
            "options": [
              "Massive quantities of radioactive nuclear slag.",
              "Twice as much sulfur dioxide and toxic fly ash.",
              "Zero greenhouse gas emissions of any kind.",
              "Roughly $50\\%$ less carbon dioxide ($CO_2$) per unit energy, and virtually zero sulfur dioxide ($SO_2$) or toxic heavy metal particulates."
            ],
            "correctIndex": 3,
            "explanation": "Natural gas is the cleanest burning fossil fuel: it emits about half the $CO_2$ of coal per megawatt-hour and produces negligible $SO_2$ and particulate soot. However, unburnt fugitive methane emissions during extraction are potent greenhouse drivers.",
            "distractorTip": "Natural gas = cleanest combustion at power plant, BUT fugitive methane leaks during fracking have high Global Warming Potential."
          },
          {
            "id": "apes6-l2-q3",
            "stem": "What is a major environmental risk specifically associated with hydraulic fracturing ('fracking') used to extract natural gas from deep shale rock formations?",
            "options": [
              "Depletion of the stratospheric ozone layer.",
              "Contamination of drinking water aquifers from leaking methane gas and toxic chemical fracking fluids, along with induced seismic earthquakes from wastewater injection wells.",
              "Direct radioactive contamination from uranium decay.",
              "Acid mine drainage overflowing into coastal wetlands."
            ],
            "correctIndex": 1,
            "explanation": "Fracking pumps high-pressure water, sand, and proprietary chemical solvents deep underground to fracture shale rock. Leaky well casings can contaminate drinking water aquifers with volatile organic compounds and methane, while high-pressure wastewater disposal causes induced seismicity.",
            "distractorTip": "Fracking risks: Groundwater contamination from toxic fluids/methane leaks, massive water consumption, and induced earthquakes from wastewater disposal."
          }
        ]
      },
      {
        "id": 603,
        "unitIndex": 6,
        "levelNumber": 3,
        "uniqueKey": "apes-u6-l3",
        "topicNumber": "Topic 6.6",
        "name": "Nuclear Energy & Radioactive Half-Life Math",
        "subtitle": "U-235 fission, control rods, and exponential decay calculations",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es6-l3-q1",
            "stem": "A radioactive isotope has a half-life of $12\\text{ years}$. If a nuclear waste sample initially contains $80.0\\text{ g}$ of this isotope, how many grams will remain undecayed after $48\\text{ years}$?",
            "options": [
              "$5.0\\text{ g}$",
              "$10.0\\text{ g}$",
              "$20.0\\text{ g}$",
              "$2.5\\text{ g}$"
            ],
            "correctIndex": 0,
            "explanation": "Number of elapsed half-lives: $n = \\frac{48\\text{ years}}{12\\text{ years/half-life}} = 4\\text{ half-lives}$. Remaining mass: $80.0 \\times (\\frac{1}{2})^4 = 80.0 \\times \\frac{1}{16} = 5.0\\text{ g}$.",
            "distractorTip": "Divide total elapsed time by the half-life duration to find the number of decay steps: $80 \\to 40 \\to 20 \\to 10 \\to 5\\text{ g}$ (4 steps)."
          },
          {
            "id": "es6-l3-q2",
            "stem": "In a commercial nuclear fission reactor, what is the critical safety function of the neutron-absorbing Control Rods (made of boron or cadmium)?",
            "options": [
              "They filter radioactive iodine from the cooling water towers.",
              "They are inserted into or withdrawn from the reactor core to absorb excess free neutrons and regulate or halt the fission chain reaction.",
              "They condense steam back into liquid water.",
              "They enrich low-grade uranium into weapon-grade plutonium."
            ],
            "correctIndex": 1,
            "explanation": "Fission of Uranium-235 releases 2–3 high-speed neutrons. Control rods absorb neutrons: dropping them fully into the core stops the chain reaction (scram); withdrawing them increases the reaction rate.",
            "distractorTip": "Control rods ABSORB neutrons to regulate the reaction rate; the Moderator (water/graphite) SLOWS neutrons down so they can cause fission."
          },
          {
            "id": "apes6-l3-q3",
            "stem": "A radioactive isotope has a half-life of 30 years. If a spent nuclear fuel rod initially contains 80 grams of this isotope, how much of the isotope remains radioactive after 90 years?",
            "options": [
              "40 grams",
              "20 grams",
              "10 grams",
              "5 grams"
            ],
            "correctIndex": 2,
            "explanation": "Number of half-lives = $90 / 30 = 3$ half-lives. After 1 half-life (30 yrs): $80 / 2 = 40\\text{ g}$. After 2 half-lives (60 yrs): $40 / 2 = 20\\text{ g}$. After 3 half-lives (90 yrs): $20 / 2 = 10\\text{ g}$.",
            "distractorTip": "Half-life formula: Final Amount = $\\text{Initial} \\times (1/2)^n$. Here $n = 90/30 = 3$, so $80 \\times (1/2)^3 = 80 / 8 = 10\\text{ g}$."
          }
        ]
      },
      {
        "id": 604,
        "unitIndex": 6,
        "levelNumber": 4,
        "uniqueKey": "apes-u6-l4",
        "topicNumber": "Topic 6.7 & 6.8",
        "name": "Biomass & Solar Energy Systems",
        "subtitle": "Indoor biomass smoke vs passive solar architecture and photovoltaic (PV) cells",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es6-l4-q1",
            "stem": "Which architectural feature is an essential component of a Passive Solar Building design in the Northern Hemisphere?",
            "options": [
              "Large north-facing single-pane windows with zero roof overhangs.",
              "Active motorized water pumps circulating coolant through roof collectors.",
              "Large, double-pane south-facing windows paired with high-thermal-mass stone or concrete floors that absorb daytime heat and release it at night.",
              "A diesel-powered rooftop exhaust generator."
            ],
            "correctIndex": 2,
            "explanation": "Passive solar uses building structure and orientation without mechanical pumps: south-facing windows capture low winter sun, roof overhangs shade high summer sun, and dense thermal mass (stone/brick) moderates temperatures.",
            "distractorTip": "Passive = NO pumps, fans, or motors (structural design only). Active = Uses mechanical pumps, fans, or photovoltaic panels."
          },
          {
            "id": "es6-l4-q2",
            "stem": "How do Photovoltaic (PV) solar panels directly generate electrical energy?",
            "options": [
              "Sunlight causes chemical combustion of specialized greenhouse gases.",
              "Sunlight heats steam boilers that spin heavy electromagnetic turbines.",
              "Solar radiation splits water molecules into liquid hydrogen fuel.",
              "Incoming solar photons knock electrons free from silicon semiconductor atoms, creating a direct current (DC) electrical flow."
            ],
            "correctIndex": 3,
            "explanation": "PV cells exploit the photoelectric effect: photons strike doped silicon wafers, dislodging electrons into an electric circuit to produce direct current (DC) electricity without any moving turbine parts.",
            "distractorTip": "Photovoltaic (PV) cells produce electricity directly with NO moving parts or steam turbines."
          },
          {
            "id": "apes6-l4-q3",
            "stem": "What is the primary operational distinction between active solar heating systems and passive solar building design?",
            "options": [
              "Passive solar uses photovoltaic silicon panels to generate alternating current.",
              "Active solar uses mechanical pumps, fans, and fluid collectors to circulate solar-heated water or air, whereas passive solar uses building orientation, south-facing windows, and thermal mass walls without mechanical devices.",
              "Passive solar systems operate exclusively during nocturnal hours.",
              "Active solar systems produce zero carbon emissions during manufacture."
            ],
            "correctIndex": 1,
            "explanation": "Passive solar captures solar heat naturally through architectural design (south-facing windows, concrete thermal mass, roof overhangs). Active solar utilizes electrical or mechanical components (pumps, motorized fans, solar water heating collectors) to distribute captured energy.",
            "distractorTip": "Passive solar = architectural design (windows, thermal mass, no moving parts); Active solar = mechanical pumps, fans, and solar panels."
          }
        ]
      },
      {
        "id": 605,
        "unitIndex": 6,
        "levelNumber": 5,
        "uniqueKey": "apes-u6-l5",
        "topicNumber": "Topic 6.9 & 6.10",
        "name": "Hydroelectric & Geothermal Power",
        "subtitle": "Reservoir sedimentation, fish barriers, and hydrothermal steam baseload",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es6-l5-q1",
            "stem": "While large hydroelectric dams (such as the Hoover Dam) generate zero carbon emissions during operation, which major ecological drawback do they cause upstream and downstream?",
            "options": [
              "Reservoirs flood upstream terrestrial habitats and human settlements, block anadromous fish migration (like salmon), and trap nutrient-rich silt that would otherwise replenish downstream floodplains.",
              "Dams contaminate river water with radioactive uranium waste.",
              "Dams permanently halt the global nitrogen cycle.",
              "Reservoirs cause severe air pollution through sulfur dioxide emissions."
            ],
            "correctIndex": 0,
            "explanation": "Dams fragment river ecosystems: upstream valleys are submerged under reservoirs (often emitting methane from decaying biomass), downstream floodplains are deprived of fertile silt, and migrating fish cannot reach ancestral spawning grounds.",
            "distractorTip": "Fish ladders help migrating fish bypass dams, but cannot solve upstream siltation or downstream habitat alteration."
          },
          {
            "id": "es6-l5-q2",
            "stem": "Geothermal power plants generate continuous baseload electricity by utilizing which energy source?",
            "options": [
              "Combusting underground deposits of organic bituminous peat.",
              "High-pressure steam generated by water heated naturally underground by magma and radioactive decay within Earth’s crust.",
              "Harvesting surface ocean tidal oscillations.",
              "Extracting kinetic energy from descending tectonic subduction plates."
            ],
            "correctIndex": 1,
            "explanation": "Geothermal energy taps natural hydrothermal reservoirs near tectonic plate boundaries. Wells drill into deep heated water/steam to spin turbines, then reinject condensed water back underground.",
            "distractorTip": "Geothermal is a reliable baseload power source (not dependent on weather), but is geographically limited to tectonic hotspot regions (e.g. Iceland, California)."
          },
          {
            "id": "apes6-l5-q3",
            "stem": "What is an environmental drawback associated with large-scale run-of-the-river or reservoir hydroelectric dams?",
            "options": [
              "High emissions of sulfur dioxide during normal daily turbine operation.",
              "Flooding upstream terrestrial habitats, blocking migratory fish pathways (like salmon), and trapping fertile downstream silt behind the dam.",
              "High emissions of radioactive radon gas into the reservoir.",
              "Permanent depletion of regional groundwater tables."
            ],
            "correctIndex": 1,
            "explanation": "While hydroelectricity produces low operational carbon emissions, damming rivers floods upstream ecosystems, displaces human communities, blocks anadromous fish migration routes, and prevents nutrient-rich sediments from reaching downstream agricultural floodplains.",
            "distractorTip": "Hydroelectric dam trade-offs: Renewable and flood control, but disrupts fish migration, floods upstream habitats, and traps silt/sediments."
          }
        ]
      },
      {
        "id": 606,
        "unitIndex": 6,
        "levelNumber": 6,
        "uniqueKey": "apes-u6-l6",
        "topicNumber": "Topic 6.11 - 6.13",
        "name": "Wind Turbines & Hydrogen Fuel Cells",
        "subtitle": "Intermittency, bat mortality, and 2H_2 + O_2 -> 2H_2O clean emission",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es6-l6-q1",
            "stem": "What is the ONLY chemical byproduct emitted from the tailpipe of an automobile powered by a Hydrogen Fuel Cell ($2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O} + \\text{electricity}$)?",
            "options": [
              "Sulfur dioxide ($SO_2$)",
              "Carbon dioxide ($CO_2$)",
              "Pure water vapor ($\\text{H}_2\\text{O}$)",
              "Tropospheric ozone ($O_3$)"
            ],
            "correctIndex": 2,
            "explanation": "Hydrogen fuel cells combine compressed hydrogen gas ($H_2$) with atmospheric oxygen ($O_2$) electrochemically to generate electric current and heat, with pure water vapor ($H_2O$) as the only exhaust emission.",
            "distractorTip": "Fuel cells emit only water, BUT producing hydrogen gas ($H_2$) currently requires electricity (often from fossil fuel reforming or electrolysis)."
          },
          {
            "id": "es6-l6-q2",
            "stem": "What is a recognized ecological concern associated with large commercial wind turbine farms, and how do modern operators mitigate this impact?",
            "options": [
              "Severe chemical acid rain downwind of wind farms.",
              "Contamination of local groundwater aquifers with liquid petroleum lubricants.",
              "The permanent depletion of atmospheric oxygen in windy corridors.",
              "Collisions and barotrauma fatalities among migrating birds and bats, mitigated by siting farms away from migration corridors and shutting down turbines during peak bat activity."
            ],
            "correctIndex": 3,
            "explanation": "Rapidly rotating turbine blades cause blade strikes and lung barotrauma (due to sudden pressure drops) in birds and bats. Modern mitigation includes micro-siting away from migratory flyways, painted blades, and curtailment (slowing turbines during low-wind evening bat flights).",
            "distractorTip": "Wind energy produces zero operational emissions and allows simultaneous agricultural farming below turbines."
          },
          {
            "id": "apes6-l6-q3",
            "stem": "What is the sole direct chemical emission produced by a vehicle powered by a pure hydrogen fuel cell during operation?",
            "options": [
              "Carbon monoxide ($CO$)",
              "Sulfur dioxide ($SO_2$)",
              "Nitrogen dioxide ($NO_2$)",
              "Water vapor ($H_2O$)"
            ],
            "correctIndex": 3,
            "explanation": "Hydrogen fuel cells combine pure hydrogen fuel ($H_2$) with atmospheric oxygen ($O_2$) across an electrolyte membrane to produce an electric current, releasing water ($H_2O$) and heat as the only direct tailpipe byproducts: $2H_2 + O_2 \\to 2H_2O + \\text{electricity}$.",
            "distractorTip": "Hydrogen fuel cell tailpipe emission is ONLY WATER VAPOR ($H_2O$)! (Though generating pure $H_2$ fuel can produce emissions if derived from fossil methane)."
          }
        ]
      },
      {
        "id": 607,
        "unitIndex": 6,
        "levelNumber": 7,
        "uniqueKey": "apes-u6-l7",
        "topicNumber": "Unit 6 Boss",
        "name": "Apex Energy Systems Crucible",
        "subtitle": "Grid storage, electrical grid stability, and intermittent renewable synthesis",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "es6-l7-q1",
            "stem": "As modern electrical grids transition toward high percentages of intermittent solar and wind generation, which engineering challenge is created by the famous \"Duck Curve\" at sunset?",
            "options": [
              "Solar generation drops sharply just as residential electricity demand surges in the evening, requiring rapid ramping of dispatchable backup power or massive battery storage.",
              "Wind turbines permanently reverse their rotational direction at dusk.",
              "Nuclear reactors must be completely shut down every evening.",
              "Hydraulic transmission lines freeze solid at night."
            ],
            "correctIndex": 0,
            "explanation": "The \"Duck Curve\" illustrates deep midday drops in net electrical demand due to rooftop solar, followed by a steep evening demand ramp right as the sun sets, requiring fast-responding peaker plants, pumped-storage hydro, or grid-scale battery storage.",
            "distractorTip": "Solar and wind are non-dispatchable (intermittent); they require grid storage or flexible backup generation to maintain grid reliability."
          },
          {
            "id": "es6-l7-q2",
            "stem": "A homeowner replaces twenty $60\\text{ W}$ incandescent lightbulbs with energy-efficient $9\\text{ W}$ LED bulbs that provide identical light output. If each bulb is illuminated for an average of $5\\text{ hours}$ per day for $365\\text{ days}$, what is the total annual electrical energy saved in kilowatt-hours (kWh)?",
            "options": [
              "$93.0\\text{ kWh}$",
              "$1861.5\\text{ kWh}$",
              "$365.0\\text{ kWh}$",
              "$18{,}615\\text{ kWh}$"
            ],
            "correctIndex": 1,
            "explanation": "Power saved per bulb: $60\\text{ W} - 9\\text{ W} = 51\\text{ W}$. For 20 bulbs: $20 \\times 51\\text{ W} = 1020\\text{ W} = 1.02\\text{ kW}$. Annual hours used: $5\\text{ hrs/day} \\times 365\\text{ days} = 1825\\text{ hours}$. Total energy saved: $1.02\\text{ kW} \\times 1825\\text{ hrs} = 1861.5\\text{ kWh}$.",
            "distractorTip": "Energy saved $= \\text{Power saved (kW)} \\times \\text{Time (hours)}$. Remember to convert Watts to Kilowatts ($1\\text{ kW} = 1000\\text{ W}$)."
          },
          {
            "id": "apes6-l7-q3",
            "stem": "Why does burning anthracite coal generate fewer air pollution emissions per unit of heat than burning lignite coal?",
            "options": [
              "Anthracite coal has undergone the deepest geological heat and pressure, giving it the highest carbon content, highest energy density, and lowest moisture and sulfur content.",
              "Anthracite coal contains radioactive isotopes that neutralize soot.",
              "Lignite coal burns at significantly higher temperatures than anthracite.",
              "Anthracite coal is an uncompacted, renewable wetland biomass."
            ],
            "correctIndex": 0,
            "explanation": "Coal rank progresses: Peat $\\to$ Lignite $\\to$ Sub-bituminous $\\to$ Bituminous $\\to$ Anthracite. Anthracite is the highest rank: highest carbon percentage, highest heat value per pound, and lowest moisture and sulfur, burning cleanly compared to dirty, low-energy lignite.",
            "distractorTip": "Coal rank from lowest to highest: Peat $\\to$ Lignite $\\to$ Bituminous $\\to$ Anthracite (highest energy density and cleanest burn)."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 7,
    "unitId": "u7",
    "title": "Unit 7: Atmospheric Pollution",
    "shortTitle": "Unit 7: Air Pollution",
    "description": "Primary vs secondary air pollutants, photochemical smog formation, thermal inversions, indoor air contaminants (radon-222, asbestos), scrubbers & catalytic converters, and acid rain",
    "examWeight": "7–10% of AP Exam",
    "biome": {
      "name": "Smog Inversion Valley & Scrubber Spire",
      "icon": "🌫️",
      "accentColor": "#94A3B8",
      "secondaryColor": "#64748B",
      "groundGradient": "from-slate-100 via-gray-50 to-zinc-100",
      "cardBorder": "border-slate-500",
      "trailColor": "#94a3b8",
      "nodeRing": "ring-slate-400/40",
      "skyTint": "from-slate-50 to-gray-50/30"
    },
    "levels": [
      {
        "id": 701,
        "unitIndex": 7,
        "levelNumber": 1,
        "uniqueKey": "apes-u7-l1",
        "topicNumber": "Topic 7.1",
        "name": "Primary vs. Secondary Air Pollutants",
        "subtitle": "Clean Air Act criteria pollutants and photochemical reactions",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es7-l1-q1",
            "stem": "Which air pollutant is classified as a SECONDARY pollutant that forms in the atmosphere through chemical reactions in sunlight, rather than being emitted directly from a smokestack or tailpipe?",
            "options": [
              "Sulfur dioxide ($SO_2$)",
              "Carbon monoxide ($CO$)",
              "Tropospheric ozone ($O_3$)",
              "Particulate matter ($PM_{10}$)"
            ],
            "correctIndex": 2,
            "explanation": "Primary pollutants ($CO, SO_2, NO_x$, lead, PM) are emitted directly from sources. Secondary pollutants (tropospheric $O_3$, sulfuric acid $H_2SO_4$, nitric acid $HNO_3$, PANs) form when primary pollutants react chemically with sunlight, oxygen, or water vapor in the atmosphere.",
            "distractorTip": "Ozone ($O_3$) in the troposphere is ALWAYS a secondary pollutant; no tailpipe emits ozone directly!"
          },
          {
            "id": "es7-l1-q2",
            "stem": "Coal-fired power plants are the single largest anthropogenic source of which criteria air pollutant that contributes directly to respiratory illness and acid deposition downwind?",
            "options": [
              "Lead particulates",
              "Radon-222 gas",
              "Chlorofluorocarbons (CFCs)",
              "Sulfur dioxide ($SO_2$)"
            ],
            "correctIndex": 3,
            "explanation": "Coal contains natural sulfur impurities. When coal is combusted, sulfur reacts with oxygen to form sulfur dioxide ($SO_2$), which irritates human lungs and combines with atmospheric moisture to form sulfuric acid rain.",
            "distractorTip": "Coal combustion = $SO_2$, Mercury, and Particulates. Motor vehicle exhaust = $NO_x$, $CO$, and VOCs."
          },
          {
            "id": "apes7-l1-q3",
            "stem": "Which of the following atmospheric pollutants is classified as a SECONDARY air pollutant?",
            "options": [
              "Carbon monoxide ($CO$) emitted from vehicle exhaust pipes",
              "Sulfur dioxide ($SO_2$) released directly from a coal power plant smokestack",
              "Tropospheric (ground-level) ozone ($O_3$) formed when $NO_x$ and VOCs react in the presence of sunlight",
              "Particulate matter ($PM_{10}$) blown from construction sites"
            ],
            "correctIndex": 2,
            "explanation": "Primary pollutants are emitted directly from sources (e.g. $CO, SO_2, NO_x$, lead). Secondary pollutants are not emitted directly; they form in the atmosphere through chemical reactions between primary pollutants and sunlight/water (e.g. ground-level $O_3$, sulfuric acid $H_2SO_4$, nitric acid $HNO_3$, PANs).",
            "distractorTip": "Primary = emitted directly ($CO, SO_2, NO_x$); Secondary = formed in air via chemical/photochemical reactions ($O_3, H_2SO_4$, smog)."
          }
        ]
      },
      {
        "id": 702,
        "unitIndex": 7,
        "levelNumber": 2,
        "uniqueKey": "apes-u7-l2",
        "topicNumber": "Topic 7.2 & 7.3",
        "name": "Photochemical Smog & Thermal Inversions",
        "subtitle": "NOx + VOCs + sunlight -> ozone and valley inversion traps",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es7-l2-q1",
            "stem": "Under what atmospheric conditions does Photochemical Smog reach its peak daily concentration in urban environments like Los Angeles?",
            "options": [
              "Early to mid-afternoon on hot, sunny summer days with high motor vehicle commuter emissions of $NO_x$ and VOCs.",
              "Midnight during heavy winter blizzards.",
              "Dawn on windy, overcast autumn mornings.",
              "During continuous offshore torrential rainstorms."
            ],
            "correctIndex": 0,
            "explanation": "Morning rush hour traffic releases primary $NO_x$ and volatile organic compounds (VOCs). As intense midday solar ultraviolet radiation catalytically splits $NO_2$ into $NO + O$, free oxygen combines with $O_2$ to form peak ground-level ozone ($O_3$) in the early afternoon.",
            "distractorTip": "Photochemical smog requires SUNLIGHT (photons). Morning traffic emits inputs; early afternoon sun drives peak ozone formation."
          },
          {
            "id": "es7-l2-q2",
            "stem": "In a \"Thermal Inversion,\" why do air pollutants become trapped in dangerously high concentrations near ground level in mountain-rimmed valleys?",
            "options": [
              "Cold air rises rapidly, sucking pollutants into deep subterranean caves.",
              "A layer of warm air settles over a colder layer of surface air, preventing normal vertical convection and upward dispersion of pollutants.",
              "Winds accelerate to hurricane speeds that pin pollutants against buildings.",
              "Atmospheric ozone collapses the gravitational field."
            ],
            "correctIndex": 1,
            "explanation": "Normally, air cools with altitude, allowing warm surface air to rise and disperse emissions. In an inversion, warmer air aloft caps cold dense surface air, acting as a physical lid that traps vehicle exhaust and smog close to city streets.",
            "distractorTip": "Inversion order from ground up: Cool surface air (trapped) $\\to$ Warm inversion layer (the lid) $\\to$ Cool upper air."
          },
          {
            "id": "apes7-l2-q3",
            "stem": "During a thermal inversion, why do cities situated in topographical valleys (such as Los Angeles or Mexico City) experience dangerously elevated concentrations of air pollution?",
            "options": [
              "Strong vertical wind currents blow all regional pollutants into the valley.",
              "A layer of warm air traps a cooler, denser layer of air near the ground, preventing vertical mixing and trapping vehicle emissions and smog near street level.",
              "Cold air heats up and creates an intense low-pressure storm system.",
              "The ozone layer descends directly into the valley."
            ],
            "correctIndex": 1,
            "explanation": "Normally, air temperature decreases with altitude, allowing warm, polluted surface air to rise and disperse. In a thermal inversion, a warm air cap sits above cooler surface air in a valley, trapping pollutants in stagnant air near the ground.",
            "distractorTip": "Thermal inversion: Warm air layer above traps cool polluted air below, preventing vertical convection and dispersion."
          }
        ]
      },
      {
        "id": 703,
        "unitIndex": 7,
        "levelNumber": 3,
        "uniqueKey": "apes-u7-l3",
        "topicNumber": "Topic 7.4 & 7.5",
        "name": "Indoor Air Contaminants",
        "subtitle": "Radon-222, asbestos, carbon monoxide, and formaldehyde",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es7-l3-q1",
            "stem": "Radon-222 is a naturally occurring radioactive gas that seeps into residential basements through cracks in foundation slabs. What is its source, and what severe human health risk does it pose?",
            "options": [
              "Formed by leaking lead paint; causes kidney failure.",
              "Emitted by moldy carpets; causes acute stomach ulcers.",
              "Formed by the radioactive decay of uranium in bedrock; chronic inhalation of radon progeny causes lung cancer (the #2 cause after smoking).",
              "Emitted by unvented gas stoves; causes instantaneous asphyxiation."
            ],
            "correctIndex": 2,
            "explanation": "Radon-222 is an odorless, colorless noble gas produced by the radioactive decay of natural uranium in granitic bedrock and soil. When inhaled into the lungs, its alpha-particle decay damages bronchial DNA, causing lung cancer.",
            "distractorTip": "Radon-222 = Uranium decay in granite bedrock $\\to$ seeps into basements $\\to$ Alpha radiation $\\to$ LUNG CANCER."
          },
          {
            "id": "es7-l3-q2",
            "stem": "In developing nations, what is the single most prevalent and lethal indoor air pollutant responsible for millions of premature respiratory deaths annually?",
            "options": [
              "Industrial chlorofluorocarbons leaking from refrigeration units.",
              "Formaldehyde off-gassing from pressed plywood furniture.",
              "Asbestos fibers from deteriorating insulation tiles.",
              "Particulate matter and carbon monoxide emitted from unvented open cooking fires burning biomass fuels (wood, dung, crop residues)."
            ],
            "correctIndex": 3,
            "explanation": "Roughly 3 billion people in the developing world cook and heat homes with open biomass fires (wood, charcoal, animal dung) in poorly ventilated huts, causing lethal indoor concentrations of carbon monoxide and fine particulate matter.",
            "distractorTip": "Developing nations indoor pollution = BIOMASS/WOOD smoke and CO. Developed nations = RADON, formaldehyde, VOCs."
          },
          {
            "id": "apes7-l3-q3",
            "stem": "Which dangerous indoor air pollutant is a naturally occurring radioactive gas formed by the radioactive decay of uranium in bedrock, capable of seeping through foundation cracks into basements and causing lung cancer?",
            "options": [
              "Formaldehyde",
              "Carbon monoxide",
              "Asbestos",
              "Radon-222"
            ],
            "correctIndex": 3,
            "explanation": "Radon-222 is a colorless, odorless radioactive noble gas produced by the natural decay of uranium in soil and rock. It seeps into homes through foundation cracks and is the second leading cause of lung cancer in the United States (behind tobacco smoke).",
            "distractorTip": "Radon-222 = radioactive gas from granite/rock decay, causes lung cancer; Carbon monoxide = incomplete combustion; Asbestos = insulating mineral fiber, causes mesothelioma."
          }
        ]
      },
      {
        "id": 704,
        "unitIndex": 7,
        "levelNumber": 4,
        "uniqueKey": "apes-u7-l4",
        "topicNumber": "Topic 7.6",
        "name": "Air Pollution Mitigation Technologies",
        "subtitle": "Wet scrubbers for SO_2, electrostatic precipitators, and catalytic converters",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es7-l4-q1",
            "stem": "What emission control technology is installed on industrial coal smokestacks to specifically neutralize and remove acidic Sulfur Dioxide ($SO_2$) gas?",
            "options": [
              "Wet scrubbers, which spray an alkaline liquid slurry (such as calcium carbonate limestone) to react with and precipitate sulfur compounds as solid calcium sulfite.",
              "Electrostatic precipitators, which charge and collect gaseous methane.",
              "Automotive vapor recovery nozzles.",
              "Ozone generation lamps."
            ],
            "correctIndex": 0,
            "explanation": "Wet scrubbers spray a crushed limestone ($CaCO_3$) mist into flue gases. The basic calcium reacts with acidic $SO_2$ gas to produce solid gypsum/calcium sulfate sludge, removing up to $98\\%$ of sulfur emissions before release.",
            "distractorTip": "Wet/Dry Scrubbers remove SULFUR DIOXIDE ($SO_2$); Electrostatic Precipitators and Baghouse Filters remove PARTICULATE MATTER."
          },
          {
            "id": "es7-l4-q2",
            "stem": "A vehicle’s Catalytic Converter contains platinum, palladium, and rhodium catalysts that convert toxic exhaust emissions into which harmless atmospheric compounds?",
            "options": [
              "Sulfur dioxide is converted into pure elemental gold.",
              "Carbon monoxide ($CO$), nitrogen oxides ($NO_x$), and hydrocarbons are converted into carbon dioxide ($CO_2$), nitrogen gas ($N_2$), and water vapor ($H_2O$).",
              "Carbon dioxide is converted into pure breathable oxygen gas.",
              "Ozone is converted into liquid hydrogen fuel."
            ],
            "correctIndex": 1,
            "explanation": "Catalytic converters facilitate redox reactions: $2CO + O_2 \\to 2CO_2$, $2NO_x \\to N_2 + xO_2$, and unburnt hydrocarbons are oxidized into $CO_2$ and $H_2O$, drastically cutting photochemical smog precursors.",
            "distractorTip": "Catalytic converters convert $CO \\to CO_2$ and $NO_x \\to N_2$. (Note: they do NOT reduce $CO_2$ greenhouse emissions)."
          },
          {
            "id": "apes7-l4-q3",
            "stem": "Which industrial emissions control technology is installed on coal-fired power plant smokestacks to remove sulfur dioxide ($SO_2$) gas by spraying an alkaline slurry (such as calcium carbonate limestone)?",
            "options": [
              "Electrostatic precipitators",
              "Wet scrubbers (flue-gas desulfurization)",
              "Baghouse fabric filters",
              "Catalytic converters"
            ],
            "correctIndex": 1,
            "explanation": "Wet scrubbers spray an alkaline limestone slurry ($CaCO_3$) through industrial flue gas. The sulfur dioxide ($SO_2$) reacts with the limestone to form solid calcium sulfate (gypsum sludge), removing over 90% of sulfur dioxide emissions before release into the atmosphere.",
            "distractorTip": "Wet scrubbers = remove $SO_2$ gas using limestone slurry; Electrostatic precipitators and baghouse filters = remove PARTICULATE MATTER."
          }
        ]
      },
      {
        "id": 705,
        "unitIndex": 7,
        "levelNumber": 5,
        "uniqueKey": "apes-u7-l5",
        "topicNumber": "Topic 7.7 & 7.8",
        "name": "Acid Deposition & Noise Pollution",
        "subtitle": "Aluminum toxicity, limestone buffering capacity, and decibel disruption",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es7-l5-q1",
            "stem": "Why are freshwater aquatic ecosystems located on granitic bedrock (such as in the Adirondack Mountains of New York) significantly more vulnerable to acidification from acid rain than ecosystems on limestone bedrock?",
            "options": [
              "Limestone releases toxic heavy metals upon contact with water.",
              "Granite chemically synthesizes excess hydrochloric acid when wet.",
              "Limestone contains calcium carbonate ($CaCO_3$), which naturally neutralizes and buffers incoming hydrogen ions ($H^+$), whereas granite lacks buffering capacity.",
              "Granite accelerates atmospheric ozone formation."
            ],
            "correctIndex": 2,
            "explanation": "Limestone ($CaCO_3$) acts as an antacid buffer ($CaCO_3 + 2H^+ \\to Ca^{2+} + H_2O + CO_2$), neutralizing acid rain. Granite is chemically inert silicate that cannot buffer acidity, allowing lake pH to plummet below 5.0.",
            "distractorTip": "High buffering capacity = Limestone bedrock (protected). Low buffering capacity = Granitic bedrock (vulnerable to acid shock)."
          },
          {
            "id": "es7-l5-q2",
            "stem": "When acid precipitation ($pH < 5.0$) leaches through forest soils, it mobilizes which naturally occurring soil metal ion that is lethal to aquatic organisms by clogging fish gill membranes with mucus?",
            "options": [
              "Potassium ions ($K^+$)",
              "Sodium ions ($Na^+$)",
              "Magnesium ions ($Mg^{2+}$)",
              "Aluminum ions ($Al^{3+}$)"
            ],
            "correctIndex": 3,
            "explanation": "Acidic water dissolves bound aluminum in the soil. Leached $Al^{3+}$ washes into lakes and rivers, where it damages gill tissue and triggers excess mucus secretion in fish, causing asphyxiation and mass die-offs.",
            "distractorTip": "Aluminum toxicity is the primary mechanism by which acid rain kills fish in freshwater lakes."
          },
          {
            "id": "apes7-l5-q3",
            "stem": "What environmental impact occurs when acid deposition ($pH < 5.0$) leaches into aquatic freshwater lakes and forest soils?",
            "options": [
              "It raises water pH, causing rapid coral reef calcification.",
              "It mobilizes toxic aluminum ions ($Al^{3+}$) from soil minerals into lake water, damaging fish gill tissues and suffocating aquatic wildlife.",
              "It converts all water molecules into heavy water isotopes.",
              "It stimulates excessive calcium absorption in tree foliage."
            ],
            "correctIndex": 1,
            "explanation": "Acid deposition (from $SO_2$ and $NO_x$ reacting with atmospheric water to form $H_2SO_4$ and $HNO_3$) lowers soil and water pH. Acidic conditions leach essential nutrients (calcium, magnesium) and liberate toxic dissolved aluminum ($Al^{3+}$) into lakes, which damages fish gills and causes asphyxiation.",
            "distractorTip": "Acid rain liberates toxic aluminum ions in soil/water, which coats fish gills and impairs breathing, while leaching essential calcium."
          }
        ]
      },
      {
        "id": 706,
        "unitIndex": 7,
        "levelNumber": 6,
        "uniqueKey": "apes-u7-l6",
        "topicNumber": "Unit 7 Boss",
        "name": "Apex Atmospheric Crucible",
        "subtitle": "Diurnal ozone cycles, VOC-limited vs NOx-limited regimes, and acid buffering",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "es7-l6-q1",
            "stem": "A metropolitan airshed experiences severe midday tropospheric ozone spikes. Environmental scientists determine that reducing vehicular $NO_x$ emissions produces an immediate drop in peak ozone levels. This indicates that the urban airshed is currently operating in a:",
            "options": [
              "$NO_x$-limited regime (where nitrogen oxide availability dictates the rate of photochemical ozone production)",
              "VOC-saturated infinite regime",
              "Thermal inversion vacuum",
              "CFC depletion zone"
            ],
            "correctIndex": 0,
            "explanation": "In a $NO_x$-limited regime, $NO_x$ is the rate-limiting chemical reactant. Cutting $NO_x$ emissions directly curtails ozone formation. In a VOC-limited regime, by contrast, cutting VOCs would be required to reduce smog.",
            "distractorTip": "Understanding whether a city is $NO_x$-limited (often suburban/rural) or VOC-limited (dense urban cores) determines the most effective municipal air quality policy."
          },
          {
            "id": "es7-l6-q2",
            "stem": "How does high noise pollution from commercial maritime shipping and offshore oil seismic testing directly harm marine cetaceans (whales and dolphins)?",
            "options": [
              "Sound waves physically heat ocean water by $10^\\circ\\text{C}$.",
              "Continuous low-frequency underwater acoustic noise masks biological communication, interferes with echolocation navigation and foraging, and causes severe acoustic stress and disorientation.",
              "Sound waves chemically neutralize dissolved oxygen.",
              "Noise pollution causes instantaneous coral calcification."
            ],
            "correctIndex": 1,
            "explanation": "Cetaceans rely on sound for echolocation, navigation, and pod communication across vast ocean basins. Anthropogenic underwater noise masks these acoustic frequencies, stranding whales and disrupting feeding.",
            "distractorTip": "Noise pollution is an official AP Environmental Science topic that impairs animal communication, hunting, and migration."
          },
          {
            "id": "apes7-l6-q3",
            "stem": "Which of the following automotive exhaust components is converted into harmless nitrogen gas ($N_2$), carbon dioxide ($CO_2$), and water vapor ($H_2O$) by a three-way catalytic converter?",
            "options": [
              "Nitrogen oxides ($NO_x$), carbon monoxide ($CO$), and unburnt hydrocarbons (VOCs)",
              "Sulfur dioxide and chlorofluorocarbons",
              "Radon gas and ozone",
              "Heavy lead particulates and mercury vapor"
            ],
            "correctIndex": 0,
            "explanation": "A catalytic converter uses platinum, palladium, and rhodium catalyst metals to promote chemical reduction and oxidation reactions: converting toxic $NO_x$ into $N_2$ and $O_2$, and oxidizing toxic $CO$ and unburned hydrocarbons into harmless $CO_2$ and $H_2O$.",
            "distractorTip": "Catalytic converters reduce $NO_x, CO$, and hydrocarbons from car exhaust, converting them into $N_2, CO_2$, and $H_2O$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 8,
    "unitId": "u8",
    "title": "Unit 8: Aquatic & Terrestrial Pollution",
    "shortTitle": "Unit 8: Pollution",
    "description": "Point vs nonpoint sources, endocrine disruptors, eutrophication & dead zones, thermal pollution, Persistent Organic Pollutants (POPs), biomagnification, sanitary landfills, and primary/secondary/tertiary sewage treatment",
    "examWeight": "7–10% of AP Exam",
    "biome": {
      "name": "Hypoxic Bay & Treatment Basin",
      "icon": "☣️",
      "accentColor": "#06B6D4",
      "secondaryColor": "#0891B2",
      "groundGradient": "from-cyan-100 via-teal-50 to-blue-100",
      "cardBorder": "border-cyan-500",
      "trailColor": "#06b6d4",
      "nodeRing": "ring-cyan-400/40",
      "skyTint": "from-cyan-50 to-blue-50/30"
    },
    "levels": [
      {
        "id": 801,
        "unitIndex": 8,
        "levelNumber": 1,
        "uniqueKey": "apes-u8-l1",
        "topicNumber": "Topic 8.1 - 8.3",
        "name": "Sources of Pollution & Endocrine Disruptors",
        "subtitle": "Point vs nonpoint sources and hormone mimics in aquatic life",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es8-l1-q1",
            "stem": "Which scenario is an example of a NONPOINT source of water pollution?",
            "options": [
              "An illegal chemical drain pipe from an industrial paint manufacturing plant.",
              "A rupture in a discharge pipe at a municipal wastewater treatment plant.",
              "Agricultural fertilizer and pesticide runoff washing into a river from hundreds of farms across a watershed during a storm.",
              "Effluent flowing from a coal power plant’s thermal cooling discharge canal."
            ],
            "correctIndex": 2,
            "explanation": "Nonpoint sources are broad, diffuse areas of discharge (such as agricultural field runoff, urban street runoff, or clearcut logging erosion) with no single identifiable discharge pipe. Point sources originate from a discrete pipe or channel.",
            "distractorTip": "Single discrete pipe = Point source. Diffuse watershed runoff = Nonpoint source."
          },
          {
            "id": "es8-l1-q2",
            "stem": "Endocrine disruptors (such as bisphenol A [BPA], phthalates, and the synthetic herbicide atrazine) impair wildlife health primarily by:",
            "options": [
              "Accelerating primary ecological succession in lakes.",
              "Directly dissolving fish bone skeletons through acid reactions.",
              "Destroying red blood cells within seconds of contact.",
              "Mimicking or blocking natural hormones in the body, binding to cellular receptors and causing reproductive defects, low sperm counts, and feminization of male amphibians."
            ],
            "correctIndex": 3,
            "explanation": "Endocrine disruptors interfere with the endocrine (hormone) signaling system. Atrazine and synthetic estrogens feminize male frogs (inducing egg production in male testes) and disrupt developmental and reproductive pathways at very low concentrations.",
            "distractorTip": "Endocrine disruptors mimic natural hormones (like estrogen) and cause reproductive/developmental abnormalities."
          },
          {
            "id": "apes8-l1-q3",
            "stem": "Chemical compounds such as Bisphenol A (BPA) and phthalates that mimic or block natural animal hormones and disrupt physiological development at extremely low concentrations are known as:",
            "options": [
              "Broad-spectrum organophosphates",
              "Primary greenhouse gases",
              "Endocrine disruptors",
              "Atmospheric photochemical oxidants"
            ],
            "correctIndex": 2,
            "explanation": "Endocrine disruptors are synthetic chemicals (plastics additives like BPA, phthalates, pesticides like atrazine) that interfere with the endocrine hormone system by mimicking natural hormones (like estrogen) or blocking hormone receptors, causing reproductive abnormalities, birth defects, and tumors.",
            "distractorTip": "Endocrine disruptors (BPA, phthalates, atrazine) mimic natural hormones, causing reproductive abnormalities and developmental defects."
          }
        ]
      },
      {
        "id": 802,
        "unitIndex": 8,
        "levelNumber": 2,
        "uniqueKey": "apes-u8-l2",
        "topicNumber": "Topic 8.4 & 8.5",
        "name": "Cultural Eutrophication & Hypoxia",
        "subtitle": "BOD curves, algal decomposition, and hypoxic dead zones",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es8-l2-q1",
            "stem": "What is Biochemical Oxygen Demand (BOD), and what happens to BOD when raw untreated sewage or dying algae enter a river ecosystem?",
            "options": [
              "BOD is the amount of oxygen required by aerobic decomposer bacteria to break down organic matter; introducing organic waste causes BOD to spike sharply.",
              "BOD is the total weight of photosynthetic plants; it drops to zero.",
              "BOD is the amount of oxygen dissolved in water; it increases exponentially.",
              "BOD is the velocity of water flow in a mountain stream."
            ],
            "correctIndex": 0,
            "explanation": "BOD measures the rate at which aerobic bacteria consume dissolved oxygen while decomposing organic waste. A large influx of organic sewage or dead algae triggers a massive surge in bacterial numbers, causing BOD to spike and depleting dissolved oxygen (creating an oxygen sag curve).",
            "distractorTip": "HIGH organic waste = HIGH BOD = LOW Dissolved Oxygen (DO). Notice the inverse relationship between BOD and DO!"
          },
          {
            "id": "es8-l2-q2",
            "stem": "A dead zone in a marine estuary is formally defined as an aquatic region characterized by \"Hypoxia.\" In biological monitoring, hypoxia corresponds to dissolved oxygen levels:",
            "options": [
              "Reaching $100\\%$ pure dissolved oxygen saturation.",
              "Dropping below $2.0\\,\\text{mg/L}$ (or ppm), an oxygen concentration too low to support most aerobic fish and benthic invertebrates.",
              "Exceeding $20.0\\,\\text{mg/L}$.",
              "Remaining completely stable at $8.0\\,\\text{mg/L}$."
            ],
            "correctIndex": 1,
            "explanation": "Normal healthy waters contain 7–10 mg/L of dissolved oxygen. Hypoxia occurs when DO drops below 2.0 mg/L, suffocating mobile organisms that cannot flee and killing sessile benthic shellfish.",
            "distractorTip": "Hypoxia = Dissolved Oxygen $< 2\\,\\text{mg/L}$. Anoxia = ZERO dissolved oxygen ($0\\,\\text{mg/L}$)."
          },
          {
            "id": "apes8-l2-q3",
            "stem": "What is the correct sequential order of biological and chemical events during cultural eutrophication of an aquatic freshwater lake?",
            "options": [
              "Hypoxia $\\to$ Fish kill $\\to$ Nutrient runoff $\\to$ Algal bloom $\\to$ Bacterial respiration",
              "Nutrient runoff (nitrogen/phosphorus) $\\to$ Explosive algal bloom $\\to$ Algae die and sink $\\to$ Aerobic decomposers consume dissolved oxygen during decay $\\to$ Hypoxic dead zone and fish suffocation",
              "Fish die $\\to$ Nutrient absorption $\\to$ Algae bloom $\\to$ Oxygen rises",
              "Algal bloom $\\to$ Photosynthesis surges $\\to$ Lake becomes hyper-oxygenated"
            ],
            "correctIndex": 1,
            "explanation": "Eutrophication sequence: (1) Fertilizer runoff rich in $N$ and $P$ enters water; (2) Algae reproduce rapidly in an algal bloom; (3) Algae die and sink; (4) Aerobic bacteria decompose dead algae, consuming dissolved oxygen (BOD increases); (5) Severe hypoxia leads to fish kills.",
            "distractorTip": "Key eutrophication point: Algae DO NOT suffocate fish directly; BACTERIA decomposing dead algae consume all the dissolved oxygen ($O_2$), causing fish to suffocate."
          }
        ]
      },
      {
        "id": 803,
        "unitIndex": 8,
        "levelNumber": 3,
        "uniqueKey": "apes-u8-l3",
        "topicNumber": "Topic 8.6 - 8.8",
        "name": "Persistent Organic Pollutants (POPs) & Biomagnification",
        "subtitle": "Fat-soluble toxins (DDT, PCBs, mercury) magnifying up trophic tiers",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es8-l3-q1",
            "stem": "What is the critical distinction between \"Bioaccumulation\" and \"Biomagnification\"?",
            "options": [
              "Biomagnification occurs only in primary producers; Bioaccumulation occurs only in decomposers.",
              "Bioaccumulation applies only to water; Biomagnification applies only to air.",
              "Bioaccumulation is the buildup of a fat-soluble toxin in a SINGLE organism over its lifespan; Biomagnification is the increasing concentration of that toxin at SUCCESSIVELY HIGHER trophic levels in a food web.",
              "Both terms are completely identical in meaning and scope."
            ],
            "correctIndex": 2,
            "explanation": "Bioaccumulation: An individual fish absorbs mercury from water and stores it in its fatty tissue throughout life. Biomagnification: Big fish eat thousands of small fish, concentrating the toxin to dangerous parts-per-million levels in apex predators (e.g. tuna, ospreys).",
            "distractorTip": "Bioaccumulation = ONE individual over time. Biomagnification = UP the food chain to apex consumers."
          },
          {
            "id": "es8-l3-q2",
            "stem": "Persistent Organic Pollutants (POPs), such as DDT and polychlorinated biphenyls (PCBs), are especially hazardous to global ecosystems because they:",
            "options": [
              "Can only be synthesized by arctic polar bears.",
              "Break down harmlessly into water vapor within 24 hours.",
              "Are completely insoluble in animal fat.",
              "Are synthetic carbon-ring molecules that do not easily degrade, dissolve readily in animal adipose (fat) tissue, and travel vast distances through global air and water currents."
            ],
            "correctIndex": 3,
            "explanation": "POPs resist chemical and biological degradation due to stable halogenated carbon bonds. Because they are hydrophobic and lipid-soluble, they bioaccumulate in fatty tissues and biomagnify up food webs, concentrating in Arctic apex predators via atmospheric global distillation.",
            "distractorTip": "POPs are synthetic, fat-soluble, persistent (do not break down), and biomagnify up food chains."
          },
          {
            "id": "apes8-l3-q3",
            "stem": "Under the international Stockholm Convention, why are chemical compounds classified as Persistent Organic Pollutants (POPs) subjected to global production bans and strict disposal controls?",
            "options": [
              "They decompose within 24 hours into atmospheric nitrogen.",
              "They are highly water-soluble and flush harmlessly through kidneys.",
              "They have carbon-based synthetic structures that resist environmental degradation, accumulate in animal adipose fatty tissues, and biomagnify up food chains.",
              "They increase agricultural photosynthetic rates."
            ],
            "correctIndex": 2,
            "explanation": "POPs (such as DDT, PCBs, and dioxins) are synthetic organic chemicals with stable halogenated rings that do not break down easily in the environment. They are fat-soluble (lipophilic), accumulating in organism tissues (bioaccumulation) and concentrating at higher trophic levels (biomagnification).",
            "distractorTip": "POPs (Persistent Organic Pollutants): Resist degradation, fat-soluble, bioaccumulate in tissues, and biomagnify across trophic levels."
          }
        ]
      },
      {
        "id": 804,
        "unitIndex": 8,
        "levelNumber": 4,
        "uniqueKey": "apes-u8-l4",
        "topicNumber": "Topic 8.9 & 8.10",
        "name": "Solid Waste Disposal & Sanitary Landfills",
        "subtitle": "Clay/plastic liners, leachate collection, and methane recovery",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es8-l4-q1",
            "stem": "In a modern engineered Sanitary Landfill, what are the two essential containment features designed to prevent toxic \"Leachate\" from contaminating underlying groundwater aquifers?",
            "options": [
              "A compacted impermeable clay bottom liner combined with a thick flexible plastic (geomembrane) liner and a perforated leachate collection pipe system.",
              "A porous gravel bed with zero bottom lining.",
              "Open drainage ditches that discharge directly into local municipal streams.",
              "Sprinkling powdered limestone over unlined sand pits."
            ],
            "correctIndex": 0,
            "explanation": "Sanitary landfills require a composite liner consisting of at least 2 feet of compacted clay (impermeable) overlain by a high-density polyethylene (HDPE) geomembrane plastic liner. Leachate collection pipes pump toxic fluids to treatment plants before they can reach aquifers.",
            "distractorTip": "Landfill containment: Compacted clay + HDPE plastic liner + Leachate collection pipes + Methane extraction wells."
          },
          {
            "id": "es8-l4-q2",
            "stem": "Why do municipal sanitary landfills generate large volumes of combustible Methane ($CH_4$) gas, and how is this gas managed safely?",
            "options": [
              "Plastic bottles spontaneously combust under high pressure.",
              "Anaerobic bacteria decompose compacted organic waste in the absence of oxygen; landfills install extraction wells to capture and burn methane to generate electricity.",
              "Methane is pumped into landfills by waste disposal trucks to sterilize medical garbage.",
              "Methane gas evaporates completely into liquid nitrogen."
            ],
            "correctIndex": 1,
            "explanation": "Because landfills compact trash and cover it daily with soil, oxygen is excluded. Anaerobic methanogenic bacteria digest organic waste (food, paper), generating methane ($CH_4$). Wells extract the gas to prevent explosive underground migration and flare it or burn it in generators.",
            "distractorTip": "Anaerobic decomposition = Methane ($CH_4$). Aerobic composting = Carbon dioxide ($CO_2$)."
          },
          {
            "id": "apes8-l4-q3",
            "stem": "Modern municipal sanitary landfills are engineered with an impermeable bottom liner composed of compacted clay and thick plastic sheeting primarily to prevent which environmental hazard?",
            "options": [
              "The escape of greenhouse gases into the upper atmosphere.",
              "Leachate (toxic liquid contaminated by percolating rainwater) from seeping downward into local groundwater aquifers.",
              "Earthquakes triggered by the weight of compacted solid municipal waste.",
              "Rodent burrowing through solid trash layers."
            ],
            "correctIndex": 1,
            "explanation": "Rainwater percolating through landfill waste dissolves heavy metals, battery acids, and organic toxins, creating a hazardous liquid known as leachate. The clay and high-density plastic liner prevents this leachate from contaminating surrounding soil and municipal groundwater aquifers.",
            "distractorTip": "Sanitary landfill features: Clay/plastic liner prevents LEACHATE from contaminating groundwater; Pipes collect methane gas for energy."
          }
        ]
      },
      {
        "id": 805,
        "unitIndex": 8,
        "levelNumber": 5,
        "uniqueKey": "apes-u8-l5",
        "topicNumber": "Topic 8.11",
        "name": "Sewage Treatment Plant Operations",
        "subtitle": "Primary (physical), Secondary (biological), and Tertiary (chemical disinfection)",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es8-l5-q1",
            "stem": "What biological process takes place during the SECONDARY treatment stage of a municipal wastewater treatment plant?",
            "options": [
              "Heavy grit and gravel settle to the bottom of primary sedimentation tanks.",
              "Large physical screens remove floating rags, branches, and plastic bottles.",
              "Aerobic bacteria in aerated digestion tanks decompose dissolved and suspended biodegradable organic matter, substantially lowering the effluent’s Biochemical Oxygen Demand (BOD).",
              "Ultraviolet light is applied to neutralize pharmaceutical hormones."
            ],
            "correctIndex": 2,
            "explanation": "Secondary treatment is BIOLOGICAL: sewage is pumped into aeration tanks where bubbling oxygen allows aerobic microorganisms to feast on dissolved organic waste, converting it to biomass (sludge) and water, drastically lowering BOD.",
            "distractorTip": "Primary treatment = PHYSICAL (bar screens, settling tanks). Secondary = BIOLOGICAL (aerobic bacteria). Tertiary = CHEMICAL/DISINFECTION (chlorine, UV)."
          },
          {
            "id": "es8-l5-q2",
            "stem": "Before treated municipal wastewater effluent can be safely discharged into a public river, what is the final disinfection step in Tertiary treatment?",
            "options": [
              "Bubbling raw methane gas through the pipes.",
              "Spraying wastewater with synthetic petroleum lubricants.",
              "Freezing the water into ice blocks.",
              "Disinfection using chlorine gas, ultraviolet (UV) radiation, or ozone to kill pathogenic bacteria, viruses, and parasites."
            ],
            "correctIndex": 3,
            "explanation": "The final step of sewage treatment is disinfection to eradicate human pathogens (e.g., E. coli, cholera, giardia). Facilities expose effluent to UV light, bubble ozone, or add chlorine (which is then dechlorinated before river discharge).",
            "distractorTip": "Disinfection kills PATHOGENS (disease-causing microbes); it does NOT remove dissolved heavy metals or plastics."
          },
          {
            "id": "apes8-l5-q3",
            "stem": "During municipal wastewater treatment, what is the primary biological function of the secondary treatment stage?",
            "options": [
              "Physical screening of large debris like rags and sticks with coarse metal bar screens.",
              "Disinfecting the effluent with ultraviolet radiation, ozone, or chlorine.",
              "Cultivating aerobic bacteria in aeration tanks to consume and digest dissolved organic matter, significantly lowering the Biochemical Oxygen Demand (BOD).",
              "Filtering microplastics using reverse osmosis membranes."
            ],
            "correctIndex": 2,
            "explanation": "Primary treatment is physical (bar screens, grit settling chambers). Secondary treatment is BIOLOGICAL: wastewater is aerated so that aerobic microorganisms digest dissolved organic matter, removing up to 90% of BOD. Tertiary treatment provides chemical or advanced physical polishing (disinfection, nutrient removal).",
            "distractorTip": "Wastewater Treatment: Primary = PHYSICAL (screening/settling); Secondary = BIOLOGICAL (bacteria digest organic waste); Tertiary = CHEMICAL (disinfection/nutrient removal)."
          }
        ]
      },
      {
        "id": 806,
        "unitIndex": 8,
        "levelNumber": 6,
        "uniqueKey": "apes-u8-l6",
        "topicNumber": "Topic 8.12 & 8.13",
        "name": "Toxicology: LD50 & Dose-Response Curves",
        "subtitle": "Median lethal dose, threshold levels, and waterborne pathogens",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es8-l6-q1",
            "stem": "In a toxicological bioassay, Chemical X has an $LD_{50}$ of $5\\,\\text{mg/kg}$, while Chemical Y has an $LD_{50}$ of $500\\,\\text{mg/kg}$. Which statement is toxicologically accurate?",
            "options": [
              "Chemical X is $100\\times$ MORE toxic than Chemical Y, because a vastly smaller dose kills $50\\%$ of the test population.",
              "Chemical Y is more toxic because its number is 100 times larger.",
              "Both chemicals have identical toxicity thresholds.",
              "Chemical X is completely harmless to mammals."
            ],
            "correctIndex": 0,
            "explanation": "$LD_{50}$ is the lethal dose required to kill $50\\%$ of a test population. The SMALLER the $LD_{50}$ value, the MORE lethal/toxic the chemical, because very little substance is needed to cause mortality.",
            "distractorTip": "LOWER $LD_{50}$ = HIGHER TOXICITY! Always remember this inverse relationship on AP exam MCQs."
          },
          {
            "id": "es8-l6-q2",
            "stem": "Cholera and dysentery are waterborne diseases that frequently cause deadly epidemics in refugee camps and flooded disaster zones. What is the transmission pathway for these pathogens?",
            "options": [
              "Inhalation of radioactive radon-222 gas from basements.",
              "Ingestion of drinking water contaminated with untreated human fecal waste containing pathogenic bacteria.",
              "Bites from nocturnal Anopheles mosquitoes.",
              "Exposure to high decibel noise pollution."
            ],
            "correctIndex": 1,
            "explanation": "Cholera (Vibrio cholerae) and amoebic dysentery are spread via the fecal-oral route when sewage overflows into municipal drinking water wells and rivers, causing acute dehydration from severe diarrhea.",
            "distractorTip": "Waterborne pathogens (cholera, dysentery) = fecal contamination of drinking water. Vector-borne (malaria, Zika) = mosquito bites."
          },
          {
            "id": "apes8-l6-q3",
            "stem": "In environmental toxicology, what does the median lethal dose ($LD_{50}$) indicate on a chemical dose-response curve?",
            "options": [
              "The minimum dose that causes any detectable physiological symptom in an organism.",
              "The legal allowable concentration of a pesticide in consumer drinking water.",
              "The dose of a chemical toxin that is lethal to exactly 50% of the test animal population.",
              "The threshold concentration at which an ecosystem collapses."
            ],
            "correctIndex": 2,
            "explanation": "$LD_{50}$ (Lethal Dose 50%) is the standard metric of acute chemical toxicity: the dose of a substance required to kill 50% of a test population within a specified observation period. Lower $LD_{50}$ values indicate higher toxicity.",
            "distractorTip": "$LD_{50}$ = dose that kills 50% of the population. A LOWER $LD_{50}$ value means a substance is MORE TOXIC (requires less to kill)."
          }
        ]
      },
      {
        "id": 807,
        "unitIndex": 8,
        "levelNumber": 7,
        "uniqueKey": "apes-u8-l7",
        "topicNumber": "Unit 8 Boss",
        "name": "Apex Pollution Crucible",
        "subtitle": "CERCLA Superfund toxic sites, plume tracking, and biomagnification synthesis",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "es8-l7-q1",
            "stem": "In the United States, the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA), commonly known as the \"Superfund\" Act, was enacted to:",
            "options": [
              "Regulate emissions of criteria air pollutants from motor vehicles.",
              "Fund commercial coal mining operations across public lands.",
              "Identify abandoned hazardous waste sites, establish a national priority liability list, and clean up contaminated brownfields to protect public health and groundwater.",
              "Subsidize municipal plastic bottle manufacturing plants."
            ],
            "correctIndex": 2,
            "explanation": "Enacted in 1980 after the Love Canal disaster, CERCLA (Superfund) holds responsible polluters liable for hazardous chemical dumps and funds emergency cleanup of abandoned toxic waste sites.",
            "distractorTip": "CERCLA = Superfund (cleans up abandoned toxic waste sites). RCRA = Cradle-to-grave tracking of active hazardous waste."
          },
          {
            "id": "es8-l7-q2",
            "stem": "Methylmercury in an industrial harbor has an ambient concentration of $0.00001\\,\\text{ppm}$ in water. Phytoplankton absorb it to $0.01\\,\\text{ppm}$, zooplankton reach $0.1\\,\\text{ppm}$, small fish reach $1.0\\,\\text{ppm}$, and apex predator swordfish accumulate $10.0\\,\\text{ppm}$ in their muscle tissue. By what factor has the mercury concentration biomagnified from water to apex swordfish?",
            "options": [
              "$1000\\times$",
              "$10{,}000\\times$",
              "$100\\times$",
              "$1{,}000{,}000\\times$ (one million times)"
            ],
            "correctIndex": 3,
            "explanation": "Magnification factor $= \\frac{\\text{Concentration in apex predator}}{\\text{Concentration in water}} = \\frac{10.0\\,\\text{ppm}}{0.00001\\,\\text{ppm}} = \\frac{10}{10^{-5}} = 10^6 = 1{,}000{,}000\\times$.",
            "distractorTip": "Fat-soluble heavy metals (methylmercury) and POPs can biomagnify by factors of hundreds of thousands to millions of times in top carnivores."
          },
          {
            "id": "apes8-l7-q3",
            "stem": "Which of the following heavy metal pollutants is released into the atmosphere primarily through the combustion of coal, and undergoes atmospheric deposition into wetlands where anaerobic bacteria convert it into neurotoxic methylmercury?",
            "options": [
              "Lead ($Pb$)",
              "Mercury ($Hg$)",
              "Cadmium ($Cd$)",
              "Arsenic ($As$)"
            ],
            "correctIndex": 1,
            "explanation": "Coal combustion is the single largest anthropogenic source of airborne mercury ($Hg$). Once deposited in aquatic ecosystems, anaerobic sulfate-reducing bacteria methylate inorganic mercury into highly toxic methylmercury ($CH_3Hg^+$), which biomagnifies in predatory marine fish (tuna, swordfish).",
            "distractorTip": "Coal combustion releases MERCURY ($Hg$), which aquatic bacteria convert into neurotoxic methylmercury that biomagnifies up food webs."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 9,
    "unitId": "u9",
    "title": "Unit 9: Global Change",
    "shortTitle": "Unit 9: Global Change",
    "description": "Stratospheric ozone depletion & Montreal Protocol, greenhouse gases & Global Warming Potential (GWP), ocean warming and acidification, invasive generalists, and HIPPCO biodiversity loss",
    "examWeight": "15–20% of AP Exam",
    "biome": {
      "name": "Glacial Shelf & Acidifying Coral Reef",
      "icon": "🧊",
      "accentColor": "#38BDF8",
      "secondaryColor": "#0284C7",
      "groundGradient": "from-sky-100 via-indigo-50 to-blue-100",
      "cardBorder": "border-sky-500",
      "trailColor": "#38bdf8",
      "nodeRing": "ring-sky-400/40",
      "skyTint": "from-sky-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 901,
        "unitIndex": 9,
        "levelNumber": 1,
        "uniqueKey": "apes-u9-l1",
        "topicNumber": "Topic 9.1 & 9.2",
        "name": "Stratospheric Ozone Depletion",
        "subtitle": "CFC catalytic cycles, UV-B protection, and the Montreal Protocol (1987)",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es9-l1-q1",
            "stem": "In the stratosphere, Chlorofluorocarbons (CFCs) release free chlorine atoms upon exposure to solar UV radiation. In the catalytic ozone destruction cycle ($Cl + O_3 \\to ClO + O_2$), approximately how many ozone molecules can a single chlorine radical destroy before being removed?",
            "options": [
              "Up to $100{,}000$ ozone molecules",
              "Exactly one ozone molecule",
              "Between 2 and 5 ozone molecules",
              "Zero, because chlorine acts as an inert bystander"
            ],
            "correctIndex": 0,
            "explanation": "Chlorine acts as a catalyst: it breaks ozone into $ClO + O_2$. When $ClO$ reacts with a free oxygen atom ($ClO + O \\to Cl + O_2$), the chlorine radical is regenerated intact, allowing a single $Cl$ atom to destroy up to 100,000 ozone molecules.",
            "distractorTip": "Chlorine is a CATALYST: it is not consumed in the reaction, enabling massive catalytic ozone destruction."
          },
          {
            "id": "es9-l1-q2",
            "stem": "The landmark 1987 international treaty that successfully phased out global production of Chlorofluorocarbons (CFCs) to protect the stratospheric ozone layer is called:",
            "options": [
              "The Kyoto Protocol",
              "The Montreal Protocol",
              "The Paris Climate Agreement",
              "The CITES Treaty"
            ],
            "correctIndex": 1,
            "explanation": "The Montreal Protocol on Substances that Deplete the Ozone Layer (1987) is widely hailed as the most successful global environmental treaty, phasing out CFCs and halons and allowing the Antarctic ozone layer to slowly heal.",
            "distractorTip": "Montreal Protocol = Stratospheric OZONE protection (CFC ban). Kyoto Protocol / Paris Agreement = CLIMATE CHANGE (greenhouse gas reduction)."
          },
          {
            "id": "apes9-l1-q3",
            "stem": "How do chlorofluorocarbons (CFCs) destroy stratospheric ozone ($O_3$) molecules?",
            "options": [
              "CFCs act as greenhouse gases that freeze stratospheric water vapor.",
              "Solar ultraviolet (UV-C) radiation breaks chlorine atoms off CFC molecules; the free chlorine radical acts as a catalytic enzyme, repeatedly breaking ozone into $O_2$ and destroying thousands of ozone molecules per chlorine atom.",
              "CFCs react with carbon dioxide to form acid rain.",
              "CFCs block sunlight from reaching the upper stratosphere."
            ],
            "correctIndex": 1,
            "explanation": "In the stratosphere, UV radiation dissociates CFCs, releasing chlorine radicals ($Cl\\cdot$). A chlorine atom attacks ozone: $Cl + O_3 \\to ClO + O_2$. $ClO$ then reacts with free oxygen atoms to regenerate the chlorine atom: $ClO + O \\to Cl + O_2$. One chlorine atom can destroy over 100,000 ozone molecules before being deactivated.",
            "distractorTip": "CFCs release CHLORINE radicals that act as catalysts, repeatedly destroying thousands of ozone molecules in the stratosphere."
          }
        ]
      },
      {
        "id": 902,
        "unitIndex": 9,
        "levelNumber": 2,
        "uniqueKey": "apes-u9-l2",
        "topicNumber": "Topic 9.3 & 9.4",
        "name": "The Greenhouse Effect & Global Warming Potential (GWP)",
        "subtitle": "Infrared absorption, GWP comparisons (CO_2=1 vs CH_4 vs N_2O vs CFCs)",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es9-l2-q1",
            "stem": "How does the natural Greenhouse Effect physically warm Earth’s lower troposphere?",
            "options": [
              "Greenhouse gases generate nuclear heat through internal fission reactions.",
              "Greenhouse gases absorb incoming solar visible light before it strikes Earth.",
              "Shortwave solar ultraviolet/visible radiation passes through the atmosphere and warms Earth’s surface; Earth then re-emits longwave infrared (heat) radiation, which is absorbed and re-radiated back down by greenhouse gases.",
              "Solar radiation bounces directly off stratospheric ozone into city streets."
            ],
            "correctIndex": 2,
            "explanation": "Solar insolation is mostly shortwave radiation. Earth absorbs it and re-radiates longwave INFRARED radiation. Greenhouse gases ($H_2O, CO_2, CH_4, N_2O$) absorb and trap this infrared radiation, insulating the planet.",
            "distractorTip": "Key physics distinction: INCOMING radiation is shortwave visible/UV; OUTGOING radiation from Earth is longwave INFRARED."
          },
          {
            "id": "es9-l2-q2",
            "stem": "Carbon dioxide ($CO_2$) is assigned a Global Warming Potential (GWP) of 1. What is the approximate GWP of Methane ($CH_4$) and Nitrous Oxide ($N_2O$) over a 100-year timescale?",
            "options": [
              "Methane $= 10{,}000$, and Nitrous Oxide $= 100{,}000$",
              "Methane $= 0.1$, and Nitrous Oxide $= 0.5$",
              "Both have a GWP of exactly 1, identical to carbon dioxide.",
              "Methane $\\approx 28–36$, and Nitrous Oxide $\\approx 265–298$"
            ],
            "correctIndex": 3,
            "explanation": "GWP measures how much heat a greenhouse gas traps relative to $CO_2$. Over 100 years, a kilogram of $CH_4$ traps ~28–36 times more infrared heat than a kilogram of $CO_2$, while $N_2O$ traps nearly 300 times more heat. (CFCs have GWPs $> 10{,}000$).",
            "distractorTip": "Ranking GWP from lowest to highest: $CO_2$ (1) $<$ $CH_4$ (~30) $<$ $N_2O$ (~300) $<$ CFCs/HFCs ($>10{,}000$)."
          },
          {
            "id": "apes9-l2-q3",
            "stem": "Which greenhouse gas has a Global Warming Potential (GWP) significantly higher than carbon dioxide ($CO_2$) over a 20-year timescale and is emitted from livestock enteric fermentation, rice paddies, and natural gas pipeline leaks?",
            "options": [
              "Nitrous oxide ($N_2O$)",
              "Water vapor ($H_2O$)",
              "Methane ($CH_4$)",
              "Sulfur hexafluoride ($SF_6$)"
            ],
            "correctIndex": 2,
            "explanation": "Methane ($CH_4$) has a baseline GWP of approximately 25-30 over a 100-year horizon, but over a 20-year timescale its GWP exceeds 80 times that of carbon dioxide ($CO_2 = 1$). Major anthropogenic sources include cattle digestion, flooded rice fields, coal mines, landfills, and natural gas infrastructure.",
            "distractorTip": "Methane ($CH_4$): Potent greenhouse gas with a GWP > 25 times that of $CO_2$, emitted from cows, landfills, rice paddies, and natural gas leaks."
          }
        ]
      },
      {
        "id": 903,
        "unitIndex": 9,
        "levelNumber": 3,
        "uniqueKey": "apes-u9-l3",
        "topicNumber": "Topic 9.5 & 9.6",
        "name": "Climate Change Impacts & Ocean Warming",
        "subtitle": "Thermal expansion of seawater, land ice melting, and coral bleaching",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es9-l3-q1",
            "stem": "Global sea level rise is primarily driven by which two physical mechanisms?",
            "options": [
              "Thermal expansion of warming ocean water and the melting of terrestrial land ice (glaciers and ice sheets in Greenland and Antarctica).",
              "The melting of floating oceanic sea ice and increased precipitation over the Pacific.",
              "Submarine volcanic lava displacing ocean basins.",
              "Decreased evaporation due to tropospheric cloud cover."
            ],
            "correctIndex": 0,
            "explanation": "Two mechanisms cause sea level rise: (1) Thermal expansion: warmer water molecules vibrate more and expand in volume (~50% of rise); (2) Land-based ice melting: glaciers and continental ice sheets add new water mass to oceans. Melting floating sea ice does NOT raise sea levels (Archimedes’ principle).",
            "distractorTip": "Melting FLOATING Arctic sea ice does NOT raise sea level (it already displaces its weight). Only melting LAND ice and thermal expansion raise sea level!"
          },
          {
            "id": "es9-l3-q2",
            "stem": "When sustained ocean warming elevates sea surface temperatures above normal historical thresholds, coral reefs undergo \"Coral Bleaching.\" What biological event occurs during bleaching?",
            "options": [
              "Corals absorb toxic calcium carbonate from seawater.",
              "Stressed coral polyps expel their symbiotic photosynthetic zooxanthellae algae, turning bone white and starving unless water temperatures return to normal.",
              "Predatory sea stars physically paint corals with white bleach enzymes.",
              "Corals mutate into non-calcifying jellyfish."
            ],
            "correctIndex": 1,
            "explanation": "Corals rely on symbiotic zooxanthellae algae living inside their tissues for food (via photosynthesis) and vibrant color. High water temperatures cause algae to produce toxins; corals expel the algae, leaving white calcium carbonate skeletons exposed to starvation.",
            "distractorTip": "Ocean WARMING causes coral BLEACHING (zooxanthellae expulsion). Ocean ACIDIFICATION causes SHELL DISSOLUTION."
          },
          {
            "id": "apes9-l3-q3",
            "stem": "What causes large-scale 'coral bleaching' events in marine reef ecosystems?",
            "options": [
              "Commercial bottom-trawling nets physically scraping coral polyps from the seabed.",
              "Prolonged elevated sea surface temperatures induce thermal stress, causing coral polyps to expel their symbiotic photosynthetic algae (zooxanthellae), turning corals white and leaving them vulnerable to starvation.",
              "Plastic micro-beads clogging the digestive cavity of corals.",
              "Underwater seismic sound waves from oil exploration ships."
            ],
            "correctIndex": 1,
            "explanation": "Reef-building corals maintain a mutualistic symbiosis with photosynthetic dinoflagellates called zooxanthellae. When ocean temperatures rise by as little as 1-2°C above normal summer maximums, corals undergo thermal stress and expel their algae, losing their color and primary food source.",
            "distractorTip": "Coral bleaching = thermal stress causes coral polyps to EXPEL their photosynthetic algae (zooxanthellae); distinct from ocean acidification."
          }
        ]
      },
      {
        "id": 904,
        "unitIndex": 9,
        "levelNumber": 4,
        "uniqueKey": "apes-u9-l4",
        "topicNumber": "Topic 9.7",
        "name": "Ocean Acidification",
        "subtitle": "CO_2 + H_2O -> H_2CO_3 and depletion of carbonate ions (CO_3^2-)",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es9-l4-q1",
            "stem": "Excess anthropogenic $CO_2$ emitted into the atmosphere dissolves into ocean surface waters. Which chemical cascade correctly describes how Ocean Acidification harms marine calcifying organisms?",
            "options": [
              "$CO_2$ consumes all oxygen gas, suffocating marine phytoplankton.",
              "$CO_2$ reacts with salt to form hydrochloric acid ($HCl$), instantly boiling ocean waters.",
              "$CO_2 + H_2O \\to H_2CO_3 \\to H^+ + HCO_3^-$. The surplus free $H^+$ ions bind with carbonate ions ($CO_3^{2-}$), depleting the carbonate needed by corals and shellfish to build calcium carbonate ($CaCO_3$) shells.",
              "$CO_2$ crystallizes into solid diamonds that sink to the abyssal plain."
            ],
            "correctIndex": 2,
            "explanation": "Dissolved $CO_2$ forms carbonic acid ($H_2CO_3$), which dissociates into $H^+$ ions. Free $H^+$ ions bond with available carbonate ions ($H^+ + CO_3^{2-} \\to HCO_3^-$), starving marine organisms (corals, oysters, pteropods) of carbonate needed for $CaCO_3$ calcification, and corroding existing shells.",
            "distractorTip": "Notice the key consequence: Free $H^+$ steals $CO_3^{2-}$ away from shell builders, preventing calcification and dissolving existing shells!"
          },
          {
            "id": "es9-l4-q2",
            "stem": "Pteropods (\"sea butterflies\") are tiny swimming marine snails that form the foundational trophic base for salmon, herring, and baleen whales in polar oceans. How does ocean acidification directly threaten polar marine food webs?",
            "options": [
              "Acidification turns pteropod shells into radioactive lead.",
              "Acidic water prevents pteropods from swimming faster than whales.",
              "Pteropods mutate into toxic carnivorous jellyfish.",
              "Corrosive low-pH waters thin and dissolve the delicate calcium carbonate shells of juvenile pteropods, causing population collapses that starve higher-tier commercial fish."
            ],
            "correctIndex": 3,
            "explanation": "Cold polar waters absorb $CO_2$ more readily than warm waters, making the Southern and Arctic Oceans the first to become undersaturated with aragonite/carbonate. Dissolving pteropod shells cascades through the marine food chain.",
            "distractorTip": "Pteropods are primary indicator species for ocean acidification in polar marine biomes."
          },
          {
            "id": "apes9-l4-q3",
            "stem": "How does ocean acidification, resulting from the absorption of excess anthropogenic atmospheric carbon dioxide ($CO_2$), impair marine calcifying organisms like corals, oysters, and pteropods?",
            "options": [
              "It raises ocean water temperatures above boiling.",
              "Excess dissolved $CO_2$ reacts with seawater to form carbonic acid, which releases hydrogen ions ($H^+$); these $H^+$ ions bind to free carbonate ions ($CO_3^{2-}$), depleting the carbonate required by marine organisms to build and maintain calcium carbonate ($CaCO_3$) shells.",
              "It dissolves all marine nitrogen into toxic ammonia.",
              "It causes an immediate drop in ocean salinity."
            ],
            "correctIndex": 1,
            "explanation": "Dissolved $CO_2$ reacts with seawater: $CO_2 + H_2O \\to H_2CO_3 \\to H^+ + HCO_3^-$. The increased $H^+$ ions bond with carbonate ions ($H^+ + CO_3^{2-} \\to HCO_3^-$), depleting the available carbonate pool needed by calcifiers to synthesize aragonite/calcite shells ($Ca^{2+} + CO_3^{2-} \\to CaCO_3$), and even dissolving existing shells.",
            "distractorTip": "Ocean acidification: $CO_2$ creates carbonic acid, releasing $H^+$ ions that steal carbonate ($CO_3^{2-}$), preventing organisms from building shells."
          }
        ]
      },
      {
        "id": 905,
        "unitIndex": 9,
        "levelNumber": 5,
        "uniqueKey": "apes-u9-l5",
        "topicNumber": "Topic 9.8 - 9.10",
        "name": "Invasive Species & HIPPCO Extinction Drivers",
        "subtitle": "Generalist invasives, habitat loss, CITES, and Endangered Species Act (ESA)",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "es9-l5-q1",
            "stem": "In the acronym HIPPCO, which summarizes the greatest anthropogenic threats to global biodiversity, which factor is universally recognized as the single LEADING cause of species extinction?",
            "options": [
              "Habitat destruction, degradation, and fragmentation (the \"H\")",
              "Invasive non-native species (the \"I\")",
              "Human population growth (the first \"P\")",
              "Commercial overexploitation and poaching (the \"O\")"
            ],
            "correctIndex": 0,
            "explanation": "HIPPCO stands for Habitat destruction (the #1 cause of extinction), Invasive species, Population growth, Pollution, Climate change, and Overexploitation. Habitat loss through agriculture, deforestation, and urbanization threatens the most species globally.",
            "distractorTip": "Habitat loss/destruction is ALWAYS the #1 threat to biodiversity on AP Environmental Science exams."
          },
          {
            "id": "es9-l5-q2",
            "stem": "The Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) protects threatened species globally by:",
            "options": [
              "Buying private ranchland to construct federal wildlife preserves in the US.",
              "Banning or strictly regulating the international commercial trade, import, and export of endangered live specimens, body parts (ivory, rhino horn), and derived products.",
              "Mandating captive breeding programs in municipal zoos.",
              "Imposing global carbon taxes on maritime shipping."
            ],
            "correctIndex": 1,
            "explanation": "CITES is an international treaty signed by 180+ nations that penalizes cross-border trade in endangered animals and plants (e.g. elephant ivory, tiger skins, exotic parrots, rare orchids). The US Endangered Species Act (ESA) handles domestic protections.",
            "distractorTip": "CITES = International TRADE regulation in endangered wildlife. ESA = Domestic US species and critical habitat protection."
          },
          {
            "id": "apes9-l5-q3",
            "stem": "Which of the following characteristics makes an introduced non-native species most likely to become a highly destructive 'invasive species' in a novel ecosystem?",
            "options": [
              "Being an $r$-selected generalist species with a rapid reproduction rate, broad environmental tolerances, and an absence of natural predators, parasites, or competitors in the new habitat.",
              "Being a $K$-selected specialist with a specialized diet and narrow habitat requirements.",
              "Having a Type I survivorship curve and late sexual maturity.",
              "Exhibiting poor dispersal abilities and low genetic variation."
            ],
            "correctIndex": 0,
            "explanation": "Invasive species (e.g. zebra mussels, kudzu, cane toads) typically exhibit $r$-selected traits: rapid growth, high reproductive output, generalist diets, and broad ecological tolerances. In their new range, they escape natural predators and pathogens (the enemy release hypothesis), outcompeting native wildlife.",
            "distractorTip": "Successful invasive species are $r$-selected generalists that reproduce rapidly and face no natural predators in the introduced range."
          }
        ]
      },
      {
        "id": 906,
        "unitIndex": 9,
        "levelNumber": 6,
        "uniqueKey": "apes-u9-l6",
        "topicNumber": "Unit 9 Boss",
        "name": "Apex Global Change Crucible",
        "subtitle": "Positive climate feedback loops, permafrost thaw, and ocean conveyor disruption",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "es9-l6-q1",
            "stem": "As global temperatures rise, highly reflective white Arctic sea ice melts, exposing dark ocean water that absorbs more solar radiation, leading to accelerated warming and further ice loss. This self-reinforcing climate cycle is an example of:",
            "options": [
              "A Milankovitch orbital oscillation",
              "A Negative Climate Feedback Loop that stabilizes temperatures",
              "A Positive Climate Feedback Loop (the ice-albedo feedback)",
              "A biological primary succession cycle"
            ],
            "correctIndex": 2,
            "explanation": "A positive feedback loop amplifies or accelerates the initial change in the same direction: Warming $\\to$ Ice melts $\\to$ Lower albedo (reflectivity) $\\to$ More solar heat absorbed $\\to$ Faster warming. (Negative feedbacks counteract and stabilize changes).",
            "distractorTip": "Positive feedback = AMPLIFIES/ACCELERATES the change (vicious cycle). Negative feedback = OPPOSES/STABILIZES the system."
          },
          {
            "id": "es9-l6-q2",
            "stem": "Warming arctic temperatures cause subterranean permafrost to thaw across northern Siberia and Canada. Why is permafrost thaw considered one of the most perilous tipping points in global climate modeling?",
            "options": [
              "Thawed permafrost permanently absorbs all atmospheric nitrogen.",
              "Permafrost thaw instantly boils all subarctic rivers.",
              "Melting permafrost creates deep ocean trenches.",
              "Thawing permafrost awakens anaerobic soil microbes that decompose ancient trapped organic matter, releasing massive plumes of methane ($CH_4$) and carbon dioxide ($CO_2$), creating an uncontrollable positive feedback loop."
            ],
            "correctIndex": 3,
            "explanation": "Permafrost holds double the carbon currently in the entire atmosphere. Thawing allows anaerobic decomposition in soggy wetlands, releasing colossal volumes of methane ($CH_4$), a potent greenhouse gas that triggers runaway planetary warming.",
            "distractorTip": "Permafrost thaw = ancient organic decay $\\to$ massive methane ($CH_4$) and $CO_2$ release $\\to$ severe positive feedback."
          },
          {
            "id": "apes9-l6-q3",
            "stem": "Under the acronym HIPPCO, which human activity is recognized by conservation biologists as the single greatest driver of contemporary global biodiversity loss and species extinction?",
            "options": [
              "Invasive species introduction",
              "Global climate change",
              "Pollution of freshwater biomes",
              "Habitat destruction, fragmentation, and degradation"
            ],
            "correctIndex": 3,
            "explanation": "HIPPCO stands for Habitat destruction, Invasive species, Population growth, Pollution, Climate change, and Overexploitation. Habitat loss and fragmentation (primarily for agricultural conversion, deforestation, and urban development) is by far the leading cause of global species decline and extinction.",
            "distractorTip": "HIPPCO: H = Habitat loss (the #1 cause of extinction); I = Invasive species; P = Population; P = Pollution; C = Climate change; O = Overharvesting."
          }
        ]
      }
    ]
  }
];
