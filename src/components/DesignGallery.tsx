'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Sparkles, Eye, X, ChevronLeft, ChevronRight, QrCode, UtensilsCrossed, Bot, Store, Zap } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  project: string;
  category: 'mobile' | 'dashboard' | 'interaction';
  categoryLabel: string;
  platform: string;
  aspectRatio: string;
  description: string;
  uxIntent: string;
  tokens: {
    primaryColor: string;
    secondaryColor: string;
    typography: string;
    borderStyle: string;
  };
  metricsHighlight?: string;
  renderMockup: () => React.ReactNode;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'qoodz-loyalty-home',
    title: 'Qoodz — Gamified Foodie Discovery & Streaks',
    project: 'Qoodz F&B Loyalty',
    category: 'mobile',
    categoryLabel: 'Mobile App (iOS)',
    platform: 'iOS • Arabic-First',
    aspectRatio: 'aspect-[9/16]',
    description: 'Home discovery feed with habit-forming streak loops, tier progression (Gold Foodie), and location-aware restaurant promotions.',
    uxIntent: 'Lower cognitive barrier to discover dining perks while reinforcing daily habits through positive gamified feedback.',
    tokens: {
      primaryColor: '#F59E0B (Amber Gold)',
      secondaryColor: '#10B981 (Emerald)',
      typography: 'Tajawal & SF Pro Display',
      borderStyle: '1px solid rgba(255,255,255,0.12)',
    },
    metricsHighlight: '90% Usability Satisfaction',
    renderMockup: () => (
      <div className="w-full h-full bg-[#0d0f14] p-4 flex flex-col justify-between text-white font-sans select-none">
        {/* iOS Dynamic Island Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/10 pb-2">
          <span>09:41</span>
          <div className="w-16 h-3.5 bg-black rounded-full border border-white/15" />
          <div className="flex items-center gap-1">5G 100%</div>
        </div>

        {/* User Greeting & Points Banner */}
        <div className="space-y-3 my-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] text-zinc-400 font-mono">Welcome back 👋</div>
              <div className="text-sm font-bold text-white">Anas Elawdy</div>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold">
              Gold Tier ✦
            </div>
          </div>

          {/* Gamified Streak Card */}
          <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-zinc-900 border border-amber-500/30 rounded-xl p-3 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-amber-400 flex items-center gap-1">
                <span>5-Week Dining Streak</span>
                <span>🔥</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-300">1,450 Pts</span>
            </div>
            <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
            </div>
            <div className="text-[10px] text-zinc-400 flex items-center justify-between">
              <span>+20% bonus rewards on next meal</span>
              <span className="text-amber-400 font-mono font-semibold">Level 3</span>
            </div>
          </div>
        </div>

        {/* Featured Restaurant Offer Card */}
        <div className="bg-zinc-900/90 border border-white/15 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-xs">🍔</div>
              <div>
                <div className="text-xs font-bold text-white">The Artisan Grill</div>
                <div className="text-[10px] text-zinc-400">Riyadh Front • 1.2 km</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-bold">
              25% OFF
            </span>
          </div>
          <div className="text-[10px] text-zinc-300 bg-black/40 p-2 rounded-lg border border-white/5 font-mono flex items-center justify-between">
            <span>Valid on Signature Truffle Burger</span>
            <span className="text-amber-400 font-bold">Claim →</span>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div className="bg-zinc-950 border border-white/10 rounded-xl p-2 flex items-center justify-around text-zinc-500 text-[10px] font-mono">
          <span className="text-amber-400 font-bold">● Discover</span>
          <span>Map</span>
          <span className="px-2 py-1 bg-amber-400 text-zinc-950 font-bold rounded-lg">QR</span>
          <span>Wallet</span>
          <span>Profile</span>
        </div>
      </div>
    ),
  },
  {
    id: 'qoodz-qr-modal',
    title: 'Qoodz — 1-Tap QR In-Store Redemption & Feedback',
    project: 'Qoodz F&B Loyalty',
    category: 'interaction',
    categoryLabel: 'Micro-Interaction',
    platform: 'Mobile Interaction',
    aspectRatio: 'aspect-[9/16]',
    description: 'Instant dynamic QR verification modal featuring live merchant code validation and celebratory confetti feedback.',
    uxIntent: 'Eliminate cashier confusion and redemption latency with instant feedback, preventing fraud and reducing transaction errors to near zero.',
    tokens: {
      primaryColor: '#10B981 (Success Emerald)',
      secondaryColor: '#06B6D4 (Electric Cyan)',
      typography: 'JetBrains Mono & Inter',
      borderStyle: '1px solid rgba(16,185,129,0.3)',
    },
    metricsHighlight: '0-Sec Verification Feedback',
    renderMockup: () => (
      <div className="w-full h-full bg-[#0a0f0d] p-4 flex flex-col justify-between text-white font-sans select-none relative overflow-hidden">
        {/* Confetti Ambient Accents */}
        <div className="absolute top-6 left-6 text-emerald-400 text-xs">✨</div>
        <div className="absolute top-12 right-8 text-amber-400 text-xs">🎉</div>
        <div className="absolute bottom-16 left-8 text-cyan-400 text-xs">✦</div>

        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Ready to Scan</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-400">Expires in 01:58</span>
        </div>

        {/* QR Code Container */}
        <div className="bg-zinc-900/90 border-2 border-emerald-500/40 rounded-2xl p-5 my-auto flex flex-col items-center space-y-3 shadow-lg shadow-emerald-950/40">
          <div className="w-36 h-36 bg-zinc-950 rounded-xl p-3 border border-white/10 flex flex-col items-center justify-center relative">
            <QrCode className="w-28 h-28 text-emerald-400" />
            <div className="absolute inset-0 bg-emerald-400/5 animate-pulse rounded-xl" />
          </div>

          <div className="text-center space-y-1">
            <div className="text-sm font-bold font-mono tracking-widest text-white">#QDZ-8842-SA</div>
            <div className="text-[10px] text-zinc-400">Show to cashier or scan table tablet</div>
          </div>
        </div>

        {/* Live Merchant Status Pill */}
        <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-2.5 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-1.5 text-emerald-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>25% Discount Applied</span>
          </div>
          <span className="text-white font-bold">-SAR 32.00</span>
        </div>
      </div>
    ),
  },
  {
    id: 'qoodz-digital-menu-screen',
    title: 'Qoodz — Arabic-First Digital Menu Flow',
    project: 'Qoodz Digital Menu',
    category: 'mobile',
    categoryLabel: 'Mobile App (iOS)',
    platform: 'iOS • Arabic / English RTL',
    aspectRatio: 'aspect-[9/16]',
    description: 'High-conversion visual menu preview with categorized sticky tabs, inline discount badges, and instant offer claim triggers.',
    uxIntent: 'Bridge pre-visit exploration with purchasing decisions, giving diners full transparency over pricing and appetizing food photography.',
    tokens: {
      primaryColor: '#10B981 (Emerald)',
      secondaryColor: '#F43F5E (Rose Deal)',
      typography: 'Tajawal Arabic & Inter',
      borderStyle: '1px solid rgba(255,255,255,0.1)',
    },
    metricsHighlight: '+27% Conversion Lift',
    renderMockup: () => (
      <div className="w-full h-full bg-[#0e0e12] p-4 flex flex-col justify-between text-white font-sans select-none">
        {/* Brand Header */}
        <div className="space-y-2 border-b border-white/10 pb-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1">
              <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-400" />
              <span>مطعم الشيف الإيطالي • The Italian Chef</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              4.9 ★
            </span>
          </div>

          {/* Sticky Category Tabs */}
          <div className="flex gap-1.5 overflow-x-auto text-[10px] font-mono pt-1">
            <span className="px-2.5 py-1 rounded-full bg-white text-zinc-950 font-bold">المقبلات (Starters)</span>
            <span className="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300">الرئيسية (Mains)</span>
            <span className="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300">الحلويات (Desserts)</span>
          </div>
        </div>

        {/* Menu Items Showcase */}
        <div className="space-y-2.5 my-2">
          <div className="bg-zinc-900/90 border border-white/15 rounded-xl p-3 space-y-1.5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-bold text-white">Truffle Tagliatelle Pasta</div>
                <div className="text-[10px] text-zinc-400">Fresh handmade pasta with black truffle cream</div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded font-bold">
                25% OFF
              </span>
            </div>
            <div className="flex items-center justify-between pt-1 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">52 SAR</span>
                <span className="text-zinc-500 line-through text-[10px]">70 SAR</span>
              </div>
              <span className="text-emerald-400 text-[11px] font-bold">احصل على العرض ↗</span>
            </div>
          </div>

          <div className="bg-zinc-900/90 border border-white/15 rounded-xl p-3 space-y-1.5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-bold text-white">Burrata &amp; Heirloom Tomato</div>
                <div className="text-[10px] text-zinc-400">Pesto emulsion, balsamic glaze &amp; basil</div>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/15 px-1.5 py-0.5 rounded font-bold">
                BOGO 1+1
              </span>
            </div>
            <div className="flex items-center justify-between pt-1 text-xs font-mono">
              <span className="font-bold text-white">38 SAR</span>
              <span className="text-cyan-400 text-[11px] font-bold">Claim Offer ↗</span>
            </div>
          </div>
        </div>

        {/* Footer Retention Pill */}
        <div className="bg-zinc-950 p-2 rounded-xl border border-white/10 text-center text-[10px] text-zinc-400 font-mono">
          2.5x more saved dishes with visual menu cards
        </div>
      </div>
    ),
  },
  {
    id: 'pwc-ai-focus-hud',
    title: 'PWC AI — Autonomous Focus Shield & Deep Work HUD',
    project: 'PWC AI Management',
    category: 'dashboard',
    categoryLabel: 'Enterprise Dashboard',
    platform: 'Web Desktop & HUD',
    aspectRatio: 'aspect-[16/10]',
    description: 'Real-time focus time protection dashboard with intelligent calendar deflection and automated task triage queue.',
    uxIntent: 'Protect knowledge worker mental bandwidth from meeting fragmentation without creating calendar synchronization conflicts.',
    tokens: {
      primaryColor: '#06B6D4 (Electric Cyan)',
      secondaryColor: '#10B981 (Emerald Shield)',
      typography: 'Inter & JetBrains Mono',
      borderStyle: '1px solid rgba(6,182,212,0.25)',
    },
    metricsHighlight: '+3.5 hrs Focus Gained / Week',
    renderMockup: () => (
      <div className="w-full h-full bg-[#080b10] p-4 flex flex-col justify-between text-white font-sans select-none">
        {/* Top Cockpit Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold font-mono">PWC AI • Autonomous Workday Shield</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400 font-bold">SHIELD ACTIVE (3h 30m)</span>
          </div>
        </div>

        {/* Main Grid: Focus vs Meetings vs AI Queue */}
        <div className="grid grid-cols-3 gap-3 my-2">
          {/* Col 1: Focus Protection HUD */}
          <div className="bg-zinc-900/90 border border-cyan-500/30 rounded-xl p-3 space-y-1.5">
            <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Focus Window</div>
            <div className="text-base font-bold font-mono text-white">09:00 - 12:30</div>
            <div className="text-[10px] text-zinc-400">4 non-urgent invites redirected to async digest</div>
          </div>

          {/* Col 2: Meeting Overload Radar */}
          <div className="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-3 space-y-1.5">
            <div className="text-[10px] font-mono text-amber-400 uppercase font-semibold">Meeting Balance</div>
            <div className="text-base font-bold font-mono text-amber-400">2 Syncs (45m)</div>
            <div className="text-[10px] text-emerald-400 font-mono">-30% Fatigue drop vs avg</div>
          </div>

          {/* Col 3: Automated Task Triage */}
          <div className="bg-zinc-900/90 border border-emerald-500/30 rounded-xl p-3 space-y-1.5">
            <div className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">AI Task Queue</div>
            <div className="text-base font-bold font-mono text-white">8 Auto-Prioritized</div>
            <div className="text-[10px] text-zinc-400 font-mono">100% deadlines met</div>
          </div>
        </div>

        {/* Integration Strip */}
        <div className="bg-zinc-950 border border-white/10 rounded-xl p-2 flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <span>Synced with Google Calendar &amp; Microsoft Outlook</span>
          <span className="text-emerald-400 font-bold">Real-time Bi-directional Sync ✓</span>
        </div>
      </div>
    ),
  },
  {
    id: 'childroo-quick-action-screen',
    title: 'ChildRoo — 1-Tap "Quick Action" Routine Logger',
    project: 'ChildRoo Parenting App',
    category: 'mobile',
    categoryLabel: 'Mobile App (iOS)',
    platform: 'iOS • Health UI',
    aspectRatio: 'aspect-[9/16]',
    description: 'Frictionless routine logging component pinned to the home screen, allowing sleep-deprived parents to mark feeding and sleep in a single tap.',
    uxIntent: 'Reduce cognitive friction and screen navigation time during late-night parenting moments where speed and calm are vital.',
    tokens: {
      primaryColor: '#FB7185 (Soft Rose)',
      secondaryColor: '#38BDF8 (Calm Sky)',
      typography: 'Rounded SF Pro & Inter',
      borderStyle: '1px solid rgba(251,113,133,0.25)',
    },
    metricsHighlight: '< 2s Routine Logging Time',
    renderMockup: () => (
      <div className="w-full h-full bg-[#110e14] p-4 flex flex-col justify-between text-white font-sans select-none">
        {/* Child Profile Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-xs">👶</div>
            <div>
              <div className="text-xs font-bold text-white">Baby Leo (3 Months)</div>
              <div className="text-[10px] text-zinc-400">Growth Plan: Week 12</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
            Calm Mode
          </span>
        </div>

        {/* 1-Tap Quick Action Component */}
        <div className="bg-zinc-900/90 border border-rose-500/30 rounded-2xl p-4 my-auto space-y-3 shadow-lg shadow-rose-950/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white">Today&apos;s Routine Status</span>
            <span className="text-[10px] font-mono text-emerald-400 font-bold">3 of 4 Completed</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <div className="bg-zinc-950 p-2.5 rounded-xl border border-white/5 space-y-0.5">
              <div className="text-zinc-500 text-[9px]">Last Feed</div>
              <div className="text-white font-bold text-xs">2h 15m ago</div>
              <div className="text-rose-400 text-[9px]">120ml Breastmilk</div>
            </div>
            <div className="bg-zinc-950 p-2.5 rounded-xl border border-white/5 space-y-0.5">
              <div className="text-zinc-500 text-[9px]">Sleep Window</div>
              <div className="text-cyan-400 font-bold text-xs">1h 40m Nap</div>
              <div className="text-zinc-400 text-[9px]">Woke 30m ago</div>
            </div>
            <div className="bg-zinc-950 p-2.5 rounded-xl border border-white/5 space-y-0.5">
              <div className="text-zinc-500 text-[9px]">Diaper</div>
              <div className="text-emerald-400 font-bold text-xs">Clean ✓</div>
              <div className="text-zinc-400 text-[9px]">Logged 1h ago</div>
            </div>
          </div>

          {/* Quick Action Button */}
          <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-500/30 to-pink-500/20 border border-rose-400/40 text-xs font-bold text-rose-200 flex items-center justify-center gap-1.5 shadow-sm">
            <span>+ Continue Next Routine (Nap)</span>
          </button>
        </div>

        {/* Milestone Tip */}
        <div className="bg-zinc-950 p-2.5 rounded-xl border border-white/10 text-[10px] text-zinc-400 flex items-center justify-between font-mono">
          <span>Milestone: Smiles at familiar voices</span>
          <span className="text-rose-400 font-bold">Achieved ✓</span>
        </div>
      </div>
    ),
  },
  {
    id: 'qompos-hero-revenue-card',
    title: 'Qompos — "At-A-Glance" Hero Net Revenue Cockpit',
    project: 'Qompos POS Manager',
    category: 'dashboard',
    categoryLabel: 'POS Operations',
    platform: 'Mobile Dashboard',
    aspectRatio: 'aspect-[9/16]',
    description: 'High-contrast decision-making dashboard for restaurant owners delivering instant operational reassurance with 0-second data latency.',
    uxIntent: 'Give busy restaurant operators immediate financial peace of mind in 2 seconds without navigating dense multi-layer menus.',
    tokens: {
      primaryColor: '#10B981 (Growth Emerald)',
      secondaryColor: '#F59E0B (Sales Amber)',
      typography: 'JetBrains Mono & Inter',
      borderStyle: '1px solid rgba(255,255,255,0.15)',
    },
    metricsHighlight: '0s Data Latency • 100% Remote',
    renderMockup: () => (
      <div className="w-full h-full bg-[#0a0c10] p-4 flex flex-col justify-between text-white font-sans select-none">
        {/* Branch Selector Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1.5">
            <Store className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white">Qompos Manager • Branch 01 (Riyadh)</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Live POS Sync
          </span>
        </div>

        {/* Hero Revenue Card */}
        <div className="bg-zinc-900/90 border border-white/20 rounded-2xl p-4 my-auto space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-zinc-400">Net Revenue Today</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
              ↑ +18.4% vs Yesterday
            </span>
          </div>

          <div className="text-2xl font-bold font-mono text-white tracking-tight">
            SAR 38,490.00
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[10px] font-mono">
            <div className="bg-zinc-950 p-2 rounded-lg border border-white/5">
              <div className="text-zinc-500">Completed Orders</div>
              <div className="text-white font-bold text-xs">342 Tickets</div>
            </div>
            <div className="bg-zinc-950 p-2 rounded-lg border border-white/5">
              <div className="text-zinc-500">Average Order Value</div>
              <div className="text-emerald-400 font-bold text-xs">SAR 112.50</div>
            </div>
          </div>
        </div>

        {/* Operational Reassurance */}
        <div className="bg-zinc-950 p-2.5 rounded-xl border border-white/10 text-[10px] text-zinc-400 flex items-center justify-between font-mono">
          <span>Physical store visit required:</span>
          <span className="text-emerald-400 font-bold">0 visits (100% Remote)</span>
        </div>
      </div>
    ),
  },
  {
    id: 'qompos-hourly-radar',
    title: 'Qompos — Hourly Peak Sales Radar & Staff Shift Planner',
    project: 'Qompos POS Manager',
    category: 'interaction',
    categoryLabel: 'Operations Analytics',
    platform: 'Mobile Analytics UI',
    aspectRatio: 'aspect-[9/16]',
    description: 'Hourly revenue distribution chart enabling restaurant managers to optimize staff shift allocations remotely.',
    uxIntent: 'Convert raw point-of-sale transactions into actionable staffing and kitchen prep decisions throughout rush hours.',
    tokens: {
      primaryColor: '#F59E0B (Peak Amber)',
      secondaryColor: '#10B981 (Emerald)',
      typography: 'JetBrains Mono',
      borderStyle: '1px solid rgba(245,158,11,0.2)',
    },
    metricsHighlight: 'Saved 10-15 hrs/week per Manager',
    renderMockup: () => (
      <div className="w-full h-full bg-[#0c0d12] p-4 flex flex-col justify-between text-white font-sans select-none">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-xs font-bold text-white font-mono">Peak Hour Distribution Radar</span>
          <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
            Lunch &amp; Dinner Rush
          </span>
        </div>

        {/* Hourly Chart Mockup */}
        <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-3 my-auto space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-zinc-400">Peak Hour: 01:00 PM (SAR 8.4k)</span>
            <span className="text-emerald-400 font-bold">Optimal Staff: 6</span>
          </div>

          {/* Mini Bar Graph */}
          <div className="flex items-end justify-between h-28 pt-4 pb-2 border-b border-white/10 px-1">
            {[
              { h: '10am', val: '20%', active: false },
              { h: '12pm', val: '65%', active: false },
              { h: '1pm', val: '95%', active: true },
              { h: '3pm', val: '35%', active: false },
              { h: '6pm', val: '50%', active: false },
              { h: '9pm', val: '90%', active: true },
              { h: '11pm', val: '40%', active: false },
            ].map((bar, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1.5">
                <div
                  style={{ height: bar.val }}
                  className={`w-6 rounded-t-md transition-all ${
                    bar.active
                      ? 'bg-gradient-to-t from-amber-500 to-amber-300 shadow-sm shadow-amber-500/50'
                      : 'bg-zinc-800'
                  }`}
                />
                <span className="text-[9px] font-mono text-zinc-500">{bar.h}</span>
              </div>
            ))}
          </div>

          <div className="text-[10px] text-zinc-400 font-mono flex items-center justify-between">
            <span>Staff Shift Recommendation:</span>
            <span className="text-amber-400 font-bold">+2 staff from 12-2pm</span>
          </div>
        </div>

        {/* Footer Metric */}
        <div className="bg-zinc-950 p-2 rounded-xl border border-white/10 text-center text-[10px] text-zinc-400 font-mono">
          Replaced chaotic WhatsApp end-of-day reports
        </div>
      </div>
    ),
  },
  {
    id: 'qoodz-merchant-portal',
    title: 'Qoodz — Merchant Offer & Multi-Branch Command Portal',
    project: 'Qoodz Merchant',
    category: 'dashboard',
    categoryLabel: 'Enterprise Web Portal',
    platform: 'Web Desktop SaaS',
    aspectRatio: 'aspect-[16/10]',
    description: 'High-density web portal empowering F&B partners to create time-sensitive promotions, review branch sales, and manage brand stories.',
    uxIntent: 'Give non-technical restaurant managers the power to launch, pause, and analyze promotional campaigns in under 60 seconds.',
    tokens: {
      primaryColor: '#F59E0B (Amber Gold)',
      secondaryColor: '#06B6D4 (Cyan)',
      typography: 'Inter & Tajawal Arabic',
      borderStyle: '1px solid rgba(255,255,255,0.12)',
    },
    metricsHighlight: '38 Active Partner Outlets',
    renderMockup: () => (
      <div className="w-full h-full bg-[#0a0c10] p-4 flex flex-col justify-between text-white font-sans select-none">
        {/* Top Navbar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">Q</div>
            <span className="text-xs font-bold font-mono">Qoodz Merchant Partner Cockpit</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Riyadh &amp; Dubai Branches</span>
            <span className="text-emerald-400 font-bold">+ New Offer</span>
          </div>
        </div>

        {/* High Density Table & Stats */}
        <div className="grid grid-cols-4 gap-2.5 my-2">
          <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-2.5 space-y-1">
            <div className="text-[10px] text-zinc-500 font-mono">Redemptions</div>
            <div className="text-base font-bold font-mono text-white">1,248</div>
            <div className="text-[9px] text-emerald-400 font-mono">↑ +24% this week</div>
          </div>
          <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-2.5 space-y-1">
            <div className="text-[10px] text-zinc-500 font-mono">Active Deals</div>
            <div className="text-base font-bold font-mono text-amber-400">6 Offers</div>
            <div className="text-[9px] text-zinc-400 font-mono">2 Flash Promos</div>
          </div>
          <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-2.5 space-y-1">
            <div className="text-[10px] text-zinc-500 font-mono">Customer Rating</div>
            <div className="text-base font-bold font-mono text-white">4.92 ★</div>
            <div className="text-[9px] text-emerald-400 font-mono">98% Positive</div>
          </div>
          <div className="bg-zinc-900/90 border border-white/10 rounded-xl p-2.5 space-y-1">
            <div className="text-[10px] text-zinc-500 font-mono">Loyalty Footfall</div>
            <div className="text-base font-bold font-mono text-cyan-400">+38%</div>
            <div className="text-[9px] text-zinc-400 font-mono">Repeat Diners</div>
          </div>
        </div>

        {/* Live Promotions Strip */}
        <div className="bg-zinc-950 border border-white/10 rounded-xl p-2 flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <span>Active Promotion: &ldquo;Weekend Brunch 25% Off&rdquo;</span>
          <span className="text-emerald-400 font-bold">Running (Ends in 2d 14h)</span>
        </div>
      </div>
    ),
  },
];

