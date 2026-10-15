// AP Physics 1 Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–8)
// Complete authentic coverage: 49 Levels, 147 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_PHYSICS_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Unit 1: Kinematics",
    "shortTitle": "Unit 1: Kinematics",
    "description": "1D and 2D motion, projectile motion, vector components, kinematic equations, and position/velocity/acceleration graph interpretations",
    "examWeight": "12–18% of AP Exam",
    "biome": {
      "name": "Velocity Vector Ridge & Trajectory Canyon",
      "icon": "🏹",
      "accentColor": "#F59E0B",
      "secondaryColor": "#D97706",
      "groundGradient": "from-amber-100 via-orange-50 to-yellow-100",
      "cardBorder": "border-amber-500",
      "trailColor": "#f59e0b",
      "nodeRing": "ring-amber-400/40",
      "skyTint": "from-amber-50 to-orange-50/30"
    },
    "levels": [
      {
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "phys-u1-l1",
        "topicNumber": "Topic 1.1",
        "name": "Scalars & Vectors in 1D",
        "subtitle": "Distance vs. displacement & 1D vector signs",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph1-l1-q1",
            "stem": "A student walks $40\\text{ m}$ East down a straight hallway, stops, and then walks $30\\text{ m}$ West back toward their locker. Which pair correctly identifies the student’s total distance traveled and the magnitude of their final displacement from the starting point?",
            "options": [
              "Distance = $70\\text{ m}$, Displacement magnitude = $10\\text{ m}$",
              "Distance = $10\\text{ m}$, Displacement magnitude = $70\\text{ m}$",
              "Distance = $50\\text{ m}$, Displacement magnitude = $10\\text{ m}$",
              "Distance = $70\\text{ m}$, Displacement magnitude = $50\\text{ m}$"
            ],
            "correctIndex": 0,
            "explanation": "Distance is a scalar quantity measuring total path length: $40\\text{ m} + 30\\text{ m} = 70\\text{ m}$. Displacement is a vector measuring straight-line change in position: with East positive, $\\Delta x = (+40) + (-30) = +10\\text{ m}$.",
            "distractorTip": "Do not use the Pythagorean theorem $\\sqrt{40^2+30^2}=50\\text{ m}$ for 1D collinear motion."
          },
          {
            "id": "ph1-l1-q2",
            "stem": "A remote-control car moves along the $x$-axis. At $t = 0\\text{ s}$, its position is $x = -5\\text{ m}$. At $t = 4\\text{ s}$, its position is $x = +11\\text{ m}$. What is the average velocity of the car during this $4\\text{ s}$ interval?",
            "options": [
              "+1.5 m/s",
              "+4.0 m/s",
              "-4.0 m/s",
              "+2.75 m/s"
            ],
            "correctIndex": 1,
            "explanation": "Average velocity $v_{avg} = \\frac{\\Delta x}{\\Delta t} = \\frac{x_f - x_i}{t_f - t_i} = \\frac{11 - (-5)}{4 - 0} = \\frac{16}{4} = +4.0\\text{ m/s}$.",
            "distractorTip": "Do not subtract $11 - 5 = 6\\text{ m}$. Minus signs in positions indicate coordinate directions."
          },
          {
            "id": "ph1-l1-q3",
            "stem": "Cart 1 has a 1D velocity of $-8\\text{ m/s}$, while Cart 2 has a velocity of $+5\\text{ m/s}$. Which statement regarding their speeds and velocities along the defined coordinate axis is physically correct?",
            "options": [
              "Both carts have equal speeds because negative signs are ignored in 1D kinematics.",
              "Cart 2 has both a greater speed and a greater velocity than Cart 1.",
              "Cart 1 has a greater speed than Cart 2, but a smaller algebraic velocity along the axis.",
              "Cart 1 must be slowing down, while Cart 2 must be speeding up."
            ],
            "correctIndex": 2,
            "explanation": "Speed is the magnitude of velocity: $|-8| = 8\\text{ m/s} > 5\\text{ m/s}$. However, algebraically on the coordinate line, $-8 < +5$.",
            "distractorTip": "A negative sign signifies direction of motion along the chosen coordinate axis, not lack of speed."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "phys-u1-l2",
        "topicNumber": "Topic 1.2",
        "name": "Displacement, Velocity & Acceleration",
        "subtitle": "Rates of change & criteria for speeding up vs slowing down",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ph1-l2-q1",
            "stem": "An object moves along the $x$-axis according to $x(t) = 3t^2 - 4t + 2$ (in meters). What is the object’s instantaneous velocity at $t = 3\\text{ s}$, and what is its average velocity over $[0\\text{ s}, 3\\text{ s}]$?",
            "options": [
              "Instantaneous: 6 m/s; Average: 9 m/s",
              "Instantaneous: 14 m/s; Average: 14 m/s",
              "Instantaneous: 17 m/s; Average: 5 m/s",
              "Instantaneous: 14 m/s; Average: 5 m/s"
            ],
            "correctIndex": 3,
            "explanation": "Instantaneous: $v(t) = \\frac{dx}{dt} = 6t - 4$. At $t = 3\\text{ s}$, $v(3) = 6(3) - 4 = 14\\text{ m/s}$. Average: $x(0) = 2\\text{ m}$, $x(3) = 3(9) - 4(3) + 2 = 17\\text{ m}$. $\\Delta x = 17 - 2 = 15\\text{ m}$. $v_{avg} = \\frac{15}{3} = 5\\text{ m/s}$.",
            "distractorTip": "Instantaneous velocity is the derivative slope at that exact point; average velocity is the secant slope over the time interval."
          },
          {
            "id": "ph1-l2-q2",
            "stem": "A vehicle moves in the negative $x$-direction ($v_x < 0$). If the vehicle is slowing down, what must be true about its acceleration $a_x$?",
            "options": [
              "$a_x > 0$ (positive direction), opposing the direction of velocity.",
              "$a_x < 0$ (negative direction), matching the direction of velocity.",
              "$a_x = 0$, because slowing down requires zero net acceleration.",
              "The sign of $a_x$ depends on whether the vehicle is to the left or right of origin."
            ],
            "correctIndex": 0,
            "explanation": "An object speeds up when $v$ and $a$ share the same sign. An object slows down when $v$ and $a$ have opposite signs. Since $v_x < 0$, slowing down requires $a_x > 0$.",
            "distractorTip": "Negative acceleration does not always mean slowing down! If $v < 0$ and $a < 0$, the object speeds up in the negative direction."
          },
          {
            "id": "ph1-l2-q3",
            "stem": "A tennis ball is thrown vertically upward into the air. At the exact instant the ball reaches its maximum peak height, what are its instantaneous velocity and acceleration? (Define upward as positive).",
            "options": [
              "Velocity is 0 m/s, and acceleration is 0 m/s²",
              "Velocity is 0 m/s, and acceleration is -9.8 m/s²",
              "Velocity is +9.8 m/s, and acceleration is -9.8 m/s²",
              "Velocity is 0 m/s, and acceleration is +9.8 m/s²"
            ],
            "correctIndex": 1,
            "explanation": "At maximum height, the ball momentarily reverses direction, so $v = 0$. However, downward gravitational pull never ceases, so $a = -g = -9.8\\text{ m/s}^2$.",
            "distractorTip": "Zero velocity does NOT mean zero acceleration! If acceleration were zero at the peak, the ball would float in mid-air."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "phys-u1-l3",
        "topicNumber": "Topic 1.3",
        "name": "Representing Motion (Graphs & UAM)",
        "subtitle": "Slope, area under curves, and kinematic relations",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ph1-l3-q1",
            "stem": "A cart’s velocity vs. time graph shows: from $t = 0$ to $4\\text{ s}$, $v = +6\\text{ m/s}$. From $t = 4\\text{ s}$ to $8\\text{ s}$, $v$ decreases linearly from $+6\\text{ m/s}$ to $-6\\text{ m/s}$ (crossing zero at $t = 6\\text{ s}$). What is the cart’s total displacement over $[0\\text{ s}, 8\\text{ s}]$?",
            "options": [
              "+18 m",
              "+36 m",
              "+24 m",
              "+12 m"
            ],
            "correctIndex": 2,
            "explanation": "Rectangle from 0 to 4s: $4 \\times 6 = +24\\text{ m}$. Triangle from 4 to 6s: $\\frac{1}{2}(2)(+6) = +6\\text{ m}$. Triangle from 6 to 8s: $\\frac{1}{2}(2)(-6) = -6\\text{ m}$. Total displacement $= +24 + 6 - 6 = +24\\text{ m}$.",
            "distractorTip": "Displacement uses signed area: area below the time axis is negative and subtracts from total displacement."
          },
          {
            "id": "ph1-l3-q2",
            "stem": "Car A traveling at initial speed $v_0$ skids to a complete stop over a distance $d$ under constant deceleration $a$. Car B, identical to Car A, is traveling at speed $3v_0$ on the same road surface and applies the same brakes. What distance does Car B skid before stopping?",
            "options": [
              "√3 d",
              "3d",
              "6d",
              "9d"
            ],
            "correctIndex": 3,
            "explanation": "From $v_f^2 = v_0^2 + 2ad$: $0 = v_0^2 - 2ad \\implies d = \\frac{v_0^2}{2a}$. Stopping distance is proportional to the square of velocity ($d \\propto v_0^2$). Tripling speed ($3v_0$) increases stopping distance by $3^2 = 9$ times.",
            "distractorTip": "Kinetic energy and stopping distance scale quadratically ($v^2$), not linearly."
          },
          {
            "id": "ph1-l3-q3",
            "stem": "Ball 1 is dropped from rest from height $H$ and takes time $T$ to hit the ground. Ball 2 is dropped from rest and takes time $2T$ to hit the ground. Neglecting air resistance, from what height was Ball 2 dropped?",
            "options": [
              "4H",
              "2H",
              "8H",
              "√2 H"
            ],
            "correctIndex": 0,
            "explanation": "$H = \\frac{1}{2}gT^2$. For time $2T$: $H_2 = \\frac{1}{2}g(2T)^2 = 4 \\cdot \\left(\\frac{1}{2}gT^2\\right) = 4H$.",
            "distractorTip": "Falling distance is proportional to time squared ($t^2$)."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "phys-u1-l4",
        "topicNumber": "Topic 1.4",
        "name": "Reference Frames & Relative Motion",
        "subtitle": "1D relative velocities and invariance of acceleration",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ph1-l4-q1",
            "stem": "Train A travels East along a straight track at $25\\text{ m/s}$ relative to the ground. Train B travels West along a parallel track at $15\\text{ m/s}$ relative to the ground. What is the velocity of Train B as observed by a passenger inside Train A? (Define East as positive).",
            "options": [
              "+10 m/s (East at 10 m/s)",
              "-40 m/s (West at 40 m/s)",
              "-10 m/s (West at 10 m/s)",
              "+40 m/s (East at 40 m/s)"
            ],
            "correctIndex": 1,
            "explanation": "Relative velocity $v_{B/A} = v_{B/G} - v_{A/G} = (-15) - (+25) = -40\\text{ m/s}$. To a passenger on Train A, Train B appears to approach toward the West at $40\\text{ m/s}$.",
            "distractorTip": "Always use signed vector subtraction: $v_{relative} = v_{target} - v_{observer}$."
          },
          {
            "id": "ph1-l4-q2",
            "stem": "A train travels forward horizontally at a constant speed of $20\\text{ m/s}$ along a straight track. A passenger drops a coin. Observer 1 (seated on the train) and Observer 2 (standing stationary on the platform) both measure the coin’s downward vertical acceleration. How do their measurements compare?",
            "options": [
              "Observer 1 measures 0 m/s² because the train is an inertial frame.",
              "Observer 2 measures a larger acceleration due to the coin's horizontal speed.",
              "Both observers measure the exact same acceleration of 9.8 m/s² downward.",
              "Observer 2 measures an acceleration that depends on the train's speed."
            ],
            "correctIndex": 2,
            "explanation": "Because the train moves at constant velocity, both observers are in inertial reference frames. Acceleration is frame-invariant across all inertial reference frames: $a = g = 9.8\\text{ m/s}^2$ downward for both.",
            "distractorTip": "Constant horizontal velocity does not affect vertical acceleration under gravity."
          },
          {
            "id": "phys1-l4-q3",
            "stem": "Train A moves north at 25 m/s relative to the ground. Train B moves south at 15 m/s relative to the ground on an adjacent parallel track. What is the velocity of Train B relative to an observer seated on Train A?",
            "options": [
              "10 m/s north",
              "40 m/s south",
              "10 m/s south",
              "40 m/s north"
            ],
            "correctIndex": 1,
            "explanation": "Relative velocity vector equation: $\\vec{v}_{B/A} = \\vec{v}_{B/G} - \\vec{v}_{A/G}$. Choosing north as positive: $v_{B/G} = -15\\text{ m/s}$ and $v_{A/G} = +25\\text{ m/s}$. Thus $v_{B/A} = -15 - 25 = -40\\text{ m/s}$, which corresponds to 40 m/s south.",
            "distractorTip": "When moving in opposite directions, relative speed is the sum of their individual speeds: $25 + 15 = 40\\text{ m/s}$."
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "phys-u1-l5",
        "topicNumber": "Topic 1.5",
        "name": "2D Motion & Projectiles",
        "subtitle": "Independent horizontal and vertical components",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ph1-l5-q1",
            "stem": "Sphere A is dropped from rest from a ledge of height $H$. At the exact same instant, identical Sphere B is projected horizontally from the same height with a launch speed $v_0 = 35\\text{ m/s}$. Neglecting air resistance, which sphere strikes the level ground first?",
            "options": [
              "Whichever sphere has greater mass hits first.",
              "Sphere A hits first because its path length is shorter.",
              "Sphere B hits first because its kinetic energy is greater.",
              "Both spheres strike the ground at the exact same instant."
            ],
            "correctIndex": 3,
            "explanation": "Vertical and horizontal motions are completely independent. Both spheres start with $v_{y0} = 0$ and accelerate downward at $g$. The time to fall through vertical height $H$ is $t = \\sqrt{2H/g}$ for both.",
            "distractorTip": "Horizontal velocity has zero effect on the vertical rate of fall."
          },
          {
            "id": "ph1-l5-q2",
            "stem": "A soccer ball is kicked with initial speed $v_0$ at an angle of $60^\\circ$ above horizontal. At the highest point of its parabolic trajectory, what are the magnitude of its velocity vector and the magnitude of its acceleration vector?",
            "options": [
              "Velocity: 0.5 v₀; Acceleration: g",
              "Velocity: 0; Acceleration: g",
              "Velocity: v₀; Acceleration: 0",
              "Velocity: 0.866 v₀; Acceleration: 0"
            ],
            "correctIndex": 0,
            "explanation": "At the apex, vertical velocity is zero ($v_y = 0$), but horizontal velocity remains constant at $v_x = v_0 \\cos 60^\\circ = 0.5 v_0$. Downward acceleration remains $g$ throughout the flight.",
            "distractorTip": "A projectile never has zero velocity at the top unless it was launched straight up ($90^\\circ$)."
          },
          {
            "id": "ph1-l5-q3",
            "stem": "Two projectiles are launched over level ground with identical launch speeds $v_0$. Projectile 1 is launched at $35^\\circ$ above horizontal, while Projectile 2 is launched at $55^\\circ$. Neglecting air resistance, which statement accurately compares their horizontal ranges ($R$) and peak heights ($H$)?",
            "options": [
              "Projectile 2 achieves both a greater horizontal range and a greater height.",
              "Both projectiles achieve the exact same horizontal range (R₁ = R₂), but Projectile 2 reaches a greater maximum height (H₂ > H₁).",
              "Projectile 1 achieves a greater horizontal range because of lower air time.",
              "Both projectiles achieve identical ranges and identical maximum heights."
            ],
            "correctIndex": 1,
            "explanation": "Range on level ground is $R = \\frac{v_0^2 \\sin(2\\theta)}{g}$. Complementary angles ($35^\\circ + 55^\\circ = 90^\\circ$) yield identical ranges because $\\sin(70^\\circ) = \\sin(110^\\circ)$. However, maximum height $H = \\frac{v_0^2 \\sin^2\\theta}{2g}$ increases with launch angle, so $H_{55^\\circ} > H_{35^\\circ}$.",
            "distractorTip": "Complementary angles ($30^\\circ/60^\\circ, 35^\\circ/55^\\circ$) have equal ranges on flat ground."
          }
        ]
      },
      {
        "id": 106,
        "unitIndex": 1,
        "levelNumber": 6,
        "uniqueKey": "phys-u1-l6",
        "topicNumber": "Unit 1 Boss",
        "name": "Apex Kinematics Crucible",
        "subtitle": "Multi-stage rocket flight and elevated cliff projectile",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ph1-l6-q1",
            "stem": "A model rocket blasts off vertically from rest from the launch pad at $t = 0$. Its motor provides a constant upward acceleration of $+4.0\\text{ m/s}^2$ for $10\\text{ s}$, at which instant the fuel is exhausted. The rocket then coasts upward in free fall under gravity ($g = 10\\text{ m/s}^2$ downward) until it reaches its maximum apex. What is the maximum height above the launch pad reached by the rocket?",
            "options": [
              "80 m",
              "200 m",
              "280 m",
              "400 m"
            ],
            "correctIndex": 2,
            "explanation": "Powered Phase: $v_1 = at = (4)(10) = 40\\text{ m/s}$. $y_1 = \\frac{1}{2}at^2 = \\frac{1}{2}(4)(100) = 200\\text{ m}$. Coasting Phase: $v_f^2 = v_1^2 - 2g(\\Delta y_2) \\implies 0 = 1600 - 20\\Delta y_2 \\implies \\Delta y_2 = 80\\text{ m}$. Total maximum height $= y_1 + \\Delta y_2 = 200 + 80 = 280\\text{ m}$.",
            "distractorTip": "Do not forget the powered ascent height ($200\\text{ m}$); the rocket does not start coasting from the ground."
          },
          {
            "id": "ph1-l6-q2",
            "stem": "A catapult on the edge of a cliff $40\\text{ m}$ above a level plain launches a boulder at $v_0 = 20\\text{ m/s}$ at an angle of $30^\\circ$ above horizontal. Using $g = 10\\text{ m/s}^2$, how far horizontally from the base of the cliff does the boulder strike the plain?",
            "options": [
              "10√3 m ≈ 17.3 m",
              "20√3 m ≈ 34.6 m",
              "80 m",
              "40√3 m ≈ 69.3 m"
            ],
            "correctIndex": 3,
            "explanation": "Components: $v_{x0} = 20\\cos 30^\\circ = 10\\sqrt{3}\\text{ m/s}$; $v_{y0} = 20\\sin 30^\\circ = 10\\text{ m/s}$. Vertical: $\\Delta y = -40 = 10t - 5t^2 \\implies 5t^2 - 10t - 40 = 0 \\implies t^2 - 2t - 8 = 0 \\implies (t - 4)(t + 2) = 0 \\implies t = 4\\text{ s}$. Horizontal distance: $X = v_x \\cdot t = (10\\sqrt{3})(4) = 40\\sqrt{3}\\text{ m} \\approx 69.3\\text{ m}$.",
            "distractorTip": "Do not use symmetrical range formulas when the landing surface is below the launch elevation."
          },
          {
            "id": "phys1-l6-q3",
            "stem": "A projectile is launched from ground level with speed $v_0$ at angle $\\theta$ above the horizontal. At the very apex of its parabolic trajectory, what are the projectile's velocity and acceleration?",
            "options": [
              "Velocity is zero; acceleration is zero.",
              "Velocity is $v_0 \\sin\\theta$ upward; acceleration is $g$ downward.",
              "Velocity is $v_0 \\cos\\theta$ horizontal; acceleration is $g$ downward.",
              "Velocity is $v_0$ horizontal; acceleration is zero."
            ],
            "correctIndex": 2,
            "explanation": "At the peak, vertical velocity momentarily becomes zero ($v_y = 0$), but horizontal velocity remains constant at $v_x = v_0 \\cos\\theta$ in the absence of air resistance. Throughout the entire flight, the only force acting is gravity, so acceleration is constantly $g$ directed downward.",
            "distractorTip": "Common AP trap: Acceleration is NEVER zero at the peak of a projectile's flight; gravity continually exerts a downward acceleration of $9.8\\text{ m/s}^2$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Unit 2: Force & Translational Dynamics",
    "shortTitle": "Unit 2: Newton’s Laws",
    "description": "Newton’s three laws, free-body diagrams, static/kinetic friction, coupled systems (Atwood machines), and elevator apparent weight",
    "examWeight": "18–23% of AP Exam",
    "biome": {
      "name": "Dynamical Incline & Tension Spire",
      "icon": "⚙️",
      "accentColor": "#3B82F6",
      "secondaryColor": "#1D4ED8",
      "groundGradient": "from-blue-100 via-indigo-50 to-sky-100",
      "cardBorder": "border-blue-500",
      "trailColor": "#3b82f6",
      "nodeRing": "ring-blue-400/40",
      "skyTint": "from-blue-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "phys-u2-l1",
        "topicNumber": "Topic 2.1",
        "name": "Systems & Center of Mass",
        "subtitle": "Center of mass position and internal forces",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph2-l1-q1",
            "stem": "A system consists of two spheres connected by a light rigid rod along the $x$-axis. Sphere A has mass $2.0\\text{ kg}$ at $x = 0\\text{ m}$. Sphere B has mass $6.0\\text{ kg}$ at $x = 8.0\\text{ m}$. Where is the center of mass located?",
            "options": [
              "x = 6.0 m",
              "x = 4.0 m",
              "x = 2.0 m",
              "x = 5.33 m"
            ],
            "correctIndex": 0,
            "explanation": "$x_{cm} = \\frac{(2)(0) + (6)(8)}{2 + 6} = \\frac{48}{8} = 6.0\\text{ m}$. The center of mass is three times closer to Sphere B because it is three times heavier.",
            "distractorTip": "Do not take the simple midpoint ($4.0\\text{ m}$); mass weighting is required."
          },
          {
            "id": "ph2-l1-q2",
            "stem": "An astronaut and a satellite are at rest in deep space. The astronaut pushes away from the satellite with a force of $40\\text{ N}$ for $2.0\\text{ s}$. What is the acceleration of the center of mass of the combined astronaut-satellite system during this push?",
            "options": [
              "0.286 m/s²",
              "0 m/s²",
              "0.50 m/s²",
              "0.667 m/s²"
            ],
            "correctIndex": 1,
            "explanation": "Newton's Second Law for a system is $\\Sigma \\vec{F}_{ext} = M_{total} \\vec{a}_{cm}$. The push is an internal force. With zero external forces, $\\vec{a}_{cm} = 0\\text{ m/s}^2$.",
            "distractorTip": "Internal forces can never accelerate the center of mass of an isolated system."
          },
          {
            "id": "phys2-l1-q3",
            "stem": "Two blocks of masses $m_1 = 2\\text{ kg}$ and $m_2 = 6\\text{ kg}$ are connected by a compressed, massless spring on a frictionless horizontal floor. When the spring is released, the 2 kg block accelerates to the left at $12\\text{ m/s}^2$. What is the acceleration of the center of mass of the two-block system?",
            "options": [
              "0 m/s²",
              "4 m/s² to the right",
              "3 m/s² to the right",
              "6 m/s² to the left"
            ],
            "correctIndex": 0,
            "explanation": "By Newton's second law for a system, the acceleration of the center of mass depends strictly on external forces: $\\Sigma \\vec{F}_{\\text{ext}} = M_{\\text{total}} \\vec{a}_{\\text{cm}}$. Because the spring force is entirely internal to the two-block system and the floor is frictionless, $\\Sigma \\vec{F}_{\\text{ext}} = 0$, meaning $\\vec{a}_{\\text{cm}} = 0$.",
            "distractorTip": "Internal forces between objects in a system can NEVER accelerate the system's center of mass."
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "phys-u2-l2",
        "topicNumber": "Topic 2.2",
        "name": "Free-Body Diagrams & Normal Force",
        "subtitle": "Identifying contact forces and inclines",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ph2-l2-q1",
            "stem": "A crate rests on the flat bed of a truck accelerating forward along a level road at $3.0\\text{ m/s}^2$ without slipping. In an inertial reference frame, which forces act on the crate?",
            "options": [
              "Downward gravity, upward normal force, and backward kinetic friction.",
              "Downward gravity, upward normal force, forward static friction, and backward inertial force.",
              "Downward gravity, upward normal force, and forward static friction.",
              "Downward gravity and upward normal force only."
            ],
            "correctIndex": 2,
            "explanation": "Only physical interactions belong on an FBD. Forward static friction accelerates the crate forward with the truck ($f_s = ma$). Fictitious inertial forces do not exist in inertial frames.",
            "distractorTip": "Never draw fictitious \"centrifugal\" or \"inertial\" forces on an AP Physics free-body diagram."
          },
          {
            "id": "ph2-l2-q2",
            "stem": "A box of mass $M$ sits on a ramp inclined at angle $\\theta$ above horizontal. A student pushes on the box with a horizontal force $P$ directed into the ramp. What is the normal force $F_N$ exerted by the ramp on the box?",
            "options": [
              "F_N = Mg - P sinθ",
              "F_N = Mg cosθ - P sinθ",
              "F_N = Mg cosθ + P cosθ",
              "F_N = Mg cosθ + P sinθ"
            ],
            "correctIndex": 3,
            "explanation": "Perpendicular to incline: gravity contributes $Mg \\cos\\theta$ inward; horizontal push $P$ contributes $P \\sin\\theta$ inward. Equilibrium perpendicular to surface: $F_N = Mg\\cos\\theta + P\\sin\\theta$.",
            "distractorTip": "Resolve all forces strictly parallel and perpendicular to the inclined plane."
          },
          {
            "id": "phys2-l2-q3",
            "stem": "A block of mass $m$ rests on a rough ramp inclined at an angle $\\theta$ with respect to the horizontal. What is the magnitude of the normal force exerted by the ramp on the block?",
            "options": [
              "$mg$",
              "$mg \\tan\\theta$",
              "$mg \\sin\\theta$",
              "$mg \\cos\\theta$"
            ],
            "correctIndex": 3,
            "explanation": "In a coordinate system aligned with the incline, the block is in equilibrium perpendicular to the ramp surface. The component of gravity perpendicular to the incline is $mg \\cos\\theta$. Balancing forces perpendicular to the incline yields $F_N = mg \\cos\\theta$.",
            "distractorTip": "Perpendicular to the incline: $F_N = mg \\cos\\theta$; Parallel to the incline: gravity component is $mg \\sin\\theta$."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "phys-u2-l3",
        "topicNumber": "Topic 2.3",
        "name": "Newton’s Third Law",
        "subtitle": "Action-reaction pairs and collision forces",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph2-l3-q1",
            "stem": "A heavy $3000\\text{ kg}$ truck collides head-on with a stationary $1000\\text{ kg}$ car. How does the magnitude of the force exerted by the truck on the car compare to that exerted by the car on the truck?",
            "options": [
              "They are exactly equal in magnitude at every instant.",
              "The truck exerts three times greater force because it has three times the mass.",
              "The truck exerts greater force because it was moving.",
              "The car exerts greater force because it experiences greater acceleration."
            ],
            "correctIndex": 0,
            "explanation": "Newton’s Third Law states that interactive forces between two objects are always equal in magnitude and opposite in direction ($F_{A\\to B} = -F_{B\\to A}$), regardless of mass or motion.",
            "distractorTip": "Mass affects acceleration ($a = F/m$), not the magnitude of the interactive contact force."
          },
          {
            "id": "ph2-l3-q2",
            "stem": "A book rests on a table. The Earth exerts a downward gravitational force of $20\\text{ N}$ on the book. What is the Newton’s Third Law reaction partner to this force?",
            "options": [
              "An upward normal force of 20 N exerted by the table on the book.",
              "An upward gravitational force of 20 N exerted by the book on the Earth.",
              "A downward contact force of 20 N exerted by the book on the table.",
              "A downward gravitational force of 20 N exerted by the table on the Earth."
            ],
            "correctIndex": 1,
            "explanation": "Third Law pairs share the identical force type and invert the interacting bodies: (Earth pulls book gravitationally) $\\iff$ (Book pulls Earth gravitationally). The upward normal force is an electromagnetic contact force balancing gravity via Newton’s 1st Law.",
            "distractorTip": "Normal force and gravity on an object are NOT a Newton's 3rd Law pair because they act on the SAME object."
          },
          {
            "id": "phys2-l3-q3",
            "stem": "A massive semi-truck collides head-on with a compact electric car. How does the magnitude of the force exerted by the truck on the car compare to the magnitude of the force exerted by the car on the truck during the impact?",
            "options": [
              "The truck exerts a greater force because of its substantially larger mass.",
              "The forces are exactly equal in magnitude and opposite in direction by Newton's Third Law.",
              "The car exerts a greater force because it experiences a larger acceleration.",
              "The force ratio depends on the initial kinetic energies of the two vehicles."
            ],
            "correctIndex": 1,
            "explanation": "Newton's Third Law states that when object A exerts a force on object B, object B simultaneously exerts an equal and opposite force on object A ($|\\vec{F}_{A \\text{ on } B}| = |\\vec{F}_{B \\text{ on } A}|$). The car experiences a much greater acceleration only because its mass is smaller ($a = F/m$).",
            "distractorTip": "Newton's Third Law action-reaction pairs are ALWAYS equal in magnitude, regardless of the relative masses or velocities of the colliding objects."
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "phys-u2-l4",
        "topicNumber": "Topic 2.4 & 2.5",
        "name": "Newton’s 1st & 2nd Laws (Coupled Systems)",
        "subtitle": "Equilibrium and multi-block tension",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ph2-l4-q1",
            "stem": "An airplane flies in straight, level horizontal flight at constant speed $250\\text{ m/s}$ with forward engine thrust of $95,000\\text{ N}$. What is the magnitude of the net force acting on the airplane?",
            "options": [
              "23,750,000 N",
              "95,000 N forward",
              "0 N",
              "It depends on the aircraft mass."
            ],
            "correctIndex": 2,
            "explanation": "Constant velocity implies zero acceleration ($\\vec{a} = 0$). By $\\Sigma \\vec{F} = m\\vec{a}$, the net force is identically zero ($0\\text{ N}$). Engine thrust is balanced by air drag.",
            "distractorTip": "Constant speed in a straight line always means NET FORCE IS ZERO."
          },
          {
            "id": "ph2-l4-q2",
            "stem": "Block 1 ($2.0\\text{ kg}$) and Block 2 ($3.0\\text{ kg}$) on a frictionless table are connected by a light string. A pull of $15.0\\text{ N}$ is applied to Block 2 to the right. What is the tension in the string connecting Block 1 and Block 2?",
            "options": [
              "7.5 N",
              "9.0 N",
              "15.0 N",
              "6.0 N"
            ],
            "correctIndex": 3,
            "explanation": "System acceleration: $a = \\frac{15}{2 + 3} = 3.0\\text{ m/s}^2$. Tension accelerates only Block 1: $T = m_1 a = (2.0)(3.0) = 6.0\\text{ N}$.",
            "distractorTip": "The internal string tension only needs to accelerate the trailing block behind it."
          },
          {
            "id": "phys2-l4-q3",
            "stem": "In an ideal Atwood machine, two masses $m_1 = 3\\text{ kg}$ and $m_2 = 5\\text{ kg}$ are connected by a light string over a frictionless, massless pulley. What is the magnitude of the downward acceleration of the 5 kg mass?",
            "options": [
              "$0.25 g = 2.45\\text{ m/s}^2$",
              "$0.50 g = 4.90\\text{ m/s}^2$",
              "$0.75 g = 7.35\\text{ m/s}^2$",
              "$1.00 g = 9.80\\text{ m/s}^2$"
            ],
            "correctIndex": 0,
            "explanation": "Applying Newton's second law to the coupled system: $a = \\frac{(m_2 - m_1)g}{m_1 + m_2} = \\frac{(5 - 3)g}{5 + 3} = \\frac{2}{8}g = 0.25g = 2.45\\text{ m/s}^2$.",
            "distractorTip": "Atwood machine acceleration is $a = \\frac{m_2 - m_1}{m_1 + m_2}g$, which is always less than $g$."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "phys-u2-l5",
        "topicNumber": "Topic 2.6",
        "name": "Apparent Weight in Elevators",
        "subtitle": "Normal force during vertical accelerations",
        "difficulty": "Medium",
        "rewardCoins": 35,
        "questions": [
          {
            "id": "ph2-l5-q1",
            "stem": "A $50\\text{ kg}$ student stands on a scale in an elevator. The elevator moves downward and slows down at $2.0\\text{ m/s}^2$. Using $g = 10\\text{ m/s}^2$, what does the scale read?",
            "options": [
              "600 N",
              "400 N",
              "500 N",
              "100 N"
            ],
            "correctIndex": 0,
            "explanation": "Moving downward and slowing down means acceleration is directed UPWARD ($a = +2.0\\text{ m/s}^2$). Equation: $F_N - mg = ma \\implies F_N = m(g + a) = 50(10 + 2) = 600\\text{ N}$.",
            "distractorTip": "\"Downward motion\" does NOT mean downward acceleration! Slowing down reverses the acceleration direction."
          },
          {
            "id": "ph2-l5-q2",
            "stem": "A student of mass $m$ stands on a bathroom scale inside an elevator that is moving DOWNWARD while SLOWING DOWN with constant acceleration of magnitude $a = 0.20g$. What is the scale reading?",
            "options": [
              "$0.80 mg$",
              "$1.20 mg$",
              "$1.00 mg$",
              "$0.20 mg$"
            ],
            "correctIndex": 1,
            "explanation": "Moving downward while slowing down means the acceleration vector is directed UPWARD. By Newton's 2nd Law: $\\Sigma F_y = F_N - mg = +ma \\implies F_N = m(g + a) = m(g + 0.20g) = 1.20 mg$. The scale reading equals the normal force, which is $1.20 mg$.",
            "distractorTip": "Direction of velocity does NOT dictate net force! Slowing down means acceleration opposes velocity (points UP)."
          },
          {
            "id": "phys2-l5-q3",
            "stem": "A 60 kg passenger stands on a digital bathroom scale inside an elevator. If the elevator is moving downward while slowing down at an acceleration of $2.0\\text{ m/s}^2$, what reading does the scale show? (Use $g = 9.8\\text{ m/s}^2$)",
            "options": [
              "468 N",
              "588 N",
              "708 N",
              "120 N"
            ],
            "correctIndex": 2,
            "explanation": "Moving downward while slowing down means the acceleration vector points UPWARD ($a = +2.0\\text{ m/s}^2$). Newton's second law: $F_N - mg = ma \\implies F_N = m(g + a) = 60(9.8 + 2.0) = 60(11.8) = 708\\text{ N}$. The scale reads higher than normal weight.",
            "distractorTip": "Slowing down while moving downward requires an UPWARD net force and upward acceleration, making apparent weight ($F_N$) greater than true weight."
          }
        ]
      },
      {
        "id": 206,
        "unitIndex": 2,
        "levelNumber": 6,
        "uniqueKey": "phys-u2-l6",
        "topicNumber": "Topic 2.7",
        "name": "Static & Kinetic Friction",
        "subtitle": "Friction thresholds and angle of repose",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ph2-l6-q1",
            "stem": "A $10\\text{ kg}$ box sits on a floor ($\\mu_s = 0.50$, $\\mu_k = 0.30$). A horizontal push of $35\\text{ N}$ is applied. Using $g = 10\\text{ m/s}^2$, what is the friction force acting on the box?",
            "options": [
              "30 N",
              "50 N",
              "35 N",
              "0 N"
            ],
            "correctIndex": 2,
            "explanation": "Max static friction $f_{s,max} = \\mu_s mg = (0.5)(10)(10) = 50\\text{ N}$. Since applied force $35\\text{ N} < 50\\text{ N}$, the box does not budge, and static friction balances the push: $f_s = 35\\text{ N}$.",
            "distractorTip": "Static friction is an inequality ($f_s \\le \\mu_s F_N$). It only reaches maximum when slipping is imminent."
          },
          {
            "id": "ph2-l6-q2",
            "stem": "A block rests on an incline whose angle $\\theta$ is slowly increased. If $\\mu_s = 0.75$, at what angle will the block first slide?",
            "options": [
              "The angle depends on the mass of the block.",
              "θ = sin⁻¹(0.75) ≈ 48.6°",
              "θ = cos⁻¹(0.75) ≈ 41.4°",
              "θ = tan⁻¹(0.75) ≈ 36.9°"
            ],
            "correctIndex": 3,
            "explanation": "At slip threshold: $mg \\sin\\theta = \\mu_s mg \\cos\\theta \\implies \\tan\\theta = \\mu_s \\implies \\theta = \\tan^{-1}(0.75) \\approx 36.9^\\circ$. Mass cancels.",
            "distractorTip": "Angle of repose depends strictly on the coefficient of friction, independent of mass."
          },
          {
            "id": "phys2-l6-q3",
            "stem": "A horizontal pulling force of 30 N is applied to a 10 kg crate at rest on a horizontal surface where $\\mu_s = 0.40$ and $\\mu_k = 0.25$. What is the magnitude of the friction force acting on the crate? (Use $g = 9.8\\text{ m/s}^2$)",
            "options": [
              "24.5 N",
              "39.2 N",
              "0 N",
              "30 N"
            ],
            "correctIndex": 3,
            "explanation": "Maximum static friction is $f_{s,\\text{max}} = \\mu_s F_N = 0.40(10)(9.8) = 39.2\\text{ N}$. Because the applied horizontal force of 30 N is less than $f_{s,\\text{max}}$ (30 N < 39.2 N), the crate does NOT move. By Newton's first law, static friction matches the applied force exactly: $f_s = 30\\text{ N}$.",
            "distractorTip": "Static friction is an adjustable force that equals the applied force up to its maximum threshold: $f_s = F_{\\text{applied}}$ when not slipping."
          }
        ]
      },
      {
        "id": 207,
        "unitIndex": 2,
        "levelNumber": 7,
        "uniqueKey": "phys-u2-l7",
        "topicNumber": "Topic 2.8",
        "name": "Circular Motion Dynamics",
        "subtitle": "Centripetal force on flat and vertical curves",
        "difficulty": "Hard",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "ph2-l7-q1",
            "stem": "A car of mass $m$ rounds an unbanked flat curve of radius $R = 80\\text{ m}$ ($\\mu_s = 0.50$, $g = 10\\text{ m/s}^2$). What is the maximum speed without skidding?",
            "options": [
              "20 m/s",
              "40 m/s",
              "14.1 m/s",
              "400 m/s"
            ],
            "correctIndex": 0,
            "explanation": "Static friction provides centripetal force: $\\mu_s mg = \\frac{mv^2}{R} \\implies v = \\sqrt{\\mu_s g R} = \\sqrt{(0.5)(10)(80)} = \\sqrt{400} = 20\\text{ m/s}$.",
            "distractorTip": "Centripetal force is not a new physical force; here it is provided by static friction between tires and road."
          },
          {
            "id": "ph2-l7-q2",
            "stem": "A ball of mass $m$ swings through the lowest point of a vertical circle of radius $L$ at speed $v_b$. What is the string tension at this bottom point?",
            "options": [
              "T = m v_b² / L - mg",
              "T = m v_b² / L + mg",
              "T = m v_b² / L",
              "T = mg"
            ],
            "correctIndex": 1,
            "explanation": "At the bottom: $\\Sigma F_{radial} = T - mg = \\frac{mv_b^2}{L} \\implies T = \\frac{mv_b^2}{L} + mg$. Tension must support gravity and supply centripetal acceleration.",
            "distractorTip": "Tension is at its absolute maximum at the bottom of a vertical circular loop."
          },
          {
            "id": "phys2-l7-q3",
            "stem": "A race car travels at constant speed $v$ around a flat, unbanked circular track of radius $R$. What provides the centripetal force required to keep the car moving in a circle?",
            "options": [
              "The normal force perpendicular to the road.",
              "Static friction directed radially inward toward the center of the track.",
              "Kinetic friction directed tangentially against the car's velocity.",
              "The engine's forward drive force."
            ],
            "correctIndex": 1,
            "explanation": "Because the tires are rolling without skidding, the contact patch between tire and pavement is instantaneously at rest. Therefore, static friction directed perpendicular to motion (radially inward toward the center of the circle) provides the necessary centripetal force $f_s = m v^2 / R$.",
            "distractorTip": "Centripetal force is not a new physical force; on a flat curve, it is provided by STATIC friction pointing inward toward the center."
          }
        ]
      },
      {
        "id": 208,
        "unitIndex": 2,
        "levelNumber": 8,
        "uniqueKey": "phys-u2-l8",
        "topicNumber": "Unit 2 Boss",
        "name": "Apex Dynamics Crucible",
        "subtitle": "Incline Atwood machine and conical pendulum",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ph2-l8-q1",
            "stem": "Block A ($4.0\\text{ kg}$) on a frictionless $30^\\circ$ incline is connected over an ideal pulley to hanging Block B ($6.0\\text{ kg}$). Using $g = 10\\text{ m/s}^2$, what is the acceleration of the system?",
            "options": [
              "5.0 m/s²",
              "2.0 m/s²",
              "4.0 m/s²",
              "1.0 m/s²"
            ],
            "correctIndex": 2,
            "explanation": "Driving force: $m_B g = (6)(10) = 60\\text{ N}$. Opposing gravity component: $m_A g \\sin 30^\\circ = (4)(10)(0.5) = 20\\text{ N}$. Net force: $60 - 20 = 40\\text{ N}$. Total mass: $4 + 6 = 10\\text{ kg}$. Acceleration $a = \\frac{40}{10} = 4.0\\text{ m/s}^2$.",
            "distractorTip": "Only the hanging mass provides full $mg$; the mass on the incline only pulls along the string with $mg \\sin\\theta$."
          },
          {
            "id": "ph2-l8-q2",
            "stem": "A conical pendulum bob of mass $0.50\\text{ kg}$ swings in a horizontal circle with the string at $60^\\circ$ to the vertical ($g = 10\\text{ m/s}^2$, $\\cos 60^\\circ = 0.50$). What is the string tension?",
            "options": [
              "2.5 N",
              "5.0 N",
              "8.66 N",
              "10.0 N"
            ],
            "correctIndex": 3,
            "explanation": "Vertical equilibrium: $T \\cos 60^\\circ = mg \\implies T(0.50) = (0.50)(10) = 5.0\\text{ N} \\implies T = 10.0\\text{ N}$.",
            "distractorTip": "The vertical component of tension balances gravity, while the horizontal component provides centripetal acceleration."
          },
          {
            "id": "phys2-l8-q3",
            "stem": "A conical pendulum consists of a bob of mass $m$ attached to a light string of length $L$ swinging in a horizontal circle at constant speed. What is the vertical component of the string's tension force?",
            "options": [
              "It must equal $mg$ to balance the gravitational force.",
              "It equals the centripetal force $m v^2 / r$.",
              "It equals zero because motion is purely horizontal.",
              "It equals $m(g + v^2/r)$."
            ],
            "correctIndex": 0,
            "explanation": "Because the bob moves in a horizontal plane, there is zero vertical acceleration ($a_y = 0$). By Newton's second law in the vertical direction, the upward vertical component of tension must exactly balance the downward weight: $T \\cos\\theta = mg$.",
            "distractorTip": "Separate conical pendulum forces: $T \\cos\\theta = mg$ (vertical balance); $T \\sin\\theta = m v^2/r$ (inward centripetal force)."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Unit 3: Work, Energy & Power",
    "shortTitle": "Unit 3: Energy",
    "description": "Work done by constant and variable forces, Work-Energy theorem, kinetic and potential energies, conservation of mechanical energy in open/closed systems, and power",
    "examWeight": "12–18% of AP Exam",
    "biome": {
      "name": "Conservation Canopy & Potential Peaks",
      "icon": "⚡",
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
        "id": 301,
        "unitIndex": 3,
        "levelNumber": 1,
        "uniqueKey": "phys-u3-l1",
        "topicNumber": "Topic 3.1",
        "name": "Work & Force-Distance Graphs",
        "subtitle": "Work as area under F vs. x curve & scalar nature of work",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph3-l1-q1",
            "stem": "A variable horizontal force $F(x) = 4x$ (in Newtons) acts on a block as it moves along the $x$-axis from $x = 0$ to $x = 3.0\\text{ m}$. What is the total work done by the force on the block?",
            "options": [
              "$18\\text{ J}$",
              "$12\\text{ J}$",
              "$36\\text{ J}$",
              "$6\\text{ J}$"
            ],
            "correctIndex": 0,
            "explanation": "Work is the area under the force-position curve: $W = \\int_0^3 4x\\,dx = [2x^2]_0^3 = 2(3)^2 - 0 = 18\\text{ J}$. Graphically, it is a triangle of base $3\\text{ m}$ and height $12\\text{ N}$: $\\text{Area} = \\frac{1}{2}(3)(12) = 18\\text{ J}$.",
            "distractorTip": "Do not simply multiply $F_{max} \\times d = 12 \\times 3 = 36\\text{ J}$! For a linearly varying force, work is the triangular area $\\frac{1}{2} F_{max} d$."
          },
          {
            "id": "ph3-l1-q2",
            "stem": "A student carries a heavy $15\\text{ kg}$ backpack while walking forward at a constant horizontal speed of $1.2\\text{ m/s}$ along a flat level corridor for $20\\text{ m}$. What is the total work done by the student’s vertical lifting force on the backpack during this displacement?",
            "options": [
              "$300\\text{ J}$",
              "$0\\text{ J}$",
              "$2940\\text{ J}$",
              "$180\\text{ J}$"
            ],
            "correctIndex": 1,
            "explanation": "Work is defined as $W = F d \\cos\\theta$. The upward lifting force is perpendicular ($\theta = 90^\\circ$) to the horizontal displacement. Since $\\cos(90^\\circ) = 0$, the lifting force does zero mechanical work on the backpack.",
            "distractorTip": "Even if carrying a load feels exhausting, no physical work is done if force and displacement are perpendicular ($\theta = 90^\\circ$)."
          },
          {
            "id": "phys3-l1-q3",
            "stem": "A variable horizontal force $F(x) = 4x$ (where $F$ is in newtons and $x$ is in meters) acts on a box moving from $x = 0$ to $x = 3\\text{ m}$. What is the total work done by this force?",
            "options": [
              "12 J",
              "36 J",
              "18 J",
              "24 J"
            ],
            "correctIndex": 2,
            "explanation": "Work is the area under the force-position graph: $W = \\int_0^3 F(x) \\, dx = \\int_0^3 4x \\, dx = [2x^2]_0^3 = 2(3)^2 = 18\\text{ J}$. Alternatively, area of triangle = $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(3)(12) = 18\\text{ J}$.",
            "distractorTip": "Work from a force-distance graph is the AREA under the curve, NOT simply $F_{\\text{final}} \\times d$."
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "phys-u3-l2",
        "topicNumber": "Topic 3.2",
        "name": "Kinetic Energy & Work-Energy Theorem",
        "subtitle": "Net work equals change in kinetic energy (W_net = ΔK)",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph3-l2-q1",
            "stem": "A $2.0\\text{ kg}$ object moving at $4.0\\text{ m/s}$ experiences a constant net force that performs $+33\\text{ J}$ of net work on it. What is the final speed of the object?",
            "options": [
              "$9.0\\text{ m/s}$",
              "$5.7\\text{ m/s}$",
              "$7.0\\text{ m/s}$",
              "$4.8\\text{ m/s}$"
            ],
            "correctIndex": 2,
            "explanation": "Initial kinetic energy is $K_i = \\frac{1}{2}mv_i^2 = \\frac{1}{2}(2.0)(4.0)^2 = 16\\text{ J}$. By the Work-Energy Theorem, $K_f = K_i + W_{net} = 16\\text{ J} + 33\\text{ J} = 49\\text{ J}$. Thus, $v_f = \\sqrt{\\frac{2 K_f}{m}} = \\sqrt{\\frac{2(49)}{2.0}} = 7.0\\text{ m/s}$.",
            "distractorTip": "Remember: $W_{net}$ directly changes $K = \\frac{1}{2}mv^2$, not speed linearly."
          },
          {
            "id": "ph3-l2-q2",
            "stem": "A car traveling at initial speed $v$ skids to a complete stop over a distance $d$ on a level asphalt road. If the same car travels at speed $3v$ on the identical road surface, what is its minimum stopping distance under maximum braking?",
            "options": [
              "$27d$",
              "$3d$",
              "$6d$",
              "$9d$"
            ],
            "correctIndex": 3,
            "explanation": "By the Work-Energy Theorem: $W_{net} = -f_k d = 0 - \\frac{1}{2}mv^2 \\implies d = \\frac{mv^2}{2f_k} \\propto v^2$. Since stopping distance is proportional to the square of velocity, tripling the speed increases stopping distance by $3^2 = 9$ times.",
            "distractorTip": "A classic AP exam question: stopping distance scales with $v^2$, NOT with $v$!"
          },
          {
            "id": "phys3-l2-q3",
            "stem": "If a car's speed increases from $10\\text{ m/s}$ to $30\\text{ m/s}$, by what factor does its kinetic energy increase?",
            "options": [
              "Factor of 3",
              "Factor of 6",
              "Factor of 20",
              "Factor of 9"
            ],
            "correctIndex": 3,
            "explanation": "Kinetic energy is proportional to the square of velocity: $K = \\frac{1}{2}mv^2$. Since speed triples ($30 / 10 = 3$), kinetic energy increases by $3^2 = 9$.",
            "distractorTip": "Kinetic energy scales with the SQUARE of speed: doubling speed quadruples $K$; tripling speed multiplies $K$ by 9."
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "phys-u3-l3",
        "topicNumber": "Topic 3.3",
        "name": "Potential Energy & Defined Systems",
        "subtitle": "Gravitational/elastic potential energy and system boundaries",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph3-l3-q1",
            "stem": "An ideal spring stores elastic potential energy $U_0$ when compressed by a distance $x$. If the compression distance is doubled to $2x$, what is the new stored potential energy in terms of $U_0$?",
            "options": [
              "$4U_0$",
              "$2U_0$",
              "$8U_0$",
              "$\\sqrt{2}U_0$"
            ],
            "correctIndex": 0,
            "explanation": "Elastic potential energy is $U_s = \\frac{1}{2}kx^2$. Because energy depends quadratically on displacement, doubling compression ($x \\to 2x$) scales potential energy by $2^2 = 4U_0$.",
            "distractorTip": "Spring force scales linearly ($F = kx$), but spring energy scales quadratically ($U = \\frac{1}{2}kx^2$)."
          },
          {
            "id": "ph3-l3-q2",
            "stem": "A ball is dropped from a roof. If the defined system consists ONLY of the ball (excluding Earth), which statement accurately describes the energy transfer as the ball falls?",
            "options": [
              "The ball’s gravitational potential energy converts into kinetic energy.",
              "Gravity does positive external work on the ball, increasing the ball’s kinetic energy; the system contains no gravitational potential energy.",
              "Total mechanical energy of the ball is conserved because gravity is a conservative force.",
              "The ball does negative work on Earth, leaving total system energy at zero."
            ],
            "correctIndex": 1,
            "explanation": "Potential energy is an internal property of a multi-body interacting system. If the system is defined as \"Ball Only,\" Earth is external, and gravity is an external force doing positive work $W_{ext} = mg\\Delta y$ on the ball to increase its kinetic energy.",
            "distractorTip": "AP Trap: Potential energy ONLY exists if both interacting bodies (e.g. Ball + Earth) are included inside the system definition!"
          },
          {
            "id": "phys3-l3-q3",
            "stem": "Why can gravitational potential energy only be defined for a SYSTEM containing at least two interacting objects (e.g., block + Earth), rather than for an isolated object alone?",
            "options": [
              "Because isolated objects possess infinite internal thermal energy.",
              "Because potential energy is stored in the gravitational field generated by the mutual interaction between the object and the Earth.",
              "Because work cannot be calculated in non-inertial reference frames.",
              "Because gravity is a non-conservative force in open systems."
            ],
            "correctIndex": 1,
            "explanation": "Potential energy is an energy of configuration or position within a force field. It requires a mutual interaction force between two or more objects (such as Earth and a block). An isolated single object has no gravitational field interaction with itself, so potential energy belongs to the Earth-object system.",
            "distractorTip": "AP Physics 1 core concept: Potential energy belongs strictly to a multi-object SYSTEM (e.g. Earth + Ball), NEVER to a single isolated object."
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "phys-u3-l4",
        "topicNumber": "Topic 3.4",
        "name": "Conservation of Mechanical Energy",
        "subtitle": "Conservative vs non-conservative forces in closed systems",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph3-l4-q1",
            "stem": "A roller coaster car of mass $m$ coasts without friction around a circular vertical loop of radius $R$. What is the minimum release height $h_{min}$ above the bottom of the loop from which the car can be released from rest and successfully maintain contact with the track at the apex of the loop?",
            "options": [
              "$3.0 R$",
              "$2.0 R$",
              "$2.5 R$",
              "$1.5 R$"
            ],
            "correctIndex": 2,
            "explanation": "At the top of the loop, the minimum speed to maintain contact occurs when normal force $F_N = 0$, so $mg = \\frac{mv_{top}^2}{R} \\implies v_{top}^2 = gR$. By energy conservation from release height $h$: $mgh = mg(2R) + \\frac{1}{2}m v_{top}^2 = 2mgR + \\frac{1}{2}mgR = 2.5 mgR \\implies h = 2.5 R$.",
            "distractorTip": "Students frequently choose $2.0R$ forgetting that the car cannot have zero speed at the top—it must have speed $v_{top} = \\sqrt{gR}$ to not fall off!"
          },
          {
            "id": "ph3-l4-q2",
            "stem": "A simple pendulum consisting of a bob of mass $m$ on a string of length $L$ is released from rest at an initial angle $\\theta_0$ with the vertical. What is the tension $T$ in the string as the bob swings through its lowest vertical position?",
            "options": [
              "$3mg\\sin\\theta_0$",
              "$mg\\cos\\theta_0$",
              "$mg$",
              "$mg(3 - 2\\cos\\theta_0)$"
            ],
            "correctIndex": 3,
            "explanation": "At the lowest point, $mgh = mgL(1 - \\cos\\theta_0) = \\frac{1}{2}mv^2 \\implies \\frac{mv^2}{L} = 2mg(1 - \\cos\\theta_0)$. Newton's 2nd Law in the radial direction gives $T - mg = \\frac{mv^2}{L} \\implies T = mg + 2mg(1 - \\cos\\theta_0) = mg(3 - 2\\cos\\theta_0)$.",
            "distractorTip": "Tension at the lowest point is NOT simply $mg$; it must provide both the gravitational support AND the centripetal acceleration $\\frac{mv^2}{L}$."
          },
          {
            "id": "phys3-l4-q3",
            "stem": "A block of mass $m$ is compressed a distance $x$ against a spring of spring constant $k$ on a frictionless floor. When released, the block slides up a frictionless incline. What maximum vertical height $h$ does the block reach?",
            "options": [
              "$h = \\frac{kx^2}{2mg}$",
              "$h = \\frac{kx}{mg}$",
              "$h = \\frac{kx^2}{mg}$",
              "$h = \\frac{k^2 x}{2mg}$"
            ],
            "correctIndex": 0,
            "explanation": "By conservation of mechanical energy for the block-spring-Earth system: initial elastic potential energy equals final gravitational potential energy at maximum height: $\\frac{1}{2}kx^2 = mgh \\implies h = \\frac{kx^2}{2mg}$.",
            "distractorTip": "Equate $\\frac{1}{2}kx^2 = mgh$ and solve directly for vertical height $h$."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "phys-u3-l5",
        "topicNumber": "Topic 3.5",
        "name": "Power & Energy Transfer Rate",
        "subtitle": "P = W/Δt = F·v and mechanical efficiency",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph3-l5-q1",
            "stem": "An electric motor lifts a $300\\text{ kg}$ elevator cab upward at a constant vertical speed of $2.0\\text{ m/s}$. Assuming $g = 9.8\\text{ m/s}^2$ and zero frictional losses, what minimum mechanical power must the motor deliver?",
            "options": [
              "$5.88\\text{ kW}$",
              "$2.94\\text{ kW}$",
              "$11.76\\text{ kW}$",
              "$600\\text{ W}$"
            ],
            "correctIndex": 0,
            "explanation": "Power is $P = F v = (mg)v = (300\\text{ kg})(9.8\\text{ m/s}^2)(2.0\\text{ m/s}) = 5880\\text{ W} = 5.88\\text{ kW}$.",
            "distractorTip": "When moving at constant velocity, lifting force equals weight $mg$, so $P = mg v$."
          },
          {
            "id": "ph3-l5-q2",
            "stem": "A sports car of mass $m$ accelerates from rest to speed $v$ in elapsed time $t_1$ under constant engine power $P$. Neglecting drag and friction, what is the speed of the car after elapsed time $t_2 = 4t_1$?",
            "options": [
              "$4v$",
              "$2v$",
              "$\\sqrt{2}v$",
              "$16v$"
            ],
            "correctIndex": 1,
            "explanation": "Work delivered under constant power is $W = Pt = \\Delta K = \\frac{1}{2}mv^2$. Thus, $v = \\sqrt{\\frac{2Pt}{m}} \\propto \\sqrt{t}$. Quadrupling the time ($4t_1$) multiplies speed by $\\sqrt{4} = 2v$.",
            "distractorTip": "Under constant power, velocity scales with $\\sqrt{t}$, whereas under constant acceleration, velocity scales linearly with $t$."
          },
          {
            "id": "phys3-l5-q3",
            "stem": "An electric motor delivers a constant power of 1500 W while lifting a 50 kg load vertically at constant speed. What is the lifting speed? (Use $g = 10\\text{ m/s}^2$)",
            "options": [
              "1.5 m/s",
              "0.3 m/s",
              "3.0 m/s",
              "30 m/s"
            ],
            "correctIndex": 2,
            "explanation": "At constant speed, lifting force equals weight: $F = mg = 50(10) = 500\\text{ N}$. Power is related to force and velocity by $P = F v \\implies v = P / F = 1500 / 500 = 3.0\\text{ m/s}$.",
            "distractorTip": "Power formula: $P = \\frac{W}{\\Delta t} = F v$ when moving at constant speed."
          }
        ]
      },
      {
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "phys-u3-l6",
        "topicNumber": "Unit 3 Boss",
        "name": "Apex Energy Crucible",
        "subtitle": "Multi-stage energy transformations: Gravity, friction, and springs",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ph3-l6-q1",
            "stem": "A $2.0\\text{ kg}$ block is released from rest from height $h = 5.0\\text{ m}$ on a frictionless curved ramp. At the bottom, it slides across a rough horizontal patch of length $d = 3.0\\text{ m}$ with coefficient of kinetic friction $\\mu_k = 0.20$, and then strikes an uncompressed horizontal spring ($k = 400\\text{ N/m}$). Using $g = 9.8\\text{ m/s}^2$, what is the maximum compression of the spring?",
            "options": [
              "$0.52\\text{ m}$",
              "$0.70\\text{ m}$",
              "$0.66\\text{ m}$",
              "$0.85\\text{ m}$"
            ],
            "correctIndex": 2,
            "explanation": "Initial mechanical energy: $E_i = mgh = (2.0)(9.8)(5.0) = 98.0\\text{ J}$. Work done by friction across the rough patch: $W_{f} = -\\mu_k mg d = -(0.20)(2.0)(9.8)(3.0) = -11.76\\text{ J}$. Energy remaining when striking the spring: $E_{rem} = 98.0 - 11.76 = 86.24\\text{ J}$. At maximum compression: $\\frac{1}{2}kx_{max}^2 = 86.24 \\implies x_{max} = \\sqrt{\\frac{2(86.24)}{400}} = \\sqrt{0.4312} \\approx 0.657\\text{ m} \\approx 0.66\\text{ m}$.",
            "distractorTip": "Account for thermal energy dissipated by friction before equating remaining kinetic energy to elastic spring potential energy."
          },
          {
            "id": "ph3-l6-q2",
            "stem": "A block of mass $m$ is placed on top of a vertical spring (spring constant $k$) and compressed downward by a distance $y$ below its relaxed length. When released from rest, the block shoots upward into the air. What is the maximum vertical height $H$ reached by the block above its point of release?",
            "options": [
              "$\\frac{ky^2}{2m}$",
              "$\\frac{ky^2}{mg}$",
              "$\\frac{ky}{2mg}$",
              "$\\frac{ky^2}{2mg}$"
            ],
            "correctIndex": 3,
            "explanation": "At the release point, the block has elastic potential energy $U_s = \\frac{1}{2}ky^2$ and zero kinetic energy. At the highest point, the block is momentarily at rest, so all initial elastic energy has converted into gravitational potential energy relative to the release point: $mgH = \\frac{1}{2}ky^2 \\implies H = \\frac{ky^2}{2mg}$.",
            "distractorTip": "Notice the dimensions: $[k][y]^2 = \\text{Energy}$, $[m][g] = \\text{Force}$, and $\\text{Energy}/\\text{Force} = \\text{Distance}$."
          },
          {
            "id": "phys3-l6-q3",
            "stem": "A conservative force field has potential energy function $U(x) = 5x^2 - 20x$. At what position $x$ is the force acting on the particle equal to zero?",
            "options": [
              "$x = 4\\text{ m}$",
              "$x = 0\\text{ m}$",
              "$x = 10\\text{ m}$",
              "$x = 2\\text{ m}$"
            ],
            "correctIndex": 3,
            "explanation": "Force is the negative derivative of potential energy: $F(x) = -\\frac{dU}{dx} = -(10x - 20) = -10x + 20$. Setting $F(x) = 0 \\implies -10x + 20 = 0 \\implies x = 2\\text{ m}$.",
            "distractorTip": "Force is zero at the local extrema (minima or maxima) of the potential energy curve: $F = -dU/dx = 0$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Unit 4: Linear Momentum",
    "shortTitle": "Unit 4: Momentum",
    "description": "Linear momentum, impulse-momentum theorem, force-time graphs, conservation of linear momentum, elastic vs. inelastic collisions, and 2D collision vector components",
    "examWeight": "12–18% of AP Exam",
    "biome": {
      "name": "Impact Crater & Impulse Canyon",
      "icon": "💥",
      "accentColor": "#EC4899",
      "secondaryColor": "#DB2777",
      "groundGradient": "from-pink-100 via-rose-50 to-red-100",
      "cardBorder": "border-pink-500",
      "trailColor": "#ec4899",
      "nodeRing": "ring-pink-400/40",
      "skyTint": "from-pink-50 to-rose-50/30"
    },
    "levels": [
      {
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "phys-u4-l1",
        "topicNumber": "Topic 4.1",
        "name": "Momentum & Impulse",
        "subtitle": "p = mv and J = Δp = F_avg Δt",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph4-l1-q1",
            "stem": "A $0.20\\text{ kg}$ rubber ball traveling horizontally at $+10\\text{ m/s}$ strikes a rigid vertical wall and rebounds horizontally at $-8.0\\text{ m/s}$. What is the magnitude of the impulse delivered to the ball by the wall?",
            "options": [
              "$3.6\\text{ N}\\cdot\\text{s}$",
              "$0.40\\text{ N}\\cdot\\text{s}$",
              "$1.8\\text{ N}\\cdot\\text{s}$",
              "$2.0\\text{ N}\\cdot\\text{s}$"
            ],
            "correctIndex": 0,
            "explanation": "Impulse equals change in linear momentum: $J = \\Delta p = m(v_f - v_i) = (0.20\\text{ kg})(-8.0 - 10.0) = (0.20)(-18.0) = -3.6\\text{ N}\\cdot\\text{s}$. The magnitude of the impulse is $3.6\\text{ N}\\cdot\\text{s}$.",
            "distractorTip": "Do not subtract the speeds ($10 - 8 = 2$); momentum is a vector! Rebounding means you add magnitudes: $\\Delta v = 18\\text{ m/s}$."
          },
          {
            "id": "ph4-l1-q2",
            "stem": "Automobile airbags and front crumple zones are designed to enhance passenger survival during high-speed front-end collisions. From an impulse-momentum perspective, how do crumple zones reduce passenger injury?",
            "options": [
              "They decrease the total change in momentum $\\Delta p$ required to stop the passenger.",
              "They increase the duration $\\Delta t$ over which the passenger’s momentum is brought to zero, thereby drastically reducing the average net impact force $F_{avg}$.",
              "They convert linear momentum into gravitational potential energy.",
              "They create a vacuum that eliminates atmospheric pressure on the vehicle."
            ],
            "correctIndex": 1,
            "explanation": "Since the passenger starts at highway speed and stops, the total momentum change $\\Delta p$ is fixed. By the Impulse-Momentum Theorem $J = \\Delta p = F_{avg} \\Delta t$, increasing contact time $\\Delta t$ proportionally reduces the lethal average force $F_{avg}$ exerted on human occupants.",
            "distractorTip": "Remember: $\\Delta p$ remains identical whether you hit an airbag or a brick wall; the airbag stretches the time $\\Delta t$ to minimize $F_{avg}$."
          },
          {
            "id": "phys4-l1-q3",
            "stem": "Why do modern automobiles feature crumple zones that collapse during a collision?",
            "options": [
              "To decrease the total change in momentum required to stop the car.",
              "To lengthen the time duration of the impact, thereby reducing the average force experienced by passengers.",
              "To convert inelastic collisions into perfectly elastic collisions.",
              "To increase the vehicle's rotational inertia."
            ],
            "correctIndex": 1,
            "explanation": "By the impulse-momentum theorem, $J = \\Delta p = F_{\\text{avg}} \\Delta t$. To bring a moving car to rest, $\\Delta p$ is fixed. Extending the collision time $\\Delta t$ through crumple zones significantly reduces the average impact force $F_{\\text{avg}}$ transmitted to occupants.",
            "distractorTip": "Impulse ($J = \\Delta p$) is fixed; increasing collision time $\\Delta t$ directly reduces impact force $F$."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "phys-u4-l2",
        "topicNumber": "Topic 4.2",
        "name": "Force-Time Graphs & Variable Impulse",
        "subtitle": "Impulse as area under F vs. t curve and bouncing vs sticking",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph4-l2-q1",
            "stem": "A triangular force pulse acts on a $0.50\\text{ kg}$ object initially at rest. The force increases linearly from $0$ to $F_{max} = 100\\text{ N}$ at $t = 0.02\\text{ s}$, then linearly returns to $0$ at $t = 0.04\\text{ s}$. What is the final speed of the object?",
            "options": [
              "$8.0\\text{ m/s}$",
              "$2.0\\text{ m/s}$",
              "$4.0\\text{ m/s}$",
              "$1.0\\text{ m/s}$"
            ],
            "correctIndex": 2,
            "explanation": "Impulse is the area under the force-time graph. For a triangle: $J = \\frac{1}{2} b h = \\frac{1}{2}(0.04\\text{ s})(100\\text{ N}) = 2.0\\text{ N}\\cdot\\text{s}$. Since the object starts from rest, $v_f = \\frac{J}{m} = \\frac{2.0\\text{ N}\\cdot\\text{s}}{0.50\\text{ kg}} = 4.0\\text{ m/s}$.",
            "distractorTip": "Do not multiply $F_{max} \\times \\Delta t = 100 \\times 0.04 = 4.0$ without the $\\frac{1}{2}$ triangle factor!"
          },
          {
            "id": "ph4-l2-q2",
            "stem": "Two identical carts, Cart A and Cart B, travel at the same initial speed $v_0$ toward a rigid barrier. Cart A has a clay bumper and sticks to the wall upon impact. Cart B has a bouncy elastic spring and rebounds at nearly speed $v_0$. Which cart experiences a greater impulse from the barrier?",
            "options": [
              "Neither cart experiences an impulse because the barrier does not move.",
              "Cart A, because it dissipates all its kinetic energy.",
              "Both carts experience the exact same impulse because their initial momenta were equal.",
              "Cart B, because its change in momentum is approximately twice as large as Cart A."
            ],
            "correctIndex": 3,
            "explanation": "Impulse equals $\\Delta p$. For Cart A (sticking): $\\Delta p_A = 0 - mv_0 = -mv_0$. For Cart B (rebounding): $\\Delta p_B = -mv_0 - (+mv_0) = -2mv_0$. The magnitude of impulse on Cart B is double that on Cart A.",
            "distractorTip": "Bouncing always produces a greater change in momentum and larger impulse than simply stopping!"
          },
          {
            "id": "phys4-l2-q3",
            "stem": "A force-time graph for a baseball struck by a bat forms a triangle with base 0.02 s and peak force 8000 N. What is the magnitude of the impulse delivered to the ball?",
            "options": [
              "80 N·s",
              "160 N·s",
              "40 N·s",
              "800 N·s"
            ],
            "correctIndex": 0,
            "explanation": "Impulse is the area under the force-time curve. For a triangle, $\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(0.02\\text{ s})(8000\\text{ N}) = 80\\text{ N}\\cdot\\text{s}$.",
            "distractorTip": "Impulse is the AREA of the $F$-$t$ graph: remember the $1/2$ factor for triangular profiles."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "phys-u4-l3",
        "topicNumber": "Topic 4.3",
        "name": "Conservation of Linear Momentum & Explosions",
        "subtitle": "Isolated systems, internal forces, and center of mass velocity",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph4-l3-q1",
            "stem": "A $60\\text{ kg}$ ice skater initially at rest on frictionless ice throws a $5.0\\text{ kg}$ medicine ball horizontally forward at $+12\\text{ m/s}$. What is the recoil velocity of the skater?",
            "options": [
              "$-1.0\\text{ m/s}$",
              "$-1.2\\text{ m/s}$",
              "$-2.4\\text{ m/s}$",
              "$+1.0\\text{ m/s}$"
            ],
            "correctIndex": 0,
            "explanation": "In the skater-ball isolated system, total initial momentum is zero: $p_i = 0$. By conservation of momentum: $M_{skater} v_{skater} + m_{ball} v_{ball} = 0 \\implies (60) v_{skater} + (5.0)(12) = 0 \\implies 60 v_{skater} = -60 \\implies v_{skater} = -1.0\\text{ m/s}$.",
            "distractorTip": "Recoil velocity is in the opposite direction (negative sign) to conserve total linear momentum."
          },
          {
            "id": "ph4-l3-q2",
            "stem": "A cannon of mass $M = 500\\text{ kg}$ on frictionless wheels fires a cannonball of mass $m = 10\\text{ kg}$ horizontally at $100\\text{ m/s}$. What happens to the velocity of the center of mass of the combined cannon-cannonball system during the firing?",
            "options": [
              "The center of mass moves in the forward direction of the cannonball.",
              "The velocity of the center of mass remains strictly zero because all forces between the cannon and cannonball are internal to the defined system.",
              "The center of mass recoils backward with the cannon.",
              "The center of mass accelerates upward due to the expanding gunpowder gases."
            ],
            "correctIndex": 1,
            "explanation": "Because no external horizontal force acts on the isolated cannon-ball system, $\\Sigma \\vec{F}_{ext} = M_{tot} \\vec{a}_{cm} = 0$. Since the system was initially at rest, the center of mass velocity $\\vec{v}_{cm}$ remains exactly zero at all times.",
            "distractorTip": "Internal explosive forces cannot accelerate the center of mass of an isolated system!"
          },
          {
            "id": "phys4-l3-q3",
            "stem": "An astronaut of mass 80 kg initially at rest in deep space throws a 2 kg wrench forward with a velocity of 20 m/s relative to the space station. What is the astronaut's resulting recoil velocity?",
            "options": [
              "0.25 m/s forward",
              "0.50 m/s backward",
              "2.00 m/s backward",
              "0.10 m/s backward"
            ],
            "correctIndex": 1,
            "explanation": "By conservation of linear momentum for the isolated astronaut-wrench system: $p_{\\text{initial}} = p_{\\text{final}} \\implies 0 = m_a v_a + m_w v_w \\implies 0 = 80 v_a + 2(20) \\implies 80 v_a = -40 \\implies v_a = -0.5\\text{ m/s}$ (recoiling backward).",
            "distractorTip": "Initial momentum is 0, so forward wrench momentum must equal backward astronaut momentum: $m_a v_a = m_w v_w$."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "phys-u4-l4",
        "topicNumber": "Topic 4.4",
        "name": "Elastic vs. Inelastic Collisions",
        "subtitle": "Kinetic energy conservation vs thermal dissipation",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph4-l4-q1",
            "stem": "Cart 1 of mass $M$ moving at speed $v_0$ collides head-on with stationary Cart 2 of mass $2M$, and the two carts stick together. What fraction of the initial kinetic energy is lost as heat and sound during the collision?",
            "options": [
              "$\\frac{1}{2}$ ($50.0\\%$ lost)",
              "$\\frac{1}{3}$ ($33.3\\%$ lost)",
              "$\\frac{2}{3}$ ($66.7\\%$ lost)",
              "$\\frac{3}{4}$ ($75.0\\%$ lost)"
            ],
            "correctIndex": 2,
            "explanation": "By conservation of momentum: $M v_0 = (M + 2M) v_f \\implies v_f = \\frac{1}{3}v_0$. Initial kinetic energy: $K_i = \\frac{1}{2}M v_0^2$. Final kinetic energy: $K_f = \\frac{1}{2}(3M)(\\frac{1}{3}v_0)^2 = \\frac{1}{6}M v_0^2 = \\frac{1}{3}K_i$. Therefore, the fraction lost is $1 - \\frac{1}{3} = \\frac{2}{3}$ ($66.7\\%$).",
            "distractorTip": "Read carefully: the question asks for the fraction LOST ($\frac{2}{3}$), not the fraction remaining ($\frac{1}{3}$)."
          },
          {
            "id": "ph4-l4-q2",
            "stem": "In which type of collision between two isolated macroscopic objects is total kinetic energy strictly conserved?",
            "options": [
              "Any collision where the objects stick together",
              "A completely inelastic collision",
              "All collisions in an isolated system",
              "An elastic collision only"
            ],
            "correctIndex": 3,
            "explanation": "Linear momentum is conserved in ALL isolated collisions. However, kinetic energy is conserved ONLY in perfectly elastic collisions. In inelastic collisions, some kinetic energy is converted into internal thermal, deformation, or acoustic energy.",
            "distractorTip": "Momentum is ALWAYS conserved in isolated systems; kinetic energy is ONLY conserved in elastic collisions."
          },
          {
            "id": "phys4-l4-q3",
            "stem": "Two carts of equal mass collide on a frictionless track. In which type of collision is mechanical kinetic energy completely conserved?",
            "options": [
              "Completely inelastic collision where they stick together.",
              "Partially inelastic collision with dented bumpers.",
              "A perfectly elastic collision.",
              "All collisions conserve kinetic energy by definition."
            ],
            "correctIndex": 2,
            "explanation": "Momentum is conserved in all isolated collisions. However, kinetic energy is conserved ONLY in a perfectly elastic collision. In inelastic collisions, kinetic energy is converted into thermal energy, sound, and permanent deformation.",
            "distractorTip": "Elastic collision = Momentum AND Kinetic Energy conserved; Inelastic collision = ONLY Momentum conserved."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "phys-u4-l5",
        "topicNumber": "Topic 4.5",
        "name": "2D Collisions & Momentum Vectors",
        "subtitle": "Resolving momentum into x and y components (p_x and p_y)",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph4-l5-q1",
            "stem": "Puck A of mass $m$ traveling East at speed $v_0$ strikes stationary Puck B of mass $m$ in a glancing collision. After the collision, Puck A moves with speed $v_A$ at an angle of $30^\\circ$ North of East. What must be true about Puck B’s momentum component in the North-South direction?",
            "options": [
              "Puck B must have a Southward momentum component equal in magnitude to Puck A’s Northward momentum component.",
              "Puck B must move due East with zero North-South momentum.",
              "Puck B must move North with the exact same angle as Puck A.",
              "Puck B has zero momentum in all directions."
            ],
            "correctIndex": 0,
            "explanation": "Since initial momentum in the $y$-direction was zero ($p_{i,y} = 0$), the total final $y$-momentum must also sum to zero: $p_{A,y} + p_{B,y} = 0 \\implies p_{B,y} = -p_{A,y}$. Puck B must have an equal-magnitude Southward momentum.",
            "distractorTip": "In 2D collisions, momentum conservation must hold INDEPENDENTLY along the $x$-axis and the $y$-axis."
          },
          {
            "id": "ph4-l5-q2",
            "stem": "Two vehicles of equal mass $m$ collide at an icy intersection. Vehicle 1 travels North at $20\\text{ m/s}$ and Vehicle 2 travels East at $20\\text{ m/s}$. They entangle and slide together as a single wreckage. What is the speed of the combined wreckage immediately after impact?",
            "options": [
              "$20.0\\text{ m/s}$",
              "$14.1\\text{ m/s}$ (directed Northeast at $45^\\circ$)",
              "$10.0\\text{ m/s}$",
              "$28.3\\text{ m/s}$"
            ],
            "correctIndex": 1,
            "explanation": "Total initial momentum: $\\vec{p}_{tot} = (20m)\\hat{i} + (20m)\\hat{j}$. The magnitude is $|\\vec{p}_{tot}| = \\sqrt{(20m)^2 + (20m)^2} = 20\\sqrt{2}m$. The combined mass is $2m$, so $v_f = \\frac{20\\sqrt{2}m}{2m} = 10\\sqrt{2}\\text{ m/s} \\approx 14.1\\text{ m/s}$.",
            "distractorTip": "Do not add speeds algebraically ($20 + 20 = 40$); use Pythagorean vector addition on orthogonal momenta!"
          },
          {
            "id": "phys4-l5-q3",
            "stem": "A 1 kg object moving east at 4 m/s collides with a 1 kg object moving north at 3 m/s. The two objects stick together. What is the magnitude of their common velocity after collision?",
            "options": [
              "3.5 m/s",
              "7.0 m/s",
              "1.0 m/s",
              "2.5 m/s"
            ],
            "correctIndex": 3,
            "explanation": "Initial momentum components: $p_x = (1)(4) = 4\\text{ kg}\\cdot\\text{m/s}$; $p_y = (1)(3) = 3\\text{ kg}\\cdot\\text{m/s}$. Total momentum magnitude $p = \\sqrt{4^2 + 3^2} = 5\\text{ kg}\\cdot\\text{m/s}$. Total mass $M = 1 + 1 = 2\\text{ kg}$. Velocity magnitude $v = p / M = 5 / 2 = 2.5\\text{ m/s}$.",
            "distractorTip": "In 2D collisions, sum momentum vectors using the Pythagorean theorem: $p_{\\text{total}} = \\sqrt{p_x^2 + p_y^2}$."
          }
        ]
      },
      {
        "id": 406,
        "unitIndex": 4,
        "levelNumber": 6,
        "uniqueKey": "phys-u4-l6",
        "topicNumber": "Unit 4 Boss",
        "name": "Apex Momentum Crucible",
        "subtitle": "Ballistic pendulums, multi-stage collisions, and kinetic energy loss",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ph4-l6-q1",
            "stem": "In a ballistic pendulum experiment, a bullet of mass $m = 0.020\\text{ kg}$ is fired horizontally into a wooden block of mass $M = 1.98\\text{ kg}$ suspended by light cords. The bullet embeds in the block, and the combined system swings upward to a maximum vertical height $h = 0.20\\text{ m}$. Using $g = 9.8\\text{ m/s}^2$, what was the initial speed $v_0$ of the bullet?",
            "options": [
              "$392\\text{ m/s}$",
              "$99\\text{ m/s}$",
              "$198\\text{ m/s}$",
              "$20\\text{ m/s}$"
            ],
            "correctIndex": 2,
            "explanation": "Stage 1 (Inelastic collision): $m v_0 = (m + M) V \\implies V = \\frac{m}{m+M} v_0 = \\frac{0.020}{2.00} v_0 = 0.010 v_0$. Stage 2 (Conservation of mechanical energy during swing): $\\frac{1}{2}(m+M)V^2 = (m+M)gh \\implies V = \\sqrt{2gh} = \\sqrt{2(9.8)(0.20)} = \\sqrt{3.92} \\approx 1.98\\text{ m/s}$. Equating: $0.010 v_0 = 1.98 \\implies v_0 = 198\\text{ m/s}$.",
            "distractorTip": "Do NOT conserve kinetic energy during the bullet impact! Conserve momentum during impact, then conserve mechanical energy during the swing."
          },
          {
            "id": "ph4-l6-q2",
            "stem": "A firecracker initially at rest on a frictionless table explodes into three pieces of masses $m_1 = 0.10\\text{ kg}$, $m_2 = 0.20\\text{ kg}$, and $m_3 = 0.30\\text{ kg}$. Piece 1 flies along the $+x$-axis at $10\\text{ m/s}$, and Piece 2 flies along the $+y$-axis at $5.0\\text{ m/s}$. What is the magnitude of the velocity of Piece 3?",
            "options": [
              "$1.41\\text{ m/s}$",
              "$5.00\\text{ m/s}$",
              "$3.33\\text{ m/s}$",
              "$4.71\\text{ m/s}$"
            ],
            "correctIndex": 3,
            "explanation": "Initial momentum is zero: $\\vec{p}_1 + \\vec{p}_2 + \\vec{p}_3 = 0$. $\\vec{p}_1 = (0.10)(10)\\hat{i} = +1.0\\hat{i}\\text{ N}\\cdot\\text{s}$. $\\vec{p}_2 = (0.20)(5.0)\\hat{j} = +1.0\\hat{j}\\text{ N}\\cdot\\text{s}$. Therefore, $\\vec{p}_3 = -1.0\\hat{i} - 1.0\\hat{j}$, so $|\\vec{p}_3| = \\sqrt{1.0^2 + 1.0^2} = \\sqrt{2} \\approx 1.414\\text{ N}\\cdot\\text{s}$. The speed is $v_3 = \\frac{|\\vec{p}_3|}{m_3} = \\frac{1.414}{0.30} \\approx 4.71\\text{ m/s}$.",
            "distractorTip": "Calculate Piece 3’s momentum magnitude first using vector addition, then divide by $m_3$ to get its speed."
          },
          {
            "id": "phys4-l6-q3",
            "stem": "A ballistic pendulum consists of a suspended block of wood of mass $M$ struck by a bullet of mass $m$ moving with speed $v$. What physical principles are used sequentially to determine $v$ from the block's maximum height $h$?",
            "options": [
              "Conservation of linear momentum during the collision, followed by conservation of mechanical energy during the swing.",
              "Conservation of mechanical energy during the collision, followed by impulse-momentum theorem.",
              "Newton's third law during the swing, followed by work-energy theorem.",
              "Conservation of kinetic energy throughout the entire motion."
            ],
            "correctIndex": 0,
            "explanation": "Phase 1 (collision): Inelastic collision where kinetic energy is lost; linear momentum is strictly conserved ($m v = (m+M)V$). Phase 2 (swing): No non-conservative forces act, so mechanical energy is conserved as kinetic energy converts to potential energy ($\\frac{1}{2}(m+M)V^2 = (m+M)gh$).",
            "distractorTip": "Two distinct steps: Momentum conserved during impact; Mechanical energy conserved during swing."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Unit 5: Torque & Rotational Dynamics",
    "shortTitle": "Unit 5: Torque",
    "description": "Rotational kinematics, lever arms, torque (τ = r F sinθ), rotational inertia, static rotational equilibrium, and Newton’s second law for rotation (Στ = Iα)",
    "examWeight": "12–18% of AP Exam",
    "biome": {
      "name": "Fulcrum Ridge & Gyroscope Plateau",
      "icon": "⚙️",
      "accentColor": "#6366F1",
      "secondaryColor": "#4F46E5",
      "groundGradient": "from-indigo-100 via-blue-50 to-violet-100",
      "cardBorder": "border-indigo-500",
      "trailColor": "#6366f1",
      "nodeRing": "ring-indigo-400/40",
      "skyTint": "from-indigo-50 to-purple-50/30"
    },
    "levels": [
      {
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "phys-u5-l1",
        "topicNumber": "Topic 5.1",
        "name": "Rotational Kinematics & Tangential Motion",
        "subtitle": "Angular variables (θ, ω, α) and v = ωr, a_t = αr",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph5-l1-q1",
            "stem": "A wheel initially at rest accelerates with a constant angular acceleration of $\\alpha = 4.0\\text{ rad/s}^2$ for $3.0\\text{ s}$. What is its angular velocity $\\omega$ at $t = 3.0\\text{ s}$, and through what total angle $\\theta$ has it rotated?",
            "options": [
              "$\\omega = 12\\text{ rad/s}$ and $\\theta = 18\\text{ rad}$",
              "$\\omega = 12\\text{ rad/s}$ and $\\theta = 36\\text{ rad}$",
              "$\\omega = 6.0\\text{ rad/s}$ and $\\theta = 18\\text{ rad}$",
              "$\\omega = 16\\text{ rad/s}$ and $\\theta = 24\\text{ rad}$"
            ],
            "correctIndex": 0,
            "explanation": "$\\omega = \\omega_0 + \\alpha t = 0 + (4.0)(3.0) = 12\\text{ rad/s}$. Angular displacement: $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 0 + \\frac{1}{2}(4.0)(3.0)^2 = 18\\text{ rad}$.",
            "distractorTip": "Rotational kinematic equations map 1-to-1 with linear kinematics: replace $x, v, a$ with $\\theta, \\omega, \\alpha$."
          },
          {
            "id": "ph5-l1-q2",
            "stem": "A carousel rotates at a constant angular velocity $\\omega$. Rider A sits at distance $R$ from the central axis, while Rider B sits at distance $2R$. How do the tangential speed and centripetal acceleration of Rider B compare to Rider A?",
            "options": [
              "Both riders have identical tangential speeds and centripetal accelerations.",
              "Rider B has $2\\times$ the tangential speed and $2\\times$ the centripetal acceleration of Rider A.",
              "Rider B has $2\\times$ the tangential speed but $4\\times$ the centripetal acceleration of Rider A.",
              "Rider B has $4\\times$ the tangential speed and $2\\times$ the centripetal acceleration of Rider A."
            ],
            "correctIndex": 1,
            "explanation": "Both share the same angular velocity $\\omega$. Tangential speed is $v = \\omega r$, so $v_B = 2 v_A$. Centripetal acceleration is $a_c = \\omega^2 r$, so $a_{c,B} = 2 a_{c,A}$.",
            "distractorTip": "Use $a_c = \\omega^2 r$ when $\\omega$ is constant; it reveals linear scaling with radius $r$."
          },
          {
            "id": "phys5-l1-q3",
            "stem": "A circular disc rotates with constant angular acceleration $\\alpha$. If its angular velocity increases from $4\\text{ rad/s}$ to $12\\text{ rad/s}$ over a time interval of $4\\text{ s}$, what angular displacement does the disc rotate through?",
            "options": [
              "16 radians",
              "32 radians",
              "64 radians",
              "8 radians"
            ],
            "correctIndex": 1,
            "explanation": "Using rotational kinematics: $\\Delta \\theta = \\frac{\\omega_0 + \\omega}{2} t = \\frac{4 + 12}{2}(4) = 8(4) = 32\\text{ radians}$.",
            "distractorTip": "Rotational kinematics formulas mirror linear kinematics: $\\Delta \\theta = \\frac{\\omega_0 + \\omega}{2}t$."
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "phys-u5-l2",
        "topicNumber": "Topic 5.2",
        "name": "Torque & Lever Arm",
        "subtitle": "τ = r F sinθ = r_perp F and line of action",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph5-l2-q1",
            "stem": "A mechanic applies a force of $50\\text{ N}$ to the end of a wrench of length $0.30\\text{ m}$. The force is directed at an angle of $30^\\circ$ relative to the handle of the wrench. What magnitude of torque is exerted about the bolt?",
            "options": [
              "$13.0\\text{ N}\\cdot\\text{m}$",
              "$15.0\\text{ N}\\cdot\\text{m}$",
              "$7.5\\text{ N}\\cdot\\text{m}$",
              "$25.0\\text{ N}\\cdot\\text{m}$"
            ],
            "correctIndex": 2,
            "explanation": "Torque is $\\tau = r F \\sin\\theta = (0.30\\text{ m})(50\\text{ N})\\sin(30^\\circ) = (15)(0.50) = 7.5\\text{ N}\\cdot\\text{m}$.",
            "distractorTip": "Only the perpendicular component of the force ($F\\sin\\theta$) creates torque; the parallel component pulls uselessly along the handle."
          },
          {
            "id": "ph5-l2-q2",
            "stem": "A child of mass $30\\text{ kg}$ sits $2.0\\text{ m}$ to the left of the central pivot of a balanced seesaw. Where must an adult of mass $60\\text{ kg}$ sit on the right side to keep the seesaw in static equilibrium?",
            "options": [
              "$4.0\\text{ m}$ to the right of the pivot",
              "$2.0\\text{ m}$ to the right of the pivot",
              "$0.5\\text{ m}$ to the right of the pivot",
              "$1.0\\text{ m}$ to the right of the pivot"
            ],
            "correctIndex": 3,
            "explanation": "For rotational equilibrium, counterclockwise torque must equal clockwise torque: $\\tau_{ccw} = \\tau_{cw} \\implies m_1 g d_1 = m_2 g d_2 \\implies (30)(2.0) = (60) d_2 \\implies 60 = 60 d_2 \\implies d_2 = 1.0\\text{ m}$.",
            "distractorTip": "Twice the mass requires half the distance from the pivot to generate equal torque."
          },
          {
            "id": "phys5-l2-q3",
            "stem": "A wrench of length 0.25 m is pulled with a force of 60 N at an angle of $30^\\circ$ relative to the handle. What torque is exerted on the bolt?",
            "options": [
              "15.0 N·m",
              "13.0 N·m",
              "7.5 N·m",
              "30.0 N·m"
            ],
            "correctIndex": 2,
            "explanation": "Torque is given by $\\tau = r F \\sin\\theta = (0.25\\text{ m})(60\\text{ N})\\sin(30^\\circ) = 15(0.5) = 7.5\\text{ N}\\cdot\\text{m}$.",
            "distractorTip": "Remember $\\sin(30^\\circ) = 0.5$; only the perpendicular component of force generates rotational torque."
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "phys-u5-l3",
        "topicNumber": "Topic 5.3",
        "name": "Rotational Inertia (Moment of Inertia)",
        "subtitle": "Mass distribution and parallel axis theorem",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph5-l3-q1",
            "stem": "A solid uniform cylinder and a thin hollow cylindrical hoop have the exact same total mass $M$ and outer radius $R$. Which object has a greater rotational inertia about its central symmetry axis, and why?",
            "options": [
              "The hollow hoop ($I = MR^2$), because all of its mass is concentrated at the maximum possible distance $R$ from the axis.",
              "The solid cylinder ($I = \\frac{1}{2}MR^2$), because its mass is continuously distributed throughout its volume.",
              "Both have identical rotational inertia because their total masses and radii are equal.",
              "Rotational inertia depends only on mass, not on geometric radius."
            ],
            "correctIndex": 0,
            "explanation": "Rotational inertia is $I = \\sum m_i r_i^2$. Because all mass of the hoop is at radius $R$, $I_{hoop} = MR^2$. In a solid cylinder, mass near the center has small $r$, averaging out to $I_{cyl} = \\frac{1}{2}MR^2$. Thus the hoop has twice the rotational inertia.",
            "distractorTip": "Mass farther from the axis resists angular acceleration far more than mass near the axis."
          },
          {
            "id": "ph5-l3-q2",
            "stem": "A uniform thin rod of mass $M$ and length $L$ has rotational inertia $I_{cm} = \\frac{1}{12}ML^2$ about an axis through its center of mass. By the Parallel Axis Theorem, what is its rotational inertia about an axis passing through one of its endpoints?",
            "options": [
              "$\\frac{1}{6}ML^2$",
              "$\\frac{1}{3}ML^2$",
              "$\\frac{1}{4}ML^2$",
              "$\\frac{7}{12}ML^2$"
            ],
            "correctIndex": 1,
            "explanation": "The distance from the center of mass to the endpoint is $d = L/2$. By the Parallel Axis Theorem: $I = I_{cm} + M d^2 = \\frac{1}{12}ML^2 + M(L/2)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{4}{12}ML^2 = \\frac{1}{3}ML^2$.",
            "distractorTip": "Rotating about an endpoint requires $4\\times$ more torque than about the center because mass is distributed farther away."
          },
          {
            "id": "phys5-l3-q3",
            "stem": "A solid cylinder and a thin hollow hoop of identical mass $M$ and radius $R$ are rotated about their central axes. How do their moments of inertia compare?",
            "options": [
              "They have identical moments of inertia because their mass and radius are equal.",
              "The solid cylinder has twice the moment of inertia of the hollow hoop.",
              "The hollow hoop has a larger moment of inertia ($I_{\\text{hoop}} = M R^2 > I_{\\text{cylinder}} = \\frac{1}{2} M R^2$) because its mass is concentrated farther from the rotation axis.",
              "The hollow hoop has zero moment of inertia."
            ],
            "correctIndex": 2,
            "explanation": "Rotational inertia depends not just on total mass, but on how that mass is distributed relative to the axis of rotation ($I = \\int r^2 dm$). All of the hoop's mass is at distance $R$ ($I = MR^2$), while the cylinder's mass is distributed from $0$ to $R$ ($I = \\frac{1}{2}MR^2$).",
            "distractorTip": "Mass distributed farther from the axis gives greater rotational inertia ($MR^2 > \\frac{1}{2}MR^2$)."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "phys-u5-l4",
        "topicNumber": "Topic 5.4",
        "name": "Static Rotational Equilibrium",
        "subtitle": "ΣF = 0 and Στ = 0 conditions for equilibrium",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph5-l4-q1",
            "stem": "A uniform horizontal beam of mass $M = 20\\text{ kg}$ and length $L = 4.0\\text{ m}$ is supported by two vertical pillars: Pillar A at the left end ($x = 0$) and Pillar B at $x = 3.0\\text{ m}$. Using $g = 9.8\\text{ m/s}^2$, what is the upward normal force exerted by Pillar B on the beam?",
            "options": [
              "$196\\text{ N}$",
              "$98\\text{ N}$",
              "$131\\text{ N}$",
              "$65\\text{ N}$"
            ],
            "correctIndex": 2,
            "explanation": "The beam’s weight $mg = (20)(9.8) = 196\\text{ N}$ acts at its center of mass ($x = 2.0\\text{ m}$). Taking torques about Pillar A ($x = 0$): $\\Sigma \\tau_A = 0 \\implies F_B(3.0) - mg(2.0) = 0 \\implies 3.0 F_B = 2.0(196) = 392 \\implies F_B = \\frac{392}{3.0} \\approx 130.7\\text{ N} \\approx 131\\text{ N}$.",
            "distractorTip": "Choose a pivot at an unknown force (like Pillar A) so that its torque is zero, allowing direct solution for the other support force."
          },
          {
            "id": "ph5-l4-q2",
            "stem": "What are the two necessary and sufficient conditions for an extended rigid body to remain in complete static equilibrium?",
            "options": [
              "The rotational inertia must equal zero.",
              "The net force must be zero, but net torque can be nonzero.",
              "The body must be moving at constant non-zero velocity.",
              "The vector sum of all external forces must be zero ($\\Sigma \\vec{F} = 0$), AND the vector sum of all external torques about any pivot must be zero ($\\Sigma \\vec{\\tau} = 0$)."
            ],
            "correctIndex": 3,
            "explanation": "Translational equilibrium requires $\\Sigma \\vec{F} = 0$ (no linear acceleration), while rotational equilibrium requires $\\Sigma \\vec{\\tau} = 0$ (no angular acceleration). Both must be satisfied simultaneously for static equilibrium.",
            "distractorTip": "Zero net force alone does NOT guarantee equilibrium (e.g. equal opposite forces creating a couple cause rotation!)."
          },
          {
            "id": "phys5-l4-q3",
            "stem": "A uniform wooden plank of length $4\\text{ m}$ and mass $20\\text{ kg}$ is balanced horizontally on a fulcrum placed at its center of mass. If a $10\\text{ kg}$ mass is placed $1.5\\text{ m}$ to the left of the fulcrum, where must a $15\\text{ kg}$ mass be placed to maintain static rotational equilibrium?",
            "options": [
              "1.0 m to the right of the fulcrum",
              "1.5 m to the right of the fulcrum",
              "2.0 m to the right of the fulcrum",
              "0.5 m to the right of the fulcrum"
            ],
            "correctIndex": 0,
            "explanation": "For rotational equilibrium, the sum of clockwise torques must balance counterclockwise torques: $\\Sigma \\tau = 0 \\implies m_1 g r_1 = m_2 g r_2 \\implies (10)(1.5) = (15) r_2 \\implies 15 = 15 r_2 \\implies r_2 = 1.0\\text{ m}$.",
            "distractorTip": "Balance torques: $\\tau_{\\text{ccw}} = \\tau_{\\text{cw}} \\implies m_1 r_1 = m_2 r_2$."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "phys-u5-l5",
        "topicNumber": "Topic 5.5",
        "name": "Newton’s 2nd Law for Rotation (Στ = Iα)",
        "subtitle": "Pulleys with mass, Atwood machines, and angular acceleration",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph5-l5-q1",
            "stem": "A solid cylindrical flywheel of mass $M = 4.0\\text{ kg}$ and radius $R = 0.50\\text{ m}$ ($I = \\frac{1}{2}MR^2$) is mounted on a frictionless axle. A light rope wrapped around its rim is pulled with a constant tension force of $20\\text{ N}$. What is the resulting angular acceleration $\\alpha$ of the flywheel?",
            "options": [
              "$20\\text{ rad/s}^2$",
              "$10\\text{ rad/s}^2$",
              "$40\\text{ rad/s}^2$",
              "$5.0\\text{ rad/s}^2$"
            ],
            "correctIndex": 0,
            "explanation": "Rotational inertia: $I = \\frac{1}{2}(4.0)(0.50)^2 = 0.50\\text{ kg}\\cdot\\text{m}^2$. Applied torque: $\\tau = R F = (0.50)(20) = 10\\text{ N}\\cdot\\text{m}$. By $\\Sigma \\tau = I\\alpha$: $\\alpha = \\frac{\\tau}{I} = \\frac{10}{0.50} = 20\\text{ rad/s}^2$.",
            "distractorTip": "Do not forget the $\\frac{1}{2}$ when computing $I$ for a solid disk or cylinder."
          },
          {
            "id": "ph5-l5-q2",
            "stem": "A block of mass $m$ hangs from a light string wrapped around a massive cylindrical pulley of mass $M$ and radius $R$ ($I = \\frac{1}{2}MR^2$). When the block is released from rest, why is its downward linear acceleration $a$ strictly less than $g$?",
            "options": [
              "The pulley creates a magnetic upward force on the hanging mass.",
              "Part of the gravitational force on the block must provide the string tension that exerts torque to angularly accelerate the massive pulley.",
              "Air resistance instantly cancels half the gravitational force.",
              "The hanging block loses mass as it descends."
            ],
            "correctIndex": 1,
            "explanation": "Newton’s 2nd law for the block: $mg - T = ma$. For the pulley: $\\tau = TR = I\\alpha = (\\frac{1}{2}MR^2)(\\frac{a}{R}) \\implies T = \\frac{1}{2}Ma$. Substituting gives $mg - \\frac{1}{2}Ma = ma \\implies a = \\frac{g}{1 + M/(2m)} < g$. Energy and force are diverted to spin the pulley.",
            "distractorTip": "If the pulley has mass, string tension is NOT zero; tension $T$ must accelerate the pulley’s rotational inertia."
          },
          {
            "id": "phys5-l5-q3",
            "stem": "A constant net torque of $24\\text{ N}\\cdot\\text{m}$ is applied to a flywheel with rotational inertia $I = 6\\text{ kg}\\cdot\\text{m}^2$. What is the flywheel's angular acceleration $\\alpha$?",
            "options": [
              "144 rad/s²",
              "0.25 rad/s²",
              "2.0 rad/s²",
              "4.0 rad/s²"
            ],
            "correctIndex": 3,
            "explanation": "By Newton's second law for rotation: $\\Sigma \\tau = I \\alpha \\implies \\alpha = \\frac{\\Sigma \\tau}{I} = \\frac{24\\text{ N}\\cdot\\text{m}}{6\\text{ kg}\\cdot\\text{m}^2} = 4.0\\text{ rad/s}^2$.",
            "distractorTip": "Rotational form of $F = ma$ is $\\tau = I \\alpha$."
          }
        ]
      },
      {
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "phys-u5-l6",
        "topicNumber": "Unit 5 Boss",
        "name": "Apex Torque Crucible",
        "subtitle": "Ladders leaning on walls, friction tipping, and rotational synthesis",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ph5-l6-q1",
            "stem": "A uniform ladder of mass $M$ and length $L$ leans against a frictionless vertical wall at an angle $\\theta$ with the horizontal floor. What is the minimum coefficient of static friction $\\mu_s$ between the ladder base and the floor required to prevent slipping?",
            "options": [
              "$\\mu_s \\ge \\frac{1}{2}\\tan\\theta$",
              "$\\mu_s \\ge \\frac{1}{\\tan\\theta}$",
              "$\\mu_s \\ge \\frac{1}{2\\tan\\theta}$",
              "$\\mu_s \\ge \\frac{1}{2\\cos\\theta}$"
            ],
            "correctIndex": 2,
            "explanation": "Torque about the base: $N_{wall}(L\\sin\\theta) - mg(\\frac{L}{2}\\cos\\theta) = 0 \\implies N_{wall} = \\frac{mg}{2\\tan\\theta}$. Horizontal forces: $f_s = N_{wall}$. Vertical forces: $N_{floor} = mg$. Static friction condition: $f_s \\le \\mu_s N_{floor} \\implies \\frac{mg}{2\\tan\\theta} \\le \\mu_s mg \\implies \\mu_s \\ge \\frac{1}{2\\tan\\theta}$.",
            "distractorTip": "Notice that as the ladder becomes more vertical ($\\theta \\to 90^\\circ$), $\\tan\\theta \\to \\infty$, so required friction $\\mu_s \\to 0$."
          },
          {
            "id": "ph5-l6-q2",
            "stem": "A uniform wheel of mass $M$ and radius $R$ rests on a level floor against a vertical rectangular curb of height $h < R$. A horizontal force $F$ is applied to the axle. What is the minimum force $F$ required to just lift the wheel off the floor onto the curb?",
            "options": [
              "$F = Mg \\frac{R}{R - h}$",
              "$F = Mg \\frac{h}{R}$",
              "$F = Mg \\frac{R - h}{\\sqrt{2Rh - h^2}}$",
              "$F = Mg \\frac{\\sqrt{2Rh - h^2}}{R - h}$"
            ],
            "correctIndex": 3,
            "explanation": "Pivot at the corner of the curb. Lever arm for $F$ is $R - h$. Lever arm for gravity $Mg$ is $d = \\sqrt{R^2 - (R - h)^2} = \\sqrt{2Rh - h^2}$. Setting net torque to zero at the verge of lifting: $F(R - h) = Mg\\sqrt{2Rh - h^2} \\implies F = Mg\\frac{\\sqrt{2Rh - h^2}}{R - h}$.",
            "distractorTip": "Setting the pivot at the contact corner eliminates the unknown reaction forces from the curb."
          },
          {
            "id": "phys5-l6-q3",
            "stem": "A uniform ladder leans against a frictionless vertical wall while resting on a rough horizontal floor. What provides the counterclockwise torque that prevents the ladder from slipping down?",
            "options": [
              "The normal force exerted by the vertical wall.",
              "The static friction force exerted by the ground.",
              "The gravitational force acting at the center of the ladder.",
              "Air resistance against the rungs."
            ],
            "correctIndex": 0,
            "explanation": "Taking the base of the ladder as the pivot point, gravity exerts a clockwise torque pulling the ladder downward. The normal force exerted by the frictionless vertical wall pushes horizontally outward, exerting a counterclockwise torque about the base that maintains rotational equilibrium.",
            "distractorTip": "Choose the pivot at the base of the ladder to eliminate friction and floor normal force from the torque equation."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 6,
    "unitId": "u6",
    "title": "Unit 6: Energy & Momentum of Rotating Systems",
    "shortTitle": "Unit 6: Rotational Systems",
    "description": "Rotational kinetic energy, rotational work (W = τΔθ), rolling without slipping, angular momentum (L = Iω), angular impulse, and conservation of angular momentum",
    "examWeight": "5–8% of AP Exam",
    "biome": {
      "name": "Vortex Vortex & Orbital Spire",
      "icon": "🌀",
      "accentColor": "#8B5CF6",
      "secondaryColor": "#7C3AED",
      "groundGradient": "from-violet-100 via-purple-50 to-indigo-100",
      "cardBorder": "border-violet-500",
      "trailColor": "#8b5cf6",
      "nodeRing": "ring-violet-400/40",
      "skyTint": "from-purple-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 601,
        "unitIndex": 6,
        "levelNumber": 1,
        "uniqueKey": "phys-u6-l1",
        "topicNumber": "Topic 6.1",
        "name": "Rotational Kinetic Energy",
        "subtitle": "K_rot = 1/2 I ω^2 and flywheel energy storage",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph6-l1-q1",
            "stem": "A heavy industrial flywheel with rotational inertia $I = 0.50\\text{ kg}\\cdot\\text{m}^2$ spins at an angular speed of $\\omega = 120\\text{ rad/s}$. What is the total rotational kinetic energy stored in the flywheel?",
            "options": [
              "$3.6\\text{ kJ}$",
              "$60\\text{ J}$",
              "$7.2\\text{ kJ}$",
              "$1.8\\text{ kJ}$"
            ],
            "correctIndex": 0,
            "explanation": "Rotational kinetic energy: $K_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.50\\text{ kg}\\cdot\\text{m}^2)(120\\text{ rad/s})^2 = 0.25 \\times 14400 = 3600\\text{ J} = 3.6\\text{ kJ}$.",
            "distractorTip": "Notice the analogue: $K_{rot} = \\frac{1}{2}I\\omega^2$ directly parallels translational $K = \\frac{1}{2}mv^2$."
          },
          {
            "id": "ph6-l1-q2",
            "stem": "Two uniform solid spheres have the same mass $M$. Sphere 1 has radius $R$, and Sphere 2 has radius $2R$. If both spheres spin with the same angular velocity $\\omega$, how does the rotational kinetic energy of Sphere 2 compare to Sphere 1?",
            "options": [
              "Sphere 2 has $2\\times$ the rotational kinetic energy of Sphere 1.",
              "Sphere 2 has $4\\times$ the rotational kinetic energy of Sphere 1.",
              "Both spheres have identical rotational kinetic energy.",
              "Sphere 2 has $16\\times$ the rotational kinetic energy of Sphere 1."
            ],
            "correctIndex": 1,
            "explanation": "For a solid sphere, $I = \\frac{2}{5}MR^2$. Doubling the radius quadruples rotational inertia: $I_2 = \\frac{2}{5}M(2R)^2 = 4 I_1$. Since $K_{rot} = \\frac{1}{2}I\\omega^2$, quadrupling $I$ at equal $\\omega$ quadruples the kinetic energy: $K_2 = 4 K_1$.",
            "distractorTip": "Rotational inertia scales with $R^2$, so kinetic energy at equal $\\omega$ also scales with $R^2$."
          },
          {
            "id": "phys6-l1-q3",
            "stem": "A solid sphere of mass $M$ and radius $R$ ($I = \\frac{2}{5}MR^2$) rolls across a floor without slipping at center-of-mass speed $v$. What is its total kinetic energy?",
            "options": [
              "$\\frac{1}{2} M v^2$",
              "$\\frac{7}{10} M v^2$",
              "$\\frac{2}{5} M v^2$",
              "$\\frac{9}{10} M v^2$"
            ],
            "correctIndex": 1,
            "explanation": "Total kinetic energy is translational plus rotational: $K = \\frac{1}{2}M v^2 + \\frac{1}{2}I \\omega^2$. Since it rolls without slipping, $\\omega = v/R$. $K = \\frac{1}{2}M v^2 + \\frac{1}{2}\\left(\\frac{2}{5}MR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}M v^2 + \\frac{1}{5}M v^2 = \\frac{7}{10}M v^2$.",
            "distractorTip": "Rolling kinetic energy: $K_{\\text{total}} = K_{\\text{trans}} + K_{\\text{rot}} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$."
          }
        ]
      },
      {
        "id": 602,
        "unitIndex": 6,
        "levelNumber": 2,
        "uniqueKey": "phys-u6-l2",
        "topicNumber": "Topic 6.2",
        "name": "Torque & Rotational Work",
        "subtitle": "W_rot = τ Δθ and rotational power P = τω",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph6-l2-q1",
            "stem": "A constant net torque of $25\\text{ N}\\cdot\\text{m}$ is applied to a stationary grinding wheel over $4.0$ complete revolutions ($4 \\times 2\\pi\\text{ rad}$). What is the work done on the wheel, and what is its final rotational kinetic energy?",
            "options": [
              "$314\\text{ J}$",
              "$100\\text{ J}$",
              "$628\\text{ J}$",
              "$1256\\text{ J}$"
            ],
            "correctIndex": 2,
            "explanation": "Angular displacement in radians: $\\Delta\\theta = 4.0 \\times 2\\pi = 8\\pi\\text{ rad} \\approx 25.13\\text{ rad}$. Rotational work: $W = \\tau \\Delta\\theta = (25\\text{ N}\\cdot\\text{m})(8\\pi\\text{ rad}) = 200\\pi\\text{ J} \\approx 628.3\\text{ J}$. By the Work-Energy Theorem for rotation, $K_{rot} = W = 628\\text{ J}$.",
            "distractorTip": "You must ALWAYS convert revolutions into radians ($1\\text{ rev} = 2\\pi\\text{ rad}$) when calculating work!"
          },
          {
            "id": "ph6-l2-q2",
            "stem": "An electric motor delivers a steady torque $\\tau$ to keep a centrifuge rotor spinning at a constant angular speed $\\omega$ against internal friction. What is the mechanical power output of the motor?",
            "options": [
              "$P = \\tau^2 \\omega$",
              "$P = \\frac{1}{2}\\tau \\omega^2$",
              "$P = \\frac{\\tau}{\\omega}$",
              "$P = \\tau \\omega$"
            ],
            "correctIndex": 3,
            "explanation": "Analogous to linear power $P = F v$, rotational mechanical power is torque multiplied by angular velocity: $P = \\frac{dW}{dt} = \\tau \\frac{d\\theta}{dt} = \\tau \\omega$.",
            "distractorTip": "Just as linear $P = F v$, rotational $P = \\tau \\omega$."
          },
          {
            "id": "phys6-l2-q3",
            "stem": "A net torque applied to a rotating turntable changes its angular velocity from $\\omega_0$ to $\\omega_f$. According to the Work-Energy Theorem for rotation, the rotational work done equals:",
            "options": [
              "The change in angular momentum: $I\\omega_f - I\\omega_0$.",
              "The product of torque and angular acceleration: $\\tau \\alpha$.",
              "The change in rotational kinetic energy: $\\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_0^2$.",
              "The change in gravitational potential energy."
            ],
            "correctIndex": 2,
            "explanation": "The rotational Work-Energy Theorem states that net rotational work done on an object equals the change in its rotational kinetic energy: $W_{\\text{rot}} = \\int \\tau d\\theta = \\Delta K_{\\text{rot}} = \\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_0^2$.",
            "distractorTip": "Rotational work-energy theorem: $W = \\Delta K_{\\text{rot}} = \\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_i^2$."
          }
        ]
      },
      {
        "id": 603,
        "unitIndex": 6,
        "levelNumber": 3,
        "uniqueKey": "phys-u6-l3",
        "topicNumber": "Topic 6.3",
        "name": "Rolling Without Slipping",
        "subtitle": "K_total = 1/2 mv^2 + 1/2 Iω^2 and the race down the incline",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph6-l3-q1",
            "stem": "A uniform solid sphere ($I = \\frac{2}{5}MR^2$), a uniform solid disk ($I = \\frac{1}{2}MR^2$), and a thin cylindrical hoop ($I = MR^2$), all with identical mass $M$ and radius $R$, are released simultaneously from rest at the top of an inclined plane. If all roll without slipping, in what order do they reach the bottom?",
            "options": [
              "Sphere first, then Disk, then Hoop last",
              "Hoop first, then Disk, then Sphere last",
              "All three reach the bottom at the exact same instant",
              "Disk first, then Sphere, then Hoop last"
            ],
            "correctIndex": 0,
            "explanation": "Total energy is $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2(1 + c)$, where $I = cMR^2$. Objects with smaller $c$ divert less gravitational potential energy into rotation, leaving more for translational speed: $v = \\sqrt{\\frac{2gh}{1+c}}$. Since $c_{sphere} = 0.4 < c_{disk} = 0.5 < c_{hoop} = 1.0$, the sphere achieves the highest linear velocity and wins the race.",
            "distractorTip": "Smaller rotational inertia $I$ means faster acceleration down the incline; mass and radius cancel out completely!"
          },
          {
            "id": "ph6-l3-q2",
            "stem": "A uniform solid cylinder of mass $M$ and radius $R$ ($I = \\frac{1}{2}MR^2$) rolls without slipping across a level floor with linear center-of-mass speed $v$. What fraction of its total kinetic energy is in rotational form?",
            "options": [
              "$\\frac{1}{2}$ ($50.0\\%$)",
              "$\\frac{1}{3}$ ($33.3\\%$)",
              "$\\frac{2}{3}$ ($66.7\\%$)",
              "$\\frac{1}{4}$ ($25.0\\%$)"
            ],
            "correctIndex": 1,
            "explanation": "Translational energy: $K_{trans} = \\frac{1}{2}M v^2$. Rotational energy: $K_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(\\frac{1}{2}MR^2)(\\frac{v}{R})^2 = \\frac{1}{4}M v^2$. Total energy: $K_{tot} = \\frac{1}{2}M v^2 + \\frac{1}{4}M v^2 = \\frac{3}{4}M v^2$. The fraction in rotation is $\\frac{K_{rot}}{K_{tot}} = \\frac{1/4}{3/4} = \\frac{1}{3}$.",
            "distractorTip": "For rolling without slipping, always relate $\\omega = v/R$ so both kinetic energies are expressed in terms of $M v^2$."
          },
          {
            "id": "phys6-l3-q3",
            "stem": "A solid cylinder and a hollow hoop of identical mass and radius are released from rest at the top of an inclined plane. If both roll without slipping, which object reaches the bottom first and why?",
            "options": [
              "The solid cylinder reaches the bottom first because its smaller rotational inertia converts a larger fraction of potential energy into translational speed.",
              "The hollow hoop reaches the bottom first because its larger moment of inertia provides greater gravitational acceleration.",
              "Both reach the bottom at the exact same instant because their masses and radii are identical.",
              "The hollow hoop reaches the bottom first because of static friction."
            ],
            "correctIndex": 0,
            "explanation": "At the bottom, $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I(v/R)^2 = \\frac{1}{2}m v^2(1 + I/mR^2)$. The cylinder has smaller $I/mR^2 = 0.5$ compared to the hoop's $I/mR^2 = 1.0$. Because less energy is diverted into rotation, the cylinder achieves a higher translational speed $v$ and wins the race.",
            "distractorTip": "Smaller rotational inertia ($I$) means less energy tied up in spinning $\\implies$ higher translational velocity down an incline."
          }
        ]
      },
      {
        "id": 604,
        "unitIndex": 6,
        "levelNumber": 4,
        "uniqueKey": "phys-u6-l4",
        "topicNumber": "Topic 6.4",
        "name": "Angular Momentum & Angular Impulse",
        "subtitle": "L = Iω and ΔL = τ_net Δt",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph6-l4-q1",
            "stem": "A communication satellite has rotational inertia $I = 200\\text{ kg}\\cdot\\text{m}^2$. An attitude-control thruster fires for $\\Delta t = 2.0\\text{ s}$, exerting a constant torque of $\\tau = 50\\text{ N}\\cdot\\text{m}$. What is the angular impulse delivered to the satellite, and what is its change in angular velocity?",
            "options": [
              "Angular impulse $= 100\\text{ N}\\cdot\\text{m}\\cdot\\text{s}$ and $\\Delta\\omega = 2.0\\text{ rad/s}$",
              "Angular impulse $= 200\\text{ N}\\cdot\\text{m}\\cdot\\text{s}$ and $\\Delta\\omega = 1.0\\text{ rad/s}$",
              "Angular impulse $= 100\\text{ N}\\cdot\\text{m}\\cdot\\text{s}$ and $\\Delta\\omega = 0.50\\text{ rad/s}$",
              "Angular impulse $= 50\\text{ N}\\cdot\\text{m}\\cdot\\text{s}$ and $\\Delta\\omega = 0.25\\text{ rad/s}$"
            ],
            "correctIndex": 2,
            "explanation": "Angular impulse is $\\Delta L = \\tau \\Delta t = (50\\text{ N}\\cdot\\text{m})(2.0\\text{ s}) = 100\\text{ N}\\cdot\\text{m}\\cdot\\text{s}$. Since $\\Delta L = I\\Delta\\omega$, the change in angular velocity is $\\Delta\\omega = \\frac{\\Delta L}{I} = \\frac{100}{200} = 0.50\\text{ rad/s}$.",
            "distractorTip": "Angular impulse $\\tau \\Delta t$ changes angular momentum $L = I\\omega$, exactly as linear impulse $F\\Delta t$ changes linear momentum $mv$."
          },
          {
            "id": "ph6-l4-q2",
            "stem": "A point particle of mass $m$ travels in a straight line at constant velocity $\\vec{v}$ at a perpendicular distance $d$ from a fixed origin $O$. What is the angular momentum of this particle about origin $O$?",
            "options": [
              "$L = \\frac{1}{2}m v^2 d$",
              "$L = 0$, because the particle is moving in a straight line rather than rotating.",
              "$L = mvd$, but it decreases as the particle moves farther away.",
              "$L = mvd$, and it remains constant throughout the straight-line motion."
            ],
            "correctIndex": 3,
            "explanation": "Angular momentum of a point particle is $\\vec{L} = \\vec{r} \\times \\vec{p}$. The magnitude is $L = r p \\sin\\theta = p (r\\sin\\theta) = m v d$, where $d$ is the perpendicular distance (distance of closest approach). Since no torque acts about $O$ ($\\vec{\\tau} = \\vec{r} \\times \\vec{F}_{net} = 0$), $L$ remains completely constant!",
            "distractorTip": "A common AP misconception: objects do NOT need to travel in circles to have angular momentum about a chosen reference point!"
          },
          {
            "id": "phys6-l4-q3",
            "stem": "A particle of mass $m$ travels in a straight line with constant velocity $v$ at an impact parameter (perpendicular distance) $d$ from the origin. What is the particle's angular momentum with respect to the origin?",
            "options": [
              "Zero, because the particle is moving in a straight line rather than a circle.",
              "$m v / d$",
              "$m v d$",
              "$\\frac{1}{2} m v d^2$"
            ],
            "correctIndex": 2,
            "explanation": "Angular momentum of a point particle is defined by $\\vec{L} = \\vec{r} \\times \\vec{p}$. The magnitude is $L = r m v \\sin\\theta = m v d$, where $d = r \\sin\\theta$ is the perpendicular distance of closest approach to the origin. An object moving in a straight line has non-zero constant angular momentum about any point not on its path.",
            "distractorTip": "A particle moving in a straight line DOES have angular momentum relative to an origin: $L = m v r_\\perp$."
          }
        ]
      },
      {
        "id": 605,
        "unitIndex": 6,
        "levelNumber": 5,
        "uniqueKey": "phys-u6-l5",
        "topicNumber": "Topic 6.5",
        "name": "Conservation of Angular Momentum",
        "subtitle": "I_1 ω_1 = I_2 ω_2 and internal work done during contraction",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph6-l5-q1",
            "stem": "A figure skater spins with arms outstretched at $\\omega_1 = 3.0\\text{ rad/s}$ with rotational inertia $I_1 = 3.6\\text{ kg}\\cdot\\text{m}^2$. When she pulls her arms in close to her body, her rotational inertia drops to $I_2 = 1.2\\text{ kg}\\cdot\\text{m}^2$. What is her new angular velocity $\\omega_2$, and what happens to her rotational kinetic energy?",
            "options": [
              "$\\omega_2 = 9.0\\text{ rad/s}$, and her rotational kinetic energy triples.",
              "$\\omega_2 = 9.0\\text{ rad/s}$, and her rotational kinetic energy remains unchanged.",
              "$\\omega_2 = 1.0\\text{ rad/s}$, and her rotational kinetic energy drops by a third.",
              "$\\omega_2 = 6.0\\text{ rad/s}$, and her rotational kinetic energy doubles."
            ],
            "correctIndex": 0,
            "explanation": "Because external torque is zero: $I_1 \\omega_1 = I_2 \\omega_2 \\implies (3.6)(3.0) = (1.2) \\omega_2 \\implies \\omega_2 = 9.0\\text{ rad/s}$. Kinetic energy: $K_1 = \\frac{1}{2}(3.6)(3.0)^2 = 16.2\\text{ J}$. $K_2 = \\frac{1}{2}(1.2)(9.0)^2 = 48.6\\text{ J}$. Kinetic energy triples ($48.6 / 16.2 = 3$) because the skater’s arm muscles do positive internal work pulling inward against inertia.",
            "distractorTip": "Angular momentum IS conserved, but kinetic energy is NOT conserved—it increases due to the internal muscular work done pulling inward!"
          },
          {
            "id": "ph6-l5-q2",
            "stem": "A student sits on a rotating stool that is spinning freely without friction. The student holds two heavy dumbbells at arm's length. If the student pulls the dumbbells inward toward their chest, what happens to the angular momentum and total rotational kinetic energy of the system?",
            "options": [
              "Both angular momentum and rotational kinetic energy remain constant.",
              "Angular momentum remains constant, while rotational kinetic energy increases.",
              "Angular momentum increases, while rotational kinetic energy decreases.",
              "Both angular momentum and rotational kinetic energy decrease."
            ],
            "correctIndex": 1,
            "explanation": "With zero net external torque, angular momentum $L = I\\omega$ is conserved. Kinetic energy can be expressed as $K = \\frac{L^2}{2I}$. When dumbbells are pulled inward, $I$ decreases, so $K$ increases because the student performs positive internal work.",
            "distractorTip": "Notice the formula $K = \\frac{L^2}{2I}$: when $L$ is constant, decreasing $I$ directly increases $K$."
          },
          {
            "id": "phys6-l5-q3",
            "stem": "A spinning figure skater pulls her outstretched arms inward toward her torso. How do her rotational inertia, angular momentum, and rotational kinetic energy change?",
            "options": [
              "Rotational inertia decreases; angular momentum is conserved; rotational kinetic energy increases.",
              "Rotational inertia increases; angular momentum increases; kinetic energy decreases.",
              "Rotational inertia decreases; angular momentum decreases; kinetic energy is constant.",
              "All three quantities remain perfectly constant."
            ],
            "correctIndex": 0,
            "explanation": "Pulling arms inward reduces mass distribution from the rotation axis, decreasing rotational inertia ($I$). In the absence of external torque, angular momentum is strictly conserved ($L = I \\omega = \\text{const}$). Because $\\omega$ increases, rotational kinetic energy $K_{\\text{rot}} = \\frac{L^2}{2I}$ increases, funded by internal muscular work done by the skater.",
            "distractorTip": "Angular momentum is conserved, but rotational kinetic energy INCREASES due to the skater doing positive muscular work pulling her arms in."
          }
        ]
      },
      {
        "id": 606,
        "unitIndex": 6,
        "levelNumber": 6,
        "uniqueKey": "phys-u6-l6",
        "topicNumber": "Unit 6 Boss",
        "name": "Apex Rotational Systems Crucible",
        "subtitle": "Inelastic angular collisions, projectile-rod impacts, and sliding-to-rolling transition",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ph6-l6-q1",
            "stem": "A lump of sticky clay of mass $m = 0.50\\text{ kg}$ traveling horizontally at $v = 12\\text{ m/s}$ strikes and sticks to the bottom end of a uniform vertical rod of mass $M = 2.0\\text{ kg}$ and length $L = 1.0\\text{ m}$ pivoted at its upper end ($I_{rod} = \\frac{1}{3}ML^2$). What is the angular velocity $\\omega$ of the rod-clay system immediately after impact?",
            "options": [
              "$9.00\\text{ rad/s}$",
              "$7.20\\text{ rad/s}$",
              "$5.14\\text{ rad/s}$",
              "$3.60\\text{ rad/s}$"
            ],
            "correctIndex": 2,
            "explanation": "Angular momentum about the pivot is conserved. Initial angular momentum: $L_i = m v L = (0.50)(12)(1.0) = 6.0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. Total rotational inertia after impact: $I_{tot} = I_{rod} + m L^2 = \\frac{1}{3}(2.0)(1.0)^2 + (0.50)(1.0)^2 = \\frac{2}{3} + 0.50 = 0.667 + 0.50 = 1.167\\text{ kg}\\cdot\\text{m}^2$. Thus, $\\omega = \\frac{L_i}{I_{tot}} = \\frac{6.0}{1.167} \\approx 5.14\\text{ rad/s}$.",
            "distractorTip": "Always calculate total $I_{tot}$ by summing the rod’s inertia and the embedded clay particle ($mL^2$)."
          },
          {
            "id": "ph6-l6-q2",
            "stem": "A bowling ball of mass $M$ and radius $R$ ($I = \\frac{2}{5}MR^2$) is launched onto a lane with initial linear speed $v_0$ and zero initial rotation ($\\omega_0 = 0$). Kinetic friction causes the ball to decelerate linearly while accelerating angularly until it rolls without slipping. What is the final linear speed $v_f$ of the ball once pure rolling begins?",
            "options": [
              "$\\frac{5}{9}v_0$",
              "$\\frac{2}{5}v_0$",
              "$\\frac{1}{2}v_0$",
              "$\\frac{5}{7}v_0$"
            ],
            "correctIndex": 3,
            "explanation": "Conserve angular momentum about a point on the floor: friction acts at the floor level where its lever arm is zero, so torque about the floor is zero! Initial angular momentum about floor: $L_0 = M v_0 R$. When rolling without slipping ($v_f = \\omega_f R$): $L_f = M v_f R + I_{cm}\\omega_f = M v_f R + (\\frac{2}{5}MR^2)(\\frac{v_f}{R}) = \\frac{7}{5}M v_f R$. Equating: $M v_0 R = \\frac{7}{5}M v_f R \\implies v_f = \\frac{5}{7}v_0$.",
            "distractorTip": "Choosing a pivot on the floor eliminates the friction torque, making this famous AP Physics problem solvable in one line!"
          },
          {
            "id": "phys6-l6-q3",
            "stem": "A uniform horizontal rod of mass $M$ and length $L$ pinned at one end is struck at its free end by a lump of clay of mass $m$ moving perpendicularly with speed $v$. What physical quantity is strictly conserved during the impact?",
            "options": [
              "Linear momentum, because the pivot exerts zero reaction force.",
              "Angular momentum about the pivot point, because the pivot reaction force exerts zero torque at the pivot.",
              "Total mechanical kinetic energy.",
              "Mechanical potential energy of the clay."
            ],
            "correctIndex": 1,
            "explanation": "During the collision, the pivot exerts an external force, which violates conservation of linear momentum. However, because this pivot force acts at $r = 0$, it produces zero torque about the pivot axis ($\\tau = r F = 0$). Therefore, angular momentum about the pivot is strictly conserved.",
            "distractorTip": "Linear momentum is NOT conserved when a system is fixed to a pivot; ANGULAR momentum ABOUT THE PIVOT is conserved."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 7,
    "unitId": "u7",
    "title": "Unit 7: Oscillations (Simple Harmonic Motion)",
    "shortTitle": "Unit 7: SHM",
    "description": "Hooke’s law restoring force (F = -kx), kinematics of SHM, period of mass-spring (T = 2π√(m/k)) and pendulum (T = 2π√(L/g)), and energy conservation graphs",
    "examWeight": "2–4% of AP Exam",
    "biome": {
      "name": "Harmonic Haven & Pendulum Peaks",
      "icon": "🕰️",
      "accentColor": "#14B8A6",
      "secondaryColor": "#0D9488",
      "groundGradient": "from-teal-100 via-cyan-50 to-emerald-100",
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
        "uniqueKey": "phys-u7-l1",
        "topicNumber": "Topic 7.1",
        "name": "Defining SHM & Restoring Force",
        "subtitle": "Hooke's Law F = -kx and equilibrium position",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph7-l1-q1",
            "stem": "An object executes simple harmonic motion along the $x$-axis between $x = -A$ and $x = +A$. At which point in the oscillation is the magnitude of the object's acceleration at its maximum, and where is it zero?",
            "options": [
              "Acceleration magnitude is maximum at the turning points ($x = \\pm A$) and zero at the equilibrium position ($x = 0$).",
              "Acceleration magnitude is maximum at $x = 0$ and zero at $x = \\pm A$.",
              "Acceleration is constant in magnitude everywhere throughout the motion.",
              "Acceleration magnitude is maximum at $x = +A/2$ and zero at $-A/2$."
            ],
            "correctIndex": 0,
            "explanation": "By Hooke’s Law and Newton’s 2nd Law: $F_{net} = -kx = ma \\implies a = -\\frac{k}{m}x$. Acceleration is directly proportional to displacement from equilibrium. Therefore, $|a|$ is maximized at the turning points $|x| = A$, and $|a| = 0$ when passing through equilibrium ($x = 0$).",
            "distractorTip": "Velocity is maximum at $x = 0$ where acceleration is zero; velocity is zero at $x = \\pm A$ where acceleration is maximum!"
          },
          {
            "id": "ph7-l1-q2",
            "stem": "An ideal spring has a force constant $k$. If the spring is cut exactly in half, what is the spring constant $k'$ of each resulting half-spring?",
            "options": [
              "$\\frac{1}{2}k$",
              "$2k$",
              "$k$",
              "$4k$"
            ],
            "correctIndex": 1,
            "explanation": "Spring constant is inversely proportional to the active length of the spring: $k = \\frac{EA}{L}$. Cutting the spring in half halves the length, which doubles the stiffness ($k' = 2k$). Under the same applied force, each half stretches only half as much.",
            "distractorTip": "Shortening a spring makes it stiffer: cutting in half doubles $k$."
          },
          {
            "id": "phys7-l1-q3",
            "stem": "Which of the following force equations describes a system undergoing true Simple Harmonic Motion (SHM)?",
            "options": [
              "$F = -k x^2$",
              "$F = +k x$",
              "$F = -b v$",
              "$F = -k x$"
            ],
            "correctIndex": 3,
            "explanation": "Simple Harmonic Motion requires a linear restoring force directly proportional to displacement and directed toward the equilibrium position, mathematically given by Hooke's Law: $F = -k x$.",
            "distractorTip": "SHM requires $F \\propto -x$ (force directly proportional to negative displacement)."
          }
        ]
      },
      {
        "id": 702,
        "unitIndex": 7,
        "levelNumber": 2,
        "uniqueKey": "phys-u7-l2",
        "topicNumber": "Topic 7.2",
        "name": "Kinematics & Phase Relationships in SHM",
        "subtitle": "x(t), v(t), a(t) sinusoidal equations and phase shifts",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph7-l2-q1",
            "stem": "An oscillator moves in SHM with displacement $x(t) = A\\cos(\\omega t)$. When the object is at displacement $x = +\\frac{1}{2}A$, what is the magnitude and direction of its instantaneous acceleration?",
            "options": [
              "Magnitude $a = 0$, because the object is moving at constant velocity.",
              "Magnitude $a = A\\omega^2$, directed in the $+x$ direction.",
              "Magnitude $a = \\frac{1}{2}A\\omega^2$, directed toward the equilibrium position (in the $-x$ direction).",
              "Magnitude $a = \\frac{\\sqrt{3}}{2}A\\omega^2$, directed toward $+x$."
            ],
            "correctIndex": 2,
            "explanation": "In SHM, acceleration is $a(t) = -\\omega^2 x(t)$. When $x = +\\frac{1}{2}A$, $a = -\\omega^2(\\frac{1}{2}A) = -\\frac{1}{2}A\\omega^2$. The negative sign indicates the acceleration points back toward equilibrium (in the $-x$ direction).",
            "distractorTip": "Acceleration in SHM is always directed opposite to displacement: $a = -\\omega^2 x$."
          },
          {
            "id": "ph7-l2-q2",
            "stem": "In simple harmonic motion, what is the phase difference between the displacement $x(t)$ and velocity $v(t)$ curves, and between displacement $x(t)$ and acceleration $a(t)$ curves?",
            "options": [
              "Displacement leads velocity by $180^\\circ$, while acceleration leads by $360^\\circ$.",
              "Velocity and displacement are in phase ($0^\\circ$), while acceleration lags by $90^\\circ$.",
              "All three curves are in phase with zero phase difference.",
              "Velocity leads displacement by $90^\\circ$ ($\\pi/2\\text{ rad}$), while acceleration is $180^\\circ$ ($\\pi\\text{ rad}$) out of phase with displacement."
            ],
            "correctIndex": 3,
            "explanation": "Taking time derivatives: if $x = A\\cos(\\omega t)$, then $v = -A\\omega\\sin(\\omega t) = A\\omega\\cos(\\omega t + \\pi/2)$ ($90^\\circ$ phase shift), and $a = -A\\omega^2\\cos(\\omega t) = A\\omega^2\\cos(\\omega t + \\pi)$ ($180^\\circ$ phase shift, pointing in exact opposite direction).",
            "distractorTip": "When displacement is at a maximum peak, velocity is zero and acceleration is at a negative peak ($180^circ$ inversion)."
          },
          {
            "id": "phys7-l2-q3",
            "stem": "For an object oscillating in Simple Harmonic Motion with displacement $x(t) = A\\cos(\\omega t)$, what is the phase relationship between displacement and acceleration?",
            "options": [
              "They are exactly $180^\\circ$ ($\\pi$ radians) out of phase.",
              "They are in phase ($0^\\circ$ phase difference).",
              "Acceleration leads displacement by $90^\\circ$ ($\\pi/2$ radians).",
              "Displacement leads acceleration by $45^\\circ$."
            ],
            "correctIndex": 0,
            "explanation": "Differentiating position twice: $v(t) = -A\\omega \\sin(\\omega t)$, and $a(t) = -A\\omega^2 \\cos(\\omega t) = -\\omega^2 x(t)$. Because $a(t) \\propto -x(t)$, acceleration is always directed opposite to displacement, making them exactly $180^\\circ$ ($\\pi$ radians) out of phase.",
            "distractorTip": "Acceleration and displacement are $180^\\circ$ out of phase: when displacement is at $+A$, acceleration is at $-\\omega^2 A$."
          }
        ]
      },
      {
        "id": 703,
        "unitIndex": 7,
        "levelNumber": 3,
        "uniqueKey": "phys-u7-l3",
        "topicNumber": "Topic 7.3",
        "name": "Mass-Spring Systems",
        "subtitle": "T_s = 2π√(m/k) and horizontal vs vertical orientations",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph7-l3-q1",
            "stem": "A mass $m$ attached to a horizontal spring of constant $k$ oscillates with period $T_0$. If the mass is quadrupled to $4m$ while keeping the spring identical, what is the new oscillation period?",
            "options": [
              "$2 T_0$",
              "$4 T_0$",
              "$\\frac{1}{2} T_0$",
              "$\\sqrt{2} T_0$"
            ],
            "correctIndex": 0,
            "explanation": "The period of a mass-spring system is $T_s = 2\\pi\\sqrt{\\frac{m}{k}}$. Period is proportional to $\\sqrt{m}$. Quadrupling the mass ($4m$) yields $T_{new} = 2\\pi\\sqrt{\\frac{4m}{k}} = 2 \\times 2\\pi\\sqrt{\\frac{m}{k}} = 2 T_0$.",
            "distractorTip": "Do not multiply period by 4! The square root means a $4\\times$ mass increase only doubles the period."
          },
          {
            "id": "ph7-l3-q2",
            "stem": "A block on an ideal spring oscillates horizontally with period $T_{horiz}$. If the same block and spring are reoriented vertically in Earth's gravitational field and allowed to oscillate, how does the vertical period $T_{vert}$ compare to $T_{horiz}$?",
            "options": [
              "$T_{vert} > T_{horiz}$ because gravity pulls downward.",
              "$T_{vert} = T_{horiz}$",
              "$T_{vert} < T_{horiz}$ because gravity increases the net restoring force.",
              "$T_{vert} = 0$ because gravity prevents simple harmonic oscillation."
            ],
            "correctIndex": 1,
            "explanation": "Gravity simply shifts the equilibrium position downward by $\\Delta y = mg/k$. About this new equilibrium position, the net restoring force is still $F_{net} = -ky$, so the effective stiffness $k$ and inertia $m$ are unchanged. Thus $T = 2\\pi\\sqrt{m/k}$ is completely independent of orientation and gravity.",
            "distractorTip": "A famous AP trap: gravity changes the equilibrium position of a vertical spring, but NOT its oscillation period!"
          },
          {
            "id": "phys7-l3-q3",
            "stem": "A block attached to a horizontal spring oscillates with period $T$. If the mass of the block is quadrupled ($m' = 4m$), what is the new period of oscillation?",
            "options": [
              "$T' = 4T$",
              "$T' = 2T$",
              "$T' = T / 2$",
              "$T' = T / 4$"
            ],
            "correctIndex": 1,
            "explanation": "The period of a mass-spring oscillator is $T = 2\\pi \\sqrt{\\frac{m}{k}}$. Quadrupling the mass gives $T' = 2\\pi \\sqrt{\\frac{4m}{k}} = 2 \\left(2\\pi \\sqrt{\\frac{m}{k}}\\right) = 2T$.",
            "distractorTip": "Period scales with the square root of mass: quadrupling mass doubles the period."
          }
        ]
      },
      {
        "id": 704,
        "unitIndex": 7,
        "levelNumber": 4,
        "uniqueKey": "phys-u7-l4",
        "topicNumber": "Topic 7.4",
        "name": "Simple Pendulums",
        "subtitle": "T_p = 2π√(L/g) and small-angle approximation",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph7-l4-q1",
            "stem": "A simple pendulum of length $L$ with a bob of mass $m$ oscillates on Earth with period $T_0$. If this pendulum is transported to the Moon, where gravitational acceleration is $g_{moon} = \\frac{1}{6}g_{earth}$, what is its new period of small-angle oscillation?",
            "options": [
              "$6 T_0$",
              "$\\frac{T_0}{\\sqrt{6}}$",
              "$T_0\\sqrt{6}$",
              "$\\frac{1}{6} T_0$"
            ],
            "correctIndex": 2,
            "explanation": "The period of a simple pendulum is $T_p = 2\\pi\\sqrt{\\frac{L}{g}}$. Since $g$ appears in the denominator under the square root, dividing $g$ by $6$ multiplies the period by $\\sqrt{6}$: $T_{moon} = 2\\pi\\sqrt{\\frac{L}{g/6}} = \\sqrt{6} T_0$.",
            "distractorTip": "Lower gravity makes the restoring force weaker, causing the pendulum to swing more slowly (longer period)."
          },
          {
            "id": "ph7-l4-q2",
            "stem": "A simple pendulum consists of a small heavy lead bob of mass $M$ suspended by a light string. If the lead bob is replaced by an aluminum bob of the exact same geometric diameter but only one-third the mass ($M/3$), what happens to the period of small-angle oscillation?",
            "options": [
              "The period triples.",
              "The period increases by a factor of $\\sqrt{3}$.",
              "The period decreases by a factor of $\\sqrt{3}$.",
              "The period remains completely unchanged."
            ],
            "correctIndex": 3,
            "explanation": "For a simple pendulum, $T = 2\\pi\\sqrt{L/g}$. The restoring gravitational force is $F_g = mg\\sin\\theta$, and the inertia is $m$. By Newton's 2nd Law: $m a = -mg\\sin\\theta \\implies a = -g\\sin\\theta$. Mass cancels out entirely! Period is independent of mass.",
            "distractorTip": "Pendulum period depends ONLY on length $L$ and local gravity $g$, NEVER on mass or amplitude (for small angles $< 15^circ$)."
          },
          {
            "id": "phys7-l4-q3",
            "stem": "A simple pendulum of length $L$ oscillates on Earth with period $T = 2.0\\text{ s}$. If the pendulum is taken to the Moon where acceleration due to gravity is $g / 6$, what will happen to its period?",
            "options": [
              "It decreases by a factor of 6.",
              "It remains unchanged at 2.0 s because mass didn't change.",
              "It increases by a factor of $\\sqrt{6}$ ($T' = 2\\sqrt{6}\\text{ s} \\approx 4.9\\text{ s}$).",
              "It becomes infinite."
            ],
            "correctIndex": 2,
            "explanation": "The period of a simple pendulum is $T = 2\\pi \\sqrt{\\frac{L}{g}}$. On the Moon where $g' = g/6$, the period becomes $T' = 2\\pi \\sqrt{\\frac{L}{g/6}} = \\sqrt{6}\\left(2\\pi\\sqrt{\\frac{L}{g}}\\right) = \\sqrt{6} T \\approx 4.9\\text{ s}$.",
            "distractorTip": "Pendulum period is inversely proportional to $\\sqrt{g}$: weaker gravity on the Moon makes the pendulum swing slower (longer period)."
          }
        ]
      },
      {
        "id": 705,
        "unitIndex": 7,
        "levelNumber": 5,
        "uniqueKey": "phys-u7-l5",
        "topicNumber": "Topic 7.5",
        "name": "Energy in Simple Harmonic Motion",
        "subtitle": "E_total = 1/2 kA^2 and kinetic/potential energy trade-offs",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph7-l5-q1",
            "stem": "An object on a horizontal spring oscillates in SHM with total mechanical energy $E_0$ and amplitude $A$. When the object is at displacement $x = \\frac{1}{2}A$, what fraction of the total mechanical energy is stored as elastic potential energy $U_s$, and what fraction is kinetic energy $K$?",
            "options": [
              "$U_s = \\frac{1}{4}E_0$ and $K = \\frac{3}{4}E_0$",
              "$U_s = \\frac{1}{2}E_0$ and $K = \\frac{1}{2}E_0$",
              "$U_s = \\frac{3}{4}E_0$ and $K = \\frac{1}{4}E_0$",
              "$U_s = \\frac{1}{\\sqrt{2}}E_0$ and $K = \\frac{1}{\\sqrt{2}}E_0$"
            ],
            "correctIndex": 0,
            "explanation": "Total energy is $E_0 = \\frac{1}{2}kA^2$. At $x = \\frac{1}{2}A$, potential energy is $U_s = \\frac{1}{2}k(A/2)^2 = \\frac{1}{4}(\\frac{1}{2}kA^2) = \\frac{1}{4}E_0$. By conservation of energy, $K = E_0 - U_s = E_0 - \\frac{1}{4}E_0 = \\frac{3}{4}E_0$.",
            "distractorTip": "Energy is NOT half-and-half at half-amplitude! Energy depends on $x^2$, so at $x = A/2$, potential energy is $(1/2)^2 = 1/4$ of total."
          },
          {
            "id": "ph7-l5-q2",
            "stem": "A mass-spring oscillator has amplitude $A$ and maximum speed $v_{max}$. If the amplitude is doubled to $2A$, what are the new total mechanical energy and new maximum speed?",
            "options": [
              "Total energy doubles ($2E$), and maximum speed doubles ($2v_{max}$).",
              "Total energy quadruples ($4E$), and maximum speed doubles ($2v_{max}$).",
              "Total energy quadruples ($4E$), and maximum speed quadruples ($4v_{max}$).",
              "Total energy remains unchanged, while maximum speed doubles."
            ],
            "correctIndex": 1,
            "explanation": "Total energy: $E = \\frac{1}{2}kA^2 \\propto A^2$, so doubling amplitude yields $2^2 = 4\\times$ energy. Maximum speed: $v_{max} = A\\omega \\propto A$, so doubling amplitude doubles maximum speed ($2v_{max}$).",
            "distractorTip": "Total energy scales quadratically with amplitude ($A^2$), whereas maximum speed scales linearly with amplitude ($A$)."
          },
          {
            "id": "phys7-l5-q3",
            "stem": "At what position in its motion does an oscillating mass on a spring have its kinetic energy equal to its elastic potential energy?",
            "options": [
              "$x = \\pm \\frac{A}{2}$",
              "$x = 0$ (equilibrium)",
              "$x = \\pm A$ (maximum amplitude)",
              "$x = \\pm \\frac{A}{\\sqrt{2}}$"
            ],
            "correctIndex": 3,
            "explanation": "Total energy is $E = \\frac{1}{2}kA^2$. When $K = U$, $U = \\frac{1}{2}E \\implies \\frac{1}{2}kx^2 = \\frac{1}{2}\\left(\\frac{1}{2}kA^2\\right) \\implies x^2 = \\frac{A^2}{2} \\implies x = \\pm \\frac{A}{\\sqrt{2}} \\approx \\pm 0.707 A$.",
            "distractorTip": "Energy is split 50/50 when $x = A/\\sqrt{2} \\approx 0.71A$, NOT at $x = A/2$ (where $U$ is only $1/4$ of total energy)."
          }
        ]
      },
      {
        "id": 706,
        "unitIndex": 7,
        "levelNumber": 6,
        "uniqueKey": "phys-u7-l6",
        "topicNumber": "Unit 7 Boss",
        "name": "Apex Oscillations Crucible",
        "subtitle": "Pendulums in accelerating elevators, SHM energy transitions, and graphs",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ph7-l6-q1",
            "stem": "A $1.0\\text{ kg}$ block on a frictionless horizontal surface is attached to a spring of force constant $k = 100\\text{ N/m}$. The block is pulled to $x = 0.20\\text{ m}$ and released from rest. At the instant it passes through $x = 0.10\\text{ m}$, what is its speed, and what is the magnitude of its acceleration?",
            "options": [
              "$v = 1.41\\text{ m/s}$ and $a = 5.0\\text{ m/s}^2$",
              "$v = 2.00\\text{ m/s}$ and $a = 20.0\\text{ m/s}^2$",
              "$v = 1.73\\text{ m/s}$ and $a = 10.0\\text{ m/s}^2$",
              "$v = 1.00\\text{ m/s}$ and $a = 10.0\\text{ m/s}^2$"
            ],
            "correctIndex": 2,
            "explanation": "Total energy: $E = \\frac{1}{2}(100)(0.20)^2 = 2.0\\text{ J}$. At $x = 0.10\\text{ m}$: $U_s = \\frac{1}{2}(100)(0.10)^2 = 0.50\\text{ J}$. Kinetic energy: $K = 2.0 - 0.50 = 1.50\\text{ J}$. Speed: $v = \\sqrt{\\frac{2(1.50)}{1.0}} = \\sqrt{3.0} \\approx 1.73\\text{ m/s}$. Acceleration: $a = \\frac{kx}{m} = \\frac{100(0.10)}{1.0} = 10.0\\text{ m/s}^2$.",
            "distractorTip": "Combine energy conservation to find velocity and Newton’s 2nd Law ($F = kx = ma$) to find acceleration."
          },
          {
            "id": "ph7-l6-q2",
            "stem": "A simple pendulum of length $L = 1.0\\text{ m}$ is mounted inside an elevator cab that accelerates vertically upward at $a = 2.0\\text{ m/s}^2$. Taking $g = 9.8\\text{ m/s}^2$, what is the period of small-angle oscillation inside the accelerating elevator?",
            "options": [
              "$1.42\\text{ s}$",
              "$2.01\\text{ s}$",
              "$2.25\\text{ s}$",
              "$1.83\\text{ s}$"
            ],
            "correctIndex": 3,
            "explanation": "In an upwardly accelerating reference frame, the effective gravitational acceleration is $g_{eff} = g + a = 9.8 + 2.0 = 11.8\\text{ m/s}^2$. The period is $T = 2\\pi\\sqrt{\\frac{L}{g_{eff}}} = 2\\pi\\sqrt{\\frac{1.0}{11.8}} = 2\\pi(0.291) \\approx 1.83\\text{ s}$.",
            "distractorTip": "Upward acceleration increases effective gravity ($g_{eff} = g + a$), shortening the pendulum’s period."
          },
          {
            "id": "phys7-l6-q3",
            "stem": "A block-spring oscillator on a frictionless horizontal table is released from rest at $x = A$. What is the maximum speed $v_{\\text{max}}$ of the block during its oscillation?",
            "options": [
              "$v_{\\text{max}} = A \\sqrt{\\frac{k}{m}}$",
              "$v_{\\text{max}} = A \\frac{k}{m}$",
              "$v_{\\text{max}} = \\frac{1}{2} A \\sqrt{\\frac{k}{m}}$",
              "$v_{\\text{max}} = A^2 \\sqrt{\\frac{k}{m}}$"
            ],
            "correctIndex": 0,
            "explanation": "At equilibrium ($x = 0$), all potential energy is converted to kinetic energy: $\\frac{1}{2}m v_{\\text{max}}^2 = \\frac{1}{2}k A^2 \\implies v_{\\text{max}} = A \\sqrt{\\frac{k}{m}} = A \\omega$.",
            "distractorTip": "Maximum velocity in SHM: $v_{\\text{max}} = A\\omega = A\\sqrt{k/m}$."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 8,
    "unitId": "u8",
    "title": "Unit 8: Fluids",
    "shortTitle": "Unit 8: Fluids",
    "description": "Density, hydrostatic pressure (P = P_0 + ρgh), Pascal’s principle, buoyant force and Archimedes’ principle, fluid continuity (A_1 v_1 = A_2 v_2), and Bernoulli’s equation",
    "examWeight": "12–15% of AP Exam",
    "biome": {
      "name": "Hydrostatic Trench & Bernoulli Falls",
      "icon": "🌊",
      "accentColor": "#0EA5E9",
      "secondaryColor": "#0284C7",
      "groundGradient": "from-sky-100 via-blue-50 to-cyan-100",
      "cardBorder": "border-sky-500",
      "trailColor": "#0ea5e9",
      "nodeRing": "ring-sky-400/40",
      "skyTint": "from-sky-50 to-blue-50/30"
    },
    "levels": [
      {
        "id": 801,
        "unitIndex": 8,
        "levelNumber": 1,
        "uniqueKey": "phys-u8-l1",
        "topicNumber": "Topic 8.1",
        "name": "Density & Hydrostatic Pressure",
        "subtitle": "P = P_0 + ρgh, gauge pressure, and Pascal’s principle",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph8-l1-q1",
            "stem": "A scuba diver descends to a depth of $h = 10.0\\text{ m}$ below the surface of a freshwater lake (density $\\rho = 1000\\text{ kg/m}^3$). If atmospheric pressure at the surface is $P_0 = 1.01 \\times 10^5\\text{ Pa}$ and $g = 9.8\\text{ m/s}^2$, what is the absolute total pressure experienced by the diver?",
            "options": [
              "$1.99 \\times 10^5\\text{ Pa}$ (approx. $2.0\\text{ atm}$)",
              "$0.98 \\times 10^5\\text{ Pa}$",
              "$2.99 \\times 10^5\\text{ Pa}$",
              "$1.01 \\times 10^5\\text{ Pa}$"
            ],
            "correctIndex": 0,
            "explanation": "Absolute pressure: $P = P_0 + \\rho g h = 1.01 \\times 10^5 + (1000)(9.8)(10.0) = 1.01 \\times 10^5 + 0.98 \\times 10^5 = 1.99 \\times 10^5\\text{ Pa}$. (Gauge pressure is $0.98 \\times 10^5\\text{ Pa}$, but total absolute pressure includes $P_0$).",
            "distractorTip": "Absolute Pressure = Atmospheric Pressure + Gauge Pressure ($\\rho gh$). Every $10\\text{ m}$ of water adds approximately $1\\text{ atm}$ of pressure."
          },
          {
            "id": "ph8-l1-q2",
            "stem": "In a hydraulic lift, Input Piston 1 has a cross-sectional area of $0.020\\text{ m}^2$, while Output Piston 2 has an area of $0.80\\text{ m}^2$. By Pascal’s Principle, if an input force of $F_1 = 200\\text{ N}$ is applied to Piston 1, what lifting force $F_2$ is generated at Piston 2?",
            "options": [
              "$400\\text{ N}$",
              "$8000\\text{ N}$",
              "$1600\\text{ N}$",
              "$200\\text{ N}$"
            ],
            "correctIndex": 1,
            "explanation": "Pascal’s Principle states that pressure applied to an enclosed incompressible fluid is transmitted undiminished: $P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{A_2}{A_1}\\right) = 200 \\left(\\frac{0.80}{0.020}\\right) = 200 \\times 40 = 8000\\text{ N}$.",
            "distractorTip": "Mechanical advantage equals the area ratio $A_2/A_1$. Force increases, but work done remains identical ($F_1 d_1 = F_2 d_2$)."
          },
          {
            "id": "phys8-l1-q3",
            "stem": "A submarine dives to a depth of 50 m in seawater (density $\\rho = 1025\\text{ kg/m}^3$). What is the absolute hydrostatic pressure on the hull? (Use $P_{\\text{atm}} = 1.01 \\times 10^5\\text{ Pa}$, $g = 9.8\\text{ m/s}^2$)",
            "options": [
              "$5.02 \\times 10^5\\text{ Pa}$",
              "$6.03 \\times 10^5\\text{ Pa}$",
              "$1.01 \\times 10^5\\text{ Pa}$",
              "$1.02 \\times 10^6\\text{ Pa}$"
            ],
            "correctIndex": 1,
            "explanation": "Absolute pressure is $P = P_{\\text{atm}} + \\rho g h = 1.01 \\times 10^5 + (1025)(9.8)(50) = 1.01 \\times 10^5 + 5.02 \\times 10^5 = 6.03 \\times 10^5\\text{ Pa}$.",
            "distractorTip": "Absolute pressure = Atmospheric pressure + Gauge pressure ($P_0 + \\rho g h$)."
          }
        ]
      },
      {
        "id": 802,
        "unitIndex": 8,
        "levelNumber": 2,
        "uniqueKey": "phys-u8-l2",
        "topicNumber": "Topic 8.2",
        "name": "Buoyant Force & Archimedes’ Principle",
        "subtitle": "F_B = ρ_fluid V_sub g and floating fraction",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph8-l2-q1",
            "stem": "A solid block of wood with density $\\rho_{wood} = 600\\text{ kg/m}^3$ floats peacefully in freshwater ($\\rho_{water} = 1000\\text{ kg/m}^3$). What fraction of the wood’s total volume is submerged beneath the water surface?",
            "options": [
              "$100\\%$ ($1.00$ of total volume)",
              "$40\\%$ ($0.40$ of total volume)",
              "$60\\%$ ($0.60$ of total volume)",
              "$36\\%$ ($0.36$ of total volume)"
            ],
            "correctIndex": 2,
            "explanation": "For a floating object in static equilibrium, buoyant force equals weight: $F_B = F_g \\implies \\rho_{fluid} V_{sub} g = \\rho_{obj} V_{tot} g \\implies \\frac{V_{sub}}{V_{tot}} = \\frac{\\rho_{obj}}{\\rho_{fluid}} = \\frac{600}{1000} = 0.60 = 60\\%$.",
            "distractorTip": "For floating objects, submerged fraction equals the ratio of object density to fluid density: $V_{sub}/V_{tot} = \\rho_{obj}/\\rho_{fluid}$."
          },
          {
            "id": "ph8-l2-q2",
            "stem": "A solid metal sculpture weighs $60\\text{ N}$ in air. When completely submerged in freshwater ($\\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$), a spring scale measures its apparent weight as $40\\text{ N}$. What is the density of the metal?",
            "options": [
              "$6000\\text{ kg/m}^3$",
              "$2000\\text{ kg/m}^3$",
              "$1500\\text{ kg/m}^3$",
              "$3000\\text{ kg/m}^3$"
            ],
            "correctIndex": 3,
            "explanation": "Apparent weight: $W_{app} = W_{air} - F_B \\implies 40 = 60 - F_B \\implies F_B = 20\\text{ N}$. Buoyant force is weight of displaced water: $F_B = \\rho_w V g = 20\\text{ N} \\implies V = \\frac{20}{(1000)(10)} = 0.0020\\text{ m}^3$. Mass of sculpture is $m = \\frac{60}{10} = 6.0\\text{ kg}$. Density: $\\rho = \\frac{m}{V} = \\frac{6.0}{0.0020} = 3000\\text{ kg/m}^3$.",
            "distractorTip": "Buoyant force equals loss of weight when submerged: $F_B = W_{real} - W_{apparent}$."
          },
          {
            "id": "phys8-l2-q3",
            "stem": "An iceberg of density $900\\text{ kg/m}^3$ floats in seawater of density $1000\\text{ kg/m}^3$. What fraction of the iceberg's volume is submerged below the water surface?",
            "options": [
              "10%",
              "50%",
              "90%",
              "100%"
            ],
            "correctIndex": 2,
            "explanation": "For a floating object in equilibrium, buoyant force equals weight: $\\rho_{\\text{fluid}} V_{\\text{sub}} g = \\rho_{\\text{object}} V_{\\text{total}} g \\implies \\frac{V_{\\text{sub}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{object}}}{\\rho_{\\text{fluid}}} = \\frac{900}{1000} = 0.90 = 90\\%$.",
            "distractorTip": "Fraction submerged of a floating object is simply $\\frac{\\rho_{\\text{object}}}{\\rho_{\\text{fluid}}}$."
          }
        ]
      },
      {
        "id": 803,
        "unitIndex": 8,
        "levelNumber": 3,
        "uniqueKey": "phys-u8-l3",
        "topicNumber": "Topic 8.3",
        "name": "Fluid Dynamics & Continuity Equation",
        "subtitle": "Conservation of mass: A_1 v_1 = A_2 v_2 and volumetric flow rate Q",
        "difficulty": "Medium",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph8-l3-q1",
            "stem": "Water flows through a horizontal pipe of circular cross-section at speed $2.0\\text{ m/s}$ in a section with radius $R_1 = 0.040\\text{ m}$. The pipe narrows to a constriction of radius $R_2 = 0.020\\text{ m}$. What is the speed of the water in the constricted section?",
            "options": [
              "$8.0\\text{ m/s}$",
              "$4.0\\text{ m/s}$",
              "$16.0\\text{ m/s}$",
              "$1.0\\text{ m/s}$"
            ],
            "correctIndex": 0,
            "explanation": "By the Continuity Equation for incompressible fluids: $A_1 v_1 = A_2 v_2 \\implies (\\pi R_1^2) v_1 = (\\pi R_2^2) v_2$. Since radius is halved ($R_2 = R_1/2$), the cross-sectional area drops by a factor of $2^2 = 4$. To maintain constant volume flow rate, the speed must quadruple: $v_2 = 4 v_1 = 4(2.0) = 8.0\\text{ m/s}$.",
            "distractorTip": "Area scales with radius SQUARED ($A = \\pi R^2$); halving radius quadruples speed, it does not just double it!"
          },
          {
            "id": "ph8-l3-q2",
            "stem": "Blood flows through an aorta of cross-sectional area $A_0$ at average speed $v_0$. The aorta branches into $N$ identical parallel capillaries, each having cross-sectional area $a_c$. If total volume flow rate is conserved, what is the blood flow speed $v_c$ in each individual capillary?",
            "options": [
              "$v_c = \\frac{N A_0 v_0}{a_c}$",
              "$v_c = \\frac{A_0 v_0}{N a_c}$",
              "$v_c = \\frac{a_c v_0}{A_0}$",
              "$v_c = N v_0$"
            ],
            "correctIndex": 1,
            "explanation": "Total flow rate into the system equals total flow rate through the parallel branches: $Q = A_0 v_0 = (N a_c) v_c \\implies v_c = \\frac{A_0 v_0}{N a_c}$. Because the cumulative cross-sectional area $N a_c$ of billions of capillaries is vastly greater than $A_0$, capillary blood speed drops to a fraction of a millimeter per second, enabling efficient gas diffusion.",
            "distractorTip": "When a pipe branches into multiple parallel paths, equate input flow rate to the SUM of all branch flow rates: $A_1 v_1 = N A_2 v_2$."
          },
          {
            "id": "phys8-l3-q3",
            "stem": "Water flows through a horizontal pipe that narrows from a cross-sectional area of $0.04\\text{ m}^2$ to $0.01\\text{ m}^2$. If the flow speed in the wide section is $2\\text{ m/s}$, what is the flow speed in the narrow constriction?",
            "options": [
              "0.5 m/s",
              "2.0 m/s",
              "4.0 m/s",
              "8.0 m/s"
            ],
            "correctIndex": 3,
            "explanation": "By the continuity equation for incompressible fluids: $A_1 v_1 = A_2 v_2 \\implies (0.04)(2) = (0.01) v_2 \\implies 0.08 = 0.01 v_2 \\implies v_2 = 8\\text{ m/s}$.",
            "distractorTip": "Continuity equation $A_1 v_1 = A_2 v_2$: when area decreases by a factor of 4, velocity increases by a factor of 4."
          }
        ]
      },
      {
        "id": 804,
        "unitIndex": 8,
        "levelNumber": 4,
        "uniqueKey": "phys-u8-l4",
        "topicNumber": "Topic 8.4",
        "name": "Bernoulli’s Principle & Torricelli’s Law",
        "subtitle": "P + 1/2 ρv^2 + ρgy = constant and velocity/pressure trade-offs",
        "difficulty": "Hard",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "ph8-l4-q1",
            "stem": "In a horizontal water pipe, fluid flows from a wider section into a narrow constriction. Neglecting viscosity and elevation changes, what happens to the fluid speed and the internal static pressure in the narrow section?",
            "options": [
              "Fluid speed decreases, while internal static pressure increases.",
              "Fluid speed increases, and internal static pressure increases.",
              "Fluid speed increases, while internal static pressure decreases.",
              "Fluid speed remains constant, while internal static pressure drops to zero."
            ],
            "correctIndex": 2,
            "explanation": "By the continuity equation, narrowing the pipe increases fluid velocity. By Bernoulli’s equation along a horizontal streamline: $P + \\frac{1}{2}\\rho v^2 = \\text{constant}$. As kinetic energy density $\\frac{1}{2}\\rho v^2$ increases, internal static fluid pressure $P$ MUST decrease to conserve total mechanical energy.",
            "distractorTip": "Counter-intuitive AP trap: Fast-moving fluid has LOWER static pressure, not higher!"
          },
          {
            "id": "ph8-l4-q2",
            "stem": "A large, open water storage tank develops a small leak a distance $h = 5.0\\text{ m}$ below the top water surface. Using Torricelli’s Law (with $g = 9.8\\text{ m/s}^2$), what is the efflux speed of the water escaping from the hole?",
            "options": [
              "$14.0\\text{ m/s}$",
              "$49\\text{ m/s}$",
              "$7.0\\text{ m/s}$",
              "$9.9\\text{ m/s}$"
            ],
            "correctIndex": 3,
            "explanation": "Applying Bernoulli’s equation between the open surface and the leak: $P_{atm} + \\rho g h + 0 = P_{atm} + 0 + \\frac{1}{2}\\rho v^2 \\implies v = \\sqrt{2gh} = \\sqrt{2(9.8)(5.0)} = \\sqrt{98} \\approx 9.9\\text{ m/s}$. The efflux speed is identical to the free-fall speed from height $h$.",
            "distractorTip": "Torricelli’s law: $v = \\sqrt{2gh}$, exactly identical to free-fall velocity from the same height."
          },
          {
            "id": "phys8-l4-q3",
            "stem": "According to Bernoulli's Principle, what happens to internal fluid pressure when an incompressible fluid flows from a wider pipe into a narrower constriction at the same elevation?",
            "options": [
              "Internal fluid pressure decreases because the flow velocity increases.",
              "Internal fluid pressure increases because molecules collide more frequently.",
              "Internal fluid pressure remains strictly unchanged.",
              "Internal fluid pressure drops to absolute zero."
            ],
            "correctIndex": 0,
            "explanation": "By Bernoulli's equation ($P + \\frac{1}{2}\\rho v^2 = \\text{const}$ at constant height), an increase in fluid speed ($v$) requires a corresponding decrease in internal fluid pressure ($P$) to conserve mechanical energy.",
            "distractorTip": "Bernoulli effect: Higher speed $\\implies$ Lower pressure. Counterintuitive AP favorite!"
          }
        ]
      },
      {
        "id": 805,
        "unitIndex": 8,
        "levelNumber": 5,
        "uniqueKey": "phys-u8-l5",
        "topicNumber": "Unit 8 Boss",
        "name": "Apex Fluids Crucible",
        "subtitle": "Venturi meters, submerged tension, and integrated fluid mechanics",
        "difficulty": "Boss",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "ph8-l5-q1",
            "stem": "A heavy steel anchor of mass $M = 78\\text{ kg}$ and density $\\rho_{steel} = 7800\\text{ kg/m}^3$ is submerged in seawater (density $\\rho_{sea} = 1030\\text{ kg/m}^3$). What tension $T$ must a crane cable exert to support the anchor at rest underwater? (Use $g = 9.8\\text{ m/s}^2$)",
            "options": [
              "$663\\text{ N}$",
              "$764\\text{ N}$",
              "$560\\text{ N}$",
              "$101\\text{ N}$"
            ],
            "correctIndex": 0,
            "explanation": "Volume of the anchor: $V = \\frac{M}{\\rho_{steel}} = \\frac{78}{7800} = 0.010\\text{ m}^3$. Buoyant force exerted by seawater: $F_B = \\rho_{sea} V g = (1030)(0.010)(9.8) = 100.94\\text{ N}$. True weight in air: $F_g = Mg = (78)(9.8) = 764.4\\text{ N}$. By static equilibrium: $T + F_B = F_g \\implies T = F_g - F_B = 764.4 - 100.94 \\approx 663.5\\text{ N} \\approx 663\\text{ N}$.",
            "distractorTip": "Cable tension equals weight in air minus the buoyant force: $T = F_g - F_B$."
          },
          {
            "id": "ph8-l5-q2",
            "stem": "A Venturi meter consists of a horizontal pipe of area $A_1$ tapering to a throat of area $A_2 < A_1$. An incompressible fluid of density $\\rho$ flows through the meter. Which equation correctly expresses the pressure difference $\\Delta P = P_1 - P_2$ in terms of fluid speed $v_1$ in the wider section?",
            "options": [
              "$\\Delta P = \\frac{1}{2}\\rho v_1^2 \\left(\\frac{A_1}{A_2}\\right)$",
              "$\\Delta P = \\frac{1}{2}\\rho v_1^2 \\left[\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right]$",
              "$\\Delta P = \\rho v_1^2 \\left(1 - \\frac{A_2}{A_1}\\right)$",
              "$\\Delta P = \\frac{1}{2}\\rho v_1^2 \\left(1 - \\frac{A_1}{A_2}\\right)$"
            ],
            "correctIndex": 1,
            "explanation": "By continuity, $v_2 = v_1 \\frac{A_1}{A_2}$. Substituting into horizontal Bernoulli: $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2 \\implies P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2) = \\frac{1}{2}\\rho \\left[\\left(v_1\\frac{A_1}{A_2}\\right)^2 - v_1^2\\right] = \\frac{1}{2}\\rho v_1^2 \\left[\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right]$.",
            "distractorTip": "Notice that since $A_1 > A_2$, the bracketed term is positive, confirming $P_1 > P_2$ (lower pressure in the fast constricted throat)."
          },
          {
            "id": "phys8-l5-q3",
            "stem": "A large water storage tank open to the atmosphere at the top has a small puncture hole $5\\text{ m}$ below the water surface. Using Torricelli's Law, what is the initial efflux speed of the water exiting the hole? (Use $g = 9.8\\text{ m/s}^2$)",
            "options": [
              "4.9 m/s",
              "9.9 m/s",
              "19.6 m/s",
              "49.0 m/s"
            ],
            "correctIndex": 1,
            "explanation": "By Torricelli's Law (derived from Bernoulli's equation): $v = \\sqrt{2gh} = \\sqrt{2(9.8)(5)} = \\sqrt{98} \\approx 9.9\\text{ m/s}$. The efflux velocity equals the speed an object would acquire falling freely from height $h$.",
            "distractorTip": "Torricelli's law: $v = \\sqrt{2gh}$, identical to free fall from height $h$."
          }
        ]
      }
    ]
  }
];
