/**
 * Standardized College Board Pedagogical Diagrams & Reference Visuals
 * 
 * Provides verified, textbook-accurate SVG vector diagrams for standardized College Board models:
 * - Demographic Transition Model (DTM Stages 1-5 with authentic CBR, CDR, Total Pop curves & NIR)
 * - Von Thünen Agricultural Land-Use Model (Concentric zones with bid-rent transport costs)
 * - Burgess Concentric Zone Model (Urban Geography Zones 1-5)
 * - Hoyt Sector Model & Christaller's Central Place Theory Hexagons
 * - Population Age-Sex Pyramids (Rapid Growth Stage 2 vs Stable Stage 4)
 * 
 * Eliminates distorted LLM-drawn curves and ensures 100% textbook accuracy.
 */

/**
 * Authentic Demographic Transition Model (DTM) SVG
 * Textbook accuracy:
 * - Stage 1: High CBR (~40/1000), High CDR (~38/1000) fluctuating, low stable population.
 * - Stage 2: High CBR (~40/1000), Rapidly falling CDR (~15/1000), massive NIR expansion.
 * - Stage 3: Rapidly falling CBR (to ~15/1000), CDR continues slow drop (~10/1000).
 * - Stage 4: Low CBR (~10-12/1000), Low CDR (~10/1000), high stable population.
 * - Stage 5: Very low CBR (<10/1000 below CDR), CDR slightly increases due to aging.
 */
export const DTM_STANDARDIZED_SVG = `<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='400' height='220' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1'/>
  
  <!-- Title & Model Header -->
  <text x='200' y='18' text-anchor='middle' fill='#f8fafc' font-size='11' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>DEMOGRAPHIC TRANSITION MODEL (STAGES 1–5)</text>
  
  <!-- Stage Background Columns -->
  <!-- Stage 1 (x: 45 to 110) -->
  <rect x='45' y='26' width='65' height='150' fill='#18181b' fill-opacity='0.4'/>
  <!-- Stage 2 (x: 110 to 175) -->
  <rect x='110' y='26' width='65' height='150' fill='#27272a' fill-opacity='0.2'/>
  <!-- Stage 3 (x: 175 to 240) -->
  <rect x='175' y='26' width='65' height='150' fill='#18181b' fill-opacity='0.4'/>
  <!-- Stage 4 (x: 240 to 305) -->
  <rect x='240' y='26' width='65' height='150' fill='#27272a' fill-opacity='0.2'/>
  <!-- Stage 5 (x: 305 to 370) -->
  <rect x='305' y='26' width='65' height='150' fill='#18181b' fill-opacity='0.4'/>

  <!-- Vertical Stage Dividers -->
  <line x1='110' y1='26' x2='110' y2='176' stroke='#3f3f46' stroke-width='1' stroke-dasharray='3,3'/>
  <line x1='175' y1='26' x2='175' y2='176' stroke='#3f3f46' stroke-width='1' stroke-dasharray='3,3'/>
  <line x1='240' y1='26' x2='240' y2='176' stroke='#3f3f46' stroke-width='1' stroke-dasharray='3,3'/>
  <line x1='305' y1='26' x2='305' y2='176' stroke='#3f3f46' stroke-width='1' stroke-dasharray='3,3'/>
  
  <!-- Stage Column Labels -->
  <text x='77' y='36' text-anchor='middle' fill='#e2e8f0' font-size='9' font-family='sans-serif' font-weight='700'>Stage 1</text>
  <text x='77' y='46' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>High Stat.</text>

  <text x='142' y='36' text-anchor='middle' fill='#e2e8f0' font-size='9' font-family='sans-serif' font-weight='700'>Stage 2</text>
  <text x='142' y='46' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>Early Exp.</text>

  <text x='207' y='36' text-anchor='middle' fill='#e2e8f0' font-size='9' font-family='sans-serif' font-weight='700'>Stage 3</text>
  <text x='207' y='46' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>Late Exp.</text>

  <text x='272' y='36' text-anchor='middle' fill='#e2e8f0' font-size='9' font-family='sans-serif' font-weight='700'>Stage 4</text>
  <text x='272' y='46' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>Low Stat.</text>

  <text x='337' y='36' text-anchor='middle' fill='#e2e8f0' font-size='9' font-family='sans-serif' font-weight='700'>Stage 5</text>
  <text x='337' y='46' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>Declining</text>

  <!-- Y-Axis (Rates per 1,000) -->
  <line x1='45' y1='26' x2='45' y2='176' stroke='#64748b' stroke-width='1.5'/>
  <line x1='45' y1='176' x2='370' y2='176' stroke='#64748b' stroke-width='1.5'/>
  
  <text x='42' y='57' text-anchor='end' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>40</text>
  <line x1='42' y1='55' x2='45' y2='55' stroke='#64748b' stroke-width='1'/>

  <text x='42' y='97' text-anchor='end' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>30</text>
  <line x1='42' y1='95' x2='45' y2='95' stroke='#64748b' stroke-width='1'/>

  <text x='42' y='137' text-anchor='end' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>20</text>
  <line x1='42' y1='135' x2='45' y2='135' stroke='#64748b' stroke-width='1'/>

  <text x='42' y='167' text-anchor='end' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>10</text>
  <line x1='42' y1='165' x2='45' y2='165' stroke='#64748b' stroke-width='1'/>

  <!-- Y-Axis Title -->
  <text x='14' y='105' text-anchor='middle' transform='rotate(-90 14 105)' fill='#94a3b8' font-size='8' font-family='sans-serif' font-weight='600'>Rate per 1,000 / Total Pop</text>

  <!-- Shaded Natural Increase Rate (NIR) Region across Stage 2 & Stage 3 -->
  <polygon points='110,55 175,55 240,140 240,154 175,145 110,60' fill='#22c55e' fill-opacity='0.16'/>
  <text x='175' y='100' text-anchor='middle' fill='#4ade80' font-size='8' font-family='sans-serif' font-weight='700'>Natural Increase (NIR)</text>

  <!-- CBR Curve (Crude Birth Rate: High in 1&2, Drops in 3, Low in 4&5) -->
  <path d='M 45,55 C 70,53 90,56 110,55 C 135,54 155,55 175,55 C 195,65 220,115 240,140 C 265,150 285,154 305,154 C 325,155 350,165 370,168' 
        fill='none' stroke='#38bdf8' stroke-width='2.5' stroke-linecap='round'/>

  <!-- CDR Curve (Crude Death Rate: High fluctuating in 1, Plummets in 2, Low in 3&4, Slight rise in 5) -->
  <path d='M 45,60 C 65,58 75,65 90,59 C 100,64 105,62 110,60 C 125,75 145,125 175,145 C 200,152 225,153 240,154 C 265,155 285,154 305,154 C 325,153 350,148 370,145' 
        fill='none' stroke='#f43f5e' stroke-width='2.5' stroke-linecap='round'/>

  <!-- Total Population Curve (Sigmoid Growth Curve: Low in 1, Accelerates in 2, Sits high in 4, Dips in 5) -->
  <path d='M 45,165 C 75,165 95,164 110,162 C 130,150 155,115 175,90 C 205,65 240,50 270,45 C 295,44 320,44 335,46 C 355,50 365,55 370,60' 
        fill='none' stroke='#fbbf24' stroke-width='2' stroke-dasharray='5,3' stroke-linecap='round'/>

  <!-- Bottom Legend Bar -->
  <rect x='45' y='188' width='325' height='24' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  
  <line x1='55' y1='200' x2='75' y2='200' stroke='#38bdf8' stroke-width='2.5'/>
  <text x='80' y='203' fill='#f1f5f9' font-size='8' font-family='sans-serif' font-weight='600'>Crude Birth Rate (CBR)</text>

  <line x1='175' y1='200' x2='195' y2='200' stroke='#f43f5e' stroke-width='2.5'/>
  <text x='200' y='203' fill='#f1f5f9' font-size='8' font-family='sans-serif' font-weight='600'>Crude Death Rate (CDR)</text>

  <line x1='290' y1='200' x2='310' y2='200' stroke='#fbbf24' stroke-width='2' stroke-dasharray='4,2'/>
  <text x='315' y='203' fill='#f1f5f9' font-size='8' font-family='sans-serif' font-weight='600'>Total Population</text>
</svg>`;

/**
 * Authentic Von Thünen Agricultural Model SVG
 * Concentric zones determined by bid-rent & transportation perishability:
 * - Center: Market / Urban Center
 * - Ring 1: Market Gardening & Dairying (perishable, high transport cost)
 * - Ring 2: Forests / Timber & Firewood (heavy, expensive transport)
 * - Ring 3: Extensive Field Crops / Grains (lighter, non-perishable)
 * - Ring 4: Ranching / Livestock (animals transport themselves)
 */
