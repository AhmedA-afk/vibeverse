'use client';

import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="relative">
      <section className="min-h-screen flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto space-y-16"
        >
          {children}
        </motion.div>
      </section>
    </main>
  );
} 