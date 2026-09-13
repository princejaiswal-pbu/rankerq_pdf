import Navbar from '../../components/layout/Navbar.jsx'
import Footer from '../../components/layout/Footer.jsx'
import Container from '../../components/layout/Container.jsx'
import UploadDropzone from '../../components/ui/UploadDropzone.jsx'
import Button from '../../components/ui/Button.jsx'
import usePdfProcessor from '../../hooks/usePdfProcessor.js'

export default function MergePDF() {
  const { process, loading, progress, result } = usePdfProcessor('merge')
  return (
    <>
      <Navbar />
      <Container>
        <div style={{ padding: '40px 0', maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Merge PDF</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Combine multiple PDFs into a single document.</p>
          <div style={{ marginTop: '24px' }}>
            <UploadDropzone onFiles={process} />
          </div>
          {loading && <p style={{ marginTop: '16px' }}>Merging... {progress}%</p>}
          {result && <div style={{ marginTop: '16px' }}><Button>Download Merged PDF</Button></div>}
        </div>
      </Container>
      <Footer />
    </>
  )
}