export const VON_THUNEN_STANDARDIZED_SVG = `<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='400' height='220' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1'/>
  
  <text x='200' y='18' text-anchor='middle' fill='#f8fafc' font-size='11' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>VON THÜNEN AGRICULTURAL LAND-USE MODEL</text>

  <!-- Left: Concentric Rings (Center at x=115, y=115) -->
  <!-- Ring 4: Ranching / Livestock -->
  <circle cx='115' cy='115' r='88' fill='#581c87' fill-opacity='0.4' stroke='#a855f7' stroke-width='1.5'/>
  <!-- Ring 3: Extensive Field Crops & Grains -->
  <circle cx='115' cy='115' r='68' fill='#854d0e' fill-opacity='0.45' stroke='#eab308' stroke-width='1.5'/>
  <!-- Ring 2: Forest & Fuel Wood -->
  <circle cx='115' cy='115' r='48' fill='#78350f' fill-opacity='0.5' stroke='#f97316' stroke-width='1.5'/>
  <!-- Ring 1: Dairying & Intensive Market Gardening -->
  <circle cx='115' cy='115' r='28' fill='#065f46' fill-opacity='0.6' stroke='#10b981' stroke-width='1.5'/>
  <!-- Central Market City -->
  <circle cx='115' cy='115' r='10' fill='#2563eb' stroke='#60a5fa' stroke-width='2'/>
  <text x='115' y='118' text-anchor='middle' fill='#ffffff' font-size='7' font-family='sans-serif' font-weight='bold'>CBD</text>

  <!-- Ring Identification Annotations -->
  <line x1='115' y1='105' x2='115' y2='32' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2,2'/>
  
  <!-- Right: Legend and Bid-Rent Principle Breakdown -->
  <rect x='215' y='30' width='175' height='175' fill='#18181b' rx='8' stroke='#27272a' stroke-width='1'/>
  <text x='225' y='46' fill='#f8fafc' font-size='9' font-family='sans-serif' font-weight='800'>MODEL RINGS &amp; BID-RENT:</text>

  <!-- Item CBD -->
  <circle cx='228' cy='62' r='5' fill='#2563eb'/>
  <text x='240' y='65' fill='#e2e8f0' font-size='8' font-family='sans-serif' font-weight='bold'>Central Market / City</text>

  <!-- Item 1 -->
  <circle cx='228' cy='82' r='5' fill='#10b981'/>
  <text x='240' y='81' fill='#a7f3d0' font-size='8' font-family='sans-serif' font-weight='bold'>1. Market Gardening &amp; Dairy</text>
  <text x='240' y='91' fill='#94a3b8' font-size='7' font-family='sans-serif'>High land cost, highly perishable</text>

  <!-- Item 2 -->
  <circle cx='228' cy='110' r='5' fill='#f97316'/>
  <text x='240' y='109' fill='#fed7aa' font-size='8' font-family='sans-serif' font-weight='bold'>2. Forest / Timber &amp; Firewood</text>
  <text x='240' y='119' fill='#94a3b8' font-size='7' font-family='sans-serif'>Heavy freight, high transport cost</text>

  <!-- Item 3 -->
  <circle cx='228' cy='138' r='5' fill='#eab308'/>
  <text x='240' y='137' fill='#fef08a' font-size='8' font-family='sans-serif' font-weight='bold'>3. Extensive Grains &amp; Wheat</text>
  <text x='240' y='147' fill='#94a3b8' font-size='7' font-family='sans-serif'>Lower land cost, non-perishable</text>

  <!-- Item 4 -->
  <circle cx='228' cy='166' r='5' fill='#a855f7'/>
  <text x='240' y='165' fill='#e9d5ff' font-size='8' font-family='sans-serif' font-weight='bold'>4. Ranching &amp; Livestock</text>
  <text x='240' y='175' fill='#94a3b8' font-size='7' font-family='sans-serif'>Cheapest land, self-transporting</text>

  <!-- Distance Decay Note -->
  <text x='225' y='195' fill='#38bdf8' font-size='7.5' font-family='sans-serif' font-weight='600'>Key Factor: Bid-Rent &amp; Transport Cost</text>
</svg>`;

/**
 * Authentic Burgess Concentric Zone Urban Model SVG
 */
export const BURGESS_CONCENTRIC_ZONE_SVG = `<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='400' height='220' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1'/>
  
  <text x='200' y='18' text-anchor='middle' fill='#f8fafc' font-size='11' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>BURGESS CONCENTRIC ZONE MODEL (URBAN LAND-USE)</text>

  <!-- Concentric Rings (Center at x=115, y=115) -->
  <!-- Zone 5: Commuter Zone -->
  <circle cx='115' cy='115' r='88' fill='#1e293b' stroke='#64748b' stroke-width='1.5'/>
  <!-- Zone 4: Better Residences -->
  <circle cx='115' cy='115' r='70' fill='#0f766e' fill-opacity='0.4' stroke='#14b8a6' stroke-width='1.5'/>
  <!-- Zone 3: Working-Class Homes -->
  <circle cx='115' cy='115' r='52' fill='#0369a1' fill-opacity='0.45' stroke='#0284c7' stroke-width='1.5'/>
  <!-- Zone 2: Zone in Transition -->
  <circle cx='115' cy='115' r='34' fill='#b91c1c' fill-opacity='0.45' stroke='#ef4444' stroke-width='1.5'/>
  <!-- Zone 1: Central Business District (CBD) -->
  <circle cx='115' cy='115' r='14' fill='#eab308' stroke='#fde047' stroke-width='2'/>
  <text x='115' y='118' text-anchor='middle' fill='#000000' font-size='7' font-family='sans-serif' font-weight='bold'>1</text>

  <!-- Number labels on rings -->
  <text x='115' y='90' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>2</text>
  <text x='115' y='72' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>3</text>
  <text x='115' y='55' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>4</text>
  <text x='115' y='38' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>5</text>

  <!-- Legend -->
  <rect x='215' y='30' width='175' height='175' fill='#18181b' rx='8' stroke='#27272a' stroke-width='1'/>
  <text x='225' y='46' fill='#f8fafc' font-size='9' font-family='sans-serif' font-weight='800'>5 CONCENTRIC URBAN ZONES:</text>

  <circle cx='228' cy='62' r='5' fill='#eab308'/>
  <text x='240' y='65' fill='#fef08a' font-size='8' font-family='sans-serif' font-weight='bold'>1. CBD (Commercial Center)</text>

  <circle cx='228' cy='88' r='5' fill='#ef4444'/>
  <text x='240' y='87' fill='#fca5a5' font-size='8' font-family='sans-serif' font-weight='bold'>2. Zone of Transition</text>
  <text x='240' y='97' fill='#94a3b8' font-size='7' font-family='sans-serif'>Industry, tenements, high density</text>

  <circle cx='228' cy='118' r='5' fill='#0284c7'/>
  <text x='240' y='117' fill='#7dd3fc' font-size='8' font-family='sans-serif' font-weight='bold'>3. Independent Workers' Homes</text>
  <text x='240' y='127' fill='#94a3b8' font-size='7' font-family='sans-serif'>Older single-family homes</text>

  <circle cx='228' cy='148' r='5' fill='#14b8a6'/>
  <text x='240' y='147' fill='#99f6e4' font-size='8' font-family='sans-serif' font-weight='bold'>4. Zone of Better Residences</text>
  <text x='240' y='157' fill='#94a3b8' font-size='7' font-family='sans-serif'>Middle class spacious housing</text>

  <circle cx='228' cy='178' r='5' fill='#64748b'/>
  <text x='240' y='177' fill='#cbd5e1' font-size='8' font-family='sans-serif' font-weight='bold'>5. Commuter Zone</text>
  <text x='240' y='187' fill='#94a3b8' font-size='7' font-family='sans-serif'>Dormitory suburbs, car commuters</text>
</svg>`;

/**
 * Authentic Hoyt Sector Model SVG
 */
export const HOYT_SECTOR_MODEL_SVG = `<svg viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='400' height='220' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1'/>
  
  <text x='200' y='18' text-anchor='middle' fill='#f8fafc' font-size='11' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>HOYT SECTOR MODEL (URBAN GROWTH ALONG CORRIDORS)</text>

  <!-- Left: Sectors (Center at x=115, y=115, R=80) -->
  <g transform='translate(115, 115)'>
    <!-- Transportation corridor & Industry (Wedge 1) -->
    <path d='M 0,0 L 70,-40 A 80 80 0 0 1 80,10 Z' fill='#b91c1c' fill-opacity='0.6' stroke='#ef4444' stroke-width='1.5'/>
    <!-- Low-class Residential (Wedge 2 flanking industry) -->
    <path d='M 0,0 L 80,10 A 80 80 0 0 1 40,70 Z' fill='#ea580c' fill-opacity='0.5' stroke='#f97316' stroke-width='1.5'/>
    <!-- Middle-class Residential (Wedge 3 broad expansion) -->
    <path d='M 0,0 L 40,70 A 80 80 0 0 1 -70,40 Z' fill='#0284c7' fill-opacity='0.5' stroke='#38bdf8' stroke-width='1.5'/>
    <!-- High-class Residential Corridor (Wedge 4 opposite industry) -->
    <path d='M 0,0 L -70,40 A 80 80 0 0 1 -40,-70 Z' fill='#059669' fill-opacity='0.6' stroke='#34d399' stroke-width='1.5'/>
    <!-- Middle-class Residential 2 -->
    <path d='M 0,0 L -40,-70 A 80 80 0 0 1 70,-40 Z' fill='#0284c7' fill-opacity='0.5' stroke='#38bdf8' stroke-width='1.5'/>
    <!-- Central Business District (CBD) -->
    <circle cx='0' cy='0' r='18' fill='#eab308' stroke='#fde047' stroke-width='2'/>
    <text x='0' y='4' text-anchor='middle' fill='#000000' font-size='8' font-family='sans-serif' font-weight='bold'>CBD</text>
  </g>

  <!-- Right: Legend -->
  <rect x='215' y='30' width='175' height='175' fill='#18181b' rx='8' stroke='#27272a' stroke-width='1'/>
  <text x='225' y='46' fill='#f8fafc' font-size='9' font-family='sans-serif' font-weight='800'>HOYT SECTOR CLASSIFICATION:</text>

  <circle cx='228' cy='64' r='5' fill='#eab308'/>
  <text x='240' y='67' fill='#fef08a' font-size='8' font-family='sans-serif' font-weight='bold'>1. CBD (Central Core)</text>

  <circle cx='228' cy='90' r='5' fill='#ef4444'/>
  <text x='240' y='89' fill='#fca5a5' font-size='8' font-family='sans-serif' font-weight='bold'>2. Transportation &amp; Industry</text>
  <text x='240' y='99' fill='#94a3b8' font-size='7' font-family='sans-serif'>Rails, waterways, manufacturing</text>

  <circle cx='228' cy='122' r='5' fill='#f97316'/>
  <text x='240' y='121' fill='#fed7aa' font-size='8' font-family='sans-serif' font-weight='bold'>3. Low-Class Residential</text>
  <text x='240' y='131' fill='#94a3b8' font-size='7' font-family='sans-serif'>Closest to factories &amp; pollution</text>

  <circle cx='228' cy='152' r='5' fill='#38bdf8'/>
  <text x='240' y='151' fill='#bae6fd' font-size='8' font-family='sans-serif' font-weight='bold'>4. Middle-Class Residential</text>
  <text x='240' y='161' fill='#94a3b8' font-size='7' font-family='sans-serif'>Buffer zones and suburbs</text>

  <circle cx='228' cy='182' r='5' fill='#34d399'/>
  <text x='240' y='181' fill='#a7f3d0' font-size='8' font-family='sans-serif' font-weight='bold'>5. High-Class Residential</text>
  <text x='240' y='191' fill='#94a3b8' font-size='7' font-family='sans-serif'>Along spine / clean environmental axis</text>
</svg>`;

