'use client'

import { motion } from 'framer-motion'
import MotionDiv from '../Shared/MotionDiv'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/5 scroll-mt-24 lg:scroll-mt-0">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <MotionDiv className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">Touch</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-accent-secondary/60" />
            <div className="h-px w-24 bg-gradient-to-r from-accent/50 via-accent-secondary/60 to-accent-glow/50 rounded-full" />
            <div className="h-1.5 w-1.5 rounded-full bg-accent-glow/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50 rounded-full" />
          </div>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

    </section>
  )
}
