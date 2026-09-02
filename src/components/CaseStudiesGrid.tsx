'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, QrCode, UtensilsCrossed, Bot, Baby, Store } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, ProjectCategory } from '../types/portfolio';
import { gsap, useGSAP } from '../lib/gsap';

interface CaseStudiesGridProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const CaseStudiesGrid: React.FC<CaseStudiesGridProps> = ({ onSelectCaseStudy }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  useGSAP(
    () => {
      // Header entrance
      gsap.from('.cs-header-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Cards batch reveal
      gsap.from('.cs-card-item', {
        scrollTrigger: {
          trigger: '.cs-cards-grid',
          start: 'top 85%',
          once: true,
        },
        y: 28,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
      });
    },
    { scope: sectionRef, dependencies: [selectedCategory] }
  );

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
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between rounded-t-xl border-b border-zinc-800 overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-xs font-medium text-zinc-100">Qoodz Mobile &amp; Merchant Ecosystem</span>
              </div>
              <div className="text-xs px-2.5 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30 font-medium">
                GCC Market • KSA &amp; UAE
              </div>
            </div>

            {/* Loyalty Mockup UI */}
            <div className="grid grid-cols-3 gap-3 my-auto py-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs text-zinc-300">Loyalty Level</div>
                <div className="text-sm font-bold text-amber-300 flex items-center gap-1">
                  <span>Gold Foodie</span>
                </div>
                <div className="text-xs text-zinc-200">1,450 Points</div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs text-zinc-300">Active Streak</div>
                <div className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                  <span>5 Weeks 🔥</span>
                </div>
                <div className="text-xs text-zinc-200">+20% Bonus</div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs text-zinc-300">In-Store QR</div>
                <div className="text-sm font-bold text-white flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-cyan-400 inline" />
                  <span>Instant</span>
                </div>
                <div className="text-xs text-emerald-400 font-medium">0s Validation</div>
              </div>
            </div>

            {/* Merchant Dashboard Preview */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-zinc-200">Merchant Portal: 38 Active Restaurant Offers</span>
              </div>
              <span className="text-emerald-400 font-semibold">Active</span>
            </div>
          </div>
        );

      case 'qoodz-digital-menu':
        return (
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between rounded-t-xl border-b border-zinc-800 overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-medium text-zinc-100">Qoodz Digital Menu Conversion Flow</span>
              </div>
              <span className="text-xs text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded border border-emerald-500/30 font-medium">
                +27% Conversion
              </span>
            </div>

            {/* Menu Items Showcase */}
            <div className="grid grid-cols-2 gap-3 my-auto py-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Truffle Wagyu Burger</span>
                  <span className="text-xs text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded font-medium">25% OFF</span>
                </div>
                <div className="text-xs text-zinc-300">Brioche bun, aged cheddar &amp; truffle aioli</div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-white font-bold">48 SAR</span>
                  <span className="text-zinc-400 line-through">64 SAR</span>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Matcha Latte Cream</span>
                  <span className="text-xs text-cyan-300 bg-cyan-500/15 px-1.5 py-0.5 rounded font-medium">BOGO 1+1</span>
                </div>
                <div className="text-xs text-zinc-300">Ceremonial grade matcha &amp; cold foam</div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-white font-bold">24 SAR</span>
                  <span className="text-emerald-400 font-semibold">Claim Offer →</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-200 bg-zinc-900 px-3 py-2.5 rounded-xl border border-zinc-800">
              <span>Time on Menu: 1m40s (+43%)</span>
              <span className="text-emerald-400 font-semibold">2.5x Saved Dishes</span>
            </div>
          </div>
        );

      case 'pwc-ai-dashboard':
        return (
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between rounded-t-xl border-b border-zinc-800 overflow-hidden">
            {/* AI Cockpit Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-medium text-zinc-100">PWC AI Task &amp; Time Management</span>
              </div>
              <span className="text-xs text-cyan-300 bg-cyan-500/15 px-2.5 py-0.5 rounded border border-cyan-500/30 font-medium">
                Focus Shield Active
              </span>
            </div>

            {/* AI Scheduling Blocks */}
            <div className="grid grid-cols-3 gap-3 my-auto py-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs font-medium text-emerald-400 uppercase">Focus Shield</div>
                <div className="text-xs font-bold text-white">09:00 - 12:30</div>
                <div className="text-xs text-zinc-300">0 Distractions</div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs font-medium text-amber-300 uppercase">Meetings</div>
                <div className="text-xs font-bold text-white">2 Syncs (45m)</div>
                <div className="text-xs text-emerald-400">-30% Overload</div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs font-medium text-cyan-300 uppercase">AI Task Queue</div>
                <div className="text-xs font-bold text-white">8 Auto-Triaged</div>
                <div className="text-xs text-zinc-300">100% On Time</div>
              </div>
            </div>

            <div className="bg-zinc-900 px-3 py-2 rounded-xl border border-zinc-800 text-xs text-zinc-200 flex items-center justify-between">
              <span>Calendar Sync:</span>
              <span className="text-emerald-400 font-semibold">Google &amp; Outlook Connected ✓</span>
            </div>
          </div>
        );

      case 'childroo-tracker':
        return (
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between rounded-t-xl border-b border-zinc-800 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <div className="flex items-center gap-2">
                <Baby className="w-3.5 h-3.5 text-rose-400" />
                <span className="text-xs font-medium text-zinc-100">ChildRoo — Smart Baby Tracker</span>
              </div>
              <span className="text-xs text-rose-300 bg-rose-500/15 px-2.5 py-0.5 rounded border border-rose-500/30 font-medium">
                1-Tap Logging
              </span>
            </div>

            {/* Quick Action Pinned Component */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 my-auto space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Daily Routine Status</span>
                <span className="text-xs text-emerald-400 font-medium">On Track (3/4 Done)</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800">
                  <div className="text-zinc-300 text-xs">Last Feeding</div>
                  <div className="text-white font-bold text-xs pt-0.5">2h 15m ago</div>
                </div>
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800">
                  <div className="text-zinc-300 text-xs">Sleep Window</div>
                  <div className="text-cyan-300 font-bold text-xs pt-0.5">1h 40m nap</div>
                </div>
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800">
                  <div className="text-zinc-300 text-xs">Diaper Log</div>
                  <div className="text-rose-300 font-bold text-xs pt-0.5">Clean ✓</div>
                </div>
              </div>

              <div className="text-xs text-zinc-300 text-center pt-1">
                One-Tap &ldquo;Continue Routine&rdquo; without repeated navigation
              </div>
            </div>

            <div className="bg-zinc-900 px-3 py-2 rounded-xl border border-zinc-800 text-xs text-zinc-200 flex items-center justify-between">
              <span>App Store Rating:</span>
              <span className="text-white font-bold">4.8 ★ (Calming Design)</span>
            </div>
          </div>
        );

      case 'qompos-pos-manager':
      default:
        return (
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between rounded-t-xl border-b border-zinc-800 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Store className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-medium text-zinc-100">Qompos POS Manager Command Center</span>
              </div>
              <span className="text-xs text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded border border-emerald-500/30 font-medium">
                0s Data Latency
              </span>
            </div>

            {/* Hero Revenue Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 my-auto space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase text-zinc-300 font-medium">Total Net Revenue Today</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  ↑ +18.4% vs Yesterday
                </span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">
                SAR 38,490.00
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-200 pt-1.5 border-t border-zinc-800">
                <span>342 Orders Completed</span>
                <span className="text-emerald-400 font-semibold">100% Store Visibility</span>
              </div>
            </div>

            <div className="bg-zinc-900 px-3 py-2 rounded-xl border border-zinc-800 text-xs text-zinc-200 flex items-center justify-between">
              <span>Saved Time per Manager:</span>
              <span className="text-emerald-400 font-semibold">10-15 hrs/week</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section ref={sectionRef} id="work" className="py-24 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="cs-header-item text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Product Design Work
            </h2>
            <p className="cs-header-item text-zinc-200 text-base leading-relaxed">
              Real products shipped across Saudi Arabia, UAE, Iraq, and international markets. Click any project for complete UX research, personas, wireframes, and business telemetry.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="cs-header-item flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-white text-zinc-950 font-semibold'
                    : 'bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="cs-cards-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => onSelectCaseStudy(project)}
                className="cs-card-item group cursor-pointer rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-xl"
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
                      <span className="text-emerald-400 uppercase tracking-wider font-semibold">
                        {project.categoryLabel}
                      </span>
                      <span className="text-zinc-300 font-medium">{project.region}</span>
                    </div>

                    {/* Title & Summary */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-2" />
                      </h3>
                      <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-zinc-800 text-xs text-zinc-100 font-medium border border-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Footer */}
                  <div className="pt-5 border-t border-zinc-800 grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="text-base sm:text-lg font-bold text-white">
                          {metric.value}
                        </div>
                        <div className="text-xs text-zinc-300 font-medium leading-tight">
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
