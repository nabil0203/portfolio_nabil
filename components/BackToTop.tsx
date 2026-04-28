'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { scrollToHero } from '@/utils/dom'
import { SCROLL_THRESHOLD } from '@/data/constants'

/**
 * Back to top floating button.
 * Becomes visible after scrolling down, and responds to footer intersection
 * to adjust its vertical position automatically.
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [bottomOffset, setBottomOffset] = useState(32) // Default bottom-8 (32px)

  useEffect(() => {
    // 1. Scroll visibility tracking
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    // 2. Footer collision tracking via IntersectionObserver
    const footer = document.querySelector('footer')
    
    // Fallback if IntersectionObserver isn't perfectly aligning or for continuous updates when footer enters viewport
    const handleFooterIntersection = () => {
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const footerVisibleHeight = window.innerHeight - footerRect.top
        
        if (footerVisibleHeight > 0) {
          setBottomOffset(Math.max(32, footerVisibleHeight + 20))
        } else {
          setBottomOffset(32)
        }
      }
    }

    let observer: IntersectionObserver
    
    if (footer) {
      observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          // When footer is visible, track scroll tightly to adjust the offset
          window.addEventListener('scroll', handleFooterIntersection, { passive: true })
          handleFooterIntersection()
        } else {
          window.removeEventListener('scroll', handleFooterIntersection)
          setBottomOffset(32)
        }
      }, {
        threshold: 0
      })
      
      observer.observe(footer)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleFooterIntersection)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            bottom: bottomOffset 
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.5,
            transition: { duration: 0.3, ease: "easeIn" } 
          }}
          transition={{ 
            duration: 1.2,
            ease: "easeInOut",
            bottom: { duration: 0.1 } // Snappier response
          }}
          onClick={scrollToHero}
          className="fixed right-8 z-50 bg-accent text-primary p-3 rounded-full shadow-lg"
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
