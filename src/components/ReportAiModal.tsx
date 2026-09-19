import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flag, 
  AlertTriangle, 
  CheckCircle2, 
  X, 
  Send, 
  ShieldAlert, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check 
} from 'lucide-react';
import { getApiUrl } from '../utils/api';
import { auth, db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Capacitor } from '@capacitor/core';
import { showToast } from '../utils/toast';

export interface ReportAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  aiOutput: string;
  context?: string; // e.g. "AI Tutor Chat", "FRQ Grader", "AP Trap Radar", "AP Notes", "Test Prep"
  questionText?: string;
}

export const DEVELOPER_EMAIL = 'helpyou.ai.support@gmail.com';

const REPORT_REASONS = [
  { id: 'inaccurate', label: 'Inaccurate or Incorrect Math / Facts', icon: '❌', desc: 'Wrong calculation, false historical fact, or erroneous concept' },
  { id: 'abusive', label: 'Offensive, Toxic, or Abusive Content', icon: '⚠️', desc: 'Inappropriate language, derogatory tone, or offensive generation' },
  { id: 'harmful', label: 'Harmful, Dangerous, or Unsafe Advice', icon: '🚨', desc: 'Violates safety guidelines or promotes harmful behavior' },
  { id: 'hallucinated', label: 'Hallucinated or Fabricated AP Info', icon: '🌀', desc: 'Made-up rubric criteria, non-existent formulas, or invalid AP units' },
  { id: 'other', label: 'Other Issue or Buggy Output', icon: '💬', desc: 'Unformatted markdown, repetitive loop, or confusing output' }
];

