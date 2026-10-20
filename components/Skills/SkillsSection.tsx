'use client'

import MotionDiv from '../MotionDiv'
import SectionHeader from '../SectionHeader'
import { skillsData } from '@/data/portfolioData'
import SkillCard from './SkillCard'
import { Skill } from '@/data/portfolioDataTypes'

const skillGroups = (skillsData as Skill[]).reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push({ name: skill.name, url: skill.url, logo: skill.logo })
    return acc
  },
  {} as Record<string, Array<{ name: string; url?: string; logo?: string }>>,
)

export default function SkillsSection() {
  if (Object.keys(skillGroups).length === 0) {
    return null
  }

  return (
    <section
      id="skills"
      className="py-16 md:py-20 scroll-mt-16 bg-steel-50"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mx-auto w-fit max-w-full">
          <SectionHeader label="Skills" highlight="& Technologies" className="mb-10" id="skills-heading" />

          <div className="flex flex-col gap-3">
            {Object.entries(skillGroups).map(([category, skills], index) => (
              <MotionDiv key={category} delay={index * 0.07}>
                <SkillCard category={category} skills={skills} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
