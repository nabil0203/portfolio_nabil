'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative md:absolute md:bottom-4 md:left-0 md:right-0 flex justify-center z-20 mt-8 md:mt-0">
      <motion.div
        className="cursor-pointer"
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-accent text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-slate-700/60 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-3 bg-accent rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
