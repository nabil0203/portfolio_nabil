'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [bottomOffset, setBottomOffset] = useState(32) // Default bottom-8 (32px)

  useEffect(() => {
    const handleScroll = () => {
      // Visibility check
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Footer collision check
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const footerVisibleHeight = window.innerHeight - footerRect.top
        
        if (footerVisibleHeight > 0) {
          // Add extra padding (e.g., 20px) to the footer's visible height
          setBottomOffset(Math.max(32, footerVisibleHeight + 20))
        } else {
          setBottomOffset(32)
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
            bottom: { duration: 0.4 } // Keep movement responsive to footer
          }}
          onClick={scrollToTop}
          style={{ position: 'fixed', right: '2rem', zIndex: 50 }}
          className="bg-accent text-primary p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
