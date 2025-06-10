import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Advocate Atul Gupta - Top Lawyer, Legal Consultant, Attorney & Law Expert in India',
  description: 'Expert legal advice and representation by Advocate Atul Gupta. Services include civil, criminal, corporate, family, property, and constitutional law. Trusted legal consultant for individuals, startups, and businesses. Book consultations online or offline.',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
