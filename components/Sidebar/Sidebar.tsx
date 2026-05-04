'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { User, Zap, FolderOpen, BookOpen, Mail, GraduationCap } from 'lucide-react'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { SCROLL_THRESHOLD } from '@/data/constants'

import MobileNav from './MobileNav'
import DesktopBar from './DesktopBar'

const navItems = [
  { id: 'about', label: 'About', Icon: User },
  { id: 'skills', label: 'Skills', Icon: Zap },
  { id: 'projects', label: 'Projects', Icon: FolderOpen },
  { id: 'education', label: 'Study', Icon: GraduationCap },
  { id: 'additional-information', label: 'Info', Icon: BookOpen },
  { id: 'contact', label: 'Contact', Icon: Mail }
]

/**
 * Sidebar layout component providing desktop and mobile navigation.
 * Utilizes `MobileNav` and `DesktopBar` depending on the viewport size.
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
      // account for floating margin (24px) + sidebar width + content gap (16px reduced)
      const baseWidth = isVisible ? 80 : 64
      const margin = 24
      const gap = 24
      document.documentElement.style.setProperty('--sidebar-width', !isReady ? '0px' : `${baseWidth + margin + gap}px`)
    } else {
      document.documentElement.style.setProperty('--sidebar-width', '0px')
    }
  }, [isVisible, isLargeScreen, isReady])

  // Sidebar (lg+) vs top-bar (mobile/tablet)
  const sidebarInitial = isLargeScreen
    ? { opacity: 0, x: -64, width: 64 }
    : { opacity: 0, y: -100, width: "100%" }

  const sidebarAnimate = isLargeScreen
    ? { opacity: isReady ? 1 : 0, x: isReady ? 0 : -64, width: isVisible ? 80 : 64 } // Reduced expansion to 80px
    : { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100, width: "100%" }

  return (
    <motion.header
      initial={sidebarInitial}
      className="fixed z-50 bg-slate-950/60 backdrop-blur-xl
        /* mobile / tablet: top bar */
        top-0 left-0 right-0 border-b border-white/10 shadow-2xl
        /* large screens: left sidebar (floating design) */
        lg:top-6 lg:left-6 lg:bottom-6 lg:right-auto lg:border lg:border-white/10 lg:shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] lg:bg-slate-900/30 lg:hover:bg-slate-900/50"
      animate={{
        ...sidebarAnimate,
        borderRadius: isLargeScreen ? (isVisible ? 32 : 24) : 0
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} 
      style={{ pointerEvents: (isLargeScreen || isVisible) ? 'auto' : 'none' }}
    >
      <MobileNav navItems={navItems} activeSection={activeSection} />
      <DesktopBar navItems={navItems} activeSection={activeSection} isVisible={isVisible} />
    </motion.header>
  )
}
