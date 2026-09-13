import { Link } from 'react-router-dom'
import Container from '../layout/Container.jsx'
import Button from '../ui/Button.jsx'
import './cta-section.css'

export default function CTASection() {
  return (
    <section className="cta">
      <Container className="cta__inner">
        <h2>Pick a tool and try it on your next file.</h2>
        <p>No account, no watermark, no file leaving your device.</p>
        <Button as={Link} to="/tools/merge" size="lg">
          Get started free
        </Button>
      </Container>
    </section>
  )
}
