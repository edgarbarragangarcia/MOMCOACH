import React from 'react';
import './sections.css';

export default function About() {
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

          <div className="about-badges">
            <div className="about-badge-frame">
              <img src="/badge-acs.png" alt="Consultora de Sueño Infantil Certificada — Academia Consultoría de Sueño" className="about-badge" />
            </div>
            <div className="about-badge-frame">
              <img src="/badge-iin.png" alt="Graduada certificada por el Institute for Integrative Nutrition" className="about-badge" />
            </div>
          </div>
        </div>
        <div className="about-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s', background: 'var(--color-cream)' }}>
           <img src="https://www.themomcoaching.com/wp-content/uploads/2023/12/historia_JPEG.webp" alt="Silueta de madre e hijo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
