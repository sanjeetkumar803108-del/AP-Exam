import { APUnitNote } from './types';

export const AP_BIOLOGY_NOTES: APUnitNote[] = [
  {
    "unitId": "u1",
    "unitNumber": 1,
    "title": "Chemistry of Life",
    "examWeight": "8%–11% of AP Exam",
    "bigIdea": "Living systems are organized by chemical interactions among functional groups, hydrogen bonding in water, and macromolecular polymerization.",
    "keyTheorems": [
      {
        "name": "Unique Properties of Water Due to Polarity",
        "conditions": "Water molecules formed by polar covalent O-H bonds yielding partial charges ($\\delta^-$ on O, $\\delta^+$ on H).",
        "conclusion": "Extensive intermolecular hydrogen bonding grants water: (1) High specific heat & heat of vaporization, (2) Cohesion & surface tension, (3) Adhesion & capillary action, (4) Solid density anomaly (ice floats), (5) Universal polar solvent capacity.",
        "apTip": "On FRQs, never just write \"water has hydrogen bonds.\" You must explicitly connect the property to biological function (e.g. \"Hydrogen bonding allows high heat of vaporization, enabling evaporative cooling to maintain organismal homeostasis\")."
      },
      {
        "name": "Dehydration Synthesis vs. Hydrolysis Polymerization",
        "conditions": "Biomolecular assembly and breakdown in biological cells.",
        "conclusion": "Dehydration synthesis (condensation) joins monomers by removing a water molecule ($-\\text{OH}$ from one, $-\\text{H}$ from another) forming a covalent bond. Hydrolysis cleaves covalent bonds by adding a water molecule.",
        "apTip": "Every peptide bond, phosphodiester bond, and glycosidic linkage is formed via dehydration synthesis and broken via enzymatic hydrolysis."
      }
    ],
    "formulas": [
      {
        "name": "Water Potential Formula",
        "latex": "\\Psi = \\Psi_p + \\Psi_s",
        "explanation": "Total water potential equals physical pressure potential plus chemical solute potential (bars)."
      },
      {
        "name": "Solute Potential Equation",
        "latex": "\\Psi_s = -i C R T",
        "explanation": "$i$ is ionization constant (1 for sucrose, 2 for $\\text{NaCl}$), $C$ is molarity (M), $R = 0.0831\\text{ L}\\cdot\\text{bars}/(\\text{mol}\\cdot\\text{K})$, $T$ is temperature in Kelvin."
      }
    ],
    "sections": [
      {
        "heading": "1. Biological Macromolecules Comparative Matrix",
        "content": "Summary of the four primary classes of biological macromolecules:\n\n| Macromolecule | Monomer Building Block | Key Chemical Elements | Characteristic Linkage Bond | Primary Biological Functions |\n| :--- | :--- | :--- | :--- | :--- |\n| **Carbohydrates** | Monosaccharides (e.g. Glucose) | C, H, O (1:2:1 ratio) | Glycosidic linkage | Short-term energy storage (glycogen, starch), structural integrity (cellulose, chitin) |\n| **Lipids** | Fatty acids + Glycerol | C, H, O (sometimes P) | Ester linkage | Long-term energy storage, cell membrane bilayer (phospholipids), steroid signaling |\n| **Proteins** | Amino acids (20 types) | C, H, O, N, S | Peptide bond (amide) | Enzymatic catalysis, structural support, membrane transport, antibody defense |\n| **Nucleic Acids** | Nucleotides (Sugar, Base, Phosphate) | C, H, O, N, P | Phosphodiester bond | Hereditary genetic code storage (DNA), protein synthesis template (mRNA, tRNA, rRNA) |\n\n*Protein Structure Levels*: Primary (amino acid sequence), Secondary ($\\alpha$-helices and $\\beta$-sheets via backbone H-bonds), Tertiary (3D folding via R-group interactions), Quaternary (multiple polypeptide subunits)."
      },
      {
        "heading": "2. Properties of Water, Hydrogen Bonding & Water Potential (CED 1.1 & 1.2)",
        "content": "Unique physical and chemical properties of water vital to life:\n\n* **Key Water Properties Emergent from Polarity**:\n  * **Cohesion & Surface Tension**: Hydrogen bonding between water molecules creates capillary action pulling water up plant xylem.\n  * **Adhesion**: Water molecules hydrogen bond to other polar surfaces (e.g. cellulose xylem walls).\n  * **High Specific Heat & Heat of Vaporization**: Stabilizes aquatic temperatures and provides evaporative cooling (sweating, transpiration).\n  * **Density Anomaly**: Solid ice is less dense than liquid water due to an open hexagonal crystal lattice, insulating aquatic life below.\n* **Water Potential Calculation Formula**:\n  $$\\Psi = \\Psi_s + \\Psi_p$$\n  * Water always flows passively from **higher water potential to lower water potential**.\n  * In an open container, pressure potential $\\Psi_p = 0$.\n  * **Solute Potential**:\n    $$\\Psi_s = -iCRT$$\n    *(Where $i$ = ionization constant [$1.0$ for sucrose, $2.0$ for $NaCl$], $C$ = molar concentration in M, $R = 0.0831\\text{ L}\\cdot\\text{bar}/(\\text{mol}\\cdot\\text{K})$, and $T = \\text{temp in Kelvin} = {^{\\circ}\\text{C}} + 273$). Adding solute ALWAYS makes $\\Psi_s$ more negative!*"
      },
      {
        "heading": "3. Protein Folding Hierarchy & Nucleic Acid Directionality (CED 1.4 & 1.5)",
        "content": "Structural organization of life's informational polymers:\n\n* **The 4 Levels of Protein Structure**:\n  * **Primary ($1^{\\circ}$)**: Linear sequence of amino acids held by covalent peptide bonds formed via dehydration synthesis.\n  * **Secondary ($2^{\\circ}$)**: Localized alpha-helices and beta-pleated sheets stabilized exclusively by **hydrogen bonds between polypeptide backbone** atoms.\n  * **Tertiary ($3^{\\circ}$)**: 3D globular shape dictated by **R-group (side-chain) interactions**: hydrophobic clustering, ionic bonds, hydrogen bonds, and covalent disulfide bridges (cysteine).\n  * **Quaternary ($4^{\\circ}$)**: Association of two or more distinct polypeptide chains (e.g. hemoglobin has 4 subunits).\n* **Nucleic Acid Directionality ($5'$ to $3'$)**:\n  * DNA and RNA strands have intrinsic polarity: a **$5'$ phosphate group** and a **$3'$ hydroxyl ($-OH$) group**.\n  * New nucleotides can **ONLY be added to the free $3'$ end** via phosphodiester bond formation during replication and transcription!"
      },
      {
        "heading": "3. Functional Groups & Macromolecular Bonding Chemistry (CED 1.3)",
        "content": "Functional groups bestow distinct chemical reactivities upon biological molecules:\n- **Hydroxyl ($-\\text{OH}$):** Polar, hydrophilic; forms hydrogen bonds; characteristic of alcohols and sugars.\n- **Carboxyl ($-\\text{COOH}$):** Acts as an acid (donates $H^+$ in aqueous solution to become $-\\text{COO}^-$); found in amino acids and fatty acids.\n- **Amino ($-\\text{NH}_2$):** Acts as a base (accepts $H^+$ to become $-\\text{NH}_3^+$); found in amino acids.\n- **Sulfhydryl ($-\\text{SH}$):** Cross-links via covalent disulfide bridges ($-S-S-$) between cysteine residues, stabilizing tertiary protein conformation.\n- **Phosphate ($-\\text{PO}_4^{2-}$):** Strongly acidic, negatively charged; key component of ATP, nucleic acid backbones, and phospholipid heads."
      },
      {
        "heading": "4. Protein Structure Levels & Denaturation Factors (CED 1.4–1.5)",
        "content": "Protein function is strictly determined by four hierarchical structural tiers:\n1. **Primary Structure:** Linear sequence of amino acids joined by covalent peptide bonds directed by DNA mRNA codons.\n2. **Secondary Structure:** Localized repetitive folding into $\\alpha$-helices and $\\beta$-pleated sheets maintained by hydrogen bonds between amino and carboxyl groups of the polypeptide backbone (R-groups not involved).\n3. **Tertiary Structure:** Complex 3D folding stabilized by interactions between **R-group side chains**: hydrophobic clustering, van der Waals forces, ionic bonds (salt bridges), hydrogen bonds, and covalent disulfide bridges.\n4. **Quaternary Structure:** Association of multiple polypeptide subunits (e.g., hemoglobin consisting of 2 $\\alpha$ and 2 $\\beta$ globin chains).\n- **Denaturation:** Disruption of secondary, tertiary, and quaternary bonds due to extreme temperature or pH changes, causing irreversible loss of catalytic function."
      },
      {
        "heading": "6. Official AP Lab: Water Potential Potato Core Osmolarity Investigation (Skill 4.2)",
        "content": "The cornerstone AP Biology inquiry lab on osmotic balance and solute potential:\n\n* **The Water Potential Governing Equation**:\n  $$\\Psi = \\Psi_p + \\Psi_s$$\n  * $\\Psi$: Total water potential (bars). Water ALWAYS moves spontaneously from areas of **higher water potential** (less negative / dilute) to **lower water potential** (more negative / concentrated).\n  * $\\Psi_p$: Pressure potential (in open beakers, $\\Psi_p = 0$).\n  * $\\Psi_s$: Solute (osmotic) potential, calculated via:\n    $$\\Psi_s = -iCRT$$\n    * $i$: Ionization constant ($1.0$ for sucrose/glucose; $2.0$ for $\\text{NaCl}$ because it dissociates into $\\text{Na}^+$ and $\\text{Cl}^-$).\n    * $C$: Molar concentration of solute ($\\text{moles}/L$).\n    * $R$: Pressure constant ($0.0831\\text{ L}\\cdot\\text{bar}/(\\text{mol}\\cdot\\text{K})$).\n    * $T$: Absolute temperature in Kelvin ($T_K = ^\\circ\\text{C} + 273$).\n* **Experimental Procedure**:\n  1. Cut uniform cylinders of potato tuber tissue using a cork borer; blot dry and record initial masses ($m_i$).\n  2. Submerge cores in a graded series of known sucrose molarities ($0.0\\text{ M}, 0.2\\text{ M}, 0.4\\text{ M}, 0.6\\text{ M}, 0.8\\text{ M}, 1.0\\text{ M}$) for 24 hours.\n  3. Remove cores, blot, and measure final masses ($m_f$).\n  4. Calculate percentage change in mass: $\\%\\Delta m = \\frac{m_f - m_i}{m_i} \\times 100\\%$.\n* **Data Interpolation & Finding Tissue Molarity**:\n  * Plot $\\%\\Delta m$ on vertical axis vs sucrose molarity on horizontal axis.\n  * Cores in hypotonic solutions gain mass ($\\%\\Delta m > 0$); cores in hypertonic solutions lose mass ($\\%\\Delta m < 0$).\n  * The **$x$-intercept** (where $\\%\\Delta m = 0$) represents the **isotonic molar concentration** of the internal potato cells.\n  * Use this equilibrium concentration $C$ to calculate the internal solute potential $\\Psi_s$ of the plant tissue."
      },
      {
        "heading": "7. Macromolecular Directionality & Polymerization Mechanics (CED 1.3-1.6)",
        "content": "Directional polarity dictates biological function across the four organic polymers:\n\n* **Dehydration Synthesis vs. Hydrolysis**:\n  * **Dehydration (Condensation) Synthesis**: Covalently bonds monomers together through the removal of a water molecule ($-\\text{H}$ from one monomer, $-\\text{OH}$ from the other); requires ATP input.\n  * **Hydrolysis**: Breaks covalent bonds between monomers by adding a water molecule; releases energy.\n* **Structural Directionality of Biopolymers**:\n  * **Nucleic Acids ($5' \\rightarrow 3'$)**:\n    * Nucleotides are added exclusively to the free $3'-\\text{OH}$ group of the growing strand, forming a phosphodiester bond.\n    * DNA strands are **antiparallel** ($5'-3'$ aligns with $3'-5'$); purines ($A, G$) pair with pyrimidines ($T, C$) via hydrogen bonds ($A=T$ shares 2 H-bonds; $G\\equiv C$ shares 3 H-bonds, requiring higher thermal denaturation temperature).\n  * **Proteins ($N \\rightarrow C$)**:\n    * Polypeptides have structural polarity: an **$N$-terminus** (free amino group, $-\\text{NH}_2$) and a **$C$-terminus** (free carboxyl group, $-\\text{COOH}$).\n    * Peptide bonds form when the amine nitrogen of an incoming amino acid attacks the carboxyl carbon of the chain.\n  * **Carbohydrate Isomers (Starch vs. Cellulose)**:\n    * $\\alpha$-glucose linkages (starch/glycogen): Helical, branched chains easily cleaved by amylase for metabolic fuel.\n    * $\\beta$-glucose linkages (cellulose): Linear, rigid, unbranched cables forming plant cell walls; cannot be hydrolyzed by human digestive enzymes."
      }
    ],
    "workedExamples": [
      {
        "title": "Water Potential Calculation in Plant Tissue",
        "topicRef": "CED 1.1 Properties of Water & Osmosis",
        "question": "A plant cell with an internal solute potential $\\Psi_s = -4.5\\text{ bars}$ and pressure potential $\\Psi_p = +1.5\\text{ bars}$ is placed in an open beaker of $0.15\\text{ M}$ sucrose solution at $27^{\\circ}\\text{C}$. Determine (a) the water potential of the cell, (b) the water potential of the beaker solution, and (c) the net direction of water movement.",
        "solutionSteps": [
          "Step 1: Calculate cell water potential: $\\Psi_{\\text{cell}} = \\Psi_s + \\Psi_p = -4.5 + 1.5 = -3.0\\text{ bars}$.",
          "Step 2: Convert temperature to Kelvin: $T = 27 + 273 = 300\\text{ K}$.",
          "Step 3: Calculate beaker solute potential: Sucrose does not ionize $\\implies i = 1$.",
          "Step 4: $\\Psi_{s,\\text{beaker}} = -iCRT = -(1)(0.15\\text{ mol/L})(0.0831\\text{ L}\\cdot\\text{bars/mol}\\cdot\\text{K})(300\\text{ K}) = -3.74\\text{ bars}$.",
          "Step 5: Beaker is open to atmosphere $\\implies \\Psi_{p,\\text{beaker}} = 0 \\implies \\Psi_{\\text{beaker}} = -3.74\\text{ bars}$.",
          "Step 6: Compare potentials: $\\Psi_{\\text{cell}} (-3.0\\text{ bars}) > \\Psi_{\\text{beaker}} (-3.74\\text{ bars})$. Water always moves from higher (less negative) to lower (more negative) water potential."
        ],
        "finalAnswer": "$\\Psi_{\\text{cell}} = -3.0\\text{ bars}$; $\\Psi_{\\text{beaker}} = -3.74\\text{ bars}$. Water moves OUT of the cell into the beaker solution.",
        "apScoringTip": "Remember that open containers always have $\\Psi_p = 0$. Water flows toward the MORE NEGATIVE water potential."
      }
    ],
    "diagrams": [
      {
        "id": "bio_water_potential",
        "title": "Water Potential and Osmotic Flow Diagram",
        "subtitle": "High (Less Negative) to Low (More Negative) Potential Gradient",
        "type": "water_potential_gradient",
        "description": "U-tube showing semipermeable membrane with water molecules flowing downhill along water potential gradient toward lower solute potential.",
        "takeaway": "Water flows down its potential gradient: From high $\\Psi$ (dilute, hypo-osmotic) to low $\\Psi$ (concentrated, hyper-osmotic)."
      }
    ],
    "commonTraps": [
      "Assuming that adding solute increases water potential. Solutes ALWAYS decrease water potential (making $\\Psi_s$ more negative), which attracts water.",
      "Claiming lipids are true polymers. Lipids are macromolecules composed of fatty acids and glycerol, but they do not form repetitive monomer chains like proteins or polysaccharides.",
      "Forgetting that secondary protein structure involves only the polypeptide backbone (C=O and N-H), while tertiary structure is driven by R-group side chain interactions."
    ],
    "cramSheet": [
      "Water potential: $\\Psi = \\Psi_p + \\Psi_s$; $\\Psi_s = -iCRT$. Water flows from high $\\Psi$ to low $\\Psi$.",
      "Open container has $\\Psi_p = 0$; pure water at atmospheric pressure has $\\Psi = 0$.",
      "Nucleic acid directionality: Synthesized $5' \\rightarrow 3'$ (phosphate at $5'$, hydroxyl at $3'$).",
      "Protein directionality: N-terminus (amino) to C-terminus (carboxyl)."
    ]
  },
  {
    "unitId": "u2",
    "unitNumber": 2,
    "title": "Cell Structure and Function",
    "examWeight": "10%–13% of AP Exam",
    "bigIdea": "Cells are the fundamental units of life. Subcellular components and compartmentalization facilitate biological processes and metabolic efficiency.",
    "keyTheorems": [
      {
        "name": "Surface Area-to-Volume (SA/V) Ratio Constraint",
        "conditions": "Spherical or cuboidal cells exchanging nutrients and wastes across cell membrane.",
        "conclusion": "As cell size increases, volume grows cubically ($r^3$) while surface area grows quadratically ($r^2$), causing SA/V ratio to decline. High SA/V ratio is essential to sustain metabolic diffusion rates.",
        "apTip": "Cells that specialize in absorption (e.g. intestinal villi, root hairs) maximize SA/V ratio through membrane folding, microvilli projections, or elongated shapes."
      },
      {
        "name": "Endosymbiotic Theory of Eukaryotic Evolution",
        "conditions": "Origins of mitochondria and chloroplasts in eukaryotic cells.",
        "conclusion": "Mitochondria and chloroplasts originated as free-living prokaryotic organisms engulfed by ancestral anaerobic hosts, evidenced by: (1) Double membranes, (2) Circular non-histone DNA, (3) Autonomous replication via binary fission, (4) Prokaryotic 70S ribosomes.",
        "apTip": "This is tested on virtually every AP exam! Cite at least two specific structural pieces of evidence when justifying endosymbiosis on FRQs."
      }
    ],
    "formulas": [
      {
        "name": "Surface Area and Volume of Sphere",
        "latex": "\\text{SA} = 4\\pi r^2, \\quad V = \\frac{4}{3}\\pi r^3, \\quad \\frac{\\text{SA}}{V} = \\frac{3}{r}",
        "explanation": "Demonstrates that SA/V ratio is inversely proportional to radius $r$."
      }
    ],
    "sections": [
      {
        "heading": "1. Membrane Transport Mechanisms Comparison",
        "content": "Cellular transport across the selectively permeable phospholipid bilayer:\n\n| Transport Type | Energy Required? | Concentration Gradient | Transport Protein Needed? | Examples |\n| :--- | :--- | :--- | :--- | :--- |\n| **Simple Diffusion** | NO ($0$ ATP) | High $\\rightarrow$ Low (Down) | NO | Small nonpolar molecules: $\\text{O}_2, \\text{CO}_2, \\text{N}_2$, steroids |\n| **Osmosis** | NO ($0$ ATP) | High $\\Psi \\rightarrow$ Low $\\Psi$ | YES (Aquaporins accelerate) | Water ($\\text{H}_2\\text{O}$) |\n| **Facilitated Diffusion** | NO ($0$ ATP) | High $\\rightarrow$ Low (Down) | YES (Channels or Carriers) | Large polar molecules (Glucose), ions ($\\text{Na}^+, \\text{K}^+, \\text{Ca}^{2+}$) |\n| **Primary Active Transport** | **YES** (ATP Hydrolysis) | Low $\\rightarrow$ High (Against) | YES (Pumps / ATPases) | $\\text{Na}^+/\\text{K}^+$ ATPase pump ($3\\text{Na}^+$ out, $2\\text{K}^+$ in) |\n| **Secondary (Active) Cotransport**| **YES** (Electrochemical) | Low $\\rightarrow$ High (Against) | YES (Symporter/Antiporter) | $\\text{Na}^+$/Glucose cotransporter, Proton-sucrose pump |\n| **Bulk Endocytosis / Exocytosis**| **YES** (Vesicle motor ATP) | N/A (Bulk packaging) | NO (Vesicular fusion) | Macrophage phagocytosis, insulin secretion |"
      },
      {
        "heading": "2. Subcellular Compartmentalization & Endosymbiosis (CED 2.1 & 2.2)",
        "content": "Eukaryotic cell compartmentalization and organelle specialization:\n\n* **Endomembrane System Flow**:\n  $$\\text{Nucleus (mRNA)} \\rightarrow \\text{Rough ER (translation/folding)} \\rightarrow \\text{Golgi (modification/sorting)} \\rightarrow \\text{Vesicles/Membrane}$$\n* **Endosymbiotic Theory Evidence**:\n  * Free-living ancestral aerobic prokaryotes and photosynthetic cyanobacteria were engulfed by primitive eukaryotic host cells.\n  * **Four Pillars of Evidence for Mitochondria and Chloroplasts**:\n    1. **Double Membranes**: Outer membrane derived from host vesicle; inner membrane represents original bacterial membrane.\n    2. **Independent Circular DNA**: Have their own naked circular genomes similar to bacterial plasmids.\n    3. **Bacterial-Type Ribosomes**: Possess $70S$ ribosomes (unlike host cytoplasmic $80S$ ribosomes).\n    4. **Binary Fission**: Replicate autonomously within the cell by splitting in half."
      },
      {
        "heading": "3. Surface Area-to-Volume ($SA/V$) Ratio & Tonicity (CED 2.3 & 2.8)",
        "content": "Cell size constraints and osmotic environmental interactions:\n\n* **Surface Area-to-Volume ($SA/V$) Constraint**:\n  * As a sphere or cube grows in linear dimension $r$, surface area increases by $r^2$ while volume increases by $r^3$.\n  * **Smaller cells have a larger $SA/V$ ratio**, facilitating rapid exchange of nutrients, waste gases, and thermal energy. Large eukaryotic cells overcome this constraint through internal membrane folding (mitochondrial cristae, ER folds).\n* **Tonicity and Cellular Osmotic States**:\n\n| Environment | Solute Concentration | Water Movement | Plant Cell State | Animal Cell State |\n| :--- | :--- | :--- | :--- | :--- |\n| **Hypotonic** | Lower solute than cell | Flows INTO cell | **Turgid (Normal)** | Lysis (Bursts) |\n| **Isotonic** | Equal solute to cell | Equal dynamic exchange | Flaccid (Wilts) | **Normal (Homeostasis)** |\n| **Hypertonic** | Higher solute than cell | Flows OUT of cell | Plasmolyzed (Shrinks) | Crenated (Shriveled) |"
      },
      {
        "heading": "3. Surface Area-to-Volume Ratio & Metabolic Constraints (CED 2.3)",
        "content": "Cellular dimensions are strictly limited by geometry:\n- **Mathematical Formula:** For a spherical cell, $\\text{Surface Area} = 4\\pi r^2$ and $\\text{Volume} = \\frac{4}{3}\\pi r^3$.\n- **The Scaling Paradox:** As a cell increases in linear dimension, volume grows cubically ($r^3$) while surface area grows only quadratically ($r^2$). Thus, the **Surface Area-to-Volume ($SA/V$) ratio drops precipitously**!\n- **Biological Consequence:**\n  - High $SA/V$ ratio (small cells) allows rapid diffusion of nutrients in and metabolic wastes out across the membrane.\n  - Large cells cannot support their metabolic demands through simple diffusion and must divide, flatten (e.g. red blood cells), or develop specialized folding membranes (e.g. microvilli in the intestinal lumen)."
      },
      {
        "heading": "4. Endomembrane Secretory Pathway & Endosymbiotic Theory (CED 2.1, 2.11)",
        "content": "Coordination of cellular organelles for protein synthesis and export:\n- **Protein Secretion Pathway:**\n  $$\\text{Nucleus (mRNA)} \\to \\text{Ribosome on Rough ER} \\to \\text{Transport Vesicle} \\to \\text{Golgi Apparatus (cis } \\to \\text{ trans)} \\to \\text{Secretory Vesicle} \\to \\text{Plasma Membrane (Exocytosis)}$$\n  - Rough ER folds polypeptides into 3D shapes and adds initial carbohydrate tags.\n  - Golgi apparatus modifies, sorts, and packages glycoproteins into destination vesicles.\n- **Endosymbiotic Theory Evidence (Mitochondria & Chloroplasts):**\n  1. **Double Membranes:** Outer membrane derived from ancestral host vacuole; inner membrane retained from engulfed prokaryote.\n  2. **Circular DNA:** Possess their own circular, non-histone bacterial DNA chromosomes.\n  3. **70S Ribosomes:** Contain prokaryotic-like ribosomes sensitive to bacterial antibiotics.\n  4. **Self-Replication:** Divide independently within eukaryotic cells via binary fission."
      },
      {
        "heading": "6. Surface Area-to-Volume Ratios & Diffusion Constraints (CED 2.3)",
        "content": "Mathematical geometric limits governing cell size and specialized adaptations:\n\n* **Geometric SA/V Derivations**:\n  * For a spherical cell of radius $r$:\n    $$\\frac{SA}{V} = \\frac{4\\pi r^2}{\\frac{4}{3}\\pi r^3} = \\frac{3}{r}$$\n  * For a cubical cell of side length $s$:\n    $$\\frac{SA}{V} = \\frac{6s^2}{s^3} = \\frac{6}{s}$$\n* **Biological Consequences of Increasing Size**:\n  * As cell dimensions double, volume increases by a factor of 8 ($r^3$), while surface area only increases by a factor of 4 ($r^2$).\n  * The $SA/V$ ratio rapidly declines $\\implies$ the plasma membrane cannot exchange nutrients, oxygen, and metabolic waste fast enough to support the interior volume.\n  * Therefore, metabolic rate per unit volume drops, or cells must divide.\n* **Evolutionary Adaptations to Maximize SA/V**:\n  * **Microvilli**: Finger-like projections of the apical plasma membrane in intestinal enterocytes and kidney nephrons.\n  * **Root Hairs**: Slender cellular extensions in plant roots dramatically enhancing water/mineral uptake.\n  * **Flattened Biconcave Morphology**: Mammalian erythrocytes (red blood cells) have lost their nucleus to optimize diffusion distance for $O_2$."
      },
      {
        "heading": "7. Membrane Biophysics: Cotransport & Electrogenic Pumps (CED 2.6-2.9)",
        "content": "The bioenergetics of transmembrane movement against concentration gradients:\n\n* **Primary Active Transport ($\\text{Na}^+/\\text{K}^+$ ATPase Pump)**:\n  * Hydrolyzes 1 ATP molecule to export $3\\text{ Na}^+$ out of the cell and import $2\\text{ K}^+$ into the cell.\n  * Creates both a chemical concentration gradient and an electrical charge differential (**Electrochemical Gradient**), making the intracellular fluid negative relative to extracellular fluid.\n* **Secondary Active Transport (Cotransport / Symport)**:\n  * Uses the electrochemical potential energy stored in the $\\text{Na}^+$ gradient (established by the primary pump) to drag another molecule against its concentration gradient.\n  * **$\\text{Na}^+$-Glucose Symporter (SGLT)**: $\\text{Na}^+$ rushes down its steep electrochemical gradient into intestinal epithelial cells, pulling glucose molecules against their concentration gradient into the cell simultaneously.\n* **Endocytosis Pathways**:\n  * **Phagocytosis**: \"Cell eating\" — large particulate matter or pathogens engulfed into a phagosome and fused with lysosomes.\n  * **Pinocytosis**: \"Cell drinking\" — non-specific sampling of extracellular fluid droplets.\n  * **Receptor-Mediated Endocytosis**: Extracellular ligands bind specific cell-surface receptors, triggering clathrin protein aggregation and vesicle budding (e.g., cholesterol uptake via LDL receptors)."
      }
    ],
    "workedExamples": [
      {
        "title": "Cell Tonicity and Volume Response in Dialysis Bag Experiment",
        "topicRef": "CED 2.8 Tonicity & Osmoregulation",
        "question": "A dialysis bag containing $0.4\\text{ M}$ glucose solution is submerged in a beaker containing $0.1\\text{ M}$ glucose solution. The dialysis tubing is permeable to water but impermeable to glucose. Predict (a) the tonicity of the beaker relative to the bag, (b) the direction of net water movement, and (c) what happens to the mass of the dialysis bag.",
        "solutionSteps": [
          "Step 1: Compare solute concentrations: Bag is $0.4\\text{ M}$ (higher solute $\\implies$ hypertonic). Beaker is $0.1\\text{ M}$ (lower solute $\\implies$ hypotonic).",
          "Step 2: Beaker solution is hypotonic relative to dialysis bag.",
          "Step 3: Water moves from hypotonic (high water potential) to hypertonic (low water potential).",
          "Step 4: Water moves into the dialysis bag across the semipermeable membrane.",
          "Step 5: Influx of water causes the mass and volume of the dialysis bag to increase."
        ],
        "finalAnswer": "Beaker is hypotonic; Net water moves INTO the dialysis bag; Mass of the bag increases.",
        "apScoringTip": "Always explicitly state \"the beaker is hypotonic to the bag\" rather than just \"it is hypotonic.\" Tonicity is a relative comparison between two compartments."
      }
    ],
    "diagrams": [
      {
        "id": "bio_fluid_mosaic",
        "title": "Fluid Mosaic Cell Membrane Structure",
        "subtitle": "Phospholipid Bilayer, Embedded Integral Proteins, and Cholesterol",
        "type": "fluid_mosaic_membrane",
        "description": "Diagram of phospholipid bilayer with hydrophilic phosphate heads pointing outward, hydrophobic fatty acid tails pointing inward, transmembrane proteins, and cholesterol molecules modulating fluidity.",
        "takeaway": "Cholesterol buffers membrane fluidity: Prevents excessive fluidity at high temperatures and prevents tight packing/freezing at cold temperatures."
      }
    ],
    "commonTraps": [
      "Assuming plant cells burst in hypotonic solutions. Plant cell walls exert turgor pressure ($\\Psi_p > 0$) that prevents lysis, maintaining ideal turgid state.",
      "Claiming large polar molecules like glucose cross via simple diffusion. Glucose requires transport proteins (GLUT facilitators) due to polarity and size.",
      "Confusing endocytosis with exocytosis. Endocytosis takes materials in via membrane invagination; exocytosis fuses vesicles with membrane to secrete contents."
    ],
    "cramSheet": [
      "High SA/V ratio is required for rapid nutrient and waste diffusion.",
      "Endosymbiotic evidence: Double membranes, circular DNA, 70S ribosomes, binary fission.",
      "Passive transport: Down gradient, zero ATP. Active transport: Against gradient, requires ATP.",
      "Hypertonic solution: Cell shrinks (crenates/plasmolyzes). Hypotonic: Cell swells (animal lyse, plant turgid)."
    ]
  },
  {
    "unitId": "u3",
    "unitNumber": 3,
    "title": "Cellular Energetics",
    "examWeight": "12%–16% of AP Exam",
    "bigIdea": "Organisms capture, store, and utilize free energy through coupled enzymatic pathways including photosynthesis and cellular respiration.",
    "keyTheorems": [
      {
        "name": "Enzyme Catalysis & Induced Fit Mechanism",
        "conditions": "Substrate binding to active site of an enzyme protein.",
        "conclusion": "Enzymes lower the activation energy ($E_a$) of biological reactions without altering $\\Delta G$. Extreme temperature or pH disrupts hydrogen and ionic bonds, causing denaturation and irreversible loss of catalytic function.",
        "apTip": "Competitive inhibitors bind to the active site (can be overcome by adding more substrate); noncompetitive (allosteric) inhibitors bind to a separate site, altering enzyme conformation (cannot be overcome by excess substrate)."
      },
      {
        "name": "Chemiosmosis and Proton-Motive Force",
        "conditions": "Electron Transport Chains in mitochondria (inner membrane) and chloroplasts (thylakoid membrane).",
        "conclusion": "Exergonic electron flow pumps protons ($H^+$) across the membrane, establishing an electrochemical proton gradient. Protons diffuse back through ATP Synthase, driving phosphorylation of ADP into ATP.",
        "apTip": "If a membrane becomes uncoupled or leaky to protons (e.g. dinitrophenol / uncoupling proteins in brown fat), electron transport continues and heat is generated, but ATP synthesis halts!"
      }
    ],
    "formulas": [
      {
        "name": "Gibbs Free Energy in Biological Systems",
        "latex": "\\Delta G = \\Delta H - T\\Delta S",
        "explanation": "Exergonic reactions ($\\Delta G < 0$) power endergonic reactions ($\\Delta G > 0$) via ATP coupling."
      }
    ],
    "sections": [
      {
        "heading": "1. Photosynthesis vs. Cellular Respiration Master Summary",
        "content": "Direct comparison of the two master bioenergetic pathways:\n\n| Feature | Photosynthesis | Cellular Respiration |\n| :--- | :--- | :--- |\n| **Overall Equation** | $6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Light} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$ | $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\approx 30\\text{–}32\\text{ ATP}$ |\n| **Organelle Location** | Chloroplast (Thylakoids & Stroma) | Mitochondria (Matrix & Inner Cristae) |\n| **Initial Electron Donor** | Water ($\\text{H}_2\\text{O}$, photolysis releases $\\text{O}_2$) | Glucose (hydrogens transferred to $\\text{NADH}, \\text{FADH}_2$) |\n| **Final Electron Acceptor** | $\\text{NADP}^+$ (reduced to $\\text{NADPH}$) | Oxygen ($\\text{O}_2$, reduced to form $\\text{H}_2\\text{O}$) |\n| **Proton Gradient Reservoir** | Thylakoid lumen (high $[\\text{H}^+]$, low pH) | Mitochondrial intermembrane space (high $[\\text{H}^+]$) |\n| **Carbon Fixation Step** | Calvin Cycle in Stroma (catalyzed by RuBisCO) | Krebs (Citric Acid) Cycle in Matrix releases $\\text{CO}_2$ |"
      },
      {
        "heading": "2. Enzyme Catalysis, Active Sites & Environmental Stress (CED 3.13.3)",
        "content": "Enzymes are biological catalysts that lower activation energy ($E_a$):\n\n* **Induced-Fit Mechanism**: Substrate binding causes conformational changes in the enzyme's active site, straining substrate bonds and stabilizing the transition state.\n* **Environmental Impacts on Enzyme Activity**:\n  * **Temperature**: Rising temperature increases molecular collisions until the thermal kinetic energy disrupts weak hydrogen/ionic tertiary bonds, causing **denaturation** (irreversible loss of active site shape).\n  * **pH**: Changes in $[H^+]$ alter the ionization state of acidic and basic R-groups, disrupting ionic bonds and denaturing the enzyme.\n* **Inhibition Types**:\n  * **Competitive Inhibitor**: Chemically resembles substrate and binds directly to the active site; can be **overcome by increasing substrate concentration** $[S]$.\n  * **Noncompetitive / Allosteric Inhibitor**: Binds to an allosteric site away from the active site, changing enzyme conformation; **cannot be overcome** by adding substrate (decreases $V_{\\max}$). "
      },
      {
        "heading": "3. Proton Gradients, Chemiosmosis & ATP Synthase (CED 3.43.6)",
        "content": "The universal bioenergetic mechanism powering ATP generation:\n\n* **The Electron Transport Chain (ETC)**:\n  * High-energy electrons from $NADH$ and $FADH_2$ (respiration) or photo-excited electrons from $H_2O$ (photosynthesis) pass along membrane-bound redox proteins.\n  * As electrons drop in energy, energy is harnessed to pump $H^+$ protons across the membrane:\n    * **Cellular Respiration**: Protons pumped from mitochondrial matrix into the **intermembrane space**.\n    * **Photosynthesis**: Protons pumped from chloroplast stroma into the **thylakoid lumen**.\n* **Chemiosmosis and Proton-Motive Force**:\n  * Establishes both a chemical gradient ($\\Delta pH$) and electrical gradient ($\\Delta V$).\n  * Protons flow passively back across the membrane exclusively through the catalytic channel of **ATP Synthase**, powering rotational phosphorylation of $ADP + P_i \\rightarrow ATP$!"
      },
      {
        "heading": "3. Enzyme Kinetics, Allosteric Regulation & Inhibition (CED 3.1–3.3)",
        "content": "Enzymes are biological catalysts that speed up biochemical reactions without being consumed:\n- **Activation Energy ($E_a$):** Enzymes lower the activation energy barrier by orienting substrates, straining chemical bonds, or providing favorable microenvironments. Enzymes do NOT alter $\\Delta G$!\n- **Environmental Factors:**\n  - **Temperature:** Reaction rate rises with temperature due to increased molecular collisions until optimum temperature is reached, beyond which heat denatures tertiary enzyme structure.\n  - **pH:** Departures from optimum pH ionize amino acid R-groups in the active site, disrupting tertiary bonds.\n- **Inhibition Mechanisms:**\n  - **Competitive Inhibition:** Inhibitor mimics substrate shape and binds directly to the active site. Can be overcome by increasing substrate concentration ($V_{\\max}$ unchanged, apparent $K_m$ increases).\n  - **Noncompetitive (Allosteric) Inhibition:** Inhibitor binds to an allosteric site away from the active site, inducing a conformational shape change that inactivates the catalytic site. Cannot be overcome by substrate ($V_{\\max}$ decreases, $K_m$ unchanged)."
      },
      {
        "heading": "4. Cellular Respiration & Chemiosmosis Proton Gradients (CED 3.6)",
        "content": "The complete aerobic catabolism of glucose ($C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\sim 30\\text{-}32\\text{ ATP}$):\n1. **Glycolysis (Cytoplasm):** Anaerobic breakdown of glucose into 2 Pyruvate, generating net 2 ATP (substrate-level phosphorylation) and 2 NADH.\n2. **Pyruvate Oxidation & Citric Acid (Krebs) Cycle (Mitochondrial Matrix):** Acetyl-CoA is fully oxidized into $CO_2$, yielding 2 ATP, 8 NADH, and 2 $FADH_2$.\n3. **Oxidative Phosphorylation (Mitochondrial Inner Membrane):**\n   - **Electron Transport Chain (ETC):** High-energy electrons from NADH and $FADH_2$ flow through protein complexes I–IV, pumping protons ($H^+$) from the matrix into the intermembrane space.\n   - **Terminal Electron Acceptor:** Oxygen ($O_2$) accepts electrons and $H^+$ to form $H_2O$.\n   - **Chemiosmosis:** The steep proton gradient drives $H^+$ back into the matrix through **ATP Synthase**, generating $\\sim 26\\text{-}28\\text{ ATP}$ via rotary phosphorylation!"
      },
      {
        "heading": "5. Photosynthesis: Light-Dependent Reactions & Calvin Cycle (CED 3.5)",
        "content": "Conversion of light energy into chemical energy:\n$$6CO_2 + 6H_2O + \\text{photons} \\to C_6H_{12}O_6 + 6O_2$$\n- **Light Reactions (Thylakoid Membrane):**\n  - Photons excite electrons in Photosystem II (P680). Water is split (photolysis) to replenish electrons, releasing $O_2$ byproduct.\n  - Electrons pass through an ETC, pumping $H^+$ into the thylakoid lumen. ATP synthase generates ATP into the stroma.\n  - Electrons in Photosystem I (P700) are re-excited and transferred to NADP+ reductase to form NADPH.\n- **Calvin Cycle / Light-Independent (Stroma):**\n  - **Carbon Fixation:** The enzyme **RuBisCO** fixes atmospheric $CO_2$ onto 5-carbon RuBP, producing 3-PGA.\n  - **Reduction:** ATP and NADPH reduce 3-PGA into high-energy G3P (glyceraldehyde-3-phosphate).\n  - **Regeneration:** ATP is consumed to regenerate RuBP acceptor molecules. For every 6 turns of the Calvin cycle, 2 net G3P molecules exit to synthesize one glucose."
      },
      {
        "heading": "7. Official AP Lab: Cellular Respiration in Microrespirometers (Skill 4.2)",
        "content": "Investigating metabolic gas exchange rates in germinating seeds:\n\n* **Experimental Apparatus & Chemistry**:\n  * Vials containing germinating vs dormant non-germinating pea seeds; absorbent cotton soaked in $15\\%\\text{ KOH}$ (potassium hydroxide); non-absorbent polyester barrier; calibrated graduated pipet manometer.\n  * **The KOH Chemical Trap**:\n    $$\\text{CO}_2 (g) + 2\\text{KOH} (aq) \\rightarrow \\text{K}_2\\text{CO}_3 (s) + \\text{H}_2\\text{O} (l)$$\n    * As seeds undergo aerobic respiration ($C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O$), released $CO_2$ gas reacts immediately with KOH to precipitate as solid potassium carbonate.\n    * Therefore, the net gas volume inside the closed respirometer decreases solely as a function of **$O_2$ consumed**.\n    * Atmospheric pressure pushes the water droplet down the pipet manometer, allowing direct volumetric tracking of respiration.\n* **Controlled Variables & Physics Corrections**:\n  * A vial containing inert glass beads is run simultaneously as a **thermobarometer** to correct for ambient room temperature and barometric pressure fluctuations (Ideal Gas Law: $PV = nRT$).\n  * Corrected Oxygen Consumption: $\\Delta V = (V_{\\text{seed}} - V_{\\text{initial}}) - (V_{\\text{bead}} - V_{\\text{bead initial}})$."
      },
      {
        "heading": "8. Official AP Lab: Floating Leaf Disk Photosynthesis Assay (Skill 4.1)",
        "content": "Precision spectrophotometric inquiry into the light-dependent reactions:\n\n* **Procedure & Physics of Infiltration**:\n  1. Cut uniform disks from spinach or ivy leaves using a hole punch, avoiding major veins.\n  2. Submerge disks in a syringe containing $0.2\\%\\text{ NaHCO}_3$ (sodium bicarbonate, which provides dissolved inorganic carbon source).\n  3. Pull vacuum on the syringe to extract trapped gases ($O_2, N_2$) from the spongy mesophyll air spaces, replacing them with liquid bicarbonate solution.\n  4. The infiltrated disks become denser than water and sink to the bottom of a beaker.\n  5. Place beaker under controlled light source; as the light reactions of photosynthesis split water at Photosystem II ($2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$), oxygen gas accumulates in the mesophyll air spaces.\n  6. The disks regain buoyancy and float to the surface.\n* **Data Reduction ($ET_{50}$)**:\n  * Record the number of floating disks every minute.\n  * **$ET_{50}$ (Effective Time 50)**: The elapsed time at which $50\\%$ of the leaf disks are floating.\n  * Rate of photosynthesis is calculated as the inverse of $ET_{50}$: $\\text{Rate} = 1/ET_{50}$."
      }
    ],
    "workedExamples": [
      {
        "title": "Competitive vs. Noncompetitive Enzyme Kinetics Experiment",
        "topicRef": "CED 3.3 Enzyme Inhibition",
        "question": "An experiment measures enzyme reaction rate at varying substrate concentrations in the presence of Inhibitor X. The maximum velocity ($V_{\\max}$) is identical to the uninhibited enzyme, but the concentration of substrate needed to achieve $\\frac{1}{2}V_{\\max}$ ($K_m$) is significantly higher. Classify Inhibitor X and explain how its effect can be reversed.",
        "solutionSteps": [
          "Step 1: Identify kinetic hallmarks: $V_{\\max}$ unchanged, $K_m$ increased.",
          "Step 2: When $V_{\\max}$ is unchanged, it means the enzyme can still reach its full catalytic potential if substrate concentration is sufficiently elevated.",
          "Step 3: This behavior defines a COMPETITIVE inhibitor.",
          "Step 4: Competitive inhibitors bind reversibly to the enzyme active site, directly competing with substrate.",
          "Step 5: The inhibition can be reversed by adding high concentrations of substrate, which outcompetes the inhibitor for active site binding."
        ],
        "finalAnswer": "Inhibitor X is a Competitive Inhibitor; its effect is reversed by adding excess substrate.",
        "apScoringTip": "Know the distinction: Competitive inhibitors do NOT alter $V_{\\max}$ (they increase $K_m$); Noncompetitive allosteric inhibitors REDUCE $V_{\\max}$ (substrate cannot overcome them)."
      }
    ],
    "diagrams": [
      {
        "id": "bio_enzyme_inhibition",
        "title": "Enzyme Velocity vs. Substrate Concentration Curves",
        "subtitle": "Uninhibited vs. Competitive vs. Noncompetitive Inhibition",
        "type": "enzyme_kinetics_curve",
        "description": "Michaelis-Menten saturation curves showing uninhibited enzyme leveling off at $V_{\\max}$, competitive curve reaching the same $V_{\\max}$ at higher $[S]$, and noncompetitive curve plateauing at lower $V_{\\max}$.",
        "takeaway": "Competitive inhibition curve reaches full $V_{\\max}$ at high $[S]$; noncompetitive inhibition curve is suppressed and never reaches original $V_{\\max}$."
      }
    ],
    "commonTraps": [
      "Stating that plants only do photosynthesis and animals do respiration. Plants perform BOTH photosynthesis AND cellular respiration! Plant cells require mitochondria to produce ATP from sugars.",
      "Claiming oxygen is required for glycolysis. Glycolysis occurs in the cytoplasm and is completely anaerobic; it occurs in all living organisms.",
      "Thinking that enzymes supply energy to drive endergonic reactions. Enzymes only lower activation energy; they do not change $\\Delta G$."
    ],
    "cramSheet": [
      "Enzymes lower $E_a$; they do NOT change $\\Delta G$ or equilibrium.",
      "Competitive inhibitor: Binds active site; overcomes by adding substrate ($V_{\\max}$ unchanged).",
      "Noncompetitive inhibitor: Binds allosteric site; reduces $V_{\\max}$.",
      "Light reactions: Split $\\text{H}_2\\text{O}$, release $\\text{O}_2$, produce $\\text{ATP}$ and $\\text{NADPH}$ for Calvin cycle in stroma.",
      "Oxidative phosphorylation: $\\text{O}_2$ is the final electron acceptor, forming $\\text{H}_2\\text{O}$."
    ]
  },
  {
    "unitId": "u4",
    "unitNumber": 4,
    "title": "Cell Communication and Cell Cycle",
    "examWeight": "10%–15% of AP Exam",
    "bigIdea": "Cells communicate through signal transduction pathways. The cell cycle is regulated by internal checkpoints and cyclin-CDK complexes.",
    "keyTheorems": [
      {
        "name": "Three Stages of Signal Transduction",
        "conditions": "Ligand molecule binding to cell receptor.",
        "conclusion": "(1) Reception: Ligand binds specifically to membrane receptor (e.g. GPCR, Receptor Tyrosine Kinase) inducing conformational change; (2) Transduction: Intracellular relay cascade (protein kinases, phosphorylation cascades, second messengers like cAMP or $\\text{Ca}^{2+}$) amplifying signal; (3) Response: Nuclear gene transcription or cytoplasmic enzyme activation.",
        "apTip": "Phosphorylation cascades allow massive SIGNAL AMPLIFICATION: A single ligand binding to one receptor activates cascades yielding millions of product molecules!"
      },
      {
        "name": "Cyclin and Cyclin-Dependent Kinase (CDK) Regulation",
        "conditions": "Eukaryotic cell progressing through $G_1, S, G_2$, and $M$ phases.",
        "conclusion": "CDK levels remain constant while cyclin concentrations fluctuate. When cyclin binds CDK, the active complex phosphorylates target proteins, driving the cell past checkpoints. Degradation of cyclin inactivates the kinase.",
        "apTip": "Failure of cell cycle checkpoints (e.g. mutations in tumor suppressor $p53$ or hyperactive proto-oncogenes like $ras$) leads to unregulated cell proliferation: Cancer."
      }
    ],
    "formulas": [
      {
        "name": "Mitotic Index",
        "latex": "\\text{Mitotic Index} = \\frac{\\text{Number of cells in mitosis}}{\\text{Total number of cells observed}}",
        "explanation": "Used to measure proliferative activity of tissues and tumor growth."
      }
    ],
    "sections": [
      {
        "heading": "1. Cell Cycle Checkpoints & Arrest Triggers",
        "content": "The three major eukaryotic cell division checkpoints:\n\n1. **$G_1$ Checkpoint (Restriction Point)**:\n   - Evaluates: Cell size, nutrient availability, growth factor signals, and DNA damage.\n   - If cleared: Cell commits to DNA replication in $S$ phase.\n   - If not cleared: Cell exits cycle into non-dividing $G_0$ quiescent state (e.g. mature neurons).\n2. **$G_2$ Checkpoint**:\n   - Evaluates: Completion of DNA replication and proofreading repair.\n   - Requires active MPF (Maturation Promoting Factor: Cyclin B + CDK1).\n3. **M Checkpoint (Spindle Assembly Checkpoint)**:\n   - Evaluates: All sister chromatid kinetochores are securely attached to spindle microtubules from opposite poles during metaphase.\n   - Prevents nondisjunction and aneuploid daughter cells."
      },
      {
        "heading": "2. Cell Signaling Receptors & Checkpoint Control Matrix",
        "content": "Master comparison of cellular receptors, second messenger pathways, and cell cycle checkpoints:\n\n| Pathway / Component | Ligand Property | Primary Mechanism & Second Messengers | Cellular Outcome | AP Exam Application & Pathology |\n| :--- | :--- | :--- | :--- | :--- |\n| **G-Protein Coupled Receptor (GPCR)** | Hydrophilic (peptide/protein, e.g. Epinephrine) | G-protein binds GTP $\\rightarrow$ Adenylyl Cyclase $\\rightarrow$ **cAMP** $\\rightarrow$ Protein Kinase A | Phosphorylation cascade, enzyme activation | Cholera toxin locks G-protein in active GTP state, causing fatal diarrhea |\n| **Receptor Tyrosine Kinase (RTK)** | Hydrophilic (Growth factors, Insulin) | Dimerization upon binding $\\rightarrow$ Auto-phosphorylation of tyrosine residues | Cell growth, division, and survival | Hyperactive RTK/ras mutations lead to uncontrolled tumor cell proliferation |\n| **Ligand-Gated Ion Channel** | Hydrophilic (Neurotransmitters, e.g. Acetylcholine) | Allosteric channel opening $\\rightarrow$ Rapid influx of ions ($\\text{Na}^+, \\text{Ca}^{2+}, \\text{Cl}^-$) | Membrane depolarization, action potentials | Target of neurotoxins (tetrodotoxin) and local anesthetics |\n| **Intracellular Steroid Receptor** | **Hydrophobic / Nonpolar** (Steroid hormones: Testosterone, Estrogen) | Diffuses across membrane $\\rightarrow$ Binds cytoplasm/nucleus $\\rightarrow$ Hormone-receptor complex | **Direct transcription factor** turning genes ON/OFF | Slower response than GPCRs, but long-lasting physiological changes |\n| **$G_1$ Restriction Checkpoint** | Internal & External | Cyclin D/E + CDK4/6; DNA damage activates **p53** | Commits to S-phase DNA synthesis or arrests to $G_0$ | Over 50% of human cancers harbor loss-of-function $p53$ mutations |\n| **M Spindle Checkpoint** | Internal kinetochore tension | APC/C (Anaphase-Promoting Complex) activates separase | Cleaves cohesin proteins, allowing anaphase separation | Prevents nondisjunction leading to Down syndrome (Trisomy 21) |"
      },
      {
        "heading": "3. Signal Transduction: Reception, Transduction & Response (CED 4.1–4.4)",
        "content": "The 3-stage model of cell communication:\n1. **Reception:** A signaling ligand (e.g. epinephrine, insulin) binds specifically to a cell-surface receptor protein:\n   - **G-Protein Coupled Receptors (GPCRs):** Ligand binding induces GDP-GTP exchange on the G-protein $\\alpha$-subunit, which activates adenylyl cyclase.\n   - **Receptor Tyrosine Kinases (RTKs):** Ligand binding causes dimerization and cross-phosphorylation of tyrosine residues.\n   - **Intracellular Receptors:** Hydrophobic ligands (e.g. steroid hormones estrogen, testosterone) pass directly across the lipid bilayer and bind receptors in the cytoplasm/nucleus to act directly as transcription factors!\n2. **Transduction:** Signal amplification via phosphorylation cascades:\n   - **Second Messengers:** Small, non-protein hydrophilic molecules like **cAMP** (cyclic AMP), $IP_3$, and $Ca^{2+}$ diffuse rapidly through the cytosol, activating Protein Kinase A (PKA).\n   - **Kinase Cascades:** Sequential phosphorylation activates downstream kinases, amplifying a single ligand signal into thousands of active enzymes.\n3. **Response:** Activation of specific cellular processes—gene expression transcription, metabolic enzyme activation, or apoptosis (programmed cell death)."
      },
      {
        "heading": "4. Cell Cycle Control: Checkpoints, Cyclins & Cancer (CED 4.6–4.7)",
        "content": "The eukaryotic cell cycle ($G_1 \\to S \\to G_2 \\to M$) is regulated by molecular check mechanisms:\n- **Key Checkpoints:**\n  - **$G_1$ Checkpoint (Restriction Point):** Checks cell size, nutrient stores, and DNA integrity. If passed, the cell commits to division; if failed, the cell exits into non-dividing $G_0$ resting state.\n  - **$G_2$ Checkpoint:** Ensures DNA replication in S-phase completed without errors before entering mitosis.\n  - **M-Spindle Checkpoint:** Occurs at metaphase; ensures all kinetochores are securely attached to spindle microtubules before anaphase separation.\n- **Molecular Regulators (Cyclins & CDKs):**\n  - Cyclin-Dependent Kinases (CDKs) are present at constant concentrations throughout the cell cycle.\n  - Cyclin proteins fluctuate in concentration, synthesizing during specific stages.\n  - Binding of cyclin activates CDK to form Maturation Promoting Factor (MPF), phosphorylating target proteins to drive mitosis.\n- **Oncogenesis:** Disruption of cell cycle regulators (e.g. mutated tumor suppressors like $p53$ or hyperactive proto-oncogenes like $Ras$) leads to unchecked proliferation and cancer."
      },
      {
        "heading": "5. Signal Transduction: GPCR Cascades, Second Messengers & Phosphorylation (CED 4.2-4.4)",
        "content": "The three-stage paradigm of cellular signaling (Reception, Transduction, Response):\n\n* **G-Protein Coupled Receptor (GPCR) Signaling**:\n  1. **Reception**: Signaling ligand (e.g., epinephrine) binds extracellular domain of GPCR, causing a conformational change in the transmembrane receptor.\n  2. **G-Protein Activation**: The intracellular loop activates a heterotrimeric G-protein, causing bound GDP to be displaced by GTP. The activated $\\alpha$-subunit dissociates.\n  3. **Second Messenger Generation**: The active G-protein stimulates **Adenylyl Cyclase**, an enzyme that converts ATP into **Cyclic AMP (cAMP)** (the ubiquitous second messenger).\n  4. **Protein Kinase Phosphorylation Cascade**: cAMP allosterically activates **Protein Kinase A (PKA)**. PKA phosphorylates downstream target enzymes in a sequential relay chain.\n  5. **Signal Amplification**: A single ligand binding event triggers the generation of thousands of cAMP molecules, activating millions of enzymes (e.g., glycogen phosphorylase releasing glucose in the liver within seconds).\n* **Signal Termination**:\n  * Phosphodiesterase degrades cAMP to AMP; G-protein intrinsic GTPase hydrolyzes GTP back to GDP; protein phosphatases strip phosphate groups from target proteins."
      },
      {
        "heading": "6. Cell Cycle Checkpoint Control, Cyclins & Cancer Oncology (CED 4.6-4.7)",
        "content": "Molecular governance of eukaryotic cell division:\n\n* **The Three Critical Molecular Checkpoints**:\n  * **$G_1$ Checkpoint (Restriction Point)**: The primary \"decision maker\". Assesses cell size, nutrient reserves, growth factor signals, and DNA integrity. If passed, the cell commits irreversibly to division; if denied, it exits into non-dividing $G_0$ resting phase.\n  * **$G_2$ Checkpoint**: Verifies that DNA replication was completed with fidelity during S-phase without errors before entering mitosis.\n  * **M Checkpoint (Spindle Assembly Checkpoint - SAC)**: Operates during metaphase; ensures all sister chromatid kinetochores are securely attached to spindle microtubules. Prevents nondisjunction and aneuploidy.\n* **Cyclin-CDK Regulation**:\n  * **Cyclin-Dependent Kinases (CDKs)**: Present at constant concentrations throughout the cell cycle, but inactive unless bound to a specific regulatory **Cyclin**.\n  * **Cyclin Concentration**: Fluctuates cyclically, synthesized in response to external growth factors and rapidly degraded by ubiquitin proteasomes.\n  * **MPF (Maturation-Promoting Factor)**: Cyclin B-CDK1 complex that triggers nuclear envelope breakdown, chromosome condensation, and spindle formation to initiate mitosis.\n* **Cancer Oncology Genetics**:\n  * **Tumor Suppressor Genes (Recessive / Loss of Function)**:\n    * **$p53$ (\"Guardian of the Genome\")**: Transcription factor activated by DNA damage; arrests cell cycle at $G_1$ for repair, or induces apoptosis if damage is irreparable.\n  * **Proto-Oncogenes (Dominant / Gain of Function)**:\n    * Stimulate normal growth. When mutated into **Oncogenes** (e.g., hyperactive Ras or HER2), they send continuous constitutive division signals even in the absence of growth factors."
      }
    ],
    "workedExamples": [
      {
        "title": "Signal Transduction Mutation Analysis",
        "topicRef": "CED 4.4 Changes in Signal Transduction Pathways",
        "question": "A mutation causes the G-protein in an epinephrine pathway to permanently bind GTP without hydrolyzing it to GDP. Predict the effect on (a) intracellular cyclic AMP (cAMP) levels, and (b) glucose release into the bloodstream.",
        "solutionSteps": [
          "Step 1: Understand normal pathway: Epinephrine binds GPCR $\\rightarrow$ G-protein exchanges GDP for GTP $\\rightarrow$ active G-protein stimulates adenylyl cyclase $\\rightarrow$ converts ATP to cAMP $\\rightarrow$ activates PKA $\\rightarrow$ stimulates glycogen breakdown to glucose.",
          "Step 2: Analyze mutation: G-protein cannot hydrolyze GTP $\\implies$ G-protein remains permanently trapped in its ACTIVE state.",
          "Step 3: Adenylyl cyclase is continuously stimulated even in the absence of epinephrine ligand.",
          "Step 4: Intracellular cAMP levels will remain chronically elevated.",
          "Step 5: Continuous activation of glycogen phosphorylase leads to excessive, uncontrolled glucose release into the blood."
        ],
        "finalAnswer": "Intracellular cAMP levels remain continuously elevated; Glucose release into the blood is permanently stimulated.",
        "apScoringTip": "Walk step-by-step through the pathway cascade: Identify the specific altered protein, trace downstream intermediates, and state the final physiological outcome."
      }
    ],
    "diagrams": [
      {
        "id": "bio_signal_cascade",
        "title": "Phosphorylation Cascade and Signal Amplification",
        "subtitle": "Sequential Kinase Activation Yielding Massive Intracellular Response",
        "type": "phosphorylation_cascade",
        "description": "Branching tree diagram showing 1 receptor activating 10 adenylyl cyclases, each producing 100 cAMP, each activating PKA, producing $10^6$ active enzymes.",
        "takeaway": "Phosphorylation cascades allow a minute chemical signal (one ligand) to be magnified into a massive, rapid physiological cellular response."
      }
    ],
    "commonTraps": [
      "Assuming steroid hormone receptors are on the outer cell membrane. Steroids are nonpolar lipids; they cross the lipid bilayer directly and bind to INTRACELLULAR receptors in cytoplasm or nucleus.",
      "Thinking CDK concentrations fluctuate during the cell cycle. CDK levels remain CONSTANT; only cyclin levels fluctuate to activate or deactivate CDKs.",
      "Confusing negative feedback with positive feedback. Negative feedback returns system to set point (homeostasis); positive feedback amplifies response until a terminal event (e.g. oxytocin in childbirth)."
    ],
    "cramSheet": [
      "GPCR pathway: Ligand $\\rightarrow$ GPCR $\\rightarrow$ G-protein (GTP) $\\rightarrow$ Adenylyl cyclase $\\rightarrow$ cAMP $\\rightarrow$ PKA.",
      "Steroid hormones bind intracellular receptors; peptide hormones bind cell-surface receptors.",
      "Cyclin rises to activate CDK; cyclin degradation deactivates CDK.",
      "$G_1$ checkpoint failure results in cell entering non-dividing $G_0$ state.",
      "Cancer results from mutated proto-oncogenes (gain of function) or mutated tumor suppressors like $p53$ (loss of function)."
    ]
  },
  {
    "unitId": "u5",
    "unitNumber": 5,
    "title": "Heredity and Classical Genetics",
    "examWeight": "8%–11% of AP Exam",
    "bigIdea": "Meiosis generates genetic variation through crossing over and independent assortment. Mendelian and non-Mendelian patterns govern inheritance of traits.",
    "keyTheorems": [
      {
        "name": "Mendel’s Laws of Inheritance",
        "conditions": "Sexual reproduction in diploid organisms.",
        "conclusion": "(1) Law of Segregation: Two alleles for each gene segregate during meiosis (anaphase I), so gametes carry only one allele; (2) Law of Independent Assortment: Genes on different non-homologous chromosomes assort independently during metaphase I.",
        "apTip": "The classic $9:3:3:1$ phenotypic ratio from a dihybrid cross ($AaBb \\times AaBb$) occurs ONLY if both genes are on separate chromosomes (unlinked)!"
      },
      {
        "name": "Genetic Linkage and Recombination Frequency",
        "conditions": "Genes located close together on the same homologous chromosome.",
        "conclusion": "Linked genes deviate from independent assortment and travel together unless separated by crossing over. Recombination frequency ($1\\% = 1\\text{ map unit / centimorgan}$) reflects physical distance between loci.",
        "apTip": "Maximum possible recombination frequency is $50\\%$. If recombination frequency is $50\\%$, the genes are either on different chromosomes or spaced extremely far apart."
      }
    ],
    "formulas": [
      {
        "name": "Chi-Square Goodness-of-Fit Test",
        "latex": "\\chi^2 = \\sum \\frac{(o - e)^2}{e}",
        "explanation": "$o$ is observed offspring count, $e$ is expected Mendelian count, degrees of freedom $\\text{df} = k - 1$."
      },
      {
        "name": "Recombination Frequency",
        "latex": "\\text{RF} = \\frac{\\text{Total Recombinant Offspring}}{\\text{Total Offspring}} \\times 100\\%",
        "explanation": "Yields map distance in centimorgans (cM)."
      }
    ],
    "sections": [
      {
        "heading": "1. Non-Mendelian Genetics Master Patterns",
        "content": "Key non-Mendelian inheritance models tested on the AP exam:\n\n| Inheritance Mode | Defining Characteristic | Classic Phenotypic Outcome |\n| :--- | :--- | :--- |\n| **Incomplete Dominance** | Heterozygote displays blended intermediate phenotype | Red $\\times$ White $\\rightarrow$ $100\\%$ Pink ($1:2:1$ ratio) |\n| **Codominance** | Heterozygote fully expresses both alleles simultaneously | ABO Blood Types: $I^A I^B$ produces both A and B surface antigens |\n| **Sex-Linked (X-Linked Recessive)** | Gene carried on X chromosome; males ($XY$) are hemizygous | Males affected much more frequently; carrier mothers pass trait to sons |\n| **Mitochondrial / Maternal** | Mitochondria passed exclusively in egg cytoplasm | Affected mother passes trait to **ALL** offspring; affected father passes to **NONE** |\n| **Polygenic Inheritance** | Multiple genes influence a single continuous trait | Bell-shaped curve distribution (e.g. human height, skin pigmentation) |"
      },
      {
        "heading": "2. Meiosis, Crossing Over & Genetic Diversity (CED 5.1 & 5.2)",
        "content": "Meiosis produces four genetically distinct haploid ($n$) gametes:\n\n* **Key Meiotic Events Generating Diversity**:\n  1. **Crossing Over (Synapsis)**: During Prophase I, non-sister chromatids of homologous pairs exchange reciprocal segments of DNA, creating novel recombinant chromatids.\n  2. **Independent Assortment**: During Metaphase I, homologous pairs align randomly at the metaphase plate ($2^n$ possible chromosomal combinations; over 8 million in humans).\n  3. **Random Fertilization**: Any sperm can fuse with any ovum ($2^{23} \\times 2^{23} > 70$ trillion combinations).\n* **Meiosis I vs. Meiosis II**:\n  * **Meiosis I**: Reductional division; separates **homologous chromosome pairs** ($2n \\rightarrow n$).\n  * **Meiosis II**: Equational division; separates **sister chromatids** ($n \\rightarrow n$)."
      },
      {
        "heading": "3. Mendelian Genetics, Pedigrees & Chi-Square ($\\chi^2$) Analysis (CED 5.3 & 5.4)",
        "content": "Statistical testing of genetic hypotheses on the AP exam:\n\n* **Mendel's Fundamental Laws**:\n  * **Law of Segregation**: Alleles for a gene separate during meiosis so each gamete carries only one allele.\n  * **Law of Independent Assortment**: Genes on different chromosomes sort independently during gamete formation.\n* **Chi-Square Goodness-of-Fit Test**:\n  $$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$\n  * $O$: Observed count in each phenotypic class.\n  * $E$: Expected count based on Mendelian null hypothesis (e.g. 9:3:3:1 for dihybrid cross).\n* **Interpreting Results**:\n  * Degrees of freedom: $df = \\text{number of phenotypic classes} - 1$.\n  * If calculated $\\chi^2 < \\text{critical value}$ ($p = 0.05$): **Fail to reject null hypothesis** (differences are due to chance).\n  * If calculated $\\chi^2 \\ge \\text{critical value}$: **Reject null hypothesis** (significant difference; genes may be linked on the same chromosome)!"
      },
      {
        "heading": "3. Meiosis & Generation of Genetic Diversity (CED 5.1–5.2)",
        "content": "Meiosis reduces a diploid ($2n$) germ cell into four genetically distinct haploid ($1n$) gametes:\n- **Meiosis I (Reductional Division):**\n  - **Prophase I (Crossing Over):** Homologous chromosomes pair up as tetrads (synapsis) and exchange non-sister chromatid segments at chiasmata, producing recombinant chromosomes.\n  - **Metaphase I (Independent Assortment):** Random alignment of maternal and paternal chromosome pairs along the metaphase plate ($2^n$ possible combinations; $2^{23} \\approx 8.4$ million in humans).\n- **Meiosis II (Equational Division):** Sister chromatids separate, analogous to mitosis.\n- **Fertilization:** Random union of sperm and egg multiplies genetic variability ($2^{23} \\times 2^{23} > 70$ trillion combinations)."
      },
      {
        "heading": "4. Non-Mendelian Genetics, Gene Linkage & Chi-Square Analysis (CED 5.3–5.6)",
        "content": "Patterns of inheritance that deviate from classical Mendel 3:1 ratios:\n- **Sex-Linked Traits:** Genes located on sex chromosomes (primarily X-linked). Hemizygous males ($X^b Y$) display recessive phenotypes far more frequently than females ($X^b X^b$) because males inherit only one X chromosome (from their mother).\n- **Linked Genes & Recombination Frequency:**\n  - Genes located close together on the same chromosome do NOT assort independently and tend to be inherited together.\n  - Recombination Frequency = $\\frac{\\text{Recombinant Offspring}}{\\text{Total Offspring}} \\times 100\\%$.\n  - $1\\%$ recombination frequency equals $1\\text{ map unit}$ (centimorgan) of genetic distance. Recombination frequency cannot exceed $50\\%$.\n- **Chi-Square ($\\chi^2$) Goodness-of-Fit Test:**\n  $$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$\n  Compare calculated $\\chi^2$ against critical value at degrees of freedom ($df = \\text{outcomes} - 1$) and $p = 0.05$. If $\\chi^2 > \\text{critical value}$, reject the null hypothesis (observed difference is statistically significant, not due to random chance)."
      },
      {
        "heading": "6. Official AP Lab: Chi-Square ($\\chi^2$) Goodness-of-Fit Analysis in Genetics (Skill 5.3)",
        "content": "Statistical hypothesis testing to evaluate genetic crosses:\n\n* **The Chi-Square Equation**:\n  $$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$\n  * $O$: Observed number of individuals in each phenotypic category.\n  * $E$: Expected number of individuals based on Mendelian theoretical ratios ($E = \\text{Total Offspring} \\times \\text{Theoretical Probability}$).\n* **Step-by-Step Null Hypothesis Protocol**:\n  1. State the **Null Hypothesis ($H_0$)**: There is no statistically significant difference between observed and expected phenotypic counts; any minor deviations are purely attributable to random chance.\n  2. Determine **Degrees of Freedom ($df$)**: $df = n - 1$, where $n$ is the number of distinct phenotypic outcome categories.\n  3. Locate the **Critical Value** in the table at the standard biological significance threshold $p = 0.05$.\n  4. Decision Rule:\n     * If $\\chi^2_{\\text{calculated}} < \\chi^2_{\\text{critical}} \\implies$ **Fail to reject $H_0$** (differences are due to chance; data fits Mendelian model).\n     * If $\\chi^2_{\\text{calculated}} > \\chi^2_{\\text{critical}} \\implies$ **Reject $H_0$** (significant difference; genes may be linked on the same chromosome or undergoing selection)."
      },
      {
        "heading": "7. Gene Linkage, Recombination Frequencies & Chromosome Mapping (CED 5.4)",
        "content": "Analyzing non-Mendelian inheritance patterns in linked loci:\n\n* **Mendelian Independent Assortment vs. Linkage**:\n  * Independent assortment (Mendel's 2nd Law) applies ONLY to genes located on different chromosomes or very far apart on the same chromosome (dihybrid test cross yields $1:1:1:1$ ratio).\n  * **Linked Genes**: Genes residing physically close to each other on the same chromosome tend to be inherited together as a unit, violating independent assortment.\n* **Calculating Recombination Frequency**:\n  $$\\text{Recombination Frequency} = \\frac{\\text{Total Recombinant Offspring (Non-Parental)}}{\\text{Total Offspring}} \\times 100\\%$$\n* **Constructing Genetic Linkage Maps**:\n  * $1\\%$ recombination frequency is defined as $1\\text{ map unit}$ ($1\\text{ m.u.}$ or $1\\text{ centimorgan [cM]}$).\n  * Map distances are additive over short intervals (e.g., if gene $A-B = 8\\text{ cM}$ and $B-C = 12\\text{ cM}$, and $A-C = 20\\text{ cM}$, the order is $A-B-C$).\n  * The maximum measurable recombination frequency between any two genes is $50\\%$ (at which point they assort independently)."
      }
    ],
    "workedExamples": [
      {
        "title": "Chi-Square Analysis of Dihybrid Fruit Fly Cross",
        "topicRef": "CED 5.6 Chromosomal Inheritance & Chi-Square",
        "question": "A dihybrid cross ($AaBb \\times aabb$) produces 1000 offspring: 280 $AB$, 220 $Ab$, 230 $aB$, and 270 $ab$. Test whether the genes assort independently using a chi-square test at significance level $p = 0.05$ (Critical value for $\\text{df} = 3$ is $7.81$).",
        "solutionSteps": [
          "Step 1: State null hypothesis ($H_0$): The genes assort independently according to Mendelian expectations of a $1:1:1:1$ ratio.",
          "Step 2: Calculate expected count for each phenotype: $e = \\frac{1000}{4} = 250$ for each class.",
          "Step 3: Calculate chi-square terms $\\frac{(o-e)^2}{e}$:",
          "- $AB$: $\\frac{(280 - 250)^2}{250} = \\frac{900}{250} = 3.60$",
          "- $Ab$: $\\frac{(220 - 250)^2}{250} = \\frac{900}{250} = 3.60$",
          "- $aB$: $\\frac{(230 - 250)^2}{250} = \\frac{400}{250} = 1.60$",
          "- $ab$: $\\frac{(270 - 250)^2}{250} = \\frac{400}{250} = 1.60$",
          "Step 4: Sum terms: $\\chi^2 = 3.60 + 3.60 + 1.60 + 1.60 = 10.40$.",
          "Step 5: Compare with critical value: Degrees of freedom $\\text{df} = 4 - 1 = 3$. Critical value = $7.81$.",
          "Step 6: Since calculated $\\chi^2 (10.40) > 7.81$, we REJECT the null hypothesis. The genes do not assort independently (they are linked)."
        ],
        "finalAnswer": "$\\chi^2 = 10.40 > 7.81$; Reject the null hypothesis. The genes are linked on the same chromosome.",
        "apScoringTip": "Always explicitly state: (1) Null hypothesis, (2) Calculated $\\chi^2$ value, (3) Comparison to critical table value, and (4) Definitive conclusion to \"reject\" or \"fail to reject\" $H_0$."
      }
    ],
    "diagrams": [
      {
        "id": "bio_meiosis_crossover",
        "title": "Meiosis I Crossing Over & Recombination",
        "subtitle": "Chiasmata Formation Yielding Non-Parental Gamete Chromosomes",
        "type": "meiosis_crossing_over",
        "description": "Homologous chromosome tetrad aligning in Prophase I with non-sister chromatids exchanging genetic segments at chiasmata, producing recombinant chromatids.",
        "takeaway": "Crossing over in Prophase I and independent assortment in Metaphase I generate the vast diversity of unique gamete genotypes."
      }
    ],
    "commonTraps": [
      "Using the word \"accept\" when analyzing a null hypothesis. In scientific statistics, you NEVER \"accept\" $H_0$; you either \"reject\" or \"fail to reject\" $H_0$!",
      "Assuming that fathers pass X-linked traits to their sons. Fathers contribute a Y chromosome to sons; sons inherit X-linked traits exclusively from their mothers.",
      "Calculating expected chi-square numbers as percentages rather than actual whole individual counts. Always use raw individual counts!"
    ],
    "cramSheet": [
      "Dihybrid test cross ratio for unlinked genes: $1:1:1:1$. Deviations suggest genetic linkage.",
      "Chi-square formula: $\\chi^2 = \\Sigma\\frac{(o-e)^2}{e}$. Degrees of freedom $\\text{df} = n - 1$.",
      "If $\\chi^2 > \\text{critical value}$, REJECT null hypothesis (deviation is statistically significant).",
      "Mitochondrial traits: Inherited exclusively through the maternal line (egg).",
      "X-linked recessive traits show up predominantly in males because males have only one X chromosome."
    ]
  },
  {
    "unitId": "u6",
    "unitNumber": 6,
    "title": "Gene Expression and Regulation",
    "examWeight": "12%–16% of AP Exam",
    "bigIdea": "The central dogma outlines genetic information flow: DNA is transcribed into RNA and translated into proteins. Gene regulation coordinates development and cellular responses.",
    "keyTheorems": [
      {
        "name": "The Central Dogma of Molecular Biology",
        "conditions": "Directional flow of genetic information in all cellular life.",
        "conclusion": "$\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{mRNA} \\xrightarrow{\\text{Translation}} \\text{Polypeptide (Protein)}$. Retroviruses (e.g. HIV) provide an exception by using Reverse Transcriptase to synthesize DNA from an RNA template.",
        "apTip": "DNA and RNA polymers are ALWAYS synthesized strictly in the $5' \\rightarrow 3'$ direction! DNA polymerase adds nucleotides only to the free $3'-\\text{OH}$ group."
      },
      {
        "name": "Bacterial Operon Gene Regulation (Lac vs. Trp)",
        "conditions": "Prokaryotic transcriptional regulation via operator-repressor complexes.",
        "conclusion": "The lac operon is inducible (normally OFF, turned ON when lactose binds repressor causing it to dissociate). The trp operon is repressible (normally ON, turned OFF when tryptophan acts as corepressor binding repressor to block operator).",
        "apTip": "The operator is a DNA sequence where the repressor protein binds; the promoter is the DNA sequence where RNA polymerase binds."
      }
    ],
    "formulas": [
      {
        "name": "Chargaff’s Base-Pairing Rules",
        "latex": "\\%A = \\%T, \\quad \\%G = \\%C, \\quad \\%A + \\%T + \\%G + \\%C = 100\\%",
        "explanation": "In double-stranded DNA, purines ($A, G$) pair with pyrimidines ($T, C$) via hydrogen bonds ($2$ between A-T, $3$ between G-C)."
      }
    ],
    "sections": [
      {
        "heading": "1. Eukaryotic Pre-mRNA Post-Transcriptional Processing",
        "content": "Before pre-mRNA leaves the nucleus for ribosomal translation, it undergoes three critical modifications:\n\n1. **$5'$ Cap Addition**: A modified guanine nucleotide ($7$-methylguanosine) is added to the $5'$ end. Protects against exonuclease enzymatic degradation and assists ribosomal binding.\n2. **$3'$ Poly-A Tail Addition**: An enzyme adds $100\\text{–}200$ adenine nucleotides to the $3'$ end. Facilitates nuclear export and stabilizes the transcript.\n3. **RNA Splicing via Spliceosomes**:\n   - **Introns** (non-coding intervening sequences) are excised and degraded.\n   - **Exons** (expressed coding sequences) are spliced together.\n   - **Alternative RNA Splicing**: Different combinations of exons are joined from a single pre-mRNA, allowing one single gene to produce multiple distinct protein isoforms!"
      },
      {
        "heading": "2. DNA Replication Enzymes & Operon Gene Regulation Matrix",
        "content": "Comprehensive reference for molecular genetics enzymes and prokaryotic gene regulation:\n\n| Enzyme / Mechanism | Synthesis Direction | Specific Biochemical Function | Key AP College Board Note |\n| :--- | :--- | :--- | :--- |\n| **Helicase** | Moves toward replication fork | Unwinds and separates parental double-stranded DNA | Breaks hydrogen bonds between complementary bases |\n| **Topoisomerase (Gyrase)** | Ahead of replication fork | Relieves supercoiling tension caused by unwinding | Prevents DNA replication fork stalling and DNA breakage |\n| **RNA Primase** | $5' \\rightarrow 3'$ | Synthesizes short complementary RNA primers ($10\\text{ nt}$) | DNA Polymerase cannot initiate synthesis *de novo*; requires $3'-\\text{OH}$ |\n| **DNA Polymerase III** | Strictly $5' \\rightarrow 3'$ | Synthesizes main continuous leading and discontinuous lagging strands | Possesses $3' \\rightarrow 5'$ proofreading exonuclease activity |\n| **DNA Polymerase I** | Strictly $5' \\rightarrow 3'$ | Removes RNA primers and replaces them with DNA nucleotides | Leaves a nick in the sugar-phosphate backbone |\n| **DNA Ligase** | Catalyzes phosphodiester bond | Seals nicks between Okazaki fragments on lagging strand | Requires ATP/NAD to form covalent phosphodiester bond |\n| **lac Operon (Catabolic)** | Inducible (Normally **OFF**) | Inducer (**allolactose**) binds repressor, releasing operator | Metabolizes lactose only when glucose is absent (CAP-cAMP high) |\n| **trp Operon (Anabolic)** | Repressible (Normally **ON**) | Corepressor (**tryptophan**) binds repressor, docking to operator | Halts tryptophan synthesis when cellular tryptophan is abundant |"
      },
      {
        "heading": "3. DNA Replication Machinery & Telomere Biology (CED 6.1–6.2)",
        "content": "Semi-conservative DNA replication occurs in the $5' \\to 3'$ direction:\n- **Enzymatic Replisome:**\n  - **Helicase:** Unwinds the double helix at replication forks.\n  - **Topoisomerase:** Relieves torsional supercoiling ahead of the fork.\n  - **Primase:** Synthesizes short complementary RNA primers to provide a free $3'-\\text{OH}$ group.\n  - **DNA Polymerase III:** Elongates new DNA strands by adding deoxynucleotides strictly to the $3'$ end.\n  - **DNA Polymerase I:** Excises RNA primers and fills gaps with DNA nucleotides.\n  - **DNA Ligase:** Catalyzes phosphodiester bonds joining Okazaki fragments on the lagging strand.\n- **Leading vs. Lagging Strand:** Leading strand synthesizes continuously toward the fork; lagging strand synthesizes discontinuously away from the fork as Okazaki fragments."
      },
      {
        "heading": "4. Transcription, RNA Processing & Operon Gene Regulation (CED 6.3–6.6)",
        "content": "Flow of genetic information from gene to protein:\n- **Eukaryotic Post-Transcriptional RNA Processing:**\n  - Addition of a $5'\\text{ methyl-GTP cap}$ (protects from degradation, assists ribosome binding).\n  - Addition of a $3'\\text{ poly-A tail}$ (enhances stability and nuclear export).\n  - **Alternative RNA Splicing:** Spliceosomes excise non-coding **introns** and splice together protein-coding **exons**. Alternative splicing allows a single gene to code for multiple distinct protein isoforms!\n- **Prokaryotic Operon Regulation:**\n  - **Lac Operon (Inducible):** Normally OFF. Lactose (allolactose) acts as inducer, binding and inactivating the Lac repressor, allowing RNA polymerase to transcribe lactase genes.\n  - **Trp Operon (Repressible):** Normally ON. High tryptophan acts as co-repressor, binding the Trp repressor to block transcription when tryptophan is abundant."
      },
      {
        "heading": "5. Official AP Lab: Bacterial Transformation with the pGLO Plasmid (Skill 4.2)",
        "content": "Standard biotechnology protocol introducing foreign DNA into bacterial vectors:\n\n* **The Engineered pGLO Plasmid Architecture**:\n  * **$bla$ gene (Beta-Lactamase)**: Confers resistance to the antibiotic ampicillin by hydrolyzing its beta-lactam ring. Transformants survive on ampicillin-containing media.\n  * **$GFP$ gene (Green Fluorescent Protein)**: Cloned from jellyfish *Aequorea victoria*; fluoresces bright green under UV illumination.\n  * **$araC$ gene & Arabinose Promoter**: Regulatory protein acting as a molecular switch. In the presence of the sugar arabinose, AraC binds arabinose, alters conformation, and recruits RNA polymerase to transcribe GFP.\n* **The Heat Shock Mechanism**:\n  1. Incubate competent *E. coli* cells with calcium chloride ($\\text{CaCl}_2$) on ice; $\\text{Ca}^{2+}$ cations neutralize repulsive negative charges on DNA phosphate backbones and bacterial lipopolysaccharides.\n  2. Heat shock rapidly at $42^\\circ\\text{C}$ for exactly 50 seconds, creating transient thermal pores in the membrane allowing plasmid entry.\n  3. Return immediately to ice to close pores.\n* **Expected Experimental Plate Growth Results**:\n  * **$+\\text{pGLO} \\text{ on LB/amp}$**: Hundreds of white colonies grow (transformed bacteria survive ampicillin), but do NOT glow (no arabinose to induce GFP transcription).\n  * **$+\\text{pGLO} \\text{ on LB/amp/ara}$**: Hundreds of green fluorescent colonies grow and glow brilliantly under UV light.\n  * **$-\\text{pGLO} \\text{ on LB/amp}$**: Zero growth (wild-type bacteria killed by antibiotic; negative control).\n  * **$-\\text{pGLO} \\text{ on LB}$**: Dense continuous lawn of bacterial growth (positive control verifying viability)."
      },
      {
        "heading": "6. Operon Systems & Eukaryotic Epigenetic Gene Regulation (CED 6.5-6.6)",
        "content": "Comparing transcriptional control architectures across phylogenetic domains:\n\n* **Prokaryotic Operons**:\n  * **Inducible Operon (*lac* operon)**: Catabolic pathway. Normally OFF. Active repressor protein bound to operator blocks RNA polymerase. When lactose is present, **allolactose** binds repressor as an inducer, inactivating it and initiating transcription of $\\beta$-galactosidase.\n  * **Repressible Operon (*trp* operon)**: Anabolic pathway. Normally ON. Inactive repressor cannot bind operator. When tryptophan levels rise, tryptophan binds repressor as a **corepressor**, activating it to bind operator and halt tryptophan biosynthesis.\n* **Eukaryotic Epigenetic Chromatin Remodeling**:\n  * **Histone Acetylation**: Acetyl groups ($-COCH_3$) attached to positively charged lysine residues on histone tails neutralize positive charge, relaxing chromatin packaging into **Euchromatin** $\\implies$ promotes high transcriptional access.\n  * **DNA Methylation**: Methyl groups ($-CH_3$) added to cytosine bases in DNA condense chromatin into tightly packed **Heterochromatin** $\\implies$ causes permanent long-term gene silencing (e.g., Genomic Imprinting, X-chromosome Barr body inactivation)."
      }
    ],
    "workedExamples": [
      {
        "title": "DNA Replication Fork Synthesis & Okazaki Fragments",
        "topicRef": "CED 6.2 DNA Replication",
        "question": "Explain why DNA replication creates a continuous leading strand and a discontinuous lagging strand at the replication fork.",
        "solutionSteps": [
          "Step 1: State enzyme constraint: DNA Polymerase III can ONLY synthesize new DNA in the $5' \\rightarrow 3'$ direction by adding nucleotides to a $3'-\\text{OH}$ group.",
          "Step 2: Identify template orientation: The two parent DNA strands are antiparallel ($5' \\rightarrow 3'$ and $3' \\rightarrow 5'$).",
          "Step 3: Leading strand synthesis: The template oriented $3' \\rightarrow 5'$ toward the fork allows continuous $5' \\rightarrow 3'$ synthesis moving into the unzipping fork.",
          "Step 4: Lagging strand synthesis: The template oriented $5' \\rightarrow 3'$ toward the fork forces DNA Polymerase to synthesize away from the fork in short segments (Okazaki fragments).",
          "Step 5: Joining: RNA primers are replaced by DNA Polymerase I, and DNA Ligase seals the phosphodiester backbone nicks between fragments."
        ],
        "finalAnswer": "Antiparallel structure combined with the strict $5' \\rightarrow 3'$ synthesis constraint of DNA polymerase forces the lagging strand to be synthesized discontinuously as Okazaki fragments.",
        "apScoringTip": "Always mention that DNA polymerase synthesizes ONLY in the $5' \\rightarrow 3'$ direction. This directionality statement is worth 1 full rubric point."
      }
    ],
    "diagrams": [
      {
        "id": "bio_operon_model",
        "title": "The Operon Model of Gene Regulation",
        "subtitle": "Promoter, Operator, Repressor, and Structural Genes",
        "type": "operon_diagram",
        "description": "Diagram of bacterial operon showing regulatory gene producing repressor, promoter site for RNA polymerase, operator switch, and structural genes.",
        "takeaway": "When active repressor binds the operator, RNA polymerase is physically blocked from transcribing the downstream structural genes."
      }
    ],
    "commonTraps": [
      "Assuming that all mutations change the resulting protein. Silent mutations (due to genetic code redundancy / wobble) code for the identical amino acid, causing zero phenotypic change.",
      "Claiming prokaryotes splice introns. Prokaryotes do NOT have introns or spliceosomes; their genes are contiguous and translation occurs simultaneously with transcription.",
      "Confusing the promoter with the operator. RNA polymerase binds the PROMOTER; the repressor protein binds the OPERATOR."
    ],
    "cramSheet": [
      "DNA synthesis is strictly $5' \\rightarrow 3'$. Leading strand continuous; lagging strand discontinuous (Okazaki fragments).",
      "Central Dogma: $\\text{DNA} \\rightarrow \\text{mRNA} \\rightarrow \\text{Protein}$.",
      "Eukaryotic pre-mRNA processing: $5'$ cap, $3'$ poly-A tail, excision of introns, splicing of exons.",
      "Alternative splicing allows one gene to code for multiple distinct proteins.",
      "PCR (Polymerase Chain Reaction) steps: Denaturation ($95^{\\circ}\\text{C}$), Annealing ($55^{\\circ}\\text{C}$), Extension ($72^{\\circ}\\text{C}$)."
    ]
  },
  {
    "unitId": "u7",
    "unitNumber": 7,
    "title": "Natural Selection and Evolution",
    "examWeight": "13%–20% of AP Exam",
    "bigIdea": "Evolution is driven by natural selection acting on phenotypic variations. Phylogeny represents evolutionary relatedness among lineages.",
    "keyTheorems": [
      {
        "name": "Principles of Natural Selection (Darwinian Fitness)",
        "conditions": "Heritable phenotypic variation within a population producing more offspring than the environment can support.",
        "conclusion": "Individuals with favorable adaptations have higher reproductive fitness, leaving more viable offspring. Over generations, beneficial alleles increase in frequency in the population.",
        "apTip": "Natural selection acts on PHENOTYPES of INDIVIDUALS, but EVOLUTION occurs in the ALLELE FREQUENCIES of POPULATIONS over time!"
      },
      {
        "name": "Hardy-Weinberg Equilibrium Conditions",
        "conditions": "Theoretical population where allele frequencies remain constant across generations.",
        "conclusion": "A population is in Hardy-Weinberg equilibrium if and only if: (1) Extremely large population (no genetic drift), (2) Random mating, (3) No mutations, (4) No gene flow (no migration), (5) No natural selection.",
        "apTip": "If allele frequencies change over time, at least one of the 5 conditions is violated, providing direct mathematical proof that EVOLUTION is occurring!"
      }
    ],
    "formulas": [
      {
        "name": "Hardy-Weinberg Allele Frequency Formula",
        "latex": "p + q = 1",
        "explanation": "$p$ is dominant allele frequency ($A$), $q$ is recessive allele frequency ($a$)."
      },
      {
        "name": "Hardy-Weinberg Genotype Frequency Formula",
        "latex": "p^2 + 2pq + q^2 = 1",
        "explanation": "$p^2$ = homozygous dominant ($AA$), $2pq$ = heterozygous ($Aa$), $q^2$ = homozygous recessive ($aa$)."
      }
    ],
    "sections": [
      {
        "heading": "1. Speciation Mechanisms: Allopatric vs. Sympatric",
        "content": "How new biological species arise from reproductive isolation:\n\n- **Allopatric Speciation**:\n  - Requires **geographic physical barrier** (river, mountain range, continental drift) separating a population.\n  - Isolated gene pools experience independent mutations, selective pressures, and genetic drift until prezygotic or postzygotic reproductive isolation prevents interbreeding upon reunion.\n- **Sympatric Speciation**:\n  - Speciation occurs **without geographic isolation** in the same physical habitat.\n  - Driven by: Polyploidy (common in plants), sexual selection, or habitat differentiation.\n- **Reproductive Isolating Mechanisms**:\n  - *Prezygotic*: Temporal (mating seasons), Behavioral (courtship rituals), Mechanical (anatomical incompatibility), Gametic (sperm cannot fertilize egg).\n  - *Postzygotic*: Hybrid inviability (embryo dies), Hybrid sterility (mule is sterile)."
      },
      {
        "heading": "2. Modes of Natural Selection & Hardy-Weinberg Violations Matrix",
        "content": "Comparison of evolutionary forces, phenotypic curve shifts, and Hardy-Weinberg conditions:\n\n| Evolutionary Mechanism | Phenotypic Distribution Shift | Impact on Genetic Variation | Condition of H-W Violated | Benchmark AP Biology Example |\n| :--- | :--- | :--- | :--- | :--- |\n| **Directional Selection** | Shifts curve toward **ONE extreme** phenotype | Decreases overall phenotypic variation | Natural selection occurring | Industrial melanism in peppered moths; Antibiotic resistance in MRSA |\n| **Stabilizing Selection** | Favors **INTERMEDIATE mean**, selects against both extremes | Narrowing curve; decreases variation | Natural selection occurring | Human infant birth weights (low birth weight = hypothermia; high = birth trauma) |\n| **Disruptive Selection** | Favors **BOTH extremes**, selects against intermediate | Increases variation; can initiate sympatric speciation | Natural selection occurring | Black-bellied seedcracker finches (small beaks crack soft seeds; large crack hard seeds) |\n| **Genetic Drift (Bottleneck)** | Random allele shifts due to drastic population crash | **Dramatically decreases** genetic diversity | Extremely large population violated | Cheetah population bottleneck after Ice Age; Northern elephant seals |\n| **Genetic Drift (Founder Effect)** | Small subset establishes geographically isolated colony | Randomly altered frequencies; high inbreeding | Extremely large population violated | High frequency of Ellis-van Creveld dwarfism in Lancaster Amish |\n| **Gene Flow (Migration)** | Movement of fertile individuals/gametes between populations | Reduces differences between populations | No migration / gene flow violated | Wind-blown pollen transferring alleles between separated pine forests |"
      },
      {
        "heading": "3. Mechanisms of Evolution & Hardy-Weinberg Equilibrium (CED 7.1–7.5)",
        "content": "Five evolutionary forces disrupt allele frequencies in populations:\n1. **Natural Selection:** Differential reproductive success based on phenotype.\n2. **Genetic Drift:** Stochastic allele frequency fluctuations in small populations:\n   - **Founder Effect:** A few individuals colonize a new habitat with non-representative allele frequencies.\n   - **Bottleneck Effect:** Sudden population crash (disaster, hunting) dramatically shrinks genetic diversity.\n3. **Gene Flow:** Migration of fertile individuals transferring alleles between gene pools.\n4. **Mutation:** The ultimate raw source of novel genetic variation.\n5. **Non-Random Mating:** Sexual selection.\n- **Hardy-Weinberg Equilibrium Conditions:** (1) Extremely large population, (2) No mutations, (3) No gene flow, (4) Random mating, (5) No natural selection.\n  - Allele frequencies: $p + q = 1$\n  - Genotype frequencies: $p^2 + 2pq + q^2 = 1$"
      },
      {
        "heading": "4. Phylogenetics, Cladograms & Speciation Modes (CED 7.9–7.11)",
        "content": "Inferring evolutionary relatedness and divergence:\n- **Cladistics:** Trees constructed using shared derived morphological characters or homologous DNA/protein amino acid sequences (maximum parsimony principle).\n- **Outgroup:** Most distantly related taxon, used as a reference point for primitive ancestral traits.\n- **Speciation Modes:**\n  - **Allopatric Speciation:** Geographic barrier physically isolates subpopulations, preventing gene flow.\n  - **Sympatric Speciation:** Divergence occurs within the same geographic area without physical isolation (polyploidy in plants, behavioral isolation, temporal isolation).\n- **Prezygotic vs. Postzygotic Barriers:** Prezygotic prevents mating/fertilization (habitat, behavioral, mechanical, gametic); postzygotic causes hybrid inviability or hybrid sterility (e.g. mule)."
      },
      {
        "heading": "5. Hardy-Weinberg Population Genetics Equilibrium Derivations (CED 7.4-7.5)",
        "content": "Mathematical testing of evolutionary change in gene pools:\n\n* **The Two Fundamental Equations**:\n  $$p + q = 1 \\quad (\\text{Allele Frequencies})$$\n  $$p^2 + 2pq + q^2 = 1 \\quad (\\text{Genotype Frequencies in Population})$$\n  * $p$: Frequency of dominant allele $A$.\n  * $q$: Frequency of recessive allele $a$.\n  * $p^2$: Frequency of homozygous dominant genotype $AA$.\n  * $2pq$: Frequency of heterozygous genotype $Aa$.\n  * $q^2$: Frequency of homozygous recessive genotype $aa$ (phenotypically recessive individuals).\n* **The Five Mandatory Conditions for Equilibrium (Zero Evolution)**:\n  1. No mutations (no new alleles introduced).\n  2. Random mating (no sexual selection or assortative pairing).\n  3. No natural selection (all genotypes possess equal reproductive fitness).\n  4. Extremely large population size (negates random genetic drift).\n  5. No gene flow (no immigration or emigration).\n* **Golden Rule of AP Hardy-Weinberg Math**:\n  * ALWAYS start calculations by isolating $q^2$ (the proportion of homozygous recessive individuals showing the recessive trait), then take the square root to find $q = \\sqrt{q^2}$. Never start with $p$, because phenotypically dominant individuals include both $p^2$ and $2pq$!"
      },
      {
        "heading": "6. Cladistics, Phylogenetic Inference & Molecular Clocks (CED 7.9-7.10)",
        "content": "Constructing and interpreting evolutionary trees:\n\n* **Cladogram Interpretation**:\n  * **Node**: Represents the most recent common ancestor of all evolutionary branches diverging from it.\n  * **Outgroup**: The most distantly related taxon that branched off earliest; serves as a baseline comparison for ancestral vs derived traits.\n  * **Monophyletic Taxon (Clade)**: An ancestor and ALL of its descendants.\n* **Molecular Homology & Molecular Clocks**:\n  * Morphological features can deceive due to **convergent evolution** (analogous structures evolving independently under similar environmental pressures, e.g., bird wings and butterfly wings).\n  * **Molecular Data (DNA/Amino Acid Sequences)** provides the most reliable phylogenetic evidence.\n  * The rate of neutral nucleotide substitutions in non-coding DNA occurs at an approximately constant rate over geological time, serving as a molecular clock to date divergence events."
      }
    ],
    "workedExamples": [
      {
        "title": "Hardy-Weinberg Recessive Disease Carrier Calculation",
        "topicRef": "CED 7.5 Hardy-Weinberg Equilibrium",
        "question": "Cystic fibrosis is an autosomal recessive disease affecting 1 in 2,500 newborns in a population in Hardy-Weinberg equilibrium. Calculate (a) the frequency of the recessive allele $q$, (b) the frequency of the dominant allele $p$, and (c) the percentage of the population who are heterozygous carriers ($2pq$).",
        "solutionSteps": [
          "Step 1: Identify given information: Diseased individuals are homozygous recessive ($aa$) $\\implies q^2 = \\frac{1}{2500} = 0.0004$.",
          "Step 2: Calculate recessive allele frequency $q$: $q = \\sqrt{q^2} = \\sqrt{0.0004} = 0.02$.",
          "Step 3: Calculate dominant allele frequency $p$: $p = 1 - q = 1 - 0.02 = 0.98$.",
          "Step 4: Calculate carrier frequency ($2pq$): $2pq = 2(0.98)(0.02) = 0.0392$.",
          "Step 5: Convert carrier frequency to percentage: $0.0392 \\times 100\\% = 3.92\\%$."
        ],
        "finalAnswer": "Recessive allele frequency $q = 0.02$; Dominant allele $p = 0.98$; Heterozygous carriers = $3.92\\%$ of the population.",
        "apScoringTip": "ALWAYS start Hardy-Weinberg math by solving for $q = \\sqrt{q^2}$ using the homozygous recessive frequency! Never start with dominant individuals because dominant phenotypes include both $p^2$ and $2pq$."
      }
    ],
    "diagrams": [
      {
        "id": "bio_phylogenetic_tree",
        "title": "Phylogenetic Tree and Cladogram Nodes",
        "subtitle": "Most Recent Common Ancestors and Shared Derived Characters",
        "type": "cladogram_diagram",
        "description": "Cladogram showing branching nodes representing speciation events, outgroup lineage, and synapomorphies (shared derived characters) mapped along internodes.",
        "takeaway": "Taxa sharing a more recent common ancestor node are more closely related than taxa sharing an older ancestral node."
      }
    ],
    "commonTraps": [
      "Assuming organisms evolve traits because they \"need\" them. Evolution is NOT goal-oriented; mutations arise randomly and natural selection filters existing variations based on survival and reproduction.",
      "Starting Hardy-Weinberg calculations with the dominant phenotype. Dominant phenotypes consist of BOTH $p^2$ and $2pq$; you must always start with $q^2$ (recessive phenotype).",
      "Thinking evolution means survival of the strongest. In evolutionary biology, \"fitness\" refers strictly to REPRODUCTIVE success—the number of viable, fertile offspring passed to the next generation."
    ],
    "cramSheet": [
      "Natural selection acts on individual phenotypes; populations evolve.",
      "Hardy-Weinberg math: Find $q = \\sqrt{q^2}$ first, then $p = 1 - q$, then carriers $= 2pq$.",
      "Genetic drift (Bottleneck & Founder effect) has the strongest impact in SMALL populations.",
      "Homologous structures (human arm, bat wing) indicate common ancestry (divergent evolution); Analogous structures (bird wing, insect wing) indicate convergent evolution.",
      "Cladograms: Closer common branch point $\\implies$ closer evolutionary kinship."
    ]
  },
  {
    "unitId": "u8",
    "unitNumber": 8,
    "title": "Ecology",
    "examWeight": "10%–15% of AP Exam",
    "bigIdea": "Ecosystems are structured by complex biotic and abiotic interactions. Energy flows through trophic cascades while nutrients cycle continuously.",
    "keyTheorems": [
      {
        "name": "The 10% Trophic Energy Transfer Rule",
        "conditions": "Energy transfer between successive trophic levels in an ecological food web.",
        "conclusion": "Approximately $10\\%$ of energy stored as biomass at one trophic level is converted into biomass at the next level; $90\\%$ is lost as metabolic heat, cellular respiration, and waste.",
        "apTip": "Because of this $10\\%$ inefficiency, food chains rarely exceed 4 or 5 trophic levels, and top apex predators require vast geographic home ranges."
      },
      {
        "name": "Competitive Exclusion Principle (Gause’s Law)",
        "conditions": "Two competing species occupying identical ecological niches competing for the same limiting resource.",
        "conclusion": "Two species cannot coexist indefinitely in the identical niche. One species will outcompete the other to local extinction, or species will undergo resource partitioning to minimize niche overlap.",
        "apTip": "Keystone species (e.g. sea otters, wolves, starfish) exert disproportionately large control on ecosystem structure relative to their numerical abundance."
      }
    ],
    "formulas": [
      {
        "name": "Exponential Population Growth",
        "latex": "\\frac{dN}{dt} = r_{\\max} N",
        "explanation": "J-shaped curve under unlimited resources where $r_{\\max}$ is intrinsic per capita growth rate."
      },
      {
        "name": "Logistic Population Growth",
        "latex": "\\frac{dN}{dt} = r_{\\max} N \\left(\\frac{K - N}{K}\\right)",
        "explanation": "S-shaped curve incorporating carrying capacity $K$. Growth rate drops to zero when $N = K$."
      },
      {
        "name": "Simpson’s Diversity Index",
        "latex": "D = 1 - \\sum \\left(\\frac{n}{N}\\right)^2",
        "explanation": "Measures species richness and evenness (scale $0$ to $1$; values closer to $1$ indicate higher biodiversity)."
      }
    ],
    "sections": [
      {
        "heading": "1. Interspecific Community Interactions Matrix",
        "content": "Summary of ecological species-to-species interactions:\n\n| Interaction Type | Species 1 Effect | Species 2 Effect | Classic Ecological Example |\n| :--- | :--- | :--- | :--- |\n| **Mutualism** | **Benefited ($+$)** | **Benefited ($+$)** | Mycorrhizal fungi and plant roots; Pollinators and flowering plants |\n| **Commensalism** | **Benefited ($+$)** | **Unaffected ($0$)** | Barnacles attached to whale skin; Epiphytic orchids on tree branches |\n| **Parasitism** | **Benefited ($+$)** | **Harmed ($-$)** | Ticks and tapeworms feeding on host tissues without immediately killing host |\n| **Predation / Herbivory** | **Benefited ($+$)** | **Harmed ($-$)** | Lynx hunting snowshoe hare; Deer grazing forest shrubs |\n| **Competition** | **Harmed ($-$)** | **Harmed ($-$)** | Lions and hyenas competing for identical prey resources |"
      },
      {
        "heading": "2. Energy Flow, Trophic Pyramids & Biogeochemical Cycles (CED 8.1 & 8.2)",
        "content": "Thermodynamics and nutrient flux across ecosystems:\n\n* **The 10% Ecological Efficiency Rule**:\n  * Only approximately $10\\%$ (typically 5%–20%) of chemical energy stored as biomass at one trophic level is converted into biomass at the next level.\n  * The remaining $90\\%$ is lost as metabolic heat ($2^{\\text{nd}}$ Law of Thermodynamics) or unconsumed waste.\n* **Primary Productivity**:\n  $$NPP = GPP - R$$\n  * $GPP$: Gross Primary Productivity (total photosynthetic carbon fixed by autotrophs).\n  * $R$: Respiration energy consumed by autotrophic cellular maintenance.\n  * $NPP$: Net Primary Productivity (actual biomass available for consumers).\n* **Biogeochemical Nutrient Cycles**:\n  * **Nitrogen Cycle**: Atmospheric $N_2$ fixed by Rhizobium bacteria into $NH_4^+$; nitrified by soil bacteria into $NO_3^-$; absorbed by plant roots; returned to atmosphere by denitrifying bacteria.\n  * **Phosphorus Cycle**: No atmospheric gas phase; weathering of rocks releases phosphate into soil and water."
      },
      {
        "heading": "3. Population Ecology, Growth Models & Keystone Species (CED 8.38.5)",
        "content": "Mathematical models of population dynamics and community stability:\n\n* **Exponential vs. Logistic Growth**:\n  * **Exponential Growth (J-Curve)**:\n    $$\\frac{dN}{dt} = rN$$\n    *(Idealized conditions with unlimited resources; $r$ is intrinsic per capita growth rate).*\n  * **Logistic Growth (S-Curve)**:\n    $$\\frac{dN}{dt} = rN \\left(1 - \\frac{N}{K}\\right)$$\n    *(Incorporates carrying capacity $K$; growth rate is maximal when population is at half carrying capacity $N = K/2$).*\n* **Trophic Cascades & Keystone Species**:\n  * **Keystone Species**: A species whose ecological impact is disproportionately large relative to its biomass or abundance (e.g. sea otters controlling urchin populations to preserve kelp forests). Removing a keystone species causes ecosystem collapse!"
      },
      {
        "heading": "3. Energy Flow, Trophic Pyramids & 10% Ecological Rule (CED 8.1–8.2)",
        "content": "Thermodynamics dictates community energy distribution:\n- **Trophic Efficiency Rule:** On average, only **$\\sim 10\\%$ of energy** at one trophic level is transferred to the next level (the remaining $90\\%$ is lost as metabolic heat during respiration, feces, or unconsumed biomass).\n- **Pyramid Constraints:** Because energy drops exponentially at each tier ($1000\\text{ J} \\to 100\\text{ J} \\to 10\\text{ J} \\to 1\\text{ J}$), terrestrial food chains rarely exceed 4 to 5 trophic links.\n- **Biomagnification:** Fat-soluble, non-biodegradable toxins (e.g. DDT, mercury) increase in concentration at higher trophic levels, devastating apex predators."
      },
      {
        "heading": "4. Population Growth Models & Community Dynamics (CED 8.3–8.5)",
        "content": "Mathematical modeling of population growth:\n- **Exponential Growth (Unlimited Resources):**\n  $$\\frac{dN}{dt} = r_{\\max} N \\quad (J\\text{-shaped curve})$$\n- **Logistic Growth (Resource Limits & Carrying Capacity $K$):**\n  $$\\frac{dN}{dt} = r_{\\max} N \\left(\\frac{K - N}{K}\\right) \\quad (S\\text{-shaped sigmoid curve})$$\n  - When $N \\ll K$, growth is approximately exponential.\n  - When $N = K/2$, absolute growth rate $\\frac{dN}{dt}$ is maximized!\n  - When $N = K$, growth rate is zero.\n- **Keystone Species & Trophic Cascades:** Keystone species (e.g. sea otters, sea stars) exert disproportionate control over community structure. Removing a keystone predator triggers a catastrophic trophic cascade, collapsing ecosystem biodiversity."
      },
      {
        "heading": "6. Official AP Lab: Plant Transpiration Rates in Potometers (Skill 4.2)",
        "content": "Quantifying transpiration and water movement through vascular xylem:\n\n* **The Cohesion-Tension Transpiration Model**:\n  * Solar-driven evaporation of water vapor out of leaf stomata creates negative pressure potential (tension) in the mesophyll air spaces.\n  * Water molecules are pulled up through xylem tracheids and vessel elements in an unbroken column due to **cohesion** (hydrogen bonding between water molecules) and **adhesion** (hydrogen bonding to cellulose xylem walls).\n* **Experimental Testing of Environmental Factors via Potometer**:\n  * **Fan (Wind Velocity)**: Drastically **increases** transpiration rate by blowing away the humid boundary layer of air on the leaf surface, steepening the water vapor concentration gradient.\n  * **Heat Lamp (Light + Temp)**: **Increases** transpiration rate by stimulating photoreceptors to open stomata and increasing kinetic energy of water molecules.\n  * **Enclosed Plastic Bag (High Humidity)**: Dramatically **decreases** transpiration rate by saturating surrounding air with water vapor, eliminating the concentration gradient.\n  * **Darkness**: **Decreases** transpiration rate because guard cells lose turgor pressure, closing stomata to conserve water."
      },
      {
        "heading": "7. Trophic Energetics, Productivity Equations & Keystone Cascades (CED 8.3-8.6)",
        "content": "Energy flux through trophic levels and community regulation:\n\n* **Primary Productivity Governing Equation**:\n  $$\\text{NPP} = \\text{GPP} - R$$\n  * **GPP (Gross Primary Productivity)**: Total solar energy captured and converted into organic chemical biomass by autotrophs via photosynthesis per unit area per unit time.\n  * **$R$ (Cellular Respiration)**: Energy consumed by autotrophs for their own metabolic maintenance.\n  * **NPP (Net Primary Productivity)**: Biomass energy remaining available to consumers in the ecosystem.\n* **The 10% Ecological Trophic Transfer Rule**:\n  * Approximately $10\\%$ of energy transfers from one trophic level up to the next; $90\\%$ is dissipated as metabolic heat ($2^{\\text{nd}}$ Law of Thermodynamics), cellular respiration, or unassimilated waste.\n  * This geometric loss limits food chain length to typically 4 or 5 trophic levels.\n* **Keystone Species & Trophic Cascades**:\n  * A **Keystone Species** exerts immense ecological control over community biodiversity, disproportionate to its abundance (e.g., Pisaster sea stars, Sea otters).\n  * **Top-Down Trophic Cascade**: Removal of sea otters $\\implies$ sea urchin populations explode $\\implies$ urchins overgraze and destroy kelp forest ecosystems $\\implies$ collapse of marine biodiversity."
      }
    ],
    "workedExamples": [
      {
        "title": "Logistic Growth Rate Calculation Near Carrying Capacity",
        "topicRef": "CED 8.4 Population Ecology & Carrying Capacity",
        "question": "A deer population has an intrinsic growth rate $r_{\\max} = 0.25\\text{ per year}$ and lives in an environment with carrying capacity $K = 1,000\\text{ deer}$. Calculate the population growth rate ($dN/dt$) when (a) $N = 200$, and (b) $N = 800$.",
        "solutionSteps": [
          "Step 1: Write logistic growth formula: $\\frac{dN}{dt} = r_{\\max} N \\left(\\frac{K - N}{K}\\right)$.",
          "Step 2: Case (a) when $N = 200$:",
          "- $\\frac{dN}{dt} = (0.25)(200)\\left(\\frac{1000 - 200}{1000}\\right) = 50\\left(\\frac{800}{1000}\\right) = 50(0.80) = 40\\text{ deer/year}$.",
          "Step 3: Case (b) when $N = 800$:",
          "- $\\frac{dN}{dt} = (0.25)(800)\\left(\\frac{1000 - 800}{1000}\\right) = 200\\left(\\frac{200}{1000}\\right) = 200(0.20) = 40\\text{ deer/year}$.",
          "Step 4: Notice that population growth rate is maximum at $N = K/2 = 500$ (inflection point of S-curve), where $\\frac{dN}{dt} = (0.25)(500)(0.5) = 62.5\\text{ deer/year}$."
        ],
        "finalAnswer": "Growth rate at $N = 200$ is $40\\text{ deer/year}$; Growth rate at $N = 800$ is $40\\text{ deer/year}$.",
        "apScoringTip": "Remember that logistic population growth rate is HIGHEST at $N = K/2$ (half carrying capacity). As $N$ approaches $K$, growth rate drops toward zero."
      }
    ],
    "diagrams": [
      {
        "id": "bio_trophic_pyramid",
        "title": "Trophic Biomass and Energy Pyramid",
        "subtitle": "10% Rule of Ecological Efficiency Across Trophic Levels",
        "type": "trophic_pyramid",
        "description": "Pyramid showing primary producers ($10,000\\text{ J}$) at base, primary consumers ($1,000\\text{ J}$), secondary consumers ($100\\text{ J}$), and tertiary apex predators ($10\\text{ J}$).",
        "takeaway": "Only $10\\%$ of energy transfers up each trophic level; the remaining $90\\%$ is dissipated as metabolic heat and waste."
      }
    ],
    "commonTraps": [
      "Assuming top predators have the most biomass in an ecosystem. Energy is lost at each step, so primary producers ALWAYS have drastically greater biomass than top predators.",
      "Confusing species richness with species diversity. Richness is just the raw count of species; diversity (Simpson's Index) factors in both species count AND relative abundance (evenness).",
      "Thinking carrying capacity ($K$) is a permanent fixed constant. If environmental conditions change (e.g. drought, habitat destruction), $K$ decreases accordingly."
    ],
    "cramSheet": [
      "10% Rule: Only 10% of energy transfers to next trophic level; 90% lost as heat/respiration.",
      "Logistic growth: $dN/dt = r_{\\max} N \\left(\\frac{K-N}{K}\\right)$. Max growth occurs at $N = K/2$.",
      "Keystone species: Disproportionately huge influence on community biodiversity (e.g. removing sea otters causes urchin barrens).",
      "Trophic cascade: Indirect interactions where top predator changes abundance of lower trophic levels."
    ]
  }
];
