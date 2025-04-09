'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Background3D from './Background3D'

export default function HeroSection() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .from(buttonsRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
  }, [])

  return (
    <div className="relative text-center min-h-screen flex items-center justify-center py-20">
      <Background3D />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-8 gradient-text animate-gradient text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-white">VibeVerse</span>
          <span className="text-primary">.tech</span>
        </motion.h1>
        
        <motion.p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where AI meets creativity in the world of coding. Transform your ideas into reality with natural language programming.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">Natural Language Processing</span>
          <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">Rapid Prototyping</span>
          <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm">Community Driven</span>
        </motion.div>
        
        <motion.div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/explore"
              className="btn btn-primary"
              prefetch={true}
            >
              Start Coding
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/learn"
              className="btn btn-outline"
              prefetch={true}
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
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
  )
} 