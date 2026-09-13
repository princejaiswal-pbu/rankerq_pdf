import Container from './Container.jsx'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg-muted)', borderTop: '1px solid var(--color-border)', padding: '40px 0', marginTop: '80px' }}>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <strong>PDF Tools</strong>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '8px', maxWidth: '320px' }}>All-in-one PDF toolkit. Merge, split, compress and convert PDFs securely in your browser.</p>
          </div>
          <div style={{ display: 'flex', gap: '48px' }}>
            <div><strong>Tools</strong><br/><span style={{ color: 'var(--color-text-muted)' }}>Merge<br/>Split<br/>Compress<br/>Convert</span></div>
            <div><strong>Company</strong><br/><span style={{ color: 'var(--color-text-muted)' }}>About<br/>Pricing<br/>Contact</span></div>
          </div>
        </div>
        <p style={{ marginTop: '24px', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>© 2026 PDF Tools. Built with orange & white.</p>
      </Container>
    </footer>
  )
}
