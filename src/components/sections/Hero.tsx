import React from 'react';
import Button from '../ui/Button';
import './sections.css';

export default function Hero() {
  return (
    <section className="section hero-section">
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
        
        <div className="hero-images animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Main image placeholder: collage of hands / mother and child */}
          <div className="hero-img-main" style={{ background: 'var(--color-turquoise)' }}>
             <img src="/placeholder-hero-main.jpg" alt="Madre e hijo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Secondary image placeholder: warm tones silhouette */}
          <div className="hero-img-secondary" style={{ background: 'var(--color-peach)' }}>
             <img src="/placeholder-hero-sec.jpg" alt="Tomados de la mano" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
