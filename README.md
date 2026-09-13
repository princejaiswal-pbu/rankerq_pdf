# PDF Website — Orange / White Theme

Vite + React PDF toolkit scaffold.

## Structure
```
pdf-website/
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── assets/icons/ (merge, split, compress, convert)
│   ├── components/layout/ (Navbar, Footer, Container)
│   ├── components/ui/ (Button, Card, UploadDropzone, ProgressBar)
│   ├── components/sections/ (Hero, ToolsGrid, HowItWorks, Testimonials, CTASection)
│   ├── pages/tools/ (MergePDF, SplitPDF, CompressPDF, ConvertPDF)
│   ├── hooks/ (useFileUpload, usePdfProcessor)
│   ├── lib/ (pdfUtils, api)
│   ├── context/ThemeContext
│   ├── router/routes
│   └── styles/ (tokens.css, globals.css)
```

## Get Started
```bash
npm install
npm run dev
```

- Tokens: see `src/styles/tokens.css` — orange/white palette, type scale, spacing
- PDF logic: `src/lib/pdfUtils.js` wraps pdf-lib (client-side, secure)
- Add tools in `src/pages/tools/` and register in `router/routes.jsx`

Built for fast, private, in-browser PDF processing.
