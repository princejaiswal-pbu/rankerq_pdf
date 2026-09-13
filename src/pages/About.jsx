import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Container from '../components/layout/Container.jsx'

export default function About() {
  return (
    <>
      <Navbar />
      <Container>
        <div style={{ padding: '60px 0', maxWidth: '720px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>About PDF Tools</h1>
          <p style={{ marginTop: '16px', color: 'var(--color-text-muted)' }}>We build fast, private, browser-first PDF tools. No files ever leave your device. Built with pdf-lib and pdf.js.</p>
        </div>
      </Container>
      <Footer />
    </>
  )
}
