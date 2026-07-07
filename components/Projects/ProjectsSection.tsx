'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MotionDiv from '../MotionDiv'
import SectionDivider from '../SectionDivider'
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
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">Projects
              </span>
            </h2>
            <SectionDivider />
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
            <MotionDiv className="mt-12 flex flex-col items-center gap-4" delay={0.2}>
              <Link href="/projects" aria-label={`View all ${projectsData.length} projects`} className="group relative flex justify-center">
                {/* Gentle, slow pulse behind the button */}
                <div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-glow rounded-full opacity-20 blur-[2px] group-hover:opacity-40 animate-pulse transition-opacity duration-300"
                  style={{ animationDuration: '4s' }}
                />
                
                <motion.span
                  className="relative flex items-center gap-3 px-6 py-2.5 rounded-full text-sm font-medium text-white border border-accent/30 bg-black/60 backdrop-blur-md hover:border-accent/60 transition-colors duration-300 cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="tracking-wide">View All Projects</span>
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ml-0.5" />
                </motion.span>
              </Link>
              
              <p className="text-[11px] text-secondary/50 font-mono uppercase tracking-widest mt-1">
                Showing {PREVIEW_COUNT} of {projectsData.length}
              </p>
            </MotionDiv>
          )}
        </div>
      </div>
    </section>
  )
}
