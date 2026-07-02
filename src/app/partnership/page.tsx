'use client';

import Image from 'next/image';
import RevealSection from '@/components/RevealSection';
import SectionDivider from '@/components/SectionDivider';
import ContactBlock from '@/components/ContactBlock';
import { partners, partnershipValues } from '@/data/partners';

export default function PartnershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-editorial">
          <p className="text-label text-signal mb-4">Partnership</p>
          <h1 className="text-hero text-white max-w-3xl">
            Partner with the build.
          </h1>
          <p className="text-xl text-steel max-w-2xl mt-8 leading-relaxed">
            Your brand on a competition vessel, built by the next generation of composite, CFD, and structural engineers — racing at Lake Garda, Italy.
          </p>
        </div>
      </section>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* Value Proposition */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="mb-16">
            <p className="reveal text-label text-signal mb-4">Why Partner</p>
            <h2 className="reveal reveal-delay-1 text-section text-white mb-6">
              What partnership means
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-steel max-w-2xl leading-relaxed">
              Not a donation. Not a logo placement. An 18-month technical partnership built around the same standards your industry is navigating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnershipValues.map((value, i) => (
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
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="void" flip />

      {/* The Proof */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">The Proof</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                Our Standard vs. The Industry
              </h2>
              <p className="reveal reveal-delay-2 text-base text-steel leading-relaxed mt-4">
                Canada&apos;s marine economy: $51B GDP, 446,000 jobs. We&apos;re building the engineering pipeline for its sustainable future.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="reveal reveal-delay-3 overflow-x-auto">
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


      {/* What Partners Get */}
      <RevealSection className="section-dark section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="reveal text-label text-signal mb-4">Partner Benefits</p>
              <h2 className="reveal reveal-delay-1 text-section text-white">
                What you receive
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="reveal reveal-delay-2 space-y-6">
                {[
                  {
                    title: 'Logo Placement',
                    desc: 'On the vessel hull, team apparel, website, and all competition media at Lake Garda. Size and placement scale with partnership tier.',
                  },
                  {
                    title: 'Build Content',
                    desc: 'Professional photography and video across the full 18-month build cycle — fabrication, testing, sea trials, and race day. Delivered for your own use.',
                  },
                  {
                    title: 'Talent Touchpoints',
                    desc: 'Technical info session with the team, lab visit and design review, access to a resume bank, and a structured internship pipeline into CFD, composites, manufacturing, and structural engineering roles.',
                  },
                  {
                    title: 'Technical Collaboration',
                    desc: 'For materials and technology partners: your products used in a real build, with performance data, lifecycle assessment results, and a published engineering case study.',
                  },
                  {
                    title: 'Competition Representation',
                    desc: 'Your brand present at the SuMoth Challenge 2027 in Lake Garda, Italy — alongside 15 teams from 7 nations — and at all university showcases leading up to it.',
                  },
                ].map((benefit, i) => (
                  <div key={benefit.title} className={`py-6 ${i > 0 ? 'border-t border-slate/30' : ''}`}>
                    <h3 className="font-display text-lg font-medium text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-steel/80 leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider topTheme="void" bottomTheme="carbon" />

      {/* Current Partners */}
      <RevealSection className="section-carbon section-padding">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <p className="reveal text-label text-signal">Current Partners</p>
          </div>

          {/* Institutional */}
          <div className="reveal reveal-delay-1 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            {partners.filter(p => p.tier !== 'software').map((partner) => (
              <div key={partner.name} className="card-dark p-8 text-center">
                <div className="w-full h-24 md:h-28 flex items-center justify-center mb-4">
                  {partner.logo ? (
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      <Image src={partner.logo} alt={`${partner.name} logo`} width={320} height={112} className="w-320 h-112 object-contain" />
                    </a>
                  ) : (
                    <span className="font-display text-lg font-medium text-white">{partner.name}</span>
                  )}
                </div>
                {partner.description && <p className="text-xs text-steel">{partner.description}</p>}
              </div>
            ))}
          </div>

          {/* Software */}
          <div className="reveal reveal-delay-2 border-t border-white/10 pt-12">
            <p className="text-label text-signal mb-8 text-center">Software</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {partners.filter(p => p.tier === 'software').map((partner) => (
                <div key={partner.name} className="card-dark p-8 text-center">
                  <div className="w-full h-20 flex items-center justify-center mb-4">
                    {partner.logo ? (
                      <a href={partner.url} target="_blank" rel="noopener noreferrer">
                        <Image src={partner.logo} alt={`${partner.name} logo`} width={160} height={48} className="h-12 w-auto object-contain" />
                      </a>
                    ) : (
                      <span className="font-display text-lg font-medium text-white">{partner.name}</span>
                    )}
                  </div>
                  {partner.description && <p className="text-xs text-steel">{partner.description}</p>}
                </div>
              ))}
            </div>
          </div>

          <p className="reveal mt-12 text-center text-sm text-steel">
            Additional partnership announcements will be made as they are confirmed.
          </p>
        </div>
      </RevealSection>

      <SectionDivider topTheme="carbon" bottomTheme="light" />

      {/* Contact */}
      <RevealSection id="contact" className="section-light section-padding">
        <div className="container-editorial">
          <div className="reveal mb-8">
            <div className="signal-line mx-auto" />
          </div>
          <ContactBlock
            headline="Begin a conversation"
            body="We welcome partnership inquiries from engineering, materials, manufacturing, and sustainability-focused organizations."
            emailSubject="Partnership Inquiry — aQuaFoil"
            theme="light"
          />
        </div>
      </RevealSection>
    </>
  );
}
