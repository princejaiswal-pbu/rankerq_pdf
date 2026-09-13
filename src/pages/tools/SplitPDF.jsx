import Navbar from '../../components/layout/Navbar.jsx'
import Footer from '../../components/layout/Footer.jsx'
import Container from '../../components/layout/Container.jsx'
import UploadDropzone from '../../components/ui/UploadDropzone.jsx'
import usePdfProcessor from '../../hooks/usePdfProcessor.js'

export default function SplitPDF() {
  const { process } = usePdfProcessor('split')
  return (
    <>
      <Navbar />
      <Container>
        <div style={{ padding: '40px 0', maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Split PDF</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Extract pages or split by range.</p>
          <div style={{ marginTop: '24px' }}><UploadDropzone onFiles={process} /></div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
