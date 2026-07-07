'use client'

import { useTransform } from 'framer-motion'
import MotionDiv from '../MotionDiv'
import SectionDivider from '../SectionDivider'
import { useMousePosition } from '@/hooks/useMousePosition'
import SummarySection from './SummarySection'
import AboutCard from './AboutCard'

export default function AboutSection() {
  const { smoothMouseX, smoothMouseY } = useMousePosition()

  const x1 = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30])
  const y1 = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30])

  const x2 = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40])
  const y2 = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40])

  return (
    <section id="about" className="pt-24 pb-24 md:pb-32 scroll-mt-24 lg:scroll-mt-0 bg-[#030712]">
      <div className="section-content">
        <div className="max-w-7xl mx-auto px-6">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">Me</span>
            </h2>
            <SectionDivider />
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-10">
            {/* Stats Grid - Left */}
            <div className="order-1 lg:order-1 lg:col-span-5 xl:col-span-4 h-full">
              <AboutCard />
            </div>

            {/* Summary Card - Right */}
            <MotionDiv className="order-2 lg:order-2 lg:col-span-7 xl:col-span-8">
              <SummarySection x1={x1} y1={y1} x2={x2} y2={y2} />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}
