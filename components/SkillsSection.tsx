'use client'

import { motion } from 'framer-motion'
import MotionDiv from './MotionDiv'
import { skillsData } from '@/data/portfolioData'

type Skill = {
  name: string
  category: string
  url?: string
}

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
          {Object.entries(skillGroups).map(([category, skills], groupIndex) => (
            <MotionDiv key={category} delay={groupIndex * 0.1}>
              <motion.div
                className="group relative flex flex-col h-full bg-surface/20 backdrop-blur-xl p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300"
                whileHover={{ y: -6 }}
              >
                {/* Glow behind card on hover */}
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-accent-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0 pointer-events-none" />

                {/* Subtle top highlight for 3D effect */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 z-0" />

                <div className="relative z-10 w-full">
                  <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center p-[1px] shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow duration-500">
                      <div className="w-full h-full bg-surface/90 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-accent-glow rounded-full shadow-[0_0_20px_rgba(6,184,212,1)]" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 group-hover:to-white transition-colors duration-300">
                      {category}
                    </h3>
                  </div>

                  <div className="w-full h-[1px] bg-gradient-to-r from-accent/40 via-accent-secondary/20 to-transparent mb-5 sm:mb-8" />

                  <div className="flex flex-wrap gap-3" role="list">
                    {skills.map((skill, skillIndex) => {
                      const SkillComponent = skill.url ? motion.a : motion.span

                      return (
                        <MotionDiv
                          key={skill.name}
                          delay={skillIndex * 0.03 + groupIndex * 0.1}
                          className="inline-block"
                        >
                          <SkillComponent
                            href={skill.url ? skill.url : undefined}
                            target={skill.url ? '_blank' : undefined}
                            rel={skill.url ? 'noopener noreferrer' : undefined}
                            className={`group/pill relative overflow-hidden inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2.5 bg-white/[0.03] backdrop-blur-md rounded-lg sm:rounded-xl border border-white/10 text-xs sm:text-sm font-semibold text-slate-300 transition-all duration-300 shadow-sm ${skill.url ? "hover:bg-white/[0.08] hover:border-accent/60 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] cursor-pointer" : "cursor-default hover:text-white hover:border-white/20 hover:bg-white/[0.06]"
                              }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={skill.url ? { scale: 0.95 } : undefined}
                          >
                            <span className="relative z-10 tracking-wide">{skill.name}</span>
                            {skill.url && (
                              <svg className="relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1.5 sm:ml-2 opacity-50 group-hover/pill:opacity-100 group-hover/pill:text-accent-glow transition-all duration-300 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            )}
                          </SkillComponent>
                        </MotionDiv>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
