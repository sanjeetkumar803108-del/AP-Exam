import React, { useState } from 'react';
import { 
  BookOpen, Brain, Calculator, AlertTriangle, Zap, CheckCircle2, 
  HelpCircle, XCircle, ChevronDown, ChevronUp, Lightbulb, 
  School, Check, Bookmark, Donut, User, Sparkles
} from 'lucide-react';
import { triggerVibration } from '../utils/vibrate';

interface APCalculusABStitchNotesProps {
  onBack?: () => void;
  unitNumber?: number;
  onExportPdf?: () => void;
  isExporting?: boolean;
}

export default function APCalculusABStitchNotes({ onBack, unitNumber = 1, onExportPdf, isExporting }: APCalculusABStitchNotesProps) {
  const [activeSubTab, setActiveSubTab] = useState<'theorems' | 'methods' | 'examples' | 'exam-traps' | 'cram-sheet'>('theorems');
  
  // Drill states
  const [theoremsDrillAnswer, setTheoremsDrillAnswer] = useState<boolean | null>(null);
  const [methodsQuizAnswer, setMethodsQuizAnswer] = useState<boolean | null>(null);
  const [examplesQuizAnswer, setExamplesQuizAnswer] = useState<boolean | null>(null);
  const [expandAllSteps, setExpandAllSteps] = useState<boolean>(true);
  const [speedDrillComplete, setSpeedDrillComplete] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const switchTab = (tab: 'theorems' | 'methods' | 'examples' | 'exam-traps' | 'cram-sheet') => {
    triggerVibration(10);
    setActiveSubTab(tab);
  };

  return (
    <div className="w-full flex flex-col bg-[#faf9fa] text-[#1b1c1d] font-sans select-none min-h-full pb-20">
      {/* Sub-Navigation Navigation Bar (Stitch 5-Path Bar) */}
      <div className="sticky top-0 z-30 bg-[#faf9fa]/95 backdrop-blur-md border-b border-[#c3c6d5]/40 px-2 py-1.5 flex items-center justify-around shadow-xs">
        <button
          onClick={() => switchTab('theorems')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
            activeSubTab === 'theorems'
              ? 'text-[#094cb2] font-black bg-[#d9e2ff]/50'
              : 'text-[#434653] hover:text-[#1b1c1d] font-semibold'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">menu_book</span>
          <span className="text-[10px] tracking-tight uppercase mt-0.5">Theorems</span>
        </button>

        <button
          onClick={() => switchTab('methods')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
            activeSubTab === 'methods'
              ? 'text-[#094cb2] font-black bg-[#d9e2ff]/50'
              : 'text-[#434653] hover:text-[#1b1c1d] font-semibold'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">psychology</span>
          <span className="text-[10px] tracking-tight uppercase mt-0.5">Methods</span>
        </button>

        <button
          onClick={() => switchTab('examples')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
            activeSubTab === 'examples'
              ? 'text-[#094cb2] font-black bg-[#d9e2ff]/50'
              : 'text-[#434653] hover:text-[#1b1c1d] font-semibold'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">calculate</span>
          <span className="text-[10px] tracking-tight uppercase mt-0.5">Examples</span>
        </button>

        <button
          onClick={() => switchTab('exam-traps')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
            activeSubTab === 'exam-traps'
              ? 'text-[#ba1a1a] font-black bg-[#ffdad6]/50'
              : 'text-[#434653] hover:text-[#1b1c1d] font-semibold'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">warning</span>
          <span className="text-[10px] tracking-tight uppercase mt-0.5">Exam Traps</span>
        </button>

        <button
          onClick={() => switchTab('cram-sheet')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
            activeSubTab === 'cram-sheet'
              ? 'text-[#6d5e00] font-black bg-[#f9e37a]/50'
              : 'text-[#434653] hover:text-[#1b1c1d] font-semibold'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">bolt</span>
          <span className="text-[10px] tracking-tight uppercase mt-0.5">Cram Sheet</span>
        </button>
      </div>

      <div className="w-full px-3.5 sm:px-5 pt-3 pb-8 space-y-6">
        {/* ========================================================================= */}
        {/* TAB 1: THEOREMS                                                           */}
        {/* ========================================================================= */}
        {activeSubTab === 'theorems' && (
          <div className="space-y-6">
            {/* Editorial Hero Banner */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#172554] text-white p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-bold tracking-wide bg-[#fef08a] text-[#713f12]">
                    CALC AB • UNIT {unitNumber}
                  </span>
                  <span className="text-[11px] font-bold text-blue-200 uppercase tracking-wider flex items-center gap-1">
                    <School className="w-3.5 h-3.5 text-blue-200" />
                    College Board AP
                  </span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                  Limits and Continuity
                </h1>
                <p className="text-xs sm:text-sm text-white/90 font-serif leading-relaxed max-w-2xl pt-1">
                  Limits describe the localized behavior of functions near a point rather than at the point, laying the rigorous analytical foundation for continuity and differential calculus.
                </p>
              </div>
            </div>

            {/* Section 1: Intermediate Value Theorem */}
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold text-[#1b1c1d] flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e9e8e9] text-xs font-bold text-[#1b1c1d]">1</span>
                  Intermediate Value Theorem
                </h2>
                <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-[#e9e8e9] text-[#434653]">IVT</span>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4 border border-[#c3c6d5]/30">
                <div className="space-y-3">
                  <div className="bg-[#f5f3f4] rounded-xl p-3.5 space-y-1.5 border border-[#c3c6d5]/30">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#5a5f63] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#094cb2]"></span>Strict Hypothesis
                    </span>
                    <p className="text-xs text-[#1b1c1d] leading-relaxed">
                      <span className="italic font-serif text-[#094cb2] font-semibold text-sm">f(x)</span> must be <strong className="text-[#1b1c1d] font-bold">continuous</strong> on the closed interval <span className="px-2 py-0.5 bg-[#e9e8e9] rounded border border-[#c3c6d5]/40 font-serif text-xs text-[#1b1c1d] font-medium">[<span className="italic">a</span>, <span className="italic">b</span>]</span>.
                    </p>
                  </div>

                  <div className="bg-[#f5f3f4] rounded-xl p-3.5 space-y-2 border border-[#c3c6d5]/30">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#5a5f63] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6d5e00]"></span>Guaranteed Conclusion
                    </span>
                    <p className="text-xs text-[#1b1c1d] leading-relaxed">
                      For any target value <span className="italic font-serif text-[#094cb2] font-semibold text-sm">d</span> strictly between <span className="italic font-serif text-xs font-medium">f(a)</span> and <span className="italic font-serif text-xs font-medium">f(b)</span>, there exists <strong className="font-bold text-[#1b1c1d]">at least one number <span className="italic font-serif font-normal">c</span></strong> in <span className="font-serif text-xs text-[#434653] font-medium">(<span className="italic">a</span>, <span className="italic">b</span>)</span> such that:
                    </p>
                    <div className="text-center py-2.5 px-4 bg-white rounded-xl border border-[#094cb2]/20 shadow-xs mt-2">
                      <span className="font-serif text-lg font-bold text-[#094cb2] tracking-wide"><span className="italic">f</span>(<span className="italic">c</span>) = <span className="italic">d</span></span>
                      <span className="block text-[10px] text-[#434653] mt-0.5 tracking-wider uppercase font-mono">d ∈ [f(a), f(b)] ⇒ ∃ c ∈ (a, b)</span>
                    </div>
                  </div>
                </div>

                {/* AP FRQ Tip Card */}
                <div className="bg-[#f9e37a]/30 rounded-xl p-3.5 space-y-1.5 border border-[#dcc661]/40">
                  <div className="flex items-center gap-1.5 text-[#524600]">
                    <CheckCircle2 className="w-4 h-4 text-[#6d5e00]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">AP Free-Response Scoring Rule</span>
                  </div>
                  <p className="text-xs text-[#524600] leading-relaxed">
                    On Free-Response Questions, you <strong className="underline decoration-[#6d5e00] underline-offset-2">must explicitly state</strong> that <span className="italic font-serif font-semibold">f</span> is continuous on <span className="font-serif font-medium">[<span className="italic">a</span>, <span className="italic">b</span>]</span> before invoking IVT. Missing this explicit sentence forfeits the justification point!
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Squeeze Theorem */}
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold text-[#1b1c1d] flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e9e8e9] text-xs font-bold text-[#1b1c1d]">2</span>
                  Squeeze (Sandwich) Theorem
                </h2>
                <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-[#e9e8e9] text-[#434653]">Bounds</span>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4 border border-[#c3c6d5]/30">
                <div className="space-y-3">
                  <div className="bg-[#f5f3f4] rounded-xl p-3.5 space-y-2 border border-[#c3c6d5]/30">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#5a5f63] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5a5f63]"></span>Ordering & Boundary Conditions
                    </span>
                    <p className="text-xs text-[#1b1c1d] leading-relaxed">
                      If <span className="font-serif text-xs font-semibold px-2 py-0.5 rounded bg-[#efedee]"><span className="italic">g</span>(<span className="italic">x</span>) ≤ <span className="italic">f</span>(<span className="italic">x</span>) ≤ <span className="italic">h</span>(<span className="italic">x</span>)</span> for all <span className="italic font-serif text-xs font-medium">x</span> on an open interval around <span className="italic font-serif text-xs font-medium">c</span> (except possibly at <span className="italic font-serif text-xs font-medium">c</span> itself), and:
                    </p>
                    <div className="grid grid-cols-2 gap-2 py-2 px-3 bg-white rounded-xl border border-[#c3c6d5]/40 mt-1">
                      <div className="text-center py-1 bg-[#f5f3f4] rounded border border-[#c3c6d5]/20">
                        <span className="font-serif text-xs font-semibold text-[#1b1c1d]">lim<sub className="text-[10px] font-sans text-[#434653] italic">x→c</sub> <span className="italic">g</span>(<span className="italic">x</span>) = <span className="font-bold">L</span></span>
                      </div>
                      <div className="text-center py-1 bg-[#f5f3f4] rounded border border-[#c3c6d5]/20">
                        <span className="font-serif text-xs font-semibold text-[#1b1c1d]">lim<sub className="text-[10px] font-sans text-[#434653] italic">x→c</sub> <span className="italic">h</span>(<span className="italic">x</span>) = <span className="font-bold">L</span></span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#d9e2ff]/25 rounded-xl p-3.5 text-center border border-[#094cb2]/20 space-y-0.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#094cb2] block">Trapped Limit Result</span>
                    <div className="font-serif text-lg font-bold text-[#094cb2] py-0.5">
                      lim<sub className="text-xs font-sans text-[#094cb2]/80 italic">x → c</sub> <span className="italic">f</span>(<span className="italic">x</span>) = L
                    </div>
                    <span className="text-[10px] text-[#434653] tracking-wide uppercase">sandwich squeeze guarantee</span>
                  </div>
                </div>

                {/* Canonical AP Exam Application */}
                <div className="bg-[#f5f3f4] rounded-xl p-3.5 space-y-1.5 border border-[#c3c6d5]/30">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#434653] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#6d5e00]" />
                    Canonical Exam Pattern: Oscillating Terms
                  </span>
                  <p className="text-xs text-[#434653] leading-relaxed">
                    Standard AP question: Show that <span className="font-serif text-xs bg-[#e3e2e3] px-1.5 py-0.5 rounded text-[#1b1c1d] font-semibold">lim<sub className="text-[9px] italic">x→0</sub> <span className="italic">x</span>² · sin(1/<span className="italic">x</span>) = 0</span>. Since <span className="font-serif text-xs font-medium">−1 ≤ sin(1/<span className="italic">x</span>) ≤ 1</span>, trap tightly by <span className="font-serif text-xs font-semibold px-1.5 py-0.5 rounded bg-[#efedee]">−<span className="italic">x</span>² ≤ <span className="italic">x</span>² sin(1/<span className="italic">x</span>) ≤ <span className="italic">x</span>²</span>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: 3-Part Continuity Test */}
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold text-[#1b1c1d] flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e9e8e9] text-xs font-bold text-[#1b1c1d]">3</span>
                  3-Part Continuity Test at x = c
                </h2>
                <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-[#d9e2ff] text-[#001946]">FRQ Checklist</span>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4 border border-[#c3c6d5]/30">
                <p className="text-xs text-[#434653]">
                  All three conditions must independently succeed. If a single step fails, the function is discontinuous at <span className="font-mono text-xs font-semibold">x = c</span>.
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f5f3f4] border border-[#c3c6d5]/20">
                    <div className="w-5 h-5 rounded-full bg-[#094cb2] flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold">1</div>
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold text-[#1b1c1d]">Point Defined</h3>
                        <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#efedee] text-[#434653] font-medium">Step I</span>
                      </div>
                      <p className="font-serif text-sm text-[#094cb2] font-semibold"><span className="italic">f</span>(<span className="italic">c</span>) is defined</p>
                      <p className="text-[11px] text-[#434653]">Value lies strictly within domain of <span className="italic font-serif">f</span>: <span className="font-serif font-medium text-xs"><span className="italic">c</span> ∈ dom(<span className="italic">f</span>)</span>.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f5f3f4] border border-[#c3c6d5]/20">
                    <div className="w-5 h-5 rounded-full bg-[#094cb2] flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold">2</div>
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold text-[#1b1c1d]">Limit Exists (Two-Sided)</h3>
                        <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#efedee] text-[#434653] font-medium">Step II</span>
                      </div>
                      <p className="font-serif text-sm text-[#094cb2] font-semibold">lim<sub className="text-[10px] italic">x→c</sub> <span className="italic">f</span>(<span className="italic">x</span>) exists</p>
                      <p className="text-[11px] text-[#434653]">Requires: <span className="font-serif text-xs px-1.5 py-0.5 bg-[#efedee] rounded">lim<sub className="text-[9px] italic">x→c⁻</sub> <span className="italic">f</span> = lim<sub className="text-[9px] italic">x→c⁺</sub> <span className="italic">f</span> = <span className="font-bold">L</span></span></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f5f3f4] border border-[#c3c6d5]/20">
                    <div className="w-5 h-5 rounded-full bg-[#094cb2] flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold">3</div>
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold text-[#1b1c1d]">Value Agreement</h3>
                        <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#efedee] text-[#434653] font-medium">Step III</span>
                      </div>
                      <p className="font-serif text-sm text-[#094cb2] font-semibold">lim<sub className="text-[10px] italic">x→c</sub> <span className="italic">f</span>(<span className="italic">x</span>) = <span className="italic">f</span>(<span className="italic">c</span>)</p>
                      <p className="text-[11px] text-[#434653]">The limiting behavior precisely equals the evaluated function value.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Special Limits & Asymptotes */}
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold text-[#1b1c1d] flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e9e8e9] text-xs font-bold text-[#1b1c1d]">4</span>
                  Essential Trig & Asymptotic Limits
                </h2>
                <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-[#e9e8e9] text-[#434653]">Memory Card</span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3 border border-[#c3c6d5]/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#094cb2] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">functions</span>
                      Fundamental Trig Limits
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#efedee] text-[#434653] font-medium border border-[#c3c6d5]/30">Radians Required</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-3 rounded-xl bg-[#f5f3f4] border border-[#c3c6d5]/20">
                      <div className="font-serif text-xs font-semibold text-[#1b1c1d]">
                        lim<sub className="text-[10px] italic">x→0</sub> (sin <span className="italic">x</span> / <span className="italic">x</span>)
                      </div>
                      <div className="text-xl font-serif font-bold text-[#094cb2] mt-1.5">= 1</div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#f5f3f4] border border-[#c3c6d5]/20">
                      <div className="font-serif text-xs font-semibold text-[#1b1c1d]">
                        lim<sub className="text-[10px] italic">x→0</sub> (1 − cos <span className="italic">x</span> / <span className="italic">x</span>)
                      </div>
                      <div className="text-xl font-serif font-bold text-[#094cb2] mt-1.5">= 0</div>
                    </div>
                  </div>

                  <div className="bg-[#f5f3f4]/70 rounded-xl p-2.5 border border-[#c3c6d5]/20 text-[11px] text-[#434653]">
                    <span className="font-bold uppercase tracking-wider text-[#5a5f63] text-[10px] block mb-1">Generalized Scaling Laws</span>
                    <span className="font-serif font-medium">lim<sub className="text-[9px] italic">x→0</sub> sin(<span className="italic">kx</span>)/<span className="italic">x</span> = <span className="italic font-bold text-[#094cb2]">k</span></span>
                    <span className="mx-2 text-[#c3c6d5]">•</span>
                    <span className="font-serif font-medium">lim<sub className="text-[9px] italic">x→0</sub> sin(<span className="italic">ax</span>)/sin(<span className="italic">bx</span>) = <span className="italic font-bold text-[#094cb2]">a/b</span></span>
                  </div>
                </div>

                {/* Asymptotes Card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3 border border-[#c3c6d5]/30">
                  <span className="text-xs font-bold text-[#1b1c1d] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#6d5e00]">swap_horiz</span>
                    Asymptotic Behavior Definitions
                  </span>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-[#f5f3f4] space-y-1.5 border border-[#c3c6d5]/20">
                      <div className="flex justify-between items-center">
                        <strong className="text-[11px] text-[#094cb2] uppercase tracking-wide">Horizontal Asymptote (HA)</strong>
                        <span className="font-serif text-xs font-bold px-2 py-0.5 rounded bg-[#efedee] border border-[#c3c6d5]/30 text-[#1b1c1d]"><span className="italic">y</span> = L</span>
                      </div>
                      <div className="font-serif text-xs text-[#1b1c1d] bg-white p-2 rounded-lg border border-[#c3c6d5]/30 flex items-center justify-around">
                        <span>lim<sub className="text-[9px] italic">x→∞</sub> <span className="italic">f</span> = <span className="font-bold text-[#094cb2]">L</span></span>
                        <span className="text-[#737784] font-sans">or</span>
                        <span>lim<sub className="text-[9px] italic">x→−∞</sub> <span className="italic">f</span> = <span className="font-bold text-[#094cb2]">L</span></span>
                      </div>
                      <span className="text-[10px] text-[#434653] block">Rational shortcut: Compare degree of numerator deg(P) vs denominator deg(Q).</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#f5f3f4] space-y-1.5 border border-[#c3c6d5]/20">
                      <div className="flex justify-between items-center">
                        <strong className="text-[11px] text-[#094cb2] uppercase tracking-wide">Vertical Asymptote (VA)</strong>
                        <span className="font-serif text-xs font-bold px-2 py-0.5 rounded bg-[#efedee] border border-[#c3c6d5]/30 text-[#1b1c1d]"><span className="italic">x</span> = c</span>
                      </div>
                      <div className="font-serif text-xs text-[#1b1c1d] bg-white p-2 rounded-lg border border-[#c3c6d5]/30 text-center">
                        <span>lim<sub className="text-[9px] italic">x→c±</sub> <span className="italic">f</span>(<span className="italic">x</span>) = <span className="font-bold text-[#ba1a1a]">±∞</span></span>
                      </div>
                      <span className="text-[10px] text-[#434653] block">Occurs where denominator is zero and numerator is non-zero after cancelation.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Drill: Moment of Delight */}
            <div className="bg-gradient-to-br from-white via-[#efedee] to-[#f5f3f4] rounded-2xl p-4.5 shadow-sm space-y-3 border border-[#c3c6d5]/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#094cb2] text-[20px]">quiz</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1b1c1d]">Instant Recall Challenge</span>
                </div>
                <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-[#f9e37a] text-[#524600] font-bold">10-Sec Drill</span>
              </div>
              <p className="text-xs text-[#1b1c1d]">
                Does <span className="font-serif text-xs font-semibold px-1.5 py-0.5 rounded bg-[#e3e2e3]"><span className="italic">f</span>(<span className="italic">x</span>) = 1/<span className="italic">x</span></span> satisfy the conditions for the Intermediate Value Theorem on <span className="font-serif text-xs font-semibold px-1.5 py-0.5 rounded bg-[#e3e2e3]">[−1, 2]</span>?
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    triggerVibration(10);
                    setTheoremsDrillAnswer(true);
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    theoremsDrillAnswer === true
                      ? 'bg-[#ffdad6] text-[#93000a] border border-[#ba1a1a]/30'
                      : 'bg-white hover:bg-[#094cb2] hover:text-white border border-[#c3c6d5]/40 text-[#1b1c1d]'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    triggerVibration(10);
                    setTheoremsDrillAnswer(false);
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    theoremsDrillAnswer === false
                      ? 'bg-[#f9e37a] text-[#524600] border border-[#dcc661]'
                      : 'bg-white hover:bg-[#094cb2] hover:text-white border border-[#c3c6d5]/40 text-[#1b1c1d]'
                  }`}
                >
                  No
                </button>
              </div>

              {theoremsDrillAnswer !== null && (
                <div className={`text-xs rounded-xl p-3 space-y-1 ${
                  !theoremsDrillAnswer
                    ? 'bg-[#f9e37a]/40 text-[#524600] border border-[#dcc661]/50'
                    : 'bg-[#ffdad6] text-[#93000a] border border-[#ba1a1a]/30'
                }`}>
                  {!theoremsDrillAnswer ? (
                    <>
                      <div className="flex items-center gap-1 font-bold text-[11px] uppercase text-[#6d5e00]">
                        <CheckCircle2 className="w-4 h-4 text-[#6d5e00]" /> Correct!
                      </div>
                      <div>f(x) has an essential discontinuity (vertical asymptote) at x = 0, which lies inside [-1, 2]. IVT strictly requires continuity across the entire closed interval!</div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-1 font-bold text-[11px] uppercase text-[#ba1a1a]">
                        <XCircle className="w-4 h-4 text-[#ba1a1a]" /> Incorrect
                      </div>
                      <div>Look closely: f(0) is undefined, violating the non-negotiable hypothesis that f must be continuous on [-1, 2].</div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: METHODS (Classification & SVGs)                                    */}
        {/* ========================================================================= */}
        {activeSubTab === 'methods' && (
          <div className="space-y-6">
            {/* Interactive Navigation & Context Bar */}
            <div className="px-4 py-3 bg-[#f5f3f4] rounded-2xl flex items-center justify-between border border-[#c3c6d5]/30">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wide uppercase bg-[#d9e2ff] text-[#001946]">
                  CED 1.10 – 1.15
                </span>
                <span className="text-xs text-[#434653] font-medium">Visual Classification Guide</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#6d5e00]"></span>
                <span className="text-[11px] font-bold text-[#6d5e00] uppercase tracking-wider">AP Must-Know</span>
              </div>
            </div>

            {/* Editorial Intro & 3-Step Continuity Check */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 border border-[#c3c6d5]/30">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-serif font-bold text-lg text-[#1b1c1d] tracking-tight leading-snug">
                  The 3-Part Continuity Test
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-[#e9e8e9] text-[11px] font-bold text-[#094cb2] shrink-0">
                  Core Protocol
                </span>
              </div>
              <p className="text-xs text-[#434653] leading-relaxed">
                A function <span className="font-serif italic font-medium text-[#1b1c1d]">f(x)</span> is continuous at <span className="font-serif italic font-medium text-[#1b1c1d]">x = c</span> if and <strong className="text-[#1b1c1d]">only if all 3 checkpoints pass</strong>:
              </p>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#f5f3f4] rounded-xl p-2.5 flex flex-col justify-between border border-[#c3c6d5]/20">
                  <div className="flex items-center gap-1 text-[#094cb2] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Step 1</span>
                  </div>
                  <p className="text-xs font-bold text-[#1b1c1d] leading-tight font-serif"><span className="italic font-normal">f</span>(<span className="italic font-normal">c</span>) Defined</p>
                  <span className="text-[10px] text-[#434653] mt-1">Finite point exists</span>
                </div>

                <div className="bg-[#f5f3f4] rounded-xl p-2.5 flex flex-col justify-between border border-[#c3c6d5]/20">
                  <div className="flex items-center gap-1 text-[#094cb2] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Step 2</span>
                  </div>
                  <p className="text-xs font-bold text-[#1b1c1d] leading-tight font-serif">lim<sub className="text-[9px] italic">x→c</sub> <span className="italic font-normal">f</span> Exists</p>
                  <span className="text-[10px] text-[#434653] mt-1">Left = Right limit</span>
                </div>

                <div className="bg-[#f5f3f4] rounded-xl p-2.5 flex flex-col justify-between border border-[#c3c6d5]/20">
                  <div className="flex items-center gap-1 text-[#094cb2] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Step 3</span>
                  </div>
                  <p className="text-xs font-bold text-[#1b1c1d] leading-tight font-serif">lim <span className="italic font-normal">f</span> = <span className="italic font-normal">f</span>(<span className="italic font-normal">c</span>)</p>
                  <span className="text-[10px] text-[#434653] mt-1">Limit matches value</span>
                </div>
              </div>
            </div>

            {/* Section Title */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#094cb2]">Anatomical Archetypes</span>
              <h3 className="font-serif font-bold text-base text-[#1b1c1d]">The 4 Major Discontinuity Figures</h3>
            </div>

            {/* SVG 1: Removable Discontinuity */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#c3c6d5]/30">
              <div className="p-3.5 bg-[#f5f3f4] flex items-center justify-between border-b border-[#c3c6d5]/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#094cb2]"></span>
                  <h4 className="font-serif text-sm font-bold text-[#1b1c1d]">1. Removable Discontinuity (Hole)</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#d9e2ff] text-[#001946]">Fixable</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-[#f5f3f4] rounded-xl p-3 flex flex-col items-center">
                  <svg className="w-full h-28 text-[#1b1c1d] select-none" viewBox="0 0 320 120">
                    <line opacity="0.3" stroke="currentColor" strokeWidth="1.2" x1="24" x2="300" y1="104" y2="104"></line>
                    <line opacity="0.3" stroke="currentColor" strokeWidth="1.2" x1="40" x2="40" y1="112" y2="14"></line>
                    <text className="text-[10px] fill-[#434653]" x="306" y="108">x</text>
                    <text className="text-[10px] fill-[#434653]" x="36" y="12">y</text>
                    <line opacity="0.6" stroke="currentColor" strokeWidth="1.2" x1="160" x2="160" y1="100" y2="108"></line>
                    <text className="text-[10px] font-bold fill-[#1b1c1d]" x="157" y="118">c</text>
                    <line opacity="0.6" stroke="currentColor" strokeWidth="1.2" x1="36" x2="44" y1="44" y2="44"></line>
                    <text className="text-[10px] font-bold fill-[#094cb2]" x="24" y="47">L</text>
                    <line opacity="0.6" stroke="currentColor" strokeWidth="1.2" x1="36" x2="44" y1="80" y2="80"></line>
                    <text className="text-[10px] font-semibold fill-[#ba1a1a]" x="14" y="83">f(c)</text>
                    <line opacity="0.3" stroke="#094cb2" strokeDasharray="3,3" strokeWidth="1" x1="40" x2="160" y1="44" y2="44"></line>
                    <line opacity="0.2" stroke="currentColor" strokeDasharray="3,3" strokeWidth="1" x1="160" x2="160" y1="44" y2="104"></line>
                    <path d="M 50 82 Q 100 66 154 46" fill="none" stroke="#094cb2" strokeLinecap="round" strokeWidth="2.5"></path>
                    <path d="M 166 42 Q 220 28 280 18" fill="none" stroke="#094cb2" strokeLinecap="round" strokeWidth="2.5"></path>
                    <circle cx="160" cy="44" fill="#faf9fa" r="4.5" stroke="#094cb2" strokeWidth="2.5"></circle>
                    <circle cx="160" cy="80" fill="#ba1a1a" r="4"></circle>
                  </svg>
                  <div className="w-full flex items-center justify-between text-[11px] text-[#434653] pt-1 px-1">
                    <span>Left limit = Right limit = <strong className="text-[#094cb2]">L</strong></span>
                    <span>Point is isolated at <strong className="text-[#ba1a1a]">f(c) ≠ L</strong></span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#f5f3f4] flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-[#094cb2] uppercase block tracking-wider mb-1">Limit Status</span>
                    <div className="font-serif text-xs font-semibold text-[#1b1c1d]">
                      lim<sub className="text-[9px] italic">x→c</sub> <span className="italic">f</span> = <span className="text-[#094cb2] font-bold">L</span> (Exists)
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#f5f3f4] flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-[#ba1a1a] uppercase block tracking-wider mb-1">Failure Condition</span>
                    <div className="font-serif text-xs font-semibold text-[#1b1c1d]">
                      <span className="italic">f</span>(<span className="italic">c</span>) <span className="text-[#ba1a1a] font-bold">≠ L</span> or Undef
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#f5f3f4] flex items-start gap-2 border border-[#c3c6d5]/20">
                  <Lightbulb className="w-4 h-4 text-[#094cb2] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1b1c1d] leading-snug">
                    <strong className="font-bold text-[#094cb2]">AP Exam Insight:</strong> Called "Removable" because redefining just a single coordinate value <span className="font-serif italic font-medium bg-[#efedee] px-1.5 py-0.5 rounded text-[#094cb2]">f(c) = L</span> instantly heals continuity!
                  </p>
                </div>
              </div>
            </div>

            {/* SVG 2: Jump Discontinuity */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#c3c6d5]/30">
              <div className="p-3.5 bg-[#f5f3f4] flex items-center justify-between border-b border-[#c3c6d5]/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6d5e00]"></span>
                  <h4 className="font-serif text-sm font-bold text-[#1b1c1d]">2. Jump Discontinuity</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#f9e37a] text-[#524600]">Gap Exists</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-[#f5f3f4] rounded-xl p-3 flex flex-col items-center">
                  <svg className="w-full h-28 text-[#1b1c1d] select-none" viewBox="0 0 320 120">
                    <line opacity="0.3" stroke="currentColor" strokeWidth="1.2" x1="24" x2="300" y1="104" y2="104"></line>
                    <line opacity="0.3" stroke="currentColor" strokeWidth="1.2" x1="40" x2="40" y1="112" y2="14"></line>
                    <text className="text-[10px] fill-[#434653]" x="306" y="108">x</text>
                    <text className="text-[10px] fill-[#434653]" x="36" y="12">y</text>
                    <line opacity="0.6" stroke="currentColor" strokeWidth="1.2" x1="160" x2="160" y1="100" y2="108"></line>
                    <text className="text-[10px] font-bold fill-[#1b1c1d]" x="157" y="118">c</text>
                    <text className="text-[10px] font-bold fill-[#094cb2]" x="18" y="74">L₁</text>
                    <text className="text-[10px] font-bold fill-[#094cb2]" x="18" y="36">L₂</text>
                    <path d="M 50 82 L 154 72" fill="none" stroke="#094cb2" strokeLinecap="round" strokeWidth="2.5"></path>
                    <circle cx="158" cy="72" fill="#094cb2" r="4.5"></circle>
                    <circle cx="160" cy="34" fill="#faf9fa" r="4.5" stroke="#094cb2" strokeWidth="2.5"></circle>
                    <path d="M 166 33 L 280 20" fill="none" stroke="#094cb2" strokeLinecap="round" strokeWidth="2.5"></path>
                    <line stroke="#ba1a1a" strokeDasharray="2,2" strokeWidth="1" x1="178" x2="178" y1="36" y2="70"></line>
                    <text className="text-[10px] font-bold fill-[#ba1a1a]" x="184" y="56">Gap (Jump)</text>
                  </svg>
                  <div className="w-full flex items-center justify-between text-[11px] text-[#434653] pt-1 px-1 font-serif">
                    <span>Left: lim<sub className="text-[9px] italic">x→c⁻</sub> <span className="italic">f</span> = <strong className="text-[#094cb2]">L₁</strong></span>
                    <span>Right: lim<sub className="text-[9px] italic">x→c⁺</sub> <span className="italic">f</span> = <strong className="text-[#094cb2]">L₂</strong></span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#f5f3f4] flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-[#ba1a1a] uppercase block tracking-wider mb-1">Limit Status</span>
                    <div className="font-serif text-xs font-semibold text-[#1b1c1d]">
                      lim<sub className="text-[9px] italic">x→c</sub> <span className="italic">f</span> = <span className="font-bold text-[#ba1a1a]">DNE</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#f5f3f4] flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-[#6d5e00] uppercase block tracking-wider mb-1">Remediable?</span>
                    <div className="font-serif text-xs font-semibold text-[#1b1c1d]">
                      <span className="font-bold">NO</span> (Fixed Step Gap)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SVG 3: Infinite Discontinuity */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#c3c6d5]/30">
              <div className="p-3.5 bg-[#f5f3f4] flex items-center justify-between border-b border-[#c3c6d5]/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a]"></span>
                  <h4 className="font-serif text-sm font-bold text-[#1b1c1d]">3. Infinite Discontinuity (Asymptote)</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#ffdad6] text-[#93000a]">x = c (VA)</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-[#f5f3f4] rounded-xl p-3 flex flex-col items-center">
                  <svg className="w-full h-28 text-[#1b1c1d] select-none" viewBox="0 0 320 120">
                    <line opacity="0.3" stroke="currentColor" strokeWidth="1.2" x1="24" x2="300" y1="104" y2="104"></line>
                    <line opacity="0.3" stroke="currentColor" strokeWidth="1.2" x1="40" x2="40" y1="112" y2="14"></line>
                    <text className="text-[10px] fill-[#434653]" x="306" y="108">x</text>
                    <text className="text-[10px] fill-[#434653]" x="36" y="12">y</text>
                    <line stroke="#ba1a1a" strokeDasharray="4,3" strokeWidth="1.8" x1="160" x2="160" y1="14" y2="108"></line>
                    <text className="text-[10px] font-bold fill-[#ba1a1a]" x="164" y="24">VA: x = c</text>
                    <path d="M 50 82 Q 130 90 148 116" fill="none" stroke="#6d5e00" strokeLinecap="round" strokeWidth="2.5"></path>
                    <path d="M 172 16 Q 185 70 280 84" fill="none" stroke="#6d5e00" strokeLinecap="round" strokeWidth="2.5"></path>
                  </svg>
                  <div className="w-full flex items-center justify-between text-[11px] text-[#434653] pt-1 px-1 font-serif">
                    <span>Left: lim<sub className="text-[9px] italic">x→c⁻</sub> <span className="italic">f</span> = <strong className="text-[#ba1a1a]">−∞</strong></span>
                    <span>Right: lim<sub className="text-[9px] italic">x→c⁺</sub> <span className="italic">f</span> = <strong className="text-[#6d5e00]">+∞</strong></span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#f5f3f4] flex items-start gap-2 border border-[#c3c6d5]/20">
                  <AlertTriangle className="w-4 h-4 text-[#ba1a1a] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1b1c1d] leading-snug">
                    <strong className="font-bold text-[#ba1a1a]">Critical College Board Distinction:</strong> Even if both sides blow up to <span className="font-mono">+∞</span>, the limit does <em>not</em> equal a finite real number, so the limit technically <strong className="text-[#1b1c1d]">DNE</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* SVG 4: Sharp Corner / Cusp */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#c3c6d5]/30">
              <div className="p-3.5 bg-[#f5f3f4] flex items-center justify-between border-b border-[#c3c6d5]/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5a5f63]"></span>
                  <h4 className="font-serif text-sm font-bold text-[#1b1c1d]">4. Sharp Corner / Cusp (e.g. |x|)</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#e9e8e9] text-[#1b1c1d]">Continuous!</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-[#f5f3f4] rounded-xl p-3 flex flex-col items-center">
                  <svg className="w-full h-28 text-[#1b1c1d] select-none" viewBox="0 0 320 120">
                    <line opacity="0.3" stroke="currentColor" strokeWidth="1.2" x1="24" x2="300" y1="104" y2="104"></line>
                    <line opacity="0.3" stroke="currentColor" strokeWidth="1.2" x1="40" x2="40" y1="112" y2="14"></line>
                    <line opacity="0.6" stroke="currentColor" strokeWidth="1.2" x1="160" x2="160" y1="100" y2="108"></line>
                    <text className="text-[10px] font-bold fill-[#1b1c1d]" x="144" y="118">corner (c)</text>
                    <path d="M 60 30 L 160 96" fill="none" stroke="#094cb2" strokeLinecap="round" strokeWidth="2.5"></path>
                    <text className="text-[10px] font-bold fill-[#094cb2]" x="80" y="70">m = -1</text>
                    <path d="M 160 96 L 260 30" fill="none" stroke="#094cb2" strokeLinecap="round" strokeWidth="2.5"></path>
                    <text className="text-[10px] font-bold fill-[#094cb2]" x="215" y="70">m = +1</text>
                    <circle cx="160" cy="96" fill="#094cb2" r="4"></circle>
                  </svg>
                  <div className="w-full flex items-center justify-between text-[11px] text-[#434653] pt-1 px-1">
                    <span>Continuous: <strong className="text-[#094cb2]">Yes, unbroken pencil</strong></span>
                    <span>Differentiable: <strong className="text-[#ba1a1a]">No, slopes disagree</strong></span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#f9e37a]/30 flex items-start gap-2 border border-[#dcc661]/40">
                  <AlertTriangle className="w-4 h-4 text-[#6d5e00] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#524600] leading-snug">
                    <strong className="font-bold text-[#1b1c1d]">Unit 2 Trap:</strong> <em>"Continuity implies Differentiability"</em> is <strong>FALSE</strong>! A function can be smoothly joined without sharp holes, yet fail derivative existence at cusps.
                  </p>
                </div>
              </div>
            </div>

            {/* End Behavior Rules */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 border border-[#c3c6d5]/30">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#094cb2]">Rational End Behavior</span>
                <h3 className="font-serif font-bold text-base text-[#1b1c1d]">Horizontal Asymptote (HA) Rules</h3>
              </div>
              <p className="text-xs text-[#434653]">
                Let rational function <span className="font-mono text-[11px] bg-[#efedee] px-1.5 py-0.5 rounded">R(x) = P(x) / Q(x)</span> where <span className="italic font-serif">m = deg(P)</span> and <span className="italic font-serif">n = deg(Q)</span>:
              </p>

              <div className="space-y-2 pt-1">
                <div className="p-3 rounded-xl bg-[#f5f3f4] flex items-start justify-between gap-3 border border-[#c3c6d5]/20">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#d9e2ff] text-[#001946]">m &lt; n</span>
                    <span className="font-serif text-xs font-bold text-[#1b1c1d] ml-2">Bottom Heavy</span>
                    <p className="text-[11px] text-[#434653] mt-0.5">Denominator degree outgrows numerator: x → ±∞</p>
                  </div>
                  <span className="font-serif font-bold text-base text-[#094cb2]">y = 0</span>
                </div>

                <div className="p-3 rounded-xl bg-[#f5f3f4] flex items-start justify-between gap-3 border border-[#c3c6d5]/20">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#f9e37a] text-[#524600]">m = n</span>
                    <span className="font-serif text-xs font-bold text-[#1b1c1d] ml-2">Equal Degrees</span>
                    <p className="text-[11px] text-[#434653] mt-0.5">Ratio of leading coefficients: aₘ / bₙ</p>
                  </div>
                  <span className="font-serif font-bold text-sm text-[#6d5e00]">y = a/b</span>
                </div>

                <div className="p-3 rounded-xl bg-[#f5f3f4] flex items-start justify-between gap-3 border border-[#c3c6d5]/20">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#e9e8e9] text-[#1b1c1d]">m &gt; n</span>
                    <span className="font-serif text-xs font-bold text-[#1b1c1d] ml-2">Top Heavy</span>
                    <p className="text-[11px] text-[#434653] mt-0.5">Expands without bound (±∞ or slant asymptote)</p>
                  </div>
                  <span className="font-serif font-bold text-sm text-[#ba1a1a]">No HA</span>
                </div>
              </div>
            </div>

            {/* Rapid Memory Check */}
            <div className="bg-[#094cb2] text-white rounded-2xl p-4.5 shadow-md flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span className="font-serif text-sm font-bold tracking-wide">Rapid Memory Check</span>
                </div>
                <span className="text-[10px] font-bold uppercase bg-[#3366cc] px-2 py-0.5 rounded text-white font-mono">CED 1.12</span>
              </div>
              <p className="text-xs text-blue-100 leading-relaxed">
                If <span className="font-serif bg-[#3366cc] px-1.5 py-0.5 rounded text-white font-medium">lim<sub className="text-[9px] italic">x→3⁻</sub> f(x) = 5</span> and <span className="font-serif bg-[#3366cc] px-1.5 py-0.5 rounded text-white font-medium">lim<sub className="text-[9px] italic">x→3⁺</sub> f(x) = 5</span>, but <span className="font-serif italic bg-[#3366cc] px-1.5 py-0.5 rounded text-white font-medium">f(3) is undefined</span>, what type of discontinuity is this?
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    triggerVibration(10);
                    setMethodsQuizAnswer(false);
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                    methodsQuizAnswer === false
                      ? 'bg-[#ffdad6] text-[#93000a]'
                      : 'bg-white text-[#1b1c1d] hover:bg-zinc-100'
                  }`}
                >
                  <span>Jump</span>
                  <XCircle className="w-3.5 h-3.5 opacity-50" />
                </button>
                <button
                  onClick={() => {
                    triggerVibration(10);
                    setMethodsQuizAnswer(true);
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                    methodsQuizAnswer === true
                      ? 'bg-[#f9e37a] text-[#524600]'
                      : 'bg-white text-[#1b1c1d] hover:bg-zinc-100'
                  }`}
                >
                  <span>Removable</span>
                  <Check className="w-3.5 h-3.5 opacity-50" />
                </button>
              </div>

              {methodsQuizAnswer !== null && (
                <div className={`text-xs rounded-xl p-3 font-medium ${
                  methodsQuizAnswer
                    ? 'bg-[#3366cc] text-white border border-white/20'
                    : 'bg-[#ffdad6] text-[#93000a]'
                }`}>
                  {methodsQuizAnswer ? (
                    <div>🎉 <strong>Correct!</strong> Since left and right limits both equal 5, the two-sided limit exists! It is a hole (removable discontinuity) because f(3) is undefined.</div>
                  ) : (
                    <div>💡 <strong>Not quite!</strong> Both one-sided limits are equal (5), so there is no vertical jump gap. It is a removable hole.</div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: WORKED EXAMPLES                                                    */}
        {/* ========================================================================= */}
        {activeSubTab === 'examples' && (
          <div className="space-y-6">
            {/* Header Banner */}
            <div className="bg-[#f5f3f4] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#c3c6d5]/30">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wide bg-[#d9e2ff] text-[#001946]">
                    CED 1.6 – 1.16
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#737784] font-bold">Curated Solution Vault</span>
                </div>
                <p className="font-serif text-base font-bold text-[#1b1c1d]">Step-by-Step Exemplars & Scoring Rubrics</p>
                <p className="text-xs text-[#434653]">Annotated AP reader grading criteria, algebraic derivations, and explicit notation traps.</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setExpandAllSteps(!expandAllSteps)}
                  className="px-3 py-1.5 rounded-xl bg-[#094cb2] text-white text-xs font-bold hover:bg-[#3366cc] transition-colors flex items-center gap-1 cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[15px]">{expandAllSteps ? 'unfold_less' : 'unfold_more'}</span>
                  <span>{expandAllSteps ? 'Collapse All' : 'Expand All'}</span>
                </button>
              </div>
            </div>

            {/* Example 1: Radical Conjugate */}
            <div className="bg-white rounded-2xl p-5 space-y-4 shadow-sm border border-[#c3c6d5]/30">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-5 rounded-full bg-[#094cb2] inline-block"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#094cb2]">Example 01</span>
                    <span className="text-xs text-[#434653] font-medium">CED 1.6</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#dfe3e8] text-[#171c20] text-[11px] font-semibold">Algebraic Limits</span>
                </div>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#1b1c1d] leading-snug">
                  Evaluating Indeterminate Limits via Radical Conjugates
                </h2>
                <div className="bg-[#f5f3f4] rounded-xl p-3 border border-[#c3c6d5]/20">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#434653] block">Problem Statement</span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#d9e2ff] text-[#001946] font-bold tracking-wider">Limits & Continuity</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#c3c6d5]/30 shadow-xs">
                    <div className="text-xs text-[#434653] mb-1">Evaluate the limit:</div>
                    <div className="flex items-center justify-center gap-3 py-2 text-[#094cb2] font-serif text-base font-bold">
                      <span>lim<sub className="text-xs italic">x → 4</sub></span>
                      <span className="text-lg">[ (√x − 2) / (x − 4) ]</span>
                    </div>
                  </div>
                </div>
              </div>

              {expandAllSteps && (
                <div className="space-y-2.5">
                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S1</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Direct Substitution (Indeterminate Form)</p>
                      <div className="text-xs text-[#434653] leading-relaxed space-y-1">
                        <p>Numerator: <span className="font-serif italic text-[#1b1c1d] font-bold">√4 − 2 = 0</span>. Denominator: <span className="font-serif italic text-[#1b1c1d] font-bold">4 − 4 = 0</span>.</p>
                        <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white border border-[#c3c6d5]/40">
                          <span className="text-[11px] text-[#737784]">Produces indeterminate ratio:</span>
                          <span className="px-1.5 py-0.5 rounded bg-[#ffdad6] text-[#93000a] font-serif italic font-bold text-xs">"0 / 0"</span>
                          <span className="text-[10px] uppercase text-[#ba1a1a] font-bold">• Fails</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S2</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Multiply by Radical Conjugate</p>
                      <p className="text-xs text-[#434653] leading-relaxed">The conjugate pair for the numerator is <span className="px-1.5 py-0.5 rounded bg-[#e3e2e3] text-[#1b1c1d] font-serif italic text-xs font-semibold">√x + 2</span>. Multiply top & bottom:</p>
                      <div className="py-1 flex items-center justify-center">
                        <div className="px-3 py-1.5 rounded-lg bg-white border border-[#c3c6d5]/30 text-xs font-serif text-[#094cb2]">
                          (√x − 2)/(x − 4) × (√x + 2)/(√x + 2)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S3</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Expand Difference of Squares & Cancel Factor</p>
                      <div className="text-xs text-[#434653] leading-relaxed space-y-1.5">
                        <div className="p-2 rounded bg-white border border-[#c3c6d5]/30 font-serif text-xs">
                          (√x − 2)(√x + 2) = (√x)² − 2² = <strong className="text-[#094cb2] italic">x − 4</strong>
                        </div>
                        <p>Dividing the common factor <span className="font-serif italic text-[#094cb2] font-semibold">(x − 4)</span> leaves: <span className="font-serif italic font-bold text-[#1b1c1d] px-1.5 py-0.5 rounded bg-[#e3e2e3]">1 / (√x + 2)</span> for <span className="font-serif italic font-semibold">x ≠ 4</span>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S4</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Re-evaluate Limit with Reduced Form</p>
                      <div className="p-2.5 rounded-xl bg-white border border-[#c3c6d5]/30 flex items-center justify-center gap-2 font-serif text-xs sm:text-sm text-[#094cb2]">
                        <span>lim<sub className="text-[9px] italic">x → 4</sub> [1 / (√x + 2)] = 1 / (√4 + 2) =</span>
                        <span className="font-bold text-base px-2 py-0.5 rounded bg-[#d9e2ff] text-[#001946]">1 / 4</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2 pt-1">
                <div className="bg-[#e9e8e9] rounded-xl p-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#434653]">Official Final Answer</span>
                  <span className="px-3 py-1 rounded-full bg-[#094cb2] text-white font-bold text-sm">1 / 4</span>
                </div>
                <div className="bg-[#f9e37a] rounded-xl p-3 flex items-start gap-2.5 border border-[#dcc661]">
                  <AlertTriangle className="w-5 h-5 text-[#6d5e00] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#524600] uppercase tracking-wider">Scoring Rubric Trap</p>
                    <p className="text-xs text-[#524600] leading-relaxed mt-0.5">
                      Never write <code className="font-mono font-bold">"= 0/0"</code> in your chain of equality on an AP Free Response Question! 0/0 is not a mathematical quantity. College Board deducts 1 communication point.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2: Piecewise Continuity */}
            <div className="bg-white rounded-2xl p-5 space-y-4 shadow-sm border border-[#c3c6d5]/30">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-5 rounded-full bg-[#094cb2] inline-block"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#094cb2]">Example 02</span>
                    <span className="text-xs text-[#434653] font-medium">CED 1.11</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#dfe3e8] text-[#171c20] text-[11px] font-semibold">Function Continuity</span>
                </div>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#1b1c1d] leading-snug">Continuity at a Piecewise Boundary</h2>
                <div className="bg-[#f5f3f4] rounded-xl p-3 border border-[#c3c6d5]/20">
                  <p className="font-serif italic text-[#1b1c1d] text-sm leading-relaxed">
                    Determine constant <span className="font-sans font-bold not-italic text-[#094cb2] bg-[#d9e2ff]/50 px-1.5 py-0.5 rounded">k</span> that guarantees <span className="font-serif italic text-[#094cb2] font-semibold">f(x)</span> is continuous at <span className="font-serif italic font-semibold text-[#1b1c1d]">x = 2</span>:
                  </p>
                  <div className="mt-2 p-3 bg-white rounded-xl border border-[#c3c6d5]/30 flex items-center justify-center font-serif text-sm">
                    <span className="italic font-bold mr-2">f(x) =</span>
                    <span className="text-3xl text-[#094cb2] mr-2">{"{"}</span>
                    <div className="flex flex-col gap-1">
                      <div><span className="italic font-semibold text-[#094cb2]">2x + k</span> (for x ≤ 2)</div>
                      <div><span className="italic font-semibold text-[#094cb2]">x² − 1</span> (for x &gt; 2)</div>
                    </div>
                  </div>
                </div>
              </div>

              {expandAllSteps && (
                <div className="space-y-2.5">
                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S1</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Compute Left-Hand Limit & Anchor Value</p>
                      <div className="p-2.5 rounded-xl bg-white border border-[#c3c6d5]/30 text-xs sm:text-sm font-serif text-[#094cb2]">
                        lim<sub className="text-[9px] italic">x → 2⁻</sub> f(x) = f(2) = 2(2) + k = <span className="font-bold text-[#1b1c1d]">4 + k</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S2</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Compute Right-Hand Limit</p>
                      <div className="p-2.5 rounded-xl bg-white border border-[#c3c6d5]/30 text-xs sm:text-sm font-serif text-[#094cb2]">
                        lim<sub className="text-[9px] italic">x → 2⁺</sub> f(x) = (2)² − 1 = 4 − 1 = <span className="font-bold text-[#1b1c1d]">3</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S3</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Equate Continuity Criteria & Solve</p>
                      <div className="p-2.5 rounded-xl bg-white border border-[#c3c6d5]/30 text-xs font-serif text-center space-y-1">
                        <div>4 + k = 3 ⇒ k = 3 − 4 ⇒ <strong className="px-2 py-0.5 rounded bg-[#d9e2ff] text-[#001946] font-bold text-sm">k = −1</strong></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2 pt-1">
                <div className="bg-[#e9e8e9] rounded-xl p-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#434653]">Solved Constant</span>
                  <span className="px-3 py-1 rounded-full bg-[#094cb2] text-white font-mono font-bold text-sm">k = −1</span>
                </div>
                <div className="bg-[#f9e37a] rounded-xl p-3 flex items-start gap-2.5 border border-[#dcc661]">
                  <AlertTriangle className="w-5 h-5 text-[#6d5e00] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#524600] leading-relaxed">
                    You must show <strong>both</strong> one-sided limit statements explicitly. Writing simply <em>"4 + k = 3"</em> without defining <code className="font-mono text-[11px]">lim<sub>x→2⁻</sub></code> and <code className="font-mono text-[11px]">lim<sub>x→2⁺</sub></code> loses the setup point.
                  </p>
                </div>
              </div>
            </div>

            {/* Example 3: IVT Root Proof with SVG Diagram */}
            <div className="bg-white rounded-2xl p-5 space-y-4 shadow-sm border border-[#c3c6d5]/30">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-5 rounded-full bg-[#094cb2] inline-block"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#094cb2]">Example 03</span>
                    <span className="text-xs text-[#434653] font-medium">CED 1.16</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#dfe3e8] text-[#171c20] text-[11px] font-semibold">Existence Theorems</span>
                </div>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#1b1c1d] leading-snug">
                  Intermediate Value Theorem (IVT) Root Justification
                </h2>
                <div className="bg-[#f5f3f4] rounded-xl p-3 border border-[#c3c6d5]/20">
                  <p className="font-serif italic text-[#1b1c1d] text-sm leading-relaxed">Prove that the polynomial possesses at least one real solution on the closed interval:</p>
                  <div className="mt-2 p-3 bg-white rounded-xl border border-[#c3c6d5]/30 flex items-center justify-center gap-3 font-serif">
                    <span className="text-base font-bold italic text-[#094cb2]">x³ + 2x − 5 = 0</span>
                    <span className="text-[#c3c6d5]">•</span>
                    <span className="text-xs text-[#434653] font-medium">Interval: <strong className="text-[#1b1c1d] bg-[#efedee] px-1.5 py-0.5 rounded">[1, 2]</strong></span>
                  </div>
                </div>
              </div>

              {/* Inline SVG Chart for IVT */}
              <div className="bg-[#f5f3f4] rounded-2xl p-4 space-y-2 border border-[#c3c6d5]/20">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#434653]">Geometric Interpretation</span>
                  <span className="text-[11px] text-[#094cb2] font-semibold font-serif">f(1) &lt; 0 &lt; f(2)</span>
                </div>
                <div className="w-full h-32 flex items-center justify-center">
                  <svg aria-label="Intermediate Value Theorem Curve crossing y=0" className="w-full h-full" viewBox="0 0 320 120">
                    <line stroke="#737784" strokeDasharray="3 3" strokeWidth="1.5" x1="20" x2="300" y1="60" y2="60"></line>
                    <line stroke="#c3c6d5" strokeWidth="1" x1="50" x2="50" y1="10" y2="110"></line>
                    <text fill="#737784" fontFamily="Public Sans" fontSize="10" fontWeight="600" x="302" y="64">y=0</text>
                    <text fill="#737784" fontFamily="Public Sans" fontSize="10" x="45" y="15">y</text>
                    <path d="M 60 96 C 120 90, 150 70, 180 60 C 210 50, 240 24, 270 20" fill="none" stroke="#094cb2" strokeWidth="3"></path>
                    <circle cx="60" cy="96" fill="#ba1a1a" r="4.5"></circle>
                    <line stroke="#ba1a1a" strokeDasharray="2 2" strokeWidth="1" x1="60" x2="60" y1="60" y2="96"></line>
                    <text fill="#434653" fontFamily="Public Sans" fontSize="10" fontWeight="600" x="52" y="112">a = 1</text>
                    <text fill="#ba1a1a" fontFamily="Public Sans" fontSize="9" x="18" y="98">f(1)=-2</text>
                    <circle cx="180" cy="60" fill="#6d5e00" r="5"></circle>
                    <text fill="#6d5e00" fontFamily="Public Sans" fontSize="10" fontWeight="700" x="177" y="50">c</text>
                    <text fill="#6d5e00" fontFamily="Public Sans" fontSize="9" x="165" y="75">f(c)=0</text>
                    <circle cx="270" cy="20" fill="#094cb2" r="4.5"></circle>
                    <line stroke="#094cb2" strokeDasharray="2 2" strokeWidth="1" x1="270" x2="270" y1="60" y2="20"></line>
                    <text fill="#434653" fontFamily="Public Sans" fontSize="10" fontWeight="600" x="262" y="75">b = 2</text>
                    <text fill="#094cb2" fontFamily="Public Sans" fontSize="9" x="278" y="24">f(2)=7</text>
                  </svg>
                </div>
              </div>

              {expandAllSteps && (
                <div className="space-y-2.5">
                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S1</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Establish Function & State Continuity</p>
                      <p className="text-xs text-[#434653] leading-relaxed">
                        Define <span className="font-serif italic text-[#094cb2] font-semibold">f(x) = x³ + 2x − 5</span>. Polynomials are continuous for all real numbers ℝ:
                      </p>
                      <div className="p-2 rounded-xl bg-white border border-[#c3c6d5]/30 text-xs font-serif italic text-[#094cb2] text-center">
                        "Because f(x) is a polynomial, f is continuous on the closed interval [1, 2]."
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S2</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Evaluate Closed Endpoint Values</p>
                      <div className="grid grid-cols-2 gap-2 text-xs font-serif">
                        <div className="p-2 rounded-xl bg-white border border-[#c3c6d5]/30">
                          <div className="text-[10px] uppercase font-bold text-[#737784] mb-0.5">Left (a = 1)</div>
                          <div className="text-[#ba1a1a] font-bold">f(1) = −2 &lt; 0</div>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-[#c3c6d5]/30">
                          <div className="text-[10px] uppercase font-bold text-[#737784] mb-0.5">Right (b = 2)</div>
                          <div className="text-[#094cb2] font-bold">f(2) = 7 &gt; 0</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S3</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Establish Strict Intermediate Inequality</p>
                      <div className="p-2.5 rounded-xl bg-white border border-[#c3c6d5]/30 text-center font-serif text-sm">
                        <span className="italic font-bold text-[#ba1a1a]">f(1)</span> &lt; <span className="font-bold px-2 py-0.5 rounded bg-[#dfe3e8] text-xs">0</span> &lt; <span className="italic font-bold text-[#094cb2]">f(2)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#efedee] rounded-xl p-3.5 flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d9e2ff] text-[#001946] font-bold text-xs flex items-center justify-center shadow-xs">S4</span>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1b1c1d] tracking-wide">Cite Theorem & Conclude</p>
                      <div className="text-xs text-[#434653] leading-relaxed p-2.5 rounded-xl bg-white border border-[#c3c6d5]/30 font-serif italic">
                        "By the Intermediate Value Theorem, since f(1) &lt; 0 &lt; f(2) and f is continuous on [1, 2], there must exist at least one value c ∈ (1, 2) such that f(c) = 0."
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2 pt-1">
                <div className="bg-[#e9e8e9] rounded-xl p-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#434653]">Proof Status</span>
                  <span className="px-3 py-1 rounded-full bg-[#094cb2] text-white font-bold text-xs">Q.E.D. Fully Justified</span>
                </div>
                <div className="bg-[#f9e37a] rounded-xl p-3 flex items-start gap-2.5 border border-[#dcc661]">
                  <AlertTriangle className="w-5 h-5 text-[#6d5e00] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#524600] leading-relaxed">
                    Failing to write <em>"Since f is continuous on [1, 2]"</em> forfeits the entire justification point, even if your calculations of f(1) = −2 and f(2) = 7 are flawless.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro-Check Challenge */}
            <div className="bg-[#efedee] rounded-2xl p-4.5 space-y-3 border border-[#c3c6d5]/30">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-[#094cb2]">Micro Check</span>
                <span className="text-[11px] text-[#434653]">15-Second Reflex</span>
              </div>
              <p className="font-serif text-sm font-bold text-[#1b1c1d]">
                Does IVT guarantee a value <span className="italic font-normal">c</span> if a function has a jump discontinuity on [a, b]?
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    triggerVibration(10);
                    setExamplesQuizAnswer(false);
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    examplesQuizAnswer === false
                      ? 'bg-[#ffdad6] text-[#93000a]'
                      : 'bg-white text-[#1b1c1d] hover:bg-[#e3e2e3]'
                  }`}
                >
                  Yes, if endpoints differ
                </button>
                <button
                  onClick={() => {
                    triggerVibration(10);
                    setExamplesQuizAnswer(true);
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    examplesQuizAnswer === true
                      ? 'bg-[#d9e2ff] text-[#001946]'
                      : 'bg-white text-[#1b1c1d] hover:bg-[#e3e2e3]'
                  }`}
                >
                  No, continuity is strict
                </button>
              </div>
              {examplesQuizAnswer !== null && (
                <div className={`text-xs rounded-xl p-3 font-medium ${
                  examplesQuizAnswer
                    ? 'bg-[#dfe3e8] text-[#171c20]'
                    : 'bg-[#ffdad6] text-[#93000a]'
                }`}>
                  {examplesQuizAnswer ? (
                    <div><strong>Correct!</strong> IVT strictly demands continuity across the entire closed interval. Discontinuities allow functions to skip intermediate values entirely.</div>
                  ) : (
                    <div><strong>Incorrect.</strong> Even with a sign change at endpoints, a jump or vertical asymptote can bypass y = 0.</div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: EXAM TRAPS                                                         */}
        {/* ========================================================================= */}
        {activeSubTab === 'exam-traps' && (
          <div className="space-y-6">
            {/* Top Alert Banner */}
            <section className="relative overflow-hidden rounded-2xl bg-[#ffdad6]/70 p-4 border border-[#ba1a1a]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ba1a1a] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">gavel</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#ba1a1a]">College Board Reader Advisory</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                  </div>
                  <h2 className="font-serif font-bold text-base text-[#1b1c1d] leading-snug">Top FRQ Pitfalls That Lose Points</h2>
                  <p className="text-xs text-[#434653] mt-1 leading-relaxed">
                    AP readers deduct rubric points strictly for sloppy notation and unchecked hypotheses. Master these four classic traps.
                  </p>
                </div>
              </div>
            </section>

            {/* Trap 1 */}
            <div className="rounded-2xl bg-white p-4 shadow-sm space-y-3 relative overflow-hidden border border-[#c3c6d5]/30">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ba1a1a]"></div>
              <div className="pl-2 space-y-2">
                <p className="font-serif text-sm font-bold text-[#1b1c1d]">
                  Writing <code className="px-1.5 py-0.5 rounded bg-[#ffdad6] text-[#93000a] font-mono text-xs font-semibold">"= 0/0"</code> in equality chains
                </p>
                <p className="text-xs text-[#434653] leading-relaxed">
                  In AP grading, <span className="font-mono font-medium">0/0</span> is undefined and NOT a real number. Setting a limit equal to <span className="font-mono">0/0</span> instantly forfeits mathematical communication points.
                </p>
                <div className="rounded-xl bg-[#efedee] p-3 space-y-1.5 border border-[#c3c6d5]/20">
                  <div className="flex items-center gap-1.5 text-[#094cb2]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Acceptable AP Response</span>
                  </div>
                  <p className="font-mono text-xs text-[#1b1c1d] bg-white px-2.5 py-1.5 rounded-lg border border-[#c3c6d5]/30">
                    "Since lim[f(x)] = 0 and lim[g(x)] = 0, this yields indeterminate form 0/0. Applying L'Hôpital's Rule..."
                  </p>
                </div>
              </div>
            </div>

            {/* Trap 2 */}
            <div className="rounded-2xl bg-white p-4 shadow-sm space-y-3 relative overflow-hidden border border-[#c3c6d5]/30">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ba1a1a]"></div>
              <div className="pl-2 space-y-2">
                <p className="font-serif text-sm font-bold text-[#1b1c1d]">
                  Evaluating <span className="font-mono font-semibold text-[#094cb2]">lim<sub className="text-[10px]">x→2</sub> |x - 2| / (x - 2)</span> without directional tests
                </p>
                <p className="text-xs text-[#434653] leading-relaxed">
                  Absolute value quotients possess step jump discontinuities. You <strong className="text-[#1b1c1d]">must</strong> evaluate both sides independently:
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-[#efedee] p-2.5 rounded-xl text-center">
                    <span className="text-[10px] font-bold uppercase text-[#434653] block">From Left (x → 2⁻)</span>
                    <span className="font-mono text-xs font-semibold text-[#ba1a1a] block mt-0.5">−(x − 2)/(x − 2) = −1</span>
                  </div>
                  <div className="bg-[#efedee] p-2.5 rounded-xl text-center">
                    <span className="text-[10px] font-bold uppercase text-[#434653] block">From Right (x → 2⁺)</span>
                    <span className="font-mono text-xs font-semibold text-[#094cb2] block mt-0.5">+(x − 2)/(x − 2) = +1</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#1b1c1d] font-medium bg-[#e9e8e9] px-3 py-1.5 rounded-xl">
                  <AlertTriangle className="w-4 h-4 text-[#6d5e00]" />
                  <span>Because −1 ≠ +1, the overall limit <strong className="text-[#094cb2] font-mono">DNE</strong>.</span>
                </div>
              </div>
            </div>

            {/* Trap 3 */}
            <div className="rounded-2xl bg-white p-4 shadow-sm space-y-3 relative overflow-hidden border border-[#c3c6d5]/30">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ba1a1a]"></div>
              <div className="pl-2 space-y-2">
                <p className="font-serif text-sm font-bold text-[#1b1c1d]">
                  Assuming continuity guarantees differentiability
                </p>
                <p className="text-xs text-[#434653] leading-relaxed">
                  Differentiability implies continuity, but continuity does <strong className="text-[#1b1c1d]">NOT</strong> imply differentiability. Sharp corners (e.g. <span className="font-mono font-semibold">f(x) = |x|</span> at <span className="font-mono font-semibold">x = 0</span>) are continuous yet non-differentiable.
                </p>
                <div className="rounded-xl bg-[#efedee] p-2.5 flex items-center gap-3 border border-[#c3c6d5]/20">
                  <div className="w-8 h-8 rounded-lg bg-[#f9e37a] text-[#524600] flex items-center justify-center shrink-0 font-bold">💡</div>
                  <p className="text-[11px] text-[#1b1c1d]">
                    <strong>Rule of Thumb:</strong> Smooth curve → both. Sharp corner or vertical tangent → Continuous, but <span className="text-[#ba1a1a] font-bold">f'(c) undefined</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Trap 4 */}
            <div className="rounded-2xl bg-white p-4 shadow-sm space-y-3 relative overflow-hidden border border-[#c3c6d5]/30">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ba1a1a]"></div>
              <div className="pl-2 space-y-2">
                <p className="font-serif text-sm font-bold text-[#1b1c1d]">
                  Miscalculating <span className="font-mono font-semibold text-[#094cb2]">√(x²)</span> when <span className="font-mono">x → -∞</span>
                </p>
                <p className="text-xs text-[#434653] leading-relaxed">
                  Recall definition: <span className="font-mono font-semibold">√(x²) = |x|</span>. When <span className="font-mono">x &lt; 0</span>, <span className="font-mono font-semibold">√(x²) = −x</span>. Factoring out in the denominator introduces a mandatory negative sign!
                </p>
                <div className="bg-[#e9e8e9] rounded-xl p-3 text-center">
                  <span className="font-mono text-xs text-[#1b1c1d] block font-medium">
                    lim<sub className="text-[10px]">x→-∞</sub> (3x − 1) / √(4x² + 5) = 3 / (−√4) = <strong className="text-[#ba1a1a]">−3/2</strong>
                  </span>
                  <span className="text-[10px] text-[#434653] block mt-1">(Students routinely miss this negative sign and write +3/2)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CRAM SHEET                                                         */}
        {/* ========================================================================= */}
        {activeSubTab === 'cram-sheet' && (
          <div className="space-y-6">
            {/* Editorial Hero Banner */}
            <div className="rounded-2xl bg-[#094cb2] text-white p-5 shadow-md relative overflow-hidden">
              <div className="relative z-10 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-5 h-5 text-[#f9e37a]" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#f9e37a]">Essential Mastery</span>
                </div>
                <h2 className="font-serif text-lg font-bold leading-tight">5-Minute Exam Day Cram Sheet</h2>
                <p className="text-xs text-blue-100 leading-relaxed pt-0.5">
                  Commit these 4 foundational guarantees to memory before entering Section I.
                </p>
              </div>
            </div>

            {/* Cram 1 */}
            <div className="rounded-2xl bg-white p-4 shadow-sm flex items-start gap-3.5 border border-[#c3c6d5]/30">
              <div className="w-8 h-8 rounded-xl bg-[#f9e37a] text-[#524600] flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-bold text-xs">
                R1
              </div>
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6d5e00]">Rule 01</span>
                  <span className="text-[10px] text-[#434653] font-mono">CED 1.3</span>
                </div>
                <h4 className="font-serif text-sm font-bold text-[#1b1c1d]">Existence of a Two-Sided Limit</h4>
                <p className="text-xs text-[#434653] leading-relaxed">
                  A limit <span className="font-mono font-medium">lim<sub className="text-[10px]">x→c</sub> f(x) = L</span> exists <strong className="text-[#1b1c1d]">if and only if</strong>:
                </p>
                <div className="bg-[#efedee] px-3 py-2 rounded-xl font-serif italic text-xs text-[#094cb2] font-bold mt-1.5 text-center">
                  lim<sub className="text-[9px] not-italic">x→c⁻</sub> f(x) = lim<sub className="text-[9px] not-italic">x→c⁺</sub> f(x) = L
                </div>
              </div>
            </div>

            {/* Cram 2 */}
            <div className="rounded-2xl bg-white p-4 shadow-sm flex items-start gap-3.5 border border-[#c3c6d5]/30">
              <div className="w-8 h-8 rounded-xl bg-[#f9e37a] text-[#524600] flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-bold text-xs">
                R2
              </div>
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6d5e00]">Rule 02</span>
                  <span className="text-[10px] text-[#434653] font-mono">CED 1.10</span>
                </div>
                <h4 className="font-serif text-sm font-bold text-[#1b1c1d]">Three-Step Continuity Definition</h4>
                <div className="space-y-1 pt-1">
                  <div className="flex items-center gap-2 bg-[#efedee] px-2.5 py-1.5 rounded-lg text-xs">
                    <span className="font-bold text-[#094cb2] text-[10px] w-4">1.</span>
                    <span className="font-serif italic text-[#1b1c1d] font-semibold">f(c) is defined (exists)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#efedee] px-2.5 py-1.5 rounded-lg text-xs">
                    <span className="font-bold text-[#094cb2] text-[10px] w-4">2.</span>
                    <span className="font-serif italic text-[#1b1c1d] font-semibold">lim<sub className="text-[9px] not-italic">x→c</sub> f(x) exists</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#efedee] px-2.5 py-1.5 rounded-lg text-xs">
                    <span className="font-bold text-[#094cb2] text-[10px] w-4">3.</span>
                    <span className="font-serif italic text-[#1b1c1d] font-semibold">lim<sub className="text-[9px] not-italic">x→c</sub> f(x) = f(c)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cram 3 */}
            <div className="rounded-2xl bg-white p-4 shadow-sm flex items-start gap-3.5 border border-[#c3c6d5]/30">
              <div className="w-8 h-8 rounded-xl bg-[#f9e37a] text-[#524600] flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-bold text-xs">
                R3
              </div>
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6d5e00]">Rule 03</span>
                  <span className="text-[10px] text-[#434653] font-mono">CED 1.7</span>
                </div>
                <h4 className="font-serif text-sm font-bold text-[#1b1c1d]">Indeterminate 0/0 Directive</h4>
                <p className="text-xs text-[#434653] leading-relaxed">
                  <span className="font-serif italic font-bold text-[#ba1a1a] text-sm px-1.5 py-0.5 rounded bg-[#ffdad6]">0/0</span> does <strong className="text-[#1b1c1d]">NOT</strong> imply 0 or DNE. It is an explicit command: <strong className="text-[#094cb2] uppercase tracking-tight">Do More Work!</strong>
                </p>
                <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
                  <span className="bg-[#efedee] px-2 py-1 rounded-lg text-[#1b1c1d] flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#094cb2] shrink-0"></span> Factor & Cancel
                  </span>
                  <span className="bg-[#efedee] px-2 py-1 rounded-lg text-[#1b1c1d] flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#094cb2] shrink-0"></span> Conjugate Radical
                  </span>
                  <span className="bg-[#efedee] px-2 py-1 rounded-lg text-[#1b1c1d] flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#094cb2] shrink-0"></span> Trig Identities
                  </span>
                  <span className="bg-[#efedee] px-2 py-1 rounded-lg text-[#1b1c1d] flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#094cb2] shrink-0"></span> L'Hôpital's Rule
                  </span>
                </div>
              </div>
            </div>

            {/* Cram 4 */}
            <div className="rounded-2xl bg-white p-4 shadow-sm flex items-start gap-3.5 border border-[#c3c6d5]/30">
              <div className="w-8 h-8 rounded-xl bg-[#f9e37a] text-[#524600] flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-bold text-xs">
                R4
              </div>
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6d5e00]">Rule 04</span>
                  <span className="text-[10px] text-[#434653] font-mono">CED 1.16</span>
                </div>
                <h4 className="font-serif text-sm font-bold text-[#1b1c1d]">Intermediate Value Theorem (IVT)</h4>
                <p className="text-xs text-[#434653] leading-relaxed">
                  Must state continuity on closed interval <span className="font-mono font-medium">[a, b]</span>.
                </p>
                <div className="bg-[#f9e37a]/30 rounded-xl p-2.5 mt-1 text-[11px] leading-relaxed text-[#1b1c1d] border border-[#dcc661]/40">
                  <span className="font-bold text-[#6d5e00] block mb-0.5 uppercase tracking-wider text-[10px]">AP Exam Golden Rule:</span>
                  IVT guarantees an <strong className="text-[#1b1c1d] underline decoration-[#6d5e00] decoration-2">OUTPUT</strong> value <span className="font-serif italic font-semibold">d</span> satisfying <span className="font-serif italic font-bold text-[#1b1c1d] px-1 bg-white rounded shadow-2xs">f(c) = d</span>, never an input coordinate.
                </div>
              </div>
            </div>

            {/* Quick Recall Footer Action */}
            <div className="rounded-2xl bg-[#e9e8e9] p-4 flex items-center justify-between gap-3 border border-[#c3c6d5]/30">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-[#094cb2] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">timer</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase text-[#094cb2] tracking-wider">Speed Drill</p>
                  <p className="text-xs text-[#1b1c1d] truncate font-medium">Test yourself on Unit 1 Traps</p>
                </div>
              </div>
              <button
                onClick={() => {
                  triggerVibration(15);
                  setSpeedDrillComplete(!speedDrillComplete);
                }}
                className={`px-4 py-2 rounded-xl font-bold text-xs shadow-xs transition-all active:scale-95 shrink-0 cursor-pointer ${
                  speedDrillComplete
                    ? 'bg-[#6d5e00] text-white'
                    : 'bg-gradient-to-r from-[#094cb2] to-[#3366cc] text-white'
                }`}
              >
                {speedDrillComplete ? 'Ready for Exam Day! 🎉' : 'Review Complete'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
