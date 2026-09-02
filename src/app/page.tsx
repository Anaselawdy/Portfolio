'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { CaseStudiesGrid } from '../components/CaseStudiesGrid';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { DesignProcess } from '../components/DesignProcess';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { Testimonials } from '../components/Testimonials';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { CaseStudy } from '../types/portfolio';
import { smoothScrollTo } from '../lib/gsap';

export default function Home() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo('#' + sectionId, 70, 1.2);
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f4f4f6] flex flex-col selection:bg-emerald-500/30 selection:text-white relative">
      {/* Top Scroll Reading Progress Bar (Heuristic 1: Visibility of System Status) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <Navbar onOpenContact={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <Hero
          onExploreWork={() => scrollToSection('work')}
          onOpenContact={() => scrollToSection('contact')}
        />

        <CaseStudiesGrid onSelectCaseStudy={(study) => setActiveCaseStudy(study)} />

        <DesignProcess />

        <ExperienceTimeline />

        <Testimonials />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Full-Screen Deep Dive Modal */}
      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onSelectAnotherStudy={(study) => setActiveCaseStudy(study)}
      />
    </div>
  );
}
