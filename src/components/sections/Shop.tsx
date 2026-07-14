import React from 'react';
import Card from '../ui/Card';
import './sections.css';

export default function Shop() {
  const resources = [
    { title: "Guía: Cómo Solucionar las Siestas Cortas" },
    { title: "Guía: Todo lo que debes saber sobre los Picky Eaters" },
    { title: "Recetario - The Mom Coach" },
    { title: "Guía: Todo sobre el chupo" },
    { title: "Recetario Booster Calórico" },
    { title: "Guía: Cómo manejar las Regresiones de Sueño" },
    { title: "Ebook: Newborn Sleep Shaping Guide" },
    { title: "Recetario: Postres Saludables" }
  ];

  return (
    <section id="shop" className="section shop-section" style={{ backgroundColor: 'white' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 className="section-title font-forum">Recursos y Guías</h2>
        <p className="font-inter" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', color: 'var(--color-blue-gray)' }}>
          Quiero compartir mis consejos contigo. La maternidad puede ser maravillosa si entre mamás nos damos una mano.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        {resources.map((res, idx) => (
          <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s`, padding: '24px', textAlign: 'center', borderTop: '4px solid var(--color-coral)', backgroundColor: 'var(--color-cream)', borderRadius: '16px' }}>
            <Card title={res.title} description="" className="h-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
