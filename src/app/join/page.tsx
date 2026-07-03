'use client';

import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';
import ContactBlock from '@/components/ContactBlock';

const openPositions = [
  { role: 'Composites & Fabrication', dept: 'Manufacturing', desc: 'Composite layup, tooling design, and manufacturing process development.' },
  { role: 'CFD & Hydrodynamics', dept: 'CFD', desc: 'OpenFOAM simulations, foil analysis, and hull hydrodynamics.' },
  { role: 'Structural Analysis', dept: 'Structures', desc: 'FEA modeling, load cases, and structural optimization.' },
  { role: 'CAD & Design', dept: 'Mechanical', desc: 'SolidWorks modeling, component design, and assembly integration.' },
  { role: 'Business & Sponsorship', dept: 'Business', desc: 'Sponsor outreach, partner communication, and team operations.' },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">Join the Team</p>
          <h1 className="text-hero text-white max-w-3xl">
            Build something that will improve your skills
          </h1>
          <p className="text-xl text-steel max-w-2xl mt-8 leading-relaxed">
            Take everything you learn in class and apply it to a real-world project.
          </p>
        </div>
      </section>

      <SectionDivider topTheme="void" bottomTheme="light" />

      {/* Roles */}
      <RevealSection className="section-light section-padding">
        <div className="container-editorial">
          <div className="mb-12">
            <p className="reveal text-label text-signal-deep mb-4">Open Positions</p>
            <h2 className="reveal reveal-delay-1 text-subsection text-void">
              We are recruiting across all Sub-Teams
            </h2>
          </div>

          <div className="reveal reveal-delay-2 space-y-4">
            {openPositions.map((position) => (
              <div key={position.role} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-4 border-b border-light-border">
                <div className="md:w-1/3">
                  <h3 className="font-display text-base font-medium text-void">{position.role}</h3>
                </div>
                <div className="md:w-1/6">
                  <span className="text-label text-signal-deep text-[10px]">{position.dept}</span>
                </div>
                <div className="md:flex-1">
                  <p className="text-sm text-void/70">{position.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="light" bottomTheme="carbon" flip />

      {/* Application CTA */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <ContactBlock
            headline="Apply by email"
            body="Send your program, year, area of interest, and one relevant project or experience. We will follow up with the next recruiting step."
            emailSubject="Joining aQuaFoil"
            theme="dark"
          />
        </div>
      </RevealSection>
    </>
  );
}
