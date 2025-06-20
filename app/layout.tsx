import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";
import DynamicLangWrapper from "./components/DynamicLangWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PipoX - Premier Tech Consulting Services | Digital Transformation Experts",
  description: "Transform your business with PipoX's expert technology consulting. We provide digital transformation, cloud migration, software development, and IT strategy consulting to accelerate your growth.",
  keywords: "tech consulting, digital transformation, cloud migration, software development, IT strategy, technology solutions, business automation, digital innovation, Thailand tech consulting, IT consulting Bangkok, IT consulting Thailand, business IT solutions, cloud consulting, cybersecurity consulting, software outsourcing, IT support, digital strategy, business automation, managed IT services, IT project management, IT transformation, IT modernization, IT partner, IT advisor, IT expert, IT consultant, IT company, IT agency, IT services, IT solutions, IT provider, IT Bangkok, IT Thailand, IT Asia",
  authors: [{ name: "PipoX Consulting" }],
  creator: "PipoX Technology Consulting",
  publisher: "PipoX",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "PipoX - Premier Tech Consulting Services",
    description: "Transform your business with expert technology consulting and digital transformation solutions.",
    type: "website",
    locale: "en_US",
    url: "https://pipox.chobchuen.com/",
    siteName: "PipoX Technology Consulting",
    images: [
      {
        url: "https://pipox.chobchuen.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PipoX Tech Consulting - Digital Transformation Experts"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PipoX - Premier Tech Consulting Services",
    description: "Transform your business with expert technology consulting and digital transformation solutions.",
    creator: "@pipox",
    images: ["https://pipox.chobchuen.com/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "hVy1MCa2pqEBxHcb-gVJizGJYan3xIs7mfmea1jwPJI",
  },
  alternates: {
    canonical: "https://pipox.chobchuen.com",
    languages: {
      "en": "https://pipox.chobchuen.com/en",
      "th": "https://pipox.chobchuen.com/th"
    }
  },
  metadataBase: new URL("https://pipox.chobchuen.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  other: {
    "viewport": "width=device-width, initial-scale=1, maximum-scale=5",
    "charset": "utf-8",
    "theme-color": "#2563eb",
    "contact": "093-247-3600, contact@pipox.com, Bangkok, Thailand",
    "business:contact_data": "093-247-3600, contact@pipox.com, Bangkok, Thailand"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable}`}>
      <head>
        {/* SEO essentials */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="google-site-verification" content="hVy1MCa2pqEBxHcb-gVJizGJYan3xIs7mfmea1jwPJI" />
        <meta name="contact" content="093-247-3600, contact@pipox.com, Bangkok, Thailand" />
        <meta property="business:contact_data" content="093-247-3600, contact@pipox.com, Bangkok, Thailand" />
        <link rel="canonical" href="https://pipox.chobchuen.com" />
        <link rel="alternate" href="https://pipox.chobchuen.com/en" hrefLang="en" />
        <link rel="alternate" href="https://pipox.chobchuen.com/th" hrefLang="th" />
        <meta property="og:image" content="https://pipox.chobchuen.com/og-image.jpg" />
        <meta name="twitter:image" content="https://pipox.chobchuen.com/og-image.jpg" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "PipoX Technology Consulting",
              "description": "Expert technology consulting services including digital transformation, cloud migration, software development, and IT strategy consulting.",
              "url": "https://pipox.chobchuen.com",
              "telephone": "+66932473600",
              "email": "contact@pipox.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangkok",
                "addressCountry": "Thailand"
              },
              "serviceType": [
                "Digital Transformation",
                "Cloud Migration",
                "Software Development",
                "Cybersecurity Consulting",
                "IT Strategy Consulting"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Thailand"
              },
              "founder": {
                "@type": "Organization",
                "name": "PipoX"
              },
              "sameAs": [
                "https://linkedin.com/company/pipox",
                "https://twitter.com/pipox"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <DynamicLangWrapper />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
