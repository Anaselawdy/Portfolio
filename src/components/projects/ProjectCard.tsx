'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '../../types/portfolio';
import { ProjectPreview } from './ProjectPreview';

export interface ProjectCardProps {
  project: CaseStudy;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = '',
}) => {
  const isHighImpact = project.isHighImpact;
  const projectHref = `/projects/${project.slug || project.id}`;

  return (
    <Link href={projectHref} className="block no-underline focus:outline-none h-full">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        whileHover={{ y: -6, scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className={`group cursor-pointer rounded-2xl bg-zinc-900/90 border transition-all duration-300 flex flex-col justify-between overflow-hidden relative text-left h-full focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ${
          isHighImpact
            ? 'border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:shadow-[0_0_35px_rgba(16,185,129,0.32)] ring-1 ring-emerald-500/30'
            : 'border-zinc-800/90 hover:border-zinc-700 shadow-lg hover:shadow-xl'
        } ${className}`}
      >
        {/* Subtle animated breathing aura for high impact card */}
        {isHighImpact && (
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-emerald-500/25 via-emerald-400/40 to-emerald-500/25 -z-10 opacity-70 blur-[2px] animate-pulse pointer-events-none" />
        )}

        {/* Floating High-Impact Focus Badge with animated ping beacon */}
        {isHighImpact && (
          <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md border border-emerald-500/50 text-emerald-300 text-xs font-semibold shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>{project.impactBadge || '🔥 Most Downloaded'}</span>
          </div>
        )}

        {/* Card Visual / Image Preview */}
        <div className="h-48 sm:h-52 w-full relative overflow-hidden bg-zinc-950 border-b border-zinc-800/80 shrink-0">
          <ProjectPreview project={project} />
        </div>

        {/* Card Content: Chip + Title + Description */}
        <div className="p-6 space-y-3.5 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Category Chip */}
            <div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide">
                {project.categoryLabel}
              </span>
            </div>

            {/* Project Title with Arrow indicator */}
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between gap-2">
              <span>{project.title}</span>
              <ArrowUpRight className="size-4 text-zinc-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </h3>

            {/* Project Description */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
              {project.summary}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
