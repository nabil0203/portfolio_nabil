'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, Cpu } from 'lucide-react'

export default function HeroImage() {
  return (
    <div className="relative group flex-shrink-0 flex items-center justify-center order-first lg:order-last p-2 sm:p-8">

      {/* Rich Ambient Glow System */}
      <div className="absolute -inset-24 bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-pink-500/15 blur-[140px] opacity-70 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent/5 blur-[100px] rounded-full opacity-40" />

      {/* Decorative Light Orbs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-[80px] rounded-full animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/10 blur-[80px] rounded-full animate-pulse [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 blur-[60px] rounded-full" />

      {/* Main Image Container */}
      <motion.div
        className="relative z-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Single Dynamic Neon Border */}
        <div className="absolute -inset-[3px] z-0 pointer-events-none">
          <svg className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="hero-neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1">
                  <animate attributeName="stop-color" values="#6366f1;#06b6d4;#ec4899;#6366f1" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#a855f7">
                  <animate attributeName="stop-color" values="#a855f7;#ec4899;#6366f1;#a855f7" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#ec4899">
                  <animate attributeName="stop-color" values="#ec4899;#6366f1;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <motion.rect
              width="100%"
              height="100%"
              rx="48"
              fill="none"
              stroke="url(#hero-neon-gradient)"
              strokeWidth="4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* The Image Wrapper (No border here, using the SVG border above) */}
        <div className="relative z-[1] w-full h-full overflow-hidden rounded-[3rem] shadow-[0_32px_80px_rgba(0,0,0,0.5)] bg-slate-900">
          <Image
            src="/images/profile.jpg"
            alt="Chowdhury Nabil Ahmed — profile photo"
            fill
            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
            priority
          />

          {/* Subtle Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
        </div>

        {/* ── REFINED FLOATING BADGES ── */}

        {/* Status Badge - Top Left */}
        <motion.div
          className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-xl z-20"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
          </div>
          <span className="text-[8px] sm:text-[10px] font-black text-white uppercase tracking-widest">OPEN TO WORK</span>
        </motion.div>

        {/* Engineering Student Badge - Bottom Right */}
        <motion.div
          className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 flex items-center gap-1.5 sm:gap-2.5 px-2.5 py-1 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-xl z-20"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" />
          <span className="text-[8px] sm:text-[10px] font-black text-white/80 uppercase tracking-widest">SWE Student</span>
        </motion.div>

      </motion.div>

      {/* Decorative Corner (Subtle) */}
      <div className="absolute top-12 left-0 w-8 h-8 border-t-2 border-l-2 border-white/5 rounded-tl-xl" />
      <div className="absolute bottom-12 right-0 w-8 h-8 border-b-2 border-r-2 border-white/5 rounded-br-xl" />

    </div>
  )
}



