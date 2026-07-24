import type { Metadata } from "next";
import CalendlyEmbed from "@/components/ui/CalendlyEmbed";
import "./llamada-descubrimiento.css";

export const metadata: Metadata = {
  title: "Agenda tu Llamada de Descubrimiento | The Mom Coach",
  description:
    "Agenda tu llamada de descubrimiento sin costo con The Mom Coach y da el primer paso para mejorar los hábitos de sueño de tu bebé.",
};

export default function LlamadaDescubrimiento() {
  return (
    <div className="discovery-page">
      <div className="discovery-page-header">
        <p className="discovery-page-eyebrow font-inter">Agenda aquí tu</p>
        <h1 className="discovery-page-title font-fraunces">Llamada de descubrimiento</h1>
      </div>

      <div className="discovery-page-body">
        <div className="discovery-page-photo-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.themomcoaching.com/wp-content/uploads/2024/01/ima01.jpg"
            alt="Madre e hijo"
            className="discovery-page-photo"
          />
        </div>

        <CalendlyEmbed
          url="https://calendly.com/edgarbarragangarcia/mom-coaching"
          className="calendly-inline-widget"
        />
      </div>
    </div>
  );
}
