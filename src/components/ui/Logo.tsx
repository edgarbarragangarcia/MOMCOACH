import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'monochrome' | 'coral';
}

export default function Logo({ className = '', variant = 'primary' }: LogoProps) {
  return (
    <Link href="/" className={`logo-container ${className}`} aria-label="The Mom Coach Home" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <img 
        src="/PHOTO-2026-07-14-08-47-02.jpg" 
        alt="The Mom Coach Logo" 
        style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
      />
    </Link>
  );
}
