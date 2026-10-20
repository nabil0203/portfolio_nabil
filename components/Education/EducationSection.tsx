'use client'

import { motion } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import SectionHeader from '../SectionHeader'
import { educationData } from '@/data/portfolioData'
import { Education } from '@/data/portfolioDataTypes'
import EducationCard from './EducationCard'

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-20 scroll-mt-16 bg-steel-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      </div>

      <div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <SectionHeader label="Academic" highlight="Journey" className="mb-12" />

          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Bar */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 lg:-translate-x-1/2 bg-steel-300" />

            <div className="space-y-8 md:space-y-12">
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

function TimelineItem({ edu, index }: { edu: Education; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex items-center justify-between w-full mb-8 last:mb-0 group ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      {/* Content Card Area */}
      <div className="w-full lg:w-[48%] pl-12 lg:pl-0">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.3, delay: index * 0.1 }}
        >
          <EducationCard edu={edu} isRightSide={isEven} />
        </motion.div>
      </div>

      {/* Dot on the bar */}
      <div className="absolute left-4 lg:left-1/2 w-8 h-8 rounded-full bg-steel-50 border-2 border-accent/30 flex items-center justify-center -translate-x-1/2 z-20 shadow-none transition-all duration-500 group-hover:border-accent">
        <div className={`w-3 h-3 rounded-full ${index % 3 === 0 ? 'bg-accent' :
          index % 3 === 1 ? 'bg-accent-secondary' :
            'bg-accent-glow'
          } animate-pulse shadow-none`} />
      </div>

      {/* Empty space for the other side on desktop */}
      <div className="hidden lg:block lg:w-[48%]" />
    </div>
  )
}
