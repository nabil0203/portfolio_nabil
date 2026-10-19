import MotionDiv from './MotionDiv'
import SectionDivider from './SectionDivider'

interface SectionHeaderProps {
  // Leading words, e.g. "My", "About", "Skills"
  label: string

  // Trailing words, e.g. "Projects", "Me", "& Technologies"
  highlight: string

  // Applied to the MotionDiv wrapper, e.g. "mb-14" or "mb-10 md:mb-16"
  className?: string

  // Sets the id on the h2, useful for aria-labelledby
  id?: string
}

// Shared section heading: left-aligned display title over a hairline rule.
export default function SectionHeader({ label, highlight, className, id }: SectionHeaderProps) {
  return (
    <MotionDiv className={`text-left ${className ?? ''}`}>
      <h2
        id={id}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-steel-800 tracking-tight leading-[1.05]"
      >
        {label} {highlight}
      </h2>
      <SectionDivider />
    </MotionDiv>
  )
}
