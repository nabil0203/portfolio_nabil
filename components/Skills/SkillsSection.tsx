'use client'

import MotionDiv from '../MotionDiv'
import { skillsData } from '@/data/portfolioData'
import SkillCard from './SkillCard'
import { Skill } from '@/data/portfolioTypes'

const skillGroups = (skillsData as Skill[]).reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push({ name: skill.name, url: skill.url })
    return acc
  },
  {} as Record<string, Array<{ name: string; url?: string }>>,
)

export default function SkillsSection() {
  if (Object.keys(skillGroups).length === 0) {
    return null
  }

  return (
    <section id="skills" className="py-10 scroll-mt-24 relative overflow-hidden" aria-labelledby="skills-heading">
      {/* Background decorations for extra modern feel */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -ml-48 scale-150"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -mr-48 scale-150"></div>

      <div className="max-w-[90rem] mx-auto px-8 relative z-10">
        <MotionDiv>
          <div className="text-center mb-20 relative">
            <h2
              id="skills-heading"
              className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-white relative group"
            >
              Skills & Technologies
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-accent via-accent-secondary to-accent-glow mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          </div>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {Object.entries(skillGroups).map(([category, skills]) => (
            <MotionDiv key={category}>
              <SkillCard category={category} skills={skills} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
