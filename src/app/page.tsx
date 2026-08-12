'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import StatCounter from '@/components/StatCounter';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const setStaticHero = () => {
      hero.style.setProperty('--hero-media-y', '0px');
      hero.style.setProperty('--hero-media-scale', '1');
      hero.style.setProperty('--hero-copy-y', '0px');
      hero.style.setProperty('--hero-copy-opacity', '1');
      hero.style.setProperty('--hero-overlay-top', '0.4');
      hero.style.setProperty('--hero-overlay-mid', '0.6');
      hero.style.setProperty('--hero-overlay-bottom', '0.95');
    };

    const updateHero = () => {
      frame = 0;

      if (reduceMotion.matches) {
        setStaticHero();
        return;
      }

      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));

      hero.style.setProperty('--hero-media-y', `${Math.round(progress * 72)}px`);
      hero.style.setProperty('--hero-media-scale', (1 + progress * 0.08).toFixed(3));
      hero.style.setProperty('--hero-copy-y', `${Math.round(progress * -48)}px`);
      hero.style.setProperty('--hero-copy-opacity', (1 - progress * 0.62).toFixed(3));
      hero.style.setProperty('--hero-overlay-top', (0.4 + progress * 0.18).toFixed(3));
      hero.style.setProperty('--hero-overlay-mid', (0.6 + progress * 0.2).toFixed(3));
      hero.style.setProperty('--hero-overlay-bottom', (0.95 + progress * 0.05).toFixed(3));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateHero);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    reduceMotion.addEventListener('change', requestUpdate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      reduceMotion.removeEventListener('change', requestUpdate);
    };
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          01 — HERO
      ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="hero-scroll-scene relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <div className="hero-media absolute inset-0 bg-void">
            <div className="hero-media-fallback absolute inset-0" aria-hidden="true" />
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/Moth_Sailing.webp"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="hero-content relative z-10 container-editorial text-center">
          <p className="text-label text-signal mb-6 tracking-widest">
            Queen&apos;s University ·{' '}
            <a
              href="https://sumoth.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline decoration-signal/40 underline-offset-4"
            >
              SuMoth Challenge 2027
            </a>
          </p>
          <h1 className="text-hero text-white mb-8 max-w-4xl mx-auto">
            Sustainable performance,<br />built to race
          </h1>
          <p className="text-lg md:text-xl text-steel max-w-xl mx-auto mb-12 leading-relaxed">
            Building a competition-grade foiling Moth to prove that sustainable design and elite engineering performance are the same challenge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/partnership" className="btn-primary">
              Explore partnership
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-label text-mid text-[10px]">Scroll</span>
          <div className="w-px h-8 bg-slate relative overflow-hidden">
            <div className="w-full h-3 bg-signal absolute top-0 scroll-pulse" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          02 — THE MISSION & VALUE PROP
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="reveal">
                <p className="text-label text-signal mb-4">01 — The Mission</p>
                <h2 className="text-section text-white hover:text-signal transition-colors mb-6">
                  <Link href="/article">
                    Sustainability is not a constraint.
                  </Link>
                </h2>
                <Link href="/article" className="inline-flex items-center gap-2 text-sm font-medium text-signal hover:text-white transition-colors">
                  Read why it matters
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <div className="reveal reveal-delay-1">
                <p className="text-lg text-steel leading-relaxed">
                  aQuaFoil is a Queen&apos;s University engineering design team building a sustainable foiling Moth for the 2027 SuMoth Challenge. We combine bio-composites, timber, CFD, and structural analysis into one race-ready vessel.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal reveal-delay-2 mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 py-12 border-t border-b border-white/10 text-center">
            <StatCounter value={30} suffix="+" label="Team Members" />
            <div className="text-center">
              <div className="text-data text-4xl md:text-5xl text-white mb-2 font-semibold font-display">2027</div>
              <p className="text-label text-steel">Competition Year</p>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* ═══════════════════════════════════════════
          03 — WHAT WE'RE BUILDING
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-light section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <p className="reveal text-label text-signal-deep mb-4">02 — The Vessel</p>
              <h2 className="reveal reveal-delay-1 text-section text-void mb-6">
                A foiling Moth. Sustainable by design.
              </h2>
              <p className="reveal reveal-delay-2 text-base text-void/70 leading-relaxed mb-8">
                The International Moth is an elite class of single-handed sailing dinghies that fly above the water on hydrofoils. We are building the alternative to traditional fiberglass and carbon fiber hulls.
              </p>
              <Link href="/build" className="reveal reveal-delay-3 inline-flex items-center gap-2 text-sm font-medium text-signal-deep hover:text-void transition-colors">
                Explore the build system
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Right Column (Specs list) */}
            <div className="lg:col-span-7">
              <div className="reveal reveal-delay-2 space-y-4">
                <div className="flex gap-4 items-start py-2">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-24">Hull</span>
                  <p className="text-sm text-void/70">Bio-composite construction utilizing flax fiber reinforcements and bio-based epoxy resins, optimized for flight.</p>
                </div>
                <div className="w-full h-px bg-slate/10" />
                <div className="flex gap-4 items-start py-2">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-24">Foils</span>
                  <p className="text-sm text-void/70">CFD-optimized hydrofoil profiles designed to lift the entire vessel weight, eliminating hull drag.</p>
                </div>
                <div className="w-full h-px bg-slate/10" />
                <div className="flex gap-4 items-start py-2">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-24">Rig</span>
                  <p className="text-sm text-void/70">Sail plan and control systems tuned for competitive performance under strict sustainability constraints.</p>
                </div>
                <div className="w-full h-px bg-slate/10" />
                <div className="flex gap-4 items-start py-2">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-24">Analysis</span>
                  <p className="text-sm text-void/70">Finite Element Analysis (FEA) and MarineShift360 Lifecycle Assessments back every material choice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="void" flip />

      {/* ═══════════════════════════════════════════
          04 — PARTNERSHIP CTA
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-dark section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">03 — Partner</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                Put your brand on a technical build.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="reveal reveal-delay-2 text-lg text-steel leading-relaxed mb-8">
                We are confirming partners for the 2026-2027 design, fabrication, and competition cycle. Sponsors get documented engineering progress, student talent access, and visibility on a vessel built to race.
              </p>
              <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
                <Link href="/partnership" className="btn-primary">
                  Explore partnership
                </Link>
                <Link href="/join" className="px-6 py-3 border border-white/20 hover:border-signal hover:text-signal text-white text-sm font-medium transition-colors">
                  Student opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
