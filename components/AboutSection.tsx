import MotionDiv from './MotionDiv'
import { educationData } from '@/data/portfolioData'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-text-primary">
            About Me
          </h2>
        </MotionDiv>

        {/* Education */}
        <MotionDiv>
          <div className="bg-secondary p-8 rounded-lg max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-accent">Education</h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-text-primary mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-accent mb-1">{edu.institution}</p>
                  <p className="text-text-secondary text-sm">{edu.graduation}</p>
                  {edu.description && (
                    <p className="text-text-secondary mt-2">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
