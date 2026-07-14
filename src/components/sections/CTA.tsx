import React from 'react';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-[var(--color-blue-grey)] text-white text-center">
      {/* Decorative background shapes based on brand book */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-float" style={{ animationDuration: '15s' }}>
          <circle cx="20" cy="20" r="15" fill="var(--color-turquoise)" />
          <rect x="70" y="30" width="20" height="20" fill="var(--color-coral)" transform="rotate(45 80 40)" />
          <path d="M50,80 L70,100 L30,100 Z" fill="var(--color-olive-light)" />
        </svg>
      </div>

      <div className="container relative z-10 max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-medium font-serif leading-tight">
          ¿Lista para transformar el sueño de tu familia?
        </h2>
        <p className="text-xl font-light text-gray-300">
          Agenda una llamada de descubrimiento gratuita de 15 minutos para conocernos y descubrir cómo puedo ayudarte.
        </p>
        <div className="pt-8">
          <Button href="/llamada-descubrimiento" size="lg" className="bg-[var(--color-cream)] text-[var(--color-blue-grey)] hover:bg-white hover:text-[var(--color-coral)] border-none">
            Agendar Llamada Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}
