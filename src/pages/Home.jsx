import Hero from '../components/sections/Hero.jsx'
import ToolsGrid from '../components/sections/ToolsGrid.jsx'
import HowItWorks from '../components/sections/HowItWorks.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import CTASection from '../components/sections/CTASection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsGrid />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  )
}
