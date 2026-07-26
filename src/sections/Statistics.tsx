import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Eye, Briefcase, Megaphone, Handshake } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import { useCountUp } from '../hooks/useScrollAnimation'

const stats = [
  {
    icon: Users,
    value: 2100000,
    display: '2.1M+',
    label: 'Total Followers',
    desc: 'Across all platforms',
    color: '#E8A5B8',
  },
  {
    icon: Eye,
    value: 500000,
    display: '500K+',
    label: 'Monthly Views',
    desc: 'Average per month',
    color: '#D97A98',
  },
  {
    icon: Briefcase,
    value: 300,
    display: '300+',
    label: 'Projects Completed',
    desc: 'Since 2018',
    color: '#F4C6D7',
    textDark: true,
  },
  {
    icon: Megaphone,
    value: 150,
    display: '150+',
    label: 'Brand Campaigns',
    desc: 'Paid collaborations',
    color: '#E8A5B8',
  },
  {
    icon: Handshake,
    value: 80,
    display: '80+',
    label: 'Brand Partners',
    desc: 'Long-term relationships',
    color: '#D97A98',
  },
]

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useCountUp(stat.value, 2200, isInView)

  const displayValue = stat.display.replace(/\d+(\.\d+)?/, () => {
    if (stat.value >= 1000000) return `${(count / 1000000).toFixed(1)}`
    if (stat.value >= 1000) return `${Math.round(count / 1000)}`
    return `${count}`
  })

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      variants={fadeUp}
      custom={index}
      className="glass-card p-7 flex flex-col relative overflow-hidden group"
      whileHover={{ y: -8, boxShadow: '0 24px 64px rgba(217,122,152,0.18)' }}
      transition={{ duration: 0.35 }}
    >
      {/* Background tint */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/3 translate-x-1/3 transition-transform duration-500 group-hover:scale-125"
        style={{ background: `${stat.color}20` }}
      />

      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 relative z-10"
        style={{ background: `${stat.color}20`, color: stat.color === '#F4C6D7' ? 'var(--pink-accent)' : stat.color }}
      >
        <stat.icon size={20} />
      </div>

      <div className="relative z-10">
        <motion.p
          className="font-serif font-light mb-1"
          style={{ fontSize: '3rem', lineHeight: 1, color: 'var(--text-primary)' }}
        >
          {displayValue}
        </motion.p>
        <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
          {stat.label}
        </p>
        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          {stat.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: '#FFF8FA' }}
    >
      {/* Decorative orbs */}
      <div
        className="gradient-orb w-[500px] h-[500px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #F4C6D7, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Impact in Numbers</div>
          <h2
            className="heading-editorial mt-4 mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Creating{' '}
            <span className="italic text-gradient">Real Impact</span>
            <br className="hidden md:block" />
            for Every Brand
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
