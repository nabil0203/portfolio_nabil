'use client'

import { Languages, GraduationCap, Compass } from 'lucide-react'
import { personalDetailsData } from '@/data/portfolioData'
import InfoRow from './InfoRow'

// "Bengali (Native)" -> { name: "Bengali", level: "Native" }
const splitLevel = (value: string) => {
  const match = value.match(/^(.*?)\s*\((.*)\)\s*$/)
  return match ? { name: match[1], level: match[2] } : { name: value, level: '' }
}

const PlainList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map(item => (
      <li key={item} className="text-[15px] leading-relaxed text-steel-700">
        {item}
      </li>
    ))}
  </ul>
)

/** Renders as rows inside the shared profile sheet. */
export default function PersonalDetails() {
  const { languages, programs, hobbies } = personalDetailsData

  return (
    <>
      {languages.length > 0 && (
        <InfoRow Icon={Languages} label="Languages">
          <ul className="flex flex-wrap gap-2">
            {languages.map(language => {
              const { name, level } = splitLevel(language)
              return (
                <li
                  key={language}
                  className="flex items-baseline gap-2 rounded-md border border-steel-300 bg-steel-50 px-3 py-1.5"
                >
                  <span className="text-sm font-semibold text-steel-800">{name}</span>
                  {level && <span className="text-sm text-steel-500">{level}</span>}
                </li>
              )
            })}
          </ul>
        </InfoRow>
      )}

      {programs.length > 0 && (
        <InfoRow Icon={GraduationCap} label="Programs">
          <PlainList items={programs} />
        </InfoRow>
      )}

      {hobbies.length > 0 && (
        <InfoRow Icon={Compass} label="Interests">
          <PlainList items={hobbies} />
        </InfoRow>
      )}
    </>
  )
}