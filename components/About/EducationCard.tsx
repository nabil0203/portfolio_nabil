'use client'

import { motion, MotionValue } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import { educationData } from '@/data/portfolioData'
import { GraduationCap, Calendar, Award } from 'lucide-react'

interface EducationCardProps {
  x1: MotionValue<number>
  y1: MotionValue<number>
  x2: MotionValue<number>
  y2: MotionValue<number>
}

export default function EducationCard({ x1, y1, x2, y2 }: EducationCardProps) {
  return (
    <div className="relative group">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-surface/60 to-accent-glow/5 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 mb-5 sm:mb-6 relative z-10">
          <div className="p-2.5 bg-accent/8 rounded-xl border border-blue-900/60">
            <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.10em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 leading-none">
              Education
            </h3>
          </div>
        </div>

        <div className="relative z-10">

          <div className="space-y-5">
            {educationData.map((edu) => {
              const LogoContent = (
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl sm:rounded-2xl bg-slate-800/40 border border-slate-700/40 p-3 sm:p-5 shadow-md flex items-center justify-center backdrop-blur-md group-hover/item:border-accent/40 transition-all duration-200">
                  <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain drop-shadow-md group-hover/item:scale-105 transition-transform duration-200" />
                </div>
              )

              return (
              <div key={edu.institution} className="relative group/item">

                <div className="bg-slate-900/30 rounded-3xl p-4 sm:p-5 border border-slate-800/60 backdrop-blur-sm hover:border-accent/30 transition-colors duration-200">
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6"> 
                    {edu.logo && (
                      edu.url ? (
                        <a href={edu.url} target="_blank" rel="noopener noreferrer" className="shrink-0 block">
                          {LogoContent}
                        </a>
                      ) : (
                        <div className="shrink-0">
                          {LogoContent}
                        </div>
                      )
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-tight">{edu.degree}</h4>
                      {edu.url ? (
                        <a
                          href={edu.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-accent hover:text-accent-glow transition-colors duration-200 text-sm sm:text-base font-medium group/link"
                        >
                          {edu.institution}
                          <span className="inline-block ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-200 text-xs text-accent-glow">
                            ↗
                          </span>
                        </a>
                      ) : (
                        <p className="text-accent text-sm sm:text-base font-medium">{edu.institution}</p>
                      )}

                      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 mt-4">
                        <div className="flex flex-wrap gap-2">
                          {edu.gpa && (
                            <div className="w-fit flex items-center gap-2 bg-blue-950/40 rounded-lg py-1 px-2.5 border border-blue-900/60">
                              <GraduationCap className="w-3.5 h-3.5 text-accent shrink-0" />
                              <span className="text-secondary text-[11px] sm:text-xs leading-relaxed font-medium">
                                {edu.gpa}
                              </span>
                            </div>
                          )}
                          <div className="w-fit flex items-center gap-2 bg-blue-950/40 rounded-lg py-1 px-2.5 border border-blue-900/60">
                            <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span className="text-secondary text-[11px] sm:text-xs leading-relaxed font-medium">
                              {edu.graduation}
                            </span>
                          </div>
                        </div>
                        {edu.description && (
                          <div className="w-fit flex items-center gap-2 bg-blue-950/40 rounded-lg py-1 px-2.5 border border-blue-900/60">
                            <Award className="w-3.5 h-3.5 text-accent shrink-0" />
                            <span className="text-secondary text-[11px] sm:text-xs leading-relaxed font-medium">
                              {edu.description}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>

        <motion.div style={{ x: x2, y: y2 }} className="absolute top-6 right-6 w-24 h-24 bg-accent-secondary/10 rounded-full blur-3xl z-0 pointer-events-none" />
        <motion.div style={{ x: x1, y: y1 }} className="absolute bottom-6 left-6 w-20 h-20 bg-accent-glow/15 rounded-full blur-2xl z-0 pointer-events-none" />
      </div>
    </div>
  )
}
