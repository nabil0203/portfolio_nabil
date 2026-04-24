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
      <div className="relative bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 mb-5 sm:mb-6 relative z-10">
          <div className="p-2.5 bg-accent/15 rounded-xl border border-accent/30">
            <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
          </div>
        </div>

        <div className="relative z-10">

          <div className="space-y-5">
            {educationData.map((edu, index) => (
              <div key={index} className="relative group/item">

                <div className="bg-surface/50 rounded-xl p-4 sm:p-5 border border-white/10 backdrop-blur-sm hover:border-accent/20 transition-colors duration-100">
                  <div className="flex items-start gap-4 mb-4">
                    {edu.logo && (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 p-2 shrink-0 overflow-hidden border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover/item:border-accent/30 transition-colors duration-300">
                        <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-white/90 mb-1 leading-tight">{edu.degree}</h4>
                      {edu.url ? (
                        <a
                          href={edu.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-accent hover:text-accent-glow transition-colors duration-300 text-sm sm:text-base font-medium group/link"
                        >
                          {edu.institution}
                          <span className="inline-block ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300 text-xs text-accent-glow">
                            ↗
                          </span>
                        </a>
                      ) : (
                        <p className="text-accent text-sm sm:text-base font-medium">{edu.institution}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {edu.gpa && (
                      <div className="w-fit flex items-center gap-2 bg-accent/5 rounded-lg py-1 px-3 border border-accent/10 hover:border-accent/20 hover:bg-accent/10 transition-colors duration-300">
                        <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                          {edu.gpa}
                        </span>
                      </div>
                    )}
                    <div className="w-fit flex items-center gap-2 bg-accent/5 rounded-lg py-1 px-3 border border-accent/10 hover:border-accent/20 hover:bg-accent/10 transition-colors duration-300">
                      <Calendar className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                        {edu.graduation}
                      </span>
                    </div>
                    {edu.description && (
                      <div className="w-fit flex items-center gap-2 bg-accent/5 rounded-lg py-1 px-3 border border-accent/10 hover:border-accent/20 hover:bg-accent/10 transition-colors duration-300">
                        <Award className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                          {edu.description}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div style={{ x: x2, y: y2 }} className="absolute top-6 right-6 w-24 h-24 bg-accent-secondary/10 rounded-full blur-3xl z-0 pointer-events-none" />
        <motion.div style={{ x: x1, y: y1 }} className="absolute bottom-6 left-6 w-20 h-20 bg-accent-glow/15 rounded-full blur-2xl z-0 pointer-events-none" />
      </div>
    </div>
  )
}
