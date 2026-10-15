/**
 * Canonical College Board AP Subject Whitelists & Boundary Signatures
 * 
 * Defines allowed curriculum concepts, units, topics, and forbidden foreign signatures
 * for every AP subject supported by the app to eliminate cross-subject content leakage.
 */

export interface APSubjectWhitelist {
  subjectId: string;
  subjectName: string;
  category: 'humanities' | 'stem_math' | 'science' | 'social_science' | 'tech';
  canonicalUnits: {
    unitNumber: number;
    title: string;
    keywords: string[];
  }[];
  allowedDomains: string[];
  forbiddenSignatures: RegExp[];
  mathExpected: boolean;
}

export const AP_SUBJECT_WHITELISTS: Record<string, APSubjectWhitelist> = {
  'ap-human-geography': {
    subjectId: 'ap-human-geography',
    subjectName: 'AP Human Geography',
    category: 'social_science',
    mathExpected: false,
    canonicalUnits: [
      { unitNumber: 1, title: 'Thinking Geographically', keywords: ['gis', 'gps', 'remote sensing', 'scale of analysis', 'formal region', 'functional region', 'vernacular region', 'environmental determinism', 'possibilism', 'distance decay', 'time-space compression', 'map projection', 'choropleth'] },
      { unitNumber: 2, title: 'Population & Migration Patterns', keywords: ['demographic transition model', 'dtm', 'crude birth rate', 'cbr', 'crude death rate', 'cdr', 'natural increase rate', 'nir', 'population pyramid', 'dependency ratio', 'malthus', 'boserup', 'ravenstein', 'push factor', 'pull factor', 'refugee', 'idp', 'asylum', 'pronatalist', 'antinatalist', 'epidemiological transition'] },
      { unitNumber: 3, title: 'Cultural Patterns & Processes', keywords: ['cultural hearth', 'contagious diffusion', 'hierarchical diffusion', 'stimulus diffusion', 'relocation diffusion', 'universalizing religion', 'ethnic religion', 'language family', 'indo-european', 'isogloss', 'lingua franca', 'acculturation', 'assimilation', 'syncretism', 'cultural landscape', 'folk culture', 'pop culture'] },
      { unitNumber: 4, title: 'Political Patterns & Processes', keywords: ['sovereignty', 'nation-state', 'stateless nation', 'multinational state', 'autonomous region', 'colonialism', 'berlin conference', 'superimposed boundary', 'relic boundary', 'unclos', 'exclusive economic zone', 'eez', 'gerrymandering', 'devolution', 'supranationalism', 'un', 'eu', 'nato', 'asean', 'balkanization'] },
      { unitNumber: 5, title: 'Agriculture & Rural Land-Use', keywords: ['von thunen', 'bid-rent', 'green revolution', 'subsistence agriculture', 'commercial agriculture', 'intensive farming', 'extensive farming', 'shifting cultivation', 'pastoral nomadism', 'agribusiness', 'commodity chain', 'metes and bounds', 'township and range', 'long lot', 'desertification', 'salinization'] },
      { unitNumber: 6, title: 'Cities & Urban Land-Use', keywords: ['burgess', 'concentric zone', 'hoyt sector', 'multiple nuclei', 'harris-ullman', 'galactic city', 'edge city', 'central place theory', 'christaller', 'range', 'threshold', 'rank-size rule', 'primate city', 'gentrification', 'new urbanism', 'smart growth', 'suburban sprawl', 'redlining', 'blockbusting', 'megacity', 'squatter settlement'] },
      { unitNumber: 7, title: 'Industrial & Economic Development', keywords: ['wallerstein', 'world systems', 'core', 'periphery', 'semiperiphery', 'rostow', 'stages of economic growth', 'weber', 'least cost theory', 'bulk-gaining', 'bulk-reducing', 'hdi', 'human development index', 'gni', 'gii', 'maquiladora', 'epz', 'sez', 'outsourcing', 'deindustrialization', 'agglomeration', 'un sdgs', 'microfinance'] }
    ],
    allowedDomains: ['spatial analysis', 'demography', 'culture', 'geopolitics', 'agriculture', 'urban planning', 'economic development'],
    forbiddenSignatures: [
      // Calculus and advanced mathematics
      /\b(?:definite\s+integral|indefinite\s+integral|fundamental\s+theorem\s+of\s+calculus|\bFTC\b|derivative|differentiat(?:ion|e)|critical\s+point|concav(?:e|ity)|tangent\s+line|riemann\s+sum|slope\s+field|separable\s+differential\s+equation|disk\s+method|washer\s+method|shell\s+method|volume\s+of\s+revolution|taylor\s+series|maclaurin|radius\s+of\s+convergence|l'h[oô]pital|mean\s+value\s+theorem|\bMVT\b|intermediate\s+value\s+theorem|\bIVT\b|dy\/dx|d\^2y\/dx\^2|f'\(x\)|f''\(x\)|\\int\b|\\frac\{d\}\{dx\})\b/i,
      // Classical mechanics / Physics
      /\b(?:centripetal\s+acceleration|rotational\s+inertia|kinematic\s+equation|projectile\s+motion|angular\s+momentum|newton's\s+second\s+law|bernoulli's\s+equation|archimedes\s+principle|f\s*=\s*ma)\b/i,
      // Advanced Chemistry
      /\b(?:titration\s+curve|le\s+chatelier|stoichiometr(?:y|ic)|henderson-hasselbalch|beer-lambert|orbitals|hybridization|sp3|photoelectron\s+spectroscopy|\bPES\b|net\s+ionic\s+equation)\b/i
    ]
  },
  'ap-environmental-science': {
    subjectId: 'ap-environmental-science',
    subjectName: 'AP Environmental Science',
    category: 'science',
    mathExpected: true,
    canonicalUnits: [
      { unitNumber: 1, title: 'The Living World: Ecosystems', keywords: ['carbon cycle', 'nitrogen cycle', 'phosphorus cycle', 'hydrologic cycle', 'trophic level', '10% rule', 'primary productivity', 'gpp', 'npp', 'biomes'] },
      { unitNumber: 2, title: 'The Living World: Biodiversity', keywords: ['ecosystem services', 'provisioning', 'regulating', 'cultural', 'supporting', 'island biogeography', 'ecological tolerance', 'succession', 'pioneer species', 'keystone species'] },
      { unitNumber: 3, title: 'Populations', keywords: ['generalist', 'specialist', 'r-selected', 'k-selected', 'survivorship curve', 'carrying capacity', 'k', 'rule of 70', 'doubling time', 'demographic transition', 'tfr', 'replacement level'] },
      { unitNumber: 4, title: 'Earth Systems & Resources', keywords: ['plate tectonics', 'convergent', 'divergent', 'transform', 'soil horizons', 'soil texture triangle', 'atmosphere', 'troposphere', 'stratosphere', 'coriolis effect', 'el nino', 'la nina', 'watershed'] },
      { unitNumber: 5, title: 'Land & Water Use', keywords: ['tragedy of the commons', 'clearcutting', 'green revolution', 'irrigation', 'drip', 'furrow', 'flood', 'salinization', 'aquifer', 'ogallala', 'pest control', 'ipm', 'cafo', 'overfishing', 'mining', 'slag'] },
      { unitNumber: 6, title: 'Energy Resources & Consumption', keywords: ['fossil fuels', 'coal', 'petroleum', 'natural gas', 'fracking', 'nuclear fission', 'half-life', 'biomass', 'solar photovoltaic', 'wind turbine', 'hydroelectric', 'geothermal', 'hydrogen fuel cell'] },
      { unitNumber: 7, title: 'Atmospheric Pollution', keywords: ['photochemical smog', 'ground-level ozone', 'thermal inversion', 'acid deposition', 'so2', 'nox', 'pm2.5', 'pm10', 'radon', 'asbestos', 'vocs', 'vapor recovery nozzle', 'catalytic converter', 'scrubber'] },
      { unitNumber: 8, title: 'Aquatic & Terrestrial Pollution', keywords: ['point source', 'nonpoint source', 'eutrophication', 'hypoxic', 'dead zone', 'biological oxygen demand', 'bod', 'bioaccumulation', 'biomagnification', 'endocrine disruptor', 'ld50', 'sanitary landfill', 'leachate', 'sewage treatment'] },
      { unitNumber: 9, title: 'Global Change', keywords: ['stratospheric ozone depletion', 'cfcs', 'montreal protocol', 'greenhouse effect', 'co2', 'ch4', 'n2o', 'ocean acidification', 'coral bleaching', 'invasive species', 'hsi', 'cites', 'endangered species act'] }
    ],
    allowedDomains: ['ecology', 'earth systems', 'energy', 'environmental toxicology', 'pollution', 'sustainability', 'population ecology'],
    forbiddenSignatures: [
      /\b(?:definite\s+integral|indefinite\s+integral|fundamental\s+theorem\s+of\s+calculus|riemann\s+sum|disk\s+method|washer\s+method|taylor\s+series|maclaurin|l'h[oô]pital|mean\s+value\s+theorem|dy\/dx|d\^2y\/dx\^2|f'\(x\)|f''\(x\))\b/i,
      /\b(?:rotational\s+inertia|angular\s+momentum|centripetal\s+acceleration|bernoulli's\s+equation)\b/i
    ]
  },
  'ap-computer-science-principles': {
    subjectId: 'ap-computer-science-principles',
    subjectName: 'AP Computer Science Principles',
    category: 'tech',
    mathExpected: false,
    canonicalUnits: [
      { unitNumber: 1, title: 'Creative Development', keywords: ['collaboration', 'program design', 'software development process', 'debugging', 'logic error', 'syntax error', 'runtime error', 'testing'] },
      { unitNumber: 2, title: 'Data Representation & Information', keywords: ['binary', 'bits', 'bytes', 'hexadecimal', 'overflow error', 'roundoff error', 'lossy compression', 'lossless compression', 'data abstraction', 'metadata'] },
      { unitNumber: 3, title: 'Algorithms & Programming', keywords: ['sequencing', 'selection', 'iteration', 'conditional', 'if-else', 'loops', 'traversal', 'linear search', 'binary search', 'procedural abstraction', 'parameters', 'return value', 'robot grid'] },
      { unitNumber: 4, title: 'Computing Systems & Networks', keywords: ['the internet', 'ip address', 'ipv4', 'ipv6', 'tcp/ip', 'packets', 'packet switching', 'routers', 'fault tolerance', 'redundancy', 'bandwidth', 'latency', 'world wide web', 'http', 'https'] },
      { unitNumber: 5, title: 'Impact of Computing', keywords: ['digital divide', 'computing bias', 'crowdsourcing', 'citizen science', 'intellectual property', 'creative commons', 'open source', 'open access', 'cybersecurity', 'phishing', 'keylogging', 'malware', 'public-key encryption', 'symmetric encryption', 'ddos', 'multifactor authentication'] }
    ],
    allowedDomains: ['algorithms', 'networking', 'data representation', 'programming logic', 'cybersecurity', 'digital ethics'],
    forbiddenSignatures: [
      /\b(?:integral|derivative|calculus|riemann|titration|stoichiometry|dtm|demographic\s+transition|von\s+thunen|gerrymandering)\b/i,
      /\b(?:public\s+class\b|System\.out\.println|extends\b|implements\b|private\s+int\b|ArrayList<Integer>)\b/i // Avoid Java AP CSA code leaking into CSP pseudocode
    ]
  },
  'ap-computer-science': {
    subjectId: 'ap-computer-science',
    subjectName: 'AP Computer Science A',
    category: 'tech',
    mathExpected: false,
    canonicalUnits: [
      { unitNumber: 1, title: 'Primitive Types & Calling Methods', keywords: ['int', 'double', 'boolean', 'arithmetic', 'modulus', 'casting', 'Math.random', 'parameters', 'return values'] },
      { unitNumber: 2, title: 'Control Structures & Iteration', keywords: ['boolean expressions', 'relational operators', 'if-else', 'while loop', 'for loop', 'nested loops', 'iteration bounds'] },
      { unitNumber: 3, title: 'Class Design & Encapsulation', keywords: ['class header', 'private instance variables', 'constructors', 'accessor', 'mutator', 'this', 'String methods', 'substring', 'indexOf', 'equals'] },
      { unitNumber: 4, title: 'Arrays, ArrayLists & 2D Arrays', keywords: ['1D array', 'ArrayList', 'add', 'get', 'set', 'remove', 'size', '2D array', 'matrix', 'nested traversal', 'bounds checking'] }
    ],
    allowedDomains: ['computer science', 'java programming', 'object oriented programming', 'algorithms', 'data structures', 'matrices', 'arraylist'],
    forbiddenSignatures: [
      /\b(?:definite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|titration|chloroplast|mitosis|rotational\s+inertia|stoichiometry|balance\s+of\s+payments|aggregate\s+demand|dtm|von\s+thunen)\b/i
    ]
  },
  'ap-calculus-ab': {
    subjectId: 'ap-calculus-ab',
    subjectName: 'AP Calculus AB',
    category: 'stem_math',
    mathExpected: true,
    canonicalUnits: [
      { unitNumber: 1, title: 'Limits & Continuity', keywords: ['limit', 'continuity', 'removable discontinuity', 'jump discontinuity', 'vertical asymptote', 'squeeze theorem', 'intermediate value theorem', 'ivt', 'end behavior'] },
      { unitNumber: 2, title: 'Differentiation: Definition & Fundamentals', keywords: ['derivative', 'difference quotient', 'instantaneous rate of change', 'power rule', 'product rule', 'quotient rule', 'differentiability'] },
      { unitNumber: 3, title: 'Chain Rule & Implicit Differentiation', keywords: ['chain rule', 'composite function', 'implicit differentiation', 'inverse trigonometric derivatives'] },
      { unitNumber: 4, title: 'Contextual Applications of Differentiation', keywords: ['straight-line motion', 'position', 'velocity', 'acceleration', 'speed', 'related rates', 'local linearity', 'linear approximation'] },
      { unitNumber: 5, title: 'Analytical Applications of Differentiation', keywords: ['mean value theorem', 'mvt', 'extreme value theorem', 'evt', 'critical point', 'first derivative test', 'second derivative test', 'concavity', 'inflection point', 'optimization'] },
      { unitNumber: 6, title: 'Integration & Accumulation of Change', keywords: ['riemann sum', 'trapezoidal rule', 'antiderivative', 'indefinite integral', 'definite integral', 'fundamental theorem of calculus', 'ftc', 'u-substitution'] },
      { unitNumber: 7, title: 'Differential Equations & Slope Fields', keywords: ['slope field', 'separation of variables', 'general solution', 'particular solution', 'exponential growth', 'dy/dx'] },
      { unitNumber: 8, title: 'Applications of Integration', keywords: ['average value', 'area between curves', 'volume of solid of revolution', 'disk method', 'washer method', 'cross sections'] }
    ],
    allowedDomains: ['limits', 'derivatives', 'integrals', 'differential equations', 'particle motion', 'rates of change'],
    forbiddenSignatures: [
      // Human Geography / Humanities leakage
      /\b(?:gentrification|von\s+thunen|supranationalism|wallerstein|malthus|cold\s+war|french\s+revolution|hamlet|chloroplast|mitochondria|dna\s+replication|operon)\b/i,
      // Generic fallback markers
      /\b(?:spatial\s+pattern|affected\s+stakeholders|regional\s+context|spatial\s+trends)\b/i,
      // Strictly Forbidden Calculus BC Exclusive Topics
      /\b(?:taylor\s+series|maclaurin\s+series|taylor\s+polynomial|maclaurin\s+polynomial|ratio\s+test|radius\s+of\s+convergence|interval\s+of\s+convergence|euler's\s+method|eulers\s+method|logistic\s+differential|carrying\s+capacity|polar\s+area|polar\s+coordinates|parametric\s+equations|vector-valued|integration\s+by\s+parts|partial\s+fractions|improper\s+integral|alternating\s+series\s+error\s+bound|lagrange\s+error\s+bound)\b/i
    ]
  },
  'ap-calculus-bc': {
    subjectId: 'ap-calculus-bc',
    subjectName: 'AP Calculus BC',
    category: 'stem_math',
    mathExpected: true,
    canonicalUnits: [
      { unitNumber: 1, title: 'Limits & Continuity', keywords: ['limit', 'continuity', 'squeeze theorem', 'l\'hopital'] },
      { unitNumber: 2, title: 'Differentiation: Definition & Fundamentals', keywords: ['derivative', 'power rule', 'product rule', 'quotient rule'] },
      { unitNumber: 3, title: 'Chain Rule & Implicit Differentiation', keywords: ['chain rule', 'implicit differentiation'] },
      { unitNumber: 4, title: 'Contextual Applications of Differentiation', keywords: ['related rates', 'linear approximation'] },
      { unitNumber: 5, title: 'Analytical Applications of Differentiation', keywords: ['mean value theorem', 'mvt', 'critical points', 'optimization'] },
      { unitNumber: 6, title: 'Integration & Accumulation of Change', keywords: ['riemann sums', 'ftc', 'integration by parts', 'partial fractions', 'improper integrals'] },
      { unitNumber: 7, title: 'Differential Equations', keywords: ['slope fields', 'euler\'s method', 'logistic differential equation', 'carrying capacity'] },
      { unitNumber: 8, title: 'Applications of Integration', keywords: ['area between curves', 'volumes of revolution', 'arc length'] },
      { unitNumber: 9, title: 'Parametric Equations, Polar Coordinates & Vector-Valued Functions', keywords: ['parametric equations', 'vector motion', 'velocity vector', 'speed', 'polar coordinates', 'polar area', 'r(theta)'] },
      { unitNumber: 10, title: 'Infinite Sequences & Series', keywords: ['infinite series', 'geometric series', 'taylor polynomial', 'maclaurin', 'ratio test', 'radius of convergence', 'interval of convergence', 'alternating series test', 'lagrange error bound'] }
    ],
    allowedDomains: ['calculus', 'infinite series', 'taylor polynomials', 'polar coordinates', 'parametric equations', 'differential equations'],
    forbiddenSignatures: [
      /\b(?:gentrification|von\s+thunen|supranationalism|wallerstein|malthus|cold\s+war|cell\s+membrane)\b/i
    ]
  },
  'ap-physics-1': {
    subjectId: 'ap-physics-1',
    subjectName: 'AP Physics 1: Algebra-Based',
    category: 'science',
    mathExpected: true,
    canonicalUnits: [
      { unitNumber: 1, title: 'Kinematics', keywords: ['displacement', 'velocity', 'acceleration', 'free fall', 'projectile motion', 'v-t graph', 'x-t graph'] },
      { unitNumber: 2, title: 'Force & Translational Dynamics', keywords: ['newton\'s laws', 'inertia', 'f=ma', 'free body diagram', 'normal force', 'friction', 'tension', 'spring force', 'hooke\'s law'] },
      { unitNumber: 3, title: 'Work, Energy & Power', keywords: ['kinetic energy', 'gravitational potential energy', 'elastic potential energy', 'conservation of energy', 'work-energy theorem', 'power'] },
      { unitNumber: 4, title: 'Linear Momentum', keywords: ['momentum', 'impulse', 'conservation of momentum', 'elastic collision', 'inelastic collision', 'center of mass'] },
      { unitNumber: 5, title: 'Torque & Rotational Dynamics', keywords: ['torque', 'rotational inertia', 'rotational kinetic energy', 'angular momentum', 'conservation of angular momentum', 'angular acceleration'] },
      { unitNumber: 6, title: 'Energy & Momentum of Oscillations', keywords: ['simple harmonic motion', 'shm', 'period', 'frequency', 'simple pendulum', 'mass-spring oscillator'] },
      { unitNumber: 7, title: 'Fluids', keywords: ['density', 'pressure', 'buoyant force', 'archimedes principle', 'continuity equation', 'bernoulli\'s equation'] }
    ],
    allowedDomains: ['mechanics', 'forces', 'energy', 'momentum', 'rotational motion', 'oscillations', 'fluids'],
    forbiddenSignatures: [
      /\b(?:definite\s+integral|fundamental\s+theorem\s+of\s+calculus|taylor\s+series|maclaurin|disk\s+method|washer\s+method)\b/i,
      /\b(?:dtm|gentrification|von\s+thunen|supranationalism|gerrymandering)\b/i
    ]
  },
  'ap-chemistry': {
    subjectId: 'ap-chemistry',
    subjectName: 'AP Chemistry',
    category: 'science',
    mathExpected: true,
    canonicalUnits: [
      { unitNumber: 1, title: 'Atomic Structure & Properties', keywords: ['moles', 'molar mass', 'pes', 'photoelectron spectroscopy', 'electron configuration', 'periodic trends', 'electronegativity', 'ionization energy', 'mass spectrometry'] },
      { unitNumber: 2, title: 'Molecular & Ionic Compound Structure & Properties', keywords: ['chemical bonds', 'ionic', 'covalent', 'lewis structure', 'resonance', 'vsepr', 'molecular geometry', 'bond angle', 'formal charge', 'hybridization'] },
      { unitNumber: 3, title: 'Intermolecular Forces & Properties', keywords: ['intermolecular forces', 'imf', 'hydrogen bonding', 'dipole-dipole', 'london dispersion', 'vapor pressure', 'boiling point', 'solubility', 'beer-lambert law'] },
      { unitNumber: 4, title: 'Chemical Reactions', keywords: ['net ionic equation', 'stoichiometry', 'limiting reactant', 'percent yield', 'precipitation', 'acid-base', 'redox', 'oxidation state', 'titration'] },
      { unitNumber: 5, title: 'Kinetics', keywords: ['reaction rate', 'rate law', 'rate constant k', 'reaction order', 'integrated rate law', 'half-life', 'activation energy', 'arrhenius', 'catalyst', 'reaction mechanism', 'elementary step'] },
      { unitNumber: 6, title: 'Thermodynamics', keywords: ['endothermic', 'exothermic', 'enthalpy', 'delta h', 'heat capacity', 'calorimetry', 'hess\'s law', 'bond enthalpies', 'standard enthalpy of formation'] },
      { unitNumber: 7, title: 'Equilibrium', keywords: ['equilibrium constant', 'k_eq', 'k_c', 'k_p', 'reaction quotient q', 'le chatelier\'s principle', 'solubility product ksp', 'common ion effect'] },
      { unitNumber: 8, title: 'Acids & Bases', keywords: ['ph', 'poh', 'strong acid', 'weak acid', 'ka', 'kb', 'kw', 'neutralization', 'titration curve', 'equivalence point', 'buffer', 'henderson-hasselbalch'] },
      { unitNumber: 9, title: 'Applications of Thermodynamics', keywords: ['entropy', 'delta s', 'gibbs free energy', 'delta g', 'galvanic cell', 'voltaic cell', 'electrolytic cell', 'cell potential', 'faraday\'s constant'] }
    ],
    allowedDomains: ['atomic structure', 'bonding', 'stoichiometry', 'kinetics', 'thermodynamics', 'chemical equilibrium', 'acids and bases', 'electrochemistry'],
    forbiddenSignatures: [
      /\b(?:definite\s+integral|fundamental\s+theorem\s+of\s+calculus|taylor\s+series|disk\s+method|washer\s+method)\b/i,
      /\b(?:dtm|demographic\s+transition|von\s+thunen|gerrymandering|supranationalism)\b/i
    ]
  },
  'ap-biology': {
    subjectId: 'ap-biology',
    subjectName: 'AP Biology',
    category: 'science',
    mathExpected: true,
    canonicalUnits: [
      { unitNumber: 1, title: 'Chemistry of Life', keywords: ['water properties', 'hydrogen bonding', 'macromolecules', 'carbohydrates', 'lipids', 'proteins', 'nucleic acids', 'amino acids', 'peptide bond'] },
      { unitNumber: 2, title: 'Cell Structure & Function', keywords: ['cell organelles', 'endosymbiosis', 'plasma membrane', 'phospholipid bilayer', 'selective permeability', 'osmosis', 'water potential', 'tonicity', 'active transport'] },
      { unitNumber: 3, title: 'Cellular Energetics', keywords: ['enzyme', 'catalysis', 'active site', 'denaturation', 'competitive inhibitor', 'allosteric', 'photosynthesis', 'chloroplast', 'chlorophyll', 'calvin cycle', 'cellular respiration', 'mitochondria', 'glycolysis', 'krebs cycle', 'oxidative phosphorylation', 'atp synthase'] },
      { unitNumber: 4, title: 'Cell Communication & Cell Cycle', keywords: ['signal transduction', 'ligand', 'receptor', 'second messenger', 'camp', 'phosphorylation cascade', 'feedback loops', 'mitosis', 'cyclin', 'cdk', 'apoptosis'] },
      { unitNumber: 5, title: 'Heredity', keywords: ['meiosis', 'crossing over', 'independent assortment', 'mendelian genetics', 'monohybrid', 'dihybrid', 'punnett square', 'chi-square', 'sex-linked', 'pedigree'] },
      { unitNumber: 6, title: 'Gene Expression & Regulation', keywords: ['dna replication', 'helicase', 'dna polymerase', 'transcription', 'mrna', 'translation', 'tRNA', 'ribosome', 'codon', 'operon', 'lac operon', 'mutation', 'gel electrophoresis', 'pcr'] },
      { unitNumber: 7, title: 'Natural Selection', keywords: ['natural selection', 'evolution', 'fitness', 'hardy-weinberg', 'genetic drift', 'founder effect', 'bottleneck', 'speciation', 'allopatric', 'phylogenetic tree', 'cladogram'] },
      { unitNumber: 8, title: 'Ecology', keywords: ['energy flow', 'trophic cascade', 'keystone species', 'symbiosis', 'population ecology', 'carrying capacity', 'exponential growth', 'logistic growth', 'biodiversity'] }
    ],
    allowedDomains: ['cellular biology', 'genetics', 'evolution', 'ecology', 'biochemistry', 'physiology'],
    forbiddenSignatures: [
      /\b(?:definite\s+integral|fundamental\s+theorem\s+of\s+calculus|disk\s+method|washer\s+method)\b/i,
      /\b(?:gerrymandering|dtm|demographic\s+transition|von\s+thunen|supranationalism|berlin\s+conference)\b/i
    ]
  },
  'ap-us-history': {
    subjectId: 'ap-us-history',
    subjectName: 'AP U.S. History (APUSH)',
    category: 'humanities',
    mathExpected: false,
    canonicalUnits: [
      { unitNumber: 1, title: 'Period 1 (1491-1607)', keywords: ['columbian exchange', 'indigenous societies', 'encomienda system', 'spanish colonization', 'pueblo revolt'] },
      { unitNumber: 2, title: 'Period 2 (1607-1754)', keywords: ['cheasapeake', 'jamestown', 'puritans', 'new england', 'middle colonies', 'mercantilism', 'salutary neglect', 'first great awakening', 'triangular trade', 'indentured servitude', 'bacon\'s rebellion'] },
      { unitNumber: 3, title: 'Period 3 (1754-1800)', keywords: ['french and indian war', 'seven years war', 'stamp act', 'boston tea party', 'declaration of independence', 'articles of confederation', 'constitutional convention', 'federalist papers', 'bill of rights', 'washington\'s farewell address'] },
      { unitNumber: 4, title: 'Period 4 (1800-1848)', keywords: ['louisiana purchase', 'marbury v madison', 'war of 1812', 'monroe doctrine', 'market revolution', 'erie canal', 'second great awakening', 'jacksonian democracy', 'nullification crisis', 'trail of tears', 'manifest destiny', 'seneca falls'] },
      { unitNumber: 5, title: 'Period 5 (1844-1877)', keywords: ['mexican-american war', 'compromise of 1850', 'fugitive slave act', 'kansas-nebraska act', 'dred scott', 'lincoln-douglas', 'civil war', 'emancipation proclamation', 'reconstruction', '13th amendment', '14th amendment', '15th amendment'] },
      { unitNumber: 6, title: 'Period 6 (1865-1898)', keywords: ['gilded age', 'transcontinental railroad', 'andrew carnegie', 'john d rockefeller', 'social darwinism', 'labor unions', 'knights of labor', 'american federation of labor', 'populist party', 'dawes act', 'plessy v ferguson'] },
      { unitNumber: 7, title: 'Period 7 (1890-1945)', keywords: ['progressive era', 'muckrakers', 'spanish-american war', 'imperialism', 'world war i', 'fourteen points', 'league of nations', 'roaring twenties', 'great depression', 'new deal', 'fdr', 'world war ii', 'pearl harbor', 'atomic bomb'] },
      { unitNumber: 8, title: 'Period 8 (1945-1980)', keywords: ['cold war', 'containment', 'marshall plan', 'nato', 'korean war', 'cuban missile crisis', 'vietnam war', 'civil rights movement', 'brown v board', 'martin luther king', 'great society', 'watergate'] },
      { unitNumber: 9, title: 'Period 9 (1980-Present)', keywords: ['reagan administration', 'conservative movement', 'end of cold war', 'persian gulf war', 'globalization', 'internet age', 'september 11', 'war on terror'] }
    ],
    allowedDomains: ['us history', 'politics', 'social movements', 'foreign policy', 'constitutional history', 'economics in history'],
    forbiddenSignatures: [
      /\b(?:definite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|dna\s+replication|mitosis|titration)\b/i
    ]
  },
  'ap-psychology': {
    subjectId: 'ap-psychology',
    subjectName: 'AP Psychology',
    category: 'social_science',
    mathExpected: false,
    canonicalUnits: [
      { unitNumber: 1, title: 'Biological Bases of Behavior', keywords: ['neuroscience', 'brain structure', 'hemispheric specialization', 'neurons', 'neurotransmitters', 'action potential', 'synapse', 'endocrine system', 'sleep architecture', 'circadian rhythm', 'genetics'] },
      { unitNumber: 2, title: 'Cognition', keywords: ['memory encoding', 'storage', 'retrieval', 'misinformation effect', 'schemas', 'working memory', 'spacing effect', 'heuristics', 'biases', 'problem solving', 'intelligence', 'language acquisition'] },
      { unitNumber: 3, title: 'Development and Learning', keywords: ['classical conditioning', 'operant conditioning', 'reinforcement', 'punishment', 'stimulus discrimination', 'generalization', 'observational learning', 'Piaget', 'Vygotsky', 'attachment styles', 'moral development'] },
      { unitNumber: 4, title: 'Social Psychology and Personality', keywords: ['bystander effect', 'diffusion of responsibility', 'social facilitation', 'social loafing', 'conformity', 'obedience', 'attribution theory', 'fundamental attribution error', 'in-group bias', 'Big Five personality traits', 'self-efficacy'] },
      { unitNumber: 5, title: 'Mental and Physical Health', keywords: ['psychological disorders', 'DSM-5', 'anxiety disorders', 'depressive disorders', 'schizophrenia', 'bipolar', 'psychotherapy', 'CBT', 'psychopharmacology', 'stress response', 'General Adaptation Syndrome', 'locus of control'] }
    ],
    allowedDomains: ['psychology', 'cognitive science', 'neuroscience', 'developmental psychology', 'social psychology', 'clinical psychology', 'research methodology', 'article analysis', 'evidence-based argumentation'],
    forbiddenSignatures: [
      /\b(?:definite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|titration|chloroplast|mitosis|rotational\s+inertia|stoichiometry|balance\s+of\s+payments|aggregate\s+demand)\b/i
    ]
  },
  'ap-statistics': {
    subjectId: 'ap-statistics',
    subjectName: 'AP Statistics',
    category: 'stem_math',
    mathExpected: true,
    canonicalUnits: [
      { unitNumber: 1, title: 'Exploring One-Variable Data and Collecting Data', keywords: ['mean', 'median', 'mode', 'standard deviation', 'iqr', 'outlier', 'box plot', 'histogram', 'z-score', 'normal distribution', 'simple random sample', 'srs', 'stratified sample', 'cluster sample', 'systematic sample', 'bias', 'confounding', 'placebo', 'double blind', 'blocking', 'observational study', 'experiment'] },
      { unitNumber: 2, title: 'Probability, Random Variables, and Probability Distributions', keywords: ['mutually exclusive', 'independent events', 'conditional probability', 'bayes theorem', 'binomial distribution', 'geometric distribution', 'expected value', 'variance', 'linear transformations', 'sampling distribution', 'central limit theorem', 'clt', 'standard error'] },
      { unitNumber: 3, title: 'Inference for Categorical Data: Proportions', keywords: ['confidence interval for p', 'one-sample z-test for proportion', 'two-sample z-test for proportions', 'p-value', 'type i error', 'type ii error', 'power', 'chi-square goodness of fit', 'chi-square test of independence', 'chi-square test of homogeneity', 'expected counts', 'margin of error'] },
      { unitNumber: 4, title: 'Inference for Quantitative Data: Means', keywords: ['t-distribution', 'degrees of freedom', 'one-sample t-test for mean', 'two-sample t-test for means', 'paired t-test', 'matched pairs', 't-interval', 'standard error of mean'] },
      { unitNumber: 5, title: 'Regression Analysis', keywords: ['scatter plot', 'correlation r', 'coefficient of determination r-squared', 'residual', 'least-squares regression line', 'influential point', 'extrapolation', 't-test for slope', 'confidence interval for slope', 'standard error of slope', 'residual plot'] }
    ],
    allowedDomains: ['descriptive statistics', 'probability', 'sampling', 'hypothesis testing', 'confidence intervals', 'regression inference'],
    forbiddenSignatures: [
      /\b(?:definite\s+integral|indefinite\s+integral|fundamental\s+theorem\s+of\s+calculus|derivative|dy\/dx|disk\s+method|washer\s+method|taylor\s+series)\b/i,
      /\b(?:dtm|demographic\s+transition|von\s+thunen|gerrymandering|chloroplast)\b/i
    ]
  },
  'ap-us-government': {
    subjectId: 'ap-us-government',
    subjectName: 'AP U.S. Government & Politics',
    category: 'social_science',
    mathExpected: false,
    canonicalUnits: [
      { unitNumber: 1, title: 'Foundations of American Democracy', keywords: ['federalist 10', 'brutus 1', 'declaration of independence', 'articles of confederation', 'constitution', 'bill of rights', 'federalism', 'separation of powers', 'checks and balances', 'mcculloch v maryland', 'us v lopez'] },
      { unitNumber: 2, title: 'Interactions Among Branches of Government', keywords: ['congress', 'house', 'senate', 'filibuster', 'cloture', 'gerrymandering', 'presidency', 'executive order', 'veto', 'pocket veto', 'federalist 70', 'bureaucracy', 'iron triangle', 'supreme court', 'judicial review', 'marbury v madison', 'federalist 78', 'stare decisis'] },
      { unitNumber: 3, title: 'Civil Liberties & Civil Rights', keywords: ['first amendment', 'establishment clause', 'free exercise clause', 'schenck v us', 'tinker v des moines', 'new york times v us', 'second amendment', 'fourth amendment', 'exclusionary rule', 'miranda', 'fourteenth amendment', 'due process', 'equal protection', 'selective incorporation', 'brown v board', 'letter from birmingham jail'] },
      { unitNumber: 4, title: 'American Political Ideologies & Beliefs', keywords: ['political socialization', 'liberalism', 'conservatism', 'libertarianism', 'public opinion polling', 'scientific polling', 'sampling error', 'fiscal policy', 'monetary policy', 'federal reserve'] },
      { unitNumber: 5, title: 'Political Participation', keywords: ['voting rights', '15th amendment', '19th amendment', '24th amendment', '26th amendment', 'voter turnout', 'political parties', 'critical elections', 'realignment', 'interest groups', 'citizens united v fec', 'pacs', 'super pacs', 'electoral college', 'media bias', 'horse-race journalism'] }
    ],
    allowedDomains: ['american politics', 'constitution', 'scotus cases', 'foundational documents', 'civil rights', 'elections', 'institutions of government'],
    forbiddenSignatures: [
      /\b(?:definite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|titration|chloroplast|mitosis)\b/i
    ]
  },
  'ap-english-lang': {
    subjectId: 'ap-english-lang',
    subjectName: 'AP English Language & Composition',
    category: 'humanities',
    mathExpected: false,
    canonicalUnits: [
      { unitNumber: 1, title: 'Rhetorical Situation: Reading & Writing', keywords: ['rhetorical situation', 'exigence', 'speaker', 'audience', 'purpose', 'context', 'message', 'claims', 'evidence'] },
      { unitNumber: 2, title: 'Rhetorical Situation: Appeals & Evidence', keywords: ['ethos', 'pathos', 'logos', 'thesis', 'defensible position', 'anecdote', 'analogy', 'facts', 'statistics'] },
      { unitNumber: 3, title: 'Reasoning & Organization', keywords: ['line of reasoning', 'inductive reasoning', 'deductive reasoning', 'organization', 'transitions', 'stasis theory', 'toulmin model'] },
      { unitNumber: 4, title: 'Selecting & Integrating Evidence', keywords: ['synthesis', 'embedded quotation', 'signal phrase', 'paraphrase', 'source integration', 'counterargument', 'rebuttal'] },
      { unitNumber: 5, title: 'Developing a Line of Reasoning', keywords: ['commentary', 'claim and evidence', 'cause and effect', 'comparison and contrast', 'definition and classification'] },
      { unitNumber: 6, title: 'Rhetorical Analysis: Style & Choice', keywords: ['rhetorical choices', 'diction', 'syntax', 'tone', 'tone shift', 'juxtaposition', 'parallelism', 'antithesis', 'allusion'] },
      { unitNumber: 7, title: 'Complex Arguments & Qualifications', keywords: ['qualification', 'concession', 'complexity', 'tension', 'implications', 'limitations', 'nuance'] },
      { unitNumber: 8, title: 'Style & Persuasive Voice', keywords: ['metaphor', 'personification', 'hyperbole', 'understatement', 'irony', 'vivid prose', 'rhetorical question'] },
      { unitNumber: 9, title: 'Sophistication & Holistic Synthesis', keywords: ['sophistication', 'broader context', 'alternative perspectives', 'stylistic maturity', 'holistic argument'] }
    ],
    allowedDomains: ['rhetoric', 'composition', 'nonfiction analysis', 'argumentation', 'synthesis', 'critical reading', 'persuasive writing'],
    forbiddenSignatures: [
      /\b(?:definite\s+integral|indefinite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|titration|chloroplast|mitosis|rotational\s+inertia|stoichiometry)\b/i
    ]
  },
  'ap-microeconomics': {
    subjectId: 'ap-microeconomics',
    subjectName: 'AP Microeconomics',
    category: 'social_science',
    mathExpected: true,
    canonicalUnits: [
      { unitNumber: 1, title: 'Basic Economic Concepts', keywords: ['scarcity', 'opportunity cost', 'production possibilities curve', 'ppc', 'ppf', 'comparative advantage', 'absolute advantage', 'terms of trade', 'marginal analysis', 'cost-benefit analysis'] },
      { unitNumber: 2, title: 'Supply and Demand', keywords: ['law of demand', 'law of supply', 'market equilibrium', 'consumer surplus', 'producer surplus', 'deadweight loss', 'price elasticity of demand', 'ped', 'cross-price elasticity', 'income elasticity', 'price elasticity of supply', 'price ceiling', 'price floor', 'excise tax', 'tax incidence', 'tariff', 'quota'] },
      { unitNumber: 3, title: 'Production, Cost & Perfect Competition', keywords: ['diminishing marginal returns', 'fixed cost', 'variable cost', 'marginal cost', 'atc', 'avc', 'afc', 'economies of scale', 'diseconomies of scale', 'perfect competition', 'price taker', 'mr=mc', 'shutdown rule', 'p < avc', 'break-even', 'allocative efficiency', 'productive efficiency', 'constant-cost industry'] },
      { unitNumber: 4, title: 'Imperfect Competition', keywords: ['monopoly', 'price maker', 'mr < p', 'single-price monopoly', 'price discrimination', 'natural monopoly', 'fair-return price', 'socially optimal price', 'monopolistic competition', 'excess capacity', 'oligopoly', 'game theory', 'payoff matrix', 'dominant strategy', 'nash equilibrium', 'collusion', 'cartel'] },
      { unitNumber: 5, title: 'Factor Markets', keywords: ['derived demand', 'marginal revenue product', 'mrp', 'mrpl', 'marginal factor cost', 'mfc', 'mfcl', 'profit-maximizing hiring', 'mrp = mfc', 'monopsony', 'least-cost rule', 'marginal product of labor'] },
      { unitNumber: 6, title: 'Market Failure & the Role of Government', keywords: ['externality', 'negative externality', 'positive externality', 'marginal social cost', 'msc', 'marginal social benefit', 'msb', 'pigouvian tax', 'pigouvian subsidy', 'public good', 'non-rival', 'non-excludable', 'free-rider problem', 'common resource', 'lorenz curve', 'gini coefficient'] }
    ],
    allowedDomains: ['microeconomics', 'market theory', 'consumer choice', 'firm behavior', 'elasticity', 'market structures', 'factor markets', 'externalities', 'market failure'],
    forbiddenSignatures: [
      // Macroeconomics concepts forbidden in Microeconomics
      /\b(?:gross\s+domestic\s+product|\bGDP\b|real\s+GDP|nominal\s+GDP|GDP\s+deflator|consumer\s+price\s+index|\bCPI\b|inflation\s+rate|hyperinflation|unemployment\s+rate|natural\s+rate\s+of\s+unemployment|\bNRU\b|\bNAIRU\b|structural\s+unemployment|cyclical\s+unemployment|frictional\s+unemployment)\b/i,
      /\b(?:aggregate\s+demand|\bAD\b-AS|\bSRAS\b|\bLRAS\b|macroeconomic\s+equilibrium|recessionary\s+gap|inflationary\s+gap|fiscal\s+policy|discretionary\s+spending|spending\s+multiplier|tax\s+multiplier|balanced\s+budget\s+multiplier)\b/i,
      /\b(?:federal\s+reserve|\bcentral\s+bank\b|monetary\s+policy|open\s+market\s+operations|reserve\s+requirement|discount\s+rate|federal\s+funds\s+rate|money\s+market\b|money\s+supply\b|\bM1\b|\bM2\b|fractional\s+reserve|money\s+multiplier|loanable\s+funds|crowding\s+out)\b/i,
      /\b(?:phillips\s+curve|\bSRPC\b|\bLRPC\b|stagflation|balance\s+of\s+payments|current\s+account\b|financial\s+account\b|capital\s+account\b|foreign\s+exchange|\bFOREX\b|currency\s+appreciation|currency\s+depreciation|exchange\s+rate)\b/i,
      // Calculus and Advanced Science
      /\b(?:definite\s+integral|indefinite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|titration|chloroplast|mitosis|rotational\s+inertia|stoichiometry)\b/i
    ]
  },
  'ap-macroeconomics': {
    subjectId: 'ap-macroeconomics',
    subjectName: 'AP Macroeconomics',
    category: 'social_science',
    mathExpected: true,
    canonicalUnits: [
      { unitNumber: 1, title: 'Basic Economic Concepts', keywords: ['scarcity', 'opportunity cost', 'production possibilities curve', 'ppc', 'comparative advantage', 'terms of trade', 'specialization'] },
      { unitNumber: 2, title: 'Economic Indicators & the Business Cycle', keywords: ['circular flow', 'gross domestic product', 'gdp', 'nominal gdp', 'real gdp', 'gdp deflator', 'unemployment rate', 'civilian labor force', 'labor force participation', 'frictional unemployment', 'structural unemployment', 'cyclical unemployment', 'natural rate of unemployment', 'cpi', 'inflation rate', 'real interest rate', 'business cycle'] },
      { unitNumber: 3, title: 'National Income & Price Determination', keywords: ['aggregate demand', 'ad', 'short-run aggregate supply', 'sras', 'long-run aggregate supply', 'lras', 'full employment', 'recessionary gap', 'inflationary gap', 'stagflation', 'mpc', 'mps', 'spending multiplier', 'tax multiplier', 'fiscal policy', 'automatic stabilizers'] },
      { unitNumber: 4, title: 'Financial Sector', keywords: ['financial assets', 'money definitions', 'm1', 'm2', 'commercial bank balance sheet', 'required reserves', 'excess reserves', 'money multiplier', 'money market', 'money demand', 'money supply', 'nominal interest rate', 'central bank', 'federal reserve', 'monetary policy', 'open market operations', 'administered rates', 'iorb', 'discount rate', 'loanable funds', 'real interest rate'] },
      { unitNumber: 5, title: 'Long-Run Consequences of Stabilization Policies', keywords: ['crowding out', 'phillips curve', 'srpc', 'lrpc', 'expected inflation', 'quantity theory of money', 'mv=py', 'national debt', 'budget deficit', 'economic growth', 'human capital', 'physical capital', 'technology'] },
      { unitNumber: 6, title: 'Open Economy—International Trade and Finance', keywords: ['balance of payments', 'current account', 'financial account', 'capital account', 'foreign exchange', 'forex', 'exchange rate', 'currency appreciation', 'currency depreciation', 'capital flows', 'net exports'] }
    ],
    allowedDomains: ['macroeconomics', 'fiscal policy', 'monetary policy', 'national income', 'banking', 'inflation', 'gdp', 'economic indicators', 'forex', 'open economy', 'business cycle'],
    forbiddenSignatures: [
      // Microeconomics firm theory forbidden in Macroeconomics
      /\b(?:marginal\s+cost\s+curve|\bATC\b\s+curve|\bAVC\b\s+curve|\bAFC\b\s+curve|perfect\s+competition\s+firm|profit\s+maximization\s+rule\s+MR\s*=\s*MC|shut-down\s+rule\s+P\s*<\s*AVC|single-price\s+monopoly|price\s+discriminat(?:ion|ing)\s+monopoly|monopolistic\s+competition\s+excess\s+capacity|oligopoly\s+game\s+theory|payoff\s+matrix|nash\s+equilibrium|dominant\s+strategy|kinked\s+demand)\b/i,
      /\b(?:factor\s+market|marginal\s+revenue\s+product|\bMRP\b|\bMRPL\b|marginal\s+factor\s+cost|\bMFC\b|\bMFCL\b|monopsony\s+labor|least-cost\s+rule\s+MPL\/w)\b/i,
      /\b(?:cross-price\s+elasticity|income\s+elasticity\s+of\s+demand|pigouvian\s+tax|pigouvian\s+subsidy|lorenz\s+curve|gini\s+coefficient|consumer\s+choice\s+utility\s+maximization|marginal\s+utility\s+per\s+dollar|indifference\s+curve)\b/i,
      // Calculus and Advanced Science
      /\b(?:definite\s+integral|indefinite\s+integral|derivative|calculus|riemann|f\s*=\s*ma|titration|chloroplast|mitosis|rotational\s+inertia|stoichiometry)\b/i
    ]
  }
};

/**
 * Returns the whitelist for a subject, with robust fallback matching.
 */
export function getSubjectWhitelist(subjectIdentifier?: string): APSubjectWhitelist | null {
  if (!subjectIdentifier) return null;
  const s = subjectIdentifier.toLowerCase().trim();

  // 1. Direct ID match
  if (AP_SUBJECT_WHITELISTS[s]) return AP_SUBJECT_WHITELISTS[s];

  // Specific high-priority matches
  if (s.includes('micro')) return AP_SUBJECT_WHITELISTS['ap-microeconomics'];
  if (s.includes('macro')) return AP_SUBJECT_WHITELISTS['ap-macroeconomics'];

  // 2. Fuzzy name match
  for (const [key, wl] of Object.entries(AP_SUBJECT_WHITELISTS)) {
    if (s.includes(key.replace('ap-', '')) || s.includes(wl.subjectName.toLowerCase().replace('ap ', ''))) {
      return wl;
    }
  }

  if (s.includes('english') || s.includes('lang')) return AP_SUBJECT_WHITELISTS['ap-english-lang'];
  if (s.includes('geography') || s.includes('aphg')) return AP_SUBJECT_WHITELISTS['ap-human-geography'];
  if (s.includes('environmental') || s.includes('apes')) return AP_SUBJECT_WHITELISTS['ap-environmental-science'];
  if (s.includes('principles') || s.includes('csp')) return AP_SUBJECT_WHITELISTS['ap-computer-science-principles'];
  if ((s.includes('computer') && (s.includes('science a') || s.includes('csa') || !s.includes('principles'))) || s === 'csa') return AP_SUBJECT_WHITELISTS['ap-computer-science'];
  if (s.includes('calculus bc')) return AP_SUBJECT_WHITELISTS['ap-calculus-bc'];
  if (s.includes('calculus')) return AP_SUBJECT_WHITELISTS['ap-calculus-ab'];
  if (s.includes('physics')) return AP_SUBJECT_WHITELISTS['ap-physics-1'];
  if (s.includes('chemistry')) return AP_SUBJECT_WHITELISTS['ap-chemistry'];
  if (s.includes('biology')) return AP_SUBJECT_WHITELISTS['ap-biology'];
  if (s.includes('history') || s.includes('apush')) return AP_SUBJECT_WHITELISTS['ap-us-history'];
  if (s.includes('psych')) return AP_SUBJECT_WHITELISTS['ap-psychology'];
  if (s.includes('stat')) return AP_SUBJECT_WHITELISTS['ap-statistics'];
  if (s.includes('gov') || s.includes('politics')) return AP_SUBJECT_WHITELISTS['ap-us-government'];

  return null;
}

