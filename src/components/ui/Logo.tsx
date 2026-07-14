import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'primary' | 'monochrome' | 'coral';
}

export default function Logo({ className = '', variant = 'primary' }: LogoProps) {
  const getTextColor = () => {
    switch (variant) {
      case 'monochrome': return 'var(--color-white)';
      case 'coral': return 'var(--color-coral)';
      default: return 'var(--color-black)'; // Text is usually black/dark
    }
  };

  const getLineColor = () => {
    switch (variant) {
      case 'monochrome': return 'var(--color-white)';
      default: return 'var(--color-olive-light)'; // The vertical line is light olive
    }
  };

  return (
    <Link href="/" className={`inline-flex items-stretch ${className}`} aria-label="The Mom Coach Home">
      {/* Vertical accent line */}
      <div 
        className="w-1 mr-3 rounded-full" 
        style={{ backgroundColor: getLineColor() }}
      />
      
      {/* Typography part of logo */}
      <div 
        className="flex flex-col justify-center leading-none"
        style={{ fontFamily: 'var(--font-family-heading)', color: getTextColor() }}
      >
        <span className="text-xl -mb-1 tracking-wide">The</span>
        <span className="text-3xl font-medium tracking-wide">Mom</span>
        <span className="text-3xl font-medium tracking-wide">Coach</span>
      </div>
    </Link>
  );
}
