'use client'

import { motion, useTransform } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'
import HeroButton from './HeroButton'
import HeroImage from './HeroImage'
import { Github, FileText, Linkedin } from 'lucide-react'
import { personalInfo, contactData } from '@/data/portfolioData'
import { useMousePosition } from '@/hooks/useMousePosition'

const glowTransition: any = {
  duration: 4,
  repeat: Infinity,
  repeatType: "reverse",
  ease: 'easeInOut',
}

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
} as const

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 15, stiffness: 100 } },
}

export default function HeroSection() {
  const { smoothMouseX, smoothMouseY } = useMousePosition()

  const x1 = useTransform(smoothMouseX, [-0.5, 0.5], [-40, 40])
  const y1 = useTransform(smoothMouseY, [-0.5, 0.5], [-40, 40])

  const x2 = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40])
  const y2 = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40])

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center items-center bg-[#020617] overflow-hidden px-6 md:px-12 pt-24 sm:pt-0"
    >
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern-faint opacity-[0.15]" />

        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
          style={{ x: x1, y: y1 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={glowTransition}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"
          style={{ x: x2, y: y2 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={glowTransition}
        />
      </div>

      <div className="section-content w-full flex justify-center">
        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* LEFT COLUMN — Text Content */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >


            <motion.h1
              variants={letterVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
            >
              <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2
              variants={letterVariants}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 mb-8 max-w-2xl"
            >
              {personalInfo.title.split(',').map((part, index) => (
                <span key={index} className="block">
                  {part.trim()}
                </span>
              ))}
            </motion.h2>


            <motion.p
              variants={letterVariants}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-10"
            >
              {personalInfo.heroDescription}
            </motion.p>

            <motion.div
              variants={letterVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <HeroButton href={contactData.github} Icon={Github} ariaLabel="Open my GitHub profile">
                GitHub
              </HeroButton>

              <HeroButton href={contactData.linkedin} Icon={Linkedin} ariaLabel="Open my LinkedIn profile">
                LinkedIn
              </HeroButton>

              {contactData.resume && (
                <HeroButton href={contactData.resume} Icon={FileText} ariaLabel="View my Resume">
                  Resume
                </HeroButton>
              )}
            </motion.div>


            <motion.div
              variants={letterVariants}
              className="mt-12 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            >
              {/* Add some subtle trust badges or tech icons here if desired */}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — Profile Image */}
          <motion.div
            className="relative flex-shrink-0 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

