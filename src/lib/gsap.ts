'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * Bulletproof smooth scroll helper with native GPU acceleration
 * Calculates exact element offset so sticky navbar never obscures section headings
 */
export const smoothScrollTo = (
  target: string | number | Element,
  offsetY = 85,
  duration = 1.0
) => {
  if (typeof window === 'undefined') return;

  try {
    let targetY = 0;

    if (typeof target === 'number') {
      targetY = target;
    } else if (typeof target === 'string') {
      if (target === '#' || target === '#hero' || target === '') {
        targetY = 0;
      } else {
        const id = target.startsWith('#') ? target.slice(1) : target;
        const el = document.getElementById(id) || document.querySelector(target);
        if (el) {
          const rect = el.getBoundingClientRect();
          targetY = Math.max(0, rect.top + window.pageYOffset - offsetY);
        } else {
          return;
        }
      }
    } else if (target instanceof Element) {
      const rect = target.getBoundingClientRect();
      targetY = Math.max(0, rect.top + window.pageYOffset - offsetY);
    }

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  } catch (err) {
    try {
      if (typeof target === 'string') {
        const id = target.startsWith('#') ? target.slice(1) : target;
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } catch {
      // no-op
    }
  }
};

export { gsap, useGSAP };
