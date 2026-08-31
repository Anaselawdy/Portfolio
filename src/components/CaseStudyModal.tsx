'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Lightbulb, Compass, Quote, Globe } from 'lucide-react';
import { CaseStudy } from '../types/portfolio';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSelectAnotherStudy?: (study: CaseStudy) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
}) => {
  type ModalTab = 'overview' | 'research' | 'process' | 'impact';
  const [activeTab, setActiveTab] = useState<ModalTab>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full max-w-5xl h-full sm:h-[90vh] bg-[#0c0d12] border border-white/15 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Top Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 bg-zinc-900/80 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase">
                {caseStudy.categoryLabel}
              </span>
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 inline text-zinc-500" />
                <span>{caseStudy.region} • {caseStudy.year}</span>
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Sub-Tabs */}
          <div className="px-6 border-b border-white/10 bg-zinc-900/40 flex gap-2 sm:gap-6 overflow-x-auto shrink-0 py-2">
            {[
              { id: 'overview' as ModalTab, label: '1. Overview & Problem' },
              { id: 'research' as ModalTab, label: '2. Research & Usability' },
              { id: 'process' as ModalTab, label: '3. Design Evolution' },
              { id: 'impact' as ModalTab, label: '4. Impact & Learnings' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-3 text-xs sm:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-emerald-400 text-white font-semibold'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Modal Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10">
            {/* Main Title & Executive Summary */}
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                {caseStudy.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                {caseStudy.summary}
              </p>

              {/* Quick Metadata Pill Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-zinc-900/60 p-3 rounded-xl border border-white/5 space-y-0.5">
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">My Role</div>
                  <div className="text-xs font-semibold text-zinc-200">{caseStudy.role}</div>
                </div>
                <div className="bg-zinc-900/60 p-3 rounded-xl border border-white/5 space-y-0.5">
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">Platform</div>
                  <div className="text-xs font-semibold text-zinc-200">{caseStudy.platform}</div>
                </div>
                <div className="bg-zinc-900/60 p-3 rounded-xl border border-white/5 space-y-0.5">
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">Region</div>
                  <div className="text-xs font-semibold text-zinc-200">{caseStudy.region}</div>
                </div>
                <div className="bg-zinc-900/60 p-3 rounded-xl border border-white/5 space-y-0.5">
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">Core Highlight</div>
                  <div className="text-xs font-semibold text-emerald-400 font-mono">{caseStudy.metrics[0].value} {caseStudy.metrics[0].label}</div>
                </div>
              </div>
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase">
                      <Lightbulb className="w-4 h-4" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {caseStudy.overview.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase">
                      <Compass className="w-4 h-4" />
                      <span>The Opportunity</span>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {caseStudy.overview.opportunity}
                    </p>
                  </div>
                </div>

                {/* Responsibilities & Tools */}
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-white">
                    Key Activities &amp; Responsibilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudy.overview.myRole.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 bg-zinc-900/40 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Stack */}
                <div className="space-y-2">
                  <div className="text-xs text-zinc-400 font-mono">Tools &amp; Methods:</div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.overview.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-mono border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: RESEARCH */}
            {activeTab === 'research' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-zinc-400 uppercase">Target Audience</div>
                  <p className="text-sm text-zinc-200">{caseStudy.research.targetAudience}</p>
                </div>

                {/* Key Insights */}
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-white">
                    Key Research Observations &amp; Insights
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {caseStudy.research.keyInsights.map((insight, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-1.5">
                        <div className="text-sm font-semibold text-emerald-400 font-mono">
                          Insight #{idx + 1}: {insight.title}
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          {insight.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Problem Statements */}
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-white">
                    How Might We (HMW) Statements
                  </h3>
                  <div className="space-y-2">
                    {caseStudy.research.problemStatements.map((hmw, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 text-xs sm:text-sm text-zinc-300 font-medium italic">
                        &ldquo;{hmw}&rdquo;
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DESIGN EVOLUTION */}
            {activeTab === 'process' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="space-y-6">
                  {caseStudy.designProcess.map((step, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                          {step.phase}
                        </span>
                        <span className="text-xs text-zinc-400 font-medium">
                          {step.title}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2">
                        {step.highlights.map((highlight, hIdx) => (
                          <span key={hIdx} className="px-2.5 py-1 rounded bg-zinc-800/80 text-[11px] font-mono text-zinc-300 border border-white/5">
                            ✓ {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Solution Features */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h3 className="text-base font-semibold text-white">
                    Core Solution Architecture &amp; Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {caseStudy.solution.features.map((feat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-zinc-900/90 border border-white/10 space-y-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                          {feat.tag}
                        </span>
                        <div className="text-sm font-semibold text-white">{feat.title}</div>
                        <p className="text-xs text-zinc-400 leading-relaxed">{feat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: IMPACT */}
            {activeTab === 'impact' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="p-6 rounded-2xl bg-zinc-900/90 border border-white/15 space-y-6">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                      MEASURABLE BUSINESS IMPACT
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {caseStudy.impact.headline}
                    </h3>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    {caseStudy.impact.stats.map((stat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <div className="text-3xl font-bold font-mono text-emerald-400">{stat.value}</div>
                        <div className="text-xs font-semibold text-white">{stat.label}</div>
                        <div className="text-[11px] text-zinc-400">{stat.description}</div>
                      </div>
                    ))}
                  </div>

                  {/* Lessons Learned */}
                  {caseStudy.impact.learnings && caseStudy.impact.learnings.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                        💡 Key Lessons &amp; Takeaways
                      </h4>
                      <div className="space-y-2">
                        {caseStudy.impact.learnings.map((learning, lIdx) => (
                          <div key={lIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                            <span className="text-emerald-400">•</span>
                            <span>{learning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Testimonial Quote */}
                  {caseStudy.impact.quote && (
                    <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3 relative">
                      <Quote className="w-6 h-6 text-zinc-600 absolute top-4 right-4" />
                      <p className="text-sm sm:text-base text-zinc-200 italic leading-relaxed">
                        &ldquo;{caseStudy.impact.quote.text}&rdquo;
                      </p>
                      <div className="text-xs text-zinc-400">
                        <span className="font-semibold text-white">{caseStudy.impact.quote.author}</span>
                        <span> — {caseStudy.impact.quote.role}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Modal Bottom Footer */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-zinc-900/90 flex items-center justify-between shrink-0">
            <div className="text-xs text-zinc-400 font-mono hidden sm:inline">
              Press <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-white/10 rounded text-[10px]">Esc</kbd> to exit
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors ml-auto"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
