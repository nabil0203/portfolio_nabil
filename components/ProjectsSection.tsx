import MotionDiv from './MotionDiv'
import ProjectCard from './ProjectCard'
import { projectsData } from '@/data/portfolioData'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-text-primary relative group">
            Featured Projects
          </h2>
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
