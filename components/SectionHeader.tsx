import MotionDiv from './MotionDiv'
import SectionDivider from './SectionDivider'

interface SectionHeaderProps {
  // Plain text prefix, e.g. "My", "About", "Skills"
  label: string

  // Gradient-highlighted suffix, e.g. "Projects", "Me", "& Technologies"
  highlight: string

  // Applied to the MotionDiv wrapper, e.g. "mb-14" or "mb-10 md:mb-16"
  className?: string

  // Sets the id on the h2, useful for aria-labelledby
  id?: string
}

// Shared section heading used across all portfolio sections.
// Renders: [label] [highlight in gradient] + SectionDivider below

export default function SectionHeader({ label, highlight, className, id }: SectionHeaderProps) {
  return (
    <MotionDiv className={`text-center ${className ?? ''}`}>
      <h2
        id={id}
        className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4"
      >
        {label}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-glow">
          {highlight}
        </span>
      </h2>
      <SectionDivider />
    </MotionDiv>
  )
}
