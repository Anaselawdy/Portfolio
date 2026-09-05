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

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo('#' + sectionId, 70, 1.2);
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f4f4f6] flex flex-col selection:bg-emerald-500/30 selection:text-white relative">
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
