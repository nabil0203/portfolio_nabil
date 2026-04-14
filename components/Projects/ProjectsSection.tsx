import MotionDiv from '../MotionDiv'
import ProjectCard from './ProjectCard'
import { projectsData } from '@/data/portfolioData'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-8 md:py-16 scroll-mt-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <MotionDiv>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-center text-white relative group">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">Projects</span>
          </h2>
          <div className="h-1.5 w-28 bg-gradient-to-r from-accent via-accent-secondary to-accent-glow mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] mb-10"></div>
        </MotionDiv>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
