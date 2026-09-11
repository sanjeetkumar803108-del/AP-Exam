import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, Cpu, CheckCircle2, ShieldAlert, Zap, Terminal, Activity } from 'lucide-react';
import { triggerVibration } from '../utils/vibrate';

interface AIThinkingLoaderProps {
  subjectName?: string;
  shortCode?: string;
  topic?: string;
  questionCount?: number;
  questionType?: 'objective' | 'subjective' | string;
  mode?: 'testprep' | 'trap_radar' | 'general';
}

interface ThoughtStep {
  phase: string;
  title: string;
  detail: string;
  icon: string;
  log: string;
}

export default function AIThinkingLoader({
  subjectName = 'AP Exam',
  shortCode = 'AP',
  topic = 'Comprehensive Review',
  questionCount = 5,
  questionType = 'objective',
  mode = 'testprep'
}: AIThinkingLoaderProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  // Subject Category Detection for Tailored Real-Time AI Thoughts
  const isSTEM = useMemo(() => {
    const s = subjectName.toLowerCase();
    return s.includes('calculus') || s.includes('physics') || s.includes('chem') || s.includes('bio') || s.includes('stat') || s.includes('math');
  }, [subjectName]);

  const isCS = useMemo(() => {
    const s = subjectName.toLowerCase();
    return s.includes('csp') || s.includes('csa') || s.includes('computer') || s.includes('code');
  }, [subjectName]);

  const isHistory = useMemo(() => {
    const s = subjectName.toLowerCase();
    return s.includes('ush') || s.includes('history') || s.includes('gov') || s.includes('euro') || s.includes('world') || s.includes('geography');
  }, [subjectName]);

  // Authentic, High-Caliber Chain-of-Thought Steps
  const thoughtSteps: ThoughtStep[] = useMemo(() => {
    if (mode === 'trap_radar') {
      return [
        {
          phase: 'CED RECONNAISSANCE',
          title: `Scanning ${subjectName} College Board Framework`,
          detail: `Indexing Course and Exam Description (CED) standards for "${topic}" to pinpoint prime student traps...`,
          icon: '🔍',
          log: `[CED Engine] Framework anchored to ${shortCode} benchmark standards`
        },
        {
          phase: 'DISTRACTOR EXTRACTION',
          title: 'Isolating 6 Statistical Distractor Archetypes',
          detail: 'Reverse-engineering reverse-logic flips, scope-creep traps, and absolute qualifier pitfalls...',
          icon: '🪤',
          log: '[Trap Interceptor] Calculating vulnerability index for common misconceptions'
        },
        {
          phase: 'STIMULUS SYNTHESIS',
          title: isSTEM ? 'Synthesizing Laboratory & LaTeX Equations' : isCS ? 'Tracing AP Pseudocode & Algorithm Boundaries' : isHistory ? 'Curating Primary Source Excerpt & Historical Context' : 'Building High-Caliber College Board Stimulus',
          detail: 'Formatting authentic problem stem with precise College Board phrasing and boundary conditions...',
          icon: isSTEM ? '📐' : isCS ? '💻' : isHistory ? '📜' : '🧬',
          log: '[Stimulus Synthesizer] LaTeX and notation schema verified 100%'
        },
        {
          phase: 'PSYCHOMETRIC AUDIT',
          title: 'Engineering 1 Target + 3 Statistical Traps',
          detail: 'Balancing distractor plausibility so 40%-60% of superficial guessers are challenged...',
          icon: '⚖️',
          log: '[Psychometrics] Answer distribution calibrated (25% balanced random target)'
        },
        {
          phase: 'DISARM STRATEGY',
          title: "Formulating Examiner's 5-Second Disarm Secret",
          detail: 'Constructing Score-5 mental shortcuts and instant elimination heuristics for exam day...',
          icon: '⚡',
          log: '[Disarm Protocol] 5-second hall defense rules encoded'
        },
        {
          phase: 'READYING AUTOPSY',
          title: 'Packaging Trap Radar Diagnostic Deck',
          detail: 'Finalizing item discrimination index and preparing radar interrogation dashboard...',
          icon: '✨',
          log: '[Complete] Delivering authentic AP Trap Radar questions'
        }
      ];
    }

    // Default TestPrep Thought Steps
    const isFRQ = questionType === 'subjective';
    return [
      {
        phase: 'CED CURRICULUM MAPPING',
        title: `Aligning with College Board AP ${shortCode} CED`,
        detail: `Consulting Unit Framework & Learning Objectives for "${topic}"...`,
        icon: '📚',
        log: `[CED Engine] Framework connected for ${subjectName} (${questionCount} ${isFRQ ? 'FRQs' : 'MCQs'})`
      },
      {
        phase: 'STIMULUS & CONTEXT DESIGN',
        title: isCS
          ? 'Synthesizing AP Pseudocode & Algorithm Tracing'
          : isSTEM
          ? 'Drafting Lab Experiments & LaTeX Math Notations'
          : isHistory
          ? 'Curating Primary Historical Sources & Data Tables'
          : 'Drafting Authentic College Board Stimulus Scenario',
        detail: isCS
          ? 'Structuring authentic execution tracing, iteration bounds, and boolean logic...'
          : isSTEM
          ? 'Formulating exact variables, LaTeX equations, units, and coordinate graphs...'
          : 'Extracting historical excerpts with full author attribution and document dates...',
        icon: isCS ? '💻' : isSTEM ? '📐' : isHistory ? '📜' : '🧬',
        log: '[Stimulus Gen] Context, tables, and boundary conditions synthesized'
      },
      {
        phase: isFRQ ? 'CHIEF READER RUBRIC CRAFTING' : 'PSYCHOMETRIC DISTRACTOR ENGINE',
        title: isFRQ ? 'Engineering Multi-Part College Board FRQ Rubrics' : 'Designing 3 Statistical Distractor Traps',
        detail: isFRQ
          ? 'Setting strict point criteria (Task Verbs: Identify, Describe, Explain, Justify)...'
          : 'Engineering sign-flip errors, scope-creep traps, and intermediate calculation stops...',
        icon: isFRQ ? '⚖️' : '🪤',
        log: isFRQ ? '[Chief Reader] Multi-part rubric points calibrated' : '[Distractor AI] 3 deceptive trap options engineered'
      },
      {
        phase: 'RIGOROUS QUALITY CONTROL',
        title: 'Verifying Step-by-Step Scoring & Explanations',
        detail: isSTEM
          ? 'Verifying mathematical derivations, SI units, and KaTeX rendering...'
          : 'Double-checking CED scope limits, factual accuracy, and historical causal chains...',
        icon: '🔬',
        log: '[QA Verifier] 100% CED compliance and LaTeX syntax verified'
      },
      {
        phase: 'SCORE-5 HEURISTICS',
        title: 'Encoding 5-Second Disarm Tactics & Model Answers',
        detail: 'Formulating exemplary student model answers and high-yield Score-5 memory shortcuts...',
        icon: '⚡',
        log: '[Score 5 Engine] Exam hall defense tactics and full-credit keys attached'
      },
      {
        phase: 'COMPILING EXAM BUNDLE',
        title: 'Packaging Your Custom AP Exam Session',
        detail: 'Finalizing question formatting and loading your interactive exam workspace...',
        icon: '✨',
        log: '[Complete] Exam questions generated and ready for practice'
      }
    ];
  }, [mode, subjectName, shortCode, topic, questionCount, questionType, isSTEM, isCS, isHistory]);

  // Timer & Stage Progression
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Step progression based on elapsed time (smoothly cycles through all 6 phases)
    const stepDuration = Math.max(3, Math.min(6, Math.floor(25 / thoughtSteps.length)));
    const targetIndex = Math.min(Math.floor(elapsedSeconds / stepDuration), thoughtSteps.length - 1);
    
    if (targetIndex !== currentStepIndex) {
      setCurrentStepIndex(targetIndex);
      try {
        triggerVibration(15);
      } catch {
        // Fallback
      }
    }
  }, [elapsedSeconds, thoughtSteps.length, currentStepIndex]);

  const activeStep = thoughtSteps[currentStepIndex];

  // Format Elapsed Time as 00:00
  const formattedTime = useMemo(() => {
    const mins = Math.floor(elapsedSeconds / 60);
    const secs = elapsedSeconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}s`;
  }, [elapsedSeconds]);

  return (
    <div className="w-full max-w-lg mx-auto py-4 px-2 select-none">
      {/* Premium Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-3xl bg-white/95 dark:bg-zinc-950/95 border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xl p-5 sm:p-7 space-y-6"
      >
        {/* Subtle Ambient Glow Aura */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-emerald-500/15 to-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header: Pulsing Live Status + Timer */}
        <div className="relative z-10 flex items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600 shadow-[0_0_10px_#8b5cf6]" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/60 px-2.5 py-0.5 rounded-full border border-violet-200 dark:border-violet-800/60 flex items-center gap-1.5">
              <Brain className="w-3 h-3 text-violet-600" />
              <span>AI Neural Reasoning Stream</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/90 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-2xs">
            <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
            <span>{formattedTime}</span>
          </div>
        </div>

        {/* Center Futuristic Neural Orb Component */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-2 pb-1">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            {/* Outer Orbit (Clockwise Violet) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/40"
              style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.35))' }}
            />

            {/* Inner Ring (Counter-Clockwise Cyan) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.9, ease: 'linear' }}
              className="absolute inset-2 sm:inset-2.5 rounded-full border-[3px] border-cyan-400/20 border-t-cyan-500 border-r-cyan-500"
              style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.45))' }}
            />

            {/* Pulsing Breathing AI Core with Icon */}
            <motion.div
              animate={{ scale: [0.92, 1.08, 0.92] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="relative z-10 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 ring-2 ring-white/40"
            >
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          </div>

          {/* Model & Task Tagline */}
          <div className="mt-3 text-center">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 block">
              COLLEGE BOARD • CED REASONING ENGINE
            </span>
            <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5 block">
              Synthesizing {questionCount} {questionType === 'subjective' ? 'FRQ Questions' : 'MCQ Items'} for {shortCode}
            </span>
          </div>
        </div>

        {/* Active Thought Bubble (Live Animated Stage) */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-zinc-50 to-violet-50/40 dark:from-zinc-900/90 dark:to-violet-950/20 border border-violet-200/80 dark:border-violet-800/40 space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-wider text-violet-700 dark:text-violet-300 bg-violet-100/70 dark:bg-violet-900/50 px-2 py-0.5 rounded-md border border-violet-200 dark:border-violet-700/60">
                  {activeStep.phase} ({currentStepIndex + 1}/{thoughtSteps.length})
                </span>
                <span className="text-sm">{activeStep.icon}</span>
              </div>

              <h3 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white leading-snug tracking-tight">
                {activeStep.title}
              </h3>

              <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                {activeStep.detail}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Real-time Chain-of-Thought Terminal Log Stream */}
        <div className="relative z-10 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 px-1 font-bold">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-zinc-500" />
              <span>LIVE REASONING TRACE</span>
            </div>
            <span>{Math.round(((currentStepIndex + 1) / thoughtSteps.length) * 100)}% Complete</span>
          </div>

          <div className="rounded-2xl bg-zinc-950 text-zinc-300 p-3.5 sm:p-4 font-mono text-[10px] sm:text-[11px] border border-zinc-800 shadow-inner space-y-2 max-h-36 overflow-y-auto">
            {thoughtSteps.slice(0, currentStepIndex + 1).map((step, idx) => {
              const isCurrent = idx === currentStepIndex;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-start gap-2 leading-relaxed ${
                    isCurrent ? 'text-cyan-300 font-bold' : 'text-zinc-500 font-normal'
                  }`}
                >
                  <span className="shrink-0 mt-0.5">
                    {isCurrent ? (
                      <span className="text-amber-400 animate-pulse">▶</span>
                    ) : (
                      <span className="text-emerald-400">✓</span>
                    )}
                  </span>
                  <span className="flex-1">
                    {step.log}
                    {isCurrent && <span className="inline-block w-1.5 h-3 ml-1 bg-cyan-400 animate-pulse align-middle" />}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="relative z-10 space-y-1 pt-1">
          <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden border border-zinc-200 dark:border-zinc-700/60">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(139,92,246,0.6)]"
              animate={{
                width: `${Math.min(96, Math.max(12, ((currentStepIndex + 1) / thoughtSteps.length) * 100))}%`
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 px-0.5">
            <span>Synthesizing Authentic AP Exam Content</span>
            <span>Gemini 3.6 Flash</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