/**
 * Authentic APHG Thematic Choropleth Map: Global Total Fertility Rates (TFR)
 * Replicates College Board FRQ Section II Stimulus maps:
 * - Macro-regions classified into 3 TFR brackets (<2.1, 2.1-3.5, >3.5)
 * - Shading key and demographic legend
 * - Scale bar, north arrow, and UN Population reference
 */
export const APHG_CHOROPLETH_FERTILITY_MAP_SVG = `<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <pattern id='hatch-high-tfr' width='8' height='8' patternTransform='rotate(45 0 0)' patternUnits='userSpaceOnUse'>
      <line x1='0' y1='0' x2='0' y2='8' stroke='#f43f5e' stroke-width='2'/>
    </pattern>
  </defs>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <!-- Header -->
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: GLOBAL TOTAL FERTILITY RATES (TFR) BY MACRO-GEOGRAPHIC REGION
  </text>

  <!-- World Macro-Region Schematic Polygons -->
  <!-- North America (TFR < 2.1 - Low/Aging) -->
  <polygon points='40,50 140,50 150,90 120,120 70,110 40,75' fill='#0284c7' fill-opacity='0.65' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='85' y='80' text-anchor='middle' fill='#ffffff' font-size='8.5' font-family='sans-serif' font-weight='bold'>North America</text>
  <text x='85' y='92' text-anchor='middle' fill='#bae6fd' font-size='7.5' font-family='sans-serif'>TFR: 1.6 (Stage 4)</text>

  <!-- Latin America & Caribbean (TFR ~1.9 - Replacement) -->
  <polygon points='95,130 145,130 170,180 150,230 115,220 90,165' fill='#0d9488' fill-opacity='0.65' stroke='#2dd4bf' stroke-width='1.5'/>
  <text x='130' y='170' text-anchor='middle' fill='#ffffff' font-size='8.5' font-family='sans-serif' font-weight='bold'>Latin America</text>
  <text x='130' y='182' text-anchor='middle' fill='#99f6e4' font-size='7.5' font-family='sans-serif'>TFR: 1.9 (Stage 3/4)</text>

  <!-- Western & Northern Europe (TFR < 2.1 - Sub-replacement) -->
  <polygon points='205,50 270,50 280,95 240,105 200,90' fill='#0284c7' fill-opacity='0.65' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='240' y='72' text-anchor='middle' fill='#ffffff' font-size='8.5' font-family='sans-serif' font-weight='bold'>Europe</text>
  <text x='240' y='84' text-anchor='middle' fill='#bae6fd' font-size='7.5' font-family='sans-serif'>TFR: 1.5 (Stage 4/5)</text>

  <!-- Middle East & North Africa (TFR 2.1-3.5 - Moderate) -->
  <polygon points='200,105 295,105 285,135 210,135' fill='#d97706' fill-opacity='0.6' stroke='#fbbf24' stroke-width='1.5'/>
  <text x='245' y='122' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>MENA (TFR: 2.7)</text>

  <!-- Sub-Saharan Africa (TFR > 3.5 - High Fertility Stage 2) -->
  <polygon points='210,140 295,140 280,225 240,235 215,190' fill='url(#hatch-high-tfr)' stroke='#f43f5e' stroke-width='1.8'/>
  <rect x='215' y='165' width='70' height='30' fill='#18181b' fill-opacity='0.85' rx='4'/>
  <text x='250' y='178' text-anchor='middle' fill='#fca5a5' font-size='8' font-family='sans-serif' font-weight='bold'>Sub-Saharan</text>
  <text x='250' y='189' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif'>TFR: 4.6 (Stage 2)</text>

  <!-- South Asia (TFR ~2.0 - Near Replacement) -->
  <polygon points='310,105 375,105 365,160 330,175 315,140' fill='#0d9488' fill-opacity='0.65' stroke='#2dd4bf' stroke-width='1.5'/>
  <text x='342' y='132' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>South Asia</text>
  <text x='342' y='143' text-anchor='middle' fill='#99f6e4' font-size='7' font-family='sans-serif'>TFR: 2.0 (Stage 3)</text>

  <!-- East Asia (TFR < 2.1 - Rapid Decline) -->
  <polygon points='365,55 450,55 460,110 400,120 360,95' fill='#0284c7' fill-opacity='0.65' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='410' y='80' text-anchor='middle' fill='#ffffff' font-size='8.5' font-family='sans-serif' font-weight='bold'>East Asia</text>
  <text x='410' y='92' text-anchor='middle' fill='#bae6fd' font-size='7.5' font-family='sans-serif'>TFR: 1.1 (Stage 5)</text>

  <!-- Australia & Oceania (TFR < 2.1) -->
  <polygon points='400,175 480,175 470,225 410,225' fill='#0284c7' fill-opacity='0.65' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='440' y='198' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>Oceania</text>
  <text x='440' y='209' text-anchor='middle' fill='#bae6fd' font-size='7' font-family='sans-serif'>TFR: 1.7</text>

  <!-- North Arrow Compass -->
  <g transform='translate(485, 45)'>
    <circle cx='0' cy='0' r='14' fill='#18181b' stroke='#3f3f46' stroke-width='1'/>
    <polygon points='0,-10 -4,3 0,0 4,3' fill='#ef4444'/>
    <text x='0' y='-12' text-anchor='middle' fill='#f8fafc' font-size='7' font-family='sans-serif' font-weight='bold'>N</text>
  </g>

  <!-- Legend Box (Bottom) -->
  <rect x='20' y='244' width='480' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='30' y='261' fill='#94a3b8' font-size='8' font-family='sans-serif' font-weight='bold'>CHOROPLETH TFR TIERS:</text>

  <rect x='160' y='251' width='16' height='12' fill='url(#hatch-high-tfr)' stroke='#f43f5e' stroke-width='1'/>
  <text x='182' y='261' fill='#fca5a5' font-size='8' font-family='sans-serif'>High (&gt; 3.5)</text>

  <rect x='270' y='251' width='16' height='12' fill='#d97706' stroke='#fbbf24' stroke-width='1'/>
  <text x='292' y='261' fill='#fed7aa' font-size='8' font-family='sans-serif'>Moderate (2.1 - 3.5)</text>

  <rect x='410' y='251' width='16' height='12' fill='#0284c7' stroke='#38bdf8' stroke-width='1'/>
  <text x='432' y='261' fill='#bae6fd' font-size='8' font-family='sans-serif'>Sub-Repl. (&lt; 2.1)</text>
</svg>`;

/**
 * Authentic APHG Transnational Migration Flow Stream Map
 * Demonstrates global labor corridors, push/pull factors, and remittances.
 */
