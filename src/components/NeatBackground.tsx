'use client';

import React, { useEffect, useRef } from 'react';
import { NeatGradient } from '@firecms/neat';

export const NeatBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Let browser layout complete before initializing WebGL
    const frameId = requestAnimationFrame(() => {
      if (!canvasRef.current) return;
      gradientRef.current = new NeatGradient({
        ref: canvasRef.current,
        colors: [
          { color: "#052e16", enabled: true },
          { color: "#10b981", enabled: true },
          { color: "#064e3b", enabled: true },
          { color: "#022c22", enabled: true },
          { color: "#090a0f", enabled: true },
        ],
        speed: 3,
        waveAmplitude: 3,
        backgroundColor: "#090a0f",
        backgroundAlpha: 1,
        colorBlending: 6,
      });
    });

    return () => {
      cancelAnimationFrame(frameId);
      gradientRef.current?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};
