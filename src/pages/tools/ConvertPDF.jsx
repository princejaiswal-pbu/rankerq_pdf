import Navbar from '../../components/layout/Navbar.jsx'
import Footer from '../../components/layout/Footer.jsx'
import Container from '../../components/layout/Container.jsx'
import UploadDropzone from '../../components/ui/UploadDropzone.jsx'
import usePdfProcessor from '../../hooks/usePdfProcessor.js'

export default function ConvertPDF() {
  const { process } = usePdfProcessor('convert')
  return (
    <>
      <Navbar />
      <Container>
        <div style={{ padding: '40px 0', maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Convert PDF</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Convert PDF to Word, Excel, JPG, PNG and more.</p>
          <div style={{ marginTop: '24px' }}><UploadDropzone onFiles={process} accept=".pdf,.docx,.jpg,.png" /></div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
