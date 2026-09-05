import { APUnitNote } from './types';

export const AP_BIOLOGY_NOTES: APUnitNote[] = [
  // ==========================================
  // UNIT 1: CHEMISTRY OF LIFE (CED 8%–11% of Exam)
  // ==========================================
  {
    unitId: 'u1',
    unitNumber: 1,
    title: 'Chemistry of Life',
    examWeight: '8%–11% of AP Exam',
    bigIdea: 'Living systems are organized by chemical interactions among functional groups, hydrogen bonding in water, and macromolecular polymerization.',
    keyTheorems: [
      {
        name: 'Unique Properties of Water Due to Polarity',
        conditions: 'Water molecules formed by polar covalent O-H bonds yielding partial charges ($\\delta^-$ on O, $\\delta^+$ on H).',
        conclusion: 'Extensive intermolecular hydrogen bonding grants water: (1) High specific heat & heat of vaporization, (2) Cohesion & surface tension, (3) Adhesion & capillary action, (4) Solid density anomaly (ice floats), (5) Universal polar solvent capacity.',
        apTip: 'On FRQs, never just write "water has hydrogen bonds." You must explicitly connect the property to biological function (e.g. "Hydrogen bonding allows high heat of vaporization, enabling evaporative cooling to maintain organismal homeostasis").'
      },
      {
        name: 'Dehydration Synthesis vs. Hydrolysis Polymerization',
        conditions: 'Biomolecular assembly and breakdown in biological cells.',
        conclusion: 'Dehydration synthesis (condensation) joins monomers by removing a water molecule ($-\\text{OH}$ from one, $-\\text{H}$ from another) forming a covalent bond. Hydrolysis cleaves covalent bonds by adding a water molecule.',
        apTip: 'Every peptide bond, phosphodiester bond, and glycosidic linkage is formed via dehydration synthesis and broken via enzymatic hydrolysis.'
      }
    ],
    formulas: [
      {
        name: 'Water Potential Formula',
        latex: '\\Psi = \\Psi_p + \\Psi_s',
        explanation: 'Total water potential equals physical pressure potential plus chemical solute potential (bars).'
      },
      {
        name: 'Solute Potential Equation',
        latex: '\\Psi_s = -i C R T',
        explanation: '$i$ is ionization constant (1 for sucrose, 2 for $\\text{NaCl}$), $C$ is molarity (M), $R = 0.0831\\text{ L}\\cdot\\text{bars}/(\\text{mol}\\cdot\\text{K})$, $T$ is temperature in Kelvin.'
      }
    ],
    sections: [
      {
        heading: '1. Biological Macromolecules Comparative Matrix',
        content: `Summary of the four primary classes of biological macromolecules:

| Macromolecule | Monomer Building Block | Key Chemical Elements | Characteristic Linkage Bond | Primary Biological Functions |
| :--- | :--- | :--- | :--- | :--- |
| **Carbohydrates** | Monosaccharides (e.g. Glucose) | C, H, O (1:2:1 ratio) | Glycosidic linkage | Short-term energy storage (glycogen, starch), structural integrity (cellulose, chitin) |
| **Lipids** | Fatty acids + Glycerol | C, H, O (sometimes P) | Ester linkage | Long-term energy storage, cell membrane bilayer (phospholipids), steroid signaling |
| **Proteins** | Amino acids (20 types) | C, H, O, N, S | Peptide bond (amide) | Enzymatic catalysis, structural support, membrane transport, antibody defense |
| **Nucleic Acids** | Nucleotides (Sugar, Base, Phosphate) | C, H, O, N, P | Phosphodiester bond | Hereditary genetic code storage (DNA), protein synthesis template (mRNA, tRNA, rRNA) |

*Protein Structure Levels*: Primary (amino acid sequence), Secondary ($\\alpha$-helices and $\\beta$-sheets via backbone H-bonds), Tertiary (3D folding via R-group interactions), Quaternary (multiple polypeptide subunits).`
      }
    ],
    workedExamples: [
      {
        title: 'Water Potential Calculation in Plant Tissue',
        topicRef: 'CED 1.1 Properties of Water & Osmosis',
        question: 'A plant cell with an internal solute potential $\\Psi_s = -4.5\\text{ bars}$ and pressure potential $\\Psi_p = +1.5\\text{ bars}$ is placed in an open beaker of $0.15\\text{ M}$ sucrose solution at $27^\\circ\\text{C}$. Determine (a) the water potential of the cell, (b) the water potential of the beaker solution, and (c) the net direction of water movement.',
        solutionSteps: [
          'Step 1: Calculate cell water potential: $\\Psi_{\\text{cell}} = \\Psi_s + \\Psi_p = -4.5 + 1.5 = -3.0\\text{ bars}$.',
          'Step 2: Convert temperature to Kelvin: $T = 27 + 273 = 300\\text{ K}$.',
          'Step 3: Calculate beaker solute potential: Sucrose does not ionize $\\implies i = 1$.',
          'Step 4: $\\Psi_{s,\\text{beaker}} = -iCRT = -(1)(0.15\\text{ mol/L})(0.0831\\text{ L}\\cdot\\text{bars/mol}\\cdot\\text{K})(300\\text{ K}) = -3.74\\text{ bars}$.',
          'Step 5: Beaker is open to atmosphere $\\implies \\Psi_{p,\\text{beaker}} = 0 \\implies \\Psi_{\\text{beaker}} = -3.74\\text{ bars}$.',
          'Step 6: Compare potentials: $\\Psi_{\\text{cell}} (-3.0\\text{ bars}) > \\Psi_{\\text{beaker}} (-3.74\\text{ bars})$. Water always moves from higher (less negative) to lower (more negative) water potential.'
        ],
        finalAnswer: '$\\Psi_{\\text{cell}} = -3.0\\text{ bars}$; $\\Psi_{\\text{beaker}} = -3.74\\text{ bars}$. Water moves OUT of the cell into the beaker solution.',
        apScoringTip: 'Remember that open containers always have $\\Psi_p = 0$. Water flows toward the MORE NEGATIVE water potential.'
      }
    ],
    diagrams: [
      {
        id: 'bio_water_potential',
        title: 'Water Potential and Osmotic Flow Diagram',
        subtitle: 'High (Less Negative) to Low (More Negative) Potential Gradient',
        type: 'water_potential_gradient',
        description: 'U-tube showing semipermeable membrane with water molecules flowing downhill along water potential gradient toward lower solute potential.',
        takeaway: 'Water flows down its potential gradient: From high $\\Psi$ (dilute, hypo-osmotic) to low $\\Psi$ (concentrated, hyper-osmotic).'
      }
    ],
    commonTraps: [
      'Assuming that adding solute increases water potential. Solutes ALWAYS decrease water potential (making $\\Psi_s$ more negative), which attracts water.',
      'Claiming lipids are true polymers. Lipids are macromolecules composed of fatty acids and glycerol, but they do not form repetitive monomer chains like proteins or polysaccharides.',
      'Forgetting that secondary protein structure involves only the polypeptide backbone (C=O and N-H), while tertiary structure is driven by R-group side chain interactions.'
    ],
    cramSheet: [
      'Water potential: $\\Psi = \\Psi_p + \\Psi_s$; $\\Psi_s = -iCRT$. Water flows from high $\\Psi$ to low $\\Psi$.',
      'Open container has $\\Psi_p = 0$; pure water at atmospheric pressure has $\\Psi = 0$.',
      'Nucleic acid directionality: Synthesized $5\' \\rightarrow 3\'$ (phosphate at $5\'$, hydroxyl at $3\'$).',
      'Protein directionality: N-terminus (amino) to C-terminus (carboxyl).'
    ]
  },

  // ==========================================
  // UNIT 2: CELL STRUCTURE & FUNCTION (CED 10%–13% of Exam)
  // ==========================================
  {
    unitId: 'u2',
    unitNumber: 2,
    title: 'Cell Structure and Function',
    examWeight: '10%–13% of AP Exam',
    bigIdea: 'Cells are the fundamental units of life. Subcellular components and compartmentalization facilitate biological processes and metabolic efficiency.',
    keyTheorems: [
      {
        name: 'Surface Area-to-Volume (SA/V) Ratio Constraint',
        conditions: 'Spherical or cuboidal cells exchanging nutrients and wastes across cell membrane.',
        conclusion: 'As cell size increases, volume grows cubically ($r^3$) while surface area grows quadratically ($r^2$), causing SA/V ratio to decline. High SA/V ratio is essential to sustain metabolic diffusion rates.',
        apTip: 'Cells that specialize in absorption (e.g. intestinal villi, root hairs) maximize SA/V ratio through membrane folding, microvilli projections, or elongated shapes.'
      },
      {
        name: 'Endosymbiotic Theory of Eukaryotic Evolution',
        conditions: 'Origins of mitochondria and chloroplasts in eukaryotic cells.',
        conclusion: 'Mitochondria and chloroplasts originated as free-living prokaryotic organisms engulfed by ancestral anaerobic hosts, evidenced by: (1) Double membranes, (2) Circular non-histone DNA, (3) Autonomous replication via binary fission, (4) Prokaryotic 70S ribosomes.',
        apTip: 'This is tested on virtually every AP exam! Cite at least two specific structural pieces of evidence when justifying endosymbiosis on FRQs.'
      }
    ],
    formulas: [
      {
        name: 'Surface Area and Volume of Sphere',
        latex: '\\text{SA} = 4\\pi r^2, \\quad V = \\frac{4}{3}\\pi r^3, \\quad \\frac{\\text{SA}}{V} = \\frac{3}{r}',
        explanation: 'Demonstrates that SA/V ratio is inversely proportional to radius $r$.'
      }
    ],
    sections: [
      {
        heading: '1. Membrane Transport Mechanisms Comparison',
        content: `Cellular transport across the selectively permeable phospholipid bilayer:

| Transport Type | Energy Required? | Concentration Gradient | Transport Protein Needed? | Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Simple Diffusion** | NO ($0$ ATP) | High $\\rightarrow$ Low (Down) | NO | Small nonpolar molecules: $\\text{O}_2, \\text{CO}_2, \\text{N}_2$, steroids |
| **Osmosis** | NO ($0$ ATP) | High $\\Psi \\rightarrow$ Low $\\Psi$ | YES (Aquaporins accelerate) | Water ($\\text{H}_2\\text{O}$) |
| **Facilitated Diffusion** | NO ($0$ ATP) | High $\\rightarrow$ Low (Down) | YES (Channels or Carriers) | Large polar molecules (Glucose), ions ($\\text{Na}^+, \\text{K}^+, \\text{Ca}^{2+}$) |
| **Primary Active Transport** | **YES** (ATP Hydrolysis) | Low $\\rightarrow$ High (Against) | YES (Pumps / ATPases) | $\\text{Na}^+/\\text{K}^+$ ATPase pump ($3\\text{Na}^+$ out, $2\\text{K}^+$ in) |
| **Secondary (Active) Cotransport**| **YES** (Electrochemical) | Low $\\rightarrow$ High (Against) | YES (Symporter/Antiporter) | $\\text{Na}^+$/Glucose cotransporter, Proton-sucrose pump |
| **Bulk Endocytosis / Exocytosis**| **YES** (Vesicle motor ATP) | N/A (Bulk packaging) | NO (Vesicular fusion) | Macrophage phagocytosis, insulin secretion |`
      }
    ],
    workedExamples: [
      {
        title: 'Cell Tonicity and Volume Response in Dialysis Bag Experiment',
        topicRef: 'CED 2.8 Tonicity & Osmoregulation',
        question: 'A dialysis bag containing $0.4\\text{ M}$ glucose solution is submerged in a beaker containing $0.1\\text{ M}$ glucose solution. The dialysis tubing is permeable to water but impermeable to glucose. Predict (a) the tonicity of the beaker relative to the bag, (b) the direction of net water movement, and (c) what happens to the mass of the dialysis bag.',
        solutionSteps: [
          'Step 1: Compare solute concentrations: Bag is $0.4\\text{ M}$ (higher solute $\\implies$ hypertonic). Beaker is $0.1\\text{ M}$ (lower solute $\\implies$ hypotonic).',
          'Step 2: Beaker solution is hypotonic relative to dialysis bag.',
          'Step 3: Water moves from hypotonic (high water potential) to hypertonic (low water potential).',
          'Step 4: Water moves into the dialysis bag across the semipermeable membrane.',
          'Step 5: Influx of water causes the mass and volume of the dialysis bag to increase.'
        ],
        finalAnswer: 'Beaker is hypotonic; Net water moves INTO the dialysis bag; Mass of the bag increases.',
        apScoringTip: 'Always explicitly state "the beaker is hypotonic to the bag" rather than just "it is hypotonic." Tonicity is a relative comparison between two compartments.'
      }
    ],
    diagrams: [
      {
        id: 'bio_fluid_mosaic',
        title: 'Fluid Mosaic Cell Membrane Structure',
        subtitle: 'Phospholipid Bilayer, Embedded Integral Proteins, and Cholesterol',
        type: 'fluid_mosaic_membrane',
        description: 'Diagram of phospholipid bilayer with hydrophilic phosphate heads pointing outward, hydrophobic fatty acid tails pointing inward, transmembrane proteins, and cholesterol molecules modulating fluidity.',
        takeaway: 'Cholesterol buffers membrane fluidity: Prevents excessive fluidity at high temperatures and prevents tight packing/freezing at cold temperatures.'
      }
    ],
    commonTraps: [
      'Assuming plant cells burst in hypotonic solutions. Plant cell walls exert turgor pressure ($\\Psi_p > 0$) that prevents lysis, maintaining ideal turgid state.',
      'Claiming large polar molecules like glucose cross via simple diffusion. Glucose requires transport proteins (GLUT facilitators) due to polarity and size.',
      'Confusing endocytosis with exocytosis. Endocytosis takes materials in via membrane invagination; exocytosis fuses vesicles with membrane to secrete contents.'
    ],
    cramSheet: [
      'High SA/V ratio is required for rapid nutrient and waste diffusion.',
      'Endosymbiotic evidence: Double membranes, circular DNA, 70S ribosomes, binary fission.',
      'Passive transport: Down gradient, zero ATP. Active transport: Against gradient, requires ATP.',
      'Hypertonic solution: Cell shrinks (crenates/plasmolyzes). Hypotonic: Cell swells (animal lyse, plant turgid).'
    ]
  },

  // ==========================================
  // UNIT 3: CELLULAR ENERGETICS (CED 12%–16% of Exam)
  // ==========================================
  {
    unitId: 'u3',
    unitNumber: 3,
    title: 'Cellular Energetics',
    examWeight: '12%–16% of AP Exam',
    bigIdea: 'Organisms capture, store, and utilize free energy through coupled enzymatic pathways including photosynthesis and cellular respiration.',
    keyTheorems: [
      {
        name: 'Enzyme Catalysis & Induced Fit Mechanism',
        conditions: 'Substrate binding to active site of an enzyme protein.',
        conclusion: 'Enzymes lower the activation energy ($E_a$) of biological reactions without altering $\\Delta G$. Extreme temperature or pH disrupts hydrogen and ionic bonds, causing denaturation and irreversible loss of catalytic function.',
        apTip: 'Competitive inhibitors bind to the active site (can be overcome by adding more substrate); noncompetitive (allosteric) inhibitors bind to a separate site, altering enzyme conformation (cannot be overcome by excess substrate).'
      },
      {
        name: 'Chemiosmosis and Proton-Motive Force',
        conditions: 'Electron Transport Chains in mitochondria (inner membrane) and chloroplasts (thylakoid membrane).',
        conclusion: 'Exergonic electron flow pumps protons ($H^+$) across the membrane, establishing an electrochemical proton gradient. Protons diffuse back through ATP Synthase, driving phosphorylation of ADP into ATP.',
        apTip: 'If a membrane becomes uncoupled or leaky to protons (e.g. dinitrophenol / uncoupling proteins in brown fat), electron transport continues and heat is generated, but ATP synthesis halts!'
      }
    ],
    formulas: [
      {
        name: 'Gibbs Free Energy in Biological Systems',
        latex: '\\Delta G = \\Delta H - T\\Delta S',
        explanation: 'Exergonic reactions ($\\Delta G < 0$) power endergonic reactions ($\\Delta G > 0$) via ATP coupling.'
      }
    ],
    sections: [
      {
        heading: '1. Photosynthesis vs. Cellular Respiration Master Summary',
        content: `Direct comparison of the two master bioenergetic pathways:

| Feature | Photosynthesis | Cellular Respiration |
| :--- | :--- | :--- |
| **Overall Equation** | $6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Light} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$ | $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\approx 30\\text{–}32\\text{ ATP}$ |
| **Organelle Location** | Chloroplast (Thylakoids & Stroma) | Mitochondria (Matrix & Inner Cristae) |
| **Initial Electron Donor** | Water ($\\text{H}_2\\text{O}$, photolysis releases $\\text{O}_2$) | Glucose (hydrogens transferred to $\\text{NADH}, \\text{FADH}_2$) |
| **Final Electron Acceptor** | $\\text{NADP}^+$ (reduced to $\\text{NADPH}$) | Oxygen ($\\text{O}_2$, reduced to form $\\text{H}_2\\text{O}$) |
| **Proton Gradient Reservoir** | Thylakoid lumen (high $[\\text{H}^+]$, low pH) | Mitochondrial intermembrane space (high $[\\text{H}^+]$) |
| **Carbon Fixation Step** | Calvin Cycle in Stroma (catalyzed by RuBisCO) | Krebs (Citric Acid) Cycle in Matrix releases $\\text{CO}_2$ |`
      }
    ],
    workedExamples: [
      {
        title: 'Competitive vs. Noncompetitive Enzyme Kinetics Experiment',
        topicRef: 'CED 3.3 Enzyme Inhibition',
        question: 'An experiment measures enzyme reaction rate at varying substrate concentrations in the presence of Inhibitor X. The maximum velocity ($V_{\\max}$) is identical to the uninhibited enzyme, but the concentration of substrate needed to achieve $\\frac{1}{2}V_{\\max}$ ($K_m$) is significantly higher. Classify Inhibitor X and explain how its effect can be reversed.',
        solutionSteps: [
          'Step 1: Identify kinetic hallmarks: $V_{\\max}$ unchanged, $K_m$ increased.',
          'Step 2: When $V_{\\max}$ is unchanged, it means the enzyme can still reach its full catalytic potential if substrate concentration is sufficiently elevated.',
          'Step 3: This behavior defines a COMPETITIVE inhibitor.',
          'Step 4: Competitive inhibitors bind reversibly to the enzyme active site, directly competing with substrate.',
          'Step 5: The inhibition can be reversed by adding high concentrations of substrate, which outcompetes the inhibitor for active site binding.'
        ],
        finalAnswer: 'Inhibitor X is a Competitive Inhibitor; its effect is reversed by adding excess substrate.',
        apScoringTip: 'Know the distinction: Competitive inhibitors do NOT alter $V_{\\max}$ (they increase $K_m$); Noncompetitive allosteric inhibitors REDUCE $V_{\\max}$ (substrate cannot overcome them).'
      }
    ],
    diagrams: [
      {
        id: 'bio_enzyme_inhibition',
        title: 'Enzyme Velocity vs. Substrate Concentration Curves',
        subtitle: 'Uninhibited vs. Competitive vs. Noncompetitive Inhibition',
        type: 'enzyme_kinetics_curve',
        description: 'Michaelis-Menten saturation curves showing uninhibited enzyme leveling off at $V_{\\max}$, competitive curve reaching the same $V_{\\max}$ at higher $[S]$, and noncompetitive curve plateauing at lower $V_{\\max}$.',
        takeaway: 'Competitive inhibition curve reaches full $V_{\\max}$ at high $[S]$; noncompetitive inhibition curve is suppressed and never reaches original $V_{\\max}$.'
      }
    ],
    commonTraps: [
      'Stating that plants only do photosynthesis and animals do respiration. Plants perform BOTH photosynthesis AND cellular respiration! Plant cells require mitochondria to produce ATP from sugars.',
      'Claiming oxygen is required for glycolysis. Glycolysis occurs in the cytoplasm and is completely anaerobic; it occurs in all living organisms.',
      'Thinking that enzymes supply energy to drive endergonic reactions. Enzymes only lower activation energy; they do not change $\\Delta G$.'
    ],
    cramSheet: [
      'Enzymes lower $E_a$; they do NOT change $\\Delta G$ or equilibrium.',
      'Competitive inhibitor: Binds active site; overcomes by adding substrate ($V_{\\max}$ unchanged).',
      'Noncompetitive inhibitor: Binds allosteric site; reduces $V_{\\max}$.',
      'Light reactions: Split $\\text{H}_2\\text{O}$, release $\\text{O}_2$, produce $\\text{ATP}$ and $\\text{NADPH}$ for Calvin cycle in stroma.',
      'Oxidative phosphorylation: $\\text{O}_2$ is the final electron acceptor, forming $\\text{H}_2\\text{O}$.'
    ]
  },

  // ==========================================
  // UNIT 4: CELL COMMUNICATION & CELL CYCLE (CED 10%–15% of Exam)
  // ==========================================
  {
    unitId: 'u4',
    unitNumber: 4,
    title: 'Cell Communication and Cell Cycle',
    examWeight: '10%–15% of AP Exam',
    bigIdea: 'Cells communicate through signal transduction pathways. The cell cycle is regulated by internal checkpoints and cyclin-CDK complexes.',
    keyTheorems: [
      {
        name: 'Three Stages of Signal Transduction',
        conditions: 'Ligand molecule binding to cell receptor.',
        conclusion: '(1) Reception: Ligand binds specifically to membrane receptor (e.g. GPCR, Receptor Tyrosine Kinase) inducing conformational change; (2) Transduction: Intracellular relay cascade (protein kinases, phosphorylation cascades, second messengers like cAMP or $\\text{Ca}^{2+}$) amplifying signal; (3) Response: Nuclear gene transcription or cytoplasmic enzyme activation.',
        apTip: 'Phosphorylation cascades allow massive SIGNAL AMPLIFICATION: A single ligand binding to one receptor activates cascades yielding millions of product molecules!'
      },
      {
        name: 'Cyclin and Cyclin-Dependent Kinase (CDK) Regulation',
        conditions: 'Eukaryotic cell progressing through $G_1, S, G_2$, and $M$ phases.',
        conclusion: 'CDK levels remain constant while cyclin concentrations fluctuate. When cyclin binds CDK, the active complex phosphorylates target proteins, driving the cell past checkpoints. Degradation of cyclin inactivates the kinase.',
        apTip: 'Failure of cell cycle checkpoints (e.g. mutations in tumor suppressor $p53$ or hyperactive proto-oncogenes like $ras$) leads to unregulated cell proliferation: Cancer.'
      }
    ],
    formulas: [
      {
        name: 'Mitotic Index',
        latex: '\\text{Mitotic Index} = \\frac{\\text{Number of cells in mitosis}}{\\text{Total number of cells observed}}',
        explanation: 'Used to measure proliferative activity of tissues and tumor growth.'
      }
    ],
    sections: [
      {
        heading: '1. Cell Cycle Checkpoints & Arrest Triggers',
        content: `The three major eukaryotic cell division checkpoints:

1. **$G_1$ Checkpoint (Restriction Point)**:
   - Evaluates: Cell size, nutrient availability, growth factor signals, and DNA damage.
   - If cleared: Cell commits to DNA replication in $S$ phase.
   - If not cleared: Cell exits cycle into non-dividing $G_0$ quiescent state (e.g. mature neurons).
2. **$G_2$ Checkpoint**:
   - Evaluates: Completion of DNA replication and proofreading repair.
   - Requires active MPF (Maturation Promoting Factor: Cyclin B + CDK1).
3. **M Checkpoint (Spindle Assembly Checkpoint)**:
   - Evaluates: All sister chromatid kinetochores are securely attached to spindle microtubules from opposite poles during metaphase.
   - Prevents nondisjunction and aneuploid daughter cells.`
      }
    ],
    workedExamples: [
      {
        title: 'Signal Transduction Mutation Analysis',
        topicRef: 'CED 4.4 Changes in Signal Transduction Pathways',
        question: 'A mutation causes the G-protein in an epinephrine pathway to permanently bind GTP without hydrolyzing it to GDP. Predict the effect on (a) intracellular cyclic AMP (cAMP) levels, and (b) glucose release into the bloodstream.',
        solutionSteps: [
          'Step 1: Understand normal pathway: Epinephrine binds GPCR $\\rightarrow$ G-protein exchanges GDP for GTP $\\rightarrow$ active G-protein stimulates adenylyl cyclase $\\rightarrow$ converts ATP to cAMP $\\rightarrow$ activates PKA $\\rightarrow$ stimulates glycogen breakdown to glucose.',
          'Step 2: Analyze mutation: G-protein cannot hydrolyze GTP $\\implies$ G-protein remains permanently trapped in its ACTIVE state.',
          'Step 3: Adenylyl cyclase is continuously stimulated even in the absence of epinephrine ligand.',
          'Step 4: Intracellular cAMP levels will remain chronically elevated.',
          'Step 5: Continuous activation of glycogen phosphorylase leads to excessive, uncontrolled glucose release into the blood.'
        ],
        finalAnswer: 'Intracellular cAMP levels remain continuously elevated; Glucose release into the blood is permanently stimulated.',
        apScoringTip: 'Walk step-by-step through the pathway cascade: Identify the specific altered protein, trace downstream intermediates, and state the final physiological outcome.'
      }
    ],
    diagrams: [
      {
        id: 'bio_signal_cascade',
        title: 'Phosphorylation Cascade and Signal Amplification',
        subtitle: 'Sequential Kinase Activation Yielding Massive Intracellular Response',
        type: 'phosphorylation_cascade',
        description: 'Branching tree diagram showing 1 receptor activating 10 adenylyl cyclases, each producing 100 cAMP, each activating PKA, producing $10^6$ active enzymes.',
        takeaway: 'Phosphorylation cascades allow a minute chemical signal (one ligand) to be magnified into a massive, rapid physiological cellular response.'
      }
    ],
    commonTraps: [
      'Assuming steroid hormone receptors are on the outer cell membrane. Steroids are nonpolar lipids; they cross the lipid bilayer directly and bind to INTRACELLULAR receptors in cytoplasm or nucleus.',
      'Thinking CDK concentrations fluctuate during the cell cycle. CDK levels remain CONSTANT; only cyclin levels fluctuate to activate or deactivate CDKs.',
      'Confusing negative feedback with positive feedback. Negative feedback returns system to set point (homeostasis); positive feedback amplifies response until a terminal event (e.g. oxytocin in childbirth).'
    ],
    cramSheet: [
      'GPCR pathway: Ligand $\\rightarrow$ GPCR $\\rightarrow$ G-protein (GTP) $\\rightarrow$ Adenylyl cyclase $\\rightarrow$ cAMP $\\rightarrow$ PKA.',
      'Steroid hormones bind intracellular receptors; peptide hormones bind cell-surface receptors.',
      'Cyclin rises to activate CDK; cyclin degradation deactivates CDK.',
      '$G_1$ checkpoint failure results in cell entering non-dividing $G_0$ state.',
      'Cancer results from mutated proto-oncogenes (gain of function) or mutated tumor suppressors like $p53$ (loss of function).'
    ]
  },

  // ==========================================
  // UNIT 5: HEREDITY (CED 8%–11% of Exam)
  // ==========================================
  {
    unitId: 'u5',
    unitNumber: 5,
    title: 'Heredity and Classical Genetics',
    examWeight: '8%–11% of AP Exam',
    bigIdea: 'Meiosis generates genetic variation through crossing over and independent assortment. Mendelian and non-Mendelian patterns govern inheritance of traits.',
    keyTheorems: [
      {
        name: 'Mendel’s Laws of Inheritance',
        conditions: 'Sexual reproduction in diploid organisms.',
        conclusion: '(1) Law of Segregation: Two alleles for each gene segregate during meiosis (anaphase I), so gametes carry only one allele; (2) Law of Independent Assortment: Genes on different non-homologous chromosomes assort independently during metaphase I.',
        apTip: 'The classic $9:3:3:1$ phenotypic ratio from a dihybrid cross ($AaBb \\times AaBb$) occurs ONLY if both genes are on separate chromosomes (unlinked)!'
      },
      {
        name: 'Genetic Linkage and Recombination Frequency',
        conditions: 'Genes located close together on the same homologous chromosome.',
        conclusion: 'Linked genes deviate from independent assortment and travel together unless separated by crossing over. Recombination frequency ($1\\% = 1\\text{ map unit / centimorgan}$) reflects physical distance between loci.',
        apTip: 'Maximum possible recombination frequency is $50\\%$. If recombination frequency is $50\\%$, the genes are either on different chromosomes or spaced extremely far apart.'
      }
    ],
    formulas: [
      {
        name: 'Chi-Square Goodness-of-Fit Test',
        latex: '\\chi^2 = \\sum \\frac{(o - e)^2}{e}',
        explanation: '$o$ is observed offspring count, $e$ is expected Mendelian count, degrees of freedom $\\text{df} = k - 1$.'
      },
      {
        name: 'Recombination Frequency',
        latex: '\\text{RF} = \\frac{\\text{Total Recombinant Offspring}}{\\text{Total Offspring}} \\times 100\\%',
        explanation: 'Yields map distance in centimorgans (cM).'
      }
    ],
    sections: [
      {
        heading: '1. Non-Mendelian Genetics Master Patterns',
        content: `Key non-Mendelian inheritance models tested on the AP exam:

| Inheritance Mode | Defining Characteristic | Classic Phenotypic Outcome |
| :--- | :--- | :--- |
| **Incomplete Dominance** | Heterozygote displays blended intermediate phenotype | Red $\\times$ White $\\rightarrow$ $100\\%$ Pink ($1:2:1$ ratio) |
| **Codominance** | Heterozygote fully expresses both alleles simultaneously | ABO Blood Types: $I^A I^B$ produces both A and B surface antigens |
| **Sex-Linked (X-Linked Recessive)** | Gene carried on X chromosome; males ($XY$) are hemizygous | Males affected much more frequently; carrier mothers pass trait to sons |
| **Mitochondrial / Maternal** | Mitochondria passed exclusively in egg cytoplasm | Affected mother passes trait to **ALL** offspring; affected father passes to **NONE** |
| **Polygenic Inheritance** | Multiple genes influence a single continuous trait | Bell-shaped curve distribution (e.g. human height, skin pigmentation) |`
      }
    ],
    workedExamples: [
      {
        title: 'Chi-Square Analysis of Dihybrid Fruit Fly Cross',
        topicRef: 'CED 5.6 Chromosomal Inheritance & Chi-Square',
        question: 'A dihybrid cross ($AaBb \\times aabb$) produces 1000 offspring: 280 $AB$, 220 $Ab$, 230 $aB$, and 270 $ab$. Test whether the genes assort independently using a chi-square test at significance level $p = 0.05$ (Critical value for $\\text{df} = 3$ is $7.81$).',
        solutionSteps: [
          'Step 1: State null hypothesis ($H_0$): The genes assort independently according to Mendelian expectations of a $1:1:1:1$ ratio.',
          'Step 2: Calculate expected count for each phenotype: $e = \\frac{1000}{4} = 250$ for each class.',
          'Step 3: Calculate chi-square terms $\\frac{(o-e)^2}{e}$:',
          '- $AB$: $\\frac{(280 - 250)^2}{250} = \\frac{900}{250} = 3.60$',
          '- $Ab$: $\\frac{(220 - 250)^2}{250} = \\frac{900}{250} = 3.60$',
          '- $aB$: $\\frac{(230 - 250)^2}{250} = \\frac{400}{250} = 1.60$',
          '- $ab$: $\\frac{(270 - 250)^2}{250} = \\frac{400}{250} = 1.60$',
          'Step 4: Sum terms: $\\chi^2 = 3.60 + 3.60 + 1.60 + 1.60 = 10.40$.',
          'Step 5: Compare with critical value: Degrees of freedom $\\text{df} = 4 - 1 = 3$. Critical value = $7.81$.',
          'Step 6: Since calculated $\\chi^2 (10.40) > 7.81$, we REJECT the null hypothesis. The genes do not assort independently (they are linked).'
        ],
        finalAnswer: '$\\chi^2 = 10.40 > 7.81$; Reject the null hypothesis. The genes are linked on the same chromosome.',
        apScoringTip: 'Always explicitly state: (1) Null hypothesis, (2) Calculated $\\chi^2$ value, (3) Comparison to critical table value, and (4) Definitive conclusion to "reject" or "fail to reject" $H_0$.'
      }
    ],
    diagrams: [
      {
        id: 'bio_meiosis_crossover',
        title: 'Meiosis I Crossing Over & Recombination',
        subtitle: 'Chiasmata Formation Yielding Non-Parental Gamete Chromosomes',
        type: 'meiosis_crossing_over',
        description: 'Homologous chromosome tetrad aligning in Prophase I with non-sister chromatids exchanging genetic segments at chiasmata, producing recombinant chromatids.',
        takeaway: 'Crossing over in Prophase I and independent assortment in Metaphase I generate the vast diversity of unique gamete genotypes.'
      }
    ],
    commonTraps: [
      'Using the word "accept" when analyzing a null hypothesis. In scientific statistics, you NEVER "accept" $H_0$; you either "reject" or "fail to reject" $H_0$!',
      'Assuming that fathers pass X-linked traits to their sons. Fathers contribute a Y chromosome to sons; sons inherit X-linked traits exclusively from their mothers.',
      'Calculating expected chi-square numbers as percentages rather than actual whole individual counts. Always use raw individual counts!'
    ],
    cramSheet: [
      'Dihybrid test cross ratio for unlinked genes: $1:1:1:1$. Deviations suggest genetic linkage.',
      'Chi-square formula: $\\chi^2 = \\Sigma\\frac{(o-e)^2}{e}$. Degrees of freedom $\\text{df} = n - 1$.',
      'If $\\chi^2 > \\text{critical value}$, REJECT null hypothesis (deviation is statistically significant).',
      'Mitochondrial traits: Inherited exclusively through the maternal line (egg).',
      'X-linked recessive traits show up predominantly in males because males have only one X chromosome.'
    ]
  },

  // ==========================================
  // UNIT 6: GENE EXPRESSION & REGULATION (CED 12%–16% of Exam)
  // ==========================================
  {
    unitId: 'u6',
    unitNumber: 6,
    title: 'Gene Expression and Regulation',
    examWeight: '12%–16% of AP Exam',
    bigIdea: 'The central dogma outlines genetic information flow: DNA is transcribed into RNA and translated into proteins. Gene regulation coordinates development and cellular responses.',
    keyTheorems: [
      {
        name: 'The Central Dogma of Molecular Biology',
        conditions: 'Directional flow of genetic information in all cellular life.',
        conclusion: '$\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{mRNA} \\xrightarrow{\\text{Translation}} \\text{Polypeptide (Protein)}$. Retroviruses (e.g. HIV) provide an exception by using Reverse Transcriptase to synthesize DNA from an RNA template.',
        apTip: 'DNA and RNA polymers are ALWAYS synthesized strictly in the $5\' \\rightarrow 3\'$ direction! DNA polymerase adds nucleotides only to the free $3\'-\\text{OH}$ group.'
      },
      {
        name: 'Bacterial Operon Gene Regulation (Lac vs. Trp)',
        conditions: 'Prokaryotic transcriptional regulation via operator-repressor complexes.',
        conclusion: 'The lac operon is inducible (normally OFF, turned ON when lactose binds repressor causing it to dissociate). The trp operon is repressible (normally ON, turned OFF when tryptophan acts as corepressor binding repressor to block operator).',
        apTip: 'The operator is a DNA sequence where the repressor protein binds; the promoter is the DNA sequence where RNA polymerase binds.'
      }
    ],
    formulas: [
      {
        name: 'Chargaff’s Base-Pairing Rules',
        latex: '\\%A = \\%T, \\quad \\%G = \\%C, \\quad \\%A + \\%T + \\%G + \\%C = 100\\%',
        explanation: 'In double-stranded DNA, purines ($A, G$) pair with pyrimidines ($T, C$) via hydrogen bonds ($2$ between A-T, $3$ between G-C).'
      }
    ],
    sections: [
      {
        heading: '1. Eukaryotic Pre-mRNA Post-Transcriptional Processing',
        content: `Before pre-mRNA leaves the nucleus for ribosomal translation, it undergoes three critical modifications:

1. **$5\'$ Cap Addition**: A modified guanine nucleotide ($7$-methylguanosine) is added to the $5\'$ end. Protects against exonuclease enzymatic degradation and assists ribosomal binding.
2. **$3\'$ Poly-A Tail Addition**: An enzyme adds $100\\text{–}200$ adenine nucleotides to the $3\'$ end. Facilitates nuclear export and stabilizes the transcript.
3. **RNA Splicing via Spliceosomes**:
   - **Introns** (non-coding intervening sequences) are excised and degraded.
   - **Exons** (expressed coding sequences) are spliced together.
   - **Alternative RNA Splicing**: Different combinations of exons are joined from a single pre-mRNA, allowing one single gene to produce multiple distinct protein isoforms!`
      }
    ],
    workedExamples: [
      {
        title: 'DNA Replication Fork Synthesis & Okazaki Fragments',
        topicRef: 'CED 6.2 DNA Replication',
        question: 'Explain why DNA replication creates a continuous leading strand and a discontinuous lagging strand at the replication fork.',
        solutionSteps: [
          'Step 1: State enzyme constraint: DNA Polymerase III can ONLY synthesize new DNA in the $5\' \\rightarrow 3\'$ direction by adding nucleotides to a $3\'-\\text{OH}$ group.',
          'Step 2: Identify template orientation: The two parent DNA strands are antiparallel ($5\' \\rightarrow 3\'$ and $3\' \\rightarrow 5\'$).',
          'Step 3: Leading strand synthesis: The template oriented $3\' \\rightarrow 5\'$ toward the fork allows continuous $5\' \\rightarrow 3\'$ synthesis moving into the unzipping fork.',
          'Step 4: Lagging strand synthesis: The template oriented $5\' \\rightarrow 3\'$ toward the fork forces DNA Polymerase to synthesize away from the fork in short segments (Okazaki fragments).',
          'Step 5: Joining: RNA primers are replaced by DNA Polymerase I, and DNA Ligase seals the phosphodiester backbone nicks between fragments.'
        ],
        finalAnswer: 'Antiparallel structure combined with the strict $5\' \\rightarrow 3\'$ synthesis constraint of DNA polymerase forces the lagging strand to be synthesized discontinuously as Okazaki fragments.',
        apScoringTip: 'Always mention that DNA polymerase synthesizes ONLY in the $5\' \\rightarrow 3\'$ direction. This directionality statement is worth 1 full rubric point.'
      }
    ],
    diagrams: [
      {
        id: 'bio_operon_model',
        title: 'The Operon Model of Gene Regulation',
        subtitle: 'Promoter, Operator, Repressor, and Structural Genes',
        type: 'operon_diagram',
        description: 'Diagram of bacterial operon showing regulatory gene producing repressor, promoter site for RNA polymerase, operator switch, and structural genes.',
        takeaway: 'When active repressor binds the operator, RNA polymerase is physically blocked from transcribing the downstream structural genes.'
      }
    ],
    commonTraps: [
      'Assuming that all mutations change the resulting protein. Silent mutations (due to genetic code redundancy / wobble) code for the identical amino acid, causing zero phenotypic change.',
      'Claiming prokaryotes splice introns. Prokaryotes do NOT have introns or spliceosomes; their genes are contiguous and translation occurs simultaneously with transcription.',
      'Confusing the promoter with the operator. RNA polymerase binds the PROMOTER; the repressor protein binds the OPERATOR.'
    ],
    cramSheet: [
      'DNA synthesis is strictly $5\' \\rightarrow 3\'$. Leading strand continuous; lagging strand discontinuous (Okazaki fragments).',
      'Central Dogma: $\\text{DNA} \\rightarrow \\text{mRNA} \\rightarrow \\text{Protein}$.',
      'Eukaryotic pre-mRNA processing: $5\'$ cap, $3\'$ poly-A tail, excision of introns, splicing of exons.',
      'Alternative splicing allows one gene to code for multiple distinct proteins.',
      'PCR (Polymerase Chain Reaction) steps: Denaturation ($95^\\circ\\text{C}$), Annealing ($55^\\circ\\text{C}$), Extension ($72^\\circ\\text{C}$).'
    ]
  },

  // ==========================================
  // UNIT 7: NATURAL SELECTION (CED 13%–20% of Exam)
  // ==========================================
  {
    unitId: 'u7',
    unitNumber: 7,
    title: 'Natural Selection and Evolution',
    examWeight: '13%–20% of AP Exam',
    bigIdea: 'Evolution is driven by natural selection acting on phenotypic variations. Phylogeny represents evolutionary relatedness among lineages.',
    keyTheorems: [
      {
        name: 'Principles of Natural Selection (Darwinian Fitness)',
        conditions: 'Heritable phenotypic variation within a population producing more offspring than the environment can support.',
        conclusion: 'Individuals with favorable adaptations have higher reproductive fitness, leaving more viable offspring. Over generations, beneficial alleles increase in frequency in the population.',
        apTip: 'Natural selection acts on PHENOTYPES of INDIVIDUALS, but EVOLUTION occurs in the ALLELE FREQUENCIES of POPULATIONS over time!'
      },
      {
        name: 'Hardy-Weinberg Equilibrium Conditions',
        conditions: 'Theoretical population where allele frequencies remain constant across generations.',
        conclusion: 'A population is in Hardy-Weinberg equilibrium if and only if: (1) Extremely large population (no genetic drift), (2) Random mating, (3) No mutations, (4) No gene flow (no migration), (5) No natural selection.',
        apTip: 'If allele frequencies change over time, at least one of the 5 conditions is violated, providing direct mathematical proof that EVOLUTION is occurring!'
      }
    ],
    formulas: [
      {
        name: 'Hardy-Weinberg Allele Frequency Formula',
        latex: 'p + q = 1',
        explanation: '$p$ is dominant allele frequency ($A$), $q$ is recessive allele frequency ($a$).'
      },
      {
        name: 'Hardy-Weinberg Genotype Frequency Formula',
        latex: 'p^2 + 2pq + q^2 = 1',
        explanation: '$p^2$ = homozygous dominant ($AA$), $2pq$ = heterozygous ($Aa$), $q^2$ = homozygous recessive ($aa$).'
      }
    ],
    sections: [
      {
        heading: '1. Speciation Mechanisms: Allopatric vs. Sympatric',
        content: `How new biological species arise from reproductive isolation:

- **Allopatric Speciation**:
  - Requires **geographic physical barrier** (river, mountain range, continental drift) separating a population.
  - Isolated gene pools experience independent mutations, selective pressures, and genetic drift until prezygotic or postzygotic reproductive isolation prevents interbreeding upon reunion.
- **Sympatric Speciation**:
  - Speciation occurs **without geographic isolation** in the same physical habitat.
  - Driven by: Polyploidy (common in plants), sexual selection, or habitat differentiation.
- **Reproductive Isolating Mechanisms**:
  - *Prezygotic*: Temporal (mating seasons), Behavioral (courtship rituals), Mechanical (anatomical incompatibility), Gametic (sperm cannot fertilize egg).
  - *Postzygotic*: Hybrid inviability (embryo dies), Hybrid sterility (mule is sterile).`
      }
    ],
    workedExamples: [
      {
        title: 'Hardy-Weinberg Recessive Disease Carrier Calculation',
        topicRef: 'CED 7.5 Hardy-Weinberg Equilibrium',
        question: 'Cystic fibrosis is an autosomal recessive disease affecting 1 in 2,500 newborns in a population in Hardy-Weinberg equilibrium. Calculate (a) the frequency of the recessive allele $q$, (b) the frequency of the dominant allele $p$, and (c) the percentage of the population who are heterozygous carriers ($2pq$).',
        solutionSteps: [
          'Step 1: Identify given information: Diseased individuals are homozygous recessive ($aa$) $\\implies q^2 = \\frac{1}{2500} = 0.0004$.',
          'Step 2: Calculate recessive allele frequency $q$: $q = \\sqrt{q^2} = \\sqrt{0.0004} = 0.02$.',
          'Step 3: Calculate dominant allele frequency $p$: $p = 1 - q = 1 - 0.02 = 0.98$.',
          'Step 4: Calculate carrier frequency ($2pq$): $2pq = 2(0.98)(0.02) = 0.0392$.',
          'Step 5: Convert carrier frequency to percentage: $0.0392 \\times 100\\% = 3.92\\%$.'
        ],
        finalAnswer: 'Recessive allele frequency $q = 0.02$; Dominant allele $p = 0.98$; Heterozygous carriers = $3.92\\%$ of the population.',
        apScoringTip: 'ALWAYS start Hardy-Weinberg math by solving for $q = \\sqrt{q^2}$ using the homozygous recessive frequency! Never start with dominant individuals because dominant phenotypes include both $p^2$ and $2pq$.'
      }
    ],
    diagrams: [
      {
        id: 'bio_phylogenetic_tree',
        title: 'Phylogenetic Tree and Cladogram Nodes',
        subtitle: 'Most Recent Common Ancestors and Shared Derived Characters',
        type: 'cladogram_diagram',
        description: 'Cladogram showing branching nodes representing speciation events, outgroup lineage, and synapomorphies (shared derived characters) mapped along internodes.',
        takeaway: 'Taxa sharing a more recent common ancestor node are more closely related than taxa sharing an older ancestral node.'
      }
    ],
    commonTraps: [
      'Assuming organisms evolve traits because they "need" them. Evolution is NOT goal-oriented; mutations arise randomly and natural selection filters existing variations based on survival and reproduction.',
      'Starting Hardy-Weinberg calculations with the dominant phenotype. Dominant phenotypes consist of BOTH $p^2$ and $2pq$; you must always start with $q^2$ (recessive phenotype).',
      'Thinking evolution means survival of the strongest. In evolutionary biology, "fitness" refers strictly to REPRODUCTIVE success—the number of viable, fertile offspring passed to the next generation.'
    ],
    cramSheet: [
      'Natural selection acts on individual phenotypes; populations evolve.',
      'Hardy-Weinberg math: Find $q = \\sqrt{q^2}$ first, then $p = 1 - q$, then carriers $= 2pq$.',
      'Genetic drift (Bottleneck & Founder effect) has the strongest impact in SMALL populations.',
      'Homologous structures (human arm, bat wing) indicate common ancestry (divergent evolution); Analogous structures (bird wing, insect wing) indicate convergent evolution.',
      'Cladograms: Closer common branch point $\\implies$ closer evolutionary kinship.'
    ]
  },

  // ==========================================
  // UNIT 8: ECOLOGY (CED 10%–15% of Exam)
  // ==========================================
  {
    unitId: 'u8',
    unitNumber: 8,
    title: 'Ecology',
    examWeight: '10%–15% of AP Exam',
    bigIdea: 'Ecosystems are structured by complex biotic and abiotic interactions. Energy flows through trophic cascades while nutrients cycle continuously.',
    keyTheorems: [
      {
        name: 'The 10% Trophic Energy Transfer Rule',
        conditions: 'Energy transfer between successive trophic levels in an ecological food web.',
        conclusion: 'Approximately $10\\%$ of energy stored as biomass at one trophic level is converted into biomass at the next level; $90\\%$ is lost as metabolic heat, cellular respiration, and waste.',
        apTip: 'Because of this $10\\%$ inefficiency, food chains rarely exceed 4 or 5 trophic levels, and top apex predators require vast geographic home ranges.'
      },
      {
        name: 'Competitive Exclusion Principle (Gause’s Law)',
        conditions: 'Two competing species occupying identical ecological niches competing for the same limiting resource.',
        conclusion: 'Two species cannot coexist indefinitely in the identical niche. One species will outcompete the other to local extinction, or species will undergo resource partitioning to minimize niche overlap.',
        apTip: 'Keystone species (e.g. sea otters, wolves, starfish) exert disproportionately large control on ecosystem structure relative to their numerical abundance.'
      }
    ],
    formulas: [
      {
        name: 'Exponential Population Growth',
        latex: '\\frac{dN}{dt} = r_{\\max} N',
        explanation: 'J-shaped curve under unlimited resources where $r_{\\max}$ is intrinsic per capita growth rate.'
      },
      {
        name: 'Logistic Population Growth',
        latex: '\\frac{dN}{dt} = r_{\\max} N \\left(\\frac{K - N}{K}\\right)',
        explanation: 'S-shaped curve incorporating carrying capacity $K$. Growth rate drops to zero when $N = K$.'
      },
      {
        name: 'Simpson’s Diversity Index',
        latex: 'D = 1 - \\sum \\left(\\frac{n}{N}\\right)^2',
        explanation: 'Measures species richness and evenness (scale $0$ to $1$; values closer to $1$ indicate higher biodiversity).'
      }
    ],
    sections: [
      {
        heading: '1. Interspecific Community Interactions Matrix',
        content: `Summary of ecological species-to-species interactions:

| Interaction Type | Species 1 Effect | Species 2 Effect | Classic Ecological Example |
| :--- | :--- | :--- | :--- |
| **Mutualism** | **Benefited ($+$)** | **Benefited ($+$)** | Mycorrhizal fungi and plant roots; Pollinators and flowering plants |
| **Commensalism** | **Benefited ($+$)** | **Unaffected ($0$)** | Barnacles attached to whale skin; Epiphytic orchids on tree branches |
| **Parasitism** | **Benefited ($+$)** | **Harmed ($-$)** | Ticks and tapeworms feeding on host tissues without immediately killing host |
| **Predation / Herbivory** | **Benefited ($+$)** | **Harmed ($-$)** | Lynx hunting snowshoe hare; Deer grazing forest shrubs |
| **Competition** | **Harmed ($-$)** | **Harmed ($-$)** | Lions and hyenas competing for identical prey resources |`
      }
    ],
    workedExamples: [
      {
        title: 'Logistic Growth Rate Calculation Near Carrying Capacity',
        topicRef: 'CED 8.4 Population Ecology & Carrying Capacity',
        question: 'A deer population has an intrinsic growth rate $r_{\\max} = 0.25\\text{ per year}$ and lives in an environment with carrying capacity $K = 1,000\\text{ deer}$. Calculate the population growth rate ($dN/dt$) when (a) $N = 200$, and (b) $N = 800$.',
        solutionSteps: [
          'Step 1: Write logistic growth formula: $\\frac{dN}{dt} = r_{\\max} N \\left(\\frac{K - N}{K}\\right)$.',
          'Step 2: Case (a) when $N = 200$:',
          '- $\\frac{dN}{dt} = (0.25)(200)\\left(\\frac{1000 - 200}{1000}\\right) = 50\\left(\\frac{800}{1000}\\right) = 50(0.80) = 40\\text{ deer/year}$.',
          'Step 3: Case (b) when $N = 800$:',
          '- $\\frac{dN}{dt} = (0.25)(800)\\left(\\frac{1000 - 800}{1000}\\right) = 200\\left(\\frac{200}{1000}\\right) = 200(0.20) = 40\\text{ deer/year}$.',
          'Step 4: Notice that population growth rate is maximum at $N = K/2 = 500$ (inflection point of S-curve), where $\\frac{dN}{dt} = (0.25)(500)(0.5) = 62.5\\text{ deer/year}$.'
        ],
        finalAnswer: 'Growth rate at $N = 200$ is $40\\text{ deer/year}$; Growth rate at $N = 800$ is $40\\text{ deer/year}$.',
        apScoringTip: 'Remember that logistic population growth rate is HIGHEST at $N = K/2$ (half carrying capacity). As $N$ approaches $K$, growth rate drops toward zero.'
      }
    ],
    diagrams: [
      {
        id: 'bio_trophic_pyramid',
        title: 'Trophic Biomass and Energy Pyramid',
        subtitle: '10% Rule of Ecological Efficiency Across Trophic Levels',
        type: 'trophic_pyramid',
        description: 'Pyramid showing primary producers ($10,000\\text{ J}$) at base, primary consumers ($1,000\\text{ J}$), secondary consumers ($100\\text{ J}$), and tertiary apex predators ($10\\text{ J}$).',
        takeaway: 'Only $10\\%$ of energy transfers up each trophic level; the remaining $90\\%$ is dissipated as metabolic heat and waste.'
      }
    ],
    commonTraps: [
      'Assuming top predators have the most biomass in an ecosystem. Energy is lost at each step, so primary producers ALWAYS have drastically greater biomass than top predators.',
      'Confusing species richness with species diversity. Richness is just the raw count of species; diversity (Simpson\'s Index) factors in both species count AND relative abundance (evenness).',
      'Thinking carrying capacity ($K$) is a permanent fixed constant. If environmental conditions change (e.g. drought, habitat destruction), $K$ decreases accordingly.'
    ],
    cramSheet: [
      '10% Rule: Only 10% of energy transfers to next trophic level; 90% lost as heat/respiration.',
      'Logistic growth: $dN/dt = r_{\\max} N \\left(\\frac{K-N}{K}\\right)$. Max growth occurs at $N = K/2$.',
      'Keystone species: Disproportionately huge influence on community biodiversity (e.g. removing sea otters causes urchin barrens).',
      'Trophic cascade: Indirect interactions where top predator changes abundance of lower trophic levels.'
    ]
  }
];
