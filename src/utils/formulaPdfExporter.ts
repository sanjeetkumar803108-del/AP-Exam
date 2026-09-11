import { jsPDF } from 'jspdf';
import { savePDFMobile } from './mobileSaver';
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
    : 'HelpYou AI — Quick Formula Compendium';

  let currentY = 20;

  const drawPageHeader = (pageNumber: number) => {
    // Top decorative bar
    doc.setFillColor(79, 70, 229); // Indigo 600
    doc.rect(margin, 10, contentWidth, 2, 'F');

    // Header branding
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(110, 110, 120);
    doc.text('HELPYOU AI - FORMULA COMPENDIUM & CHEAT SHEET', margin, 8.5);
    doc.text(`Page ${pageNumber}`, pageWidth - margin, 8.5, { align: 'right' });
  };

  const drawPageFooter = (pageNumber: number) => {
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(140, 140, 150);
    doc.setDrawColor(225, 225, 230);
    doc.setLineWidth(0.2);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    
    doc.text('HelpYou AI - Smart Calculator & Homework Helper', margin, pageHeight - 7);
    doc.text(`www.helpyou.ai`, pageWidth - margin, pageHeight - 7, { align: 'right' });
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

  drawPageFooter(pageIndex);

  // Generate PDF Output
  const pdfBlob = doc.output('blob');
  const filename = selectedCategoryName 
    ? `${selectedCategoryName.replace(/[^a-zA-Z0-9]/g, '_')}_Formula_Sheet.pdf`
    : 'HelpYou_AI_Quick_Formula_Sheet.pdf';

  const saved = await savePDFMobile(pdfBlob, filename, {
    featureTag: 'Formula Sheet',
    customToast: '✅ Saved offline in app'
  });

  return saved;
}
