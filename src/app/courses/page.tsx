'use client';

import ClientLayout from '@/components/ClientLayout';
import { motion } from 'framer-motion';

export default function CoursesPage() {
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
                  Courses
                </span>
              </h1>
              <p className="text-lg text-gray-400 font-light">
                Learn Vibe Coding through structured courses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                  <p className="text-sm text-gray-500 mb-2">Coming Soon</p>
                  <h2 className="text-xl text-white/90 mb-2">Course Title Placeholder</h2>
                  <p className="text-gray-400 font-light mb-4">
                    A preview of the course content that will be available here soon.
                  </p>
                  <div className="text-sm text-gray-500">
                    Duration: TBA • Level: All Levels
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </ClientLayout>
  );
} 