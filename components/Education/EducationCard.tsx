'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react'

interface EducationCardProps {
  edu: {
    degree: string
    institution: string
    logo: string
    url?: string
    gpa?: string
    graduation: string
    description?: string
  }
}

export default function EducationCard({ edu }: EducationCardProps) {
  const LogoContent = (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-800/50 border border-slate-700/50 p-2.5 sm:p-3 shadow-lg flex items-center justify-center backdrop-blur-md group-hover:border-accent/40 transition-all duration-300">
      <img
        src={edu.logo}
        alt={edu.institution}
        className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
      />
    </div>
  )

  return (
    <div className="group relative">
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent-glow/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden transition-all duration-300 group-hover:translate-y-[-2px] group-hover:border-slate-700/60">

        {/* Background Decorative Gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors duration-500" />

        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
          {/* Logo Section */}
          <div className="shrink-0">
            {edu.url ? (
              <a href={edu.url} target="_blank" rel="noopener noreferrer" className="block outline-none focus:ring-2 focus:ring-accent/50 rounded-2xl">
                {LogoContent}
              </a>
            ) : (
              LogoContent
            )}
          </div>

          {/* Details Section */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-accent transition-colors duration-300">
                {edu.degree}
              </h4>
              {edu.url && (
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors p-1"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <p className="text-accent font-semibold text-sm sm:text-base mb-4 tracking-wide">
              {edu.institution}
            </p>

            <div className="flex flex-wrap gap-3 mt-auto">
              {edu.gpa && (
                <div className="flex items-center gap-2 bg-accent/10 rounded-xl py-1.5 px-4 border border-accent/20">
                  <GraduationCap className="w-3.5 h-3.5 text-accent" />
                  <span className="text-secondary text-sm font-medium">
                    {edu.gpa}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 bg-accent-secondary/10 rounded-xl py-1.5 px-4 border border-accent-secondary/20">
                <Calendar className="w-3.5 h-3.5 text-accent-secondary" />
                <span className="text-secondary text-sm font-medium">
                  {edu.graduation}
                </span>
              </div>

              {edu.description && (
                <div className="flex items-center gap-2 bg-accent-glow/10 rounded-xl py-1.5 px-4 border border-accent-glow/20">
                  <Award className="w-3.5 h-3.5 text-accent-glow" />
                  <span className="text-secondary text-sm font-medium">
                    {edu.description}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
