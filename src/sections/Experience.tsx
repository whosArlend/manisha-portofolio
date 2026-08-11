import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const experiences = [
  {
    year: '2025',
    role: 'PDD — Campus Event',
    org: 'Campus Organization',
    description: 'Visual design, poster creation, and social media materials for major campus events.',
  },
  {
    year: '2025',
    role: 'Creative Content',
    org: 'Student Organization',
    description: 'Creative content, event documentation, and design assets for organizational activities.',
  },
  {
    year: '2024',
    role: 'Social Media Designer',
    org: 'Campus Community',
    description: 'Managed and created Instagram content, event announcements, and visual campaigns.',
  },
  {
    year: '2024',
    role: 'Graphic Designer',
    org: 'Creative Project',
    description: 'Poster design and visual identity for campus competitions and community events.',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad"
      style={{ background: 'var(--bg-soft)' }}
    >
      <div className="container-main">
        <div className="two-col">

          {/* Left — Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--pink-accent)' }}
            >
              Experience
            </p>
            <h2
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: 'var(--text-dark)',
                letterSpacing: '-0.01em',
              }}
            >
              Where I've Created.
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Organizations, events, campus activities, and creative projects where I've contributed my visual work.
            </p>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-8"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{ display: 'flex', gap: '1.25rem' }}
              >
                {/* Year + line */}
                <div className="flex flex-col items-center pt-1">
                  <span
                    className="text-xs font-semibold tabular-nums"
                    style={{ color: 'var(--pink-accent)' }}
                  >
                    {exp.year}
                  </span>
                  {i < experiences.length - 1 && (
                    <div
                      className="w-px flex-1 mt-2"
                      style={{ background: 'var(--border)', minHeight: '2rem' }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <p
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: 'var(--text-dark)' }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="text-xs mb-2"
                    style={{ color: 'var(--pink-accent)' }}
                  >
                    {exp.org}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
