'use client'

import MotionDiv from '../MotionDiv'
import SectionHeader from '../SectionHeader'
import PersonalDetails from './PersonalDetails'
import VolunteerExperience from './VolunteerExperience'

export default function AdditionalInfoSection() {
  return (
    <section
      id="additional-information"
      className="py-16 md:py-20 scroll-mt-16 bg-steel-50"
    >
      <div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader label="Additional" highlight="Information" className="mb-8 md:mb-10" />

          <div className="flex flex-col gap-6">

            <MotionDiv delay={0.1}>
              <VolunteerExperience />
            </MotionDiv>

            <MotionDiv className="overflow-hidden rounded-xl border border-steel-300 bg-steel-100">
              <PersonalDetails />
            </MotionDiv>

          </div>
        </div>
      </div>
    </section>
  )
}