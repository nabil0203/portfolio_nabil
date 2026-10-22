'use client'

import { personalInfo } from '@/data/portfolioData'
import { User, Sparkles } from 'lucide-react'

export default function SummarySection() {
  return (
    <div className="relative group h-full">
      <div className="relative h-full bg-steel-100  border border-steel-300 rounded-xl p-6 sm:p-8 shadow-none overflow-hidden flex flex-col transition-all duration-300 group-hover:border-steel-300">

        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className="p-3 bg-accent/10 rounded-lg border border-accent/20 shadow-none">
            <User className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
          </div>
          <div className="flex flex-col">
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Professional
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-steel-800 leading-none tracking-tight">
              SUMMARY
            </h3>
          </div>
        </div>

        <div className="text-secondary leading-relaxed text-sm sm:text-base relative z-10 space-y-5 flex-1">
          {personalInfo.aboutDescription.map((item, idx) => (
            <p key={idx} className="group-hover:text-steel-600 transition-colors duration-300">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
