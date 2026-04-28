'use client'

import { motion } from 'framer-motion'
import { scrollToSection, scrollToHero } from '@/utils/dom'
import Image from 'next/image'

interface DesktopBarProps {
  navItems: Array<{ id: string; label: string; Icon: any }>
  activeSection: string
  isVisible: boolean
}

export default function DesktopBar({ navItems, activeSection, isVisible }: DesktopBarProps) {
  return (
    <nav className="hidden lg:flex flex-col h-full px-3 py-6">
      {/* Brand — pinned at top */}
      <motion.button
        onClick={scrollToHero}
        className="w-full cursor-pointer flex items-center justify-center px-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          animate={{ scale: isVisible ? 1 : 1.3 }}
          transition={{ duration: 0.3 }}
        >
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={40}
            height={40}
            className="object-contain"
          />
        </motion.div>
      </motion.button>

      {/* Nav items — vertically centered */}
      <div className="flex-1 flex flex-col justify-center space-y-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id
          const isAtHero = !isVisible

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex flex-col items-center justify-center w-full max-w-[56px] mx-auto aspect-square font-medium tracking-wide rounded-xl transition-colors duration-200 ${
                isActive ? 'text-white' : 'text-secondary hover:text-accent hover:bg-accent/10'
              }`}
              animate={{
                opacity: isAtHero ? 0.6 : (isActive ? 1 : 0.5),
              }}
              whileHover={{ 
                y: isAtHero ? 0 : -3, 
                opacity: 1, 
                scale: isAtHero ? 1.1 : 1.05,
                transition: { duration: 0.15 } 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <item.Icon
                size={20}
                className={`shrink-0 transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-secondary'
                }`}
              />
              <motion.span 
                initial={false}
                className="relative z-10 whitespace-nowrap text-[11px] overflow-hidden"
                animate={{
                  height: isAtHero ? 0 : "auto",
                  opacity: isAtHero ? 0 : 1,
                  marginTop: isAtHero ? 0 : 4,
                }}
                transition={{ duration: 0.3 }}
              >
                {item.label}
              </motion.span>
              
              {/* Tooltip for collapsed state */}
              <div className={`absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-md border border-white/10 shadow-xl pointer-events-none z-50 whitespace-nowrap transition-all duration-200 ${
                isAtHero ? 'opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-[-8px] group-hover:translate-x-0' : 'hidden'
              }`}>
                {item.label}
              </div>

              {isActive && !isAtHero && (
                <motion.div
                  className="absolute inset-0 bg-accent/15 border border-accent/25 rounded-xl"
                  layoutId="sidebarActiveIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}
