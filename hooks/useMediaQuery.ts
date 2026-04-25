'use client'

import { useState, useEffect } from 'react'

/**
 * Custom hook to listen for media query matches.
 * @param query - The CSS media query string to evaluate (e.g., '(min-width: 1024px)').
 * @returns boolean - True if the media query matches, false otherwise.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return true
  })

  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = (e: MediaQueryListEvent | MediaQueryList) => setMatches(e.matches)
    
    // Set initial value
    update(mq)
    
    // Subscribe
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [query])

  return matches
}
