'use client'

import { useEffect } from 'react'

/**
 * Reads the URL hash on mount and scrolls the matching element
 * to the vertical center of the viewport.
 * Drop this anywhere inside the projects page layout.
 */
export default function ScrollToProject() {
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return

    // Small delay so the page has finished painting before we scroll
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 120)

    return () => clearTimeout(timer)
  }, [])

  return null
}
