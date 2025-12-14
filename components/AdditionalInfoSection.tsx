import { languagesData, certificationsData, hobbiesData, volunteerExperiencesData } from '@/data/portfolioData'

export default function AdditionalInfoSection() {
  return (
    <section id="additional-info" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-text-primary relative group">
          Additional Information
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Languages, Certifications, Hobbies */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Personal Details</h3>
            <div className="space-y-6">
              {/* Languages */}
              {languagesData.length > 0 && (
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-3">Languages</h4>
                  <div className="text-text-secondary space-y-1">
                    {languagesData.map((language, index) => (
                      <p key={index}>• {language}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {certificationsData.length > 0 && (
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-3">Certifications</h4>
                  <ul className="text-text-secondary space-y-1">
                    {certificationsData.map((certification, index) => (
                      <li key={index}>• {certification}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hobbies */}
              {hobbiesData.length > 0 && (
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-3">Hobbies</h4>
                  <div className="text-text-secondary space-y-1">
                    {hobbiesData.map((hobby, index) => (
                      <p key={index}>• {hobby}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Volunteer Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Volunteer Experience</h3>
            <div className="space-y-6">
              {volunteerExperiencesData.map((experience, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-text-primary mb-2">{experience.organization}</h4>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">{experience.role}</h4>
                  <p className="text-text-secondary mb-2">{experience.duration}</p>
                  {experience.description && (
                    <p className="text-text-secondary">{experience.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
