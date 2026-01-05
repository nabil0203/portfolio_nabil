'use client'

import { motion } from 'framer-motion'
import MotionDiv from './MotionDiv' // Assuming this handles scroll-based animation
import { skillsData } from '@/data/portfolioData' // Assuming a structure like { name: string, category: string }[]

// --- Type Definitions for better clarity ---
type Skill = {
  name: string
  category: string
}

// Group skills by category for efficient rendering
const skillGroups = (skillsData as Skill[]).reduce(
  (acc, skill) => {
    // Initialize array if category doesn't exist
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill.name)
    return acc
  },
  {} as Record<string, string[]>,
)

// Define animation variants for cleaner component code
const skillGroupVariants = {
  hover: {
    // Using a more readable CSS-like structure for the border/shadow colors
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
  // Check if skillsData is empty to render a fallback or skip the section
  if (Object.keys(skillGroups).length === 0) {
    return null // Don't render if there are no skills
  }

  return (
    <section id="skills" className="py-20 scroll-mt-24" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-6">
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
            // Use MotionDiv for the category card animation
            <MotionDiv key={category} delay={groupIndex * 0.1}>
              <motion.div
                className="bg-surface/50 p-8 rounded-xl shadow-xl transition-all duration-300 border border-secondary"
                variants={skillGroupVariants}
                whileHover="hover"
              >
                <h3 className="text-2xl font-bold mb-6 text-accent border-b border-accent/30 pb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3" role="list">
                  {/* Using a reduced/slower delay for individual skills */}
                  {skills.map((skill, skillIndex) => (
                    <MotionDiv
                      key={skill}
                      delay={skillIndex * 0.03}
                      className="inline-block"
                    >
                      <span
                        className="px-4 py-1.5 bg-surface/50 text-white text-sm font-medium rounded-full border border-accent/40 shadow-md 
                                 hover:bg-accent hover:text-white transition-all duration-300 cursor-default"
                        // Added aria-label for better screen reader context on the skill tag itself
                        aria-label={`Skill: ${skill}`}
                      >
                        {skill}
                      </span>
                    </MotionDiv>
                  ))}
                </div>
              </motion.div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}