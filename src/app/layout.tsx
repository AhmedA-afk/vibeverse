import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VibeVerse - The Future of AI-Powered Software Development',
  description: 'VibeVerse is the ecosystem where Vibe Coding comes to life. Experience the revolutionary programming paradigm that uses natural language and AI to transform software development. Join our community of creators building the future.',
  keywords: 'vibe coding, vibecoding, AI programming, natural language coding, software development, artificial intelligence, developer tools, code generation, AI-powered development',
  openGraph: {
    title: 'VibeVerse - The Future of AI-Powered Software Development',
    description: 'Transform your development workflow with Vibe Coding - where natural language meets AI to create software faster and more intuitively.',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibeVerse - Revolutionary AI-Powered Software Development',
    description: 'Experience the future of coding with VibeVerse. Use natural language to create software through AI assistance.',
    images: ['/twitter-image.jpg'],
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
        <JsonLd type="WebSite" data={websiteData} />
        <JsonLd type="Organization" data={organizationData} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 