'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook to track the currently visible section in the viewport using IntersectionObserver.
 *
 * Strategy: We maintain a Set of currently-intersecting section IDs. On each
 * IntersectionObserver callback we add/remove entries from that set, then pick
 * the topmost one (by DOM order) as the active section.  This avoids the
 * "fumbling" that happens when:
 *   - The observer re-creates itself on every activeSection change (stale dep).
 *   - Two sections are simultaneously partially visible and the active item
 *     flickers between them based on whichever one the observer fires last.
 *
 * @param sectionIds - Array of section IDs to observe (in page order).
 * @param offset     - scrollY threshold after which `isScrolled` becomes true.
 */
export function useScrollSpy(sectionIds: string[], offset: number = 300) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState(false)

  // Keep a stable ref to the set of currently-visible sections so the
  // observer callback can read/write it without being re-created on each render.
  const visibleSections = useRef<Set<string>>(new Set())
  // Stable ref to sectionIds order so we can pick the topmost visible one.
  const sectionIdsRef = useRef<string[]>(sectionIds)

  useEffect(() => {
    sectionIdsRef.current = sectionIds
  }, [sectionIds])

  useEffect(() => {
    const ids = sectionIds // snapshot for this effect

    /**
     * Pick the first section (in DOM / navItem order) from the visible set.
     * This ensures that while two sections overlap in the viewport the one
     * that appears earlier on the page wins — giving a stable, predictable
     * active state.
     */
    const pickActive = () => {
      for (const id of sectionIdsRef.current) {
        if (visibleSections.current.has(id)) {
          setActiveSection(id)
          return
        }
      }
      // Nothing visible according to the observer — keep current active.
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.current.add(entry.target.id)
          } else {
            visibleSections.current.delete(entry.target.id)
          }
        })
        pickActive()
      },
      {
        root: null,
        // Negative top margin means a section must scroll past the top 20% of
        // the viewport before it is considered "active". This stops the next
        // section from stealing focus prematurely.
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    const handleScroll = () => {
      const scrolled = window.scrollY >= offset
      setIsScrolled(scrolled)

      // When back at the very top, clear the active section.
      if (!scrolled) {
        visibleSections.current.clear()
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check on mount

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(','), offset])
  // ↑ NOTE: `activeSection` is intentionally excluded from deps.
  //   Including it would recreate the observer on every active-section change,
  //   causing the very fumbling this hook is designed to prevent.

  return { activeSection, isScrolled }
}
