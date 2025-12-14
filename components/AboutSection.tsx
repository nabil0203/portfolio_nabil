import MotionDiv from './MotionDiv'
import { educationData } from '@/data/portfolioData'

export default function AboutSection() {
  return (
    // Ensure section has padding and acts as a scroll target
    <section id="about" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv>
          {/* Main Header: Increased bottom margin for separation */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-center text-text-primary relative group">
            About Me
          </h2>
        </MotionDiv>

        {/* Education Section Container */}
        <MotionDiv>
          <div className="bg-secondary p-8 md:p-12 rounded-xl max-w-4xl mx-auto shadow-2xl">
            {/* Education Sub-Header: More prominent bottom margin */}
            <h3 className="text-3xl font-bold mb-10 text-accent border-b border-border-color pb-3">
              Education
            </h3>
            
            {/* Education Entries */}
            <div className="space-y-10">
              {educationData.map((edu, index) => (
                // Added bottom padding and a separator border to each entry, except the last one
                <div 
                  key={index} 
                  className={`pb-8 ${index < educationData.length - 1 ? 'border-b border-border-color/50' : ''}`}
                >
                  
                  {/* Degree: Increased size and bolded */}
                  <h4 className="text-xl font-bold text-text-primary mb-2">
                    {edu.degree}
                  </h4>
                  
                  {/* Institution: Accent color for prominence, slightly increased margin */}
                  <p className="text-accent text-lg mb-2">{edu.institution}</p>

                  {/* GPA: Now has the requested border and styling for visibility */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                    {edu.gpa && (
                      <span className="inline-block px-3 py-1 text-sm font-bold rounded bg-accent/10 text-accent border border-accent">
                        CGPA: {edu.gpa}
                      </span>
                    )}
                    
                    {/* Graduation Date: Clear text, separated from GPA */}
                    <p className="inline-block px-3 py-1 text-sm font-bold rounded bg-accent/10 text-accent border border-accent">
                        {edu.graduation}
                    </p>
                  </div>
                  
                  {/* Description: Clear separation from details above */}
                  {edu.description && (
                    <p className="text-text-secondary mt-3 leading-relaxed">
                      {edu.description}
                    </p>
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