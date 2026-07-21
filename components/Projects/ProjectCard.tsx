'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import { Project } from '@/data/portfolioDataTypes'
import { Github, ArrowUpRight, ChevronRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index: number
}

/**
 * Horizontal two-column card.
 * Even index  → content LEFT  | image RIGHT
 * Odd  index  → image  LEFT   | content RIGHT
 * Mobile: always image on top, content below.
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1

  return (
    <MotionDiv
      className="group relative w-full"
      delay={(index % 4) * 0.08}
    >
      {/* Subtle separator line above each card (except first) */}
      {index !== 0 && (
        <div className="absolute -top-5 lg:-top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/80 to-transparent" />
      )}

      <div
        className={`flex flex-col md:flex-row ${
          isReversed
            ? 'md:flex-row-reverse items-center gap-12 lg:gap-28'
            : 'items-start gap-4 lg:gap-4'
        }`}
      >
        {/* ── Content Half ── */}
        <div className="flex flex-col flex-1 min-w-0">

          {/* Index label */}
          <span className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] mb-3 opacity-70">
            Project #{String(index + 1).padStart(2, '0')}
          </span>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:via-accent-secondary group-hover:to-accent-glow transition-all duration-300">
            {project.title}
          </h3>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[11px] font-semibold px-3 py-1 bg-slate-800/40 text-slate-300 rounded-full border border-slate-700/60 group-hover:border-accent/30 transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-secondary text-sm sm:text-[15px] leading-relaxed mb-8">
            {project.shortDescription || project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/60 text-slate-300 text-sm font-semibold hover:text-white hover:border-accent/50 hover:bg-accent/10 hover:shadow-md hover:shadow-accent/10 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="w-3.5 h-3.5" />
                Github
              </motion.a>
            )}

            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/60 text-slate-300 text-sm font-semibold hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-md hover:shadow-emerald-500/10 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
                Live
              </motion.a>
            )}

            <Link
              href={`/projects#${project.id}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-accent/70 hover:text-accent underline-offset-4 hover:underline transition-all duration-300 group/details"
            >
              Details
              <ChevronRight className="w-4 h-4 text-accent/40 group-hover/details:text-accent group-hover/details:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* ── Image Half ── */}
        <div className="w-full md:w-[42%] flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-800/40 shadow-2xl ring-1 ring-white/5 group-hover:ring-accent/20 transition-all duration-500">
            {project.imageUrl ? (
              <>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/20 opacity-75 group-hover:opacity-95 transition-opacity duration-500" />
              </>
            ) : (
              /* Fallback placeholder when no image */
              <div className="w-full h-full flex items-center justify-center bg-slate-800/60">
                <Github className="w-12 h-12 text-slate-600" />
              </div>
            )}

            {/* Status Badge */}
            {project.status && (
              <div
                className={`absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${
                  project.status === 'Live'
                    ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-400'
                    : 'bg-slate-950/60 border-white/10 text-accent'
                }`}
              >
                {project.status === 'Live' && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse align-middle" />
                )}
                {project.status}
              </div>
            )}
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}
