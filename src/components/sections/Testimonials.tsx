import React from 'react';
import Card from '../ui/Card';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Laura Gómez",
      role: "Mamá de Martín (8 meses)",
      content: "Nunca creí que mi bebé dormiría toda la noche. Estábamos agotados y desesperados, pero con el plan de The Mom Coach, en solo una semana, Martín empezó a dormir 11 horas seguidas. ¡Nos devolvió la vida!",
      rating: 5
    },
    {
      name: "Carolina Silva",
      role: "Mamá de Lucía (2 años)",
      content: "Las comidas eran una batalla campal. Lucía no quería probar nada nuevo. La guía de picky eaters y el acompañamiento personalizado hicieron que la hora de comer volviera a ser un momento feliz en familia.",
      rating: 5
    },
    {
      name: "Andrea Vargas",
      role: "Mamá de Tomás (4 meses)",
      content: "Tomar la asesoría preventiva fue la mejor decisión. Aprendimos a crear bases sólidas de sueño desde temprano y evitamos la regresión de los 4 meses. Su enfoque es empático, realista y lleno de amor.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Lo que dicen nuestras familias</h2>
          <p className="text-accent text-xl">
            "Un buen descanso conlleva a una crianza feliz."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="testimonial" className="hover:shadow-lg transition-shadow">
              <span className="quote-icon">"</span>
              
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--color-mustard)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-[var(--color-grey-800)] italic mb-8 relative z-10 leading-relaxed">
                {testimonial.content}
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--color-turquoise)] rounded-full flex items-center justify-center text-white font-serif font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-blue-grey)]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
