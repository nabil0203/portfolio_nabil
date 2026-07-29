'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Cpu, Globe, BadgeCheck, ImageIcon, ZoomIn, Images } from 'lucide-react'
import type { ElementType } from 'react'

const iconMap: Record<string, ElementType> = {
  code: Code2,
  cpu: Cpu,
  globe: Globe,
}

interface CertificationCardProps {
  cert: {
    title: string
    issuer: string
    icon: string
    images: string[]
  }
  index: number
  onOpen: () => void
}

export default function CertificationCard({ cert, index, onOpen }: CertificationCardProps) {
  const [imgError, setImgError] = useState(false)
  const Icon = iconMap[cert.icon] ?? Code2
  const hasMultiple = cert.images.length > 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.12, type: 'spring', bounce: 0.25 }}
      className="group relative"
    >
      {/* Hover glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/20 via-accent-secondary/15 to-accent-glow/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/60 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:translate-y-[-3px] group-hover:border-slate-700/60 h-full flex flex-col">

        {/* Thumbnail */}
        <button
          onClick={onOpen}
          aria-label={`View ${cert.title} certificate`}
          className="relative w-full h-40 bg-slate-800/60 overflow-hidden flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          {imgError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-500">
              <ImageIcon className="w-8 h-8" />
              <span className="text-xs">No image yet</span>
            </div>
          ) : (
            <img
              src={cert.images[0]}
              alt={`${cert.title} certificate`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          )}

          {/* Multi-image badge */}
          {hasMultiple && (
            <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full border border-white/10">
              <Images className="w-3 h-3" />
              {cert.images.length}
            </div>
          )}

          {/* Zoom overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
          </div>
        </button>

        {/* Card body */}
        <div className="p-5 flex flex-col gap-4 flex-1">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-28 h-28 bg-accent/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-accent/10 transition-colors duration-500" />

          {/* Icon badge */}
          <div className="relative z-10 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-md group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-5 h-5 text-accent" />
          </div>

          {/* Title */}
          <div className="relative z-10 flex-1">
            <p className="text-white font-semibold text-sm sm:text-base leading-snug group-hover:text-accent transition-colors duration-300">
              {cert.title}
            </p>
          </div>

          {/* Issuer + view hint */}
          <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-secondary bg-accent-secondary/10 border border-accent-secondary/20 rounded-full px-3 py-1">
              <BadgeCheck className="w-3.5 h-3.5" />
              {cert.issuer}
            </span>
            <button
              onClick={onOpen}
              className="text-xs text-slate-400 hover:text-accent transition-colors duration-200 flex items-center gap-1"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              {hasMultiple ? `View all (${cert.images.length})` : 'View'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
