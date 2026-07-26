import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { blurReveal, fadeUp, floatAnimation, floatDelayed, staggerContainer } from '../utils/animations'
import heroPortrait from '../assets/hero_portrait.png'

const stats = [
  { value: '2M+', label: 'Followers' },
  { value: '500K', label: 'Monthly Views' },
  { value: '150+', label: 'Brand Campaigns' },
]

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFF8FA 0%, #FDEEF3 50%, #FFF5F7 100%)',
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Decorative gradient orbs */}
      <motion.div
        className="gradient-orb w-[600px] h-[600px] opacity-30"
        style={{
          background: 'radial-gradient(circle, #F4C6D7, transparent 70%)',
          top: '-10%',
          right: '-5%',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="gradient-orb w-[400px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #E8A5B8, transparent 70%)',
          bottom: '10%',
          left: '-5%',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content — spans 7 cols */}
          <div className="lg:col-span-7 relative z-10">
            {/* Tag */}
            <motion.div
              variants={blurReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-8"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(232,165,184,0.15)',
                  color: 'var(--pink-accent)',
                  border: '1px solid rgba(217,122,152,0.2)',
                }}
              >
                <Sparkles size={12} />
                Content Creator · Influencer · Creative Director
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={blurReveal}
                className="heading-editorial mb-6"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
              >
                I Create{' '}
                <span className="italic text-gradient">Content</span>
                <br />
                That{' '}
                <span
                  className="relative inline-block"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Moves
                  <motion.span
                    className="absolute bottom-0 left-0 h-[3px] rounded-full"
                    style={{ background: 'linear-gradient(90deg, var(--pink-accent), var(--pink-soft))' }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base lg:text-lg leading-relaxed max-w-lg mb-10"
                style={{ color: 'var(--text-secondary)' }}
              >
                Crafting visual stories for luxury brands in fashion, beauty & lifestyle. 
                Where creativity meets elegance — every frame tells a story worth feeling.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-14">
                <motion.button
                  className="btn-primary text-sm"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  See My Work
                  <ArrowDown size={14} />
                </motion.button>
                <motion.a
                  href="#"
                  className="btn-glass text-sm"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download Media Kit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15V3M8 11l4 4 4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
                  </svg>
                </motion.a>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap gap-6 lg:gap-8"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    custom={i}
                    className="flex flex-col"
                  >
                    <span
                      className="font-serif font-light"
                      style={{ fontSize: '2.25rem', lineHeight: 1, color: 'var(--text-primary)' }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs tracking-wider mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Portrait + floating cards — spans 5 cols */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
              className="relative"
            >
              <div
                className="relative w-[340px] lg:w-[400px] rounded-[2.5rem] overflow-hidden"
                style={{
                  boxShadow: '0 32px 80px rgba(217,122,152,0.2), 0 8px 32px rgba(217,122,152,0.12)',
                  aspectRatio: '3/4',
                }}
              >
                <img
                  src={heroPortrait}
                  alt="Manisha — Content Creator"
                  className="w-full h-full object-cover"
                />
                {/* Soft gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32"
                  style={{
                    background: 'linear-gradient(to top, rgba(253,238,243,0.5), transparent)',
                  }}
                />
              </div>

              {/* Floating stat card — top left */}
              <motion.div
                variants={floatAnimation}
                animate="animate"
                className="absolute -left-8 top-10 glass-card px-4 py-3 shadow-glass-md"
                style={{ backdropFilter: 'blur(16px)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(232,165,184,0.2)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="var(--pink-accent)" className="w-4 h-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Instagram</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>1.2M followers</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating TikTok card — bottom right */}
              <motion.div
                variants={floatDelayed}
                animate="animate"
                className="absolute -right-6 bottom-16 glass-card px-4 py-3 shadow-glass-md"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(232,165,184,0.2)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="var(--pink-accent)" className="w-4 h-4">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>TikTok</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>850K followers</p>
                  </div>
                </div>
              </motion.div>

              {/* Pink glow behind portrait */}
              <div
                className="absolute inset-0 rounded-[2.5rem] -z-10"
                style={{
                  background: 'radial-gradient(circle at center, rgba(232,165,184,0.25) 0%, transparent 70%)',
                  transform: 'scale(1.15)',
                  filter: 'blur(30px)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 border-none bg-transparent cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
          Scroll
        </span>
        <ArrowDown size={16} style={{ color: 'var(--pink-accent)' }} />
      </motion.button>
    </section>
  )
}
