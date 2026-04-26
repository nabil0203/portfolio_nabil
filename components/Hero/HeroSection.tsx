'use client'

import { motion, Transition, useTransform } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'
import HeroButton from './HeroButton'
import HeroImage from './HeroImage'
import { Github, FileText, Linkedin } from 'lucide-react'
import { personalInfo, contactData } from '@/data/portfolioData'
import { useMousePosition } from '@/hooks/useMousePosition'

const glowTransition: Transition = {
  duration: 4,
  repeat: Infinity,
  repeatType: "reverse",
  ease: 'easeInOut',
}

const mainContentGlow = {
  boxShadow: [
    '0 0 20px rgba(59, 130, 246, 0.05)',
    '0 0 40px rgba(6, 182, 212, 0.15)',
    '0 0 20px rgba(139, 92, 246, 0.05)',
  ],
}

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.0 },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 12, stiffness: 200 } },
}

export default function HeroSection() {
  const { smoothMouseX, smoothMouseY } = useMousePosition()

  const x1 = useTransform(smoothMouseX, [-0.5, 0.5], [-80, 80])
  const y1 = useTransform(smoothMouseY, [-0.5, 0.5], [-80, 80])

  const x2 = useTransform(smoothMouseX, [-0.5, 0.5], [80, -80])
  const y2 = useTransform(smoothMouseY, [-0.5, 0.5], [80, -80])

  const x3 = useTransform(smoothMouseX, [-0.5, 0.5], [-40, 40])
  const y3 = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40])

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col bg-background overflow-x-hidden px-3 sm:px-4 py-24 md:py-20 lg:py-0"
    >
      {/* Background pattern and glow */}
      <div className="absolute inset-0 bg-dot-pattern-faint opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-radial from-surface/80 via-background to-background" />

      {/* Floating blur accents wrapper — clips horizontal overflow without affecting scroll indicator */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"
          style={{ x: x1, y: y1 }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[100px]"
          style={{ x: x2, y: y2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-glow/10 rounded-full blur-[100px]"
          style={{ x: x3, y: y3 }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl w-full my-auto mx-auto p-5 sm:p-8 md:p-12 lg:p-16 bg-slate-900/30 border border-slate-800/60 rounded-3xl backdrop-blur-xl shadow-2xl
        flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
        animate={mainContentGlow}
        transition={glowTransition}
      >
        {/* LEFT COLUMN — Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={letterVariants}
            className="text-[clamp(1.1rem,5.5vw,2.25rem)] sm:text-4xl md:text-5xl font-extrabold py-2 mb-4 md:mb-6 leading-tight whitespace-nowrap tracking-tight
            bg-gradient-to-r from-primary via-slate-300 to-slate-400
            bg-clip-text text-transparent pt-4 sm:pt-4 drop-shadow-sm"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            variants={letterVariants}
            className="text-[clamp(1rem,4.5vw,1.75rem)] sm:text-2xl lg:text-3xl font-extrabold tracking-tight mx-0 mb-6 leading-snug
            bg-gradient-to-r from-accent via-accent-glow to-accent-secondary bg-clip-text text-transparent drop-shadow-sm"
          >
            {personalInfo.title.split(',').map((line, index) => (
              <span key={index} className="block mt-1">
                {line.trim()}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={letterVariants}
            className="text-base md:text-lg text-secondary font-light leading-relaxed
            max-w-3xl mx-auto lg:mx-0 mb-8 md:mb-12"
          >
            {personalInfo.heroDescription}
          </motion.p>

          <motion.div
            variants={letterVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 px-0"
          >
            <HeroButton href={contactData.linkedin} Icon={Linkedin} ariaLabel="Open my LinkedIn profile">
              LinkedIn
            </HeroButton>

            {contactData.resume && (
              <HeroButton href={contactData.resume} Icon={FileText} ariaLabel="View my Resume">
                Resume
              </HeroButton>
            )}

            <HeroButton href={contactData.github} Icon={Github} ariaLabel="Open my GitHub profile">
              GitHub
            </HeroButton>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN — Profile Image */}
        <HeroImage />
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}