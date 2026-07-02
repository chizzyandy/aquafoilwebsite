'use client';

import Image from 'next/image';
import RevealSection from '@/components/RevealSection';
import RoadmapTimeline from '@/components/RoadmapTimeline';
import SectionDivider from '@/components/SectionDivider';
import VesselModelViewer from '@/components/VesselModelViewer';

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

      {/* The Problem We're Solving */}
      <RevealSection className="section-dark pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 border-t border-white/10 pt-12">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">The Context</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                The Problem We&apos;re Solving
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="reveal reveal-delay-2 space-y-6">
                <p className="text-base text-steel leading-relaxed">
                  Every engineering decision we make is framed by the environmental reality of our industry. Annually, 200,000 boats reach end-of-life in the U.S. with no scalable recycling pathway for fiberglass. In the EU, over 100,000 fiberglass boats reach end-of-life per year, but only ~2,000 are recycled.
                </p>
                <p className="text-base text-steel leading-relaxed">
                  Furthermore, carbon fiber composites carry a carbon footprint 2–5x higher than previously estimated. The materials that make foiling possible are the same materials filling our landfills. We are building the alternative.
                </p>
              </div>
              
              <div className="reveal reveal-delay-3 mt-10 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-3 px-4 text-sm font-medium text-white">Metric</th>
                      <th className="py-3 px-4 text-sm font-medium text-steel">Traditional Build</th>
                      <th className="py-3 px-4 text-sm font-medium text-signal">Sustainable Build</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white">Primary Hull Material</td>
                      <td className="py-3 px-4 text-steel">Fiberglass / Carbon Fiber</td>
                      <td className="py-3 px-4 text-signal">Flax Fiber / Timber</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white">Resin System</td>
                      <td className="py-3 px-4 text-steel">Synthetic Epoxy</td>
                      <td className="py-3 px-4 text-signal">Bio-based Epoxy</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white">Carbon Footprint</td>
                      <td className="py-3 px-4 text-steel">Baseline</td>
                      <td className="py-3 px-4 text-signal">60%+ Reduction</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white">End of Life</td>
                      <td className="py-3 px-4 text-steel">Landfill</td>
                      <td className="py-3 px-4 text-signal">Recyclable / Biodegradable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* The Vessel */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="reveal text-label text-signal mb-4">The Vessel</p>
              <h2 className="reveal reveal-delay-1 text-section text-white mb-8">
                A foiling Moth
              </h2>
              <div className="reveal reveal-delay-2 space-y-6">
                <p className="text-base text-steel leading-relaxed">
                  The International Moth is a single-handed sailing dinghy that flies above the water on hydrofoils. At full flight, only the foils and rudder touch the water — the hull is airborne.
                </p>
                <p className="text-base text-steel leading-relaxed">
                  The SuMoth Challenge adds a critical constraint: every material decision, structural choice, and fabrication method must meet measurable sustainability standards. That constraint does not reduce the engineering — it amplifies it.
                </p>
              </div>

              {/* Specs */}
              <div className="reveal reveal-delay-3 mt-10 space-y-3">
                <p className="text-label text-signal mb-4">Target Specifications</p>
                {[
                  ['Length', '3.355 m (11 ft)'],
                  ['Beam', '2.25 m max'],
                  ['Sail Area', '8 m²'],
                  ['Hull Weight Target', '< 30 kg'],
                  ['Foiling Speed', '15–20+ knots'],
                  ['Construction', 'Sustainable composites'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-baseline py-2 border-b border-slate/30">
                    <span className="text-sm text-steel/80">{label}</span>
                    <span className="font-mono text-sm text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <VesselModelViewer />
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* Engineering Systems */}
      <RevealSection className="section-light section-padding">
        <div className="container-full">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal-deep mb-4">Engineering Systems</p>
            <h2 className="reveal reveal-delay-1 text-section text-void">
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
              <div key={system.num} className="card-light p-8">
                <span className="text-label text-signal-deep">{system.num}</span>
                <h3 className="font-display text-lg font-medium text-void mt-4 mb-3">{system.title}</h3>
                <p className="text-sm text-void/70 leading-relaxed">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="void" flip />

      {/* Nature's Original Composite */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">Materials Focus</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                Nature&apos;s Original Composite
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="reveal reveal-delay-2 space-y-6">
                <p className="text-base text-steel leading-relaxed">
                  Most sustainable builds focus purely on bio-resins and flax fibers. We are integrating a timber renaissance. Wood is nature&apos;s original composite: cellulose fibers in a lignin matrix.
                </p>
                <p className="text-base text-steel leading-relaxed">
                  It acts as a natural carbon sink — one cubic meter of wood stores over one tonne of CO₂. When combined with CNC-enabled manufacturing and precision structural engineering, timber construction produces competitive performance that traditional hand-laid composites struggle to match sustainably. This is our differentiator in the SuMoth Challenge.
                </p>
              </div>
            </div>
          </div>

          {/* Birch Bark Canoe */}
          <figure className="reveal reveal-delay-3 mt-16">
            <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: '16 / 9' }}>
              <Image
                src="/images/Birchbark_Canoe.jpg"
                alt="A traditional birch bark canoe showing natural wood ribs and bark hull — one of the earliest examples of wood composite watercraft construction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
            <figcaption className="mt-3 text-xs text-steel/60 italic leading-relaxed">
              A birch bark canoe — wood ribs within a bark hull. Nature&apos;s composite logic, applied to watercraft for thousands of years.
            </figcaption>
          </figure>
        </div>
      </RevealSection>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* Full Timeline */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal mb-4">Project Timeline</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              Full roadmap
            </h2>
          </div>

          <RoadmapTimeline />
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="void" />



    </>
  );
}
