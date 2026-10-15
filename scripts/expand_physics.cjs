const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// We have 45 levels to add Q3 to:
// Target distribution: C: 12, A: 11, B: 11, D: 11 (Total: 45)

const q3Data = {
  // UNIT 1: Kinematics
  "phys-u1-l4": {
    id: "phys1-l4-q3",
    stem: "Train A moves north at 25 m/s relative to the ground. Train B moves south at 15 m/s relative to the ground on an adjacent parallel track. What is the velocity of Train B relative to an observer seated on Train A?",
    options: [
      "10 m/s north",
      "40 m/s south",
      "10 m/s south",
      "40 m/s north"
    ],
    correctIndex: 1, // B (1)
    explanation: "Relative velocity vector equation: $\\vec{v}_{B/A} = \\vec{v}_{B/G} - \\vec{v}_{A/G}$. Choosing north as positive: $v_{B/G} = -15\\text{ m/s}$ and $v_{A/G} = +25\\text{ m/s}$. Thus $v_{B/A} = -15 - 25 = -40\\text{ m/s}$, which corresponds to 40 m/s south.",
    distractorTip: "When moving in opposite directions, relative speed is the sum of their individual speeds: $25 + 15 = 40\\text{ m/s}$."
  },
  "phys-u1-l6": {
    id: "phys1-l6-q3",
    stem: "A projectile is launched from ground level with speed $v_0$ at angle $\\theta$ above the horizontal. At the very apex of its parabolic trajectory, what are the projectile's velocity and acceleration?",
    options: [
      "Velocity is zero; acceleration is zero.",
      "Velocity is $v_0 \\sin\\theta$ upward; acceleration is $g$ downward.",
      "Velocity is $v_0 \\cos\\theta$ horizontal; acceleration is $g$ downward.",
      "Velocity is $v_0$ horizontal; acceleration is zero."
    ],
    correctIndex: 2, // C (2)
    explanation: "At the peak, vertical velocity momentarily becomes zero ($v_y = 0$), but horizontal velocity remains constant at $v_x = v_0 \\cos\\theta$ in the absence of air resistance. Throughout the entire flight, the only force acting is gravity, so acceleration is constantly $g$ directed downward.",
    distractorTip: "Common AP trap: Acceleration is NEVER zero at the peak of a projectile's flight; gravity continually exerts a downward acceleration of $9.8\\text{ m/s}^2$."
  },

  // UNIT 2: Force & Translational Dynamics
  "phys-u2-l1": {
    id: "phys2-l1-q3",
    stem: "Two blocks of masses $m_1 = 2\\text{ kg}$ and $m_2 = 6\\text{ kg}$ are connected by a compressed, massless spring on a frictionless horizontal floor. When the spring is released, the 2 kg block accelerates to the left at $12\\text{ m/s}^2$. What is the acceleration of the center of mass of the two-block system?",
    options: [
      "0 m/s²",
      "4 m/s² to the right",
      "3 m/s² to the right",
      "6 m/s² to the left"
    ],
    correctIndex: 0, // A (0)
    explanation: "By Newton's second law for a system, the acceleration of the center of mass depends strictly on external forces: $\\Sigma \\vec{F}_{\\text{ext}} = M_{\\text{total}} \\vec{a}_{\\text{cm}}$. Because the spring force is entirely internal to the two-block system and the floor is frictionless, $\\Sigma \\vec{F}_{\\text{ext}} = 0$, meaning $\\vec{a}_{\\text{cm}} = 0$.",
    distractorTip: "Internal forces between objects in a system can NEVER accelerate the system's center of mass."
  },
  "phys-u2-l2": {
    id: "phys2-l2-q3",
    stem: "A block of mass $m$ rests on a rough ramp inclined at an angle $\\theta$ with respect to the horizontal. What is the magnitude of the normal force exerted by the ramp on the block?",
    options: [
      "$mg$",
      "$mg \\tan\\theta$",
      "$mg \\sin\\theta$",
      "$mg \\cos\\theta$"
    ],
    correctIndex: 3, // D (3)
    explanation: "In a coordinate system aligned with the incline, the block is in equilibrium perpendicular to the ramp surface. The component of gravity perpendicular to the incline is $mg \\cos\\theta$. Balancing forces perpendicular to the incline yields $F_N = mg \\cos\\theta$.",
    distractorTip: "Perpendicular to the incline: $F_N = mg \\cos\\theta$; Parallel to the incline: gravity component is $mg \\sin\\theta$."
  },
  "phys-u2-l3": {
    id: "phys2-l3-q3",
    stem: "A massive semi-truck collides head-on with a compact electric car. How does the magnitude of the force exerted by the truck on the car compare to the magnitude of the force exerted by the car on the truck during the impact?",
    options: [
      "The truck exerts a greater force because of its substantially larger mass.",
      "The forces are exactly equal in magnitude and opposite in direction by Newton's Third Law.",
      "The car exerts a greater force because it experiences a larger acceleration.",
      "The force ratio depends on the initial kinetic energies of the two vehicles."
    ],
    correctIndex: 1, // B (1)
    explanation: "Newton's Third Law states that when object A exerts a force on object B, object B simultaneously exerts an equal and opposite force on object A ($|\\vec{F}_{A \\text{ on } B}| = |\\vec{F}_{B \\text{ on } A}|$). The car experiences a much greater acceleration only because its mass is smaller ($a = F/m$).",
    distractorTip: "Newton's Third Law action-reaction pairs are ALWAYS equal in magnitude, regardless of the relative masses or velocities of the colliding objects."
  },
  "phys-u2-l4": {
    id: "phys2-l4-q3",
    stem: "In an ideal Atwood machine, two masses $m_1 = 3\\text{ kg}$ and $m_2 = 5\\text{ kg}$ are connected by a light string over a frictionless, massless pulley. What is the magnitude of the downward acceleration of the 5 kg mass?",
    options: [
      "$0.25 g = 2.45\\text{ m/s}^2$",
      "$0.50 g = 4.90\\text{ m/s}^2$",
      "$0.75 g = 7.35\\text{ m/s}^2$",
      "$1.00 g = 9.80\\text{ m/s}^2$"
    ],
    correctIndex: 0, // A (0)
    explanation: "Applying Newton's second law to the coupled system: $a = \\frac{(m_2 - m_1)g}{m_1 + m_2} = \\frac{(5 - 3)g}{5 + 3} = \\frac{2}{8}g = 0.25g = 2.45\\text{ m/s}^2$.",
    distractorTip: "Atwood machine acceleration is $a = \\frac{m_2 - m_1}{m_1 + m_2}g$, which is always less than $g$."
  },
  "phys-u2-l5": {
    id: "phys2-l5-q3",
    stem: "A 60 kg passenger stands on a digital bathroom scale inside an elevator. If the elevator is moving downward while slowing down at an acceleration of $2.0\\text{ m/s}^2$, what reading does the scale show? (Use $g = 9.8\\text{ m/s}^2$)",
    options: [
      "468 N",
      "588 N",
      "708 N",
      "120 N"
    ],
    correctIndex: 2, // C (2)
    explanation: "Moving downward while slowing down means the acceleration vector points UPWARD ($a = +2.0\\text{ m/s}^2$). Newton's second law: $F_N - mg = ma \\implies F_N = m(g + a) = 60(9.8 + 2.0) = 60(11.8) = 708\\text{ N}$. The scale reads higher than normal weight.",
    distractorTip: "Slowing down while moving downward requires an UPWARD net force and upward acceleration, making apparent weight ($F_N$) greater than true weight."
  },
  "phys-u2-l6": {
    id: "phys2-l6-q3",
    stem: "A horizontal pulling force of 30 N is applied to a 10 kg crate at rest on a horizontal surface where $\\mu_s = 0.40$ and $\\mu_k = 0.25$. What is the magnitude of the friction force acting on the crate? (Use $g = 9.8\\text{ m/s}^2$)",
    options: [
      "24.5 N",
      "39.2 N",
      "0 N",
      "30 N"
    ],
    correctIndex: 3, // D (3)
    explanation: "Maximum static friction is $f_{s,\\text{max}} = \\mu_s F_N = 0.40(10)(9.8) = 39.2\\text{ N}$. Because the applied horizontal force of 30 N is less than $f_{s,\\text{max}}$ (30 N < 39.2 N), the crate does NOT move. By Newton's first law, static friction matches the applied force exactly: $f_s = 30\\text{ N}$.",
    distractorTip: "Static friction is an adjustable force that equals the applied force up to its maximum threshold: $f_s = F_{\\text{applied}}$ when not slipping."
  },
  "phys-u2-l7": {
    id: "phys2-l7-q3",
    stem: "A race car travels at constant speed $v$ around a flat, unbanked circular track of radius $R$. What provides the centripetal force required to keep the car moving in a circle?",
    options: [
      "The normal force perpendicular to the road.",
      "Static friction directed radially inward toward the center of the track.",
      "Kinetic friction directed tangentially against the car's velocity.",
      "The engine's forward drive force."
    ],
    correctIndex: 1, // B (1)
    explanation: "Because the tires are rolling without skidding, the contact patch between tire and pavement is instantaneously at rest. Therefore, static friction directed perpendicular to motion (radially inward toward the center of the circle) provides the necessary centripetal force $f_s = m v^2 / R$.",
    distractorTip: "Centripetal force is not a new physical force; on a flat curve, it is provided by STATIC friction pointing inward toward the center."
  },
  "phys-u2-l8": {
    id: "phys2-l8-q3",
    stem: "A conical pendulum consists of a bob of mass $m$ attached to a light string of length $L$ swinging in a horizontal circle at constant speed. What is the vertical component of the string's tension force?",
    options: [
      "It must equal $mg$ to balance the gravitational force.",
      "It equals the centripetal force $m v^2 / r$.",
      "It equals zero because motion is purely horizontal.",
      "It equals $m(g + v^2/r)$."
    ],
    correctIndex: 0, // A (0)
    explanation: "Because the bob moves in a horizontal plane, there is zero vertical acceleration ($a_y = 0$). By Newton's second law in the vertical direction, the upward vertical component of tension must exactly balance the downward weight: $T \\cos\\theta = mg$.",
    distractorTip: "Separate conical pendulum forces: $T \\cos\\theta = mg$ (vertical balance); $T \\sin\\theta = m v^2/r$ (inward centripetal force)."
  },

  // UNIT 3: Work, Energy & Power
  "phys-u3-l1": {
    id: "phys3-l1-q3",
    stem: "A variable horizontal force $F(x) = 4x$ (where $F$ is in newtons and $x$ is in meters) acts on a box moving from $x = 0$ to $x = 3\\text{ m}$. What is the total work done by this force?",
    options: [
      "12 J",
      "36 J",
      "18 J",
      "24 J"
    ],
    correctIndex: 2, // C (2)
    explanation: "Work is the area under the force-position graph: $W = \\int_0^3 F(x) \\, dx = \\int_0^3 4x \\, dx = [2x^2]_0^3 = 2(3)^2 = 18\\text{ J}$. Alternatively, area of triangle = $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(3)(12) = 18\\text{ J}$.",
    distractorTip: "Work from a force-distance graph is the AREA under the curve, NOT simply $F_{\\text{final}} \\times d$."
  },
  "phys-u3-l2": {
    id: "phys3-l2-q3",
    stem: "If a car's speed increases from $10\\text{ m/s}$ to $30\\text{ m/s}$, by what factor does its kinetic energy increase?",
    options: [
      "Factor of 3",
      "Factor of 6",
      "Factor of 20",
      "Factor of 9"
    ],
    correctIndex: 3, // D (3)
    explanation: "Kinetic energy is proportional to the square of velocity: $K = \\frac{1}{2}mv^2$. Since speed triples ($30 / 10 = 3$), kinetic energy increases by $3^2 = 9$.",
    distractorTip: "Kinetic energy scales with the SQUARE of speed: doubling speed quadruples $K$; tripling speed multiplies $K$ by 9."
  },
  "phys-u3-l3": {
    id: "phys3-l3-q3",
    stem: "Why can gravitational potential energy only be defined for a SYSTEM containing at least two interacting objects (e.g., block + Earth), rather than for an isolated object alone?",
    options: [
      "Because isolated objects possess infinite internal thermal energy.",
      "Because potential energy is stored in the gravitational field generated by the mutual interaction between the object and the Earth.",
      "Because work cannot be calculated in non-inertial reference frames.",
      "Because gravity is a non-conservative force in open systems."
    ],
    correctIndex: 1, // B (1)
    explanation: "Potential energy is an energy of configuration or position within a force field. It requires a mutual interaction force between two or more objects (such as Earth and a block). An isolated single object has no gravitational field interaction with itself, so potential energy belongs to the Earth-object system.",
    distractorTip: "AP Physics 1 core concept: Potential energy belongs strictly to a multi-object SYSTEM (e.g. Earth + Ball), NEVER to a single isolated object."
  },
  "phys-u3-l4": {
    id: "phys3-l4-q3",
    stem: "A block of mass $m$ is compressed a distance $x$ against a spring of spring constant $k$ on a frictionless floor. When released, the block slides up a frictionless incline. What maximum vertical height $h$ does the block reach?",
    options: [
      "$h = \\frac{kx^2}{2mg}$",
      "$h = \\frac{kx}{mg}$",
      "$h = \\frac{kx^2}{mg}$",
      "$h = \\frac{k^2 x}{2mg}$"
    ],
    correctIndex: 0, // A (0)
    explanation: "By conservation of mechanical energy for the block-spring-Earth system: initial elastic potential energy equals final gravitational potential energy at maximum height: $\\frac{1}{2}kx^2 = mgh \\implies h = \\frac{kx^2}{2mg}$.",
    distractorTip: "Equate $\\frac{1}{2}kx^2 = mgh$ and solve directly for vertical height $h$."
  },
  "phys-u3-l5": {
    id: "phys3-l5-q3",
    stem: "An electric motor delivers a constant power of 1500 W while lifting a 50 kg load vertically at constant speed. What is the lifting speed? (Use $g = 10\\text{ m/s}^2$)",
    options: [
      "1.5 m/s",
      "0.3 m/s",
      "3.0 m/s",
      "30 m/s"
    ],
    correctIndex: 2, // C (2)
    explanation: "At constant speed, lifting force equals weight: $F = mg = 50(10) = 500\\text{ N}$. Power is related to force and velocity by $P = F v \\implies v = P / F = 1500 / 500 = 3.0\\text{ m/s}$.",
    distractorTip: "Power formula: $P = \\frac{W}{\\Delta t} = F v$ when moving at constant speed."
  },
  "phys-u3-l6": {
    id: "phys3-l6-q3",
    stem: "A conservative force field has potential energy function $U(x) = 5x^2 - 20x$. At what position $x$ is the force acting on the particle equal to zero?",
    options: [
      "$x = 4\\text{ m}$",
      "$x = 0\\text{ m}$",
      "$x = 10\\text{ m}$",
      "$x = 2\\text{ m}$"
    ],
    correctIndex: 3, // D (3)
    explanation: "Force is the negative derivative of potential energy: $F(x) = -\\frac{dU}{dx} = -(10x - 20) = -10x + 20$. Setting $F(x) = 0 \\implies -10x + 20 = 0 \\implies x = 2\\text{ m}$.",
    distractorTip: "Force is zero at the local extrema (minima or maxima) of the potential energy curve: $F = -dU/dx = 0$."
  },

  // UNIT 4: Linear Momentum
  "phys-u4-l1": {
    id: "phys4-l1-q3",
    stem: "Why do modern automobiles feature crumple zones that collapse during a collision?",
    options: [
      "To decrease the total change in momentum required to stop the car.",
      "To lengthen the time duration of the impact, thereby reducing the average force experienced by passengers.",
      "To convert inelastic collisions into perfectly elastic collisions.",
      "To increase the vehicle's rotational inertia."
    ],
    correctIndex: 1, // B (1)
    explanation: "By the impulse-momentum theorem, $J = \\Delta p = F_{\\text{avg}} \\Delta t$. To bring a moving car to rest, $\\Delta p$ is fixed. Extending the collision time $\\Delta t$ through crumple zones significantly reduces the average impact force $F_{\\text{avg}}$ transmitted to occupants.",
    distractorTip: "Impulse ($J = \\Delta p$) is fixed; increasing collision time $\\Delta t$ directly reduces impact force $F$."
  },
  "phys-u4-l2": {
    id: "phys4-l2-q3",
    stem: "A force-time graph for a baseball struck by a bat forms a triangle with base 0.02 s and peak force 8000 N. What is the magnitude of the impulse delivered to the ball?",
    options: [
      "80 N·s",
      "160 N·s",
      "40 N·s",
      "800 N·s"
    ],
    correctIndex: 0, // A (0)
    explanation: "Impulse is the area under the force-time curve. For a triangle, $\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(0.02\\text{ s})(8000\\text{ N}) = 80\\text{ N}\\cdot\\text{s}$.",
    distractorTip: "Impulse is the AREA of the $F$-$t$ graph: remember the $1/2$ factor for triangular profiles."
  },
  "phys-u4-l3": {
    id: "phys4-l3-q3",
    stem: "An astronaut of mass 80 kg initially at rest in deep space throws a 2 kg wrench forward with a velocity of 20 m/s relative to the space station. What is the astronaut's resulting recoil velocity?",
    options: [
      "0.25 m/s forward",
      "0.50 m/s backward",
      "2.00 m/s backward",
      "0.10 m/s backward"
    ],
    correctIndex: 1, // B (1)
    explanation: "By conservation of linear momentum for the isolated astronaut-wrench system: $p_{\\text{initial}} = p_{\\text{final}} \\implies 0 = m_a v_a + m_w v_w \\implies 0 = 80 v_a + 2(20) \\implies 80 v_a = -40 \\implies v_a = -0.5\\text{ m/s}$ (recoiling backward).",
    distractorTip: "Initial momentum is 0, so forward wrench momentum must equal backward astronaut momentum: $m_a v_a = m_w v_w$."
  },
  "phys-u4-l4": {
    id: "phys4-l4-q3",
    stem: "Two carts of equal mass collide on a frictionless track. In which type of collision is mechanical kinetic energy completely conserved?",
    options: [
      "Completely inelastic collision where they stick together.",
      "Partially inelastic collision with dented bumpers.",
      "A perfectly elastic collision.",
      "All collisions conserve kinetic energy by definition."
    ],
    correctIndex: 2, // C (2)
    explanation: "Momentum is conserved in all isolated collisions. However, kinetic energy is conserved ONLY in a perfectly elastic collision. In inelastic collisions, kinetic energy is converted into thermal energy, sound, and permanent deformation.",
    distractorTip: "Elastic collision = Momentum AND Kinetic Energy conserved; Inelastic collision = ONLY Momentum conserved."
  },
  "phys-u4-l5": {
    id: "phys4-l5-q3",
    stem: "A 1 kg object moving east at 4 m/s collides with a 1 kg object moving north at 3 m/s. The two objects stick together. What is the magnitude of their common velocity after collision?",
    options: [
      "3.5 m/s",
      "7.0 m/s",
      "1.0 m/s",
      "2.5 m/s"
    ],
    correctIndex: 3, // D (3)
    explanation: "Initial momentum components: $p_x = (1)(4) = 4\\text{ kg}\\cdot\\text{m/s}$; $p_y = (1)(3) = 3\\text{ kg}\\cdot\\text{m/s}$. Total momentum magnitude $p = \\sqrt{4^2 + 3^2} = 5\\text{ kg}\\cdot\\text{m/s}$. Total mass $M = 1 + 1 = 2\\text{ kg}$. Velocity magnitude $v = p / M = 5 / 2 = 2.5\\text{ m/s}$.",
    distractorTip: "In 2D collisions, sum momentum vectors using the Pythagorean theorem: $p_{\\text{total}} = \\sqrt{p_x^2 + p_y^2}$."
  },
  "phys-u4-l6": {
    id: "phys4-l6-q3",
    stem: "A ballistic pendulum consists of a suspended block of wood of mass $M$ struck by a bullet of mass $m$ moving with speed $v$. What physical principles are used sequentially to determine $v$ from the block's maximum height $h$?",
    options: [
      "Conservation of linear momentum during the collision, followed by conservation of mechanical energy during the swing.",
      "Conservation of mechanical energy during the collision, followed by impulse-momentum theorem.",
      "Newton's third law during the swing, followed by work-energy theorem.",
      "Conservation of kinetic energy throughout the entire motion."
    ],
    correctIndex: 0, // A (0)
    explanation: "Phase 1 (collision): Inelastic collision where kinetic energy is lost; linear momentum is strictly conserved ($m v = (m+M)V$). Phase 2 (swing): No non-conservative forces act, so mechanical energy is conserved as kinetic energy converts to potential energy ($\\frac{1}{2}(m+M)V^2 = (m+M)gh$).",
    distractorTip: "Two distinct steps: Momentum conserved during impact; Mechanical energy conserved during swing."
  },

  // UNIT 5: Torque & Rotational Dynamics
  "phys-u5-l1": {
    id: "phys5-l1-q3",
    stem: "A circular disc rotates with constant angular acceleration $\\alpha$. If its angular velocity increases from $4\\text{ rad/s}$ to $12\\text{ rad/s}$ over a time interval of $4\\text{ s}$, what angular displacement does the disc rotate through?",
    options: [
      "16 radians",
      "32 radians",
      "64 radians",
      "8 radians"
    ],
    correctIndex: 1, // B (1)
    explanation: "Using rotational kinematics: $\\Delta \\theta = \\frac{\\omega_0 + \\omega}{2} t = \\frac{4 + 12}{2}(4) = 8(4) = 32\\text{ radians}$.",
    distractorTip: "Rotational kinematics formulas mirror linear kinematics: $\\Delta \\theta = \\frac{\\omega_0 + \\omega}{2}t$."
  },
  "phys-u5-l2": {
    id: "phys5-l2-q3",
    stem: "A wrench of length 0.25 m is pulled with a force of 60 N at an angle of $30^\\circ$ relative to the handle. What torque is exerted on the bolt?",
    options: [
      "15.0 N·m",
      "13.0 N·m",
      "7.5 N·m",
      "30.0 N·m"
    ],
    correctIndex: 2, // C (2)
    explanation: "Torque is given by $\\tau = r F \\sin\\theta = (0.25\\text{ m})(60\\text{ N})\\sin(30^\\circ) = 15(0.5) = 7.5\\text{ N}\\cdot\\text{m}$.",
    distractorTip: "Remember $\\sin(30^\\circ) = 0.5$; only the perpendicular component of force generates rotational torque."
  },
  "phys-u5-l3": {
    id: "phys5-l3-q3",
    stem: "A solid cylinder and a thin hollow hoop of identical mass $M$ and radius $R$ are rotated about their central axes. How do their moments of inertia compare?",
    options: [
      "They have identical moments of inertia because their mass and radius are equal.",
      "The solid cylinder has twice the moment of inertia of the hollow hoop.",
      "The hollow hoop has a larger moment of inertia ($I_{\\text{hoop}} = M R^2 > I_{\\text{cylinder}} = \\frac{1}{2} M R^2$) because its mass is concentrated farther from the rotation axis.",
      "The hollow hoop has zero moment of inertia."
    ],
    correctIndex: 2, // C (2)
    explanation: "Rotational inertia depends not just on total mass, but on how that mass is distributed relative to the axis of rotation ($I = \\int r^2 dm$). All of the hoop's mass is at distance $R$ ($I = MR^2$), while the cylinder's mass is distributed from $0$ to $R$ ($I = \\frac{1}{2}MR^2$).",
    distractorTip: "Mass distributed farther from the axis gives greater rotational inertia ($MR^2 > \\frac{1}{2}MR^2$)."
  },
  "phys-u5-l4": {
    id: "phys5-l4-q3",
    stem: "A uniform wooden plank of length $4\\text{ m}$ and mass $20\\text{ kg}$ is balanced horizontally on a fulcrum placed at its center of mass. If a $10\\text{ kg}$ mass is placed $1.5\\text{ m}$ to the left of the fulcrum, where must a $15\\text{ kg}$ mass be placed to maintain static rotational equilibrium?",
    options: [
      "1.0 m to the right of the fulcrum",
      "1.5 m to the right of the fulcrum",
      "2.0 m to the right of the fulcrum",
      "0.5 m to the right of the fulcrum"
    ],
    correctIndex: 0, // A (0)
    explanation: "For rotational equilibrium, the sum of clockwise torques must balance counterclockwise torques: $\\Sigma \\tau = 0 \\implies m_1 g r_1 = m_2 g r_2 \\implies (10)(1.5) = (15) r_2 \\implies 15 = 15 r_2 \\implies r_2 = 1.0\\text{ m}$.",
    distractorTip: "Balance torques: $\\tau_{\\text{ccw}} = \\tau_{\\text{cw}} \\implies m_1 r_1 = m_2 r_2$."
  },
  "phys-u5-l5": {
    id: "phys5-l5-q3",
    stem: "A constant net torque of $24\\text{ N}\\cdot\\text{m}$ is applied to a flywheel with rotational inertia $I = 6\\text{ kg}\\cdot\\text{m}^2$. What is the flywheel's angular acceleration $\\alpha$?",
    options: [
      "144 rad/s²",
      "0.25 rad/s²",
      "2.0 rad/s²",
      "4.0 rad/s²"
    ],
    correctIndex: 3, // D (3)
    explanation: "By Newton's second law for rotation: $\\Sigma \\tau = I \\alpha \\implies \\alpha = \\frac{\\Sigma \\tau}{I} = \\frac{24\\text{ N}\\cdot\\text{m}}{6\\text{ kg}\\cdot\\text{m}^2} = 4.0\\text{ rad/s}^2$.",
    distractorTip: "Rotational form of $F = ma$ is $\\tau = I \\alpha$."
  },
  "phys-u5-l6": {
    id: "phys5-l6-q3",
    stem: "A uniform ladder leans against a frictionless vertical wall while resting on a rough horizontal floor. What provides the counterclockwise torque that prevents the ladder from slipping down?",
    options: [
      "The normal force exerted by the vertical wall.",
      "The static friction force exerted by the ground.",
      "The gravitational force acting at the center of the ladder.",
      "Air resistance against the rungs."
    ],
    correctIndex: 0, // A (0)
    explanation: "Taking the base of the ladder as the pivot point, gravity exerts a clockwise torque pulling the ladder downward. The normal force exerted by the frictionless vertical wall pushes horizontally outward, exerting a counterclockwise torque about the base that maintains rotational equilibrium.",
    distractorTip: "Choose the pivot at the base of the ladder to eliminate friction and floor normal force from the torque equation."
  },

  // UNIT 6: Energy & Momentum of Rotating Systems
  "phys-u6-l1": {
    id: "phys6-l1-q3",
    stem: "A solid sphere of mass $M$ and radius $R$ ($I = \\frac{2}{5}MR^2$) rolls across a floor without slipping at center-of-mass speed $v$. What is its total kinetic energy?",
    options: [
      "$\\frac{1}{2} M v^2$",
      "$\\frac{7}{10} M v^2$",
      "$\\frac{2}{5} M v^2$",
      "$\\frac{9}{10} M v^2$"
    ],
    correctIndex: 1, // B (1)
    explanation: "Total kinetic energy is translational plus rotational: $K = \\frac{1}{2}M v^2 + \\frac{1}{2}I \\omega^2$. Since it rolls without slipping, $\\omega = v/R$. $K = \\frac{1}{2}M v^2 + \\frac{1}{2}\\left(\\frac{2}{5}MR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}M v^2 + \\frac{1}{5}M v^2 = \\frac{7}{10}M v^2$.",
    distractorTip: "Rolling kinetic energy: $K_{\\text{total}} = K_{\\text{trans}} + K_{\\text{rot}} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$."
  },
  "phys-u6-l2": {
    id: "phys6-l2-q3",
    stem: "A net torque applied to a rotating turntable changes its angular velocity from $\\omega_0$ to $\\omega_f$. According to the Work-Energy Theorem for rotation, the rotational work done equals:",
    options: [
      "The change in angular momentum: $I\\omega_f - I\\omega_0$.",
      "The product of torque and angular acceleration: $\\tau \\alpha$.",
      "The change in rotational kinetic energy: $\\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_0^2$.",
      "The change in gravitational potential energy."
    ],
    correctIndex: 2, // C (2)
    explanation: "The rotational Work-Energy Theorem states that net rotational work done on an object equals the change in its rotational kinetic energy: $W_{\\text{rot}} = \\int \\tau d\\theta = \\Delta K_{\\text{rot}} = \\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_0^2$.",
    distractorTip: "Rotational work-energy theorem: $W = \\Delta K_{\\text{rot}} = \\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_i^2$."
  },
  "phys-u6-l3": {
    id: "phys6-l3-q3",
    stem: "A solid cylinder and a hollow hoop of identical mass and radius are released from rest at the top of an inclined plane. If both roll without slipping, which object reaches the bottom first and why?",
    options: [
      "The solid cylinder reaches the bottom first because its smaller rotational inertia converts a larger fraction of potential energy into translational speed.",
      "The hollow hoop reaches the bottom first because its larger moment of inertia provides greater gravitational acceleration.",
      "Both reach the bottom at the exact same instant because their masses and radii are identical.",
      "The hollow hoop reaches the bottom first because of static friction."
    ],
    correctIndex: 0, // A (0)
    explanation: "At the bottom, $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I(v/R)^2 = \\frac{1}{2}m v^2(1 + I/mR^2)$. The cylinder has smaller $I/mR^2 = 0.5$ compared to the hoop's $I/mR^2 = 1.0$. Because less energy is diverted into rotation, the cylinder achieves a higher translational speed $v$ and wins the race.",
    distractorTip: "Smaller rotational inertia ($I$) means less energy tied up in spinning $\\implies$ higher translational velocity down an incline."
  },
  "phys-u6-l4": {
    id: "phys6-l4-q3",
    stem: "A particle of mass $m$ travels in a straight line with constant velocity $v$ at an impact parameter (perpendicular distance) $d$ from the origin. What is the particle's angular momentum with respect to the origin?",
    options: [
      "Zero, because the particle is moving in a straight line rather than a circle.",
      "$m v / d$",
      "$m v d$",
      "$\\frac{1}{2} m v d^2$"
    ],
    correctIndex: 2, // C (2)
    explanation: "Angular momentum of a point particle is defined by $\\vec{L} = \\vec{r} \\times \\vec{p}$. The magnitude is $L = r m v \\sin\\theta = m v d$, where $d = r \\sin\\theta$ is the perpendicular distance of closest approach to the origin. An object moving in a straight line has non-zero constant angular momentum about any point not on its path.",
    distractorTip: "A particle moving in a straight line DOES have angular momentum relative to an origin: $L = m v r_\\perp$."
  },
  "phys-u6-l5": {
    id: "phys6-l5-q3",
    stem: "A spinning figure skater pulls her outstretched arms inward toward her torso. How do her rotational inertia, angular momentum, and rotational kinetic energy change?",
    options: [
      "Rotational inertia decreases; angular momentum is conserved; rotational kinetic energy increases.",
      "Rotational inertia increases; angular momentum increases; kinetic energy decreases.",
      "Rotational inertia decreases; angular momentum decreases; kinetic energy is constant.",
      "All three quantities remain perfectly constant."
    ],
    correctIndex: 0, // A (0)
    explanation: "Pulling arms inward reduces mass distribution from the rotation axis, decreasing rotational inertia ($I$). In the absence of external torque, angular momentum is strictly conserved ($L = I \\omega = \\text{const}$). Because $\\omega$ increases, rotational kinetic energy $K_{\\text{rot}} = \\frac{L^2}{2I}$ increases, funded by internal muscular work done by the skater.",
    distractorTip: "Angular momentum is conserved, but rotational kinetic energy INCREASES due to the skater doing positive muscular work pulling her arms in."
  },
  "phys-u6-l6": {
    id: "phys6-l6-q3",
    stem: "A uniform horizontal rod of mass $M$ and length $L$ pinned at one end is struck at its free end by a lump of clay of mass $m$ moving perpendicularly with speed $v$. What physical quantity is strictly conserved during the impact?",
    options: [
      "Linear momentum, because the pivot exerts zero reaction force.",
      "Angular momentum about the pivot point, because the pivot reaction force exerts zero torque at the pivot.",
      "Total mechanical kinetic energy.",
      "Mechanical potential energy of the clay."
    ],
    correctIndex: 1, // B (1)
    explanation: "During the collision, the pivot exerts an external force, which violates conservation of linear momentum. However, because this pivot force acts at $r = 0$, it produces zero torque about the pivot axis ($\\tau = r F = 0$). Therefore, angular momentum about the pivot is strictly conserved.",
    distractorTip: "Linear momentum is NOT conserved when a system is fixed to a pivot; ANGULAR momentum ABOUT THE PIVOT is conserved."
  },

  // UNIT 7: Oscillations (Simple Harmonic Motion)
  "phys-u7-l1": {
    id: "phys7-l1-q3",
    stem: "Which of the following force equations describes a system undergoing true Simple Harmonic Motion (SHM)?",
    options: [
      "$F = -k x^2$",
      "$F = +k x$",
      "$F = -b v$",
      "$F = -k x$"
    ],
    correctIndex: 3, // D (3)
    explanation: "Simple Harmonic Motion requires a linear restoring force directly proportional to displacement and directed toward the equilibrium position, mathematically given by Hooke's Law: $F = -k x$.",
    distractorTip: "SHM requires $F \\propto -x$ (force directly proportional to negative displacement)."
  },
  "phys-u7-l2": {
    id: "phys7-l2-q3",
    stem: "For an object oscillating in Simple Harmonic Motion with displacement $x(t) = A\\cos(\\omega t)$, what is the phase relationship between displacement and acceleration?",
    options: [
      "They are exactly $180^\\circ$ ($\\pi$ radians) out of phase.",
      "They are in phase ($0^\\circ$ phase difference).",
      "Acceleration leads displacement by $90^\\circ$ ($\\pi/2$ radians).",
      "Displacement leads acceleration by $45^\\circ$."
    ],
    correctIndex: 0, // A (0)
    explanation: "Differentiating position twice: $v(t) = -A\\omega \\sin(\\omega t)$, and $a(t) = -A\\omega^2 \\cos(\\omega t) = -\\omega^2 x(t)$. Because $a(t) \\propto -x(t)$, acceleration is always directed opposite to displacement, making them exactly $180^\\circ$ ($\\pi$ radians) out of phase.",
    distractorTip: "Acceleration and displacement are $180^\\circ$ out of phase: when displacement is at $+A$, acceleration is at $-\\omega^2 A$."
  },
  "phys-u7-l3": {
    id: "phys7-l3-q3",
    stem: "A block attached to a horizontal spring oscillates with period $T$. If the mass of the block is quadrupled ($m' = 4m$), what is the new period of oscillation?",
    options: [
      "$T' = 4T$",
      "$T' = 2T$",
      "$T' = T / 2$",
      "$T' = T / 4$"
    ],
    correctIndex: 1, // B (1)
    explanation: "The period of a mass-spring oscillator is $T = 2\\pi \\sqrt{\\frac{m}{k}}$. Quadrupling the mass gives $T' = 2\\pi \\sqrt{\\frac{4m}{k}} = 2 \\left(2\\pi \\sqrt{\\frac{m}{k}}\\right) = 2T$.",
    distractorTip: "Period scales with the square root of mass: quadrupling mass doubles the period."
  },
  "phys-u7-l4": {
    id: "phys7-l4-q3",
    stem: "A simple pendulum of length $L$ oscillates on Earth with period $T = 2.0\\text{ s}$. If the pendulum is taken to the Moon where acceleration due to gravity is $g / 6$, what will happen to its period?",
    options: [
      "It decreases by a factor of 6.",
      "It remains unchanged at 2.0 s because mass didn't change.",
      "It increases by a factor of $\\sqrt{6}$ ($T' = 2\\sqrt{6}\\text{ s} \\approx 4.9\\text{ s}$).",
      "It becomes infinite."
    ],
    correctIndex: 2, // C (2)
    explanation: "The period of a simple pendulum is $T = 2\\pi \\sqrt{\\frac{L}{g}}$. On the Moon where $g' = g/6$, the period becomes $T' = 2\\pi \\sqrt{\\frac{L}{g/6}} = \\sqrt{6}\\left(2\\pi\\sqrt{\\frac{L}{g}}\\right) = \\sqrt{6} T \\approx 4.9\\text{ s}$.",
    distractorTip: "Pendulum period is inversely proportional to $\\sqrt{g}$: weaker gravity on the Moon makes the pendulum swing slower (longer period)."
  },
  "phys-u7-l5": {
    id: "phys7-l5-q3",
    stem: "At what position in its motion does an oscillating mass on a spring have its kinetic energy equal to its elastic potential energy?",
    options: [
      "$x = \\pm \\frac{A}{2}$",
      "$x = 0$ (equilibrium)",
      "$x = \\pm A$ (maximum amplitude)",
      "$x = \\pm \\frac{A}{\\sqrt{2}}$"
    ],
    correctIndex: 3, // D (3)
    explanation: "Total energy is $E = \\frac{1}{2}kA^2$. When $K = U$, $U = \\frac{1}{2}E \\implies \\frac{1}{2}kx^2 = \\frac{1}{2}\\left(\\frac{1}{2}kA^2\\right) \\implies x^2 = \\frac{A^2}{2} \\implies x = \\pm \\frac{A}{\\sqrt{2}} \\approx \\pm 0.707 A$.",
    distractorTip: "Energy is split 50/50 when $x = A/\\sqrt{2} \\approx 0.71A$, NOT at $x = A/2$ (where $U$ is only $1/4$ of total energy)."
  },
  "phys-u7-l6": {
    id: "phys7-l6-q3",
    stem: "A block-spring oscillator on a frictionless horizontal table is released from rest at $x = A$. What is the maximum speed $v_{\\text{max}}$ of the block during its oscillation?",
    options: [
      "$v_{\\text{max}} = A \\sqrt{\\frac{k}{m}}$",
      "$v_{\\text{max}} = A \\frac{k}{m}$",
      "$v_{\\text{max}} = \\frac{1}{2} A \\sqrt{\\frac{k}{m}}$",
      "$v_{\\text{max}} = A^2 \\sqrt{\\frac{k}{m}}$"
    ],
    correctIndex: 0, // A (0)
    explanation: "At equilibrium ($x = 0$), all potential energy is converted to kinetic energy: $\\frac{1}{2}m v_{\\text{max}}^2 = \\frac{1}{2}k A^2 \\implies v_{\\text{max}} = A \\sqrt{\\frac{k}{m}} = A \\omega$.",
    distractorTip: "Maximum velocity in SHM: $v_{\\text{max}} = A\\omega = A\\sqrt{k/m}$."
  },

  // UNIT 8: Fluids
  "phys-u8-l1": {
    id: "phys8-l1-q3",
    stem: "A submarine dives to a depth of 50 m in seawater (density $\\rho = 1025\\text{ kg/m}^3$). What is the absolute hydrostatic pressure on the hull? (Use $P_{\\text{atm}} = 1.01 \\times 10^5\\text{ Pa}$, $g = 9.8\\text{ m/s}^2$)",
    options: [
      "$5.02 \\times 10^5\\text{ Pa}$",
      "$6.03 \\times 10^5\\text{ Pa}$",
      "$1.01 \\times 10^5\\text{ Pa}$",
      "$1.02 \\times 10^6\\text{ Pa}$"
    ],
    correctIndex: 1, // B (1)
    explanation: "Absolute pressure is $P = P_{\\text{atm}} + \\rho g h = 1.01 \\times 10^5 + (1025)(9.8)(50) = 1.01 \\times 10^5 + 5.02 \\times 10^5 = 6.03 \\times 10^5\\text{ Pa}$.",
    distractorTip: "Absolute pressure = Atmospheric pressure + Gauge pressure ($P_0 + \\rho g h$)."
  },
  "phys-u8-l2": {
    id: "phys8-l2-q3",
    stem: "An iceberg of density $900\\text{ kg/m}^3$ floats in seawater of density $1000\\text{ kg/m}^3$. What fraction of the iceberg's volume is submerged below the water surface?",
    options: [
      "10%",
      "50%",
      "90%",
      "100%"
    ],
    correctIndex: 2, // C (2)
    explanation: "For a floating object in equilibrium, buoyant force equals weight: $\\rho_{\\text{fluid}} V_{\\text{sub}} g = \\rho_{\\text{object}} V_{\\text{total}} g \\implies \\frac{V_{\\text{sub}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{object}}}{\\rho_{\\text{fluid}}} = \\frac{900}{1000} = 0.90 = 90\\%$.",
    distractorTip: "Fraction submerged of a floating object is simply $\\frac{\\rho_{\\text{object}}}{\\rho_{\\text{fluid}}}$."
  },
  "phys-u8-l3": {
    id: "phys8-l3-q3",
    stem: "Water flows through a horizontal pipe that narrows from a cross-sectional area of $0.04\\text{ m}^2$ to $0.01\\text{ m}^2$. If the flow speed in the wide section is $2\\text{ m/s}$, what is the flow speed in the narrow constriction?",
    options: [
      "0.5 m/s",
      "2.0 m/s",
      "4.0 m/s",
      "8.0 m/s"
    ],
    correctIndex: 3, // D (3)
    explanation: "By the continuity equation for incompressible fluids: $A_1 v_1 = A_2 v_2 \\implies (0.04)(2) = (0.01) v_2 \\implies 0.08 = 0.01 v_2 \\implies v_2 = 8\\text{ m/s}$.",
    distractorTip: "Continuity equation $A_1 v_1 = A_2 v_2$: when area decreases by a factor of 4, velocity increases by a factor of 4."
  },
  "phys-u8-l4": {
    id: "phys8-l4-q3",
    stem: "According to Bernoulli's Principle, what happens to internal fluid pressure when an incompressible fluid flows from a wider pipe into a narrower constriction at the same elevation?",
    options: [
      "Internal fluid pressure decreases because the flow velocity increases.",
      "Internal fluid pressure increases because molecules collide more frequently.",
      "Internal fluid pressure remains strictly unchanged.",
      "Internal fluid pressure drops to absolute zero."
    ],
    correctIndex: 0, // A (0)
    explanation: "By Bernoulli's equation ($P + \\frac{1}{2}\\rho v^2 = \\text{const}$ at constant height), an increase in fluid speed ($v$) requires a corresponding decrease in internal fluid pressure ($P$) to conserve mechanical energy.",
    distractorTip: "Bernoulli effect: Higher speed $\\implies$ Lower pressure. Counterintuitive AP favorite!"
  },
  "phys-u8-l5": {
    id: "phys8-l5-q3",
    stem: "A large water storage tank open to the atmosphere at the top has a small puncture hole $5\\text{ m}$ below the water surface. Using Torricelli's Law, what is the initial efflux speed of the water exiting the hole? (Use $g = 9.8\\text{ m/s}^2$)",
    options: [
      "4.9 m/s",
      "9.9 m/s",
      "19.6 m/s",
      "49.0 m/s"
    ],
    correctIndex: 1, // B (1)
    explanation: "By Torricelli's Law (derived from Bernoulli's equation): $v = \\sqrt{2gh} = \\sqrt{2(9.8)(5)} = \\sqrt{98} \\approx 9.9\\text{ m/s}$. The efflux velocity equals the speed an object would acquire falling freely from height $h$.",
    distractorTip: "Torricelli's law: $v = \\sqrt{2gh}$, identical to free fall from height $h$."
  }
};

const fullPath = path.resolve(__dirname, '../src/data/quiz/apPhysicsUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_PHYSICS_UNIT_DEFINITIONS;

let addedCount = 0;
units.forEach(u => {
  u.levels.forEach(l => {
    if (l.questions.length === 2) {
      if (q3Data[l.uniqueKey]) {
        l.questions.push(q3Data[l.uniqueKey]);
        addedCount++;
      } else {
        console.warn('Missing q3 for', l.uniqueKey);
      }
    }
  });
});

console.log('Added', addedCount, 'questions to AP Physics 1.');

const newCode = `// AP Physics 1 Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–8)
// Complete authentic coverage: 49 Levels, 147 Questions (3 Questions per Level).
// Balanced option distribution across A, B, C, D.

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_PHYSICS_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apPhysicsUnitsData.ts successfully.');
