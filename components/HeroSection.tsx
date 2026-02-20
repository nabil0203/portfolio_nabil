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
}

const HeroButton: React.FC<HeroButtonProps> = ({ href, children, Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center justify-center gap-2 px-6 py-3
    rounded-lg bg-gradient-to-r from-gray-800 to-blue-900 border border-gray-700/50
    hover:from-gray-900 hover:to-blue-800 hover:border-accent-secondary/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]
    text-white 
    transition-colors duration-300
    w-full sm:w-auto z-20"
  >
    {Icon && <Icon size={20} />}
    {children}
  </motion.a>
)

const glowTransition: Transition = {
  duration: 3,
  repeat: Infinity,
  repeatType: "reverse",
  ease: 'easeInOut',
}

const mainContentGlow = {
  boxShadow: [
    '0 0 20px rgba(59, 130, 246, 0.3)',
    '0 0 40px rgba(139, 92, 246, 0.3)',
    '0 0 20px rgba(59, 130, 246, 0.3)',
  ],
  borderColor: [
    'rgba(59, 130, 246, 0.5)',
    'rgba(139, 92, 246, 0.5)',
    'rgba(59, 130, 246, 0.5)',
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

  const x1 = useTransform(smoothMouseX, [-0.5, 0.5], [-50, 50]);
  const y1 = useTransform(smoothMouseY, [-0.5, 0.5], [-50, 50]);

  const x2 = useTransform(smoothMouseX, [-0.5, 0.5], [50, -50]);
  const y2 = useTransform(smoothMouseY, [-0.5, 0.5], [50, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center bg-black overflow-hidden px-4"
    >
      {/* Soft ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />

      {/* Floating blur accents - Hooked to mouse position and using secondary accent colors */}
      <motion.div
        className="absolute -top-16 -left-16 w-64 h-64 bg-accent-secondary/30 rounded-full blur-2xl"
        style={{ x: x1, y: y1 }}
      />
      <motion.div
        className="absolute bottom-0 -right-16 w-64 h-64 bg-accent-glow/20 rounded-full blur-2xl"
        style={{ x: x2, y: y2 }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto p-6 md:p-20 bg-secondary/10 border rounded-xl backdrop-blur-md"
        style={{ borderWidth: '2px' }}
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
            bg-gradient-to-b from-gray-100 via-gray-300 to-gray-800
            bg-clip-text text-transparent pt-6 sm:pt-4"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            variants={letterVariants}
            className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-accent tracking-tighter mx-6 mb-6 leading-tight"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            variants={letterVariants}
            className="text-sm md:text-xl text-gray-300 leading-relaxed
            max-w-4xl mx-auto mb-8 md:mb-10"
          >
            {personalInfo.heroDescription}
          </motion.p>

          <motion.div
            variants={letterVariants}
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
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}