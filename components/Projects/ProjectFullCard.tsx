'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import { Project } from '@/data/portfolioDataTypes'
import { Github, ExternalLink, Check, Code2 } from 'lucide-react'
import { MouseEvent } from 'react'

interface ProjectFullCardProps {
  project: Project
  index: number
}

export default function ProjectFullCard({ project, index }: ProjectFullCardProps) {
  // Mouse position values for the interactive spotlight effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const statusColor = {
    'Live': 'text-steel-800 bg-steel-200 border-steel-400',
    'In Development': 'text-steel-600 bg-steel-100 border-steel-300',
    'Archived': 'text-steel-500 bg-steel-100 border-steel-300',
  }[project.status ?? 'Archived']

  return (
    <MotionDiv
      id={project.id}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col rounded-xl border border-steel-300 overflow-hidden group shadow-none min-h-[450px] sm:min-h-[520px] bg-steel-50 !scroll-mt-28"
      delay={(index % 4) * 0.1}
      whileHover={{
        borderColor: '#6C757D',
      }}
    >
      {/* ── INTERACTIVE MOUSE SPOTLIGHT ── */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-20 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ 
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--accent-rgb), 0.08),
              transparent 80%
            )
          ` 
        }}
      />

      {/* ── BACKGROUND ── */}
      {project.imageUrl ? (
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 grayscale opacity-30 group-hover:opacity-50 transition-all duration-1000 ease-in-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-steel-50/60" />
          <div className="absolute inset-0 " />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-steel-50" />
        </div>
      )}

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-300 z-30" />

      {/* ── CONTENT LAYOUT ── */}
      <div className="relative z-30 flex flex-1 flex-col lg:flex-row h-full">

        {/* ── LEFT COLUMN: Title + Meta + Buttons ── */}
        <div className="flex flex-col justify-between p-8 sm:p-12 lg:w-[45%] shrink-0 gap-8">

          {/* Top: index + status + year */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[11px] font-black text-accent-secondary select-none bg-accent-secondary/5 px-3 py-1.5 rounded-full border border-accent-secondary/20  uppercase tracking-widest">
              # {String(index + 1).padStart(2, '0')}
            </span>
            {project.status && (
              <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border  ${statusColor}`}>
                {project.status}
              </span>
            )}
            {project.year && (
              <span className="text-[10px] font-bold text-steel-600 border border-steel-300 px-3 py-1.5 rounded-full bg-steel-100  uppercase tracking-wider">
                {project.year}
              </span>
            )}
          </div>

          {/* Title */}
          <div className="mt-4">
            <h3 className="text-steel-800 font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight  transition-all duration-500 pr-1">
              {project.title}
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-2 sm:gap-3 mt-4">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest bg-steel-100 border border-steel-300 text-steel-800  hover:bg-steel-100 hover:border-steel-300 transition-all duration-300"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
              >
                <Github className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Source</span>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest bg-accent/10 border border-accent/20 text-accent  hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Details panel ── */}
        <div className="flex flex-col flex-1 justify-center p-8 sm:p-12 gap-8 lg:border-l border-t lg:border-t-0 border-steel-300 bg-steel-50/80  transition-all duration-500">

          {/* Description */}
          <p className="text-steel-800/90 text-base sm:text-lg leading-relaxed font-medium">
            {project.description}
          </p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent-secondary/80 flex items-center gap-3">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>Key <span className='text-accent'>Features</span></span>
                <span className="h-px bg-steel-100 flex-1" />
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {project.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="flex items-start gap-3.5 text-sm font-semibold text-steel-600 group-hover:text-steel-800 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent shadow-none" />
                    <span className="leading-snug">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="pt-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent-secondary/80 mb-4 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-accent" />
              Core Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[10px] font-black uppercase tracking-widest text-steel-600 bg-steel-100 px-4 py-2 rounded-xl border border-steel-300 hover:border-accent/40 hover:bg-accent/5 hover:text-accent transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </MotionDiv>
  )
}