import { PDFDocument } from 'pdf-lib'

// Wrapper examples — replace with real logic
export async function mergePdfs(files, onProgress) {
  const merged = await PDFDocument.create()
  for (let i = 0; i < files.length; i++) {
    const bytes = await files[i].arrayBuffer()
    const pdf = await PDFDocument.load(bytes)
    const pages = await merged.copyPages(pdf, pdf.getPageIndices())
    pages.forEach(p => merged.addPage(p))
    onProgress?.(Math.round(((i + 1) / files.length) * 90))
  }
  const out = await merged.save()
  return new Blob([out], { type: 'application/pdf' })
}

export async function splitPdf(files, onProgress) {
  onProgress?.(50)
  // Example: return first doc split placeholder
  return files
}

export async function compressPdf(files, onProgress) {
  onProgress?.(60)
  // TODO: implement compression via pdf-lib optimization or server API
  return files[0]
}

export async function convertPdf(files, onProgress) {
  onProgress?.(60)
  // TODO: integrate with pdf.js / mammoth / etc.
  return files[0]
}
