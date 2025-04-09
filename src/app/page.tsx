'use client';

import Background3D from '@/components/Background3D';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen">
        {/* Background */}
        <ErrorBoundary fallback={<div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-900 to-black" />}>
          <Background3D />
        </ErrorBoundary>

        {/* Content */}
        <div className="relative z-10">
          <ComingSoonTemplate />
        </div>
      </div>
    </main>
  );
}