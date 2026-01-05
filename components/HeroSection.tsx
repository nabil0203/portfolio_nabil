'use client'

import { motion, Transition } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'
import { Github, FileText, Linkedin } from 'lucide-react'
import { ReactNode, ElementType } from 'react'
import { personalInfo, contactData } from '@/data/portfolioData'

interface HeroButtonProps {
  href: string;
  children: ReactNode;
  Icon?: ElementType;
}


// --- A. Componentize Button for Reusability (No changes needed here) ---
const HeroButton: React.FC<HeroButtonProps> = ({ href, children, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-6 py-3
    rounded-lg bg-gradient-to-r from-gray-800 to-blue-900
    hover:from-black hover:to-blue-800
    text-white 
    transition-all duration-200
    w-full sm:w-auto"

  >
    {Icon && <Icon size={20} />}
    {children}
  </a>
)

// --- B. Centralized Classes for Readability (No changes needed here) ---
const glowTransition: Transition = {
  duration: 3,
  repeat: Infinity,
  repeatType: "reverse",
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
      className="relative min-h-screen flex items-center justify-center text-center bg-black overflow-hidden px-4"
    >
      {/* Soft ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />

      {/* Floating blur accents - Reduced blur size for less obstruction on smaller screens */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent/20 rounded-full blur-2xl" />
      <div className="absolute bottom-0 -right-16 w-64 h-64 bg-accent/20 rounded-full blur-2xl" />

      <motion.div
        // **IMPROVEMENT: Adjusted padding to be smaller on mobile (`p-6` vs `p-8/p-16`)**
        className="relative z-10 max-w-6xl mx-auto p-6 md:p-20 bg-secondary/10 border rounded-xl backdrop-blur-md"
        style={{ borderWidth: '2px' }}
        animate={mainContentGlow}
        transition={glowTransition}
      >
        {/* Name: Adjusted font sizes to scale down more gracefully */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold py-2 mb-4 md:mb-6 leading-tight
          bg-gradient-to-b from-gray-100 via-gray-300 to-gray-800
          bg-clip-text text-transparent pt-6 sm:pt-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role: Adjusted font size to scale down */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-2xl font-extrabold text-accent tracking-tighter mx-6 mb-6 leading-tight"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Description: Adjusted font size to scale down */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm md:text-xl text-gray-300 leading-relaxed
          max-w-4xl mx-auto mb-8 md:mb-10"
        >
          {personalInfo.heroDescription}
        </motion.p>

        {/* Buttons: Ensure stacking on mobile by making `flex-col` the default */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <HeroButton href={contactData.linkedin} Icon={Linkedin}>
            LinkedIn
          </HeroButton>

          <HeroButton href="https://drive.google.com/file/d/12LMfHVCskTmOKRfbn6wUQjbzcQ8166xE/view?usp=sharing" Icon={FileText}>
            Resume
          </HeroButton>

          <HeroButton href={contactData.github} Icon={Github}>
            GitHub
          </HeroButton>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}