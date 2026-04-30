'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import { Project } from '@/data/portfolioDataTypes'
import { Github, ExternalLink } from 'lucide-react'
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

  const background = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(99, 102, 241, 0.15),
      transparent 80%
    )
  `

  const statusColor = {
    'Live': 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30',
    'In Development': 'text-amber-400 bg-amber-400/10 border-amber-500/30',
    'Archived': 'text-slate-400 bg-slate-400/10 border-slate-500/30',
  }[project.status ?? 'Archived']

  return (
    <MotionDiv
      id={project.id}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col rounded-3xl border border-slate-800/60 overflow-hidden group shadow-2xl shadow-black/60 min-h-[400px] sm:min-h-[480px] bg-slate-950"
      delay={(index % 4) * 0.1}
      whileHover={{
        borderColor: 'rgba(99,102,241,0.45)',
        boxShadow: '0 32px 80px rgba(59,130,246,0.16), 0 0 0 1px rgba(99,102,241,0.25)',
      }}
    >
      {/* ── INTERACTIVE MOUSE SPOTLIGHT ── */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-20 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      {/* ── BACKGROUND ── */}
      {project.imageUrl ? (
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 ease-in-out opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/100 via-slate-950/80 to-slate-950/20 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-900/30 to-slate-950 group-hover:from-indigo-900/20 transition-colors duration-500" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_10%,transparent_100%)]" />
        </div>
      )}

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-30" />

      {/* ── CONTENT LAYOUT ── */}
      <div className="relative z-30 flex flex-1 flex-col sm:flex-row h-full">

        {/* ── LEFT COLUMN: Title + Meta + Buttons ── */}
        <div className="flex flex-col justify-between p-7 sm:p-10 sm:w-[45%] shrink-0 gap-6 transition-transform duration-500 group-hover:translate-x-2">

          {/* Top: index + status + year */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-mono font-bold text-indigo-400 select-none bg-indigo-950/50 px-2.5 py-1 rounded-md border border-indigo-500/20 backdrop-blur-sm">
              #{String(index + 1).padStart(2, '0')}
            </span>
            {project.status && (
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border backdrop-blur-sm ${statusColor}`}>
                {project.status}
              </span>
            )}
            {project.year && (
              <span className="text-[10px] font-mono text-white/50 border border-white/10 px-2.5 py-1 rounded-md bg-white/5 backdrop-blur-sm">
                {project.year}
              </span>
            )}
          </div>

          {/* Title */}
          <div className="mt-auto sm:mt-0">
            <h3 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-2xl">
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
                aria-label={`View ${project.title} on GitHub`}
                className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-sm font-semibold bg-white/5 border border-white/10 text-white backdrop-blur-md shadow-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 whitespace-nowrap"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Source Code</span>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title}`}
                className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-sm font-semibold border border-indigo-500/50 text-white bg-indigo-500/20 backdrop-blur-md shadow-lg hover:bg-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:border-indigo-400 transition-all duration-300 whitespace-nowrap"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Live Project</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Glassmorphic details panel ── */}
        <div className="flex flex-col flex-1 justify-center p-7 sm:p-10 gap-6 sm:border-l border-t sm:border-t-0 border-white/10 bg-slate-900/30 backdrop-blur-xl group-hover:bg-slate-900/50 transition-colors duration-500">

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            {project.description}
          </p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-2">
                <span className="h-px bg-indigo-500/30 flex-1" />
                Key Features
                <span className="h-px bg-indigo-500/30 flex-1" />
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {project.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    <span className="leading-snug">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="pt-2">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">Technologies</p>
            <div className="flex flex-row flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] font-medium tracking-wide text-cyan-100 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-800/50 hover:border-cyan-400/60 hover:bg-cyan-900/60 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/50 transition-all duration-300 cursor-default whitespace-nowrap backdrop-blur-sm"
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