'use client'

import { useState } from 'react'
import MotionDiv from '../MotionDiv'
import ProjectCard from './ProjectCard'
import { projectsData } from '@/data/portfolioData'

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6)

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
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projectsData.length > 6 && (
          <MotionDiv className="mt-12 flex justify-center" delay={0.2}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-surface border border-accent/20 text-white font-medium hover:bg-accent/10 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              {showAll ? 'Show Less' : 'More Projects'}
              <svg 
                className={`w-4 h-4 text-accent transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </MotionDiv>
        )}
      </div>
    </section>
  )
}
