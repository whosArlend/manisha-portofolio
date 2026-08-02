import './styles/globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import FeaturedWorks from './sections/FeaturedWorks'
import CreativeProcess from './sections/CreativeProcess'
import Services from './sections/Services'
import BrandCollabs from './sections/BrandCollabs'
import Statistics from './sections/Statistics'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="relative overflow-x-hidden" style={{ background: '#FFF9FA' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedWorks />
        <CreativeProcess />
        <Services />
        <BrandCollabs />
        <Statistics />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
