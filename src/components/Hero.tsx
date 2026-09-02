'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, Layers, FileText, ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { gsap, useGSAP } from '../lib/gsap';

interface HeroProps {
  onExploreWork: () => void;
  onOpenDesignSystem: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onOpenDesignSystem,
  onOpenContact,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const portraitCardRef = useRef<HTMLDivElement>(null);
  const metric1Ref = useRef<HTMLDivElement>(null);
  const metric2Ref = useRef<HTMLDivElement>(null);
  const metric3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Entrance Sequenced Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-meta-item', {
        y: 14,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
      })
        .from(
          '.hero-headline',
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.2'
        )
        .from(
          '.hero-subtext',
          {
            y: 16,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-cta-btn',
          {
            y: 14,
            opacity: 0,
            stagger: 0.07,
            duration: 0.5,
          },
          '-=0.3'
        )
        .from(
          '.hero-metric-box',
          {
            y: 14,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
          },
          '-=0.3'
        )
        .from(
          '.hero-portrait-col',
          {
            scale: 0.96,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.6'
        );

      // 2. Animated Metrics Number Counters
      const count1 = { val: 0 };
      gsap.to(count1, {
        val: 8,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (metric1Ref.current) {
            metric1Ref.current.innerText = `${Math.floor(count1.val)}+ Years`;
          }
        },
      });

      const count2 = { val: 0 };
      gsap.to(count2, {
        val: 27,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate: () => {
          if (metric2Ref.current) {
            metric2Ref.current.innerText = `+${Math.floor(count2.val)}%`;
          }
        },
      });

      const count3 = { val: 0 };
      gsap.to(count3, {
        val: 90,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          if (metric3Ref.current) {
            metric3Ref.current.innerText = `${Math.floor(count3.val)}%`;
          }
        },
      });

      // 3. Smooth Directional 3D Mouse Parallax Tilt
      const card = portraitCardRef.current;
      if (card) {
        const xRot = gsap.quickTo(card, 'rotationY', { duration: 0.45, ease: 'power2.out' });
        const yRot = gsap.quickTo(card, 'rotationX', { duration: 0.45, ease: 'power2.out' });

        const onMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          xRot(x * 10);
          yRot(-y * 10);
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
      className="relative pt-32 pb-20 md:pt-36 md:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bio & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Identity & Scope Line */}
            <div className="hero-meta-item flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-zinc-300">
              <span className="font-semibold text-white tracking-tight">
                {PERSONAL_INFO.currentRole}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">{PERSONAL_INFO.yearsExperience} Experience</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">UAE, Saudi Arabia, Iraq &amp; Korea</span>
            </div>

            {/* Headline Statement */}
            <div className="space-y-4">
              <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                {PERSONAL_INFO.tagline}
              </h1>

              <p className="hero-subtext text-base sm:text-lg text-zinc-200 font-normal leading-relaxed max-w-2xl">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreWork}
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-white border border-zinc-700 text-sm font-medium transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <button
                onClick={onOpenDesignSystem}
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-sm font-medium transition-colors"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Design Lab</span>
              </button>

              <button
                onClick={onOpenContact}
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-zinc-300 hover:text-white text-sm font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Get in Touch →</span>
              </button>
            </div>

            {/* Impact Metrics Row */}
            <div className="pt-8 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="hero-metric-box space-y-1">
                <div ref={metric1Ref} className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {PERSONAL_INFO.yearsExperience}
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Years Design Craft
                </div>
              </div>

              <div className="hero-metric-box space-y-1">
                <div ref={metric2Ref} className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-400">
                  +27%
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Conversion Lift
                </div>
              </div>

              <div className="hero-metric-box space-y-1">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  0 Sec
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  POS Data Latency
                </div>
              </div>

              <div className="hero-metric-box space-y-1">
                <div ref={metric3Ref} className="text-2xl sm:text-3xl font-bold tracking-tight text-cyan-300">
                  90%
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Usability Score
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Portrait Frame (5 cols) */}
          <div className="hero-portrait-col lg:col-span-5 flex justify-center relative py-4 [perspective:1000px]">
            <div
              ref={portraitCardRef}
              className="relative w-full max-w-sm sm:max-w-md rounded-2xl bg-zinc-900 border border-zinc-800 p-4 shadow-xl will-change-transform [transform-style:preserve-3d]"
            >
              {/* Inner Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <Image
                  src="/anas-elawdy.png"
                  alt="Anas Elawdy — Product UI/UX Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top filter brightness-105 contrast-105"
                />

                {/* Scrim on Base of Photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Photo Base Caption */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-zinc-950/90 border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Anas Elawdy</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xs text-zinc-300">Product UI/UX Designer</div>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-medium">
                    Available
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