export const DesignGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mobile' | 'dashboard' | 'interaction'>('all');
  const [selectedScreen, setSelectedScreen] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openPrevious = () => {
    if (!selectedScreen) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === selectedScreen.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedScreen(GALLERY_ITEMS[prevIndex]);
  };

  const openNext = () => {
    if (!selectedScreen) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === selectedScreen.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedScreen(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <section id="gallery" className="py-24 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <span>DESIGN CRAFT &amp; SCREEN SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Interactive Screen &amp; UI Gallery
            </h2>
            <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
              Explore individual mobile screens, enterprise dashboards, and micro-interactions designed for Qoodz, PWC AI, ChildRoo, and Qompos. Click any screen to open the design inspector.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all' as const, label: 'All Designs (8)' },
              { id: 'mobile' as const, label: 'Mobile Apps' },
              { id: 'dashboard' as const, label: 'Dashboards' },
              { id: 'interaction' as const, label: 'Micro-UX' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-white text-zinc-950 shadow-md'
                    : 'bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedScreen(item)}
                className="group cursor-pointer rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Mockup Container */}
                <div className="h-72 w-full relative overflow-hidden bg-black/40">
                  {item.renderMockup()}
                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-xs">
                    <span className="px-3.5 py-2 rounded-full bg-white text-zinc-950 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Design</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-3 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-cyan-400 font-semibold">{item.categoryLabel}</span>
                    <span className="text-zinc-500">{item.platform}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {item.metricsHighlight && (
                    <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-emerald-400 font-semibold">
                      ✦ {item.metricsHighlight}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedScreen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedScreen(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-4xl max-h-[92vh] bg-[#0c0d12] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 bg-zinc-900/80 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase">
                    {selectedScreen.categoryLabel}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                    {selectedScreen.project} • {selectedScreen.platform}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={openPrevious}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title="Previous Screen (Left Arrow)"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={openNext}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title="Next Screen (Right Arrow)"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedScreen(null)}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left: Rendered Screen Mockup (6 cols) */}
                <div className="md:col-span-6 flex flex-col items-center justify-center bg-black/40 rounded-2xl border border-white/10 p-4 min-h-[380px]">
                  <div className="w-full max-w-sm h-96 rounded-xl overflow-hidden shadow-2xl border border-white/15">
                    {selectedScreen.renderMockup()}
                  </div>
                </div>

                {/* Right: Design Rationale & Tokens (6 cols) */}
                <div className="md:col-span-6 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                        Screen Breakdown
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {selectedScreen.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {selectedScreen.description}
                      </p>
                    </div>

                    {/* UX Intent */}
                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-1.5">
                      <div className="text-xs font-mono text-cyan-400 uppercase font-semibold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        <span>UX Problem Solved &amp; Intent</span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedScreen.uxIntent}
                      </p>
                    </div>

                    {/* Design Tokens Matrix */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-zinc-400 uppercase">Design Tokens</div>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/5">
                          <div className="text-zinc-500 text-[10px]">Primary Palette</div>
                          <div className="text-white font-semibold text-[11px] truncate">{selectedScreen.tokens.primaryColor}</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/5">
                          <div className="text-zinc-500 text-[10px]">Secondary Accent</div>
                          <div className="text-white font-semibold text-[11px] truncate">{selectedScreen.tokens.secondaryColor}</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/5">
                          <div className="text-zinc-500 text-[10px]">Typography System</div>
                          <div className="text-white font-semibold text-[11px] truncate">{selectedScreen.tokens.typography}</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/5">
                          <div className="text-zinc-500 text-[10px]">Stroke &amp; Elevation</div>
                          <div className="text-white font-semibold text-[11px] truncate">{selectedScreen.tokens.borderStyle}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      ✦ {selectedScreen.metricsHighlight}
                    </div>
                    <button
                      onClick={() => setSelectedScreen(null)}
                      className="px-4 py-2 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors"
                    >
                      Close Inspector
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
