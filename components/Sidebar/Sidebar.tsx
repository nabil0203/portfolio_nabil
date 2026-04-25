'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { User, Zap, FolderOpen, BookOpen, Mail } from 'lucide-react'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { SCROLL_THRESHOLD } from '@/data/constants'

import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const navItems = [
  { id: 'about', label: 'About', Icon: User },
  { id: 'skills', label: 'Skills', Icon: Zap },
  { id: 'projects', label: 'Projects', Icon: FolderOpen },
  { id: 'additional-information', label: 'Info', Icon: BookOpen },
  { id: 'contact', label: 'Contact', Icon: Mail }
]

/**
 * Sidebar layout component providing desktop and mobile navigation.
 * Utilizes `MobileNav` and `DesktopNav` depending on the viewport size.
 * Handles tracking active sections and setting responsive CSS variables.
 */
export default function Sidebar() {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  const { activeSection, isScrolled: isVisible } = useScrollSpy(
    navItems.map(item => item.id),
    SCROLL_THRESHOLD
  )

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 600)
    return () => clearTimeout(timer)
  }, [])

  // Sync the CSS variable for the page padding
  useEffect(() => {
    if (isLargeScreen) {
      document.documentElement.style.setProperty('--sidebar-width', !isReady ? '0px' : isVisible ? '96px' : '64px')
    } else {
      document.documentElement.style.setProperty('--sidebar-width', '0px')
    }
  }, [isVisible, isLargeScreen, isReady])

  // Sidebar (lg+) vs top-bar (mobile/tablet)
  const sidebarInitial = isLargeScreen
    ? { opacity: 0, x: -64, width: 64 }
    : { opacity: 0, y: -100, width: "100%" }

  const sidebarAnimate = isLargeScreen
    ? { opacity: isReady ? 1 : 0, x: isReady ? 0 : -64, width: isVisible ? 96 : 64 } // Width animates between 96px and 64px
    : { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100, width: "100%" }

  return (
    <motion.header
      initial={sidebarInitial}
      className="fixed z-50 bg-slate-900/80 backdrop-blur-md
        /* mobile / tablet: top bar */
        top-0 left-0 right-0 border-b border-white/5
        /* large screens: left sidebar */
        lg:right-auto lg:bottom-0 lg:border-b-0 lg:border-r lg:border-white/5"
      animate={sidebarAnimate}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ pointerEvents: (isLargeScreen || isVisible) ? 'auto' : 'none' }}
    >
      <MobileNav navItems={navItems} activeSection={activeSection} />
      <DesktopNav navItems={navItems} activeSection={activeSection} isVisible={isVisible} />
    </motion.header>
  )
}
