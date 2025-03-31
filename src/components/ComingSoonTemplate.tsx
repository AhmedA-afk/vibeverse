'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

export default function ComingSoonTemplate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create transparent cube - Providing all required parameters
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1, // primary color
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
      specular: 0xffffff,
      shininess: 100,
    });
    const cube = new THREE.Mesh(geometry, material);
    cubeRef.current = cube;
    scene.add(cube);

    // Add lights - Using Vector3 objects instead of direct position.set calls
    const light1 = new THREE.DirectionalLight(0x6366f1, 1);
    const pos1 = new THREE.Vector3(0, 1, 2);
    light1.position.copy(pos1);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x4f46e5, 1);
    const pos2 = new THREE.Vector3(2, -1, -2);
    light2.position.copy(pos2);
    scene.add(light2);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      {/* 3D Cube Container */}
      <div ref={containerRef} className="absolute inset-0 z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-8xl font-bold mb-4 text-white">
              Launching
              <span className="text-gradient"> soon</span>
            </h1>
            <div className="text-6xl text-primary mb-4">🚀</div>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            It's not here yet, but we'll let you in on a secret. It's coming really, really soon.
            <br />
            So sit tight and check back in on July 31. You just might see something that will blow your socks off!
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-400">Really excited to get in touch with us?</p>
            <p className="text-lg text-gray-400">
              Send us an email at{' '}
              <a href="mailto:connect.ahmedansari@gmail.com" className="text-primary hover:text-primary-light transition-colors">
                connect.ahmedansari@gmail.com
              </a>
            </p>
            <p className="text-lg text-gray-400">
              Or follow us at{' '}
              <a href="https://facebook.com/vibeverse.tech" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">
                @vibeverse.tech
              </a>
              {' '}on Facebook and Instagram for updates and news.
            </p>
          </div>
          <div className="mt-12 flex justify-center space-x-8">
            <motion.a
              href="mailto:connect.ahmedansari@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-4xl"
              aria-label="Email"
            >
              ✉️
            </motion.a>
            <motion.a
              href="https://facebook.com/vibeverse.tech"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-4xl"
              aria-label="Facebook"
            >
              👥
            </motion.a>
            <motion.a
              href="https://instagram.com/vibeverse.tech"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-4xl"
              aria-label="Instagram"
            >
              📸
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}