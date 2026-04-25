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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-white relative group">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full mb-6" />
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
