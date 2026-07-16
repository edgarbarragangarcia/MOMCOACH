import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Shop from "@/components/sections/Shop";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Shop />
    </>
  );
}
