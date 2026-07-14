import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Products() {
  const products = [
    {
      title: "Guía: Cómo Solucionar las Siestas Cortas",
      price: "$16",
      image: "https://www.themomcoaching.com/wp-content/uploads/2021/03/siestascortas.webp",
      link: "/producto/guia-como-solucionar-las-siestas-cortas"
    },
    {
      title: "Todo lo que debes saber sobre los Picky Eaters",
      price: "$32",
      image: "https://www.themomcoaching.com/wp-content/uploads/2024/10/Captura-de-pantalla-2024-10-08-a-las-11.25.56%E2%80%AFa.-m.png",
      link: "/producto/guia-todo-lo-que-debes-saber-sobre-los-picky-eaters"
    },
    {
      title: "Recetario - The Mom Coach",
      price: "$18",
      image: "https://www.themomcoaching.com/wp-content/uploads/2024/01/Imagen-principal-recetario--600x600.jpg",
      link: "/producto/recetario-the-mom-coach"
    },
    {
      title: "Guía: Todo sobre el chupo",
      price: "$12",
      image: "https://www.themomcoaching.com/wp-content/uploads/2024/02/Captura-de-Pantalla-2024-02-14-a-las-4.03.27-p.-m-600x600.png",
      link: "/producto/guia-todo-sobre-el-chupo"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Nuestras Guías y Recursos</h2>
            <p className="text-[var(--color-blue-grey)] font-light text-lg">
              Herramientas prácticas y accesibles para apoyarte en la crianza, el sueño y la alimentación de tu bebé.
            </p>
          </div>
          <Button href="/tienda" variant="secondary">
            Ver Todo
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} variant="product" className="group hover:-translate-y-2 transition-transform duration-300 border border-[var(--color-grey-100)]">
              <div className="aspect-square overflow-hidden mb-4 rounded-t-xl bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-medium mb-2 leading-tight flex-grow">{product.title}</h3>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-[var(--color-grey-100)]">
                  <span className="font-medium text-[var(--color-blue-grey)]">{product.price} USD</span>
                  <a href={product.link} className="text-[var(--color-coral)] font-medium hover:underline text-sm">
                    Añadir
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
