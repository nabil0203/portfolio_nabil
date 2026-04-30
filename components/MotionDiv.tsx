'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionDivProps extends HTMLMotionProps<'div'> {
  delay?: number
}

const variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function MotionDiv({ children, className, delay, ...props }: MotionDivProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: delay || 0
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
