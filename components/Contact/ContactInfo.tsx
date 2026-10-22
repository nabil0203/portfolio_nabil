'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ArrowUpRight } from 'lucide-react'
import { contactItems } from '@/data/portfolioData'

export default function ContactInfo() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedLabel(label)
      setTimeout(() => setCopiedLabel(null), 2000)
    } catch {}
  }

  return (
    <div className="space-y-8 lg:pt-8">
      <div>
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <span className="text-accent text-xl font-light select-none flex-shrink-0">—</span>
          <h3 className="inline-block text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.10em] text-steel-800 leading-none">
            Contact Information
          </h3>
        </div>
        <p className="text-sm sm:text-base text-secondary max-w-xl">
          Feel free to reach out for collaborations, opportunities or just a friendly chat about technology and development.
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
            className="flex items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-steel-100 border border-steel-300 hover:border-accent/30 transition-all group overflow-hidden"
          >
            <div className={`p-2.5 sm:p-3 shrink-0 rounded-lg bg-steel-100 ${item.color} group-hover:scale-110 transition-transform`}>
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-secondary font-medium">{item.label}</p>
              {item.label === 'Email' || item.label === 'Phone' ? (
                <div className="flex items-center gap-2 mt-0.5 min-w-0">
                  <span className="text-steel-800 font-medium text-[13px] sm:text-sm md:text-base truncate select-all">
                    {item.value}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.label, item.value)}
                    title={copiedLabel === item.label ? 'Copied!' : `Copy ${item.label.toLowerCase()}`}
                    aria-label={`Copy ${item.label.toLowerCase()}`}
                    className="p-1 shrink-0 text-secondary hover:text-accent transition-colors"
                  >
                    {copiedLabel === item.label ? (
                      <Check className="w-4 h-4 text-steel-800" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ) : item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-800 mt-0.5 font-medium text-[13px] sm:text-sm md:text-base truncate block hover:text-accent transition-colors underline-offset-2 hover:underline"
                >
                  {item.value}
                  <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
                </a>
              ) : (
                <p className="text-steel-800 mt-0.5 font-medium text-[13px] sm:text-sm md:text-base truncate">
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}