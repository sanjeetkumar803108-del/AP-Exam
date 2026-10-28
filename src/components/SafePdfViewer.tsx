import React, { useEffect, useRef, useState } from 'react';
import { FileText, WifiOff, Download, Share2, RefreshCw } from 'lucide-react';

interface SafePdfViewerProps {
  pdfUrlOrBase64?: string; // can be blob URL or data:application/pdf;base64...
  pdfUrl?: string;
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

async function configurePdfWorker(lib: any): Promise<void> {
  if (!lib || !lib.GlobalWorkerOptions) return;
  
  // 1. Try to fetch the local worker script and create an in-memory same-origin Blob URL.
  // This guarantees 0 cross-origin or file:// worker security restrictions in Android Capacitor WebView!
  try {
    const localWorkerUrl = getLocalAssetUrl('vendor/pdfjs/pdf.worker.min.js');
    const res = await fetch(localWorkerUrl);
    if (res.ok) {
      const code = await res.text();
      const blob = new Blob([code], { type: 'application/javascript' });
      lib.GlobalWorkerOptions.workerSrc = URL.createObjectURL(blob);
      return;
    }
  } catch (err) {
    console.warn('[SafePdfViewer] Blob worker setup notice:', err);
  }

  // 2. Fallback to direct local URL or reliable CDN worker
  try {
    lib.GlobalWorkerOptions.workerSrc = getLocalAssetUrl('vendor/pdfjs/pdf.worker.min.js');
  } catch (_) {
    lib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
  }
}

function loadPdfJs(): Promise<any> {
  if (window.pdfjsLib) {
    return Promise.resolve(window.pdfjsLib);
  }
  if (pdfjsLoadPromise) {
    return pdfjsLoadPromise;
  }

  pdfjsLoadPromise = new Promise((resolve, reject) => {
    // 1. Try Local Asset First (100% offline, zero network dependence, instant rendering)
    const script = document.createElement('script');
    script.id = 'pdfjs-script';
    script.src = getLocalAssetUrl('vendor/pdfjs/pdf.min.js');
    
    script.onload = async () => {
      const lib = window.pdfjsLib || (window as any)['pdfjs-dist/build/pdf'];
      if (lib) {
        window.pdfjsLib = lib;
        await configurePdfWorker(lib);
        resolve(lib);
      } else {
        tryJsDelivrFallback(resolve, reject);
      }
    };

    script.onerror = () => {
      tryJsDelivrFallback(resolve, reject);
    };

    document.head.appendChild(script);
  });

  return pdfjsLoadPromise;
}

function tryJsDelivrFallback(resolve: (value: any) => void, reject: (reason: any) => void) {
  const existing = document.getElementById('pdfjs-script');
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.id = 'pdfjs-script';
  script.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/build/pdf.min.js';

  script.onload = () => {
    const lib = window.pdfjsLib || (window as any)['pdfjs-dist/build/pdf'];
    if (lib) {
      window.pdfjsLib = lib;
      lib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/build/pdf.worker.min.js';
      resolve(lib);
    } else {
      tryCdnjsFallback(resolve, reject);
    }
  };

  script.onerror = () => {
    tryCdnjsFallback(resolve, reject);
  };

  document.head.appendChild(script);
}

function tryCdnjsFallback(resolve: (value: any) => void, reject: (reason: any) => void) {
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
      reject(new Error('PDF engine compiled but global object missing.'));
    }
  };

  script.onerror = () => {
    pdfjsLoadPromise = null;
    reject(new Error('Network offline or PDF engine CDN blocked.'));
  };

  document.head.appendChild(script);
}

