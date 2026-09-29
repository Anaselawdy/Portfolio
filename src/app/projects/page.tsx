'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES, PROJECT_CATEGORIES } from '../../data/projectsData';
import { ProjectCategory } from '../../types/portfolio';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f4f4f6] flex flex-col selection:bg-emerald-500/30 selection:text-white relative">
      {/* Background ambient lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-12 relative z-10 w-full">
        {/* Centered Page Title & Description */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <span>Portfolio Archive</span>
            <span>•</span>
            <span>{filteredProjects.length} Projects</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            All Projects &amp; Case Studies
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            A comprehensive catalog of digital products, design systems, and business outcomes shipped across the GCC and international markets.
          </p>

          {/* Centered Filter Tabs */}
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

        {/* 3-Column Responsive Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
