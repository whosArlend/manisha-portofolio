import { motion } from 'framer-motion'
import {
  Sparkles,
  Wand2,
  Share2,
  Video,
} from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import aboutPortrait from '../assets/about_portrait.jpeg'

const interests = [
  {
    title: 'Canva Design',
    tagline: 'Aesthetic templates, layouts & digital assets',
    tag: 'Visual & Layout',
    icon: Wand2,
  },
  {
    title: 'Social Media Content',
    tagline: 'Feeds, carousels, engaging stories & viral reels',
    tag: 'Content & Feeds',
    icon: Share2,
  },
  {
    title: 'Video Editing',
    tagline: 'Cinematic & memorable edits for special moments',
    tag: 'Reels & Moments',
    icon: Video,
  },
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
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: "justify" }}>
                I'm Manisha — someone who genuinely enjoys spending hours making things look good. Whether it's a poster for a campus event, a social media template for an organization, or memorable videos for pre-weddings, engagements, graduations, and other special moments.
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--text-secondary)', textAlign: "justify" }}>
                I love the process of exploring visuals, experimenting with layouts, and finding the right way to communicate something through design. Canva, CapCut, or just sketching ideas — I'm always creating something.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'rgba(217, 120, 152, 0.15)',
                    color: 'var(--pink-accent)',
                  }}
                >
                  <Sparkles size={11} />
                </span>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-dark)',
                  }}
                >
                  Creative Interests & Focus
                </p>
              </div>

              {/* Creative 3-Card Stack */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {interests.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                      whileHover={{
                        x: 4,
                        borderColor: 'rgba(217, 120, 152, 0.45)',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 8px 24px -4px rgba(217, 120, 152, 0.18)',
                      }}
                      style={{
                        padding: '0.875rem 1.125rem',
                        borderRadius: '1rem',
                        background: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(217, 120, 152, 0.2)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        cursor: 'default',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', minWidth: 0 }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '0.75rem',
                            background: 'linear-gradient(135deg, #FFF0F5 0%, #FCE4EC 100%)',
                            border: '1px solid rgba(217, 120, 152, 0.25)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--pink-accent)',
                            flexShrink: 0,
                            boxShadow: '0 2px 6px rgba(217, 120, 152, 0.1)',
                          }}
                        >
                          <Icon size={20} strokeWidth={2.2} />
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <h4
                            style={{
                              fontSize: '0.9375rem',
                              fontWeight: 600,
                              color: 'var(--text-dark)',
                              lineHeight: 1.3,
                              marginBottom: '0.15rem',
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            style={{
                              fontSize: '0.75rem',
                              color: 'var(--text-secondary)',
                              fontWeight: 400,
                              lineHeight: 1.3,
                            }}
                          >
                            {item.tagline}
                          </p>
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          color: 'var(--pink-accent)',
                          background: 'rgba(217, 120, 152, 0.1)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                        }}
                      >
                        {item.tag}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
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
