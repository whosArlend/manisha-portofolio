import { motion } from 'framer-motion'
import { Camera, Pen } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '../utils/animations'
import aboutPortrait from '../assets/about_portrait.png'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const skills = [
  'Content Creation', 'Brand Strategy', 'Photography', 'Videography',
  'Creative Direction', 'Storytelling', 'UGC', 'Campaign Management',
]

const platforms = [
  {
    icon: InstagramIcon,
    name: 'Instagram',
    handle: '@manisha.creates',
    followers: '1.2M',
    color: '#E4405F',
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    ),
    name: 'TikTok',
    handle: '@manishacreates',
    followers: '850K',
    color: '#010101',
  },
  {
    icon: YoutubeIcon,
    name: 'YouTube',
    handle: 'Manisha',
    followers: '420K',
    color: '#FF0000',
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.27 13.975 4.31 13.06c-.656-.204-.669-.656.136-.973l11.57-4.461c.547-.197 1.025.122.878.595z"/>
      </svg>
    ),
    name: 'Telegram',
    handle: 'Manisha Channel',
    followers: '95K',
    color: '#2AABEE',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: '#FFF5F7' }}
    >
      {/* Decorative orb */}
      <div
        className="gradient-orb w-[500px] h-[500px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #F4C6D7, transparent 70%)',
          top: '-10%',
          left: '-10%',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left — Portrait */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5 relative"
          >
            {/* Large portrait */}
            <div className="relative">
              <div
                className="rounded-[2rem] overflow-hidden"
                style={{
                  aspectRatio: '3/4',
                  boxShadow: '0 32px 80px rgba(217,122,152,0.15)',
                }}
              >
                <img
                  src={aboutPortrait}
                  alt="Manisha — Creative Director"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating years experience card */}
              <motion.div
                className="absolute -right-5 -bottom-5 glass-card px-6 py-4"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p
                  className="text-4xl font-serif font-light"
                  style={{ color: 'var(--text-primary)', lineHeight: 1 }}
                >
                  6+
                </p>
                <p className="text-xs tracking-wider mt-1" style={{ color: 'var(--text-secondary)' }}>
                  Years Creating
                </p>
              </motion.div>

              {/* Decorative shape behind portrait */}
              <div
                className="absolute -z-10 rounded-[2.5rem] inset-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(244,198,215,0.4), rgba(232,165,184,0.2))',
                  transform: 'translate(10px, 10px)',
                }}
              />
            </div>

            {/* Platform cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 gap-3 mt-6"
            >
              {platforms.map((platform) => (
                <motion.div
                  key={platform.name}
                  variants={fadeUp}
                  className="glass-card p-3 flex items-center gap-3 cursor-pointer"
                  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(217,122,152,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${platform.color}15`, color: platform.color }}
                  >
                    <platform.icon />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                      {platform.followers}
                    </p>
                    <p className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>
                      {platform.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7 lg:pt-8"
          >
            {/* Section label */}
            <div className="section-label mb-6">About Me</div>

            {/* Heading */}
            <h2
              className="heading-editorial mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              The Creative{' '}
              <span className="italic text-gradient">Mind</span>{' '}
              Behind the Lens
            </h2>

            {/* Bio */}
            <div className="space-y-5 mb-10">
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Hi, I'm <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Manisha</strong> — a Jakarta-based content creator and creative director with a passion for 
                capturing the intersection of luxury, beauty, and authentic lifestyle storytelling.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Over the past 6 years, I've collaborated with over 150 premium brands including 
                Dior Beauty, Rhode, Glossier, and Tatcha — creating visual content that doesn't 
                just look beautiful, but <em>feels</em> beautiful.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                My work lives at the intersection of editorial photography, authentic storytelling, 
                and strategic brand communication — crafted for audiences who appreciate the art of elegance.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <p
                className="text-xs tracking-[0.15em] uppercase font-semibold mb-4"
                style={{ color: 'var(--pink-accent)' }}
              >
                Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(232,165,184,0.12)',
                      color: 'var(--text-primary)',
                      border: '1px solid rgba(217,122,152,0.15)',
                    }}
                    whileHover={{
                      background: 'rgba(217,122,152,0.15)',
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Info cards row */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: Camera, label: 'Photography', desc: 'Editorial & Commercial' },
                { icon: () => (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                  </svg>
                ), label: 'Videography', desc: 'Cinematic & Reels' },
                { icon: Pen, label: 'Copywriting', desc: 'Brand Voice & Stories' },
              ].map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="glass-card p-4"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: 'rgba(232,165,184,0.15)', color: 'var(--pink-accent)' }}
                  >
                    <Icon />
                  </div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>
                    {label}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
