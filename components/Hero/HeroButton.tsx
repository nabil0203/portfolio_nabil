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
    className="relative group inline-flex items-center justify-center gap-3 px-5 sm:px-8 py-3.5 w-full sm:w-auto rounded-2xl bg-white/5 backdrop-blur-lg overflow-hidden transition-all duration-300"

  >
    {/* Hover background effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative flex items-center gap-3">
      {Icon && (
        <Icon 
          className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" 
          aria-hidden="true" 
        />
      )}
      <span className="text-slate-200 group-hover:text-white font-semibold tracking-wide transition-colors duration-300">
        {children}
      </span>
    </div>
  </motion.a>
)

export default HeroButton
