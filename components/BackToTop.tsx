'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { scrollToHero } from '@/utils/dom'
import { SCROLL_THRESHOLD } from '@/data/constants'

/**
 * Back to top floating button.
 * Becomes visible after scrolling past SCROLL_THRESHOLD.
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3, ease: 'easeIn' } }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={scrollToHero}
          className="fixed right-8 bottom-8 z-50 bg-accent text-primary p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
