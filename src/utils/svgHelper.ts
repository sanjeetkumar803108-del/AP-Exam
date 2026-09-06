/**
 * SVG Helper Utilities for College Board AP Exam Diagrams and Graphs
 * Provides secure sanitization, visual label formatting, and offscreen canvas
 * rasterization for embedding high-DPI diagram images into jsPDF exports.
 */

export const sanitizeSvg = (rawSvg?: string): string => {
  if (!rawSvg || typeof rawSvg !== 'string') return '';
  
  // Extract only the <svg>...</svg> block
  const match = rawSvg.match(/<svg[\s\S]*?<\/svg>/i);
  if (!match) return '';
  
  let svg = match[0].trim();
  
  // Ensure xmlns is present for standard SVG rendering
  if (!svg.includes('xmlns="http://www.w3.org/2000/svg"')) {
    svg = svg.replace(/<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
  }

  // Strip potentially malicious tags and attributes (XSS defense)
  svg = svg.replace(/<script[\s\S]*?<\/script>/gi, '');
  svg = svg.replace(/\bon\w+\s*=\s*(['"]).*?\1/gi, '');
  svg = svg.replace(/javascript\s*:/gi, '');
  svg = svg.replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, '');

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
 * Offscreen rasterizer for embedding SVG diagrams safely into jsPDF documents.
 * jsPDF standard fonts cannot parse raw SVG text elements; this converts the SVG
 * into a high-resolution PNG dataURL.
 */
export const rasterizeSvgToDataUrl = async (
  rawSvg: string,
  targetWidth = 800,
  targetHeight = 440
): Promise<string | null> => {
  return new Promise((resolve) => {
    try {
      const sanitized = sanitizeSvg(rawSvg);
      if (!sanitized) {
        resolve(null);
        return;
      }

      const blob = new Blob([sanitized], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.crossOrigin = 'anonymous';

      const timeoutId = setTimeout(() => {
        URL.revokeObjectURL(url);
        resolve(null);
      }, 3500);

      img.onload = () => {
        clearTimeout(timeoutId);
        try {
          const canvas = document.createElement('canvas');
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            URL.revokeObjectURL(url);
            resolve(null);
            return;
          }

          // Crisp dark background matching College Board diagram aesthetic
          ctx.fillStyle = '#09090b';
          ctx.fillRect(0, 0, targetWidth, targetHeight);
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

          const dataUrl = canvas.toDataURL('image/png');
          URL.revokeObjectURL(url);
          resolve(dataUrl);
        } catch {
          URL.revokeObjectURL(url);
          resolve(null);
        }
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        URL.revokeObjectURL(url);
        resolve(null);
      };

      img.src = url;
    } catch {
      resolve(null);
    }
  });
};
