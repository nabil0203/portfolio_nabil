'use client'

import MotionDiv from '../MotionDiv'
import SectionHeader from '../SectionHeader'
import SummarySection from './SummarySection'
import AboutCard from './AboutCard'

export default function AboutSection() {
  return (
    <section id="about" className="pt-24 pb-24 md:pb-32 scroll-mt-24 lg:scroll-mt-0 bg-[#030712]">
      <div className="section-content">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="About" highlight="Me" className="mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-10">
            {/* Stats Grid - Left */}
            <div className="order-1 lg:order-1 lg:col-span-5 xl:col-span-4 h-full">
              <AboutCard />
            </div>

            {/* Summary Card - Right */}
            <MotionDiv className="order-2 lg:order-2 lg:col-span-7 xl:col-span-8">
              <SummarySection />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}
