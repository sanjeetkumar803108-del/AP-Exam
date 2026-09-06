import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Radar,
  Target,
  ShieldAlert,
  Zap,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  BookOpen,
  Scan,
  Send,
  Camera,
  Layers,
  Award,
  Flame,
  Info,
  ExternalLink,
  Lock,
  Bookmark,
  BookmarkCheck,
  Check,
  X
} from 'lucide-react';
import { triggerVibration } from '../utils/vibrate';
import { showToast } from '../utils/toast';
import { getApiUrl } from '../utils/api';
import { TOP_10_AP_SUBJECTS, APSubject } from '../utils/apCurriculum';
import GlobalMarkdown from './GlobalMarkdown';
import { safeGetItem, safeSetItem, safeJsonParse } from '../utils/storage';

export interface TrapInfo {
  option: string;
  text?: string;
  isCorrect: boolean;
  trapType: string;
  trapDescription: string;
  collegeBoardMindset: string;
  vulnerabilityRate?: string;
}

export interface TrapQuestion {
  id: number | string;
  prompt: string;
  stimulus?: string;
  options: string[];
  correctAnswer: string;
  overallTrapDifficulty?: string;
  traps: TrapInfo[];
  disarmStrategy: string;
  skill?: string;
}

const TRAP_ARCHETYPES = [
  {
    id: 'reverse-logic',
    icon: '🔄',
    title: 'The Reverse Logic / Sign Flip Trap',
    frequency: 'Very High (40% of Math/Science MCQs)',
    dangerLevel: 'Brutal',
    description: 'The student executes the entire concept correctly, but inverts the sign (- vs +), takes the reciprocal (e.g. 1/2 vs 2), or flips the cause-and-effect direction.',
    example: 'In AP Physics/Calc: Calculating acceleration instead of deceleration, or forgetting that work done BY the system has an opposite sign.',
    disarmRule: 'Always circle the question prompt’s TARGET direction before solving. Check if the question asks for loss vs gain or rate of decrease.'
  },
  {
    id: 'scope-creep',
    icon: '🔭',
    title: 'The Half-Truth / Scope Creep Trap',
    frequency: 'Extremely High (55% of History/Gov/Bio MCQs)',
    dangerLevel: 'Deceptive',
    description: 'The option contains a statement that is 100% historically or scientifically true in the real world, BUT it answers a completely different question or exceeds the provided stimulus.',
    example: 'In APUSH/AP Gov: A statement praising the New Deal that happened in 1933, when the prompt asked about Progressive Era reforms (1900-1917).',
    disarmRule: 'Ask yourself: "Even if this is true, does the stimulus text directly prove it?" If it requires outside assumptions not in the text, cross it out.'
  },
  {
    id: 'chronology-anachronism',
    icon: '⏳',
    title: 'The Chronological / Sequence Trap',
    frequency: 'High (35% of Humanities & Genetics)',
    dangerLevel: 'Subtle',
    description: 'Pairs cause-and-effect in reverse chronological order, or swaps key historical treaties/phases that happened just before or after.',
    example: 'In AP World: Claiming the Columbian Exchange led to the Black Death (which happened 150 years prior).',
    disarmRule: 'Pin the prompt to a decade/era landmark. Eliminate any option referencing technology, treaties, or models not yet conceived.'
  },
  {
    id: 'extreme-qualifier',
    icon: '⚠️',
    title: 'The Absolute Qualifier Trap',
    frequency: 'High (30% of All AP MCQs)',
    dangerLevel: 'High',
    description: 'Uses absolute words like "always", "never", "solely", "completely", "invariably" to make an otherwise reasonable claim scientifically or historically indefensible.',
    example: 'In AP Biology: "Enzyme activity is completely halted at all temperatures below 37°C."',
    disarmRule: 'Red-flag absolute words ("all", "never", "only"). College Board favors nuanced, qualified words like "typically", "tends to", "facilitates".'
  },
  {
    id: 'pseudo-vocabulary',
    icon: '🧩',
    title: 'The Jargon Salad / Buzzword Trap',
    frequency: 'Moderate (25% of Bio/Psych/CSP)',
    dangerLevel: 'Deceptive',
    description: 'Strings together authentic, impressive unit keywords into a mechanism that does not exist in nature or logic. Catches students guessing based on familiar buzzwords.',
    example: 'In AP Psychology: "Negative reinforcement decreases the unconditioned response through retro-active interference."',
    disarmRule: 'Define every noun and verb in the sentence. If the mechanism sounds complicated but makes no mechanical sense, it was manufactured to bait guessers.'
  },
  {
    id: 'intermediate-stop',
    icon: '🛑',
    title: 'The Premature Calculation Stop Trap',
    frequency: 'High (35% of Calc/Chem/Physics)',
    dangerLevel: 'Brutal',
    description: 'Calculates an intermediate step (e.g. finding the radius $r$, finding moles $n$, or derivative $f\'(x)$) and lists it as an option, when the prompt asked for area, molarity, or critical points.',
    example: 'In AP Calculus: Finding where $f\'(x) = 0$ is $x = 2$, but the question asked for the absolute maximum value $f(2)$, not the $x$-coordinate.',
    disarmRule: 'Underline the FINAL UNIT or quantity requested before looking at options. When you finish a math problem, re-read the last sentence of the stem.'
  }
];

