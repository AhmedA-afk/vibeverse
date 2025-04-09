'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TranslucentCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function TranslucentCard({ children, className = '', delay = 0 }: TranslucentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`relative p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
} 