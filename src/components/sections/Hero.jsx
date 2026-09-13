import { Link } from 'react-router-dom'
import Container from '../layout/Container.jsx'
import Button from '../ui/Button.jsx'
import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <Container className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            Your PDFs, handled
            <br />
            without leaving the tab.
          </h1>
          <p className="hero__subtitle">
            Merge, split, compress and convert — every tool runs locally in your
            browser. No uploads, no waiting on a server, no account required.
          </p>
          <div className="hero__actions">
            <Button as={Link} to="/tools/merge" size="lg">
              Merge two PDFs now
            </Button>
            <Button as={Link} to="/tools/convert" variant="secondary" size="lg">
              Convert images to PDF
            </Button>
          </div>
          <p className="hero__note">No sign-up. No file size games. Free for files under 50&nbsp;MB.</p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__stack">
            <div className="hero__page hero__page--back" />
            <div className="hero__page hero__page--mid" />
            <div className="hero__page hero__page--front">
              <div className="hero__page-line" style={{ width: '70%' }} />
              <div className="hero__page-line" style={{ width: '92%' }} />
              <div className="hero__page-line" style={{ width: '55%' }} />
              <div className="hero__page-chip">PDF</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
