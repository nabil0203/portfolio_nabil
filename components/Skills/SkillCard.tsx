'use client'

import Image from 'next/image'
import { Code } from 'lucide-react'

interface SkillCardProps {
  category: string
  skills: Array<{ name: string; url?: string; logo?: string }>
}

/** A single skill chip — size is responsive via Tailwind classes. */
function SkillChip({ skill }: { skill: { name: string; url?: string; logo?: string } }) {
  const Tag = skill.url ? 'a' : 'div'

  return (
    <Tag
      href={skill.url ?? undefined}
      target={skill.url ? '_blank' : undefined}
      rel={skill.url ? 'noopener noreferrer' : undefined}
      role="listitem"
      className={`
        inline-flex items-center gap-2 rounded-xl
        border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm
        transition-all duration-200
        hover:border-accent/40 hover:bg-accent/5 hover:text-slate-100
        ${skill.url ? 'cursor-pointer' : 'cursor-default'}
        px-3.5 py-2 sm:px-4 sm:py-2.5
      `}
    >
      <span className="flex items-center justify-center shrink-0 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]">
        {skill.logo ? (
          <Image
            src={skill.logo}
            alt=""
            width={22}
            height={22}
            className="object-contain"
            unoptimized
          />
        ) : (
          <Code className="text-slate-500 w-3.5 h-3.5 sm:w-4 sm:h-4" />
        )}
      </span>
      <span className="font-medium text-slate-300 whitespace-nowrap leading-none transition-colors duration-200 text-[0.8rem] sm:text-sm">
        {skill.name}
      </span>
      {skill.url && (
        <span className="text-slate-500 -ml-0.5 leading-none text-[0.6rem] sm:text-[0.65rem]">↗</span>
      )}
    </Tag>
  )
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4 lg:gap-5 py-2">

      {/* Category label — stacked header on mobile, column card on desktop */}
      <div className="sm:w-32 md:w-40 lg:w-52 sm:shrink-0 sm:self-stretch sm:flex">
        {/* Mobile */}
        <div className="flex sm:hidden items-center gap-3 pb-2 border-b border-slate-700/50">
          <div className="h-5 w-0.5 rounded-full bg-gradient-to-b from-accent to-accent-secondary shrink-0" />
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">
            {category}
          </h3>
        </div>
        {/* Desktop */}
        <span className="hidden sm:flex w-full items-center justify-center px-4 py-3 rounded-lg bg-slate-900/60 backdrop-blur-xl border border-slate-800/60 border-l-4 border-l-accent text-center">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] leading-snug text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">
            {category}
          </h3>
        </span>
      </div>

      {/* Skills chips — single list, chips are responsive internally */}
      <div className="flex flex-1 min-w-0 flex-wrap gap-2 sm:py-1" role="list">
        {skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>

    </div>
  )
}
