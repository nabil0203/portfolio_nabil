'use client'

import { motion } from 'framer-motion'
import MotionDiv from '../Shared/MotionDiv'
import { personalDetailsData, volunteerExperiencesData } from '@/data/portfolioData'
import { Languages, Award, GraduationCap, Heart, Calendar } from 'lucide-react'

export default function AdditionalInfoSection() {
  return (
    <section id="additional-information" className="py-12 md:py-20 scroll-mt-24 lg:scroll-mt-0 relative overflow-hidden">
      {/* Background decorations for extra modern feel */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -ml-48 scale-150"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -mr-48 scale-150"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <MotionDiv className="text-center mb-10 md:mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-center text-white relative group">
            Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">Information</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-accent via-accent-secondary to-accent-glow mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {/* Personal Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-surface/10 backdrop-blur-xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-8">
               <span className="text-accent text-xl font-light select-none flex-shrink-0">—</span>
               <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.10em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 leading-none">
                  Personal Details
               </h3>
            </div>
            
            <div className="space-y-8">
              {personalDetailsData.languages.length > 0 && (
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                        <Languages className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-white/90">Languages</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3 pl-14">
                    {personalDetailsData.languages.map((language) => (
                      <span key={language} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.07] text-slate-300 text-sm font-medium">
                          {language}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {personalDetailsData.certifications.length > 0 && (
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                        <Award className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-white/90">Certifications</h4>
                  </div>
                  <ul className="space-y-2.5 pl-14">
                    {personalDetailsData.certifications.map((certification) => (
                      <li key={certification} className="text-slate-400 text-sm sm:text-base flex items-start gap-2.5 leading-relaxed">
                        <span className="text-accent mt-1 text-xs">▹</span>
                        {certification}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {personalDetailsData.programs.length > 0 && (
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                        <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-white/90">Programs</h4>
                  </div>
                  <ul className="space-y-2.5 pl-14">
                    {personalDetailsData.programs.map((program) => (
                      <li key={program} className="text-slate-400 text-sm sm:text-base flex items-start gap-2.5 leading-relaxed">
                        <span className="text-accent mt-1 text-xs">▹</span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {personalDetailsData.hobbies.length > 0 && (
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                        <Heart className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-white/90">Hobbies</h4>
                  </div>
                  <ul className="space-y-2.5 pl-14">
                    {personalDetailsData.hobbies.map((hobby) => (
                      <li key={hobby} className="text-slate-400 text-sm sm:text-base flex items-start gap-2.5 leading-relaxed">
                        <span className="text-accent mt-1 text-xs">▹</span>
                        {hobby}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>

          {/* Volunteer Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-surface/10 backdrop-blur-xl p-6 sm:p-8 flex flex-col"
          >
             <div className="flex items-center gap-3 sm:gap-4 mb-8">
               <span className="text-accent text-xl font-light select-none flex-shrink-0">—</span>
               <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.10em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 leading-none">
                  Volunteer Experience
               </h3>
            </div>
            
            <div className="space-y-5 flex-1">
              {volunteerExperiencesData.map((experience) => (
                <div 
                    key={`${experience.organization}-${experience.role}`} 
                    className="group bg-white/[0.02] border border-white/[0.05] hover:border-white/10 p-5 rounded-xl transition-all duration-300 hover:bg-white/[0.04]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                          <h4 className="text-lg font-bold text-white/90 group-hover:text-accent-glow transition-colors">{experience.organization}</h4>
                          <h5 className="text-base font-medium text-accent mt-0.5">{experience.role}</h5>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 bg-white/[0.05] px-2.5 py-1.5 rounded-md border border-white/[0.05] whitespace-nowrap w-fit">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{experience.duration}</span>
                      </div>
                  </div>
                  
                  {experience.description && (
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed mt-4 pt-4 border-t border-white/[0.05]">
                        {experience.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
