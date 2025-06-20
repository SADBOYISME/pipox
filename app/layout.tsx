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
  keywords: "tech consulting, digital transformation, cloud migration, software development, IT strategy, technology solutions, business automation, digital innovation, Thailand tech consulting",
  authors: [{ name: "PipoX Consulting" }],
  creator: "PipoX Technology Consulting",
  publisher: "PipoX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PipoX - Premier Tech Consulting Services",
    description: "Transform your business with expert technology consulting and digital transformation solutions.",
    type: "website",
    locale: "en_US",
    url: "https://pipox.chobchuen.com/",
    siteName: "PipoX Technology Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "PipoX - Premier Tech Consulting Services",
    description: "Transform your business with expert technology consulting and digital transformation solutions.",
    creator: "@pipox",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          <DynamicLangWrapper />
          {children}
        </LanguageProvider>
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
      </body>
    </html>
  );
}
