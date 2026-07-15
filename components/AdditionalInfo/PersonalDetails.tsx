'use client'

import { Languages, Award, GraduationCap, Heart } from 'lucide-react'
import { personalDetailsData } from '@/data/portfolioData'

export default function PersonalDetails() {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/30 backdrop-blur-xl p-6 sm:p-8">
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
    </div>
  )
}
