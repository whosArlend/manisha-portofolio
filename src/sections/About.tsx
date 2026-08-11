import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import aboutPortrait from '../assets/about_portrait.png'

const interests = [
  'Graphic Editing',
  'Canva Design',
  'Event Visuals',
  'Social Media Content',
  'Poster Design',
  'Presentation Design',
]

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: 'var(--bg-soft)' }}
    >
      <div className="container-main">
        <div className="two-col">

          {/* Left — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--pink-accent)',
                marginBottom: '1rem',
              }}
            >
              About Me
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: 'var(--text-dark)',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              A little about me.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              style={{ marginBottom: '2rem' }}
            >
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                I'm Manisha — someone who genuinely enjoys spending hours making things look good. Whether it's a poster for a campus event, a social media template for an organization, or a presentation that actually keeps people interested.
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                I love the process of exploring visuals, experimenting with layouts, and finding the right way to communicate something through design. Canva, Photoshop, or just sketching ideas — I'm always creating something.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-dark)',
                marginBottom: '0.875rem',
              }}>
                Creative interests
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {interests.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--pink-accent)',
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="portrait-wrap">
              <img
                src={aboutPortrait}
                alt="Manisha"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
