import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig, imageZoom, overlayReveal } from '../utils/animations'

import workFashion1 from '../assets/work_fashion1.png'
import workBeauty1 from '../assets/work_beauty1.png'
import workLifestyle1 from '../assets/work_lifestyle1.png'
import workFashion2 from '../assets/work_fashion2.png'

const categories = ['All', 'Fashion', 'Beauty', 'Lifestyle', 'Travel']

const works = [
  {
    id: 1,
    title: 'Silk Season Campaign',
    brand: 'Dior Beauty',
    category: 'Fashion',
    image: workFashion1,
    span: 'tall',
  },
  {
    id: 2,
    title: 'Morning Ritual',
    brand: 'Tatcha',
    category: 'Beauty',
    image: workBeauty1,
    span: 'wide',
  },
  {
    id: 3,
    title: 'Sunday Sanctuary',
    brand: 'Rhode',
    category: 'Lifestyle',
    image: workLifestyle1,
    span: 'normal',
  },
  {
    id: 4,
    title: 'Paris Edit',
    brand: 'Chanel Beauty',
    category: 'Fashion',
    image: workFashion2,
    span: 'tall',
  },
  {
    id: 5,
    title: 'Glow Diary',
    brand: 'Glossier',
    category: 'Beauty',
    image: workBeauty1,
    span: 'normal',
    gradient: 'linear-gradient(135deg, #FDEEF3 0%, #F4C6D7 100%)',
  },
  {
    id: 6,
    title: 'The Art of Stillness',
    brand: 'NARS',
    category: 'Lifestyle',
    image: workLifestyle1,
    span: 'wide',
    gradient: 'linear-gradient(135deg, #FFF5F7 0%, #FDEEF3 100%)',
  },
]

interface WorkCardProps {
  work: typeof works[0]
}

function WorkCard({ work }: WorkCardProps) {
  return (
    <motion.div
      className="relative rounded-[1.5rem] overflow-hidden cursor-pointer group"
      initial="rest"
      whileHover="hover"
      style={{
        boxShadow: '0 8px 32px rgba(217,122,152,0.08)',
        aspectRatio: work.span === 'tall' ? '3/4' : work.span === 'wide' ? '16/10' : '4/5',
      }}
    >
      <motion.img
        src={work.image}
        alt={work.title}
        className="w-full h-full object-cover"
        variants={imageZoom}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6"
        variants={overlayReveal}
        style={{
          background: 'linear-gradient(to top, rgba(64,54,58,0.85) 0%, rgba(64,54,58,0.3) 50%, transparent 80%)',
        }}
      >
        <div>
          <p className="text-xs tracking-widest uppercase text-white/70 mb-1">{work.brand}</p>
          <h3 className="text-lg font-serif font-light text-white mb-3 leading-tight">{work.title}</h3>
          <div className="flex items-center justify-between">
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
            >
              {work.category}
            </span>
            <motion.div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
              whileHover={{ scale: 1.1, background: 'rgba(217,122,152,0.8)' }}
            >
              <ArrowUpRight size={14} className="text-white" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FeaturedWorks() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? works
    : works.filter((w) => w.category === activeCategory)

  return (
    <section
      id="works"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF8FA 0%, #FDEEF3 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <div className="section-label justify-center">Featured Works</div>
          <h2
            className="heading-editorial mt-4 mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            A Visual{' '}
            <span className="italic text-gradient">Portfolio</span>{' '}
            <br className="hidden md:block" />
            of Creative Excellence
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Each project is a collaboration between brand vision and authentic storytelling.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border-none cursor-pointer"
              style={
                activeCategory === cat
                  ? {
                      background: 'var(--pink-accent)',
                      color: '#fff',
                      boxShadow: '0 8px 24px rgba(217,122,152,0.35)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.7)',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(217,122,152,0.15)',
                    }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {filtered.map((work) => (
              <motion.div
                key={work.id}
                variants={fadeUp}
                className="break-inside-avoid mb-5"
              >
                <WorkCard work={work} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-14"
        >
          <motion.button
            className="btn-glass"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            View All Works
            <ArrowUpRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
