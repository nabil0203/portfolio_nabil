'use client'

import { motion } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'
import HeroButton from './HeroButton'
import HeroImage from './HeroImage'
import { Github, FileText, Linkedin } from 'lucide-react'
import { personalInfo, contactData } from '@/data/portfolioData'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center items-center bg-steel-800 text-steel-50 overflow-hidden px-6 md:px-12 pt-24 sm:pt-0"
    >
      <div className="section-content w-full flex justify-center">
        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20 py-12">
          {/* Text */}
          <motion.div
            className="flex-1 min-w-0 flex flex-col items-start order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[0.95] text-steel-50 mb-8"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-lg sm:text-2xl font-semibold text-steel-300 mb-6 max-w-2xl"
            >
              {personalInfo.title.split(',').map((part, index) => (
                <span key={index} className="block">
                  {part.trim()}
                </span>
              ))}
            </motion.h2>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-steel-400 leading-relaxed max-w-xl mb-10"
            >
              {personalInfo.heroDescription}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              {contactData.resume && (
                <HeroButton href={contactData.resume} Icon={FileText} ariaLabel="View my Resume" primary>
                  Resume
                </HeroButton>
              )}
              <HeroButton href={contactData.github} Icon={Github} ariaLabel="Open my GitHub profile">
                GitHub
              </HeroButton>
              <HeroButton href={contactData.linkedin} Icon={Linkedin} ariaLabel="Open my LinkedIn profile">
                LinkedIn
              </HeroButton>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 pr-4 pb-4 sm:pr-5 sm:pb-5">
            <HeroImage />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
