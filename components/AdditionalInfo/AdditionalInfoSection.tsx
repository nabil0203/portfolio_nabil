'use client'

import MotionDiv from '../MotionDiv'
import SectionHeader from '../SectionHeader'
import PersonalDetails from './PersonalDetails'
import VolunteerExperience from './VolunteerExperience'

export default function AdditionalInfoSection() {
  return (
    <section id="additional-information" className="pt-24 pb-12 md:pt-32 md:pb-20 scroll-mt-24 lg:scroll-mt-0 relative overflow-hidden bg-steel-50">
      {/* Background decorations for extra modern feel */}

      <div className="section-content">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <SectionHeader label="Additional" highlight="Information" className="mb-10 md:mb-16" />

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
            <MotionDiv>
              <PersonalDetails />
            </MotionDiv>
            <MotionDiv delay={0.1}>
              <VolunteerExperience />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}
