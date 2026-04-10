import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import MotionDiv from '@/components/MotionDiv'
import HeroSection from '@/components/Hero/HeroSection'
import Footer from '@/components/Footer'

// Dynamic imports for sections below the fold
const AboutSection = dynamic(() => import('@/components/AboutSection'))
const SkillsSection = dynamic(() => import('@/components/Skills/SkillsSection'))
const ProjectsSection = dynamic(() => import('@/components/Projects/ProjectsSection'))
const AdditionalInfoSection = dynamic(() => import('@/components/AdditionalInfoSection'))
const ContactSection = dynamic(() => import('@/components/ContactSection'))
const BackToTop = dynamic(() => import('@/components/BackToTop'))

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <MotionDiv className="py-8">
          <AboutSection />
        </MotionDiv>
        <MotionDiv className="py-8">
          <SkillsSection />
        </MotionDiv>
        <MotionDiv className="py-8">
          <ProjectsSection />
        </MotionDiv>
        <MotionDiv className="py-8">
          <AdditionalInfoSection />
        </MotionDiv>
        <MotionDiv className="py-8">
          <ContactSection />
        </MotionDiv>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
