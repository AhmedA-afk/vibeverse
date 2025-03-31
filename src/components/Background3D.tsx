'use client'

import { useRef, useMemo } from 'react'
import dynamic from 'next/dynamic'
import * as THREE from 'three'

// Fix the import path by using an absolute path from the src directory
const ThreeWrapper = dynamic(() => import('@/components/ThreeWrapper'), {
  ssr: false
})

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <ThreeWrapper />
    </div>
  )
}