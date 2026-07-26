import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 mx-4 mt-3'
            : 'py-5'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'bg-white/80 backdrop-blur-xl border border-[rgba(217,122,152,0.15)] rounded-2xl shadow-glass py-3 px-6'
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 no-underline group"
            whileHover={{ scale: 1.02 }}
          >
            <span
              className="text-xl tracking-[0.2em] uppercase font-serif font-light"
              style={{ color: 'var(--text-primary)' }}
            >
              Manisha
            </span>
            <span
              className="w-1 h-1 rounded-full mt-1"
              style={{ backgroundColor: 'var(--pink-accent)' }}
            />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium tracking-wide transition-colors duration-300 border-none bg-transparent cursor-pointer"
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
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Collaborate
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-xl transition-colors"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-40 glass-card p-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium py-2 border-none bg-transparent cursor-pointer transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary mt-2 justify-center"
              >
                Let's Collaborate
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
