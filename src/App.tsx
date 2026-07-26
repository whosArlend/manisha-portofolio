import './styles/globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import FeaturedWorks from './sections/FeaturedWorks'
import VideoShowcase from './sections/VideoShowcase'
import BrandCollabs from './sections/BrandCollabs'
import Statistics from './sections/Statistics'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="relative overflow-x-hidden" style={{ background: '#FFF8FA' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedWorks />
        <VideoShowcase />
        <BrandCollabs />
        <Statistics />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
