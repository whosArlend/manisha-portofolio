import type { Variants } from 'framer-motion'

// Fade Up — standard section entry animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Stagger children container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

// Image zoom on hover
export const imageZoom: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Viewport config (shared)
export const viewportConfig = {
  once: true,
  margin: '-60px',
}
