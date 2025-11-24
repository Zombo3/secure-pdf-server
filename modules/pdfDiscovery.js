// modules/pdfDiscovery.js
// This module discovers available PDFs and returns metadata for them.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Folder where PDF files are stored
export const pdfDirectory = path.join(__dirname, '..', 'pdfs');

// Path to metadata JSON file
const metadataPath = path.join(__dirname, '..', 'data', 'pdfMetadata.json');

let cachedList = null;

// Load metadata from JSON file
export function loadPdfMetadata() {
  const raw = fs.readFileSync(metadataPath, 'utf-8');
  return JSON.parse(raw);
}

// Discover PDFs that both exist on disk and have metadata
export function discoverPdfs({ useCache = true } = {}) {
  if (useCache && cachedList) {
    return cachedList;
  }

  // Get list of actual PDF files in the folder
  const filesOnDisk = new Set(
    fs.readdirSync(pdfDirectory).filter((f) => f.toLowerCase().endsWith('.pdf'))
  );

  const metadata = loadPdfMetadata();

  // Only keep entries that have an existing file
  const list = metadata.filter((item) => filesOnDisk.has(item.filename));

  cachedList = list;
  return list;
}

// Helper to find a single PDF by id
export function getPdfById(id) {
  const list = discoverPdfs();
  return list.find((item) => item.id === id) || null;
}
