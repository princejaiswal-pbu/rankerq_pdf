import { useState } from 'react'

export default function useFileUpload(onFiles) {
  const [files, setFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)

  const handleFiles = (fileList) => {
    const arr = Array.from(fileList)
    setFiles(arr)
    onFiles?.(arr)
  }

  return {
    files,
    isDragging,
    handleDrop: (e) => {
      e.preventDefault()
      setIsDragging(false)
      handleFiles(e.dataTransfer.files)
    },
    handleDragOver: (e) => { e.preventDefault(); setIsDragging(true) },
    handleDragLeave: () => setIsDragging(false),
    handleInputChange: (e) => handleFiles(e.target.files)
  }
}