export const ReportAiModal: React.FC<ReportAiModalProps> = ({
  isOpen,
  onClose,
  aiOutput,
  context = 'General AI Output',
  questionText
}) => {
  const currentUser = auth?.currentUser;
  const [selectedReason, setSelectedReason] = useState<string>('inaccurate');
  const [details, setDetails] = useState<string>('');
  const [studentEmail, setStudentEmail] = useState<string>(currentUser?.email || '');
  const [showSnippet, setShowSnippet] = useState<boolean>(false);
  const [copiedBody, setCopiedBody] = useState<boolean>(false);
  const [isOpeningEmail, setIsOpeningEmail] = useState<boolean>(false);

  if (!isOpen) return null;

  const reasonObj = REPORT_REASONS.find(r => r.id === selectedReason) || REPORT_REASONS[0];
  const reasonLabel = reasonObj.label;

  // Build the rich pre-filled email subject and body
  const emailSubject = `[AP Exam] AI Content Report: ${reasonLabel} (${context})`;

  const emailBody = [
    `Hi AP Exam Developer Team,`,
    ``,
    `I am reporting an issue with an AI-generated response in the AP Exam App.`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `📋 REPORT SUMMARY`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `• Report Type: ${reasonLabel}`,
    `• Feature / Context: ${context}`,
    `• Student Email: ${studentEmail || currentUser?.email || 'Anonymous Student'}`,
    `• Student User ID: ${currentUser?.uid || 'guest_user'}`,
    `• Date & Time: ${new Date().toLocaleString()}`,
    `• Extra Notes / Feedback: ${details.trim() || 'None provided'}`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `🤖 REPORTED AI OUTPUT`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    questionText ? `[Question / Prompt Context]:\n${questionText}\n\n` : '',
    `${aiOutput}`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `📱 APP & SYSTEM INFO`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `• Application: AP Exam Prep (Android / Web)`,
    `• Recipient: ${DEVELOPER_EMAIL}`,
    `• Platform: ${Capacitor.isNativePlatform() ? 'Android Native' : 'Web Browser'}`,
    `• Timestamp: ${new Date().toISOString()}`
  ].join('\n');

  // Background logging so developer never loses a report even if user closes email app
  const logReportSilently = async () => {
    try {
      const payload = {
        reason: reasonLabel,
        details: details.trim(),
        aiOutput: aiOutput.trim(),
        context: context.trim(),
        questionText: (questionText || '').trim(),
        userEmail: (studentEmail || currentUser?.email || 'Anonymous Student').trim(),
        userId: currentUser?.uid || 'guest_user',
        timestamp: new Date().toISOString()
      };

      fetch(getApiUrl('/api/report-ai-content'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});

      if (db) {
        addDoc(collection(db, 'ai_content_reports'), {
          ...payload,
          createdAt: serverTimestamp(),
          status: 'pending_review',
          notifiedDeveloper: DEVELOPER_EMAIL
        }).catch(() => {});
      }
    } catch (_) {}
  };

  // Launch Default Email App with all fields pre-filled
  const handleOpenDefaultEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsOpeningEmail(true);
    logReportSilently();

    const mailtoUrl = `mailto:${DEVELOPER_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open via native window.location or system browser
    if (Capacitor.isNativePlatform()) {
      window.location.href = mailtoUrl;
    } else {
      window.open(mailtoUrl, '_self');
    }

    showToast('📧 Opening your email app with pre-filled report. Tap Send!');

    setTimeout(() => {
      setIsOpeningEmail(false);
      onClose();
    }, 1200);
  };

  // Open Directly in Gmail Web (great for browser students who use Gmail)
  const handleOpenGmailWeb = () => {
    logReportSilently();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(DEVELOPER_EMAIL)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    showToast('🚀 Opening Gmail with pre-filled report. Tap Send!');
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  // Copy details to clipboard
  const handleCopyBody = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${DEVELOPER_EMAIL}\nSubject: ${emailSubject}\n\n${emailBody}`);
      setCopiedBody(true);
      showToast('📋 Report details copied to clipboard!');
      setTimeout(() => setCopiedBody(false), 2000);
    } catch (_) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        className="bg-[#0f172a] text-slate-100 border border-slate-700/80 rounded-3xl w-full max-w-lg max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative"
      >
        {/* Top Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-amber-500 to-rose-600" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-500/15 text-red-400 flex items-center justify-center border border-red-500/30">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-white tracking-tight">Report AI Output</h3>
                <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                  Email Developer
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Send report to: <strong className="text-red-400">{DEVELOPER_EMAIL}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 custom-scrollbar">
          {/* Source Feature Banner */}
          <div className="flex items-center justify-between text-xs px-3.5 py-2.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-slate-300">
            <span className="text-slate-400 font-medium">Reporting From:</span>
            <span className="font-bold text-amber-400">📍 {context}</span>
          </div>

          {/* Reason Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-200 block">
              1. Select Problem Type <span className="text-red-400">*</span>
            </label>
            <div className="space-y-1.5">
              {REPORT_REASONS.map((r) => {
                const isSelected = selectedReason === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setSelectedReason(r.id)}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-red-500/15 border-red-500/60 text-white shadow-xs'
                        : 'bg-slate-800/50 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-base shrink-0 select-none">{r.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold leading-tight ${isSelected ? 'text-red-300' : 'text-slate-200'}`}>
                        {r.label}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        {r.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Additional Explanation (Optional) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-200 block">
              2. Add Extra Notes <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell developer why this output is wrong, abusive, or buggy..."
              rows={2}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500/80 resize-none transition-colors"
            />
          </div>

          {/* Student Email (Optional) */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-200 block">
              3. Your Email <span className="text-slate-400 font-normal">(Pre-filled)</span>
            </label>
            <input
              type="email"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              placeholder="student@example.com"
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500/80 transition-colors"
            />
          </div>

          {/* Collapsible Preview of Pre-filled AI Output */}
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/80 overflow-hidden">
            <button
              type="button"
              onClick={() => setShowSnippet(!showSnippet)}
              className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 truncate">
                <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">Preview Pre-Filled Email Content</span>
              </div>
              {showSnippet ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
            </button>

            {showSnippet && (
              <div className="p-3 border-t border-slate-800 text-[11px] text-slate-300 max-h-40 overflow-y-auto whitespace-pre-wrap leading-relaxed font-mono bg-black/40">
                <div className="text-red-400 font-bold mb-1">To: {DEVELOPER_EMAIL}</div>
                <div className="text-amber-300 font-semibold mb-2">Subject: {emailSubject}</div>
                <div>{emailBody}</div>
              </div>
            )}
          </div>

          {/* Information Callout */}
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-snug text-[11px]">
              Tapping below will open your email app with <strong>recipient, subject, report type, and AI output already 100% pre-filled</strong>. Just tap <strong>Send</strong>!
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex flex-col gap-2 shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Primary Action: Open Default Email App */}
            <button
              type="button"
              onClick={() => handleOpenDefaultEmail()}
              disabled={isOpeningEmail}
              className="w-full py-3 px-4 rounded-xl text-xs font-black text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 active:scale-98 transition-all shadow-md shadow-red-950/40 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Mail className="w-4 h-4" />
              <span>Open Email App (Pre-filled)</span>
            </button>

            {/* Secondary Action: Open Gmail Web */}
            <button
              type="button"
              onClick={handleOpenGmailWeb}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-red-400" />
              <span>Open in Gmail (Web)</span>
            </button>
          </div>

          {/* Tertiary Action: Copy Everything */}
          <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 px-1">
            <button
              type="button"
              onClick={handleCopyBody}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              {copiedBody ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedBody ? 'Copied to clipboard!' : 'Copy full email text'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/**
 * Reusable compact button to report any AI output across the app
 */
export const ReportAiButton: React.FC<{
  aiOutput: string;
  context?: string;
  questionText?: string;
  label?: string;
  variant?: 'compact' | 'pill' | 'icon' | 'badge';
  className?: string;
}> = ({
  aiOutput,
  context = 'AI Output',
  questionText,
  label = 'Report',
  variant = 'compact',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!aiOutput || typeof aiOutput !== 'string' || !aiOutput.trim()) {
    return null;
  }

  let buttonContent = (
    <>
      <Flag className="w-3 h-3 text-red-500/80 group-hover:text-red-400 transition-colors" />
      <span>{label}</span>
    </>
  );

  let defaultStyles = "inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-red-400 hover:bg-red-500/10 px-2 py-1 rounded-lg transition-all cursor-pointer group";

  if (variant === 'pill') {
    defaultStyles = "inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-400/90 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 px-2.5 py-1 rounded-full transition-all cursor-pointer group";
    buttonContent = (
      <>
        <Flag className="w-2.5 h-2.5 text-red-400" />
        <span>Report AI</span>
      </>
    );
  } else if (variant === 'icon') {
    defaultStyles = "p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer group";
    buttonContent = <Flag className="w-3.5 h-3.5" />;
  } else if (variant === 'badge') {
    defaultStyles = "inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-red-400 transition-colors cursor-pointer";
    buttonContent = (
      <>
        <Flag className="w-3 h-3 text-red-500/70" />
        <span>Report AI issue</span>
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        className={`${defaultStyles} ${className}`}
        title="Report inaccurate or abusive AI output to developer"
      >
        {buttonContent}
      </button>

      <ReportAiModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        aiOutput={aiOutput}
        context={context}
        questionText={questionText}
      />
    </>
  );
};

export default ReportAiModal;
