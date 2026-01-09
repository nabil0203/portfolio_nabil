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

const skillGroupVariants = {
  hover: {
    borderColor: 'rgba(0, 188, 212, 0.6)',
    boxShadow:
      '0 0 30px rgba(0, 188, 212, 0.4), 0 0 60px rgba(0, 188, 212, 0.2)',
  },
}

const skillGroupTransition = {
  duration: 0.3,
  ease: 'easeOut',
}

export default function SkillsSection() {
  if (Object.keys(skillGroups).length === 0) {
    return null
  }

  return (
    <section id="skills" className="py-20 scroll-mt-24" aria-labelledby="skills-heading">
      <div className="max-w-[90rem] mx-auto px-8">
        <MotionDiv>
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-white relative group"
          >
            Skills & Technologies
          </h2>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {Object.entries(skillGroups).map(([category, skills], groupIndex) => (
            <MotionDiv key={category} delay={groupIndex * 0.1}>
              <motion.div
                className="bg-surface/80 p-8 rounded-xl transition-all duration-300 border border-white/20"
                variants={skillGroupVariants}
                whileHover="hover"
              >
                <h3 className="text-2xl font-bold mb-6 text-accent border-b border-accent/30 pb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3" role="list">
                  {skills.map((skill, skillIndex) => {
                    const SkillComponent = skill.url ? motion.a : motion.span
                    const skillProps = skill.url ? {
                      href: skill.url,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: "px-4 py-1.5 bg-surface/50 text-white text-sm font-medium rounded-full border border-accent/40 shadow-md hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer",
                      ariaLabel: `Visit ${skill.name} profile`
                    } : {
                      className: "px-4 py-1.5 bg-surface/50 text-white text-sm font-medium rounded-full border border-accent/40 shadow-md hover:bg-accent hover:text-white transition-all duration-300 cursor-default",
                      ariaLabel: `Skill: ${skill.name}`
                    }

                    return (
                      <MotionDiv
                        key={skill.name}
                        delay={skillIndex * 0.03}
                        className="inline-block"
                      >
                        <SkillComponent
                          {...skillProps}
                          whileHover={{ scale: 1.05 }}
                          whileTap={skill.url ? { scale: 0.95 } : undefined}
                        >
                          {skill.name}
                        </SkillComponent>
                      </MotionDiv>
                    )
                  })}
                </div>
              </motion.div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}