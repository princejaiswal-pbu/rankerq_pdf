import { useState } from 'react'
import { saveAs } from 'file-saver'
import Container from '../../components/layout/Container.jsx'
import Card from '../../components/ui/Card.jsx'
import Button from '../../components/ui/Button.jsx'
import UploadDropzone from '../../components/ui/UploadDropzone.jsx'
import { compressPdf, formatBytes } from '../../lib/pdfUtils.js'
import './tool-page.css'

export default function CompressPDF() {
  const [file, setFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)
  const [resultSize, setResultSize] = useState(null)

  const handleFiles = (files) => {
    setError(null)
    setResultSize(null)
    setFile(files[0])
  }

  const handleCompress = async () => {
    if (!file) {
      setError('Add a PDF to compress first.')
      return
    }
    setError(null)
    setIsProcessing(true)
    try {
      const blob = await compressPdf(file)
      saveAs(blob, `${file.name.replace(/\.pdf$/i, '')}-compressed.pdf`)
      setResultSize(blob.size)
    } catch (err) {
      setError('Could not process this PDF. Make sure it is not password-protected.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Container className="tool-page">
      <div className="tool-page__header">
        <h1>Compress PDF</h1>
        <p>Rebuild the file to trim its size. Best on text-heavy PDFs; results vary with scanned images.</p>
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
                    setResultSize(null)
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
            {file && resultSize === null && 'Ready to compress.'}
            {resultSize !== null && `Done — new file is ${formatBytes(resultSize)} (was ${formatBytes(file.size)}).`}
          </p>
          {error && <p className="tool-panel__error">{error}</p>}
          <div className="tool-panel__actions">
            <Button onClick={handleCompress} disabled={isProcessing || !file}>
              {isProcessing ? 'Compressing…' : 'Compress & download'}
            </Button>
          </div>
        </Card>
      </div>
    </Container>
  )
}
