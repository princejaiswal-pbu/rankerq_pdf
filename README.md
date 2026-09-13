# Pilo — PDF tools website

A React (Vite) website for merging, splitting, compressing and converting
PDFs entirely in the browser. Orange & white visual theme.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 18 + React Router
- Vite
- pdf-lib (PDF read/write in the browser)
- jszip + file-saver (packaging and downloading results)

## Structure

See `src/` — pages live in `src/pages`, reusable UI in `src/components/ui`,
page sections in `src/components/sections`, and the PDF logic in
`src/lib/pdfUtils.js`.

## Notes

- All processing happens client-side; no file is ever uploaded to a server.
- Compress is a best-effort re-save (object streams); it will not shrink
  PDFs whose size is mostly large embedded images as much as a
  server-side raster-recompression pipeline would.
