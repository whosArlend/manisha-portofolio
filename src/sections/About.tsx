import { motion } from 'framer-motion'
import {
  Palette,
  Sparkles,
  Wand2,
  Megaphone,
  Share2,
  Layers,
  Presentation,
} from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import aboutPortrait from '../assets/about_portrait.jpeg'

const interests = [
  {
    title: 'Graphic Editing',
    tagline: 'Visual composition & touch-ups',
    icon: Palette,
  },
  {
    title: 'Canva Design',
    tagline: 'Templates, layouts & assets',
    icon: Wand2,
  },
  {
    title: 'Event Visuals',
    tagline: 'Banners, stage & promotional kits',
    icon: Megaphone,
  },
  {
    title: 'Social Media Content',
    tagline: 'Feeds, carousels & stories',
    icon: Share2,
  },
  {
    title: 'Poster Design',
    tagline: 'Impactful layout & typography',
    icon: Layers,
  },
  {
    title: 'Presentation Design',
    tagline: 'Clean pitch decks & slide decks',
    icon: Presentation,
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
                I'm Manisha — someone who genuinely enjoys spending hours making things look good. Whether it's a poster for a campus event, a social media template for an organization, or a presentation that actually keeps people interested.
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--text-secondary)', textAlign: "justify" }}>
                I love the process of exploring visuals, experimenting with layouts, and finding the right way to communicate something through design. Canva, Photoshop, or just sketching ideas — I'm always creating something.
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

              {/* Creative Cards Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '0.75rem',
                }}
              >
                {interests.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      whileHover={{
                        y: -3,
                        borderColor: 'rgba(217, 120, 152, 0.5)',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 8px 20px -4px rgba(217, 120, 152, 0.18)',
                      }}
                      style={{
                        padding: '0.75rem 0.875rem',
                        borderRadius: '0.875rem',
                        background: 'rgba(255, 255, 255, 0.65)',
                        border: '1px solid rgba(217, 120, 152, 0.2)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        cursor: 'default',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '0.625rem',
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
                        <Icon size={18} strokeWidth={2.2} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <h4
                          style={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: 'var(--text-dark)',
                            lineHeight: 1.25,
                            marginBottom: '0.15rem',
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          style={{
                            fontSize: '0.6875rem',
                            color: 'var(--text-secondary)',
                            fontWeight: 400,
                            lineHeight: 1.2,
                          }}
                        >
                          {item.tagline}
                        </p>
                      </div>
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
