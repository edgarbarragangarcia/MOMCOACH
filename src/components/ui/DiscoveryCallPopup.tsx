'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PopupModal } from 'react-calendly';
import './discovery-call-popup.css';

const CALENDLY_URL = 'https://calendly.com/edgarbarragangarcia/mom-coaching';

export default function DiscoveryCallPopup() {
  const [open, setOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Open the popup on the visitor's first scroll instead of a fixed delay.
  useEffect(() => {
    const showOnScroll = () => setOpen(true);
    window.addEventListener('scroll', showOnScroll, { once: true, passive: true });
    return () => window.removeEventListener('scroll', showOnScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!open || !video) return;

    // Chrome only ever allows autoplay when the video starts muted, and
    // scrolling doesn't count as a "user gesture" for unmuting (only
    // clicks/taps/keys do) — so an unmute attempt right here can still be
    // declined. If Chrome reacts by silently pausing the video instead of
    // just declining, this safely reverts to muted + resumes playback so
    // it's never left stuck paused.
    const tryUnmute = () => {
      video.muted = false;
      requestAnimationFrame(() => {
        if (video.paused) {
          video.muted = true;
          video.play().catch(() => {});
        }
      });
    };

    video.muted = true;
    video.play().catch(() => {});
    tryUnmute();

    document.addEventListener('pointerdown', tryUnmute, { once: true });
    document.addEventListener('keydown', tryUnmute, { once: true });
    return () => {
      document.removeEventListener('pointerdown', tryUnmute);
      document.removeEventListener('keydown', tryUnmute);
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
