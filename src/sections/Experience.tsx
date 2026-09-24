import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Palette, Film, Wrench } from 'lucide-react'
import { supabase } from '../lib/supabase'

const tools = [
  {
    name: 'Canva',
    role: 'Posters, social media, & visual content',
    icon: Palette,
  },
  {
    name: 'CapCut',
    role: 'Video editing & motion content',
    icon: Film,
  },
]

export default function Experience() {
  const [experiences, setExperiences] = useState<any[]>([])

  useEffect(() => {
    async function fetchExperiences() {
      const { data } = await supabase
        .from('experiences')
        .select('*')
        .order('sort_order', { ascending: true })
        .order('start_date', { ascending: false })

      if (data) {
        const mapped = data.map(exp => {
          const startYear = exp.start_date ? new Date(exp.start_date).getFullYear() : ''
          const endYear = exp.is_current ? 'Present' : (exp.end_date ? new Date(exp.end_date).getFullYear() : '')
          
          let yearStr = `${startYear}`
          if (endYear && startYear !== endYear) {
            yearStr += ` – ${endYear}`
          }

          return {
            ...exp,
            year: yearStr,
            org: exp.organization,
            isCurrent: exp.is_current
          }
        })
        setExperiences(mapped)
      }
    }
    fetchExperiences()
  }, [])

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
        <div style={{ maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>

          {/* 1. EXPERIENCE SUBSECTION */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: '1.25rem' }}
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

          {/* Experience List Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(217, 120, 152, 0.05)',
              marginBottom: '2.5rem',
            }}
          >
            {experiences.map((exp, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </motion.div>

          {/* 2. TOOLS SUBSECTION */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: '1.25rem' }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.35rem',
              }}
            >
              <Wrench size={13} style={{ color: 'var(--pink-accent)' }} />
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--pink-accent)',
                }}
              >
                Tools
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
              Tools I Enjoy Using.
            </h2>
          </motion.div>

          {/* Tools Simple Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
          >
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <div
                  key={tool.name}
                  className="transition-all duration-150 hover:-translate-y-0.5"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border)',
                    borderRadius: '0.875rem',
                    padding: '1rem 1.15rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.875rem',
                    boxShadow: '0 2px 10px rgba(217, 120, 152, 0.04)',
                  }}
                >
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '0.625rem',
                      background: 'rgba(217, 120, 152, 0.12)',
                      color: 'var(--pink-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} strokeWidth={2.2} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 700,
                        color: 'var(--text-dark)',
                        margin: 0,
                        lineHeight: 1.3,
                        marginBottom: '0.2rem',
                      }}
                    >
                      {tool.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.78125rem',
                        color: 'var(--text-secondary)',
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {tool.role}
                    </p>
                  </div>
                </div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
