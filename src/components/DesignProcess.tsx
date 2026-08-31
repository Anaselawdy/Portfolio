'use client';

import React from 'react';
import { Search, GitBranch, LayoutGrid, Layers, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';

export const DesignProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Brief Deconstruction & Flow Mapping',
      desc: 'Dissecting core user and business goals before touching visual tools. Mapping happy paths, empty states, and validation edge cases.',
      icon: GitBranch,
      deliverables: ['User Flow Maps', 'Edge Case Matrix', 'Information Architecture'],
    },
    {
      num: '02',
      title: 'Pattern Intelligence & Synthesis',
      desc: 'Extracting high-converting interaction models from top-tier products via Mobbin and UX research literature.',
      icon: Search,
      deliverables: ['Competitive UX Audit', 'Interaction Benchmarks', 'Mental Model Strategy'],
    },
    {
      num: '03',
      title: 'High-Density Wireframing & Prototyping',
      desc: 'Rapidly stress-testing complex data layouts and state transitions with realistic content and micro-interactions.',
      icon: LayoutGrid,
      deliverables: ['Interactive Prototypes', 'Responsive Layouts', 'State Flow Specs'],
    },
    {
      num: '04',
      title: 'Design System & Token Architecture',
      desc: 'Codifying styles into semantic tokens, accessible component primitives, and automated developer handoff docs.',
      icon: Layers,
      deliverables: ['Figma Variables', 'Token Pipelines', 'WCAG 2.2 AA Audit'],
    },
    {
      num: '05',
      title: 'Usability Testing & Business Telemetry',
      desc: 'Validating with real end-users, tracking task completion times, and measuring conversion and retention uplift.',
      icon: BarChart3,
      deliverables: ['Usability Study Reports', 'Telemetry Dashboards', 'Optimization Iterations'],
    },
  ];

  return (
    <section id="process" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>METHODOLOGY &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How I design scalable, high-impact products.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A structured framework designed to move from ambiguity to shipping production-ready interfaces fast without sacrificing depth or craft.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-zinc-600 group-hover:text-emerald-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    Key Deliverables:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((d) => (
                      <span
                        key={d}
                        className="px-2 py-0.5 rounded bg-zinc-800/60 border border-white/5 text-[10px] font-mono text-zinc-300"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950/30 border border-emerald-500/20 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                CORE PRINCIPLE
              </span>
              <h3 className="text-xl font-bold text-white">
                Engineered for Developer Velocity &amp; User Trust
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Design is not done when the Figma file looks pretty. It is done when the engineered interface is responsive, accessible, resilient to failure states, and measurably moves business metrics.
              </p>
            </div>

            <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
              <span>Zero-hand-waving specs</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