export const APHG_TRANSNATIONAL_MIGRATION_FLOW_MAP_SVG = `<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <marker id='mig-arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
      <path d='M 0,1 L 10,5 L 0,9 z' fill='#38bdf8'/>
    </marker>
    <marker id='mig-arrow-amber' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
      <path d='M 0,1 L 10,5 L 0,9 z' fill='#fbbf24'/>
    </marker>
  </defs>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <!-- Title -->
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: MAJOR GLOBAL TRANSNATIONAL MIGRATION CORRIDORS &amp; LABOR FLOWS
  </text>

  <!-- Regional Nodes -->
  <!-- Node: North America -->
  <rect x='40' y='65' width='105' height='55' rx='8' fill='#1e293b' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='92' y='88' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>North America</text>
  <text x='92' y='102' text-anchor='middle' fill='#38bdf8' font-size='7.5' font-family='sans-serif'>Major Destination (Pull)</text>

  <!-- Node: Latin America -->
  <rect x='40' y='170' width='105' height='55' rx='8' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/>
  <text x='92' y='193' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>Latin America</text>
  <text x='92' y='207' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>Origin (Push Factors)</text>

  <!-- Corridor 1: Latin America -> North America -->
  <path d='M 92,170 Q 75,145 92,125' fill='none' stroke='#38bdf8' stroke-width='3.5' marker-end='url(#mig-arrow-blue)'/>
  <text x='112' y='148' fill='#bae6fd' font-size='7.5' font-family='sans-serif' font-weight='bold'>Corridor A</text>

  <!-- Node: Western Europe -->
  <rect x='205' y='65' width='110' height='55' rx='8' fill='#1e293b' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='260' y='88' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>Western Europe</text>
  <text x='260' y='102' text-anchor='middle' fill='#38bdf8' font-size='7.5' font-family='sans-serif'>Destination (Schengen)</text>

  <!-- Node: North & Sub-Saharan Africa -->
  <rect x='205' y='170' width='110' height='55' rx='8' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/>
  <text x='260' y='193' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>Africa (North/Sub)</text>
  <text x='260' y='207' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>Origin (Economic Push)</text>

  <!-- Corridor 2: Africa -> Europe -->
  <path d='M 260,170 Q 240,145 260,125' fill='none' stroke='#38bdf8' stroke-width='3' marker-end='url(#mig-arrow-blue)'/>
  <text x='280' y='148' fill='#bae6fd' font-size='7.5' font-family='sans-serif' font-weight='bold'>Corridor B</text>

  <!-- Node: Arabian Gulf (GCC States) -->
  <rect x='375' y='65' width='115' height='55' rx='8' fill='#1e293b' stroke='#fbbf24' stroke-width='1.5'/>
  <text x='432' y='88' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>Arabian Gulf (GCC)</text>
  <text x='432' y='102' text-anchor='middle' fill='#fbbf24' font-size='7.5' font-family='sans-serif'>Guest Contract Workers</text>

  <!-- Node: South & Southeast Asia -->
  <rect x='375' y='170' width='115' height='55' rx='8' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/>
  <text x='432' y='193' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>South / SE Asia</text>
  <text x='432' y='207' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>Origin (Remittance Relying)</text>

  <!-- Corridor 3: South Asia -> Gulf GCC -->
  <path d='M 432,170 Q 412,145 432,125' fill='none' stroke='#fbbf24' stroke-width='3.5' marker-end='url(#mig-arrow-amber)'/>
  <text x='452' y='148' fill='#fef08a' font-size='7.5' font-family='sans-serif' font-weight='bold'>Corridor C</text>

  <!-- Remittance Return Dotted Arrow -->
  <path d='M 410,125 Q 395,145 410,165' fill='none' stroke='#10b981' stroke-width='2' stroke-dasharray='4,3'/>
  <text x='355' y='148' fill='#6ee7b7' font-size='7' font-family='sans-serif'>$ Remittances</text>

  <!-- Bottom Key -->
  <rect x='20' y='244' width='480' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='30' y='261' fill='#94a3b8' font-size='8' font-family='sans-serif' font-weight='bold'>MIGRATION MECHANISMS:</text>
  <line x1='160' y1='258' x2='180' y2='258' stroke='#38bdf8' stroke-width='3'/>
  <text x='188' y='261' fill='#e2e8f0' font-size='8' font-family='sans-serif'>Permanent / Asylee Flow</text>
  <line x1='310' y1='258' x2='330' y2='258' stroke='#fbbf24' stroke-width='3'/>
  <text x='338' y='261' fill='#e2e8f0' font-size='8' font-family='sans-serif'>Temporary Contract Labor</text>
  <line x1='450' y1='258' x2='470' y2='258' stroke='#10b981' stroke-width='2' stroke-dasharray='3,2'/>
  <text x='475' y='261' fill='#6ee7b7' font-size='7.5' font-family='sans-serif'>Cash Flow</text>
</svg>`;

/**
 * Authentic APHG Wallerstein World Systems Theory Spatial Model SVG
 */
export const APHG_WALLERSTEIN_CORE_PERIPHERY_SVG = `<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <marker id='arrow-core' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
      <path d='M 0,1 L 10,5 L 0,9 z' fill='#38bdf8'/>
    </marker>
    <marker id='arrow-periphery' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
      <path d='M 0,1 L 10,5 L 0,9 z' fill='#f43f5e'/>
    </marker>
  </defs>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: WALLERSTEIN'S WORLD SYSTEMS THEORY (SPATIAL DIVISION OF LABOR)
  </text>

  <!-- Left: Concentric Hierarchy (Center at x=135, y=140) -->
  <!-- Outer Ring: Periphery -->
  <circle cx='135' cy='140' r='95' fill='#881337' fill-opacity='0.4' stroke='#f43f5e' stroke-width='1.5'/>
  <!-- Middle Ring: Semi-Periphery -->
  <circle cx='135' cy='140' r='68' fill='#78350f' fill-opacity='0.5' stroke='#f59e0b' stroke-width='1.5'/>
  <!-- Inner Core -->
  <circle cx='135' cy='140' r='38' fill='#0369a1' fill-opacity='0.7' stroke='#38bdf8' stroke-width='2'/>
  <text x='135' y='136' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>CORE</text>
  <text x='135' y='148' text-anchor='middle' fill='#bae6fd' font-size='7' font-family='sans-serif'>High Tech/Capital</text>

  <text x='135' y='86' text-anchor='middle' fill='#fef08a' font-size='8' font-family='sans-serif' font-weight='bold'>SEMI-PERIPHERY</text>
  <text x='135' y='58' text-anchor='middle' fill='#fecdd3' font-size='8' font-family='sans-serif' font-weight='bold'>PERIPHERY</text>

  <!-- Right: Economic Trade Flows -->
  <rect x='250' y='40' width='250' height='190' rx='8' fill='#18181b' stroke='#27272a' stroke-width='1'/>
  <text x='260' y='58' fill='#f8fafc' font-size='9' font-family='sans-serif' font-weight='800'>SPATIAL INTERACTION &amp; UNEQUAL EXCHANGE:</text>

  <!-- Flow 1: Periphery -> Core (Raw Materials) -->
  <rect x='260' y='72' width='230' height='40' rx='6' fill='#27272a' stroke='#f43f5e' stroke-width='1'/>
  <text x='270' y='86' fill='#fca5a5' font-size='8' font-family='sans-serif' font-weight='bold'>Periphery to Core:</text>
  <text x='270' y='98' fill='#e2e8f0' font-size='7' font-family='sans-serif'>Inexpensive raw agricultural goods, minerals &amp; low-wage labor</text>

  <!-- Flow 2: Core -> Periphery (Manufactured Goods) -->
  <rect x='260' y='122' width='230' height='40' rx='6' fill='#27272a' stroke='#38bdf8' stroke-width='1'/>
  <text x='270' y='136' fill='#7dd3fc' font-size='8' font-family='sans-serif' font-weight='bold'>Core to Periphery &amp; Semi-Periphery:</text>
  <text x='270' y='148' fill='#e2e8f0' font-size='7' font-family='sans-serif'>High-profit manufactured goods, machinery &amp; financial credit</text>

  <!-- Semi-periphery role -->
  <rect x='260' y='172' width='230' height='46' rx='6' fill='#27272a' stroke='#f59e0b' stroke-width='1'/>
  <text x='270' y='186' fill='#fde047' font-size='8' font-family='sans-serif' font-weight='bold'>Role of Semi-Periphery (BRICS):</text>
  <text x='270' y='198' fill='#cbd5e1' font-size='7' font-family='sans-serif'>Buffer zone; exploits periphery while being exploited by core</text>

  <!-- Bottom Key -->
  <rect x='20' y='244' width='480' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='260' y='261' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>
    Core Countries: US, Western Europe, Japan | Semi-Periphery: China, Brazil, India, Mexico | Periphery: Sub-Saharan Africa
  </text>
</svg>`;

/**
 * Authentic APHG Harris-Ullman Multiple Nuclei & Galactic Edge City Model SVG
 */
export const APHG_HARRIS_ULLMAN_MULTIPLE_NUCLEI_SVG = `<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: HARRIS-ULLMAN MULTIPLE NUCLEI &amp; GALACTIC EDGE CITY MODEL
  </text>

  <!-- Left: Geometric Urban Map (x: 20 to 260) -->
  <!-- Orbital Highway Beltway Ring -->
  <ellipse cx='140' cy='135' rx='110' ry='85' fill='none' stroke='#64748b' stroke-width='2' stroke-dasharray='6,4'/>
  <text x='140' y='46' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>Interstate Orbital Highway Beltway</text>

  <!-- Node 1: CBD -->
  <rect x='110' y='110' width='45' height='35' fill='#eab308' stroke='#fde047' stroke-width='1.5' rx='4'/>
  <text x='132' y='132' text-anchor='middle' fill='#000000' font-size='9' font-family='sans-serif' font-weight='bold'>1</text>

  <!-- Node 2: Wholesale & Light Manufacturing -->
  <rect x='70' y='100' width='35' height='45' fill='#ea580c' stroke='#f97316' stroke-width='1.5' rx='4'/>
  <text x='87' y='127' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>2</text>

  <!-- Node 3: Low-Class Residential -->
  <rect x='60' y='150' width='55' height='35' fill='#b91c1c' stroke='#ef4444' stroke-width='1.5' rx='4'/>
  <text x='87' y='172' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>3</text>

  <!-- Node 4: Medium-Class Residential -->
  <polygon points='160,110 210,100 215,160 160,150' fill='#0284c7' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='185' y='135' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>4</text>

  <!-- Node 5: High-Class Residential -->
  <polygon points='160,65 210,60 215,95 160,105' fill='#059669' stroke='#34d399' stroke-width='1.5'/>
  <text x='185' y='87' text-anchor='middle' fill='#ffffff' font-size='9' font-family='sans-serif' font-weight='bold'>5</text>

  <!-- Node 6: Heavy Industry Outlying Node -->
  <rect x='45' y='70' width='35' height='25' fill='#713f12' stroke='#a16207' stroke-width='1.5' rx='4'/>
  <text x='62' y='87' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>6</text>

  <!-- Node 7: Outlying Business District (Suburban CBD) -->
  <rect x='185' y='175' width='35' height='25' fill='#eab308' stroke='#fde047' stroke-width='1.5' rx='4'/>
  <text x='202' y='192' text-anchor='middle' fill='#000000' font-size='8' font-family='sans-serif' font-weight='bold'>7</text>

  <!-- Node 8: Residential Suburb -->
  <rect x='120' y='190' width='55' height='25' fill='#0284c7' stroke='#38bdf8' stroke-width='1.5' rx='4'/>
  <text x='147' y='207' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>8</text>

  <!-- Node 9: Galactic Edge City along Beltway Intersection -->
  <circle cx='235' cy='180' r='16' fill='#7c3aed' stroke='#a78bfa' stroke-width='2'/>
  <text x='235' y='184' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>9</text>
  <text x='235' y='206' text-anchor='middle' fill='#c4b5fd' font-size='7' font-family='sans-serif' font-weight='bold'>Edge City</text>

  <!-- Right: Legend Box -->
  <rect x='270' y='36' width='235' height='230' rx='8' fill='#18181b' stroke='#27272a' stroke-width='1'/>
  <text x='280' y='52' fill='#f8fafc' font-size='9' font-family='sans-serif' font-weight='800'>MULTIPLE NUCLEI ZONING KEY:</text>

  <text x='280' y='72' fill='#fef08a' font-size='7.5' font-family='sans-serif'><b>1.</b> Central Business District (CBD)</text>
  <text x='280' y='90' fill='#fed7aa' font-size='7.5' font-family='sans-serif'><b>2.</b> Wholesale &amp; Light Manufacturing</text>
  <text x='280' y='108' fill='#fca5a5' font-size='7.5' font-family='sans-serif'><b>3.</b> Low-Class Residential (Near factories)</text>
  <text x='280' y='126' fill='#7dd3fc' font-size='7.5' font-family='sans-serif'><b>4.</b> Medium-Class Residential</text>
  <text x='280' y='144' fill='#86efac' font-size='7.5' font-family='sans-serif'><b>5.</b> High-Class Residential (Farthest from smog)</text>
  <text x='280' y='162' fill='#ca8a04' font-size='7.5' font-family='sans-serif'><b>6.</b> Heavy Manufacturing Node</text>
  <text x='280' y='180' fill='#fef08a' font-size='7.5' font-family='sans-serif'><b>7.</b> Outlying Suburban Business District</text>
  <text x='280' y='198' fill='#7dd3fc' font-size='7.5' font-family='sans-serif'><b>8.</b> Residential Suburb</text>
  <text x='280' y='216' fill='#d8b4fe' font-size='7.5' font-family='sans-serif'><b>9.</b> Galactic Edge City (Jobs along Beltway)</text>

  <text x='280' y='245' fill='#94a3b8' font-size='7' font-family='sans-serif'>
    Harris-Ullman (1945): Polycentric urban structure based on automobile transport.
  </text>
</svg>`;

