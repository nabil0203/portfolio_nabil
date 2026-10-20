'use client'

import React, { ReactNode, ElementType } from 'react'

interface HeroButtonProps {
  href: string
  children: ReactNode
  Icon?: ElementType
  ariaLabel?: string
  primary?: boolean
}

const HeroButton: React.FC<HeroButtonProps> = ({ href, children, Icon, ariaLabel, primary }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className={`inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-6 py-3 rounded-lg border whitespace-nowrap text-[13px] sm:text-base font-semibold transition-colors duration-200 ${
      primary
        ? 'bg-steel-50 text-steel-800 border-steel-50 hover:bg-steel-200 hover:border-steel-200'
        : 'bg-transparent text-steel-100 border-steel-500 hover:bg-steel-700 hover:border-steel-400'
    }`}
  >
    {Icon && <Icon className="hidden min-[360px]:block w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />}
    <span>{children}</span>
  </a>
)

export default HeroButton
