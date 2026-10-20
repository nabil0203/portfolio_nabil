'use client'

import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToNextSection}
      aria-label="Scroll to About section"
      className="relative mx-auto mt-12 mb-8 md:mb-0 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-steel-500 text-steel-300 transition-colors duration-200 hover:bg-steel-50 hover:text-steel-800"
    >
      <ChevronDown className="w-4 h-4" />
    </button>
  )
}