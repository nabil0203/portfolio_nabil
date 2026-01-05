'use client'

import { motion } from 'framer-motion'
import MotionDiv from './MotionDiv'
import { contactData } from '@/data/portfolioData'

export default function ContactSection() {
  const contactInfo = [
    {
      label: 'Location',
      value: contactData.location,
      href: null,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    
    {
      label: 'Email',
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      label: 'Phone',
      value: contactData.phone,
      href: `tel:${contactData.phone}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-white relative group">
            Get In Touch
          </h2>
        </MotionDiv>

        <MotionDiv delay={0.2}>
          <div className="bg-surface/80 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-accent mb-2 flex justify-center">
                    {contact.icon}
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                  {contact.href ? (
                    <motion.a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white hover:text-accent transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {contact.value}
                    </motion.a>
                  ) : (
                    <p className="text-white">{contact.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center">
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
