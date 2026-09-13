import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Container from '../components/layout/Container.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'

export default function Pricing() {
  return (
    <>
      <Navbar />
      <Container>
        <div style={{ padding: '60px 0' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center' }}>Simple Pricing</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '32px' }}>
            <Card><h3>Free</h3><p style={{ fontSize: '2rem', fontWeight: 800 }}>$0</p><p>Basic tools, 2 files at a time</p><Button variant="secondary" style={{ marginTop: '16px' }}>Current Plan</Button></Card>
            <Card style={{ borderColor: 'var(--color-primary)', borderWidth: '2px' }}><h3>Pro</h3><p style={{ fontSize: '2rem', fontWeight: 800 }}>$9/mo</p><p>Unlimited merges, batch compress</p><Button style={{ marginTop: '16px' }}>Upgrade to Pro</Button></Card>
            <Card><h3>Business</h3><p style={{ fontSize: '2rem', fontWeight: 800 }}>$29/mo</p><p>Team seats, API access</p><Button variant="secondary" style={{ marginTop: '16px' }}>Contact Sales</Button></Card>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
