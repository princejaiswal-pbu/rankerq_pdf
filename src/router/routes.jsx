import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Pricing from '../pages/Pricing.jsx'
import NotFound from '../pages/NotFound.jsx'
import MergePDF from '../pages/tools/MergePDF.jsx'
import SplitPDF from '../pages/tools/SplitPDF.jsx'
import CompressPDF from '../pages/tools/CompressPDF.jsx'
import ConvertPDF from '../pages/tools/ConvertPDF.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/tools/merge" element={<MergePDF />} />
      <Route path="/tools/split" element={<SplitPDF />} />
      <Route path="/tools/compress" element={<CompressPDF />} />
      <Route path="/tools/convert" element={<ConvertPDF />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
