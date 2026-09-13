import { useCallback, useState } from 'react'

/**
 * Small helper hook for managing a list of selected files
 * (adding, removing, reordering, clearing).
 */
export function useFileUpload() {
  const [files, setFiles] = useState([])

  const addFiles = useCallback((newFiles) => {
    setFiles((prev) => [...prev, ...newFiles])
  }, [])

  const removeFile = useCallback((index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const moveFile = useCallback((from, to) => {
    setFiles((prev) => {
      const next = [...prev]
      const [moved] = next.splice(from, 1)
      next.splice(to, 0, moved)
      return next
    })
  }, [])

  const clearFiles = useCallback(() => setFiles([]), [])

  return { files, addFiles, removeFile, moveFile, clearFiles }
}
