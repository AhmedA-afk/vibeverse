'use client';

interface PageTitleProps {
  title: string;
  subtitle: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-5xl font-light tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </span>
      </h1>
      <p className="text-lg text-gray-400 font-light">
        {subtitle}
      </p>
    </div>
  );
} 