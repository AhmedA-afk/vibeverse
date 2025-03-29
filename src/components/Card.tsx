'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors ${className}`}>
      {children}
    </div>
  );
} 