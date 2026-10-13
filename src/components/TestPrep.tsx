import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Search, X, ChevronDown, ChevronRight, FileText, 
  Download, ExternalLink, Printer, Sparkles, Clock, CheckCircle2,
  Star, Eye, BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerVibration } from '../utils/vibrate';
import { 
  ALL_TEST_PREP_SUBJECTS, 
  TestPrepSubject, 
  TestPrepUnit, 
  UploadedUnitPdf, 
  hasUnitPdf, 
  getUnitPdf,
  getTestPrepSubjectVisual
} from '../data/testPrepUnitsData';

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
    viewMode: 'html' | 'pdf';
  } | null>(null);

  const [comingSoonModal, setComingSoonModal] = useState<{
    subject: TestPrepSubject;
    unit: TestPrepUnit;
  } | null>(null);

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
    const pdfData = getUnitPdf(subject.id, unit.unitNumber);
    if (pdfData) {
      setActivePdfModal({
        subject,
        unit,
        pdfData,
        viewMode: 'html'
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
              <p className="text-sm font-bold text-zinc-700">Koi subject ya unit match nahi hua</p>
              <p className="text-xs text-zinc-400 mt-1">Apna search query ya category filter clear karke check karein.</p>
            </div>
          ) : (
            filteredSubjects.map(subject => {
              const isExpanded = expandedSubjectIds.has(subject.id) || Boolean(searchQuery);
              const visual = getTestPrepSubjectVisual(subject.id);

              return (
                <div
                  key={subject.id}
                  className="bg-white rounded-3xl border border-zinc-200/90 shadow-xs overflow-hidden transition-all duration-200 hover:border-zinc-300"
                >
                  {/* Subject Accordion Header Card (Exact AP Notes Image 1 Design) */}
                  <button
                    onClick={() => toggleSubject(subject.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-zinc-50/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                      {/* Subject 3D Gradient Icon Badge (Matches AP Notes Image 1) */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 bg-gradient-to-br ${visual.gradient} text-white shadow-md shadow-zinc-950/10`}>
                        {visual.icon}
                      </div>
                      
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-black text-zinc-900 truncate">
                          {subject.name}
                        </h3>
                        {visual.description && (
                          <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 truncate hidden sm:block">
                            {visual.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 text-zinc-400">
                      <span className="text-xs sm:text-sm font-bold text-zinc-500">
                        {subject.units.length} Units
                      </span>
                      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-zinc-700' : ''}`} />
                    </div>
                  </button>

                  {/* Expanded Units List (Exact Screenshot 2 Design) */}
                  {isExpanded && (
                    <div className="border-t border-zinc-100 p-3 sm:p-4 bg-zinc-50/20 flex flex-col gap-2">
                      {subject.units.map(unit => {
                        const unitPdf = getUnitPdf(subject.id, unit.unitNumber);
                        const pdfUploaded = Boolean(unitPdf);
                        const isFullCourse = unit.unitNumber === 0;

                        return (
                          <div
                            key={unit.unitNumber}
                            onClick={() => handleUnitClick(subject, unit)}
                            className="w-full bg-white border border-zinc-200/80 hover:border-indigo-400 hover:bg-indigo-50/20 py-3.5 px-4 rounded-2xl flex items-center justify-between transition-all cursor-pointer group shadow-2xs"
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
                                <p className="text-[11px] text-zinc-500 font-medium truncate mt-0.5">
                                  {unit.weight} {unit.concepts ? `• ${unit.concepts}` : ''}
                                </p>
                              </div>
                            </div>

                            {/* Right Action */}
                            <div className="flex items-center gap-2 shrink-0">
                              <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
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
      {/* 3. MODAL: UPLOADED PDF VIEWER & ACTIONS (When PDF is available)           */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activePdfModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-zinc-950/60 backdrop-blur-sm animate-fade-in">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl border border-zinc-200 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="px-5 py-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50/80">
                <div className="min-w-0 pr-3">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <span>{getTestPrepSubjectVisual(activePdfModal.subject.id).icon}</span>
                      <span>{activePdfModal.subject.name}</span>
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-current text-amber-500" />
                      Priority-Starred Master Set
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-zinc-900 truncate">
                    {activePdfModal.unit.unitNumber === 0
                      ? activePdfModal.unit.title
                      : `Unit ${activePdfModal.unit.unitNumber}: ${activePdfModal.unit.title}`}
                  </h2>
                </div>

                <button
                  onClick={() => setActivePdfModal(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200/70 hover:bg-zinc-300 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer shrink-0"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Action Toolbar */}
              <div className="px-5 py-2.5 border-b border-zinc-200 bg-white flex items-center justify-between gap-2 flex-wrap">
                {/* View Switcher: HTML Master View vs Raw PDF */}
                <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl">
                  <button
                    onClick={() => setActivePdfModal(prev => prev ? { ...prev, viewMode: 'html' } : null)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activePdfModal.viewMode === 'html'
                        ? 'bg-white text-indigo-600 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3 h-3" />
                      <span>Interactive Master View</span>
                    </span>
                  </button>
                  <button
                    onClick={() => setActivePdfModal(prev => prev ? { ...prev, viewMode: 'pdf' } : null)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activePdfModal.viewMode === 'pdf'
                        ? 'bg-white text-indigo-600 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3 h-3" />
                      <span>PDF Document</span>
                    </span>
                  </button>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2">
                  <a
                    href={activePdfModal.pdfData.pdfUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-xl shadow-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF ({activePdfModal.pdfData.pageCount} Pages)</span>
                  </a>

                  <a
                    href={activePdfModal.pdfData.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-xl transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Full Screen</span>
                  </a>
                </div>
              </div>

              {/* Priority Stars Breakdown Banner */}
              {activePdfModal.pdfData.priorityStars && (
                <div className="px-5 py-2 bg-gradient-to-r from-amber-50 via-indigo-50 to-teal-50 border-b border-zinc-200/80 flex items-center justify-between text-xs gap-2 flex-wrap">
                  <span className="font-bold text-zinc-700">
                    ⭐ Priority Breakdown:
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold text-[11px]">
                      ★★★★★ Very Important ({activePdfModal.pdfData.priorityStars.star5} Qs)
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 font-bold text-[11px]">
                      ★★★ Mandatory ({activePdfModal.pdfData.priorityStars.star3} Qs)
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-teal-100 text-teal-800 font-bold text-[11px]">
                      ★★ Important ({activePdfModal.pdfData.priorityStars.star2} Qs)
                    </span>
                  </div>
                </div>
              )}

              {/* Iframe Preview Container */}
              <div className="flex-1 bg-zinc-100 relative overflow-hidden">
                <iframe
                  src={
                    activePdfModal.viewMode === 'html' && activePdfModal.pdfData.htmlUrl
                      ? activePdfModal.pdfData.htmlUrl
                      : activePdfModal.pdfData.pdfUrl
                  }
                  title="Unit Master Practice Set"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 4. MODAL: COMING SOON (When PDF is NOT uploaded yet)                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {comingSoonModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-xs animate-fade-in">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl border border-zinc-200 relative"
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
                <b className="text-zinc-700">{comingSoonModal.subject.name} · Unit {comingSoonModal.unit.unitNumber}: {comingSoonModal.unit.title}</b> ka Master Practice Set &amp; Short Notes PDF abhi upload nahi hua hai. Jald hi upload kar diya jayega!
              </p>

              <button
                onClick={() => {
                  triggerVibration(10);
                  setComingSoonModal(null);
                }}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors cursor-pointer active:scale-95"
              >
                Theek Hai / Got It
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
