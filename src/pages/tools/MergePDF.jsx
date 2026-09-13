import { useState } from 'react'
import { saveAs } from 'file-saver'
import Container from '../../components/layout/Container.jsx'
import Card from '../../components/ui/Card.jsx'
import Button from '../../components/ui/Button.jsx'
import UploadDropzone from '../../components/ui/UploadDropzone.jsx'
import { useFileUpload } from '../../hooks/useFileUpload.js'
import { mergePdfs, formatBytes } from '../../lib/pdfUtils.js'
import './tool-page.css'

export default function MergePDF() {
  const { files, addFiles, removeFile, moveFile, clearFiles } = useFileUpload()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)

  const handleMerge = async () => {
    setError(null)
    if (files.length < 2) {
      setError('Add at least two PDFs to merge.')
      return
    }
    setIsProcessing(true)
    try {
      const blob = await mergePdfs(files)
      saveAs(blob, 'merged.pdf')
    } catch (err) {
      setError('Something went wrong reading one of these PDFs. Try a different file.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Container className="tool-page">
      <div className="tool-page__header">
        <h1>Merge PDF</h1>
        <p>Combine multiple PDFs into one file, in the order you set below.</p>
      </div>

      <div className="tool-page__layout">
        <div>
          <UploadDropzone
            onFiles={addFiles}
            label="Drag PDFs here, or click to browse"
            hint="Add two or more files to merge them in order."
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
                  {index > 0 && (
                    <button
                      type="button"
                      className="file-row__remove"
                      aria-label={`Move ${file.name} up`}
                      onClick={() => moveFile(index, index - 1)}
                    >
                      ↑
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Card className="tool-panel">
          <p className="tool-panel__status">
            {files.length === 0 && 'No files added yet.'}
            {files.length === 1 && '1 file added — add one more to merge.'}
            {files.length > 1 && `${files.length} files ready to merge.`}
          </p>
          {error && <p className="tool-panel__error">{error}</p>}
          <div className="tool-panel__actions">
            <Button onClick={handleMerge} disabled={isProcessing || files.length < 2}>
              {isProcessing ? 'Merging…' : 'Merge & download'}
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
