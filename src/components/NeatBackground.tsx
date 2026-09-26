'use client';

import React, { useEffect, useRef } from 'react';
import { NeatGradient } from '@firecms/neat';

export const NeatBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        { color: "#052e16", enabled: true }, // very dark emerald
        { color: "#10b981", enabled: true }, // emerald-500
        { color: "#064e3b", enabled: true }, // emerald-900
        { color: "#022c22", enabled: true }, // emerald-950
        { color: "#090a0f", enabled: true }, // background match
      ],
      speed: 3,
      waveAmplitude: 3,
      backgroundColor: "#090a0f",
      backgroundAlpha: 1,
      colorBlending: 6,
    });

    return () => {
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
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};
