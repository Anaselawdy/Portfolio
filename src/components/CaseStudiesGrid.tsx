'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, QrCode, UtensilsCrossed, Bot, Baby, Store, Check, ArrowRight, Eye } from 'lucide-react';
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
        y: 24,
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
        y: 32,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
      });
    },
    { scope: sectionRef, dependencies: [selectedCategory] }
  );

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Shipped Work' },
    { id: 'fb-loyalty', label: 'F&B & Loyalty' },
    { id: 'pos-enterprise', label: 'POS & Analytics' },
    { id: 'ai-dashboard', label: 'AI & Productivity' },
    { id: 'mobile-health', label: 'Mobile & Health' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) => p.category === selectedCategory);

  // Scannable 3-part non-tech story for each project
  const getProjectStory = (projectId: string) => {
    switch (projectId) {
      case 'qoodz-app':
        return {
          hook: 'How we replaced messy paper discount vouchers with a gamified dining rewards app across Saudi Arabia and the UAE.',
          problem: 'Restaurants suffered high customer churn while diners lost paper discount cards.',
          solution: 'Designed a fast mobile app with 1-tap QR code redemption and addictive dining reward streaks.',
          outcome: '+27% repeat orders, 90% positive rating, 0s checkout delay.',
          badge: 'Featured Flagship Project',
        };
      case 'qoodz-digital-menu':
        return {
          hook: 'Transforming static PDF menus into interactive, photo-rich ordering experiences that drive bigger checks.',
          problem: 'Diners abandoned clunky PDF menus in under 20 seconds without ordering signature dishes.',
          solution: 'Mobile-first visual menu with mouthwatering photography, one-tap offers, and clear dietary filters.',
          outcome: '+27% order conversion, +43% time on menu, 2.5x more saved dishes.',
          badge: 'Conversion Optimization',
        };
      case 'pwc-ai-dashboard':
        return {
          hook: 'Protecting busy executives from calendar fatigue with automated AI time-blocking and smart task triage.',
          problem: 'Knowledge workers lost 40% of their work week to low-value meetings with zero deep focus time.',
          solution: 'An intelligent cockpit that predicts overload, creates 3-hour focus shields, and prioritizes urgent deliverables.',
          outcome: '-30% meeting overload, 100% on-time critical deliveries, automated Google & Outlook sync.',
          badge: 'Enterprise AI & Productivity',
        };
      case 'childroo-tracker':
        return {
          hook: 'A calming, 1-tap daily routine app built for sleep-deprived new parents holding a crying baby at 3 AM.',
          problem: 'Existing baby apps were cluttered with complex forms that overwhelmed exhausted parents.',
          solution: 'Soothing dark-mode interface where feeding, sleep, and diapers are logged in just 1 tap.',
          outcome: '4.8 App Store rating, 82% 30-day user retention, recognized for calming aesthetic.',
          badge: 'Mobile Health & Wellness',
        };
      case 'qompos-pos-manager':
      default:
        return {
          hook: 'Empowering restaurant & retail owners to track live revenue and staff performance across 10+ branches on their phone.',
          problem: 'Store owners had to call each branch individually or wait until midnight for sales summaries.',
          solution: 'High-density mobile command center showing real-time revenue, low-stock warnings, and cashier speed with 0-second latency.',
          outcome: '15 hours saved per manager each week, 100% live inventory visibility across branches.',
          badge: 'POS Operations & Analytics',
        };
    }
  };

  const renderVisualMockup = (projectId: string) => {
    switch (projectId) {
      case 'qoodz-app':
        return (
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between rounded-t-2xl border-b border-zinc-800">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-xs font-semibold text-white">Qoodz Diner App</span>
              </div>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
                Live in KSA &amp; UAE
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 my-auto py-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs text-zinc-300">Diner Status</div>
                <div className="text-sm font-bold text-amber-300">Gold Tier</div>
                <div className="text-xs text-zinc-100">1,450 Pts</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs text-zinc-300">Active Streak</div>
                <div className="text-sm font-bold text-emerald-400">5 Weeks 🔥</div>
                <div className="text-xs text-zinc-100">+20% Perk</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs text-zinc-300">In-Store QR</div>
                <div className="text-sm font-bold text-white flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-cyan-400 inline" />
                  <span>Scan</span>
                </div>
                <div className="text-xs text-emerald-400 font-medium">Instant</div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 flex items-center justify-between text-xs text-zinc-200">
              <span>Merchant Console: 38 Active Partner Restaurants</span>
              <span className="text-emerald-400 font-bold">100% Operational</span>
            </div>
          </div>
        );

      case 'qoodz-digital-menu':
        return (
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between rounded-t-2xl border-b border-zinc-800">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-white">Smart Visual Menu</span>
              </div>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                +27% Conversion Lift
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto py-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Truffle Wagyu Burger</span>
                  <span className="text-xs text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded font-semibold">25% OFF</span>
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
                  <span className="text-xs text-cyan-300 bg-cyan-500/15 px-1.5 py-0.5 rounded font-semibold">BOGO 1+1</span>
                </div>
                <div className="text-xs text-zinc-300">Ceremonial grade matcha &amp; cold foam</div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-white font-bold">24 SAR</span>
                  <span className="text-emerald-400 font-semibold">Claim Offer →</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 flex items-center justify-between text-xs text-zinc-200">
              <span>Average Engagement: 1m40s (+43% time on menu)</span>
              <span className="text-emerald-400 font-bold">2.5x Saved Dishes</span>
            </div>
          </div>
        );

      case 'pwc-ai-dashboard':
        return (
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between rounded-t-2xl border-b border-zinc-800">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-white">AI Executive Calendar &amp; Tasks</span>
              </div>
              <span className="text-xs font-semibold text-cyan-300 bg-cyan-500/15 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                Focus Shield Active
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 my-auto py-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs font-semibold text-emerald-400">Focus Shield</div>
                <div className="text-xs font-bold text-white">09:00 - 12:30</div>
                <div className="text-xs text-zinc-200">0 Distractions</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs font-semibold text-amber-300">Meetings</div>
                <div className="text-xs font-bold text-white">2 Syncs (45m)</div>
                <div className="text-xs text-emerald-400">-30% Overload</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1">
                <div className="text-xs font-semibold text-cyan-300">Task Queue</div>
                <div className="text-xs font-bold text-white">8 Triaged</div>
                <div className="text-xs text-zinc-200">100% On-Time</div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 flex items-center justify-between text-xs text-zinc-200">
              <span>Google Calendar &amp; Outlook Live Sync</span>
              <span className="text-emerald-400 font-bold">Connected ✓</span>
            </div>
          </div>
        );

      case 'childroo-tracker':
        return (
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between rounded-t-2xl border-b border-zinc-800">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Baby className="w-4 h-4 text-rose-400" />
                <span className="text-xs font-semibold text-white">ChildRoo Routine Tracker</span>
              </div>
              <span className="text-xs font-semibold text-rose-300 bg-rose-500/15 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                1-Tap Quick Action
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 my-auto py-2 text-center">
              <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                <div className="text-xs text-zinc-300">Last Feeding</div>
                <div className="text-white font-bold text-xs pt-1">2h 15m ago</div>
              </div>
              <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                <div className="text-xs text-zinc-300">Sleep Window</div>
                <div className="text-cyan-300 font-bold text-xs pt-1">1h 40m nap</div>
              </div>
              <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                <div className="text-xs text-zinc-300">Diaper Status</div>
                <div className="text-rose-300 font-bold text-xs pt-1">Clean ✓</div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 flex items-center justify-between text-xs text-zinc-200">
              <span>App Store Community Rating</span>
              <span className="text-white font-bold">4.8 ★ (Calming Design)</span>
            </div>
          </div>
        );

      case 'qompos-pos-manager':
      default:
        return (
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col justify-between rounded-t-2xl border-b border-zinc-800">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-white">Qompos POS Multi-Branch Manager</span>
              </div>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                0s Data Latency
              </span>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 my-auto space-y-1.5">
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span>Total Net Revenue Today</span>
                <span className="text-emerald-400 font-bold">+18.4% vs Yesterday</span>
              </div>
              <div className="text-2xl font-bold text-white">SAR 38,490.00</div>
              <div className="flex items-center justify-between text-xs text-zinc-300 pt-1 border-t border-zinc-800">
                <span>342 Orders Processed</span>
                <span className="text-emerald-400 font-semibold">10 Branches Online</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 flex items-center justify-between text-xs text-zinc-200">
              <span>Manager Time Saved Each Week</span>
              <span className="text-emerald-400 font-bold">10-15 hrs/week</span>
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
            <p className="cs-header-item text-zinc-200 text-base sm:text-lg leading-relaxed">
              Clear, real-world case studies designed for founders, executives, and hiring managers. Every project highlights the business problem, what I designed, and the measurable outcome.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="cs-header-item flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-white text-zinc-950 shadow-md'
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
            {filteredProjects.map((project) => {
              const story = getProjectStory(project.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  onClick={() => onSelectCaseStudy(project)}
                  className="cs-card-item group cursor-pointer rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl"
                >
                  {/* Visual Preview Container */}
                  <div className="h-64 sm:h-72 w-full relative group-hover:brightness-105 transition-all">
                    {renderVisualMockup(project.id)}
                  </div>

                  {/* Scannable Content Body for Non-Tech Stakeholders */}
                  <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between bg-zinc-900">
                    <div className="space-y-4">
                      {/* Category & Region */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider">
                          {project.categoryLabel}
                        </span>
                        <span className="text-zinc-300 font-medium">{project.region}</span>
                      </div>

                      {/* Main Title & Hook */}
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-2" />
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-100 font-medium leading-relaxed">
                          {story.hook}
                        </p>
                      </div>

                      {/* 3 Non-Tech Scannable Takeaways (Problem -> Solution -> Outcome) */}
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2.5 text-xs sm:text-sm">
                        <div className="flex items-start gap-2 text-zinc-200">
                          <span className="font-bold text-rose-400 shrink-0">The Problem:</span>
                          <span>{story.problem}</span>
                        </div>
                        <div className="flex items-start gap-2 text-zinc-200">
                          <span className="font-bold text-cyan-400 shrink-0">What I Built:</span>
                          <span>{story.solution}</span>
                        </div>
                        <div className="flex items-start gap-2 text-zinc-200">
                          <span className="font-bold text-emerald-400 shrink-0">Key Result:</span>
                          <span className="font-semibold text-white">{story.outcome}</span>
                        </div>
                      </div>
                    </div>

                    {/* Metrics Footer & Read Case Study Button */}
                    <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {project.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx} className="space-y-0.5">
                            <div className="text-base sm:text-lg font-bold text-white">{m.value}</div>
                            <div className="text-xs text-zinc-300 font-medium">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
