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
          {/* Personal Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800/60 bg-slate-900/30 backdrop-blur-xl p-6 sm:p-8"
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
                    <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-700/50 group-hover:border-accent/40 group-hover:bg-blue-950/40 transition-colors">
                        <Languages className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Languages</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3 pl-14">
                    {personalDetailsData.languages.map((language) => (
                      <span key={language} className="px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-900/60 text-secondary text-sm font-medium hover:border-cyan-700/50 transition-colors">
                          {language}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {personalDetailsData.certifications.length > 0 && (
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-700/50 group-hover:border-accent/40 group-hover:bg-blue-950/40 transition-colors">
                        <Award className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Certifications</h4>
                  </div>
                  <ul className="space-y-2.5 pl-14">
                    {personalDetailsData.certifications.map((certification) => (
                      <li key={certification} className="text-secondary text-sm sm:text-base flex items-start gap-2.5 leading-relaxed">
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
                    <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-700/50 group-hover:border-accent/40 group-hover:bg-blue-950/40 transition-colors">
                        <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Programs</h4>
                  </div>
                  <ul className="space-y-2.5 pl-14">
                    {personalDetailsData.programs.map((program) => (
                      <li key={program} className="text-secondary text-sm sm:text-base flex items-start gap-2.5 leading-relaxed">
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
                    <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-700/50 group-hover:border-accent/40 group-hover:bg-blue-950/40 transition-colors">
                        <Heart className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Hobbies</h4>
                  </div>
                  <ul className="space-y-2.5 pl-14">
                    {personalDetailsData.hobbies.map((hobby) => (
                      <li key={hobby} className="text-secondary text-sm sm:text-base flex items-start gap-2.5 leading-relaxed">
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
            className="rounded-2xl border border-slate-800/60 bg-slate-900/30 backdrop-blur-xl p-6 sm:p-8 flex flex-col"
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
                    className="group bg-slate-900/20 border border-slate-800/60 hover:border-slate-700/60 p-5 rounded-xl transition-all duration-300 hover:bg-slate-800/30"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                          <h4 className="text-lg font-bold text-white/90 group-hover:text-accent-glow transition-colors">{experience.organization}</h4>
                          <h5 className="text-base font-medium text-accent mt-0.5">{experience.role}</h5>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-secondary bg-slate-800/40 px-2.5 py-1.5 rounded-md border border-slate-700/50 whitespace-nowrap w-fit">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{experience.duration}</span>
                      </div>
                  </div>
                  
                  {experience.description && (
                    <p className="text-sm sm:text-base text-secondary leading-relaxed mt-4 pt-4 border-t border-slate-800/60">
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
