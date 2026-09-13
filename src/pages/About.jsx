import Container from '../components/layout/Container.jsx'
import './static-page.css'

export default function About() {
  return (
    <Container className="static-page">
      <h1>Why Pilo exists</h1>
      <p>
        Most PDF tools ask you to upload a file to a server before doing
        anything with it. For a boarding pass that's fine. For a contract,
        a payslip, or a scanned ID, it usually isn't.
      </p>
      <p>
        Pilo runs entirely in your browser. Merging, splitting, compressing
        and converting all happen on your device using open-source libraries
        — nothing is sent anywhere. Close the tab and it's like it never
        happened.
      </p>
      <p>
        We built it because we kept needing one of these tools for thirty
        seconds and didn't want to install an app or hand a file over to a
        stranger's server to do it.
      </p>
    </Container>
  )
}
