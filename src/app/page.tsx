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
import Card from '@/components/Card';

const Background3D = dynamic(() => import('@/components/Background3D'), {
  ssr: false,
  loading: () => <LoadingScreen />
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
        <div className="fixed inset-0 z-0">
          <Background3D />
        </div>

        {/* Fixed Hero Section */}
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <motion.div 
            style={{ opacity }}
            className="text-center space-y-8 max-w-4xl px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10">
          <div className="h-screen" /> {/* Spacer for hero section */}
          <PageLayout>
            {/* What is Vibe Coding Section */}
            <section className="py-20">
              <div className="space-y-8">
                <h2 className="text-3xl font-light tracking-wide text-white text-center">
                  The Future of Development
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="space-y-4">
                    <h3 className="text-xl text-white/90">
                      Intuitive Development
                    </h3>
                    <p className="text-gray-400 font-light">
                      Transform your ideas into reality through simple conversations. Our AI understands your vision and crafts elegant solutions, making complex development feel effortless.
                    </p>
                  </Card>
                  <Card className="space-y-4">
                    <h3 className="text-xl text-white/90">
                      AI-Powered Innovation
                    </h3>
                    <p className="text-gray-400 font-light">
                      Harness the power of advanced AI to accelerate your development cycle. Build, iterate, and deploy faster than ever before with intelligent assistance.
                    </p>
                  </Card>
                </div>
              </div>
            </section>

            {/* Core Features Section */}
            <section className="py-20">
              <div className="space-y-12">
                <h2 className="text-3xl font-light tracking-wide text-white text-center">
                  Why Choose VibeVerse?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="space-y-4">
                    <h3 className="text-xl text-white/90">
                      Conversational Development
                    </h3>
                    <p className="text-gray-400 font-light">
                      Express your ideas naturally and watch them come to life. Our AI understands context and transforms your vision into elegant code.
                    </p>
                  </Card>
                  <Card className="space-y-4">
                    <h3 className="text-xl text-white/90">
                      Lightning-Fast Creation
                    </h3>
                    <p className="text-gray-400 font-light">
                      Build MVPs in hours, not weeks. Our AI-powered tools help you iterate quickly and bring your projects to market faster.
                    </p>
                  </Card>
                  <Card className="space-y-4">
                    <h3 className="text-xl text-white/90">
                      Community of Innovators
                    </h3>
                    <p className="text-gray-400 font-light">
                      Join a thriving community of forward-thinking developers who are shaping the future of software creation.
                    </p>
                  </Card>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
              <div className="space-y-12">
                <h2 className="text-3xl font-light tracking-wide text-white text-center">
                  Transform Your Workflow
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="space-y-4">
                    <h3 className="text-xl text-white/90">
                      10x Faster Development
                    </h3>
                    <p className="text-gray-400 font-light">
                      Build complex applications in record time. Our AI accelerates your development cycle while maintaining code quality and best practices.
                    </p>
                  </Card>
                  <Card className="space-y-4">
                    <h3 className="text-xl text-white/90">
                      Unlimited Creativity
                    </h3>
                    <p className="text-gray-400 font-light">
                      Break free from traditional coding constraints. Focus on innovation while AI handles the implementation details.
                    </p>
                  </Card>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
              <div className="text-center space-y-8">
                <h2 className="text-3xl font-light tracking-wide text-white">
                  Ready to Revolutionize Your Development?
                </h2>
                <Link 
                  href="/get-started" 
                  className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 non-selectable"
                >
                  Join the Future →
                </Link>
              </div>
            </section>
          </PageLayout>
        </div>
      </div>
    </ClientLayout>
  );
} 