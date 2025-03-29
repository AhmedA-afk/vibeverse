'use client';

import ClientLayout from '@/components/ClientLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GetStartedPage() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description: 'Sign up for early access to Vibe Coding platform',
      action: 'Register Now'
    },
    {
      number: '02',
      title: 'Choose Your Path',
      description: 'Select your development focus and skill level',
      action: 'Explore Paths'
    },
    {
      number: '03',
      title: 'Start Learning',
      description: 'Begin with interactive tutorials and hands-on projects',
      action: 'View Courses'
    },
    {
      number: '04',
      title: 'Join Community',
      description: 'Connect with fellow developers and share your journey',
      action: 'Join Now'
    }
  ];

  return (
    <ClientLayout>
      <main className="relative">
        <section className="min-h-screen flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto space-y-16"
          >
            <div className="space-y-6 text-center">
              <h1 className="text-5xl font-light tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Get Started
                </span>
              </h1>
              <p className="text-lg text-gray-400 font-light">
                Begin your journey with Vibe Coding
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-2xl text-gray-500 font-light">
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <h2 className="text-xl text-white/90 mb-2">
                        {step.title}
                      </h2>
                      <p className="text-gray-400 font-light mb-4">
                        {step.description}
                      </p>
                      <Link 
                        href="/coming-soon"
                        className="text-sm text-primary hover:text-primary-dark transition-colors"
                      >
                        {step.action} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Need help? <Link href="/community" className="text-primary hover:text-primary-dark">Contact our community</Link>
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </ClientLayout>
  );
} 