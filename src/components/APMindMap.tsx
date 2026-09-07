import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, Eye, EyeOff, ChevronDown, ChevronUp, 
  AlertTriangle, Search,
  CheckCircle2, RotateCcw,
  FileDown, Loader2, X, CheckCircle, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerVibration } from '../utils/vibrate';
import { AP_BIOLOGY_MIND_MAPS } from '../data/mindmaps/apBiologyMindMap';
import { APUnitMindMap, MindMapBranch, MindMapLeafNode } from '../data/mindmaps/types';
import { exportMindMapPDF } from '../utils/mindMapPdfExporter';
import { safeGetItem, safeSetItem } from '../utils/storage';
import SafePdfViewer from './SafePdfViewer';
import GlobalMarkdown from './GlobalMarkdown';

interface APMindMapProps {
  onBack: () => void;
  isVip?: boolean;
}

// Organic Pastel Color Themes for Branch Styling
const BRANCH_THEMES: Record<string, {
  branchBg: string;
  branchBorder: string;
  branchText: string;
  badgeBg: string;
  badgeText: string;
  cardBg: string;
  cardBorder: string;
  accent: string;
}> = {
  rose: {
    branchBg: 'bg-[#FFE4E6]',
    branchBorder: 'border-[#FDA4AF]',
    branchText: 'text-[#9F1239]',
    badgeBg: 'bg-[#FECDD3] text-[#881337]',
    badgeText: 'text-[#881337]',
    cardBg: 'bg-[#FFF1F2]',
    cardBorder: 'border-[#FECDD3]',
    accent: '#E11D48',
  },
  amber: {
    branchBg: 'bg-[#FFEDD5]',
    branchBorder: 'border-[#FDBA74]',
    branchText: 'text-[#9A3412]',
    badgeBg: 'bg-[#FED7AA] text-[#7C2D12]',
    badgeText: 'text-[#7C2D12]',
    cardBg: 'bg-[#FFF7ED]',
    cardBorder: 'border-[#FED7AA]',
    accent: '#EA580C',
  },
  emerald: {
    branchBg: 'bg-[#D1FAE5]',
    branchBorder: 'border-[#6EE7B7]',
    branchText: 'text-[#065F46]',
    badgeBg: 'bg-[#A7F3D0] text-[#064E3B]',
    badgeText: 'text-[#064E3B]',
    cardBg: 'bg-[#ECFDF5]',
    cardBorder: 'border-[#A7F3D0]',
    accent: '#059669',
  },
  purple: {
    branchBg: 'bg-[#EDE9FE]',
    branchBorder: 'border-[#C4B5FD]',
    branchText: 'text-[#5B21B6]',
    badgeBg: 'bg-[#DDD6FE] text-[#4C1D95]',
    badgeText: 'text-[#4C1D95]',
    cardBg: 'bg-[#FAF5FF]',
    cardBorder: 'border-[#DDD6FE]',
    accent: '#7C3AED',
  },
  blue: {
    branchBg: 'bg-[#E0F2FE]',
    branchBorder: 'border-[#7DD3FC]',
    branchText: 'text-[#075985]',
    badgeBg: 'bg-[#BAE6FD] text-[#0C4A6E]',
    badgeText: 'text-[#0C4A6E]',
    cardBg: 'bg-[#F0F9FF]',
    cardBorder: 'border-[#BAE6FD]',
    accent: '#0284C7',
  },
  indigo: {
    branchBg: 'bg-[#E0E7FF]',
    branchBorder: 'border-[#A5B4FC]',
    branchText: 'text-[#3730A3]',
    badgeBg: 'bg-[#C7D2FE] text-[#312E81]',
    badgeText: 'text-[#312E81]',
    cardBg: 'bg-[#EEF2FF]',
    cardBorder: 'border-[#C7D2FE]',
    accent: '#4F46E5',
  },
};

