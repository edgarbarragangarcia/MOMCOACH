import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import './sections.css';

export default function Services() {
  const packages = [
    {
      title: "Asesorías de Sueño",
      description: "Programas de sueño infantil que benefician a toda la familia, logrando descanso de calidad para los bebés, niños y padres. Transiciones suaves y amorosas.",
      buttonText: "Saber más",
      buttonHref: "#sleep",
    },
    {
      title: "Asesorías de Alimentación",
      description: "Aprende todo lo que debes saber sobre Picky Eaters y cómo establecer hábitos de alimentación saludables guiados por una coach certificada.",
      buttonText: "Saber más",
      buttonHref: "#food",
    },
    {
      title: "Guías y Recetarios",
      description: "Recetario Booster Calórico, Postres Saludables, Solucionar Siestas Cortas, Regresiones de Sueño y mucho más para apoyar tu crianza.",
      buttonText: "Ver Tienda",
      buttonHref: "#shop",
    }
  ];

  return (
    <section id="coaching" className="section services-section">
      <h2 className="section-title font-forum">Mis Programas</h2>
      <p className="section-subtitle font-inter">Juntos lograremos enseñarle a tu bebé a dormir y comer mejor, para que disfrutes al máximo de la maternidad.</p>
      
      <div className="services-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <Card 
              title={pkg.title} 
              description={pkg.description} 
              buttonText={pkg.buttonText}
              buttonHref={pkg.buttonHref}
              className="h-full flex flex-col justify-between" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
