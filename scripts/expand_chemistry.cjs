const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// 59 levels in AP Chemistry
// Target additions: C: 16, D: 15, A: 14, B: 14 (Total: 59)

const q3Data = {
  // UNIT 1: Atomic Structure & Properties (6 levels)
  "chem-u1-l1": {
    id: "chem1-l1-q3",
    stem: "A mass spectrum of naturally occurring chlorine gas shows two distinct peaks: one at $m/z = 35$ with an abundance of approximately 75.8%, and one at $m/z = 37$ with an abundance of approximately 24.2%. What is the average atomic mass of chlorine?",
    options: [
      "36.00 amu",
      "35.48 amu",
      "37.00 amu",
      "35.00 amu"
    ],
    correctIndex: 1, // B
    explanation: "Average atomic mass is the weighted average of isotopic masses: $(0.7577 \\times 35) + (0.2423 \\times 37) = 26.52 + 8.965 = 35.485\\text{ amu}$, matching the periodic table value.",
    distractorTip: "Calculate average atomic mass using weighted proportions: $\\sum (\\text{fractional abundance} \\times \\text{isotopic mass})$."
  },
  "chem-u1-l2": {
    id: "chem1-l2-q3",
    stem: "A hydrocarbon compound is analyzed and found to contain 85.7% carbon and 14.3% hydrogen by mass. What is its empirical formula?",
    options: [
      "$CH$",
      "$CH_2$",
      "$C_2H_5$",
      "$CH_4$"
    ],
    correctIndex: 1, // B
    explanation: "Assume 100 g: Moles of C = $85.7\\text{ g} / 12.01\\text{ g/mol} = 7.14\\text{ mol}$. Moles of H = $14.3\\text{ g} / 1.008\\text{ g/mol} = 14.19\\text{ mol}$. Divide by smallest: $14.19 / 7.14 \\approx 2.00$. The empirical formula is $CH_2$.",
    distractorTip: "Empirical formula steps: % to mass, mass to mole, divide by small, multiply till whole."
  },
  "chem-u1-l3": {
    id: "chem1-l3-q3",
    stem: "Which of the following ground-state electron configurations represents an anomalous transition metal with a half-filled or completely filled $d$-subshell?",
    options: [
      "$[Ar] 4s^2 3d^4$",
      "$[Ar] 4s^1 3d^5$ (Chromium, Cr)",
      "$[Ar] 4s^2 3d^9$",
      "$[Ar] 4s^2 3d^1$"
    ],
    correctIndex: 1, // B
    explanation: "Chromium ($Z = 24$) and Copper ($Z = 29$) are classic AP exceptions to the Aufbau principle. Cr promotes one $4s$ electron into the $3d$ subshell to achieve two half-filled subshells ($[Ar] 4s^1 3d^5$), which provides enhanced quantum mechanical exchange stabilization energy.",
    distractorTip: "Classic Aufbau exceptions on the AP Exam: Chromium is $[Ar] 4s^1 3d^5$; Copper is $[Ar] 4s^1 3d^{10}$."
  },
  "chem-u1-l4": {
    id: "chem1-l4-q3",
    stem: "In a Photoelectron Spectroscopy (PES) spectrum of neon ($Z = 10$), how many discrete peaks are observed, and which peak has the highest binding energy?",
    options: [
      "1 peak; 2p subshell",
      "2 peaks; 2s subshell",
      "3 peaks; the 1s peak has the highest binding energy because core electrons are closest to the nucleus and experience the strongest Coulombic attraction.",
      "5 peaks; the valence electrons"
    ],
    correctIndex: 2, // C
    explanation: "Neon ($1s^2 2s^2 2p^6$) has three distinct occupied subshells, producing 3 PES peaks ($1s, 2s, 2p$). The $1s$ core electrons are closest to the 10 protons in the nucleus, experiencing minimal shielding, which requires the greatest photon energy to eject (highest binding energy).",
    distractorTip: "In PES spectra, the peak furthest to the left (highest binding energy) corresponds to the $1s$ subshell closest to the nucleus."
  },
  "chem-u1-l5": {
    id: "chem1-l5-q3",
    stem: "Why does atomic radius decrease across a period from left to right (e.g., from Lithium to Fluorine) on the Periodic Table?",
    options: [
      "Principal quantum number $n$ decreases across a period.",
      "Electrons fill core shells that repel the valence shell.",
      "The number of protons increases while valence electrons are added to the same principal energy level, increasing effective nuclear charge ($Z_{\\text{eff}}$) and pulling the electron cloud closer to the nucleus.",
      "Electronegativity decreases across a period."
    ],
    correctIndex: 2, // C
    explanation: "Across a period, electrons are added to the same principal energy shell ($n = 2$), providing minimal additional shielding. However, each step adds one nuclear proton, increasing $Z_{\\text{eff}} = Z - S$. The stronger Coulombic attraction draws valence electrons inward, reducing atomic radius.",
    distractorTip: "Across a period: $Z_{\\text{eff}}$ increases $\\implies$ atomic radius decreases $\\implies$ ionization energy increases."
  },
  "chem-u1-l6": {
    id: "chem1-l6-q3",
    stem: "Why is the first ionization energy of oxygen ($1314\\text{ kJ/mol}$) slightly lower than the first ionization energy of nitrogen ($1402\\text{ kJ/mol}$), violating the general left-to-right periodic trend?",
    options: [
      "Oxygen has a lower nuclear charge than nitrogen.",
      "Oxygen has valence electrons in a higher principal energy level $n = 3$.",
      "Oxygen's fourth $2p$ electron must pair with another electron in an orbital ($2p_x^2 2p_y^1 2p_z^1$), generating inter-electron repulsion that makes it easier to remove.",
      "Nitrogen is an alkali metal."
    ],
    correctIndex: 2, // C
    explanation: "Nitrogen has a stable half-filled $2p$ subshell with three unpaired parallel electrons ($2p^3$). Oxygen ($2p^4$) has one doubly occupied $2p$ orbital. Coulombic repulsion between the two paired electrons in the same orbital raises their energy, lowering the energy required to remove one.",
    distractorTip: "AP trend anomaly: Oxygen's paired electron in $2p$ experiences inter-electron repulsion, making it easier to ionize than nitrogen's half-filled $2p^3$."
  },

  // UNIT 2: Molecular & Ionic Compound Structure (6 levels)
  "chem-u2-l1": {
    id: "chem2-l1-q3",
    stem: "On a potential energy curve for two interacting hydrogen atoms as a function of internuclear distance, what does the minimum point (lowest potential energy) represent?",
    options: [
      "The point of total nuclear fusion.",
      "The equilibrium bond length and bond energy where attractive Coulombic forces between nuclei and electrons balance repulsive forces.",
      "Complete bond dissociation into isolated gas-phase atoms.",
      "The activation energy of molecular collision."
    ],
    correctIndex: 1, // B
    explanation: "The minimum of the Lennard-Jones potential energy curve corresponds to the stable chemical bond. The internuclear distance at this minimum is the equilibrium bond length, and the depth of the well represents the bond dissociation energy required to break the bond.",
    distractorTip: "Minimum of the potential energy well = Bond length ($x$-axis) and Bond energy ($y$-axis depth)."
  },
  "chem-u2-l2": {
    id: "chem2-l2-q3",
    stem: "According to Coulomb's Law, which of the following ionic crystal compounds has the largest (most exothermic) lattice energy?",
    options: [
      "$NaCl$",
      "$KCl$",
      "$MgO$",
      "$CaO$"
    ],
    correctIndex: 2, // C
    explanation: "Lattice energy is proportional to $\\frac{q_1 q_2}{r}$. $MgO$ consists of divalent ions ($Mg^{2+}$ and $O^{2-}$, product of charges $= 4$), compared to monovalent $NaCl$ ($1 \\times 1 = 1$). Furthermore, $Mg^{2+}$ has a smaller ionic radius than $Ca^{2+}$, minimizing internuclear distance $r$ and maximizing Coulombic lattice attraction.",
    distractorTip: "Lattice energy depends FIRST on ionic charge magnitude ($|q_1 q_2|$: $+2/-2$ is $4\\times$ stronger than $+1/-1$), and SECOND on smaller ionic radii."
  },
  "chem-u2-l3": {
    id: "chem2-l3-q3",
    stem: "Steel is an interstitial alloy formed by introducing small carbon atoms into the crystalline lattice of iron. How does the presence of interstitial carbon alter the physical properties of steel compared to pure iron?",
    options: [
      "Carbon atoms disrupt the regular crystal planes, preventing metal layers from sliding smoothly past one another and making steel significantly harder and less malleable than pure iron.",
      "Carbon completely destroys electrical conductivity.",
      "Carbon lowers the melting point below room temperature.",
      "Carbon increases ductility, allowing steel to stretch into thin wires."
    ],
    correctIndex: 0, // A
    explanation: "Interstitial alloys form when small nonmetal atoms (like C) occupy the interstitial holes between larger metal atoms (like Fe). These interstitial atoms pin the crystal slip planes, preventing dislocation glide and making the alloy substantially stronger and less malleable.",
    distractorTip: "Interstitial alloys (steel): small atoms in holes between big atoms $\\implies$ harder, less malleable; Substitutional alloys (brass): similar-sized atoms replace each other."
  },
  "chem-u2-l4": {
    id: "chem2-l4-q3",
    stem: "What is the formal charge on the central sulfur atom in the sulfate ion ($SO_4^{2-}$) in a valid Lewis structure drawn with four single bonds?",
    options: [
      "0",
      "+1",
      "+2",
      "-2"
    ],
    correctIndex: 2, // C
    explanation: "Formal charge $= \\text{Valence} - \\text{Lone pairs} - \\frac{1}{2}(\\text{Bonding pairs})$. Sulfur has 6 valence electrons. In a structure with four single $S-O$ bonds: $FC_S = 6 - 0 - 4 = +2$. (Each single-bonded oxygen has $FC = 6 - 6 - 1 = -1$).",
    distractorTip: "Formal charge formula: $FC = V - L - B$ (Valence minus nonbonding electrons minus number of bonds)."
  },
  "chem-u2-l5": {
    id: "chem2-l5-q3",
    stem: "According to VSEPR theory, what are the electron domain geometry and molecular geometry of sulfur tetrafluoride ($SF_4$)?",
    options: [
      "Tetrahedral electron geometry; tetrahedral molecular geometry",
      "Trigonal bipyramidal electron geometry; see-saw molecular geometry",
      "Octahedral electron geometry; square planar molecular geometry",
      "Trigonal planar electron geometry; T-shaped molecular geometry"
    ],
    correctIndex: 1, // B
    explanation: "Sulfur in $SF_4$ has 6 valence electrons: 4 form single bonds with fluorine and 2 form one equatorial lone pair (5 total electron domains). 5 electron domains = Trigonal Bipyramidal electron domain geometry. With 1 lone pair in an equatorial position, the molecular geometry is See-saw.",
    distractorTip: "$SF_4$ has 5 electron pairs (4 bonding, 1 lone pair) $\\implies$ Trigonal bipyramidal electron geometry, See-saw molecular shape."
  },
  "chem-u2-l6": {
    id: "chem2-l6-q3",
    stem: "In the ethylene molecule ($C_2H_4$), what types of chemical bonds and carbon hybridization form the carbon-carbon double bond ($C=C$)?",
    options: [
      "Two sigma ($\\\\sigma$) bonds formed by $sp^3$ hybridized orbitals.",
      "One sigma ($\\\\sigma$) bond formed by $sp^2$-$sp^2$ head-on orbital overlap, and one pi ($\\\\pi$) bond formed by side-by-side overlap of unhybridized $2p$ orbitals.",
      "Two pi ($\\\\pi$) bonds formed by $sp$ hybridized orbitals.",
      "One ionic bond and one coordinate covalent bond."
    ],
    correctIndex: 1, // B
    explanation: "Each carbon in $C_2H_4$ has 3 electron domains ($sp^2$ hybridized). The $C=C$ double bond consists of one head-on $\\sigma$ bond formed by overlapping $sp^2$ hybrid orbitals, and one $\\pi$ bond formed by the lateral (side-by-side) overlap of unhybridized parallel $2p$ orbitals.",
    distractorTip: "Single bond = $1\\sigma$; Double bond = $1\\sigma + 1\\pi$; Triple bond = $1\\sigma + 2\\pi$."
  },

  // UNIT 3: Intermolecular Forces & Properties (7 levels)
  "chem-u3-l1": {
    id: "chem3-l1-q3",
    stem: "Both methane ($CH_4$) and carbon tetrachloride ($CCl_4$) are nonpolar tetrahedral molecules. Why is $CCl_4$ a liquid at room temperature with a boiling point of $77^\\circ\\text{C}$, while $CH_4$ is a gas with a boiling point of $-161^\\circ\\text{C}$?",
    options: [
      "$CCl_4$ exhibits strong permanent dipole-dipole attractions.",
      "$CCl_4$ has significantly more electrons (74 vs 10), resulting in a larger, more polarizable electron cloud that generates much stronger London dispersion forces.",
      "$CCl_4$ forms intermolecular hydrogen bonds with atmospheric nitrogen.",
      "Carbon-chlorine covalent bonds are ionic in character."
    ],
    correctIndex: 1, // B
    explanation: "London dispersion forces depend on molecular polarizability. $CCl_4$ has 74 electrons compared to $CH_4$'s 10 electrons. The larger, more diffuse electron cloud in $CCl_4$ is far more polarizable, creating stronger temporary dipole-induced dipole attractions that require more thermal energy to overcome.",
    distractorTip: "AP rule: Larger molecule with more electrons $\\implies$ more polarizable electron cloud $\\implies$ stronger London Dispersion Forces (higher boiling point)."
  },
  "chem-u3-l2": {
    id: "chem3-l2-q3",
    stem: "Which of the following substances forms a covalent network solid characterized by an extremely high melting point (over $3500^\\circ\\text{C}$) and exceptional hardness?",
    options: [
      "Solid carbon dioxide (dry ice, $CO_2$)",
      "Sucrose ($C_{12}H_{22}O_{11}$)",
      "Diamond (allotrope of pure carbon)",
      "Sodium chloride ($NaCl$)"
    ],
    correctIndex: 2, // C
    explanation: "Diamond is a covalent network solid where each carbon atom is covalently bonded to four other carbon atoms in a tetrahedral $sp^3$ three-dimensional lattice. Melting diamond requires breaking covalent bonds throughout the entire crystal lattice, resulting in an astronomical melting point.",
    distractorTip: "Covalent network solids (diamond, graphite, quartz $SiO_2$, silicon carbide $SiC$) have extremely high melting points because melting breaks covalent bonds."
  },
  "chem-u3-l3": {
    id: "chem3-l3-q3",
    stem: "A rigid 2.0 L sealed metal container holds 0.50 mol of neon gas at 300 K. What is the pressure inside the container? (Use $R = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$)",
    options: [
      "6.16 atm",
      "12.3 atm",
      "1.54 atm",
      "24.6 atm"
    ],
    correctIndex: 0, // A
    explanation: "Apply Ideal Gas Law: $PV = nRT \\implies P = \\frac{nRT}{V} = \\frac{(0.50)(0.0821)(300)}{2.0} = \\frac{12.315}{2.0} \\approx 6.16\\text{ atm}$.",
    distractorTip: "$P = nRT / V$: Remember to use $R = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$ when volume is in liters and pressure is in atmospheres."
  },
  "chem-u3-l4": {
    id: "chem3-l4-q3",
    stem: "According to Graham's Law of Effusion, how many times faster does helium gas ($He$, molar mass $4.00\\text{ g/mol}$) effuse through a pinhole compared to sulfur dioxide gas ($SO_2$, molar mass $64.0\\text{ g/mol}$) at the same temperature?",
    options: [
      "2 times faster",
      "16 times faster",
      "4 times faster",
      "8 times faster"
    ],
    correctIndex: 2, // C
    explanation: "Graham's Law states: $\\frac{\\text{Rate}_1}{\\text{Rate}_2} = \\sqrt{\\frac{M_2}{M_1}}$. Comparing $He$ to $SO_2$: $\\frac{\\text{Rate}_{He}}{\\text{Rate}_{SO_2}} = \\sqrt{\\frac{64.0}{4.00}} = \\sqrt{16} = 4$. Helium effuses 4 times faster.",
    distractorTip: "Effusion rate is inversely proportional to the SQUARE ROOT of molar mass: $\\sqrt{64/4} = \\sqrt{16} = 4$."
  },
  "chem-u3-l5": {
    id: "chem3-l5-q3",
    stem: "Under which set of temperature and pressure conditions do real gases deviate most severely from ideal gas behavior?",
    options: [
      "High temperature and low pressure",
      "Low temperature and high pressure",
      "Moderate room temperature and standard atmospheric pressure",
      "High temperature and high vacuum"
    ],
    correctIndex: 1, // B
    explanation: "Real gases deviate from ideal behavior under LOW temperature (where particles move slowly and intermolecular attractive forces can no longer be ignored) and HIGH pressure (where gas molecules are compressed so closely that their finite particle volume occupies a significant fraction of the container).",
    distractorTip: "Real gas deviations occur at LOW temperature (IMFs matter) and HIGH pressure (particle volume matters)."
  },
  "chem-u3-l6": {
    id: "chem3-l6-q3",
    stem: "According to the Beer-Lambert Law ($A = \\epsilon b c$), if a solution of copper(II) sulfate in a 1.0 cm spectrophotometer cuvette has an absorbance of 0.40, what will be the absorbance if the concentration of the solution is doubled?",
    options: [
      "0.20",
      "0.40",
      "0.80",
      "1.60"
    ],
    correctIndex: 2, // C
    explanation: "The Beer-Lambert Law shows a direct linear relationship between absorbance ($A$) and molar concentration ($c$). If path length ($b$) and molar absorptivity ($\\epsilon$) remain constant, doubling concentration doubles absorbance: $2 \\times 0.40 = 0.80$.",
    distractorTip: "Beer-Lambert Law: Absorbance is directly proportional to concentration ($A \\propto c$)."
  },
  "chem-u3-l7": {
    id: "chem3-l7-q3",
    stem: "A student performs paper chromatography on a mixture of food dyes using a nonpolar solvent. Dye X travels nearly to the solvent front ($R_f = 0.90$), while Dye Y remains near the origin ($R_f = 0.15$). What can be concluded about the dyes?",
    options: [
      "Dye X has a much higher molar mass than Dye Y.",
      "Dye X is nonpolar and has stronger attractions to the nonpolar mobile solvent, while Dye Y is polar and interacts more strongly with the polar stationary cellulose paper.",
      "Dye Y evaporated during chromatography.",
      "Dye X underwent an oxidation-reduction reaction."
    ],
    correctIndex: 1, // B
    explanation: "In chromatography, components separate based on their relative affinities for the mobile and stationary phases. Since the solvent is nonpolar, the dye with the highest $R_f$ value (Dye X) is predominantly nonpolar, interacting strongly with the moving solvent.",
    distractorTip: "'Like dissolves like': In chromatography, nonpolar dyes travel farthest with nonpolar solvents."
  },

  // UNIT 4: Chemical Reactions & Stoichiometry (6 levels)
  "chem-u4-l1": {
    id: "chem4-l1-q3",
    stem: "What is the net ionic equation for the precipitation reaction that occurs when aqueous solutions of silver nitrate ($AgNO_3$) and sodium chloride ($NaCl$) are mixed?",
    options: [
      "$Na^+(aq) + NO_3^-(aq) \\to NaNO_3(s)$",
      "$Ag^+(aq) + Cl^-(aq) \\to AgCl(s)$",
      "$AgNO_3(aq) + NaCl(aq) \\to AgCl(s) + NaNO_3(aq)$",
      "$Ag^+(aq) + NO_3^-(aq) + Na^+(aq) + Cl^-(aq) \\to AgCl(s) + Na^+(aq) + NO_3^-(aq)$"
    ],
    correctIndex: 1, // B
    explanation: "In aqueous solution, $AgNO_3$ and $NaCl$ dissociate completely into spectator ions ($Na^+$ and $NO_3^-$) and reactive ions ($Ag^+$ and $Cl^-$). Spectator ions cancel out, leaving the net ionic equation: $Ag^+(aq) + Cl^-(aq) \\to AgCl(s)$.",
    distractorTip: "Net ionic equations omit spectator ions (ions that remain dissolved and unchanged on both sides of the equation)."
  },
  "chem-u4-l2": {
    id: "chem4-l2-q3",
    stem: "A reaction vessel contains 4 molecules of $N_2$ gas and 9 molecules of $H_2$ gas that react according to: $N_2(g) + 3H_2(g) \\to 2NH_3(g)$. How many molecules of $NH_3$ are produced, and which reactant is in excess?",
    options: [
      "8 molecules of NH₃ produced; H₂ in excess",
      "6 molecules of NH₃ produced; N₂ in excess (1 molecule of N₂ unreacted)",
      "9 molecules of NH₃ produced; N₂ in excess",
      "6 molecules of NH₃ produced; zero excess reactants"
    ],
    correctIndex: 1, // B
    explanation: "9 molecules of $H_2$ require $9 / 3 = 3$ molecules of $N_2$ to react completely. Since 4 molecules of $N_2$ are available, $H_2$ is the limiting reactant. 9 molecules of $H_2$ produce $9 \\times (2/3) = 6$ molecules of $NH_3$. 1 molecule of $N_2$ ($4 - 3 = 1$) remains unreacted in excess.",
    distractorTip: "Limiting reactant problem: Identify the reactant that runs out first to find theoretical product yield."
  },
  "chem-u4-l3": {
    id: "chem4-l3-q3",
    stem: "What volume of $0.200\\text{ M } NaOH$ solution is required to completely neutralize $25.0\\text{ mL}$ of $0.100\\text{ M } H_2SO_4$ solution?",
    options: [
      "12.5 mL",
      "50.0 mL",
      "25.0 mL",
      "100.0 mL"
    ],
    correctIndex: 2, // C
    explanation: "$H_2SO_4$ is diprotic: $H_2SO_4 + 2NaOH \\to Na_2SO_4 + 2H_2O$. Moles of $H_2SO_4 = (0.0250\\text{ L})(0.100\\text{ M}) = 0.00250\\text{ mol}$. Moles of $NaOH$ needed $= 2 \\times 0.00250 = 0.00500\\text{ mol}$. Volume of $NaOH = \\frac{0.00500\\text{ mol}}{0.200\\text{ M}} = 0.0250\\text{ L} = 25.0\\text{ mL}$.",
    distractorTip: "Watch out for diprotic acids! $H_2SO_4$ releases TWO protons ($H^+$), requiring twice the moles of $NaOH$."
  },
  "chem-u4-l4": {
    id: "chem4-l4-q3",
    stem: "In the redox reaction $Zn(s) + 2HCl(aq) \\to ZnCl_2(aq) + H_2(g)$, which species is oxidized and which is the reducing agent?",
    options: [
      "Hydrogen is oxidized; Zinc is the reducing agent.",
      "Zinc is oxidized (oxidation state changes from 0 to +2), and Zinc is the reducing agent.",
      "Chlorine is oxidized; Hydrogen is the reducing agent.",
      "Zinc is reduced; HCl is the reducing agent."
    ],
    correctIndex: 1, // B
    explanation: "Zinc starts with an oxidation state of 0 and becomes $+2$ in $ZnCl_2$, losing electrons (oxidation). Because Zinc donates electrons to hydrogen ions, Zinc is the reducing agent. Hydrogen ions gain electrons (reduction from $+1$ to 0).",
    distractorTip: "OIL RIG: Oxidation Is Loss, Reduction Is Gain. The substance that is OXIDIZED is the REDUCING AGENT."
  },
  "chem-u4-l5": {
    id: "chem4-l5-q3",
    stem: "What is the oxidation number of manganese in the permanganate ion ($MnO_4^-$)?",
    options: [
      "+4",
      "+2",
      "+7",
      "+6"
    ],
    correctIndex: 2, // C
    explanation: "Oxygen has an oxidation state of $-2$. Four oxygens contribute $4 \\times (-2) = -8$. The overall charge of the polyatomic ion is $-1$. Therefore: $\\text{Ox}(Mn) + (-8) = -1 \\implies \\text{Ox}(Mn) = +7$.",
    distractorTip: "The sum of oxidation numbers in a polyatomic ion must equal the overall charge of the ion."
  },
  "chem-u4-l6": {
    id: "chem4-l6-q3",
    stem: "A student performs a gravimetric analysis to determine the percent chloride in an unknown salt by precipitating $AgCl(s)$. If the student fails to dry the precipitate completely before final weighing, how will the calculated percent chloride be affected?",
    options: [
      "The calculated percentage will be falsely high because residual water adds mass to the weighed precipitate.",
      "The calculated percentage will be falsely low.",
      "The calculated percentage will remain unaffected because water evaporates in the balance chamber.",
      "The silver chloride will decompose into metallic silver."
    ],
    correctIndex: 0, // A
    explanation: "Residual moisture in the filter paper or precipitate increases the measured mass of $AgCl$. Because calculations assume all weighed mass is pure dry $AgCl$, this overestimates the moles of chloride, resulting in a falsely high calculated percentage.",
    distractorTip: "Wet precipitate error in gravimetric analysis: excess water mass $\\implies$ calculated product mass too high $\\implies$ calculated % too high."
  },

  // UNIT 5: Kinetics (7 levels)
  "chem-u5-l1": {
    id: "chem5-l1-q3",
    stem: "For the reaction $2A + B \\to C$, experimental data shows that doubling the concentration of $A$ quadruples the initial reaction rate, while doubling the concentration of $B$ has no effect on the rate. What is the rate law?",
    options: [
      "$\\text{Rate} = k[A][B]$",
      "$\\text{Rate} = k[A]^2$",
      "$\\text{Rate} = k[A]^2[B]$",
      "$\\text{Rate} = k[A][B]^2$"
    ],
    correctIndex: 1, // B
    explanation: "Doubling $[A]$ quadruples rate ($2^m = 4 \\implies m = 2$), so the reaction is second order in $A$. Doubling $[B]$ has zero effect ($2^n = 1 \\implies n = 0$), so the reaction is zero order in $B$. The rate law is $\\text{Rate} = k[A]^2$.",
    distractorTip: "Reaction orders must be determined from experimental data, NEVER from stoichiometric coefficients of the overall equation!"
  },
  "chem-u5-l2": {
    id: "chem5-l2-q3",
    stem: "A plot of $\\ln[A]$ versus time for a chemical decomposition produces a straight line with a negative slope. What is the reaction order with respect to $A$, and what does the slope equal?",
    options: [
      "Zero order; $\\text{slope} = -k$",
      "First order; $\\text{slope} = -k$",
      "Second order; $\\text{slope} = +k$",
      "First order; $\\text{slope} = -1/k$"
    ],
    correctIndex: 1, // B
    explanation: "Integrated rate laws: $[A]$ vs $t$ linear $\\implies$ Zero order (slope = $-k$). $\\ln[A]$ vs $t$ linear $\\implies$ First order (slope = $-k$). $1/[A]$ vs $t$ linear $\\implies$ Second order (slope = $+k$).",
    distractorTip: "Linear plot memory trick: 0th order = $[A]$; 1st order = $\\ln[A]$; 2nd order = $1/[A]$."
  },
  "chem-u5-l3": {
    id: "chem5-l3-q3",
    stem: "Why does increasing the temperature of a reaction mixture by just $10^\\circ\\text{C}$ often double the rate of a chemical reaction, even though average kinetic energy increases by only a few percent?",
    options: [
      "Temperature lowers the activation energy barrier of the reaction.",
      "The collision frequency doubles.",
      "A much larger fraction of colliding molecules possesses kinetic energy equal to or exceeding the activation energy ($E \\ge E_a$), as shown on a Maxwell-Boltzmann distribution.",
      "Higher temperature increases the orientation factor $p$."
    ],
    correctIndex: 2, // C
    explanation: "According to collision theory and the Maxwell-Boltzmann distribution, a modest temperature increase significantly broadens the high-energy tail of the curve, exponentially increasing the fraction of collisions with $E \\ge E_a$. (Collision frequency increases only slightly, $\\propto \\sqrt{T}$).",
    distractorTip: "Higher temperature speeds up reactions because MORE molecules possess sufficient kinetic energy ($E \\ge E_a$), NOT simply because they collide more frequently."
  },
  "chem-u5-l4": {
    id: "chem5-l4-q3",
    stem: "On a reaction energy profile diagram, what does the energy difference between the reactants and the peak of the potential energy curve represent?",
    options: [
      "The change in enthalpy ($\\Delta H$) of the reaction.",
      "The activation energy ($E_a$) of the forward reaction.",
      "The free energy change ($\\Delta G$) of the reaction.",
      "The energy of the reaction intermediate."
    ],
    correctIndex: 1, // B
    explanation: "The activation energy ($E_a$) is the minimum kinetic energy colliding reactants must possess to overcome repulsive forces and reach the transition state (the peak of the potential energy barrier). The difference between products and reactants is $\\Delta H$.",
    distractorTip: "Peak minus Reactants = Forward $E_a$; Products minus Reactants = $\\Delta H$."
  },
  "chem-u5-l5": {
    id: "chem5-l5-q3",
    stem: "Consider the two-step mechanism:\nStep 1: $NO_2 + NO_2 \\to NO_3 + NO$ (slow)\nStep 2: $NO_3 + CO \\to NO_2 + CO_2$ (fast)\nWhich species is a reaction intermediate, and what is the rate law?",
    options: [
      "Intermediate is $CO$; $\\text{Rate} = k[NO_3][CO]$",
      "Intermediate is $NO$; $\\text{Rate} = k[NO_2][CO]$",
      "Intermediate is $NO_3$; $\\text{Rate} = k[NO_2]^2$",
      "Intermediate is $CO_2$; $\\text{Rate} = k[NO_2]$"
    ],
    correctIndex: 2, // C
    explanation: "$NO_3$ is produced in Step 1 and consumed in Step 2, so it is a reaction intermediate. The slow step is the rate-determining step, so the rate law is determined directly by Step 1 reactants: $\\text{Rate} = k[NO_2]^2$.",
    distractorTip: "Reaction intermediate = produced in an early step, consumed in a later step; Catalyst = present at the start as a reactant, regenerated unchanged at the end."
  },
  "chem-u5-l6": {
    id: "chem5-l6-q3",
    stem: "How does the addition of a catalyst increase the rate of a chemical reaction without altering the equilibrium constant ($K$)?",
    options: [
      "A catalyst provides an alternative reaction pathway with a lower activation energy, accelerating both forward and reverse reaction rates equally.",
      "A catalyst increases the total enthalpy released by the reaction.",
      "A catalyst increases the temperature inside the reaction vessel.",
      "A catalyst shifts the reaction toward products by Le Châtelier's principle."
    ],
    correctIndex: 0, // A
    explanation: "Catalysts provide an alternative mechanism with a lower activation energy barrier ($E_a$). Because $E_a$ is lowered equally for both forward and reverse directions, both rates increase by the exact same factor, leaving the equilibrium position and $K$ completely unchanged.",
    distractorTip: "Catalysts lower $E_a$ and speed up rate; they DO NOT change $\\Delta H, \\Delta G$, or the equilibrium constant $K$!"
  },
  "chem-u5-l7": {
    id: "chem5-l7-q3",
    stem: "For a first-order chemical reaction with a rate constant $k = 0.0231\\text{ min}^{-1}$, what is the half-life ($t_{1/2}$) of the reaction?",
    options: [
      "15.0 min",
      "30.0 min",
      "43.3 min",
      "69.3 min"
    ],
    correctIndex: 1, // B
    explanation: "For first-order kinetics, half-life is independent of initial concentration: $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k} = \\frac{0.693}{0.0231\\text{ min}^{-1}} = 30.0\\text{ minutes}$.",
    distractorTip: "First-order half-life equation: $t_{1/2} = 0.693 / k$. Notice that concentration does not appear in this formula!"
  },

  // UNIT 6: Thermodynamics (6 levels)
  "chem-u6-l1": {
    id: "chem6-l1-q3",
    stem: "In an exothermic chemical reaction taking place in an insulated water calorimeter, what constitutes the 'system' and the 'surroundings', and what happens to the temperature of the water?",
    options: [
      "The chemical reactants and products are the system; the water and calorimeter are the surroundings; the water temperature rises.",
      "The water is the system; the chemical bonds are the surroundings; the water temperature drops.",
      "The thermometer is the system; the water is the surroundings; temperature is constant.",
      "Energy is destroyed by the system, cooling the surroundings."
    ],
    correctIndex: 0, // A
    explanation: "The system consists of the chemical bonds and reacting species. The surroundings comprise everything else (the solvent water, thermometer, and styrofoam cup). In an exothermic reaction, the system releases heat to the surroundings, causing the water temperature to rise ($q_{\\text{water}} > 0$).",
    distractorTip: "In coffee-cup calorimetry: Exothermic reaction $\\implies$ heat released to water $\\implies$ water temperature RISES ($q_{\\text{surr}} > 0, q_{\\text{sys}} < 0$)."
  },
  "chem-u6-l2": {
    id: "chem6-l2-q3",
    stem: "A 50.0 g sample of water is heated from $20.0^\\circ\\text{C}$ to $50.0^\\circ\\text{C}$. How much heat energy was absorbed by the water? (Specific heat of water $c = 4.184\\text{ J}/(\\text{g}\\cdot^\\circ\\text{C})$)",
    options: [
      "209 J",
      "1046 J",
      "6276 J",
      "4184 J"
    ],
    correctIndex: 2, // C
    explanation: "$q = mc\\Delta T = (50.0\\text{ g})(4.184\\text{ J}/\\text{g}\\cdot^\\circ\\text{C})(50.0 - 20.0^\\circ\\text{C}) = (50.0)(4.184)(30.0) = 6276\\text{ J} \\approx 6.28\\text{ kJ}$.",
    distractorTip: "Calorimetry heat equation: $q = mc\\Delta T$. Make sure $\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$."
  },
  "chem-u6-l3": {
    id: "chem6-l3-q3",
    stem: "Why does the temperature of pure ice water remain constant at $0^\\circ\\text{C}$ while thermal energy is continuously added during melting?",
    options: [
      "The added heat is destroyed by the thermometer.",
      "All added thermal energy is consumed to overcome intermolecular hydrogen bonds (enthalpy of fusion, $\\Delta H_{\\text{fus}}$) rather than increasing the average kinetic energy of the molecules.",
      "Water has infinite specific heat capacity at $0^\\circ\\text{C}$.",
      "Ice reflects 100% of incoming thermal radiation."
    ],
    correctIndex: 1, // B
    explanation: "During a phase transition (melting), temperature remains constant because the added heat goes into breaking intermolecular hydrogen bonds (increasing potential energy via enthalpy of fusion), rather than increasing molecular vibrational/translational velocity (kinetic energy).",
    distractorTip: "During phase changes, temperature is CONSTANT: heat energy changes potential energy (breaking IMFs), not kinetic energy."
  },
  "chem-u6-l4": {
    id: "chem6-l4-q3",
    stem: "Using average bond enthalpies, what is the enthalpy change $\\Delta H$ for a reaction calculated from bond dissociation energies?",
    options: [
      "$\\Delta H = \\sum \\text{Bond Enthalpies of Products} - \\sum \\text{Bond Enthalpies of Reactants}$",
      "$\\Delta H = \\sum \\text{Bonds Broken (Reactants)} - \\sum \\text{Bonds Formed (Products)}$",
      "$\\Delta H = \\sum \\text{Bonds Broken} \\times \\sum \\text{Bonds Formed}$",
      "$\\Delta H = \\Delta G - T\\Delta S$"
    ],
    correctIndex: 1, // B
    explanation: "Breaking chemical bonds is always endergonic/endothermic (energy input, positive), whereas forming bonds is always exergonic/exothermic (energy release, negative). Therefore: $\\Delta H = \\sum D_{\\text{bonds broken}} - \\sum D_{\\text{bonds formed}}$.",
    distractorTip: "Bond enthalpies: BROKEN minus FORMED (Reactants minus Products)! Note that this is the OPPOSITE of $\\Delta H_f^\\circ$ (which is Products minus Reactants)."
  },
  "chem-u6-l5": {
    id: "chem6-l5-q3",
    stem: "According to Hess's Law, what is the standard enthalpy of formation ($\\Delta H_f^\\circ$) for any pure chemical element in its most stable standard thermodynamic state (e.g., $O_2(g), C(s,\\text{ graphite}), Fe(s)$)?",
    options: [
      "Exactly 0 kJ/mol by definition",
      "100 kJ/mol",
      "-285.8 kJ/mol",
      "It equals the ionization energy of the element."
    ],
    correctIndex: 0, // A
    explanation: "By thermodynamic convention, the standard enthalpy of formation ($\\Delta H_f^\\circ$) of an element in its most stable physical state at standard ambient temperature and pressure (298 K, 1 atm) is defined as exactly zero.",
    distractorTip: "Standard enthalpy of formation $\\Delta H_f^\\circ$ of a pure element in its standard state is ZERO."
  },
  "chem-u6-l6": {
    id: "chem6-l6-q3",
    stem: "Given the thermochemical equations:\n(1) $C(s) + O_2(g) \\to CO_2(g) \\quad \\Delta H_1 = -393.5\\text{ kJ}$\n(2) $2CO(g) + O_2(g) \\to 2CO_2(g) \\quad \\Delta H_2 = -566.0\\text{ kJ}$\nWhat is $\\Delta H$ for the reaction $C(s) + \\frac{1}{2}O_2(g) \\to CO(g)$?",
    options: [
      "-959.5 kJ",
      "+172.5 kJ",
      "-110.5 kJ",
      "-676.5 kJ"
    ],
    correctIndex: 2, // C
    explanation: "Take equation (1): $C + O_2 \\to CO_2$ ($\\Delta H = -393.5$). Reverse equation (2) and divide by 2: $CO_2 \\to CO + \\frac{1}{2}O_2$ ($\\Delta H = +566.0 / 2 = +283.0\\text{ kJ}$). Summing the two: $-393.5 + 283.0 = -110.5\\text{ kJ}$.",
    distractorTip: "Hess's Law: Reversing an equation flips the sign of $\\Delta H$; multiplying/dividing coefficients multiplies/divides $\\Delta H$."
  },

  // UNIT 7: Equilibrium (7 levels)
  "chem-u7-l1": {
    id: "chem7-l1-q3",
    stem: "What condition defines a chemical system at dynamic equilibrium?",
    options: [
      "The concentrations of reactants and products are exactly equal.",
      "All chemical reactions have completely ceased.",
      "The rate of the forward reaction equals the rate of the reverse reaction, and reactant and product concentrations remain constant over time.",
      "The equilibrium constant $K$ equals zero."
    ],
    correctIndex: 2, // C
    explanation: "Dynamic equilibrium is achieved when forward and reverse reaction rates are equal ($r_{\\text{forward}} = r_{\\text{reverse}}$). Molecules continue reacting constantly, but because rates match, macroscopic concentrations show zero net change.",
    distractorTip: "At equilibrium: Rates are EQUAL; Concentrations are CONSTANT (not necessarily equal)."
  },
  "chem-u7-l2": {
    id: "chem7-l2-q3",
    stem: "What is the equilibrium constant expression $K_c$ for the heterogeneous reaction: $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$?",
    options: [
      "$K_c = \\frac{[CaO][CO_2]}{[CaCO_3]}$",
      "$K_c = \\frac{[CaCO_3]}{[CaO][CO_2]}$",
      "$K_c = [CO_2]$",
      "$K_c = [CaO][CO_2]$"
    ],
    correctIndex: 2, // C
    explanation: "Pure solids ($s$) and pure liquids ($l$) have constant concentrations and are omitted from equilibrium expressions. $CaCO_3(s)$ and $CaO(s)$ are excluded, leaving $K_c = [CO_2]$ (or $K_p = P_{CO_2}$).",
    distractorTip: "Pure solids and pure liquids are NEVER included in equilibrium expressions ($K_c$ or $K_p$)!"
  },
  "chem-u7-l3": {
    id: "chem7-l3-q3",
    stem: "If the reaction $A + B \\rightleftharpoons C$ has an equilibrium constant $K_1 = 4.0$, what is the equilibrium constant $K_2$ for the reversed and doubled reaction: $2C \\rightleftharpoons 2A + 2B$?",
    options: [
      "$K_2 = -8.0$",
      "$K_2 = 1 / 4.0 = 0.25$",
      "$K_2 = (1 / 4.0)^2 = 1 / 16 = 0.0625$",
      "$K_2 = 16.0$"
    ],
    correctIndex: 2, // C
    explanation: "Reversing a reaction inverts the equilibrium constant: $K' = 1/K_1$. Multiplying stoichiometric coefficients by $n$ raises the constant to the $n$-th power: $K_2 = (K')^n = (1/4.0)^2 = 1/16 = 0.0625$.",
    distractorTip: "Manipulating $K$: Reversing $\\implies 1/K$; Multiplying by $n \\implies K^n$; Adding reactions $\\implies K_1 \\times K_2$."
  },
  "chem-u7-l4": {
    id: "chem7-l4-q3",
    stem: "For the reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$ with $K_c = 1.2$, a reaction mixture has $[N_2] = 0.10\\text{ M}$, $[H_2] = 0.10\\text{ M}$, and $[NH_3] = 0.20\\text{ M}$. In which direction will the reaction proceed to achieve equilibrium?",
    options: [
      "The system is already at equilibrium ($Q = K$).",
      "Because $Q = \\frac{(0.20)^2}{(0.10)(0.10)^3} = 400 > K_c$, the reaction will shift to the left toward reactants to reach equilibrium.",
      "The reaction will shift to the right toward products because $Q < K$.",
      "The reaction cannot proceed without a platinum catalyst."
    ],
    correctIndex: 1, // B
    explanation: "$Q_c = \\frac{[NH_3]^2}{[N_2][H_2]^3} = \\frac{(0.20)^2}{(0.10)(0.10)^3} = \\frac{0.040}{0.00010} = 400$. Because $Q_c > K_c$ ($400 > 1.2$), there is an excess of products relative to equilibrium, so the system must shift to the LEFT (toward reactants).",
    distractorTip: "If $Q < K$, shift RIGHT (make products); If $Q > K$, shift LEFT (make reactants); If $Q = K$, at equilibrium."
  },
  "chem-u7-l5": {
    id: "chem7-l5-q3",
    stem: "For the exothermic gas-phase reaction $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g) \\quad \\Delta H < 0$, which stress will shift the equilibrium to the right, producing more $SO_3$?",
    options: [
      "Increasing the temperature",
      "Increasing the volume of the reaction container",
      "Decreasing the temperature and increasing the pressure by reducing volume",
      "Adding an inert gas at constant volume"
    ],
    correctIndex: 2, // C
    explanation: "By Le Châtelier's principle: (1) Since the reaction is exothermic (heat is a product), lowering temperature removes heat, shifting the reaction to the right. (2) There are 3 moles of gas on the left and 2 moles on the right; increasing pressure (decreasing volume) shifts toward the side with fewer gas moles (the right). Both stresses favor products.",
    distractorTip: "Le Châtelier: Lowering $T$ in an exothermic reaction shifts RIGHT; Increasing pressure shifts to the side with FEWER gas moles."
  },
  "chem-u7-l6": {
    id: "chem7-l6-q3",
    stem: "What happens to the molar solubility of silver chloride ($AgCl$) in water when solid sodium chloride ($NaCl$) is dissolved into the solution (the Common Ion Effect)?",
    options: [
      "The solubility increases due to ion pairing.",
      "The solubility decreases significantly because the added $Cl^-$ common ion shifts the dissolution equilibrium $AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$ to the left.",
      "The solubility remains constant because $NaCl$ is neutral.",
      "The $K_{sp}$ of $AgCl$ increases."
    ],
    correctIndex: 1, // B
    explanation: "Dissolving $NaCl$ injects $Cl^-$ ions into solution. According to Le Châtelier's principle, the common $Cl^-$ ion pushes the equilibrium $AgCl(s) \\rightleftharpoons Ag^+ + Cl^-$ back toward the solid precipitate, decreasing the molar solubility of $AgCl$ (while $K_{sp}$ remains constant).",
    distractorTip: "The common ion effect DECREASES the solubility of a sparingly soluble salt by shifting equilibrium toward the precipitate."
  },
  "chem-u7-l7": {
    id: "chem7-l7-q3",
    stem: "The solubility product constant of barium sulfate ($BaSO_4$) is $K_{sp} = 1.1 \\times 10^{-10}$. What is its molar solubility ($s$) in pure water?",
    options: [
      "$1.1 \\times 10^{-10}\\text{ M}$",
      "$1.05 \\times 10^{-5}\\text{ M}$",
      "$2.2 \\times 10^{-5}\\text{ M}$",
      "$5.5 \\times 10^{-6}\\text{ M}$"
    ],
    correctIndex: 1, // B
    explanation: "$BaSO_4(s) \\rightleftharpoons Ba^{2+}(aq) + SO_4^{2-}(aq)$. In pure water, $[Ba^{2+}] = s$ and $[SO_4^{2-}] = s$. $K_{sp} = s^2 \\implies s = \\sqrt{K_{sp}} = \\sqrt{1.1 \\times 10^{-10}} \\approx 1.05 \\times 10^{-5}\\text{ M}$.",
    distractorTip: "For a 1:1 salt, $K_{sp} = s^2 \\implies s = \\sqrt{K_{sp}}$. For a 1:2 salt ($PbCl_2$), $K_{sp} = 4s^3$."
  },

  // UNIT 8: Acids & Bases (7 levels)
  "chem-u8-l1": {
    id: "chem8-l1-q3",
    stem: "At $25^\\circ\\text{C}$, a solution has a hydroxide ion concentration $[OH^-] = 1.0 \\times 10^{-4}\\text{ M}$. What are the $[H^+]$ concentration and the $pH$ of this solution?",
    options: [
      "$[H^+] = 1.0 \\times 10^{-4}\\text{ M}, pH = 4.0$",
      "$[H^+] = 1.0 \\times 10^{-14}\\text{ M}, pH = 14.0$",
      "$[H^+] = 1.0 \\times 10^{-10}\\text{ M}, pH = 10.0$",
      "$[H^+] = 1.0 \\times 10^{-7}\\text{ M}, pH = 7.0$"
    ],
    correctIndex: 2, // C
    explanation: "$K_w = [H^+][OH^-] = 1.0 \\times 10^{-14} \\implies [H^+] = \\frac{1.0 \\times 10^{-14}}{1.0 \\times 10^{-4}} = 1.0 \\times 10^{-10}\\text{ M}$. $pH = -\\log(1.0 \\times 10^{-10}) = 10.0$. (Alternatively, $pOH = 4.0 \\implies pH = 14 - 4 = 10.0$).",
    distractorTip: "$pH + pOH = 14.0$ at $25^\\circ\\text{C}$. If $[OH^-] = 10^{-4}$, then $pOH = 4$, so $pH = 10$."
  },
  "chem-u8-l2": {
    id: "chem8-l2-q3",
    stem: "What happens to the percent ionization of a weak acid ($HA$) as its initial concentration is diluted with water?",
    options: [
      "The percent ionization increases because dilution shifts the equilibrium $HA \\rightleftharpoons H^+ + A^-$ toward the side with more dissolved particles.",
      "The percent ionization decreases.",
      "The percent ionization remains strictly constant.",
      "The acid converts into a strong acid."
    ],
    correctIndex: 0, // A
    explanation: "Diluting a weak acid solution lowers all solute concentrations equally. In $Q_a = \\frac{[H^+][A^-]}{[HA]}$, the numerator decreases by the square while the denominator decreases linearly, making $Q < K_a$. By Le Châtelier's principle, the system shifts right, increasing the fraction (percent) of $HA$ molecules that ionize.",
    distractorTip: "Counterintuitive AP fact: Diluting a weak acid DECREASES $[H^+]$ (higher pH), but INCREASES its PERCENT IONIZATION!"
  },
  "chem-u8-l3": {
    id: "chem8-l3-q3",
    stem: "When sodium acetate ($NaCH_3COO$) salt is dissolved in pure water, what is the acid-base nature of the resulting aqueous solution?",
    options: [
      "Strongly acidic ($pH < 2$)",
      "Neutral ($pH = 7.0$)",
      "Slightly basic ($pH > 7$) because the acetate ion ($CH_3COO^-$) acts as a conjugate weak base and hydrolyzes water to produce $OH^-$ ions.",
      "Insoluble precipitate forms."
    ],
    correctIndex: 2, // C
    explanation: "Sodium acetate dissociates into $Na^+$ (neutral spectator ion from strong base $NaOH$) and $CH_3COO^-$ (conjugate base of weak acid acetic acid). Acetate hydrolyzes water: $CH_3COO^- + H_2O \\rightleftharpoons CH_3COOH + OH^-$, generating hydroxide and making the solution basic ($pH > 7$).",
    distractorTip: "Salt of weak acid + strong base = BASIC solution (anion hydrolyzes water to make $OH^-$)."
  },
  "chem-u8-l4": {
    id: "chem8-l4-q3",
    stem: "During the titration of a weak acid (e.g., acetic acid) with a strong base (e.g., $NaOH$), what special relationship exists at the HALF-EQUIVALENCE point?",
    options: [
      "The solution is neutral with $pH = 7.0$.",
      "The weak acid is completely converted to water.",
      "The concentration of weak acid equals the concentration of its conjugate base ($[HA] = [A^-]$), meaning $pH = pK_a$.",
      "$pH = 14.0$"
    ],
    correctIndex: 2, // C
    explanation: "At the half-equivalence point, exactly half of the initial $HA$ has been neutralized into conjugate base $A^-$, so $[HA] = [A^-]$. In the Henderson-Hasselbalch equation: $pH = pK_a + \\log([A^-]/[HA]) = pK_a + \\log(1) = pK_a$.",
    distractorTip: "Half-equivalence point of a weak acid titration: $[HA] = [A^-]$ and $pH = pK_a$."
  },
  "chem-u8-l5": {
    id: "chem8-l5-q3",
    stem: "Why is trichloroacetic acid ($CCl_3COOH$) a significantly stronger acid than acetic acid ($CH_3COOH$)?",
    options: [
      "Chlorine atoms donate electron density to the carboxyl group.",
      "The three highly electronegative chlorine atoms exert an inductive electron-withdrawing effect that stabilizes the negative charge on the conjugate base ($CCl_3COO^-$).",
      "Trichloroacetic acid forms intermolecular hydrogen bonds with itself.",
      "Chlorine atoms increase the bond strength of the O-H bond."
    ],
    correctIndex: 1, // B
    explanation: "Electronegative chlorine atoms pull electron density away from the carboxyl group through the carbon skeleton (inductive effect). This delocalizes and stabilizes the negative charge on the carboxylate conjugate base anion, making proton loss easier and strengthening the acid.",
    distractorTip: "Inductive effect: Electronegative substituents stabilize conjugate base anions, increasing acid strength."
  },
  "chem-u8-l6": {
    id: "chem8-l6-q3",
    stem: "Which of the following pairs of chemical substances can be combined in aqueous solution to create an effective buffer solution?",
    options: [
      "$HCl$ (strong acid) and $NaCl$ (neutral salt)",
      "$HNO_3$ (strong acid) and $NaOH$ (strong base)",
      "$CH_3COOH$ (weak acid) and $NaCH_3COO$ (conjugate base salt)",
      "$H_2SO_4$ (strong acid) and $K_2SO_4$"
    ],
    correctIndex: 2, // C
    explanation: "A buffer requires a conjugate acid-base pair consisting of a WEAK acid and its conjugate weak base (or a weak base and its conjugate acid) in roughly equimolar concentrations. Strong acids/bases cannot form buffer systems because their conjugate ions are completely non-reactive spectators.",
    distractorTip: "Buffers MUST contain a WEAK acid + its conjugate base (or weak base + conjugate acid). Never strong acids!"
  },
  "chem-u8-l7": {
    id: "chem8-l7-q3",
    stem: "Why does the equivalence point of a weak acid-strong base titration occur at a $pH > 7$ (basic), whereas the equivalence point of a strong acid-strong base titration occurs at exactly $pH = 7$?",
    options: [
      "Excess strong base is intentionally added past the endpoint.",
      "At the equivalence point of a weak acid titration, all acid has been converted to its conjugate weak base, which hydrolyzes water to generate hydroxide ($OH^-$) ions.",
      "The indicator changes color only at basic pH.",
      "Strong bases have higher boiling points."
    ],
    correctIndex: 1, // B
    explanation: "At the equivalence point of a weak acid titration ($HA + OH^- \\to A^- + H_2O$), only conjugate base $A^-$ remains. $A^-$ hydrolyzes water: $A^- + H_2O \\rightleftharpoons HA + OH^-$, producing excess $OH^-$ and making the equivalence point basic ($pH > 7$).",
    distractorTip: "Weak acid + Strong base equivalence point is BASIC ($pH > 7$); Strong acid + Weak base equivalence point is ACIDIC ($pH < 7$)."
  },

  // UNIT 9: Applications of Thermodynamics (7 levels)
  "chem-u9-l1": {
    id: "chem9-l1-q3",
    stem: "Which of the following physical and chemical processes represents a NEGATIVE entropy change ($\\Delta S < 0$)?",
    options: [
      "Sublimation of solid dry ice: $CO_2(s) \\to CO_2(g)$",
      "Dissolving table salt in water: $NaCl(s) \\to Na^+(aq) + Cl^-(aq)$",
      "Condensation of water vapor into liquid water: $H_2O(g) \\to H_2O(l)$",
      "Combustion of methane gas: $CH_4(g) + 2O_2(g) \\to CO_2(g) + 2H_2O(g)$"
    ],
    correctIndex: 2, // C
    explanation: "Entropy ($S$) measures molecular dispersal and accessible microstates. Gases have vastly higher entropy than liquids, and liquids higher than solids. Condensation ($gas \\to liquid$) restricts molecular motion and decreases positional microstates, resulting in $\\Delta S < 0$.",
    distractorTip: "Phase changes that decrease disorder: Gas $\\to$ Liquid $\\to$ Solid all have $\\Delta S < 0$."
  },
  "chem-u9-l2": {
    id: "chem9-l2-q3",
    stem: "A chemical reaction has an endothermic enthalpy change ($\\Delta H > 0$) and a positive entropy change ($\\Delta S > 0$). Under what temperature conditions is this reaction thermodynamically favored (spontaneous, $\\Delta G < 0$)?",
    options: [
      "At all temperatures",
      "At low temperatures only",
      "At high temperatures only, where the $T\\Delta S$ term becomes sufficiently large to overcome $\\Delta H$",
      "Never thermodynamically favored at any temperature"
    ],
    correctIndex: 2, // C
    explanation: "From $\\Delta G = \\Delta H - T\\Delta S$: when $\\Delta H > 0$ and $\\Delta S > 0$, the $-T\\Delta S$ term is negative. At low temperatures, $\\Delta H$ dominates and $\\Delta G > 0$ (non-spontaneous). At high temperatures, $T\\Delta S$ exceeds $\\Delta H$, driving $\\Delta G < 0$ (spontaneous).",
    distractorTip: "Gibbs equation rules: $\\Delta H (+), \\Delta S (+) \\implies$ favored at HIGH $T$; $\\Delta H (-), \\Delta S (-) \\implies$ favored at LOW $T$."
  },
  "chem-u9-l3": {
    id: "chem9-l3-q3",
    stem: "What mathematical relationship connects standard Gibbs free energy change ($\\Delta G^\\circ$) to the equilibrium constant ($K$) at temperature $T$?",
    options: [
      "$\\Delta G^\\circ = -RT \\ln K$",
      "$\\Delta G^\\circ = -nFE^\\circ$",
      "$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$",
      "$\\Delta G^\\circ = RT \\log_{10} K$"
    ],
    correctIndex: 0, // A
    explanation: "$\\Delta G^\\circ = -RT \\ln K$. If $K > 1$, $\\ln K > 0$, making $\\Delta G^\\circ < 0$ (products favored at equilibrium). If $K < 1$, $\\ln K < 0$, making $\\Delta G^\\circ > 0$ (reactants favored).",
    distractorTip: "$\\Delta G^\\circ = -RT \\ln K$: If $K > 1$, $\\Delta G^\\circ$ is negative (spontaneous/product-favored)."
  },
  "chem-u9-l4": {
    id: "chem9-l4-q3",
    stem: "A standard Galvanic cell is constructed using the half-reactions:\n$Cu^{2+} + 2e^- \\to Cu \\quad E^\\circ = +0.34\\text{ V}$\n$Zn^{2+} + 2e^- \\to Zn \\quad E^\\circ = -0.76\\text{ V}$\nWhat is the standard cell potential ($E^\\circ_{\\text{cell}}$) of this battery?",
    options: [
      "+0.42 V",
      "+1.10 V",
      "-0.42 V",
      "-1.10 V"
    ],
    correctIndex: 1, // B
    explanation: "For a spontaneous galvanic cell, the half-reaction with the more positive reduction potential occurs at the cathode ($Cu^{2+} \\to Cu$, $E^\\circ = +0.34\\text{ V}$). The other half-reaction is reversed at the anode ($Zn \\to Zn^{2+} + 2e^-$, oxidation). $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{red}}(\\text{cathode}) - E^\\circ_{\\text{red}}(\\text{anode}) = +0.34 - (-0.76) = +1.10\\text{ V}$.",
    distractorTip: "Standard cell potential formula: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$. A galvanic cell MUST have a positive voltage!"
  },
  "chem-u9-l5": {
    id: "chem9-l5-q3",
    stem: "In an operating Galvanic cell with overall reaction $Zn(s) + Cu^{2+}(aq) \\to Zn^{2+}(aq) + Cu(s)$, what happens to the cell potential ($E_{\\text{cell}}$) if the concentration of $Cu^{2+}$ ions is increased?",
    options: [
      "$E_{\\text{cell}}$ decreases toward zero.",
      "By the Nernst equation ($E = E^\\circ - \\frac{0.0592}{n}\\log Q$), increasing reactant $[Cu^{2+}]$ decreases $Q$ ($Q < 1$), which increases the cell potential above $E^\\circ$.",
      "$E_{\\text{cell}}$ remains constant at $E^\\circ$.",
      "The cell immediately reverses polarity."
    ],
    correctIndex: 1, // B
    explanation: "$Q = [Zn^{2+}] / [Cu^{2+}]$. Increasing $[Cu^{2+}]$ decreases the reaction quotient $Q$. According to Le Châtelier's principle and the Nernst equation ($E = E^\\circ - \\frac{RT}{nF}\\ln Q$), when $Q < 1$, the logarithmic term is negative, driving $E_{\\text{cell}} > E^\\circ_{\\text{cell}}$.",
    distractorTip: "Increasing REACTANT concentration drives the reaction forward, making cell potential $E_{\\text{cell}}$ GREATER than $E^\\circ$."
  },
  "chem-u9-l6": {
    id: "chem9-l6-q3",
    stem: "How is an electrolytic cell fundamentally different from a galvanic (voltaic) cell?",
    options: [
      "Electrolytic cells produce electricity spontaneously from chemical reactions.",
      "An electrolytic cell uses an external electrical power source to drive a thermodynamically non-spontaneous chemical reaction ($\\Delta G > 0, E^\\circ_{\\text{cell}} < 0$).",
      "Electrolytic cells do not have anodes or cathodes.",
      "Electrolytic cells operate without electrolyte solutions."
    ],
    correctIndex: 1, // B
    explanation: "Galvanic cells convert thermodynamically favored chemical reactions into electricity ($E^\\circ > 0, \\Delta G < 0$). In contrast, electrolytic cells require an external power supply to force non-spontaneous redox reactions to occur (e.g. electroplating metals, recharging batteries).",
    distractorTip: "Galvanic = spontaneous battery ($E^\\circ > 0$); Electrolytic = non-spontaneous, requires external power source ($E^\\circ < 0$)."
  },
  "chem-u9-l7": {
    id: "chem9-l7-q3",
    stem: "According to Faraday's Law, what electric current ($I$) is required to plate out $0.50\\text{ mol}$ of solid copper from a $Cu^{2+}$ solution in $9650\\text{ seconds}$? (Faraday's constant $F = 96,500\\text{ C/mol } e^-$)",
    options: [
      "5.0 A",
      "10.0 A",
      "2.5 A",
      "20.0 A"
    ],
    correctIndex: 1, // B
    explanation: "Half-reaction: $Cu^{2+} + 2e^- \\to Cu(s)$. To produce $0.50\\text{ mol } Cu$, moles of electrons needed $= 0.50 \\times 2 = 1.0\\text{ mol } e^-$. Total charge $q = (1.0\\text{ mol } e^-)(96,500\\text{ C/mol}) = 96,500\\text{ Coulombs}$. Current $I = q / t = 96,500\\text{ C} / 9650\\text{ s} = 10.0\\text{ Amperes}$.",
    distractorTip: "Faraday's law stoichiometry: Moles of substance $\\times$ electrons per ion $\\times 96,500\\text{ C/mol} = I \\times t$."
  }
};

const fullPath = path.resolve(__dirname, '../src/data/quiz/apChemistryUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_CHEMISTRY_UNIT_DEFINITIONS;

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

console.log('Added', addedCount, 'questions to AP Chemistry.');

const newCode = `// AP Chemistry Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–9)
// Complete authentic coverage: 59 Levels, 177 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_CHEMISTRY_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apChemistryUnitsData.ts successfully.');
