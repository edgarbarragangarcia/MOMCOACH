'use client';

import React from 'react';
import { InlineWidget } from 'react-calendly';

export default function CalendlyEmbed({ url, className }: { url: string; className?: string }) {
  return (
    <div className={className}>
      <InlineWidget
        url={url}
        className="calendly-embed-frame"
        styles={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