export default function SafePdfViewer({ pdfUrlOrBase64, pdfUrl }: SafePdfViewerProps) {
  const targetUrl = pdfUrlOrBase64 || pdfUrl || '';
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    const loadAndRender = async () => {
      try {
        const trimmed = (targetUrl || '').trim();
        if (!trimmed) {
          if (active) {
            setLoading(false);
            setError('No PDF document was attached to this unit set.');
          }
          return;
        }

        setLoading(true);
        setError(null);

        // A. Load PDF.js engine
        const pdfjs = await loadPdfJs();
        if (!active) return;

        // B. Parse PDF source data robustly:
        // Handles data URLs, raw base64 strings (starting with JVBERi0... or raw bytes), blob URLs, and HTTP/local links
        let pdfData: Uint8Array;

        const isBase64 = 
          trimmed.startsWith('data:') || 
          trimmed.startsWith('JVBERi') || 
          (!trimmed.startsWith('http://') && !trimmed.startsWith('https://') && !trimmed.startsWith('blob:') && !trimmed.startsWith('/') && trimmed.length > 50);

        if (isBase64) {
          const base64Data = trimmed.includes(',') ? trimmed.split(',')[1] : trimmed;
          const cleanedBase64 = base64Data.replace(/[\s\r\n]+/g, '');
          const binaryString = atob(cleanedBase64);
          const len = binaryString.length;
          pdfData = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            pdfData[i] = binaryString.charCodeAt(i);
          }
        } else {
          const response = await fetch(trimmed);
          if (!response.ok) {
            throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
          }
          const arrayBuffer = await response.arrayBuffer();
          pdfData = new Uint8Array(arrayBuffer);
        }

        if (!active) return;

        // C. Load document into the rendering engine (with fake worker fallback)
        const loadingTask = pdfjs.getDocument({
          data: pdfData,
          isEvalSupported: false,
          disableFontFace: false,
        });

        const pdf = await loadingTask.promise;
        if (!active) return;

        // D. Render all pages consecutively
        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = ''; // Clear prior renders

        setLoading(false);

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (!active) return;
          const page = await pdf.getPage(pageNum);
          
          // Clean, full-width visual page card with subtle paper elevation
          const pageCard = document.createElement('div');
          pageCard.className = 'w-full max-w-4xl mx-auto mb-3 sm:mb-4 bg-white shadow-xs border-b sm:border border-zinc-200/70 flex flex-col items-center overflow-hidden last:mb-0';

          // Render canvas with optimized mobile retina sharpness without memory exhaustion
          const dpr = Math.min(Math.max(window.devicePixelRatio || 1, 1.5), 2.0);
          const targetScale = dpr;
          const viewport = page.getViewport({ scale: targetScale });
          const canvas = document.createElement('canvas');
          canvas.className = 'w-full h-auto bg-white border-0 block';
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

          pageCard.appendChild(canvas);
          container.appendChild(pageCard);

          if (ctx) {
            const renderContext = {
              canvasContext: ctx,
              viewport: viewport,
            };
            await page.render(renderContext).promise;
          }
        }
      } catch (err: any) {
        console.error('[PDFViewer] Critical preview error:', err);
        if (active) {
          setError(err?.message || 'Unable to render PDF document visually in-app.');
          setLoading(false);
        }
      }
    };

    loadAndRender();

    return () => {
      active = false;
    };
  }, [targetUrl, retryKey]);

  return (
    <div className="w-full h-full flex flex-col bg-zinc-100/90 overflow-y-auto momentum-scroll px-0 sm:px-4 py-0 sm:py-3 items-center justify-start min-h-[300px]">
      {loading && (
        <div className="flex flex-col items-center justify-center my-auto py-24 text-zinc-800 gap-3.5">
          <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-center">
            <p className="text-xs font-black text-zinc-800 uppercase tracking-wider">Rendering AP Document</p>
            <p className="text-[11px] text-zinc-500 mt-0.5">Loading high-resolution pages...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center my-auto py-16 text-center px-6 max-w-sm">
          <div className="w-14 h-14 bg-zinc-800 border border-zinc-700/80 text-rose-500 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
            <WifiOff className="w-6 h-6" />
          </div>
          <h5 className="text-sm font-extrabold text-zinc-200">Document Preview Notice</h5>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
            {error.includes('No PDF') 
              ? error 
              : 'Visual page rendering encountered a restriction. The PDF file content is ready in local memory.'}
          </p>
          
          <button
            onClick={() => setRetryKey(k => k + 1)}
            className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry Rendering</span>
          </button>
        </div>
      )}

      <div ref={containerRef} className="w-full flex flex-col items-center" />
    </div>
  );
}
