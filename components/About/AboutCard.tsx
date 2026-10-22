'use client'

import MotionDiv from '../MotionDiv'
import { statsData } from '@/data/portfolioData'

export default function AboutCard() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-5 h-full">
      {statsData.map((stat, index) => (
        <MotionDiv
          key={stat.label}
          delay={index * 0.1}
          className="relative group h-full"
        >
          <div className="relative h-full bg-steel-100  border border-steel-300 border-l-4 border-l-accent rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300  group-hover:border-steel-300 shadow-none overflow-hidden">

            <div className="relative z-10 flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black text-steel-800 tracking-tight leading-none mb-3  transition-all duration-300">
                {stat.value}
              </div>
              <div className="w-full text-center px-2 py-1 lg:py-1.5 rounded-lg text-[10px] lg:text-[12px] font-bold uppercase tracking-widest text-steel-800 bg-steel-200 border border-steel-300 shadow-none group-hover:border-accent/30 transition-all duration-300">
                {stat.label}
              </div>
            </div>
          </div>
        </MotionDiv>
      ))}
    </div>
  )
}
