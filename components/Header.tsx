'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { personalInfo } from '@/data/portfolioData'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'additional-information', label: 'Additional Information' },
  { id: 'contact', label: 'Contact' }
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToHero = () => {
    setActiveSection('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition < 300) {
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
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5"
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      style={{
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <nav className="w-full px-5 sm:px-8 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button
            onClick={scrollToHero}
            className="text-xl sm:text-2xl font-black tracking-tight text-white cursor-pointer flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            Nabil<span className="text-accent">.</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center p-1.5 space-x-1 border border-white/10 rounded-full bg-slate-800/40 backdrop-blur-md shadow-lg shadow-black/20">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-colors duration-200 ${isActive
                    ? 'text-white'
                    : 'text-secondary hover:text-accent hover:bg-accent/10'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-accent/20 border border-accent/30 rounded-full"
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

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-secondary hover:text-accent p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1 }}
            className="md:hidden mt-4 pb-4 border-t border-accent/20 pt-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`relative px-4 py-2 text-sm font-medium text-left transition-all duration-100 ${isActive
                      ? 'text-accent'
                      : 'text-secondary hover:text-accent'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.1 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-secondary"
                        layoutId="mobileActiveIndicator"
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
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
