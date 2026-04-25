'use client'

import { useState, useEffect } from 'react'

/**
 * Custom hook to track the currently visible section in the viewport using IntersectionObserver.
 * @param sectionIds - Array of section IDs to observe.
 * @param offset - The scroll threshold (in px) after which `isScrolled` becomes true.
 * @returns Object containing the activeSection ID and a boolean `isScrolled` flag.
 */
export function useScrollSpy(sectionIds: string[], offset: number = 300) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleSection = activeSection
        let maxIntersectionRatio = 0

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio
            mostVisibleSection = entry.target.id
          }
        })

        if (maxIntersectionRatio > 0) {
          setActiveSection(mostVisibleSection)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.1, 0.5, 0.9], // Trigger at various visibility percentages
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    const handleScroll = () => {
      setIsScrolled(window.scrollY >= offset)
      if (window.scrollY < offset) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds.join(','), offset, activeSection])

  return { activeSection, isScrolled }
}
