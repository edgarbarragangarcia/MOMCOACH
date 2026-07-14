import React from 'react';
import Link from 'next/link';
import './ui.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  className = '', 
  children,
  ...props 
}: ButtonProps) {
  const baseClasses = "btn inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out cursor-pointer rounded-full";
  
  const variantClasses = {
    primary: "btn-primary bg-[var(--color-coral)] text-white hover:bg-[#b8706c] hover:shadow-md hover:-translate-y-1",
    secondary: "btn-secondary border-2 border-[var(--color-turquoise)] text-[var(--color-turquoise)] hover:bg-[var(--color-turquoise)] hover:text-white",
    ghost: "btn-ghost text-[var(--color-blue-grey)] hover:bg-[var(--color-cream)] hover:text-[var(--color-coral)]"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
