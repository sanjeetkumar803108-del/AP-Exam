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
import { saveMistakeToVault } from '../utils/mistakes';
import { jsPDF } from 'jspdf';
import SafePdfViewer from './SafePdfViewer';
import { sanitizePdfText, formatMathForPdf } from '../utils/pdfSanitizer';
import { drawTextWithElevatedPowers, drawRichTextWithTables } from '../utils/pdfTableDrawer';
import { savePDFMobile, sharePDFMobile } from '../utils/mobileSaver';
import { savePdfToHistory } from '../utils/pdfHistory';
import { FileText, Download, Share2, HelpCircle } from 'lucide-react';
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

export interface FRQTrapItem {
  trapName: string;
  howStudentsLosePoints: string;
  vulnerabilityRate?: string;
  fullCreditFix: string;
}

export interface FRQPart {
  partLabel: string;
  task: string;
  points: number;
  scoringCriteria: string;
  modelAnswer: string;
  frqTraps?: FRQTrapItem[];
}

export interface AIMistakeFix {
  why_it_happened: string;
  the_fix: string;
  pro_memory_trick: string;
}

export interface TrapQuestion {
  id: number | string;
  format?: 'objective' | 'subjective';
  prompt: string;
  stimulus?: string;
  totalPoints?: number;
  options?: string[];
  correctAnswer?: string;
  overallTrapDifficulty?: string;
  traps?: TrapInfo[];
  parts?: FRQPart[];
  disarmStrategy: string;
  skill?: string;
  userSelectedOption?: string;
  userTrippedTrap?: string;
  aiFix?: AIMistakeFix | null;
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

  // Format Selection: Objective (MCQ) vs Subjective (FRQ)
  const [questionFormat, setQuestionFormat] = useState<'objective' | 'subjective'>('objective');
  const [userFrqDraft, setUserFrqDraft] = useState<Record<string, string>>({});
  const [frqSelfGrading, setFrqSelfGrading] = useState<Record<string, 'avoided' | 'tripped'>>({});
  const [vaultFilter, setVaultFilter] = useState<'all' | 'objective' | 'subjective'>('all');
  const [previewPdfUri, setPreviewPdfUri] = useState<string | null>(null);
  const [previewPdfName, setPreviewPdfName] = useState<string>('AP_Trap_Radar_Practice.pdf');
  const [explainingMistakeId, setExplainingMistakeId] = useState<string | number | null>(null);
  const [activeAiDoctorModal, setActiveAiDoctorModal] = useState<{ question: string; wrongInput: string; fix: AIMistakeFix } | null>(null);

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
      if (item.questions[0]?.format) {
        setQuestionFormat(item.questions[0].format);
      }
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
    Array.from(files).forEach((file: any) => {
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
          count: questionCount,
          format: questionFormat
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
          title: `Trap Challenge: ${selectedSubject.name} (${questionFormat === 'subjective' ? 'FRQ' : 'MCQ'})`,
          subtitle: `${selectedUnit} • ${data.questions.length} ${questionFormat === 'subjective' ? 'FRQ' : 'MCQ'} Questions`,
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
    if (!activeQuestion) return;

    // For Objective (MCQ): Require option selection first
    if (activeQuestion.format !== 'subjective' && !selectedOption) {
      showToast('Select an option first to test your Trap Radar!', 'warning');
      return;
    }

    triggerVibration(30);
    setIsScanningAnimation(true);

    // Play high-tech radar sweep for 1400ms then reveal
    setTimeout(() => {
      setIsScanningAnimation(false);
      setIsRadarRevealed(true);

      if (activeQuestion.format === 'subjective') {
        triggerVibration([20, 40, 20]);
        return;
      }

      if (selectedOption) {
        const isCorrect = selectedOption.trim().startsWith(activeQuestion.correctAnswer?.charAt(0) || '') || 
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
      }
    }, 1400);
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

  // Handle Subjective FRQ Self-Grading
  const handleFrqSelfGrade = (grade: 'avoided' | 'tripped') => {
    if (!activeQuestion) return;
    triggerVibration(grade === 'avoided' ? 20 : 40);
    const qKey = String(activeQuestion.id || currentIndex);
    setFrqSelfGrading(prev => ({ ...prev, [qKey]: grade }));

    if (grade === 'avoided') {
      const pts = activeQuestion.totalPoints || activeQuestion.parts?.reduce((sum, p) => sum + (p.points || 1), 0) || 4;
      setSessionStats(prev => ({ ...prev, trapsAvoided: prev.trapsAvoided + pts }));
      showToast('Great work! Full credit earned without falling into FRQ traps.', 'success');
    } else {
      setSessionStats(prev => ({ ...prev, trapsFallen: prev.trapsFallen + 1 }));
      const firstTrap = activeQuestion.parts?.[0]?.frqTraps?.[0];
      const trapName = firstTrap?.trapName || 'Chief Reader Rubric Pitfall';

      saveMistakeToVault(
        'AP Trap Radar',
        activeQuestion.prompt,
        `Tripped on FRQ Pitfall: ${trapName}`,
        `Scoring Criteria: ${activeQuestion.parts?.[0]?.scoringCriteria || 'Full Credit Rubric'}. Disarm Secret: ${activeQuestion.disarmStrategy}`
      );

      saveToVault({
        ...activeQuestion,
        userTrippedTrap: trapName
      });
      showToast('Logged to My Mistake Vault! AI will help you disarm this FRQ trap.', 'info');
    }
  };

  // AI Mistake Doctor Explainer
  const handleExplainMistakeWithAi = async (q: TrapQuestion) => {
    setExplainingMistakeId(q.id);
    triggerVibration(15);
    try {
      const response = await fetch(getApiUrl('/api/ap-trap-radar'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'explain_mistake',
          questionPrompt: q.prompt,
          wrongInput: q.userSelectedOption || q.userTrippedTrap || 'Distractor Trap Selected',
          correctConcept: q.correctAnswer || (q.parts ? q.parts.map(p => `${p.partLabel}: ${p.scoringCriteria}`).join('; ') : 'CED Requirement'),
          trapType: q.userTrippedTrap || q.traps?.find(t => !t.isCorrect)?.trapType || 'College Board Distractor Trap'
        })
      });

      if (!response.ok) throw new Error('Failed to fetch AI explanation');
      const data = await response.json();
      if (data.aiFix) {
        setVault(prev => {
          const updated = prev.map(item => item.id === q.id ? { ...item, aiFix: data.aiFix } : item);
          safeSetItem('ap_trap_radar_vault', JSON.stringify(updated));
          return updated;
        });
        setActiveAiDoctorModal({
          question: q.prompt,
          wrongInput: q.userSelectedOption || q.userTrippedTrap || 'Distractor Trap',
          fix: data.aiFix
        });
      }
    } catch (err) {
      console.error('Error fetching AI mistake fix:', err);
      showToast('Could not load AI explanation. Please retry.', 'error');
    } finally {
      setExplainingMistakeId(null);
    }
  };

