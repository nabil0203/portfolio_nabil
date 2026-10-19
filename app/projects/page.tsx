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
    <div className="min-h-screen bg-steel-50">
      <ScrollToProject />

      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-steel-200  border-b border-steel-300 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto h-16 flex items-center gap-4">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-steel-800 transition-colors duration-200"
            aria-label="Back to portfolio"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back
          </Link>
          <span className="text-steel-800/10">|</span>
          <h1 className="text-sm font-semibold text-steel-600 tracking-wide">
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
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-steel-800 tracking-tight mb-4">
            My{' '}
            <span className="text-steel-800 ">
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
              className="group flex items-center gap-3 px-8 py-4 bg-accent/10 border border-accent/20 rounded-full text-accent-glow font-bold  hover:bg-accent hover:text-steel-800 hover:border-accent  transition-all duration-300"
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
