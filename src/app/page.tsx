'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { CaseStudiesGrid } from '../components/CaseStudiesGrid';
import { DesignGallery } from '../components/DesignGallery';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { DesignSystemPlayground } from '../components/DesignSystemPlayground';
import { DesignProcess } from '../components/DesignProcess';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { Testimonials } from '../components/Testimonials';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { CaseStudy } from '../types/portfolio';

export default function Home() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f0f2f5] flex flex-col selection:bg-emerald-500/30 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenContact={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <Hero
          onExploreWork={() => scrollToSection('work')}
          onOpenDesignSystem={() => scrollToSection('design-system')}
          onOpenContact={() => scrollToSection('contact')}
        />

        <CaseStudiesGrid onSelectCaseStudy={(study) => setActiveCaseStudy(study)} />

        <DesignGallery />

        <DesignSystemPlayground />

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
