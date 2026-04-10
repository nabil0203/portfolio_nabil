'use client'

import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

interface UseMousePositionOptions {
  damping?: number
  stiffness?: number
}

export const useMousePosition = (options: UseMousePositionOptions = {}) => {
  const { damping = 50, stiffness = 100 } = options
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping, stiffness }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize position to -0.5 to 0.5
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return { smoothMouseX, smoothMouseY }
}
