/**
 * Decorative divider used beneath section headings across all sections.
 * Replaces 6 identical copies of the same 5-div gradient rule markup.
 */
export default function SectionDivider() {
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50 rounded-full" />
      <div className="h-1.5 w-1.5 rounded-full bg-accent-secondary/60" />
      <div className="h-px w-24 bg-gradient-to-r from-accent/50 via-accent-secondary/60 to-accent-glow/50 rounded-full" />
      <div className="h-1.5 w-1.5 rounded-full bg-accent-glow/60" />
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50 rounded-full" />
    </div>
  )
}
