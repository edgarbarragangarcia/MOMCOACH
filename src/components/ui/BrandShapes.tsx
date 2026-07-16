import React from 'react';

interface ShapeProps {
  size?: number;
  className?: string;
}

/** 8-point sparkle/star, from the brand book's "Elementos Gráficos" sheet. */
export function StarShape({ size = 32, className = '' }: ShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 0 C24.5 10 14 14 4 14 C14 14.5 24.5 18 24 28 C24.5 18 34.5 14.5 44 14 C34.5 14 24.5 10 24 0 Z
           M24 20 C24.3 26 18 28 12 28 C18 28.3 24.3 32 24 38 C24.3 32 30.3 28.3 36 28 C30.3 28 24.3 26 24 20 Z"
        fill="var(--color-coral)"
      />
    </svg>
  );
}

/** Two opposing half-circles, from the brand book's turquoise element. */
export function HalfCirclesShape({ size = 32, className = '' }: ShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M4 22 A20 20 0 0 1 44 22 Z" fill="var(--color-turquoise)" />
      <path d="M4 26 A20 20 0 0 0 44 26 Z" fill="var(--color-turquoise)" />
    </svg>
  );
}

/** Four-lobed flower blob, from the brand book's blue-gray element. */
export function FlowerShape({ size = 32, className = '' }: ShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="12" r="12" fill="var(--color-blue-gray)" />
      <circle cx="24" cy="36" r="12" fill="var(--color-blue-gray)" />
      <circle cx="12" cy="24" r="12" fill="var(--color-blue-gray)" />
      <circle cx="36" cy="24" r="12" fill="var(--color-blue-gray)" />
      <circle cx="24" cy="24" r="9" fill="var(--color-cream)" />
    </svg>
  );
}
