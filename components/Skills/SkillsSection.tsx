'use client'

import MotionDiv from '../MotionDiv'
import SectionDivider from '../SectionDivider'
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
    <section id="skills" className="pt-24 pb-8 md:pt-32 md:pb-16 scroll-mt-24 lg:scroll-mt-0 relative overflow-hidden bg-[#0a0a0f]" aria-labelledby="skills-heading">
      {/* Background decorations for extra modern feel */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -ml-48 scale-150"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 -mr-48 scale-150"></div>

      <div className="section-content">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
          <MotionDiv className="text-center mb-10">
            <h2
              id="skills-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4"
            >
              Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">&amp; Technologies</span>
            </h2>
            <SectionDivider />
          </MotionDiv>

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
