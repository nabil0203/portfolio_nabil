'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import { Project } from '@/data/portfolioDataTypes'
import { Github, ExternalLink, ChevronRight, Code2 } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index: number
}

/**
 * Compact vertical preview card — used on main page 3-col grid.
 * 3D tilt removed (was running 6× useSpring + useTransform per card).
 * Replaced with a simple CSS lift + border glow on hover.
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <MotionDiv
      className="relative h-full flex flex-col rounded-2xl border border-slate-600/70 bg-[#030712]/90 backdrop-blur-xl overflow-hidden group shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30"
      delay={(index % 6) * 0.05}
    >
      {/* Decorative Background Glow */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/10 transition-colors duration-500" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-accent-secondary/5 rounded-full blur-[60px] group-hover:bg-accent-secondary/10 transition-colors duration-500" />

      {/* Image Container */}
      {project.imageUrl && (
        <div className="relative p-3 pb-0">
          <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden shadow-inner">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Status Badge */}
            {project.status && (
              <div className="absolute top-2 right-2 z-20 px-2 py-0.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-[9px] font-bold text-accent uppercase tracking-wider">
                {project.status}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Body Content */}
      <div className="relative z-20 flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] font-bold text-accent-secondary uppercase tracking-[0.2em] opacity-80">
              # {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-base sm:text-lg font-black text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:via-accent-secondary group-hover:to-accent-glow transition-all duration-300">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-secondary/100 text-xs leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription || project.description}
        </p>

        {/* Tech Stack - Pill Style */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="text-[9px] font-bold text-accent-secondary/60 uppercase tracking-wider w-full mb-1.5 flex items-center gap-1.5">
            <Code2 className="w-3 h-3 text-accent" />
            <span className='text-accent'>Built With</span>
          </span>
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-[10px] font-bold px-2 py-0.5 bg-slate-800/30 text-slate-300 rounded-md border border-slate-700/50 group-hover:border-accent/30 transition-all duration-300"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="relative z-30 mt-auto pt-3 flex items-center justify-between border-t border-slate-800/40">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-secondary hover:text-white hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-secondary hover:text-white hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </div>

          <Link
            href={`/projects#${project.id}`}
            className="flex items-center gap-1.5 text-[10px] font-black text-white uppercase tracking-wider group/link hover:text-accent transition-all duration-300 py-1"
          >
            <span className="relative z-10">Details</span>
            <div className="p-1 rounded-md bg-slate-800/50 group-hover/link:bg-accent/10 transition-colors duration-300">
              <ChevronRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </MotionDiv>
  )
}
