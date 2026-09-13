import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import MergePDF from '../pages/tools/MergePDF.jsx'
import SplitPDF from '../pages/tools/SplitPDF.jsx'
import CompressPDF from '../pages/tools/CompressPDF.jsx'
import ConvertPDF from '../pages/tools/ConvertPDF.jsx'
import About from '../pages/About.jsx'
import Pricing from '../pages/Pricing.jsx'
import NotFound from '../pages/NotFound.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/tools/merge', element: <MergePDF /> },
  { path: '/tools/split', element: <SplitPDF /> },
  { path: '/tools/compress', element: <CompressPDF /> },
  { path: '/tools/convert', element: <ConvertPDF /> },
  { path: '/about', element: <About /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '*', element: <NotFound /> },
])

export default router
