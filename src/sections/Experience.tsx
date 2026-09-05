import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const experiences = [
  {
    year: '2024',
    role: 'Head Coordinator of Creative Media',
    org: 'Vocational College Sports Week 2024',
    description: 'Directed the creative media division, designed official event posters and banners, and supervised the documentation team.',
  },
  {
    year: '2024',
    role: 'Vice Coordinator of Creative Media',
    org: 'XPRESI Event',
    description: 'Coordinated the documentation team during events, edited highlight recap videos, and prepared visual feed assets for social media.',
  },
  {
    year: '2024 – 2025',
    role: 'Junior Staff of Arts & Sports',
    org: 'Vocational College Student Executive Board',
    description: 'Designed posters for arts and sports programs, handled on ground event photography, and assisted with social media updates.',
  },
  {
    year: '2025',
    role: 'Creative Media Staff',
    org: 'Study Easy',
    description: 'Designed graphic content for Instagram feeds and crafted engaging promotional posters for educational programs.',
  },
  {
    year: '2025',
    role: 'Creative Media Coordinator',
    org: "It's Our Day",
    description: 'Led the creative media team, managed event photography and videography documentation, and designed promotional visual materials.',
  },
  {
    year: '2025 – 2026',
    role: 'Senior Staff of Talent & Interests',
    org: 'Foreign Language Student Association',
    description: 'Assisted student talent initiatives, designed creative publication assets, and supported visual media coverage for department events.',
  },
  {
    year: 'May 2024 – Present',
    role: 'Content Creator & Videographer',
    org: 'Hero Creative',
    description: 'Created short form video content, handled camera production for creative projects, and edited video assets for social media publication.',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad"
      style={{ background: 'var(--bg-soft)', width: '100%' }}
    >
      <div className="container-main" style={{ width: '100%' }}>

        {/* Centered Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '3.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--pink-accent)',
              marginBottom: '0.75rem',
            }}
          >
            Experience
          </p>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--text-dark)',
              letterSpacing: '-0.01em',
              marginBottom: '1rem',
            }}
          >
            Where I've Created.
          </h2>
          <p
            style={{
              fontSize: '0.875rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            From campus organizations and creative events to internships, here is a highlight of where I've contributed through content creation, graphic design, and videography.
          </p>
        </motion.div>

        {/* Centered Cards Container */}
        <div style={{ maxWidth: '768px', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              width: '100%',
            }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{ width: '100%' }}
              >
                {/* Experience Card */}
                <div
                  className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border)',
                    borderLeft: '4px solid var(--pink-accent)',
                    borderRadius: '1rem',
                    padding: '1.5rem 1.75rem',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.0625rem',
                        fontWeight: 700,
                        color: 'var(--text-dark)',
                        margin: 0,
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.875rem',
                        borderRadius: '9999px',
                        whiteSpace: 'nowrap',
                        background: 'var(--pink-soft)',
                        color: 'var(--pink-accent)',
                      }}
                    >
                      {exp.year}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--pink-accent)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {exp.org}
                  </p>

                  <p
                    style={{
                      fontSize: '0.8125rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}
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
