'use client';

import Link from 'next/link';
import RevealSection from '@/components/RevealSection';
import { teamLeads, teamMembers, advisors, disciplines } from '@/data/team';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">About</p>
          <h1 className="text-hero text-white max-w-3xl">
            Built to prove something
          </h1>
          <p className="text-xl text-steel max-w-2xl mt-8 leading-relaxed">
            aQuaFoil is not a boat-building club. It is a platform for proving what the next generation of sustainable high-performance engineering can look like.
          </p>
        </div>
      </section>

      {/* Mission */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="reveal">
                <p className="text-label text-signal mb-4">Mission</p>
                <h2 className="text-subsection text-white">
                  Performance without compromise
                </h2>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="reveal reveal-delay-1">
                <p className="text-lg text-steel leading-relaxed mb-6">
                  To build a competition-grade foiling Moth at Queen&apos;s University — demonstrating that sustainable engineering and elite performance are not competing values, but a single design challenge pursued with honesty and precision.
                </p>
                <p className="text-base text-steel/80 leading-relaxed">
                  The conventional wisdom in high-performance design is that sustainability and performance sit in tension. You sacrifice one for the other. aQuaFoil was founded to challenge that assumption — with data, with carbon fibre, and with a foiling Moth on the start line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Affiliation */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-dark p-8">
              <p className="text-label text-signal mb-4">Institution</p>
              <h3 className="font-display text-xl font-medium text-white mb-2">Queen&apos;s University</h3>
              <p className="text-sm text-steel">Kingston, Ontario. One of Canada&apos;s leading research-intensive universities.</p>
            </div>
            <div className="card-dark p-8">
              <p className="text-label text-signal mb-4">Faculty</p>
              <h3 className="font-display text-xl font-medium text-white mb-2">Smith School of Engineering</h3>
              <p className="text-sm text-steel">Faculty support, facilities, and academic oversight for the programme.</p>
            </div>
            <div className="card-dark p-8">
              <p className="text-label text-signal mb-4">Competition</p>
              <h3 className="font-display text-xl font-medium text-white mb-2">SuMoth Challenge 2027</h3>
              <p className="text-sm text-steel">The premier sustainable foiling Moth competition. Our design target and proving ground.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Disciplines */}
      <RevealSection className="section-light section-padding">
        <div className="container-full">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal-deep mb-4">Engineering Disciplines</p>
            <h2 className="reveal reveal-delay-1 text-section text-void">
              Six disciplines. One vessel.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((d, i) => (
              <div key={d.name} className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-light p-8`}>
                <p className="text-data text-3xl text-void mb-2">{d.count}</p>
                <h3 className="font-display text-lg font-medium text-void mb-2">{d.name}</h3>
                <p className="text-sm text-void/60">members dedicated to this discipline</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Team Leads */}
      <RevealSection className="section-dark section-padding">
        <div className="container-full">
          <div className="mb-16">
            <p className="reveal text-label text-signal mb-4">Leadership</p>
            <h2 className="reveal reveal-delay-1 text-section text-white">
              Team leads
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamLeads.map((member, i) => (
              <div key={member.name} className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-dark p-8`}>
                {/* Photo placeholder */}
                <div className="w-16 h-16 bg-slate/30 mb-6 flex items-center justify-center">
                  <span className="text-label text-mid text-[10px]">Photo</span>
                </div>
                <h3 className="font-display text-lg font-medium text-white mb-1">{member.name}</h3>
                <p className="text-sm text-signal mb-1">{member.role}</p>
                <p className="text-xs text-steel">{member.discipline}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Advisors */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="mb-16">
            <p className="reveal text-label text-signal mb-4">Advisors</p>
            <h2 className="reveal reveal-delay-1 text-subsection text-white">
              Faculty &amp; Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, i) => (
              <div key={advisor.name} className={`reveal reveal-delay-${i + 1}`}>
                <div className="signal-line mb-4" />
                <h3 className="font-display text-lg font-medium text-white mb-1">{advisor.name}</h3>
                <p className="text-sm text-signal mb-1">{advisor.title}</p>
                <p className="text-xs text-steel">{advisor.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial text-center">
          <h2 className="reveal text-subsection text-white mb-6">
            Want to be part of the build?
          </h2>
          <p className="reveal reveal-delay-1 text-steel mb-8 max-w-lg mx-auto">
            We are actively recruiting engineers across all disciplines for the 2025–2026 design and fabrication phases.
          </p>
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/join" className="btn-primary">Apply to join</Link>
            <Link href="/partners" className="btn-secondary">Explore partnership</Link>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
