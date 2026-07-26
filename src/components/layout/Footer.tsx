import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { fadeUp, viewportConfig } from '../../utils/animations'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const footerLinks = ['About', 'Works', 'Services', 'Testimonials', 'Contact']
const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
    label: 'TikTok',
    href: '#',
  },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
]

export default function Footer() {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative overflow-hidden pt-20 pb-8"
      style={{
        background: 'linear-gradient(180deg, #FFF8FA 0%, #FDEEF3 100%)',
        borderTop: '1px solid rgba(217,122,152,0.1)',
      }}
    >
      {/* Decorative top gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(217,122,152,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {/* Brand */}
          <div>
            <h3
              className="text-2xl tracking-[0.2em] uppercase font-serif font-light mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Manisha
            </h3>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              Premium content creator specializing in fashion, beauty, and luxury brand storytelling.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs tracking-[0.15em] uppercase font-semibold mb-5"
              style={{ color: 'var(--pink-accent)' }}
            >
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className="text-sm text-left border-none bg-transparent cursor-pointer transition-colors duration-200 w-fit"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => {
                    ; (e.target as HTMLButtonElement).style.color = 'var(--pink-accent)'
                  }}
                  onMouseLeave={(e) => {
                    ; (e.target as HTMLButtonElement).style.color = 'var(--text-secondary)'
                  }}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact + Social */}
          <div>
            <p
              className="text-xs tracking-[0.15em] uppercase font-semibold mb-5"
              style={{ color: 'var(--pink-accent)' }}
            >
              Connect
            </p>
            <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
              hello@manisha.co
            </p>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              @manisha.creates
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(217,122,152,0.15)',
                    color: 'var(--text-secondary)',
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'var(--pink-accent)',
                    color: '#fff',
                    borderColor: 'var(--pink-accent)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(217,122,152,0.1)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            © 2026 Manisha. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
            Made with <Heart size={12} fill="var(--pink-accent)" className="text-pink-accent" /> for creative excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
