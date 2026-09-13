import { Link } from 'react-router-dom'
import Container from './Container.jsx'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Pilo</span>
          <p className="footer__tagline">
            PDF tools that run in your browser. Files never touch a server.
          </p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h3>Tools</h3>
            <Link to="/tools/merge">Merge PDF</Link>
            <Link to="/tools/split">Split PDF</Link>
            <Link to="/tools/compress">Compress PDF</Link>
            <Link to="/tools/convert">Convert to PDF</Link>
          </div>
          <div className="footer__col">
            <h3>Company</h3>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
        </div>
      </Container>

      <Container>
        <p className="footer__legal">© {new Date().getFullYear()} Pilo. All processing happens locally on your device.</p>
      </Container>
    </footer>
  )
}
