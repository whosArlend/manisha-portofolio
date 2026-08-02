import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, CheckCircle2 } from 'lucide-react'
import { fadeUp, viewportConfig } from '../utils/animations'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FDF1F4 0%, #FFF9FA 100%)',
      }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        
        {/* Headline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <div className="section-label justify-center">Get In Touch</div>
          <h2
            className="heading-editorial mt-3 mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Have a Creative Idea <span className="italic text-gradient">in Mind?</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Let's collaborate and create visual work that makes an impact.
          </p>
        </motion.div>

        {/* Contact Info Badge Centered */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="clean-card p-6 mb-8 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs" style={{ color: 'var(--text-primary)' }}>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[var(--pink-accent)]" />
              <a href="mailto:hello@manisha.co" className="no-underline hover:underline font-medium" style={{ color: 'inherit' }}>
                hello@manisha.co
              </a>
            </div>
            <span className="hidden sm:inline text-[var(--pink-accent)]">·</span>
            <p style={{ color: 'var(--text-secondary)' }}>
              Based in Jakarta · Working Worldwide
            </p>
          </div>
        </motion.div>

        {/* Form Centered */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {submitted ? (
            <div className="clean-card p-10 text-center">
              <CheckCircle2 size={40} className="text-[var(--pink-accent)] mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-light mb-2" style={{ color: 'var(--text-primary)' }}>
                Message Sent
              </h3>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                Thank you for reaching out. I will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="clean-card p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="jane@brand.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-project" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Project Type
                </label>
                <select
                  id="contact-project"
                  name="projectType"
                  className="form-input"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select project type...</option>
                  <option value="Brand Identity">Brand Identity</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Social Media Design">Social Media Design</option>
                  <option value="Creative Campaign">Creative Campaign</option>
                  <option value="Creative Direction">Creative Direction</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project, timeline, and goals..."
                  className="form-input resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-3 text-xs">
                Send Message
                <Send size={14} />
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}
