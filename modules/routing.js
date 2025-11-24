// modules/routing.js
// Custom routing module for the Secure PDF Server.
// Handles main pages, PDF list, PDF download, and 404s.

import express from 'express';
import { discoverPdfs } from './pdfDiscovery.js';
import { validatePdfById } from './pdfValidation.js';

export function createRouter() {
  const router = express.Router();

  // Home page
  router.get('/', (req, res) => {
    res.render('home', {
      title: 'Home',
    });
  });

  // List available PDFs with metadata
  router.get('/pdfs', (req, res) => {
    const pdfs = discoverPdfs();

    res.render('pdfList', {
      title: 'PDF Collection',
      pdfs,
    });
  });

  // Serve a single PDF file by id using sendFile()
  router.get('/pdfs/:id', (req, res, next) => {
    const { id } = req.params;
    const result = validatePdfById(id);

    if (!result) {
      return res.status(404).render('404', {
        title: 'PDF Not Found',
        message: 'The requested PDF could not be found.',
      });
    }

    const { pdfMeta, filePath } = result;

    res.sendFile(filePath, (err) => {
      if (err) {
        return next(err);
      }
      console.log(`Served PDF: ${pdfMeta.filename}`);
    });
  });

  // Catch-all 404 for any other route
  router.use((req, res) => {
    res.status(404).render('404', {
      title: 'Page Not Found',
      message: 'The page you are looking for does not exist.',
    });
  });

  return router;
}
