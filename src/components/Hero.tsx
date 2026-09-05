'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, FileText, ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import { animate, scroll } from 'motion';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
}

const AnimatedNumber = ({ 
  to, 
  duration, 
  prefix = '', 
  suffix = '',
  className = ''
}: { 
  to: number; 
  duration: number; 
  prefix?: string; 
  suffix?: string;
  className?: string;
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(0, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = `${prefix}${Math.floor(value)}${suffix}`;
        }
      });
      return () => controls.stop();
    }
  }, [to, duration, prefix, suffix]);

  return <div ref={nodeRef} className={className} />;
};

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onOpenContact,
}) => {
  // 3D Tilt Setup
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 150 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Map mouse position to rotation (-12 to 12 degrees)
  const rotateX = useTransform(mouseYSpring, [0, 1], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5); // reset to center
    y.set(0.5);
  };

  // Scroll Animation Setup
  useEffect(() => {
    // Fades out and moves up the hero content as you scroll down
    scroll(animate('#hero-content', { y: [0, -150], opacity: [1, 0] }), {
      offset: ['start start', 'end start'],
    });
  }, []);

  // Entrance Animations Setup
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      <div id="hero-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bio & Value Proposition (7 cols) */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Status & Scope Line */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2 font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Senior Product UI/UX Designer</span>
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">Currently leading design at Qoodz</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">UAE, Saudi Arabia &amp; Global</span>
            </motion.div>

            {/* Headline Statement */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                I design intuitive digital products that scale revenue and eliminate user friction.
              </h1>

              <p className="text-base sm:text-lg text-zinc-200 font-normal leading-relaxed max-w-2xl">
                Turning complex business models into simple, habit-forming apps. Over 4 years designing high-impact platforms across the GCC, blending user psychology, fast prototyping, and clean design execution.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 text-sm font-bold hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-zinc-950 text-sm font-bold hover:bg-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let&apos;s Talk About Your Project</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-sm font-medium transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </motion.a>
            </motion.div>

            {/* Impact Metrics Row */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="space-y-1">
                <AnimatedNumber to={27} duration={1.8} prefix="+" suffix="%" className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-400" />
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Menu Order Lift
                </div>
              </div>

              <div className="space-y-1">
                <AnimatedNumber to={90} duration={2.0} suffix="%" className="text-2xl sm:text-3xl font-bold tracking-tight text-cyan-300" />
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  User Delight Score
                </div>
              </div>

              <div className="space-y-1">
                <AnimatedNumber to={15} duration={1.7} suffix=" hrs" className="text-2xl sm:text-3xl font-bold tracking-tight text-white" />
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Weekly Time Saved
                </div>
              </div>

              <div className="space-y-1">
                <AnimatedNumber to={4} duration={1.5} suffix="+ Years" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100" />
                <div className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Product Design Craft
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Architectural Portrait Frame (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative py-4 [perspective:1000px]"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm sm:max-w-md rounded-2xl bg-zinc-900 border border-zinc-800 p-4 shadow-2xl [transform-style:preserve-3d]"
            >
              {/* Inner Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 pointer-events-none">
                <Image
                  src="/anas-elawdy.png"
                  alt="Anas Elawdy: Product UI/UX Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top filter brightness-105 contrast-105"
                />

                {/* Scrim on Base of Photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Photo Base Caption */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-zinc-950/95 border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Anas Elawdy</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xs text-zinc-300">Product UI/UX Designer</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                    Available for Hire
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
