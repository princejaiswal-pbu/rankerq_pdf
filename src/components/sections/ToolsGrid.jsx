import Card from '../ui/Card.jsx'
import { Link } from 'react-router-dom'

const tools = [
  { id: 'merge', title: 'Merge PDF', desc: 'Combine multiple PDFs into one', icon: '🔗', path: '/tools/merge' },
  { id: 'split', title: 'Split PDF', desc: 'Separate pages into new PDFs', icon: '✂️', path: '/tools/split' },
  { id: 'compress', title: 'Compress PDF', desc: 'Reduce file size without losing quality', icon: '📦', path: '/tools/compress' },
  { id: 'convert', title: 'Convert PDF', desc: 'PDF to Word, JPG, Excel & more', icon: '🔄', path: '/tools/convert' },
]

export default function ToolsGrid() {
  return (
    <section style={{ padding: '40px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {tools.map(t => (
          <Link key={t.id} to={t.path}>
            <Card style={{ ':hover': { borderColor: 'var(--color-primary)' } }}>
              <div style={{ fontSize: '1.75rem' }}>{t.icon}</div>
              <h3 style={{ marginTop: '12px', fontWeight: 700 }}>{t.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginTop: '6px' }}>{t.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
