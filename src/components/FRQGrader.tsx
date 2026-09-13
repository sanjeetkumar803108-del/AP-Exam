import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft,
  Brain, 
  Camera, 
  Image as ImageIcon, 
  Zap, 
  ZapOff, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Loader2, 
  RefreshCw, 
  Copy, 
  Check, 
  FileText, 
  Award,
  ChevronRight,
  Sparkles,
  HelpCircle,
  ListFilter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Capacitor } from '@capacitor/core';
import { Camera as CapCamera } from '@capacitor/camera';
import { triggerVibration, hapticImpact, hapticNotification } from '../utils/vibrate';
import { compressImageToFile } from '../utils/imageCompressor';
import { getApiUrl } from '../utils/api';
import { showToast } from '../utils/toast';
import { pickNativeFiles, takeNativePhoto } from '../utils/mobilePicker';
import GlobalMarkdown from './GlobalMarkdown';

export interface FRQStepScore {
  stepTitle?: string;
  part?: string;
  pointsEarned: number;
  pointsPossible: number;
  criteria: string;
  workEvaluated: string;
  feedback: string;
  status: 'full' | 'partial' | 'zero';
}

export interface FRQGradingResult {
  isValidAcademicAnswer?: boolean;
  submissionMode?: 'student_answer' | 'question_prompt' | 'question_and_answer';
  errorCode?: string;
  errorMessage?: string;
  detectionReason?: string;
  suggestion?: string;
  subjectDetected?: string;
  questionStatement?: string;
  questionTopic?: string;
  transcribedHandwriting?: string;
  totalPointsEarned?: number;
  totalPointsPossible?: number;
  predictedAPScale?: number;
  predictedAPScaleLabel?: string;
  evaluationSteps?: FRQStepScore[];
  parts?: FRQStepScore[];
  chiefReaderSummary?: string;
  keyStrengths?: string[];
  keyMissedOpportunities?: string[];
  howToGetFullPoints?: string[];
}

interface FRQGraderProps {
  onBack: () => void;
}

