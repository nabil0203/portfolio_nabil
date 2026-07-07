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
    whileHover={{ scale: 1.05, y: -4 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.1 }}
    className="relative group inline-flex items-center justify-center gap-1.5 sm:gap-3 px-2.5 sm:px-8 py-1.5 sm:py-3.5 w-[calc(50%-0.375rem)] sm:w-auto rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-lg overflow-hidden border border-accent/25 group-hover:border-accent/50 transition-all duration-100"
  >
    {/* Hover background effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
    
    <div className="relative flex items-center gap-1.5 sm:gap-3">
      {Icon && (
        <Icon 
          className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent transition-colors duration-100" 
          aria-hidden="true" 
        />
      )}
      <span className="text-xs sm:text-base text-accent font-bold tracking-wide transition-all duration-100">
        {children}
      </span>
    </div>
  </motion.a>
)

export default HeroButton
