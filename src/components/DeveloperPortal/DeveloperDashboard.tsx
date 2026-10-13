import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Upload,
  FileText,
  Trash2,
  Eye,
  LogOut,
  CheckCircle,
  Layers,
  FileUp,
  Sparkles,
  Plus,
  X,
  ChevronDown,
  AlertCircle,
  ArrowLeft,
  BookOpen,
  Hash
} from 'lucide-react';
import { 
  ALL_TEST_PREP_SUBJECTS, 
  TestPrepSubject, 
  TestPrepUnit, 
  UploadedUnitPdf, 
  getTestPrepSubjectVisual 
} from '../../data/testPrepUnitsData';
import { 
  uploadUnitPdfToApp, 
  deleteUnitPdfFromApp, 
  getPublishedUnitPdfsList, 
  StoredUnitPdfRecord,
  initUnitPdfsSync 
} from '../../services/unitPdfService';
import { showToast } from '../../utils/toast';
import { triggerVibration } from '../../utils/vibrate';
import { Capacitor } from '@capacitor/core';
import { pickNativeFiles } from '../../utils/mobilePicker';
import SafePdfViewer from '../SafePdfViewer';

interface DeveloperDashboardProps {
  onLogout: () => void;
}

export default function DeveloperDashboard({ onLogout }: DeveloperDashboardProps) {
  const [papers, setPapers] = useState<StoredUnitPdfRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showUploadSheet, setShowUploadSheet] = useState(false);

  // Form State
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(ALL_TEST_PREP_SUBJECTS[0].id);
  const [selectedUnitNumber, setSelectedUnitNumber] = useState<number>(1);
  const [title, setTitle] = useState('');
  const [pageCount, setPageCount] = useState<string>('85');
  const [totalQuestions, setTotalQuestions] = useState<string>('100');
  const [mcqCount, setMcqCount] = useState<string>('90');
  const [frqCount, setFrqCount] = useState<string>('10');
  const [description, setDescription] = useState('');
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');

  // Preview State
  const [previewPaper, setPreviewPaper] = useState<StoredUnitPdfRecord | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Active Subject Object
  const currentSubject = ALL_TEST_PREP_SUBJECTS.find(s => s.id === selectedSubjectId) || ALL_TEST_PREP_SUBJECTS[0];

  useEffect(() => {
    loadPapers();
  }, []);

  const loadPapers = async () => {
    setLoading(true);
    try {
      await initUnitPdfsSync();
      const data = await getPublishedUnitPdfsList();
      setPapers(data);
    } catch (e) {
      console.warn('Failed to load published papers:', e);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPdfBase64(null);
    setFileName('');
    setFileSize('');
    setPageCount('85');
    setTotalQuestions('100');
    setMcqCount('90');
    setFrqCount('10');
    setSelectedSubjectId(ALL_TEST_PREP_SUBJECTS[0].id);
    setSelectedUnitNumber(1);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubjectChange = (newSubjectId: string) => {
    setSelectedSubjectId(newSubjectId);
    const subj = ALL_TEST_PREP_SUBJECTS.find(s => s.id === newSubjectId);
    if (subj && subj.units.length > 0) {
      // Default to unit 1 if present, else first unit
      const u1 = subj.units.find(u => u.unitNumber === 1);
      setSelectedUnitNumber(u1 ? 1 : subj.units[0].unitNumber);
    } else {
      setSelectedUnitNumber(0);
    }
  };

  const autoFillFromFileName = (rawName: string) => {
    const clean = rawName.replace(/\.pdf$/i, '').replace(/[_-]+/g, ' ').trim();
    const lower = clean.toLowerCase();

    // 1. Detect AP Subject
    let matchedSubject = ALL_TEST_PREP_SUBJECTS.find(s => {
      const code = s.code.toLowerCase();
      const sName = s.name.toLowerCase();
      return lower.includes(code) || lower.includes(sName);
    });

    if (!matchedSubject) {
      matchedSubject = ALL_TEST_PREP_SUBJECTS.find(s => {
        if (s.id.includes('calc-ab') && (lower.includes('calc ab') || lower.includes('calculus ab'))) return true;
        if (s.id.includes('calc-bc') && (lower.includes('calc bc') || lower.includes('calculus bc'))) return true;
        if (s.id.includes('stat') && (lower.includes('stat') || lower.includes('statistics'))) return true;
        if (s.id.includes('phys') && lower.includes('phys')) return true;
        if (s.id.includes('chem') && lower.includes('chem')) return true;
        if (s.id.includes('bio') && lower.includes('bio')) return true;
        if (s.id.includes('enviro') && (lower.includes('enviro') || lower.includes('apes') || lower.includes('environmental'))) return true;
        if (s.id.includes('human') && (lower.includes('human') || lower.includes('geog') || lower.includes('aphg'))) return true;
        if (s.id.includes('psych') && lower.includes('psych')) return true;
        if (s.id.includes('us-history') && (lower.includes('ush') || lower.includes('us history') || lower.includes('apush'))) return true;
        if (s.id.includes('world') && (lower.includes('world') || lower.includes('whap'))) return true;
        if (s.id.includes('econ') && (lower.includes('econ') || lower.includes('macro') || lower.includes('micro'))) return true;
        if (s.id.includes('computer-science-principles') && (lower.includes('csp') || lower.includes('principles'))) return true;
        if (s.id.includes('computer-science') && (lower.includes('csa') || lower.includes('java') || lower.includes('comp sci'))) return true;
        if (s.id.includes('english-lang') && (lower.includes('lang') || lower.includes('english'))) return true;
        return false;
      });
    }

    const targetSubject = matchedSubject || currentSubject;
    if (matchedSubject) {
      setSelectedSubjectId(matchedSubject.id);
    }

    // 2. Detect Unit Number
    let detectedUnit = 1;
    const unitMatch = lower.match(/(?:unit|u)[\s_-]*([0-9]+)/i);
    if (unitMatch && unitMatch[1]) {
      detectedUnit = parseInt(unitMatch[1], 10);
    } else if (lower.includes('full') || lower.includes('mock') || lower.includes('final') || lower.includes('exam')) {
      detectedUnit = 0;
    }
    setSelectedUnitNumber(detectedUnit);

    // 3. Auto-populate Clean Descriptive Title
    const unitObj = targetSubject.units.find(u => u.unitNumber === detectedUnit);
    const unitTitle = unitObj ? unitObj.title : (detectedUnit === 0 ? 'Full Course Comprehensive Exam' : `Unit ${detectedUnit}`);
    const generatedTitle = `${targetSubject.name} – Unit ${detectedUnit}: ${unitTitle} (Priority-Starred Master Set)`;
    setTitle(generatedTitle);
  };

  const handlePickPdfClick = async () => {
    triggerVibration(10);
    if (Capacitor.isNativePlatform()) {
      try {
        const picked = await pickNativeFiles({ types: 'pdf', multiple: false });
        if (picked && picked.length > 0) {
          const item = picked[0];
          setFileName(item.name);
          const sizeKb = item.blob ? Math.round(item.blob.size / 1024) : 0;
          const sizeFormatted = sizeKb > 1024 ? `${(sizeKb / 1024).toFixed(2)} MB` : `${sizeKb || 1} KB`;
          setFileSize(sizeFormatted);
          setPdfBase64(item.dataUrl);
          autoFillFromFileName(item.name);
          showToast(`Attached ${item.name} (${sizeFormatted})`, 'success');
          return;
        }
      } catch (err) {
        console.warn('Native picker fallback to input element:', err);
      }
    }
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
      showToast('Please select a valid PDF file.', 'warning');
      return;
    }
    const sizeFormatted = file.size > 1024 * 1024
      ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      : `${Math.round(file.size / 1024)} KB`;
    setFileName(file.name);
    setFileSize(sizeFormatted);
    autoFillFromFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setPdfBase64(reader.result as string);
      showToast(`Selected ${file.name} (${sizeFormatted})`, 'success');
    };
    reader.onerror = () => showToast('Failed to read PDF file', 'error');
    reader.readAsDataURL(file);
  };

  const handlePublishPaper = async (e: React.FormEvent) => {
    e.preventDefault();
    triggerVibration(15);
    if (!title.trim()) { showToast('Please enter a paper title.', 'warning'); return; }
    if (!pdfBase64) { showToast('Please attach an AP PDF file first.', 'warning'); return; }

    const subjectObj = ALL_TEST_PREP_SUBJECTS.find(s => s.id === selectedSubjectId) || ALL_TEST_PREP_SUBJECTS[0];
    const unitObj = subjectObj.units.find(u => u.unitNumber === selectedUnitNumber);
    
    setUploading(true);
    try {
      const qCount = Number(totalQuestions) || 100;
      const pCount = Number(pageCount) || 85;
      const mCount = Number(mcqCount) || 90;
      const fCount = Number(frqCount) || 10;

      const newRecord = await uploadUnitPdfToApp(
        subjectObj.id,
        selectedUnitNumber,
        subjectObj.name,
        {
          pdfUrl: pdfBase64,
          title: title.trim(),
          pageCount: pCount,
          totalQuestions: qCount,
          mcqCount: mCount,
          frqCount: fCount,
          priorityStars: {
            star5: Math.round(qCount * 0.45),
            star3: Math.round(qCount * 0.35),
            star2: Math.round(qCount * 0.20),
          },
          uploadedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
          description: description.trim() || `${subjectObj.name} · Unit ${selectedUnitNumber}: ${unitObj?.title || 'Practice Examination'} – Official College Board Format.`,
        }
      );

      setPapers(prev => [newRecord, ...prev.filter(p => p.key !== newRecord.key)]);
      showToast(`Published to AP Sample Paper Sets: ${subjectObj.name} Unit ${selectedUnitNumber}!`, 'success');
      resetForm();
      setShowUploadSheet(false);
    } catch (err: any) {
      showToast('Failed to publish paper: ' + (err.message || err), 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleDeletePaper = async (subjectId: string, unitNumber: number, paperTitle: string) => {
    triggerVibration(15);
    try {
      await deleteUnitPdfFromApp(subjectId, unitNumber);
      const key = `${subjectId}-${unitNumber}`;
      setPapers(prev => prev.filter(p => p.key !== key));
      showToast(`Removed "${paperTitle}" from AP Sample Paper Sets`, 'info');
    } catch (err: any) {
      showToast('Failed to delete paper: ' + (err.message || err), 'error');
    }
  };

  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100 flex flex-col font-sans select-none">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="hidden"
        id="dev-pdf-file-input"
      />

      {/* ── Sticky Header ── */}
      <header className="px-4 py-3 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center font-black text-base">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm font-black text-white tracking-tight">Dev Command Center</h1>
              <span className="text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
                Owner
              </span>
            </div>
            <p className="text-[10px] text-zinc-500 font-medium truncate max-w-[180px]">
              sanjeetkumar803108@gmail.com
            </p>
          </div>
        </div>
        <button
          onClick={() => { triggerVibration(10); onLogout(); }}
          className="px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer"
        >
          <LogOut className="w-3 h-3" />
          <span>Exit</span>
        </button>
      </header>

      {/* ── Scrollable Main Content ── */}
      <main className="flex-1 p-4 flex flex-col gap-4 pb-28">

        {/* Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950 via-zinc-900 to-zinc-900 border border-indigo-800/40 shadow-xl">
          <div className="flex items-center gap-1.5 text-indigo-400 text-[10px] font-black uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AP Sample Paper Sets Engine</span>
          </div>
          <h2 className="text-lg font-black text-white leading-tight">
            Manage & Publish AP Sample Paper Sets
          </h2>
          <p className="text-[11px] text-zinc-400 font-medium mt-1 leading-relaxed">
            Upload PDFs here → they instantly appear inside the student app's <strong className="text-zinc-200">AP Sample Paper Sets</strong> feature mapped directly to the chosen AP Subject and Unit.
          </p>
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <div className="inline-flex px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-bold">
              Custom Uploaded Sets: <strong className="ml-1 text-white">{papers.length}</strong>
            </div>
            <div className="inline-flex px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-bold">
              Supported AP Courses: <strong className="ml-1 text-white">{ALL_TEST_PREP_SUBJECTS.length}</strong>
            </div>
          </div>
        </div>

        {/* ── Upload CTA Card ── */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={() => { triggerVibration(15); setShowUploadSheet(true); }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 border border-indigo-500/50 shadow-lg shadow-indigo-700/30 p-5 cursor-pointer flex items-center gap-4"
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
            <Plus className="w-7 h-7 text-white stroke-[2.5]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <FileUp className="w-3.5 h-3.5 text-indigo-200" />
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-200">Upload to AP Sample Paper Sets</span>
            </div>
            <h3 className="text-base font-black text-white">Upload Unit / Mock PDF</h3>
            <p className="text-[11px] text-indigo-200 font-medium mt-0.5">
              Tap to attach PDF → Goes live in student app instantly
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <ChevronDown className="w-4 h-4 text-white -rotate-90" />
          </div>
        </motion.div>

        {/* ── Published Papers List ── */}
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm font-black text-white">Live Published Unit Sets</h3>
            </div>
            <button
              onClick={loadPapers}
              className="text-[11px] font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <div className="py-10 text-center text-xs text-zinc-500 font-bold flex flex-col items-center gap-2">
              <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              Loading published sets...
            </div>
          ) : papers.length === 0 ? (
            <div className="py-10 text-center flex flex-col items-center gap-2 px-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-2xl">
                📄
              </div>
              <h4 className="text-sm font-bold text-zinc-400">No Custom Unit Sets Uploaded Yet</h4>
              <p className="text-[11px] text-zinc-600 max-w-xs">
                Tap the upload card above to upload a PDF directly into any AP Subject and Unit!
              </p>
            </div>
          ) : (
            <div className="divide-y divide-zinc-800">
              {papers.map((paper) => {
                const visual = getTestPrepSubjectVisual(paper.subjectId);
                return (
                  <div key={paper.key} className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 text-xl">
                      {visual.icon || '📄'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap mb-1">
                        <span className="text-[9px] font-black uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.5 rounded">
                          {paper.subjectName || paper.subjectId}
                        </span>
                        <span className="text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                          {paper.unitNumber === 0 ? 'Full Course Exam' : `Unit ${paper.unitNumber}`}
                        </span>
                        <span className="text-[9px] text-zinc-400 font-medium">
                          {paper.pdfData.pageCount} Pages • {paper.pdfData.totalQuestions} Qs
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white leading-snug line-clamp-2">
                        {paper.pdfData.title}
                      </h4>
                      {paper.pdfData.description && (
                        <p className="text-[10px] text-zinc-400 line-clamp-1 mt-0.5">
                          {paper.pdfData.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => setPreviewPaper(paper)}
                          className="px-2.5 py-1 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white font-bold text-[10px] flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3 h-3" />
                          Preview
                        </button>
                        <button
                          onClick={() => handleDeletePaper(paper.subjectId, paper.unitNumber, paper.pdfData.title)}
                          className="px-2.5 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 font-bold text-[10px] flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* ── Floating Upload FAB ── */}
      <div className="fixed bottom-6 right-6 z-30">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => { triggerVibration(15); setShowUploadSheet(true); }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-600/40 flex items-center justify-center cursor-pointer border border-indigo-400/30"
        >
          <Plus className="w-7 h-7 text-white stroke-[2.5]" />
        </motion.button>
      </div>

      {/* ── Upload Bottom Sheet ── */}
      <AnimatePresence>
        {showUploadSheet && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { if (!uploading) setShowUploadSheet(false); }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-t-[2rem] overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1 rounded-full bg-zinc-600" />
              </div>

              {/* Sheet Header */}
              <div className="px-5 pb-3 pt-1 flex items-center justify-between border-b border-zinc-800 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <Upload className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white">Upload to AP Sample Paper Sets</h3>
                    <p className="text-[10px] text-zinc-500">Goes live immediately in the student app</p>
                  </div>
                </div>
                {!uploading && (
                  <button
                    onClick={() => setShowUploadSheet(false)}
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Scrollable Form */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <form onSubmit={handlePublishPaper} className="p-5 flex flex-col gap-4 pb-10">

                  {/* PDF Pick Zone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">
                      📎 Attach PDF File <span className="text-red-400">*</span>
                    </label>
                    <div
                      onClick={handlePickPdfClick}
                      className={`border-2 border-dashed rounded-2xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                        pdfBase64
                          ? 'border-emerald-500/60 bg-emerald-500/10'
                          : 'border-zinc-700 hover:border-indigo-500 bg-zinc-800/40'
                      }`}
                    >
                      {pdfBase64 ? (
                        <div className="flex items-center justify-between w-full px-1">
                          <div className="flex items-center gap-2.5">
                            <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
                            <div className="text-left min-w-0">
                              <div className="text-xs font-black text-white truncate max-w-[160px]">{fileName}</div>
                              <div className="text-[10px] text-emerald-400 font-bold">PDF Ready • {fileSize}</div>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-zinc-400 underline shrink-0">Change</span>
                        </div>
                      ) : (
                        <>
                          <div className="w-12 h-12 rounded-2xl bg-zinc-700/80 border border-zinc-600 flex items-center justify-center">
                            <Plus className="w-6 h-6 text-zinc-400" />
                          </div>
                          <div className="text-xs font-bold text-zinc-300 text-center">Tap to Select PDF File</div>
                          <div className="text-[10px] text-zinc-500">Standard .pdf file up to 50MB</div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">📚 AP Subject</label>
                    <select
                      value={selectedSubjectId}
                      onChange={(e) => handleSubjectChange(e.target.value)}
                      className="bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
                    >
                      {ALL_TEST_PREP_SUBJECTS.map(s => {
                        const visual = getTestPrepSubjectVisual(s.id);
                        return (
                          <option key={s.id} value={s.id} className="bg-zinc-900 text-white">
                            {visual.icon} {s.name} ({s.code})
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {/* Unit Selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">🎯 Select Unit / Scope</label>
                    <select
                      value={selectedUnitNumber}
                      onChange={(e) => setSelectedUnitNumber(Number(e.target.value))}
                      className="bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
                    >
                      {/* Check if subject has unit 0, else provide default Unit 0 */}
                      {!currentSubject.units.some(u => u.unitNumber === 0) && (
                        <option value={0} className="bg-zinc-900 text-white">
                          Unit 0: Full Course Mixed Exam (Comprehensive)
                        </option>
                      )}
                      {currentSubject.units.map(u => (
                        <option key={u.unitNumber} value={u.unitNumber} className="bg-zinc-900 text-white">
                          {u.unitNumber === 0 ? 'Full Course Exam' : `Unit ${u.unitNumber}`}: {u.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Title */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">
                      📝 Set Title <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. AP Calculus AB – Unit 1: Limits & Continuity"
                      className="bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 text-xs font-semibold text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  {/* Page Count + Total Questions */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">📄 Pages</label>
                      <input
                        type="number"
                        min="1"
                        value={pageCount}
                        onChange={(e) => setPageCount(e.target.value)}
                        placeholder="85"
                        className="bg-zinc-800 border border-zinc-700 rounded-2xl px-3 py-3 text-xs font-semibold text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">❓ Total Questions</label>
                      <input
                        type="number"
                        min="1"
                        value={totalQuestions}
                        onChange={(e) => setTotalQuestions(e.target.value)}
                        placeholder="100"
                        className="bg-zinc-800 border border-zinc-700 rounded-2xl px-3 py-3 text-xs font-semibold text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* MCQ + FRQ Count */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">🔘 MCQs Count</label>
                      <input
                        type="number"
                        min="0"
                        value={mcqCount}
                        onChange={(e) => setMcqCount(e.target.value)}
                        placeholder="90"
                        className="bg-zinc-800 border border-zinc-700 rounded-2xl px-3 py-3 text-xs font-semibold text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">✍️ FRQs Count</label>
                      <input
                        type="number"
                        min="0"
                        value={frqCount}
                        onChange={(e) => setFrqCount(e.target.value)}
                        placeholder="10"
                        className="bg-zinc-800 border border-zinc-700 rounded-2xl px-3 py-3 text-xs font-semibold text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Description / Notes */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">💬 Description / Notes</label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g. 100-Question Priority-Starred Examination Repository with scoring rubrics."
                      className="bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 text-xs font-semibold text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  {/* Publish Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={uploading || !pdfBase64}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed mt-1"
                  >
                    {uploading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Publishing to Student App...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Publish to AP Sample Paper Sets</span>
                      </>
                    )}
                  </motion.button>

                  {!pdfBase64 && (
                    <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-bold justify-center">
                      <AlertCircle className="w-3 h-3" />
                      Attach a PDF file to enable publish
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── 100% Edge-to-Edge Full-Screen PDF Preview ── */}
      <AnimatePresence>
        {previewPaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex flex-col bg-zinc-950 w-full h-full overflow-hidden select-text"
          >
            <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between bg-zinc-900 shrink-0 z-20">
              <div className="flex items-center gap-2.5 truncate">
                <button
                  onClick={() => setPreviewPaper(null)}
                  className="w-8 h-8 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                  title="Close"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 truncate">
                  <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-sm font-black text-white truncate">{previewPaper.pdfData.title}</span>
                </div>
              </div>
              <button
                onClick={() => setPreviewPaper(null)}
                className="w-8 h-8 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden bg-zinc-100/90 relative">
              <SafePdfViewer pdfUrlOrBase64={previewPaper.pdfData.pdfUrl} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
