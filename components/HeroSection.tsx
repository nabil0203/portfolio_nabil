'use client'

import { useEffect } from 'react'
import { motion, Transition, useMotionValue, useSpring, useTransform } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'
import { Github, FileText, Linkedin } from 'lucide-react'
import { ReactNode, ElementType } from 'react'
import { personalInfo, contactData } from '@/data/portfolioData'

interface HeroButtonProps {
  href: string;
  children: ReactNode;
  Icon?: ElementType;
  ariaLabel?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ href, children, Icon, ariaLabel }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.1 }}
    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-2.5 sm:px-8 sm:py-3.5
    rounded-lg bg-gradient-to-r from-blue-800 to-blue-950 border border-blue-700 backdrop-blur-md
    hover:from-blue-700 hover:to-blue-900 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]
    text-white text-sm sm:text-base font-medium tracking-wide
    transition-all duration-100 ease-out
    w-full sm:w-auto z-20 group"
  >
    {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 group-hover:text-white transition-colors" aria-hidden="true" />}
    <span>{children}</span>
  </motion.a>
)

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const x1 = useTransform(smoothMouseX, [-0.5, 0.5], [-80, 80]);
  const y1 = useTransform(smoothMouseY, [-0.5, 0.5], [-80, 80]);

  const x2 = useTransform(smoothMouseX, [-0.5, 0.5], [80, -80]);
  const y2 = useTransform(smoothMouseY, [-0.5, 0.5], [80, -80]);

  const x3 = useTransform(smoothMouseX, [-0.5, 0.5], [-40, 40]);
  const y3 = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center bg-background overflow-hidden px-4"
    >
      {/* Background pattern and glow */}
      <div className="absolute inset-0 bg-dot-pattern-faint opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-radial from-surface/80 via-background to-background" />

      {/* Floating blur accents - Mesh Gradient feel */}
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

      <motion.div
        className="relative z-10 max-w-6xl w-full mx-auto p-6 sm:p-10 md:p-20 bg-surface/30 border-2 border-accent/40 rounded-3xl backdrop-blur-xl shadow-2xl"
        animate={mainContentGlow}
        transition={glowTransition}
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={letterVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold py-2 mb-4 md:mb-6 leading-tight
            bg-gradient-to-r from-white via-primary to-slate-400
            bg-clip-text text-transparent pt-6 sm:pt-4 drop-shadow-sm"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            variants={letterVariants}
            className="text-[clamp(1.1rem,5vw,1.75rem)] sm:text-3xl lg:text-3xl font-extrabold tracking-tighter sm:mx-6 mb-6 leading-tight whitespace-nowrap sm:whitespace-normal
            bg-gradient-to-r from-accent via-accent-glow to-accent-secondary bg-clip-text text-transparent drop-shadow-sm"
          >
            {personalInfo.title.split(',').map((line, index) => (
              <span key={index} className="block mt-2">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={letterVariants}
            className="text-base md:text-lg text-slate-300/90 font-light leading-relaxed
            max-w-3xl mx-auto mb-8 md:mb-12"
          >
            {personalInfo.heroDescription}
          </motion.p>

          <motion.div
            variants={letterVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
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
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}