'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins safely on client-side
if (typeof window !== 'undefined') {
  try {
    gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, TextPlugin);
  } catch (e) {
    console.warn('GSAP plugin registration notice:', e);
  }
}

/**
 * Robust smooth scrolling with GSAP ScrollToPlugin + rock-solid native fallback
 */
export const smoothScrollTo = (
  target: string | number | Element,
  offsetY = 80,
  duration = 1.0
) => {
  if (typeof window === 'undefined') return;

  let targetY = 0;

  try {
    if (typeof target === 'number') {
      targetY = target;
    } else if (typeof target === 'string') {
      if (target === '#' || target === '#hero' || target === '') {
        targetY = 0;
      } else {
        const el = document.querySelector(target);
        if (el) {
          const rect = el.getBoundingClientRect();
          targetY = Math.max(0, rect.top + window.scrollY - offsetY);
        } else {
          return;
        }
      }
    } else if (target instanceof Element) {
      const rect = target.getBoundingClientRect();
      targetY = Math.max(0, rect.top + window.scrollY - offsetY);
    }

    // Try GSAP ScrollToPlugin first for buttery smooth animation
    if (gsap && gsap.to && typeof ScrollToPlugin !== 'undefined') {
      gsap.to(window, {
        duration,
        scrollTo: { y: targetY, autoKill: true },
        ease: 'power3.inOut',
        overwrite: 'auto',
      });
      return;
    }

    // Direct smooth scroll fallback
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  } catch (err) {
    // Ultimate fail-safe fallback
    try {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else if (typeof target === 'string' && target !== '#' && target !== '#hero') {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      // no-op
    }
  }
};

export { gsap, useGSAP, ScrollTrigger, ScrollToPlugin, TextPlugin };
