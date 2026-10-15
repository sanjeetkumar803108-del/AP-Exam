// AP Psychology Units Data
// Comprehensive College Board CED aligned curriculum (Units 1–5)
// Complete authentic coverage: 36 Levels, 108 Questions (3 Questions per Level).
// Perfectly balanced option distribution across A, B, C, D (27 each).

import { UnitDefinition } from './apCalculusUnitsData';

export const ALL_AP_PSYCHOLOGY_UNIT_DEFINITIONS: UnitDefinition[] = [
  {
    "unitIndex": 1,
    "unitId": "u1",
    "title": "Unit 1: Biological Bases of Behavior",
    "shortTitle": "Unit 1: Biological Bases",
    "description": "Heredity, epigenetics, neural conduction, neurotransmitters, brain structures, neuroplasticity, split-brain research, and sleep architecture",
    "examWeight": "15–25% of AP Exam",
    "biome": {
      "name": "Synaptic Valley & Cortical Peaks",
      "icon": "🧠",
      "accentColor": "#EC4899",
      "secondaryColor": "#DB2777",
      "groundGradient": "from-pink-100 via-rose-50 to-purple-100",
      "cardBorder": "border-pink-500",
      "trailColor": "#ec4899",
      "nodeRing": "ring-pink-400/40",
      "skyTint": "from-pink-50 to-rose-50/30"
    },
    "levels": [
      {
        "id": 101,
        "unitIndex": 1,
        "levelNumber": 1,
        "uniqueKey": "psych-u1-l1",
        "topicNumber": "Topic 1.1",
        "name": "Heredity, Epigenetics & Evolutionary Psychology",
        "subtitle": "Twin studies, heritability coefficients, and gene-environment interactions",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "psy1-l1-q1",
            "stem": "In behavioral genetics research, how do adoption and twin studies (such as the Minnesota Twin Study) demonstrate the heritability of psychological traits?",
            "options": [
              "Identical (monozygotic) twins reared in separate adoptive homes show significantly higher correlations in personality and intelligence traits than fraternal (dizygotic) twins reared together.",
              "Adopted children always develop identical psychological traits to their adoptive parents rather than biological parents.",
              "Environmental factors account for 100% of all individual variations in human cognitive ability.",
              "Fraternal twins share 100% identical genetic DNA, making them superior subjects for genetic research."
            ],
            "correctIndex": 0,
            "explanation": "Because monozygotic twins share 100% identical DNA, studying identical twins separated at birth isolates genetic influences from shared home environments, demonstrating substantial heritability for traits like extraversion, neuroticism, and IQ.",
            "distractorTip": "Remember: 'Heritability' estimates the proportion of variation among individuals in a group attributable to genetic differences; it does NOT mean 50% of an individual's trait is caused by genes."
          },
          {
            "id": "psy1-l1-q2",
            "stem": "The biological field of \"epigenetics\" investigates which molecular phenomenon?",
            "options": [
              "How surgical removal of brain tissue changes hereditary genetic code.",
              "How environmental exposures (such as chronic stress, diet, and trauma) can alter gene expression through chemical modifications (like DNA methylation) without changing the underlying DNA sequence.",
              "The direct cloning of human cerebral cortex tissue in laboratory Petri dishes.",
              "The evolutionary degeneration of vestigial cranial nerves across human generations."
            ],
            "correctIndex": 1,
            "explanation": "Epigenetics reveals that genes are not fixed destiny; environmental factors act like cellular switches (adding methyl or acetyl tags) that turn genes on or off, affecting vulnerability to depression, addiction, and metabolic disorders.",
            "distractorTip": "Epigenetics proves nature and nurture are not opposing forces, but continually interact to shape human phenotype and behavior."
          },
          {
            "id": "psych1-l1-q3",
            "stem": "In behavioral genetics, which of the following best describes how epigenetics explains individual differences in human behavior?",
            "options": [
              "Natural selection completely replaces environmental influences over a single generation.",
              "Identical twins have fundamentally different nucleotide DNA sequences from conception.",
              "Environmental factors like chronic stress or maternal nutrition alter gene expression without altering the underlying DNA nucleotide sequence.",
              "Genetic inheritance exerts zero influence once a child reaches adolescence."
            ],
            "correctIndex": 2,
            "explanation": "Epigenetics studies how external environmental influences (such as childhood trauma, diet, or toxic exposure) can trigger molecular switches (DNA methylation or histone modification) that turn genes on or off without altering the underlying genetic code.",
            "distractorTip": "Epigenetics alters gene EXPRESSION, NOT the DNA nucleotide sequence itself."
          }
        ]
      },
      {
        "id": 102,
        "unitIndex": 1,
        "levelNumber": 2,
        "uniqueKey": "psych-u1-l2",
        "topicNumber": "Topic 1.2",
        "name": "The Neuron, Action Potential & Synapse",
        "subtitle": "Resting potential, depolarization, all-or-none law, and myelin",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "psy1-l2-q1",
            "stem": "During the generation of an action potential, what rapid physiological process triggers the depolarization of the neuronal axon membrane?",
            "options": [
              "Chloride ions ($Cl^-$) are pumped out through active transport ATP pumps.",
              "Potassium ions ($K^+$) rush out of the cell into the extracellular space.",
              "Voltage-gated sodium channels open rapidly, allowing positively charged sodium ions ($Na^+$) to rush into the negatively charged interior of the axon.",
              "Myelin sheaths dissolve to allow electrical currents to float freely."
            ],
            "correctIndex": 2,
            "explanation": "At resting potential (-70 mV), the interior is negative relative to the outside. When threshold (-55 mV) is reached, voltage-gated $Na^+$ channels open, flooding positive ions into the cell and driving the membrane potential up to +30 mV.",
            "distractorTip": "Memory Rule: Sodium ($Na^+$) rushes IN to depolarize; Potassium ($K^+$) exits OUT to repolarize."
          },
          {
            "id": "psy1-l2-q2",
            "stem": "Which statement accurately describes the \"all-or-none principle\" governing neural transmission?",
            "options": [
              "Action potentials travel at varying speeds depending on whether the thought is happy or sad.",
              "Stronger sensory stimuli produce physically larger, taller action potential spikes along the axon.",
              "Neurons fire half-power action potentials if a stimulus reaches only 50% of the threshold.",
              "An individual neuron fires at full electrical strength if the threshold of excitation is reached, or does not fire at all; stimulus intensity is encoded by firing frequency, not spike size."
            ],
            "correctIndex": 3,
            "explanation": "Like flushing a toilet or firing a gun, once triggered, an action potential fires completely at constant speed and amplitude. Stronger physical stimuli (like a shout vs. a whisper) cause neurons to fire more FREQUENTLY, not with larger voltage spikes.",
            "distractorTip": "Classic AP Trap: Increased stimulus intensity = higher rate/frequency of firing, NEVER a larger action potential voltage."
          },
          {
            "id": "psych1-l2-q3",
            "stem": "During an action potential, what ionic event is directly responsible for the rapid depolarization of the neuronal membrane from -70 mV toward +40 mV?",
            "options": [
              "The rapid influx of positively charged sodium ions ($Na^+$) rushing into the cell through voltage-gated ion channels.",
              "The active pumping of potassium ions ($K^+$) into the intracellular fluid by the sodium-potassium pump.",
              "The complete exit of negatively charged chloride ions from the axon terminal.",
              "The enzymatic destruction of myelin sheaths by Schwann cells."
            ],
            "correctIndex": 0,
            "explanation": "Depolarization occurs when the threshold of excitation (-55 mV) is reached, opening voltage-gated sodium channels. Sodium ions ($Na^+$) rush down their concentration and electrical gradients into the intracellular axon, flipping the membrane potential from negative to positive.",
            "distractorTip": "Depolarization = $Na^+$ rushes IN; Repolarization = $K^+$ rushes OUT; Resting potential maintained by $Na^+/K^+$ pump."
          }
        ]
      },
      {
        "id": 103,
        "unitIndex": 1,
        "levelNumber": 3,
        "uniqueKey": "psych-u1-l3",
        "topicNumber": "Topic 1.2",
        "name": "Neurotransmitters & Neuromodulators",
        "subtitle": "Dopamine, Serotonin, Acetylcholine, GABA, and Agonist/Antagonist drugs",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "psy1-l3-q1",
            "stem": "Which neurotransmitter is the primary inhibitory chemical messenger in the central nervous system, functioning to calm neural firing and prevent anxiety and seizure activity?",
            "options": [
              "GABA (gamma-aminobutyric acid)",
              "Glutamate",
              "Dopamine",
              "Norepinephrine"
            ],
            "correctIndex": 0,
            "explanation": "GABA hyperpolarizes post-synaptic neurons, making them less likely to fire action potentials. Anti-anxiety medications (such as benzodiazepines and alcohol) act as GABA agonists to increase inhibition, producing calming effects.",
            "distractorTip": "Remember the opposing pair: Glutamate is the major EXCITATORY neurotransmitter; GABA is the major INHIBITORY neurotransmitter."
          },
          {
            "id": "psy1-l3-q2",
            "stem": "What is the pharmacological mechanism of an \"antagonist\" drug?",
            "options": [
              "It mimics the shape of a neurotransmitter to activate receptor sites and stimulate firing.",
              "It binds to post-synaptic receptor sites and blocks the endogenous neurotransmitter from binding, inhibiting or preventing the normal cellular response.",
              "It permanently destroys the pre-synaptic axon terminal through enzymatic degradation.",
              "It speeds up the velocity of action potential conduction along the myelin sheath."
            ],
            "correctIndex": 1,
            "explanation": "An antagonist (like curare blocking acetylcholine, or naloxone blocking opioid receptors) fits into the receptor like a key broken in a lock: it occupies the site without activating it, blocking the natural chemical from working.",
            "distractorTip": "Contrast: Agonists MIMIC or enhance neurotransmitter activity; Antagonists BLOCK or inhibit neurotransmitter activity."
          },
          {
            "id": "psych1-l3-q3",
            "stem": "A patient suffering from Alzheimer's disease exhibits progressive memory impairment. Degeneration of neurons producing which neurotransmitter is primarily implicated in this condition?",
            "options": [
              "Dopamine",
              "Serotonin",
              "GABA",
              "Acetylcholine (ACh)"
            ],
            "correctIndex": 3,
            "explanation": "Acetylcholine (ACh) plays a vital role in learning, memory consolidation, and motor control. The progressive deterioration of acetylcholine-producing neurons in the basal forebrain and hippocampus is a primary neurochemical hallmark of Alzheimer's disease.",
            "distractorTip": "Alzheimer's $\\implies$ Acetylcholine deficit; Parkinson's $\\implies$ Dopamine deficit; Depression $\\implies$ Serotonin deficit."
          }
        ]
      },
      {
        "id": 104,
        "unitIndex": 1,
        "levelNumber": 4,
        "uniqueKey": "psych-u1-l4",
        "topicNumber": "Topic 1.3 & 1.4",
        "name": "Nervous System Divisions & Hindbrain",
        "subtitle": "Sympathetic vs. Parasympathetic, Medulla, Pons, and Cerebellum",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "psy1-l4-q1",
            "stem": "When a hiker suddenly encounters a rattlesnake on a trail, which division of the autonomic nervous system is activated to mobilize the 'fight-or-flight' physiological response?",
            "options": [
              "The somatic nervous system, which regulates unconscious glandular hormone secretion.",
              "The parasympathetic nervous system, which constricts pupils, slows heart rate, and stimulates intestinal digestion.",
              "The sympathetic nervous system, which dilates pupils, accelerates heart rate, inhibits digestion, and stimulates glucose release from the liver.",
              "The central nervous system, which directly manufactures red blood cells in the spinal cord."
            ],
            "correctIndex": 2,
            "explanation": "The autonomic nervous system splits into: Sympathetic ('fight-or-flight' stress response) and Parasympathetic ('rest-and-digest' calming response that restores homeostasis once danger passes).",
            "distractorTip": "Memory Trick: Sympathetic excites you; Parasympathetic puts the brakes on (Paralyzes/calms) and brings you back to peace."
          },
          {
            "id": "psy1-l4-q2",
            "stem": "A patient who sustains traumatic physical damage to the cerebellum will exhibit which predominant symptom?",
            "options": [
              "Extreme hyperphagia (uncontrollable compulsive overeating) and morbid obesity.",
              "Total loss of long-term semantic memories and emotional facial recognition.",
              "The complete cessation of involuntary breathing and heartbeat.",
              "Impaired physical balance, lack of motor coordination, jerky movements, and difficulty executing smooth procedural muscle sequences."
            ],
            "correctIndex": 3,
            "explanation": "The cerebellum ('little brain' at the rear of the brainstem) coordinates voluntary balance, fine motor precision, posture, and implicitly conditioned procedural motor memories (like riding a bicycle or playing piano).",
            "distractorTip": "Damage to the medulla causes death from respiratory/cardiovascular failure; damage to the cerebellum causes clumsy, uncoordinated movement (ataxia)."
          },
          {
            "id": "psych1-l4-q3",
            "stem": "If a person suffers an acute traumatic injury to the medulla oblongata, which bodily function is most immediately and fatally endangered?",
            "options": [
              "Visual memory recall and emotional face recognition.",
              "Autonomic survival functions, including heartbeat and respiration.",
              "Voluntary balance and smooth motor coordination of the fingers.",
              "Endocrine regulation of growth hormones and thyroid levels."
            ],
            "correctIndex": 1,
            "explanation": "The medulla oblongata, located at the base of the brainstem, controls essential autonomic, life-sustaining functions such as heartbeat, blood pressure, and breathing. Severe damage to the medulla is frequently fatal.",
            "distractorTip": "Medulla = Heart rate and breathing; Cerebellum = Balance and motor coordination; Amygdala = Fear and emotional response."
          }
        ]
      },
      {
        "id": 105,
        "unitIndex": 1,
        "levelNumber": 5,
        "uniqueKey": "psych-u1-l5",
        "topicNumber": "Topic 1.4",
        "name": "The Limbic System & Cerebral Cortex",
        "subtitle": "Hippocampus, Amygdala, Hypothalamus, and Cortical Lobes",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy1-l5-q1",
            "stem": "Patient H.M. (Henry Molaison) underwent bilateral surgical resection of his medial temporal lobes—including his hippocampi—to treat severe epilepsy. Following surgery, what profound cognitive impairment did he exhibit?",
            "options": [
              "Severe anterograde amnesia: he could no longer consolidate new explicit/declarative long-term memories, though his procedural implicit memory remained intact.",
              "Complete loss of speech comprehension (Wernicke's aphasia) with preservation of motor speech.",
              "Inability to experience any basic sensory sensations of touch, temperature, or pain.",
              "Retrograde amnesia that erased all childhood autobiographical memories prior to the surgery."
            ],
            "correctIndex": 0,
            "explanation": "The hippocampus is essential for memory consolidation (converting short-term explicit memories into permanent cortical storage). H.M. could learn motor tasks like mirror-drawing (implicit/procedural), but had zero conscious recollection of ever practicing them.",
            "distractorTip": "The hippocampus does NOT permanently store memories; it processes and consolidates explicit memories before they are distributed to the cerebral cortex."
          },
          {
            "id": "psy1-l5-q2",
            "stem": "Which lobe of the cerebral cortex contains the primary somatosensory cortex responsible for processing bodily tactile sensations (touch, pressure, temperature, and pain)?",
            "options": [
              "Frontal lobe",
              "Parietal lobe",
              "Occipital lobe",
              "Temporal lobe"
            ],
            "correctIndex": 1,
            "explanation": "The parietal lobe houses the primary somatosensory cortex along the postcentral gyrus. The frontal lobe contains the motor cortex and prefrontal executive area; occipital processes vision; temporal processes audition and language comprehension.",
            "distractorTip": "Remember the homunculus map: body parts requiring fine tactile sensitivity (fingertips, lips) occupy disproportionately large areas of the somatosensory cortex."
          },
          {
            "id": "psych1-l5-q3",
            "stem": "Following a stroke, Phineas can understand spoken language completely, but he struggles to produce fluent speech, speaking only in halting, fragmented single words. Which cerebral cortical region was damaged?",
            "options": [
              "Wernicke's area in the left temporal lobe.",
              "The primary somatosensory cortex in the parietal lobe.",
              "Broca's area in the left frontal lobe.",
              "The occipital visual association cortex."
            ],
            "correctIndex": 2,
            "explanation": "Broca's area, located in the left frontal lobe, directs the muscle movements involved in speech production. Damage leads to Broca's (expressive) aphasia, where comprehension remains intact but producing speech is laborious and non-fluent.",
            "distractorTip": "Broca's = Speech production (expressive aphasia); Wernicke's = Speech comprehension (receptive fluent aphasia)."
          }
        ]
      },
      {
        "id": 106,
        "unitIndex": 1,
        "levelNumber": 6,
        "uniqueKey": "psych-u1-l6",
        "topicNumber": "Topic 1.5",
        "name": "Plasticity, Lateralization & Split-Brain",
        "subtitle": "Neuroplasticity, Sperry/Gazzaniga split-brain experiments, Broca's & Wernicke's",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy1-l6-q1",
            "stem": "A split-brain patient (whose corpus callosum was severed to prevent intractable epileptic seizures) is briefly flashed an image of an apple in their LEFT visual field. How will the patient respond when asked what they saw?",
            "options": [
              "They will experience a visual hallucination of an orange in their right eye.",
              "They will verbally declare 'I saw an apple' immediately and write the word with their right hand.",
              "They will verbally state they saw nothing, but their left hand (controlled by the right hemisphere) can correctly pick out the apple from behind a screen.",
              "They will permanently lose the ability to speak any English words."
            ],
            "correctIndex": 2,
            "explanation": "Visual information from the left visual field projects to the right hemisphere. In most humans, speech production (Broca's area) resides in the left hemisphere. Because the severed corpus callosum blocks transfer between hemispheres, the verbal left brain says 'I saw nothing,' but the nonverbal right brain directs the left hand to select the apple.",
            "distractorTip": "Sperry and Gazzaniga split-brain rule: Left visual field -> Right hemisphere -> Left hand can point, but CANNOT speak it!"
          },
          {
            "id": "psy1-l6-q2",
            "stem": "A patient suffering from damage to Broca's area in the left frontal lobe exhibits which distinct clinical speech presentation?",
            "options": [
              "The uncontrollable repetition of identical foreign language syllables.",
              "Receptive aphasia: fluent, grammatically effortless speech that is completely devoid of semantic meaning ('word salad').",
              "Total loss of pitch perception in both ears while maintaining normal speech syntax.",
              "Expressive aphasia: non-fluent, labored, halting speech with great difficulty articulating words, despite intact language comprehension."
            ],
            "correctIndex": 3,
            "explanation": "Broca's area controls motor speech production via the motor cortex ('Broca's = Broken Speech'). Wernicke's area in the left temporal lobe controls language comprehension ('Wernicke's = Wordy/Weird Salad').",
            "distractorTip": "Broca = Boca (mouth in Spanish, motor speech production). Wernicke = What? (comprehension deficit)."
          },
          {
            "id": "psych1-l6-q3",
            "stem": "In a classic split-brain experiment, a picture of a spoon is briefly flashed to the LEFT visual field of a split-brain patient. How will the patient be able to respond?",
            "options": [
              "The patient can verbally name the spoon because language is processed in both hemispheres equally.",
              "The patient cannot verbally name the object, but can locate and pick up the spoon with their left hand.",
              "The patient can only draw the spoon using their right hand.",
              "The patient will immediately write the word 'spoon' with their right hand."
            ],
            "correctIndex": 1,
            "explanation": "Visual stimuli in the left visual field are transmitted to the right hemisphere. In split-brain patients (severed corpus callosum), the right hemisphere controls the left hand and can recognize the object tactilely, but cannot communicate with the left hemisphere's language centers (Broca's area), so the patient cannot verbally name it.",
            "distractorTip": "Left visual field $\\implies$ Right hemisphere $\\implies$ Left hand acts, but CANNOT verbalize! Right visual field $\\implies$ Left hemisphere $\\implies$ Can verbalize!"
          }
        ]
      },
      {
        "id": 107,
        "unitIndex": 1,
        "levelNumber": 7,
        "uniqueKey": "psych-u1-l7",
        "topicNumber": "Topic 1.6",
        "name": "Sleep Architecture, Circadian Rhythms & Disorders",
        "subtitle": "REM vs. NREM, melatonin, suprachiasmatic nucleus, and sleep apnea",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "psy1-l7-q1",
            "stem": "Which brain structure serves as the primary master biological clock regulating circadian rhythms in response to retinal light cues?",
            "options": [
              "The suprachiasmatic nucleus (SCN) of the hypothalamus, which signals the pineal gland to suppress melatonin production in daylight.",
              "The amygdala in the temporal lobe, which increases adrenaline in darkness.",
              "The substantia nigra in the midbrain, which secretes dopamine during deep sleep.",
              "The broca motor area, which coordinates sleepwalking motor sequences."
            ],
            "correctIndex": 0,
            "explanation": "Morning light hits photoreceptors, sending signals to the SCN in the hypothalamus, which suppresses melatonin release from the pineal gland, promoting wakefulness. At night, decreased light signals the SCN to increase melatonin, inducing drowsiness.",
            "distractorTip": "Blue light from smartphones suppresses melatonin release from the pineal gland by artificially stimulating the SCN, disrupting circadian sleep onset."
          },
          {
            "id": "psy1-l7-q2",
            "stem": "Why is Rapid Eye Movement (REM) sleep frequently referred to as \"paradoxical sleep\"?",
            "options": [
              "Heart rate and respiration drop to zero while the sleeper physically walks around the room.",
              "The brain's cerebral cortex exhibits high electrical activity and beta-like waves resembling alert wakefulness, while the body's voluntary skeletal muscles are completely paralyzed (atonia).",
              "Dreams occur exclusively in black and white with no emotional narrative content.",
              "It occurs only during the first five minutes after falling asleep."
            ],
            "correctIndex": 1,
            "explanation": "During REM, the brain is internally highly active (vivid dreams, rapid brain waves, elevated heart rate), but the brainstem blocks motor signals to voluntary muscles (sleep paralysis/atonia), preventing the sleeper from physically acting out dreams.",
            "distractorTip": "REM sleep paralysis fails in REM Sleep Behavior Disorder, where patients physically thrash and act out violent nightmares."
          },
          {
            "id": "psych1-l7-q3",
            "stem": "During which stage of sleep do sleep spindles and K-complexes prominently appear on an electroencephalogram (EEG)?",
            "options": [
              "REM sleep",
              "NREM-1 sleep",
              "NREM-3 deep slow-wave sleep",
              "NREM-2 sleep"
            ],
            "correctIndex": 3,
            "explanation": "NREM-2 sleep is characterized by periodic bursts of rapid, rhythmic brainwave activity known as sleep spindles, as well as high-amplitude K-complexes, marking the onset of true, stable sleep.",
            "distractorTip": "Sleep spindles = NREM-2; Delta waves = NREM-3 (deep sleep); Beta-like rapid desynchronized waves + muscle atonia = REM."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 2,
    "unitId": "u2",
    "title": "Unit 2: Cognition (Memory, Thinking & Language)",
    "shortTitle": "Unit 2: Cognition",
    "description": "Sensation/perception thresholds, memory stages, forgetting, heuristics and cognitive biases, intelligence testing, and language development",
    "examWeight": "15–25% of AP Exam",
    "biome": {
      "name": "Archive of Mnemosyne & Neural Pathways",
      "icon": "💡",
      "accentColor": "#8B5CF6",
      "secondaryColor": "#7C3AED",
      "groundGradient": "from-purple-100 via-indigo-50 to-pink-100",
      "cardBorder": "border-purple-500",
      "trailColor": "#8b5cf6",
      "nodeRing": "ring-purple-400/40",
      "skyTint": "from-purple-50 to-indigo-50/30"
    },
    "levels": [
      {
        "id": 201,
        "unitIndex": 2,
        "levelNumber": 1,
        "uniqueKey": "psych-u2-l1",
        "topicNumber": "Topic 2.1",
        "name": "Sensation, Perception & Gestalt Principles",
        "subtitle": "Transduction, Weber's law, signal detection, and perceptual organization",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "psy2-l1-q1",
            "stem": "According to Weber's Law of psychophysics, the \"difference threshold\" (just noticeable difference, or JND) is defined as:",
            "options": [
              "The complete sensory adaptation that occurs when an unchanging odor is present for ten minutes.",
              "The absolute minimum energy needed to detect a stimulus 50% of the time.",
              "A constant minimum proportion or percentage of the original stimulus intensity, rather than a constant fixed numerical quantity.",
              "The biological process by which physical energy is transduced into electrical action potentials."
            ],
            "correctIndex": 2,
            "explanation": "Weber's law states that the JND is proportional: if you must add 1 ounce to an 8-ounce weight to detect a difference (12.5%), you must add 12.5 ounces to a 100-ounce weight. The threshold is a ratio, not a fixed number.",
            "distractorTip": "Absolute threshold = minimum energy detected 50% of the time. Difference threshold (JND) = minimum change needed to notice a difference between two stimuli."
          },
          {
            "id": "psy2-l1-q2",
            "stem": "Which Gestalt perceptual grouping principle explains why we perceive the visual pattern '[ ]  [ ]  [ ]' as three distinct pairs of brackets rather than six separate individual bracket shapes?",
            "options": [
              "Similarity: the grouping of stimuli that share identical color, shape, or luminance.",
              "Closure: the tendency of the visual system to fill in missing gaps in incomplete figures.",
              "Continuity: the preference to see smooth, continuous flowing lines rather than disjointed angles.",
              "Proximity: elements that are physically close together tend to be grouped together into a unified perceptual unit."
            ],
            "correctIndex": 3,
            "explanation": "Because the pairs are closer to each other than to adjacent brackets, proximity dictates that we perceive them as three grouped pairs rather than six unrelated marks.",
            "distractorTip": "Gestalt psychology slogan: 'The whole is greater than the sum of its parts'—the human brain automatically imposes structural organization on raw sensory data."
          },
          {
            "id": "psych2-l1-q3",
            "stem": "According to Weber's Law, what determines the difference threshold (just noticeable difference, JND) for detecting a change between two sensory stimuli?",
            "options": [
              "A constant physical quantity added to any baseline intensity.",
              "The listener's personal motivation and emotional fatigue level.",
              "A constant minimum proportion or percentage of the original stimulus intensity.",
              "The specific wavelength of the light or sound wave."
            ],
            "correctIndex": 2,
            "explanation": "Weber's Law states that the principle that, to be perceived as different, two stimuli must differ by a constant minimum percentage (rather than a constant fixed amount). For example, weight must differ by approximately 2% to notice a difference.",
            "distractorTip": "Weber's law requires a constant PROPORTION/PERCENTAGE, NOT a fixed absolute amount."
          }
        ]
      },
      {
        "id": 202,
        "unitIndex": 2,
        "levelNumber": 2,
        "uniqueKey": "psych-u2-l2",
        "topicNumber": "Topic 2.2",
        "name": "Memory Encoding, Storage & Working Memory",
        "subtitle": "Atkinson-Shiffrin model, working memory capacity, and explicit vs. implicit memory",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "psy2-l2-q1",
            "stem": "In the Atkinson-Shiffrin multi-store model of memory, what is the typical capacity and duration of unrehearsed information in short-term / working memory?",
            "options": [
              "Approximately 7 plus or minus 2 chunks of information, lasting roughly 15 to 30 seconds without active maintenance rehearsal.",
              "Unlimited storage capacity that persists undisturbed for thirty days.",
              "Exactly 100 bits of photographic visual data lasting one millisecond.",
              "One single syllable that is instantly erased unless physically spoken aloud."
            ],
            "correctIndex": 0,
            "explanation": "George Miller's classic 'Magical Number Seven, Plus or Minus Two' established working memory span. Without maintenance rehearsal or chunking, items decay within 20–30 seconds due to limited cognitive working capacity.",
            "distractorTip": "Chunking (organizing items into familiar, manageable units like phone numbers 555-0192) expands working memory efficiency without increasing raw capacity."
          },
          {
            "id": "psy2-l2-q2",
            "stem": "How does \"implicit (non-declarative) memory\" differ fundamentally from \"explicit (declarative) memory\"?",
            "options": [
              "Implicit memory is only found in non-human animals, while explicit memory is unique to humans.",
              "Implicit memory includes procedural motor skills and conditioned responses processed without conscious recall (by cerebellum and basal ganglia); explicit memory involves facts and personal events requiring conscious recollection (processed by hippocampus).",
              "Implicit memories fade within twenty minutes, while explicit memories last permanently.",
              "Implicit memory is evaluated through multiple-choice tests, while explicit memory is not."
            ],
            "correctIndex": 1,
            "explanation": "Explicit memory requires conscious awareness: episodic (personal life experiences) and semantic (facts/knowledge). Implicit memory operates automatically: procedural skills (riding a bike, typing) and classical conditioning.",
            "distractorTip": "Amnesia patients who lose explicit memory (cannot remember meeting their doctor) can still learn new implicit motor skills without remembering they practiced them!"
          },
          {
            "id": "psych2-l2-q3",
            "stem": "When studying for an AP exam, students who actively organize information, connect concepts to personal experiences, and summarize ideas in their own words retain material far better than students who reread notes. What cognitive concept explains this?",
            "options": [
              "Deep semantic processing (levels of processing effect)",
              "Iconic sensory memory persistence",
              "Maintenance rote rehearsal",
              "Proactive facilitation of long-term storage"
            ],
            "correctIndex": 0,
            "explanation": "Craik and Lockhart's Levels of Processing model demonstrates that semantic encoding (thinking about the meaning and conceptual connections of words) produces deeper, more durable long-term memory traces than shallow acoustic or structural processing.",
            "distractorTip": "Semantic encoding = meaning/depth (durable memory); Shallow encoding = visual appearance or acoustic repetition."
          }
        ]
      },
      {
        "id": 203,
        "unitIndex": 2,
        "levelNumber": 3,
        "uniqueKey": "psych-u2-l3",
        "topicNumber": "Topic 2.3",
        "name": "Retrieval Failure, Interference & Memory Distortion",
        "subtitle": "Proactive vs. retroactive interference, Loftus misinformation effect, and amnesia",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "psy2-l3-q1",
            "stem": "Maria studies Spanish during her freshman year of college. During her sophomore year, she enrolls in introductory French. When taking her final French exam, Spanish vocabulary keeps intruding into her thoughts, causing her to write Spanish words instead of French. Maria is experiencing:",
            "options": [
              "Retrograde amnesia: traumatic brain injury erasing past autobiographical memories.",
              "Retroactive interference: newly learned information interferes with the recall of older memories.",
              "Proactive interference: previously learned older information interferes with the retrieval of newly learned information.",
              "Source amnesia: remembering a fact accurately but forgetting which teacher taught it."
            ],
            "correctIndex": 2,
            "explanation": "Proactive Interference: Old memories disrupt New memories (Spanish -> French). Retroactive Interference: New memories disrupt Old memories (learning new French causes you to forget your old Spanish).",
            "distractorTip": "Memory Trick: PORN. Proactive = Old interferes with new. Retroactive = New interferes with old."
          },
          {
            "id": "psy2-l3-q2",
            "stem": "In Elizabeth Loftus's classic 1974 eyewitness testimony experiment, participants viewed a film of a car crash and were asked: 'About how fast were the cars going when they [smashed into / hit] each other?' What was the crucial finding demonstrating the \"misinformation effect\"?",
            "options": [
              "The verb 'hit' caused participants to forget that a car crash had occurred.",
              "All participants reported identical mathematical speed calculations regardless of the verb used.",
              "Participants refused to answer questions because human visual memory is 100% immune to verbal suggestion.",
              "Participants who heard the verb 'smashed' gave significantly higher speed estimates and were more likely to falsely recall seeing broken glass on the road (where none existed)."
            ],
            "correctIndex": 3,
            "explanation": "Loftus demonstrated that memory is not a video recording, but a reconstructive, fragile process. Subtle post-event suggestive wording ('smashed') alters the reconstructed memory representation, creating false memories of non-existent details.",
            "distractorTip": "The misinformation effect proves eyewitness testimony is highly malleable and susceptible to leading questions by police and lawyers."
          },
          {
            "id": "psych2-l3-q3",
            "stem": "After moving and learning her new 5-digit locker combination, Maya finds that she can no longer remember her old locker combination from the previous school year. What memory phenomenon does this illustrate?",
            "options": [
              "Proactive interference",
              "Anterograde amnesia",
              "State-dependent retrieval failure",
              "Retroactive interference"
            ],
            "correctIndex": 3,
            "explanation": "Retroactive interference occurs when newly acquired information disrupts the retrieval of older, previously stored memories. Learning the new locker combination interferes with remembering the old one.",
            "distractorTip": "P-O-R-N: Proactive = Old information interferes with new; Retroactive = New information interferes with old."
          }
        ]
      },
      {
        "id": 204,
        "unitIndex": 2,
        "levelNumber": 4,
        "uniqueKey": "psych-u2-l4",
        "topicNumber": "Topic 2.4",
        "name": "Problem Solving, Heuristics & Cognitive Biases",
        "subtitle": "Algorithms vs. heuristics, availability/representativeness, and functional fixedness",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "psy2-l4-q1",
            "stem": "Following a widely publicized commercial airplane crash on the evening news, Michael decides to cancel his upcoming flight and drive sixteen hours across the country, despite highway statistics showing driving is far more dangerous. Michael's decision is driven by:",
            "options": [
              "The availability heuristic: estimating the likelihood of an event based on how vividly and readily memorable instances come to mind.",
              "The representativeness heuristic: judging probability based on how well an item matches a mental prototype.",
              "An algorithmic decision tree that mathematically calculates risk probabilities.",
              "Functional fixedness: being unable to perceive new uses for an ordinary mechanical object."
            ],
            "correctIndex": 0,
            "explanation": "Because sensational plane crashes are emotionally vivid and heavily broadcast, they are easily retrieved from memory ('available'), leading people to dramatically overestimate the real statistical probability of a crash.",
            "distractorTip": "Availability = memory ease and emotional vividness. Representativeness = matching a prototype/stereotype."
          },
          {
            "id": "psy2-l4-q2",
            "stem": "A software engineer spends four hours attempting to fix a coding bug using an elaborate script that worked on previous projects, failing to notice that the current bug could be solved in three seconds by checking a missing semicolon. The engineer's struggle illustrates:",
            "options": [
              "Divergent thinking: generating dozens of unconventional creative alternatives.",
              "A mental set (and functional fixedness): the tendency to approach a problem in one particular familiar way that was successful in the past, hindering creative problem-solving.",
              "The framing effect: altering choices based on whether outcomes are presented as gains or losses.",
              "Belief perseverance: clinging to a disproven theological belief despite contradictory evidence."
            ],
            "correctIndex": 1,
            "explanation": "A mental set locks cognitive focus into habitual patterns ('it worked before, so I must do it this way again'), blinding the problem solver to novel, simpler solutions.",
            "distractorTip": "Functional fixedness is a specific type of mental set where an individual cannot see that an object (like a coin) can function as a tool (like a screwdriver)."
          },
          {
            "id": "psych2-l4-q3",
            "stem": "After watching sensationalized television news reports about shark attacks, a tourist refuses to swim in the ocean, drastically overestimating the risk of encountering a shark. Which heuristic is responsible?",
            "options": [
              "The representativeness heuristic",
              "The availability heuristic",
              "The framing effect",
              "Confirmation bias"
            ],
            "correctIndex": 1,
            "explanation": "The availability heuristic is a mental shortcut where people estimate the likelihood of events based on how easily examples come to mind. Because dramatic shark attacks are vividly reported, they are readily available in memory, skewing risk estimates.",
            "distractorTip": "Availability heuristic = based on vividness and ease of recall; Representativeness heuristic = based on matching a prototype."
          }
        ]
      },
      {
        "id": 205,
        "unitIndex": 2,
        "levelNumber": 5,
        "uniqueKey": "psych-u2-l5",
        "topicNumber": "Topic 2.5",
        "name": "Theories of Intelligence & Psychometrics",
        "subtitle": "Spearman's g, Gardner, Sternberg, reliability vs. validity, and the Flynn effect",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy2-l5-q1",
            "stem": "Charles Spearman utilized factor analysis of cognitive test batteries to propose which foundational psychometric theory of human intelligence?",
            "options": [
              "Emotional Intelligence: the capacity to regulate social empathy without any analytical cognition.",
              "Multiple Intelligences: eight completely independent, modular cognitive faculties (like bodily-kinesthetic and musical).",
              "General intelligence ($g$-factor): a single, overarching underlying mental capacity that influences performance across diverse cognitive tasks.",
              "Triarchic Intelligence: analytical, creative, and practical dimensions operating in complete isolation."
            ],
            "correctIndex": 2,
            "explanation": "Spearman found that people who scored high on verbal tests tended to score high on mathematical and spatial tests too; this positive manifold pointed to a common general cognitive factor ($g$) fueling all mental operations.",
            "distractorTip": "Howard Gardner proposed 8 Multiple Intelligences; Robert Sternberg proposed the Triarchic Theory (Analytical, Creative, Practical)."
          },
          {
            "id": "psy2-l5-q2",
            "stem": "A psychologist develops a new test designed to diagnose clinical depression. If patients obtain nearly identical scores when taking the test two weeks apart, but the test questions actually measure social introversion rather than depressive pathology, the test exhibits:",
            "options": [
              "High face validity, but zero test-retest consistency.",
              "High validity, but low reliability.",
              "Low reliability and low validity.",
              "High reliability, but low validity."
            ],
            "correctIndex": 3,
            "explanation": "Reliability = consistency of measurement (test-retest scores match). Validity = accuracy (measuring what it claims to measure). If the test consistently produces the same score, it is reliable; if it measures introversion instead of depression, it lacks validity.",
            "distractorTip": "Remember: A test can be completely RELIABLE without being VALID (e.g., a broken bathroom scale that always weighs you 10 lbs light is reliable, but invalid)."
          },
          {
            "id": "psych2-l5-q3",
            "stem": "A psychological test that yields consistent, repeatable scores across multiple test administrations but fails to measure the underlying construct it was designed to evaluate is considered:",
            "options": [
              "Valid, but not reliable.",
              "Both reliable and valid.",
              "Reliable, but not valid.",
              "Standardized, but lacking predictive utility."
            ],
            "correctIndex": 2,
            "explanation": "Reliability refers to the consistency and repeatability of measurement (e.g. getting the same score on re-testing). Validity refers to whether the test actually measures what it claims to measure. A test can be highly reliable while completely lacking validity.",
            "distractorTip": "Reliability = Consistency; Validity = Accuracy/Truthfulness. A broken clock that is stopped is 100% reliable (consistent), but completely invalid!"
          }
        ]
      },
      {
        "id": 206,
        "unitIndex": 2,
        "levelNumber": 6,
        "uniqueKey": "psych-u2-l6",
        "topicNumber": "Topic 2.6",
        "name": "Language Acquisition, Grammar & Relativity",
        "subtitle": "Chomsky vs. Skinner, phonemes/morphemes, critical period, and Whorfian hypothesis",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy2-l6-q1",
            "stem": "Linguist Noam Chomsky criticized B.F. Skinner's operant conditioning view of language acquisition by arguing that children learn language too rapidly and creatively to be explained solely by imitation and reinforcement, proposing instead:",
            "options": [
              "An innate, biologically prewired 'Language Acquisition Device' (LAD) and Universal Grammar that predisposes children to naturally deduce the grammatical rules of their native tongue.",
              "That language is an unlearned involuntary spinal cord reflex present at birth.",
              "That children acquire syntax exclusively through direct classical conditioning with sweet treats.",
              "That human infants cannot comprehend words until they reach formal operational thought at age twelve."
            ],
            "correctIndex": 0,
            "explanation": "Chomsky pointed out that children generate novel sentences they have never heard before and make predictable overregularization errors (e.g., 'I runned outside,' 'two tooths'), proving they are applying internal generative grammar rules rather than merely mimicking adults.",
            "distractorTip": "The 'Critical Period' hypothesis (Eric Lenneberg) supports Chomsky: if a child is not exposed to spoken or sign language before puberty (like the case of Genie), full grammatical fluency cannot be acquired."
          },
          {
            "id": "psy2-l6-q2",
            "stem": "In the English word 'unbreakable', how many morphemes are present?",
            "options": [
              "Eleven morphemes (each individual letter of the alphabet).",
              "Three morphemes ('un-', 'break', and '-able').",
              "One single morpheme representing an indestructible object.",
              "Four morphemes ('un', 'break', 'a', 'ble')."
            ],
            "correctIndex": 1,
            "explanation": "A morpheme is the smallest unit of language that carries MEANING: 'un-' (prefix meaning not), 'break' (root verb), and '-able' (suffix meaning capable of being). A phoneme is the smallest unit of SOUND (like the /b/ sound in break).",
            "distractorTip": "Phonemes = Sound units (cat has 3 phonemes: /k/ /æ/ /t/). Morphemes = Meaning units (cats has 2 morphemes: cat + s for plural)."
          },
          {
            "id": "psych2-l6-q3",
            "stem": "Linguist Noam Chomsky proposed that young children acquire complex language structures rapidly without formal training due to which biological mechanism?",
            "options": [
              "An innate Language Acquisition Device (LAD) and universal grammar hardwired into the human brain.",
              "Continuous operant conditioning through parental praise and reinforcement.",
              "Strict linguistic determinism shaped by geographic cultural norms.",
              "Observational imitation without cognitive processing."
            ],
            "correctIndex": 0,
            "explanation": "Noam Chomsky argued that humans are biologically prewired with a Language Acquisition Device (LAD) that facilitates universal grammar, allowing infants to effortlessly absorb language during a critical developmental window, contrasting with B.F. Skinner's operant view.",
            "distractorTip": "Chomsky = Nativist innate Language Acquisition Device; Skinner = Nurture/operant conditioning and imitation."
          }
        ]
      },
      {
        "id": 207,
        "unitIndex": 2,
        "levelNumber": 7,
        "uniqueKey": "psych-u2-l7",
        "topicNumber": "Unit 2 Boss Level",
        "name": "Cognition & Information Processing Mastery",
        "subtitle": "Synthesis of cognitive biases, memory architecture, and psychometric evaluation",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "psy2-l7-q1",
            "stem": "What is the 'Flynn Effect', and what does it reveal about human intelligence test scores over the course of the twentieth century?",
            "options": [
              "Standardized IQ tests became easier and less challenging over time to raise student self-esteem.",
              "Human genetic DNA evolved dramatically every ten years to increase brain volume.",
              "Average raw performance scores on standardized intelligence tests rose steadily by approximately 3 IQ points per decade worldwide, demonstrating the profound impact of improving nutrition, education, and cognitive complexity.",
              "Intelligence scores dropped precipitously following the widespread introduction of television."
            ],
            "correctIndex": 2,
            "explanation": "Political scientist James Flynn documented that each generation scored higher on raw IQ tests than the previous one. Because genetic evolution cannot occur in decades, the Flynn effect proves that environmental factors (modern schooling, healthcare, technology) heavily elevate cognitive performance.",
            "distractorTip": "To maintain the average IQ at 100, test publishers periodically 're-norm' standardized tests, making scoring criteria stricter over time."
          },
          {
            "id": "psy2-l7-q2",
            "stem": "A venture capital firm continues investing millions of dollars into a failing smartphone company because 'we have already spent $50 million on this project and cannot walk away now,' ignoring financial market analysts who demonstrate the product will never sell. The firm is suffering from:",
            "options": [
              "Sensory adaptation: the natural receptor habituation to auditory market alarms.",
              "Retroactive interference: new financial reports erasing older accounting ledger memories.",
              "Aphasia: the neurological inability to comprehend spoken mathematical equations.",
              "The Sunk Cost Fallacy: continuing an endeavor once an investment in money, effort, or time has been made, despite evidence that the future costs outweigh any benefits."
            ],
            "correctIndex": 3,
            "explanation": "The sunk cost fallacy occurs when decision-makers justify continued investment based on past, unrecoverable expenditures ('sunk costs'), rather than evaluating future marginal costs and returns rationally.",
            "distractorTip": "Rational economics dictates that past sunk costs should be ignored; only future anticipated utility should determine decisions."
          },
          {
            "id": "psych2-l7-q3",
            "stem": "In George Miller's classic research on working memory capacity, what is the typical number of discrete informational chunks that an adult can retain simultaneously?",
            "options": [
              "Exactly 3 items",
              "Between 10 and 15 items",
              "Unlimited items if rehearsed visually",
              "Seven plus or minus two (5 to 9 chunks)"
            ],
            "correctIndex": 3,
            "explanation": "Miller's 'Magical Number Seven, Plus or Minus Two' established that human short-term/working memory can hold approximately 5 to 9 discrete items or meaningful chunks of information without rehearsal.",
            "distractorTip": "Working memory capacity = 7 ± 2 items; Chunking organizes items into familiar units to bypass this bottleneck."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 3,
    "unitId": "u3",
    "title": "Unit 3: Development & Learning",
    "shortTitle": "Unit 3: Learning & Lifespan",
    "description": "Classical conditioning, operant reinforcement schedules, observational learning, Piagetian cognitive stages, attachment, and moral reasoning",
    "examWeight": "15–25% of AP Exam",
    "biome": {
      "name": "Cradle of Conditioning & Lifespan Grove",
      "icon": "🌱",
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
        "uniqueKey": "psych-u3-l1",
        "topicNumber": "Topic 3.1",
        "name": "Classical Conditioning Principles",
        "subtitle": "Pavlov, UCS/UCR, CS/CR, extinction, and stimulus generalization",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "psy3-l1-q1",
            "stem": "In Ivan Pavlov's classic conditioning experiments with dogs, what was the meat powder that naturally triggered salivation prior to any learning, and what was the salivation in response to that meat powder?",
            "options": [
              "Unconditioned Stimulus (UCS) and Unconditioned Response (UCR).",
              "Conditioned Stimulus (CS) and Conditioned Response (CR).",
              "Secondary Reinforcer and Operant Reflex.",
              "Neutral Stimulus (NS) and Discriminative Stimulus."
            ],
            "correctIndex": 0,
            "explanation": "An Unconditioned Stimulus (UCS = meat) biologically triggers an unlearned, automatic Unconditioned Response (UCR = salivation). When paired repeatedly with a neutral stimulus (metronome/bell), the bell becomes the Conditioned Stimulus (CS) eliciting a Conditioned Response (CR).",
            "distractorTip": "Rule of thumb: 'Unconditioned' = Unlearned/Natural; 'Conditioned' = Learned through association."
          },
          {
            "id": "psy3-l1-q2",
            "stem": "John B. Watson and Rosalie Rayner classically conditioned infant 'Little Albert' to fear a tame white rat by pairing it with a clanging steel pipe. Albert subsequently cried and exhibited fear when shown a white rabbit, a fur coat, and a Santa Claus mask. Albert was demonstrating:",
            "options": [
              "Stimulus discrimination: responding only to the exact frequency of the original stimulus.",
              "Stimulus generalization: the tendency to respond with the conditioned response to stimuli that are physically similar to the original conditioned stimulus.",
              "Spontaneous recovery: the sudden reappearance of an extinguished response after a rest period.",
              "Negative reinforcement: removing an aversive stimulus to increase a desirable behavior."
            ],
            "correctIndex": 1,
            "explanation": "Stimulus generalization occurs when an organism transfers a conditioned response to similar perceptual stimuli (white rat -> white rabbit/fur coat). Stimulus discrimination is learning to tell the difference between similar stimuli.",
            "distractorTip": "Extinction would be presenting the white rat repeatedly without the loud noise until Albert's fear vanished."
          },
          {
            "id": "psych3-l1-q3",
            "stem": "In Pavlov's classical conditioning experiments, what occurred during 'spontaneous recovery'?",
            "options": [
              "The unconditioned stimulus was doubled in intensity after conditioning.",
              "A conditioned response was permanently unlearned through biological counter-conditioning.",
              "The sudden reappearance of an extinguished conditioned response after a rest period without any further pairings.",
              "The dog learned to salivate to a completely novel stimulus on the very first trial."
            ],
            "correctIndex": 2,
            "explanation": "Spontaneous recovery refers to the reappearance of a previously extinguished conditioned response after a time delay, demonstrating that extinction suppresses the conditioned response rather than erasing it completely.",
            "distractorTip": "Extinction suppresses conditioned responses; Spontaneous recovery proves the conditioned association was not permanently deleted."
          }
        ]
      },
      {
        "id": 302,
        "unitIndex": 3,
        "levelNumber": 2,
        "uniqueKey": "psych-u3-l2",
        "topicNumber": "Topic 3.2",
        "name": "Operant Conditioning: Reinforcement & Punishment",
        "subtitle": "Positive/Negative reinforcement, Positive/Negative punishment, and Skinner",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "psy3-l2-q1",
            "stem": "A driver fastens their seatbelt immediately upon entering a car to terminate the irritating, buzzing alarm chime. The driver's seatbelt-buckling behavior is maintained through:",
            "options": [
              "Negative punishment: taking away a desirable privilege to reduce misbehavior.",
              "Positive punishment: administering an unpleasant consequence to decrease an unwanted behavior.",
              "Negative reinforcement: increasing the likelihood of a behavior by removing or terminating an aversive, unpleasant stimulus.",
              "Classical extinction: the gradual fading of an unconditioned biological reflex."
            ],
            "correctIndex": 2,
            "explanation": "Reinforcement ALWAYS INCREASES behavior. Positive = Add something pleasant; Negative = Remove/subtract something unpleasant (stopping the annoying buzzer increases seatbelt buckling).",
            "distractorTip": "The #1 Most Tested AP Trap: Negative reinforcement is NOT punishment! Reinforcement increases behavior; punishment decreases behavior."
          },
          {
            "id": "psy3-l2-q2",
            "stem": "A high school student arrives home two hours after curfew. As a consequence, the parents confiscate the student's smartphone and car keys for two weeks, causing the student to never break curfew again. The parents employed:",
            "options": [
              "Secondary classical conditioning: pairing two conditioned stimuli.",
              "Positive punishment: adding an aversive stimulus to decrease behavior.",
              "Negative reinforcement: terminating an unpleasant stimulus to increase behavior.",
              "Negative punishment (omission training): removing a valued, pleasant stimulus to decrease an unwanted behavior."
            ],
            "correctIndex": 3,
            "explanation": "Punishment ALWAYS DECREASES behavior (breaking curfew stopped). Negative = removing a pleasant stimulus (confiscating phone and car keys).",
            "distractorTip": "Four-Box Matrix: Positive Reinforce (Give candy), Negative Reinforce (Stop buzzer), Positive Punish (Give detention), Negative Punish (Take phone)."
          },
          {
            "id": "psych3-l2-q3",
            "stem": "A parent takes away a teenager's smartphone privileges for one week after the teenager stays out past curfew, resulting in the teenager never breaking curfew again. Which operant conditioning procedure was utilized?",
            "options": [
              "Negative punishment",
              "Negative reinforcement",
              "Positive punishment",
              "Positive reinforcement"
            ],
            "correctIndex": 0,
            "explanation": "Punishment aims to DECREASE a behavior (staying out past curfew). Negative means REMOVING a desirable stimulus (taking away the phone). Removing a pleasant stimulus to decrease a behavior is negative punishment.",
            "distractorTip": "Positive = Add stimulus; Negative = Remove stimulus; Reinforcement = Increase behavior; Punishment = Decrease behavior."
          }
        ]
      },
      {
        "id": 303,
        "unitIndex": 3,
        "levelNumber": 3,
        "uniqueKey": "psych-u3-l3",
        "topicNumber": "Topic 3.2",
        "name": "Schedules of Partial Reinforcement",
        "subtitle": "Fixed-Ratio, Variable-Ratio, Fixed-Interval, and Variable-Interval",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "psy3-l3-q1",
            "stem": "A gambler plays a mechanical slot machine in Las Vegas, pulling the lever hundreds of times because cash payouts occur after an unpredictable, random number of pulls. The slot machine operates on which schedule of reinforcement?",
            "options": [
              "Variable-Ratio (VR): delivering reinforcement after an unpredictable number of behavioral responses, producing high, steady response rates that are highly resistant to extinction.",
              "Fixed-Interval (FI): delivering reinforcement for the first response after a set, predictable amount of time has elapsed.",
              "Fixed-Ratio (FR): delivering reinforcement after a set, predictable number of responses (like a punch card).",
              "Variable-Interval (VI): delivering reinforcement after an unpredictable amount of time has elapsed."
            ],
            "correctIndex": 0,
            "explanation": "Ratio = Number of responses; Interval = Elapsed time. Fixed = Predictable; Variable = Unpredictable. Slot machines and lottery tickets are Variable-Ratio (VR): you never know which pull wins, generating compulsive, extinction-resistant behavior.",
            "distractorTip": "Fixed-Interval produces a 'scalloped' response curve (students cramming right before a Friday weekly quiz)."
          },
          {
            "id": "psy3-l3-q2",
            "stem": "A worker at a garment factory receives a $20 cash bonus for every 10 jackets sewn, regardless of how long it takes. This payment schedule exemplifies:",
            "options": [
              "Variable-Ratio (VR)",
              "Fixed-Ratio (FR)",
              "Fixed-Interval (FI)",
              "Variable-Interval (VI)"
            ],
            "correctIndex": 1,
            "explanation": "Fixed-Ratio (FR) delivers reinforcement after a specified, fixed number of responses (here, exactly 10 jackets = FR-10), encouraging rapid production bursts with brief post-reinforcement pauses.",
            "distractorTip": "Variable-Interval (VI) would be a pop quiz or waiting for a text message: you must check occasionally because the time interval is unpredictable."
          },
          {
            "id": "psych3-l3-q3",
            "stem": "Slot machines in casinos reward players with payouts after an unpredictable and variable number of lever pulls. Which schedule of reinforcement does this represent?",
            "options": [
              "Fixed-ratio schedule",
              "Fixed-interval schedule",
              "Variable-interval schedule",
              "Variable-ratio schedule"
            ],
            "correctIndex": 3,
            "explanation": "A variable-ratio schedule delivers reinforcement after an unpredictable number of behavioral responses. This schedule produces the highest rates of responding and the strongest resistance to extinction.",
            "distractorTip": "Variable Ratio (VR) = Unpredictable number of responses (slot machines, lottery). Most resistant to extinction!"
          }
        ]
      },
      {
        "id": 304,
        "unitIndex": 3,
        "levelNumber": 4,
        "uniqueKey": "psych-u3-l4",
        "topicNumber": "Topic 3.3",
        "name": "Observational & Cognitive Learning",
        "subtitle": "Bandura's Bobo Doll, mirror neurons, Tolman's latent learning, and insight",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "psy3-l4-q1",
            "stem": "In Albert Bandura's famous 1961 'Bobo Doll' experiment, children who watched an adult model violently punch, kick, and verbally assault an inflatable clown doll subsequently:",
            "options": [
              "Completely ignored the doll and played quietly with wooden blocks.",
              "Exhibited extreme empathy and attempted to comfort the bruised doll.",
              "Imitated the adult's exact aggressive actions and novel violent phrases when placed in a room with the doll, demonstrating observational learning (modeling) without direct reinforcement.",
              "Forgot all aggressive behaviors within five minutes due to retrograde amnesia."
            ],
            "correctIndex": 2,
            "explanation": "Bandura proved that learning occurs vicariously through observation and modeling, challenging radical behaviorism's claim that behavior only changes through direct personal reinforcement or punishment.",
            "distractorTip": "Vicarious reinforcement occurs when an observer sees a model rewarded for an action, making the observer more likely to imitate it."
          },
          {
            "id": "psy3-l4-q2",
            "stem": "Edward Tolman allowed rats to explore a maze for ten days with zero food rewards at the end. On day eleven, he placed food in the goal box; the rats immediately navigated the maze as swiftly as rats reinforced daily. Tolman demonstrated:",
            "options": [
              "Operant shaping: reinforcing successive approximations of a desired behavior.",
              "Classical higher-order conditioning through olfactory cues.",
              "Instinctive drift: the reversion to innate biological foraging behaviors.",
              "Latent learning and cognitive maps: learning that occurs without immediate reinforcement, remaining hidden until an incentive to demonstrate it is introduced."
            ],
            "correctIndex": 3,
            "explanation": "Tolman proved cognition matters in learning: the unrewarded rats had developed an internal mental representation ('cognitive map') of the maze layout, proving mental processing occurs independently of external reinforcement.",
            "distractorTip": "Wolfgang Köhler's chimpanzees demonstrated 'insight learning' (the sudden 'aha!' realization of a solution without trial-and-error)."
          },
          {
            "id": "psych3-l4-q3",
            "stem": "In Albert Bandura's famous Bobo Doll experiment, what key finding demonstrated observational learning in young children?",
            "options": [
              "Children only imitated adults if they were offered candy immediately beforehand.",
              "Children who watched an adult violently beat an inflated doll were significantly more likely to imitate the novel aggressive actions and speech.",
              "Aggressive impulses were biologically determined regardless of social modeling.",
              "Children exhibited spontaneous recovery when placed with passive adult models."
            ],
            "correctIndex": 1,
            "explanation": "Bandura's Bobo doll experiment proved that children learn social behaviors (such as aggression) through observational learning (modeling), without needing direct reinforcement or trial-and-error conditioning.",
            "distractorTip": "Bandura = Social Learning Theory / Observational Modeling / Vicarious Reinforcement."
          }
        ]
      },
      {
        "id": 305,
        "unitIndex": 3,
        "levelNumber": 5,
        "uniqueKey": "psych-u3-l5",
        "topicNumber": "Topic 3.4",
        "name": "Piaget's Cognitive Development Stages",
        "subtitle": "Schemas, assimilation, accommodation, conservation, and egocentrism",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy3-l5-q1",
            "stem": "A four-year-old child sees a tall, narrow glass of water poured into a short, wide bowl and insists that the bowl now contains 'less water' because the liquid line is lower. According to Jean Piaget, the child is in the preoperational stage and lacks:",
            "options": [
              "Conservation: the understanding that physical properties (volume, mass, number) remain identical despite superficial changes in shape or appearance.",
              "Object permanence: the realization that objects continue to exist when hidden from sight.",
              "Egocentrism: the inability to perceive the world from another person's physical perspective.",
              "Abstract hypothetical-deductive reasoning characteristic of formal operations."
            ],
            "correctIndex": 0,
            "explanation": "Preoperational children (ages 2–7) are fooled by perceptual appearances due to 'centration' (focusing only on height). In the concrete operational stage (ages 7–11), children master conservation and understand mathematical reversibility.",
            "distractorTip": "Assimilation = fitting new information into an existing schema (calling a cat a 'doggy'). Accommodation = modifying the schema to fit new reality (creating a new 'cat' category)."
          },
          {
            "id": "psy3-l5-q2",
            "stem": "Lev Vygotsky's sociocultural theory of cognitive development emphasized that children learn most effectively within their 'Zone of Proximal Development' (ZPD) through:",
            "options": [
              "Biological brain maturation that unfolds automatically without social interaction.",
              "Scaffolding: structured, temporary cognitive support provided by a more knowledgeable adult or peer that is gradually removed as the child gains mastery.",
              "Isolated individual discovery in sensory isolation chambers.",
              "Rigid classical conditioning schedules implemented in early preschool."
            ],
            "correctIndex": 1,
            "explanation": "While Piaget viewed the child as a solitary 'little scientist' exploring the physical world, Vygotsky argued cognitive growth is fundamentally social, mediated by language, culture, and collaborative adult scaffolding.",
            "distractorTip": "ZPD is the sweet spot: tasks too difficult for a child to master alone, but achievable with guidance and scaffolding."
          },
          {
            "id": "psych3-l5-q3",
            "stem": "A 4-year-old child believes that pouring liquid from a short, wide glass into a tall, thin glass creates more liquid. According to Jean Piaget, what cognitive ability has the child NOT yet mastered?",
            "options": [
              "Object permanence",
              "Abstract hypothesis testing",
              "Conservation",
              "Sensorimotor circular reactions"
            ],
            "correctIndex": 2,
            "explanation": "Conservation is the principle that properties like mass, volume, and number remain identical despite changes in the physical shape or appearance of objects. Children in the Preoperational stage lack conservation due to centration (focusing on height alone).",
            "distractorTip": "Conservation is mastered in the Concrete Operational stage (ages 7-11); Preoperational children fail conservation tasks."
          }
        ]
      },
      {
        "id": 306,
        "unitIndex": 3,
        "levelNumber": 6,
        "uniqueKey": "psych-u3-l6",
        "topicNumber": "Topic 3.5",
        "name": "Social Development, Attachment & Parenting",
        "subtitle": "Erikson's stages, Harlow's monkeys, Ainsworth attachment, and Baumrind styles",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy3-l6-q1",
            "stem": "Harry Harlow's groundbreaking experiments with infant rhesus monkeys separated from biological mothers and raised with wire and cloth surrogate mothers proved that:",
            "options": [
              "Monkeys raised in isolation developed superior adult social and parenting skills.",
              "Infants bonded exclusively with whichever surrogate mother provided nutritional milk.",
              "Infants overwhelmingly preferred the soft terrycloth mother (who provided 'contact comfort') even when the wire mother provided milk, disproving the Freudian/behaviorist theory that attachment is based merely on food nourishment.",
              "Attachment is an unlearned spinal reflex that terminates permanently at six weeks of age."
            ],
            "correctIndex": 2,
            "explanation": "Harlow shattered the belief that infants attach to mothers solely for caloric food. Tactile 'contact comfort' is a fundamental biological need essential for emotional security, exploration, and healthy social development.",
            "distractorTip": "Konrad Lorenz demonstrated 'imprinting' in newborn goslings—a rapid, instinctual attachment formed during a critical period immediately after hatching."
          },
          {
            "id": "psy3-l6-q2",
            "stem": "According to Diana Baumrind's research on parenting styles, children raised by \"authoritative parents\" (high warmth, high responsive communication, and clear, reasoned boundaries) tend to develop:",
            "options": [
              "Severe clinical depression and permanent speech apraxia.",
              "Extreme anxiety, rebellious antisocial delinquency, and low academic achievement.",
              "Complete dependency, lack of self-control, and narcissistic entitlement.",
              "High self-esteem, self-reliance, emotional regulation, and strong social competence."
            ],
            "correctIndex": 3,
            "explanation": "Authoritative parenting (demanding yet supportive and communicative) produces the best outcomes. Authoritarian (strict obedience without warmth) produces anxious/submissive children. Permissive (warmth without rules) produces impulsive, entitled children.",
            "distractorTip": "Memory Trick: Authori-TATIVE = Tentative/Cooperative discussion. Authori-TARIAN = Totalitarian dictator."
          },
          {
            "id": "psych3-l6-q3",
            "stem": "In Harry Harlow's classic surrogate mother experiments with infant rhesus monkeys, what did the findings reveal about maternal bonding and attachment?",
            "options": [
              "Infants preferred the wire mother with the feeding bottle, proving attachment is driven exclusively by food satisfaction.",
              "Infants overwhelmingly preferred the soft terrycloth mother even when the wire mother provided food, demonstrating the primacy of contact comfort.",
              "Infants formed zero attachment to artificial surrogates under any conditions.",
              "Attachment behaviors were triggered exclusively by auditory maternal calls."
            ],
            "correctIndex": 1,
            "explanation": "Harlow demonstrated that contact comfort (tactile warmth and softness) was far more critical for emotional bonding than nourishment alone, disproving the Freudian and behaviorist assumptions that attachment was merely a conditioned response to feeding.",
            "distractorTip": "Harlow's monkeys chose contact comfort over food, establishing the biological foundation of maternal attachment."
          }
        ]
      },
      {
        "id": 307,
        "unitIndex": 3,
        "levelNumber": 7,
        "uniqueKey": "psych-u3-l7",
        "topicNumber": "Topic 3.6",
        "name": "Moral Development & Learning Capstone",
        "subtitle": "Kohlberg's moral stages, Carol Gilligan, and Erikson lifespan synthesis",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "psy3-l7-q1",
            "stem": "In Lawrence Kohlberg's famous 'Heinz Dilemma' (a man stealing an unaffordable drug to save his dying wife), an individual who argues: 'Heinz should not steal the medicine because stealing is illegal and if everyone broke the law to solve personal problems, society would collapse into chaotic lawlessness' is reasoning at which level of moral development?",
            "options": [
              "Conventional morality: Stage 4 (Law and Order / maintaining social order and upholding societal rules).",
              "Preconventional morality: Stage 1 (Obedience and Punishment orientation based on avoiding personal pain).",
              "Postconventional morality: Stage 6 (Universal Ethical Principles transcending unjust civil laws).",
              "Preoperational egocentric morality: based solely on physical height and volume."
            ],
            "correctIndex": 0,
            "explanation": "Conventional moral reasoning judges actions by social approval, conformity, duty, and maintaining societal laws. Preconventional focuses on self-interest ('I'll get caught'); Postconventional focuses on universal ethical rights ('human life transcends property rights').",
            "distractorTip": "Carol Gilligan famously critiqued Kohlberg for gender bias, arguing his male-centric model prioritized abstract justice over feminine ethics of care and relationship responsibility."
          },
          {
            "id": "psy3-l7-q2",
            "stem": "According to Erik Erikson's eight stages of psychosocial development, an adolescent grappling with the central crisis of 'Identity vs. Role Confusion' is primarily striving to:",
            "options": [
              "Master basic toilet training and develop bodily autonomy.",
              "Synthesize personal values, beliefs, and vocational aspirations into a coherent, unified sense of self, avoiding fractured uncertainty about their future place in society.",
              "Reflect back on a completed life with pride and ego integrity rather than despair.",
              "Establish deep emotional and romantic intimacy with a committed domestic partner."
            ],
            "correctIndex": 1,
            "explanation": "Adolescence (ages 12–18) centers on forging identity: experimenting with roles, subcultures, and beliefs to answer 'Who am I?'. Young adulthood faces 'Intimacy vs. Isolation'; Late adulthood faces 'Integrity vs. Despair.'",
            "distractorTip": "James Marcia expanded Erikson's adolescent identity crisis into four statuses: Identity Diffusion, Foreclosure, Moratorium, and Identity Achievement."
          },
          {
            "id": "psych3-l7-q3",
            "stem": "In Lawrence Kohlberg's theory of moral development, a person who refuses to break a law solely to avoid receiving a monetary fine or jail sentence is operating at which level?",
            "options": [
              "Conventional morality",
              "Postconventional morality",
              "Autonomous ethical morality",
              "Preconventional morality"
            ],
            "correctIndex": 3,
            "explanation": "Preconventional morality (typical of young children) is characterized by self-interest and obedience to external authority solely to avoid physical punishment or gain concrete rewards.",
            "distractorTip": "Preconventional = Avoid punishment / gain rewards; Conventional = Obey laws / social approval; Postconventional = Universal ethical principles."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 4,
    "unitId": "u4",
    "title": "Unit 4: Social Psychology & Personality",
    "shortTitle": "Unit 4: Social & Personality",
    "description": "Attribution theory, cognitive dissonance, conformity/obedience studies, bystander effect, psychodynamic defense mechanisms, and Big Five traits",
    "examWeight": "15–25% of AP Exam",
    "biome": {
      "name": "Agora of Social Influence & Trait Nexus",
      "icon": "👥",
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
        "id": 401,
        "unitIndex": 4,
        "levelNumber": 1,
        "uniqueKey": "psych-u4-l1",
        "topicNumber": "Topic 4.1",
        "name": "Attribution Theory & Cognitive Dissonance",
        "subtitle": "Fundamental Attribution Error, self-serving bias, and Festinger's dissonance",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "psy4-l1-q1",
            "stem": "When observing a waiter accidentally drop a tray of dishes, customers immediately assume 'he is clumsy, careless, and lazy,' ignoring the fact that someone had spilled olive oil on the tile floor. The customers' reaction demonstrates:",
            "options": [
              "Deindividuation: the loss of personal identity in large anonymous sports mobs.",
              "The self-serving bias: attributing one's own personal successes to skill and failures to bad luck.",
              "The Fundamental Attribution Error (FAE): the tendency to overestimate internal dispositional traits and underestimate external situational factors when explaining other people's behavior.",
              "Cognitive dissonance: physical discomfort experienced when holding contradictory cognitions."
            ],
            "correctIndex": 2,
            "explanation": "The Fundamental Attribution Error is ubiquitous: we blame others' mistakes on their flawed character (disposition), but explain our own identical mistakes by citing unfair circumstances (situation: 'I tripped because the floor was wet!').",
            "distractorTip": "Actor-Observer Bias: We make situational attributions for ourselves (as the actor), but dispositional attributions for others (as the observer)."
          },
          {
            "id": "psy4-l1-q2",
            "stem": "In Leon Festinger and J. Merrill Carlsmith's famous 1959 experiment, participants performed a mind-numbing peg-turning task for an hour and were paid either $1 or $20 to tell the next participant the task was 'fun and exciting.' Who later rated the boring task as genuinely more enjoyable on a survey?",
            "options": [
              "Neither group, because participants refused to lie to another student.",
              "Participants paid $20, because the large financial reward made them physically happy.",
              "Both groups reported identical ratings because human attitudes never change after public deception.",
              "Participants paid $1, because they experienced intense cognitive dissonance (insufficient external justification for lying) and resolved the tension by changing their private attitude to match their behavior."
            ],
            "correctIndex": 3,
            "explanation": "Cognitive Dissonance occurs when actions contradict beliefs. The $20 group had plenty of external justification ('I lied for twenty bucks; task was still boring'). The $1 group had insufficient justification ('I lied for a dollar? I wouldn't lie for a dollar; maybe the task wasn't that bad!'), forcing them to change their internal attitude.",
            "distractorTip": "When behavior and attitude clash, we almost always change our ATTITUDE to align with our past behavior!"
          },
          {
            "id": "psych4-l1-q3",
            "stem": "Leon Festinger's theory of Cognitive Dissonance predicts that individuals will experience psychological discomfort when:",
            "options": [
              "Their parents utilize authoritarian parenting styles during childhood.",
              "They are subjected to group polarization in large crowds.",
              "Their held attitudes and personal actions are contradictory, motivating them to change their attitude to align with their behavior.",
              "They fail to remember childhood episodic memories due to repression."
            ],
            "correctIndex": 2,
            "explanation": "Cognitive dissonance is the mental tension that arises when an individual holds two conflicting beliefs or acts in ways that contradict their beliefs (e.g. smoking while knowing smoking causes cancer). To relieve discomfort, people alter their attitudes to justify their behavior.",
            "distractorTip": "Cognitive dissonance: People change their ATTITUDES to match their BEHAVIOR to eliminate psychological tension."
          }
        ]
      },
      {
        "id": 402,
        "unitIndex": 4,
        "levelNumber": 2,
        "uniqueKey": "psych-u4-l2",
        "topicNumber": "Topic 4.2",
        "name": "Conformity, Compliance & Obedience",
        "subtitle": "Asch line study, Milgram shock experiment, and Zimbardo's prison study",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "psy4-l2-q1",
            "stem": "In Solomon Asch's classic visual perception experiment on conformity, why did approximately 75% of participants conform and give a blatantly incorrect answer on at least one critical trial?",
            "options": [
              "Normative social influence: the desire to conform to group consensus to avoid social rejection, embarrassment, or disapproval, even when knowing the group is wrong.",
              "Informational social influence: genuine optical confusion caused by astigmatism.",
              "Severe retrograde amnesia that erased visual lines from memory.",
              "The experimenter paid participants $100 every time they agreed with the confederates."
            ],
            "correctIndex": 0,
            "explanation": "Asch's subjects knew the confederates' answer was wrong, but succumbed to Normative Social Influence (the fear of being the odd one out). Conformity plummeted if even ONE confederate disagreed with the majority ('dissenter effect').",
            "distractorTip": "Informational social influence is conforming because you believe the group possesses superior knowledge (e.g., following a crowd out of an unfamiliar building)."
          },
          {
            "id": "psy4-l2-q2",
            "stem": "In Stanley Milgram's shocking 1963 obedience study at Yale University, what proportion of everyday participants complied with the experimenter's prods to administer the maximum, lethal 450-volt shock to an innocent learner?",
            "options": [
              "Less than 1% (only clinical psychopaths with prior criminal records).",
              "Approximately 65% (nearly two-thirds) of participants administered shocks up to the maximum 450 volts.",
              "Zero participants, because all refused when the learner screamed in pain at 150 volts.",
              "Exactly 100% of participants smiled and laughed while flipping the switches."
            ],
            "correctIndex": 1,
            "explanation": "Before the experiment, psychiatrists predicted fewer than 1% would go to the end. In reality, roughly 65% went all the way to 450 volts, demonstrating the terrifying power of perceived legitimate authority to compel ordinary individuals into destructive obedience.",
            "distractorTip": "Milgram showed obedience decreased if the experimenter gave orders by phone, if the learner was in the same room, or if fellow teachers rebelled."
          },
          {
            "id": "psych4-l2-q3",
            "stem": "In Stanley Milgram's famous obedience studies at Yale University, what percentage of ordinary adult participants administered the maximum, lethal-marked 450-volt shock to the learner?",
            "options": [
              "Approximately 65% of participants obeyed completely.",
              "Less than 2% of participants obeyed to the end.",
              "Exactly 25% of participants obeyed the experimenter.",
              "Over 99% of participants refused to administer shocks beyond 150 volts."
            ],
            "correctIndex": 0,
            "explanation": "Milgram found that approximately 65% (about two-thirds) of participants complied with the experimenter's authoritative verbal prods all the way to the maximum 450-volt shock level, demonstrating the tremendous power of perceived legitimate authority over personal conscience.",
            "distractorTip": "Psychiatrists predicted less than 1% would obey to 450V; in reality, a shocking 65% obeyed completely."
          }
        ]
      },
      {
        "id": 403,
        "unitIndex": 4,
        "levelNumber": 3,
        "uniqueKey": "psych-u4-l3",
        "topicNumber": "Topic 4.3",
        "name": "Group Dynamics & Collective Influence",
        "subtitle": "Social facilitation, social loafing, deindividuation, and groupthink",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "psy4-l3-q1",
            "stem": "A world-class Olympic concert violinist plays an intricate, well-rehearsed concerto significantly faster and with greater technical precision before a live audience of 2,000 spectators than when practicing alone in an empty studio. This enhancement illustrates:",
            "options": [
              "Group polarization: the strengthening of extreme ideological views following group discussion.",
              "Social loafing: expending less physical effort when working in a collective group.",
              "Social facilitation: the tendency for the presence of others to elevate physiological arousal and enhance performance on well-learned, simple, or dominant tasks.",
              "Deindividuation: committing antisocial acts while wearing a disguise."
            ],
            "correctIndex": 2,
            "explanation": "According to Robert Zajonc, audience presence increases arousal: this enhances performance on easy/well-mastered tasks (social facilitation), but impairs performance on novel, complex, or unpracticed tasks (social impairment).",
            "distractorTip": "Remember: Social facilitation helps you do BETTER on things you know well, but WORSE on things you haven't mastered yet."
          },
          {
            "id": "psy4-l3-q2",
            "stem": "What organizational pathology characterized by excessive desire for group harmony, suppression of dissenting opinions, and an illusion of invulnerability led to disasters like the Bay of Pigs invasion and the Challenger explosion?",
            "options": [
              "Altruistic empathy",
              "Social facilitation",
              "Informational conformity",
              "Groupthink (identified by Irving Janis)"
            ],
            "correctIndex": 3,
            "explanation": "Groupthink occurs in tight-knit, isolated decision-making groups under pressure. Members self-censor doubts to maintain consensus, leading to catastrophic blunders because critical flaws are never scrutinized.",
            "distractorTip": "To prevent groupthink, leaders should remain impartial, invite outside experts, and formally assign a 'devil's advocate' to critique plans."
          },
          {
            "id": "psych4-l3-q3",
            "stem": "When a cohesive committee of advisors prioritizes consensus and harmonious agreement over critical, independent evaluation of alternatives, what dangerous group dynamic is occurring?",
            "options": [
              "Social facilitation",
              "Deindividuation",
              "Social loafing",
              "Groupthink"
            ],
            "correctIndex": 3,
            "explanation": "Groupthink (identified by Irving Janis) occurs when a close-knit group suppresses dissenting viewpoints and critical thinking in pursuit of unanimous agreement, often leading to disastrous foreign policy or business decisions.",
            "distractorTip": "Groupthink = desire for harmony overrides realistic appraisal; Group polarization = group discussion strengthens initial shared attitudes."
          }
        ]
      },
      {
        "id": 404,
        "unitIndex": 4,
        "levelNumber": 4,
        "uniqueKey": "psych-u4-l4",
        "topicNumber": "Topic 4.4",
        "name": "Prejudice, Altruism & The Bystander Effect",
        "subtitle": "Darley and Latané, diffusion of responsibility, and Sherif's Robbers Cave",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "psy4-l4-q1",
            "stem": "In John Darley and Bibb Latané's classic social psychological investigations into the 'bystander effect' following the murder of Kitty Genovese, what primary psychological mechanism explained why individuals in large crowds fail to intervene in emergencies?",
            "options": [
              "Diffusion of responsibility: the presence of multiple witnesses causes each individual to feel less personally responsible for taking action, assuming someone else will help.",
              "Universal genetic sociopathy inherent to all urban metropolitan citizens.",
              "The fear of contracting rabies from the injured victim.",
              "Sensory adaptation that makes human auditory screams inaudible to crowds."
            ],
            "correctIndex": 0,
            "explanation": "When alone, 85% of people help immediately. In a crowd, people look at others' passive reactions (pluralistic ignorance: 'no one else looks worried') and assume someone else has already called 911 (diffusion of responsibility).",
            "distractorTip": "If you need help in a crowd, point directly to ONE specific person: 'You in the blue jacket, call 911!' This eliminates diffusion of responsibility."
          },
          {
            "id": "psy4-l4-q2",
            "stem": "In Muzafer Sherif's famous 'Robbers Cave' experiment (1954), what intervention successfully dissolved hostile tribal prejudice and fighting between the 'Rattlers' and 'Eagles' boy scout factions?",
            "options": [
              "Separating the boys into solitary confinement cells for three days.",
              "Introducing superordinate goals: shared, urgent collaborative challenges (like repairing the camp's broken water supply line) that required mutual cooperation to achieve.",
              "Forcing the two groups to attend mandatory educational lectures on diversity.",
              "Awarding cash prizes to whichever group threw fewer rocks at the other."
            ],
            "correctIndex": 1,
            "explanation": "Contact alone does NOT reduce hostility (it often increases friction). Only superordinate goals—predicaments where both groups MUST work together to survive or succeed—break down tribal in-group vs. out-group prejudice.",
            "distractorTip": "Superordinate goals unite competing groups into a single, shared in-group identity."
          },
          {
            "id": "psych4-l4-q3",
            "stem": "What psychological mechanism explains why bystanders in a crowded city street are significantly less likely to assist an injured victim than if only a single bystander were present?",
            "options": [
              "Social loafing",
              "Diffusion of responsibility",
              "Fundamental attribution error",
              "Self-serving bias"
            ],
            "correctIndex": 1,
            "explanation": "The bystander effect occurs because the presence of others creates a diffusion of responsibility: each individual assumes that someone else will call 911 or intervene, diminishing individual perceived obligation to act.",
            "distractorTip": "Bystander effect is driven by diffusion of responsibility and pluralistic ignorance (looking to others to gauge emergency severity)."
          }
        ]
      },
      {
        "id": 405,
        "unitIndex": 4,
        "levelNumber": 5,
        "uniqueKey": "psych-u4-l5",
        "topicNumber": "Topic 4.5",
        "name": "Psychodynamic Theory & Defense Mechanisms",
        "subtitle": "Freud's Id/Ego/Superego, and unconscious defense mechanisms",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy4-l5-q1",
            "stem": "A corporate manager who is furious after being reprimanded by the CEO goes home and screams at his spouse, who then yells at their child, who then kicks the family dog. Which Freudian defense mechanism is operating across this sequence?",
            "options": [
              "Reaction formation: switching unacceptable impulses into their exact opposites.",
              "Projection: disguising one's own unacceptable impulses by attributing them to other people.",
              "Displacement: redirecting unconscious hostile or aggressive impulses from the original threatening target toward a safer, less powerful substitute target.",
              "Sublimation: channeling unacceptable aggressive drives into culturally praised athletic accomplishments."
            ],
            "correctIndex": 2,
            "explanation": "The manager cannot yell at the boss (threat of getting fired), so the threatening impulse is displaced downward onto safer targets (spouse -> child -> dog).",
            "distractorTip": "Projection = 'I hate my neighbor' becomes 'My neighbor hates me.' Reaction Formation = Being overly sweet and affectionate toward someone you secretly despise."
          },
          {
            "id": "psy4-l5-q2",
            "stem": "According to Sigmund Freud's structural model of the psyche, which agency operates according to the \"reality principle\", negotiating realistic compromises between primal biological drives and moral conscience?",
            "options": [
              "The Collective Unconscious",
              "The Id (governed by the pleasure principle)",
              "The Superego (governed by internalized moral ideals)",
              "The Ego"
            ],
            "correctIndex": 3,
            "explanation": "The Id is the impulsive child demanding immediate gratification ('I want it NOW!'). The Superego is the moral parent ('Stealing is a sin!'). The Ego is the executive mediator operating on the Reality Principle ('Let's wait and purchase it legally').",
            "distractorTip": "Freud argued that neuroses and anxiety arise when the Ego struggles to balance the relentless demands of the Id and the punishing guilt of the Superego."
          },
          {
            "id": "psych4-l5-q3",
            "stem": "A man who harbors strong unacknowledged feelings of hostility toward his coworker constantly accuses the coworker of being secretly angry and aggressive toward him. Which psychoanalytic defense mechanism is operating?",
            "options": [
              "Sublimation",
              "Reaction formation",
              "Projection",
              "Regression"
            ],
            "correctIndex": 2,
            "explanation": "Projection involves disguising one's own unacceptable impulses or feelings by attributing them to other people. The man projects his own internal hostility onto the innocent coworker.",
            "distractorTip": "Projection = 'I hate him' becomes 'He hates me'; Reaction formation = 'I hate him' becomes 'I love him and must act overly nice'."
          }
        ]
      },
      {
        "id": 406,
        "unitIndex": 4,
        "levelNumber": 6,
        "uniqueKey": "psych-u4-l6",
        "topicNumber": "Topic 4.6",
        "name": "The Big Five Trait Model & Assessment",
        "subtitle": "OCEAN dimensions, Bandura's reciprocal determinism, and objective vs. projective tests",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy4-l6-q1",
            "stem": "Which personality trait dimension in the contemporary 'Big Five' (Five-Factor Model / OCEAN) describes an individual who is organized, disciplined, dependable, and goal-directed?",
            "options": [
              "Conscientiousness",
              "Extraversion",
              "Agreeableness",
              "Neuroticism (emotional instability)"
            ],
            "correctIndex": 0,
            "explanation": "Remember the OCEAN acronym: Openness (creativity/curiosity), Conscientiousness (organization/discipline), Extraversion (sociability), Agreeableness (cooperation/trust), Neuroticism (emotional volatility/anxiety).",
            "distractorTip": "High Conscientiousness is the single strongest personality predictor of long-term academic grades, workplace success, and physical longevity."
          },
          {
            "id": "psy4-l6-q2",
            "stem": "Albert Bandura's social-cognitive theory of personality proposes the concept of \"reciprocal determinism\", which asserts that human personality is shaped by the continuous dynamic interaction among:",
            "options": [
              "Unconscious infantile sexual traumas and ancestral archetypes.",
              "Internal cognitive/personal factors, external environmental contexts, and overt behaviors, each influencing and reinforcing the other two.",
              "Phrenological cranial skull bumps and hormonal endocrine levels.",
              "Strict astrological alignment charts recorded at the exact moment of birth."
            ],
            "correctIndex": 1,
            "explanation": "You choose your environment (e.g., attending college), which shapes your beliefs (cognition), which influences your study habits (behavior), which changes your future opportunities (environment). It is an ongoing reciprocal feedback loop.",
            "distractorTip": "Julian Rotter introduced 'Internal vs. External Locus of Control' (believing you control your fate vs. believing luck/external forces control it)."
          },
          {
            "id": "psych4-l6-q3",
            "stem": "Which of the following personality traits in the Big Five (Five-Factor) Model is characterized by organization, self-discipline, dependability, and achievement orientation?",
            "options": [
              "Conscientiousness",
              "Neuroticism",
              "Agreeableness",
              "Openness to Experience"
            ],
            "correctIndex": 0,
            "explanation": "Conscientiousness reflects high self-control, organizational discipline, thoroughness, and goal-directed behavior. High scorers are reliable and punctual; low scorers are spontaneous and disorganized.",
            "distractorTip": "Remember OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism."
          }
        ]
      },
      {
        "id": 407,
        "unitIndex": 4,
        "levelNumber": 7,
        "uniqueKey": "psych-u4-l7",
        "topicNumber": "Unit 4 Boss Level",
        "name": "Social Psychology & Personality Capstone",
        "subtitle": "Deconstructing complex social dilemmas, personality assessments, and clinical ethics",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "psy4-l7-q1",
            "stem": "What was the profound ethical and methodological controversy that led to widespread condemnation of Philip Zimbardo's 1971 Stanford Prison Experiment?",
            "options": [
              "The Stanford campus police arrested all research assistants for practicing medicine without a license.",
              "Zimbardo fabricated all visual film footage and hired professional actors from Hollywood.",
              "The study was halted after just six days due to severe psychological distress, emotional breakdowns of student 'prisoners', and sadistic abuse by student 'guards', demonstrating the toxic power of deindividuating situational roles while violating modern APA ethical standards against human harm.",
              "The federal government nationalized the basement of the psychology department as a military barracks."
            ],
            "correctIndex": 2,
            "explanation": "Normal, healthy male college students assigned to be 'guards' rapidly turned abusive when stripped of individuality and given unchecked institutional power. The study highlighted the power of the situation, but violated modern ethical mandates protecting research subjects from psychological trauma.",
            "distractorTip": "Today, Institutional Review Boards (IRBs) require strict informed consent, risk-benefit evaluations, and immediate debriefing to prevent unethical trauma."
          },
          {
            "id": "psy4-l7-q2",
            "stem": "Why do clinical psychologists consider projective personality assessments (such as the Rorschach Inkblot Test and Thematic Apperception Test TAT) to be scientifically problematic compared to objective empirical tests like the MMPI-2?",
            "options": [
              "The Rorschach inkblots contain toxic chemical dyes that irritate patient skin.",
              "Projective tests require forty hours of continuous brain surgery to administer.",
              "Objective personality tests are strictly prohibited by the American Psychological Association.",
              "Projective tests suffer from low inter-rater reliability, questionable construct validity, and subjective scoring heavily biased by the individual clinician's theoretical preconceptions."
            ],
            "correctIndex": 3,
            "explanation": "Projective tests rely on psychoanalytic assumptions that patients project unconscious conflicts onto ambiguous inkblots or pictures. Because two clinicians frequently score the same patient completely differently, they lack psychometric reliability and validity.",
            "distractorTip": "The Minnesota Multiphasic Personality Inventory (MMPI-2) is empirical and objective: it uses 567 true/false questions standardized across thousands of clinical patients."
          },
          {
            "id": "psych4-l7-q3",
            "stem": "When an observer attributes a driver's erratic swerving exclusively to being a 'reckless, terrible person' while ignoring the fact that a blown-out tire caused the swerve, which cognitive bias occurred?",
            "options": [
              "The halo effect",
              "The self-fulfilling prophecy",
              "The availability heuristic",
              "The Fundamental Attribution Error (FAE)"
            ],
            "correctIndex": 3,
            "explanation": "The Fundamental Attribution Error is the tendency for observers to underestimate situational factors and overestimate dispositional (internal personality) traits when analyzing another person's behavior.",
            "distractorTip": "FAE = blaming someone else's character (disposition) while ignoring the external situation."
          }
        ]
      }
    ]
  },
  {
    "unitIndex": 5,
    "unitId": "u5",
    "title": "Unit 5: Mental & Physical Health",
    "shortTitle": "Unit 5: Clinical & Health",
    "description": "DSM-5-TR diagnostic criteria, schizophrenia, mood disorders, anxiety/OCD, personality disorders, CBT/psychotherapy, and stress GAS physiology",
    "examWeight": "15–25% of AP Exam",
    "biome": {
      "name": "Sanctuary of Healing & Equilibrium",
      "icon": "🌿",
      "accentColor": "#06B6D4",
      "secondaryColor": "#0891B2",
      "groundGradient": "from-cyan-100 via-sky-50 to-teal-100",
      "cardBorder": "border-cyan-500",
      "trailColor": "#06b6d4",
      "nodeRing": "ring-cyan-400/40",
      "skyTint": "from-cyan-50 to-teal-50/30"
    },
    "levels": [
      {
        "id": 501,
        "unitIndex": 5,
        "levelNumber": 1,
        "uniqueKey": "psych-u5-l1",
        "topicNumber": "Topic 5.1",
        "name": "Defining Psychological Disorders & Rosenhan Study",
        "subtitle": "The DSM-5-TR, biopsychosocial model, and the diagnostic labeling controversy",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "psy5-l1-q1",
            "stem": "In David Rosenhan's famous 1973 study 'On Being Sane in Insane Places', healthy researchers ('pseudopatients') gained admission to psychiatric hospitals by falsely claiming to hear a voice saying 'empty, hollow, thud.' What happened once admitted?",
            "options": [
              "Staff interpreted all normal behaviors (like writing in notebooks or pacing in hallways) as symptoms of their diagnosed schizophrenia, demonstrating the pervasive stigmatizing power of diagnostic labels.",
              "Hospital psychiatrists immediately recognized that all pseudopatients were completely sane within ten minutes.",
              "The pseudopatients were awarded clinical medical licenses by the hospital board of trustees.",
              "All pseudopatients developed genuine physiological brain tumors during their hospital stay."
            ],
            "correctIndex": 0,
            "explanation": "Rosenhan demonstrated how diagnostic labels create confirmation bias: once labeled 'schizophrenic,' even normal note-taking was charted by nurses as 'patient engages in compulsive writing behavior.' Labels can blind clinicians to patient health.",
            "distractorTip": "The Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR) classifies and describes disorders, but deliberately avoids speculating on causes for most conditions."
          },
          {
            "id": "psy5-l1-q2",
            "stem": "The \"Biopsychosocial Model\" of psychological pathology asserts that mental health disorders arise from:",
            "options": [
              "A single defective recessive chromosome that guarantees clinical depression.",
              "The complex, interconnected interaction of biological predispositions (genetics, brain chemistry), psychological processes (cognitive styles, coping habits), and sociocultural stressors (poverty, trauma, cultural norms).",
              "Demonic possession that must be cured through spiritual exorcisms.",
              "A lack of willpower and personal moral failure."
            ],
            "correctIndex": 1,
            "explanation": "Modern clinical psychology rejects single-cause theories. The Diathesis-Stress Model exemplifies this: a person may inherit a biological vulnerability (diathesis), but a disorder only manifests if triggered by environmental stressors.",
            "distractorTip": "Diathesis = Genetic/biological vulnerability; Stress = Environmental trigger."
          },
          {
            "id": "psych5-l1-q3",
            "stem": "What was the landmark finding of David Rosenhan's 1973 study 'On Being Sane in Insane Places'?",
            "options": [
              "Electroconvulsive therapy proved 100% effective for catatonic schizophrenia.",
              "Clinicians could easily distinguish between simulated and real psychiatric symptoms within 24 hours.",
              "Diagnostic psychiatric labels powerfully biased clinicians' perceptions, causing normal behaviors of sane pseudo-patients to be interpreted as pathological symptoms.",
              "Deinstitutionalization led to an immediate eradication of psychiatric disorders."
            ],
            "correctIndex": 2,
            "explanation": "Rosenhan sent sane pseudo-patients who feigned hearing a single voice into psychiatric hospitals. Once admitted, all acted completely normally, yet clinicians diagnosed them with schizophrenia and interpreted ordinary behaviors (like note-taking) as pathological symptoms, demonstrating the stigmatizing power of diagnostic labels.",
            "distractorTip": "Rosenhan's study demonstrated the biasing power of diagnostic psychiatric labels in clinical settings."
          }
        ]
      },
      {
        "id": 502,
        "unitIndex": 5,
        "levelNumber": 2,
        "uniqueKey": "psych-u5-l2",
        "topicNumber": "Topic 5.2",
        "name": "Schizophrenia Spectrum Disorders",
        "subtitle": "Positive vs. negative symptoms, hallucinations, delusions, and dopamine",
        "difficulty": "Easy",
        "rewardCoins": 30,
        "questions": [
          {
            "id": "psy5-l2-q1",
            "stem": "In diagnosing Schizophrenia, what distinguishes \"positive symptoms\" from \"negative symptoms\"?",
            "options": [
              "Positive symptoms respond to talk therapy, while negative symptoms respond to diet.",
              "Positive symptoms are pleasant experiences, while negative symptoms are painful.",
              "Positive symptoms are behavioral excesses or distortions added to normal functioning (hallucinations, delusions); negative symptoms are behavioral deficits subtracted from normal functioning (flat affect, avolition, social withdrawal).",
              "Positive symptoms occur only in childhood, while negative symptoms occur in adulthood."
            ],
            "correctIndex": 2,
            "explanation": "Think mathematically: Positive (+) = Added to reality (hearing voices/hallucinations, false beliefs/delusions). Negative (-) = Subtracted from reality (catatonia, absence of emotional expression/flat affect, lack of speech/poverty of thought).",
            "distractorTip": "A Hallucination is a false sensory perception (hearing voices that don't exist); a Delusion is a false cognitive belief (believing the CIA is tracking you via dental fillings)."
          },
          {
            "id": "psy5-l2-q2",
            "stem": "The neurochemical \"Dopamine Hypothesis\" of schizophrenia posits that the positive symptoms (hallucinations and delusions) are associated primarily with:",
            "options": [
              "Excessive endorphin release following aerobic exercise.",
              "A severe deficiency of acetylcholine in the cerebral cortex.",
              "The total destruction of the cerebellum by toxic serotonin reuptake.",
              "Excessive, hyperactive dopamine receptor activity in subcortical brain pathways, supported by the fact that dopamine antagonists (antipsychotics) reduce positive symptoms."
            ],
            "correctIndex": 3,
            "explanation": "First-generation antipsychotics (like Thorazine and Haldol) block dopamine D2 receptors and effectively diminish hallucinations. However, Parkinson's disease is caused by too LITTLE dopamine, showing the delicate neurochemical balance.",
            "distractorTip": "Long-term use of dopamine-blocking antipsychotics can induce 'Tardive Dyskinesia'—involuntary, repetitive facial and limb twitching."
          },
          {
            "id": "psych5-l2-q3",
            "stem": "Which of the following is classified as a 'negative symptom' of schizophrenia spectrum disorders?",
            "options": [
              "Flat affect and avolition (lack of emotional expression and motivation)",
              "Auditory hallucinations of voices commenting on behavior",
              "Delusions of grandeur and persecution",
              "Disorganized, erratic speech and word salad"
            ],
            "correctIndex": 0,
            "explanation": "Positive symptoms are additions to normal behavior (hallucinations, delusions, disorganized speech). Negative symptoms are absences of normal behavior, such as flat affect (lack of emotional expression), avolition (inability to initiate action), and alogia (poverty of speech).",
            "distractorTip": "Positive = Presence of abnormal behaviors (hallucinations); Negative = Absence of healthy behaviors (flat affect, avolition)."
          }
        ]
      },
      {
        "id": 503,
        "unitIndex": 5,
        "levelNumber": 3,
        "uniqueKey": "psych-u5-l3",
        "topicNumber": "Topic 5.3",
        "name": "Depressive & Bipolar Disorders",
        "subtitle": "Major depressive disorder, learned helplessness, Beck's cognitive triad, and bipolar",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "psy5-l3-q1",
            "stem": "Martin Seligman's theory of \"Learned Helplessness\"—demonstrated by dogs repeatedly exposed to unavoidable electrical shocks who later failed to escape even when the exit door was open—explains depression as:",
            "options": [
              "A passive state of resignation developed when an individual perceives that they have zero control over negative, aversive life events.",
              "An acute manic episode triggered by excessive dopamine synthesis.",
              "A biological allergy to synthetic carpet fibers.",
              "The sudden surgical severance of the spinal cord."
            ],
            "correctIndex": 0,
            "explanation": "Depressed individuals develop a pessimistic explanatory style: they view negative events as Internal ('it's my fault'), Stable ('it will never change'), and Global ('it ruins everything in my life'), leading to learned helplessness and paralysis.",
            "distractorTip": "Aaron Beck identified the 'Negative Cognitive Triad': depressed patients hold automatic, distorted negative beliefs about: 1) Themselves, 2) Their World, and 3) Their Future."
          },
          {
            "id": "psy5-l3-q2",
            "stem": "What clinical symptom presentation distinguishes Bipolar I Disorder from Major Depressive Disorder?",
            "options": [
              "Bipolar I is diagnosed only if the patient has never felt sad in their lifetime.",
              "Bipolar I features at least one full-blown manic episode (characterized by euphoric hyperactivity, grandiosity, flight of ideas, decreased need for sleep, and impulsive risk-taking), typically alternating with major depressive episodes.",
              "Major Depressive Disorder always includes visual hallucinations of talking animals.",
              "Bipolar I can be cured permanently within twenty minutes by drinking citrus juice."
            ],
            "correctIndex": 1,
            "explanation": "Mania is the clinical hallmark of Bipolar I: patients experience an intense surge of energy where they may spend life savings, stay awake for four days writing grandiose plans, and talk with racing thoughts ('flight of ideas').",
            "distractorTip": "Lithium carbonate is the premier mood-stabilizing medication used to prevent and manage bipolar manic episodes."
          },
          {
            "id": "psych5-l3-q3",
            "stem": "Which psychiatric medication class is considered the gold-standard mood stabilizer for treating bipolar disorder and preventing manic episodes?",
            "options": [
              "Selective serotonin reuptake inhibitors (SSRIs)",
              "Benzodiazepine sedatives",
              "Monoamine oxidase inhibitors (MAOIs)",
              "Lithium carbonate"
            ],
            "correctIndex": 3,
            "explanation": "Lithium carbonate is a chemical element and mood stabilizer specifically prescribed to manage bipolar disorder, dampening extreme manic highs and stabilizing mood swings.",
            "distractorTip": "Lithium = Bipolar disorder mood stabilizer; SSRIs (Prozac, Zoloft) = Depression and Anxiety."
          }
        ]
      },
      {
        "id": 504,
        "unitIndex": 5,
        "levelNumber": 4,
        "uniqueKey": "psych-u5-l4",
        "topicNumber": "Topic 5.4",
        "name": "Anxiety, OCD & Trauma Disorders",
        "subtitle": "Panic disorder, agoraphobia, obsessions vs. compulsions, and PTSD",
        "difficulty": "Medium",
        "rewardCoins": 40,
        "questions": [
          {
            "id": "psy5-l4-q1",
            "stem": "In Obsessive-Compulsive Disorder (OCD), what is the functional relationship between an \"obsession\" and a \"compulsion\"?",
            "options": [
              "Obsessions are healthy hobbies; Compulsions are criminal felonies.",
              "Obsessions are physical actions like hand-washing; Compulsions are silent thoughts.",
              "Obsessions are persistent, intrusive, anxiety-provoking thoughts, images, or urges; Compulsions are repetitive, ritualistic behaviors or mental acts performed to temporarily alleviate the anxiety caused by the obsession.",
              "There is no difference; the two words are exact clinical synonyms."
            ],
            "correctIndex": 2,
            "explanation": "Obsession = Intrusive Thought ('My hands are covered in deadly bacteria'). Compulsion = Repetitive Action (washing hands 50 times in scalding water). The compulsion is negatively reinforced because it temporarily relieves the agonizing anxiety.",
            "distractorTip": "Obsessions generate anxiety; Compulsions temporarily reduce anxiety through negative reinforcement."
          },
          {
            "id": "psy5-l4-q2",
            "stem": "A military veteran experiences recurring intrusive nightmares of battlefield ambushes, intense physiological hyperarousal to loud engine backfires, severe emotional detachment, and goes to extreme lengths to avoid crowded public places. The veteran meets diagnostic criteria for:",
            "options": [
              "Histrionic Personality Disorder",
              "Somatic Symptom Disorder",
              "Dissociative Fugue",
              "Post-Traumatic Stress Disorder (PTSD)"
            ],
            "correctIndex": 3,
            "explanation": "PTSD requires exposure to actual or threatened death, serious injury, or sexual violence, followed by four diagnostic symptom clusters: 1) Intrusive re-experiencing (flashbacks), 2) Avoidance of trauma triggers, 3) Negative cognitive/mood alterations, and 4) Hyperarousal (jumpiness, insomnia).",
            "distractorTip": "If symptoms occur immediately and last for less than one month, it is classified as Acute Stress Disorder; if symptoms persist beyond one month, it is PTSD."
          },
          {
            "id": "psych5-l4-q3",
            "stem": "In Obsessive-Compulsive Disorder (OCD), what is the psychological relationship between obsessions and compulsions?",
            "options": [
              "Compulsions are unconscious defense mechanisms that produce auditory hallucinations.",
              "Obsessions are persistent, intrusive anxiety-provoking thoughts; compulsions are repetitive behaviors performed to reduce that anxiety.",
              "Obsessions are motor tics; compulsions are delusional beliefs.",
              "Compulsions cause physical pain that produces panic attacks."
            ],
            "correctIndex": 1,
            "explanation": "Obsessions are repetitive, unwanted intrusive thoughts or urges that generate severe anxiety. Compulsions are repetitive ritualistic behaviors or mental acts performed to alleviate or neutralize the anxiety caused by the obsession.",
            "distractorTip": "Obsessions = Intrusive THOUGHTS; Compulsions = Repetitive BEHAVIORS to neutralize the anxiety."
          }
        ]
      },
      {
        "id": 505,
        "unitIndex": 5,
        "levelNumber": 5,
        "uniqueKey": "psych-u5-l5",
        "topicNumber": "Topic 5.5",
        "name": "Dissociative, Somatic & Personality Disorders",
        "subtitle": "DID, illness anxiety, and Cluster B personality disorders",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy5-l5-q1",
            "stem": "A 28-year-old criminal defendant repeatedly lies, steals, violates the legal rights of others without a trace of remorse, shows extreme impulsivity, and has a childhood history of conduct disorder and cruelty to animals. The defendant most likely meets the DSM-5 criteria for:",
            "options": [
              "Antisocial Personality Disorder (ASPD)",
              "Schizoid Personality Disorder",
              "Dependent Personality Disorder",
              "Illness Anxiety Disorder (Hypochondriasis)"
            ],
            "correctIndex": 0,
            "explanation": "Antisocial Personality Disorder (often referred to as psychopathy or sociopathy) is characterized by a pervasive pattern of disregard for and violation of the rights of others, lack of empathy, deceitfulness, and total absence of guilt or remorse.",
            "distractorTip": "AP Trap: 'Antisocial' does NOT mean shy or introverted (that is asocial or avoidant). In clinical psychology, 'Antisocial' means predatory, destructive, and anti-society!"
          },
          {
            "id": "psy5-l5-q2",
            "stem": "What is the core diagnostic feature of \"Dissociative Identity Disorder\" (DID, formerly Multiple Personality Disorder)?",
            "options": [
              "The sudden physical onset of blindness or glove anesthesia with zero neurological cause.",
              "The disruption of identity characterized by two or more distinct, alternating personality states (alters) that control behavior, accompanied by significant memory gaps for everyday events.",
              "The false belief that one has a fatal terminal illness despite repeated normal medical tests.",
              "The complete paralysis of voluntary skeletal muscles during daytime wakefulness."
            ],
            "correctIndex": 1,
            "explanation": "DID is a severe dissociative disorder almost universally linked to severe, chronic childhood trauma (physical/sexual abuse). The child dissociates from unbearable reality, creating fractured identities to compartmentalize the trauma.",
            "distractorTip": "DID is frequently confused in popular culture with Schizophrenia. Schizophrenia = Split from REALITY (psychosis); DID = Split in IDENTITY (multiple alters)."
          },
          {
            "id": "psych5-l5-q3",
            "stem": "A person with Antisocial Personality Disorder is characterized clinically by which predominant pattern of behavior?",
            "options": [
              "Extreme social anxiety and fear of negative social evaluation.",
              "Persistent instability in interpersonal relationships and intense fear of abandonment.",
              "A pervasive pattern of disregard for the rights of others, lack of empathy or remorse, and deceitfulness.",
              "Preoccupation with orderliness, perfectionism, and excessive interpersonal control."
            ],
            "correctIndex": 2,
            "explanation": "Antisocial Personality Disorder is characterized by a persistent disregard for moral norms, violation of the rights of others, impulsivity, aggressive or deceitful behavior, and a profound lack of guilt or empathy.",
            "distractorTip": "Antisocial in clinical psychology does NOT mean 'shy' or 'introverted'; it means 'anti-society' (violating laws and others' rights without remorse)."
          }
        ]
      },
      {
        "id": 506,
        "unitIndex": 5,
        "levelNumber": 6,
        "uniqueKey": "psych-u5-l6",
        "topicNumber": "Topic 5.6",
        "name": "Psychotherapy Modalities & Techniques",
        "subtitle": "Psychoanalysis, CBT, systematic desensitization, and humanistic therapy",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy5-l6-q1",
            "stem": "A clinical psychologist treating a patient with an incapacitating phobia of flying constructs a fear hierarchy (from looking at a toy airplane to boarding a jetliner) and trains the patient in deep progressive muscle relaxation, gradually pairing relaxation with each phobic step. This behavioral technique is:",
            "options": [
              "Electroconvulsive therapy (ECT): applying bilateral electric currents to the skull.",
              "Aversive conditioning: pairing flying with an emetic nausea-inducing drug.",
              "Systematic desensitization (developed by Joseph Wolpe): based on counterconditioning, replacing anxiety with relaxation because two opposing emotional states cannot coexist simultaneously.",
              "Client-centered unconditional positive regard without any behavioral training."
            ],
            "correctIndex": 2,
            "explanation": "Wolpe's systematic desensitization uses reciprocal inhibition: you cannot be physiologically relaxed and terrified at the same instant. By slowly climbing the anxiety hierarchy while in deep relaxation, the conditioned fear response is extinguished.",
            "distractorTip": "Flooding is full immediate exposure (forcing the patient into an airplane immediately until the panic subsides); Systematic desensitization is gradual and gentle."
          },
          {
            "id": "psy5-l6-q2",
            "stem": "Aaron Beck's Cognitive Therapy and Albert Ellis's Rational Emotive Behavior Therapy (REBT) treat emotional distress primarily by:",
            "options": [
              "Encouraging the patient to blame their parents for all adult shortcomings.",
              "Analyzing the patient's dreams to uncover repressed psychosexual infantile fixations.",
              "Prescribing heavy sedative tranquilizers to numb all emotional sensations.",
              "Identifying, challenging, and reframing irrational, catastrophic automatic thought patterns (cognitive distortions) that trigger negative emotional reactions."
            ],
            "correctIndex": 3,
            "explanation": "Cognitive therapy operates on the premise: 'It is not events that upset us, but the view we take of them' (Epictetus). Ellis's ABC model shows: Activating event (A) -> Belief (B) -> emotional Consequence (C). Changing irrational beliefs resolves the distress.",
            "distractorTip": "Cognitive-Behavioral Therapy (CBT) is currently the most empirically supported, widely practiced psychotherapy for anxiety and depression."
          },
          {
            "id": "psych5-l6-q3",
            "stem": "Which behavioral therapy technique pairs a pleasant relaxed state with gradually increasing anxiety-triggering stimuli to treat specific phobias?",
            "options": [
              "Systematic desensitization",
              "Aversive conditioning",
              "Free association",
              "Rational emotive behavior therapy"
            ],
            "correctIndex": 0,
            "explanation": "Joseph Wolpe developed systematic desensitization, a form of counterconditioning where patients learn deep muscle relaxation and then progressively confront items on an anxiety hierarchy from least to most frightening.",
            "distractorTip": "Systematic desensitization = relaxation + gradual hierarchy (phobias); Aversive conditioning = pairing unwanted behavior with noxious stimulus."
          }
        ]
      },
      {
        "id": 507,
        "unitIndex": 5,
        "levelNumber": 7,
        "uniqueKey": "psych-u5-l7",
        "topicNumber": "Topic 5.7",
        "name": "Biomedical Therapies, Stress Physiology & Health",
        "subtitle": "SSRIs, lithium, Selye's General Adaptation Syndrome, and Type A personality",
        "difficulty": "Hard",
        "rewardCoins": 50,
        "questions": [
          {
            "id": "psy5-l7-q1",
            "stem": "In Hans Selye's General Adaptation Syndrome (GAS) model of biological stress response, what are the three sequential physiological stages the body undergoes when facing chronic, prolonged stress?",
            "options": [
              "Alarm Reaction, Resistance, and Exhaustion.",
              "Excitement, Plateau, and Resolution.",
              "Oral, Anal, and Phallic.",
              "Sensory, Working, and Long-Term."
            ],
            "correctIndex": 0,
            "explanation": "1) Alarm: sympathetic nervous system triggers fight-or-flight (cortisol/adrenaline surge). 2) Resistance: body remains on high alert with elevated hormone levels to cope. 3) Exhaustion: physical resources are depleted, leading to immune suppression, illness, or cardiovascular collapse.",
            "distractorTip": "Selye proved that long-term psychological stress physically damages internal organs (ulcers, hypertension, heart disease) during the exhaustion stage."
          },
          {
            "id": "psy5-l7-q2",
            "stem": "Selective Serotonin Reuptake Inhibitors (SSRIs, such as fluoxetine/Prozac and sertraline/Zoloft) alleviate depressive symptoms at the neuronal synapse primarily by:",
            "options": [
              "Directly manufacturing new serotonin atoms out of dietary cholesterol.",
              "Blocking the pre-synaptic reuptake transporter proteins, leaving more serotonin molecules active in the synaptic cleft to bind to post-synaptic receptors.",
              "Permanently destroying post-synaptic serotonin receptor channels.",
              "Slowing down the conduction velocity of action potentials in the optic nerve."
            ],
            "correctIndex": 1,
            "explanation": "Normally, serotonin is released into the synapse and quickly vacuumed back into the pre-synaptic neuron (reuptake). SSRIs inhibit this vacuuming process, increasing the availability and duration of serotonin signaling.",
            "distractorTip": "SSRIs are agonists because they enhance the functional availability of serotonin in the synapse."
          },
          {
            "id": "psych5-l7-q3",
            "stem": "In Hans Selye's General Adaptation Syndrome (GAS) model of stress, what are the three sequential physiological stages?",
            "options": [
              "Primary appraisal, Secondary appraisal, Coping",
              "Sympathetic activation, Parasympathetic rebound, Homeostasis",
              "Cognitive dissonance, Frustration, Catharsis",
              "Alarm reaction, Resistance, Exhaustion"
            ],
            "correctIndex": 3,
            "explanation": "Selye's General Adaptation Syndrome outlines the body's response to chronic stress: (1) Alarm reaction (fight-or-flight sympathetic response), (2) Resistance (sustained hormone release coping with the stressor), and (3) Exhaustion (depletion of bodily resources, collapse, illness).",
            "distractorTip": "GAS Stages: A-R-E = Alarm, Resistance, Exhaustion."
          }
        ]
      },
      {
        "id": 508,
        "unitIndex": 5,
        "levelNumber": 8,
        "uniqueKey": "psych-u5-l8",
        "topicNumber": "Unit 5 Boss Level",
        "name": "Clinical Diagnosis & Health Equilibrium Capstone",
        "subtitle": "Deconstructing complex psychiatric presentations, therapeutic ethics, and psychosomatics",
        "difficulty": "Boss",
        "rewardCoins": 100,
        "questions": [
          {
            "id": "psy5-l8-q1",
            "stem": "A 45-year-old corporate attorney with a competitive, hard-driving, impatient, easily angered, and hostile temperament (classic Type A personality) is at statistically elevated risk for which physical medical condition?",
            "options": [
              "Congenital colorblindness and night blindness.",
              "Schizophrenia and visual auditory hallucinations.",
              "Coronary heart disease and myocardial infarction, driven primarily by the chronic toxic component of hostility, cynicism, and autonomic arousal.",
              "Multiple sclerosis and cerebellar myelin degradation."
            ],
            "correctIndex": 2,
            "explanation": "Cardiologists Friedman and Rosenman identified Type A (competitive, impatient, hostile) vs. Type B (easygoing, relaxed). Research revealed that the specific toxic ingredient in Type A is HOSTILITY: anger triggers chronic sympathetic arousal, damaging arterial walls.",
            "distractorTip": "Anger and cynicism literally damage the cardiovascular system by bathing the heart in chronic stress hormones (cortisol, epinephrine)."
          },
          {
            "id": "psy5-l8-q2",
            "stem": "Carl Rogers's Humanistic Client-Centered Therapy asserts that psychological healing and self-actualization occur when the therapist creates a growth-promoting therapeutic climate characterized by which three essential conditions?",
            "options": [
              "Electrodermal biofeedback and strict diet regimentation.",
              "Hypnosis, dream interpretation, and free association.",
              "Systematic punishment of irrational cognitive beliefs.",
              "Genuineness (authenticity/congruence), Unconditional Positive Regard (total nonjudgmental acceptance), and Empathic Understanding."
            ],
            "correctIndex": 3,
            "explanation": "Rogers believed humans possess an innate drive toward self-actualization. When a therapist provides genuine warmth, active listening, and unconditional positive regard, the client feels safe to drop defenses and reconcile their real self with their ideal self.",
            "distractorTip": "In humanistic therapy, the therapist uses 'active listening' (reflecting feelings without giving advice), treating the client as the ultimate expert on their own life."
          },
          {
            "id": "psych5-l8-q3",
            "stem": "Aaron Beck's cognitive therapy for depression focuses on identifying and restructuring which pathological cognitive pattern?",
            "options": [
              "Unconscious Oedipal conflicts repressed in the id.",
              "The Negative Cognitive Triad (automatic negative beliefs about oneself, the world, and the future).",
              "Underactive mirror neurons in the parietal lobe.",
              "Classical conditioned fear responses to environmental triggers."
            ],
            "correctIndex": 1,
            "explanation": "Aaron Beck proposed that depression results from cognitive distortions known as the Negative Cognitive Triad: irrational negative evaluations of (1) the self ('I am worthless'), (2) the world ('Life is unfair'), and (3) the future ('Things will never get better').",
            "distractorTip": "Beck's Cognitive Triad = Negative thoughts about Self, World, Future."
          }
        ]
      }
    ]
  }
];
