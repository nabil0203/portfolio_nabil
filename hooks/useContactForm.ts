'use client'

import { useState } from 'react'
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_URL } from '@/data/constants'

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  honeypot: string
}

/**
 * Custom hook to handle the state and submission logic of the contact form.
 * Utilizes Web3Forms API to send the message.
 * @returns Object containing form state, status, change handler, and submit handler.
 */
export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          access_key: WEB3FORMS_ACCESS_KEY
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return { formData, status, handleChange, handleSubmit }
}
