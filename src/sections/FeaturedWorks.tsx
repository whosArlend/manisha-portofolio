import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig, imageZoom } from '../utils/animations'

import workFashion1 from '../assets/work_fashion1.png'
import workBeauty1 from '../assets/work_beauty1.png'
import workLifestyle1 from '../assets/work_lifestyle1.png'
import workFashion2 from '../assets/work_fashion2.png'
import workEventPoster from '../assets/work_event_poster.png'
import workSocialMedia from '../assets/work_social_media.png'
import workPresentation from '../assets/work_presentation.png'

const projects = [
  { id: 1, title: 'Campus Event Poster', category: 'Event Design', image: workEventPoster },
  { id: 2, title: 'Organization Instagram', category: 'Social Media Design', image: workSocialMedia },
  { id: 3, title: 'Event Documentation', category: 'Creative Editing', image: workFashion1 },
  { id: 4, title: 'Competition Poster', category: 'Graphic Design', image: workBeauty1 },
  { id: 5, title: 'Presentation Deck', category: 'Presentation Design', image: workPresentation },
  { id: 6, title: 'Social Media Campaign', category: 'Digital Design', image: workLifestyle1 },
  { id: 7, title: 'Event Announcement', category: 'Visual Content', image: workFashion2 },
  { id: 8, title: 'Creative Visual Set', category: 'Graphic Design', image: workEventPoster },
]

export default function Works() {
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
          style={{ marginBottom: '3.5rem' }}
        >
          <p style={{
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--pink-accent)',
            marginBottom: '1rem',
          }}>
            Portfolio
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: 'var(--text-dark)',
              lineHeight: 1.15,
            }}>
              Things I've Created.
            </h2>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              maxWidth: '20rem',
              lineHeight: 1.6,
            }}>
              A collection of visual work, event projects, and designs I've enjoyed creating.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="works-grid"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
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
                    padding: '1rem',
                    background: 'linear-gradient(to top, rgba(48,40,44,0.65) 0%, transparent 60%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div>
                      <p style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.3 }}>{project.title}</p>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{project.category}</p>
                    </div>
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <ArrowUpRight size={14} color="#fff" />
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
        </motion.div>

      </div>

      <style>{`
        .work-item:hover .work-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  )
}
