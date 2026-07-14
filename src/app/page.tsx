import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import Products from '../components/sections/Products';
import About from '../components/sections/About';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Stats />
        <About />
        <Testimonials />
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
