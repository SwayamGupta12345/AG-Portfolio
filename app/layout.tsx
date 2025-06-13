import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://advocate-atul-gupta.vercel.app"), // ✅ Fix for Open Graph
  title: "Advocate Atul Gupta | Top Lawyer in India Corporate Law",
  description:
    "Looking for the top lawyer in India? Advocate Atul Gupta offers expert legal services in corporate and constitutional law. Trusted legal consultant for startups, businesses & individuals. Schedule your online or offline legal consultation now.",
  applicationName: "Advocate Atul Gupta",
  authors: [
    {
      name: "Advocate Atul Gupta",
      url: "https://advocate-atul-gupta.vercel.app",
    },
  ],
  keywords: [
    "Advocate Atul Gupta",
    "Top Lawyer in India",
    "Corporate Lawyer India",
    "Legal Advice Online",
    "Income Tax Lawyer India",
    "Food Law",
    "Food Safety Lawyer",
    "Food Safety Consultant",
    "food safety lawyer in India",
    "Food Safety Act Lawyer",
    "Food Safety Act Consultant",
    "Food Safety Act India",
    "Food Safety Act",
    "Investment Advisory",
    "Investment Advisory Services",
    "Investment Advisory India",
    "Investment Advisory Consultant",
    "Investment Advisory Services India",
    "Investment Advisory Consultant India",
    "Return Filing",
    "Return Filing Services",
    "Return Filing India",
    "Return Filing Consultant",
    "Return Filing Services India",
    "Return Filing Consultant India",
  ],
  openGraph: {
    title: "Advocate Atul Gupta",
    description:
      "Trusted legal representation for individuals, startups & businesses in India. Book an online or in-person consultation with Advocate Atul Gupta today.",
    url: "https://advocate-atul-gupta.vercel.app",
    type: "website",
    images: [
      {
        url: "/profile_top.jpg", // Customize with a branded image
        width: 1200,
        height: 630,
        alt: "Advocate Atul Gupta - Top Lawyer in India",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Advocate Atul Gupta",
              url: "https://advocate-atul-gupta.vercel.app",
            }),
          }}
        />

        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Basic SEO */}
        <title>Advocate Atul Gupta | Corporate Law Specialist in India</title>
        <meta
          name="description"
          content="Expert in corporate law. Get trusted legal consultation and representation from Advocate Atul Gupta for your business or startup in India."
        />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="CO6R1KEUWL4LkmfgBzXjGZ92O51bpPPB7A3f6sHLkB8"
        />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Advocate Atul Gupta" />
        <meta
          property="og:description"
          content="Trusted corporate law specialist. Book your consultation with Advocate Atul Gupta today."
        />
        <meta property="og:image" content="/profile_top.jpg" />
        <meta
          property="og:url"
          content="https://advocate-atul-gupta.vercel.app"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advocate Atul Gupta" />
        <meta
          name="twitter:description"
          content="Trusted corporate law specialist in India. Get legal advice and representation tailored to your business needs."
        />
        <meta name="twitter:image" content="/profile_top.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
