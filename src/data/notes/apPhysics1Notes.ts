import { APUnitNote } from './types';

export const AP_PHYSICS_1_NOTES: APUnitNote[] = [
  {
    "unitId": "u1",
    "unitNumber": 1,
    "title": "Kinematics",
    "examWeight": "10%–15% of AP Exam",
    "bigIdea": "Motion can be described using position, velocity, and acceleration vectors across 1D and 2D frames, independent of the forces causing it.",
    "keyTheorems": [
      {
        "name": "Independence of Perpendicular Motion Vectors",
        "conditions": "An object undergoes 2D motion (e.g. projectile motion) with zero air resistance.",
        "conclusion": "Horizontal motion ($a_x = 0$, constant velocity) and vertical motion ($a_y = -g$, constant freefall acceleration) operate completely independently, linked exclusively by elapsed time $t$.",
        "apTip": "Never mix horizontal and vertical values in the same kinematic formula! Always build separate $x$- and $y$-axis component columns."
      },
      {
        "name": "Area Under Velocity-Time Curve Theorem",
        "conditions": "Any 1D motion where velocity is plotted as a function of time $v(t)$.",
        "conclusion": "The signed geometric area between $v(t)$ and the time axis equals net displacement $\\Delta x = \\int v(t) \\, dt$. Slopes represent instantaneous acceleration $a = dv/dt$.",
        "apTip": "If the area is above the $t$-axis, displacement is positive; below the axis, displacement is negative. Total distance traveled is the sum of absolute areas."
      }
    ],
    "formulas": [
      {
        "name": "First Kinematic Equation (Velocity-Time)",
        "latex": "v_x = v_{0x} + a_x t",
        "explanation": "Calculates final velocity after accelerating at constant $a_x$ for time $t$."
      },
      {
        "name": "Second Kinematic Equation (Position-Time)",
        "latex": "x = x_0 + v_{0x} t + \\frac{1}{2}a_x t^2",
        "explanation": "Gives position as a quadratic function of time under constant acceleration."
      },
      {
        "name": "Third Kinematic Equation (Timeless Equation)",
        "latex": "v_x^2 = v_{0x}^2 + 2a_x (x - x_0)",
        "explanation": "Relates velocities, acceleration, and displacement when elapsed time is unknown."
      },
      {
        "name": "Centripetal Acceleration",
        "latex": "a_c = \\frac{v^2}{r} = \\omega^2 r",
        "explanation": "Inward acceleration required to maintain circular trajectory of radius $r$ at tangential speed $v$."
      }
    ],
    "sections": [
      {
        "heading": "1. Kinematics Graph Interpretation Matrix",
        "content": "Understanding how Position ($x$), Velocity ($v$), and Acceleration ($a$) graphs relate is fundamental to AP Physics 1:\n\n| Graph Type | Slope Meaning | Area Under Curve Meaning | Key Sign Feature |\n| :--- | :--- | :--- | :--- |\n| **Position vs. Time ($x-t$)** | Instantaneous Velocity ($v$) | N/A (No physical meaning) | Curvature indicates acceleration (concave up = $a > 0$) |\n| **Velocity vs. Time ($v-t$)** | Instantaneous Acceleration ($a$) | Net Displacement ($\\Delta x$) | Crossing $t$-axis indicates turnaround (velocity changes sign) |\n| **Acceleration vs. Time ($a-t$)** | Jerk ($da/dt$) | Change in Velocity ($\\Delta v$) | Area above axis = positive $\\Delta v$; below = negative $\\Delta v$ |\n\n**Turnaround Point Rule**: An object stops and reverses direction when and only when $v(t) = 0$ AND the sign of $v(t)$ changes from positive to negative or vice versa."
      },
      {
        "heading": "2. Projectile Motion Procedures & Symmetry",
        "content": "For a projectile launched at speed $v_0$ and angle $\\theta$ above the horizontal:\n\n1. **Initial Velocity Components**:\n   - $v_{0x} = v_0 \\cos\\theta$ (remains constant throughout flight because $a_x = 0$)\n   - $v_{0y} = v_0 \\sin\\theta$ (subject to downward gravitational acceleration $a_y = -g$)\n\n2. **At Peak of Flight ($y = y_{\\max}$)**:\n   - Vertical velocity is instantaneously zero: $v_y(t_{\\text{peak}}) = 0$.\n   - Time to peak: $t_{\\text{peak}} = \\frac{v_0 \\sin\\theta}{g}$.\n   - Horizontal velocity is still non-zero: $v_x = v_0 \\cos\\theta$. Speed at top is $v_{\\text{top}} = v_0 \\cos\\theta$.\n\n3. **Total Flight Time (Flat Ground Launch)**:\n   - $T_{\\text{total}} = 2 t_{\\text{peak}} = \\frac{2 v_0 \\sin\\theta}{g}$.\n   - Horizontal Range: $R = v_{0x} T_{\\text{total}} = \\frac{v_0^2 \\sin(2\\theta)}{g}$. Maximum range occurs at $\\theta = 45^\\circ$."
      },
      {
        "heading": "3. Relative Motion & Vector Addition in 2D Frames (CED 1.4)",
        "content": "Relative velocity describes motion observed from different frames of reference:\n$$\\vec{v}_{A/C} = \\vec{v}_{A/B} + \\vec{v}_{B/C}$$\n- **Classic River Crossing Problem:**\n  - A boat with speed $v_{boat}$ relative to water crosses a river flowing downstream at speed $v_{river}$.\n  - **Crossing Directly Perpendicular to Bank:** The boat must head upstream at angle $\\theta = \\arcsin(v_{river}/v_{boat})$.\n  - **Quickest Crossing Time:** The boat aims straight across perpendicular to the flow ($\theta = 0$). Crossing time is $t = \\frac{D}{v_{boat}}$, regardless of river speed! Downstream drift distance is $x_{\\text{drift}} = v_{river} t$.\n- **Vector Decomposition Rule:** Always resolve non-collinear vectors into orthogonal Cartesian components ($v_x = v\\cos\\theta, v_y = v\\sin\\theta$) before adding algebraically."
      },
      {
        "heading": "4. Calculus Connections & Graphical Area Approximations (CED 1.1–1.2)",
        "content": "The mathematical relationships between motion variables are defined by differentiation and integration:\n$$v(t) = \\frac{dx}{dt}, \\quad a(t) = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}$$\n$$\\Delta x = \\int_{t_1}^{t_2} v(t) \\, dt, \\quad \\Delta v = \\int_{t_1}^{t_2} a(t) \\, dt$$\n- **Graph Curvature (Concavity):**\n  - If a position-time graph $x(t)$ is **concave upward** ($d^2x/dt^2 > 0$), acceleration is positive ($a > 0$).\n  - If $x(t)$ is **concave downward** ($d^2x/dt^2 < 0$), acceleration is negative ($a < 0$).\n  - An inflection point on $x(t)$ corresponds to an extremum on $v(t)$ and instantaneous zero acceleration ($a = 0$).\n- **Non-Linear Area Estimation:** On the AP exam, when $v(t)$ or $a(t)$ is curved, approximate net change by dividing the area into geometric rectangles and trapezoids, counting grid squares carefully."
      },
      {
        "heading": "5. Non-Symmetric Projectile Motion (Cliff & Elevated Launches)",
        "content": "When a projectile is launched from a cliff of height $h$ ($y_0 = h$) to ground ($y_f = 0$):\n- **Flight Time:** The path is not symmetric ($t_{\\text{fall}} > t_{\\text{rise}}$). Set $y_f - y_0 = -h$:\n  $$-h = v_{0y} t - \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 - (v_0\\sin\\theta)t - h = 0$$\n  Solve for the single positive root using the quadratic formula.\n- **Impact Speed:**\n  - By conservation of energy, the impact speed depends *only* on launch speed $v_0$ and height $h$, completely independent of launch angle:\n    $$\\frac{1}{2}m v_0^2 + mgh = \\frac{1}{2}m v_{\\text{impact}}^2 \\implies v_{\\text{impact}} = \\sqrt{v_0^2 + 2gh}$$\n  - The impact angle with the horizontal is given by $\\theta_{\\text{impact}} = \\arctan\\left(\\frac{|v_y|}{v_x}\\right)$."
      },
      {
        "heading": "6. Official AP Experimental Design Lab: Measuring g via Photogates vs. Video Analysis (Skill 4.2)",
        "content": "Standard AP Physics 1 inquiry investigation to experimentally determine acceleration due to gravity $g$:\n\n* **Laboratory Setup & Equipment**:\n  * Freefall picket fence (clear acrylic strip with alternating opaque black bands spaced at uniform intervals $d = 0.050\\text{ m}$).\n  * Photogate sensor connected to a digital timer interface; plumb line for vertical alignment; cushion pad.\n* **Experimental Procedure**:\n  1. Secure the photogate horizontally to a ring stand, ensuring the infrared beam is strictly perpendicular to the vertical fall path.\n  2. Hold the picket fence vertically just above the photogate beam.\n  3. Release from rest without imparting rotational spin or initial vertical velocity.\n  4. The photogate records the precise times $t_1, t_2, \\dots, t_n$ at which each opaque band blocks the infrared beam.\n* **Data Reduction & Graph Linearization**:\n  * Using kinematics: $y = \\frac{1}{2}gt^2$.\n  * Plot position $y$ on the vertical axis against time-squared $t^2$ on the horizontal axis.\n  * The resulting graph is linear with theoretical slope $m = \\frac{1}{2}g$.\n  * Acceleration due to gravity is calculated directly: $g_{\\text{exp}} = 2 \\times \\text{slope}$.\n  * Alternatively, calculate average velocity for each interval $v_i = \\frac{\\Delta y_i}{\\Delta t_i}$ and plot $v$ vs $t$; the slope of the best-fit line is $g_{\\text{exp}}$.\n* **Systematic vs. Random Error Analysis**:\n  * **Air Resistance**: Systematically exerts an upward drag force opposing motion, reducing net downward acceleration ($a = g - F_{\\text{drag}}/m$), yielding $g_{\\text{exp}} < 9.8\\text{ m/s}^2$.\n  * **Tilted Drop**: If the picket fence falls at an angle, the effective band spacing increases ($d' = d/\\cos\\theta$), introducing systematic timing distortions.\n  * **Human Reaction Time**: Completely eliminated by using automated electronic photogates rather than manual stopwatches."
      },
      {
        "heading": "7. Projectile Motion from Elevated Cliffs & Asymmetric Landing Geometry (CED 1.3)",
        "content": "Rigorous mathematical derivations for projectiles launched from height $h$ above level ground:\n\n* **General Trajectory Equations**:\n  * Horizontal Position: $x(t) = (v_0 \\cos\\theta) t$\n  * Vertical Position: $y(t) = h + (v_0 \\sin\\theta) t - \\frac{1}{2}gt^2$\n* **Derivation of Total Flight Time**:\n  * Setting $y(t) = 0$ yields the quadratic: $\\frac{1}{2}gt^2 - (v_0 \\sin\\theta)t - h = 0$.\n  * Applying the quadratic formula:\n    $$t_{\\text{flight}} = \\frac{v_0 \\sin\\theta + \\sqrt{v_0^2 \\sin^2\\theta + 2gh}}{g}$$\n  * Notice that as $h \\rightarrow 0$, this cleanly collapses to the standard flat-ground formula $t = \\frac{2v_0 \\sin\\theta}{g}$.\n* **Impact Velocity & Angle of Impact**:\n  * Final horizontal velocity: $v_{fx} = v_0 \\cos\\theta$ (invariant).\n  * Final vertical velocity: $v_{fy} = -\\sqrt{v_0^2 \\sin^2\\theta + 2gh}$ (downward).\n  * Impact speed: $v_f = \\sqrt{v_{fx}^2 + v_{fy}^2} = \\sqrt{v_0^2 + 2gh}$ (identical to Conservation of Energy prediction!).\n  * Impact angle below horizontal: $\\phi = \\arctan\\left(\\frac{|v_{fy}|}{v_{fx}}\\right)$."
      }
    ],
    "workedExamples": [
      {
        "title": "Horizontally Launched Projectile from a Cliff",
        "topicRef": "CED 1.3 2D Kinematics",
        "question": "A ball is launched horizontally at $v_0 = 15\\text{ m/s}$ from the edge of a cliff of height $h = 45\\text{ m}$. Assuming $g = 9.8\\text{ m/s}^2$ and negligible air drag, calculate (a) the time the ball takes to strike the ground, and (b) the horizontal distance $D$ traveled.",
        "solutionSteps": [
          "Step 1: Write vertical kinematic equation with $v_{0y} = 0$: $\\Delta y = -h = -45\\text{ m}$.",
          "Step 2: Use $\\Delta y = v_{0y}t - \\frac{1}{2}gt^2 \\implies -45 = 0 - \\frac{1}{2}(9.8)t^2 = -4.9 t^2$.",
          "Step 3: Solve for $t$: $t^2 = \\frac{45}{4.9} \\approx 9.184 \\implies t = 3.03\\text{ s}$.",
          "Step 4: Calculate horizontal distance using constant velocity: $D = v_{0x} t = (15\\text{ m/s})(3.03\\text{ s}) = 45.45\\text{ m}$."
        ],
        "finalAnswer": "Time $t \\approx 3.03\\text{ s}$; Horizontal distance $D \\approx 45.5\\text{ m}$.",
        "apScoringTip": "AP graders award 1 point for setting up vertical free-fall independent of horizontal velocity, and 1 point for linking the calculated time into $x = v_x t$. Never assume launch angle is $45^\\circ$ when launched horizontally!"
      }
    ],
    "diagrams": [
      {
        "id": "phys_proj_trajectory",
        "title": "Parabolic Projectile Trajectory & Velocity Vectors",
        "subtitle": "Constant Horizontal Velocity vs. Accelerating Vertical Vector",
        "type": "projectile_motion",
        "description": "Shows symmetric parabolic path with constant $v_x$ arrows and changing $v_y$ arrows that decrease to zero at peak and point downwards thereafter.",
        "takeaway": "At the apex of flight, vertical velocity is zero, but acceleration is STILL $9.8\\text{ m/s}^2$ downward! It is never zero."
      }
    ],
    "commonTraps": [
      "Thinking acceleration is zero at the peak of a projectile path. Gravity acts constantly downward throughout the entire trajectory ($a = -9.8\\text{ m/s}^2$).",
      "Confusing speed with velocity. Speed is scalar magnitude; velocity has direction. An object moving at constant speed along a curve is accelerating because velocity direction changes.",
      "Assuming that a heavier object falls faster in free fall. In the absence of air resistance, all masses experience identical gravitational acceleration $g$."
    ],
    "cramSheet": [
      "Slope of $x-t$ graph = velocity; slope of $v-t$ graph = acceleration.",
      "Area under $v-t$ graph = displacement; area under $a-t$ graph = $\\Delta v$.",
      "Horizontal acceleration in projectile motion is ALWAYS zero ($a_x = 0$).",
      "At apex of trajectory, $v_y = 0$, but $v_x = v_{0x}$ and $a_y = -9.8\\text{ m/s}^2$.",
      "Two balls released simultaneously—one dropped vertically and one projected horizontally—hit level ground at the EXACT same instant."
    ]
  },
  {
    "unitId": "u2",
    "unitNumber": 2,
    "title": "Force and Translational Dynamics",
    "examWeight": "18%–23% of AP Exam",
    "bigIdea": "Forces describe interactions between systems. An unbalanced external net force changes a system's momentum and accelerates mass.",
    "keyTheorems": [
      {
        "name": "Newton’s Second Law of Motion",
        "conditions": "Any inertial reference frame acting upon a system of mass $m$.",
        "conclusion": "Acceleration is directly proportional to net external force and inversely proportional to system mass: $\\vec{a} = \\frac{\\Sigma\\vec{F}}{m}$.",
        "apTip": "On Free-Body Diagrams (FBDs), draw ONLY forces acting ON the object from its surroundings. Never draw components, velocity arrows, or \"ma\" as a force!"
      },
      {
        "name": "Newton’s Third Law (Action-Reaction Pairs)",
        "conditions": "Two interacting objects $A$ and $B$.",
        "conclusion": "Force exerted by $A$ on $B$ is equal in magnitude and opposite in direction to force exerted by $B$ on $A$: $\\vec{F}_{A \\text{ on } B} = -\\vec{F}_{B \\text{ on } A}$.",
        "apTip": "Action-reaction forces NEVER act on the same object! Therefore, they can NEVER cancel each other out in a single object’s FBD."
      }
    ],
    "formulas": [
      {
        "name": "Net Force Vector Sum",
        "latex": "\\Sigma\\vec{F} = m\\vec{a}",
        "explanation": "Vector equation broken into $\\Sigma F_x = ma_x$ and $\\Sigma F_y = ma_y$."
      },
      {
        "name": "Gravitational Force Near Earth Surface",
        "latex": "F_g = mg",
        "explanation": "Weight of an object of mass $m$ in gravitational field $g$."
      },
      {
        "name": "Friction Force Model",
        "latex": "F_{f,\\text{static}} \\le \\mu_s F_N, \\quad F_{f,\\text{kinetic}} = \\mu_k F_N",
        "explanation": "Static friction adjusts up to maximum threshold; kinetic friction is constant during sliding."
      },
      {
        "name": "Hooke’s Law for Restoring Force",
        "latex": "F_s = -k \\Delta x",
        "explanation": "Spring restoring force is proportional and opposite to displacement from equilibrium."
      },
      {
        "name": "Newton’s Universal Law of Gravitation",
        "latex": "F_g = G\\frac{m_1 m_2}{r^2}",
        "explanation": "Mutual gravitational attraction between two point masses separated by distance $r$."
      }
    ],
    "sections": [
      {
        "heading": "1. Standard Inclined Plane Coordinate System",
        "content": "When analyzing an object of mass $m$ on an incline at angle $\\theta$:\n\n1. **Rotate Coordinates**: Align the $x$-axis parallel to the incline surface and $y$-axis perpendicular to the surface.\n2. **Decompose Gravity $F_g = mg$**:\n   - Perpendicular component: $F_{g,\\perp} = mg \\cos\\theta$.\n   - Parallel downhill component: $F_{g,\\parallel} = mg \\sin\\theta$.\n3. **Normal Force**: Since there is no acceleration perpendicular to the ramp ($a_y = 0$):\n   - $\\Sigma F_y = F_N - mg \\cos\\theta = 0 \\implies F_N = mg \\cos\\theta$.\n4. **Acceleration Down Incline (Frictionless)**:\n   - $\\Sigma F_x = mg \\sin\\theta = ma \\implies a = g \\sin\\theta$.\n5. **Acceleration with Friction**:\n   - $a = g(\\sin\\theta - \\mu_k \\cos\\theta)$."
      },
      {
        "heading": "2. Atwood Machines & System Acceleration Technique",
        "content": "For two masses $m_1$ and $m_2$ ($m_2 > m_1$) connected across a light frictionless pulley:\n\n- **Whole System Method**:\n  - Net driving force: $\\Sigma F_{\\text{external}} = (m_2 - m_1)g$.\n  - Total inertia: $m_{\\text{total}} = m_1 + m_2$.\n  - Acceleration: $a = \\frac{(m_2 - m_1)g}{m_1 + m_2}$.\n- **Tension Calculation (isolate $m_1$)**:\n  - $T - m_1 g = m_1 a \\implies T = m_1 (g + a) = \\frac{2 m_1 m_2 g}{m_1 + m_2}$."
      },
      {
        "heading": "3. Friction Types & Incline Normal Force Matrix",
        "content": "Understanding how static and kinetic friction behave under varying load conditions:\n\n| Regime | Governing Formula | Motion Condition | Direction of Force | Typical AP Question Context |\n| :--- | :--- | :--- | :--- | :--- |\n| **Static Friction ($F_{fs}$)** | $F_{fs} \\le \\mu_s F_N$ | No relative sliding ($v_{\\text{rel}} = 0$) | Opposes intended or impending slippage | Object resting on incline until critical angle $\\tan\\theta = \\mu_s$ |\n| **Max Static Friction ($F_{fs,\\max}$)** | $F_{fs,\\max} = \\mu_s F_N$ | On the verge of slipping | Opposes threshold shear | Minimum coefficient $\\mu_s$ required to prevent sliding |\n| **Kinetic Friction ($F_{fk}$)** | $F_{fk} = \\mu_k F_N$ | Active sliding ($v_{\\text{rel}} \\ne 0$) | Exactly opposite relative velocity vector | Sled sliding across rough patch, $W_f = -F_{fk}d$ |\n| **Incline Normal ($F_N$)** | $F_N = mg\\cos\\theta$ | Incline angle $\\theta$ | Perpendicular away from surface | As incline angle $\\theta$ increases, $F_N$ decreases! |\n| **Elevator Apparent Weight** | $F_N = m(g \\pm a)$ | Accelerating elevator | Perpendicular upward from scale | Accelerating upward: $F_N = m(g+a)$; Accelerating downward: $F_N = m(g-a)$ |"
      },
      {
        "heading": "4. Inclined Planes & Tilted Coordinate Systems (CED 2.5)",
        "content": "When analyzing an object of mass $m$ on a ramp inclined at angle $\\theta$:\n- **Tilted Axis Convention:** Choose the $x$-axis parallel to the incline surface and the $y$-axis perpendicular to it.\n- **Gravity Components:**\n  - Parallel component pulling down the ramp: $F_{g\\parallel} = mg \\sin\\theta$\n  - Perpendicular component pressing into the ramp: $F_{g\\perp} = mg \\cos\\theta$\n- **Normal Force:** Because there is no motion perpendicular to the ramp:\n  $$\\Sigma F_y = 0 \\implies F_N = mg \\cos\\theta$$\n- **Friction & Critical Angle:**\n  - Maximum static friction: $f_{s,\\max} = \\mu_s F_N = \\mu_s mg \\cos\\theta$.\n  - Slipping occurs when $mg \\sin\\theta > \\mu_s mg \\cos\\theta \\implies \\mathbf{\\tan\\theta > \\mu_s}$.\n  - Acceleration down a rough ramp: $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$."
      },
      {
        "heading": "5. Coupled-Mass Systems & Atwood Machines (CED 2.6–2.7)",
        "content": "Coupled multi-body systems linked by light cords over frictionless pulleys:\n- **System Approach vs. Individual FBD Approach:**\n  - **System Approach:** Treat all connected masses as a single combined system of mass $M_{\\text{total}} = m_1 + m_2$. Internal cord tension forces cancel out!\n    $$a = \\frac{\\Sigma F_{\\text{external, driving}} - \\Sigma F_{\\text{external, opposing}}}{M_{\\text{total}}}$$\n  - **Standard Atwood Machine (two hanging masses $m_2 > m_1$):**\n    $$a = \\frac{(m_2 - m_1)g}{m_1 + m_2}, \\quad T = \\frac{2m_1 m_2}{m_1 + m_2}g$$\n  - **Modified Atwood (Table system: $m_1$ on frictionless table, $m_2$ hanging):**\n    $$a = \\frac{m_2 g}{m_1 + m_2}, \\quad T = m_1 a = \\frac{m_1 m_2}{m_1 + m_2}g$$\n- **Apparent Weight in Accelerating Elevators:**\n  - Upward acceleration ($+a$): $F_N = m(g + a)$ (scale reads heavier).\n  - Downward acceleration ($-a$): $F_N = m(g - a)$ (scale reads lighter).\n  - Free fall ($a = -g$): $F_N = 0$ (apparent weightlessness)."
      },
      {
        "heading": "6. Friction Mechanics: Static vs. Kinetic (CED 2.8)",
        "content": "Friction arises from electrostatic attractions between microscopic surface contact points:\n- **Static Friction ($f_s$):** A responsive, self-adjusting force:\n  $$0 \\le f_s \\le \\mu_s F_N$$\n  It equals applied pushing force exactly until the threshold $f_{s,\\max} = \\mu_s F_N$ is exceeded.\n- **Kinetic Friction ($f_k$):** Acts once relative sliding occurs:\n  $$f_k = \\mu_k F_N$$\n- **Key Realities Tested on AP Exam:**\n  - $\\mu_s > \\mu_k$ for almost all surface pairs; it takes more force to initiate motion than to sustain it.\n  - Friction is **independent of surface contact area** (a brick dragged on its wide face experiences the same friction as on its narrow face).\n  - Pushing an object downward at an angle increases $F_N = mg + F\\sin\\theta$, thereby increasing friction!"
      },
      {
        "heading": "7. Official AP Experimental Design Lab: Determining Coefficients of Friction (Skill 4.1)",
        "content": "Comprehensive laboratory investigation to measure $\\mu_s$ and $\\mu_k$:\n\n* **Method 1: Static Friction via Critical Incline Angle (Angle of Repose)**:\n  * Place a block of mass $m$ on an adjustable incline. Gradually elevate the ramp until the block just begins to slip at angle $\\theta_c$.\n  * At impending motion: $\\sum F_x = mg \\sin\\theta_c - f_{s,\\max} = 0 \\implies f_{s,\\max} = mg \\sin\\theta_c$.\n  * Perpendicular to ramp: $\\sum F_y = F_N - mg \\cos\\theta_c = 0 \\implies F_N = mg \\cos\\theta_c$.\n  * Coefficient of static friction:\n    $$\\mu_s = \\frac{f_{s,\\max}}{F_N} = \\frac{mg \\sin\\theta_c}{mg \\cos\\theta_c} = \\tan\\theta_c$$\n  * Notice that the block's mass $m$ cancels out completely!\n* **Method 2: Kinetic Friction via Dynamic Linearization on Flat Track**:\n  * Connect the block to a force sensor pulled horizontally at **constant velocity** ($a = 0$).\n  * The force sensor reading equals kinetic friction: $F_{\\text{pull}} = f_k = \\mu_k F_N$.\n  * Vary normal force by stacking calibrated masses on top of the block ($F_N = (m_{\\text{block}} + m_{\\text{added}})g$).\n  * Plot $F_{\\text{pull}}$ ($f_k$) on vertical axis vs $F_N$ on horizontal axis.\n  * The slope of the linear regression line directly represents $\\mu_k$. Any non-zero vertical intercept indicates uncalibrated force sensor offset."
      },
      {
        "heading": "8. Multi-Body Coupled Systems: Modified Atwood Machine with Incline & Friction (CED 2.4)",
        "content": "Derivation of coupled motion for mass $m_1$ on an incline connected via ideal massless string over frictionless pulley to hanging mass $m_2$:\n\n* **Free-Body Force Decompositions**:\n  * For $m_1$ on ramp inclined at angle $\\theta$ (assuming motion is accelerating up the ramp):\n    * Normal force: $F_N = m_1 g \\cos\\theta$\n    * Kinetic friction: $f_k = \\mu_k m_1 g \\cos\\theta$\n    * Parallel force equation: $T - m_1 g \\sin\\theta - \\mu_k m_1 g \\cos\\theta = m_1 a$\n  * For hanging mass $m_2$ accelerating downward:\n    * Vertical force equation: $m_2 g - T = m_2 a$\n* **Simultaneous System Solution**:\n  * Adding both equations eliminates the internal rope tension $T$:\n    $$m_2 g - m_1 g \\sin\\theta - \\mu_k m_1 g \\cos\\theta = (m_1 + m_2) a$$\n  * Solving for system acceleration:\n    $$a = \\frac{m_2 - m_1(\\sin\\theta + \\mu_k \\cos\\theta)}{m_1 + m_2} g$$\n  * Solving for string tension:\n    $$T = m_2(g - a) = \\frac{m_1 m_2 (1 + \\sin\\theta + \\mu_k \\cos\\theta)}{m_1 + m_2} g$$"
      }
    ],
    "workedExamples": [
      {
        "title": "Block on Incline with Kinetic Friction",
        "topicRef": "CED 2.5 Friction & Inclines",
        "question": "A $5.0\\text{ kg}$ crate slides down a $30^\\circ$ ramp with coefficient of kinetic friction $\\mu_k = 0.20$. Using $g = 9.8\\text{ m/s}^2$, find the acceleration of the crate.",
        "solutionSteps": [
          "Step 1: Calculate normal force: $F_N = mg \\cos\\theta = (5.0)(9.8)\\cos(30^\\circ) = 49(0.866) \\approx 42.44\\text{ N}$.",
          "Step 2: Calculate kinetic friction force directed uphill: $F_f = \\mu_k F_N = (0.20)(42.44) \\approx 8.49\\text{ N}$.",
          "Step 3: Calculate gravitational component downhill: $F_{g,\\parallel} = mg \\sin(30^\\circ) = (5.0)(9.8)(0.5) = 24.5\\text{ N}$.",
          "Step 4: Apply Newton 2nd Law parallel to ramp: $\\Sigma F_x = F_{g,\\parallel} - F_f = ma$.",
          "Step 5: $24.5 - 8.49 = 5.0 a \\implies 16.01 = 5.0 a \\implies a = 3.20\\text{ m/s}^2$."
        ],
        "finalAnswer": "Acceleration $a = 3.20\\text{ m/s}^2$ down the ramp.",
        "apScoringTip": "Always show $F_N = mg\\cos\\theta$ explicitly before inserting it into $F_f = \\mu_k F_N$. On AP FRQs, writing $F_N = mg$ automatically costs 1–2 rubric points."
      }
    ],
    "diagrams": [
      {
        "id": "phys_fbd_incline",
        "title": "Inclined Plane Free-Body Diagram (FBD)",
        "subtitle": "Perpendicular Normal Force vs. Downhill Component",
        "type": "free_body_diagram",
        "description": "Clean vector diagram illustrating normal force $F_N$ perpendicular to ramp, gravity pointing straight down toward Earth center, and friction opposing sliding motion.",
        "takeaway": "Never draw components ($mg\\sin\\theta$ or $mg\\cos\\theta$) on official AP FBD questions—draw ONLY raw $F_g$ straight down!"
      }
    ],
    "commonTraps": [
      "Assuming the normal force is always equal to $mg$. On an incline $F_N = mg\\cos\\theta$; in an accelerating elevator $F_N = m(g \\pm a)$; when pulled at an angle $F_N = mg - F\\sin\\theta$.",
      "Drawing centrifugal force on an FBD. Centrifugal force is a fictitious inertial sensation; the true force is inward centripetal force provided by tension, friction, or gravity.",
      "Treating static friction as a fixed number. $F_s = \\mu_s F_N$ is only the MAXIMUM threshold before slipping; actual static friction adjusts to exactly match applied force until that limit is reached."
    ],
    "cramSheet": [
      "Free-Body Diagrams: Draw only forces with tails starting on the object. Do NOT draw components or velocity vectors.",
      "Incline rules: $F_{g,\\parallel} = mg\\sin\\theta$, $F_{g,\\perp} = mg\\cos\\theta$.",
      "Apparent weight in elevator: Accelerating upward $\\implies F_N = m(g + a)$ (feels heavier); accelerating downward $\\implies F_N = m(g - a)$ (feels lighter).",
      "In uniform circular motion, net force $\\Sigma F = m v^2 / r$ points toward the center of the circle, perpendicular to velocity."
    ]
  },
  {
    "unitId": "u3",
    "unitNumber": 3,
    "title": "Work, Energy, and Power",
    "examWeight": "18%–23% of AP Exam",
    "bigIdea": "Energy cannot be created or destroyed, only transferred. Mechanical energy is conserved when net non-conservative work on the system is zero.",
    "keyTheorems": [
      {
        "name": "Work-Energy Theorem",
        "conditions": "Any system acted on by net external forces.",
        "conclusion": "The net external work done on a system equals the change in its kinetic energy: $W_{\\text{net}} = \\Delta K = K_f - K_i$.",
        "apTip": "Work is a scalar dot product: $W = F d \\cos\\theta$. If the force is perpendicular to displacement ($\\theta = 90^\\circ$), zero work is done (e.g. centripetal force doing zero work)."
      },
      {
        "name": "Conservation of Mechanical Energy",
        "conditions": "System containing no non-conservative external forces (e.g. friction or air resistance are absent or accounted for).",
        "conclusion": "$E_i = E_f \\implies K_i + U_{g,i} + U_{s,i} = K_f + U_{g,f} + U_{s,f}$.",
        "apTip": "Be crystal clear when defining the system. If Earth is NOT included in your system, gravitational potential energy does NOT exist; gravity must instead be treated as external work!"
      }
    ],
    "formulas": [
      {
        "name": "Work Done by Constant Force",
        "latex": "W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta",
        "explanation": "Scalar product of force and displacement where $\\theta$ is the angle between vectors."
      },
      {
        "name": "Translational Kinetic Energy",
        "latex": "K = \\frac{1}{2}mv^2",
        "explanation": "Energy of an object of mass $m$ moving at linear speed $v$."
      },
      {
        "name": "Gravitational Potential Energy (Uniform Field)",
        "latex": "U_g = mgh",
        "explanation": "Potential energy of mass $m$ at vertical height $h$ relative to chosen reference line."
      },
      {
        "name": "Elastic (Spring) Potential Energy",
        "latex": "U_s = \\frac{1}{2}k(\\Delta x)^2",
        "explanation": "Energy stored in an ideal spring of stiffness $k$ compressed/stretched by distance $\\Delta x$."
      },
      {
        "name": "Instantaneous and Average Power",
        "latex": "P = \\frac{\\Delta E}{\\Delta t} = \\frac{W}{\\Delta t} = \\vec{F} \\cdot \\vec{v}",
        "explanation": "Rate of energy transfer per unit time (measured in Watts: $1\\text{ W} = 1\\text{ J/s}$)."
      }
    ],
    "sections": [
      {
        "heading": "1. Force vs. Position Graphs & Hooke’s Law Area",
        "content": "Work is the area under a Force vs. Position ($F-x$) graph:\n\n$$W = \\int_{x_i}^{x_f} F(x) \\, dx$$\n\n- For a constant force: $W = F \\cdot \\Delta x$ (rectangle).\n- For a spring ($F = kx$): Area is a triangle:\n  $$\\text{Area} = \\frac{1}{2}(\\text{base})(\\text{height}) = \\frac{1}{2}(x)(kx) = \\frac{1}{2}kx^2 = U_s$$\n- If the curve drops below the $x$-axis, the area represents negative work (force opposes motion)."
      },
      {
        "heading": "2. Energy Bar Charts (LOL Diagrams)",
        "content": "On AP Physics 1 FRQs, students frequently must construct energy bar charts:\n- **Left \"L\"**: Initial mechanical energy distribution ($K_i, U_{g,i}, U_{s,i}$).\n- **Center \"O\"**: System boundary declaration. Any force crossing this circle does external work $W_{\\text{ext}}$ on the system.\n- **Right \"L\"**: Final mechanical energy distribution ($K_f, U_{g,f}, U_{s,f}$).\n- **Master Equation**: $E_i + W_{\\text{ext}} = E_f$."
      },
      {
        "heading": "3. Conservative vs. Non-Conservative Energy Matrix",
        "content": "Classification of forces and their impact on mechanical energy conservation:\n\n| Force Type | Work Formula | Path Dependent? | Mechanical Energy Conserved? | Potential Energy Associated |\n| :--- | :--- | :--- | :--- | :--- |\n| **Gravity ($F_g$)** | $W_g = -\\Delta U_g = -mg\\Delta y$ | **No** (Conservative) | **Yes** (within Earth-object system) | $U_g = mgh$ or $U_g = -G\\frac{m_1 m_2}{r}$ |\n| **Spring ($F_s$)** | $W_s = -\\Delta U_s = -\\frac{1}{2}k\\Delta x^2$ | **No** (Conservative) | **Yes** (within spring-mass system) | $U_s = \\frac{1}{2}k(\\Delta x)^2$ |\n| **Kinetic Friction ($F_k$)** | $W_f = -F_k \\cdot d$ | **Yes** (Path dependent) | **No** (Dissipates to thermal internal energy $\\Delta E_{\\text{int}}$) | None (Dissipative) |\n| **Air Resistance / Drag** | $W_{\\text{drag}} = -\\int F_d \\, dx$ | **Yes** (Path dependent) | **No** (Dissipates to thermal internal energy) | None |\n| **Applied External Tension / Push** | $W_{\\text{ext}} = F d\\cos\\theta$ | **Yes** | **No** (Transfers energy in or out: $\\Delta E_{\\text{sys}} = W_{\\text{ext}}$) | None |"
      },
      {
        "heading": "4. Variable Forces & Force-vs-Position Curves (CED 3.2)",
        "content": "Work performed by a variable 1D force is given by integration:\n$$W = \\int_{x_i}^{x_f} F(x) \\, dx = \\text{Area under } F(x) \\text{ vs. } x \\text{ curve}$$\n- **Hooke's Law Spring Work:**\n  - Restoring force: $F_s = -kx$.\n  - External work done to stretch or compress a spring from $0$ to $x$:\n    $$W_{\\text{ext}} = \\int_0^x kx \\, dx = \\frac{1}{2}kx^2 = U_s$$\n- **Graphical Application:**\n  - If force varies linearly from $0$ to $F_{\\max}$ over distance $d$, work is the triangular area: $W = \\frac{1}{2} F_{\\max} d$.\n  - Areas above the position axis represent positive work ($Delta K > 0$); areas below represent negative work ($Delta K < 0$)."
      },
      {
        "heading": "5. Energy Bar Charts (LOL Diagrams) & System Choice (CED 3.5–3.7)",
        "content": "Conservation of energy depends fundamentally on how system boundaries are chosen:\n- **System Boundary Rules:**\n  - **System = Block + Earth + Spring:** Gravitational and elastic interactions are **internal potential energies** ($U_g, U_s$). Total mechanical energy is conserved if there is no friction:\n    $$K_i + U_{gi} + U_{si} = K_f + U_{gf} + U_{sf}$$\n  - **System = Block Alone:** Gravity and springs are **external forces** that do work on the block:\n    $$W_{\\text{ext}} = W_{\\text{gravity}} + W_{\\text{spring}} = \\Delta K$$\n- **Non-Conservative Forces (Friction):**\n  - Friction does negative work that converts mechanical energy into internal thermal energy:\n    $$E_{\\text{mech}, i} + W_{nc} = E_{\\text{mech}, f} \\implies E_{\\text{mech}, i} - f_k d = E_{\\text{mech}, f}$$\n- **LOL Diagrams:** Initial energy bar chart (L), System circle with external work entering/leaving (O), Final energy bar chart (L). Height of bars must balance!"
      },
      {
        "heading": "6. Mechanical Power & Velocity Vectors (CED 3.8)",
        "content": "Power measures the time rate at which energy is transferred or work is done:\n$$P_{\\text{avg}} = \\frac{\\Delta W}{\\Delta t} = \\frac{\\Delta E}{\\Delta t}$$\n$$P_{\\text{inst}} = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v} = F v \\cos\\theta$$\n- **Constant Velocity Vehicle:**\n  - A car of mass $m$ driving up an incline of angle $\\theta$ at constant speed $v$ against air drag $F_{\\text{drag}}$:\n  - Net force is zero, so the engine's driving force is $F_{\\text{drive}} = mg\\sin\\theta + F_{\\text{drag}}$.\n  - The power output required is $P = F_{\\text{drive}} v = (mg\\sin\\theta + F_{\\text{drag}})v$."
      },
      {
        "heading": "7. Official AP Experimental Design Lab: Conservation of Mechanical Energy on Curved Tracks (Skill 4.2)",
        "content": "Testing energy conservation and thermal loss on curved low-friction tracks:\n\n* **Experimental Setup**:\n  * Curved ramp leading to a flat horizontal runout; steel marble of mass $m$; photogate at the bottom; meter stick.\n* **Procedure & Measurements**:\n  1. Measure vertical release height $h$ from the center of the marble to the horizontal track surface.\n  2. Release marble from rest ($v_0 = 0$). Initial mechanical energy: $E_i = U_g = mgh$.\n  3. Photogate at horizontal track measures the time interval $\\Delta t$ for marble diameter $d$ to pass through: $v_f = d/\\Delta t$.\n  4. Final translational kinetic energy: $K_f = \\frac{1}{2}mv_f^2$.\n* **Analysis & Energy Dissipation**:\n  * If the track were purely conservative and the ball slid without rolling: $mgh = \\frac{1}{2}mv^2 \\implies v_{\\text{ideal}} = \\sqrt{2gh}$.\n  * In reality, $v_{\\text{measured}} < v_{\\text{ideal}}$ due to:\n    1. **Rotational Kinetic Energy**: A rolling marble converts part of $U_g$ into rotational energy $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2 = \\frac{1}{5}mv^2$.\n    2. **Thermal Work**: Non-conservative friction and air resistance convert energy into heat: $W_{nc} = \\Delta E_{\\text{mech}} = E_f - E_i < 0$."
      },
      {
        "heading": "8. Non-Linear Spring Dynamics & Potential Energy Integrals (CED 3.3)",
        "content": "Calculating work and potential energy for variable non-Hookean restoring forces:\n\n* **Work as a Definite Integral**:\n  $$W = \\int_{x_i}^{x_f} F_x(x) \\, dx$$\n  * For a conservative force, potential energy is the negative work done by that force:\n    $$\\Delta U = -W = -\\int_{x_i}^{x_f} F(x) \\, dx \\implies F(x) = -\\frac{dU}{dx}$$\n* **Cubic Restoring Force Case Study**:\n  * Suppose an experimental non-linear spring exerts force $F(x) = -kx - \\beta x^3$.\n  * Potential energy function (with $U(0) = 0$):\n    $$U(x) = -\\int_0^x (-ks - \\beta s^3) \\, ds = \\frac{1}{2}kx^2 + \\frac{1}{4}\\beta x^4$$\n  * Equilibrium points occur where force is zero: $dU/dx = 0 \\implies x = 0$.\n  * **Stability Criterion**:\n    * $\\frac{d^2U}{dx^2} > 0 \\implies$ Local Minimum $\\implies$ **Stable Equilibrium** (oscillations occur).\n    * $\\frac{d^2U}{dx^2} < 0 \\implies$ Local Maximum $\\implies$ **Unstable Equilibrium**."
      }
    ],
    "workedExamples": [
      {
        "title": "Spring-Loaded Launcher on Frictionless Track",
        "topicRef": "CED 3.4 Conservation of Energy",
        "question": "A $0.20\\text{ kg}$ cart is pressed against a horizontal spring ($k = 500\\text{ N/m}$) compressing it by $0.10\\text{ m}$. The cart is released from rest and travels up a frictionless ramp inclined at $30^\\circ$. What maximum vertical height $h$ does the cart reach before stopping?",
        "solutionSteps": [
          "Step 1: Define system: Cart + Spring + Earth (closed system, no friction $\\implies E_i = E_f$).",
          "Step 2: Initial energy is purely elastic: $E_i = U_{s,i} = \\frac{1}{2}k(\\Delta x)^2 = \\frac{1}{2}(500)(0.10)^2 = 2.5\\text{ J}$.",
          "Step 3: At peak height, cart stops momentarily ($K_f = 0$) and spring is fully uncompressed: $E_f = U_{g,f} = mgh$.",
          "Step 4: Equate energies: $2.5 = mgh = (0.20)(9.8)h = 1.96 h$.",
          "Step 5: Solve for $h$: $h = \\frac{2.5}{1.96} \\approx 1.28\\text{ m}$."
        ],
        "finalAnswer": "Maximum vertical height $h \\approx 1.28\\text{ m}$.",
        "apScoringTip": "Notice the incline angle $30^\\circ$ was not needed to find vertical height! Gravitational potential energy depends ONLY on vertical elevation $h$, not the path taken."
      }
    ],
    "diagrams": [
      {
        "id": "phys_energy_rollercoaster",
        "title": "Mechanical Energy Conservation along Curved Path",
        "subtitle": "Exchange between Kinetic and Gravitational Potential Energy",
        "type": "energy_conservation",
        "description": "Illustrates conservation of energy where total $E = K + U_g$ remains a constant horizontal line as $K$ and $U_g$ oscillate inversely.",
        "takeaway": "In the absence of friction, speed at the bottom depends strictly on vertical drop $\\Delta h = h_i - h_f$, regardless of slope shape ($v = \\sqrt{2g\\Delta h}$)."
      }
    ],
    "commonTraps": [
      "Using kinematics equations on a curved track. Kinematic formulas require CONSTANT acceleration; on curved tracks or ramps with varying slopes, energy conservation MUST be used instead.",
      "Forgetting that work requires displacement in the direction of force. Holding a $100\\text{ kg}$ barbell motionless takes effort, but physics work is ZERO ($d = 0$).",
      "Double counting energy. If you include $U_g$ in the energy equation, do NOT also calculate work done by gravity; $U_g$ IS the internal storage of gravitational work."
    ],
    "cramSheet": [
      "Total Mechanical Energy: $E = K + U_g + U_s$. Conserved when no non-conservative forces do work.",
      "Speed at bottom of frictionless drop: $v = \\sqrt{2gh}$ regardless of object mass.",
      "Area under Force vs. Position ($F-x$) graph = Work done.",
      "Power: $P = W/t = F v$ (Watts). 1 horsepower = 746 W.",
      "Friction always does negative work on a sliding object, converting mechanical energy into thermal energy: $W_f = -F_f d$."
    ]
  },
  {
    "unitId": "u4",
    "unitNumber": 4,
    "title": "Linear Momentum and Impulse",
    "examWeight": "10%–15% of AP Exam",
    "bigIdea": "Linear momentum is a vector quantity that is conserved in all isolated collisions and explosions. Impulse is the mechanism of momentum transfer.",
    "keyTheorems": [
      {
        "name": "Law of Conservation of Linear Momentum",
        "conditions": "Any closed system where net external force is zero ($\\Sigma\\vec{F}_{\\text{ext}} = 0$).",
        "conclusion": "Total initial momentum equals total final momentum: $\\Sigma\\vec{p}_i = \\Sigma\\vec{p}_f$.",
        "apTip": "Momentum is ALWAYS conserved in collisions, whether the collision is elastic, inelastic, or completely inelastic!"
      },
      {
        "name": "Impulse-Momentum Theorem",
        "conditions": "An external force $\\vec{F}(t)$ acting over a time interval $\\Delta t$.",
        "conclusion": "Impulse equals change in momentum: $\\vec{J} = \\int \\vec{F}\\,dt = \\vec{F}_{\\text{avg}}\\Delta t = \\Delta\\vec{p} = m\\vec{v}_f - m\\vec{v}_i$.",
        "apTip": "Impulse is the area under a Force vs. Time ($F-t$) curve. Increasing collision time $\\Delta t$ (e.g. airbags, crumple zones) reduces peak impact force for the same $\\Delta p$."
      }
    ],
    "formulas": [
      {
        "name": "Linear Momentum Vector",
        "latex": "\\vec{p} = m\\vec{v}",
        "explanation": "Product of mass and velocity vector (units: $\\text{kg}\\cdot\\text{m/s}$ or $\\text{N}\\cdot\\text{s}$)."
      },
      {
        "name": "Impulse Formula",
        "latex": "\\vec{J} = \\vec{F}_{\\text{avg}}\\Delta t = \\Delta\\vec{p}",
        "explanation": "Change in momentum produced by average force applied across time $\\Delta t$."
      },
      {
        "name": "Completely Inelastic Collision",
        "latex": "m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f",
        "explanation": "Momentum conservation when two objects stick together after collision."
      },
      {
        "name": "Center of Mass Velocity",
        "latex": "v_{\\text{cm}} = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}",
        "explanation": "Velocity of the system center of mass remains completely unaffected by internal collisions."
      }
    ],
    "sections": [
      {
        "heading": "1. Collision Classification Table",
        "content": "Collision types on the AP exam are classified strictly by kinetic energy conservation:\n\n| Collision Type | Momentum Conserved? | Kinetic Energy Conserved? | Defining Characteristic |\n| :--- | :--- | :--- | :--- |\n| **Elastic** | YES (Always) | **YES** ($K_i = K_f$) | Objects bounce apart with no deformation or heat generation |\n| **Inelastic** | YES (Always) | **NO** ($K_f < K_i$) | Objects separate, but energy is lost to heat, sound, or deformation |\n| **Completely Inelastic** | YES (Always) | **NO** (Max $K$ loss) | Objects stick together and move with identical final velocity $v_f$ |\n| **Explosion / Separation** | YES (Always) | **NO** ($K_f > K_i$) | Internal potential energy released; objects push apart |"
      },
      {
        "heading": "2. Force vs. Time Curves & Impulse Delivery (CED 4.2)",
        "content": "Impulse $\\vec{J}$ represents the change in linear momentum produced by an applied force over time:\n\n$$\\vec{J} = \\Delta\\vec{p} = \\vec{F}_{\\text{avg}} \\Delta t = \\int_{t_i}^{t_f} \\vec{F}(t) \\, dt$$\n\n* **Graphical Area Rule**: On a Force vs. Time ($F-t$) graph, the **area under the curve** represents impulse ($J = \\Delta p$).\n* **Automotive Safety Application**: Crumple zones, airbags, and helmets do NOT decrease the required change in momentum ($\\Delta p$ is fixed by initial velocity). Instead, they **increase the collision duration** ($\\Delta t$), which dramatically reduces the **peak impact force** ($F_{\\text{avg}} = \\Delta p / \\Delta t$).\n* **Bouncing vs. Sticking**: Bouncing delivers roughly **twice the impulse** of sticking because $\\Delta v = v_f - (-v_i) = 2v$, requiring twice the force from the colliding surface!"
      },
      {
        "heading": "3. Center of Mass Velocity & 2D Vector Collisions (CED 4.3)",
        "content": "In any closed, isolated system with zero net external force:\n\n* **Center of Mass Velocity Invariance**:\n  $$v_{\\text{cm}} = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$\n  Because net external force is zero ($\\Sigma F_{\\text{ext}} = 0$), the center of mass of the system **continues moving at constant velocity** before, during, and after any collision or explosion!\n* **2D Vector Collisions**: Momentum is independently conserved along perpendicular axes:\n  $$\\Sigma p_{xi} = \\Sigma p_{xf} \\quad \\text{and} \\quad \\Sigma p_{yi} = \\Sigma p_{yf}$$\n  Always resolve initial and final velocity vectors into $v_x = v \\cos\\theta$ and $v_y = v \\sin\\theta$ before applying conservation equations."
      },
      {
        "heading": "4. Force vs. Time Curves & Impact Cushioning (CED 4.2)",
        "content": "Impulse is the integral of net force over the duration of interaction:\n$$\\vec{J} = \\int_{t_i}^{t_f} \\vec{F}_{\\text{net}} \\, dt = \\vec{F}_{\\text{avg}} \\Delta t = \\Delta \\vec{p}$$\n- **Area Under $F-t$ Curve:** The geometric area between the curve and the time axis equals net impulse $\\vec{J}$ and change in linear momentum $\\Delta \\vec{p}$.\n- **Safety Applications (Airbags & Crumple Zones):**\n  - Stopping a vehicle requires a fixed change in momentum $\\Delta p = m(0 - v_0)$.\n  - By increasing the collision contact time $\\Delta t$ via an airbag or crumple zone, the average impact force experienced by the occupant is reduced:\n    $$F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t} \\quad (\\text{as } \\Delta t \\uparrow, \\; F_{\\text{avg}} \\downarrow)$$\n- **Bouncing vs. Sticking:** Bouncing produces $\\Delta p = m(-v_f - v_0) = -2mv$ (twice the impulse of catching/sticking $\\Delta p = -mv$), exerting double the average force!"
      },
      {
        "heading": "5. The Ballistic Pendulum & Multi-Stage Collision Analysis (CED 4.3)",
        "content": "A projectile of mass $m$ fired at speed $v_0$ into a suspended wooden block of mass $M$:\n- **Stage 1: Inelastic Collision (Duration $\\Delta t \\approx 0$):**\n  - Linear momentum is conserved horizontally during the brief impact:\n    $$m v_0 = (m + M) V_{\\text{combined}} \\implies V_{\\text{combined}} = \\frac{m}{m + M} v_0$$\n  - Mechanical energy is **NOT conserved** (significant loss as heat and sound).\n- **Stage 2: Smooth Swing to Maximum Height $h$:**\n  - No non-conservative forces act after collision; mechanical energy is conserved:\n    $$\\frac{1}{2}(m + M) V_{\\text{combined}}^2 = (m + M)gh \\implies V_{\\text{combined}} = \\sqrt{2gh}$$\n- **Muzzle Velocity Formula:**\n  $$v_0 = \\left(\\frac{m + M}{m}\\right) \\sqrt{2gh}$$"
      },
      {
        "heading": "6. Center of Mass Dynamics in Isolated Systems (CED 4.4)",
        "content": "The center of mass coordinates for a system of discrete particles:\n$$x_{\\text{cm}} = \\frac{\\sum m_i x_i}{\\sum m_i}, \\quad \\vec{v}_{\\text{cm}} = \\frac{\\sum m_i \\vec{v}_i}{\\sum m_i} = \\frac{\\vec{p}_{\\text{total}}}{M_{\\text{total}}}$$\n- **Newton's Second Law for a System:**\n  $$\\Sigma \\vec{F}_{\\text{ext}} = M_{\\text{total}} \\vec{a}_{\\text{cm}}$$\n- **Isolated System Principle:**\n  - If the net external force on a system is zero ($\\Sigma \\vec{F}_{\\text{ext}} = 0$), then $\\vec{a}_{\\text{cm}} = 0$.\n  - Therefore, the **velocity of the center of mass $\\vec{v}_{\\text{cm}}$ is strictly constant**, before, during, and after any collision, explosion, or internal reorganization!"
      },
      {
        "heading": "7. Official AP Experimental Design Lab: 2D Collisions on an Air Table (Skill 4.1)",
        "content": "Verifying conservation of linear momentum in two dimensions:\n\n* **Setup & Instrumentation**:\n  * Frictionless air puck table; two pucks with masses $m_1$ and $m_2$; overhead high-speed camera or strobe spark timer.\n* **Vector Analysis Procedures**:\n  * Align Cartesian coordinates such that incident puck $m_1$ travels strictly along $+x$ axis with initial velocity $\\vec{v}_{1i} = \\langle v_{1i}, 0 \\rangle$. Target puck $m_2$ is initially stationary.\n  * After collision, puck $1$ scatters at angle $\\theta_1$ above $x$-axis; puck $2$ scatters at angle $\\theta_2$ below $x$-axis.\n  * Conservation of $x$-momentum:\n    $$m_1 v_{1i} = m_1 v_{1f} \\cos\\theta_1 + m_2 v_{2f} \\cos\\theta_2$$\n  * Conservation of $y$-momentum:\n    $$0 = m_1 v_{1f} \\sin\\theta_1 - m_2 v_{2f} \\sin\\theta_2$$\n* **Kinetic Energy Classification**:\n  * Calculate initial kinetic energy: $K_i = \\frac{1}{2}m_1 v_{1i}^2$.\n  * Calculate final kinetic energy: $K_f = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$.\n  * Percentage kinetic energy loss: $\\%\\Delta K = \\frac{K_i - K_f}{K_i} \\times 100\\%$.\n  * If $\\%\\Delta K = 0$, collision is perfectly elastic; if $\\%\\Delta K > 0$, collision is inelastic."
      },
      {
        "heading": "8. The Ballistic Pendulum Multi-Stage Mechanics (CED 4.3)",
        "content": "The quintessential AP Physics FRQ problem combining momentum and energy conservation:\n\n* **Stage 1: High-Speed Collision ($t = 0$ to $t = \\Delta t_{\\text{collision}}$)**:\n  * Projectile of mass $m$ moving horizontally at unknown speed $v_0$ embeds into a stationary wooden pendulum block of mass $M$.\n  * During the collision, external forces (gravity, string tension) are negligible compared to enormous internal impact forces.\n  * **Mechanical energy is NOT conserved** (vast thermal/acoustic dissipation).\n  * **Momentum IS conserved**:\n    $$m v_0 = (m + M) V_{\\text{combo}} \\implies V_{\\text{combo}} = \\frac{m}{m + M} v_0$$\n* **Stage 2: Conservative Pendulum Swing ($t = \\Delta t$ to $t = t_{\\text{peak}}$)**:\n  * The combined block and projectile swing upward to maximum vertical height $h$.\n  * Tension does zero work ($T \\perp \\vec{v}$). Air resistance is negligible.\n  * **Mechanical energy IS conserved**:\n    $$\\frac{1}{2}(m + M) V_{\\text{combo}}^2 = (m + M)gh \\implies V_{\\text{combo}} = \\sqrt{2gh}$$\n* **Complete Synthesis (Muzzle Velocity Formula)**:\n  $$\\frac{m}{m + M} v_0 = \\sqrt{2gh} \\implies v_0 = \\left(\\frac{m + M}{m}\\right) \\sqrt{2gh}$$"
      }
    ],
    "workedExamples": [
      {
        "title": "Ballistic Pendulum Collision",
        "topicRef": "CED 4.3 Inelastic Collisions & Energy",
        "question": "A bullet of mass $m = 0.020\\text{ kg}$ moving horizontally at speed $v_0$ strikes and embeds itself inside a wooden block of mass $M = 1.98\\text{ kg}$ suspended as a pendulum. The block-bullet system swings upward to a height $h = 0.20\\text{ m}$. Find the initial speed $v_0$ of the bullet.",
        "solutionSteps": [
          "Step 1: Break into two distinct stages: (1) Inelastic collision (momentum conserved), (2) Pendulum swing (mechanical energy conserved).",
          "Step 2: Stage 2 - Find system speed $v_f$ right after impact using energy: $\\frac{1}{2}(m+M)v_f^2 = (m+M)gh \\implies v_f = \\sqrt{2gh} = \\sqrt{2(9.8)(0.20)} = 1.98\\text{ m/s}$.",
          "Step 3: Stage 1 - Apply momentum conservation during collision: $m v_0 = (m + M)v_f$.",
          "Step 4: Solve for $v_0$: $(0.020) v_0 = (0.020 + 1.98)(1.98) = (2.00)(1.98) = 3.96$.",
          "Step 5: $v_0 = \\frac{3.96}{0.020} = 198\\text{ m/s}$."
        ],
        "finalAnswer": "Initial bullet speed $v_0 = 198\\text{ m/s}$.",
        "apScoringTip": "DO NOT try to equate $\\frac{1}{2}m v_0^2$ to $(m+M)gh$! Mechanical energy is NOT conserved during an inelastic bullet impact; massive kinetic energy is converted to thermal energy."
      }
    ],
    "diagrams": [
      {
        "id": "phys_impulse_curve",
        "title": "Force vs. Time Graph & Impulse Integration",
        "subtitle": "Area Under Curve Equals Change in Momentum",
        "type": "impulse_curve",
        "description": "Illustrates bell-shaped impact curve where area under $F-t$ curve equals impulse $J = \\Delta p$.",
        "takeaway": "Extending impact duration $\\Delta t$ lowers peak force $F_{\\max}$ while keeping total area $\\Delta p$ identical."
      }
    ],
    "commonTraps": [
      "Assuming kinetic energy is conserved in all collisions. Only elastic collisions conserve $K$; all other real collisions lose mechanical energy.",
      "Treating momentum as a scalar. If an object bounces backwards, its final momentum is NEGATIVE: $\\Delta p = m(-v) - m(v) = -2mv$, which is double the momentum change of an object that simply stops!",
      "Believing the center of mass accelerates during internal explosions. If net external force is zero, $a_{\\text{cm}} = 0$ always."
    ],
    "cramSheet": [
      "Momentum is a vector: $\\vec{p} = m\\vec{v}$. Always assign $+$ and $-$ directions before solving.",
      "Impulse $\\vec{J} = \\vec{F}\\Delta t = \\Delta\\vec{p} = m\\vec{v}_f - m\\vec{v}_i$. Area under $F-t$ graph.",
      "Bouncing produces greater impulse than sticking because $\\Delta v$ is larger ($v - (-v) = 2v$).",
      "In an isolated system, the center of mass moves at constant velocity regardless of internal collisions."
    ]
  },
  {
    "unitId": "u5",
    "unitNumber": 5,
    "title": "Torque and Rotational Dynamics",
    "examWeight": "10%–15% of AP Exam",
    "bigIdea": "Torque is the rotational analogue of force, causing angular acceleration inversely proportional to rotational inertia (moment of inertia).",
    "keyTheorems": [
      {
        "name": "Rotational Second Law of Motion",
        "conditions": "Rigid body rotating about a fixed axis of rotation.",
        "conclusion": "Angular acceleration is proportional to net external torque and inversely proportional to moment of inertia: $\\alpha = \\frac{\\Sigma\\tau}{I}$.",
        "apTip": "Moment of inertia $I = \\Sigma m r^2$ depends not just on total mass, but on HOW FAR mass is distributed from the axis. Mass located farther from the pivot increases $I$ quadratically!"
      },
      {
        "name": "Static Equilibrium Conditions",
        "conditions": "Any rigid body at complete rest without translational or rotational motion.",
        "conclusion": "Two simultaneous vector conditions must be satisfied: $\\Sigma\\vec{F} = 0$ (translational balance) and $\\Sigma\\vec{\\tau} = 0$ (rotational balance about ANY chosen pivot point).",
        "apTip": "Always choose the pivot point at the location of an unknown or unasked force (e.g. hinge pin) to produce zero torque ($r=0$), eliminating it from the equation!"
      }
    ],
    "formulas": [
      {
        "name": "Torque Formula",
        "latex": "\\tau = r F \\sin\\theta = r_\\perp F",
        "explanation": "Magnitude of torque produced by force $F$ applied at distance $r$ from the pivot with angle $\theta$ between the position and force vectors."
      },
      {
        "name": "Rotational Newton 2nd Law",
        "latex": "\\Sigma\\tau = I\\alpha",
        "explanation": "Net external torque equals rotational inertia multiplied by angular acceleration."
      },
      {
        "name": "Linear to Angular Bridge Relations",
        "latex": "s = r\\theta, \\quad v = r\\omega, \\quad a_t = r\\alpha",
        "explanation": "Tangential displacement, velocity, and tangential acceleration as functions of radius and angular quantities."
      }
    ],
    "sections": [
      {
        "heading": "1. Linear vs. Rotational Quantity Equivalencies",
        "content": "Rotational dynamics mirrors linear dynamics 1-to-1 through these exact analogies:\n\n| Linear Concept | Linear Symbol | Rotational Analogue | Rotational Symbol | Bridging Formula |\n| :--- | :--- | :--- | :--- | :--- |\n| **Displacement** | $x$ or $s$ | **Angular Displacement** | $\\theta$ | $s = r\\theta$ |\n| **Velocity** | $v$ | **Angular Velocity** | $\\omega$ | $v = r\\omega$ |\n| **Acceleration** | $a$ | **Angular Acceleration** | $\\alpha$ | $a_t = r\\alpha$ |\n| **Inertia / Mass** | $m$ | **Rotational Inertia** | $I$ | $I = \\Sigma m r^2$ |\n| **Cause of Motion** | Force ($F$) | **Torque** | $\\tau$ | $\\tau = r F \\sin\\theta$ |\n| **Newton 2nd Law** | $\\Sigma F = ma$ | **Rotational Newton 2nd** | $\\Sigma\\tau = I\\alpha$ | - |"
      },
      {
        "heading": "2. Static Equilibrium & Strategic Pivot Protocols (CED 5.2)",
        "content": "For any extended rigid body to remain in complete static equilibrium, two simultaneous vector conditions must be satisfied:\n\n$$\\Sigma \\vec{F} = 0 \\quad \\text{and} \\quad \\Sigma \\vec{\\tau}_{\\text{pivot}} = 0$$\n\n* **Strategic Pivot Choice**: You can calculate torque about **ANY** pivot point. Always place the pivot at the location of an **unknown, unasked force** (such as a hinge pin or wall contact). Since distance $r = 0$, that force produces zero torque ($\\tau = 0\\cdot F = 0$), eliminating it from your torque balance equation!\n* **Lever Arm Concept**: Torque can be written as $\\tau = r F \\sin\\theta$ or $\\tau = F \\cdot r_\\perp$, where $r_\\perp$ is the perpendicular lever arm from the pivot to the line of action of the force."
      },
      {
        "heading": "3. Rotational Inertia ($I$) & Mass Distribution (CED 5.3)",
        "content": "Rotational inertia ($I = \\Sigma m r^2$) measures an object's resistance to changes in rotational motion:\n\n| Geometry | Rotation Axis | Formula ($I$) | Conceptual Note |\n| :--- | :--- | :--- | :--- |\n| **Thin Hoop / Ring** | Central cylindrical axis | $I = M R^2$ | All mass located at maximum radius $R$ |\n| **Solid Cylinder / Disk** | Central cylindrical axis | $I = \\frac{1}{2} M R^2$ | Mass distributed uniformly from center to rim |\n| **Solid Sphere** | Any central diameter | $I = \\frac{2}{5} M R^2$ | Mass concentrated more tightly toward center |\n| **Thin Spherical Shell** | Any central diameter | $I = \\frac{2}{3} M R^2$ | Mass restricted strictly to outer shell |\n| **Thin Rod** | Perpendicular through center | $I = \\frac{1}{12} M L^2$ | Easy to spin about center |\n| **Thin Rod** | Perpendicular through end | $I = \\frac{1}{3} M L^2$ | 4x harder to rotate from end than center! |\n\n* **AP Exam Rule**: An object with smaller rotational inertia ($I$) accelerates faster down an incline because less potential energy must be converted into rotational kinetic energy!"
      },
      {
        "heading": "4. Rotational Inertia & The Parallel Axis Theorem (CED 5.4)",
        "content": "Rotational inertia ($I$) quantifies an object's resistance to angular acceleration $\\alpha$:\n$$I = \\sum m_i r_i^2 = \\int r^2 \\, dm$$\n- **Standard Geometries (Mass $M$, Radius $R$):**\n  - Thin hoop or hollow cylinder: $I = MR^2$\n  - Solid uniform cylinder or disk: $I = \\frac{1}{2}MR^2$\n  - Solid uniform sphere: $I = \\frac{2}{5}MR^2$\n  - Thin spherical shell: $I = \\frac{2}{3}MR^2$\n  - Thin rod (length $L$) rotated about center: $I = \\frac{1}{12}ML^2$\n  - Thin rod rotated about one end: $I = \\frac{1}{3}ML^2$\n- **Parallel Axis Theorem:**\n  $$I = I_{\\text{cm}} + M d^2$$\n  where $d$ is the perpendicular distance between the center-of-mass axis and the parallel rotation axis."
      },
      {
        "heading": "5. Static Equilibrium & Strategic Pivot Point Selection (CED 5.5)",
        "content": "For an extended rigid body to remain in complete static equilibrium:\n1. **Translational Equilibrium:** $\\Sigma \\vec{F}_x = 0$ and $\\Sigma \\vec{F}_y = 0$\n2. **Rotational Equilibrium:** $\\Sigma \\vec{\\tau} = 0$ about **ANY chosen pivot point**!\n- **Pivot Choice Strategy:**\n  - Always place the hypothetical pivot axis at the point of action of an **unknown force** (such as a hinge support or floor contact).\n  - Because torque $\\tau = r F \\sin\\theta$, an unknown force acting directly at the pivot has $r = 0$ and generates zero torque, eliminating it from your torque equation!\n- **Ladder Leaning Against Wall Problem:**\n  - Wall is smooth (only normal force $F_{N,\\text{wall}}$), floor has friction ($f_s, F_{N,\\text{floor}}$).\n  - Choosing the base of the ladder as pivot eliminates both floor forces, immediately solving for $F_{N,\\text{wall}}$!"
      },
      {
        "heading": "6. Massive Pulley Dynamics (CED 5.6)",
        "content": "When a real pulley has mass $M$ and rotational inertia $I$:\n- **Tension Discrepancy:** The cord tensions on opposite sides of the pulley are **NOT equal** ($T_1 \\neq T_2$)! The tension difference provides the net torque that angularly accelerates the pulley:\n  $$\\Sigma \\tau = (T_1 - T_2)R = I \\alpha$$\n- **Coupled Acceleration with Non-Slipping String ($alpha = a/R$):**\n  $$(T_1 - T_2)R = I\\left(\\frac{a}{R}\\right) \\implies T_1 - T_2 = \\left(\\frac{I}{R^2}\\right)a$$\n  - Adding the translational equations of the hanging masses yields an effective system mass:\n    $$a = \\frac{\\Sigma F_{\\text{driving}}}{m_1 + m_2 + \\frac{I}{R^2}}$$"
      },
      {
        "heading": "7. Official AP Experimental Design Lab: Rotational Inertia Determination (Skill 4.2)",
        "content": "Experimental procedure to find moment of inertia $I$ of an irregular rigid body:\n\n* **Setup**:\n  * Rotational motion sensor with axle of radius $r$; hanging mass $m$ suspended by string wrapped around axle; digital rotary encoder measuring angular acceleration $\\alpha$.\n* **Derivation of Linearized Relationship**:\n  * Free-body diagram of hanging mass: $mg - T = ma = m(r\\alpha) \\implies T = m(g - r\\alpha)$.\n  * Net torque on rotating disk: $\\tau_{\\text{net}} = T r = I \\alpha$.\n  * Substituting $T$:\n    $$m(g - r\\alpha)r = I \\alpha \\implies m(g - r\\alpha) = I \\left(\\frac{\\alpha}{r}\\right)$$\n  * For small falling masses where $r\\alpha \\ll g$, the string tension is approximately $T \\approx mg$, yielding:\n    $$\\tau = mgr = I \\alpha$$\n  * Plot torque $\\tau = mgr$ on vertical axis vs angular acceleration $\\alpha$ on horizontal axis.\n  * The slope of the best-fit line equals the rotational inertia $I_{\\text{total}}$ of the system."
      },
      {
        "heading": "8. Static Equilibrium: The Tipping vs. Slipping Ladder on a Wall (CED 5.4)",
        "content": "Analyzing static equilibrium of a uniform ladder of length $L$ and mass $m$ leaning against a frictionless vertical wall at angle $\\theta$ with horizontal floor (floor friction coefficient $\\mu_s$):\n\n* **Force Equations**:\n  * Horizontal forces: $\\sum F_x = f_s - N_{\\text{wall}} = 0 \\implies f_s = N_{\\text{wall}}$\n  * Vertical forces: $\\sum F_y = N_{\\text{floor}} - mg = 0 \\implies N_{\\text{floor}} = mg$\n* **Torque Equation about Ladder Base (Pivot)**:\n  * Setting the base of the ladder as pivot eliminates unknown floor forces $f_s$ and $N_{\\text{floor}}$:\n    $$\\sum \\tau = N_{\\text{wall}}(L \\sin\\theta) - mg\\left(\\frac{L}{2} \\cos\\theta\\right) = 0$$\n  * Solving for wall normal force:\n    $$N_{\\text{wall}} = \\frac{mg \\cos\\theta}{2 \\sin\\theta} = \\frac{mg}{2 \\tan\\theta}$$\n* **Critical Minimum Angle to Prevent Slipping**:\n  * At the threshold of slipping, $f_s = f_{s,\\max} = \\mu_s N_{\\text{floor}} = \\mu_s mg$:\n    $$\\mu_s mg = \\frac{mg}{2 \\tan\\theta_c} \\implies \\tan\\theta_c = \\frac{1}{2\\mu_s} \\implies \\theta_c = \\arctan\\left(\\frac{1}{2\\mu_s}\\right)$$"
      }
    ],
    "workedExamples": [
      {
        "title": "Mass Suspended from Massive Pulley",
        "topicRef": "CED 5.4 Pulley Dynamics with Rotational Inertia",
        "question": "A mass $m = 2.0\\text{ kg}$ is attached to a light string wrapped around a solid cylindrical pulley of mass $M = 4.0\\text{ kg}$ and radius $R = 0.20\\text{ m}$ ($I = \\frac{1}{2}MR^2$). The mass is released from rest. Find the downward acceleration $a$ of the mass.",
        "solutionSteps": [
          "Step 1: Write Newton 2nd Law for hanging mass: $mg - T = ma$.",
          "Step 2: Write torque equation for pulley about central axis: $\\Sigma\\tau = T R = I\\alpha$.",
          "Step 3: Substitute $I = \\frac{1}{2}MR^2$ and $\\alpha = \\frac{a}{R}$: $T R = \\left(\\frac{1}{2}MR^2\\right)\\left(\\frac{a}{R}\\right) = \\frac{1}{2}MR a$.",
          "Step 4: Divide both sides by $R$ to isolate tension: $T = \\frac{1}{2}Ma$.",
          "Step 5: Substitute $T$ into mass equation: $mg - \\frac{1}{2}Ma = ma \\implies mg = \\left(m + \\frac{1}{2}M\\right)a$.",
          "Step 6: Solve for $a$: $a = \\frac{mg}{m + \\frac{1}{2}M} = \\frac{(2.0)(9.8)}{2.0 + \\frac{1}{2}(4.0)} = \\frac{19.6}{4.0} = 4.9\\text{ m/s}^2$."
        ],
        "finalAnswer": "Downward acceleration $a = 4.9\\text{ m/s}^2$.",
        "apScoringTip": "In AP Physics 1, pulleys are NOT massless! You must account for pulley inertia $I\\alpha$. Tension above and below a real pulley is NOT equal when accelerating."
      }
    ],
    "diagrams": [
      {
        "id": "phys_lever_torque",
        "title": "Lever Arm Geometry and Line of Action",
        "subtitle": "Perpendicular Distance $r_\\perp = r\\sin\\theta$ Maximizes Torque",
        "type": "torque_lever",
        "description": "Diagram illustrating line of action of force $F$ and perpendicular lever arm $r_\\perp$. Demonstrates that force applied parallel to lever produces zero torque.",
        "takeaway": "Maximum torque occurs at $\\theta = 90^\\circ$ (perpendicular). A force directed straight toward or away from the pivot produces $\\tau = 0$."
      }
    ],
    "commonTraps": [
      "Assuming tension in a string on a massive pulley equals the weight of the suspended object ($T = mg$). If the object is accelerating downward, $T < mg$.",
      "Forgetting that moment of inertia depends on the axis of rotation. A rod rotated about its center ($I = \\frac{1}{12}ML^2$) has 4 times less inertia than rotated about its end ($I = \\frac{1}{3}ML^2$).",
      "Applying linear equations directly to rotating disks without converting units. Always work in radians (rad), radians per second (rad/s), and radians per second squared (rad/s²)."
    ],
    "cramSheet": [
      "Torque $\\tau = r F \\sin\\theta$. Counter-clockwise is usually positive, clockwise is negative.",
      "Rotational inertia $I = \\Sigma m r^2$. Mass farther from axis resists rotational acceleration much more.",
      "Rolling without slipping condition: $v_{\\text{cm}} = R\\omega$ and $a_{\\text{cm}} = R\\alpha$.",
      "Static friction provides the torque that causes an object to roll without slipping down an incline."
    ]
  },
  {
    "unitId": "u6",
    "unitNumber": 6,
    "title": "Energy & Momentum of Rotating Systems",
    "examWeight": "5%–8% of AP Exam",
    "bigIdea": "A rolling body possesses both translational and rotational kinetic energy. In the absence of external torques, angular momentum is conserved.",
    "keyTheorems": [
      {
        "name": "Conservation of Angular Momentum",
        "conditions": "Any closed system with zero net external torque ($\\Sigma\\vec{\\tau}_{\\text{ext}} = 0$).",
        "conclusion": "Initial angular momentum equals final angular momentum: $L_i = L_f \\implies I_i \\omega_i = I_f \\omega_f$.",
        "apTip": "Classic figure skater example: When arms are pulled in, $I$ decreases, so angular speed $\\omega$ MUST increase to keep $L$ constant. Note that rotational kinetic energy increases because work was done by internal muscles!"
      },
      {
        "name": "Rolling Without Slipping Energy Decomposition",
        "conditions": "Rigid object rolling smoothly across a surface without skidding.",
        "conclusion": "Total kinetic energy is the sum of translational and rotational kinetic energy: $K_{\\text{total}} = \\frac{1}{2}m v_{\\text{cm}}^2 + \\frac{1}{2}I_{\\text{cm}}\\omega^2$.",
        "apTip": "Because energy is partitioned between translation and rotation, a rolling object down a ramp reaches the bottom SLOWER than a frictionless sliding block of the same mass!"
      }
    ],
    "formulas": [
      {
        "name": "Rotational Kinetic Energy",
        "latex": "K_{\\text{rot}} = \\frac{1}{2}I\\omega^2",
        "explanation": "Kinetic energy stored in rotation about an axis with angular speed $\\omega$."
      },
      {
        "name": "Angular Momentum of Rigid Body",
        "latex": "L = I\\omega",
        "explanation": "Angular momentum for an extended object rotating at angular velocity $\\omega$."
      },
      {
        "name": "Angular Momentum of a Point Particle",
        "latex": "L = m v r_\\perp = m v r \\sin\\theta",
        "explanation": "A point particle moving linearly has angular momentum relative to any chosen origin."
      }
    ],
    "sections": [
      {
        "heading": "1. The Great Incline Race: Which Shape Wins?",
        "content": "When a hoop, solid cylinder (disk), and solid sphere of identical mass $M$ and radius $R$ roll down an incline of height $h$:\n\n$$Mgh = \\frac{1}{2}M v^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}M v^2 + \\frac{1}{2}(\\beta MR^2)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}M v^2 (1 + \\beta)$$\n\nSolving for speed at the bottom:\n$$v = \\sqrt{\\frac{2gh}{1 + \\beta}}$$\n\n- **Solid Sphere** ($\\beta = 2/5 = 0.40$): $v = \\sqrt{\\frac{2gh}{1.4}} \\approx 1.20\\sqrt{gh}$ $\\rightarrow$ **1st Place (FASTEST)**\n- **Solid Disk** ($\\beta = 1/2 = 0.50$): $v = \\sqrt{\\frac{2gh}{1.5}} \\approx 1.15\\sqrt{gh}$ $\\rightarrow$ **2nd Place**\n- **Hollow Ring / Hoop** ($\\beta = 1$): $v = \\sqrt{\\frac{2gh}{2.0}} = 1.00\\sqrt{gh}$ $\\rightarrow$ **3rd Place (SLOWEST)**\n\n*Conclusion*: Shape factor $\\beta$ alone determines race outcome—mass $M$ and radius $R$ completely cancel out!"
      },
      {
        "heading": "2. Standard Rotational Inertias & Incline Race Finish Order",
        "content": "Comparison of standard rotational inertias ($I = \\beta M R^2$) tested on the AP exam:\n\n| Rigid Body Object | Central Axis Formula ($I$) | Geometric Shape Factor ($\\beta$) | Acceleration Down Incline $a = \\frac{g\\sin\\theta}{1+\\beta}$ | Rolling Race Rank |\n| :--- | :--- | :--- | :--- | :--- |\n| **Frictionless Block** | N/A (Sliding only) | $\\beta = 0$ | $a = g\\sin\\theta$ | **0 (Fastest - Slides)** |\n| **Solid Sphere** | $I = \\frac{2}{5}MR^2$ | $\\beta = 0.40$ | $a = \\frac{5}{7}g\\sin\\theta \\approx 0.71 g\\sin\\theta$ | **1st Place (Winner)** |\n| **Solid Cylinder / Disk** | $I = \\frac{1}{2}MR^2$ | $\\beta = 0.50$ | $a = \\frac{2}{3}g\\sin\\theta \\approx 0.67 g\\sin\\theta$ | **2nd Place** |\n| **Hollow Spherical Shell** | $I = \\frac{2}{3}MR^2$ | $\\beta = 0.67$ | $a = \\frac{3}{5}g\\sin\\theta = 0.60 g\\sin\\theta$ | **3rd Place** |\n| **Thin Cylindrical Ring / Hoop** | $I = MR^2$ | $\\beta = 1.00$ | $a = \\frac{1}{2}g\\sin\\theta = 0.50 g\\sin\\theta$ | **4th Place (Last)** |\n\n*Key AP Insight*: The more mass concentrated near the rotation axis, the smaller $\\beta$, the less energy sequestered into rotation, and the faster it accelerates down the incline."
      },
      {
        "heading": "3. Rolling Without Slipping & The Great Incline Race (CED 6.1)",
        "content": "When a round object rolls without slipping down an incline of height $h$:\n- **Kinematic Constraint:** Tangential velocity equals center of mass velocity:\n  $$v_{\\text{cm}} = \\omega R, \\quad a_{\\text{cm}} = \\alpha R$$\n- **Mechanical Energy Partitioning:**\n  $$E_{\\text{total}} = K_{\\text{trans}} + K_{\\text{rot}} = \\frac{1}{2}m v_{\\text{cm}}^2 + \\frac{1}{2}I_{\\text{cm}}\\omega^2$$\n  Substitute $\\omega = v_{\\text{cm}}/R$ and $I = c m R^2$:\n  $$mgh = \\frac{1}{2}m v_{\\text{cm}}^2 \\left(1 + \\frac{I_{\\text{cm}}}{m R^2}\\right) \\implies \\mathbf{v_{\\text{cm}} = \\sqrt{\\frac{2gh}{1 + c}}}$$\n- **The Incline Race:**\n  - Solid Sphere ($c = 2/5 = 0.40$): $v = \\sqrt{2gh / 1.4} = 1.20\\sqrt{gh}$ (**1st place!**)\n  - Solid Cylinder/Disk ($c = 1/2 = 0.50$): $v = \\sqrt{2gh / 1.5} = 1.15\\sqrt{gh}$ (**2nd place**)\n  - Thin Hoop ($c = 1.0$): $v = \\sqrt{2gh / 2.0} = 1.00\\sqrt{gh}$ (**Last place!**)\n  - **Key Insight:** Mass and radius cancel completely! Shape distribution $c = I/(mR^2)$ alone determines race speed."
      },
      {
        "heading": "4. Angular Momentum Conservation in Collisions (CED 6.2–6.4)",
        "content": "Angular momentum $\\vec{L}$ of a system is conserved when net external torque is zero:\n$$\\Sigma \\vec{\\tau}_{\\text{ext}} = 0 \\implies \\vec{L}_i = \\vec{L}_f$$\n- **Point Particle Angular Momentum:** A particle of mass $m$ moving in a straight line at speed $v$ past a pivot point has angular momentum:\n  $$\\vec{L} = \\vec{r} \\times \\vec{p} \\implies L = m v r_\\perp = m v r \\sin\\theta$$\n- **Sticky Collision with Rotating Rod:**\n  - Dart ($m, v_0$) embeds into the tip of a rod ($M, L$) pivoted at one end:\n    $$L_i = m v_0 L = L_f = I_{\\text{total}} \\omega_f = \\left(\\frac{1}{3}ML^2 + m L^2\\right) \\omega_f$$\n- **Figure Skater Effect:**\n  - Pulling arms inward decreases rotational inertia $I_f < I_i$, forcing angular velocity to increase $\\omega_f > \\omega_i$.\n  - Rotational kinetic energy **increases** ($K = \\frac{L^2}{2I}$) because the skater performs internal chemical work using muscles!"
      },
      {
        "heading": "5. The Great Rolling Race: General Incline Acceleration Derivation (CED 6.1)",
        "content": "Rigorous mathematical proof that all uniform rigid bodies of the same geometric shape accelerate down an incline at identical rates, regardless of mass $M$ or radius $R$:\n\n* **Generalized Rotational Inertia**:\n  * Represent moment of inertia as $I = c M R^2$, where $c$ is a dimensionless geometric constant:\n    * Solid Sphere: $c = 2/5 = 0.40$\n    * Spherical Shell: $c = 2/3 \\approx 0.67$\n    * Solid Cylinder / Disk: $c = 1/2 = 0.50$\n    * Thin Hoop / Ring: $c = 1.00$\n* **Conservation of Mechanical Energy Derivation**:\n  * Object starts from rest at vertical height $h$.\n  * Initial energy: $E_i = Mgh$.\n  * Final energy at bottom (rolling without slipping constraint $v = \\omega R$):\n    $$E_f = \\frac{1}{2}M v^2 + \\frac{1}{2}I \\omega^2 = \\frac{1}{2}M v^2 + \\frac{1}{2}(c M R^2)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}M v^2 (1 + c)$$\n  * Equating initial and final energy:\n    $$Mgh = \\frac{1}{2}M v^2 (1 + c) \\implies v = \\sqrt{\\frac{2gh}{1 + c}}$$\n  * Notice that both mass $M$ and radius $R$ cancel out completely!\n* **The Winner of the Race**:\n  * The object with the smallest shape constant $c$ achieves the highest speed:\n    $$v_{\\text{solid sphere}} > v_{\\text{solid cylinder}} > v_{\\text{spherical shell}} > v_{\\text{thin hoop}}$$"
      },
      {
        "heading": "6. Angular Momentum Conservation: Off-Center Particle Collisions on Pivoted Rods (CED 6.2)",
        "content": "Solving inelastic rotational collisions using conservation of angular momentum:\n\n* **System Setup**:\n  * A uniform thin rod of mass $M$ and length $L$ hangs vertically from a frictionless pivot at its top end ($I_{\\text{rod}} = \\frac{1}{3}ML^2$).\n  * A small clay ball of mass $m$ travels horizontally with velocity $v_0$ and collides with the rod at distance $d$ below the pivot, sticking to the rod.\n* **Conservation of Angular Momentum about Pivot**:\n  * Initial angular momentum of particle about pivot: $L_i = m v_0 d$.\n  * Total rotational inertia of composite system after collision:\n    $$I_{\\text{total}} = I_{\\text{rod}} + I_{\\text{clay}} = \\frac{1}{3}ML^2 + m d^2$$\n  * Conservation equation:\n    $$L_i = L_f \\implies m v_0 d = I_{\\text{total}} \\omega_f \\implies \\omega_f = \\frac{m v_0 d}{\\frac{1}{3}ML^2 + m d^2}$$"
      }
    ],
    "workedExamples": [
      {
        "title": "Child Jumps onto Rotating Merry-Go-Round",
        "topicRef": "CED 6.3 Inelastic Angular Collisions",
        "question": "A horizontal merry-go-round (solid disk, $M = 100\\text{ kg}$, $R = 2.0\\text{ m}$, $I = \\frac{1}{2}MR^2$) rotates freely at $\\omega_0 = 3.0\\text{ rad/s}$. A child of mass $m = 25\\text{ kg}$ initially standing at rest on the ground jumps radially onto the outer rim. Calculate the new angular speed $\\omega_f$.",
        "solutionSteps": [
          "Step 1: Check external torque: Vertical forces (gravity, normal) cancel; axle is frictionless $\\implies \\Sigma\\tau_{\\text{ext}} = 0$, so $L_i = L_f$.",
          "Step 2: Calculate initial moment of inertia: $I_{\\text{disk}} = \\frac{1}{2}(100)(2.0)^2 = 200\\text{ kg}\\cdot\\text{m}^2$.",
          "Step 3: Initial angular momentum: $L_i = I_{\\text{disk}}\\omega_0 = (200)(3.0) = 600\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.",
          "Step 4: Final moment of inertia includes child at rim as point mass: $I_f = I_{\\text{disk}} + m R^2 = 200 + (25)(2.0)^2 = 200 + 100 = 300\\text{ kg}\\cdot\\text{m}^2$.",
          "Step 5: Apply conservation of angular momentum: $L_f = I_f \\omega_f \\implies 600 = 300\\omega_f$.",
          "Step 6: Solve for $\\omega_f$: $\\omega_f = \\frac{600}{300} = 2.0\\text{ rad/s}$."
        ],
        "finalAnswer": "Final angular speed $\\omega_f = 2.0\\text{ rad/s}$.",
        "apScoringTip": "State clearly that angular momentum is conserved because the axle exerts zero torque about the central axis. Don't forget to treat the child on the rim as a point mass with $I = mR^2$."
      }
    ],
    "diagrams": [
      {
        "id": "phys_rolling_race",
        "title": "Rolling Motion Kinetic Energy Partitioning",
        "subtitle": "Translational $K_{\\text{trans}}$ vs. Rotational $K_{\\text{rot}}$",
        "type": "rolling_race",
        "description": "Bar chart illustrating total mechanical energy at top vs bottom for hoop, disk, and sphere rolling down identical heights.",
        "takeaway": "Objects with smaller fractions of energy tied up in rotation (like spheres) divert more energy into translational motion and arrive first."
      }
    ],
    "commonTraps": [
      "Assuming that a linear particle moving in a straight line has zero angular momentum. If its line of motion does not pass through the reference pivot, $L = m v r_\\perp \\neq 0$.",
      "Believing rotational kinetic energy is conserved when a person pulls their arms in on a spinning chair. It INCREASES because the muscles do positive mechanical work!",
      "Thinking mass or radius affects who wins an incline rolling race. Mass and radius cancel; ONLY the shape distribution factor $\\beta$ matters."
    ],
    "cramSheet": [
      "Angular momentum $L = I\\omega$ is conserved when $\\Sigma\\tau_{\\text{ext}} = 0$.",
      "Point particle angular momentum: $L = m v r \\sin\\theta$.",
      "Total rolling kinetic energy: $K = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$.",
      "Race down incline order: Sliding block (fastest) > Sphere > Disk > Hoop (slowest)."
    ]
  },
  {
    "unitId": "u7",
    "unitNumber": 7,
    "title": "Oscillations (Simple Harmonic Motion)",
    "examWeight": "5%–8% of AP Exam",
    "bigIdea": "Simple harmonic motion occurs when a restoring force is directly proportional to displacement from equilibrium, yielding sinusoidal position and velocity curves.",
    "keyTheorems": [
      {
        "name": "Condition for Simple Harmonic Motion (SHM)",
        "conditions": "Any system where net restoring force obeys Hooke's Law: $F_{\\text{net}} = -C x$.",
        "conclusion": "Motion is periodic with period $T$ independent of amplitude $A$. Acceleration is $a(t) = -\\omega^2 x(t)$, where $\\omega = 2\\pi/T = \\sqrt{C/m}$.",
        "apTip": "Doubling the amplitude of a mass-spring or pendulum does NOT change its period! Period is completely independent of amplitude for small angles."
      }
    ],
    "formulas": [
      {
        "name": "Period of Mass-Spring Oscillator",
        "latex": "T_s = 2\\pi \\sqrt{\\frac{m}{k}}",
        "explanation": "Period depends only on vibrating mass $m$ and spring constant $k$."
      },
      {
        "name": "Period of Simple Pendulum",
        "latex": "T_p = 2\\pi \\sqrt{\\frac{L}{g}}",
        "explanation": "Period depends only on length $L$ and local gravity $g$ (independent of mass!)."
      },
      {
        "name": "Total Energy of Mass-Spring Oscillator",
        "latex": "E_{\\text{total}} = \\frac{1}{2}k A^2 = \\frac{1}{2}m v_{\\max}^2",
        "explanation": "Total mechanical energy is proportional to the square of amplitude $A^2$."
      },
      {
        "name": "Maximum Velocity and Acceleration",
        "latex": "v_{\\max} = A\\omega, \\quad a_{\\max} = A\\omega^2",
        "explanation": "Occurs at equilibrium ($x=0$) for velocity, and at turning points ($x = \\pm A$) for acceleration."
      }
    ],
    "sections": [
      {
        "heading": "1. Phase and Energy States Across an Oscillation Cycle",
        "content": "At any point in an ideal mass-spring oscillation cycle:\n\n| Position State | Displacement ($x$) | Velocity ($v$) | Acceleration ($a$) | Potential Energy ($U$) | Kinetic Energy ($K$) |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Equilibrium ($x = 0$)** | $0$ | **MAXIMUM** ($v_{\\max} = A\\omega$) | $0$ | $0$ | **MAXIMUM** ($E$) |\n| **Max Stretch ($+A$)** | $+A$ | $0$ | **MAX NEGATIVE** ($-A\\omega^2$) | **MAXIMUM** ($E$) | $0$ |\n| **Max Compression ($-A$)** | $-A$ | $0$ | **MAX POSITIVE** ($+A\\omega^2$) | **MAXIMUM** ($E$) | $0$ |\n\n*Key Graph Feature*: When $x(t) = A\\cos(\\omega t)$, velocity leads position by $90^\\circ$ ($\\pi/2$), and acceleration is $180^\\circ$ ($\\pi$) out of phase with position."
      },
      {
        "heading": "2. Mass-Spring vs. Simple Pendulum Period Factors (CED 7.2)",
        "content": "Period $T$ formulas and experimental dependencies:\n\n| Oscillator Type | Period Formula | Depends On | Does NOT Depend On |\n| :--- | :--- | :--- | :--- |\n| **Mass-Spring** | $T = 2\\pi \\sqrt{\\frac{m}{k}}$ | Mass $m$, Spring constant $k$ | Amplitude $A$, Local gravity $g$, Angle of incline |\n| **Simple Pendulum** | $T = 2\\pi \\sqrt{\\frac{L}{g}}$ | Length $L$, Gravitational field $g$ | Bob mass $m$, Amplitude $A$ (for $\\theta < 15^\\circ$) |\n\n* **Elevator / Space Scenarios**:\n  * Taking a mass-spring to the Moon ($g_{\\text{moon}} = g/6$) does **NOT change its period**!\n  * Taking a pendulum to the Moon **increases its period** ($T \\propto 1/\\sqrt{g}$), making the clock run slower!\n  * In an upward accelerating elevator ($a$), effective gravity is $g + a$, decreasing a pendulum's period."
      },
      {
        "heading": "3. Kinematics & Energy Graphs of SHM (CED 7.3)",
        "content": "Mathematical equations describing sinusoidal motion:\n\n* **Position**: $x(t) = A \\cos(\\omega t)$\n* **Velocity**: $v(t) = -A\\omega \\sin(\\omega t) \\implies v_{\\max} = A\\omega$\n* **Acceleration**: $a(t) = -A\\omega^2 \\cos(\\omega t) = -\\omega^2 x(t) \\implies a_{\\max} = A\\omega^2$\n* **Total Energy Invariance**:\n  $$E_{\\text{total}} = \\frac{1}{2} k x^2 + \\frac{1}{2} m v^2 = \\frac{1}{2} k A^2 = \\frac{1}{2} m v_{\\max}^2$$\n* **Equal Energy Point**: Kinetic and potential energy are exactly equal ($K = U = \\frac{1}{2}E$) when displacement is $x = \\pm \\frac{A}{\\sqrt{2}} \\approx \\pm 0.707 A$, NOT at half-amplitude $A/2$!"
      },
      {
        "heading": "4. Kinematics of Simple Harmonic Motion (CED 7.1)",
        "content": "Simple Harmonic Motion occurs whenever restoring force is directly proportional to displacement ($F = -kx$):\n- **Differential Equation:**\n  $$\\frac{d^2x}{dt^2} + \\omega^2 x = 0, \\quad \\text{where } \\omega = 2\\pi f = \\sqrt{\\frac{k}{m}}$$\n- **Equations of Motion (Starting at $+A$ at $t = 0$):**\n  - Position: $x(t) = A \\cos(\\omega t)$\n  - Velocity: $v(t) = -A\\omega \\sin(\\omega t) \\quad \\implies v_{\\max} = A\\omega$\n  - Acceleration: $a(t) = -A\\omega^2 \\cos(\\omega t) = -\\omega^2 x(t) \\quad \\implies a_{\\max} = A\\omega^2$\n- **Phase Relationships:**\n  - Velocity leads displacement by $90^\\circ$ ($pi/2$ radians). When displacement is zero, velocity is maximized!\n  - Acceleration is $180^\\circ$ ($pi$ radians) out of phase with displacement. When displacement is $+A$, acceleration is at its most negative $-a_{\\max}$."
      },
      {
        "heading": "5. Energy Transformations in Oscillators (CED 7.2)",
        "content": "Total mechanical energy in an undamped oscillator remains constant:\n$$E_{\\text{total}} = \\frac{1}{2}kA^2 = \\frac{1}{2}m v_{\\max}^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$$\n- **Speed as a Function of Position:**\n  $$v(x) = \\pm \\omega \\sqrt{A^2 - x^2} = \\pm \\sqrt{\\frac{k}{m}(A^2 - x^2)}$$\n- **Equilibrium Crossing ($x = 0$):**\n  - Potential energy $U = 0$, kinetic energy is maximized: $K = \\frac{1}{2}m v_{\\max}^2$.\n- **Turning Points ($x = \\pm A$):**\n  - Kinetic energy $K = 0$, speed is zero, potential energy is maximized: $U = \\frac{1}{2}kA^2$.\n- **Halfway Point ($x = A/2$):**\n  - $U = \\frac{1}{2}k(A/2)^2 = \\frac{1}{4} E_{\\text{total}}$, which means $K = \\frac{3}{4} E_{\\text{total}}$! Velocity is $v = \\frac{\\sqrt{3}}{2}v_{\\max} \\approx 0.866 v_{\\max}$."
      },
      {
        "heading": "6. Mass-Spring vs. Simple Pendulum Comparison (CED 7.3–7.4)",
        "content": "Comparing the two canonical AP Physics 1 harmonic oscillators:\n\n| Property | Mass-Spring System | Simple Gravity Pendulum |\n| :--- | :--- | :--- |\n| **Period Formula** | $T = 2\\pi \\sqrt{\\frac{m}{k}}$ | $T = 2\\pi \\sqrt{\\frac{L}{g}}$ |\n| **Mass Dependency** | Increasing mass $m$ increases $Period$ | **Independent of mass!** |\n| **Gravity Dependency**| **Independent of gravity $g$!** | In free-fall/moon: $g \\downarrow \\implies T \\uparrow$ |\n| **Amplitude Dependency**| Independent of amplitude $A$ (isochronous) | Independent of amplitude only for small angles ($\\theta < 15^\\circ$) |\n| **Vertical vs. Horizontal**| Identical period in both horizontal & vertical orientations! | Requires gravity restoring force ($F = -mg\\sin\\theta$) |\n\n**AP Exam Trap:** Taking a spring clock to the Moon does NOT change its ticking rate! Taking a grandfather pendulum clock to the Moon causes it to tick much slower ($g_{\\text{moon}} = g/6 \\implies T_{\\text{moon}} = \\sqrt{6} T \\approx 2.45 T$)."
      },
      {
        "heading": "7. Official AP Experimental Design Lab: Determining Local Gravity via Simple Pendulums (Skill 4.2)",
        "content": "Standard precision laboratory investigation to determine $g$ using a simple pendulum:\n\n* **Setup & Controlled Variables**:\n  * Heavy spherical bob of mass $m$; light unstretchable string of length $L$; protractor; photogate timer.\n  * **Critical Control**: Initial displacement angle must satisfy the small-angle approximation $\\theta \\le 15^\\circ$ ($\\,0.26\\text{ rad}$), where $\\sin\\theta \\approx \\theta$ with $<1\\%$ error.\n* **Period Derivation & Linearization**:\n  * Theoretical period: $T = 2\\pi \\sqrt{\\frac{L}{g}}$.\n  * Squaring both sides:\n    $$T^2 = \\left(\\frac{4\\pi^2}{g}\\right) L$$\n  * Plot period-squared $T^2$ on vertical axis vs string length $L$ on horizontal axis.\n  * The best-fit line is linear passing through origin with slope $m = \\frac{4\\pi^2}{g}$.\n  * Calculate acceleration due to gravity:\n    $$g_{\\text{exp}} = \\frac{4\\pi^2}{\\text{slope}}$$"
      },
      {
        "heading": "8. Vertical Spring-Mass Equilibrium Offset & Energy Partitioning (CED 7.2)",
        "content": "Proving that gravity shifts equilibrium position but does NOT alter oscillation frequency:\n\n* **Static Equilibrium Offset**:\n  * Unstretched spring hanging vertically hangs at $y = 0$.\n  * Attaching mass $m$ stretches spring by equilibrium displacement $y_0$:\n    $$\\sum F_y = k y_0 - mg = 0 \\implies y_0 = \\frac{mg}{k}$$\n* **Dynamic Equation of Motion about Equilibrium**:\n  * Let displacement from new equilibrium be $z = y - y_0$.\n  * Net restoring force:\n    $$F_{\\text{net}} = k(y_0 + z) - mg = (ky_0 - mg) + kz = 0 + kz = kz$$\n  * The constant force of gravity is completely absorbed into the shift of the equilibrium point!\n  * Angular frequency remains strictly: $\\omega = \\sqrt{\\frac{k}{m}}$, identical to a horizontal spring."
      }
    ],
    "workedExamples": [
      {
        "title": "Period Modification of a Pendulum on the Moon",
        "topicRef": "CED 7.2 Simple Pendulum Period",
        "question": "A simple pendulum on Earth has a period $T_{\\text{Earth}} = 2.0\\text{ s}$. The pendulum is transported to the Moon, where gravitational field strength is $g_{\\text{Moon}} = \\frac{1}{6}g_{\\text{Earth}}$. What is the new period $T_{\\text{Moon}}$?",
        "solutionSteps": [
          "Step 1: Write formula for pendulum period: $T = 2\\pi\\sqrt{\\frac{L}{g}}$.",
          "Step 2: Set up ratio between Moon and Earth: $\\frac{T_{\\text{Moon}}}{T_{\\text{Earth}}} = \\frac{2\\pi\\sqrt{L/g_{\\text{Moon}}}}{2\\pi\\sqrt{L/g_{\\text{Earth}}}} = \\sqrt{\\frac{g_{\\text{Earth}}}{g_{\\text{Moon}}}}$.",
          "Step 3: Substitute $g_{\\text{Moon}} = \\frac{1}{6}g_{\\text{Earth}}$: $\\frac{T_{\\text{Moon}}}{T_{\\text{Earth}}} = \\sqrt{6} \\approx 2.449$.",
          "Step 4: Solve for $T_{\\text{Moon}}$: $T_{\\text{Moon}} = 2.0 \\times 2.449 \\approx 4.90\\text{ s}$."
        ],
        "finalAnswer": "Period on the Moon $T_{\\text{Moon}} \\approx 4.9\\text{ s}$.",
        "apScoringTip": "Notice the period increased! Lower gravity means a weaker restoring torque, causing the pendulum to swing more slowly."
      }
    ],
    "diagrams": [
      {
        "id": "phys_shm_graphs",
        "title": "Position, Velocity, Acceleration in SHM",
        "subtitle": "Sinusoidal Waveforms and Phase Offsets",
        "type": "shm_curves",
        "description": "Three stacked synchronized graphs showing $x(t)$, $v(t)$, and $a(t)$ displaying phase shifts and zero crossings.",
        "takeaway": "Velocity is maximum when position is zero; acceleration is maximum when position is at extreme endpoints."
      }
    ],
    "commonTraps": [
      "Believing pendulum period depends on mass. Pendulum period depends ONLY on length $L$ and local gravity $g$; mass cancels out.",
      "Assuming acceleration is zero at maximum displacement. Acceleration is at its MAXIMUM at $\\pm A$ because spring restoring force is highest ($F = kA$).",
      "Confusing frequency ($f = 1/T$) with angular frequency ($\\omega = 2\\pi f$). Check whether units are Hertz (Hz) or radians per second (rad/s)."
    ],
    "cramSheet": [
      "Mass-spring period: $T_s = 2\\pi\\sqrt{m/k}$ (independent of gravity and amplitude).",
      "Pendulum period: $T_p = 2\\pi\\sqrt{L/g}$ (independent of mass and amplitude for small angles $< 15^\\circ$).",
      "Total energy $E = \\frac{1}{2}kA^2$. If amplitude doubles, total energy quadruples ($4\\times$).",
      "At equilibrium ($x=0$): Force = 0, Acceleration = 0, Speed = max, Kinetic energy = max."
    ]
  },
  {
    "unitId": "u8",
    "unitNumber": 8,
    "title": "Fluids",
    "examWeight": "10%–15% of AP Exam",
    "bigIdea": "Fluids exert forces across contact areas yielding pressure. Fluid dynamics is governed by conservation of mass (continuity) and conservation of energy (Bernoulli).",
    "keyTheorems": [
      {
        "name": "Archimedes’ Principle (Buoyant Force)",
        "conditions": "Any object fully or partially submerged in a static fluid.",
        "conclusion": "The upward buoyant force equals the weight of the displaced fluid: $F_b = \\rho_{\\text{fluid}} V_{\\text{submerged}} g$.",
        "apTip": "The buoyant force depends ONLY on the density of the FLUID and the volume of fluid displaced, NOT on the mass or density of the submerged object itself!"
      },
      {
        "name": "Bernoulli’s Principle",
        "conditions": "Ideal fluid flow: Incompressible, non-viscous (no internal friction), laminar streamline flow.",
        "conclusion": "$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g y_2 = \\text{constant}$.",
        "apTip": "At constant elevation ($y_1 = y_2$), wherever fluid flow speed increases, internal static fluid pressure MUST decrease (Bernoulli effect)!"
      }
    ],
    "formulas": [
      {
        "name": "Density and Pressure Definitions",
        "latex": "\\rho = \\frac{m}{V}, \\quad P = \\frac{F}{A}",
        "explanation": "Density is mass per volume; pressure is perpendicular force per surface area."
      },
      {
        "name": "Hydrostatic Pressure at Depth",
        "latex": "P = P_0 + \\rho g h",
        "explanation": "Absolute pressure at depth $h$ in fluid of density $\\rho$ under atmospheric pressure $P_0$."
      },
      {
        "name": "Archimedes Buoyant Force",
        "latex": "F_b = \\rho_f V_d g",
        "explanation": "Upward force exerted by fluid of density $\\rho_f$ when volume $V_d$ is displaced."
      },
      {
        "name": "Continuity Equation (Conservation of Mass)",
        "latex": "A_1 v_1 = A_2 v_2 = \\frac{\\Delta V}{\\Delta t}",
        "explanation": "Volume flow rate is constant; narrowing a pipe area forces flow speed to increase."
      }
    ],
    "sections": [
      {
        "heading": "1. Floating Object Submersion Fraction",
        "content": "For an object of density $\\rho_{\\text{object}}$ floating in equilibrium in a fluid of density $\\rho_{\\text{fluid}}$:\n\n$$\\Sigma F_y = F_b - mg = 0 \\implies \\rho_{\\text{fluid}} V_{\\text{submerged}} g = \\rho_{\\text{object}} V_{\\text{total}} g$$\n\n$$\\frac{V_{\\text{submerged}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{object}}}{\\rho_{\\text{fluid}}}$$\n\n- **Example**: Ice ($\\rho = 900\\text{ kg/m}^3$) in water ($\\rho = 1000\\text{ kg/m}^3$):\n  $$\\frac{V_{\\text{sub}}}{V_{\\text{total}}} = \\frac{900}{1000} = 0.90 = 90\\%$$\n  $90\\%$ of the iceberg is submerged below the waterline; only $10\\%$ is visible above!"
      },
      {
        "heading": "2. Fluids Statics & Dynamics Master Decision Matrix",
        "content": "Master reference for fluid equations tested on the AP Physics 1 exam:\n\n| Law / Principle | Governing Equation | Primary AP Application | Key Conceptual Trap |\n| :--- | :--- | :--- | :--- |\n| **Hydrostatic Pressure** | $P = P_0 + \\rho g h$ | Pressure at depth $h$ in static fluid column | Gauge pressure is $\\rho gh$; absolute pressure includes $P_0 = 101.3\\text{ kPa}$ |\n| **Archimedes' Principle** | $F_b = \\rho_{\\text{fluid}} V_{\\text{disp}} g$ | Buoyant force on floating/submerged objects | $F_b$ depends on **FLUID density**, NOT object density or depth! |\n| **Continuity Equation** | $A_1 v_1 = A_2 v_2$ | Incompressible streamline fluid flow in pipes | Narrowing diameter by factor of 2 reduces area by 4, multiplying speed by 4! |\n| **Bernoulli's Equation** | $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g y_1 = \\text{const}$ | Energy conservation in fluid streamlines | Where velocity increases in constriction, static pressure **DECREASES**! |\n| **Torricelli's Law** | $v = \\sqrt{2gh}$ | Efflux speed draining from small hole at depth $h$ | Valid only when open tank surface area is vastly larger than hole area |"
      },
      {
        "heading": "3. Hydrostatic Pressure & Pascal’s Principle (CED 8.1–8.2)",
        "content": "Pressure is perpendicular force per unit area: $P = F/A$.\n- **Static Fluid Pressure at Depth $h$:**\n  $$P_{\\text{abs}} = P_0 + \\rho g h$$\n  where $P_0$ is atmospheric pressure ($1.013 \\times 10^5\\text{ Pa}$) and $\\rho$ is fluid density.\n  - Gauge pressure measures the pressure above atmospheric: $P_{\\text{gauge}} = P_{\\text{abs}} - P_0 = \\rho g h$.\n- **Pascal's Principle:** An externally applied pressure change is transmitted undiminished to every portion of an enclosed fluid:\n  $$P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right)$$\n  In a hydraulic lift, force is multiplied by the ratio of piston areas, while piston displacement follows $d_2 = d_1 (A_1 / A_2)$, conserving work!"
      },
      {
        "heading": "4. Archimedes’ Principle & Buoyancy Analysis (CED 8.3–8.4)",
        "content": "Any object submerged wholly or partially in a fluid is buoyed upward by a force equal to the weight of fluid displaced:\n$$F_B = \\rho_{\\text{fluid}} V_{\\text{disp}} g$$\n- **Floating Objects in Equilibrium ($\\Sigma F_y = 0$):**\n  $$F_B = F_g \\implies \\rho_{\\text{fluid}} V_{\\text{disp}} g = \\rho_{\\text{obj}} V_{\\text{total}} g \\implies \\mathbf{\\frac{V_{\\text{disp}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{obj}}}{\\rho_{\\text{fluid}}}}$$\n  - The fraction of the object submerged equals the ratio of object density to fluid density!\n  - Ice ($\\rho = 917\\text{ kg/m}^3$) in water ($\\rho = 1000\\text{ kg/m}^3$): $91.7\\%$ of the iceberg is submerged below the surface.\n- **Apparent Weight of Submerged Sinking Object:**\n  $$W_{\\text{apparent}} = F_g - F_B = m g - \\rho_{\\text{fluid}} V_{\\text{obj}} g$$"
      },
      {
        "heading": "5. Continuity & Bernoulli’s Equation (CED 8.5–8.8)",
        "content": "For ideal, incompressible, non-viscous fluid flow with laminar streamlines:\n- **Continuity Equation (Conservation of Mass):**\n  $$A_1 v_1 = A_2 v_2 = \\text{Volume Flow Rate } Q \\quad (\\text{m}^3/\\text{s})$$\n  When a pipe narrows from diameter $D_1$ to $D_2 = D_1 / 2$, area drops by $4$, so fluid speed **quadruples** ($v_2 = 4 v_1$)!\n- **Bernoulli's Equation (Conservation of Energy per Unit Volume):**\n  $$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g y_2 = \\text{constant}$$\n- **The Venturi Effect:**\n  - Where fluid moves faster (constricted section), pressure is **LOWER** ($v \\uparrow \\implies P \\downarrow$).\n- **Torricelli's Law (Draining Tank):**\n  - Fluid exiting an open orifice a distance $h$ below the surface of a large reservoir flows at speed:\n    $$v = \\sqrt{2gh}$$"
      },
      {
        "heading": "6. Official AP Experimental Design Lab: Verifying Archimedes’ Principle (Skill 4.2)",
        "content": "Precision laboratory experiment to measure buoyant force and fluid density:\n\n* **Equipment**:\n  * Force sensor / spring scale; solid aluminum cylinder with volume markings; overflow beaker; catch cup; digital balance.\n* **Procedure & Measurements**:\n  1. Measure weight of cylinder in air: $W_{\\text{real}} = mg$.\n  2. Submerge cylinder progressively into liquid by depth intervals $\\Delta h$, recording apparent weight $W_{\\text{app}}$ on force sensor.\n  3. Buoyant force is the measured apparent weight deficit: $F_B = W_{\\text{real}} - W_{\\text{app}}$.\n  4. Collect displaced liquid volume $V_{\\text{disp}}$ in graduated cylinder and weigh on digital balance: $m_{\\text{liquid}} = \\rho_{\\text{liquid}} V_{\\text{disp}}$.\n* **Data Linearization**:\n  * Theoretical model: $F_B = \\rho_{\\text{fluid}} g V_{\\text{submerged}}$.\n  * Plot measured $F_B$ on vertical axis vs submerged volume $V_{\\text{submerged}}$ on horizontal axis.\n  * The slope of the line equals $\\rho_{\\text{fluid}} g$.\n  * Unknown fluid density is determined: $\\rho_{\\text{fluid}} = \\frac{\\text{slope}}{g}$."
      },
      {
        "heading": "7. Advanced Hydrodynamics: Torricelli’s Law, Venturi Effect & Poiseuille Flow (CED 8.3)",
        "content": "Fluid dynamics derivations and real-world cardiovascular/aerodynamic applications:\n\n* **Torricelli’s Law (Tank Efflux Velocity)**:\n  * A large open water tank of height $H$ has a small drain orifice at depth $h$ below the water surface.\n  * Applying Bernoulli's equation between top surface (point 1) and drain hole (point 2):\n    $$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g y_2$$\n  * Because both points are open to the atmosphere, $P_1 = P_2 = P_{\\text{atm}}$.\n  * Since tank surface area $A_1 \\gg A_2$, continuity requires $v_1 \\approx 0$.\n  * Setting $y_1 - y_2 = h$:\n    $$\\rho g h = \\frac{1}{2}\\rho v_2^2 \\implies v_{\\text{efflux}} = \\sqrt{2gh}$$\n* **The Venturi Effect**:\n  * When an incompressible fluid flows through a constricted pipe section ($A_1 > A_2$), continuity dictates velocity increases ($v_2 > v_1$).\n  * By Bernoulli’s principle, higher kinetic energy requires lower pressure:\n    $$P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2) > 0 \\implies P_2 < P_1$$\n  * Applications: Carburetors, atomizers, arterial stenoses."
      }
    ],
    "workedExamples": [
      {
        "title": "Continuity & Pressure Drop in a Constricted Pipe",
        "topicRef": "CED 8.4 Bernoulli & Continuity Equations",
        "question": "Water ($\\rho = 1000\\text{ kg/m}^3$) flows through a horizontal pipe. At section 1, pipe radius is $r_1 = 0.10\\text{ m}$, pressure is $P_1 = 200\\text{ kPa}$, and speed is $v_1 = 2.0\\text{ m/s}$. The pipe narrows to radius $r_2 = 0.05\\text{ m}$. Calculate (a) speed $v_2$ in the narrow section, and (b) pressure $P_2$.",
        "solutionSteps": [
          "Step 1: Calculate cross-sectional areas: $A_1 = \\pi r_1^2 = \\pi (0.10)^2 = 0.01\\pi\\text{ m}^2$, $A_2 = \\pi (0.05)^2 = 0.0025\\pi\\text{ m}^2$. Area ratio is $\\frac{A_1}{A_2} = 4$.",
          "Step 2: Apply continuity equation: $A_1 v_1 = A_2 v_2 \\implies v_2 = v_1\\left(\\frac{A_1}{A_2}\\right) = (2.0)(4) = 8.0\\text{ m/s}$.",
          "Step 3: Apply Bernoulli equation for horizontal pipe ($y_1 = y_2 = 0$): $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$.",
          "Step 4: Plug in values: $200,000 + \\frac{1}{2}(1000)(2.0)^2 = P_2 + \\frac{1}{2}(1000)(8.0)^2$.",
          "Step 5: $200,000 + 2,000 = P_2 + 32,000 \\implies 202,000 = P_2 + 32,000$.",
          "Step 6: Solve for $P_2$: $P_2 = 170,000\\text{ Pa} = 170\\text{ kPa}$."
        ],
        "finalAnswer": "Speed $v_2 = 8.0\\text{ m/s}$; Pressure $P_2 = 170\\text{ kPa}$.",
        "apScoringTip": "Remember that narrowing the pipe increases fluid speed, which DROPS the internal pressure! Many students incorrectly guess that pressure increases in a constricted pipe."
      }
    ],
    "diagrams": [
      {
        "id": "phys_venturi_tube",
        "title": "Venturi Tube and Pressure Gauges",
        "subtitle": "High Speed Constriction Corresponds to Low Static Pressure",
        "type": "venturi_effect",
        "description": "Horizontal constricted tube showing fluid streamlines packing together in narrow neck and vertical manometer tube showing lower fluid height at constriction.",
        "takeaway": "Streamlines closer together indicate higher speed and LOWER static fluid pressure."
      }
    ],
    "commonTraps": [
      "Assuming water pressure increases at narrow constrictions in a pipe. Pressure DECREASES because kinetic energy increases at the expense of pressure energy (Bernoulli principle).",
      "Confusing gauge pressure with absolute pressure. Gauge pressure is $\\rho gh$; absolute pressure is $P = P_0 + \\rho gh$, where $P_0 = 101.3\\text{ kPa}$ (atmospheric pressure).",
      "Thinking buoyant force depends on how deep a completely submerged object is. Once fully submerged, displaced volume $V_d$ does not change with depth, so $F_b$ remains constant."
    ],
    "cramSheet": [
      "Hydrostatic pressure: $P = P_0 + \\rho g h$. Pressure increases linearly with depth.",
      "Buoyant force: $F_b = \\rho_{\\text{fluid}} V_{\\text{submerged}} g$. Equal to weight of displaced fluid.",
      "Continuity: $A_1 v_1 = A_2 v_2$. Narrowing diameter by half ($1/2$) increases speed by $4\\times$ (area depends on $r^2$).",
      "Bernoulli: Faster moving fluid exerts lower static pressure."
    ]
  }
];
