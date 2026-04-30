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
    <nav className={`hidden lg:flex flex-col h-full py-6 ${isVisible ? 'px-2' : 'px-3'}`}>
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
      <div className="flex-1 flex flex-col justify-center gap-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.id
          const isAtHero = !isVisible

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex flex-col items-center justify-center w-full mx-auto aspect-square rounded-2xl ${
                isVisible ? 'max-w-[64px]' : 'max-w-[48px]'
              } ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
              animate={{
                opacity: isAtHero ? 0.4 : 1,
                scale: isActive ? 1.05 : 1,
              }}
              whileHover={{ 
                y: isAtHero ? 0 : -2,
                opacity: 1, 
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Capsule Active Background */}
              {isActive && !isAtHero && (
                <motion.div
                  layoutId="sidebarActiveCapsule"
                  className="absolute inset-0 bg-accent/20 border border-accent/30 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              <item.Icon
                size={isActive ? 24 : 20}
                className={`relative z-10 shrink-0 transition-all duration-300 ${
                  isActive ? 'text-accent' : 'text-slate-500 group-hover:text-accent-glow'
                }`}
              />

              <motion.span 
                initial={false}
                className={`relative z-10 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider overflow-visible w-full px-1 text-center transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'text-slate-500 group-hover:text-slate-300'
                }`}
                animate={{
                  height: isAtHero ? 0 : "auto",
                  opacity: isAtHero ? 0 : 1,
                  marginTop: isAtHero ? 0 : 4,
                }}
              >
                {item.label}
              </motion.span>
              
              {/* Tooltip for collapsed state */}
              <div className={`absolute left-full ml-6 px-3 py-1.5 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-xl border border-white/10 shadow-2xl pointer-events-none z-50 whitespace-nowrap transition-all duration-300 ${
                isAtHero ? 'opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-[-10px] group-hover:translate-x-0' : 'hidden'
              }`}>
                {item.label}
              </div>
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}
