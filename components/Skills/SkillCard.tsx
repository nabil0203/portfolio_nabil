'use client'

import Image from 'next/image'
import { Code } from 'lucide-react'

interface SkillCardProps {
    category: string;
    skills: Array<{ name: string; url?: string; logo?: string }>;
}

interface SkillChipProps {
    skill: { name: string; url?: string; logo?: string };
    size?: 'sm' | 'md';
}

function SkillChip({ skill, size = 'md' }: SkillChipProps) {
    const Tag = skill.url ? 'a' : 'div'
    const isSmall = size === 'sm'

    return (
        <Tag
            key={skill.name}
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
                ${isSmall ? 'px-3.5 py-2' : 'px-4 py-2.5 gap-2.5'}
            `}
        >
            <span
                className={`flex items-center justify-center shrink-0 ${isSmall ? 'w-[18px] h-[18px]' : 'w-[22px] h-[22px]'}`}
            >
                {skill.logo ? (
                    <Image
                        src={skill.logo}
                        alt=""
                        width={isSmall ? 18 : 22}
                        height={isSmall ? 18 : 22}
                        className="object-contain"
                        unoptimized
                    />
                ) : (
                    <Code className={`text-slate-500 ${isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
                )}
            </span>
            <span className={`font-medium text-slate-300 whitespace-nowrap leading-none transition-colors duration-200 ${isSmall ? 'text-[0.8rem]' : 'text-sm'}`}>
                {skill.name}
            </span>
            {skill.url && (
                <span className={`text-slate-500 -ml-0.5 leading-none ${isSmall ? 'text-[0.6rem]' : 'text-[0.65rem]'}`}>↗</span>
            )}
        </Tag>
    )
}

export default function SkillCard({ category, skills }: SkillCardProps) {
    return (
        <>
            {/* ── DESKTOP: horizontal lane (sm and up) ── */}
            <div className="hidden sm:flex gap-3 md:gap-4 lg:gap-5 py-2">

                {/* Category label — full-height bordered badge, text centred */}
                <div className="w-32 md:w-40 lg:w-52 shrink-0 self-stretch flex">
                    <span className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-slate-900/60 backdrop-blur-xl border border-slate-800/60 border-l-4 border-l-accent text-center">
                        <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] leading-snug text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">
                            {category}
                        </h3>
                    </span>
                </div>

                {/* Wrapping chip grid */}
                <div className="flex flex-1 min-w-0 flex-wrap gap-2 py-1" role="list">
                    {skills.map((skill) => (
                        <SkillChip key={skill.name} skill={skill} size="md" />
                    ))}
                </div>
            </div>

            {/* ── MOBILE: stacked layout (below sm) ── */}
            <div className="flex sm:hidden flex-col gap-3 py-1">

                {/* Category label — full-width header */}
                <div className="w-full flex items-center gap-3 px-1 pb-2 border-b border-slate-700/50">
                    <div className="h-5 w-0.5 rounded-full bg-gradient-to-b from-accent to-accent-secondary shrink-0" />
                    <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">
                        {category}
                    </h3>
                </div>

                {/* Wrapping chip grid */}
                <div className="flex flex-wrap gap-2" role="list">
                    {skills.map((skill) => (
                        <SkillChip key={skill.name} skill={skill} size="sm" />
                    ))}
                </div>
            </div>
        </>
    )
}
