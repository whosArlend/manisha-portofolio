import { motion } from 'framer-motion'
import { Palette, Layout, Share2, Compass, Eye } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Creating cohesive visual identities that help brands become recognizable, authentic, and memorable.',
  },
  {
    icon: Layout,
    title: 'Graphic Design',
    description: 'Designing impactful visual materials for digital and print communication with clean typography.',
  },
  {
    icon: Share2,
    title: 'Social Media Design',
    description: 'Creating consistent, engaging, and high-converting visual content tailored for social platforms.',
  },
  {
    icon: Compass,
    title: 'Creative Campaigns',
    description: 'Developing creative visual concepts and asset suites for marketing campaigns and product launches.',
  },
  {
    icon: Eye,
    title: 'Creative Direction',
    description: 'Defining overarching visual direction and creative strategy to bring brand visions to life.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#FDF1F4' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Offerings</div>
          <h2
            className="heading-editorial mt-3 mb-4"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}
          >
            Design <span className="italic text-gradient">Services</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Specialized design solutions tailored to elevate brand presence and storytelling.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="clean-card p-6 flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: '#FFF9FA',
                    color: 'var(--pink-accent)',
                    border: '1px solid rgba(217,122,152,0.18)',
                  }}
                >
                  <service.icon size={18} />
                </div>

                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
