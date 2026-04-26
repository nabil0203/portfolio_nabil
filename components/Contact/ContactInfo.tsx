'use client'

import { motion } from 'framer-motion'
import { contactItems } from '@/data/portfolioData'

export default function ContactInfo() {
  return (
    <div className="space-y-8 lg:pt-8">
      <div>
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <span className="text-accent text-xl font-light select-none flex-shrink-0">—</span>
          <h3 className="inline-block text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.10em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 leading-none">
            Contact Information
          </h3>
        </div>
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
            className="flex items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 hover:border-accent/30 transition-all group overflow-hidden"
          >
            <div className={`p-2.5 sm:p-3 shrink-0 rounded-lg bg-surface/50 ${item.color} group-hover:scale-110 transition-transform`}>
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-secondary font-medium">{item.label}</p>
              <p className="text-white mt-0.5 font-medium text-[13px] sm:text-sm md:text-base truncate">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
