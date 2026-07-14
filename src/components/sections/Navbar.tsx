'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import './sections.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <Logo variant="primary" />
        <ul className="nav-links">
          <li><Link href="/" className="nav-link font-inter">Inicio</Link></li>
          <li><Link href="#about" className="nav-link font-inter">Sobre mi</Link></li>
          <li><Link href="#sleep" className="nav-link font-inter">Sueño</Link></li>
          <li><Link href="#food" className="nav-link font-inter">Alimentación</Link></li>
          <li><Link href="#shop" className="nav-link font-inter">Shop</Link></li>
          <li><Link href="#blog" className="nav-link font-inter">Blog</Link></li>
          <li><Link href="#contact" className="nav-link font-inter">Contacto</Link></li>
        </ul>
        <Button variant="primary" size="sm" className="hidden-mobile nav-btn-modern">Descubrimiento</Button>
      </nav>
    </div>
  );
}
