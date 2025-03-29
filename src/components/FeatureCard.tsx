'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  delay: number
  features?: string[]
}

export default function FeatureCard({ icon, title, description, delay, features }: FeatureCardProps) {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay,
      ease: "power3.out"
    })
  }, [delay])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1],
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 100
        }
      }}
      style={{ willChange: 'transform, opacity' }}
      whileHover={{ scale: 1.02 }}
      className="w-full"
    >
      <div className="glass-card p-8 hover-glow floating relative overflow-hidden group">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="text-4xl mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
          
          <h3 className="text-2xl font-semibold mb-4 gradient-text">{title}</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

          {features && (
            <ul className="space-y-2 text-sm text-gray-400">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-300" />
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-300" />

        {/* Animated border */}
        <div className="absolute inset-0 border border-primary/20 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-5">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="border border-primary/10"
              style={{
                animation: `pulse ${1 + Math.random() * 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
} 