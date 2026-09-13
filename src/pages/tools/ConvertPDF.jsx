import { useState } from 'react'
import { saveAs } from 'file-saver'
import Container from '../../components/layout/Container.jsx'
import Card from '../../components/ui/Card.jsx'
import Button from '../../components/ui/Button.jsx'
import UploadDropzone from '../../components/ui/UploadDropzone.jsx'
import { useFileUpload } from '../../hooks/useFileUpload.js'
import { imagesToPdf, formatBytes } from '../../lib/pdfUtils.js'
import './tool-page.css'

export default function ConvertPDF() {
  const { files, addFiles, removeFile, clearFiles } = useFileUpload()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)

  const handleConvert = async () => {
    setError(null)
    if (files.length === 0) {
      setError('Add at least one image (PNG or JPG).')
      return
    }
    setIsProcessing(true)
    try {
      const blob = await imagesToPdf(files)
      saveAs(blob, 'converted.pdf')
    } catch (err) {
      setError('Could not read one of these images. Use PNG or JPG files.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Container className="tool-page">
      <div className="tool-page__header">
        <h1>Convert to PDF</h1>
        <p>Turn a batch of PNG or JPG images into one ordered PDF, one image per page.</p>
      </div>

      <div className="tool-page__layout">
        <div>
          <UploadDropzone
            onFiles={addFiles}
            accept="image/png,image/jpeg"
            label="Drag images here, or click to browse"
            hint="PNG or JPG. Pages follow the order you add them."
          />

          {files.length > 0 && (
            <ul className="file-list">
              {files.map((file, index) => (
                <li key={`${file.name}-${index}`} className="file-row">
                  <span className="file-row__name">{index + 1}. {file.name}</span>
                  <span className="file-row__size">{formatBytes(file.size)}</span>
                  <button
                    type="button"
                    className="file-row__remove"
                    aria-label={`Remove ${file.name}`}
                    onClick={() => removeFile(index)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Card className="tool-panel">
          <p className="tool-panel__status">
            {files.length === 0 && 'No images added yet.'}
            {files.length > 0 && `${files.length} image${files.length > 1 ? 's' : ''} ready to convert.`}
          </p>
          {error && <p className="tool-panel__error">{error}</p>}
          <div className="tool-panel__actions">
            <Button onClick={handleConvert} disabled={isProcessing || files.length === 0}>
              {isProcessing ? 'Converting…' : 'Convert & download'}
            </Button>
            {files.length > 0 && (
              <Button variant="ghost" onClick={clearFiles} disabled={isProcessing}>
                Clear
              </Button>
            )}
          </div>
        </Card>
      </div>
    </Container>
  )
}
