import { Link } from 'react-router-dom'
import Container from '../layout/Container.jsx'
import './tools-grid.css'

const TOOLS = [
  {
    to: '/tools/merge',
    title: 'Merge PDF',
    desc: 'Combine multiple PDFs into a single file, in the order you choose.',
  },
  {
    to: '/tools/split',
    title: 'Split PDF',
    desc: 'Pull pages out into their own files, or break one PDF into several.',
  },
  {
    to: '/tools/compress',
    title: 'Compress PDF',
    desc: 'Shrink a PDF for email or upload limits without losing legibility.',
  },
  {
    to: '/tools/convert',
    title: 'Convert to PDF',
    desc: 'Turn a batch of images into one clean, ordered PDF document.',
  },
]

export default function ToolsGrid() {
  return (
    <section className="tools-grid-section">
      <Container>
        <div className="section-heading">
          <h2>Four tools, one tab.</h2>
          <p>Pick a task — the file picker does the rest.</p>
        </div>

        <div className="tools-grid">
          {TOOLS.map((tool) => (
            <Link key={tool.to} to={tool.to} className="tool-card">
              <span className="tool-card__title">{tool.title}</span>
              <span className="tool-card__desc">{tool.desc}</span>
              <span className="tool-card__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
