'use client';

import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <span>PEER RECOMMENDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            What engineering leaders &amp; founders say about working together.
          </h2>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            Collaborating seamlessly with product managers, developers, and founders to translate complex business requirements into fast, revenue-generating software.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-emerald-400">
                  Project: {testimonial.project}
                </span>

                <p className="text-sm sm:text-base text-zinc-100 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center font-bold text-sm text-white shrink-0">
                  {testimonial.avatarText}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-zinc-300 font-medium">
                    {testimonial.role} • <span className="text-emerald-400 font-semibold">{testimonial.company}</span>
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
