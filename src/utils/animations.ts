import type { Variants } from 'framer-motion'

// Fade Up — standard section entry animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

// Blur Reveal — hero text reveal
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
  },
}

// Scale In — card entrance
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
}

// Stagger children container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

// Stagger children container (faster)
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

// Image zoom on hover
export const imageZoom: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

// Card lift on hover
export const cardLift: Variants = {
  rest: { y: 0, boxShadow: '0 8px 32px rgba(217, 122, 152, 0.08)' },
  hover: {
    y: -8,
    boxShadow: '0 24px 64px rgba(217, 122, 152, 0.18)',
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
}

// Overlay reveal on hover
export const overlayReveal: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// Float animation (for decorative elements)
export const floatAnimation: Variants = {
  animate: {
    y: [0, -16, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Float delayed
export const floatDelayed: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 2,
    },
  },
}

// Viewport config (shared)
export const viewportConfig = {
  once: true,
  margin: '-80px',
}
