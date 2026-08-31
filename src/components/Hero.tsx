'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Layers, FileText, Globe2, Scale, ArrowUpRight, MessageSquare } from 'lucide-react';
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
      {/* Background Subtle Radial Depth */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[640px] h-[640px] bg-emerald-500/[0.035] rounded-full blur-3xl" />
        <div className="w-[850px] h-[450px] bg-zinc-800/[0.12] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl space-y-8"
        >
          {/* Status & Sub-title */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs text-zinc-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-white">
                {PERSONAL_INFO.currentRole}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400 font-mono text-[11px]">{PERSONAL_INFO.yearsExperience} Experience</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-white/10 text-[11px] text-zinc-400">
              <Globe2 className="w-3 h-3 text-emerald-400" />
              <span>UAE, KSA, Iraq &amp; Korea</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-white/10 text-[11px] text-zinc-400">
              <Scale className="w-3 h-3 text-cyan-400" />
              <span>Law &amp; Analytical Mindset</span>
            </div>
          </div>

          {/* Main Statement */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
            >
              {PERSONAL_INFO.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl"
            >
              {PERSONAL_INFO.bio}
            </motion.p>
          </div>

          {/* Quick Contact & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <button
              onClick={onExploreWork}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-sm font-medium transition-all"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <button
              onClick={onOpenDesignSystem}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-white/10 text-sm font-medium transition-all"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Design Lab</span>
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-zinc-400 hover:text-white text-sm font-mono transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Get in Touch →</span>
            </button>
          </motion.div>

          {/* Impact Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-10 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                {PERSONAL_INFO.yearsExperience}
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Years Product Design
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-400 font-mono">
                +27%
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Digital Menu Conversion Lift
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                0 Sec
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Real-Time POS Data Latency
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-cyan-400 font-mono">
                90%
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                User Loyalty Satisfaction
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
