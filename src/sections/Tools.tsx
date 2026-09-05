import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../utils/animations'

const tools = [
  { name: 'Canva', description: 'Posters, social media, and quick visual content' },
  { name: 'CapCut', description: 'Video editing and motion content' },
]

export default function Tools() {
  return (
    <section
      id="tools"
      className="section-pad"
      style={{ background: '#FFFFFF' }}
    >
      <div className="container-main">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--pink-accent)' }}
          >
            Tools
          </p>
          <h2
            className="font-bold leading-tight"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: 'var(--text-dark)',
              letterSpacing: '-0.01em',
            }}
          >
            Tools I Enjoy Using.
          </h2>
        </motion.div>

        {/* Tools list — clean typographic */}
        <div
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: 'var(--text-dark)' }}
              >
                {tool.name}
              </span>
              <span
                className="text-xs text-right max-w-[55%]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {tool.description}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
