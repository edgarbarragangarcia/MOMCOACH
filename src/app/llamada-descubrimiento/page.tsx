import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Agenda tu Llamada de Descubrimiento | The Mom Coach",
  description:
    "Agenda tu llamada de descubrimiento sin costo con The Mom Coach y da el primer paso para mejorar los hábitos de sueño de tu bebé.",
};

export default function LlamadaDescubrimiento() {
  return (
    <div style={{ backgroundColor: "var(--color-cream)", minHeight: "100vh", padding: "160px 5% 100px" }}>
      <div>
        <Link
          href="/"
          className="font-inter"
          style={{ color: "var(--color-blue-gray)", fontSize: "0.95rem" }}
        >
          ← Volver al inicio
        </Link>

        <h1
          className="font-forum"
          style={{ fontSize: "2.6rem", color: "var(--color-blue-gray)", margin: "24px 0 8px" }}
        >
          Agenda tu Llamada de Descubrimiento
        </h1>
        <p className="font-inter" style={{ opacity: 0.7, marginBottom: "40px", fontSize: "1.05rem" }}>
          Sin costo — elige el horario que mejor te funcione.
        </p>

        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/edgarbarragangarcia/mom-coaching"
          style={{ minWidth: "320px", height: "700px", borderRadius: "16px", overflow: "hidden" }}
        />
      </div>
    </div>
  );
}
