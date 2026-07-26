import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const brands = [
  { name: 'DIOR', subtitle: 'Beauty' },
  { name: 'CHANEL', subtitle: 'Beauty' },
  { name: 'GLOSSIER', subtitle: '' },
  { name: 'RHODE', subtitle: 'Skin' },
  { name: 'TATCHA', subtitle: '' },
  { name: 'NARS', subtitle: 'Cosmetics' },
  { name: 'FENTY', subtitle: 'Beauty' },
  { name: 'RARE', subtitle: 'Beauty' },
  { name: 'CHARLOTTE', subtitle: 'Tilbury' },
  { name: 'LA MER', subtitle: '' },
  { name: 'LANCÔME', subtitle: '' },
  { name: 'KIEHL\'S', subtitle: '' },
]

export default function BrandCollabs() {
  return (
    <section
      id="brands"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FDEEF3 0%, #FFF8FA 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Trusted By</div>
          <h2
            className="heading-editorial mt-4 mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Brand{' '}
            <span className="italic text-gradient">Collaborations</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Proud to have partnered with the world's most iconic luxury and beauty brands.
          </p>
        </motion.div>

        {/* Brand logo wall */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              variants={fadeUp}
              custom={i}
              className="flex flex-col items-center justify-center rounded-[1.25rem] py-6 px-4 cursor-pointer transition-all duration-300 group"
              style={{
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(217,122,152,0.1)',
                backdropFilter: 'blur(8px)',
              }}
              whileHover={{
                y: -6,
                boxShadow: '0 16px 48px rgba(217,122,152,0.15)',
                background: 'rgba(255,255,255,0.95)',
                borderColor: 'rgba(217,122,152,0.2)',
              }}
              transition={{ duration: 0.3 }}
            >
              <p
                className="text-sm font-semibold tracking-[0.15em] text-center transition-colors duration-300 group-hover:text-[var(--pink-accent)]"
                style={{ color: 'var(--text-primary)', letterSpacing: '0.12em' }}
              >
                {brand.name}
              </p>
              {brand.subtitle && (
                <p
                  className="text-xs mt-0.5 tracking-wider"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {brand.subtitle}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee band */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 py-5 overflow-hidden"
          style={{
            borderTop: '1px solid rgba(217,122,152,0.1)',
            borderBottom: '1px solid rgba(217,122,152,0.1)',
          }}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand.name}-${i}`}
                className="text-xs tracking-[0.25em] uppercase mx-8"
                style={{ color: 'rgba(217,122,152,0.5)' }}
              >
                {brand.name} {brand.subtitle}
                <span className="mx-8 text-[rgba(217,122,152,0.3)]">·</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
