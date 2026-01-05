import MotionDiv from './MotionDiv'
import { educationData, personalInfo } from '@/data/portfolioData'
import { User, GraduationCap, Calendar } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-center text-white relative group">
            {personalInfo.aboutTitle}
          </h2>
        </MotionDiv>

        <MotionDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start mt-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-surface/50 to-accent/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-surface/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-2xl border border-accent/20">
                    <User className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Summary</h3>
                    <div className="w-12 h-1 bg-accent rounded-full mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {personalInfo.aboutDescription}
                </p>

                <div className="absolute top-4 right-4 w-20 h-20 bg-accent/5 rounded-full blur-2xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl" />
              </div>
            </div>





            {/* Right Column - Education Card */}
            <div className="relative group">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-surface/60 to-accent/5 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent/15 rounded-2xl border border-accent/30">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                    <div className="w-12 h-1 bg-accent rounded-full mt-1"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20"></div>

                  <div className="space-y-8 pl-12">
                    {educationData.map((edu, index) => (
                      <div key={index} className="relative group/item">
                        <div className="absolute -left-8 top-3 w-6 h-6 bg-accent rounded-full border-4 border-surface shadow-lg shadow-accent/50 group-hover/item:shadow-accent/75 transition-shadow duration-300">
                          <div className="absolute inset-0 bg-accent rounded-full animate-pulse opacity-50"></div>
                        </div>

                        <div className="bg-surface/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm hover:border-accent/20 transition-colors duration-300">
                          <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                          <p className="text-accent text-lg font-medium mb-3">{edu.institution}</p>

                          <div className="flex flex-wrap gap-3 mb-3">
                            {edu.gpa && (
                              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-bold rounded-full bg-accent/10 text-accent border border-accent/20">
                                📊 CGPA: {edu.gpa}
                              </span>
                            )}
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-bold rounded-full bg-accent/15 text-accent border border-accent/30">
                              <Calendar className="w-4 h-4" />
                              {edu.graduation}
                            </span>
                          </div>

                          {edu.description && (
                            <p className="text-gray-400 leading-relaxed text-sm">
                              {edu.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-24 h-24 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-6 left-6 w-20 h-20 bg-accent/8 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}