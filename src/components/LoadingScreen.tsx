'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-4 border-primary/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Middle ring */}
        <motion.div
          className="absolute inset-0 border-4 border-primary/40 rounded-full"
          animate={{
            scale: [1.1, 1.3, 1.1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute inset-0 border-4 border-primary/60 rounded-full"
          animate={{
            scale: [1.2, 1.4, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Center content */}
        <div className="relative z-10 w-32 h-32 flex items-center justify-center">
          <motion.div
            className="text-2xl font-light text-white"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            VibeVerse
          </motion.div>
        </div>
      </div>
      
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            className="border border-primary/20"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
} 