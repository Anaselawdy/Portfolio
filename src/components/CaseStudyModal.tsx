'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Lightbulb, Compass, Globe, ArrowRight, ArrowLeft } from 'lucide-react';
import { CaseStudy } from '../types/portfolio';
import { CASE_STUDIES } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSelectAnotherStudy?: (study: CaseStudy) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onSelectAnotherStudy,
}) => {
  type ModalTab = 'overview' | 'research' | 'solution' | 'impact';
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

  // Find next and previous case studies for effortless browsing (UX Heuristic 7: Flexibility & Efficiency)
  const currentIndex = CASE_STUDIES.findIndex((c) => c.id === caseStudy.id);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];
  const prevStudy = CASE_STUDIES[(currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="w-full max-w-5xl h-full sm:h-[92vh] bg-[#0c0d14] border border-zinc-800 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-6 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                {caseStudy.categoryLabel}
              </span>
              <span className="text-xs text-zinc-300 font-medium hidden sm:inline-flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-zinc-400" />
                <span>{caseStudy.region} • {caseStudy.year}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 font-mono hidden md:inline">
                Press <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300">Esc</kbd> to exit
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Plain-Language Tabs (Non-Tech Scannable) */}
          <div className="px-6 border-b border-zinc-800 bg-zinc-950 flex gap-2 sm:gap-6 overflow-x-auto shrink-0 py-2.5">
            {[
              { id: 'overview' as ModalTab, label: '1. The Business Challenge' },
              { id: 'research' as ModalTab, label: '2. What Users Needed' },
              { id: 'solution' as ModalTab, label: '3. The Design Solution' },
              { id: 'impact' as ModalTab, label: '4. Business Results & ROI' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-emerald-400 text-white'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Modal Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Title & 30-Second Executive Summary */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {caseStudy.title}
              </h1>

              <p className="text-base sm:text-lg text-zinc-200 font-normal leading-relaxed">
                {caseStudy.summary}
              </p>

              {/* 30-Second Non-Tech Executive Takeaway Box */}
              <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-zinc-400 font-medium">My Role</div>
                  <div className="text-sm font-bold text-white">{caseStudy.role}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-zinc-400 font-medium">Target Platforms</div>
                  <div className="text-sm font-bold text-white">{caseStudy.platform}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-zinc-400 font-medium">Market &amp; Scale</div>
                  <div className="text-sm font-bold text-white">{caseStudy.region}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-zinc-400 font-medium">Top Business Result</div>
                  <div className="text-sm font-bold text-emerald-400">{caseStudy.metrics[0].value} {caseStudy.metrics[0].label}</div>
                </div>
              </div>
            </div>

            {/* TAB 1: THE BUSINESS CHALLENGE */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4" />
                      <span>The Core Friction</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">Why the Previous Approach Failed</h3>
                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                      {caseStudy.overview.challenge}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                      <Compass className="w-4 h-4" />
                      <span>The Strategic Opportunity</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">How We Turned Friction Into Growth</h3>
                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                      {caseStudy.overview.opportunity}
                    </p>
                  </div>
                </div>

                {/* What I Delivered */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">
                    What Anas Delivered End-to-End:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudy.overview.myRole.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-zinc-200 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Collaboration */}
                <div className="space-y-2.5">
                  <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Design &amp; Testing Tools Used:</div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.overview.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-200 text-xs font-medium border border-zinc-800">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: WHAT USERS NEEDED */}
            {activeTab === 'research' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Target User Persona</div>
                  <p className="text-base text-zinc-100 font-medium">{caseStudy.research.targetAudience}</p>
                </div>

                {/* Plain-Language Insights */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">
                    Key User Insights Discovered:
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {caseStudy.research.keyInsights.map((insight, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <div className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                          <span>Key Insight #{idx + 1}:</span>
                          <span className="text-white">{insight.title}</span>
                        </div>
                        <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                          {insight.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Questions We Solved */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">
                    Core Experience Questions Solved:
                  </h3>
                  <div className="space-y-2">
                    {caseStudy.research.problemStatements.map((hmw, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm sm:text-base text-zinc-100 font-medium flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">Q{idx + 1}:</span>
                        <span>{hmw}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: THE DESIGN SOLUTION */}
            {activeTab === 'solution' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                {/* Evolution Steps */}
                <div className="space-y-6">
                  {caseStudy.designProcess.map((step, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                          Phase {idx + 1}: {step.phase}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {step.title}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2">
                        {step.highlights.map((highlight, hIdx) => (
                          <span key={hIdx} className="px-3 py-1 rounded-md bg-zinc-950 text-xs font-medium text-zinc-200 border border-zinc-800 flex items-center gap-1.5">
                            <span className="text-emerald-400">✓</span>
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Feature Pillars */}
                <div className="space-y-4 pt-4 border-t border-zinc-800">
                  <h3 className="text-lg font-bold text-white">
                    Key Shipped Product Features:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {caseStudy.solution.features.map((feat, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-zinc-800 text-emerald-400 border border-zinc-700">
                          {feat.tag}
                        </span>
                        <div className="text-base font-bold text-white pt-1">{feat.title}</div>
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{feat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: BUSINESS RESULTS & ROI */}
            {activeTab === 'impact' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6">
                  <div className="space-y-2">
                    <div className="text-xs text-emerald-400 uppercase tracking-wider font-bold">
                      PROVEN RETURN ON INVESTMENT (ROI)
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {caseStudy.impact.headline}
                    </h3>
                  </div>

                  {/* Impact Numbers Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
                    {caseStudy.impact.stats.map((stat, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1.5">
                        <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                        <div className="text-sm font-bold text-white">{stat.label}</div>
                        <div className="text-xs text-zinc-300 leading-relaxed">{stat.description}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Lessons */}
                  {caseStudy.impact.learnings && caseStudy.impact.learnings.length > 0 && (
                    <div className="space-y-3 pt-6 border-t border-zinc-800">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        Strategic Takeaways &amp; What Made It Work:
                      </h4>
                      <div className="space-y-2.5">
                        {caseStudy.impact.learnings.map((learning, lIdx) => (
                          <div key={lIdx} className="flex items-start gap-2.5 text-sm text-zinc-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{learning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Client / Partner Quote */}
                  {caseStudy.impact.quote && (
                    <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
                      <p className="text-base text-zinc-100 italic leading-relaxed">
                        &ldquo;{caseStudy.impact.quote.text}&rdquo;
                      </p>
                      <div className="text-xs text-zinc-300 font-medium">
                        <span className="font-bold text-white">{caseStudy.impact.quote.author}</span>
                        <span> — {caseStudy.impact.quote.role}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Modal Bottom Footer with Previous / Next navigation (UX Heuristic 7) */}
          <div className="p-4 sm:p-6 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-2">
              {onSelectAnotherStudy && (
                <>
                  <button
                    onClick={() => {
                      onSelectAnotherStudy(prevStudy);
                      setActiveTab('overview');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous: {prevStudy.title.split('—')[0]}</span>
                  </button>

                  <button
                    onClick={() => {
                      onSelectAnotherStudy(nextStudy);
                      setActiveTab('overview');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold transition-colors"
                  >
                    <span>Next: {nextStudy.title.split('—')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-white text-zinc-950 text-xs sm:text-sm font-bold hover:bg-zinc-100 transition-colors ml-auto shadow-md"
            >
              Done Reading
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
