import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 mx-4 mt-2' : 'py-5'
        }`}
      >
        <div
          className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-md border border-[rgba(217,122,152,0.14)] rounded-full shadow-sm py-2.5 px-6'
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 no-underline group"
          >
            <span
              className="text-lg tracking-[0.2em] uppercase font-serif font-light"
              style={{ color: 'var(--text-primary)' }}
            >
              Manisha
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--pink-accent)' }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs tracking-wider uppercase font-medium transition-colors duration-200 border-none bg-transparent cursor-pointer"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLButtonElement).style.color = 'var(--pink-accent)'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLButtonElement).style.color = 'var(--text-secondary)'
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-xs py-2.5 px-5"
            >
              Let's Work Together
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors border-none bg-transparent cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: 'var(--text-primary)' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 bg-white border border-[rgba(217,122,152,0.14)] rounded-2xl p-6 shadow-lg"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-medium py-1.5 border-none bg-transparent cursor-pointer transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary mt-2 justify-center py-3 text-xs"
              >
                Let's Work Together
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