export default function FRQGrader({ onBack }: FRQGraderProps) {
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraPermissionError, setCameraPermissionError] = useState(false);
  const [torchOn, setTorchOn] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isGrading, setIsGrading] = useState(false);
  const [gradingProgress, setGradingProgress] = useState(0);
  const [gradingStepText, setGradingStepText] = useState('');
  const [result, setResult] = useState<FRQGradingResult | null>(null);
  const [copiedTranscription, setCopiedTranscription] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const resultsContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Initialize and auto-open camera on mount
  useEffect(() => {
    let active = true;

    const startCamera = async () => {
      // Don't start video stream if we are already displaying a captured photo
      if (imagePreviewUrl) return;

      try {
        if (Capacitor.isNativePlatform()) {
          const checkStatus = await CapCamera.checkPermissions();
          if (checkStatus.camera !== 'granted') {
            const req = await CapCamera.requestPermissions({ permissions: ['camera'] });
            if (req.camera !== 'granted') {
              if (active) setCameraPermissionError(true);
              return;
            }
          }
        }

        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } }
        });

        if (!active) {
          mediaStream.getTracks().forEach(t => t.stop());
          return;
        }

        streamRef.current = mediaStream;
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.play().catch(() => {});
        }
        setCameraActive(true);
        setCameraPermissionError(false);
      } catch (err: any) {
        console.warn("[FRQGrader] Camera access fallback:", err);
        if (active) {
          setCameraPermissionError(true);
          setCameraActive(false);
        }
      }
    };

    startCamera();

    return () => {
      active = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
        streamRef.current = null;
      }
    };
  }, [imagePreviewUrl]);

  // Automatic smooth scroll down to evaluation results whenever an image is loaded or evaluation starts
  useEffect(() => {
    if (imagePreviewUrl || isGrading || result) {
      const timer = setTimeout(() => {
        resultsContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [imagePreviewUrl, isGrading, result]);

  // Toggle Torch/Flashlight
  const toggleTorch = async () => {
    triggerVibration(15);
    if (!streamRef.current) return;
    const track = streamRef.current.getVideoTracks()[0];
    if (track) {
      try {
        const nextState = !torchOn;
        await track.applyConstraints({
          advanced: [{ torch: nextState } as any]
        });
        setTorchOn(nextState);
      } catch (_) {
        setTorchOn(!torchOn);
      }
    }
  };

  // Capture photo from camera stream
  const handleCapturePhoto = async () => {
    triggerVibration(25);
    hapticImpact('MEDIUM');

    if (Capacitor.isNativePlatform()) {
      try {
        const picked = await takeNativePhoto();
        if (picked) {
          if ('error' in picked) {
            if (picked.error === 'blocked') {
              showToast("Camera Permission Blocked: Please enable Camera in Device Settings → Apps → AP Exam", "warning", 4500);
            } else if (picked.error === 'denied') {
              showToast("Camera Permission Needed: Please allow camera access to scan FRQ answers.", "warning", 4000);
            }
          } else {
            setImageFile(picked.fileObj);
            setImagePreviewUrl(picked.dataUrl);
            if (streamRef.current) {
              streamRef.current.getTracks().forEach(t => t.stop());
              streamRef.current = null;
            }
            setCameraActive(false);
            processAndGradeFRQ(picked.fileObj);
            return;
          }
        }
      } catch (err) {
        console.warn("[FRQGrader] Native capture cancelled or failed:", err);
      }
    }

    if (!videoRef.current) {
      // Fallback: trigger file picker
      fileInputRef.current?.click();
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current || document.createElement('canvas');
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], `frq_answer_${Date.now()}.jpg`, { type: 'image/jpeg' });
      const previewUrl = URL.createObjectURL(file);
      setImageFile(file);
      setImagePreviewUrl(previewUrl);

      // Stop camera stream to preserve battery and RAM
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
        streamRef.current = null;
      }
      setCameraActive(false);

      // Trigger grading
      processAndGradeFRQ(file);
    }, 'image/jpeg', 0.88);
  };

  // Pick image from Gallery
  const handleGalleryClick = async () => {
    triggerVibration(15);

    if (Capacitor.isNativePlatform()) {
      try {
        const picked = await pickNativeFiles({ types: 'image', multiple: false });
        if (picked && picked.length > 0) {
          const item = picked[0];
          setImageFile(item.fileObj);
          setImagePreviewUrl(item.dataUrl);

          if (streamRef.current) {
            streamRef.current.getTracks().forEach(t => t.stop());
            streamRef.current = null;
          }
          setCameraActive(false);

          processAndGradeFRQ(item.fileObj);
          return;
        }
      } catch (err) {
        console.warn("[FRQGrader] Native picker fallback:", err);
      }
    }

    // Web Fallback
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImageFile(file);
    setImagePreviewUrl(previewUrl);

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    setCameraActive(false);

    processAndGradeFRQ(file);
  };

  // Grade FRQ with Gemini backend
  const processAndGradeFRQ = async (file: File) => {
    setIsGrading(true);
    setResult(null);
    setGradingProgress(15);
    setGradingStepText("Deciphering handwriting & equations...");

    try {
      // Step 1: Compress for fast transmission
      const optimizedFile = await compressImageToFile(file, 1400, 0.82);
      setGradingProgress(45);
      setGradingStepText("Matching against College Board AP Scoring Guidelines...");

      // Step 2: Form Data
      const formData = new FormData();
      formData.append('image', optimizedFile);

      // Simulation ticks for smooth UX while waiting for Gemini
      const progressTimer = setInterval(() => {
        setGradingProgress((prev) => {
          if (prev >= 88) {
            clearInterval(progressTimer);
            return 88;
          }
          return prev + 6;
        });
      }, 350);

      const apiUrl = getApiUrl('/api/grade-frq');
      const res = await fetch(apiUrl, {
        method: 'POST',
        body: formData
      });

      clearInterval(progressTimer);

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${res.status}`);
      }

      const data: FRQGradingResult = await res.json();
      setGradingProgress(100);
      setGradingStepText("Evaluation complete!");
      setResult(data);
      setIsGrading(false);

      // Check if image had no student work or was rejected
      if (data.isValidAcademicAnswer === false) {
        triggerVibration([30, 40, 30]);
        showToast(
          data.errorCode === 'MCQ_DETECTED'
            ? "MCQ detected! FRQ Grader strictly evaluates subjective questions only."
            : (data.errorMessage || "No handwritten answer detected in photo."),
          "warning",
          4500
        );
        return;
      }

      // Celebration if score is high
      if (data.predictedAPScale && data.predictedAPScale >= 4) {
        confetti({
          particleCount: 55,
          spread: 60,
          origin: { y: 0.6 }
        });
        hapticNotification('SUCCESS');
      } else {
        triggerVibration([20, 30]);
      }
    } catch (err: any) {
      console.error("[FRQGrader] Grading Error:", err);
      setIsGrading(false);
      showToast(err.message || "Unable to grade FRQ. Please check connection and try again.", "error");
    }
  };

  // Reset and Grade Another Question
  const resetGrader = () => {
    triggerVibration(15);
    setImagePreviewUrl(null);
    setImageFile(null);
    setResult(null);
    setIsGrading(false);
    setGradingProgress(0);

    // Scroll smoothly back to camera top inside the scroll container
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyTranscription = () => {
    if (!result?.transcribedHandwriting) return;
    navigator.clipboard.writeText(result.transcribedHandwriting);
    setCopiedTranscription(true);
    triggerVibration(10);
    setTimeout(() => setCopiedTranscription(false), 2000);
  };

  return (
    <div className="h-full w-full flex flex-col bg-black text-zinc-900 font-sans antialiased overflow-hidden relative">
      {/* Hidden inputs & canvas for capturing */}
      <input 
        type="file" 
        ref={fileInputRef} 
        accept="image/*" 
        className="hidden" 
        onChange={handleFileInputChange} 
      />
      <canvas ref={canvasRef} className="hidden" />

      {/* 1. FULLSCREEN CAMERA VIEWFINDER (Active when no image uploaded yet) */}
      {!imagePreviewUrl ? (
        <div className="relative w-full h-full flex-1 min-h-0 bg-black overflow-hidden flex flex-col justify-between">
          {/* Video element covering the entire available area */}
          <div className="absolute inset-0 w-full h-full z-0 bg-black overflow-hidden">
            <video 
              ref={videoRef} 
              playsInline 
              muted 
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>

          {/* Central Framing Guide Overlay */}
          <div className="absolute inset-6 sm:inset-12 border-2 border-dashed border-white/55 rounded-3xl pointer-events-none flex flex-col justify-between p-4 z-10">
            <div className="flex justify-between items-start">
              <div className="w-6 h-6 border-t-[3px] border-l-[3px] border-emerald-400 rounded-tl-lg shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <div className="w-6 h-6 border-t-[3px] border-r-[3px] border-emerald-400 rounded-tr-lg shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            </div>
            <p className="text-center text-[11px] sm:text-xs font-bold text-white bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mx-auto shadow-lg border border-white/10">
              Align FRQ question or handwritten answer in frame
            </p>
            <div className="flex justify-between items-end">
              <div className="w-6 h-6 border-b-[3px] border-l-[3px] border-emerald-400 rounded-bl-lg shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <div className="w-6 h-6 border-b-[3px] border-r-[3px] border-emerald-400 rounded-br-lg shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            </div>
          </div>

          {/* Floating Top Header */}
          <header className="relative z-20 w-full p-4 pt-safe flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent">
            <button 
              onClick={() => {
                triggerVibration(10);
                onBack();
              }}
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 active:scale-95 transition-all shadow-md cursor-pointer"
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-white tracking-wide">
                FRQ Grader
              </span>
              <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 backdrop-blur-md">
                AP Rubric Engine
              </span>
            </div>
            <div className="w-10" />
          </header>

          {/* Camera Permission Fallback */}
          {cameraPermissionError && (
            <div className="absolute inset-0 z-15 bg-zinc-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center shadow-lg">
                <Camera className="w-8 h-8" />
              </div>
              <div className="max-w-xs">
                <h3 className="text-base font-black text-white">Camera Access Needed</h3>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Please allow camera permission in browser or device settings, or tap below to upload from your gallery.
                </p>
              </div>
              <button
                onClick={handleGalleryClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black px-6 py-3 rounded-2xl cursor-pointer border-none shadow-lg transition-all flex items-center gap-2"
              >
                <ImageIcon className="w-4 h-4" />
                <span>Upload From Gallery</span>
              </button>
            </div>
          )}

          {/* Floating Bottom Controls: Gallery, Shutter, Torch */}
          <div className="relative z-20 w-full pb-safe pb-8 pt-10 px-8 flex items-center justify-around bg-gradient-to-t from-black/85 via-black/45 to-transparent">
            {/* Gallery Button */}
            <button
              onClick={handleGalleryClick}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col items-center justify-center active:scale-90 transition-all shadow-lg hover:bg-white/20 cursor-pointer"
              title="Upload from Gallery"
            >
              <ImageIcon className="w-5 h-5" />
              <span className="text-[9px] font-bold mt-0.5">Gallery</span>
            </button>

            {/* Shutter Capture Button */}
            <button
              onClick={handleCapturePhoto}
              className="w-20 h-20 rounded-full border-[3.5px] border-emerald-400 p-1 flex items-center justify-center active:scale-95 transition-all shadow-[0_0_30px_rgba(52,211,153,0.6)] cursor-pointer group"
              aria-label="Capture Answer Sheet"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-inner group-hover:from-emerald-400 group-hover:to-teal-500 transition-colors">
                <Camera className="w-8 h-8" />
              </div>
            </button>

            {/* Torch Button */}
            <button
              onClick={toggleTorch}
              className={`w-14 h-14 rounded-full backdrop-blur-md border flex flex-col items-center justify-center active:scale-90 transition-all shadow-lg cursor-pointer ${
                torchOn 
                  ? 'bg-amber-500/30 text-amber-300 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.5)]' 
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              }`}
              title="Toggle Torch"
            >
              {torchOn ? <Zap className="w-5 h-5 fill-amber-400 text-amber-400" /> : <ZapOff className="w-5 h-5" />}
              <span className="text-[9px] font-bold mt-0.5">{torchOn ? "Torch On" : "Torch"}</span>
            </button>
          </div>
        </div>
      ) : (
        /* 2. RESULTS & EVALUATION CONTAINER (When photo uploaded/captured) */
        <div className="h-full w-full flex flex-col bg-[#FAF9F6] text-zinc-900 overflow-hidden">
          {/* Top Header */}
          <header className="shrink-0 sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 px-4 py-3 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <button 
                onClick={resetGrader}
                className="w-9 h-9 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center transition-colors cursor-pointer border-none"
                aria-label="Retake Photo"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-base font-black text-zinc-950 tracking-tight leading-none flex items-center gap-2">
                  FRQ Grader
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Evaluation & Score
                  </span>
                </h1>
              </div>
            </div>
            <button
              onClick={resetGrader}
              className="text-xs font-black text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl transition-all border border-emerald-200/60 cursor-pointer flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Retake</span>
            </button>
          </header>

          {/* Main Scrollable Results Container */}
          <main 
            ref={scrollContainerRef} 
            className="flex-1 overflow-y-auto overscroll-contain p-4 pb-32 space-y-4 w-full touch-pan-y"
          >
            <div className="max-w-xl w-full mx-auto space-y-4">
              {/* UPLOADED PHOTO PREVIEW */}
              <div className="bg-white border border-zinc-200 rounded-3xl p-3 shadow-sm flex items-center gap-3.5">
                <img 
                  src={imagePreviewUrl} 
                  alt="Captured FRQ Answer Sheet" 
                  className="w-20 h-20 rounded-2xl object-cover border border-zinc-200 shrink-0" 
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block">
                    Answer Sheet Uploaded
                  </span>
                  <p className="text-xs font-bold text-zinc-900 truncate mt-0.5">
                    {imageFile?.name || 'FRQ_Answer_Photo.jpg'}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={resetGrader}
                      className="text-[11px] font-bold text-zinc-600 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 px-3 py-1 rounded-lg transition-colors border-none cursor-pointer"
                    >
                      Retake Photo
                    </button>
                  </div>
                </div>
              </div>

              {/* EVALUATION & RESULTS SECTION (Auto-scrolled into view) */}
              <div ref={resultsContainerRef} className="space-y-4 pt-1">
                {/* AI IS THINKING LOADING ANIMATION */}
                {isGrading && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border-2 border-emerald-300/80 rounded-3xl p-7 text-center shadow-lg space-y-4 relative overflow-hidden"
                  >
                    {/* Background ambient glow */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

                    {/* Pulsing AI Brain / Sparkles Icon */}
                    <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md"
                      />
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md relative z-10">
                        <Brain className="w-8 h-8 animate-pulse text-white" />
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1 -right-1 text-emerald-500 z-20"
                      >
                        <Sparkles className="w-5 h-5 text-amber-400 fill-amber-300" />
                      </motion.div>
                    </div>

                    {/* AI IS THINKING TEXT ANIMATION */}
                    <div className="space-y-1">
                      <motion.h3 
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        className="text-base sm:text-lg font-black tracking-widest uppercase bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700 bg-clip-text text-transparent"
                      >
                        AI IS THINKING...
                      </motion.h3>
                      <p className="text-xs font-bold text-zinc-600">
                        {gradingStepText || "Evaluating response against official College Board AP rubrics..."}
                      </p>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden p-0.5 border border-zinc-200/80">
                      <motion.div 
                        className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 h-full rounded-full transition-all duration-300 shadow-sm"
                        style={{ width: `${Math.max(gradingProgress, 12)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-emerald-700">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>AP Chief Reader Engine Processing</span>
                    </div>
                  </motion.div>
                )}

                {/* INVALID IMAGE / NO STUDENT WORK DETECTED / MCQ DETECTED ERROR CARD */}
                {result && result.isValidAcademicAnswer !== true && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`bg-white border-2 rounded-3xl p-6 shadow-sm space-y-4 text-center ${
                      result.errorCode === 'MCQ_DETECTED' ? 'border-amber-300' : 'border-red-200'
                    }`}
                  >
                    {/* ICON */}
                    <div className={`w-16 h-16 rounded-3xl border flex items-center justify-center mx-auto ${
                      result.errorCode === 'MCQ_DETECTED'
                        ? 'bg-amber-50 border-amber-200 text-amber-600'
                        : 'bg-red-50 border-red-100 text-red-600'
                    }`}>
                      {result.errorCode === 'MCQ_DETECTED' ? (
                        <ListFilter className="w-8 h-8" />
                      ) : (
                        <AlertCircle className="w-8 h-8" />
                      )}
                    </div>

                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-wider block ${
                        result.errorCode === 'MCQ_DETECTED' ? 'text-amber-700' : 'text-red-600'
                      }`}>
                        {result.errorCode === 'MCQ_DETECTED' 
                          ? 'Subjective FRQ Only — No MCQs' 
                          : 'Verification Failed'}
                      </span>
                      <h3 className="text-base font-black text-zinc-950 mt-1">
                        {result.errorCode === 'MCQ_DETECTED'
                          ? 'Multiple Choice Question (MCQ) Detected'
                          : 'No Academic Question or Answer Detected'}
                      </h3>
                      <p className="text-xs font-semibold text-zinc-600 mt-1.5 leading-relaxed">
                        {result.errorMessage || (
                          result.errorCode === 'MCQ_DETECTED'
                            ? 'The FRQ Grader is strictly built to evaluate subjective Free Response Questions requiring handwritten calculations or written explanations.'
                            : 'Please capture or upload a clear photo of an academic exam question (FRQ) or your handwritten student answer sheet.'
                        )}
                      </p>
                    </div>

                    {result.detectionReason && (
                      <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-3 text-left">
                        <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 block mb-1">
                          Image Analysis:
                        </span>
                        <p className="text-xs text-zinc-700 font-medium leading-relaxed">
                          {result.detectionReason}
                        </p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <button
                        onClick={resetGrader}
                        className="bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-black text-xs py-3.5 rounded-2xl shadow-sm transition-all cursor-pointer border-none flex items-center justify-center gap-2"
                      >
                        <Camera className="w-4 h-4" />
                        <span>Retake Photo</span>
                      </button>

                      <button
                        onClick={handleGalleryClick}
                        className="bg-zinc-100 hover:bg-zinc-200 active:scale-98 text-zinc-800 font-black text-xs py-3.5 rounded-2xl transition-all cursor-pointer border border-zinc-200 flex items-center justify-center gap-2"
                      >
                        <ImageIcon className="w-4 h-4 text-zinc-600" />
                        <span>Choose Gallery</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* VALID EVALUATION RESULTS CARD */}
                {result && result.isValidAcademicAnswer === true && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    {/* PRIMARY SCORE BANNER */}
                    <div className={`bg-white border-2 rounded-3xl p-5 shadow-md relative overflow-hidden ${
                      result.submissionMode === 'question_prompt' 
                        ? 'border-emerald-500/80 bg-gradient-to-b from-emerald-50/20 to-white'
                        : (result.totalPointsEarned ?? 0) > 0 ? 'border-emerald-500/80' : 'border-zinc-300'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block">
                            {result.subjectDetected} {result.submissionMode === 'question_prompt' ? '— Official Benchmark' : ''}
                          </span>
                          <h2 className="text-lg font-black text-zinc-950 mt-0.5">
                            {result.questionTopic || "Free Response Question"}
                          </h2>
                        </div>
                        
                        {/* Score Pill */}
                        <div className="text-right">
                          {result.submissionMode === 'question_prompt' ? (
                            <>
                              <div className="text-2xl font-black font-mono text-emerald-700">
                                {result.totalPointsPossible || 9}
                                <span className="text-sm text-emerald-600 font-bold"> pts</span>
                              </div>
                              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wide">
                                Total Points Possible
                              </span>
                            </>
                          ) : (
                            <>
                              <div className={`text-2xl font-black font-mono ${
                                (result.totalPointsEarned ?? 0) > 0 ? 'text-emerald-700' : 'text-zinc-900'
                              }`}>
                                {(result.totalPointsEarned ?? 0) === 0 ? (
                                  <span>0</span>
                                ) : (
                                  <>
                                    {result.totalPointsEarned}
                                    {result.totalPointsPossible ? (
                                      <span className="text-sm text-zinc-400 font-normal"> / {result.totalPointsPossible}</span>
                                    ) : null}
                                  </>
                                )}
                              </div>
                              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wide">
                                Points Earned
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Predicted Scale / Rubric Benchmark */}
                      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-zinc-600">
                          {result.submissionMode === 'question_prompt' ? 'Rubric Standard:' : 'Predicted AP Scale:'}
                        </span>
                        <span className={`text-xs font-black px-3 py-1 rounded-full border ${
                          result.submissionMode === 'question_prompt' || (result.predictedAPScale && result.predictedAPScale >= 4)
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : result.predictedAPScale === 3
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : 'bg-red-50 text-red-800 border-red-200'
                        }`}>
                          {result.predictedAPScaleLabel || (result.submissionMode === 'question_prompt' ? 'Official Scoring Guidelines' : `Score ${result.predictedAPScale} / 5`)}
                        </span>
                      </div>
                    </div>

                    {/* IDENTIFIED QUESTION / PROBLEM STATEMENT */}
                    {result.questionStatement && (
                      <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm space-y-1.5">
                        <div className="flex items-center gap-2 text-emerald-700">
                          <FileText className="w-4 h-4" />
                          <span className="text-[10px] font-black uppercase tracking-wider block">
                            {result.submissionMode === 'question_prompt' ? 'Identified Textbook / Exam Question' : 'Identified Question / Problem Task'}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-zinc-800 leading-relaxed pt-0.5">
                          <GlobalMarkdown content={result.questionStatement} />
                        </div>
                      </div>
                    )}

                    {/* TRANSCRIBED HANDWRITING ("What The AP Reader Saw") */}
                    {result.transcribedHandwriting && (
                      <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-zinc-500" />
                            <h4 className="text-xs font-black text-zinc-900 uppercase tracking-wider">
                              Transcribed Student Work
                            </h4>
                          </div>
                          <button
                            onClick={copyTranscription}
                            className="text-[11px] font-bold text-zinc-500 hover:text-zinc-800 flex items-center gap-1 border-none bg-transparent cursor-pointer"
                          >
                            {copiedTranscription ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-600">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <div className="text-xs font-medium text-zinc-800 bg-zinc-50 border border-zinc-200/70 p-4 rounded-2xl overflow-x-auto leading-relaxed">
                          <GlobalMarkdown content={result.transcribedHandwriting} />
                        </div>
                      </div>
                    )}

                    {/* STEP-BY-STEP OFFICIAL AP RUBRIC BREAKDOWN */}
                    <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-emerald-600" />
                          <h4 className="text-xs font-black text-zinc-900 uppercase tracking-wider">
                            Official College Board Rubric Evaluation
                          </h4>
                        </div>
                        <span className="text-[10px] font-bold text-zinc-400">
                          {(result.evaluationSteps || result.parts || []).length} Parts
                        </span>
                      </div>

                      <div className="space-y-3 pt-1">
                        {(result.evaluationSteps || result.parts || []).map((step, idx) => (
                          <div 
                            key={idx}
                            className={`p-4 rounded-2xl border transition-all ${
                              result.submissionMode === 'question_prompt' || step.status === 'full'
                                ? 'bg-emerald-50/40 border-emerald-200'
                                : step.status === 'partial'
                                ? 'bg-amber-50/40 border-amber-200'
                                : 'bg-zinc-50 border-zinc-200'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                {result.submissionMode === 'question_prompt' || step.status === 'full' ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                ) : step.status === 'partial' ? (
                                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                                ) : (
                                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                                )}
                                <span className="text-xs font-black text-zinc-900">
                                  {step.stepTitle || step.part || `Step ${idx + 1}`}
                                </span>
                              </div>
                              <span className="text-xs font-black font-mono text-zinc-800">
                                {result.submissionMode === 'question_prompt'
                                  ? `${step.pointsPossible} pts`
                                  : (step.pointsEarned === 0 || (result.totalPointsEarned ?? 0) === 0
                                    ? "0 pts"
                                    : `${step.pointsEarned} / ${step.pointsPossible} pts`)}
                              </span>
                            </div>

                            <div className="text-[11px] font-bold text-zinc-600 mb-2">
                              <span className="text-zinc-400 uppercase tracking-wide text-[9px] block">Rubric Criteria:</span>
                              <GlobalMarkdown content={step.criteria} />
                            </div>

                            {step.workEvaluated && (
                              <div className="text-[11px] text-zinc-700 bg-white/80 p-2.5 rounded-xl border border-zinc-200/60 leading-relaxed mb-2">
                                <span className="font-bold text-zinc-500 text-[9px] block uppercase mb-0.5">
                                  {result.submissionMode === 'question_prompt' ? 'Official Model Solution:' : 'Student Work Identified:'}
                                </span>
                                <GlobalMarkdown content={step.workEvaluated} />
                              </div>
                            )}

                            <div className="text-[11px] font-medium text-zinc-800">
                              <span className="font-bold text-emerald-700 text-[9px] block uppercase mb-0.5">
                                {result.submissionMode === 'question_prompt' ? 'Chief Reader Exam Advice:' : 'Reader Commentary:'}
                              </span>
                              <GlobalMarkdown content={step.feedback} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CHIEF READER EXAMINER SUMMARY */}
                    {result.chiefReaderSummary && (
                      <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm space-y-3">
                        <h4 className="text-xs font-black text-zinc-900 uppercase tracking-wider">
                          Chief Reader Diagnostic
                        </h4>
                        <div className="text-xs text-zinc-700 leading-relaxed font-medium">
                          <GlobalMarkdown content={result.chiefReaderSummary} />
                        </div>

                        {/* Demonstrated Strengths */}
                        {result.keyStrengths && result.keyStrengths.length > 0 && (
                          <div className="pt-2.5 border-t border-zinc-100 space-y-1.5">
                            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
                              Demonstrated Strengths:
                            </span>
                            {result.keyStrengths.map((strength, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-zinc-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <GlobalMarkdown content={strength} />
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Missed Opportunities / Common Traps */}
                        {result.keyMissedOpportunities && result.keyMissedOpportunities.length > 0 && (
                          <div className="pt-2.5 border-t border-zinc-100 space-y-1.5">
                            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block">
                              Missed Points / Exam Pitfalls:
                            </span>
                            {result.keyMissedOpportunities.map((missed, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-zinc-700">
                                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                                <GlobalMarkdown content={missed} />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bottom Action Controls */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={resetGrader}
                        className="bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-black text-xs py-3.5 rounded-2xl shadow-sm transition-all cursor-pointer border-none flex items-center justify-center gap-2"
                      >
                        <Camera className="w-4 h-4" />
                        <span>Grade Another FRQ</span>
                      </button>

                      <button
                        onClick={handleGalleryClick}
                        className="bg-zinc-100 hover:bg-zinc-200 active:scale-98 text-zinc-800 font-black text-xs py-3.5 rounded-2xl transition-all cursor-pointer border border-zinc-200 flex items-center justify-center gap-2"
                      >
                        <ImageIcon className="w-4 h-4 text-zinc-600" />
                        <span>Choose Gallery</span>
                      </button>
                    </div>

                  </motion.div>
                )}
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
