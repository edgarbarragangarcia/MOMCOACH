'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import Button from '../ui/Button';
import './sections.css';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const mainBlur = useTransform(scrollYProgress, [0, 0.6], [18, 0]);
  const mainFilter = useMotionTemplate`blur(${mainBlur}px)`;
  const mainScale = useTransform(scrollYProgress, [0, 0.6], [1.15, 1]);
  const mainOpacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);

  const secOpacity = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);
  const secY = useTransform(scrollYProgress, [0.15, 0.6], [60, 0]);
  const secBlur = useTransform(scrollYProgress, [0.15, 0.6], [16, 0]);
  const secFilter = useMotionTemplate`blur(${secBlur}px)`;

  return (
    <section className="section hero-section" ref={sectionRef}>
      <div className="hero-sticky">
        <div className="hero-grid">
          <div className="hero-content animate-fade-in">
            <div className="hero-headline">
              <p className="hero-line-1 font-inter">Te ayudo a</p>
              <div className="hero-line-2-wrap">
                <span className="hero-line-2 font-fraunces">mejorar los</span>
                <svg className="hero-underline-svg" viewBox="0 0 320 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M4 10 C60 4, 160 14, 316 6" stroke="var(--color-turquoise)" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="hero-line-3 font-forum">hábitos de tu <em>bebé</em></p>
            </div>
            <p className="hero-tagline font-inter">
              Con mis cursos y asesorías te enseñaré cómo superar todo tipo de problemas relacionados con el sueño de tu bebé de forma gentil y sin métodos que impliquen dejarlo llorar. Juntos lograremos enseñarle a tu bebé a dormir la noche de corrido, enseñarle a dormir en su cuna o enseñarle a tu toddler a quedarse toda la noche en su habitación.
            </p>
            <div className="hero-buttons">
              <Button variant="primary" size="lg">Conoce mis programas</Button>
              <Button variant="secondary" size="lg">Sobre mí</Button>
            </div>
          </div>

          <div className="hero-images">
            {/* Main image: blurred + scaled down, sharpens and settles as you scroll */}
            <motion.div
              className="hero-img-main"
              style={{ background: 'var(--color-turquoise)', filter: mainFilter, scale: mainScale, opacity: mainOpacity }}
            >
              <img src="https://www.themomcoaching.com/wp-content/uploads/2024/01/ima01.jpg" alt="Madre e hijo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            {/* Secondary image: fades and rises in once the main image has mostly resolved */}
            <motion.div
              className="hero-img-secondary"
              style={{ background: 'var(--color-peach)', opacity: secOpacity, y: secY, filter: secFilter }}
            >
              <img src="/placeholder-hero-sec.jpg" alt="Tomados de la mano" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
