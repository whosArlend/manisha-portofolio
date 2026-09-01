import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../utils/animations'
import heroPortrait from '../assets/hero_portrait.jpeg'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#FFFFFF', paddingTop: '64px' }}
    >
      <div className="container-main" style={{ width: '100%' }}>
        <div className="two-col" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>

          {/* Left — Typography */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--pink-accent)',
                marginBottom: '1.25rem',
              }}
            >
              Creative Content Creator & Social Media Specialist
            </motion.p>

            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem',
              }}
            >
              Hi, I'm{' '}
              <span style={{ color: 'var(--pink-accent)' }}>Manisha.</span>
              <br />
              I create things
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--pink-accent), var(--pink-primary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                I love to see.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                maxWidth: '28rem',
                marginBottom: '2.5rem',
                textAlign: 'justify',
              }}
            >
              Creative content creator and visual enthusiast who enjoys turning ideas into posters, social media content, and videography.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                id="hero-see-works"
                className="btn-primary"
                onClick={() =>
                  document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                See My Works
                <ArrowRight size={15} />
              </button>
              <button
                id="hero-about-me"
                className="btn-outline"
                onClick={() =>
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                About Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            style={{ position: 'relative' }}
          >
            {/* Soft pink blob behind image */}
            <div
              style={{
                position: 'absolute',
                inset: '-1.5rem',
                borderRadius: '2.5rem',
                background: 'var(--pink-soft)',
                opacity: 0.45,
              }}
            />
            <div className="portrait-wrap" style={{ position: 'relative' }}>
              <img
                src={heroPortrait}
                alt="Manisha — Creative Editor & Visual Designer"
                loading="eager"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
