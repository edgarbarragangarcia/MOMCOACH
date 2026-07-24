'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PopupModal } from 'react-calendly';
import './discovery-call-popup.css';

const SHOW_DELAY_MS = 2500;
const CALENDLY_URL = 'https://calendly.com/edgarbarragangarcia/mom-coaching';

export default function DiscoveryCallPopup() {
  const [open, setOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!open || !video) return;

    // Browsers only allow autoplay when the video starts muted — trying
    // to unmute it right after (with no user interaction yet) makes
    // Chrome pause it outright instead of just declining the unmute. So
    // start muted to guarantee playback, then unmute on the visitor's
    // first interaction anywhere on the page, which is a real gesture
    // browsers accept.
    video.muted = true;
    video.play().catch(() => {});

    const unmuteOnInteraction = () => {
      video.muted = false;
      if (video.paused) video.play().catch(() => {});
    };
    document.addEventListener('pointerdown', unmuteOnInteraction, { once: true });
    document.addEventListener('keydown', unmuteOnInteraction, { once: true });
    return () => {
      document.removeEventListener('pointerdown', unmuteOnInteraction);
      document.removeEventListener('keydown', unmuteOnInteraction);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="discovery-popup-backdrop" onClick={() => setOpen(false)}>
      <div className="discovery-popup-panel" onClick={(e) => e.stopPropagation()}>
        <video
          ref={videoRef}
          src="/discovery-call-popup.mp4"
          className="discovery-popup-image"
          playsInline
          onClick={() => setCalendlyOpen(true)}
          aria-label="Agenda tu llamada de descubrimiento ¡sin costo!"
        />

        <button
          type="button"
          className="discovery-popup-agenda-btn"
          onClick={() => setCalendlyOpen(true)}
        >
          Agenda Ya
        </button>

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
          ×
        </button>
      </div>
    </div>
  );
}
