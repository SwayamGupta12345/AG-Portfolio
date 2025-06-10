import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Advocate Atul Gupta | Best Lawyer in India for Civil, Criminal, Property & Corporate Law',
  description: 'Looking for the best lawyer in India? Advocate Atul Gupta offers expert legal services in civil, criminal, family, property, corporate, and constitutional law. Trusted legal consultant for startups, businesses & individuals. Schedule your online or offline legal consultation now.',
  keywords: [
    'Advocate Atul Gupta',
    'Best Lawyer in India',
    'Top Legal Consultant India',
    'Civil Lawyer India',
    'Criminal Lawyer India',
    'Corporate Lawyer India',
    'Property Lawyer India',
    'Constitutional Law Expert',
    'Legal Advice Online',
    'Law Firm India'
  ],
  openGraph: {
    title: 'Advocate Atul Gupta | Top Legal Consultant & Attorney in India',
    description: 'Trusted legal representation for individuals, startups & businesses in India. Book an online or in-person consultation with Advocate Atul Gupta today.',
    url: 'https://advocate-atul-gupta.vercel.app',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Customize with a branded image
        width: 1200,
        height: 630,
        alt: 'Advocate Atul Gupta - Top Lawyer in India',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};


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
