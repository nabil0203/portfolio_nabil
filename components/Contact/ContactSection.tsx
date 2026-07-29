'use client'

import MotionDiv from '../MotionDiv'
import SectionHeader from '../SectionHeader'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020617] scroll-mt-24 lg:scroll-mt-0">
      <div className="section-content">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader label="Get In" highlight="Touch" className="mb-16" />

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
