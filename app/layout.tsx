import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chowdhury Nabil Ahmed - Portfolio',
  description: 'Computer Science Undergraduate specializing in Software Engineering, skilled in Data Structures and Algorithms, Web Development, and Machine Learning.',
  keywords: ['Chowdhury Nabil Ahmed', 'Software Engineer', 'Computer Science', 'Web Development', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'Chowdhury Nabil Ahmed' }],
  creator: 'Chowdhury Nabil Ahmed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
