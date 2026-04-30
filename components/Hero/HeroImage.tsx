'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroImage() {
  return (
    <div className="relative group flex-shrink-0 flex items-center justify-center order-first lg:order-last">

      {/* Soft Ambient Glow */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 via-accent/20 to-primary/10 blur-[80px] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Main Image Container */}
      <motion.div
        className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] overflow-hidden"
        initial={{ clipPath: 'inset(10% 10% 10% 10% round 40px)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 60px)' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Chowdhury Nabil Ahmed — profile photo"
          fill
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          priority
        />

        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
      </motion.div>

      {/* Premium Status Indicator - Top Left */}
      <motion.div
        className="absolute -top-4 -left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] uppercase tracking-widest text-slate-200 font-bold">
          Available
        </span>
      </motion.div>



      {/* Floating Element 2 - Bottom Right */}
      <motion.div
        className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-slate-300 font-bold shadow-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        Engineering Student
      </motion.div>

    </div>
  )
}


