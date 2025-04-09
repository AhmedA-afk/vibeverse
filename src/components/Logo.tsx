'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'colored' | 'white';
  type?: 'horizontal' | 'vertical';
  className?: string;
  href?: string;
  crop?: number; // Percentage from top (0-100)
  size?: number; // Percentage of original size (0-100)
}

export default function Logo({ 
  variant = 'colored', 
  type = 'horizontal',
  className = '',
  href = '/',
  crop = 30, // Default crop position
  size = 100 // Default size
}: LogoProps) {
  const getLogoPath = () => {
    if (type === 'horizontal') {
      return variant === 'colored' 
        ? '/logos/t_colored_horizontal Cropped.png'
        : '/logos/t_white_horizontal_cropped.png';
    } else {
      return variant === 'colored'
        ? '/logos/t_colored_logo.png'
        : '/logos/t_white_logo.png';
    }
  };

  return (
    <Link href={href} className={`inline-block ${className}`}>
      <div className="relative">
        <Image
          src={getLogoPath()}
          alt="VibeVerse Logo"
          width={type === 'horizontal' ? 1400 : 320}
          height={type === 'horizontal' ? 280 : 320}
          className="h-auto w-auto object-cover"
          priority
          quality={100}
          unoptimized
          style={{
            objectPosition: `center ${crop}%`,
            maxWidth: `${type === 'horizontal' ? 1400 : 320}px`,
            maxHeight: `${type === 'horizontal' ? 280 : 320}px`,
            transform: `scale(${size / 100})`,
            transformOrigin: 'center'
          }}
        />
      </div>
    </Link>
  );
} 