  // PDF Export for Trap Challenge Sets
  const handleExportPDF = async (customQuestions?: TrapQuestion[]) => {
    const listToExport = customQuestions || questions;
    if (!listToExport || listToExport.length === 0) {
      showToast('No questions available to export.', 'warning');
      return;
    }

    try {
      triggerVibration(15);
      showToast('Generating College Board Practice PDF...', 'info');

      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - margin * 2;
      let y = margin;

      const checkPageBreak = (neededHeight: number) => {
        if (y + neededHeight > pageHeight - margin) {
          doc.addPage();
          y = margin;
          return true;
        }
        return false;
      };

      // Header Banner
      doc.setFillColor(30, 41, 59);
      doc.rect(margin, y, contentWidth, 22, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(255, 255, 255);
      const cleanSubj = sanitizePdfText(selectedSubject.name);
      const displayTitle = cleanSubj.startsWith('AP ') ? `${cleanSubj} - AP TRAP RADAR` : `AP ${cleanSubj} - AP TRAP RADAR`;
      doc.text(displayTitle, margin + 6, y + 10);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(203, 213, 225);
      const effFormat = listToExport[0]?.format || questionFormat;
      const formatLabel = effFormat === 'subjective' ? 'Section II (Free Response Trap Simulation)' : 'Section I (Multiple Choice Distractor Gauntlet)';
      doc.text(`${sanitizePdfText(selectedUnit)} | ${formatLabel} | ${listToExport.length} Questions`, margin + 6, y + 17);
      y += 28;

      // Section: Practice Questions
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('SECTION: PRACTICE QUESTIONS & STIMULI', margin, y);
      y += 6;
      doc.setDrawColor(203, 213, 225);
      doc.line(margin, y, margin + contentWidth, y);
      y += 6;

      listToExport.forEach((q, idx) => {
        checkPageBreak(35);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(180, 83, 9);
        doc.text(`Question ${idx + 1} ${q.skill ? `[${sanitizePdfText(q.skill)}]` : ''}`, margin, y);
        y += 5;

        // Stimulus (with rich table and math support)
        if (q.stimulus && q.stimulus.trim().length > 0) {
          checkPageBreak(25);
          if (q.stimulus.includes('|')) {
            y = drawRichTextWithTables(doc, q.stimulus.trim(), margin + 2, y, contentWidth - 4, {
              fontName: 'helvetica',
              fontStyle: 'normal',
              fontSize: 8.5,
              textColor: [51, 65, 85],
              checkPageBreak
            });
            y += 4;
          } else {
            doc.setFillColor(248, 250, 252);
            doc.setDrawColor(226, 232, 240);
            const cleanStim = sanitizePdfText(formatMathForPdf(q.stimulus));
            const stimLines = doc.splitTextToSize(cleanStim, contentWidth - 8);
            const boxHeight = stimLines.length * 4.5 + 6;
            doc.rect(margin, y, contentWidth, boxHeight, 'FD');
            doc.setFont('helvetica', 'italic');
            doc.setFontSize(8.5);
            doc.setTextColor(51, 65, 85);
            stimLines.forEach((sL: string, si: number) => {
              drawTextWithElevatedPowers(doc, sL, margin + 4, y + 5 + si * 4.5, 8.5);
            });
            y += boxHeight + 4;
          }
        }

        // Prompt
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(15, 23, 42);
        const cleanPrompt = sanitizePdfText(formatMathForPdf(q.prompt));
        const promptLines = doc.splitTextToSize(cleanPrompt, contentWidth);
        checkPageBreak(promptLines.length * 5 + 4);
        promptLines.forEach((pL: string) => {
          drawTextWithElevatedPowers(doc, pL, margin, y, 9.5);
          y += 5;
        });
        y += 3;

        // Options (for MCQ)
        if (q.options && q.options.length > 0) {
          q.options.forEach(opt => {
            const cleanOpt = sanitizePdfText(formatMathForPdf(opt));
            const optLines = doc.splitTextToSize(cleanOpt, contentWidth - 6);
            checkPageBreak(optLines.length * 4.5 + 2);
            optLines.forEach((oL: string) => {
              drawTextWithElevatedPowers(doc, oL, margin + 4, y, 8.5);
              y += 4.5;
            });
            y += 2;
          });
        }

        // Parts (for FRQ)
        if (q.parts && q.parts.length > 0) {
          q.parts.forEach(part => {
            checkPageBreak(18);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9);
            doc.setTextColor(30, 41, 59);
            doc.text(`Part ${sanitizePdfText(part.partLabel)} (${part.points} Point${part.points > 1 ? 's' : ''}):`, margin + 4, y);
            y += 4.5;
            doc.setFont('helvetica', 'normal');
            const cleanTask = sanitizePdfText(formatMathForPdf(part.task));
            const taskLines = doc.splitTextToSize(cleanTask, contentWidth - 8);
            taskLines.forEach((tL: string) => {
              drawTextWithElevatedPowers(doc, tL, margin + 6, y, 8.5);
              y += 4.5;
            });
            y += 3;
          });
        }
        y += 5;
      });

      // Answer Key & Distractor Autopsy Section on New Page
      doc.addPage();
      y = margin;
      doc.setFillColor(15, 23, 42);
      doc.rect(margin, y, contentWidth, 14, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(255, 255, 255);
      doc.text('EXAMINER DISTRACTOR AUTOPSY & SCORING RUBRICS', margin + 6, y + 9);
      y += 20;

      listToExport.forEach((q, idx) => {
        checkPageBreak(45);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(15, 23, 42);
        doc.text(`Question ${idx + 1} Autopsy & Disarm Guide`, margin, y);
        y += 5;

        if (q.correctAnswer) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9);
          doc.setTextColor(16, 185, 129);
          const cleanAns = sanitizePdfText(formatMathForPdf(q.correctAnswer));
          drawTextWithElevatedPowers(doc, `Target Answer: ${cleanAns}`, margin, y, 9);
          y += 5;
        }

        // MCQ Traps breakdown
        if (q.traps && q.traps.length > 0) {
          q.traps.forEach(t => {
            checkPageBreak(16);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(8.5);
            doc.setTextColor(t.isCorrect ? 16 : 185, t.isCorrect ? 185 : 83, t.isCorrect ? 129 : 9);
            doc.text(`[Option ${t.option}] ${sanitizePdfText(t.trapType)} ${t.vulnerabilityRate ? `(${t.vulnerabilityRate})` : ''}`, margin + 3, y);
            y += 4;
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(71, 85, 105);
            const cleanDesc = sanitizePdfText(formatMathForPdf(t.trapDescription));
            const descLines = doc.splitTextToSize(cleanDesc, contentWidth - 8);
            descLines.forEach((dL: string) => {
              drawTextWithElevatedPowers(doc, dL, margin + 6, y, 8);
              y += 4;
            });
            y += 2;
          });
        }

        // FRQ Rubric & Pitfalls
        if (q.parts && q.parts.length > 0) {
          q.parts.forEach(part => {
            checkPageBreak(25);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(8.5);
            doc.setTextColor(30, 41, 59);
            doc.text(`Part ${sanitizePdfText(part.partLabel)} Model Answer & Scoring:`, margin + 3, y);
            y += 4;
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(16, 185, 129);
            const cleanModel = sanitizePdfText(formatMathForPdf(part.modelAnswer));
            const modelLines = doc.splitTextToSize(`Model Answer:\n${cleanModel}`, contentWidth - 8);
            checkPageBreak(Math.min(modelLines.length * 4.2 + 4, 60));
            modelLines.forEach((mL: string) => {
              checkPageBreak(5);
              drawTextWithElevatedPowers(doc, mL, margin + 6, y, 8);
              y += 4;
            });
            y += 2;

            if (part.frqTraps && part.frqTraps.length > 0) {
              part.frqTraps.forEach(ft => {
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(185, 83, 9);
                doc.text(`Pitfall: ${sanitizePdfText(ft.trapName)} (${sanitizePdfText(ft.vulnerabilityRate || '')})`, margin + 6, y);
                y += 4;
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(71, 85, 105);
                const trapDescClean = sanitizePdfText(formatMathForPdf(`Lost Points: ${ft.howStudentsLosePoints} | Fix: ${ft.fullCreditFix}`));
                const trapDesc = doc.splitTextToSize(trapDescClean, contentWidth - 10);
                trapDesc.forEach((tdL: string) => {
                  drawTextWithElevatedPowers(doc, tdL, margin + 8, y, 8);
                  y += 4;
                });
                y += 2;
              });
            }
          });
        }

        // 5-Second Disarm Secret
        if (q.disarmStrategy) {
          checkPageBreak(16);
          doc.setFillColor(236, 253, 245);
          doc.setDrawColor(167, 243, 208);
          const cleanDisarm = sanitizePdfText(formatMathForPdf(q.disarmStrategy));
          const disarmLines = doc.splitTextToSize(`5-Second Disarm Secret: ${cleanDisarm}`, contentWidth - 8);
          const dHeight = disarmLines.length * 4 + 6;
          doc.rect(margin, y, contentWidth, dHeight, 'FD');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(6, 95, 70);
          disarmLines.forEach((dsL: string, di: number) => {
            drawTextWithElevatedPowers(doc, dsL, margin + 4, y + 4.5 + di * 4, 8);
          });
          y += dHeight + 4;
        }
        y += 4;
      });

      const filename = `AP_${selectedSubject.shortCode || selectedSubject.name.replace(/\s+/g, '_')}_TrapRadar_${effFormat.toUpperCase()}.pdf`;
      const pdfBlob = doc.output('blob');
      const blobUrl = URL.createObjectURL(pdfBlob);
      setPreviewPdfUri(blobUrl);
      setPreviewPdfName(filename);

      savePdfToHistory({
        title: `AP ${selectedSubject.name} Trap Radar Practice (${selectedUnit})`,
        fileUri: blobUrl,
        featureTag: 'AP Trap Radar',
        pageCount: doc.getNumberOfPages()
      });

      showToast('PDF ready for viewing and export!', 'success');
    } catch (err: any) {
      console.error('Failed to generate Trap Radar PDF:', err);
      showToast('PDF creation failed: ' + (err.message || err), 'error');
    }
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

