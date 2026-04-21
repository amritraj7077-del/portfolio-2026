import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Amrit Raj – Engineering Portfolio',
  description: 'Full Stack Developer, AI/ML Researcher, and Founder exploring autonomous systems and distributed architectures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="bg-background text-slate-400 font-sans antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  )
}
