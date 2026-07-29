'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MotionDiv from '../MotionDiv'
import SectionHeader from '../SectionHeader'
import ProjectCard from './ProjectCard'
import { projectsData } from '@/data/portfolioData'

const PREVIEW_COUNT = 4
const previewProjects = projectsData.slice(0, PREVIEW_COUNT)

export default function ProjectsSection() {
  const hasMore = projectsData.length > PREVIEW_COUNT

  useEffect(() => {
    // Wait a brief moment to allow native browser scroll-to-hash to occur
    // remove hash
    const timer = setTimeout(() => {
      if (window.location.hash === '#projects') {
        window.history.replaceState(null, '', window.location.pathname)
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="projects" className="py-20 md:py-32 scroll-mt-24 lg:scroll-mt-0 relative bg-background overflow-hidden">

      {/* Static Background Layer — no mouse tracking */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.6),rgba(2,6,23,1))]" />
        <div className="absolute inset-0 bg-dot-pattern-faint opacity-[0.15]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-secondary/5 blur-[100px]" />
      </div>

      <div className="section-content relative z-10">
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">

          <SectionHeader label="My" highlight="Projects" className="mb-14" />

          {/* Project list — stacked horizontal cards */}
          <div className="flex flex-col gap-16 lg:gap-24">
            {previewProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Link to full projects page */}
          {hasMore && (
            <MotionDiv className="mt-20 flex flex-col items-center gap-3" delay={0.2}>
              {/* motion.div is OUTSIDE rotate-btn so the y-lift isn't clipped by overflow:hidden */}
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/projects"
                  aria-label={`View all ${projectsData.length} projects`}
                  className="group rotate-btn"
                >
                  <span className="rotate-btn-inner group flex items-center gap-3 px-8 py-3 text-sm font-bold text-white cursor-pointer transition-colors duration-300">
                    <span className="tracking-wide">View All Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>

              <p className="text-[11px] text-secondary/40 font-mono uppercase tracking-widest">
                Showing {PREVIEW_COUNT} of {projectsData.length}
              </p>
            </MotionDiv>
          )}
        </div>
      </div>
    </section>
  )
}
