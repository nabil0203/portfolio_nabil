'use client'

import { contactData, personalInfo } from '@/data/portfolioData'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: contactData.linkedin,
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'GitHub',
      url: contactData.github,
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: `mailto:${contactData.email}`,
      icon: <Mail className="w-5 h-5" />
    }
  ]

  return (
    <footer className="bg-surface/90 py-6 border-t border-white/5 relative z-10">
      <div className="section-content">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-secondary hover:text-accent hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  aria-label={`Visit ${link.name} profile`}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <p className="text-gray-400">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

