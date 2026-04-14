'use client'

import { motion, useTransform } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import { personalInfo } from '@/data/portfolioData'
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
    <section id="about" className="py-12 scroll-mt-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white relative group">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">Me</span>
          </h2>
          <div className="h-1.5 w-28 bg-gradient-to-r from-accent via-accent-secondary to-accent-glow mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
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
