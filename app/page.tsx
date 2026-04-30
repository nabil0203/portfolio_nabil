import dynamic from 'next/dynamic'
import Sidebar from '@/components/Sidebar/Sidebar'
import MotionDiv from '@/components/MotionDiv'
import HeroSection from '@/components/Hero/HeroSection'
import Footer from '@/components/Footer'

// Dynamic imports for sections below the fold
const AboutCard = dynamic(() => import('@/components/About/AboutCard'))
const EducationSection = dynamic(() => import('@/components/Education/EducationSection'))
const SkillsSection = dynamic(() => import('@/components/Skills/SkillsSection'))
const ProjectsSection = dynamic(() => import('@/components/Projects/ProjectsSection'))
const AdditionalInfoSection = dynamic(() => import('@/components/AdditionalInfo/AdditionalInfoSection'))
const ContactSection = dynamic(() => import('@/components/Contact/ContactSection'))
const BackToTop = dynamic(() => import('@/components/BackToTop'))

export default function Home() {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <HeroSection />
      <main>
        <MotionDiv>
          <AboutCard />
        </MotionDiv>
        <MotionDiv>
          <SkillsSection />
        </MotionDiv>
        <MotionDiv>
          <ProjectsSection />
        </MotionDiv>
        <MotionDiv>
          <EducationSection />
        </MotionDiv>
        <MotionDiv>
          <AdditionalInfoSection />
        </MotionDiv>
        <MotionDiv>
          <ContactSection />
        </MotionDiv>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
