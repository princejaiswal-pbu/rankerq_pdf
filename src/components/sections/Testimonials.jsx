import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import './testimonials.css'

const QUOTES = [
  {
    quote: 'I stopped emailing myself PDF fragments. Split, done, downloaded.',
    name: 'Priya N.',
    role: 'Paralegal',
  },
  {
    quote: 'Compressing scanned contracts used to mean a whole other app. Not anymore.',
    name: 'Daniel O.',
    role: 'Operations lead',
  },
  {
    quote: 'The fact it never uploads anywhere is the whole pitch for our team.',
    name: 'Mei T.',
    role: 'IT admin',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <Container>
        <div className="section-heading">
          <h2>People who'd rather not upload their contracts</h2>
        </div>
        <div className="testimonials__grid">
          {QUOTES.map((t) => (
            <Card key={t.name} className="testimonial-card">
              <p className="testimonial-card__quote">“{t.quote}”</p>
              <p className="testimonial-card__meta">{t.name} — {t.role}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
