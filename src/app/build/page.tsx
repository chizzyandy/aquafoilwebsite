'use client';

import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import { timelinePhases } from '@/data/timeline';

export default function BuildPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">The Build</p>
          <h1 className="text-hero text-white max-w-3xl">
            From concept to start line
          </h1>
          <p className="text-xl text-steel max-w-2xl mt-8 leading-relaxed">
            A foiling Moth is one of sailing&apos;s most technically demanding one-design classes. It rewards precision engineering and punishes shortcuts. That is why we chose it.
          </p>
        </div>
      </section>

      {/* The Vessel */}
      <RevealSection className="section-light section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="reveal text-label text-signal-deep mb-4">The Vessel</p>
              <h2 className="reveal reveal-delay-1 text-section text-void mb-8">
                A foiling Moth
              </h2>
              <div className="reveal reveal-delay-2 space-y-6">
                <p className="text-base text-void/80 leading-relaxed">
                  The International Moth is a single-handed sailing dinghy that flies above the water on hydrofoils. At full flight, only the foils and rudder touch the water — the hull is airborne.
                </p>
                <p className="text-base text-void/80 leading-relaxed">
                  The SuMoth Challenge adds a critical constraint: every material decision, structural choice, and fabrication method must meet measurable sustainability standards. That constraint does not reduce the engineering — it amplifies it.
                </p>
              </div>

              {/* Specs */}
              <div className="reveal reveal-delay-3 mt-10 space-y-3">
                <p className="text-label text-signal-deep mb-4">Target Specifications</p>
                {[
                  ['Length', '3.355 m (11 ft)'],
                  ['Beam', '2.25 m max'],
                  ['Sail Area', '8 m²'],
                  ['Hull Weight Target', '< 30 kg'],
                  ['Foiling Speed', '15–20+ knots'],
                  ['Construction', 'Sustainable composites'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-baseline py-2 border-b border-light-border">
                    <span className="text-sm text-void/60">{label}</span>
                    <span className="font-mono text-sm text-void font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="reveal reveal-delay-1">
              <div className="aspect-[3/4] bg-light-border relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-label text-mid mb-2">Image placeholder</p>
                    <p className="text-sm text-mid">Foiling Moth reference photo</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-mid font-mono">A foiling Moth at full flight. Hull airborne, hydrofoils supporting full vessel weight.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Engineering Systems */}
      <RevealSection className="section-dark section-padding">
        <div className="container-full">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal mb-4">Engineering Systems</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              Five integrated systems
            </h2>
          </div>

          <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                num: '01',
                title: 'Hull Structure',
                desc: 'Bio-composite construction. Sustainable reinforcement fibres with bio-based epoxy resin systems. Weight-optimized for foiling performance.',
              },
              {
                num: '02',
                title: 'Hydrofoils',
                desc: 'CFD-optimized profiles using OpenFOAM. Lift, drag, and cavitation analysis. Composite construction with precision surface finish.',
              },
              {
                num: '03',
                title: 'Rig & Sail',
                desc: 'Integrated sail control systems. Optimized for competitive performance within sustainability constraints. Carbon and natural fibre hybrid.',
              },
              {
                num: '04',
                title: 'Control Systems',
                desc: 'Wand-based ride height control. Flap mechanisms for foil angle adjustment. Mechanical systems designed for reliability.',
              },
              {
                num: '05',
                title: 'Materials',
                desc: 'Full lifecycle assessment on every material. Bio-based resins, natural fibre reinforcements, recycled core materials. Every choice measured.',
              },
            ].map((system) => (
              <div key={system.num} className="card-dark p-8">
                <span className="text-label text-signal">{system.num}</span>
                <h3 className="font-display text-lg font-medium text-white mt-4 mb-3">{system.title}</h3>
                <p className="text-sm text-steel/80 leading-relaxed">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Full Timeline */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-full">
          <div className="mb-16">
            <p className="reveal text-label text-signal mb-4">Project Timeline</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              Full roadmap
            </h2>
          </div>

          <div className="space-y-0">
            {timelinePhases.map((phase, idx) => (
              <div
                key={phase.id}
                className={`reveal reveal-delay-${Math.min(idx + 1, 6)} grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 ${
                  idx < timelinePhases.length - 1 ? 'border-b border-slate/20' : ''
                }`}
              >
                {/* Phase Label */}
                <div className="md:col-span-3">
                  <span className="text-label text-signal">{phase.phase}</span>
                  <h3 className="font-display text-2xl font-medium text-white mt-2">{phase.title}</h3>
                  <p className="font-mono text-xs text-mid mt-2">{phase.period}</p>
                  <span className={`inline-block mt-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 ${
                    phase.status === 'completed'
                      ? 'bg-signal/10 text-signal'
                      : phase.status === 'active'
                      ? 'bg-signal/20 text-signal'
                      : 'bg-slate/30 text-mid'
                  }`}>
                    {phase.status}
                  </span>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-base text-steel leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Milestones */}
                <div className="md:col-span-4">
                  <p className="text-label text-steel mb-3">Key Milestones</p>
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone) => (
                      <li key={milestone} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          phase.status === 'completed' ? 'bg-signal' : 'bg-slate'
                        }`} />
                        <span className="text-sm text-steel/80">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Design Process */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">Design Process</p>
              <h2 className="reveal reveal-delay-1 text-subsection text-white">
                Every decision measured
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="reveal reveal-delay-2 space-y-6">
                <p className="text-base text-steel leading-relaxed">
                  Our design process integrates computational fluid dynamics (CFD), finite element analysis (FEA), and material lifecycle assessment at every stage. OpenFOAM provides our hydrodynamic simulation backbone. Ansys is used for structural analysis. Everything is planned and tested before implementation.
                </p>
                <p className="text-base text-steel/80 leading-relaxed">
                  Material decisions are not decorative — each candidate undergoes mechanical testing, lifecycle assessment, and performance benchmarking against conventional alternatives. The trade-off data is public. The reasoning is documented.
                </p>
              </div>
            </div>
          </div>

          {/* Tool badges */}
          <div className="reveal reveal-delay-3 mt-16 flex flex-wrap gap-3">
            {['OpenFOAM', 'SolidWorks', 'ANSYS', 'Python', 'Bio-Epoxy Systems', 'Natural Fibre Composites'].map((tool) => (
              <span key={tool} className="font-mono text-xs text-steel px-4 py-2 border border-slate/30">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Image Gallery Placeholder */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-full">
          <p className="reveal text-label text-signal mb-8">Gallery</p>
          <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="aspect-square bg-slate/20 flex items-center justify-center">
                <p className="text-xs text-mid font-mono">Image {n}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-4 text-xs text-mid">CAD renders, CFD visualizations, material samples, and fabrication process documentation will be added as the build progresses.</p>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial text-center">
          <h2 className="reveal text-subsection text-white mb-6">
            Follow the build process
          </h2>
          <p className="reveal reveal-delay-1 text-steel mb-8 max-w-lg mx-auto">
            We document every phase — design decisions, material testing, fabrication milestones. The proof is public.
          </p>
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/updates" className="btn-primary">Latest updates</Link>
            <Link href="/partners" className="btn-secondary">Explore partnership</Link>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
