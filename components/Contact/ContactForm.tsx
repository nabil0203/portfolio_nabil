'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { useContactForm } from '@/hooks/useContactForm'

const InputField = ({ 
  id, 
  label, 
  type = 'text', 
  value, 
  onChange, 
  required = true,
  isTextArea = false 
}: { 
  id: string, 
  label: string, 
  type?: string, 
  value: string, 
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  required?: boolean,
  isTextArea?: boolean
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-secondary ml-1">{label}</label>
    {isTextArea ? (
      <textarea
        required={required}
        id={id}
        name={id}
        rows={5}
        value={value}
        onChange={onChange}
        className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none"
      />
    ) : (
      <input
        required={required}
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
      />
    )}
  </div>
)

export default function ContactForm() {
  const { formData, status, handleChange, handleSubmit } = useContactForm()

  return (
    <div className="bg-surface/30 backdrop-blur-xl border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
      {/* Decorative glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500" />

      <div className="relative z-10 mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>
        <p className="text-secondary">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        {/* Honeypot for spam protection */}
        <input type="text" name="honeypot" style={{ display: 'none' }} onChange={handleChange} value={formData.honeypot} />

        <div className="grid sm:grid-cols-2 gap-5">
          <InputField id="name" label="Name" value={formData.name} onChange={handleChange} />
          <InputField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
        </div>

        <InputField id="subject" label="Subject" value={formData.subject} onChange={handleChange} />
        <InputField id="message" label="Message" value={formData.message} onChange={handleChange} isTextArea />

        <button
          disabled={status !== 'idle'}
          type="submit"
          className="w-full relative py-4 px-6 rounded-xl bg-accent text-white font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all overflow-hidden group/btn"
        >
          {status === 'idle' && (
            <>
              <span>Send Message</span>
              <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </>
          )}
          {status === 'submitting' && (
            <>
              <span>Sending...</span>
              <Loader2 size={18} className="animate-spin" />
            </>
          )}
          {status === 'success' && (
            <>
              <span>Sent Successfully</span>
              <CheckCircle2 size={18} />
            </>
          )}
          {status === 'error' && (
            <>
              <span>Failed to Send</span>
              <AlertCircle size={18} />
            </>
          )}
        </button>

        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-400 text-sm text-center font-medium flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={14} />
              Thanks for reaching out! I'll get back to you soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-sm text-center font-medium flex items-center justify-center gap-2"
            >
              <AlertCircle size={14} />
              Something went wrong. Please try again later.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}
