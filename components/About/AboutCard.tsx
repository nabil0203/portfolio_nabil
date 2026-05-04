'use client'

import MotionDiv from '../MotionDiv'
import { statsData } from '@/data/portfolioData'
import { Code2, FolderCode, GraduationCap, Briefcase } from 'lucide-react'

const iconMap = {
  'Problems Solved': Code2,
  'CGPA': GraduationCap,
  'Projects Built': FolderCode,
  'Building & Learning': Briefcase
}

export default function AboutCard() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-5 h-full">
      {statsData.map((stat, index) => {
        const Icon = iconMap[stat.label as keyof typeof iconMap] || Code2
        return (
          <MotionDiv
            key={stat.label}
            delay={index * 0.1}
            className="relative group h-full"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent-glow/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className={`relative h-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/60 border-l-4 border-l-accent rounded-3xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:translate-y-[-4px] group-hover:border-slate-700/60 shadow-xl overflow-hidden`}>

              {/* Background Decorative Gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-accent/10 transition-colors duration-500" />

              {/* Icon Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] opacity-[0.05] group-hover:opacity-[0.1] group-hover:scale-125 transition-all duration-700 pointer-events-none">
                <Icon className="w-20 h-20 text-accent" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow tracking-tight leading-none mb-3 drop-shadow-2xl transition-all duration-300">
                  {stat.value}
                </div>
                <div className="w-full text-center px-2 py-1 lg:py-1.5 rounded-lg text-[10px] lg:text-[12px] font-bold uppercase tracking-widest text-white bg-slate-950/40 border border-slate-800/60 shadow-inner group-hover:border-accent/30 transition-all duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          </MotionDiv>
        )
      })}
    </div>
  )
}

