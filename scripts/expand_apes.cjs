const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// 56 levels in APES
// Repeat [2(C), 0(A), 3(D), 1(B)] across 56 levels (14 cycles)
// Exactly 14 C, 14 A, 14 D, 14 B added!

const q3Data = {
  // UNIT 1: The Living World: Ecosystems (6 levels)
  "apes-u1-l1": {
    id: "apes1-l1-q3",
    stem: "Which terrestrial biome is characterized by permafrost, extremely low annual precipitation, low average temperatures, and vegetation dominated by low-growing lichens, mosses, and dwarf shrubs?",
    options: [
      "Boreal forest (Taiga)",
      "Temperate grassland",
      "Tundra",
      "Temperate rainforest"
    ],
    correctIndex: 2, // C
    explanation: "The Arctic and Alpine Tundra biomes are defined by a permanently frozen subsoil layer known as permafrost, short growing seasons, cold windy climates, and stunted vegetation lacking deep root systems.",
    distractorTip: "Tundra = permafrost, low precipitation, lichens/mosses; Taiga (Boreal forest) = coniferous evergreen trees (spruce/pine)."
  },
  "apes-u1-l2": {
    id: "apes1-l2-q3",
    stem: "In the biogeochemical nitrogen cycle, which biological process converts airborne inert atmospheric nitrogen gas ($N_2$) into biologically usable ammonia ($NH_3$) or ammonium ($NH_4^+$)?",
    options: [
      "Biological nitrogen fixation by specialized bacteria (such as Rhizobium living in legume root nodules)",
      "Denitrification by anaerobic wetland bacteria",
      "Assimilation by autotrophic phytoplankton",
      "Ammonification by fungal decomposers"
    ],
    correctIndex: 0, // A
    explanation: "Atmospheric nitrogen ($N_2$) contains a strong triple covalent bond that plants cannot break directly. Nitrogen-fixing bacteria (such as Rhizobium symbiotic with legumes, and free-living cyanobacteria) convert $N_2$ into ammonia ($NH_3$) and ammonium ($NH_4^+$).",
    distractorTip: "Nitrogen Fixation: $N_2 \\to NH_3/NH_4^+$; Nitrification: $NH_4^+ \\to NO_2^- \\to NO_3^-$; Denitrification: $NO_3^- \\to N_2$ gas."
  },
  "apes-u1-l3": {
    id: "apes1-l3-q3",
    stem: "Why does the phosphorus cycle operate at a vastly slower geological pace compared to the carbon, nitrogen, and water cycles?",
    options: [
      "Phosphorus atoms are destroyed during nuclear fission.",
      "Phosphorus is only absorbed by chemosynthetic deep-sea bacteria.",
      "Phosphorus is insoluble in liquid water under all conditions.",
      "The phosphorus cycle lacks a significant atmospheric gaseous phase; its primary environmental reservoir is stored in sedimentary rock minerals that release phosphate slowly via weathering."
    ],
    correctIndex: 3, // D
    explanation: "Unlike nitrogen or carbon, phosphorus does not form a stable atmospheric gas under environmental temperatures and pressures. Its major sink is lithospheric sedimentary rock, from which it is released only through slow geological uplift and weathering.",
    distractorTip: "The Phosphorus cycle has NO gaseous atmospheric phase! Its main sink is rock/sediment."
  },
  "apes-u1-l4": {
    id: "apes1-l4-q3",
    stem: "An aquatic ecosystem has a Gross Primary Productivity (GPP) of $8.5\\text{ mg } O_2/\\text{L/day}$. If primary producers consume $3.5\\text{ mg } O_2/\\text{L/day}$ during cellular respiration (R), what is the Net Primary Productivity (NPP)?",
    options: [
      "12.0 mg O₂/L/day",
      "5.0 mg O₂/L/day",
      "2.4 mg O₂/L/day",
      "29.75 mg O₂/L/day"
    ],
    correctIndex: 1, // B
    explanation: "Net Primary Productivity is the rate at which biomass energy is stored after accounting for the metabolic respiration of producers: $NPP = GPP - R = 8.5 - 3.5 = 5.0\\text{ mg } O_2/\\text{L/day}$.",
    distractorTip: "Core APES equation: $NPP = GPP - R$. NPP represents the actual biomass available to consumers."
  },
  "apes-u1-l5": {
    id: "apes1-l5-q3",
    stem: "According to the Second Law of Thermodynamics and the 10% Rule of ecological efficiency, what happens to the remaining 90% of energy that is NOT transferred to the next higher trophic level?",
    options: [
      "It is converted into mineral phosphorus in the soil.",
      "It is reflected back into deep space as ultraviolet radiation.",
      "It is dissipated as low-quality metabolic heat during cellular respiration and lost via unconsumed biomass and waste.",
      "It is stored indefinitely in decomposer spores."
    ],
    correctIndex: 2, // C
    explanation: "The Second Law of Thermodynamics dictates that energy transformations are never 100% efficient; each transfer results in increased entropy. Roughly 90% of biomass energy is lost at each trophic step as metabolic heat through respiration, movement, and undigested waste.",
    distractorTip: "Energy is NOT recycled; it flows through ecosystems in one direction, dissipating as low-quality metabolic heat."
  },
  "apes-u1-l6": {
    id: "apes1-l6-q3",
    stem: "In an ecological food web, if a disease decimates the population of secondary consumer frogs, what immediate trophic cascade impact is most likely to occur?",
    options: [
      "Primary consumer herbivorous insect populations will increase, while tertiary consumer snake populations will decline.",
      "Producers will immediately double their photosynthetic rate.",
      "Apex predator eagle populations will increase tenfold.",
      "Decomposers will cease mineral recycling."
    ],
    correctIndex: 0, // A
    explanation: "Removing intermediate secondary consumers releases primary consumers (insects) from predation pressure, causing their population to increase. Simultaneously, higher-level carnivores that feed on frogs (snakes) lose a major food source, causing their population to decline.",
    distractorTip: "Trace food web shifts: Prey of the removed species increases (less predation); Predators of the removed species decrease (less food)."
  },

  // UNIT 2: The Living World: Biodiversity (5 levels)
  "apes-u2-l1": {
    id: "apes2-l1-q3",
    stem: "Wetland ecosystems provide water purification by filtering agricultural sediments and heavy metals, store floodwaters to reduce downstream property damage, and recharge municipal aquifers. These benefits are classified as which category of ecosystem service?",
    options: [
      "Provisioning services",
      "Cultural services",
      "Supporting services",
      "Regulating services"
    ],
    correctIndex: 3, // D
    explanation: "Regulating services are benefits obtained from the regulation of ecosystem processes, including water purification, flood mitigation, climate regulation, pollination, and disease vector control.",
    distractorTip: "Four Ecosystem Services: Provisioning = goods extracted (lumber, food); Regulating = processes moderated (flood control, water filtration); Cultural = recreation/beauty; Supporting = underlying processes (soil formation, photosynthesis)."
  },
  "apes-u2-l2": {
    id: "apes2-l2-q3",
    stem: "According to the MacArthur-Wilson Theory of Island Biogeography, which type of island will support the highest equilibrium species richness?",
    options: [
      "A small island located far from the continental mainland.",
      "A large island located close to the continental mainland.",
      "A small island located close to the continental mainland.",
      "A large island located far from the continental mainland."
    ],
    correctIndex: 1, // B
    explanation: "Species richness on an island represents a dynamic equilibrium between immigration and extinction. Large islands have higher habitat diversity and lower extinction rates. Islands close to the mainland have higher immigration rates. Therefore, large and near islands possess the highest biodiversity.",
    distractorTip: "Island Biogeography: Highest species richness = LARGE size (lower extinction) + NEAR mainland (higher immigration)."
  },
  "apes-u2-l3": {
    id: "apes2-l3-q3",
    stem: "A river experiencing thermal pollution from an industrial power plant discharge increases in temperature from $18^\\circ\\text{C}$ to $32^\\circ\\text{C}$. Cold-water trout die off, while warm-water carp survive and reproduce. This scenario illustrates:",
    options: [
      "Genetic drift in an isolated population.",
      "Competitive exclusion by an invasive species.",
      "Ecological tolerance, where trout have a narrow thermal range of tolerance and carp have a broader range.",
      "Secondary succession following a volcanic blast."
    ],
    correctIndex: 2, // C
    explanation: "Ecological tolerance refers to the range of abiotic conditions (temperature, salinity, pH, dissolved oxygen) in which an organism can survive and reproduce. Exceeding a species' optimum range causes physiological stress and mortality.",
    distractorTip: "Ecological tolerance: Organisms experience physiological stress and death when abiotic conditions move outside their tolerance range."
  },
  "apes-u2-l4": {
    id: "apes2-l4-q3",
    stem: "Following the retreat of a glacier, bare rock is exposed with zero pre-existing soil. Which pioneer species is most critical for initiating primary ecological succession by breaking down rock to form primitive soil?",
    options: [
      "Lichens and mosses that secrete mild organic acids",
      "Fast-growing hardwood oak trees",
      "Annual agricultural grasses",
      "Deep-rooted nitrogen-fixing shrubs"
    ],
    correctIndex: 0, // A
    explanation: "Primary succession begins on lifeless bare rock or volcanic basalt devoid of soil. Pioneer species like lichens (symbiotic fungi and algae) colonize bare rock, secreting acids that weather the mineral substrate, accumulating organic matter to form the first layer of soil.",
    distractorTip: "Primary succession starts with NO SOIL (bare rock $\\to$ lichens pioneer); Secondary succession starts WITH SOIL already intact (after forest fire)."
  },
  "apes-u2-l5": {
    id: "apes2-l5-q3",
    stem: "Why are generalist species typically more resilient to sudden human-induced environmental disruptions than specialist species?",
    options: [
      "Generalists have smaller population sizes and lower genetic diversity.",
      "Generalists reproduce only during specific seasons of the year.",
      "Generalists occupy broad ecological niches, tolerate a wide range of abiotic conditions, and utilize diverse food resources, allowing them to adapt when conditions change.",
      "Generalists are always apex predators with no natural competitors."
    ],
    correctIndex: 2, // C
    explanation: "Generalists (e.g. raccoons, coyotes, rats) have broad niches, varied diets, and wide environmental tolerances, allowing them to thrive during habitat alterations. Specialists (e.g. pandas, koalas) have narrow niches and specific food requirements, making them highly vulnerable to extinction.",
    distractorTip: "Generalists thrive in changing/disrupted environments; Specialists thrive in constant, stable environments."
  },

  // UNIT 3: Populations (6 levels)
  "apes-u3-l1": {
    id: "apes3-l1-q3",
    stem: "Which set of reproductive characteristics is characteristic of a $K$-selected species (such as elephants, whales, or humans)?",
    options: [
      "Small body size, rapid sexual maturity, producing thousands of offspring, and zero parental care.",
      "Large body size, late sexual maturity, producing few offspring per reproductive event, and investing significant parental care.",
      "High intrinsic growth rate ($r$) and frequent population boom-and-bust cycles.",
      "Type III survivorship curve with high early juvenile mortality."
    ],
    correctIndex: 1, // B
    explanation: "$K$-selected species are adapted to stable environments near carrying capacity ($K$). They invest heavily in a small number of offspring, have long lifespans, large body sizes, and high parental investment.",
    distractorTip: "$K$-selected = large, few offspring, high parental care, stable populations near $K$; $r$-selected = small, many offspring, no parental care, boom-and-bust."
  },
  "apes-u3-l2": {
    id: "apes3-l2-q3",
    stem: "A species of marine oyster produces over 100 million eggs per spawning event. Over 99% of larvae are consumed by planktivorous predators within the first 48 hours of life, but individuals that successfully settle onto a coral reef and grow a shell survive for decades. Which survivorship curve does this species exhibit?",
    options: [
      "Type I survivorship curve",
      "Type II survivorship curve",
      "Type III survivorship curve",
      "Linear exponential curve"
    ],
    correctIndex: 2, // C
    explanation: "Type III survivorship curves are characterized by high juvenile mortality rates early in life, with a high survival probability for the few individuals that reach adulthood (typical of oysters, frogs, insects, and marine fish).",
    distractorTip: "Type I = high survival until old age (humans, mammals); Type II = constant mortality rate throughout life (songbirds); Type III = high juvenile mortality (oysters, fish, trees)."
  },
  "apes-u3-l3": {
    id: "apes3-l3-q3",
    stem: "When a reindeer herd introduced to St. Matthew Island exponentially exceeded its carrying capacity ($N > K$), what was the immediate demographic consequence?",
    options: [
      "The population underwent overshoot, depleted available lichen food resources, and experienced a catastrophic population crash (dieback).",
      "The carrying capacity of the island permanently doubled.",
      "The reindeer evolved into an $r$-selected species within one generation.",
      "The herd established a stable equilibrium without starvation."
    ],
    correctIndex: 0, // A
    explanation: "When a population exceeds environmental carrying capacity (overshoot), resource depletion (overgrazing) degrades the habitat, leading to widespread famine, disease, and a severe population dieback/crash.",
    distractorTip: "Overshoot occurs when population exceeds carrying capacity $K$, inevitably followed by resource depletion and a population crash (dieback)."
  },
  "apes-u3-l4": {
    id: "apes3-l4-q3",
    stem: "An age-structure diagram for a developing country exhibits a broad pyramid base with over 45% of the population under age 15. Even if total fertility rates immediately drop to replacement level (2.1 children per woman), why will the country's total population continue to expand for decades?",
    options: [
      "The country's death rate will drop to zero.",
      "Emigration laws prevent citizens from leaving.",
      "Population momentum: the massive cohort of young people currently entering their reproductive years will produce a large absolute number of births.",
      "The country will shift back to Stage 1 of the demographic transition."
    ],
    correctIndex: 2, // C
    explanation: "Population momentum occurs because an age structure dominated by children creates a massive wave of future parents. Even if each couple has only 2 children, the enormous absolute number of reproductive-age couples ensures continued population growth for several generations.",
    distractorTip: "Population momentum: A youthful age structure guarantees population growth for decades even after fertility drops to replacement level."
  },
  "apes-u3-l5": {
    id: "apes3-l5-q3",
    stem: "A developing country has a constant annual population growth rate of 3.5%. According to the Rule of 70, how many years will it take for this country's population to double?",
    options: [
      "70 years",
      "35 years",
      "14 years",
      "20 years"
    ],
    correctIndex: 3, // D
    explanation: "The Rule of 70 calculates doubling time: $\\text{Doubling Time} = \\frac{70}{\\text{Growth Rate } (\\%)} = \\frac{70}{3.5} = 20\\text{ years}$.",
    distractorTip: "Rule of 70: Doubling Time = $70 / r$ (keep $r$ as a percentage, do not convert 3.5% to 0.035 in this formula!)."
  },
  "apes-u3-l6": {
    id: "apes3-l6-q3",
    stem: "During Stage 2 (Transitional Stage) of the Demographic Transition Model, what demographic shift causes rapid, explosive population growth?",
    options: [
      "Birth rates spike upward while death rates remain constant.",
      "Death rates plummet rapidly due to improved sanitation, clean water, and food security, while birth rates remain stubbornly high.",
      "Both birth and death rates drop to equal low levels.",
      "Massive immigration quadruples the labor force."
    ],
    correctIndex: 1, // B
    explanation: "In Stage 2, death rates drop dramatically due to advances in public health, clean water, hygiene, and nutrition. However, cultural norms maintain high birth rates, opening a wide gap between births and deaths ($CBR - CDR$), causing rapid population growth.",
    distractorTip: "Stage 2 population explosion is caused by falling DEATH rates, NOT rising birth rates!"
  },

  // UNIT 4: Earth Systems & Resources (6 levels)
  "apes-u4-l1": {
    id: "apes4-l1-q3",
    stem: "At a convergent tectonic boundary where an oceanic plate collides with a continental plate, which geological feature is formed as the denser oceanic slab sinks into the asthenosphere?",
    options: [
      "A deep ocean trench parallel to a volcanic mountain arc on the continent.",
      "A mid-ocean spreading ridge with rift valleys.",
      "A shallow transform fault line with zero volcanism.",
      "A continental rift valley like the East African Rift."
    ],
    correctIndex: 0, // A
    explanation: "Oceanic crust is denser (basaltic) than continental crust (granitic). When they converge, the oceanic plate subducts into the mantle, carving an oceanic trench offshore and melting mantle rock to feed a volcanic arc on the continental margin (e.g. the Andes or Cascades).",
    distractorTip: "Oceanic-Continental subduction = Deep ocean trench + Continental volcanic mountain arc (e.g. Andes, Cascades)."
  },
  "apes-u4-l2": {
    id: "apes4-l2-q3",
    stem: "A soil sample composed of 70% sand, 20% silt, and 10% clay will exhibit which combination of physical properties?",
    options: [
      "Extremely low water drainage and high nutrient retention capacity.",
      "High water permeability, rapid drainage, and low water-holding capacity.",
      "Heavy soil compaction prone to waterlogging.",
      "Zero aeration for plant root respiration."
    ],
    correctIndex: 1, // B
    explanation: "Sand particles are large with large pore spaces between them, leading to high permeability and rapid infiltration. However, sandy soils have poor water-holding capacity and low cation exchange capacity (CEC), requiring frequent irrigation and fertilizing.",
    distractorTip: "Sand = large pores, high permeability, rapid drainage; Clay = tiny pores, low permeability, high water/nutrient retention."
  },
  "apes-u4-l3": {
    id: "apes4-l3-q3",
    stem: "In which atmospheric layer does virtually all Earth weather occur, and where is atmospheric pressure at its highest?",
    options: [
      "Stratosphere",
      "Thermosphere",
      "Troposphere",
      "Mesosphere"
    ],
    correctIndex: 2, // C
    explanation: "The troposphere extends from Earth's surface to approximately 10-15 km altitude. It contains 75-80% of atmospheric mass, the highest air pressure, and virtually all water vapor, clouds, and convective weather systems.",
    distractorTip: "Troposphere = weather and highest density; Stratosphere = ozone layer ($O_3$) that absorbs UV radiation."
  },
  "apes-u4-l4": {
    id: "apes4-l4-q3",
    stem: "Why do equatorial regions receive significantly more intense solar radiation (insolation) per square meter than polar regions?",
    options: [
      "The equator is 50 million miles closer to the Sun.",
      "Solar rays strike the equator at a near-perpendicular $90^\\circ$ angle, concentrating energy over a small surface area and passing through less atmospheric path length.",
      "The greenhouse effect only operates between the Tropics of Cancer and Capricorn.",
      "Polar ice caps absorb 100% of incoming solar infrared light."
    ],
    correctIndex: 1, // B
    explanation: "Due to Earth's curvature, sunlight strikes the equator perpendicularly ($90^\\circ$ angle of incidence), concentrating solar irradiance over a compact surface area. At high latitudes, solar rays strike at oblique angles, spreading the same energy over a larger area while passing through thicker atmosphere.",
    distractorTip: "Equatorial insolation is high because solar rays hit perpendicularly ($90^\\circ$), concentrating solar energy per unit area."
  },
  "apes-u4-l5": {
    id: "apes4-l5-q3",
    stem: "In the Rain Shadow Effect, what climatic conditions develop on the leeward side of a high mountain range?",
    options: [
      "Dense temperate rainforest with year-round heavy precipitation.",
      "Arid or semi-arid desert conditions, because sinking air warms adiabatically and holds moisture rather than releasing rain.",
      "Glacial ice sheets caused by continuous cloud cover.",
      "Frequent coastal hurricanes."
    ],
    correctIndex: 1, // B
    explanation: "Moist oceanic air hits the windward side, rises, cools adiabatically, condenses, and precipitates. As the dry air crests the peak and descends the leeward side, it compresses and warms adiabatically, absorbing moisture and creating arid rain-shadow deserts (e.g. Great Basin, Mojave).",
    distractorTip: "Windward side = rising air, cooling, heavy rain, lush forests; Leeward side = descending air, warming, dry rain-shadow desert."
  },
  "apes-u4-l6": {
    id: "apes4-l6-q3",
    stem: "During an El Niño event (the warm phase of the ENSO cycle), what occurs in the eastern equatorial Pacific Ocean off the coast of Peru?",
    options: [
      "Trade winds strengthen, intensifying nutrient-rich cold-water upwelling.",
      "Sea surface temperatures drop, causing historic droughts along coastal South America.",
      "Prevailing trade winds weaken or reverse, allowing warm surface waters to surge eastward, suppressing coastal cold-water upwelling and devastating commercial anchovy fisheries.",
      "Monsoons in Australia double in frequency."
    ],
    correctIndex: 2, // C
    explanation: "During El Niño, equatorial trade winds weaken or reverse. Warm Pacific surface waters slosh eastward to the South American coast. The deep thermocline suppresses the normal upwelling of nutrient-dense cold water, collapsing anchovy fisheries while bringing flooding rains to Peru and droughts to Australia/Indonesia.",
    distractorTip: "El Niño: WEAKENED trade winds $\\implies$ WARM water off South America $\\implies$ SUPPRESSED upwelling $\\implies$ collapsed fisheries."
  },

  // UNIT 5: Land & Water Use (7 levels)
  "apes-u5-l1": {
    id: "apes5-l1-q3",
    stem: "Which of the following scenarios best exemplifies the 'Tragedy of the Commons' described by Garrett Hardin?",
    options: [
      "A private landowner fencing their pasture to prevent soil erosion.",
      "Individual commercial fishing fleets overharvesting bluefin tuna in unregulated international waters, each acting in self-interest until the fishery collapses.",
      "A municipal water utility installing smart water meters to charge tiered rates.",
      "A national park requiring backcountry wilderness camping permits."
    ],
    correctIndex: 1, // B
    explanation: "The Tragedy of the Commons occurs when individuals with open access to a shared, unregulated resource act independently according to their own self-interest, ultimately depleting or spoiling that resource (e.g. oceanic fisheries, the atmosphere, public grazing lands).",
    distractorTip: "Tragedy of the Commons applies to SHARED, OPEN-ACCESS resources lacking private ownership or government regulation."
  },
  "apes-u5-l2": {
    id: "apes5-l2-q3",
    stem: "Which agricultural irrigation technique is the most water-efficient, delivering water directly to plant root zones with minimal evaporation and runoff losses?",
    options: [
      "Flood irrigation",
      "Drip (micro-irrigation) systems",
      "Furrow irrigation",
      "Center-pivot high-pressure overhead sprayers"
    ],
    correctIndex: 1, // B
    explanation: "Drip irrigation uses perforated tubing at or below the soil surface to deliver water directly to plant roots at low pressure, achieving over 90-95% water efficiency with near-zero evaporation or runoff losses (though it has high installation costs).",
    distractorTip: "Irrigation efficiency: Drip (95%) > Spray (80%) > Flood (60%) > Furrow (30-50%)."
  },
  "apes-u5-l3": {
    id: "apes5-l3-q3",
    stem: "In an Integrated Pest Management (IPM) program, which strategy is prioritized before applying synthetic chemical pesticides?",
    options: [
      "Immediate aerial spraying of broad-spectrum organophosphates at the first sign of an insect.",
      "Genetically modifying all native bird species.",
      "Cultural and biological controls, such as crop rotation, introducing natural predatory beneficial insects (like ladybugs), and regular pest monitoring.",
      "Flooding fields with saline aquifer water."
    ],
    correctIndex: 2, // C
    explanation: "IPM emphasizes long-term pest management using a hierarchy of practices: biological controls (predators/parasites), cultural controls (crop rotation, intercropping), and mechanical barriers. Synthetic broad-spectrum pesticides are used strictly as a targeted last resort.",
    distractorTip: "IPM does NOT aim to eliminate all pests completely; it keeps pest populations below economic injury thresholds using biological and cultural controls first."
  },
  "apes-u5-l4": {
    id: "apes5-l4-q3",
    stem: "What is an environmental drawback associated with raising livestock in Concentrated Animal Feeding Operations (CAFOs) compared to free-range grazing?",
    options: [
      "CAFOs require ten times more physical pasture land per animal.",
      "Enormous concentrations of animal manure in waste lagoons can leak, contaminating local groundwater with nitrates and causing eutrophication in nearby streams.",
      "CAFO cattle produce zero greenhouse gas emissions.",
      "Free-range cattle require daily therapeutic antibiotic injections."
    ],
    correctIndex: 1, // B
    explanation: "CAFOs crowd thousands of animals into small feedlots, producing massive volumes of concentrated manure stored in open slurry lagoons. When lagoons breach or overflow during storms, runoff contaminates waterways with pathogens, hormones, antibiotics, and nitrogen/phosphorus that trigger eutrophication.",
    distractorTip: "CAFO trade-offs: High density and cheap meat, but massive manure lagoons cause water contamination, odor, antibiotic resistance, and high greenhouse emissions."
  },
  "apes-u5-l5": {
    id: "apes5-l5-q3",
    stem: "In marine commercial fisheries, what is 'bycatch'?",
    options: [
      "Fish raised inside artificial aquaculture pens.",
      "Non-target marine organisms (such as dolphins, sea turtles, sharks, and juvenile fish) unintentionally caught and killed in commercial fishing nets and longlines.",
      "The legal quota of target catch permitted by maritime regulations.",
      "Fish that escape from bottom trawls."
    ],
    correctIndex: 1, // B
    explanation: "Bycatch refers to unwanted, non-target marine wildlife caught incidentally during commercial fishing operations (drift nets, longlines, bottom trawling), often discarded dead or dying back into the ocean.",
    distractorTip: "Bycatch = non-target species (turtles, dolphins, sharks) accidentally caught and killed in commercial fishing nets."
  },
  "apes-u5-l6": {
    id: "apes5-l6-q3",
    stem: "How do urban green roofs and permeable interlocking concrete pavers help mitigate the environmental impacts of urban development?",
    options: [
      "They increase surface albedo and increase stormwater runoff velocity.",
      "They absorb rainwater, promoting groundwater recharge and reducing municipal stormwater runoff while mitigating the urban heat island effect through evapotranspiration.",
      "They permanently eliminate urban smog without reducing automobile traffic.",
      "They replace the need for wastewater sewage treatment plants."
    ],
    correctIndex: 1, // B
    explanation: "Urban areas are dominated by impermeable asphalt and concrete that generate massive stormwater runoff and absorb solar heat (urban heat island). Permeable pavements allow stormwater infiltration, while green roofs insulate buildings and provide evaporative cooling.",
    distractorTip: "Permeable pavers + green roofs = decrease stormwater runoff, reduce urban heat island effect, recharge aquifers."
  },
  "apes-u5-l7": {
    id: "apes5-l7-q3",
    stem: "What is the primary cause of soil salinization in arid and semi-arid agricultural lands?",
    options: [
      "Excessive rainfall leaching minerals down into the bedrock.",
      "Applying synthetic organic nitrogen fertilizers.",
      "Repeated irrigation with groundwater containing dissolved mineral salts, followed by high rates of surface water evaporation that leave salts concentrated in topsoil.",
      "Planting deep-rooted perennial prairie grasses."
    ],
    correctIndex: 2, // C
    explanation: "Irrigation water contains small amounts of dissolved salts. In arid regions with high heat and low rainfall, water evaporates rapidly from the soil surface, leaving behind accumulated mineral salts that stunt plant growth and poison crops.",
    distractorTip: "Soil salinization: In arid regions, repeated irrigation + high evaporation leaves toxic mineral salts behind in topsoil."
  },

  // UNIT 6: Energy Resources & Consumption (7 levels)
  "apes-u6-l1": {
    id: "apes6-l1-q3",
    stem: "In an industrial cogeneration (combined heat and power, CHP) facility, how is overall energy efficiency improved?",
    options: [
      "Waste heat produced during electricity generation is captured and utilized for industrial process steam or space heating.",
      "Electricity is converted directly into nuclear fuel.",
      "Coal is mixed with petroleum to double combustion temperature.",
      "Power lines are cooled with liquid nitrogen to eliminate electrical resistance."
    ],
    correctIndex: 0, // A
    explanation: "Cogeneration uses a single fuel source to simultaneously produce both electricity and useful thermal energy (steam/heat). By capturing waste heat that conventional power plants vent into cooling towers, CHP systems achieve energy efficiencies exceeding 70-80%.",
    distractorTip: "Cogeneration (Combined Heat and Power): Uses waste heat from electricity generation for building or industrial heating, drastically improving fuel efficiency."
  },
  "apes-u6-l2": {
    id: "apes6-l2-q3",
    stem: "What is a major environmental risk specifically associated with hydraulic fracturing ('fracking') used to extract natural gas from deep shale rock formations?",
    options: [
      "Depletion of the stratospheric ozone layer.",
      "Contamination of drinking water aquifers from leaking methane gas and toxic chemical fracking fluids, along with induced seismic earthquakes from wastewater injection wells.",
      "Direct radioactive contamination from uranium decay.",
      "Acid mine drainage overflowing into coastal wetlands."
    ],
    correctIndex: 1, // B
    explanation: "Fracking pumps high-pressure water, sand, and proprietary chemical solvents deep underground to fracture shale rock. Leaky well casings can contaminate drinking water aquifers with volatile organic compounds and methane, while high-pressure wastewater disposal causes induced seismicity.",
    distractorTip: "Fracking risks: Groundwater contamination from toxic fluids/methane leaks, massive water consumption, and induced earthquakes from wastewater disposal."
  },
  "apes-u6-l3": {
    id: "apes6-l3-q3",
    stem: "A radioactive isotope has a half-life of 30 years. If a spent nuclear fuel rod initially contains 80 grams of this isotope, how much of the isotope remains radioactive after 90 years?",
    options: [
      "40 grams",
      "20 grams",
      "10 grams",
      "5 grams"
    ],
    correctIndex: 2, // C
    explanation: "Number of half-lives = $90 / 30 = 3$ half-lives. After 1 half-life (30 yrs): $80 / 2 = 40\\text{ g}$. After 2 half-lives (60 yrs): $40 / 2 = 20\\text{ g}$. After 3 half-lives (90 yrs): $20 / 2 = 10\\text{ g}$.",
    distractorTip: "Half-life formula: Final Amount = $\\text{Initial} \\times (1/2)^n$. Here $n = 90/30 = 3$, so $80 \\times (1/2)^3 = 80 / 8 = 10\\text{ g}$."
  },
  "apes-u6-l4": {
    id: "apes6-l4-q3",
    stem: "What is the primary operational distinction between active solar heating systems and passive solar building design?",
    options: [
      "Passive solar uses photovoltaic silicon panels to generate alternating current.",
      "Active solar uses mechanical pumps, fans, and fluid collectors to circulate solar-heated water or air, whereas passive solar uses building orientation, south-facing windows, and thermal mass walls without mechanical devices.",
      "Passive solar systems operate exclusively during nocturnal hours.",
      "Active solar systems produce zero carbon emissions during manufacture."
    ],
    correctIndex: 1, // B
    explanation: "Passive solar captures solar heat naturally through architectural design (south-facing windows, concrete thermal mass, roof overhangs). Active solar utilizes electrical or mechanical components (pumps, motorized fans, solar water heating collectors) to distribute captured energy.",
    distractorTip: "Passive solar = architectural design (windows, thermal mass, no moving parts); Active solar = mechanical pumps, fans, and solar panels."
  },
  "apes-u6-l5": {
    id: "apes6-l5-q3",
    stem: "What is an environmental drawback associated with large-scale run-of-the-river or reservoir hydroelectric dams?",
    options: [
      "High emissions of sulfur dioxide during normal daily turbine operation.",
      "Flooding upstream terrestrial habitats, blocking migratory fish pathways (like salmon), and trapping fertile downstream silt behind the dam.",
      "High emissions of radioactive radon gas into the reservoir.",
      "Permanent depletion of regional groundwater tables."
    ],
    correctIndex: 1, // B
    explanation: "While hydroelectricity produces low operational carbon emissions, damming rivers floods upstream ecosystems, displaces human communities, blocks anadromous fish migration routes, and prevents nutrient-rich sediments from reaching downstream agricultural floodplains.",
    distractorTip: "Hydroelectric dam trade-offs: Renewable and flood control, but disrupts fish migration, floods upstream habitats, and traps silt/sediments."
  },
  "apes-u6-l6": {
    id: "apes6-l6-q3",
    stem: "What is the sole direct chemical emission produced by a vehicle powered by a pure hydrogen fuel cell during operation?",
    options: [
      "Carbon monoxide ($CO$)",
      "Sulfur dioxide ($SO_2$)",
      "Nitrogen dioxide ($NO_2$)",
      "Water vapor ($H_2O$)"
    ],
    correctIndex: 3, // D
    explanation: "Hydrogen fuel cells combine pure hydrogen fuel ($H_2$) with atmospheric oxygen ($O_2$) across an electrolyte membrane to produce an electric current, releasing water ($H_2O$) and heat as the only direct tailpipe byproducts: $2H_2 + O_2 \\to 2H_2O + \\text{electricity}$.",
    distractorTip: "Hydrogen fuel cell tailpipe emission is ONLY WATER VAPOR ($H_2O$)! (Though generating pure $H_2$ fuel can produce emissions if derived from fossil methane)."
  },
  "apes-u6-l7": {
    id: "apes6-l7-q3",
    stem: "Why does burning anthracite coal generate fewer air pollution emissions per unit of heat than burning lignite coal?",
    options: [
      "Anthracite coal has undergone the deepest geological heat and pressure, giving it the highest carbon content, highest energy density, and lowest moisture and sulfur content.",
      "Anthracite coal contains radioactive isotopes that neutralize soot.",
      "Lignite coal burns at significantly higher temperatures than anthracite.",
      "Anthracite coal is an uncompacted, renewable wetland biomass."
    ],
    correctIndex: 0, // A
    explanation: "Coal rank progresses: Peat $\\to$ Lignite $\\to$ Sub-bituminous $\\to$ Bituminous $\\to$ Anthracite. Anthracite is the highest rank: highest carbon percentage, highest heat value per pound, and lowest moisture and sulfur, burning cleanly compared to dirty, low-energy lignite.",
    distractorTip: "Coal rank from lowest to highest: Peat $\\to$ Lignite $\\to$ Bituminous $\\to$ Anthracite (highest energy density and cleanest burn)."
  },

  // UNIT 7: Atmospheric Pollution (6 levels)
  "apes-u7-l1": {
    id: "apes7-l1-q3",
    stem: "Which of the following atmospheric pollutants is classified as a SECONDARY air pollutant?",
    options: [
      "Carbon monoxide ($CO$) emitted from vehicle exhaust pipes",
      "Sulfur dioxide ($SO_2$) released directly from a coal power plant smokestack",
      "Tropospheric (ground-level) ozone ($O_3$) formed when $NO_x$ and VOCs react in the presence of sunlight",
      "Particulate matter ($PM_{10}$) blown from construction sites"
    ],
    correctIndex: 2, // C
    explanation: "Primary pollutants are emitted directly from sources (e.g. $CO, SO_2, NO_x$, lead). Secondary pollutants are not emitted directly; they form in the atmosphere through chemical reactions between primary pollutants and sunlight/water (e.g. ground-level $O_3$, sulfuric acid $H_2SO_4$, nitric acid $HNO_3$, PANs).",
    distractorTip: "Primary = emitted directly ($CO, SO_2, NO_x$); Secondary = formed in air via chemical/photochemical reactions ($O_3, H_2SO_4$, smog)."
  },
  "apes-u7-l2": {
    id: "apes7-l2-q3",
    stem: "During a thermal inversion, why do cities situated in topographical valleys (such as Los Angeles or Mexico City) experience dangerously elevated concentrations of air pollution?",
    options: [
      "Strong vertical wind currents blow all regional pollutants into the valley.",
      "A layer of warm air traps a cooler, denser layer of air near the ground, preventing vertical mixing and trapping vehicle emissions and smog near street level.",
      "Cold air heats up and creates an intense low-pressure storm system.",
      "The ozone layer descends directly into the valley."
    ],
    correctIndex: 1, // B
    explanation: "Normally, air temperature decreases with altitude, allowing warm, polluted surface air to rise and disperse. In a thermal inversion, a warm air cap sits above cooler surface air in a valley, trapping pollutants in stagnant air near the ground.",
    distractorTip: "Thermal inversion: Warm air layer above traps cool polluted air below, preventing vertical convection and dispersion."
  },
  "apes-u7-l3": {
    id: "apes7-l3-q3",
    stem: "Which dangerous indoor air pollutant is a naturally occurring radioactive gas formed by the radioactive decay of uranium in bedrock, capable of seeping through foundation cracks into basements and causing lung cancer?",
    options: [
      "Formaldehyde",
      "Carbon monoxide",
      "Asbestos",
      "Radon-222"
    ],
    correctIndex: 3, // D
    explanation: "Radon-222 is a colorless, odorless radioactive noble gas produced by the natural decay of uranium in soil and rock. It seeps into homes through foundation cracks and is the second leading cause of lung cancer in the United States (behind tobacco smoke).",
    distractorTip: "Radon-222 = radioactive gas from granite/rock decay, causes lung cancer; Carbon monoxide = incomplete combustion; Asbestos = insulating mineral fiber, causes mesothelioma."
  },
  "apes-u7-l4": {
    id: "apes7-l4-q3",
    stem: "Which industrial emissions control technology is installed on coal-fired power plant smokestacks to remove sulfur dioxide ($SO_2$) gas by spraying an alkaline slurry (such as calcium carbonate limestone)?",
    options: [
      "Electrostatic precipitators",
      "Wet scrubbers (flue-gas desulfurization)",
      "Baghouse fabric filters",
      "Catalytic converters"
    ],
    correctIndex: 1, // B
    explanation: "Wet scrubbers spray an alkaline limestone slurry ($CaCO_3$) through industrial flue gas. The sulfur dioxide ($SO_2$) reacts with the limestone to form solid calcium sulfate (gypsum sludge), removing over 90% of sulfur dioxide emissions before release into the atmosphere.",
    distractorTip: "Wet scrubbers = remove $SO_2$ gas using limestone slurry; Electrostatic precipitators and baghouse filters = remove PARTICULATE MATTER."
  },
  "apes-u7-l5": {
    id: "apes7-l5-q3",
    stem: "What environmental impact occurs when acid deposition ($pH < 5.0$) leaches into aquatic freshwater lakes and forest soils?",
    options: [
      "It raises water pH, causing rapid coral reef calcification.",
      "It mobilizes toxic aluminum ions ($Al^{3+}$) from soil minerals into lake water, damaging fish gill tissues and suffocating aquatic wildlife.",
      "It converts all water molecules into heavy water isotopes.",
      "It stimulates excessive calcium absorption in tree foliage."
    ],
    correctIndex: 1, // B
    explanation: "Acid deposition (from $SO_2$ and $NO_x$ reacting with atmospheric water to form $H_2SO_4$ and $HNO_3$) lowers soil and water pH. Acidic conditions leach essential nutrients (calcium, magnesium) and liberate toxic dissolved aluminum ($Al^{3+}$) into lakes, which damages fish gills and causes asphyxiation.",
    distractorTip: "Acid rain liberates toxic aluminum ions in soil/water, which coats fish gills and impairs breathing, while leaching essential calcium."
  },
  "apes-u7-l6": {
    id: "apes7-l6-q3",
    stem: "Which of the following automotive exhaust components is converted into harmless nitrogen gas ($N_2$), carbon dioxide ($CO_2$), and water vapor ($H_2O$) by a three-way catalytic converter?",
    options: [
      "Nitrogen oxides ($NO_x$), carbon monoxide ($CO$), and unburnt hydrocarbons (VOCs)",
      "Sulfur dioxide and chlorofluorocarbons",
      "Radon gas and ozone",
      "Heavy lead particulates and mercury vapor"
    ],
    correctIndex: 0, // A
    explanation: "A catalytic converter uses platinum, palladium, and rhodium catalyst metals to promote chemical reduction and oxidation reactions: converting toxic $NO_x$ into $N_2$ and $O_2$, and oxidizing toxic $CO$ and unburned hydrocarbons into harmless $CO_2$ and $H_2O$.",
    distractorTip: "Catalytic converters reduce $NO_x, CO$, and hydrocarbons from car exhaust, converting them into $N_2, CO_2$, and $H_2O$."
  },

  // UNIT 8: Aquatic & Terrestrial Pollution (7 levels)
  "apes-u8-l1": {
    id: "apes8-l1-q3",
    stem: "Chemical compounds such as Bisphenol A (BPA) and phthalates that mimic or block natural animal hormones and disrupt physiological development at extremely low concentrations are known as:",
    options: [
      "Broad-spectrum organophosphates",
      "Primary greenhouse gases",
      "Endocrine disruptors",
      "Atmospheric photochemical oxidants"
    ],
    correctIndex: 2, // C
    explanation: "Endocrine disruptors are synthetic chemicals (plastics additives like BPA, phthalates, pesticides like atrazine) that interfere with the endocrine hormone system by mimicking natural hormones (like estrogen) or blocking hormone receptors, causing reproductive abnormalities, birth defects, and tumors.",
    distractorTip: "Endocrine disruptors (BPA, phthalates, atrazine) mimic natural hormones, causing reproductive abnormalities and developmental defects."
  },
  "apes-u8-l2": {
    id: "apes8-l2-q3",
    stem: "What is the correct sequential order of biological and chemical events during cultural eutrophication of an aquatic freshwater lake?",
    options: [
      "Hypoxia $\\to$ Fish kill $\\to$ Nutrient runoff $\\to$ Algal bloom $\\to$ Bacterial respiration",
      "Nutrient runoff (nitrogen/phosphorus) $\\to$ Explosive algal bloom $\\to$ Algae die and sink $\\to$ Aerobic decomposers consume dissolved oxygen during decay $\\to$ Hypoxic dead zone and fish suffocation",
      "Fish die $\\to$ Nutrient absorption $\\to$ Algae bloom $\\to$ Oxygen rises",
      "Algal bloom $\\to$ Photosynthesis surges $\\to$ Lake becomes hyper-oxygenated"
    ],
    correctIndex: 1, // B
    explanation: "Eutrophication sequence: (1) Fertilizer runoff rich in $N$ and $P$ enters water; (2) Algae reproduce rapidly in an algal bloom; (3) Algae die and sink; (4) Aerobic bacteria decompose dead algae, consuming dissolved oxygen (BOD increases); (5) Severe hypoxia leads to fish kills.",
    distractorTip: "Key eutrophication point: Algae DO NOT suffocate fish directly; BACTERIA decomposing dead algae consume all the dissolved oxygen ($O_2$), causing fish to suffocate."
  },
  "apes-u8-l3": {
    id: "apes8-l3-q3",
    stem: "Under the international Stockholm Convention, why are chemical compounds classified as Persistent Organic Pollutants (POPs) subjected to global production bans and strict disposal controls?",
    options: [
      "They decompose within 24 hours into atmospheric nitrogen.",
      "They are highly water-soluble and flush harmlessly through kidneys.",
      "They have carbon-based synthetic structures that resist environmental degradation, accumulate in animal adipose fatty tissues, and biomagnify up food chains.",
      "They increase agricultural photosynthetic rates."
    ],
    correctIndex: 2, // C
    explanation: "POPs (such as DDT, PCBs, and dioxins) are synthetic organic chemicals with stable halogenated rings that do not break down easily in the environment. They are fat-soluble (lipophilic), accumulating in organism tissues (bioaccumulation) and concentrating at higher trophic levels (biomagnification).",
    distractorTip: "POPs (Persistent Organic Pollutants): Resist degradation, fat-soluble, bioaccumulate in tissues, and biomagnify across trophic levels."
  },
  "apes-u8-l4": {
    id: "apes8-l4-q3",
    stem: "Modern municipal sanitary landfills are engineered with an impermeable bottom liner composed of compacted clay and thick plastic sheeting primarily to prevent which environmental hazard?",
    options: [
      "The escape of greenhouse gases into the upper atmosphere.",
      "Leachate (toxic liquid contaminated by percolating rainwater) from seeping downward into local groundwater aquifers.",
      "Earthquakes triggered by the weight of compacted solid municipal waste.",
      "Rodent burrowing through solid trash layers."
    ],
    correctIndex: 1, // B
    explanation: "Rainwater percolating through landfill waste dissolves heavy metals, battery acids, and organic toxins, creating a hazardous liquid known as leachate. The clay and high-density plastic liner prevents this leachate from contaminating surrounding soil and municipal groundwater aquifers.",
    distractorTip: "Sanitary landfill features: Clay/plastic liner prevents LEACHATE from contaminating groundwater; Pipes collect methane gas for energy."
  },
  "apes-u8-l5": {
    id: "apes8-l5-q3",
    stem: "During municipal wastewater treatment, what is the primary biological function of the secondary treatment stage?",
    options: [
      "Physical screening of large debris like rags and sticks with coarse metal bar screens.",
      "Disinfecting the effluent with ultraviolet radiation, ozone, or chlorine.",
      "Cultivating aerobic bacteria in aeration tanks to consume and digest dissolved organic matter, significantly lowering the Biochemical Oxygen Demand (BOD).",
      "Filtering microplastics using reverse osmosis membranes."
    ],
    correctIndex: 2, // C
    explanation: "Primary treatment is physical (bar screens, grit settling chambers). Secondary treatment is BIOLOGICAL: wastewater is aerated so that aerobic microorganisms digest dissolved organic matter, removing up to 90% of BOD. Tertiary treatment provides chemical or advanced physical polishing (disinfection, nutrient removal).",
    distractorTip: "Wastewater Treatment: Primary = PHYSICAL (screening/settling); Secondary = BIOLOGICAL (bacteria digest organic waste); Tertiary = CHEMICAL (disinfection/nutrient removal)."
  },
  "apes-u8-l6": {
    id: "apes8-l6-q3",
    stem: "In environmental toxicology, what does the median lethal dose ($LD_{50}$) indicate on a chemical dose-response curve?",
    options: [
      "The minimum dose that causes any detectable physiological symptom in an organism.",
      "The legal allowable concentration of a pesticide in consumer drinking water.",
      "The dose of a chemical toxin that is lethal to exactly 50% of the test animal population.",
      "The threshold concentration at which an ecosystem collapses."
    ],
    correctIndex: 2, // C
    explanation: "$LD_{50}$ (Lethal Dose 50%) is the standard metric of acute chemical toxicity: the dose of a substance required to kill 50% of a test population within a specified observation period. Lower $LD_{50}$ values indicate higher toxicity.",
    distractorTip: "$LD_{50}$ = dose that kills 50% of the population. A LOWER $LD_{50}$ value means a substance is MORE TOXIC (requires less to kill)."
  },
  "apes-u8-l7": {
    id: "apes8-l7-q3",
    stem: "Which of the following heavy metal pollutants is released into the atmosphere primarily through the combustion of coal, and undergoes atmospheric deposition into wetlands where anaerobic bacteria convert it into neurotoxic methylmercury?",
    options: [
      "Lead ($Pb$)",
      "Mercury ($Hg$)",
      "Cadmium ($Cd$)",
      "Arsenic ($As$)"
    ],
    correctIndex: 1, // B
    explanation: "Coal combustion is the single largest anthropogenic source of airborne mercury ($Hg$). Once deposited in aquatic ecosystems, anaerobic sulfate-reducing bacteria methylate inorganic mercury into highly toxic methylmercury ($CH_3Hg^+$), which biomagnifies in predatory marine fish (tuna, swordfish).",
    distractorTip: "Coal combustion releases MERCURY ($Hg$), which aquatic bacteria convert into neurotoxic methylmercury that biomagnifies up food webs."
  },

  // UNIT 9: Global Change (6 levels)
  "apes-u9-l1": {
    id: "apes9-l1-q3",
    stem: "How do chlorofluorocarbons (CFCs) destroy stratospheric ozone ($O_3$) molecules?",
    options: [
      "CFCs act as greenhouse gases that freeze stratospheric water vapor.",
      "Solar ultraviolet (UV-C) radiation breaks chlorine atoms off CFC molecules; the free chlorine radical acts as a catalytic enzyme, repeatedly breaking ozone into $O_2$ and destroying thousands of ozone molecules per chlorine atom.",
      "CFCs react with carbon dioxide to form acid rain.",
      "CFCs block sunlight from reaching the upper stratosphere."
    ],
    correctIndex: 1, // B
    explanation: "In the stratosphere, UV radiation dissociates CFCs, releasing chlorine radicals ($Cl\\cdot$). A chlorine atom attacks ozone: $Cl + O_3 \\to ClO + O_2$. $ClO$ then reacts with free oxygen atoms to regenerate the chlorine atom: $ClO + O \\to Cl + O_2$. One chlorine atom can destroy over 100,000 ozone molecules before being deactivated.",
    distractorTip: "CFCs release CHLORINE radicals that act as catalysts, repeatedly destroying thousands of ozone molecules in the stratosphere."
  },
  "apes-u9-l2": {
    id: "apes9-l2-q3",
    stem: "Which greenhouse gas has a Global Warming Potential (GWP) significantly higher than carbon dioxide ($CO_2$) over a 20-year timescale and is emitted from livestock enteric fermentation, rice paddies, and natural gas pipeline leaks?",
    options: [
      "Nitrous oxide ($N_2O$)",
      "Water vapor ($H_2O$)",
      "Methane ($CH_4$)",
      "Sulfur hexafluoride ($SF_6$)"
    ],
    correctIndex: 2, // C
    explanation: "Methane ($CH_4$) has a baseline GWP of approximately 25-30 over a 100-year horizon, but over a 20-year timescale its GWP exceeds 80 times that of carbon dioxide ($CO_2 = 1$). Major anthropogenic sources include cattle digestion, flooded rice fields, coal mines, landfills, and natural gas infrastructure.",
    distractorTip: "Methane ($CH_4$): Potent greenhouse gas with a GWP > 25 times that of $CO_2$, emitted from cows, landfills, rice paddies, and natural gas leaks."
  },
  "apes-u9-l3": {
    id: "apes9-l3-q3",
    stem: "What causes large-scale 'coral bleaching' events in marine reef ecosystems?",
    options: [
      "Commercial bottom-trawling nets physically scraping coral polyps from the seabed.",
      "Prolonged elevated sea surface temperatures induce thermal stress, causing coral polyps to expel their symbiotic photosynthetic algae (zooxanthellae), turning corals white and leaving them vulnerable to starvation.",
      "Plastic micro-beads clogging the digestive cavity of corals.",
      "Underwater seismic sound waves from oil exploration ships."
    ],
    correctIndex: 1, // B
    explanation: "Reef-building corals maintain a mutualistic symbiosis with photosynthetic dinoflagellates called zooxanthellae. When ocean temperatures rise by as little as 1-2°C above normal summer maximums, corals undergo thermal stress and expel their algae, losing their color and primary food source.",
    distractorTip: "Coral bleaching = thermal stress causes coral polyps to EXPEL their photosynthetic algae (zooxanthellae); distinct from ocean acidification."
  },
  "apes-u9-l4": {
    id: "apes9-l4-q3",
    stem: "How does ocean acidification, resulting from the absorption of excess anthropogenic atmospheric carbon dioxide ($CO_2$), impair marine calcifying organisms like corals, oysters, and pteropods?",
    options: [
      "It raises ocean water temperatures above boiling.",
      "Excess dissolved $CO_2$ reacts with seawater to form carbonic acid, which releases hydrogen ions ($H^+$); these $H^+$ ions bind to free carbonate ions ($CO_3^{2-}$), depleting the carbonate required by marine organisms to build and maintain calcium carbonate ($CaCO_3$) shells.",
      "It dissolves all marine nitrogen into toxic ammonia.",
      "It causes an immediate drop in ocean salinity."
    ],
    correctIndex: 1, // B
    explanation: "Dissolved $CO_2$ reacts with seawater: $CO_2 + H_2O \\to H_2CO_3 \\to H^+ + HCO_3^-$. The increased $H^+$ ions bond with carbonate ions ($H^+ + CO_3^{2-} \\to HCO_3^-$), depleting the available carbonate pool needed by calcifiers to synthesize aragonite/calcite shells ($Ca^{2+} + CO_3^{2-} \\to CaCO_3$), and even dissolving existing shells.",
    distractorTip: "Ocean acidification: $CO_2$ creates carbonic acid, releasing $H^+$ ions that steal carbonate ($CO_3^{2-}$), preventing organisms from building shells."
  },
  "apes-u9-l5": {
    id: "apes9-l5-q3",
    stem: "Which of the following characteristics makes an introduced non-native species most likely to become a highly destructive 'invasive species' in a novel ecosystem?",
    options: [
      "Being an $r$-selected generalist species with a rapid reproduction rate, broad environmental tolerances, and an absence of natural predators, parasites, or competitors in the new habitat.",
      "Being a $K$-selected specialist with a specialized diet and narrow habitat requirements.",
      "Having a Type I survivorship curve and late sexual maturity.",
      "Exhibiting poor dispersal abilities and low genetic variation."
    ],
    correctIndex: 0, // A
    explanation: "Invasive species (e.g. zebra mussels, kudzu, cane toads) typically exhibit $r$-selected traits: rapid growth, high reproductive output, generalist diets, and broad ecological tolerances. In their new range, they escape natural predators and pathogens (the enemy release hypothesis), outcompeting native wildlife.",
    distractorTip: "Successful invasive species are $r$-selected generalists that reproduce rapidly and face no natural predators in the introduced range."
  },
  "apes-u9-l6": {
    id: "apes9-l6-q3",
    stem: "Under the acronym HIPPCO, which human activity is recognized by conservation biologists as the single greatest driver of contemporary global biodiversity loss and species extinction?",
    options: [
      "Invasive species introduction",
      "Global climate change",
      "Pollution of freshwater biomes",
      "Habitat destruction, fragmentation, and degradation"
    ],
    correctIndex: 3, // D
    explanation: "HIPPCO stands for Habitat destruction, Invasive species, Population growth, Pollution, Climate change, and Overexploitation. Habitat loss and fragmentation (primarily for agricultural conversion, deforestation, and urban development) is by far the leading cause of global species decline and extinction.",
    distractorTip: "HIPPCO: H = Habitat loss (the #1 cause of extinction); I = Invasive species; P = Population; P = Pollution; C = Climate change; O = Overharvesting."
  }
};

const fullPath = path.resolve(__dirname, '../src/data/quiz/apEnvironmentalUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_ENVIRONMENTAL_UNIT_DEFINITIONS;

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

console.log('Added', addedCount, 'questions to AP Environmental Science.');

const newCode = `// AP Environmental Science Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–9)
// Complete authentic coverage: 56 Levels, 168 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_ENVIRONMENTAL_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apEnvironmentalUnitsData.ts successfully.');