/**
 * Authentic College Board Equatorial Pacific ENSO Map (La Niña Phase)

 * Matches Figure 1 from official AP Environmental Science / AP Human Geography Section II exam:
 * - Equator 0° and 30° North latitude markers
 * - Cooler than average waters in Eastern Equatorial Pacific (upwelling tongue) & Caribbean
 * - Warmer than average waters in Western Pacific pool (Indonesia/Melanesia)
 * - Solid black shading over Eastern Australia (Increased chance of precipitation)
 * - Stronger than normal trade winds arrow (East to West)
 * - Complete College Board legend box and compass rose
 */
export const ENSO_LA_NINA_PACIFIC_MAP_SVG = `<svg viewBox='0 0 540 420' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <!-- Pattern 1: Diagonal Hatch for Cooler Ocean Water -->
    <pattern id='enso-cool-hatch' width='10' height='10' patternTransform='rotate(45 0 0)' patternUnits='userSpaceOnUse'>
      <line x1='0' y1='0' x2='0' y2='10' stroke='#38bdf8' stroke-width='2'/>
    </pattern>

    <!-- Pattern 2: Horizontal Stripes for Warmer Ocean Water -->
    <pattern id='enso-warm-stripes' width='10' height='8' patternUnits='userSpaceOnUse'>
      <line x1='0' y1='4' x2='10' y2='4' stroke='#fb923c' stroke-width='2.5'/>
    </pattern>

    <!-- Arrow Marker for Trade Winds -->
    <marker id='enso-arrow-head' viewBox='0 0 10 10' refX='2' refY='5' markerWidth='8' markerHeight='8' orient='auto'>
      <path d='M 10,0 L 0,5 L 10,10 z' fill='#f8fafc'/>
    </marker>
  </defs>

  <!-- Background Canvas -->
  <rect width='540' height='420' fill='#09090b' rx='12' stroke='#27272a' stroke-width='1.5'/>

  <!-- Figure Title Header (Exact match to official College Board prompt) -->
  <text x='270' y='22' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.3'>
    FIGURE 1. EFFECTS OF CHANGES IN SEA SURFACE CONDITIONS IN EQUATORIAL PACIFIC OCEAN
  </text>

  <!-- Map Frame Box (x=20, y=34, width=500, height=240) -->
  <rect x='20' y='34' width='500' height='240' fill='#0f172a' stroke='#334155' stroke-width='1.5'/>

  <!-- Latitudes Lines & Labels -->
  <!-- 30° North -->
  <line x1='20' y1='95' x2='520' y2='95' stroke='#64748b' stroke-width='1' stroke-dasharray='5,5'/>
  <rect x='225' y='87' width='90' height='16' fill='#0f172a' rx='3'/>
  <text x='270' y='99' text-anchor='middle' fill='#cbd5e1' font-size='9' font-family='system-ui, sans-serif' font-weight='700'>30° North</text>

  <!-- Equator 0° -->
  <line x1='20' y1='165' x2='520' y2='165' stroke='#64748b' stroke-width='1' stroke-dasharray='5,5'/>
  <rect x='225' y='157' width='90' height='16' fill='#0f172a' rx='3'/>
  <text x='270' y='169' text-anchor='middle' fill='#cbd5e1' font-size='9' font-family='system-ui, sans-serif' font-weight='700'>Equator 0°</text>

  <!-- Continents Silhouettes -->
  <!-- 1. Asia / East Eurasia (Top Left) -->
  <path d='M 20,34 L 150,34 Q 165,55 175,80 Q 160,110 145,130 Q 120,150 95,170 Q 75,185 55,200 L 20,200 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>
  <!-- Japan Arc -->
  <path d='M 172,78 Q 182,95 175,115' fill='none' stroke='#94a3b8' stroke-width='3' stroke-linecap='round'/>
  <!-- SE Asia & Indonesian Islands -->
  <ellipse cx='105' cy='180' rx='14' ry='5' fill='#475569' stroke='#94a3b8'/>
  <ellipse cx='135' cy='188' rx='20' ry='6' fill='#475569' stroke='#94a3b8'/>
  <ellipse cx='175' cy='190' rx='22' ry='7' fill='#475569' stroke='#94a3b8'/>

  <!-- 2. North America (Top Right) -->
  <path d='M 320,34 L 520,34 L 520,140 Q 480,135 445,115 Q 420,95 385,80 Q 350,60 320,34 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>
  <!-- Central America & Mexico Isthmus -->
  <path d='M 445,115 Q 465,130 475,155 Q 465,168 450,172' fill='none' stroke='#334155' stroke-width='12' stroke-linecap='round'/>

  <!-- 3. South America (Bottom Right) -->
  <path d='M 450,172 Q 480,180 520,182 L 520,274 L 455,274 Q 440,245 442,215 Q 442,190 450,172 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>

  <!-- 4. Australia (Bottom Left) - Split into West (Normal) and East (Black Shaded: High Precipitation) -->
  <!-- West Australia (Normal Light Fill) -->
  <path d='M 105,225 Q 130,215 145,216 L 145,274 Q 128,274 112,262 Q 98,248 105,225 Z' fill='#1e293b' stroke='#64748b' stroke-width='1.5'/>
  <!-- East Australia (Solid Black Fill: Increased Chance of Precipitation) -->
  <path d='M 145,216 Q 165,215 180,228 Q 185,250 176,270 Q 158,275 145,274 Z' fill='#000000' stroke='#38bdf8' stroke-width='2'/>
  <!-- New Zealand -->
  <ellipse cx='205' cy='268' rx='4' ry='11' transform='rotate(25 205 268)' fill='#475569' stroke='#94a3b8'/>

  <!-- Oceanic Thermal Conditions (Thematic Layers) -->
  <!-- Layer A: Warm Pool in Western Equatorial Pacific (Horizontal Stripes) -->
  <path d='M 80,145 Q 140,130 200,140 Q 225,165 220,198 Q 205,225 155,220 Q 105,215 75,188 Z' 
        fill='url(#enso-warm-stripes)' stroke='#fb923c' stroke-width='1.5' stroke-dasharray='4,2'/>

  <!-- Layer B: Cool Tongue in Eastern Equatorial Pacific (Diagonal Hatch) -->
  <path d='M 255,155 Q 330,135 410,132 Q 460,142 458,168 Q 445,190 405,192 Q 335,185 255,172 Z' 
        fill='url(#enso-cool-hatch)' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='4,2'/>

  <!-- Caribbean / Gulf of Mexico Cool Patch -->
  <ellipse cx='465' cy='135' rx='25' ry='12' fill='url(#enso-cool-hatch)' stroke='#38bdf8' stroke-width='1.2' stroke-dasharray='3,2'/>

  <!-- Stronger than Normal Trade Winds Arrow (Thick Arrow pointing West along Equator) -->
  <line x1='365' y1='165' x2='210' y2='165' stroke='#f8fafc' stroke-width='5.5' marker-end='url(#enso-arrow-head)'/>

  <!-- Compass Rose (South Pacific, x=415, y=232) -->
  <g transform='translate(415, 232)'>
    <circle cx='0' cy='0' r='18' fill='#0f172a' stroke='#64748b' stroke-width='1'/>
    <line x1='0' y1='-16' x2='0' y2='16' stroke='#94a3b8' stroke-width='1.5'/>
    <line x1='-16' y1='0' x2='16' y2='0' stroke='#94a3b8' stroke-width='1.5'/>
    <polygon points='0,-16 3,-5 0,0 -3,-5' fill='#f8fafc'/>
    <polygon points='0,16 3,5 0,0 -3,5' fill='#64748b'/>
    <polygon points='16,0 5,3 0,0 5,-3' fill='#64748b'/>
    <polygon points='-16,0 -5,3 0,0 -5,-3' fill='#64748b'/>
    <text x='0' y='-20' text-anchor='middle' fill='#f8fafc' font-size='8.5' font-family='sans-serif' font-weight='800'>N</text>
    <text x='0' y='27' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif' font-weight='700'>S</text>
    <text x='25' y='3' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif' font-weight='700'>E</text>
    <text x='-25' y='3' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif' font-weight='700'>W</text>
  </g>

  <!-- Bottom Official College Board Legend Box -->
  <rect x='110' y='286' width='320' height='120' fill='#0f172a' rx='8' stroke='#334155' stroke-width='1.5'/>

  <!-- Legend Item 1: Cooler Water -->
  <rect x='125' y='298' width='22' height='14' fill='url(#enso-cool-hatch)' stroke='#38bdf8' stroke-width='1'/>
  <text x='158' y='310' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Ocean water cooler than average</text>

  <!-- Legend Item 2: Warmer Water -->
  <rect x='125' y='322' width='22' height='14' fill='url(#enso-warm-stripes)' stroke='#fb923c' stroke-width='1'/>
  <text x='158' y='334' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Ocean water warmer than average</text>

  <!-- Legend Item 3: Increased Precipitation -->
  <rect x='125' y='346' width='22' height='14' fill='#000000' stroke='#38bdf8' stroke-width='1.5'/>
  <text x='158' y='358' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Increased chance of precipitation</text>

  <!-- Legend Item 4: Stronger Trade Winds -->
  <g transform='translate(125, 376)'>
    <line x1='22' y1='4' x2='2' y2='4' stroke='#f8fafc' stroke-width='3.5' marker-end='url(#enso-arrow-head)'/>
  </g>
  <text x='158' y='382' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Stronger than normal trade winds</text>

  <!-- Climatological Subtitle -->
  <text x='270' y='400' text-anchor='middle' fill='#38bdf8' font-size='8' font-family='system-ui, sans-serif' font-weight='700'>
    CLIMATOLOGICAL CONDITION: LA NIÑA (ENHANCED PACIFIC CIRCULATION)
  </text>
</svg>`;

