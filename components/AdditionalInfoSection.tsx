'use client'

import { motion } from 'framer-motion'
import MotionDiv from './MotionDiv'
import { personalDetailsData, volunteerExperiencesData } from '@/data/portfolioData'

export default function AdditionalInfoSection() {
  return (
    <section id="additional-information" className="py-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-white relative group">
            Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">Information</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-accent via-accent-secondary to-accent-glow mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] mb-16"></div>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12 mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-accent">Personal Details</h3>
            <div className="space-y-6">
              {personalDetailsData.languages.length > 0 && (
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Languages</h4>
                  <div className="text-gray-400 space-y-1">
                    {personalDetailsData.languages.map((language, index) => (
                      <p key={index}>• {language}</p>
                    ))}
                  </div>
                </div>
              )}

              {personalDetailsData.certifications.length > 0 && (
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Certifications</h4>
                  <ul className="text-gray-400 space-y-1">
                    {personalDetailsData.certifications.map((certification, index) => (
                      <li key={index}>• {certification}</li>
                    ))}
                  </ul>
                </div>
              )}

              {personalDetailsData.programs.length > 0 && (
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Programs</h4>
                  <ul className="text-gray-400 space-y-1">
                    {personalDetailsData.programs.map((program, index) => (
                      <li key={index}>• {program}</li>
                    ))}
                  </ul>
                </div>
              )}

              {personalDetailsData.hobbies.length > 0 && (
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Hobbies</h4>
                  <div className="text-gray-400 space-y-1">
                    {personalDetailsData.hobbies.map((hobby, index) => (
                      <p key={index}>• {hobby}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-accent">Volunteer Experience</h3>
            <div className="space-y-6">
              {volunteerExperiencesData.map((experience, index) => (
                <div key={index} className="bg-surface/80 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg">
                  <h4 className="text-base sm:text-lg font-medium text-white/70  mb-2">{experience.organization}</h4>
                  <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">{experience.role}</h4>
                  <p className="text-sm sm:text-base text-gray-400 mb-2">{experience.duration}</p>
                  {experience.description && (
                    <p className="text-sm sm:text-base text-gray-400">{experience.description}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
