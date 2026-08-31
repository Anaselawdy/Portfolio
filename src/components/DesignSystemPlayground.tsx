'use client';

import React, { useState } from 'react';
import { Layers, Palette, Sliders, Code2, RefreshCw, Copy, CheckCheck } from 'lucide-react';

export const DesignSystemPlayground: React.FC = () => {
  type ThemeType = 'obsidian' | 'emerald' | 'cyan' | 'amber';
  const [activeTheme, setActiveTheme] = useState<ThemeType>('obsidian');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [toggleActive, setToggleActive] = useState(true);
  const [segmentedValue, setSegmentedValue] = useState<'monthly' | 'quarterly' | 'annual'>('quarterly');
  const [inputValue, setInputValue] = useState('enterprise-tier');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const themes = [
    { id: 'obsidian', label: 'Obsidian Monolith', primary: '#ffffff', accent: '#3b82f6', bgClass: 'from-zinc-900 to-zinc-950' },
    { id: 'emerald', label: 'Emerald Mint', primary: '#10b981', accent: '#059669', bgClass: 'from-emerald-950/40 to-zinc-950' },
    { id: 'cyan', label: 'Electric Cyan', primary: '#06b6d4', accent: '#0891b2', bgClass: 'from-cyan-950/40 to-zinc-950' },
    { id: 'amber', label: 'Warm Amber', primary: '#f59e0b', accent: '#d97706', bgClass: 'from-amber-950/40 to-zinc-950' },
  ];

  const handleCopyToken = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const getActivePrimaryColor = () => {
    switch (activeTheme) {
      case 'emerald': return '#10b981';
      case 'cyan': return '#06b6d4';
      case 'amber': return '#f59e0b';
      case 'obsidian':
      default:
        return '#ffffff';
    }
  };

  return (
    <section id="design-system" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
              <Layers className="w-3.5 h-3.5" />
              <span>INTERACTIVE CRAFT LAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Design Systems &amp; Token Architecture Playground
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Test live component states, typography scale, micro-interactions, and multi-brand token switching in real-time.
            </p>
          </div>

          {/* Theme Selector */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-900/80 p-2 rounded-2xl border border-white/10">
            <span className="text-xs font-mono text-zinc-400 px-2 flex items-center gap-1">
              <Palette className="w-3.5 h-3.5 text-zinc-400" />
              <span>Theme:</span>
            </span>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTheme(t.id as ThemeType)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTheme === t.id
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Component Lab (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Control Panel */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Primitive Components &amp; States
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">WCAG 2.2 AA Compliant</span>
              </div>

              {/* 1. Button Variants */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  01. Button System with Dynamic States
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setButtonLoading(true);
                      setTimeout(() => setButtonLoading(false), 1500);
                    }}
                    style={{
                      backgroundColor: activeTheme === 'obsidian' ? '#ffffff' : getActivePrimaryColor(),
                      color: activeTheme === 'obsidian' ? '#09090b' : '#000000',
                    }}
                    className="px-4 py-2.5 rounded-xl font-semibold text-xs transition-transform active:scale-95 flex items-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {buttonLoading ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Primary Action</span>
                        <span className="text-[10px] opacity-75 font-mono">(Click Me)</span>
                      </>
                    )}
                  </button>

                  <button className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/15 text-xs font-medium transition-colors">
                    Secondary Outline
                  </button>

                  <button className="px-4 py-2.5 rounded-xl bg-transparent hover:bg-white/[0.05] text-zinc-400 hover:text-white text-xs font-medium transition-colors">
                    Ghost Link
                  </button>

                  <button className="px-4 py-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 text-xs font-medium transition-colors">
                    Destructive
                  </button>
                </div>
              </div>

              {/* 2. Segmented Control */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  02. Animated Segmented Switcher
                </div>
                <div className="inline-flex p-1 bg-zinc-950 border border-white/10 rounded-xl">
                  {(['monthly', 'quarterly', 'annual'] as const).map((val) => (
                    <button
                      key={val}
                      onClick={() => setSegmentedValue(val)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                        segmentedValue === val
                          ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {val} Billing
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Toggle & Input Field */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    03. Accessible Toggle Switch
                  </div>
                  <div
                    onClick={() => setToggleActive(!toggleActive)}
                    className="cursor-pointer p-3 bg-zinc-950/60 rounded-xl border border-white/10 flex items-center justify-between"
                  >
                    <span className="text-xs text-zinc-300 font-medium">Automatic Currency Hedging</span>
                    <div
                      className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
                        toggleActive ? 'bg-emerald-500' : 'bg-zinc-700'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                          toggleActive ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    04. Validated Form Input
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 font-mono"
                      placeholder="Workspace identifier"
                    />
                    <span className="absolute right-3 top-2.5 text-[10px] font-mono text-emerald-400">
                      VALID
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Badges & Tags */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  05. Micro Badges &amp; Status Indicators
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Operational
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Synchronized
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Review Required
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-zinc-800 text-zinc-400 border border-white/10">
                    Draft v2.1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Token Inspector (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Token Hierarchy Spec
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">CSS Tokens</span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Tokens automatically compile from Figma Variables into JSON, CSS Custom Properties, and Tailwind plugin config. Click any token to copy.
              </p>

              {/* Token List */}
              <div className="space-y-2.5 font-mono text-xs">
                {[
                  { name: '--color-primary', val: getActivePrimaryColor() },
                  { name: '--color-bg-base', val: '#0b0c10' },
                  { name: '--color-surface-elevated', val: '#161822' },
                  { name: '--radius-component-lg', val: '12px' },
                  { name: '--font-family-display', val: 'Plus Jakarta Sans' },
                  { name: '--spacing-grid-gutter', val: '24px' },
                  { name: '--shadow-elevated', val: '0 8px 30px rgba(0,0,0,0.4)' },
                ].map((t) => (
                  <div
                    key={t.name}
                    onClick={() => handleCopyToken(`${t.name}: ${t.val};`)}
                    className="cursor-pointer group flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/5 hover:border-white/15 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3.5 h-3.5 rounded border border-white/20"
                        style={{ backgroundColor: t.val.startsWith('#') ? t.val : '#3f3f46' }}
                      />
                      <span className="text-zinc-300 group-hover:text-white">{t.name}</span>
                    </div>

                    <div className="flex items-center gap-2 text-zinc-500">
                      <span className="text-emerald-400 text-[11px]">{t.val}</span>
                      {copiedToken?.includes(t.name) ? (
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 group-hover:text-zinc-300" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 space-y-1.5 text-xs text-zinc-400">
                <div className="font-semibold text-white font-mono">Governance Rule:</div>
                <p>
                  Components consume semantic tokens exclusively. No direct raw hex values are permitted in production CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
