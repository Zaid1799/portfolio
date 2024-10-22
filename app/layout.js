import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import "./globals.css"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: "Luxurious Level - Premium Cooling Solutions",
  description: "Experience unparalleled comfort with Luxurious Level's cutting-edge cooling solutions for residential and commercial spaces.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}