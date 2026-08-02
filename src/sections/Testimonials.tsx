import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const testimonials = [
  {
    id: 1,
    name: 'Sophie Laurent',
    role: 'Art Director',
    company: 'Dior Beauty',
    quote:
      'Manisha has an extraordinary eye for design and typography. Her work for our campaign lookbook was beautifully executed, highly refined, and delivered seamlessly on schedule.',
  },
  {
    id: 2,
    name: 'Hana Kim',
    role: 'Brand Lead',
    company: 'Rhode Skin',
    quote:
      'Working with Manisha was an absolute pleasure. She captured Rhode\'s aesthetic vision effortlessly and translated it into a cohesive visual identity system that elevated our presence.',
  },
  {
    id: 3,
    name: 'Claire Moreau',
    role: 'Creative Director',
    company: 'Glossier',
    quote:
      'Manisha\'s attention to detail and design strategy are exceptional. She consistently delivers creative assets that are clean, thoughtful, and deeply resonant.',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Feedback</div>
          <h2
            className="heading-editorial mt-3 mb-4"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}
          >
            Client <span className="italic text-gradient">Endorsements</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Notes from creative directors and brand leaders.
          </p>
        </motion.div>

        {/* Clean Static Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="clean-card p-6 flex flex-col justify-between"
            >
              <div>
                <Quote size={20} className="text-[var(--pink-accent)] mb-3 opacity-60" />
                <p className="text-xs leading-relaxed mb-6 italic" style={{ color: 'var(--text-primary)' }}>
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(217,122,152,0.1)]">
                <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {t.name}
                </p>
                <p className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                  {t.role} · <span style={{ color: 'var(--pink-accent)' }}>{t.company}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