            {/* STEP 2: CONFIGURE QUESTION FORMAT & COUNT */}
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

                {/* Section 1: Question Format Selection (Objective vs Subjective) */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-black uppercase tracking-wider text-zinc-500">
                    1. Select Question Format
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Option A: Objective (MCQ) */}
                    <div
                      onClick={() => {
                        triggerVibration(10);
                        setQuestionFormat('objective');
                        setQuestionCount(5);
                      }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                        questionFormat === 'objective'
                          ? 'bg-white border-amber-500 ring-2 ring-amber-500/20 shadow-md shadow-amber-100/50'
                          : 'bg-zinc-50/80 border-zinc-200 hover:bg-white hover:border-zinc-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                            questionFormat === 'objective'
                              ? 'bg-gradient-to-br from-amber-500 to-emerald-600 text-white shadow-sm'
                              : 'bg-zinc-200 text-zinc-600'
                          }`}>
                            🎯
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-black text-zinc-900 text-sm tracking-tight">
                                Objective (MCQ)
                              </h4>
                              <span className="text-[10px] font-extrabold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-300">
                                Section I
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 font-medium mt-0.5">
                              1 Target + 3 Psychometric Distractor Traps
                            </p>
                          </div>
                        </div>

                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          questionFormat === 'objective'
                            ? 'border-amber-600 bg-amber-600 text-white'
                            : 'border-zinc-300 bg-transparent'
                        }`}>
                          {questionFormat === 'objective' && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </div>

                    {/* Option B: Subjective (FRQ) */}
                    <div
                      onClick={() => {
                        triggerVibration(10);
                        setQuestionFormat('subjective');
                        setQuestionCount(2);
                      }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                        questionFormat === 'subjective'
                          ? 'bg-white border-emerald-500 ring-2 ring-emerald-500/20 shadow-md shadow-emerald-100/50'
                          : 'bg-zinc-50/80 border-zinc-200 hover:bg-white hover:border-zinc-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                            questionFormat === 'subjective'
                              ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-sm'
                              : 'bg-zinc-200 text-zinc-600'
                          }`}>
                            ✍️
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-black text-zinc-900 text-sm tracking-tight">
                                Subjective (FRQ)
                              </h4>
                              <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300">
                                Section II
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 font-medium mt-0.5">
                              Multi-Part Prompts, Rubric Traps & Model Answers
                            </p>
                          </div>
                        </div>

                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          questionFormat === 'subjective'
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : 'border-zinc-300 bg-transparent'
                        }`}>
                          {questionFormat === 'subjective' && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Question Count */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-black uppercase tracking-wider text-zinc-500">
                    2. How Many Questions?
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {questionFormat === 'objective' ? (
                      [
                        { count: 3, label: '3 Questions', sub: '⚡ Lightning Blitz (~3m)' },
                        { count: 5, label: '5 Questions', sub: 'Standard Trap Drill (~7m)' },
                        { count: 10, label: '10 Questions', sub: 'Trap Gauntlet (~15m)' }
                      ].map(item => (
                        <button
                          key={item.count}
                          onClick={() => {
                            triggerVibration(10);
                            setQuestionCount(item.count);
                          }}
                          className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer ${
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
                      ))
                    ) : (
                      [
                        { count: 2, label: '2 FRQs', sub: '⚡ Rapid Drill (~6m)' },
                        { count: 3, label: '3 FRQs', sub: 'Standard Drill (~12m)' },
                        { count: 5, label: '5 FRQs', sub: 'Full Section II (~25m)' }
                      ].map(item => (
                        <button
                          key={item.count}
                          onClick={() => {
                            triggerVibration(10);
                            setQuestionCount(item.count);
                          }}
                          className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer ${
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
                      ))
                    )}
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
                    <span>Start {questionFormat === 'subjective' ? 'FRQ' : 'MCQ'} Trap Radar ({questionCount} Qs)</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Active Challenge Question */}
            {questions.length > 0 && activeQuestion && (
              <div className="space-y-4">
                {/* Progress / Navigation Header */}
                <div className="flex items-center justify-between bg-white border border-zinc-200 rounded-2xl px-4 py-2.5 shadow-xs">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-black text-amber-700">
                      {activeQuestion.format === 'subjective' ? 'FRQ Question' : 'Question'} {currentIndex + 1} of {questions.length}
                    </span>
                    {activeQuestion.overallTrapDifficulty && (
                      <span className="text-[10px] bg-red-100 text-red-800 border border-red-200 px-2 py-0.5 rounded font-bold">
                        {activeQuestion.overallTrapDifficulty}
                      </span>
                    )}
                    {activeQuestion.format === 'subjective' && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                        ⭐ {activeQuestion.totalPoints || activeQuestion.parts?.reduce((sum, p) => sum + (p.points || 1), 0) || 4} Pts
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
                      title="Previous Question"
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
                      title="Next Question"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        saveToVault(activeQuestion);
                        showToast('Bookmarked to My Trap Vault', 'success');
                      }}
                      className="p-1.5 rounded-lg bg-zinc-100 text-zinc-600 hover:text-amber-600 cursor-pointer border border-zinc-200"
                      title="Bookmark to Trap Vault"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleExportPDF()}
                      className="px-2.5 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-zinc-800 cursor-pointer shadow-xs ml-1"
                      title="Export Practice & Distractor Autopsy to PDF"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">Export PDF</span>
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

                  {/* Radar Scanning Line Animation */}
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

                  {/* ========================================================================= */}
                  {/* BRANCH A: SUBJECTIVE (FRQ) FREE RESPONSE QUESTION RUNNER */}
                  {/* ========================================================================= */}
                  {activeQuestion.format === 'subjective' ? (
                    <div className="space-y-4 pt-2">
                      {/* Parts List */}
                      {activeQuestion.parts && activeQuestion.parts.length > 0 && (
                        <div className="space-y-3">
                          {activeQuestion.parts.map((part, pIdx) => (
                            <div
                              key={pIdx}
                              className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 space-y-2.5"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-black text-emerald-900 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full">
                                  Part {part.partLabel} • {part.points} Point{part.points > 1 ? 's' : ''}
                                </span>
                              </div>

                              <div className="text-xs sm:text-sm font-semibold text-zinc-900 leading-relaxed">
                                <GlobalMarkdown>{part.task}</GlobalMarkdown>
                              </div>

                              {/* REVEALED CHIEF READER RUBRICS & TRAPS */}
                              {isRadarRevealed && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="pt-3 border-t border-zinc-200 space-y-3 text-xs"
                                >
                                  {/* Scoring Criteria */}
                                  <div className="p-3 rounded-xl bg-emerald-50/90 border border-emerald-200 text-emerald-950">
                                    <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                                      <span>Official Scoring Standard ({part.points} Pt):</span>
                                    </div>
                                    <GlobalMarkdown>{part.scoringCriteria}</GlobalMarkdown>
                                  </div>

                                  {/* Model Answer */}
                                  <div className="p-3 rounded-xl bg-blue-50/90 border border-blue-200 text-blue-950">
                                    <div className="font-bold text-blue-900 mb-1 flex items-center gap-1.5">
                                      <Award className="w-3.5 h-3.5 text-blue-700" />
                                      <span>Full-Credit Exemplary Model Answer:</span>
                                    </div>
                                    <GlobalMarkdown>{part.modelAnswer}</GlobalMarkdown>
                                  </div>

                                  {/* FRQ Traps Autopsy */}
                                  {part.frqTraps && part.frqTraps.length > 0 && (
                                    <div className="space-y-2">
                                      <div className="text-[11px] font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                                        <span>Chief Reader Traps (Where Students Lose Points):</span>
                                      </div>
                                      {part.frqTraps.map((ft, ftIdx) => (
                                        <div
                                          key={ftIdx}
                                          className="p-3 rounded-xl bg-amber-50/90 border border-amber-300 space-y-1.5"
                                        >
                                          <div className="flex items-center justify-between">
                                            <span className="font-bold text-amber-950 text-xs">
                                              {ft.trapName}
                                            </span>
                                            {ft.vulnerabilityRate && (
                                              <span className="text-[10px] font-black bg-red-100 text-red-800 px-2 py-0.5 rounded-full border border-red-200">
                                                ⚠️ {ft.vulnerabilityRate}
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-zinc-700 text-xs">
                                            <strong>Point Deduction Risk:</strong> {ft.howStudentsLosePoints}
                                          </p>
                                          <p className="text-emerald-950 font-semibold text-xs">
                                            <strong>🎯 Full-Credit Disarm Fix:</strong> {ft.fullCreditFix}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Student Workspace (Notes / Outline) */}
                      {!isRadarRevealed && (
                        <div className="space-y-2 pt-1">
                          <label className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider block">
                            Student Scratchpad (Draft Outline or Calculations - Optional)
                          </label>
                          <textarea
                            value={userFrqDraft[String(activeQuestion.id || currentIndex)] || ''}
                            onChange={e => setUserFrqDraft(prev => ({ ...prev, [String(activeQuestion.id || currentIndex)]: e.target.value }))}
                            placeholder="Jot down your key calculations, theorem names, or outline here before revealing the scoring rubrics..."
                            rows={3}
                            className="w-full p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans"
                          />
                        </div>
                      )}

                      {/* Actions / Disarm Radar Trigger for FRQ */}
                      <div className="pt-2">
                        {!isRadarRevealed ? (
                          <button
                            onClick={handleActivateRadar}
                            disabled={isScanningAnimation}
                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:opacity-95 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-98 transition-all cursor-pointer"
                          >
                            <Radar className="w-4 h-4" />
                            <span>Scan Chief Reader Rubric & Expose FRQ Traps</span>
                          </button>
                        ) : (
                          <div className="w-full space-y-4">
                            {/* Chief Reader 5-Second Disarm Secret Banner */}
                            {activeQuestion.disarmStrategy && (
                              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs space-y-1.5 shadow-xs">
                                <div className="flex items-center gap-1.5 font-black text-emerald-800">
                                  <Zap className="w-4 h-4 text-amber-500" />
                                  <span>Chief Reader's 5-Second FRQ Scoring Secret:</span>
                                </div>
                                <div className="leading-relaxed text-zinc-800">
                                  <GlobalMarkdown>{activeQuestion.disarmStrategy}</GlobalMarkdown>
                                </div>
                              </div>
                            )}

                            {/* Self-Assessment & Mistake Vault Bar */}
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
                              <div className="text-xs font-black text-zinc-900 flex items-center justify-between">
                                <span>Self-Assessment: Did you avoid the traps in this question?</span>
                                {frqSelfGrading[String(activeQuestion.id || currentIndex)] && (
                                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                                    frqSelfGrading[String(activeQuestion.id || currentIndex)] === 'avoided'
                                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                      : 'bg-red-100 text-red-800 border border-red-300'
                                  }`}>
                                    {frqSelfGrading[String(activeQuestion.id || currentIndex)] === 'avoided' ? '✅ Full Credit' : '🪤 Trapped (Saved)'}
                                  </span>
                                )}
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <button
                                  onClick={() => handleFrqSelfGrade('avoided')}
                                  className={`py-2.5 px-3 rounded-xl border text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                                    frqSelfGrading[String(activeQuestion.id || currentIndex)] === 'avoided'
                                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                                      : 'bg-white border-zinc-200 text-zinc-800 hover:bg-emerald-50 hover:border-emerald-300'
                                  }`}
                                >
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                  <span>I Avoided The Traps</span>
                                </button>

                                <button
                                  onClick={() => handleFrqSelfGrade('tripped')}
                                  className={`py-2.5 px-3 rounded-xl border text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                                    frqSelfGrading[String(activeQuestion.id || currentIndex)] === 'tripped'
                                      ? 'bg-red-600 text-white border-red-600 shadow-sm'
                                      : 'bg-white border-zinc-200 text-zinc-800 hover:bg-red-50 hover:border-red-300'
                                  }`}
                                >
                                  <XCircle className="w-4 h-4 text-red-500" />
                                  <span>I Tripped on a Trap</span>
                                </button>
                              </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex items-center justify-between gap-3 pt-1">
                              <button
                                onClick={() => {
                                  setIsRadarRevealed(false);
                                }}
                                className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-zinc-200"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>Retry FRQ</span>
                              </button>

                              {currentIndex < questions.length - 1 ? (
                                <button
                                  onClick={() => {
                                    setCurrentIndex(prev => prev + 1);
                                    setIsRadarRevealed(false);
                                  }}
                                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                                >
                                  <span>Next FRQ</span>
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
                                    className="px-3.5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold cursor-pointer border border-zinc-200"
                                  >
                                    <span>Change Format</span>
                                  </button>
                                  <button
                                    onClick={handleStartChallenge}
                                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                                  >
                                    <RotateCcw className="w-4 h-4" />
                                    <span>New Set</span>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* ========================================================================= */
                    /* BRANCH B: OBJECTIVE (MCQ) MULTIPLE CHOICE QUESTION RUNNER */
                    /* ========================================================================= */
                    <div className="space-y-2.5 pt-2">
                      {activeQuestion.options && activeQuestion.options.map((optionText, idx) => {
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

                      {/* Actions / Disarm Radar Trigger for MCQ */}
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
                            {/* DEDICATED AI MISTAKE DIAGNOSIS & FIX CARD */}
                            {selectedOption && !(selectedOption.trim().startsWith((activeQuestion.correctAnswer || '').charAt(0)) || selectedOption === activeQuestion.correctAnswer) && (
                              <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 rounded-2xl bg-gradient-to-br from-red-50 to-amber-50 border border-red-200 text-xs space-y-2.5 shadow-sm"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="text-base">🤖</span>
                                    <span className="font-black text-red-950">AI Mistake Diagnosis & Fix</span>
                                  </div>
                                  <span className="text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full">
                                    Saved to My Mistake Vault
                                  </span>
                                </div>

                                <div className="text-zinc-800 space-y-1.5 leading-relaxed">
                                  <p>
                                    <strong>🪤 Trap Triggered:</strong>{' '}
                                    <span className="text-red-700 font-semibold">
                                      {activeQuestion.traps?.find(t => t.option === selectedOption.charAt(0))?.trapType || 'Psychometric Distractor'}
                                    </span>
                                  </p>
                                  <p>
                                    <strong>🎯 Why You Picked This:</strong>{' '}
                                    {activeQuestion.traps?.find(t => t.option === selectedOption.charAt(0))?.trapDescription || 'Selected an appealing distractor based on standard misconceptions.'}
                                  </p>
                                  <p className="text-emerald-950 font-semibold">
                                    <strong>⚡ Step-by-Step Fix:</strong> {activeQuestion.disarmStrategy}
                                  </p>
                                </div>

                                <button
                                  onClick={() => handleExplainMistakeWithAi(activeQuestion)}
                                  disabled={explainingMistakeId === activeQuestion.id}
                                  className="w-full py-2 px-3 rounded-xl bg-white border border-amber-300 hover:bg-amber-50 text-amber-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                                >
                                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                  <span>{explainingMistakeId === activeQuestion.id ? 'Analyzing Mistake...' : '💬 Ask AI Mistake Doctor to Deeply Explain My Error'}</span>
                                </button>
                              </motion.div>
                            )}

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
                                    className="px-3.5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold cursor-pointer border border-zinc-200"
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
                  )}
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
                {/* Header with Subject, CED Skill, Difficulty and History Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-200 pb-4 gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded">
                        {scannedResult.detectedSubject || 'AP Exam Standard'}
                      </span>
                      {scannedResult.skill && (
                        <span className="text-[10px] font-bold bg-zinc-100 text-zinc-700 border border-zinc-300 px-2 py-0.5 rounded">
                          {scannedResult.skill}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-zinc-900 flex items-center gap-2">
                      <span>Trap Radar Autopsy Report</span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <BookmarkCheck className="w-3 h-3" />
                        Saved in Vault
                      </span>
                    </h3>
                  </div>
                  {scannedResult.overallTrapDifficulty && (
                    <span className="self-start sm:self-center text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300">
                      {scannedResult.overallTrapDifficulty}
                    </span>
                  )}
                </div>

                {/* Clean Question Stem Box (especially useful for photo OCR & raw math questions) */}
                {scannedResult.question && (
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">
                      AP Question Stem:
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-zinc-900 leading-relaxed">
                      <GlobalMarkdown>{scannedResult.question}</GlobalMarkdown>
                    </div>
                  </div>
                )}

                {/* Stimulus Context Box if returned (Table, Code snippet, Historical quote) */}
                {scannedResult.stimulus && scannedResult.stimulus.trim().length > 0 && (
                  <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200 font-mono text-xs text-zinc-800 leading-relaxed overflow-x-auto">
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block mb-1 font-sans">
                      Stimulus / Context:
                    </span>
                    <GlobalMarkdown>{scannedResult.stimulus}</GlobalMarkdown>
                  </div>
                )}

                {/* Question & AP Concept Master Breakdown */}
                {scannedResult.conceptExplanation && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/80 border border-sky-200 text-xs space-y-2">
                    <div className="flex items-center gap-2 font-black text-sky-900">
                      <BookOpen className="w-4 h-4 text-sky-600 shrink-0" />
                      <span className="text-xs sm:text-sm">Question Breakdown & Core AP Concept:</span>
                    </div>
                    <div className="text-zinc-800 leading-relaxed font-medium text-xs sm:text-[13px]">
                      <GlobalMarkdown>{scannedResult.conceptExplanation}</GlobalMarkdown>
                    </div>
                  </div>
                )}

                {/* 5-Second Disarm Secret Banner */}
                {scannedResult.disarmStrategy && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs space-y-1.5 shadow-xs">
                    <span className="font-black text-emerald-800 flex items-center gap-1.5 text-xs sm:text-sm">
                      <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                      Examiner's 5-Second Disarm Secret (Exam Hall Defense):
                    </span>
                    <div className="leading-relaxed text-zinc-800 font-medium text-xs sm:text-[13px]">
                      <GlobalMarkdown>{scannedResult.disarmStrategy}</GlobalMarkdown>
                    </div>
                  </div>
                )}

                {/* Dissected Options & Trap Analysis */}
                <div className="space-y-3 pt-1">
                  <h4 className="text-xs font-black uppercase text-zinc-700 tracking-wider flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-500" />
                    <span>Option-By-Option Trap Analysis:</span>
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
                            trap.isCorrect ? 'bg-emerald-600 text-white shadow-xs' : 'bg-zinc-200 text-zinc-700'
                          }`}>
                            {trap.option}
                          </span>
                          <div className="flex-1 min-w-0 text-xs sm:text-sm font-bold text-zinc-900 pt-0.5">
                            <GlobalMarkdown>{trap.text || `Option ${trap.option}`}</GlobalMarkdown>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border ${
                            trap.isCorrect
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              : 'bg-amber-100 text-amber-800 border-amber-300'
                          }`}>
                            {trap.trapType}
                          </span>
                          {trap.vulnerabilityRate && trap.vulnerabilityRate !== 'N/A' && (
                            <span className="text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 hidden sm:inline-block">
                              ⚠️ {trap.vulnerabilityRate}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Mobile Vulnerability Rate Badge if present */}
                      {trap.vulnerabilityRate && trap.vulnerabilityRate !== 'N/A' && (
                        <div className="sm:hidden pl-9">
                          <span className="text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                            ⚠️ {trap.vulnerabilityRate}
                          </span>
                        </div>
                      )}

                      <div className="text-xs text-zinc-700 leading-relaxed pl-9">
                        <GlobalMarkdown>{trap.trapDescription}</GlobalMarkdown>
                      </div>

                      {trap.collegeBoardMindset && (
                        <div className="text-[11px] text-zinc-600 italic bg-white p-2.5 rounded-xl border border-zinc-200 ml-9">
                          <GlobalMarkdown>{`**Test-Maker's Psychological Intent:** ${trap.collegeBoardMindset}`}</GlobalMarkdown>
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
        {/* ========================================================================= */}
        {/* TAB 4: MY TRAP VAULT */}
        {/* ========================================================================= */}
        {activeTab === 'vault' && (
          <div className="space-y-4">
            <div className="bg-white border border-zinc-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-black text-zinc-900 flex items-center gap-2">
                    <span>My Trap Vault</span>
                    <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-300">
                      {vault.length} Saved
                    </span>
                  </h2>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Tricky AP questions you previously reviewed or tripped on. Review with AI Mistake Doctor before May exam day!
                  </p>
                </div>

                {vault.length > 0 && (
                  <div className="flex items-center gap-2">
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
                  </div>
                )}
              </div>

              {/* Filter Tabs */}
              {vault.length > 0 && (
                <div className="flex items-center gap-2 pt-1 border-t border-zinc-100">
                  {[
                    { id: 'all', label: `All (${vault.length})` },
                    { id: 'objective', label: `MCQ Traps (${vault.filter(v => v.format !== 'subjective').length})` },
                    { id: 'subjective', label: `FRQ Traps (${vault.filter(v => v.format === 'subjective').length})` }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setVaultFilter(tab.id as any)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        vaultFilter === tab.id
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'text-zinc-600 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {vault.length === 0 ? (
              <div className="py-16 text-center space-y-2">
                <div className="text-3xl">🗄️</div>
                <h4 className="text-sm font-black text-zinc-900">Your Trap Vault is Empty</h4>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                  When you take a Trap Challenge or scan a question, any question where you fall into a distractor trap is automatically logged here with AI diagnostics.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {vault
                  .filter(q => {
                    if (vaultFilter === 'objective') return q.format !== 'subjective';
                    if (vaultFilter === 'subjective') return q.format === 'subjective';
                    return true;
                  })
                  .map((q, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3.5 shadow-xs"
                    >
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border ${
                            q.format === 'subjective'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}>
                            {q.format === 'subjective' ? 'Section II FRQ' : 'Section I MCQ'}
                          </span>
                          <span className="text-xs font-black text-zinc-800">
                            {q.skill || `Saved Question #${idx + 1}`}
                          </span>
                        </div>

                        <button
                          onClick={() => removeFromVault(q.id)}
                          className="text-zinc-400 hover:text-red-500 text-xs font-bold cursor-pointer flex items-center gap-1 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>

                      {/* Stimulus Context Box if present */}
                      {q.stimulus && q.stimulus.trim().length > 0 && (
                        <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-800 leading-relaxed overflow-x-auto">
                          <GlobalMarkdown>{q.stimulus}</GlobalMarkdown>
                        </div>
                      )}

                      {/* Question Stem */}
                      <div className="text-xs sm:text-sm font-semibold text-zinc-900 leading-relaxed">
                        <GlobalMarkdown>{q.prompt}</GlobalMarkdown>
                      </div>

                      {/* Tripped Choice vs Target Info (For MCQ) */}
                      {q.format !== 'subjective' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.userSelectedOption && (
                            <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-950 flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold block text-[11px] uppercase tracking-wider text-red-700">You Picked (Trap):</span>
                                <span>{q.userSelectedOption}</span>
                              </div>
                            </div>
                          )}

                          {q.correctAnswer && (
                            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold block text-[11px] uppercase tracking-wider text-emerald-700">Verified Target:</span>
                                <span>{q.correctAnswer}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Subjective FRQ Parts Summary (For FRQ) */}
                      {q.format === 'subjective' && q.parts && (
                        <div className="space-y-2 text-xs">
                          {q.parts.map((p, pIdx) => (
                            <div key={pIdx} className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                              <span className="font-bold text-emerald-800">Part {p.partLabel} ({p.points} Pt):</span>
                              <p className="text-zinc-700">{p.task}</p>
                              <div className="text-xs bg-emerald-50/80 p-3 rounded-xl border border-emerald-200 text-emerald-950 space-y-1 mt-1">
                                <div className="font-bold text-emerald-900 flex items-center gap-1.5 text-[11px]">
                                  <Award className="w-3.5 h-3.5 text-emerald-700" />
                                  <span>Exemplary Step-by-Step Model Answer:</span>
                                </div>
                                <div className="text-[11px] leading-relaxed">
                                  <GlobalMarkdown>{p.modelAnswer}</GlobalMarkdown>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Disarm Rule */}
                      {q.disarmStrategy && (
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 leading-relaxed">
                          <GlobalMarkdown>{`**🛡️ Disarm Rule:** ${q.disarmStrategy}`}</GlobalMarkdown>
                        </div>
                      )}

                      {/* AI Mistake Doctor Box or Button */}
                      {q.aiFix ? (
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-xs space-y-2">
                          <div className="flex items-center gap-1.5 font-black text-amber-900">
                            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                            <span>AI Mistake Doctor Diagnosis:</span>
                          </div>
                          <p className="text-zinc-800"><strong>Why It Happened:</strong> {q.aiFix.why_it_happened}</p>
                          <p className="text-zinc-800"><strong>The Fix:</strong> {q.aiFix.the_fix}</p>
                          <p className="text-amber-900 font-semibold"><strong>Pro Memory Trick:</strong> {q.aiFix.pro_memory_trick}</p>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleExplainMistakeWithAi(q)}
                          disabled={explainingMistakeId === q.id}
                          className="w-full py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                          <span>{explainingMistakeId === q.id ? 'Analyzing Mistake with AI...' : '🤖 AI Explain & Cure My Mistake'}</span>
                        </button>
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
      {/* AI Mistake Doctor Modal */}
      <AnimatePresence>
        {activeAiDoctorModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setActiveAiDoctorModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl border border-amber-200 overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-zinc-200 flex items-center justify-between bg-amber-50/80">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🤖</span>
                  <div>
                    <h3 className="text-sm font-black text-zinc-900">AI Mistake Doctor & Cure</h3>
                    <p className="text-[11px] text-zinc-500 font-medium">Psychometric Distractor Autopsy</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveAiDoctorModal(null)}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 space-y-4 overflow-y-auto text-xs text-zinc-800 leading-relaxed">
                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1">
                  <span className="font-bold text-zinc-500 uppercase text-[10px]">Question Prompt:</span>
                  <div className="font-medium text-zinc-900">
                    <GlobalMarkdown>{activeAiDoctorModal.question}</GlobalMarkdown>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-red-800">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                    <span>Why You Fell For This Trap:</span>
                  </div>
                  <div className="text-zinc-800">
                    <GlobalMarkdown>{activeAiDoctorModal.fix.why_it_happened}</GlobalMarkdown>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>The Exact CED Fix:</span>
                  </div>
                  <div className="text-zinc-800">
                    <GlobalMarkdown>{activeAiDoctorModal.fix.the_fix}</GlobalMarkdown>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Score-5 Memory Trick:</span>
                  </div>
                  <div className="text-amber-950 font-semibold">
                    <GlobalMarkdown>{activeAiDoctorModal.fix.pro_memory_trick}</GlobalMarkdown>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 border-t border-zinc-200 bg-zinc-50 flex justify-end">
                <button
                  onClick={() => setActiveAiDoctorModal(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-900 text-white font-bold text-xs hover:bg-zinc-800 cursor-pointer"
                >
                  Understood & Saved
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen In-App PDF Preview Reader Modal */}
      {previewPdfUri && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex flex-col items-center justify-center p-2 sm:p-4">
          <div className="bg-zinc-900 w-full max-w-4xl h-[94vh] rounded-3xl flex flex-col overflow-hidden border border-zinc-700 shadow-2xl">
            {/* Header bar */}
            <div className="px-5 py-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
              <div className="flex items-center gap-2.5 truncate">
                <button
                  onClick={() => setPreviewPdfUri(null)}
                  className="p-1.5 rounded-xl hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="truncate">
                  <h3 className="font-black text-sm text-white truncate">{previewPdfName}</h3>
                  <p className="text-[10px] text-zinc-400 font-semibold">AP Trap Radar Exam Document • PDF Preview</p>
                </div>
              </div>

              <button
                onClick={() => setPreviewPdfUri(null)}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Safe PDF Viewer Component */}
            <div className="flex-1 w-full bg-zinc-800 overflow-hidden relative">
              <SafePdfViewer pdfUrlOrBase64={previewPdfUri} />
            </div>

            {/* Download & Share Actions Footer */}
            <div className="px-5 py-3 border-t border-zinc-800 bg-zinc-950 flex items-center justify-end gap-3">
              <button
                onClick={async () => {
                  try {
                    const res = await fetch(previewPdfUri);
                    const blob = await res.blob();
                    await savePDFMobile(blob, previewPdfName, {
                      featureTag: 'AP Trap Radar',
                      customToast: '✅ Saved offline in app'
                    });
                  } catch (e) {
                    console.error('PDF download error:', e);
                    showToast('Download failed', 'error');
                  }
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD PDF</span>
              </button>

              <button
                onClick={async () => {
                  try {
                    const res = await fetch(previewPdfUri);
                    const blob = await res.blob();
                    await sharePDFMobile(blob, previewPdfName);
                  } catch (e) {
                    console.error('PDF share error:', e);
                    showToast('Share failed', 'error');
                  }
                }}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-black text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>SHARE PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
