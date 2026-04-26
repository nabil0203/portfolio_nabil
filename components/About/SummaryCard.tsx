'use client'

import { motion, MotionValue } from 'framer-motion'
import MotionDiv from '../Shared/MotionDiv'
import { personalInfo } from '@/data/portfolioData'
import { User } from 'lucide-react'

interface SummaryCardProps {
  x1: MotionValue<number>
  y1: MotionValue<number>
  x2: MotionValue<number>
  y2: MotionValue<number>
}

export default function SummaryCard({ x1, y1, x2, y2 }: SummaryCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-surface/50 to-accent-secondary/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative bg-surface/30 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <div className="p-2.5 bg-accent/10 rounded-xl border border-accent/20">
            <User className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.10em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 leading-none">
              Summary
            </h3>
          </div>
        </div>
        <div className="text-gray-400 leading-relaxed text-sm sm:text-base relative z-10 space-y-3">
          {personalInfo.aboutDescription.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <motion.div style={{ x: x1, y: y1 }} className="absolute top-4 right-4 w-20 h-20 bg-accent-glow/10 rounded-full blur-2xl z-0 pointer-events-none" />
        <motion.div style={{ x: x2, y: y2 }} className="absolute bottom-4 left-4 w-16 h-16 bg-accent-secondary/15 rounded-full blur-xl z-0 pointer-events-none" />
      </div>
    </div>
  )
}
