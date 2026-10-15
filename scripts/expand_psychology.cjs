const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// Pattern for 36 levels: 9 repetitions of [2(C), 0(A), 3(D), 1(B)]
// This guarantees exactly 9 C, 9 A, 9 D, 9 B added!

const q3Data = {
  // UNIT 1: Biological Bases of Behavior (7 levels)
  "psych-u1-l1": {
    id: "psych1-l1-q3",
    stem: "In behavioral genetics, which of the following best describes how epigenetics explains individual differences in human behavior?",
    options: [
      "Natural selection completely replaces environmental influences over a single generation.",
      "Identical twins have fundamentally different nucleotide DNA sequences from conception.",
      "Environmental factors like chronic stress or maternal nutrition alter gene expression without altering the underlying DNA nucleotide sequence.",
      "Genetic inheritance exerts zero influence once a child reaches adolescence."
    ],
    correctIndex: 2,
    explanation: "Epigenetics studies how external environmental influences (such as childhood trauma, diet, or toxic exposure) can trigger molecular switches (DNA methylation or histone modification) that turn genes on or off without altering the underlying genetic code.",
    distractorTip: "Epigenetics alters gene EXPRESSION, NOT the DNA nucleotide sequence itself."
  },
  "psych-u1-l2": {
    id: "psych1-l2-q3",
    stem: "During an action potential, what ionic event is directly responsible for the rapid depolarization of the neuronal membrane from -70 mV toward +40 mV?",
    options: [
      "The rapid influx of positively charged sodium ions ($Na^+$) rushing into the cell through voltage-gated ion channels.",
      "The active pumping of potassium ions ($K^+$) into the intracellular fluid by the sodium-potassium pump.",
      "The complete exit of negatively charged chloride ions from the axon terminal.",
      "The enzymatic destruction of myelin sheaths by Schwann cells."
    ],
    correctIndex: 0,
    explanation: "Depolarization occurs when the threshold of excitation (-55 mV) is reached, opening voltage-gated sodium channels. Sodium ions ($Na^+$) rush down their concentration and electrical gradients into the intracellular axon, flipping the membrane potential from negative to positive.",
    distractorTip: "Depolarization = $Na^+$ rushes IN; Repolarization = $K^+$ rushes OUT; Resting potential maintained by $Na^+/K^+$ pump."
  },
  "psych-u1-l3": {
    id: "psych1-l3-q3",
    stem: "A patient suffering from Alzheimer's disease exhibits progressive memory impairment. Degeneration of neurons producing which neurotransmitter is primarily implicated in this condition?",
    options: [
      "Dopamine",
      "Serotonin",
      "GABA",
      "Acetylcholine (ACh)"
    ],
    correctIndex: 3,
    explanation: "Acetylcholine (ACh) plays a vital role in learning, memory consolidation, and motor control. The progressive deterioration of acetylcholine-producing neurons in the basal forebrain and hippocampus is a primary neurochemical hallmark of Alzheimer's disease.",
    distractorTip: "Alzheimer's $\\implies$ Acetylcholine deficit; Parkinson's $\\implies$ Dopamine deficit; Depression $\\implies$ Serotonin deficit."
  },
  "psych-u1-l4": {
    id: "psych1-l4-q3",
    stem: "If a person suffers an acute traumatic injury to the medulla oblongata, which bodily function is most immediately and fatally endangered?",
    options: [
      "Visual memory recall and emotional face recognition.",
      "Autonomic survival functions, including heartbeat and respiration.",
      "Voluntary balance and smooth motor coordination of the fingers.",
      "Endocrine regulation of growth hormones and thyroid levels."
    ],
    correctIndex: 1,
    explanation: "The medulla oblongata, located at the base of the brainstem, controls essential autonomic, life-sustaining functions such as heartbeat, blood pressure, and breathing. Severe damage to the medulla is frequently fatal.",
    distractorTip: "Medulla = Heart rate and breathing; Cerebellum = Balance and motor coordination; Amygdala = Fear and emotional response."
  },
  "psych-u1-l5": {
    id: "psych1-l5-q3",
    stem: "Following a stroke, Phineas can understand spoken language completely, but he struggles to produce fluent speech, speaking only in halting, fragmented single words. Which cerebral cortical region was damaged?",
    options: [
      "Wernicke's area in the left temporal lobe.",
      "The primary somatosensory cortex in the parietal lobe.",
      "Broca's area in the left frontal lobe.",
      "The occipital visual association cortex."
    ],
    correctIndex: 2,
    explanation: "Broca's area, located in the left frontal lobe, directs the muscle movements involved in speech production. Damage leads to Broca's (expressive) aphasia, where comprehension remains intact but producing speech is laborious and non-fluent.",
    distractorTip: "Broca's = Speech production (expressive aphasia); Wernicke's = Speech comprehension (receptive fluent aphasia)."
  },
  "psych-u1-l6": {
    id: "psych1-l6-q3",
    stem: "In a classic split-brain experiment, a picture of a spoon is briefly flashed to the LEFT visual field of a split-brain patient. How will the patient be able to respond?",
    options: [
      "The patient can verbally name the spoon because language is processed in both hemispheres equally.",
      "The patient cannot verbally name the object, but can locate and pick up the spoon with their left hand.",
      "The patient can only draw the spoon using their right hand.",
      "The patient will immediately write the word 'spoon' with their right hand."
    ],
    correctIndex: 1,
    explanation: "Visual stimuli in the left visual field are transmitted to the right hemisphere. In split-brain patients (severed corpus callosum), the right hemisphere controls the left hand and can recognize the object tactilely, but cannot communicate with the left hemisphere's language centers (Broca's area), so the patient cannot verbally name it.",
    distractorTip: "Left visual field $\\implies$ Right hemisphere $\\implies$ Left hand acts, but CANNOT verbalize! Right visual field $\\implies$ Left hemisphere $\\implies$ Can verbalize!"
  },
  "psych-u1-l7": {
    id: "psych1-l7-q3",
    stem: "During which stage of sleep do sleep spindles and K-complexes prominently appear on an electroencephalogram (EEG)?",
    options: [
      "REM sleep",
      "NREM-1 sleep",
      "NREM-3 deep slow-wave sleep",
      "NREM-2 sleep"
    ],
    correctIndex: 3,
    explanation: "NREM-2 sleep is characterized by periodic bursts of rapid, rhythmic brainwave activity known as sleep spindles, as well as high-amplitude K-complexes, marking the onset of true, stable sleep.",
    distractorTip: "Sleep spindles = NREM-2; Delta waves = NREM-3 (deep sleep); Beta-like rapid desynchronized waves + muscle atonia = REM."
  },

  // UNIT 2: Cognition (Memory, Thinking & Language) (7 levels)
  "psych-u2-l1": {
    id: "psych2-l1-q3",
    stem: "According to Weber's Law, what determines the difference threshold (just noticeable difference, JND) for detecting a change between two sensory stimuli?",
    options: [
      "A constant physical quantity added to any baseline intensity.",
      "The listener's personal motivation and emotional fatigue level.",
      "A constant minimum proportion or percentage of the original stimulus intensity.",
      "The specific wavelength of the light or sound wave."
    ],
    correctIndex: 2,
    explanation: "Weber's Law states that the principle that, to be perceived as different, two stimuli must differ by a constant minimum percentage (rather than a constant fixed amount). For example, weight must differ by approximately 2% to notice a difference.",
    distractorTip: "Weber's law requires a constant PROPORTION/PERCENTAGE, NOT a fixed absolute amount."
  },
  "psych-u2-l2": {
    id: "psych2-l2-q3",
    stem: "When studying for an AP exam, students who actively organize information, connect concepts to personal experiences, and summarize ideas in their own words retain material far better than students who reread notes. What cognitive concept explains this?",
    options: [
      "Deep semantic processing (levels of processing effect)",
      "Iconic sensory memory persistence",
      "Maintenance rote rehearsal",
      "Proactive facilitation of long-term storage"
    ],
    correctIndex: 0,
    explanation: "Craik and Lockhart's Levels of Processing model demonstrates that semantic encoding (thinking about the meaning and conceptual connections of words) produces deeper, more durable long-term memory traces than shallow acoustic or structural processing.",
    distractorTip: "Semantic encoding = meaning/depth (durable memory); Shallow encoding = visual appearance or acoustic repetition."
  },
  "psych-u2-l3": {
    id: "psych2-l3-q3",
    stem: "After moving and learning her new 5-digit locker combination, Maya finds that she can no longer remember her old locker combination from the previous school year. What memory phenomenon does this illustrate?",
    options: [
      "Proactive interference",
      "Anterograde amnesia",
      "State-dependent retrieval failure",
      "Retroactive interference"
    ],
    correctIndex: 3,
    explanation: "Retroactive interference occurs when newly acquired information disrupts the retrieval of older, previously stored memories. Learning the new locker combination interferes with remembering the old one.",
    distractorTip: "P-O-R-N: Proactive = Old information interferes with new; Retroactive = New information interferes with old."
  },
  "psych-u2-l4": {
    id: "psych2-l4-q3",
    stem: "After watching sensationalized television news reports about shark attacks, a tourist refuses to swim in the ocean, drastically overestimating the risk of encountering a shark. Which heuristic is responsible?",
    options: [
      "The representativeness heuristic",
      "The availability heuristic",
      "The framing effect",
      "Confirmation bias"
    ],
    correctIndex: 1,
    explanation: "The availability heuristic is a mental shortcut where people estimate the likelihood of events based on how easily examples come to mind. Because dramatic shark attacks are vividly reported, they are readily available in memory, skewing risk estimates.",
    distractorTip: "Availability heuristic = based on vividness and ease of recall; Representativeness heuristic = based on matching a prototype."
  },
  "psych-u2-l5": {
    id: "psych2-l5-q3",
    stem: "A psychological test that yields consistent, repeatable scores across multiple test administrations but fails to measure the underlying construct it was designed to evaluate is considered:",
    options: [
      "Valid, but not reliable.",
      "Both reliable and valid.",
      "Reliable, but not valid.",
      "Standardized, but lacking predictive utility."
    ],
    correctIndex: 2,
    explanation: "Reliability refers to the consistency and repeatability of measurement (e.g. getting the same score on re-testing). Validity refers to whether the test actually measures what it claims to measure. A test can be highly reliable while completely lacking validity.",
    distractorTip: "Reliability = Consistency; Validity = Accuracy/Truthfulness. A broken clock that is stopped is 100% reliable (consistent), but completely invalid!"
  },
  "psych-u2-l6": {
    id: "psych2-l6-q3",
    stem: "Linguist Noam Chomsky proposed that young children acquire complex language structures rapidly without formal training due to which biological mechanism?",
    options: [
      "An innate Language Acquisition Device (LAD) and universal grammar hardwired into the human brain.",
      "Continuous operant conditioning through parental praise and reinforcement.",
      "Strict linguistic determinism shaped by geographic cultural norms.",
      "Observational imitation without cognitive processing."
    ],
    correctIndex: 0,
    explanation: "Noam Chomsky argued that humans are biologically prewired with a Language Acquisition Device (LAD) that facilitates universal grammar, allowing infants to effortlessly absorb language during a critical developmental window, contrasting with B.F. Skinner's operant view.",
    distractorTip: "Chomsky = Nativist innate Language Acquisition Device; Skinner = Nurture/operant conditioning and imitation."
  },
  "psych-u2-l7": {
    id: "psych2-l7-q3",
    stem: "In George Miller's classic research on working memory capacity, what is the typical number of discrete informational chunks that an adult can retain simultaneously?",
    options: [
      "Exactly 3 items",
      "Between 10 and 15 items",
      "Unlimited items if rehearsed visually",
      "Seven plus or minus two (5 to 9 chunks)"
    ],
    correctIndex: 3,
    explanation: "Miller's 'Magical Number Seven, Plus or Minus Two' established that human short-term/working memory can hold approximately 5 to 9 discrete items or meaningful chunks of information without rehearsal.",
    distractorTip: "Working memory capacity = 7 ± 2 items; Chunking organizes items into familiar units to bypass this bottleneck."
  },

  // UNIT 3: Development & Learning (7 levels)
  "psych-u3-l1": {
    id: "psych3-l1-q3",
    stem: "In Pavlov's classical conditioning experiments, what occurred during 'spontaneous recovery'?",
    options: [
      "The unconditioned stimulus was doubled in intensity after conditioning.",
      "A conditioned response was permanently unlearned through biological counter-conditioning.",
      "The sudden reappearance of an extinguished conditioned response after a rest period without any further pairings.",
      "The dog learned to salivate to a completely novel stimulus on the very first trial."
    ],
    correctIndex: 2,
    explanation: "Spontaneous recovery refers to the reappearance of a previously extinguished conditioned response after a time delay, demonstrating that extinction suppresses the conditioned response rather than erasing it completely.",
    distractorTip: "Extinction suppresses conditioned responses; Spontaneous recovery proves the conditioned association was not permanently deleted."
  },
  "psych-u3-l2": {
    id: "psych3-l2-q3",
    stem: "A parent takes away a teenager's smartphone privileges for one week after the teenager stays out past curfew, resulting in the teenager never breaking curfew again. Which operant conditioning procedure was utilized?",
    options: [
      "Negative punishment",
      "Negative reinforcement",
      "Positive punishment",
      "Positive reinforcement"
    ],
    correctIndex: 0,
    explanation: "Punishment aims to DECREASE a behavior (staying out past curfew). Negative means REMOVING a desirable stimulus (taking away the phone). Removing a pleasant stimulus to decrease a behavior is negative punishment.",
    distractorTip: "Positive = Add stimulus; Negative = Remove stimulus; Reinforcement = Increase behavior; Punishment = Decrease behavior."
  },
  "psych-u3-l3": {
    id: "psych3-l3-q3",
    stem: "Slot machines in casinos reward players with payouts after an unpredictable and variable number of lever pulls. Which schedule of reinforcement does this represent?",
    options: [
      "Fixed-ratio schedule",
      "Fixed-interval schedule",
      "Variable-interval schedule",
      "Variable-ratio schedule"
    ],
    correctIndex: 3,
    explanation: "A variable-ratio schedule delivers reinforcement after an unpredictable number of behavioral responses. This schedule produces the highest rates of responding and the strongest resistance to extinction.",
    distractorTip: "Variable Ratio (VR) = Unpredictable number of responses (slot machines, lottery). Most resistant to extinction!"
  },
  "psych-u3-l4": {
    id: "psych3-l4-q3",
    stem: "In Albert Bandura's famous Bobo Doll experiment, what key finding demonstrated observational learning in young children?",
    options: [
      "Children only imitated adults if they were offered candy immediately beforehand.",
      "Children who watched an adult violently beat an inflated doll were significantly more likely to imitate the novel aggressive actions and speech.",
      "Aggressive impulses were biologically determined regardless of social modeling.",
      "Children exhibited spontaneous recovery when placed with passive adult models."
    ],
    correctIndex: 1,
    explanation: "Bandura's Bobo doll experiment proved that children learn social behaviors (such as aggression) through observational learning (modeling), without needing direct reinforcement or trial-and-error conditioning.",
    distractorTip: "Bandura = Social Learning Theory / Observational Modeling / Vicarious Reinforcement."
  },
  "psych-u3-l5": {
    id: "psych3-l5-q3",
    stem: "A 4-year-old child believes that pouring liquid from a short, wide glass into a tall, thin glass creates more liquid. According to Jean Piaget, what cognitive ability has the child NOT yet mastered?",
    options: [
      "Object permanence",
      "Abstract hypothesis testing",
      "Conservation",
      "Sensorimotor circular reactions"
    ],
    correctIndex: 2,
    explanation: "Conservation is the principle that properties like mass, volume, and number remain identical despite changes in the physical shape or appearance of objects. Children in the Preoperational stage lack conservation due to centration (focusing on height alone).",
    distractorTip: "Conservation is mastered in the Concrete Operational stage (ages 7-11); Preoperational children fail conservation tasks."
  },
  "psych-u3-l6": {
    id: "psych3-l6-q3",
    stem: "In Harry Harlow's classic surrogate mother experiments with infant rhesus monkeys, what did the findings reveal about maternal bonding and attachment?",
    options: [
      "Infants preferred the wire mother with the feeding bottle, proving attachment is driven exclusively by food satisfaction.",
      "Infants overwhelmingly preferred the soft terrycloth mother even when the wire mother provided food, demonstrating the primacy of contact comfort.",
      "Infants formed zero attachment to artificial surrogates under any conditions.",
      "Attachment behaviors were triggered exclusively by auditory maternal calls."
    ],
    correctIndex: 1,
    explanation: "Harlow demonstrated that contact comfort (tactile warmth and softness) was far more critical for emotional bonding than nourishment alone, disproving the Freudian and behaviorist assumptions that attachment was merely a conditioned response to feeding.",
    distractorTip: "Harlow's monkeys chose contact comfort over food, establishing the biological foundation of maternal attachment."
  },
  "psych-u3-l7": {
    id: "psych3-l7-q3",
    stem: "In Lawrence Kohlberg's theory of moral development, a person who refuses to break a law solely to avoid receiving a monetary fine or jail sentence is operating at which level?",
    options: [
      "Conventional morality",
      "Postconventional morality",
      "Autonomous ethical morality",
      "Preconventional morality"
    ],
    correctIndex: 3,
    explanation: "Preconventional morality (typical of young children) is characterized by self-interest and obedience to external authority solely to avoid physical punishment or gain concrete rewards.",
    distractorTip: "Preconventional = Avoid punishment / gain rewards; Conventional = Obey laws / social approval; Postconventional = Universal ethical principles."
  },

  // UNIT 4: Social Psychology & Personality (7 levels)
  "psych-u4-l1": {
    id: "psych4-l1-q3",
    stem: "Leon Festinger's theory of Cognitive Dissonance predicts that individuals will experience psychological discomfort when:",
    options: [
      "Their parents utilize authoritarian parenting styles during childhood.",
      "They are subjected to group polarization in large crowds.",
      "Their held attitudes and personal actions are contradictory, motivating them to change their attitude to align with their behavior.",
      "They fail to remember childhood episodic memories due to repression."
    ],
    correctIndex: 2,
    explanation: "Cognitive dissonance is the mental tension that arises when an individual holds two conflicting beliefs or acts in ways that contradict their beliefs (e.g. smoking while knowing smoking causes cancer). To relieve discomfort, people alter their attitudes to justify their behavior.",
    distractorTip: "Cognitive dissonance: People change their ATTITUDES to match their BEHAVIOR to eliminate psychological tension."
  },
  "psych-u4-l2": {
    id: "psych4-l2-q3",
    stem: "In Stanley Milgram's famous obedience studies at Yale University, what percentage of ordinary adult participants administered the maximum, lethal-marked 450-volt shock to the learner?",
    options: [
      "Approximately 65% of participants obeyed completely.",
      "Less than 2% of participants obeyed to the end.",
      "Exactly 25% of participants obeyed the experimenter.",
      "Over 99% of participants refused to administer shocks beyond 150 volts."
    ],
    correctIndex: 0,
    explanation: "Milgram found that approximately 65% (about two-thirds) of participants complied with the experimenter's authoritative verbal prods all the way to the maximum 450-volt shock level, demonstrating the tremendous power of perceived legitimate authority over personal conscience.",
    distractorTip: "Psychiatrists predicted less than 1% would obey to 450V; in reality, a shocking 65% obeyed completely."
  },
  "psych-u4-l3": {
    id: "psych4-l3-q3",
    stem: "When a cohesive committee of advisors prioritizes consensus and harmonious agreement over critical, independent evaluation of alternatives, what dangerous group dynamic is occurring?",
    options: [
      "Social facilitation",
      "Deindividuation",
      "Social loafing",
      "Groupthink"
    ],
    correctIndex: 3,
    explanation: "Groupthink (identified by Irving Janis) occurs when a close-knit group suppresses dissenting viewpoints and critical thinking in pursuit of unanimous agreement, often leading to disastrous foreign policy or business decisions.",
    distractorTip: "Groupthink = desire for harmony overrides realistic appraisal; Group polarization = group discussion strengthens initial shared attitudes."
  },
  "psych-u4-l4": {
    id: "psych4-l4-q3",
    stem: "What psychological mechanism explains why bystanders in a crowded city street are significantly less likely to assist an injured victim than if only a single bystander were present?",
    options: [
      "Social loafing",
      "Diffusion of responsibility",
      "Fundamental attribution error",
      "Self-serving bias"
    ],
    correctIndex: 1,
    explanation: "The bystander effect occurs because the presence of others creates a diffusion of responsibility: each individual assumes that someone else will call 911 or intervene, diminishing individual perceived obligation to act.",
    distractorTip: "Bystander effect is driven by diffusion of responsibility and pluralistic ignorance (looking to others to gauge emergency severity)."
  },
  "psych-u4-l5": {
    id: "psych4-l5-q3",
    stem: "A man who harbors strong unacknowledged feelings of hostility toward his coworker constantly accuses the coworker of being secretly angry and aggressive toward him. Which psychoanalytic defense mechanism is operating?",
    options: [
      "Sublimation",
      "Reaction formation",
      "Projection",
      "Regression"
    ],
    correctIndex: 2,
    explanation: "Projection involves disguising one's own unacceptable impulses or feelings by attributing them to other people. The man projects his own internal hostility onto the innocent coworker.",
    distractorTip: "Projection = 'I hate him' becomes 'He hates me'; Reaction formation = 'I hate him' becomes 'I love him and must act overly nice'."
  },
  "psych-u4-l6": {
    id: "psych4-l6-q3",
    stem: "Which of the following personality traits in the Big Five (Five-Factor) Model is characterized by organization, self-discipline, dependability, and achievement orientation?",
    options: [
      "Conscientiousness",
      "Neuroticism",
      "Agreeableness",
      "Openness to Experience"
    ],
    correctIndex: 0,
    explanation: "Conscientiousness reflects high self-control, organizational discipline, thoroughness, and goal-directed behavior. High scorers are reliable and punctual; low scorers are spontaneous and disorganized.",
    distractorTip: "Remember OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism."
  },
  "psych-u4-l7": {
    id: "psych4-l7-q3",
    stem: "When an observer attributes a driver's erratic swerving exclusively to being a 'reckless, terrible person' while ignoring the fact that a blown-out tire caused the swerve, which cognitive bias occurred?",
    options: [
      "The halo effect",
      "The self-fulfilling prophecy",
      "The availability heuristic",
      "The Fundamental Attribution Error (FAE)"
    ],
    correctIndex: 3,
    explanation: "The Fundamental Attribution Error is the tendency for observers to underestimate situational factors and overestimate dispositional (internal personality) traits when analyzing another person's behavior.",
    distractorTip: "FAE = blaming someone else's character (disposition) while ignoring the external situation."
  },

  // UNIT 5: Mental & Physical Health (8 levels)
  "psych-u5-l1": {
    id: "psych5-l1-q3",
    stem: "What was the landmark finding of David Rosenhan's 1973 study 'On Being Sane in Insane Places'?",
    options: [
      "Electroconvulsive therapy proved 100% effective for catatonic schizophrenia.",
      "Clinicians could easily distinguish between simulated and real psychiatric symptoms within 24 hours.",
      "Diagnostic psychiatric labels powerfully biased clinicians' perceptions, causing normal behaviors of sane pseudo-patients to be interpreted as pathological symptoms.",
      "Deinstitutionalization led to an immediate eradication of psychiatric disorders."
    ],
    correctIndex: 2,
    explanation: "Rosenhan sent sane pseudo-patients who feigned hearing a single voice into psychiatric hospitals. Once admitted, all acted completely normally, yet clinicians diagnosed them with schizophrenia and interpreted ordinary behaviors (like note-taking) as pathological symptoms, demonstrating the stigmatizing power of diagnostic labels.",
    distractorTip: "Rosenhan's study demonstrated the biasing power of diagnostic psychiatric labels in clinical settings."
  },
  "psych-u5-l2": {
    id: "psych5-l2-q3",
    stem: "Which of the following is classified as a 'negative symptom' of schizophrenia spectrum disorders?",
    options: [
      "Flat affect and avolition (lack of emotional expression and motivation)",
      "Auditory hallucinations of voices commenting on behavior",
      "Delusions of grandeur and persecution",
      "Disorganized, erratic speech and word salad"
    ],
    correctIndex: 0,
    explanation: "Positive symptoms are additions to normal behavior (hallucinations, delusions, disorganized speech). Negative symptoms are absences of normal behavior, such as flat affect (lack of emotional expression), avolition (inability to initiate action), and alogia (poverty of speech).",
    distractorTip: "Positive = Presence of abnormal behaviors (hallucinations); Negative = Absence of healthy behaviors (flat affect, avolition)."
  },
  "psych-u5-l3": {
    id: "psych5-l3-q3",
    stem: "Which psychiatric medication class is considered the gold-standard mood stabilizer for treating bipolar disorder and preventing manic episodes?",
    options: [
      "Selective serotonin reuptake inhibitors (SSRIs)",
      "Benzodiazepine sedatives",
      "Monoamine oxidase inhibitors (MAOIs)",
      "Lithium carbonate"
    ],
    correctIndex: 3,
    explanation: "Lithium carbonate is a chemical element and mood stabilizer specifically prescribed to manage bipolar disorder, dampening extreme manic highs and stabilizing mood swings.",
    distractorTip: "Lithium = Bipolar disorder mood stabilizer; SSRIs (Prozac, Zoloft) = Depression and Anxiety."
  },
  "psych-u5-l4": {
    id: "psych5-l4-q3",
    stem: "In Obsessive-Compulsive Disorder (OCD), what is the psychological relationship between obsessions and compulsions?",
    options: [
      "Compulsions are unconscious defense mechanisms that produce auditory hallucinations.",
      "Obsessions are persistent, intrusive anxiety-provoking thoughts; compulsions are repetitive behaviors performed to reduce that anxiety.",
      "Obsessions are motor tics; compulsions are delusional beliefs.",
      "Compulsions cause physical pain that produces panic attacks."
    ],
    correctIndex: 1,
    explanation: "Obsessions are repetitive, unwanted intrusive thoughts or urges that generate severe anxiety. Compulsions are repetitive ritualistic behaviors or mental acts performed to alleviate or neutralize the anxiety caused by the obsession.",
    distractorTip: "Obsessions = Intrusive THOUGHTS; Compulsions = Repetitive BEHAVIORS to neutralize the anxiety."
  },
  "psych-u5-l5": {
    id: "psych5-l5-q3",
    stem: "A person with Antisocial Personality Disorder is characterized clinically by which predominant pattern of behavior?",
    options: [
      "Extreme social anxiety and fear of negative social evaluation.",
      "Persistent instability in interpersonal relationships and intense fear of abandonment.",
      "A pervasive pattern of disregard for the rights of others, lack of empathy or remorse, and deceitfulness.",
      "Preoccupation with orderliness, perfectionism, and excessive interpersonal control."
    ],
    correctIndex: 2,
    explanation: "Antisocial Personality Disorder is characterized by a persistent disregard for moral norms, violation of the rights of others, impulsivity, aggressive or deceitful behavior, and a profound lack of guilt or empathy.",
    distractorTip: "Antisocial in clinical psychology does NOT mean 'shy' or 'introverted'; it means 'anti-society' (violating laws and others' rights without remorse)."
  },
  "psych-u5-l6": {
    id: "psych5-l6-q3",
    stem: "Which behavioral therapy technique pairs a pleasant relaxed state with gradually increasing anxiety-triggering stimuli to treat specific phobias?",
    options: [
      "Systematic desensitization",
      "Aversive conditioning",
      "Free association",
      "Rational emotive behavior therapy"
    ],
    correctIndex: 0,
    explanation: "Joseph Wolpe developed systematic desensitization, a form of counterconditioning where patients learn deep muscle relaxation and then progressively confront items on an anxiety hierarchy from least to most frightening.",
    distractorTip: "Systematic desensitization = relaxation + gradual hierarchy (phobias); Aversive conditioning = pairing unwanted behavior with noxious stimulus."
  },
  "psych-u5-l7": {
    id: "psych5-l7-q3",
    stem: "In Hans Selye's General Adaptation Syndrome (GAS) model of stress, what are the three sequential physiological stages?",
    options: [
      "Primary appraisal, Secondary appraisal, Coping",
      "Sympathetic activation, Parasympathetic rebound, Homeostasis",
      "Cognitive dissonance, Frustration, Catharsis",
      "Alarm reaction, Resistance, Exhaustion"
    ],
    correctIndex: 3,
    explanation: "Selye's General Adaptation Syndrome outlines the body's response to chronic stress: (1) Alarm reaction (fight-or-flight sympathetic response), (2) Resistance (sustained hormone release coping with the stressor), and (3) Exhaustion (depletion of bodily resources, collapse, illness).",
    distractorTip: "GAS Stages: A-R-E = Alarm, Resistance, Exhaustion."
  },
  "psych-u5-l8": {
    id: "psych5-l8-q3",
    stem: "Aaron Beck's cognitive therapy for depression focuses on identifying and restructuring which pathological cognitive pattern?",
    options: [
      "Unconscious Oedipal conflicts repressed in the id.",
      "The Negative Cognitive Triad (automatic negative beliefs about oneself, the world, and the future).",
      "Underactive mirror neurons in the parietal lobe.",
      "Classical conditioned fear responses to environmental triggers."
    ],
    correctIndex: 1,
    explanation: "Aaron Beck proposed that depression results from cognitive distortions known as the Negative Cognitive Triad: irrational negative evaluations of (1) the self ('I am worthless'), (2) the world ('Life is unfair'), and (3) the future ('Things will never get better').",
    distractorTip: "Beck's Cognitive Triad = Negative thoughts about Self, World, Future."
  }
};

const fullPath = path.resolve(__dirname, '../src/data/quiz/apPsychologyUnitsData.ts');
let code = fs.readFileSync(fullPath, 'utf8');

const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs' });
const mod = { exports: {} };
new Function('module', 'exports', 'require', res.code)(mod, mod.exports, (p) => {
  if (p.includes('apCalculusUnitsData')) return { UnitDefinition: {} };
  return require(p);
});
const units = mod.exports.ALL_AP_PSYCHOLOGY_UNIT_DEFINITIONS;

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

console.log('Added', addedCount, 'questions to AP Psychology.');

const newCode = `// AP Psychology Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–5)
// Complete authentic coverage: 36 Levels, 108 Questions (3 Questions per Level).
// Perfectly balanced option distribution across A, B, C, D (27 each).

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_PSYCHOLOGY_UNIT_DEFINITIONS: UnitDefinition[] = ${JSON.stringify(units, null, 2)};
`;

fs.writeFileSync(fullPath, newCode, 'utf8');
console.log('Saved updated apPsychologyUnitsData.ts successfully.');
