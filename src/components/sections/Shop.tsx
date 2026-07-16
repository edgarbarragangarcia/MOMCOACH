'use client';

import React, { useRef } from 'react';
import Button from '../ui/Button';
import './sections.css';

const products = [
  {
    title: 'Guía: Cómo Solucionar las Siestas Cortas',
    price: 'USD $16',
    img: 'https://www.themomcoaching.com/wp-content/uploads/2021/03/siestascortas.webp',
  },
  {
    title: 'Gift Card',
    price: 'USD $25–USD $200',
    img: 'https://www.themomcoaching.com/wp-content/uploads/2024/01/Tarjeta-de-regalo-TMC-PRODUCT-600x600.jpg',
  },
  {
    title: 'Guía: Todo lo que debes saber sobre los Picky Eaters',
    price: 'USD $32',
    img: 'https://www.themomcoaching.com/wp-content/uploads/2024/10/Captura-de-pantalla-2024-10-08-a-las-11.25.56 a.-m-600x600.png',
  },
  {
    title: 'Recetario Booster Calórico',
    price: 'USD $16',
    img: 'https://www.themomcoaching.com/wp-content/uploads/2024/03/Portada-recetario-Booster-600x600.png',
  },
  {
    title: 'Guía: Cómo manejar las Regresiones de Sueño',
    price: 'USD $16',
    img: 'https://www.themomcoaching.com/wp-content/uploads/2024/01/regresionessueno.webp',
  },
  {
    title: 'Recetario - The Mom Coach',
    price: 'USD $18',
    img: 'https://www.themomcoaching.com/wp-content/uploads/2024/01/Imagen-principal-recetario--600x600.jpg',
  },
  {
    title: 'Guía: Transición de Siestas',
    price: 'USD $16',
    img: 'https://www.themomcoaching.com/wp-content/uploads/2024/01/transicionsiestas.webp',
  },
  {
    title: 'Recetario: Postres Saludables',
    price: 'USD $10',
    img: 'https://www.themomcoaching.com/wp-content/uploads/2024/01/Captura-de-Pantalla-2024-01-25-a-las-8.39.56-p.-m-600x600.png',
  },
];

export default function Shop() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="shop" className="section shop-section">
      <div className="shop-layout">
        <div className="shop-intro">
          <p className="shop-eyebrow font-inter">Los más vendidos</p>
          <h2 className="shop-heading font-forum">Productos Premium</h2>
          <p className="shop-description font-inter">
            Quiero compartir mis consejos contigo. La maternidad puede ser maravillosa si entre mamás nos damos una mano.
          </p>
          <Button variant="primary" href="/tienda">Ver Todos</Button>
        </div>

        <div className="shop-carousel">
          <div className="shop-track" ref={trackRef}>
            {products.map((product, idx) => (
              <a href="/tienda" className="shop-card" key={idx}>
                <div className="shop-card-image">
                  <img src={product.img} alt={product.title} loading="lazy" />
                </div>
                <h3 className="shop-card-title font-inter">{product.title}</h3>
                <p className="shop-card-price font-inter">{product.price}</p>
              </a>
            ))}
          </div>

          <div className="shop-carousel-controls">
            <button onClick={() => scroll('left')} className="shop-arrow" aria-label="Anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button onClick={() => scroll('right')} className="shop-arrow" aria-label="Siguiente">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
