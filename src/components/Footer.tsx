'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080b] py-16 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-base tracking-tight">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400 font-normal text-xs">{PERSONAL_INFO.title}</span>
            </div>
            <p className="text-zinc-500 text-xs max-w-md">
              Designed with obsessive craft, systems thinking, and zero slop. Powered by Next.js App Router and React 19.
            </p>
          </div>

          {/* Time & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            {currentTime && (
              <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 font-mono text-[11px] text-zinc-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Dubai (UTC+4): {currentTime}</span>
              </div>
            )}

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px]">Back to top</span>
            </button>
          </div>
        </div>

        {/* Bottom Nav Links & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Anas Elawdy. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Anaselawdy/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Source on GitHub
            </a>
            <a
              href="#work"
              className="hover:text-zinc-300 transition-colors"
            >
              Selected Work
            </a>
            <a
              href="#contact"
              className="hover:text-zinc-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
