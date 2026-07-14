import React from 'react';
import Card from '../ui/Card';

export default function Services() {
  const services = [
    {
      title: "Sueño Pediátrico",
      description: "Estrategias amorosas y basadas en evidencia para enseñar a tu bebé a dormir de forma independiente.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      ),
      color: "var(--color-turquoise)"
    },
    {
      title: "Alimentación Infantil",
      description: "Guía paso a paso para la introducción de sólidos, manejo de picky eaters y nutrición saludable.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      ),
      color: "var(--color-olive-light)"
    },
    {
      title: "Coaching 1:1",
      description: "Acompañamiento personalizado diseñado específicamente para las necesidades únicas de tu familia.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      color: "var(--color-coral)"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">¿Cómo podemos ayudarte?</h2>
          <p className="text-[var(--color-blue-grey)] font-light text-lg">
            Ofrecemos diferentes servicios diseñados para adaptarse a la etapa y necesidades actuales de tu familia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} variant="service" hoverEffect={true} className="group cursor-pointer">
              <div 
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${service.color}20`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-4 group-hover:text-[var(--color-coral)] transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--color-grey-800)] font-light">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
