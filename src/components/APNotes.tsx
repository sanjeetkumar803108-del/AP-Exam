import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, BookOpen, Download, Share2, Sparkles, CheckCircle2, 
  ChevronDown, ChevronRight, AlertTriangle, Lightbulb, Zap, Bookmark, Layers, Search, Loader2,
  HelpCircle, Check, Eye, Maximize2, X, ChevronLeft, FileText, Trash2, HardDrive, FolderDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerVibration } from '../utils/vibrate';
import { 
  AP_NOTES_REGISTRY, 
  getAllSupportedNoteSubjects, 
  getNotesForSubject, 
  APSubjectNoteEntry, 
  APUnitNote, 
  APNoteWorkedExample, 
  APNoteDiagram 
} from '../data/notes';
import GlobalMarkdown from './GlobalMarkdown';
import jsPDF from 'jspdf';
import { savePDFMobile, sharePDFMobile } from '../utils/mobileSaver';
import { sanitizePdfText } from '../utils/pdfSanitizer';
import SafePdfViewer from './SafePdfViewer';
import { 
  saveOfflineNote, 
  getOfflineNotesManifest, 
  getDownloadedUnitIdsSync, 
  deleteOfflineNote, 
  OfflineNoteMeta 
} from '../utils/offlineNotesStorage';

interface APNotesProps {
  onBack: () => void;
}

type Step = 'select-subject' | 'reading';

/**
 * Converts LaTeX math expressions into clean, legible Unicode text for PDF printing.
 * Handles nested fractions, positive/negative powers, one-sided limits, and multi-line aligned formulas.
 */
function formatMathForPdf(latex: string): string {
  if (!latex) return '';
  let str = String(latex);

  // 1. Remove LaTeX environment wrappers
  str = str.replace(/\\begin\{(aligned|matrix|cases|array|split)\}/g, '');
  str = str.replace(/\\end\{(aligned|matrix|cases|array|split)\}/g, '');

  // 2. Clean \left and \right delimiters FIRST to prevent \le and \rightarrow conflicts
  str = str.replace(/\\left\s*\\\{/g, '{');
  str = str.replace(/\\right\s*\\\}/g, '}');
  str = str.replace(/\\left\s*([(\[{|])/g, '$1');
  str = str.replace(/\\right\s*([)\]}|])/g, '$1');
  str = str.replace(/\\left\./g, '');
  str = str.replace(/\\right\./g, '');

  // 3. Clean aligned alignment tokens & linebreaks
  str = str.replace(/&=/g, ' = ');
  str = str.replace(/&/g, '   |   ');
  str = str.replace(/\\\\/g, '\n');

  // 4. Radicals & Roots (n-th roots and square roots)
  str = str.replace(/\\sqrt\[([^\]]+)\]\{([^{}]+)\}/g, '$1√($2)');
  str = str.replace(/\\sqrt\[([^\]]+)\]/g, '$1√');
  str = str.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');
  str = str.replace(/\\sqrt/g, '√');
  str = str.replace(/sqrt\(([^)]+)\)/g, '√($1)');

  // 5. AP Calculus Limits with one-sided notation (e.g. lim_{x -> c^-}, lim_{x \to 0})
  str = str.replace(/\\?lim_\{x\s*(?:\\to|\\rightarrow|->)\s*([^}^+^-]+)\^-\}/g, 'lim(x → $1⁻)');
  str = str.replace(/\\?lim_\{x\s*(?:\\to|\\rightarrow|->)\s*([^}^+^-]+)\^\+\}/g, 'lim(x → $1⁺)');
  str = str.replace(/\\?lim_\{x\s*(?:\\to|\\rightarrow|->)\s*([^}]+)\}/g, 'lim(x → $1)');
  str = str.replace(/\\?lim_\{h\s*(?:\\to|\\rightarrow|->)\s*([^}]+)\}/g, 'lim(h → $1)');
  str = str.replace(/\\?lim_\{([^}]+)\}/g, 'lim($1)');
  str = str.replace(/\\?lim/g, 'lim');
  str = str.replace(/lim\(x\s*->\s*([^)]+)\^-\)/g, 'lim(x → $1⁻)');
  str = str.replace(/lim\(x\s*->\s*([^)]+)\^\+\)/g, 'lim(x → $1⁺)');
  str = str.replace(/lim\(x\s*->\s*([^)]+)\)/g, 'lim(x → $1)');

  // 6. Integrals, Derivatives & Summations
  str = str.replace(/\\int_\{([^{}]+)\}\^\{([^{}]+)\}/g, '∫[$1 to $2]');
  str = str.replace(/\\int_([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)/g, '∫[$1 to $2]');
  str = str.replace(/\\int_\{([^{}]+)\}/g, '∫[$1]');
  str = str.replace(/\\int/g, '∫');
  str = str.replace(/\\sum_\{([^{}]+)\}\^\{([^{}]+)\}/g, '∑[$1 to $2]');
  str = str.replace(/\\sum/g, '∑');
  str = str.replace(/\\frac\{d\}\{dx\}/g, 'd/dx');
  str = str.replace(/\\frac\{dy\}\{dt\}/g, 'dy/dt');
  str = str.replace(/\\frac\{dy\}\{dx\}/g, 'dy/dx');
  str = str.replace(/\\frac\{ds\}\{dt\}/g, 'ds/dt');
  str = str.replace(/\\frac\{dv\}\{dt\}/g, 'dv/dt');
  str = str.replace(/\\frac\{d\^2y\}\{dx\^2\}/g, 'd²y/dx²');

  // 7. Robust recursive fraction parsing (handles nested powers & expressions)
  function parseFractions(input: string): string {
    let output = input;
    const fracPrefix = '\\frac{';
    let idx = output.indexOf(fracPrefix);
    while (idx !== -1) {
      const numStart = idx + fracPrefix.length;
      let depth = 1;
      let numEnd = -1;
      for (let i = numStart; i < output.length; i++) {
        if (output[i] === '{') depth++;
        else if (output[i] === '}') {
          depth--;
          if (depth === 0) { numEnd = i; break; }
        }
      }
      if (numEnd !== -1 && output[numEnd + 1] === '{') {
        const denStart = numEnd + 2;
        depth = 1;
        let denEnd = -1;
        for (let j = denStart; j < output.length; j++) {
          if (output[j] === '{') depth++;
          else if (output[j] === '}') {
            depth--;
            if (depth === 0) { denEnd = j; break; }
          }
        }
        if (denEnd !== -1) {
          const num = output.substring(numStart, numEnd);
          const den = output.substring(denStart, denEnd);
          const rep = `(${num})/(${den})`;
          output = output.substring(0, idx) + rep + output.substring(denEnd + 1);
          idx = output.indexOf(fracPrefix);
          continue;
        }
      }
      break;
    }
    return output;
  }
  str = parseFractions(str);

  // 8. Comprehensive Unicode Superscripts Map (Positive, Negative, Fractions, Variables)
  const superMap: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
    'n': 'ⁿ', 'x': 'ˣ', 'k': 'ᵏ', 't': 'ᵗ', 'm': 'ᵐ', 'a': 'ᵃ', 'b': 'ᵇ'
  };

  // Convert ^{...} to unicode superscripts
  str = str.replace(/\^\{([^{}]+)\}/g, (_match, p1) => {
    let converted = '';
    for (const ch of p1) {
      if (ch === '/') converted += 'ᐟ';
      else if (superMap[ch]) converted += superMap[ch];
      else { converted = `^(${p1})`; break; }
    }
    return converted;
  });

  // Convert raw ^-1, ^-2, ^-3, ^-n, ^2, ^3, ^4, etc.
  str = str.replace(/\^-([0-9nxkta])/g, (_m, p1) => '⁻' + (superMap[p1] || p1));
  str = str.replace(/\^([0-9nxtk])(?![0-9a-zA-Z])/g, (_m, p1) => superMap[p1] || p1);
  str = str.replace(/\^-/g, '⁻');
  str = str.replace(/\^\+/g, '⁺');

  // Subscripts
  const subMap: Record<string, string> = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
    '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
    '+': '₊', '-': '₋', 'n': 'ₙ', 'i': 'ᵢ'
  };
  str = str.replace(/\_\{([^{}]+)\}/g, (_m, p1) => {
    let converted = '';
    for (const ch of p1) {
      if (subMap[ch]) converted += subMap[ch];
      else { converted = `_${p1}`; break; }
    }
    return converted;
  });
  str = str.replace(/\_([0-9])(?![0-9])/g, (_m, p1) => subMap[p1] || p1);

  // 9. Standard function names
  str = str.replace(/\\arcsin/g, 'arcsin');
  str = str.replace(/\\arccos/g, 'arccos');
  str = str.replace(/\\arctan/g, 'arctan');
  str = str.replace(/\\sin/g, 'sin');
  str = str.replace(/\\cos/g, 'cos');
  str = str.replace(/\\tan/g, 'tan');
  str = str.replace(/\\sec/g, 'sec');
  str = str.replace(/\\csc/g, 'csc');
  str = str.replace(/\\cot/g, 'cot');
  str = str.replace(/\\ln/g, 'ln');
  str = str.replace(/\\log/g, 'log');

  // 10. AP Calculus Mathematical Symbols & Dots
  str = str.replace(/\\dots|\\cdots|\\ldots/g, '…');
  str = str.replace(/\\pm|\+\/-/g, '±');
  str = str.replace(/\\mp/g, '∓');
  str = str.replace(/\\cdot/g, ' · ');
  str = str.replace(/\\times/g, ' × ');
  str = str.replace(/\\div/g, ' ÷ ');
  str = str.replace(/\\infty/g, '∞');
  str = str.replace(/\\to|\\rightarrow/g, ' → ');
  str = str.replace(/->/g, ' → ');
  str = str.replace(/\\leftarrow/g, ' ← ');
  str = str.replace(/\\implies/g, ' ⟹ ');
  str = str.replace(/==>/g, ' ⟹ ');
  str = str.replace(/\\iff/g, ' ⟺ ');
  str = str.replace(/\\leq|\\le(?![a-zA-Z])/g, ' ≤ ');
  str = str.replace(/<=/g, ' ≤ ');
  str = str.replace(/\\geq|\\ge(?![a-zA-Z])/g, ' ≥ ');
  str = str.replace(/>=/g, ' ≥ ');
  str = str.replace(/\\neq/g, ' ≠ ');
  str = str.replace(/!=/g, ' ≠ ');
  str = str.replace(/\\approx/g, ' ≈ ');
  str = str.replace(/\\in(?![a-zA-Z])/g, ' ∈ ');
  str = str.replace(/\\notin/g, ' ∉ ');
  str = str.replace(/\\pi/g, 'π');
  str = str.replace(/\\theta/g, 'θ');
  str = str.replace(/\\Delta/g, 'Δ');
  str = str.replace(/\\alpha/g, 'α');
  str = str.replace(/\\beta/g, 'β');
  str = str.replace(/\\partial/g, '∂');

  // Spacing
  str = str.replace(/\\qquad/g, '    |    ');
  str = str.replace(/\\quad/g, '   •   ');

  str = str.replace(/\\text\{([^{}]+)\}/g, '$1');
  str = str.replace(/\\mathbf\{([^{}]+)\}/g, '$1');
  str = str.replace(/\\mathit\{([^{}]+)\}/g, '$1');

  // 11. Clean remaining LaTeX markers, loose curly braces, and markdown $
  str = str.replace(/\\[a-zA-Z]+/g, '');
  str = str.replace(/[{}]/g, '');
  str = str.replace(/\$\$/g, '');
  str = str.replace(/\$/g, '');

  // Clean extra spaces on each line while preserving clean newlines
  const lines = str.split('\n');
  return lines.map(l => l.replace(/[ \t]+/g, ' ').trim()).join('\n').trim();
}

/**
 * Helper to get badges for all 11 diagram types
 */
