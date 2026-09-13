import { useState } from 'react'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import Container from '../../components/layout/Container.jsx'
import Card from '../../components/ui/Card.jsx'
import Button from '../../components/ui/Button.jsx'
import UploadDropzone from '../../components/ui/UploadDropzone.jsx'
import { splitPdf, formatBytes } from '../../lib/pdfUtils.js'
import './tool-page.css'

export default function SplitPDF() {
  const [file, setFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)
  const [resultCount, setResultCount] = useState(0)

  const handleFiles = (files) => {
    setError(null)
    setResultCount(0)
    setFile(files[0])
  }

  const handleSplit = async () => {
    if (!file) {
      setError('Add a PDF to split first.')
      return
    }
    setError(null)
    setIsProcessing(true)
    try {
      const pages = await splitPdf(file)
      const zip = new JSZip()
      pages.forEach((page) => zip.file(page.name, page.blob))
      const zipBlob = await zip.generateAsync({ type: 'blob' })
      saveAs(zipBlob, `${file.name.replace(/\.pdf$/i, '')}-pages.zip`)
      setResultCount(pages.length)
    } catch (err) {
      setError('Could not read this PDF. Make sure it is not password-protected.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Container className="tool-page">
      <div className="tool-page__header">
        <h1>Split PDF</h1>
        <p>Break one PDF into a separate file per page, delivered as a zip.</p>
      </div>

      <div className="tool-page__layout">
        <div>
          <UploadDropzone
            onFiles={handleFiles}
            multiple={false}
            label="Drag a PDF here, or click to browse"
            hint="One file at a time."
          />

          {file && (
            <ul className="file-list">
              <li className="file-row">
                <span className="file-row__name">{file.name}</span>
                <span className="file-row__size">{formatBytes(file.size)}</span>
                <button
                  type="button"
                  className="file-row__remove"
                  aria-label="Remove file"
                  onClick={() => {
                    setFile(null)
                    setResultCount(0)
                  }}
                >
                  ✕
                </button>
              </li>
            </ul>
          )}
        </div>

        <Card className="tool-panel">
          <p className="tool-panel__status">
            {!file && 'No file added yet.'}
            {file && resultCount === 0 && 'Ready to split.'}
            {resultCount > 0 && `Split into ${resultCount} pages and downloaded.`}
          </p>
          {error && <p className="tool-panel__error">{error}</p>}
          <div className="tool-panel__actions">
            <Button onClick={handleSplit} disabled={isProcessing || !file}>
              {isProcessing ? 'Splitting…' : 'Split & download zip'}
            </Button>
          </div>
        </Card>
      </div>
    </Container>
  )
}
