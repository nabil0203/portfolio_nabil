'use client'

import { createContext, useContext, ReactNode, useEffect, useRef } from 'react'
import { useMotionValue, useSpring, MotionValue } from 'framer-motion'

interface MousePositionContextValue {
  smoothMouseX: MotionValue<number>
  smoothMouseY: MotionValue<number>
}

const MousePositionContext = createContext<MousePositionContextValue | null>(null)

/**
 * Single global mouse-position tracker.
 * Uses requestAnimationFrame to throttle updates to the display refresh rate,
 * preventing Framer from processing 200+ raw events per second on fast moves.
 * Higher damping (80) means the spring settles faster → less ongoing computation.
 */
export function MousePositionProvider({ children }: { children: ReactNode }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Higher damping: spring settles quickly → fewer frames of computation
  const smoothMouseX = useSpring(mouseX, { damping: 80, stiffness: 100 })
  const smoothMouseY = useSpring(mouseY, { damping: 80, stiffness: 100 })

  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Cancel any pending frame before scheduling a new one (throttles to display refresh rate)
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX / window.innerWidth - 0.5)
        mouseY.set(e.clientY / window.innerHeight - 0.5)
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [mouseX, mouseY])

  return (
    <MousePositionContext.Provider value={{ smoothMouseX, smoothMouseY }}>
      {children}
    </MousePositionContext.Provider>
  )
}

/**
 * Consume the global smooth mouse position.
 * Must be used inside <MousePositionProvider>.
 */
export function useMousePositionContext(): MousePositionContextValue {
  const ctx = useContext(MousePositionContext)
  if (!ctx) throw new Error('useMousePositionContext must be used inside <MousePositionProvider>')
  return ctx
}
