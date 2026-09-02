'use client';

import React, { useState } from 'react';
import { CheckCircle2, Lightbulb, Compass, Globe, ArrowRight, ArrowLeft } from 'lucide-react';
import { CaseStudy } from '../types/portfolio';
import { CASE_STUDIES } from '../data/portfolioData';
import {
  Dialog,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogPanel,
  DialogFooter,
  DialogClose,
} from './ui/dialog';
import { Tabs, TabsList, TabsTab, TabsPanel } from './ui/tabs';
import { Button } from './ui/button';

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

  if (!caseStudy) return null;

  // Find next and previous case studies for effortless browsing (UX Heuristic 7)
  const currentIndex = CASE_STUDIES.findIndex((c) => c.id === caseStudy.id);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];
  const prevStudy = CASE_STUDIES[(currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];

  return (
    <Dialog
      open={Boolean(caseStudy)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogPopup className="max-w-5xl">
        {/* Modal Header */}
        <DialogHeader>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              {caseStudy.categoryLabel}
            </span>
            <span className="text-xs text-zinc-300 font-medium hidden sm:inline-flex items-center gap-1.5">
              <Globe className="size-3.5 text-zinc-400" />
              <span>{caseStudy.region} • {caseStudy.year}</span>
            </span>
          </div>
          <span className="text-xs text-zinc-400 font-mono hidden md:inline mr-8">
            Press <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300">Esc</kbd> to exit
          </span>
        </DialogHeader>

        {/* Modal Body with coss Tabs */}
        <DialogPanel>
          {/* Title & 30-Second Executive Summary */}
          <div className="space-y-4 max-w-4xl">
            <DialogTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              {caseStudy.title}
            </DialogTitle>

            <DialogDescription className="text-base sm:text-lg text-zinc-200 font-normal leading-relaxed">
              {caseStudy.summary}
            </DialogDescription>

            {/* 30-Second Executive Takeaway Box */}
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

          {/* coss Tabs System */}
          <Tabs
            value={activeTab}
            onValueChange={(val) => setActiveTab(val as ModalTab)}
            className="space-y-8"
          >
            <TabsList variant="line" className="overflow-x-auto w-full justify-start pb-1">
              <TabsTab variant="line" value="overview">
                1. The Business Challenge
              </TabsTab>
              <TabsTab variant="line" value="research">
                2. What Users Needed
              </TabsTab>
              <TabsTab variant="line" value="solution">
                3. The Design Solution
              </TabsTab>
              <TabsTab variant="line" value="impact">
                4. Business Results &amp; ROI
              </TabsTab>
            </TabsList>

            {/* TAB 1: THE BUSINESS CHALLENGE */}
            <TabsPanel value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                    <Lightbulb className="size-4" />
                    <span>The Core Friction</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Why the Previous Approach Failed</h3>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {caseStudy.overview.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <Compass className="size-4" />
                    <span>The Strategic Opportunity</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">How We Turned Friction Into Growth</h3>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {caseStudy.overview.opportunity}
                  </p>
                </div>
              </div>

              {/* What Anas Delivered */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">
                  What Anas Delivered End-to-End:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.overview.myRole.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-zinc-200 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                      <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
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
            </TabsPanel>

            {/* TAB 2: WHAT USERS NEEDED */}
            <TabsPanel value="research" className="space-y-8">
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
            </TabsPanel>

            {/* TAB 3: THE DESIGN SOLUTION */}
            <TabsPanel value="solution" className="space-y-8">
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
            </TabsPanel>

            {/* TAB 4: BUSINESS RESULTS & ROI */}
            <TabsPanel value="impact" className="space-y-8">
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
                          <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
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
                      <span> - {caseStudy.impact.quote.role}</span>
                    </div>
                  </div>
                )}
              </div>
            </TabsPanel>
          </Tabs>
        </DialogPanel>

        {/* Modal Footer with Previous / Next navigation */}
        <DialogFooter>
          <div className="flex items-center gap-2">
            {onSelectAnotherStudy && (
              <>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    onSelectAnotherStudy(prevStudy);
                    setActiveTab('overview');
                  }}
                  className="gap-1.5"
                >
                  <ArrowLeft className="size-3.5" />
                  <span>Previous: {prevStudy.title.split(':')[0]}</span>
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    onSelectAnotherStudy(nextStudy);
                    setActiveTab('overview');
                  }}
                  className="gap-1.5"
                >
                  <span>Next: {nextStudy.title.split(':')[0]}</span>
                  <ArrowRight className="size-3.5" />
                </Button>
              </>
            )}
          </div>

          <DialogClose
            render={
              <Button variant="default" size="sm" onClick={onClose}>
                Done Reading
              </Button>
            }
          />
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};
