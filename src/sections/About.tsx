import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import aboutPortrait from '../assets/about_portrait.png'

const expertiseAreas = [
  'Brand Identity',
  'Graphic Design',
  'Social Media Design',
  'Digital Design',
  'Creative Direction',
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center"
        >
          {/* Section Label */}
          <div className="section-label justify-center">About Me</div>

          {/* Heading */}
          <h2
            className="heading-editorial mb-6 max-w-2xl"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
          >
            Blending Strategy & Creativity to Build{' '}
            <span className="italic text-gradient">Meaningful Designs</span>
          </h2>

          {/* Portrait Centered */}
          <motion.div
            variants={fadeUp}
            className="w-full max-w-sm mb-10"
          >
            <div
              className="rounded-3xl overflow-hidden border border-[rgba(217,122,152,0.14)] mx-auto"
              style={{
                aspectRatio: '4/5',
                boxShadow: '0 12px 32px rgba(217, 122, 152, 0.08)',
              }}
            >
              <img
                src={aboutPortrait}
                alt="Manisha — Graphic Designer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <div className="space-y-4 mb-10 text-base leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            <p>
              I am a Graphic Designer & Creative Designer dedicated to helping brands communicate 
              their vision with clarity, elegance, and visual impact.
            </p>
            <p>
              My approach combines strategic thinking with precise visual execution. Whether designing 
              a complete brand identity or crafting digital creative assets, I focus on creating 
              thoughtful designs that resonate with audiences and leave a lasting impression.
            </p>
          </div>

          {/* Expertise list */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-4"
              style={{ color: 'var(--pink-accent)' }}
            >
              Core Expertise
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-wrap justify-center gap-2.5 max-w-xl"
            >
              {expertiseAreas.map((area) => (
                <motion.span
                  key={area}
                  variants={fadeUp}
                  className="px-4 py-2 rounded-full text-xs font-medium"
                  style={{
                    background: '#FFF9FA',
                    color: 'var(--text-primary)',
                    border: '1px solid rgba(217, 122, 152, 0.18)',
                  }}
                >
                  {area}
                </motion.span>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
