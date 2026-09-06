import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  FileText, 
  Download, 
  Eye, 
  Search, 
  Calendar, 
  Sparkles, 
  BookOpen, 
  X,
  Share2,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { triggerVibration } from '../utils/vibrate';
import { showToast } from '../utils/toast';
import { APSamplePaper } from '../types/samplePapers';
import { fetchSamplePapers } from '../services/samplePaperService';
import SafePdfViewer from './SafePdfViewer';
import { TOP_10_AP_SUBJECTS } from '../utils/apCurriculum';
import { savePDFMobile } from '../utils/mobileSaver';

interface APSamplePapersProps {
  onBack: () => void;
  isVip?: boolean;
}

export default function APSamplePapers({ onBack, isVip }: APSamplePapersProps) {
  const [papers, setPapers] = useState<APSamplePaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewPaper, setPreviewPaper] = useState<APSamplePaper | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    loadPapers();
    const handleUpdate = () => loadPapers();
    window.addEventListener('sample-papers-updated', handleUpdate);
    return () => window.removeEventListener('sample-papers-updated', handleUpdate);
  }, []);

  const loadPapers = async () => {
    setLoading(true);
    const data = await fetchSamplePapers();
    setPapers(data);
    setLoading(false);
  };

  const handleDownloadPaper = async (paper: APSamplePaper) => {
    if (downloadingId) return; // Prevent duplicate rapid clicks
    triggerVibration(15);
    setDownloadingId(paper.id);
    try {
      const fileName = paper.fileName || `${paper.title.replace(/\s+/g, '_')}.pdf`;
      await savePDFMobile(paper.pdfUrl, fileName, {
        featureTag: 'AP Sample Papers Set',
        customToast: '✅ Saved offline in app'
      });
    } catch (e: any) {
      showToast('Download failed: ' + (e.message || e), 'error');
    } finally {
      setTimeout(() => setDownloadingId(null), 800);
    }
  };

  const filteredPapers = papers.filter(p => {
    const matchesSubject = selectedSubjectFilter === 'All' || p.subjectId === selectedSubjectFilter || p.subjectName === selectedSubjectFilter;
    const q = searchQuery.toLowerCase();
    const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.subjectName.toLowerCase().includes(q) || (p.year && p.year.includes(q));
    return matchesSubject && matchesQuery;
  });

  return (
    <div className="h-full flex flex-col bg-[#FAF9F6] relative overflow-hidden font-sans select-none">
      {/* Top Header */}
      <header className="px-5 py-3.5 flex items-center justify-between border-b border-zinc-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              triggerVibration(10);
              onBack();
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950 active:scale-95 transition-transform cursor-pointer"
            title="Go Back"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md">
                AP® EXAM
              </span>
              <h1 className="font-black text-zinc-900 text-sm tracking-tight">
                AP Sample Papers Set
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Scroll Content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 max-w-4xl w-full mx-auto flex flex-col gap-5">
        {/* Banner Hero */}
        <div className="shrink-0 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white shadow-lg shadow-emerald-700/20 relative overflow-hidden min-h-[135px] flex flex-col justify-center">
          {/* Subtle glowing watermark icon in background */}
          <div className="absolute -right-3 -bottom-5 text-white/10 text-8xl pointer-events-none select-none font-black">
            📑
          </div>
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white shadow-2xs">
                📑 Official Curriculum Sets
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">
              AP Sample Papers Set
            </h2>
            <p className="text-xs sm:text-sm text-emerald-50 font-medium max-w-xl leading-relaxed">
              Official authentic AP practice examination papers, question sets, and scoring guides prepared for full test rehearsal.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="shrink-0 flex flex-col gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sample papers by title, subject or year..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 text-xs font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 shadow-xs"
            />
          </div>

          {/* Subject Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {['All', ...TOP_10_AP_SUBJECTS.map(s => s.name)].map(filterName => (
              <button
                key={filterName}
                onClick={() => {
                  triggerVibration(10);
                  setSelectedSubjectFilter(filterName);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  selectedSubjectFilter === filterName
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                {filterName}
              </button>
            ))}
          </div>
        </div>

        {/* Papers List / Clean Blank State */}
        {loading ? (
          <div className="py-16 text-center flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-bold text-zinc-400">Loading AP Sample Papers...</span>
          </div>
        ) : filteredPapers.length === 0 ? (
          /* Blank State as requested by user */
          <div className="py-12 px-6 rounded-3xl bg-white border border-zinc-200/80 text-center flex flex-col items-center justify-center shadow-xs">
            <div className="w-16 h-16 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-3xl mb-4 shadow-inner">
              📑
            </div>
            <h3 className="text-lg font-black text-zinc-900 tracking-tight">
              AP Sample Papers Set
            </h3>
            <p className="text-xs text-zinc-500 font-medium max-w-sm mt-1.5 leading-relaxed">
              Official College Board sample question paper sets and mock exams will appear here once published.
            </p>
            <div className="mt-5 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-500 text-[11px] font-bold">
              Ready for upcoming mock sets
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3.5">
            {filteredPapers.map(paper => (
              <motion.div
                key={paper.id}
                whileHover={{ scale: 1.005 }}
                className="p-5 rounded-3xl bg-white border border-zinc-200/80 hover:border-emerald-300 shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                    📄
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-md">
                        {paper.subjectName}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded">
                        {paper.year}
                      </span>
                      <span className="text-[10px] text-zinc-400">
                        {paper.fileSize}
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-zinc-900 leading-snug">
                      {paper.title}
                    </h4>

                    {paper.description && (
                      <p className="text-xs text-zinc-500 font-medium mt-1 line-clamp-2">
                        {paper.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center w-full sm:w-auto">
                  <button
                    onClick={() => {
                      triggerVibration(10);
                      setPreviewPaper(paper);
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View PDF</span>
                  </button>

                  <button
                    onClick={() => handleDownloadPaper(paper)}
                    disabled={downloadingId === paper.id}
                    className={`p-2.5 rounded-xl border font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                      downloadingId === paper.id
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                        : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200 active:scale-95'
                    }`}
                    title="Download & Save Offline"
                  >
                    {downloadingId === paper.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Download className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Full-Screen PDF Reader Modal */}
      <AnimatePresence>
        {previewPaper && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-5">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-4xl h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-zinc-200"
            >
              {/* Header */}
              <div className="p-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
                <div className="flex items-center gap-2.5 truncate">
                  <FileText className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-zinc-900 truncate">
                      {previewPaper.title}
                    </h3>
                    <span className="text-[10px] text-zinc-500 font-bold">
                      {previewPaper.subjectName} • {previewPaper.year}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownloadPaper(previewPaper)}
                    disabled={downloadingId === previewPaper.id}
                    className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 cursor-pointer shadow-xs active:scale-95 transition-all disabled:opacity-50"
                    title="Download & Save Offline"
                  >
                    {downloadingId === previewPaper.id ? (
                      <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                    ) : (
                      <Download className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => setPreviewPaper(null)}
                    className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 cursor-pointer shadow-xs"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden relative bg-zinc-100">
                <SafePdfViewer pdfUrlOrBase64={previewPaper.pdfUrl} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
