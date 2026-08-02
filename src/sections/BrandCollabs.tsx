import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const brands = [
  { name: 'DIOR BEAUTY' },
  { name: 'CHANEL' },
  { name: 'GLOSSIER' },
  { name: 'RHODE' },
  { name: 'TATCHA' },
  { name: 'NARS' },
]

export default function BrandCollabs() {
  return (
    <section
      id="brands"
      className="relative py-16 overflow-hidden"
      style={{ background: '#FFFFFF', borderTop: '1px solid rgba(217,122,152,0.1)', borderBottom: '1px solid rgba(217,122,152,0.1)' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--pink-accent)]">
            Selected Collaborations
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={fadeUp}
              className="text-center py-2"
            >
              <span
                className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text-secondary)] hover:text-[var(--pink-accent)] transition-colors duration-200"
              >
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
