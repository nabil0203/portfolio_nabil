'use client'

import { HeartHandshake } from 'lucide-react'
import { volunteerExperiencesData } from '@/data/portfolioData'

/**
 * Standalone card. Dates sit in the left column, aligned with the label
 * column of the Personal Details card above it.
 */
export default function VolunteerExperience() {
  if (volunteerExperiencesData.length === 0) return null

  return (
    <div className="overflow-hidden rounded-xl border border-steel-300 bg-steel-100">
      <div className="flex items-center gap-3 border-b border-steel-300 px-6 py-4 sm:px-8">
        <HeartHandshake className="h-5 w-5 shrink-0 text-steel-500" aria-hidden="true" />
        <h3 className="font-display text-base font-semibold text-steel-800">Volunteering</h3>
      </div>

      <ul>
        {volunteerExperiencesData.map(experience => (
          <li
            key={`${experience.organization}-${experience.role}`}
            className="grid gap-1 border-t border-steel-300 first:border-t-0 px-6 py-5 sm:px-8 md:grid-cols-[13rem_1fr] md:gap-10"
          >
            <p className="text-sm tabular-nums text-steel-500 md:pt-0.5">{experience.duration}</p>
            <div className="min-w-0">
              <p className="text-[15px] font-semibold text-steel-800">{experience.organization}</p>
              <p className="text-sm text-steel-500">{experience.role}</p>
              {experience.description && (
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-steel-600">
                  {experience.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}