'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'

export default function HeroImage() {
  const blobControls = useAnimationControls()

  useEffect(() => {
    // Start synchronized blob animation
    blobControls.start({
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "60% 40% 30% 70% / 60% 30% 70% 40%",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    })
  }, [blobControls])

  return (
    <motion.div
      className="flex-shrink-0 flex items-center justify-center order-first lg:order-last"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative">
        {/* Synchronized Glow Bloom */}
        <motion.div
          className="absolute -inset-4 bg-accent/20 blur-3xl opacity-60"
          animate={blobControls}
        />

        {/* Waving & Spinning Gradient Border */}
        <motion.div
          className="absolute -inset-[6px] overflow-hidden"
          animate={blobControls}
        >
          <motion.div
            className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#3b82f6_0%,#06b6d4_33%,#8b5cf6_66%,#3b82f6_100%)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Synchronized Background Mask */}
        <motion.div
          className="absolute -inset-[2px] bg-background pointer-events-none"
          animate={blobControls}
        />

        {/* Synchronized Wavy Image Container */}
        <motion.div
          className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 overflow-hidden shadow-2xl"
          animate={blobControls}
        >
          <Image
            src="/images/profile.jpg"
            alt="Chowdhury Nabil Ahmed — profile photo"
            fill
            className="object-cover scale-110"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
