'use client'

import Image from 'next/image'
import { ArrowUpRight, Code } from 'lucide-react'
import type { Skill } from '@/data/portfolioDataTypes'

interface SkillCardProps {
  category: string
  skills: Skill[]
}

/** A single skill chip — size is responsive via Tailwind classes. */
function SkillChip({ skill }: { skill: Skill }) {
  const Tag = skill.url ? 'a' : 'div'

  return (
    <Tag
      href={skill.url ?? undefined}
      target={skill.url ? '_blank' : undefined}
      rel={skill.url ? 'noopener noreferrer' : undefined}
      role="listitem"
      className={`
        inline-flex items-center gap-2 rounded-xl
        border border-steel-300 bg-steel-100 
        transition-all duration-200
        hover:border-accent/40 hover:bg-accent/5 hover:text-steel-800
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
          <Code className="text-steel-500 w-3.5 h-3.5 sm:w-4 sm:h-4" />
        )}
      </span>
      <span className="font-medium text-steel-700 whitespace-nowrap leading-none transition-colors duration-200 text-[0.8rem] sm:text-sm">
        {skill.name}
      </span>
      {skill.url && (
        <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
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
        <div className="flex sm:hidden items-center gap-3 pb-2 border-b border-steel-300">
          <div className="h-5 w-0.5 rounded-full shrink-0" />
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-steel-800 ">
            {category}
          </h3>
        </div>
        {/* Desktop */}
        <span className="hidden sm:flex w-full items-center justify-center px-4 py-3 rounded-lg bg-steel-100  border border-steel-300 border-l-4 border-l-accent text-center">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] leading-snug text-steel-800 ">
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
