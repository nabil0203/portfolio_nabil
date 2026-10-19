import { ReactNode, ElementType } from 'react'

interface InfoRowProps {
  Icon: ElementType
  label: string
  children: ReactNode
}

/**
 * One row of the profile sheet: label on the left, content on the right.
 * Every row shares the same grid, so all content aligns on one edge.
 */
export default function InfoRow({ Icon, label, children }: InfoRowProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[13rem_1fr] md:gap-10 border-t border-steel-300 first:border-t-0 px-6 py-6 sm:px-8 sm:py-7">
      <h3 className="flex items-center gap-3 font-display text-base font-semibold text-steel-800 md:self-start">
        <Icon className="h-5 w-5 shrink-0 text-steel-500" aria-hidden="true" />
        {label}
      </h3>
      <div className="min-w-0">{children}</div>
    </div>
  )
}