'use client';

import ClientLayout from '@/components/ClientLayout';
import { motion } from 'framer-motion';

export default function CommunityPage() {
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
                  Community
                </span>
              </h1>
              <p className="text-lg text-gray-400 font-light">
                Connect with fellow developers in the Vibe Coding ecosystem
              </p>
            </div>

            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="text-lg text-gray-300">Join our growing community</p>
                <div className="flex justify-center space-x-8">
                  <a href="https://facebook.com/vibeverse.tech" target="_blank" rel="noopener noreferrer" className="text-4xl hover:scale-110 transition-transform">
                    👥
                  </a>
                  <a href="https://instagram.com/vibeverse.tech" target="_blank" rel="noopener noreferrer" className="text-4xl hover:scale-110 transition-transform">
                    📸
                  </a>
                  <a href="mailto:connect.ahmedansari@gmail.com" className="text-4xl hover:scale-110 transition-transform">
                    ✉️
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Discussion Forums', desc: 'Engage in meaningful conversations' },
                  { title: 'Code Reviews', desc: 'Get feedback from experts' },
                  { title: 'Mentorship', desc: 'Learn from experienced developers' },
                  { title: 'Events', desc: 'Join online meetups and workshops' }
                ].map((item) => (
                  <div key={item.title} className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                    <h2 className="text-xl text-white/90 mb-2">{item.title}</h2>
                    <p className="text-gray-400 font-light mb-4">{item.desc}</p>
                    <p className="text-sm text-gray-500">Coming Soon</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </ClientLayout>
  );
} 