'use client'

import { motion, useTransform } from 'framer-motion'
import MotionDiv from '../MotionDiv'

import { useMousePosition } from '@/hooks/useMousePosition'
import SummarySection from './SummarySection'
import { statsData } from '@/data/portfolioData'
import { Code2, FolderCode, GraduationCap, Briefcase } from 'lucide-react'

const iconMap = {
  'Problems Solved': Code2,
  'CGPA': GraduationCap,
  'Projects Built': FolderCode,
  'Building & Learning': Briefcase
}

export default function AboutCard() {
  const { smoothMouseX, smoothMouseY } = useMousePosition()

  const x1 = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30])
  const y1 = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30])

  const x2 = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40])
  const y2 = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40])

  return (
    <section id="about" className="pt-24 pb-24 md:pb-32 scroll-mt-24 lg:scroll-mt-0 bg-[#030712]">
      <div className="section-content">
        <div className="max-w-7xl mx-auto px-6">
          <MotionDiv className="text-center mb-16">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-10">
            {/* Stats Grid - Left */}
            <div className="order-2 lg:order-1 lg:col-span-5 xl:col-span-4 grid grid-cols-2 gap-4 lg:gap-5">
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

                    <div className={`relative h-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:translate-y-[-4px] group-hover:border-slate-700/60 shadow-xl overflow-hidden`}>

                      {/* Background Decorative Gradient */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-accent/10 transition-colors duration-500" />

                      {/* Icon Watermark */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] opacity-[0.05] group-hover:opacity-[0.1] group-hover:scale-125 transition-all duration-700 pointer-events-none">
                        <Icon className="w-20 h-20 text-accent" />
                      </div>

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none mb-3 drop-shadow-2xl group-hover:text-accent transition-colors duration-300">
                          {stat.value}
                        </div>
                        <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary bg-slate-950/40 border border-slate-800/60 shadow-inner group-hover:border-accent/30 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </MotionDiv>
                )
              })}
            </div>

            {/* Summary Card - Right */}
            <MotionDiv className="order-1 lg:order-2 lg:col-span-7 xl:col-span-8">
              <SummarySection x1={x1} y1={y1} x2={x2} y2={y2} />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}
