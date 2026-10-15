import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Sparkles } from 'lucide-react';
import { safeSetItem } from '../utils/storage';
import { triggerVibration } from '../utils/vibrate';

interface WelcomeCelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId?: string;
  userName?: string;
}

const SPEECH_PREFIX = "HI, I AM YOUR PERSONAL AI TUTOR ";
const SPEECH_HIGHLIGHT = "PANG! 🐧";
const FULL_SPEECH_TEXT = `${SPEECH_PREFIX}${SPEECH_HIGHLIGHT}`;
const PREFIX_LENGTH = SPEECH_PREFIX.length;

export default function WelcomeCelebrationModal({
  isOpen,
  onClose,
  userId
}: WelcomeCelebrationModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typewriter keyboard effect synced with video playback
  useEffect(() => {
    if (!isOpen) {
      setTypedText("");
      setIsTypingComplete(false);
      return;
    }

    let currentIndex = 0;
    setTypedText("");
    setIsTypingComplete(false);

    // Brief 250ms delay for modal entrance transition before keyboard typing begins
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        currentIndex++;
        setTypedText(FULL_SPEECH_TEXT.slice(0, currentIndex));
        if (currentIndex >= FULL_SPEECH_TEXT.length) {
          clearInterval(interval);
          setIsTypingComplete(true);
          triggerVibration(12);
        }
      }, 42);

      return () => clearInterval(interval);
    }, 280);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => {
        console.log('[WelcomeCelebration] Autoplay with sound restricted, retrying muted:', err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [isOpen]);

  // Immediately mark this celebration as seen for this user so it never re-triggers
  useEffect(() => {
    if (isOpen) {
      if (userId) {
        safeSetItem(`welcome_penguin_seen_${userId}`, 'true');
        safeSetItem(`pending_welcome_celebration_${userId}`, 'false');
      }
      safeSetItem('welcome_penguin_seen_global', 'true');
      safeSetItem('pending_welcome_celebration', 'false');
    }
  }, [isOpen, userId]);

  const handleDismiss = () => {
    if (userId) {
      safeSetItem(`welcome_penguin_seen_${userId}`, 'true');
      safeSetItem(`pending_welcome_celebration_${userId}`, 'false');
    }
    safeSetItem('welcome_penguin_seen_global', 'true');
    safeSetItem('pending_welcome_celebration', 'false');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="welcome-celebration-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-between p-5 sm:p-8 select-none bg-black/40 backdrop-blur-md"
      >
        {/* Subtle Ambient Glow Behind Penguin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Top Bar with subtle Close Button */}
        <div className="w-full shrink-0 flex items-center justify-end z-20 pointer-events-auto">
          <button
            onClick={handleDismiss}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all active:scale-95 cursor-pointer shadow-md"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Content: Conversational Speech Bubble + 3D Penguin Mascot Video */}
        <div className="w-full flex-1 flex flex-col items-center justify-center min-h-0 my-auto py-2">
          {/* Premium Conversational Speech Bubble with Typewriter Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: -15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 280 }}
            className="relative z-30 mb-3 sm:mb-5 max-w-[92vw] sm:max-w-md pointer-events-none"
          >
            <div className="relative px-5 py-3.5 sm:px-6 sm:py-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-white/60 dark:border-zinc-700/60 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] flex items-center justify-center text-center">
              {/* Subtle top shimmer highlight */}
              <div className="absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70" />

              <p className="text-xs sm:text-sm md:text-base font-black tracking-wide text-zinc-900 dark:text-white uppercase leading-relaxed flex items-center flex-wrap justify-center gap-1">
                {typedText.length <= PREFIX_LENGTH ? (
                  <span>{typedText}</span>
                ) : (
                  <>
                    <span>{typedText.slice(0, PREFIX_LENGTH)}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 font-black drop-shadow-sm">
                      {typedText.slice(PREFIX_LENGTH)}
                    </span>
                  </>
                )}
                {!isTypingComplete && (
                  <span className="inline-block w-2 h-4 sm:h-5 ml-0.5 bg-gradient-to-b from-indigo-500 to-purple-600 animate-pulse rounded-sm align-middle" />
                )}
              </p>

              {/* Speech Bubble Downward Pointer pointing to Penguin Mascot */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 dark:bg-zinc-900/95 border-b border-r border-white/60 dark:border-zinc-700/60 rotate-45" />
            </div>
          </motion.div>

          {/* Floating 3D Transparent Baby Penguin Mascot Video */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260, delay: 0.08 }}
            className="relative w-full max-w-xs sm:max-w-sm flex items-center justify-center pointer-events-none"
          >
            {/* Subtle soft ground shadow under penguin feet */}
            <div className="absolute bottom-4 w-44 h-7 bg-black/40 rounded-full blur-lg pointer-events-none" />

            <video
              ref={videoRef}
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-auto max-h-[50vh] sm:max-h-[56vh] object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] pointer-events-auto cursor-pointer"
              onClick={handleDismiss}
            >
              <source src="/welcome-penguin.webm?v=3" type="video/webm" />
              <source src="/welcome-penguin.mp4?v=3" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>

        {/* Bottom: ONLY "Start Learning" Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="w-full max-w-xs sm:max-w-sm shrink-0 mb-3 sm:mb-6 z-20"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleDismiss}
            className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-base shadow-[0_12px_30px_-5px_rgba(79,70,229,0.6)] flex items-center justify-center gap-2.5 transition-all cursor-pointer border border-white/20 active:shadow-inner"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

