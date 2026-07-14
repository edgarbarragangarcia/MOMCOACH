"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sueño Infantil', href: '/sueno' },
    { name: 'Alimentación', href: '/alimentacion' },
    { name: 'Programas', href: '/programas' },
    { name: 'Sobre Mí', href: '/sobre-mi' },
    { name: 'Tienda', href: '/tienda' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo variant={isScrolled ? 'primary' : 'primary'} />
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[var(--color-blue-grey)] font-medium hover:text-[var(--color-coral)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button href="/llamada-descubrimiento" size="sm">
            Agendar Llamada
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-[var(--color-blue-grey)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[var(--color-blue-grey)] font-medium block py-2 border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button href="/llamada-descubrimiento" className="w-full">
              Agendar Llamada
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
