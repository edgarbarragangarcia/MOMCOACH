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

    // Autoplay with sound is blocked by most browsers unless the video
    // starts muted. Start muted so playback is guaranteed, then try to
    // unmute right away — browsers that allow it will play with sound,
    // the rest will just stay silent instead of not playing at all.
    video.muted = true;
    video.play()
      .then(() => {
        video.muted = false;
      })
      .catch(() => {});
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
