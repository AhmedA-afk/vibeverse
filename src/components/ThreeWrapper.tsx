'use client'

import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  
  const count = 5000
  const radius = 20
  
  const positions = React.useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)
      
      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = radius * Math.cos(theta)
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.1
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export default function ThreeWrapper() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <ParticleField />
    </Canvas>
  )
}
