import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ProjectFullCard from '@/components/Projects/ProjectFullCard'
import ScrollToProject from '@/components/Projects/ScrollToProject'
import { projectsData, personalInfo, siteMetadata } from '@/data/portfolioData'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: `All Projects`,
  description: `Browse all ${projectsData.length} projects built by ${personalInfo.name}.`,
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    title: `All Projects`,
    description: `Browse all ${projectsData.length} projects built by ${personalInfo.name}.`,
    url: `${siteMetadata.url}/projects`,
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToProject />

      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto h-16 flex items-center gap-4">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-white transition-colors duration-200"
            aria-label="Back to portfolio"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back
          </Link>
          <span className="text-white/10">|</span>
          <h1 className="text-sm font-semibold text-white/70 tracking-wide">
            All Projects
          </h1>
          <span className="ml-auto text-[11px] font-mono text-secondary/50">
            {projectsData.length} projects
          </span>
        </div>
      </header>

      {/* Page hero */}
      <section className="relative py-14 md:py-20 px-5 sm:px-8 overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">
              Projects
            </span>
          </h2>
          <p className="text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            A complete collection of everything I&apos;ve built
          </p>
        </div>
      </section>

      <main className="px-5 sm:px-8 pb-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <ProjectFullCard
              key={`${project.id}-${index}`}
              project={project}
              index={index}
            />
          ))}

          {/* Back to Home Button */}
          <div className="mt-8 mb-4 flex justify-center">
            <Link 
              href="/#projects"
              className="group flex items-center gap-3 px-8 py-4 bg-accent/10 border border-accent/20 rounded-full text-accent-glow font-bold backdrop-blur-md hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Main Page
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
