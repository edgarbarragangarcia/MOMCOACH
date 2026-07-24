'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const CALENDLY_IFRAME_SRC =
  'https://calendly.com/edgarbarragangarcia/mom-coaching?embed_type=Inline&embed_domain=1';
const PRELOAD_DELAY_MS = 1500;

/**
 * Warms the browser cache for the Calendly iframe (JS/CSS/fonts it pulls in)
 * before the visitor ever reaches /llamada-descubrimiento, so the real
 * embed there loads near-instantly instead of starting cold.
 */
export default function CalendlyPreloader() {
  const pathname = usePathname();
  const [shouldPreload, setShouldPreload] = useState(false);
  const isBookingPage = pathname === '/llamada-descubrimiento';

  useEffect(() => {
    if (isBookingPage) return;
    const timer = setTimeout(() => setShouldPreload(true), PRELOAD_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isBookingPage]);

  if (isBookingPage || !shouldPreload) return null;

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
