'use client';

import React, { useState, useRef } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { gsap, useGSAP } from '../lib/gsap';

export const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('F&B Loyalty & App');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$10k - $25k',
    message: '',
  });

  useGSAP(
    () => {
      // Header entrance
      gsap.from('.contact-header-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      });

      // Contact columns entrance
      gsap.from('.contact-col-left', {
        scrollTrigger: {
          trigger: '.contact-grid-wrap',
          start: 'top 82%',
          once: true,
        },
        x: -24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.contact-col-right', {
        scrollTrigger: {
          trigger: '.contact-grid-wrap',
          start: 'top 82%',
          once: true,
        },
        x: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  const projectTypes = ['F&B & Loyalty Mobile App', 'POS & Operations Dashboard', 'AI & Complex SaaS Interface', 'Mobile App (iOS/Android)', 'Product Design Advisory'];

  return (
    <section ref={containerRef} id="contact" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="contact-header-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT COLLABORATION</span>
          </div>
          <h2 className="contact-header-item text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let&apos;s build intuitive product experiences together.
          </h2>
          <p className="contact-header-item text-zinc-400 text-sm sm:text-base leading-relaxed">
            Looking for a senior product designer with proven impact across the GCC and global tech ecosystems? Get in touch directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid-wrap grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Direct Contact Card (5 cols) */}
          <div className="contact-col-left lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-8">
              {/* Availability Banner */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CURRENT STATUS</span>
                </div>
                <p className="text-xs text-zinc-300">
                  {PERSONAL_INFO.availabilityText}
                </p>
              </div>

              {/* Direct Email with 1-Click Copy */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Direct Email
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-white/10">
                  <span className="text-xs sm:text-sm font-mono text-white truncate mr-2">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="font-mono text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Phone &amp; WhatsApp
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-white/10">
                  <span className="text-xs sm:text-sm font-mono text-white truncate mr-2">
                    {PERSONAL_INFO.phone}
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium shrink-0"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="font-mono text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels & Resume */}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Professional Profiles &amp; Resume
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={PERSONAL_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-950/80 border border-white/5 hover:border-white/20 text-zinc-300 hover:text-white flex items-center justify-between transition-colors font-mono"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-950/80 border border-white/5 hover:border-white/20 text-emerald-400 hover:text-emerald-300 flex items-center justify-between transition-colors font-mono"
                  >
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      <span>Resume (PDF)</span>
                    </span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-950/80 border border-white/5 hover:border-white/20 text-zinc-300 hover:text-white flex items-center justify-between transition-colors font-mono"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2.5 rounded-xl bg-zinc-950/80 border border-white/5 hover:border-white/20 text-zinc-300 hover:text-white flex items-center justify-between transition-colors font-mono"
                  >
                    <span>Send Email</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Project Inquiry Form (7 cols) */}
          <div className="contact-col-right lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-6">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Anas has received your briefing and will reply directly to {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', budget: '$10k - $25k', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project Type Picker */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Project Focus Area
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setSelectedProjectType(type)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            selectedProjectType === type
                              ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                              : 'bg-zinc-950 border border-white/10 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">Estimated Project Scope / Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white focus:outline-none focus:border-emerald-400"
                    >
                      <option value="<$10k">&lt; $10k (Design Sprint / UX Audit)</option>
                      <option value="$10k - $25k">$10k - $25k (Core Mobile App / MVP Design)</option>
                      <option value="$25k - $50k">$25k - $50k (Full Platform &amp; Design System)</option>
                      <option value="Full-Time Remote">Full-Time Remote Role (Senior / Lead)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">Project Goals &amp; Context</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product, challenges, target users, and expected timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
