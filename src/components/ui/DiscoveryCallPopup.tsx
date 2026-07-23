'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './discovery-call-popup.css';

const SHOW_DELAY_MS = 2500;

export default function DiscoveryCallPopup() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isBookingPage = pathname === '/llamada-descubrimiento';

  useEffect(() => {
    if (isBookingPage) return;
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isBookingPage]);

  if (!open || isBookingPage) return null;

  return (
    <div className="discovery-popup-backdrop" onClick={() => setOpen(false)}>
      <div className="discovery-popup-panel" onClick={(e) => e.stopPropagation()}>
        <Link
          href="/llamada-descubrimiento"
          aria-label="Agenda tu llamada de descubrimiento sin costo"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.themomcoaching.com/wp-content/uploads/2024/02/popup-the-mom-coaching.jpg"
            alt="Agenda tu llamada de descubrimiento ¡sin costo!"
            className="discovery-popup-image"
          />
        </Link>
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
