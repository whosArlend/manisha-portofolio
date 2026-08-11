import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Experience', href: '#experience' },
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
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: '#FFFFFF',
          borderBottom: scrolled ? '1px solid rgba(217, 120, 152, 0.14)' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
        }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            style={{
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-dark)',
              fontFamily: 'Inter, sans-serif',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Manisha
          </button>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
               className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  fontFamily: 'Inter, sans-serif',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--pink-accent)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA — desktop */}
          <div className="desktop-nav">
            <button
              id="navbar-lets-talk"
              onClick={() => handleNavClick('#contact')}
              className="btn-primary"
              style={{ fontSize: '0.75rem', padding: '0.5rem 1.25rem' }}
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            id="navbar-mobile-toggle"
            className="mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              padding: '0.5rem',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: 'var(--text-dark)',
              display: 'none',
            }}
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              zIndex: 40,
              background: '#FFFFFF',
              borderBottom: '1px solid rgba(217, 120, 152, 0.14)',
            }}
          >
            <nav style={{
              maxWidth: '1152px',
              margin: '0 auto',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    textAlign: 'left',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    color: 'var(--text-dark)',
                    fontFamily: 'Inter, sans-serif',
                    padding: 0,
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary"
                style={{ width: 'fit-content', marginTop: '0.25rem' }}
              >
                Let's Talk
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; align-items: center; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </>
  )
}
