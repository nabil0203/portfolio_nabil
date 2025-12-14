'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId) // Set active immediately on click
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'additional-info', label: 'Additional Information' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight

      // If we're in the hero section area (top 80% of viewport), hide navigation and clear active section
      if (scrollPosition < viewportHeight * 0.8) {
        setActiveSection('')
        setIsVisible(false)
        return
      }

      // Show navigation when scrolling past hero section
      setIsVisible(true)

      // Otherwise, find the current section by checking which one is most visible
      const sections = navItems.map(item => item.id)
      let maxVisibleArea = 0
      let mostVisibleSection = ''

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          const visibleTop = Math.max(0, rect.top)
          const visibleBottom = Math.min(window.innerHeight, rect.bottom)
          const visibleArea = Math.max(0, visibleBottom - visibleTop)

          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea
            mostVisibleSection = sectionId
          }
        }
      }

      if (mostVisibleSection && maxVisibleArea > 50) { // Only set active if section has meaningful visibility
        setActiveSection(mostVisibleSection)
      } else {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-secondary/50"
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
      style={{
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <nav className="w-full px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-xl font-bold text-accent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Chowdhury Nabil Ahmed
          </motion.div>

          <div className="flex space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
