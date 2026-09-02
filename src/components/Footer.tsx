'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { smoothScrollTo } from '../lib/gsap';

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
    smoothScrollTo(0, 0, 1.2);
  };

  return (
    <footer className="border-t border-zinc-800 bg-[#090a0f] py-16 text-zinc-300 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300 font-medium text-sm">{PERSONAL_INFO.title}</span>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Partnering with ambitious founders and engineering teams across Saudi Arabia, the UAE, and global markets to build intuitive, revenue-generating digital products.
            </p>
          </div>

          {/* Time & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            {currentTime && (
              <div className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Dubai (UTC+4): {currentTime}</span>
              </div>
            )}

            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 transition-colors flex items-center gap-2 text-xs font-semibold"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Nav Links & Copyright */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed &amp; Crafted for High Business Impact.
          </div>

          <div className="flex flex-wrap items-center gap-6 text-zinc-300">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-medium"
            >
              GitHub Source
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#work', 70, 1.2);
              }}
              className="hover:text-white transition-colors font-medium cursor-pointer"
            >
              Case Studies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
