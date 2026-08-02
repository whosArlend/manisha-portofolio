import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig, imageZoom, overlayReveal } from '../utils/animations'

import workFashion1 from '../assets/work_fashion1.png'
import workBeauty1 from '../assets/work_beauty1.png'
import workLifestyle1 from '../assets/work_lifestyle1.png'
import workFashion2 from '../assets/work_fashion2.png'

const categories = [
  'All',
  'Brand Identity',
  'Social Media Design',
  'Campaign Design',
  'Editorial Design',
  'Digital Creative',
  'Creative Direction',
]

const projects = [
  {
    id: 1,
    title: 'Aura Luxury Skincare',
    category: 'Brand Identity',
    image: workBeauty1,
  },
  {
    id: 2,
    title: 'Maison de Soie Campaign',
    category: 'Campaign Design',
    image: workFashion1,
  },
  {
    id: 3,
    title: 'Lumière Editorial Lookbook',
    category: 'Editorial Design',
    image: workFashion2,
  },
  {
    id: 4,
    title: 'Velvet Rose Social Suite',
    category: 'Social Media Design',
    image: workLifestyle1,
  },
  {
    id: 5,
    title: 'Botanique Botanical Identity',
    category: 'Brand Identity',
    image: workBeauty1,
  },
  {
    id: 6,
    title: 'Elysian Studio Direction',
    category: 'Creative Direction',
    image: workLifestyle1,
  },
]

export default function FeaturedWorks() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section
      id="works"
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
          className="text-center mb-12"
        >
          <div className="section-label justify-center">Portfolio</div>
          <h2
            className="heading-editorial mt-3 mb-4"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}
          >
            Selected <span className="italic text-gradient">Works</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A collection of brand identity, editorial, and digital design projects.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border-none cursor-pointer"
              style={
                activeCategory === cat
                  ? {
                      background: 'var(--pink-accent)',
                      color: '#ffffff',
                      boxShadow: '0 4px 14px rgba(217,122,152,0.3)',
                    }
                  : {
                      background: '#FFFFFF',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(217,122,152,0.14)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Clean Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="clean-card overflow-hidden group cursor-pointer"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '4/3' }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    variants={imageZoom}
                    initial="rest"
                    whileHover="hover"
                    loading="lazy"
                  />
                  {/* Subtle overlay */}
                  <motion.div
                    variants={overlayReveal}
                    initial="rest"
                    whileHover="hover"
                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <ArrowUpRight size={18} className="text-[var(--text-primary)]" />
                    </div>
                  </motion.div>
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-medium text-lg mb-0.5" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {project.category}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--pink-accent)] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-12"
        >
          <button className="btn-secondary text-xs py-2.5 px-6">
            View All Projects
            <ArrowUpRight size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
