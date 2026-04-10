'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import MotionDiv from './MotionDiv'
import { educationData, personalInfo } from '@/data/portfolioData'
import { User, GraduationCap, Calendar } from 'lucide-react'
export default function AboutSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const x1 = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]);
  const y1 = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);

  const x2 = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40]);
  const y2 = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="about" className="py-16 scroll-mt-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-white relative group">
            {personalInfo.aboutTitle}
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-accent via-accent-secondary to-accent-glow mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </MotionDiv>

        <MotionDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start mt-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-surface/50 to-accent-secondary/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-100" />

              <div className="relative bg-surface/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="p-3 bg-accent/10 rounded-2xl border border-accent/20">
                    <User className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Summary</h3>
                  </div>
                </div>
                <div className="text-gray-300 leading-relaxed text-sm sm:text-lg relative z-10 space-y-4">
                  {personalInfo.aboutDescription.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>

                <motion.div style={{ x: x1, y: y1 }} className="absolute top-4 right-4 w-20 h-20 bg-accent-glow/10 rounded-full blur-2xl z-0 pointer-events-none" />
                <motion.div style={{ x: x2, y: y2 }} className="absolute bottom-4 left-4 w-16 h-16 bg-accent-secondary/15 rounded-full blur-xl z-0 pointer-events-none" />
              </div>
            </div>





            {/* Right Column - Education Card */}
            <div className="relative group">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-surface/60 to-accent-glow/5 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-100" />

              {/* Content */}
              <div className="relative bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 relative z-10">
                  <div className="p-2 sm:p-3 bg-accent/15 rounded-2xl border border-accent/30">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="absolute left-[13px] sm:left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20"></div>

                  <div className="space-y-6 pl-6 sm:pl-12">
                    {educationData.map((edu, index) => (
                      <div key={index} className="relative group/item">
                        <div className="absolute -left-5 sm:-left-8 top-3 w-5 h-5 sm:w-6 sm:h-6 bg-accent rounded-full border-2 sm:border-4 border-surface shadow-lg shadow-accent/50 group-hover/item:shadow-accent/75 transition-shadow duration-100">
                          <div className="absolute inset-0 bg-accent rounded-full animate-pulse opacity-50"></div>
                        </div>

                        <div className="bg-surface/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/5 backdrop-blur-sm hover:border-accent/20 transition-colors duration-100">
                          <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">{edu.degree}</h4>
                          {edu.url ? (
                            <a 
                              href={edu.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-block text-accent hover:text-accent-glow transition-colors duration-100 text-sm sm:text-lg font-medium mb-2 sm:mb-3 group/link"
                            >
                              {edu.institution}
                              <span className="inline-block ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-100 text-xs text-accent-glow">
                                ↗
                              </span>
                            </a>
                          ) : (
                            <p className="text-accent text-sm sm:text-lg font-medium mb-2 sm:mb-3">{edu.institution}</p>
                          )}

                          <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
                            {edu.gpa && (
                              <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-bold rounded-full bg-accent/10 text-accent border border-accent/20">
                                📊 CGPA: {edu.gpa}
                              </span>
                            )}
                            <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-bold rounded-full bg-accent/15 text-accent border border-accent/30">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              {edu.graduation}
                            </span>
                          </div>

                          {edu.description && (
                            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                              {edu.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div style={{ x: x2, y: y2 }} className="absolute top-6 right-6 w-24 h-24 bg-accent-secondary/10 rounded-full blur-3xl z-0 pointer-events-none" />
                <motion.div style={{ x: x1, y: y1 }} className="absolute bottom-6 left-6 w-20 h-20 bg-accent-glow/15 rounded-full blur-2xl z-0 pointer-events-none" />
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}