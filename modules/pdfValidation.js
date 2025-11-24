// modules/pdfValidation.js
// This module validates that a requested PDF exists and is safe to serve.

import fs from 'fs';
import path from 'path';
import { pdfDirectory, getPdfById } from './pdfDiscovery.js';

// Validate a PDF by its metadata id and return file info if valid
export function validatePdfById(id) {
  const pdfMeta = getPdfById(id);
  if (!pdfMeta) {
    return null;
  }

  // Build absolute file path
  const filePath = path.join(pdfDirectory, pdfMeta.filename);

  // Security check: make sure file is still inside the pdfDirectory
  if (!filePath.startsWith(pdfDirectory)) {
    return null;
  }

  // Check file exists on disk
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return { pdfMeta, filePath };
}
