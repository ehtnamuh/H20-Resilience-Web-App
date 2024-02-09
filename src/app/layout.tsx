import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ['latin'] })
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'H20 Resilience',
  description: 'Flood risk assessment and mitigation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <div className="flex-grow">
          <Navbar />
          {children}
        </div>
    </html>
  )
}
