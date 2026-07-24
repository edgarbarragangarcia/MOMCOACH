'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PopupButton } from 'react-calendly';
import './discovery-call-popup.css';

const SHOW_DELAY_MS = 2500;
const CALENDLY_URL = 'https://calendly.com/edgarbarragangarcia/mom-coaching';

export default function DiscoveryCallPopup() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pathname = usePathname();
  const isBookingPage = pathname === '/llamada-descubrimiento';

  useEffect(() => {
    if (isBookingPage) return;
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isBookingPage]);

  useEffect(() => {
    if (!open) return;
    videoRef.current?.play().catch(() => {});
  }, [open]);

  if (!open || isBookingPage) return null;

  return (
    <div className="discovery-popup-backdrop" onClick={() => setOpen(false)}>
      <div className="discovery-popup-panel" onClick={(e) => e.stopPropagation()}>
        <Link
          href="/llamada-descubrimiento"
          aria-label="Agenda tu llamada de descubrimiento sin costo"
          onClick={() => setOpen(false)}
        >
          <video
            ref={videoRef}
            src="/discovery-call-popup.mp4"
            className="discovery-popup-image"
            autoPlay
            playsInline
            aria-label="Agenda tu llamada de descubrimiento ¡sin costo!"
          />
        </Link>

        {typeof document !== 'undefined' && (
          <PopupButton
            url={CALENDLY_URL}
            rootElement={document.body}
            text="Agenda Ya"
            className="discovery-popup-agenda-btn"
          />
        )}

        <button
          type="button"
          className="discovery-popup-close"
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>
    </div>
  );
}
