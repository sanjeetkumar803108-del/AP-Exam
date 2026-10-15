// AP Chemistry Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–9)
// Complete authentic coverage: 59 Levels, 177 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_CHEMISTRY_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Unit 1: Atomic Structure & Properties",
    "shortTitle": "Unit 1: Atomic Structure",
    "description": "Moles, mass spectrometry, photoelectron spectroscopy (PES), electron configurations, Coulomb's law, and periodic trends",
    "examWeight": "7–9% of AP Exam",
    "biome": {
      "name": "Orbital Core & Quantum Forge",
      "icon": "⚛️",
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
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "chem-u1-l1",
        "topicNumber": "Topic 1.1 & 1.2",
        "name": "Moles & Mass Spectrometry",
        "subtitle": "Isotopic abundance, average atomic mass, and mass spectrometry peaks",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch1-l1-q1",
            "stem": "A mass spectrum of naturally occurring boron shows two distinct isotopic peaks: one at $m/z = 10.01\\,\\text{amu}$ with relative intensity of $19.9\\%$ and one at $m/z = 11.01\\,\\text{amu}$ with relative intensity of $80.1\\%$. What is the average atomic mass of boron?",
            "options": [
              "$10.81\\,\\text{amu}$",
              "$10.51\\,\\text{amu}$",
              "$11.01\\,\\text{amu}$",
              "$10.20\\,\\text{amu}$"
            ],
            "correctIndex": 0,
            "explanation": "Average atomic mass $= (0.199 \\times 10.01) + (0.801 \\times 11.01) = 1.992 + 8.819 = 10.811 \\approx 10.81\\,\\text{amu}$.",
            "distractorTip": "Do not simply take the unweighted arithmetic average of 10 and 11 ($10.5\\,\\text{amu}$); each isotopic mass must be weighted by its fractional abundance."
          },
          {
            "id": "ch1-l1-q2",
            "stem": "A pure sample of copper metal contains $3.01 \\times 10^{23}$ copper atoms. Given that the molar mass of copper is $63.55\\,\\text{g/mol}$, what is the mass of this sample?",
            "options": [
              "$63.55\\,\\text{g}$",
              "$31.78\\,\\text{g}$",
              "$127.1\\,\\text{g}$",
              "$15.89\\,\\text{g}$"
            ],
            "correctIndex": 1,
            "explanation": "Moles of Cu $= \\frac{3.01 \\times 10^{23}\\text{ atoms}}{6.022 \\times 10^{23}\\text{ atoms/mol}} = 0.500\\,\\text{mol}$. Mass $= 0.500\\,\\text{mol} \\times 63.55\\,\\text{g/mol} = 31.78\\,\\text{g}$.",
            "distractorTip": "Remember Avogadro's number: $6.022 \\times 10^{23}$ particles per mole."
          },
          {
            "id": "chem1-l1-q3",
            "stem": "A mass spectrum of naturally occurring chlorine gas shows two distinct peaks: one at $m/z = 35$ with an abundance of approximately 75.8%, and one at $m/z = 37$ with an abundance of approximately 24.2%. What is the average atomic mass of chlorine?",
            "options": [
              "36.00 amu",
              "35.48 amu",
              "37.00 amu",
              "35.00 amu"
            ],
            "correctIndex": 1,
            "explanation": "Average atomic mass is the weighted average of isotopic masses: $(0.7577 \\times 35) + (0.2423 \\times 37) = 26.52 + 8.965 = 35.485\\text{ amu}$, matching the periodic table value.",
            "distractorTip": "Calculate average atomic mass using weighted proportions: $\\sum (\\text{fractional abundance} \\times \\text{isotopic mass})$."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "chem-u1-l2",
        "topicNumber": "Topic 1.3 & 1.4",
        "name": "Elemental Composition & Empirical Formulas",
        "subtitle": "Percent mass composition, empirical vs molecular formulas, and hydrate analysis",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch1-l2-q1",
            "stem": "A compound is found to contain $40.0\\%$ carbon, $6.7\\%$ hydrogen, and $53.3\\%$ oxygen by mass. If its molar mass is determined to be $180.16\\,\\text{g/mol}$, what are its empirical and molecular formulas, respectively?",
            "options": [
              "Empirical formula: $CHO$; Molecular formula: $C_6H_6O_6$",
              "Empirical formula: $C_2H_4O_2$; Molecular formula: $C_4H_8O_4$",
              "Empirical formula: $CH_2O$; Molecular formula: $C_6H_{12}O_6$",
              "Empirical formula: $CH_2O$; Molecular formula: $CH_2O$"
            ],
            "correctIndex": 2,
            "explanation": "In 100 g: C: $40.0/12.01 = 3.33\\,\\text{mol}$; H: $6.7/1.008 = 6.65\\,\\text{mol}$; O: $53.3/16.00 = 3.33\\,\\text{mol}$. Mole ratio C:H:O = 1:2:1 $\\to$ empirical formula $CH_2O$ (empirical mass $= 30.03\\,\\text{g/mol}$). Molecular multiplier $= 180.16 / 30.03 = 6 \\to C_6H_{12}O_6$.",
            "distractorTip": "Always convert percent mass to moles first, divide by the smallest mole value to find the empirical ratio, then divide molar mass by empirical formula mass."
          },
          {
            "id": "ch1-l2-q2",
            "stem": "A student heats a $5.00\\,\\text{g}$ sample of hydrated copper(II) sulfate ($CuSO_4 \\cdot xH_2O$) in a crucible until all water is driven off. The remaining anhydrous $CuSO_4$ residue weighs $3.20\\,\\text{g}$. Given molar masses ($CuSO_4 = 159.6\\,\\text{g/mol}$, $H_2O = 18.02\\,\\text{g/mol}$), what is the value of $x$ in the hydrate formula?",
            "options": [
              "$x = 10$",
              "$x = 2$",
              "$x = 7$",
              "$x = 5$"
            ],
            "correctIndex": 3,
            "explanation": "Mass of water lost $= 5.00\\,\\text{g} - 3.20\\,\\text{g} = 1.80\\,\\text{g } H_2O$. Moles of $H_2O = 1.80 / 18.02 = 0.100\\,\\text{mol}$. Moles of anhydrous $CuSO_4 = 3.20 / 159.6 = 0.0200\\,\\text{mol}$. Ratio $x = 0.100 / 0.0200 = 5.00$. Thus, the hydrate is $CuSO_4 \\cdot 5H_2O$.",
            "distractorTip": "Water lost is found by subtracting final anhydrous mass from initial hydrated mass."
          },
          {
            "id": "chem1-l2-q3",
            "stem": "A hydrocarbon compound is analyzed and found to contain 85.7% carbon and 14.3% hydrogen by mass. What is its empirical formula?",
            "options": [
              "$CH$",
              "$CH_2$",
              "$C_2H_5$",
              "$CH_4$"
            ],
            "correctIndex": 1,
            "explanation": "Assume 100 g: Moles of C = $85.7\\text{ g} / 12.01\\text{ g/mol} = 7.14\\text{ mol}$. Moles of H = $14.3\\text{ g} / 1.008\\text{ g/mol} = 14.19\\text{ mol}$. Divide by smallest: $14.19 / 7.14 \\approx 2.00$. The empirical formula is $CH_2$.",
            "distractorTip": "Empirical formula steps: % to mass, mass to mole, divide by small, multiply till whole."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "chem-u1-l3",
        "topicNumber": "Topic 1.5",
        "name": "Atomic Structure & Electron Configurations",
        "subtitle": "Aufbau principle, Hund's rule, Pauli exclusion, and transition metal exceptions",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch1-l3-q1",
            "stem": "What is the ground-state electron configuration of a neutral Chromium atom ($Z = 24$), and why does it represent an exception to the standard Aufbau filling sequence?",
            "options": [
              "$[Ar] 4s^1 3d^5$; promoting an electron from $4s$ to $3d$ generates a half-filled $d$-subshell, which minimizes electron-electron repulsion and confers exchange-energy stability.",
              "$[Ar] 4s^2 3d^4$; it follows the standard Aufbau sequence without exception.",
              "$[Ar] 3d^6$; the $4s$ subshell is completely vacant in all transition elements.",
              "$[Ar] 4s^2 4p^4$; transition metals fill $p$ orbitals before $d$ orbitals."
            ],
            "correctIndex": 0,
            "explanation": "Chromium has ground-state configuration $[Ar] 4s^1 3d^5$ instead of $[Ar] 4s^2 3d^4$. The half-filled $3d^5$ subshell features five parallel electron spins in five separate orbitals, which maximizes exchange energy and minimizes Coulombic repulsion between paired electrons in the $4s$ orbital.",
            "distractorTip": "Remember the two classic transition metal Aufbau exceptions: Chromium ($[Ar] 4s^1 3d^5$) and Copper ($[Ar] 4s^1 3d^{10}$)."
          },
          {
            "id": "ch1-l3-q2",
            "stem": "When a neutral iron atom ($Fe: [Ar] 4s^2 3d^6$) is ionized to form the iron(III) cation ($Fe^{3+}$), which electrons are removed first?",
            "options": [
              "Three electrons are removed from the $3d$ subshell, giving $[Ar] 4s^2 3d^3$.",
              "The two $4s$ electrons are removed first, followed by one $3d$ electron, giving $[Ar] 3d^5$.",
              "One electron is removed from each of the $4s, 3d,$ and $3p$ subshells.",
              "Two electrons are removed from $3d$ and one from $4s$."
            ],
            "correctIndex": 1,
            "explanation": "When transition metal atoms ionize, the valence electrons in the outermost principal energy level ($n = 4$) are removed before core electrons in the lower level ($n = 3$). Thus, the two $4s$ electrons are lost first, then one $3d$ electron, leaving $[Ar] 3d^5$ (a stable half-filled $d$-subshell).",
            "distractorTip": "AP Chem Trap: Transition metals ALWAYS lose their outer $s$ electrons before losing $d$ electrons during cation formation!"
          },
          {
            "id": "chem1-l3-q3",
            "stem": "Which of the following ground-state electron configurations represents an anomalous transition metal with a half-filled or completely filled $d$-subshell?",
            "options": [
              "$[Ar] 4s^2 3d^4$",
              "$[Ar] 4s^1 3d^5$ (Chromium, Cr)",
              "$[Ar] 4s^2 3d^9$",
              "$[Ar] 4s^2 3d^1$"
            ],
            "correctIndex": 1,
            "explanation": "Chromium ($Z = 24$) and Copper ($Z = 29$) are classic AP exceptions to the Aufbau principle. Cr promotes one $4s$ electron into the $3d$ subshell to achieve two half-filled subshells ($[Ar] 4s^1 3d^5$), which provides enhanced quantum mechanical exchange stabilization energy.",
            "distractorTip": "Classic Aufbau exceptions on the AP Exam: Chromium is $[Ar] 4s^1 3d^5$; Copper is $[Ar] 4s^1 3d^{10}$."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "chem-u1-l4",
        "topicNumber": "Topic 1.6",
        "name": "Photoelectron Spectroscopy (PES)",
        "subtitle": "Binding energy, subshell identification, relative peak heights, and Coulombic attraction",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch1-l4-q1",
            "stem": "In the Photoelectron Spectroscopy (PES) spectrum of neutral phosphorus ($P$, $Z = 15$), how many distinct peaks are observed, and which peak has the greatest binding energy?",
            "options": [
              "15 peaks; each electron produces an individual unique peak on the detector.",
              "3 peaks ($n=1, n=2, n=3$); the $3p$ peak has the highest binding energy.",
              "5 peaks ($1s, 2s, 2p, 3s, 3p$); the $1s$ peak has the highest binding energy because core electrons are closest to the nucleus and experience the strongest Coulombic attraction.",
              "5 peaks; the $3p$ peak has the highest binding energy because it has the most electrons."
            ],
            "correctIndex": 2,
            "explanation": "Phosphorus has configuration $1s^2 2s^2 2p^6 3s^2 3p^3$, filling 5 distinct subshells, so 5 peaks appear on the PES spectrum. Core $1s$ electrons are closest to the 15 protons ($r$ is smallest), so by Coulomb's Law ($F \\propto \\frac{q_1 q_2}{r^2}$), they require the greatest energy (highest binding energy) to eject.",
            "distractorTip": "PES binding energy decreases from left to right as you move from core subshells ($1s$) to outermost valence subshells ($3p$)."
          },
          {
            "id": "ch1-l4-q2",
            "stem": "Comparing the PES spectra of nitrogen ($1s^2 2s^2 2p^3$) and oxygen ($1s^2 2s^2 2p^4$), why is the $1s$ peak of oxygen located at a higher binding energy than the $1s$ peak of nitrogen?",
            "options": [
              "Nitrogen has an empty $d$-subshell that shields its $1s$ electrons.",
              "Oxygen has paired electrons in its $2p$ subshell which push core electrons closer to the nucleus.",
              "Oxygen has a smaller mass number than nitrogen.",
              "Oxygen has 8 protons in its nucleus compared to 7 protons in nitrogen; the greater nuclear charge exerts a stronger Coulombic pull on core $1s$ electrons."
            ],
            "correctIndex": 3,
            "explanation": "Core $1s$ electrons in both elements experience minimal shielding ($S \\approx 0$). Oxygen has $Z = 8$ protons while nitrogen has $Z = 7$. Because $Z_{\\text{eff}}$ for core electrons is greater in oxygen, the Coulombic attraction holding $1s$ electrons is stronger, requiring more energy to eject.",
            "distractorTip": "Across a period, core subshell binding energies SHIFT TO HIGHER VALUES because nuclear charge ($Z$) increases while core shielding remains constant."
          },
          {
            "id": "chem1-l4-q3",
            "stem": "In a Photoelectron Spectroscopy (PES) spectrum of neon ($Z = 10$), how many discrete peaks are observed, and which peak has the highest binding energy?",
            "options": [
              "1 peak; 2p subshell",
              "2 peaks; 2s subshell",
              "3 peaks; the 1s peak has the highest binding energy because core electrons are closest to the nucleus and experience the strongest Coulombic attraction.",
              "5 peaks; the valence electrons"
            ],
            "correctIndex": 2,
            "explanation": "Neon ($1s^2 2s^2 2p^6$) has three distinct occupied subshells, producing 3 PES peaks ($1s, 2s, 2p$). The $1s$ core electrons are closest to the 10 protons in the nucleus, experiencing minimal shielding, which requires the greatest photon energy to eject (highest binding energy).",
            "distractorTip": "In PES spectra, the peak furthest to the left (highest binding energy) corresponds to the $1s$ subshell closest to the nucleus."
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "chem-u1-l5",
        "topicNumber": "Topic 1.7 & 1.8",
        "name": "Periodic Trends & Effective Nuclear Charge",
        "subtitle": "Atomic/ionic radius, ionization energy, electron affinity, and Group 2/13 & 15/16 anomalies",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch1-l5-q1",
            "stem": "Why is the first ionization energy of boron ($801\\,\\text{kJ/mol}$) slightly lower than that of beryllium ($899\\,\\text{kJ/mol}$), despite boron having a greater nuclear charge ($Z = 5$ vs $Z = 4$)?",
            "options": [
              "Boron's valence electron is in a $2p$ orbital, which is higher in energy and partially shielded by the filled $2s$ subshell, making it easier to remove than beryllium's $2s$ electron.",
              "Beryllium has a larger atomic radius than boron.",
              "Boron experiences electron pairing repulsion in its $2p$ orbital.",
              "Beryllium has core $d$-electrons that stabilize its valence shell."
            ],
            "correctIndex": 0,
            "explanation": "Beryllium has configuration $[He] 2s^2$ (a full, stable subshell). Boron is $[He] 2s^2 2p^1$. The single $2p$ electron in boron is higher in energy, has lower penetration to the nucleus, and is partially shielded by the inner $2s^2$ pair, requiring less energy to ionize.",
            "distractorTip": "Classic AP Periodic Trend Anomaly: Group 13 ($s^2 p^1$) has a slightly lower IE than Group 2 ($s^2$) due to subshell shielding."
          },
          {
            "id": "ch1-l5-q2",
            "stem": "Which list correctly ranks the following isoelectronic chemical species in order of DECREASING ionic/atomic radius ($r$): $S^{2-}, Cl^-, Ar, K^+, Ca^{2+}$?",
            "options": [
              "$Ca^{2+} > K^+ > Ar > Cl^- > S^{2-}$",
              "$S^{2-} > Cl^- > Ar > K^+ > Ca^{2+}$",
              "$Ar > S^{2-} > Cl^- > K^+ > Ca^{2+}$",
              "$S^{2-} > Ca^{2+} > Cl^- > K^+ > Ar$"
            ],
            "correctIndex": 1,
            "explanation": "All five species are isoelectronic (18 electrons). Nuclear charge ($Z$) increases from $S$ (16 protons) to $Ca$ (20 protons). With identical electron shielding, the species with the most protons ($Ca^{2+}, Z=20$) pulls electrons closest to the nucleus, making it the smallest, while $S^{2-}$ ($Z=16$) has the weakest nuclear pull, making it the largest.",
            "distractorTip": "In an isoelectronic series, more protons ($Z$) = stronger nuclear pull = SMALLER radius!"
          },
          {
            "id": "chem1-l5-q3",
            "stem": "Why does atomic radius decrease across a period from left to right (e.g., from Lithium to Fluorine) on the Periodic Table?",
            "options": [
              "Principal quantum number $n$ decreases across a period.",
              "Electrons fill core shells that repel the valence shell.",
              "The number of protons increases while valence electrons are added to the same principal energy level, increasing effective nuclear charge ($Z_{\\text{eff}}$) and pulling the electron cloud closer to the nucleus.",
              "Electronegativity decreases across a period."
            ],
            "correctIndex": 2,
            "explanation": "Across a period, electrons are added to the same principal energy shell ($n = 2$), providing minimal additional shielding. However, each step adds one nuclear proton, increasing $Z_{\\text{eff}} = Z - S$. The stronger Coulombic attraction draws valence electrons inward, reducing atomic radius.",
            "distractorTip": "Across a period: $Z_{\\text{eff}}$ increases $\\implies$ atomic radius decreases $\\implies$ ionization energy increases."
          }
        ]
      },
      {
        "id": 106,
        "unitIndex": 1,
        "levelNumber": 6,
        "uniqueKey": "chem-u1-l6",
        "topicNumber": "Unit 1 Boss",
        "name": "Quantum PES & Periodic Properties Crucible",
        "subtitle": "Multi-concept synthesis: Successive ionization energy jumps and isoelectronic PES comparisons",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ch1-l6-q1",
            "stem": "The first five successive ionization energies for an unknown Period 3 element $X$ are: $IE_1 = 578\\,\\text{kJ/mol}$, $IE_2 = 1817\\,\\text{kJ/mol}$, $IE_3 = 2745\\,\\text{kJ/mol}$, $IE_4 = 11577\\,\\text{kJ/mol}$, and $IE_5 = 14842\\,\\text{kJ/mol}$. Which element is $X$, and what formula does its oxide possess?",
            "options": [
              "Silicon ($Si$); its oxide is $SiO_2$",
              "Magnesium ($Mg$); its oxide is $MgO$",
              "Aluminum ($Al$); its oxide is $Al_2O_3$",
              "Sodium ($Na$); its oxide is $Na_2O$"
            ],
            "correctIndex": 2,
            "explanation": "Notice the huge jump between $IE_3$ ($2745\\,\\text{kJ/mol}$) and $IE_4$ ($11577\\,\\text{kJ/mol}$, over 4x increase). This indicates that the 4th electron is being removed from a core noble-gas shell ($n = 2$), meaning element $X$ has exactly 3 valence electrons (Group 13). The Period 3 Group 13 element is Aluminum ($Al$), forming the $Al^{3+}$ ion and oxide $Al_2O_3$.",
            "distractorTip": "The HUGE JUMP in successive ionization energies reveals when you have stripped all valence electrons and begun removing core electrons!"
          },
          {
            "id": "ch1-l6-q2",
            "stem": "A student analyzes the simulated PES spectra of $K^+$ and $Cl^-$. Both ions have the exact same electron configuration ($1s^2 2s^2 2p^6 3s^2 3p^6$). How do their spectra compare in terms of number of peaks and relative peak positions?",
            "options": [
              "$Cl^-$ has higher binding energies because anions attract incoming photons.",
              "$K^+$ has 6 peaks while $Cl^-$ has 5 peaks because potassium is a metal.",
              "The spectra are 100% identical because both ions have 18 electrons.",
              "Both spectra have 5 peaks with identical relative height ratios ($1:1:3:1:3$), but every peak for $K^+$ is shifted to significantly higher binding energies compared to $Cl^-$."
            ],
            "correctIndex": 3,
            "explanation": "Both ions have 5 occupied subshells ($1s, 2s, 2p, 3s, 3p$), so both display 5 peaks with identical area ratios (2:2:6:2:6). However, $K^+$ has 19 protons while $Cl^-$ has only 17 protons. The greater nuclear charge in $K^+$ exerts stronger Coulombic attraction on every subshell, shifting all 5 peaks to higher binding energies.",
            "distractorTip": "Isoelectronic species have the same number of peaks, but higher $Z$ shifts ALL peaks to HIGHER binding energies!"
          },
          {
            "id": "chem1-l6-q3",
            "stem": "Why is the first ionization energy of oxygen ($1314\\text{ kJ/mol}$) slightly lower than the first ionization energy of nitrogen ($1402\\text{ kJ/mol}$), violating the general left-to-right periodic trend?",
            "options": [
              "Oxygen has a lower nuclear charge than nitrogen.",
              "Oxygen has valence electrons in a higher principal energy level $n = 3$.",
              "Oxygen's fourth $2p$ electron must pair with another electron in an orbital ($2p_x^2 2p_y^1 2p_z^1$), generating inter-electron repulsion that makes it easier to remove.",
              "Nitrogen is an alkali metal."
            ],
            "correctIndex": 2,
            "explanation": "Nitrogen has a stable half-filled $2p$ subshell with three unpaired parallel electrons ($2p^3$). Oxygen ($2p^4$) has one doubly occupied $2p$ orbital. Coulombic repulsion between the two paired electrons in the same orbital raises their energy, lowering the energy required to remove one.",
            "distractorTip": "AP trend anomaly: Oxygen's paired electron in $2p$ experiences inter-electron repulsion, making it easier to ionize than nitrogen's half-filled $2p^3$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Unit 2: Molecular & Ionic Compound Structure",
    "shortTitle": "Unit 2: Bonding & VSEPR",
    "description": "Potential energy curves, lattice energy, metallic alloys, Lewis resonance, formal charge, VSEPR geometries, and hybridization",
    "examWeight": "7–9% of AP Exam",
    "biome": {
      "name": "Crystal Lattice & Molecular Geometries",
      "icon": "💎",
      "accentColor": "#3B82F6",
      "secondaryColor": "#2563EB",
      "groundGradient": "from-blue-100 via-sky-50 to-indigo-100",
      "cardBorder": "border-blue-500",
      "trailColor": "#3b82f6",
      "nodeRing": "ring-blue-400/40",
      "skyTint": "from-blue-50 to-sky-50/30"
    },
    "levels": [
      {
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "chem-u2-l1",
        "topicNumber": "Topic 2.1 & 2.2",
        "name": "Chemical Bonds & Potential Energy Curves",
        "subtitle": "Potential energy vs internuclear distance, bond length, and bond energy",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch2-l1-q1",
            "stem": "On a potential energy curve plotting potential energy versus internuclear distance for two bonding atoms, what do the horizontal position and vertical depth of the energy well minimum represent?",
            "options": [
              "Horizontal position represents bond length; vertical depth represents bond dissociation energy.",
              "Horizontal position represents ionization energy; vertical depth represents electron affinity.",
              "Horizontal position represents activation energy; vertical depth represents reaction rate.",
              "Horizontal position represents molecular mass; vertical depth represents electronegativity."
            ],
            "correctIndex": 0,
            "explanation": "The minimum of the Lennard-Jones potential energy well represents the equilibrium bond distance where attractive forces (nucleus-electron) and repulsive forces (nucleus-nucleus, electron-electron) balance. The distance at this minimum is bond length; the depth of the well is the bond dissociation energy required to separate the atoms.",
            "distractorTip": "Deeper well = STRONGER bond; Minimum further to the left = SHORTER bond length."
          },
          {
            "id": "ch2-l1-q2",
            "stem": "Comparing the triple bond in $N_2$ ($N \\equiv N$) to the single bond in $F_2$ ($F - F$), how do their bond lengths and bond dissociation energies compare?",
            "options": [
              "$N_2$ has a longer bond length and lower bond energy because nitrogen has fewer valence electrons.",
              "$N_2$ has a shorter bond length and a significantly greater bond dissociation energy than $F_2$.",
              "Both molecules have identical bond lengths because both are Period 2 nonmetals.",
              "$F_2$ has a shorter bond length because fluorine is more electronegative."
            ],
            "correctIndex": 1,
            "explanation": "A triple bond involves sharing three electron pairs (6 electrons), generating strong nuclear-electron attraction that pulls the nitrogen nuclei closer together (shorter bond length: ~110 pm vs ~142 pm in $F_2$) and creates a very high bond dissociation energy ($945\\,\\text{kJ/mol}$ vs $155\\,\\text{kJ/mol}$).",
            "distractorTip": "Higher bond order (single $\\to$ double $\\to$ triple) $\\to$ SHORTER bond length and STRONGER bond energy!"
          },
          {
            "id": "chem2-l1-q3",
            "stem": "On a potential energy curve for two interacting hydrogen atoms as a function of internuclear distance, what does the minimum point (lowest potential energy) represent?",
            "options": [
              "The point of total nuclear fusion.",
              "The equilibrium bond length and bond energy where attractive Coulombic forces between nuclei and electrons balance repulsive forces.",
              "Complete bond dissociation into isolated gas-phase atoms.",
              "The activation energy of molecular collision."
            ],
            "correctIndex": 1,
            "explanation": "The minimum of the Lennard-Jones potential energy curve corresponds to the stable chemical bond. The internuclear distance at this minimum is the equilibrium bond length, and the depth of the well represents the bond dissociation energy required to break the bond.",
            "distractorTip": "Minimum of the potential energy well = Bond length ($x$-axis) and Bond energy ($y$-axis depth)."
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "chem-u2-l2",
        "topicNumber": "Topic 2.3",
        "name": "Ionic Solids & Lattice Energy",
        "subtitle": "Coulomb's Law, lattice energy comparisons, melting points, and crystal brittleness",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch2-l2-q1",
            "stem": "According to Coulomb's Law ($F \\propto \\frac{q_1 q_2}{r^2}$), which of the following ionic solids has the highest lattice energy and highest melting point?",
            "options": [
              "$CaCl_2$ (charges $+2$ and $-1$)",
              "$NaCl$ (charges $+1$ and $-1$)",
              "$MgO$ (charges $+2$ and $-2$)",
              "$KBr$ (charges $+1$ and $-1$)"
            ],
            "correctIndex": 2,
            "explanation": "Lattice energy is proportional to the product of ionic charges ($|q_1 q_2|$) and inversely proportional to internuclear distance ($r$). In $MgO$, $|(+2)(-2)| = 4$, which is four times the charge product of $NaCl$ ($|(+1)(-1)| = 1$). Furthermore, $Mg^{2+}$ and $O^{2-}$ have small ionic radii. This massive electrostatic attraction gives $MgO$ a melting point of $2852^\\circ\\text{C}$ vs $801^\\circ\\text{C}$ for $NaCl$.",
            "distractorTip": "Charge magnitude ALWAYS dominates over ionic radius differences on AP Chemistry exams!"
          },
          {
            "id": "ch2-l2-q2",
            "stem": "Why are ionic crystals brittle, shattering into fragments when struck with a hammer, whereas metallic solids are malleable and deform without breaking?",
            "options": [
              "Ionic bonds are weaker than metallic bonds at room temperature.",
              "Ionic crystals contain covalent network bonds that snap under mechanical pressure.",
              "Metals contain delocalized valence protons that absorb kinetic energy.",
              "Impact shifts adjacent planes of the ionic crystal, aligning ions of like charges next to each other; intense Coulombic repulsion between like charges shatters the crystal."
            ],
            "correctIndex": 3,
            "explanation": "In an ionic crystal, alternating cations and anions are locked in a rigid lattice. Applying mechanical shear forces shifts rows of ions, placing cations next to cations and anions next to anions. The sudden electrostatic repulsion instantly fractures the crystal. In metals, delocalized \"sea of electrons\" adjusts to shifting cation layers, maintaining cohesion (malleability).",
            "distractorTip": "Like charges repel when shifted $\\to$ brittle ionic lattice. Delocalized electron sea $\\to$ malleable metal."
          },
          {
            "id": "chem2-l2-q3",
            "stem": "According to Coulomb's Law, which of the following ionic crystal compounds has the largest (most exothermic) lattice energy?",
            "options": [
              "$NaCl$",
              "$KCl$",
              "$MgO$",
              "$CaO$"
            ],
            "correctIndex": 2,
            "explanation": "Lattice energy is proportional to $\\frac{q_1 q_2}{r}$. $MgO$ consists of divalent ions ($Mg^{2+}$ and $O^{2-}$, product of charges $= 4$), compared to monovalent $NaCl$ ($1 \\times 1 = 1$). Furthermore, $Mg^{2+}$ has a smaller ionic radius than $Ca^{2+}$, minimizing internuclear distance $r$ and maximizing Coulombic lattice attraction.",
            "distractorTip": "Lattice energy depends FIRST on ionic charge magnitude ($|q_1 q_2|$: $+2/-2$ is $4\\times$ stronger than $+1/-1$), and SECOND on smaller ionic radii."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "chem-u2-l3",
        "topicNumber": "Topic 2.4",
        "name": "Metals & Metallic Alloys",
        "subtitle": "Electron sea model, substitutional vs interstitial alloys, and mechanical properties",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem2-l3-q1",
            "stem": "Steel is produced by incorporating small carbon atoms into the crystal lattice of iron. What type of alloy is steel, and how does this affect its physical properties compared to pure iron?",
            "options": [
              "Interstitial alloy; small carbon atoms occupy the spaces (interstices) between larger iron atoms, hindering planes of metal atoms from sliding past one another and making steel harder and less malleable than pure iron.",
              "Substitutional alloy; carbon atoms replace iron atoms in the lattice, making steel softer.",
              "Covalent network alloy; carbon forms covalent triple bonds with iron, making it liquid.",
              "Ionic alloy; iron donates three electrons to carbon, making steel brittle."
            ],
            "correctIndex": 0,
            "explanation": "Interstitial alloys form when small nonmetal atoms (like carbon, radius 70 pm) fit into the gaps (interstices) between much larger metal atoms (iron, radius 126 pm). The smaller solute atoms disrupt the regular lattice and prevent atomic layers from slipping past each other, making the alloy significantly harder, stronger, and less ductile.",
            "distractorTip": "Interstitial = different atom sizes (smaller atoms in gaps, e.g. Steel); Substitutional = comparable atom sizes (replace each other, e.g. Brass $Cu/Zn$)."
          },
          {
            "id": "chem2-l3-q2",
            "stem": "Brass is an alloy composed of copper ($Cu$) and zinc ($Zn$). Given that copper and zinc atoms have very similar atomic radii ($128\\,\\text{pm}$ and $134\\,\\text{pm}$), what classification of alloy is brass?",
            "options": [
              "Interstitial alloy, where zinc fills the microscopic voids between copper atoms.",
              "Substitutional alloy, where zinc atoms replace copper atoms directly in the metal crystal lattice.",
              "Ionic compound, where copper forms $Cu^{2+}$ and zinc forms $Zn^{2-}$.",
              "Heterogeneous suspension with no metallic bonding."
            ],
            "correctIndex": 1,
            "explanation": "When the constituent metals have similar atomic radii (within ~15% of each other), solute atoms substitute directly for solvent atoms in lattice positions, forming a substitutional alloy. Examples include brass ($Cu/Zn$), bronze ($Cu/Sn$), and pewter.",
            "distractorTip": "Similar radii = Substitutional alloy; Drastically different radii = Interstitial alloy."
          },
          {
            "id": "chem2-l3-q3",
            "stem": "Steel is an interstitial alloy formed by introducing small carbon atoms into the crystalline lattice of iron. How does the presence of interstitial carbon alter the physical properties of steel compared to pure iron?",
            "options": [
              "Carbon atoms disrupt the regular crystal planes, preventing metal layers from sliding smoothly past one another and making steel significantly harder and less malleable than pure iron.",
              "Carbon completely destroys electrical conductivity.",
              "Carbon lowers the melting point below room temperature.",
              "Carbon increases ductility, allowing steel to stretch into thin wires."
            ],
            "correctIndex": 0,
            "explanation": "Interstitial alloys form when small nonmetal atoms (like C) occupy the interstitial holes between larger metal atoms (like Fe). These interstitial atoms pin the crystal slip planes, preventing dislocation glide and making the alloy substantially stronger and less malleable.",
            "distractorTip": "Interstitial alloys (steel): small atoms in holes between big atoms $\\implies$ harder, less malleable; Substitutional alloys (brass): similar-sized atoms replace each other."
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "chem-u2-l4",
        "topicNumber": "Topic 2.5 & 2.6",
        "name": "Lewis Structures, Resonance & Formal Charge",
        "subtitle": "Formal charge calculation, octet exceptions, and dominant resonance contributors",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem2-l4-q1",
            "stem": "Three valid Lewis resonance structures can be drawn for the thiocyanate ion ($SCN^-$): Structure 1 ($[\\ddot{\\text{S}}=\\text{C}=\\ddot{\\text{N}}]^-$), Structure 2 ($[:\\text{S}\\equiv\\text{C}-\\ddot{\\text{N}}:]^-$), and Structure 3 ($[:\\ddot{\\text{S}}-\\text{C}\\equiv\\text{N}:]^-$). Based on formal charge analysis, which structure is the dominant contributor to the resonance hybrid?",
            "options": [
              "Structure 3; formal charges are $\\text{S} = -1, \\text{C} = 0, \\text{N} = 0$, placing negative charge on sulfur.",
              "Structure 2; formal charges are $\\text{S} = +1, \\text{C} = 0, \\text{N} = -2$, which maximizes the negative charge on nitrogen.",
              "Structure 1; formal charges are $\\text{S} = 0, \\text{C} = 0, \\text{N} = -1$, placing the negative formal charge on nitrogen, the most electronegative atom.",
              "All three resonance structures contribute equally because all atoms satisfy the octet rule."
            ],
            "correctIndex": 2,
            "explanation": "Formal charge $\\text{FC} = V - N - \\frac{B}{2}$. In Structure 1: $\\text{S} = 6 - 4 - 2 = 0$; $\\text{C} = 4 - 0 - 4 = 0$; $\\text{N} = 5 - 4 - 2 = -1$. This structure has the lowest formal charges and places the negative charge on nitrogen (electronegativity 3.0), which is more electronegative than sulfur (electronegativity 2.5).",
            "distractorTip": "Dominant Lewis structure rules: (1) Minimize magnitude of formal charges; (2) Place negative formal charges on the MORE electronegative element."
          },
          {
            "id": "chem2-l4-q2",
            "stem": "Why can sulfur expand its valence octet in molecules like sulfur hexafluoride ($SF_6$) and sulfur tetrafluoride ($SF_4$), whereas oxygen (in the same Group 16) can never expand its octet beyond eight electrons?",
            "options": [
              "Sulfur forms coordinate ionic bonds that bypass the octet rule.",
              "Sulfur has a lower ionization energy that converts core electrons into valence electrons.",
              "Oxygen atoms are too electropositive to form expanded bonds.",
              "Sulfur is in Period 3 with accessible empty $3d$ orbitals in its valence shell, whereas oxygen is in Period 2 with only $2s$ and $2p$ valence orbitals ($n = 2$ has no $d$-subshell)."
            ],
            "correctIndex": 3,
            "explanation": "Period 2 elements ($C, N, O, F$) have valence shell $n = 2$, which possesses only $s$ and $p$ orbitals (maximum 8 electrons). Period 3 and heavier elements have $n \\ge 3$, where empty $d$ orbitals can participate in bonding, accommodating 10 or 12 valence electrons.",
            "distractorTip": "Period 2 elements NEVER expand their octet! Expanded octets are restricted to elements in Period 3 and below."
          },
          {
            "id": "chem2-l4-q3",
            "stem": "What is the formal charge on the central sulfur atom in the sulfate ion ($SO_4^{2-}$) in a valid Lewis structure drawn with four single bonds?",
            "options": [
              "0",
              "+1",
              "+2",
              "-2"
            ],
            "correctIndex": 2,
            "explanation": "Formal charge $= \\text{Valence} - \\text{Lone pairs} - \\frac{1}{2}(\\text{Bonding pairs})$. Sulfur has 6 valence electrons. In a structure with four single $S-O$ bonds: $FC_S = 6 - 0 - 4 = +2$. (Each single-bonded oxygen has $FC = 6 - 6 - 1 = -1$).",
            "distractorTip": "Formal charge formula: $FC = V - L - B$ (Valence minus nonbonding electrons minus number of bonds)."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "chem-u2-l5",
        "topicNumber": "Topic 2.7",
        "name": "VSEPR Theory & Hybridization",
        "subtitle": "Steric numbers, electron geometry vs molecular geometry, bond angles, and sigma/pi bonds",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem2-l5-q1",
            "stem": "What is the molecular geometry, ideal bond angle, and hybridization of the central atom in chlorine trifluoride ($ClF_3$)?",
            "options": [
              "T-shaped geometry, $< 90^\\circ$ bond angles, $sp^3d$ hybridization (5 electron domains: 3 single bonds and 2 lone pairs).",
              "Trigonal planar geometry, $120^\\circ$ bond angles, $sp^2$ hybridization.",
              "Trigonal pyramidal geometry, $107^\\circ$ bond angles, $sp^3$ hybridization.",
              "Seesaw geometry, $120^\\circ$ and $90^\\circ$ bond angles, $sp^3d$ hybridization."
            ],
            "correctIndex": 0,
            "explanation": "Chlorine in $ClF_3$ has 7 valence electrons + 3 from fluorine = 10 electrons (5 domains: 3 bonding pairs and 2 lone pairs). Electron geometry is trigonal bipyramidal ($sp^3d$). To minimize repulsions, the 2 lone pairs occupy equatorial positions, leaving the 3 fluorine atoms in an axial-equatorial \"T-shape\" with bond angles compressed below $90^\\circ$ by lone-pair repulsion.",
            "distractorTip": "Lone pairs occupy EQUATORIAL positions in trigonal bipyramidal systems to minimize $90^\\circ$ repulsions!"
          },
          {
            "id": "chem2-l5-q2",
            "stem": "In a molecule of propyne ($CH_3-C \\equiv CH$), how many sigma ($\\sigma$) bonds, pi ($\\pi$) bonds, and $sp$-hybridized carbon atoms are present?",
            "options": [
              "4 $\\sigma$ bonds, 3 $\\pi$ bonds, and 1 $sp$-hybridized carbon atom",
              "6 $\\sigma$ bonds, 2 $\\pi$ bonds, and 2 $sp$-hybridized carbon atoms",
              "8 $\\sigma$ bonds, 1 $\\pi$ bond, and 3 $sp$-hybridized carbon atoms",
              "6 $\\sigma$ bonds, 0 $\\pi$ bonds, and 2 $sp^2$-hybridized carbon atoms"
            ],
            "correctIndex": 1,
            "explanation": "Propyne has: three C-H single bonds on $CH_3$ ($3\\,\\sigma$), one C-C single bond ($1\\,\\sigma$), one C-H single bond on terminal CH ($1\\,\\sigma$), and one $C \\equiv C$ triple bond ($1\\,\\sigma + 2\\,\\pi$). Total = $6\\,\\sigma$ bonds and $2\\,\\pi$ bonds. The two triply-bonded carbons each have 2 electron domains ($sp$ hybridized). The methyl carbon has 4 domains ($sp^3$).",
            "distractorTip": "Every single bond is $1\\,\\sigma$; Double bond is $1\\,\\sigma + 1\\,\\pi$; Triple bond is $1\\,\\sigma + 2\\,\\pi$."
          },
          {
            "id": "chem2-l5-q3",
            "stem": "According to VSEPR theory, what are the electron domain geometry and molecular geometry of sulfur tetrafluoride ($SF_4$)?",
            "options": [
              "Tetrahedral electron geometry; tetrahedral molecular geometry",
              "Trigonal bipyramidal electron geometry; see-saw molecular geometry",
              "Octahedral electron geometry; square planar molecular geometry",
              "Trigonal planar electron geometry; T-shaped molecular geometry"
            ],
            "correctIndex": 1,
            "explanation": "Sulfur in $SF_4$ has 6 valence electrons: 4 form single bonds with fluorine and 2 form one equatorial lone pair (5 total electron domains). 5 electron domains = Trigonal Bipyramidal electron domain geometry. With 1 lone pair in an equatorial position, the molecular geometry is See-saw.",
            "distractorTip": "$SF_4$ has 5 electron pairs (4 bonding, 1 lone pair) $\\implies$ Trigonal bipyramidal electron geometry, See-saw molecular shape."
          }
        ]
      },
      {
        "id": 206,
        "unitIndex": 2,
        "levelNumber": 6,
        "uniqueKey": "chem-u2-l6",
        "topicNumber": "Unit 2 Boss",
        "name": "Molecular Architecture & Bonding Nexus",
        "subtitle": "Multi-concept synthesis: Xenon noble gas fluorides and formal charge geometry optimization",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "chem2-l6-q1",
            "stem": "Xenon tetrafluoride ($XeF_4$) is a noble-gas compound. What is the molecular geometry of $XeF_4$, what is the hybridization of xenon, and is the molecule polar or nonpolar?",
            "options": [
              "Seesaw molecular geometry, $sp^3d$ hybridization; polar.",
              "Tetrahedral molecular geometry, $sp^3$ hybridization; nonpolar.",
              "Square planar molecular geometry, $sp^3d^2$ hybridization; nonpolar because the four polar Xe-F bond dipoles cancel symmetrically across the planar square.",
              "Square pyramidal molecular geometry, $sp^3d^2$ hybridization; polar."
            ],
            "correctIndex": 2,
            "explanation": "Xenon has 8 valence electrons + 4 from fluorines = 12 electrons (6 domains: 4 bonding pairs and 2 lone pairs). Electron geometry is octahedral ($sp^3d^2$). The two lone pairs occupy trans axial positions ($180^\\circ$ apart) to minimize repulsion, placing the 4 fluorine atoms at the corners of a square (square planar). Because of inversion symmetry, individual bond dipoles cancel, resulting in a zero net dipole moment (nonpolar).",
            "distractorTip": "Square planar molecules with identical terminal atoms are NONPOLAR because the four bond dipoles point in opposite directions and cancel."
          },
          {
            "id": "chem2-l6-q2",
            "stem": "Consider the nitrite ion ($NO_2^-$) and nitronium ion ($NO_2^+$). How do their $O-N-O$ bond angles and bond lengths compare?",
            "options": [
              "$NO_2^+$ has longer bonds because the positive charge repels electrons.",
              "$NO_2^-$ is linear ($180^\\circ$) and $NO_2^+$ is bent ($109.5^\\circ$).",
              "Both ions have identical $120^\\circ$ bond angles because both contain nitrogen and two oxygens.",
              "$NO_2^+$ has a linear geometry ($180^\\circ$) with shorter, stronger double bonds; $NO_2^-$ has a bent geometry ($< 120^\\circ$) with longer resonance bonds ($1.5$ bond order) due to lone pair repulsion on nitrogen."
            ],
            "correctIndex": 3,
            "explanation": "$NO_2^+$ has 16 valence electrons: $O=N^+=O$ (2 domains, 0 lone pairs $\\to$ linear, $180^\\circ$, two true double bonds). $NO_2^-$ has 18 valence electrons (3 domains: 2 bonds and 1 lone pair $\\to$ bent, bond angle $\\approx 115^\\circ$, resonance bond order $1.5$). The higher bond order in $NO_2^+$ gives it shorter, stronger bonds than $NO_2^-$.",
            "distractorTip": "Lone pairs compress bond angles: $NO_2^+$ (no lone pair) = $180^\\circ$; $NO_2^-$ (one lone pair) = $115^\\circ$."
          },
          {
            "id": "chem2-l6-q3",
            "stem": "In the ethylene molecule ($C_2H_4$), what types of chemical bonds and carbon hybridization form the carbon-carbon double bond ($C=C$)?",
            "options": [
              "Two sigma ($\\\\sigma$) bonds formed by $sp^3$ hybridized orbitals.",
              "One sigma ($\\\\sigma$) bond formed by $sp^2$-$sp^2$ head-on orbital overlap, and one pi ($\\\\pi$) bond formed by side-by-side overlap of unhybridized $2p$ orbitals.",
              "Two pi ($\\\\pi$) bonds formed by $sp$ hybridized orbitals.",
              "One ionic bond and one coordinate covalent bond."
            ],
            "correctIndex": 1,
            "explanation": "Each carbon in $C_2H_4$ has 3 electron domains ($sp^2$ hybridized). The $C=C$ double bond consists of one head-on $\\sigma$ bond formed by overlapping $sp^2$ hybrid orbitals, and one $\\pi$ bond formed by the lateral (side-by-side) overlap of unhybridized parallel $2p$ orbitals.",
            "distractorTip": "Single bond = $1\\sigma$; Double bond = $1\\sigma + 1\\pi$; Triple bond = $1\\sigma + 2\\pi$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Unit 3: Intermolecular Forces & Properties",
    "shortTitle": "Unit 3: IMFs & Gas Laws",
    "description": "Intermolecular forces, solid types, Ideal Gas Law, Kinetic Molecular Theory, real gas deviations, chromatography, and Beer-Lambert Law",
    "examWeight": "18–22% of AP Exam",
    "biome": {
      "name": "Vapor Fields & Spectrophotometry Bay",
      "icon": "🧪",
      "accentColor": "#0EA5E9",
      "secondaryColor": "#0284C7",
      "groundGradient": "from-cyan-100 via-sky-50 to-blue-100",
      "cardBorder": "border-cyan-500",
      "trailColor": "#0ea5e9",
      "nodeRing": "ring-cyan-400/40",
      "skyTint": "from-cyan-50 to-sky-50/30"
    },
    "levels": [
      {
        "id": 301,
        "unitIndex": 3,
        "levelNumber": 1,
        "uniqueKey": "chem-u3-l1",
        "topicNumber": "Topic 3.1 & 3.2",
        "name": "Intermolecular Forces & Boiling Points",
        "subtitle": "London dispersion, dipole-dipole, hydrogen bonding, and polarizability",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem3-l1-q1",
            "stem": "Although both $H_2O$ and $H_2S$ exhibit bent molecular geometries, water boils at $100^\\circ\\text{C}$ while hydrogen sulfide boils at $-60^\\circ\\text{C}$. What primary intermolecular force accounts for water’s drastically higher boiling point?",
            "options": [
              "Hydrogen bonding between the highly electronegative oxygen atom of one water molecule and the hydrogen atom of an adjacent water molecule.",
              "Water has a larger electron cloud resulting in stronger London dispersion forces.",
              "Hydrogen sulfide forms covalent network bonds in the gas phase.",
              "Water molecules decompose into $H^+$ and $OH^-$ ions at room temperature."
            ],
            "correctIndex": 0,
            "explanation": "Oxygen is strongly electronegative ($EN = 3.5$) and small, creating large partial charges and compact O-H bond dipoles that engage in extensive intermolecular hydrogen bonding. Sulfur ($EN = 2.5$) is less electronegative and larger, so $H_2S$ exhibits only dipole-dipole forces, which are substantially weaker.",
            "distractorTip": "Hydrogen bonding occurs ONLY when hydrogen is directly bonded to Nitrogen, Oxygen, or Fluorine (N, O, F)!"
          },
          {
            "id": "chem3-l1-q2",
            "stem": "Nonpolar iodine ($I_2$) is a crystalline solid at room temperature, whereas nonpolar chlorine ($Cl_2$) is a gas. Which statement best explains this difference in physical states?",
            "options": [
              "$I_2$ contains polar covalent bonds while $Cl_2$ contains nonpolar bonds.",
              "$I_2$ has 106 electrons compared to 34 electrons in $Cl_2$; its larger, more diffuse electron cloud is significantly more polarizable, generating much stronger London dispersion forces.",
              "$I_2$ forms ionic bonds between iodine atoms in the solid state.",
              "$Cl_2$ has a higher vapor pressure because chlorine atoms repel each other."
            ],
            "correctIndex": 1,
            "explanation": "London dispersion forces increase with polarizability (the ease with which an electron cloud can be distorted to form temporary dipoles). Larger atoms/molecules with more electrons have larger, more polarizable electron clouds, resulting in stronger dispersion forces and higher boiling/melting points.",
            "distractorTip": "More electrons = greater polarizability = STRONGER London dispersion forces!"
          },
          {
            "id": "chem3-l1-q3",
            "stem": "Both methane ($CH_4$) and carbon tetrachloride ($CCl_4$) are nonpolar tetrahedral molecules. Why is $CCl_4$ a liquid at room temperature with a boiling point of $77^\\circ\\text{C}$, while $CH_4$ is a gas with a boiling point of $-161^\\circ\\text{C}$?",
            "options": [
              "$CCl_4$ exhibits strong permanent dipole-dipole attractions.",
              "$CCl_4$ has significantly more electrons (74 vs 10), resulting in a larger, more polarizable electron cloud that generates much stronger London dispersion forces.",
              "$CCl_4$ forms intermolecular hydrogen bonds with atmospheric nitrogen.",
              "Carbon-chlorine covalent bonds are ionic in character."
            ],
            "correctIndex": 1,
            "explanation": "London dispersion forces depend on molecular polarizability. $CCl_4$ has 74 electrons compared to $CH_4$'s 10 electrons. The larger, more diffuse electron cloud in $CCl_4$ is far more polarizable, creating stronger temporary dipole-induced dipole attractions that require more thermal energy to overcome.",
            "distractorTip": "AP rule: Larger molecule with more electrons $\\implies$ more polarizable electron cloud $\\implies$ stronger London Dispersion Forces (higher boiling point)."
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "chem-u3-l2",
        "topicNumber": "Topic 3.3",
        "name": "Types of Solids & Structural Properties",
        "subtitle": "Molecular, ionic, metallic, and covalent network solids (diamond, graphite, SiO2)",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem3-l2-q1",
            "stem": "Silicon dioxide ($SiO_2$, quartz) melts at $1710^\\circ\\text{C}$, whereas carbon dioxide ($CO_2$, dry ice) sublimes at $-78^\\circ\\text{C}$. What fundamental difference in crystal solid structure accounts for this enormous disparity?",
            "options": [
              "$SiO_2$ exhibits extensive hydrogen bonding throughout its lattice.",
              "$SiO_2$ is an ionic solid with high lattice energy, while $CO_2$ is metallic.",
              "$SiO_2$ is a covalent network solid held together by a continuous 3D lattice of strong covalent Si-O single bonds, whereas $CO_2$ is a molecular solid held together only by weak London dispersion forces between discrete $CO_2$ molecules.",
              "$CO_2$ molecules have covalent bonds that easily dissociate at low temperatures."
            ],
            "correctIndex": 2,
            "explanation": "Melting quartz requires breaking strong covalent single bonds throughout a rigid 3D tetrahedral network ($SiO_4$ units). Subliming dry ice ($CO_2$) does not break covalent C=O bonds; it merely overcomes the weak London dispersion forces between discrete nonpolar $CO_2$ molecules.",
            "distractorTip": "Phase changes of molecular solids break WEAK IMFs; phase changes of covalent network solids break STRONG COVALENT BONDS!"
          },
          {
            "id": "chem3-l2-q2",
            "stem": "Why is graphite capable of conducting electricity, whereas diamond (an allotrope of pure carbon) is a complete electrical insulator?",
            "options": [
              "Graphite contains polar covalent bonds while diamond contains nonpolar bonds.",
              "Graphite contains interstitial sodium cations that carry electric current.",
              "Diamond is an ionic solid whose ions are locked in fixed positions.",
              "In graphite, each carbon is $sp^2$ hybridized, leaving one unhybridized $p$ orbital per carbon that forms delocalized $\\pi$-bonds across 2D sheets, allowing electron mobility; in diamond, all carbons are $sp^3$ hybridized with electrons locked in localized $\\sigma$-bonds."
            ],
            "correctIndex": 3,
            "explanation": "Graphite consists of 2D planar hexagonal layers of $sp^2$-hybridized carbon atoms. The unhybridized $p$ orbitals form a delocalized $\\pi$ electron system extending across the sheet, providing free mobile charge carriers for electrical conductivity. In diamond, 3D tetrahedral $sp^3$ hybridization locks all valence electrons into localized $\\sigma$-bonds.",
            "distractorTip": "Electrical conduction requires MOBILE CHARGED PARTICLES (either delocalized electrons in metals/graphite, or mobile ions in molten/aqueous salts)."
          },
          {
            "id": "chem3-l2-q3",
            "stem": "Which of the following substances forms a covalent network solid characterized by an extremely high melting point (over $3500^\\circ\\text{C}$) and exceptional hardness?",
            "options": [
              "Solid carbon dioxide (dry ice, $CO_2$)",
              "Sucrose ($C_{12}H_{22}O_{11}$)",
              "Diamond (allotrope of pure carbon)",
              "Sodium chloride ($NaCl$)"
            ],
            "correctIndex": 2,
            "explanation": "Diamond is a covalent network solid where each carbon atom is covalently bonded to four other carbon atoms in a tetrahedral $sp^3$ three-dimensional lattice. Melting diamond requires breaking covalent bonds throughout the entire crystal lattice, resulting in an astronomical melting point.",
            "distractorTip": "Covalent network solids (diamond, graphite, quartz $SiO_2$, silicon carbide $SiC$) have extremely high melting points because melting breaks covalent bonds."
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "chem-u3-l3",
        "topicNumber": "Topic 3.4",
        "name": "Ideal Gas Law & Gas Stoichiometry",
        "subtitle": "PV = nRT, Dalton's law of partial pressures, and collecting gas over water",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem3-l3-q1",
            "stem": "A sample of hydrogen gas is collected over water at $25^\\circ\\text{C}$ and a total barometric pressure of $755\\,\\text{torr}$. If the vapor pressure of water at $25^\\circ\\text{C}$ is $23.8\\,\\text{torr}$, what is the partial pressure of the dry hydrogen gas?",
            "options": [
              "$731.2\\,\\text{torr}$",
              "$778.8\\,\\text{torr}$",
              "$755.0\\,\\text{torr}$",
              "$31.7\\,\\text{torr}$"
            ],
            "correctIndex": 0,
            "explanation": "By Dalton's Law of Partial Pressures: $P_{\\text{total}} = P_{H_2} + P_{H_2O}$. Therefore, $P_{H_2} = P_{\\text{total}} - P_{H_2O} = 755 - 23.8 = 731.2\\,\\text{torr}$.",
            "distractorTip": "Always SUBTRACT the water vapor pressure when a gas is collected over water to obtain the true pressure of the dry gas."
          },
          {
            "id": "chem3-l3-q2",
            "stem": "What is the density of gaseous carbon dioxide ($CO_2$, molar mass $44.01\\,\\text{g/mol}$) at a pressure of $2.00\\,\\text{atm}$ and a temperature of $300\\,\\text{K}$? ($R = 0.08206\\,\\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}}$)",
            "options": [
              "$1.79\\,\\text{g/L}$",
              "$3.57\\,\\text{g/L}$",
              "$7.14\\,\\text{g/L}$",
              "$0.28\\,\\text{g/L}$"
            ],
            "correctIndex": 1,
            "explanation": "Using the gas density equation $d = \\frac{PM}{RT}$: $d = \\frac{(2.00\\,\\text{atm})(44.01\\,\\text{g/mol})}{(0.08206\\,\\text{L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K}))(300\\,\\text{K})} = \\frac{88.02}{24.618} = 3.575 \\approx 3.57\\,\\text{g/L}$.",
            "distractorTip": "Formula derivation: $PV = nRT = \\frac{m}{M}RT \\implies d = \\frac{m}{V} = \\frac{PM}{RT}$."
          },
          {
            "id": "chem3-l3-q3",
            "stem": "A rigid 2.0 L sealed metal container holds 0.50 mol of neon gas at 300 K. What is the pressure inside the container? (Use $R = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$)",
            "options": [
              "6.16 atm",
              "12.3 atm",
              "1.54 atm",
              "24.6 atm"
            ],
            "correctIndex": 0,
            "explanation": "Apply Ideal Gas Law: $PV = nRT \\implies P = \\frac{nRT}{V} = \\frac{(0.50)(0.0821)(300)}{2.0} = \\frac{12.315}{2.0} \\approx 6.16\\text{ atm}$.",
            "distractorTip": "$P = nRT / V$: Remember to use $R = 0.0821\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$ when volume is in liters and pressure is in atmospheres."
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "chem-u3-l4",
        "topicNumber": "Topic 3.5",
        "name": "Kinetic Molecular Theory & Effusion Rates",
        "subtitle": "Average kinetic energy, Maxwell-Boltzmann velocity distributions, and Graham's law",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem3-l4-q1",
            "stem": "A sealed vessel holds equimolar quantities of $He(g)$ (molar mass $4.00\\,\\text{g/mol}$) and $CH_4(g)$ (molar mass $16.0\\,\\text{g/mol}$) at $298\\,\\text{K}$. How do their average kinetic energies and root-mean-square speeds ($u_{\\text{rms}}$) compare?",
            "options": [
              "$CH_4$ molecules have greater kinetic energy because they are heavier.",
              "$He$ atoms have 4 times greater kinetic energy because they move faster.",
              "Both gases have identical average kinetic energies, but $He$ atoms have an average speed twice as fast as $CH_4$ molecules.",
              "Both gases have identical average kinetic energies and identical average speeds."
            ],
            "correctIndex": 2,
            "explanation": "Average kinetic energy depends solely on absolute temperature ($KE_{\\text{avg}} = \\frac{3}{2}RT$), so both gases have the exact same average KE. Speed depends inversely on molar mass: $u_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. Ratio: $\\frac{u_{He}}{u_{CH_4}} = \\sqrt{\\frac{16}{4}} = \\sqrt{4} = 2$. $He$ moves twice as fast.",
            "distractorTip": "Key Rule: TEMPERATURE alone determines average kinetic energy; MOLAR MASS determines molecular velocity!"
          },
          {
            "id": "chem3-l4-q2",
            "stem": "According to Graham's Law of Effusion, if an unknown gas effuses through a pinhole at half the rate of oxygen gas ($O_2$, $32.0\\,\\text{g/mol}$), what is the molar mass of the unknown gas?",
            "options": [
              "$256\\,\\text{g/mol}$",
              "$64.0\\,\\text{g/mol}$",
              "$16.0\\,\\text{g/mol}$",
              "$128\\,\\text{g/mol}$"
            ],
            "correctIndex": 3,
            "explanation": "Graham's Law: $\\frac{\\text{Rate}_1}{\\text{Rate}_2} = \\sqrt{\\frac{M_2}{M_1}}$. Here $\\frac{\\text{Rate}_{\\text{unknown}}}{\\text{Rate}_{O_2}} = \\frac{1}{2} = \\sqrt{\\frac{32.0}{M_{\\text{unknown}}}}$. Squaring both sides: $\\frac{1}{4} = \\frac{32.0}{M_{\\text{unknown}}} \\implies M_{\\text{unknown}} = 4 \\times 32.0 = 128\\,\\text{g/mol}$.",
            "distractorTip": "An effusion rate that is $1/2$ as fast means the gas is 4 times heavier ($2^2 = 4$)."
          },
          {
            "id": "chem3-l4-q3",
            "stem": "According to Graham's Law of Effusion, how many times faster does helium gas ($He$, molar mass $4.00\\text{ g/mol}$) effuse through a pinhole compared to sulfur dioxide gas ($SO_2$, molar mass $64.0\\text{ g/mol}$) at the same temperature?",
            "options": [
              "2 times faster",
              "16 times faster",
              "4 times faster",
              "8 times faster"
            ],
            "correctIndex": 2,
            "explanation": "Graham's Law states: $\\frac{\\text{Rate}_1}{\\text{Rate}_2} = \\sqrt{\\frac{M_2}{M_1}}$. Comparing $He$ to $SO_2$: $\\frac{\\text{Rate}_{He}}{\\text{Rate}_{SO_2}} = \\sqrt{\\frac{64.0}{4.00}} = \\sqrt{16} = 4$. Helium effuses 4 times faster.",
            "distractorTip": "Effusion rate is inversely proportional to the SQUARE ROOT of molar mass: $\\sqrt{64/4} = \\sqrt{16} = 4$."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "chem-u3-l5",
        "topicNumber": "Topic 3.6",
        "name": "Deviation from Ideal Gas Behavior",
        "subtitle": "Real gases, van der Waals parameters, high pressure and low temperature conditions",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem3-l5-q1",
            "stem": "Under which combined experimental conditions do real gases deviate MOST significantly from ideal behavior described by $PV = nRT$?",
            "options": [
              "Extremely high pressure and extremely low temperature",
              "Extremely low pressure and extremely high temperature",
              "Moderate room temperature and standard atmospheric pressure",
              "Zero pressure and absolute zero temperature"
            ],
            "correctIndex": 0,
            "explanation": "Real gases deviate from ideality when the two fundamental assumptions of Kinetic Molecular Theory fail: (1) At high pressures, gas particles are forced close together so their finite molecular volume becomes significant compared to container volume; (2) At low temperatures, particles move slowly so attractive intermolecular forces pull molecules together, reducing collision force with container walls.",
            "distractorTip": "Remember: Real gases behave MOST ideally at LOW pressure and HIGH temperature; they deviate MOST at HIGH pressure and LOW temperature."
          },
          {
            "id": "chem3-l5-q2",
            "stem": "In the van der Waals equation $\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT$, what physical phenomenon is accounted for by the correction term $\\frac{an^2}{V^2}$?",
            "options": [
              "The finite physical volume occupied by the gas molecules themselves.",
              "Intermolecular attractive forces between real gas molecules, which slightly reduce the pressure exerted on the container walls.",
              "Thermal expansion of the metal container walls.",
              "Chemical bond dissociation into plasma at high temperature."
            ],
            "correctIndex": 1,
            "explanation": "The parameter $a$ corrects for intermolecular attractions. Because real gas molecules attract one another, collisions with container walls are less forceful than in an ideal gas, making real pressure lower ($P_{\\text{real}} < P_{\\text{ideal}}$). The term $\\frac{an^2}{V^2}$ adds this lost pressure back. The parameter $b$ corrects for molecular particle volume.",
            "distractorTip": "$a$ = attractive forces; $b$ = particle volume."
          },
          {
            "id": "chem3-l5-q3",
            "stem": "Under which set of temperature and pressure conditions do real gases deviate most severely from ideal gas behavior?",
            "options": [
              "High temperature and low pressure",
              "Low temperature and high pressure",
              "Moderate room temperature and standard atmospheric pressure",
              "High temperature and high vacuum"
            ],
            "correctIndex": 1,
            "explanation": "Real gases deviate from ideal behavior under LOW temperature (where particles move slowly and intermolecular attractive forces can no longer be ignored) and HIGH pressure (where gas molecules are compressed so closely that their finite particle volume occupies a significant fraction of the container).",
            "distractorTip": "Real gas deviations occur at LOW temperature (IMFs matter) and HIGH pressure (particle volume matters)."
          }
        ]
      },
      {
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "chem-u3-l6",
        "topicNumber": "Topic 3.7 & 3.8",
        "name": "Solutions & Beer-Lambert Law",
        "subtitle": "Chromatography retention factors, spectrophotometry, and path length / concentration",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem3-l6-q1",
            "stem": "In a paper chromatography experiment separating food dyes, the stationary phase is polar cellulose paper and the solvent mobile phase is nonpolar hexane. A yellow dye travels $8.0\\,\\text{cm}$ while a blue dye travels $2.0\\,\\text{cm}$ from the origin (solvent front is at $10.0\\,\\text{cm}$). What can be concluded about the dyes?",
            "options": [
              "The yellow dye must be ionic while the blue dye is nonpolar.",
              "The blue dye has a higher molar mass and therefore moves slower.",
              "The yellow dye ($R_f = 0.80$) is less polar and interacts more strongly with the nonpolar mobile phase; the blue dye ($R_f = 0.20$) is more polar and interacts more strongly with the polar paper.",
              "Both dyes have identical affinities for the stationary phase."
            ],
            "correctIndex": 2,
            "explanation": "$R_f = \\frac{\\text{distance traveled by solute}}{\\text{distance traveled by solvent front}}$. Yellow $R_f = 8.0/10.0 = 0.80$; Blue $R_f = 2.0/10.0 = 0.20$. Because the solvent is nonpolar, nonpolar solutes dissolve more readily and travel further with the mobile phase. Polar solutes adhere strongly to the polar paper through dipole-dipole/hydrogen bonds and stay closer to the origin.",
            "distractorTip": "Like dissolves like: a solute moves further if its polarity matches the mobile phase solvent."
          },
          {
            "id": "chem3-l6-q2",
            "stem": "A student uses a spectrophotometer to measure the absorbance of a cobalt(II) chloride solution. If the student carelessly leaves oily fingerprints on the clear optical faces of the cuvette, what systematic error will this introduce into the measured absorbance and calculated concentration?",
            "options": [
              "The calculated molar absorptivity constant $\\epsilon$ will double.",
              "The fingerprints reflect light into the detector, resulting in a falsely low absorbance and underestimated concentration.",
              "Fingerprints have zero effect because cobalt(II) absorbs at 510 nm.",
              "The fingerprints scatter and absorb incident light, causing an erroneously HIGH absorbance measurement and an OVERESTIMATED calculated concentration."
            ],
            "correctIndex": 3,
            "explanation": "Fingerprints, smudges, or scratches on the optical path scatter and absorb light before it reaches the detector. By Beer's Law ($A = -\\log(I/I_0) = \\epsilon b c$), less transmitted light is recorded, which registers as a falsely high absorbance ($A$), leading to an artificially inflated (overestimated) calculated concentration.",
            "distractorTip": "Contaminants that block light (fingerprints, bubbles) increase measured absorbance $\\to$ overestimates concentration!"
          },
          {
            "id": "chem3-l6-q3",
            "stem": "According to the Beer-Lambert Law ($A = \\epsilon b c$), if a solution of copper(II) sulfate in a 1.0 cm spectrophotometer cuvette has an absorbance of 0.40, what will be the absorbance if the concentration of the solution is doubled?",
            "options": [
              "0.20",
              "0.40",
              "0.80",
              "1.60"
            ],
            "correctIndex": 2,
            "explanation": "The Beer-Lambert Law shows a direct linear relationship between absorbance ($A$) and molar concentration ($c$). If path length ($b$) and molar absorptivity ($\\epsilon$) remain constant, doubling concentration doubles absorbance: $2 \\times 0.40 = 0.80$.",
            "distractorTip": "Beer-Lambert Law: Absorbance is directly proportional to concentration ($A \\propto c$)."
          }
        ]
      },
      {
        "id": 307,
        "unitIndex": 3,
        "levelNumber": 7,
        "uniqueKey": "chem-u3-l7",
        "topicNumber": "Unit 3 Boss",
        "name": "Real Gases & Solution Spectroscopy Crucible",
        "subtitle": "Multi-concept synthesis: Compressibility factor anomalies and spectrophotometric Beer's Law calibration",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "chem3-l7-q1",
            "stem": "At $300\\,\\text{K}$, the compressibility factor $Z = \\frac{PV}{nRT}$ is measured for $1.0\\,\\text{mol}$ of methane gas ($CH_4$) at varying pressures. At $50\\,\\text{atm}$, $Z = 0.88$ (less than 1). At $500\\,\\text{atm}$, $Z = 1.65$ (greater than 1). What molecular phenomena dominate at $50\\,\\text{atm}$ and $500\\,\\text{atm}$, respectively?",
            "options": [
              "At $50\\,\\text{atm}$, attractive intermolecular forces dominate, pulling molecules together and reducing volume ($Z < 1$); at $500\\,\\text{atm}$, the finite physical volume of gas molecules dominates, resisting compression and increasing volume ($Z > 1$).",
              "At $50\\,\\text{atm}$, methane decomposes into carbon and hydrogen; at $500\\,\\text{atm}$, it forms a liquid crystal.",
              "At both pressures, methane behaves as a completely ideal gas.",
              "At $50\\,\\text{atm}$, molecular volume dominates; at $500\\,\\text{atm}$, London dispersion forces dominate."
            ],
            "correctIndex": 0,
            "explanation": "For an ideal gas, $Z = 1$. At intermediate high pressures (~50 atm), molecules are close enough for attractive London dispersion forces to pull them inward, lowering effective pressure and volume so $PV < nRT$ ($Z < 1$). At extreme pressures (~500 atm), molecules are packed so tightly that their own finite molecular volumes can no longer be ignored; the actual volume cannot decrease further, so $PV > nRT$ ($Z > 1$).",
            "distractorTip": "$Z < 1$ $\\to$ attractive forces dominate; $Z > 1$ $\\to$ particle volume / repulsions dominate."
          },
          {
            "id": "chem3-l7-q2",
            "stem": "A spectrophotometric calibration curve for $Cu^{2+}$ at $\\lambda_{\\max} = 635\\,\\text{nm}$ using a $1.00\\,\\text{cm}$ cuvette yields the linear regression equation $A = 28.5 \\times [Cu^{2+}] + 0.005$. A $0.500\\,\\text{g}$ brass sample is completely dissolved in concentrated nitric acid, neutralized, and diluted to a total volume of $100.0\\,\\text{mL}$. The absorbance of this solution is measured as $A = 0.575$. What is the mass percent of copper in the brass sample? ($M_{Cu} = 63.55\\,\\text{g/mol}$)",
            "options": [
              "$50.8\\%$",
              "$25.4\\%$",
              "$12.7\\%$",
              "$76.2\\%$"
            ],
            "correctIndex": 1,
            "explanation": "1. Solve concentration: $0.575 = 28.5[Cu^{2+}] + 0.005 \\implies 28.5[Cu^{2+}] = 0.570 \\implies [Cu^{2+}] = 0.0200\\,\\text{M}$. 2. Moles of $Cu^{2+}$ in $100.0\\,\\text{mL}$ ($0.100\\,\\text{L}$) $= 0.0200\\,\\text{mol/L} \\times 0.100\\,\\text{L} = 0.00200\\,\\text{mol}$. 3. Mass of Cu $= 0.00200\\,\\text{mol} \\times 63.55\\,\\text{g/mol} = 0.1271\\,\\text{g}$. 4. Mass percent in brass $= \\frac{0.1271\\,\\text{g}}{0.500\\,\\text{g}} \\times 100\\% = 25.42\\% \\approx 25.4\\%$.",
            "distractorTip": "Break titration/spectrophotometry problems down: Absorbance $\\to$ Molarity $\\to$ Moles $\\to$ Mass $\\to$ Mass percent."
          },
          {
            "id": "chem3-l7-q3",
            "stem": "A student performs paper chromatography on a mixture of food dyes using a nonpolar solvent. Dye X travels nearly to the solvent front ($R_f = 0.90$), while Dye Y remains near the origin ($R_f = 0.15$). What can be concluded about the dyes?",
            "options": [
              "Dye X has a much higher molar mass than Dye Y.",
              "Dye X is nonpolar and has stronger attractions to the nonpolar mobile solvent, while Dye Y is polar and interacts more strongly with the polar stationary cellulose paper.",
              "Dye Y evaporated during chromatography.",
              "Dye X underwent an oxidation-reduction reaction."
            ],
            "correctIndex": 1,
            "explanation": "In chromatography, components separate based on their relative affinities for the mobile and stationary phases. Since the solvent is nonpolar, the dye with the highest $R_f$ value (Dye X) is predominantly nonpolar, interacting strongly with the moving solvent.",
            "distractorTip": "'Like dissolves like': In chromatography, nonpolar dyes travel farthest with nonpolar solvents."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Unit 4: Chemical Reactions & Stoichiometry",
    "shortTitle": "Unit 4: Chemical Reactions",
    "description": "Net ionic equations, particulate models, physical vs chemical changes, limiting reactants, titrations, and redox half-reactions",
    "examWeight": "7–9% of AP Exam",
    "biome": {
      "name": "Precipitation Cavern & Titration Bench",
      "icon": "⚗️",
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
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "chem-u4-l1",
        "topicNumber": "Topic 4.1 & 4.2",
        "name": "Net Ionic Equations & Precipitation",
        "subtitle": "Molecular, complete ionic, net ionic equations, and spectator ions",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem4-l1-q1",
            "stem": "When aqueous lead(II) nitrate ($Pb(NO_3)_2$) is mixed with aqueous potassium iodide ($KI$), a brilliant yellow precipitate forms. What is the correct balanced net ionic equation for this reaction?",
            "options": [
              "$Pb(NO_3)_2(aq) + 2KI(aq) \\rightarrow PbI_2(s) + 2KNO_3(aq)$",
              "$K^+(aq) + NO_3^-(aq) \\rightarrow KNO_3(s)$",
              "$Pb^{2+}(aq) + 2I^-(aq) \\rightarrow PbI_2(s)$",
              "$Pb^{2+}(aq) + 2K^+(aq) + 2NO_3^-(aq) + 2I^-(aq) \\rightarrow PbI_2(s) + 2K^+(aq) + 2NO_3^-(aq)$"
            ],
            "correctIndex": 2,
            "explanation": "Potassium ($K^+$) and nitrate ($NO_3^-$) are completely soluble spectator ions that remain dissolved in solution. The net ionic equation includes only the ions that combine to form the insoluble lead(II) iodide precipitate: $Pb^{2+}(aq) + 2I^-(aq) \\rightarrow PbI_2(s)$.",
            "distractorTip": "Spectator ions appear on both sides of the complete ionic equation in identical form and MUST be canceled out in the net ionic equation."
          },
          {
            "id": "chem4-l1-q2",
            "stem": "Which combination of aqueous salt solutions will NOT produce a precipitate upon mixing?",
            "options": [
              "$CaCl_2(aq)$ and $Na_2CO_3(aq)$",
              "$BaCl_2(aq)$ and $Na_2SO_4(aq)$",
              "$AgNO_3(aq)$ and $NaBr(aq)$",
              "$NaNO_3(aq)$ and $KCl(aq)$"
            ],
            "correctIndex": 3,
            "explanation": "All sodium salts, potassium salts, chloride salts, and nitrate salts are soluble. When $NaNO_3$ and $KCl$ mix, all potential ion pairs ($NaCl, KNO_3$) are completely soluble, meaning all ions remain dissolved as spectators (no reaction). By contrast: $BaSO_4$, $AgBr$, and $CaCO_3$ are insoluble precipitates.",
            "distractorTip": "Remember the \"NAG SAG\" solubility rule: Nitrates, Acetates, Group 1 ions, Sulfates, Ammonium, Group 17 halogens are generally soluble."
          },
          {
            "id": "chem4-l1-q3",
            "stem": "What is the net ionic equation for the precipitation reaction that occurs when aqueous solutions of silver nitrate ($AgNO_3$) and sodium chloride ($NaCl$) are mixed?",
            "options": [
              "$Na^+(aq) + NO_3^-(aq) \\to NaNO_3(s)$",
              "$Ag^+(aq) + Cl^-(aq) \\to AgCl(s)$",
              "$AgNO_3(aq) + NaCl(aq) \\to AgCl(s) + NaNO_3(aq)$",
              "$Ag^+(aq) + NO_3^-(aq) + Na^+(aq) + Cl^-(aq) \\to AgCl(s) + Na^+(aq) + NO_3^-(aq)$"
            ],
            "correctIndex": 1,
            "explanation": "In aqueous solution, $AgNO_3$ and $NaCl$ dissociate completely into spectator ions ($Na^+$ and $NO_3^-$) and reactive ions ($Ag^+$ and $Cl^-$). Spectator ions cancel out, leaving the net ionic equation: $Ag^+(aq) + Cl^-(aq) \\to AgCl(s)$.",
            "distractorTip": "Net ionic equations omit spectator ions (ions that remain dissolved and unchanged on both sides of the equation)."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "chem-u4-l2",
        "topicNumber": "Topic 4.3 & 4.4",
        "name": "Particulate Models & Reaction Representations",
        "subtitle": "Conservation of mass, physical vs chemical processes, and limiting particle diagrams",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem4-l2-q1",
            "stem": "A closed container initially contains 6 molecules of $H_2$ gas and 2 molecules of $O_2$ gas. The mixture is sparked, reacting completely via $2H_2(g) + O_2(g) \\rightarrow 2H_2O(g)$. What will be present in the container after the reaction is complete?",
            "options": [
              "4 molecules of $H_2O$ and 2 unreacted molecules of $H_2$",
              "6 molecules of $H_2O$ and 0 molecules of $H_2$",
              "4 molecules of $H_2O$ and 1 molecule of $O_2$",
              "2 molecules of $H_2O$ and 4 molecules of $H_2$"
            ],
            "correctIndex": 0,
            "explanation": "The stoichiometric ratio is 2 $H_2$ : 1 $O_2$. The 2 molecules of $O_2$ will consume exactly $2 \\times 2 = 4$ molecules of $H_2$, producing 4 molecules of $H_2O$. Since we started with 6 molecules of $H_2$, $6 - 4 = 2$ molecules of $H_2$ remain unreacted as excess.",
            "distractorTip": "Always track both: (1) amount of product formed from the limiting reactant, and (2) excess reactant remaining!"
          },
          {
            "id": "chem4-l2-q2",
            "stem": "Which process represents a physical change rather than a chemical change?",
            "options": [
              "Electrolysis of water: $2H_2O(l) \\rightarrow 2H_2(g) + O_2(g)$",
              "Boiling liquid ethanol: $C_2H_5OH(l) \\rightarrow C_2H_5OH(g)$, breaking intermolecular hydrogen bonds between molecules without breaking intramolecular covalent bonds.",
              "Rusting of an iron nail: $4Fe(s) + 3O_2(g) \\rightarrow 2Fe_2O_3(s)$",
              "Combustion of propane: $C_3H_8(g) + 5O_2(g) \\rightarrow 3CO_2(g) + 4H_2O(g)$"
            ],
            "correctIndex": 1,
            "explanation": "Physical changes alter state or appearance without breaking intramolecular chemical bonds or creating new substances. Vaporizing ethanol breaks only intermolecular hydrogen bonds and dispersion forces between separate ethanol molecules; covalent bonds within the molecule remain intact.",
            "distractorTip": "Phase changes and dissolving of molecular substances are PHYSICAL; processes that break and form chemical bonds are CHEMICAL."
          },
          {
            "id": "chem4-l2-q3",
            "stem": "A reaction vessel contains 4 molecules of $N_2$ gas and 9 molecules of $H_2$ gas that react according to: $N_2(g) + 3H_2(g) \\to 2NH_3(g)$. How many molecules of $NH_3$ are produced, and which reactant is in excess?",
            "options": [
              "8 molecules of NH₃ produced; H₂ in excess",
              "6 molecules of NH₃ produced; N₂ in excess (1 molecule of N₂ unreacted)",
              "9 molecules of NH₃ produced; N₂ in excess",
              "6 molecules of NH₃ produced; zero excess reactants"
            ],
            "correctIndex": 1,
            "explanation": "9 molecules of $H_2$ require $9 / 3 = 3$ molecules of $N_2$ to react completely. Since 4 molecules of $N_2$ are available, $H_2$ is the limiting reactant. 9 molecules of $H_2$ produce $9 \\times (2/3) = 6$ molecules of $NH_3$. 1 molecule of $N_2$ ($4 - 3 = 1$) remains unreacted in excess.",
            "distractorTip": "Limiting reactant problem: Identify the reactant that runs out first to find theoretical product yield."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "chem-u4-l3",
        "topicNumber": "Topic 4.5",
        "name": "Stoichiometry & Limiting Reactants",
        "subtitle": "Theoretical yield, excess reactant mass, and percent yield calculations",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem4-l3-q1",
            "stem": "For the Haber process reaction $N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$, $28.0\\,\\text{g}$ of $N_2$ ($M = 28.02\\,\\text{g/mol}$) is reacted with $9.00\\,\\text{g}$ of $H_2$ ($M = 2.016\\,\\text{g/mol}$). What is the maximum mass of ammonia ($NH_3$, $M = 17.03\\,\\text{g/mol}$) that can be synthesized?",
            "options": [
              "$17.0\\,\\text{g}$",
              "$51.1\\,\\text{g}$",
              "$34.0\\,\\text{g}$",
              "$68.0\\,\\text{g}$"
            ],
            "correctIndex": 2,
            "explanation": "Moles available: $N_2 = 28.0 / 28.02 = 1.00\\,\\text{mol}$; $H_2 = 9.00 / 2.016 = 4.46\\,\\text{mol}$. Stoichiometry requires $3\\,\\text{mol } H_2$ per $1\\,\\text{mol } N_2$, so $1.00\\,\\text{mol } N_2$ requires $3.00\\,\\text{mol } H_2$. Because we have $4.46\\,\\text{mol } H_2$, $N_2$ is limiting. Moles of $NH_3$ formed $= 1.00\\,\\text{mol } N_2 \\times 2 = 2.00\\,\\text{mol } NH_3$. Theoretical yield $= 2.00\\,\\text{mol} \\times 17.03\\,\\text{g/mol} = 34.06 \\approx 34.0\\,\\text{g}$.",
            "distractorTip": "Divide available moles by balanced equation coefficients to find the limiting reactant: $N_2: 1.00/1 = 1.00$; $H_2: 4.46/3 = 1.49$. $N_2$ is smaller $\\to$ limiting."
          },
          {
            "id": "chem4-l3-q2",
            "stem": "A student synthesizes aspirin ($C_9H_8O_4$) in the laboratory. The calculated theoretical yield is $4.50\\,\\text{g}$, but after filtering and drying, the student collects $3.60\\,\\text{g}$ of purified aspirin crystals. What is the percent yield of this synthesis?",
            "options": [
              "$90.0\\%$",
              "$125\\%$",
              "$20.0\\%$",
              "$80.0\\%$"
            ],
            "correctIndex": 3,
            "explanation": "$\\text{Percent Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100\\% = \\frac{3.60\\,\\text{g}}{4.50\\,\\text{g}} \\times 100\\% = 0.800 \\times 100\\% = 80.0\\%$.",
            "distractorTip": "Actual yield goes in numerator (what was collected in lab); Theoretical yield goes in denominator (calculated maximum)."
          },
          {
            "id": "chem4-l3-q3",
            "stem": "What volume of $0.200\\text{ M } NaOH$ solution is required to completely neutralize $25.0\\text{ mL}$ of $0.100\\text{ M } H_2SO_4$ solution?",
            "options": [
              "12.5 mL",
              "50.0 mL",
              "25.0 mL",
              "100.0 mL"
            ],
            "correctIndex": 2,
            "explanation": "$H_2SO_4$ is diprotic: $H_2SO_4 + 2NaOH \\to Na_2SO_4 + 2H_2O$. Moles of $H_2SO_4 = (0.0250\\text{ L})(0.100\\text{ M}) = 0.00250\\text{ mol}$. Moles of $NaOH$ needed $= 2 \\times 0.00250 = 0.00500\\text{ mol}$. Volume of $NaOH = \\frac{0.00500\\text{ mol}}{0.200\\text{ M}} = 0.0250\\text{ L} = 25.0\\text{ mL}$.",
            "distractorTip": "Watch out for diprotic acids! $H_2SO_4$ releases TWO protons ($H^+$), requiring twice the moles of $NaOH$."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "chem-u4-l4",
        "topicNumber": "Topic 4.6 & 4.7",
        "name": "Types of Reactions & Acid-Base Titrations",
        "subtitle": "Brønsted-Lowry conjugate pairs, equivalence point stoichiometry, and indicator selection",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem4-l4-q1",
            "stem": "In the forward Brønsted-Lowry reaction $H_2PO_4^-(aq) + NH_3(aq) \\rightleftharpoons HPO_4^{2-}(aq) + NH_4^+(aq)$, which species act as the Brønsted-Lowry acid and its conjugate base?",
            "options": [
              "$H_2PO_4^-$ is the acid, and $HPO_4^{2-}$ is its conjugate base.",
              "$NH_3$ is the acid, and $NH_4^+$ is its conjugate base.",
              "$H_2PO_4^-$ is the base, and $NH_4^+$ is its conjugate acid.",
              "$HPO_4^{2-}$ is the acid, and $H_2PO_4^-$ is its conjugate base."
            ],
            "correctIndex": 0,
            "explanation": "A Brønsted-Lowry acid donates a proton ($H^+$); a Brønsted-Lowry base accepts a proton. Here, $H_2PO_4^-$ donates a proton to become $HPO_4^{2-}$, making $H_2PO_4^-$ the acid and $HPO_4^{2-}$ its conjugate base. $NH_3$ accepts the proton to become $NH_4^+$ (conjugate acid).",
            "distractorTip": "Conjugate acid-base pairs differ by exactly ONE proton ($H^+$)."
          },
          {
            "id": "chem4-l4-q2",
            "stem": "It requires $25.00\\,\\text{mL}$ of a standardized $0.200\\,\\text{M } NaOH$ solution to neutralize completely $50.00\\,\\text{mL}$ of an unknown monoprotic hydrochloric acid solution ($HCl$). What is the molarity of the $HCl$ solution?",
            "options": [
              "$0.200\\,\\text{M}$",
              "$0.100\\,\\text{M}$",
              "$0.400\\,\\text{M}$",
              "$0.050\\,\\text{M}$"
            ],
            "correctIndex": 1,
            "explanation": "At the equivalence point for a 1:1 reaction ($HCl + NaOH \\rightarrow NaCl + H_2O$): $M_A V_A = M_B V_B$. $M_A \\times 50.00\\,\\text{mL} = 0.200\\,\\text{M} \\times 25.00\\,\\text{mL} \\implies M_A = \\frac{5.00}{50.00} = 0.100\\,\\text{M}$.",
            "distractorTip": "If volume of acid is twice the volume of base, concentration of acid must be half the concentration of base."
          },
          {
            "id": "chem4-l4-q3",
            "stem": "In the redox reaction $Zn(s) + 2HCl(aq) \\to ZnCl_2(aq) + H_2(g)$, which species is oxidized and which is the reducing agent?",
            "options": [
              "Hydrogen is oxidized; Zinc is the reducing agent.",
              "Zinc is oxidized (oxidation state changes from 0 to +2), and Zinc is the reducing agent.",
              "Chlorine is oxidized; Hydrogen is the reducing agent.",
              "Zinc is reduced; HCl is the reducing agent."
            ],
            "correctIndex": 1,
            "explanation": "Zinc starts with an oxidation state of 0 and becomes $+2$ in $ZnCl_2$, losing electrons (oxidation). Because Zinc donates electrons to hydrogen ions, Zinc is the reducing agent. Hydrogen ions gain electrons (reduction from $+1$ to 0).",
            "distractorTip": "OIL RIG: Oxidation Is Loss, Reduction Is Gain. The substance that is OXIDIZED is the REDUCING AGENT."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "chem-u4-l5",
        "topicNumber": "Topic 4.8",
        "name": "Oxidation-Reduction (Redox) Reactions",
        "subtitle": "Oxidation numbers, oxidizing/reducing agents, and balancing in acidic solution",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem4-l5-q1",
            "stem": "In the unbalanced redox reaction $Cu(s) + NO_3^-(aq) \\rightarrow Cu^{2+}(aq) + NO_2(g)$, what is the coefficient of $H^+(aq)$ when the reaction is fully balanced in acidic solution using the half-reaction method?",
            "options": [
              "$8H^+(aq)$",
              "$2H^+(aq)$",
              "$4H^+(aq)$",
              "$6H^+(aq)$"
            ],
            "correctIndex": 2,
            "explanation": "Oxidation half-reaction: $Cu \\rightarrow Cu^{2+} + 2e^-$. Reduction half-reaction: $NO_3^- + 2H^+ + e^- \\rightarrow NO_2 + H_2O$. Multiply the reduction half-reaction by 2 to balance electrons: $2NO_3^- + 4H^+ + 2e^- \\rightarrow 2NO_2 + 2H_2O$. Adding gives: $Cu(s) + 2NO_3^-(aq) + 4H^+(aq) \\rightarrow Cu^{2+}(aq) + 2NO_2(g) + 2H_2O(l)$. The coefficient of $H^+$ is 4.",
            "distractorTip": "In acidic solution: balance O with $H_2O$, balance H with $H^+$, then balance charge with electrons ($e^-$)."
          },
          {
            "id": "chem4-l5-q2",
            "stem": "Consider the reaction $2Al(s) + 3Fe^{2+}(aq) \\rightarrow 2Al^{3+}(aq) + 3Fe(s)$. What is the oxidizing agent, and how many moles of electrons are transferred per mole of the balanced equation?",
            "options": [
              "$Al^{3+}(aq)$ is the oxidizing agent; 6 moles of electrons are transferred.",
              "$Al(s)$ is the oxidizing agent; 3 moles of electrons are transferred.",
              "$Fe^{2+}(aq)$ is the reducing agent; 2 moles of electrons are transferred.",
              "$Fe^{2+}(aq)$ is the oxidizing agent; 6 moles of electrons are transferred."
            ],
            "correctIndex": 3,
            "explanation": "$Al$ goes from 0 to $+3$ (oxidized, acts as reducing agent). $Fe^{2+}$ goes from $+2$ to 0 (reduced, acts as oxidizing agent). Each Al loses $3e^-$ ($2 \\times 3 = 6e^-$); each Fe gains $2e^-$ ($3 \\times 2 = 6e^-$). Total electrons transferred $n = 6\\,\\text{mol}$.",
            "distractorTip": "The species that is REDUCED is the OXIDIZING AGENT!"
          },
          {
            "id": "chem4-l5-q3",
            "stem": "What is the oxidation number of manganese in the permanganate ion ($MnO_4^-$)?",
            "options": [
              "+4",
              "+2",
              "+7",
              "+6"
            ],
            "correctIndex": 2,
            "explanation": "Oxygen has an oxidation state of $-2$. Four oxygens contribute $4 \\times (-2) = -8$. The overall charge of the polyatomic ion is $-1$. Therefore: $\\text{Ox}(Mn) + (-8) = -1 \\implies \\text{Ox}(Mn) = +7$.",
            "distractorTip": "The sum of oxidation numbers in a polyatomic ion must equal the overall charge of the ion."
          }
        ]
      },
      {
        "id": 406,
        "unitIndex": 4,
        "levelNumber": 6,
        "uniqueKey": "chem-u4-l6",
        "topicNumber": "Unit 4 Boss",
        "name": "Stoichiometric & Redox Titration Crucible",
        "subtitle": "Multi-concept synthesis: Permanganate redox titration and iron ore mass percent assay",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "chem4-l6-q1",
            "stem": "A $1.200\\,\\text{g}$ iron ore sample is dissolved in acid, reducing all iron to $Fe^{2+}(aq)$. The solution is titrated to a faint pink endpoint with $0.0250\\,\\text{M } KMnO_4(aq)$ solution according to: $5Fe^{2+} + MnO_4^- + 8H^+ \\rightarrow 5Fe^{3+} + Mn^{2+} + 4H_2O$. If the titration requires $32.00\\,\\text{mL}$ of $KMnO_4$, what is the mass percentage of iron in the ore? ($M_{Fe} = 55.85\\,\\text{g/mol}$)",
            "options": [
              "$18.6\\%$",
              "$3.72\\%$",
              "$37.2\\%$",
              "$9.31\\%$"
            ],
            "correctIndex": 0,
            "explanation": "1. Moles $MnO_4^- = 0.03200\\,\\text{L} \\times 0.0250\\,\\text{mol/L} = 8.00 \\times 10^{-4}\\,\\text{mol}$. 2. Moles $Fe^{2+} = (8.00 \\times 10^{-4}) \\times 5 = 4.00 \\times 10^{-3}\\,\\text{mol } Fe$. 3. Mass of Fe $= (4.00 \\times 10^{-3}\\,\\text{mol}) \\times 55.85\\,\\text{g/mol} = 0.2234\\,\\text{g}$. 4. Mass percent in ore $= \\frac{0.2234\\,\\text{g}}{1.200\\,\\text{g}} \\times 100\\% = 18.62\\% \\approx 18.6\\%$.",
            "distractorTip": "AP Chem Trap: Don't forget the 5:1 stoichiometric ratio between $Fe^{2+}$ and $MnO_4^-$!"
          },
          {
            "id": "chem4-l6-q2",
            "stem": "In the redox titration of oxalic acid ($H_2C_2O_4$) with potassium permanganate ($KMnO_4$), why is no external chemical indicator (such as phenolphthalein) required to detect the equivalence point?",
            "options": [
              "Oxalic acid turns bright yellow at pH 7.",
              "$MnO_4^-$ serves as its own indicator: intense purple $MnO_4^-$ is reduced to colorless $Mn^{2+}$ during titration; the first drop of excess unreacted $MnO_4^-$ imparts a permanent faint pink tint to the solution.",
              "Carbon dioxide gas bubbling out signals the exact equivalence point.",
              "The temperature drops to absolute zero when the reaction finishes."
            ],
            "correctIndex": 1,
            "explanation": "Permanganate titrations are self-indicating. The $MnO_4^-$ ion has an intense dark purple color, whereas the reduced product $Mn^{2+}$ is virtually colorless. As long as reducing agent ($Fe^{2+}$ or oxalate) is present, added $MnO_4^-$ is instantly decolored. The instant all analyte is consumed, the very next drop of $MnO_4^-$ remains unreacted, turning the solution permanently faint pink.",
            "distractorTip": "$KMnO_4$ acts as an internal self-indicator; the permanent faint pink color indicates the endpoint."
          },
          {
            "id": "chem4-l6-q3",
            "stem": "A student performs a gravimetric analysis to determine the percent chloride in an unknown salt by precipitating $AgCl(s)$. If the student fails to dry the precipitate completely before final weighing, how will the calculated percent chloride be affected?",
            "options": [
              "The calculated percentage will be falsely high because residual water adds mass to the weighed precipitate.",
              "The calculated percentage will be falsely low.",
              "The calculated percentage will remain unaffected because water evaporates in the balance chamber.",
              "The silver chloride will decompose into metallic silver."
            ],
            "correctIndex": 0,
            "explanation": "Residual moisture in the filter paper or precipitate increases the measured mass of $AgCl$. Because calculations assume all weighed mass is pure dry $AgCl$, this overestimates the moles of chloride, resulting in a falsely high calculated percentage.",
            "distractorTip": "Wet precipitate error in gravimetric analysis: excess water mass $\\implies$ calculated product mass too high $\\implies$ calculated % too high."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Unit 5: Kinetics",
    "shortTitle": "Unit 5: Kinetics",
    "description": "Reaction rates, differential rate laws, integrated rate laws, half-life, collision model, activation energy, Arrhenius equation, and reaction mechanisms",
    "examWeight": "7–9% of AP Exam",
    "biome": {
      "name": "Catalyst Canyon & Reaction Pathway",
      "icon": "⏱️",
      "accentColor": "#F59E0B",
      "secondaryColor": "#D97706",
      "groundGradient": "from-amber-100 via-yellow-50 to-orange-100",
      "cardBorder": "border-amber-500",
      "trailColor": "#f59e0b",
      "nodeRing": "ring-amber-400/40",
      "skyTint": "from-amber-50 to-orange-50/30"
    },
    "levels": [
      {
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "chem-u5-l1",
        "topicNumber": "Topic 5.1 & 5.2",
        "name": "Reaction Rates & Rate Laws",
        "subtitle": "Rates of consumption/formation and initial rates method",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch5-l1-q1",
            "stem": "For the reaction $2NO(g) + O_2(g) \\rightarrow 2NO_2(g)$, the rate of disappearance of $NO$ is measured as $0.040\\,\\text{M/s}$. What is the rate of disappearance of $O_2$ and the rate of appearance of $NO_2$?",
            "options": [
              "Rate of $O_2$ disappearance = $0.080\\,\\text{M/s}$; Rate of $NO_2$ appearance = $0.020\\,\\text{M/s}$",
              "Rate of $O_2$ disappearance = $0.040\\,\\text{M/s}$; Rate of $NO_2$ appearance = $0.080\\,\\text{M/s}$",
              "Rate of $O_2$ disappearance = $0.020\\,\\text{M/s}$; Rate of $NO_2$ appearance = $0.040\\,\\text{M/s}$",
              "All rates are identical to $0.040\\,\\text{M/s}$."
            ],
            "correctIndex": 2,
            "explanation": "Relative rates relate via stoichiometric coefficients: $\\text{Rate} = -\\frac{1}{2}\\frac{\\Delta [NO]}{\\Delta t} = -\\frac{\\Delta [O_2]}{\\Delta t} = +\\frac{1}{2}\\frac{\\Delta [NO_2]}{\\Delta t}$. Since $-\\frac{\\Delta [NO]}{\\Delta t} = 0.040\\,\\text{M/s}$, $-\\frac{\\Delta [O_2]}{\\Delta t} = 0.040 / 2 = 0.020\\,\\text{M/s}$, and $+\\frac{\\Delta [NO_2]}{\\Delta t} = 0.040\\,\\text{M/s}$.",
            "distractorTip": "Divide each rate by its stoichiometric coefficient in the balanced equation!"
          },
          {
            "id": "ch5-l1-q2",
            "stem": "Initial rate experiments for $A + 2B \\rightarrow C$ show: doubling $[A]$ quadruples the rate, while doubling $[B]$ doubles the rate. What is the overall rate law and the overall reaction order?",
            "options": [
              "$\\text{Rate} = k[A][B]$; overall order = 2",
              "$\\text{Rate} = k[A][B]^2$; overall order = 3",
              "$\\text{Rate} = k[A]^2[B]^2$; overall order = 4",
              "$\\text{Rate} = k[A]^2[B]$; overall order = 3"
            ],
            "correctIndex": 3,
            "explanation": "Doubling $[A]$ increases rate by $2^m = 4 \\implies m = 2$ (second order in A). Doubling $[B]$ increases rate by $2^n = 2 \\implies n = 1$ (first order in B). Overall rate law is $\\text{Rate} = k[A]^2[B]$, with overall order $2 + 1 = 3$.",
            "distractorTip": "Reaction orders are determined EXPERIMENTALLY, NOT from balanced chemical equation coefficients!"
          },
          {
            "id": "chem5-l1-q3",
            "stem": "For the reaction $2A + B \\to C$, experimental data shows that doubling the concentration of $A$ quadruples the initial reaction rate, while doubling the concentration of $B$ has no effect on the rate. What is the rate law?",
            "options": [
              "$\\text{Rate} = k[A][B]$",
              "$\\text{Rate} = k[A]^2$",
              "$\\text{Rate} = k[A]^2[B]$",
              "$\\text{Rate} = k[A][B]^2$"
            ],
            "correctIndex": 1,
            "explanation": "Doubling $[A]$ quadruples rate ($2^m = 4 \\implies m = 2$), so the reaction is second order in $A$. Doubling $[B]$ has zero effect ($2^n = 1 \\implies n = 0$), so the reaction is zero order in $B$. The rate law is $\\text{Rate} = k[A]^2$.",
            "distractorTip": "Reaction orders must be determined from experimental data, NEVER from stoichiometric coefficients of the overall equation!"
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "chem-u5-l2",
        "topicNumber": "Topic 5.3",
        "name": "Integrated Rate Laws & Half-Life",
        "subtitle": "Zero, first, and second order graphs, linear slopes, and half-life calculations",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch5-l2-q1",
            "stem": "A plot of $1/[A]$ versus time yields a straight line with a positive slope of $0.050\\,\\text{M}^{-1}\\text{s}^{-1}$. What is the reaction order with respect to $A$, and what are the units of the rate constant $k$?",
            "options": [
              "Second order; rate constant $k = 0.050\\,\\text{M}^{-1}\\text{s}^{-1}$",
              "First order; rate constant $k = 0.050\\,\\text{s}^{-1}$",
              "Zero order; rate constant $k = 0.050\\,\\text{M}\\cdot\\text{s}^{-1}$",
              "Second order; rate constant $k = -0.050\\,\\text{M}^{-1}\\text{s}^{-1}$"
            ],
            "correctIndex": 0,
            "explanation": "The integrated rate law for a 2nd order reaction is $\\frac{1}{[A]_t} = kt + \\frac{1}{[A]_0}$. A plot of $1/[A]$ vs $t$ produces a straight line with a positive slope equal to $+k$. The units for a second order rate constant are $\\text{M}^{-1}\\text{s}^{-1}$ (or $\\text{L}/(\\text{mol}\\cdot\\text{s})$).",
            "distractorTip": "Linear plot guide: $[A]$ vs $t$ is Zero order; $\\ln[A]$ vs $t$ is First order; $1/[A]$ vs $t$ is Second order (positive slope)."
          },
          {
            "id": "ch5-l2-q2",
            "stem": "A radioactive isotope decomposes via first-order kinetics with a half-life of $14.0\\,\\text{days}$. If a hospital receives an initial sample of $80.0\\,\\text{mg}$, how much of the isotope remains after $42.0\\,\\text{days}$?",
            "options": [
              "$20.0\\,\\text{mg}$",
              "$10.0\\,\\text{mg}$",
              "$5.00\\,\\text{mg}$",
              "$26.7\\,\\text{mg}$"
            ],
            "correctIndex": 1,
            "explanation": "Number of half-lives elapsed $= \\frac{42.0\\,\\text{days}}{14.0\\,\\text{days}} = 3$ half-lives. Fraction remaining $= (1/2)^3 = 1/8$. Remaining mass $= 80.0\\,\\text{mg} \\times (1/8) = 10.0\\,\\text{mg}$.",
            "distractorTip": "For first-order processes, half-life is constant ($t_{1/2} = 0.693/k$) and independent of initial concentration."
          },
          {
            "id": "chem5-l2-q3",
            "stem": "A plot of $\\ln[A]$ versus time for a chemical decomposition produces a straight line with a negative slope. What is the reaction order with respect to $A$, and what does the slope equal?",
            "options": [
              "Zero order; $\\text{slope} = -k$",
              "First order; $\\text{slope} = -k$",
              "Second order; $\\text{slope} = +k$",
              "First order; $\\text{slope} = -1/k$"
            ],
            "correctIndex": 1,
            "explanation": "Integrated rate laws: $[A]$ vs $t$ linear $\\implies$ Zero order (slope = $-k$). $\\ln[A]$ vs $t$ linear $\\implies$ First order (slope = $-k$). $1/[A]$ vs $t$ linear $\\implies$ Second order (slope = $+k$).",
            "distractorTip": "Linear plot memory trick: 0th order = $[A]$; 1st order = $\\ln[A]$; 2nd order = $1/[A]$."
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "chem-u5-l3",
        "topicNumber": "Topic 5.4 & 5.5",
        "name": "Collision Theory & Arrhenius Equation",
        "subtitle": "Molecular orientation, activation energy barrier, and temperature dependence of k",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch5-l3-q1",
            "stem": "According to Collision Theory, why does increasing the temperature by only $10^\\circ\\text{C}$ often double the rate of a chemical reaction, even though the average molecular kinetic energy increases by only a few percent?",
            "options": [
              "Molecules stop rotating and only collide head-on at higher temperatures.",
              "Temperature increases lower the activation energy of the reaction.",
              "A small temperature increase dramatically expands the fraction of colliding molecules with kinetic energy greater than or equal to the activation energy ($E \\ge E_a$) in the high-energy tail of the Maxwell-Boltzmann distribution.",
              "The collision frequency increases by a factor of two."
            ],
            "correctIndex": 2,
            "explanation": "While total collision frequency increases only slightly (~1–2%), the exponential factor $e^{-E_a/RT}$ in the Arrhenius equation increases dramatically. In the Maxwell-Boltzmann distribution, shifting the curve slightly rightward substantially increases the area under the curve beyond the threshold $E_a$.",
            "distractorTip": "Temperature does NOT change $E_a$! Temperature increases the FRACTION of molecules that possess $E \\ge E_a$."
          },
          {
            "id": "ch5-l3-q2",
            "stem": "A plot of $\\ln k$ versus $1/T$ (in Kelvin) yields a straight line with a slope of $-1.20 \\times 10^4\\,\\text{K}$. What is the activation energy ($E_a$) of the reaction? ($R = 8.314\\,\\text{J/}(\\text{mol}\\cdot\\text{K})$)",
            "options": [
              "$-99.8\\,\\text{kJ/mol}$",
              "$12.0\\,\\text{kJ/mol}$",
              "$1.44\\,\\text{kJ/mol}$",
              "$99.8\\,\\text{kJ/mol}$"
            ],
            "correctIndex": 3,
            "explanation": "Linearized Arrhenius equation: $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$. Slope $= -\\frac{E_a}{R}$. Therefore, $E_a = -(\\text{slope}) \\times R = -(-1.20 \\times 10^4\\,\\text{K}) \\times (8.314\\,\\text{J/}(\\text{mol}\\cdot\\text{K})) = 9.977 \\times 10^4\\,\\text{J/mol} \\approx 99.8\\,\\text{kJ/mol}$.",
            "distractorTip": "Slope of $\\ln k$ vs $1/T$ is always $-E_a/R$. Activation energy $E_a$ is always positive!"
          },
          {
            "id": "chem5-l3-q3",
            "stem": "Why does increasing the temperature of a reaction mixture by just $10^\\circ\\text{C}$ often double the rate of a chemical reaction, even though average kinetic energy increases by only a few percent?",
            "options": [
              "Temperature lowers the activation energy barrier of the reaction.",
              "The collision frequency doubles.",
              "A much larger fraction of colliding molecules possesses kinetic energy equal to or exceeding the activation energy ($E \\ge E_a$), as shown on a Maxwell-Boltzmann distribution.",
              "Higher temperature increases the orientation factor $p$."
            ],
            "correctIndex": 2,
            "explanation": "According to collision theory and the Maxwell-Boltzmann distribution, a modest temperature increase significantly broadens the high-energy tail of the curve, exponentially increasing the fraction of collisions with $E \\ge E_a$. (Collision frequency increases only slightly, $\\propto \\sqrt{T}$).",
            "distractorTip": "Higher temperature speeds up reactions because MORE molecules possess sufficient kinetic energy ($E \\ge E_a$), NOT simply because they collide more frequently."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "chem-u5-l4",
        "topicNumber": "Topic 5.6",
        "name": "Reaction Energy Profiles",
        "subtitle": "Transition states, activation energy, and endothermic vs exothermic energy curves",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch5-l4-q1",
            "stem": "For a reversible reaction $A + B \\rightleftharpoons C + D$, the forward activation energy is $E_{a,\\text{fwd}} = 65\\,\\text{kJ/mol}$ and the enthalpy of reaction is $\\Delta H = -25\\,\\text{kJ/mol}$. What is the activation energy for the reverse reaction ($E_{a,\\text{rev}}$)?",
            "options": [
              "$90\\,\\text{kJ/mol}$",
              "$40\\,\\text{kJ/mol}$",
              "$-25\\,\\text{kJ/mol}$",
              "$65\\,\\text{kJ/mol}$"
            ],
            "correctIndex": 0,
            "explanation": "From the energy profile: $\\Delta H = E_{a,\\text{fwd}} - E_{a,\\text{rev}} \\implies -25 = 65 - E_{a,\\text{rev}} \\implies E_{a,\\text{rev}} = 65 - (-25) = 90\\,\\text{kJ/mol}$. Because the reaction is exothermic, products lie $25\\,\\text{kJ}$ lower than reactants, so the reverse reaction must climb an extra $25\\,\\text{kJ}$.",
            "distractorTip": "Reverse activation energy is always higher than forward activation energy for an exothermic reaction: $E_{a,\\text{rev}} = E_{a,\\text{fwd}} - \\Delta H$."
          },
          {
            "id": "ch5-l4-q2",
            "stem": "What molecular entity exists at the peak of the potential energy barrier in a reaction energy profile diagram?",
            "options": [
              "A stable reaction intermediate that can be isolated.",
              "The activated complex (transition state), an unstable high-energy configuration with partially broken and partially formed chemical bonds.",
              "The catalyst-substrate complex in its lowest potential energy state.",
              "Fully dissociated free electrons."
            ],
            "correctIndex": 1,
            "explanation": "The peak of the potential energy curve corresponds to the transition state (activated complex). It is a transient, unstable arrangement of atoms with partial bonds undergoing rearrangement and cannot be isolated. Intermediates exist at local energy valleys (troughs), not at the peaks.",
            "distractorTip": "Transition states occur at energy PEAKS; Reaction intermediates occur at energy VALLEYS between elementary steps."
          },
          {
            "id": "chem5-l4-q3",
            "stem": "On a reaction energy profile diagram, what does the energy difference between the reactants and the peak of the potential energy curve represent?",
            "options": [
              "The change in enthalpy ($\\Delta H$) of the reaction.",
              "The activation energy ($E_a$) of the forward reaction.",
              "The free energy change ($\\Delta G$) of the reaction.",
              "The energy of the reaction intermediate."
            ],
            "correctIndex": 1,
            "explanation": "The activation energy ($E_a$) is the minimum kinetic energy colliding reactants must possess to overcome repulsive forces and reach the transition state (the peak of the potential energy barrier). The difference between products and reactants is $\\Delta H$.",
            "distractorTip": "Peak minus Reactants = Forward $E_a$; Products minus Reactants = $\\Delta H$."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "chem-u5-l5",
        "topicNumber": "Topic 5.7 & 5.8",
        "name": "Reaction Mechanisms & Rate-Determining Steps",
        "subtitle": "Elementary steps, molecularity, intermediates, and deriving rate laws from mechanisms",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch5-l5-q1",
            "stem": "A proposed reaction mechanism is: Step 1: $NO_2 + NO_2 \\rightarrow NO_3 + NO$ (slow); Step 2: $NO_3 + CO \\rightarrow NO_2 + CO_2$ (fast). What is the overall balanced equation, the rate law predicted by this mechanism, and the role of $NO_3$?",
            "options": [
              "Overall: $NO_2 + CO \\rightarrow NO + CO_2$; $\\text{Rate} = k[NO_2][CO]$; $NO_3$ is an intermediate.",
              "Overall: $2NO_2 + CO \\rightarrow NO + CO_2 + NO_3$; $\\text{Rate} = k[NO_2][CO]$; $NO_3$ is a catalyst.",
              "Overall: $NO_2 + CO \\rightarrow NO + CO_2$; $\\text{Rate} = k[NO_2]^2$; $NO_3$ is a reaction intermediate.",
              "Overall: $NO_3 + CO \\rightarrow NO_2 + CO_2$; $\\text{Rate} = k[NO_2]^2$; $NO_3$ is a spectator ion."
            ],
            "correctIndex": 2,
            "explanation": "Adding the steps: $2NO_2 + CO \\rightarrow NO + NO_2 + CO_2 \\implies NO_2 + CO \\rightarrow NO + CO_2$. The slow step is Step 1, so the rate law is dictated by Step 1: $\\text{Rate} = k[NO_2]^2$. $NO_3$ is produced in Step 1 and consumed in Step 2, so it is a reaction intermediate.",
            "distractorTip": "Intermediates are produced then consumed; Catalysts are consumed then regenerated. The slow step determines the rate law!"
          },
          {
            "id": "ch5-l5-q2",
            "stem": "Consider a mechanism with a fast reversible step followed by a slow step: Step 1: $2NO \\rightleftharpoons N_2O_2$ (fast equilibrium, $K_1 = k_1/k_{-1}$); Step 2: $N_2O_2 + O_2 \\rightarrow 2NO_2$ (slow, $k_2$). What is the overall rate law for the formation of $NO_2$?",
            "options": [
              "$\\text{Rate} = k[NO]^2$",
              "$\\text{Rate} = k[N_2O_2][O_2]$",
              "$\\text{Rate} = k[NO][O_2]$",
              "$\\text{Rate} = k[NO]^2[O_2]$"
            ],
            "correctIndex": 3,
            "explanation": "Rate is determined by the slow step: $\\text{Rate} = k_2[N_2O_2][O_2]$. However, $N_2O_2$ is an intermediate and cannot appear in the final rate law. From Step 1 equilibrium: $k_1[NO]^2 = k_{-1}[N_2O_2] \\implies [N_2O_2] = \\frac{k_1}{k_{-1}}[NO]^2$. Substituting gives: $\\text{Rate} = k_2 \\left(\\frac{k_1}{k_{-1}}[NO]^2\\right)[O_2] = k[NO]^2[O_2]$.",
            "distractorTip": "When a fast equilibrium precedes the slow step, substitute the intermediate using the equilibrium expression!"
          },
          {
            "id": "chem5-l5-q3",
            "stem": "Consider the two-step mechanism:\nStep 1: $NO_2 + NO_2 \\to NO_3 + NO$ (slow)\nStep 2: $NO_3 + CO \\to NO_2 + CO_2$ (fast)\nWhich species is a reaction intermediate, and what is the rate law?",
            "options": [
              "Intermediate is $CO$; $\\text{Rate} = k[NO_3][CO]$",
              "Intermediate is $NO$; $\\text{Rate} = k[NO_2][CO]$",
              "Intermediate is $NO_3$; $\\text{Rate} = k[NO_2]^2$",
              "Intermediate is $CO_2$; $\\text{Rate} = k[NO_2]$"
            ],
            "correctIndex": 2,
            "explanation": "$NO_3$ is produced in Step 1 and consumed in Step 2, so it is a reaction intermediate. The slow step is the rate-determining step, so the rate law is determined directly by Step 1 reactants: $\\text{Rate} = k[NO_2]^2$.",
            "distractorTip": "Reaction intermediate = produced in an early step, consumed in a later step; Catalyst = present at the start as a reactant, regenerated unchanged at the end."
          }
        ]
      },
      {
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "chem-u5-l6",
        "topicNumber": "Topic 5.9",
        "name": "Catalysis & Catalytic Mechanisms",
        "subtitle": "Homogeneous, heterogeneous, acid-base, and surface adsorption catalysts",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch5-l6-q1",
            "stem": "How does a solid platinum heterogeneous catalyst accelerate the hydrogenation of ethylene gas ($C_2H_4 + H_2 \\rightarrow C_2H_6$)?",
            "options": [
              "Hydrogen molecules adsorb onto the platinum metal surface and their H-H bonds dissociate into reactive atomic hydrogen, lowering the activation energy barrier for addition to ethylene.",
              "Platinum donates electrons to form stable $PtH_2$ ionic salt crystals.",
              "Platinum heats the gas mixture to $1000^\\circ\\text{C}$ through nuclear fusion.",
              "Platinum changes the overall reaction enthalpy $\\Delta H$ from exothermic to endothermic."
            ],
            "correctIndex": 0,
            "explanation": "Heterogeneous catalysts operate through adsorption: reactant gas molecules bind to active sites on the metal surface. This weakens or cleaves the intramolecular bonds (e.g. H-H bond) and orients reactants favorably, providing a lower-activation-energy pathway.",
            "distractorTip": "Heterogeneous catalyst = in a DIFFERENT phase than reactants (e.g. solid metal catalyst with gaseous reactants)."
          },
          {
            "id": "ch5-l6-q2",
            "stem": "Chlorofluorocarbons (CFCs) release chlorine radicals ($Cl^\\bullet$) in the stratosphere. In the destruction of ozone: Step 1: $Cl + O_3 \\rightarrow ClO + O_2$; Step 2: $ClO + O \\rightarrow Cl + O_2$. What are the roles of $Cl$ and $ClO$, respectively?",
            "options": [
              "$Cl$ is an intermediate; $ClO$ is a catalyst.",
              "$Cl$ is a catalyst; $ClO$ is an intermediate.",
              "Both $Cl$ and $ClO$ are catalysts.",
              "Both $Cl$ and $ClO$ are inert spectator ions."
            ],
            "correctIndex": 1,
            "explanation": "$Cl$ is present as a reactant in Step 1 and regenerated as a product in Step 2; it is not consumed in the overall reaction, so it is a CATALYST. $ClO$ is generated in Step 1 and consumed in Step 2, so it is an INTERMEDIATE.",
            "distractorTip": "Catalyst = IN in step 1, OUT in step 2; Intermediate = OUT in step 1, IN in step 2."
          },
          {
            "id": "chem5-l6-q3",
            "stem": "How does the addition of a catalyst increase the rate of a chemical reaction without altering the equilibrium constant ($K$)?",
            "options": [
              "A catalyst provides an alternative reaction pathway with a lower activation energy, accelerating both forward and reverse reaction rates equally.",
              "A catalyst increases the total enthalpy released by the reaction.",
              "A catalyst increases the temperature inside the reaction vessel.",
              "A catalyst shifts the reaction toward products by Le Châtelier's principle."
            ],
            "correctIndex": 0,
            "explanation": "Catalysts provide an alternative mechanism with a lower activation energy barrier ($E_a$). Because $E_a$ is lowered equally for both forward and reverse directions, both rates increase by the exact same factor, leaving the equilibrium position and $K$ completely unchanged.",
            "distractorTip": "Catalysts lower $E_a$ and speed up rate; they DO NOT change $\\Delta H, \\Delta G$, or the equilibrium constant $K$!"
          }
        ]
      },
      {
        "id": 507,
        "unitIndex": 5,
        "levelNumber": 7,
        "uniqueKey": "chem-u5-l7",
        "topicNumber": "Unit 5 Boss",
        "name": "Reaction Kinetics & Steady-State Nexus",
        "subtitle": "Multi-concept synthesis: Two-point Arrhenius calculations and complex pre-equilibrium mechanisms",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ch5-l7-q1",
            "stem": "A reaction has a rate constant $k_1 = 1.0 \\times 10^{-3}\\,\\text{s}^{-1}$ at $300\\,\\text{K}$ and $k_2 = 1.0 \\times 10^{-2}\\,\\text{s}^{-1}$ at $350\\,\\text{K}$. What is the activation energy $E_a$ of this reaction? ($R = 8.314\\,\\text{J/}(\\text{mol}\\cdot\\text{K})$)",
            "options": [
              "$20.1\\,\\text{kJ/mol}$",
              "$80.6\\,\\text{kJ/mol}$",
              "$40.3\\,\\text{kJ/mol}$",
              "$120.9\\,\\text{kJ/mol}$"
            ],
            "correctIndex": 2,
            "explanation": "Two-point Arrhenius equation: $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$. $\\ln\\left(\\frac{10^{-2}}{10^{-3}}\\right) = \\ln(10) = 2.3026$. $\\frac{1}{300} - \\frac{1}{350} = \\frac{350 - 300}{105000} = \\frac{50}{105000} = 4.762 \\times 10^{-4}\\,\\text{K}^{-1}$. $E_a = \\frac{2.3026 \\times 8.314}{4.762 \\times 10^{-4}} = \\frac{19.144}{4.762 \\times 10^{-4}} = 40201\\,\\text{J/mol} \\approx 40.2\\text{--}40.3\\,\\text{kJ/mol}$.",
            "distractorTip": "Be very careful with temperature units: ALWAYS convert to Kelvin ($K$), and remember to convert Joules to kilojoules ($div 1000$)!"
          },
          {
            "id": "ch5-l7-q2",
            "stem": "The experimental rate law for $2NO(g) + Br_2(g) \\rightarrow 2NOBr(g)$ is $\\text{Rate} = k[NO]^2[Br_2]$. A student proposes a single-step termolecular mechanism: $NO + NO + Br_2 \\rightarrow 2NOBr$. Why is this single-step mechanism physically improbable, and what is the preferred alternative?",
            "options": [
              "Bromine is an inert gas that cannot participate in bimolecular steps.",
              "Termolecular reactions can only occur in liquid mercury.",
              "The balanced equation violates conservation of energy.",
              "Simultaneous three-body collisions with proper orientation and energy are exceedingly rare; a two-step mechanism with a fast pre-equilibrium ($NO + Br_2 \\rightleftharpoons NOBr_2$) followed by a slow bimolecular step ($NOBr_2 + NO \\rightarrow 2NOBr$) is far more physically probable."
            ],
            "correctIndex": 3,
            "explanation": "Termolecular elementary steps (three molecules colliding simultaneously) have extremely low collision probabilities. In real kinetics, termolecular rate laws almost always proceed through two consecutive bimolecular steps involving a reactive intermediate (like $NOBr_2$).",
            "distractorTip": "On the AP exam, explain that termolecular elementary steps are exceedingly rare due to the improbability of three particles colliding simultaneously with correct orientation and sufficient energy."
          },
          {
            "id": "chem5-l7-q3",
            "stem": "For a first-order chemical reaction with a rate constant $k = 0.0231\\text{ min}^{-1}$, what is the half-life ($t_{1/2}$) of the reaction?",
            "options": [
              "15.0 min",
              "30.0 min",
              "43.3 min",
              "69.3 min"
            ],
            "correctIndex": 1,
            "explanation": "For first-order kinetics, half-life is independent of initial concentration: $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k} = \\frac{0.693}{0.0231\\text{ min}^{-1}} = 30.0\\text{ minutes}$.",
            "distractorTip": "First-order half-life equation: $t_{1/2} = 0.693 / k$. Notice that concentration does not appear in this formula!"
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 6,
    "unitId": "u6",
    "title": "Unit 6: Thermodynamics",
    "shortTitle": "Unit 6: Thermochemistry",
    "description": "Endothermic vs exothermic processes, calorimetry (q = mcΔT), heating curves, bond enthalpies, standard enthalpies of formation, and Hess’s Law",
    "examWeight": "7–9% of AP Exam",
    "biome": {
      "name": "Calorimeter Caldera & Enthalpy Ridge",
      "icon": "🔥",
      "accentColor": "#EF4444",
      "secondaryColor": "#DC2626",
      "groundGradient": "from-red-100 via-rose-50 to-orange-100",
      "cardBorder": "border-red-500",
      "trailColor": "#ef4444",
      "nodeRing": "ring-red-400/40",
      "skyTint": "from-red-50 to-rose-50/30"
    },
    "levels": [
      {
        "id": 601,
        "unitIndex": 6,
        "levelNumber": 1,
        "uniqueKey": "chem-u6-l1",
        "topicNumber": "Topic 6.1 & 6.2",
        "name": "System, Surroundings & Energy Exchange",
        "subtitle": "Heat (q), work (w = -PΔV), internal energy (ΔE), and thermal sign conventions",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch6-l1-q1",
            "stem": "A gas inside a cylinder expands against a constant external pressure of $2.0\\,\\text{atm}$ from $1.0\\,\\text{L}$ to $4.0\\,\\text{L}$ while absorbing $400\\,\\text{J}$ of heat from the surroundings. Given that $1\\,\\text{L}\\cdot\\text{atm} = 101.3\\,\\text{J}$, what is the change in internal energy ($\\Delta E$) of the gas system?",
            "options": [
              "$-208\\,\\text{J}$",
              "$+1008\\,\\text{J}$",
              "$+400\\,\\text{J}$",
              "$-1008\\,\\text{J}$"
            ],
            "correctIndex": 0,
            "explanation": "Work done by the system: $w = -P\\Delta V = -(2.0\\,\\text{atm})(4.0 - 1.0\\,\\text{L}) = -6.0\\,\\text{L}\\cdot\\text{atm} = -6.0 \\times 101.3\\,\\text{J} = -607.8\\,\\text{J}$. Heat absorbed: $q = +400\\,\\text{J}$. Change in internal energy: $\\Delta E = q + w = 400 + (-607.8) = -207.8 \\approx -208\\,\\text{J}$.",
            "distractorTip": "Expansion means the SYSTEM DOES WORK on surroundings, so $w$ is NEGATIVE ($w = -P\\Delta V$). Heat absorbed means $q$ is POSITIVE."
          },
          {
            "id": "ch6-l1-q2",
            "stem": "When solid ammonium nitrate ($NH_4NO_3$) dissolves in water in a cold pack, the pack becomes cold to the touch. What are the signs of $q_{\\text{sys}}$, $q_{\\text{surr}}$, and $\\Delta H_{\\text{soln}}$?",
            "options": [
              "$q_{\\text{sys}} < 0, q_{\\text{surr}} > 0, \\Delta H_{\\text{soln}} < 0$ (Exothermic)",
              "$q_{\\text{sys}} > 0, q_{\\text{surr}} < 0, \\Delta H_{\\text{soln}} > 0$ (Endothermic)",
              "$q_{\\text{sys}} = 0, q_{\\text{surr}} = 0, \\Delta H_{\\text{soln}} = 0$",
              "$q_{\\text{sys}} < 0, q_{\\text{surr}} < 0, \\Delta H_{\\text{soln}} > 0$"
            ],
            "correctIndex": 1,
            "explanation": "The surroundings (the water and your hand) lose thermal energy (temp drops, so $q_{\\text{surr}} < 0$). By conservation of energy, the system (dissolving ions) absorbs heat ($q_{\\text{sys}} > 0$), meaning the process is endothermic with $\\Delta H_{\\text{soln}} > 0$.",
            "distractorTip": "If the thermometer or container gets COLD, the reaction absorbed heat from surroundings $\\to$ ENDOTHERMIC ($Delta H > 0$)."
          },
          {
            "id": "chem6-l1-q3",
            "stem": "In an exothermic chemical reaction taking place in an insulated water calorimeter, what constitutes the 'system' and the 'surroundings', and what happens to the temperature of the water?",
            "options": [
              "The chemical reactants and products are the system; the water and calorimeter are the surroundings; the water temperature rises.",
              "The water is the system; the chemical bonds are the surroundings; the water temperature drops.",
              "The thermometer is the system; the water is the surroundings; temperature is constant.",
              "Energy is destroyed by the system, cooling the surroundings."
            ],
            "correctIndex": 0,
            "explanation": "The system consists of the chemical bonds and reacting species. The surroundings comprise everything else (the solvent water, thermometer, and styrofoam cup). In an exothermic reaction, the system releases heat to the surroundings, causing the water temperature to rise ($q_{\\text{water}} > 0$).",
            "distractorTip": "In coffee-cup calorimetry: Exothermic reaction $\\implies$ heat released to water $\\implies$ water temperature RISES ($q_{\\text{surr}} > 0, q_{\\text{sys}} < 0$)."
          }
        ]
      },
      {
        "id": 602,
        "unitIndex": 6,
        "levelNumber": 2,
        "uniqueKey": "chem-u6-l2",
        "topicNumber": "Topic 6.3",
        "name": "Calorimetry & Heat Transfer",
        "subtitle": "q = mcΔT calculations, coffee-cup calorimetry, and thermal equilibrium",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch6-l2-q1",
            "stem": "A $50.0\\,\\text{g}$ piece of hot copper metal ($c = 0.385\\,\\text{J/}(\\text{g}\\cdot^\\circ\\text{C})$) at $100.0^\\circ\\text{C}$ is placed into $100.0\\,\\text{g}$ of water ($c = 4.184\\,\\text{J/}(\\text{g}\\cdot^\\circ\\text{C})$) at $20.0^\\circ\\text{C}$ in an insulated calorimeter. What is the final equilibrium temperature ($T_f$)?",
            "options": [
              "$35.0^\\circ\\text{C}$",
              "$60.0^\\circ\\text{C}$",
              "$23.5^\\circ\\text{C}$",
              "$15.5^\\circ\\text{C}$"
            ],
            "correctIndex": 2,
            "explanation": "$q_{\\text{lost}} = -q_{\\text{gained}} \\implies m_{\\text{Cu}} c_{\\text{Cu}} (100 - T_f) = m_{\\text{w}} c_{\\text{w}} (T_f - 20)$. $(50.0)(0.385)(100 - T_f) = (100.0)(4.184)(T_f - 20) \\implies 19.25(100 - T_f) = 418.4(T_f - 20) \\implies 1925 - 19.25 T_f = 418.4 T_f - 8368 \\implies 437.65 T_f = 10293 \\implies T_f = 23.52^\\circ\\text{C}$.",
            "distractorTip": "Because water has a much higher specific heat capacity than metals, the final temperature will be much closer to water's initial temperature!"
          },
          {
            "id": "ch6-l2-q2",
            "stem": "In a coffee-cup calorimeter, $100.0\\,\\text{mL}$ of $0.500\\,\\text{M } HCl$ and $100.0\\,\\text{mL}$ of $0.500\\,\\text{M } NaOH$ are mixed (total solution mass $= 200.0\\,\\text{g}$, specific heat $= 4.18\\,\\text{J/g}\\cdot^\\circ\\text{C}$). The temperature rises from $21.00^\\circ\\text{C}$ to $24.35^\\circ\\text{C}$. What is the molar enthalpy of neutralization ($\\Delta H_{\\text{neut}}$) in $\\text{kJ/mol}$ of $H_2O$ formed?",
            "options": [
              "$-112\\,\\text{kJ/mol}$",
              "$+56.0\\,\\text{kJ/mol}$",
              "$-28.0\\,\\text{kJ/mol}$",
              "$-56.0\\,\\text{kJ/mol}$"
            ],
            "correctIndex": 3,
            "explanation": "$q_{\\text{soln}} = mc\\Delta T = (200.0\\,\\text{g})(4.18\\,\\text{J/g}\\cdot^\\circ\\text{C})(24.35 - 21.00^\\circ\\text{C}) = (200.0)(4.18)(3.35) = 2800.6\\,\\text{J} = 2.80\\,\\text{kJ}$. Moles $H^+$ reacted $= 0.100\\,\\text{L} \\times 0.500\\,\\text{M} = 0.0500\\,\\text{mol}$. $\\Delta H_{\\text{rxn}} = -\\frac{q_{\\text{soln}}}{\\text{moles}} = -\\frac{2.80\\,\\text{kJ}}{0.0500\\,\\text{mol}} = -56.0\\,\\text{kJ/mol}$.",
            "distractorTip": "Exothermic reactions have NEGATIVE $\\Delta H$. Always divide heat $q$ (in kJ) by the moles of limiting reactant."
          },
          {
            "id": "chem6-l2-q3",
            "stem": "A 50.0 g sample of water is heated from $20.0^\\circ\\text{C}$ to $50.0^\\circ\\text{C}$. How much heat energy was absorbed by the water? (Specific heat of water $c = 4.184\\text{ J}/(\\text{g}\\cdot^\\circ\\text{C})$)",
            "options": [
              "209 J",
              "1046 J",
              "6276 J",
              "4184 J"
            ],
            "correctIndex": 2,
            "explanation": "$q = mc\\Delta T = (50.0\\text{ g})(4.184\\text{ J}/\\text{g}\\cdot^\\circ\\text{C})(50.0 - 20.0^\\circ\\text{C}) = (50.0)(4.184)(30.0) = 6276\\text{ J} \\approx 6.28\\text{ kJ}$.",
            "distractorTip": "Calorimetry heat equation: $q = mc\\Delta T$. Make sure $\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$."
          }
        ]
      },
      {
        "id": 603,
        "unitIndex": 6,
        "levelNumber": 3,
        "uniqueKey": "chem-u6-l3",
        "topicNumber": "Topic 6.4 & 6.5",
        "name": "Heating Curves & Phase Transition Energies",
        "subtitle": "Enthalpies of fusion/vaporization, phase plateaus, and multi-step heating calculations",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch6-l3-q1",
            "stem": "Why does the temperature of pure water remain completely constant at $100^\\circ\\text{C}$ while it is vigorously boiling at $1.0\\,\\text{atm}$, even though thermal heat is continuously being added by a Bunsen burner?",
            "options": [
              "All absorbed thermal energy is utilized as latent heat of vaporization to overcome intermolecular hydrogen bonds between liquid water molecules, rather than increasing molecular kinetic energy.",
              "Water molecules decompose into $H_2$ and $O_2$ gases, which consume all added heat.",
              "The specific heat of steam is zero at the boiling point.",
              "Atmospheric pressure pushes the heat back into the burner."
            ],
            "correctIndex": 0,
            "explanation": "Temperature is a measure of average molecular kinetic energy ($KE = \\frac{3}{2}kT$). During a phase change, added energy does not increase kinetic speed; instead, it is stored as potential energy to break intermolecular forces (hydrogen bonds) separating liquid molecules into the vapor phase.",
            "distractorTip": "During phase changes (plateaus on heating curves), temperature is CONSTANT because added heat goes into POTENTIAL energy (overcoming IMFs)."
          },
          {
            "id": "ch6-l3-q2",
            "stem": "For water: specific heat of ice $= 2.09\\,\\text{J/g}\\cdot^\\circ\\text{C}$; enthalpy of fusion $\\Delta H_{\\text{fus}} = 334\\,\\text{J/g}$. How much heat is required to convert $10.0\\,\\text{g}$ of ice at $-10.0^\\circ\\text{C}$ to liquid water at $0.0^\\circ\\text{C}$?",
            "options": [
              "$3340\\,\\text{J}$",
              "$3549\\,\\text{J}$",
              "$209\\,\\text{J}$",
              "$5430\\,\\text{J}$"
            ],
            "correctIndex": 1,
            "explanation": "Step 1: Warm ice from $-10^\\circ\\text{C}$ to $0^\\circ\\text{C}$: $q_1 = mc\\Delta T = (10.0\\,\\text{g})(2.09\\,\\text{J/g}\\cdot^\\circ\\text{C})(10.0^\\circ\\text{C}) = 209\\,\\text{J}$. Step 2: Melt ice at $0^\\circ\\text{C}$: $q_2 = m\\Delta H_{\\text{fus}} = (10.0\\,\\text{g})(334\\,\\text{J/g}) = 3340\\,\\text{J}$. Total heat $q_{\\text{total}} = 209 + 3340 = 3549\\,\\text{J}$.",
            "distractorTip": "Multi-step heating problem: Always calculate warming ($mc\\Delta T$) and phase change ($m\\Delta H$) separately and add them!"
          },
          {
            "id": "chem6-l3-q3",
            "stem": "Why does the temperature of pure ice water remain constant at $0^\\circ\\text{C}$ while thermal energy is continuously added during melting?",
            "options": [
              "The added heat is destroyed by the thermometer.",
              "All added thermal energy is consumed to overcome intermolecular hydrogen bonds (enthalpy of fusion, $\\Delta H_{\\text{fus}}$) rather than increasing the average kinetic energy of the molecules.",
              "Water has infinite specific heat capacity at $0^\\circ\\text{C}$.",
              "Ice reflects 100% of incoming thermal radiation."
            ],
            "correctIndex": 1,
            "explanation": "During a phase transition (melting), temperature remains constant because the added heat goes into breaking intermolecular hydrogen bonds (increasing potential energy via enthalpy of fusion), rather than increasing molecular vibrational/translational velocity (kinetic energy).",
            "distractorTip": "During phase changes, temperature is CONSTANT: heat energy changes potential energy (breaking IMFs), not kinetic energy."
          }
        ]
      },
      {
        "id": 604,
        "unitIndex": 6,
        "levelNumber": 4,
        "uniqueKey": "chem-u6-l4",
        "topicNumber": "Topic 6.6 & 6.7",
        "name": "Bond Enthalpies & Reaction Energetics",
        "subtitle": "Bond breaking vs bond forming, average bond energies, and estimation of ΔH_rxn",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch6-l4-q1",
            "stem": "Given the following average bond enthalpies: $H-H = 436\\,\\text{kJ/mol}$, $Cl-Cl = 242\\,\\text{kJ/mol}$, and $H-Cl = 431\\,\\text{kJ/mol}$. What is the estimated $\\Delta H^\\circ_{\\text{rxn}}$ for the synthesis: $H_2(g) + Cl_2(g) \\rightarrow 2HCl(g)$?",
            "options": [
              "$-247\\,\\text{kJ}$",
              "$+184\\,\\text{kJ}$",
              "$-184\\,\\text{kJ}$",
              "$+247\\,\\text{kJ}$"
            ],
            "correctIndex": 2,
            "explanation": "$\\Delta H_{\\text{rxn}} = \\sum BE(\\text{bonds broken}) - \\sum BE(\\text{bonds formed})$. Bonds broken: $1\\,(H-H) + 1\\,(Cl-Cl) = 436 + 242 = 678\\,\\text{kJ}$. Bonds formed: $2\\,(H-Cl) = 2(431) = 862\\,\\text{kJ}$. $\\Delta H_{\\text{rxn}} = 678 - 862 = -184\\,\\text{kJ}$.",
            "distractorTip": "Notice the formula for bond energies is BROKEN MINUS FORMED (Reactants - Products), which is the opposite of enthalpies of formation!"
          },
          {
            "id": "ch6-l4-q2",
            "stem": "Why is the combustion of hydrocarbons like methane ($CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$) highly exothermic?",
            "options": [
              "Combustion destroys mass, converting it into heat via $E = mc^2$.",
              "Breaking $C-H$ bonds in methane releases massive thermal energy.",
              "Oxygen atoms absorb negative enthalpy from nitrogen in air.",
              "The bonds formed in the products ($C=O$ double bonds in $CO_2$ and $O-H$ bonds in $H_2O$) are significantly stronger and lower in potential energy than the bonds broken in the reactants ($C-H$ and $O=O$)."
            ],
            "correctIndex": 3,
            "explanation": "A reaction is exothermic when the energy released during bond formation in products exceeds the energy consumed to break bonds in reactants. The $C=O$ bond ($799\\,\\text{kJ/mol}$) and $O-H$ bond ($463\\,\\text{kJ/mol}$) are exceptionally strong, stable bonds that release vast potential energy when formed.",
            "distractorTip": "Remember: Breaking bonds NEVER releases energy! Energy is released ONLY when new, stronger bonds form."
          },
          {
            "id": "chem6-l4-q3",
            "stem": "Using average bond enthalpies, what is the enthalpy change $\\Delta H$ for a reaction calculated from bond dissociation energies?",
            "options": [
              "$\\Delta H = \\sum \\text{Bond Enthalpies of Products} - \\sum \\text{Bond Enthalpies of Reactants}$",
              "$\\Delta H = \\sum \\text{Bonds Broken (Reactants)} - \\sum \\text{Bonds Formed (Products)}$",
              "$\\Delta H = \\sum \\text{Bonds Broken} \\times \\sum \\text{Bonds Formed}$",
              "$\\Delta H = \\Delta G - T\\Delta S$"
            ],
            "correctIndex": 1,
            "explanation": "Breaking chemical bonds is always endergonic/endothermic (energy input, positive), whereas forming bonds is always exergonic/exothermic (energy release, negative). Therefore: $\\Delta H = \\sum D_{\\text{bonds broken}} - \\sum D_{\\text{bonds formed}}$.",
            "distractorTip": "Bond enthalpies: BROKEN minus FORMED (Reactants minus Products)! Note that this is the OPPOSITE of $\\Delta H_f^\\circ$ (which is Products minus Reactants)."
          }
        ]
      },
      {
        "id": 605,
        "unitIndex": 6,
        "levelNumber": 5,
        "uniqueKey": "chem-u6-l5",
        "topicNumber": "Topic 6.8 & 6.9",
        "name": "Enthalpies of Formation & Hess's Law",
        "subtitle": "Standard state ΔH°f values, manipulating thermochemical equations, and Hess's Law cycles",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch6-l5-q1",
            "stem": "Given the standard enthalpies of formation: $\\Delta H^\\circ_f[CO_2(g)] = -393.5\\,\\text{kJ/mol}$, $\\Delta H^\\circ_f[H_2O(l)] = -285.8\\,\\text{kJ/mol}$, and $\\Delta H^\\circ_f[C_3H_8(g)] = -103.8\\,\\text{kJ/mol}$. What is $\\Delta H^\\circ_{\\text{rxn}}$ for the combustion: $C_3H_8(g) + 5O_2(g) \\rightarrow 3CO_2(g) + 4H_2O(l)$?",
            "options": [
              "$-2220\\,\\text{kJ}$",
              "$-2428\\,\\text{kJ}$",
              "$+2220\\,\\text{kJ}$",
              "$-575.5\\,\\text{kJ}$"
            ],
            "correctIndex": 0,
            "explanation": "$\\Delta H^\\circ_{\\text{rxn}} = \\sum n\\Delta H^\\circ_f(\\text{products}) - \\sum m\\Delta H^\\circ_f(\\text{reactants})$. Note $\\Delta H^\\circ_f[O_2(g)] = 0$. Products: $3(-393.5) + 4(-285.8) = -1180.5 + (-1143.2) = -2323.7\\,\\text{kJ}$. Reactants: $1(-103.8) + 5(0) = -103.8\\,\\text{kJ}$. $\\Delta H^\\circ_{\\text{rxn}} = -2323.7 - (-103.8) = -2219.9 \\approx -2220\\,\\text{kJ}$.",
            "distractorTip": "For standard enthalpies of formation, elements in their standard states (like $O_2(g), N_2(g), C(graphite)$) have $\\Delta H^circ_f = 0$."
          },
          {
            "id": "ch6-l5-q2",
            "stem": "Using Hess’s Law, calculate $\\Delta H^\\circ$ for the target reaction $2C(s) + H_2(g) \\rightarrow C_2H_2(g)$, given: (1) $C_2H_2(g) + \\frac{5}{2}O_2(g) \\rightarrow 2CO_2(g) + H_2O(l)$ ($\\Delta H_1 = -1299.5\\,\\text{kJ}$); (2) $C(s) + O_2(g) \\rightarrow CO_2(g)$ ($\\Delta H_2 = -393.5\\,\\text{kJ}$); (3) $H_2(g) + \\frac{1}{2}O_2(g) \\rightarrow H_2O(l)$ ($\\Delta H_3 = -285.8\\,\\text{kJ}$).",
            "options": [
              "$-226.7\\,\\text{kJ}$",
              "$+226.7\\,\\text{kJ}$",
              "$-1978.8\\,\\text{kJ}$",
              "$+620.2\\,\\text{kJ}$"
            ],
            "correctIndex": 1,
            "explanation": "1. Reverse equation (1): $2CO_2 + H_2O \\rightarrow C_2H_2 + \\frac{5}{2}O_2$ ($\\Delta H = +1299.5\\,\\text{kJ}$). 2. Multiply equation (2) by 2: $2C + 2O_2 \\rightarrow 2CO_2$ ($\\Delta H = 2(-393.5) = -787.0\\,\\text{kJ}$). 3. Keep equation (3): $H_2 + \\frac{1}{2}O_2 \\rightarrow H_2O$ ($\\Delta H = -285.8\\,\\text{kJ}$). Add them up: $\\Delta H = +1299.5 + (-787.0) + (-285.8) = +226.7\\,\\text{kJ}$.",
            "distractorTip": "Reversing a reaction flips the sign of $\\Delta H$; multiplying coefficients by $n$ multiplies $\\Delta H$ by $n$."
          },
          {
            "id": "chem6-l5-q3",
            "stem": "According to Hess's Law, what is the standard enthalpy of formation ($\\Delta H_f^\\circ$) for any pure chemical element in its most stable standard thermodynamic state (e.g., $O_2(g), C(s,\\text{ graphite}), Fe(s)$)?",
            "options": [
              "Exactly 0 kJ/mol by definition",
              "100 kJ/mol",
              "-285.8 kJ/mol",
              "It equals the ionization energy of the element."
            ],
            "correctIndex": 0,
            "explanation": "By thermodynamic convention, the standard enthalpy of formation ($\\Delta H_f^\\circ$) of an element in its most stable physical state at standard ambient temperature and pressure (298 K, 1 atm) is defined as exactly zero.",
            "distractorTip": "Standard enthalpy of formation $\\Delta H_f^\\circ$ of a pure element in its standard state is ZERO."
          }
        ]
      },
      {
        "id": 606,
        "unitIndex": 6,
        "levelNumber": 6,
        "uniqueKey": "chem-u6-l6",
        "topicNumber": "Unit 6 Boss",
        "name": "Thermochemical Cycles & Calorimetric Synthesis",
        "subtitle": "Multi-concept synthesis: Born-Haber cycle lattice energy derivation and bomb calorimeter heat capacity",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ch6-l6-q1",
            "stem": "In a Born-Haber cycle for sodium chloride ($NaCl$), which step represents the lattice energy of $NaCl(s)$?",
            "options": [
              "The first ionization energy of sodium: $Na(g) \\rightarrow Na^+(g) + e^-$.",
              "The sublimation of solid sodium metal: $Na(s) \\rightarrow Na(g)$.",
              "The enthalpy change for the formation of the solid ionic crystal from gaseous ions: $Na^+(g) + Cl^-(g) \\rightarrow NaCl(s)$ (large negative $\\Delta H$).",
              "The standard enthalpy of formation: $Na(s) + \\frac{1}{2}Cl_2(g) \\rightarrow NaCl(s)$."
            ],
            "correctIndex": 2,
            "explanation": "Lattice energy is defined as the energy released when separated gaseous ions assemble to form one mole of an ionic crystalline solid ($Na^+(g) + Cl^-(g) \\rightarrow NaCl(s)$). By Hess's law, $\\Delta H_f^circ = \\Delta H_{\\text{sub}} + IE_1 + \\frac{1}{2}BE(Cl_2) + EA(Cl) + \\Delta H_{\\text{lattice}}$.",
            "distractorTip": "Lattice energy involves GASEOUS ions forming the solid crystal, NOT elemental standard states!"
          },
          {
            "id": "ch6-l6-q2",
            "stem": "A $1.000\\,\\text{g}$ sample of sucrose ($C_{12}H_{22}O_{11}$, molar mass $342.3\\,\\text{g/mol}$) is burned in a bomb calorimeter with a heat capacity $C_{\\text{cal}} = 4.90\\,\\text{kJ/}^\\circ\\text{C}$. The temperature of the calorimeter increases by $3.37^\\circ\\text{C}$. What is the molar enthalpy of combustion of sucrose?",
            "options": [
              "$-1930\\,\\text{kJ/mol}$",
              "$+5650\\,\\text{kJ/mol}$",
              "$-16.5\\,\\text{kJ/mol}$",
              "$-5650\\,\\text{kJ/mol}$"
            ],
            "correctIndex": 3,
            "explanation": "1. Heat released: $q_{\\text{rxn}} = -C_{\\text{cal}}\\Delta T = -(4.90\\,\\text{kJ/}^circ\\text{C})(3.37^circ\\text{C}) = -16.513\\,\\text{kJ}$. 2. Moles of sucrose: $n = 1.000\\,\\text{g} / 342.3\\,\\text{g/mol} = 2.9214 \\times 10^{-3}\\,\\text{mol}$. 3. Molar enthalpy: $\\Delta H_{\\text{comb}} = \\frac{-16.513\\,\\text{kJ}}{2.9214 \\times 10^{-3}\\,\\text{mol}} = -5652\\,\\text{kJ/mol} \\approx -5650\\,\\text{kJ/mol}$.",
            "distractorTip": "For a bomb calorimeter, $q = C_{\\text{cal}}\\Delta T$ (no mass of water needed since heat capacity of the entire calorimeter assembly is already provided)."
          },
          {
            "id": "chem6-l6-q3",
            "stem": "Given the thermochemical equations:\n(1) $C(s) + O_2(g) \\to CO_2(g) \\quad \\Delta H_1 = -393.5\\text{ kJ}$\n(2) $2CO(g) + O_2(g) \\to 2CO_2(g) \\quad \\Delta H_2 = -566.0\\text{ kJ}$\nWhat is $\\Delta H$ for the reaction $C(s) + \\frac{1}{2}O_2(g) \\to CO(g)$?",
            "options": [
              "-959.5 kJ",
              "+172.5 kJ",
              "-110.5 kJ",
              "-676.5 kJ"
            ],
            "correctIndex": 2,
            "explanation": "Take equation (1): $C + O_2 \\to CO_2$ ($\\Delta H = -393.5$). Reverse equation (2) and divide by 2: $CO_2 \\to CO + \\frac{1}{2}O_2$ ($\\Delta H = +566.0 / 2 = +283.0\\text{ kJ}$). Summing the two: $-393.5 + 283.0 = -110.5\\text{ kJ}$.",
            "distractorTip": "Hess's Law: Reversing an equation flips the sign of $\\Delta H$; multiplying/dividing coefficients multiplies/divides $\\Delta H$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 7,
    "unitId": "u7",
    "title": "Unit 7: Equilibrium",
    "shortTitle": "Unit 7: Equilibrium",
    "description": "Dynamic equilibrium, Kc and Kp, Q vs K, ICE tables, Le Chatelier’s principle, solubility product (Ksp), and common-ion effect",
    "examWeight": "7–9% of AP Exam",
    "biome": {
      "name": "Dynamic Balance Basin & Le Chatelier Scales",
      "icon": "⚖️",
      "accentColor": "#14B8A6",
      "secondaryColor": "#0D9488",
      "groundGradient": "from-teal-100 via-emerald-50 to-cyan-100",
      "cardBorder": "border-teal-500",
      "trailColor": "#14b8a6",
      "nodeRing": "ring-teal-400/40",
      "skyTint": "from-teal-50 to-cyan-50/30"
    },
    "levels": [
      {
        "id": 701,
        "unitIndex": 7,
        "levelNumber": 1,
        "uniqueKey": "chem-u7-l1",
        "topicNumber": "Topic 7.1 & 7.2",
        "name": "Dynamic Equilibrium & Reaction Quotient",
        "subtitle": "Forward vs reverse rates, constancy of concentrations, and Q vs K directional shifts",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch7-l1-q1",
            "stem": "Which statement accurately describes a chemical system at dynamic equilibrium?",
            "options": [
              "The rate of the forward reaction equals the rate of the reverse reaction, and the concentrations of reactants and products remain constant over time.",
              "The concentrations of reactants and products are exactly equal.",
              "All chemical reactions have completely stopped occurring.",
              "The activation energy for the forward reaction has dropped to zero."
            ],
            "correctIndex": 0,
            "explanation": "Dynamic equilibrium means reactions continue occurring in both directions at equal rates ($r_{\\text{fwd}} = r_{\\text{rev}}$). Because rates are identical, no net change in reactant or product concentrations occurs. However, concentrations are NOT necessarily equal; their ratio is defined by $K_{eq}$.",
            "distractorTip": "AP Trap: At equilibrium, RATES are EQUAL; concentrations are CONSTANT (not necessarily equal)."
          },
          {
            "id": "ch7-l1-q2",
            "stem": "For the reaction $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$, $K_c = 280$ at $1000\\,\\text{K}$. At a certain moment, a vessel contains $[SO_2] = 0.10\\,\\text{M}$, $[O_2] = 0.10\\,\\text{M}$, and $[SO_3] = 1.0\\,\\text{M}$. In which direction will the reaction proceed to achieve equilibrium?",
            "options": [
              "$Q_c = 100 < K_c$; the reaction must shift to the right (toward products).",
              "$Q_c = 1000 > K_c$; the reaction must shift to the left (toward reactants).",
              "$Q_c = 280 = K_c$; the system is already at dynamic equilibrium.",
              "$Q_c = 50 < K_c$; the reaction shifts right to make more $SO_3$."
            ],
            "correctIndex": 1,
            "explanation": "Calculate $Q_c = \\frac{[SO_3]^2}{[SO_2]^2[O_2]} = \\frac{(1.0)^2}{(0.10)^2(0.10)} = \\frac{1.0}{(0.010)(0.10)} = \\frac{1.0}{0.0010} = 1000$. Because $Q_c (1000) > K_c (280)$, there is an excess of products relative to reactants; the reaction must proceed in reverse (shift left) to re-establish equilibrium.",
            "distractorTip": "Remember: If $Q > K$, shift LEFT $(\\leftarrow)$; If $Q < K$, shift RIGHT $(\\rightarrow)$."
          },
          {
            "id": "chem7-l1-q3",
            "stem": "What condition defines a chemical system at dynamic equilibrium?",
            "options": [
              "The concentrations of reactants and products are exactly equal.",
              "All chemical reactions have completely ceased.",
              "The rate of the forward reaction equals the rate of the reverse reaction, and reactant and product concentrations remain constant over time.",
              "The equilibrium constant $K$ equals zero."
            ],
            "correctIndex": 2,
            "explanation": "Dynamic equilibrium is achieved when forward and reverse reaction rates are equal ($r_{\\text{forward}} = r_{\\text{reverse}}$). Molecules continue reacting constantly, but because rates match, macroscopic concentrations show zero net change.",
            "distractorTip": "At equilibrium: Rates are EQUAL; Concentrations are CONSTANT (not necessarily equal)."
          }
        ]
      },
      {
        "id": 702,
        "unitIndex": 7,
        "levelNumber": 2,
        "uniqueKey": "chem-u7-l2",
        "topicNumber": "Topic 7.3 & 7.4",
        "name": "Equilibrium Expressions: Kc and Kp",
        "subtitle": "Mass action law, omitting pure solids/liquids, and Kp = Kc(RT)^Δn conversion",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch7-l2-q1",
            "stem": "What is the correct equilibrium constant expression ($K_c$) for the thermal decomposition of limestone: $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$?",
            "options": [
              "$K_c = \\frac{[CO_2]}{[CaCO_3]}$",
              "$K_c = \\frac{[CaO][CO_2]}{[CaCO_3]}$",
              "$K_c = [CO_2]$",
              "$K_c = [CaO][CO_2]$"
            ],
            "correctIndex": 2,
            "explanation": "Pure solids and pure liquids have constant concentrations (their chemical activity is defined as 1) and are omitted from equilibrium constant expressions. Therefore, $CaCO_3(s)$ and $CaO(s)$ do not appear, leaving $K_c = [CO_2]$ (and $K_p = P_{CO_2}$).",
            "distractorTip": "ALWAYS omit pure solids $(s)$ and pure liquids $(l)$ from $K_c$ and $K_p$ expressions!"
          },
          {
            "id": "ch7-l2-q2",
            "stem": "For the reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, $K_c = 0.50$ at $400^\\circ\\text{C}$ ($673\\,\\text{K}$). Using $K_p = K_c(RT)^{\\Delta n}$, what is the value of $\\Delta n$ and how does $K_p$ compare to $K_c$?",
            "options": [
              "$\\Delta n = -1$; $K_p = K_c(RT)^{-1}$",
              "$\\Delta n = +2$; $K_p = K_c(RT)^{2}$, so $K_p > K_c$",
              "$\\Delta n = 0$; $K_p = K_c$",
              "$\\Delta n = -2$; $K_p = K_c(RT)^{-2}$, so $K_p < K_c$"
            ],
            "correctIndex": 3,
            "explanation": "$\\Delta n = (\\text{moles of gaseous products}) - (\\text{moles of gaseous reactants}) = 2 - (1 + 3) = 2 - 4 = -2$. Because $\\Delta n = -2$, $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$. Since $RT = (0.08206)(673) \\approx 55.2 > 1$, $(RT)^2 > 1$, making $K_p$ much smaller than $K_c$.",
            "distractorTip": "$\\Delta n$ is calculated ONLY for gaseous species ($\text{gas products} - \text{gas reactants}$)."
          },
          {
            "id": "chem7-l2-q3",
            "stem": "What is the equilibrium constant expression $K_c$ for the heterogeneous reaction: $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$?",
            "options": [
              "$K_c = \\frac{[CaO][CO_2]}{[CaCO_3]}$",
              "$K_c = \\frac{[CaCO_3]}{[CaO][CO_2]}$",
              "$K_c = [CO_2]$",
              "$K_c = [CaO][CO_2]$"
            ],
            "correctIndex": 2,
            "explanation": "Pure solids ($s$) and pure liquids ($l$) have constant concentrations and are omitted from equilibrium expressions. $CaCO_3(s)$ and $CaO(s)$ are excluded, leaving $K_c = [CO_2]$ (or $K_p = P_{CO_2}$).",
            "distractorTip": "Pure solids and pure liquids are NEVER included in equilibrium expressions ($K_c$ or $K_p$)!"
          }
        ]
      },
      {
        "id": 703,
        "unitIndex": 7,
        "levelNumber": 3,
        "uniqueKey": "chem-u7-l3",
        "topicNumber": "Topic 7.5 & 7.6",
        "name": "Manipulating Equilibrium Constants",
        "subtitle": "Reversing equations (1/K), multiplying coefficients (K^n), and adding reactions (K1 * K2)",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch7-l3-q1",
            "stem": "At $298\\,\\text{K}$, $K_1 = 4.0 \\times 10^4$ for $A(g) + B(g) \\rightleftharpoons 2C(g)$. What is the equilibrium constant $K_2$ for the reaction $C(g) \\rightleftharpoons \\frac{1}{2}A(g) + \\frac{1}{2}B(g)$?",
            "options": [
              "$K_2 = \\frac{1}{\\sqrt{K_1}} = 5.0 \\times 10^{-3}$",
              "$K_2 = -4.0 \\times 10^4$",
              "$K_2 = 2.0 \\times 10^2$",
              "$K_2 = 2.5 \\times 10^{-5}$"
            ],
            "correctIndex": 0,
            "explanation": "The target reaction is the REVERSE of the original, multiplied by a factor of $\\frac{1}{2}$. Reversing inverts the constant ($1/K_1$), and multiplying coefficients by $n$ raises the constant to the $n$-th power: $K_2 = (K_1)^{-1/2} = \\frac{1}{\\sqrt{4.0 \\times 10^4}} = \\frac{1}{200} = 0.0050 = 5.0 \\times 10^{-3}$.",
            "distractorTip": "Rules for $K$: Reverse $\\to 1/K$; Multiply coefficients by $n \\to K^n$; Add reactions $\\to K_1 \\times K_2$."
          },
          {
            "id": "ch7-l3-q2",
            "stem": "Given the equilibrium constants: (1) $HF(aq) \\rightleftharpoons H^+(aq) + F^-(aq)$ ($K_1 = 6.8 \\times 10^{-4}$); (2) $H_2C_2O_4(aq) \\rightleftharpoons 2H^+(aq) + C_2O_4^{2-}(aq)$ ($K_2 = 3.8 \\times 10^{-6}$). What is the equilibrium constant for $2HF(aq) + C_2O_4^{2-}(aq) \\rightleftharpoons 2F^-(aq) + H_2C_2O_4(aq)$?",
            "options": [
              "$K_{\\text{net}} = K_1 \\times K_2 = 2.6 \\times 10^{-9}$",
              "$K_{\\text{net}} = \\frac{K_1^2}{K_2} = 0.12$",
              "$K_{\\text{net}} = \\frac{K_2}{K_1^2} = 8.2$",
              "$K_{\\text{net}} = 2K_1 - K_2$"
            ],
            "correctIndex": 1,
            "explanation": "Multiply equation (1) by 2 $\\implies K_1^2 = (6.8 \\times 10^{-4})^2 = 4.624 \\times 10^{-7}$. Reverse equation (2) $\\implies 1/K_2 = \\frac{1}{3.8 \\times 10^{-6}} = 2.63 \\times 10^5$. Adding the reactions gives the target equation, so multiply the constants: $K_{\\text{net}} = K_1^2 \\times (1/K_2) = \\frac{4.624 \\times 10^{-7}}{3.8 \\times 10^{-6}} = 0.1217 \\approx 0.12$.",
            "distractorTip": "Do not add or subtract $K$ values! Thermochemical enthalpies add, but equilibrium constants MULTIPLY."
          },
          {
            "id": "chem7-l3-q3",
            "stem": "If the reaction $A + B \\rightleftharpoons C$ has an equilibrium constant $K_1 = 4.0$, what is the equilibrium constant $K_2$ for the reversed and doubled reaction: $2C \\rightleftharpoons 2A + 2B$?",
            "options": [
              "$K_2 = -8.0$",
              "$K_2 = 1 / 4.0 = 0.25$",
              "$K_2 = (1 / 4.0)^2 = 1 / 16 = 0.0625$",
              "$K_2 = 16.0$"
            ],
            "correctIndex": 2,
            "explanation": "Reversing a reaction inverts the equilibrium constant: $K' = 1/K_1$. Multiplying stoichiometric coefficients by $n$ raises the constant to the $n$-th power: $K_2 = (K')^n = (1/4.0)^2 = 1/16 = 0.0625$.",
            "distractorTip": "Manipulating $K$: Reversing $\\implies 1/K$; Multiplying by $n \\implies K^n$; Adding reactions $\\implies K_1 \\times K_2$."
          }
        ]
      },
      {
        "id": 704,
        "unitIndex": 7,
        "levelNumber": 4,
        "uniqueKey": "chem-u7-l4",
        "topicNumber": "Topic 7.7 & 7.8",
        "name": "Calculating Equilibrium: ICE Tables",
        "subtitle": "Initial-Change-Equilibrium tables, small x approximation (5% rule), and quadratic solutions",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch7-l4-q1",
            "stem": "At $500\\,\\text{K}$, $K_c = 1.8 \\times 10^{-5}$ for $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$. If $0.20\\,\\text{M } PCl_5$ is placed into an empty flask, what is the equilibrium concentration of $Cl_2(g)$?",
            "options": [
              "$0.20\\,\\text{M}$",
              "$3.6 \\times 10^{-6}\\,\\text{M}$",
              "$1.9 \\times 10^{-3}\\,\\text{M}$",
              "$6.0 \\times 10^{-3}\\,\\text{M}$"
            ],
            "correctIndex": 2,
            "explanation": "ICE table: $[PCl_5] = 0.20 - x$; $[PCl_3] = x$; $[Cl_2] = x$. $K_c = \\frac{x^2}{0.20 - x} = 1.8 \\times 10^{-5}$. Because $K_c$ is very small, assume $x \\ll 0.20$ so $0.20 - x \\approx 0.20$. $x^2 = (1.8 \\times 10^{-5})(0.20) = 3.6 \\times 10^{-6} \\implies x = \\sqrt{3.6 \\times 10^{-6}} = 1.897 \\times 10^{-3} \\approx 1.9 \\times 10^{-3}\\,\\text{M}$. Check 5% rule: $\\frac{1.9 \\times 10^{-3}}{0.20} \\times 100\\% = 0.95\\% < 5\\%$ (valid approximation).",
            "distractorTip": "If initial concentration divided by $K$ exceeds 400 ($[A]_0/K > 400$), the small $x$ approximation ($0.20 - x \\approx 0.20$) is valid."
          },
          {
            "id": "ch7-l4-q2",
            "stem": "For the reaction $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$, $K_c = 64$ at $700\\,\\text{K}$. If $1.0\\,\\text{mol of } H_2$ and $1.0\\,\\text{mol of } I_2$ are placed in a $1.0\\,\\text{L}$ flask, what is the equilibrium concentration of $HI$?",
            "options": [
              "$2.0\\,\\text{M}$",
              "$0.80\\,\\text{M}$",
              "$0.20\\,\\text{M}$",
              "$1.6\\,\\text{M}$"
            ],
            "correctIndex": 3,
            "explanation": "ICE table: $[H_2] = 1.0 - x$; $[I_2] = 1.0 - x$; $[HI] = 2x$. $K_c = \\frac{(2x)^2}{(1.0 - x)^2} = 64$. Take square root of both sides: $\\frac{2x}{1.0 - x} = 8 \\implies 2x = 8(1.0 - x) = 8 - 8x \\implies 10x = 8 \\implies x = 0.80\\,\\text{M}$. Therefore, $[HI] = 2x = 2(0.80) = 1.6\\,\\text{M}$.",
            "distractorTip": "Remember to multiply $x$ by 2 for $[HI]$ because its coefficient in the balanced equation is 2!"
          },
          {
            "id": "chem7-l4-q3",
            "stem": "For the reaction $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$ with $K_c = 1.2$, a reaction mixture has $[N_2] = 0.10\\text{ M}$, $[H_2] = 0.10\\text{ M}$, and $[NH_3] = 0.20\\text{ M}$. In which direction will the reaction proceed to achieve equilibrium?",
            "options": [
              "The system is already at equilibrium ($Q = K$).",
              "Because $Q = \\frac{(0.20)^2}{(0.10)(0.10)^3} = 400 > K_c$, the reaction will shift to the left toward reactants to reach equilibrium.",
              "The reaction will shift to the right toward products because $Q < K$.",
              "The reaction cannot proceed without a platinum catalyst."
            ],
            "correctIndex": 1,
            "explanation": "$Q_c = \\frac{[NH_3]^2}{[N_2][H_2]^3} = \\frac{(0.20)^2}{(0.10)(0.10)^3} = \\frac{0.040}{0.00010} = 400$. Because $Q_c > K_c$ ($400 > 1.2$), there is an excess of products relative to equilibrium, so the system must shift to the LEFT (toward reactants).",
            "distractorTip": "If $Q < K$, shift RIGHT (make products); If $Q > K$, shift LEFT (make reactants); If $Q = K$, at equilibrium."
          }
        ]
      },
      {
        "id": 705,
        "unitIndex": 7,
        "levelNumber": 5,
        "uniqueKey": "chem-u7-l5",
        "topicNumber": "Topic 7.9 & 7.10",
        "name": "Le Châtelier’s Principle & Disturbances",
        "subtitle": "Concentration stresses, pressure/volume changes, temperature effects, and inert gas additions",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch7-l5-q1",
            "stem": "For the endothermic gaseous reaction $2NO_2(g) \\text{ (brown)} \\rightleftharpoons N_2O_4(g) \\text{ (colorless)} + \\text{heat}$ (Wait! $2NO_2 \\rightleftharpoons N_2O_4$ is exothermic with $\\Delta H^circ = -57\\,\\text{kJ}$). If the temperature of a sealed syringe containing an equilibrium mixture of $NO_2$ and $N_2O_4$ is increased, what will occur?",
            "options": [
              "The reaction shifts in the reverse endothermic direction (left), increasing the concentration of brown $NO_2$, and the numerical value of $K_{eq}$ DECREASES.",
              "The reaction shifts forward (right), turning completely colorless, and $K_{eq}$ increases.",
              "The reaction does not shift because gas moles are unchanged.",
              "The numerical value of $K_{eq}$ remains constant while the syringe expands."
            ],
            "correctIndex": 0,
            "explanation": "For an exothermic reaction, heat is a product. By Le Châtelier's principle, adding thermal energy (raising temperature) stresses the product side, driving the reaction in the reverse endothermic direction (left) to consume the excess heat. This produces more brown $NO_2$ gas and lowers the ratio of products to reactants, decreasing the value of $K_{eq}$.",
            "distractorTip": "CRITICAL AP CONCEPT: ONLY changing temperature can change the numerical value of $K_{eq}$! For exothermic reactions, increasing $T$ DECREASES $K$."
          },
          {
            "id": "ch7-l5-q2",
            "stem": "An equilibrium mixture of $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$ is held in a rigid container of fixed volume. Argon gas ($Ar$) is injected into the container at constant temperature. How will the equilibrium position and partial pressures shift?",
            "options": [
              "The reaction shifts right because total pressure increased.",
              "No shift occurs; total pressure increases, but the partial pressures and concentrations of $N_2, H_2,$ and $NH_3$ remain unchanged, so $Q = K$.",
              "The reaction shifts left toward the side with more moles of gas.",
              "The equilibrium constant $K_p$ increases."
            ],
            "correctIndex": 1,
            "explanation": "Adding an inert gas (like $Ar$) at CONSTANT VOLUME increases total pressure, but does NOT change the volume or the moles of the reacting gases. Therefore, the partial pressures ($P_i = \\frac{n_i RT}{V}$) and molar concentrations of $N_2, H_2,$ and $NH_3$ are completely unaffected, so $Q$ remains equal to $K$ (no shift).",
            "distractorTip": "Inert gas at CONSTANT VOLUME $\\to$ NO SHIFT! (If added at constant pressure, volume expands $\\to$ shifts toward more gas moles)."
          },
          {
            "id": "chem7-l5-q3",
            "stem": "For the exothermic gas-phase reaction $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g) \\quad \\Delta H < 0$, which stress will shift the equilibrium to the right, producing more $SO_3$?",
            "options": [
              "Increasing the temperature",
              "Increasing the volume of the reaction container",
              "Decreasing the temperature and increasing the pressure by reducing volume",
              "Adding an inert gas at constant volume"
            ],
            "correctIndex": 2,
            "explanation": "By Le Châtelier's principle: (1) Since the reaction is exothermic (heat is a product), lowering temperature removes heat, shifting the reaction to the right. (2) There are 3 moles of gas on the left and 2 moles on the right; increasing pressure (decreasing volume) shifts toward the side with fewer gas moles (the right). Both stresses favor products.",
            "distractorTip": "Le Châtelier: Lowering $T$ in an exothermic reaction shifts RIGHT; Increasing pressure shifts to the side with FEWER gas moles."
          }
        ]
      },
      {
        "id": 706,
        "unitIndex": 7,
        "levelNumber": 6,
        "uniqueKey": "chem-u7-l6",
        "topicNumber": "Topic 7.11 & 7.12",
        "name": "Solubility Equilibria & Common-Ion Effect",
        "subtitle": "Solubility product constant (Ksp), molar solubility (s), and common ion suppression",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch7-l6-q1",
            "stem": "The solubility product constant of lead(II) chloride ($PbCl_2$) is $K_{\\text{sp}} = 1.6 \\times 10^{-5}$ at $25^\\circ\\text{C}$. What is the molar solubility ($s$) of $PbCl_2$ in pure water?",
            "options": [
              "$2.5 \\times 10^{-2}\\,\\text{M}$",
              "$4.0 \\times 10^{-3}\\,\\text{M}$",
              "$1.6 \\times 10^{-2}\\,\\text{M}$",
              "$1.3 \\times 10^{-2}\\,\\text{M}$"
            ],
            "correctIndex": 2,
            "explanation": "$PbCl_2(s) \\rightleftharpoons Pb^{2+}(aq) + 2Cl^-(aq)$. In pure water, $[Pb^{2+}] = s$ and $[Cl^-] = 2s$. $K_{\\text{sp}} = [Pb^{2+}][Cl^-]^2 = (s)(2s)^2 = 4s^3$. $4s^3 = 1.6 \\times 10^{-5} \\implies s^3 = 4.0 \\times 10^{-6} \\implies s = (4.0 \\times 10^{-6})^{1/3} = 0.01587\\,\\text{M} \\approx 1.6 \\times 10^{-2}\\,\\text{M}$.",
            "distractorTip": "For a 1:2 salt ($MX_2$), $K_{\\text{sp}} = 4s^3$, NOT $s^2$!"
          },
          {
            "id": "ch7-l6-q2",
            "stem": "How does the molar solubility of silver chloride ($AgCl, K_{\\text{sp}} = 1.8 \\times 10^{-10}$) in a $0.10\\,\\text{M } NaCl$ solution compare to its molar solubility in pure water?",
            "options": [
              "It doubles because there are twice as many chloride ions.",
              "It increases to $0.10\\,\\text{M}$ because sodium ions dissolve the precipitate.",
              "It remains identical at $1.3 \\times 10^{-5}\\,\\text{M}$ because $K_{\\text{sp}}$ is constant.",
              "It is drastically reduced to $1.8 \\times 10^{-9}\\,\\text{M}$ due to the common-ion effect of $Cl^-$."
            ],
            "correctIndex": 3,
            "explanation": "In $0.10\\,\\text{M } NaCl$, $[Cl^-] \\approx 0.10\\,\\text{M}$. $K_{\\text{sp}} = [Ag^+][Cl^-] = (s)(0.10) = 1.8 \\times 10^{-10} \\implies s = \\frac{1.8 \\times 10^{-10}}{0.10} = 1.8 \\times 10^{-9}\\,\\text{M}$. In pure water, $s = \\sqrt{1.8 \\times 10^{-10}} = 1.34 \\times 10^{-5}\\,\\text{M}$. The presence of common ion $Cl^-$ suppresses solubility by nearly 10,000-fold.",
            "distractorTip": "Common-ion effect: A salt is ALWAYS less soluble in a solution containing one of its constituent ions than in pure water!"
          },
          {
            "id": "chem7-l6-q3",
            "stem": "What happens to the molar solubility of silver chloride ($AgCl$) in water when solid sodium chloride ($NaCl$) is dissolved into the solution (the Common Ion Effect)?",
            "options": [
              "The solubility increases due to ion pairing.",
              "The solubility decreases significantly because the added $Cl^-$ common ion shifts the dissolution equilibrium $AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$ to the left.",
              "The solubility remains constant because $NaCl$ is neutral.",
              "The $K_{sp}$ of $AgCl$ increases."
            ],
            "correctIndex": 1,
            "explanation": "Dissolving $NaCl$ injects $Cl^-$ ions into solution. According to Le Châtelier's principle, the common $Cl^-$ ion pushes the equilibrium $AgCl(s) \\rightleftharpoons Ag^+ + Cl^-$ back toward the solid precipitate, decreasing the molar solubility of $AgCl$ (while $K_{sp}$ remains constant).",
            "distractorTip": "The common ion effect DECREASES the solubility of a sparingly soluble salt by shifting equilibrium toward the precipitate."
          }
        ]
      },
      {
        "id": 707,
        "unitIndex": 7,
        "levelNumber": 7,
        "uniqueKey": "chem-u7-l7",
        "topicNumber": "Unit 7 Boss",
        "name": "Complex Equilibrium & Selective Precipitation",
        "subtitle": "Multi-concept synthesis: Q_sp vs K_sp precipitation thresholds and pH-dependent salt solubility",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ch7-l7-q1",
            "stem": "Equal volumes of $0.0020\\,\\text{M } AgNO_3$ and $0.0020\\,\\text{M } K_2CrO_4$ are mixed. Given that $K_{\\text{sp}}$ for silver chromate ($Ag_2CrO_4$) is $1.1 \\times 10^{-12}$, will a precipitate form?",
            "options": [
              "Yes; $Q_{\\text{sp}} = 1.0 \\times 10^{-9} > K_{\\text{sp}}$, meaning the solution is supersaturated and $Ag_2CrO_4(s)$ will precipitate.",
              "No; $Q_{\\text{sp}} = 1.0 \\times 10^{-15} < K_{\\text{sp}}$, so the solution remains unsaturated.",
              "No; potassium and nitrate ions stabilize chromate ions indefinitely.",
              "Yes; but only if the solution is boiled to dryness."
            ],
            "correctIndex": 0,
            "explanation": "Because equal volumes are mixed, both concentrations are halved by dilution: $[Ag^+] = 0.0010\\,\\text{M} = 1.0 \\times 10^{-3}\\,\\text{M}$; $[CrO_4^{2-}] = 0.0010\\,\\text{M} = 1.0 \\times 10^{-3}\\,\\text{M}$. Ion product $Q_{\\text{sp}} = [Ag^+]^2[CrO_4^{2-}] = (1.0 \\times 10^{-3})^2(1.0 \\times 10^{-3}) = 1.0 \\times 10^{-9}$. Since $Q_{\\text{sp}} (1.0 \\times 10^{-9}) > K_{\\text{sp}} (1.1 \\times 10^{-12})$, precipitation MUST occur.",
            "distractorTip": "AP Chem Trap: Always account for the DILUTION factor when two solutions are mixed together!"
          },
          {
            "id": "ch7-l7-q2",
            "stem": "Why does solid calcium fluoride ($CaF_2, K_{\\text{sp}} = 3.9 \\times 10^{-11}$) dissolve substantially more in a $1.0\\,\\text{M } HCl$ solution than in pure water, whereas solid silver chloride ($AgCl$) does NOT show increased solubility in acid?",
            "options": [
              "Calcium reacts with chloride to form an insoluble covalent gas.",
              "$F^-$ is the conjugate base of the weak acid $HF$; added $H^+$ from $HCl$ consumes $F^-$ to form $HF(aq)$, shifting the $CaF_2$ equilibrium to the right. By contrast, $Cl^-$ is the conjugate base of the strong acid $HCl$ and does not react with $H^+$.",
              "Silver chloride is an amphoteric base while calcium fluoride is a strong acid.",
              "Fluoride ions are nonpolar and attract hydronium ions."
            ],
            "correctIndex": 1,
            "explanation": "Dissolution: $CaF_2(s) \\rightleftharpoons Ca^{2+} + 2F^-$. Because $HF$ is a weak acid ($K_a = 6.8 \\times 10^{-4}$), $F^-$ is a basic anion: $H^+ + F^- \\rightleftharpoons HF$. In acidic solution, $H^+$ reacts with $F^-$, removing it from solution. By Le Châtelier's principle, this pulls the $CaF_2$ dissolution forward. For $AgCl$, $Cl^-$ is the conjugate base of strong $HCl$ and has negligible basicity, so $H^+$ does not consume $Cl^-$.",
            "distractorTip": "Salts containing BASIC anions (anions of weak acids like $F^-, CO_3^{2-}, OH^-, S^{2-}$) dissolve in acidic solutions!"
          },
          {
            "id": "chem7-l7-q3",
            "stem": "The solubility product constant of barium sulfate ($BaSO_4$) is $K_{sp} = 1.1 \\times 10^{-10}$. What is its molar solubility ($s$) in pure water?",
            "options": [
              "$1.1 \\times 10^{-10}\\text{ M}$",
              "$1.05 \\times 10^{-5}\\text{ M}$",
              "$2.2 \\times 10^{-5}\\text{ M}$",
              "$5.5 \\times 10^{-6}\\text{ M}$"
            ],
            "correctIndex": 1,
            "explanation": "$BaSO_4(s) \\rightleftharpoons Ba^{2+}(aq) + SO_4^{2-}(aq)$. In pure water, $[Ba^{2+}] = s$ and $[SO_4^{2-}] = s$. $K_{sp} = s^2 \\implies s = \\sqrt{K_{sp}} = \\sqrt{1.1 \\times 10^{-10}} \\approx 1.05 \\times 10^{-5}\\text{ M}$.",
            "distractorTip": "For a 1:1 salt, $K_{sp} = s^2 \\implies s = \\sqrt{K_{sp}}$. For a 1:2 salt ($PbCl_2$), $K_{sp} = 4s^3$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 8,
    "unitId": "u8",
    "title": "Unit 8: Acids & Bases",
    "shortTitle": "Unit 8: Acids & Bases",
    "description": "Autoionization of water, strong acids/bases, weak acid/base equilibria, Ka/Kb, buffers, Henderson-Hasselbalch, and titration curves",
    "examWeight": "11–15% of AP Exam",
    "biome": {
      "name": "Buffer Springs & Litmus Cliffs",
      "icon": "🧪",
      "accentColor": "#8B5CF6",
      "secondaryColor": "#6D28D9",
      "groundGradient": "from-violet-100 via-purple-50 to-pink-100",
      "cardBorder": "border-violet-500",
      "trailColor": "#8b5cf6",
      "nodeRing": "ring-violet-400/40",
      "skyTint": "from-violet-50 to-purple-50/30"
    },
    "levels": [
      {
        "id": 801,
        "unitIndex": 8,
        "levelNumber": 1,
        "uniqueKey": "chem-u8-l1",
        "topicNumber": "Topic 8.1 & 8.2",
        "name": "Water Autoionization & Strong Acids/Bases",
        "subtitle": "Kw, pH, pOH, and strong monoprotic/diprotic calculations",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch8-l1-q1",
            "stem": "At $50^\\circ\\text{C}$, the autoionization constant of pure water is $K_w = 5.48 \\times 10^{-14}$. What is the pH of pure neutral water at $50^\\circ\\text{C}$, and is the water acidic, basic, or neutral?",
            "options": [
              "$pH = 6.63$; the water is acidic because pH is less than 7.",
              "$pH = 7.00$; pure water is always pH 7 at all temperatures.",
              "$pH = 6.63$; the water is neutral because $[H_3O^+] = [OH^-]$.",
              "$pH = 7.37$; the water is basic because Kw increased."
            ],
            "correctIndex": 2,
            "explanation": "In pure water, $[H_3O^+] = [OH^-] = \\sqrt{K_w} = \\sqrt{5.48 \\times 10^{-14}} = 2.34 \\times 10^{-7}\\,\\text{M}$. $pH = -\\log(2.34 \\times 10^{-7}) = 6.63$. Even though $pH < 7$, the water is strictly NEUTRAL because $[H_3O^+] = [OH^-]$. The autoionization of water is endothermic, so higher temperature increases $K_w$ and lowers neutral pH.",
            "distractorTip": "AP Favorite Concept: \"Neutral\" means $[H_3O^+] = [OH^-]$, NOT necessarily $pH = 7.00$!"
          },
          {
            "id": "ch8-l1-q2",
            "stem": "What is the pH of a $0.0050\\,\\text{M } Ba(OH)_2$ strong base solution at $25^\\circ\\text{C}$?",
            "options": [
              "$12.30$",
              "$11.70$",
              "$2.00$",
              "$12.00$"
            ],
            "correctIndex": 3,
            "explanation": "$Ba(OH)_2$ is a strong diprotic base that dissociates completely: $Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$. $[OH^-] = 2 \\times 0.0050\\,\\text{M} = 0.010\\,\\text{M} = 1.0 \\times 10^{-2}\\,\\text{M}$. $pOH = -\\log(1.0 \\times 10^{-2}) = 2.00$. $pH = 14.00 - pOH = 14.00 - 2.00 = 12.00$.",
            "distractorTip": "Do not forget the factor of 2 for group 2 hydroxides ($Ba(OH)_2, Ca(OH)_2, Sr(OH)_2$): $[OH^-] = 2 \\times M_{\\text{base}}$!"
          },
          {
            "id": "chem8-l1-q3",
            "stem": "At $25^\\circ\\text{C}$, a solution has a hydroxide ion concentration $[OH^-] = 1.0 \\times 10^{-4}\\text{ M}$. What are the $[H^+]$ concentration and the $pH$ of this solution?",
            "options": [
              "$[H^+] = 1.0 \\times 10^{-4}\\text{ M}, pH = 4.0$",
              "$[H^+] = 1.0 \\times 10^{-14}\\text{ M}, pH = 14.0$",
              "$[H^+] = 1.0 \\times 10^{-10}\\text{ M}, pH = 10.0$",
              "$[H^+] = 1.0 \\times 10^{-7}\\text{ M}, pH = 7.0$"
            ],
            "correctIndex": 2,
            "explanation": "$K_w = [H^+][OH^-] = 1.0 \\times 10^{-14} \\implies [H^+] = \\frac{1.0 \\times 10^{-14}}{1.0 \\times 10^{-4}} = 1.0 \\times 10^{-10}\\text{ M}$. $pH = -\\log(1.0 \\times 10^{-10}) = 10.0$. (Alternatively, $pOH = 4.0 \\implies pH = 14 - 4 = 10.0$).",
            "distractorTip": "$pH + pOH = 14.0$ at $25^\\circ\\text{C}$. If $[OH^-] = 10^{-4}$, then $pOH = 4$, so $pH = 10$."
          }
        ]
      },
      {
        "id": 802,
        "unitIndex": 8,
        "levelNumber": 2,
        "uniqueKey": "chem-u8-l2",
        "topicNumber": "Topic 8.3",
        "name": "Weak Acids, Weak Bases & Percent Ionization",
        "subtitle": "Ka and Kb equilibrium expressions, pH of weak acids, and dilution effects",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch8-l2-q1",
            "stem": "Acetic acid ($CH_3COOH$) has $K_a = 1.8 \\times 10^{-5}$. What is the pH of a $0.10\\,\\text{M}$ acetic acid solution at $25^\\circ\\text{C}$?",
            "options": [
              "$2.87$",
              "$1.00$",
              "$5.00$",
              "$3.74$"
            ],
            "correctIndex": 0,
            "explanation": "$CH_3COOH + H_2O \\rightleftharpoons H_3O^+ + CH_3COO^-$. $K_a = \\frac{x^2}{0.10 - x} \\approx \\frac{x^2}{0.10} = 1.8 \\times 10^{-5}$. $x^2 = 1.8 \\times 10^{-6} \\implies x = [H_3O^+] = 1.34 \\times 10^{-3}\\,\\text{M}$. $pH = -\\log(1.34 \\times 10^{-3}) = 2.87$.",
            "distractorTip": "Weak acids do not dissociate completely! Never calculate weak acid pH simply as $-\\log(M_0)$."
          },
          {
            "id": "ch8-l2-q2",
            "stem": "When a $0.10\\,\\text{M}$ solution of weak acid $HA$ is diluted with distilled water to a concentration of $0.010\\,\\text{M}$, what happens to the percent ionization of the acid?",
            "options": [
              "The percent ionization decreases because there is less acid present.",
              "The percent ionization INCREASES, even though the total concentration of $H_3O^+$ decreases.",
              "The percent ionization remains strictly constant because $K_a$ is constant.",
              "The percent ionization drops to zero."
            ],
            "correctIndex": 1,
            "explanation": "By Ostwald's dilution law / Le Châtelier's principle: $HA(aq) + H_2O(l) \\rightleftharpoons H_3O^+(aq) + A^-(aq)$. Dilution lowers all solute concentrations; the system shifts to the side with MORE aqueous particles (right), increasing the fraction of ionized molecules (percent ionization $= [H^+]/[HA]_0 \\times 100\\%$ increases).",
            "distractorTip": "Dilution DECREASES $[H^+]$ (so pH rises), but INCREASES percent ionization!"
          },
          {
            "id": "chem8-l2-q3",
            "stem": "What happens to the percent ionization of a weak acid ($HA$) as its initial concentration is diluted with water?",
            "options": [
              "The percent ionization increases because dilution shifts the equilibrium $HA \\rightleftharpoons H^+ + A^-$ toward the side with more dissolved particles.",
              "The percent ionization decreases.",
              "The percent ionization remains strictly constant.",
              "The acid converts into a strong acid."
            ],
            "correctIndex": 0,
            "explanation": "Diluting a weak acid solution lowers all solute concentrations equally. In $Q_a = \\frac{[H^+][A^-]}{[HA]}$, the numerator decreases by the square while the denominator decreases linearly, making $Q < K_a$. By Le Châtelier's principle, the system shifts right, increasing the fraction (percent) of $HA$ molecules that ionize.",
            "distractorTip": "Counterintuitive AP fact: Diluting a weak acid DECREASES $[H^+]$ (higher pH), but INCREASES its PERCENT IONIZATION!"
          }
        ]
      },
      {
        "id": 803,
        "unitIndex": 8,
        "levelNumber": 3,
        "uniqueKey": "chem-u8-l3",
        "topicNumber": "Topic 8.4",
        "name": "Acid-Base Properties of Salts",
        "subtitle": "Salt hydrolysis, spectator cations/anions, and pH predictions of salt solutions",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch8-l3-q1",
            "stem": "Which $0.10\\,\\text{M}$ aqueous salt solution will have a pH GREATER than 7 (basic)?",
            "options": [
              "$NaCl(aq)$",
              "$NH_4Cl(aq)$",
              "$KCN(aq)$",
              "$Fe(NO_3)_3(aq)$"
            ],
            "correctIndex": 2,
            "explanation": "In $KCN$, $K^+$ is a neutral spectator ion (from strong base $KOH$). $CN^-$ is the conjugate base of weak acid $HCN$ ($K_a = 6.2 \\times 10^{-10}$), so it hydrolyzes water: $CN^- + H_2O \\rightleftharpoons HCN + OH^-$, producing excess $OH^-$ ($pH > 7$). By contrast: $NH_4Cl$ is acidic ($NH_4^+$ hydrolyzes), $NaCl$ is neutral, and $Fe(NO_3)_3$ is acidic due to metal ion hydration.",
            "distractorTip": "Salt hydrolysis: Cation from weak base $\\to$ acidic; Anion from weak acid $\\to$ basic; Conjugates of strong acids/bases $\\to$ neutral."
          },
          {
            "id": "ch8-l3-q2",
            "stem": "Sodium hydrogen sulfite ($NaHSO_3$) contains the amphiprotic ion $HSO_3^-$. Given that $K_{a2} = 6.3 \\times 10^{-8}$ and $K_b = \\frac{K_w}{K_{a1}} = \\frac{1.0 \\times 10^{-14}}{1.5 \\times 10^{-2}} = 6.7 \\times 10^{-13}$, is a solution of $NaHSO_3$ acidic or basic?",
            "options": [
              "Basic, because all sulfite salts are strong bases.",
              "Basic, because it contains the sodium cation.",
              "Completely neutral ($pH = 7.00$) because it is an amphiprotic salt.",
              "Acidic, because $K_a (6.3 \\times 10^{-8}) > K_b (6.7 \\times 10^{-13})$, so $HSO_3^-$ donates protons more readily than it accepts them."
            ],
            "correctIndex": 3,
            "explanation": "To determine whether an amphiprotic ion is acidic or basic, compare its acid dissociation constant ($K_a$) to its base hydrolysis constant ($K_b$). Since $K_a (6.3 \\times 10^{-8}) \\gg K_b (6.7 \\times 10^{-13})$, proton donation to form $SO_3^{2-}$ dominates over proton acceptance, producing an acidic solution ($pH < 7$).",
            "distractorTip": "For amphiprotic ions: Compare $K_a$ and $K_b$. If $K_a > K_b$, it is acidic; if $K_b > K_a$, it is basic!"
          },
          {
            "id": "chem8-l3-q3",
            "stem": "When sodium acetate ($NaCH_3COO$) salt is dissolved in pure water, what is the acid-base nature of the resulting aqueous solution?",
            "options": [
              "Strongly acidic ($pH < 2$)",
              "Neutral ($pH = 7.0$)",
              "Slightly basic ($pH > 7$) because the acetate ion ($CH_3COO^-$) acts as a conjugate weak base and hydrolyzes water to produce $OH^-$ ions.",
              "Insoluble precipitate forms."
            ],
            "correctIndex": 2,
            "explanation": "Sodium acetate dissociates into $Na^+$ (neutral spectator ion from strong base $NaOH$) and $CH_3COO^-$ (conjugate base of weak acid acetic acid). Acetate hydrolyzes water: $CH_3COO^- + H_2O \\rightleftharpoons CH_3COOH + OH^-$, generating hydroxide and making the solution basic ($pH > 7$).",
            "distractorTip": "Salt of weak acid + strong base = BASIC solution (anion hydrolyzes water to make $OH^-$)."
          }
        ]
      },
      {
        "id": 804,
        "unitIndex": 8,
        "levelNumber": 4,
        "uniqueKey": "chem-u8-l4",
        "topicNumber": "Topic 8.5",
        "name": "Acid-Base Titration Curves",
        "subtitle": "Equivalence points, half-equivalence points, and indicator pKa matching",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem8-l4-q1",
            "stem": "When $25.0\\,\\text{mL}$ of $0.10\\,\\text{M}$ acetic acid ($CH_3COOH, K_a = 1.8 \\times 10^{-5}$) is titrated with $0.10\\,\\text{M } NaOH$, what is the pH at the half-equivalence point and at the equivalence point, respectively?",
            "options": [
              "At half-equivalence: $pH = 4.74$ ($pH = pK_a$); At equivalence point: $pH > 7$ (basic, around 8.7) due to $CH_3COO^-$ hydrolysis.",
              "At half-equivalence: $pH = 7.00$; At equivalence point: $pH = 7.00$.",
              "At half-equivalence: $pH = 1.00$; At equivalence point: $pH = 14.00$.",
              "At half-equivalence: $pH = 4.74$; At equivalence point: $pH = 7.00$."
            ],
            "correctIndex": 0,
            "explanation": "At the half-equivalence point, $[HA] = [A^-]$, so $pH = pK_a = -\\log(1.8 \\times 10^{-5}) = 4.74$. At the equivalence point, all $CH_3COOH$ has been converted to its conjugate base sodium acetate ($CH_3COO^-$). Acetate undergoes basic hydrolysis ($CH_3COO^- + H_2O \\rightleftharpoons CH_3COOH + OH^-$), resulting in an equivalence point $pH > 7$ (~8.7).",
            "distractorTip": "Weak acid titrated with strong base ALWAYS has an equivalence point $pH > 7$ because of conjugate base hydrolysis!"
          },
          {
            "id": "chem8-l4-q2",
            "stem": "Which acid-base indicator is most appropriate for titrating a weak base (such as aqueous ammonia, $NH_3$) with a strong acid ($HCl$)?",
            "options": [
              "Phenolphthalein ($pK_{\\text{In}} = 9.4$, color change range $8.2\\text{--}10.0$)",
              "Methyl red ($pK_{\\text{In}} = 5.1$, color change range $4.4\\text{--}6.2$)",
              "Thymol blue ($pK_{\\text{In}} = 8.9$)",
              "Alizarin yellow ($pK_{\\text{In}} = 11.2$)"
            ],
            "correctIndex": 1,
            "explanation": "Titrating a weak base with a strong acid produces an acidic salt ($NH_4^+$) at the equivalence point, resulting in an equivalence point $pH < 7$ (typically around $pH \\approx 5.2$). The optimal indicator must have its $pK_{\\text{In}}$ (and transition range) centered closely around this equivalence point pH; methyl red ($pK_{\\text{In}} = 5.1$) matches perfectly.",
            "distractorTip": "Indicator selection rule: Choose an indicator whose $pK_{\\text{In}} \\approx pH$ at the equivalence point!"
          },
          {
            "id": "chem8-l4-q3",
            "stem": "During the titration of a weak acid (e.g., acetic acid) with a strong base (e.g., $NaOH$), what special relationship exists at the HALF-EQUIVALENCE point?",
            "options": [
              "The solution is neutral with $pH = 7.0$.",
              "The weak acid is completely converted to water.",
              "The concentration of weak acid equals the concentration of its conjugate base ($[HA] = [A^-]$), meaning $pH = pK_a$.",
              "$pH = 14.0$"
            ],
            "correctIndex": 2,
            "explanation": "At the half-equivalence point, exactly half of the initial $HA$ has been neutralized into conjugate base $A^-$, so $[HA] = [A^-]$. In the Henderson-Hasselbalch equation: $pH = pK_a + \\log([A^-]/[HA]) = pK_a + \\log(1) = pK_a$.",
            "distractorTip": "Half-equivalence point of a weak acid titration: $[HA] = [A^-]$ and $pH = pK_a$."
          }
        ]
      },
      {
        "id": 805,
        "unitIndex": 8,
        "levelNumber": 5,
        "uniqueKey": "chem-u8-l5",
        "topicNumber": "Topic 8.6",
        "name": "Molecular Structure & Acid Strength",
        "subtitle": "Binary acid trends (bond strength vs electronegativity) and oxyacid resonance/inductive effects",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem8-l5-q1",
            "stem": "Hydrofluoric acid ($HF$) is a weak acid ($K_a = 6.8 \\times 10^{-4}$), while hydrochloric acid ($HCl$), hydrobromic acid ($HBr$), and hydroiodic acid ($HI$) are all strong acids. Why does binary acid strength increase down Group 17 ($HF < HCl < HBr < HI$)?",
            "options": [
              "Iodine forms hydrogen bonds that pull protons away from hydrogen.",
              "Fluorine is the most electronegative element, so it repels protons.",
              "Atomic radius increases down the group, increasing $H-X$ bond length and significantly decreasing $H-X$ bond dissociation energy, making it much easier to release $H^+$.",
              "The charge of the halide ion decreases from $-1$ to $-4$."
            ],
            "correctIndex": 2,
            "explanation": "For binary acids down a group, bond strength dominates over electronegativity. As halide radius increases from $F$ to $I$, orbital overlap with hydrogen weakens, dropping the bond dissociation energy ($H-F = 567\\,\\text{kJ/mol}$ vs $H-I = 299\\,\\text{kJ/mol}$). The weaker $H-I$ bond dissociates 100% in water, making $HI$ the strongest halogen acid.",
            "distractorTip": "Down a group for binary acids: BOND STRENGTH determines acid strength (weaker bond = stronger acid)!"
          },
          {
            "id": "chem8-l5-q2",
            "stem": "Which of the following chlorine oxyacids is the STRONGEST acid, and what molecular feature accounts for its extreme acidity?",
            "options": [
              "Chloric acid ($HClO_3$); it forms interstitial hydrogen bonds.",
              "Hypochlorous acid ($HClO$); having only one oxygen concentrates negative charge.",
              "Chlorous acid ($HClO_2$); its bond angle is compressed to $90^\\circ$.",
              "Perchloric acid ($HClO_4$); the four electronegative oxygen atoms exert strong inductive electron withdrawal, and the resulting conjugate base ($ClO_4^-$) is stabilized by delocalization across 4 equivalent resonance structures."
            ],
            "correctIndex": 3,
            "explanation": "For oxyacids of the same central atom, acid strength increases with the oxidation state of the central atom and the number of terminal oxygen atoms ($HClO < HClO_2 < HClO_3 < HClO_4$). Additional electronegative oxygens pull electron density away from the O-H bond (polarizing and weakening it) and dramatically stabilize the conjugate base anion ($ClO_4^-$) through charge delocalization.",
            "distractorTip": "For oxyacids: MORE oxygen atoms = stronger acid!"
          },
          {
            "id": "chem8-l5-q3",
            "stem": "Why is trichloroacetic acid ($CCl_3COOH$) a significantly stronger acid than acetic acid ($CH_3COOH$)?",
            "options": [
              "Chlorine atoms donate electron density to the carboxyl group.",
              "The three highly electronegative chlorine atoms exert an inductive electron-withdrawing effect that stabilizes the negative charge on the conjugate base ($CCl_3COO^-$).",
              "Trichloroacetic acid forms intermolecular hydrogen bonds with itself.",
              "Chlorine atoms increase the bond strength of the O-H bond."
            ],
            "correctIndex": 1,
            "explanation": "Electronegative chlorine atoms pull electron density away from the carboxyl group through the carbon skeleton (inductive effect). This delocalizes and stabilizes the negative charge on the carboxylate conjugate base anion, making proton loss easier and strengthening the acid.",
            "distractorTip": "Inductive effect: Electronegative substituents stabilize conjugate base anions, increasing acid strength."
          }
        ]
      },
      {
        "id": 806,
        "unitIndex": 8,
        "levelNumber": 6,
        "uniqueKey": "chem-u8-l6",
        "topicNumber": "Topic 8.7 & 8.8",
        "name": "Buffer Solutions & Henderson-Hasselbalch",
        "subtitle": "Buffer composition, capacity, range (pKa ± 1), and adding strong acid/base to buffers",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "chem8-l6-q1",
            "stem": "A buffer solution is prepared containing $0.20\\,\\text{M } HC_2H_3O_2$ (acetic acid, $pK_a = 4.74$) and $0.10\\,\\text{M } NaC_2H_3O_2$ (sodium acetate). Using the Henderson-Hasselbalch equation, what is the pH of this buffer?",
            "options": [
              "$4.44$",
              "$4.74$",
              "$5.04$",
              "$3.74$"
            ],
            "correctIndex": 0,
            "explanation": "Henderson-Hasselbalch: $pH = pK_a + \\log\\left(\\frac{[\\text{base}]}{[\\text{acid}]}\\right) = 4.74 + \\log\\left(\\frac{0.10}{0.20}\\right) = 4.74 + \\log(0.50) = 4.74 + (-0.301) = 4.439 \\approx 4.44$.",
            "distractorTip": "When $[\\text{base}] < [\\text{acid}]$, $\\log(\\text{ratio}) < 0$, so $pH < pK_a$. When $[\\text{base}] = [\\text{acid}]$, $pH = pK_a$."
          },
          {
            "id": "chem8-l6-q2",
            "stem": "To $1.00\\,\\text{L}$ of a buffer containing $0.500\\,\\text{mol } HF$ ($pK_a = 3.17$) and $0.500\\,\\text{mol } F^-$, a student adds $0.050\\,\\text{mol}$ of solid $NaOH$. Assuming no volume change, what is the resulting pH of the solution?",
            "options": [
              "$3.17$",
              "$3.26$",
              "$3.08$",
              "$3.50$"
            ],
            "correctIndex": 1,
            "explanation": "Added strong base ($OH^-$) reacts completely with the weak acid: $HF + OH^- \\rightarrow F^- + H_2O$. Moles of $HF = 0.500 - 0.050 = 0.450\\,\\text{mol}$. Moles of $F^- = 0.500 + 0.050 = 0.550\\,\\text{mol}$. $pH = pK_a + \\log\\left(\\frac{0.550}{0.450}\\right) = 3.17 + \\log(1.222) = 3.17 + 0.087 = 3.257 \\approx 3.26$.",
            "distractorTip": "Stoichiometry first (neutralize added strong acid/base), THEN Henderson-Hasselbalch!"
          },
          {
            "id": "chem8-l6-q3",
            "stem": "Which of the following pairs of chemical substances can be combined in aqueous solution to create an effective buffer solution?",
            "options": [
              "$HCl$ (strong acid) and $NaCl$ (neutral salt)",
              "$HNO_3$ (strong acid) and $NaOH$ (strong base)",
              "$CH_3COOH$ (weak acid) and $NaCH_3COO$ (conjugate base salt)",
              "$H_2SO_4$ (strong acid) and $K_2SO_4$"
            ],
            "correctIndex": 2,
            "explanation": "A buffer requires a conjugate acid-base pair consisting of a WEAK acid and its conjugate weak base (or a weak base and its conjugate acid) in roughly equimolar concentrations. Strong acids/bases cannot form buffer systems because their conjugate ions are completely non-reactive spectators.",
            "distractorTip": "Buffers MUST contain a WEAK acid + its conjugate base (or weak base + conjugate acid). Never strong acids!"
          }
        ]
      },
      {
        "id": 807,
        "unitIndex": 8,
        "levelNumber": 7,
        "uniqueKey": "chem-u8-l7",
        "topicNumber": "Unit 8 Boss",
        "name": "Polyprotic Titration & Buffer Capacity Gauntlet",
        "subtitle": "Multi-concept synthesis: Triprotic phosphoric acid titration curve plateaus and physiological buffer design",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "chem8-l7-q1",
            "stem": "Phosphoric acid ($H_3PO_4$) is a triprotic acid with $pK_{a1} = 2.15$, $pK_{a2} = 7.20$, and $pK_{a3} = 12.38$. In a titration of $H_3PO_4$ with $NaOH$, what are the principal chemical species present at $pH = 7.20$?",
            "options": [
              "Equimolar phosphoric acid ($H_3PO_4$) and dihydrogen phosphate ($H_2PO_4^-$)",
              "Pure phosphate ions ($PO_4^{3-}$) and sodium hydroxide",
              "An equimolar buffer mixture of dihydrogen phosphate ($H_2PO_4^-$) and hydrogen phosphate ($HPO_4^{2-}$)",
              "Pure un-ionized $H_3PO_4$"
            ],
            "correctIndex": 2,
            "explanation": "At $pH = pK_{a2} = 7.20$, the system is at the second half-equivalence point where $[H_2PO_4^-] = [HPO_4^{2-}]$. This conjugate pair forms the vital intracellular phosphate buffer system that maintains cytoplasmic pH at ~7.2 in mammalian cells.",
            "distractorTip": "Match the pH to the corresponding $pK_a$ step: $pH = pK_{a1} \\to [H_3PO_4] = [H_2PO_4^-]$; $pH = pK_{a2} \\to [H_2PO_4^-] = [HPO_4^{2-}]$; $pH = pK_{a3} \\to [HPO_4^{2-}] = [PO_4^{3-}]$."
          },
          {
            "id": "chem8-l7-q2",
            "stem": "A biochemist needs to prepare a biological buffer at $pH = 7.40$. Which of the following weak acid systems provides the greatest buffer capacity at this target pH?",
            "options": [
              "$NH_4^+ / NH_3$ ($pK_a = 9.25$)",
              "$CH_3COOH / CH_3COO^-$ ($pK_a = 4.74$)",
              "$HCOOH / HCOO^-$ ($pK_a = 3.75$)",
              "$H_2PO_4^- / HPO_4^{2-}$ ($pK_a = 7.20$)"
            ],
            "correctIndex": 3,
            "explanation": "Buffer capacity is maximized when $pH = pK_a$ (where $[\\text{base}]/[\\text{acid}] = 1$). An effective buffer requires $pK_a = pH \\pm 1$. Dihydrogen phosphate has $pK_a = 7.20$, which is within $0.20$ units of $7.40$, making it by far the most effective buffer system among the choices.",
            "distractorTip": "Always select the buffer system whose $pK_a$ is CLOSEST to the desired target pH!"
          },
          {
            "id": "chem8-l7-q3",
            "stem": "Why does the equivalence point of a weak acid-strong base titration occur at a $pH > 7$ (basic), whereas the equivalence point of a strong acid-strong base titration occurs at exactly $pH = 7$?",
            "options": [
              "Excess strong base is intentionally added past the endpoint.",
              "At the equivalence point of a weak acid titration, all acid has been converted to its conjugate weak base, which hydrolyzes water to generate hydroxide ($OH^-$) ions.",
              "The indicator changes color only at basic pH.",
              "Strong bases have higher boiling points."
            ],
            "correctIndex": 1,
            "explanation": "At the equivalence point of a weak acid titration ($HA + OH^- \\to A^- + H_2O$), only conjugate base $A^-$ remains. $A^-$ hydrolyzes water: $A^- + H_2O \\rightleftharpoons HA + OH^-$, producing excess $OH^-$ and making the equivalence point basic ($pH > 7$).",
            "distractorTip": "Weak acid + Strong base equivalence point is BASIC ($pH > 7$); Strong acid + Weak base equivalence point is ACIDIC ($pH < 7$)."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 9,
    "unitId": "u9",
    "title": "Unit 9: Applications of Thermodynamics",
    "shortTitle": "Unit 9: Electrochem & Free Energy",
    "description": "Entropy (S), Gibbs Free Energy (ΔG = ΔH - TΔS), thermodynamic favorability, galvanic vs electrolytic cells, standard cell potential (E°), and Faraday’s law",
    "examWeight": "7–9% of AP Exam",
    "biome": {
      "name": "Galvanic Voltage Forge & Voltaic Vault",
      "icon": "⚡",
      "accentColor": "#6366F1",
      "secondaryColor": "#4F46E5",
      "groundGradient": "from-indigo-100 via-blue-50 to-purple-100",
      "cardBorder": "border-indigo-500",
      "trailColor": "#6366f1",
      "nodeRing": "ring-indigo-400/40",
      "skyTint": "from-indigo-50 to-purple-50/30"
    },
    "levels": [
      {
        "id": 901,
        "unitIndex": 9,
        "levelNumber": 1,
        "uniqueKey": "chem-u9-l1",
        "topicNumber": "Topic 9.1 & 9.2",
        "name": "Entropy & Absolute Entropy Changes",
        "subtitle": "Microstates, qualitative entropy signs, and standard ΔS°rxn calculations",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch9-l1-q1",
            "stem": "Which of the following chemical processes exhibits a NEGATIVE change in standard entropy ($\\Delta S^\\circ < 0$)?",
            "options": [
              "$2NO(g) + O_2(g) \\rightarrow 2NO_2(g)$",
              "$H_2O(s) \\rightarrow H_2O(l)$",
              "$NaCl(s) \\rightarrow Na^+(aq) + Cl^-(aq)$",
              "$CaCO_3(s) \\rightarrow CaO(s) + CO_2(g)$"
            ],
            "correctIndex": 0,
            "explanation": "In $2NO(g) + O_2(g) \\rightarrow 2NO_2(g)$, 3 moles of gas reactants combine to form only 2 moles of gas products ($\\Delta n_{\\text{gas}} = 2 - 3 = -1$). Fewer moles of gas means fewer positional microstates, resulting in a decrease in entropy ($\\Delta S^\\circ < 0$). In all other choices, entropy increases (solid melting, salt dissolving, solid forming gas).",
            "distractorTip": "Count gas moles: Decreasing moles of gas ($\\Delta n_{\\text{gas}} < 0$) produces $\\Delta S < 0$."
          },
          {
            "id": "ch9-l1-q2",
            "stem": "Given standard absolute molar entropies: $S^\\circ[N_2(g)] = 191.5\\,\\text{J/}(\\text{mol}\\cdot\\text{K})$, $S^\\circ[H_2(g)] = 130.6\\,\\text{J/}(\\text{mol}\\cdot\\text{K})$, and $S^\\circ[NH_3(g)] = 192.5\\,\\text{J/}(\\text{mol}\\cdot\\text{K})$. What is $\\Delta S^\\circ_{\\text{rxn}}$ for $N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$?",
            "options": [
              "$+198.3\\,\\text{J/K}$",
              "$-198.3\\,\\text{J/K}$",
              "$-129.6\\,\\text{J/K}$",
              "$-385.0\\,\\text{J/K}$"
            ],
            "correctIndex": 1,
            "explanation": "$\\Delta S^\\circ_{\\text{rxn}} = \\sum n S^\\circ(\\text{products}) - \\sum m S^\\circ(\\text{reactants}) = 2(192.5) - [1(191.5) + 3(130.6)] = 385.0 - [191.5 + 391.8] = 385.0 - 583.3 = -198.3\\,\\text{J/K}$.",
            "distractorTip": "Elements have NON-ZERO absolute entropies $S^circ$ at $298\\,\\text{K}$ (unlike $\\Delta H^circ_f$ which is zero for pure elements)."
          },
          {
            "id": "chem9-l1-q3",
            "stem": "Which of the following physical and chemical processes represents a NEGATIVE entropy change ($\\Delta S < 0$)?",
            "options": [
              "Sublimation of solid dry ice: $CO_2(s) \\to CO_2(g)$",
              "Dissolving table salt in water: $NaCl(s) \\to Na^+(aq) + Cl^-(aq)$",
              "Condensation of water vapor into liquid water: $H_2O(g) \\to H_2O(l)$",
              "Combustion of methane gas: $CH_4(g) + 2O_2(g) \\to CO_2(g) + 2H_2O(g)$"
            ],
            "correctIndex": 2,
            "explanation": "Entropy ($S$) measures molecular dispersal and accessible microstates. Gases have vastly higher entropy than liquids, and liquids higher than solids. Condensation ($gas \\to liquid$) restricts molecular motion and decreases positional microstates, resulting in $\\Delta S < 0$.",
            "distractorTip": "Phase changes that decrease disorder: Gas $\\to$ Liquid $\\to$ Solid all have $\\Delta S < 0$."
          }
        ]
      },
      {
        "id": 902,
        "unitIndex": 9,
        "levelNumber": 2,
        "uniqueKey": "chem-u9-l2",
        "topicNumber": "Topic 9.3 & 9.4",
        "name": "Gibbs Free Energy & Favorability",
        "subtitle": "ΔG = ΔH - TΔS, temperature dependence of favorability, and crossover temperature",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch9-l2-q1",
            "stem": "A reaction has $\\Delta H^\\circ = +45.0\\,\\text{kJ/mol}$ and $\\Delta S^\\circ = +125\\,\\text{J/}(\\text{mol}\\cdot\\text{K})$. At what temperatures is this reaction thermodynamically favorable (spontaneous, $\\Delta G^\\circ < 0$)?",
            "options": [
              "Only at temperatures below $360\\,\\text{K}$ ($T < 360\\,\\text{K}$)",
              "At all temperatures",
              "Only at temperatures above $360\\,\\text{K}$ ($T > 360\\,\\text{K}$)",
              "Never favorable at any temperature"
            ],
            "correctIndex": 2,
            "explanation": "$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$. For $\\Delta G^\\circ < 0$, we need $T\\Delta S^\\circ > \\Delta H^\\circ \\implies T > \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$. Convert units: $\\Delta H = 45000\\,\\text{J/mol}$. Crossover temperature $T = \\frac{45000\\,\\text{J/mol}}{125\\,\\text{J/}(\\text{mol}\\cdot\\text{K})} = 360\\,\\text{K}$. At $T > 360\\,\\text{K}$, the favorable entropy term $-T\\Delta S$ overcomes the unfavorable positive enthalpy, making $\\Delta G < 0$.",
            "distractorTip": "When $\\Delta H > 0$ and $\\Delta S > 0$, the reaction is spontaneous only at HIGH temperatures ($T > \\Delta H/\\Delta S$). Always convert $\\Delta H$ to Joules!"
          },
          {
            "id": "ch9-l2-q2",
            "stem": "Which combination of thermodynamic signs guarantees that a chemical reaction is thermodynamically favorable (spontaneous) at ALL temperatures?",
            "options": [
              "$\\Delta H > 0$ and $\\Delta S > 0$",
              "$\\Delta H > 0$ (endothermic) and $\\Delta S < 0$ (entropy decreases)",
              "$\\Delta H < 0$ and $\\Delta S < 0$",
              "$\\Delta H < 0$ (exothermic) and $\\Delta S > 0$ (entropy increases)"
            ],
            "correctIndex": 3,
            "explanation": "In $\\Delta G = \\Delta H - T\\Delta S$: if $\\Delta H$ is negative and $\\Delta S$ is positive, the term $-T\\Delta S$ is always negative for all positive Kelvin temperatures. The sum of two negative numbers is always negative ($\\Delta G < 0$), ensuring favorability at all temperatures.",
            "distractorTip": "$Delta H < 0, \\Delta S > 0 \\implies \\Delta G < 0$ ALWAYS; $\\Delta H > 0, \\Delta S < 0 \\implies \\Delta G > 0$ NEVER."
          },
          {
            "id": "chem9-l2-q3",
            "stem": "A chemical reaction has an endothermic enthalpy change ($\\Delta H > 0$) and a positive entropy change ($\\Delta S > 0$). Under what temperature conditions is this reaction thermodynamically favored (spontaneous, $\\Delta G < 0$)?",
            "options": [
              "At all temperatures",
              "At low temperatures only",
              "At high temperatures only, where the $T\\Delta S$ term becomes sufficiently large to overcome $\\Delta H$",
              "Never thermodynamically favored at any temperature"
            ],
            "correctIndex": 2,
            "explanation": "From $\\Delta G = \\Delta H - T\\Delta S$: when $\\Delta H > 0$ and $\\Delta S > 0$, the $-T\\Delta S$ term is negative. At low temperatures, $\\Delta H$ dominates and $\\Delta G > 0$ (non-spontaneous). At high temperatures, $T\\Delta S$ exceeds $\\Delta H$, driving $\\Delta G < 0$ (spontaneous).",
            "distractorTip": "Gibbs equation rules: $\\Delta H (+), \\Delta S (+) \\implies$ favored at HIGH $T$; $\\Delta H (-), \\Delta S (-) \\implies$ favored at LOW $T$."
          }
        ]
      },
      {
        "id": 903,
        "unitIndex": 9,
        "levelNumber": 3,
        "uniqueKey": "chem-u9-l3",
        "topicNumber": "Topic 9.5 & 9.6",
        "name": "Free Energy, Equilibrium & Coupled Reactions",
        "subtitle": "ΔG° = -RT ln K relationship and driving unfavorable processes via reaction coupling",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch9-l3-q1",
            "stem": "A reaction has a standard Gibbs free energy change of $\\Delta G^\\circ = -25.0\\,\\text{kJ/mol}$ at $298\\,\\text{K}$. What can be concluded about the equilibrium constant $K$ for this reaction? ($R = 8.314\\,\\text{J/}(\\text{mol}\\cdot\\text{K})$)",
            "options": [
              "$K > 1$ ($K \\approx 2.4 \\times 10^4$); at equilibrium, products predominate over reactants.",
              "$K < 1$; at equilibrium, reactants predominate.",
              "$K = 0$; the reaction never reaches equilibrium.",
              "$K = -25.0$; equilibrium constants share the sign of $\\Delta G^\\circ$."
            ],
            "correctIndex": 0,
            "explanation": "Using $\\Delta G^\\circ = -RT\\ln K \\implies \\ln K = -\\frac{\\Delta G^\\circ}{RT} = -\\frac{-25000\\,\\text{J/mol}}{(8.314)(298\\,\\text{K})} = +10.09 \\implies K = e^{10.09} \\approx 2.4 \\times 10^4$. Whenever $\\Delta G^\\circ < 0$, $K > 1$, meaning products are thermodynamically favored at equilibrium.",
            "distractorTip": "Relationship summary: $\\Delta G^circ < 0 \\iff K > 1$ (products favored); $\\Delta G^circ > 0 \\iff K < 1$ (reactants favored); $\\Delta G^circ = 0 \\iff K = 1$."
          },
          {
            "id": "ch9-l3-q2",
            "stem": "The direct extraction of copper from its oxide ore, $2CuO(s) \\rightarrow 2Cu(s) + O_2(g)$, is thermodynamically unfavorable with $\\Delta G^circ_1 = +256\\,\\text{kJ/mol}$. How is this extraction made thermodynamically favorable in industrial smelting?",
            "options": [
              "By adding water to dissolve all copper ions.",
              "By coupling the extraction to the oxidation of carbon ($2C(s) + O_2(g) \\rightarrow 2CO(g)$, $\\Delta G^circ_2 = -274\\,\\text{kJ/mol}$), making the net $\\Delta G^circ = -18\\,\\text{kJ/mol}$ (spontaneous).",
              "By performing the reaction in an insulated ice bath.",
              "By utilizing a platinum catalyst to change $\\Delta G^circ_1$ to negative."
            ],
            "correctIndex": 1,
            "explanation": "Thermally unfavorable processes (positive $\\Delta G^circ$) can be driven by coupling them with a highly exergonic reaction (negative $\\Delta G^circ$) such that the sum of the $\\Delta G^circ$ values for the coupled system is negative. Smelting copper ore with carbon coke provides a net negative free energy change.",
            "distractorTip": "Catalysts speed up reactions but NEVER make an unfavorable reaction favorable; only REACTION COUPLING can achieve that."
          },
          {
            "id": "chem9-l3-q3",
            "stem": "What mathematical relationship connects standard Gibbs free energy change ($\\Delta G^\\circ$) to the equilibrium constant ($K$) at temperature $T$?",
            "options": [
              "$\\Delta G^\\circ = -RT \\ln K$",
              "$\\Delta G^\\circ = -nFE^\\circ$",
              "$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$",
              "$\\Delta G^\\circ = RT \\log_{10} K$"
            ],
            "correctIndex": 0,
            "explanation": "$\\Delta G^\\circ = -RT \\ln K$. If $K > 1$, $\\ln K > 0$, making $\\Delta G^\\circ < 0$ (products favored at equilibrium). If $K < 1$, $\\ln K < 0$, making $\\Delta G^\\circ > 0$ (reactants favored).",
            "distractorTip": "$\\Delta G^\\circ = -RT \\ln K$: If $K > 1$, $\\Delta G^\\circ$ is negative (spontaneous/product-favored)."
          }
        ]
      },
      {
        "id": 904,
        "unitIndex": 9,
        "levelNumber": 4,
        "uniqueKey": "chem-u9-l4",
        "topicNumber": "Topic 9.7 & 9.8",
        "name": "Galvanic Cells & Standard Cell Potential",
        "subtitle": "Anode vs cathode, salt bridge ion flow, E°cell = E°cat - E°an, and ΔG° = -nFE°",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch9-l4-q1",
            "stem": "A standard galvanic cell is constructed with copper and zinc electrodes using the reduction potentials: $Zn^{2+} + 2e^- \\rightarrow Zn$ ($E^\\circ = -0.76\\,\\text{V}$) and $Cu^{2+} + 2e^- \\rightarrow Cu$ ($E^\\circ = +0.34\\,\\text{V}$). Which statement accurately describes the cell operation?",
            "options": [
              "Electrons flow from the copper cathode to the zinc anode through the external wire.",
              "Copper is oxidized at the anode, zinc is reduced at the cathode, and $E^\\circ_{\\text{cell}} = -1.10\\,\\text{V}$.",
              "Zinc is oxidized at the anode ($Zn \\rightarrow Zn^{2+} + 2e^-$), copper ions are reduced at the cathode ($Cu^{2+} + 2e^- \\rightarrow Cu$), and $E^\\circ_{\\text{cell}} = +1.10\\,\\text{V}$.",
              "Zinc mass increases while copper mass decreases over time."
            ],
            "correctIndex": 2,
            "explanation": "The half-reaction with the more positive reduction potential occurs at the cathode (reduction): $Cu^{2+} + 2e^- \\rightarrow Cu$ ($E^\\circ = +0.34\\,\\text{V}$). Zinc has the more negative potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$. Standard cell potential: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{red}}(\\text{cathode}) - E^\\circ_{\\text{red}}(\\text{anode}) = +0.34 - (-0.76) = +1.10\\,\\text{V}$. Electrons flow from anode (Zn) to cathode (Cu).",
            "distractorTip": "AN OX and RED CAT: Anode = Oxidation; Cathode = Reduction. Electrons always flow from ANODE to CATHODE!"
          },
          {
            "id": "ch9-l4-q2",
            "stem": "What is the purpose of the porous salt bridge (containing inert $KNO_3$) in a galvanic cell?",
            "options": [
              "It generates standard voltage by hydrolyzing water.",
              "It allows electrons to flow between the two aqueous solutions.",
              "It prevents the metal electrodes from dissolving.",
              "It maintains electrical neutrality: anions ($NO_3^-$) migrate into the anode compartment to balance positive charge buildup, while cations ($K^+$) migrate into the cathode compartment."
            ],
            "correctIndex": 3,
            "explanation": "As oxidation generates cations ($Zn^{2+}$) at the anode, positive charge builds up; as reduction removes cations ($Cu^{2+}$) at the cathode, negative charge builds up. Without a salt bridge, charge buildup instantly halts electron flow. The salt bridge allows ions to migrate to maintain electrical neutrality (anions to anode, cations to cathode).",
            "distractorTip": "Salt bridge mnemonic: ANIONS flow to the ANODE; CATIONS flow to the CATHODE. Electrons NEVER travel through the salt bridge!"
          },
          {
            "id": "chem9-l4-q3",
            "stem": "A standard Galvanic cell is constructed using the half-reactions:\n$Cu^{2+} + 2e^- \\to Cu \\quad E^\\circ = +0.34\\text{ V}$\n$Zn^{2+} + 2e^- \\to Zn \\quad E^\\circ = -0.76\\text{ V}$\nWhat is the standard cell potential ($E^\\circ_{\\text{cell}}$) of this battery?",
            "options": [
              "+0.42 V",
              "+1.10 V",
              "-0.42 V",
              "-1.10 V"
            ],
            "correctIndex": 1,
            "explanation": "For a spontaneous galvanic cell, the half-reaction with the more positive reduction potential occurs at the cathode ($Cu^{2+} \\to Cu$, $E^\\circ = +0.34\\text{ V}$). The other half-reaction is reversed at the anode ($Zn \\to Zn^{2+} + 2e^-$, oxidation). $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{red}}(\\text{cathode}) - E^\\circ_{\\text{red}}(\\text{anode}) = +0.34 - (-0.76) = +1.10\\text{ V}$.",
            "distractorTip": "Standard cell potential formula: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$. A galvanic cell MUST have a positive voltage!"
          }
        ]
      },
      {
        "id": 905,
        "unitIndex": 9,
        "levelNumber": 5,
        "uniqueKey": "chem-u9-l5",
        "topicNumber": "Topic 9.9",
        "name": "Cell Potential Under Nonstandard Conditions",
        "subtitle": "Nernst equation qualitative reasoning, Q shifts, concentration cells, and battery death",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch9-l5-q1",
            "stem": "A galvanic cell operates via: $Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)$ ($E^\\circ = +1.10\\,\\text{V}$). If distilled water is added to the anode compartment, diluting $[Zn^{2+}]$ to $0.010\\,\\text{M}$ while $[Cu^{2+}]$ remains at $1.0\\,\\text{M}$, how will the cell voltage ($E_{\\text{cell}}$) change?",
            "options": [
              "$E_{\\text{cell}}$ will increase ($E_{\\text{cell}} > +1.10\\,\\text{V}$) because decreasing $[Zn^{2+}]$ makes $Q = \\frac{[Zn^{2+}]}{[Cu^{2+}]} < 1$, driving the reaction further forward.",
              "$E_{\\text{cell}}$ will decrease because there are fewer zinc ions to carry current.",
              "$E_{\\text{cell}}$ remains exactly $+1.10\\,\\text{V}$ because cell voltage depends only on temperature.",
              "$E_{\\text{cell}}$ drops to zero immediately."
            ],
            "correctIndex": 0,
            "explanation": "Nernst equation: $E_{\\text{cell}} = E^\\circ - \\frac{0.0592}{n}\\log Q$. Reaction quotient $Q = \\frac{[Zn^{2+}]}{[Cu^{2+}]} = \\frac{0.010}{1.0} = 0.010$. Since $Q < 1$, $\\log Q = -2$, so $-\\frac{0.0592}{2}(-2) = +0.0592\\,\\text{V}$. Therefore, $E_{\\text{cell}} = 1.10 + 0.0592 = 1.16\\,\\text{V} > E^\\circ$. By Le Châtelier, lowering product concentration increases driving force.",
            "distractorTip": "When $Q < 1$ (reactants favored over products), $E_{\\text{cell}} > E^circ$. When $Q > 1$, $E_{\\text{cell}} < E^circ$. When $Q = K$, $E_{\\text{cell}} = 0$ (dead battery)."
          },
          {
            "id": "ch9-l5-q2",
            "stem": "A concentration cell consists of two nickel electrodes immersed in $Ni^{2+}$ solutions of different concentrations: Compartment A has $[Ni^{2+}] = 0.0010\\,\\text{M}$ and Compartment B has $[Ni^{2+}] = 1.0\\,\\text{M}$. Which compartment is the anode, and what happens as the cell discharges?",
            "options": [
              "Compartment B is the anode because it has more ions.",
              "Compartment A is the anode ($Ni \\rightarrow Ni^{2+} + 2e^-$ to increase $[Ni^{2+}]$); Compartment B is the cathode; the cell operates until both concentrations equalize.",
              "No voltage is generated because both electrodes are made of nickel ($E^\\circ = 0$).",
              "Compartment A is the cathode because electrons travel to lower concentration."
            ],
            "correctIndex": 1,
            "explanation": "In a concentration cell, $E^circ = 0$, but a spontaneous driving force exists to equalize concentrations. Oxidation occurs in the dilute compartment (Anode, $[Ni^{2+}] = 0.0010\\,\\text{M}$) to generate more $Ni^{2+}$ ions. Reduction occurs in the concentrated compartment (Cathode, $[Ni^{2+}] = 1.0\\,\\text{M}$) to consume $Ni^{2+}$. When concentrations become equal, $Q = 1$ and $E_{\\text{cell}} = 0$.",
            "distractorTip": "In concentration cells: DILUTE compartment = ANODE (produces ions); CONCENTRATED compartment = CATHODE (removes ions)."
          },
          {
            "id": "chem9-l5-q3",
            "stem": "In an operating Galvanic cell with overall reaction $Zn(s) + Cu^{2+}(aq) \\to Zn^{2+}(aq) + Cu(s)$, what happens to the cell potential ($E_{\\text{cell}}$) if the concentration of $Cu^{2+}$ ions is increased?",
            "options": [
              "$E_{\\text{cell}}$ decreases toward zero.",
              "By the Nernst equation ($E = E^\\circ - \\frac{0.0592}{n}\\log Q$), increasing reactant $[Cu^{2+}]$ decreases $Q$ ($Q < 1$), which increases the cell potential above $E^\\circ$.",
              "$E_{\\text{cell}}$ remains constant at $E^\\circ$.",
              "The cell immediately reverses polarity."
            ],
            "correctIndex": 1,
            "explanation": "$Q = [Zn^{2+}] / [Cu^{2+}]$. Increasing $[Cu^{2+}]$ decreases the reaction quotient $Q$. According to Le Châtelier's principle and the Nernst equation ($E = E^\\circ - \\frac{RT}{nF}\\ln Q$), when $Q < 1$, the logarithmic term is negative, driving $E_{\\text{cell}} > E^\\circ_{\\text{cell}}$.",
            "distractorTip": "Increasing REACTANT concentration drives the reaction forward, making cell potential $E_{\\text{cell}}$ GREATER than $E^\\circ$."
          }
        ]
      },
      {
        "id": 906,
        "unitIndex": 9,
        "levelNumber": 6,
        "uniqueKey": "chem-u9-l6",
        "topicNumber": "Topic 9.10",
        "name": "Electrolytic Cells & Faraday’s Law",
        "subtitle": "Non-spontaneous reactions, external power source, I = q/t, and electroplating stoichiometry",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ch9-l6-q1",
            "stem": "How does an electrolytic cell differ fundamentally from a galvanic (voltaic) cell?",
            "options": [
              "An electrolytic cell does not require electrolyte solutions.",
              "In an electrolytic cell, oxidation occurs at the cathode instead of the anode.",
              "An electrolytic cell uses an external power supply to drive a thermodynamically non-spontaneous redox reaction ($\\Delta G > 0, E_{\\text{cell}} < 0$), whereas a galvanic cell spontaneously generates electrical energy ($\\Delta G < 0, E_{\\text{cell}} > 0$).",
              "In an electrolytic cell, electrons flow from cathode to anode."
            ],
            "correctIndex": 2,
            "explanation": "Galvanic cells convert chemical energy into electricity spontaneously ($E^\\circ > 0, \\Delta G^circ < 0$). Electrolytic cells convert electrical energy from an external DC power source (battery) into chemical energy, driving non-spontaneous reactions ($E^\\circ < 0, \\Delta G^circ > 0$) such as electroplating or water electrolysis. In BOTH cells, oxidation occurs at the anode and reduction occurs at the cathode.",
            "distractorTip": "Anode is ALWAYS the site of oxidation, and cathode is ALWAYS the site of reduction in BOTH galvanic and electrolytic cells!"
          },
          {
            "id": "ch9-l6-q2",
            "stem": "A constant current of $5.00\\,\\text{A}$ is passed through an aqueous solution of silver nitrate ($AgNO_3$) for $30.0\\,\\text{minutes}$. How many grams of silver metal ($Ag$, $M = 107.87\\,\\text{g/mol}$) are electroplated onto the cathode? ($F = 96485\\,\\text{C/mol } e^-$)",
            "options": [
              "$1.68\\,\\text{g}$",
              "$5.03\\,\\text{g}$",
              "$20.1\\,\\text{g}$",
              "$10.1\\,\\text{g}$"
            ],
            "correctIndex": 3,
            "explanation": "1. Time in seconds: $t = 30.0\\,\\text{min} \\times 60\\,\\text{s/min} = 1800\\,\\text{s}$. 2. Charge: $q = I \\times t = 5.00\\,\\text{A} \\times 1800\\,\\text{s} = 9000\\,\\text{C}$. 3. Moles of electrons: $n_e = \\frac{9000\\,\\text{C}}{96485\\,\\text{C/mol } e^-} = 0.09328\\,\\text{mol } e^-$. 4. Reduction: $Ag^+ + e^- \\rightarrow Ag(s)$ ($1\\,\\text{mol } e^-$ per mol Ag). 5. Mass: $m = 0.09328\\,\\text{mol} \\times 107.87\\,\\text{g/mol} = 10.06\\,\\text{g} \\approx 10.1\\,\\text{g}$.",
            "distractorTip": "Electroplating roadmap: Current (A) $\\times$ Time (s) $\\to$ Coulombs (C) $\\div F \\to$ Moles of $e^- \\div n \\times M \\to$ Mass."
          },
          {
            "id": "chem9-l6-q3",
            "stem": "How is an electrolytic cell fundamentally different from a galvanic (voltaic) cell?",
            "options": [
              "Electrolytic cells produce electricity spontaneously from chemical reactions.",
              "An electrolytic cell uses an external electrical power source to drive a thermodynamically non-spontaneous chemical reaction ($\\Delta G > 0, E^\\circ_{\\text{cell}} < 0$).",
              "Electrolytic cells do not have anodes or cathodes.",
              "Electrolytic cells operate without electrolyte solutions."
            ],
            "correctIndex": 1,
            "explanation": "Galvanic cells convert thermodynamically favored chemical reactions into electricity ($E^\\circ > 0, \\Delta G < 0$). In contrast, electrolytic cells require an external power supply to force non-spontaneous redox reactions to occur (e.g. electroplating metals, recharging batteries).",
            "distractorTip": "Galvanic = spontaneous battery ($E^\\circ > 0$); Electrolytic = non-spontaneous, requires external power source ($E^\\circ < 0$)."
          }
        ]
      },
      {
        "id": 907,
        "unitIndex": 9,
        "levelNumber": 7,
        "uniqueKey": "chem-u9-l7",
        "topicNumber": "Unit 9 Boss",
        "name": "Electrochemistry & Voltage Nexus",
        "subtitle": "Multi-concept synthesis: Free energy ΔG° from cell potentials and quantitative electroplating of chromium",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ch9-l7-q1",
            "stem": "For the standard galvanic cell reaction: $2Al(s) + 3Cu^{2+}(aq) \\rightarrow 2Al^{3+}(aq) + 3Cu(s)$, the standard reduction potentials are $Cu^{2+}/Cu$ ($+0.34\\,\\text{V}$) and $Al^{3+}/Al$ ($-1.66\\,\\text{V}$). What are the values of $n$ (moles of electrons transferred), $E^\\circ_{\\text{cell}}$, and $\\Delta G^\\circ$? ($F = 96485\\,\\text{C/mol}$)",
            "options": [
              "$n = 6$; $E^\\circ_{\\text{cell}} = +2.00\\,\\text{V}$; $\\Delta G^\\circ = -1160\\,\\text{kJ/mol}$",
              "$n = 2$; $E^\\circ_{\\text{cell}} = +2.00\\,\\text{V}$; $\\Delta G^\\circ = -386\\,\\text{kJ/mol}$",
              "$n = 6$; $E^\\circ_{\\text{cell}} = -1.32\\,\\text{V}$; $\\Delta G^\\circ = +764\\,\\text{kJ/mol}$",
              "$n = 3$; $E^\\circ_{\\text{cell}} = +2.00\\,\\text{V}$; $\\Delta G^\\circ = -579\\,\\text{kJ/mol}$"
            ],
            "correctIndex": 0,
            "explanation": "1. $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cat}} - E^\\circ_{\\text{an}} = +0.34 - (-1.66) = +2.00\\,\\text{V}$. 2. Electrons transferred: $2Al \\rightarrow 2Al^{3+} + 6e^-$, so $n = 6$. 3. $\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}} = -(6)(96485\\,\\text{C/mol})(2.00\\,\\text{J/C}) = -1,157,820\\,\\text{J/mol} \\approx -1160\\,\\text{kJ/mol}$.",
            "distractorTip": "Do NOT multiply reduction potentials by stoichiometric coefficients when calculating $E^circ_{\\text{cell}}$ (potentials are intensive properties), but DO use the total balanced electrons for $n$ in $\\Delta G^circ = -nFE^circ$!"
          },
          {
            "id": "ch9-l7-q2",
            "stem": "An automobile parts manufacturer electroplates chromium metal onto steel car bumpers from an acidic bath containing dichromate ions: $Cr_2O_7^{2-} + 14H^+ + 12e^- \\rightarrow 2Cr(s) + 7H_2O$. To plate $52.0\\,\\text{g}$ of chromium metal ($M = 52.00\\,\\text{g/mol}$) using an electric current of $50.0\\,\\text{A}$, how long must the electrolysis be run? ($F = 96485\\,\\text{C/mol}$)",
            "options": [
              "$1930\\,\\text{seconds}$ (approximately $32.2\\,\\text{minutes}$)",
              "$11578\\,\\text{seconds}$ (approximately $3.22\\,\\text{hours}$)",
              "$5789\\,\\text{seconds}$ (approximately $1.61\\,\\text{hours}$)",
              "$69469\\,\\text{seconds}$ (approximately $19.3\\,\\text{hours}$)"
            ],
            "correctIndex": 1,
            "explanation": "1. Moles of Cr deposited $= \\frac{52.0\\,\\text{g}}{52.00\\,\\text{g/mol}} = 1.00\\,\\text{mol } Cr$. 2. Stoichiometry: $12\\,\\text{mol } e^-$ produces $2\\,\\text{mol } Cr$, so $6\\,\\text{mol } e^-$ produces $1\\,\\text{mol } Cr$. Moles of $e^- = 1.00 \\times 6 = 6.00\\,\\text{mol } e^-$. 3. Total charge required: $q = 6.00\\,\\text{mol } e^- \\times 96485\\,\\text{C/mol} = 578910\\,\\text{C}$. 4. Time: $t = \\frac{q}{I} = \\frac{578910\\,\\text{C}}{50.0\\,\\text{A}} = 11578.2\\,\\text{s} \\approx 3.22\\,\\text{hours}$.",
            "distractorTip": "Notice that 12 electrons produce 2 chromium atoms, so the electron-to-atom ratio is 6 electrons per Cr atom!"
          },
          {
            "id": "chem9-l7-q3",
            "stem": "According to Faraday's Law, what electric current ($I$) is required to plate out $0.50\\text{ mol}$ of solid copper from a $Cu^{2+}$ solution in $9650\\text{ seconds}$? (Faraday's constant $F = 96,500\\text{ C/mol } e^-$)",
            "options": [
              "5.0 A",
              "10.0 A",
              "2.5 A",
              "20.0 A"
            ],
            "correctIndex": 1,
            "explanation": "Half-reaction: $Cu^{2+} + 2e^- \\to Cu(s)$. To produce $0.50\\text{ mol } Cu$, moles of electrons needed $= 0.50 \\times 2 = 1.0\\text{ mol } e^-$. Total charge $q = (1.0\\text{ mol } e^-)(96,500\\text{ C/mol}) = 96,500\\text{ Coulombs}$. Current $I = q / t = 96,500\\text{ C} / 9650\\text{ s} = 10.0\\text{ Amperes}$.",
            "distractorTip": "Faraday's law stoichiometry: Moles of substance $\\times$ electrons per ion $\\times 96,500\\text{ C/mol} = I \\times t$."
          }
        ]
      }
    ]
  }
];
