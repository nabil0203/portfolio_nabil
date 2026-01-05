'use client'

import { motion, Variants } from 'framer-motion'
import { Project } from '@/data/portfolioData'

const LINK_COLOR_RGB = '59, 130, 246'

interface ProjectCardProps {
  project: Project & {
    imageUrl?: string
  }
  index: number
}

const linkPulseVariants: Variants = {
  pulse: {
    borderColor: [
      `rgba(${LINK_COLOR_RGB}, 0.5)`,
      `rgba(${LINK_COLOR_RGB}, 1)`,
      `rgba(${LINK_COLOR_RGB}, 0.5)`,
    ],
    boxShadow: [
      `0 0 4px rgba(${LINK_COLOR_RGB}, 0.2)`,
      `0 0 8px rgba(${LINK_COLOR_RGB}, 0.5)`,
      `0 0 4px rgba(${LINK_COLOR_RGB}, 0.2)`,
    ],
  },
}

const linkPulseTransition = {
  duration: 3,
  repeat: Infinity,
  ease: 'easeInOut',
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 transition-colors flex flex-col h-full shadow-xl shadow-black/20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255, 255, 255, 0.2)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 blur-3xl rounded-full" />
      {project.imageUrl && (
        <div className="mb-6 h-48 overflow-hidden rounded-lg shadow-inner">
          <img
            src={project.imageUrl}
            alt={`Preview image for ${project.title} project`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>
      )}

      <h3 className="text-white font-bold text-2xl mb-4">
        {project.title}
      </h3>

      <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="mt-4 mb-8">
        <h4 className="text-sm font-medium text-accent mb-2">Built With:</h4>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, toolIndex) => (
            <span
              key={toolIndex}
              className="text-xs font-bold tracking-wider text-accent bg-accent/5 px-2 py-1  rounded border border-accent/10"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-secondary/50">
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 bg-surface/80 hover:bg-accent hover:text-white transition-colors duration-300 flex items-center gap-2 px-4 py-2 rounded-lg font-medium border text-sm"
            style={{ borderWidth: '1px' }}
            variants={linkPulseVariants}
            animate="pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
            className="text-cyan-400 bg-surface/80 hover:bg-accent hover:text-white transition-colors duration-300 flex items-center gap-2 px-4 py-2 rounded-lg font-medium border text-sm"
            style={{ borderWidth: '1px' }}
            variants={linkPulseVariants}
            animate="pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label={`View live demonstration of ${project.title}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}