'use client'

import { motion } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import PersonalDetails from './PersonalDetails'
import VolunteerExperience from './VolunteerExperience'

export default function AdditionalInfoSection() {
  return (
    <section id="additional-information" className="py-12 md:py-20 scroll-mt-24 lg:scroll-mt-0 relative overflow-hidden bg-[#0a0a0f]">
      {/* Background decorations for extra modern feel */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -ml-48 scale-150"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -mr-48 scale-150"></div>

      <div className="section-content">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <MotionDiv className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">Information</span>
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50 rounded-full" />
              <div className="h-1.5 w-1.5 rounded-full bg-accent-secondary/60" />
              <div className="h-px w-24 bg-gradient-to-r from-accent/50 via-accent-secondary/60 to-accent-glow/50 rounded-full" />
              <div className="h-1.5 w-1.5 rounded-full bg-accent-glow/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50 rounded-full" />
            </div>
          </MotionDiv>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
            <MotionDiv>
              <PersonalDetails />
            </MotionDiv>
            <MotionDiv delay={0.1}>
              <VolunteerExperience />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}
