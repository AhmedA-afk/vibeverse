'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0.5 opacity-20">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="border border-primary/20"
              style={{
                animation: `pulse ${2 + Math.random() * 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Glowing circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-32 h-32 rounded-full bg-primary/20 filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Hexagon loader */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 hexagon border-2 border-primary animate-spin-slow" />
          <div className="absolute inset-2 hexagon border-2 border-primary animate-spin-reverse" />
          <div className="absolute inset-4 hexagon border-2 border-primary animate-pulse" />
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-light tracking-wider text-primary">
            LOADING
          </h2>
          <div className="flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <p className="text-sm text-gray-400 font-light">
            Initializing Vibe Coding
          </p>
        </motion.div>
      </div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-20" />
    </div>
  );
} 