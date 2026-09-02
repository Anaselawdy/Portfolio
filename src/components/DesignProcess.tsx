'use client';

import React, { useRef } from 'react';
import { GitBranch, Search, LayoutGrid, Layers, BarChart3, ArrowRight, ShieldCheck } from 'lucide-react';
import { gsap, useGSAP } from '../lib/gsap';

export const DesignProcess: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header entrance
      gsap.from('.process-header-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Cards staggered entrance
      gsap.from('.process-card', {
        scrollTrigger: {
          trigger: '.process-cards-grid',
          start: 'top 82%',
          once: true,
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  const steps = [
    {
      num: '01',
      title: 'De-Risk & Business Strategy',
      subtitle: 'Save Thousands in Engineering Rework',
      desc: 'Before touching Figma or writing code, we dissect your real business model, customer pain points, and edge cases to ensure we build the right thing first.',
      icon: GitBranch,
      deliverables: ['Product Journey Maps', 'Edge-Case Architecture', 'Executive Goal Matrix'],
    },
    {
      num: '02',
      title: 'Borrow Proven Patterns',
      subtitle: 'Implement What Already Converts',
      desc: 'We analyze top-tier global and GCC products to extract high-converting UX models. Users already know how to use your app on day one without tutorials.',
      icon: Search,
      deliverables: ['Competitive UX Audit', 'Mental Model Benchmarking', 'Conversion Flow Strategy'],
    },
    {
      num: '03',
      title: 'Rapid Interactive Prototypes',
      subtitle: 'Test Real Feedback in Days',
      desc: 'Turning raw concepts into realistic, clickable prototypes with real Arabic & English content so stakeholders, investors, and users can test it immediately.',
      icon: LayoutGrid,
      deliverables: ['Clickable Prototypes', 'Mobile & Web Responsive Specs', 'User Validation Tests'],
    },
    {
      num: '04',
      title: 'Developer Handoff With Zero Guesswork',
      subtitle: '100% Velocity for Your Engineers',
      desc: 'Complete design tokens, state variants (empty, loading, error, success), and pixel-perfect guidelines so your engineers build fast with zero friction.',
      icon: Layers,
      deliverables: ['Figma Token Architecture', 'Zero-Hand-Waving Specs', 'State Variant Matrices'],
    },
    {
      num: '05',
      title: 'Post-Launch Telemetry & ROI',
      subtitle: 'Continuously Measure & Optimize',
      desc: 'Design is verified by results. We look at real user drop-offs, task completion times, and conversion rates to keep lifting business revenue.',
      icon: BarChart3,
      deliverables: ['Usability Study Reports', 'Conversion Telemetry', 'Iterative UX Tweaks'],
    },
  ];

  return (
    <section ref={containerRef} id="process" className="py-24 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="process-header-item text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            How I turn product ambiguity into high-revenue shipped software.
          </h2>
          <p className="process-header-item text-zinc-200 text-base sm:text-lg leading-relaxed">
            A structured framework designed to move from napkin sketch to production-ready interfaces fast without sacrificing depth, craft, or business ROI.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="process-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="process-card p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6 group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold font-mono text-zinc-600 group-hover:text-emerald-400 transition-colors">
                      {step.num}
                    </span>
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                    <div className="text-xs font-bold text-emerald-400 pt-0.5">
                      {step.subtitle}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 space-y-2">
                  <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                    Executive Deliverables:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((d) => (
                      <span
                        key={d}
                        className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-200"
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
          <div className="process-card p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-500/30 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>MY CORE GUARANTEE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Engineered for Developer Speed &amp; User Trust
              </h3>
              <p className="text-sm text-zinc-200 leading-relaxed">
                Design is not done when Figma looks pretty. It is done when the engineered app is fast, accessible, resilient to failure states, and measurably moves business metrics.
              </p>
            </div>

            <div className="text-sm font-bold text-emerald-400 flex items-center gap-2">
              <span>Zero hand-waving • Shipped with pride</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
