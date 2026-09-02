'use client';

import React from 'react';
import { Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCE_LIST, DESIGN_SKILLS } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Career &amp; Experience Leadership
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            4+ years scaling product design, shipping enterprise fintech engines, and architecting multi-brand design systems across the GCC and international markets.
          </p>
        </div>

        {/* Experience Timeline Grid with connecting line */}
        <div className="relative">
          {/* Vertical Connecting Line on Desktop */}
          <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-emerald-500 via-emerald-500/40 to-transparent pointer-events-none" />

          <div className="space-y-8 lg:pl-16">
            {EXPERIENCE_LIST.map((exp, idx) => (
              <div
                key={idx}
                className="relative p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all space-y-6 shadow-lg"
              >
                {/* Milestone Node on Desktop */}
                <div className="hidden lg:flex absolute -left-[4.5rem] top-8 size-6 rounded-full bg-zinc-950 border-2 border-emerald-400 items-center justify-center shadow-sm">
                  <div className="size-2 rounded-full bg-emerald-400" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-emerald-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs sm:text-sm text-zinc-300 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-4 text-zinc-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="size-4 text-zinc-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed max-w-4xl">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                    Key Achievements:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-100 bg-zinc-950 p-3.5 rounded-xl border border-zinc-800"
                      >
                        <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md bg-zinc-800 text-xs text-zinc-200 font-medium border border-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Matrix */}
        <div id="about" className="pt-10 border-t border-zinc-800 space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Skills &amp; Toolkit Matrix
            </h3>
            <p className="text-sm sm:text-base text-zinc-300">
              The core disciplines, interaction tools, and design capabilities I bring to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DESIGN_SKILLS.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4 shadow-lg"
              >
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Award className="size-4 text-emerald-400" />
                  <span>{skillGroup.category}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 text-xs sm:text-sm font-medium text-zinc-200 border border-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
