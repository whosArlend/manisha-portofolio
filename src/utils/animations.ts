import type { Variants } from 'framer-motion'

// Fade Up — standard section entry animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Blur Reveal — hero text reveal (subtle)
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(6px)', y: 15 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Scale In — clean entrance
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Stagger children container
export const staggerContainer: Variants = {
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
    scale: 1.04,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Card lift on hover
export const cardLift: Variants = {
  rest: { y: 0, boxShadow: '0 4px 20px rgba(217, 122, 152, 0.06)' },
  hover: {
    y: -4,
    boxShadow: '0 12px 32px rgba(217, 122, 152, 0.12)',
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Overlay reveal on hover
export const overlayReveal: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

// Viewport config (shared)
export const viewportConfig = {
  once: true,
  margin: '-50px',
}
