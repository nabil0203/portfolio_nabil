'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { BadgeCheck, ChevronLeft, ChevronRight, X } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

interface LightboxState {
  certIndex: number
  imageIndex: number
}

interface Cert {
  title: string
  issuer: string
  images: string[]
}

interface CertificationLightboxProps {
  lightbox: LightboxState | null
  cert: Cert | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onDotClick: (imageIndex: number) => void
}

export default function CertificationLightbox({
  lightbox,
  cert,
  onClose,
  onPrev,
  onNext,
  onDotClick,
}: CertificationLightboxProps) {
  const activeImage = cert && lightbox ? cert.images[lightbox.imageIndex] : null
  const isMultiImage = cert ? cert.images.length > 1 : false

  return (
    <AnimatePresence>
      {lightbox !== null && cert && activeImage && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            key={`lightbox-${lightbox.certIndex}-${lightbox.imageIndex}`}
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ duration: 0.3, type: 'spring', bounce: 0.2 }}
            onClick={e => e.stopPropagation()}
            className="relative z-10 max-w-3xl w-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close — top-right, dim by default, fully visible on hover */}
            <button
              onClick={onClose}
              aria-label="Close certificate viewer"
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:bg-red-900/60 hover:border-red-500/40 transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image area — clean, no overlaid controls */}
            <div className="relative w-full bg-slate-800/60 flex items-center justify-center min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <ImageWithFallback
                    src={activeImage}
                    alt={`${cert.title} — image ${lightbox.imageIndex + 1}`}
                    className="w-full max-h-[65vh] object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer: title+issuer LEFT · nav controls RIGHT */}
            <div className="px-5 py-3 flex items-center justify-between gap-4 border-t border-slate-700/50">

              {/* Left — title + issuer */}
              <div className="min-w-0 flex flex-col gap-0.5">
                <p className="text-white font-semibold text-xs sm:text-sm truncate">
                  {cert.title}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-accent-secondary">
                  <BadgeCheck className="w-3 h-3 shrink-0" />
                  {cert.issuer}
                </span>
              </div>

              {/* Right — dots + prev/next (only when multiple images) */}
              {isMultiImage && (
                <div className="flex items-center gap-2 shrink-0">
                  {/* Dot indicators */}
                  <div className="flex items-center gap-1.5">
                    {cert.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => onDotClick(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                          i === lightbox.imageIndex
                            ? 'bg-accent scale-125'
                            : 'bg-slate-600 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-slate-500 tabular-nums">
                    {lightbox.imageIndex + 1}/{cert.images.length}
                  </span>

                  {/* Prev */}
                  <button
                    onClick={onPrev}
                    aria-label="Previous image"
                    className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Next */}
                  <button
                    onClick={onNext}
                    aria-label="Next image"
                    className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
