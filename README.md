# Secure PDF Server – Graffiti PDF Library
COS 498 – Assignment 3: Custom Module Development  
University of Maine

Author
Sany Dagher
COS 498 – Fall 2025

## Quick Start

Clone the repository:
```bash
git clone https://github.com/Zombo3/secure-pdf-server.git
cd secure-pdf-server

Install dependencies:
npm install

Start the server:
npm start

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
