'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import ErrorBoundary from '@/components/ErrorBoundary';
import LoadingScreen from '@/components/LoadingScreen';
import ClientLayout from '@/components/ClientLayout';
import PageLayout from '@/components/PageLayout';
import PageTitle from '@/components/PageTitle';
import TranslucentCard from '@/components/TranslucentCard';

const Background3D = dynamic(() => import('@/components/Background3D'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-900 to-black" />
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ClientLayout>
      <div className="relative min-h-screen">
        {/* Background */}
        <ErrorBoundary fallback={<div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-900 to-black" />}>
          <Background3D />
        </ErrorBoundary>

        {/* Content */}
        <div className="relative z-10">
          <PageLayout>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center">
              <motion.div 
                style={{ opacity }}
                className="text-center space-y-8 max-w-4xl px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <TranslucentCard className="max-w-4xl mx-auto">
                  <PageTitle 
                    title="Welcome to VibeVerse"
                    subtitle="Where AI Meets Human Creativity in Software Development"
                  />
                  
                  <div className="space-y-6">
                    <p className="text-xl text-gray-300 font-light leading-relaxed">
                      Imagine a world where your ideas transform into code instantly. Vibe Coding revolutionizes software development by combining human creativity with AI's power, making complex programming tasks feel like a natural conversation.
                    </p>
                    
                    <Link 
                      href="/get-started" 
                      className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 non-selectable"
                    >
                      Start Building the Future →
                    </Link>
                  </div>
                </TranslucentCard>
              </motion.div>
            </section>

            {/* What is Vibe Coding Section */}
            <section className="py-20">
              <div className="space-y-8">
                <h2 className="text-3xl font-light tracking-wide text-white text-center">
                  The Future of Development
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <TranslucentCard delay={0.2}>
                    <h3 className="text-xl text-white/90">
                      Intuitive Development
                    </h3>
                    <p className="text-gray-400 font-light">
                      Transform your ideas into reality through simple conversations. Our AI understands your vision and crafts elegant solutions, making complex development feel effortless.
                    </p>
                  </TranslucentCard>
                  <TranslucentCard delay={0.4}>
                    <h3 className="text-xl text-white/90">
                      AI-Powered Innovation
                    </h3>
                    <p className="text-gray-400 font-light">
                      Harness the power of advanced AI to accelerate your development cycle. Build, iterate, and deploy faster than ever before with intelligent assistance.
                    </p>
                  </TranslucentCard>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
              <div className="space-y-8">
                <h2 className="text-3xl font-light tracking-wide text-white text-center">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TranslucentCard delay={0.2}>
                    <h3 className="text-xl text-white/90">
                      Smart Code Generation
                    </h3>
                    <p className="text-gray-400 font-light">
                      Generate high-quality code from natural language descriptions with our advanced AI models.
                    </p>
                  </TranslucentCard>
                  <TranslucentCard delay={0.4}>
                    <h3 className="text-xl text-white/90">
                      Real-time Collaboration
                    </h3>
                    <p className="text-gray-400 font-light">
                      Work seamlessly with your team in real-time, sharing ideas and code instantly.
                    </p>
                  </TranslucentCard>
                  <TranslucentCard delay={0.6}>
                    <h3 className="text-xl text-white/90">
                      Intelligent Debugging
                    </h3>
                    <p className="text-gray-400 font-light">
                      Let AI help you identify and fix issues in your code with smart debugging suggestions.
                    </p>
                  </TranslucentCard>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
              <div className="max-w-4xl mx-auto">
                <TranslucentCard delay={0.2} className="text-center space-y-8">
                  <h2 className="text-4xl font-light tracking-wide text-white">
                    Ready to Transform Your Development?
                  </h2>
                  <p className="text-gray-300 font-light text-lg max-w-2xl mx-auto">
                    Join the revolution in software development. Experience the power of AI-assisted coding and build the future of technology.
                  </p>
                  <Link 
                    href="/get-started" 
                    className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 non-selectable text-lg"
                  >
                    Get Started Now →
                  </Link>
                </TranslucentCard>
              </div>
            </section>
          </PageLayout>
        </div>
      </div>
    </ClientLayout>
  );
} 