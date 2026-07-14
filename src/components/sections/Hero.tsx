import React from 'react';
import Button from '../ui/Button';
import './sections.css';

export default function Hero() {
  return (
    <section className="section hero-section">
      <div className="hero-grid">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title font-forum text-gradient-animate">
            Te ayudo a<br />
            <span className="font-fraunces">mejorar los</span><br />
            hábitos de tu bebé
          </h1>
          <p className="hero-tagline font-inter">
            Con mis cursos y asesorías te enseñaré cómo superar todo tipo de problemas relacionados con el sueño de tu bebé de forma gentil y sin métodos que impliquen dejarlo llorar. Juntos lograremos enseñarle a tu bebé a dormir la noche de corrido, enseñarle a dormir en su cuna o enseñarle a tu toddler a quedarse toda la noche en su habitación.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
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
