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
      className="relative h-full flex flex-col rounded-3xl border border-slate-800/50 bg-[#030712]/60 backdrop-blur-xl overflow-hidden group shadow-2xl transition-all duration-500"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      delay={(index % 6) * 0.05}
      whileHover={{
        y: -10,
        borderColor: 'rgba(99,102,241,0.3)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {/* Decorative Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-[100px] group-hover:bg-accent/10 transition-colors duration-700" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-secondary/5 rounded-full blur-[100px] group-hover:bg-accent-secondary/10 transition-colors duration-700" />

      {/* Image Container with Breathing Room */}
      {project.imageUrl && (
        <div className="relative p-4 pb-0">
          <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden shadow-inner group-hover:shadow-accent/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60" 
              loading="lazy"
            />
            
            {/* Status Badge */}
            {project.status && (
              <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-accent uppercase tracking-wider">
                {project.status}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Body Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex flex-col gap-1">
             <span className="text-[10px] font-bold text-accent-secondary uppercase tracking-[0.2em] opacity-80">
               # {String(index + 1).padStart(2, '0')}
             </span>
             <h3 className="text-xl sm:text-2xl font-black text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:via-accent-secondary group-hover:to-accent-glow transition-all duration-300">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-secondary/70 text-sm leading-relaxed mb-6 line-clamp-2 sm:line-clamp-3">
          {project.shortDescription || project.description}
        </p>

        {/* Tech Stack - Pill Style */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.slice(0, 4).map((tool) => (
            <span 
              key={tool} 
              className="text-[10px] font-bold px-3 py-1 bg-slate-800/30 text-slate-300 rounded-lg border border-slate-700/50 group-hover:border-accent/30 transition-all duration-300"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="text-[10px] font-bold text-secondary/40 py-1">
              +{project.tools.length - 4} more
            </span>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-800/40">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <motion.a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-secondary hover:text-white hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                whileHover={{ y: -3 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-secondary hover:text-white hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                whileHover={{ y: -3 }} 
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>

          <Link
            href={`/projects#${project.id}`}
            className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-wider group/link hover:text-accent transition-colors duration-300"
          >
            Details
            <div className="p-1.5 rounded-lg bg-slate-800/50 group-hover/link:bg-accent/10 transition-colors duration-300">
              <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </MotionDiv>
  )
}
