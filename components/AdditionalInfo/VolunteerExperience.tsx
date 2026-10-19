'use client'

import { Calendar } from 'lucide-react'
import { volunteerExperiencesData } from '@/data/portfolioData'

export default function VolunteerExperience() {
  return (
    <div className="rounded-lg border border-steel-300 bg-steel-100  p-6 sm:p-8 flex flex-col">
       <div className="flex items-center gap-3 sm:gap-4 mb-8">
         <span className="text-accent text-xl font-light select-none flex-shrink-0">—</span>
         <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.10em] text-steel-800 leading-none">
            Volunteer Experience
         </h3>
      </div>
      
      <div className="space-y-5 flex-1">
        {volunteerExperiencesData.map((experience) => (
          <div 
              key={`${experience.organization}-${experience.role}`} 
              className="group bg-steel-100 border border-steel-300 hover:border-steel-300 p-5 rounded-xl transition-all duration-300 hover:bg-steel-100"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div>
                    <h4 className="text-base sm:text-lg font-bold text-steel-800/90 group-hover:text-accent-glow transition-colors whitespace-nowrap overflow-hidden text-ellipsis">{experience.organization}</h4>
                    <h5 className="text-sm sm:text-base font-medium text-accent mt-0.5">{experience.role}</h5>
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-secondary bg-steel-100 px-2.5 py-1.5 rounded-md border border-steel-300 whitespace-nowrap w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{experience.duration}</span>
                </div>
            </div>
            
            {experience.description && (
              <p className="text-sm sm:text-base text-secondary leading-relaxed mt-4 pt-4 border-t border-steel-300">
                  {experience.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
