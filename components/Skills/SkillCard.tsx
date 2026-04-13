'use client'

import { motion } from 'framer-motion'
import MotionDiv from '../MotionDiv'

interface SkillCardProps {
    category: string;
    skills: Array<{ name: string; url?: string }>;
}

export default function SkillCard({ category, skills }: SkillCardProps) {
    return (
        <motion.div
            className="group relative flex flex-col h-full bg-surface/20 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-100"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.1 }}
        >
            {/* Glow behind card on hover */}
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-accent-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100 blur-2xl z-0 pointer-events-none" />

            {/* Subtle top highlight for 3D effect */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 z-0" />

            <div className="relative z-10 w-full">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center p-[1px] shadow-[0_0_16px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_24px_rgba(59,130,246,0.5)] transition-shadow duration-100">
                        <div className="w-full h-full bg-surface/90 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <div className="w-2.5 h-2.5 bg-accent-glow rounded-full shadow-[0_0_14px_rgba(6,184,212,1)]" />
                        </div>
                    </div>
                    <h3 className="text-md sm:text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 group-hover:to-white transition-colors duration-100">
                        {category}
                    </h3>
                </div>

                <div className="w-full h-[2px] bg-gradient-to-r from-accent/40 via-accent-secondary/20 to-transparent mb-4" />

                <div className="flex flex-wrap gap-2" role="list">
                    {skills.map((skill) => {
                        const SkillComponent = skill.url ? motion.a : motion.span

                        return (
                            <MotionDiv
                                key={skill.name}
                                className="inline-block"
                            >
                                <SkillComponent
                                    href={skill.url ? skill.url : undefined}
                                    target={skill.url ? '_blank' : undefined}
                                    rel={skill.url ? 'noopener noreferrer' : undefined}
                                    className={`group/pill relative overflow-hidden inline-flex items-center px-3 py-1.5 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 text-sm font-semibold text-slate-300 transition-all duration-100 shadow-sm ${skill.url ? "hover:bg-white/[0.08] hover:border-accent/60 hover:text-white hover:shadow-[0_0_16px_rgba(59,130,246,0.25)] cursor-pointer" : "cursor-default hover:text-white hover:border-white/20 hover:bg-white/[0.06]"
                                        }`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={skill.url ? { scale: 0.95 } : undefined}
                                    transition={{ duration: 0.1 }}
                                >
                                    <span className="relative z-10 tracking-wide">{skill.name}</span>
                                    {skill.url && (
                                        <svg className="relative z-10 w-2.5 h-2.5 ml-1 opacity-50 group-hover/pill:opacity-100 group-hover/pill:text-accent-glow transition-all duration-100 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    )}
                                </SkillComponent>
                            </MotionDiv>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}