/**
 * Authentic College Board Equatorial Pacific ENSO Map (El Niño Phase)
 * Features eastward warm pool displacement, weakened trade winds, and reduced upwelling off South America.
 */
export const ENSO_EL_NINO_PACIFIC_MAP_SVG = `<svg viewBox='0 0 540 420' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <pattern id='el-nino-warm' width='10' height='8' patternUnits='userSpaceOnUse'>
      <line x1='0' y1='4' x2='10' y2='4' stroke='#f43f5e' stroke-width='2.5'/>
    </pattern>
    <pattern id='el-nino-dry' width='10' height='10' patternTransform='rotate(45 0 0)' patternUnits='userSpaceOnUse'>
      <line x1='0' y1='0' x2='0' y2='10' stroke='#eab308' stroke-width='1.8'/>
    </pattern>
    <marker id='el-nino-arrow' viewBox='0 0 10 10' refX='8' refY='5' markerWidth='7' markerHeight='7' orient='auto'>
      <path d='M 0,0 L 10,5 L 0,10 z' fill='#f43f5e'/>
    </marker>
  </defs>

  <rect width='540' height='420' fill='#09090b' rx='12' stroke='#27272a' stroke-width='1.5'/>
  <text x='270' y='22' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.3'>
    FIGURE 1. EFFECTS OF CHANGES IN SEA SURFACE CONDITIONS: EL NIÑO (ENSO)
  </text>

  <rect x='20' y='34' width='500' height='240' fill='#0f172a' stroke='#334155' stroke-width='1.5'/>

  <!-- Latitudes -->
  <line x1='20' y1='95' x2='520' y2='95' stroke='#64748b' stroke-width='1' stroke-dasharray='5,5'/>
  <rect x='225' y='87' width='90' height='16' fill='#0f172a' rx='3'/>
  <text x='270' y='99' text-anchor='middle' fill='#cbd5e1' font-size='9' font-family='system-ui, sans-serif' font-weight='700'>30° North</text>

  <line x1='20' y1='165' x2='520' y2='165' stroke='#64748b' stroke-width='1' stroke-dasharray='5,5'/>
  <rect x='225' y='157' width='90' height='16' fill='#0f172a' rx='3'/>
  <text x='270' y='169' text-anchor='middle' fill='#cbd5e1' font-size='9' font-family='system-ui, sans-serif' font-weight='700'>Equator 0°</text>

  <!-- Land Masses -->
  <path d='M 20,34 L 150,34 Q 165,55 175,80 Q 160,110 145,130 Q 120,150 95,170 Q 75,185 55,200 L 20,200 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>
  <path d='M 320,34 L 520,34 L 520,140 Q 480,135 445,115 Q 420,95 385,80 Q 350,60 320,34 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>
  <path d='M 450,172 Q 480,180 520,182 L 520,274 L 455,274 Q 440,245 442,215 Q 442,190 450,172 Z' fill='#334155' stroke='#475569' stroke-width='1.2'/>

  <!-- Australia with Drought / Dry Hatch -->
  <path d='M 105,225 Q 140,215 175,225 Q 185,255 170,275 Q 130,280 105,255 Z' fill='url(#el-nino-dry)' stroke='#eab308' stroke-width='1.5'/>

  <!-- Eastward Shifted Warm Pool (Spanning Central and Eastern Pacific along Equator) -->
  <path d='M 220,150 Q 310,128 410,130 Q 465,145 460,185 Q 425,205 320,198 Q 240,195 220,175 Z' 
        fill='url(#el-nino-warm)' stroke='#f43f5e' stroke-width='1.8' stroke-dasharray='4,2'/>

  <!-- Weakened / Reversed Trade Winds (Dashed Eastward Arrow) -->
  <line x1='190' y1='165' x2='300' y2='165' stroke='#f43f5e' stroke-width='4' stroke-dasharray='6,3' marker-end='url(#el-nino-arrow)'/>

  <!-- Bottom Legend Box -->
  <rect x='110' y='286' width='320' height='120' fill='#0f172a' rx='8' stroke='#334155' stroke-width='1.5'/>
  <rect x='125' y='298' width='22' height='14' fill='url(#el-nino-warm)' stroke='#f43f5e' stroke-width='1'/>
  <text x='158' y='310' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Ocean water warmer than average (Displaced East)</text>

  <rect x='125' y='322' width='22' height='14' fill='url(#el-nino-dry)' stroke='#eab308' stroke-width='1'/>
  <text x='158' y='334' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Drought risk / Decreased precipitation</text>

  <rect x='125' y='346' width='22' height='14' fill='#0284c7' stroke='#38bdf8' stroke-width='1'/>
  <text x='158' y='358' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Suppressed marine nutrient upwelling off Peru</text>

  <g transform='translate(125, 376)'>
    <line x1='2' y1='4' x2='22' y2='4' stroke='#f43f5e' stroke-width='2.5' stroke-dasharray='4,2' marker-end='url(#el-nino-arrow)'/>
  </g>
  <text x='158' y='382' fill='#e2e8f0' font-size='8.5' font-family='system-ui, sans-serif' font-weight='700'>Weakened / Reversed trade winds (Eastward flow)</text>

  <text x='270' y='400' text-anchor='middle' fill='#f43f5e' font-size='8' font-family='system-ui, sans-serif' font-weight='700'>
    CLIMATOLOGICAL CONDITION: EL NIÑO (SUPPRESSED WALKER CIRCULATION)
  </text>
</svg>`;

/**
 * Authentic Rain Shadow Effect Diagram (APES Unit 4.7 / Earth Systems)
 * Illustrates adiabatic cooling on windward slope vs arid rain shadow on leeward slope.
 */
export const RAIN_SHADOW_EFFECT_SVG = `<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <defs>
    <linearGradient id='ocean-grad' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#0369a1'/>
      <stop offset='100%' stop-color='#0284c7'/>
    </linearGradient>
    <linearGradient id='mountain-grad' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#15803d'/>
      <stop offset='45%' stop-color='#475569'/>
      <stop offset='65%' stop-color='#a16207'/>
      <stop offset='100%' stop-color='#78350f'/>
    </linearGradient>
    <marker id='air-arrow' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto'>
      <path d='M 0,0 L 10,5 L 0,10 z' fill='#38bdf8'/>
    </marker>
    <marker id='dry-arrow' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto'>
      <path d='M 0,0 L 10,5 L 0,10 z' fill='#fb923c'/>
    </marker>
  </defs>

  <rect width='500' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  <text x='250' y='20' text-anchor='middle' fill='#f8fafc' font-size='11' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    THE RAIN SHADOW EFFECT (OROGRAPHIC PRECIPITATION)
  </text>

  <!-- Ocean (Left) -->
  <rect x='15' y='210' width='105' height='55' fill='url(#ocean-grad)' rx='4'/>
  <text x='67' y='242' text-anchor='middle' fill='#e0f2fe' font-size='9' font-family='sans-serif' font-weight='bold'>Pacific Ocean</text>

  <!-- Mountain Profile -->
  <path d='M 120,225 L 240,75 L 340,210 L 485,225 L 485,265 L 120,265 Z' fill='url(#mountain-grad)' stroke='#334155' stroke-width='1.5'/>

  <!-- Windward Slope (Moist, Lush Side) -->
  <text x='155' y='180' fill='#4ade80' font-size='9' font-family='sans-serif' font-weight='bold'>WINDWARD</text>
  <text x='155' y='192' fill='#86efac' font-size='7.5' font-family='sans-serif'>Moist, rising air cools</text>
  <text x='155' y='202' fill='#86efac' font-size='7.5' font-family='sans-serif'>Condensation &amp; Heavy Rain</text>

  <!-- Rising Wind Arrows -->
  <path d='M 60,195 Q 110,190 150,150 Q 185,115 220,80' fill='none' stroke='#38bdf8' stroke-width='3' marker-end='url(#air-arrow)'/>

  <!-- Clouds & Rain at Peak -->
  <ellipse cx='215' cy='75' rx='35' ry='16' fill='#64748b' fill-opacity='0.8'/>
  <ellipse cx='235' cy='68' rx='25' ry='14' fill='#94a3b8' fill-opacity='0.9'/>
  <!-- Rain dashes -->
  <line x1='195' y1='95' x2='185' y2='125' stroke='#38bdf8' stroke-width='2' stroke-dasharray='4,3'/>
  <line x1='215' y1='95' x2='205' y2='125' stroke='#38bdf8' stroke-width='2' stroke-dasharray='4,3'/>

  <!-- Leeward Slope (Arid Rain Shadow) -->
  <text x='355' y='150' fill='#fb923c' font-size='9' font-family='sans-serif' font-weight='bold'>LEEWARD (RAIN SHADOW)</text>
  <text x='355' y='163' fill='#fed7aa' font-size='7.5' font-family='sans-serif'>Dry air descends &amp; warms</text>
  <text x='355' y='174' fill='#fed7aa' font-size='7.5' font-family='sans-serif'>Low precipitation / Arid desert</text>

  <!-- Descending Dry Warm Air Arrow -->
  <path d='M 255,80 Q 295,120 340,175 Q 370,210 440,218' fill='none' stroke='#fb923c' stroke-width='3' marker-end='url(#dry-arrow)'/>

  <!-- Bottom Legend / Concept Note -->
  <rect x='15' y='240' width='470' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='250' y='257' text-anchor='middle' fill='#cbd5e1' font-size='8' font-family='system-ui, sans-serif'>
    Physical Mechanism: Adiabatic cooling &amp; condensation on windward slope; adiabatic warming &amp; moisture depletion on leeward slope.
  </text>
</svg>`;

