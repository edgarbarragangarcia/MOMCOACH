import React from 'react';
import './sections.css';

export default function Testimonials() {
  return (
    <section className="section testimonials-section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <h2 className="section-title font-forum">Lo que dicen los padres...</h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
        <span className="font-forum" style={{ position: 'absolute', top: '10px', left: '20px', fontSize: '6rem', color: 'var(--color-peach)', opacity: 0.5, lineHeight: 1 }}>"</span>
        <p className="font-inter" style={{ fontSize: '1.2rem', lineHeight: 1.8, position: 'relative', zIndex: 1, marginBottom: '24px', color: 'var(--color-foreground)' }}>
          Denisse entendió la ansiedad que me generaba el llanto de mi hijo y diseñó un plan muy gentil que me permitió llevarlo a cabo. Fue una transición suave en la que pude enseñarle a Mateo a dejar los malos hábitos y que tomara nuevos. Me siento feliz y descansada después de 18 meses.
        </p>
        <div className="font-inter" style={{ fontWeight: 'bold', color: 'var(--color-blue-gray)' }}>
          — Carolina, mamá de Mateo de 18 meses
        </div>
      </div>
    </section>
  );
}
