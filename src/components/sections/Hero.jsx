import Button from '../ui/Button.jsx'
import Container from '../layout/Container.jsx'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, var(--color-bg-muted) 0%, white 100%)' }}>
      <Container>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <span style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)', padding: '6px 12px', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600 }}>100% Free • No Signup</span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginTop: '20px' }}>
            Every tool you need to work with <span style={{ color: 'var(--color-primary)' }}>PDFs</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', marginTop: '16px' }}>
            Merge, split, compress, convert and edit PDFs. Fast, secure, and works right in your browser.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '28px' }}>
            <Link to="/tools/merge"><Button>Start Merging</Button></Link>
            <Link to="/pricing"><Button variant="secondary">View Pricing</Button></Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
