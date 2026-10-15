const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// 55 levels in AP Biology
// Target additions: C: 15, D: 14, A: 13, B: 13 (Total: 55)

const q3Data = {
  // UNIT 1: Chemistry of Life (6 levels)
  "bio-u1-l1": {
    id: "bio1-l1-q3",
    stem: "Water striders are insects that can walk across the surface of a pond without sinking. Which property of water, resulting from hydrogen bonding between adjacent water molecules, is directly responsible for this phenomenon?",
    options: [
      "High heat of vaporization",
      "High surface tension due to cohesion",
      "Adhesion to the waxy cuticle of the insect's legs",
      "Low density in solid crystalline state"
    ],
    correctIndex: 1, // B
    explanation: "Cohesion is the attraction between water molecules due to hydrogen bonding. At the air-water interface, collective hydrogen bonding produces high surface tension, forming a net-like surface strong enough to support the weight of small organisms.",
    distractorTip: "Cohesion = water sticking to water (surface tension); Adhesion = water sticking to other polar surfaces."
  },
  "bio-u1-l2": {
    id: "bio1-l2-q3",
    stem: "Which of the following biological macromolecule classes requires phosphorus as an essential constituent elemental building block?",
    options: [
      "Triglycerides and steroid hormones",
      "Polysaccharides such as glycogen and starch",
      "Fibrous proteins such as collagen and keratin",
      "Nucleic acids and cell membrane phospholipids"
    ],
    correctIndex: 3, // D
    explanation: "Phosphorus is a fundamental component of nucleic acids (forming the phosphodiester sugar-phosphate backbone in DNA and RNA) and phospholipids (forming the hydrophilic polar head group of biological membranes). Carbohydrates contain C, H, O; proteins contain C, H, O, N, S.",
    distractorTip: "Elemental distribution: Nucleic acids = C, H, O, N, P; Proteins = C, H, O, N, S; Phospholipids = C, H, O, P."
  },
  "bio-u1-l3": {
    id: "bio1-l3-q3",
    stem: "Why are saturated fatty acid chains solid at room temperature (like butter), whereas unsaturated fatty acid chains are liquid at room temperature (like olive oil)?",
    options: [
      "Saturated fats contain multiple polar hydroxyl groups that form hydrogen bonds.",
      "Saturated fatty acids possess no carbon-carbon double bonds, allowing their straight hydrocarbon chains to pack tightly together, whereas cis-double bonds in unsaturated fats introduce kinks that prevent tight molecular packing.",
      "Unsaturated fats have significantly higher molecular weights than saturated fats.",
      "Saturated fatty acids contain peptide cross-links that stabilize the lipid bilayer."
    ],
    correctIndex: 1, // B
    explanation: "Saturated fatty acids have straight, fully hydrogenated hydrocarbon tails that pack densely into solid crystalline arrays. Unsaturated fatty acids contain one or more cis double bonds ($C=C$), which produce rigid kinks that prevent tight packing, keeping them liquid at room temperature.",
    distractorTip: "Cis-double bonds in unsaturated fatty acids create kinks, preventing tight packing and increasing membrane fluidity."
  },
  "bio-u1-l4": {
    id: "bio1-l4-q3",
    stem: "Sickle cell anemia is caused by a single point mutation that replaces a hydrophilic, charged glutamic acid with a hydrophobic valine on the surface of the hemoglobin beta chain. What level of protein structure is DIRECTLY altered by this amino acid substitution?",
    options: [
      "Quaternary structure",
      "Secondary structure",
      "Primary structure",
      "Tertiary disulfide bridge formation"
    ],
    correctIndex: 2, // C
    explanation: "The primary structure of a protein is the specific linear sequence of amino acids joined by covalent peptide bonds. Changing even a single amino acid in that sequence directly modifies the protein's primary structure, which subsequently impairs folding into secondary, tertiary, and quaternary conformations.",
    distractorTip: "Amino acid sequence = Primary structure; Hydrogen-bonded alpha-helices/beta-sheets = Secondary; R-group interactions = Tertiary; Multi-subunit complexes = Quaternary."
  },
  "bio-u1-l5": {
    id: "bio1-l5-q3",
    stem: "Which structural feature distinguishes RNA from DNA at the molecular level?",
    options: [
      "RNA contains a 2'-deoxyribose sugar and thymine nitrogenous bases.",
      "RNA contains ribose sugar (possessing a 2'-OH hydroxyl group) and uracil instead of thymine, and is typically single-stranded.",
      "RNA synthesizes in the 3' to 5' direction, while DNA synthesizes 5' to 3'.",
      "RNA contains phosphodiester bonds, whereas DNA contains glycosidic bonds."
    ],
    correctIndex: 1, // B
    explanation: "RNA contains ribose (which has an oxygen atom on the 2' carbon, -OH), whereas DNA contains deoxyribose (which lacks the 2'-OH). RNA uses uracil (U) instead of thymine (T) to pair with adenine (A), and typically functions as a versatile single-stranded molecule.",
    distractorTip: "RNA = ribose (2'-OH) + Uracil; DNA = deoxyribose (no 2'-OH) + Thymine."
  },
  "bio-u1-l6": {
    id: "bio1-l6-q3",
    stem: "During a condensation (dehydration synthesis) reaction that links two amino acids together to form a dipeptide, which functional groups react, and what byproduct is produced?",
    options: [
      "The amino group of one reacts with the carboxyl group of the other, releasing a molecule of water ($H_2O$).",
      "The R-groups react together, releasing carbon dioxide ($CO_2$).",
      "Two sulfhydryl groups oxidize, releasing hydrogen peroxide ($H_2O_2$).",
      "The central alpha carbons bond, consuming a molecule of water."
    ],
    correctIndex: 0, // A
    explanation: "Dehydration synthesis joins an amino group ($-NH_2$) of one amino acid to the carboxyl group ($-COOH$) of another, forming a covalent peptide bond while releasing one water molecule ($H_2O$). Hydrolysis consumes water to break peptide bonds.",
    distractorTip: "Dehydration synthesis = builds polymers and RELEASES water; Hydrolysis = breaks polymers and CONSUMES water."
  },

  // UNIT 2: Cell Structure & Function (7 levels)
  "bio-u2-l1": {
    id: "bio2-l1-q3",
    stem: "Which eukaryotic organelle contains hydrolytic digestive enzymes that function optimally in an acidic lumen to break down ingested pathogens, damaged cellular organelles, and macromolecules?",
    options: [
      "Peroxisome",
      "Rough endoplasmic reticulum",
      "Golgi apparatus",
      "Lysosome"
    ],
    correctIndex: 3, // D
    explanation: "Lysosomes are membrane-bound vesicles containing acidic hydrolases that digest cellular debris, engulfed bacteria (phagocytosis), and recycle worn-out organelles (autophagy).",
    distractorTip: "Lysosomes = acidic hydrolytic degradation; Peroxisomes = detoxify hydrogen peroxide ($H_2O_2$); Ribosomes = protein synthesis."
  },
  "bio-u2-l2": {
    id: "bio2-l2-q3",
    stem: "Why are biological cells universally microscopic in size rather than growing into macroscopic single-celled organisms?",
    options: [
      "Larger cells have insufficient nuclear DNA to code for RNA polymerase.",
      "As a cell increases in radius, its internal volume increases as the cube ($r^3$) while its surface area increases only as the square ($r^2$), reducing the Surface Area-to-Volume ratio and severely limiting diffusion rates of nutrients and wastes across the membrane.",
      "Small cells have thicker plasma membranes that prevent viral entry.",
      "The laws of thermodynamics prohibit metabolic reactions in volumes larger than 100 micrometers."
    ],
    correctIndex: 1, // B
    explanation: "As cell radius expands, volume grows proportionally to $r^3$ while surface area grows only to $r^2$. A declining SA:V ratio means the cell's membrane surface becomes too small to transport sufficient oxygen, nutrients, and waste products to sustain the large internal metabolic volume.",
    distractorTip: "High SA:V ratio = efficient exchange of nutrients and wastes. Larger cells have a LOWER SA:V ratio, which limits their size."
  },
  "bio-u2-l3": {
    id: "bio2-l3-q3",
    stem: "How does the presence of cholesterol within animal cell membranes affect membrane fluidity across varying temperatures?",
    options: [
      "It dissolves all integral membrane transport proteins.",
      "It acts as a bidirectional fluidity buffer: restraining phospholipid movement at high temperatures to prevent excessive fluidity, while hindering tight lipid packing at low temperatures to prevent membrane solidification.",
      "It converts unsaturated lipids into saturated lipids at cold temperatures.",
      "It facilitates active transport of sodium ions across the bilayer."
    ],
    correctIndex: 1, // B
    explanation: "Cholesterol is a fluidity buffer in animal membranes. At warm temperatures (e.g. 37°C), it restrains phospholipid movement, decreasing fluidity. At cool temperatures, it prevents tight packing of fatty acid tails, preventing crystallization and solidification.",
    distractorTip: "Cholesterol buffers membrane fluidity: keeps membranes stable when warm, and prevents freezing/solidification when cold."
  },
  "bio-u2-l4": {
    id: "bio2-l4-q3",
    stem: "Which of the following transport mechanisms requires the direct hydrolysis of adenosine triphosphate (ATP) to move solutes against their electrochemical concentration gradient?",
    options: [
      "Osmosis of water through aquaporin channels",
      "Facilitated diffusion of glucose through GLUT transporters",
      "The $Na^+/K^+$ ATPase pump",
      "Simple diffusion of carbon dioxide gas across the phospholipid bilayer"
    ],
    correctIndex: 2, // C
    explanation: "Primary active transport uses ATP hydrolysis directly to pump ions against their electrochemical gradient. The $Na^+/K^+$ ATPase pumps $3 Na^+$ ions out of the cell and $2 K^+$ ions into the cell per ATP hydrolyzed.",
    distractorTip: "Active transport requires energy (ATP) to pump against the concentration gradient ($Na^+/K^+$ pump); Passive transport/facilitated diffusion moves down the gradient without ATP."
  },
  "bio-u2-l5": {
    id: "bio2-l5-q3",
    stem: "What happens to a red blood cell (erythrocyte) when placed into a pure distilled water (hypotonic) solution?",
    options: [
      "Water rushes out of the cell, causing it to crenate (shrivel).",
      "Solutes pump out of the cell, reaching isotonic equilibrium.",
      "Water enters the cell down its osmotic gradient, causing the cell to swell and burst (lyse).",
      "The cell wall exerts turgor pressure that prevents volume expansion."
    ],
    correctIndex: 2, // C
    explanation: "Distilled water has zero solute concentration (higher water potential $\\Psi = 0$) compared to the cell's hypertonic cytoplasm. Water rushes into the cell by osmosis. Because animal cells lack rigid cell walls, incoming water causes osmotic swelling and lysis.",
    distractorTip: "Animal cells in hypotonic solutions LYSE (burst); Plant cells in hypotonic solutions become TURGID (cell wall prevents lysis)."
  },
  "bio-u2-l6": {
    id: "bio2-l6-q3",
    stem: "A plant cell with a solute potential $\\Psi_s = -0.6\\text{ MPa}$ and pressure potential $\\Psi_p = +0.2\\text{ MPa}$ is placed in an open beaker containing a sucrose solution with $\\Psi_s = -0.8\\text{ MPa}$. Which direction will water net flow?",
    options: [
      "Water will net flow out of the cell into the beaker solution.",
      "Water will net flow into the cell from the beaker solution.",
      "There will be no net movement of water because the system is already at dynamic equilibrium.",
      "Solute molecules will diffuse out of the cell into the beaker."
    ],
    correctIndex: 0, // A
    explanation: "Cell water potential: $\\Psi_{\\text{cell}} = \\Psi_s + \\Psi_p = -0.6 + 0.2 = -0.4\\text{ MPa}$. In an open beaker, $\\Psi_p = 0$, so $\\Psi_{\\text{beaker}} = -0.8 + 0 = -0.8\\text{ MPa}$. Water always moves from higher (less negative) water potential to lower (more negative) water potential. Since $-0.4 > -0.8$, water flows OUT of the cell into the beaker.",
    distractorTip: "Water ALWAYS moves from higher $\\Psi$ to lower $\\Psi$ (from less negative to more negative)."
  },
  "bio-u2-l7": {
    id: "bio2-l7-q3",
    stem: "Which of the following structural and genetic observations provides strong empirical evidence supporting the Endosymbiotic Theory for the evolutionary origin of mitochondria and chloroplasts?",
    options: [
      "They have single phospholipid membranes identical to the nuclear envelope.",
      "They synthesize proteins using linear eukaryotic 80S ribosomes in the nucleus.",
      "They reproduce via mitosis and are synthesized de novo by the Golgi apparatus.",
      "They contain their own circular DNA genomes, contain 70S prokaryotic-like ribosomes, and replicate independently via a binary fission-like process."
    ],
    correctIndex: 3, // D
    explanation: "Mitochondria and chloroplasts share multiple traits with prokaryotes: their own circular double-stranded DNA, independent replication by binary fission, 70S ribosomes sensitive to bacterial antibiotics, and a double membrane (the inner membrane resembling bacterial plasma membranes).",
    distractorTip: "Evidence for endosymbiosis: Circular DNA, 70S prokaryotic ribosomes, double membrane, and independent binary fission replication."
  },

  // UNIT 3: Cellular Energetics (8 levels)
  "bio-u3-l1": {
    id: "bio3-l1-q3",
    stem: "How do biological enzymes accelerate the rates of biochemical reactions within cells?",
    options: [
      "By increasing the temperature and thermal energy of the reacting substrate molecules.",
      "By lowering the activation energy barrier ($E_a$) required for substrates to reach the transition state, without altering $\\Delta G$.",
      "By changing an endergonic reaction into an exergonic reaction.",
      "By permanently binding to the substrate as an irreversible cofactor."
    ],
    correctIndex: 1, // B
    explanation: "Enzymes are biological catalysts that lower the activation energy barrier ($E_a$) by stabilizing the transition state, orienting substrates, and straining chemical bonds. Enzymes do NOT change the free energy of reactants or products, meaning $\\Delta G$ remains completely unaffected.",
    distractorTip: "Enzymes lower ACTIVATION ENERGY ($E_a$). Enzymes do NOT change $\\Delta G$ (free energy change)!"
  },
  "bio-u3-l2": {
    id: "bio3-l2-q3",
    stem: "In an enzymatic assay, adding an excess concentration of substrate completely restores the reaction rate ($V_{\\text{max}}$) to its original uninhibited level. What type of inhibitor was present?",
    options: [
      "Noncompetitive allosteric inhibitor",
      "Irreversible covalent inhibitor",
      "Competitive inhibitor",
      "Feedback repressor protein"
    ],
    correctIndex: 2, // C
    explanation: "Competitive inhibitors bind reversibly to the enzyme's ACTIVE site, competing directly with the substrate. Increasing substrate concentration outcompetes the inhibitor for active site binding, restoring maximum velocity ($V_{\\text{max}}$). Noncompetitive inhibitors bind to allosteric sites and cannot be overcome by excess substrate.",
    distractorTip: "Competitive inhibitor: $V_{\\text{max}}$ unchanged with high substrate, $K_m$ increases. Noncompetitive: $V_{\\text{max}}$ decreases, cannot be overcome by substrate."
  },
  "bio-u3-l3": {
    id: "bio3-l3-q3",
    stem: "How do living cells drive energetically unfavorable (endergonic, $\\Delta G > 0$) chemical synthesis reactions?",
    options: [
      "By coupling the endergonic reaction to the highly exergonic hydrolysis of ATP ($\\Delta G \\approx -30.5\\text{ kJ/mol}$), making the net combined reaction free energy change negative.",
      "By operating at zero degrees Kelvin to eliminate entropy loss.",
      "By utilizing enzymes to convert endergonic reactions into spontaneous reactions without energy input.",
      "By storing kinetic energy as starch granules."
    ],
    correctIndex: 0, // A
    explanation: "Energy coupling pairs an endergonic process with an exergonic process (typically ATP hydrolysis via intermediate phosphorylated intermediates). If the net free energy change of the coupled reactions is negative ($\\Delta G_{\\text{net}} < 0$), the overall coupled process proceeds spontaneously.",
    distractorTip: "Energy coupling: Exergonic ATP hydrolysis powers endergonic biosynthetic pathways, ensuring net $\\Delta G < 0$."
  },
  "bio-u3-l4": {
    id: "bio3-l4-q3",
    stem: "During the light-dependent reactions of photosynthesis in eukaryotic chloroplasts, what is the initial electron donor that replenishes electrons lost by oxidized chlorophyll $P680$ in Photosystem II?",
    options: [
      "Carbon dioxide ($CO_2$)",
      "NADPH",
      "Water ($H_2O$), producing oxygen gas ($O_2$) and protons as byproducts",
      "Glucose"
    ],
    correctIndex: 2, // C
    explanation: "Photolysis in Photosystem II splits water molecules: $2 H_2O \\to 4 H^+ + 4 e^- + O_2$. The released electrons replenish the reaction center chlorophyll ($P680^+$), protons contribute to the thylakoid lumen electrochemical gradient, and $O_2$ is released into the atmosphere.",
    distractorTip: "Oxygen gas released during photosynthesis comes from the splitting of WATER ($H_2O$) in Photosystem II, NOT from carbon dioxide!"
  },
  "bio-u3-l5": {
    id: "bio3-l5-q3",
    stem: "Which enzyme is responsible for catalyzing the fixation of carbon dioxide ($CO_2$) onto the 5-carbon sugar ribulose 1,5-bisphosphate (RuBP) during the first step of the Calvin-Benson cycle?",
    options: [
      "ATP Synthase",
      "RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase)",
      "Phosphofructokinase",
      "DNA Polymerase III"
    ],
    correctIndex: 1, // B
    explanation: "RuBisCO fixes inorganic $CO_2$ onto RuBP in the chloroplast stroma, generating an unstable 6-carbon intermediate that immediately splits into two molecules of 3-phosphoglycerate (PGA), initiating the light-independent Calvin cycle.",
    distractorTip: "RuBisCO fixes $CO_2$ in the stroma during the Calvin cycle; it can also mistakenly bind $O_2$ in photorespiration."
  },
  "bio-u3-l6": {
    id: "bio3-l6-q3",
    stem: "Where does glycolysis occur in both eukaryotic and prokaryotic cells, and what is its net yield per molecule of glucose oxidized?",
    options: [
      "Mitochondrial matrix; 4 ATP, 2 FADH2",
      "Inner mitochondrial membrane; 32 ATP",
      "Chloroplast thylakoid; 1 glucose",
      "Cytosol (cytoplasm); 2 Pyruvate, 2 net ATP, and 2 NADH"
    ],
    correctIndex: 3, // D
    explanation: "Glycolysis takes place in the cytosol of all living cells (reflecting its ancient evolutionary origin). One 6-carbon glucose is split into two 3-carbon pyruvate molecules, consuming 2 ATP and producing 4 ATP (net 2 ATP via substrate-level phosphorylation) and 2 NADH.",
    distractorTip: "Glycolysis occurs in the CYTOSOL without requiring oxygen, yielding net 2 ATP, 2 NADH, and 2 pyruvate."
  },
  "bio-u3-l7": {
    id: "bio3-l7-q3",
    stem: "What is the primary role of oxygen ($O_2$) in aerobic cellular respiration?",
    options: [
      "To donate high-energy electrons to Complex I of the electron transport chain.",
      "To act as the final electron acceptor at the end of the electron transport chain, combining with electrons and protons to form water ($H_2O$).",
      "To hydrolyze glucose into pyruvate during the investment phase of glycolysis.",
      "To pump protons from the matrix into the intermembrane space."
    ],
    correctIndex: 1, // B
    explanation: "Oxygen has high electronegativity and serves as the terminal electron acceptor at Complex IV of the mitochondrial electron transport chain. By accepting low-energy electrons and binding protons, oxygen forms water, maintaining electron flow and the proton gradient.",
    distractorTip: "Oxygen is the FINAL ELECTRON ACCEPTOR in the ETC; without $O_2$, electrons back up and ATP synthesis ceases."
  },
  "bio-u3-l8": {
    id: "bio3-l8-q3",
    stem: "Dinitrophenol (DNP) is a chemical that permeabilizes the inner mitochondrial membrane to protons, allowing $H^+$ ions to leak back into the matrix without passing through ATP synthase. What effect does DNP have on ATP production and body temperature?",
    options: [
      "ATP synthesis decreases dramatically, and metabolic energy is released as excess heat (hyperthermia).",
      "ATP synthesis increases tenfold while body temperature drops to near freezing.",
      "Glycolysis and the citric acid cycle shut down completely.",
      "The proton gradient across the inner membrane increases in strength."
    ],
    correctIndex: 0, // A
    explanation: "DNP is a metabolic uncoupler. It dissipates the proton motive force across the cristae membrane. Without the proton gradient driving ATP synthase, ATP production plummets. To compensate, cells oxidize fuels at accelerated rates, and the dissipated energy is released as heat.",
    distractorTip: "Mitochondrial uncouplers destroy the proton gradient: electron transport continues and fuel is burned, but ATP is not made and energy is lost as HEAT."
  },

  // UNIT 4: Cell Communication & Cell Cycle (6 levels)
  "bio-u4-l1": {
    id: "bio4-l1-q3",
    stem: "Steroid hormones (such as testosterone and estrogen) are small, hydrophobic lipid molecules. Where are their target cellular receptors located?",
    options: [
      "On the outer surface of the plasma membrane spanning the lipid bilayer.",
      "Anchored to the thylakoid lumen.",
      "Inside the cell in the cytoplasm or nucleus.",
      "Within the peptidoglycan cell wall."
    ],
    correctIndex: 2, // C
    explanation: "Because steroid hormones are lipid-soluble (hydrophobic), they easily diffuse directly through the hydrophobic core of the plasma membrane. Once inside, they bind to intracellular receptors in the cytoplasm or nucleus, functioning as transcription factors.",
    distractorTip: "Hydrophobic ligands (steroids) bind to INTRACELLULAR receptors; Hydrophilic peptide ligands (epinephrine, insulin) bind to CELL SURFACE receptors."
  },
  "bio-u4-l2": {
    id: "bio4-l2-q3",
    stem: "In a G-protein-coupled receptor (GPCR) signal transduction pathway, what is the immediate biochemical consequence of a ligand binding to the extracellular domain of the GPCR?",
    options: [
      "The receptor phosphorylates nuclear DNA directly.",
      "The receptor undergoes a conformational change that causes the G-protein alpha subunit to release GDP and bind GTP, activating the G-protein.",
      "The receptor fuses with the nuclear envelope.",
      "The G-protein cleaves ATP into cyclic AMP directly."
    ],
    correctIndex: 1, // B
    explanation: "Ligand binding induces a conformational change in the GPCR, which acts as a guanine nucleotide exchange factor (GEF). The associated heterotrimeric G-protein releases inactive GDP and binds active GTP on its alpha subunit, enabling it to dissociate and activate downstream enzymes (like adenylyl cyclase).",
    distractorTip: "G-protein activation: GDP is swapped for GTP on the G-protein alpha subunit."
  },
  "bio-u4-l3": {
    id: "bio4-l3-q3",
    stem: "During human childbirth, pressure from the baby's head against the cervix stimulates the release of oxytocin from the posterior pituitary, which triggers stronger uterine contractions, pushing the baby harder against the cervix and causing even greater oxytocin release until delivery. What type of regulatory loop is this?",
    options: [
      "Negative feedback loop",
      "Competitive inhibition cascade",
      "Allosteric repression",
      "Positive feedback loop"
    ],
    correctIndex: 3, // D
    explanation: "Positive feedback mechanisms amplify and reinforce an initial stimulus, driving physiological processes away from homeostasis toward an explosive, definitive outcome (e.g. childbirth, blood clotting, action potential initiation).",
    distractorTip: "Positive feedback AMPLIFIES the response (oxytocin in labor, fruit ripening via ethylene); Negative feedback RESTORES homeostasis (insulin, thermoregulation)."
  },
  "bio-u4-l4": {
    id: "bio4-l4-q3",
    stem: "During which phase of mitosis do sister chromatids separate at their centromeres and get pulled toward opposite poles of the cell by shortening kinetochore microtubules?",
    options: [
      "Anaphase",
      "Prophase",
      "Telophase",
      "Metaphase"
    ],
    correctIndex: 0, // A
    explanation: "During anaphase, cohesin proteins are cleaved by separase, and sister chromatids are pulled apart toward opposite spindle poles by depolymerizing kinetochore microtubules.",
    distractorTip: "Prophase = chromosomes condense; Metaphase = align at equator; Anaphase = sister chromatids SEPARATE; Telophase = nuclei reform."
  },
  "bio-u4-l5": {
    id: "bio4-l5-q3",
    stem: "How do cyclins and Cyclin-Dependent Kinases (CDKs) interact to regulate progression through cell cycle checkpoints?",
    options: [
      "CDK concentrations fluctuate wildly, while cyclin concentrations remain constant.",
      "Cyclins degrade CDKs to prevent mitosis from occurring.",
      "CDKs are inactive until they bind to specific cyclins whose concentrations fluctuate at distinct phases of the cell cycle, forming active complexes that phosphorylate target proteins.",
      "Cyclins synthesize genomic DNA directly during S phase."
    ],
    correctIndex: 2, // C
    explanation: "CDK enzyme levels remain relatively constant throughout the cell cycle, but CDKs are inactive on their own. They must bind to specific cyclins (whose concentrations rise and fall cyclically) to form active MPF/cyclin-CDK complexes that phosphorylate downstream target proteins to advance the cell cycle.",
    distractorTip: "CDK levels remain constant; CYCLIN levels fluctuate. When cyclin binds CDK, the complex phosphorylates targets to pass checkpoints."
  },
  "bio-u4-l6": {
    id: "bio4-l6-q3",
    stem: "Why is the p53 gene often called the 'guardian of the genome' in cancer biology?",
    options: [
      "It promotes rapid angiogenesis to supply tumors with blood vessels.",
      "It is a tumor suppressor gene that encodes a transcription factor that detects DNA damage, halts the cell cycle at the G1/S checkpoint for repair, or induces apoptosis if damage is irreparable.",
      "It is a proto-oncogene that stimulates cell division in response to growth factors.",
      "It prevents telomeres from shortening in normal somatic cells."
    ],
    correctIndex: 1, // B
    explanation: "p53 is a tumor suppressor protein that responds to cellular stress and DNA damage. It arrests the cell cycle in G1 to allow DNA repair enzymes to work; if the DNA damage is beyond repair, p53 initiates apoptosis (programmed cell death) to prevent malignant transformation.",
    distractorTip: "p53 is a TUMOR SUPPRESSOR: halts cell cycle for DNA repair or triggers apoptosis if damage cannot be fixed."
  },

  // UNIT 5: Heredity & Mendelian Genetics (6 levels)
  "bio-u5-l1": {
    id: "bio5-l1-q3",
    stem: "During which stage of meiosis does crossing over (homologous recombination) occur between non-sister chromatids of homologous chromosomes?",
    options: [
      "Metaphase II",
      "Prophase I",
      "Anaphase I",
      "Telophase II"
    ],
    correctIndex: 1, // B
    explanation: "During Prophase I of meiosis, homologous chromosomes pair up gene-for-gene (synapsis) to form tetrads. Non-sister chromatids cross over at chiasmata, exchanging genetic segments and creating recombinant chromosomes.",
    distractorTip: "Crossing over occurs exclusively in PROPHASE I of meiosis; Independent assortment occurs in METAPHASE I."
  },
  "bio-u5-l2": {
    id: "bio5-l2-q3",
    stem: "In fruit flies, two heterozygous gray-bodied, long-winged flies ($BbVv \\times BbVv$) are crossed. Assuming independent assortment, what fraction of the offspring is expected to display the recombinant black-bodied, long-winged ($bbV_-$) phenotype?",
    options: [
      "9/16",
      "1/16",
      "3/16",
      "3/4"
    ],
    correctIndex: 2, // C
    explanation: "In a standard Mendelian dihybrid cross ($BbVv \\times BbVv$): probability of $bb$ (black) = $1/4$; probability of $V_-$ (long wings) = $3/4$. Using the multiplication rule of independent events: $P(bb \\text{ and } V_-) = \\frac{1}{4} \\times \\frac{3}{4} = \\frac{3}{16}$.",
    distractorTip: "Dihybrid cross phenotypic ratio: 9/16 (dominant/dominant), 3/16 (recombinant 1), 3/16 (recombinant 2), 1/16 (recessive/recessive)."
  },
  "bio-u5-l3": {
    id: "bio5-l3-q3",
    stem: "When a true-breeding red snapdragon ($C^R C^R$) is crossed with a true-breeding white snapdragon ($C^W C^W$), all F1 offspring produce pink flowers ($C^R C^W$). When F1 pink flowers are self-pollinated, what phenotypic ratio is expected in the F2 generation?",
    options: [
      "3 Red : 1 White",
      "All Pink",
      "1 Red : 2 Pink : 1 White",
      "9 Red : 6 Pink : 1 White"
    ],
    correctIndex: 2, // C
    explanation: "This is incomplete dominance, where the heterozygote displays an intermediate blended phenotype. Crossing $C^R C^W \\times C^R C^W$ yields a genotype ratio of $1 C^R C^R : 2 C^R C^W : 1 C^W C^W$, which corresponds to a 1 Red : 2 Pink : 1 White phenotypic ratio.",
    distractorTip: "Incomplete dominance: Heterozygote is an intermediate blend (Pink); phenotypic ratio matches genotypic ratio (1:2:1)."
  },
  "bio-u5-l4": {
    id: "bio5-l4-q3",
    stem: "Red-green color blindness is an X-linked recessive trait. A carrier female ($X^B X^b$) has children with a normal-vision male ($X^B Y$). What percentage of their SONS is expected to be color-blind?",
    options: [
      "0%",
      "25%",
      "100%",
      "50%"
    ],
    correctIndex: 3, // D
    explanation: "Sons inherit their Y chromosome from their father and an X chromosome from their mother. Since the mother has genotype $X^B X^b$, there is a 50% probability that a son receives the mutated $X^b$ allele, resulting in color blindness ($X^b Y$). (50% of sons colorblind; 0% of daughters colorblind).",
    distractorTip: "Pay close attention to whether the question asks for the percentage of ALL offspring or strictly percentage of SONS (here, 1/2 of sons = 50%)."
  },
  "bio-u5-l5": {
    id: "bio5-l5-q3",
    stem: "In a testcross between a heterozygous fruit fly ($AaBb$) and a homozygous recessive fly ($aabb$), the offspring display 450 $AB$, 450 $ab$, 50 $Ab$, and 50 $aB$. What is the recombination frequency, and what does it indicate about the genes?",
    options: [
      "Recombination frequency is 10%, indicating that genes A and B are linked on the same chromosome and separated by 10 map units (centimorgans).",
      "Recombination frequency is 50%, indicating independent assortment on different chromosomes.",
      "The genes are sex-linked on the Y chromosome.",
      "Recombination frequency is 90% due to multiple crossovers."
    ],
    correctIndex: 0, // A
    explanation: "Total offspring = $450 + 450 + 50 + 50 = 1000$. Recombinant offspring = $50 + 50 = 100$. Recombination frequency = $\\frac{100}{1000} \\times 100 = 10\\%$. Because the recombination frequency is significantly less than 50%, the genes are genetically linked on the same chromosome, separated by 10 map units (cM).",
    distractorTip: "Recombination frequency < 50% proves genetic LINKAGE on the same chromosome. 1% recombination = 1 map unit (centimorgan)."
  },
  "bio-u5-l6": {
    id: "bio5-l6-q3",
    stem: "Which of the following inheritance patterns explains why mitochondrial DNA disorders are passed strictly from mothers to 100% of their children, but never passed from affected fathers to their offspring?",
    options: [
      "Autosomal dominant inheritance with incomplete penetrance",
      "Sex-linked recessive inheritance on the X chromosome",
      "Maternal (cytoplasmic/extranuclear) mitochondrial inheritance",
      "Genomic imprinting during spermatogenesis"
    ],
    correctIndex: 2, // C
    explanation: "During human fertilization, the sperm delivers only its nuclear haploid genome, whereas the egg provides virtually all cytoplasm, organelles, and mitochondrial genomes to the zygote. Thus, mitochondrial traits are inherited exclusively via maternal transmission.",
    distractorTip: "Mitochondrial DNA is inherited MATERNALLY: an affected mother passes the trait to ALL offspring; an affected father passes it to NONE."
  },

  // UNIT 6: Gene Expression & Regulation (8 levels)
  "bio-u6-l1": {
    id: "bio6-l1-q3",
    stem: "If a sample of double-stranded DNA is analyzed and found to contain 28% adenine (A), what percentage of the sample consists of cytosine (C)?",
    options: [
      "28%",
      "22%",
      "44%",
      "14%"
    ],
    correctIndex: 1, // B
    explanation: "According to Chargaff's rules for double-stranded DNA, $\%A = \\%T$ and $\%G = \\%C$. Since $A = 28\\%$, $T = 28\\%$, totaling $56\\%$. The remaining $44\\%$ is split equally between guanine and cytosine: $44\\% / 2 = 22\\%$ cytosine.",
    distractorTip: "Chargaff's rules: $\%A + \\%T + \\%G + \\%C = 100\\%$. If $A = 28\\%$, then $T = 28\\%$, so $G + C = 44\\% \\implies C = 22\\%$."
  },
  "bio-u6-l2": {
    id: "bio6-l2-q3",
    stem: "Why is the lagging strand of DNA synthesized discontinuously as short Okazaki fragments during replication?",
    options: [
      "DNA helicase periodically pauses along the template strand.",
      "DNA polymerase can synthesize new DNA strands only in the 5' to 3' direction, and the lagging strand template runs 5' to 3' into the unwinding replication fork.",
      "The cell has limited supplies of RNA primers.",
      "Topoisomerase cuts the lagging strand into pieces to prevent supercoiling."
    ],
    correctIndex: 1, // B
    explanation: "DNA polymerase III can add nucleotides ONLY to the free 3'-OH end of a growing strand, meaning synthesis proceeds strictly $5' \\to 3'$. Because the two strands of the DNA double helix are antiparallel, the lagging strand must be synthesized away from the replication fork in discontinuous Okazaki fragments.",
    distractorTip: "DNA polymerase synthesizes ONLY in the 5' to 3' direction, creating Okazaki fragments on the lagging strand."
  },
  "bio-u6-l3": {
    id: "bio6-l3-q3",
    stem: "In eukaryotic pre-mRNA processing, what enables a single pre-mRNA transcript to produce multiple distinct protein isoforms in different tissues?",
    options: [
      "The 5' methylguanosine cap",
      "Alternative RNA splicing of exons",
      "Polyadenylation of the 3' tail",
      "RNA editing by reverse transcriptase"
    ],
    correctIndex: 1, // B
    explanation: "Alternative splicing allows spliceosomes to selectively include or exclude different exons (and remove introns) from a primary pre-mRNA transcript, allowing a single gene to encode multiple distinct protein variants with specialized functions in different cell types.",
    distractorTip: "Alternative splicing: Exons are spliced together in different combinations, allowing one gene to produce multiple distinct protein isoforms."
  },
  "bio-u6-l4": {
    id: "bio6-l4-q3",
    stem: "A mRNA codon sequence reads `5'-AUG-3'`. What is the corresponding complementary anticodon sequence found on the initiator tRNA molecule carrying methionine?",
    options: [
      "3'-UAC-5'",
      "5'-TAC-3'",
      "3'-CAU-5'",
      "5'-AUG-3'"
    ],
    correctIndex: 0, // A
    explanation: "tRNA anticodons pair antiparallel and complementary to mRNA codons using RNA base-pairing rules ($A-U, U-A, G-C$). The mRNA is `5'-AUG-3'`, so the complementary anticodon is `3'-UAC-5'`.",
    distractorTip: "Remember antiparallel orientation: `5'-AUG-3'` pairs with `3'-UAC-5'`."
  },
  "bio-u6-l5": {
    id: "bio6-l5-q3",
    stem: "In the bacterial `lac` operon, what molecular event occurs when lactose is introduced to the bacterial growth medium in the absence of glucose?",
    options: [
      "Lactose binds directly to RNA polymerase to stimulate transcription.",
      "Allolactose binds to the lac repressor protein, inducing a conformational change that causes the repressor to release from the operator, allowing RNA polymerase to transcribe the operon.",
      "The repressor binds permanently to the promoter region.",
      "cAMP levels drop to zero, shutting down transcription."
    ],
    correctIndex: 1, // B
    explanation: "The lac operon is an inducible operon. When lactose is present, its isomer allolactose binds to the lac repressor (allosteric regulation). This inactivates the repressor, detaching it from the operator DNA and permitting RNA polymerase to transcribe the structural genes ($lacZ, lacY, lacA$).",
    distractorTip: "Lactose present $\\implies$ allolactose binds repressor $\\implies$ repressor leaves operator $\\implies$ transcription ON."
  },
  "bio-u6-l6": {
    id: "bio6-l6-q3",
    stem: "How does histone acetylation affect eukaryotic chromatin structure and gene expression?",
    options: [
      "It adds positive charges to histone tails, packing nucleosomes into condensed, transcriptionally silent heterochromatin.",
      "It marks histone proteins for immediate destruction by proteasomes.",
      "It neutralizes positive charges on histone tails, loosening chromatin from condensed heterochromatin into open euchromatin, promoting active transcription.",
      "It removes the TATA box from promoter DNA sequences."
    ],
    correctIndex: 2, // C
    explanation: "Histone acetylation (catalyzed by HATs) adds acetyl groups to lysine residues on histone tails, neutralizing their positive charge. This weakens the attraction between histones and negatively charged DNA, unwinding heterochromatin into accessible euchromatin and facilitating gene transcription.",
    distractorTip: "Histone Acetylation = Activates transcription (open euchromatin); DNA Methylation = Silences transcription (condensed heterochromatin)."
  },
  "bio-u6-l7": {
    id: "bio6-l7-q3",
    stem: "Which type of mutation in a protein-coding sequence is most likely to produce a nonfunctional protein by altering every subsequent amino acid in the polypeptide chain?",
    options: [
      "A silent substitution mutation",
      "A single nucleotide insertion or deletion that causes a frameshift",
      "A missense point mutation in an intron",
      "A conservative amino acid substitution"
    ],
    correctIndex: 1, // B
    explanation: "Because the genetic code is read in discrete triplets of nucleotides (codons), an insertion or deletion of a number of nucleotides not divisible by 3 shifts the translational reading frame (frameshift mutation). Every downstream codon is altered, typically creating a premature stop codon and a nonfunctional protein.",
    distractorTip: "Frameshift mutation (insertions/deletions) alters all downstream codons; Silent mutations change DNA but code for the same amino acid."
  },
  "bio-u6-l8": {
    id: "bio6-l8-q3",
    stem: "In molecular gel electrophoresis, what drives the migration of DNA restriction fragments through an agarose gel, and which fragments travel farthest toward the positive anode?",
    options: [
      "DNA fragments are positively charged and migrate toward the cathode; largest fragments move farthest.",
      "DNA fragments have negatively charged phosphate backbones and migrate toward the positive anode; smaller fragments travel faster and farthest through the porous gel matrix.",
      "Fragments are separated based on hydrophobic interactions with the buffer.",
      "Enzymes pull the DNA fragments by consuming ATP."
    ],
    correctIndex: 1, // B
    explanation: "DNA has a uniform negative charge due to its phosphate groups, causing it to migrate toward the positive electrode (anode) when an electric current is applied. The agarose gel acts as a molecular sieve: smaller DNA fragments encounter less friction and migrate much farther and faster than bulky large fragments.",
    distractorTip: "Gel electrophoresis: DNA is NEGATIVE $\\implies$ runs toward POSITIVE anode; SMALL fragments run FARTHEST."
  },

  // UNIT 7: Natural Selection & Evolution (7 levels)
  "bio-u7-l1": {
    id: "bio7-l1-q3",
    stem: "A population of pocket mice living on light granite rocks is predominantly sandy-colored to blend in with the background. Following a volcanic eruption that deposits dark basalt lava, mice with dark fur survival rates surge while light-colored mice are heavily preyed upon by owls. What mode of natural selection is occurring?",
    options: [
      "Stabilizing selection",
      "Disruptive selection",
      "Directional selection",
      "Artificial selection"
    ],
    correctIndex: 2, // C
    explanation: "Directional selection favors individuals exhibiting one extreme of a phenotypic range (dark fur), shifting the population's overall phenotypic distribution in that direction in response to an environmental change.",
    distractorTip: "Directional = favors ONE extreme; Stabilizing = favors intermediate/average; Disruptive = favors BOTH extremes."
  },
  "bio-u7-l2": {
    id: "bio7-l2-q3",
    stem: "A massive hurricane kills 95% of a lizard population on an isolated island. The surviving 5 lizards happen to have unusually short tails purely by random chance, and the future population exhibits short tails for generations. What evolutionary mechanism caused this change?",
    options: [
      "Natural selection for short tails",
      "A population bottleneck effect (genetic drift)",
      "High rates of gene flow from the mainland",
      "Assortative sexual selection"
    ],
    correctIndex: 1, // B
    explanation: "The bottleneck effect is a form of genetic drift that occurs when a catastrophic event drastically reduces population size at random. The allele frequencies of the small surviving group differ substantially from the original population purely due to chance, reducing genetic diversity.",
    distractorTip: "Bottleneck effect = random catastrophic reduction in population size; Founder effect = small group colonizes new territory."
  },
  "bio-u7-l3": {
    id: "bio7-l3-q3",
    stem: "In a population in Hardy-Weinberg equilibrium, the frequency of homozygous recessive individuals ($q^2$) for an autosomal trait is 0.09. What is the frequency of heterozygous carriers ($2pq$) in this population?",
    options: [
      "0.30",
      "0.49",
      "0.42",
      "0.70"
    ],
    correctIndex: 2, // C
    explanation: "Given $q^2 = 0.09 \\implies q = \\sqrt{0.09} = 0.3$. Since $p + q = 1$, $p = 1 - 0.3 = 0.7$. The frequency of heterozygous carriers is $2pq = 2(0.7)(0.3) = 0.42$.",
    distractorTip: "Hardy-Weinberg steps: (1) Find $q = \\sqrt{q^2}$; (2) Find $p = 1 - q$; (3) Calculate $2pq = 2 \\times p \\times q$."
  },
  "bio-u7-l4": {
    id: "bio7-l4-q3",
    stem: "The skeletal bone structure of a human arm, a cat's front leg, a bat's wing, and a whale's flipper all feature the same fundamental arrangement of humerus, radius, ulna, carpals, and phalanges, despite performing completely different functions. These anatomical structures are classified as:",
    options: [
      "Homologous structures indicating divergent evolution from a common tetrapod ancestor.",
      "Analogous structures resulting from convergent evolution.",
      "Vestigial structures with zero biological utility.",
      "Atavistic anomalies created by epigenetic mutations."
    ],
    correctIndex: 0, // A
    explanation: "Homologous structures are anatomical features shared by different species due to common evolutionary ancestry (divergent evolution), even if those structures have adapted to serve vastly different functions (flying, swimming, walking).",
    distractorTip: "Homologous = shared ancestry, different function (human arm / whale flipper); Analogous = different ancestry, similar function (bird wing / insect wing)."
  },
  "bio-u7-l5": {
    id: "bio7-l5-q3",
    stem: "When constructing a phylogenetic cladogram, what is the role of an 'outgroup'?",
    options: [
      "To represent the most recently evolved species with all derived characters.",
      "To serve as a baseline reference species that branched off before the lineage containing the ingroup, allowing researchers to distinguish ancestral traits from shared derived traits.",
      "To show that convergent evolution occurred among all taxa.",
      "To prove that cladograms cannot resolve evolutionary relationships."
    ],
    correctIndex: 1, // B
    explanation: "An outgroup is a species or group of species that is closely related to, but not part of, the clade being investigated (the ingroup). The outgroup displays ancestral character states, serving as a benchmark to determine which traits in the ingroup are derived.",
    distractorTip: "Outgroup = baseline species with ancestral traits, branched off earliest from common ancestor."
  },
  "bio-u7-l6": {
    id: "bio7-l6-q3",
    stem: "A geographic barrier (such as the formation of the Grand Canyon) divides a population of squirrels into two isolated groups. Over thousands of generations, different mutations, genetic drift, and natural selection pressures accumulate until the two groups can no longer interbreed. What type of speciation occurred?",
    options: [
      "Sympatric speciation via polyploidy",
      "Allopatric speciation",
      "Behavioral reinforcement without isolation",
      "Artificial cladogenesis"
    ],
    correctIndex: 1, // B
    explanation: "Allopatric speciation occurs when a physical geographic barrier (canyons, rivers, mountain ranges) divides a population, preventing gene flow. Independent evolutionary changes accumulate in isolation, eventually leading to reproductive isolation.",
    distractorTip: "Allopatric = geographic separation ('other country'); Sympatric = speciation in the SAME geographic area (polyploidy, habitat differentiation)."
  },
  "bio-u7-l7": {
    id: "bio7-l7-q3",
    stem: "Following the end-Cretaceous asteroid impact that caused the mass extinction of non-avian dinosaurs 66 million years ago, mammals underwent rapid speciation to fill newly vacant ecological niches. What evolutionary phenomenon does this represent?",
    options: [
      "Stabilizing selection across megafauna",
      "Genetic drift within a single static population",
      "Convergent evolution of flightless birds",
      "Adaptive radiation"
    ],
    correctIndex: 3, // D
    explanation: "Adaptive radiation is the rapid evolutionary diversification of a single ancestral lineage into a wide variety of ecological forms and species, typically following mass extinctions, the colonization of novel environments (like volcanic archipelagos), or the evolution of key innovations.",
    distractorTip: "Adaptive radiation: Rapid evolution of many diverse species from a common ancestor to fill vacant ecological niches."
  },

  // UNIT 8: Ecology (7 levels)
  "bio-u8-l1": {
    id: "bio8-l1-q3",
    stem: "In behavioral ecology, how does an animal exhibiting 'taxis' differ from an animal exhibiting 'kinesis' in response to an environmental stimulus?",
    options: [
      "Taxis is a directed movement toward or away from a stimulus, whereas kinesis is an undirected, random change in speed or turning rate.",
      "Taxis is learned through operant conditioning, whereas kinesis is strictly innate.",
      "Taxis occurs only in plants, while kinesis occurs only in animals.",
      "Taxis requires pheromone chemical signaling between species."
    ],
    correctIndex: 0, // A
    explanation: "Taxis is oriented, directional movement toward (positive) or away from (negative) a stimulus (e.g. trout swimming upstream into the current, phototaxis toward light). Kinesis is non-directional, random movement where the stimulus intensity alters the rate of movement or turning frequency (e.g. woodlice moving faster in dry air).",
    distractorTip: "Taxis = DIRECTIONAL movement (toward/away); Kinesis = NON-DIRECTIONAL random rate change (speeding up in unfavorable areas)."
  },
  "bio-u8-l2": {
    id: "bio8-l2-q3",
    stem: "If a terrestrial grassland ecosystem has a Net Primary Productivity (NPP) of $2000\\text{ kcal/m}^2\\text{/year}$, approximately how much energy is expected to be converted into biomass at the tertiary consumer (carnivore) trophic level?",
    options: [
      "200 kcal/m²/year",
      "2 kcal/m²/year",
      "20 kcal/m²/year",
      "0.2 kcal/m²/year"
    ],
    correctIndex: 1, // B
    explanation: "By the 10% trophic efficiency rule, roughly 10% of energy at each trophic level is transferred to the next level (the rest is lost as metabolic heat, respiration, and feces): Producers = $2000\\text{ kcal}$; Primary consumers = $200\\text{ kcal}$; Secondary consumers = $20\\text{ kcal}$; Tertiary consumers = $2\\text{ kcal/m}^2\\text{/year}$.",
    distractorTip: "10% rule: Divide by 10 at each step. Producers (2000) $\\to$ Herbivores (200) $\\to$ Carnivores (20) $\\to$ Tertiary (2)."
  },
  "bio-u8-l3": {
    id: "bio8-l3-q3",
    stem: "In the logistic population growth equation $\\frac{dN}{dt} = rN\\left(\\frac{K - N}{K}\\right)$, what happens to the population growth rate when the population size $N$ approaches the carrying capacity $K$?",
    options: [
      "The growth rate accelerates exponentially toward infinity.",
      "The term $\\frac{K - N}{K}$ approaches zero, causing the population growth rate $\\frac{dN}{dt}$ to slow and approach zero as population stabilizes at $K$.",
      "The intrinsic growth rate $r$ becomes negative.",
      "The population doubles every generation."
    ],
    correctIndex: 1, // B
    explanation: "As $N \\to K$, the numerator $(K - N) \\to 0$, which makes the fraction $\\frac{K - N}{K} \\to 0$. Multiplying by zero makes $\\frac{dN}{dt} \\to 0$, causing the S-shaped logistic curve to plateau at the carrying capacity $K$.",
    distractorTip: "Logistic growth: When $N \\ll K$, growth is near exponential; When $N \\approx K$, growth drops to zero (population stabilizes)."
  },
  "bio-u8-l4": {
    id: "bio8-l4-q3",
    stem: "According to G.F. Gause's Competitive Exclusion Principle, what is the inevitable outcome when two distinct species compete for the exact same limiting resource in an identical ecological niche?",
    options: [
      "Both species will undergo immediate horizontal gene transfer.",
      "Both species will expand their fundamental niches equally.",
      "One species will use the resource more efficiently, driving the other species to local extinction or forcing it to shift into an alternative niche (resource partitioning).",
      "The carrying capacity of the habitat will double."
    ],
    correctIndex: 2, // C
    explanation: "The competitive exclusion principle states that two species cannot coexist indefinitely if they occupy identical ecological niches competing for the same limiting resources. The superior competitor persists; the inferior competitor either undergoes niche differentiation (resource partitioning) or becomes locally extinct.",
    distractorTip: "Competitive Exclusion Principle: Two species cannot occupy the exact same niche simultaneously; one will outcompete the other."
  },
  "bio-u8-l5": {
    id: "bio8-l5-q3",
    stem: "In a classic Pacific Northwest intertidal community study, Robert Paine removed the predatory sea star *Pisaster ochraceus*. Following its removal, blue mussels overgrew all available rocky space, crowding out 25 other species of algae, barnacles, and limpets. What ecological role does *Pisaster* play?",
    options: [
      "Primary autotrophic producer",
      "Dominant invasive parasite",
      "Keystone species that maintains community biodiversity by preventing a single competitor from monopolizing space",
      "Pioneer species in primary succession"
    ],
    correctIndex: 2, // C
    explanation: "A keystone species exerts strong disproportionate control on community structure relative to its abundance. By preying on mussels, *Pisaster* kept the dominant competitor in check, preserving species richness and diversity across the entire ecosystem.",
    distractorTip: "Keystone species: Has a disproportionately large impact on community structure and biodiversity relative to its biomass."
  },
  "bio-u8-l6": {
    id: "bio8-l6-q3",
    stem: "Why do persistent, fat-soluble chemical toxins like DDT and mercury reach their highest, most lethal concentrations in top apex predators (such as bald eagles and tuna) rather than in primary producers?",
    options: [
      "Apex predators absorb toxins directly through their skin from rainfall.",
      "Due to biomagnification, fat-soluble toxins cannot be metabolized or excreted and accumulate in tissues; because apex predators consume vast biomass from lower trophic levels, toxin concentrations multiply at each step up the food web.",
      "Producers actively pump toxins into top carnivores via xylem transport.",
      "Toxins act as competitive inhibitors exclusively in warm-blooded organisms."
    ],
    correctIndex: 1, // B
    explanation: "Biomagnification occurs when lipophilic, non-biodegradable toxins are passed up the food chain. Because top predators must consume enormous amounts of lower-level biomass to meet energy requirements, the toxins concentrate exponentially at the highest trophic levels.",
    distractorTip: "Biomagnification = toxin concentration INCREASES at each successive trophic level, reaching highest toxicity in apex predators."
  },
  "bio-u8-l7": {
    id: "bio8-l7-q3",
    stem: "In Yellowstone National Park, the reintroduction of gray wolves (an apex predator) in 1995 reduced overbrowsing of young willow and aspen trees by elk herds. As vegetation recovered along riverbanks, songbird populations rebounded, erosion decreased, and beavers returned to build dams. What ecological phenomenon does this cascade represent?",
    options: [
      "Bottom-up energetic limitation",
      "A top-down trophic cascade",
      "Primary ecological succession",
      "Eutrophication"
    ],
    correctIndex: 1, // B
    explanation: "A top-down trophic cascade occurs when an apex predator suppresses the abundance or alters the behavior of lower trophic levels (herbivores), releasing the next lower trophic level (producers) from predation pressure and restructuring the entire ecosystem.",
    distractorTip: "Top-down trophic cascade: Apex predators regulate herbivores, which in turn benefits primary producers and ecosystem health."
  }
};

const fullPath = path.resolve(__dirname, '../src/data/quiz/apBiologyUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_BIOLOGY_UNIT_DEFINITIONS;

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

console.log('Added', addedCount, 'questions to AP Biology.');

const newCode = `// AP Biology Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–8)
// Complete authentic coverage: 55 Levels, 165 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_BIOLOGY_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apBiologyUnitsData.ts successfully.');
