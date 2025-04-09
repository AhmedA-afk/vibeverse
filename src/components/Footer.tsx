'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-8 -ml-8">
            <div className="flex justify-start">
              <Logo variant="white" size={50} />
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              The future of development is here. Join us in revolutionizing software development with Vibe Coding in the Vibe Verse.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-gray-400">Platform</h4>
            <div className="space-y-2">
              <Link href="/articles" className="block text-sm text-gray-500 hover:text-white">Articles</Link>
              <Link href="/courses" className="block text-sm text-gray-500 hover:text-white">Courses</Link>
              <Link href="/contests" className="block text-sm text-gray-500 hover:text-white">Contests</Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-gray-400">Resources</h4>
            <div className="space-y-2">
              <Link href="/tools" className="block text-sm text-gray-500 hover:text-white">Tools</Link>
              <Link href="/community" className="block text-sm text-gray-500 hover:text-white">Community</Link>
              <Link href="/get-started" className="block text-sm text-gray-500 hover:text-white">Get Started</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-gray-400">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:connect.ahmedansari@gmail.com" className="block text-sm text-gray-500 hover:text-white">Email</a>
              <a href="https://facebook.com/vibeverse.tech" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-500 hover:text-white">Facebook</a>
              <a href="https://instagram.com/vibeverse.tech" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-500 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} VibeVerse.tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 