/**
 * Comprehensive College Board AP Exam Archetypes & Dynamic Permutation Engine
 * Covers all AP Subjects with unit-specific pedagogical targets to eliminate question repetition.
 */

export interface ArchetypeBundle {
  general: string[];
  units: Record<string, string[]>;
}

export const AP_SUBJECT_ARCHETYPES: Record<string, ArchetypeBundle> = {
  biology: {
    general: [
      "Experimental design: Independent vs dependent variables, positive/negative controls, and sample size validity",
      "Quantitative data analysis: Mean, standard deviation, and graphing with standard error of the mean (±2 SEM) bars",
      "Statistical hypothesis testing: Chi-Square goodness-of-fit test comparing observed vs expected phenotypes",
      "Biological disruption: Predicting physiological consequences of chemical inhibitors, uncouplers, or targeted mutations",
      "Structure-function relationship: How molecular conformation determines transport, catalysis, or ligand binding",
      "Evolutionary conservation: Shared metabolic pathways, ribosomal machinery, and genetic code across domains"
    ],
    units: {
      "1": [
        "Transpiration stream and cohesion-tension theory in xylem driven by water hydrogen bonding",
        "Thermal buffering: High specific heat capacity of water stabilizing marine and cellular environments",
        "Dehydration condensation synthesis vs hydrolysis of peptide bonds forming primary polypeptide chains",
        "Nucleic acid 5'-to-3' directional polarity and antiparallel complementary base pairing rules",
        "Protein folding hierarchy: Tertiary conformation stabilization via hydrophobic interactions and disulfide bridges",
        "Protein thermal and pH denaturation: Disruption of secondary alpha-helices/beta-sheets and loss of active site fit",
        "Phospholipid bilayer fluidity: Fatty acid chain saturation and cholesterol modulation in poikilothermic organisms",
        "Structural vs storage carbohydrates: Alpha-1,4/1,6 glycosidic bonds in starch/glycogen vs beta-1,4 bonds in cellulose",
        "Limiting nutrient stoichiometry: Nitrogen and phosphorus availability restricting plant primary productivity"
      ],
      "2": [
        "Surface area-to-volume ratio (SA:V): Metabolic exchange efficiency in spherical vs flattened/microvilli cell geometries",
        "Endosymbiotic theory: Double membranes, autonomous circular chromosomes, and 70S ribosomes in chloroplasts and mitochondria",
        "Organellar compartmentalization: Lysosomal acid hydrolases operating at pH 4.5-5.0 isolated from neutral cytosol",
        "Plasma membrane selective permeability: Passive diffusion of small nonpolar gases (O2, CO2) vs facilitated diffusion via GLUT/aquaporins",
        "Water potential equation (Psi = Psi_s + Psi_p): Solute potential calculation (Psi_s = -iCRT) and turgor pressure equilibrium in plant roots",
        "Tonicity impacts on animal vs plant cells: Erythrocyte hemolysis vs crenation, and plant turgid vs flaccid/plasmolyzed states",
        "Electrochemical gradient maintenance: Primary active transport via Na+/K+ ATPase and secondary sodium-glucose symport",
        "Vesicular protein sorting pathway: Rough ER signal peptide recognition, Golgi cis-to-trans cisternal maturation, and exocytosis"
      ],
      "3": [
        "Enzyme kinetics: Substrate saturation curves comparing Vmax and Km in the presence of competitive vs noncompetitive inhibitors",
        "Allosteric enzyme regulation: Phosphofructokinase inhibition by high cellular ATP/citrate and activation by AMP/ADP",
        "Comparative enzymatic pH/temperature profiles: Pepsin (gastric pH 2) vs salivary amylase (pH 7) vs pancreatic trypsin (pH 8)",
        "Light-dependent reactions: Photolysis of water at Photosystem II (P680), cytochrome b6f proton pumping, and photophosphorylation",
        "Non-cyclic vs cyclic electron flow: ATP generation without NADPH production to balance chloroplast metabolic demands",
        "Calvin-Benson cycle: RuBisCO carbon fixation, 3-PGA reduction to G3P consuming ATP and NADPH, and RuBP regeneration",
        "C3 vs C4 vs CAM photosynthetic adaptations: Spatial bundle-sheath isolation vs nocturnal temporal CO2 capture minimizing photorespiration",
        "Glycolysis and substrate-level phosphorylation: Hexokinase activation and net ATP/NADH yield under aerobic vs hypoxic conditions",
        "Citric acid cycle (Krebs): Decarboxylation of pyruvate to Acetyl-CoA, succinate dehydrogenase oxidation, and CO2 release",
        "Oxidative phosphorylation disruption: DNP chemical uncouplers dissipating inner mitochondrial proton gradient as metabolic heat",
        "Anaerobic fermentation: Lactic acid fermentation in mammalian myocytes vs ethanol fermentation in yeast restoring NAD+ pools",
        "Thermoregulation & metabolic rate: Uncoupling protein 1 (UCP1 / thermogenin) in brown adipose tissue of hibernating mammals"
      ],
      "4": [
        "G-Protein Coupled Receptor (GPCR) cascade: Epinephrine binding, G-alpha GTP exchange, adenylyl cyclase activation, and cAMP generation",
        "Receptor Tyrosine Kinase (RTK) dimerization: Growth factor binding, autophosphorylation, and downstream Ras-Raf-MEK-ERK signaling",
        "Intracellular steroid hormone signaling: Hydrophobic ligand (estrogen/cortisol) crossing membrane to act as nuclear transcription factors",
        "Second messenger amplification: Phospholipase C cleaving PIP2 into IP3 and DAG, opening ER calcium channels in muscle contraction",
        "Homeostatic negative feedback: Blood glucose counter-regulation via pancreatic beta-cell insulin and alpha-cell glucagon",
        "Positive feedback amplification loops: Oxytocin release accelerating uterine contractions during human parturition",
        "Cell cycle checkpoint regulation: G1/S restriction point control by p53 tumor suppressor and Retinoblastoma (Rb) phosphorylation",
        "Cyclin and CDK complexes: Maturation-Promoting Factor (MPF) activity governing G2/M phase entry and subsequent cyclin destruction",
        "Apoptosis programmed cell death: Intrinsic mitochondrial cytochrome c leakage activating executioner caspase proteases"
      ],
      "5": [
        "Meiotic generation of genetic diversity: Crossing over at chiasmata in Prophase I and independent assortment in Metaphase I",
        "Mendelian monohybrid/dihybrid testcrosses: Expected phenotypic ratios (3:1, 9:3:3:1) and Chi-Square statistical validation",
        "Sex-linked recessive inheritance: Hemophilia or red-green colorblindness transmission across 3 generations of human pedigrees",
        "Gene linkage & recombination mapping: Calculating recombinant frequencies and mapping distance in centimorgans / map units",
        "Non-Mendelian codominance & multiple alleles: ABO blood group glycoprotein inheritance and universal donor/recipient logic",
        "Incomplete dominance: Intermediate heterozygous phenotypes (e.g. pink floral coloration in snapdragons) vs parental homozygotes",
        "Maternal non-nuclear inheritance: Mitochondrial DNA and chloroplast DNA transmission strictly through the ovum",
        "Phenotypic plasticity: Environmental temperature regulating reptile sex determination or soil pH altering hydrangea pigmentation"
      ],
      "6": [
        "DNA replication fork mechanics: Helicase, topoisomerase, single-stranded binding proteins, and Okazaki fragment ligation on lagging strand",
        "End-replication telomere shortening: Telomerase reverse transcriptase activity in human embryonic stem cells vs somatic senescence",
        "Transcription initiation and elongation: Promoter TATA box recognition, RNA Polymerase II, and transcription factor assembly",
        "Eukaryotic pre-mRNA processing: 5' 7-methylguanosine cap, 3' poly-A tail, and spliceosomal alternative exon splicing",
        "Translation fidelity: Aminoacyl-tRNA synthetase specificity, ribosomal A/P/E site codon-anticodon recognition, and release factors",
        "Prokaryotic operon gene regulation: Inducible lac operon (repressor inactivation by allolactose) vs repressible trp operon",
        "Epigenetic chromatin modification: Histone acetylation promoting transcription vs DNA cytosine methylation causing gene silencing",
        "Mutational impacts on protein function: Silent vs missense vs nonsense mutations, and frameshift indels altering downstream reading frames",
        "Biotechnology applications: Restriction enzyme RFLP mapping, PCR amplification cycles, and agarose gel electrophoresis band migration"
      ],
      "7": [
        "Mechanisms of natural selection: Heritable variation, differential reproductive fitness, and fluctuating selective pressures",
        "Hardy-Weinberg equilibrium calculations: Determining allele frequencies (p, q) and genotype frequencies (p^2, 2pq, q^2) in populations",
        "Modes of phenotypic selection: Directional selection vs stabilizing selection vs disruptive/diversifying selection curves",
        "Genetic drift: Population bottlenecks in cheetahs and founder effects in isolated insular populations reducing heterozygosity",
        "Speciation barriers: Allopatric geographic isolation vs sympatric polyploidy; prezygotic vs postzygotic reproductive isolation",
        "Phylogenetic tree interpretation: Synapomorphies, shared ancestral traits, parsimony analysis, and outgroup character polarity",
        "Molecular clocks: Amino acid substitution rates in cytochrome c or hemoglobin measuring divergent evolutionary time",
        "Adaptive radiation: Rapid ecological niche diversification following mass extinction events recorded in the fossil record"
      ],
      "8": [
        "Trophic cascades and keystone species: Top predator removal (e.g. sea otters or wolves) triggering trophic collapse and biodiversity loss",
        "Energy flow and thermodynamic 10% rule: Net primary productivity (NPP = GPP - R) and biomass loss across trophic levels",
        "Population growth dynamics: Exponential growth (dN/dt = rN) vs logistic carrying capacity model (dN/dt = rN((K-N)/K))",
        "Community interactions: Gause competitive exclusion principle, resource partitioning, mutualism, and parasite-host coevolution",
        "Ecological succession: Primary pioneer lichen colonization on volcanic lava vs secondary succession following forest wildfires",
        "Biogeochemical nutrient cycling: Rhizobium nitrogen fixation, nitrification, and agricultural phosphorus runoff causing eutrophication",
        "Island biogeography theory: MacArthur-Wilson equilibrium model predicting species richness from island area and mainland distance",
        "Anthropogenic environmental disruptions: Acid precipitation, chlorofluorocarbon ozone depletion, and invasive species proliferation"
      ]
    }
  },

  calculus_ab: {
    general: [
      "Limits and Continuity: Analytical, graphical, and tabular limits, squeeze theorem, and IVT",
      "Derivatives: Chain rule, implicit differentiation, and related rates of change",
      "Applications of Derivatives: Mean Value Theorem, First/Second Derivative Tests, concavity, and optimization",
      "Integrals and Accumulation: Fundamental Theorem of Calculus, u-substitution, Riemann sums, and net change",
      "Differential Equations: Slope fields, exponential modeling, and separation of variables",
      "Applications of Integration: Area between curves, volume of solids of revolution, and known cross-sections"
    ],
    units: {
      "1": [
        "Trigonometric Squeeze / Sandwich Theorem limits involving bounding functions (e.g. g(x) <= f(x) <= h(x))",
        "Piecewise function continuity with two unknown constants A and B requiring a system of linear equations",
        "Radical conjugate algebraic rationalization limits as x approaches a finite value (e.g. (sqrt(ax+b) - c)/(x-d))",
        "Horizontal and vertical asymptotes of rational/radical expressions evaluating one-sided limits and limits at infinity",
        "Absolute value quotient expressions of the form |ax - b| / (cx - d) and one-sided limit discrepancy",
        "Intermediate Value Theorem (IVT) applied to continuous functions on closed intervals proving root existence",
        "Graphical discontinuity classification: Removable hole vs jump discontinuity vs infinite vertical asymptote",
        "Tabular estimation of one-sided limits and difference quotients from discrete data points"
      ],
      "2": [
        "Limit definition of the derivative: Expressing f'(a) as limit as h->0 of (f(a+h) - f(a))/h or as x->a of (f(x) - f(a))/(x-a)",
        "Differentiability implying continuity: Analyzing functions with corners, cusps, vertical tangents, or jump discontinuities",
        "Power, product, and quotient rule differentiation with trigonometric, exponential, or logarithmic functions",
        "Horizontal and vertical tangent lines: Finding points where f'(x) = 0 or f'(x) is undefined",
        "Instantaneous rate of change in physical contexts: Position, velocity, and estimating instantaneous rates from tabular data"
      ],
      "3": [
        "Chain rule composition: Differentiating f(g(h(x))) with tabular data for functions and their derivatives",
        "Implicit differentiation: Finding dy/dx and d^2y/dx^2 for non-function algebraic curves (e.g. ellipses, folium of Descartes)",
        "Derivative of inverse functions: Applying (f^-1)'(a) = 1 / f'(f^-1(a)) using given function coordinates",
        "Derivatives of inverse trigonometric functions: arcsin, arccos, and arctan with chain rule compositions"
      ],
      "4": [
        "Related rates: Geometric systems (expanding spheres, conical water tanks, receding shadows, sliding ladders)",
        "Related rates: Pythagorean distance and angle of elevation rates of change using trigonometric relations",
        "Local linear approximation and tangent line equations: Estimating function values and determining under/overestimates via f''(x)",
        "L'Hopital's Rule: Evaluating indeterminate limits of forms 0/0 and infinity/infinity with rigorous precondition checks"
      ],
      "5": [
        "Mean Value Theorem (MVT) and Rolle's Theorem: Verifying continuity and differentiability hypotheses to find c in (a, b)",
        "First Derivative Test for relative extrema: Analyzing sign changes of f'(x) from critical points",
        "Second Derivative Test and concavity: Finding inflection points and testing f''(c) at critical values",
        "Extreme Value Theorem (EVT): Finding absolute global maximum and minimum on closed intervals checking critical points and endpoints",
        "Graph analysis of f'(x): Connecting the features of derivative graph f' to intervals of increase/decrease and concavity of f(x)",
        "Applied optimization: Minimizing packaging surface area, maximizing inscribed rectangular area, or economic profit functions"
      ],
      "6": [
        "Riemann sums: Left, Right, Midpoint, and Trapezoidal approximations from irregularly spaced tabular data",
        "Definite integral as accumulated net change: Interpreting units and physical meaning in rate scenarios",
        "Fundamental Theorem of Calculus (FTC Part 1): Differentiating accumulation functions d/dx integral from a to g(x) of f(t) dt",
        "Fundamental Theorem of Calculus (FTC Part 2): Evaluating definite integrals via antiderivatives",
        "U-substitution integration: Definite integrals requiring conversion of upper and lower integration limits",
        "1D Particle motion: Position s(t), velocity v(t), acceleration a(t), speed increasing/decreasing, and total distance integral of |v(t)| dt"
      ],
      "7": [
        "Slope fields: Sketching solution segments at indicated grid points and matching differential equations to slope patterns",
        "Separation of variables: Solving first-order differential equations dy/dx = f(x)g(y) with initial condition y(x0) = y0",
        "Domain of particular solution: Explicitly determining the valid domain interval containing initial point x0",
        "Exponential growth and decay differential equations: dy/dt = ky modeling radioactive decay or Newton's law of cooling"
      ],
      "8": [
        "Area between intersecting curves: Integrating with respect to x or y to find enclosed planar region area",
        "Volume of solids of revolution: Disk and washer methods rotated around coordinate axes or horizontal/vertical lines y=k, x=k",
        "Volume of solids with known cross sections: Perpendicular cross sections of squares, semicircles, equilateral triangles, or rectangles",
        "Average value of a continuous function on a closed interval: f_avg = (1/(b-a)) * integral from a to b of f(x) dx"
      ]
    }
  },

  calculus_bc: {
    general: [
      "All Calculus AB Topics (Units 1-8): Limits, derivatives, integration, differential equations, and area/volume",
      "Parametric, Vector, and Polar functions: 2D motion, arc length, and polar area",
      "Advanced Integration Techniques: Integration by parts, partial fractions, and improper integrals",
      "Numerical Methods & Logistic Models: Euler's method and logistic differential equations",
      "Infinite Sequences and Series: Convergence tests, power series, Taylor/Maclaurin series, and error bounds"
    ],
    units: {
      "1": [
        "Trigonometric Squeeze / Sandwich Theorem limits involving bounding functions (e.g. g(x) <= f(x) <= h(x))",
        "Piecewise function continuity with two unknown constants A and B requiring a system of linear equations",
        "Intermediate Value Theorem (IVT) applied to continuous functions on closed intervals proving root existence"
      ],
      "2": [
        "Limit definition of the derivative and differentiability implying continuity",
        "Product, quotient, and chain rule with exponential, trigonometric, and inverse trigonometric functions"
      ],
      "3": [
        "Implicit differentiation dy/dx and second derivative d^2y/dx^2 for higher-order curves",
        "Derivatives of inverse functions and composite inverse trigonometric relationships"
      ],
      "4": [
        "Related rates in geometric, physical, and trigonometric configurations",
        "L'Hopital's Rule for advanced indeterminate forms (0/0, inf/inf) with rigorous justifications"
      ],
      "5": [
        "Mean Value Theorem, First and Second Derivative Tests, concavity, and closed interval EVT",
        "Graph analysis of f'(x) and advanced optimization modeling"
      ],
      "6": [
        "BC Topic: Integration by parts: integral u dv = uv - integral v du using tabular integration or cyclic recursion",
        "BC Topic: Partial fraction decomposition for rational expressions with distinct and repeated linear factors",
        "BC Topic: Improper integrals with infinite integration limits or interior vertical asymptotes",
        "Riemann sums (Left, Right, Midpoint, Trapezoidal) and Fundamental Theorem of Calculus Part 1 and 2"
      ],
      "7": [
        "BC Topic: Euler's method: Step-by-step numerical approximation of differential equation solutions with delta x step sizes",
        "BC Topic: Logistic differential equation dP/dt = kP(1 - P/M): Carrying capacity M, maximum growth rate at M/2, and inflection point",
        "Separation of variables with initial conditions and slope field analysis"
      ],
      "8": [
        "Area between curves, and volume of solids of revolution (disk/washer methods) and known cross-sections",
        "BC Topic: Arc length of planar curves y = f(x): integral from a to b of sqrt(1 + (f'(x))^2) dx"
      ],
      "9": [
        "Parametric motion in 2D: Velocity vector (x'(t), y'(t)), acceleration vector (x''(t), y''(t)), and speed sqrt((x')^2 + (y')^2)",
        "Parametric total distance traveled: Arc length integral from t1 to t2 of sqrt((x'(t))^2 + (y'(t))^2) dt",
        "Polar coordinates and curves: Converting coordinates, finding dy/dx = (dr/dtheta sin + r cos)/(dr/dtheta cos - r sin)",
        "Polar area: Computing area bounded by one or two polar curves using integral (1/2) r(theta)^2 dtheta"
      ],
      "10": [
        "Infinite series convergence tests: Geometric, p-series, Integral test, Comparison tests, Limit Comparison test, Alternating Series Test",
        "Ratio Test: Determining radius and interval of convergence for power series, explicitly testing both interval endpoints",
        "Alternating Series Error Bound: Estimating error |S - S_N| <= a_{N+1} for alternating convergent series",
        "Taylor and Maclaurin polynomials: Constructing nth-degree polynomials for e^x, sin(x), cos(x), 1/(1-x) centered at x=c",
        "Taylor series operations: Substitution, term-by-term differentiation, and term-by-term integration to derive new series",
        "Lagrange Error Bound (Taylor's Remainder Theorem): Bound on |f(x) - P_n(x)| <= (M / (n+1)!) * |x - c|^(n+1)"
      ]
    }
  },

  // Backwards compatibility alias
  calculus: {
    general: [
      "Limits and Continuity: Analytical, graphical, and tabular limits",
      "Derivatives: Chain rule, implicit differentiation, and related rates",
      "Applications of Derivatives: Mean Value Theorem, First/Second Derivative Tests, concavity, and optimization",
      "Integrals and Accumulation: Fundamental Theorem of Calculus, u-substitution, Riemann sums, and net change",
      "Differential Equations: Slope fields, exponential modeling, and separation of variables",
      "Applications of Integration: Area between curves, volume of solids of revolution, and known cross-sections"
    ],
    units: {
      "1": [
        "Trigonometric Squeeze / Sandwich Theorem limits",
        "Piecewise function continuity with two unknown constants A and B",
        "Intermediate Value Theorem (IVT) applied to continuous functions"
      ],
      "2": [
        "Limit definition of the derivative and differentiability",
        "Product, quotient, and chain rule differentiation"
      ],
      "3": [
        "Implicit differentiation dy/dx and second derivative d^2y/dx^2",
        "Related rates: Geometric and physical systems"
      ],
      "4": [
        "Mean Value Theorem (MVT) and Rolle's Theorem",
        "First/Second Derivative Tests, concavity, and optimization"
      ],
      "5": [
        "Riemann sums and Fundamental Theorem of Calculus",
        "1D Particle motion: Position, velocity, acceleration, speed, and total distance"
      ],
      "6": [
        "Separation of variables for first-order differential equations",
        "Slope fields and exponential growth/decay models"
      ],
      "7": [
        "Area between curves and volume of solids of revolution (disk and washer methods)",
        "Volume of solids with known cross sections (squares, semicircles, rectangles)"
      ],
      "8": [
        "Average value of a function and contextual accumulation problems",
        "Definite integrals and net change theorem in applied rate scenarios"
      ]
    }
  },

  chemistry: {
    general: [
      "Atomic structure, electron configurations, and periodic trends (electronegativity, ionization energy, atomic radius)",
      "Chemical bonding, Lewis structures, resonance, VSEPR molecular geometry, and bond angles",
      "Intermolecular forces (LDF, dipole-dipole, hydrogen bonding) and physical state properties",
      "Chemical reactions, net ionic equations, stoichiometry, and limiting reactant calculations",
      "Chemical kinetics: Rate laws, reaction mechanisms, activation energy, and Arrhenius equation",
      "Thermodynamics: Enthalpy (Delta H), entropy (Delta S), Gibbs free energy (Delta G), and spontaneity",
      "Equilibrium: Equilibrium constants (Kc, Kp), ICE tables, and Le Chatelier's principle shifts",
      "Acids and bases: pH calculations, weak acid/base equilibria, buffers, and titration curves",
      "Electrochemistry: Galvanic/electrolytic cells, cell potential (E_cell), and Faraday's law"
    ],
    units: {
      "1": [
        "Photoelectron Spectroscopy (PES): Multi-peak binding energy analysis identifying subshell electron configurations",
        "Mass spectrometry: Isotopic abundance peaks, average atomic mass calculations, and elemental identity",
        "Periodic trends in first ionization energy: Deviations between groups 2/13 and groups 15/16 due to subshell shielding",
        "Atomic and ionic radii trends: Effective nuclear charge (Z_eff) and electron-electron repulsion across isoelectronic series",
        "Coulomb's Law: Lattice energy comparison in ionic compounds based on ion charge magnitudes and internuclear separation"
      ],
      "2": [
        "Lewis dot structures and resonance contributors: Calculating formal charges to determine the most stable molecular structure",
        "VSEPR molecular geometries: Predicting electron-domain vs molecular geometry for expanded octets (e.g. SF4, XeF4, BrF5)",
        "Bond polarity and molecular dipole moments: Vector cancellation of polar bonds in symmetric vs asymmetric geometries",
        "Hybridization models: sp, sp2, sp3 orbital hybridization and identifying sigma vs pi bonds in double and triple bonds"
      ],
      "3": [
        "Intermolecular forces: Comparing boiling points and vapor pressures based on hydrogen bonding, dipole moments, and polarizability",
        "Liquid properties: Surface tension, viscosity, and capillary action related to cohesive vs adhesive forces",
        "Ideal gas law calculations: PV = nRT, Dalton's law of partial pressures, and gas collection over water with vapor pressure",
        "Non-ideal gas behavior: Deviations from ideality at high pressure and low temperature (van der Waals particle volume and attractions)",
        "Beer-Lambert Law: Spectrophotometric absorbance A = epsilon * b * c and calibration curve determination of unknown concentration"
      ],
      "4": [
        "Net ionic equations: Translating molecular precipitation, acid-base neutralization, and redox reactions into net ionic form",
        "Stoichiometry with limiting reactants: Calculating theoretical yield, percent yield, and excess reactant remaining",
        "Redox titrations: Determining equivalence point and analyte oxidation states using oxidizing titrants (e.g. KMnO4)",
        "Gravimetric analysis: Determining compound formula or mass percent purity via precipitate filtering, drying, and weighing"
      ],
      "5": [
        "Differential rate laws: Determining reaction order (0th, 1st, 2nd) with respect to reactants from initial rate data tables",
        "Integrated rate laws: Identifying reaction order from linear plots (time vs [A], ln[A], or 1/[A]) and computing half-life",
        "Elementary reaction steps & mechanisms: Identifying reaction intermediates, catalysts, and matching rate laws to rate-determining step",
        "Arrhenius equation & reaction coordinate: Activation energy Ea calculation and Maxwell-Boltzmann kinetic energy distribution shift"
      ],
      "6": [
        "Calorimetry: Calculating enthalpy change Delta H using q = mc Delta T and bomb/coffee-cup calorimetry assumptions",
        "Bond enthalpies: Estimating reaction enthalpy from sum of bonds broken minus sum of bonds formed",
        "Hess's Law: Combining intermediate thermochemical equations to determine net reaction enthalpy Delta H_rxn",
        "Standard enthalpies of formation: Calculating Delta H_rxn from standard enthalpies of formation Delta H_f"
      ],
      "7": [
        "Equilibrium constant expressions: Formulating Kc and Kp expressions excluding pure solids and liquids",
        "Reaction quotient Q vs equilibrium constant K: Predicting direction of net reaction shift to establish equilibrium",
        "ICE table calculations: Determining equilibrium concentrations and partial pressures for homogeneous and heterogeneous systems",
        "Le Chatelier's principle: Predicting system response to changes in temperature, pressure/volume, and reactant/product concentration",
        "Solubility product constant Ksp: Calculating molar solubility and predicting precipitate formation using Q_sp vs K_sp"
      ],
      "8": [
        "pH and pOH calculations: Strong acid/base complete dissociation and water autoionization constant Kw at 25°C vs elevated temps",
        "Weak acid/base equilibria: Calculating pH, percent ionization, Ka, and Kb using ICE tables and conjugate pairs",
        "Buffer solutions: Henderson-Hasselbalch equation (pH = pKa + log([A-]/[HA])) and calculating buffer capacity",
        "Titration curve analysis: Strong acid-strong base vs weak acid-strong base titrations; identifying half-equivalence point (pH = pKa)",
        "Acid-base indicators: Selecting appropriate indicators based on transition range pKa and titration equivalence point pH"
      ],
      "9": [
        "Entropy changes Delta S: Predicting sign of Delta S based on physical phase changes, gas mole variations, and particle dispersion",
        "Gibbs free energy Delta G: Evaluating thermodynamic favorability via Delta G = Delta H - T Delta S and calculating crossover temperature",
        "Thermodynamic and kinetic control: Distinguishing between thermodynamically favored products vs kinetically favored pathways",
        "Coupled reactions: Driving thermodynamically unfavorable non-spontaneous processes using favorable ATP hydrolysis",
        "Galvanic vs electrolytic cells: Anode oxidation, cathode reduction, electron flow, salt bridge ion migration, and standard cell potential E°",
        "Nernst equation qualitative predictions: Explaining cell potential shifts when ion concentrations deviate from 1.0 M standard state",
        "Faraday's law of electrolysis: Calculating mass of metal plated or gas volume produced from electric current (I) and time (t)"
      ]
    }
  },

  physics: {
    general: [
      "Mathematical Routines: Multi-step algebraic derivations starting strictly from fundamental laws or reference equations",
      "Translation Between Representations: Synthesizing energy bar charts (LOL diagrams), force diagrams, and kinematic graphs",
      "Experimental Design & Analysis: Linearizing physical relationships, drawing smooth best-fit lines, and evaluating slope meaning",
      "Qualitative/Quantitative Translation: Connecting qualitative physical claims to mathematical expressions and functional dependence",
      "System boundaries and conservation laws: Distinguishing internal vs external forces in momentum and mechanical energy conservation",
      "Fluids and mechanical equilibria: Applying buoyant forces, hydrostatic pressure, and continuity to dynamic scenarios"
    ],
    units: {
      "1": [
        "1D and 2D Kinematics: Horizontal vs vertical projectile motion components, trajectory symmetry, and launch velocity decomposition",
        "Kinematic Graphing: Velocity-time slope indicating acceleration, area under v-t graph yielding displacement, and position curvature",
        "Free fall dynamics: Time of flight, maximum vertical height h_max = (v0*sin(theta))^2 / (2g), and terminal conditions"
      ],
      "2": [
        "Newton's Second Law: Free-body diagrams with forces labeled from the dot, inclined planes (mg*sin(theta) vs mg*cos(theta))",
        "Frictional dynamics: Static friction threshold F_fs <= mu_s * F_N vs kinetic friction F_fk = mu_k * F_N",
        "Circular motion dynamics: Centripetal net force F_c = m*v^2 / r provided by tension, gravity, or friction at critical points"
      ],
      "3": [
        "Conservation of mechanical energy: Gravitational potential energy U_g = mg*Delta y, spring elastic energy U_s = (1/2)*k*(Delta x)^2",
        "Energy bar charts (LOL diagrams): Total mechanical energy sum constancy (K + U_g + U_s = E_total) across discrete system positions",
        "Work-energy theorem: Net work done by external forces W = F*d*cos(theta) equaling the change in kinetic energy Delta K"
      ],
      "4": [
        "Linear momentum conservation: Isolated systems with zero net external force preserving horizontal momentum p_i = p_f",
        "Inelastic collisions: Dropped block sticking to moving cart (m_c*v_c = (m_c + m_b)*v_f), kinetic energy dissipation, and center of mass velocity",
        "Internal vs external forces: Equal and opposite internal contact/friction forces not changing the system's total linear momentum"
      ],
      "5": [
        "Torque and static equilibrium: Net torque tau_net = Sigma r*F*sin(theta) = 0 about an arbitrary pivot for balanced metersticks/beams",
        "Newton's second law in rotational form: tau_net = I*alpha where rotational inertia I depends on mass distribution",
        "Hinged beam mechanics: Tension required to hold horizontal beam F_T = (Mg*L/2)/(L*sin(theta)) = Mg / (2*sin(theta))"
      ],
      "6": [
        "Rotational kinetic energy: K_rot = (1/2)*I*omega^2 and rolling without slipping condition v = omega*R",
        "Angular momentum conservation: L = I*omega in isolated rotational systems and torque-impulse theorem Delta L = tau*Delta t",
        "Comparative rotational inertia: Solid disk (I = (1/2)*M*R^2) vs hoop (I = M*R^2) accelerating under identical tangential force"
      ],
      "7": [
        "Simple harmonic motion: Mass on horizontal or vertical spring period T_s = 2*pi*sqrt(m/k) and frequency f = (1/(2*pi))*sqrt(k/m)",
        "Simple pendulum dynamics: Period T_p = 2*pi*sqrt(L/g), restoring torque tau = -mg*L*sin(theta), and planetary gravity variations",
        "SHM energy and graphs: Sinusoidal velocity-time and force-time graphs, phase relationships, and kinetic/potential trade-offs"
      ],
      "8": [
        "Fluid statics: Density rho = m/V, hydrostatic pressure P = P_0 + rho*g*h, and buoyant force F_b = rho_fluid * V_sub * g",
        "Archimedes principle: Floating vs submerged objects, net upward acceleration a = (rho_fluid*V*g - mg)/m = (rho_fluid/rho_obj - 1)*g",
        "Fluid dynamics: Continuity equation A1*v1 = A2*v2 (volume flow rate), nozzle constrictions increasing exit speed, and Bernoulli's law"
      ]
    }
  },

  history: {
    general: [
      "Historical Causation: Distinguishing immediate proximate triggers from long-term structural causes",
      "Continuity and Change Over Time (CCOT): Identifying enduring institutions vs transformational ideological shifts",
      "Comparative Analysis: Contrasting political, economic, or social outcomes between different regions or movements",
      "Historical Contextualization: Situate historical developments within broader regional, transatlantic, or global processes",
      "Document Sourcing (HIPP): Evaluating Historical Situation, Intended Audience, Author's Purpose, and Author's Point of View"
    ],
    units: {
      "1": [
        "Pre-Columbian indigenous societies: Agricultural adaptation (maize cultivation, Pueblo irrigation, Mississippian mound building)",
        "Columbian Exchange: Transatlantic transfer of pathogens, crops (sugar, tobacco, maize, potatoes), livestock, and demographic collapse",
        "Spanish encomienda system: Forced indigenous labor extraction and racialized casta hierarchy",
        "Bartolomé de las Casas vs Juan Ginés de Sepúlveda: Moral debate over Spanish conquest, natural rights, and indigenous sovereignty",
        "Pueblo Revolt (Popé's Rebellion 1680): Indigenous armed resistance, religious independence, and subsequent Spanish accommodation",
        "African chattel slavery introduction: Declining native populations, Portuguese and Spanish maritime slave trade, and plantation labor"
      ],
      "2": [
        "Colonial settlement models: Spanish encomienda, French fur trade alliances, Dutch commercial trade vs English settler-colonialism",
        "Regional British colonies: Chesapeake (tobacco cash crop, indentured servitude) vs New England (Puritans, family farms, town meetings)",
        "Middle Colonies ('Breadbasket'): Ethnic and religious diversity, Quaker tolerance in Pennsylvania, and transatlantic merchant commerce",
        "First Great Awakening: George Whitefield and Jonathan Edwards challenging traditional church authority and fostering intercolonial identity",
        "British mercantilism, Navigation Acts, and period of salutary neglect cultivating colonial economic autonomy",
        "Bacon's Rebellion (1676) accelerating the transition from indentured servitude to racialized hereditary chattel slavery",
        "King Philip's War (Metacom's War 1675) ending sovereign indigenous armed resistance in New England"
      ],
      "3": [
        "Seven Years' War (French and Indian War): Collapse of salutary neglect, British imperial debt, and the Proclamation of 1763",
        "Colonial resistance movements: Stamp Act crisis, Sons of Liberty, Boston Tea Party, and John Dickinson's Letters from a Farmer",
        "Enlightenment ideology and American Revolution: Locke social contract, Thomas Paine's Common Sense, Declaration of Independence, and republicanism",
        "Articles of Confederation: Structural weaknesses (lack of taxation, no executive), Shays' Rebellion, and interstate commercial chaos",
        "Constitutional Convention compromises: Great Compromise (bicameral legislature), Three-Fifths Compromise, and Electoral College",
        "Federalist vs Anti-Federalist debates: Federalist Papers (No. 10 & 51 on factions/checks) vs Anti-Federalist demands for a Bill of Rights",
        "Hamilton's Financial Plan (Bank of the US, debt assumption, tariffs) vs Jeffersonian agrarian Democratic-Republican opposition",
        "Washington's Farewell Address: Warnings against entangling foreign alliances and domestic political factionalism"
      ],
      "4": [
        "Revolution of 1800 and Jeffersonian Democratic-Republican vision: Agrarian republic vs Federalist central commercial power",
        "Marshall Court decisions: Marbury v. Madison (judicial review), McCulloch v. Maryland (implied powers/BUS), and federal supremacy",
        "Market Revolution: Canals (Erie Canal), steamboats, cotton gin, textile factories, Lowell mill girls, and separate gender spheres",
        "Henry Clay's American System: Protective tariffs, Second Bank of the United States, and federally funded internal improvements",
        "Second Great Awakening and antebellum reform: Temperance, Horace Mann public education, Dorothea Dix asylum reform, and utopian communities",
        "Abolitionist movement: William Lloyd Garrison's The Liberator, Frederick Douglass, underground railroad, and American Anti-Slavery Society",
        "Seneca Falls Convention (1848): Declaration of Sentiments and early organized women's rights and suffrage movement",
        "Jacksonian Democracy: Expansion of universal white male suffrage, spoils system, Nullification Crisis, Bank War, and Indian Removal Act / Trail of Tears"
      ],
      "5": [
        "Manifest Destiny and territorial expansion: Annexation of Texas, Oregon boundary dispute (54-40 or Fight), and Mexican-American War",
        "Sectional crisis: Wilmot Proviso, Compromise of 1850 (stricter Fugitive Slave Act), and Uncle Tom's Cabin polarizing public opinion",
        "Kansas-Nebraska Act (1854): Popular sovereignty repudiating Missouri Compromise line, Bleeding Kansas, and rise of the Republican Party",
        "Dred Scott v. Sandford (1857): Denial of African American citizenship and declaring federal bans on territorial slavery unconstitutional",
        "Civil War home front and strategy: Union industrial and demographic superiority vs Confederate defensive advantage and failed cotton diplomacy",
        "Emancipation Proclamation (1863) and Gettysburg Address redefining the war into a struggle for human liberation and union preservation",
        "Reconstruction legislation: Freedmen's Bureau, Civil Rights Act of 1866, and 13th (abolition), 14th (citizenship/equal protection), 15th (voting) Amendments",
        "Reconstruction backlash and retreat: Black Codes, Ku Klux Klan violence, sharecropping debt peonage, and Compromise of 1877 ending federal occupation"
      ],
      "6": [
        "Second Industrial Revolution: Transcontinental railroads, steel and petroleum consolidation (Andrew Carnegie, John D. Rockefeller)",
        "Gilded Age business practices: Horizontal vs vertical integration, corporate trusts, pools, and holding companies",
        "Ideologies of wealth: Social Darwinism, Andrew Carnegie's Gospel of Wealth, vs Henry George's critique in Progress and Poverty",
        "Labor union struggles: Knights of Labor vs American Federation of Labor (Samuel Gompers), Great Railroad Strike of 1877, Haymarket Affair, and Pullman Strike",
        "Western frontier expansion and indigenous displacement: Homestead Act (1862), Dawes Severalty Act (1887), and Ghost Dance / Wounded Knee",
        "Populist Movement (People's Party): Omaha Platform (free silver bimetallism, direct election of senators, graduated income tax) and Bryan's Cross of Gold speech",
        "New Immigration: Immigrants from Southern and Eastern Europe, urban political machines (Tammany Hall), nativism, and Chinese Exclusion Act (1882)",
        "Jim Crow era in the South: Disenfranchisement (poll taxes, literacy tests), Ida B. Wells anti-lynching crusade, and Plessy v. Ferguson (1896 'separate but equal')"
      ],
      "7": [
        "American Imperialism debate: Spanish-American War (1898), Philippine annexation, Open Door Policy in China, and Anti-Imperialist League",
        "Progressive Era reforms: Muckrakers (Ida Tarbell, Upton Sinclair), settlement houses (Jane Addams Hull House), and 16th-19th Constitutional Amendments",
        "Theodore Roosevelt's Square Deal: Trust-busting (Northern Securities), Meat Inspection Act, Pure Food and Drug Act, and federal conservation",
        "World War I home front & civil liberties: Committee on Public Information, Espionage and Sedition Acts, and Schenck v. US ('clear and present danger')",
        "Treaty of Versailles and League of Nations debate: Woodrow Wilson's Fourteen Points vs Henry Cabot Lodge and Senate reservationists",
        "1920s cultural cleavages: First Red Scare (Palmer Raids), Immigration Act of 1924 national origin quotas, Scopes Monkey Trial, and Harlem Renaissance",
        "Great Depression causes & Hoover's response: Stock market crash 1929, bank runs, Hawley-Smoot Tariff, and Bonus Army march",
        "Franklin D. Roosevelt's New Deal: First New Deal (relief/recovery: CCC, AAA, TVA, FDIC) vs Second New Deal (reform: Wagner Act, Social Security Act 1935)",
        "World War II home front and mobilization: Lend-Lease Act, Pearl Harbor, Executive Order 9066 Japanese American internment (Korematsu v. US), and Manhattan Project"
      ],
      "8": [
        "Cold War containment strategy: George Kennan's Long Telegram, Truman Doctrine, Marshall Plan, Berlin Airlift, and creation of NATO",
        "Korean War (1950-1953) and Second Red Scare: House Un-American Activities Committee (HUAC), Joseph McCarthy, and Alger Hiss spy trial",
        "1950s affluence & suburban conformity: GI Bill, Levittown suburbanization, Interstate Highway Act of 1956, and baby boom",
        "Civil Rights Movement legal and grassroots action: Brown v. Board of Education (1954), Montgomery Bus Boycott, MLK's Southern Christian Leadership Conference (SCLC)",
        "Civil rights legislative milestones: March on Washington, Civil Rights Act of 1964, Voting Rights Act of 1965, and Black Power movement (Malcolm X, Black Panthers)",
        "Lyndon B. Johnson's Great Society: War on Poverty, Medicare and Medicaid, Head Start, and Immigration and Nationality Act of 1965",
        "Vietnam War escalation and domestic anti-war movement: Gulf of Tonkin Resolution, Tet Offensive, My Lai, Kent State shootings, and War Powers Act (1973)",
        "Social counterculture and rights movements: Second-wave feminism (Betty Friedan, NOW, Roe v. Wade, Title IX), Cesar Chavez / United Farm Workers, Stonewall Riots, American Indian Movement (AIM)",
        "Environmental movement (Rachel Carson's Silent Spring, first Earth Day 1970, EPA creation) and 1970s stagflation / Watergate crisis"
      ],
      "9": [
        "The Conservative Resurgence: Election of 1980, Moral Majority, and Ronald Reagan's conservative coalition",
        "Reaganomics & economic policy: Supply-side tax cuts (ERTA 1981), deregulation, federal budget deficits, and PATCO air traffic controllers strike",
        "Reagan foreign policy & end of Cold War: Strategic Defense Initiative ('Star Wars'), INF Treaty, Gorbachev's glasnost/perestroika, and collapse of Soviet Union (1991)",
        "Post-Cold War foreign interventions: Persian Gulf War (Operation Desert Storm 1991), humanitarian missions in Somalia and the Balkans",
        "1990s economic expansion and globalization: North American Free Trade Agreement (NAFTA), commercialization of the Internet, dot-com boom, and welfare reform",
        "Election of 2000 (Bush v. Gore) and Supreme Court intervention in presidential balloting",
        "Post-9/11 War on Terror: September 11 attacks, USA PATRIOT Act, Department of Homeland Security, wars in Afghanistan and Iraq (2003)",
        "The 2008 Financial Crisis (Great Recession), subprime mortgage collapse, Emergency Economic Stabilization Act, and Election of Barack Obama",
        "21st-century demographic transformations, debates over immigration reform, Affordable Care Act (2010), and rising political polarization"
      ]
    }
  },

  csa: {
    general: [
      "Methods and Control Structures (Q1): Method calls on object instances, iterative loops (for, while), conditional logic (if-else), and accumulators",
      "Class Design (Q2): Writing a complete class from scratch with private instance variables, constructors, accessors, and mutators conforming to execution trace tables",
      "Array and ArrayList (Q3): 1D array traversal, ArrayList<E> manipulation, filtering, object instantiation with 'new', and dual-pointer / nested comparisons",
      "2D Arrays (Q4): Matrix row-major traversal, bounds checking (length / [0].length), self-pairing guards, neighbor evaluation, and coordinate manipulation"
    ],
    units: {
      "1": [
        "Primitive Types & Arithmetic: Integer division, modulus (%), double precision, and casting (e.g. (int)(Math.random() * range))",
        "Calling Methods: Static vs instance methods, parameter passing, return value capture, and Math class library functions"
      ],
      "2": [
        "Boolean Expressions & If Statements: Relational operators, logical operators (&&, ||, !), De Morgan's Laws, short-circuit evaluation",
        "Iteration & Loops: while loops, for loops, nested loops, loop bounds, off-by-one error prevention, and string index processing"
      ],
      "3": [
        "Writing Classes: Private instance variables, public constructors, keyword 'this', accessor (getter) methods, mutator (setter) methods",
        "Class Scope & References: Variable shadowing, null references, object aliasing, and encapsulation integrity"
      ],
      "4": [
        "1D Arrays & ArrayList: Indexed access, enhanced for-each loops, ArrayList methods (add, get, set, remove, size), and parallel list matching",
        "2D Arrays: Grid row/column indexing (arr[r][c]), nested row-major traversal, neighbor checks, and matrix transformations"
      ]
    }
  },

  economics: {
    general: [
      "Marginal analysis: Marginal benefit vs marginal cost optimization and rational decision making",
      "Supply and demand dynamics: Shifts in curves vs movements along curves, and market clearing equilibrium price/quantity",
      "Elasticity measures: Price elasticity of demand/supply, cross-price elasticity, income elasticity, and total revenue test",
      "Government interventions: Price ceilings (shortages), price floors (surpluses), excise taxes, and deadweight loss calculation",
      "Macroeconomic indicators: Real vs nominal GDP, CPI inflation rates, unemployment categories (frictional, structural, cyclical)",
      "Aggregate Demand / Aggregate Supply (AD-AS): Short-run vs long-run macroeconomic equilibrium, recessionary vs inflationary gaps",
      "Fiscal and monetary policy: Government spending/tax multipliers, Federal Reserve tools (reserve requirements, discount rate, open market operations)"
    ],
    units: {
      "1": [
        "Production Possibilities Curve (PPC): Constant vs increasing opportunity costs, economic growth shifts, and productive vs allocative efficiency",
        "Comparative advantage and terms of trade: Output vs input method calculations and mutually beneficial trade exchange ratios"
      ],
      "2": [
        "Consumer and producer surplus: Calculating deadweight loss from per-unit excise taxes and tariff trade restrictions",
        "Cross-price elasticity (substitutes > 0 vs complements < 0) and income elasticity (normal goods > 0 vs inferior goods < 0)"
      ],
      "3": [
        "Short-run production and cost curves: Law of diminishing marginal returns, marginal product curve, MC, ATC, AVC, and AFC curves",
        "Perfect competition market structure: Price taker P = MR = D = AR, profit maximization MR = MC, shut-down rule (P < AVC), and zero economic profit in long run"
      ],
      "4": [
        "Monopoly market structure: Downward-sloping demand, MR < P, profit maximization, deadweight loss, and natural monopoly regulation",
        "Monopolistic competition & Oligopoly: Product differentiation, excess capacity, game theory payoff matrices, dominant strategy, and Nash equilibrium"
      ],
      "5": [
        "Macro AD-AS modeling: Shifts in Aggregate Demand and Short-Run Aggregate Supply, stagflation, and long-run self-correction",
        "Money market and Loanable funds market: Federal funds interest rate determination, open market operations, and crowding-out effect"
      ]
    }
  },

  human_geography: {
    general: [
      "Spatial pattern analysis: Identifying clustering, dispersion, and regional density from geospatial data and thematic maps",
      "Scale of analysis: Contrasting global, national, regional, and local demographic and economic data patterns to uncover hidden spatial variations",
      "Demographic stimulus interpretation: Analyzing Stage 2 vs Stage 4 population pyramids, dependency ratios, and sex ratio imbalances",
      "Geospatial model application: Analyzing real-world deviations from theoretical assumptions in concentric, sectoral, and agricultural models",
      "Cultural landscape analysis: Explaining visible religious, architectural, and linguistic imprints on urban centers and rural hearths",
      "Geopolitical border impacts: Devolutionary pressures, supranational governance, and UNCLOS maritime boundaries influencing state sovereignty"
    ],
    units: {
      "1": [
        "Geospatial technologies: Analyzing GIS overlay layers, GPS navigation coordinates, and satellite remote sensing for emergency response and coastal flood planning",
        "Spatial concepts: Distance decay vs time-space compression driven by telecommunications, internet infrastructure, and containerized freight",
        "Regional analysis: Formal (uniform climatic/legislative traits) vs Functional (nodal broadcast/newspaper/transit delivery zones) vs Vernacular (perceptual cultural identity like the American South)",
        "Human-environmental interaction: Environmental determinism vs possibilism in agricultural productivity and arid metropolitan growth (e.g. Phoenix, Arizona or Dubai)",
        "Environmental determinism critique: Historical misuse to justify European colonial expansion, imperial dominance, and climate-based social hierarchies",
        "Map projections & distortion: Mercator preservation of directional rhumb lines for marine navigation vs extreme high-latitude polar landmass exaggeration",
        "Map projections & equality: Peters (Gall-Peters) equal-area projection balancing continental landmass size vs polar azimuthal equidistant great-circle flight paths",
        "Thematic mapping types: Choropleth density gradients across administrative units vs dot density maps revealing actual rural/urban clustering and avoiding the ecological fallacy",
        "Thematic mapping variables: Isoline continuous contour lines (elevation/barometric pressure) vs proportional symbol scaling representing city population magnitudes",
        "Spatial distribution patterns: Identifying clustered (agglomerated), linear (along highway/river corridors), and dispersed point pattern arrangements",
        "Scale of analysis contrasts: How national-level GDP averages obscure subnational regional and local neighborhood-level poverty and income disparities",
        "Qualitative vs quantitative spatial data: Combining quantitative GIS data layers with qualitative community interviews during disaster recovery planning",
        "Spatial decision-making: How local government planners utilize census tract-level data rather than national data to allocate municipal public health clinics",
        "Friction of distance in modern trade: Explaining why physical distance, freight costs, and bulk transport logistics still influence global trade volumes"
      ],
      "2": [
        "Demographic Transition Model (DTM): Stage 1 high fluctuating equilibrium vs Stage 2 Industrial/Medical revolution CDR collapse and rapid NIR population expansion",
        "DTM Late Stages: Stage 3 fertility decline driven by female education and urbanization vs Stage 4 low stable equilibrium and Stage 5 natural decrease",
        "Epidemiological Transition Model: Stage 1 pestilence and famine vs Stage 2 receding pandemics vs Stage 3/4 degenerative chronic diseases",
        "Population Pyramids: Broad expansive base (rapid growth, high youth dependency) vs columnar aging demographic (caregiver deficits, pension strain, shrinking labor force)",
        "Sex ratio imbalances: Male-skewed cohorts caused by cultural son preference and prenatal sex selection creating marriage market squeezes and labor shifts",
        "Malthusian population theory: Arithmetic food production vs exponential population growth, and technological/Green Revolution rebuttals",
        "Dependency ratios: Economic impact of high youth dependency in Stage 2 countries (primary schooling, pediatric healthcare) vs elderly dependency in Stage 4/5 countries",
        "Migration push and pull factors: Economic employment, political persecution, environmental desertification, and Ravenstein's laws of migration",
        "Forced vs voluntary displacement: Transnational economic migrants vs refugees and internally displaced persons (IDPs) fleeing armed conflict",
        "Pro-natalist government policies: Financial incentives, paid maternity leave, and subsidized childcare in aging societies (e.g., Japan, Singapore, France)",
        "Anti-natalist government policies: Unitary vs federal government effectiveness in enforcing birth restriction laws (e.g., historic One-Child Policy in China)",
        "Doubling time contrasts: Why less developed countries with high natural increase rates experience drastically shorter population doubling times than developed nations",
        "Urban vs rural fertility differentials: Explaining why women in urban areas consistently exhibit lower total fertility rates (TFR) than rural peers"
      ],
      "3": [
        "Types of cultural diffusion: Relocation diffusion (migration of people) vs Expansion diffusion (contagious internet trends, hierarchical city-to-town trends, stimulus adaptations)",
        "Linguistic geography: Indo-European language family evolution, Romance and Germanic branches, isoglosses, dialects, and English as global lingua franca",
        "Creolization of language: The convergence and blending of two or more distinct languages through historical colonial contact to create a new stable language (e.g. Haitian Creole)",
        "Religious distribution & hearths: Universalizing faiths (Christianity, Islam, Buddhism) seeking global converts vs Ethnic faiths (Judaism, Hinduism) anchored to specific physical hearths",
        "Cultural landscape imprint: Visible architectural styles (Gothic cathedrals, Islamic minarets and domes, Buddhist pagodas) and toponyms reflecting religious heritage",
        "Linguistic landscape: Bilingual street signage and official language laws reflecting political power negotiations and cultural preservation (e.g. Montreal, Quebec)",
        "Cultural identity processes: Acculturation (adopting host traits while maintaining heritage) vs Assimilation (complete cultural absorption) vs Syncretism (blending cultural traditions)",
        "Centripetal vs centrifugal cultural forces: Shared national language and cultural symbols unifying a population vs ethnic sectarian cleavages driving devolution",
        "Globalization of food and diet: Relocation of ethnic cuisines into metropolitan restaurant landscapes vs loss of indigenous agricultural dietary traditions",
        "Threats to indigenous languages: How European colonialism, mandatory boarding schools, and modern digital media threaten the survival of indigenous minority tongues",
        "Cultural landscapes & placelessness: How commercial franchise architecture, standardized strip malls, and corporate branding erase local distinctiveness"
      ],
      "4": [
        "Political entity types: Nation-states (Japan, Iceland), stateless nations (Kurds, Palestinians, Basques), multinational states (UK, Canada), and autonomous regions",
        "Colonial borders and historical boundaries: Berlin Conference (1884) superimposed boundaries ignoring ethnic boundaries, causing post-colonial conflicts in Africa",
        "Boundary genetic types: Antecedent boundaries established before intensive human settlement vs subsequent boundaries drawn after cultural landscape development",
        "Boundary dispute categories: Definitional (treaty wording), locational (border cartography), operational (customs/migration control), and allocational (shared aquifers or oil fields)",
        "Law of the Sea (UNCLOS): 12-nautical-mile territorial sea sovereignty, 24nm contiguous enforcement zone, and 200nm Exclusive Economic Zone (EEZ) resource rights",
        "Overlapping EEZ conflicts: Geopolitical friction over fishing rights and offshore petroleum reserves in enclosed seas (e.g. South China Sea, Persian Gulf)",
        "Internal political boundaries: Gerrymandering techniques (packing opposition voters into a single district vs cracking across multiple districts) influencing elections",
        "Devolutionary forces: Physical geography barriers, concentrated ethnic minorities (Scotland, Catalonia), and regional economic disparities promoting autonomy or secession",
        "Federal vs unitary governance: Centralized top-down control in unitary systems vs regional autonomous power centers in federal systems (e.g. US, Canada, Nigeria)",
        "Supranational organizations: European Union (EU), ASEAN, and UN balancing economic integration and free trade against the surrender of member state sovereignty"
      ],
      "5": [
        "Von Thünen Agricultural Land-Use Model: Concentric rings determined by land rent and perishability/transport weight (Dairying -> Timber -> Grains -> Livestock)",
        "Technological modifications to Von Thünen: How refrigerated trucks, air freight, and container shipping have expanded dairy and perishable crop distance rings",
        "Bid-Rent Theory in agriculture: High land values near urban consumer markets dictating intensive farming vs low land values on the periphery favoring extensive grazing",
        "First, Second, and Green Revolutions: High-yield variety (HYV) dwarf wheat/rice seeds, synthetic nitrogen fertilizers, chemical pesticides, and mechanized irrigation",
        "Economic consequences of the Green Revolution: Increased farm yields and lower food prices vs financial debt and loss of land for small subsistence farmers unable to afford inputs",
        "Environmental consequences of commercial agriculture: Ground water aquifer depletion, soil salinization from improper irrigation, eutrophication from fertilizer runoff, and desertification",
        "Intensive vs Extensive agricultural systems: Market gardening and plantation farming vs nomadic pastoralism and shifting cultivation",
        "Cadastral rural survey systems: English Metes and Bounds (natural landmarks) vs French Long Lots (riverfront access) vs Township and Range rectangular grids",
        "Global agricultural commodity dependence: Vulnerabilities faced by developing nations whose export economies rely overwhelmingly on single cash crops (e.g. coffee, cocoa, soybeans)",
        "Agricultural sustainability practices: Terracing on steep mountain slopes, crop rotation, cover cropping, and dryland water conservation techniques"
      ],
      "6": [
        "Classic North American Urban Models: Burgess Concentric Zone (CBD outward) vs Hoyt Sector (transit corridor wedges) vs Harris-Ullman Multiple Nuclei",
        "Deviations from classical urban models: How gentrification, transit sub-centers, and highway intersections disrupt smooth concentric land rent gradients",
        "Galactic City Model & Edge Cities: Suburban employment nodes, circumferential beltways, corporate office parks, and polycentric urban agglomerations",
        "Christaller's Central Place Theory: Hexagonal market areas, threshold (minimum customer base to sustain a business), and range (maximum distance consumers travel)",
        "Urban settlement hierarchies: Primate city rule (disproportionate political, economic, and cultural dominance) vs Rank-Size rule (nth city is 1/n population of largest city)",
        "Megacities and Metacities: Infrastructure deficits, rapid rural-to-urban migration, and peripheral squatter settlements / favelas in developing world urban giants",
        "Urban challenges & gentrification: Influx of affluent residents, rising property taxes and rents, and displacement of long-term low-income minority residents",
        "Socio-spatial urban inequalities: Redlining, blockbusting, racial covenants, and contemporary housing discrimination creating entrenched residential segregation",
        "Urban sustainability & New Urbanism: Mixed-use zoning, walkable neighborhoods, transit-oriented development (TOD), greenbelts, and smart growth policies",
        "Metropolitan jurisdictional fragmentation: Challenges faced by fragmented municipal governments in coordinating regional transportation, water, and sewage systems"
      ],
      "7": [
        "Wallerstein's World Systems Theory: Core (capital-intensive, high-value manufacturing, tertiary/quaternary jobs), Periphery (raw material extraction, low wages), and Semiperiphery",
        "Rostow's Stages of Economic Growth: Traditional society -> Preconditions for takeoff -> Takeoff -> Drive to maturity -> Age of high mass consumption",
        "Weber's Least Cost Theory: Raw material index, bulk-reducing industries (copper smelting, paper mills locating near inputs) vs bulk-gaining industries (beverage bottling locating near market)",
        "Human Development Index (HDI): Composite metric evaluating GDP/GNI per capita (PPP), mean/expected years of schooling, and life expectancy at birth",
        "Economic sectors and deindustrialization: Shift from secondary manufacturing to tertiary and quaternary knowledge/tech sectors in core nations, leaving Rust Belt job losses",
        "Global division of labor: Offshoring, maquiladoras, Export Processing Zones (EPZs), and Special Economic Zones (SEZs) taking advantage of low labor costs in the semiperiphery",
        "Economic interdependence and global trade: How specialized commodity exports and global supply chains link producing countries with consuming countries worldwide",
        "Gender empowerment and development: Microfinance small-business lending, female secondary education, and labor force participation lowering total fertility rates",
        "UN Sustainable Development Goals (SDGs): Balancing industrial growth with environmental protection, renewable energy, clean water, and reduced global poverty"
      ]
    }
  },
  environmental_science: {
    general: [
      "Experimental investigation design: Formulating testable hypotheses, identifying independent/dependent variables, control treatments, and predicting modification outcomes",
      "Quantitative environmental problem solving: Multi-step dimensional analysis, energy calculations (kWh, BTUs), metric conversions, percent change, and Rule of 70 doubling time",
      "Environmental problem evaluation and solution proposing: Assessing ecological disruptions, identifying root causes, and proposing realistic mitigation strategies with co-benefits",
      "Ecosystem dynamics and resilience: Trophic cascades, 10% energy transfer rule, biodiversity metrics (species richness vs evenness), and disturbance recovery",
      "Earth systems and climatological phenomena: Tectonic plate movements, atmospheric circulation cells, and El Niño-Southern Oscillation (ENSO) ocean-atmosphere feedbacks",
      "Human impacts on resources: Tragedy of the Commons, agricultural runoff, pesticide treadmill, urban stormwater runoff, and habitat fragmentation"
    ],
    units: {
      "1": [
        "Biogeochemical cycles: Carbon, nitrogen, phosphorus, and hydrologic nutrient cycling pathways, reservoirs, and human disruptions",
        "Trophic cascades and energy dynamics: Net Primary Productivity (NPP = GPP - R), 10% thermodynamic trophic transfer rule, and food web biomass pyramids",
        "Terrestrial and aquatic biomes: Climatograms, temperature/precipitation patterns, and freshwater vs marine aquatic life zones"
      ],
      "2": [
        "Ecosystem services classification: Provisioning, regulating, supporting, and cultural benefits provided by natural ecosystems",
        "Island biogeography theory: Equilibrium model predicting species richness based on island surface area and distance from mainland colonization sources",
        "Ecological tolerance and range: Physiological stress curves, optimum conditions, and zones of intolerance for abiotic factors",
        "Natural ecosystem disruptions: Primary succession on bare bedrock/lava vs secondary succession with intact soil, pioneer species, and ecological resilience"
      ],
      "3": [
        "Reproductive strategies: Generalist vs specialist species, and r-selected vs K-selected survivorship curves (Type I, II, III)",
        "Carrying capacity and population dynamics: Logistic growth model, overshoot, and dieback caused by resource depletion",
        "Human population demographics: Age-structure population pyramid diagrams, Total Fertility Rate (TFR), and Infant Mortality Rate indicators",
        "Demographic Transition Model (DTM): Stages 1-4 shifts in birth/death rates, and Rule of 70 population doubling time calculations (70 / r)"
      ],
      "4": [
        "Plate tectonics and geological hazards: Convergent, divergent, and transform boundaries forming rift valleys, trenches, island arcs, and earthquakes",
        "Soil properties and conservation: Soil horizon profiles (O, A, B, C), soil texture triangle proportions (sand, silt, clay), porosity, and permeability",
        "Atmospheric circulation: Hadley, Ferrel, and Polar cells, Coriolis deflection, and solar insolation driving global wind and climate patterns",
        "Earth's geography and climate: Watershed topography and drainage basins, rain shadow effect on leeward mountain slopes, and ENSO (El Niño vs La Niña) upwelling shifts"
      ],
      "5": [
        "Tragedy of the Commons: Depletion of shared unregulated resources (overgrazing on public rangelands, overfishing in international waters)",
        "Agricultural irrigation and soil salinization: Furrow, flood, spray, and drip irrigation efficiencies, waterlogging, and aquifer depletion (Ogallala)",
        "Pest management: Synthetic chemical pesticides, pesticide treadmill and evolved genetic resistance, and Integrated Pest Management (IPM) biocontrol",
        "Meat production and aquaculture: Concentrated Animal Feeding Operations (CAFOs), rotational grazing, overfishing, and inland aquaculture disease transfer",
        "Resource extraction and urbanization: Surface mining (strip mining, mountain top removal), acid mine drainage, urban runoff, and permeable pavement mitigations"
      ],
      "6": [
        "Fossil fuels and electricity generation: Coal, petroleum, natural gas combustion, turbine mechanics, cogeneration, and hydraulic fracturing risks",
        "Nuclear energy: Uranium-235 fission, fuel rods, radioactive waste storage, half-life decay calculations, and absence of air pollution vs thermal pollution",
        "Renewable energy technologies: Photovoltaic solar cells vs concentrated solar, wind turbine energy conversion, hydroelectric dam environmental impacts, and geothermal power",
        "Energy conservation and efficiency: Calculating percent change in fuel economy (mpg), residential electrical energy consumption (kWh), and appliance upgrades"
      ],
      "7": [
        "Air pollutants and sources: Primary vs secondary pollutants, particulate matter (PM10, PM2.5), sulfur dioxide, and nitrogen oxides from fossil fuels",
        "Photochemical smog: Formation chemistry involving sunlight, NOx, and volatile organic compounds (VOCs) producing tropospheric ozone and PANs",
        "Thermal inversions: Trapping of cold ground-level air beneath warm inversion layer, concentrating industrial and urban pollutants",
        "Indoor air pollutants: Radon gas seepage, carbon monoxide from incomplete combustion, asbestos fibers, and mold VOCs",
        "Air pollution reduction technologies: Catalytic converters, electrostatic precipitators, wet scrubbers, and vapor recovery nozzles"
      ],
      "8": [
        "Aquatic pollution sources: Point vs nonpoint sources, runoff plumes, and thermal pollution impacts on dissolved oxygen solubility",
        "Endocrine disruptors and persistent organic pollutants: Synthetic chemicals (PCBs, DDT, BPA, phthalates), bioaccumulation in fatty tissue, and biomagnification",
        "Eutrophication and oxygen sag curve: Nutrient runoff (nitrates, phosphates), algal blooms, decomposition by aerobic bacteria, and hypoxic dead zones (low DO, high BOD)",
        "Wetlands and human impacts: Wetland ecological flood absorption, commercial development destruction, sedimentation, and mangrove coastal buffering",
        "Dose-response curves: Threshold levels, LD50 (lethal dose killing 50% of test population), and municipal wastewater treatment (primary, secondary, tertiary)"
      ],
      "9": [
        "Stratospheric ozone depletion: Chlorofluorocarbons (CFCs), catalytic destruction of O3 molecules, Antarctic ozone hole, and Montreal Protocol international treaty",
        "Greenhouse effect and climate change: Carbon dioxide, methane, nitrous oxide, fluorinated gases, infrared absorption, and positive feedback loops (ice-albedo effect)",
        "Ocean warming and acidification: Thermal stress causing zooxanthellae expulsion (coral bleaching), and atmospheric CO2 absorption forming carbonic acid (lowering marine pH)",
        "Invasive species and biodiversity loss: Generalist traits outcompeting native specialists (HIPPCO framework), habitat fragmentation, and wildlife corridors"
      ]
    }
  },
  csp: {
    general: [
      "Student-developed procedure design: Procedural abstraction, explicit parameters, return values, and encapsulation",
      "List-based data abstraction: Dynamic array traversal, indexing, filtering, aggregating, and complexity management",
      "Algorithmic logic & control flow: Sequencing, relational selection (if/elif/else), and conditional/count-controlled iteration (loops)",
      "Program testing & logic error analysis: Formulating test calls to execute distinct branches, simulating incorrect code modifications, and diagnosing logic bugs",
      "User interface & input/output dynamics: Validating tactile/visual inputs, handling unexpected boundary inputs, and documenting code for maintenance"
    ],
    units: {
      "1": [
        "Creative Development: Iterative design process, incremental development, user documentation, and collaborative pair programming",
        "Investigating program behavior: Describing input/output relationships and identifying how code segments fulfill program purpose",
        "Identifying and correcting errors: Distinguishing between logic errors, syntax errors, and runtime exceptions during development"
      ],
      "2": [
        "Data Representation: Binary numbering system, hexadecimal conversion, character encoding (ASCII/Unicode), and integer overflow",
        "Data compression algorithms: Lossless vs lossy compression tradeoffs, text run-length encoding, and file size reduction",
        "Extracting information from data: Data cleaning, metadata analysis, privacy concerns with large datasets, and correlation vs causation"
      ],
      "3": [
        "Algorithms & Programming: Variables, expressions, string concatenation, and Boolean logic operations (AND, OR, NOT)",
        "Conditional selection statements: Nested if/else statements and multi-branch decision trees based on variable states",
        "Iteration statements: For/while loops traversing list collections, linear search algorithms, and accumulator pattern updates",
        "Developing procedures: Writing parameterized functions that manage complexity and prevent redundant code duplication",
        "Simulating algorithmic execution: Tracing variable values step-by-step through nested loops and conditional statements"
      ],
      "4": [
        "Computer Systems & Networks: Internet routing protocols (IP, TCP/UDP), packet switching, and physical network connections",
        "Fault tolerance and redundancy: Network reliability, multiple routing paths, and distributed computing architectures",
        "Cybersecurity principles: Public-key vs symmetric encryption, multi-factor authentication (MFA), malware types, and phishing attacks"
      ],
      "5": [
        "Impact of Computing: Digital divide (socioeconomic and geographic barriers), equitable access, and open-source licensing",
        "Computing biases: Algorithmic bias in machine learning models, facial recognition training gaps, and discriminatory datasets",
        "Legal and ethical concerns: Intellectual property rights, Creative Commons licenses, digital privacy, and automated tracking cookies"
      ]
    }
  },
  government: {
    general: [
      "Foundational document textual analysis: Federalist No. 10, Brutus No. 1, Federalist No. 78, Letter from Birmingham Jail",
      "SCOTUS case precedent and selective incorporation: McCulloch v. Maryland, US v. Lopez, Tinker v. Des Moines, Brown v. Board",
      "Interactions among branches: Congressional checks, presidential executive orders, judicial review, and bureaucratic administrative rulemaking",
      "Political participation & public opinion: Polling methodology, voting rights legislation, campaign finance, and media agenda setting"
    ],
    units: {
      "1": ["Constitutional foundations: Separation of powers, checks and balances, federalism, Commerce Clause, and Tenth Amendment reserved powers"],
      "2": ["Institutions of national government: House vs Senate procedural rules (filibuster, rules committee), executive veto power, judicial appointments, iron triangles"],
      "3": ["Civil liberties & civil rights: First Amendment Free Exercise vs Establishment Clause, Fourteenth Amendment Equal Protection, selective incorporation"],
      "4": ["American political ideologies: Liberalism vs conservatism vs libertarianism, political socialization agents, and Keynesian vs supply-side fiscal policy"],
      "5": ["Political participation: Electoral College mechanisms, Citizens United v. FEC independent expenditures, interest group lobbying, and primary voting systems"]
    }
  },
  statistics: {
    general: [
      "Data display interpretation: Histograms, stemplots, boxplots with 1.5*IQR outlier criterion, and normal probability plots",
      "Bivariate relationship analysis: Least-squares regression line (LSRL), correlation coefficient r, and residual plot diagnostic patterns",
      "Experimental and survey design: Simple random sampling, stratified sampling, blocking, confounding variables, and placebo double-blinding",
      "Statistical inference: Null vs alternative hypotheses, Type I vs Type II errors, p-value interpretation, and confidence intervals"
    ],
    units: {
      "1": ["Exploring One-Variable Data: Center, shape, spread, standard deviation formula, z-score transformations, empirical 68-95-99.7 rule"],
      "2": ["Exploring Two-Variable Data: LSRL y-hat = a + bx, slope and intercept contextual interpretations, coefficient of determination r^2, influential points"],
      "3": ["Collecting Data: Observational study vs randomized controlled experiment, voluntary response bias, nonresponse bias, and completely randomized designs"],
      "4": ["Probability and distributions: Addition/multiplication probability rules, conditional probability P(A|B), binomial B(n,p) vs geometric distributions"],
      "5": ["Sampling Distributions: Central Limit Theorem (CLT), sampling distribution of sample mean x-bar and sample proportion p-hat, standard error"],
      "6": ["Inference for Categorical Proportions: One-sample and two-sample z-intervals and z-tests, normal approximation conditions np >= 10 and n(1-p) >= 10"],
      "7": ["Inference for Quantitative Means: One-sample and two-sample t-procedures, degrees of freedom, matched-pairs t-tests, robustness to normality"],
      "8": ["Chi-Square Inference: Chi-Square goodness-of-fit test, test of independence, test of homogeneity, expected cell count requirements"],
      "9": ["Inference for Regression Slopes: t-test for population regression slope beta, standard error of the slope SE_b, linear regression condition checks"]
    }
  },
  general_academic: {
    general: [
      "Conceptual definition and contextualization: Defining core domain terminology and situating the phenomenon within its broader academic framework",
      "Cause-and-effect explanatory analysis: Demonstrating step-by-step how an initial change or stimulus leads directly to observed secondary consequences",
      "Comparative critical evaluation: Contrasting two competing theories, institutional models, or empirical outcomes to assess relative efficacy",
      "Claim justification using empirical evidence: Formulating a defensible analytical thesis supported by authentic course-specific data or principles"
    ],
    units: {
      "1": ["Foundational domain principles: Core taxonomic concepts, historical precedents, and primary analytical frameworks"],
      "2": ["System dynamics and interactions: Analyzing functional relationships between interdependent components within the field"],
      "3": ["Advanced contextual evaluation: Assessing real-world case studies, regulatory interventions, and empirical validations"]
    }
  },
  englishLang: {
    general: [
      "Rhetorical situation analysis: Identifying author, intended audience, exigence, and overarching purpose in authentic speeches and essays",
      "Synthesis argumentation: Integrating diverse textual and quantitative perspectives into a cohesive line of reasoning",
      "Defensible thesis formulation: Establishing a nuanced position that avoids simplistic binaries and acknowledges counterarguments",
      "Evidence integration: Weaving signal phrases, direct quotations, and paraphrased evidence seamlessly without block summary",
      "Rhetorical strategy evaluation: Analyzing how specific diction, syntax, tone shifts, and analogies function psychologically on the audience",
      "Philosophical / cultural argumentation: Marshaling historical, literary, and contemporary evidence to support a defensible claim"
    ],
    units: {
      "1": [
        "Rhetorical situation: Exigence, speaker persona, and audience expectations in foundational non-fiction texts",
        "Authorial intent and primary claims: Dissecting the core thesis and explicit arguments in persuasive writing"
      ],
      "2": [
        "Classical appeals: Ethical credibility (ethos), emotional resonance (pathos), and logical structure (logos)",
        "Evidence selection: Evaluating how empirical facts, anecdotes, and expert testimony advance distinct claims"
      ],
      "3": [
        "Line of reasoning: Tracing the logical progression from introductory premises to supporting claims and conclusion",
        "Structural transitions: Analyzing causal, contrastive, and concessive transitional phrases that unite paragraphs"
      ],
      "4": [
        "Synthesis protocol: Synthesizing multiple competing viewpoints to construct an original, defensible position",
        "Source conversation: Juxtaposing conflicting perspectives and resolving tensions between authors"
      ],
      "5": [
        "Commentary depth: Linking evidence directly to the thesis through thorough analytical explanations of mechanism",
        "Avoiding the summary trap: Distinguishing pure descriptive summary from rigorous rhetorical analysis"
      ],
      "6": [
        "Stylistic choices: Diction, sentence variety, periodic sentences, and parallel structure enhancing persuasion",
        "Tone and tonal shifts: Identifying how shifts in authorial mood, irony, or urgency steer audience perception"
      ],
      "7": [
        "Complex argumentation: Incorporating qualifications, concessions, and rebuttals to address alternative perspectives",
        "Stasis theory and Toulmin analysis: Examining warrants, backings, and grounds in multifaceted arguments"
      ],
      "8": [
        "Figurative language in rhetoric: Functional metaphors, extended analogies, and imagery serving argumentative goals",
        "Pervasive rhetorical devices: Anaphora, antithesis, rhetorical questions, and juxtaposition in historic speeches"
      ],
      "9": [
        "Sophistication of thought: Contextualizing arguments within broader historical or philosophical frameworks",
        "Stylistic maturity: Writing with vivid prose, voice consistency, and compelling rhetorical impact"
      ]
    }
  },
  psychology: {
    general: [
      "Article Analysis Question (AAQ): Dissecting peer-reviewed empirical research articles (hypothesis, operational definitions, ethical guidelines, quantitative data interpretation, generalizability)",
      "Evidence-Based Question (EBQ): Synthesizing multiple empirical psychological research studies to construct a defensible claim supported by cited evidence and explained with distinct CED concepts",
      "Research methodology: Distinguishing experimental manipulation (IV, DV, random assignment, control group) from non-experimental designs (correlational, case study, naturalistic observation, meta-analysis)",
      "Statistical reasoning: Interpreting mean, median, range, standard deviation, scatterplots, correlation coefficients (-1.0 to +1.0), and p-value statistical significance (p < 0.05)",
      "Ethical standards: APA guidelines including informed consent, protection from harm/discomfort, confidentiality/anonymity, deception justification, and comprehensive post-study debriefing",
      "Generalizability & sampling: Explaining how representative random sampling determines population generalizability, distinguishing sample representativeness from mere sample size"
    ],
    units: {
      "1": [
        "Neuron structure & action potential: Resting membrane potential (-70mV), sodium influx depolarization, potassium efflux repolarization, refractory periods, and all-or-none law",
        "Synaptic neurotransmission: Neurotransmitter vesicle release, receptor binding, reuptake mechanisms, and agonistic vs antagonistic pharmacology (e.g. dopamine, serotonin, GABA, glutamate, acetylcholine)",
        "Endocrine system interactions: Hypothalamic-pituitary-adrenal (HPA) axis, cortisol stress response, and sympathetic vs parasympathetic nervous system autonomic balance",
        "Brain structure localization: Frontal lobe executive function/Broca's area, temporal lobe/Wernicke's area, parietal lobe somatosensory cortex, occipital visual cortex, hippocampus, amygdala, and cerebellum",
        "Split-brain research & neuroplasticity: Corpus callosum resection effects on contralateral sensory processing and hemispheric lateralization (Gazzaniga & Sperry)",
        "Sleep architecture & circadian rhythms: REM vs NREM sleep stages, EEG brain wave frequencies (beta, alpha, theta, delta), suprachiasmatic nucleus (SCN), and melatonin secretion"
      ],
      "2": [
        "Sensory transduction & absolute thresholds: Signal detection theory, Weber's law difference threshold (JND), sensory adaptation, and top-down vs bottom-up perceptual processing",
        "Visual & auditory pathways: Trichromatic vs opponent-process color vision theories, feature detectors, place theory vs frequency theory of pitch, and Gestalt perceptual grouping principles",
        "Memory stage model (Atkinson-Shiffrin): Sensory memory, working/short-term memory capacity (7±2 chunks), maintenance vs elaborative rehearsal, and long-term memory encoding",
        "Long-term memory taxonomy: Explicit declarative (episodic and semantic) vs implicit nondeclarative (procedural skills and classical conditioning), and hippocampal vs cerebellar storage",
        "Forgetting & memory retrieval: Proactive vs retroactive interference, serial position effect (primacy and recency), retrieval cues, context/state-dependent memory, and Elizabeth Loftus misinformation effect",
        "Problem solving & decision heuristics: Algorithms, representativeness and availability heuristics, confirmation bias, mental set, framing effects, and belief perseverance",
        "Theories of intelligence & testing: Spearman's general factor (g), Gardner's multiple intelligences, Sternberg's triarchic theory, test standardization, reliability, and content/construct validity"
      ],
      "3": [
        "Classical conditioning paradigms: Pavlovian unconditioned stimulus (UCS), unconditioned response (UCR), conditioned stimulus (CS), conditioned response (CR), acquisition, extinction, spontaneous recovery, generalization, and discrimination",
        "Operant conditioning mechanics: Thorndike's law of effect, Skinnerian positive/negative reinforcement vs positive/negative punishment, and schedules of reinforcement (FR, VR, FI, VI)",
        "Social-cognitive & observational learning: Bandura's Bobo doll experiment, vicarious reinforcement, mirror neuron systems, and self-efficacy beliefs",
        "Developmental cognitive stages (Piaget): Sensorimotor (object permanence), preoperational (egocentrism, lack of conservation), concrete operational, formal operational, and schema assimilation vs accommodation",
        "Psychosocial & moral development: Erikson's eight psychosocial crises (e.g. trust vs mistrust, identity vs role confusion) and Kohlberg's levels of moral reasoning (preconventional, conventional, postconventional)",
        "Attachment theory & parenting styles: Mary Ainsworth strange situation (secure, insecure-ambivalent, insecure-avoidant attachment), Harlow's contact comfort with surrogate mothers, and Baumrind's parenting styles (authoritative, authoritarian, permissive, neglectful)"
      ],
      "4": [
        "Attribution theory & social cognition: Fundamental attribution error (FAE), actor-observer bias, self-serving bias, just-world hypothesis, and false consensus effect",
        "Conformity, compliance & obedience: Asch line judgment conformity experiments, normative vs informational social influence, and Milgram obedience shock experiments",
        "Group dynamics & performance: Social facilitation, social loafing, deindividuation in crowds, group polarization, groupthink, and bystander effect / diffusion of responsibility",
        "Prejudice, discrimination & intergroup conflict: In-group bias, out-group homogeneity, scapegoat theory, stereotype threat, and Sherif's Robbers Cave superordinate goals",
        "Theories of emotion & motivation: James-Lange, Cannon-Bard, Schachter-Singer two-factor theory of emotion, Yerkes-Dodson arousal law, drive-reduction theory, and intrinsic vs extrinsic motivation",
        "Personality theories & assessment: Freud's psychoanalytic id/ego/superego and defense mechanisms, Rogers' humanistic unconditional positive regard, and the Big Five trait dimensions (OCEAN)"
      ],
      "5": [
        "Psychological disorder classification: DSM-5 diagnostic criteria, medical model vs biopsychosocial etiology, and labeling stigmas (Rosenhan study)",
        "Anxiety, obsessive-compulsive & trauma-related disorders: Generalized anxiety, panic disorder, specific phobias, agoraphobia, OCD obsessions vs compulsions, and PTSD symptoms",
        "Depressive & bipolar disorders: Major depressive disorder symptoms, learned helplessness (Seligman), cognitive triad (Beck), and bipolar I vs bipolar II cycling",
        "Schizophrenia spectrum: Positive symptoms (hallucinations, delusions) vs negative symptoms (flat affect, avolition), and the dopamine hypothesis / diathesis-stress model",
        "Evidence-based therapeutic modalities: Psychodynamic therapy, client-centered active listening, Cognitive Behavioral Therapy (CBT - cognitive restructuring), exposure therapies / systematic desensitization, and psychopharmacology",
        "Stress, health & psychoneuroimmunology: Selye's General Adaptation Syndrome (alarm, resistance, exhaustion), Type A vs Type B personality cardiac risks, coping mechanisms, and locus of control"
      ]
    }
  }
};

