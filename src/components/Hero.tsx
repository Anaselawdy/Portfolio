'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Layers, FileText, Globe2, Scale, ArrowUpRight, MessageSquare, Sparkles, Award, CheckCircle2 } from 'lucide-react';
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
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Ambient Radial Depth Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-3xl animate-pulse" />
        <div className="w-[800px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Value Proposition (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Status & Regional Footprint */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs text-zinc-300 shadow-sm">
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

            {/* Headline Statement */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
              >
                {PERSONAL_INFO.tagline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-2xl"
              >
                {PERSONAL_INFO.bio}
              </motion.p>
            </div>

            {/* Quick Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-950 text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-xs sm:text-sm font-medium transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <button
                onClick={onOpenDesignSystem}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-white/10 text-xs sm:text-sm font-medium transition-all"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Design Lab</span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-zinc-400 hover:text-white text-xs sm:text-sm font-mono transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Get in Touch →</span>
              </button>
            </motion.div>

            {/* Impact Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="space-y-0.5">
                <div className="text-2xl font-bold tracking-tight text-white font-mono">
                  {PERSONAL_INFO.yearsExperience}
                </div>
                <div className="text-[11px] text-zinc-400 font-medium">
                  Years Design Craft
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl font-bold tracking-tight text-emerald-400 font-mono">
                  +27%
                </div>
                <div className="text-[11px] text-zinc-400 font-medium">
                  Menu Conversion Lift
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl font-bold tracking-tight text-white font-mono">
                  0 Sec
                </div>
                <div className="text-[11px] text-zinc-400 font-medium">
                  POS Data Latency
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl font-bold tracking-tight text-cyan-400 font-mono">
                  90%
                </div>
                <div className="text-[11px] text-zinc-400 font-medium">
                  User Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Fancy Animated Portrait Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center relative py-4"
          >
            {/* Outer Fancy Animated Glow Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Rotating Animated Conic Glow Layer */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-amber-500/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-700 animate-pulse" />

              {/* Dynamic Rotating Border Ring */}
              <div className="absolute -inset-1 rounded-[2.25rem] bg-gradient-to-tr from-emerald-500/40 via-white/15 to-cyan-500/40 p-[1.5px] shadow-2xl">
                <div className="w-full h-full bg-[#090b0e] rounded-[2.2rem]" />
              </div>

              {/* Main Titanium Glass Card */}
              <div className="relative rounded-[2.1rem] bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-[#08090d] border border-white/15 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                {/* Subtle Geometric Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none rounded-[2.1rem]" />

                {/* Inner Image Container with Bevel & Glow */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-950 border border-white/15 shadow-inner">
                  <Image
                    src="/anas-elawdy.png"
                    alt="Anas Elawdy — Product UI/UX Designer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Gradient Shade on Base of Photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

                  {/* Photo Base Name Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Anas Elawdy</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono">Product UI/UX Designer</div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold">
                      Available
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Micro Badge 1: Top Right Floating Craft Chip (Positioned on outer frame with z-20) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 sm:-right-4 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-white/20 text-white shadow-2xl backdrop-blur-md flex items-center gap-1.5 text-xs font-mono z-20"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-bold text-zinc-100">Senior Craft</span>
              </motion.div>

              {/* Floating Micro Badge 2: Bottom Left Floating Project Chip (Positioned on outer frame with z-20) */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-2 sm:-left-4 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-emerald-500/40 text-white shadow-2xl backdrop-blur-md flex items-center gap-1.5 text-xs font-mono z-20"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-zinc-200">Qoodz &amp; GCC Apps</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
