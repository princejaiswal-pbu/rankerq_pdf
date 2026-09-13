import { Link } from 'react-router-dom'
import Container from '../components/layout/Container.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import './pricing.css'

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Everything most people need.',
    features: ['Merge, split, compress, convert', 'Files up to 50 MB', 'Unlimited uses', 'No account required'],
    cta: 'Start free',
    to: '/tools/merge',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$6/mo',
    desc: 'For heavier, larger-batch work.',
    features: ['Everything in Free', 'Files up to 500 MB', 'Batch processing', 'Priority support'],
    cta: 'Start Pro',
    to: '/tools/merge',
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <Container className="pricing-page">
      <div className="section-heading">
        <h1>Simple pricing</h1>
        <p>Every tool works without an account. Pro just raises the ceiling.</p>
      </div>

      <div className="pricing-grid">
        {PLANS.map((plan) => (
          <Card key={plan.name} className={`pricing-card ${plan.highlighted ? 'is-highlighted' : ''}`}>
            <h2>{plan.name}</h2>
            <p className="pricing-card__price">{plan.price}</p>
            <p className="pricing-card__desc">{plan.desc}</p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Button as={Link} to={plan.to} variant={plan.highlighted ? 'primary' : 'secondary'}>
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>
    </Container>
  )
}
