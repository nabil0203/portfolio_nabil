'use client'

import Image from 'next/image'

interface SkillCardProps {
    category: string;
    skills: Array<{ name: string; url?: string; logo?: string }>;
}

const categoryStyles: Record<string, {
    label: string
    line: string
    tileHover: string
}> = {
    'Backend': {
        label: 'text-blue-400',
        line: 'via-blue-500/40',
        tileHover: 'hover:border-blue-500/50 hover:bg-blue-950/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover/icon:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]',
    },
    'Frontend': {
        label: 'text-cyan-400',
        line: 'via-cyan-500/40',
        tileHover: 'hover:border-cyan-500/50 hover:bg-cyan-950/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover/icon:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]',
    },
    'Database': {
        label: 'text-emerald-400',
        line: 'via-emerald-500/40',
        tileHover: 'hover:border-emerald-500/50 hover:bg-emerald-950/30 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] group-hover/icon:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]',
    },
    'Programming Languages': {
        label: 'text-violet-400',
        line: 'via-violet-500/40',
        tileHover: 'hover:border-violet-500/50 hover:bg-violet-950/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] group-hover/icon:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]',
    },
    'Tools': {
        label: 'text-amber-400',
        line: 'via-amber-500/40',
        tileHover: 'hover:border-amber-500/50 hover:bg-amber-950/30 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] group-hover/icon:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]',
    },
    'Problem Solving Platforms': {
        label: 'text-rose-400',
        line: 'via-rose-500/40',
        tileHover: 'hover:border-rose-500/50 hover:bg-rose-950/30 hover:shadow-[0_0_20px_rgba(251,113,133,0.15)] group-hover/icon:drop-shadow-[0_0_8px_rgba(251,113,133,0.8)]',
    },
    'Others': {
        label: 'text-slate-400',
        line: 'via-slate-500/40',
        tileHover: 'hover:border-slate-600/50 hover:bg-slate-800/40 hover:shadow-[0_0_20px_rgba(148,163,184,0.1)] group-hover/icon:drop-shadow-[0_0_8px_rgba(148,163,184,0.8)]',
    },
}

const fallback = categoryStyles['Others']

export default function SkillCard({ category, skills }: SkillCardProps) {
    const style = categoryStyles[category] ?? fallback

    return (
        <div className="py-6 sm:py-8">

            {/* Centered Category Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <div className={`h-px w-16 sm:w-24 bg-gradient-to-r from-transparent ${style.line}`} />
                <h3 className={`text-sm sm:text-base font-extrabold uppercase tracking-[0.25em] ${style.label} whitespace-nowrap`}>
                    {category}
                </h3>
                <div className={`h-px w-16 sm:w-24 bg-gradient-to-l from-transparent ${style.line}`} />
            </div>

            {/* Icon Grid — compact tiles (centered) */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4" role="list">
                {skills.map((skill) => {
                    const Tag = skill.url ? 'a' : 'div'
                    return (
                        <Tag
                            key={skill.name}
                            href={skill.url ?? undefined}
                            target={skill.url ? '_blank' : undefined}
                            rel={skill.url ? 'noopener noreferrer' : undefined}
                            className={`group/icon flex flex-col items-center justify-center w-24 sm:w-[104px] gap-2 sm:gap-2.5 p-3 sm:p-4 rounded-2xl border border-slate-800/60 bg-slate-900/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${style.tileHover} ${skill.url ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                            <div className="h-8 w-8 flex items-center justify-center relative mx-auto">
                                {skill.logo ? (
                                    <Image
                                        src={skill.logo}
                                        alt={skill.name}
                                        width={28}
                                        height={28}
                                        className="object-contain transition-transform duration-300 group-hover/icon:scale-110"
                                        unoptimized
                                    />
                                ) : (
                                    <svg className="w-6 h-6 text-slate-500 transition-transform duration-300 group-hover/icon:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                )}
                            </div>
                            
                            <div className="text-center w-full">
                                <span className="block text-[0.7rem] sm:text-[0.75rem] font-semibold text-slate-300 tracking-wide leading-tight">
                                    {skill.name}
                                </span>
                                {skill.url && (
                                    <span className="block text-[0.55rem] text-slate-500 mt-1 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                                        View Profile
                                    </span>
                                )}
                            </div>
                        </Tag>
                    )
                })}
            </div>
        </div>
    )
}