interface APTrapRadarProps {
  onBack: () => void;
  isVip?: boolean;
}

export default function APTrapRadar({ onBack, isVip = false }: APTrapRadarProps) {
  const [activeTab, setActiveTab] = useState<'challenge' | 'scan' | 'archetypes' | 'vault'>('challenge');

  // Challenge Mode State
  const [selectedSubject, setSelectedSubject] = useState<APSubject>(TOP_10_AP_SUBJECTS[0]);
  const [selectedUnit, setSelectedUnit] = useState<string>('All Units');
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<TrapQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isRadarRevealed, setIsRadarRevealed] = useState(false);
  const [isScanningAnimation, setIsScanningAnimation] = useState(false);

  // Custom Scan Mode State
  const [customQuestionText, setCustomQuestionText] = useState('');
  const [scanLoading, setScanLoading] = useState(false);
  const [scannedResult, setScannedResult] = useState<any | null>(null);

  // Trap Vault State
  const [vault, setVault] = useState<TrapQuestion[]>(() => {
    return safeJsonParse<TrapQuestion[]>(safeGetItem('ap_trap_radar_vault'), []);
  });

  // Score Tracking for current session
  const [sessionStats, setSessionStats] = useState({
    trapsAvoided: 0,
    trapsFallen: 0
  });

  const activeQuestion = questions[currentIndex] || null;

  // Fetch Challenge Questions
  const handleStartChallenge = async () => {
    triggerVibration(15);
    setLoading(true);
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsRadarRevealed(false);

    try {
      const response = await fetch(getApiUrl('/api/ap-trap-radar'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate_challenge',
          subject: selectedSubject.name,
          unit: selectedUnit,
          count: 5
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      if (data.questions && data.questions.length > 0) {
        setQuestions(data.questions);
      } else {
        throw new Error('No trap questions received');
      }
    } catch (err: any) {
      console.error('[APTrapRadar] Error fetching challenge:', err);
      showToast('Could not load Trap Challenge. Please retry.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Handle Option Selection
  const handleSelectOption = (opt: string) => {
    if (isRadarRevealed) return;
    triggerVibration(10);
    setSelectedOption(opt);
  };

  // Activate Radar Sweep & Reveal Traps
  const handleActivateRadar = () => {
    if (!selectedOption || !activeQuestion) {
      showToast('Select an option first to test your Trap Radar!', 'warning');
      return;
    }

    triggerVibration(30);
    setIsScanningAnimation(true);

    // Play high-tech radar sweep for 800ms then reveal
    setTimeout(() => {
      setIsScanningAnimation(false);
      setIsRadarRevealed(true);

      const isCorrect = selectedOption.trim().startsWith(activeQuestion.correctAnswer.charAt(0)) || 
                        selectedOption === activeQuestion.correctAnswer;

      if (isCorrect) {
        triggerVibration([20, 50, 20]);
        setSessionStats(prev => ({ ...prev, trapsAvoided: prev.trapsAvoided + 1 }));
      } else {
        triggerVibration(60);
        setSessionStats(prev => ({ ...prev, trapsFallen: prev.trapsFallen + 1 }));
        // Automatically offer to bookmark in vault
        saveToVault(activeQuestion);
      }
    }, 700);
  };

  // Save to Vault
  const saveToVault = (q: TrapQuestion) => {
    setVault(prev => {
      if (prev.some(item => item.id === q.id || item.prompt === q.prompt)) return prev;
      const updated = [q, ...prev];
      safeSetItem('ap_trap_radar_vault', JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromVault = (qId: number | string) => {
    setVault(prev => {
      const updated = prev.filter(item => item.id !== qId);
      safeSetItem('ap_trap_radar_vault', JSON.stringify(updated));
      return updated;
    });
    showToast('Removed from Trap Vault', 'info');
  };

  // Custom Question Scan
  const handleScanCustomQuestion = async () => {
    if (!customQuestionText.trim()) {
      showToast('Please paste a question and options first!', 'warning');
      return;
    }

    triggerVibration(20);
    setScanLoading(true);
    setScannedResult(null);

    try {
      const response = await fetch(getApiUrl('/api/ap-trap-radar'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'analyze_custom',
          customQuestion: customQuestionText
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      if (data.analysis) {
        setScannedResult(data.analysis);
        triggerVibration(40);
        showToast('Trap Radar Autopsy Complete!', 'success');
      } else {
        throw new Error('Invalid analysis format');
      }
    } catch (err: any) {
      console.error('[APTrapRadar] Custom scan error:', err);
      showToast('Failed to analyze question. Please check input.', 'error');
    } finally {
      setScanLoading(false);
    }
  };

  const avoidanceRate = (sessionStats.trapsAvoided + sessionStats.trapsFallen) > 0
    ? Math.round((sessionStats.trapsAvoided / (sessionStats.trapsAvoided + sessionStats.trapsFallen)) * 100)
    : 100;

  return (
    <div className="h-full flex flex-col bg-zinc-950 text-zinc-100 relative overflow-hidden font-sans select-none">
      {/* Background Radar Grid Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/15 blur-[120px]" />
      </div>

      {/* Top Header */}
      <header className="px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              triggerVibration(10);
              onBack();
            }}
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/60 active:scale-95 transition-all cursor-pointer"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
              <Radar className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-black tracking-tight text-white flex items-center gap-1.5">
                  AP Trap Radar™
                </h1>
                <span className="text-[9px] font-black uppercase tracking-wider bg-amber-500/20 border border-amber-500/40 text-amber-400 px-1.5 py-0.5 rounded">
                  Score 5 Weapon
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-medium">
                College Board Distractor & Trap Disarmer
              </p>
            </div>
          </div>
        </div>

        {/* Live Avoidance Meter */}
        {(sessionStats.trapsAvoided > 0 || sessionStats.trapsFallen > 0) && (
          <div className="hidden sm:flex items-center gap-2 bg-zinc-800/80 border border-zinc-700/60 px-3 py-1 rounded-xl">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <div className="text-right">
              <span className="text-[10px] text-zinc-400 font-bold block uppercase tracking-wider">Trap Avoidance</span>
              <span className={`text-xs font-black ${avoidanceRate >= 80 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {avoidanceRate}% ({sessionStats.trapsAvoided}/{sessionStats.trapsAvoided + sessionStats.trapsFallen})
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 border-b border-zinc-800/60 bg-zinc-900/50 backdrop-blur-xs overflow-x-auto no-scrollbar gap-2">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              triggerVibration(10);
              setActiveTab('challenge');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'challenge'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Trap Challenge</span>
          </button>

          <button
            onClick={() => {
              triggerVibration(10);
              setActiveTab('scan');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'scan'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            <Scan className="w-3.5 h-3.5" />
            <span>Scan Question</span>
          </button>

          <button
            onClick={() => {
              triggerVibration(10);
              setActiveTab('archetypes');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'archetypes'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Trap Taxonomy</span>
          </button>

          <button
            onClick={() => {
              triggerVibration(10);
              setActiveTab('vault');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'vault'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>My Trap Vault</span>
            {vault.length > 0 && (
              <span className="text-[10px] bg-purple-500/30 text-purple-200 px-1.5 rounded-full font-black">
                {vault.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 max-w-4xl w-full mx-auto pb-24">
        {/* ========================================================================= */}
        {/* TAB 1: TRAP BUSTER CHALLENGE */}
        {/* ========================================================================= */}
        {activeTab === 'challenge' && (
          <div className="space-y-6">
            {/* Subject / Unit Selector Toolbar */}
            {questions.length === 0 && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-5 sm:p-7 shadow-xl relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl shrink-0">
                    🪤
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                      Deploy College Board Trap Radar
                    </h2>
                    <p className="text-xs text-zinc-400">
                      Generate authentic AP exam MCQs engineered with realistic distractor traps.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Target AP Subject
                    </label>
                    <select
                      value={selectedSubject.id}
                      onChange={(e) => {
                        const found = TOP_10_AP_SUBJECTS.find(s => s.id === e.target.value);
                        if (found) {
                          setSelectedSubject(found);
                          setSelectedUnit('All Units');
                        }
                      }}
                      className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs font-bold text-white focus:border-amber-500 focus:outline-none transition-colors"
                    >
                      {TOP_10_AP_SUBJECTS.map(subj => (
                        <option key={subj.id} value={subj.id}>
                          {subj.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Specific CED Unit
                    </label>
                    <select
                      value={selectedUnit}
                      onChange={(e) => setSelectedUnit(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs font-bold text-white focus:border-amber-500 focus:outline-none transition-colors"
                    >
                      <option value="All Units">All High-Yield Units (Exam Simulation)</option>
                      {selectedSubject.units.map(u => (
                        <option key={u.id} value={u.title}>
                          {u.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Radar Highlights Callout */}
                <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 mb-6 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <Zap className="w-4 h-4" />
                    <span>How Trap Radar Works on Real AP Exams:</span>
                  </div>
                  <ul className="text-xs text-zinc-400 space-y-1.5 pl-6 list-disc">
                    <li>Tests are intentionally loaded with <strong>sign flips, timeline traps, and half-truths</strong>.</li>
                    <li>You will pick an answer, and the Radar will reveal the exact <strong>psychological trap</strong> behind every wrong option.</li>
                    <li>Includes College Board Examiner Disarm secrets to save up to <strong>15 minutes</strong> on exam day.</li>
                  </ul>
                </div>

                <button
                  onClick={handleStartChallenge}
                  disabled={loading}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-emerald-600 to-teal-600 hover:opacity-95 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-98 transition-all cursor-pointer"
                >
                  <Radar className="w-4 h-4" />
                  <span>Launch Trap Radar Challenge (5 MCQs)</span>
                </button>
              </motion.div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-2 border-amber-500/20 animate-ping" />
                  <div className="absolute inset-2 rounded-full border-2 border-emerald-500/40 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center text-2xl">
                    📡
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-black text-white">
                    Synthesizing College Board Trap MCQs...
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                    Engineering deceptive distractors, calculation slips, and psychometric traps for {selectedSubject.name}.
                  </p>
                </div>
              </div>
            )}

            {/* Active Challenge Question */}
            {questions.length > 0 && activeQuestion && (
              <div className="space-y-4">
                {/* Progress / Navigation Header */}
                <div className="flex items-center justify-between bg-zinc-900/80 border border-zinc-800 rounded-2xl px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-amber-400">
                      Question {currentIndex + 1} of {questions.length}
                    </span>
                    {activeQuestion.overallTrapDifficulty && (
                      <span className="text-[10px] bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 rounded font-bold">
                        {activeQuestion.overallTrapDifficulty}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        if (currentIndex > 0) {
                          setCurrentIndex(prev => prev - 1);
                          setSelectedOption(null);
                          setIsRadarRevealed(false);
                        }
                      }}
                      disabled={currentIndex === 0}
                      className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (currentIndex < questions.length - 1) {
                          setCurrentIndex(prev => prev + 1);
                          setSelectedOption(null);
                          setIsRadarRevealed(false);
                        }
                      }}
                      disabled={currentIndex === questions.length - 1}
                      className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => saveToVault(activeQuestion)}
                      className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-amber-400 cursor-pointer ml-1"
                      title="Bookmark to Trap Vault"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Stimulus & Prompt Card */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-4">
                  {/* Skill Badge */}
                  {activeQuestion.skill && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-[10px] font-bold text-zinc-300">
                      <Target className="w-3 h-3 text-amber-400" />
                      <span>{activeQuestion.skill}</span>
                    </div>
                  )}

                  {/* Stimulus Context Box */}
                  {activeQuestion.stimulus && activeQuestion.stimulus.trim().length > 0 && (
                    <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto">
                      <GlobalMarkdown>{activeQuestion.stimulus}</GlobalMarkdown>
                    </div>
                  )}

                  {/* Question Stem */}
                  <div className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    <GlobalMarkdown>{activeQuestion.prompt}</GlobalMarkdown>
                  </div>

                  {/* Radar Scanning Line Animation (When button clicked) */}
                  <AnimatePresence>
                    {isScanningAnimation && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative h-2 bg-zinc-950 rounded-full overflow-hidden"
                      >
                        <motion.div
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                          className="h-full w-1/3 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-lg shadow-amber-400"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Options List */}
                  <div className="space-y-2.5 pt-2">
                    {activeQuestion.options.map((optionText, idx) => {
                      const letter = optionText.trim().charAt(0).toUpperCase();
                      const isSelected = selectedOption === optionText;
                      const trapInfo = activeQuestion.traps?.find(t => t.option === letter);
                      const isCorrect = trapInfo ? trapInfo.isCorrect : optionText === activeQuestion.correctAnswer;

                      let borderColor = 'border-zinc-800';
                      let bgColor = 'bg-zinc-950/60 hover:bg-zinc-800/50';

                      if (isSelected && !isRadarRevealed) {
                        borderColor = 'border-amber-500';
                        bgColor = 'bg-amber-500/10';
                      }

                      if (isRadarRevealed) {
                        if (isCorrect) {
                          borderColor = 'border-emerald-500/80';
                          bgColor = 'bg-emerald-950/40';
                        } else if (isSelected && !isCorrect) {
                          borderColor = 'border-red-500/80';
                          bgColor = 'bg-red-950/40';
                        } else {
                          borderColor = 'border-zinc-800/80';
                          bgColor = 'bg-zinc-950/40 opacity-75';
                        }
                      }

                      return (
                        <div
                          key={idx}
                          onClick={() => handleSelectOption(optionText)}
                          className={`p-4 rounded-2xl border ${borderColor} ${bgColor} transition-all cursor-pointer relative overflow-hidden`}
                        >
                          <div className="flex items-start gap-3">
                            <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                              isRadarRevealed
                                ? isCorrect
                                  ? 'bg-emerald-500 text-white'
                                  : isSelected
                                    ? 'bg-red-500 text-white'
                                    : 'bg-zinc-800 text-zinc-400'
                                : isSelected
                                  ? 'bg-amber-500 text-white'
                                  : 'bg-zinc-800 text-zinc-400'
                            }`}>
                              {letter}
                            </span>

                            <div className="flex-1 text-xs sm:text-sm font-medium text-zinc-200">
                              <GlobalMarkdown>{optionText}</GlobalMarkdown>
                            </div>

                            {/* Result Indicator Icon */}
                            {isRadarRevealed && (
                              <div className="shrink-0">
                                {isCorrect ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                ) : isSelected ? (
                                  <XCircle className="w-5 h-5 text-red-400" />
                                ) : (
                                  <ShieldAlert className="w-4 h-4 text-amber-400/60" />
                                )}
                              </div>
                            )}
                          </div>

                          {/* REVEALED TRAP AUTOPSY CARD */}
                          {isRadarRevealed && trapInfo && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className={`mt-3 pt-3 border-t text-xs space-y-1.5 ${
                                isCorrect ? 'border-emerald-800/40' : 'border-zinc-800'
                              }`}
                            >
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                                  isCorrect
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                }`}>
                                  {trapInfo.trapType}
                                </span>
                                {trapInfo.vulnerabilityRate && trapInfo.vulnerabilityRate !== 'N/A' && (
                                  <span className="text-[10px] text-zinc-400 font-semibold">
                                    ⚠️ {trapInfo.vulnerabilityRate}
                                  </span>
                                )}
                              </div>

                              <p className="text-zinc-300 text-xs leading-relaxed">
                                {trapInfo.trapDescription}
                              </p>

                              {trapInfo.collegeBoardMindset && (
                                <p className="text-[11px] text-zinc-400 italic">
                                  <strong>College Board Intent:</strong> {trapInfo.collegeBoardMindset}
                                </p>
                              )}
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Actions / Disarm Radar Trigger */}
                  <div className="pt-3 flex items-center justify-between gap-3">
                    {!isRadarRevealed ? (
                      <button
                        onClick={handleActivateRadar}
                        disabled={!selectedOption || isScanningAnimation}
                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-emerald-600 hover:opacity-95 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
                      >
                        <Radar className="w-4 h-4" />
                        <span>Activate Trap Radar & Disarm Options</span>
                      </button>
                    ) : (
                      <div className="w-full space-y-3">
                        {/* 5-Second Disarm Secret Banner */}
                        {activeQuestion.disarmStrategy && (
                          <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-200 text-xs space-y-1">
                            <div className="flex items-center gap-1.5 font-black text-emerald-300">
                              <Zap className="w-4 h-4 text-amber-400" />
                              <span>Examiner's 5-Second Disarm Secret:</span>
                            </div>
                            <p className="leading-relaxed">
                              {activeQuestion.disarmStrategy}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center justify-between gap-3">
                          <button
                            onClick={() => {
                              setSelectedOption(null);
                              setIsRadarRevealed(false);
                            }}
                            className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Retry Question</span>
                          </button>

                          {currentIndex < questions.length - 1 ? (
                            <button
                              onClick={() => {
                                setCurrentIndex(prev => prev + 1);
                                setSelectedOption(null);
                                setIsRadarRevealed(false);
                              }}
                              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                            >
                              <span>Next Trap MCQ</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          ) : (
                            <button
                              onClick={handleStartChallenge}
                              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                            >
                              <RotateCcw className="w-4 h-4" />
                              <span>Generate New Set</span>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: SCAN CUSTOM QUESTION FOR TRAPS */}
        {/* ========================================================================= */}
        {activeTab === 'scan' && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl shrink-0">
                  🔍
                </div>
                <div>
                  <h2 className="text-lg font-black text-white">
                    Scan Any AP Question for Traps
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Paste any tricky question from your AP textbook, school quiz, or homework to run an instant distractor autopsy.
                  </p>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                  Paste Question Stem & Options (A, B, C, D)
                </label>
                <textarea
                  rows={6}
                  value={customQuestionText}
                  onChange={(e) => setCustomQuestionText(e.target.value)}
                  placeholder="Example:&#10;Which of the following best describes the effect of an increase in government spending during a recession?&#10;A) Interest rates fall and investment increases&#10;B) Aggregate demand shifts right and price level rises&#10;C) ..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-xs font-mono text-zinc-200 focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                onClick={handleScanCustomQuestion}
                disabled={scanLoading || !customQuestionText.trim()}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
              >
                {scanLoading ? (
                  <>
                    <Radar className="w-4 h-4 animate-spin" />
                    <span>Disarming Traps via AI Radar...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Run Trap Radar Autopsy</span>
                  </>
                )}
              </button>
            </div>

            {/* Custom Scan Result Card */}
            {scannedResult && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-5"
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                      {scannedResult.detectedSubject || 'AP Exam Standard'}
                    </span>
                    <h3 className="text-sm font-black text-white mt-1">
                      Trap Radar Autopsy Report
                    </h3>
                  </div>
                  {scannedResult.overallTrapDifficulty && (
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                      {scannedResult.overallTrapDifficulty}
                    </span>
                  )}
                </div>

                {/* 5-Second Disarm Secret Banner */}
                {scannedResult.disarmStrategy && (
                  <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs space-y-1">
                    <span className="font-black text-emerald-300 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-400" />
                      Examiner's 5-Second Disarm Secret:
                    </span>
                    <p className="leading-relaxed">{scannedResult.disarmStrategy}</p>
                  </div>
                )}

                {/* Dissected Options */}
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase text-zinc-400 tracking-wider">
                    Option-By-Option Trap Analysis:
                  </h4>
                  {scannedResult.traps?.map((trap: any, i: number) => (
                    <div
                      key={i}
                      className={`p-4 rounded-2xl border text-xs space-y-2 ${
                        trap.isCorrect
                          ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-100'
                          : 'bg-zinc-950/70 border-zinc-800 text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs ${
                            trap.isCorrect ? 'bg-emerald-500 text-white' : 'bg-zinc-800 text-zinc-300'
                          }`}>
                            {trap.option}
                          </span>
                          <span className="font-bold text-xs">
                            {trap.text || `Option ${trap.option}`}
                          </span>
                        </div>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                          trap.isCorrect
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {trap.trapType}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {trap.trapDescription}
                      </p>

                      {trap.collegeBoardMindset && (
                        <p className="text-[11px] text-zinc-400 italic">
                          <strong>College Board Intent:</strong> {trap.collegeBoardMindset}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: TRAP ARCHETYPES TAXONOMY */}
        {/* ========================================================================= */}
        {activeTab === 'archetypes' && (
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-6 mb-2">
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <span>The 6 Official College Board Distractor Archetypes</span>
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                College Board psychometricians use these exact 6 trap blueprints when authoring AP multiple-choice questions. Master these to disarm 90% of exam traps.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {TRAP_ARCHETYPES.map((arch) => (
                <div
                  key={arch.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3 relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{arch.icon}</span>
                      <div>
                        <h3 className="text-sm font-black text-white">
                          {arch.title}
                        </h3>
                        <span className="text-[10px] text-amber-400 font-bold">
                          Frequency: {arch.frequency}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                      {arch.dangerLevel}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {arch.description}
                  </p>

                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400">
                    <strong className="text-zinc-200">Real AP Example:</strong> {arch.example}
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300">
                    <strong className="text-emerald-200">🛡️ Disarm Rule:</strong> {arch.disarmRule}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: MY TRAP VAULT */}
        {/* ========================================================================= */}
        {activeTab === 'vault' && (
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <span>My Trap Vault</span>
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Saved AP questions with traps you previously reviewed or tripped on.
                </p>
              </div>

              {vault.length > 0 && (
                <button
                  onClick={() => {
                    setVault([]);
                    safeSetItem('ap_trap_radar_vault', JSON.stringify([]));
                    showToast('Cleared Trap Vault', 'info');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs font-bold cursor-pointer"
                >
                  Clear All
                </button>
              )}
            </div>

            {vault.length === 0 ? (
              <div className="py-16 text-center space-y-2">
                <div className="text-3xl">🗄️</div>
                <h4 className="text-sm font-black text-white">Your Trap Vault is Empty</h4>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                  When you take a Trap Challenge or scan a question, bookmark tricky questions here to review before May exam day!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {vault.map((q, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-xs font-black text-amber-400">
                        {q.skill || `Saved Question #${idx + 1}`}
                      </span>
                      <button
                        onClick={() => removeFromVault(q.id)}
                        className="text-zinc-500 hover:text-red-400 text-xs font-bold cursor-pointer flex items-center gap-1"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>

                    <div className="text-xs sm:text-sm font-medium text-zinc-200">
                      <GlobalMarkdown>{q.prompt}</GlobalMarkdown>
                    </div>

                    {/* Disarm Rule */}
                    {q.disarmStrategy && (
                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300">
                        <strong>🛡️ Disarm Rule:</strong> {q.disarmStrategy}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
