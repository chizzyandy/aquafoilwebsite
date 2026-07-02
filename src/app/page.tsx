'use client';

import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import StatCounter from '@/components/StatCounter';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          01 — HERO
      ═══════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          {/* Fallback gradient if no video */}
          <div className="absolute inset-0 bg-void" />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-editorial text-center">
          <p className="text-label text-signal mb-6 tracking-widest">
            Queen&apos;s University · SuMoth Challenge 2027
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
                <h2 className="text-section text-white">
                  Sustainability is not a constraint.
                </h2>
              </div>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <div className="reveal reveal-delay-1">
                <p className="text-lg text-steel leading-relaxed mb-6">
                  aQuaFoil is a student engineering design team at Queen&apos;s University. We are designing and building a foiling Moth sailboat from bio-composites and timber to compete in the international SuMoth Challenge.
                </p>
                <p className="text-base text-steel/80 leading-relaxed">
                  Our goal is to prove that high-performance marine design and environmental responsibility are not mutually exclusive. Every design decision, material selection, and fabrication method we implement is assessed for structural efficiency and lifecycle environmental impact.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal reveal-delay-2 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 py-12 border-t border-b border-white/10 text-center">
            <StatCounter value={60} suffix="%+" label="CO₂ Reduction" />
            <StatCounter value={6} label="Team Members" />
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
          04 — THE TEAM & PARTNERSHIP CTA
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-dark section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">03 — Join Us</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                Building the future of marine engineering.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="reveal reveal-delay-2 text-lg text-steel leading-relaxed mb-8">
                Whether you are a student looking for the ultimate hands-on engineering experience, or a sponsor looking to partner with the next generation of technical talent, there is a place for you at aQuaFoil.
              </p>
              <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
                <Link href="/team" className="btn-primary">
                  Meet the team
                </Link>
                <Link href="/partnership" className="px-6 py-3 border border-white/20 hover:border-signal hover:text-signal text-white text-sm font-medium transition-colors">
                  Explore partnership
                </Link>
                <Link href="/join" className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-colors">
                  Apply to join
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
