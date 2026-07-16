import type { Metadata } from "next";
import TiendaClient from "./TiendaClient";

export const metadata: Metadata = {
  title: "Tienda | The Mom Coach",
  description: "Guías, recetarios, programas y asesorías de The Mom Coach para acompañarte en cada etapa de la crianza.",
};

export default function TiendaPage() {
  return <TiendaClient />;
}
