'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/portfolioDataTypes'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectFullCardProps {
  project: Project & { imageUrl?: string }
  index: number
}



export default function ProjectFullCard({ project, index }: ProjectFullCardProps) {
  const statusColor = {
    'Live': 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30',
    'In Development': 'text-amber-400 bg-amber-400/10 border-amber-500/30',
    'Archived': 'text-slate-400 bg-slate-400/10 border-slate-500/30',
  }[project.status ?? 'Archived']

  return (
    <motion.div
      id={project.id}
      className="relative flex flex-col rounded-2xl border border-slate-800/60 overflow-hidden group shadow-2xl shadow-black/60 min-h-[400px] sm:min-h-[480px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{
        borderColor: 'rgba(99,102,241,0.45)',
        boxShadow: '0 32px 80px rgba(59,130,246,0.16), 0 0 0 1px rgba(99,102,241,0.25)',
      }}
    >
      {/* ── BACKGROUND ── */}
      {project.imageUrl ? (
        <>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Dark overlay for image to ensure text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/60 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        </>
      ) : (
        <>
          {/* Base matching the dark background */}
          <div className="absolute inset-0 bg-slate-950" />
          {/* Subtle radial gradient to give a faint glossy center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-900/30 to-slate-950" />

          {/* Faint grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_10%,transparent_100%)]" />

          {/* Very subtle color hints so it doesn't look completely empty */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none" />
        </>
      )}

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-secondary to-accent-glow opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      {/* ── CONTENT LAYOUT ── */}
      <div className="relative z-10 flex flex-1 flex-col sm:flex-row">

        {/* ── LEFT COLUMN: Title + Meta + Buttons ── */}
        <div className="flex flex-col justify-between p-7 sm:p-10 sm:w-[42%] shrink-0 gap-6">

          {/* Top: index + status + year */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-white/40 select-none">
              #{String(index + 1).padStart(2, '0')}
            </span>
            {project.status && (
              <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${statusColor}`}>
                {project.status}
              </span>
            )}
            {project.year && (
              <span className="text-[9px] font-mono text-white/30 border border-white/10 px-2 py-0.5 rounded-full">
                {project.year}
              </span>
            )}
          </div>

          {/* Title */}
          <div>
            <h3 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight drop-shadow-lg">
              {project.title}
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row flex-wrap gap-2.5">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold bg-black/40 border border-white/20 text-white backdrop-blur-2xl shadow-xl hover:bg-white/20 hover:border-white/40 transition-all duration-200 w-fit"
                whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}
              >
                <Github className="w-4 h-4 shrink-0" /><span>View on GitHub</span>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold border border-accent/50 text-white bg-accent/20 backdrop-blur-2xl shadow-xl hover:bg-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:border-accent transition-all duration-300 w-fit"
                whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}
              >
                <ExternalLink className="w-4 h-4 shrink-0" /><span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Glassmorphic details panel ── */}
        <div className="flex flex-col flex-1 justify-center p-7 sm:p-10 gap-5 sm:border-l border-t sm:border-t-0 border-white/5 bg-black/30 backdrop-blur-md">

          {/* Description */}
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-secondary/70 mb-3">
                Key Features
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white/65">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-2.5">Built With</p>
            <div className="flex flex-row flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool}
                  className="text-[11px] font-medium tracking-wide text-cyan-300/80 bg-cyan-950/50 px-2.5 py-1 rounded-lg border border-cyan-900/60 hover:border-cyan-700/60 hover:bg-cyan-900/60 transition-colors duration-200 whitespace-nowrap backdrop-blur-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
