import Layout from '@/components/Layout'
import Header from '@/components/Header'
import MotionDiv from '@/components/MotionDiv'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import AdditionalInfoSection from '@/components/AdditionalInfoSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <main>
        <MotionDiv className="py-12">
          <AboutSection />
        </MotionDiv>
        <MotionDiv className="py-12">
          <SkillsSection />
        </MotionDiv>
        <MotionDiv className="py-12">
          <ProjectsSection />
        </MotionDiv>
        <MotionDiv className="py-12">
          <AdditionalInfoSection />
        </MotionDiv>
        <MotionDiv className="py-12">
          <ContactSection />
        </MotionDiv>
      </main>
      <Footer />
      <BackToTop />
    </Layout>
  )
}
