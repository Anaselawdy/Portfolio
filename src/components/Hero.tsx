'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, FileText, ArrowUpRight, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { gsap, useGSAP } from '../lib/gsap';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onOpenContact,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const portraitCardRef = useRef<HTMLDivElement>(null);
  const metric1Ref = useRef<HTMLDivElement>(null);
  const metric2Ref = useRef<HTMLDivElement>(null);
  const metric3Ref = useRef<HTMLDivElement>(null);
  const metric4Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Sequenced Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-meta-item', {
        y: 16,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-headline',
          {
            y: 26,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          '.hero-subtext',
          {
            y: 18,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.5'
        )
        .from(
          '.hero-cta-btn',
          {
            y: 16,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
          },
          '-=0.4'
        )
        .from(
          '.hero-metric-box',
          {
            y: 16,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
          },
          '-=0.3'
        )
        .from(
          '.hero-portrait-col',
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out',
          },
          '-=0.6'
        );

      // 2. Animated Metrics Number Counters
      const count1 = { val: 0 };
      gsap.to(count1, {
        val: 27,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          if (metric1Ref.current) {
            metric1Ref.current.innerText = `+${Math.floor(count1.val)}%`;
          }
        },
      });

      const count2 = { val: 0 };
      gsap.to(count2, {
        val: 90,
        duration: 2.0,
        ease: 'power2.out',
        onUpdate: () => {
          if (metric2Ref.current) {
            metric2Ref.current.innerText = `${Math.floor(count2.val)}%`;
          }
        },
      });

      const count3 = { val: 0 };
      gsap.to(count3, {
        val: 15,
        duration: 1.7,
        ease: 'power2.out',
        onUpdate: () => {
          if (metric3Ref.current) {
            metric3Ref.current.innerText = `${Math.floor(count3.val)} hrs`;
          }
        },
      });

      const count4 = { val: 0 };
      gsap.to(count4, {
        val: 4,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (metric4Ref.current) {
            metric4Ref.current.innerText = `${Math.floor(count4.val)}+ Years`;
          }
        },
      });

      // 3. Smooth 3D Interactive Mouse Parallax Tilt
      const card = portraitCardRef.current;
      if (card) {
        const xRot = gsap.quickTo(card, 'rotationY', { duration: 0.45, ease: 'power2.out' });
        const yRot = gsap.quickTo(card, 'rotationX', { duration: 0.45, ease: 'power2.out' });

        const onMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          xRot(x * 12);
          yRot(-y * 12);
        };

        const onMouseLeave = () => {
          xRot(0);
          yRot(0);
        };

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);

        return () => {
          card.removeEventListener('mousemove', onMouseMove);
          card.removeEventListener('mouseleave', onMouseLeave);
        };
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bio & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status & Scope Line */}
            <div className="hero-meta-item flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2 font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Senior Product UI/UX Designer</span>
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">Currently leading design at Qoodz</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">UAE, Saudi Arabia &amp; Global</span>
            </div>

            {/* Headline Statement (Plain, magnetic, benefit-driven) */}
            <div className="space-y-4">
              <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                I design intuitive digital products that scale revenue and eliminate user friction.
              </h1>

              <p className="hero-subtext text-base sm:text-lg text-zinc-200 font-normal leading-relaxed max-w-2xl">
                Turning complex business models into simple, habit-forming apps. Over 4 years designing high-impact platforms across the GCC, blending user psychology, fast prototyping, and clean design execution.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onExploreWork}
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 text-sm font-bold hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-zinc-950 text-sm font-bold hover:bg-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let&apos;s Talk About Your Project</span>
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-sm font-medium transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            {/* Impact Metrics Row (Scannable, non-tech ROI) */}
            <div className="pt-8 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="hero-metric-box space-y-1">
                <div ref={metric1Ref} className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-400">
                  +27%
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Menu Order Lift
                </div>
              </div>

              <div className="hero-metric-box space-y-1">
                <div ref={metric2Ref} className="text-2xl sm:text-3xl font-bold tracking-tight text-cyan-300">
                  90%
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  User Delight Score
                </div>
              </div>

              <div className="hero-metric-box space-y-1">
                <div ref={metric3Ref} className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  15 hrs
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Weekly Time Saved
                </div>
              </div>

              <div className="hero-metric-box space-y-1">
                <div ref={metric4Ref} className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                  4+ Years
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Product Design Craft
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Portrait Frame (5 cols) */}
          <div className="hero-portrait-col lg:col-span-5 flex justify-center relative py-4 [perspective:1000px]">
            <div
              ref={portraitCardRef}
              className="relative w-full max-w-sm sm:max-w-md rounded-2xl bg-zinc-900 border border-zinc-800 p-4 shadow-2xl will-change-transform [transform-style:preserve-3d]"
            >
              {/* Inner Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <Image
                  src="/anas-elawdy.png"
                  alt="Anas Elawdy: Product UI/UX Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top filter brightness-105 contrast-105"
                />

                {/* Scrim on Base of Photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Photo Base Caption */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-zinc-950/95 border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Anas Elawdy</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xs text-zinc-300">Product UI/UX Designer</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                    Available for Hire
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
