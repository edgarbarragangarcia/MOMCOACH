import React from 'react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[var(--color-cream)]">
      {/* Organic Background Shape */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] text-white opacity-40 animate-float">
          <path fill="currentColor" d="M30,70 C50,90 70,70 90,50 C110,30 90,10 70,30 C50,50 30,10 10,30 C-10,50 10,50 30,70 Z" />
        </svg>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <span className="text-accent text-xl md:text-2xl">
              Bienvenida a tu tribu,
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Tu coach de sueño y crianza favorita
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-blue-grey)] opacity-90 max-w-lg font-light">
              Transformamos las noches de tu familia para que puedan volver a descansar, disfrutar y crecer juntos con confianza.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button href="/llamada-descubrimiento" size="lg">
              Empieza Hoy
            </Button>
            <Button href="/sobre-mi" variant="secondary" size="lg">
              Conoce Más
            </Button>
          </div>
        </div>

        {/* Hero Image Collage */}
        <div className="relative h-[500px] lg:h-[600px] w-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Main Image */}
          <div className="absolute top-10 right-0 w-4/5 h-4/5 rounded-t-[150px] rounded-bl-[150px] overflow-hidden border-8 border-white shadow-lg z-10">
            <img 
              src="https://www.themomcoaching.com/wp-content/uploads/2024/01/DSC01244-scaled-e1704915539483.jpg" 
              alt="Madre e hijo" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Secondary Image */}
          <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-[40px] overflow-hidden border-8 border-white shadow-lg z-20">
            <img 
              src="https://www.themomcoaching.com/wp-content/uploads/2021/04/IMG_4562-e1619623869974-1234x1536.jpg" 
              alt="Bebé durmiendo" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Star */}
          <div className="absolute top-0 right-[20%] text-[var(--color-coral)] z-30 animate-float" style={{ animationDelay: '1s' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
