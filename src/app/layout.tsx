import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vibeverse.tech'),
  title: 'VibeVerse - AI-Powered Software Development',
  description: 'Transform your ideas into code instantly with VibeVerse. Experience the future of software development with AI-powered coding assistance.',
  keywords: ['AI coding', 'software development', 'programming', 'artificial intelligence', 'code generation'],
  openGraph: {
    title: 'VibeVerse - AI-Powered Software Development',
    description: 'Transform your ideas into code instantly with VibeVerse. Experience the future of software development with AI-powered coding assistance.',
    url: 'https://vibeverse.tech',
    siteName: 'VibeVerse',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VibeVerse - AI-Powered Software Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibeVerse - AI-Powered Software Development',
    description: 'Transform your ideas into code instantly with VibeVerse. Experience the future of software development with AI-powered coding assistance.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteData = {
    name: 'VibeVerse',
    description: 'The ecosystem where Vibe Coding comes to life. Experience the revolutionary programming paradigm that uses natural language and AI to transform software development.',
    url: 'https://vibeverse.tech',
    potentialAction: {
      '@type': 'SearchAction',
      'target': 'https://vibeverse.tech/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationData = {
    name: 'VibeVerse',
    description: 'Leading platform for AI-powered software development through natural language programming.',
    url: 'https://vibeverse.tech',
    logo: 'https://vibeverse.tech/logo.png',
    sameAs: [
      'https://twitter.com/vibeverse',
      'https://github.com/vibeverse',
      'https://linkedin.com/company/vibeverse'
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <JsonLd type="WebSite" data={websiteData} />
        <JsonLd type="Organization" data={organizationData} />
      </head>
      <body className={inter.className}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
} 