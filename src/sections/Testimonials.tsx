import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { fadeUp, scaleIn, viewportConfig } from '../utils/animations'

const testimonials = [
  {
    id: 1,
    name: 'Sophie Laurent',
    role: 'Marketing Director',
    brand: 'Dior Beauty',
    avatar: 'SL',
    avatarGradient: 'linear-gradient(135deg, #FDEEF3, #E8A5B8)',
    quote:
      'Manisha has an extraordinary eye for beauty. Her content for our Dior campaign exceeded every expectation — the engagement rates spoke for themselves. She doesn\'t just create content; she creates experiences.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Hana Kim',
    role: 'Brand Partnerships Lead',
    brand: 'Rhode Skin',
    avatar: 'HK',
    avatarGradient: 'linear-gradient(135deg, #F4C6D7, #D97A98)',
    quote:
      'Working with Manisha felt like collaborating with a true creative partner. She understood Rhode\'s aesthetic instantly and delivered content that felt authentic, aspirational, and perfectly on-brand.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Claire Moreau',
    role: 'Head of Digital',
    brand: 'Glossier',
    avatar: 'CM',
    avatarGradient: 'linear-gradient(135deg, #FFF5F7, #F4C6D7)',
    quote:
      'Manisha\'s storytelling ability is unmatched. She created a series of posts that drove our highest-ever organic reach. Her audience trusts her, and that trust translates directly to brand results.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FFF8FA 0%, #FDEEF3 50%, #FFF5F7 100%)' }}
    >
      {/* Decorative orbs */}
      <div
        className="gradient-orb w-[500px] h-[500px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #F4C6D7, transparent 70%)',
          bottom: '-10%',
          left: '-5%',
        }}
      />
      <div
        className="gradient-orb w-[400px] h-[400px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #D97A98, transparent 70%)',
          top: '-10%',
          right: '-5%',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Kind Words</div>
          <h2
            className="heading-editorial mt-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            What Brands{' '}
            <span className="italic text-gradient">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="glass-card p-10 lg:p-14 relative"
            >
              {/* Quote icon */}
              <div
                className="absolute top-8 right-10 opacity-15"
                style={{ color: 'var(--pink-accent)' }}
              >
                <Quote size={80} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="var(--pink-accent)" style={{ color: 'var(--pink-accent)' }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="font-serif font-light text-xl lg:text-2xl leading-relaxed mb-10"
                style={{ color: 'var(--text-primary)' }}
              >
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                  style={{
                    background: t.avatarGradient,
                    color: 'var(--pink-accent)',
                    border: '2px solid rgba(217,122,152,0.2)',
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {t.role} · <span style={{ color: 'var(--pink-accent)' }}>{t.brand}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{ border: 'none', padding: 0 }}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                className="w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: '1px solid rgba(217,122,152,0.15)',
                  color: 'var(--text-secondary)',
                }}
                whileHover={{ scale: 1.1, background: 'var(--pink-accent)', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                className="w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer"
                style={{
                  background: 'var(--pink-accent)',
                  color: '#fff',
                  boxShadow: '0 8px 24px rgba(217,122,152,0.35)',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
