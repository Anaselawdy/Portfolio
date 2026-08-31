'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCE_LIST, DESIGN_SKILLS } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER &amp; TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience &amp; Leadership
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            8+ years scaling product design teams, shipping enterprise fintech engines, and architecting multi-brand design systems.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-8">
          {EXPERIENCE_LIST.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-zinc-300">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-4xl">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Key Achievements:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {exp.achievements.map((ach, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-start gap-2 text-xs text-zinc-300 bg-zinc-900/60 p-3 rounded-xl border border-white/5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[11px] font-mono text-zinc-400 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Matrix */}
        <div id="about" className="pt-8 border-t border-white/10 space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Skills &amp; Toolkit Matrix
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              The core disciplines, interaction tools, and design capabilities I bring to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DESIGN_SKILLS.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-4"
              >
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>{skillGroup.category}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800/80 text-xs font-medium text-zinc-200 border border-white/5"
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
