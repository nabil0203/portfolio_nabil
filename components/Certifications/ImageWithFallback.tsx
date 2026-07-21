'use client'

import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
}

export default function ImageWithFallback({ src, alt, className }: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-500 w-full">
        <ImageIcon className="w-12 h-12" />
        <p className="text-sm">Image not found</p>
        <p className="text-xs opacity-70 px-4 text-center">
          Expected at <code className="bg-slate-800 px-2 py-0.5 rounded">{src}</code>
        </p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  )
}
