import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: '4rem', fontWeight: 800 }}>404</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Page not found</p>
        <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: 600, marginTop: '12px', display: 'inline-block' }}>Go Home</Link>
      </div>
    </div>
  )
}
