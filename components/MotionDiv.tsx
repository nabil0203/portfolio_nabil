'use client'

import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion'

interface MotionDivProps extends HTMLMotionProps<'div'> {
  delay?: number
}

/**
 * Global scroll-reveal wrapper.
 * Respects the user's OS `prefers-reduced-motion` setting:
 * - Normal: fades up from 30px below over 0.5s
 * - Reduced: simple opacity fade only (no movement)
 */
export default function MotionDiv({ children, className, delay, ...props }: MotionDivProps) {
  const shouldReduce = useReducedMotion()

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduce ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{
        duration: shouldReduce ? 0.2 : 0.5,
        ease: 'easeOut',
        delay: delay || 0,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
