'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingScreen from '@/components/LoadingScreen'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Loading components
const LoadingNav = () => (
  <div className="h-16 bg-white/5 backdrop-blur-md animate-pulse" />
)

const LoadingHero = () => (
  <div className="animate-pulse bg-white/10 h-64 rounded-2xl" />
)

const LoadingCard = () => (
  <div className="animate-pulse bg-white/10 h-48 rounded-2xl" />
)

// Error components
const ErrorComponent = ({ error }: { error: Error }) => (
  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
    <p className="text-red-500">Error: {error.message}</p>
  </div>
)

// Dynamic imports with proper error boundaries
const HeroSection = dynamic(() => import('./HeroSection'), {
  ssr: false,
  loading: LoadingHero
})

const FeatureCard = dynamic(() => import('./FeatureCard'), {
  ssr: false,
  loading: LoadingCard
})

const Background3D = dynamic(() => import('@/components/Background3D'), {
  ssr: false,
  loading: () => <LoadingScreen />
})

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ErrorBoundary>
      <div className="relative min-h-screen flex flex-col">
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <Background3D />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <div className="flex-grow pt-20">
            <Suspense fallback={<LoadingScreen />}>
              {children}
            </Suspense>
          </div>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
} 