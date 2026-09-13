import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import AppRoutes from './router/routes.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
