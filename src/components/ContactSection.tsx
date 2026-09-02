'use client';

import React, { useState, useRef } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, Phone, MessageSquare, Clock, ShieldCheck, Globe, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { gsap, useGSAP } from '../lib/gsap';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Interactive Project Scoper (Triggers instant user interaction & engagement)
  const [selectedService, setSelectedService] = useState<string>('New Mobile App (iOS / Android)');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Within 1 Month');

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
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Contact columns entrance
      gsap.from('.contact-col-left', {
        scrollTrigger: {
          trigger: '.contact-grid-wrap',
          start: 'top 82%',
          once: true,
        },
        x: -25,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.from('.contact-col-right', {
        scrollTrigger: {
          trigger: '.contact-grid-wrap',
          start: 'top 82%',
          once: true,
        },
        x: 25,
        opacity: 0,
        duration: 0.7,
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

  // WhatsApp 1-Click Trigger with custom prefilled message
  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Anas! I reviewed your portfolio and would like to discuss a project.\n\nType: ${selectedService}\nTimeline: ${selectedTimeline}\nMy Name: ${formData.name || 'Interested Client'}`
    );
    // Egyptian number +201017037847 formatted for wa.me
    return `https://wa.me/201017037847?text=${text}`;
  };

  // Direct Mailto with custom subject and body
  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${selectedService} - via Portfolio`);
    const body = encodeURIComponent(
      `Hi Anas,\n\nI'm interested in collaborating on a project.\n\nProject Scope: ${selectedService}\nTarget Timeline: ${selectedTimeline}\n\nLooking forward to hearing from you!`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const services = [
    'New Mobile App (iOS / Android)',
    'SaaS Web App & Dashboard',
    'F&B / Loyalty System Design',
    'Product Redesign & UX Audit',
    'Full-Time / Contract Senior Role',
  ];

  const timelines = [
    'ASAP (1-2 Weeks)',
    'Within 1 Month',
    '2-3 Months',
    'Flexible / Exploratory',
  ];

  return (
    <section ref={containerRef} id="contact" className="py-24 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="contact-header-item text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Have a project in mind? Let&apos;s build something high-impact.
          </h2>
          <p className="contact-header-item text-zinc-200 text-base sm:text-lg leading-relaxed">
            Whether you need a 0-to-1 mobile app, a high-converting redesign, or a senior product designer for your team, select your scope below or reach out directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid-wrap grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Action & Trust Guarantees (5 cols) */}
          <div className="contact-col-left lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6 shadow-xl">
              {/* Availability Status */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span>CURRENT AVAILABILITY</span>
                </div>
                <p className="text-sm text-zinc-200 font-medium">
                  {PERSONAL_INFO.availabilityText}
                </p>
              </div>

              {/* Direct Quick Triggers */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Fastest Way to Reach Me:
                </div>

                {/* WhatsApp Trigger Button */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-5 h-5" />
                    <span>Chat on WhatsApp Directly</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Direct Email Link */}
                <a
                  href={getMailtoUrl()}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm transition-colors border border-zinc-700"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>Send Pre-Filled Email</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </a>
              </div>

              {/* 1-Click Copy Channels */}
              <div className="space-y-3 pt-3 border-t border-zinc-800">
                {/* Email with 1-Click Copy */}
                <div className="space-y-1.5">
                  <div className="text-xs text-zinc-400 font-medium">Email Address</div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                    <span className="text-xs sm:text-sm text-white font-medium truncate mr-2">
                      {PERSONAL_INFO.email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone / Call */}
                <div className="space-y-1.5">
                  <div className="text-xs text-zinc-400 font-medium">Direct Phone / Call</div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                    <span className="text-xs sm:text-sm text-white font-medium">
                      {PERSONAL_INFO.phone}
                    </span>
                    <button
                      onClick={handleCopyPhone}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold shrink-0"
                      title="Copy phone number"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Zero-Friction Trust Pillars (Heuristic 10: Help & Assurance) */}
              <div className="pt-3 border-t border-zinc-800 grid grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Reply in &lt;4 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>NDA Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>GCC &amp; Global Timezone</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>English &amp; Arabic Native</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Estimator & Form (7 cols) */}
          <div className="contact-col-right lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6 shadow-xl">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Project Inquiry Dispatched!</h3>
                  <p className="text-base text-zinc-200 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Anas has received your scope for <span className="text-emerald-400 font-semibold">{selectedService}</span> and will reply directly to <span className="text-white font-semibold">{formData.email}</span> within 4 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', budget: '$10k - $25k', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Service Type Selector (Interactive Pill Group) */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
                      1. What are you looking to build or improve?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((serv) => (
                        <button
                          key={serv}
                          type="button"
                          onClick={() => setSelectedService(serv)}
                          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors border ${
                            selectedService === serv
                              ? 'bg-emerald-500 text-zinc-950 font-bold border-emerald-400'
                              : 'bg-zinc-950 text-zinc-300 hover:text-white hover:bg-zinc-800 border-zinc-800'
                          }`}
                        >
                          {serv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Target Timeline Selector */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
                      2. Target Launch Timeline:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timelines.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTimeline(time)}
                          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors border ${
                            selectedTimeline === time
                              ? 'bg-white text-zinc-950 font-bold border-white shadow-md'
                              : 'bg-zinc-950 text-zinc-300 hover:text-white hover:bg-zinc-800 border-zinc-800'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Direct Details Form */}
                  <div className="space-y-4 pt-2 border-t border-zinc-800">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-300">Your Name *</label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Al-Otaibi"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-300">Email Address *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300">Briefly describe the vision or friction (optional)</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. We are building a mobile loyalty platform for cafes in Riyadh and need an intuitive design system and high-fidelity prototype..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-400 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-13 rounded-xl bg-white text-zinc-950 font-bold text-sm sm:text-base hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="size-4" />
                      <span>Send Project Brief to Anas</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
