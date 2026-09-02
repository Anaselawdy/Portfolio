'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { smoothScrollTo } from '../lib/gsap';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Selected Work', href: '#work', id: 'work' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Reset to hero when near the top
      if (window.scrollY < 180) {
        setActiveSection('hero');
        return;
      }

      // Check sections in reverse order (bottom-to-top) using getBoundingClientRect
      const sections = ['contact', 'experience', 'process', 'work'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoothScrollTo(href, 85);
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    smoothScrollTo('#contact', 85);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-zinc-800 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo(0, 0, 1.0);
            }}
            className="group flex items-center gap-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl p-1 cursor-pointer"
          >
            <div className="size-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-sm tracking-tight text-white group-hover:border-zinc-700 transition-colors">
              AE
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors flex items-center gap-1.5">
                <span>{PERSONAL_INFO.name}</span>
                <span className="size-2 rounded-full bg-emerald-400" title="Available for projects" />
              </span>
              <span className="text-xs text-zinc-300 font-medium hidden sm:inline-block">
                {PERSONAL_INFO.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <LayoutGroup id="navbar-indicator">
            <nav className="hidden md:flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-1.5 rounded-full shadow-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                      isActive ? 'text-white' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-zinc-800 rounded-full border border-zinc-700"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>
          </LayoutGroup>

          {/* Direct Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-xs font-medium transition-colors"
            >
              <FileText className="size-3.5 text-zinc-400" />
              <span>Resume (PDF)</span>
              <ArrowUpRight className="size-3.5 text-zinc-400" />
            </a>

            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-bold hover:bg-zinc-100 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="size-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleContactClick}
              className="px-3 py-1.5 rounded-lg bg-white text-zinc-950 text-xs font-bold cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-800 bg-zinc-950/98 backdrop-blur-xl px-4 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-zinc-200 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 text-zinc-200 text-sm font-medium border border-zinc-800"
              >
                <FileText className="size-4 text-zinc-400" />
                <span>Download Resume (PDF)</span>
              </a>
              <button
                onClick={handleContactClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-zinc-950 text-sm font-bold cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
