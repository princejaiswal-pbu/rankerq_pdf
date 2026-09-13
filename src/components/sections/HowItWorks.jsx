import Container from '../layout/Container.jsx'
import './how-it-works.css'

const STEPS = [
  { title: 'Choose a tool', desc: 'Merge, split, compress or convert — pick the one you need.' },
  { title: 'Drop your files', desc: 'Drag them in or browse. Everything happens in this browser tab.' },
  { title: 'Download the result', desc: 'Your new file is ready in seconds — nothing was ever uploaded.' },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <Container>
        <div className="section-heading">
          <h2>How it works</h2>
        </div>
        <ol className="steps">
          {STEPS.map((step, i) => (
            <li key={step.title} className="step">
              <span className="step__index">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
