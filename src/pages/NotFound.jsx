import { Link } from 'react-router-dom'
import Container from '../components/layout/Container.jsx'
import Button from '../components/ui/Button.jsx'
import './static-page.css'

export default function NotFound() {
  return (
    <Container className="static-page">
      <h1>That page doesn't exist.</h1>
      <p>The link might be old, or the page may have moved.</p>
      <Button as={Link} to="/" size="md" style={{ alignSelf: 'flex-start' }}>
        Back to home
      </Button>
    </Container>
  )
}
