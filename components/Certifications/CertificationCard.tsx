'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ImageIcon } from 'lucide-react'

interface CertificationCardProps {
  cert: {
    title: string
    issuer: string
    icon: string
    images: string[]
  }
  index: number
  onOpen: (imageIndex?: number) => void
}

/**
 * Compact column card: short document preview, issuer, title, footer.
 * The title button is stretched over the whole card (one big click target);
 * the page thumbnails sit above it so they can open a specific image.
 */
export default function CertificationCard({ cert, index, onOpen }: CertificationCardProps) {
  const [imgError, setImgError] = useState(false)
  const count = cert.images.length

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-steel-300 bg-steel-100 transition-colors duration-200 hover:border-steel-500"
    >
      {/* Short preview: the whole certificate, never cropped */}
      <div className="flex h-36 items-center justify-center border-b border-steel-300 bg-steel-200 p-3">
        {imgError ? (
          <ImageIcon className="h-7 w-7 text-steel-500" aria-hidden="true" />
        ) : (
          <img
            src={cert.images[0]}
            alt=""
            className="max-h-full max-w-full rounded-sm border border-steel-300 bg-steel-50 object-contain"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-500">{cert.issuer}</p>

        <h3 className="mt-1 font-display text-base font-semibold leading-snug text-steel-800">
          <button
            type="button"
            onClick={() => onOpen(0)}
            aria-label={`View ${cert.title} certificate${count > 1 ? `, ${count} images` : ''}`}
            className="text-left after:absolute after:inset-0 after:content-['']"
          >
            {cert.title}
          </button>
        </h3>

        {/* Footer: page thumbnails (if several) and the action, on one line */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          

          <span
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-steel-700 transition-colors group-hover:text-steel-800"
            aria-hidden="true"
          >
            View
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}