'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MotionDiv from '../MotionDiv'
import ProjectCard from './ProjectCard'
import { projectsData } from '@/data/portfolioData'
import { useMousePosition } from '@/hooks/useMousePosition'

const PREVIEW_COUNT = 6
const previewProjects = projectsData.slice(0, PREVIEW_COUNT)

export default function ProjectsSection() {
  const hasMore = projectsData.length > PREVIEW_COUNT
  const { smoothMouseX, smoothMouseY } = useMousePosition()

  // Background parallax movement
  const x1 = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30])
  const y1 = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30])
  const x2 = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40])
  const y2 = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40])

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
      
      {/* Premium Background Layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle radial gradient to center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.6),rgba(2,6,23,1))]" />
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-dot-pattern-faint opacity-[0.15]" />
        
        {/* Interactive Ambient Glows */}
        <motion.div 
          className="absolute top-[-10%] -left-[10%] w-[800px] h-[800px] rounded-full bg-accent/8 blur-[130px]"
          style={{ x: x1, y: y1 }}
        />
        <motion.div 
          className="absolute bottom-[-10%] -right-[10%] w-[800px] h-[800px] rounded-full bg-accent-secondary/8 blur-[130px]"
          style={{ x: x2, y: y2 }}
        />
        
        {/* Fixed Center Ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[500px] rounded-full bg-accent-glow/5 blur-[150px] opacity-60" />
      </div>

      <div className="section-content relative z-10">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

          {/* Section Header */}
          <MotionDiv className="mb-14 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow"> Projects
              </span>
            </h2>
            {/* Decorative rule */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50 rounded-full" />
              <div className="h-1.5 w-1.5 rounded-full bg-accent-secondary/60" />
              <div className="h-px w-24 bg-gradient-to-r from-accent/50 via-accent-secondary/60 to-accent-glow/50 rounded-full" />
              <div className="h-1.5 w-1.5 rounded-full bg-accent-glow/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50 rounded-full" />
            </div>
          </MotionDiv>

          {/* Project grid — always shows first 6, compact preview cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
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
            <MotionDiv className="mt-12 flex flex-col items-center gap-3" delay={0.1}>
              <Link href="/projects" aria-label={`View all ${projectsData.length} projects`}>
                <motion.span
                  className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold text-white border border-white/10 bg-white/5 backdrop-blur-sm hover:border-accent/40 hover:bg-accent/8 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-accent/10 cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>View All {projectsData.length} Projects</span>
                  {/* Arrow icon */}
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform duration-200" />
                </motion.span>
              </Link>
              <p className="text-[11px] text-secondary/40 font-mono">
                Showing {PREVIEW_COUNT} of {projectsData.length}
              </p>
            </MotionDiv>
          )}
        </div>
      </div>
    </section>
  )
}
