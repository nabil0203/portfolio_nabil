'use client'

import MotionDiv from '../Shared/MotionDiv'
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
    <section id="skills" className="py-8 md:py-16 scroll-mt-24 lg:scroll-mt-0 relative overflow-hidden" aria-labelledby="skills-heading">
      {/* Background decorations for extra modern feel */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -ml-48 scale-150"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -mr-48 scale-150"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <MotionDiv>
          <div className="text-center mb-10 relative">
            <h2
              id="skills-heading"
              className="text-3xl md:text-4xl font-extrabold mb-5 text-center text-white relative group"
            >
              Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">&</span> Technologies
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-accent via-accent-secondary to-accent-glow mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          </div>
        </MotionDiv>

        <div className="rounded-2xl border border-white/10 bg-surface/10 backdrop-blur-xl px-5 sm:px-10 py-5 divide-y divide-white/[0.06]">
          {Object.entries(skillGroups).map(([category, skills], index) => (
            <MotionDiv key={category} delay={index * 0.04}>
              <SkillCard category={category} skills={skills} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
