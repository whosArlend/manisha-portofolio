import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig, scaleIn } from '../utils/animations'

const videos = [
  {
    id: 1,
    title: 'Morning Skincare Routine ft. Tatcha',
    platform: 'YouTube',
    views: '2.4M views',
    gradient: 'linear-gradient(135deg, #FDEEF3, #F4C6D7)',
    duration: '12:34',
    platformColor: '#FF0000',
  },
  {
    id: 2,
    title: 'Get Ready With Me — Dior Beauty',
    platform: 'TikTok',
    views: '5.1M views',
    gradient: 'linear-gradient(135deg, #FFF5F7, #FDEEF3)',
    duration: '3:21',
    platformColor: '#010101',
  },
  {
    id: 3,
    title: 'Paris Fashion Week Vlog',
    platform: 'YouTube',
    views: '890K views',
    gradient: 'linear-gradient(135deg, #F4C6D7, #FFF8FA)',
    duration: '18:05',
    platformColor: '#FF0000',
  },
  {
    id: 4,
    title: 'Rhode Lip Treatment Review',
    platform: 'Instagram Reels',
    views: '3.2M views',
    gradient: 'linear-gradient(135deg, #FDEEF3, #FFF5F7)',
    duration: '0:59',
    platformColor: '#E4405F',
  },
  {
    id: 5,
    title: 'Luxury Lifestyle Day In My Life',
    platform: 'TikTok',
    views: '4.7M views',
    gradient: 'linear-gradient(135deg, #FFF8FA, #F4C6D7)',
    duration: '5:15',
    platformColor: '#010101',
  },
]

const platformIcon = (platform: string) => {
  if (platform === 'YouTube') return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
  if (platform === 'TikTok') return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  )
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(0)
  const [carouselStart, setCarouselStart] = useState(0)

  const visibleCount = 3
  const visibleVideos = videos.slice(carouselStart, carouselStart + visibleCount)

  return (
    <section
      id="video"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: '#FFF5F7' }}
    >
      {/* Orb decoration */}
      <div
        className="gradient-orb w-[400px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #E8A5B8, transparent 70%)',
          bottom: '-5%',
          right: '-5%',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <div className="section-label justify-center">Video Showcase</div>
          <h2
            className="heading-editorial mt-4 mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Stories Told{' '}
            <span className="italic text-gradient">Through Film</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            From cinematic vlogs to quick-fire Reels — every video is crafted with intention.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-10"
        >
          <div
            className="relative rounded-[2rem] overflow-hidden flex items-center justify-center"
            style={{
              background: videos[activeVideo].gradient,
              aspectRatio: '16/9',
              boxShadow: '0 24px 80px rgba(217,122,152,0.15)',
            }}
          >
            {/* Decorative content inside the video placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  boxShadow: '0 8px 32px rgba(217,122,152,0.25)',
                }}
              >
                <Play size={32} style={{ color: 'var(--pink-accent)', marginLeft: 4 }} />
              </div>
              <h3
                className="font-serif font-light text-2xl mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {videos[activeVideo].title}
              </h3>
              <div className="flex items-center gap-3">
                <span
                  className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    color: videos[activeVideo].platformColor,
                  }}
                >
                  {platformIcon(videos[activeVideo].platform)}
                  {videos[activeVideo].platform}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {videos[activeVideo].views}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {videos[activeVideo].duration}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="flex items-center gap-4">
          <motion.button
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-none cursor-pointer"
            style={{
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(217,122,152,0.15)',
              color: 'var(--text-secondary)',
            }}
            whileHover={{ scale: 1.1, background: 'var(--pink-accent)', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCarouselStart(Math.max(0, carouselStart - 1))}
            disabled={carouselStart === 0}
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </motion.button>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex-1 grid grid-cols-3 gap-4"
          >
            {visibleVideos.map((video, i) => (
              <motion.div
                key={video.id}
                variants={fadeUp}
                className={`relative rounded-[1.25rem] overflow-hidden cursor-pointer transition-all duration-300 ${
                  videos.indexOf(video) === activeVideo ? 'ring-2' : ''
                }`}
                style={{
                  background: video.gradient,
                  aspectRatio: '16/10',
                  ringColor: 'var(--pink-accent)',
                  boxShadow: videos.indexOf(video) === activeVideo
                    ? '0 8px 32px rgba(217,122,152,0.25)'
                    : '0 4px 16px rgba(217,122,152,0.08)',
                }}
                onClick={() => setActiveVideo(videos.indexOf(video))}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
                    style={{ background: 'rgba(255,255,255,0.85)' }}
                  >
                    <Play size={14} style={{ color: 'var(--pink-accent)', marginLeft: 2 }} />
                  </div>
                  <p
                    className="text-center text-xs font-medium leading-tight px-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {video.title}
                  </p>
                  <span
                    className="mt-1.5 text-xs flex items-center gap-1"
                    style={{ color: video.platformColor }}
                  >
                    {platformIcon(video.platform)}
                    {video.platform}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-none cursor-pointer"
            style={{
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(217,122,152,0.15)',
              color: 'var(--text-secondary)',
            }}
            whileHover={{ scale: 1.1, background: 'var(--pink-accent)', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCarouselStart(Math.min(videos.length - visibleCount, carouselStart + 1))}
            disabled={carouselStart + visibleCount >= videos.length}
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
