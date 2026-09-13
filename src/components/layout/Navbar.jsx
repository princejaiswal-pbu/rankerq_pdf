import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container.jsx'
import Button from '../ui/Button.jsx'
import './navbar.css'

const TOOL_LINKS = [
  { to: '/tools/merge', label: 'Merge' },
  { to: '/tools/split', label: 'Split' },
  { to: '/tools/compress', label: 'Compress' },
  { to: '/tools/convert', label: 'Convert' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <Container className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-mark">Pilo</span>
        </Link>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {TOOL_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/pricing" className="navbar__link" onClick={() => setOpen(false)}>
            Pricing
          </NavLink>
          <NavLink to="/about" className="navbar__link" onClick={() => setOpen(false)}>
            About
          </NavLink>
        </nav>

        <div className="navbar__cta">
          <Button as={Link} to="/tools/merge" size="sm">
            Open a tool
          </Button>
        </div>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </Container>
    </header>
  )
}
