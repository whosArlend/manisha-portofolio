import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../../utils/animations'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.966 3-3.143 0-5.408-2.072-5.408-5.328 0-3.526 2.457-5.672 5.429-5.672 3.197 0 5.094 2.158 4.793 5.75h-7.794c.086 1.42 1.077 2.378 2.584 2.378 1.139 0 1.93-.454 2.296-1.128h3.066zm-5.074-4.838c-.022-1.077-.733-1.801-1.897-1.801-1.109 0-1.896.724-1.982 1.801h3.879zm-10.652 4.838c-1.574 0-2.584-.668-2.584-1.921 0-1.034.733-1.68 1.853-1.815l2.673-.323v1.272c0 1.637-1.013 2.787-1.942 2.787zm2.673-6.66c0-.948-.689-1.551-1.81-1.551-.99 0-1.723.496-1.81 1.551h3.62zm-.733-4.34c3.058 0 4.694 1.401 4.694 3.427 0 1.25-.56 2.176-1.572 2.673 1.357.431 2.154 1.508 2.154 2.978 0 2.374-1.917 3.94-5.082 3.94h-6.223v-13.018h6.029z"/>
  </svg>
)

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.118 11.006c-.149-.043-3.692-1.01-7.447-.381 1.564 4.301 2.193 7.766 2.32 8.502 3.125-2.023 5.093-5.367 5.127-8.121zm-7.608 9.54c-.161-.925-.807-4.442-2.39-8.775-6.07 1.807-8.19 5.398-8.28 5.556 1.745 2.215 4.385 3.673 7.375 3.673.865 0 1.701-.122 2.495-.454zm-11.895-4.475c.164-.265 2.656-4.14 8.487-5.836-1.127-2.616-2.457-5.06-2.604-5.34-4.227 1.537-7.234 5.568-7.234 10.305 0 .307.014.609.04.908l1.311-.037zm1.189-11.954c.264.484 1.597 2.923 2.709 5.502 3.528-.54 7.02-.007 7.15.012-.663-1.688-1.579-3.791-2.909-5.789-2.181-.749-4.551-.433-6.95 1.275zm12.393.708c1.328 1.942 2.235 4.004 2.894 5.679 2.973-.424 5.418.172 5.52.198-.444-2.441-1.685-4.59-3.414-6.177-.962.086-3.23.166-5.000.300z"/>
  </svg>
)

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: BehanceIcon, label: 'Behance', href: '#' },
  { icon: DribbbleIcon, label: 'Dribbble', href: '#' },
]

export default function Footer() {
  return (
    <footer
      className="py-12 border-t border-[rgba(217,122,152,0.12)]"
      style={{ background: '#FFF9FA' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand & statement */}
          <div>
            <h3 className="text-lg tracking-[0.2em] uppercase font-serif font-light mb-1" style={{ color: 'var(--text-primary)' }}>
              Manisha
            </h3>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              Graphic Designer & Creative Designer · Jakarta, Indonesia
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(217,122,152,0.16)',
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget
                  target.style.borderColor = 'var(--pink-accent)'
                  target.style.color = 'var(--pink-accent)'
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget
                  target.style.borderColor = 'rgba(217,122,152,0.16)'
                  target.style.color = 'var(--text-secondary)'
                }}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            © 2026 Manisha. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
