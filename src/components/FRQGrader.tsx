import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
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
import { pickNativeFiles } from '../utils/mobilePicker';
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
  const handleCapturePhoto = () => {
    triggerVibration(25);
    hapticImpact('MEDIUM');

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
    <div className="h-full w-full flex flex-col bg-white text-zinc-900 font-sans antialiased overflow-hidden">
      {/* Hidden inputs & canvas for capturing */}
      <input 
        type="file" 
        ref={fileInputRef} 
        accept="image/*" 
        className="hidden" 
        onChange={handleFileInputChange} 
      />
      <canvas ref={canvasRef} className="hidden" />

      {/* TOP APP BAR */}
      <header className="shrink-0 sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              triggerVibration(10);
              onBack();
            }}
            className="w-9 h-9 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center transition-colors cursor-pointer border-none"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-black text-zinc-950 tracking-tight leading-none flex items-center gap-2">
              FRQ Grader
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                AP Rubric Engine
              </span>
            </h1>
          </div>
        </div>

      </header>

      {/* MAIN SCROLLABLE CONTAINER */}
      <main 
        ref={scrollContainerRef} 
        className="flex-1 overflow-y-auto overscroll-contain p-4 pb-32 space-y-4 w-full touch-pan-y"
      >
        <div className="max-w-xl w-full mx-auto space-y-4">
        {/* CAMERA VIEWFINDER & CAPTURE CONTROLS */}
        {!imagePreviewUrl && (
          <section className="space-y-3">
            <div className="relative w-full aspect-[4/3] bg-zinc-950 rounded-3xl overflow-hidden shadow-md border border-zinc-200 flex items-center justify-center">
              {/* Video Element */}
              <video 
                ref={videoRef} 
                playsInline 
                muted 
                className="w-full h-full object-cover"
              />

              {/* Viewfinder Framing Guide */}
              <div className="absolute inset-5 border-2 border-dashed border-white/60 rounded-2xl pointer-events-none flex flex-col justify-between p-3">
                <div className="flex justify-between items-start">
                  <div className="w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
                  <div className="w-4 h-4 border-t-2 border-r-2 border-emerald-400" />
                </div>
                <p className="text-center text-[11px] font-bold text-white/90 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full mx-auto">
                  Align handwritten FRQ answer in frame
                </p>
                <div className="flex justify-between items-end">
                  <div className="w-4 h-4 border-b-2 border-l-2 border-emerald-400" />
                  <div className="w-4 h-4 border-b-2 border-r-2 border-emerald-400" />
                </div>
              </div>

              {/* Torch Button (if supported) */}
              <button
                onClick={toggleTorch}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center cursor-pointer border-none hover:bg-black/60 transition-colors"
                title="Toggle Torch"
              >
                {torchOn ? <Zap className="w-5 h-5 text-amber-400 fill-amber-400" /> : <ZapOff className="w-5 h-5 text-white" />}
              </button>

              {/* Permission Fallback View */}
              {cameraPermissionError && (
                <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-black text-zinc-900">Camera Access Blocked</h3>
                  <p className="text-xs text-zinc-500 max-w-xs">
                    Please allow camera permissions in device settings, or tap below to upload an answer sheet from your gallery.
                  </p>
                  <button
                    onClick={handleGalleryClick}
                    className="bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer border-none shadow-sm hover:bg-emerald-700 transition-colors flex items-center gap-2"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>Upload From Gallery</span>
                  </button>
                </div>
              )}
            </div>

            {/* ACTION CONTROLS: SHUTTER & GALLERY BUTTONS */}
            <div className="bg-white border border-zinc-200/90 rounded-2xl p-4 flex items-center justify-around shadow-sm">
              {/* Gallery Upload Button */}
              <button
                onClick={handleGalleryClick}
                className="flex flex-col items-center gap-1 text-zinc-700 hover:text-zinc-950 cursor-pointer border-none bg-transparent active:scale-95 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center shadow-sm hover:bg-zinc-200 transition-colors">
                  <ImageIcon className="w-6 h-6 text-zinc-700" />
                </div>
                <span className="text-[11px] font-bold">Gallery</span>
              </button>

              {/* Camera Shutter Button */}
              <button
                onClick={handleCapturePhoto}
                className="w-18 h-18 rounded-full bg-white border-4 border-emerald-600 flex items-center justify-center shadow-lg active:scale-95 cursor-pointer transition-all p-1"
                aria-label="Capture Answer Sheet"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center text-white transition-colors">
                  <Camera className="w-7 h-7" />
                </div>
              </button>

              {/* Retake / Help placeholder */}
              <div className="w-12 flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-400">
                  <Award className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-[10px] font-bold text-zinc-400 mt-1">AP 5/5</span>
              </div>
            </div>
          </section>
        )}

        {/* EVALUATION & RESULTS SECTION (Auto-scrolled into view) */}
        <div ref={resultsContainerRef} className="space-y-4 pt-2">
          {/* UPLOADED PHOTO PREVIEW */}
          {imagePreviewUrl && (
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
          )}

          {/* ACTIVE GRADING SPINNER */}
          {isGrading && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-zinc-200 rounded-3xl p-6 text-center shadow-sm space-y-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                <Loader2 className="w-7 h-7 animate-spin" />
              </div>
              <div>
                <h3 className="text-sm font-black text-zinc-900 tracking-tight">
                  Grading Free Response Answer...
                </h3>
                <p className="text-xs font-semibold text-zinc-500 mt-1">
                  {gradingStepText}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden mt-3">
                <motion.div 
                  className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${gradingProgress}%` }}
                />
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
                    ? 'Strict Subjective FRQ Only • No MCQs' 
                    : 'Scan Verification Failed'}
                </span>
                <h3 className="text-base font-black text-zinc-950 mt-1">
                  {result.errorCode === 'MCQ_DETECTED'
                    ? 'Multiple Choice (MCQ) Detected'
                    : 'No Valid Answer Sheet Detected'}
                </h3>
                <p className="text-xs font-semibold text-zinc-600 mt-1.5 leading-relaxed">
                  {result.errorMessage || (
                    result.errorCode === 'MCQ_DETECTED'
                      ? 'The FRQ Grader is strictly built to evaluate subjective Free Response Questions requiring handwritten calculations and derivations.'
                      : 'We could not find any handwritten solution, equations, or academic question in this photo.'
                  )}
                </p>
              </div>

              {result.detectionReason && (
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-3 text-left">
                  <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 block mb-1">
                    What Was Detected:
                  </span>
                  <p className="text-xs text-zinc-700 font-medium leading-relaxed">
                    {result.detectionReason}
                  </p>
                </div>
              )}

              {/* Best practices checklist */}
              {result.errorCode === 'MCQ_DETECTED' ? (
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 text-left space-y-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-amber-900 block">
                    Important FRQ Grading Rules:
                  </span>
                  <div className="space-y-1.5 text-xs font-semibold text-zinc-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>FRQ Grader exclusively evaluates <strong>subjective handwritten answers</strong> (multi-step math, physics formulas, justifications).</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>For multiple-choice questions (MCQs), please use the <strong>Practice Quiz / Test Prep</strong> module.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Show your complete step-by-step work to receive official AP rubric scores.</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-emerald-50/50 border border-emerald-150 rounded-2xl p-3.5 text-left space-y-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-800 block">
                    Tips for a Perfect Scan:
                  </span>
                  <div className="space-y-1.5 text-xs font-semibold text-zinc-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Ensure good lighting and hold the camera steady.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Frame your handwritten page directly inside the box.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Make sure written steps and formulas are clearly legible.</span>
                    </div>
                  </div>
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
                      {result.subjectDetected} {result.submissionMode === 'question_prompt' ? '• Official Question Benchmark' : ''}
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
                      {copiedTranscription ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedTranscription ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-3.5 text-xs text-zinc-800 leading-relaxed overflow-x-auto">
                    <GlobalMarkdown content={result.transcribedHandwriting} />
                  </div>
                </div>
              )}

              {/* STEP-BY-STEP SOLUTION & RUBRIC ANALYSIS */}
              <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-zinc-900 uppercase tracking-wider">
                    {result.submissionMode === 'question_prompt' ? 'Official Scoring Rubric & Model Solution' : 'Step-by-Step Scoring & Rubric Analysis'}
                  </h4>
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wide">
                    {result.submissionMode === 'question_prompt' ? 'Scoring Guidelines' : 'Evaluated on Answer'}
                  </span>
                </div>

                <div className="space-y-3">
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

              {/* CALL TO ACTION FOR QUESTION PROMPT: SCAN YOUR ANSWER */}
              {result.submissionMode === 'question_prompt' && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5 text-center space-y-3 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-zinc-950">
                      Want to Grade Your Own Solution?
                    </h4>
                    <p className="text-xs font-semibold text-zinc-600 mt-1 max-w-sm mx-auto">
                      Solve this question in your notebook, snap a photo of your handwritten work, and get official AP grades!
                    </p>
                  </div>
                  <button
                    onClick={resetGrader}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs px-5 py-2.5 rounded-xl border-none cursor-pointer shadow-sm transition-all flex items-center gap-2 mx-auto"
                  >
                    <Camera className="w-4 h-4" />
                    <span>Scan Your Handwritten Answer</span>
                  </button>
                </div>
              )}

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

                  {/* Golden tips */}
                  {result.howToGetFullPoints && result.howToGetFullPoints.length > 0 && (
                    <div className="pt-2.5 border-t border-zinc-100 space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
                        Golden Tips for Exam Day:
                      </span>
                      {result.howToGetFullPoints.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-semibold text-zinc-700">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <GlobalMarkdown content={tip} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* BOTTOM ACTION BUTTON */}
              <button
                onClick={resetGrader}
                className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-black text-xs py-4 rounded-2xl shadow-md transition-all cursor-pointer border-none flex items-center justify-center gap-2"
              >
                <Camera className="w-4 h-4" />
                <span>Grade Another FRQ Question</span>
              </button>
            </motion.div>
          )}
        </div>
        </div>
      </main>
    </div>
  );
}
