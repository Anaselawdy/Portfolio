'use client';

import React, { useRef } from 'react';
import { Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCE_LIST, DESIGN_SKILLS } from '../data/portfolioData';
import { gsap, useGSAP } from '../lib/gsap';

export const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header entrance
      gsap.from('.exp-header-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Experience cards scroll reveal
      gsap.from('.exp-card', {
        scrollTrigger: {
          trigger: '.exp-cards-list',
          start: 'top 80%',
          once: true,
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
      });

      // Interactive scrub line linking career milestones
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.exp-cards-list',
              start: 'top 75%',
              end: 'bottom 85%',
              scrub: 1,
            },
          }
        );
      }

      // Skills matrix entrance
      gsap.from('.skills-card', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%',
          once: true,
        },
        y: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="experience" className="py-24 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="exp-header-item text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Career &amp; Experience Leadership
          </h2>
          <p className="exp-header-item text-zinc-200 text-base leading-relaxed">
            4+ years scaling product design, shipping enterprise fintech engines, and architecting multi-brand design systems across the GCC and international markets.
          </p>
        </div>

        {/* Experience Timeline Grid with connecting line */}
        <div className="relative">
          {/* Connecting Line (visible on larger screens) */}
          <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-[2px] bg-zinc-800 pointer-events-none">
            <div
              ref={lineRef}
              className="w-full h-full bg-emerald-400 origin-top"
            />
          </div>

          <div className="exp-cards-list space-y-8 lg:pl-16">
            {EXPERIENCE_LIST.map((exp, idx) => (
              <div
                key={idx}
                className="exp-card relative p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all space-y-6 shadow-lg"
              >
                {/* Milestone Node on larger screens */}
                <div className="hidden lg:flex absolute -left-[4.5rem] top-8 w-6 h-6 rounded-full bg-zinc-950 border-2 border-emerald-400 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-base font-medium text-emerald-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs sm:text-sm text-zinc-300">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-zinc-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-zinc-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed max-w-4xl">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <div className="text-xs text-zinc-300 font-semibold uppercase tracking-wider">
                    Key Achievements:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-100 bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
                      className="px-3 py-1 rounded-md bg-zinc-800 text-xs text-zinc-100 font-medium border border-zinc-700"
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
                className="skills-card p-6 sm:p-7 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4 shadow-lg"
              >
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>{skillGroup.category}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 text-xs sm:text-sm font-medium text-zinc-100 border border-zinc-700"
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
