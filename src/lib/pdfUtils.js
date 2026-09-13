import { PDFDocument } from 'pdf-lib'

/**
 * Merge multiple PDF files (in the given order) into a single PDF.
 * @param {File[]} files
 * @returns {Promise<Blob>}
 */
export async function mergePdfs(files) {
  const mergedPdf = await PDFDocument.create()

  for (const file of files) {
    const bytes = await file.arrayBuffer()
    const donorPdf = await PDFDocument.load(bytes)
    const pages = await mergedPdf.copyPages(donorPdf, donorPdf.getPageIndices())
    pages.forEach((page) => mergedPdf.addPage(page))
  }

  const mergedBytes = await mergedPdf.save()
  return new Blob([mergedBytes], { type: 'application/pdf' })
}

/**
 * Split a PDF into one single-page PDF per page.
 * @param {File} file
 * @returns {Promise<{ name: string, blob: Blob }[]>}
 */
export async function splitPdf(file) {
  const bytes = await file.arrayBuffer()
  const sourcePdf = await PDFDocument.load(bytes)
  const pageCount = sourcePdf.getPageCount()
  const baseName = file.name.replace(/\.pdf$/i, '')

  const results = []
  for (let i = 0; i < pageCount; i++) {
    const newPdf = await PDFDocument.create()
    const [page] = await newPdf.copyPages(sourcePdf, [i])
    newPdf.addPage(page)
    const pdfBytes = await newPdf.save()
    results.push({
      name: `${baseName}-page-${i + 1}.pdf`,
      blob: new Blob([pdfBytes], { type: 'application/pdf' }),
    })
  }
  return results
}

/**
 * Best-effort compression: re-saves the PDF with object streams enabled,
 * which reduces size for PDFs with a lot of repeated structure.
 * True image recompression requires a heavier pipeline and is out of scope here.
 * @param {File} file
 * @returns {Promise<Blob>}
 */
export async function compressPdf(file) {
  const bytes = await file.arrayBuffer()
  const pdf = await PDFDocument.load(bytes, { updateMetadata: false })
  const compressedBytes = await pdf.save({ useObjectStreams: true })
  return new Blob([compressedBytes], { type: 'application/pdf' })
}

/**
 * Convert a set of images (png/jpg) into a single PDF, one image per page.
 * @param {File[]} imageFiles
 * @returns {Promise<Blob>}
 */
export async function imagesToPdf(imageFiles) {
  const pdf = await PDFDocument.create()

  for (const file of imageFiles) {
    const bytes = await file.arrayBuffer()
    const isPng = file.type === 'image/png'
    const image = isPng ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes)
    const page = pdf.addPage([image.width, image.height])
    page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height })
  }

  const pdfBytes = await pdf.save()
  return new Blob([pdfBytes], { type: 'application/pdf' })
}

export function formatBytes(bytes) {
  if (bytes === 0) return '0 B'
  const units = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`
}
