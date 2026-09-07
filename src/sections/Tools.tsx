import { motion } from 'framer-motion'
import { Palette, Film, Sparkles } from 'lucide-react'
import { fadeUp, viewportConfig } from '../utils/animations'

const tools = [
  {
    name: 'Canva',
    role: 'Graphic & Socials',
    icon: Palette,
  },
  {
    name: 'CapCut',
    role: 'Video Editing & Reels',
    icon: Film,
  },
]

export default function Tools() {
  return (
    <section
      id="tools"
      style={{
        background: '#FFFFFF',
        paddingTop: '2.5rem',
        paddingBottom: '3rem',
      }}
    >
      <div className="container-main">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            background: 'var(--bg-soft)',
            border: '1px solid var(--border)',
            borderRadius: '1rem',
            padding: '1rem 1.5rem',
          }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: 'rgba(217, 120, 152, 0.15)',
                color: 'var(--pink-accent)',
              }}
            >
              <Sparkles size={12} />
            </span>
            <div>
              <h3
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Tools I Use
              </h3>
              <p
                style={{
                  fontSize: '0.71875rem',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              >
                Daily creative software
              </p>
            </div>
          </div>

          {/* Tools Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <div
                  key={tool.name}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#FFFFFF',
                    border: '1px solid var(--border)',
                    borderRadius: '9999px',
                    padding: '0.4rem 0.875rem 0.4rem 0.5rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(217, 120, 152, 0.12)',
                      color: 'var(--pink-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={13} strokeWidth={2.4} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                    }}
                  >
                    {tool.name}
                  </span>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    · {tool.role}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


