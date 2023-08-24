import type { Metadata } from 'next'
import './styles/global.scss'

export const metadata: Metadata = {
  title: 'Kim Andre Portfolio',
  description: 'Kim Andre sin hjemmeside',
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
