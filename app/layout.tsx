import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://advocate-atul-gupta.vercel.app"), // ✅ Fix for Open Graph
  title: "Advocate Atul Gupta | Best Lawyer in India Corporate Law",
  description:
    "Looking for the best lawyer in India? Advocate Atul Gupta offers expert legal services in civil, criminal, family, property, corporate, and constitutional law. Trusted legal consultant for startups, businesses & individuals. Schedule your online or offline legal consultation now.",
  authors: [
    {
      name: "Advocate Atul Gupta",
      url: "https://advocate-atul-gupta.vercel.app",
    },
  ],
  keywords: [
    "Advocate Atul Gupta",
    "Best Lawyer in India",
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
        url: "/og-image.jpg", // Customize with a branded image
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
        <meta
          name="google-site-verification"
          content="CO6R1KEUWL4LkmfgBzXjGZ92O51bpPPB7A3f6sHLkB8"
        />
        <meta property="og:title" content="Advocate Atul Gupta" />
        <meta property="og:description" content="Trusted legal representation for individuals, startups & businesses in India. Book an online or in-person consultation with Advocate Atul Gupta today." />
        <meta property="og:image" content="/og-image.jpg" />

        <meta property="og:type" content="website" />
      </head>
      <body>{children}</body>
    </html>
  );
}
