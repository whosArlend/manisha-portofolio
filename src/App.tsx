import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Works from './sections/FeaturedWorks'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
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


