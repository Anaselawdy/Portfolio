'use client';

import React, { useState } from 'react';
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, ProjectCategory } from '../types/portfolio';

interface CaseStudiesGridProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const CaseStudiesGrid: React.FC<CaseStudiesGridProps> = ({ onSelectCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech & Payments' },
    { id: 'design-systems', label: 'Design Systems' },
    { id: 'saas-ai', label: 'AI & Complex SaaS' },
    { id: 'mobile', label: 'Mobile & Health' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) => p.category === selectedCategory);

  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case 'apex-pay':
        return (
          <div className="w-full h-full bg-[#0d0e14] p-5 flex flex-col justify-between rounded-t-xl border-b border-white/[0.06] overflow-hidden">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-zinc-500 ml-2">apex-liquidity-cockpit.io</span>
              </div>
              <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                LIVE FX RATE FREEZE: 48s
              </div>
            </div>

            {/* Mock Dashboard Content */}
            <div className="grid grid-cols-3 gap-3 my-auto py-2">
              <div className="bg-zinc-900/90 border border-white/10 rounded-lg p-3 space-y-1">
                <div className="text-[10px] text-zinc-500">USD Pool Balance</div>
                <div className="text-lg font-bold font-mono text-white">$4,820,400.00</div>
                <div className="text-[10px] text-emerald-400 font-mono">↑ +$1.2M today</div>
              </div>
              <div className="bg-zinc-900/90 border border-white/10 rounded-lg p-3 space-y-1">
                <div className="text-[10px] text-zinc-500">EUR Liquidity</div>
                <div className="text-lg font-bold font-mono text-white">€3,150,200.00</div>
                <div className="text-[10px] text-zinc-400 font-mono">Rate: 1.0842 USD</div>
              </div>
              <div className="bg-zinc-900/90 border border-white/10 rounded-lg p-3 space-y-1">
                <div className="text-[10px] text-zinc-500">Batch Queue</div>
                <div className="text-lg font-bold font-mono text-emerald-400">142 Ready</div>
                <div className="text-[10px] text-zinc-400 font-mono">0 Validation Errors</div>
              </div>
            </div>

            {/* Payment Flow Preview */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-lg p-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-xs">
                  $
                </div>
                <div>
                  <div className="font-medium text-white text-xs">Mass Payroll Batch #8942</div>
                  <div className="text-[10px] text-zinc-400">Instant SEPA &amp; SWIFT Rails • 100% Verified</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white font-mono text-[11px]">
                Executed
              </span>
            </div>
          </div>
        );

      case 'pulse-design-system':
        return (
          <div className="w-full h-full bg-[#0c0d12] p-5 flex flex-col justify-between rounded-t-xl border-b border-white/[0.06] overflow-hidden">
            {/* Design Tokens Matrix */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-[11px] font-mono text-zinc-300">Pulse Design Token Engine</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">v3.4.0 • 94 Components</span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto py-2">
              <div className="space-y-2 bg-zinc-900/80 p-3 rounded-lg border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Interactive Button Variants</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-zinc-950 font-semibold rounded-md text-[11px]">Primary</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-200 border border-white/15 rounded-md text-[11px]">Secondary</span>
                  <span className="px-3 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-md text-[11px]">Destructive</span>
                </div>
              </div>

              <div className="space-y-2 bg-zinc-900/80 p-3 rounded-lg border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Design Tokens Hierarchy</div>
                <div className="space-y-1 font-mono text-[10px]">
                  <div className="flex justify-between text-zinc-400">
                    <span>--color-surface-elevated</span>
                    <span className="text-cyan-400">#161822</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>--radius-component-lg</span>
                    <span className="text-zinc-200">12px</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-zinc-400 bg-zinc-900/50 px-3 py-2 rounded-lg border border-white/5 font-mono">
              <span>WCAG 2.2 AA Contrast Ratio: 14.2:1</span>
              <span className="text-emerald-400">PASSED ✓</span>
            </div>
          </div>
        );

      case 'cognito-ai':
        return (
          <div className="w-full h-full bg-[#0a0c10] p-5 flex flex-col justify-between rounded-t-xl border-b border-white/[0.06] overflow-hidden">
            {/* Canvas Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-zinc-300">Cognito Agent Graph Canvas</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                <span>Latency: 142ms</span>
                <span>•</span>
                <span className="text-emerald-400">Token Cost: $0.0024</span>
              </div>
            </div>

            {/* Node Connections */}
            <div className="flex items-center justify-center gap-2 my-auto py-2">
              <div className="bg-zinc-900 border border-white/20 p-2.5 rounded-lg text-center space-y-0.5 shadow-md">
                <div className="text-[9px] font-mono uppercase text-cyan-400">Node #1</div>
                <div className="text-[11px] font-semibold text-white">Prompt RAG</div>
              </div>

              <div className="h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-emerald-400 relative">
                <span className="w-1.5 h-1.5 rounded-full bg-white absolute -top-0.5 right-0 animate-ping" />
              </div>

              <div className="bg-zinc-900 border border-emerald-500/40 p-2.5 rounded-lg text-center space-y-0.5 shadow-md">
                <div className="text-[9px] font-mono uppercase text-emerald-400">Node #2</div>
                <div className="text-[11px] font-semibold text-white">Agent Router</div>
              </div>

              <div className="h-0.5 w-6 bg-gradient-to-r from-emerald-400 to-amber-400" />

              <div className="bg-zinc-900 border border-white/20 p-2.5 rounded-lg text-center space-y-0.5 shadow-md">
                <div className="text-[9px] font-mono uppercase text-amber-400">Node #3</div>
                <div className="text-[11px] font-semibold text-white">API Tool Call</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 p-2 rounded border border-white/10 flex items-center justify-between text-[11px] font-mono">
              <span className="text-zinc-400">Execution Status:</span>
              <span className="text-emerald-400 font-semibold">SUCCESS (200 OK)</span>
            </div>
          </div>
        );

      case 'aura-health':
      default:
        return (
          <div className="w-full h-full bg-[#08090d] p-5 flex flex-col justify-between rounded-t-xl border-b border-white/[0.06] overflow-hidden">
            {/* Mobile Status Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[11px] font-mono text-zinc-400">9:41 AM</span>
              <span className="text-[11px] font-mono text-emerald-400">Aura Sleep Ring v2</span>
            </div>

            <div className="flex items-center justify-around my-auto py-2">
              <div className="relative w-24 h-24 rounded-full border-4 border-emerald-500/40 flex flex-col items-center justify-center bg-zinc-900/60 shadow-inner">
                <span className="text-2xl font-bold font-mono text-white">92</span>
                <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-semibold">Recovery</span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between gap-4 font-mono text-[11px]">
                  <span className="text-zinc-500">Sleep Duration</span>
                  <span className="text-white font-medium">8h 14m</span>
                </div>
                <div className="flex items-center justify-between gap-4 font-mono text-[11px]">
                  <span className="text-zinc-500">Deep / REM</span>
                  <span className="text-cyan-400 font-medium">3h 42m</span>
                </div>
                <div className="flex items-center justify-between gap-4 font-mono text-[11px]">
                  <span className="text-zinc-500">Avg HRV</span>
                  <span className="text-emerald-400 font-medium">68 ms</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-zinc-300 flex items-center justify-between">
              <span>Optimal Bedtime Window:</span>
              <span className="text-emerald-400 font-mono">10:30 PM — 10:45 PM</span>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400">
              <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
              <span>SELECTED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Proven product impact across fintech, AI, and systems.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every project represents a deep dive into user psychology, information architecture, business KPI alignment, and pixel-precise design craft.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectCaseStudy(project)}
              className="group cursor-pointer rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Visual Preview Container */}
              <div className="h-64 sm:h-72 w-full relative">
                {renderProjectVisual(project.id)}
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                      {project.categoryLabel}
                    </span>
                    <span className="text-zinc-500 font-mono">{project.year}</span>
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
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] text-zinc-300 font-medium"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
