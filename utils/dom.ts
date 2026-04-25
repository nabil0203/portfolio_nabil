'use client'

/**
 * Scrolls the window to the specified section element smoothly.
 * @param sectionId - The DOM ID of the section to scroll to.
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Scrolls the window to the very top smoothly (hero section).
 */
export const scrollToHero = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
