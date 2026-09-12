import { jsPDF } from 'jspdf';
import { savePDFMobile, sharePDFMobile } from './mobileSaver';
import { addStudyXP, trackQuestProgress } from './gamification';
import { triggerVibration } from './vibrate';
import { safeGetItem, safeSetItem } from './storage';
import { sanitizePdfText, formatLatexToAscii } from './pdfSanitizer';
import { drawTextWithElevatedPowers } from './pdfTableDrawer';

export interface FormulaItem {
  name: string;
  latex?: string;
  insertText?: string;
}

export interface FormulaCategoryItem {
  name: string;
  subtitle: string;
  icon: string;
  formulas: FormulaItem[];
}

/**
 * Converts LaTeX strings to crisp, highly readable mathematical typography for clean PDF rendering
 */
function cleanLatexForPdf(latex: string): string {
  if (!latex) return '';
  return sanitizePdfText(formatLatexToAscii(latex));
}

/**
 * Generates and downloads a high-quality, beautifully arranged Printable Formula Cheat Sheet PDF
 */
export async function exportFormulaSheetPDF(
  categories: FormulaCategoryItem[],
  selectedCategoryName?: string | null
): Promise<boolean> {
  triggerVibration(20);

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  const margin = 16;
  const contentWidth = pageWidth - (margin * 2); // 178mm

  const filteredCategories = selectedCategoryName
    ? categories.filter(c => c.name === selectedCategoryName)
    : categories;

  const titleText = selectedCategoryName 
    ? `${selectedCategoryName} — Formula Sheet`
    : 'AP Exam App — Quick Formula Compendium';

  let currentY = 20;

  const drawPageHeader = (pageNumber: number) => {
    // Top decorative bar
    doc.setFillColor(79, 70, 229); // Indigo 600
    doc.rect(margin, 10, contentWidth, 2, 'F');

    // Header branding
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(110, 110, 120);
    doc.text('AP EXAM APP - FORMULA COMPENDIUM & CHEAT SHEET', margin, 8.5);
    doc.text(`Page ${pageNumber}`, pageWidth - margin, 8.5, { align: 'right' });
  };

  const drawPageFooter = (pageNumber: number) => {
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(140, 140, 150);
    doc.setDrawColor(225, 225, 230);
    doc.setLineWidth(0.2);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    
    doc.text('AP Exam App - Smart Calculator & Formula Helper', margin, pageHeight - 7);
    doc.text(`Page ${pageNumber}  •  For interactive math solvers, view in AP Exam app`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  };

  let pageIndex = 1;
  drawPageHeader(pageIndex);

  // Title Block
  currentY = 20;
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(24, 24, 27);
  doc.text(sanitizePdfText(titleText), margin, currentY);
  currentY += 6;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(113, 113, 122);
  doc.text('Standardized Academic Curriculum - Formulas & Key Identities', margin, currentY);
  currentY += 9;

  for (const category of filteredCategories) {
    // Check if category header fits
    if (currentY + 28 > pageHeight - 20) {
      drawPageFooter(pageIndex);
      doc.addPage();
      pageIndex++;
      drawPageHeader(pageIndex);
      currentY = 20;
    }

    // Category Header Box
    doc.setFillColor(243, 244, 246);
    doc.roundedRect(margin, currentY, contentWidth, 8, 1.5, 1.5, 'F');
    
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(67, 56, 202); // Dark Indigo
    doc.text(sanitizePdfText(`${category.name}`), margin + 4, currentY + 5.5);

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 130);
    doc.text(sanitizePdfText(category.subtitle), pageWidth - margin - 4, currentY + 5.5, { align: 'right' });

    currentY += 11;

    // Formulas Cards
    for (const formula of category.formulas) {
      const cleanFormula = cleanLatexForPdf(formula.latex || formula.insertText || '');
      const sanitizedFormulaName = sanitizePdfText(formula.name);
      
      // Calculate wrapped text dimensions with exact padding
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(9.5);
      const nameLines: string[] = doc.splitTextToSize(sanitizedFormulaName, contentWidth - 14);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(10);
      const mathLines: string[] = doc.splitTextToSize(cleanFormula, contentWidth - 14);

      const nameHeight = nameLines.length * 4.2;
      const mathHeight = mathLines.length * 4.6;
      const boxHeight = Math.max(15, nameHeight + mathHeight + 7);

      if (currentY + boxHeight > pageHeight - 18) {
        drawPageFooter(pageIndex);
        doc.addPage();
        pageIndex++;
        drawPageHeader(pageIndex);
        currentY = 20;
      }

      // Formula Card Container
      doc.setDrawColor(228, 228, 231);
      doc.setLineWidth(0.3);
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(margin, currentY, contentWidth, boxHeight, 2, 2, 'FD');

      // Left Color Accent Strip
      doc.setFillColor(79, 70, 229);
      doc.roundedRect(margin, currentY, 1.8, boxHeight, 1, 1, 'F');

      // Formula Name Heading
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(30, 41, 59); // Slate 800
      let textY = currentY + 4.8;
      for (const line of nameLines) {
        doc.text(line, margin + 5, textY);
        textY += 4.2;
      }

      // Formula Equation with clean font & indigo color
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(67, 56, 202); // Indigo 700
      textY += 1.2;
      for (const line of mathLines) {
        drawTextWithElevatedPowers(doc, line, margin + 5, textY, 10);
        textY += 4.6;
      }

      currentY += boxHeight + 2.5;
    }

    currentY += 4;
  }

  // ─── FINAL PAGE PRO TIP CALLOUT BOX ───
  const tipBoxH = 13.5;
  if (currentY + tipBoxH > pageHeight - 16) {
    drawPageFooter(pageIndex);
    doc.addPage();
    pageIndex++;
    drawPageHeader(pageIndex);
    currentY = 20;
  }

  const targetTipY = Math.max(currentY + 4, pageHeight - 14.5 - tipBoxH);

  doc.setFillColor(245, 243, 255);
  doc.setDrawColor(199, 210, 254);
  doc.setLineWidth(0.35);
  doc.roundedRect(margin, targetTipY, contentWidth, tipBoxH, 2, 2, 'FD');

  doc.setFillColor(99, 102, 241);
  doc.roundedRect(margin, targetTipY, 2.5, tipBoxH, 1, 1, 'F');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(67, 56, 202);
  doc.text('★ PRO TIP: FOR THE BEST STUDY EXPERIENCE', margin + 5.5, targetTipY + 4.6);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(55, 65, 81);
  const tipText = 'To practice formulas interactively with step-by-step solvers, graphing, and instant AI explanations, view these formulas inside the AP Exam app rather than static PDFs!';
  const tipLines = doc.splitTextToSize(tipText, contentWidth - 10);
  let tY = targetTipY + 8.5;
  for (const line of tipLines) {
    doc.text(line, margin + 5.5, tY);
    tY += 3.4;
  }

  drawPageFooter(pageIndex);

  // Generate PDF Output
  const pdfBlob = doc.output('blob');
  const filename = selectedCategoryName 
    ? `${selectedCategoryName.replace(/[^a-zA-Z0-9]/g, '_')}_Formula_Sheet.pdf`
    : 'AP_Exam_Quick_Formula_Sheet.pdf';

  const saved = await savePDFMobile(pdfBlob, filename, {
    featureTag: 'Formula Sheet',
    customToast: '✅ Saved offline in app'
  });

  return saved;
}

