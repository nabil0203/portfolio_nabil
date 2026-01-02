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
      viewport={{ once: false, amount: 0.1 }}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: delay || 0.1
      }}
    >
      {children}
    </motion.div>
  )
}
