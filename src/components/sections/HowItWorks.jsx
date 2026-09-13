import Container from '../layout/Container.jsx'

export default function HowItWorks() {
  const steps = [
    { n: '01', t: 'Upload', d: 'Drag & drop your PDF files' },
    { n: '02', t: 'Process', d: 'Choose tool and configure options' },
    { n: '03', t: 'Download', d: 'Get your new PDF instantly' },
  ]
  return (
    <section style={{ padding: '60px 0', background: 'var(--color-bg-muted)' }}>
      <Container>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800 }}>How it works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '32px' }}>
          {steps.map(s => (
            <div key={s.n} style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto', fontWeight: 800 }}>{s.n}</div>
              <h4 style={{ marginTop: '12px', fontWeight: 700 }}>{s.t}</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
