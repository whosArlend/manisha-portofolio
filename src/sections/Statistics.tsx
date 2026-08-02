import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const stats = [
  { value: '150+', label: 'Design Projects' },
  { value: '45+', label: 'Creative Collaborations' },
  { value: '6+', label: 'Years Experience' },
]

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="relative py-16 overflow-hidden"
      style={{ background: '#FFF9FA' }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="p-6 clean-card"
            >
              <p
                className="font-serif font-light text-3xl mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {stat.value}
              </p>
              <p className="text-xs font-medium tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
