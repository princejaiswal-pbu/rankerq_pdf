import { useCallback, useRef, useState } from 'react'
import './upload-dropzone.css'

export default function UploadDropzone({
  onFiles,
  accept = 'application/pdf',
  multiple = true,
  label = 'Drag PDFs here, or click to browse',
  hint = 'Your files never leave this browser.',
}) {
  const inputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFiles = useCallback(
    (fileList) => {
      const files = Array.from(fileList || [])
      if (files.length) onFiles(files)
    },
    [onFiles]
  )

  const onDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    handleFiles(e.dataTransfer.files)
  }

  return (
    <div
      className={`dropzone ${isDragging ? 'is-dragging' : ''}`}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click()
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />
      <div className="dropzone__icon" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="7" y="4" width="26" height="32" rx="3" fill="#FFE8D6" />
          <path d="M13 22h14M13 27h10" stroke="#E8590C" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 10v8m0 0-4-4m4 4 4-4" stroke="#E8590C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="dropzone__label">{label}</p>
      <p className="dropzone__hint">{hint}</p>
    </div>
  )
}
