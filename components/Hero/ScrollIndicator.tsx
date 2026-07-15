'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div 
      className="relative mx-auto mt-12 mb-8 sm:mb-0 sm:absolute sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2 lg:left-[calc(50%+var(--sidebar-width,0px)/2)] flex flex-col items-center gap-3 z-20 cursor-pointer group transition-all duration-500 ease-in-out" 
      onClick={scrollToNextSection}
    >


      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold group-hover:text-primary transition-colors duration-300">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2, // don't start bouncing until the hero has settled
          }}
          className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5"
        >
          <ChevronDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </div>
  )
}


