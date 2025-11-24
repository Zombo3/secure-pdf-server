# Secure PDF Server – Graffiti PDF Library
COS 498 – Assignment 3: Custom Module Development  
University of Maine

Author
Sany Dagher
COS 498 – Fall 2025

The server will run at:
http://localhost:5000

This project is a secure PDF server built with **Node.js** and **Express**, using custom modules to handle routing, PDF discovery, and PDF validation. The website presents a front-facing interface themed around graffiti culture and securely serves PDF documents related to that topic.

Live Site: **https://pdf.zombo3.store**

---

## Features

- Front-facing website with a neon graffiti theme
- Displays a list of available PDFs with titles and descriptions
- Secure PDF delivery using `res.sendFile()` (no static file serving)
- Custom modules:
  - Routing
  - PDF discovery
  - PDF validation
- Metadata stored in a JSON file
- HTTPS enabled through Nginx Proxy Manager + Let’s Encrypt
- Domain name setup with subdomain handling

---

## Project Structure

secure-pdf-server/
├── data/
│   └── pdfMetadata.json
├── modules/
│   ├── pdfDiscovery.js
│   ├── pdfValidation.js
│   └── routing.js
├── pdfs/
│   ├── intro-graffiti.pdf
│   ├── spray-techniques.pdf
│   └── legal-walls.pdf
├── public/
│   └── css/
│       └── styles.css
├── views/
│   ├── layouts/
│   │   └── main.hbs
│   ├── home.hbs
│   ├── pdfList.hbs
│   ├── 404.hbs
│   └── 500.hbs
├── server.js
├── package.json
└── package-lock.json

PDF Metadata
Metadata is stored in data/pdfMetadata.json:

[
  {
    "id": "intro-to-graffiti",
    "filename": "intro-graffiti.pdf",
    "title": "Intro to Graffiti Culture",
    "description": "A beginner-friendly guide to graffiti history and styles."
  }
]

Each PDF entry includes:
- id – used in URL routing
- filename – file stored in the pdfs/ directory
- title – displayed on the website
- description – displayed on the website

Domain & HTTPS
Domain used for this project:
- pdf.zombo3.store
Configured using Nginx Proxy Manager:
- Reverse proxy to: http://127.0.0.1:5000
- SSL certificate: Let’s Encrypt
- Force HTTPS enabled
- Also supports www.pdf.zombo3.store

