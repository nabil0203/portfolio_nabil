'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionDivProps {
  children: ReactNode
  className?: string
  delay?: number
}

const variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function MotionDiv({ children, className, delay }: MotionDivProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={variants}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay || 0
      }}
    >
      {children}
    </motion.div>
  )
}
