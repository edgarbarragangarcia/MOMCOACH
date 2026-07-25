'use client';

import React, { useState } from 'react';
import './sections.css';

export default function About() {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleBadgeClick = (badgeId: string) => {
    if (isMobile) {
      setHoveredBadge(hoveredBadge === badgeId ? null : badgeId);
    }
  };

  const handleMouseEnter = (badgeId: string) => {
    if (!isMobile) {
      setHoveredBadge(badgeId);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredBadge(null);
    }
  };

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="about-grid">
        <div className="about-content animate-fade-in">
          <h2 className="about-title font-forum">¡Tu coach de sueño elegida!</h2>
          <p className="about-text font-inter">
            Soy mamá, consultora en sueño pediátrico certificada y coach en hábitos de alimentación certificada por el Institute for Integrative Nutrition. Tras el nacimiento de mi primera hija, nació también mi pasión por el complejo, pero maravilloso mundo de la crianza. Este mundo está lleno de interrogantes y decisiones importantes.
          </p>
          <p className="about-text font-inter">
            La crianza nos presenta un sinfín de preguntas: ¿Cuál será mi estilo de crianza? ¿Leche materna o leche de fórmula? ¿Cuándo pasaré a mi bebé a la cuna? ¿Cómo y cuándo enseñarle los mejores hábitos para su salud? Estas cuestiones y muchas más inundaron mi experiencia, llevándome a explorar nuevas técnicas para enseñar con amor.
          </p>
          <p className="about-text font-inter">
            Fundé The Mom Coach para compartir las mejores prácticas para enseñar a dormir a los bebés, impulsar a los padres a encontrar la armonía y ayudar a todas las familias a volver a dormir. Estoy aquí para darles una mano a todas esas mamás y papás que buscan dar la mejor versión de ellos mismos. Un buen descanso conlleva a una crianza feliz y saludable.
          </p>
        </div>
        <div className="about-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s', background: 'var(--color-cream)' }}>
           <img src="https://www.themomcoaching.com/wp-content/uploads/2023/12/historia_JPEG.webp" alt="Silueta de madre e hijo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

           <div className="about-badges">
             <div className="about-badges-stack">
               <div
                 className="about-badge-card about-badge-card--acs"
                 onClick={() => handleBadgeClick('acs')}
                 onMouseEnter={() => handleMouseEnter('acs')}
                 onMouseLeave={handleMouseLeave}
                 style={{
                   cursor: 'pointer',
                   transform: hoveredBadge === 'acs' ? 'scale(1.8)' : (isMobile ? 'rotate(6deg) translate(0px, -8px)' : 'rotate(6deg) translate(10px, -8px)'),
                   zIndex: hoveredBadge === 'acs' ? 10 : 1,
                   transition: 'transform 0.3s ease, z-index 0.3s ease'
                 }}
               >
                 <img src="/badge-acs.png" alt="Consultora de Sueño Infantil Certificada — Academia Consultoría de Sueño" className="about-badge" />
               </div>
               <div
                 className="about-badge-card about-badge-card--iin"
                 onClick={() => handleBadgeClick('iin')}
                 onMouseEnter={() => handleMouseEnter('iin')}
                 onMouseLeave={handleMouseLeave}
                 style={{
                   cursor: 'pointer',
                   transform: hoveredBadge === 'iin' ? 'scale(1.8)' : 'rotate(-6deg) translate(-10px, 8px)',
                   zIndex: hoveredBadge === 'iin' ? 10 : 2,
                   transition: 'transform 0.3s ease, z-index 0.3s ease'
                 }}
               >
                 <img src="/badge-iin.png" alt="Graduada certificada por el Institute for Integrative Nutrition" className="about-badge" />
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