/**
 * Compiles and directly shares the authentic Formula Cheat Sheet as a PDF document.
 */
export async function shareFormulaSheetPDF(
  categories: FormulaCategoryItem[],
  selectedCategoryName?: string | null
): Promise<boolean> {
  triggerVibration(20);

  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 16;
    const contentWidth = pageWidth - (margin * 2);

    const filteredCategories = selectedCategoryName
      ? categories.filter(c => c.name === selectedCategoryName)
      : categories;

    const titleText = selectedCategoryName 
      ? `${selectedCategoryName} — Formula Sheet`
      : 'AP Exam App — Quick Formula Compendium';

    let currentY = 20;

    const drawPageHeader = (pageNumber: number) => {
      doc.setFillColor(30, 27, 75);
      doc.rect(0, 0, pageWidth, 28, 'F');
      doc.setFillColor(99, 102, 241);
      doc.rect(0, 28, pageWidth, 1.2, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(251, 191, 36);
      doc.text('AP EXAM APP  |  HIGH-YIELD MATHEMATICS & SCIENCE FORMULAS', margin, 9);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(255, 255, 255);
      doc.text(titleText, margin, 18);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(226, 232, 240);
      doc.text('Comprehensive formula sheet formatted for quick reference, high retention, and exam mastery.', margin, 24);

      currentY = 35;
    };

    const drawPageFooter = (pageNum: number) => {
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(margin, pageHeight - 8, pageWidth - margin, pageHeight - 8);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);
      doc.text('For interactive step-by-step solvers, visit AP Exam App', margin, pageHeight - 4.5);
      doc.text(`Page ${pageNum}`, pageWidth - margin, pageHeight - 4.5, { align: 'right' });
    };

    let pageIndex = 1;
    drawPageHeader(pageIndex);

    filteredCategories.forEach((cat) => {
      if (currentY + 20 > pageHeight - 16) {
        drawPageFooter(pageIndex);
        doc.addPage();
        pageIndex++;
        drawPageHeader(pageIndex);
      }

      doc.setFillColor(241, 245, 249);
      doc.setDrawColor(203, 213, 225);
      doc.setLineWidth(0.4);
      doc.roundedRect(margin, currentY, contentWidth, 10, 2, 2, 'FD');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(30, 41, 59);
      doc.text(cat.name, margin + 4, currentY + 6.8);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(100, 116, 139);
      doc.text(cat.subtitle, pageWidth - margin - 4, currentY + 6.8, { align: 'right' });

      currentY += 13;

      cat.formulas.forEach((item) => {
        const cleanLatex = cleanLatexForPdf(item.latex || item.insertText || '');
        const cardHeight = 16;

        if (currentY + cardHeight > pageHeight - 16) {
          drawPageFooter(pageIndex);
          doc.addPage();
          pageIndex++;
          drawPageHeader(pageIndex);
        }

        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.3);
        doc.roundedRect(margin, currentY, contentWidth, cardHeight, 1.5, 1.5, 'FD');

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(15, 23, 42);
        doc.text(item.name, margin + 3.5, currentY + 5);

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(67, 56, 202);
        doc.text(cleanLatex, margin + 3.5, currentY + 11);

        currentY += cardHeight + 3.5;
      });

      currentY += 4;
    });

    drawPageFooter(pageIndex);

    const pdfBlob = doc.output('blob');
    const filename = selectedCategoryName 
      ? `${selectedCategoryName.replace(/[^a-zA-Z0-9]/g, '_')}_Formula_Sheet.pdf`
      : 'AP_Exam_Quick_Formula_Sheet.pdf';

    return await sharePDFMobile(pdfBlob, filename);
  } catch (err) {
    console.error('Failed to share formula sheet PDF:', err);
    return false;
  }
}
