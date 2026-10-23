'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { scrollToHero, scrollToSection } from '@/utils/dom'
import { SCROLL_THRESHOLD } from '@/data/constants'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'additional-information', label: 'Additional' },
]
const contactItem = { id: 'contact', label: 'Contact' }
const allItems = [...navItems, contactItem]
const spyIds = allItems.map(item => item.id)

/**
 * Sticky top navigation.
 * Desktop: logo on the left, section links in the middle, Contact as the action.
 * Mobile: logo and a menu button; links open in a panel below the bar.
 */
export default function Navbar() {
  const activeSection = useScrollSpy(spyIds, SCROLL_THRESHOLD)
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const go = (id: string) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  const ring = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-50'

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-steel-800/95 backdrop-blur-md border-b border-steel-700">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <button
          type="button"
          onClick={() => { setMenuOpen(false); scrollToHero() }}
          aria-label="Back to top"
          className={`shrink-0 rounded-lg ${ring}`}
        >
          <Image
            src="/logo.png"
            alt=""
            width={1195}
            height={512}
            className="block h-9 w-auto"
            priority
          />
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map(item => {
            const isActive = activeSection === item.id
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 ${ring} ${isActive ? 'text-steel-50' : 'text-steel-400 hover:text-steel-50'
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-steel-50"
                      transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Desktop action */}
        <button
          type="button"
          onClick={() => go(contactItem.id)}
          className={`hidden lg:inline-flex rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 ${ring} ${activeSection === contactItem.id
              ? 'bg-steel-200 text-steel-800'
              : 'bg-steel-50 text-steel-800 hover:bg-steel-200'
            }`}
        >
          {contactItem.label}
        </button>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(open => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className={`lg:hidden -mr-2 rounded-lg p-2 text-steel-200 hover:text-steel-50 ${ring}`}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden border-t border-steel-700 bg-steel-800 px-5 pb-5 pt-2 sm:px-8"
          >
            <ul className="flex flex-col">
              {allItems.map(item => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id} className="border-b border-steel-700 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => go(item.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`flex w-full items-center justify-between py-3.5 text-left text-base font-medium ${ring} ${isActive ? 'text-steel-50' : 'text-steel-300'
                        }`}
                    >
                      {item.label}
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-steel-50" aria-hidden="true" />}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}