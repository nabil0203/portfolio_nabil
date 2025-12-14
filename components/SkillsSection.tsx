import MotionDiv from './MotionDiv'
import { skillsData } from '@/data/portfolioData'

// Group skills by category
const skillGroups = skillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = []
  }
  acc[skill.category].push(skill.name)
  return acc
}, {} as Record<string, string[]>)

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-text-primary">
            Skills & Technologies
          </h2>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillGroups).map(([category, skills], groupIndex) => (
            <MotionDiv key={category} delay={groupIndex * 0.1}>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-accent">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <MotionDiv
                      key={skill}
                      delay={(groupIndex * 0.1) + (skillIndex * 0.05)}
                      className="inline-block"
                    >
                      <span className="px-3 py-1 bg-primary text-accent text-sm rounded-full border border-accent/20 hover:border-accent transition-colors duration-200">
                        {skill}
                      </span>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
