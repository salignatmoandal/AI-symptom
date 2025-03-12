import PDFDocument from 'pdfkit';
import { Symptom } from '@prisma/client';

export const generateSymptomPdf = async (check: Symptom | null) => {
  // Create a new PDFDocument
  const doc = new PDFDocument({ bufferPages: true });
  const buffers: Uint8Array[] = [];

  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => { /* no-op */ });

  // PDF Title Page
  doc.fontSize(20).text('AI Symptom Checker Report', { underline: true });
  doc.moveDown();

  // If there's a check record
  if (check) {
    doc.fontSize(14).text(`Symptom Record ID: ${check.id}`, { continued: true });
    doc.moveDown();
    doc.text(`Symptoms: ${check.symptoms}`);
    doc.moveDown();
    doc.text(`Possible Conditions: ${check.result}`);
    doc.moveDown();
    doc.text(`Created At: ${check.createdAt.toISOString()}`);
  } else {
    doc.text('No Symptom Check data found.');
  }

  doc.end();

  // Wait for doc to finish
  return new Promise<Buffer>((resolve) => {
    doc.on('end', () => {
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });
  });
};