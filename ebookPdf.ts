import { EbookContent } from "../data/ebooks";

const JSPDF_CDN_URL = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";

type JsPdfConstructor = new (options: {
  orientation: string;
  unit: string;
  format: string;
}) => any;

declare global {
  interface Window {
    jspdf?: { jsPDF: JsPdfConstructor };
  }
}

async function loadJsPdf(): Promise<JsPdfConstructor> {
  if (window.jspdf?.jsPDF) return window.jspdf.jsPDF;

  await new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${JSPDF_CDN_URL}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Unable to load the PDF generator.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = JSPDF_CDN_URL;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error("Unable to load the PDF generator.")), { once: true });
    document.head.appendChild(script);
  });

  if (!window.jspdf?.jsPDF) throw new Error("The PDF generator did not initialize.");
  return window.jspdf.jsPDF;
}

/**
 * Generates a beautiful, multi-page professional PDF for a given Ebook content structure.
 * This is a highly robust solution that sets margins, page numbers, covers, and handles accented characters nicely.
 * @param ebook The source ebook content structure
 * @param lang Either "fr" or "en"
 */
export async function generateEbookPdf(ebook: EbookContent, lang: "fr" | "en"): Promise<void> {
  const jsPDF = await loadJsPdf();
  // Create jsPDF instance (A4 size, portrait, pt units)
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 50;
  const contentWidth = pageWidth - margin * 2;

  // Helpers for text flow
  let currentY = margin;

  function addNewPage() {
    doc.addPage();
    currentY = margin;
    drawPageDecoration();
  }

  function drawPageDecoration() {
    // Accent line at the top
    doc.setDrawColor(16, 185, 129); // Emerald 500
    doc.setLineWidth(2);
    doc.line(margin, 35, pageWidth - margin, 35);

    // Footer decoration
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    const footerText = `Trend Pulse — ${ebook.title}`;
    const pageNumText = `${doc.getNumberOfPages()}`;
    doc.text(footerText, margin, pageHeight - 30);
    doc.text(pageNumText, pageWidth - margin - 20, pageHeight - 30);
  }

  // --- PAGE 1: COVER PAGE ---
  // Beautiful dark emerald backdrop for the cover
  doc.setFillColor(6, 78, 59); // Deep Emerald 900
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  // Cover Page Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255); // White
  
  // Wrap title for cover
  const coverTitleLines = doc.splitTextToSize(ebook.title, contentWidth - 40);
  doc.text(coverTitleLines, margin + 20, 200);

  // Divider
  doc.setDrawColor(245, 158, 11); // Amber 500
  doc.setLineWidth(3);
  doc.line(margin + 20, 310, pageWidth - margin - 20, 310);

  // Metadata
  doc.setFont("helvetica", "oblique");
  doc.setFontSize(14);
  doc.setTextColor(209, 250, 229); // Emerald 100
  doc.text(`${lang === "fr" ? "Auteur :" : "Author:"} ${ebook.author}`, margin + 20, 350);
  doc.text(`${lang === "fr" ? "Catégorie :" : "Category:"} ${ebook.category}`, margin + 20, 385);
  doc.text(`${lang === "fr" ? "Publié en :" : "Published:"} ${ebook.publicationDate}`, margin + 20, 420);

  // Decorative badge
  doc.setFillColor(4, 120, 87); // Emerald 700
  doc.rect(margin + 20, 480, 220, 40, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(253, 224, 71); // Amber 300
  doc.text("OFFICIAL CLINICAL MANUAL", margin + 35, 504);

  // Medical Disclaimer on cover bottom
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(167, 243, 208); // Emerald 200
  const coverDisclaimerLines = doc.splitTextToSize(ebook.medicalDisclaimer, contentWidth - 40);
  doc.text(coverDisclaimerLines, margin + 20, pageHeight - 90);


  // --- PAGES 2-4: CHAPTER CONTENT ---
  ebook.pages.forEach((page) => {
    addNewPage();
    
    // Page Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(6, 78, 59); // Deep Emerald
    doc.text(page.title, margin, currentY + 30);
    currentY += 50;

    // Page Subtitle
    doc.setFont("helvetica", "oblique");
    doc.setFontSize(11);
    doc.setTextColor(16, 185, 129); // Emerald 500
    doc.text(page.subtitle, margin, currentY);
    currentY += 25;

    // Divider under header
    doc.setDrawColor(229, 231, 235); // Light Gray
    doc.setLineWidth(1);
    doc.line(margin, currentY, pageWidth - margin, currentY);
    currentY += 25;

    // Paragraphs
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(55, 65, 81); // Slate 700
    
    page.paragraphs.forEach((pText) => {
      // Split paragraph text to fit nicely on A4 page margins
      const wrappedParagraphLines = doc.splitTextToSize(pText, contentWidth);
      
      // Calculate approximate paragraph height
      const pHeight = wrappedParagraphLines.length * 15;

      // If we are about to overflow the A4 page height, push to next page
      if (currentY + pHeight > pageHeight - 80) {
        addNewPage();
        currentY += 20;
      }

      doc.text(wrappedParagraphLines, margin, currentY);
      currentY += pHeight + 15;
    });

  });

  // Save the beautiful generated PDF
  const safeFilename = ebook.id + "_manual_2026.pdf";
  doc.save(safeFilename);
}
