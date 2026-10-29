import React, { useEffect, useRef, useState } from 'react';
import { 
  FileText, 
  WifiOff, 
  Download, 
  Share2, 
  RefreshCw, 
  ExternalLink, 
  ZoomIn, 
  ZoomOut, 
  Printer,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { savePDFMobile } from '../utils/mobileSaver';
import { triggerVibration } from '../utils/vibrate';
import { showToast } from '../utils/toast';

interface SafePdfViewerProps {
  pdfUrlOrBase64?: string;
  pdfUrl?: string;
  title?: string;
}

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

// Global promise to coordinate concurrent PDF.js script loading and avoid race conditions
let pdfjsLoadPromise: Promise<any> | null = null;

function getLocalAssetUrl(relativePath: string): string {
  try {
    const clean = relativePath.replace(/^\/+/, '');
    return new URL(clean, document.baseURI || window.location.href).href;
  } catch (_) {
    return '/' + relativePath.replace(/^\/+/, '');
  }
}

/**
 * Checks if the source document is an HTML document or web paper.
 */
function isHtmlDocument(source: string): boolean {
  if (!source) return false;
  const s = source.trim().toLowerCase();
  if (s.startsWith('<!doctype html') || s.startsWith('<html') || s.includes('<body') || s.includes('<!doctype')) {
    return true;
  }
  if (s.startsWith('data:text/html')) {
    return true;
  }
  if (s.endsWith('.html') || s.includes('.html?') || s.includes('.html#')) {
    return true;
  }
  return false;
}

/**
 * Robustly load PDF.js engine.
 */
function loadPdfJs(): Promise<any> {
  if (window.pdfjsLib) {
    return Promise.resolve(window.pdfjsLib);
  }
  if (pdfjsLoadPromise) {
    return pdfjsLoadPromise;
  }

  pdfjsLoadPromise = new Promise((resolve, reject) => {
    // 1. Try Local Asset First
    const script = document.createElement('script');
    script.id = 'pdfjs-script';
    script.src = getLocalAssetUrl('vendor/pdfjs/pdf.min.js');

    script.onload = () => {
      const lib = window.pdfjsLib || (window as any)['pdfjs-dist/build/pdf'];
      if (lib) {
        window.pdfjsLib = lib;
        // Point worker to local vendor script
        try {
          lib.GlobalWorkerOptions.workerSrc = getLocalAssetUrl('vendor/pdfjs/pdf.worker.min.js');
        } catch (_) {
          lib.GlobalWorkerOptions.workerSrc = '';
        }
        resolve(lib);
      } else {
        tryCdnFallback(resolve, reject);
      }
    };

    script.onerror = () => {
      tryCdnFallback(resolve, reject);
    };

    document.head.appendChild(script);
  });

  return pdfjsLoadPromise;
}

function tryCdnFallback(resolve: (value: any) => void, reject: (reason: any) => void) {
  const existing = document.getElementById('pdfjs-script');
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.id = 'pdfjs-script';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js';

  script.onload = () => {
    const lib = window.pdfjsLib || (window as any)['pdfjs-dist/build/pdf'];
    if (lib) {
      window.pdfjsLib = lib;
      lib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
      resolve(lib);
    } else {
      pdfjsLoadPromise = null;
      reject(new Error('PDF engine not found after CDN load.'));
    }
  };

  script.onerror = () => {
    pdfjsLoadPromise = null;
    reject(new Error('Network offline or PDF engine CDN blocked.'));
  };

  document.head.appendChild(script);
}

export default function SafePdfViewer({ pdfUrlOrBase64, pdfUrl, title }: SafePdfViewerProps) {
  const targetUrl = (pdfUrlOrBase64 || pdfUrl || '').trim();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.2);
  const [isOpeningNative, setIsOpeningNative] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isHtml = isHtmlDocument(targetUrl);

  // External Action Handlers
  const handleOpenExternal = async () => {
    triggerVibration(15);
    setIsOpeningNative(true);
    try {
      const fileName = (title || 'AP_Exam_Master_Paper').replace(/[^a-zA-Z0-9_-]/g, '_') + (isHtml ? '.html' : '.pdf');
      const success = await savePDFMobile(targetUrl, fileName, {
        openImmediately: true,
        customToast: 'Opening in device document reader...',
      });
      if (!success) {
        showToast('Unable to launch native viewer.', 'error');
      }
    } catch (err: any) {
      console.error('[SafePdfViewer] External open error:', err);
      showToast('Failed to open document: ' + (err.message || 'Unknown error'), 'error');
    } finally {
      setIsOpeningNative(false);
    }
  };

  const handleDownload = async () => {
    triggerVibration(15);
    try {
      const fileName = (title || 'AP_Exam_Master_Paper').replace(/[^a-zA-Z0-9_-]/g, '_') + (isHtml ? '.html' : '.pdf');
      await savePDFMobile(targetUrl, fileName, {
        openImmediately: false,
        customToast: '✅ Document downloaded successfully!',
      });
    } catch (err: any) {
      console.error('[SafePdfViewer] Download error:', err);
      showToast('Download error: ' + (err.message || 'Unknown error'), 'error');
    }
  };

  // Render Effect
  useEffect(() => {
    let active = true;

    const renderDocument = async () => {
      if (!targetUrl) {
        setLoading(false);
        setError('No document attached to this unit set.');
        return;
      }

      setLoading(true);
      setError(null);

      // If document is HTML, iframe takes care of rendering
      if (isHtml) {
        setLoading(false);
        return;
      }

      // Render PDF using PDF.js
      try {
        const pdfjs = await loadPdfJs();
        if (!active) return;

        // Parse PDF binary data
        let pdfData: Uint8Array;
        const isBase64 = 
          targetUrl.startsWith('data:') || 
          targetUrl.startsWith('JVBERi') || 
          (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://') && !targetUrl.startsWith('blob:') && !targetUrl.startsWith('/') && targetUrl.length > 50);

        if (isBase64) {
          const base64Data = targetUrl.includes(',') ? targetUrl.split(',')[1] : targetUrl;
          const cleaned = base64Data.replace(/[\s\r\n]+/g, '');
          const binaryString = atob(cleaned);
          const len = binaryString.length;
          pdfData = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            pdfData[i] = binaryString.charCodeAt(i);
          }
        } else {
          const resolvedUrl = getLocalAssetUrl(targetUrl);
          const response = await fetch(resolvedUrl);
          if (!response.ok) {
            throw new Error(`Failed to fetch PDF (${response.status} ${response.statusText})`);
          }
          const arrayBuffer = await response.arrayBuffer();
          pdfData = new Uint8Array(arrayBuffer);
        }

        if (!active) return;

        // Load document into PDF.js engine with worker fallback
        let pdf: any;
        try {
          const loadingTask = pdfjs.getDocument({
            data: pdfData,
            isEvalSupported: false,
            disableFontFace: false,
          });
          pdf = await loadingTask.promise;
        } catch (workerErr) {
          console.warn('[SafePdfViewer] Standard worker failed, switching to FakeWorker in-thread mode:', workerErr);
          // Fallback to in-thread fake worker
          pdfjs.GlobalWorkerOptions.workerSrc = '';
          const fallbackTask = pdfjs.getDocument({
            data: pdfData,
            isEvalSupported: false,
            disableFontFace: false,
          });
          pdf = await fallbackTask.promise;
        }

        if (!active) return;
        setTotalPages(pdf.numPages);

        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = ''; // Clear prior renders

        setLoading(false);

        // Render each page into a canvas
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (!active) return;
          const page = await pdf.getPage(pageNum);

          const pageCard = document.createElement('div');
          pageCard.className = 'w-full max-w-4xl mx-auto mb-4 bg-white shadow-md rounded-xl border border-zinc-200 flex flex-col items-center overflow-hidden transition-all';

          const dpr = Math.min(Math.max(window.devicePixelRatio || 1, 1.5), 2.0);
          const viewport = page.getViewport({ scale: scale * dpr });
          const canvas = document.createElement('canvas');
          canvas.className = 'w-full h-auto bg-white border-0 block';
          canvas.style.width = '100%';
          canvas.style.height = 'auto';

          canvas.height = Math.floor(viewport.height);
          canvas.width = Math.floor(viewport.width);

          const ctx = canvas.getContext('2d', { alpha: false });
          if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
          }

          pageCard.appendChild(canvas);

          // Page Number Indicator
          const pageFoot = document.createElement('div');
          pageFoot.className = 'w-full py-1 px-3 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400 font-mono';
          pageFoot.innerHTML = `<span>Page ${pageNum} of ${pdf.numPages}</span><span class="text-emerald-600 font-semibold">AP Verified</span>`;
          pageCard.appendChild(pageFoot);

          container.appendChild(pageCard);

          if (ctx) {
            await page.render({
              canvasContext: ctx,
              viewport: viewport,
            }).promise;
          }
        }
      } catch (err: any) {
        console.error('[SafePdfViewer] Render failed:', err);
        if (active) {
          setError(err?.message || 'Unable to render PDF visual pages in-app.');
          setLoading(false);
        }
      }
    };

    renderDocument();

    return () => {
      active = false;
    };
  }, [targetUrl, retryKey, scale, isHtml]);

  return (
    <div className="w-full h-full flex flex-col bg-zinc-900 select-text overflow-hidden relative">
      {/* Top Floating Control Bar */}
      <div className="px-3 sm:px-4 py-2 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between z-30 shrink-0 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 font-bold text-[10px] tracking-wider uppercase border border-indigo-500/30">
            {isHtml ? 'Web Exam Paper' : 'Official PDF'}
          </span>
          {totalPages > 0 && (
            <span className="text-xs text-zinc-400 font-medium hidden sm:inline">
              {totalPages} Pages
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {!isHtml && !error && (
            <>
              <button
                onClick={() => setScale(s => Math.max(0.8, s - 0.2))}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all active:scale-95 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setScale(s => Math.min(2.0, s + 0.2))}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all active:scale-95 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </>
          )}

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all active:scale-95 cursor-pointer border border-zinc-700"
            title="Download document"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Download</span>
          </button>

          <button
            onClick={handleOpenExternal}
            disabled={isOpeningNative}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-md shadow-indigo-600/20"
            title="Open in device document reader"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open in App</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full h-full overflow-y-auto momentum-scroll bg-zinc-950 p-0 sm:p-4 relative">
        {loading && (
          <div className="flex flex-col items-center justify-center py-28 text-center text-zinc-300 gap-3">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <div>
              <p className="text-sm font-bold text-white">Opening AP Examination Set</p>
              <p className="text-xs text-zinc-400 mt-0.5">Preparing questions and high-res layout...</p>
            </div>
          </div>
        )}

        {/* HTML Document View (Direct Embedded Responsive Frame) */}
        {isHtml && (
          <iframe
            ref={iframeRef}
            src={targetUrl.startsWith('<') ? undefined : getLocalAssetUrl(targetUrl)}
            srcDoc={targetUrl.startsWith('<') ? targetUrl : undefined}
            className="w-full h-full min-h-[500px] border-0 bg-white rounded-none sm:rounded-2xl shadow-xl"
            title={title || 'AP Examination Master Paper'}
            sandbox="allow-scripts allow-same-origin allow-modals allow-downloads allow-popups"
          />
        )}

        {/* Fallback / Error Recovery Screen */}
        {error && !isHtml && (
          <div className="flex flex-col items-center justify-center my-auto py-16 px-6 max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-amber-400 mb-4 shadow-xl">
              <FileText className="w-8 h-8" />
            </div>
            <h4 className="text-base font-black text-white">AP Document Ready</h4>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              The exam set was successfully retrieved. You can view it directly in Google Drive, Adobe Acrobat, or your default device PDF reader without restrictions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 mt-6 w-full max-w-xs">
              <button
                onClick={handleOpenExternal}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Device Reader</span>
              </button>

              <button
                onClick={handleDownload}
                className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer border border-zinc-700 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download PDF</span>
              </button>
            </div>

            <button
              onClick={() => setRetryKey(k => k + 1)}
              className="mt-4 text-[11px] text-zinc-500 hover:text-zinc-300 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Retry in-app canvas rendering</span>
            </button>
          </div>
        )}

        {/* PDF Page Canvas Stream */}
        {!isHtml && !error && (
          <div ref={containerRef} className="w-full flex flex-col items-center pb-8" />
        )}
      </div>
    </div>
  );
}
