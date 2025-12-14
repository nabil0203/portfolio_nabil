import ScrollIndicator from './ScrollIndicator'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary via-primary to-secondary/50 bg-dot-pattern-faint">
      {/* Subtle radial glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-text-primary">
          Chowdhury Nabil Ahmed
        </h1>
        <h2 className="text-xl md:text-2xl text-accent mb-8 font-medium">
          Majoring in Software Engineering
        </h2>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto">
          A Computer Science undergraduate specializing in Software Engineering, skilled in Data Structures and Algorithms using C++ and OOP principles. Solved 400+ problems on major online platforms and currently expanding skills in Web Development and Machine Learning with Python.
        </p>
      </div>
      <ScrollIndicator />
    </section>
  )
}
