'use client';

import React from 'react';
import { ArrowDown, Layers, ShieldCheck, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

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
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background Texture & Subtle Radial Depth */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-3xl" />
        <div className="w-[800px] h-[400px] bg-zinc-800/[0.15] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
          {/* Status & Sub-title */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs text-zinc-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium text-zinc-300">
              Senior Product Designer &amp; Design Systems Architect
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">{PERSONAL_INFO.location}</span>
          </div>

          {/* Main Statement */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Crafting high-density interfaces &amp; scalable design systems.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl">
              I partner with high-growth technology companies to transform complex workflows into effortless, high-converting product experiences. Specializing in fintech, autonomous AI tooling, and token architectures.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Case Studies</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDesignSystem}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Design System Lab</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            >
              <span>Get in Touch</span>
              <span className="text-xs text-zinc-600">→</span>
            </button>
          </div>

          {/* Impact Stats Strip */}
          <div className="pt-10 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                {PERSONAL_INFO.yearsExperience}
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Years Product Design
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                {PERSONAL_INFO.productsShipped}
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Shipped Products
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                {PERSONAL_INFO.totalFundingImpact}
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Client Valuation &amp; ARR
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-400 font-mono flex items-center gap-1">
                <ShieldCheck className="w-5 h-5 inline text-emerald-400" />
                100%
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                WCAG 2.2 AA Compliance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
