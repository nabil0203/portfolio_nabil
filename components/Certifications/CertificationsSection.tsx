'use client'

import { useState, useEffect, useCallback } from 'react'
import SectionHeader from '../SectionHeader'
import { certificationsData } from '@/data/portfolioData'
import CertificationCard from './CertificationCard'
import CertificationLightbox, { type LightboxState } from './CertificationLightbox'

export default function CertificationsSection() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const openLightbox = (certIndex: number) =>
    setLightbox({ certIndex, imageIndex: 0 })

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
      <section id="certifications" className="py-16 md:py-20 scroll-mt-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader label="Courses &" highlight="Certifications" className="mb-8 md:mb-10" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {certificationsData.map((cert, certIndex) => (
              <div key={cert.title} className="md:max-lg:[&:last-child:nth-child(odd)]:col-span-2">
                <CertificationCard
                  cert={cert}
                  index={certIndex}
                  onOpen={() => openLightbox(certIndex)}
                />
              </div>
            ))}
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
