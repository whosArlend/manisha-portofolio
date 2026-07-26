import { motion } from 'framer-motion'
import { Camera, Film, Lightbulb, Image, Megaphone, Users } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const services = [
  {
    icon: Film,
    title: 'Content Creation',
    description: 'Scroll-stopping social content crafted for maximum engagement, reach, and brand recall.',
    tags: ['Instagram', 'TikTok', 'YouTube'],
  },
  {
    icon: Users,
    title: 'UGC Production',
    description: 'Authentic user-generated style content that converts — raw, relatable, and results-driven.',
    tags: ['Ads', 'E-Commerce', 'Social'],
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Editorial and commercial photography that elevates your brand identity with precision and artistry.',
    tags: ['Editorial', 'Product', 'Lifestyle'],
  },
  {
    icon: Image,
    title: 'Videography',
    description: 'Cinematic short-form and long-form video production tailored for digital-first storytelling.',
    tags: ['Reels', 'TikTok', 'Campaigns'],
  },
  {
    icon: Lightbulb,
    title: 'Creative Direction',
    description: 'End-to-end creative vision — concept to final frame — for brands who demand the extraordinary.',
    tags: ['Concept', 'Art Direction', 'Styling'],
  },
  {
    icon: Megaphone,
    title: 'Brand Campaigns',
    description: 'Full campaign management from strategy and creative to execution and performance analytics.',
    tags: ['Strategy', 'Execution', 'Analytics'],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FDEEF3 0%, #FFF5F7 100%)' }}
    >
      {/* Decoration */}
      <div
        className="gradient-orb w-[450px] h-[450px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #E8A5B8, transparent 70%)',
          top: '-10%',
          right: '-5%',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="section-label">What I Offer</div>
            <h2
              className="heading-editorial mt-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Premium{' '}
              <span className="italic text-gradient">Services</span>
              <br />
              for Elevated Brands
            </h2>
          </div>
          <p className="text-base max-w-sm" style={{ color: 'var(--text-secondary)' }}>
            Everything your brand needs to stand out — beautifully and strategically.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              custom={i}
              className="glass-card p-7 group cursor-pointer relative overflow-hidden"
              whileHover={{ y: -8, boxShadow: '0 24px 64px rgba(217,122,152,0.18)' }}
              transition={{ duration: 0.35 }}
            >
              {/* Hover glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, rgba(232,165,184,0.15), transparent 70%)' }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(232,165,184,0.15), rgba(244,198,215,0.2))',
                  color: 'var(--pink-accent)',
                }}
              >
                <service.icon size={22} />
              </div>

              <h3
                className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[var(--pink-accent)]"
                style={{ color: 'var(--text-primary)' }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(232,165,184,0.1)',
                      color: 'var(--pink-accent)',
                      border: '1px solid rgba(217,122,152,0.15)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom border on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(90deg, transparent, var(--pink-accent), transparent)' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-14"
        >
          <p className="text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
            Ready to create something extraordinary together?
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
