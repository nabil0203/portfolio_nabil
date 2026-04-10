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
    rounded-lg bg-gradient-to-r from-blue-800 to-blue-950 border border-blue-700 backdrop-blur-md
    hover:from-blue-700 hover:to-blue-900 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]
    text-white text-sm sm:text-base font-medium tracking-wide
    transition-all duration-100 ease-out
    w-full sm:w-auto z-20 group"
  >
    {Icon && (
      <Icon 
        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 group-hover:text-white transition-colors" 
        aria-hidden="true" 
      />
    )}
    <span>{children}</span>
  </motion.a>
)

export default HeroButton
