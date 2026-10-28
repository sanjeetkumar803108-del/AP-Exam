import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, Search, X, ChevronDown, ChevronRight, FileText, 
  Download, ExternalLink, Printer, Sparkles, Clock, CheckCircle2,
  Star, Eye, BookOpen, Lock, Crown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerVibration } from '../utils/vibrate';
import { isProUser } from '../utils/coins';
import { 
  ALL_TEST_PREP_SUBJECTS, 
  TestPrepSubject, 
  TestPrepUnit, 
  UploadedUnitPdf, 
  hasUnitPdf, 
  getUnitPdf,
  getTestPrepSubjectVisual
} from '../data/testPrepUnitsData';
import { initUnitPdfsSync } from '../services/unitPdfService';
import SafePdfViewer from './SafePdfViewer';

interface TestPrepProps {
  onBack: () => void;
  isVip?: boolean;
  onOpenVip?: () => void;
  onNavigateToTab?: (tab: string) => void;
}

export default function TestPrep({ onBack }: TestPrepProps) {
  // Navigation & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Accordion State: Default AP Calculus AB expanded
  const [expandedSubjectIds, setExpandedSubjectIds] = useState<Set<string>>(
    new Set(['ap-calculus-ab'])
  );

  // Modal States
  const [activePdfModal, setActivePdfModal] = useState<{
    subject: TestPrepSubject;
    unit: TestPrepUnit;
    pdfData: UploadedUnitPdf;
  } | null>(null);

  const [comingSoonModal, setComingSoonModal] = useState<{
    subject: TestPrepSubject;
    unit: TestPrepUnit;
  } | null>(null);

  const [lockedUnitModal, setLockedUnitModal] = useState<{
    subject: TestPrepSubject;
    unit: TestPrepUnit;
  } | null>(null);

  // Trigger state to re-render when new PDFs are uploaded or deleted from Developer Portal
  const [, setRefreshCount] = useState(0);

  useEffect(() => {
    initUnitPdfsSync(true).catch(err => console.warn('[TestPrep] Sync unit pdfs notice:', err));
    const handleUpdate = () => {
      setRefreshCount(c => c + 1);
    };
    window.addEventListener('unit-pdfs-updated', handleUpdate);
    window.addEventListener('sample-papers-updated', handleUpdate);
    return () => {
      window.removeEventListener('unit-pdfs-updated', handleUpdate);
      window.removeEventListener('sample-papers-updated', handleUpdate);
    };
  }, []);

  // Hardware Android Back Button Navigation (Step-by-step)
  useEffect(() => {
    const handleHardwareBack = (e: Event) => {
      if (lockedUnitModal) {
        e.preventDefault();
        triggerVibration(10);
        setLockedUnitModal(null);
      } else if (activePdfModal) {
        e.preventDefault();
        triggerVibration(10);
        setActivePdfModal(null);
      } else if (comingSoonModal) {
        e.preventDefault();
        triggerVibration(10);
        setComingSoonModal(null);
      } else {
        e.preventDefault();
        triggerVibration(10);
        onBack();
      }
    };
    window.addEventListener('appBackButton', handleHardwareBack);
    return () => window.removeEventListener('appBackButton', handleHardwareBack);
  }, [lockedUnitModal, activePdfModal, comingSoonModal, onBack]);

  const categories = [
    'All', 
    'STEM & Math', 
    'Sciences', 
    'Humanities & Social Sciences', 
    'English & Tech'
  ];

  // Toggle subject accordion
  const toggleSubject = (subjectId: string) => {
    triggerVibration(10);
    setExpandedSubjectIds(prev => {
      const next = new Set(prev);
      if (next.has(subjectId)) {
        next.delete(subjectId);
      } else {
        next.add(subjectId);
      }
      return next;
    });
  };

  // Unit click handler
  const handleUnitClick = (subject: TestPrepSubject, unit: TestPrepUnit) => {
    triggerVibration(12);

    // For freemium users, ONLY Unit 1 sample paper set is unlocked!
    // Unit 0 (Master Set) and Unit 2+ are locked.
    if (!isProUser() && unit.unitNumber !== 1) {
      triggerVibration(25);
      setLockedUnitModal({ subject, unit });
      return;
    }

    const pdfData = getUnitPdf(subject.id, unit.unitNumber);
    if (pdfData) {
      setActivePdfModal({
        subject,
        unit,
        pdfData,
      });
    } else {
      setComingSoonModal({
        subject,
        unit
      });
    }
  };

  // Filter subjects based on category & search query
  const filteredSubjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return ALL_TEST_PREP_SUBJECTS.filter(subject => {
      const matchesCategory = selectedCategory === 'All' || subject.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!q) return true;

      const nameMatch = subject.name.toLowerCase().includes(q) || subject.code.toLowerCase().includes(q);
      const unitMatch = subject.units.some(u => 
        u.title.toLowerCase().includes(q) || 
        `unit ${u.unitNumber}`.includes(q)
      );
      return nameMatch || unitMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans select-none antialiased">
      {/* ========================================================================= */}
      {/* 1. TOP HEADER (Exact Screenshot 1 Layout)                                */}
      {/* ========================================================================= */}
      <header className="px-5 py-3.5 flex items-center justify-between border-b border-zinc-200/70 bg-white sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              triggerVibration(10);
              onBack();
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-50 border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 active:scale-95 transition-transform cursor-pointer"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider bg-purple-100 text-purple-700 px-2 py-0.5 rounded-md">
              AP® EXAMS
            </span>
            <h1 className="font-extrabold text-zinc-900 text-base tracking-tight">
              AP Sample Paper Sets
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Unit-Wise Master Sets</span>
          </span>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. BODY CONTENT (White Background, Exact Design)                         */}
      {/* ========================================================================= */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 max-w-4xl mx-auto w-full bg-white">
        {/* Hero Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl p-5 sm:py-5 sm:px-6 bg-gradient-to-r from-[#170e3b] via-[#24125e] to-[#3a1b82] text-white shadow-md shadow-indigo-950/15 border border-purple-900/40">
          <div className="relative z-10 flex items-center justify-between gap-4">
            <h2 className="text-base sm:text-lg md:text-xl font-black tracking-tight leading-snug">
              AP® Sample Paper Sets (Unit-Wise Master Practice &amp; Revision)
            </h2>
            
            {/* Soft decorative document icon on right */}
            <div className="w-10 h-11 rounded-lg bg-white/10 border border-white/20 p-2 flex flex-col justify-between shrink-0 shadow-inner hidden sm:flex">
              <div className="w-full h-0.5 bg-white/40 rounded-full" />
              <div className="w-3/4 h-0.5 bg-white/30 rounded-full" />
              <div className="w-full h-0.5 bg-white/40 rounded-full" />
              <div className="w-1/2 h-0.5 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>

        {/* Search Input & Category Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subjects, units, formulas (e.g. Kinematics, DTM, Kinetics)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  triggerVibration(8);
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#6366f1] text-white shadow-xs'
                    : 'bg-white border border-zinc-200/90 text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Subjects Accordion List */}
        <div className="space-y-3 pt-1">
          {filteredSubjects.length === 0 ? (
            <div className="text-center py-12 bg-zinc-50 rounded-3xl border border-zinc-200">
              <BookOpen className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-zinc-700">No subjects or units found</p>
              <p className="text-xs text-zinc-400 mt-1">Try clearing your search query or selecting a different category filter.</p>
            </div>
          ) : (
            filteredSubjects.map(subject => {
              const isExpanded = expandedSubjectIds.has(subject.id) || Boolean(searchQuery);
              const visual = getTestPrepSubjectVisual(subject.id);

              return (
                <div
                  key={subject.id}
                  className="bg-white rounded-2xl border border-zinc-200/90 shadow-2xs overflow-hidden transition-all duration-200 hover:border-zinc-300"
                >
                  {/* Subject Accordion Header Card */}
                  <button
                    onClick={() => toggleSubject(subject.id)}
                    className="w-full py-2.5 px-3.5 sm:py-3 sm:px-4 flex items-center justify-between text-left hover:bg-zinc-50/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0 bg-gradient-to-br ${visual.gradient} text-white shadow-xs`}>
                        {visual.icon}
                      </div>
                      
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-zinc-900 truncate">
                          {subject.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 text-zinc-400">
                      <span className="text-xs sm:text-sm font-bold text-zinc-500">
                        {subject.units.length} Units
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-zinc-700' : ''}`} />
                    </div>
                  </button>

                  {/* Expanded Units List (Exact Screenshot 2 Design) */}
                  {isExpanded && (
                    <div className="border-t border-zinc-100 p-3 sm:p-4 bg-zinc-50/20 flex flex-col gap-2">
                      {subject.units.map(unit => {
                        const unitPdf = getUnitPdf(subject.id, unit.unitNumber);
                        const pdfUploaded = Boolean(unitPdf);
                        const isFullCourse = unit.unitNumber === 0;
                        const isLocked = !isProUser() && unit.unitNumber !== 1;

                        return (
                          <div
                            key={unit.unitNumber}
                            onClick={() => handleUnitClick(subject, unit)}
                            className="w-full bg-white border border-zinc-200/80 hover:border-indigo-400 hover:bg-indigo-50/20 py-3 px-4 rounded-2xl flex items-center justify-between transition-all cursor-pointer group shadow-2xs"
                          >
                            <div className="flex items-center gap-3.5 min-w-0 pr-2">
                              {/* Unit Badge (FULL / U1, U2, ...) */}
                              <div className={`w-8 h-8 rounded-xl ${
                                isFullCourse
                                  ? 'bg-indigo-600 text-white font-black text-[10px] tracking-tight shadow-xs'
                                  : 'bg-indigo-50 border border-indigo-200/70 text-indigo-700 font-black text-xs'
                              } flex items-center justify-center shrink-0`}>
                                {isFullCourse ? 'FULL' : `U${unit.unitNumber}`}
                              </div>

                              <div className="min-w-0">
                                <span className="font-bold text-xs sm:text-sm text-zinc-900 group-hover:text-indigo-600 transition-colors truncate block">
                                  {isFullCourse ? unit.title : `Unit ${unit.unitNumber}: ${unit.title}`}
                                </span>
                              </div>
                            </div>

                            {/* Right Action */}
                            <div className="flex items-center gap-2 shrink-0">
                              {isLocked ? (
                                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-black uppercase tracking-wider">
                                  <Lock className="w-3 h-3 text-amber-600" />
                                  <span>PRO</span>
                                </div>
                              ) : (
                                <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </main>

      {/* ========================================================================= */}
      {/* 3. 100% DIRECT FULL-SCREEN PDF VIEWER (Pure Minimalist Header Only)       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activePdfModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-50 w-full h-full bg-zinc-950 flex flex-col overflow-hidden select-text"
          >
            {/* Minimalist Top Bar: Back Button & Subject/Unit Heading ONLY */}
            <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between shrink-0 z-20">
              <div className="flex items-center gap-3 min-w-0 pr-3">
                <button
                  onClick={() => {
                    triggerVibration(10);
                    setActivePdfModal(null);
                  }}
                  className="w-8 h-8 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shrink-0"
                  title="Back"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 min-w-0">
                  <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                  <h2 className="text-sm sm:text-base font-black text-white truncate">
                    {activePdfModal.subject.name} • {activePdfModal.unit.unitNumber === 0
                      ? activePdfModal.unit.title
                      : `Unit ${activePdfModal.unit.unitNumber}: ${activePdfModal.unit.title}`}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => {
                  triggerVibration(10);
                  setActivePdfModal(null);
                }}
                className="w-8 h-8 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shrink-0"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Full-Screen PDF Viewer */}
            <div className="flex-1 w-full h-full overflow-hidden bg-zinc-100 relative">
              <SafePdfViewer
                pdfUrlOrBase64={activePdfModal.pdfData.pdfUrl || activePdfModal.pdfData.htmlUrl}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 4. MODAL: COMING SOON (When PDF is NOT uploaded yet)                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {comingSoonModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 transform-gpu animate-fade-in">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl border border-zinc-200 relative transform-gpu will-change-transform"
            >
              <button
                onClick={() => setComingSoonModal(null)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 animate-pulse" />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[11px] font-black uppercase tracking-wider mb-2">
                COMING SOON
              </div>

              <h3 className="text-lg font-black text-zinc-900 mb-1">
                Coming Soon!
              </h3>

              <p className="text-xs text-zinc-500 leading-relaxed mb-5">
                The Master Practice Set and Review Booklet for{' '}
                <b className="text-zinc-800">
                  {comingSoonModal.subject.name} ·{' '}
                  {comingSoonModal.unit.unitNumber === 0
                    ? comingSoonModal.unit.title
                    : `Unit ${comingSoonModal.unit.unitNumber}: ${comingSoonModal.unit.title}`}
                </b>{' '}
                is currently being prepared and will be released shortly.
              </p>

              <button
                onClick={() => {
                  triggerVibration(10);
                  setComingSoonModal(null);
                }}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors cursor-pointer active:scale-95"
              >
                Got It
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Freemium Locked Sample Paper Set Modal */}
      <AnimatePresence>
        {lockedUnitModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-6 border border-zinc-200 shadow-2xl text-center relative"
            >
              <button
                onClick={() => setLockedUnitModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-3xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 mx-auto mb-3 shadow-sm">
                <Lock className="w-8 h-8" />
              </div>

              <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-black uppercase tracking-wider rounded-full mb-2">
                PRO Member Feature
              </span>

              <h3 className="text-lg font-black text-zinc-900">
                {lockedUnitModal.unit.unitNumber === 0
                  ? 'Master Exam Set is Locked'
                  : `Unit ${lockedUnitModal.unit.unitNumber} Practice Set is Locked`}
              </h3>
              <p className="text-xs text-zinc-600 font-semibold mt-1 leading-relaxed">
                Free plan users have access to <strong>Unit 1</strong> practice sets. Upgrade to PRO to unlock all unit master sets, timed practice papers, and full course exam packs!
              </p>

              <div className="mt-5 space-y-2.5">
                <button
                  onClick={() => {
                    triggerVibration(15);
                    setLockedUnitModal(null);
                    window.dispatchEvent(new CustomEvent('open-vip-modal'));
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:opacity-95 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Crown className="w-4 h-4 fill-zinc-950" />
                  <span>Upgrade to PRO</span>
                </button>

                <button
                  onClick={() => {
                    triggerVibration(10);
                    setLockedUnitModal(null);
                  }}
                  className="w-full py-3 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs cursor-pointer active:scale-95"
                >
                  Keep Free (Go Back)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
