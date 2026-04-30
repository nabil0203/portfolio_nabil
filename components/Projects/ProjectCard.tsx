'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import { Project } from '@/data/portfolioDataTypes'
import { Github, ExternalLink, ChevronRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index: number
}

/**
 * Compact vertical preview card — used on main page 3-col grid
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <MotionDiv
      className="relative flex flex-col rounded-2xl border border-slate-800/60 bg-gradient-to-b from-slate-800/30 to-slate-900/10 backdrop-blur-sm overflow-hidden group shadow-xl shadow-black/40"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      delay={(index % 6) * 0.05}
      whileHover={{
        y: -6,
        borderColor: 'rgba(99,102,241,0.4)',
        boxShadow: '0 24px 60px rgba(59,130,246,0.12), 0 0 0 1px rgba(99,102,241,0.2)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-secondary to-accent-glow opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image */}
      {project.imageUrl && (
        <div className="relative h-40 overflow-hidden border-b border-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none" />
          <img src={project.imageUrl} alt={`${project.title} preview`}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="flex items-start gap-3">
          <span className="shrink-0 text-[11px] font-mono font-bold text-accent-secondary/60 mt-1 select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-white font-bold text-base sm:text-lg leading-snug tracking-tight">{project.title}</h3>
        </div>

        <p className="text-secondary text-sm leading-relaxed line-clamp-2 -mt-1 opacity-70">
          {project.shortDescription || project.description}
        </p>

        <div className="flex-1" />

        {/* Tech */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/60 mb-2">Built With</p>
          <div className="flex flex-row flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span key={tool} className="text-[10px] sm:text-[11px] font-medium tracking-wide text-cyan-300/80 bg-cyan-950/40 px-2.5 py-0.5 rounded-lg border border-cyan-900/60 hover:border-cyan-700/50 hover:bg-cyan-900/50 transition-colors duration-200 whitespace-nowrap">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3 pt-4 border-t border-slate-800/60">
          {project.githubUrl && (
            <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-semibold border border-slate-700/50 bg-slate-800/40 text-secondary hover:text-white hover:border-slate-600/60 hover:bg-slate-700/50 transition-all duration-200"
              whileHover={{ y: -1 }} whileTap={{ scale: 0.96 }}>
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /><span className="whitespace-nowrap">GitHub</span>
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-semibold border border-blue-900/60 bg-blue-950/40 text-accent hover:bg-blue-900/50 hover:border-blue-700/50 hover:text-white transition-all duration-200"
              whileHover={{ y: -1 }} whileTap={{ scale: 0.96 }}>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /><span className="whitespace-nowrap">Live Demo</span>
            </motion.a>
          )}

          {/* "Details" — navigates to /projects page, scrolled to this project */}
          <Link
            href={`/projects#${project.id}`}
            aria-label={`Show full details for ${project.title}`}
            className="ml-auto flex items-center gap-1.5 text-[11px] font-bold text-secondary hover:text-accent/80 transition-colors duration-200 group/details whitespace-nowrap"
          >
            <span>Details</span>
            <ChevronRight className="w-3 h-3 opacity-60 group-hover/details:translate-x-0.5 group-hover/details:opacity-100 transition-all duration-200" />
          </Link>
        </div>
      </div>
    </MotionDiv>
  )
}
