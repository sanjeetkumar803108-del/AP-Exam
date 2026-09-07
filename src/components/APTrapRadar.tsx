import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  X,
  Plus,
  Image as ImageIcon,
  History,
  Trash2,
  Clock
} from 'lucide-react';
import { triggerVibration } from '../utils/vibrate';
import { showToast } from '../utils/toast';
import { getApiUrl } from '../utils/api';
import { TOP_10_AP_SUBJECTS, APSubject } from '../utils/apCurriculum';
import GlobalMarkdown from './GlobalMarkdown';
import { safeGetItem, safeSetItem, safeJsonParse } from '../utils/storage';
import { takeNativePhoto, pickNativeFiles } from '../utils/mobilePicker';
import { Capacitor } from '@capacitor/core';

export interface TrapRadarHistoryItem {
  id: string;
  timestamp: number;
  type: 'challenge' | 'scan';
  title: string;
  subtitle: string;
  subjectName?: string;
  trapsAvoided?: number;
  trapsFallen?: number;
  questions?: TrapQuestion[];
  scannedAnalysis?: any;
  customQuestionPrompt?: string;
}

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

interface RealRadarLoadingScreenProps {
  title: string;
  subtitle: string;
  subjectName?: string;
  mode: 'challenge' | 'scan' | 'disarm';
}

