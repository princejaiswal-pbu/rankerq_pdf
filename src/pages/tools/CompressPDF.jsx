import Navbar from '../../components/layout/Navbar.jsx'
import Footer from '../../components/layout/Footer.jsx'
import Container from '../../components/layout/Container.jsx'
import UploadDropzone from '../../components/ui/UploadDropzone.jsx'
import usePdfProcessor from '../../hooks/usePdfProcessor.js'

export default function CompressPDF() {
  const { process } = usePdfProcessor('compress')
  return (
    <>
      <Navbar />
      <Container>
        <div style={{ padding: '40px 0', maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Compress PDF</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Reduce PDF size while keeping quality.</p>
          <div style={{ marginTop: '24px' }}><UploadDropzone onFiles={process} /></div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
