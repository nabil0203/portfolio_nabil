'use client'

import Image from 'next/image'
import { Code } from 'lucide-react'

interface SkillCardProps {
    category: string;
    skills: Array<{ name: string; url?: string; logo?: string }>;
}

export default function SkillCard({ category, skills }: SkillCardProps) {
    return (
        <>
            {/* ── DESKTOP: horizontal lane (sm and up) ── */}
            {/*
                items-stretch (default) so the label column grows to the full
                height of the chips area (which may wrap to multiple lines).
                The label column uses flex+items-center internally to stay centred.
            */}
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
                    {skills.map((skill) => {
                        const Tag = skill.url ? 'a' : 'div'
                        return (
                            <Tag
                                key={skill.name}
                                href={skill.url ?? undefined}
                                target={skill.url ? '_blank' : undefined}
                                rel={skill.url ? 'noopener noreferrer' : undefined}
                                role="listitem"
                                className={`
                                    inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                                    border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm
                                    transition-all duration-200
                                    hover:border-accent/40 hover:bg-accent/5 hover:text-slate-100
                                    ${skill.url ? 'cursor-pointer' : 'cursor-default'}
                                `}
                            >
                                <span className="w-[22px] h-[22px] flex items-center justify-center shrink-0">
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
                                        <Code className="w-4 h-4 text-slate-500" />
                                    )}
                                </span>
                                <span className="text-sm font-medium text-slate-300 whitespace-nowrap leading-none transition-colors duration-200">
                                    {skill.name}
                                </span>
                                {skill.url && (
                                    <span className="text-[0.65rem] text-slate-500 -ml-0.5 leading-none">↗</span>
                                )}
                            </Tag>
                        )
                    })}
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
                    {skills.map((skill) => {
                        const Tag = skill.url ? 'a' : 'div'
                        return (
                            <Tag
                                key={skill.name}
                                href={skill.url ?? undefined}
                                target={skill.url ? '_blank' : undefined}
                                rel={skill.url ? 'noopener noreferrer' : undefined}
                                role="listitem"
                                className={`
                                    inline-flex items-center gap-2 px-3.5 py-2 rounded-lg
                                    border border-slate-700/50 bg-slate-900/30
                                    transition-all duration-200
                                    hover:border-accent/40 hover:bg-accent/5 hover:text-slate-100
                                    ${skill.url ? 'cursor-pointer' : 'cursor-default'}
                                `}
                            >
                                <span className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
                                    {skill.logo ? (
                                        <Image
                                            src={skill.logo}
                                            alt=""
                                            width={18}
                                            height={18}
                                            className="object-contain"
                                            unoptimized
                                        />
                                    ) : (
                                        <Code className="w-3.5 h-3.5 text-slate-500" />
                                    )}
                                </span>
                                <span className="text-[0.8rem] font-medium text-slate-300 whitespace-nowrap">
                                    {skill.name}
                                </span>
                                {skill.url && (
                                    <span className="text-[0.6rem] text-slate-500 leading-none">↗</span>
                                )}
                            </Tag>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
