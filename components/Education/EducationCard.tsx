'use client'

import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react'
import type { Education } from '@/data/portfolioDataTypes'

interface EducationCardProps {
  edu: Education
  isRightSide?: boolean
}

export default function EducationCard({ edu, isRightSide = true }: EducationCardProps) {
  const LogoContent = (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-steel-100 border border-steel-300 p-2.5 sm:p-3 shadow-none flex items-center justify-center  group-hover:border-accent/40 transition-all duration-300">
      {edu.logo && (
        <img
          src={edu.logo}
          alt={edu.institution}
          className="w-full h-full object-contain  group-hover:scale-110 transition-transform duration-300"
        />
      )}
    </div>
  )

  return (
    <div className="group relative">
      {/* Subtle glow effect on hover */}

      <div className={`relative bg-steel-100  border border-steel-300 rounded-lg p-4 sm:p-5 shadow-none overflow-hidden transition-all duration-300  group-hover:border-steel-300
        ${isRightSide ? 'border-l-4 border-l-accent' : 'lg:border-l-0 lg:border-r-4 lg:border-r-accent border-l-4 border-l-accent'}`}>

        {/* Background Decorative Gradient */}

        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
          {/* Logo Section */}
          <div className="shrink-0">
            {edu.url ? (
              <a href={edu.url} target="_blank" rel="noopener noreferrer" className="block outline-none focus:ring-2 focus:ring-accent/50 rounded-lg">
                {LogoContent}
              </a>
            ) : (
              LogoContent
            )}
          </div>

          {/* Details Section */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="text-lg sm:text-xl font-bold text-steel-800 leading-tight group-hover:text-accent transition-colors duration-300">
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
                  <span className="text-secondary text-sm font-medium">{edu.gpa}</span>
                </div>
              )}

              <div className="flex items-center gap-2 bg-accent-secondary/10 rounded-xl py-1.5 px-4 border border-accent-secondary/20">
                <Calendar className="w-3.5 h-3.5 text-accent-secondary" />
                <span className="text-secondary text-sm font-medium">{edu.graduation}</span>
              </div>

              {edu.description && (
                <div className="flex items-center gap-2 bg-accent-glow/10 rounded-xl py-1.5 px-4 border border-accent-glow/20">
                  <Award className="w-3.5 h-3.5 text-accent-glow" />
                  <span className="text-secondary text-sm font-medium">{edu.description}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
