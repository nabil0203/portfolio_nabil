'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Project } from '@/data/portfolioDataTypes'

interface ProjectCardProps {
  project: Project & {
    imageUrl?: string
  }
  index: number
}

/**
 * Modern glassmorphic project card with 3D tilt, numbered index,
 * accent gradient top-bar, feature list, and polished CTA buttons.
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

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const paddedIndex = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      className="relative flex flex-col rounded-2xl border border-slate-800/60 bg-gradient-to-b from-slate-800/30 to-slate-900/10 backdrop-blur-sm overflow-hidden group shadow-xl shadow-black/40"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.09, ease: 'easeOut' }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(99,102,241,0.4)',
        boxShadow: '0 24px 60px rgba(59,130,246,0.12), 0 0 0 1px rgba(99,102,241,0.2)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top accent gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-secondary to-accent-glow opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Ambient glow blob */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-52 h-52 rounded-full bg-accent-secondary/10 blur-[60px] group-hover:bg-accent-secondary/20 transition-colors duration-500" />

      {/* Project image */}
      {project.imageUrl && (
        <div className="relative h-40 overflow-hidden border-b border-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none" />
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 gap-4">

        {/* Header row: index number + title */}
        <div className="flex items-start gap-3">
          <span className="shrink-0 text-[11px] font-mono font-bold text-accent-secondary/60 mt-1 select-none">
            {paddedIndex}
          </span>
          <h3 className="text-white font-bold text-base sm:text-lg leading-snug tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed -mt-1">
          {project.description}
        </p>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/60 mb-2">
              Key Features
            </p>
            <ul className="space-y-1.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-[11px] sm:text-xs text-secondary leading-relaxed"
                >
                  <span className="mt-[3px] shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Spacer to push footer down */}
        <div className="flex-1" />

        {/* Tech stack badges */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/60 mb-2">
            Built With
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] sm:text-[11px] font-medium tracking-wide text-cyan-300/80 bg-cyan-950/40 px-2 py-0.5 rounded-md border border-cyan-900/60 hover:border-cyan-700/50 hover:bg-cyan-900/50 transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Links */}
        <div className="flex gap-2 pt-4 border-t border-slate-800/60">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-700/50 bg-slate-800/40 text-secondary hover:text-white hover:border-slate-600/60 hover:bg-slate-700/50 transition-all duration-200"
              whileTap={{ scale: 0.96 }}
            >
              {/* GitHub icon */}
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border border-blue-900/60 bg-blue-950/40 text-accent hover:bg-blue-900/50 hover:border-blue-700/50 hover:text-white transition-all duration-200"
              whileTap={{ scale: 0.96 }}
            >
              {/* External link icon */}
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
