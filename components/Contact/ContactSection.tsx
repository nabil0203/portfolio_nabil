'use client'

import MotionDiv from '../MotionDiv'
import SectionDivider from '../SectionDivider'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020617] scroll-mt-24 lg:scroll-mt-0">
      <div className="section-content">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">Touch</span>
            </h2>
            <SectionDivider />
          </MotionDiv>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <MotionDiv>
              <ContactInfo />
            </MotionDiv>

            <MotionDiv delay={0.1}>
              <ContactForm />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}
