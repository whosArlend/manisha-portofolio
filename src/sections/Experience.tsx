import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const experiences = [
  {
    year: 'May 2024 – Present',
    role: 'Content Creator & Videographer',
    org: 'Hero Creative',
    isCurrent: true,
  },
  {
    year: '2024',
    role: 'Vice Coordinator of Creative Media',
    org: 'XPRESI Event',
  },
  {
    year: '2024',
    role: 'Head Coordinator of Creative Media',
    org: 'Vocational College Sports Week 2024',
  },
  {
    year: '2024 – 2025',
    role: 'Junior Staff of Arts & Sports',
    org: 'Vocational College Student Executive Board',
  },
  {
    year: '2025',
    role: 'Creative Media Coordinator',
    org: "It's Our Day",
  },
  {
    year: '2025',
    role: 'Creative Media Staff',
    org: 'Study Easy',
  },
  {
    year: '2025 – 2026',
    role: 'Senior Staff of Talent & Interests',
    org: 'Foreign Language Student Association',
  },


]

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: 'var(--bg-soft)',
        width: '100%',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
      }}
    >
      <div className="container-main" style={{ width: '100%' }}>

        {/* Compact Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '0.35rem',
            }}
          >
            <Briefcase size={13} style={{ color: 'var(--pink-accent)' }} />
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--pink-accent)',
              }}
            >
              Experience
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--text-dark)',
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            Where I've Created.
          </h2>
        </motion.div>

        {/* Ultra-Simple Clean Minimalist List */}
        <div style={{ maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
            }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="transition-colors duration-150 hover:bg-[#FFF7FA]"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem 1rem',
                  padding: '0.875rem 1.25rem',
                  borderBottom: i < experiences.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', minWidth: 0 }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: exp.isCurrent ? 'var(--pink-accent)' : 'rgba(217, 120, 152, 0.35)',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--text-dark)',
                      }}
                    >
                      {exp.role}
                    </span>
                    <span
                      style={{
                        fontSize: '0.78125rem',
                        color: 'var(--pink-accent)',
                        fontWeight: 500,
                        marginLeft: '0.5rem',
                      }}
                    >
                      @{exp.org}
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.71875rem',
                    fontWeight: 600,
                    padding: '0.15rem 0.55rem',
                    borderRadius: '9999px',
                    background: exp.isCurrent ? 'var(--pink-soft)' : 'rgba(0,0,0,0.04)',
                    color: exp.isCurrent ? 'var(--pink-accent)' : 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                    marginLeft: 'auto',
                  }}
                >
                  {exp.year}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}


