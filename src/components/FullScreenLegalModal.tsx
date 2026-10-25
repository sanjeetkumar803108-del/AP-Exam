import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  ArrowLeft, X, Shield, FileText, ExternalLink, CheckCircle2, 
  Lock, Sparkles, Scale, AlertTriangle, Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerVibration } from '../utils/vibrate';

export interface FullScreenLegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const FullScreenLegalModal: React.FC<FullScreenLegalModalProps> = React.memo(({
  isOpen,
  type,
  onClose
}) => {
  // Hardware Android Back Button handler
  useEffect(() => {
    if (!isOpen) return;
    const handleBackButton = (e: Event) => {
      e.preventDefault();
      triggerVibration(10);
      onClose();
    };
    window.addEventListener('appBackButton', handleBackButton);
    return () => window.removeEventListener('appBackButton', handleBackButton);
  }, [isOpen, onClose]);

  // Lock background body scroll when open to prevent jitter
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  const modalContent = (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[99999] bg-white dark:bg-zinc-950 flex flex-col w-full h-[100dvh] overflow-hidden"
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col w-full h-full min-h-0 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200"
        >
          {/* FULL SCREEN HEADER */}
          <header className="px-4 py-3.5 bg-white/95 dark:bg-zinc-900/95 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-md flex items-center justify-between shrink-0 sticky top-0 z-20 shadow-2xs">
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={() => {
                  triggerVibration(10);
                  onClose();
                }}
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-200 transition-colors cursor-pointer shrink-0"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {isPrivacy ? (
                    <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : (
                    <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  )}
                  <h2 className="text-sm sm:text-base font-black text-zinc-900 dark:text-white truncate">
                    {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
                  </h2>
                </div>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold truncate">
                  {isPrivacy ? 'COPPA, FERPA & Zero Model Training' : 'Binding Agreement • Delaware Law'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={isPrivacy ? '/privacy.html' : '/terms.html'}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1.5 rounded-xl border border-blue-200 dark:border-blue-900/50 hover:bg-blue-100 transition-colors"
              >
                <span>Web Version</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                type="button"
                onClick={() => {
                  triggerVibration(10);
                  onClose();
                }}
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </header>

          {/* DOCUMENT BODY — SMOOTH NATIVE SCROLL */}
          <div 
            className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-6 max-w-3xl mx-auto w-full text-left"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {isPrivacy ? (
              /* PRIVACY POLICY CONTENT */
              <div className="space-y-6 pb-12">
                {/* Jurisdiction / Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                    <Shield className="w-3 h-3" /> US Legal &amp; AI Privacy Standard
                  </span>
                  <span className="text-[10px] font-bold text-zinc-400">
                    Effective: October 2026
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300">
                  At <strong>AP Prep App</strong>, student privacy and total algorithmic transparency are our highest priorities. We operate under strict compliance with US Federal and State privacy laws, including the <strong>Children's Online Privacy Protection Act (COPPA)</strong>, <strong>FERPA educational privacy principles</strong>, and the <strong>California Consumer Privacy Act (CCPA/CPRA)</strong>.
                </p>

                {/* 100% Ad-Free Banner */}
                <div className="bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-4 shadow-2xs">
                  <h5 className="text-xs sm:text-sm font-black text-emerald-950 dark:text-emerald-200 flex items-center gap-2 uppercase tracking-wide">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    100% Ad-Free &amp; Zero Data Selling Pledge
                  </h5>
                  <p className="text-xs leading-relaxed text-emerald-900 dark:text-emerald-300 mt-1.5 font-medium">
                    We do <strong>NOT</strong> sell your personal data, we do <strong>NOT</strong> license student information to third-party data brokers, and we do <strong>NOT</strong> serve third-party behavioral advertisements.
                  </p>
                </div>

                {/* Section 1: AI Zero-Training Guarantee */}
                <div className="bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h4 className="text-xs sm:text-sm font-black text-blue-950 dark:text-blue-200 flex items-center gap-2 uppercase tracking-wide">
                    <span>🤖</span> 1. AI Data Handling &amp; Zero-Training Guarantee
                  </h4>
                  <p className="text-xs leading-relaxed text-blue-900 dark:text-blue-300 font-medium">
                    AP Prep App utilizes high-performance enterprise <strong>Google Gemini AI APIs</strong> to provide real-time step-by-step explanations, handwriting scoring, and distractor trap analysis.
                  </p>
                  <ul className="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300 pl-4 space-y-2 list-disc">
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Zero Model Training:</strong> Under our enterprise API terms, <strong>your prompts, uploaded homework images, student handwriting photos, and voice transcripts are NEVER used by Google or AP Prep App to train, retrain, fine-tune, or improve public AI models</strong>.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Ephemeral In-Memory Inference:</strong> Student queries and scans are processed strictly in-memory during real-time streaming. Once the explanation finishes, the active inference session is immediately closed.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Automatic 1-Hour Photo Purge:</strong> Images of handwritten FRQs or textbook questions captured via your camera are temporarily buffered in secure memory and <strong>automatically and permanently purged within 1 hour</strong>. We do not archive student handwriting or build photo repositories.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">No Biometric Voiceprints:</strong> Voice Tutor audio is converted to transient text in memory and immediately discarded. We never generate or store biometric voiceprints or vocal templates.
                    </li>
                  </ul>
                </div>

                {/* Section 2: Direct Account Data */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 uppercase tracking-wide">
                    <span>📊</span> 2. Direct Account Data &amp; Cloud Storage
                  </h4>
                  <ul className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 pl-4 space-y-2 list-disc">
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Account Profile:</strong> Email address and display name collected via Firebase Auth / Google Sign-In solely for account management and cross-device sync.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Study History &amp; Mistake Vault:</strong> Saved review notes, quiz battle history, and coin records are securely stored in Google Cloud Firestore protected by AES-256 encryption at rest.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Single Active Device ID:</strong> We store an active session token to protect your account against credential sharing across multiple devices.
                    </li>
                  </ul>
                </div>

                {/* Section 3: Third-Party Infrastructure */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 uppercase tracking-wide">
                    <span>🔒</span> 3. Enterprise Infrastructure Partners
                  </h4>
                  <ul className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 pl-4 space-y-2 list-disc">
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Google Cloud &amp; Firebase:</strong> SOC 2 certified cloud database, TLS 1.3 encrypted data transit, and secure cryptographic authentication.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Google Play Billing / Apple StoreKit:</strong> In-app subscription processing. <em>We never see, handle, or store your credit card numbers.</em>
                    </li>
                  </ul>
                </div>

                {/* Section 4: COPPA & FERPA */}
                <div className="bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-4 sm:p-5 space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-amber-950 dark:text-amber-200 flex items-center gap-2 uppercase tracking-wide">
                    <span>👶</span> 4. Children's Privacy (COPPA) &amp; FERPA
                  </h4>
                  <p className="text-xs leading-relaxed text-amber-900 dark:text-amber-300 font-medium">
                    AP Prep App is designed strictly for high school students and lifelong learners aged <strong>13 and older</strong>. We do not knowingly collect personal data from children under 13. If any account belonging to a child under 13 is identified, it will be immediately purged. Student-created study data is handled in strict alignment with FERPA educational confidentiality principles.
                  </p>
                </div>

                {/* Section 5: State Privacy Rights */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 uppercase tracking-wide">
                    <span>🐻</span> 5. US State Privacy Rights (CCPA / CPRA)
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Residents of California and other US states have the statutory right to request access to their personal data, request permanent deletion, and exercise their rights free from discrimination. We do not sell or share personal data with advertisers or data brokers.
                  </p>
                </div>

                {/* Section 6: Instant Account Deletion & Contact */}
                <div className="bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 rounded-2xl p-4 sm:p-5 space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-purple-950 dark:text-purple-200 flex items-center gap-2 uppercase tracking-wide">
                    <span>🗑️</span> 6. Instant Account Deletion &amp; Privacy Contact
                  </h4>
                  <p className="text-xs leading-relaxed text-purple-900 dark:text-purple-300">
                    You retain full ownership of your data. You can permanently delete your entire account and all cloud records instantly via <strong>Profile Settings &gt; "Delete Account"</strong>, or by emailing our designated privacy officer:
                  </p>
                  <a
                    href="mailto:aiapexam@gmail.com?subject=Privacy%20Inquiry%20/%20Data%20Deletion"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-purple-700 dark:text-purple-300 underline mt-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>aiapexam@gmail.com</span>
                  </a>
                </div>
              </div>
            ) : (
              /* TERMS OF SERVICE CONTENT */
              <div className="space-y-6 pb-12">
                {/* Jurisdiction / Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                    <Scale className="w-3 h-3" /> US Legal Jurisdiction (Delaware)
                  </span>
                  <span className="text-[10px] font-bold text-zinc-400">
                    Last Revised: October 2026
                  </span>
                </div>

                {/* College Board Trademark Disclaimer */}
                <div className="bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 shadow-2xs">
                  <h5 className="text-xs sm:text-sm font-black text-amber-950 dark:text-amber-200 flex items-center gap-2 uppercase tracking-wide">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    College Board® Non-Affiliation Disclaimer
                  </h5>
                  <p className="text-xs leading-relaxed text-amber-900 dark:text-amber-300 mt-1.5 font-medium">
                    <strong>AP® and Advanced Placement®</strong> are registered trademarks of the <strong>College Board</strong>, which is not affiliated with, does not sponsor, and was not involved in the creation or endorsement of this application.
                  </p>
                </div>

                {/* Section 1: Agreement & Eligibility */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 uppercase tracking-wide">
                    <span>📝</span> 1. Binding Agreement &amp; Eligibility (13+)
                  </h4>
                  <ul className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 pl-4 space-y-2 list-disc">
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Binding Contract:</strong> By downloading, registering, or using AP Prep App, you enter into a legally binding agreement under the laws of the State of Delaware, United States.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Age Requirement:</strong> You must be at least 13 years old. If you are between 13 and 17, your parent or legal guardian must review and agree to these Terms on your behalf.
                    </li>
                  </ul>
                </div>

                {/* Section 2: AI Educational Disclaimers */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 uppercase tracking-wide">
                    <span>⚠️</span> 2. AI Study Aid &amp; Academic Integrity
                  </h4>
                  <ul className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 pl-4 space-y-2 list-disc">
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Supplemental Learning Aid:</strong> All AI explanations, rubric checks, and study notes are generated dynamically for personal educational study only.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">No Score Guarantee:</strong> We do not guarantee specific AP scores (e.g. 5, 4, 3) or college credit awards.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Honor Code Compliance:</strong> You agree not to use this app during live school exams or formal testing where unauthorized digital assistance is prohibited.
                    </li>
                  </ul>
                </div>

                {/* Section 3: Subscriptions & Cancellation */}
                <div className="bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h4 className="text-xs sm:text-sm font-black text-purple-950 dark:text-purple-200 flex items-center gap-2 uppercase tracking-wide">
                    <span>💎</span> 3. Subscriptions &amp; Cancellation (California ARL)
                  </h4>
                  <ul className="text-xs leading-relaxed text-purple-900 dark:text-purple-300 pl-4 space-y-2 list-disc">
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Auto-Renewal:</strong> In accordance with California Automatic Renewal Law, subscriptions automatically renew at the end of each period ($9.99/mo or $99.99/yr) unless cancelled at least 24 hours prior to billing.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Managing Subscriptions:</strong> Subscriptions must be cancelled directly via your Google Play Store or Apple ID account settings.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Store Refund Policies:</strong> All in-app purchases are handled by Google Play / Apple and are governed by their respective refund policies.
                    </li>
                  </ul>
                </div>

                {/* Section 4: Single Active Device Policy */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 uppercase tracking-wide">
                    <span>📱</span> 4. Single Active Device Policy
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Each account is licensed for <strong>one active mobile device at a time</strong>. Logging in on a second device will automatically sign out any prior session to safeguard your account against unauthorized sharing.
                  </p>
                </div>

                {/* Section 5: DMCA Copyright Agent */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 uppercase tracking-wide">
                    <span>🛡️</span> 5. Acceptable Use &amp; DMCA Copyright Agent
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    You agree not to decompile, reverse engineer, or deploy automated bots against our AI infrastructure. Pursuant to 17 U.S.C. § 512, copyright infringement notices should be directed to our designated DMCA agent:
                  </p>
                  <a
                    href="mailto:aiapexam@gmail.com?subject=DMCA%20Notice"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-purple-700 dark:text-purple-300 underline mt-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>aiapexam@gmail.com</span>
                  </a>
                </div>

                {/* Section 6: Warranty Disclaimers & Liability Cap */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 uppercase tracking-wide">
                    <span>🛑</span> 6. Disclaimer of Warranties &amp; Liability Cap
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranty of any kind. Under no circumstances shall AP Prep App or its creators be liable for indirect, incidental, or consequential damages. Maximum aggregate liability is strictly capped at $100 USD or amounts paid in the preceding 12 months.
                  </p>
                </div>

                {/* Section 7: Binding Arbitration */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 uppercase tracking-wide">
                    <span>⚖️</span> 7. Mandatory Binding Arbitration &amp; Class Action Waiver
                  </h4>
                  <ul className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 pl-4 space-y-2 list-disc">
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Delaware Governing Law:</strong> These Terms are governed by the laws of the State of Delaware and the US Federal Arbitration Act.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">AAA Arbitration:</strong> Any disputes shall be resolved through individual binding arbitration under American Arbitration Association (AAA) Consumer Rules rather than court litigation.
                    </li>
                    <li>
                      <strong className="text-zinc-900 dark:text-zinc-100">Class Action Waiver:</strong> YOU EXPRESSLY AGREE TO WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION, MASS LITIGATION, OR REPRESENTATIVE PROCEEDING AGAINST AP EXAM APP.
                    </li>
                  </ul>
                </div>

                {/* Section 8: Legal Support */}
                <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-zinc-100 flex items-center gap-2 uppercase tracking-wide">
                    <span>📬</span> 8. Legal Notices &amp; Inquiries
                  </h4>
                  <a
                    href="mailto:aiapexam@gmail.com?subject=Legal%20Notice%20/%20Terms%20Inquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-purple-700 dark:text-purple-300 underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>aiapexam@gmail.com</span>
                  </a>
                </div>

                {/* Section 9: College Board Trademark Notice */}
                <div className="bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-4 sm:p-5 space-y-2">
                  <h4 className="text-xs sm:text-sm font-black text-amber-900 dark:text-amber-200 flex items-center gap-2 uppercase tracking-wide">
                    <span>🎓</span> 9. Non-Affiliation &amp; Trademark Notice
                  </h4>
                  <p className="text-xs leading-relaxed text-amber-800/90 dark:text-amber-300/90">
                    AP®, Advanced Placement®, and College Board® are registered trademarks of the College Entrance Examination Board, which was not involved in the production of, and does not sponsor, endorse, or affiliate with this application or its content.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* STICKY BOTTOM ACTION BAR */}
          <footer className="p-4 sm:p-5 bg-white/95 dark:bg-zinc-900/95 border-t border-zinc-200 dark:border-zinc-800 backdrop-blur-md shrink-0 flex flex-col gap-2.5 max-w-3xl mx-auto w-full">
            <button
              type="button"
              onClick={() => {
                triggerVibration(15);
                onClose();
              }}
              className="w-full bg-zinc-950 hover:bg-zinc-900 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-black text-xs sm:text-sm py-3.5 px-6 rounded-2xl cursor-pointer transition-all active:scale-98 shadow-md flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              <span>{isPrivacy ? 'I Understand & Agree to Privacy Terms' : 'I Accept Terms of Service'}</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-500 dark:text-zinc-400">
              <a
                href={isPrivacy ? '/privacy.html' : '/terms.html'}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-blue-600 dark:hover:text-blue-400 font-medium inline-flex items-center gap-1"
              >
                <span>View Raw Web Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <span className="font-semibold text-zinc-400">AP Prep App • 100% Student Protected</span>
            </div>
          </footer>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
});

export default FullScreenLegalModal;
