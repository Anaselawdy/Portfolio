'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, QrCode, UtensilsCrossed, Bot, Baby, Store, ArrowRight } from 'lucide-react';
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
        stagger: 0.08,
        duration: 0.5,
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
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });
    },
    { scope: sectionRef, dependencies: [selectedCategory] }
  );

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'fb-loyalty', label: 'F&B & Loyalty' },
    { id: 'pos-enterprise', label: 'POS & Operations' },
    { id: 'ai-dashboard', label: 'AI & Productivity' },
    { id: 'mobile-health', label: 'Health & Mobile' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.category === selectedCategory);

  // Clean, focused visual previews with generous whitespace
  const renderVisualPreview = (projectId: string) => {
    switch (projectId) {
      case 'qoodz-app':
        return (
          <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 flex flex-col justify-between border-b border-zinc-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-amber-400" />
                <span className="text-xs font-semibold text-white tracking-wide">Qoodz Diner Loyalty</span>
              </div>
              <span className="text-[11px] font-semibold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                Gold Tier • 1,450 Pts
              </span>
            </div>

            <div className="my-auto py-3 flex items-center justify-between p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">In-Store QR Redemption</div>
                <div className="text-sm font-bold text-white">5-Week Dining Streak 🔥</div>
              </div>
              <div className="size-10 rounded-lg bg-zinc-950 border border-zinc-700 flex items-center justify-center text-cyan-400">
                <QrCode className="size-5" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Saudi Arabia &amp; UAE</span>
              <span className="text-emerald-400 font-semibold">+27% Repeat Orders</span>
            </div>
          </div>
        );

      case 'qoodz-digital-menu':
        return (
          <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 flex flex-col justify-between border-b border-zinc-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="size-4 text-emerald-400" />
                <span className="text-xs font-semibold text-white tracking-wide">Interactive Visual Menu</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                +27% Conversion Lift
              </span>
            </div>

            <div className="my-auto py-3 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-sm font-bold text-white">Truffle Wagyu Burger</div>
                <div className="text-xs text-zinc-400">Photo-rich ordering with 1-tap add-on</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-emerald-400">48 SAR</div>
                <div className="text-[11px] text-zinc-400">2.5x Saved Dishes</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Replaced Static PDFs</span>
              <span className="text-emerald-400 font-semibold">+43% Time on Menu</span>
            </div>
          </div>
        );

      case 'pwc-ai-dashboard':
        return (
          <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 flex flex-col justify-between border-b border-zinc-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="size-4 text-cyan-400" />
                <span className="text-xs font-semibold text-white tracking-wide">PWC AI Focus Cockpit</span>
              </div>
              <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                Focus Shield Active
              </span>
            </div>

            <div className="my-auto py-3 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Deep Work Protection</div>
                <div className="text-sm font-bold text-white">09:00 - 12:30 (3.5 hrs)</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-emerald-400">-30% Meetings</div>
                <div className="text-[11px] text-zinc-400">Automated Calendar Sync</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Enterprise Productivity</span>
              <span className="text-emerald-400 font-semibold">100% On-Time Delivery</span>
            </div>
          </div>
        );

      case 'childroo-tracker':
        return (
          <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 flex flex-col justify-between border-b border-zinc-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Baby className="size-4 text-rose-400" />
                <span className="text-xs font-semibold text-white tracking-wide">ChildRoo Routine Tracker</span>
              </div>
              <span className="text-[11px] font-semibold text-rose-300 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">
                1-Tap Quick Action
              </span>
            </div>

            <div className="my-auto py-3 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Midnight Feed &amp; Nap</div>
                <div className="text-sm font-bold text-white">Logged in 1 Tap</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-white">4.8 ★ Rating</div>
                <div className="text-[11px] text-zinc-400">Calming Dark UI</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Health &amp; Parenting</span>
              <span className="text-emerald-400 font-semibold">82% 30-Day Retention</span>
            </div>
          </div>
        );

      case 'qompos-pos-manager':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 flex flex-col justify-between border-b border-zinc-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Store className="size-4 text-emerald-400" />
                <span className="text-xs font-semibold text-white tracking-wide">Qompos POS Manager</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                0-Second Latency
              </span>
            </div>

            <div className="my-auto py-3 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Today&apos;s Net Revenue</div>
                <div className="text-lg font-bold text-white">SAR 38,490.00</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-emerald-400">+18.4%</div>
                <div className="text-[11px] text-zinc-400">10 Branches Online</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Multi-Branch POS Operations</span>
              <span className="text-emerald-400 font-semibold">15 hrs/week Saved</span>
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
              Selected Product Case Studies
            </h2>
            <p className="cs-header-item text-zinc-300 text-base sm:text-lg leading-relaxed">
              Explore real-world software shipped across the GCC. Click any case study for the full product breakdown, user research, and verified business outcomes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="cs-header-item flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-zinc-950 font-bold shadow-sm'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: Clean, Calm & Balanced */}
        <motion.div layout className="cs-cards-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                key={project.id}
                onClick={() => onSelectCaseStudy(project)}
                className="cs-card-item group cursor-pointer rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-xl"
              >
                {/* Visual Preview Header (Calm, elegant, generous whitespace) */}
                <div className="h-52 sm:h-56 w-full relative group-hover:brightness-105 transition-all">
                  {renderVisualPreview(project.id)}
                </div>

                {/* Card Body: Simple, Readable, Zero Text Clutter */}
                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between bg-zinc-900/90">
                  <div className="space-y-3">
                    {/* Meta: Category & Region */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-semibold tracking-wide">
                        {project.categoryLabel}
                      </span>
                      <span className="text-zinc-400">{project.region}</span>
                    </div>

                    {/* Clean Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="size-5 text-zinc-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </h3>

                    {/* Single Crisp Sentence (Easy to scan, zero eye fatigue) */}
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Card Bottom: 2 Key Metrics + View CTA */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 sm:gap-6">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="text-base sm:text-lg font-bold text-white">{m.value}</div>
                          <div className="text-xs text-zinc-400 font-medium">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors shrink-0">
                      <span>View Case Study</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
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
