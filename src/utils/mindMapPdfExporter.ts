import { jsPDF } from 'jspdf';
import { savePDFMobile } from './mobileSaver';
import { addStudyXP, trackQuestProgress } from './gamification';
import { triggerVibration } from './vibrate';
import { sanitizePdfText, formatMathForPdf } from './pdfSanitizer';
import { APUnitMindMap } from '../data/mindmaps/types';

export interface MindMapPdfResult {
  success: boolean;
  dataUri?: string;
  fileName?: string;
  error?: string;
}

/**
 * Generates and downloads the comprehensive, high-yield Printable AP Mind Map Detailed Tree Revision PDF.
 * Aligned with official College Board CED standards, formatted with sanitized math,
 * and zero UTF-16 null-byte errors.
 */
export async function exportVisualMindMapPDF(
  targetOrUnit: HTMLElement | APUnitMindMap | null,
  unitArg?: APUnitMindMap
): Promise<MindMapPdfResult> {
  const unit: APUnitMindMap = (unitArg || targetOrUnit) as APUnitMindMap;
  return exportMindMapPDF(unit);
}

/**
 * Generates the jsPDF Document instance, Blob, and Base64 Data URI for a Mind Map unit.
 */
export async function generateMindMapPdfDocument(unit: APUnitMindMap): Promise<{
  doc: jsPDF;
  blob: Blob;
  dataUri: string;
  fileName: string;
}> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182mm

  let currentY = 16;

  // Helper: Header on each page
  const drawPageHeader = (pageNum: number) => {
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(
      `AP BIOLOGY CONCEPT MIND MAP - UNIT ${unit.unitNumber}: ${sanitizePdfText(unit.unitTitle).toUpperCase()}`,
      margin,
      10
    );

    doc.setFont('Helvetica', 'normal');
    doc.text(`Page ${pageNum}`, pageWidth - margin, 10, { align: 'right' });

    doc.setDrawColor(220, 220, 225);
    doc.setLineWidth(0.3);
    doc.line(margin, 12, pageWidth - margin, 12);
  };

  // Helper: Footer on each page
  const drawPageFooter = () => {
    doc.setDrawColor(230, 230, 235);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(140, 140, 140);
    doc.text('HelpYou AI - AP Exam Mind Map & Concept Revision Sheet', margin, pageHeight - 8);
    doc.text('College Board AP Curriculum Aligned', pageWidth - margin, pageHeight - 8, { align: 'right' });
  };

  // Helper: Check space and add new page if needed
  const ensureSpace = (requiredHeight: number) => {
    if (currentY + requiredHeight > pageHeight - 16) {
      drawPageFooter();
      doc.addPage();
      currentY = 16;
      drawPageHeader(doc.getNumberOfPages());
    }
  };

  // ─────────────────────────────────────────────────────────────
  // PAGE 1: TITLE BANNER & CORE BIG IDEA
  // ─────────────────────────────────────────────────────────────
  drawPageHeader(1);

  // Decorative top color accent
  doc.setFillColor(124, 58, 237); // Purple accent
  doc.roundedRect(margin, currentY, contentWidth, 22, 2.5, 2.5, 'F');

  // Title inside banner
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text(`AP BIOLOGY - UNIT ${unit.unitNumber} MIND MAP`, margin + 5, currentY + 7.5);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.text(
    `${sanitizePdfText(unit.unitTitle)}  |  Exam Weight: ${sanitizePdfText(unit.examWeight)}`,
    margin + 5,
    currentY + 14
  );

  currentY += 27;

  // ─── CORE BIG IDEA CALLOUT BOX ───
  doc.setFillColor(245, 243, 255); // Soft purple
  doc.setDrawColor(221, 214, 254);
  doc.setLineWidth(0.4);

  const cleanBigIdea = formatMathForPdf(unit.coreBigIdea);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  const bigIdeaLines = doc.splitTextToSize(cleanBigIdea, contentWidth - 10);
  const boxHeight = 9 + bigIdeaLines.length * 4.2;

  doc.roundedRect(margin, currentY, contentWidth, boxHeight, 2, 2, 'FD');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(109, 40, 217);
  doc.text('CED CORE BIG IDEA:', margin + 4, currentY + 5.5);

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(55, 65, 81);
  doc.text(bigIdeaLines, margin + 4, currentY + 10);

  currentY += boxHeight + 5;

  // ─── 60-SECOND CRAM BULLETS ───
  if (unit.quickCramBullets && unit.quickCramBullets.length > 0) {
    ensureSpace(28);

    doc.setFillColor(254, 243, 199); // Amber
    doc.setDrawColor(251, 191, 36);
    doc.setLineWidth(0.3);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(146, 64, 14);

    let cramTextHeight = 7;
    const bulletLinesList: string[][] = [];

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    for (const bullet of unit.quickCramBullets) {
      const lines = doc.splitTextToSize(`* ${formatMathForPdf(bullet)}`, contentWidth - 10);
      bulletLinesList.push(lines);
      cramTextHeight += lines.length * 3.8 + 1;
    }

    doc.roundedRect(margin, currentY, contentWidth, cramTextHeight + 3, 2, 2, 'FD');

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(146, 64, 14);
    doc.text('60-SECOND HIGH-YIELD CRAM CHECKLIST:', margin + 4, currentY + 5);

    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(69, 26, 3);
    let bY = currentY + 9;
    for (const lines of bulletLinesList) {
      doc.text(lines, margin + 4, bY);
      bY += lines.length * 3.8 + 1;
    }

    currentY += cramTextHeight + 8;
  }

  // ─────────────────────────────────────────────────────────────
  // MIND MAP CONCEPT BRANCHES (HIERARCHY)
  // ─────────────────────────────────────────────────────────────
  ensureSpace(15);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(24, 24, 27);
  doc.text('CONCEPT HIERARCHY & DETAILED MECHANISMS', margin, currentY);
  currentY += 5;

  doc.setDrawColor(228, 228, 231);
  doc.setLineWidth(0.4);
  doc.line(margin, currentY, pageWidth - margin, currentY);
  currentY += 5;

  // Iterate through all branches
  for (let bIdx = 0; bIdx < unit.branches.length; bIdx++) {
    const branch = unit.branches[bIdx];
    ensureSpace(20);

    // Branch Banner Box
    doc.setFillColor(244, 244, 245);
    doc.setDrawColor(212, 212, 216);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, currentY, contentWidth, 8.5, 1.5, 1.5, 'FD');

    // Colored tag pip
    doc.setFillColor(79, 70, 229);
    doc.circle(margin + 3.5, currentY + 4.25, 1.5, 'F');

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(24, 24, 27);
    const branchTitleText = branch.cedTopicRef
      ? `[${branch.cedTopicRef}]  ${sanitizePdfText(branch.title)}`
      : sanitizePdfText(branch.title);
    doc.text(branchTitleText, margin + 7, currentY + 5.5);

    currentY += 11;

    if (branch.subtitle) {
      doc.setFont('Helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.setTextColor(113, 113, 122);
      doc.text(sanitizePdfText(branch.subtitle), margin + 4, currentY);
      currentY += 4.5;
    }

    // Branch Leaf Nodes
    for (const node of branch.children) {
      ensureSpace(22);

      // Concept Header
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(30, 41, 59);

      let titleLine = `* ${sanitizePdfText(node.title)}`;
      if (node.badge) {
        titleLine += `  [${(node.badgeLabel || node.badge).toUpperCase()}]`;
      }
      doc.text(titleLine, margin + 4, currentY);
      currentY += 4;

      // Concept Detail
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);

      const cleanDetail = formatMathForPdf(node.detail);
      const detailLines = doc.splitTextToSize(cleanDetail, contentWidth - 8);
      ensureSpace(detailLines.length * 3.7 + 4);

      doc.text(detailLines, margin + 6, currentY);
      currentY += detailLines.length * 3.7 + 2;

      // Formula callout (if any)
      if (node.formulaLatex) {
        ensureSpace(9);
        doc.setFillColor(238, 242, 255);
        doc.setDrawColor(199, 210, 254);
        doc.setLineWidth(0.2);

        const cleanFormula = formatMathForPdf(node.formulaLatex);
        doc.roundedRect(margin + 6, currentY, contentWidth - 12, 6.5, 1, 1, 'FD');

        doc.setFont('Courier', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(67, 56, 202);
        doc.text(`Formula: ${cleanFormula}`, margin + 9, currentY + 4.3);

        currentY += 8.5;
      }

      // Trap Alert callout (if any)
      if (node.trapAlert) {
        const cleanTrap = formatMathForPdf(node.trapAlert);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(7.5);
        const trapLines = doc.splitTextToSize(`! AP EXAM TRAP: ${cleanTrap}`, contentWidth - 14);
        const trapBoxH = trapLines.length * 3.5 + 4;

        ensureSpace(trapBoxH + 2);
        doc.setFillColor(255, 241, 242); // Rose
        doc.setDrawColor(254, 205, 211);
        doc.setLineWidth(0.2);
        doc.roundedRect(margin + 6, currentY, contentWidth - 12, trapBoxH, 1, 1, 'FD');

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(190, 18, 60);
        doc.text(trapLines, margin + 9, currentY + 3.8);

        currentY += trapBoxH + 3;
      }

      currentY += 2;
    }

    currentY += 4;
  }

  // Finish footer on the final page
  drawPageFooter();

  // Export PDF Blob and Data URI
  const blob = doc.output('blob');
  const dataUri = doc.output('datauristring');
  const safeTitle = unit.unitTitle.replace(/[^a-zA-Z0-9_-]/g, '_');
  const fileName = `AP_Biology_Unit_${unit.unitNumber}_${safeTitle}_MindMap.pdf`;

  return { doc, blob, dataUri, fileName };
}

/**
 * Generates and downloads an ultra-clean, high-yield Printable AP Mind Map Revision PDF.
 * Formatted with standard Helvetica fonts, sanitized math, and zero UTF-16 null-byte errors.
 */
export async function exportMindMapPDF(unit: APUnitMindMap): Promise<MindMapPdfResult> {
  triggerVibration(25);

  try {
    const { blob, dataUri, fileName } = await generateMindMapPdfDocument(unit);

    // Save to device storage (Downloads / Files app) via mobileSaver
    try {
      await savePDFMobile(blob, fileName, {
        featureTag: 'Mind Map Revision Sheet',
      });
    } catch (saveErr) {
      console.warn('savePDFMobile warning:', saveErr);
      // Fallback web trigger if mobileSaver had any issue
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    }

    // Gamification rewards
    try {
      addStudyXP(30);
      trackQuestProgress('export_notes', 1);
    } catch (_) {}

    return {
      success: true,
      dataUri,
      fileName,
    };
  } catch (error: any) {
    console.error('Error exporting mind map PDF:', error);
    return {
      success: false,
      error: error?.message || 'Failed to generate PDF document.',
    };
  }
}
