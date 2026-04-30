'use client'

import { motion, MotionValue } from 'framer-motion'
import { personalInfo } from '@/data/portfolioData'
import { User, Sparkles } from 'lucide-react'

interface SummarySectionProps {
  x1: MotionValue<number>
  y1: MotionValue<number>
  x2: MotionValue<number>
  y2: MotionValue<number>
}

export default function SummarySection({ x1, y1, x2, y2 }: SummarySectionProps) {
  return (
    <div className="relative group h-full">
      {/* Premium glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent-glow/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      
      <div className="relative h-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 group-hover:border-slate-700/60">
        
        {/* Background Decorative Gradient */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-accent/10 transition-colors duration-500" />
        
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className="p-3 bg-accent/10 rounded-2xl border border-accent/20 shadow-inner">
            <User className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
          </div>
          <div className="flex flex-col">
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Professional
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-none tracking-tight">
              SUMMARY
            </h3>
          </div>
        </div>

        <div className="text-secondary leading-relaxed text-sm sm:text-base relative z-10 space-y-5 flex-1">
          {personalInfo.aboutDescription.map((item, idx) => (
            <p key={idx} className="group-hover:text-white/80 transition-colors duration-300">
              {item}
            </p>
          ))}
        </div>

        {/* Floating background elements */}
        <motion.div style={{ x: x1, y: y1 }} className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent-glow/5 rounded-full blur-[80px] z-0 pointer-events-none" />
        <motion.div style={{ x: x2, y: y2 }} className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-accent-secondary/10 rounded-full blur-[60px] z-0 pointer-events-none" />
      </div>
    </div>
  )
}
