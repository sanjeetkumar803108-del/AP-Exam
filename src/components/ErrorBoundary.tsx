import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home, Wrench, ChevronDown, ChevronUp } from 'lucide-react';
import { triggerVibration } from '../utils/vibrate';
import { safeRemoveItem, safePurgeKeysByPrefix } from '../utils/storage';

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
  softReset?: boolean;
  featureName?: string;
  onReset?: () => void;
  cacheKeysToPurgeOnCrash?: string[];
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorCount: number;
  showDetails: boolean;
}

/**
 * RESILIENT SELF-HEALING ERROR BOUNDARY
 * ─────────────────────────────────────────────────────────────
 * Catches React rendering errors before they break the user experience.
 * 
 * Self-Healing Capabilities:
 * 1. Soft Reset: Resets component boundary state.
 * 2. Auto-Repair Feature: Purges stale/corrupted feature localStorage keys and restores defaults.
 * 3. Safe Home Navigation: Emits navigate-to-home without trapping the user.
 * 4. Diagnostics: Clean collapsible error readout.
 */
export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorCount: 0,
    showDetails: false,
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[ErrorBoundary${this.props.featureName ? ` - ${this.props.featureName}` : ''}] Uncaught error:`, error.message);
    console.error('[ErrorBoundary] Component stack:', errorInfo.componentStack);

    this.setState(prev => ({ errorCount: prev.errorCount + 1 }));

    try {
      triggerVibration(30);
    } catch (_) {}
  }

  // ─── Soft Reset: Just clears the error state ──────────────────────────────
  private handleSoftReset = () => {
    try { triggerVibration(15); } catch (_) {}
    if (this.props.onReset) {
      this.props.onReset();
    }
    this.setState({ hasError: false, error: null });
  };

  // ─── Auto-Repair Feature: Cleans corrupt local cache and restores defaults ─
  private handleAutoRepair = () => {
    try { triggerVibration(25); } catch (_) {}

    // Purge specific keys if provided
    if (this.props.cacheKeysToPurgeOnCrash && this.props.cacheKeysToPurgeOnCrash.length > 0) {
      this.props.cacheKeysToPurgeOnCrash.forEach(k => {
        safeRemoveItem(k);
        safePurgeKeysByPrefix(k);
      });
    }

    // Known common cache keys for complex features
    if (this.props.featureName === 'Learning Island') {
      safePurgeKeysByPrefix('learning_island_progress_');
      safeRemoveItem('learning_island_selected_subject_id');
    } else if (this.props.featureName === 'Test Prep') {
      safeRemoveItem('ap_test_prep_history');
    }

    if (this.props.onReset) {
      this.props.onReset();
    }

    this.setState({ hasError: false, error: null, errorCount: 0 });
  };

  // ─── Hard Reset: Full page reload as last resort ──────────────────────────
  private handleHardReset = () => {
    try { triggerVibration(25); } catch (_) {}
    window.location.reload();
  };

  // ─── Go to home tab ────────────────────────────────────────────────────────
  private handleGoHome = () => {
    try { triggerVibration(15); } catch (_) {}
    if (this.props.onReset) {
      this.props.onReset();
    }
    this.setState({ hasError: false, error: null });
    try {
      window.dispatchEvent(new CustomEvent('navigate-to-home'));
    } catch (_) {}
  };

  public render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const isRepeatedCrash = this.state.errorCount >= 2;
    const titleText = this.props.featureName 
      ? `${this.props.featureName} encountered an issue`
      : (isRepeatedCrash ? 'This screen keeps crashing' : 'Oops! Something went wrong');

    return (
      <div className="w-full h-full min-h-[380px] flex flex-col items-center justify-center p-6 bg-[#FAF9F6] text-zinc-900 text-center font-sans">
        
        {/* Icon */}
        <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-4 border border-amber-200 shadow-sm">
          <AlertCircle className="w-8 h-8" />
        </div>

        {/* Title */}
        <h2 className="text-base font-black tracking-tight text-zinc-800">
          {titleText}
        </h2>

        {/* Message */}
        <p className="text-xs text-zinc-500 font-medium max-w-xs mt-2 leading-relaxed">
          {this.props.fallbackMessage ||
            (isRepeatedCrash
              ? "We detected a persistent render hitch. Tapping 'Auto-Repair' will safely reset this feature's cache and get you back on track."
              : "Don't worry — your data is safe. Tap below to reload or auto-repair.")}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col gap-2.5 mt-6 w-full max-w-[240px]">
          <button
            onClick={this.handleSoftReset}
            className="w-full px-5 py-3 bg-zinc-950 text-white rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:bg-zinc-900 shadow-sm border border-zinc-900 cursor-pointer active:scale-95 transition-transform"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Try Again
          </button>

          <button
            onClick={this.handleAutoRepair}
            className="w-full px-5 py-3 bg-amber-500 text-white rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:bg-amber-600 shadow-sm border border-amber-600 cursor-pointer active:scale-95 transition-transform"
          >
            <Wrench className="w-3.5 h-3.5" />
            Auto-Repair Feature
          </button>

          <button
            onClick={this.handleGoHome}
            className="w-full px-5 py-3 bg-white text-zinc-700 rounded-xl font-black text-xs flex items-center justify-center gap-2 border border-zinc-200 cursor-pointer active:scale-95 transition-transform hover:bg-zinc-50"
          >
            <Home className="w-3.5 h-3.5" />
            Go to Home
          </button>

          {isRepeatedCrash && (
            <button
              onClick={this.handleHardReset}
              className="w-full px-5 py-2.5 bg-zinc-200 text-zinc-700 rounded-xl font-black text-xs flex items-center justify-center gap-2 border border-zinc-300 cursor-pointer active:scale-95 transition-transform hover:bg-zinc-300"
            >
              <RefreshCw className="w-3 h-3" />
              Restart App
            </button>
          )}
        </div>

        {/* Collapsible Error Diagnostics */}
        {this.state.error && (
          <div className="mt-5 w-full max-w-sm">
            <button
              onClick={() => this.setState(prev => ({ showDetails: !prev.showDetails }))}
              className="text-[10px] font-bold text-zinc-400 hover:text-zinc-600 flex items-center justify-center gap-1 mx-auto transition-colors"
            >
              <span>{this.state.showDetails ? 'Hide technical details' : 'Show technical details'}</span>
              {this.state.showDetails ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            {this.state.showDetails && (
              <div className="mt-2 p-3 bg-zinc-100 border border-zinc-200 rounded-xl text-left font-mono text-[9px] text-zinc-700 leading-normal overflow-auto whitespace-pre-wrap max-h-[100px] w-full shadow-inner">
                {this.state.error.message}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