/**
 * Authentic APHG Epidemiological Transition Model (Abdel Omran) SVG
 * Illustrates Stages 1 through 5 with shifting mortality causes and life expectancies.
 */
export const APHG_EPIDEMIOLOGICAL_TRANSITION_MODEL_SVG = `<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: EPIDEMIOLOGICAL TRANSITION MODEL (OMRAN'S 5 STAGES)
  </text>

  <!-- Stage 1 -->
  <rect x='25' y='36' width='90' height='150' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='70' y='52' text-anchor='middle' fill='#ef4444' font-size='8.5' font-family='sans-serif' font-weight='bold'>Stage 1</text>
  <text x='70' y='63' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>Pestilence &amp; Famine</text>
  <line x1='35' y1='70' x2='105' y2='70' stroke='#3f3f46' stroke-width='1'/>
  <text x='70' y='88' text-anchor='middle' fill='#fca5a5' font-size='7' font-family='sans-serif'>High Mortality</text>
  <text x='70' y='100' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Infectious Diseases</text>
  <text x='70' y='110' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Parasites &amp; Famine</text>
  <text x='70' y='125' text-anchor='middle' fill='#94a3b8' font-size='6.5' font-family='sans-serif'>Black Plague, Cholera</text>
  <text x='70' y='145' text-anchor='middle' fill='#f87171' font-size='7' font-family='sans-serif' font-weight='bold'>Life Exp: &lt;30 yrs</text>

  <!-- Stage 2 -->
  <rect x='120' y='36' width='90' height='150' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='165' y='52' text-anchor='middle' fill='#f59e0b' font-size='8.5' font-family='sans-serif' font-weight='bold'>Stage 2</text>
  <text x='165' y='63' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>Receding Pandemics</text>
  <line x1='130' y1='70' x2='200' y2='70' stroke='#3f3f46' stroke-width='1'/>
  <text x='165' y='88' text-anchor='middle' fill='#fcd34d' font-size='7' font-family='sans-serif'>Plummeting CDR</text>
  <text x='165' y='100' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Public Sanitation</text>
  <text x='165' y='110' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Clean Piped Water</text>
  <text x='165' y='125' text-anchor='middle' fill='#94a3b8' font-size='6.5' font-family='sans-serif'>Industrial Revolution</text>
  <text x='165' y='145' text-anchor='middle' fill='#fbbf24' font-size='7' font-family='sans-serif' font-weight='bold'>Life Exp: ~50 yrs</text>

  <!-- Stage 3 -->
  <rect x='215' y='36' width='90' height='150' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='260' y='52' text-anchor='middle' fill='#38bdf8' font-size='8.5' font-family='sans-serif' font-weight='bold'>Stage 3</text>
  <text x='260' y='63' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>Degenerative Diseases</text>
  <line x1='225' y1='70' x2='295' y2='70' stroke='#3f3f46' stroke-width='1'/>
  <text x='260' y='88' text-anchor='middle' fill='#7dd3fc' font-size='7' font-family='sans-serif'>Chronic Pathologies</text>
  <text x='260' y='100' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Cardiovascular Disease</text>
  <text x='260' y='110' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Cancer &amp; Stroke</text>
  <text x='260' y='125' text-anchor='middle' fill='#94a3b8' font-size='6.5' font-family='sans-serif'>Infectious deaths drop</text>
  <text x='260' y='145' text-anchor='middle' fill='#38bdf8' font-size='7' font-family='sans-serif' font-weight='bold'>Life Exp: ~70 yrs</text>

  <!-- Stage 4 -->
  <rect x='310' y='36' width='90' height='150' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='355' y='52' text-anchor='middle' fill='#10b981' font-size='8.5' font-family='sans-serif' font-weight='bold'>Stage 4</text>
  <text x='355' y='63' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>Delayed Degenerative</text>
  <line x1='320' y1='70' x2='390' y2='70' stroke='#3f3f46' stroke-width='1'/>
  <text x='355' y='88' text-anchor='middle' fill='#6ee7b7' font-size='7' font-family='sans-serif'>Advanced Medicine</text>
  <text x='355' y='100' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Bypass Surgeries</text>
  <text x='355' y='110' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Chemotherapy / Diet</text>
  <text x='355' y='125' text-anchor='middle' fill='#94a3b8' font-size='6.5' font-family='sans-serif'>Deaths delayed to 75+</text>
  <text x='355' y='145' text-anchor='middle' fill='#34d399' font-size='7' font-family='sans-serif' font-weight='bold'>Life Exp: &gt;80 yrs</text>

  <!-- Stage 5 -->
  <rect x='405' y='36' width='90' height='150' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='450' y='52' text-anchor='middle' fill='#a855f7' font-size='8.5' font-family='sans-serif' font-weight='bold'>Stage 5</text>
  <text x='450' y='63' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>Reemerging Infections</text>
  <line x1='415' y1='70' x2='485' y2='70' stroke='#3f3f46' stroke-width='1'/>
  <text x='450' y='88' text-anchor='middle' fill='#d8b4fe' font-size='7' font-family='sans-serif'>Global Diffusion</text>
  <text x='450' y='100' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Antimicrobial Resistance</text>
  <text x='450' y='110' text-anchor='middle' fill='#e2e8f0' font-size='6.5' font-family='sans-serif'>Air Travel Spread</text>
  <text x='450' y='125' text-anchor='middle' fill='#94a3b8' font-size='6.5' font-family='sans-serif'>Poverty &amp; Urbanization</text>
  <text x='450' y='145' text-anchor='middle' fill='#c084fc' font-size='7' font-family='sans-serif' font-weight='bold'>SARS, COVID, MRSA</text>

  <!-- Bottom Transition Axis -->
  <rect x='25' y='194' width='470' height='36' fill='#1e293b' rx='4' stroke='#334155' stroke-width='1'/>
  <text x='260' y='208' text-anchor='middle' fill='#ffffff' font-size='7.5' font-family='sans-serif' font-weight='bold'>SHIFT IN LEADING CAUSES OF MORTALITY OVER TIME</text>
  <text x='70' y='222' text-anchor='middle' fill='#fca5a5' font-size='7' font-family='sans-serif'>Infectious &amp; Parasitic</text>
  <text x='260' y='222' text-anchor='middle' fill='#93c5fd' font-size='7' font-family='sans-serif'>Degenerative &amp; Cardiovascular</text>
  <text x='450' y='222' text-anchor='middle' fill='#d8b4fe' font-size='7' font-family='sans-serif'>Antibiotic Resistant</text>

  <!-- Bottom Citation Bar -->
  <rect x='25' y='240' width='470' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='260' y='257' text-anchor='middle' fill='#94a3b8' font-size='7.5' font-family='sans-serif'>
    Correlates Abdel Omran's Epidemiological Framework with Demographic Transition Model (DTM) Stages 1–5
  </text>
</svg>`;

/**
 * Authentic APHG Comparative Mapping Techniques SVG (Choropleth vs. Dot Density)
 * Replicates Unit 1 Geographic Skills: Data aggregation bias vs. localized clustering.
 */
