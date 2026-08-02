import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understanding the brand, audience, goals, and creative direction through strategic research.',
  },
  {
    step: '02',
    title: 'Define',
    description: 'Developing concepts, mood boards, visual direction, and comprehensive design strategy.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Transforming ideas into refined and meaningful visual work with meticulous attention to detail.',
  },
  {
    step: '04',
    title: 'Deliver',
    description: 'Preparing polished design assets and brand guidelines ready for real-world application.',
  },
]

export default function CreativeProcess() {
  return (
    <section
      id="process"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#FFFFFF' }}
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
          <div className="section-label justify-center">Workflow</div>
          <h2
            className="heading-editorial mt-3 mb-4"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}
          >
            Creative <span className="italic text-gradient">Process</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A structured, collaborative approach to creating memorable visual work.
          </p>
        </motion.div>

        {/* 4 Steps Horizontal Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {processSteps.map((item) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="clean-card p-6 flex flex-col justify-between"
            >
              <div>
                <span
                  className="font-serif text-3xl font-light block mb-3"
                  style={{ color: 'var(--pink-accent)' }}
                >
                  {item.step}
                </span>
                <h3
                  className="font-serif text-xl font-medium mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
