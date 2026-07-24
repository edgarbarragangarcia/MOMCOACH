'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function CalendlyEmbed({ url, className }: { url: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    const init = () => {
      if (cancelled || !container) return;
      if (window.Calendly) {
        container.innerHTML = '';
        window.Calendly.initInlineWidget({ url, parentElement: container });
      } else {
        setTimeout(init, 100);
      }
    };

    init();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return <div ref={containerRef} className={className} />;
}