export const APHG_CHOROPLETH_VS_DOT_DENSITY_MAP_SVG = `<svg viewBox='0 0 520 280' xmlns='http://www.w3.org/2000/svg' width='100%' height='auto'>
  <rect width='520' height='280' fill='#09090b' rx='10' stroke='#27272a' stroke-width='1.5'/>
  
  <text x='260' y='20' text-anchor='middle' fill='#f8fafc' font-size='10.5' font-family='system-ui, sans-serif' font-weight='800' letter-spacing='0.5'>
    FIGURE 1: COMPARATIVE POPULATION MAPPING TECHNIQUES (CHOROPLETH VS. DOT DENSITY)
  </text>

  <!-- Left Map: Choropleth (x: 25 to 255) -->
  <rect x='25' y='34' width='230' height='195' fill='#18181b' rx='8' stroke='#27272a' stroke-width='1.5'/>
  <text x='140' y='50' text-anchor='middle' fill='#38bdf8' font-size='8.5' font-family='sans-serif' font-weight='bold'>SOURCE 1: CHOROPLETH MAP</text>
  <text x='140' y='62' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>County-Level Population Density (People/sq mi)</text>

  <!-- County Boundaries (Choropleth Shaded Polygons) -->
  <polygon points='40,75 110,75 125,125 45,130' fill='#0284c7' stroke='#e2e8f0' stroke-width='1.5'/>
  <text x='80' y='105' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>&gt;500</text>

  <polygon points='110,75 220,75 235,120 125,125' fill='#0369a1' stroke='#e2e8f0' stroke-width='1.5'/>
  <text x='170' y='105' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>100–500</text>

  <polygon points='45,130 125,125 110,185 35,180' fill='#075985' stroke='#e2e8f0' stroke-width='1.5'/>
  <text x='80' y='160' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>20–100</text>

  <polygon points='125,125 235,120 220,185 110,185' fill='#0c4a6e' stroke='#e2e8f0' stroke-width='1.5'/>
  <text x='170' y='160' text-anchor='middle' fill='#ffffff' font-size='8' font-family='sans-serif' font-weight='bold'>&lt;20</text>

  <text x='140' y='210' text-anchor='middle' fill='#fca5a5' font-size='7' font-family='sans-serif'>Limitation: Assumes uniform spread; masks clusters</text>

  <!-- Right Map: Dot Density (x: 265 to 495) -->
  <rect x='265' y='34' width='230' height='195' fill='#18181b' rx='8' stroke='#27272a' stroke-width='1.5'/>
  <text x='380' y='50' text-anchor='middle' fill='#34d399' font-size='8.5' font-family='sans-serif' font-weight='bold'>SOURCE 2: DOT DENSITY MAP</text>
  <text x='380' y='62' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>1 Dot = 500 Residents (Actual Settlement Sites)</text>

  <!-- Faint County Boundaries -->
  <polygon points='280,75 350,75 365,125 285,130' fill='none' stroke='#64748b' stroke-width='1' stroke-dasharray='3,3'/>
  <polygon points='350,75 460,75 475,120 365,125' fill='none' stroke='#64748b' stroke-width='1' stroke-dasharray='3,3'/>
  <polygon points='285,130 365,125 350,185 275,180' fill='none' stroke='#64748b' stroke-width='1' stroke-dasharray='3,3'/>
  <polygon points='365,125 475,120 460,185 350,185' fill='none' stroke='#64748b' stroke-width='1' stroke-dasharray='3,3'/>

  <!-- Clustered Dots in Urban Core (Metro Node) -->
  <g fill='#34d399'>
    <circle cx='320' cy='95' r='2.5'/><circle cx='324' cy='97' r='2.5'/><circle cx='318' cy='102' r='2.5'/>
    <circle cx='327' cy='101' r='2.5'/><circle cx='322' cy='105' r='2.5'/><circle cx='330' cy='98' r='2.5'/>
    <circle cx='315' cy='96' r='2.5'/><circle cx='321' cy='92' r='2.5'/><circle cx='328' cy='105' r='2.5'/>
    <circle cx='332' cy='102' r='2.5'/><circle cx='318' cy='108' r='2.5'/><circle cx='325' cy='110' r='2.5'/>
    <!-- Suburban Cluster along Highway -->
    <circle cx='380' cy='95' r='2'/><circle cx='384' cy='98' r='2'/><circle cx='388' cy='94' r='2'/>
    <circle cx='392' cy='96' r='2'/><circle cx='385' cy='102' r='2'/>
    <!-- Sparse Rural Dots -->
    <circle cx='300' cy='155' r='1.8'/><circle cx='330' cy='165' r='1.8'/><circle cx='420' cy='150' r='1.8'/>
    <circle cx='445' cy='135' r='1.8'/><circle cx='450' cy='170' r='1.8'/><circle cx='410' cy='85' r='1.8'/>
  </g>
  <text x='325' y='125' text-anchor='middle' fill='#a7f3d0' font-size='7' font-family='sans-serif' font-weight='bold'>Urban Core</text>
  <text x='435' y='160' text-anchor='middle' fill='#94a3b8' font-size='7' font-family='sans-serif'>Rural Sparsity</text>

  <text x='380' y='210' text-anchor='middle' fill='#86efac' font-size='7' font-family='sans-serif'>Strength: Accurately reveals agglomeration vs rural space</text>

  <!-- Bottom Synthesis Box -->
  <rect x='25' y='240' width='470' height='28' fill='#18181b' rx='6' stroke='#27272a' stroke-width='1'/>
  <text x='260' y='257' text-anchor='middle' fill='#cbd5e1' font-size='7.5' font-family='system-ui, sans-serif'>
    Cartographic Analysis: Choropleths aggregate into arbitrary political boundaries (Ecological Fallacy); Dot density reveals spatial settlement patterns.
  </text>
</svg>`;

/**
 * Checks if a question references a canonical AP model, and returns the verified textbook SVG.
 * Ensures that whenever a standard model is tested, students receive a 100% textbook-accurate diagram.
 */
export function getStandardizedModelSvg(text: string, subjectId: string): string | null {
  if (!text) return null;
  const t = text.toLowerCase();
  const s = (subjectId || '').toLowerCase();

  // 1. AP Human Geography Models
  if (s.includes('geography') || s.includes('aphg') || s.includes('human')) {
    // ETM has priority over DTM to prevent mismatch
    if (t.includes('epidemiological') || t.includes('epidemiologic') || t.includes('omran')) {
      return APHG_EPIDEMIOLOGICAL_TRANSITION_MODEL_SVG;
    }

    if (
      !t.includes('epidemiolog') &&
      (t.includes('demographic transition') || t.includes('dtm') || (t.includes('crude birth') && t.includes('crude death')))
    ) {
      return DTM_STANDARDIZED_SVG;
    }
    if (t.includes('von thunen') || t.includes('von thünen') || t.includes('bid-rent') || t.includes('isolated state')) {
      return VON_THUNEN_STANDARDIZED_SVG;
    }
    if (t.includes('burgess') || t.includes('concentric zone') || (t.includes('concentric') && t.includes('zone'))) {
      return BURGESS_CONCENTRIC_ZONE_SVG;
    }
    if (t.includes('hoyt') || t.includes('sector model') || t.includes('axial growth')) {
      return HOYT_SECTOR_MODEL_SVG;
    }
    if (t.includes('multiple nuclei') || t.includes('harris-ullman') || t.includes('harris and ullman') || t.includes('edge city') || t.includes('galactic city')) {
      return APHG_HARRIS_ULLMAN_MULTIPLE_NUCLEI_SVG;
    }
    if (
      (t.includes('dot density') && (t.includes('choropleth') || t.includes('map'))) ||
      (t.includes('choropleth') && t.includes('dot density')) ||
      (t.includes('choropleth') && t.includes('ecological fallacy'))
    ) {
      return APHG_CHOROPLETH_VS_DOT_DENSITY_MAP_SVG;
    }
    if (
      t.includes('choropleth') || 
      (t.includes('fertility') && t.includes('map')) || 
      (t.includes('tfr') && (t.includes('map') || t.includes('rate'))) || 
      t.includes('macro-geographic') ||
      t.includes('global total fertility')
    ) {
      return APHG_CHOROPLETH_FERTILITY_MAP_SVG;
    }
    if (
      t.includes('migration corridor') || 
      t.includes('migration flow') || 
      (t.includes('transnational') && t.includes('migration')) || 
      (t.includes('migration') && (t.includes('map') || t.includes('stream') || t.includes('corridor') || t.includes('labor'))) || 
      (t.includes('labor flow') && (t.includes('gcc') || t.includes('gulf')))
    ) {
      return APHG_TRANSNATIONAL_MIGRATION_FLOW_MAP_SVG;
    }
    if (
      t.includes('wallerstein') || 
      t.includes('world systems') || 
      t.includes('core-periphery') || 
      t.includes('core periphery') || 
      t.includes('spatial division of labor')
    ) {
      return APHG_WALLERSTEIN_CORE_PERIPHERY_SVG;
    }

    // Climatological / Environmental stimulus in APHG
    if (t.includes('la nina') || t.includes('la niña') || (t.includes('equatorial pacific') && t.includes('trade wind'))) {
      return ENSO_LA_NINA_PACIFIC_MAP_SVG;
    }
    if (t.includes('el nino') || t.includes('el niño')) {
      return ENSO_EL_NINO_PACIFIC_MAP_SVG;
    }
  }

  // 2. AP Environmental Science (APES) Canonical Models & Stimuli
  if (s.includes('environmental') || s.includes('apes')) {
    // A. Demographic Transition Model (Unit 3 Population)
    if (t.includes('demographic transition') || (t.includes('crude birth') && t.includes('crude death'))) {
      return DTM_STANDARDIZED_SVG;
    }

    // B. Equatorial Pacific Sea Surface Conditions / ENSO (Unit 4 Earth Systems)
    if (
      t.includes('la nina') ||
      t.includes('la niña') ||
      (t.includes('sea surface conditions') && t.includes('pacific')) ||
      (t.includes('equatorial pacific') && (t.includes('trade wind') || t.includes('precipitation') || t.includes('australia'))) ||
      (t.includes('trade winds') && t.includes('pacific') && !t.includes('el nino') && !t.includes('el niño'))
    ) {
      return ENSO_LA_NINA_PACIFIC_MAP_SVG;
    }

    if (t.includes('el nino') || t.includes('el niño') || (t.includes('enso') && t.includes('suppressed upwelling'))) {
      return ENSO_EL_NINO_PACIFIC_MAP_SVG;
    }

    // General ENSO fallback
    if (t.includes('enso') || (t.includes('walker circulation') && t.includes('pacific'))) {
      return ENSO_LA_NINA_PACIFIC_MAP_SVG;
    }

    // C. Rain Shadow Effect (Unit 4 Earth Systems)
    if (t.includes('rain shadow') || (t.includes('windward') && t.includes('leeward')) || t.includes('orographic')) {
      return RAIN_SHADOW_EFFECT_SVG;
    }
  }

  return null;
}

