import React from 'react';
import Button from '../ui/Button';

export default function About() {
  return (
    <section className="py-24 overflow-hidden relative" style={{ backgroundColor: 'var(--color-peach)', opacity: 0.95 }}>
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-xl z-10 border-8 border-white">
              {/* Replace with actual coach image later */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Coach" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorators */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-4 border-[var(--color-coral)] z-0 hidden md:block"></div>
            <div className="absolute top-10 -right-5 w-20 h-20 bg-[var(--color-olive-light)] rounded-full z-20 mix-blend-multiply opacity-70 hidden md:block"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6 bg-white p-8 md:p-12 rounded-3xl shadow-lg relative z-20">
            <span className="text-accent text-xl">
              ¡Hola, soy tu coach!
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-blue-grey)]">
              Apasionada por el sueño y bienestar infantil
            </h2>
            <div className="space-y-4 text-[var(--color-grey-800)] font-light leading-relaxed">
              <p>
                Soy mamá, consultora en sueño pediátrico certificada y coach en hábitos de alimentación certificada por el Institute for Integrative Nutrition.
              </p>
              <p>
                Tras el nacimiento de mi primera hija, nació también mi pasión por el complejo, pero maravilloso mundo de la crianza. Este mundo está lleno de interrogantes y decisiones importantes.
              </p>
              <p>
                Estoy aquí para darles una mano a todas esas mamás y papás que buscan dar la mejor versión de ellos mismos. Un buen descanso conlleva a una crianza feliz y saludable.
              </p>
            </div>
            <div className="pt-4">
              <Button href="/sobre-mi" variant="primary">
                Conoce Mi Historia Completa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
