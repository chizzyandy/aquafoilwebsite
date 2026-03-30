'use client';

import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import StatCounter from '@/components/StatCounter';
import { timelinePhases } from '@/data/timeline';
import { updates } from '@/data/updates';
import { categoryLabels } from '@/data/updates';
import { disciplines } from '@/data/team';
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
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/updates" className="btn-secondary">
              Follow the build
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
          02 — WHAT IS AQUAFOIL
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="reveal">
                <p className="text-label text-signal mb-4">01 — What is aQuaFoil</p>
                <h2 className="text-section text-white">
                  The proof is in the performance
                </h2>
              </div>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <div className="reveal reveal-delay-1">
                <p className="text-lg text-steel leading-relaxed mb-6">
                  aQuaFoil is Queen&apos;s University&apos;s sustainable-performance engineering design team. We are building a foiling Moth — one of sailing&apos;s most technically unforgiving vessels — for the SuMoth Challenge 2027.
                </p>
                <p className="text-base text-steel/80 leading-relaxed mb-8">
                  We treat sustainability not as a constraint, but as the design brief. Our goal is simple and difficult: to demonstrate, on the water and in real time, that engineering excellence and environmental responsibility are the same pursuit.
                </p>
                <div className="signal-line" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal reveal-delay-2 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 border-t border-b border-slate/30">
            <StatCounter value={30} suffix="+" label="Team Members" />
            <StatCounter value={6} label="Disciplines" />
            <div className="text-center">
              <div className="text-data text-4xl md:text-5xl text-white mb-2">2027</div>
              <p className="text-label text-steel">Competition Year</p>
            </div>
            <StatCounter value={3} label="Faculty Advisors" />
          </div>
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════
          03 — WHY THIS MATTERS
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="reveal text-label text-signal mb-4">02 — Why this matters</p>
            <h2 className="reveal reveal-delay-1 text-section text-white mb-8">
              High performance is not a trade-off. It is a higher standard.
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-steel leading-relaxed mb-6">
              The engineering, materials, and manufacturing industries are under unprecedented pressure to demonstrate sustainability credentials — not in marketing, but in actual design decisions. At the same time, performance standards are not declining.
            </p>
            <p className="reveal reveal-delay-3 text-base text-steel/80 leading-relaxed">
              aQuaFoil operates at the intersection of these two demands, in a competitive context that makes both non-negotiable. A foiling Moth rewards precision engineering and punishes shortcuts. That rigour makes it the perfect platform for our thesis.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════
          04 — WHAT WE'RE BUILDING
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-light section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="reveal order-2 lg:order-1">
              <div className="aspect-[4/3] bg-light-border relative overflow-hidden">
                {/* Replace with actual render/CAD image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-fog to-light-border">
                  <div className="text-center">
                    <p className="text-label text-mid mb-2">Render placeholder</p>
                    <p className="text-sm text-mid">Hull and foil CAD visualization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="reveal text-label text-signal-deep mb-4">03 — What we&apos;re building</p>
              <h2 className="reveal reveal-delay-1 text-section text-void mb-8">
                A foiling Moth. Sustainable by design.
              </h2>
              <div className="reveal reveal-delay-2 space-y-4 mb-10">
                <div className="flex gap-4 items-start">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-20">Hull</span>
                  <p className="text-sm text-void/70">Bio-composite construction using sustainable reinforcement fibres and bio-based epoxy resin systems.</p>
                </div>
                <div className="w-full h-px bg-light-border" />
                <div className="flex gap-4 items-start">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-20">Foils</span>
                  <p className="text-sm text-void/70">CFD-optimized hydrofoil profiles. OpenFOAM simulation pipeline for lift, drag, and cavitation analysis.</p>
                </div>
                <div className="w-full h-px bg-light-border" />
                <div className="flex gap-4 items-start">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-20">Rig</span>
                  <p className="text-sm text-void/70">Integrated sail and control systems designed for competitive performance within sustainability constraints.</p>
                </div>
                <div className="w-full h-px bg-light-border" />
                <div className="flex gap-4 items-start">
                  <span className="text-label text-signal-deep mt-0.5 shrink-0 w-20">Analysis</span>
                  <p className="text-sm text-void/70">FEA structural validation. Full lifecycle material assessment. Every decision measured.</p>
                </div>
              </div>
              <Link href="/build" className="inline-flex items-center gap-2 text-sm font-medium text-signal-deep hover:text-void transition-colors">
                Explore the build
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════
          05 — TEAM / CREDIBILITY
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-dark section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">04 — The team</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                30+ engineers. 6 disciplines. One standard.
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <p className="reveal reveal-delay-2 text-lg text-steel leading-relaxed mb-4">
                Our team spans materials science, structural engineering, composites fabrication, hydrodynamics, and systems design. We operate with the discipline of a professional design studio and the ambition of a research laboratory.
              </p>
              <p className="reveal reveal-delay-3 text-base text-steel/80 leading-relaxed">
                Faculty advisors from Smith School of Engineering. World-champion-level sailing expertise. Top engineering students across Queen&apos;s University.
              </p>
            </div>
          </div>

          {/* Discipline Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {disciplines.map((d, i) => (
              <div key={d.name} className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-dark p-6`}>
                <p className="text-data text-2xl text-white mb-1">{d.count}</p>
                <p className="text-xs text-steel leading-snug">{d.name}</p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-3 mt-12 text-center">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm text-steel hover:text-signal transition-colors">
              Meet the full team
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════
          06 — TIMELINE
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-full">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal mb-4">05 — The roadmap</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              From concept to start line
            </h2>
          </div>

          {/* Timeline */}
          <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelinePhases.map((phase) => (
              <div
                key={phase.id}
                className={`card-dark p-8 relative overflow-hidden ${
                  phase.status === 'active' ? 'border-signal/50' : ''
                }`}
              >
                {phase.status === 'active' && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-signal" />
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-label text-signal">{phase.phase}</span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 ${
                    phase.status === 'completed'
                      ? 'bg-signal/10 text-signal'
                      : phase.status === 'active'
                      ? 'bg-signal/20 text-signal'
                      : 'bg-slate/30 text-mid'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-white mb-2">
                  {phase.title}
                </h3>
                <p className="font-mono text-xs text-mid mb-4">{phase.period}</p>
                <p className="text-sm text-steel/80 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 text-center">
            <Link href="/build" className="inline-flex items-center gap-2 text-sm text-steel hover:text-signal transition-colors">
              Full project timeline
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════
          07 — PARTNERSHIP
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal mb-4">06 — Partnership</p>
            <h2 className="reveal reveal-delay-1 text-section text-white mb-6">
              Strategic alignment, not logo placement
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-steel max-w-2xl mx-auto leading-relaxed">
              aQuaFoil offers direct association with a precision engineering programme built around the same performance and sustainability standards your industry is navigating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {partnershipValues.slice(0, 3).map((value, i) => (
              <div key={value.title} className={`reveal reveal-delay-${i + 1} card-dark p-8`}>
                <div className="signal-line mb-6" />
                <h3 className="font-display text-lg font-medium text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-steel/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal text-center">
            <Link href="/partners" className="btn-primary">
              Explore partnership
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════
          08 — LATEST UPDATES
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-light section-padding">
        <div className="container-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="reveal text-label text-signal-deep mb-4">07 — Updates</p>
              <h2 className="reveal reveal-delay-1 text-section text-void">
                Latest from the build
              </h2>
            </div>
            <Link href="/updates" className="reveal reveal-delay-2 inline-flex items-center gap-2 text-sm text-signal-deep hover:text-void transition-colors mt-4 md:mt-0">
              All updates
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {updates.slice(0, 3).map((update, i) => (
              <article key={update.id} className={`reveal reveal-delay-${i + 1} card-light p-8 flex flex-col`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-fog text-signal-deep">
                    {categoryLabels[update.category]}
                  </span>
                  <span className="text-xs font-mono text-mid">{update.date}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-void mb-3">
                  {update.title}
                </h3>
                <p className="text-sm text-void/60 leading-relaxed flex-1">
                  {update.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ═══════════════════════════════════════════
          09 — FINAL CTA
      ═══════════════════════════════════════════ */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial text-center">
          <div className="reveal">
            <div className="signal-line mx-auto mb-8" />
          </div>
          <h2 className="reveal reveal-delay-1 text-section text-white mb-6 max-w-3xl mx-auto">
            Performance without compromise
          </h2>
          <p className="reveal reveal-delay-2 text-lg text-steel max-w-xl mx-auto mb-12 leading-relaxed">
            We are building the proof that sustainable engineering and elite performance are the same pursuit. The first partners will be the most visible.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/partners" className="btn-primary">
              Explore partnership
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/join" className="btn-secondary">
              Join the team
            </Link>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
