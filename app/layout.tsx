import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eventyrtur - Norwegian Fairytale Adventures',
  description: 'Experience magical adventures through ancient forests, mystical mountains, and enchanted fjords in Norway',
  keywords: ['Norway', 'adventures', 'fairytales', 'hiking', 'tours', 'fjords', 'mountains'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
