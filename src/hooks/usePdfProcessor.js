import { useState } from 'react'
import { mergePdfs, splitPdf, compressPdf, convertPdf } from '../lib/pdfUtils.js'

const processors = { merge: mergePdfs, split: splitPdf, compress: compressPdf, convert: convertPdf }

export default function usePdfProcessor(type) {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState(null)

  const process = async (files) => {
    if (!files?.length) return
    setLoading(true)
    setProgress(10)
    try {
      const fn = processors[type]
      const out = await fn(files, (p) => setProgress(p))
      setResult(out)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return { process, loading, progress, result }
}
