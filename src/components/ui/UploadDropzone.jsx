import { useCallback } from 'react'
import useFileUpload from '../../hooks/useFileUpload.js'

export default function UploadDropzone({ onFiles, accept = '.pdf' }) {
  const { files, isDragging, handleDrop, handleDragOver, handleDragLeave, handleInputChange } = useFileUpload(onFiles)

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{
        border: `2px dashed ${isDragging ? 'var(--color-primary)' : 'var(--color-border)'}`,
        background: isDragging ? 'var(--color-primary-light)' : 'var(--color-bg-muted)',
        borderRadius: 'var(--radius-xl)',
        padding: '48px',
        textAlign: 'center',
        cursor: 'pointer'
      }}
    >
      <input type="file" accept={accept} multiple onChange={handleInputChange} style={{ display: 'none' }} id="file-input" />
      <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
        <div style={{ fontSize: '2rem' }}>📄</div>
        <p style={{ fontWeight: 600, marginTop: '12px' }}>Drop PDF files here or click to browse</p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginTop: '4px' }}>Secure, client-side processing</p>
      </label>
      {files.length > 0 && <p style={{ marginTop: '12px', color: 'var(--color-primary)' }}>{files.length} file(s) selected</p>}
    </div>
  )
}
