'use client';

import React, { useEffect, useState } from 'react';
import './discovery-call-popup.css';

const CALENDLY_URL = 'https://calendly.com/edgarbarragangarcia/mom-coaching';
const SHOW_DELAY_MS = 2500;

export default function DiscoveryCallPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="discovery-popup-backdrop" onClick={() => setOpen(false)}>
      <div className="discovery-popup-panel" onClick={(e) => e.stopPropagation()}>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agenda tu llamada de descubrimiento sin costo"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.themomcoaching.com/wp-content/uploads/2024/02/popup-the-mom-coaching.jpg"
            alt="Agenda tu llamada de descubrimiento ¡sin costo!"
            className="discovery-popup-image"
          />
        </a>
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
