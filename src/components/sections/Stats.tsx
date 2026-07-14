import React from 'react';

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-turquoise) 0%, var(--color-olive-light) 100%)' }}>
      <div className="container relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-medium font-serif">100%</div>
            <p className="text-xl font-light opacity-90">Resultados Positivos</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-medium font-serif">+600</div>
            <p className="text-xl font-light opacity-90">Familias Ayudadas</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-medium font-serif">+4</div>
            <p className="text-xl font-light opacity-90">Años de Experiencia</p>
          </div>
        </div>

        {/* Decorator */}
        <div className="mt-16 text-center">
          <p className="text-lg font-light italic mb-6">Certificada por:</p>
          <div className="flex justify-center items-center space-x-8 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300">
             <span className="text-2xl font-bold tracking-widest">IIN</span>
             <span className="text-xl font-serif">Family Sleep Institute</span>
          </div>
        </div>
      </div>
    </section>
  );
}
