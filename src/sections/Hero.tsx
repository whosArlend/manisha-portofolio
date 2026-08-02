import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { blurReveal, fadeUp, staggerContainer } from '../utils/animations'
import heroPortrait from '../assets/hero_portrait.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF9FA 0%, #FDF1F4 100%)',
      }}
    >
      {/* Single subtle soft-pink background orb */}
      <div
        className="gradient-orb w-[600px] h-[600px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #F4C6D7 0%, transparent 70%)',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 w-full relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Availability badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide"
              style={{
                background: '#FFFFFF',
                color: 'var(--text-primary)',
                border: '1px solid rgba(217, 122, 152, 0.2)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Available for selected creative projects
            </span>
          </motion.div>

          {/* Title tag */}
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--pink-accent)' }}
          >
            Graphic Designer & Creative Designer
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={blurReveal}
            className="heading-editorial mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
          >
            Designing Visuals That Make Ideas{' '}
            <span className="italic text-gradient">Memorable.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            variants={fadeUp}
            className="text-base lg:text-lg leading-relaxed max-w-2xl mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Manisha is a Graphic Designer & Creative Designer creating meaningful visual identities, 
            creative campaigns, and impactful digital experiences.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className="btn-primary text-sm"
              onClick={() => {
                document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
              <ArrowDown size={14} />
            </button>
            <button
              className="btn-secondary text-sm"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              About Me
            </button>
          </motion.div>

          {/* Single clean portrait visual centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative w-full max-w-sm"
          >
            <div
              className="rounded-3xl overflow-hidden border border-[rgba(217,122,152,0.14)]"
              style={{
                boxShadow: '0 16px 40px rgba(217, 122, 152, 0.1)',
                aspectRatio: '4/5',
              }}
            >
              <img
                src={heroPortrait}
                alt="Manisha — Graphic Designer & Creative Designer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
