'use client';

import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';
import VesselModelViewer from '@/components/VesselModelViewer';

const roadmapSteps = [
  {
    phase: 'Design',
    period: '2026',
    desc: 'Freeze hull, foil, and system geometry through CFD, CAD, and structural review.',
  },
  {
    phase: 'Build',
    period: 'Winter 2027',
    desc: 'Manufacture the hull, foils, wing systems, and controls from approved sustainable materials.',
  },
  {
    phase: 'Race',
    period: 'Summer 2027',
    desc: 'Validate on water, submit SuMoth documentation, and compete at Lake Garda.',
  },
];

export default function BuildPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark build-hero-background pt-32 pb-20 md:pt-40 md:pb-28">
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
                  The{' '}
                  <a
                    href="https://sumoth.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-signal hover:text-white transition-colors"
                  >
                    SuMoth Challenge
                  </a>{' '}
                  adds a critical constraint: every material decision, structural choice, and fabrication method must meet measurable sustainability standards. That constraint does not reduce the engineering — it amplifies it.
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
                desc: 'Bio-based resins, flax reinforcements, timber structure, and recycled cores selected through lifecycle and structural review.',
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

      <SectionDivider topTheme="light" bottomTheme="carbon" flip />

      {/* Compact Timeline */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal mb-4">Project Timeline</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              Three phases to the start line
            </h2>
          </div>

          <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmapSteps.map((step, i) => (
              <div key={step.phase} className="card-dark p-8">
                <span className="text-label text-signal">0{i + 1}</span>
                <h3 className="font-display text-xl font-medium text-white mt-4 mb-2">
                  {step.phase}
                </h3>
                <p className="text-sm text-signal mb-4">{step.period}</p>
                <p className="text-sm text-steel/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-3 mt-12 text-center">
            <a
              href="/Gantt.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-steel hover:text-signal transition-colors duration-200"
            >
              Full project timeline (PDF)
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="void" />



    </>
  );
}