function RealRadarLoadingScreen({ title, subtitle, subjectName, mode }: RealRadarLoadingScreenProps) {
  const [hudIndex, setHudIndex] = useState(0);

  const statusTelemetry = useMemo(() => {
    if (mode === 'scan') {
      return [
        'RADAR SWEEP ACTIVE: FREQUENCY 2.45 GHz...',
        'PARSING QUESTION STEM & DISTRACTOR CHOICES...',
        'INTERCEPTING PSYCHOMETRIC TRAP ARCHETYPES...',
        'CROSS-REFERENCING COLLEGE BOARD PITFALL DATABASE...',
        'DECODING EXAMINER 5-SECOND DISARM SECRETS...'
      ];
    }
    if (mode === 'disarm') {
      return [
        'RADAR SWEEP LOCKING ON SELECTED OPTION...',
        'SCANNING FOR RECURRENT DISTRACTOR PATTERNS...',
        'ANALYZING FALSE PREMISES & SIGN-FLIP TRAPS...',
        'CALCULATING OPTION VULNERABILITY MATRIX...',
        'REVEALING EXAMINER AUTOPSY REPORT...'
      ];
    }
    return [
      `DEPLOYING TRAP RADAR FOR ${subjectName?.toUpperCase() || 'AP EXAM'}...`,
      'SWEEPING HIGH-YIELD CURRICULUM FOR DISTRACTORS...',
      'INTERCEPTING EXAM-DAY TIME-DRAIN TRAPS...',
      'CALIBRATING 5-SECOND EXAMINER DISARM TACTICS...',
      'SYNTHESIZING COLLEGE BOARD TRAP MCQs...'
    ];
  }, [mode, subjectName]);

  // Audio & Haptic Ping simulation
  useEffect(() => {
    const playPing = () => {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } catch {
        // Fallback silently if audio context is blocked
      }
      try {
        triggerVibration(10);
      } catch {
        // Safe vibration fallback
      }
    };

    playPing();
    const interval = setInterval(() => {
      setHudIndex((prev) => (prev + 1) % statusTelemetry.length);
      playPing();
    }, 1500);

    return () => clearInterval(interval);
  }, [statusTelemetry.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[120] bg-[#050807]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 select-none overflow-hidden"
    >
      {/* High-tech Military Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px), linear-gradient(to right, rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px, 28px 28px, 28px 28px'
        }}
      />

      {/* Cockpit Status Header */}
      <div className="relative z-10 text-center mb-5 sm:mb-7 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.25)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>AP RADAR SYSTEM • 360° LIVE SCOPE ACTIVE</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
          {title}
        </h2>
        <p className="text-xs text-emerald-300/80 font-mono max-w-sm sm:max-w-md mx-auto">
          {subtitle}
        </p>
      </div>

      {/* ======================================================= */}
      {/* CIRCULAR REAL RADAR SCOPE SCREEN WITH 360° SWEEP        */}
      {/* ======================================================= */}
      <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-emerald-500/60 flex items-center justify-center overflow-hidden bg-radial from-emerald-950/90 via-[#061811] to-[#020a06] shadow-[0_0_65px_rgba(16,185,129,0.4)] ring-4 ring-emerald-500/20">
        
        {/* Cardinal Azimuth Degrees */}
        <span className="absolute top-2 text-[9px] font-mono font-bold text-emerald-400/90 tracking-wider">000° N</span>
        <span className="absolute bottom-2 text-[9px] font-mono font-bold text-emerald-400/90 tracking-wider">180° S</span>
        <span className="absolute left-2 text-[9px] font-mono font-bold text-emerald-400/90 tracking-wider">270° W</span>
        <span className="absolute right-2 text-[9px] font-mono font-bold text-emerald-400/90 tracking-wider">090° E</span>

        {/* Concentric Distance Rings */}
        <div className="absolute inset-4 rounded-full border border-emerald-500/25 pointer-events-none" />
        <div className="absolute inset-12 sm:inset-16 rounded-full border border-emerald-500/25 border-dashed pointer-events-none" />
        <div className="absolute inset-20 sm:inset-28 rounded-full border border-emerald-500/20 pointer-events-none" />
        <div className="absolute inset-28 sm:inset-40 rounded-full border border-emerald-500/15 pointer-events-none" />

        {/* 4-Quadrant Crosshairs */}
        <div className="absolute w-full h-[1px] bg-emerald-500/35 pointer-events-none" />
        <div className="absolute h-full w-[1px] bg-emerald-500/35 pointer-events-none" />
        {/* Diagonal Crosshair Guidelines */}
        <div className="absolute w-full h-[1px] bg-emerald-500/15 rotate-45 pointer-events-none" />
        <div className="absolute w-full h-[1px] bg-emerald-500/15 -rotate-45 pointer-events-none" />

        {/* ======================================================= */}
        {/* REAL 360° CONTINUOUS ROTATING RADAR SWEEP BEAM          */}
        {/* ======================================================= */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 2.4 }}
          className="absolute inset-0 rounded-full pointer-events-none origin-center"
          style={{
            background: 'conic-gradient(from 0deg, rgba(16, 185, 129, 0.6) 0deg, rgba(16, 185, 129, 0.25) 35deg, rgba(16, 185, 129, 0.08) 60deg, transparent 80deg, transparent 360deg)'
          }}
        >
          {/* Bright Glowing Leading Sweep Line */}
          <div className="absolute top-0 left-1/2 w-[1.5px] h-1/2 bg-gradient-to-t from-emerald-100 via-white to-emerald-300 shadow-[0_0_15px_#34d399]" />
        </motion.div>

        {/* ======================================================= */}
        {/* PINGING TRAP TARGETS (BLIPS) ON RADAR                   */}
        {/* ======================================================= */}
        {/* Blip 1: Top-Right (Distractor) */}
        <div className="absolute top-[22%] right-[24%] pointer-events-none flex flex-col items-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 shadow-[0_0_12px_#f59e0b]" />
          </span>
          <span className="text-[7.5px] font-mono font-bold text-amber-300 bg-black/85 px-1 py-0.2 rounded mt-1 border border-amber-500/40">
            TRAP: SIGN-FLIP
          </span>
        </div>

        {/* Blip 2: Bottom-Left (Premature Stop) */}
        <div className="absolute bottom-[24%] left-[22%] pointer-events-none flex flex-col items-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-600 shadow-[0_0_12px_#f43f5e]" />
          </span>
          <span className="text-[7.5px] font-mono font-bold text-rose-300 bg-black/85 px-1 py-0.2 rounded mt-1 border border-rose-500/40">
            DISTRACTOR LOCK
          </span>
        </div>

        {/* Blip 3: Top-Left (Half-Truth) */}
        <div className="absolute top-[32%] left-[25%] pointer-events-none flex flex-col items-center">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_12px_#10b981]" />
          </span>
          <span className="text-[7px] font-mono font-bold text-emerald-300 bg-black/85 px-1 py-0.2 rounded mt-1 border border-emerald-500/40">
            DISARM KEY
          </span>
        </div>

        {/* Radar Origin Center Emitter */}
        <div className="relative z-10 w-4 h-4 rounded-full bg-emerald-400 flex items-center justify-center shadow-[0_0_20px_#10b981]">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </div>
      </div>

      {/* Telemetry Status Console */}
      <div className="relative z-10 mt-6 sm:mt-8 w-full max-w-sm text-center space-y-3">
        <div className="bg-emerald-950/50 border border-emerald-500/35 rounded-2xl p-3 shadow-inner">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-emerald-400 tracking-wider">
            <Radar className="w-4 h-4 animate-spin text-emerald-400" />
            <span className="animate-pulse">{statusTelemetry[hudIndex]}</span>
          </div>
        </div>

        {/* Glowing Progress Track */}
        <div className="w-full bg-zinc-900/90 rounded-full h-1.5 overflow-hidden border border-emerald-500/20">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1/2 h-full bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-500 shadow-[0_0_12px_#10b981]"
          />
        </div>

        <p className="text-[10px] font-mono text-zinc-500">
          Powered by College Board Psychometric Trap Disarmer Engine
        </p>
      </div>
    </motion.div>
  );
}

interface APTrapRadarProps {
  onBack: () => void;
  isVip?: boolean;
}

export default function APTrapRadar({ onBack, isVip = false }: APTrapRadarProps) {
  const [activeTab, setActiveTab] = useState<'challenge' | 'scan' | 'archetypes' | 'vault'>('challenge');

  // Challenge Mode State
  const [challengeStep, setChallengeStep] = useState<'select' | 'configure' | 'active'>('select');
  const [questionCount, setQuestionCount] = useState<number>(5);
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
  const [attachedImages, setAttachedImages] = useState<string[]>([]);
  const [showPlusMenu, setShowPlusMenu] = useState<boolean>(false);
  const [scanInputError, setScanInputError] = useState<string | null>(null);
  const [scanLoading, setScanLoading] = useState(false);
  const [scannedResult, setScannedResult] = useState<any | null>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  // Trap Vault State
  const [vault, setVault] = useState<TrapQuestion[]>(() => {
    return safeJsonParse<TrapQuestion[]>(safeGetItem('ap_trap_radar_vault'), []);
  });

  // Score Tracking for current session
  const [sessionStats, setSessionStats] = useState({
    trapsAvoided: 0,
    trapsFallen: 0
  });

  // Trap Radar History State
  const [radarHistory, setRadarHistory] = useState<TrapRadarHistoryItem[]>(() => {
    return safeJsonParse<TrapRadarHistoryItem[]>(safeGetItem('ap_trap_radar_history'), []);
  });
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);
  const [historyFilter, setHistoryFilter] = useState<'all' | 'challenge' | 'scan'>('all');

  const filteredHistory = useMemo(() => {
    if (historyFilter === 'all') return radarHistory;
    return radarHistory.filter(h => h.type === historyFilter);
  }, [radarHistory, historyFilter]);

  const saveToHistory = (item: TrapRadarHistoryItem) => {
    setRadarHistory(prev => {
      const updated = [item, ...prev.filter(h => h.id !== item.id)].slice(0, 50);
      safeSetItem('ap_trap_radar_history', JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromHistory = (id: string) => {
    triggerVibration(10);
    setRadarHistory(prev => {
      const updated = prev.filter(h => h.id !== id);
      safeSetItem('ap_trap_radar_history', JSON.stringify(updated));
      return updated;
    });
    showToast('Removed from history', 'info');
  };

  const clearAllHistory = () => {
    triggerVibration(15);
    setRadarHistory([]);
    safeSetItem('ap_trap_radar_history', JSON.stringify([]));
    showToast('Radar history cleared', 'info');
  };

  const restoreHistoryItem = (item: TrapRadarHistoryItem) => {
    triggerVibration(15);
    setShowHistoryModal(false);
    if (item.type === 'challenge' && item.questions && item.questions.length > 0) {
      setQuestions(item.questions);
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsRadarRevealed(false);
      setChallengeStep('active');
      setActiveTab('challenge');
      showToast(`Loaded ${item.title}`, 'success');
    } else if (item.type === 'scan' && item.scannedAnalysis) {
      setScannedResult(item.scannedAnalysis);
      if (item.customQuestionPrompt) {
        setCustomQuestionText(item.customQuestionPrompt);
      }
      setActiveTab('scan');
      showToast('Loaded scanned question autopsy', 'success');
    }
  };

  const activeQuestion = questions[currentIndex] || null;

  // Image Picker Helpers
  const handleNativeImagePicked = (picked: { dataUrl: string; name?: string }) => {
    if (!picked?.dataUrl) return;
    setAttachedImages(prev => [...prev, picked.dataUrl]);
    setScanInputError(null);
    showToast('Image attached! Ready to scan with Trap Radar.', 'success');
  };

  const handleCameraClick = async () => {
    setShowPlusMenu(false);
    triggerVibration(10);
    if (Capacitor.isNativePlatform()) {
      try {
        const picked = await takeNativePhoto();
        if (picked) handleNativeImagePicked(picked);
      } catch (err: any) {
        console.warn('[APTrapRadar] Camera error:', err);
        cameraInputRef.current?.click();
      }
    } else {
      cameraInputRef.current?.click();
    }
  };

  const handleGalleryClick = async () => {
    setShowPlusMenu(false);
    triggerVibration(10);
    if (Capacitor.isNativePlatform()) {
      try {
        const picked = await pickNativeFiles({ types: 'image', multiple: true });
        if (picked && picked.length > 0) {
          picked.forEach(p => handleNativeImagePicked(p));
        }
      } catch (err: any) {
        console.warn('[APTrapRadar] Gallery error:', err);
        galleryInputRef.current?.click();
      }
    } else {
      galleryInputRef.current?.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          handleNativeImagePicked({ dataUrl: reader.result, name: file.name });
        }
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  };

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
          count: questionCount
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      if (data.questions && data.questions.length > 0) {
        setQuestions(data.questions);
        setChallengeStep('active');
        saveToHistory({
          id: `challenge_${Date.now()}`,
          timestamp: Date.now(),
          type: 'challenge',
          title: `Trap Challenge: ${selectedSubject.name}`,
          subtitle: `${selectedUnit} • ${data.questions.length} Questions`,
          subjectName: selectedSubject.name,
          questions: data.questions
        });
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

    // Play high-tech radar sweep for 1600ms then reveal
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
    }, 1600);
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
    setScanInputError(null);
    const trimmed = customQuestionText.trim();

    if (!trimmed && attachedImages.length === 0) {
      setScanInputError('Please paste an AP question or upload an image first.');
      showToast('Please paste a question or attach an image!', 'warning');
      return;
    }

    // Input sanity check for greetings / non-questions when no image is uploaded
    const isGreeting = /^(hi|hello|hey|yo|hola|namaste|test|testing|sup|ok|okay|asdf|asdfgh)[\s!.]*$/i.test(trimmed);
    if (attachedImages.length === 0 && (trimmed.length < 15 || isGreeting)) {
      triggerVibration(50);
      setScanInputError(`Input "${trimmed}" is not a valid AP question. Please enter an actual AP exam question stem, stimulus, or choices (A, B, C, D) so the Trap Radar can dissect the distractors.`);
      showToast('Please enter an actual AP question stem to scan!', 'warning');
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
          customQuestion: trimmed,
          images: attachedImages
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      if (data.analysis) {
        if (data.analysis.isInvalidQuestion) {
          triggerVibration(50);
          setScanInputError(data.analysis.errorMessage || 'Invalid Question: Please provide a complete AP question prompt or options.');
          showToast('Input is not a valid AP question', 'warning');
        } else {
          setScannedResult(data.analysis);
          triggerVibration(40);
          showToast('Trap Radar Autopsy Complete!', 'success');
          saveToHistory({
            id: `scan_${Date.now()}`,
            timestamp: Date.now(),
            type: 'scan',
            title: data.analysis.detectedSubject ? `Scan: ${data.analysis.detectedSubject}` : 'Scanned AP Question',
            subtitle: trimmed ? (trimmed.length > 75 ? trimmed.slice(0, 75) + '...' : trimmed) : 'Photo / Diagram Scan',
            subjectName: data.analysis.detectedSubject || 'AP Question',
            scannedAnalysis: data.analysis,
            customQuestionPrompt: trimmed
          });
        }
      } else {
        throw new Error('Invalid analysis format');
      }
    } catch (err: any) {
      console.error('[APTrapRadar] Custom scan error:', err);
      setScanInputError('Failed to analyze question. Please check input.');
      showToast('Failed to analyze question. Please check input.', 'error');
    } finally {
      setScanLoading(false);
    }
  };

  const avoidanceRate = (sessionStats.trapsAvoided + sessionStats.trapsFallen) > 0
    ? Math.round((sessionStats.trapsAvoided / (sessionStats.trapsAvoided + sessionStats.trapsFallen)) * 100)
    : 100;

  return (
    <div className="min-h-full flex flex-col bg-white text-zinc-900 relative overflow-hidden font-sans select-none">
      {/* Real Circulating Radar Loading Screen (Triggered on Challenge Launch, Scan, or Disarm) */}
      <AnimatePresence>
        {(loading || scanLoading || isScanningAnimation) && (
          <RealRadarLoadingScreen
            title={
              loading
                ? `Synthesizing ${selectedSubject.name} Traps`
                : scanLoading
                ? 'Trap Radar Autopsy Initialized'
                : 'Disarming Selected Option'
            }
            subtitle={
              loading
                ? 'Generating College Board distractor traps, sign-flips & examiner disarm rules...'
                : scanLoading
                ? 'Disarming question options & cross-referencing trap database...'
                : 'Sweeping for sign-flips, premature stops & distractor traps...'
            }
            subjectName={selectedSubject.name}
            mode={loading ? 'challenge' : scanLoading ? 'scan' : 'disarm'}
          />
        )}
      </AnimatePresence>

      {/* Subtle Background Glow Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-100/50 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-100/40 blur-[100px]" />
      </div>

      {/* Top Header */}
      <header className="px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-zinc-200 bg-white/95 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              triggerVibration(10);
              onBack();
            }}
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-900 border border-zinc-200 active:scale-95 transition-all cursor-pointer shadow-xs"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
              <Radar className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-black tracking-tight text-zinc-900 flex items-center gap-1.5">
                  AP Trap Radar™
                </h1>
                <span className="text-[9px] font-black uppercase tracking-wider bg-amber-100 border border-amber-300 text-amber-800 px-1.5 py-0.5 rounded">
                  Score 5 Weapon
                </span>
              </div>
              <p className="text-[10px] text-zinc-500 font-medium">
                College Board Distractor & Trap Disarmer
              </p>
            </div>
          </div>
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-2">
          {/* Live Avoidance Meter */}
          {(sessionStats.trapsAvoided > 0 || sessionStats.trapsFallen > 0) && (
            <div className="hidden sm:flex items-center gap-2 bg-zinc-50 border border-zinc-200 px-3 py-1 rounded-xl shadow-xs">
              <ShieldAlert className="w-4 h-4 text-emerald-600" />
              <div className="text-right">
                <span className="text-[10px] text-zinc-500 font-bold block uppercase tracking-wider">Trap Avoidance</span>
                <span className={`text-xs font-black ${avoidanceRate >= 80 ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {avoidanceRate}% ({sessionStats.trapsAvoided}/{sessionStats.trapsAvoided + sessionStats.trapsFallen})
                </span>
              </div>
            </div>
          )}

          {/* History Icon Button Only */}
          <button
            onClick={() => {
              triggerVibration(10);
              setShowHistoryModal(true);
            }}
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-900 border border-zinc-200 active:scale-95 transition-all cursor-pointer shadow-xs relative"
            title="Trap Radar History"
            aria-label="Trap Radar History"
          >
            <History className="w-4 h-4 text-zinc-700" />
            {radarHistory.length > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-white ring-1 ring-amber-500/50" />
            )}
          </button>
        </div>
      </header>

      {/* Navigation Sub-Tabs (Organized AP Notes Style) */}
      <div className="bg-[#faf9fa]/95 sm:bg-white/95 backdrop-blur-md border-b border-zinc-200 px-2 sm:px-4 py-2 z-30 shadow-xs">
        <div className="grid grid-cols-4 gap-1 sm:gap-2 max-w-4xl mx-auto w-full">
          {/* TAB 1: CHALLENGE */}
          <button
            onClick={() => {
              triggerVibration(10);
              setActiveTab('challenge');
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 sm:px-2 rounded-xl transition-all cursor-pointer relative ${
              activeTab === 'challenge'
                ? 'text-amber-700 bg-amber-500/15 font-black shadow-xs ring-1 ring-amber-500/30'
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 font-semibold'
            }`}
          >
            <Target className={`w-5 h-5 transition-transform ${activeTab === 'challenge' ? 'scale-110 text-amber-600' : ''}`} />
            <span className="text-[10px] tracking-tight uppercase mt-1 font-bold">
              <span className="hidden sm:inline">Trap </span>Challenge
            </span>
          </button>

          {/* TAB 2: SCAN QUESTION */}
          <button
            onClick={() => {
              triggerVibration(10);
              setActiveTab('scan');
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 sm:px-2 rounded-xl transition-all cursor-pointer relative ${
              activeTab === 'scan'
                ? 'text-emerald-700 bg-emerald-500/15 font-black shadow-xs ring-1 ring-emerald-500/30'
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 font-semibold'
            }`}
          >
            <Scan className={`w-5 h-5 transition-transform ${activeTab === 'scan' ? 'scale-110 text-emerald-600' : ''}`} />
            <span className="text-[10px] tracking-tight uppercase mt-1 font-bold">
              <span className="hidden sm:inline">Scan </span>Question
            </span>
          </button>

          {/* TAB 3: TRAP TAXONOMY */}
          <button
            onClick={() => {
              triggerVibration(10);
              setActiveTab('archetypes');
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 sm:px-2 rounded-xl transition-all cursor-pointer relative ${
              activeTab === 'archetypes'
                ? 'text-sky-700 bg-sky-500/15 font-black shadow-xs ring-1 ring-sky-500/30'
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 font-semibold'
            }`}
          >
            <BookOpen className={`w-5 h-5 transition-transform ${activeTab === 'archetypes' ? 'scale-110 text-sky-600' : ''}`} />
            <span className="text-[10px] tracking-tight uppercase mt-1 font-bold">
              <span className="hidden sm:inline">Trap </span>Taxonomy
            </span>
          </button>

          {/* TAB 4: MY TRAP VAULT */}
          <button
            onClick={() => {
              triggerVibration(10);
              setActiveTab('vault');
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 sm:px-2 rounded-xl transition-all cursor-pointer relative ${
              activeTab === 'vault'
                ? 'text-purple-700 bg-purple-500/15 font-black shadow-xs ring-1 ring-purple-500/30'
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 font-semibold'
            }`}
          >
            <div className="relative">
              <Bookmark className={`w-5 h-5 transition-transform ${activeTab === 'vault' ? 'scale-110 text-purple-600' : ''}`} />
              {vault.length > 0 && (
                <span className="absolute -top-1.5 -right-2.5 text-[9px] bg-purple-600 text-white font-black px-1.5 py-0.2 rounded-full ring-1 ring-white shadow-xs">
                  {vault.length}
                </span>
              )}
            </div>
            <span className="text-[10px] tracking-tight uppercase mt-1 font-bold">
              <span className="hidden sm:inline">Trap </span>Vault
            </span>
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
            {/* STEP 1: SUBJECT & UNIT SELECTION */}
            {questions.length === 0 && !loading && challengeStep === 'select' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-zinc-200 rounded-3xl p-5 sm:p-7 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 text-2xl shrink-0">
                    🪤
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-zinc-900 tracking-tight">
                      Deploy College Board Trap Radar
                    </h2>
                    <p className="text-xs text-zinc-500">
                      Generate authentic AP exam MCQs engineered with realistic distractor traps.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider block mb-1.5">
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
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 text-xs font-bold text-zinc-900 focus:bg-white focus:border-amber-500 focus:outline-none transition-colors"
                    >
                      {TOP_10_AP_SUBJECTS.map(subj => (
                        <option key={subj.id} value={subj.id}>
                          {subj.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider block mb-1.5">
                      Specific CED Unit
                    </label>
                    <select
                      value={selectedUnit}
                      onChange={(e) => setSelectedUnit(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 text-xs font-bold text-zinc-900 focus:bg-white focus:border-amber-500 focus:outline-none transition-colors"
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
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 mb-6 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <span>How Trap Radar Works on Real AP Exams:</span>
                  </div>
                  <ul className="text-xs text-zinc-700 space-y-1.5 pl-6 list-disc">
                    <li>Tests are intentionally loaded with <strong>sign flips, timeline traps, and half-truths</strong>.</li>
                    <li>You will pick an answer, and the Radar will reveal the exact <strong>psychological trap</strong> behind every wrong option.</li>
                    <li>Includes College Board Examiner Disarm secrets to save up to <strong>15 minutes</strong> on exam day.</li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    triggerVibration(10);
                    setChallengeStep('configure');
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-emerald-600 to-teal-600 hover:opacity-95 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-98 transition-all cursor-pointer"
                >
                  <Radar className="w-4 h-4" />
                  <span>Launch Trap Radar</span>
                </button>
              </motion.div>
            )}

            {/* STEP 2: CONFIGURE QUESTION FORMAT & COUNT (TestPrep Style) */}
            {questions.length === 0 && !loading && challengeStep === 'configure' && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-5"
              >
                {/* Selected Subject Banner */}
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{selectedSubject.icon}</span>
                    <div>
                      <h3 className="font-black text-zinc-900 text-sm">{selectedSubject.name}</h3>
                      <p className="text-xs text-amber-800 font-semibold">
                        {selectedUnit || 'All High-Yield Units (Exam Simulation)'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      triggerVibration(10);
                      setChallengeStep('select');
                    }}
                    className="text-xs font-extrabold text-amber-700 underline hover:text-amber-900 cursor-pointer"
                  >
                    Change
                  </button>
                </div>

                {/* Section 1: Question Format */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-black uppercase tracking-wider text-zinc-500">
                    1. Select Question Format
                  </label>

                  <div className="p-4 rounded-2xl border transition-all bg-white border-amber-500 ring-2 ring-amber-500/20 shadow-md shadow-amber-100/50 relative">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 bg-gradient-to-br from-amber-500 to-emerald-600 text-white shadow-sm">
                          🎯
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-black text-zinc-900 text-sm tracking-tight">
                              Objective (Multiple Choice Trap Questions)
                            </h4>
                            <span className="text-[10px] font-extrabold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-300">
                              Section I
                            </span>
                          </div>
                          <p className="text-xs text-zinc-500 font-medium mt-0.5">
                            1 Verified Target + 3 Psychometric Distractor Traps per question
                          </p>
                        </div>
                      </div>

                      <div className="w-6 h-6 rounded-full border border-amber-600 bg-amber-600 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Question Count (ONLY 2 OPTIONS: 5 and 10 questions) */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-black uppercase tracking-wider text-zinc-500">
                    2. How Many Questions?
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { count: 5, label: '5 Questions', sub: 'Quick Trap Drill (~10m)' },
                      { count: 10, label: '10 Questions', sub: 'Intensive Trap Gauntlet (~20m)' }
                    ].map(item => (
                      <button
                        key={item.count}
                        onClick={() => {
                          triggerVibration(10);
                          setQuestionCount(item.count);
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          questionCount === item.count
                            ? 'bg-zinc-900 border-zinc-900 text-white shadow-md ring-2 ring-zinc-900/20'
                            : 'bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50'
                        }`}
                      >
                        <div className="font-black text-sm">{item.label}</div>
                        <div className={`text-[11px] font-medium mt-1 ${
                          questionCount === item.count ? 'text-zinc-300' : 'text-zinc-500'
                        }`}>
                          {item.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      triggerVibration(10);
                      setChallengeStep('select');
                    }}
                    className="w-1/3 py-4 rounded-2xl border border-zinc-200 bg-white font-bold text-sm text-zinc-700 hover:bg-zinc-50 cursor-pointer"
                  >
                    Back
                  </button>

                  <button
                    onClick={handleStartChallenge}
                    disabled={loading}
                    className="w-2/3 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-emerald-600 to-teal-600 hover:opacity-95 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-98 transition-all cursor-pointer"
                  >
                    <Radar className="w-4 h-4" />
                    <span>Start Trap Radar ({questionCount} MCQs)</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Active Challenge Question */}
            {questions.length > 0 && activeQuestion && (
              <div className="space-y-4">
                {/* Progress / Navigation Header */}
                <div className="flex items-center justify-between bg-white border border-zinc-200 rounded-2xl px-4 py-2.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-amber-700">
                      Question {currentIndex + 1} of {questions.length}
                    </span>
                    {activeQuestion.overallTrapDifficulty && (
                      <span className="text-[10px] bg-red-100 text-red-800 border border-red-200 px-2 py-0.5 rounded font-bold">
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
                      className="p-1.5 rounded-lg bg-zinc-100 text-zinc-600 hover:text-zinc-900 disabled:opacity-40 cursor-pointer border border-zinc-200"
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
                      className="p-1.5 rounded-lg bg-zinc-100 text-zinc-600 hover:text-zinc-900 disabled:opacity-40 cursor-pointer border border-zinc-200"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => saveToVault(activeQuestion)}
                      className="p-1.5 rounded-lg bg-zinc-100 text-zinc-600 hover:text-amber-600 cursor-pointer ml-1 border border-zinc-200"
                      title="Bookmark to Trap Vault"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Stimulus & Prompt Card */}
                <div className="bg-white border border-zinc-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
                  {/* Skill Badge */}
                  {activeQuestion.skill && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-[10px] font-bold text-zinc-700">
                      <Target className="w-3 h-3 text-amber-600" />
                      <span>{activeQuestion.skill}</span>
                    </div>
                  )}

                  {/* Stimulus Context Box */}
                  {activeQuestion.stimulus && activeQuestion.stimulus.trim().length > 0 && (
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 font-mono text-xs text-zinc-800 leading-relaxed overflow-x-auto">
                      <GlobalMarkdown>{activeQuestion.stimulus}</GlobalMarkdown>
                    </div>
                  )}

                  {/* Question Stem */}
                  <div className="text-sm sm:text-base font-bold text-zinc-900 leading-relaxed">
                    <GlobalMarkdown>{activeQuestion.prompt}</GlobalMarkdown>
                  </div>

                  {/* Radar Scanning Line Animation (When button clicked) */}
                  <AnimatePresence>
                    {isScanningAnimation && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative h-2 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200"
                      >
                        <motion.div
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                          className="h-full w-1/3 bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-md shadow-amber-400"
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

                      let borderColor = 'border-zinc-200';
                      let bgColor = 'bg-white hover:bg-zinc-50';

                      if (isSelected && !isRadarRevealed) {
                        borderColor = 'border-amber-500';
                        bgColor = 'bg-amber-50/80 shadow-xs';
                      }

                      if (isRadarRevealed) {
                        if (isCorrect) {
                          borderColor = 'border-emerald-500';
                          bgColor = 'bg-emerald-50/90 shadow-xs';
                        } else if (isSelected && !isCorrect) {
                          borderColor = 'border-red-500';
                          bgColor = 'bg-red-50/90 shadow-xs';
                        } else {
                          borderColor = 'border-zinc-200';
                          bgColor = 'bg-zinc-50/60 opacity-80';
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
                                  ? 'bg-emerald-600 text-white'
                                  : isSelected
                                    ? 'bg-red-500 text-white'
                                    : 'bg-zinc-200 text-zinc-600'
                                : isSelected
                                  ? 'bg-amber-500 text-white'
                                  : 'bg-zinc-200 text-zinc-700'
                            }`}>
                              {letter}
                            </span>

                            <div className="flex-1 text-xs sm:text-sm font-semibold text-zinc-900 min-w-0">
                              <GlobalMarkdown>{optionText}</GlobalMarkdown>
                            </div>

                            {/* Result Indicator Icon */}
                            {isRadarRevealed && (
                              <div className="shrink-0 pt-0.5">
                                {isCorrect ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                ) : isSelected ? (
                                  <XCircle className="w-5 h-5 text-red-500" />
                                ) : (
                                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                                )}
                              </div>
                            )}
                          </div>

                          {/* REVEALED TRAP AUTOPSY CARD */}
                          {isRadarRevealed && trapInfo && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className={`mt-3 pt-3 border-t text-xs space-y-2 ${
                                isCorrect ? 'border-emerald-200' : 'border-zinc-200'
                              }`}
                            >
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border ${
                                  isCorrect
                                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                    : 'bg-amber-100 text-amber-800 border-amber-300'
                                }`}>
                                  {trapInfo.trapType}
                                </span>
                                {trapInfo.vulnerabilityRate && trapInfo.vulnerabilityRate !== 'N/A' && (
                                  <span className="text-[10px] text-zinc-600 font-bold">
                                    ⚠️ {trapInfo.vulnerabilityRate}
                                  </span>
                                )}
                              </div>

                              <div className="text-zinc-700 text-xs leading-relaxed">
                                <GlobalMarkdown>{trapInfo.trapDescription}</GlobalMarkdown>
                              </div>

                              {trapInfo.collegeBoardMindset && (
                                <div className="text-[11px] text-zinc-600 italic bg-zinc-50 p-2.5 rounded-xl border border-zinc-200">
                                  <GlobalMarkdown>{`**College Board Intent:** ${trapInfo.collegeBoardMindset}`}</GlobalMarkdown>
                                </div>
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
                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-emerald-600 hover:opacity-95 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
                      >
                        <Radar className="w-4 h-4" />
                        <span>Activate Trap Radar & Disarm Options</span>
                      </button>
                    ) : (
                      <div className="w-full space-y-3">
                        {/* 5-Second Disarm Secret Banner */}
                        {activeQuestion.disarmStrategy && (
                          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs space-y-1.5 shadow-xs">
                            <div className="flex items-center gap-1.5 font-black text-emerald-800">
                              <Zap className="w-4 h-4 text-amber-500" />
                              <span>Examiner's 5-Second Disarm Secret:</span>
                            </div>
                            <div className="leading-relaxed text-zinc-800">
                              <GlobalMarkdown>{activeQuestion.disarmStrategy}</GlobalMarkdown>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between gap-3">
                          <button
                            onClick={() => {
                              setSelectedOption(null);
                              setIsRadarRevealed(false);
                            }}
                            className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-zinc-200"
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
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  triggerVibration(10);
                                  setQuestions([]);
                                  setChallengeStep('configure');
                                }}
                                className="px-3.5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-zinc-200"
                              >
                                <span>Change Format</span>
                              </button>
                              <button
                                onClick={handleStartChallenge}
                                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                              >
                                <RotateCcw className="w-4 h-4" />
                                <span>New Set ({questionCount} MCQs)</span>
                              </button>
                            </div>
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
            <div className="bg-white border border-zinc-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 text-2xl shrink-0">
                  🔍
                </div>
                <div>
                  <h2 className="text-lg font-black text-zinc-900">
                    Scan Any AP Question for Traps
                  </h2>
                  <p className="text-xs text-zinc-500">
                    Paste any tricky question from your AP textbook, school quiz, or homework to run an instant distractor autopsy.
                  </p>
                </div>
              </div>

              {/* Hidden file inputs for Camera and Gallery fallback */}
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={handleFileInputChange}
              />
              <input
                ref={galleryInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileInputChange}
              />

              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider block">
                    Question Stem, Stimulus & Options (Or Attach Image)
                  </label>
                  {attachedImages.length > 0 && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
                      {attachedImages.length} Image{attachedImages.length > 1 ? 's' : ''} Attached
                    </span>
                  )}
                </div>

                {/* Attached Images Thumbnail Bar */}
                {attachedImages.length > 0 && (
                  <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
                    {attachedImages.map((img, idx) => (
                      <div key={idx} className="relative group shrink-0">
                        <img
                          src={img}
                          alt={`Attached AP question ${idx + 1}`}
                          className="w-16 h-16 rounded-xl object-cover border-2 border-emerald-500 shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            triggerVibration(10);
                            setAttachedImages(prev => prev.filter((_, i) => i !== idx));
                          }}
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs shadow-md cursor-pointer hover:bg-red-600"
                          title="Remove image"
                        >
                          <X className="w-3 h-3 stroke-[3]" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Main Input Container with Left Plus Button */}
                <div className="relative bg-zinc-50 border border-zinc-300 rounded-2xl focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-500/15 transition-all overflow-visible">
                  {/* Top Action Bar inside container */}
                  <div className="flex items-center justify-between px-3 pt-2.5 pb-1 border-b border-zinc-200/60">
                    <div className="relative">
                      {/* Left Plus Attachment Button */}
                      <button
                        type="button"
                        onClick={() => {
                          triggerVibration(10);
                          setShowPlusMenu(prev => !prev);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-50 border border-zinc-200 hover:border-emerald-300 text-zinc-700 hover:text-emerald-700 text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
                      >
                        <Plus className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                        <span>Attach Question Photo</span>
                      </button>

                      {/* Camera / Gallery Dropdown Menu */}
                      <AnimatePresence>
                        {showPlusMenu && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.95 }}
                            className="absolute left-0 top-full mt-2 z-30 w-56 bg-white rounded-2xl shadow-xl border border-zinc-200 p-2 space-y-1 text-left"
                          >
                            <button
                              type="button"
                              onClick={handleCameraClick}
                              className="w-full text-left p-2.5 hover:bg-emerald-50 rounded-xl text-xs font-bold text-zinc-800 flex items-center gap-2.5 transition-colors cursor-pointer"
                            >
                              <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                                <Camera className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="block">Take Photo (Camera)</span>
                                <span className="text-[10px] text-zinc-500 font-medium">Snap textbook or worksheet</span>
                              </div>
                            </button>

                            <button
                              type="button"
                              onClick={handleGalleryClick}
                              className="w-full text-left p-2.5 hover:bg-sky-50 rounded-xl text-xs font-bold text-zinc-800 flex items-center gap-2.5 transition-colors cursor-pointer"
                            >
                              <div className="w-7 h-7 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                                <ImageIcon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="block">Upload from Gallery</span>
                                <span className="text-[10px] text-zinc-500 font-medium">Choose from screenshots</span>
                              </div>
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <span className="text-[11px] text-zinc-400 font-mono">
                      {customQuestionText.length} chars
                    </span>
                  </div>

                  {/* Textarea */}
                  <textarea
                    rows={6}
                    value={customQuestionText}
                    onChange={(e) => {
                      setCustomQuestionText(e.target.value);
                      if (scanInputError) setScanInputError(null);
                    }}
                    placeholder="Example:&#10;Which of the following best describes the effect of an increase in government spending during a recession?&#10;A) Interest rates fall and investment increases&#10;B) Aggregate demand shifts right and price level rises&#10;C) ...&#10;&#10;Or snap a photo using the + button above!"
                    className="w-full bg-transparent p-4 text-xs font-mono text-zinc-900 focus:outline-none transition-colors resize-y"
                  />
                </div>
              </div>

              {/* Validation Warning Banner if input was invalid or gibberish like 'HI' */}
              {scanInputError && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-2.5 shadow-xs"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Input Error / Incomplete Question</div>
                    <p className="mt-0.5 text-zinc-700 leading-relaxed font-medium">{scanInputError}</p>
                  </div>
                </motion.div>
              )}

              <button
                onClick={handleScanCustomQuestion}
                disabled={scanLoading || (!customQuestionText.trim() && attachedImages.length === 0)}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
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
                className="bg-white border border-zinc-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-5"
              >
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded">
                      {scannedResult.detectedSubject || 'AP Exam Standard'}
                    </span>
                    <h3 className="text-sm font-black text-zinc-900 mt-1">
                      Trap Radar Autopsy Report
                    </h3>
                  </div>
                  {scannedResult.overallTrapDifficulty && (
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300">
                      {scannedResult.overallTrapDifficulty}
                    </span>
                  )}
                </div>

                {/* Stimulus Context Box if returned */}
                {scannedResult.stimulus && scannedResult.stimulus.trim().length > 0 && (
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 font-mono text-xs text-zinc-800 leading-relaxed overflow-x-auto">
                    <GlobalMarkdown>{scannedResult.stimulus}</GlobalMarkdown>
                  </div>
                )}

                {/* 5-Second Disarm Secret Banner */}
                {scannedResult.disarmStrategy && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs space-y-1.5 shadow-xs">
                    <span className="font-black text-emerald-800 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-500" />
                      Examiner's 5-Second Disarm Secret:
                    </span>
                    <div className="leading-relaxed text-zinc-800 font-medium">
                      <GlobalMarkdown>{scannedResult.disarmStrategy}</GlobalMarkdown>
                    </div>
                  </div>
                )}

                {/* Dissected Options */}
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase text-zinc-700 tracking-wider">
                    Option-By-Option Trap Analysis:
                  </h4>
                  {scannedResult.traps?.map((trap: any, i: number) => (
                    <div
                      key={i}
                      className={`p-4 rounded-2xl border text-xs space-y-2.5 transition-all shadow-xs ${
                        trap.isCorrect
                          ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5 flex-1 min-w-0">
                          <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                            trap.isCorrect ? 'bg-emerald-600 text-white' : 'bg-zinc-200 text-zinc-700'
                          }`}>
                            {trap.option}
                          </span>
                          <div className="flex-1 min-w-0 text-xs sm:text-sm font-bold text-zinc-900 pt-0.5">
                            <GlobalMarkdown>{trap.text || `Option ${trap.option}`}</GlobalMarkdown>
                          </div>
                        </div>
                        <span className={`shrink-0 text-[10px] font-black uppercase px-2 py-0.5 rounded border ${
                          trap.isCorrect
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-amber-100 text-amber-800 border-amber-300'
                        }`}>
                          {trap.trapType}
                        </span>
                      </div>

                      <div className="text-xs text-zinc-700 leading-relaxed pl-9">
                        <GlobalMarkdown>{trap.trapDescription}</GlobalMarkdown>
                      </div>

                      {trap.collegeBoardMindset && (
                        <div className="text-[11px] text-zinc-600 italic bg-white p-2.5 rounded-xl border border-zinc-200 ml-9">
                          <GlobalMarkdown>{`**College Board Intent:** ${trap.collegeBoardMindset}`}</GlobalMarkdown>
                        </div>
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
            <div className="bg-white border border-zinc-200 rounded-3xl p-5 sm:p-6 mb-2 shadow-xs">
              <h2 className="text-lg font-black text-zinc-900 flex items-center gap-2">
                <span>The 6 Official College Board Distractor Archetypes</span>
              </h2>
              <p className="text-xs text-zinc-500 mt-1">
                College Board psychometricians use these exact 6 trap blueprints when authoring AP multiple-choice questions. Master these to disarm 90% of exam traps.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {TRAP_ARCHETYPES.map((arch) => (
                <div
                  key={arch.id}
                  className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3 relative overflow-hidden shadow-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{arch.icon}</span>
                      <div>
                        <h3 className="text-sm font-black text-zinc-900">
                          {arch.title}
                        </h3>
                        <span className="text-[10px] text-amber-700 font-bold">
                          Frequency: {arch.frequency}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-red-100 text-red-800 border border-red-200">
                      {arch.dangerLevel}
                    </span>
                  </div>

                  <div className="text-xs text-zinc-700 leading-relaxed">
                    <GlobalMarkdown>{arch.description}</GlobalMarkdown>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-[11px] text-zinc-700">
                    <GlobalMarkdown>{`**Real AP Example:** ${arch.example}`}</GlobalMarkdown>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950">
                    <GlobalMarkdown>{`**🛡️ Disarm Rule:** ${arch.disarmRule}`}</GlobalMarkdown>
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
            <div className="bg-white border border-zinc-200 rounded-3xl p-5 sm:p-6 flex items-center justify-between shadow-xs">
              <div>
                <h2 className="text-lg font-black text-zinc-900 flex items-center gap-2">
                  <span>My Trap Vault</span>
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
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
                  className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold cursor-pointer border border-zinc-200"
                >
                  Clear All
                </button>
              )}
            </div>

            {vault.length === 0 ? (
              <div className="py-16 text-center space-y-2">
                <div className="text-3xl">🗄️</div>
                <h4 className="text-sm font-black text-zinc-900">Your Trap Vault is Empty</h4>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                  When you take a Trap Challenge or scan a question, bookmark tricky questions here to review before May exam day!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {vault.map((q, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3 shadow-xs"
                  >
                    <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                      <span className="text-xs font-black text-amber-700">
                        {q.skill || `Saved Question #${idx + 1}`}
                      </span>
                      <button
                        onClick={() => removeFromVault(q.id)}
                        className="text-zinc-500 hover:text-red-500 text-xs font-bold cursor-pointer flex items-center gap-1"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-zinc-900">
                      <GlobalMarkdown>{q.prompt}</GlobalMarkdown>
                    </div>

                    {/* Disarm Rule */}
                    {q.disarmStrategy && (
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
                        <GlobalMarkdown>{`**🛡️ Disarm Rule:** ${q.disarmStrategy}`}</GlobalMarkdown>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Trap Radar History Modal */}
      <AnimatePresence>
        {showHistoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
            onClick={() => setShowHistoryModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl border border-zinc-200 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="px-5 py-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center border border-amber-500/20">
                    <History className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-zinc-900 flex items-center gap-1.5">
                      Radar History
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-200 text-zinc-700">
                        {radarHistory.length}
                      </span>
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-medium">
                      Past Challenges & Scanned Question Autopsies
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowHistoryModal(false)}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 px-5 py-2.5 border-b border-zinc-100 bg-white">
                {(['all', 'challenge', 'scan'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setHistoryFilter(tab)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      historyFilter === tab
                        ? 'bg-zinc-900 text-white shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                  >
                    {tab === 'all' && `All (${radarHistory.length})`}
                    {tab === 'challenge' && `Challenges (${radarHistory.filter(h => h.type === 'challenge').length})`}
                    {tab === 'scan' && `Scans (${radarHistory.filter(h => h.type === 'scan').length})`}
                  </button>
                ))}
              </div>

              {/* History List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {filteredHistory.length === 0 ? (
                  <div className="py-12 text-center space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mx-auto text-zinc-400">
                      <History className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-zinc-800">No History Found</h4>
                    <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                      Complete a Trap Challenge or scan an AP question to build your radar history.
                    </p>
                  </div>
                ) : (
                  filteredHistory.map(item => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-amber-300 transition-all space-y-2.5 shadow-xs"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md border ${
                            item.type === 'challenge'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          }`}>
                            {item.type === 'challenge' ? 'Trap Challenge' : 'Question Scan'}
                          </span>
                          <span className="text-[10px] text-zinc-400 flex items-center gap-1 font-medium">
                            <Clock className="w-3 h-3" />
                            {new Date(item.timestamp).toLocaleDateString(undefined, {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromHistory(item.id)}
                          className="text-zinc-400 hover:text-red-600 transition-colors p-1"
                          title="Delete entry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div>
                        <h4 className="text-xs font-black text-zinc-900 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-zinc-500 mt-0.5 line-clamp-2">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="pt-1 flex items-center justify-between border-t border-zinc-100">
                        <span className="text-[10px] font-semibold text-zinc-500">
                          {item.subjectName || 'AP Standard'}
                        </span>
                        <button
                          onClick={() => restoreHistoryItem(item)}
                          className="px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                        >
                          <span>{item.type === 'challenge' ? 'Resume Challenge' : 'View Autopsy'}</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Modal Footer */}
              {radarHistory.length > 0 && (
                <div className="px-5 py-3 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between">
                  <button
                    onClick={clearAllHistory}
                    className="text-xs font-bold text-red-600 hover:text-red-800 cursor-pointer flex items-center gap-1.5 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All History</span>
                  </button>
                  <button
                    onClick={() => setShowHistoryModal(false)}
                    className="px-4 py-1.5 rounded-xl border border-zinc-200 bg-white font-bold text-xs text-zinc-700 hover:bg-zinc-100 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
