'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Compass,
  Globe,
  Sparkles,
  Layers,
  Users,
  Target,
  BarChart3,
  Image as ImageIcon,
  AlertCircle,
  Workflow,
  Palette,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { CaseStudy } from '../types/portfolio';
import { CASE_STUDIES } from '../data/projectsData';
import { ProjectPreview } from './projects/ProjectPreview';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface ProjectDetailViewProps {
  project: CaseStudy;
}

type TabKey = 'problem' | 'process' | 'solution' | 'impact';

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('problem');

  // Find next and previous case studies
  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === project.slug || c.id === project.id);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];
  const prevStudy = CASE_STUDIES[(currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: 'problem', label: '1. Problem', icon: <AlertCircle className="size-4" /> },
    { key: 'process', label: '2. Process', icon: <Workflow className="size-4" /> },
    { key: 'solution', label: '3. Solution', icon: <Palette className="size-4" /> },
    { key: 'impact', label: '4. Impact', icon: <TrendingUp className="size-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f4f4f6] flex flex-col selection:bg-emerald-500/30 selection:text-white relative">
      {/* Background ambient light */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-14 space-y-10 relative z-10 w-full">
        {/* Breadcrumb Row */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to All Projects</span>
          </Link>
          <span className="text-xs text-zinc-500 font-mono">
            {project.categoryLabel}
          </span>
        </div>
        {/* Project Header Hero */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-zinc-400 font-medium flex items-center gap-1.5">
              <Globe className="size-3.5 text-zinc-400" />
              <span>{project.region} • {project.year}</span>
            </span>
            {project.isHighImpact && (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                {project.impactBadge || '🔥 Most Downloaded'}
              </span>
            )}
          </div>

          {/* Optional Project Hero Thumbnail Slot (above headline) */}
          {(project.thumbnailUrl || project.imageUrl) && (
            <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 relative">
              <img
                src={project.thumbnailUrl || project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-4xl">
            {project.summary}
          </p>

          {/* 30-Second Executive Takeaway Box */}
          <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-5 shadow-xl">
            <div className="space-y-1">
              <div className="text-xs text-zinc-400 font-medium">My Role</div>
              <div className="text-sm sm:text-base font-bold text-white">{project.role}</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-zinc-400 font-medium">Target Platforms</div>
              <div className="text-sm sm:text-base font-bold text-white">{project.platform}</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-zinc-400 font-medium">Market &amp; Scale</div>
              <div className="text-sm sm:text-base font-bold text-white">{project.region}</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-zinc-400 font-medium">Top Business Result</div>
              <div className="text-sm sm:text-base font-bold text-emerald-400">
                {project.metrics?.[0]?.value} {project.metrics?.[0]?.label}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tabs Bar */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-white text-zinc-950 shadow-md font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* TAB 1: PROBLEM (Friction, Churn, Drop-off, Bounce Rate, Target Persona) */}
          {activeTab === 'problem' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Primary Business Challenge & Friction */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="size-4" />
                  <span>The Client Problem &amp; Core Friction</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Why the Previous Approach Failed
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl">
                  {project.overview.challenge}
                </p>

                {/* Common Friction Drivers: Churn, Low Conversion, High Bounce */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  <div className="p-4 rounded-xl bg-zinc-950/80 border border-rose-500/20 space-y-1">
                    <div className="text-xs font-bold text-rose-400">User Drop-Off &amp; Friction</div>
                    <div className="text-xs text-zinc-400">High cognitive friction during conversion flows leading to checkout/menu drop-off</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950/80 border border-amber-500/20 space-y-1">
                    <div className="text-xs font-bold text-amber-400">Customer &amp; Partner Churn</div>
                    <div className="text-xs text-zinc-400">Lack of retention mechanics and delayed feedback loops causing user churn</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-700/60 space-y-1">
                    <div className="text-xs font-bold text-zinc-300">Operational Delay</div>
                    <div className="text-xs text-zinc-400">Manual, fragmented systems preventing real-time visibility and instant control</div>
                  </div>
                </div>
              </div>

              {/* Target Persona & Audience */}
              <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                  <Users className="size-3.5 text-zinc-400" />
                  <span>Who Was Impacted (Target Persona)</span>
                </div>
                <p className="text-base text-zinc-100 font-medium">
                  {project.research.targetAudience}
                </p>
              </div>

              {/* Key Pain Points Discovered */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Root Friction Points Identified:</span>
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {project.research.keyInsights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2"
                    >
                      <div className="text-sm font-bold text-rose-400 flex items-center gap-2">
                        <span>Friction Point #{idx + 1}:</span>
                        <span className="text-white">{insight.title}</span>
                      </div>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {insight.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem Statements */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Core Problem Questions We Had to Solve:
                </h3>
                <div className="space-y-2">
                  {project.research.problemStatements.map((hmw, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm sm:text-base text-zinc-100 font-medium flex items-start gap-2"
                    >
                      <span className="text-emerald-400 font-bold">Q{idx + 1}:</span>
                      <span>{hmw}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: PROCESS (Process Phases + Tech Stack & Tools + What Anas Delivered) */}
          {activeTab === 'process' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Tech Stack & Toolkit Showcase */}
              <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Cpu className="size-4" />
                  <span>Tech Stack &amp; Design Toolkit</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Tools, Frameworks &amp; Methodologies
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.overview.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3.5 py-1.5 rounded-xl bg-zinc-950 text-emerald-300 text-xs font-semibold border border-emerald-500/20 shadow-sm flex items-center gap-1.5"
                    >
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      <span>{tool}</span>
                    </span>
                  ))}
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-medium border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* End-to-End Process Breakdown */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Workflow className="size-5 text-emerald-400" />
                  <span>The Step-by-Step Design &amp; Research Process:</span>
                </h3>
                <div className="space-y-5">
                  {project.designProcess.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                          Phase {idx + 1}: {step.phase}
                        </span>
                        <span className="text-sm font-bold text-white">{step.title}</span>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2">
                        {step.highlights.map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="px-3 py-1 rounded-md bg-zinc-950 text-xs font-medium text-zinc-200 border border-zinc-800 flex items-center gap-1.5"
                          >
                            <span className="text-emerald-400">✓</span>
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Anas Delivered */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">What Anas Delivered End-to-End:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.overview.myRole.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-zinc-200 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800"
                    >
                      <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: SOLUTION (Visuals, Interface Design & Core Features) */}
          {activeTab === 'solution' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Strategic Solution Opportunity */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Compass className="size-4" />
                  <span>The Strategic Solution</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {project.solution.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {project.solution.description}
                </p>
                <div className="pt-2">
                  <p className="text-xs sm:text-sm text-emerald-300/90 font-medium">
                    {project.overview.opportunity}
                  </p>
                </div>
              </div>

              {/* Visuals & Interactive Design Showcase */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Palette className="size-5 text-emerald-400" />
                    <span>Product Visuals &amp; Interface Design</span>
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">UI Preview</span>
                </div>

                <div className="h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl relative">
                  <ProjectPreview project={project} />
                </div>
              </div>

              {/* Shipped Features Grid */}
              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-white">Core Shipped Features:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.solution.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2"
                    >
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-zinc-800 text-emerald-400 border border-zinc-700">
                        {feat.tag}
                      </span>
                      <div className="text-base font-bold text-white pt-1">{feat.title}</div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: IMPACT (Achieved Statistics, Proven ROI, Learnings, Quote) */}
          {activeTab === 'impact' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6">
                <div className="space-y-2">
                  <div className="text-xs text-emerald-400 uppercase tracking-wider font-bold">
                    PROVEN RETURN ON INVESTMENT (ROI)
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.impact.headline}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Verified business statistics directly solving the client&apos;s initial friction, churn, and conversion bottlenecks.
                  </p>
                </div>

                {/* Achieved Statistics Grid connecting back to the problem */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
                  {project.impact.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-zinc-950 border border-emerald-500/20 space-y-1.5 shadow-lg"
                    >
                      <div className="text-3xl font-extrabold text-emerald-400">{stat.value}</div>
                      <div className="text-sm font-bold text-white">{stat.label}</div>
                      <div className="text-xs text-zinc-300 leading-relaxed">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Strategic Takeaways & Learnings */}
                {project.impact.learnings && project.impact.learnings.length > 0 && (
                  <div className="space-y-3 pt-6 border-t border-zinc-800">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                      Strategic Takeaways &amp; What Made It Work:
                    </h4>
                    <div className="space-y-2.5">
                      {project.impact.learnings.map((learning, lIdx) => (
                        <div key={lIdx} className="flex items-start gap-2.5 text-sm text-zinc-200">
                          <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Client / Partner Quote */}
                {project.impact.quote && (
                  <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
                    <p className="text-base text-zinc-100 italic leading-relaxed">
                      &ldquo;{project.impact.quote.text}&rdquo;
                    </p>
                    <div className="text-xs text-zinc-300 font-medium">
                      <span className="font-bold text-white">{project.impact.quote.author}</span>
                      <span> - {project.impact.quote.role}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </section>

        {/* Next / Previous Project Navigation */}
        <section className="pt-8 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Previous Case Study Card */}
          <Link
            href={`/projects/${prevStudy.slug || prevStudy.id}`}
            className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all flex flex-col justify-between group overflow-hidden"
          >
            <div className="space-y-3">
              <div className="text-xs text-zinc-500 font-semibold flex items-center gap-1.5">
                <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Case Study</span>
              </div>

              {/* 📷 Thumbnail Container on top of headline - Place your image here */}
              <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 relative flex items-center justify-center">
                {prevStudy.thumbnailUrl || prevStudy.imageUrl ? (
                  <img
                    src={prevStudy.thumbnailUrl || prevStudy.imageUrl}
                    alt={prevStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 text-zinc-500 bg-zinc-900/40">
                    <ImageIcon className="size-5 text-zinc-600" />
                    <span className="text-xs font-medium">Add Thumbnail Here</span>
                  </div>
                )}
              </div>

              {/* Headline */}
              <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors pt-1">
                {prevStudy.title}
              </div>
            </div>
          </Link>

          {/* Next Case Study Card */}
          <Link
            href={`/projects/${nextStudy.slug || nextStudy.id}`}
            className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all flex flex-col justify-between group overflow-hidden"
          >
            <div className="space-y-3">
              <div className="text-xs text-zinc-500 font-semibold flex items-center justify-end gap-1.5">
                <span>Next Case Study</span>
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* 📷 Thumbnail Container on top of headline - Place your image here */}
              <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 relative flex items-center justify-center">
                {nextStudy.thumbnailUrl || nextStudy.imageUrl ? (
                  <img
                    src={nextStudy.thumbnailUrl || nextStudy.imageUrl}
                    alt={nextStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 text-zinc-500 bg-zinc-900/40">
                    <ImageIcon className="size-5 text-zinc-600" />
                    <span className="text-xs font-medium">Add Thumbnail Here</span>
                  </div>
                )}
              </div>

              {/* Headline */}
              <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors text-right pt-1">
                {nextStudy.title}
              </div>
            </div>
          </Link>
        </section>

        {/* Bottom CTA */}
        <section className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Interested in working together?</h3>
            <p className="text-sm text-zinc-400">
              Let&apos;s discuss how to bring high-impact UX architecture and visual craft to your product.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