/**
 * Resolves subject category and unit key, returning a randomized, non-repeating
 * list of target archetypes for the generation session.
 * 
 * CRITICAL FIX: Safe fallback to general academic inquiry to prevent any cross-subject
 * calculus leakage when unknown or non-math subjects are selected.
 */
export function getGranularSubjectArchetypes(subject: string, unitOrTopic: string, count: number): string[] {
  const s = (subject || '').toLowerCase();
  const u = (unitOrTopic || '').toLowerCase();

  // SAFE DEFAULT: Fallback to subject-neutral academic inquiry, NEVER calculus!
  let bundle: ArchetypeBundle = AP_SUBJECT_ARCHETYPES.general_academic;

  if (s.includes('english') || s.includes('lang')) {
    bundle = AP_SUBJECT_ARCHETYPES.englishLang;
  } else if (s.includes('geography') || s.includes('aphg') || s.includes('human')) {
    bundle = AP_SUBJECT_ARCHETYPES.human_geography;
  } else if (s.includes('environmental') || s.includes('apes')) {
    bundle = AP_SUBJECT_ARCHETYPES.environmental_science;
  } else if (s.includes('principles') || s.includes('csp')) {
    bundle = AP_SUBJECT_ARCHETYPES.csp;
  } else if (s.includes('gov') || s.includes('politics')) {
    bundle = AP_SUBJECT_ARCHETYPES.government;
  } else if (s.includes('stat')) {
    bundle = AP_SUBJECT_ARCHETYPES.statistics;
  } else if (s.includes('calculus')) {
    if (s.includes('bc') || s.includes('calculus bc')) {
      bundle = AP_SUBJECT_ARCHETYPES.calculus_bc;
    } else {
      bundle = AP_SUBJECT_ARCHETYPES.calculus_ab;
    }
  } else if (s.includes('biology')) {
    bundle = AP_SUBJECT_ARCHETYPES.biology;
  } else if (s.includes('chemistry')) {
    bundle = AP_SUBJECT_ARCHETYPES.chemistry;
  } else if (s.includes('physics')) {
    bundle = AP_SUBJECT_ARCHETYPES.physics;
  } else if (s.includes('history') || s.includes('apush') || s.includes('euro') || s.includes('world')) {
    bundle = AP_SUBJECT_ARCHETYPES.history;
  } else if (s.includes('psych')) {
    bundle = AP_SUBJECT_ARCHETYPES.psychology;
  } else if (s.includes('econ')) {
    bundle = AP_SUBJECT_ARCHETYPES.economics;
  }

  // Detect unit number from unitOrTopic string (e.g. "Unit 3: Cultural Patterns" -> "3", "Period 5" -> "5")
  const unitMatch = u.match(/(?:unit|period|chapter|u|p)\s*([0-9]+)/i);
  const detectedUnit = unitMatch ? unitMatch[1] : null;

  // SPECIAL COLLEGE BOARD SECTION II REPLICA FOR AP CALCULUS BC (5, 6, 10, 15 FRQS)
  if ((s.includes('bc') || s.includes('calculus bc')) && !detectedUnit) {
    const bcCanonicalSix = [
      "[Part A - Calculator Active | Q1 Canonical Archetype] Rate In/Rate Out Accumulation & Tabular Modeling: Non-uniform data table or analytical rate model, average value formula, average rate of change with units, Riemann/trapezoidal sum, and Extreme Value Theorem absolute extrema via Candidates Test table.",
      "[Part A - Calculator Active | Q2 Canonical Archetype] BC Polar Curves or 2D Parametric Vector Motion: Polar area bounded between curves Area = (1/2)*int(r_1^2 - r_2^2) dtheta, extreme distance from coordinate axes, related rate dr/dt = (dr/dtheta)*(dtheta/dt) OR velocity <x'(t), y'(t)>, acceleration, speed, and total distance arc length.",
      "[Part B - No Calculator | Q3 Canonical Archetype] Contextual Differential Equations & Slope Fields: Solution curve sketch through initial condition, tangent line approximation, second derivative d^2y/dt^2 concavity justification for overestimate/underestimate, and separation of variables with particular solution.",
      "[Part B - No Calculator | Q4 Canonical Archetype] Graphical Analysis of f' & Accumulation Function: Graph of continuous f' consisting of semicircles and line segments, accumulation g(x) = int_c^x f(t)dt, FTC g'(x) = f(x), points of inflection where f' changes increasing/decreasing, and Candidates Test for absolute extrema on closed interval.",
      "[Part B - No Calculator | Q5 Canonical Archetype] Advanced BC Calculus: Euler's method 2-step table approximation, implicit differentiation d^2y/dx^2, Lagrange error bound, or improper integrals lim_{b->inf} int_a^b.",
      "[Part B - No Calculator | Q6 Canonical Archetype] The Signature BC Infinite Series & Taylor Polynomials: Ratio Test for interval of convergence with independent endpoint testing (AST / Harmonic comparison), term-by-term derivative f'(x) or integral, general term, geometric series sum S = a/(1 - r), and error bounds."
    ];

    if (count === 6) {
      return [...bcCanonicalSix];
    }

    if (count === 5) {
      // 2 Calculator Active (Q1, Q2) + 3 No Calculator (Q3, Q4, Q6 Series)
      return [bcCanonicalSix[0], bcCanonicalSix[1], bcCanonicalSix[2], bcCanonicalSix[3], bcCanonicalSix[5]];
    }

    if (count === 10) {
      // First 6 questions: Full authentic Section II exam (Q1 to Q6: 2 Calc Active + 4 No Calc)
      // Next 4 questions: Mixed repetition of canonical archetypes with fresh scenarios
      return [
        bcCanonicalSix[0],
        bcCanonicalSix[1],
        bcCanonicalSix[2],
        bcCanonicalSix[3],
        bcCanonicalSix[4],
        bcCanonicalSix[5],
        "[Part A - Calculator Active | Q1/Q2 Mixed Variation] Contextual Rate In/Rate Out Accumulation & Tabular Function with Average Value and Riemann Sums",
        "[Part A - Calculator Active | Q2 Mixed Variation] BC Polar Curves Bounded Area & Extreme Distance OR 2D Parametric Vector Motion & Arc Length",
        "[Part B - No Calculator | Q3/Q4 Mixed Variation] Differential Equations Separation of Variables with Particular Solution & Tangent Line Concavity",
        "[Part B - No Calculator | Q5/Q6 Mixed Variation] The Signature BC Infinite Series: Ratio Test Interval of Convergence, Independent Endpoint Analysis & Taylor Polynomials"
      ];
    }

    if (count === 15) {
      // 2 Full 6-question cycles + 3 mixed questions
      return [
        ...bcCanonicalSix,
        "[Part A - Calculator Active | Q1 Cycle 2 Variation] Contextual Rate Accumulation & Non-Uniform Table Modeling with EVT Candidates Test",
        "[Part A - Calculator Active | Q2 Cycle 2 Variation] BC Polar Curves Enclosed Area with Intersection Angles OR Parametric Particle Motion Speed & Distance",
        "[Part B - No Calculator | Q3 Cycle 2 Variation] Differential Equations Particular Solution via Separation of Variables & Slope Field Behavior",
        "[Part B - No Calculator | Q4 Cycle 2 Variation] Accumulation Function g(x) = int_c^x f(t)dt from Semicircles/Line Segments Graph with Sign Reversals",
        "[Part B - No Calculator | Q5 Cycle 2 Variation] Advanced BC Calculus: Euler's Method 2-Step Table, Implicit Second Derivative & Lagrange Remainder",
        "[Part B - No Calculator | Q6 Cycle 2 Variation] Power Series Term-by-Term Differentiation/Integration, Geometric Sum Formula & Alternating Error Bound",
        "[Part A - Calculator Active | Q1/Q2 High-Yield Synthesis] Non-Uniform Tabular Data Modeling with Average Rate Difference Quotient & Units",
        "[Part B - No Calculator | Q4 Graphical Synthesis] Derivative Graph Analysis, Inflection Points and Global Extrema Candidates Test Table",
        "[Part B - No Calculator | Q6 Series Mastery] Taylor/Maclaurin Polynomial Expansion with Ratio Test and AST Endpoint Convergence Verification"
      ];
    }

    // Default cycling if custom count
    const pool: string[] = [];
    while (pool.length < count) {
      pool.push(bcCanonicalSix[pool.length % bcCanonicalSix.length]);
    }
    return pool;
  }

  // SPECIAL COLLEGE BOARD SECTION II REPLICA FOR AP CHEMISTRY (5, 7, 10, 15 FRQS)
  if ((s.includes('chemistry') || s.includes('chem')) && !detectedUnit) {
    const chemCanonicalSeven = [
      "[Section II - Long FRQ 10 Points | Q1 Canonical Archetype] Solution Stoichiometry, Titration Curves & Buffer Equilibria: Weak acid/base titration curve, half-equivalence point where pH = pKa, Henderson-Hasselbalch buffer calculations, balanced net ionic equations, particulate drawings of spectator and conjugate pairs, and molarity calculations.",
      "[Section II - Long FRQ 10 Points | Q2 Canonical Archetype] Chemical Kinetics, Initial Rates & Reaction Mechanisms: Determining rate laws and rate constant k with units from initial rates data tables, zero/first/second order integrated rate law graphical linearity ([A], ln[A], 1/[A] vs time), multi-step elementary mechanisms with slow rate-determining step verification, and Maxwell-Boltzmann / Arrhenius activation energy with catalysts.",
      "[Section II - Long FRQ 10 Points | Q3 Canonical Archetype] Chemical Thermodynamics, Calorimetry & Equilibrium Systems: Constant-pressure coffee-cup calorimetry q = mc*Delta*T (strict 2 sig figs from Delta*T), molar enthalpy Delta*H_rxn = -q/n, Hess's Law or enthalpies of formation, standard entropy Delta*S microstates, Gibbs free energy Delta*G = Delta*H - T*Delta*S with kJ/J conversions, and equilibrium constant K_eq response to temperature shifts.",
      "[Section II - Short FRQ 4 Points | Q4 Canonical Archetype] Molecular Structure, Lewis Diagrams & Hybridization: Drawing optimal Lewis electron-dot diagrams minimizing nonzero formal charges, VSEPR electron-domain vs molecular geometries (trigonal pyramidal, seesaw, square planar, T-shaped), bond angle distortion from lone pair repulsions, hybridization (sp, sp2, sp3), and net molecular dipole moment vector cancellation.",
      "[Section II - Short FRQ 4 Points | Q5 Canonical Archetype] Gas Laws, Kinetic Molecular Theory & Intermolecular Forces: Ideal gas calculations PV = nRT, Dalton's law of partial pressures for gas collected over water (P_tot = P_gas + P_H2O), real gas deviations from ideality at high P / low T, and vapor pressure / boiling point ranking justified by electron cloud polarizability (more electrons/shells, NEVER citing molar mass alone).",
      "[Section II - Short FRQ 4 Points | Q6 Canonical Archetype] Electrochemistry, Galvanic Cells & Faraday's Law: Complete galvanic cell diagram (anode oxidation, cathode reduction, salt bridge ion flow: cations to cathode, anions to anode), standard cell potential E°_cell = E°_cathode - E°_anode (intensive property, NEVER multiplied), non-standard Nernst qualitative voltage shift, and electrolytic Faraday current stoichiometry I = q/t with electrode mass changes comparing both mole ratios and molar masses.",
      "[Section II - Short FRQ 4 Points | Q7 Canonical Archetype] Solubility Equilibria (K_sp) or Spectrophotometry & PES: Saturated solution molar solubility calculation from K_sp (pure solids strictly excluded from denominator), predicting precipitate formation (Q > K_sp criterion), common ion effect suppression of solubility, OR Beer-Lambert Law (A = epsilon*b*c) spectrophotometric calibration curve analysis and Photoelectron Spectroscopy (PES) subshell binding energy peaks."
    ];

    if (count === 7) {
      return [...chemCanonicalSeven];
    }

    if (count === 5) {
      // 3 Long FRQs (Q1, Q2, Q3) + 2 Short FRQs (Q4, Q5)
      return [chemCanonicalSeven[0], chemCanonicalSeven[1], chemCanonicalSeven[2], chemCanonicalSeven[3], chemCanonicalSeven[4]];
    }

    if (count === 10) {
      // First 7 questions: Full authentic Section II exam (Q1 to Q7: 3 Long + 4 Short)
      // Next 3 questions: Mixed repetition of canonical archetypes with fresh scenarios
      return [
        chemCanonicalSeven[0],
        chemCanonicalSeven[1],
        chemCanonicalSeven[2],
        chemCanonicalSeven[3],
        chemCanonicalSeven[4],
        chemCanonicalSeven[5],
        chemCanonicalSeven[6],
        "[Section II - Long FRQ Mixed Variation | Q1/Q3 Synthesis] Solution Stoichiometry, Weak Acid Buffers & Calorimetric Enthalpy of Neutralization",
        "[Section II - Short FRQ Mixed Variation | Q4/Q5 Synthesis] Lewis Structures, VSEPR Geometries, Bond Angles & Electron Cloud Polarizability / Intermolecular Forces",
        "[Section II - Short FRQ Mixed Variation | Q6/Q7 Synthesis] Electrochemistry Galvanic Cells, Salt Bridge Migration & K_sp Precipitation Equilibrium"
      ];
    }

    if (count === 15) {
      // 2 Full 7-question cycles (14 questions) + 1 mixed high-yield capstone question
      return [
        ...chemCanonicalSeven,
        "[Section II - Long FRQ Cycle 2 Variation | Q1] Gravimetric Precipitation Analysis, Redox Titration Curve & Particulate Solution Models",
        "[Section II - Long FRQ Cycle 2 Variation | Q2] Integrated Rate Laws Graphic Linearity, Intermediate vs Catalyst & Activation Energy Energy Profiles",
        "[Section II - Long FRQ Cycle 2 Variation | Q3] Hess's Law Enthalpy Cycle, Microstate Entropy Delta S, Gibbs Free Energy Delta G & Thermodynamic Favorability",
        "[Section II - Short FRQ Cycle 2 Variation | Q4] Resonance Contributors, Formal Charge Optimization, Molecular Dipoles & Hybridization",
        "[Section II - Short FRQ Cycle 2 Variation | Q5] Maxwell-Boltzmann Speed Distribution, Dalton's Partial Pressures & Ideal Gas Deviations",
        "[Section II - Short FRQ Cycle 2 Variation | Q6] Electrolytic Cell Stoichiometry, Faraday's Law Amperage Timing & Standard Cell Potentials",
        "[Section II - Short FRQ Cycle 2 Variation | Q7] Common Ion Effect Solubility Shift, pH-Dependent Hydroxide Dissolution & Q vs K_sp Verification",
        "[Section II - Synthesis Capstone | Q1/Q3/Q6 High-Yield Integration] Coupled Reactions, Free Energy Delta G° = -RT ln K = -nFE°, and Beer-Lambert Law Spectrophotometry"
      ];
    }

    // Default cycling if custom count
    const pool: string[] = [];
    while (pool.length < count) {
      pool.push(chemCanonicalSeven[pool.length % chemCanonicalSeven.length]);
    }
    return pool;
  }

  // SPECIAL COLLEGE BOARD SECTION II REPLICA FOR AP BIOLOGY (5, 6, 10, 15 FRQS)
  if ((s.includes('biology') || s.includes('bio')) && !detectedUnit) {
    const bioCanonicalSix = [
      "[Section II - Long FRQ 9 Points | Q1 Canonical Archetype] Interpreting and Evaluating Experimental Results: Experimental biological investigation with setup description and quantitative data table. Parts A (1 pt: identify/describe biological process or cellular component), B (3 pts: B1 identify dependent variable, B2 justify negative or positive control group mechanism, B3 describe experimental trend or relationship), C (3 pts: C1 identify independent variable, C2 identify specific experimental condition/group, C3 calculate rate of change, percent difference, or nucleotide-to-amino acid translation ratio), D (2 pts: D1 predict effect of environmental alteration or genetic mutation, D2 justify prediction using biochemical principles or feedback loops).",
      "[Section II - Long FRQ 9 Points | Q2 Canonical Archetype] Interpreting and Evaluating Experimental Results with Graphing: Quantitative laboratory study with sample means and standard error of the mean (±2 SE_x). Parts A (1 pt: describe chemical or cellular membrane property), B (4 pts: B1 determine appropriate graph type, B2 plot points/bars with accurate ±2 SE_x error bars, B3 label axes with units and consistent linear scaling, B4 interpret plotted relationship), C (2 pts: C1 identify critical quantitative threshold e.g. >50% response or peak activity, C2 predict physiological consequence of pathway inhibition), D (2 pts: D1 support or refute claim using statistical significance based on error bar overlap rule, D2 explain ecological or agricultural application).",
      "[Section II - Short FRQ 4 Points | Q3 Canonical Archetype] Scientific Investigation: Controlled biological experiment in ecology, physiology, or cell transport. Parts A (1 pt: describe ecological role, keystone species interaction, or transport mechanism), B (1 pt: identify negative control group and justify why it is necessary to isolate the variable), C (1 pt: state the null hypothesis strictly asserting that the independent variable has NO effect or NO difference on the dependent variable), D (1 pt: justify directional experimental modification or predict result if control is altered).",
      "[Section II - Short FRQ 4 Points | Q4 Canonical Archetype] Conceptual Analysis: Evolutionary biology, genetics, or cellular communication without extensive data tables. Parts A (1 pt: state genetic evidence of evolution strictly defined as a change in allele/gene frequency in a population over time), B (1 pt: explain mechanism of speciation or adaptation, e.g. geographic isolation leading to allopatric speciation and reproductive isolation), C (1 pt: predict effect of altered selective pressures, resource availability, or gene dosage), D (1 pt: justify prediction linking molecular/genetic mechanism to organismal/population phenotype).",
      "[Section II - Short FRQ 4 Points | Q5 Canonical Archetype] Analyze Model or Visual Representation: Visual diagram or biochemical model of enzyme kinetics, organelle structure, or cell signaling pathway. Parts A (1 pt: describe molecular interaction, e.g. enzyme active site shape and charge complementarity with substrate), B (1 pt: explain regulatory mechanism, e.g. allosteric noncompetitive inhibitor binding to non-active site causing conformational change), C (1 pt: identify intermediate, receptor, or organelle from visual model), D (1 pt: predict and explain denaturation or mutation consequences, e.g. extreme pH disrupting hydrogen/ionic bonds in tertiary structure).",
      "[Section II - Short FRQ 4 Points | Q6 Canonical Archetype] Analyze Data: Quantitative data presentation (gel electrophoresis, qPCR relative expression, flow cytometry, or box plot). Parts A (1 pt: identify baseline, median, or specific molecular marker from data/figure), B (1 pt: describe differences between groups or identify phenotypic patterns from gel bands/expression levels), C (1 pt: synthesize data across two figures or conditions to evaluate a scientific claim), D (1 pt: explain molecular or genetic mechanism linking observed molecular data to organism's phenotype or disease state)."
    ];

    if (count === 6) {
      return [...bioCanonicalSix];
    }

    if (count === 5) {
      // 2 Long FRQs (Q1, Q2) + 3 Short FRQs (Q3, Q4, Q5)
      return [bioCanonicalSix[0], bioCanonicalSix[1], bioCanonicalSix[2], bioCanonicalSix[3], bioCanonicalSix[4]];
    }

    if (count === 10) {
      // First 6 questions: Full authentic Section II exam (Q1 to Q6: 2 Long + 4 Short in order)
      // Next 4 questions: Mixed repetition of canonical archetypes with fresh scenarios
      return [
        bioCanonicalSix[0],
        bioCanonicalSix[1],
        bioCanonicalSix[2],
        bioCanonicalSix[3],
        bioCanonicalSix[4],
        bioCanonicalSix[5],
        "[Section II - Long FRQ Mixed Variation | Q1/Q2 Synthesis] Experimental Design & Data Interpretation: Cellular Respiration / Photosynthesis with Control Justification, Rate Calculation & Pathway Disruption",
        "[Section II - Long FRQ Mixed Variation | Q2 Synthesis] Quantitative Physiology & Signal Transduction with Error Bar Statistical Significance & Membrane Transport Properties",
        "[Section II - Short FRQ Mixed Variation | Q3/Q4 Synthesis] Scientific Investigation & Natural Selection: Null Hypothesis Formulation, Control Group Isolation & Allele Frequency Evolution",
        "[Section II - Short FRQ Mixed Variation | Q5/Q6 Synthesis] Biochemical Pathway Model & Expression Data: Enzyme Allosteric Regulation, Denaturation & Gel Electrophoresis / qPCR Phenotype Correlation"
      ];
    }

    if (count === 15) {
      // 2 Full 6-question cycles (12 questions) + 3 mixed high-yield capstone questions
      return [
        ...bioCanonicalSix,
        "[Section II - Long FRQ Cycle 2 Variation | Q1] Cellular Energy & Enzymatic Inhibition: Kinetic Data, Negative Control Mechanism & Amino Acid Translation Math",
        "[Section II - Long FRQ Cycle 2 Variation | Q2] Plant Phototropism / Transpiration: Standard Error (±2 SE_x) Overlap Significance, Stomatal Regulation & Ecological Impact",
        "[Section II - Short FRQ Cycle 2 Variation | Q3] Ecological Trophic Cascade: Keystone Species Removal, Null Hypothesis & Experimental Control Isolation",
        "[Section II - Short FRQ Cycle 2 Variation | Q4] Population Genetics & Gene Flow: Bottleneck / Founder Effect, Allele Frequency Shift & Reproductive Isolation",
        "[Section II - Short FRQ Cycle 2 Variation | Q5] Signal Transduction Cascade: G-Protein Coupled Receptor (GPCR) Phosphorylation Model & Second Messenger Amplification Disruption",
        "[Section II - Short FRQ Cycle 2 Variation | Q6] Molecular Genetics & Gene Expression: Operon / Transcription Factor Data, qPCR Relative Fold Change & Phenotypic Justification",
        "[Section II - Synthesis Capstone | Q1/Q2 Experimental Mastery] Dual Variable Experimental Design, Error Bar Overlap Rule & Feedback Loop Regulation",
        "[Section II - Synthesis Capstone | Q3/Q4 Evolutionary Ecology] Null Hypothesis Formulation, Natural Selection Pressure & Allele Frequency Trajectory",
        "[Section II - Synthesis Capstone | Q5/Q6 Molecular Regulation] Allosteric Enzyme Kinetics, Denaturation & Genotype-Phenotype Correlation"
      ];
    }

    // Default cycling if custom count
    const pool: string[] = [];
    while (pool.length < count) {
      pool.push(bioCanonicalSix[pool.length % bioCanonicalSix.length]);
    }
    return pool;
  }

  // SPECIAL COLLEGE BOARD SECTION II REPLICA FOR AP PHYSICS 1: ALGEBRA-BASED (4, 5, 10, 15 FRQS)
  // 100% AUTHENTIC 2025/2026 REVAMP (4 Questions, 40 Points, 100 Minutes)
  if ((s.includes('physics 1') || s.includes('phys')) && !detectedUnit) {
    const physCanonicalFour = [
      "[Section II - FRQ 10 Points | Q1 Canonical Archetype] Mathematical Routines (MR): Kinematics, Linear Momentum & Inelastic Collisions, or Fluids. Multi-step algebraic derivation starting strictly from fundamental laws or reference equations (e.g. p_i = p_f or Sigma F = ma or Delta K = K_f - K_i). Includes component sketches (horizontal/vertical velocity v_x, v_y vs time or momentum p_x vs time) and qualitative physical justification (internal vs external forces, why momentum remains constant, or why narrower nozzle increases maximum height).",
      "[Section II - FRQ 12 Points | Q2 Canonical Archetype] Translation Between Representations (TBR): Conservation of Mechanical Energy, Incline Dynamics & Spring Mechanics. Energy bar charts (LOL diagrams) where the sum of bars across all positions strictly equals total mechanical energy (e.g. 12*E_0). Multi-step derivation of spring constant k or velocity in terms of M, theta, D with incline geometry Delta y = Delta x * sin(theta). Graphical sketches of total mechanical energy E (horizontal continuous line) and gravitational potential energy U_g (linear decreasing line) vs position, followed by speed comparison justified by energy curve relationships.",
      "[Section II - FRQ 10 Points | Q3 Canonical Archetype] Experimental Design and Analysis (LAB): Torque, Rotational Dynamics, Friction, or SHM with Limited Lab Equipment. Part A: Experimental procedure to collect data for unknown quantity (mass m_0 or friction coefficient mu_k) using only provided apparatus (meterstick, spring scale, photogate) with explicit steps to reduce experimental uncertainty (repeated trials across multiple positions). Part B: Analytical equation linearization (identifying vertical and horizontal axes so slope yields target quantity). Part C: Constructing scatter plot on grid with BOTH variable names AND matching units (e.g. F_T (N) and 1/sin(theta) or v^2 (m^2/s^2) and d (m)), linear scaling, and drawing a smooth single straight line of best fit. Part D: Calculating experimental value strictly from two coordinates on the drawn best-fit line.",
      "[Section II - FRQ 8 Points | Q4 Canonical Archetype] Qualitative/Quantitative Translation (QQT): Fluids (Archimedes Buoyancy & Density) or Rotational Dynamics (Comparative Rotational Inertia & Torque). Part A: Qualitative physical claim (e.g. a_1 < a_2 or omega_Y > omega_X) with thorough qualitative justification referencing ALL forces or torques without mathematical equations. Part B: Rigorous symbolic derivation starting from Newton's Second Law in translational form (Sigma F = m*a -> F_b - mg = m*a) or rotational form (tau_net = I*alpha -> F_0*r_0 = I*alpha) for initial acceleration or angular speed. Part C: Consistency bridge evaluating functional dependence ('directly proportional', 'numerator', 'inverse relationship') to evaluate whether the Part B mathematical derivation agrees with the Part A qualitative claim."
    ];

    if (count === 4) {
      return [...physCanonicalFour];
    }

    if (count === 5) {
      // 4 Canonical FRQs (Q1 MR, Q2 TBR, Q3 LAB, Q4 QQT) + 1 High-Yield Synthesis Question
      return [
        physCanonicalFour[0],
        physCanonicalFour[1],
        physCanonicalFour[2],
        physCanonicalFour[3],
        "[Section II - Synthesis Capstone | Q1/Q4 High-Yield Integration] Angular Momentum & Torque-Impulse: Disk vs Hoop Rotational Acceleration, Work-Energy Comparison & Paragraph-Length Response Justification"
      ];
    }

    if (count === 10) {
      // First 4 questions: Full authentic Section II exam (Q1 to Q4 in exact order)
      // Next 6 questions: Mixed repetition of canonical archetypes with fresh scenarios
      return [
        physCanonicalFour[0],
        physCanonicalFour[1],
        physCanonicalFour[2],
        physCanonicalFour[3],
        "[Section II - MR Mixed Variation | Q1 Synthesis] Projectile Water Droplet Trajectory: Component Velocity Sketches, Maximum Height Derivation & Volume Flow Rate Continuity",
        "[Section II - TBR Mixed Variation | Q2 Synthesis] Elastic Collision & Center of Mass Position-Time Graphs: Momentum Vector Bars, Center of Mass Line Continuity & Impulse Equality",
        "[Section II - LAB Mixed Variation | Q3 Synthesis] Inclined Rough Ramp Photogate Investigation: Equation Linearization v^2 = 2g(sin(theta) - mu_k*cos(theta))d, Grid Best-Fit Line & Friction Analysis",
        "[Section II - QQT Mixed Variation | Q4 Synthesis] Rotational Dynamics of Wrapped Axle Toys: Rotational Inertia Comparison, Work-Energy Derivation & Functional Dependence",
        "[Section II - MR/TBR Hybrid | Rotation & Energy] Hinged Beam Static Equilibrium: Tension Angle Variation, Torque Form Newton's Second Law & Angular Speed vs Time Curve",
        "[Section II - QQT Mixed Variation | Fluids & Gravity] Submerged Object in Immiscible Fluids: Buoyant Force vs Weight, Net Upward Acceleration & Density Dependence Justification"
      ];
    }

    if (count === 15) {
      // 3 Full 4-question cycles (12 questions) + 3 mixed high-yield capstone questions
      return [
        ...physCanonicalFour,
        "[Section II - MR Cycle 2 Variation | Q1] Horizontal Spring-Cart System Dropped Mass: Momentum Continuity Graph, Final Velocity Derivation & Kinetic Energy Dissipation",
        "[Section II - TBR Cycle 2 Variation | Q2] Ramp-Spring Mechanical Energy Transformation: LOL Bar Charts (Total 12*E_0), Spring Constant Derivation & Speed Comparison",
        "[Section II - LAB Cycle 2 Variation | Q3] Meterstick Balance Investigation: Experimental Uncertainty Reduction, Force vs Distance Linearization & Mass Determination from Slope",
        "[Section II - QQT Cycle 2 Variation | Q4] Planetary Gravitational Field & Simple Pendulum: Work Done Comparison, Restoring Torque & Length-Dependent Period",
        "[Section II - MR Cycle 3 Variation | Q1] Two Colliding Disks on Air Track: Momentum-Time Graph, Kinetic Energy Loss Derivation & Action-Reaction Impulse Equality",
        "[Section II - TBR Cycle 3 Variation | Q2] Vertical Circular Track Loop: Minimum Release Height Derivation, Normal Force Zero Condition & Mechanical Energy vs Height",
        "[Section II - LAB Cycle 3 Variation | Q3] Simple Harmonic Oscillator with Force Sensor: Spring Constant Determination, Velocity-Time & Force-Time Graph Impulse Estimation",
        "[Section II - QQT Cycle 3 Variation | Q4] Fluid Buoyancy Acceleration in Stratified Liquids: Density Proportionality Claim, Newton's 2nd Law Derivation & Functional Link",
        "[Section II - Synthesis Capstone | Experimental Mastery] Linearization Protocol, Grid Scaling with Units & Slope-to-Mass Error Propagation",
        "[Section II - Synthesis Capstone | Rotational Mechanics] Angular Momentum Conservation, Torque-Impulse Theorem & Rolling Without Slipping",
        "[Section II - Synthesis Capstone | Multi-System Energy] Work-Energy Theorem, LOL Energy Bar Conservation & Non-Conservative Energy Dissipation"
      ];
    }

    // Default cycling if custom count
    const pool: string[] = [];
    while (pool.length < count) {
      pool.push(physCanonicalFour[pool.length % physCanonicalFour.length]);
    }
    return pool;
  }

  // SPECIAL COLLEGE BOARD SECTION II REPLICA FOR AP ENGLISH LANGUAGE & COMPOSITION (3, 5, 10, 15 ESSAYS)
  if ((s.includes('english') || s.includes('lang')) && !detectedUnit) {
    const langCanonicalThree = [
      "[Section II - Q1 Synthesis Essay | 6 Points] Comprehensive Source Synthesis: 6 Multi-Perspective Sources (A-F) with Qualitative Data/Table, Defensible Thesis, Integration of >= 3 Sources & Nuanced Line of Reasoning",
      "[Section II - Q2 Rhetorical Analysis Essay | 6 Points] Rhetorical Situation & Authorial Strategy: Nonfiction Text Excerpt (700-1000 words), Speaker-Audience-Exigence Analysis, Multiple Rhetorical Choices & Functional Commentary",
      "[Section II - Q3 Argument Essay | 6 Points] Philosophical / Cultural Claim Argument: Provocative Quotation, Defensible Position, Layered Evidence from History/Literature/Society & Toulmin/Stasis Line of Reasoning"
    ];

    if (count === 3) {
      return [...langCanonicalThree];
    }

    if (count === 5) {
      // Full authentic Section II exam (Q1 to Q3 in order) + 2 high-yield mixed variations
      return [
        langCanonicalThree[0],
        langCanonicalThree[1],
        langCanonicalThree[2],
        "[Section II - Synthesis Mixed Variation | Q1 Synthesis] Science & Technology Policy Debate: 6 Diverse Sources with Data Table, Ethical Implications & Environmental Trade-Offs",
        "[Section II - Rhetorical Analysis Mixed Variation | Q2 Analysis] Historical Civil Rights & Identity Memoir: Nonfiction Excerpt, Tone Shifts, Juxtaposition & Audience Receptivity"
      ];
    }

    if (count === 10) {
      // First 3 questions: Full authentic Section II exam (Q1 to Q3 in exact order)
      // Next 7 questions: Mixed repetition of canonical archetypes with fresh scenarios
      return [
        langCanonicalThree[0],
        langCanonicalThree[1],
        langCanonicalThree[2],
        "[Section II - Synthesis Mixed Variation | Q1 Synthesis] Environmental Conservation vs Urban Infrastructure: 6 Multi-Perspective Sources with Quantitative Survey Breakdown",
        "[Section II - Rhetorical Analysis Mixed Variation | Q2 Analysis] Contemporary Public Address / Op-Ed: Rhetorical Situation, Exemplification, Extended Analogy & Call to Action",
        "[Section II - Argument Mixed Variation | Q3 Argument] Cultural Value of Solitude vs Interconnected Community: Non-Binary Claim with Literary & Historical Evidence",
        "[Section II - Synthesis Mixed Variation | Q1 Synthesis] Digital Automation & the Future of Labor: Policy Briefs, Economic Wage Data & Technological Vulnerability Analysis",
        "[Section II - Rhetorical Analysis Mixed Variation | Q2 Analysis] Literary Acceptance Speech / Commencement: Metaphorical Imagery, Self-Deprecation & Philosophical Reflection",
        "[Section II - Argument Mixed Variation | Q3 Argument] Optimism in Adversity vs Pragmatic Realism: Stasis Theory Line of Reasoning with Contemporary & Societal Case Studies",
        "[Section II - Synthesis Mixed Variation | Q1 Synthesis] Public Health & Circadian Wellness: Scientific Studies, Corporate Policies & Statistical Demographic Charts"
      ];
    }

    if (count === 15) {
      // 4 Full 3-question cycles (12 questions) + 3 mixed high-yield capstone questions
      return [
        ...langCanonicalThree,
        "[Section II - Synthesis Cycle 2 Variation | Q1] Space Exploration & Space Debris Management: Commercial vs Defense Satellites Data Chart, Liability Treaties & 3+ Sources",
        "[Section II - Rhetorical Analysis Cycle 2 Variation | Q2] Native American Reservation Culture Excerpt: Ethos Construction, Historical Allusions & Juxtaposition Analysis",
        "[Section II - Argument Cycle 2 Variation | Q3] Material Wealth vs Narrative Fulfillment: Defensible Thesis, Personal Anecdote & Toulmin Qualification",
        "[Section II - Synthesis Cycle 3 Variation | Q1] Navigation Software & Algorithmic Traffic: Municipal Regulations, Spatial Memory Impact Graph & 6 Sources",
        "[Section II - Rhetorical Analysis Cycle 3 Variation | Q2] Immigrant Identity & Linguistic Assimilation Memoir: Second-Person Direct Address, Irony & Emotional Resonance",
        "[Section II - Argument Cycle 3 Variation | Q3] Present-Moment Awareness vs Future Planning: Multi-Claim Line of Reasoning with Historical & Philosophical Parallels",
        "[Section II - Synthesis Cycle 4 Variation | Q1] Historic Building Preservation vs Green Urbanism: Economic Incentives, Architectural Heritage & Survey Visual Chart",
        "[Section II - Rhetorical Analysis Cycle 4 Variation | Q2] Ecological Literacy & Dirt Engagement Op-Ed: Sensory Imagery, Personification & Indigenous Ancestral Legacy",
        "[Section II - Argument Cycle 4 Variation | Q3] The Value of Exploring the Unknown: Intellectual Curiosity vs Comfort Zone with Science & Literature Evidence",
        "[Section II - Synthesis Capstone | Cross-Disciplinary Mastery] 6-Source Synthesis with Economic Multi-Line Chart, Concession Rebuttal & Sophistication Row C",
        "[Section II - Rhetorical Analysis Capstone | High-Stakes Speech] Presidential Address Rhetoric, Complex Tensions, Anaphora & Sophistication Row C",
        "[Section II - Argument Capstone | Philosophical Nuance] Exploring Tensions Between Competing Societal Virtues, Complex Stasis Line of Reasoning & Sophistication Row C"
      ];
    }

    // Default cycling if custom count
    const pool: string[] = [];
    while (pool.length < count) {
      pool.push(langCanonicalThree[pool.length % langCanonicalThree.length]);
    }
    return pool;
  }

  // SPECIAL COLLEGE BOARD SECTION II REPLICA FOR AP PSYCHOLOGY (2, 5, 10, 15 FRQS)
  // Official New Format: Exactly 2 Questions | 14 Points Total | 70 Minutes
  // Question 1: Article Analysis Question (AAQ) [7 Points] (Parts A-F)
  // Question 2: Evidence-Based Question (EBQ) [7 Points] (3 Empirical Sources, Parts A-C)
  if (s.includes('psych') && !detectedUnit) {
    const psychCanonicalTwo = [
      "[Section II - Q1 Article Analysis Question (AAQ) | 7 Points] Empirical Research Analysis: Full peer-reviewed article summary with authentic scenario, sample, and quantitative findings. Part A (Research Design: Experiment vs Correlational/Case Study/Observation), Part B (Operational Definition of specific variable), Part C (Statistical Interpretation: quantitative finding, mean/difference direction, or p-value significance in context), Part D (Ethical Guideline: APA standard explicitly cited in text), Part E (Generalizability: Target population characteristics & representativeness - NOT sample size!), Part F (Argumentation with Psychological Concept: 2 Points - Point 1 for citing specific research finding + Point 2 for explaining how it supports or contradicts a designated psychological concept from the CED).",
      "[Section II - Q2 Evidence-Based Question (EBQ) | 7 Points] Multi-Source Psychological Synthesis: 3 Empirical Research Summaries (Source 1, Source 2, Source 3) with methodologies, participant details, and statistical findings. Part A (Defensible Claim: Articulate an overarching scientific claim responding to the prompt), Part B(i) (Evidence: Specific empirical finding from Source 1 or 2 with citation), Part B(ii) (Reasoning with Concept: Link evidence to claim + apply an authentic AP Psychology CED Concept - 2 Points), Part C(i) (Different Evidence: Specific empirical finding from a DIFFERENT source with citation), Part C(ii) (Reasoning with a DIFFERENT Psychological Concept: Link new evidence to claim + apply a DISTINCT second AP Psychology CED Concept - 2 Points)."
    ];

    if (count === 2) {
      return [...psychCanonicalTwo];
    }

    if (count === 5) {
      // Full authentic Section II exam (Q1 AAQ + Q2 EBQ in order) + 3 mixed variations across CED units
      return [
        psychCanonicalTwo[0],
        psychCanonicalTwo[1],
        "[Section II - Article Analysis Question (AAQ) Mixed Variation | Q1 AAQ 7 Pts] Cognitive & Biological Research Study: Prefrontal cortex activation and sleep deprivation on episodic memory retrieval, with Parts A-F (Method, Operational Definition, Statistical Mean Difference & SD, APA Informed Consent, Representative Adolescent Sample, and Retrieval Cues Concept Application).",
        "[Section II - Evidence-Based Question (EBQ) Mixed Variation | Q2 EBQ 7 Pts] Social & Developmental Psychology Dossier: 3 Empirical Research Summaries on social media usage, peer conformity, and self-esteem across adolescent cohorts. Prompt: How do digital peer interactions affect adolescent identity formation? Parts A, B(i), B(ii) (Normative Social Influence), C(i), C(ii) (Erikson's Identity vs Role Confusion).",
        "[Section II - Article Analysis Question (AAQ) Mixed Variation | Q1 AAQ 7 Pts] Clinical & Health Psychology Study: Double-blind clinical trial comparing Cognitive Behavioral Therapy (CBT) vs Mindfulness-Based Stress Reduction for generalized anxiety, with Parts A-F (Experimental Design, Anxiety Metric Operationalization, p-value Interpretation, Deception/Debriefing, College Student Generalizability Limit, and Diathesis-Stress Model Application)."
      ];
    }

    if (count === 10) {
      // First 2 questions: Full authentic Section II exam (Q1 AAQ + Q2 EBQ in exact order)
      // Next 8 questions: Alternating mixed cycles of AAQ and EBQ across all 5 CED units
      return [
        psychCanonicalTwo[0],
        psychCanonicalTwo[1],
        "[Section II - AAQ Cycle 2 | Q1 AAQ 7 Pts] Unit 1 Biological Bases: Research article on hippocampal neurogenesis and aerobic exercise in middle-aged adults; Parts A-F (Correlational vs Quasi-Experimental, Spatial Memory Maze Operationalization, Correlation Coefficient r interpretation, Ethics, Community Volunteer Generalizability, and Long-Term Potentiation concept).",
        "[Section II - EBQ Cycle 2 | Q2 EBQ 7 Pts] Unit 2 Cognition & Intelligence: 3 Empirical Research Summaries on bilingualism, working memory capacity, and cognitive flexibility across lifespan. Prompt: Evaluate the extent to which dual-language acquisition alters executive cognitive function. Parts A, B(i), B(ii) (Selective Attention), C(i), C(ii) (Cognitive Reserve).",
        "[Section II - AAQ Cycle 3 | Q1 AAQ 7 Pts] Unit 3 Development & Learning: Controlled experiment on variable ratio vs fixed interval gamified token reinforcement in elementary school mathematics engagement; Parts A-F (Independent/Dependent Variables, Engagement Operational Definition, Bar Graph / Mean Rate Interpretation, Parental Consent, Socioeconomic Generalizability, and Operant Extinction concept).",
        "[Section II - EBQ Cycle 3 | Q2 EBQ 7 Pts] Unit 4 Social Psychology & Motivation: 3 Empirical Summaries on intrinsic motivation, performance-contingent rewards, and academic self-efficacy in secondary education. Prompt: Analyze how external incentives impact intrinsic task persistence. Parts A, B(i), B(ii) (Overjustification Effect), C(i), C(ii) (Locus of Control).",
        "[Section II - AAQ Cycle 4 | Q1 AAQ 7 Pts] Unit 5 Mental & Physical Health: Randomized controlled study on virtual reality graded exposure therapy vs pharmacotherapy for specific arachnophobia; Parts A-F (Research Method, Subjective Distress Units Operationalization, Standard Deviation & Effect Size, Ethical Debriefing, Urban Clinical Sample Generalizability, and Systematic Desensitization concept).",
        "[Section II - EBQ Cycle 4 | Q2 EBQ 7 Pts] Unit 1 & 4 Stress & Interpersonal Health: 3 Research Summaries on social support systems, oxytocin release, and cardiovascular recovery following acute psychological stress. Prompt: Assess how close social bonds mitigate the physiological stress response. Parts A, B(i), B(ii) (General Adaptation Syndrome), C(i), C(ii) (Sympathetic Nervous System).",
        "[Section II - AAQ Master Capstone | Q1 AAQ 7 Pts] Cross-Unit Synthesis Study: Longitudinal study on early childhood attachment security (Strange Situation) predicting adult emotional resilience and HPA-axis cortisol reactivity; Parts A-F (Longitudinal Design, Attachment Security Operationalization, Scatterplot / Statistical Significance, Protection from Harm, Representativeness, and Epigenetics concept).",
        "[Section II - EBQ Master Capstone | Q2 EBQ 7 Pts] Comprehensive Synthesis Dossier: 3 Multidisciplinary Studies on sleep restriction, emotional dysregulation, and amygdala reactivity in shift workers. Prompt: Evaluate how chronic sleep debt influences socio-emotional decision making. Parts A, B(i), B(ii) (Circadian Rhythm Disruption), C(i), C(ii) (Heuristics / Availability Bias)."
      ];
    }

    if (count === 15) {
      // 15 Questions: Full authentic alternating cycles of AAQ and EBQ across distinct research scenarios
      return [
        ...psychCanonicalTwo,
        "[Section II - AAQ Cycle 2 | Q1 AAQ 7 Pts] Neuroimaging Study on Semantic vs Episodic Encoding: fMRI study comparing left prefrontal cortex activation during depth of processing tasks; Parts A-F (Method, Op Def of Recall Accuracy, p-value < 0.01 Statistical Finding, IRB Approval, College Student Sample Limit, Levels of Processing concept).",
        "[Section II - EBQ Cycle 2 | Q2 EBQ 7 Pts] Cognitive Bias & Financial Risk Dossier: 3 Empirical Studies on framing effects, loss aversion, and anchoring in consumer decisions. Prompt: How do cognitive heuristics shape economic risk-taking? Parts A, B(i), B(ii) (Framing Effect), C(i), C(ii) (Confirmation Bias).",
        "[Section II - AAQ Cycle 3 | Q1 AAQ 7 Pts] Classical Conditioning in Taste Aversion: Animal model study on Garcia effect and evolutionary preparedness with radiation-induced nausea; Parts A-F (Experimental Design, Fluid Intake Operationalization, Latency Time Data Interpretation, Animal Welfare Guidelines, Cross-Species Generalizability, Biological Preparedness concept).",
        "[Section II - EBQ Cycle 3 | Q2 EBQ 7 Pts] Parenting Styles & Adolescent Autonomy: 3 Studies on authoritative vs authoritarian parenting, emotional self-regulation, and academic achievement. Prompt: Evaluate the impact of parental control styles on adolescent psychological adjustment. Parts A, B(i), B(ii) (Authoritative Parenting), C(i), C(ii) (External Locus of Control).",
        "[Section II - AAQ Cycle 4 | Q1 AAQ 7 Pts] Social Facilitation in Athletic Performance: Field experiment observing novice vs expert swimmers with audience present; Parts A-F (Naturalistic / Quasi-Experimental, Lap Time Operationalization, Interaction Effect Graph Interpretation, Informed Consent Waiver, Elite Athlete Representativeness, Yerkes-Dodson Law concept).",
        "[Section II - EBQ Cycle 4 | Q2 EBQ 7 Pts] Intergroup Conflict & Prejudice Reduction: 3 Empirical Studies on jigsaw classroom cooperative learning, contact hypothesis, and implicit bias. Prompt: Analyze the conditions under which structured intergroup cooperation decreases prejudicial attitudes. Parts A, B(i), B(ii) (Superordinate Goals), C(i), C(ii) (In-Group Favoritism).",
        "[Section II - AAQ Cycle 5 | Q1 AAQ 7 Pts] Pharmacotherapy vs Psychotherapy in Depression: Clinical trial examining SSRIs vs Cognitive Behavioral Therapy on Hamilton Depression Rating Scale scores; Parts A-F (Double-Blind Clinical Trial, Score Reduction Operationalization, Standard Deviation Overlap, Placebo Control Ethics, Outpatient Generalizability, Neuroplasticity concept).",
        "[Section II - EBQ Cycle 5 | Q2 EBQ 7 Pts] Chronic Stress & Immune Function: 3 Studies on caregiver strain, telemetric heart rate variability, and natural killer cell suppression. Prompt: Synthesize how prolonged psychosocial stressors impair somatic health. Parts A, B(i), B(ii) (General Adaptation Syndrome), C(i), C(ii) (Cortisol / Endocrine Regulation).",
        "[Section II - AAQ Cycle 6 | Q1 AAQ 7 Pts] Eyewitness Testimony & Leading Questions: Laboratory experiment replicating post-event misinformation in automotive collision estimations; Parts A-F (Experimental Design, Speed Estimate Operationalization, F-Statistic / ANOVA Significance, Deception Debriefing, Community Sample Representativeness, Misinformation Effect concept).",
        "[Section II - EBQ Cycle 6 | Q2 EBQ 7 Pts] Motivation & Goal Setting in Workplace: 3 Studies on goal-setting theory, feedback loops, and extrinsic bonuses on creative problem solving. Prompt: Assess how goal specificity and incentive structures influence creative output. Parts A, B(i), B(ii) (Overjustification Effect), C(i), C(ii) (Self-Determination Theory).",
        "[Section II - AAQ Cycle 7 | Q1 AAQ 7 Pts] Circadian Clock Shift in High School Students: Quasi-experiment assessing 8:30 AM vs 7:30 AM school start times on adolescent sleep duration and mood; Parts A-F (Quasi-Experimental Design, Sleep Diary Operationalization, Pre-Post Mean Shift Interpretation, Student Assent/Parental Consent, District Generalizability, Melatonin Regulation concept).",
        "[Section II - EBQ Cycle 7 | Q2 EBQ 7 Pts] Altruism & Diffusion of Responsibility: 3 Studies on bystander intervention, emergency simulation, and perceived victim similarity. Prompt: Evaluate the factors that determine individual bystander responsiveness in urgent crises. Parts A, B(i), B(ii) (Bystander Effect / Diffusion of Responsibility), C(i), C(ii) (Empathy-Altruism Hypothesis).",
        "[Section II - Master Synthesis Capstone | Q2 EBQ 7 Pts] Comprehensive Multidisciplinary Synthesis: 3 Peer-Reviewed Studies spanning neurobiology, cognitive schemas, and social support in resilience following natural disaster trauma. Prompt: Defend a claim regarding the relative contributions of neurobiological stress regulation versus cognitive reframing in psychological post-traumatic resilience. Parts A, B(i), B(ii) (Cognitive Restructuring), C(i), C(ii) (Prefrontal Cortex Regulation)."
      ];
    }

    const pool: string[] = [];
    while (pool.length < count) {
      pool.push(psychCanonicalTwo[pool.length % psychCanonicalTwo.length]);
    }
    return pool;
  }

  // SPECIAL COLLEGE BOARD SECTION II REPLICA FOR AP COMPUTER SCIENCE A (4, 5, 10, 15 FRQS)
  // Official Format: Exactly 4 Questions | 90 Minutes (1 Hour 30 Minutes)
  // Question 1: Methods and Control Structures (Parts a & b, helper methods, iteration, conditionals)
  // Question 2: Class Design (complete class, private instance variables, constructor, public methods, execution trace table)
  // Question 3: Array / ArrayList (Data Analysis, 1D array/ArrayList, dual-pointer or nested traversal, object instantiation)
  // Question 4: 2D Arrays (matrix algorithms, grid traversal, self-pairing guard, neighbor analysis, bounds checking)
  if ((s.includes('computer science a') || s.includes('csa') || (s.includes('computer') && !s.includes('principles') && !s.includes('csp'))) && !detectedUnit) {
    const csaCanonicalFour = [
      "[Section II - Q1 Methods & Control Structures | 7-9 Points] Real-World Method & Algorithm Implementation: A provided Java class with helper methods and preconditions. Part (a): Implement helper method (e.g. searching/filtering available slots, calculating single unit usage, boundary comparisons) calling instance methods on instance variables; Part (b): Implement driver method using a loop to process a range of inputs/hours, calling part (a) method safely without redundant side effects, accumulating totals or finding conditional bonuses.",
      "[Section II - Q2 Class Design | 7-9 Points] Complete Java Class from Scratch: Design a complete new class modeling a real-world object/system (e.g. scoreboard, electronic text signer, liquid dispenser, step counter). Declare appropriate private instance variables (encapsulation), write public constructor header & initialization, and implement required public accessor and mutator methods conforming to a 3-column Sample Execution Trace Table. Proper String methods (.equals(), .substring(), .indexOf()) or numeric state mutation.",
      "[Section II - Q3 Array / ArrayList Data Analysis | 5-9 Points] 1D Array and ArrayList Processing: Reasoning about collections of custom objects. Writing constructor and/or analysis methods: traversing ArrayList<E>, filtering, instantiating new objects with the 'new' keyword, dual-pointer inward traversal from both ends, or nested iteration across two lists to match IDs and compare metrics without modifying original lists.",
      "[Section II - Q4 2D Arrays | 6-9 Points] 2D Matrix Algorithms & Spatial Grid Reasoning: Manipulating a 2D array (int[][] or Object[][]). Writing constructor/methods to traverse rows and columns (row-major), neighbor comparison (below vs right, or adjacent cells), row/column score calculation, or pair clearing algorithms with strict self-pairing guard ('!(r == row && c == col)' or 'r != row || c != col') and correct bounds checking."
    ];

    if (count === 4) {
      return [...csaCanonicalFour];
    }

    if (count === 5) {
      // 4 Canonical in order + 1 mixed variation
      return [
        ...csaCanonicalFour,
        "[Section II - Q4 2D Arrays Mixed Variation | 6-9 Points] Advanced 2D Grid Game / Puzzle: Traversal over a two-dimensional grid representing a labyrinth or terrain map; checking valid moves, computing obstacle density along a path, and returning optimal coordinate Location object."
      ];
    }

    if (count === 10) {
      // First 4 questions: Full canonical exam in exact order (Q1, Q2, Q3, Q4)
      // Next 6 questions: Mixed variations across the 4 archetypes with diverse real-world CS applications
      return [
        csaCanonicalFour[0],
        csaCanonicalFour[1],
        csaCanonicalFour[2],
        csaCanonicalFour[3],
        "[Section II - Q1 Methods & Control Cycle 2] Autonomous Vehicle Charging Station: Tracking battery charging bays, peak vs off-peak rate multipliers, and allocating available power without exceeding maximum amperage limits.",
        "[Section II - Q2 Class Design Cycle 2] Fitness Activity Monitor Class: Complete DailyTracker class tracking active calories, step milestones, and heart-rate zone intervals with private instance variables and execution trace table.",
        "[Section II - Q3 ArrayList Cycle 2] Healthcare Patient Triage Queue: Processing ArrayList<PatientRecord> objects, priority sorting by acuity level, and matching patients to available specialists without data destruction.",
        "[Section II - Q4 2D Array Cycle 2] Satellite Weather Imaging Matrix: 2D temperature/reflectance array; identifying storm clusters, calculating local average pixel intensities, and applying noise filtering masks.",
        "[Section II - Q1 Methods & Control Cycle 3] E-Commerce Inventory Restock Simulator: Warehouse shelf capacity calculations, conditional bulk order discounts, and shift delivery scheduling.",
        "[Section II - Q3 ArrayList Cycle 3] Flight Manifest & Seat Assignment: Managing ArrayList<Passenger> objects, grouping family reservations, and calculating baggage weight allocations."
      ];
    }

    if (count === 15) {
      // 15 Questions: Full repeating cycles of the 4 archetypes with diverse CS domains
      return [
        ...csaCanonicalFour,
        "[Section II - Q1 Methods & Control Cycle 2] Autonomous Fleet Telemetry: Monitoring vehicle battery ranges, route efficiency calculations, and calculating overtime bonuses during extreme weather shifts.",
        "[Section II - Q2 Class Design Cycle 2] E-Sports Tournament Scoreboard: Complete MatchScoreboard class tracking team turns, kill/death ratios, and lead change streaks with state encapsulation.",
        "[Section II - Q3 ArrayList Cycle 2] Library Media Catalog System: Filtering ArrayList<BookItem> by genre and publication decade, removing checked-out items safely without concurrent modification bugs.",
        "[Section II - Q4 2D Array Cycle 2] Urban Traffic Grid Flow: 2D congestion matrix; identifying bottleneck intersections and calculating average throughput along north-south vs east-west corridors.",
        "[Section II - Q1 Methods & Control Cycle 3] Smart Home Thermostat Energy Optimization: Power consumption tracking, peak tariff scheduling, and vacation mode eco-temp regulation.",
        "[Section II - Q2 Class Design Cycle 3] Bank Account Transaction Ledger: Complete AccountLedger class tracking running balances, overdraft penalty thresholds, and formatted statement string generation.",
        "[Section II - Q3 ArrayList Cycle 3] Genomic DNA Motif Search: Analyzing ArrayList<String> gene sequences, finding overlapping k-mers, and building consensus frequency tables.",
        "[Section II - Q4 2D Array Cycle 3] Forest Fire Spread Simulation: 2D grid of burn states; checking 4-directional adjacent neighbors and modeling probabilistic ignition front propagation.",
        "[Section II - Q1 Methods & Control Cycle 4] Hospital Bed Occupancy Dispatcher: Allocating intensive care units based on triage severity, shift staffing levels, and emergency overflow protocols.",
        "[Section II - Q2 Class Design Cycle 4] Audio Playlist Crossfader: Complete AudioTrack class managing track durations, volume fade curves, and gapless transition string generation.",
        "[Section II - Q4 2D Array Master Capstone] Autonomous Robot Rover Pathfinding: 2D elevation terrain map; finding path of least resistance from landing site to research station avoiding hazards."
      ];
    }

    const pool: string[] = [];
    while (pool.length < count) {
      pool.push(csaCanonicalFour[pool.length % csaCanonicalFour.length]);
    }
    return pool;
  }

  // SPECIAL COLLEGE BOARD SECTION II REPLICA FOR AP MACROECONOMICS (3, 5, 10, 15 FRQs)
  if ((s.includes('macro') || s.includes('economics') || s.includes('econ')) && !detectedUnit) {
    const macroCanonicalThree = [
      "[Section II - Q1 Long FRQ | 10 Points] Macroeconomic Equilibrium & Cascades: AD-AS or Phillips Curve Graph (Y1, PL1, YF or point X/Un), Long-run self-adjustment vs Fiscal/Private shock, Loanable funds market graph (r vs Q), Foreign Exchange (Forex) market graph (currency fraction), Capital & Financial Account (CFA) capital flows, and Balance of Payments identity (CA + CFA = 0)",
      "[Section II - Q2 Short FRQ | 5 Points] Monetary Policy Framework: Ample Reserves Banking System (Administered Rates / Interest on Reserves [IORB], Reserve Market Graph with horizontal floor, vertical SR) vs Limited Reserves (Open Market bond operations, Money Market graph), and bond price inverse relationship",
      "[Section II - Q3 Short FRQ | 5 Points] Macroeconomic Data & Multipliers: Production & Price Data Table across Year 1 and 2, Real vs Nominal GDP base year comparison, GDP Deflator, Spending Multiplier (1/(1-MPC)) & Minimum Change in Government Spending (Delta G = Output Gap / Multiplier with explicit work), and Automatic Stabilizers"
    ];

    if (count === 3) {
      return [...macroCanonicalThree];
    }

    if (count === 5) {
      // Full authentic Section II exam (Q1 to Q3 in order) + 2 high-yield mixed variations
      return [
        macroCanonicalThree[0],
        macroCanonicalThree[1],
        macroCanonicalThree[2],
        "[Section II - Long FRQ Mixed Variation | Q1 Long 10 Pts] Inflationary Gap Shock & Phillips Curve: SRPC & LRPC graph with point X, contractionary fiscal policy, loanable funds demand shift, currency appreciation & net exports decline",
        "[Section II - Short FRQ Mixed Variation | Q2 Short 5 Pts] Central Bank Open Market Operations in Limited Reserves: Central bank bond purchase/sale, Money Market nominal interest rate shift, interest-sensitive investment spending & aggregate demand effect"
      ];
    }

    if (count === 10) {
      // First 3 questions: Full authentic Section II exam (Q1 to Q3 in exact order)
      // Next 7 questions: Mixed repetition of canonical archetypes with fresh scenarios
      return [
        macroCanonicalThree[0],
        macroCanonicalThree[1],
        macroCanonicalThree[2],
        "[Section II - Long FRQ Cycle 2 | Q1 Long 10 Pts] Cost-Push Stagflation Shock: Negative SRAS supply shock, short-run price level surge, long-run wage adjustment, loanable funds crowding out, and forex currency depreciation",
        "[Section II - Short FRQ Cycle 2 | Q2 Short 5 Pts] Ample Reserves Contractionary Monetary Policy: Central bank raises Interest on Reserve Balances (IORB), Reserve Market policy rate shift, higher borrowing costs & bond price decline",
        "[Section II - Short FRQ Cycle 2 | Q3 Short 5 Pts] National Output Gap & Multipliers: Table with Consumer vs Capital Goods, GDP deflator inflation rate, Tax Multiplier vs Spending Multiplier, and progressive income tax automatic stabilizers",
        "[Section II - Long FRQ Cycle 3 | Q1 Long 10 Pts] Open Economy Tariff & Exchange Rate Shock: Domestic tariffs on trading partner, Forex currency supply shift and appreciation, net export reduction, and Balance of Payments CFA offset",
        "[Section II - Short FRQ Cycle 3 | Q2 Short 5 Pts] Limited Reserves Expansionary Policy: Central bank buys government bonds, commercial bank excess reserves expansion, Money Market graph, and real output expansion",
        "[Section II - Short FRQ Cycle 3 | Q3 Short 5 Pts] Labor Force Demographics & Multipliers: Civilian noninstitutional population, labor force participation rate, natural vs cyclical unemployment rate calculation, and fiscal policy gap closure",
        "[Section II - Master Capstone | Q1 Long 10 Pts] Comprehensive Macro Synthesis: Full-employment long-run equilibrium, residential construction shock, loanable funds real interest rate, international financial capital inflows, and employment impact"
      ];
    }

    if (count === 15) {
      // 5 Full 3-question cycles (15 questions) covering diverse scenarios
      return [
        ...macroCanonicalThree,
        "[Section II - Long FRQ Cycle 2 | Q1 Long 10 Pts] Inflationary Gap Shock: SRPC & LRPC graph with point X, contractionary fiscal policy, loanable funds demand shift, currency appreciation & net exports decline",
        "[Section II - Short FRQ Cycle 2 | Q2 Short 5 Pts] Ample Reserves Contractionary Policy: Central bank raises administered IORB rate, Reserve Market graph, borrowing cost increase & bond price drop",
        "[Section II - Short FRQ Cycle 2 | Q3 Short 5 Pts] Output Gap & Spending Multiplier: GDP Deflator calculation from table, 1/(1-MPC), minimum government spending reduction to close gap, automatic stabilizers",
        "[Section II - Long FRQ Cycle 3 | Q1 Long 10 Pts] Recessionary Gap & Fiscal Expansion: AD-AS graph with recessionary gap, government spending increase, loanable funds real interest rate rise, foreign capital inflow & currency appreciation",
        "[Section II - Short FRQ Cycle 3 | Q2 Short 5 Pts] Limited Reserves Open Market Operations: Central bank sells bonds, money market graph with leftward MS shift, nominal interest rate rise & investment spending drop",
        "[Section II - Short FRQ Cycle 3 | Q3 Short 5 Pts] Unemployment & Production Possibilities: Civilian population, labor force participation, cyclical unemployment, PPC graph with point inside curve, and discouraged worker effect",
        "[Section II - Long FRQ Cycle 4 | Q1 Long 10 Pts] Open Economy Tariff Shock: Imposition of tariffs, Forex supply curve shift and appreciation, net export contraction, and CA + CFA = 0 balance of payments offset",
        "[Section II - Short FRQ Cycle 4 | Q2 Short 5 Pts] Ample Reserves Expansionary Policy: Central bank decreases administered interest rates on reserves, Reserve Market graph, lower policy rate & bond price increase",
        "[Section II - Short FRQ Cycle 4 | Q3 Short 5 Pts] Base Year Economic Data Table: Real vs Nominal GDP calculation, price index, spending multiplier with MPC = 0.8, and government transfer payments",
        "[Section II - Long FRQ Capstone 1 | Q1 Long 10 Pts] Long-Run Self-Adjustment vs Policy: Economy below full employment, nominal wage deflation, SRAS rightward shift to LRAS, vs discretionary monetary policy comparison",
        "[Section II - Short FRQ Capstone 2 | Q2 Short 5 Pts] Central Bank Currency Intervention: Central bank buys/sells currency in forex market to maintain target exchange rate, and effect on domestic money supply",
        "[Section II - Short FRQ Capstone 3 | Q3 Short 5 Pts] Comprehensive Multipliers & Gap Analysis: Closed vs open economy multipliers, marginal propensity to save (MPS), crowding-out effect on private investment"
      ];
    }

    const pool: string[] = [];
    while (pool.length < count) {
      pool.push(macroCanonicalThree[pool.length % macroCanonicalThree.length]);
    }
    return pool;
  }

  // SPECIAL COLLEGE BOARD SECTION I PART B & SECTION II REPLICA FOR AP WORLD HISTORY: MODERN (WHAP)
  if ((s.includes('world history') || s.includes('whap') || (s.includes('world') && s.includes('history')) || (s.includes('history') && !s.includes('u.s.') && !s.includes('us') && !s.includes('euro'))) && !detectedUnit) {
    const whapCanonicalFive = [
      "[Section I Part B - SAQ 1 | 3 Points] Secondary Source Analysis (1200–2001): Scholarly historian excerpt analyzing global commercial networks, imperial consolidation, or environmental transformations. Parts (a) describe author's argument, (b) explain one historical development (1200–1750) supporting the argument, (c) explain one historical development refuting or qualifying the argument. ACE Method required.",
      "[Section I Part B - SAQ 2 | 3 Points] Primary Source / Visual Artifact Analysis (1200–2001): Written primary source excerpt (imperial decree, merchant diary, travelogue like Ibn Battuta / Marco Polo / Evliya Çelebi) OR Visual Artifact / Map. Parts (a) identify historical situation/context, (b) explain author's point of view, purpose, or intended audience (HIPP sourcing), (c) explain how source illustrates broader global historical process. ACE Method required.",
      "[Section I Part B - SAQ 3 | 3 Points] Non-Stimulus Conceptual / CCOT / Comparative Question: No stimulus. Parts (a) identify one similarity or continuity in political administration or trans-regional trade, (b) explain one difference or change over time resulting from cross-cultural interaction or state centralization, (c) explain one broader global consequence across Afro-Eurasia or the Americas. ACE Method required.",
      "[Section II Part A - DBQ | 7 Points] Document-Based Question (1450–2001): Comprehensive historical prompt with 7 distinct documents (mix of official state edicts, merchant accounts, diplomatic dispatches, indigenous testimonies, and visual/cultural artifacts). College Board 7-Point Rubric: Thesis/Claim (1 pt), Contextualization (1 pt), Evidence from 4+ Docs (2 pts), Outside Evidence (1 pt), Sourcing/HIPP for 2+ Docs (1 pt), Complex Understanding (1 pt).",
      "[Section II Part B - LEQ | 6 Points] Long Essay Question (Choice prompt across Units 1–4, Units 3–6, or Units 7–9): Essay prompt requiring historical reasoning (causation, comparison, or continuity and change over time). College Board 6-Point Rubric: Thesis/Claim (1 pt), Contextualization (1 pt), Evidence with 2+ specific facts (2 pts), Historical Reasoning structure (1 pt), Complex Understanding/Nuance (1 pt)."
    ];

    if (count === 5) {
      return [...whapCanonicalFive];
    }

    if (count === 10) {
      // 2 Full 5-Question Cycles:
      // Cycle 1 (Qs 1-5): Units 1-4 Focus (1200-1750: Silk Roads, Indian Ocean, Mongols, Gunpowder Empires, Columbian Exchange, Silver Trade)
      // Cycle 2 (Qs 6-10): Units 5-9 Focus (1750-Present: Industrial Revolution, Imperialism, Revolutions, World Wars, Decolonization, Cold War & Globalization)
      return [
        whapCanonicalFive[0],
        whapCanonicalFive[1],
        whapCanonicalFive[2],
        whapCanonicalFive[3],
        whapCanonicalFive[4],
        "[Section I Part B - SAQ 1 Cycle 2 | 3 Points] Modern Secondary Source Analysis (1750–1900): Historian analysis of industrial capitalism, European imperial expansion in Africa/Asia, or labor migrations (indentured servitude). Parts (a) describe historian's thesis on economic coercion, (b) explain one 18th/19th-century development supporting thesis, (c) explain one limitation or counter-argument. ACE Method.",
        "[Section I Part B - SAQ 2 Cycle 2 | 3 Points] 20th-Century Primary Source / Visual Analysis (1900–Present): Primary speech, anti-colonial manifesto, or propaganda poster from WWI/WWII or Cold War proxy conflicts. Parts (a) identify historical situation, (b) explain creator's purpose or intended audience (HIPP), (c) explain connection to global geopolitical realignment. ACE Method.",
        "[Section I Part B - SAQ 3 Cycle 2 | 3 Points] Modern Comparative / CCOT Question (1750–2001): Non-stimulus prompt comparing responses to Western imperialism (e.g. Meiji Japan vs Qing Self-Strengthening vs Ottoman Tanzimat) or ideological conflicts. Parts (a) identify one difference in state modernization strategy, (b) explain one internal factor causing difference, (c) explain one consequence on global power balance. ACE Method.",
        "[Section II Part A - DBQ Cycle 2 | 7 Points] Modern Document-Based Question (1750–2001): Prompt evaluating the extent to which anti-colonial movements or ideological revolutions reshaped global social hierarchies or state power. 7 authentic documents with 7-Point College Board Rubric.",
        "[Section II Part B - LEQ Cycle 2 | 6 Points] Modern Long Essay Question (1750–Present): In the period 1900 to present, evaluate the extent to which technological innovations or ideological struggles transformed international political systems. 6-Point College Board Rubric."
      ];
    }

    if (count === 15) {
      // 3 Full 5-Question Cycles (15 Questions):
      // Cycle 1: Units 1-3 (1200-1450: Post-Classical Networks & Statehood)
      // Cycle 2: Units 4-6 (1450-1900: Early Modern Maritime Empires & Industrial Age)
      // Cycle 3: Units 7-9 (1900-Present: Global Conflicts, Decolonization & Globalized World)
      return [
        ...whapCanonicalFive,
        "[Section I Part B - SAQ 1 Cycle 2 | 3 Points] Early Modern Secondary Source (1450–1750): Historian analysis of maritime trade chartered companies (VOC, British East India Company) and mercantilist bullion accumulation. Parts (a) describe core claim, (b) explain supportive global trade evidence, (c) explain counter-evidence. ACE Method.",
        "[Section I Part B - SAQ 2 Cycle 2 | 3 Points] Gunpowder Empires Primary Source (1450–1750): Imperial taxation or religious administration document (Ottoman Devshirme, Mughal Akbar's Sulh-i-kul, or Qing Imperial Edict). Parts (a) identify context, (b) explain author point of view/purpose (HIPP), (c) explain link to imperial legitimation. ACE Method.",
        "[Section I Part B - SAQ 3 Cycle 2 | 3 Points] Transatlantic & Transpacific Exchange CCOT (1450–1750): Non-stimulus analysis of the Columbian Exchange and Spanish silver flow via Manila galleons. Parts (a) identify one demographic continuity, (b) explain one economic transformation in Ming/Qing China or the Americas, (c) explain ecological effect.",
        "[Section II Part A - DBQ Cycle 2 | 7 Points] Early Modern DBQ (1450–1750): Evaluate the extent to which European transoceanic maritime connections disrupted existing indigenous economic and social systems in the Americas and Indian Ocean basin. 7 Documents + 7-Point Rubric.",
        "[Section II Part B - LEQ Cycle 2 | 6 Points] Early Modern LEQ (1450–1750): Evaluate the extent to which land-based empires in Eurasia relied on military gunpowder technologies versus religious legitimacy to consolidate rule. 6-Point Rubric.",
        "[Section I Part B - SAQ 1 Cycle 3 | 3 Points] Contemporary Secondary Source (1900–Present): Historian analysis of 20th-century Cold War non-alignment, proxy wars, or post-WWII economic integration. Parts (a) describe historian's argument, (b) explain supportive geopolitical event, (c) explain qualifying event.",
        "[Section I Part B - SAQ 2 Cycle 3 | 3 Points] Decolonization & Cold War Primary Source (1945–Present): Speech by Pan-African or Asian nationalist leader (e.g. Bandung Conference, Kwame Nkrumah, Ho Chi Minh, Gamal Abdel Nasser). Parts (a) identify historical situation, (b) explain intended audience/purpose (HIPP), (c) explain connection to global superpower rivalry.",
        "[Section I Part B - SAQ 3 Cycle 3 | 3 Points] 20th-Century Global Economic Integration CCOT (1900–Present): Non-stimulus comparative analysis of free-market neoliberalism vs state-controlled economic planning (e.g. Deng Xiaoping's Four Modernizations vs Soviet Five-Year Plans). Parts (a) identify one policy difference, (b) explain one domestic cause, (c) explain one global trade effect.",
        "[Section II Part A - DBQ Cycle 3 | 7 Points] 20th-Century DBQ (1900–Present): Evaluate the extent to which ideological conflicts during the Cold War shaped anti-imperialist independence struggles and social reforms in Africa, Asia, or Latin America. 7 Documents + 7-Point Rubric.",
        "[Section II Part B - LEQ Cycle 3 | 6 Points] Contemporary LEQ (1900–Present): In the period 1945 to the present, evaluate the extent to which rapid population growth and technological globalization altered global environmental systems or human disease epidemiology. 6-Point Rubric."
      ];
    }

    const pool: string[] = [];
    while (pool.length < count) {
      pool.push(whapCanonicalFive[pool.length % whapCanonicalFive.length]);
    }
    return pool;
  }

  let candidatePool: string[] = [];

  if (detectedUnit && bundle.units[detectedUnit] && bundle.units[detectedUnit].length > 0) {
    // STRICT SINGLE-UNIT MODE: Every single archetype must come strictly from the chosen unit!
    const unitList = [...bundle.units[detectedUnit]];
    // Shuffle within unit
    for (let i = unitList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unitList[i], unitList[j]] = [unitList[j], unitList[i]];
    }
    // Pad to count strictly within this unit's concepts
    while (candidatePool.length < count) {
      candidatePool.push(...unitList);
    }
    candidatePool = candidatePool.slice(0, count).map(arch => `[Unit ${detectedUnit} Focus] ${arch}`);
    return candidatePool;
  } else {
    // COMPREHENSIVE FULL-UNITS MODE: Guarantee balanced representation across ALL units of the syllabus!
    const unitKeys = Object.keys(bundle.units).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
    if (unitKeys.length > 0) {
      // Stratified round-robin across all units
      const buckets: Record<string, string[]> = {};
      for (const uk of unitKeys) {
        const items = [...bundle.units[uk]];
        for (let i = items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [items[i], items[j]] = [items[j], items[i]];
        }
        buckets[uk] = items;
      }

      let uIdx = 0;
      while (candidatePool.length < count) {
        const currentKey = unitKeys[uIdx % unitKeys.length];
        if (buckets[currentKey] && buckets[currentKey].length > 0) {
          candidatePool.push(`[Unit ${currentKey}] ${buckets[currentKey].shift()!}`);
        } else if (bundle.units[currentKey] && bundle.units[currentKey].length > 0) {
          // Re-shuffle and replenish bucket if exhausted
          const fresh = [...bundle.units[currentKey]];
          for (let i = fresh.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [fresh[i], fresh[j]] = [fresh[j], fresh[i]];
          }
          buckets[currentKey] = fresh;
          candidatePool.push(`[Unit ${currentKey}] ${buckets[currentKey].shift()!}`);
        } else {
          break;
        }
        uIdx++;
      }
      return candidatePool.slice(0, count);
    } else {
      candidatePool = [...bundle.general];
      const shuffled = [...candidatePool];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      while (shuffled.length < count) {
        shuffled.push(...candidatePool);
      }
      return shuffled.slice(0, count);
    }
  }
}
