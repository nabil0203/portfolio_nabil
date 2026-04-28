'use client'

import { motion, useTransform } from 'framer-motion'
import MotionDiv from '../MotionDiv'

import { useMousePosition } from '@/hooks/useMousePosition'
import SummaryCard from './SummaryCard'
import EducationCard from './EducationCard'

export default function AboutSection() {
  const { smoothMouseX, smoothMouseY } = useMousePosition()

  const x1 = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30])
  const y1 = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30])

  const x2 = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40])
  const y2 = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40])

  return (
    <section id="about" className="pt-12 pb-24 md:pb-32 scroll-mt-24 lg:scroll-mt-0 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">Me</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-accent-secondary/60" />
            <div className="h-px w-24 bg-gradient-to-r from-accent/50 via-accent-secondary/60 to-accent-glow/50 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-accent-glow/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50 rounded-full" />
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SummaryCard x1={x1} y1={y1} x2={x2} y2={y2} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <EducationCard x1={x1} y1={y1} x2={x2} y2={y2} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
