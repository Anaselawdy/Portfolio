'use client';

import React from 'react';
import { MessageSquare, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>PEER RECOMMENDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What product &amp; engineering leaders say.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Collaborating with cross-functional partners to turn complex engineering problems into clean, high-velocity UX.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all shadow-md relative"
            >
              <Quote className="w-8 h-8 text-zinc-700 absolute top-6 right-6 opacity-40" />

              <div className="space-y-4">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                  {testimonial.project}
                </span>

                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-white">
                  {testimonial.avatarText}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
