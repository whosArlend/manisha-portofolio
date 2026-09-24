import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Works from './sections/FeaturedWorks'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

function Portfolio() {
  return (
    <div className="relative overflow-x-hidden" style={{ background: '#FFFFFF' }}>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Works />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  const path = window.location.pathname

  if (path === '/admin/login') {
    return <AdminLogin />
  }

  if (path === '/admin') {
    return <AdminDashboard />
  }

  return <Portfolio />
}