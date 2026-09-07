/**
 * SVG Helper Utilities for College Board AP Exam Diagrams and Graphs
 * Provides secure sanitization, visual label formatting, and offscreen canvas
 * rasterization for embedding high-DPI diagram images into jsPDF exports.
 */

export const sanitizeSvg = (rawSvg?: string, autoPad = true): string => {
  if (!rawSvg || typeof rawSvg !== 'string') return '';
  
  // Unescape any escaped HTML entities that may wrap or exist inside the SVG
  let cleanInput = rawSvg;
  if (cleanInput.includes('&lt;') || cleanInput.includes('&gt;')) {
    cleanInput = cleanInput
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  }

  // Extract only the <svg>...</svg> block
  const match = cleanInput.match(/<svg[\s\S]*?<\/svg>/i);
  if (!match) return '';
  
  let svg = match[0].trim();
  
  // Ensure xmlns is present exactly once (never duplicate if single-quoted or custom formatted)
  if (!svg.includes('xmlns=')) {
    svg = svg.replace(/<svg\b/i, '<svg xmlns="http://www.w3.org/2000/svg"');
  }

  // Strip potentially malicious tags and attributes (XSS defense)
  svg = svg.replace(/<script[\s\S]*?<\/script>/gi, '');
  svg = svg.replace(/\bon\w+\s*=\s*(['"]).*?\1/gi, '');
  svg = svg.replace(/javascript\s*:/gi, '');
  svg = svg.replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, '');

  if (autoPad) {
    // 1. Robust Auto-healing ViewBox Padding:
    // Handles comma-separated, space-separated, and mixed formatting
    const vbMatch = svg.match(/viewBox=['"]\s*([-\d.]+)[,\s]+([-\d.]+)[,\s]+([-\d.]+)[,\s]+([-\d.]+)\s*['"]/i);
    if (vbMatch) {
      const minX = parseFloat(vbMatch[1]);
      const minY = parseFloat(vbMatch[2]);
      const w = parseFloat(vbMatch[3]);
      const h = parseFloat(vbMatch[4]);

      const padX = Math.max(30, Math.round(w * 0.08));
      const padY = Math.max(32, Math.round(h * 0.15));

      const newMinX = minX - padX;
      const newMinY = minY - padY;
      const newW = w + (padX * 2);
      const newH = h + (padY * 2);

      // Replace viewBox cleanly with expanded safety bounds
      svg = svg.replace(
        /viewBox=['"][^'"]*['"]/i,
        `viewBox="${newMinX} ${newMinY} ${newW} ${newH}"`
      );

      // Expand top-level dark background <rect> to cover the new padded canvas
      svg = svg.replace(
        /<rect\b([^>]*?)(?:width=['"](?:400|100%)['"]|fill=['"]#09090b['"])([^>]*?)\/?>/i,
        `<rect x="${newMinX}" y="${newMinY}" width="${newW}" height="${newH}" fill="#09090b" rx="14" stroke="#27272a" stroke-width="1.5"/>`
      );
    } else if (!svg.includes('viewBox=')) {
      // Only add default viewBox if none exists to avoid fatal XML attribute duplication
      svg = svg.replace(/<svg\b/i, '<svg viewBox="-30 -30 460 280"');
    }
  }

  // 2. Ensure responsive scaling, zero clipping, and aspect-ratio preservation for onscreen UI
  svg = svg.replace(
    /<svg\b([^>]*?)>/i,
    `<svg $1 style="overflow: visible; width: 100%; height: auto; max-height: 100%; display: block;" preserveAspectRatio="xMidYMid meet">`
  );

  return svg;
};

export const getDiagramTypeLabel = (type?: string): string => {
  if (!type) return 'Figure / Diagram';
  const clean = type.toLowerCase().replace(/[-_]/g, ' ');
  if (clean.includes('coordinate') || clean.includes('graph') || clean.includes('curve') || clean.includes('limit')) {
    return 'Coordinate Graph / Function Curve';
  }
  if (clean.includes('circuit')) return 'Electric Circuit Schematic';
  if (clean.includes('free body') || clean.includes('force') || clean.includes('fbd')) return 'Free-Body Force Diagram (FBD)';
  if (clean.includes('energy') || clean.includes('reaction') || clean.includes('titration') || clean.includes('orbital')) {
    return 'Chemical Reaction / Energy Profile';
  }
  if (clean.includes('pedigree') || clean.includes('punnett') || clean.includes('cell') || clean.includes('enzyme')) {
    return 'Biological Diagram / Genetic Model';
  }
  if (clean.includes('supply') || clean.includes('demand') || clean.includes('market') || clean.includes('phillips') || clean.includes('ppc')) {
    return 'Economic Market Diagram (S & D)';
  }
  if (clean.includes('box') || clean.includes('histogram') || clean.includes('scatter') || clean.includes('normal') || clean.includes('stats')) {
    return 'Statistical Distribution / Chart';
  }
  return 'College Board AP® Diagram';
};

/**
 * Prepares an SVG for pixel-perfect offscreen Canvas / PNG rasterization:
 * Sets explicit numerical width and height attributes on the root <svg> element
 * without corrupting child elements.
 */
function prepareSvgForRasterization(sanitizedSvg: string, targetWidth: number, targetHeight: number): string {
  let svg = sanitizedSvg;

  const svgTagMatch = svg.match(/<svg\b([^>]*)>/i);
  if (svgTagMatch) {
    let attrs = svgTagMatch[1];
    // Strip overriding CSS style attribute so explicit canvas dimensions prevail
    attrs = attrs.replace(/style=['"][^'"]*['"]/i, '');

    if (/\bwidth=['"][^'"]*['"]/i.test(attrs)) {
      attrs = attrs.replace(/\bwidth=['"][^'"]*['"]/i, `width="${targetWidth}"`);
    } else {
      attrs += ` width="${targetWidth}"`;
    }

    if (/\bheight=['"][^'"]*['"]/i.test(attrs)) {
      attrs = attrs.replace(/\bheight=['"][^'"]*['"]/i, `height="${targetHeight}"`);
    } else {
      attrs += ` height="${targetHeight}"`;
    }

    if (!/\bpreserveAspectRatio=['"][^'"]*['"]/i.test(attrs)) {
      attrs += ` preserveAspectRatio="xMidYMid meet"`;
    }

    svg = svg.replace(svgTagMatch[0], `<svg ${attrs.trim()}>`);
  }

  return svg;
}

/**
 * Offscreen rasterizer for embedding SVG diagrams safely into jsPDF documents.
 * Converts the SVG into a high-resolution PNG dataURL.
 * Employs Base64 Data URI loading with Blob URL fallback and zero CORS conflicts.
 */
export const rasterizeSvgToDataUrl = async (
  rawSvg: string,
  targetWidth = 800,
  targetHeight = 440,
  bgColor: string | null = '#09090b',
  autoPad = true
): Promise<string | null> => {
  return new Promise((resolve) => {
    try {
      const sanitized = sanitizeSvg(rawSvg, autoPad);
      if (!sanitized) {
        resolve(null);
        return;
      }

      const canvasSvg = prepareSvgForRasterization(sanitized, targetWidth, targetHeight);

      // 1. Build Base64 Data URI (CORS-free, universal mobile support, zero network latency)
      let dataUrlSrc = '';
      try {
        const base64Data = typeof btoa !== 'undefined'
          ? btoa(unescape(encodeURIComponent(canvasSvg)))
          : (typeof Buffer !== 'undefined' ? Buffer.from(canvasSvg).toString('base64') : '');
        if (base64Data) {
          dataUrlSrc = `data:image/svg+xml;base64,${base64Data}`;
        }
      } catch {
        dataUrlSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(canvasSvg)}`;
      }

      const img = new Image();
      // NOTE: Never set crossOrigin on local data: or blob: schemes! Setting crossOrigin
      // forces CORS preflight checks that fail on local URLs in WebKit/Android WebView.

      let blobUrl: string | null = null;
      let hasFinished = false;

      const finish = (result: string | null) => {
        if (hasFinished) return;
        hasFinished = true;
        clearTimeout(timeoutId);
        if (blobUrl) {
          try { URL.revokeObjectURL(blobUrl); } catch {}
        }
        resolve(result);
      };

      // 5-second generous timeout safeguard
      const timeoutId = setTimeout(() => {
        finish(null);
      }, 5000);

      const renderToCanvas = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            finish(null);
            return;
          }

          // Render canvas background if requested (default dark for question SVG, white for notes)
          if (bgColor) {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, targetWidth, targetHeight);
          }
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

          const dataUrl = canvas.toDataURL('image/png');
          finish(dataUrl);
        } catch (err) {
          console.warn('Canvas rasterization error:', err);
          finish(null);
        }
      };

      img.onload = () => {
        renderToCanvas();
      };

      img.onerror = () => {
        // If Data URI failed for any reason, try Blob URL as a secondary fallback
        if (!blobUrl && typeof Blob !== 'undefined' && typeof URL !== 'undefined') {
          try {
            const blob = new Blob([canvasSvg], { type: 'image/svg+xml;charset=utf-8' });
            blobUrl = URL.createObjectURL(blob);
            img.src = blobUrl;
            return;
          } catch {}
        }
        finish(null);
      };

      img.src = dataUrlSrc || `data:image/svg+xml;charset=utf-8,${encodeURIComponent(canvasSvg)}`;
    } catch {
      resolve(null);
    }
  });
};
