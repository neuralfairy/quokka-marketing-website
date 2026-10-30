import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LiveChat } from "@/components/live-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quokka Marketing Solutions - Performance-Based Promotional Campaigns",
  description:
    "Drive conversions with our performance-based promotional campaigns. ROI-focused marketing solutions for B2B companies. Start your free trial today.",
  keywords: "performance campaigns, conversion optimization, ROI marketing, promotional campaigns, B2B sales tools",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.jpg", type: "image/jpeg" }],
  },
  openGraph: {
    title: "Quokka Marketing Solutions - Performance-Based Promotional Campaigns",
    description:
      "Drive conversions with our performance-based promotional campaigns. ROI-focused marketing solutions for B2B companies.",
    url: "https://quokka-marketing.com",
    siteName: "Quokka Marketing Solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Quokka Marketing Solutions",
              url: "https://quokka-marketing.com",
              logo: "https://quokka-marketing.com/logo.png",
              description: "Performance-based promotional campaigns that drive conversions",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Spokane",
                addressRegion: "WA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-509-555-0123",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <LiveChat />
      </body>
    </html>
  )
}
