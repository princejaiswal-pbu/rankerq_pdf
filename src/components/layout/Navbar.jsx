import { Link, NavLink } from 'react-router-dom'
import Container from './Container.jsx'

export default function Navbar() {
  return (
    <header style={{ borderBottom: '1px solid var(--color-border)', background: 'white', position: 'sticky', top: 0, zIndex: 50 }}>
      <Container>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1.25rem' }}>
            <span style={{ background: 'var(--color-primary)', color: 'white', padding: '4px 8px', borderRadius: '8px' }}>PDF</span>
            <span>Tools</span>
          </Link>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <NavLink to="/tools/merge">Merge</NavLink>
            <NavLink to="/tools/split">Split</NavLink>
            <NavLink to="/tools/compress">Compress</NavLink>
            <NavLink to="/tools/convert">Convert</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <Link to="/tools/merge" className="btn-primary">Get Started</Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
