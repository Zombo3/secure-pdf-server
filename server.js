// server.js
// Main Express server for the Secure PDF Server assignment.
// Sets up view engine, static assets, and mounts the custom routing module.

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import { createRouter } from './modules/routing.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// -------------------------
// View engine (Handlebars)
// -------------------------
app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// -------------------------
// Static assets (CSS/JS/images)
// NOTE: We will NOT use this to serve PDFs.
// -------------------------
app.use('/static', express.static(path.join(__dirname, 'public')));

// -------------------------
// Routing (custom module)
// -------------------------
app.use('/', createRouter());

// -------------------------
// Error handler
// -------------------------
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('500', {
    title: 'Server Error',
    message: 'Something went wrong on the server.',
  });
});

// -------------------------
// Start server
// -------------------------
app.listen(PORT, () => {
  console.log(`Secure PDF server listening on http://localhost:${PORT}`);
});
