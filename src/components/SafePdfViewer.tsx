import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  MoreVertical, 
  Download, 
  ExternalLink, 
  Printer, 
  RefreshCw, 
  AlertCircle 
} from 'lucide-react';
import { savePDFMobile } from '../utils/mobileSaver';
import { triggerVibration } from '../utils/vibrate';
import { showToast } from '../utils/toast';

interface SafePdfViewerProps {
  pdfUrlOrBase64?: string;
  pdfUrl?: string;
  title?: string;
  onBack?: () => void;
}

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

// Global promise to coordinate concurrent PDF.js script loading
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
 * Robustly load PDF.js engine with FakeWorker in-thread fallback.
 */
function loadPdfJs(): Promise<any> {
  if (window.pdfjsLib) {
    return Promise.resolve(window.pdfjsLib);
  }
  if (pdfjsLoadPromise) {
    return pdfjsLoadPromise;
  }

  pdfjsLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = 'pdfjs-script';
    script.src = getLocalAssetUrl('vendor/pdfjs/pdf.min.js');

    script.onload = () => {
      const lib = window.pdfjsLib || (window as any)['pdfjs-dist/build/pdf'];
      if (lib) {
        window.pdfjsLib = lib;
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
      reject(new Error('PDF engine not found.'));
    }
  };

  script.onerror = () => {
    pdfjsLoadPromise = null;
    reject(new Error('Network offline or PDF CDN blocked.'));
  };

  document.head.appendChild(script);
}

