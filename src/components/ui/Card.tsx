import React from 'react';
import './ui.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'product' | 'testimonial' | 'service';
  hoverEffect?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hoverEffect = false 
}: CardProps) {
  const baseClasses = "card rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300";
  
  const variantClasses = {
    default: "p-6",
    product: "flex flex-col h-full",
    testimonial: "p-8 bg-[var(--color-cream)] relative",
    service: "p-8 text-center h-full border border-[var(--color-grey-100)]"
  };

  const hoverClasses = hoverEffect ? "hover:shadow-lg hover:-translate-y-2" : "";

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
