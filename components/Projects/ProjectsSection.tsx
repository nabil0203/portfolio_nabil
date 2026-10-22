'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Code2, ExternalLink, Github } from 'lucide-react'
import SectionHeader from '../SectionHeader'
import MotionDiv from '../MotionDiv'
import { projectsData } from '@/data/portfolioData'

/**
 * Project explorer (master–detail).
 * A pinned list of projects sits beside one detail panel. The panel's height
 * is driven entirely by its content; nothing is fixed or clipped.
 * On small screens the list becomes a swipeable strip above the panel.
 */
export default function ProjectsSection() {
  const [activeId, setActiveId] = useState(projectsData[0]?.id)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const activeIndex = Math.max(0, projectsData.findIndex(p => p.id === activeId))
  const project = projectsData[activeIndex]
  if (!project) return null

  // Arrow-key navigation, as expected from a tablist
  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End']
    if (!keys.includes(e.key)) return
    e.preventDefault()
    const last = projectsData.length - 1
    const next =
      e.key === 'Home' ? 0
        : e.key === 'End' ? last
          : e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (activeIndex + 1) % projectsData.length
            : (activeIndex - 1 + projectsData.length) % projectsData.length
    const id = projectsData[next].id
    setActiveId(id)
    tabRefs.current[id]?.focus()
  }

  return (
    <section id="projects" className="py-16 md:py-20 scroll-mt-16 bg-steel-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader label="My" highlight="Projects" className="mb-8 md:mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
          {/* ── Project list (pinned on desktop) ── */}
          <div className="lg:col-span-4 min-w-0 lg:sticky lg:top-28 lg:self-start">
            <div
              role="tablist"
              aria-label="Projects"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="flex flex-nowrap md:flex-wrap lg:flex-nowrap lg:flex-col gap-2 overflow-x-auto md:overflow-x-visible lg:overflow-y-auto lg:max-h-[calc(100dvh-7rem)] pb-2 lg:pb-0 lg:pr-1 snap-x"
            >
              {projectsData.map((p, i) => {
                const isActive = p.id === project.id
                return (
                  <button
                    key={p.id}
                    ref={el => { tabRefs.current[p.id] = el }}
                    role="tab"
                    id={`tab-${p.id}`}
                    aria-selected={isActive}
                    aria-controls="project-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(p.id)}
                    className={`snap-start shrink-0 text-left rounded-lg border px-4 py-2.5 transition-colors duration-200 ${isActive
                      ? 'bg-steel-800 border-steel-800 text-steel-50'
                      : 'bg-steel-50 border-steel-300 text-steel-700 hover:bg-steel-100 hover:border-steel-400'
                      }`}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="font-display font-semibold text-[15px] whitespace-nowrap lg:whitespace-normal">
                        {p.title}
                      </span>
                      <span className={`hidden lg:inline text-xs tabular-nums ${isActive ? 'text-steel-300' : 'text-steel-500'}`}>
                        {p.year ?? String(i + 1).padStart(2, '0')}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── Detail panel (height follows content) ── */}
          <MotionDiv className="lg:col-span-8 min-w-0">
            <div
              role="tabpanel"
              id="project-panel"
              aria-labelledby={`tab-${project.id}`}
              className="overflow-hidden rounded-xl border border-steel-300 bg-steel-100"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {/* Screenshot — natural proportions, never cropped */}
                  <div className="w-full bg-steel-200 border-b border-steel-300">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} screenshot`}
                        className="block w-full h-auto"
                        decoding="async"
                      />
                    ) : (
                      <div className="flex items-center justify-center py-14">
                        <Code2 className="w-10 h-10 text-steel-400" aria-hidden="true" />
                      </div>
                    )}
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col gap-5">
                    {/* Title + actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-steel-800">
                          {project.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold">
                          {project.status && (
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 ${project.status === 'Live'
                                ? 'bg-steel-800 text-steel-50'
                                : 'bg-steel-200 text-steel-700 border border-steel-300'
                                }`}
                            >
                              {project.status === 'Live' && (
                                <span className="h-1.5 w-1.5 rounded-full bg-steel-50" aria-hidden="true" />
                              )}
                              {project.status}
                            </span>
                          )}
                          {project.year && (
                            <span className="rounded-md border border-steel-300 px-2 py-0.5 text-steel-600">
                              {project.year}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2 shrink-0">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-steel-800 px-3.5 py-2 text-sm font-semibold text-steel-50 transition-colors hover:bg-steel-600"
                          >
                            <ExternalLink className="w-4 h-4" aria-hidden="true" /> Live demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-steel-400 px-3.5 py-2 text-sm font-semibold text-steel-800 transition-colors hover:bg-steel-200"
                          >
                            <Github className="w-4 h-4" aria-hidden="true" /> Source
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-[15px] leading-relaxed text-steel-600 max-w-prose">
                      {project.description}
                    </p>

                    {project.features && project.features.length > 0 && (
                      <div>
                        <h4 className="font-display text-base font-semibold text-steel-800 mb-3">Key features</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                          {project.features.map(feature => (
                            <li key={feature} className="flex items-start gap-2.5 text-sm text-steel-700 leading-snug">
                              <Check className="w-4 h-4 mt-px shrink-0 text-steel-500" aria-hidden="true" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="font-display text-base font-semibold text-steel-800 mb-3">Built with</h4>
                      <ul className="flex flex-wrap gap-1.5">
                        {project.tools.map(tool => (
                          <li
                            key={tool}
                            className="rounded-md border border-steel-300 bg-steel-50 px-2.5 py-1 text-[13px] font-medium text-steel-700"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}