'use client'

import { useState, useEffect, useCallback } from 'react'
import MotionDiv from '../MotionDiv'
import SectionHeader from '../SectionHeader'
import { certificationsData } from '@/data/portfolioData'
import CertificationCard from './CertificationCard'
import CertificationLightbox from './CertificationLightbox'

interface LightboxState {
  certIndex: number
  imageIndex: number
}

export default function CertificationsSection() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const openLightbox = (certIndex: number, imageIndex = 0) =>
    setLightbox({ certIndex, imageIndex })

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const prevImage = useCallback(() => {
    setLightbox(lb => {
      if (!lb) return null
      const images = certificationsData[lb.certIndex].images
      return { ...lb, imageIndex: (lb.imageIndex - 1 + images.length) % images.length }
    })
  }, [])

  const nextImage = useCallback(() => {
    setLightbox(lb => {
      if (!lb) return null
      const images = certificationsData[lb.certIndex].images
      return { ...lb, imageIndex: (lb.imageIndex + 1) % images.length }
    })
  }, [])

  const goToDot = useCallback((imageIndex: number) => {
    setLightbox(lb => lb ? { ...lb, imageIndex } : null)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, closeLightbox, prevImage, nextImage])

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const activeCert = lightbox !== null ? certificationsData[lightbox.certIndex] : null

  return (
    <>
      <section
        id="certifications"
        className="py-16 md:py-20 scroll-mt-24 lg:scroll-mt-0 bg-[#030712] relative overflow-hidden"
      >
        {/* Background patterns */}
        <div className="absolute inset-0 bg-dot-pattern-faint opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-accent-secondary/5 rounded-full blur-[120px]" />
        </div>

        <div className="section-content">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <SectionHeader label="Courses &" highlight="Certifications" className="mb-12" />

            {/* Cards grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {certificationsData.map((cert, certIndex) => (
                <CertificationCard
                  key={cert.title}
                  cert={cert}
                  index={certIndex}
                  onOpen={() => openLightbox(certIndex, 0)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CertificationLightbox
        lightbox={lightbox}
        cert={activeCert}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
        onDotClick={goToDot}
      />
    </>
  )
}
