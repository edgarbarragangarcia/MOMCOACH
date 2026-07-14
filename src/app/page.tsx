import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Shop from "@/components/sections/Shop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Testimonials />
        <Shop />
      </main>
      <footer id="contact" style={{ backgroundColor: 'var(--color-blue-gray)', color: 'white', padding: '64px 5%', textAlign: 'center' }}>
        <h2 className="font-forum" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Información de Contacto</h2>
        <p className="font-inter" style={{ fontSize: '1.125rem', marginBottom: '8px' }}>Política de privacidad</p>
        <p className="font-inter" style={{ fontSize: '1.125rem', marginBottom: '32px' }}>Términos y Condiciones</p>
        <p className="font-inter" style={{ opacity: 0.7, fontSize: '0.875rem' }}>© 2025 by The Mom Coach. Designed by THE INDIGO STUDIO BY SO.</p>
      </footer>
    </>
  );
}
