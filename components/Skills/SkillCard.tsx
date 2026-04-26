'use client'

import Image from 'next/image'

interface SkillCardProps {
    category: string;
    skills: Array<{ name: string; url?: string; logo?: string }>;
}

export default function SkillCard({ category, skills }: SkillCardProps) {
    return (
        <div className="group relative py-5 sm:py-6 px-0 sm:px-1 border-b border-white/[0.06] last:border-b-0 transition-all duration-200">

            {/* Category heading — big, uppercase, accent dash prefix */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <span className="text-accent text-xl font-light select-none flex-shrink-0">—</span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.10em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 leading-none">
                    {category}
                </h3>
            </div>

            {/* Skills row — horizontal, with logos */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 pl-0 sm:pl-9" role="list">
                {skills.map((skill) => {
                    const Tag = skill.url ? 'a' : 'span'
                    return (
                        <Tag
                            key={skill.name}
                            href={skill.url ?? undefined}
                            target={skill.url ? '_blank' : undefined}
                            rel={skill.url ? 'noopener noreferrer' : undefined}
                            className={`group/pill inline-flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl border text-[0.8rem] sm:text-[0.9rem] font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.04] ${
                                skill.url
                                    ? 'bg-white/[0.04] border-white/10 text-slate-300 hover:bg-accent/10 hover:border-accent/50 hover:text-white hover:shadow-[0_0_18px_rgba(59,130,246,0.25)] cursor-pointer'
                                    : 'bg-white/[0.03] border-white/[0.07] text-slate-400 cursor-default hover:text-white hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_4px_16px_rgba(255,255,255,0.05)]'
                            }`}
                        >
                            {skill.logo ? (
                                <Image
                                    src={skill.logo}
                                    alt={skill.name}
                                    width={22}
                                    height={22}
                                    className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] object-contain flex-shrink-0 group-hover/pill:scale-110 transition-transform duration-150"
                                    unoptimized
                                />
                            ) : (
                                <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-accent/70 flex-shrink-0 group-hover/pill:scale-110 group-hover/pill:text-accent-glow transition-all duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            )}
                            <span className="leading-none">{skill.name}</span>
                            {skill.url && (
                                <svg
                                    className="w-2.5 h-2.5 opacity-40 group-hover/pill:opacity-90 group-hover/pill:text-accent-glow transition-all duration-150 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 flex-shrink-0"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            )}
                        </Tag>
                    )
                })}
            </div>
        </div>
    )
}
