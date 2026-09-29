'use client';

import React from 'react';
import { QrCode, UtensilsCrossed, Bot, Baby, Store } from 'lucide-react';
import { CaseStudy } from '../../types/portfolio';

interface ProjectPreviewProps {
  project: CaseStudy;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  // If an external image URL or local asset path is configured, display it directly
  if (project.imageUrl) {
    return (
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />
    );
  }

  // Tailored high-craft visual preview mockups
  switch (project.id) {
    case 'qoodz-app':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#052e16] via-[#090a0f] to-[#022c22] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              Loyalty &amp; Rewards
            </span>
            <span className="text-[11px] font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/25 px-2 py-0.5 rounded-md">
              Gold Tier
            </span>
          </div>

          <div className="my-auto mx-auto w-4/5 py-3 px-4 rounded-xl bg-zinc-900/90 border border-emerald-500/30 shadow-xl flex items-center justify-between relative z-10">
            <div className="space-y-0.5">
              <div className="text-[11px] text-zinc-400">QR Instant Scan</div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>5-Week Streak</span>
                <span className="text-amber-400">🔥</span>
              </div>
            </div>
            <div className="size-9 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <QrCode className="size-5" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 relative z-10">
            <span>Saudi Arabia &amp; UAE</span>
            <span className="text-emerald-400 font-semibold">+27% Repeat Orders</span>
          </div>
        </div>
      );

    case 'qoodz-digital-menu':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#271705] via-[#090a0f] to-[#062419] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-0 left-0 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
              Digital Menu UX
            </span>
            <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-md">
              +27% Lift
            </span>
          </div>

          <div className="my-auto mx-auto w-4/5 py-3 px-4 rounded-xl bg-zinc-900/90 border border-amber-500/30 shadow-xl flex items-center justify-between relative z-10">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-white">Truffle Wagyu Burger</div>
              <div className="text-[11px] text-zinc-400">1-Tap Order Add-on</div>
            </div>
            <div className="size-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <UtensilsCrossed className="size-4" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 relative z-10">
            <span>Interactive Photos</span>
            <span className="text-emerald-400 font-semibold">2.5x Saved Dishes</span>
          </div>
        </div>
      );

    case 'pwc-ai-dashboard':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#041c2c] via-[#090a0f] to-[#022c22] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
              AI Productivity
            </span>
            <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-md">
              +3.5h Saved
            </span>
          </div>

          <div className="my-auto mx-auto w-4/5 py-3 px-4 rounded-xl bg-zinc-900/90 border border-cyan-500/30 shadow-xl flex items-center justify-between relative z-10">
            <div className="space-y-0.5">
              <div className="text-[11px] text-zinc-400">Deep Work Shield</div>
              <div className="text-xs font-bold text-white">Focus Mode Active</div>
            </div>
            <div className="size-9 rounded-lg bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Bot className="size-5" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 relative z-10">
            <span>Calendar Sync</span>
            <span className="text-cyan-400 font-semibold">-30% Meetings</span>
          </div>
        </div>
      );

    case 'childroo-tracker':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#240b2e] via-[#090a0f] to-[#0d1f2d] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-0 left-0 w-36 h-36 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[11px] font-semibold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2.5 py-0.5 rounded-full">
              Parenting Tech
            </span>
            <span className="text-[11px] font-semibold text-rose-300 bg-rose-500/15 border border-rose-500/30 px-2 py-0.5 rounded-md">
              4.8 ★ Rating
            </span>
          </div>

          <div className="my-auto mx-auto w-4/5 py-3 px-4 rounded-xl bg-zinc-900/90 border border-purple-500/30 shadow-xl flex items-center justify-between relative z-10">
            <div className="space-y-0.5">
              <div className="text-[11px] text-zinc-400">1-Tap Quick Action</div>
              <div className="text-xs font-bold text-white">Feed &amp; Sleep Logger</div>
            </div>
            <div className="size-9 rounded-lg bg-purple-500/15 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Baby className="size-5" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 relative z-10">
            <span>Calm Night Mode</span>
            <span className="text-emerald-400 font-semibold">&lt; 2s Log Speed</span>
          </div>
        </div>
      );

    case 'qompos-pos-manager':
    default:
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#062419] via-[#090a0f] to-[#022c22] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              POS Operations
            </span>
            <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-md">
              0s Latency
            </span>
          </div>

          <div className="my-auto mx-auto w-4/5 py-3 px-4 rounded-xl bg-zinc-900/90 border border-emerald-500/30 shadow-xl flex items-center justify-between relative z-10">
            <div className="space-y-0.5">
              <div className="text-[11px] text-zinc-400">Net Revenue Live</div>
              <div className="text-xs font-bold text-white">SAR 38,490.00</div>
            </div>
            <div className="size-9 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Store className="size-5" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-400 relative z-10">
            <span>Multi-Branch POS</span>
            <span className="text-emerald-400 font-semibold">15 hrs/wk Saved</span>
          </div>
        </div>
      );
  }
};
