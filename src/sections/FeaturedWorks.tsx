import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig, imageZoom } from '../utils/animations'

import workFashion1 from '../assets/work_fashion1.png'
import workBeauty1 from '../assets/work_beauty1.png'
import workLifestyle1 from '../assets/work_lifestyle1.png'
import workFashion2 from '../assets/work_fashion2.png'
import workEventPoster from '../assets/work_event_poster.png'
import workSocialMedia from '../assets/work_social_media.png'
import workPresentation from '../assets/work_presentation.png'

const projects = [
  { id: 1, title: 'Campus Event Poster', category: 'Graphic Design', image: workEventPoster },
  { id: 2, title: 'Organization Instagram', category: 'Social Media Design', image: workSocialMedia },
  { id: 3, title: 'Event Documentation', category: 'Other', image: workFashion1 },
  { id: 4, title: 'Competition Poster', category: 'Video Design', image: workBeauty1 },
  { id: 5, title: 'Presentation Deck', category: 'Graphic Design', image: workPresentation },
  { id: 6, title: 'Social Media Campaign', category: 'Social Media Design', image: workLifestyle1 },
  { id: 7, title: 'Event Announcement', category: 'Graphic Design', image: workFashion2 },
  { id: 8, title: 'Creative Visual Set', category: 'Other', image: workEventPoster },
  { id: 9, title: 'Brand Identity Mockup', category: 'Other', image: workBeauty1 },
  { id: 10, title: 'Student Workshop Deck', category: 'Video Design', image: workPresentation },
]

const categories = ['All', 'Graphic Design', 'Social Media Design', 'Video Design', 'Other']
const INITIAL_COUNT = 6

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isExpanded, setIsExpanded] = useState(false)

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true
    return project.category === selectedCategory
  })

  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT)
  const remainingCount = Math.max(0, filteredProjects.length - INITIAL_COUNT)

  return (
    <section
      id="works"
      className="section-pad"
      style={{ background: '#FFFFFF' }}
    >
      <div className="container-main">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ marginBottom: '2.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'rgba(217, 120, 152, 0.15)',
                color: 'var(--pink-accent)',
              }}
            >
              <Sparkles size={11} />
            </span>
            <p style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--pink-accent)',
            }}>
              Portfolio
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <h2 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: 'var(--text-dark)',
                lineHeight: 1.15,
                marginBottom: '0.5rem',
              }}>
                Things I've Created.
              </h2>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                maxWidth: '28rem',
                lineHeight: 1.6,
              }}>
                A curated collection of visual work shaped by creativity, curiosity, and a love for good design.
              </p>
            </div>

            {/* Category Filter Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat)
                      setIsExpanded(false)
                    }}
                    style={{
                      padding: '0.4rem 0.9rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: isActive ? 600 : 500,
                      cursor: 'pointer',
                      border: isActive
                        ? '1px solid var(--pink-accent)'
                        : '1px solid rgba(217, 120, 152, 0.18)',
                      background: isActive ? 'var(--pink-accent)' : 'rgba(255, 247, 250, 0.6)',
                      color: isActive ? '#FFFFFF' : 'var(--text-dark)',
                      transition: 'all 0.25s ease',
                      outline: 'none',
                    }}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="works-grid"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{ cursor: 'pointer' }}
                className="work-item"
              >
                {/* Image */}
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '1rem',
                    aspectRatio: '4/3',
                    marginBottom: '0.75rem',
                    background: 'var(--bg-soft)',
                    border: '1px solid rgba(217, 120, 152, 0.12)',
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    variants={imageZoom}
                    initial="rest"
                    whileHover="hover"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div
                    className="work-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '1.25rem',
                      background: 'linear-gradient(to top, rgba(48,40,44,0.75) 0%, rgba(48,40,44,0.2) 60%, transparent 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <div>
                        <p style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.3 }}>{project.title}</p>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{project.category}</p>
                      </div>
                      <div style={{
                        width: '2.25rem',
                        height: '2.25rem',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}>
                        <ArrowUpRight size={15} color="#fff" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Label below */}
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.4 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    {project.category}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse Button */}
        {filteredProjects.length > INITIAL_COUNT && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '3.5rem',
              gap: '0.75rem',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.8rem 1.75rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF7FA 100%)',
                border: '1.5px solid rgba(217, 120, 152, 0.35)',
                color: 'var(--text-dark)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 20px -2px rgba(217, 120, 152, 0.15)',
                transition: 'all 0.25s ease',
              }}
            >
              <span>{isExpanded ? 'Show Less Works' : 'View More Projects'}</span>
              {!isExpanded && remainingCount > 0 && (
                <span
                  style={{
                    background: 'var(--pink-accent)',
                    color: '#FFFFFF',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                  }}
                >
                  +{remainingCount}
                </span>
              )}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <ChevronDown size={16} style={{ color: 'var(--pink-accent)' }} />
              </motion.span>
            </motion.button>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              Showing {visibleProjects.length} of {filteredProjects.length} projects
            </p>
          </motion.div>
        )}

      </div>

      <style>{`
        .work-item:hover .work-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  )
}