export default function SafePdfViewer({ 
  pdfUrlOrBase64, 
  pdfUrl, 
  title, 
  onBack 
}: SafePdfViewerProps) {
  const targetUrl = (pdfUrlOrBase64 || pdfUrl || '').trim();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState<number>(0);
  
  // Dropdown menu state
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // Double-tap zoom state
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [zoomOrigin, setZoomOrigin] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const lastTapRef = useRef<{ time: number; x: number; y: number }>({ time: 0, x: 0, y: 0 });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pagesContainerRef = useRef<HTMLDivElement>(null);

  const isHtml = isHtmlDocument(targetUrl);
  const cleanTitle = (title || 'AP_Exam_Master').replace(/[^a-zA-Z0-9_\-\. ]/g, '').trim();

  // Close menu when clicking outside
  useEffect(() => {
    if (!showMenu) return;
    const handleClickOutside = () => setShowMenu(false);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [showMenu]);

  // Share handler (Top right share icon)
  const handleShare = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    triggerVibration(15);
    setShowMenu(false);
    try {
      const fileName = cleanTitle + (isHtml ? '.html' : '.pdf');
      await savePDFMobile(targetUrl, fileName, {
        openImmediately: false,
        customToast: 'Sharing / Downloading PDF...',
      });
    } catch (err: any) {
      console.error('[SafePdfViewer] Share error:', err);
      showToast('Share error: ' + (err.message || 'Unknown error'), 'error');
    }
  };

  // Open in external native PDF reader
  const handleOpenExternal = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    triggerVibration(15);
    setShowMenu(false);
    try {
      const fileName = cleanTitle + (isHtml ? '.html' : '.pdf');
      const ok = await savePDFMobile(targetUrl, fileName, {
        openImmediately: true,
        customToast: 'Opening in device reader...',
      });
      if (!ok) showToast('Unable to launch native viewer.', 'error');
    } catch (err: any) {
      showToast('Failed to open: ' + (err.message || err), 'error');
    }
  };

  // Print document
  const handlePrint = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    triggerVibration(15);
    setShowMenu(false);
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // Handle double-tap on mobile touch screens
  const handleTouchEnd = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.changedTouches[0];
    if (!touch) return;
    const now = Date.now();
    const prev = lastTapRef.current;

    // Detect double-tap within 300ms and 30px distance
    if (now - prev.time < 300 && Math.hypot(touch.clientX - prev.x, touch.clientY - prev.y) < 30) {
      e.preventDefault();
      triggerVibration(15);

      const targetRect = e.currentTarget.getBoundingClientRect();
      const originX = Math.max(0, Math.min(100, ((touch.clientX - targetRect.left) / targetRect.width) * 100));
      const originY = Math.max(0, Math.min(100, ((touch.clientY - targetRect.top) / targetRect.height) * 100));

      setZoomOrigin({ x: originX, y: originY });
      setIsZoomed(prevZoom => !prevZoom);
      lastTapRef.current = { time: 0, x: 0, y: 0 };
    } else {
      lastTapRef.current = { time: now, x: touch.clientX, y: touch.clientY };
    }
  }, []);

  // Handle double-click for desktop mouse users
  const handleDoubleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    triggerVibration(15);
    const targetRect = e.currentTarget.getBoundingClientRect();
    const originX = Math.max(0, Math.min(100, ((e.clientX - targetRect.left) / targetRect.width) * 100));
    const originY = Math.max(0, Math.min(100, ((e.clientY - targetRect.top) / targetRect.height) * 100));

    setZoomOrigin({ x: originX, y: originY });
    setIsZoomed(prevZoom => !prevZoom);
  }, []);

  // Render document
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
      setIsZoomed(false);

      if (isHtml) {
        setLoading(false);
        return;
      }

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

        // Load document into PDF.js engine with in-thread FakeWorker fallback
        let pdf: any;
        try {
          const loadingTask = pdfjs.getDocument({
            data: pdfData,
            isEvalSupported: false,
            disableFontFace: false,
          });
          pdf = await loadingTask.promise;
        } catch (workerErr) {
          console.warn('[SafePdfViewer] Standard worker failed, switching to FakeWorker mode:', workerErr);
          pdfjs.GlobalWorkerOptions.workerSrc = '';
          const fallbackTask = pdfjs.getDocument({
            data: pdfData,
            isEvalSupported: false,
            disableFontFace: false,
          });
          pdf = await fallbackTask.promise;
        }

        if (!active) return;

        const container = pagesContainerRef.current;
        if (!container) return;
        container.innerHTML = ''; // Clear prior renders

        setLoading(false);

        // Mobile screen width edge-to-edge calculation
        const containerWidth = scrollContainerRef.current?.clientWidth || window.innerWidth || 390;
        const dpr = Math.min(window.devicePixelRatio || 1, 2.0);

        // Render each page into a canvas filling 100% of mobile screen width
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (!active) return;
          const page = await pdf.getPage(pageNum);

          const unscaledViewport = page.getViewport({ scale: 1.0 });
          const fitScale = (containerWidth / unscaledViewport.width) * dpr;
          const viewport = page.getViewport({ scale: fitScale });

          const canvas = document.createElement('canvas');
          canvas.className = 'w-full h-auto bg-white block border-0 mb-1 last:mb-0 shadow-xs';
          canvas.style.width = '100%';
          canvas.style.height = 'auto';
          canvas.style.display = 'block';

          canvas.height = Math.floor(viewport.height);
          canvas.width = Math.floor(viewport.width);

          const ctx = canvas.getContext('2d', { alpha: false });
          if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
          }

          container.appendChild(canvas);

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
          setError(err?.message || 'Unable to open PDF document.');
          setLoading(false);
        }
      }
    };

    renderDocument();

    return () => {
      active = false;
    };
  }, [targetUrl, retryKey, isHtml]);

  return (
    <div className="w-full h-full bg-black flex flex-col select-none overflow-hidden relative">
      {/* ── Native Pure-Black Android PDF Top Bar (Matching Screenshot Exactly) ── */}
      {(onBack || title) && (
        <div className="w-full h-14 bg-black px-3.5 flex items-center justify-between shrink-0 z-30 select-none border-b border-zinc-900/60">
          <div className="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
            {onBack && (
              <button
                onClick={() => {
                  triggerVibration(10);
                  onBack();
                }}
                className="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-white active:bg-zinc-800 transition-colors cursor-pointer"
                title="Back"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
              </button>
            )}
            <h2 className="text-white text-base sm:text-lg font-medium tracking-tight truncate">
              {title || 'AP_Exam_Master...'}
            </h2>
          </div>

          {/* Right Action Icons: Share & Options (Three dots) */}
          <div className="flex items-center gap-0.5 shrink-0 relative">
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white active:bg-zinc-800 transition-colors cursor-pointer"
              title="Share"
            >
              <Share2 className="w-5 h-5 stroke-[2]" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                triggerVibration(10);
                setShowMenu(m => !m);
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white active:bg-zinc-800 transition-colors cursor-pointer"
              title="More options"
            >
              <MoreVertical className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Three-dots Menu Popover */}
            {showMenu && (
              <div 
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 top-12 w-48 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl py-1.5 z-50 text-xs font-semibold text-zinc-200 animate-in fade-in zoom-in-95 duration-100"
              >
                <button
                  onClick={handleShare}
                  className="w-full px-3.5 py-2.5 text-left flex items-center gap-2.5 hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Save to Device</span>
                </button>
                <button
                  onClick={handleOpenExternal}
                  className="w-full px-3.5 py-2.5 text-left flex items-center gap-2.5 hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-indigo-400" />
                  <span>Open with...</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="w-full px-3.5 py-2.5 text-left flex items-center gap-2.5 hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-zinc-400" />
                  <span>Print</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Document Canvas Viewport (100% Mobile Edge-to-Edge with Double-Tap Zoom) ── */}
      <div 
        ref={scrollContainerRef}
        className={`flex-1 w-full h-full bg-black relative ${
          isZoomed ? 'overflow-auto' : 'overflow-y-auto overflow-x-hidden'
        } momentum-scroll`}
        style={{
          touchAction: isZoomed ? 'pan-x pan-y pinch-zoom' : 'pan-y',
        }}
      >
        {/* Loading Spinner */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-3">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* HTML Document View (Full Mobile Screen) */}
        {isHtml && !loading && (
          <iframe
            src={targetUrl.startsWith('<') ? undefined : getLocalAssetUrl(targetUrl)}
            srcDoc={targetUrl.startsWith('<') ? targetUrl : undefined}
            className="w-full h-full min-h-[100vh] border-0 bg-white"
            title={title || 'AP Examination Paper'}
            sandbox="allow-scripts allow-same-origin allow-modals allow-downloads allow-popups"
          />
        )}

        {/* Error Fallback */}
        {error && !isHtml && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-rose-400 mb-3 shadow-md">
              <AlertCircle className="w-6 h-6" />
            </div>
            <p className="text-xs text-zinc-400 max-w-xs">{error}</p>
            <button
              onClick={() => setRetryKey(k => k + 1)}
              className="mt-4 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
          </div>
        )}

        {/* Clean PDF Pages Stream with Double-Tap Zoom */}
        {!isHtml && !error && (
          <div
            ref={pagesContainerRef}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={handleDoubleClick}
            className="w-full flex flex-col items-center cursor-zoom-in transition-transform duration-250 ease-out origin-center"
            style={{
              transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
              transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
            }}
          />
        )}
      </div>
    </div>
  );
}
