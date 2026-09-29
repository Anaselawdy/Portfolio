'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES, PROJECT_CATEGORIES } from '../data/projectsData';
import { CaseStudy, ProjectCategory } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';

interface CaseStudiesGridProps {
  onSelectCaseStudy?: (study: CaseStudy) => void;
}

export const CaseStudiesGrid: React.FC<CaseStudiesGridProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 border-t border-zinc-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header: Centered */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Selected Product Case Studies
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Explore real-world software shipped across the GCC. Click any case study for the full product breakdown, user research, and verified business outcomes.
          </p>

          {/* Filter Pills in the Center */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-zinc-950 font-bold shadow-md shadow-white/10'
                    : 'bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 3 Columns on desktop, 2 on tablet, 1 on mobile */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <div className="pt-6 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-emerald-500/50 shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-all cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="size-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
