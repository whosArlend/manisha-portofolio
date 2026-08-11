import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Works from './sections/FeaturedWorks'
import Experience from './sections/Experience'
import Tools from './sections/Tools'
import CreativeProcess from './sections/CreativeProcess'
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
        <Tools />
        <CreativeProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
