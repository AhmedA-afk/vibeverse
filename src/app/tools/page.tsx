'use client';

import ClientLayout from '@/components/ClientLayout';
import { motion } from 'framer-motion';

export default function ToolsPage() {
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
                  Tools
                </span>
              </h1>
              <p className="text-lg text-gray-400 font-light">
                AI-powered development tools for modern coding
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: '🤖', title: 'AI Code Assistant', desc: 'Intelligent code suggestions and completions' },
                { icon: '🎨', title: 'UI Generator', desc: 'Create beautiful interfaces with natural language' },
                { icon: '🔍', title: 'Code Analysis', desc: 'Deep insights into your codebase' },
                { icon: '🚀', title: 'Performance Tools', desc: 'Optimize your application performance' }
              ].map((tool) => (
                <div key={tool.title} className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                  <div className="text-3xl mb-4">{tool.icon}</div>
                  <h2 className="text-xl text-white/90 mb-2">{tool.title}</h2>
                  <p className="text-gray-400 font-light">
                    {tool.desc}
                  </p>
                  <p className="text-sm text-gray-500 mt-4">Coming Soon</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </ClientLayout>
  );
} 