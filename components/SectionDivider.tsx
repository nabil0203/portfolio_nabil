/**
 * Heading rule: a short ink bar sitting on a full-width hairline.
 * The bar marks where the section starts; the hairline carries the eye across.
 */
export default function SectionDivider() {
  return (
    <div className="mt-5 relative h-px w-full bg-steel-300" aria-hidden="true">
      <div className="absolute left-0 -top-px h-[3px] w-14 bg-steel-800" />
    </div>
  )
}
