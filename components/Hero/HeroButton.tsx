'use client'

import React, { ReactNode, ElementType } from 'react'
import { motion } from 'framer-motion'

interface HeroButtonProps {
  href: string
  children: ReactNode
  Icon?: ElementType
  ariaLabel?: string
}

const HeroButton: React.FC<HeroButtonProps> = ({ href, children, Icon, ariaLabel }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.1 }}
    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-2 sm:px-8 sm:py-3
    rounded-lg bg-gradient-to-r from-blue-950/60 to-slate-900/60 border border-blue-800/50 backdrop-blur-md
    hover:from-blue-900/70 hover:to-blue-950/60 hover:border-blue-600/60 hover:shadow-[0_0_22px_rgba(59,130,246,0.25)]
    text-slate-300 hover:text-white text-sm sm:text-base font-medium tracking-wide
    transition-all duration-200 ease-out
    w-auto z-20 group"
  >
    {Icon && (
      <Icon 
        className="w-4 h-4 sm:w-5 sm:h-5 text-accent/70 group-hover:text-accent transition-colors" 
        aria-hidden="true" 
      />
    )}
    <span>{children}</span>
  </motion.a>
)

export default HeroButton
