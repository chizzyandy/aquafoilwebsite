'use client';

import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import StatCounter from '@/components/StatCounter';
import RoadmapTimeline from '@/components/RoadmapTimeline';
import SectionDivider from '@/components/SectionDivider';

import { partnershipValues } from '@/data/partners';

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          01 — HERO
      ═══════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          {/* Placeholder: replace /video/hero.mp4 with actual video */}
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
            <Link href="/partners" className="btn-primary">
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
          02 — THE PROBLEM
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="reveal">
                <p className="text-label text-signal mb-4">01 — The Problem</p>
                <h2 className="text-section text-white">
                  The boats outlast us.
                </h2>
              </div>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <div className="reveal reveal-delay-1">
                <ul className="text-lg text-steel leading-relaxed mb-6 space-y-2 list-disc pl-5">
                  <li><strong className="text-white">200,000</strong> boats reach end-of-life annually in the U.S.¹</li>
                  <li><strong className="text-white">100,000+</strong> fiberglass boats reach end-of-life in the EU per year; only ~2,000 recycled²</li>
                  <li>Carbon fiber composites carry <strong className="text-white">2–5x</strong> the carbon footprint previously estimated³</li>
                  <li>Fiberglass does not biodegrade — these boats sit in landfills for centuries</li>
                </ul>
                <p className="text-base text-steel/80 leading-relaxed mb-6">
                  The marine composites industry produces boats that will sit in landfills for centuries. There is currently no scalable recycling pathway for fiberglass.
                </p>
                <p className="text-base text-steel/70 leading-relaxed">
                  We are building a foiling Moth for the 2027 edition of the SuMoth Challenge to prove that sustainable design and elite engineering performance are the same challenge.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal reveal-delay-2 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 border-t border-b border-slate/30">
            <StatCounter value={60} suffix="%+" label="CO₂ Reduction" />
            <StatCounter value={200} suffix=",000" label="Boats end-of-life/yr" />
            <StatCounter value={20} suffix="+" label="Team Members" />
            <div className="text-center">
              <div className="text-data text-4xl md:text-5xl text-white mb-2">2027</div>
              <p className="text-label text-steel">Competition Year</p>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* ═══════════════════════════════════════════
          03 — A NEW WAVE OF MATERIALS
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal mb-4">02 — The Alternative</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              A New Wave of Materials
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Natural Fiber Composites */}
            <div className="reveal reveal-delay-2 card-light p-8">
              <h3 className="font-display text-2xl font-medium text-void mb-4">Natural Fiber Composites</h3>
              <ul className="text-sm text-void/70 space-y-4 list-none">
                <li className="flex gap-3">
                  <span className="text-signal-deep shrink-0 mt-0.5">•</span>
                  <span><strong>Flax fibers:</strong> comparable specific strength to glass, superior vibration damping⁵</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-signal-deep shrink-0 mt-0.5">•</span>
                  <span><strong>60%+ carbon footprint reduction</strong> with flax/bio-epoxy hulls⁶</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-signal-deep shrink-0 mt-0.5">•</span>
                  <span><strong>Bcomp ampliTex:</strong> 85% lower CO₂ than equivalent carbon fiber⁷</span>
                </li>
              </ul>
            </div>

            {/* Timber Renaissance */}
            <div className="reveal reveal-delay-3 card-light p-8">
              <h3 className="font-display text-2xl font-medium text-void mb-4">Nature&apos;s Original Composite</h3>
              <ul className="text-sm text-void/70 space-y-4 list-none">
                <li className="flex gap-3">
                  <span className="text-signal-deep shrink-0 mt-0.5">•</span>
                  <span><strong>Wood as a composite:</strong> cellulose fibers in a lignin matrix</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-signal-deep shrink-0 mt-0.5">•</span>
                  <span><strong>Natural carbon sink:</strong> 1 m³ stores 1+ tonne CO₂¹⁸ ¹⁹</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-signal-deep shrink-0 mt-0.5">•</span>
                  <span><strong>Precision manufacturing:</strong> CNC-enabled wood construction produces competitive foiling performance²⁰</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* ═══════════════════════════════════════════
          04 — WHAT WE'RE BUILDING
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-light section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="reveal text-label text-signal mb-4">03 — What we&apos;re building</p>
              <h2 className="reveal reveal-delay-1 text-section text-void mb-8">
                A foiling Moth. Sustainable by design.
              </h2>
              <div className="reveal reveal-delay-2 space-y-4 mb-10">
                <div className="flex gap-4 items-start">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-20">Hull</span>
                  <p className="text-sm text-void/70">Bio-composite construction — sustainable fibres, bio-based resins, weight-optimized for flight.</p>
                </div>
                <div className="w-full h-px bg-slate/10" />
                <div className="flex gap-4 items-start">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-20">Foils</span>
                  <p className="text-sm text-void/70">CFD-optimized hydrofoil profiles designed to fly, not just float.</p>
                </div>
                <div className="w-full h-px bg-slate/10" />
                <div className="flex gap-4 items-start">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-20">Rig</span>
                  <p className="text-sm text-void/70">Sail and control systems tuned for competitive performance within strict sustainability constraints.</p>
                </div>
                <div className="w-full h-px bg-slate/10" />
                <div className="flex gap-4 items-start">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-20">Analysis</span>
                  <p className="text-sm text-void/70">Every material choice backed by FEA, lifecycle assessment, and documented trade-off data.</p>
                </div>
              </div>
              <Link href="/build" className="inline-flex items-center gap-2 text-sm font-medium text-signal-deep hover:text-void transition-colors">
                Explore the build
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="void" flip />

      {/* ═══════════════════════════════════════════
          05 — TEAM / CREDIBILITY
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-dark section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">04 — The team</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                20+ Students. One goal.
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <p className="reveal reveal-delay-2 text-lg text-steel leading-relaxed mb-4">
                Our team spans computational fluid dynamics, structural engineering, composites fabrication, and systems design. We operate with the discipline of industry professionals and the ambition of students.
              </p>
              <p className="reveal reveal-delay-3 text-base text-steel/80 leading-relaxed">
                World-champion-level sailing expertise. Top students across Queen&apos;s University. Building experience in CFD, structural analysis, marketing, all to support one goal.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* ═══════════════════════════════════════════
          06 — TIMELINE
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal mb-4">05 — The roadmap</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              The road to 2027
            </h2>
          </div>

          {/* Vertical timeline */}
          <RoadmapTimeline limitActive={2} linkLearnMoreToBuild={true} />
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* ═══════════════════════════════════════════
          07 — PARTNERSHIP
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-light section-padding">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal-deep mb-4">06 — Partnership</p>
            <h2 className="reveal reveal-delay-1 text-section text-void mb-6">
              Supporting Student Ambition
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-void/70 max-w-2xl mx-auto leading-relaxed">
              By sponsoring aQuaFoil, you help students develop technical, teamwork, and project management skills while advancing sustainable foiling technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {partnershipValues.slice(0, 2).map((value, i) => (
              <div key={value.title} className={`reveal reveal-delay-${i + 1} card-light p-8`}>
                <h3 className="font-display text-lg font-medium text-void mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-void/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/partners" className="btn-primary">
              Explore partnership
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/join" className="px-6 py-3 border border-void/20 hover:border-signal-deep hover:text-signal-deep text-void text-sm font-medium transition-colors">
              Apply to join the team
            </Link>
          </div>
        </div>
      </RevealSection>


    </>
  );
}
