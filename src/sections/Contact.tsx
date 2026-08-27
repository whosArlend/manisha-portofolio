import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../utils/animations'
import { Mail } from 'lucide-react'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const contactLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: '#', display: '@manisha' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#', display: 'linkedin.com/in/manisha' },
  { icon: Mail, label: 'Email', href: 'mailto:manisha@email.com', display: 'manisha@email.com' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: 'var(--pink-soft)' }}
    >
      <div className="container-main">
        <div className="max-w-2xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: 'var(--pink-accent)' }}
            >
              Contact
            </p>

            <h2
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--text-dark)',
                letterSpacing: '-0.02em',
              }}
            >
              Let's create something together.
            </h2>

            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}
            >
              Have an event, organization project, or creative idea in mind? I'd love to help turn it into something visual.
            </p>

            <div style={{ marginBottom: '2.75rem' }}>
              <a
                id="contact-get-in-touch"
                href="mailto:manisha@email.com"
                className="btn-primary"
              >
                Get In Touch
              </a>
            </div>

            {/* Contact links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {contactLinks.map(({ icon: Icon, label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  className="group"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none' }}
                >
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{ background: 'rgba(217,120,152,0.14)', color: 'var(--pink-accent)' }}
                  >
                    <Icon size={16} />
                  </span>
                  <span
                    className="text-sm font-medium transition-colors duration-200 group-hover:text-[var(--pink-accent)]"
                    style={{ color: 'var(--text-dark)' }}
                  >
                    {display}
                  </span>
                </a>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
