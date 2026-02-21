import MotionDiv from './MotionDiv'
import ProjectCard from './ProjectCard'
import { projectsData } from '@/data/portfolioData'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <MotionDiv>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-white relative group">
            My Projects
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-accent via-accent-secondary to-accent-glow mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] mb-16"></div>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
