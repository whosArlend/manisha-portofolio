import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const steps = [
  {
    num: '01',
    title: 'Understand',
    description: "I start by figuring out what the project needs to communicate and who it's for.",
  },
  {
    num: '02',
    title: 'Explore',
    description: "I look for visual references, experiment with ideas, and find a direction that feels right.",
  },
  {
    num: '03',
    title: 'Create',
    description: "I bring the idea to life — in Canva, Photoshop, or whatever tool fits the project.",
  },
  {
    num: '04',
    title: 'Refine',
    description: "I review, adjust, and polish until the output feels exactly how it should look.",
  },
]

export default function CreativeProcess() {
  return (
    <section
      id="process"
      className="section-pad"
      style={{ background: 'var(--bg-soft)' }}
    >
      <div className="container-main">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ marginBottom: '4rem' }}
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--pink-accent)' }}
          >
            Process
          </p>
          <h2
            className="font-bold leading-tight"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: 'var(--text-dark)',
              letterSpacing: '-0.01em',
            }}
          >
            How I Usually Work.
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="four-col"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              style={{
                borderTop: '1px solid rgba(217, 120, 152, 0.22)',
                paddingTop: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--pink-accent)',
                  opacity: 0.55,
                  marginBottom: '1rem',
                  lineHeight: 1,
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {step.num}
              </span>
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  marginBottom: '0.75rem',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
