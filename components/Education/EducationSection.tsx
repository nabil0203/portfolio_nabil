'use client'

import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { educationData } from '@/data/portfolioData'
import { Education } from '@/data/portfolioDataTypes'
import EducationCard from './EducationCard'

// "Jan 2023 - Dec 2026" -> { years: "2023 – 2026", months: "Jan – Dec" }
const parsePeriod = (period: string) => {
  const m = period.match(/([A-Za-z]+)\s+(\d{4})\s*[-–]\s*([A-Za-z]+)\s+(\d{4})/)
  return m ? { years: `${m[2]} – ${m[4]}`, months: `${m[1]} – ${m[3]}` } : { years: period, months: '' }
}

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-20 scroll-mt-16 bg-steel-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader label="Academic" highlight="Journey" className="mb-8 md:mb-12" />

        <ol>
          {educationData.map((edu, index) => (
            <TimelineItem
              key={edu.institution + index}
              edu={edu}
              index={index}
              isLast={index === educationData.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

/**
 * Phones:  rail | [date, card] stacked.
 * Desktop: date | rail | card on one line.
 */
function TimelineItem({ edu, index, isLast }: { edu: Education; index: number; isLast: boolean }) {
  const { years, months } = parsePeriod(edu.graduation)

  return (
    <li className="relative grid grid-cols-[1.25rem_1fr] gap-x-3 pb-6 last:pb-0 sm:gap-x-4 lg:grid-cols-[9rem_1.5rem_1fr] lg:gap-x-8 lg:pb-8">
      {/* Date */}
      <div className="col-start-2 row-start-1 pb-2 lg:col-start-1 lg:pb-0 lg:pt-1 lg:text-right">
        <p className="font-display text-base font-bold tabular-nums text-steel-800 lg:text-lg">{years}</p>
        {months && <p className="text-sm text-steel-500">{months}</p>}
      </div>

      {/* Rail + dot */}
      <div className="relative col-start-1 row-span-2 row-start-1 lg:col-start-2 lg:row-span-1" aria-hidden="true">
        {!isLast && <span className="absolute left-1/2 top-3 -bottom-[30px] w-px -translate-x-1/2 bg-steel-300 lg:-bottom-[42px]" />}
        <span className="absolute left-1/2 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-steel-700 bg-steel-50 lg:top-2.5" />
      </div>

      {/* Card */}
      <motion.div
        className="col-start-2 row-start-2 lg:col-start-3 lg:row-start-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      >
        <EducationCard edu={edu} />
      </motion.div>
    </li>
  )
}