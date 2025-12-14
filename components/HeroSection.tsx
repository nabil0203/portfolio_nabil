'use client'

import { motion } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary via-primary to-secondary/50 bg-dot-pattern-faint">
      {/* Subtle radial glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent"></div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto p-8 md:p-16 bg-secondary/30 border rounded-xl"
        style={{ borderWidth: '1px' }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(59, 130, 246, 0.3)',
            '0 0 40px rgba(59, 130, 246, 0.5)',
            '0 0 20px rgba(59, 130, 246, 0.3)',
          ],
          borderColor: [
            'rgba(59, 130, 246, 0.5)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(59, 130, 246, 0.5)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >

        
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-none pt-2 pb-1 bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent">
          Chowdhury Nabil Ahmed
        </h1>
        <h2 className="text-xl md:text-2xl text-accent mb-8 font-medium">
          Majoring in Software Engineering
        </h2>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto">
          A Computer Science undergraduate specializing in Software Engineering, skilled in Data Structures and Algorithms using C++ and OOP principles. Solved 400+ problems on major online platforms and currently expanding skills in Web Development and Machine Learning with Python.
        </p>
      </motion.div>
      <ScrollIndicator />
    </section>
  )
}
