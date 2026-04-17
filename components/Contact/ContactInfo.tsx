'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react'
import { contactData } from '@/data/portfolioData'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    color: 'text-blue-400'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: contactData.phone,
    href: `tel:${contactData.phone}`,
    color: 'text-purple-400'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contactData.location,
    href: null,
    color: 'text-pink-400'
  }
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: contactData.github,
    color: 'hover:text-white'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: contactData.linkedin,
    color: 'hover:text-blue-500'
  }
]

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
        <p className="text-sm sm:text-base text-secondary max-w-xl">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and development.
        </p>
      </div>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-surface/30 border border-white/5 hover:border-accent/30 transition-all group overflow-hidden"
          >
            <div className={`p-2.5 sm:p-3 shrink-0 rounded-lg bg-surface/50 ${item.color} group-hover:scale-110 transition-transform`}>
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-secondary font-medium">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-white hover:text-accent transition-colors block mt-0.5 font-medium text-[13px] sm:text-sm md:text-base truncate"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white mt-0.5 font-medium text-[13px] sm:text-sm md:text-base truncate">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
