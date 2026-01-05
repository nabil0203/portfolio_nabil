import MotionDiv from './MotionDiv'
import { educationData, personalInfo } from '@/data/portfolioData'
import { User, GraduationCap, Calendar } from 'lucide-react'

export default function AboutSection() {
  return (
    // Ensure section has padding and acts as a scroll target
    <section id="about" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv>
          {/* Main Header: Increased bottom margin for separation */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-center text-text-primary relative group">
            {personalInfo.aboutTitle}
          </h2>
        </MotionDiv>

        {/* Two Column Layout */}
        <MotionDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start mt-12">

            {/* Left Column - The Story */}
            <div className="bg-blue-50/10 border border-blue-200/20 p-6 rounded-2xl backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-text-primary">My Story</h3>
              </div>
              <p className="text-accent text-lg">
                {personalInfo.aboutDescription}
              </p>
            </div>

            {/* Right Column - Education Card */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-text-primary">Education</h3>
              </div>

              {/* Vertical Timeline */}
              <div className="relative border-l-2 border-blue-400/40 pl-8 space-y-8">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Marker */}
                    <div className="absolute -left-11 top-2 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_#3b82f6]"></div>

                    {/* Education Content */}
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-text-primary">{edu.degree}</h4>
                      <p className="text-accent text-lg">{edu.institution}</p>

                      <div className="flex flex-wrap gap-3 mb-3">
                        {edu.gpa && (
                          <span className="inline-block px-3 py-1 text-sm font-bold rounded bg-accent/10 text-accent border border-accent">
                            CGPA: {edu.gpa}
                          </span>
                        )}
                        <div className="flex items-center gap-2 px-3 py-1 text-sm font-bold rounded bg-accent/10 text-accent border border-accent">
                          <Calendar className="w-4 h-4" />
                          {edu.graduation}
                        </div>
                      </div>

                      {edu.description && (
                        <p className="text-text-secondary leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}