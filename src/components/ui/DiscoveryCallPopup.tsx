'use client';

import React, { useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly';
import './discovery-call-popup.css';

const CALENDLY_URL = 'https://calendly.com/edgarbarragangarcia/mom-coaching';

export default function DiscoveryCallPopup() {
  const [open, setOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  // Open the popup on the visitor's first scroll instead of a fixed delay.
  useEffect(() => {
    const showOnScroll = () => setOpen(true);
    window.addEventListener('scroll', showOnScroll, { once: true, passive: true });
    return () => window.removeEventListener('scroll', showOnScroll);
  }, []);

  if (!open) return null;

  return (
    <div className="discovery-popup-backdrop" onClick={() => setOpen(false)}>
      <div className="discovery-popup-panel" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.themomcoaching.com/wp-content/uploads/2024/02/popup-the-mom-coaching.jpg"
          alt="Agenda tu llamada de descubrimiento ¡sin costo!"
          className="discovery-popup-image"
          onClick={() => setCalendlyOpen(true)}
        />

        {typeof document !== 'undefined' && (
          <PopupModal
            url={CALENDLY_URL}
            rootElement={document.body}
            open={calendlyOpen}
            onModalClose={() => setCalendlyOpen(false)}
          />
        )}

        <button
          type="button"
          className="discovery-popup-close"
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
