'use client';

import React, { useEffect, useState } from 'react';

const CALENDLY_IFRAME_SRC =
  'https://calendly.com/edgarbarragangarcia/mom-coaching?embed_type=Inline&embed_domain=1';
const PRELOAD_DELAY_MS = 1500;

/**
 * Warms the browser cache for the Calendly iframe (JS/CSS/fonts it pulls in)
 * shortly after a visitor lands on the site, so the popup calendar opens
 * near-instantly instead of starting cold.
 */
export default function CalendlyPreloader() {
  const [shouldPreload, setShouldPreload] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldPreload(true), PRELOAD_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldPreload) return null;

  return (
    <iframe
      src={CALENDLY_IFRAME_SRC}
      title="Precarga de Calendly"
      aria-hidden="true"
      tabIndex={-1}
      style={{
        position: 'fixed',
        width: 1,
        height: 1,
        opacity: 0,
        pointerEvents: 'none',
        border: 'none',
        left: -9999,
        top: -9999,
      }}
    />
  );
}
