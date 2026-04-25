'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { scrollToSection, scrollToHero } from '@/utils/dom'

interface MobileNavProps {
  navItems: Array<{ id: string; label: string; Icon: any }>
  activeSection: string
}

export default function MobileNav({ navItems, activeSection }: MobileNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="lg:hidden w-full px-5 sm:px-8 py-3 sm:py-4">
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

        {/* Mobile hamburger */}
        <motion.button
          className="text-secondary hover:text-accent p-2 transition-colors"
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

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.1 }}
          className="mt-4 pb-4 border-t border-accent/20 pt-4"
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
                  className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-left transition-all duration-100 ${
                    isActive ? 'text-accent' : 'text-secondary hover:text-accent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                >
                  <item.Icon size={14} className="shrink-0" />
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-secondary"
                      layoutId="mobileActiveIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
