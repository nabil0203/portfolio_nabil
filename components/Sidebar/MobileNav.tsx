'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { scrollToSection, scrollToHero } from '@/utils/dom'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

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
          className="cursor-pointer flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={36}
            height={36}
            className="object-contain"
          />
        </motion.button>

        {/* Mobile hamburger */}
        <motion.button
          className="text-steel-300 hover:text-steel-50 p-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="mt-4 pb-4 border-t border-steel-600 pt-4"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive 
                        ? 'bg-steel-50/10 text-steel-50 border border-steel-600' 
                        : 'text-steel-400 hover:text-steel-50 hover:bg-steel-50/10 border border-transparent'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.Icon size={16} className={`shrink-0 ${isActive ? 'text-steel-50' : 'text-steel-400'}`} />
                    {item.label}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
