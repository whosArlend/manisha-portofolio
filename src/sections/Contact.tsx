import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageCircle } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, viewportConfig } from '../utils/animations'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const socials = [
  { icon: InstagramIcon, label: 'Instagram', handle: '@manisha.creates', href: '#', color: '#E4405F' },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
    label: 'TikTok',
    handle: '@manishacreates',
    href: '#',
    color: '#010101',
  },
  { icon: YoutubeIcon, label: 'YouTube', handle: 'Manisha', href: '#', color: '#FF0000' },
  { icon: Mail, label: 'Email', handle: 'hello@manisha.co', href: 'mailto:hello@manisha.co', color: '#D97A98' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDEEF3 0%, #FFF5F7 40%, #FDEEF3 100%)',
      }}
    >
      {/* Large gradient orbs */}
      <motion.div
        className="gradient-orb w-[700px] h-[700px] opacity-30"
        style={{
          background: 'radial-gradient(circle, #F4C6D7, transparent 70%)',
          top: '-20%',
          right: '-10%',
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="gradient-orb w-[500px] h-[500px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #D97A98, transparent 70%)',
          bottom: '-15%',
          left: '-5%',
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Large CTA heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-20"
        >
          <div className="section-label justify-center">Get In Touch</div>
          <h2
            className="heading-editorial mt-4 mb-5"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            Let's Create{' '}
            <span className="italic text-gradient">Together</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Ready to bring your vision to life? Whether you're a brand, agency, or creative — 
            let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left — Contact info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-7 mb-8">
              <h3
                className="font-serif font-light text-2xl mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Available for Collaborations
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Open to brand partnerships, campaign projects, UGC requests, 
                and long-term creative collaborations with luxury and beauty brands.
              </p>
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: 'var(--pink-accent)' }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for new projects
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, handle, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="glass-card flex items-center gap-4 p-4 no-underline group"
                  whileHover={{ y: -4, x: 4, boxShadow: '0 16px 40px rgba(217,122,152,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{ background: `${color}15`, color }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {label}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{handle}</p>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: 'var(--pink-accent)' }}
                  >
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(232,165,184,0.2)' }}
                >
                  <MessageCircle size={36} style={{ color: 'var(--pink-accent)' }} />
                </div>
                <h3
                  className="font-serif font-light text-3xl mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. I'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 lg:p-10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="e.g. Sophie Laurent"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="sophie@brand.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-brand"
                    className="block text-xs font-semibold mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Brand / Company
                  </label>
                  <input
                    id="contact-brand"
                    name="brand"
                    type="text"
                    placeholder="e.g. Dior Beauty"
                    className="form-input"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Tell Me About Your Project
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Describe your project, timeline, and goals..."
                    className="form-input resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full justify-center text-base py-4"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
