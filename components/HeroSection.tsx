'use client'

import { motion } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'
import { Github, FileText, Linkedin } from 'lucide-react' // Using Lucide icons

// --- A. Componentized Button for Reusability ---
const HeroButton = ({ href, children, Icon }) => (
  <a
    href={href}
    target="_blank"
    // BEST PRACTICE: Security measure for target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3
               rounded-lg border border-white/30
               text-text-primary hover:bg-white/10 transition
               whitespace-nowrap" // Prevents wrapping on small screens
  >
    {Icon && <Icon size={20} />}
    {children}
  </a>
)

// --- B. Centralized Classes for Readability ---
const glowTransition = {
  duration: 3,
  repeat: Infinity,
  repeatType: "reverse", // Smoother pulse animation
  ease: 'easeInOut',
}

const mainContentGlow = {
  boxShadow: [
    '0 0 20px rgba(59, 130, 246, 0.3)',
    '0 0 40px rgba(59, 130, 246, 0.5)',
  ],
  borderColor: [
    'rgba(59, 130, 246, 0.5)',
    'rgba(59, 130, 246, 0.8)',
  ],
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center text-center
                 bg-gradient-to-br from-primary via-primary to-secondary/60 overflow-hidden"
    >
      {/* Soft ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />

      {/* Floating blur accents - Consider a slight animation here too! */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto p-8 md:p-16 bg-secondary/30 border rounded-xl backdrop-blur-sm"
        style={{ borderWidth: '1px' }}
        animate={mainContentGlow} 
        transition={glowTransition}
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight pt-2 pb-1
                     bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400
                     bg-clip-text text-transparent"
        >
          Chowdhury Nabil Ahmed
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-accent mb-8 font-medium"
        >
          Majoring in Software Engineering
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base md:text-xl text-text-secondary leading-relaxed
                     max-w-4xl mx-auto mb-10"
        >
          A Computer Science undergraduate specializing in Software Engineering,
          skilled in Data Structures and Algorithms using C++ and OOP principles.
          Solved 400+ problems on major online platforms and currently expanding
          skills in Web Development and Machine Learning with Python.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <HeroButton href="https://www.linkedin.com/in/nabil0203/" Icon={Linkedin}>
            LinkedIn
          </HeroButton>

          <HeroButton href="https://drive.google.com/file/d/12LMfHVCskTmOKRfbn6wUQjbzcQ8166xE/view?usp=sharing" Icon={FileText}>
            Resume
          </HeroButton>

          <HeroButton href="https://github.com/nabil0203" Icon={Github}>
            GitHub
          </HeroButton>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}