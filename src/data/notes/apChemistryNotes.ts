import { APUnitNote } from './types';

export const AP_CHEMISTRY_NOTES: APUnitNote[] = [
  {
    "unitId": "u1",
    "unitNumber": 1,
    "title": "Atomic Structure and Properties",
    "examWeight": "7%–9% of AP Exam",
    "bigIdea": "Matter is composed of particles called atoms whose electron configurations and nuclear Coulombic attractions dictate physical and chemical properties.",
    "keyTheorems": [
      {
        "name": "Coulomb’s Law in Atomic Systems",
        "conditions": "Electrostatic force between charged particles (nucleus and electrons).",
        "conclusion": "Force of attraction is proportional to nuclear charge $q_1 = +Z_{\\text{eff}}$ and electron charge $q_2 = -e$, and inversely proportional to the square of the distance: $F \\propto \\frac{Z_{\\text{eff}}}{r^2}$.",
        "apTip": "When justifying ANY periodic trend on the AP exam, you MUST invoke either: (1) Effective nuclear charge ($Z_{\\text{eff}}$) across a period, or (2) Distance from the nucleus / number of occupied electron shells down a group."
      },
      {
        "name": "Beer-Lambert Law",
        "conditions": "Dilute solutions absorbing monochromatic light in a spectrophotometer.",
        "conclusion": "Absorbance is directly proportional to concentration and path length: $A = \\epsilon b c$.",
        "apTip": "Fingerprints or dirt on the cuvette increase measured absorbance, causing the calculated solution concentration to be falsely high!"
      }
    ],
    "formulas": [
      {
        "name": "Speed of Light & Photon Energy",
        "latex": "c = \\lambda \\nu, \\quad E = h\\nu = \\frac{hc}{\\lambda}",
        "explanation": "Relates wavelength $\\lambda$, frequency $\\nu$, and quantum photon energy $E$."
      },
      {
        "name": "Beer-Lambert Law",
        "latex": "A = \\epsilon b c = -\\log(I/I_0)",
        "explanation": "Relates absorbance $A$ to molar absorptivity $\\epsilon$, path length $b$, and concentration $c$."
      },
      {
        "name": "Average Atomic Mass",
        "latex": "\\text{Atomic Mass} = \\sum (\\text{fractional abundance} \\times \\text{isotopic mass})",
        "explanation": "Weighted average calculated from mass spectrometry peak heights."
      }
    ],
    "sections": [
      {
        "heading": "1. Periodic Trends Master Summary Table",
        "content": "Master the four major periodic trends and their exact College Board justifications:\n\n| Trend | Across a Period ($\\rightarrow$) | Down a Group ($\\downarrow$) | College Board CED Justification |\n| :--- | :--- | :--- | :--- |\n| **Atomic Radius** | **Decreases** | **Increases** | Across: $Z_{\\text{eff}}$ increases pulling valence electrons closer. Down: More electron shells ($n$), valence electrons farther from nucleus. |\n| **First Ionization Energy** | **Increases** | **Decreases** | Across: Higher $Z_{\\text{eff}}$ holds electrons tighter. Down: Increased distance and core electron shielding make valence electrons easier to remove. |\n| **Electronegativity** | **Increases** | **Decreases** | Across: Smaller radius + higher $Z_{\\text{eff}}$ attract shared pairs more strongly (Fluorine is highest). Down: Valence shell farther from nucleus. |\n| **Electron Affinity** | **Becomes more negative** | **Becomes less negative** | Across: Extra electron enters shell experiencing stronger $Z_{\\text{eff}}$. |\n\n*Crucial Anomaly*: Nitrogen has higher IE than Oxygen because N has a stable half-filled $2p^3$ subshell, whereas O has an electron pair in $2p^4$ experiencing electron-electron repulsion."
      },
      {
        "heading": "2. Photoelectron Spectroscopy (PES) & Shell Architecture (CED 1.3)",
        "content": "Photoelectron Spectroscopy (PES) directly measures the binding energy of electrons in an atom:\n\n$$\\text{Photon Energy } (h\\nu) = \\text{Binding Energy } (E_b) + \\text{Kinetic Energy } (KE)$$\n\n* **Reading the PES Spectrum**:\n  * **Binding Energy Axis**: Plotted on the $x$-axis with values **decreasing from left to right** (higher energy close to the nucleus on the left).\n  * **Peak Height**: Directly proportional to the **relative number of electrons** occupying that specific subshell.\n  * **Subshell Order**: Peaks from left to right correspond to electron configurations ($1s$, $2s$, $2p$, $3s$, $3p$, etc.).\n* **Coulombic Attraction ($F \\propto \\frac{q_1 q_2}{r^2}$)**:\n  * Higher nuclear charge ($Z$) pulls electrons tighter, shifting all peaks to **higher binding energies** (further left).\n  * Subshell shielding: $2s$ electrons experience higher effective nuclear charge ($Z_{\\text{eff}}$) than $2p$ electrons, giving $2s$ a higher binding energy."
      },
      {
        "heading": "3. Mass Spectrometry & Beer-Lambert Law Spectrophotometry (CED 1.2 & 1.4)",
        "content": "Analytical techniques frequently assessed on the AP Chemistry exam:\n\n* **Mass Spectrometry**:\n  * Separates isotopes by their mass-to-charge ratio ($m/z$).\n  * Average atomic mass is calculated from isotopic fractional abundances:\n    $$\\text{Average Mass} = \\sum (\\text{isotopic mass} \\times \\text{relative abundance})$$\n* **Beer-Lambert Law for Colored Solutions**:\n  $$A = \\epsilon \\cdot b \\cdot c$$\n  * $A$: Absorbance (unitless)\n  * $\\epsilon$: Molar absorptivity constant ($\\text{M}^{-1}\\text{cm}^{-1}$)\n  * $b$: Path length of cuvette ($1.0\\text{ cm}$ standard)\n  * $c$: Molar concentration (M)\n* **Common Experimental Lab Errors**:\n  * Fingerprints or water droplets on the clear sides of the cuvette scatter light, falsely **increasing measured absorbance** and calculated concentration!\n  * Setting spectrophotometer to wrong wavelength: must choose $\\lambda_{\\max}$ (wavelength of maximum absorbance) for highest sensitivity."
      },
      {
        "heading": "4. Official AP Lab: Beer-Lambert Law & Spectrophotometry (Skill 4.2)",
        "content": "The quintessential AP Chemistry spectrophotometric inquiry experiment:\n\n* **Theoretical Foundation**:\n  $$A = \\epsilon b c$$\n  * $A$: Absorbance (dimensionless, measured by spectrophotometer).\n  * $\\epsilon$: Molar absorptivity ($L\\cdot \\text{mol}^{-1}\\cdot \\text{cm}^{-1}$), a constant for a specific analyte at a given wavelength $\\lambda_{\\max}$.\n  * $b$: Path length of the cuvette (standard: $1.00\\text{ cm}$).\n  * $c$: Molar concentration of absorbing species ($\\text{mol}/L$).\n* **Experimental Procedure**:\n  1. Determine analytical wavelength $\\lambda_{\\max}$ by scanning the absorption spectrum of the colored solution (e.g., blue food dye or $\\text{CuSO}_4$) and selecting the wavelength of maximum absorbance.\n  2. Prepare standard solutions using precision serial dilutions with volumetric flasks and pipets.\n  3. Calibrate (\"blank\") the spectrophotometer using a cuvette containing only pure solvent (distilled water) to account for reflection and solvent absorption ($A_{\\text{blank}} = 0.000$).\n  4. Measure absorbance of each standard and construct a calibration curve ($A$ on vertical axis vs $c$ on horizontal axis).\n  5. Measure absorbance of the unknown sample and interpolate concentration using the calibration line equation $c = A/(\\epsilon b)$.\n* **Common Experimental Error Sources**:\n  * **Fingerprints / Smudges on Cuvette**: Scatter incident light, artificially inflating measured absorbance $\\implies$ calculated concentration is **systematically too high**.\n  * **Air Bubbles**: Scatter light, increasing measured absorbance $\\implies$ concentration **overestimated**.\n  * **Cuvette Not Rinsed with Solution (Residual Water Drops)**: Dilutes the analyte inside the cuvette $\\implies$ measured absorbance and calculated concentration are **systematically too low**.\n  * **High Concentrations ($A > 1.5$)**: Deviates from Beer's Law due to electrostatic interactions between absorbing molecules and detector saturation."
      },
      {
        "heading": "5. Photoelectron Spectroscopy (PES) & Coulomb’s Law Trends (CED 1.2)",
        "content": "Interpreting PES spectra to determine electronic shell architecture:\n\n* **Coulomb’s Law of Electrostatic Attraction**:\n  $$F_e = k\\frac{q_1 q_2}{r^2} \\quad \\implies \\quad E_p = -k\\frac{q_1 q_2}{r}$$\n  * Force increases with greater effective nuclear charge ($Z_{\\text{eff}}$) and decreases with larger atomic radius ($r$).\n* **PES Peak Interpretation**:\n  * **Binding Energy Axis**: Plotted with highest energy on the **LEFT** and lowest energy on the **RIGHT** (electrons closest to nucleus require the most energy to eject).\n  * **Peak Position**: Indicates subshell distance from nucleus ($1s$ peak is farthest left; followed by $2s, 2p, 3s, 3p\\dots$).\n  * **Peak Height / Area**: Proportional to the relative number of electrons occupying that subshell (a $2p$ peak holding 6 electrons is three times taller than a $2s$ peak holding 2 electrons).\n* **Effective Nuclear Charge ($Z_{\\text{eff}}$) & Periodic Trends**:\n  * $Z_{\\text{eff}} = Z - S$, where $Z$ is nuclear charge (protons) and $S$ is core shielding electrons.\n  * Moving across a period (left to right): Protons increase while core shielding remains constant $\\implies Z_{\\text{eff}}$ increases $\\implies$ atomic radius shrinks $\\implies$ first ionization energy increases.\n  * Moving down a group: Principal quantum level $n$ increases $\\implies$ valence electrons occupy shells farther from nucleus $\\implies$ radius increases $\\implies$ ionization energy decreases."
      }
    ],
    "workedExamples": [
      {
        "title": "Mass Spectrometry Isotope Abundance Calculation",
        "topicRef": "CED 1.2 Mass Spectroscopy of Elements",
        "question": "Mass spectrum analysis of a pure sample of element $X$ reveals two peaks: $^{69}X$ (mass $68.93\\text{ amu}$, abundance $60.11\\%$) and $^{71}X$ (mass $70.92\\text{ amu}$, abundance $39.89\\%$). Calculate the average atomic mass of element $X$ and identify the element.",
        "solutionSteps": [
          "Step 1: Convert abundance percentages to decimals: $f_1 = 0.6011$, $f_2 = 0.3989$.",
          "Step 2: Multiply each isotopic mass by its fractional abundance: $(68.93)(0.6011) = 41.434\\text{ amu}$, $(70.92)(0.3989) = 28.290\\text{ amu}$.",
          "Step 3: Sum the weighted values: $41.434 + 28.290 = 69.724\\text{ amu}$.",
          "Step 4: Check periodic table: Average atomic mass of $69.72\\text{ amu}$ corresponds to Gallium (Ga, atomic number 31)."
        ],
        "finalAnswer": "Average atomic mass = $69.72\\text{ amu}$; Element is Gallium (Ga).",
        "apScoringTip": "Show all intermediate multiplication terms. AP readers check that units (amu) and significant figures (4 sig figs) are properly maintained."
      }
    ],
    "diagrams": [
      {
        "id": "chem_pes_spectrum",
        "title": "Photoelectron Spectroscopy (PES) Spectrum",
        "subtitle": "Binding Energy Peaks vs. Subshell Electron Population",
        "type": "pes_spectrum",
        "description": "Diagram showing PES spectrum with binding energy on horizontal axis (decreasing left to right). Peak position reflects Coulombic attraction; peak height reflects relative electron count.",
        "takeaway": "Peaks with the highest binding energy (farthest left) correspond to innermost core electrons ($1s$). Peak height is directly proportional to number of electrons in that subshell."
      }
    ],
    "commonTraps": [
      "Justifying periodic trends using the \"octet rule\". The octet rule is an empirical guideline, NOT a physical explanation! Always refer to Coulomb's law ($Z_{\\text{eff}}$ and distance $r$).",
      "Forgetting that photoelectron spectroscopy (PES) displays binding energy DECREASING from left to right on the $x$-axis.",
      "Misinterpreting cuvette orientation in a spectrophotometer. The clear sides must face the light beam, not the frosted sides."
    ],
    "cramSheet": [
      "Coulomb's Law: Force $\\propto \\frac{q_1 q_2}{r^2}$. Explain trends using $Z_{\\text{eff}}$ (across) and electron shells / distance (down).",
      "PES peak position = binding energy ($Z_{\\text{eff}}$); PES peak height = number of electrons in subshell.",
      "Beer's Law: $A = \\epsilon b c$. Direct linear relationship between absorbance and molarity.",
      "Transition metals lose valence $s$-electrons before $d$-electrons when forming cations (e.g. $\\text{Fe} = [\\text{Ar}]4s^2 3d^6 \\implies \\text{Fe}^{2+} = [\\text{Ar}]3d^6$)."
    ]
  },
  {
    "unitId": "u2",
    "unitNumber": 2,
    "title": "Molecular and Ionic Compound Structure",
    "examWeight": "7%–9% of AP Exam",
    "bigIdea": "Chemical bonds form when valence electron interactions minimize potential energy between nuclei and electrons.",
    "keyTheorems": [
      {
        "name": "Lattice Energy and Coulomb’s Law",
        "conditions": "Ionic crystal lattices composed of alternating cations and anions.",
        "conclusion": "Lattice energy is proportional to product of ionic charges and inversely proportional to interionic radius: $E_{\\text{lattice}} \\propto \\frac{|q_1 q_2|}{r}$.",
        "apTip": "Ionic charge ALWAYS trumps ionic size! For example, $\\text{MgO}$ ($+2/-2$) has roughly $4\\times$ higher melting point than $\\text{NaCl}$ ($+1/-1$), even though $\\text{Mg}^{2+}$ and $\\text{Na}^+$ are similar in size."
      },
      {
        "name": "Formal Charge Minimization Principle",
        "conditions": "Evaluating competing valid Lewis structures for resonance.",
        "conclusion": "The most contributing Lewis structure minimizes formal charges to zero; any negative formal charge must reside on the most electronegative atom: $\\text{FC} = V - L - \\frac{1}{2}S$.",
        "apTip": "Always calculate formal charges on FRQs when asked to justify which resonance structure represents the predominant actual molecule."
      }
    ],
    "formulas": [
      {
        "name": "Formal Charge Formula",
        "latex": "\\text{FC} = \\text{Valence} - \\text{Lone Pair Electrons} - \\frac{1}{2}(\\text{Bonding Electrons})",
        "explanation": "Evaluates electron distribution for Lewis structures."
      },
      {
        "name": "Bond Order Definition",
        "latex": "\\text{Bond Order} = \\frac{\\text{Total Shared Electron Pairs in Resonating Bonds}}{\\text{Number of Bond Positions}}",
        "explanation": "Higher bond order means shorter bond length and higher bond dissociation energy."
      }
    ],
    "sections": [
      {
        "heading": "1. VSEPR Molecular Geometry Reference Guide",
        "content": "Master all steric numbers, bonding pairs, lone pairs, shapes, and bond angles:\n\n| Steric No. | Bonding Pairs | Lone Pairs | Electron Geometry | Molecular Geometry | Ideal Bond Angle | Hybridization |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| **2** | 2 | 0 | Linear | **Linear** | $180^\\circ$ | $sp$ |\n| **3** | 3 | 0 | Trigonal Planar | **Trigonal Planar** | $120^\\circ$ | $sp^2$ |\n| **3** | 2 | 1 | Trigonal Planar | **Bent** | $< 120^\\circ$ ($\\approx 117^\\circ$) | $sp^2$ |\n| **4** | 4 | 0 | Tetrahedral | **Tetrahedral** | $109.5^\\circ$ | $sp^3$ |\n| **4** | 3 | 1 | Tetrahedral | **Trigonal Pyramidal** | $< 109.5^\\circ$ ($\\approx 107^\\circ$) | $sp^3$ |\n| **4** | 2 | 2 | Tetrahedral | **Bent** | $< 109.5^\\circ$ ($\\approx 104.5^\\circ$) | $sp^3$ |\n| **5** | 5 | 0 | Trigonal Bipyramidal | **Trigonal Bipyramidal** | $90^\\circ, 120^\\circ$ | $sp^3d$ |\n| **6** | 6 | 0 | Octahedral | **Octahedral** | $90^\\circ$ | $sp^3d^2$ |\n| **6** | 4 | 2 | Octahedral | **Square Planar** | $90^\\circ$ | $sp^3d^2$ |\n\n*Lone Pair Repulsion Rule*: Lone pairs occupy more volume than bonding pairs, compressing adjacent bond angles."
      },
      {
        "heading": "2. Lewis Structures, Resonance & Formal Charge Optimization (CED 2.5 & 2.6)",
        "content": "Selecting the dominant Lewis structure for molecules and polyatomic ions:\n\n$$\\text{Formal Charge} = V - L - \\frac{1}{2}B$$\n*(Where $V$ = valence electrons, $L$ = lone pair electrons, and $B$ = shared bonding electrons).*\n\n* **Formal Charge Minimization Rules**:\n  1. The dominant Lewis structure is the one in which formal charges on all atoms are **closest to zero**.\n  2. Any negative formal charge must reside on the **most electronegative atom** (e.g., Oxygen or Nitrogen).\n* **Resonance Hybrids**:\n  * When multiple valid Lewis structures exist (e.g., $NO_3^-$ or $CO_3^{2-}$), the actual molecule is a single **resonance hybrid** with identical, intermediate bond lengths and fractional bond orders (e.g. bond order of $4/3$ for carbonate).\n* **Octet Rule Exceptions**:\n  * Incomplete octets: Boron ($BF_3$, 6 electrons) and Beryllium ($BeCl_2$, 4 electrons).\n  * Expanded octets: Central atoms in Period 3 or below ($P, S, Cl, Xe$) have available empty $d$-orbitals (e.g., $SF_6$, $PCl_5$)."
      },
      {
        "heading": "3. Hybridization ($sp, sp^2, sp^3$) & Sigma/Pi Bonding (CED 2.7)",
        "content": "Orbital hybridization and molecular orbital geometry:\n\n| Steric Number | Hybridization | Geometry | $\\sigma$ and $\\pi$ Composition |\n| :--- | :--- | :--- | :--- |\n| **2** | $sp$ | Linear ($180^\\circ$) | Single bond = $1\\sigma$; Triple bond = $1\\sigma + 2\\pi$ |\n| **3** | $sp^2$ | Trigonal Planar ($120^\\circ$) | Double bond = $1\\sigma + 1\\pi$ |\n| **4** | $sp^3$ | Tetrahedral ($109.5^\\circ$) | Single bonds = $1\\sigma$ each |\n\n* **Sigma ($\\sigma$) vs. Pi ($\\pi$) Orbitals**:\n  * **$\\sigma$ bonds**: End-to-end orbital overlap along the internuclear axis; free rotation permitted.\n  * **$\\pi$ bonds**: Side-by-side overlap of unhybridized $p$-orbitals above and below the axis; prevents rotation, locking molecular geometry in place."
      },
      {
        "heading": "3. Metallic Bonding & Substitutional vs. Interstitial Alloys (CED 2.4)",
        "content": "Metals consist of a rigid lattice of positive metal cations surrounded by a delocalized \"sea of mobile valence electrons\":\n- **Properties:** High electrical and thermal conductivity (due to freely flowing electrons), malleability and ductility (metal atom layers can slide over each other without breaking electrostatic bonds).\n- **Alloy Classifications on the AP Exam:**\n  - **Substitutional Alloys:** Formed between elements of **comparable atomic radii** (e.g. Brass: Copper and Zinc). Host metal atoms are directly replaced by solute atoms. Density and malleability remain similar.\n  - **Interstitial Alloys:** Formed between atoms of **vastly different atomic radii** (e.g. Steel: Carbon filling spaces between Iron atoms). Small solute atoms lodge into the \"interstices\" between larger host atoms. This prevents metal layers from sliding, making the alloy **substantially harder, stronger, and less malleable** than pure iron!"
      },
      {
        "heading": "4. Intramolecular Potential Energy & Internuclear Distance Curves (CED 2.2)",
        "content": "A graph of potential energy vs. internuclear distance between two atoms explains chemical bond formation:\n- **At Infinite Distance:** Potential energy is zero (no interaction).\n- **As Atoms Approach:** Electrostatic attraction between the nucleus of one atom and the electrons of the other lowers potential energy.\n- **The Potential Energy Minimum (The \"Well\"):**\n  - **$x$-coordinate of the minimum:** Equals the **equilibrium bond length**.\n  - **Depth of the minimum (energy needed to separate to zero):** Equals the **bond energy** (bond dissociation energy).\n- **At Too Close Distance:** Strong nuclear-nuclear and core electron repulsions dominate, causing potential energy to skyrocket steeply upwards.\n- **Comparing Bonds:**\n  - Double and triple bonds have **greater depth** (higher bond energy) and **shorter $x$-position** (shorter bond length) compared to single bonds.\n  - Smaller atomic radii (e.g., $H-F$ vs $H-I$) allow nuclei to get closer, producing shorter bond lengths and deeper wells."
      },
      {
        "heading": "6. Formal Charge Optimization, Resonance Hybrids & Bond Order (CED 2.3)",
        "content": "Evaluating Lewis structures and resonance delocalization:\n\n* **Formal Charge Formula**:\n  $$\\text{FC} = V - N - \\frac{B}{2}$$\n  * $V$: Valence electrons of free neutral atom.\n  * $N$: Number of non-bonding lone pair electrons.\n  * $B$: Number of shared bonding electrons (each single bond counts as 1).\n* **Selection Rules for Best Lewis Structure**:\n  1. A Lewis structure where all atoms have formal charges equal to zero is preferred.\n  2. If formal charges are unavoidable, smaller charges ($0, \\pm 1$) are favored over larger ones.\n  3. Negative formal charges MUST reside on the most electronegative elements (e.g., $F > O > N > Cl$).\n* **Resonance Hybrids & Fractional Bond Order**:\n  * In the nitrate ion ($\\text{NO}_3^-$), three equivalent resonance structures exist.\n  * Experimental measurement shows all three $N-O$ bonds have identical length ($124\\text{ pm}$) and identical bond strength, intermediate between a single and double bond.\n  * **Bond Order Calculation**:\n    $$\\text{Bond Order} = \\frac{\\text{Total Shared Electron Pairs in Resonance Bonds}}{\\text{Number of Bond Locations}} = \\frac{4}{3} \\approx 1.33$$"
      },
      {
        "heading": "7. Hybridization & Sigma/Pi ($\\sigma/\\pi$) Orbital Overlap Mechanics (CED 2.7)",
        "content": "Localized electron model and orbital hybridization:\n\n* **Steric Number & Hybrid Orbital Geometries**:\n  * **Steric Number 2**: $sp$ hybridization ($180^\\circ$ linear geometry, two unhybridized $p$-orbitals available for $\\pi$-bonding).\n  * **Steric Number 3**: $sp^2$ hybridization ($120^\\circ$ trigonal planar geometry, one unhybridized $p$-orbital).\n  * **Steric Number 4**: $sp^3$ hybridization ($109.5^\\circ$ tetrahedral geometry, zero unhybridized $p$-orbitals).\n* **Sigma ($\\sigma$) vs. Pi ($\\pi$) Bonds**:\n  * **Sigma ($\\sigma$) Bond**: Formed by end-to-end (head-on) overlap of hybrid orbitals directly along the internuclear axis. Free rotation around single bonds.\n  * **Pi ($\\pi$) Bond**: Formed by sideways parallel overlap of unhybridized $p$-orbitals above and below the internuclear axis. Restricts molecular rotation, creating cis/trans geometric isomerism.\n  * Single bond = $1\\sigma$; Double bond = $1\\sigma + 1\\pi$; Triple bond = $1\\sigma + 2\\pi$."
      },
      {
        "heading": "6. Formal Charge Optimization, Resonance Hybrids & Bond Order (CED 2.3)",
        "content": "Evaluating Lewis structures and resonance delocalization:\n\n* **Formal Charge Formula**:\n  $$\\text{FC} = V - N - \\frac{B}{2}$$\n  * $V$: Valence electrons of free neutral atom.\n  * $N$: Number of non-bonding lone pair electrons.\n  * $B$: Number of shared bonding electrons (each single bond counts as 1).\n* **Selection Rules for Best Lewis Structure**:\n  1. A Lewis structure where all atoms have formal charges equal to zero is preferred.\n  2. If formal charges are unavoidable, smaller charges ($0, \\pm 1$) are favored over larger ones.\n  3. Negative formal charges MUST reside on the most electronegative elements (e.g., $F > O > N > Cl$).\n* **Resonance Hybrids & Fractional Bond Order**:\n  * In the nitrate ion ($\\text{NO}_3^-$), three equivalent resonance structures exist.\n  * Experimental measurement shows all three $N-O$ bonds have identical length ($124\\text{ pm}$) and identical bond strength, intermediate between a single and double bond.\n  * **Bond Order Calculation**:\n    $$\\text{Bond Order} = \\frac{\\text{Total Shared Electron Pairs in Resonance Bonds}}{\\text{Number of Bond Locations}} = \\frac{4}{3} \\approx 1.33$$"
      },
      {
        "heading": "7. Hybridization & Sigma/Pi ($\\sigma/\\pi$) Orbital Overlap Mechanics (CED 2.7)",
        "content": "Localized electron model and orbital hybridization:\n\n* **Steric Number & Hybrid Orbital Geometries**:\n  * **Steric Number 2**: $sp$ hybridization ($180^\\circ$ linear geometry, two unhybridized $p$-orbitals available for $\\pi$-bonding).\n  * **Steric Number 3**: $sp^2$ hybridization ($120^\\circ$ trigonal planar geometry, one unhybridized $p$-orbital).\n  * **Steric Number 4**: $sp^3$ hybridization ($109.5^\\circ$ tetrahedral geometry, zero unhybridized $p$-orbitals).\n* **Sigma ($\\sigma$) vs. Pi ($\\pi$) Bonds**:\n  * **Sigma ($\\sigma$) Bond**: Formed by end-to-end (head-on) overlap of hybrid orbitals directly along the internuclear axis. Free rotation around single bonds.\n  * **Pi ($\\pi$) Bond**: Formed by sideways parallel overlap of unhybridized $p$-orbitals above and below the internuclear axis. Restricts molecular rotation, creating cis/trans geometric isomerism.\n  * Single bond = $1\\sigma$; Double bond = $1\\sigma + 1\\pi$; Triple bond = $1\\sigma + 2\\pi$."
      }
    ],
    "workedExamples": [
      {
        "title": "Lewis Structure, Formal Charge, and Geometry of Xenon Tetrafluoride",
        "topicRef": "CED 2.6 Resonance and Formal Charge",
        "question": "Draw the Lewis structure of $\\text{XeF}_4$. Determine (a) the formal charge on the central xenon atom, (b) the electron-domain geometry, (c) the molecular geometry, and (d) whether the molecule possesses a permanent dipole moment.",
        "solutionSteps": [
          "Step 1: Count valence electrons: $\\text{Xe} = 8$, $4 \\times \\text{F} = 4(7) = 28$. Total = $8 + 28 = 36$ electrons (18 pairs).",
          "Step 2: Place Xe at center, form 4 single bonds to F atoms ($4 \\times 2 = 8$ e⁻). Octet on 4 F atoms requires $4 \\times 6 = 24$ e⁻. Total used = $8 + 24 = 32$ e⁻.",
          "Step 3: Remaining electrons = $36 - 32 = 4$ electrons (2 lone pairs). Place both lone pairs on the central Xe atom (expanded octet allowable for Period 5 Xe).",
          "Step 4: Formal charge on Xe: $\\text{FC} = 8 - 4 \\text{ (lone)} - \\frac{1}{2}(8) \\text{ (bonds)} = 8 - 4 - 4 = 0$.",
          "Step 5: Steric number = 4 bonding + 2 lone pairs = 6 domains $\\implies$ Octahedral electron geometry.",
          "Step 6: Lone pairs occupy opposite axial positions ($180^\\circ$) to minimize repulsion $\\implies$ Square Planar molecular geometry.",
          "Step 7: Molecular symmetry: The four polar Xe-F bond dipoles cancel in the square plane, and the two axial lone pairs cancel $\\implies$ Nonpolar molecule (zero net dipole moment)."
        ],
        "finalAnswer": "$\\text{XeF}_4$ has Square Planar molecular geometry with $\\text{FC}(\\text{Xe}) = 0$. It is nonpolar with zero net dipole moment.",
        "apScoringTip": "Distinguish clearly between electron-domain geometry (Octahedral) and molecular geometry (Square Planar). Confusing the two loses points on AP Free Response."
      }
    ],
    "diagrams": [
      {
        "id": "chem_potential_energy_curve",
        "title": "Internuclear Distance vs. Potential Energy Curve",
        "subtitle": "Bond Length at Energy Minimum vs. Nuclear Repulsion",
        "type": "bond_energy_curve",
        "description": "Curve showing potential energy as two atoms approach. Minimum potential energy corresponds to equilibrium bond length and bond dissociation energy.",
        "takeaway": "Bond length is the internuclear separation distance where attractive forces (electrons to nuclei) and repulsive forces (nuclei to nuclei) balance to achieve minimum potential energy."
      }
    ],
    "commonTraps": [
      "Assuming all molecules with polar bonds are polar molecules. High-symmetry molecules (e.g. $\\text{CO}_2, \\text{CF}_4, \\text{SF}_6, \\text{XeF}_4$) have polar bonds whose vector dipoles cancel completely, making the overall molecule nonpolar!",
      "Drawing double bonds to fluorine to satisfy the octet rule. Fluorine is the most electronegative element and NEVER forms multiple bonds or carries positive formal charge.",
      "Confusing sigma ($\\sigma$) and pi ($\\pi$) bonds. A single bond is $1\\sigma$; a double bond is $1\\sigma + 1\\pi$; a triple bond is $1\\sigma + 2\\pi$. Pi bonds do NOT rotate freely."
    ],
    "cramSheet": [
      "Lattice energy: $E \\propto \\frac{q_1 q_2}{r}$. Higher charges increase melting point dramatically.",
      "Steric number = bonded atoms + lone pairs on central atom.",
      "Lone pairs push bonded atoms closer, reducing bond angles ($109.5^\\circ \\rightarrow 107^\\circ \\rightarrow 104.5^\\circ$).",
      "Single bond = $1\\sigma$; Double bond = $1\\sigma + 1\\pi$; Triple bond = $1\\sigma + 2\\pi$."
    ]
  },
  {
    "unitId": "u3",
    "unitNumber": 3,
    "title": "Intermolecular Forces & Properties",
    "examWeight": "18%–22% of AP Exam",
    "bigIdea": "Intermolecular forces (IMFs) dictate the macroscopic physical properties of liquids and solids, including boiling point, vapor pressure, and solubility.",
    "keyTheorems": [
      {
        "name": "Ideal Gas Law & Kinetic Molecular Theory (KMT)",
        "conditions": "Gases at high temperature and low pressure where particle volume is negligible and intermolecular attractions are zero.",
        "conclusion": "$PV = nRT$. Average kinetic energy of gas molecules is strictly proportional to absolute temperature in Kelvin: $K_{\\text{avg}} = \\frac{3}{2}RT$.",
        "apTip": "Real gases deviate MOST from ideal behavior at LOW temperature (slow molecules feel attractive IMFs) and HIGH pressure (particle volume is no longer negligible)!"
      },
      {
        "name": "Vapor Pressure and Boiling Point Equilibrium",
        "conditions": "Liquid-vapor dynamic equilibrium in a closed or open vessel.",
        "conclusion": "A liquid boils when its vapor pressure equals the prevailing ambient atmospheric pressure ($P_{\\text{vap}} = P_{\\text{atm}}$).",
        "apTip": "Stronger IMFs $\\implies$ Lower vapor pressure $\\implies$ Higher boiling point $\\implies$ Higher enthalpy of vaporization ($\\Delta H_{\\text{vap}}$)."
      }
    ],
    "formulas": [
      {
        "name": "Ideal Gas Law",
        "latex": "PV = nRT",
        "explanation": "$P$ in atm, $V$ in L, $n$ in moles, $R = 0.08206\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$, $T$ in K."
      },
      {
        "name": "Dalton’s Law of Partial Pressures",
        "latex": "P_{\\text{total}} = \\sum P_i, \\quad P_A = X_A P_{\\text{total}}",
        "explanation": "Partial pressure of gas $A$ equals its mole fraction $X_A$ times total pressure."
      },
      {
        "name": "Root Mean Square Speed",
        "latex": "u_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}",
        "explanation": "Lighter molar mass $M$ particles travel at higher average speeds at the same temperature."
      },
      {
        "name": "Molarity Solution Formula",
        "latex": "M = \\frac{\\text{moles of solute}}{\\text{liters of solution}}",
        "explanation": "Fundamental measure of solution concentration in chemical analysis."
      }
    ],
    "sections": [
      {
        "heading": "1. IMF Hierarchy and Polarizability Comparison",
        "content": "Intermolecular forces ranked from weakest to strongest (all are weaker than covalent or ionic bonds):\n\n1. **London Dispersion Forces (LDF)**:\n   - Present in ALL molecules (polar and nonpolar).\n   - Caused by temporary, instantaneous induced dipoles.\n   - **Crucial AP Rule**: Larger electron clouds have **greater polarizability** (electrons are more easily displaced), creating stronger temporary dipoles. A large nonpolar molecule like $\\text{I}_2$ (solid) has stronger LDFs than a small polar molecule like $\\text{HCl}$ (gas)!\n2. **Dipole-Dipole Attractions**:\n   - Occur between polar molecules with permanent net dipole moments.\n3. **Hydrogen Bonding**:\n   - Unusually strong dipole-dipole attraction occurring when hydrogen is covalently bonded to small, highly electronegative atoms: **N, O, or F**.\n4. **Ion-Dipole Interactions**:\n   - Occur when ionic salts dissolve in polar solvents (e.g. $\\text{Na}^+$ surrounded by negative oxygen ends of $\\text{H}_2\\text{O}$)."
      },
      {
        "heading": "2. Intermolecular Forces Hierarchy & Property Correlation Matrix",
        "content": "Direct relationship between IMF strength and macroscopic physical properties:\n\n| Intermolecular Force | Typical Energy | Participating Species | Boiling / Melting Point | Vapor Pressure | Viscosity & Surface Tension | Characteristic Example |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| **London Dispersion (LDF)** | $0.1 - 10\\text{ kJ/mol}$ | All atoms & molecules | Lowest (unless very large electron cloud) | **Highest** | Lowest | $\\text{CH}_4, \\text{Ne}, \\text{I}_2$ (solid due to high polarizability!) |\n| **Dipole-Dipole** | $3 - 20\\text{ kJ/mol}$ | Polar molecules | Intermediate | Intermediate | Intermediate | $\\text{HCl}, \\text{SO}_2, \\text{CH}_3\\text{Cl}$ |\n| **Hydrogen Bonding** | $10 - 40\\text{ kJ/mol}$ | H bonded directly to **N, O, or F** | **Very High** | Low | High | $\\text{H}_2\\text{O}, \\text{NH}_3, \\text{HF}, \\text{CH}_3\\text{OH}$ |\n| **Ion-Dipole** | $40 - 100+\\text{ kJ/mol}$ | Ionic salt dissolved in polar liquid | Extremely High (hydration) | Very Low | High | $\\text{Na}^+(aq) + \\text{Cl}^-(aq)$ in $\\text{H}_2\\text{O}$ |\n\n*Key AP Correlation*: Stronger IMFs $\\implies$ Higher Boiling Point, Higher Heat of Vaporization ($\\Delta H_{\\text{vap}}$), Higher Surface Tension, Higher Viscosity, but **LOWER Vapor Pressure**!"
      },
      {
        "heading": "3. Intermolecular Forces Hierarchy & Polarizability (CED 3.1–3.2)",
        "content": "Intermolecular forces (IMFs) are attractive forces BETWEEN molecules:\n1. **London Dispersion Forces (LDFs):**\n   - Present in **ALL atoms and molecules** (polar and nonpolar).\n   - Caused by momentary fluctuations in electron distribution creating temporary dipoles.\n   - **Polarizability Rule:** Molecules with **more electrons** have larger, more diffuse electron clouds that are more polarizable, generating **stronger LDFs** and higher boiling points (e.g. $I_2$ is a solid, $Br_2$ is a liquid, $Cl_2$ is a gas at room temp).\n2. **Dipole-Dipole Attractions:** Occur between permanent polar molecules. Stronger than LDFs between molecules of similar size.\n3. **Hydrogen Bonding:** An unusually strong dipole-dipole attraction occurring ONLY when Hydrogen is covalently bonded directly to **Nitrogen, Oxygen, or Fluorine ($N, O, F$)**. Explains the anomalously high boiling point of water.\n4. **Ion-Dipole Forces:** Occur when ionic salts dissolve in polar solvents (e.g. $Na^+$ surrounded by partial negative oxygens of water). Strongest non-covalent interaction!"
      },
      {
        "heading": "4. Ideal Gas Law vs. Real Gas Deviations (CED 3.4–3.6)",
        "content": "The Ideal Gas Law $PV = nRT$ assumes: (1) Gas particles have zero volume, and (2) Gas particles exert zero intermolecular attractions.\n\n**When Real Gases Deviate from Ideality:**\nReal gases deviate most severely under two extreme physical conditions:\n1. **Extremely High Pressure / Small Volume:** Gas particles are forced close together; their own **finite molecular volume** becomes a significant fraction of total container volume, causing the actual volume to be larger than predicted ($V_{\\text{real}} > V_{\\text{ideal}}$).\n2. **Extremely Low Temperature:** Gas particles move slowly; **intermolecular attractive forces** pull particles toward each other, reducing the frequency and force of wall collisions, causing measured pressure to be lower than predicted ($P_{\\text{real}} < P_{\\text{ideal}}$).\n\n*Most Ideal Gas:* Helium ($He$) or Hydrogen ($H_2$) because they have the smallest atomic volume and weakest LDFs."
      },
      {
        "heading": "5. Maxwell-Boltzmann Speed Distributions (CED 3.5)",
        "content": "The Maxwell-Boltzmann distribution plots molecular speed on the $x$-axis vs fraction of particles on the $y$-axis:\n- **Temperature Effect (Same Gas):**\n  - As temperature increases, average kinetic energy increases ($KE_{\\text{avg}} = \\frac{3}{2}RT$).\n  - The distribution peak shifts to the **right** (higher average speed) and **flattens out** (broader spread of speeds).\n  - The area under the curve remains constant (equals 100% of particles).\n- **Molar Mass Effect (Same Temperature):**\n  - Gases at the same temperature have the **exact same average kinetic energy**.\n  - Since $KE = \\frac{1}{2}m v^2$, lighter gases ($He, H_2$) move with significantly **higher average speeds** ($v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$) than heavier gases ($Ar, Xe$)."
      },
      {
        "heading": "6. Solution Energetics & Particulate Hydration Shells (CED 3.7)",
        "content": "Microscopic particulate behavior during dissolution:\n\n* **Three-Step Thermodynamic Enthalpy of Solution**:\n  $$\\Delta H_{\\text{soln}} = \\Delta H_{\\text{solute-solute}} + \\Delta H_{\\text{solvent-solvent}} + \\Delta H_{\\text{solute-solvent}}$$\n  * $\\Delta H_1$ (Solute separation - expanding solute): Breaking lattice energy $\\implies$ strictly **endothermic** ($>0$).\n  * $\\Delta H_2$ (Solvent separation - expanding solvent): Overcoming solvent-solvent hydrogen bonds $\\implies$ strictly **endothermic** ($>0$).\n  * $\\Delta H_3$ (Hydration / Solvation): Attractive ion-dipole interactions forming between ions and water $\\implies$ strictly **exothermic** ($<0$).\n* **Drawing Particulate Hydration Shells (AP FRQ Classic)**:\n  * When drawing aqueous ions, dipole orientation is strictly graded:\n  * **Cations ($\\text{Na}^+, \\text{Mg}^{2+}$)**: Water molecules must be drawn with their **partially negative Oxygen atoms ($\\delta^-$)** oriented toward the positive cation.\n  * **Anions ($\\text{Cl}^-, \\text{SO}_4^{2-}$)**: Water molecules must be drawn with their **partially positive Hydrogen atoms ($\\delta^+$)** pointing toward the negative anion."
      },
      {
        "heading": "7. Chromatography & Retardation Factors ($R_f$) (CED 3.9)",
        "content": "Analytical separation based on intermolecular force differentials:\n\n* **Paper & Thin-Layer Chromatography (TLC)**:\n  * Employs a **Stationary Phase** (polar cellulose paper / silica gel) and a **Mobile Phase** (liquid solvent, e.g., nonpolar hexane or polar ethanol).\n  * As the mobile phase ascends via capillary action, analyte components partition between stationary and mobile phases based on IMFs:\n    * Solutes with IMFs similar to the solvent travel rapidly with the solvent front.\n    * Solutes with strong affinity for the stationary phase adsorb tightly and travel slowly.\n* **Calculating Retardation Factor ($R_f$)**:\n  $$R_f = \\frac{\\text{Distance traveled by solute}}{\\text{Distance traveled by solvent front}}$$\n  * Values range strictly between $0.0$ and $1.0$ and are characteristic constants under controlled temperature and solvent conditions."
      }
    ],
    "workedExamples": [
      {
        "title": "Dalton’s Law with Gas Collected Over Water",
        "topicRef": "CED 3.5 Dalton’s Law of Partial Pressures",
        "question": "Hydrogen gas is collected over water at $25.0^\\circ\\text{C}$ in a eudiometer tube. The total atmospheric barometric pressure is $758.0\\text{ mmHg}$, and the collected gas volume is $245\\text{ mL}$. The vapor pressure of water at $25.0^\\circ\\text{C}$ is $23.8\\text{ mmHg}$. Calculate the moles of dry $\\text{H}_2$ gas collected.",
        "solutionSteps": [
          "Step 1: Apply Dalton’s Law to find dry $\\text{H}_2$ pressure: $P_{\\text{total}} = P_{\\text{H}_2} + P_{\\text{H}_2\\text{O}} \\implies P_{\\text{H}_2} = P_{\\text{total}} - P_{\\text{H}_2\\text{O}}$.",
          "Step 2: $P_{\\text{H}_2} = 758.0 - 23.8 = 734.2\\text{ mmHg}$.",
          "Step 3: Convert pressure to atm: $P = \\frac{734.2}{760.0} \\approx 0.96605\\text{ atm}$.",
          "Step 4: Convert volume to liters: $V = 0.245\\text{ L}$. Temperature in Kelvin: $T = 25.0 + 273.15 = 298.15\\text{ K}$.",
          "Step 5: Use ideal gas law $n = \\frac{PV}{RT}$: $n = \\frac{(0.96605)(0.245)}{(0.08206)(298.15)} = \\frac{0.23668}{24.466} \\approx 0.00967\\text{ mol}$."
        ],
        "finalAnswer": "Moles of dry $\\text{H}_2 = 9.67 \\times 10^{-3}\\text{ mol}$.",
        "apScoringTip": "Always remember to subtract water vapor pressure ($P_{\\text{H}_2\\text{O}}$) when a gas is collected over water! Graders penalize students who use total pressure directly."
      }
    ],
    "diagrams": [
      {
        "id": "chem_maxwell_boltzmann",
        "title": "Maxwell-Boltzmann Molecular Speed Distribution",
        "subtitle": "Effect of Temperature and Molar Mass on Velocity Curve",
        "type": "maxwell_boltzmann",
        "description": "Distribution curves showing fraction of molecules vs speed. Increasing temperature flattens and shifts peak to right; lower molar mass shifts curve to right.",
        "takeaway": "Area under the curve represents total number of particles and remains constant. Higher temperature means a larger fraction of molecules possess kinetic energy exceeding activation energy $E_a$."
      }
    ],
    "commonTraps": [
      "Stating that hydrogen bonding occurs in any molecule containing hydrogen. $\\text{CH}_4$ and $\\text{CH}_3\\text{OCH}_3$ contain hydrogen, but have NO H-bonding because H is not bonded directly to N, O, or F!",
      "Claiming that covalent bonds break when water boils. Only intermolecular hydrogen bonds between molecules break; the internal $\\text{H}-\\text{O}$ covalent bonds remain 100% intact.",
      "Forgetting to convert Celsius to Kelvin in gas law calculations ($T = ^\\circ\\text{C} + 273.15$)."
    ],
    "cramSheet": [
      "Boiling Point $\\uparrow$, Viscosity $\\uparrow$, Surface Tension $\\uparrow$ with stronger IMFs.",
      "Vapor Pressure $\\downarrow$ with stronger IMFs (inversely related!).",
      "Gas law: $PV = nRT$. When gas is collected over water, subtract $P_{\\text{water}}$.",
      "At same temperature, lighter gas molecules move faster ($u_{\\text{rms}} \\propto \\sqrt{1/M}$)."
    ]
  },
  {
    "unitId": "u4",
    "unitNumber": 4,
    "title": "Chemical Reactions and Stoichiometry",
    "examWeight": "7%–9% of AP Exam",
    "bigIdea": "Chemical changes involve the reorganization of atoms into new substances governed by the conservation of mass, charge, and energy.",
    "keyTheorems": [
      {
        "name": "Law of Conservation of Mass & Charge",
        "conditions": "All balanced chemical and net ionic equations.",
        "conclusion": "Total atoms of each element and total net electrical charge must be equal on both reactant and product sides of the equation.",
        "apTip": "Spectator ions (ions that remain aqueous and unchanged) MUST be canceled out to write official net ionic equations on AP exams."
      },
      {
        "name": "Oxidation State Conservation in Redox Reactions",
        "conditions": "Any oxidation-reduction electron transfer process.",
        "conclusion": "Total electrons lost in oxidation (OIL) must precisely equal total electrons gained in reduction (RIG).",
        "apTip": "The oxidizing agent is the species that gets REDUCED; the reducing agent is the species that gets OXIDIZED."
      }
    ],
    "formulas": [
      {
        "name": "Percent Yield Formula",
        "latex": "\\text{\\% Yield} = \\frac{\\text{Actual Experimental Yield}}{\\text{Theoretical Stoichiometric Yield}} \\times 100\\%",
        "explanation": "Evaluates efficiency of chemical synthesis."
      },
      {
        "name": "Gravimetric Titration Equivalence",
        "latex": "n_{\\text{titrant}} = M_{\\text{titrant}} V_{\\text{titrant}}",
        "explanation": "Stoichiometric equivalence when moles of titrant match moles of analyte."
      }
    ],
    "sections": [
      {
        "heading": "1. Essential Solubility Rules for AP Chemistry",
        "content": "College Board requires memorization of only three universal solubility rules (all other compounds can be assumed insoluble unless stated otherwise):\n\n1. **Sodium, Potassium, and Ammonium Salts**: All ionic compounds containing $\\text{Na}^+, \\text{K}^+$, or $\\text{NH}_4^+$ are soluble in water without exception.\n2. **Nitrate Salts**: All ionic compounds containing $\\text{NO}_3^-$ are completely soluble in water without exception.\n3. **Acetate Salts**: All compounds containing $\\text{C}_2\\text{H}_3\\text{O}_2^-$ are soluble.\n\n*Net Ionic Example*:\n$$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$$\n$$\\text{Net Ionic}: \\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)$$\n*Spectators*: $\\text{Na}^+$ and $\\text{NO}_3^-$ are omitted."
      },
      {
        "heading": "2. Aqueous Precipitation & Net Ionic Decision Matrix",
        "content": "College Board rules for writing net ionic precipitation equations:\n\n| Salt / Ion Class | Solubility in Water | Precipitate Exceptions (Insoluble) | Net Ionic Equation Template | AP Grader Tip |\n| :--- | :--- | :--- | :--- | :--- |\n| **$\\text{Na}^+, \\text{K}^+, \\text{NH}_4^+$** | **Always Soluble** ($100\\%$) | **NONE** | Remain aqueous spectator ions | Always cancel from both sides |\n| **Nitrate ($\\text{NO}_3^-$)** | **Always Soluble** ($100\\%$) | **NONE** | Remain aqueous spectator ions | Always cancel from both sides |\n| **Halides ($\\text{Cl}^-, \\text{Br}^-, \\text{I}^-$)** | Mostly Soluble | $\\text{Ag}^+, \\text{Pb}^{2+}, \\text{Hg}_2^{2+}$ | $\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)$ | $\\text{AgCl}$ forms a white precipitate |\n| **Sulfate ($\\text{SO}_4^{2-}$)** | Mostly Soluble | $\\text{Ba}^{2+}, \\text{Pb}^{2+}, \\text{Ca}^{2+}, \\text{Sr}^{2+}$ | $\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)$ | Common gravimetric analysis precipitate |\n| **Hydroxides & Carbonates** | Mostly Insoluble | Group 1 cations, $\\text{NH}_4^+$, heavy Group 2 | $\\text{Cu}^{2+}(aq) + 2\\text{OH}^-(aq) \\rightarrow \\text{Cu(OH)}_2(s)$ | Keep insoluble product together as solid $(s)$ |"
      },
      {
        "heading": "3. Limiting Reactants & Particulate Diagram Mastery (CED 4.4–4.5)",
        "content": "Determining the limiting reactant:\n1. Convert given quantities of all reactants into moles.\n2. Divide each mole quantity by its stoichiometric coefficient: $\\frac{\\text{moles}}{\\text{coefficient}}$.\n3. The reactant with the **smallest ratio** is the **Limiting Reactant** (runs out first and dictates maximum theoretical yield).\n4. **Interpreting Particulate Diagrams on the AP Exam:**\n   - Count individual molecules/atoms of each species in the \"Before Reaction\" box.\n   - Use stoichiometry to consume reactants in exact whole-number ratios.\n   - In the \"After Reaction\" box, you MUST draw: (1) all newly formed product molecules, AND (2) all **leftover unreacted excess reactant molecules**! Omitting excess molecules loses the point."
      },
      {
        "heading": "4. Oxidation-Reduction (Redox) Half-Reactions (CED 4.6–4.7)",
        "content": "Oxidation-reduction involves the transfer of electrons:\n- **OIL RIG Mnemonic:** Oxidation Is Loss of electrons; Reduction Is Gain of electrons.\n- **Oxidation Number Rules:**\n  1. Free elements = $0$ (e.g. $O_2, Fe, Na$).\n  2. Monatomic ions = charge (e.g. $Fe^{3+} = +3, Cl^- = -1$).\n  3. Hydrogen = $+1$ (except $-1$ in metal hydrides like $NaH$).\n  4. Oxygen = $-2$ (except $-1$ in peroxides like $H_2O_2$, and $+2$ in $OF_2$).\n  5. Fluorine = $-1$ always.\n- **Balancing Redox Reactions in Acidic Solution (Half-Reaction Method):**\n  1. Split into oxidation and reduction half-reactions.\n  2. Balance all elements except $H$ and $O$.\n  3. Balance $O$ by adding $H_2O$.\n  4. Balance $H$ by adding $H^+$.\n  5. Balance charge by adding electrons ($e^-$).\n  6. Multiply half-reactions so electrons cancel, then sum."
      },
      {
        "heading": "5. Redox Titrations & Half-Reaction Method in Acidic Solution (CED 4.8–4.9)",
        "content": "Oxidation-reduction titrations monitor electron transfer rather than proton transfer:\n- **Balancing Redox Equations in Acid:**\n  1. Separate into oxidation and reduction half-reactions.\n  2. Balance all elements except $H$ and $O$.\n  3. Balance $O$ atoms by adding $H_2O$ molecules.\n  4. Balance $H$ atoms by adding $H^+$ ions.\n  5. Balance net electrical charge by adding electrons ($e^-$).\n  6. Multiply half-reactions by integers so electrons cancel, then sum.\n- **Self-Indicating Titrations ($MnO_4^-$):**\n  - Dark purple permanganate ion ($MnO_4^-$) is reduced to colorless $Mn^{2+}$ in acidic solution.\n  - The endpoint is reached when a single excess drop of $MnO_4^-$ turns the solution persistently faint pink—no external indicator is required!"
      },
      {
        "heading": "6. Official AP Lab: Redox Titration with Permanganate & Gravimetric Analysis (Skill 4.1)",
        "content": "Advanced analytical quantification techniques:\n\n* **Permanganate ($\\text{MnO}_4^-$) Self-Indicating Redox Titration**:\n  * Potassium permanganate is a powerful oxidizing agent that serves as its own indicator:\n    $$\\text{MnO}_4^- (aq) + 8\\text{H}^+ (aq) + 5e^- \\rightarrow \\text{Mn}^{2+} (aq) + 4\\text{H}_2\\text{O} (l) \\quad (E^\\circ = +1.51\\text{ V})$$\n  * Deep purple $\\text{MnO}_4^-$ is reduced to virtually colorless $\\text{Mn}^{2+}$.\n  * The permanent appearance of the faintest pink color indicates the stoichiometric equivalence point has been reached (a single drop of excess $\\text{MnO}_4^-$ unreduced).\n* **Gravimetric Analysis & Constant Mass Drying**:\n  * Quantitative analysis involving precipitation, vacuum filtration, and weighing:\n  * The precipitate (e.g., $\\text{BaSO}_4$ or $\\text{AgCl}$) must be collected on ashless filter paper, washed with cold solvent, and heated in a crucible.\n  * **Crucible Heating Rule**: Heat, cool in a desiccator, weigh, and repeat heating until two consecutive weighings agree within $\\pm 0.001\\text{ g}$ (**drying to constant mass**), ensuring all absorbed water has evaporated."
      },
      {
        "heading": "7. BCA (Before-Change-After) Tables for Limiting Reactants & Net Ionic Equations (CED 4.5)",
        "content": "Systematic problem-solving architecture for solution reactions:\n\n* **The BCA Table Method (In Moles, NOT Grams!)**:\n  * For reaction: $2\\text{Al} (s) + 3\\text{Cu}^{2+} (aq) \\rightarrow 2\\text{Al}^{3+} (aq) + 3\\text{Cu} (s)$:\n    * **Before**: Convert all given quantities into moles.\n    * **Change**: Determine limiting reactant by dividing moles by stoichiometric coefficients. The reactant with the smallest ratio is exhausted ($-\\text{extent} \\times \\text{coefficient}$).\n    * **After**: Remaining moles = $\\text{Initial} - \\text{Consumed}$. Molarity of remaining ions = $\\text{Moles After} / V_{\\text{total}}$.\n* **Net Ionic Equation Rules**:\n  * Strong electrolytes (soluble ionic salts, strong acids, strong bases) are dissociated completely into aqueous ions.\n  * Weak acids, weak bases, precipitates ($s$), pure liquids ($l$), and gases ($g$) remain un-ionized in molecular form.\n  * Cancel identical spectator ions appearing unchanged on both sides of the reaction arrow."
      },
      {
        "heading": "6. Official AP Lab: Redox Titration with Permanganate & Gravimetric Analysis (Skill 4.1)",
        "content": "Advanced analytical quantification techniques:\n\n* **Permanganate ($\\text{MnO}_4^-$) Self-Indicating Redox Titration**:\n  * Potassium permanganate is a powerful oxidizing agent that serves as its own indicator:\n    $$\\text{MnO}_4^- (aq) + 8\\text{H}^+ (aq) + 5e^- \\rightarrow \\text{Mn}^{2+} (aq) + 4\\text{H}_2\\text{O} (l) \\quad (E^\\circ = +1.51\\text{ V})$$\n  * Deep purple $\\text{MnO}_4^-$ is reduced to virtually colorless $\\text{Mn}^{2+}$.\n  * The permanent appearance of the faintest pink color indicates the stoichiometric equivalence point has been reached (a single drop of excess $\\text{MnO}_4^-$ unreduced).\n* **Gravimetric Analysis & Constant Mass Drying**:\n  * Quantitative analysis involving precipitation, vacuum filtration, and weighing:\n  * The precipitate (e.g., $\\text{BaSO}_4$ or $\\text{AgCl}$) must be collected on ashless filter paper, washed with cold solvent, and heated in a crucible.\n  * **Crucible Heating Rule**: Heat, cool in a desiccator, weigh, and repeat heating until two consecutive weighings agree within $\\pm 0.001\\text{ g}$ (**drying to constant mass**), ensuring all absorbed water has evaporated."
      },
      {
        "heading": "7. BCA (Before-Change-After) Tables for Limiting Reactants & Net Ionic Equations (CED 4.5)",
        "content": "Systematic problem-solving architecture for solution reactions:\n\n* **The BCA Table Method (In Moles, NOT Grams!)**:\n  * For reaction: $2\\text{Al} (s) + 3\\text{Cu}^{2+} (aq) \\rightarrow 2\\text{Al}^{3+} (aq) + 3\\text{Cu} (s)$:\n    * **Before**: Convert all given quantities into moles.\n    * **Change**: Determine limiting reactant by dividing moles by stoichiometric coefficients. The reactant with the smallest ratio is exhausted ($-\\text{extent} \\times \\text{coefficient}$).\n    * **After**: Remaining moles = $\\text{Initial} - \\text{Consumed}$. Molarity of remaining ions = $\\text{Moles After} / V_{\\text{total}}$.\n* **Net Ionic Equation Rules**:\n  * Strong electrolytes (soluble ionic salts, strong acids, strong bases) are dissociated completely into aqueous ions.\n  * Weak acids, weak bases, precipitates ($s$), pure liquids ($l$), and gases ($g$) remain un-ionized in molecular form.\n  * Cancel identical spectator ions appearing unchanged on both sides of the reaction arrow."
      }
    ],
    "workedExamples": [
      {
        "title": "Limiting Reactant & Theoretical Yield Calculation",
        "topicRef": "CED 4.5 Stoichiometry & Limiting Reactants",
        "question": "$10.0\\text{ g}$ of aluminum metal reacts with $30.0\\text{ g}$ of copper(II) chloride: $2\\text{Al}(s) + 3\\text{CuCl}_2(aq) \\rightarrow 2\\text{AlCl}_3(aq) + 3\\text{Cu}(s)$. Determine the limiting reactant and calculate the maximum theoretical mass of solid copper produced.",
        "solutionSteps": [
          "Step 1: Calculate moles of reactants: Molar mass of $\\text{Al} = 26.98\\text{ g/mol} \\implies n_{\\text{Al}} = \\frac{10.0}{26.98} = 0.3706\\text{ mol}$.",
          "Step 2: Molar mass of $\\text{CuCl}_2 = 63.55 + 2(35.45) = 134.45\\text{ g/mol} \\implies n_{\\text{CuCl}_2} = \\frac{30.0}{134.45} = 0.2231\\text{ mol}$.",
          "Step 3: Calculate moles of Cu that each reactant can produce:",
          "- From Al: $0.3706\\text{ mol Al} \\times \\frac{3\\text{ mol Cu}}{2\\text{ mol Al}} = 0.5560\\text{ mol Cu}$.",
          "- From $\\text{CuCl}_2$: $0.2231\\text{ mol CuCl}_2 \\times \\frac{3\\text{ mol Cu}}{3\\text{ mol CuCl}_2} = 0.2231\\text{ mol Cu}$.",
          "Step 4: Since $\\text{CuCl}_2$ produces fewer moles of Cu, $\\text{CuCl}_2$ is the limiting reactant.",
          "Step 5: Convert moles of Cu to grams: $\\text{Mass} = (0.2231\\text{ mol})(63.55\\text{ g/mol}) = 14.18\\text{ g}$."
        ],
        "finalAnswer": "Limiting reactant is $\\text{CuCl}_2$; Maximum theoretical yield of $\\text{Cu} = 14.2\\text{ g}$.",
        "apScoringTip": "Always show the mole comparison step explicitly. Simply comparing grams of reactants will yield zero credit on AP scoring rubrics."
      }
    ],
    "diagrams": [
      {
        "id": "chem_particulate_reaction",
        "title": "Particulate Diagram Before and After Reaction",
        "subtitle": "Limiting Reactants and Excess Particles Conservation",
        "type": "particulate_diagram",
        "description": "Box diagrams representing atoms as spheres before and after reaction, showing unreacted excess reactant particles remaining in the final product box.",
        "takeaway": "Total count of each sphere type must be identical in the initial and final boxes (Conservation of Mass)."
      }
    ],
    "commonTraps": [
      "Writing insoluble precipitates as separate aqueous ions in net ionic equations. Solids ($(s)$), liquids ($(l)$), and gases ($(g)$) are NEVER broken into separate ions!",
      "Assuming the reactant with smaller mass is automatically the limiting reactant. You must always convert grams to moles and divide by stoichiometric coefficients.",
      "Forgetting that oxidation numbers must be assigned to individual atoms, not entire molecular formulas."
    ],
    "cramSheet": [
      "Solubility rule: $\\text{Na}^+, \\text{K}^+, \\text{NH}_4^+, \\text{NO}_3^-$ salts are ALWAYS 100% soluble.",
      "Net Ionic: Cancel out spectator ions that do not change state or charge.",
      "Redox: Oxidation is Loss of electrons (LEO/OIL); Reduction is Gain of electrons (GER/RIG).",
      "In balancing redox in acid: Balance major atoms, balance O with $\\text{H}_2\\text{O}$, balance H with $\\text{H}^+$, balance charge with $e^-$."
    ]
  },
  {
    "unitId": "u5",
    "unitNumber": 5,
    "title": "Kinetics and Reaction Rates",
    "examWeight": "7%–9% of AP Exam",
    "bigIdea": "Reaction rates are determined by the frequency and energy of molecular collisions along elementary mechanistic steps.",
    "keyTheorems": [
      {
        "name": "Collision Theory and Activation Energy",
        "conditions": "Reactant molecules colliding to form products.",
        "conclusion": "A collision is effective only if molecules collide with: (1) Kinetic energy equal to or greater than activation energy ($E_a$), and (2) Proper steric orientation to break bonds.",
        "apTip": "A catalyst increases reaction rate by providing an alternative reaction pathway with LOWER activation energy ($E_a$). Catalysts do NOT shift equilibrium or alter $\\Delta H$!"
      },
      {
        "name": "Rate-Determining Step (RDS) Principle",
        "conditions": "Multi-step reaction mechanism.",
        "conclusion": "The overall rate law is dictated strictly by the slowest elementary step in the mechanism.",
        "apTip": "Intermediates are produced then consumed; catalysts are consumed then regenerated. Neither species can ever appear in the final overall balanced reaction!"
      }
    ],
    "formulas": [
      {
        "name": "Differential Rate Law",
        "latex": "\\text{Rate} = k[A]^m [B]^n",
        "explanation": "Rate constant $k$; reaction orders $m$ and $n$ determined ONLY by experiment."
      },
      {
        "name": "First-Order Integrated Rate Law",
        "latex": "\\ln[A]_t - \\ln[A]_0 = -kt, \\quad t_{1/2} = \\frac{0.693}{k}",
        "explanation": "Linear plot of $\\ln[A]$ vs $t$ has slope $-k$. Half-life is constant, independent of initial concentration."
      },
      {
        "name": "Second-Order Integrated Rate Law",
        "latex": "\\frac{1}{[A]_t} - \\frac{1}{[A]_0} = kt, \\quad t_{1/2} = \\frac{1}{k[A]_0}",
        "explanation": "Linear plot of $1/[A]$ vs $t$ has slope $+k$. Half-life increases as concentration drops."
      },
      {
        "name": "Zero-Order Integrated Rate Law",
        "latex": "[A]_t - [A]_0 = -kt, \\quad t_{1/2} = \\frac{[A]_0}{2k}",
        "explanation": "Linear plot of $[A]$ vs $t$ has slope $-k$. Constant rate independent of concentration."
      }
    ],
    "sections": [
      {
        "heading": "1. Integrated Rate Law Graphical Identification Matrix",
        "content": "Instantly identify reaction order by checking which plot produces a straight line:\n\n| Order | Linear Plot Test | Slope of Line | Half-Life Formula ($t_{1/2}$) | Units of Rate Constant $k$ |\n| :--- | :--- | :--- | :--- | :--- |\n| **0th Order** | $[A]$ vs. $t$ | $-k$ | $t_{1/2} = \\frac{[A]_0}{2k}$ | $\\text{M}/\\text{s}$ or $\\text{mol}/(\\text{L}\\cdot\\text{s})$ |\n| **1st Order** | $\\ln[A]$ vs. $t$ | $-k$ | $t_{1/2} = \\frac{0.693}{k}$ (Constant!) | $\\text{s}^{-1}$ |\n| **2nd Order** | $1/[A]$ vs. $t$ | $+k$ (Positive slope!) | $t_{1/2} = \\frac{1}{k[A]_0}$ | $\\text{M}^{-1}\\cdot\\text{s}^{-1}$ or $\\text{L}/(\\text{mol}\\cdot\\text{s})$ |\n\n*Constant Half-Life Rule*: If concentration cuts in half every fixed time interval (e.g. $100 \\rightarrow 50$ in 10 min, $50 \\rightarrow 25$ in 10 min), the reaction is DEFINITIVELY 1st order!"
      },
      {
        "heading": "2. Reaction Mechanisms, Elementary Steps & Catalysts (CED 5.7 & 5.8)",
        "content": "Connecting proposed multi-step mechanisms to experimental rate laws:\n\n* **Elementary Steps**:\n  * The rate law for an **elementary step** is written directly from its stoichiometric coefficients (molecularity):\n    * Unimolecular ($A \\rightarrow P$): $\\text{Rate} = k[A]$\n    * Bimolecular ($A + B \\rightarrow P$): $\\text{Rate} = k[A][B]$\n* **Rate-Determining Step (RDS)**:\n  * The overall reaction rate law is governed entirely by the **slow step**.\n* **Intermediates vs. Catalysts**:\n  * **Reaction Intermediate**: Produced in an early elementary step and consumed in a later step (does NOT appear in overall equation).\n  * **Catalyst**: Introduced as a reactant in an early step and regenerated as a product in a later step.\n* **Pre-Equilibrium Approximation**: When a fast reversible step precedes a slow step, set forward rate equal to reverse rate to substitute for intermediate concentrations in the rate law!"
      },
      {
        "heading": "3. Collision Theory, Activation Energy & Maxwell-Boltzmann (CED 5.5 & 5.6)",
        "content": "Chemical reactions occur when reactant particles collide effectively:\n\n* **Two Criteria for Effective Collision**:\n  1. **Sufficient Kinetic Energy**: Collision energy must equal or exceed the **activation energy** ($E \\ge E_a$).\n  2. **Proper Molecular Orientation**: Reactive atomic centers must align precisely during impact.\n* **Maxwell-Boltzmann Molecular Energy Distribution**:\n  * At higher temperatures, the curve flattens and shifts to the right: a **substantially larger fraction of molecules** possess energy exceeding $E_a$, leading to exponentially higher reaction rates!\n* **Action of a Catalyst**:\n  * Provides an alternative mechanistic pathway with a **lower activation energy barrier** ($E_a$).\n  * A catalyst increases BOTH the forward and reverse reaction rates equally, having **zero effect on equilibrium constant $K$ or $\\Delta H$**!"
      },
      {
        "heading": "4. Integrated Rate Laws, Graphical Linearity & Half-Life (CED 5.3–5.5)",
        "content": "Reaction order is identified experimentally by determining which concentration vs. time plot yields a straight line:\n\n| Order | Differential Rate Law | Integrated Rate Law | Linear Plot ($y$ vs $x$) | Slope ($m$) | Half-Life ($t_{1/2}$) |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **0th** | $\\text{Rate} = k$ | $[A]_t = -kt + [A]_0$ | $[A]$ vs. $t$ | $-k$ | $t_{1/2} = \\frac{[A]_0}{2k}$ (decreases with conc.) |\n| **1st** | $\\text{Rate} = k[A]$ | $\\ln[A]_t = -kt + \\ln[A]_0$ | $\\ln[A]$ vs. $t$ | $-k$ | $t_{1/2} = \\frac{0.693}{k}$ (CONSTANT!) |\n| **2nd** | $\\text{Rate} = k[A]^2$ | $\\frac{1}{[A]_t} = kt + \\frac{1}{[A]_0}$ | $\\frac{1}{[A]}$ vs. $t$ | $+k$ | $t_{1/2} = \\frac{1}{k[A]_0}$ (increases with dilution) |\n\n**AP Diagnostic Hallmark:** If the time required for half the reactant to decay remains identical regardless of starting concentration, the reaction is **strictly first-order**!"
      },
      {
        "heading": "5. Elementary Steps, Reaction Mechanisms & Catalysts (CED 5.7–5.11)",
        "content": "Most chemical reactions occur via a sequence of elementary collisions:\n- **Rate-Determining Step (RDS):** The slowest elementary step with the highest activation energy ($E_a$). The rate law of the overall reaction is determined by the stoichiometry of this slow step!\n- **Fast Equilibrium Prior to Slow Step:** If Step 1 is fast equilibrium and Step 2 is slow:\n  $$\\text{Step 1 (fast): } 2NO \\rightleftharpoons N_2O_2 \\quad (K_{eq} = \\frac{[N_2O_2]}{[NO]^2})$$\n  $$\\text{Step 2 (slow): } N_2O_2 + O_2 \\to 2NO_2 \\quad (\\text{Rate} = k_2[N_2O_2][O_2])$$\n  Substitute intermediate $[N_2O_2] = K_{eq}[NO]^2 \\implies \\mathbf{\\text{Rate} = k_{obs}[NO]^2[O_2]}$.\n- **Intermediates vs. Catalysts:**\n  - **Intermediate:** Produced in an early step and consumed in a later step (not in net reaction).\n  - **Catalyst:** Introduced as a reactant in an early step, regenerated intact in a later step. Speeds up reaction by providing an alternative pathway with a **lower activation energy** ($E_a$), leaving $\\Delta H$ and $K_{eq}$ unchanged!"
      },
      {
        "heading": "6. Integrated Rate Laws, Graphical Linearization & Half-Life Mechanics (CED 5.3)",
        "content": "Master kinetics identification matrix across reaction orders:\n\n| Reaction Order | Differential Rate Law | Integrated Rate Law | Linear Plot to Confirm Order | Slope ($m$) | Half-Life Formula ($t_{1/2}$) | Units of Rate Constant $k$ |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| **Zero Order** ($n=0$) | $\\text{Rate} = k$ | $[A]_t = -kt + [A]_0$ | $[A]$ vs. $t$ | $-k$ | $t_{1/2} = \\frac{[A]_0}{2k}$ (Decreases with time) | $M\\cdot s^{-1}$ |\n| **First Order** ($n=1$) | $\\text{Rate} = k[A]$ | $\\ln[A]_t = -kt + \\ln[A]_0$ | $\\ln[A]$ vs. $t$ | $-k$ | $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$ (**Constant!**) | $s^{-1}$ |\n| **Second Order** ($n=2$) | $\\text{Rate} = k[A]^2$ | $\\frac{1}{[A]_t} = kt + \\frac{1}{[A]_0}$ | $\\frac{1}{[A]}$ vs. $t$ | $+k$ | $t_{1/2} = \\frac{1}{k[A]_0}$ (Increases with time) | $M^{-1}\\cdot s^{-1}$ |\n\n* **The First-Order Diagnostic Test**: If a reaction's half-life remains constant as reactant concentration drops (e.g., 20 min to go from 1.0M to 0.5M, and another 20 min to go from 0.5M to 0.25M), the reaction is **guaranteed to be First Order**!"
      },
      {
        "heading": "7. Multi-Step Mechanisms, Intermediates, Catalysts & Arrhenius Law (CED 5.7-5.11)",
        "content": "Validating reaction mechanisms against empirical rate laws:\n\n* **Rules for a Plausible Mechanism**:\n  1. The sum of elementary steps must add up to the overall balanced chemical equation.\n  2. The rate law predicted by the **Rate-Determining Step (RDS - slowest step)** must match the empirically measured rate law.\n* **Distinguishing Intermediates vs. Catalysts**:\n  * **Reaction Intermediate**: Produced in an early elementary step and consumed in a subsequent step (starts on products side, ends on reactants side; does NOT appear in overall reaction).\n  * **Catalyst**: Consumed in an early step and regenerated in a later step (starts on reactants side, ends on products side; provides alternative pathway with lower activation energy $E_a$).\n* **The Arrhenius Equation**:\n  $$k = A e^{-E_a / RT} \\quad \\implies \\quad \\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$$\n  * Plotting $\\ln k$ vs $1/T$ yields a straight line with slope $m = -E_a/R$.\n  * Increasing temperature increases $k$ exponentially because a vastly higher fraction of molecular collisions exceed activation energy ($f = e^{-E_a/RT}$)."
      },
      {
        "heading": "6. Integrated Rate Laws, Graphical Linearization & Half-Life Mechanics (CED 5.3)",
        "content": "Master kinetics identification matrix across reaction orders:\n\n| Reaction Order | Differential Rate Law | Integrated Rate Law | Linear Plot to Confirm Order | Slope ($m$) | Half-Life Formula ($t_{1/2}$) | Units of Rate Constant $k$ |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| **Zero Order** ($n=0$) | $\\text{Rate} = k$ | $[A]_t = -kt + [A]_0$ | $[A]$ vs. $t$ | $-k$ | $t_{1/2} = \\frac{[A]_0}{2k}$ (Decreases with time) | $M\\cdot s^{-1}$ |\n| **First Order** ($n=1$) | $\\text{Rate} = k[A]$ | $\\ln[A]_t = -kt + \\ln[A]_0$ | $\\ln[A]$ vs. $t$ | $-k$ | $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$ (**Constant!**) | $s^{-1}$ |\n| **Second Order** ($n=2$) | $\\text{Rate} = k[A]^2$ | $\\frac{1}{[A]_t} = kt + \\frac{1}{[A]_0}$ | $\\frac{1}{[A]}$ vs. $t$ | $+k$ | $t_{1/2} = \\frac{1}{k[A]_0}$ (Increases with time) | $M^{-1}\\cdot s^{-1}$ |\n\n* **The First-Order Diagnostic Test**: If a reaction's half-life remains constant as reactant concentration drops (e.g., 20 min to go from 1.0M to 0.5M, and another 20 min to go from 0.5M to 0.25M), the reaction is **guaranteed to be First Order**!"
      },
      {
        "heading": "7. Multi-Step Mechanisms, Intermediates, Catalysts & Arrhenius Law (CED 5.7-5.11)",
        "content": "Validating reaction mechanisms against empirical rate laws:\n\n* **Rules for a Plausible Mechanism**:\n  1. The sum of elementary steps must add up to the overall balanced chemical equation.\n  2. The rate law predicted by the **Rate-Determining Step (RDS - slowest step)** must match the empirically measured rate law.\n* **Distinguishing Intermediates vs. Catalysts**:\n  * **Reaction Intermediate**: Produced in an early elementary step and consumed in a subsequent step (starts on products side, ends on reactants side; does NOT appear in overall reaction).\n  * **Catalyst**: Consumed in an early step and regenerated in a later step (starts on reactants side, ends on products side; provides alternative pathway with lower activation energy $E_a$).\n* **The Arrhenius Equation**:\n  $$k = A e^{-E_a / RT} \\quad \\implies \\quad \\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$$\n  * Plotting $\\ln k$ vs $1/T$ yields a straight line with slope $m = -E_a/R$.\n  * Increasing temperature increases $k$ exponentially because a vastly higher fraction of molecular collisions exceed activation energy ($f = e^{-E_a/RT}$)."
      }
    ],
    "workedExamples": [
      {
        "title": "Initial Rates Method for Determining Rate Law",
        "topicRef": "CED 5.2 Method of Initial Rates",
        "question": "For reaction $2\\text{NO}(g) + \\text{O}_2(g) \\rightarrow 2\\text{NO}_2(g)$, initial rate data is: Exp 1: $[\\text{NO}] = 0.010\\text{ M}$, $[\\text{O}_2] = 0.010\\text{ M}$, $\\text{Rate} = 2.5 \\times 10^{-5}\\text{ M/s}$; Exp 2: $[\\text{NO}] = 0.020\\text{ M}$, $[\\text{O}_2] = 0.010\\text{ M}$, $\\text{Rate} = 1.0 \\times 10^{-4}\\text{ M/s}$; Exp 3: $[\\text{NO}] = 0.010\\text{ M}$, $[\\text{O}_2] = 0.020\\text{ M}$, $\\text{Rate} = 5.0 \\times 10^{-5}\\text{ M/s}$. Determine the rate law and calculate $k$ with units.",
        "solutionSteps": [
          "Step 1: Compare Exp 1 and Exp 2 ($[\\text{O}_2]$ constant): $[\\text{NO}]$ doubles ($2\\times$); rate quadruples $\\frac{1.0 \\times 10^{-4}}{2.5 \\times 10^{-5}} = 4 = 2^2$. Order with respect to NO is $m = 2$ (2nd order).",
          "Step 2: Compare Exp 1 and Exp 3 ($[\\text{NO}]$ constant): $[\\text{O}_2]$ doubles ($2\\times$); rate doubles $\\frac{5.0 \\times 10^{-5}}{2.5 \\times 10^{-5}} = 2 = 2^1$. Order with respect to $\\text{O}_2$ is $n = 1$ (1st order).",
          "Step 3: Rate law is: $\\text{Rate} = k[\\text{NO}]^2 [\\text{O}_2]$ (Overall order = $2 + 1 = 3$).",
          "Step 4: Calculate $k$ using Exp 1: $2.5 \\times 10^{-5} = k (0.010)^2 (0.010) = k (1.0 \\times 10^{-6}) \\implies k = \\frac{2.5 \\times 10^{-5}}{1.0 \\times 10^{-6}} = 25$.",
          "Step 5: Units of $k$: $\\frac{\\text{M/s}}{\\text{M}^3} = \\text{M}^{-2}\\cdot\\text{s}^{-1}$."
        ],
        "finalAnswer": "Rate law: $\\text{Rate} = k[\\text{NO}]^2[\\text{O}_2]$; $k = 25\\text{ M}^{-2}\\cdot\\text{s}^{-1}$.",
        "apScoringTip": "Always include correct units for the rate constant $k$! The unit point is one of the most frequently missed points on the entire AP Chemistry exam."
      }
    ],
    "diagrams": [
      {
        "id": "chem_reaction_coordinate",
        "title": "Reaction Coordinate Energy Profile Diagram",
        "subtitle": "Uncatalyzed vs. Catalyzed Activation Energy Comparison",
        "type": "reaction_coordinate",
        "description": "Profile showing reactant energy, transition state barrier ($E_a$), and product energy. Catalyzed path shows lower barrier peak without changing initial or final energy levels.",
        "takeaway": "Catalysts lower activation energy ($E_a$) equally in both forward and reverse directions, leaving $\\Delta H = H_{\\text{prod}} - H_{\\text{react}}$ completely unchanged."
      }
    ],
    "commonTraps": [
      "Deriving rate laws from stoichiometric coefficients of an overall balanced equation. Reaction orders can ONLY be deduced from stoichiometric coefficients if the step is an ELEMENTARY step!",
      "Confusing intermediates with catalysts. Intermediates appear first as products and are later consumed. Catalysts appear first as reactants and are later regenerated unchanged.",
      "Forgetting units of $k$. Overall order $n$ has units: $\\text{M}^{1-n}\\cdot\\text{time}^{-1}$."
    ],
    "cramSheet": [
      "Linear plots: 0-order is $[A]$ vs $t$; 1st-order is $\\ln[A]$ vs $t$; 2nd-order is $1/[A]$ vs $t$.",
      "Only 1st-order reactions have constant half-life: $t_{1/2} = 0.693/k$.",
      "Rate-determining step = slowest elementary step in mechanism.",
      "Catalysts lower $E_a$ by providing alternate pathway; they do NOT change $\\Delta H$ or $K_{\\text{eq}}$."
    ]
  },
  {
    "unitId": "u6",
    "unitNumber": 6,
    "title": "Thermodynamics",
    "examWeight": "7%–9% of AP Exam",
    "bigIdea": "The laws of thermodynamics govern the energy changes accompanying chemical and physical processes through heat transfer and enthalpy.",
    "keyTheorems": [
      {
        "name": "First Law of Thermodynamics (Conservation of Energy)",
        "conditions": "Any chemical or physical process in a universe composed of system and surroundings.",
        "conclusion": "Energy of the universe is constant: $\\Delta E_{\\text{universe}} = 0$. For a system: $\\Delta E = q + w$, where $q$ is heat and $w = -P\\Delta V$ is work.",
        "apTip": "Sign conventions: Heat absorbed BY system ($q > 0$, endothermic); heat released BY system ($q < 0$, exothermic). Work done ON system ($w > 0$, compression); work done BY system ($w < 0$, expansion)."
      },
      {
        "name": "Hess’s Law of Heat Summation",
        "conditions": "Enthalpy is a state function independent of the reaction pathway.",
        "conclusion": "If a reaction is carried out in a series of steps, $\\Delta H$ for the overall reaction equals the sum of enthalpy changes for individual steps: $\\Delta H_{\\text{overall}} = \\sum \\Delta H_{\\text{steps}}$.",
        "apTip": "Reversing a reaction flips the sign of $\\Delta H$. Multiplying reaction coefficients by factor $n$ multiplies $\\Delta H$ by $n$."
      }
    ],
    "formulas": [
      {
        "name": "Calorimetry Heat Transfer",
        "latex": "q = mc\\Delta T",
        "explanation": "Heat transfer where $m$ is mass, $c$ is specific heat capacity, and $\\Delta T = T_f - T_i$."
      },
      {
        "name": "Standard Enthalpy from Heats of Formation",
        "latex": "\\Delta H^\\circ_{\\text{rxn}} = \\sum n\\Delta H_f^\\circ(\\text{products}) - \\sum m\\Delta H_f^\\circ(\\text{reactants})",
        "explanation": "$\\Delta H_f^\\circ$ for any pure element in its standard state is exactly zero (e.g. $\\text{O}_2(g) = 0$)."
      },
      {
        "name": "Enthalpy from Average Bond Energies",
        "latex": "\\Delta H^\\circ_{\\text{rxn}} = \\sum \\text{BE(broken)} - \\sum \\text{BE(formed)}",
        "explanation": "Breaking bonds requires energy (endothermic, $+$); forming bonds releases energy (exothermic, $-$)."
      }
    ],
    "sections": [
      {
        "heading": "1. Coffee-Cup Calorimetry Procedures & Assumptions",
        "content": "In a coffee-cup calorimeter at constant atmospheric pressure:\n\n$$q_{\\text{reaction}} = -q_{\\text{solution}} = -(m_{\\text{solution}} \\cdot c_{\\text{solution}} \\cdot \\Delta T)$$\n\n- **Molar Enthalpy of Reaction**:\n  $$\\Delta H_{\\text{rxn}} = \\frac{q_{\\text{reaction}}}{n_{\\text{limiting reactant}}}$$\n- **Assumptions Tested on AP Exam**:\n  1. No heat is lost to the polystyrene cup or surrounding air ($q_{\\text{cal}} \\approx 0$).\n  2. Solution density is identical to pure water ($1.00\\text{ g/mL}$).\n  3. Solution specific heat capacity is identical to pure water ($4.184\\text{ J}/(\\text{g}\\cdot^\\circ\\text{C})$).\n- If heat escapes to surroundings, measured $\\Delta T$ is falsely low, so calculated $\\Delta H_{\\text{rxn}}$ magnitude is artificially low."
      },
      {
        "heading": "2. Endothermic vs. Exothermic Thermodynamic Matrix",
        "content": "Comprehensive comparison of thermodynamic parameters across reaction types:\n\n| Parameter | Exothermic Process ($\\Delta H < 0$) | Endothermic Process ($\\Delta H > 0$) | AP Exam Notes & Traps |\n| :--- | :--- | :--- | :--- |\n| **Enthalpy Sign** | $\\Delta H < 0$ (Negative) | $\\Delta H > 0$ (Positive) | Exothermic releases heat; Endothermic absorbs heat |\n| **Bond Energy Balance** | $\\sum \\text{BE}_{\\text{formed}} > \\sum \\text{BE}_{\\text{broken}}$ | $\\sum \\text{BE}_{\\text{broken}} > \\sum \\text{BE}_{\\text{formed}}$ | Stronger bonds formed than broken $\\implies$ Exothermic! |\n| **Calorimeter Temp ($\\Delta T_{\\text{water}}$)** | Solution temperature **rises** ($\\Delta T > 0$) | Solution temperature **drops** ($\\Delta T < 0$) | $q_{\\text{rxn}} = -q_{\\text{water}} = -mc\\Delta T$ |\n| **Potential Energy Profile** | Products lower than Reactants | Products higher than Reactants | Activation energy $E_a$ is measured from reactants to transition state |\n| **Shift with Temperature Increase** | Shifts **LEFT** ($\\leftarrow$); $K_{\\text{eq}}$ **decreases** | Shifts **RIGHT** ($\\rightarrow$); $K_{\\text{eq}}$ **increases** | Heat acts as a product (exo) or reactant (endo) |\n| **Everyday Chemical Examples** | Combustion, acid-base neutralization, freezing | Dissolution of $\\text{NH}_4\\text{NO}_3$, boiling, photosynthesis | Freezing and condensing release heat (exothermic)! |"
      },
      {
        "heading": "3. Three Methods for Calculating Enthalpy of Reaction ΔH° (CED 6.6–6.9)",
        "content": "College Board tests three distinct methods to compute $\\Delta H^\\circ_{\\text{rxn}}$:\n\n1. **Standard Enthalpies of Formation ($\\Delta H_f^\\circ$):**\n   $$\\Delta H^\\circ_{\\text{rxn}} = \\sum n \\Delta H_f^\\circ(\\text{Products}) - \\sum m \\Delta H_f^\\circ(\\text{Reactants})$$\n   *(Note: $\\Delta H_f^\\circ$ for pure elements in standard state like $O_2(g), C(graphite), Fe(s)$ is strictly ZERO).*\n2. **Bond Dissociation Enthalpies ($D$):**\n   $$\\Delta H^\\circ_{\\text{rxn}} = \\sum D(\\text{Bonds Broken in Reactants}) - \\sum D(\\text{Bonds Formed in Products})$$\n   *(Notice: Reactants minus Products! Breaking bonds is endothermic $+D$; forming bonds is exothermic $-D$).*\n3. **Hess's Law (Adding Multi-Step Reactions):**\n   - If a reaction is reversed, change the sign of $\\Delta H$ ($+ \\leftrightarrow -$).\n   - If a reaction is multiplied by $n$, multiply $\\Delta H$ by $n$.\n   - Sum the individual enthalpies: $\\Delta H_{\\text{net}} = \\Delta H_1 + \\Delta H_2 + \\dots$"
      },
      {
        "heading": "4. Calorimetry & Thermal Energy Transfer q = mcΔT (CED 6.4–6.5)",
        "content": "Calorimetry measures heat flow between system and surroundings:\n$$q = m \\cdot c \\cdot \\Delta T$$\n- $q_{\\text{system}} = -q_{\\text{surroundings}}$ (e.g. heat gained by water = heat released by reaction).\n- Molar Enthalpy: $\\Delta H = \\frac{q_{\\text{reaction}}}{\\text{moles of limiting reactant}}$.\n- **Phase Changes (Flat Plateaus on Heating Curves):**\n  - Temperature remains CONSTANT during phase transitions because all absorbed thermal energy is used to overcome intermolecular forces rather than increasing kinetic energy.\n  - $q = n \\cdot \\Delta H_{\\text{fusion}}$ (melting) or $q = n \\cdot \\Delta H_{\\text{vaporization}}$ (boiling)."
      },
      {
        "heading": "5. Official AP Lab: Calorimetry & Heat of Neutralization (Skill 4.2)",
        "content": "Precision thermochemical laboratory investigation:\n\n* **Coffee-Cup Calorimetry Principles**:\n  * Conducted at constant atmospheric pressure ($q_p = \\Delta H$).\n  * The polystyrene cup acts as a thermal insulator:\n    $$q_{\\text{rxn}} = -q_{\\text{surroundings}} = -(m_{\\text{solution}} c_{\\text{solution}} \\Delta T + C_{\\text{calorimeter}}\\Delta T)$$\n  * For aqueous solutions, assume $c_{\\text{soln}} \\approx 4.184\\text{ J}/(\\text{g}\\cdot ^\\circ\\text{C})$ and density $\\approx 1.00\\text{ g/mL}$.\n  * Molar Enthalpy of Reaction:\n    $$\\Delta H_{\\text{rxn}} = \\frac{q_{\\text{rxn}}}{n_{\\text{limiting reactant}}}$$\n* **Error Analysis**:\n  * Heat loss to the room environment causes measured $\\Delta T$ to be lower than true value $\\implies$ calculated $|\\Delta H_{\\text{rxn}}|$ is **systematically underestimated**.\n  * Delaying temperature recording after mixing allows cooling, distorting peak temperature."
      },
      {
        "heading": "6. Hess’s Law, Standard Enthalpies of Formation & Bond Dissociation (CED 6.4-6.6)",
        "content": "Three distinct methods to calculate standard reaction enthalpies:\n\n* **Method 1: Hess’s Law of Heat Summation**:\n  * If a reaction is reversed, change the sign of $\\Delta H$.\n  * If a reaction is multiplied by factor $n$, multiply $\\Delta H$ by $n$.\n* **Method 2: Standard Enthalpies of Formation ($\\Delta H^circ_f$)**:\n  $$\\Delta H^\\circ_{\\text{rxn}} = \\sum n \\Delta H^\\circ_f (\\text{products}) - \\sum m \\Delta H^\\circ_f (\\text{reactants})$$\n  * By definition, $\\Delta H^\\circ_f = 0$ for any pure element in its most stable standard state ($O_2 (g), N_2 (g), C(\\text{graphite}), Fe (s)$).\n* **Method 3: Average Bond Dissociation Enthalpies (Gas-Phase Only!)**:\n  $$\\Delta H^\\circ_{\\text{rxn}} = \\sum \\text{Bonds Broken (Endothermic, +)} - \\sum \\text{Bonds Formed (Exothermic, -)}$$"
      }
    ],
    "workedExamples": [
      {
        "title": "Calorimetry Enthalpy of Neutralization Calculation",
        "topicRef": "CED 6.4 Calorimetry & Heat Capacity",
        "question": "$50.0\\text{ mL}$ of $1.00\\text{ M } \\text{HCl}$ at $22.0^\\circ\\text{C}$ is mixed with $50.0\\text{ mL}$ of $1.00\\text{ M } \\text{NaOH}$ at $22.0^\\circ\\text{C}$ in a coffee cup calorimeter. Temperature rises to $28.8^\\circ\\text{C}$. Assuming density $1.00\\text{ g/mL}$ and specific heat $4.184\\text{ J}/(\\text{g}\\cdot^\\circ\\text{C})$, calculate $\\Delta H_{\\text{rxn}}$ in $\\text{kJ/mol}$.",
        "solutionSteps": [
          "Step 1: Total solution mass: $m = 50.0 + 50.0 = 100.0\\text{ mL} \\times 1.00\\text{ g/mL} = 100.0\\text{ g}$.",
          "Step 2: Temperature change: $\\Delta T = 28.8 - 22.0 = +6.8^\\circ\\text{C}$.",
          "Step 3: Calculate heat absorbed by water: $q_{\\text{soln}} = mc\\Delta T = (100.0\\text{ g})(4.184\\text{ J/g}^\\circ\\text{C})(6.8^\\circ\\text{C}) = +2845\\text{ J} = +2.845\\text{ kJ}$.",
          "Step 4: Heat released by reaction: $q_{\\text{rxn}} = -q_{\\text{soln}} = -2.845\\text{ kJ}$ (exothermic).",
          "Step 5: Calculate moles of limiting reactant: $n = M \\times V = (1.00\\text{ M})(0.0500\\text{ L}) = 0.0500\\text{ mol}$.",
          "Step 6: Calculate molar enthalpy: $\\Delta H = \\frac{-2.845\\text{ kJ}}{0.0500\\text{ mol}} = -56.9\\text{ kJ/mol}$."
        ],
        "finalAnswer": "$\\Delta H_{\\text{rxn}} = -56.9\\text{ kJ/mol}$.",
        "apScoringTip": "Remember the negative sign! Exothermic reactions that heat up the solution have negative $\\Delta H$. Forgetting the sign loses the point."
      }
    ],
    "diagrams": [
      {
        "id": "chem_heating_curve",
        "title": "Phase Change Heating Curve",
        "subtitle": "Sensible Heating ($q = mc\\Delta T$) vs. Latent Plateaus ($q = n\\Delta H$)",
        "type": "heating_curve",
        "description": "Temperature vs. heat added graph showing sloped regions during single-phase warming and horizontal plateaus during melting and boiling phase transitions.",
        "takeaway": "During phase changes, temperature remains completely constant because added energy is used to overcome intermolecular forces, not increase kinetic energy."
      }
    ],
    "commonTraps": [
      "Mixing up bond energy and heats of formation formulas. Bond energies: Broken minus Formed (Reactants - Products); Heats of Formation: Products minus Reactants!",
      "Using the wrong mass in $q = mc\\Delta T$. When two aqueous solutions mix, you must add BOTH volumes together ($50\\text{ mL} + 50\\text{ mL} = 100\\text{ g}$).",
      "Forgetting that forming bonds is EXOTHERMIC (releases energy) while breaking bonds is ENDOTHERMIC (requires energy)."
    ],
    "cramSheet": [
      "Exothermic: $\\Delta H < 0$, heat released, surroundings get hotter.",
      "Endothermic: $\\Delta H > 0$, heat absorbed, surroundings get colder.",
      "Bond breaking is ALWAYS endothermic ($+$); Bond forming is ALWAYS exothermic ($-$).",
      "$\\Delta H^\\circ_f = 0$ for pure elements in standard state ($\\text{O}_2(g), \\text{N}_2(g), \\text{Fe}(s)$)."
    ]
  },
  {
    "unitId": "u7",
    "unitNumber": 7,
    "title": "Chemical Equilibrium",
    "examWeight": "7%–9% of AP Exam",
    "bigIdea": "Chemical systems reach dynamic equilibrium when forward and reverse reaction rates are equal, establishing constant reactant and product concentrations.",
    "keyTheorems": [
      {
        "name": "Dynamic Equilibrium Principle",
        "conditions": "Reversible chemical reaction in a closed vessel.",
        "conclusion": "At equilibrium: (1) Forward rate equals reverse rate ($\\text{Rate}_f = \\text{Rate}_r$), and (2) Concentrations of reactants and products remain constant (NOT necessarily equal).",
        "apTip": "Equilibrium is dynamic: Reactions do not stop; molecules continue reacting in both directions at identical speeds."
      },
      {
        "name": "Le Chatelier’s Principle",
        "conditions": "System at equilibrium subjected to an external stress (concentration, pressure, volume, temperature).",
        "conclusion": "The system responds by shifting in the direction that partially relieves the applied stress.",
        "apTip": "ONLY a change in TEMPERATURE can alter the numerical value of the equilibrium constant $K_{\\text{eq}}$! Adding reactants, changing volume, or adding a catalyst does NOT change $K$."
      }
    ],
    "formulas": [
      {
        "name": "Equilibrium Constant Expression",
        "latex": "K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}",
        "explanation": "Pure solids and pure liquids are omitted because their concentrations/densities are constant."
      },
      {
        "name": "Reaction Quotient Comparison",
        "latex": "Q < K \\implies \\text{Shift Right } (\\rightarrow); \\quad Q > K \\implies \\text{Shift Left } (\\leftarrow); \\quad Q = K \\implies \\text{Equilibrium}",
        "explanation": "Compares non-equilibrium state $Q$ to target equilibrium value $K$."
      },
      {
        "name": "Solubility Product Expression",
        "latex": "K_{sp} = [A^{y+}]^x [B^{x-}]^y",
        "explanation": "Governs dissolution equilibrium of sparingly soluble salts."
      }
    ],
    "sections": [
      {
        "heading": "1. Le Chatelier Stress & Shift Master Reference",
        "content": "How equilibrium systems respond to changes:\n\n| Stress Applied | System Response | Direction of Shift | Effect on Numerical Value of $K$ |\n| :--- | :--- | :--- | :--- |\n| **Add Reactant** | Consumes excess reactant | **Shifts Right** ($\\rightarrow$) | **NO CHANGE** ($Q < K$, recovers) |\n| **Remove Product** | Replaces missing product | **Shifts Right** ($\\rightarrow$) | **NO CHANGE** ($Q < K$, recovers) |\n| **Decrease Volume / Increase Pressure** | Favors side with FEWER moles of gas | Shifts toward fewer gas moles | **NO CHANGE** |\n| **Increase Volume / Decrease Pressure** | Favors side with MORE moles of gas | Shifts toward more gas moles | **NO CHANGE** |\n| **Add Inert Gas (He, Ar) at Constant Volume** | Increases total pressure, but partial pressures unchanged | **NO SHIFT** | **NO CHANGE** |\n| **Increase Temp (Exothermic $\\Delta H < 0$)** | System removes excess heat | **Shifts Left** ($\\leftarrow$) | **$K$ DECREASES** |\n| **Increase Temp (Endothermic $\\Delta H > 0$)** | System absorbs added heat | **Shifts Right** ($\\rightarrow$) | **$K$ INCREASES** |\n| **Add a Catalyst** | Accelerates forward and reverse rates equally | **NO SHIFT** | **NO CHANGE** |"
      },
      {
        "heading": "2. ICE Tables, $Q$ vs. $K$ & Equilibrium Concentrations (CED 7.4 & 7.5)",
        "content": "Systematic problem-solving with Initial-Change-Equilibrium (ICE) tables:\n\n* **Comparing Reaction Quotient ($Q$) to Equilibrium Constant ($K$)**:\n  * $Q < K$: Ratio of products to reactants is too low $\\implies$ **reaction shifts forward ($\\rightarrow$)**.\n  * $Q = K$: Dynamic chemical equilibrium; rates of forward and reverse reactions are equal.\n  * $Q > K$: Ratio of products to reactants is too high $\\implies$ **reaction shifts reverse ($\\leftarrow$)**.\n* **Converting $K_c$ and $K_p$**:\n  $$K_p = K_c (RT)^{\\Delta n}$$\n  *(Where $\\Delta n = \\text{moles gaseous products} - \\text{moles gaseous reactants}$). If $\\Delta n = 0$, then $K_p = K_c$.*\n* **The 5% Approximation Rule**:\n  * If $K$ is extremely small ($K < 10^{-4}$), initial reactant concentration $C_0 - x \\approx C_0$, avoiding quadratic equation calculations on the AP exam!"
      },
      {
        "heading": "3. Solubility Product ($K_{sp}$) & Common-Ion Precipitation (CED 7.11 & 7.12)",
        "content": "Equilibrium between slightly soluble ionic solids and their dissolved aqueous ions:\n\n* **Solubility Product Expressions**:\n  * $AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq) \\implies K_{sp} = [Ag^+][Cl^-] = s^2$\n  * $PbI_2(s) \\rightleftharpoons Pb^{2+}(aq) + 2I^-(aq) \\implies K_{sp} = [Pb^{2+}][I^-]^2 = (s)(2s)^2 = 4s^3$\n* **The Common-Ion Effect**:\n  * Adding a soluble salt containing a common ion (e.g. adding $NaCl$ to saturated $AgCl$) shifts the equilibrium to the left, **drastically reducing molar solubility ($s$)**.\n* **Precipitation Prediction**:\n  * Calculate ion product $Q_{sp}$. If $Q_{sp} > K_{sp}$, a **solid precipitate forms** until ion concentrations drop back to $K_{sp}$ equilibrium!"
      },
      {
        "heading": "4. Quantitative RICE Tables & The 5% Small-x Approximation (CED 7.5)",
        "content": "Solving chemical equilibrium states systematically:\n\n* **The Reaction Quotient ($Q$) vs. Equilibrium Constant ($K$)**:\n  * $Q < K$: Ratio of products to reactants is too low; reaction shifts **RIGHT** (forward direction) to reach equilibrium.\n  * $Q > K$: Ratio of products to reactants is too high; reaction shifts **LEFT** (reverse direction).\n  * $Q = K$: Dynamic equilibrium established; forward and reverse rates are equal.\n* **The 5% Small-$x$ Approximation Rule**:\n  * When $K \\ll 1$ (typically $K \\le 10^{-4}$), initial reactant concentration $[A]_0$ changes negligibly ($[A]_{\\text{eq}} = [A]_0 - x \\approx [A]_0$).\n  * **Validity Check**: After solving for $x$, evaluate:\n    $$\\frac{x}{[A]_0} \\times 100\\% \\le 5.0\\%$$\n  * If $\\le 5\\%$, the approximation is valid and accepted on the AP Exam. If $>5\\%$, the full quadratic formula must be solved!"
      },
      {
        "heading": "5. Solubility Product Constant ($K_{sp}$) & The Common Ion Effect (CED 7.11-7.13)",
        "content": "Heterogeneous dissolution equilibria and precipitation thresholds:\n\n* **Molar Solubility ($s$) Derivation**:\n  * For $1:1$ salt: $\\text{AgCl} (s) \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^- \\implies K_{sp} = [s][s] = s^2 \\implies s = \\sqrt{K_{sp}}$.\n  * For $1:2$ salt: $\\text{PbCl}_2 (s) \\rightleftharpoons \\text{Pb}^{2+} + 2\\text{Cl}^- \\implies K_{sp} = [s][2s]^2 = 4s^3 \\implies s = \\sqrt[3]{K_{sp}/4}$.\n  * For $1:3$ salt: $\\text{Fe(OH)}_3 (s) \\implies K_{sp} = [s][3s]^3 = 27s^4 \\implies s = \\sqrt[4]{K_{sp}/27}$.\n* **The Common Ion Effect**:\n  * Adding a soluble salt sharing an ion (e.g., adding $\\text{NaCl}$ to saturated $\\text{AgCl}$) increases $[\\text{Cl}^-]$.\n  * By Le Chatelier’s principle, the system shifts **LEFT**, dramatically reducing the molar solubility of the precipitate!"
      },
      {
        "heading": "4. Quantitative RICE Tables & The 5% Small-x Approximation (CED 7.5)",
        "content": "Solving chemical equilibrium states systematically:\n\n* **The Reaction Quotient ($Q$) vs. Equilibrium Constant ($K$)**:\n  * $Q < K$: Ratio of products to reactants is too low; reaction shifts **RIGHT** (forward direction) to reach equilibrium.\n  * $Q > K$: Ratio of products to reactants is too high; reaction shifts **LEFT** (reverse direction).\n  * $Q = K$: Dynamic equilibrium established; forward and reverse rates are equal.\n* **The 5% Small-$x$ Approximation Rule**:\n  * When $K \\ll 1$ (typically $K \\le 10^{-4}$), initial reactant concentration $[A]_0$ changes negligibly ($[A]_{\\text{eq}} = [A]_0 - x \\approx [A]_0$).\n  * **Validity Check**: After solving for $x$, evaluate:\n    $$\\frac{x}{[A]_0} \\times 100\\% \\le 5.0\\%$$\n  * If $\\le 5\\%$, the approximation is valid and accepted on the AP Exam. If $>5\\%$, the full quadratic formula must be solved!"
      },
      {
        "heading": "5. Solubility Product Constant ($K_{sp}$) & The Common Ion Effect (CED 7.11-7.13)",
        "content": "Heterogeneous dissolution equilibria and precipitation thresholds:\n\n* **Molar Solubility ($s$) Derivation**:\n  * For $1:1$ salt: $\\text{AgCl} (s) \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^- \\implies K_{sp} = [s][s] = s^2 \\implies s = \\sqrt{K_{sp}}$.\n  * For $1:2$ salt: $\\text{PbCl}_2 (s) \\rightleftharpoons \\text{Pb}^{2+} + 2\\text{Cl}^- \\implies K_{sp} = [s][2s]^2 = 4s^3 \\implies s = \\sqrt[3]{K_{sp}/4}$.\n  * For $1:3$ salt: $\\text{Fe(OH)}_3 (s) \\implies K_{sp} = [s][3s]^3 = 27s^4 \\implies s = \\sqrt[4]{K_{sp}/27}$.\n* **The Common Ion Effect**:\n  * Adding a soluble salt sharing an ion (e.g., adding $\\text{NaCl}$ to saturated $\\text{AgCl}$) increases $[\\text{Cl}^-]$.\n  * By Le Chatelier’s principle, the system shifts **LEFT**, dramatically reducing the molar solubility of the precipitate!"
      }
    ],
    "workedExamples": [
      {
        "title": "ICE Table and Quadratic Equilibrium Calculation",
        "topicRef": "CED 7.5 Calculating Equilibrium Concentrations",
        "question": "For the gas-phase reaction $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, $K_c = 50.0$ at $448^\\circ\\text{C}$. If $1.00\\text{ mol}$ of $\\text{H}_2$ and $1.00\\text{ mol}$ of $\\text{I}_2$ are placed in a rigid $1.00\\text{ L}$ container, calculate the equilibrium concentration of $\\text{HI}$.",
        "solutionSteps": [
          "Step 1: Set up initial concentrations: $[\\text{H}_2]_0 = 1.00\\text{ M}$, $[\\text{I}_2]_0 = 1.00\\text{ M}$, $[\\text{HI}]_0 = 0$.",
          "Step 2: Define change row using stoichiometry: $[\\text{H}_2] = 1.00 - x$, $[\\text{I}_2] = 1.00 - x$, $[\\text{HI}] = +2x$.",
          "Step 3: Write equilibrium expression: $K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(2x)^2}{(1.00 - x)(1.00 - x)} = \\frac{4x^2}{(1.00 - x)^2} = 50.0$.",
          "Step 4: Take the square root of both sides: $\\frac{2x}{1.00 - x} = \\sqrt{50.0} \\approx 7.071$.",
          "Step 5: Solve for $x$: $2x = 7.071(1.00 - x) = 7.071 - 7.071x \\implies 9.071x = 7.071 \\implies x = 0.7795\\text{ M}$.",
          "Step 6: Find equilibrium concentration: $[\\text{HI}] = 2x = 2(0.7795) = 1.56\\text{ M}$."
        ],
        "finalAnswer": "$[\\text{HI}]_{\\text{eq}} = 1.56\\text{ M}$.",
        "apScoringTip": "Show the ICE table explicitly. Taking the square root of perfect square expressions avoids messy quadratic formulas and saves precious exam minutes."
      }
    ],
    "diagrams": [
      {
        "id": "chem_ice_concentrations",
        "title": "Concentration vs. Time Graph Reaching Equilibrium",
        "subtitle": "Reactant Depletion and Product Formation Leveling Off",
        "type": "equilibrium_graph",
        "description": "Graph showing reactant concentrations decreasing and product concentrations rising until curves become completely horizontal, signaling dynamic equilibrium.",
        "takeaway": "Equilibrium is established at the instant when concentration lines become flat horizontal lines (rates equal; concentrations constant)."
      }
    ],
    "commonTraps": [
      "Believing reactant and product concentrations are equal at equilibrium. Rates are equal; concentrations are CONSTANT, but rarely equal.",
      "Including pure liquids or solids in the equilibrium expression. Omit $\\text{H}_2\\text{O}(l)$, $\\text{CaCO}_3(s)$, etc., entirely from $K_c$ and $K_p$.",
      "Assuming adding an inert gas at constant volume shifts equilibrium. Since volume is constant, reactant partial pressures do NOT change, so $Q$ remains equal to $K$ (no shift)."
    ],
    "cramSheet": [
      "$Q < K$: Shifts right to form products; $Q > K$: Shifts left to form reactants.",
      "ONLY temperature changes the numerical value of $K$.",
      "Solids and pure liquids are NEVER included in equilibrium expressions.",
      "Common Ion Effect: Adding an ion already present shifts solubility equilibrium left, DECREASING solubility."
    ]
  },
  {
    "unitId": "u8",
    "unitNumber": 8,
    "title": "Acids and Bases",
    "examWeight": "11%–15% of AP Exam",
    "bigIdea": "Acid-base reactions transfer protons. pH, buffering capacity, and titration curves reflect equilibrium proton exchange between conjugate pairs.",
    "keyTheorems": [
      {
        "name": "Brønsted-Lowry Conjugate Acid-Base Theory",
        "conditions": "Aqueous acid-base proton transfer reactions.",
        "conclusion": "An acid is a proton ($\\text{H}^+$) donor; a base is a proton acceptor. Conjugates differ by exactly one single proton: $\\text{HA} \\rightleftharpoons \\text{A}^- + \\text{H}^+$.",
        "apTip": "The stronger an acid, the weaker its conjugate base! Strong acids (e.g. $\\text{HCl}$) have negligible conjugate bases ($\\text{Cl}^-$ cannot hydrolyze water)."
      },
      {
        "name": "Buffer Action & Henderson-Hasselbalch Equation",
        "conditions": "Solution containing appreciable and comparable quantities of a weak acid and its conjugate base.",
        "conclusion": "Resists changes in pH upon addition of small amounts of strong acid or strong base: $\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$.",
        "apTip": "Optimal buffering capacity occurs when $[\\text{A}^-] = [\\text{HA}]$, at which point $\\text{pH} = \\text{p}K_a$ (half-equivalence point of a weak acid titration)!"
      }
    ],
    "formulas": [
      {
        "name": "pH, pOH, and Autoionization of Water",
        "latex": "\\text{pH} = -\\log[\\text{H}^+], \\quad \\text{pOH} = -\\log[\\text{OH}^-], \\quad \\text{pH} + \\text{pOH} = 14.00 \\text{ (at } 25^\\circ\\text{C)}",
        "explanation": "$K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$ at $25^\\circ\\text{C}$."
      },
      {
        "name": "Acid and Base Dissociation Constants",
        "latex": "K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}, \\quad K_b = \\frac{[\\text{HB}^+][\\text{OH}^-]}{[\\text{B}]}, \\quad K_a \\times K_b = K_w",
        "explanation": "Conjugate acid-base pair constants multiply to $K_w$."
      },
      {
        "name": "Henderson-Hasselbalch Equation",
        "latex": "\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{Conjugate Base}]}{[\\text{Weak Acid}]}\\right)",
        "explanation": "Calculates buffer pH directly from conjugate pair ratio."
      }
    ],
    "sections": [
      {
        "heading": "1. The 6 Strong Acids to Memorize for AP Chemistry",
        "content": "College Board expects instant recognition of the **6 Strong Acids** that dissociate $100\\%$ in water:\n\n1. $\\text{HCl}$ — Hydrochloric acid\n2. $\\text{HBr}$ — Hydrobromic acid\n3. $\\text{HI}$ — Hydroiodic acid\n4. $\\text{HNO}_3$ — Nitric acid\n5. $\\text{HClO}_4$ — Perchloric acid\n6. $\\text{H}_2\\text{SO}_4$ — Sulfuric acid (1st proton is strong: $\\text{H}_2\\text{SO}_4 \\rightarrow \\text{H}^+ + \\text{HSO}_4^-$)\n\n*Strong Bases*: Group 1 hydroxides ($\\text{LiOH, NaOH, KOH}$) and heavy Group 2 hydroxides ($\\text{Ca(OH)}_2, \\text{Sr(OH)}_2, \\text{Ba(OH)}_2$)."
      },
      {
        "heading": "2. Acid-Base Titration Curve Regions & Buffer Matrix",
        "content": "Anatomy of a weak acid ($\\text{HA}$) vs. strong base ($\\text{NaOH}$) titration curve:\n\n| Titration Curve Region | Dominant Chemical Species | Mathematical Governing Formula | Characteristic pH Range | Suitable Indicator |\n| :--- | :--- | :--- | :--- | :--- |\n| **1. Initial Point ($V = 0$)** | Pure weak acid $\\text{HA}$ in $\\text{H}_2\\text{O}$ | $[\\text{H}^+] \\approx \\sqrt{K_a [\\text{HA}]_0}$ | Acidic ($\\text{pH} \\approx 2 - 4$) | N/A |\n| **2. Buffer Region** | Conjugate pair mixture: $\\text{HA} + \\text{A}^-$ | $\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$ | Flat, resists pH changes | N/A |\n| **3. Half-Equivalence Point** | $[\\text{HA}] = [\\text{A}^-]$ (exactly equal) | $\\mathbf{\\text{pH} = \\text{p}K_a}$ | Flat inflection midpoint | Midpoint determines $\\text{p}K_a$ |\n| **4. Equivalence Point** | Pure conjugate base $\\text{A}^-$ (stoichiometric) | $[\\text{OH}^-] \\approx \\sqrt{K_b [\\text{A}^-]}$ | **Basic ($\\text{pH} > 7$, typically $8.5 - 9.5$)** | **Phenolphthalein** (transitions at $\\text{pH} \\approx 8.2 - 10$) |\n| **5. Post-Equivalence** | Excess unreacted $\\text{OH}^-$ titrant | $[\\text{OH}^-] = \\frac{\\text{moles excess } \\text{OH}^-}{V_{\\text{total}}}$ | Strongly basic ($\\text{pH} > 12$) | N/A |\n\n*College Board Rule*: Equivalence point is NOT always pH 7! Weak acid + strong base yields basic salt at equivalence ($\\text{pH} > 7$). Weak base + strong acid yields acidic salt at equivalence ($\\text{pH} < 7$)."
      },
      {
        "heading": "3. Weak Acid/Base Equilibrium & Percent Ionization (CED 8.3)",
        "content": "Weak acids ($HA$) do not dissociate completely in water:\n$$HA(aq) + H_2O(l) \\rightleftharpoons H_3O^+(aq) + A^-(aq) \\quad \\implies \\quad K_a = \\frac{[H_3O^+][A^-]}{[HA]}$$\n\n**Percent Ionization:**\n$$\\text{Percent Ionization} = \\frac{[H^+]_{\\text{equilibrium}}}{[HA]_{\\text{initial}}} \\times 100\\%$$\n\n*The Dilution Paradox (Le Châtelier Effect):*\nAs a weak acid solution is **diluted with water** (lowering $[HA]_0$):\n- The equilibrium shifts to the side with MORE aqueous particles (shifts right).\n- Therefore, **Percent Ionization INCREASES upon dilution**, even though total $[H^+]$ and conductivity decrease!"
      },
      {
        "heading": "4. Molecular Structure Factors on Acid Strength (CED 8.6)",
        "content": "Why some acids are stronger than others:\n1. **Binary Acids ($HX$, where $X$ is a halogen/nonmetal):**\n   - Down a group ($HF \\ll HCl < HBr < HI$): **Bond strength is the dominant factor**. As the halogen atom gets larger, $H-X$ bond length increases and bond energy decreases, making it much easier to dissociate $H^+$. Thus, $HI$ is the strongest acid in the group!\n2. **Oxyacids ($H-O-Y$):**\n   - **Same number of oxygens (e.g. $HClO > HBrO > HIO$):** More electronegative central atom $Y$ pulls electron density away from the $O-H$ bond, polarizing it and weakening it, making $H^+$ dissociate more easily.\n   - **Different number of oxygens (e.g. $HClO < HClO_2 < HClO_3 < HClO_4$):** Additional electronegative oxygen atoms draw electron density via inductive effects, stabilizing the conjugate base anion by delocalizing negative charge."
      },
      {
        "heading": "5. Buffer Capacity & Henderson-Hasselbalch Mechanics (CED 8.8–8.10)",
        "content": "A buffer solution resists changes in pH when small amounts of strong acid or base are added:\n$$\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[A^-]}{[HA]}\\right)$$\n\n- **Optimal Buffering:** Occurs when $[HA] = [A^-]$, where $\\text{pH} = \\text{p}K_a$.\n- **Effective Buffering Range:** $\\text{pH} = \\text{p}K_a \\pm 1$ (the ratio $[A^-]/[HA]$ must remain between $0.1$ and $10$).\n- **Buffer Capacity:** Depends on the **molar quantities** of weak acid and conjugate base present. A buffer with $1.0\\text{ M } HA$ and $1.0\\text{ M } A^-$ has $10\\times$ the buffer capacity of a solution with $0.10\\text{ M } HA$ and $0.10\\text{ M } A^-$, even though both have the identical pH!"
      },
      {
        "heading": "6. Comprehensive Acid-Base Titration Curves & Half-Equivalence Chemistry (CED 8.7)",
        "content": "Master analysis of titration curve anatomy:\n\n* **Weak Acid Titrated with Strong Base Curve**:\n  * **Initial Point ($V_b = 0$)**: $pH$ determined solely by weak acid equilibrium: $[\\text{H}^+] = \\sqrt{K_a [HA]_0}$.\n  * **Buffer Region**: Contains significant concentrations of both weak acid $HA$ and conjugate base $A^-$. Resists $pH$ shifts.\n  * **Half-Equivalence Point ($V_b = \\frac{1}{2} V_{\\text{eq}}$)**:\n    * Exactly half the weak acid has been neutralized: $[HA] = [A^-]$.\n    * Applying Henderson-Hasselbalch:\n      $$pH = pK_a + \\log\\left(\\frac{[A^-]}{[HA]}\\right) = pK_a + \\log(1) \\implies pH = pK_a$$\n    * Direct experimental method to determine $K_a$ of an unknown weak acid!\n  * **Equivalence Point ($V_b = V_{\\text{eq}}$)**:\n    * All $HA$ converted into conjugate base $A^-$.\n    * Solution contains $A^-$, which hydrolyzes water: $A^- + \\text{H}_2\\text{O} \\rightleftharpoons HA + \\text{OH}^-$.\n    * Therefore, **$pH > 7.00$ at the equivalence point** for a weak acid-strong base titration!\n* **Indicator Selection Rule**:\n  * An acid-base indicator changes color when $pH \\approx pK_{In} \\pm 1$.\n  * The indicator’s $pK_{In}$ MUST fall within the steep vertical inflection window of the titration curve."
      },
      {
        "heading": "7. Polyprotic Acids, Salt Hydrolysis & Amphiprotic Equilibria (CED 8.8-8.10)",
        "content": "Complex proton transfer dynamics in polyprotic systems:\n\n* **Stepwise Ionization of Polyprotic Acids**:\n  * Carbonic acid: $\\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$ ($K_{a1} = 4.3 \\times 10^{-7}$).\n  * Bicarbonate: $\\text{HCO}_3^- \\rightleftharpoons \\text{H}^+ + \\text{CO}_3^{2-}$ ($K_{a2} = 4.8 \\times 10^{-11}$).\n  * Because $K_{a1} \\gg K_{a2}$ (typically by a factor of $10^4$ or more), virtually all $[\\text{H}^+]$ in solution is generated by the first dissociation step!\n* **Salt Hydrolysis Rules**:\n  * Salt of Strong Acid + Strong Base ($\\text{NaCl}$): Neutral ($pH = 7.00$).\n  * Salt of Weak Acid + Strong Base ($\\text{NaC}_2\\text{H}_3\\text{O}_2$): Basic ($pH > 7.00$).\n  * Salt of Strong Acid + Weak Base ($\\text{NH}_4\\text{Cl}$): Acidic ($pH < 7.00$)."
      }
    ],
    "workedExamples": [
      {
        "title": "Weak Acid Buffer pH After Adding Strong Base",
        "topicRef": "CED 8.8 Buffer Capacity & Addition of Strong Base",
        "question": "A $1.00\\text{ L}$ buffer solution contains $0.30\\text{ M } \\text{CH}_3\\text{COOH}$ ($K_a = 1.8 \\times 10^{-5}$, $\\text{p}K_a = 4.74$) and $0.30\\text{ M } \\text{CH}_3\\text{COONa}$. If $0.050\\text{ mol}$ of solid $\\text{NaOH}$ is added with negligible volume change, calculate the new solution pH.",
        "solutionSteps": [
          "Step 1: Write neutralization stoichiometry for added strong base: $\\text{CH}_3\\text{COOH} + \\text{OH}^- \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O}$.",
          "Step 2: Initial moles: $n_{\\text{acid}} = 0.30\\text{ mol}$, $n_{\\text{base}} = 0.30\\text{ mol}$, $n_{\\text{OH}^-} = 0.050\\text{ mol}$.",
          "Step 3: Neutralization takes place to completion:",
          "- Moles of weak acid remaining: $0.30 - 0.050 = 0.25\\text{ mol}$.",
          "- Moles of conjugate base formed: $0.30 + 0.050 = 0.35\\text{ mol}$.",
          "Step 4: Use Henderson-Hasselbalch equation: $\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right) = 4.74 + \\log\\left(\\frac{0.35}{0.25}\\right)$.",
          "Step 5: Calculate ratio: $\\frac{0.35}{0.25} = 1.40 \\implies \\log(1.40) = 0.146$.",
          "Step 6: $\\text{pH} = 4.74 + 0.146 = 4.89$."
        ],
        "finalAnswer": "New buffer pH = $4.89$.",
        "apScoringTip": "Break the problem into two distinct steps: (1) Stoichiometry of neutralization using moles (ICE table), then (2) Equilibrium pH calculation using Henderson-Hasselbalch."
      }
    ],
    "diagrams": [
      {
        "id": "chem_titration_curve",
        "title": "Weak Acid vs. Strong Base Titration Curve",
        "subtitle": "Buffer Zone, Half-Equivalence Point, and Equivalence Jump",
        "type": "titration_curve",
        "description": "Sigmoidal titration curve showing buffer region with midpoint at $\\text{pH} = \\text{p}K_a$, steep equivalence jump, and basic equivalence point ($\\text{pH} > 7$).",
        "takeaway": "At the half-equivalence point ($V = \\frac{1}{2}V_{\\text{equiv}}$), exactly half the weak acid is converted to conjugate base, so $[\\text{HA}] = [\\text{A}^-]$ and $\\text{pH} = \\text{p}K_a$."
      }
    ],
    "commonTraps": [
      "Assuming the equivalence point of all titrations is at $\\text{pH} = 7$. Weak acid titrated with strong base produces a basic salt conjugate at equivalence ($\\text{pH} > 7$); weak base with strong acid produces an acidic salt ($\\text{pH} < 7$).",
      "Forgetting that $K_w = 1.0 \\times 10^{-14}$ ONLY at $25^\\circ\\text{C}$. Autoionization of water is endothermic, so at body temp ($37^\\circ\\text{C}$), $K_w > 10^{-14}$ and neutral water has $\\text{pH} \\approx 6.8$!",
      "Thinking buffers can neutralize infinite amounts of acid or base. Adding more moles of strong acid than weak conjugate base destroys the buffer capacity."
    ],
    "cramSheet": [
      "Strong acids: $\\text{HCl, HBr, HI, HNO}_3, \\text{HClO}_4, \\text{H}_2\\text{SO}_4$. Completely dissociate.",
      "Weak acid/strong base equivalence point is $\\text{pH} > 7$ (basic conjugate salt formed).",
      "At half-equivalence point: $\\text{pH} = \\text{p}K_a$ because $[\\text{HA}] = [\\text{A}^-]$.",
      "Buffer recipe: Weak acid + its conjugate base salt (or weak base + conjugate acid salt)."
    ]
  },
  {
    "unitId": "u9",
    "unitNumber": 9,
    "title": "Applications of Thermodynamics & Electrochemistry",
    "examWeight": "7%–9% of AP Exam",
    "bigIdea": "Gibbs Free Energy determines reaction thermodynamic favorability, coupling to equilibrium constants and electrical potential in electrochemical cells.",
    "keyTheorems": [
      {
        "name": "Gibbs Free Energy and Favorability Criterion",
        "conditions": "Process occurring at constant temperature and pressure.",
        "conclusion": "A process is thermodynamically favored (spontaneous) if and only if $\\Delta G^\\circ < 0$. Favorability couples enthalpy and entropy: $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$.",
        "apTip": "Do NOT say a reaction is \"spontaneous\" on the AP exam; use the official College Board phrasing: \"thermodynamically favored\"!"
      },
      {
        "name": "Electrochemical Cell Voltage & Favorability",
        "conditions": "Galvanic (voltaic) and electrolytic electrochemical cells.",
        "conclusion": "Standard cell potential: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$. A positive cell potential ($E^\\circ > 0$) corresponds to a thermodynamically favored process ($\\Delta G^\\circ < 0$).",
        "apTip": "Mnemonic: **AN OX and RED CAT** (Oxidation at the Anode, Reduction at the Cathode). Electrons ALWAYS flow through the external wire from Anode to Cathode!"
      }
    ],
    "formulas": [
      {
        "name": "Gibbs Free Energy Fundamental Equation",
        "latex": "\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ",
        "explanation": "Enthalpy $\\Delta H^\\circ$ (usually in $\\text{kJ}$), Entropy $\\Delta S^\\circ$ (usually in $\\text{J/K}$, must convert to $\\text{kJ/K}$!)."
      },
      {
        "name": "Gibbs Free Energy & Equilibrium Link",
        "latex": "\\Delta G^\\circ = -RT\\ln K",
        "explanation": "$R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K})$. If $\\Delta G^\\circ < 0$, then $K > 1$ (products favored at equilibrium)."
      },
      {
        "name": "Free Energy & Cell Potential Master Relation",
        "latex": "\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}",
        "explanation": "$n$ is moles of electrons transferred; Faraday constant $F = 96,485\\text{ C/mol } e^-$."
      },
      {
        "name": "Electrolysis Current & Charge Equation",
        "latex": "I = \\frac{q}{t}, \\quad q = n_e F",
        "explanation": "Relates electrical current $I$ (Amperes) to charge $q$ (Coulombs) and time $t$ (seconds)."
      }
    ],
    "sections": [
      {
        "heading": "1. Thermodynamic Favorability Matrix ($\\Delta H$ vs. $\\Delta S$)",
        "content": "How signs of $\\Delta H$ and $\\Delta S$ determine favorability:\n\n| $\\Delta H$ (Enthalpy) | $\\Delta S$ (Entropy) | $\\Delta G = \\Delta H - T\\Delta S$ | Thermodynamic Favorability |\n| :--- | :--- | :--- | :--- |\n| **Negative ($-$)** | **Positive ($+$)** | **Always Negative ($-$)** | **Favored at ALL temperatures** ($K > 1$) |\n| **Positive ($+$)** | **Negative ($-$)** | **Always Positive ($+$)** | **NEVER favored at any temperature** ($K < 1$) |\n| **Negative ($-$)** | **Negative ($-$)** | Negative at low $T$; Positive at high $T$ | **Favored at LOW temperatures** (Enthalpy driven) |\n| **Positive ($+$)** | **Positive ($+$)** | Positive at low $T$; Negative at high $T$ | **Favored at HIGH temperatures** (Entropy driven) |\n\n*Crossover Temperature*: The temperature where a reaction switches between favored and unfavored occurs when $\\Delta G = 0 \\implies T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$."
      },
      {
        "heading": "2. Galvanic vs. Electrolytic Cells Anatomy & Electron Flow (CED 9.7 & 9.8)",
        "content": "Comprehensive comparison of electrochemical cell types:\n\n| Feature | Galvanic (Voltaic) Cell | Electrolytic Cell |\n| :--- | :--- | :--- |\n| **Thermodynamic Favorability** | **Spontaneous** ($\\Delta G^\\circ < 0, E^\\circ > 0$) | **Non-Spontaneous** ($\\Delta G^\\circ > 0, E^\\circ < 0$) |\n| **Energy Conversion** | Chemical energy $\\rightarrow$ Electrical work | Electrical power $\\rightarrow$ Chemical reaction |\n| **Anode Charge / Reaction** | Negative ($-$) / **Oxidation** | Positive ($+$) / **Oxidation** |\n| **Cathode Charge / Reaction** | Positive ($+$) / **Reduction** | Negative ($-$) / **Reduction** |\n| **Electron Flow Direction** | Anode $\\rightarrow$ Cathode (through external wire) | Anode $\\rightarrow$ Cathode (driven by battery) |\n| **Salt Bridge Ion Migration** | Cations $\\rightarrow$ Cathode; Anions $\\rightarrow$ Anode | Cations $\\rightarrow$ Cathode; Anions $\\rightarrow$ Anode |\n\n* **Standard Cell Potential**:\n  $$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{red}}(\\text{cathode}) - E^\\circ_{\\text{red}}(\\text{anode})$$\n  *(Always use standard reduction potentials directly without flipping signs; the negative in the formula already accounts for oxidation).*"
      },
      {
        "heading": "3. Nernst Shifts & Faraday's Law of Electrolysis (CED 9.9 & 9.10)",
        "content": "Electrochemistry under non-standard conditions and quantitative electrolysis:\n\n* **Qualitative Nernst Analysis**:\n  $$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log Q$$\n  * As a galvanic cell operates, reactants are consumed ($[\\text{reactants}] \\downarrow$) and products accumulate ($[\\text{products}] \\uparrow$), causing $Q$ to **increase**.\n  * As $Q$ increases, $E_{\\text{cell}}$ continuously **decreases until $E_{\\text{cell}} = 0$** (dead battery at chemical equilibrium, where $Q = K$).\n* **Faraday's Law of Electrolysis**:\n  $$I = \\frac{q}{t} \\implies q = I \\cdot t$$\n  $$\\text{Moles of Electrons } (n_e) = \\frac{q}{F} = \\frac{I \\cdot t}{96{,}485 \\text{ C/mol }e^-}$$\n  $$\\text{Grams Plated} = \\left(\\frac{I \\cdot t}{n \\cdot F}\\right) \\times \\text{Molar Mass}$$"
      },
      {
        "heading": "3. Gibbs Free Energy & Thermodynamic Favorability Matrix (CED 9.1–9.4)",
        "content": "The thermodynamic favorability of a process is determined by $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$:\n\n| $\\Delta H^\\circ$ (Enthalpy) | $\\Delta S^\\circ$ (Entropy) | $-T\\Delta S^\\circ$ | $\\Delta G^\\circ$ Favorability Status | Temperature Dependence |\n| :---: | :---: | :---: | :--- | :--- |\n| **Negative ($-$)** | **Positive ($+$)** | Negative ($-$) | **Always Favorable** ($Delta G < 0$) | Favorable at ALL temperatures |\n| **Positive ($+$)** | **Negative ($-$)** | Positive ($+$) | **Never Favorable** ($Delta G > 0$) | Unfavorable at ALL temperatures |\n| **Negative ($-$)** | **Negative ($-$)** | Positive ($+$) | **Favorable at LOW Temp** | Enthalpy-driven ($Delta H$ dominates at low $T$) |\n| **Positive ($+$)** | **Positive ($+$)** | Negative ($-$) | **Favorable at HIGH Temp** | Entropy-driven ($TDelta S$ dominates at high $T$) |\n\n*Equilibrium Temperature:* The transition temperature where a reaction shifts between favorable and unfavorable occurs when $\\Delta G^\\circ = 0 \\implies T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$."
      },
      {
        "heading": "4. Galvanic vs. Electrolytic Cells & The Nernst Equation (CED 9.7–9.10)",
        "content": "Electrochemical cells convert chemical energy into electrical work:\n- **Galvanic (Voltaic) Cell:** Thermodynamically favorable ($\\Delta G^\\circ < 0, E^\\circ_{\\text{cell}} > 0$). Generates electric current spontaneously.\n- **Electrolytic Cell:** Thermodynamically unfavorable ($\\Delta G^\\circ > 0, E^\\circ_{\\text{cell}} < 0$). Requires an external power source (battery) to force non-spontaneous reactions.\n\n**Non-Standard Conditions & Concentration Cells (The Nernst Concept):**\n$$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{RT}{nF}\\ln Q$$\n- If reactant concentrations are increased (or product concentrations decreased), $Q < 1 \\implies \\ln Q < 0 \\implies \\mathbf{E_{\\text{cell}} > E^\\circ_{\\text{cell}}}$.\n- As the battery runs, reactants convert to products, so $Q$ increases and $E_{\\text{cell}}$ decreases.\n- **Dead Battery:** When the system reaches chemical equilibrium ($Q = K$), the cell potential drops to **$E_{\\text{cell}} = 0$**!"
      },
      {
        "heading": "6. Galvanic vs. Electrolytic Cells & Faraday’s Laws of Electrolysis (CED 9.7-9.10)",
        "content": "The electrochemical divide and quantitative charge calculations:\n\n* **Galvanic (Voltaic) vs. Electrolytic Cells**:\n  * **Galvanic Cell**: Spontaneous chemical reaction ($\\Delta G^\\circ < 0, E^\\circ_{\\text{cell}} > 0$) converts chemical energy into electrical work. Anode is negative, cathode is positive.\n  * **Electrolytic Cell**: Non-spontaneous reaction ($\\Delta G^\\circ > 0, E^\\circ_{\\text{cell}} < 0$) driven by an external power source. Anode is positive, cathode is negative.\n  * **Universal Mnemonic**: **An Ox** (Oxidation at Anode) and **Red Cat** (Reduction at Cathode). Electrons ALWAYS flow through the external wire from **Anode to Cathode**!\n* **Quantitative Electrolysis (Faraday’s Law)**:\n  $$I = \\frac{q}{t} \\implies q = I \\times t$$\n  $$\\text{Moles of Electrons} = \\frac{I \\times t}{F} = \\frac{\\text{Current (A)} \\times \\text{Time (s)}}{96,485\\text{ C/mol } e^-}$$\n  $$\\text{Mass Deposited} = (\\text{Moles of } e^-) \\times \\left(\\frac{1\\text{ mol metal}}{n\\text{ mol } e^-}\\right) \\times \\text{Molar Mass}$$"
      },
      {
        "heading": "7. The Thermodynamic Trifecta: Linking $\\Delta G^circ$, $K$, and $E^circ$ (CED 9.5)",
        "content": "The mathematical unification of chemical driving forces:\n\n$$\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}} = -RT\\ln K$$\n\n* **Equilibrium & Favorability Correlation Matrix**:\n  * When $E^\\circ_{\\text{cell}} > 0 \\implies \\Delta G^\\circ < 0 \\implies K > 1$ (Thermodynamically Favored / Spontaneous).\n  * When $E^\\circ_{\\text{cell}} < 0 \\implies \\Delta G^\\circ > 0 \\implies K < 1$ (Thermodynamically Unfavored / Non-spontaneous).\n  * When $E^\\circ_{\\text{cell}} = 0 \\implies \\Delta G^\\circ = 0 \\implies K = 1$ (Dead Battery / Dynamic Equilibrium).\n* **Nernst Equation (Non-Standard Conditions)**:\n  $$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{RT}{nF}\\ln Q = E^\\circ_{\\text{cell}} - \\frac{0.0592\\text{ V}}{n}\\log_{10} Q \\quad (\\text{at } 298\\text{ K})$$\n  * As a galvanic cell discharges, reactants are consumed and products form $\\implies Q$ increases $\\implies E_{\\text{cell}}$ decreases until $E_{\\text{cell}} = 0$ (battery dies)."
      }
    ],
    "workedExamples": [
      {
        "title": "Standard Cell Potential & Free Energy Calculation",
        "topicRef": "CED 9.7 Galvanic Cells & E°cell",
        "question": "A galvanic cell is constructed with copper and zinc electrodes: $\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}(s)$ ($E^\\circ = -0.76\\text{ V}$), $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}(s)$ ($E^\\circ = +0.34\\text{ V}$). (a) Write the balanced cell reaction, (b) Calculate $E^\\circ_{\\text{cell}}$, and (c) Calculate $\\Delta G^\\circ$ for the cell.",
        "solutionSteps": [
          "Step 1: Identify cathode and anode. Reduction occurs at the more positive potential: Copper is cathode ($E^\\circ = +0.34\\text{ V}$). Zinc is anode (oxidized, reverse reaction: $\\text{Zn} \\rightarrow \\text{Zn}^{2+} + 2e^-$).",
          "Step 2: Balanced cell reaction: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$.",
          "Step 3: Calculate $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{red}}(\\text{cathode}) - E^\\circ_{\\text{red}}(\\text{anode}) = +0.34 - (-0.76) = +1.10\\text{ V}$.",
          "Step 4: Determine moles of electrons transferred: $n = 2\\text{ mol } e^-$.",
          "Step 5: Calculate $\\Delta G^\\circ = -nFE^\\circ = -(2)(96,485\\text{ C/mol})(1.10\\text{ V}) = -212,267\\text{ J/mol} = -212.3\\text{ kJ/mol}$."
        ],
        "finalAnswer": "Cell reaction: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$; $E^\\circ_{\\text{cell}} = +1.10\\text{ V}$; $\\Delta G^\\circ = -212\\text{ kJ/mol}$.",
        "apScoringTip": "Never multiply standard reduction potentials by stoichiometric coefficients when balancing electrons! Voltage is an intensive property and does NOT scale with equation coefficients."
      }
    ],
    "diagrams": [
      {
        "id": "chem_galvanic_cell",
        "title": "Standard Galvanic Electrochemical Cell Diagram",
        "subtitle": "Anode, Cathode, Salt Bridge, and Electron Flow",
        "type": "galvanic_cell",
        "description": "Two-beaker cell with Zn anode and Cu cathode, porous salt bridge, voltmeter, showing electron flow through external wire and ion migration in salt bridge.",
        "takeaway": "Electrons flow from anode to cathode through the wire. In the salt bridge, anions migrate toward the anode and cations migrate toward the cathode to maintain electrical neutrality."
      }
    ],
    "commonTraps": [
      "Multiplying reduction potentials ($E^\\circ$) when multiplying half-reactions. $E^\\circ$ is an intensive property and never changes value when multiplying coefficients!",
      "Mixing up units between $\\Delta H$ and $\\Delta S$. $\\Delta H$ is typically reported in $\\text{kJ/mol}$ while $\\Delta S$ is in $\\text{J}/(\\text{mol}\\cdot\\text{K})$. You MUST divide $\\Delta S$ by 1000 before subtracting in $\\Delta G = \\Delta H - T\\Delta S$.",
      "Forgetting the function of the salt bridge. A salt bridge allows ion migration to prevent charge buildup; without it, current immediately drops to zero."
    ],
    "cramSheet": [
      "$\\Delta G^\\circ < 0 \\iff E^\\circ > 0 \\iff K > 1$ (Thermodynamically favored).",
      "$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = -RT\\ln K = -nFE^\\circ$.",
      "AN OX (Anode = Oxidation) and RED CAT (Cathode = Reduction).",
      "Electrons flow through external wire from ANODE to CATHODE.",
      "Salt bridge: Cations migrate to cathode; anions migrate to anode."
    ]
  }
];