export default function APMindMap({ onBack }: APMindMapProps) {
  const [selectedUnitNumber, setSelectedUnitNumber] = useState<number>(1);
  const [activeRecallMode, setActiveRecallMode] = useState<boolean>(false);
  const [revealedNodeIds, setRevealedNodeIds] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [collapsedBranchIds, setCollapsedBranchIds] = useState<Set<string>>(new Set());
  const [showCramSheet, setShowCramSheet] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [selectedNodeForModal, setSelectedNodeForModal] = useState<{
    node: MindMapLeafNode;
    branch: MindMapBranch;
  } | null>(null);

  const [masteredNodeIds, setMasteredNodeIds] = useState<Set<string>>(() => {
    try {
      const stored = safeGetItem('ap_mindmap_mastered_ids', '[]');
      return new Set(JSON.parse(stored || '[]'));
    } catch {
      return new Set();
    }
  });

  const [fullScreenPdfData, setFullScreenPdfData] = useState<{ 
    uri: string; 
    title: string; 
    unitNumber: number; 
  } | null>(null);

  const currentUnit: APUnitMindMap = useMemo(() => {
    return AP_BIOLOGY_MIND_MAPS.find(u => u.unitNumber === selectedUnitNumber) || AP_BIOLOGY_MIND_MAPS[0];
  }, [selectedUnitNumber]);

  useEffect(() => {
    try {
      safeSetItem('ap_mindmap_mastered_ids', JSON.stringify(Array.from(masteredNodeIds)));
    } catch (e) {
      console.error(e);
    }
  }, [masteredNodeIds]);

  const toggleMastery = (nodeId: string) => {
    triggerVibration(15);
    setMasteredNodeIds(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  const filteredBranches = useMemo(() => {
    if (!searchQuery.trim()) return currentUnit.branches;
    const q = searchQuery.toLowerCase();
    return currentUnit.branches
      .map(branch => {
        const matchesBranch = branch.title.toLowerCase().includes(q) || branch.subtitle?.toLowerCase().includes(q);
        const matchedChildren = branch.children.filter(
          child => child.title.toLowerCase().includes(q) || child.detail.toLowerCase().includes(q)
        );
        if (matchesBranch) return branch;
        if (matchedChildren.length > 0) {
          return { ...branch, children: matchedChildren };
        }
        return null;
      })
      .filter((b): b is MindMapBranch => b !== null);
  }, [currentUnit, searchQuery]);

  const totalUnitConcepts = useMemo(() => {
    return currentUnit.branches.reduce((acc, b) => acc + b.children.length, 0);
  }, [currentUnit]);

  const masteredInCurrentUnit = useMemo(() => {
    let count = 0;
    currentUnit.branches.forEach(b => {
      b.children.forEach(c => {
        if (masteredNodeIds.has(c.id)) count++;
      });
    });
    return count;
  }, [currentUnit, masteredNodeIds]);

  const toggleBranch = (branchId: string) => {
    triggerVibration(10);
    setCollapsedBranchIds(prev => {
      const next = new Set(prev);
      if (next.has(branchId)) {
        next.delete(branchId);
      } else {
        next.add(branchId);
      }
      return next;
    });
  };

  const toggleNodeReveal = (nodeId: string) => {
    triggerVibration(15);
    setRevealedNodeIds(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  const resetActiveRecall = () => {
    triggerVibration(15);
    setRevealedNodeIds(new Set());
  };

  const handleExportPDF = async () => {
    if (isExporting) return;
    setIsExporting(true);
    triggerVibration(20);

    try {
      const result = await exportMindMapPDF(currentUnit);
      if (result.success && result.dataUri) {
        triggerVibration(30);
        setFullScreenPdfData({
          uri: result.dataUri,
          title: `Unit ${currentUnit.unitNumber}: ${currentUnit.unitTitle} (Detailed Concept Tree)`,
          unitNumber: currentUnit.unitNumber,
        });
      } else {
        alert(result.error || 'Could not export Detailed Tree PDF.');
      }
    } catch (err: any) {
      console.error('Detailed Tree PDF export error:', err);
      alert('PDF Export Error: ' + (err?.message || 'Please try again'));
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#FAF7F2] text-zinc-900 font-sans select-none overflow-hidden">
      <header className="shrink-0 bg-white/95 backdrop-blur-md border-b border-[#E9E4DC] px-3.5 sm:px-5 py-2.5 z-30 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              triggerVibration(10);
              onBack();
            }}
            className="w-9 h-9 rounded-2xl bg-[#F4EFEA] hover:bg-[#EAE3DA] active:scale-95 border border-[#DFD8CE] flex items-center justify-center text-zinc-700 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                AP BIOLOGY
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-black text-zinc-950 tracking-tight">
              Unit Revision
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              triggerVibration(20);
              setActiveRecallMode(prev => !prev);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border active:scale-95 ${
              activeRecallMode
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-xs'
                : 'bg-white text-zinc-700 border-[#DFD8CE] hover:bg-[#FAF7F2]'
            }`}
          >
            {activeRecallMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5 text-purple-600" />}
            <span className="hidden sm:inline">Recall</span>
          </button>

          <button
            onClick={() => {
              triggerVibration(10);
              setShowCramSheet(prev => !prev);
            }}
            className={`p-2 rounded-2xl border transition-all cursor-pointer active:scale-95 ${
              showCramSheet 
                ? 'bg-amber-100 border-amber-300 text-amber-900' 
                : 'bg-white border-[#DFD8CE] text-zinc-700 hover:bg-[#FAF7F2]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
          </button>

          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-black bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-xs transition-all cursor-pointer active:scale-95 disabled:opacity-50"
          >
            {isExporting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <FileDown className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">PDF</span>
          </button>
        </div>
      </header>

      <div className="shrink-0 bg-white/70 backdrop-blur-xs border-b border-[#ECE6DD] px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="w-full sm:w-80 relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search mechanisms, formulas, CED topics..."
            className="w-full pl-8 pr-3 py-1.5 bg-[#FAF7F2] border border-[#E3DCD2] rounded-xl text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-purple-500 shadow-2xs"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          {activeRecallMode && (
            <button
              onClick={resetActiveRecall}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-purple-100 text-purple-800 text-xs font-bold hover:bg-purple-200 transition-colors border border-purple-200 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Mask All</span>
            </button>
          )}


          <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-lg border border-emerald-200">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            <span>{masteredInCurrentUnit}/{totalUnitConcepts} Mastered</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-thin">
        <div className="max-w-4xl mx-auto space-y-5 pb-10">
          <div className="bg-white rounded-3xl border border-[#DFD8CE] p-5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                CED BIG IDEA
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                {currentUnit.examWeight}
              </span>
            </div>
            <h2 className="text-xl font-black text-zinc-950">
              Unit {currentUnit.unitNumber}: {currentUnit.unitTitle}
            </h2>
            <div className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
              <GlobalMarkdown>{currentUnit.coreBigIdea}</GlobalMarkdown>
            </div>
          </div>

          {filteredBranches.map((branch) => {
            const theme = BRANCH_THEMES[branch.colorTheme] || BRANCH_THEMES.blue;
            const isCollapsed = collapsedBranchIds.has(branch.id);

            return (
              <div 
                key={branch.id} 
                className="bg-white rounded-3xl border border-[#DFD8CE] shadow-2xs overflow-hidden"
              >
                <div 
                  onClick={() => toggleBranch(branch.id)}
                  className={`p-4 flex items-center justify-between cursor-pointer ${theme.branchBg} border-b border-[#EADFCF]`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      {branch.cedTopicRef && (
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${theme.badgeBg}`}>
                          {branch.cedTopicRef}
                        </span>
                      )}
                      <span className="text-xs font-bold text-zinc-600 font-mono">
                        {branch.children.length} Key Concepts
                      </span>
                    </div>
                    <h3 className={`text-base font-bold ${theme.branchText} mt-1`}>
                      {branch.title}
                    </h3>
                    {branch.subtitle && (
                      <p className="text-xs text-zinc-600 font-medium">
                        {branch.subtitle}
                      </p>
                    )}
                  </div>

                  <button 
                    type="button"
                    className="w-8 h-8 rounded-full bg-white border border-[#DFD8CE] flex items-center justify-center text-zinc-600 shadow-2xs cursor-pointer"
                  >
                    {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  </button>
                </div>

                {!isCollapsed && (
                  <div className="p-4 sm:p-5 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {branch.children.map((node) => {
                        const isRevealed = revealedNodeIds.has(node.id);
                        const isMasked = activeRecallMode && !isRevealed;
                        const isMastered = masteredNodeIds.has(node.id);

                        return (
                          <div
                            key={node.id}
                            onClick={() => {
                              if (activeRecallMode && !isRevealed) {
                                toggleNodeReveal(node.id);
                              } else {
                                setSelectedNodeForModal({ node, branch });
                              }
                            }}
                            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                              isMasked
                                ? 'bg-zinc-100 border-purple-200'
                                : `${theme.cardBg} ${theme.cardBorder} hover:shadow-xs`
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <div className="font-bold text-xs sm:text-sm text-zinc-900">
                                <GlobalMarkdown components={{ p: ({ node: _n, ...props }: any) => <span {...props} /> }}>
                                  {node.title}
                                </GlobalMarkdown>
                              </div>
                              {isMastered && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                            </div>

                            {isMasked ? (
                              <div className="py-3 text-center text-xs font-bold text-purple-700">
                                Tap to Recall Mechanism
                              </div>
                            ) : (
                              <div className="space-y-2">
                                <div className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                                  <GlobalMarkdown components={{ p: ({ node: _n, ...props }: any) => <p className="text-xs text-zinc-600 leading-relaxed my-0" {...props} /> }}>
                                    {node.detail}
                                  </GlobalMarkdown>
                                </div>

                                {node.formulaLatex && (
                                  <div className="p-2 rounded-xl bg-white/80 border border-indigo-100 text-[11px] text-indigo-900">
                                    <GlobalMarkdown>
                                      {`$$${node.formulaLatex}$$`}
                                    </GlobalMarkdown>
                                  </div>
                                )}

                                {node.trapAlert && (
                                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-rose-600">
                                    <AlertTriangle className="w-3 h-3 shrink-0" />
                                    <span>AP Trap Alert Included</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {showCramSheet && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="fixed bottom-0 inset-x-0 z-40 bg-[#FEF3C7] border-t-2 border-[#FDE68A] p-4 sm:p-5 shadow-xl max-h-[70vh] overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-amber-950">⚡ 60-SECOND HIGH-YIELD CRAM CHECKLIST</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                    Unit {currentUnit.unitNumber}
                  </span>
                </div>
                <button
                  onClick={() => setShowCramSheet(false)}
                  className="w-7 h-7 rounded-full bg-amber-200 hover:bg-amber-300 flex items-center justify-center text-amber-900 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentUnit.quickCramBullets.map((bullet, idx) => (
                  <div key={idx} className="bg-white/90 p-3 rounded-2xl border border-amber-200 text-xs text-amber-950 flex items-start gap-2 shadow-2xs">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                    <div className="leading-relaxed">
                      <GlobalMarkdown components={{ p: ({ node: _n, ...props }: any) => <span {...props} /> }}>
                        {bullet}
                      </GlobalMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedNodeForModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl border border-[#DFD8CE] shadow-2xl p-5 sm:p-6 max-h-[85vh] overflow-y-auto space-y-4"
            >
              <div className="flex items-start justify-between gap-3 border-b border-[#F0EAE1] pb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {selectedNodeForModal.branch.cedTopicRef && (
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md bg-purple-100 text-purple-900">
                        {selectedNodeForModal.branch.cedTopicRef}
                      </span>
                    )}
                    {selectedNodeForModal.node.badge && (
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-200">
                        {selectedNodeForModal.node.badgeLabel || selectedNodeForModal.node.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-zinc-950">
                    <GlobalMarkdown components={{ p: ({ node: _n, ...props }: any) => <span {...props} /> }}>
                      {selectedNodeForModal.node.title}
                    </GlobalMarkdown>
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedNodeForModal(null)}
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3.5">
                <div>
                  <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Biological Mechanism & Concept
                  </h5>
                  <div className="text-xs sm:text-sm text-zinc-700 leading-relaxed bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#ECE6DD]">
                    <GlobalMarkdown>
                      {selectedNodeForModal.node.detail}
                    </GlobalMarkdown>
                  </div>
                </div>

                {selectedNodeForModal.node.formulaLatex && (
                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs font-mono font-bold text-indigo-950">
                    <div className="text-[10px] uppercase tracking-wider text-indigo-600 mb-1.5 font-sans">
                      Official AP Formula
                    </div>
                    <div className="overflow-x-auto py-1">
                      <GlobalMarkdown>
                        {`$$${selectedNodeForModal.node.formulaLatex}$$`}
                      </GlobalMarkdown>
                    </div>
                  </div>
                )}

                {selectedNodeForModal.node.trapAlert && (
                  <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-1">
                    <strong className="text-rose-700 flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Common AP Exam Trap</span>
                    </strong>
                    <div className="leading-relaxed">
                      <GlobalMarkdown>
                        {selectedNodeForModal.node.trapAlert}
                      </GlobalMarkdown>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between gap-3">
                <button
                  onClick={() => toggleMastery(selectedNodeForModal.node.id)}
                  className={`flex-1 py-2.5 px-4 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                    masteredNodeIds.has(selectedNodeForModal.node.id)
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {masteredNodeIds.has(selectedNodeForModal.node.id) ? 'Mastered!' : 'Mark as Mastered'}
                  </span>
                </button>

                <button
                  onClick={() => setSelectedNodeForModal(null)}
                  className="px-4 py-2.5 rounded-2xl text-xs font-bold text-zinc-600 bg-zinc-100 hover:bg-zinc-200 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {fullScreenPdfData && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
          <header className="px-4 py-3 bg-zinc-900 text-white flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-2.5 min-w-0">
              <button
                onClick={() => setFullScreenPdfData(null)}
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center cursor-pointer active:scale-95"
                title="Close Viewer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="truncate">
                <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-300 mr-2">
                  PDF Preview
                </span>
                <span className="text-xs sm:text-sm font-bold text-zinc-100">
                  Unit {fullScreenPdfData.unitNumber}: {fullScreenPdfData.title}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  triggerVibration(15);
                  const a = document.createElement('a');
                  a.href = fullScreenPdfData.uri;
                  a.download = `AP_Biology_Unit_${fullScreenPdfData.unitNumber}_Detailed_MindMap.pdf`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold cursor-pointer active:scale-95 shadow-xs"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Download</span>
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-hidden bg-zinc-900">
            <SafePdfViewer pdfUrlOrBase64={fullScreenPdfData.uri} />
          </div>
        </div>
      )}
    </div>
  );
}

