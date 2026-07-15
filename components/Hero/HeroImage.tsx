'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'

export default function HeroImage() {
  return (
    <div className="relative group flex-shrink-0 flex items-center justify-center order-first lg:order-last p-2 sm:p-8">

      {/* Ambient Glow — static, no animation */}
      <div className="absolute -inset-24 bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-pink-500/15 blur-[100px] opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />

      {/* Main Image Container — simple opacity fade, NO scale */}
      <motion.div
        className="relative z-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      >
        {/* Neon border — fade-in only, no pathLength draw */}
        <div className="absolute -inset-[3px] z-0 pointer-events-none rounded-[3rem]"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
            padding: '3px',
          }}
        >
          <div className="w-full h-full rounded-[3rem] bg-[#020617]" />
        </div>

        {/* The Image Wrapper */}
        <div className="relative z-[1] w-full h-full overflow-hidden rounded-[3rem] shadow-[0_32px_80px_rgba(0,0,0,0.5)] bg-slate-900">
          <Image
            src="/images/profile.jpg"
            alt="Chowdhury Nabil Ahmed — profile photo"
            fill
            className="object-cover scale-105 group-hover:scale-[1.08] transition-transform duration-700 ease-out"
            priority
          />
          {/* Subtle Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
        </div>

        {/* Status Badge — delayed, CSS float only */}
        <div
          className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-white/10 shadow-xl z-20"
          style={{ animation: 'badgeFloatUp 4s ease-in-out infinite 2s' }}
        >
          <div className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          </div>
          <span className="text-[8px] sm:text-[10px] font-black text-white uppercase tracking-widest">OPEN TO WORK</span>
        </div>

        {/* SWE Badge — delayed, CSS float only */}
        <div
          className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 flex items-center gap-1.5 sm:gap-2.5 px-2.5 py-1 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-white/10 shadow-xl z-20"
          style={{ animation: 'badgeFloatDown 5s ease-in-out infinite 2.5s' }}
        >
          <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" />
          <span className="text-[8px] sm:text-[10px] font-black text-white/80 uppercase tracking-widest">SWE Student</span>
        </div>

      </motion.div>

      {/* Decorative Corner */}
      <div className="absolute top-12 left-0 w-8 h-8 border-t-2 border-l-2 border-white/5 rounded-tl-xl" />
      <div className="absolute bottom-12 right-0 w-8 h-8 border-b-2 border-r-2 border-white/5 rounded-br-xl" />

    </div>
  )
}
