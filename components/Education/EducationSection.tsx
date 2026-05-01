'use client'

import { motion } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import { educationData } from '@/data/portfolioData'
import EducationCard from './EducationCard'

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 scroll-mt-24 lg:scroll-mt-0 bg-[#030712] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern-faint opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-content">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <MotionDiv className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">Journey</span>
            </h2>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50 rounded-full" />
              <div className="h-2 w-2 rounded-full bg-accent-secondary/60 animate-pulse" />
              <div className="h-px w-24 bg-gradient-to-r from-accent/50 via-accent-secondary/60 to-accent-glow/50 rounded-full" />
              <div className="h-2 w-2 rounded-full bg-accent-glow/60 animate-pulse" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50 rounded-full" />
            </div>
          </MotionDiv>

          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Bar */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent-secondary/40 to-accent-glow/20 md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              {educationData.map((edu, index) => (
                <TimelineItem
                  key={edu.institution + index}
                  edu={edu}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ edu, index }: { edu: any, index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex items-center justify-between w-full mb-8 last:mb-0 group ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Content Card Area */}
      <div className="w-full md:w-[48%] pl-12 md:pl-0">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: index * 0.1 }}
        >
          <EducationCard edu={edu} isRightSide={isEven} />
        </motion.div>
      </div>

      {/* Dot on the bar */}
      <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-accent/30 flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500 group-hover:border-accent">
        <div className={`w-3 h-3 rounded-full ${index % 3 === 0 ? 'bg-accent' :
            index % 3 === 1 ? 'bg-accent-secondary' :
              'bg-accent-glow'
          } animate-pulse shadow-[0_0_10px_currentColor]`} />
      </div>

      {/* Empty space for the other side on desktop */}
      <div className="hidden md:block md:w-[48%]" />
    </div>
  )
}