function getDiagramBadge(type: APNoteDiagram['type']) {
  switch (type) {
    case 'hole_discontinuity':
      return { label: 'Removable', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' };
    case 'jump_discontinuity':
      return { label: 'Non-Removable', bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' };
    case 'vertical_asymptote':
      return { label: 'Infinite Asymptote', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' };
    case 'corner_not_differentiable':
      return { label: 'Continuous ≠ Differentiable', bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' };
    case 'ivt_guarantee':
      return { label: 'Existence Theorem', bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' };
    case 'tangent_secant_line':
      return { label: 'Derivative Definition', bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200' };
    case 'derivative_graphs_f_fprime':
      return { label: "Curve Analysis (f vs f')", bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' };
    case 'concavity_inflection':
      return { label: "f'' Sign & Inflection", bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' };
    case 'riemann_sum_rectangles':
      return { label: 'Definite Integrals', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' };
    case 'slope_field_solution':
      return { label: 'Differential Equations', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' };
    case 'area_between_curves_disc':
      return { label: 'Applications of Integrals', bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' };
    default:
      return { label: 'Visual Guide', bg: 'bg-zinc-50', text: 'text-zinc-700', border: 'border-zinc-200' };
  }
}

/**
 * Pure SVG Graphic Content for all 11 Calculus Diagram Types
 */
function renderDiagramSvgContent(type: APNoteDiagram['type']) {
  switch (type) {
    case 'hole_discontinuity':
      return (
        <>
          <line x1="20" y1="130" x2="280" y2="130" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="10" x2="50" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="150" y1="130" x2="150" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="50" y1="60" x2="150" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
          <path d="M 60 110 Q 110 85 146 63" fill="none" stroke="#6366f1" strokeWidth="3.5" />
          <path d="M 154 57 Q 210 30 260 20" fill="none" stroke="#6366f1" strokeWidth="3.5" />
          <circle cx="150" cy="60" r="5" fill="#FAF9F6" stroke="#6366f1" strokeWidth="3" />
          <circle cx="150" cy="100" r="4.5" fill="#dc2626" />
          <text x="150" y="145" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#475569">x = c</text>
          <text x="40" y="64" fontSize="10" fontWeight="bold" textAnchor="end" fill="#6366f1">L (Limit)</text>
          <text x="40" y="104" fontSize="10" fontWeight="bold" textAnchor="end" fill="#dc2626">f(c)</text>
          <text x="160" y="55" fontSize="9" fontWeight="bold" fill="#6366f1">lim f(x) = L exists</text>
          <text x="160" y="105" fontSize="9" fontWeight="bold" fill="#dc2626">f(c) ≠ L</text>
        </>
      );

    case 'jump_discontinuity':
      return (
        <>
          <line x1="20" y1="130" x2="280" y2="130" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="10" x2="50" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M 60 110 L 150 90" fill="none" stroke="#2563eb" strokeWidth="3.5" />
          <circle cx="150" cy="90" r="4.5" fill="#2563eb" />
          <path d="M 150 40 L 260 20" fill="none" stroke="#2563eb" strokeWidth="3.5" />
          <circle cx="150" cy="40" r="5" fill="#FAF9F6" stroke="#2563eb" strokeWidth="3" />
          <line x1="150" y1="130" x2="150" y2="90" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
          <text x="150" y="145" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#475569">x = c</text>
          <text x="40" y="93" fontSize="10" fontWeight="bold" textAnchor="end" fill="#2563eb">L₁</text>
          <text x="40" y="44" fontSize="10" fontWeight="bold" textAnchor="end" fill="#2563eb">L₂</text>
          <text x="165" y="95" fontSize="9" fontWeight="bold" fill="#2563eb">lim(x→c⁻) = L₁</text>
          <text x="165" y="40" fontSize="9" fontWeight="bold" fill="#2563eb">lim(x→c⁺) = L₂</text>
          <text x="165" y="68" fontSize="9" fontWeight="black" fill="#dc2626">L₁ ≠ L₂ ➔ Limit DNE</text>
        </>
      );

    case 'vertical_asymptote':
      return (
        <>
          <line x1="20" y1="80" x2="280" y2="80" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="10" x2="50" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="150" y1="10" x2="150" y2="150" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 4" />
          <path d="M 60 70 Q 130 75 142 150" fill="none" stroke="#7c3aed" strokeWidth="3" />
          <path d="M 158 10 Q 170 85 260 90" fill="none" stroke="#7c3aed" strokeWidth="3" />
          <text x="150" y="158" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#dc2626">VA: x = c</text>
          <text x="70" y="140" fontSize="9" fontWeight="bold" fill="#7c3aed">lim(x→c⁻) = -∞</text>
          <text x="175" y="25" fontSize="9" fontWeight="bold" fill="#7c3aed">lim(x→c⁺) = +∞</text>
        </>
      );

    case 'corner_not_differentiable':
      return (
        <>
          <line x1="20" y1="120" x2="280" y2="120" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="150" y1="10" x2="150" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="60" y1="30" x2="150" y2="120" stroke="#059669" strokeWidth="3.5" />
          <line x1="150" y1="120" x2="240" y2="30" stroke="#059669" strokeWidth="3.5" />
          <circle cx="150" cy="120" r="5" fill="#059669" />
          <text x="75" y="80" fontSize="9" fontWeight="bold" fill="#059669">Slope = -1</text>
          <text x="215" y="80" fontSize="9" fontWeight="bold" fill="#059669">Slope = +1</text>
          <text x="150" y="140" fontSize="10" fontWeight="black" textAnchor="middle" fill="#dc2626">Sharp Corner (0, 0)</text>
          <text x="150" y="153" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#64748b">f'(0) Does Not Exist</text>
        </>
      );

    case 'ivt_guarantee':
      return (
        <>
          <line x1="20" y1="130" x2="280" y2="130" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="45" y1="10" x2="45" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="45" y1="70" x2="270" y2="70" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" />
          <text x="40" y="74" fontSize="10" fontWeight="bold" textAnchor="end" fill="#f59e0b">y = d</text>
          <path d="M 70 115 C 110 110, 130 85, 155 70 C 180 55, 200 40, 240 30" fill="none" stroke="#4f46e5" strokeWidth="3.5" />
          <circle cx="70" cy="115" r="4.5" fill="#4f46e5" />
          <line x1="70" y1="115" x2="70" y2="130" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <text x="70" y="145" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#475569">a</text>
          <circle cx="240" cy="30" r="4.5" fill="#4f46e5" />
          <line x1="240" y1="30" x2="240" y2="130" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <text x="240" y="145" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#475569">b</text>
          <circle cx="155" cy="70" r="5" fill="#16a34a" />
          <line x1="155" y1="70" x2="155" y2="130" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="155" y="145" fontSize="10" fontWeight="black" textAnchor="middle" fill="#16a34a">c</text>
          <text x="165" y="65" fontSize="9" fontWeight="black" fill="#16a34a">f(c) = d</text>
        </>
      );

    case 'tangent_secant_line':
      return (
        <>
          <line x1="20" y1="135" x2="280" y2="135" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="45" y1="10" x2="45" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M 50 130 Q 140 120 245 25" fill="none" stroke="#2563eb" strokeWidth="3" />
          <line x1="75" y1="130" x2="235" y2="40" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" />
          <line x1="70" y1="125" x2="190" y2="65" stroke="#7c3aed" strokeWidth="2.5" />
          <circle cx="110" cy="105" r="4.5" fill="#7c3aed" />
          <circle cx="210" cy="55" r="4.5" fill="#f59e0b" />
          <text x="110" y="148" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#475569">x</text>
          <text x="210" y="148" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#475569">x + h</text>
          <text x="120" y="70" fontSize="9" fontWeight="bold" fill="#7c3aed">Tangent: Slope = f'(x)</text>
          <text x="165" y="45" fontSize="8.5" fontWeight="bold" fill="#f59e0b">Secant: Δy / h</text>
        </>
      );

    case 'derivative_graphs_f_fprime':
      return (
        <>
          <line x1="20" y1="80" x2="280" y2="80" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="45" y1="10" x2="45" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M 50 110 C 80 40, 110 30, 140 70 C 170 110, 200 120, 240 40" fill="none" stroke="#2563eb" strokeWidth="3" />
          <path d="M 60 20 Q 140 150 230 20" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 3" />
          <line x1="95" y1="35" x2="95" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="185" y1="110" x2="185" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="95" cy="80" r="4" fill="#dc2626" />
          <circle cx="185" cy="80" r="4" fill="#dc2626" />
          <text x="245" y="45" fontSize="9" fontWeight="bold" fill="#2563eb">f(x)</text>
          <text x="235" y="25" fontSize="9" fontWeight="bold" fill="#dc2626">f'(x)</text>
          <text x="95" y="93" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#dc2626">f'=0 (Max)</text>
          <text x="185" y="93" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#dc2626">f'=0 (Min)</text>
        </>
      );

    case 'concavity_inflection':
      return (
        <>
          <line x1="20" y1="130" x2="280" y2="130" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="45" y1="10" x2="45" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M 60 125 C 100 40, 130 50, 150 80 C 170 110, 200 120, 240 25" fill="none" stroke="#db2777" strokeWidth="3" />
          <line x1="105" y1="120" x2="195" y2="40" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="150" cy="80" r="5" fill="#7c3aed" />
          <text x="80" y="55" fontSize="8.5" fontWeight="bold" fill="#db2777">f'' &lt; 0 (Down)</text>
          <text x="210" y="105" fontSize="8.5" fontWeight="bold" fill="#db2777">f'' &gt; 0 (Up)</text>
          <text x="150" y="98" fontSize="9" fontWeight="black" textAnchor="middle" fill="#7c3aed">Point of Inflection</text>
        </>
      );

    case 'riemann_sum_rectangles':
      return (
        <>
          <line x1="20" y1="130" x2="280" y2="130" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="45" y1="10" x2="45" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="70" y="105" width="40" height="25" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
          <rect x="110" y="85" width="40" height="45" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
          <rect x="150" y="60" width="40" height="70" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
          <rect x="190" y="30" width="40" height="100" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
          <path d="M 60 120 Q 140 100 240 20" fill="none" stroke="#2563eb" strokeWidth="3" />
          <text x="70" y="145" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#475569">a</text>
          <text x="230" y="145" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#475569">b</text>
          <text x="130" y="145" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#16a34a">Δx = (b-a)/n</text>
          <text x="150" y="20" fontSize="9" fontWeight="bold" fill="#2563eb">f(x) curve</text>
        </>
      );

    case 'slope_field_solution':
      return (
        <>
          <line x1="20" y1="80" x2="280" y2="80" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="150" y1="10" x2="150" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          {[-60, -30, 0, 30, 60].map((dx, ix) => 
            [-40, -20, 0, 20, 40].map((dy, iy) => (
              <line 
                key={`${ix}-${iy}`}
                x1={150 + dx - 6} 
                y1={80 + dy - (dx > 0 ? 4 : -4)} 
                x2={150 + dx + 6} 
                y2={80 + dy + (dx > 0 ? 4 : -4)} 
                stroke="#94a3b8" 
                strokeWidth="1.5" 
              />
            ))
          )}
          <path d="M 80 130 Q 140 100 180 50 Q 210 20 230 15" fill="none" stroke="#4f46e5" strokeWidth="3" />
          <circle cx="150" cy="80" r="5" fill="#dc2626" />
          <text x="158" y="76" fontSize="9" fontWeight="black" fill="#dc2626">(x₀, y₀)</text>
          <text x="210" y="40" fontSize="9" fontWeight="bold" fill="#4f46e5">y = f(x) solution</text>
        </>
      );

    case 'area_between_curves_disc':
      return (
        <>
          <line x1="20" y1="130" x2="280" y2="130" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="45" y1="10" x2="45" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M 80 110 Q 140 40 220 50 L 220 100 Q 140 85 80 110 Z" fill="#e0e7ff" stroke="none" />
          <path d="M 70 120 Q 140 40 240 50" fill="none" stroke="#4f46e5" strokeWidth="3" />
          <path d="M 70 120 Q 140 85 240 100" fill="none" stroke="#059669" strokeWidth="3" />
          <rect x="150" y="55" width="10" height="35" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
          <text x="170" y="65" fontSize="8" fontWeight="bold" fill="#d97706">dx</text>
          <text x="245" y="50" fontSize="9" fontWeight="bold" fill="#4f46e5">y = f(x) (Top)</text>
          <text x="245" y="100" fontSize="9" fontWeight="bold" fill="#059669">y = g(x) (Bottom)</text>
          <text x="80" y="145" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#475569">a</text>
          <text x="220" y="145" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#475569">b</text>
        </>
      );

    default:
      return null;
  }
}

/**
 * Component for Rendering Crisp, Responsive Visual Math Graphs & Figures in App Notes
 * Arranged one per row with an interactive Full Page Tap feature
 */
function MathDiagramView({ diagram, onExpand }: { diagram: APNoteDiagram; onExpand?: () => void }) {
  const badge = getDiagramBadge(diagram.type);

  return (
    <div 
      onClick={onExpand}
      className="bg-white p-5 rounded-2xl border border-zinc-200/90 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer space-y-3.5 group"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h4 className="font-black text-sm text-zinc-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
            <span>{diagram.title}</span>
          </h4>
          <p className="text-xs text-zinc-600 font-medium">{diagram.subtitle}</p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <span className={`text-[10px] font-bold ${badge.bg} ${badge.text} px-2 py-0.5 rounded-md border ${badge.border}`}>
            {badge.label}
          </span>
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); onExpand?.(); }}
            className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-lg border border-indigo-200/80 transition-all hover:scale-105 active:scale-95"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Full Page</span>
          </button>
        </div>
      </div>

      <div className="bg-zinc-50 rounded-xl p-4 flex flex-col items-center justify-center border border-zinc-100 group-hover:border-indigo-100 transition-colors">
        <svg viewBox="0 0 300 160" className="w-full max-w-sm sm:max-w-md h-40 sm:h-48">
          {renderDiagramSvgContent(diagram.type)}
        </svg>
        <div className="text-[10px] text-zinc-400 font-semibold text-center mt-2 flex items-center justify-center gap-1">
          <span>🔍</span>
          <span>Tap graph anywhere to open high-resolution full page view</span>
        </div>
      </div>

      <p className="text-xs text-zinc-600 leading-relaxed font-normal">{diagram.description}</p>
      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/70 text-xs text-amber-950 font-medium">
        💡 <strong>AP Exam Takeaway:</strong> {diagram.takeaway}
      </div>
    </div>
  );
}

/**
 * High-Resolution Full-Page Modal Viewer for Calculus Visual Diagrams
 */
interface DiagramFullPageModalProps {
  diagram: APNoteDiagram;
  diagrams: APNoteDiagram[];
  onClose: () => void;
  onSelectDiagram: (diag: APNoteDiagram) => void;
}

function DiagramFullPageModal({
  diagram,
  diagrams,
  onClose,
  onSelectDiagram
}: DiagramFullPageModalProps) {
  const currentIndex = diagrams.findIndex(d => d.id === diagram.id);
  const prevDiagram = currentIndex > 0 ? diagrams[currentIndex - 1] : null;
  const nextDiagram = currentIndex < diagrams.length - 1 ? diagrams[currentIndex + 1] : null;
  const badge = getDiagramBadge(diagram.type);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && prevDiagram) onSelectDiagram(prevDiagram);
      else if (e.key === 'ArrowRight' && nextDiagram) onSelectDiagram(nextDiagram);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, prevDiagram, nextDiagram, onSelectDiagram]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/90">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full">
                Figure {currentIndex + 1} of {diagrams.length}
              </span>
              <span className={`text-[10px] font-bold ${badge.bg} ${badge.text} px-2 py-0.5 rounded-md border ${badge.border}`}>
                {badge.label}
              </span>
            </div>
            <h3 className="font-black text-base sm:text-lg text-zinc-900 mt-1">
              {diagram.title}
            </h3>
            <p className="text-xs text-zinc-600 font-medium">
              {diagram.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* High-Resolution Vector Graphic Canvas */}
          <div className="bg-gradient-to-b from-zinc-50 to-indigo-50/25 rounded-2xl p-6 sm:p-8 border border-zinc-200/80 flex flex-col items-center justify-center">
            <div className="w-full flex justify-center">
              <svg viewBox="0 0 300 160" className="w-full max-w-xl sm:max-w-2xl h-64 sm:h-80">
                {renderDiagramSvgContent(diagram.type)}
              </svg>
            </div>
            <div className="text-[11px] text-zinc-500 font-semibold text-center mt-3">
              High-Precision Vector Coordinate Graphic (College Board CED Standard)
            </div>
          </div>

          {/* Geometric Calculus Analysis */}
          <div className="space-y-2 bg-zinc-50 p-4 rounded-2xl border border-zinc-200/70">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-800 flex items-center gap-1.5">
              <span>📐</span>
              <span>Geometric Concept & Calculus Analysis</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              {diagram.description}
            </p>
          </div>

          {/* AP Exam Scoring Takeaway */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-amber-900 text-xs uppercase tracking-wider">
              <span>💡</span>
              <span>AP Exam Scoring Takeaway & Traps</span>
            </div>
            <p className="leading-relaxed">
              {diagram.takeaway}
            </p>
          </div>
        </div>

        {/* Modal Footer Navigation */}
        <div className="p-4 border-t border-zinc-100 bg-zinc-50 flex items-center justify-between">
          <button
            type="button"
            disabled={!prevDiagram}
            onClick={() => prevDiagram && onSelectDiagram(prevDiagram)}
            className="flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Graph</span>
          </button>

          <span className="text-xs text-zinc-500 font-semibold">
            {currentIndex + 1} / {diagrams.length}
          </span>

          <button
            type="button"
            disabled={!nextDiagram}
            onClick={() => nextDiagram && onSelectDiagram(nextDiagram)}
            className="flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <span>Next Graph</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Modal to view and manage all in-app downloaded PDF notes for offline study
 */
function OfflineNotesModal({
  isOpen,
  onClose,
  notes,
  onOpenNote,
  onDeleteNote,
}: {
  isOpen: boolean;
  onClose: () => void;
  notes: OfflineNoteMeta[];
  onOpenNote: (note: OfflineNoteMeta) => void;
  onDeleteNote: (note: OfflineNoteMeta) => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#FAF9F6] flex flex-col animate-fade-in">
      {/* Top Mobile Header */}
      <header className="px-4 py-3.5 border-b border-zinc-200/80 bg-white sticky top-0 z-10 flex items-center justify-between shrink-0 shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              triggerVibration(10);
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            title="Back to Course Notes"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-black text-zinc-900 text-sm tracking-tight">Saved Offline Notes</h3>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                {notes.length} Ready
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 font-medium">
              Downloaded in app • Study anytime offline
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            triggerVibration(10);
            onClose();
          }}
          className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </header>

      {/* Content List */}
      <div className="flex-1 overflow-y-auto p-4 max-w-2xl mx-auto w-full space-y-3">
        {notes.length === 0 ? (
          <div className="py-20 px-4 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-3xl bg-white border border-zinc-200 text-3xl flex items-center justify-center mb-3 shadow-xs">
              📥
            </div>
            <h4 className="font-bold text-zinc-900 text-sm">No Offline Notes Saved Yet</h4>
            <p className="text-xs text-zinc-500 mt-1.5 max-w-xs leading-relaxed">
              Tap the download icon on any unit in AP Notes to save it inside the app for instant study anytime without internet.
            </p>
          </div>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="p-4 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-500/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
            >
              <div className="min-w-0 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200/70 font-black text-xs flex items-center justify-center shrink-0">
                  U{note.unitNumber}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h5 className="font-bold text-xs text-zinc-900 truncate">
                      Unit {note.unitNumber}: {note.title}
                    </h5>
                    {note.subjectTitle && (
                      <span className="text-[9px] font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200/70 px-1.5 py-0.5 rounded shrink-0">
                        {note.subjectTitle}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-[10px] text-zinc-500 font-medium">
                      {note.examWeight}
                    </span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded font-mono font-bold">
                      {note.fileSize}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      {note.pageCount} Pages
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <button
                  onClick={() => onOpenNote(note)}
                  className="h-8 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read PDF</span>
                </button>

                <button
                  onClick={() => onDeleteNote(note)}
                  className="w-8 h-8 rounded-xl bg-zinc-100 hover:bg-red-50 text-zinc-500 hover:text-red-600 border border-zinc-200 flex items-center justify-center transition-all cursor-pointer"
                  title="Delete from in-app storage"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Mobile Footer */}
      <footer className="p-3 border-t border-zinc-200/80 bg-white text-center shrink-0">
        <p className="text-[10px] text-zinc-500 font-medium">
          Saved securely in local app storage (IndexedDB) • Reads 100% offline
        </p>
      </footer>
    </div>
  );
}

export default function APNotes({ onBack }: APNotesProps) {
  const [step, setStep] = useState<Step>('select-subject');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('ap-calculus-ab');
  const [expandedSubjectIds, setExpandedSubjectIds] = useState<Set<string>>(() => new Set(['ap-calculus-ab', 'ap-physics', 'ap-chemistry', 'ap-biology']));
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedUnitId, setSelectedUnitId] = useState<string>('u1');
  const [activeTab, setActiveTab] = useState<'all' | 'theorems' | 'formulas' | 'examples' | 'diagrams' | 'traps' | 'cram'>('all');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [isSharing, setIsSharing] = useState<boolean>(false);
  const [selectedDiagram, setSelectedDiagram] = useState<APNoteDiagram | null>(null);
  const [viewMode, setViewMode] = useState<'pdf' | 'interactive'>('pdf');
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  // In-App Offline Notes State
  const [downloadedUnitIds, setDownloadedUnitIds] = useState<Set<string>>(() => new Set(getDownloadedUnitIdsSync()));
  const [offlineNotes, setOfflineNotes] = useState<OfflineNoteMeta[]>([]);
  const [showOfflineDrawer, setShowOfflineDrawer] = useState<boolean>(false);
  const [downloadToast, setDownloadToast] = useState<{ show: boolean; message: string } | null>(null);

  // Load offline notes manifest on mount and listen for real-time updates
  useEffect(() => {
    const refreshManifest = async () => {
      const items = await getOfflineNotesManifest();
      setOfflineNotes(items);
      const ids = new Set<string>();
      items.forEach(i => {
        if (i.id) ids.add(i.id);
        if (i.unitId) ids.add(i.unitId);
        if (i.subjectId && i.unitId) ids.add(`${i.subjectId}_${i.unitId}`);
      });
      setDownloadedUnitIds(ids);
    };

    refreshManifest();
    window.addEventListener('offline-notes-updated', refreshManifest);
    return () => window.removeEventListener('offline-notes-updated', refreshManifest);
  }, []);

  const allSupportedSubjects = getAllSupportedNoteSubjects();
  const currentSubjectEntry: APSubjectNoteEntry = AP_NOTES_REGISTRY[selectedSubjectId] || AP_NOTES_REGISTRY['ap-calculus-ab'];
  const currentSubjectUnits: APUnitNote[] = currentSubjectEntry.notes;
  const currentUnitIndex = currentSubjectUnits.findIndex(u => u.unitId === selectedUnitId);
  const currentUnit: APUnitNote = currentUnitIndex !== -1 ? currentSubjectUnits[currentUnitIndex] : (currentSubjectUnits[0] || currentSubjectUnits[0]);
  const safeUnitIndex = currentUnitIndex !== -1 ? currentUnitIndex : 0;

  const toggleSubjectExpanded = (subjectId: string) => {
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

  // Reusable PDF Generator Document Builder with Crystal-Clear Math Formatting & Dynamic Subject Branding
  const buildUnitPdfDocument = (unit: APUnitNote, subject: APSubjectNoteEntry = currentSubjectEntry): jsPDF => {
    const doc = new jsPDF({
      unit: 'pt',
      format: 'a4',
      orientation: 'portrait'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 36;
    const contentWidth = pageWidth - (margin * 2);

    let currentY = 0;
    let currentPage = 1;

    const drawHeader = (isFirstPage: boolean) => {
      if (isFirstPage) {
        doc.setFillColor(30, 27, 75); // Deep Indigo (#1e1b4b)
        doc.rect(0, 0, pageWidth, 74, 'F');

        doc.setFillColor(99, 102, 241); // Indigo-500 strip
        doc.rect(0, 74, pageWidth, 3, 'F');

        doc.setTextColor(251, 191, 36); // Gold Amber
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.text(`HELPYOU AI  |  ${subject.subjectName.toUpperCase()} OFFICIAL STUDY GUIDE`, margin, 24);

        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13.5);
        doc.text(`Unit ${unit.unitNumber}: ${sanitizePdfText(unit.title)}`, margin, 46);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(226, 232, 240);
        doc.text(`College Board CED Weight: ${unit.examWeight}   |   Official Comprehensive Guide`, margin, 62);

        currentY = 96;
      } else {
        doc.setFillColor(248, 250, 252);
        doc.rect(0, 0, pageWidth, 28, 'F');
        doc.setDrawColor(226, 232, 240);
        doc.line(0, 28, pageWidth, 28);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.text(`${subject.subjectName} - Unit ${unit.unitNumber}: ${sanitizePdfText(unit.title)}`, margin, 18);
        doc.text('HelpYou AI Official Notes', pageWidth - margin, 18, { align: 'right' });

        currentY = 46;
      }
    };

    const drawFooter = (pageNum: number) => {
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.5);
      doc.line(margin, pageHeight - 24, pageWidth - margin, pageHeight - 24);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text('Confidential & Educational • Aligned with Official College Board CED Standards', margin, pageHeight - 12);
      doc.text(`Page ${pageNum}`, pageWidth - margin, pageHeight - 12, { align: 'right' });
    };

    const checkPageBreak = (neededHeight: number) => {
      if (currentY + neededHeight > pageHeight - 40) {
        doc.addPage();
        currentPage++;
        drawHeader(false);
        drawFooter(currentPage);
      }
    };

    drawHeader(true);
    drawFooter(currentPage);

    // ─── Layout constants ──────────────────────────────────────────────────────
    const LH    = 11.5;   // Standard line height (pt)
    const LH_SM = 10;     // Small line height (pt)
    const SEC_GAP  = 20;  // Gap between major sections
    const ITEM_GAP = 8;   // Gap between items within a section
    const INDENT   = 8;   // Left indent for sub-content
    const TEXT_W   = contentWidth - (INDENT * 2);

    // ─── Section: Big Idea ────────────────────────────────────────────────────
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    const ideaLines = doc.splitTextToSize(sanitizePdfText(unit.bigIdea), contentWidth - 28);
    const ideaBoxH  = 18 + ideaLines.length * LH + 8;
    doc.setFillColor(245, 243, 255);
    doc.setDrawColor(196, 181, 253);
    doc.setLineWidth(0.75);
    doc.roundedRect(margin, currentY, contentWidth, ideaBoxH, 4, 4, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(109, 40, 217);
    doc.text('CORE CED BIG IDEA', margin + 10, currentY + 11);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(55, 48, 163);
    doc.text(ideaLines, margin + 10, currentY + 22);
    currentY += ideaBoxH + SEC_GAP;

    // ─── Section 1: Key Theorems ──────────────────────────────────────────────
    if (unit.keyTheorems.length > 0) {
      checkPageBreak(45);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('1. Key Theorems & Formal Conditions', margin, currentY);
      currentY += 16;

      unit.keyTheorems.forEach(thm => {
        // Pre-measure all text blocks with exact fonts
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        const condLines  = doc.splitTextToSize(sanitizePdfText(thm.conditions), contentWidth - 76);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        const conclLines = doc.splitTextToSize(sanitizePdfText(formatMathForPdf(thm.conclusion)), contentWidth - 76);
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(7.5);
        const tipLines   = doc.splitTextToSize(`AP Tip: ${sanitizePdfText(thm.apTip)}`, contentWidth - INDENT - 16);
        const tipBoxH    = tipLines.length * LH_SM + 12;
        const thmBoxH    = 24 + (condLines.length * LH + 6) + (conclLines.length * LH + 8) + tipBoxH + 16;
        checkPageBreak(thmBoxH + ITEM_GAP);

        // Header banner (clean height + accent bar)
        doc.setFillColor(220, 252, 231);
        doc.setDrawColor(134, 239, 172);
        doc.setLineWidth(0.6);
        doc.roundedRect(margin, currentY, contentWidth, 20, 2.5, 2.5, 'FD');
        doc.setFillColor(34, 197, 94);
        doc.roundedRect(margin, currentY, 4, 20, 2, 2, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(21, 128, 61);
        doc.text(sanitizePdfText(thm.name), margin + INDENT + 4, currentY + 13.5);
        // Generous vertical clearance so conditions text NEVER touches the banner!
        currentY += 28;

        // Conditions
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);
        doc.text('Conditions:', margin + INDENT, currentY + 8);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 41, 59);
        doc.text(condLines, margin + 70, currentY + 8);
        currentY += Math.max(1, condLines.length) * LH + 8;

        // Conclusion (Bold, Deep Indigo, Perfectly Measured - No Cutoff!)
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);
        doc.text('Conclusion:', margin + INDENT, currentY + 8);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(49, 46, 129); // Deep Indigo
        doc.text(conclLines, margin + 70, currentY + 8);
        currentY += Math.max(1, conclLines.length) * LH + 10;

        // AP Tip Callout Box
        doc.setFillColor(255, 251, 235);
        doc.setDrawColor(254, 215, 170);
        doc.setLineWidth(0.5);
        doc.roundedRect(margin + INDENT, currentY, contentWidth - INDENT, tipBoxH, 2, 2, 'FD');
        doc.setFillColor(245, 158, 11);
        doc.rect(margin + INDENT, currentY, 3, tipBoxH, 'F');
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(7.5);
        doc.setTextColor(161, 72, 9);
        doc.text(tipLines, margin + INDENT + 8, currentY + 9);
        currentY += tipBoxH + ITEM_GAP + 6;
      });
      currentY += SEC_GAP - ITEM_GAP;
    }

    // ─── Section 2: Essential Formulas ───────────────────────────────────────
    checkPageBreak(45);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text('2. Essential Formulas & Limit Definitions', margin, currentY);
    currentY += 16;

    unit.formulas.forEach(f => {
      const cleanMath = formatMathForPdf(f.latex);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      
      // Split by newlines first (for multi-line aligned formulas), then wrap to container width
      const mathLines: string[] = [];
      cleanMath.split('\n').forEach(part => {
        const wrapped = doc.splitTextToSize(sanitizePdfText(part), contentWidth - 36);
        mathLines.push(...wrapped);
      });

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      const explLines = doc.splitTextToSize(sanitizePdfText(f.explanation), contentWidth - 32);
      
      const mathBoxH = mathLines.length * (LH + 1) + 12;
      const fBoxH = 18 + mathBoxH + (explLines.length * LH_SM) + 16;
      checkPageBreak(fBoxH + ITEM_GAP);

      // Card background
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(203, 213, 225);
      doc.setLineWidth(0.6);
      doc.roundedRect(margin, currentY, contentWidth, fBoxH, 3, 3, 'FD');
      // Accent left border
      doc.setFillColor(99, 102, 241);
      doc.rect(margin, currentY, 4, fBoxH, 'F');

      // Formula name
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(sanitizePdfText(f.name), margin + 12, currentY + 13);

      // Math expression inside prominent tinted pill container
      const mathBoxY = currentY + 20;
      doc.setFillColor(238, 242, 255);
      doc.setDrawColor(199, 210, 254);
      doc.setLineWidth(0.5);
      doc.roundedRect(margin + 10, mathBoxY, contentWidth - 20, mathBoxH, 2, 2, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(30, 58, 138); // Crisp deep blue/indigo math font
      doc.text(mathLines, margin + 16, mathBoxY + 12);

      // Explanation note
      const explStartY = mathBoxY + mathBoxH + 6;
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.setTextColor(71, 85, 105);
      doc.text(explLines, margin + 12, explStartY + 8);

      currentY += fBoxH + ITEM_GAP + 2;
    });
    currentY += SEC_GAP - ITEM_GAP;

    // ─── Helper: Render markdown table rows in jsPDF ──────────────────────────
    const TABLE_CELL_LH   = 9.5;  // line-height inside table cells
    const TABLE_PAD_V     = 5.5;  // top & bottom cell padding
    const TABLE_PAD_H     = 5;    // left cell padding

    // Helper: clean a raw table cell — strip markdown, LaTeX, bold, italic
    const cleanTableCell = (raw: string): string => {
      let s = raw;
      // 1. Protect escaped pipes (\|) used for absolute value notation → temp token
      s = s.replace(/\\\|/g, '__PIPE__');
      // 2. Strip LaTeX inline math $...$ → convert via formatMathForPdf
      s = s.replace(/\$\$?([^$]+)\$\$?/g, (_m, inner) => formatMathForPdf(inner));
      // 3. Strip bold **text** → text
      s = s.replace(/\*\*([^*]+)\*\*/g, '$1');
      // 4. Strip italic *text* or _text_ → text
      s = s.replace(/\*([^*]+)\*/g, '$1').replace(/_([^_]+)_/g, '$1');
      // 5. Strip backtick code `text`
      s = s.replace(/`([^`]+)`/g, '$1');
      // 6. Strip remaining LaTeX backslash commands
      s = s.replace(/\\[a-zA-Z]+/g, '');
      // 7. Strip lone curly braces
      s = s.replace(/[{}]/g, '');
      // 8. Restore escaped pipes as readable symbol
      s = s.replace(/__PIPE__/g, '|');
      return sanitizePdfText(s.replace(/\s+/g, ' ').trim());
    };

    const drawMarkdownTableInPdf = (rawTable: string) => {
      // Step 1: Pre-escape \| so absolute value bars don't break column splitting
      const safeTable = rawTable.replace(/\\\|/g, '__PIPE__');

      // Step 2: Split into lines, filter out separator rows (---|---) and blanks
      const rows = safeTable
        .trim()
        .split('\n')
        .filter(l => {
          const t = l.trim();
          return t.startsWith('|') && t.endsWith('|') && !/^[|\s:\-]+$/.test(t);
        });
      if (rows.length === 0) return;

      // Step 3: Parse each row into string[] of cells
      const parsedRows: string[][] = rows.map(row => {
        const inner = row.trim().replace(/^\|/, '').replace(/\|$/, '');
        return inner.split('|').map(c => c.replace(/__PIPE__/g, '|').trim());
      });

      // Step 4: Column count = header row length (avoids phantom columns from uneven rows)
      const colCount = parsedRows[0].length;
      if (colCount === 0) return;

      // Step 5: Scale font down for wide tables (>5 columns)
      const isWide = colCount > 5;
      const hdrFs  = isWide ? 6.5 : 7.5;
      const bodyFs = isWide ? 6   : 7;
      const colW   = contentWidth / colCount;

      // Step 6: Render each row
      parsedRows.forEach((cells, rIdx) => {
        const isHeader = rIdx === 0;
        const fs = isHeader ? hdrFs : bodyFs;
        const fw: 'bold' | 'normal' = isHeader ? 'bold' : 'normal';

        // Pre-calculate wrapped lines per cell → determines row height
        const cellLinesList: string[][] = Array.from({ length: colCount }, (_, ci) => {
          const rawCell  = cells[ci] ?? '';
          const clean = cleanTableCell(rawCell);
          doc.setFont('helvetica', fw);
          doc.setFontSize(fs);
          return doc.splitTextToSize(clean, colW - TABLE_PAD_H * 2 - 2);
        });
        const maxLines = Math.max(...cellLinesList.map(l => l.length), 1);
        const rowH     = TABLE_PAD_V + maxLines * TABLE_CELL_LH + TABLE_PAD_V;

        checkPageBreak(rowH + 2);

        // ── Row background ──
        if (isHeader) {
          doc.setFillColor(224, 231, 255);
        } else if (rIdx % 2 === 0) {
          doc.setFillColor(248, 250, 252);
        } else {
          doc.setFillColor(255, 255, 255);
        }
        doc.rect(margin, currentY, contentWidth, rowH, 'F');

        // ── Outer row border ──
        doc.setDrawColor(196, 202, 212);
        doc.setLineWidth(0.5);
        doc.rect(margin, currentY, contentWidth, rowH, 'D');

        // ── Cells: draw column separator then text ──
        for (let ci = 0; ci < colCount; ci++) {
          const cellX = margin + ci * colW;

          if (ci > 0) {
            doc.setDrawColor(196, 202, 212);
            doc.setLineWidth(0.35);
            doc.line(cellX, currentY + 1, cellX, currentY + rowH - 1);
          }

          const lines = cellLinesList[ci] || [];
          doc.setFont('helvetica', fw);
          doc.setFontSize(fs);
          doc.setTextColor(
            isHeader ? 49  : 51,
            isHeader ? 46  : 65,
            isHeader ? 129 : 85
          );
          lines.forEach((ln, li) => {
            // baseline = top of row + top-padding + (lineIndex * lineHeight)
            doc.text(ln, cellX + TABLE_PAD_H, currentY + TABLE_PAD_V + TABLE_CELL_LH * (li + 1) - 2);
          });
        }
        currentY += rowH;
      });
      currentY += ITEM_GAP + 2;
    };

    // ─── Helper: Parse content into typed blocks (text vs markdown table) ─────
    const parseContentBlocks = (text: string): Array<{ type: 'text' | 'table'; content: string }> => {
      const lns = text.split('\n');
      const blocks: Array<{ type: 'text' | 'table'; content: string }> = [];
      let textBuf: string[] = [];
      let tableBuf: string[] = [];
      let inTable = false;
      for (const ln of lns) {
        const t = ln.trim();
        const isTableLine = t.startsWith('|') && t.endsWith('|');
        if (isTableLine) {
          if (!inTable) {
            if (textBuf.length) { blocks.push({ type: 'text', content: textBuf.join('\n').trim() }); textBuf = []; }
            inTable = true;
          }
          tableBuf.push(ln);
        } else {
          if (inTable) { blocks.push({ type: 'table', content: tableBuf.join('\n').trim() }); tableBuf = []; inTable = false; }
          textBuf.push(ln);
        }
      }
      if (inTable && tableBuf.length) blocks.push({ type: 'table', content: tableBuf.join('\n').trim() });
      else if (textBuf.length) blocks.push({ type: 'text', content: textBuf.join('\n').trim() });
      return blocks.filter(b => b.content.trim().length > 0);
    };

    // ─── Helper: Render a plain text block, stripping markdown syntax ─────────
    const drawTextBlock = (raw: string) => {
      const inputLines = raw.split('\n');
      for (const ln of inputLines) {
        const t = ln.trim();
        if (!t) { currentY += 5; continue; } // blank line = small gap

        // Detect bullet / numbered list
        const isBullet   = /^[-*•]\s+/.test(t);
        const isNumbered = /^\d+\.\s+/.test(t);
        const indentX    = (isBullet || isNumbered) ? margin + INDENT + 8 : margin + INDENT;
        const wrapW      = contentWidth - INDENT - (isBullet || isNumbered ? 16 : 0);

        // Strip markdown formatting
        let clean = t
          .replace(/^\d+\.\s+/, '')          // numbered prefix
          .replace(/^[-*•]\s+/, '')          // bullet prefix
          .replace(/\*\*([^*]+)\*\*/g, '$1') // bold **...**
          .replace(/\*([^*]+)\*/g, '$1')     // italic *...*
          .replace(/`([^`]+)`/g, '$1')       // inline code
          .replace(/\$\$?([^$]+)\$\$?/g, (_m, m1) => formatMathForPdf(m1)) // math
          .trim();
        clean = sanitizePdfText(clean);
        if (!clean) continue;

        // Detect heading line inside content (starts with **...** originally)
        const wasHeading = /^\*\*[^*]+\*\*$/.test(t.trim());
        if (wasHeading) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8.5);
          doc.setTextColor(30, 41, 59);
        } else {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(51, 65, 85);
        }

        const wrappedLines = doc.splitTextToSize(clean, wrapW);
        const blockH = wrappedLines.length * LH;
        checkPageBreak(blockH + 6);

        // Bullet marker
        if (isBullet) {
          doc.setFillColor(99, 102, 241);
          doc.circle(margin + INDENT + 2, currentY + LH * 0.45, 1.8, 'F');
        } else if (isNumbered) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(7.5);
          doc.setTextColor(99, 102, 241);
          const num = t.match(/^(\d+)/)?.[1] ?? '';
          doc.text(`${num}.`, margin + INDENT, currentY + LH * 0.85);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(51, 65, 85);
        }

        doc.text(wrappedLines, indentX, currentY + LH * 0.85);
        // Generous spacing between bullet items so lists breathe and do not cram
        currentY += blockH + 6;
      }
    };

    // ─── Section 3: Topic Concepts & Procedures ───────────────────────────────
    if (unit.sections && unit.sections.length > 0) {
      checkPageBreak(40);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('3. Detailed Topic Concepts & Procedures (CED Curriculum)', margin, currentY);
      currentY += 14;

      unit.sections.forEach((sec, sIdx) => {
        checkPageBreak(30);
        // Section heading pill
        doc.setFillColor(241, 245, 249);
        doc.setDrawColor(203, 213, 225);
        doc.setLineWidth(0.5);
        doc.roundedRect(margin, currentY, contentWidth, 20, 3, 3, 'FD');
        doc.setFillColor(99, 102, 241);
        doc.roundedRect(margin, currentY, 4, 20, 2, 2, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(15, 23, 42);
        doc.text(sanitizePdfText(sec.heading), margin + 12, currentY + 13.5);
        currentY += 26;

        // Parse and render all content blocks
        const contentBlocks = parseContentBlocks(sec.content);
        contentBlocks.forEach(blk => {
          if (blk.type === 'table') {
            checkPageBreak(40);
            drawMarkdownTableInPdf(blk.content);
          } else {
            drawTextBlock(blk.content);
          }
        });

        // Gap between sections (less after last)
        currentY += sIdx < unit.sections.length - 1 ? ITEM_GAP + 4 : 4;
      });
      currentY += SEC_GAP - ITEM_GAP;
    }

    // Helper: Draw Direct High-Resolution Coordinate Vector Graphs in PDF
    const drawPdfVectorGraph = (diagram: APNoteDiagram) => {
      checkPageBreak(110);

      const graphBoxW = contentWidth;
      const graphBoxH = 106;
      const labelX = margin + 200; // right-side label column X

      // Background card with subtle shadow effect (double rect trick)
      doc.setFillColor(248, 250, 252);
      doc.roundedRect(margin + 1, currentY + 1, graphBoxW, graphBoxH, 4, 4, 'F');
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(203, 213, 225);
      doc.setLineWidth(0.75);
      doc.roundedRect(margin, currentY, graphBoxW, graphBoxH, 4, 4, 'FD');

      // Color accent bar on left edge
      const accentColors: Record<string, number[]> = {
        hole_discontinuity:        [99, 102, 241],
        jump_discontinuity:        [37, 99, 235],
        vertical_asymptote:        [220, 38, 38],
        corner_not_differentiable: [5, 150, 105],
        ivt_guarantee:             [79, 70, 229],
        tangent_secant_line:       [14, 165, 233],
        derivative_graphs_f_fprime:[139, 92, 246],
        concavity_inflection:      [236, 72, 153],
        riemann_sum_rectangles:    [16, 185, 129],
        slope_field_solution:      [245, 158, 11],
        area_between_curves_disc:  [99, 102, 241],
      };
      const ac = accentColors[diagram.type] || [100, 116, 139];
      doc.setFillColor(ac[0], ac[1], ac[2]);
      doc.roundedRect(margin, currentY, 4, graphBoxH, 2, 2, 'F');

      // Title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(`FIG: ${sanitizePdfText(diagram.title)}`, margin + 10, currentY + 13);

      // Subtitle
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7);
      doc.setTextColor(100, 116, 139);
      doc.text(sanitizePdfText(diagram.subtitle), margin + 10, currentY + 22);

      // Coordinate Graph Area
      const gx = margin + 10;
      const gy = currentY + 28;
      const gw = 184;
      const gh = 50;

      // Grid background
      doc.setFillColor(250, 250, 255);
      doc.rect(gx, gy, gw, gh, 'F');

      // Axis lines
      doc.setDrawColor(180, 192, 210);
      doc.setLineWidth(1.2);
      doc.line(gx, gy + gh - 10, gx + gw, gy + gh - 10); // x-axis
      doc.line(gx + 22, gy, gx + 22, gy + gh);            // y-axis

      // Axis arrowheads
      doc.setFillColor(180, 192, 210);
      doc.triangle(gx + gw, gy + gh - 10, gx + gw - 4, gy + gh - 13, gx + gw - 4, gy + gh - 7, 'F');
      doc.triangle(gx + 22, gy, gx + 19, gy + 5, gx + 25, gy + 5, 'F');

      // Axis labels
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.5);
      doc.setTextColor(148, 163, 184);
      doc.text('x', gx + gw - 2, gy + gh - 2);
      doc.text('y', gx + 24, gy + 4);

      if (diagram.type === 'hole_discontinuity') {
        doc.setDrawColor(99, 102, 241);
        doc.setLineWidth(2);
        doc.line(gx + 26, gy + 34, gx + 88, gy + 18);
        doc.line(gx + 93, gy + 16, gx + 166, gy + 7);
        // Open circle (hole at limit value)
        doc.setDrawColor(99, 102, 241);
        doc.setFillColor(255, 255, 255);
        doc.circle(gx + 90, gy + 17, 3, 'FD');
        // Defined point at different y-value
        doc.setFillColor(220, 38, 38);
        doc.circle(gx + 90, gy + 32, 2.5, 'F');
        // Labels on graph
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.setTextColor(99, 102, 241);
        doc.text('L', gx + 2, gy + 19);
        doc.setTextColor(220, 38, 38);
        doc.text('f(c)', gx + 2, gy + 34);
        doc.setTextColor(100, 116, 139);
        doc.text('c', gx + 88, gy + gh - 1);
        // Right-side legend
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(99, 102, 241);
        doc.text('lim f(x) = L  (Exists)', labelX, currentY + 36);
        doc.setTextColor(220, 38, 38);
        doc.text('f(c) != L  (Removable Hole)', labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const tw1 = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(tw1, labelX, currentY + 58);

      } else if (diagram.type === 'jump_discontinuity') {
        doc.setDrawColor(37, 99, 235);
        doc.setLineWidth(2);
        doc.line(gx + 26, gy + 34, gx + 90, gy + 28);
        doc.setFillColor(37, 99, 235);
        doc.circle(gx + 90, gy + 28, 2.5, 'F');
        doc.line(gx + 90, gy + 14, gx + 166, gy + 7);
        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(37, 99, 235);
        doc.circle(gx + 90, gy + 14, 3, 'FD');
        // Labels
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.setTextColor(37, 99, 235);
        doc.text('L1', gx + 2, gy + 30);
        doc.text('L2', gx + 2, gy + 16);
        doc.setTextColor(100, 116, 139);
        doc.text('c', gx + 88, gy + gh - 1);
        // Right-side legend
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(220, 38, 38);
        doc.text('lim(x->c-) = L1 != L2 = lim(x->c+)', labelX, currentY + 36);
        doc.text('Two-Sided Limit: DNE (Jump)', labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const tw2 = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(tw2, labelX, currentY + 58);

      } else if (diagram.type === 'vertical_asymptote') {
        // Dashed VA line at x = gx+90
        doc.setDrawColor(220, 38, 38);
        doc.setLineWidth(0.8);
        for (let dy = gy + 2; dy < gy + gh - 2; dy += 5) {
          doc.line(gx + 90, dy, gx + 90, dy + 2.5);
        }
        // Curve left branch shooting to -inf
        doc.setDrawColor(124, 58, 237);
        doc.setLineWidth(2);
        doc.line(gx + 26, gy + 26, gx + 86, gy + gh - 6);
        // Curve right branch shooting to +inf
        doc.line(gx + 94, gy + 5, gx + 166, gy + 28);
        // VA label
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.setTextColor(220, 38, 38);
        doc.text('x=c', gx + 92, gy + gh - 2);
        // Right-side legend
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(220, 38, 38);
        doc.text('VA: x = c  (Vertical Asymptote)', labelX, currentY + 36);
        doc.setTextColor(124, 58, 237);
        doc.text('lim f(x) = +/- infinity  (DNE)', labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const tw3 = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(tw3, labelX, currentY + 58);

      } else if (diagram.type === 'corner_not_differentiable') {
        doc.setDrawColor(5, 150, 105);
        doc.setLineWidth(2);
        doc.line(gx + 30, gy + 12, gx + 90, gy + 38);
        doc.line(gx + 90, gy + 38, gx + 158, gy + 12);
        doc.setFillColor(5, 150, 105);
        doc.circle(gx + 90, gy + 38, 3, 'F');
        // Slope labels
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.setTextColor(5, 150, 105);
        doc.text('m=-1', gx + 32, gy + 30);
        doc.text('m=+1', gx + 120, gy + 30);
        doc.setTextColor(100, 116, 139);
        doc.text('corner', gx + 82, gy + gh - 2);
        // Right-side legend
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(5, 150, 105);
        doc.text('f(x) is Continuous at corner', labelX, currentY + 36);
        doc.setTextColor(220, 38, 38);
        doc.text("f'(0) DNE  (Left slope != Right slope)", labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const tw4 = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(tw4, labelX, currentY + 58);

      } else if (diagram.type === 'ivt_guarantee') {
        // IVT Guarantee
        // Continuous curve from (a, f(a)) to (b, f(b))
        doc.setDrawColor(79, 70, 229);
        doc.setLineWidth(2);
        doc.line(gx + 28, gy + 38, gx + 80, gy + 22);
        doc.line(gx + 80, gy + 22, gx + 140, gy + 8);
        // Points a and b
        doc.setFillColor(79, 70, 229);
        doc.circle(gx + 28, gy + 38, 2.5, 'F');
        doc.circle(gx + 140, gy + 8, 2.5, 'F');
        // Horizontal dashed line y = d
        doc.setDrawColor(245, 158, 11);
        doc.setLineWidth(0.8);
        for (let dx = gx + 4; dx < gx + gw - 4; dx += 5) {
          doc.line(dx, gy + 22, dx + 2.5, gy + 22);
        }
        // c point where f(c) = d
        doc.setFillColor(22, 163, 74);
        doc.circle(gx + 80, gy + 22, 3, 'F');
        // Dashed vertical drop from c
        doc.setDrawColor(22, 163, 74);
        doc.setLineWidth(0.6);
        for (let dy = gy + 25; dy < gy + gh - 10; dy += 4) {
          doc.line(gx + 80, dy, gx + 80, dy + 2);
        }
        // Labels
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.setTextColor(79, 70, 229);
        doc.text('f(a)', gx + 2, gy + 40);
        doc.text('f(b)', gx + 2, gy + 10);
        doc.setTextColor(245, 158, 11);
        doc.text('d', gx + 2, gy + 24);
        doc.setTextColor(22, 163, 74);
        doc.text('f(c)=d', gx + 82, gy + 20);
        doc.setTextColor(100, 116, 139);
        doc.text('a', gx + 25, gy + gh - 2);
        doc.text('c', gx + 78, gy + gh - 2);
        doc.text('b', gx + 138, gy + gh - 2);
        // Right-side legend
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(79, 70, 229);
        doc.text('IVT: f continuous on [a, b]', labelX, currentY + 36);
        doc.setTextColor(22, 163, 74);
        doc.text('Exists c in (a,b) s.t. f(c) = d', labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const tw5 = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(tw5, labelX, currentY + 58);

      } else if (diagram.type === 'tangent_secant_line') {
        doc.setDrawColor(37, 99, 235);
        doc.setLineWidth(2);
        doc.line(gx + 30, gy + 42, gx + 90, gy + 32);
        doc.line(gx + 90, gy + 32, gx + 160, gy + 10);
        doc.setDrawColor(245, 158, 11);
        doc.setLineWidth(1);
        for (let dx = gx + 40; dx < gx + 155; dx += 6) {
          doc.line(dx, gy + 38 - (dx - (gx + 40)) * 0.25, dx + 3, gy + 38 - (dx - (gx + 40)) * 0.25);
        }
        doc.setDrawColor(124, 58, 237);
        doc.setLineWidth(1.8);
        doc.line(gx + 50, gy + 42, gx + 130, gy + 22);
        doc.setFillColor(124, 58, 237);
        doc.circle(gx + 90, gy + 32, 3, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(124, 58, 237);
        doc.text('Tangent Slope: f\'(x) = lim(h->0) [Δy/h]', labelX, currentY + 36);
        doc.setTextColor(245, 158, 11);
        doc.text('Secant Slope: [f(x+h) - f(x)] / h', labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const twT = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(twT, labelX, currentY + 58);

      } else if (diagram.type === 'derivative_graphs_f_fprime') {
        doc.setDrawColor(37, 99, 235);
        doc.setLineWidth(2);
        doc.line(gx + 30, gy + 35, gx + 70, gy + 12);
        doc.line(gx + 70, gy + 12, gx + 115, gy + 38);
        doc.line(gx + 115, gy + 38, gx + 160, gy + 16);
        doc.setDrawColor(220, 38, 38);
        doc.setLineWidth(1.5);
        for (let dx = gx + 35; dx < gx + 155; dx += 5) {
          doc.line(dx, gy + 25 - (dx - (gx + 92)) * 0.3, dx + 2.5, gy + 25 - (dx - (gx + 92)) * 0.3);
        }
        doc.setFillColor(220, 38, 38);
        doc.circle(gx + 70, gy + 40, 2.5, 'F');
        doc.circle(gx + 115, gy + 40, 2.5, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(37, 99, 235);
        doc.text('f(x) Extrema: Peaks & Valleys', labelX, currentY + 36);
        doc.setTextColor(220, 38, 38);
        doc.text('f\'(x) = 0 and changes sign', labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const twD = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(twD, labelX, currentY + 58);

      } else if (diagram.type === 'concavity_inflection') {
        doc.setDrawColor(219, 39, 119);
        doc.setLineWidth(2);
        doc.line(gx + 30, gy + 40, gx + 95, gy + 25);
        doc.line(gx + 95, gy + 25, gx + 160, gy + 10);
        doc.setFillColor(124, 58, 237);
        doc.circle(gx + 95, gy + 25, 3.5, 'F');
        doc.setDrawColor(124, 58, 237);
        doc.setLineWidth(1);
        doc.line(gx + 60, gy + 33, gx + 130, gy + 17);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(219, 39, 119);
        doc.text('Inflection Point: f\'\'(x) changes sign', labelX, currentY + 36);
        doc.setTextColor(124, 58, 237);
        doc.text('Tangent crosses THROUGH curve', labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const twC = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(twC, labelX, currentY + 58);

      } else if (diagram.type === 'riemann_sum_rectangles') {
        doc.setFillColor(220, 252, 231);
        doc.setDrawColor(22, 163, 74);
        doc.setLineWidth(0.8);
        doc.rect(gx + 40, gy + 28, 25, 12, 'FD');
        doc.rect(gx + 65, gy + 22, 25, 18, 'FD');
        doc.rect(gx + 90, gy + 15, 25, 25, 'FD');
        doc.rect(gx + 115, gy + 8, 25, 32, 'FD');
        doc.setDrawColor(37, 99, 235);
        doc.setLineWidth(2);
        doc.line(gx + 35, gy + 32, gx + 145, gy + 6);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(22, 163, 74);
        doc.text('Riemann Sum: Area ≈ Σ f(xᵢ) · Δx', labelX, currentY + 36);
        doc.setTextColor(37, 99, 235);
        doc.text('Definite Integral: Exact = ∫ f(x) dx', labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const twR = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(twR, labelX, currentY + 58);

      } else if (diagram.type === 'slope_field_solution') {
        doc.setDrawColor(148, 163, 184);
        doc.setLineWidth(1);
        for (let ix = gx + 35; ix <= gx + 150; ix += 20) {
          for (let iy = gy + 8; iy <= gy + 38; iy += 10) {
            const slope = (ix - (gx + 80)) * 0.05;
            doc.line(ix - 5, iy + 5 * slope, ix + 5, iy - 5 * slope);
          }
        }
        doc.setDrawColor(79, 70, 229);
        doc.setLineWidth(2);
        doc.line(gx + 35, gy + 38, gx + 85, gy + 22);
        doc.line(gx + 85, gy + 22, gx + 145, gy + 8);
        doc.setFillColor(220, 38, 38);
        doc.circle(gx + 85, gy + 22, 3, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(79, 70, 229);
        doc.text('Particular Solution Curve', labelX, currentY + 36);
        doc.setTextColor(220, 38, 38);
        doc.text('Passes through initial point (x₀, y₀)', labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const twS = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(twS, labelX, currentY + 58);

      } else if (diagram.type === 'area_between_curves_disc') {
        doc.setDrawColor(79, 70, 229);
        doc.setLineWidth(2);
        doc.line(gx + 35, gy + 38, gx + 145, gy + 12);
        doc.setDrawColor(5, 150, 105);
        doc.setLineWidth(1.8);
        doc.line(gx + 35, gy + 38, gx + 145, gy + 32);
        doc.setFillColor(254, 215, 170);
        doc.setDrawColor(245, 158, 11);
        doc.setLineWidth(1);
        doc.rect(gx + 90, gy + 21, 10, 11, 'FD');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        doc.setTextColor(79, 70, 229);
        doc.text('Area = ∫ [f(x) - g(x)] dx', labelX, currentY + 36);
        doc.setTextColor(245, 158, 11);
        doc.text('Disk Volume = π ∫ [R(x)]² dx', labelX, currentY + 46);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(6.5);
        doc.setTextColor(71, 85, 105);
        const twA = doc.splitTextToSize('Takeaway: ' + sanitizePdfText(diagram.takeaway), contentWidth - (labelX - margin) - 6);
        doc.text(twA, labelX, currentY + 58);
      }

      // Takeaway banner at bottom of card
      const takeBannerY = currentY + graphBoxH - 18;
      doc.setFillColor(245, 243, 255);
      doc.rect(margin + 1, takeBannerY, graphBoxW - 2, 17, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7);
      doc.setTextColor(109, 40, 217);
      doc.text('AP Takeaway: ', margin + 8, takeBannerY + 11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(67, 20, 180);
      const takeLines = doc.splitTextToSize(sanitizePdfText(diagram.takeaway), contentWidth - 80);
      doc.text(takeLines[0] || '', margin + 68, takeBannerY + 11);

      currentY += graphBoxH + 10;
    };

    // Section 4: Visual Graphs & Coordinate Figures (In PDF!)
    if (unit.diagrams && unit.diagrams.length > 0) {
      checkPageBreak(40);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(67, 56, 202); // Indigo-700
      doc.text('4. Visual Graphs & Discontinuity Coordinate Figures', margin, currentY);
      currentY += 16;

      unit.diagrams.forEach(diag => {
        drawPdfVectorGraph(diag);
      });
    }

    // ─── Section 5: Worked Examples ───────────────────────────────────────────
    if (unit.workedExamples && unit.workedExamples.length > 0) {
      checkPageBreak(45);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(30, 58, 138);
      doc.text('5. Solved AP Exam Worked Examples', margin, currentY);
      currentY += 16;

      unit.workedExamples.forEach((ex, idx) => {
        checkPageBreak(65);

        // Example header bar
        doc.setFillColor(238, 242, 255);
        doc.setDrawColor(199, 210, 254);
        doc.setLineWidth(0.6);
        doc.roundedRect(margin, currentY, contentWidth, 22, 3, 3, 'FD');
        doc.setFillColor(99, 102, 241);
        doc.roundedRect(margin, currentY, 4, 22, 2, 2, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(49, 46, 129);
        const exLabel = `EXAMPLE ${idx + 1}: ${sanitizePdfText(ex.title)}  [${sanitizePdfText(ex.topicRef)}]`;
        doc.text(exLabel, margin + INDENT + 4, currentY + 14.5);
        currentY += 28;

        // Question block
        checkPageBreak(35);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 41, 59);
        doc.text('Q:', margin + INDENT, currentY + 9);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(51, 65, 85);
        const qLines = doc.splitTextToSize(sanitizePdfText(formatMathForPdf(ex.question)), contentWidth - INDENT - 28);
        doc.text(qLines, margin + INDENT + 18, currentY + 9);
        currentY += qLines.length * LH + 10;

        // Solution steps with clear step badges and breathing room
        ex.solutionSteps.forEach((st, si) => {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          const stClean = sanitizePdfText(formatMathForPdf(st));
          const stepIndent = margin + INDENT + 34;
          const stepWrapW  = contentWidth - INDENT - 38;
          const stLines = doc.splitTextToSize(stClean, stepWrapW);
          const stepH = stLines.length * LH_SM + 8;
          checkPageBreak(stepH + 6);

          // Step badge pill (e.g. S1, S2, S3...)
          doc.setFillColor(241, 245, 249);
          doc.setDrawColor(203, 213, 225);
          doc.setLineWidth(0.4);
          doc.roundedRect(margin + INDENT, currentY, 26, 15, 2, 2, 'FD');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(7.5);
          doc.setTextColor(79, 70, 229);
          doc.text(`S${si + 1}`, margin + INDENT + 7, currentY + 10.5);

          // Step text
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(51, 65, 85);
          doc.text(stLines, stepIndent, currentY + 9.5);

          currentY += stepH + 4; // Generous breathing room between steps!
        });

        // Final answer badge
        checkPageBreak(28);
        const ansClean = sanitizePdfText(formatMathForPdf(ex.finalAnswer));
        doc.setFillColor(220, 252, 231);
        doc.setDrawColor(134, 239, 172);
        doc.setLineWidth(0.5);
        doc.roundedRect(margin + INDENT, currentY, contentWidth - INDENT, 20, 2, 2, 'FD');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(21, 128, 61);
        doc.text(`Final Answer: ${ansClean}`, margin + INDENT + 8, currentY + 13.5);
        currentY += 26;

        // Scoring tip callout box
        checkPageBreak(28);
        const tipClean = sanitizePdfText(formatMathForPdf(ex.apScoringTip));
        const exTipLines = doc.splitTextToSize(`Scoring Tip: ${tipClean}`, contentWidth - INDENT * 2 - 12);
        const tipBoxH = exTipLines.length * LH_SM + 12;
        doc.setFillColor(255, 251, 235);
        doc.setDrawColor(254, 215, 170);
        doc.setLineWidth(0.5);
        doc.roundedRect(margin + INDENT, currentY, contentWidth - INDENT, tipBoxH, 2, 2, 'FD');
        doc.setFillColor(245, 158, 11);
        doc.rect(margin + INDENT, currentY, 3, tipBoxH, 'F');
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(7.5);
        doc.setTextColor(161, 72, 9);
        doc.text(exTipLines, margin + INDENT + 8, currentY + 9);
        currentY += tipBoxH + SEC_GAP;
      });
    }

    // ─── Section 6: Common AP Reader Traps ───────────────────────────────────
    checkPageBreak(40);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(153, 27, 27);
    doc.text('6. Common AP Exam Reader Traps', margin, currentY);
    currentY += 14;

    unit.commonTraps.forEach(trap => {
      const trapText = sanitizePdfText(trap);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      const trapLines = doc.splitTextToSize(trapText, contentWidth - 20);
      const trapBoxH = LH + trapLines.length * LH + 12;
      checkPageBreak(trapBoxH + ITEM_GAP);

      // Card
      doc.setFillColor(255, 241, 242);
      doc.setDrawColor(252, 165, 165);
      doc.setLineWidth(0.5);
      doc.roundedRect(margin, currentY, contentWidth, trapBoxH, 3, 3, 'FD');
      // Red accent bar
      doc.setFillColor(239, 68, 68);
      doc.rect(margin, currentY, 4, trapBoxH, 'F');

      // Label
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(185, 28, 28);
      doc.text('TRAP', margin + 10, currentY + 11);

      // Trap text
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(127, 29, 29);
      doc.text(trapLines, margin + 10, currentY + LH + 8);
      currentY += trapBoxH + ITEM_GAP;
    });
    currentY += SEC_GAP - ITEM_GAP;

    // ─── Section 7: 5-Minute Cram Sheet ──────────────────────────────────────
    checkPageBreak(40);
    // Cram header with colored background
    doc.setFillColor(30, 27, 75);
    doc.setDrawColor(30, 27, 75);
    doc.roundedRect(margin, currentY, contentWidth, 22, 3, 3, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(251, 191, 36);
    doc.text('7. 5-Minute Exam Day Cram Sheet', margin + INDENT, currentY + 15);
    currentY += 28;

    unit.cramSheet.forEach((pt, pi) => {
      const ptClean = sanitizePdfText(pt);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      const ptLines = doc.splitTextToSize(ptClean, contentWidth - INDENT - 18);
      const ptH = ptLines.length * LH + 6;
      checkPageBreak(ptH + 4);

      // Alternating row
      if (pi % 2 === 0) {
        doc.setFillColor(245, 243, 255);
        doc.rect(margin, currentY, contentWidth, ptH, 'F');
      }

      // Bullet
      doc.setFillColor(251, 191, 36);
      doc.rect(margin + 4, currentY + ptH / 2 - 2, 4, 4, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(30, 27, 75);
      doc.text(ptLines, margin + INDENT + 8, currentY + LH);
      currentY += ptH + 4;
    });

    return doc;
  };

  // 1-Click PDF Download & In-App Offline Storage Save
  const handleExportUnitPDF = async (unitToExport: APUnitNote = currentUnit, subjectToExport: APSubjectNoteEntry = currentSubjectEntry) => {
    triggerVibration(15);
    setIsExporting(true);

    try {
      const doc = buildUnitPdfDocument(unitToExport, subjectToExport);
      const safeSubj = subjectToExport.shortCode.replace(/\s+/g, '_');
      const safeTitle = sanitizePdfText(unitToExport.title).replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `${safeSubj}_Unit_${unitToExport.unitNumber}_${safeTitle}_HelpYou_AI.pdf`;
      const pdfBlob = doc.output('blob');
      const pdfDataUri = doc.output('datauristring');
      const pageCount = doc.internal.pages.length - 1;
      const fileSize = `${(pdfBlob.size / 1024).toFixed(1)} KB`;

      // 1. Save directly into in-app persistent offline storage (IndexedDB + localStorage manifest)
      await saveOfflineNote({
        unitId: unitToExport.unitId,
        unitNumber: unitToExport.unitNumber,
        subjectId: subjectToExport.subjectId,
        subjectTitle: subjectToExport.subjectName,
        title: unitToExport.title,
        examWeight: unitToExport.examWeight,
        pdfDataUri,
        fileSize,
        pageCount,
      });

      // 2. Also save to physical device storage (Downloads / Files app)
      await savePDFMobile(pdfBlob, fileName);

      // 3. Update local UI state and trigger celebratory feedback
      const compositeId = `${subjectToExport.subjectId}_${unitToExport.unitId}`;
      setDownloadedUnitIds(prev => new Set(prev).add(unitToExport.unitId).add(compositeId));
      setDownloadToast({
        show: true,
        message: `${subjectToExport.shortCode} Unit ${unitToExport.unitNumber}: ${unitToExport.title} is now saved offline in the app!`
      });

      setTimeout(() => {
        setDownloadToast(null);
      }, 4500);
    } catch (err) {
      console.error("PDF Export & Offline Save error:", err);
      alert("Could not save PDF notes offline. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  // 1-Click Native & Web Share
  const handleShareUnitPDF = async (unitToShare: APUnitNote = currentUnit, subjectToShare: APSubjectNoteEntry = currentSubjectEntry) => {
    triggerVibration(15);
    setIsSharing(true);

    try {
      const doc = buildUnitPdfDocument(unitToShare, subjectToShare);
      const safeSubj = subjectToShare.shortCode.replace(/\s+/g, '_');
      const fileName = `${safeSubj}_Unit_${unitToShare.unitNumber}_Notes.pdf`;
      const pdfBlob = doc.output('blob');

      const shared = await sharePDFMobile(pdfBlob, fileName);
      if (!shared && navigator.share) {
        await navigator.share({
          title: `${subjectToShare.subjectName} - Unit ${unitToShare.unitNumber}: ${unitToShare.title}`,
          text: `${subjectToShare.subjectName} Study Notes for Unit ${unitToShare.unitNumber}: ${unitToShare.title} (${unitToShare.examWeight} Exam Weight). Includes theorems, formulas, and worked examples!`,
          url: window.location.href,
        });
      }
    } catch (err: any) {
      console.error("PDF Share error:", err);
      if (navigator.share) {
        try {
          await navigator.share({
            title: `${subjectToShare.subjectName} - Unit ${unitToShare.unitNumber}: ${unitToShare.title}`,
            text: `${subjectToShare.subjectName} Notes: Unit ${unitToShare.unitNumber} - ${unitToShare.title}`,
            url: window.location.href,
          });
        } catch {
          // Dismissed
        }
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } finally {
      setIsSharing(false);
    }
  };

  // Open a saved offline note directly into the PDF document reader
  const handleOpenOfflineNote = (note: OfflineNoteMeta) => {
    triggerVibration(10);
    if (note.subjectId && AP_NOTES_REGISTRY[note.subjectId]) {
      setSelectedSubjectId(note.subjectId);
    }
    setSelectedUnitId(note.unitId);
    setViewMode('pdf');
    setStep('reading');
    setShowOfflineDrawer(false);
  };

  // Delete a downloaded note from in-app persistent offline storage
  const handleDeleteOfflineNote = async (note: OfflineNoteMeta) => {
    triggerVibration(10);
    await deleteOfflineNote(note.unitId);
    setDownloadedUnitIds(prev => {
      const next = new Set(prev);
      next.delete(note.unitId);
      if (note.subjectId) {
        next.delete(`${note.subjectId}_${note.unitId}`);
      }
      return next;
    });
    setOfflineNotes(prev => prev.filter(n => n.unitId !== note.unitId));
  };

  // Automatically compile and cache the Unit PDF Document whenever the user chooses or switches units
  useEffect(() => {
    let url: string | null = null;
    let isCancelled = false;

    if (step === 'reading' && currentUnit) {
      setIsGeneratingPdf(true);
      try {
        const doc = buildUnitPdfDocument(currentUnit, currentSubjectEntry);
        const blob = doc.output('blob');
        if (!isCancelled) {
          url = URL.createObjectURL(blob);
          setPdfBlobUrl(url);
          setIsGeneratingPdf(false);
        }
      } catch (err) {
        console.error("Failed to compile unit PDF document:", err);
        if (!isCancelled) {
          setIsGeneratingPdf(false);
        }
      }
    }

    return () => {
      isCancelled = true;
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [currentUnit.unitId, selectedSubjectId, step]);

  return (
    <div className="h-full flex flex-col bg-[#FAF9F6] relative overflow-hidden font-sans select-none">
      {/* ========================================================================= */}
      {/* VIEW 1: SUBJECT & UNIT ACCORDION SELECTION (Exact TestPrep UX Flow)       */}
      {/* ========================================================================= */}
      {step === 'select-subject' && (
        <div className="h-full flex flex-col overflow-hidden">
          {/* Top Header */}
          <header className="px-5 py-3.5 flex items-center justify-between border-b border-zinc-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-40">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  triggerVibration(10);
                  onBack();
                }}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950 active:scale-95 transition-transform cursor-pointer"
                title="Back to Dashboard"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-md">
                    AP® NOTES
                  </span>
                  <h1 className="font-black text-zinc-900 text-sm tracking-tight">
                    Course Notes
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  triggerVibration(10);
                  setShowOfflineDrawer(true);
                }}
                className="relative w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 hover:bg-emerald-50 border border-zinc-200 text-zinc-700 hover:text-emerald-700 active:scale-95 transition-all cursor-pointer shadow-2xs"
                title="Saved Offline Notes"
              >
                <FolderDown className="w-4 h-4 text-emerald-600" />
                {offlineNotes.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] font-black flex items-center justify-center shadow-2xs">
                    {offlineNotes.length}
                  </span>
                )}
              </button>
              <div className="hidden xs:flex items-center gap-1.5 text-xs text-purple-700 font-bold bg-purple-50 border border-purple-200/80 px-2.5 py-1 rounded-full">
                <span>📚</span>
                <span>CED Aligned</span>
              </div>
            </div>
          </header>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5 max-w-3xl mx-auto w-full">
            {/* Hero Welcome Banner */}
            <div className="relative overflow-hidden rounded-3xl p-5 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 text-white shadow-lg shadow-indigo-950/20 border border-indigo-800/50">
              <div className="relative z-10">
                <h2 className="text-2xl font-black tracking-tight leading-tight">
                  AP® Subject Notes
                </h2>
                <p className="text-xs text-indigo-200 mt-1 leading-relaxed font-medium">
                  Select a subject and unit to review official College Board theorems, formulas, worked examples, and figures.
                </p>
              </div>
              <div className="absolute -right-4 -bottom-6 text-7xl opacity-20 select-none pointer-events-none">
                📐
              </div>
            </div>

            {/* Search Input & Category Filters */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search subjects, units, formulas (e.g. Kinematics, DTM, Kinetics)..."
                  className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white border border-zinc-200/90 text-zinc-900 placeholder:text-zinc-400 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 shadow-xs transition-all"
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
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {['All', 'STEM & Math', 'Sciences', 'Humanities & Social Sciences', 'English & Tech'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      triggerVibration(10);
                      setSelectedCategory(cat);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-white border border-zinc-200/90 text-zinc-600 hover:bg-zinc-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Subjects List */}
            {(() => {
              const q = searchQuery.toLowerCase().trim();
              const filteredSubjects = allSupportedSubjects.filter(subj => {
                const matchesCategory = selectedCategory === 'All' || subj.category === selectedCategory;
                if (!matchesCategory) return false;
                if (!q) return true;
                const nameMatch = subj.subjectName.toLowerCase().includes(q) || subj.shortCode.toLowerCase().includes(q);
                const unitMatch = subj.notes.some(u => 
                  u.title.toLowerCase().includes(q) || 
                  u.bigIdea.toLowerCase().includes(q) || 
                  u.formulas.some(f => f.name.toLowerCase().includes(q) || f.explanation.toLowerCase().includes(q))
                );
                return nameMatch || unitMatch;
              });

              const totalUnits = filteredSubjects.reduce((acc, s) => acc + s.notes.length, 0);

              return (
                <>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-500">
                      Official AP Courses ({filteredSubjects.length}) • {totalUnits} Units
                    </h3>
                  </div>

                  {/* Course Cards Accordion List */}
                  <div className="space-y-3">
                    {filteredSubjects.map(subj => {
                      const isExpanded = expandedSubjectIds.has(subj.subjectId) || Boolean(q);
                      return (
                        <div
                          key={subj.subjectId}
                          className="bg-white rounded-3xl border border-zinc-200/90 shadow-xs overflow-hidden transition-all duration-200 hover:border-zinc-300"
                        >
                          {/* Accordion Header */}
                          <button
                            onClick={() => toggleSubjectExpanded(subj.subjectId)}
                            className="w-full p-4 flex items-center justify-between text-left transition-colors cursor-pointer hover:bg-zinc-50/50"
                          >
                            <div className="flex items-center gap-3.5 min-w-0 pr-2">
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 bg-gradient-to-br ${subj.gradient} text-white shadow-md shadow-zinc-950/10`}>
                                {subj.icon}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                                  <span className="font-extrabold text-[10px] text-zinc-600 uppercase tracking-wider bg-zinc-100 px-2 py-0.5 rounded-md">
                                    {subj.shortCode}
                                  </span>
                                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.2 rounded">
                                    {subj.category}
                                  </span>
                                  {subj.badge && (
                                    <span className="text-[9px] font-black text-amber-700 bg-amber-50 border border-amber-200/60 px-1.5 py-0.2 rounded">
                                      {subj.badge}
                                    </span>
                                  )}
                                </div>
                                <h4 className="font-black text-sm text-zinc-900 truncate">
                                  {subj.subjectName}
                                </h4>
                                <p className="text-[11px] text-zinc-400 mt-0.5 truncate hidden sm:block">
                                  {subj.description}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0 text-zinc-400">
                              <span className="text-xs font-bold text-zinc-500 hidden sm:inline">
                                {subj.notes.length} Units
                              </span>
                              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-zinc-700' : ''}`} />
                            </div>
                          </button>

                          {/* Accordion Units List */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="border-t border-zinc-100 bg-zinc-50/40 p-3 flex flex-col gap-2 overflow-hidden"
                              >
                                {subj.notes.map(unit => {
                                  const isDownloaded = downloadedUnitIds.has(unit.unitId) || downloadedUnitIds.has(`${subj.subjectId}_${unit.unitId}`);
                                  return (
                                    <div
                                      key={unit.unitId}
                                      className="w-full bg-white border border-zinc-200/80 hover:bg-zinc-50 hover:border-indigo-300 py-2.5 px-3.5 rounded-2xl flex items-center justify-between transition-all group/unit shadow-xs"
                                    >
                                      {/* Main Unit Click Target to Open Direct PDF Viewer */}
                                      <button
                                        onClick={() => {
                                          triggerVibration(15);
                                          setSelectedSubjectId(subj.subjectId);
                                          setSelectedUnitId(unit.unitId);
                                          setViewMode('pdf');
                                          setActiveTab('all');
                                          setStep('reading');
                                        }}
                                        className="flex items-center gap-3 min-w-0 flex-1 text-left cursor-pointer pr-2"
                                      >
                                        <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200/70 text-indigo-700 font-black text-xs flex items-center justify-center shrink-0">
                                          U{unit.unitNumber}
                                        </div>
                                        <div className="min-w-0">
                                          <div className="flex items-center gap-2">
                                            <span className="font-bold text-xs text-zinc-900 group-hover/unit:text-indigo-600 transition-colors truncate">
                                              Unit {unit.unitNumber}: {unit.title}
                                            </span>
                                          </div>
                                          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                                            <span className="text-[10px] text-zinc-500 font-medium truncate">
                                              {unit.examWeight}
                                            </span>
                                            {isDownloaded && (
                                              <span className="text-[9px] text-emerald-700 bg-emerald-100/90 border border-emerald-300/80 px-1.5 py-0.5 rounded font-bold flex items-center gap-1">
                                                <Check className="w-2.5 h-2.5 text-emerald-600" /> Saved Offline
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                      </button>

                                      {/* Direct Actions: Download Offline + Share + Open */}
                                      <div className="flex items-center gap-1 shrink-0">
                                        {/* In-App Offline Download Button */}
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleExportUnitPDF(unit, subj);
                                          }}
                                          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer active:scale-95 ${
                                            isDownloaded
                                              ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-700 border border-emerald-300/60'
                                              : 'bg-zinc-100 hover:bg-emerald-100 hover:text-emerald-700 text-zinc-600'
                                          }`}
                                          title={isDownloaded ? `${subj.shortCode} Unit ${unit.unitNumber} is saved offline in app (tap to re-download)` : `Download Unit ${unit.unitNumber} to app for offline study`}
                                        >
                                          {isDownloaded ? (
                                            <Check className="w-3.5 h-3.5 text-emerald-700" />
                                          ) : (
                                            <Download className="w-3.5 h-3.5" />
                                          )}
                                        </button>

                                        {/* Share Button */}
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleShareUnitPDF(unit, subj);
                                          }}
                                          className="w-8 h-8 rounded-xl bg-zinc-100 hover:bg-purple-100 hover:text-purple-700 text-zinc-600 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                                          title={`Share ${subj.shortCode} Unit ${unit.unitNumber} Notes`}
                                        >
                                          <Share2 className="w-3.5 h-3.5" />
                                        </button>

                                        {/* Open PDF Arrow */}
                                        <button
                                          onClick={() => {
                                            triggerVibration(15);
                                            setSelectedSubjectId(subj.subjectId);
                                            setSelectedUnitId(unit.unitId);
                                            setViewMode('pdf');
                                            setActiveTab('all');
                                            setStep('reading');
                                          }}
                                          className="w-8 h-8 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-zinc-400 group-hover/unit:text-indigo-600 flex items-center justify-center transition-colors cursor-pointer"
                                          title={`Open Unit ${unit.unitNumber} PDF`}
                                        >
                                          <ArrowRight className="w-4 h-4 group-hover/unit:translate-x-0.5 transition-all" />
                                        </button>
                                      </div>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 2: CLEAN & PREMIUM UNIT NOTES READER (Full Screen Focus)             */}
      {/* ========================================================================= */}
      {step === 'reading' && (
        <div className="h-full flex flex-col overflow-hidden bg-zinc-950">
          {/* Top Header with Back, Title, View Mode Toggle, Share & Download */}
          <header className="px-3.5 sm:px-5 py-3 flex items-center justify-between border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-md sticky top-0 z-40 shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <button
                onClick={() => {
                  triggerVibration(10);
                  setStep('select-subject');
                }}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 hover:text-white active:scale-95 transition-all cursor-pointer shrink-0"
                title="Back to All Units"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0">
                  <span>{currentSubjectEntry.icon}</span>
                  <span>{currentSubjectEntry.shortCode}</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 px-1.5 py-0.5 rounded shrink-0">
                  Unit {currentUnit.unitNumber}
                </span>
                <span className="text-[9px] text-zinc-400 font-bold hidden sm:inline truncate">
                  {currentUnit.examWeight}
                </span>
              </div>
            </div>

            {/* Actions: View Toggle + Share + Download */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Segmented View Mode Toggle: Direct PDF Pages (Default) vs Interactive */}
              <div className="flex items-center bg-zinc-800 p-0.5 rounded-xl border border-zinc-700/80">
                <button
                  onClick={() => {
                    triggerVibration(10);
                    setViewMode('pdf');
                  }}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                    viewMode === 'pdf'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  title="Direct PDF Pages View (Default)"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </button>

                <button
                  onClick={() => {
                    triggerVibration(10);
                    setViewMode('interactive');
                  }}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                    viewMode === 'interactive'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  title="Interactive Study Cards View"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Interactive</span>
                </button>
              </div>

              {/* Share PDF Button */}
              <button
                onClick={() => handleShareUnitPDF(currentUnit)}
                disabled={isSharing || isExporting}
                className="w-8 h-8 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 flex items-center justify-center transition-all cursor-pointer disabled:opacity-50 active:scale-95"
                title="Share Unit PDF"
              >
                {isSharing ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-400" />
                ) : (
                  <Share2 className="w-3.5 h-3.5 text-zinc-300" />
                )}
              </button>

              {/* Download PDF Button */}
              <button
                onClick={() => handleExportUnitPDF(currentUnit)}
                disabled={isExporting || isSharing}
                className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all cursor-pointer disabled:opacity-50 active:scale-95 shadow-2xs ${
                  downloadedUnitIds.has(currentUnit.unitId)
                    ? 'bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border-emerald-500/40'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700'
                }`}
                title={downloadedUnitIds.has(currentUnit.unitId) ? "Unit is saved offline in app (tap to re-download)" : "Download & save offline in app"}
              >
                {isExporting ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-400" />
                ) : downloadedUnitIds.has(currentUnit.unitId) ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Download className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </header>

          {/* MAIN BODY AREA: EITHER DIRECT FULL-MOBILE PDF OR INTERACTIVE CARDS */}
          {viewMode === 'pdf' ? (
            /* DIRECT FULL-MOBILE PDF DOCUMENT VIEWER (DEFAULT) */
            <div className="flex-1 overflow-hidden relative flex flex-col bg-zinc-950">
              {isGeneratingPdf || !pdfBlobUrl ? (
                <div className="flex flex-col items-center justify-center my-auto py-24 text-white gap-3.5">
                  <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="text-center">
                    <p className="text-sm font-black text-white tracking-wider uppercase">Loading Unit {currentUnit.unitNumber} PDF</p>
                    <p className="text-[11px] text-zinc-400 mt-1">Rendering official pages in full mobile size...</p>
                  </div>
                </div>
              ) : (
                <SafePdfViewer pdfUrlOrBase64={pdfBlobUrl} />
              )}
            </div>
          ) : (
            /* INTERACTIVE STUDY GUIDE CARDS (OPTIONAL MODE) */
            <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 space-y-5 max-w-4xl mx-auto w-full bg-[#FAF9F6]">
            {/* Unit Hero Card */}
            <div className="p-5 rounded-3xl bg-white border border-zinc-200/90 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  Unit {currentUnit.unitNumber} • {currentUnit.examWeight}
                </span>
                <span className="text-xs font-bold text-zinc-400">
                  AP Calculus AB
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-zinc-900 tracking-tight">
                {currentUnit.title}
              </h2>
              <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                {currentUnit.bigIdea}
              </p>
            </div>

            {/* Filter Tabs Pills (With Worked Examples & Graphs) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: 'all', label: 'All Notes', icon: '📖' },
                { id: 'theorems', label: 'Theorems', icon: '📌' },
                { id: 'formulas', label: 'Formulas', icon: '📐' },
                { id: 'examples', label: 'Worked Examples', icon: '✏️' },
                { id: 'diagrams', label: 'Visual Graphs', icon: '📊' },
                { id: 'traps', label: 'Common Traps', icon: '⚠️' },
                { id: 'cram', label: '5-Min Cram', icon: '⚡' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    triggerVibration(10);
                    setActiveTab(tab.id as any);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content Sections */}
            <div className="space-y-5">
              {/* 1. Key Theorems */}
              {(activeTab === 'all' || activeTab === 'theorems') && currentUnit.keyTheorems.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📌</span>
                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-700">
                      Official College Board Theorems ({currentUnit.keyTheorems.length})
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {currentUnit.keyTheorems.map((thm, idx) => (
                      <div 
                        key={idx}
                        className="p-5 rounded-2xl bg-white border border-emerald-200/90 shadow-xs space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-black text-sm text-emerald-950">
                            {thm.name}
                          </h4>
                          <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                            Theorem
                          </span>
                        </div>

                        <div className="text-xs text-zinc-700 space-y-2">
                          <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-200/60">
                            <strong className="text-zinc-900 block mb-0.5 text-[11px] uppercase tracking-wider">Conditions:</strong>
                            <div className="text-xs text-zinc-800 leading-relaxed"><GlobalMarkdown>{thm.conditions}</GlobalMarkdown></div>
                          </div>
                          <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-200/60">
                            <strong className="text-emerald-950 block mb-0.5 text-[11px] uppercase tracking-wider">Conclusion:</strong>
                            <div className="text-xs font-semibold text-emerald-950 leading-relaxed"><GlobalMarkdown>{thm.conclusion}</GlobalMarkdown></div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200/70 text-xs text-amber-900 font-medium">
                          💡 <strong>AP Exam Tip:</strong> {thm.apTip}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Essential Formulas */}
              {(activeTab === 'all' || activeTab === 'formulas') && currentUnit.formulas.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📐</span>
                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-700">
                      Essential Formulas & Limit Rules ({currentUnit.formulas.length})
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {currentUnit.formulas.map((f, idx) => (
                      <div 
                        key={idx}
                        className="p-5 rounded-2xl bg-white border border-indigo-100/90 shadow-xs space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-black text-xs sm:text-sm text-zinc-900">
                            {f.name}
                          </h4>
                          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200/60">
                            Formula
                          </span>
                        </div>

                        <div className="py-3 px-4 rounded-xl bg-zinc-50/90 border border-indigo-100/80 overflow-x-auto text-indigo-950 text-sm">
                          <GlobalMarkdown>{`$$${f.latex}$$`}</GlobalMarkdown>
                        </div>

                        <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                          {f.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Visual Graphs & Figures (Vertically arranged 1-by-1 with Full-Page Tap) */}
              {(activeTab === 'all' || activeTab === 'diagrams') && currentUnit.diagrams && currentUnit.diagrams.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📊</span>
                    <h3 className="text-xs font-black uppercase tracking-wider text-indigo-800">
                      Visual Graphs & Discontinuity Figures ({currentUnit.diagrams.length})
                    </h3>
                  </div>

                  <div className="flex flex-col space-y-6">
                    {currentUnit.diagrams.map(diag => (
                      <MathDiagramView 
                        key={diag.id} 
                        diagram={diag} 
                        onExpand={() => setSelectedDiagram(diag)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Core Conceptual Sections (All 16 CED Topics with Markdown Tables) */}
              {(activeTab === 'all') && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📖</span>
                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-700">
                      Comprehensive CED Topics & Comparison Tables (1.1–1.16)
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {currentUnit.sections.map((sec, idx) => (
                      <div 
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-xs space-y-2"
                      >
                        <h4 className="font-black text-sm text-zinc-900">
                          {sec.heading}
                        </h4>
                        <div className="text-xs text-zinc-700 leading-relaxed prose prose-sm max-w-none">
                          <GlobalMarkdown>{sec.content}</GlobalMarkdown>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Worked Examples (Solved AP Problems) */}
              {(activeTab === 'all' || activeTab === 'examples') && currentUnit.workedExamples && currentUnit.workedExamples.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">✏️</span>
                    <h3 className="text-xs font-black uppercase tracking-wider text-blue-800">
                      Step-by-Step Solved AP Examples ({currentUnit.workedExamples.length})
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {currentUnit.workedExamples.map((ex, idx) => (
                      <div 
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-blue-200/90 shadow-xs space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                            {ex.topicRef} • Worked Example {idx + 1}
                          </span>
                        </div>

                        <h4 className="font-black text-sm text-zinc-900">
                          {ex.title}
                        </h4>

                        <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950 font-medium">
                          <strong className="text-blue-900">Problem: </strong>
                          <GlobalMarkdown>{ex.question}</GlobalMarkdown>
                        </div>

                        <div className="space-y-2 text-xs text-zinc-700">
                          <div className="font-bold text-[11px] uppercase tracking-wider text-zinc-500">
                            Full Solution Steps:
                          </div>
                          {ex.solutionSteps.map((st, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2.5 bg-zinc-50 p-3 rounded-xl border border-zinc-200/60">
                              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                {sIdx + 1}
                              </span>
                              <p className="leading-relaxed font-sans text-xs text-zinc-800 font-medium flex-1">
                                {formatMathForPdf(st)}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs font-bold text-emerald-950">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Final Answer: {ex.finalAnswer}</span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-200 text-[11px] text-amber-900 font-medium">
                          💡 <strong>AP Exam Scoring Key:</strong> {ex.apScoringTip}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Common AP Reader Traps */}
              {(activeTab === 'all' || activeTab === 'traps') && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">⚠️</span>
                    <h3 className="text-xs font-black uppercase tracking-wider text-red-700">
                      Common AP Exam Reader Traps ({currentUnit.commonTraps.length})
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 space-y-2.5">
                    {currentUnit.commonTraps.map((trap, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-red-900">
                        <span className="font-black text-red-600 shrink-0">✕</span>
                        <p className="font-medium leading-relaxed">{trap}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. 5-Minute Exam Day Cram Sheet */}
              {(activeTab === 'all' || activeTab === 'cram') && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">⚡</span>
                    <h3 className="text-xs font-black uppercase tracking-wider text-blue-700">
                      5-Minute Exam Day Cram Points ({currentUnit.cramSheet.length})
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                    {currentUnit.cramSheet.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-blue-950">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <p className="font-medium leading-relaxed">{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

          {/* Bottom Navigation Bar */}
          <footer className="shrink-0 p-3 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 z-40">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
              <button
                disabled={safeUnitIndex === 0}
                onClick={() => {
                  if (safeUnitIndex > 0) {
                    triggerVibration(10);
                    setSelectedUnitId(currentSubjectUnits[safeUnitIndex - 1].unitId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="h-10 px-3.5 rounded-xl border border-zinc-700 text-zinc-300 font-bold text-xs flex items-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Previous Unit</span>
                <span className="sm:hidden">Prev</span>
              </button>

              <button
                onClick={() => {
                  triggerVibration(10);
                  setStep('select-subject');
                }}
                className="h-10 px-4 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-200 font-black text-xs hover:bg-zinc-700 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>Unit {currentUnit.unitNumber} of {currentSubjectUnits.length}</span>
              </button>

              <button
                disabled={safeUnitIndex === currentSubjectUnits.length - 1}
                onClick={() => {
                  if (safeUnitIndex < currentSubjectUnits.length - 1) {
                    triggerVibration(10);
                    setSelectedUnitId(currentSubjectUnits[safeUnitIndex + 1].unitId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="h-10 px-3.5 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none hover:bg-purple-700 active:scale-95 transition-all cursor-pointer shadow-sm"
              >
                <span className="hidden sm:inline">Next Unit</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </footer>
        </div>
      )}

      {/* Full-Page Interactive Diagram Modal */}
      {selectedDiagram && (
        <DiagramFullPageModal
          diagram={selectedDiagram}
          diagrams={currentUnit.diagrams || []}
          onClose={() => setSelectedDiagram(null)}
          onSelectDiagram={(diag) => setSelectedDiagram(diag)}
        />
      )}

      {/* In-App Saved Offline Notes Modal */}
      <OfflineNotesModal
        isOpen={showOfflineDrawer}
        onClose={() => setShowOfflineDrawer(false)}
        notes={offlineNotes}
        onOpenNote={handleOpenOfflineNote}
        onDeleteNote={handleDeleteOfflineNote}
      />

      {/* Floating In-App Download Success Feedback Toast */}
      <AnimatePresence>
        {downloadToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-4 right-4 max-w-md mx-auto z-50 p-3.5 rounded-2xl bg-zinc-900/95 border border-emerald-500/40 text-white shadow-2xl flex items-center gap-3 backdrop-blur-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <h5 className="font-bold text-xs text-white">Downloaded to App</h5>
              <p className="text-[11px] text-zinc-300 truncate">{downloadToast.message}</p>
            </div>
            <button
              onClick={() => {
                setDownloadToast(null);
                setShowOfflineDrawer(true);
              }}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] shrink-0 cursor-pointer active:scale-95 transition-all shadow-xs"
            >
              View Offline
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
