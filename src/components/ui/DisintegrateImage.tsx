'use client';

import React, { useEffect, useRef } from 'react';

interface DisintegrateImageProps {
  src: string;
  alt: string;
  cols?: number;
  rows?: number;
  radius?: number;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function DisintegrateImage({
  src,
  alt,
  cols = 8,
  rows = 8,
  radius = 20,
}: DisintegrateImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let scheduled = false;

    const update = () => {
      scheduled = false;
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      // 0 while the hero is fully visible, growing toward 1 as it scrolls
      // past the top of the viewport.
      const progress = Math.min(1, Math.max(0, -rect.top / (rect.height || 1)));

      tileRefs.current.forEach((tile, i) => {
        if (!tile) return;
        const col = i % cols;
        const nx = cols > 1 ? col / (cols - 1) : 0;
        // Tiles on the left start dissolving first, sweeping the effect
        // rightward like sand blowing away.
        const start = nx * 0.35;
        const span = 1 - start || 1;
        const local = Math.min(1, Math.max(0, (progress - start) / span));

        if (local <= 0) {
          // Slight overlap hides sub-pixel seams between tiles at rest.
          tile.style.transform = 'scale(1.015)';
          tile.style.opacity = '1';
          tile.style.filter = 'none';
          return;
        }

        const seedBase = i * 17.13;
        const dx = 80 + seededRandom(seedBase) * 280;
        const dy = (seededRandom(seedBase + 1) - 0.5) * 180;
        const rot = (seededRandom(seedBase + 2) - 0.5) * 60;
        const scale = 1 - local * 0.45;

        tile.style.transform = `translate3d(${local * dx}px, ${local * dy}px, 0) rotate(${local * rot}deg) scale(${scale})`;
        tile.style.opacity = String(1 - local);
        tile.style.filter = `blur(${local * 3}px)`;
      });
    };

    const onScroll = () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [cols, rows]);

  const tiles = Array.from({ length: cols * rows });

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'visible' }}>
      {tiles.map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const isTopLeft = col === 0 && row === 0;
        const isTopRight = col === cols - 1 && row === 0;
        const isBottomLeft = col === 0 && row === rows - 1;
        const isBottomRight = col === cols - 1 && row === rows - 1;

        return (
          <div
            key={i}
            ref={(el) => { tileRefs.current[i] = el; }}
            style={{
              position: 'absolute',
              left: `${(col / cols) * 100}%`,
              top: `${(row / rows) * 100}%`,
              width: `${100 / cols}%`,
              height: `${100 / rows}%`,
              overflow: 'hidden',
              borderTopLeftRadius: isTopLeft ? radius : 0,
              borderTopRightRadius: isTopRight ? radius : 0,
              borderBottomLeftRadius: isBottomLeft ? radius : 0,
              borderBottomRightRadius: isBottomRight ? radius : 0,
              willChange: 'transform, opacity',
            }}
          >
            {/* Full-size cover-fitted image, shifted so only this tile's slice shows */}
            <img
              src={src}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: `${cols * 100}%`,
                height: `${rows * 100}%`,
                objectFit: 'cover',
                transform: `translate(-${col * (100 / cols)}%, -${row * (100 / rows)}%)`,
              }}
            />
          </div>
        );
      })}
      <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>{alt}</span>
    </div>
  );
}
