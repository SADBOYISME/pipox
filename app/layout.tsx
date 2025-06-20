import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    url: "https://pipox.com",
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
    google: "your-google-verification-code", // Replace with actual Google verification code
  },
  alternates: {
    canonical: "https://pipox.com",
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
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
