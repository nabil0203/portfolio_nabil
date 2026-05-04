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
    <nav className={`hidden lg:flex flex-col h-full pb-8 transition-[padding] duration-300 ${isVisible ? 'pt-8 px-2' : 'pt-4 px-3'}`}>
      {/* Brand — pinned at top */}
      <motion.button
        onClick={scrollToHero}
        className="w-full cursor-pointer flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          animate={{
            width:  isVisible ? 44 : 40,
            height: isVisible ? 44 : 40,
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative flex items-center justify-center rounded-2xl bg-slate-800/70 border border-accent/25 shadow-[0_0_12px_-4px_rgba(59,130,246,0.4)]"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={isVisible ? 28 : 26}
            height={isVisible ? 28 : 26}
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
              className={`group relative flex flex-col items-center justify-center w-full mx-auto aspect-square rounded-2xl ${isVisible ? 'max-w-[64px]' : 'max-w-[48px]'
                } ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              animate={{
                opacity: isAtHero ? 0.65 : 1,
                scale: isActive ? 1.05 : 1,
              }}
              whileHover={{
                y: -2,
                opacity: 1,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Capsule Active Background */}
              {isActive && !isAtHero && (
                <motion.div
                  layoutId="sidebarActiveCapsule"
                  className="absolute inset-0 bg-accent/25 border border-accent/50 rounded-2xl shadow-[inset_0_0_12px_-4px_rgba(59,130,246,0.2)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              <item.Icon
                size={isActive ? 24 : 20}
                className={`relative z-10 shrink-0 transition-all duration-300 ${isActive ? 'text-accent' : 'text-slate-500 group-hover:text-accent-glow'
                  }`}
              />

              <motion.span
                initial={false}
                className={`relative z-10 whitespace-nowrap text-[11px] font-bold uppercase tracking-wider overflow-visible px-1 text-center transition-colors duration-300 ${isActive ? 'text-accent' : 'text-slate-500 group-hover:text-slate-300'
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
              <div className={`absolute left-full ml-4 px-3 py-1.5 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-white/10 shadow-2xl pointer-events-none z-50 whitespace-nowrap transition-all duration-300 ${isAtHero ? 'opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-[-8px] group-hover:translate-x-0' : 'hidden'
                }`}>
                {/* Left-pointing caret */}
                <span className="absolute right-full top-1/2 -translate-y-1/2 border-[5px] border-transparent border-r-slate-900/90" />
                {item.label}
              </div>
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}
