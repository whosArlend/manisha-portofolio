import { useRef, useCallback } from 'react'

export function useMagneticButton() {
  const ref = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const strength = 0.3
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0px, 0px)'
    ref.current.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  }, [])

  return { ref, handleMouseMove, handleMouseLeave }
}
