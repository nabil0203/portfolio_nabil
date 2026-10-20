'use client'

import { Award, ArrowUpRight } from 'lucide-react'
import type { Education } from '@/data/portfolioDataTypes'

interface EducationCardProps {
  edu: Education
}

// "CGPA: 3.91" -> { label: "CGPA", value: "3.91" }
const splitGrade = (gpa: string) => {
  const [label, ...rest] = gpa.split(':')
  return rest.length ? { label: label.trim(), value: rest.join(':').trim() } : { label: 'Grade', value: gpa }
}

/**
 * One education entry. The grade is the key figure, so it gets its own
 * large number on the right; everything else reads top to bottom.
 */
export default function EducationCard({ edu }: EducationCardProps) {
  const grade = edu.gpa ? splitGrade(edu.gpa) : null

  const logo = (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-steel-300 bg-steel-50 p-2 sm:h-14 sm:w-14 sm:p-2.5">
      {edu.logo && <img src={edu.logo} alt="" className="h-full w-full object-contain" />}
    </div>
  )

  return (
    <article className="rounded-xl border border-steel-300 bg-steel-100 p-4 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        {logo}

        <div className="min-w-0 flex-1">
          <h4 className="font-display text-base font-semibold leading-snug text-steel-800 sm:text-xl">
            {edu.degree}
          </h4>
          <p className="mt-0.5 text-sm font-medium text-steel-600 sm:text-base">
            {edu.url ? (
              <a
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-steel-800"
              >
                {edu.institution}
                <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
              </a>
            ) : (
              edu.institution
            )}
          </p>
        </div>

        {grade && (
          <div className="hidden shrink-0 text-right sm:block">
            <p className="font-display text-2xl font-bold leading-none tabular-nums text-steel-800 sm:text-3xl">
              {grade.value}
            </p>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-steel-500">
              {grade.label}
            </p>
          </div>
        )}
      </div>

      {(edu.description || grade) && (
        <div className={`mt-4 flex flex-col gap-2 border-t border-steel-300 pt-3 ${edu.description ? '' : 'sm:hidden'}`}>
          {/* Phones: the grade moves down here so the title gets the full width */}
          {grade && (
            <p className="flex items-baseline gap-2 sm:hidden">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-500">{grade.label}</span>
              <span className="font-display text-lg font-bold tabular-nums text-steel-800">{grade.value}</span>
            </p>
          )}
          {edu.description && (
            <p className="flex items-start gap-2 text-sm text-steel-700">
              <Award className="mt-0.5 h-4 w-4 shrink-0 text-steel-500" aria-hidden="true" />
              {edu.description}
            </p>
          )}
        </div>
      )}
    </article>
  )
}