import Hero from '../components/sections/Hero.jsx'
import ToolsGrid from '../components/sections/ToolsGrid.jsx'
import HowItWorks from '../components/sections/HowItWorks.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import CTASection from '../components/sections/CTASection.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import Container from '../components/layout/Container.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container>
        <ToolsGrid />
        <Testimonials />
        <CTASection />
      </Container>
      <HowItWorks />
      <Footer />
    </>
  )
}
