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
    <footer className="bg-steel-800 py-8 relative z-10">
      <div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-steel-400 hover:text-steel-50 transition-colors duration-200"
                  aria-label={`Visit ${link.name} profile`}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <p className="text-steel-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

