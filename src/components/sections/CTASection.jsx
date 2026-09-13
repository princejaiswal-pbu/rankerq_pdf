import Button from '../ui/Button.jsx'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section style={{ background: 'var(--color-primary)', color: 'white', borderRadius: '24px', padding: '48px', textAlign: 'center', margin: '60px 0' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Ready to supercharge your PDFs?</h2>
      <p style={{ opacity: 0.9, marginTop: '8px' }}>All tools are free, secure and run in your browser.</p>
      <Link to="/tools/merge" style={{ display: 'inline-block', marginTop: '20px' }}>
        <Button style={{ background: 'white', color: 'var(--color-primary)' }}>Get Started for Free</Button>
      </Link>
    </section>
  )
}
