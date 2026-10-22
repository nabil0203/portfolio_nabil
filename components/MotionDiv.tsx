'use client'

import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion'

interface MotionDivProps extends HTMLMotionProps<'div'> {
  delay?: number
}

export default function MotionDiv({
  children,
  className,
  delay,
  ...props
}: MotionDivProps) {
  const shouldReduce = useReducedMotion()

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduce ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduce ? 0.2 : 0.65,
        ease: 'easeOut' as const,
        delay: delay ?? 0,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  )
}
