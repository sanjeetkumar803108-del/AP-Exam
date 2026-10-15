import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { triggerVibration } from '../utils/vibrate';

interface FloatingTutorPenguinProps {
  onOpenTutor: () => void;
  isVisible: boolean;
}

const SESSION_STORAGE_KEY = 'tutor_penguin_played_session';
// Module-scoped session flag: persists across component unmounts/remounts during this app run
let hasPlayedInAppSession = false;

export default function FloatingTutorPenguin({
  onOpenTutor,
  isVisible
}: FloatingTutorPenguinProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState<boolean>(() => {
    try {
      return hasPlayedInAppSession || sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true';
    } catch {
      return hasPlayedInAppSession;
    }
  });

  useEffect(() => {
    let alreadyPlayed = false;
    try {
      alreadyPlayed = hasPlayedInAppSession || sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true';
    } catch {
      alreadyPlayed = hasPlayedInAppSession;
    }

    if (alreadyPlayed) {
      if (!hasPlayed) setHasPlayed(true);
      if (videoRef.current) {
        videoRef.current.pause();
        if (videoRef.current.duration) {
          videoRef.current.currentTime = Math.max(0, videoRef.current.duration - 0.1);
        }
      }
      return;
    }

    if (isVisible && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => {
        console.log('[FloatingTutorPenguin] Autoplay prevented, retrying muted:', err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [isVisible, hasPlayed]);

  const handleEnded = () => {
    hasPlayedInAppSession = true;
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    } catch {
      // Storage restricted or unavailable
    }
    setHasPlayed(true);
    if (videoRef.current) {
      videoRef.current.pause();
      if (videoRef.current.duration) {
        videoRef.current.currentTime = Math.max(0, videoRef.current.duration - 0.05);
      }
    }
  };

  const handleClick = () => {
    triggerVibration(20);
    onOpenTutor();
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0, opacity: 0, y: 30 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className="fixed bottom-20 right-4 sm:right-6 z-40 select-none cursor-pointer flex flex-col items-center group"
      onClick={handleClick}
      title="Ask AI Magic Tutor"
    >
      {/* Outer Pulse Glowing Ring */}
      <div className="absolute top-0 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-amber-400 blur-sm opacity-70 animate-pulse pointer-events-none" />

      {/* Circular Mask Container - Zero Black Screen Outside */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden p-[2.5px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-amber-400 shadow-[0_10px_25px_-4px_rgba(99,102,241,0.55)] border border-white/25 active:shadow-inner"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay={!hasPlayed}
            playsInline
            muted
            poster="/tutor-penguin-face.jpg"
            onEnded={handleEnded}
            className="w-full h-full object-cover scale-105 pointer-events-none"
          >
            <source src="/tutor-penguin-circle.webm?v=4" type="video/webm" />
            <source src="/tutor-penguin-circle.mp4?v=4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Premium AI TUTOR Pill Label positioned directly below circle (No Emoji) */}
      <div className="-mt-2.5 z-20 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 shadow-[0_4px_12px_rgba(99,102,241,0.6)] border border-white/40 flex items-center justify-center group-hover:scale-105 transition-transform">
        <span className="text-white text-[9.5px] sm:text-[10px] font-black tracking-widest uppercase leading-none drop-shadow-sm">
          AI TUTOR
        </span>
      </div>
    </motion.div>
  );
}
