'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, SlidersHorizontal, QrCode, UtensilsCrossed, Bot, Baby, Store } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, ProjectCategory } from '../types/portfolio';

interface CaseStudiesGridProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const CaseStudiesGrid: React.FC<CaseStudiesGridProps> = ({ onSelectCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'fb-loyalty', label: 'F&B & Loyalty' },
    { id: 'pos-enterprise', label: 'POS & Analytics' },
    { id: 'ai-dashboard', label: 'AI & Productivity' },
    { id: 'mobile-health', label: 'Mobile & Health' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) => p.category === selectedCategory);

  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case 'qoodz-app':
        return (
          <div className="w-full h-full bg-[#0d0f14] p-5 flex flex-col justify-between rounded-t-xl border-b border-white/[0.06] overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-[11px] font-mono text-zinc-300">Qoodz Mobile &amp; Merchant Ecosystem</span>
              </div>
              <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                GCC Market • KSA &amp; UAE
              </div>
            </div>

            {/* Loyalty Mockup UI */}
            <div className="grid grid-cols-3 gap-3 my-auto py-2">
              <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-3 space-y-1">
                <div className="text-[10px] text-zinc-500 font-mono">Loyalty Level</div>
                <div className="text-sm font-bold text-amber-400 flex items-center gap-1">
                  <span>Gold Foodie</span>
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">1,450 Points</div>
              </div>

              <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-3 space-y-1">
                <div className="text-[10px] text-zinc-500 font-mono">Active Streak</div>
                <div className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                  <span>5 Weeks 🔥</span>
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">+20% Bonus</div>
              </div>

              <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-3 space-y-1">
                <div className="text-[10px] text-zinc-500 font-mono">In-Store QR</div>
                <div className="text-sm font-bold text-white flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-cyan-400 inline" />
                  <span>Instant</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-mono">0s Validation</div>
              </div>
            </div>

            {/* Merchant Dashboard Preview */}
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-2.5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-300 text-[11px]">Merchant Portal: 38 Active Restaurant Offers</span>
              </div>
              <span className="text-emerald-400 text-[11px] font-semibold">Live</span>
            </div>
          </div>
        );

      case 'qoodz-digital-menu':
        return (
          <div className="w-full h-full bg-[#0e0d14] p-5 flex flex-col justify-between rounded-t-xl border-b border-white/[0.06] overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-mono text-zinc-300">Qoodz Digital Menu Conversion Flow</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                +27% Conversion
              </span>
            </div>

            {/* Menu Items Showcase */}
            <div className="grid grid-cols-2 gap-3 my-auto py-2">
              <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white">Truffle Wagyu Burger</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">25% OFF</span>
                </div>
                <div className="text-[10px] text-zinc-400">Signature dish with brioche &amp; truffle aioli</div>
                <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                  <span className="text-white font-bold">48 SAR</span>
                  <span className="text-zinc-500 line-through text-[10px]">64 SAR</span>
                </div>
              </div>

              <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white">Matcha Latte Cream</span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">BOGO 1+1</span>
                </div>
                <div className="text-[10px] text-zinc-400">Ceremonial grade matcha &amp; oat foam</div>
                <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                  <span className="text-white font-bold">24 SAR</span>
                  <span className="text-emerald-400 text-[10px]">Claim Offer →</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-zinc-400 bg-zinc-900/50 px-3 py-2 rounded-xl border border-white/5 font-mono">
              <span>Time on Brand Page: 1m40s (+43%)</span>
              <span className="text-emerald-400">2.5x Saved Dishes</span>
            </div>
          </div>
        );

      case 'pwc-ai-dashboard':
        return (
          <div className="w-full h-full bg-[#0a0c10] p-5 flex flex-col justify-between rounded-t-xl border-b border-white/[0.06] overflow-hidden">
            {/* AI Cockpit Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-mono text-zinc-300">PWC AI Task &amp; Time Management</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Focus Shield Active
              </span>
            </div>

            {/* AI Scheduling Blocks */}
            <div className="grid grid-cols-3 gap-3 my-auto py-2">
              <div className="bg-zinc-900/80 border border-emerald-500/30 rounded-xl p-3 space-y-1">
                <div className="text-[10px] font-mono text-emerald-400 uppercase">Focus Shield</div>
                <div className="text-xs font-bold text-white">09:00 - 12:30</div>
                <div className="text-[10px] text-zinc-400 font-mono">0 Distractions</div>
              </div>

              <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-3 space-y-1">
                <div className="text-[10px] font-mono text-amber-400 uppercase">Meeting Balance</div>
                <div className="text-xs font-bold text-white">2 Syncs (45m)</div>
                <div className="text-[10px] text-emerald-400 font-mono">-30% Overload</div>
              </div>

              <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-3 space-y-1">
                <div className="text-[10px] font-mono text-cyan-400 uppercase">AI Task Queue</div>
                <div className="text-xs font-bold text-white">8 Auto-Triaged</div>
                <div className="text-[10px] text-zinc-400 font-mono">100% On Time</div>
              </div>
            </div>

            <div className="bg-zinc-900/80 px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-zinc-300 flex items-center justify-between font-mono">
              <span>Google Calendar &amp; Outlook Sync:</span>
              <span className="text-emerald-400 font-semibold">CONNECTED ✓</span>
            </div>
          </div>
        );

      case 'childroo-tracker':
        return (
          <div className="w-full h-full bg-[#0d0c12] p-5 flex flex-col justify-between rounded-t-xl border-b border-white/[0.06] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <Baby className="w-3.5 h-3.5 text-rose-400" />
                <span className="text-[11px] font-mono text-zinc-300">ChildRoo — Smart Baby Tracker</span>
              </div>
              <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                1-Tap Quick Action
              </span>
            </div>

            {/* Quick Action Pinned Component */}
            <div className="bg-zinc-900/90 border border-rose-500/30 rounded-xl p-3.5 my-auto space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Current Day Routine Status</span>
                <span className="text-[10px] font-mono text-emerald-400">On Track (3/4 Done)</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="bg-zinc-950 p-2 rounded-lg border border-white/5">
                  <div className="text-zinc-500 text-[9px]">Last Feeding</div>
                  <div className="text-white font-bold text-[11px]">2h 15m ago</div>
                </div>
                <div className="bg-zinc-950 p-2 rounded-lg border border-white/5">
                  <div className="text-zinc-500 text-[9px]">Sleep Window</div>
                  <div className="text-cyan-400 font-bold text-[11px]">1h 40m nap</div>
                </div>
                <div className="bg-zinc-950 p-2 rounded-lg border border-white/5">
                  <div className="text-zinc-500 text-[9px]">Diaper Log</div>
                  <div className="text-rose-400 font-bold text-[11px]">Clean ✓</div>
                </div>
              </div>

              <div className="text-[10px] text-zinc-400 text-center font-mono pt-1">
                One-Tap &ldquo;Continue Routine&rdquo; without repeated navigation
              </div>
            </div>

            <div className="bg-zinc-900/60 px-3 py-1.5 rounded-xl border border-white/5 text-[11px] text-zinc-400 flex items-center justify-between font-mono">
              <span>App Store Rating:</span>
              <span className="text-white font-bold">4.8 ★ (Calming Design)</span>
            </div>
          </div>
        );

      case 'qompos-pos-manager':
      default:
        return (
          <div className="w-full h-full bg-[#0c0e12] p-5 flex flex-col justify-between rounded-t-xl border-b border-white/[0.06] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Store className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-mono text-zinc-300">Qompos POS Manager Command Center</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                0s Data Latency
              </span>
            </div>

            {/* Hero Revenue Card */}
            <div className="bg-zinc-900/90 border border-white/15 rounded-xl p-4 my-auto space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-zinc-400">Total Net Revenue Today</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ↑ +18.4% vs Yesterday
                </span>
              </div>
              <div className="text-2xl font-bold font-mono text-white tracking-tight">
                SAR 38,490.00
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1 border-t border-white/5">
                <span>342 Orders Completed</span>
                <span className="text-emerald-400 font-semibold">100% Store Visibility</span>
              </div>
            </div>

            <div className="bg-zinc-900/60 px-3 py-1.5 rounded-xl border border-white/5 text-[11px] text-zinc-400 flex items-center justify-between font-mono">
              <span>Saved Time per Manager:</span>
              <span className="text-emerald-400 font-semibold">10-15 hrs/week</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>FEATURED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Product Design Work
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Real projects shipped across Saudi Arabia, UAE, Iraq, and international markets. Click any project for complete UX research, personas, wireframes, and business telemetry.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900/80 p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                onClick={() => onSelectCaseStudy(project)}
                className="group cursor-pointer rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Visual Preview Container */}
                <div className="h-64 sm:h-72 w-full relative">
                  {renderProjectVisual(project.id)}
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Category & Region */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                        {project.categoryLabel}
                      </span>
                      <span className="text-zinc-500 font-mono">{project.region}</span>
                    </div>

                    {/* Title & Summary */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-2" />
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] text-zinc-300 font-medium font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Footer */}
                  <div className="pt-5 border-t border-white/[0.08] grid grid-cols-3 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="text-base sm:text-lg font-bold font-mono text-white">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-zinc-400 font-medium leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
