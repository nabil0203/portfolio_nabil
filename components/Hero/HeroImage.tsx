'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroImage() {
  return (
    <motion.div
      className="relative w-48 sm:w-60 lg:w-[400px] shrink-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
    >
      {/* Offset frame behind the portrait */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5 rounded-lg border border-steel-500" aria-hidden="true" />

      {/* Portrait — rendered in steel greys; colour returns on hover */}
      <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-steel-700">
        <Image
          src="/images/profile.jpg"
          alt="Chowdhury Nabil Ahmed — profile photo"
          fill
          sizes="(min-width: 1024px) 400px, 240px"
          className="object-cover"
          priority
        />
      </div>

      {/* Availability tag, pinned to the frame */}
      <div className="absolute -bottom-3 left-4 sm:left-6 flex items-center gap-2 rounded-md bg-steel-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-steel-800">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-steel-500 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-steel-800" />
        </span>
        Open to work
      </div>
    </motion.div>
  )
}
