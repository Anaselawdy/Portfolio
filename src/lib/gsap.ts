'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins safely on client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, TextPlugin);
}

/**
 * GSAP ScrollToPlugin helper for silky smooth, physics-based scrolling
 */
export const smoothScrollTo = (
  target: string | number | Element,
  offsetY = 80,
  duration = 1.1
) => {
  if (typeof window === 'undefined') return;

  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY,
      autoKill: true,
    },
    ease: 'power3.inOut',
  });
};

export { gsap, useGSAP, ScrollTrigger, ScrollToPlugin, TextPlugin };
